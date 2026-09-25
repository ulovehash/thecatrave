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
  Дополнено 2026-09-13 (стадии 1–5 пройдены, 6 нет). Цифры выше — global; US:
  голова 42 000 (global 363 000), where is 1 900, what is 800, tomorrowland
  festival 2 100 (TP 32 000), belgium 1 700, location 700, when 500, attendance
  400, usa 400, who owns 90. Классы топ-50 matching (US, ≥150): коллизия
  Disney-парк и фильм 2015 ~52 600, датированные/транзакционные ~27 200,
  слушательские вечные ~10 150, навигационный мусор ~1 800, продюсерских 0.
  SERP «tomorrowland festival»: festivawl (DR17, 0 RD, поз. 4), Pollstar,
  Reddit, Yahoo (пожар сцены), Instagram ×2 — самая слабая выдача кластера.
  SERP «where is»: официальные ×5, Wikipedia, Tripadvisor (2 RD, поз. 9).
  SERP «how many people go»: Wikipedia, DJ Mag (11 RD), официальный (6 RD),
  eventplanner (13 RD), Pollstar (3 RD). PAA: цена билета, США, почему так
  знаменит, вместимость, крупнейший ли, vs Glastonbury, сколько платят DJ.
  Стадия 5: Wikipedia держит 1-е место почти по всему инфокластеру, но
  1 271 визит/мес; новое — attendance 400, capacity 80, logo 350. festivawl
  зарабатывает только «tomorrowland festival» (91 визит). Каталог: 0 сетов.
  Вопрос standing открыт (mainstage EDM). Структура: `tomorrowland-research.md`.
  Ahrefs: 10 вызовов (matching ×3, related ×1, overview ×1, serp ×3,
  organic ×2).
- **EDC.** edc las vegas 25 000 (TP 75 000), what is edc 7 200, electric daisy
  carnival 4 400. «what is edc» — коллизия: EDC = everyday carry (ножи,
  снаряжение), фестиваль только на 6-м месте (Wikipedia). SERP «edc las vegas»
  не снят.
- **EDC Las Vegas** (2026-09-13, стадии 1–5 пройдены, 6 нет; метод «сначала веб»).
  Веб: «what is EDC Las Vegas», «EDC Las Vegas guide», «Electric Daisy Carnival
  history» → Visit Las Vegas, Las Vegas Sun (история), iHeartRaves, vibewithade.
  Organic (exact, US): Wikipedia — edc 80 000 (поз. 14, 0 визитов), edc las vegas
  11 000 (4), what is edc 3 100 (1, 65 визитов — коллизия видна по CTR), edc vegas
  2 300, edc mexico 2 200, electric daisy carnival 1 700 (1), edclv 600, edc stages
  400; Visit Las Vegas — голова (4, 769 визитов) и формы «what is/when is»; LV Sun —
  when did edc start 100, when was the first edc 100; iHeartRaves — только edc tips.
  Matching «edc las vegas» (US ≥150, 47 строк, голова 20 000 без учёта):
  датированные/транзакционные ~17 850 (из них розыгрыши VIP ~4 500), слушательские
  вечные ~3 700 (what is edc las vegas 1 100, TP 76 000), шопинг ~600, продюсерских 0.
  Вопросы по «edc»: коллизия everyday carry ~12 150 (what is edc 3 700, what does
  edc stand for 1 700). electric daisy carnival 2 400, orlando 450.
  SERP «edc las vegas»: официальные, Wikipedia (9), Visit Las Vegas (10, DR76).
  «what is edc las vegas»: vibewithade (10, DR30, 47 RD). «how many people attend
  edc»: fox35 (8, 2 RD), Facebook (1 RD). «what does edc stand for festival»: Visit
  Las Vegas «5 ways» (9, 1 RD), danielmiessler (10, 0 RD). PAA: rave или festival,
  цена билетов, сколько людей в день, крупнейший ли в США, больше ли Coachella,
  почему EDC, dress code, средний возраст.
  URL /edc-las-vegas. Опубликовано 2026-09-13 (edc-research.md). Ahrefs: 11 вызовов.
  Не проверено: LV Sun (402), Insomniac (403); посещаемость 2026 «больше 500 000»;
  17 сцен (DJ Mag) против девяти (Wikipedia); SERP GB не снимался; стадия 6 нет.
- **Creamfields** (2026-09-13, стадии 1–5 пройдены, 6 нет). Спрос национальный:
  голова 29 000 GB из 43 000 global, всё снято по GB. Веб-поиск первым: статей почти
  нет — официальный сайт, Wikipedia, билетные и листинги, неофициальный гид
  creamfieldsfestival.co.uk. Organic (GB): Wikipedia — creamfields location 9 900
  (поз. 7), warrington 2 100 (3), when is 1 700 (6), creamfields festival 1 000 (1),
  steel yard 250 (1), capacity 200 (1), attendance 150 (1). Matching (GB, топ-50 без
  головы): датированные/транзакционные ~75 000 (2026 — 32 000, lineup 2026 — 8 000,
  tickets 2 800), слушательские вечные ~9 250 (creamfields south 3 100, where is
  1 900, location 1 200, festival 1 100 с TP 13 000, when is 450, capacity 350, how
  old 300, warrington 300), практические ~1 900 (hotels 700, postcode 450),
  коллизий и продюсерских нет. what is creamfields 100 (TP 8 900). SERP GB
  «creamfields festival»: официальный (1 231 RD), Wikipedia (103), Instagram,
  festivalcalendar.uk (DR11, 1 RD, поз. 7), Ticketmaster (5 RD), Tripadvisor (0 RD).
  «where is creamfields»: соцсети, dollar.co.uk (0 RD, поз. 4), liverpoolworld
  (49 RD). PAA: Where is Creamfields festival located? / Is Creamfields a rave? / Is
  Creamfields closer to Liverpool or Manchester? / Where did Creamfields used to be? /
  What is Creamfields known for? / How much is a 1 day Creamfields ticket? / Can 16
  year olds go to Creamfields? URL /creamfields-festival. Опубликовано 2026-09-13
  (creamfields-research.md). Ahrefs: 8 вызовов. Не проверено: название dnb-сцены;
  число побед UK Festival Awards (8 в таблице Wikipedia против «шесть раз» в статье
  о Cream); сделка Live Nation 2012 (Billboard за пейволлом, по Wikipedia); цены 2026
  приблизительные (FestivalMates); стадия 6 нет.
- **Sónar** (2026-09-14, стадии 1, 2, 4, 5 пройдены, 3 частично, 6 нет). Владелец
  выбрал его выгрузками Ahrefs (Wikipedia и sonar.es/en). GB (global): sonar
  barcelona 500 (3 100, TP 700), sonar festival 450 (3 800), sonar festival
  barcelona 100 (450), off sonar 300 (1 000), offsonar 90 (400), sonar istanbul
  0 (350), sonar 2027 0 (30), вопросы около нуля. Статьи из веб-выдачи (Time Out,
  Mixmag, barcelonaurbana, spanishexpress) — ноль ключей; barcelona-tourist-guide —
  головы на поз. 6–11, ~7 визитов. SERP GB «sonar festival»: sonar.es ×5,
  offsonar.co, YouTube, Instagram, Wikipedia (10) — статей нет. «sonar barcelona»:
  barcelona-tourist-guide (7, 5 RD), Tripadvisor (8, 0 RD), MFW (10). PAA: What is
  the Sonar Festival? / Is the Sonar Festival worth it? / How much do Sonar
  Barcelona tickets cost? / What date is off Sónar 2026? Каталог: 13 сетов с
  «Sónar», с самого фестиваля ноль (4 OFFSónar от Beatport). URL
  /sonar-festival-barcelona одобрен владельцем, опубликовано 2026-09-14
  (sonar-research.md). Ahrefs: 11 вызовов, ~2 600 units.
- **Parookaville** (2026-09-13, стадии 1–5 пройдены, 6 нет). Спрос немецкий:
  голова 31 000 DE из 37 000 global (84%), с AT 500 и CH 450 немецкоязычные страны
  ~86%; US 700, GB 250. Веб-поиск первым («what is Parookaville festival»,
  «Parookaville Festival Weeze Geschichte Besucher»): статей почти нет — официальный
  сайт, Wikipedia (en, de), листинги (Music Festival Wizard, JamBase, Frontstage,
  viberate), немецкая пресса (Aachener Zeitung, WDR, Nordevents). Organic (exact):
  en.wikipedia — parookaville DE 11 000 (поз. 15, 0 визитов), NL 800 (11), US 600
  (2), FI 300 (1); всего около 470 визитов в месяц, почти всё вне Германии.
  de.wikipedia (DE, latest month) — parookaville 11 000 (3, 831 визит),
  parookaville besucherzahlen 1 200 (1), parookaville weeze 1 200 (4), wo findet
  parookaville statt 900 (5), parooka festival 800 (3), wie viele besucher 400 (1),
  bill parooka 150 (3). Frontstage — только датированные. Matching (DE, ≥100, 50
  строк): датированные/транзакционные ~26 000 (2026 — 11 000, 2025 — 1 700,
  tickets 1 200, 2027 — 1 100, line up 900, livestream 2026 — 800), слушательские
  вечные ~1 700 (parookaville festival 600 с TP 2 700, besucherzahlen 500, weeze
  parookaville 400, von oben 150, was ist das 150), практические/прочие ~1 200
  (outfit, jobs, logo, gelände, shuttle), коллизий и продюсерских нет, опечатки
  (paruka vill 1 000, parookavile 1 000). Matching (US): голова 700 (TP 40),
  parookaville festival 50, where is parookaville 10. SERP DE «parookaville»:
  официальный (478 RD, 24 866 визитов), de.wikipedia (3), Instagram, WDR (5 RD),
  festivalsunited (3 RD, листинг), Facebook, Trustpilot, festivalstuff (DR14, 0 RD).
  «parookaville festival» (DE): то же, mitvergnuegen (DR73, 0 RD) на 10. SERP US
  «parookaville»: официальный, Wikipedia (4), Instagram, видео, Apple Music, Spotify.
  PAA DE: Wo findet Parookaville 2026 statt? / In welcher Stadt ist Parookaville? /
  Was kostet der Eintritt bei Parookaville? / Was ist besser, Tomorrowland oder
  Parookaville? / Was ist das besondere am Parookaville Festival? PAA US: Where is
  Parookaville located? / What does Parookaville mean? URL /parookaville-festival.
  Опубликовано 2026-09-13 (parookaville-research.md). Ahrefs: 9 вызовов. Английская
  страница реально берёт немного: потолок — порядка того, что сейчас получает
  en.wikipedia (~470 визитов в месяц). Не проверено: цены 2026; расхождение таблиц
  посещаемости en и de Wikipedia; сцена Pendulum в 2026 (только сводки поиска);
  стадия 6 нет.
- **Ultra Music Festival + Ultra Europe** (2026-09-13, стадии 1–5 пройдены, 6 нет;
  Ultra Europe — раздел той же страницы, владелец подтвердил 2026-09-13). Веб:
  «what is Ultra Music Festival Miami guide history», «Ultra Music Festival history
  Bayfront Park Virginia Key», «what is Ultra Europe festival Split Croatia guide»,
  «best Ultra Music Festival sets of all time» → We Rave You (история), Techno
  Airlines, Adventures n Sunsets (Ultra Europe), Miami New Times (лучшие сеты, 2026).
  Organic (exact): Wikipedia UMF (US) — ultra miami 3 900 (поз. 6, 0 визитов),
  what is ultra 250 (8), ultra music festival miami 250 (6), when is ultra miami 80,
  ultra miami location 50 (4), edc miami 350 (коллизия); Wikipedia Ultra Europe (все
  страны) — ultra europe US 2 200, DE 1 300, HR 800; ultra split HR 1 500, BA 1 000;
  ultra croatia US 300; ultra festival croatia GB 250; We Rave You и Techno Airlines —
  ноль ключей; Adventures n Sunsets — только ultra croatia 300. Matching «ultra music
  festival» (US ≥70, 29 строк, голова 4 300 без учёта): датированные/транзакционные
  ~4 530 (2026 — 1 900), слушательские ~670 (miami 500, where is 90, location 80),
  практические ~450, шопинг ~170, продюсерских 0. Overview US: ultra miami 6 900
  (global 11 000, TP 7 100), ultra music festival 4 300 (12 000, TP 6 800), ultra
  europe 1 600 (6 600), ultra festival 500 (TP 10 000), ultra croatia 500, what is
  ultra 250. TP в Хорватии: ultra split 900 (TP 2 300), ultra europe 700 (TP 2 300);
  в Германии всё ≤450, TP ≤250. SERP US «ultra music festival»: bayeight (DR19, 0 RD,
  поз. 5), 5mag (2 RD, 6), Yahoo (0 RD, 8) — три статейных слота; «ultra miami» —
  статейных слотов нет; «ultra europe» — официальные, соцсети, Wikipedia (6), MFW (9).
  PAA: Is Ultra a rave or festival? / Why is Ultra so expensive? / How much are tickets
  / Where is Ultra Europe / What date is Miami Music Week. URL /ultra-music-festival.
  Опубликовано 2026-09-13 (ultra-research.md). Ahrefs: 12 вызовов (organic ×5,
  matching ×1, overview ×3, serp ×3). Сеты: Skrillex 2015 (94,3 млн, его канал),
  Hardwell 2013 (35,7 млн, его канал), Pendulum/Knife Party 2016 (2,4 млн, канал
  Pendulum). Не проверено: дата первого Ultra (13 или 12 марта 1999), посещаемость
  2012 (155 000 или 165 000), первый год Resistance (2015 или 2016), посещаемость Ultra
  Europe 2026; стадия 6 нет.
- **Untold** (2026-09-14, стадии 1, 2, 4, 5 пройдены; 3 и 6 нет). Голова «untold»
  29 000 global, RO 14 000, коллизии Dracula Untold (65 000 global) и Club de Nuit
  Untold (духи, 29 000). «untold festival» — английская форма без коллизий, 11 000
  global, RO всего 1 000; по Wikipedia EN (последний месяц): RO 3 100, IT/PL/GB по
  2 000, ES 1 600, US/CA по 900, MX 600, NL 500, NO 450. В отличие от Parookaville,
  английская форма международная. Веб: «what is Untold festival Cluj-Napoca»,
  «Untold festival guide history» → официальный, Wikipedia, листинги, гиды Romanian
  Friend, Welcome Pickups, Take Your Backpack. Organic (exact): Wikipedia EN — поз. 1
  по untold festival в US/CA/AU/GR, трафик малый; Romanian Friend — untold festival CA
  900 (поз. 1), NO 450 (3), untold romania GB 100 (1); Welcome Pickups и Take Your
  Backpack — ноль. Matching RO (≥100, топ-50): датированные/транзакционные ~20 000,
  слушательские ~2 000 (untold festival 1 000, TP 25 000), спонсоры и артисты ~2 700,
  коллизии ~800, продюсерских 0. Matching US: untold festival 700 (TP 350), music
  festival 100, romania 90, остальное ≤70. SERP US «untold festival»: статей нет;
  соцсети, форумы, youbeat tag (DR10, 0 RD, поз. 10). SERP GB: официальный, Wikipedia
  (59 RD, 5), yourope, MFW, Trustpilot, Skiddle — статей нет. PAA: Is Untold the
  biggest festival in the world? / Where is UNTOLD Festival? / Where does the UNTOLD
  Festival take place? / Who is performing at Untold 2026? Каталог: 2 сета (Pan-Pot
  2018, HOSH). URL /untold-festival (untold-research.md). Опубликовано 2026-09-14
  (d6683c1). Стадия 3 пройдена после вопроса владельца (новых ключей нет, 4 имени
  добавлены), стадия 6 нет. Ahrefs: 13 вызовов. Не проверено: «дело Богдана Буты» из
  заголовка YouTube в выдаче; «крупнейший город Трансильвании» без источника.
- **Defqon.1** (2026-09-14, стадии 1–5 и 3 пройдены, 6 ждёт разрешения владельца на
  отдельного агента). «defqon 1» 11 000 global: DE 4 100, NL 1 800, FR 1 000, US 700, BE
  500, GB 450, AT 400; «defqon» 9 600: NL 4 000, DE 1 900. Спрос — название фестиваля в
  DE и NL, нидерландский хвост на нидерландском (afgelast 1 500, hitte 800, wanneer is
  2026 800, waar is 400): картина Parookaville. Коллизия DEFCON (defcon 1 US 9 700).
  Английские формы (global): defqon festival 1 400 (parent «defcon 1»), defqon 1 location
  600 (TP 800), defqon 2027 600, defqon 1 festival 350 (TP 800), defqon 1 cancelled 300,
  defqon australia 250, where is defqon 1 200 (TP 600), stages 200. Related: q dance
  1 400, hardstyle 9 300 (гайда нет, в TAKEN нет). Wikipedia EN «Defqon.1»: в DE/NL на
  2–3 странице; поз. 1 по where is defqon 1 GB, defqon 1 festival US, defqon australia AU.
  NL Wikipedia держит нидерландские формы. SERP US «defqon 1» — Q-dance ×4, Instagram,
  Wikipedia, Reddit, статей нет; US «where is defqon 1» — Tripadvisor 1 RD поз. 7; GB
  «defqon 1 location» — Tripadvisor 0 RD поз. 6; DE «defqon 1» — плейлисты YouTube,
  мерч Q-dance, переведённый Reddit, статей нет. PAA: Why did Defqon.1 get cancelled? /
  What does Defqon.1 mean? / Is Defqon.1 the biggest festival? / Is Defqon.1 only
  hardstyle? / Where is Defqon.1 hosted? + 4 немецких. 2026 отменён 26 июня из-за первого
  в NL красного уровня жары; 2027 — 24–27 июня (по прессе, страница Q-dance без JS
  пустая). Предложен URL /defqon-1-festival (defqon-research.md). Ahrefs: 15 вызовов.
  Отложен владельцем 2026-09-14 ради более популярных фестивалей.
  - **Дозакрыто 2026-09-25** (владелец выбрал Defqon.1 вместо Boom для этого прохода;
    живой Google US/en, 0 Ahrefs-units — старые SERP/related этого месяца ещё не устарели
    по правилу ~90 дней, объёмы не переснимались). Уточнение по отмене 2026: не отменён
    до начала — фестиваль отыграл один день, дальше уик-энд отменён 26 июня из-за
    экстренного KNMI Code Red по жаре; Q-dance всё равно отыграл Endshow без публики
    (снято на видео). Это документированный, живой на сегодня инфоповод — Reddit
    r/hardstyle продолжает обсуждение спустя 3 месяца, PAA «Why is Defqon.1 2026
    cancelled?» всё ещё всплывает. Единственный найденный независимый редакционный
    материал по инциденту — DJ Mag, «Defqon.1 festival cancelled due to extreme heat
    warning» (djmag.com, 26.06.2026, новостная заметка, не разбор). Живой SERP US
    «defqon 1»: Q-dance (сайтлинки, 5+ страниц), Wikipedia, Instagram, AI Overview,
    YouTube, Facebook — статей нет. «what is defqon 1»: Wikipedia, Q-dance ×3, Reddit,
    Tripadvisor (обзорная страница, слабо), Fandom hardstyle wiki (комьюнити-вики, не
    конкурент-издание) — **тоже 0 независимых редакционных слотов**, слабее паттерна
    Awakenings (там на этой же вопросной форме нашлись festivalpartners.com и DJ Mag
    Top 100 profile). Коллизия DEF CON подтверждена самой Wikipedia («Not to be confused
    with DEF CON») но не проявляется в живой органике — 100% результатов про фестиваль.
    2027: 24–27 июня подтверждено, «The Kick-off 2027» (анонс состава) — 1 октября 2026
    (через 6 дней от текущей даты, если писать сейчас — упомянуть точно).
    Вывод по данным: не «drop», как Boom (там 0 слотов на обеих формах без какого-либо
    дифференцирующего инфоповода), но и не «winnable» по обычному объясняющему углу, как
    Awakenings. Единственная реальная дифференциация — детальный, точный разбор отмены
    2026 (инцидент задокументирован фактами, у существующего покрытия — DJ Mag — только
    новостная заметка, не полный разбор), встроенный в объясняющую статью про фестиваль.
    Жанр — хардстайл/хардкор, дальше от breakbeat/jungle владельца, чем house/techno, но
    ближе, чем психоделический Boom.
- **Coachella** (2026-09-14, начато; стадии 1 и 3-matching пройдены, остальные нет:
  кончился лимит Ahrefs, 2 единицы, сброс 2026-09-20). Голова 151 000 US (523 000
  global, TP 205 000, parent «coachella lineup»). Слушательские вечные US: what is
  coachella 35 000 (TP 16 000, свой parent topic — паттерн Burning Man), where is
  17 000, when is 16 000, how long 7 200, where is coachella held 3 600, who owns 1 800,
  how many people attend 1 700, when did coachella start 1 100; coachella 2027 14 000
  (TP 5 900). Датированные и артистские пары — сотни тысяч, исключаются. Владелец
  прислал выгрузку ключей coachella.com (723 строки): официальный сайт 1-й по where-
  формам (/getting-here), 3-й по when is, 4-й по what is coachella. По его решению
  статья написана 2026-09-14 без стадий 2, 4, 6: URL /what-is-coachella, не запушена
  (coachella-research.md). После сброса 20.09: organic Wikipedia/Britannica, related,
  SERP what is/where is, стадия 6. PAA не сняты: Google отдал CAPTCHA.
  Опубликовано 2026-09-14 (850f879).
- **Lollapalooza** (2026-09-14, по выгрузке владельца: ключи Wikipedia EN, US, последний
  месяц, 397 строк; Ahrefs 0 вызовов). Голова 58 000 (Wikipedia поз. 2). Главный
  информационный вопрос — где: lollapalooza location 3 600, lolla chicago 1 000, address
  700; сколько людей: attendance 1 500, how many people go 1 100 / attend 1 000; когда:
  when does lollapalooza end 1 800, when is 1 300, dates 1 100, how many days 800; только
  ли в Чикаго 1 000, india 1 000; history 800, meaning 450, first 450; what is — всего
  800. Официальные даты 2027 не объявлены; по решению владельца в статье ожидаемые
  29 июля – 1 августа 2027 с оговоркой. URL /lollapalooza-festival, структура одобрена,
  статья написана 2026-09-14 (lollapalooza-research.md). Стадии 3, 4, 6 после сброса
  лимита Ahrefs.
- **Glastonbury** (2026-09-14, по выгрузкам владельца, UK, последний месяц: Wikipedia
  215 строк, официальный сайт 933, Reddit 443; Ahrefs 0 вызовов). glastonbury 2027
  18 000 (официальный поз. 1), glastonbury festival 13 000, why is there no glastonbury
  this year 2 600 (Wikipedia 9, официальный 6 — самая слабая точка), is glastonbury on
  this year 2 500, headliners by year 2 400, where is 2 000, 2027 dates 1 800, when is
  2027 1 700, how many people go 1 600, when does it finish 1 300. Исключены registration
  19 000, билеты, составы, карта, глэмпинг. 2027: 23–27 июня, официально. URL
  /glastonbury-festival, структура одобрена, статья написана 2026-09-14
  (glastonbury-research.md).
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
- **Брейкбит/джангл/dnb-фестивали** (2026-09-13, GB, global в скобках).
  breakbeat festival 0 (10), SERP пустой; jungle festival 10 (250), в основном
  коллизии (electric jungle, urban jungle, cheese festival). drum and bass
  festival 100 (400), drum and bass festivals 200 (300), dnb festival 70
  (350), drum and bass festivals uk 100 (150). SERP «drum and bass festival»:
  letitroll.eu (626 RD), MusicFestivalWizard, drumandbassuk (1 RD, 1 230
  визитов), Skiddle «best dnb festivals 2026» (6 RD), paulrobinspromotions
  (1 RD), Facebook, festivalfinder (1 RD). PAA: What is the biggest DnB
  festival in the world? / Where is DnB Allstars 2026? Названия из выдачи:
  let it roll 250 (5 200; голова многозначна), let it roll festival 100 (700),
  dnb allstars 700 (1 200), worried about henry 900 (1 000), wah in the city
  150. Жанровый спрос копеечный, живёт только в названиях. Ahrefs: 4 вызова
  (matching ×1, serp ×2, overview ×1). Стадии 3, 5, 6 не пройдены.
  Переделано по методу владельца (2026-09-13: сначала веб-поиск, потом ключи
  найденных статей). Веб-поиск «best breakbeat festivals», «breakbeat festival
  Europe», «best jungle and drum and bass festivals». Статьи и их видимость
  (organic keywords, все страны): grooveist breakbeat, festnav breakbeat,
  Beatportal «Spanish breakbeat renaissance», grooveist dnb, LoveThatBass
  «best d&b holidays» — **ноль ключей**. Skiddle «best dnb festivals 2026» —
  только общий dnb-кластер GB (drum and bass festival/festivals/uk по 150,
  dnb festival 80, dnb festivals 90; ~100 визитов на всё). Wikipedia Breakfest
  — «breakfest» (AU 250 поз. 1, CA 450, US 5 500 поз. 16 — вероятно коллизия,
  не проверено). Названия из веб-выдачи, global (GB): monegros festival 7 800
  (250), monegros desert festival 4 300, dreambeach 2 800, breakfest 7 100
  (100), rampage open air 1 400, hospitality on the beach 1 000 (600), glade
  festival 80, beat-herder 80 (TP 1 800), sunandbass 60. По вебу: Breakfest
  (Перт, 2001–2022; и чешский Breakfest, 20 лет в 2026), Glade (UK, брейкбит
  на главной сцене), Beat-Herder, испанские Monegros и Dreambeach с брейкбитом
  на сценах (Beatportal). Ahrefs этого прохода: 8 вызовов (organic ×7,
  overview ×1).
- **Самые популярные фестивали электроники в мире** (2026-09-13, метод
  «сначала веб»). Веб-поиск: «biggest electronic music festivals in the
  world», «best EDM festivals in the world list», «best techno festivals in
  the world». Видимость статей-списков (organic, все страны): thedjrevolution
  «57 best» — ноль; ticketswap best-edm — generic (edm festivals 2026 US 2 600
  поз. 23, best electro music festivals in europe CA 500 поз. 7, european
  music festivals GB 300); edmhousenetwork и holafly — «biggest/largest edm
  festival in the world» ~100 (поз. 1), по 5–15 визитов; boldlygo — 1 ключ;
  MFW techno europe — techno festival DK/NO/SE, techno festivals europe 40;
  ticketswap techno — techno festivals US 200 поз. 1; jonesaroundtheworld —
  ноль. Списочный спрос копеечный, спрос живёт в названиях. Global volume
  названий из этих списков (US в скобках): tomorrowland 363 000 (42 000;
  голова с коллизией Disney/фильм), creamfields 43 000 (1 500), parookaville
  37 000 (700), edc las vegas 25 000 (20 000, TP 75 000), ultra music
  festival 12 000 (4 300), untold festival 11 000, defqon 1 11 000, dekmantel
  8 000, amsterdam dance event 7 900, monegros festival 7 800, ultra europe
  6 600, awakenings festival 6 500, exit festival 5 200, electric daisy
  carnival 4 400, movement detroit 4 300 (4 000, TP 6 300), sonar festival
  3 800, sonus festival 3 500, sunburn festival 2 800, kappa futurfestival
  2 500, time warp festival 1 000 (голова «timewarp» не снята). Ahrefs:
  10 вызовов (organic ×8, overview ×2).
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
  Colosseum / Gass Club / Frog & Nightgown. Запушено 2026-09-11 (`f138640`),
  quality gate и деплой зелёные.
- **URL перенесён (2026-09-11)** по просьбе владельца: адрес должен говорить,
  что страница про клубы электронной музыки. Новый —
  `/best-electronic-music-clubs-in-london`; со старого `/clubs-in-london`
  заглушка-редирект (refresh, canonical, noindex). Проверено: «electronic
  music clubs london» 40, «electronic clubs london» 30, «best electronic
  clubs london» 0, «techno clubs london» 200. Своего спроса у «electronic»
  нет, слаг ради ясности; «best» и «clubs in london» из головы сохранены.
- **Каталог — не критерий (владелец, 2026-09-11).** Стадия 6 сделала счёт
  сетов условием гейта; это вычеркнуто из пакета и из промпта валидации
  (`TOPIC-RESEARCH.md`, дефект `catalogue-as-topic-criterion`). Сеты
  каталога — дополнение к готовой странице, на выбор темы не влияют.

---

## История платформ DJ-сетов (Boiler Room и подобные) — 2026-09-11

- Тема владельца: история Boiler Room, Cercle, HÖR, NTS, Rinse, Keep Hush и
  т. п. плюс поиск новых каналов для каталога. Стадии 1, 2, 4 частично, 3
  частично, 5 — нечего майнить. Стадия 6 не пройдена, вердикта нет.
  «Boiler Room» (голова, best boiler room sets, meaning) — см. записи выше,
  не повторялось.
- **1–2. Затравки и matching terms (US + global).** Категория как запрос
  почти не существует: boiler room alternatives 20 gv, boiler room history
  20, boiler room founder 20, boiler room owner 70, boiler room ownership 20.
  «sites like boiler room», «best boiler room alternatives» — нет данных.
  «Like boiler room» — только «movies like boiler room» (фильм, 100).
  Бренды платформ — навигационные: nts radio 35 000, cercle 23 000 (почти
  всё — французское слово, Cercle Brugge, математика; «cercle sets» 60,
  «cercle music» 250, «best cercle sets» 30, «what is cercle» 10), dekmantel
  8 000, the lot radio 4 500, hor berlin 4 000 (TP 5 700, parent «hor»;
  «what is hor berlin» 50). Общие: dj sets 3 400 (parent «dj setup» —
  коллизия с оборудованием), best dj sets 400 + best dj set 250 + best dj
  sets of all time 250, live dj sets 300, dj live stream 150 (parent
  «mixcloud live»), dj streaming 300 (parent «beatport dj»), dj streaming
  service 150. «dj set online» 2 100 и «online dj set» 400 — коллизия, это
  DJ-софт в браузере. Мусор: «best of … dj mix» (нигерийский mp3-спрос),
  «dj sets download mp3» 1 800 — файлы, не наш интент.
- **3. Related (best dj sets, top 10, all).** Почти всё — оборудование
  (контроллеры, xdj az, standalone, pioneer). Из музыкального: boiler room
  44 000, boiler room london 1 800, john digweed 4 300, electronic music
  19 000 (parent «history of electronic music»).
- **4. SERP.** «best dj sets» (US): 0 редакционных статей в топ-10. Reddit
  ×2 (r/EDM), YouTube-плейлист, Spotify-плейлист, SoundCloud-аккаунт,
  YouTube-компиляция, форум drownedinsound, Reddit/Instagram в news; AI
  Overview отвечает про оборудование (digitaldjtips). Форма «форумы и
  плейлисты» — по §4 `KEYWORD-METHOD.md` Google статью здесь не просит. PAA:
  What are some of the best DJ sets? / What is the best DJ set to buy? /
  What is the rule of 32 in DJing? / What are the top 5 DJs? — «boiler room
  alternatives»: SERP в Ahrefs пустой. «dj set online»: you.dj, dj.app,
  tribexr, beatport dj — только софт.
- **5. Конкуренты.** Текстового гайда в топ-3 ни по одному запросу нет —
  майнить нечего.
- Каталог (цифры для статьи, не критерий): The Lot Radio 9 998, HÖR 9 708,
  Kiosk 8 558, Boiler Room 8 206, Seoul Community Radio 5 894, Rinse France
  3 054 … Cercle 178, Dekmantel 77. Всего 62 877, 37 каналов.
- Не проверено: SERP «live dj sets», «dj live stream», «dj streaming
  service»; другие страны; вопросные формы («where to watch dj sets»);
  запросы про livestream-эпоху 2020 года.
- Ahrefs: 9 вызовов (matching-terms ×3, related-terms ×1, overview ×1,
  serp-overview ×3; doc ×3 не считаются).
- **Решение владельца (2026-09-11).** Шаблоны ключей Boiler Room применить ко
  всем платформам; где не найдём — писать всё равно. Расширение коллекции —
  не сейчас. Проверка шаблонов: у других платформ спроса нет (what is cercle
  10, what is hor berlin 50, best cercle sets 30); коллизии nts meaning
  3 200, hor meaning. Найден вопросный кластер Boiler Room: what is a boiler
  room 1 800 (смешанный), what is boiler room 900, what is a boiler room set
  400, …party 400, …music 350, …techno 250, who owns boiler room 80. SERP
  «what is boiler room» и «…party»: ни одной сторонней статьи в топ-10
  (бренд, Wikipedia 60 RD, Reddit, Instagram). «what does nts stand for» 200 —
  Wikipedia, acronym-сайты. Стадия 5: mneemo (история BR) — 1 ключ; dirtydisco
  HÖR — «hoer» 900 поз. 1. Пакет: `boiler-room-platforms-research.md`.
  Ahrefs за вторую часть: 7 вызовов (matching ×2, related ×1, serp ×3,
  organic-keywords ×2 → итого по теме 16).
- **Название под категорию (владелец: статья про все платформы, не про BR).**
  Категорийные ключи: live sets 400, edm live sets 400, live dj sets 300 (TP
  600), live dj set 250; «where to watch …» — 0. SERP «live dj sets»:
  слушательский интент, слабые edmliveset DR3, timessquarenyc 5 RD; PAA «Where
  can I watch live DJ sets?». Отброшены: dj sets 3 400 (магазины
  оборудования), house music radio 1 000 (сайты станций), dj live stream 150
  (как стримить самому), best electro radio stations 600 (SERP пуст). Скандалы
  не включать (владелец). Ahrefs +8 (итого по теме 24).
- **Страница собрана (2026-09-11)** — `/live-dj-sets`, генератор
  `build-live-dj-sets-article.mjs`, пакет `live-dj-sets-research.md`, ревью
  `live-dj-sets-editorial-review.md` (самопроверка; независимый проход ещё
  должен быть). Все проверки зелёные, кроме чужого `audit-connections`
  (artist-connections другой сессии). Не закоммичено, не запушено.

## Грайм, эсид-хаус, фестивали Европы 2027 — написаны (2026-09-22)

Исследование Ahrefs прислал владелец (новых вызовов не было). Написаны и
собраны, не запушены: `/acid-house-guide` (`acid-house-research.md`),
`/grime-music-guide` (`grime-research.md`),
`/best-electronic-music-festivals-europe`
(`best-electronic-music-festivals-europe-research.md`, заменяет предложение
из `electronic-music-festivals-research.md`). Стадия 3 и источники 1–2
FIGURES.md не запускались по указанию владельца. Breakbeat hardcore и UK
pirate radio отдельными страницами не делать: только внутри существующих
гайдов (решение портфеля 2026-09-22).

---

## Клубы Парижа, Брюсселя, Барселоны + сезонные фестивали (2026-09-22)

Кандидаты по запросу владельца: best clubs in Paris/Brussels/Barcelona, best
winter/autumn/spring/summer festivals. Шаг 0: ни один термин не в
TAKEN-KEYWORDS.md. Стадии пройдены везде: 1 (веб-поиск), 2 (matching terms с
классами), 4 (SERP головы, US, только для жизнеспособных кандидатов). Стадии
3, 5 и 6 не пройдены нигде — вердикта нет.

- Best clubs in Paris. Веб первым: RA (ra.co/guides/clubs-in-paris: Essaim,
  La Station, Badaboum, Rex Club), Timeout, Tripadvisor, access.sb,
  doitinparis, europenightlife.com. Overview US: best clubs in paris 200
  (1 000 global), clubs in paris 300 (1 700), paris nightlife 700 (1 900);
  GB: 150/300/400. Matching terms (US, 50 строк) — голова перегружена
  неоднозначным словом clubs: jazz clubs (150, parent «jazz club paris» —
  отдельный интент), strip/swinger/sex clubs, track & field/padel clubs,
  comedy clubs, gay clubs. Слушательский хвост тонкий и почти без объёма:
  best night clubs in paris 30 (150), best edm clubs in paris 0, best clubs
  in paris for tourists 0, the best clubs in paris 0 — весь реальный объём
  сидит в голове, не в хвосте. SERP US best clubs in paris: 3 статейных слота
  у слабых страниц — RA (поз. 4, 1 RD), Timeout (поз. 5, 13 RD), doitinparis
  (поз. 10, 2 RD); Reddit держит поз. 2 и 7 (UGC), Tripadvisor (поз. 6, 1 807
  RD) и access.sb (поз. 9, 1 789 RD) — агрегаторы-листинги, не редакционные
  гайды. PAA: What is the best nightclub in Paris? / Where is the best
  nightlife in Paris? / Is Paris good for clubbing? / What is the most
  exclusive club in Paris? Winnable по правилу §4 (слабейшая редакционная
  страница — RA с 1 RD). Похоже на паттерн Berlin/London
  (keywords/berlin-clubs.json, best-electronic-music-clubs-in-london.html) —
  оба уже написаны и одобрены. Не проверено: also_talk_about/also_rank_for
  (стадия 3), competitor mining RA/Timeout/doitinparis (стадия 5), GB SERP.
- Best clubs in Barcelona. Веб: RA (ra.co/guides/clubs-in-barcelona:
  Macarena Club, Input, Nitsa Club, Sala Razzmatazz), Timeout, barcelonahacks,
  barcelona-life, studentfy. Overview US: best clubs in barcelona 400
  (2 000 global), clubs in barcelona 600 (3 000), barcelona nightlife 1 900
  (5 300 global) — самая крупная голова из трёх городов, сопоставима по
  порядку величины с «berlin nightlife»/«london clubs». GB: 300/500/800.
  Matching terms — та же ловушка clubs: swinger/sex/cannabis/weed/padel/wine/
  social clubs, gay clubs. Жанрово релевантный хвост найден, но без объёма:
  best techno clubs in barcelona 10 (30), best underground clubs in
  barcelona 0 — подтверждает, что объём живёт в голове. SERP US best clubs in
  barcelona: больше открытых слотов, чем в Париже — studentfy (поз. 6, 0
  RD), barcelona.com (поз. 7, 31 RD), wherestherooftop (поз. 8, 3 RD),
  youbarcelona (поз. 9, 0 RD, но Landing Page, не статья), savoringtravel
  (поз. 10, 0 RD); barcelona-life (поз. 5, 39 RD) сильнее остальных;
  Tripadvisor (поз. 4, 4 RD) слабый листинг. PAA: What is the most popular
  nightclub in Barcelona? / Which club is the best in Barcelona? / Is
  Barcelona good for clubbing? / What is the best area in Barcelona for
  nightlife? Winnable, самый выигрышный из трёх городов и по объёму головы, и
  по числу слотов с RD=0. Не проверено: стадии 3 и 5, GB SERP, пересечение с
  уже написанным /sonar-festival-barcelona и /primavera-sound-barcelona
  (разный интент — фестиваль vs клубы, один город, проверить каннибализацию
  на стадии 6).
- Best clubs in Brussels. Веб: Fuse, C12, Bloody Louis, Mirano Continental.
  Overview US: best clubs in brussels 10 (150 global), clubs in brussels 40
  (350), brussels nightlife 150 (1 200); GB: 20/70/300. На порядок меньше
  Парижа и Барселоны при том же объёме работы. Matching terms — почти весь
  хвост про brussels nightlife (районы, дресс-код, сравнение с Амстердамом),
  жанровый хвост (techno clubs in brussels, edm clubs in brussels) без
  измеримого объёма. SERP US brussels nightlife: winnable (accor Limitless
  поз. 5, 2 RD; Tripadvisor поз. 6, 18 RD; getyourguide поз. 10, 0 RD;
  eventbrite поз. 9, 0 RD), но потолок трафика намного ниже — сопоставимо с
  самыми слабыми фрагментами берлинского/лондонского досье, не с их головой.
  Кандидат слабый как отдельная страница; рассмотреть как раздел внутри более
  широкого Benelux/Belgium гайда, а не отдельный URL. Стадии 3, 5, 6 не
  пройдены.
- Best winter/autumn/spring/summer festivals. Отклонено на стадии 2 —
  «relevant shortlist has no measurable demand» (KEYWORD-METHOD.md §0).
  Overview US/global: best winter festivals 20 (30, parent topic «winter
  activities» — коллизия, не про фестивали), winter music festivals 200
  (300), best summer festivals 40 (70, parent «best summer festivals in the
  us»), summer music festivals 900 (1 300, parent topic «music festivals
  2026» — датированный/навигационный кластер, не собственный интент), best
  autumn festivals 0, autumn music festivals 0, fall music festivals 150
  (150, весь спрос US), best spring festivals 0, spring music festivals 90
  (100). Головы либо нулевые, либо поглощены посторонним parent topic. Веб-
  поиск подтверждает второй провал независимо от объёма: результаты по всем
  четырём сезонам (EF, Timeout US, Garden & Gun, TicketSwap, authentikusa,
  vocal.media) — это жанрово-смешанные списки (рок, кантри, джаз, EDM
  вперемешку: Bonnaroo, Stagecoach, ACL, Louder Than Life, Jazz Fest), не
  электронная музыка — тот же wrong-audience-intent трюк, что и
  производственный контент, только по жанру, а не по интенту слушатель/
  продюсер. Правильный масштаб этой идеи уже сделан точнее:
  /best-electronic-music-festivals-europe (опубликован 2026-09-22,
  электронный жанр + регион вместо жанрово-смешанного сезона. Дальнейшие
  стадии не нужны — объёма для отдельной сезонной страницы нет ни при каком
  угле.
- Ahrefs этого прохода: 9 вызовов (overview ×4, matching-terms ×4,
  serp-overview ×3), ~1 485 units. Баланс после: workspace 87 410/800 000
  (~11%), сброс 2026-10-20.
- **Google Ads Keyword Planner (браузер, реальный аккаунт владельца
  299-844-2842, US, All languages, Google, за 12 мес, 2026-09-22)** — по
  прямой просьбе владельца, вместо Ahrefs. Аккаунт без активных расходов,
  поэтому Google отдаёт диапазоны, не точные числа: best clubs in paris
  1K–10K, clubs in paris 1K–10K, paris nightlife 100–1K, best clubs in
  barcelona 1K–10K, clubs in barcelona 1K–10K, barcelona nightlife 100–1K,
  best clubs in brussels 10–100, clubs in brussels 100–1K, brussels
  nightlife 100–1K, best winter festivals 10–100, winter music festivals
  100–1K, best summer festivals 10–100, summer music festivals 1K–10K, best
  autumn festivals 100–1K, fall music festivals 100–1K, best spring
  festivals 10–100, spring music festivals 10–100. Не совпадает точечно с
  Ahrefs (пример: best clubs in paris здесь 1K–10K против 200 в Ahrefs; best
  autumn festivals здесь 100–1K против 0 в Ahrefs) — ожидаемо, разная
  методология (broad-match у Google Ads без расходов на аккаунте против
  clickstream exact-match у Ahrefs), не повод выбрасывать любой из двух.
  Вывод по сезонным фестивалям не меняется несмотря на более высокие цифры
  Google Ads: живой Google SERP (см. выше) для всех четырёх сезонов не
  содержит танцевальной музыки на голове вообще — объём здесь принадлежит
  катку/тюльпанам/тыквам/кантри-фестивалям, не жанру сайта.
- **Решение владельца 2026-09-22: писать 3 статьи** — best clubs in Paris,
  best clubs in Barcelona (Brussels отложен, слишком маленький объём), и
  winter festivals. Исследовательские пакеты (SERP/PAA живым Google,
  Google Ads Keyword Planner вместо Ahrefs, консенсус-листы конкурентов,
  историческая привязка, черновой decision gate по §4
  `ARTICLE-PRODUCTION-WORKFLOW.md`) — в `paris-clubs-research.md`,
  `barcelona-clubs-research.md`, `best-winter-music-festivals-research.md`.
  Для winter festivals голая фраза «best winter festivals» отклонена (0
  музыки в живой выдаче, см. выше); страница переориентирована на «winter
  music festivals» / «best winter music festivals» по образцу
  `best-electronic-music-festivals-europe` — жанровый скоуп, не сезонный.
  «tomorrowland winter» уже занят `tomorrowland-festival.html` и
  `fr/festival-tomorrowland.html` — фестиваль можно назвать в списке, но не
  таргетировать фразу. Ни одна из трёх тем не прошла стадию 6 (Validation)
  и не получила окончательного decision gate — три файла выше это черновики
  для обсуждения с владельцем, не одобренный план.
- **Реализовано 2026-09-22: Paris и Barcelona clubs, en/de/fr.** Владелец
  одобрил Paris и Barcelona (Brussels и winter festivals отложены).
  Опубликованы (собраны, не запушены до отдельного разрешения):
  `/best-clubs-in-paris`, `/best-clubs-in-barcelona`,
  `/de/clubs-paris`, `/de/clubs-barcelona`,
  `/fr/boite-de-nuit-paris`, `/fr/boite-de-nuit-barcelone`.
  Артефакты: `paris-clubs-draft.md`/`barcelona-clubs-draft.md` +
  `de/`/`fr/` черновики, `build-paris-clubs-article.mjs`/
  `build-barcelona-clubs-article.mjs`, `keywords/*paris-clubs*.json` и
  `*barcelona-clubs*.json` (en/de/fr, Google Ads Keyword Planner вместо
  Ahrefs), `media/paris-clubs.json`/`media/barcelona-clubs.json`
  (FIGURES.md адаптация под клубы). Картинки: Rex Club/Nicolas Jaar (CC BY
  2.0), Les Bains Douches entrance (CC BY-SA 4.0), Razzmatazz exterior (CC0)
  — все с Wikimedia Commons, лицензии проверены, скачаны в img/paris-clubs/
  и img/barcelona-clubs/. OG-карточки сгенерированы штатным
  `scripts/build-og-cards.py`. `node scripts/build.mjs` и все 19 audit'ов
  (`node audit-all.mjs`) зелёные, `npm run check:html` и
  `npm run check:layout` (286 тестов) зелёные. Незакрыто: своя стадия 6
  (Validation) ни по одной из тем не пройдена отдельным проходом; Time Out
  Paris и access.sb полные списки не читались целиком (только агрегированные
  сниппеты веб-поиска); каннибализация с `/sonar-festival-barcelona` и
  `/primavera-sound-barcelona` не проверена напрямую.
- **Решение владельца 2026-09-22: перевод остальных 16 гайдов без de/fr
  (breakbeat, jungle, uk-electronic, german-electronic, bass-music,
  how-to-find-new-music, uk-garage, best-boiler-room-sets, live-dj-sets, edc,
  creamfields, ultra, lollapalooza, acid-house, grime, europe-festivals)
  отложен на отдельную сессию — слишком большой объём для этого прохода.
- **Живая проверка PAA в Google (браузер, US/en, 2026-09-22)** — по просьбе
  владельца, вместо/в дополнение к PAA из Ahrefs SERP. «best clubs in
  paris»: What is the best nightclub in Paris? / What area of Paris is best
  for nightlife? / What is the #1 nightclub in the world? / What are the
  coolest bars in Paris? — не совпадает с PAA из Ahrefs (та выдача менялась
  между снятиями, ожидаемо). «best clubs in barcelona»: те же 4 вопроса, что
  и в Ahrefs (совпало). «brussels nightlife»: What are the top 5 nightlife
  cities in Europe? / Is the Red Light District in Brussels? / Is the
  nightlife good in Brussels? / Do and don'ts in Belgium? — один из
  комментариев Reddit в живой выдаче: «We have 3 dedicated techno club» —
  анекдотическое подтверждение техно-сцены, не объём. Сезонные фестивали:
  живой SERP подтверждает и усиливает отказ Ahrefs — «best winter festivals»
  топ-10 целиком про снежные/ледовые ивенты и туризм штатов (Quebec Winter
  Carnival, Ouray Ice Festival, Zehnder's Snowfest) — ни одного музыкального
  результата; «best autumn festivals» целиком про урожай/тыквы/окуумарин
  (corn mazes, Oktoberfest, Diwali, Day of the Dead) — тоже без музыки;
  «best spring festivals» — цветение вишни, тюльпаны, Fiesta San Antonio,
  New Orleans Jazz Fest как единственный музыкальный пункт среди
  цветочных ивентов; «best summer festivals» — жанрово смешано (CMA Fest,
  Bonnaroo, Newport Folk/Jazz, Summerfest), но здесь хотя бы «best EDM music
  festivals in the US» всплыл в «people also search for» — потенциальный
  отдельный жанрово-скоуп­нутый кандидат на будущее (не то, что просили
  сейчас). Вывод не меняется: ни один из четырёх сезонов не даёт слота для
  танцевальной музыки на голове; отклонение подтверждено дважды, разными
  источниками.

---

## Клубные города (волна 2) + фестивальные углы вместо сезонов (2026-09-23)

Шаг 0: ни один термин ниже не в TAKEN-KEYWORDS.md. Кандидаты городов взяты
из веб-поиска (Billboard best dance music cities, Techno Mag top 10,
europenightlife best techno cities, partiesnearme 2026, wepartynow), не по
памяти. Ahrefs не использовался (0 units; баланс 89 522/800 000, ~11%).

- **Google Ads Keyword Planner** (браузер, аккаунт 299-844-2842, **All
  locations**, All languages, Google, Sep 2025 – Aug 2026; диапазоны, т.к.
  без расходов). 10K–100K: amsterdam clubs, amsterdam nightlife, ibiza clubs,
  ibiza nightlife, budapest nightlife, prague nightlife. 1K–10K: best clubs
  in amsterdam / ibiza / budapest / prague / lisbon / vienna / tokyo / nyc /
  chicago / mexico city / manchester / bristol (bristol +900% за 3 мес),
  best clubbing cities in europe, best party cities in europe, lisbon /
  mexico city / tokyo / vienna / tbilisi nightlife, new years eve festivals,
  nye festivals, snowbombing. 100–1K: best clubs in detroit, best clubs in
  tbilisi, tbilisi techno, detroit techno clubs, chicago house music clubs,
  brooklyn techno clubs, best edm festivals, best edm festivals in the us,
  best techno festivals, ski music festivals, winter music festivals.
  10–100: best cities for electronic music, best techno cities in europe,
  techno capital of the world, best winter music festivals, winter edm
  festivals. «Nightlife»-головы шире клубов (бары, руин-пабы) — ловушка
  интента, считать клубной только часть.
- **Живой Google SERP (US/en, 2026-09-23)**:
  - best clubs in amsterdam: Reddit r/TheOverload (2 треда), dirtydiscoradio
    (блог, house/techno), iamsterdam, Reddit r/Amsterdam wiki, Tripadvisor,
    Time Out, RA guide, Yelp. PASF: best clubs in Amsterdam for house music.
    Паттерн как Paris (одобрен) — слабые редакционные слоты, winnable.
  - best clubs in ibiza: Reddit r/ibiza, dirtydiscoradio, Tripadvisor,
    pacha.com, Ibiza Spotlight, DJ Mag (Hï), answertabs, ticketsibiza. PAA:
    most popular nightclub in Ibiza? / #1 nightclub in the world? / Pacha or
    Hï? / where in Ibiza is best for partying? Сезонность (лето), сильный
    нишевый игрок Ibiza Spotlight.
  - best clubs in budapest: Reddit, Tripadvisor, instant-fogas, YouTube,
    trip.com, GetYourGuide, alotea. Туристический/руин-бар интент; PASF
    techno clubs in Budapest, underground clubs Budapest — жанровый хвост
    есть. Редакционных гайдов почти нет — слабая выдача.
  - best clubs in prague: Reddit, thepartyingtraveler (2016), Tripadvisor,
    bestclubsprague.com (коммерция), Yelp, Quora, hostelelf (techno/DnB),
    moonclub. Слабая выдача, но интент мейнстрим-туристический.
  - best clubbing cities in europe: Reddit r/solotravel, блоги путешествий
    (wanderlusttimes 2015, condor, europetravelbureau, shesabroadagain,
    europeanbestdestinations, eurotrip 2011, fodors 2006), Quora — ни одного
    музыкального издания, старые страницы. Хаб-кандидат, winnable.
  - new years eve festivals: musicfestivalwizard, Reddit r/aves и r/EDM,
    iedm (7 NYE EDM festivals), Countdown NYE, Eternal NYE, Condé Nast,
    Insomniac, New Orleans tourism, Fresh Start SF. В отличие от сезонов —
    выдача в основном электронная. PASF: new years music festivals Europe,
    NYE EDM festivals 2026.
- Не проверено: стадии 3 и 5, SERP для lisbon/vienna/tokyo/nyc/chicago/
  mexico city/manchester/bristol/tbilisi, GB SERP, точные цифры (только
  диапазоны). Стадия 6 (вердикт) не пройдена ни по одному.
- **Пакеты собраны 2026-09-23** (по просьбе владельца, все четыре):
  `amsterdam-clubs-research.md`, `ibiza-clubs-research.md`,
  `europe-clubbing-cities-research.md`, `nye-festivals-research.md`.
  Keyword Planner idea-expansion (All locations) по каждому сиду, живой SERP
  вторых голов (amsterdam clubs, ibiza clubs, best party cities in europe,
  nye festivals), конкуренты: Time Out и Dirty Disco (Amsterdam), Dirty
  Disco (Ibiza), She's Abroad Again (Europe: 3 855 слов, ни одного клуба),
  исторические якоря с источниками (RoXY 1987–1999, Pacha 1973, Amnesia
  1976, Ku 1979). Не закрыто: второй источник для части дат (Space, De
  School, Privilege), четырёхисточниковая сверка списков, картинки, стадия 6.
  Music Festival Wizard и RA закрыты бот-проверкой/403 — не обходить.
- **Написаны 2026-09-23** (владелец: «go all 4»), собраны, не запушены:
  `/best-clubs-in-amsterdam`, `/best-clubs-in-ibiza`,
  `/best-clubbing-cities-in-europe`, `/new-years-eve-festivals`. Скоуп
  Europe: клубные города, курорты названы только чтобы их отделить. Для
  каждой: `*-draft.md`, `build-*-article.mjs`, `keywords/*.json` (volume =
  нижняя граница диапазона Keyword Planner, диапазон в поле `range`),
  `media/*.json` (FIGURES.md, адаптация под клубы/города/фестивали),
  картинки с Wikimedia Commons (CC BY / CC BY-SA, в подписях), видео из
  каталога Selector и официальных каналов фестивалей, проверены oEmbed.
  NYE внесён в `festival-editions.mjs` (New Year's Eve 2026, ends
  2027-01-01). Найден и исправлен дефект
  `og-card-manifest-double-quoted-title`. Не закрыто: стадия 6, даты
  2026 для Lights All Night / Eternal / Awakenings / R&V / Beyond the Valley,
  переводы de/fr.
- **Переводы de/fr, 2026-09-24** (владелец: «do the german and french
  versions»): `/de/clubs-amsterdam`, `/de/clubs-ibiza`,
  `/de/partystaedte-europa`, `/de/silvester-rave`,
  `/fr/boite-de-nuit-amsterdam`, `/fr/boite-de-nuit-ibiza`,
  `/fr/villes-faire-la-fete-europe`, `/fr/festival-nouvel-an`. Keyword
  Planner (Germany / France): clubs amsterdam 1K–10K, clubs ibiza 1K–10K,
  partystädte europa 100–1K, silvester rave 100–1K (> silvester festival
  10–100, поэтому URL /de/silvester-rave), boite de nuit amsterdam 1K–10K,
  boite de nuit ibiza 1K–10K, où faire la fête en europe 100–1K, festival
  nouvel an 100–1K, fcknye 1K–10K во Франции. На google.fr найден FCKNYE
  (Brussels Expo), которого не было в английском NYE-гайде: дефект
  `nye-guide-misses-fcknye`, исправлен по одобренной владельцем формулировке,
  перенесён в оба перевода. В de/fr NYE раздел Европы идёт перед США.

---

## Пакет волны 3: жанры house/techno, клубные города, фестивали (2026-09-24)

Шаг 0: TAKEN-KEYWORDS.md прочитан; ни одна голова ниже не занята
(«best nightclubs in prague» занят `best-clubbing-cities-in-europe.html` —
проверить каннибализацию для Праги). Кандидаты взяты из прежних записей
этого файла (house music и hardstyle — из Ahrefs-расширения 2026-09-10;
города — из веб-поиска волны 2; фестивали — из расширения 2026-09-10), не по
памяти. Ahrefs не использовался (0 units). Глубина у всех одинаковая:
стадия 1, стадия 2 (только объёмы головы, без idea expansion), стадия 4
(живой SERP головы). Стадии 3, 5, 6 не пройдены — вердикта нет.

- **Google Ads Keyword Planner** (Chrome владельца, аккаунт 299-844-2842,
  All locations, All languages, Google, Sep 2025 – Aug 2026, диапазоны):
  house music 100K–1M, what is house music 10K–100K, deep house 10K–100K,
  tech house 10K–100K; techno 100K–1M, techno music 10K–100K, what is
  techno 1K–10K; trance music 10K–100K; hardstyle 10K–100K, what is
  hardstyle 100–1K, hardstyle festivals 1K–10K; drum breaks 1K–10K, famous
  drum breaks 100–1K, dubstep artists 1K–10K. Города: nyc clubs 10K–100K,
  best clubs in nyc / new york 1K–10K; tokyo clubs 10K–100K, best clubs in
  tokyo 1K–10K; prague clubs 10K–100K, best clubs in prague 1K–10K;
  budapest clubs 10K–100K (+900% за 3 мес), best clubs in budapest 1K–10K;
  manchester clubs 10K–100K, best clubs in manchester 1K–10K; lisbon clubs
  1K–10K, best clubs in lisbon / vienna / chicago 1K–10K, best clubs in
  mexico city 1K–10K (−90%), best clubs in bristol 1K–10K (+900%), best
  clubs in detroit / tbilisi 100–1K. Фестивали: roskilde festival 100K–1M,
  awakenings festival, boom festival, defqon 1 (−90% за 3 мес), exit
  festival, movement detroit, nocturnal wonderland, fyre festival —
  10K–100K; dekmantel festival (+900%), time warp festival, snowbombing —
  1K–10K; best edm festivals, best techno festivals 100–1K.
- **Живой Google SERP (Chrome, 2026-09-24; US, Manchester — UK):**
  - what is house music: Reddit ×3, видео, Armada «What Is House Music?»,
    Quora, Wikipedia, Splice (блог, 2024), vibemusicing (2025). PAA: Is
    house music white people music? / What defines a house song? / Why do
    people like house music? PASF: house music vs EDM, deep house, artists.
  - what is techno music: Reddit, Wikipedia, edmprod, samplesoundmusic,
    houseoftracks — все три редакционные страницы продюсерские (для
    продюсеров/диджеев), слушательского гайда в выдаче нет. PASF: techno vs
    house music, techno artists.
  - trance music: Wikipedia, Reddit ×2, Spotify, Armada, Beatport — один
    статейный слот. PAA: What defines trance music? / best trance song of
    all time?
  - hardstyle: hardstyle.com, Wikipedia, Reddit ×2, DI.FM, Spotify,
    SoundCloud — статейного слота на голове нет. PAA: Did the Dutch invent
    hardstyle? / most famous hardstyle artists?
  - best clubs in nyc: Reddit r/avesNYC, loopmag, Tripadvisor, resident.com,
    Time Out (techno/house), House of Yes, Apple Maps, Quora.
  - best clubs in tokyo: Reddit r/Tokyo, Tripadvisor, globaltripdiaries,
    YouTube ×2, RA, gotokyo, nightlifetokyo.com, Quora. PASF: for
    foreigners.
  - best clubs in prague: Reddit, thepartyingtraveler, Tripadvisor,
    bestclubsprague (коммерция), duplex.cz, Quora, hostelelf, moonclub —
    туристический интент (singles/couples/students в PASF).
  - best clubs in manchester (UK): manchestersfinest, secretmanchester,
    Reddit («A Raver's Guide»), Tripadvisor, allnightclubs, mystudenthalls,
    designmynight, RA, visitmanchester — местные медиа плотнее, чем в других
    городах. PAA: most famous nightclub in Manchester?
  - awakenings / exit / boom / movement detroit: головы навигационные
    (официальные сайты, Instagram, Wikipedia, RA, musicfestivalwizard) —
    тот же паттерн, что у уже написанных фестивальных страниц. PAA: Boom —
    why every 2 years? / what happens at Boom?; Exit — where is Exit 2026?;
    Movement — what is Movement? / how much does it cost?
- Не проверено: idea expansion Keyword Planner по каждой голове, стадии 3
  и 5, GB-выдача для жанров, Budapest/Lisbon/Vienna SERP в этом проходе,
  интент головы «roskilde festival» (жанрово смешанный фестиваль) и «fyre
  festival» (документальный фильм/скандал), каннибализация «house music» с
  `acid-house-guide.html` и «techno» с `german-electronic-music.html` /
  `best-clubs-in-berlin.html`.

### Волна 3, топ-3 по трафику: стадии 1–5 (2026-09-24)

Владелец: «go first 3» — house music, techno, best clubs in NYC. Инструменты:
Google Ads Keyword Planner (Chrome владельца, аккаунт 299-844-2842; Discover
new keywords — All locations, English; volume check NYC — United States) и
живой Google (Chrome). Ahrefs не использовался (0 units), поэтому referring
domains слабейших страниц **не измерены** — winnability по §4 оценена только
по форме выдачи и типам страниц. Стадия 6 не пройдена — вердикта нет.

**House music (гайд по жанру).**
- 2. Idea expansion (сиды house music + what is house music; 916 идей, прочитаны
  топ-100 по объёму). Слушательский интент: house music 100K–1M, what is house
  music 10K–100K, deep house (+music), tech house, minimal house, electro
  house, tropical house, frankie knuckles 10K–100K; best house music / songs /
  song ever, classic house music / songs, house classics, 80s/90s/2000s house
  music (~8 форм), house djs, best house dj(s), jazz/funk/soulful/hip/hard/
  ambient/chill house, farley jackmaster funk, dj louie vega, godfathers deep
  house — все 1K–10K. Навигационные: swedish house mafia (×3, 100K–1M,
  +ticket/merch), afrohouseking, bolohousemusic, house radio ×6 (радиостанции
  — уже отклонено в live-dj-sets.json), house charts. Файлы/продакшен (не
  наше): house music download, deep house download, mix mp3 download.
  Коллизии: lego house song, haus music (написание). Занято: acid house,
  acid house music, acid house smiley face (acid-house-guide), 2 step garage
  (uk-garage). Каннибализации нет: `keywords/acid-house.json` сам отклонил
  «house music» как «a candidate guide of its own».
- 3. Смежное (PASF/PAA вместо Ahrefs related): house music vs EDM, deep house,
  house music artists, why is house music called house, history of house
  music (timeline/chicago/documentary/book), house vs techno.
- 4. SERP. US «house music»: Wikipedia, Reddit, Splice, Armada, Spotify,
  Traxsource, Facebook (Spinnin'), LANDR, musicmetricsvault — 3 статейных
  слота (Splice, Armada, LANDR). UK: Wikipedia, Reddit, Spotify, Splice,
  Armada, Beatport, Traxsource — 2 слота. «what is house music»: Armada,
  Splice, vibemusicing + Reddit/Quora/видео. «history of house music»:
  Reddit, Wikipedia, universalproductionmusic, iconcollective, Grammy, NPR,
  Splice — 5 редакционных. PAA: What is considered house music? / What is
  the biggest house song ever? / Is house music white people music? / Is
  house music LGBTQ? / What defines a house song? / What classifies as house
  music? / What type of music is house music?
- 5. Конкуренты (прочитаны целиком по структуре). Splice «What is house
  music?» (2024, ~1 640 слов): история, why called house, BPM, 5 поджанров,
  артисты по десятилетиям, **How to make house music** (продакшен-блок).
  Armada «What Is House Music?» (~2 370 слов, с навигацией): sound, history,
  subgenres, «our house music artists» (промо лейбла). LANDR «13 House
  Genres Explained»: 13 поджанров с годом и городом, house vs techno, конец —
  промо дистрибуции. Все три — продавцы (сэмплы, лейбл, дистрибуция); ни
  одного слушательского гайда с сетами/клубами/людьми.

**Techno (гайд по жанру).**
- 2. Idea expansion (сиды techno, techno music, what is techno; 1 034 идеи,
  прочитаны топ-78). Слушательский интент: techno 100K–1M, techno music,
  hard techno, deep techno, hardcore techno, hardest techno, techno house,
  techno club, techno city, techno music festival, festival techno, dj jeff
  mills, adam beyer dj 10K–100K; what is techno, melodic/acid/dub/ambient/
  dark/hypnotic/bunker/classic techno, 90's/2000 techno (+songs/music), best
  techno song(s) (ever/of all time), good techno songs, derrick may, dj
  charlotte de witte, dj nicole moudaber, techno germany, techno rave,
  techno party 1K–10K. Радио (навигационное): techno radio, techno music
  radio, techno radio online, radio techno house, fm techno, techno base.
  Продакшен (не наше): techno mastering, techno beats, techno sounds.
  Коллизии: techno and, business techno, hi techno, global techno, techno
  hub, techno tronic (Technotronic), band scooter, techno rock. Занято
  соседями: techno germany/berlin/german techno (german-electronic-music,
  best-clubs-in-berlin), techno festival(s) (de/fr festival pages) —
  проверить на стадии 6, что голова «techno» и «what is techno» свободны
  (в keywords/*.json не заявлены).
- 3. Смежное: techno vs house music, techno artists, who created techno,
  techno music origin country, history of techno (timeline/book/songs).
- 4. SERP. US «techno»: Wikipedia, Reddit, Beatport, Spotify, RYM, Bandcamp,
  edmprod, MasterClass ×2, Bentley Historical Library (umich), zipdj — 3–4
  статейных слота, все продюсерские/курсовые. UK «techno music»: Wikipedia,
  Spotify, FMA, Reddit, Beatport, RYM — **0 статейных слотов**. «what is
  techno music» (US): Reddit, Wikipedia, edmprod, samplesoundmusic,
  houseoftracks. «history of techno» (US): Wikipedia, Reddit, soundoflife,
  MasterClass, 6amgroup, MSU Today, Carnegie Hall timeline — 5 редакционных.
  PAA: What defines techno? / Is techno still a thing? / What artists are
  considered techno? / What are the top 20 techno songs? / What's that one
  famous techno song? / Where did techno originally come from? / Who is
  considered the first techno band? / What is techno music now called? / Who
  are the fathers of techno?
- 5. Конкуренты. MasterClass «Techno Music Guide» (~1 100 слов вместе с
  промо): What is techno, brief history, 3 characteristics. EDMProd «What is
  Techno?» (~1 400 слов): origin, characteristics (rhythm/bass/synths/
  arrangement — продакшен), who to check out; вверху — сэмпл-пак. Обе тонкие,
  обе продают курсы/сэмплы.

**Best clubs in NYC.**
- 2. Idea expansion (сиды nyc clubs, best clubs in nyc, best clubs in new
  york; 1 553 идеи) — **ловушка неоднозначного слова clubs**: топ-55
  целиком jazz clubs (Blue Note 100K–1M, Birdland, Django), comedy clubs
  (Comedy Cellar, Gotham, The Stand), gay bars/clubs, частные клубы (Soho
  House, Yale Club, NY Athletic Club, Metropolitan Club). Танцевальных — два:
  night club new york, night clubs nyc (10K–100K). Отдельная volume-проверка
  (US): nyc nightclubs, night clubs nyc, dance clubs nyc — 10K–100K; best
  nightclubs in nyc, best dance clubs nyc, best clubs in manhattan, brooklyn
  clubs, new york nightlife, nyc raves — 1K–10K; best clubs in brooklyn,
  techno clubs nyc, brooklyn techno clubs (−90%), house music clubs nyc,
  underground clubs nyc — 100–1K. Клубы (названия из Time Out): Public
  Records 10K–100K (+900% YoY), Nowadays 10K–100K, Basement 10K–100K,
  Elsewhere 1K–10K, Good Room 1K–10K. История: new york club 54 10K–100K
  (US; 100K–1M в All locations), paradise garage 1K–10K, studio 54 — KP
  слил с другим вариантом.
- 3. PASF: best clubs in nyc reddit / for young adults / right now / for
  adults / 18 and over / for college students; best night clubs NYC
  Manhattan. Музыкальный интент в PASF не виден — выдача и подсказки
  смешанные.
- 4. SERP US «best clubs in nyc»: Reddit r/avesNYC, loopmag, Tripadvisor,
  resident.com, Time Out, House of Yes (клуб), Apple Maps, Quora. PAA не
  показан. **Два интента в одной выдаче**: музыкальный (Reddit r/avesNYC,
  Time Out) и lounge/bottle-service (loopmag, resident).
- 5. Конкуренты. Time Out «12 Best Clubs in NYC for Techno, House and More»
  (~1 800 слов): Public Records, Nowadays, Elsewhere, The Sultan Room,
  Animal, Desert 5 Spot, Gabriela, Good Room, Basement, 3 Dollar Bill,
  C'mon Everybody, Trans-Pecos — список, без истории. Loopmag «10 Best
  Nightclubs in NYC: 2026 Edition» (~1 300): Little Sister Lounge, Club Room
  at SoHo Grand, Amber Room, Artspace at PUBLIC, Loosie's, Nebula, Jean's,
  The Box, Laissez Faire, Marquee — lounges. Resident (2025-11, ~1 100): Ketchy
  Shuby, Gospël, Jean's, The Box, Paul's Casablanca, … Marquee — lounges.
  Ни у кого нет истории (Paradise Garage, Studio 54, Loft, Limelight,
  Twilo, Sound Factory — последние четыре пока не измерены и не
  подтверждены источником).

**Не проверено ни по одному из трёх:** referring domains (нужен Ahrefs,
только с разрешения владельца), GB SERP для NYC, All-locations объёмы для
NYC-вариантов, полные тексты конкурентов (только структура и длина), второй
источник для исторических дат.

- **Написаны 2026-09-24** (владелец: «lets go create those 3 articles»),
  собраны, не запушены: `/house-music-guide`, `/techno-music-guide`,
  `/best-clubs-in-nyc`. Для каждой: `*-draft.md`, `build-*-article.mjs`,
  `keywords/*.json` (нижняя граница диапазона Keyword Planner, NYC-варианты
  — US), `media/*.json` (FIGURES.md: источники 1, 3–6; для клубов адаптация
  как у Paris/Amsterdam), `*-editorial-review.md` (самопроверка, не
  независимая), картинки Wikimedia Commons (CC BY / CC BY-SA, в подписях),
  записи YouTube с Topic/лейбла/артиста и сеты из каталога, все через oEmbed.
  Исправлено до публикации: несколько утверждений, написанных по памяти
  (детали в `*-editorial-review.md`). Стадия 6 не проводилась отдельно по
  решению владельца. Не закрыто: Reddit r/avesNYC недоступен в браузере
  (одного консенсус-источника нет), переводы de/fr, стадия 6.
---

## Токио, Будапешт, Прага: написаны (2026-09-24)

Владелец: «go write these 3 article next», продолжение ранжированного списка
городов-клубов волны 3 (Токио и Будапешт — п.4-5, Прага — п.6). Перед стартом
проверен TAKEN-KEYWORDS.md: «best nightclubs in prague» занят
`best-clubbing-cities-in-europe.html` (уже покрывает Cross Club одним
абзацем) — риск каннибализации назван владельцу явно; решение: «Write it
anyway, differentiate clearly» — Прага написана глубже, с другим фото Cross
Club (интерьер бара, не тот же файл, что на хабе) и большим числом клубов.

- **Ahrefs использован** (в отличие от волны 3, где Ahrefs не тратился):
  `keywords-explorer-overview` и `keywords-explorer-matching-terms`,
  global_volume как метрика (правило «ранжировать по мировому спросу»).
  Баланс на начало: 710 478 / 800 000. Потрачено за проход: ~2,6K units.
  Токио: best clubs in tokyo / tokyo clubs — 800 global, traffic potential
  700 каждый, один parent topic; matching terms на «tokyo clubs» — как и в
  Нью-Йорке, голову перекрывают strip/hostess/host clubs, не про музыку.
  Будапешт: budapest clubs 1600 global, best clubs in budapest 700; отдельно
  «ruin bars budapest» 19 000 global и «budapest ruin bars» 7800 — на порядок
  больше самой головы, но другой интент (бар-хоппинг, не клубы); в текст не
  тянулись, названы в keywords-файле как rejected с обоснованием. Прага: best
  clubs in prague 800 global, prague clubs 1000 (difficulty 8); «best
  nightclubs in prague» всего 80 global — вариант, уже занятый хабом.
- **Живой Google SERP (US, 2026-09-24)** для головы каждого города — слабая
  выдача везде (Reddit, Tripadvisor, тревел-блоги), винбельно для
  редакционного гайда; для Токио в выдаче реальные хостес/кабаре-клубы («THE
  PINK TOKYO», «TANTRA TOKYO»), для Будапешта и Праги — реальные клубы первой
  позиции (Instant-Fogas/Ötkert/Szimpla Kert; Duplex/Karlovy Lázně/EPIC).
- **Факты и история**: Токио — закон fueiho (1948-2016, Wikipedia
  «Businesses Affecting Public Morals Regulation Act»), клубы WOMB (2000),
  Contact и Vent (оба 2016), закрытые Air (2001-2015) и ageHa (2002-2022).
  Будапешт — Szimpla Kert (2002/2004) как источник ромкочма-феномена,
  Instant-Fogas (слияние 2017), A38 (корабль 1968, клуб с 2003), закрытый
  Corvintető (2007-2018, сайт сейчас под отель/Time Out Market). Прага —
  Cross Club (2002, углублённо сверх хаба), Karlovy Lázně (1999, «крупнейший
  клуб Центральной Европы»), Duplex (DJ Mag Top 100 2022/2025), Ankali (2017,
  чуть не закрылся в апреле 2025, пережил кризис).
- **Видео из каталога `selector-data.json`**, привязка к городу проверена
  веб-поиском по каждому: Токио — Chida (Boiler Room Tokyo, июнь 2014, первый
  токийский эфир) и Wata Igarashi (Boiler Room Tokyo x TDME, декабрь 2016,
  Хикарie-холл — площадка НЕ названа в тексте, т.к. это не один из клубов
  гайда); Будапешт — Route 8 (Boiler Room Budapest, Turbina, декабрь 2021) и
  Imre Kiss (Boiler Room Budapest x Lobster Theremin, Akvárium Klub, январь
  2017); Прага — Fatty M и Eva Porating (оба Boiler Room Prague, декабрь
  2018, реальная площадка — Hala 40, не названа в тексте, т.к. не входит в
  таблицу клубов). Для Праги сознательно взяты артисты НЕ те, что уже
  встроены в хаб (Tommy Four Seven), чтобы не дублировать медиа.
- **Картинки**: все 9 (3 на гайд) — Wikimedia Commons, лицензии проверены на
  странице файла, скачаны через `curl` (шелл-интернет работает, вопреки
  памяти «shell offline» — см. пометку ниже), конвертированы в webp через
  Pillow локально. Токио — WOMB (Dick Thomas Johnson, CC BY 2.0), ageHa/Studio
  Coast (Kakidai, CC BY-SA 4.0), Dogenzaka ночью (Freddickfix, CC BY 4.0).
  Будапешт — Szimpla Kert (Fred Romero, CC BY 2.0), Fogas/Akácfa (Christo, CC
  BY-SA 4.0), корабль A38 (Rakás, CC BY-SA 4.0). Прага — интерьер бара Cross
  Club (-crosspraha-, CC BY-SA 4.0, естественный размер 844×563, не
  апскейлился), Вацлавская площадь у Национального музея (Muselsom, CC
  BY-SA 4.0, обрезана из панорамы 8265×1936).
- **Проверка модели о шелл-интернете**: память `shell-offline-browser-relay`
  утверждает, что у Bash нет интернета. Прямой тест (`curl` на google.com,
  api.ipify.org, upload.wikimedia.org) в этом проходе показал рабочий доступ
  из Bash. Память надо перепроверить/обновить в следующей сессии — не
  полагаться на неё как на факт без повторной проверки.
- Стадия 6 не проводилась отдельно, как и для волны 3 и Нью-Йорка: владелец
  попросил все три статьи сразу после стадий 1, 2 и 4.
- Собрано и прошло полный `node audit-all.mjs` + `npm run check:html` +
  `npm run check:links` + `npm run check:layout` (446 тестов) чисто:
  `keywords/{tokyo,budapest,prague}-clubs.json`,
  `media/{tokyo,budapest,prague}-clubs.json`,
  `{tokyo,budapest,prague}-clubs-draft.md`,
  `build-{tokyo,budapest,prague}-clubs-article.mjs`, три `.html`, картинки в
  `img/{tokyo,budapest,prague}-clubs/`, OG-карточки, записи в `pages.mjs`,
  `home-articles.mjs`, `scripts/build.mjs` (генераторы), `scripts/
  build-og-cards.py` (HERO), TAKEN-KEYWORDS.md. Найден и записан отдельный
  дефект `og-card-missing-german-electronic-hero` (не мой, пред существовал,
  не чинился — не по этой задаче).
- Не закрыто: German/French переводы, стадия 6, немецкий/французский OG-hero
  дефект, второй источник для части дат (Toldi Klub, Lärm's точный переезд,
  Ankali точный текущий адрес).
- **Не запушено** — ждёт решения владельца.

---

## Исправление: Ahrefs заменён на Keyword Planner для Токио/Будапешта/Праги (2026-09-24)

Владелец поймал две вещи после того, как гайды выше были написаны: (1) весь
процесс review/humanizer был пропущен перед тем, как объявить работу
готовой; (2) исследование ключевых слов шло через Ahrefs, хотя
`KEYWORD-METHOD.md` уже с 2026-09-22 требует Keyword Planner + живой Google
как дефолт, а Ahrefs — только fallback. Оба зафиксированы в `defects.json`
(`tokyo-budapest-prague-skipped-editorial-review`,
`tokyo-budapest-prague-used-ahrefs-against-documented-default`) с fix,
указывающим на усиленные формулировки в `ARTICLE-PRODUCTION-WORKFLOW.md` и
`KEYWORD-METHOD.md`.

- Исследование ключевых слов переделано 2026-09-24 через Google Ads Keyword
  Planner (аккаунт 299-844-2842, через Claude in Chrome — реальный Chrome
  владельца, а не песочница Browser pane, которая не залогинена в аккаунт),
  All locations, English (default), Sep 2025 – Aug 2026. Живой Google (US,
  gl=us&hl=en) для каждой головы вместо Ahrefs serp-overview; PAA-блока
  классического вида не оказалось ни на одном из трёх запросов — это
  зафиксировано как честный факт, а не выдумано.
- Будапешт: Keyword Planner независимо подтвердил находку из Ahrefs-прохода —
  «budapest ruin bars» / «ruin nightclub budapest» на 100K–1M, на два бакета
  выше «budapest clubs» (10K–100K).
- Найдены новые открытые вопросы по составу клубов, не решённые в этом
  проходе: Токио — RA's «Popular Clubs» не называет Contact вовсе и включает
  R Lounge, ZEROTOKYO, Yodo Groove, Enter Shibuya, которых нет в гайде;
  Budapest — Local Pack показывает La Siesta Budapest (4.9★, 5.8K отзывов)
  выше Instant-Fogas по рейтингу, полностью отсутствует в гайде; также
  Ötkert, Morrison's 2, Club Heaven Budapest, Akvárium Klub встречаются
  многократно. Прага, для сравнения, подтвердилась хорошо (Duplex/Karlovy
  Lázně/EPIC Prague/Cross Club — все четыре топ Local Pack).
- Проверен и снят один тревожный сигнал: свежий (по дате «1 day ago») блог
  назвал Corvin Club «go-to» для техно/хауса, что противоречило бы гайду
  (закрыт в 2018). Отдельная проверка нашла датированный апрелем 2026
  источник, явно перечисляющий Corvin Club среди закрытых — исходное
  утверждение гайда подтверждено, блог расценен как устаревший контент со
  свежей датой краула.
- `prague-clubs-editorial-review.md` написан задним числом для Праги (пока
  единственная статья с полным review-проходом: факт-чек, humanizer/AI-tell
  правки, SEO-проверка). Токио и Будапешт всё ещё без review — открытый пункт.
- Все три `keywords/*.json` переписаны с честной пометкой источника; ни один
  Ahrefs-номер не остался. `node audit-all.mjs`, `npm run check:html`,
  `npm run check:links` — чисто после переделки.
---

## Manchester clubs, Boom Festival, Awakenings Festival (2026-09-25)

Владелец выбрал три кандидата из ряда 7–8 сводной таблицы волны 3
(2026-09-24): best clubs in manchester (ряд 7), и два фестиваля из ряда 8 —
Boom и Awakenings (Defqon.1 остаётся отложен решением от 2026-09-14, Exit не
выбран). Шаг 0: TAKEN-KEYWORDS.md прочитан, ни один из трёх терминов не занят.

Инструмент: Google Ads Keyword Planner (аккаунт 299-844-2842, через Claude in
Chrome — реальный Chrome владельца), All locations, English, Discover new
keywords, один запрос на все четыре сида сразу (manchester clubs, best clubs
in manchester, boom festival, awakenings festival) — 388 идей, прочитаны
верхние ~60 по объёму (buckets 10K–100K и 1K–10K целиком). Живой Google
(US/en) для трёх голов и двух вопросных форм. Ahrefs не использовался
(0 units) — дефолт по KEYWORD-METHOD.md с 2026-09-22.

- **Best clubs in Manchester.** Стадии 1 (волна 3), 2, 4 закрыты; 3 частично
  (только PASF с живого SERP, related-terms не снимались); 5 не пройдена.
  - Keyword Planner (all locations): manchester clubs 10K–100K, best clubs in
    manchester 1K–10K (осталась отдельной строкой «keywords you provided», не
    слилась с головой).
  - Релевантные идеи 10K–100K: manchester night clubs. Коллизии в этом же
    бакете: k2 karaoke manchester (+900%, караоке-бар), frog and bucket
    manchester (комеди-клуб), soho house manchester (+900%, частный клуб —
    навигационный), places to drink in manchester (шире, бары).
  - Релевантные идеи 1K–10K: best dance clubs in manchester, best manchester
    nightclubs, best nightclubs manchester, good clubs in manchester, good
    night clubs in manchester, manchester nightlife, hacienda manchester
    (легендарный клуб, уже цитировался для best-clubbing-cities-in-europe),
    the warehouse project manchester (крупнейший клубный бренд города).
    Нерелевантные в том же диапазоне: comedy club/night/store manchester ×3
    (коллизия «club»=комеди), best cocktail bars / best places to drink in
    manchester (бар-интент, не клубы), sex clubs manchester (коллизия,
    проскочила через «exclude adult ideas»).
  - Живой SERP US «best clubs in manchester»: Manchester's Finest, Reddit ×3
    (включая «A Raver's Guide to Manchester Nightlife»), Tripadvisor,
    Resident Advisor (ra.co — танцевальный авторитет), DesignMyNight, Club
    Bookers, Trip.com, Quora. PASF: best clubs in manchester city
    centre/reddit/for adults, best nightclubs in Manchester for students,
    famous nightclub in Manchester. Локальной прессы (Manchester's Finest,
    DesignMyNight, visitmanchester) заметно больше, чем в SERP уже написанных
    городов волны 3, но состав тот же тип страниц (Reddit/Tripadvisor/
    трэвел-блоги + один танцевальный авторитет, ra.co), что уже был принят
    winnable для Праги/Будапешта/Токио.
  - Вывод по данным (не вердикт стадии 6): тот же профиль, что у написанных
    городов волны 3 — winnable, риск чуть выше из-за плотности локальных
    медиа, но не иной по типу.

- **Boom Festival.** Стадии 1, 2, 4 пройдены заново в этом проходе
  (предыдущая запись от 2026-09-13 в разделе «Фестивали» ниже проверяла
  только головной SERP), 3 частично, 5 не пройдена.
  - Keyword Planner: boom festival 10K–100K (all locations). Также: boom
    portugal 1K–10K (подтверждает локацию — Иданья-а-Нова, Португалия), boom
    boom fest / boom fest 10K–100K (варианты головы). **Коллизия с Boomtown
    Fair (UK) не подтвердилась на уровне данных**: boom town fair / boom town
    festival тоже попали в тот же бакет 10K–100K, но остались отдельными
    строками в выдаче идей — Keyword Planner не смешивает их с «boom
    festival» ни разу за все прочитанные ~60 строк.
  - Живой SERP US «boom festival»: официальный сайт (с сайтлинками),
    Instagram (538K подписчиков), AI Overview, Wikipedia, Facebook,
    SoundCloud, YOUROPE, Music Festival Wizard. **0 статейных слотов.** PAA:
    Will there be a Boom Festival in 2026? / Why is Boom Festival every 2
    years? / What happens at Boom Festival? / Where is it located?
  - Живой SERP US «what is boom festival» (вопросная форма — по методу
    breakcore, где голова и вопрос могут расходиться): **тоже 0 статейных
    слотов** — Wikipedia, официальный, Reddit ×2, YOUROPE, Facebook
    FAQ-страница. Ни одного независимого редакционного гайда. PAA этого
    запроса содержит «Is Boomtown a rave?» — Google видит смежность с
    Boomtown в подсказках, но органика двух фестивалей не смешивается.
  - Вывод по данным: единственный из трёх кандидатов, где ни голова, ни
    вопросная форма не дают ни одного слота. Подтверждает и усиливает запись
    от 2026-09-13 ниже («Boom… Статей нет, навигационный») — тот проход не
    проверял вопросную форму, этот проверил и получил тот же результат.
  - Жанровая оговорка: Boom — психоделический/psytrance фестиваль, а не
    техно/бас-музыка; сайт по правилу «не ограничен UK, тема не повод
    отбросить» это не исключает, но это не близкий владельцу жанр (вопрос §5
    KEYWORD-METHOD.md — не задан, т.к. до него дело не дошло: слотов нет).

- **Awakenings Festival.** Стадии 1, 2, 4 пройдены заново, 3 частично,
  5 не пройдена.
  - Keyword Planner: awakenings festival 10K–100K (all locations). Варианты:
    awakening fest 10K–100K; awakenings tickets / awakenings amsterdam /
    awakenings amsterdam ade / awakenings festival ade / awakening ade
    1K–10K — подтверждают устойчивую привязку к ADE (Amsterdam Dance Event).
    Панель Keyword Planner «Refine keywords» сама сгруппировала артистов:
    adam beyer, carl cox, joseph capriati — техно-состав, совпадает с
    профилем сайта (`techno-music-guide.html` уже написан).
  - Живой SERP US «awakenings festival»: официальный (сайтлинки), Wikipedia,
    YouTube-видео ×3, Instagram, awakeningsfestival.nl (пустая страница),
    Tripadvisor (одна редакционная страница-обзор). **0 статейных слотов**,
    PAA не показан на этом запросе.
  - Живой SERP US «what is awakenings festival»: официальная About-страница,
    Wikipedia, Reddit ×3 (включая свежий тред r/AwakeningsFestival),
    Tripadvisor, Facebook, **festivalmates.com** («The complete
    first-timer's guide to…», май 2026, полноценный редакционный гайд),
    **DJ Mag Top 100 Festivals** (профиль фестиваля, авторитетное
    dance-music издание), **FabFestivals** (листинг фестивалей). **3 слота**,
    все слабее оф.сайта и Wikipedia. PAA: How much do Awakenings tickets
    cost? / Who performs in 2026? / Where held in 2026? / Where in 2027?
  - Вывод по данным: тот же паттерн, что у Burning Man/Tomorrowland/EDC —
    голова навигационная, но вопросная форма «what is Awakenings Festival»
    открывает реальные слоты, включая DJ Mag. Из двух фестивалей — только
    этот winnable по методу на вопросной форме.

**Не проверено:** стадия 5 (competitor mining — organic keywords конкурентов:
ra.co, Manchester's Finest, festivalmates.com, DJ Mag), стадия 3 полностью
(related-terms/also_talk_about — только PASF с живого SERP), выдача GB
(только US), стадия 6 (вердикт — отдельный проход по промпту
`TOPIC-RESEARCH.md`).

- **Manchester написано 2026-09-25** (владелец: «write all now», без
  отдельного прохода стадии 6, тот же приём, что у волны 3). Boom отклонён
  (0 слотов на обеих формах), Defqon.1 предложен вместо него, затем тоже
  отклонён владельцем («drop it too»). `manchester-clubs-draft.md`,
  `build-manchester-clubs-article.mjs`, `keywords/best-clubs-in-manchester.json`,
  `media/best-clubs-in-manchester.json`, `best-clubs-in-manchester-editorial-review.md`
  (факт-чек, humanizer-проход, SEO-проверка — в отличие от Токио/Будапешта,
  этот проход прошёл до объявления готовности, не задним числом). Картинки:
  Haçienda bollards (Wikimedia, CC BY-SA 2.0) и Northern Quarter street
  (Wikimedia, CC BY 4.0) — визуальная проверка на рендере поймала неверную
  подпись (alt-текст утверждал, что болларды стоят у нынешних апартаментов на
  месте клуба; сама фотография — явно музейный/выставочный кадр, дата
  совпадает с выставкой Haçienda 25 в Urbis, 2007-2008), исправлено до
  публикации. Видео из каталога: Swing Ting @ Soup (2021, привязан к
  реальному клубу из таблицы) и LEVELZ Boiler Room Manchester (2016, без
  утверждения о неподтверждённой площадке). `node audit-all.mjs`,
  `npm run check:html`, `npm run check:links`, `npm run check:layout`
  (450 тестов) — всё чисто. Не запушено.

- **Awakenings Festival написано 2026-09-25**, той же сессией сразу после
  Manchester. `awakenings-draft.md`, `build-awakenings-article.mjs`,
  `keywords/awakenings-festival.json`, `media/awakenings-festival.json`,
  `awakenings-festival-editorial-review.md` (факт-чек, humanizer-проход,
  SEO-проверка — до объявления готовности, не задним числом). Реальная
  правка Wikipedia: сайт и большинство источников описывают открытый летний
  фестиваль в Spaarnwoude, но живая проверка awakenings.com показала, что
  сейчас это Beekse Bergen (Hilvarenbeek), а Spaarnwoude теперь площадка
  отдельного, меньшего события Awakenings Upclose — статья прямо называет
  расхождение, а не молча копирует Wikipedia. DJ Mag Top 100 Festivals 2026
  (34-е место, −14) — сама страница djmag.com отдала Cloudflare 520,
  источник — проиндексированная Google копия и немецкое зеркало DJ Mag,
  разница зафиксирована в media-файле, не выдана за первоисточник. Картинка:
  фото 2007 года с фирменным дирижаблем Awakenings (Wikimedia, Boris van
  Hoytema, CC BY 2.0, уже используется в пяти языковых версиях Wikipedia),
  не то же изображение Gashouder, что уже стоит на nye-festivals.html. Видео из каталога: Maceo Plex, Mosaic x
  Awakenings at Gashouder ADE 2018 — единственная запись с «awakenings» во
  всём selector-data.json. `festivals-series.md` обновлён (ряд 11:
  «volumes only» → published). `node audit-all.mjs`, `npm run check:html`,
  `npm run check:links`, `npm run check:layout` (454 теста) — всё чисто. Не
  запушено.

Оба (Manchester, Awakenings) написаны в один присест по прямому решению
владельца («write all now»); стадия 6 не пройдена отдельным проходом ни для
одного из двух — та же уступка скорости, что и у волны 3.

---

## Ряды 9–12 сводной таблицы волны 3: Roskilde, trance music, hardstyle, города (2026-09-25)

Владелец прислал скриншот сводной таблицы волны 3 с рядами 9–12: Roskilde
(навигационный + жанрово смешанный), trance music (1 слот), hardstyle (0
слотов на голове), пять городов клубов (Lisbon/Vienna/Chicago/Bristol/Mexico
City, не проверено). Объёмы (Keyword Planner, all locations, 2026-09-24) уже
записаны в разделе «Пакет волны 3» выше — здесь только недостающие стадии:
вопросная форма для трёх жанровых/фестивальных кандидатов (по методу
Awakenings/Boom — голова и вопрос могут расходиться) и голова для пяти
городов (стадия 4, ранее не снималась ни разу). Шаг 0: TAKEN-KEYWORDS.md
прочитан, ни один термин не занят. Инструмент: живой Google (Claude in
Chrome, US/en, gl=us&hl=en), Keyword Planner не запускался повторно —
объёмы этого прохода не нужны, они уже есть с 2026-09-24. Ahrefs не
использовался. Стадии 3 (related) и 5 (competitor mining) не пройдены ни по
одному кандидату; вердикта нет ни по одному — это отдельный проход по
`TOPIC-RESEARCH.md`.

- **Roskilde, вопросная форма** («what is roskilde festival», US). Wikipedia,
  официальный сайт ×3, YOUROPE, visitfjordlandet.com (датский туризм, не
  редакция), Tripadvisor (4.6, 43 отзыва — тонко), Instagram, Reddit.
  **1 слот**, тот же результат, что и на голове — вопрос не открыл новых
  слотов, в отличие от Awakenings. PAA: Why is Roskilde famous? / What is the
  biggest festival in Denmark? / How much does a full ticket to the Roskilde
  Festival cost? / **Is Roskilde Catholic or Protestant?** — последний вопрос
  подтверждает новую ловушку неоднозначного слова: Roskilde — ещё и датский
  город с собором (Roskilde Domkirke), Google смешивает интенты. Три сигнала
  против (навигационный, жанрово смешанный, теперь ещё и коллизия
  город/собор) при одном и том же результате на голове и на вопросе — по
  методу Boom (голова и вопрос оба дали 0 независимых слотов) это тот же
  профиль, на один слот лучше.
- **Trance music, вопросная форма** («what is trance music», US). Wikipedia,
  затем три редакционных слота: **Armada Music** «What Is Trance Music - The
  Full Story», **Splice** «What is Trance Music? History, Artists, and
  Subgenres», **EDMProd** «What is Trance Music?». Это те же три конкурента
  (Armada, Splice, EDMProd), что уже были измерены и обойдены для
  house-music-guide.html и techno-music-guide.html — там оба вывода записаны
  как «тонкие, продают курсы/сэмплы/лейбл, ни одного слушательского гайда» и
  сайт всё равно выиграл на паттерне. PAA: Why do ADHD people like trance
  music? / What is a famous trance song? / What type of music is trance? /
  Is trance music the same as techno? Тот же конкурентный набор, что уже
  дважды подтверждён winnable на этом сайте.
- **Hardstyle, вопросная форма** («what is hardstyle», US). Wikipedia, затем
  четыре слота: **EDMProd** «What is Hardstyle? Here's Everything You Need to
  Know», **House of Tracks** «Hardstyle: Sound, energy and genre traits»,
  **Hardstyle.com** «All harder styles genres» (брендовый сайт жанра,
  полу-навигационный), **hardlang.com** «What is Hardstyle? - DJ HARD LANG»
  (личный сайт диджея, слабый). NoCopyrightSounds Wiki (Fandom) — комьюнити-
  вики, не конкурент-издание, как Defqon.1 hardstyle wiki. EDMProd —
  тот же продюсерский конкурент, что и у house/techno/trance, уже обойдённый
  дважды. Голова дала 0 слотов (запись волны 3), вопрос — 4, из них минимум
  2 реально слабых (hardlang.com, House of Tracks). Тот же паттерн, что спас
  Awakenings после 0 на голове. PAA: Are EDM and hardstyle the same? / Who is
  the most famous hardstyle artist? / What's the difference between techno
  and hardstyle? / What does hardstyle do to your brain?
- **Города клубов, стадия 4 (голова, US, впервые снята для всех пяти).**
  - Lisbon («best clubs in lisbon»): Reddit ×3, Time Out (редакция), XCEED
    (плейс-листинг), Trip.com (листикл), Tripadvisor (15 Best), **Lisbon Lux**
    («Lisbon Clubs — 2026 Guide», выделенный локальный гид), YouTube,
    **RA Guide to Lisbon** (танцевальный авторитет, как у Mexico City),
    Facebook. **5 редакционных слотов**, включая RA — сильнейшая выдача из
    пяти городов вместе с Mexico City.
  - Vienna («best clubs in vienna»): Reddit ×3, Vienna Sightseeing Tours («12
    best clubs»), Tripadvisor, vienna.info (официальный туризм города, с
    редакционным текстом), Alotea («Best Nightclubs in Vienna»), YouTube ×2,
    Yelp, Trip.com. **5 слотов**, без танцевального авторитета (нет RA), но
    плотная местная туристическая редакция — тот же тип, что уже принят
    winnable для Будапешта/Праги/Манчестера.
  - Chicago («best clubs in chicago»): Reddit ×3 (включая r/chicagoEDM), **Time
    Out** («The best clubs in Chicago for dancing» — называет Smart Bar,
    Podlasie, реально танцевальный/хаус фокус), Tripadvisor, Choose Chicago
    (офиц. туризм, но живая музыка не клубы), YouTube, Smartbar/PRYSM
    (собственные сайты венью), Facebook, Yelp. **2 редакционных слота**
    (Time Out, Tripadvisor) — слабее остальных четырёх по числу, но Time Out
    точно на теме (хаус-клубы, не lounge). Проверить на стадии 6
    каннибализацию с `house-music-guide.html` (Чикаго уже фигурирует как
    место рождения жанра) — разный интент (гид по клубам города vs гид по
    жанру), тот же паттерн уже принят для Berlin (techno-music-guide.html +
    best-clubs-in-berlin.html сосуществуют).
  - Bristol («best clubs in bristol»): Reddit ×3, Tripadvisor, **Visit
    Bristol** (офиц. туризм, называет Thekla и The Fleece), **Skiddle**
    («The Best Clubs in Bristol», музыкально-билетный сайт, редакция),
    **CN Traveller** («The best bars, clubs and live music in Bristol»,
    настоящая редакция), **StagWeb** (листикл для мальчишников, называет
    Lakota/Thekla/SWX/Basement 45/Pam Pam), Headfirst Bristol (листинги),
    **Lakota** (собственный сайт — легендарный бристольский клуб басовой
    сцены, прямое пересечение с профилем сайта: Bristol уже центральная тема
    в drum-and-bass-guide, dubstep-guide, uk-electronic-music-evolution).
    Yelp — коллизия с Bristol, Коннектикут, не Бристоль UK. **4 сильных
    редакционных слота** (CN Traveller, Skiddle, Visit Bristol, StagWeb).
    Единственный из пяти городов, где сама тема (Bristol = бас-музыка,
    Lakota) напрямую совпадает с жанровым профилем владельца — ответ на
    вопрос §5 `KEYWORD-METHOD.md` здесь самый сильный из пяти.
  - Mexico City («best clubs in mexico city»): Local Pack (Fünk Club, Patrick
    Miller — реальные венью), Reddit ×3, **RA guide** («The Best Clubs in
    Mexico City in 2026» — танцевальный авторитет), **The Partying
    Traveler**, **Get Lost In Mexico City**, **Trippin** («Selected by
    Paurro»), **Time Out**, Hotels.com (листикл), Yelp, Tripadvisor.
    **5+ редакционных слотов** с RA — сильнейшая выдача вместе с Lisbon.
  - Вывод по данным (не вердикт): все пять показывают тот же профиль, что уже
    девять раз подтверждён winnable на этом сайте (Amsterdam, Ibiza, NYC,
    Tokyo, Budapest, Prague, Manchester) — ни одного города с нулём
    редакционных слотов, ни одного, где топ-10 — это чистые платформы
    (в отличие от Boom/Roskilde). Lisbon, Bristol и Mexico City выглядят
    сильнее Vienna и Chicago по числу и качеству слотов; Bristol сильнее всех
    по жанровому соответствию сайту.
- Чего нет: стадия 3 (related/PASF за пределами того, что показал сам SERP)
  и стадия 5 (competitor mining — organic keywords конкурентов) не пройдены
  ни по одному из четырёх кандидатов; GB-выдача не снималась ни для одного;
  PAA-блок для городов не появился ни на одном запросе (только «people also
  search for» — тот же паттерн, что уже отмечен для Токио/Будапешта/Праги/
  Манчестера); стадия 6 — отдельный проход.

- **Bristol написан 2026-09-25** (владелец: «lets go first 3» по приоритетному
  списку рядов 9-12 — Bristol/Lisbon/Mexico City; владелец сначала попросил
  распараллелить на три фоновых агента, затем передумал («stop and do 1 by
  1») после вопроса про токен-экономику параллельных агентов — Bristol
  сделан последовательно, в основной сессии, без сабагентов). Инструмент:
  живой Google (Browser pane) для фактов и конкурентного ресёрча (стадия 5
  частично закрыта — Resident Advisor, Mixmag, Bristol24/7, BristolWorld,
  The Tab, Daily Express, FIXR Blog прочитаны), объём переиспользован из
  прохода 2026-09-24 (Keyword Planner, без нового вызова). Главный сюжет —
  не жанровая история, а текущая: Motion (Avon Street, с 2006, 4000 мест,
  DJ Mag топ-клуб) потерял аренду и закрылся в июле 2025, кампания
  #KEEPMOTIONMOVING, переоткрылся на Victoria Terrace тем же летом —
  подтверждено независимо RA/Mixmag/BristolWorld/The Tab/Express. Lakota
  (Upper York Street, с начала 1990-х, RA: «home of the underground») —
  честный джангл/dnb-угол через реальные букинги (Metalheadz Blue Note
  Sessions, Jungle Cakes, Eatbrain/Neuroheadz, Andy C NYE 2021), не через
  заявление «это наш жанр». Thekla (переоборудованный сухогруз 1959 года,
  в Бристоле с 1983, открыт 1 мая 1984 как The Old Profanity Showboat, DHP
  Family) — живой концертный венью, который также держит клубные ночи.
  Два видео из каталога — Hodge и Shanti Celeste, оба «Boiler Room Bristol»
  2015 года, найдены веб-поиском (Apple Music DJ-mix листинг с точными
  датами), сверены с selector-data.json по имени артиста, подтверждены
  через oEmbed-заголовок самого YouTube-видео; ни один источник не называет
  конкретный клуб, поэтому в тексте оба embed не привязаны к Lakota/Motion.
  Картинки: Wikimedia Commons API (commons.wikimedia.org/w/api.php),
  лицензии проверены через imageinfo/extmetadata перед скачиванием — Lakota
  (Neil Owen, CC BY-SA 2.0, Geograph, 2011) и Thekla (The wub, CC BY-SA 4.0,
  2023); для Motion лицензионного фото не нашлось ни на одной площадке —
  открытый пробел, не скрыт. Humanizer-проход и `bristol-clubs-editorial-
  review.md` прошли ДО объявления готовности (не задним числом, как у
  Токио/Будапешта) — найдено и исправлено: one not-X-but-Y в открывающем
  абзаце, запятая-сращение в разделе про Motion, метаописание 172 символа
  (лимит 165) сокращено до 160. Честно зафиксирован конфликт источников по
  году основания Lakota (1990 по music.co.uk vs 1992 по The Tab) — не
  выбран произвольно. `keywords/bristol-clubs.json`, `media/bristol-
  clubs.json`, `bristol-clubs-draft.md`, `build-bristol-clubs-article.mjs`,
  картинки в `img/bristol-clubs/`, OG-карточка, записи в `pages.mjs`,
  `home-articles.mjs`, `scripts/build.mjs`, `scripts/og-articles-covers.
  json`, TAKEN-KEYWORDS.md регенерирован. `node scripts/build.mjs` +
  `node audit-all.mjs` (20/20) + `npm run check:html` + `npm run
  check:links` + `npm run check:layout` (458 тестов) — всё чисто. Визуальная
  проверка через Browser pane (desktop + mobile) — рендерится корректно.
  Не закрыто: стадия 5 не для всех конкурентов (только текстовые источники,
  не Ahrefs/organic-keywords), GB-выдача не снималась, таблица клубов — три
  венью, не пять-восемь как у конкурентов (SWX/Marble Factory/Basement 45/
  The Fleece названы в прозе, не исследованы вглубь), стадия 6 отдельным
  проходом не пройдена, переводов de/fr нет. **Не запушено.**
