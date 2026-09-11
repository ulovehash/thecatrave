# Topic dossiers — накопленный ресерч по кандидатам в темы

Дополняет `TOPIC-RESEARCH.md` и `KEYWORD-METHOD.md`. Те два файла говорят, *как*
собирать и *как* выносить вердикт. Этот — *куда складывать то, что уже собрано*,
чтобы стадии не переделывались с нуля на каждом заходе.

## Как этим пользоваться

Перед стадией 1 по любому кандидату — сначала прочитать его запись здесь, если
она есть.

- Если стадия уже закрыта и данные не протухли (SERP/related — раз в ~90 дней,
  volume можно не обновлять, если порядок величины не критичен) — не повторять
  Ahrefs-вызов, использовать записанное.
- Продолжать с первой незакрытой стадии, а не с начала.
- Кандидаты, по которым стадия 6 дала «не писать» или «писать уже», тоже
  остаются здесь — это не только очередь, это ещё и защита от повторного
  ресерча одного и того же отказа.
- `keywords/<page>.json` — это выход шага 6 `KEYWORD-METHOD.md` для тем,
  получивших вердикт «писать» и реализованных. Этот файл — на уровень выше:
  сырые находки по кандидату, независимо от вердикта.
- Стадия 6 (Validation) выносится отдельным проходом, не тем, кто собирал
  стадии 1–5 (см. промпт валидации в `TOPIC-RESEARCH.md`). Пока стадия 6 не
  пройдена отдельно — у темы нет вердикта, только заметки, и это фиксируется
  явно, а не подразумевается.
- После каждой сессии, даже частичной, — дописать/обновить запись ниже:
  дата, что сделано, что нет, сколько вызовов Ahrefs ушло.

Кандидатов в темы искать по `KEYWORD-METHOD.md` §1 (тема владельца, SERP
конкурентов) — никогда по памяти. Собственные позиции thecatrave.com для
каждой новой темы не снимать. Каталог (62 877 сетов)
больше не источник кандидатов и не критерий отбора темы — см. правку §1/§5
`KEYWORD-METHOD.md`: он остаётся активом для самой статьи (цифры для цитаты),
но не для решения, писать ли про тему. Ловушки §3 того же файла (navigational
brand queries, ambiguous words, wrong-language demand, wrong audience/
production intent) применимы к любому кандидату — производственный контент
(сэмплы, дровка, MIDI, курсы) не пишем независимо от объёма, см. `WRITING.md`.

---

## Boiler Room
- Стадии: 1–5 из 6 (страна — только US). Стадия 6 (Validation) не пройдена.
- **1. Сиды.** thecatrave.com не ранжируется ни по одному запросу, содержащему
  «boiler» — 0 совпадений.
- **2. Matching terms.** Голова «boiler room» — 14 000 US / 44 000 global, но
  термин перегружен коллизиями сильнее, чем любая тема из прошлых досье:
  фильм 2000 года, HVAC/промышленные бойлерные, финансовый скам-термин
  «boiler room» (бойлерная = мошеннический call-центр — от него и произошло
  название фильма), комнаты в видеоиграх (RE2/RE7/RE9, Tarkov, Stardew Valley,
  Alone in the Dark, Luigi's Mansion 3, Black Ops 6, Backrooms), бары/рестораны
  «The Boiler Room» в десятках городов США. Из 250 идей (весь список,
  match_mode=terms) музыкально релевантное — меньшинство: разрозненные
  городские ивент-запросы (Chicago 600, под-мостом-ивент 90, Nottingham/
  Sydney/Köln и другие — в основном global, почти без US-объёма) и
  информационный кластер «what is/meaning» (расписан в related/mining ниже).
  Кластер сравнений по другим темам не применим. Другие языки: «was ist
  boiler room»/«…ein boiler room» (40+80 gv, DE), «boiler room перевод»
  (20 gv, RU) — не преследуем. Репутационные запросы («boiler room palestine
  controversy», «why boycott boiler room») присутствуют, но не как контент-
  угол.
- **3. Related terms.** also_rank_for дал реальный сигнал: «whats a boiler
  room» 300/500(!), «what is a boiler room set» 250/400, «boiler room chicago»
  600/600 (венью, не платформа), «boiler room rave» 150/250, «boiler room
  paris» 20/1300 (почти весь спрос вне US). also_talk_about — в основном шум
  (боилерплейт сайтов, топонимы, общие слова вроде «privacy notice», «room»,
  «angeles»); единственный релевантный сигнал — «diy sound» (DIY Sound
  System, нью-йоркский саунд-систем краю, смежный breakbeat/jungle-сцене).
- **4. SERP shape and PAA** (US). «boiler room» (14 000): **0 слотов** под
  статью — топ-10 органики это boilerroom.tv (DR72, 2226 RD), IMDb (фильм,
  DR94), Wikipedia (фильм), YouTube-канал, Instagram, Rotten Tomatoes ×2,
  Reddit-тред. 100% бренд + фильм + соцсети. PAA: What is the boiler room? /
  Is a boiler room a rave? / Where is the boiler room in NYC? / Why is it
  called a boiler room? — «whats a boiler room» (300): ловушка неоднозначного
  слова подтверждена буквально — AI Overview и оба редакционных слота
  отвечают про **не ту** boiler room: Runwise (HVAC-гайд, DR40, 0 RD,
  позиция 7) и raadmanburner (про финансовый скам, DR8, 0 RD, позиция 8).
  Музыкальный смысл — только Reddit-тред (поз. 3, 490 визитов) и сам
  boilerroom.tv. Не таргетировать эту формулировку. — «what is a boiler room
  set» (250): чистая, по теме выдача. **2 слота**: UP Magazine (DR15, 1 RD,
  поз. 8, 41 визит) и Point Blank Music School (DR62, 4 RD, поз. 10,
  134 визита). Reddit r/EDM держит поз. 2 с 490 визитами — реальный спрос на
  нормальный объясняющий текст. — «best boiler room sets» (500, найден на
  стадии 5, добит SERP для полноты): **2 слота**: Point Blank Music School
  (DR62, 4 RD, поз. 3, 134 визита) и whynow.co.uk (DR54, 3 RD, поз. 7,
  47 визитов). Остальное — Reddit×2, Facebook×2, YouTube×2, Instagram, TikTok,
  собственная страница чартов boilerroom.tv.
- **5. Competitor mining** (mode=exact). **Point Blank Music School** —
  самый сильный конкурент по теме в целом: поз. 2–3 по «best boiler room
  sets» (500, 78 визитов) И поз. 7 по «boiler room set» (700(!), 17 визитов)
  И поз. 3 по «what is a boiler room set» (250, 9 визитов) плюс хвост
  «best boiler room set(s)»/«top boiler room sets». Одна статья закрывает
  несколько углов. **UP Magazine** (DR15, самый слабый из трёх) — поз. 1 по
  «what is a boiler room set» (250, 18 визитов), плюс хвост «boiler room
  rave»/«style»/«outfit(s)» — угол одежды/дресс-кода Boiler Room, самая
  выигрышная по авторитету страница из всех. **doubleclap.dance** — поз. 1 по
  «what is a boiler room set» (по AI Overview) и «boiler room theme»/«…meaning
  dj» (40/80/30), но слабо (поз. 8–11) держит «boiler room meaning»
  (**250 vol, никем не занята прочно**). Новые ключи, пойманные только здесь
  (стадии 2–4 их не вернули): «boiler room set» (700 — крупнейший
  по-теме ключ во всём досье), «best boiler room sets» (500), «boiler room
  meaning» (250, не занята), «boiler room set meaning» (90), «boiler room
  meaning dj» / «dj meaning» (80/30), «boiler room theme» (40), «boiler room
  outfit(s)» (угол моды).
- Чего нет: PAA для «best boiler room sets» и «boiler room meaning» отдельно
  не сняты (собраны только по трём запросам выше); только US, UK/другие
  страны не проверялись; SERP по «boiler room outfit/style» (мода) не снята
  напрямую — угол виден только через competitor mining; вопрос про owner's
  standing (§5 `KEYWORD-METHOD.md`) — credibility писать про Boiler Room
  именно у этого автора (не производственная, а сценовая/документальная) —
  не задан.
- Ahrefs: ~11 вызовов (site-explorer-organic-keywords ×1, keywords-explorer-
  overview ×1, matching-terms ×1, related-terms ×2, serp-overview ×4,
  site-explorer-organic-keywords exact ×3).
- **Дозакрыто 2026-09-10** (2 вызова: serp-overview ×1, overview ×1, US).
  PAA по «best boiler room sets» дословно: What is the best Boiler Room set
  ever? / What is the most viewed Boiler Room set? / What is the Boiler Room
  controversy? / What are some of the best Boiler Room sets to study to?
  Объёмы FAQ-кандидатов (US/global): charli xcx boiler room 700/1100 (TP 350,
  свой parent topic — отдельный интент, но крупный), boiler room controversy
  70/200, best boiler room sets of all time 90/200, most viewed boiler room
  set 10/30, most popular boiler room set 10/20, boiler room palestine 10/20,
  why boycott boiler room 0/10. Каталог: 8 206 сетов Boiler Room (2012–2026)
  с просмотрами и лайками — позволяет ранжирование по измеренным данным.
- Вердикт: не выносился. Владелец 2026-09-10 дал структуру статьи «Best Boiler
  Room Sets of All Time» — запрос на написание, стадия 6 формально не пройдена.

### Черновая карта ключей для «best boiler room sets» (шаг 6 KEYWORD-METHOD.md, до вердикта)

Формат — как в `keywords/*.json`. Не записана в `keywords/` и не привязана к
странице: стадия 6 (Validation) `TOPIC-RESEARCH.md` не пройдена, страницы не
существует. Черновик — чтобы не пересобирать при переходе к стадии 6.

**Проверка интента (доснято отдельно).** SERP по всем четырём ключам с самым
большим объёмом — «boiler room set» (1200), «boiler room sets» (450),
«boiler room dj set» (300), «best boiler room sets» (1100) — чистые, без
HVAC/скам/фильм-коллизий: везде boilerroom.tv, YouTube-канал, Reddit,
SoundCloud, редакционные листиклы. Ни одного результата про промышленные
бойлерные или про финансовый boiler room ни в одной из четырёх выдач.

Два новых конкурента, пойманных при этой проверке (не было в исходном
досье): **dirtydiscoradio.com** (DR30) — #1 по «boiler room dj set» (100,
9 визитов), «boiler room dj setup» (20); слабый хвост по «best boiler room
sets»/«boiler room sets». **zipdj.com** (DR37, 1 RD) — «10 Best Boiler Room
Sets of All Time (2026 Rankings)», держит только поз. 10 по «boiler room set»
(700, 9 визитов) — почти не индексируется по объёму, слабейший конкурент из
всех пяти найденных.

Итого конкурентов по кластеру: Point Blank Music School (DR62, 4 RD —
сильнейший, держит почти все варианты), whynow.co.uk (DR54, 3 RD),
dirtydiscoradio.com (DR30), zipdj.com (DR37, 1 RD), UP Magazine (DR15, 1 RD —
другой интент, «what is»). Все — single-digit RD или низкий DR: winnable по
правилу §4 `KEYWORD-METHOD.md`.

```json
{
  "page": "TBD — не создана, ждёт вердикта стадии 6",
  "seed": "boiler room sets",
  "source": "ahrefs keywords-explorer, September 2026, global volume",
  "terms": [
    { "term": "boiler room set", "volume": 1200 },
    { "term": "best boiler room sets", "volume": 1100 },
    { "term": "boiler room sets", "volume": 450 },
    { "term": "boiler room dj set", "volume": 300 },
    { "term": "best boiler room", "volume": 150 },
    { "term": "best boiler rooms", "volume": 100 },
    { "term": "best boiler room set", "volume": 80 },
    { "term": "top boiler room sets", "volume": 50 }
  ],
  "expansion_checked": "keywords-explorer-matching-terms (terms) и keywords-explorer-related-terms (also_rank_for/also_talk_about) на 'boiler room', site-explorer-organic-keywords exact на 3 конкурентах, September 2026",
  "rejected": [
    {
      "term": "boiler room",
      "volume": 44000,
      "why": "0 слотов под статью в топ-10 — boilerroom.tv, IMDb, Wikipedia (фильм), YouTube, Instagram, Rotten Tomatoes, Reddit. Бренд плюс фильм плюс соцсети"
    },
    {
      "term": "whats a boiler room",
      "volume": 500,
      "why": "ловушка неоднозначного слова: AI Overview и оба редакционных слота — про HVAC-бойлерные и финансовый скам, не про музыку"
    },
    {
      "term": "boiler room chicago",
      "volume": 600,
      "why": "конкретный бар/венью в Чикаго с этим названием, не платформа"
    },
    {
      "term": "boiler room paris",
      "volume": 1300,
      "why": "почти весь объём вне US, город-специфичный ивент-запрос"
    },
    {
      "term": "what is a boiler room set",
      "volume": 400,
      "why": "объясняющий интент, не рейтинг — выигрывают другие страницы (UP Magazine, doubleclap.dance). Кандидат на отдельную статью, не на эту"
    },
    {
      "term": "boiler room meaning",
      "volume": 1300,
      "why": "тот же случай, крупнее чем казалось (1300 global) и никем прочно не занят — отдельная страница-кандидат, не эта"
    }
  ]
}
```

## Breakcore
- Стадии: 1–5 из 6. Стадия 6 (Validation) не пройдена — вердикта нет.
- **1. Сиды.** Сайт не ранжируется ни по одному запросу темы. (Счёт сетов в
  каталоге проверялся в исходном проходе как критерий — по правке
  `KEYWORD-METHOD.md` §1/§5 каталог больше не критерий отбора темы, запись
  сохранена для истории.)
- **2. Matching terms.** Режим terms на голом «breakcore», порог ≥30 global,
  взят весь список (98 строк). Проход в режиме phrase по двухсловной форме не
  запускался — он дал бы подмножество того же списка. Классы: голова 12 000;
  продакшен 6 030 (57% хвоста: samples 1 300, drum kit 700, sample pack 600,
  drums 400, maker 300); слушатель/инфо 2 790 (26%: what is breakcore 400,
  breakcore music 400, breakcore artists 400, definition 150); визуальная
  коллизия 760 (7%: pfp, aesthetic, wallpaper); другие языки 430 (4%);
  мемная коллизия 340 (3%: windows breakcore, 404 breakcore); конкретные
  треки 260 (2%). Parent topic «breakcore samples» = «breakcore». Кластер
  сравнений (jungle/dnb/breakbeat vs breakcore) — 9 формулировок, 610 global.
- **3. Related terms.** also_rank_for пуст и на top10, и на top100 — топ
  держат платформенные URL. also_talk_about (только музыкальные сущности):
  amen break 17 000, venetian snares 1 800, happy hardcore 1 500, IDM 1 100,
  hardcore techno 1 000, digital hardcore 500, industrial noise 500, ragga
  dancehall 300, energy flash 250, breakbeat hardcore 150, club cyberia 100.
- **4. SERP shape and PAA** (US only — UK не снималась). «breakcore» (7 400):
  1 слот под статью, слабейшая allmusic #7 (2 RD, 375 визитов), остальное —
  YouTube×4/Reddit/Spotify/X/AI Overview. «what is breakcore» (200): 5 слотов,
  слабейшие wknc #5 и thetonearm #9 (DR 41–42, по 2 RD), плюс
  Wikipedia/Reddit/RYM/AI Overview. «jungle vs breakcore» (90): 2 слота,
  beloit #5 (0 RD), imusician #9 (1 RD); выдачу держат Reddit (из 6 тредов) /
  AI Overview / TikTok / Wikipedia / Spotify. PAA дословно —
  breakcore: What actually is breakcore? / Why do autistic people like
  breakcore? / What is the most famous breakcore song? / Is Femtanyl a
  breakcore artist? — what is breakcore: Is breakcore noise music? / Who is
  the most popular breakcore artist? / Why is breakcore called that? / What
  bpm is breakcore? — jungle vs breakcore: Are jungle and breakcore the same
  thing? / Is jungle the same as breakbeat? / Are jungle and DnB the same? /
  Are DnB and breakcore the same?
- **5. Competitor mining** (mode=exact). Wikipedia /Breakcore — ~620 визитов
  US/мес, 534 из них с головы на 2-й позиции; #1 по «breakcore artists» (200),
  но 1 визит. wknc — лучшая редакционная статья по «what is breakcore»,
  ~18 визитов/мес суммарно. Доп. хвост сверх стадий 2–4: «brake core» 40,
  «break core» 30, «best breakcore artists» 30.
- Чего нет: ответ на вопрос из §5 `KEYWORD-METHOD.md` — есть ли у owner'а
  статус в этом жанре (родственном jungle/hardcore); выдача по UK.
- Ahrefs-вызовов: не зафиксировано в исходном проходе — фиксировать со
  следующего раза.

## Сайты для меломанов (Every Noise, Ishkur, «music discovery»)
- Стадии: 2 из 6 (Matching terms целиком, SERP shape частично). Стадия 6 не
  пройдена.
- **1. Сиды.** Не пройдена.
- **2. Matching terms.** Навигационные (не наши): radio garden 97 000, every
  noise at once 3 700, gnoosic 3 300, everynoise 2 500, ishkur 1 000 global —
  поиск самого сайта. Коллизии: «music websites» (21 000, KD 93, parent Apple
  Music), школьные/нотные/стоковые запросы — не наша аудитория. DJ-угол:
  «websites for djs» пусто от 40 global. Живой интент подборки: best music
  websites 200 (500 global), KD 12; top music websites 100 (150), KD 14;
  websites for music lovers 40 (100), KD 5; every noise at once alternative
  60 (250), KD нет — Every Noise не обновлялся с конца 2023.
- **3. Related terms.** Не пройдена.
- **4. SERP shape and PAA.** Частично: «cool music websites» — 4 слота под
  списки-статьи, слабейшая epikmusicvideos (DR 19, 0 RD, позиция 2); топовые
  списки — 60–100 визитов/мес. PAA не снималась.
- **5. Competitor mining.** Не пройдена.
- Риск каннибализации: `/how-to-find-new-music` уже держит «music discovery
  websites» (300) и «music discovery tools» (70); на 3-м месте по «cool music
  websites» — статья с тем же интентом («Cool Sites for Real Music
  Discovery»). Перед выбором между отдельной страницей и разделом гайда нужна
  выдача по «music discovery websites» — не снята, это и есть следующий шаг.
- Ahrefs-вызовов на весь блок: 12.

---

## Фестивали (направление владельца, 2026-09-10)

Владелец хочет собирать трафик гайдами по фестивалям. Шаг 0: в
`TAKEN-KEYWORDS.md` фестивалей нет. Стадии пройдены: 1 (затравки), 2
(overview по голове и информационным формам), 4 (SERP по лучшей
информационной форме). Стадии 3, 5 и 6 не пройдены, вердикта нет.

**Главная ловушка.** Головы фестивалей навигационные (`KEYWORD-METHOD.md` §3):
tomorrowland 361 000, coachella 520 000, lollapalooza 348 000, glastonbury
191 000. В выдаче официальные сайты, Wikipedia и соцсети. Статья может встать
только по информационным формам («what is», «where», «cost») и по
спискам-хабам.

**Затравки из расширения** (also_rank_for top 100 по tomorrowland и burning
man, matching terms «festival» ≥20 000, related по edm/techno festival):
Burning Man, Tomorrowland, Glastonbury, EDC, Fyre, Roskilde, Fusion, Boom,
Nocturnal Wonderland, Movement Detroit, Time Warp, North Coast, Insomnia.
**Добавлены по названию** (расширение их не вернуло): Ultra, Creamfields,
Awakenings, Sónar, Dekmantel, Defqon.1, Untold, Exit, Coachella, Lollapalooza.

- **Burning Man.** Информационный срез: what is burning man 22 000 (TP 72 000),
  what is burning man festival 12 000, where is burning man 8 300, black rock
  city 7 800, what happens at burning man 3 600, how long 2 000, cost/how much
  около 1 900. SERP «what is burning man»: explorehere.app (DR19, 0 RD, 5 607
  визитов, поз. 2), inthesetimes (2 RD), Reddit, Facebook answers,
  journal.burningman (0 RD), sfih.us (DR10, 0 RD). PAA: What is the purpose of
  the Burning Man? / How much does it cost to attend? / Why is Burning Man so
  controversial? / What actually happens at Burning Man? Самые слабые
  конкуренты при самом большом информационном спросе пула. Это не музыкальный
  фестиваль в первую очередь: вопрос standing открыт.
  Дополнено 2026-09-10: mayan warrior 3 600, robot heart 700, is burning man a
  music festival 300, burning man 2026 8 800, tickets 2 700, history 250
  (TP 35 000). SERP «what happens at burning man»: Reddit, sfih.us (0 RD),
  Minot Daily News (0 RD), Quora, Facebook. В каталоге сетов с Burning Man
  ноль. Структура по запросу владельца: `burning-man-research.md`.
- **Tomorrowland.** Where is 6 000, lineup 5 600, what is 4 000 (TP 12 000),
  how much are tickets 1 400. SERP «what is tomorrowland»: официальный сайт ×3,
  Wikipedia (267 RD), Instagram, magicoftomorrowland (374 RD). Статейного
  слота практически нет.
- **EDC.** edc las vegas 25 000 (TP 75 000), what is edc 7 200, electric daisy
  carnival 4 400. «what is edc» — коллизия: EDC = everyday carry (ножи,
  снаряжение), фестиваль только на 6-м месте (Wikipedia). SERP «edc las vegas»
  не снят.
- **Fyre Festival.** 100 000 (TP 38 000). SERP: Reddit, Elle «Fyre Festival
  Explained» (1 RD, 8 710 визитов), Forbes (16 RD), Stereogum (2 RD),
  LinkedIn, YouTube. PAA: Why was Fyre Festival a failure? / Did anyone get
  refunded? Статейная выдача со слабыми RD, но это история провала, а не
  музыкальная тема.
- **Glastonbury.** 191 000 навигационный, what is glastonbury 500. SERP (GB):
  официальный сайт (7 669 RD), Wikipedia, Instagram, Guardian, Facebook,
  glastonburytips (371 RD). Шансы низкие.
- **Movement Detroit.** 3 900 (TP 6 300). SERP: официальный, edmidentity
  (3 RD), Reddit, Instagram, Mixmag «How to survive Movement Detroit» (4 RD),
  SeatGeek. PAA: What kind of music is Movement? / How much does it cost?
  Выигрываемо и ближе всех к профилю сайта (детройтское техно).
- **Boom.** 24 000 global (US 1 200). SERP: официальный (778 RD), соцсети,
  Wikipedia (44 RD), MusicFestivalWizard. Статей нет, навигационный.
- **Roskilde.** 56 000 global, спрос датский, выдача: официальные датские
  страницы. Ловушка чужого языка.
- **Nocturnal Wonderland.** 5 400. SERP: официальный, Reddit, форумы,
  Instagram, SoundCloud. Статей нет, PAA «Is Nocturnal Wonderland worth it?».
- **Хабы-списки.** best electro music festivals in europe 4 000: electricsunsets
  (DR14, 0 RD, 708 визитов, поз. 2), new-east-archive (0 RD), hotels.com
  (0 RD), ticketswap (0 RD), traveltriangle (1 RD). biggest edm festivals 700:
  Reddit, edmtrain (63 RD, 5 226 визитов), doubleclap (1 RD), thedjrevolution
  (1 RD), MFW (3 RD), borninstockholm (DR20, 1 RD, 551 визит). edm festivals
  5 100, music festivals 87 000 (parent «festivals near me», локальный).
- **Добавленные по названию** (только объёмы, SERP не снимались): creamfields
  43 000 (в основном UK), ultra music festival 13 000 (TP 6 800), untold
  11 000, defqon 1 11 000, dekmantel 8 000, awakenings 6 500, exit 5 500,
  sonar 3 900.
- Каталог: канал Dekmantel (77 сетов), Outlook Festival (12). Счётчики
  фестивальных сетов по имени — в отчёте владельцу за 2026-09-10.
- Ahrefs: 21 вызов (related ×3, matching ×1, overview ×3, serp ×14).

---

## Пул кандидатов 2026-09-10 (после Boiler Room)

Контекст: владелец 2026-09-10 разрешил продюсерский интент, если в топе по
частотным продюсерским запросам стоят редакционные статьи, а не туториалы и
файлы. Как делать звук сайт по-прежнему не объясняет и файлы не раздаёт.
Правка `WRITING.md` ещё не внесена: формулировка показана владельцу.

**Сняты как занятые (владелец, 2026-09-10).** Эти головы уже заявлены в
`TAKEN-KEYWORDS.md`: amen break (breakbeat, dnb), drum and bass artists (dnb),
brostep (dubstep), dnb/dubstep/uk garage bpm (три гайда), big beat
(breakbeat). Как новые кандидаты не рассматриваются, ресерч по ним не вести.
Записи ниже оставлены как история. Живыми остаются acid house, drum breaks,
dubstep artists, what is a boiler room set и breakcore.

**Глубина всех кандидатов одинаковая:** стадия 1 (общие затравки), стадия 2
(matching terms с классами), стадия 4 (только SERP головы, US). Стадии 3, 5 и
6 не пройдены. Вердикта нет ни по одному.

**Стадия 1, затравки (общие для пула).** thecatrave.com ранжируется только по
breakbeat-кластеру: «breakbeat» 1 800 (поз. 26), «arti breakbeat» 1 400
(поз. 7, индонезийский спрос), «breakbeat music» 300 (поз. 1). Остальные
гайды в Ahrefs почти не видны. `also_talk_about` по голове пяти гайдов: amen
break 17 000, acid house 6 000, progressive house 6 900, drum breaks 2 800,
big beat 1 700, funky drummer 1 000. `also_rank_for` (top 100): dnb meaning
6 400, dnb bpm 2 400, drum and bass artists 2 300, dubstep artists 1 700,
brostep 1 100, dnb radio 800.

- **Acid house.** Стадия 2: голова 6 000, «what is acid house?» 6 100 (US
  3 500), «acid house music» 500. Коллизии мелкие: фильм и книга «The Acid
  House» (1 000), бытовая химия. Продакшен около 300 (samples, loops, presets).
  Стадия 4: Wikipedia (326 RD), Spotify, Reddit, RYM (5 RD, поз. 6), YouTube-
  плейлист, Apple Music, MasterClass (3 RD, поз. 10). PAA: Why is it called
  acid house? / Who is considered the father of acid house? / Was acid house
  invented in India? / What type of music is acid house? Каннибализации нет:
  термин не заявлен ни в одной карте `keywords/`. У `uk-electronic` открыт
  known gap по Acid Tracks.
- **Acid house против house music (владелец спросил, не поджанр ли это,
  2026-09-10).** Голову родительского жанра в первом проходе не проверяли:
  это пробел метода. Дозакрыто (overview ×1, serp ×2, US).
  - Объёмы: house music 58 000 (US 21 000), what is house music 10 000,
    house music genre 1 500 (TP 8 000), history of house music 450 (TP 8 200).
    Поджанры со своим parent topic: deep house 30 000, tech house 11 000,
    acid house 6 000 + what is acid house? 6 100, chicago house 1 800.
    uk house music 70.
  - SERP «house music»: Wikipedia (893 RD), Armada «What Is House Music?»
    (17 RD, 1 613 визитов), Spotify-плейлист, Splice «What is House Music?
    History, Artists, and Subgenres» (12 RD, 897 визитов), Reddit, SoundCloud,
    Billboard «50 Best House Songs» (40 RD). Три редакционных места, слабейшее
    с 12 RD. PAA: What is considered house music? / What is the biggest house
    song ever? / Is house music LGBTQ? / What's the most popular house music?
  - SERP «what is acid house?»: только страницы про acid house: Wikipedia,
    Museum of Youth Culture (31 RD), MasterClass (3 RD), Music Gateway (7 RD),
    RYM (5 RD), Britannica (24 RD). Ни одной общей страницы про хаус. PAA:
    What's the difference between house and acid house?
  - Вывод по данным (не вердикт): у acid house и у house music разные parent
    topic и непересекающиеся выдачи, то есть это два разных интента. House
    music — отдельный кандидат уровня жанрового гайда, в `TAKEN-KEYWORDS.md`
    его нет. Правило на будущее: у кандидата-поджанра проверять голову
    родительского жанра.
- **Amen break.** Стадия 2: голова 17 000. Производственный хвост (sample
  3 200, download 1 100, sample pack 900, midi, vst, sheet music, waveform)
  около 7 700, остальное слушательское. Стадия 4: Wikipedia (497 RD),
  samplefocus (файл), Reddit r/drums, ethanhein (8 RD, поз. 6), elephantdrums
  (DR13, поз. 8, урок для барабанщиков), YouTube Mixmag (48 RD), rhythm-lab
  (4 RD, файлы). PAA: What does Amen Break mean? / Why is the Amen Break so
  famous? / What songs use Amen Break? / What is the most famous drum break of
  all time? **Каннибализация:** «amen break» заявлен в `keywords/breakbeat.json`
  и `keywords/drum-and-bass.json`, но сайт по нему не ранжируется вообще.
- **Самые известные брейки (drum breaks).** Стадия 2: «drum breaks» 2 800
  (смешанный, в основном поиск файлов), «famous drum breaks» 150, «what are
  drum breaks» 100, «best drum breaks» 70, «most sampled drum breaks» 50.
  Коллизия с тормозами «drum brakes». Стадия 4: Reddit (коллекция на
  скачивание), магазины сэмплов ×4, Micro-Chop substack «100 Drum Breaks»
  (0 RD, поз. 4, редакционный). PAA: What are the top 5 drum breaks of all
  time? / What is the name of the most famous drum break? Под новое правило
  владельца подходит как история без файлов.
- **Drum and bass artists.** Стадия 2: голова 2 300, best 300, top 150,
  uk 100, famous 100. Стадия 4: самая слабая выдача пула: dnb2day.ru (DR0,
  0 RD), bestdrumandbass (0 RD), ticketfairy (0 RD), drumandbassuk (DR24).
  PAA: Who is the biggest DNB artist? / Who are some of the best drum and bass
  artists? **Каннибализация:** термин заявлен в `keywords/drum-and-bass.json`.
- **Dubstep artists.** Стадия 2: голова 1 700, best 300. Стадия 4: Reddit,
  Wikipedia list (24 RD), iflyer (1 RD), themetalverse (5 RD, поз. 6), IMDb,
  firstfloor substack (1 RD). PAA: Who is the biggest dubstep artist? / Who
  are the OGs of dubstep? Каннибализации нет: «artists» в `dubstep.json` не
  заявлен.
- **Brostep.** Стадия 2: голова 1 100, what is 300, brostep vs dubstep 380
  (с обратным порядком слов). Стадия 4: Reddit, Wikipedia Dubstep, RYM
  (5 RD), Spotify, Dazed (15 RD, поз. 7), Fandom (0 RD). PAA: Is Skrillex
  brostep or dubstep? / What's the difference between brostep and dubstep?
  **Каннибализация:** «brostep» заявлен в `keywords/dubstep.json`, гайд
  упоминает термин трижды.
- **BPM по жанрам** (DJ и продюсерский интент). Стадия 2 (overview списком):
  dnb bpm 2 400 (US 40), techno bpm 1 600, house music bpm 1 100, dubstep bpm
  800, drum and bass bpm 700, uk garage bpm 450, jungle bpm 250, breakbeat bpm
  150, в сумме около 7 450 global. «bpm of music genres» 0. Стадия 4 (drum and
  bass bpm): Reddit, Wikipedia, edmprod (6 RD), mixgraph (1 RD), BPM Supreme,
  melodycraft (DR8, 1 RD). Dubstep bpm: dj.studio (5 RD), Ableton Learning
  Music (98 RD), digitaldjtips. **Каннибализация:** dnb/dubstep/uk garage bpm
  заявлены в трёх гайдах.
- **Boiler room meaning / what is a boiler room set.** Стадия 2 (overview):
  boiler room meaning 1 300 global (US 250), parent topic «what is a boiler
  room set». Стадия 4 (boiler room meaning, дозакрыто сегодня): коллизия
  подтверждена. Wikipedia (финансовый скам, 153 RD), dictionary.com,
  Cambridge, Merriam-Webster, Runwise (HVAC) в AI Overview, Wikipedia про
  бойлерную. Музыкальный смысл: Reddit r/EDM «boiler room style» (490 визитов),
  boilerroom.tv/about (26 RD), TikTok. PAA: What is boiler room slang for? /
  What is the concept of boiler room? / What is the boiler room party? / Is a
  boiler room a rave? Остальное — в записи «Boiler Room» выше.
- **Breakcore.** Стадии 1–5 закрыты ранее, см. запись выше. Для сравнения в
  пуле используется только глубина стадий 1, 2 и 4.
- **Big beat.** Стадия 2: голова 1 700. Коллизии: песня Billy Squier «The Big
  Beat» (1 100), Big Beat Records, опечатки «big bear», тарелки Paiste.
  Слушательская часть около 200. Стадия 4: Wikipedia (209 RD), Reddit,
  Instagram лейбла, John's Guide substack (1 RD, поз. 7), Apple, bigbeat.com,
  NPR (142 RD). PAA: What happened to big beat? / Is Chemical Brothers big
  beat? / Who started big beat?
- **Отброшено на стадии 2: dnb meaning** (6 400). Ловушка неоднозначного
  слова: Urban Dictionary (сленг), ставки «draw no bet», медицинская степень
  DNB, бизнес. Музыкальная часть («dnb music meaning» 200) — меньше 5%.
  Выдача: Urban Dictionary, Wiktionary, AcronymFinder.
- Ahrefs: 24 вызова (organic-keywords ×1, related-terms ×2, matching-terms ×8,
  serp-overview ×11, overview ×2).

---

## История немецкой электронной музыки (German electronic music)
- Дата: 2026-09-10. Стадии: 1–5 из 6 (страна — только US). Стадия 6
  (Validation) не пройдена. Задумано по образцу `uk-electronic-music-evolution.html`.
- **1. Сиды.** thecatrave.com не ранжируется ни по одному запросу с german /
  berlin / kraut / deutsch / kraftwerk — 0 строк.
- **2. Matching terms.** «german electronic music» (terms, топ-40): голова
  70 US / 90 global, «german electronic music artists» 40/150, «german
  krautrock band embraced electronic music» 10/20 (кроссворд), остальные
  ~35 строк — 0–10. Та же картина, что у UK: голова почти пустая. Phrase
  «german electronic»: слушательское — «german electronic artists» 80/150,
  «german electronic band» 30/50, «…bands» 10/20; коллизии — электроника-
  магазины и бренды (brands 90, store 60, store online/stores/shop по 30,
  company/companies 50), «german electronic residence permit (eAT card)»
  ~80 суммарно, переводчик. Коллизии по сумме больше, чем слушательская часть.
  Производственного интента в выдаче нет.
  — **german techno** (terms, ≥20 gv): голова 250/500, **«german techno
  artists» 200/400** (крупнейшая слушательская фраза в теме), dj/djs по 100,
  club 100, bands 70, festival 50, outfit 50 (одежда — коллизия), girl 40
  (мем), 90s/2000s artists по 20–30, super troopers soundtrack ×2 (сцена из
  фильма, коллизия), train 20 (мем).
  — **krautrock** (terms, ≥30 gv): голова **1 400 / 4 400**, bands 90/500,
  best krautrock albums 100/250, albums 70/100, what is krautrock 40/80,
  can krautrock 20/60, neu krautrock 10/30. Немецкоязычный спрос заметен
  (was ist krautrock 100, die besten krautrock bands 100, bands liste 60+50)
  — не наш язык. Krautrock festival ludwigshafen 100 — ивент.
- **3. Related terms** («german electronic music»). also_rank_for (top_100):
  german techno 500, famous german djs 150, german house music 100, german
  rave 100, german edm 80/100, famous german dj 90, berlin techno artists 70,
  german raves 60, german electronic band 50, 90s german techno 20, german
  electronic music 1970s 0. also_talk_about (top_10): kraftwerk 76 000 gv,
  tangerine dream 18 000, love parade 11 000, berlin wall, east berlin,
  avant garde, ambient music, synth pop, progressive rock, guru guru, techno
  music — это сущности, которые страница обязана покрыть; объём у них
  навигационный (бренды групп), не нашей страницы.
- **4. SERP и PAA** (US).
  — «german electronic music» (70): AI Overview; Wikipedia (20 RD, поз. 2),
  Reddit, Spotify-плейлист, **makeyourowntaste.com (DR9, 3 RD, поз. 6)**,
  обсуждения (Reddit/Renoise/Quora), YouTube-плейлист, **RBMA oral history
  East Germany (DR74, 9 RD, поз. 10)**. Редакционных слотов: 3 (Wikipedia,
  makeyourowntaste, RBMA). Слабейшая редакционная — 3 RD. PAA: What is German
  electronic music called? / Who are the German electronic music artists? /
  What is the viral German song called? / Who is the most famous German DJ?
  — «german techno» (250): AI Overview с сайтлинками (Vice про Tresor/
  «Der Klang der Familie», orte-der-einheit Tresor, medium). Органика:
  Reddit, Spotify, Wikipedia German electronic music (поз. 5), **feralclo
  (блог магазина одежды, DR8, 19 RD, поз. 6)**, блок видео/соцсетей,
  YouTube ×2, SoundCloud. Редакционных: 2. PAA: What is German techno
  called? / Is Germany known for EDM? / Who was the original German techno
  band? / What is the most popular German techno club?
  — «german techno artists» (200): Reddit «pioneers of German techno» (95
  визитов), musicmetricsvault (0 RD), Wikipedia Category (1 RD), Spotify,
  YouTube, **ranker (3 RD)**, samplesoundmusic (52 RD), **yourghostproduction
  (DR13, 0 RD, поз. 10)**. Списочный интент, слотов под статью-список ~4,
  слабейшие 0–3 RD. PAA: Who is the most famous German DJ? / Who are the best
  German EDM artists? / Who are the top techno artists? / Is techno popular
  in Germany?
  — «krautrock» (1 400): Wikipedia (478 RD), Reddit ×2, RYM (8 RD), BBC
  Culture (40 RD, поз. 7), Spotify Goethe-Institut, linenoise substack (1 RD,
  поз. 9), r/Krautrock. Редакционных: 2–3 (BBC, substack). PAA: What is the
  meaning of krautrock? / Did Pink Floyd influence krautrock? / Which bands
  were influenced by krautrock? / Was krautrock popular in Germany?
  — «what is krautrock» (40): Wikipedia, findwords (0 RD), XLR8R (29 RD),
  youtubemusicsucks (DR21, 1 RD), rock.fandom (2 RD), classicrockhistory
  (1 RD), UMich Press (книга), Culture Trip (1 RD). Редакционных ~6,
  слабейшие 1–2 RD. PAA: Is krautrock progressive rock? / Who created
  Krautrock? / Where did the term Krautrock come from? / Where do I start with
  Krautrock?
- **5. Competitor mining** (exact URL, US).
  — Wikipedia German_electronic_music: german techno 150 (поз. 2), german
  edm 80 (1), german electronic music 60 (1), german electronic band 40 (1),
  german rave/raves, german electronic music artists, german house music,
  berlin techno artists, 90s german techno, german techno music — всего 13
  строк, ~45 визитов. То есть страница-история в этой нише забирает кластер
  «german techno / edm / rave», а не «history».
  — feralclo: только «german techno» (поз. 1 в своей выборке, 4 визита).
  — RBMA East Germany: german electronic music (10), german electronic
  band (7). Нового, чего не дали стадии 2–4, майнинг не принёс.
- **Не проверено:** страны кроме US (у krautrock 2/3 спроса вне US);
  matching по «berlin techno», «kosmische», «neue deutsche welle», «love
  parade», «history of techno» — всплыли в related/SERP, но не расширены;
  SERP «german edm» и «famous german djs»; объём фраз «history of german
  electronic music» / «german electronic music history» (в matching-выдаче
  их нет вовсе, т.е. <10). Production-интент в теме не встретился.
  Owner's standing: немецкая сцена не breakbeat/jungle — вопрос §5 не задан.
- Ahrefs: 15 вызовов (organic-keywords ×4, matching-terms ×4, related-terms
  ×2, serp-overview ×5), ~6 000 units.

---

## Клубы Берлина (Berlin clubs)
- Дата: 2026-09-10. Стадии: 1–5 из 6 (страна — только US). Стадия 6
  (Validation) не пройдена. Идея владельца: «статья про все клубы Берлина».
- **1. Сиды.** thecatrave.com не ранжируется ни по чему с «berlin» (проверено
  в записи «История немецкой электронной музыки» выше, тот же день).
- **2. Matching terms.** «berlin clubs» (terms, ≥50 gv, топ-40): berlin clubs
  600 US / 6 100 global, clubs berlin 70/6 900, clubs in berlin 250/2 600,
  **best clubs in berlin 250/1 600**, berlin techno clubs 200/1 200, techno
  clubs berlin 60/1 200, best clubs berlin 100/800, berlin night clubs
  150/700, best techno clubs in berlin 150/350, top clubs in berlin 100/250,
  famous clubs in berlin 40/200, berlin underground clubs 40/200. Спрос в
  основном вне US (US ≈ 10% global). Коллизии: секс/свингер/стрип/fkk/kinky
  клубы ~3 800 gv суммарно, футбольные клубы ~1 150, гей-клубы ~1 500
  (слушательский спрос, но отдельный угол), jazz 250, cannabis clubs 150;
  немецкоязычное «clubs berlin heute» 350, «beste clubs berlin» 300 (сегодня
  = афиша). Производственного интента нет.
  — «berlin techno» (terms, ≥50 gv): techno club berlin 50/2 600, berlin
  techno 200/2 000, techno berlin 100/1 700, berlin techno club 150/1 500,
  berlin techno events 450 gv и techno party berlin 400 gv (афиша), berlin
  techno outfit 350 + fashion 200 (одежда — коллизия), berlin techno club
  crowd 90/300 + interior/exterior (картинки), berlin techno scene 30/150,
  «techno ballet berlin» 300+300 (спектакль — коллизия).
- **3. Related terms** (also_rank_for, top_100): berghain 23 000 / 198 000
  (навигационный бренд), berlin nightlife **1 700 / 5 200**, остальное — шум
  тревел-доменов (seatguru, lonelyplanet, tripadvisor): топ выдачи — тревел-
  сайты. also_talk_about не снимался.
- **4. SERP и PAA** (US).
  — «berlin clubs» (600): **local pack** (Berghain, Maxxim, Matrix), visitberlin
  (1 906 RD), Reddit r/Techno, **RA guide «Best Clubs in Berlin 2026» (DR87,
  13 RD, 354 визита)**, Tripadvisor, Wikipedia Berghain (265 RD), berlin.de
  «Clubs A to Z», Lonely Planet «23 of Berlin's best clubs». Слотов под
  статью: 2–3 (RA, Lonely Planet, частично visitberlin), все у сильных
  тревел/медиа-доменов. PAA: What are the most famous clubs in Berlin? / What
  is the famous club in Berlin? / Why is Berghain so hard to get into? / Is
  Berlin good for clubbing?
  — «best techno clubs in berlin» (150): Reddit (215 визитов), RA (13 RD),
  Yelp, **top10berlin (DR54, 3 RD)**, visitberlin/en (9 RD), **lingoda блог
  (DR71, 4 RD, поз. 9)**, TikTok. Статей-списков ~4, слабейшие 3–4 RD. PAA
  есть, тексты вопросов Ahrefs не вернул.
  — «berlin techno clubs» (200): PAA (SMH «пытался попасть в Berghain», KLM
  про Berghain), Reddit, RA, Wikipedia Berghain, visitberlin, Yelp,
  top10berlin (3 RD), tresorberlin.com.
  — «berlin techno» (200, историко-сценовый угол): Reddit «Is Berlin techno
  an actual sub genre», Spotify, RA events, **BBC Travel «UNESCO status» (42
  RD, поз. 6)**, **enharmonicmagazine (DR7, 0 RD, поз. 7)**, Yelp, **medium
  (1 RD)**, safestay (1 RD). Редакционных ~4, слабейшие 0–1 RD. PAA: What is
  the famous techno club in Berlin? / What is German techno music called? /
  Are there any techno raves happening in Berlin in 2026? / What is a famous
  German techno song?
- **5. Competitor mining** (exact URL, US).
  — RA clubs-in-berlin: berlin nightlife 1 800 (поз. 13), berlin clubs 600
  (6), berlin club 400 (10), berlin nightclub 300 (9), berlin germany
  nightlife 250 (1), best clubs in berlin 250 (4) + ~20 вариантов. **Новое,
  чего не дала стадия 2:** «berlin nightlife» 1 800, «berlin club» 400,
  «berlin nightclub» 300 — страница-гайд по клубам кормится запросами
  про ночную жизнь.
  — BBC Travel UNESCO: berlin techno 200, berlin techno club 100, techno
  berlin 90, berlin rave scene 30, techno capital of the world 20, berlin
  techno scene 20 — историко-культурный угол забирает «berlin techno».
- **Наблюдения без оценки:** «все клубы» в выдаче — это справочники
  (berlin.de A–Z, visitberlin, Tripadvisor, Yelp, local pack) и тревел-
  гайды с годом в заголовке (RA «2026»): листинговый интент со сроком
  годности. Историко-сценовый угол («berlin techno») — другая выдача, с
  редакционными слотами на 0–1 RD. Две разные страницы, не одна.
- **Не проверено:** страны кроме US (90% спроса вне US — прежде всего DE и
  UK); SERP «berlin nightlife» и «best clubs in berlin»; also_talk_about;
  mining Lonely Planet (URL не вернулся) и visitberlin; тексты PAA по «best
  techno clubs in berlin». Owner's standing по Берлину — вопрос §5 не задан.
- Ahrefs: 9 вызовов (matching-terms ×2, related-terms ×1, serp-overview ×4,
  organic-keywords ×2), ~3 750 units.
- **6. Validation** (2026-09-10, отдельный агент, без новых данных):
  **писать уже.** «Все клубы Берлина» не писать: справочники, local pack,
  тревел-гиганты, RA-гид с годом в заголовке; рядом с RA наша страница была
  бы «похожей, но хуже осведомлённой». Писать берлинский техно как сцену и
  историю, клубы (Tresor, E-Werk, Ostgut/Berghain) — как институции этой
  истории. Главная фраза «berlin techno» (200/2 000; ~4 редакционных слота,
  слабейшие 0–1 RD); вторичные: berlin techno scene, famous clubs in berlin,
  berlin techno club. Перед написанием нужно: SERP «berlin nightlife»
  (главный пробел), UK/DE-выдача «berlin techno» и «berlin clubs», подытоги
  по классам для кластера «berlin techno», история объёма (всплеск от
  новости про UNESCO?), счёт берлинских сетов в каталоге и решение о
  слиянии с досье «История немецкой электронной музыки» (Wikipedia German
  electronic music уже забирает german/berlin techno — риск каннибализации).
  Пересмотр: широкий гид — если в «berlin nightlife» или UK-выдаче есть
  редакционные слоты <20 RD; отказ — если в UK/DE «berlin techno» занята
  так же плотно, как «berlin clubs» в US.
- **Закрытие пробелов после стадии 6** (2026-09-10, тот же день).
  — **Спрос по странам.** berlin clubs: DE 2 800, UK 700, US 600, NL 150,
  AT 150, AU 100. berlin techno: DE 450, US 200, UK 100, PL 100, FR 100,
  ES 80.
  — **История объёма «berlin techno» (US, 2022–2026).** Рос с ~130 (начало
  2022) до ~250 в 2023–2024. Пик 371 в марте 2024 (новость об UNESCO),
  в апреле уже 273. Спад до ~150–175 в 2025, сейчас 200–235. Всплеск от
  новости был разовым, базовый спрос стабилен около 200.
  — **Подытоги кластера «berlin techno»** (global, из matching-выдачи
  выше). Информационный (сцена/история): berlin techno 2 000 + techno
  berlin 1 700 + berlin techno scene 150 = **~3 850**. Поиск клуба
  (листинг): techno club berlin, berlin techno club(s), best techno clubs…
  и перестановки, включая фр. «boite techno berlin» = **~9 200**. Афиша
  (events/party/heute/festival/parade) **~1 800**. Коллизии (outfit/fashion,
  techno ballet ×2, crowd/interior/exterior — картинки) **~1 850**.
  Производственного интента нет.
  — **SERP «berlin nightlife»** (US, 1 700): local pack (Berghain, Maxxim,
  House of Weekend), Reddit r/askberliners (1 RD, 283 визита), visitberlin
  (166 RD), Tripadvisor (5 RD), **meininger-hotels блог (DR67, 3 RD, поз.
  7)**, **berlin.de «Berlin Club Culture» (35 RD, поз. 8)**, **seekingneverland
  (DR12, 2 RD, поз. 9)**. Тревел-интент (есть, пить, куда пойти), но слоты
  под текст есть, слабейшие 2–3 RD. PAA: Does Berlin have good nightlife? /
  What happens in KitKatClub Berlin? / What are the unspoken rules of Berlin
  clubs? / Why is Berghain so famous?
  — **SERP «berlin clubs» (UK):** та же форма, что в US: local pack,
  visitberlin (9 RD), RA-гид (13 RD), Tripadvisor UK (0 RD), Wikipedia
  Berghain, Reddit, berlin.de A–Z (0 RD), **tv-turm.de (DR67, 1 RD)**,
  **questoapp (DR63, 2 RD, «2026»)**. Слабейшие 0–2 RD, но все — списки
  с годом. PAA: What are the most famous clubs in Berlin? / What is the
  most famous nightclub in Berlin? / Is Berlin good for clubbing? / What
  happens at KitKatClub Berlin?
  — **SERP «berlin techno» (UK):** Spotify, Reddit, RA events, BBC Travel
  (42 RD), Eventbrite (1 RD), UNESCO ICH «Techno-Walk» (39 RD),
  tresorberlin.com. Слабых эссе из US-выдачи (enharmonic, medium) в UK нет.
  Редакционных 1–2, и те сильные. PAA: What is the famous techno club in
  Berlin? / Who are the top techno artists in Berlin? / Is Berlin the
  capital of techno?
  — **SERP «berlin techno» (DE, 450):** RA events (de), top10berlin (3 RD),
  Reddit, unesco.de «Technokultur in Berlin» (94 RD), VOID Club, eventim,
  safestay/de (0 RD). Выдача немецкоязычная и афишная: для английской
  страницы это спрос на чужом языке (§3).
  — **Каталог.** Поля площадки в `selector-data.json` нет (есть id, artist,
  broadcaster, year, seconds, views, likes, genres). Посчитать сеты по
  клубам (Berghain, Tresor…) из него нельзя. Зато broadcaster «HÖR» дал
  **9 708 из 62 877 сетов (15%)**. HÖR — берлинская стрим-студия (проверить
  по источнику перед цитированием). Это цифра для статьи о берлинской
  сцене, не довод писать её.
  — **Слияние с «Историей немецкой электронной музыки»** — не решено. Это
  решение владельца, данных для него хватает: обе темы тянут одну и ту же
  выдачу «german/berlin techno», которую держит Wikipedia German electronic
  music.
- Ahrefs (закрытие пробелов): 7 вызовов (serp-overview ×4, volume-history
  ×1, volume-by-country ×2), ~1 230 units.
- **Цель владельца (2026-09-10):** в первую очередь трафик людей, которые
  ищут лучшие и легендарные клубы Берлина. Угол задал владелец, не
  валидатор; дальше ресерч под эту цель.
  — **Matching** (berlin club/clubs/nightclub/nightclubs, фильтр best/famous/
  top/legendary/iconic/history/oldest/most, ≥20 gv), global.
  **«Лучшие» ~5 360**: best clubs in berlin 1 600 (US 250), best clubs
  berlin 800, best club in berlin 350, best berlin clubs 350, best techno
  clubs in berlin 350, best nightclubs in berlin 300, top clubs in berlin
  250, berlin best clubs 250, best techno clubs berlin 250 и хвост.
  **«Знаменитые» ~3 770**: berlin famous club 600, famous club in berlin
  500, famous berlin club 450 (US 150), famous nightclub in berlin 300,
  famous berlin nightclub 300, most famous club in berlin 200, famous clubs
  in berlin 200, most exclusive club in berlin 80… Parent topic почти у
  всех «знаменитых» — **Berghain**: люди ищут ответ «Berghain».
  «legendary/iconic/history/oldest» — ни одной строки ≥20; «legendary berlin
  clubs» 0. Слово «легендарные» годится для заголовка, не как ключ.
  Вне цели: немецкоязычные (beste/besten clubs…) ~880, гей-клубы ~250.
  — **Overview вопросов** (US/global): **how to get into berghain 600/1 800**,
  **what is berghain 400/800**, berlin club dress code 40/150, berlin club
  culture 20/100, berghain door policy 20/60, berghain rules 10/60, why is
  berghain so famous 10/40, berlin club rules 0.
  — **SERP «best clubs in berlin» (UK):** Reddit (door policy, 177 визитов),
  RA (13 RD), visitberlin nightlife (166 RD), Tripadvisor UK (0 RD),
  **tv-turm.de (1 RD, поз. 7)**, **funktionevents stag-do (DR38, 0 RD,
  поз. 8)**, Time Out nightlife (5 RD), Instagram. PAA: What is the hottest
  club in Berlin? / What is the most famous nightclub in Berlin? / Is
  Berghain hard to get into? / Where are the best clubs in Berlin?
  — **SERP «famous clubs in berlin» (US):** Reddit, Wikipedia Berghain,
  visitberlin (9 RD), **questoapp (2 RD, поз. 7)**, RA, Tripadvisor (2 RD),
  tv-turm (1 RD). PAA: What is the most famous club in Berlin? / What is the
  most popular nightclub in Berlin? / Why is Berghain so famous? / Is
  Berghain actually hard to get into?
  — **SERP «famous berlin club» (US):** Wikipedia Berghain, berghain.berlin,
  RA, visitberlin, Time Out «17 best clubs 2025» (1 866 RD на домене-странице,
  поз. 9), questoapp (2 RD, поз. 10). PAA добавил: How much is entry to
  Berghain?
  — **Mining questoapp** («5 Berlin nightlife legends», DR63, 2 RD): 22
  запроса на поз. 6–12 по всему кластеру — best clubs in berlin (8), clubs
  in berlin (8), berlin night clubs (7), famous berlin club (10), top clubs
  in berlin (9), best nightclubs in berlin (7), famous nightclub in berlin
  (8), famous clubs in berlin (7)… Страница-список «легенд» с 2 RD держит
  первую страницу почти по всему кластеру.
  — **Наблюдения без оценки:** слабейшие редакционные страницы в «best» и
  «famous» — 0–2 RD (tv-turm, funktionevents, questoapp), рядом RA, Time Out,
  visitberlin, Tripadvisor. Berghain-вопросы (how to get in, what is,
  famous why) — самый крупный информационный спрос в теме: ~2 700 global.
- Ahrefs (под цель владельца): 6 вызовов (matching-terms ×1, serp-overview
  ×3, organic-keywords ×1, overview ×1), ~2 220 units.
- **6. Validation, второй проход** (2026-09-10, отдельный агент, без новых
  данных): **писать, в форме владельца.** Гид «лучшие и знаменитые клубы
  Берлина»: легенды + открытые сейчас + послушать. Главная фраза «best clubs
  in berlin» (1 600 / 250 US). Первый вердикт («berlin techno» как главная)
  **снят**: сработали оба его условия пересмотра. «berlin techno» остаётся
  абзацем здесь и ключом для гида по немецкой истории. Потолок без ссылок —
  поз. 6–10, как у questoapp. Отличие от RA: закрытые клубы и история, сеты
  на странице, взгляд продюсера (последнее — только если у владельца есть
  берлинский опыт). Форма: H1 без года, видимая дата проверки и статус
  открыт/закрыт; первый абзац отвечает «Berghain», дальше Tresor; раздел
  про Berghain (что это, почему знаменит, дверь); правила и дресс-код.
  Вторичные и отклонённые фразы — в ответе валидатора, переносятся в
  `keywords/berlin-clubs.json`. Незакрыто: US-выдача «best clubs in
  berlin», выдача «how to get into berghain», история объёма best/famous,
  also_talk_about, mining RA/Time Out/visitberlin, список легенд из
  `FIGURES.md`, лицензии фото (внутри Berghain съёмка запрещена), проверка
  HÖR, берлинский опыт владельца.
- **Пакет перед написанием** (2026-09-10): `berlin-clubs-research.md`.
  Внутри: SERP «best clubs in berlin» (US) и «how to get into berghain»
  (текст берёт, слабейшие 0 RD), also_talk_about, черновик карты ключей,
  список клубов по шести источникам FIGURES.md (адаптировано под клубы).
  Ahrefs: 5 вызовов (serp-overview ×2, related-terms ×1, overview ×2),
  ~1 760 units.
- **Свёрстано** (2026-09-11): `best-clubs-in-berlin.html` из
  `berlin-clubs-draft.md` генератором `build-berlin-clubs-article.mjs`;
  карта `keywords/berlin-clubs.json` (16 фраз), `media/berlin-clubs.json`
  (17 обязательных клубов/записей), ревью `berlin-clubs-editorial-review.md`.
  Голос владельца — только в «двери» и Sisyphos. Опубликовано по команде
  владельца 2026-09-11, формулировки как в черновике.

## Клубы Лондона (London clubs) — 2026-09-11

- **Стадии 2–6 пройдены** (Ahrefs, страна GB + global); стадия 6 — отдельным
  проходом, не тем, кто собирал. Пакет — `london-clubs-research.md`. Канон клубов по
  `FIGURES.md` не начат.
- **1. Главное.** Национальная рамка не существует как спрос.
  best clubs in the uk 30, clubbing in the uk 10, uk club culture 10,
  uk superclubs 0, nightclubs closing uk 0, uk nightlife 100,
  best cities for nightlife uk 90.
- **2. Matching terms.** Семейство `uk clubs / uk club / uk nightclub /
  british clubs`, фильтр ≥100: **120 строк, ни одной про ночную жизнь** —
  sofa club, vape club, calendar club, kennel club, гольф, вино, книжные,
  футбольные, свингер- и стрип-клубы. «uk clubs» — коллизия целиком.
  Спрос в Лондоне: clubs in london 3 300, **best clubs in london 2 500 /
  3 700 global (сам себе parent topic)**, night clubs london 1 400,
  london club 1 400, best clubs london 900, nightclub london 900,
  night clubs in london 800, best nightclubs in london 600,
  best club in london 600, london night clubs 600, clubs in central london
  400, best london clubs 350, clubbing in london 350, top 10 night clubs in
  london 250, where to go out in london 250, top clubs in london 200,
  famous clubs in london 100. Итого **~15 000/мес GB** против ~40 у
  национальной формулировки. Второй город: best clubs in manchester 800
  (свой parent topic), дальше Бристоль 300, Лидс 250, Глазго 200.
  Имена клубов тяжелее категорий: ministry of sound 7 100 / 16 000,
  fabric london 5 900 / 9 000, hacienda manchester 3 500 / 4 300,
  the hacienda 1 200 / 3 400, cream nightclub 30. «legendary/iconic uk
  clubs» — ничего ≥100, как и в Берлине: слово для заголовка, не ключ.
- **3. also_talk_about (best clubs in london).** Набор требует имён:
  Dalston Superstore 2 900, The Carpet Shop 2 900, Home House 2 900,
  Cirque le Soir 2 800, Brixton Jamm 1 700, Cuckoo Club 1 500, ball pit
  9 100 (Ballie Ballerson), плюс east london 14 000, mayfair london 5 800,
  sound system 1 800. **Это две разные аудитории в одной выдаче**:
  bottle-service Мейфэр против музыкальных мест. Главное нерешённое
  редакционное противоречие темы.
- **4. SERP.** `best clubs in london`: local pack на 1, PAA на 3, дальше
  восемь органических слотов, почти все редакционные. Слабейшие по RD:
  collegiate-ac поз. 7 — **1 RD**, tripadvisor поз. 9 — 1 RD,
  luxlifelondon поз. 4 — 3 RD, RA поз. 5 — 4 RD. По порогу
  `KEYWORD-METHOD.md` §4 (<20 RD) выигрываемо, и типы страниц — статьи.
  PAA дословно: What is the hottest club in London? / What are the top 10
  nightclubs in London? / Which one is the best club in London? / Where is
  the best nightlife in London?
  `hacienda manchester`: AI Overview, Wikipedia поз. 2, дальше сайт самого
  бренда, билеты на Hacienda Classical, Facebook, Warehouse Project.
  Редакционных слотов два, оба без ссылок: cutlerandgross поз. 6 — **0 RD**,
  radiox поз. 9 — 7 RD. PAA: What happened to Hacienda Manchester? / Is the
  Hacienda still open in Manchester? / Has the Hacienda reopened? / Did
  Oasis ever play at the Hacienda? — четыре исторических вопроса про клуб,
  которого нет с 1997 года, и отвечает на них страница с нулём ссылок.
  Это лучшая найденная щель под «легендарную» половину темы.
- **5. Competitor mining** (cntraveller best-clubs-in-london, поз. 2, exact).
  **Новое, чего не дали стадии 2–4: «clubs in london» 3 300 (поз. 1)** —
  больше, чем «best»-голова. Плюс night clubs london 1 400 (6), london club
  1 400 (18), nightclub london 900 (6), night clubs in london 800 (2),
  london nightclubs 700 (6), clubs in central london 400 (7), clubbing in
  london 350 (1), where to go out in london 250 (1). Страница под «best
  clubs in london» на практике — страница под «clubs in london».
- **Охват решён 2026-09-11 после измерений: Лондон.** Национальная рамка
  снята. Манчестер (800, свой parent topic) и Haciеnda (3 500, конкурент с
  0 RD) — отдельная вторая страница, не строки в этой; в лондонском гайде
  Haciеnda только как сравнение в исторической секции.
- URL и H1 писать как «clubs in London», не только «best clubs in London»:
  стадия 5 показала, что категорийный запрос — бо́льшая половина.
- Соседи: `uk-electronic-music-evolution` (главный риск дублирования),
  `uk-garage-guide`, `jungle-music-guide`, `best-clubs-in-berlin`.
- Вопрос §5 (личное standing владельца) не задан.
- Не поднято: SERP по fabric и ministry of sound.
- **Вердикт стадии 6 (2026-09-11): писать у́же** — исторический гайд по
  клубам Лондона, URL и H1 под `clubs in london`, тема — комнаты, сделавшие
  музыку; таблица открытых мест короткая, с названным критерием, а не
  best-of на двенадцать точек. Против Condé Nast Traveller (поз. 2,
  лондонская редакция) наша версия best-of была бы «похожей и хуже» —
  предупреждение по `KEYWORD-METHOD.md` §5 — плюс постоянный долг
  обслуживания колонки статуса, которого пакет не посчитал.
  Топ-10: восемь органических слотов, все статьи (два журнальных листикла,
  два институциональных гайда, две гестлист-воронки, один UGC, один
  контент-маркетинг). Форумов и платформенной стены нет.
- **Пробелы, названные стадией 6:** SERP по `clubs in london` не снят, хотя
  вся рекомендация стадии 5 на него опирается; стадия 4 не завершена по
  собственному правилу (нужны головной запрос + минимум две вопросительные
  формы, выдачи по PAA не сняты); доля
  кликов, доходящая до органики, не измерена; 2 500 GB против 3 700 global
  = примерно треть спроса это приезжие, другой читатель.
- **Условия до черновика:** снять SERP `clubs in london` и минимум две
  вопросительные формы; канон по шести источникам `FIGURES.md` →
  `media/london-clubs.json` до прозы; развести `uk-electronic-music-evolution` до черновика, а не после.
- **Ранжирование:** 1) Лондон, 2) Манчестер/Haciеnda — **по процедуре, не по
  возможности**: у Haciеnda ни одной пройденной стадии как у своей темы.
  Стадия 6 ожидает, что Haciеnda обгонит (3 500 на неколлизионном термине,
  четыре исторических PAA, 0 RD на поз. 6, нечего обслуживать); держит её
  AI Overview, Википедия на 2 и только два редакционных слота. Обгонит,
  если по вопросительным формам найдётся два+ редакционных слота слабее
  ~10 RD и AI Overview не съедает клик.
- **Две аудитории — решение:** сущности на странице есть, рекомендаций нет.
  Критерий («комната здесь из-за того, что в ней играет, а не из-за столика»)
  проговаривается в первых ста словах. Cirque le Soir, Cuckoo Club, Home
  House, Ballie Ballerson названы один раз, одним абзацем живой прозы, как
  «другой Лондон», с прямой фразой, что гайд не о нём. Не список из четырёх
  названий подряд: так это подсовывание ключей с алиби, что уже закрыто
  `WRITING.md`.
- **Стадия 4 дозакрыта (2026-09-11).** `clubs in london` (3 300): AI Overview
  на 1 (цитирует cntraveller, RA, londonnightguide), local pack на 2 (Carwash,
  fabric, XOYO), PAA на 3, органика начинается **с 4-й** — всего семь слотов.
  cntraveller 4 (600 RD), tripadvisor 5 (**1 RD**), luxlifelondon 6
  (**3 RD**), rumbalondon — сайт одного клуба — 7, londonnightguide 8,
  visitlondon 9, YouTube 10. **Билетных платформ нет** (Skiddle, Fatsoma,
  DICE) — условие стадии 6, при котором Лондон падал ниже Haciеnda, не
  сработало. RA и collegiate из этой выдачи выпали. PAA дословно: What is
  the most popular nightclub in London? / Where's the best place to go
  clubbing in London? / Are clubs free in London? / What are the top 10
  nightclubs in the UK?
  **Вопросительные формы: требование стадии 4 данными SERP не выполнимо, и
  это само по себе вывод.** Формулировки PAA в Ahrefs пустые — это язык
  Google, не ищущих. `terms=questions` по лондонскому семейству (≥30):
  where was the blitz club in london 90, where is the nightlife in london
  70, who is the biggest club in london 60, what time do clubs close in
  london 40, where is kit kat club london 40; остальное — Club L (одежда),
  Queen's Club (теннис), Премьер-лига. SERP у Ahrefs нет и для них. Спрос
  на вопросы 40–90 на формулировку — отдельной выдачи, в отличие от
  брейккора, тут нет, вся игра в головном запросе. Blitz Club (90) —
  крупнейший вопрос в наборе и это история закрытого клуба: слабый, но
  измеренный сигнал в сторону суженного вердикта.
- **Канон клубов собран (2026-09-11)** — `london-clubs-canon.json` (черновик;
  в `media/london-clubs.json` переезжает вместе со страницей, потому что
  `audit-canon.mjs` валит карту без страницы). S4 прочитаны: RA, Time Out
  (40, от 29.07.2026), Condé Nast (через curl), ICMP «A History of London
  Nightclubs». Не прочитаны: visitlondon, tripadvisor (403), luxlife.
  S5: Википедия — Acid house, Second Summer of Love, Heaven, Jungle music,
  Dubstep, UK garage, Blitz Kids. S6 неприменим. **30 обязательных**
  (истоки: Heaven, Shoom, Trip, Clink Street, Four Aces, Blitz, Plastic
  People, Scala, Colosseum, Gass Club, Frog & Nightgown, Twice as Nice,
  AWOL/Roast/Telepathy, Corsica Studios; сейчас: fabric, Ministry, The
  Cause, FOLD, Drumsheds, Carpet Shop, Dalston Superstore, Phonox, MOT,
  XOYO, Brixton Jamm, The Box, Colour Factory, Ormside, Night Tales, KOKO),
  15 опциональных, остальное отклонено с причиной. **Вероятнее всего
  ошибочно отклонены The End и Blue Note (Metalheadz)** — по одному
  источнику (ICMP); один источник, в т.ч. опыт владельца, переводит их в
  опциональные. **Дифференциатор:** Rage, Trip, Clink Street, Twice as
  Nice, Sunday Scene, AWOL/Roast/Telepathy нет ни у кого в выдаче — и это
  джангл и гэридж, музыка владельца. Проверить до печати: даты Trip
  (конфликт 1987/1988), статус Corsica Studios (RA: закрылась 28 марта),
  адреса Colosseum/Gass/Frog & Nightgown, где шли Twice as Nice и
  AWOL/Roast/Telepathy; связь Rage с джанглом — только в формулировке
  статьи Heaven.
- **Страница собрана (2026-09-11)** — `/clubs-in-london`, генератор
  `build-london-clubs-article.mjs`, черновик `london-clubs-draft.md`, ревью
  `london-clubs-editorial-review.md`, канон `media/london-clubs.json` (The End
  и Blue Note обязательны по решению владельца), ключи
  `keywords/london-clubs.json`. Title «Clubs in London: The Legends and the
  Best Ones Open Now». Проверка фактов исправила: Trip — конец мая 1988
  (не 1987), The End закрылся в 2009 (не 2008), Printworks — 2023 (не 2022),
  Drumsheds — Эдмонтон. Rage → Goldie → Metalheadz → Blue Note теперь по двум
  статьям Википедии. Не закрыто: личный голос владельца (§5), адреса
  Colosseum / Gass Club / Frog & Nightgown. Не запушено.
- **Каталог — не критерий (владелец, 2026-09-11).** Стадия 6 сделала счёт
  сетов условием гейта; это вычеркнуто из пакета и из промпта валидации
  (`TOPIC-RESEARCH.md`, дефект `catalogue-as-topic-criterion`). Сеты
  каталога — дополнение к готовой странице, на выбор темы не влияют.
