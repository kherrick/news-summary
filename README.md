# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Updates

* [Amazon is Ending Its Palm ID System for Retail, Amazon One, as It Closes Physical Stores](https://yro.slashdot.org/story/26/01/28/1951234/amazon-is-ending-its-palm-id-system-for-retail-amazon-one-as-it-closes-physical-stores?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Explore Amazon's decision to discontinue its Palm ID authentication due to store closures. [Comments](https://news.ycombinator.com/item?id=46801976)

* [Tim Berners-Lee Wants Us To Take Back the Internet](https://tech.slashdot.org/story/26/01/28/1650231/tim-berners-lee-wants-us-to-take-back-the-internet?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A call from the inventor of the web for users to reclaim digital spaces. [Comments](https://news.ycombinator.com/item?id=46798402)

* [Urban Expansion in the Age of Liberalism](https://slashdot.org/story/26/01/28/1937218/urban-expansion-in-the-age-of-liberalism?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Delve into urban changes influenced by political ideologies. [Comments](https://news.ycombinator.com/item?id=46800645)

* [Android's Full Desktop Mode Surfaces in Accidental Chromium Leak](https://slashdot.org/story/26/01/28/1443215/androids-full-desktop-mode-surfaces-in-accidental-chromium-leak?utm_source=rss1.0mainlinkanon&utm_medium=feed) - An accidental reveal shedding light on Android's expanded functionality.

* [Make.ts](https://matklad.github.io/2026/01/27/make-ts.html) - Insight into an innovative approach to scripting with TypeScript. [Comments](https://news.ycombinator.com/item?id=46796745)

## Science Discoveries

* [Cancer Might Protect Against Alzheimer's](https://science.slashdot.org/story/26/01/28/1920237/cancer-might-protect-against-alzheimers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Unpack this groundbreaking hypothesis connecting cancer and neurodegenerative conditions.

* [430,000-Year-Old Wooden Tools Are the Oldest Ever Found](https://science.slashdot.org/story/26/01/28/1537223/430000-year-old-wooden-tools-are-the-oldest-ever-found?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A fascinating archaeological breakthrough revealing ancient craftsmanship.

* [Ancient Martian Beach Discovered, Providing New Clues To Planet's Habitability](https://science.slashdot.org/story/26/01/28/051200/ancient-martian-beach-discovered-providing-new-clues-to-planets-habitability?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Insights into Mars's past enabling speculations on its potential for life.

* [A Billiard Ball as a Universal Computation Machine](https://soylentnews.org/article.pl?sid=26/01/22/124243&from=rss) - Explore how a simple billiard ball can model complex computations.

## Business Shifts

* [Amazon cuts 16k jobs](https://www.reuters.com/legal/litigation/amazon-cuts-16000-jobs-globally-broader-restructuring-2026-01-28/) - A detailed analysis of recent layoffs in the tech giant's workforce. [Comments](https://news.ycombinator.com/item?id=46796745)

* [Native Instruments enters into insolvency proceedings](https://www.engadget.com/audio/native-instruments-enters-into-insolvency-proceedings-leaving-its-future-uncertain-183206826.html) - Evaluate the company's uncertain future amidst its financial challenges.

* [Apple Sued by App Developer Over its Continuity Camera](https://apple.slashdot.org/story/26/01/28/175253/apple-sued-by-app-developer-over-its-continuity-camera?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Investigate the legal battle over tech innovation and ownership.

## Programming and Tools

* [Why I still teach OpenGL ES 3.0](https://eliasfarhan.ch/jekyll/update/2026/01/27/why-i-teach-opengles.html) - One educator's reasoning for sticking with an enduring graphics API. [Comments](https://lobste.rs/s/tvprul/why_i_still_teach_opengl_es_3_0)

* [Breaking Thunderbird Free from Linux Package Lag](https://blog.melashri.net/posts/thunderbird-auto-update-linux/) - Initiatives to streamline Thunderbird updates on Linux systems.

* [Time Machine inside a FreeBSD jail](https://it-notes.dragas.net/2026/01/28/time-machine-freebsd-jail/) - A unique implementation of backups within secure environments.

* [Use “\\A...\\z”, not “^...$” with Python regular expressions](https://sethmlarson.dev/use-backslash-A-and-z-not-%5E-and-%24-with-python-regular-expressions) - A best-practice guide for effective Python regexusages.

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

* [2026-01-28, 21:42:03](https://news.ycombinator.com/item?id=46801976) - [Jellyfin LLM/\&quot;AI\&quot; Development Policy](https://jellyfin.org/docs/general/contributing/llm-policies/)
* [2026-01-28, 21:22:00](https://yro.slashdot.org/story/26/01/28/1951234/amazon-is-ending-its-palm-id-system-for-retail-amazon-one-as-it-closes-physical-stores?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon is Ending Its Palm ID System for Retail, Amazon One, as It Closes Physical Stores](https://yro.slashdot.org/story/26/01/28/1951234/amazon-is-ending-its-palm-id-system-for-retail-amazon-one-as-it-closes-physical-stores?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-28, 20:44:00](https://slashdot.org/story/26/01/28/1937218/urban-expansion-in-the-age-of-liberalism?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Urban Expansion in the Age of Liberalism](https://slashdot.org/story/26/01/28/1937218/urban-expansion-in-the-age-of-liberalism?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-28, 20:39:00](https://soylentnews.org/article.pl?sid=26/01/26/1911209&amp;from=rss) - [The Return of Digg, and the Proliferation of Cancel Culture](https://soylentnews.org/article.pl?sid=26/01/26/1911209&amp;from=rss)
* [2026-01-28, 20:02:00](https://science.slashdot.org/story/26/01/28/1920237/cancer-might-protect-against-alzheimers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cancer Might Protect Against Alzheimer&apos;s](https://science.slashdot.org/story/26/01/28/1920237/cancer-might-protect-against-alzheimers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-28, 19:59:04](https://news.ycombinator.com/item?id=46800737) - [Native Linux VST plugin directory](https://linuxmusic.rocks)
* [2026-01-28, 19:56:09](https://lobste.rs/s/avdx9j/bootstrap_chain_for_nixos_which_builds) - [\&quot;a bootstrap chain for NixOS which builds the whole system from a small hand-auditable binary seed\&quot;](https://mastodon.social/@nzbr@chaos.social/115973847937505106)
* [2026-01-28, 19:51:05](https://news.ycombinator.com/item?id=46800645) - [Native Instruments enters into insolvency proceedings](https://www.engadget.com/audio/native-instruments-enters-into-insolvency-proceedings-leaving-its-future-uncertain-183206826.html)
* [2026-01-28, 19:48:59](https://news.ycombinator.com/item?id=46800623) - [Who sets the Doomsday Clock?](https://www.popularmechanics.com/science/a70162364/setting-the-doomsday-clock/)
* [2026-01-28, 19:39:31](https://news.ycombinator.com/item?id=46800484) - [Show HN: Cursor for Userscripts](https://github.com/chebykinn/browser-code)
* [2026-01-28, 19:22:00](https://tech.slashdot.org/story/26/01/28/199225/experians-tech-chief-defends-credit-scores-were-not-palantir?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Experian&apos;s Tech Chief Defends Credit Scores: &apos;We&apos;re Not Palantir&apos;](https://tech.slashdot.org/story/26/01/28/199225/experians-tech-chief-defends-credit-scores-were-not-palantir?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-28, 18:52:24](https://news.ycombinator.com/item?id=46799898) - [Show HN: A MitM proxy to see what your LLM tools are sending](https://github.com/jmuncor/sherlock)
* [2026-01-28, 18:48:00](https://it.slashdot.org/story/26/01/28/1849206/theres-a-rash-of-scam-spam-coming-from-a-real-microsoft-address?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [There&apos;s a Rash of Scam Spam Coming From a Real Microsoft Address](https://it.slashdot.org/story/26/01/28/1849206/theres-a-rash-of-scam-spam-coming-from-a-real-microsoft-address?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-28, 18:35:18](https://lobste.rs/s/tvprul/why_i_still_teach_opengl_es_3_0) - [Why I still teach OpenGL ES 3.0](https://eliasfarhan.ch/jekyll/update/2026/01/27/why-i-teach-opengles.html)
* [2026-01-28, 18:19:47](https://lobste.rs/s/fyn2jy/breaking_thunderbird_free_from_linux) - [Breaking Thunderbird Free from Linux Package Lag](https://blog.melashri.net/posts/thunderbird-auto-update-linux/)
* [2026-01-28, 18:12:02](https://news.ycombinator.com/item?id=46799304) - [That&apos;s not how email works](https://danq.me/2026/01/28/hsbc-dont-understand-email/)
* [2026-01-28, 18:01:00](https://apple.slashdot.org/story/26/01/28/175253/apple-sued-by-app-developer-over-its-continuity-camera?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Sued by App Developer Over its Continuity Camera](https://apple.slashdot.org/story/26/01/28/175253/apple-sued-by-app-developer-over-its-continuity-camera?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-28, 17:54:54](https://news.ycombinator.com/item?id=46798994) - [Computer History Museum Launches Digital Portal to Its Collection](https://computerhistory.org/press-releases/computer-history-museum-launches-digital-portal-to-its-vast-collection/)
* [2026-01-28, 17:22:00](https://tech.slashdot.org/story/26/01/28/1650231/tim-berners-lee-wants-us-to-take-back-the-internet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tim Berners-Lee Wants Us To Take Back the Internet](https://tech.slashdot.org/story/26/01/28/1650231/tim-berners-lee-wants-us-to-take-back-the-internet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-28, 17:20:31](https://news.ycombinator.com/item?id=46798402) - [Mousefood – Build embedded terminal UIs for microcontrollers](https://github.com/ratatui/mousefood)
* [2026-01-28, 16:52:05](https://news.ycombinator.com/item?id=46797913) - [Amazon One palm authentication discontinued](https://amazonone.aws.com/help)
* [2026-01-28, 16:48:59](https://news.ycombinator.com/item?id=46797868) - [Spinning around: Please don&apos;t – Common problems with spin locks](https://www.siliceum.com/en/blog/post/spinning-around/)
* [2026-01-28, 16:45:00](https://entertainment.slashdot.org/story/26/01/28/1557214/whats-the-best-month-for-new-movies-and-music-a-statistical-analysis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What&apos;s the &apos;Best&apos; Month for New Movies and Music? A Statistical Analysis](https://entertainment.slashdot.org/story/26/01/28/1557214/whats-the-best-month-for-new-movies-and-music-a-statistical-analysis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-28, 16:34:54](https://lobste.rs/s/pnrw6j/ariel_os_is_library_operating_system_for) - [Ariel OS is a library operating system for secure, memory-safe, low-power Internet of Things, written in Rust](https://github.com/ariel-os/ariel-os)
* [2026-01-28, 16:32:00](https://news.ycombinator.com/item?id=46797594) - [Oban, the job processing framework from Elixir, has come to Python](https://www.dimamik.com/posts/oban_py/)
* [2026-01-28, 16:20:07](https://lobste.rs/s/zxwgrs/accessing_luks_ext4_drives_from_macos) - [Accessing LUKS and ext4 drives from macOS](https://nmattia.com/posts/2026-01-13-using-luks-on-macos/)
* [2026-01-28, 16:15:00](https://science.slashdot.org/story/26/01/28/1537223/430000-year-old-wooden-tools-are-the-oldest-ever-found?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [430,000-Year-Old Wooden Tools Are the Oldest Ever Found](https://science.slashdot.org/story/26/01/28/1537223/430000-year-old-wooden-tools-are-the-oldest-ever-found?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-28, 15:55:00](https://soylentnews.org/article.pl?sid=26/01/26/197234&amp;from=rss) - [Socializing Alone: The Downside of Communication Technology](https://soylentnews.org/article.pl?sid=26/01/26/197234&amp;from=rss)
* [2026-01-28, 15:39:11](https://news.ycombinator.com/item?id=46796745) - [Amazon cuts 16k jobs](https://www.reuters.com/legal/litigation/amazon-cuts-16000-jobs-globally-broader-restructuring-2026-01-28/)
* [2026-01-28, 15:29:00](https://slashdot.org/story/26/01/28/1529207/30000-more-ups-jobs-on-the-chopping-block-as-amazon-era-ends?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [30,000 More UPS Jobs On the Chopping Block as Amazon Era Ends](https://slashdot.org/story/26/01/28/1529207/30000-more-ups-jobs-on-the-chopping-block-as-amazon-era-ends?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-28, 15:13:53](https://news.ycombinator.com/item?id=46796389) - [Tuning Semantic Search on JFMM.net – Joint Fleet Maintenance Manual](https://carlkolon.com/2026/01/27/jfmm-semantic-search/)
* [2026-01-28, 14:43:00](https://slashdot.org/story/26/01/28/1443215/androids-full-desktop-mode-surfaces-in-accidental-chromium-leak?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Android&apos;s Full Desktop Mode Surfaces in Accidental Chromium Leak](https://slashdot.org/story/26/01/28/1443215/androids-full-desktop-mode-surfaces-in-accidental-chromium-leak?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-28, 14:38:39](https://lobste.rs/s/m0krf8/there_back_again_from_quickstrom) - [There and Back Again: From Quickstrom to Bombadil](https://wickstrom.tech/2026-01-28-there-and-back-again-from-quickstrom-to-bombadil.html)
* [2026-01-28, 14:32:30](https://news.ycombinator.com/item?id=46795908) - [Airfoil (2024)](https://ciechanow.ski/airfoil/)
* [2026-01-28, 14:28:21](https://news.ycombinator.com/item?id=46795864) - [Microsoft forced me to switch to Linux](https://www.himthe.dev/blog/microsoft-to-linux)
* [2026-01-28, 14:00:00](https://slashdot.org/story/26/01/28/1043253/amazon-cuts-another-16000-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Cuts Another 16,000 Jobs](https://slashdot.org/story/26/01/28/1043253/amazon-cuts-another-16000-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-28, 13:44:48](https://lobste.rs/s/rcffs8/make_ts) - [make.ts](https://matklad.github.io/2026/01/27/make-ts.html)
* [2026-01-28, 13:00:00](https://tech.slashdot.org/story/26/01/28/0510226/clawdbot-has-ai-techies-buying-mac-minis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Clawdbot&apos; Has AI Techies Buying Mac Minis](https://tech.slashdot.org/story/26/01/28/0510226/clawdbot-has-ai-techies-buying-mac-minis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-28, 12:06:18](https://news.ycombinator.com/item?id=46794281) - [Show HN: SHDL – A minimal hardware description language built from logic gates](https://github.com/rafa-rrayes/SHDL)
* [2026-01-28, 12:00:08](https://news.ycombinator.com/item?id=46794231) - [Kyber (YC W23) Is Hiring a Staff Engineer](https://www.ycombinator.com/companies/kyber/jobs/GPJkv5v-staff-engineer-tech-lead)
* [2026-01-28, 11:59:30](https://lobste.rs/s/1omm6b/uefigame_win_boot_lose_shutdown) - [UEFIGame: \&quot;Win -&gt; Boot, Lose -&gt; Shutdown\&quot;](https://github.com/mycroftsnm/UEFIGame)
* [2026-01-28, 11:13:00](https://soylentnews.org/article.pl?sid=26/01/26/195201&amp;from=rss) - [TSMC Says AI Demand is “Endless” After Record Q4 Earnings](https://soylentnews.org/article.pl?sid=26/01/26/195201&amp;from=rss)
* [2026-01-28, 10:50:32](https://news.ycombinator.com/item?id=46793693) - [Show HN: The HN Arcade](https://andrewgy8.github.io/hnarcade/)
* [2026-01-28, 10:00:00](https://science.slashdot.org/story/26/01/28/0522257/asteroid-2024-yr4-has-a-4-chance-of-hitting-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Asteroid 2024 YR4 Has a 4% Chance of Hitting the Moon](https://science.slashdot.org/story/26/01/28/0522257/asteroid-2024-yr4-has-a-4-chance-of-hitting-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-28, 09:37:34](https://lobste.rs/s/0x2zgn/time_machine_inside_freebsd_jail) - [Time Machine inside a FreeBSD jail](https://it-notes.dragas.net/2026/01/28/time-machine-freebsd-jail/)
* [2026-01-28, 07:42:25](https://lobste.rs/s/pjuesf/rise_sanityware) - [The Rise of Sanityware](https://thatshubham.com/blog/2026.html)
* [2026-01-28, 07:40:50](https://news.ycombinator.com/item?id=46792225) - [Kairos: AI interns for everyone](https://www.kairos.computer/)
* [2026-01-28, 07:00:00](https://science.slashdot.org/story/26/01/28/051200/ancient-martian-beach-discovered-providing-new-clues-to-planets-habitability?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ancient Martian Beach Discovered, Providing New Clues To Planet&apos;s Habitability](https://science.slashdot.org/story/26/01/28/051200/ancient-martian-beach-discovered-providing-new-clues-to-planets-habitability?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-28, 06:27:00](https://soylentnews.org/article.pl?sid=26/01/26/192227&amp;from=rss) - [Design Your Next Building Out of Bamboo](https://soylentnews.org/article.pl?sid=26/01/26/192227&amp;from=rss)
* [2026-01-28, 04:24:34](https://lobste.rs/s/rxowxr/use_z_not_with_python_regular_expressions) - [Use “\\A...\\z”, not “^...$” with Python regular expressions](https://sethmlarson.dev/use-backslash-A-and-z-not-%5E-and-%24-with-python-regular-expressions)
* [2026-01-28, 03:34:45](https://news.ycombinator.com/item?id=46790740) - [Android&apos;s desktop interface leaks](https://9to5google.com/2026/01/27/android-desktop-leak/)
* [2026-01-28, 03:28:42](https://lobste.rs/s/ukutpb/monkeyball_online) - [MonkeyBall Online](https://monkeyball-online.pages.dev/)
* [2026-01-28, 01:42:00](https://soylentnews.org/article.pl?sid=26/01/26/191227&amp;from=rss) - [North Sea Winds Of Change](https://soylentnews.org/article.pl?sid=26/01/26/191227&amp;from=rss)
* [2026-01-28, 00:57:52](https://news.ycombinator.com/item?id=46789561) - [Trinity large: An open 400B sparse MoE model](https://www.arcee.ai/blog/trinity-large)
* [2026-01-28, 00:18:58](https://news.ycombinator.com/item?id=46789205) - [Did a celebrated researcher obscure a baby&apos;s poisoning?](https://www.newyorker.com/magazine/2026/02/02/did-a-celebrated-researcher-obscure-a-fatal-poisoning)
* [2026-01-28, 00:16:57](https://news.ycombinator.com/item?id=46789180) - [How London became the rest of the world’s startup capital](https://www.economist.com/britain/2026/01/26/how-london-became-the-rest-of-the-worlds-startup-capital)
* [2026-01-27, 22:58:30](https://news.ycombinator.com/item?id=46788384) - [Some notes on starting to use Django](https://jvns.ca/blog/2026/01/27/some-notes-on-starting-to-use-django/)
* [2026-01-27, 22:08:16](https://lobste.rs/s/aqhrie/barev_xmpp_flavoured_p2p_protocol) - [Barev - XMPP flavoured p2p protocol](https://discourse.imfreedom.org/t/barev-xmpp-flavoured-p2p-protocol/348)
* [2026-01-27, 21:22:07](https://lobste.rs/s/7cdb2b/pure_go_linux_environment_written_by) - [A \&quot;Pure Go\&quot; Linux environment, written by Claude](https://www.jtolio.com/2026/01/a-pure-go-linux-environment-written-by-claude-directed-by-fabrice-bellard/)
* [2026-01-27, 21:02:47](https://lobste.rs/s/atvvjp/it_is_incorrect_normalize_http_url_paths) - [It is incorrect to “normalize” // in HTTP URL paths](https://runxiyu.org/comp/doubleslash/)
* [2026-01-27, 21:02:00](https://soylentnews.org/article.pl?sid=26/01/26/1857242&amp;from=rss) - [Proton VPN Reveals Major Linux Makeover](https://soylentnews.org/article.pl?sid=26/01/26/1857242&amp;from=rss)
* [2026-01-27, 19:40:59](https://lobste.rs/s/vfofzr/blocking_claude) - [Blocking Claude](https://aphyr.com/posts/403-blocking-claude)
* [2026-01-27, 18:55:13](https://lobste.rs/s/igpevt/lobsters_vibecoding_challenge_winter) - [Lobsters Vibecoding Challenge (Winter 2025-2026)](https://gist.github.com/MostAwesomeDude/bb8cbfd005a33f5dd262d1f20a63a693)
* [2026-01-27, 18:08:48](https://lobste.rs/s/kaftkn/i_started_identifying_corporate_devices) - [I Started Identifying Corporate Devices in My Software](https://lgug2z.com/articles/i-started-identifying-corporate-devices-in-my-software/)
* [2026-01-27, 16:22:52](https://lobste.rs/s/csxfc6/cloudflare_claimed_they_implemented) - [Cloudflare claimed they implemented Matrix on Cloudflare workers. They didn&apos;t](https://tech.lgbt/@JadedBlueEyes/115967791152135761)
* [2026-01-27, 16:19:00](https://soylentnews.org/article.pl?sid=26/01/26/1850245&amp;from=rss) - [80386 Multiplication and Division](https://soylentnews.org/article.pl?sid=26/01/26/1850245&amp;from=rss)
* [2026-01-27, 14:48:07](https://lobste.rs/s/xcwljr/xfwl4_roadmap_for_xfce_wayland) - [Xfwl4: The roadmap for a Xfce Wayland Compositor](https://alexxcons.github.io/blogpost_15.html)
* [2026-01-27, 14:40:22](https://lobste.rs/s/dskpn4/after_two_years_vibecoding_i_m_back) - [After two years of vibecoding, I&apos;m back to writing by hand](https://atmoio.substack.com/p/after-two-years-of-vibecoding-im)
* [2026-01-27, 14:38:32](https://lobste.rs/s/rjw7zn/t_concise_language_for_manipulating_text) - [t: a concise language for manipulating text, replacing common usage patterns of Unix utilities like grep, sed, cut, awk, sort, and uniq](https://github.com/alecthomas/t)
* [2026-01-27, 14:13:44](https://lobste.rs/s/fdbsyl/c_shaped_hole_package_management) - [The C-Shaped Hole in Package Management](https://nesbitt.io/2026/01/27/the-c-shaped-hole-in-package-management.html)
* [2026-01-27, 13:33:47](https://lobste.rs/s/xhqliz/bugs_apple_loves) - [Bugs Apple Loves](https://www.bugsappleloves.com/)
* [2026-01-27, 11:39:00](https://soylentnews.org/article.pl?sid=26/01/25/1435251&amp;from=rss) - [Microsoft CEO Says AI Needs to Have Wider Impact or Risk Quickly Losing \&quot;Social Permission\&quot;](https://soylentnews.org/article.pl?sid=26/01/25/1435251&amp;from=rss)
* [2026-01-27, 10:06:36](https://lobste.rs/s/seknf5/how_get_european_cloud) - [But how to get to that European cloud?](https://berthub.eu/articles/posts/now-how-to-get-that-european-cloud/)
* [2026-01-27, 06:54:00](https://soylentnews.org/article.pl?sid=26/01/25/1419203&amp;from=rss) - [The Hidden Complexity Crisis: When Simple Radio Buttons Require 200+ Lines of Code](https://soylentnews.org/article.pl?sid=26/01/25/1419203&amp;from=rss)
* [2026-01-27, 02:08:00](https://soylentnews.org/article.pl?sid=26/01/25/1410231&amp;from=rss) - [Elon Musk Restarts Dojo3 &apos;Space&apos; Supercomputer Project As AI5 Chip Design Gets In &apos;Good Shape&apos;](https://soylentnews.org/article.pl?sid=26/01/25/1410231&amp;from=rss)
* [2026-01-26, 21:19:00](https://soylentnews.org/article.pl?sid=26/01/25/145215&amp;from=rss) - [Apple&apos;s Enshittification Moment: How the App Store is Quietly Abandoning User Trust](https://soylentnews.org/article.pl?sid=26/01/25/145215&amp;from=rss)
* [2026-01-26, 16:38:00](https://soylentnews.org/article.pl?sid=26/01/25/1312202&amp;from=rss) - [Snover.exit()](https://soylentnews.org/article.pl?sid=26/01/25/1312202&amp;from=rss)
* [2026-01-26, 14:05:46](https://news.ycombinator.com/item?id=46765772) - [I have written gemma3 inference in pure C](https://github.com/robitec97/gemma3.c)
* [2026-01-26, 11:55:00](https://soylentnews.org/article.pl?sid=26/01/25/0439223&amp;from=rss) - [Starlink Now Uses Customers&apos; Personal Data for AI Training](https://soylentnews.org/article.pl?sid=26/01/25/0439223&amp;from=rss)
* [2026-01-26, 07:11:00](https://soylentnews.org/article.pl?sid=26/01/25/0432221&amp;from=rss) - [Attackers Find a New Way to Share Malicious Snap Packages](https://soylentnews.org/article.pl?sid=26/01/25/0432221&amp;from=rss)
* [2026-01-26, 03:26:00](https://soylentnews.org/article.pl?sid=26/01/25/0429246&amp;from=rss) - [UK MPs Call for AI Stress Testing in Financial Services](https://soylentnews.org/article.pl?sid=26/01/25/0429246&amp;from=rss)
* [2026-01-25, 22:36:00](https://soylentnews.org/article.pl?sid=26/01/24/0116243&amp;from=rss) - [Microsoft Gave FBI a Set of BitLocker Encryption Keys to Unlock Suspects’ Laptops](https://soylentnews.org/article.pl?sid=26/01/24/0116243&amp;from=rss)
* [2026-01-25, 17:53:00](https://soylentnews.org/article.pl?sid=26/01/24/0114253&amp;from=rss) - [This May Be The Grossest Eye Pic Ever—but the Cause is What’s Truly Horrifying](https://soylentnews.org/article.pl?sid=26/01/24/0114253&amp;from=rss)
* [2026-01-25, 13:02:00](https://soylentnews.org/article.pl?sid=26/01/24/0112225&amp;from=rss) - [OpenAI Rolls Out Ads in ChatGPT as Expenses Skyrocket](https://soylentnews.org/article.pl?sid=26/01/24/0112225&amp;from=rss)
* [2026-01-25, 08:30:00](https://soylentnews.org/article.pl?sid=26/01/24/0110242&amp;from=rss) - [Major River Deltas Are Sinking Faster Than Sea-Level Rise](https://soylentnews.org/article.pl?sid=26/01/24/0110242&amp;from=rss)
* [2026-01-25, 03:38:00](https://soylentnews.org/article.pl?sid=26/01/24/019242&amp;from=rss) - [How Greenwashing Creates &apos;False Stability&apos; for Companies](https://soylentnews.org/article.pl?sid=26/01/24/019242&amp;from=rss)
* [2026-01-24, 22:54:00](https://soylentnews.org/article.pl?sid=26/01/23/1016236&amp;from=rss) - [Ancient “Mosaic” Fossils Found in Morocco Challenge the Timeline of Human Evolution](https://soylentnews.org/article.pl?sid=26/01/23/1016236&amp;from=rss)
* [2026-01-24, 18:11:00](https://soylentnews.org/article.pl?sid=26/01/23/1010250&amp;from=rss) - [Micron Acquires PSMC Fab Site in Taiwan for $1.8 Billion](https://soylentnews.org/article.pl?sid=26/01/23/1010250&amp;from=rss)
* [2026-01-24, 15:17:11](https://news.ycombinator.com/item?id=46744272) - [3D-Printed Mathematical Lampshades](https://hessammehr.github.io/blog/posts/2025-12-24-maths-to-lampshade.html)
* [2026-01-24, 13:25:00](https://soylentnews.org/article.pl?sid=26/01/23/1012244&amp;from=rss) - [Hygienic Conditions in Pompeii&apos;s Early Baths Were Poor](https://soylentnews.org/article.pl?sid=26/01/23/1012244&amp;from=rss)
* [2026-01-24, 08:42:00](https://soylentnews.org/article.pl?sid=26/01/22/124243&amp;from=rss) - [A Billiard Ball as a Universal Computation Machine](https://soylentnews.org/article.pl?sid=26/01/22/124243&amp;from=rss)
* [2026-01-24, 04:01:00](https://soylentnews.org/article.pl?sid=26/01/22/121252&amp;from=rss) - [When Order Matters: How A Single DNS Change Broke The Internet For Millions](https://soylentnews.org/article.pl?sid=26/01/22/121252&amp;from=rss)
