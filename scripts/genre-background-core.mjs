import { artistKey, artistKeys } from './artist-key.mjs';
import { genresFromDesc } from './genre-text.mjs';
import { matchTag, VOCAB } from './genre-vocab.mjs';

export function chooseExactArtist(name, artists = []) {
  const key = artistKey(name);
  const exact = artists.filter(candidate => {
    if (artistKey(candidate.name) === key) return true;
    return (candidate.aliases || []).some(alias => artistKey(alias.name) === key);
  });
  const ids = [...new Set(exact.map(candidate => candidate.id).filter(Boolean))];
  if (ids.length !== 1) return { status: ids.length ? 'ambiguous' : 'not-found', exact: ids.length };
  const candidate = exact.find(row => row.id === ids[0]);
  const score = Number(candidate?.score || 0);
  if (score && score < 80) return { status: 'low-score', exact: 1, score };
  return { status: 'matched', mbid: ids[0], score, exact: 1 };
}

export function selectExperimentSets(sets, registry, unresolvedLimit = 1000, validationLimit = 200) {
  const unresolved = sets.filter(set => !set.genres?.length);
  const occurrences = new Map();
  for (const set of unresolved) {
    for (const key of artistKeys(set.artist)) occurrences.set(key, (occurrences.get(key) || 0) + 1);
  }
  const sorted = rows => [...rows].sort((a, b) => (b.views || 0) - (a.views || 0));
  const selected = [];
  const used = new Set();
  const add = (pool, count) => {
    for (const set of sorted(pool)) {
      if (selected.length >= count || used.has(set.id)) continue;
      selected.push(set);
      used.add(set.id);
    }
  };

  const popularCount = Math.round(unresolvedLimit * 0.3);
  const recurringCount = popularCount + Math.round(unresolvedLimit * 0.4);
  add(unresolved, popularCount);
  add(unresolved.filter(set => artistKeys(set.artist).some(key => (occurrences.get(key) || 0) > 1)), recurringCount);
  add(unresolved.filter(set => artistKeys(set.artist).every(key => (occurrences.get(key) || 0) === 1)), unresolvedLimit);
  add(unresolved, unresolvedLimit);

  const trustedSources = new Set(['manual', 'reviewed', 'catalog', 'discogs']);
  const validationPool = sets.filter(set => {
    if (!set.genres?.length) return false;
    return artistKeys(set.artist).some(key =>
      (registry[key]?.sources || []).some(source => trustedSources.has(source)));
  });
  const validation = sorted(validationPool).slice(0, validationLimit);
  return { unresolved: selected.slice(0, unresolvedLimit), validation };
}

export function tagGenres(tags = []) {
  const best = new Map();
  for (const row of tags) {
    const genre = matchTag(row.tag || row.name);
    if (!genre) continue;
    const count = Number(row.count || 0);
    const current = best.get(genre) || { count: -Infinity, explicit: false };
    best.set(genre, {
      count: Math.max(current.count, count),
      explicit: current.explicit || Boolean(row.genre_mbid || row.genreMbid)
    });
  }
  return best;
}

export function youtubeSignals(row, broadcaster, broadcasterStats) {
  if (!row || row.missing) return { tags: [], description: [] };
  const tagValues = [...new Set((row.tags || []).flatMap(tag => [matchTag(tag), ...genresFromDesc(tag)]).filter(Boolean))];
  const total = broadcasterStats.totals.get(broadcaster) || 1;
  const tags = tagValues.filter(genre => {
    const count = broadcasterStats.counts.get(`${broadcaster}\t${genre}`) || 0;
    return total < 5 || count / total < 0.5;
  });
  return { tags, description: genresFromDesc(row.description || '') };
}

export function buildBroadcasterStats(sets, raw) {
  const totals = new Map();
  const counts = new Map();
  for (const set of sets.filter(row => !row.genres?.length)) {
    totals.set(set.broadcaster, (totals.get(set.broadcaster) || 0) + 1);
    const row = raw.get(set.id);
    const genres = [...new Set((row?.tags || []).flatMap(tag => [matchTag(tag), ...genresFromDesc(tag)]).filter(Boolean))];
    for (const genre of genres) {
      const key = `${set.broadcaster}\t${genre}`;
      counts.set(key, (counts.get(key) || 0) + 1);
    }
  }
  return { totals, counts };
}

export function scoreSet(set, identities, metadata, youtube) {
  const open = new Map();
  const matchedArtists = [];
  for (const key of artistKeys(set.artist)) {
    const identity = identities.get(key);
    if (identity?.status !== 'matched') continue;
    matchedArtists.push(key);
    const genres = tagGenres(metadata.get(identity.mbid)?.tags || []);
    for (const [genre, evidence] of genres) {
      const current = open.get(genre) || { count: -Infinity, explicit: false, artists: 0 };
      open.set(genre, {
        count: Math.max(current.count, evidence.count),
        explicit: current.explicit || evidence.explicit,
        artists: current.artists + 1
      });
    }
  }

  const candidates = new Map();
  for (const [genre, evidence] of open) {
    let confidence = evidence.explicit && evidence.count >= 5 ? 0.92
      : evidence.explicit && evidence.count >= 3 ? 0.88
        : evidence.explicit && evidence.count >= 2 ? 0.82
          : evidence.count >= 8 ? 0.8
            : evidence.count >= 3 ? 0.76
              : evidence.explicit ? 0.7 : 0.62;
    const sources = ['open-metadata'];
    if (youtube.tags.includes(genre)) { confidence = Math.max(confidence, 0.96); sources.push('youtube-tag'); }
    if (youtube.description.includes(genre)) { confidence = Math.max(confidence, 0.94); sources.push('youtube-description'); }
    if (evidence.artists > 1) confidence = Math.max(confidence, 0.94);
    candidates.set(genre, { genre, confidence, sources, count: evidence.count, explicit: evidence.explicit });
  }

  for (const genre of youtube.tags) {
    if (!candidates.has(genre)) candidates.set(genre, {
      genre, confidence: youtube.description.includes(genre) ? 0.78 : 0.64,
      sources: youtube.description.includes(genre) ? ['youtube-tag', 'youtube-description'] : ['youtube-tag']
    });
  }

  const ranked = [...candidates.values()]
    .sort((a, b) => b.confidence - a.confidence || VOCAB.indexOf(a.genre) - VOCAB.indexOf(b.genre));
  const selected = ranked.filter(row => row.confidence >= 0.6).slice(0, 3);
  const top = selected[0]?.confidence || 0;
  const decision = top >= 0.9 ? 'auto-accept' : top >= 0.6 ? 'review' : 'unknown';
  return {
    genres: selected.map(row => row.genre),
    confidence: Number(top.toFixed(2)),
    decision,
    evidence: selected,
    matchedArtists
  };
}

export function validationMetrics(rows) {
  const decided = rows.filter(row => row.result.decision === 'auto-accept');
  let correct = 0;
  for (const row of decided) {
    if (row.result.genres.some(genre => row.expected.includes(genre))) correct += 1;
  }
  return {
    total: rows.length,
    autoAccepted: decided.length,
    agreement: decided.length ? Number((correct / decided.length).toFixed(4)) : null,
    disagreements: decided.length - correct
  };
}

export function promoteVerifiedCandidates(rows, minimumConfidence = 0.9) {
  const promoted = {};
  for (const row of rows || []) {
    if (!row?.id || row.result?.decision !== 'auto-accept') continue;
    const evidence = (row.result.evidence || []).filter(item => {
      const sources = new Set(item.sources || []);
      return Number(item.confidence || 0) >= minimumConfidence
        && sources.has('open-metadata')
        && (sources.has('youtube-tag') || sources.has('youtube-description'));
    });
    const genres = [...new Set(evidence.map(item => matchTag(item.genre)).filter(Boolean))]
      .sort((a, b) => VOCAB.indexOf(a) - VOCAB.indexOf(b));
    if (!genres.length) continue;
    promoted[row.id] = {
      genres,
      confidence: Math.min(...evidence.map(item => Number(item.confidence.toFixed(2)))),
      evidence: evidence.map(item => ({
        genre: matchTag(item.genre),
        confidence: Number(item.confidence.toFixed(2)),
        sources: item.sources
      }))
    };
  }
  return promoted;
}
