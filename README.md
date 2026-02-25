# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and Technology Developments

* [Deterministic Programming with LLMs](https://www.mcherm.com/deterministic-programming-with-llms.html) explores the integration of large language models in deterministic programming paradigms to enhance computational predictability and reliability. [Comments](https://lobste.rs/s/d5epfz/deterministic_programming_with_llms)

* [Practical Decentralization](https://pfrazee.com/blog/practical-decentralization) delves into decentralized systems, providing insights on their realistic application amidst evolving online infrastructure. [Comments](https://lobste.rs/s/sys4eu/practical_decentralization)

* [Large-Scale Online Deanonymization with LLMs](https://substack.com/home/post/p-189015749) investigates how large language models can be used for identifying anonymous individuals from online data. [Comments](https://lobste.rs/s/f38mb8/large_scale_online_deanonymization_with)

* [Fake Job Interviews Are Installing Backdoors on Developer Machines](https://threatroad.substack.com/p/fake-job-interviews-are-installing) raises awareness of a growing cybersecurity threat where fake job interviews open backdoors on developer systems. [Comments](https://lobste.rs/s/llboto/fake_job_interviews_are_installing)

## Gaming and Technology Innovations

* [AI Agent Throws LAN Party](https://soylentnews.org/article.pl?sid=26/02/24/0734201&amp;from=rss) details an AI experiment successfully organizing a virtual multiplayer gaming event. [Comments](https://soylentnews.org/article.pl?sid=26/02/24/0734201&amp;from=rss)

* [Porting Doom to a 20-year-old VoIP phone](https://0x19.co/post/snom360_doom/) demonstrates the technical feat of running the iconic video game Doom on aged technology. [Comments](https://lobste.rs/s/be27h4/porting_doom_20_year_old_voip_phone)

## Cultural and Societal Shifts

* [DVD Sales Decline Slows Sharply as Gen Z Discovers the Appeal of Physical Media](https://entertainment.slashdot.org/story/26/02/25/1517205/dvd-sales-decline-slows-sharply-as-gen-z-discovers-the-appeal-of-physical-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) discusses the unexpected resurgence of physical media as younger audiences uncover its nostalgic value. [Comments](https://entertainment.slashdot.org/story/26/02/25/1517205/dvd-sales-decline-slows-sharply-as-gen-z-discovers-the-appeal-of-physical-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Americans Are Destroying Flock Surveillance Cameras](https://yro.slashdot.org/story/26/02/25/1632246/americans-are-destroying-flock-surveillance-cameras?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) examines societal pushback against mass surveillance, focusing on incidents of surveillance camera destruction. [Comments](https://yro.slashdot.org/story/26/02/25/1632246/americans-are-destroying-flock-surveillance-cameras?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Scientific Discoveries and Innovations

* [Astronomers Identify a Galaxy Made Almost Entirely of Dark Matter](https://soylentnews.org/article.pl?sid=26/02/24/0444250&amp;from=rss) uncovers astronomical findings about a galaxy predominantly composed of elusive dark matter. [Comments](https://soylentnews.org/article.pl?sid=26/02/24/0444250&amp;from=rss)

* [Scientists Crack the Case of 'Screeching' Scotch Tape](https://science.slashdot.org/story/26/02/25/1446236/scientists-crack-the-case-of-screeching-scotch-tape?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) reveals the scientific explanation behind the peculiar sound emitted by unrolling adhesive tape. [Comments](https://science.slashdot.org/story/26/02/25/1446236/scientists-crack-the-case-of-screeching-scotch-tape?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Programming and Systematic Innovations

* [Recursive Make Considered Harmful [1998,2006]](https://accu.org/journals/overload/14/71/miller_2004/) revisits a seminal discussion against the use of recursive make in software builds. [Comments](https://lobste.rs/s/to9uvq/recursive_make_considered_harmful_1998)

* [Devirtualization and Static Polymorphism](https://david.alvarezrosa.com/posts/devirtualization-and-static-polymorphism/) illuminates advances in optimizing polymorphic operations for compiled languages. [Comments](https://lobste.rs/s/qerqwv/devirtualization_static_polymorphism)

---

## Below are the rules that were sent.

### System content.

Rules:

1. You are a news robot that summarizes a list of links and their associated descriptions.
2. Use the following markdown for the top most header in the final output: [News Summary](https://kherrick.github.io/news-summary/)
3. The news items are given to you in date ordered markdown format.
4. Make one section per day, but do not include dates in the section headers.
5. Under each day's section, group each item of news together under a commonly themed sub-section with an appropriate description.
6. While each news item is a string, use valid markdown to include relevant links to articles and their associated comments.
7. Within a news item, do not use links for articles and comments from other news items' article or comment links.
8. You must ONLY RESPOND IN JSON according to the following JSON Schema:

```json
{"$schema":"http://json-schema.org/draft-07/schema#","$id":"https://kherrick.github.io/news-summary/news-summary-schema.json","type":"object","properties":{"heading":{"type":"string"},"sections":{"type":"array","items":{"type":"object","properties":{"title":{"type":"string"},"newsItems":{"type":"array","items":{"type":"string"},"minItems":1}},"required":["title","newsItems"]},"minItems":1}},"required":["heading","sections"]}
```

### User content.

Highlight the most unique and interesting articles from within the bulleted list that follows:

* [2026-02-25, 22:15:04](https://lobste.rs/s/d5epfz/deterministic_programming_with_llms) - [Deterministic Programming with LLMs](https://www.mcherm.com/deterministic-programming-with-llms.html)
* [2026-02-25, 21:45:04](https://lobste.rs/s/jakwkg/slow_death_power_user) - [The Slow Death of the Power User](https://fireborn.mataroa.blog/blog/the-slow-death-of-the-power-user/)
* [2026-02-25, 21:35:00](https://soylentnews.org/article.pl?sid=26/02/24/0734201&amp;from=rss) - [AI Agent Throws LAN Party](https://soylentnews.org/article.pl?sid=26/02/24/0734201&amp;from=rss)
* [2026-02-25, 21:26:55](https://lobste.rs/s/ghsrqv/text_based_google_directions) - [Text-Based Google Directions](https://gdir.telae.net/)
* [2026-02-25, 21:16:34](https://lobste.rs/s/vtyttw/what_interesting_smaller_conferences) - [What interesting (and smaller) conferences are there in 2026?](https://lobste.rs/s/vtyttw/what_interesting_smaller_conferences)
* [2026-02-25, 21:11:44](https://news.ycombinator.com/item?id=47157919) - [ECS Survivors Parts VII – X](https://blog.ptidej.net/ecs-survivors-parts-vii-x/)
* [2026-02-25, 21:00:00](https://yro.slashdot.org/story/26/02/25/1632246/americans-are-destroying-flock-surveillance-cameras?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Americans Are Destroying Flock Surveillance Cameras](https://yro.slashdot.org/story/26/02/25/1632246/americans-are-destroying-flock-surveillance-cameras?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-25, 20:47:38](https://lobste.rs/s/qerqwv/devirtualization_static_polymorphism) - [Devirtualization and Static Polymorphism](https://david.alvarezrosa.com/posts/devirtualization-and-static-polymorphism/)
* [2026-02-25, 20:29:37](https://news.ycombinator.com/item?id=47157398) - [Making MCP cheaper via CLI](https://kanyilmaz.me/2026/02/23/cli-vs-mcp.html)
* [2026-02-25, 20:22:34](https://lobste.rs/s/to9uvq/recursive_make_considered_harmful_1998) - [Recursive Make Considered Harmful [1998,2006]](https://accu.org/journals/overload/14/71/miller_2004/)
* [2026-02-25, 20:16:47](https://news.ycombinator.com/item?id=47157224) - [Jimi Hendrix was a systems engineer](https://spectrum.ieee.org/jimi-hendrix-systems-engineer)
* [2026-02-25, 20:11:49](https://lobste.rs/s/sys4eu/practical_decentralization) - [Practical Decentralization](https://pfrazee.com/blog/practical-decentralization)
* [2026-02-25, 20:11:37](https://news.ycombinator.com/item?id=47157160) - [PA Bench: Evaluating Frontier Models on Multi-Tab Pa Tasks](https://vibrantlabs.com/blog/pa-bench)
* [2026-02-25, 20:01:00](https://games.slashdot.org/story/26/02/25/1622230/xbox-co-founder-says-microsoft-is-quietly-sunsetting-the-platform?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Xbox Co-founder Says Microsoft is Quietly Sunsetting the Platform](https://games.slashdot.org/story/26/02/25/1622230/xbox-co-founder-says-microsoft-is-quietly-sunsetting-the-platform?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-25, 19:00:00](https://yro.slashdot.org/story/26/02/25/1524257/hacker-used-anthropics-claude-to-steal-sensitive-mexican-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hacker Used Anthropic&apos;s Claude To Steal Sensitive Mexican Data](https://yro.slashdot.org/story/26/02/25/1524257/hacker-used-anthropics-claude-to-steal-sensitive-mexican-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-25, 18:50:02](https://lobste.rs/s/f38mb8/large_scale_online_deanonymization_with) - [Large-Scale Online Deanonymization with LLMs](https://substack.com/home/post/p-189015749)
* [2026-02-25, 18:49:09](https://lobste.rs/s/be27h4/porting_doom_20_year_old_voip_phone) - [Porting Doom to a 20-year-old VoIP phone](https://0x19.co/post/snom360_doom/)
* [2026-02-25, 18:41:23](https://news.ycombinator.com/item?id=47155811) - [Devirtualization and Static Polymorphism](https://david.alvarezrosa.com/posts/devirtualization-and-static-polymorphism/)
* [2026-02-25, 18:28:37](https://news.ycombinator.com/item?id=47155597) - [Show HN: I ported Tree-sitter to Go](https://github.com/odvcencio/gotreesitter)
* [2026-02-25, 18:27:11](https://lobste.rs/s/llboto/fake_job_interviews_are_installing) - [Fake Job Interviews Are Installing Backdoors on Developer Machines](https://threatroad.substack.com/p/fake-job-interviews-are-installing)
* [2026-02-25, 18:00:00](https://entertainment.slashdot.org/story/26/02/25/1517205/dvd-sales-decline-slows-sharply-as-gen-z-discovers-the-appeal-of-physical-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DVD Sales Decline Slows Sharply as Gen Z Discovers the Appeal of Physical Media](https://entertainment.slashdot.org/story/26/02/25/1517205/dvd-sales-decline-slows-sharply-as-gen-z-discovers-the-appeal-of-physical-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-25, 17:48:21](https://news.ycombinator.com/item?id=47154971) - [The Om Programming Language](https://www.om-language.com/)
* [2026-02-25, 17:16:59](https://lobste.rs/s/l4nw7u/windows_11_notepad_support_markdown) - [Windows 11 Notepad to support markdown](https://blogs.windows.com/windows-insider/2026/01/21/notepad-and-paint-updates-begin-rolling-out-to-windows-insiders/)
* [2026-02-25, 17:14:19](https://news.ycombinator.com/item?id=47154399) - [Windows 11 Notepad to support Markdown](https://blogs.windows.com/windows-insider/2026/01/21/notepad-and-paint-updates-begin-rolling-out-to-windows-insiders/)
* [2026-02-25, 17:02:12](https://news.ycombinator.com/item?id=47154246) - [Trellis AI (YC W24) is hiring deployment lead to accelerate medication access](https://www.ycombinator.com/companies/trellis-ai/jobs/7ZlvQkN-lead-deployment-strategist)
* [2026-02-25, 17:00:00](https://science.slashdot.org/story/26/02/25/1446236/scientists-crack-the-case-of-screeching-scotch-tape?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Crack the Case of &apos;Screeching&apos; Scotch Tape](https://science.slashdot.org/story/26/02/25/1446236/scientists-crack-the-case-of-screeching-scotch-tape?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-25, 16:49:36](https://news.ycombinator.com/item?id=47154076) - [Why isn&apos;t LA repaving streets?](https://lapublicpress.org/2026/02/why-isnt-la-repaving-streets/)
* [2026-02-25, 16:47:33](https://news.ycombinator.com/item?id=47154042) - [Racket v9.1](https://blog.racket-lang.org/2026/02/racket-v9-1.html)
* [2026-02-25, 16:44:54](https://news.ycombinator.com/item?id=47154009) - [Following 35% growth, solar has passed hydro on US grid](https://arstechnica.com/science/2026/02/final-2025-data-is-in-us-energy-use-is-up-as-solar-passes-hydro/)
* [2026-02-25, 16:41:09](https://lobste.rs/s/ocjdrt/dictionary_algorithms_data_structures) - [Dictionary of Algorithms and Data Structures](https://xlinux.nist.gov/dads/)
* [2026-02-25, 16:38:40](https://news.ycombinator.com/item?id=47153924) - [The Misuses of the University](https://www.publicbooks.org/the-misuses-of-the-university/)
* [2026-02-25, 16:37:00](https://soylentnews.org/article.pl?sid=26/02/24/0444250&amp;from=rss) - [Astronomers Identify a Galaxy Made Almost Entirely of Dark Matter](https://soylentnews.org/article.pl?sid=26/02/24/0444250&amp;from=rss)
* [2026-02-25, 16:31:26](https://news.ycombinator.com/item?id=47153798) - [Bus stop balancing is fast, cheap, and effective](https://worksinprogress.co/issue/the-united-states-needs-fewer-bus-stops/)
* [2026-02-25, 16:00:00](https://slashdot.org/story/26/02/25/1124220/microsoft-japan-raided-over-suspected-violation-of-anti-monopoly-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Japan Raided Over Suspected Violation of Anti-Monopoly Law](https://slashdot.org/story/26/02/25/1124220/microsoft-japan-raided-over-suspected-violation-of-anti-monopoly-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-25, 15:37:29](https://news.ycombinator.com/item?id=47152982) - [GNU Texmacs](https://www.texmacs.org/tmweb/home/welcome.en.html)
* [2026-02-25, 15:00:00](https://tech.slashdot.org/story/26/02/25/1321256/uber-previews-its-dubai-air-taxi-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Uber Previews Its Dubai Air Taxi Service](https://tech.slashdot.org/story/26/02/25/1321256/uber-previews-its-dubai-air-taxi-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-25, 14:48:17](https://news.ycombinator.com/item?id=47152252) - [US orders diplomats to fight data sovereignty initiatives](https://www.reuters.com/sustainability/boards-policy-regulation/us-orders-diplomats-fight-data-sovereignty-initiatives-2026-02-25/)
* [2026-02-25, 14:37:21](https://news.ycombinator.com/item?id=47152085) - [New accounts on HN more likely to use em-dashes](https://www.marginalia.nu/weird-ai-crap/hn/)
* [2026-02-25, 14:35:23](https://lobste.rs/s/bwkwba/new_accounts_on_hn_10x_more_likely_use_em) - [New accounts on HN 10x more likely to use EM-dashes](https://www.marginalia.nu/weird-ai-crap/hn/)
* [2026-02-25, 14:31:35](https://news.ycombinator.com/item?id=47151995) - [Show HN: Django Control Room – All Your Tools Inside the Django Admin](https://github.com/yassi/dj-control-room)
* [2026-02-25, 14:26:21](https://lobste.rs/s/shzh0m/current_large_audio_language_models) - [Current Large Audio Language Models largely transcribe rather than listen](https://arxiv.org/abs/2510.10444)
* [2026-02-25, 14:23:13](https://lobste.rs/s/8utm05/tests_are_new_moat) - [Tests Are The New Moat](https://saewitz.com/tests-are-the-new-moat)
* [2026-02-25, 14:21:19](https://news.ycombinator.com/item?id=47151842) - [Show HN: Respectify – A comment moderator that teaches people to argue better](https://respectify.org/)
* [2026-02-25, 14:02:02](https://news.ycombinator.com/item?id=47151598) - [Launch HN: TeamOut (YC W22) – AI agent for planning company retreats](https://app.teamout.com/ai)
* [2026-02-25, 14:00:00](https://slashdot.org/story/26/02/25/1355245/anthropic-drops-flagship-safety-pledge?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Drops Flagship Safety Pledge](https://slashdot.org/story/26/02/25/1355245/anthropic-drops-flagship-safety-pledge?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-25, 13:50:34](https://lobste.rs/s/d4lblv/language_oriented_programming_with) - [Language-Oriented Programming with Racket (2019)](https://www.youtube.com/watch?v=z8Pz4bJV3Tk)
* [2026-02-25, 13:31:17](https://news.ycombinator.com/item?id=47151233) - [Never buy a .online domain](https://www.0xsid.com/blog/online-tld-is-pain)
* [2026-02-25, 13:07:01](https://lobste.rs/s/qjl5xc/your_system_is_fine_your_users_aren_t) - [Your system is fine. Your users aren&apos;t](https://blog.incrementalforgetting.tech/p/your-system-is-fine-your-users-arent)
* [2026-02-25, 12:00:00](https://tech.slashdot.org/story/26/02/25/0540220/hp-says-memorys-contribution-to-pc-costs-just-doubled-to-35?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [HP Says Memory&apos;s Contribution To PC Costs Just Doubled To 35%](https://tech.slashdot.org/story/26/02/25/0540220/hp-says-memorys-contribution-to-pc-costs-just-doubled-to-35?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-25, 11:55:00](https://soylentnews.org/article.pl?sid=26/02/24/0437208&amp;from=rss) - [China Remains Embedded in US Energy Networks &apos;for the Purpose of Taking It Down&apos;](https://soylentnews.org/article.pl?sid=26/02/24/0437208&amp;from=rss)
* [2026-02-25, 10:16:22](https://news.ycombinator.com/item?id=47149701) - [Danish government agency to ditch Microsoft software (2025)](https://therecord.media/denmark-digital-agency-microsoft-digital-independence)
* [2026-02-25, 08:00:00](https://apple.slashdot.org/story/26/02/25/0435253/apples-touch-screen-macbook-pro-to-have-dynamic-island-new-interface?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple&apos;s Touch-Screen MacBook Pro To Have Dynamic Island, New Interface](https://apple.slashdot.org/story/26/02/25/0435253/apples-touch-screen-macbook-pro-to-have-dynamic-island-new-interface?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-25, 07:22:56](https://news.ycombinator.com/item?id=47148454) - [Claude Code Remote Control](https://code.claude.com/docs/en/remote-control)
* [2026-02-25, 07:13:00](https://soylentnews.org/article.pl?sid=26/02/24/0427256&amp;from=rss) - [California Bill Would Restrict 3D Printers to State-Approved Models to Prevent Making  Gun Parts](https://soylentnews.org/article.pl?sid=26/02/24/0427256&amp;from=rss)
* [2026-02-25, 04:01:00](https://hardware.slashdot.org/story/26/02/24/206224/the-us-had-a-big-battery-boom-last-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The US Had a Big Battery Boom Last Year](https://hardware.slashdot.org/story/26/02/24/206224/the-us-had-a-big-battery-boom-last-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-25, 02:26:00](https://soylentnews.org/article.pl?sid=26/02/24/0420243&amp;from=rss) - [AI Apps on the Google Play Store Are Leaking Customer Data and Photos](https://soylentnews.org/article.pl?sid=26/02/24/0420243&amp;from=rss)
* [2026-02-25, 01:43:23](https://lobste.rs/s/mo0hgf/justifying_text_wrap_pretty) - [Justifying text-wrap: pretty](https://matklad.github.io/2026/02/14/justifying-text-wrap-pretty.html)
* [2026-02-25, 01:30:00](https://science.slashdot.org/story/26/02/24/200231/first-british-baby-born-using-transplanted-womb-from-dead-donor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [First British Baby Born Using Transplanted Womb From Dead Donor](https://science.slashdot.org/story/26/02/24/200231/first-british-baby-born-using-transplanted-womb-from-dead-donor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-24, 22:59:23](https://lobste.rs/s/rhoktj/ansigpt_c89_implementation_microgpt) - [ansigpt: c89 implementation of microgpt](https://github.com/yobibyte/ansigpt)
* [2026-02-24, 22:30:00](https://it.slashdot.org/story/26/02/24/1950253/meta-ai-security-researcher-said-an-openclaw-agent-ran-amok-on-her-inbox?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta AI Security Researcher Said an OpenClaw Agent Ran Amok on Her Inbox](https://it.slashdot.org/story/26/02/24/1950253/meta-ai-security-researcher-said-an-openclaw-agent-ran-amok-on-her-inbox?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-24, 21:41:00](https://soylentnews.org/politics/article.pl?sid=26/02/23/103249&amp;from=rss) - [OS-Level Age Verification in Proposed Legislation in Colorado](https://soylentnews.org/politics/article.pl?sid=26/02/23/103249&amp;from=rss)
* [2026-02-24, 21:00:00](https://news.slashdot.org/story/26/02/24/1935207/new-datacentres-risk-doubling-great-britains-electricity-use-regulator-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Datacentres Risk Doubling Great Britain&apos;s Electricity Use, Regulator Says](https://news.slashdot.org/story/26/02/24/1935207/new-datacentres-risk-doubling-great-britains-electricity-use-regulator-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-24, 20:46:38](https://lobste.rs/s/1to8sq/charm_v2_major_releases_for_bubble_tea_lip) - [Charm v2: Major releases for Bubble Tea, Lip Gloss, and Bubbles for terminal UIs in Go](https://charm.land/blog/v2/)
* [2026-02-24, 20:00:00](https://it.slashdot.org/story/26/02/24/1911240/crowdstrike-says-attackers-are-moving-through-networks-in-under-30-minutes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CrowdStrike Says Attackers Are Moving Through Networks in Under 30 Minutes](https://it.slashdot.org/story/26/02/24/1911240/crowdstrike-says-attackers-are-moving-through-networks-in-under-30-minutes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-24, 18:59:31](https://news.ycombinator.com/item?id=47141107) - [Learnings from 4 months of Image-Video VAE experiments](https://www.linum.ai/field-notes/vae-reconstruction-vs-generation)
* [2026-02-24, 17:18:17](https://news.ycombinator.com/item?id=47139716) - [Large-Scale Online Deanonymization with LLMs](https://simonlermen.substack.com/p/large-scale-online-deanonymization)
* [2026-02-24, 16:56:00](https://soylentnews.org/article.pl?sid=26/02/23/0959244&amp;from=rss) - [Is This Glass Square the Long, Long Future of Data Storage ?](https://soylentnews.org/article.pl?sid=26/02/23/0959244&amp;from=rss)
* [2026-02-24, 14:58:28](https://lobste.rs/s/vi9msd/just_little_detail_wouldn_t_sell_anything) - [“Just a little detail that wouldn’t sell anything”](https://unsung.aresluna.org/just-a-little-detail-that-wouldnt-sell-anything/)
* [2026-02-24, 13:56:43](https://lobste.rs/s/tzyslr/reducing_size_go_binaries_by_up_77) - [Reducing the size of Go binaries by up to 77%](https://www.datadoghq.com/blog/engineering/agent-go-binaries/)
* [2026-02-24, 13:49:39](https://news.ycombinator.com/item?id=47137140) - [Dissecting the CPU-memory relationship in garbage collection (OpenJDK 26)](https://norlinder.nu/posts/GC-Cost-CPU-vs-Memory/)
* [2026-02-24, 13:02:10](https://lobste.rs/s/kwpvgy/goodbye_innerhtml_hello_sethtml) - [Goodbye innerHTML, Hello setHTML: Stronger XSS Protection in Firefox 148](https://hacks.mozilla.org/2026/02/goodbye-innerhtml-hello-sethtml-stronger-xss-protection-in-firefox-148/)
* [2026-02-24, 12:10:38](https://lobste.rs/s/kx2sp3/lines_code_are_back_it_s_worse_than_before) - [Lines of Code Are Back (And It&apos;s Worse Than Before)](https://www.thepragmaticcto.com/p/lines-of-code-are-back-and-its-worse)
* [2026-02-24, 12:09:00](https://soylentnews.org/article.pl?sid=26/02/23/010246&amp;from=rss) - [Two Days of Oatmeal Reduce Cholesterol Level](https://soylentnews.org/article.pl?sid=26/02/23/010246&amp;from=rss)
* [2026-02-24, 07:21:00](https://soylentnews.org/article.pl?sid=26/02/23/0058242&amp;from=rss) - [Video Games are Losing the \&quot;Attention War\&quot; to Gambling, Porn, and Crypto](https://soylentnews.org/article.pl?sid=26/02/23/0058242&amp;from=rss)
* [2026-02-24, 02:37:00](https://soylentnews.org/article.pl?sid=26/02/23/0050217&amp;from=rss) - [Why Are Tatooine Planets Rare? Blame General Relativity](https://soylentnews.org/article.pl?sid=26/02/23/0050217&amp;from=rss)
* [2026-02-24, 02:29:14](https://lobste.rs/s/rhgsiy/x86css_x86_cpu_emulator_written_css) - [x86CSS - An x86 CPU emulator written in CSS](https://lyra.horse/x86css/)
* [2026-02-23, 21:53:00](https://soylentnews.org/article.pl?sid=26/02/22/1313253&amp;from=rss) - [How Digitally Sovereign is Your Organization? This Red Hat Tool Can Tell You in Minutes](https://soylentnews.org/article.pl?sid=26/02/22/1313253&amp;from=rss)
* [2026-02-23, 17:07:00](https://soylentnews.org/article.pl?sid=26/02/22/1311241&amp;from=rss) - [Goodbye Paper Vehicle Titles – Illinois State is Making Digital Mandatory](https://soylentnews.org/article.pl?sid=26/02/22/1311241&amp;from=rss)
* [2026-02-23, 12:22:00](https://soylentnews.org/article.pl?sid=26/02/22/139236&amp;from=rss) - [Concrete “Battery” Developed at MIT Now Packs 10 Times the Power](https://soylentnews.org/article.pl?sid=26/02/22/139236&amp;from=rss)
* [2026-02-23, 07:41:00](https://soylentnews.org/article.pl?sid=26/02/22/1259218&amp;from=rss) - [Privacy Is Not a Price You Pay for Growth](https://soylentnews.org/article.pl?sid=26/02/22/1259218&amp;from=rss)
* [2026-02-23, 02:55:00](https://soylentnews.org/article.pl?sid=26/02/22/1256215&amp;from=rss) - [Pink Noise Reduces REM Sleep and May Harm Sleep Quality](https://soylentnews.org/article.pl?sid=26/02/22/1256215&amp;from=rss)
* [2026-02-22, 22:42:12](https://news.ycombinator.com/item?id=47115574) - [How to fold the Blade Runner origami unicorn (1996)](https://web.archive.org/web/20011104015933/www.linkclub.or.jp/~null/index_br.html)
* [2026-02-22, 22:10:00](https://soylentnews.org/article.pl?sid=26/02/21/1350257&amp;from=rss) - [Richard Stallman: The Legend of Software Freedom That Saved the World](https://soylentnews.org/article.pl?sid=26/02/21/1350257&amp;from=rss)
* [2026-02-22, 17:28:00](https://soylentnews.org/article.pl?sid=26/02/21/1339255&amp;from=rss) - [NASA Releases Starliner Failures Report as It Preps for March Launch of Artemis 2](https://soylentnews.org/article.pl?sid=26/02/21/1339255&amp;from=rss)
* [2026-02-22, 14:03:01](https://news.ycombinator.com/item?id=47111092) - [Scipy.stats. Chatterjeexi](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.chatterjeexi.html)
* [2026-02-22, 12:41:00](https://soylentnews.org/article.pl?sid=26/02/21/1334230&amp;from=rss) - [Microsoft&apos;s New Windows 11 Speed Test is Just a Link to Ookla&apos;s Speedtest Via Bing](https://soylentnews.org/article.pl?sid=26/02/21/1334230&amp;from=rss)
* [2026-02-22, 11:07:25](https://news.ycombinator.com/item?id=47110066) - [Access to a Shared Unix Computer](http://tilde.club/)
* [2026-02-22, 07:59:00](https://soylentnews.org/article.pl?sid=26/02/21/1326214&amp;from=rss) - [It&apos;s Time to Get Rid of Networked Cameras](https://soylentnews.org/article.pl?sid=26/02/21/1326214&amp;from=rss)
* [2026-02-22, 03:14:00](https://soylentnews.org/article.pl?sid=26/02/21/1322208&amp;from=rss) - [Mechanochemical Breakthrough Unlocks Cheap, Safe, Powdered Hydrogen](https://soylentnews.org/article.pl?sid=26/02/21/1322208&amp;from=rss)
* [2026-02-21, 22:32:00](https://soylentnews.org/article.pl?sid=26/02/21/137227&amp;from=rss) - [Did We Just See a Black Hole Explode?](https://soylentnews.org/article.pl?sid=26/02/21/137227&amp;from=rss)
* [2026-02-21, 17:49:00](https://soylentnews.org/article.pl?sid=26/02/21/0130244&amp;from=rss) - [AIRD -  a New Term for Workers Freaking Out Over Being Replaced by AI](https://soylentnews.org/article.pl?sid=26/02/21/0130244&amp;from=rss)
* [2026-02-21, 17:10:55](https://news.ycombinator.com/item?id=47102610) - [Text-Based Google Directions](https://gdir.telae.net/)
* [2026-02-21, 12:55:00](https://soylentnews.org/article.pl?sid=26/02/21/0126215&amp;from=rss) - [Hackers Expose Age-Verification Software Powering Surveillance Web](https://soylentnews.org/article.pl?sid=26/02/21/0126215&amp;from=rss)
* [2026-02-21, 08:12:00](https://soylentnews.org/article.pl?sid=26/02/21/0123209&amp;from=rss) - [Visualizing the Internet in 2026](https://soylentnews.org/article.pl?sid=26/02/21/0123209&amp;from=rss)
* [2026-02-21, 03:20:00](https://soylentnews.org/article.pl?sid=26/02/21/0121213&amp;from=rss) - [Palo Alto CEO Says AI Isn&apos;t Great for Business, Yet](https://soylentnews.org/article.pl?sid=26/02/21/0121213&amp;from=rss)
