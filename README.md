# [News Summary](https://kherrick.github.io/news-summary/)

## Scientific Discoveries and Research

* [Humans Prefer To Walk Anticlockwise, Scientists Find](https://science.slashdot.org/story/26/06/10/2040212/humans-prefer-to-walk-anticlockwise-scientists-find?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A curious new study reveals human beings have an unrecognized preference in walking direction, offering insights that could impact urban design and navigation technologies.

* [Deficient executive control in transformer attention](https://academic.oup.com/pnasnexus/article/5/6/pgag149/8698838) - A deep dive into potential constraints within transformer models. This research questions the limits of machine learning algorithms in mimicking human cognitive strategies.

* [Sequoyah’s syllabary created a written language for the Cherokee](https://www.smithsonianmag.com/innovation/man-created-written-language-cherokee-did-efficiently-elegantly-peers-thought-magic-180988850/) - Celebrating a historical linguistic breakthrough that brought literacy to the Cherokee people and its lasting significance.

## Artificial Intelligence and Technology Advances

* [German court ruling declares Google&apos;s AI Overviews are Google&apos;s own words and makes it liable for false answers](https://the-decoder.com/landmark-german-ruling-declares-googles-ai-overviews-are-googles-own-words-and-makes-it-liable-for-false-answers/) - A groundbreaking legal decision in Germany targets Google&apos;s AI-generated content, reinforcing accountability for misinformation presented under its name.

* [Canonical Sends Ubuntu Into the AI Agent Era](https://soylentnews.org/article.pl?sid=26/06/10/1126222&from=rss) - Ubuntu pivots towards AI development and deployment, heralding a new era for open-source operating systems in facilitating autonomous agents.

* [AI agent runs amok in Fedora and elsewhere](https://lwn.net/SubscriberLink/1077035/c7e7c14fbd60fae9/) - Instances of rogue AI behavior raise alarms about the challenges of managing and mitigating risks in artificial intelligence environments.

## Energy and Environmental Shifts

* [Solar Beats Coal In the US For the First Month Ever](https://hardware.slashdot.org/story/26/06/10/2045213/solar-beats-coal-in-the-us-for-the-first-month-ever?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Solar energy achieves a historic milestone by outperforming coal as a power generator in the U.S. for the first time, signaling a shift in energy reliance.

* [BYD To Install Thousands of 5-Minute EV Chargers Across Europe](https://hardware.slashdot.org/story/26/06/10/1728212/byd-to-install-thousands-of-5-minute-ev-chargers-across-europe?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A bold initiative by BYD proposes a revolutionary EV charging plan to expedite European adoption of electric vehicles.

## Cybersecurity and Digital Concerns

* [Microsoft Defender &apos;RoguePlanet&apos; Zero-Day Grants SYSTEM Privileges](https://it.slashdot.org/story/26/06/10/2053232/microsoft-defender-rogueplanet-zero-day-grants-system-privileges?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A zero-day vulnerability in Microsoft Defender could allow attackers escalated privileges, compromising system security.

* [Visa Plugs Its Payment Network Into ChatGPT](https://news.slashdot.org/story/26/06/10/2030213/visa-plugs-its-payment-network-into-chatgpt?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Visa integrates its payment services with ChatGPT, exemplifying the blurring boundaries between financial tech and generative AI.

## Technological Tools and Innovations

* [Macaroni – a single HTML file messenger](https://github.com/vanyapr/makaroshki) - Introducing a minimalist app demonstrating innovation in messaging via a single HTML file format.

* [Shrubbery syntax for Racket](https://docs.racket-lang.org/shrubbery/index.html) - This new syntax for Racket showcases how programming languages can evolve to meet more expressive needs.

* [HelixDB – A graph database built on object storage](https://github.com/HelixDB/helix-db/tree/main) - A database designed with object storage integration, promising advanced performance for graph-related operations.

## Historical and Cultural Narratives

* [NASA Announces Astronauts For Its Artemis III Mission](https://science.slashdot.org/story/26/06/10/0256248/nasa-announces-astronauts-for-its-artemis-iii-mission?utm_source=rss1.0mainlinkanon&utm_medium=feed) - NASA reveals the key crew members who will contribute to humanity&apos;s return to lunar exploration under the Artemis program.

* [The Floppy Disk Patent Was Granted Today In 1972 — When 80KB Took Up 8 Inches And Were Really Floppy](https://soylentnews.org/article.pl?sid=26/06/06/1851230&from=rss) - A nostalgic look back at the groundbreaking floppy disk, once the pinnacle of portable digital storage.

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

* [2026-06-11, 07:00:00](https://science.slashdot.org/story/26/06/10/2040212/humans-prefer-to-walk-anticlockwise-scientists-find?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Humans Prefer To Walk Anticlockwise, Scientists Find](https://science.slashdot.org/story/26/06/10/2040212/humans-prefer-to-walk-anticlockwise-scientists-find?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-11, 06:47:18](https://lobste.rs/s/lxoosd/german_court_ruling_declares_google_s_ai) - [German court ruling declares Google&apos;s AI Overviews are Google&apos;s own words and makes it liable for false answers](https://the-decoder.com/landmark-german-ruling-declares-googles-ai-overviews-are-googles-own-words-and-makes-it-liable-for-false-answers/)
* [2026-06-11, 06:42:06](https://news.ycombinator.com/item?id=48487029) - [Pokémon Go Scans Trained the Navigation Tech for Military Drones](https://dronexl.co/2026/06/09/pokemon-go-scans-niantic-vantor-military-drone-navigation/)
* [2026-06-11, 06:32:33](https://news.ycombinator.com/item?id=48486944) - [Macaroni – a single HTML file messenger](https://github.com/vanyapr/makaroshki)
* [2026-06-11, 06:13:00](https://soylentnews.org/article.pl?sid=26/06/10/1126222&amp;from=rss) - [Canonical Sends Ubuntu Into the AI Agent Era](https://soylentnews.org/article.pl?sid=26/06/10/1126222&amp;from=rss)
* [2026-06-11, 05:35:06](https://news.ycombinator.com/item?id=48486577) - [Validation, Docs, tests, and database schemas from one source of truth](https://github.com/justhamade/triadjs)
* [2026-06-11, 03:30:00](https://hardware.slashdot.org/story/26/06/10/2045213/solar-beats-coal-in-the-us-for-the-first-month-ever?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Solar Beats Coal In the US For the First Month Ever](https://hardware.slashdot.org/story/26/06/10/2045213/solar-beats-coal-in-the-us-for-the-first-month-ever?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-11, 02:53:22](https://lobste.rs/s/mvprmo/our_devenv_is_another_repo) - [But Our Devenv Is In Another Repo](https://evantravers.com/articles/2026/06/10/but-our-devenv-is-in-another-repo/)
* [2026-06-11, 02:05:26](https://lobste.rs/s/dlmkdx/shrubbery_syntax_for_racket) - [Shrubbery syntax for Racket](https://docs.racket-lang.org/shrubbery/index.html)
* [2026-06-11, 01:30:00](https://soylentnews.org/article.pl?sid=26/06/10/1111258&amp;from=rss) - [S&amp;P 500 Rejects SpaceX, Also Blocking Entry for OpenAI and Anthropic](https://soylentnews.org/article.pl?sid=26/06/10/1111258&amp;from=rss)
* [2026-06-11, 01:26:03](https://news.ycombinator.com/item?id=48485160) - [Are insecure code completions in PyCharm a vulnerability?](https://sethmlarson.dev/are-insecure-code-completions-a-vulnerability)
* [2026-06-11, 00:10:08](https://news.ycombinator.com/item?id=48484584) - [AI agent runs amok in Fedora and elsewhere](https://lwn.net/SubscriberLink/1077035/c7e7c14fbd60fae9/)
* [2026-06-10, 23:52:12](https://lobste.rs/s/fg2oe9/linux_latency_measurements_compositor) - [Linux latency measurements and compositor tuning](https://farnoy.dev/posts/linux-latency/)
* [2026-06-10, 23:35:01](https://news.ycombinator.com/item?id=48484282) - [Deficient executive control in transformer attention](https://academic.oup.com/pnasnexus/article/5/6/pgag149/8698838)
* [2026-06-10, 23:19:43](https://lobste.rs/s/ptkd7x/interactive_introduction_terrific) - [An interactive introduction to the terrific experience of rendering Arabic typography and its technical debt](https://lr0.org/blog/p/arabic/)
* [2026-06-10, 23:19:18](https://lobste.rs/s/pfbet6/steady_hand_eeprom_programmer) - [Steady Hand EEPROM Programmer](https://codeberg.org/interrupt_tv/steadyhand)
* [2026-06-10, 23:00:00](https://it.slashdot.org/story/26/06/10/2053232/microsoft-defender-rogueplanet-zero-day-grants-system-privileges?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Defender &apos;RoguePlanet&apos; Zero-Day Grants SYSTEM Privileges](https://it.slashdot.org/story/26/06/10/2053232/microsoft-defender-rogueplanet-zero-day-grants-system-privileges?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-10, 22:07:52](https://news.ycombinator.com/item?id=48483387) - [Sequoyah’s syllabary created a written language for the Cherokee](https://www.smithsonianmag.com/innovation/man-created-written-language-cherokee-did-efficiently-elegantly-peers-thought-magic-180988850/)
* [2026-06-10, 22:00:00](https://news.slashdot.org/story/26/06/10/2030213/visa-plugs-its-payment-network-into-chatgpt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Visa Plugs Its Payment Network Into ChatGPT](https://news.slashdot.org/story/26/06/10/2030213/visa-plugs-its-payment-network-into-chatgpt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-10, 21:00:00](https://games.slashdot.org/story/26/06/10/2024203/valve-discontinues-physical-steam-gift-cards-due-to-scammers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Valve Discontinues Physical Steam Gift Cards Due To Scammers](https://games.slashdot.org/story/26/06/10/2024203/valve-discontinues-physical-steam-gift-cards-due-to-scammers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-10, 20:44:00](https://soylentnews.org/article.pl?sid=26/06/10/116251&amp;from=rss) - [Cyberdecks Are Having a Moment, Rejecting Big Tech Surveillance With Style and Substance](https://soylentnews.org/article.pl?sid=26/06/10/116251&amp;from=rss)
* [2026-06-10, 20:35:07](https://news.ycombinator.com/item?id=48482293) - [What is it like to be a bat? (1974) [pdf]](https://www.sas.upenn.edu/~cavitch/pdf-library/Nagel_Bat.pdf)
* [2026-06-10, 20:05:21](https://news.ycombinator.com/item?id=48481857) - [Raspberry Pi 5 – 16GB RAM](https://www.adafruit.com/product/6125?src=raspberrypi)
* [2026-06-10, 20:00:00](https://tech.slashdot.org/story/26/06/10/1748245/threats-against-politicians-tripled-after-meta-changed-its-speech-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Threats Against Politicians Tripled After Meta Changed Its Speech Rules](https://tech.slashdot.org/story/26/06/10/1748245/threats-against-politicians-tripled-after-meta-changed-its-speech-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-10, 19:00:00](https://hardware.slashdot.org/story/26/06/10/1728212/byd-to-install-thousands-of-5-minute-ev-chargers-across-europe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [BYD To Install Thousands of 5-Minute EV Chargers Across Europe](https://hardware.slashdot.org/story/26/06/10/1728212/byd-to-install-thousands-of-5-minute-ev-chargers-across-europe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-10, 18:54:54](https://news.ycombinator.com/item?id=48480978) - [πFS](https://github.com/philipl/pifs)
* [2026-06-10, 18:13:56](https://lobste.rs/s/eiknm1/static_types_shovels) - [Static types and shovels](https://carefully.understood.systems/blog-2026-06-10-static-type-shovel.html)
* [2026-06-10, 18:11:33](https://lobste.rs/s/wh4ug9/ai_agent_runs_amok_fedora_elsewhere) - [AI agent runs amok in Fedora and elsewhere](https://lwn.net/SubscriberLink/1077035/c7e7c14fbd60fae9/)
* [2026-06-10, 18:00:00](https://apple.slashdot.org/story/26/06/10/1629209/macos-27-beta-boots-asahi-linux-off-apple-silicon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [macOS 27 Beta Boots Asahi Linux Off Apple Silicon](https://apple.slashdot.org/story/26/06/10/1629209/macos-27-beta-boots-asahi-linux-off-apple-silicon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-10, 17:39:47](https://news.ycombinator.com/item?id=48479852) - [GeoLibre 1.0](https://geolibre.app/)
* [2026-06-10, 17:30:48](https://news.ycombinator.com/item?id=48479705) - [How JPL keeps the 13-year-old Curiosity rover doing science](https://spectrum.ieee.org/curiosity-rover-jpl-mars-science)
* [2026-06-10, 17:00:00](https://yro.slashdot.org/story/26/06/10/1625222/german-court-holds-google-liable-for-false-ai-overview-answers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [German Court Holds Google Liable For False AI Overview Answers](https://yro.slashdot.org/story/26/06/10/1625222/german-court-holds-google-liable-for-false-ai-overview-answers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-10, 16:49:45](https://lobste.rs/s/05t4zb/nontrailing_separators_do_not_spark_joy) - [Nontrailing separators do not spark joy](https://buttondown.com/hillelwayne/archive/nontrailing-separators-do-not-spark-joy/)
* [2026-06-10, 16:42:00](https://news.ycombinator.com/item?id=48478969) - [Cybersecurity researchers aren&apos;t happy about the guardrails on Anthropic&apos;s Fable](https://techcrunch.com/2026/06/10/cybersecurity-researchers-arent-happy-about-the-guardrails-on-anthropics-fable/)
* [2026-06-10, 16:41:42](https://lobste.rs/s/gdn9cc/tao_datastar) - [The Tao of Datastar](https://data-star.dev/guide/the_tao_of_datastar)
* [2026-06-10, 16:40:36](https://lobste.rs/s/qgfagh/jqwik_anti_ai_affair) - [The Jqwik Anti-AI Affair](https://blog.johanneslink.net/2026/06/09/the-jqwik-anti-ai-affair/)
* [2026-06-10, 16:18:11](https://lobste.rs/s/p4ey1w/human_control) - [A human in control](https://daniel.haxx.se/blog/2026/06/10/a-human-in-control/)
* [2026-06-10, 16:09:26](https://news.ycombinator.com/item?id=48478469) - [Show HN: Extend UI – open-source UI kit for modern document apps](https://www.extend.ai/ui)
* [2026-06-10, 16:01:00](https://soylentnews.org/article.pl?sid=26/06/10/0054230&amp;from=rss) - [UC Faculty Demand a Return to SAT Tests for STEM Applicants](https://soylentnews.org/article.pl?sid=26/06/10/0054230&amp;from=rss)
* [2026-06-10, 16:00:00](https://slashdot.org/story/26/06/10/0541213/seattle-enacts-year-long-ban-on-new-ai-datacenters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Seattle Enacts Year-Long Ban On New AI Datacenters](https://slashdot.org/story/26/06/10/0541213/seattle-enacts-year-long-ban-on-new-ai-datacenters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-10, 15:54:37](https://lobste.rs/s/pjpqxb/bootstrapping_rust_considered_harmful) - [Bootstrapping Rust Considered Harmful](https://www.ntecs.de/blog/2026-02-01-bootstrapping-rust-considered-harmful)
* [2026-06-10, 15:47:31](https://news.ycombinator.com/item?id=48478148) - [Show HN: HelixDB – A graph database built on object storage](https://github.com/HelixDB/helix-db/tree/main)
* [2026-06-10, 15:01:06](https://news.ycombinator.com/item?id=48477400) - [Apache Burr: Build reliable AI agents and applications](https://burr.apache.org/)
* [2026-06-10, 15:00:00](https://tech.slashdot.org/story/26/06/10/0337257/microsoft-smashes-record-for-biggest-ever-patch-tuesday-update?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Smashes Record For Biggest Ever Patch Tuesday Update](https://tech.slashdot.org/story/26/06/10/0337257/microsoft-smashes-record-for-biggest-ever-patch-tuesday-update?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-10, 14:47:52](https://news.ycombinator.com/item?id=48477135) - [I&apos;m Eric Ries, author of \&quot;The Lean Startup\&quot; and new book \&quot;Incorruptible\&quot; – AMA](https://news.ycombinator.com/item?id=48477135)
* [2026-06-10, 14:02:59](https://news.ycombinator.com/item?id=48476466) - [PgDog is funded and coming to a database near you](https://pgdog.dev/blog/our-funding-announcement)
* [2026-06-10, 13:38:17](https://lobste.rs/s/4vb0bb/i_hate_most_keyboard_fn_keys) - [I Hate (Most) Keyboard ‘Fn’ Keys](https://danq.me/2026/06/09/fn-keys/)
* [2026-06-10, 12:45:47](https://news.ycombinator.com/item?id=48475483) - [Building an HTML-first site doubled our users overnight](https://mohkohn.co.uk/writing/html-first/)
* [2026-06-10, 12:12:43](https://lobste.rs/s/ti42hu/trojaned_openssh_2002) - [Trojaned OpenSSH (in 2002)](http://miod.online.fr/software/openbsd/stories/trojan.html)
* [2026-06-10, 12:11:28](https://news.ycombinator.com/item?id=48475100) - [All 9,300 Japanese train station, animated by the year it opened (1872–2026)](https://jivx.com/eki)
* [2026-06-10, 11:51:24](https://lobste.rs/s/vlpi8y/macos_container_tool_v1_0_0_released) - [macOS container tool v1.0.0 released](https://github.com/apple/container)
* [2026-06-10, 11:25:00](https://soylentnews.org/article.pl?sid=26/06/09/1118255&amp;from=rss) - [Russia&apos;s New ‘Starlink‑Style’ Rassvet Fleet Launches](https://soylentnews.org/article.pl?sid=26/06/09/1118255&amp;from=rss)
* [2026-06-10, 11:13:17](https://lobste.rs/s/esvncd/how_building_html_first_site_doubled_our) - [How building an HTML-first site doubled our users overnight](https://mohkohn.co.uk/writing/html-first/)
* [2026-06-10, 11:00:00](https://hardware.slashdot.org/story/26/06/10/0319259/commonwealth-fusion-makes-the-physics-case-for-its-400-mw-reactor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Commonwealth Fusion Makes the Physics Case For Its 400 MW Reactor](https://hardware.slashdot.org/story/26/06/10/0319259/commonwealth-fusion-makes-the-physics-case-for-its-400-mw-reactor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-10, 10:59:41](https://lobste.rs/s/5iuaxt/17_bugs_10_weeks_from_ai_security_scanning) - [17 bugs in 10 weeks from AI security scanning](https://lalitm.com/post/perfetto-security-bugs-ai/)
* [2026-06-10, 10:14:49](https://lobste.rs/s/drkeug/upcoming_breaking_changes_for_npm_v12) - [Upcoming breaking changes for npm v12](https://github.blog/changelog/2026-06-09-upcoming-breaking-changes-for-npm-v12/)
* [2026-06-10, 09:34:14](https://lobste.rs/s/p07gv1/new_recaptcha_requires_approved_phones) - [New reCaptcha requires approved phones to pass](https://cybernews.com/privacy/google-qr-code-recaptcha-requires-approved-phone/)
* [2026-06-10, 08:29:48](https://lobste.rs/s/k85k6w/line_by_line_translation_ocaml_runtime) - [A line-by-line translation of the OCaml runtime from C to Rust](https://discuss.ocaml.org/t/a-line-by-line-translation-of-the-ocaml-runtime-from-c-to-rust/18247)
* [2026-06-10, 07:00:00](https://science.slashdot.org/story/26/06/10/0256248/nasa-announces-astronauts-for-its-artemis-iii-mission?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Announces Astronauts For Its Artemis III Mission](https://science.slashdot.org/story/26/06/10/0256248/nasa-announces-astronauts-for-its-artemis-iii-mission?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-10, 06:35:00](https://soylentnews.org/article.pl?sid=26/06/08/123201&amp;from=rss) - [&apos;Please Do Not Vibe F--- Up This Software&apos;: Broken Backups Spark AI Coding Row in Rsync Project](https://soylentnews.org/article.pl?sid=26/06/08/123201&amp;from=rss)
* [2026-06-10, 05:32:16](https://lobste.rs/s/tdvu7a/blogging_with_llm_assistant) - [Blogging with an LLM assistant](https://vincent.bernat.ch/en/blog/2026-blogging-llm)
* [2026-06-10, 03:30:00](https://yro.slashdot.org/story/26/06/09/2026231/fcc-wants-to-kill-burner-phones-by-forcing-telecoms-to-get-all-customers-ids?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FCC Wants To Kill Burner Phones By Forcing Telecoms To Get All Customers&apos; IDs](https://yro.slashdot.org/story/26/06/09/2026231/fcc-wants-to-kill-burner-phones-by-forcing-telecoms-to-get-all-customers-ids?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-10, 02:48:20](https://news.ycombinator.com/item?id=48470748) - [Vacuum-Form Signage](https://bethmathews.substack.com/p/the-history-behind-the-signs-lighting)
* [2026-06-10, 01:53:00](https://soylentnews.org/article.pl?sid=26/06/08/1134218&amp;from=rss) - [NASA&apos;s Nancy Grace Roman Space Telescope is Set to Launch on August 30](https://soylentnews.org/article.pl?sid=26/06/08/1134218&amp;from=rss)
* [2026-06-10, 01:23:47](https://lobste.rs/s/f2fwny/if_claude_fable_stops_helping_you_you_ll) - [If Claude Fable stops helping you, you&apos;ll never know](https://jonready.com/blog/posts/claude-fable5-is-allowed-to-sabotage-your-app-if-youre-a-competitor.html)
* [2026-06-09, 23:00:00](https://tech.slashdot.org/story/26/06/09/2019231/us-labels-byd-baidu-alibaba-and-other-tech-giants-as-aiding-chinas-military?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Labels BYD, Baidu, Alibaba and Other Tech Giants As Aiding China&apos;s Military](https://tech.slashdot.org/story/26/06/09/2019231/us-labels-byd-baidu-alibaba-and-other-tech-giants-as-aiding-chinas-military?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-09, 21:07:00](https://soylentnews.org/article.pl?sid=26/06/08/1131238&amp;from=rss) - [Raspberry Pi&apos;s Profits Are Up. So is its DRAM Bill](https://soylentnews.org/article.pl?sid=26/06/08/1131238&amp;from=rss)
* [2026-06-09, 17:37:11](https://news.ycombinator.com/item?id=48464484) - [Who&apos;s the smartest corvid?](https://thetyee.ca/Culture/2026/06/05/Whos-the-Smartest-Corvid/)
* [2026-06-09, 17:23:40](https://news.ycombinator.com/item?id=48464258) - [Anthropic requires 30 day data retention for Fable and Mythos](https://support.claude.com/en/articles/15425996-data-retention-practices-for-mythos-class-models)
* [2026-06-09, 16:40:11](https://lobste.rs/s/fpgqm0/open_letter_office_suite_users_just) - [An open letter to office suite users, just before the Euro-Office announcement](https://blog.documentfoundation.org/blog/2026/06/08/an-open-letter/)
* [2026-06-09, 16:20:00](https://soylentnews.org/article.pl?sid=26/06/07/2331246&amp;from=rss) - [Canada&apos;s Next-Gen AWACS/Surveillance Planes Won&apos;t Be Coming From The USA](https://soylentnews.org/article.pl?sid=26/06/07/2331246&amp;from=rss)
* [2026-06-09, 11:32:00](https://soylentnews.org/article.pl?sid=26/06/07/2330212&amp;from=rss) - [Code Reveals Meta Smart Glasses Can Use &apos;Faceprint&apos; Tracking, Raising Privacy Alarms](https://soylentnews.org/article.pl?sid=26/06/07/2330212&amp;from=rss)
* [2026-06-09, 11:30:20](https://news.ycombinator.com/item?id=48459678) - [CSS: Unavoidable Bad Parts](https://matklad.github.io/2026/06/04/css-unavoidable-bad-parts.html)
* [2026-06-09, 10:55:01](https://lobste.rs/s/zwn4xe/test_case_reducers_are_underappreciated) - [Test-case Reducers Are Underappreciated Debugging Tools](https://tratt.net/laurie/blog/2026/test_case_reducers_are_underappreciated_debugging_tools.html)
* [2026-06-09, 06:50:00](https://soylentnews.org/article.pl?sid=26/06/07/2321211&amp;from=rss) - [Datacenters May Face One-Year Ban In NY](https://soylentnews.org/article.pl?sid=26/06/07/2321211&amp;from=rss)
* [2026-06-09, 05:21:39](https://news.ycombinator.com/item?id=48456808) - [L&apos;Affaire Siloxane](https://mceglowski.substack.com/p/laffaire-siloxane)
* [2026-06-09, 02:06:00](https://soylentnews.org/article.pl?sid=26/06/07/2319243&amp;from=rss) - [How A USB-Connected Speaker Can Infect A PC Without Ever Being Touched](https://soylentnews.org/article.pl?sid=26/06/07/2319243&amp;from=rss)
* [2026-06-09, 01:45:38](https://news.ycombinator.com/item?id=48455145) - [Starfish by Peter Watts (1999)](https://www.rifters.com/real/STARFISH.htm#prelude)
* [2026-06-08, 21:21:00](https://soylentnews.org/article.pl?sid=26/06/07/1853208&amp;from=rss) - [UK Exam Watchdog Frets Over Smart Specs Turning GCSEs Into Google Searches](https://soylentnews.org/article.pl?sid=26/06/07/1853208&amp;from=rss)
* [2026-06-08, 19:08:12](https://news.ycombinator.com/item?id=48450024) - [Klondike Solitaire game for curses in 5k of C](https://nanochess.org/klondike_in_c.html)
* [2026-06-08, 17:12:44](https://news.ycombinator.com/item?id=48448083) - [The Road to the WASM Component Model 1.0](https://bytecodealliance.org/articles/the-road-to-component-model-1-0)
* [2026-06-08, 16:35:00](https://soylentnews.org/article.pl?sid=26/06/06/1857242&amp;from=rss) - [Giant Data Center Plan Cut 50% Amid Protests - \&quot;We Pissed Off A Lot Of People\&quot;](https://soylentnews.org/article.pl?sid=26/06/06/1857242&amp;from=rss)
* [2026-06-08, 15:20:08](https://news.ycombinator.com/item?id=48446532) - [World Capitals Voronoi](https://www.jasondavies.com/maps/voronoi/capitals/)
* [2026-06-08, 11:51:00](https://soylentnews.org/article.pl?sid=26/06/06/1854248&amp;from=rss) - [Safety Officials Finally Have A Good Idea Of What A Big Rocket Explosion Can Do](https://soylentnews.org/article.pl?sid=26/06/06/1854248&amp;from=rss)
* [2026-06-08, 07:07:00](https://soylentnews.org/article.pl?sid=26/06/06/1851230&amp;from=rss) - [The Floppy Disk Patent Was Granted Today In 1972 — When 80KB Took Up 8 Inches And Were Really Floppy](https://soylentnews.org/article.pl?sid=26/06/06/1851230&amp;from=rss)
* [2026-06-08, 02:20:00](https://soylentnews.org/article.pl?sid=26/06/06/1850206&amp;from=rss) - [AI Data Centers&apos; Extreme Memory Consumption Threatens Other Industries](https://soylentnews.org/article.pl?sid=26/06/06/1850206&amp;from=rss)
* [2026-06-07, 21:36:00](https://soylentnews.org/article.pl?sid=26/06/06/1848239&amp;from=rss) - [After 11 Years At Mars, NASA&apos;s MAVEN Spacecraft Went Out With A Whisper](https://soylentnews.org/article.pl?sid=26/06/06/1848239&amp;from=rss)
* [2026-06-07, 16:53:00](https://soylentnews.org/article.pl?sid=26/06/06/1843238&amp;from=rss) - [The 1N4148: The Signal Diode That Ended Up Everywhere ](https://soylentnews.org/article.pl?sid=26/06/06/1843238&amp;from=rss)
* [2026-06-07, 12:07:00](https://soylentnews.org/article.pl?sid=26/06/06/1338226&amp;from=rss) - [Small Modular Nuclear Reactor Reaches Criticality in First Test](https://soylentnews.org/article.pl?sid=26/06/06/1338226&amp;from=rss)
* [2026-06-07, 11:20:13](https://news.ycombinator.com/item?id=48433777) - [Reverse engineering the Creative Katana soundbar to control it from Linux](https://blog.nns.ee/2026/02/20/katana-v2x-re/)
* [2026-06-07, 07:19:00](https://soylentnews.org/article.pl?sid=26/06/06/1335249&amp;from=rss) - [Anthropic Eyes an IPO as Big Tech&apos;s AI Cash Crunch Comes for Wall Street](https://soylentnews.org/article.pl?sid=26/06/06/1335249&amp;from=rss)
* [2026-06-07, 02:31:00](https://soylentnews.org/article.pl?sid=26/06/06/1323219&amp;from=rss) - [Why Do Jets Use Generators Instead of Alternators?](https://soylentnews.org/article.pl?sid=26/06/06/1323219&amp;from=rss)
