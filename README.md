# [News Summary](https://kherrick.github.io/news-summary/)

## AI Ethics and Military Use

* [Anthropic CEO Says AI Company 'Cannot In Good Conscience Accede' To Pentagon](https://tech.slashdot.org/story/26/02/26/2352217/anthropic-ceo-says-ai-company-cannot-in-good-conscience-accede-to-pentagon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://tech.slashdot.org/story/26/02/26/2352217/anthropic-ceo-says-ai-company-cannot-in-good-conscience-accede-to-pentagon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Google Workers Seek 'Red Lines' on Military A.I., Echoing Anthropic](https://www.nytimes.com/2026/02/26/technology/google-deepmind-letter-pentagon.html) ([comments](https://news.ycombinator.com/item?id=47175931))

* [Statement from Dario Amodei on our discussions with the Department of War](https://www.anthropic.com/news/statement-department-of-war) ([comments](https://news.ycombinator.com/item?id=47173121))

## Advancements in Technology and Software

* [Return of the Obra Dinn: spherical mapped dithering for a 1bpp 1st-person game (2017)](https://forums.tigsource.com/index.php?topic=40832.msg1363742#msg1363742) ([comments](https://lobste.rs/s/bohhcq/return_obra_dinn_spherical_mapped))

* [Introducing PgBeam, a globally distributed PostgreSQL proxy](https://pgbeam.com/launch) ([comments](https://lobste.rs/s/sxozst/introducing_pgbeam_globally))

* [Show HN: Deff – Side-by-side Git diff review in your terminal](https://github.com/flamestro/deff) ([comments](https://news.ycombinator.com/item?id=47169518))

## Privacy and Security Concerns

* [Four Convicted Over Spyware Affair That Shook Greece](https://yro.slashdot.org/story/26/02/26/2242230/four-convicted-over-spyware-affair-that-shook-greece?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://yro.slashdot.org/story/26/02/26/2242230/four-convicted-over-spyware-affair-that-shook-greece?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Hydroph0bia – fixed SecureBoot bypass for UEFI firmware from Insyde H2O (2025)](https://coderush.me/hydroph0bia-part3/) ([comments](https://news.ycombinator.com/item?id=47172730))

* [AirSnitch: Demystifying and Breaking Client Isolation in Wi-Fi Networks](https://www.ndss-symposium.org/ndss-paper/airsnitch-demystifying-and-breaking-client-isolation-in-wi-fi-networks/) ([comments](https://lobste.rs/s/5al9ui/airsnitch_demystifying_breaking_client))

## Societal Impacts of AI

* [What&apos;s the Point of School When AI Can Do Your Homework?](https://news.slashdot.org/story/26/02/26/2154237/whats-the-point-of-school-when-ai-can-do-your-homework?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.slashdot.org/story/26/02/26/2154237/whats-the-point-of-school-when-ai-can-do-your-homework?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Burger King Will Use AI To Check If Employees Say 'Please' and 'Thank You'](https://slashdot.org/story/26/02/26/163233/burger-king-will-use-ai-to-check-if-employees-say-please-and-thank-you?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://slashdot.org/story/26/02/26/163233/burger-king-will-use-ai-to-check-if-employees-say-please-and-thank-you?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

## Environmental and Scientific Discoveries

* [Astronomers Identify a Galaxy Made Almost Entirely of Dark Matter](https://soylentnews.org/article.pl?sid=26/02/24/0444250&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/02/24/0444250&amp;from=rss))

* [Why Are Tatooine Planets Rare? Blame General Relativity](https://soylentnews.org/article.pl?sid=26/02/23/0050217&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/02/23/0050217&amp;from=rss))

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

* [2026-02-27, 03:49:48](https://news.ycombinator.com/item?id=47176257) - [The Hunt for Dark Breakfast – Can we derive breakfasts we have never observed?](https://moultano.wordpress.com/2026/02/22/the-hunt-for-dark-breakfast/)
* [2026-02-27, 03:30:00](https://tech.slashdot.org/story/26/02/26/2352217/anthropic-ceo-says-ai-company-cannot-in-good-conscience-accede-to-pentagon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic CEO Says AI Company &apos;Cannot In Good Conscience Accede&apos; To Pentagon](https://tech.slashdot.org/story/26/02/26/2352217/anthropic-ceo-says-ai-company-cannot-in-good-conscience-accede-to-pentagon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-27, 03:08:09](https://news.ycombinator.com/item?id=47175931) - [Google Workers Seek &apos;Red Lines&apos; on Military A.I., Echoing Anthropic](https://www.nytimes.com/2026/02/26/technology/google-deepmind-letter-pentagon.html)
* [2026-02-27, 01:59:00](https://soylentnews.org/article.pl?sid=26/02/26/042214&amp;from=rss) - [Hungarian Startup Transforming Robot Manufacturing With 3D Tissue Braiding](https://soylentnews.org/article.pl?sid=26/02/26/042214&amp;from=rss)
* [2026-02-27, 01:38:52](https://lobste.rs/s/qm55ud/man_who_stole_infinity) - [The Man Who Stole Infinity](https://www.quantamagazine.org/the-man-who-stole-infinity-20260225/)
* [2026-02-27, 01:18:18](https://news.ycombinator.com/item?id=47175013) - [LiteLLM (YC W23): Founding Reliability Engineer – $200K-$270K and 0.5-1.0% equity](https://www.ycombinator.com/companies/litellm/jobs/unlCynJ-founding-reliability-performance-engineer)
* [2026-02-27, 00:45:00](https://yro.slashdot.org/story/26/02/26/2242230/four-convicted-over-spyware-affair-that-shook-greece?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Four Convicted Over Spyware Affair That Shook Greece](https://yro.slashdot.org/story/26/02/26/2242230/four-convicted-over-spyware-affair-that-shook-greece?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-27, 00:02:00](https://tech.slashdot.org/story/26/02/26/233213/colorado-lawmakers-push-for-age-verification-at-the-operating-system-level?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Colorado Lawmakers Push for Age Verification at the Operating System Level](https://tech.slashdot.org/story/26/02/26/233213/colorado-lawmakers-push-for-age-verification-at-the-operating-system-level?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-26, 23:38:42](https://lobste.rs/s/bohhcq/return_obra_dinn_spherical_mapped) - [Return of the Obra Dinn: spherical mapped dithering for a 1bpp 1st-person game (2017)](https://forums.tigsource.com/index.php?topic=40832.msg1363742#msg1363742)
* [2026-02-26, 23:20:00](https://slashdot.org/story/26/02/26/2250206/jack-dorseys-block-cuts-nearly-half-of-its-staff-in-ai-gamble?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Jack Dorsey&apos;s Block Cuts Nearly Half of Its Staff In AI Gamble](https://slashdot.org/story/26/02/26/2250206/jack-dorseys-block-cuts-nearly-half-of-its-staff-in-ai-gamble?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-26, 22:42:47](https://news.ycombinator.com/item?id=47173121) - [Statement from Dario Amodei on our discussions with the Department of War](https://www.anthropic.com/news/statement-department-of-war)
* [2026-02-26, 22:40:00](https://news.slashdot.org/story/26/02/26/2154237/whats-the-point-of-school-when-ai-can-do-your-homework?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What&apos;s the Point of School When AI Can Do Your Homework?](https://news.slashdot.org/story/26/02/26/2154237/whats-the-point-of-school-when-ai-can-do-your-homework?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-26, 22:32:32](https://lobste.rs/s/laqdft/lobsters_blog_carnival_on_april_1st) - [Lobsters Blog Carnival on April 1st - Submissions Open](https://lobste.rs/s/lz7hxw/lobsters_blog_carnival_announcement)
* [2026-02-26, 22:14:11](https://news.ycombinator.com/item?id=47172730) - [Hydroph0bia – fixed SecureBoot bypass for UEFI firmware from Insyde H2O (2025)](https://coderush.me/hydroph0bia-part3/)
* [2026-02-26, 22:09:45](https://news.ycombinator.com/item?id=47172664) - [Smartphone market forecast to decline this year due to memory shortage](https://www.idc.com/resource-center/press-releases/wwsmartphoneforecast4q25/)
* [2026-02-26, 22:00:00](https://tech.slashdot.org/story/26/02/26/2145253/google-launches-nano-banana-2-model-with-faster-image-generation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Launches Nano Banana 2 Model With Faster Image Generation](https://tech.slashdot.org/story/26/02/26/2145253/google-launches-nano-banana-2-model-with-faster-image-generation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-26, 21:54:17](https://lobste.rs/s/wbpjmd/how_my_side_project_got_banned_from) - [How my side project got banned from the internet](https://trysound.io/how-my-side-project-got-banned-from-the-internet/)
* [2026-02-26, 21:20:00](https://tech.slashdot.org/story/26/02/26/2045225/chinese-officials-use-of-chatgpt-revealed-a-global-intimidation-opperation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chinese Official&apos;s Use of ChatGPT Revealed a Global Intimidation Opperation](https://tech.slashdot.org/story/26/02/26/2045225/chinese-officials-use-of-chatgpt-revealed-a-global-intimidation-opperation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-26, 21:17:56](https://news.ycombinator.com/item?id=47172119) - [Layoffs at Block](https://twitter.com/jack/status/2027129697092731343)
* [2026-02-26, 21:17:00](https://soylentnews.org/article.pl?sid=26/02/25/1612247&amp;from=rss) - [Tesla &apos;Robotaxi&apos; Adds 5 More Crashes in Austin in a Month](https://soylentnews.org/article.pl?sid=26/02/25/1612247&amp;from=rss)
* [2026-02-26, 20:40:00](https://mobile.slashdot.org/story/26/02/26/2036231/iphone-and-ipad-are-first-consumer-devices-cleared-for-nato-classified-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [iPhone and iPad Are First Consumer Devices Cleared for NATO Classified Data](https://mobile.slashdot.org/story/26/02/26/2036231/iphone-and-ipad-are-first-consumer-devices-cleared-for-nato-classified-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-26, 19:58:46](https://news.ycombinator.com/item?id=47171233) - [What does \&quot; 2&gt;&amp;1 \&quot; mean?](https://stackoverflow.com/questions/818255/what-does-21-mean)
* [2026-02-26, 19:20:00](https://news.slashdot.org/story/26/02/26/182239/firefox-148-lets-you-kill-all-ai-features-in-one-click?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Firefox 148 Lets You Kill All AI Features in One Click](https://news.slashdot.org/story/26/02/26/182239/firefox-148-lets-you-kill-all-ai-features-in-one-click?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-26, 19:09:36](https://lobste.rs/s/sxozst/introducing_pgbeam_globally) - [Introducing PgBeam, a globally distributed PostgreSQL proxy](https://pgbeam.com/launch)
* [2026-02-26, 18:40:00](https://slashdot.org/story/26/02/26/1744240/which-piece-of-speculative-fiction-had-the-greatest-single-day-stock-market-impact?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Which Piece of Speculative Fiction Had the Greatest Single-Day Stock Market Impact?](https://slashdot.org/story/26/02/26/1744240/which-piece-of-speculative-fiction-had-the-greatest-single-day-stock-market-impact?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-26, 18:38:38](https://news.ycombinator.com/item?id=47170174) - [Launch HN: Cardboard (YC W26) – Agentic video editor](https://www.usecardboard.com/)
* [2026-02-26, 18:37:59](https://news.ycombinator.com/item?id=47170157) - [OsmAnd&apos;s Faster Offline Navigation (2025)](https://osmand.net/blog/fast-routing/)
* [2026-02-26, 18:26:02](https://lobste.rs/s/5al9ui/airsnitch_demystifying_breaking_client) - [AirSnitch: Demystifying and Breaking Client Isolation in Wi-Fi Networks](https://www.ndss-symposium.org/ndss-paper/airsnitch-demystifying-and-breaking-client-isolation-in-wi-fi-networks/)
* [2026-02-26, 18:13:44](https://lobste.rs/s/vgvzys/gilded_age_open_source_is_over) - [The Gilded Age of Open Source is over](https://www.youtube.com/watch?v=pTBgvhdz9VU)
* [2026-02-26, 18:12:26](https://news.ycombinator.com/item?id=47169757) - [What Claude Code Chooses](https://amplifying.ai/research/claude-code-picks)
* [2026-02-26, 18:11:41](https://lobste.rs/s/hfnps5/osmand_s_faster_offline_navigation) - [OsmAnd&apos;s Faster Offline Navigation](https://osmand.net/blog/fast-routing)
* [2026-02-26, 18:01:00](https://yro.slashdot.org/story/26/02/26/1722205/the-government-just-made-it-harder-to-see-what-spy-tech-it-buys?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Government Just Made it Harder to See What Spy Tech it Buys](https://yro.slashdot.org/story/26/02/26/1722205/the-government-just-made-it-harder-to-see-what-spy-tech-it-buys?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-26, 17:54:06](https://news.ycombinator.com/item?id=47169518) - [Show HN: Deff – Side-by-side Git diff review in your terminal](https://github.com/flamestro/deff)
* [2026-02-26, 17:35:24](https://lobste.rs/s/bhzsdr/open_source_endowment_world_s_first) - [Open Source Endowment — World&apos;s First Endowment Fund for OSS](https://endowment.dev/)
* [2026-02-26, 17:20:00](https://slashdot.org/story/26/02/26/1714241/the-ai-case-against-indian-it-ignores-what-indian-it-actually-does?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The AI Case Against Indian IT Ignores What Indian IT Actually Does](https://slashdot.org/story/26/02/26/1714241/the-ai-case-against-indian-it-ignores-what-indian-it-actually-does?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-26, 17:04:59](https://lobste.rs/s/gm4q46/palm_os_user_interface_guidelines_pdf) - [Palm OS User Interface Guidelines [pdf, 2003]](https://cs.uml.edu/~fredm/courses/91.308-spr05/files/palmdocs/uiguidelines.pdf)
* [2026-02-26, 17:01:05](https://news.ycombinator.com/item?id=47168726) - [Palm OS User Interface Guidelines (2003) [pdf]](https://cs.uml.edu/~fredm/courses/91.308-spr05/files/palmdocs/uiguidelines.pdf)
* [2026-02-26, 16:45:11](https://lobste.rs/s/o3cpxf/sliced_by_go_s_slices) - [Sliced by Go’s Slices](https://ohadravid.github.io/posts/2026-02-go-sliced/)
* [2026-02-26, 16:40:00](https://yro.slashdot.org/story/26/02/26/168257/new-york-sues-valve-for-enabling-illegal-gambling-with-loot-boxes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New York Sues Valve For Enabling &apos;Illegal Gambling&apos; With Loot Boxes](https://yro.slashdot.org/story/26/02/26/168257/new-york-sues-valve-for-enabling-illegal-gambling-with-loot-boxes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-26, 16:34:00](https://soylentnews.org/article.pl?sid=26/02/25/1553206&amp;from=rss) - [SpaceX&apos;s Faulty Falcon Spewed Massive Lithium Plume Over Europe, Say Scientists](https://soylentnews.org/article.pl?sid=26/02/25/1553206&amp;from=rss)
* [2026-02-26, 16:25:09](https://lobste.rs/s/ul9mjj/making_webassembly_first_class_language) - [Making WebAssembly a first-class language on the Web](https://hacks.mozilla.org/2026/02/making-webassembly-a-first-class-language-on-the-web/)
* [2026-02-26, 16:23:31](https://lobste.rs/s/nxmzzn/snakes_run_rendering_100m_pixels_second) - [snakes.run: rendering 100M pixels a second over ssh](https://eieio.games/blog/secure-massively-multiplayer-snake/)
* [2026-02-26, 16:07:11](https://news.ycombinator.com/item?id=47167931) - [Will vibe coding end like the maker movement?](https://read.technically.dev/p/vibe-coding-and-the-maker-movement)
* [2026-02-26, 16:03:00](https://slashdot.org/story/26/02/26/163233/burger-king-will-use-ai-to-check-if-employees-say-please-and-thank-you?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Burger King Will Use AI To Check If Employees Say &apos;Please&apos; and &apos;Thank You&apos;](https://slashdot.org/story/26/02/26/163233/burger-king-will-use-ai-to-check-if-employees-say-please-and-thank-you?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-26, 16:02:37](https://news.ycombinator.com/item?id=47167858) - [Nano Banana 2: Google&apos;s latest AI image generation model](https://blog.google/innovation-and-ai/technology/ai/nano-banana-2/)
* [2026-02-26, 15:55:48](https://news.ycombinator.com/item?id=47167763) - [AirSnitch: Demystifying and breaking client isolation in Wi-Fi networks [pdf]](https://www.ndss-symposium.org/wp-content/uploads/2026-f1282-paper.pdf)
* [2026-02-26, 15:21:35](https://lobste.rs/s/kj7g7j/ordered_dithering_with_arbitrary) - [Ordered Dithering with Arbitrary or Irregular Colour Palettes](https://matejlou.blog/2023/12/06/ordered-dithering-for-arbitrary-or-irregular-palettes/)
* [2026-02-26, 15:00:00](https://entertainment.slashdot.org/story/26/02/26/1422259/hbo-maxs-password-sharing-crackdown-will-expand-globally-in-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [HBO Max&apos;s Password-Sharing Crackdown Will Expand Globally in 2026](https://entertainment.slashdot.org/story/26/02/26/1422259/hbo-maxs-password-sharing-crackdown-will-expand-globally-in-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-26, 14:05:46](https://news.ycombinator.com/item?id=47166264) - [BuildKit: Docker&apos;s Hidden Gem That Can Build Almost Anything](https://tuananh.net/2026/02/25/buildkit-docker-hidden-gem/)
* [2026-02-26, 13:58:53](https://lobste.rs/s/ccworf/model_collapse_ends_ai_hype) - [Model Collapse Ends AI Hype](https://youtu.be/ShusuVq32hc)
* [2026-02-26, 13:36:33](https://lobste.rs/s/3kwdvv/can_llms_sat) - [Can LLMs SAT?](https://blog.aiono.dev/posts/can-llms-sat.html)
* [2026-02-26, 13:28:59](https://news.ycombinator.com/item?id=47165792) - [This time is different](https://shkspr.mobi/blog/2026/02/this-time-is-different/)
* [2026-02-26, 11:48:00](https://soylentnews.org/article.pl?sid=26/02/25/1551209&amp;from=rss) - [Michael Pollan Says AI May &apos;Think&apos; — but It Will Never be Conscious](https://soylentnews.org/article.pl?sid=26/02/25/1551209&amp;from=rss)
* [2026-02-26, 11:21:58](https://lobste.rs/s/ibkc72/git_postgres) - [Git in Postgres](https://nesbitt.io/2026/02/26/git-in-postgres.html)
* [2026-02-26, 07:58:03](https://lobste.rs/s/0pof41/buildkit_docker_s_hidden_gem_can_build) - [BuildKit: Docker&apos;s hidden gem that can build almost anything](https://tuananh.net/2026/02/25/buildkit-docker-hidden-gem/)
* [2026-02-26, 07:42:39](https://lobste.rs/s/oj6hru/google_api_keys_weren_t_secrets_then) - [Google API Keys Weren&apos;t Secrets. But then Gemini Changed the Rules](https://trufflesecurity.com/blog/google-api-keys-werent-secrets-but-then-gemini-changed-the-rules)
* [2026-02-26, 07:06:00](https://soylentnews.org/article.pl?sid=26/02/25/1546252&amp;from=rss) - [80386 Protection](https://soylentnews.org/article.pl?sid=26/02/25/1546252&amp;from=rss)
* [2026-02-26, 06:07:48](https://lobste.rs/s/uikg3e/open_letter_google_regarding_mandatory) - [An Open Letter to Google regarding Mandatory Developer Registration for Android](https://keepandroidopen.org/open-letter/)
* [2026-02-26, 04:34:26](https://news.ycombinator.com/item?id=47161889) - [Move tests to closed source repo](https://github.com/tldraw/tldraw/issues/8082)
* [2026-02-26, 04:14:20](https://lobste.rs/s/1y4gid/introducing_lyte2d_comfy_little_game) - [Introducing Lyte2D: A comfy little game engine](https://lyte2d.com/lyte.html?zip=public/lyte-intro.zip)
* [2026-02-26, 02:20:00](https://soylentnews.org/article.pl?sid=26/02/25/1544219&amp;from=rss) - [AI Bot Seemingly Shames Developer for Rejected Pull Request](https://soylentnews.org/article.pl?sid=26/02/25/1544219&amp;from=rss)
* [2026-02-26, 01:20:36](https://lobste.rs/s/yhv8lq/against_query_based_compilers) - [Against Query Based Compilers](https://matklad.github.io/2026/02/25/against-query-based-compilers.html)
* [2026-02-25, 23:55:34](https://news.ycombinator.com/item?id=47159833) - [Steering interpretable language models with concept algebra](https://www.guidelabs.ai/post/steerling-steering-8b/)
* [2026-02-25, 22:54:26](https://lobste.rs/s/rscdhi/long_range_e_bike_2021) - [Long Range E-Bike (2021)](https://jacquesmattheij.com/long-range-ebike/)
* [2026-02-25, 21:35:00](https://soylentnews.org/article.pl?sid=26/02/24/0734201&amp;from=rss) - [AI Agent Throws LAN Party](https://soylentnews.org/article.pl?sid=26/02/24/0734201&amp;from=rss)
* [2026-02-25, 21:16:34](https://lobste.rs/s/vtyttw/what_interesting_smaller_conferences) - [What interesting (and smaller) conferences are there in 2026?](https://lobste.rs/s/vtyttw/what_interesting_smaller_conferences)
* [2026-02-25, 16:37:00](https://soylentnews.org/article.pl?sid=26/02/24/0444250&amp;from=rss) - [Astronomers Identify a Galaxy Made Almost Entirely of Dark Matter](https://soylentnews.org/article.pl?sid=26/02/24/0444250&amp;from=rss)
* [2026-02-25, 14:35:23](https://lobste.rs/s/bwkwba/new_accounts_on_hn_10x_more_likely_use_em) - [New accounts on HN 10x more likely to use EM-dashes](https://www.marginalia.nu/weird-ai-crap/hn/)
* [2026-02-25, 11:55:00](https://soylentnews.org/article.pl?sid=26/02/24/0437208&amp;from=rss) - [China Remains Embedded in US Energy Networks &apos;for the Purpose of Taking It Down&apos;](https://soylentnews.org/article.pl?sid=26/02/24/0437208&amp;from=rss)
* [2026-02-25, 07:13:00](https://soylentnews.org/article.pl?sid=26/02/24/0427256&amp;from=rss) - [California Bill Would Restrict 3D Printers to State-Approved Models to Prevent Making  Gun Parts](https://soylentnews.org/article.pl?sid=26/02/24/0427256&amp;from=rss)
* [2026-02-25, 02:26:00](https://soylentnews.org/article.pl?sid=26/02/24/0420243&amp;from=rss) - [AI Apps on the Google Play Store Are Leaking Customer Data and Photos](https://soylentnews.org/article.pl?sid=26/02/24/0420243&amp;from=rss)
* [2026-02-24, 23:33:58](https://news.ycombinator.com/item?id=47145082) - [Show HN: Linex – A daily challenge: placing pieces on a board that fights back](https://www.playlinex.com/)
* [2026-02-24, 21:41:00](https://soylentnews.org/politics/article.pl?sid=26/02/23/103249&amp;from=rss) - [OS-Level Age Verification in Proposed Legislation in Colorado](https://soylentnews.org/politics/article.pl?sid=26/02/23/103249&amp;from=rss)
* [2026-02-24, 19:00:16](https://news.ycombinator.com/item?id=47141119) - [Show HN: Hacker Smacker – Spot great (and terrible) HN commenters at a glance](https://hackersmacker.org)
* [2026-02-24, 16:56:00](https://soylentnews.org/article.pl?sid=26/02/23/0959244&amp;from=rss) - [Is This Glass Square the Long, Long Future of Data Storage ?](https://soylentnews.org/article.pl?sid=26/02/23/0959244&amp;from=rss)
* [2026-02-24, 12:09:00](https://soylentnews.org/article.pl?sid=26/02/23/010246&amp;from=rss) - [Two Days of Oatmeal Reduce Cholesterol Level](https://soylentnews.org/article.pl?sid=26/02/23/010246&amp;from=rss)
* [2026-02-24, 07:21:00](https://soylentnews.org/article.pl?sid=26/02/23/0058242&amp;from=rss) - [Video Games are Losing the \&quot;Attention War\&quot; to Gambling, Porn, and Crypto](https://soylentnews.org/article.pl?sid=26/02/23/0058242&amp;from=rss)
* [2026-02-24, 02:37:00](https://soylentnews.org/article.pl?sid=26/02/23/0050217&amp;from=rss) - [Why Are Tatooine Planets Rare? Blame General Relativity](https://soylentnews.org/article.pl?sid=26/02/23/0050217&amp;from=rss)
* [2026-02-23, 22:18:23](https://news.ycombinator.com/item?id=47129801) - [Understanding the Go Runtime: The Memory Allocator](https://internals-for-interns.com/posts/go-memory-allocator/)
* [2026-02-23, 21:53:00](https://soylentnews.org/article.pl?sid=26/02/22/1313253&amp;from=rss) - [How Digitally Sovereign is Your Organization? This Red Hat Tool Can Tell You in Minutes](https://soylentnews.org/article.pl?sid=26/02/22/1313253&amp;from=rss)
* [2026-02-23, 20:54:34](https://news.ycombinator.com/item?id=47128645) - [I baked a pie every day for a year and it changed my life](https://www.theguardian.com/lifeandstyle/2026/feb/22/a-new-start-after-60-i-baked-a-pie-every-day-for-a-year-and-it-changed-my-life)
* [2026-02-23, 18:13:10](https://news.ycombinator.com/item?id=47126286) - [Cartographic Symbologies: The Art and Design of Expression in Historic Maps](https://exhibits.stanford.edu/cartosym/browse)
* [2026-02-23, 17:07:00](https://soylentnews.org/article.pl?sid=26/02/22/1311241&amp;from=rss) - [Goodbye Paper Vehicle Titles – Illinois State is Making Digital Mandatory](https://soylentnews.org/article.pl?sid=26/02/22/1311241&amp;from=rss)
* [2026-02-23, 16:58:58](https://news.ycombinator.com/item?id=47124999) - [Museum of Plugs and Sockets](https://plugsocketmuseum.nl/index.html)
* [2026-02-23, 16:23:01](https://news.ycombinator.com/item?id=47124454) - [An Introduction to the Codex Seraphinianus, the Strangest Book Ever Published](https://www.openculture.com/2026/02/an-introduction-to-the-codex-seraphinianus.html)
* [2026-02-23, 12:22:00](https://soylentnews.org/article.pl?sid=26/02/22/139236&amp;from=rss) - [Concrete “Battery” Developed at MIT Now Packs 10 Times the Power](https://soylentnews.org/article.pl?sid=26/02/22/139236&amp;from=rss)
* [2026-02-23, 12:19:43](https://news.ycombinator.com/item?id=47121352) - [Lidar waveforms are worth 40x128x33 words](https://openaccess.thecvf.com/content/ICCV2025/html/Scheuble_Lidar_Waveforms_are_Worth_40x128x33_Words_ICCV_2025_paper.html)
* [2026-02-23, 08:39:47](https://news.ycombinator.com/item?id=47119665) - [The Wolfram S Combinator Challenge](https://www.combinatorprize.org/)
* [2026-02-23, 07:41:00](https://soylentnews.org/article.pl?sid=26/02/22/1259218&amp;from=rss) - [Privacy Is Not a Price You Pay for Growth](https://soylentnews.org/article.pl?sid=26/02/22/1259218&amp;from=rss)
* [2026-02-23, 02:55:00](https://soylentnews.org/article.pl?sid=26/02/22/1256215&amp;from=rss) - [Pink Noise Reduces REM Sleep and May Harm Sleep Quality](https://soylentnews.org/article.pl?sid=26/02/22/1256215&amp;from=rss)
