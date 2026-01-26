# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Advancements and Controversies

* [DOT Plans To Use Google Gemini AI To Write Regulations](https://news.slashdot.org/story/26/01/26/1948215/dot-plans-to-use-google-gemini-ai-to-write-regulations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - An ambitious initiative by the Department of Transportation to employ Google's Gemini AI for drafting regulations.

* [Kubernetes Remote Code Execution Via Nodes/Proxy GET Permission](https://grahamhelton.com/blog/nodes-proxy-rce) - A critical vulnerability in Kubernetes that allows remote code execution via Node/Proxy GET permissions.

* [Nike Says It's Investigating Possible Data Breach](https://it.slashdot.org/story/26/01/26/1853255/nike-says-its-investigating-possible-data-breach?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Nike responds to a potential data breach, highlighting growing cybersecurity concerns.

* [ChatGPT Containers can now run bash, pip/npm install packages and download files](https://simonwillison.net/2026/Jan/26/chatgpt-containers/) - Advancements in ChatGPT technology allows for new functionalities like running bash and installing packages.

* [Show HN: TetrisBench – Gemini Flash reaches 66% win rate on Tetris against Opus](https://tetrisbench.com/tetrisbench/) - A showcase of TetrisBench, where Gemini Flash boasts a 66% win rate against challenges.

* [Fedora Asahi Remix is now working on Apple M3](https://bsky.app/profile/did:plc:okydh7e54e2nok65kjxdklvd/post/3mdd55paffk2o) - Fedora's Asahi Remix compatibility with the Apple M3 is making strides.

* [Godot 4.6 Release: It's all about your flow](https://godotengine.org/releases/4.6/) - The latest version of Godot, 4.6, focuses on enhancing workflows for developers.

* [How a 15,000-Person Island Stumbled Into a $70 Million AI Windfall](https://tech.slashdot.org/story/26/01/26/1731231/how-a-15000-person-island-stumbled-into-a-70-million-ai-windfall?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The curious case of a small island that unexpectedly gained a massive financial boost from AI.

* [Why there's no European Google?](https://ploum.net/2026-01-22-why-no-european-google.html) - Insights into the factors preventing Europe's establishment of a tech giant comparable to Google.

## Media and Entertainment

* [Apple's Enshittification Moment: How the App Store is Quietly Abandoning User Trust](https://soylentnews.org/article.pl?sid=26/01/25/145215&amp;from=rss) - Criticism of how Apple is undermining user trust in its App Store.

* [Television Turns 100](https://entertainment.slashdot.org/story/26/01/26/1810242/television-turns-100?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A retrospective on TV's profound impact in its 100-year history.

* [GTA 6's Physical Release Could Be Delayed To 2027 Because of Leaks](https://games.slashdot.org/story/26/01/26/1929203/gta-6s-physical-release-could-be-delayed-to-2027-because-of-leaks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Potential delays in GTA 6's physical release due to content leaks.

* [Show HN: Ourguide – OS wide task guidance system that shows you where to click](https://ourguide.ai) - A demonstration of a new tool designed to assist users through interface navigation.

* [Angry Gamers Are Forcing Studios To Scrap or Rethink New Releases](https://games.slashdot.org/story/26/01/26/1359241/angry-gamers-are-forcing-studios-to-scrap-or-rethink-new-releases?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Challenges studios face as gamers voice dissatisfaction leading to canceled or altered releases.

* [Richard Stallman Was Asked: Is Software Piracy Wrong?](https://news.slashdot.org/story/26/01/25/1952231/richard-stallman-was-asked-is-software-piracy-wrong?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A discussion on ethics in software piracy from the perspective of Richard Stallman.

## Scientific and Environmental Insights

* [The mountain that weighed the Earth](https://signoregalilei.com/2026/01/18/the-mountain-that-weighed-the-earth/) - Exploring how a mountain's weight unveiled insights about our planet.

* [World Not Ready For Rise In Extreme Heat, Scientists Say](https://news.slashdot.org/story/26/01/26/1612225/world-not-ready-for-rise-in-extreme-heat-scientists-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Scientists highlight the growing threat of extreme climate conditions and global unpreparedness.

* [Ancient “Mosaic” Fossils Found in Morocco Challenge the Timeline of Human Evolution](https://soylentnews.org/article.pl?sid=26/01/23/1016236&amp;from=rss) - New fossil discoveries that could reshape our understanding of human evolution.

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

* [2026-01-26, 21:22:00](https://news.slashdot.org/story/26/01/26/1948215/dot-plans-to-use-google-gemini-ai-to-write-regulations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DOT Plans To Use Google Gemini AI To Write Regulations](https://news.slashdot.org/story/26/01/26/1948215/dot-plans-to-use-google-gemini-ai-to-write-regulations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-26, 21:19:00](https://soylentnews.org/article.pl?sid=26/01/25/145215&amp;from=rss) - [Apple&apos;s Enshittification Moment: How the App Store is Quietly Abandoning User Trust](https://soylentnews.org/article.pl?sid=26/01/25/145215&amp;from=rss)
* [2026-01-26, 21:11:53](https://news.ycombinator.com/item?id=46771599) - [People who know the formula for WD-40](https://www.wsj.com/business/the-secret-society-of-people-who-know-the-formula-for-wd-40-e9c0ff54)
* [2026-01-26, 20:45:00](https://news.slashdot.org/story/26/01/26/1941259/valve-facing-uk-lawsuit-over-pricing-and-commissions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Valve Facing UK Lawsuit Over Pricing and Commissions](https://news.slashdot.org/story/26/01/26/1941259/valve-facing-uk-lawsuit-over-pricing-and-commissions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-26, 20:05:00](https://news.slashdot.org/story/26/01/26/1938228/new-california-law-means-big-changes-for-photos-of-homes-in-real-estate-listings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New California Law Means Big Changes For Photos of Homes in Real Estate Listings](https://news.slashdot.org/story/26/01/26/1938228/new-california-law-means-big-changes-for-photos-of-homes-in-real-estate-listings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-26, 19:46:59](https://lobste.rs/s/pimgzd/kubernetes_remote_code_execution_via) - [Kubernetes Remote Code Execution Via Nodes/Proxy GET Permission](https://grahamhelton.com/blog/nodes-proxy-rce)
* [2026-01-26, 19:28:00](https://games.slashdot.org/story/26/01/26/1929203/gta-6s-physical-release-could-be-delayed-to-2027-because-of-leaks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GTA 6&apos;s Physical Release Could Be Delayed To 2027 Because of Leaks](https://games.slashdot.org/story/26/01/26/1929203/gta-6s-physical-release-could-be-delayed-to-2027-because-of-leaks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-26, 19:23:54](https://news.ycombinator.com/item?id=46770274) - [Dithering – Part 2: The Ordered Dithering](https://visualrambling.space/dithering-part-2/)
* [2026-01-26, 19:19:40](https://news.ycombinator.com/item?id=46770221) - [ChatGPT Containers can now run bash, pip/npm install packages and download files](https://simonwillison.net/2026/Jan/26/chatgpt-containers/)
* [2026-01-26, 19:16:10](https://lobste.rs/s/pircdi/home_lab_developments) - [Home Lab Developments](https://zitseng.com/archives/25229)
* [2026-01-26, 19:12:17](https://lobste.rs/s/gu8y4b/godot_4_6_release_it_s_all_about_your_flow) - [Godot 4.6 Release: It&apos;s all about your flow](https://godotengine.org/releases/4.6/)
* [2026-01-26, 18:58:37](https://news.ycombinator.com/item?id=46769965) - [When AI &apos;builds a browser,&apos; check the repo before believing the hype](https://www.theregister.com/2026/01/26/cursor_opinion/)
* [2026-01-26, 18:53:00](https://it.slashdot.org/story/26/01/26/1853255/nike-says-its-investigating-possible-data-breach?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nike Says It&apos;s Investigating Possible Data Breach](https://it.slashdot.org/story/26/01/26/1853255/nike-says-its-investigating-possible-data-breach?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-26, 18:42:40](https://news.ycombinator.com/item?id=46769752) - [Show HN: TetrisBench – Gemini Flash reaches 66% win rate on Tetris against Opus](https://tetrisbench.com/tetrisbench/)
* [2026-01-26, 18:37:37](https://news.ycombinator.com/item?id=46769668) - [Notice of collective action lawsuit against Workday, Inc.](https://workdaycase.com)
* [2026-01-26, 18:19:45](https://news.ycombinator.com/item?id=46769422) - [Show HN: Ourguide – OS wide task guidance system that shows you where to click](https://ourguide.ai)
* [2026-01-26, 18:10:00](https://entertainment.slashdot.org/story/26/01/26/1810242/television-turns-100?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Television Turns 100](https://entertainment.slashdot.org/story/26/01/26/1810242/television-turns-100?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-26, 18:05:15](https://news.ycombinator.com/item?id=46769201) - [Google Books removed all search functions for any books with previews](https://old.reddit.com/r/google/comments/1qn1hk1/google_has_seemingly_entirely_removed_search/)
* [2026-01-26, 17:54:20](https://news.ycombinator.com/item?id=46769051) - [Fedora Asahi Remix is now working on Apple M3](https://bsky.app/profile/did:plc:okydh7e54e2nok65kjxdklvd/post/3mdd55paffk2o)
* [2026-01-26, 17:46:38](https://news.ycombinator.com/item?id=46768909) - [JuiceSSH – Give me my pro features back](https://nproject.io/blog/juicessh-give-me-back-my-pro-features/)
* [2026-01-26, 17:46:27](https://lobste.rs/s/luhxc7/juicessh_give_me_my_pro_features_back) - [JuiceSSH - Give me my pro features back](https://nproject.io/blog/juicessh-give-me-back-my-pro-features/)
* [2026-01-26, 17:30:00](https://tech.slashdot.org/story/26/01/26/1731231/how-a-15000-person-island-stumbled-into-a-70-million-ai-windfall?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How a 15,000-Person Island Stumbled Into a $70 Million AI Windfall](https://tech.slashdot.org/story/26/01/26/1731231/how-a-15000-person-island-stumbled-into-a-70-million-ai-windfall?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-26, 17:15:27](https://lobste.rs/s/bpqtph/state_linux_music_players_2026) - [The state of Linux music players in 2026](https://crescentro.se/posts/linux-music-players-2026/)
* [2026-01-26, 17:14:33](https://lobste.rs/s/cm3wkh/fedora_asahi_remix_is_now_working_on_apple) - [Fedora Asahi Remix is now working on Apple M3](https://bsky.app/profile/did:plc:okydh7e54e2nok65kjxdklvd/post/3mdd55paffk2o)
* [2026-01-26, 16:50:00](https://slashdot.org/story/26/01/26/1637238/fixing-retail-with-land-value-capture?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fixing Retail With Land Value Capture](https://slashdot.org/story/26/01/26/1637238/fixing-retail-with-land-value-capture?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-26, 16:43:30](https://news.ycombinator.com/item?id=46767875) - [The mountain that weighed the Earth](https://signoregalilei.com/2026/01/18/the-mountain-that-weighed-the-earth/)
* [2026-01-26, 16:38:00](https://soylentnews.org/article.pl?sid=26/01/25/1312202&amp;from=rss) - [Snover.exit()](https://soylentnews.org/article.pl?sid=26/01/25/1312202&amp;from=rss)
* [2026-01-26, 16:12:00](https://news.slashdot.org/story/26/01/26/1612225/world-not-ready-for-rise-in-extreme-heat-scientists-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [World Not Ready For Rise In Extreme Heat, Scientists Say](https://news.slashdot.org/story/26/01/26/1612225/world-not-ready-for-rise-in-extreme-heat-scientists-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-26, 16:11:28](https://news.ycombinator.com/item?id=46767440) - [RIP Low-Code 2014-2025](https://www.zackliscio.com/posts/rip-low-code-2014-2025/)
* [2026-01-26, 15:48:51](https://lobste.rs/s/7t4i0i/porting_doom_my_webassembly_vm) - [Porting DOOM to my WebAssembly VM](https://irreducible.io/blog/porting-doom-to-wasm/)
* [2026-01-26, 15:38:50](https://news.ycombinator.com/item?id=46766961) - [There is an AI code review bubble](https://www.greptile.com/blog/ai-code-review-bubble)
* [2026-01-26, 15:38:37](https://lobste.rs/s/cycn1o/intent_envelope_proofs_for_completeness) - [The Intent Envelope: Proofs for Completeness, Not Just Soundness](https://midspiral.com/blog/intent-envelope-proofs-for-completeness-not-just-soundness/)
* [2026-01-26, 15:28:00](https://news.slashdot.org/story/26/01/26/1528240/saudi-arabia-to-scale-back-neom-megaproject?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Saudi Arabia To Scale Back Neom Megaproject](https://news.slashdot.org/story/26/01/26/1528240/saudi-arabia-to-scale-back-neom-megaproject?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-26, 15:23:00](https://news.ycombinator.com/item?id=46766741) - [Qwen3-Max-Thinking](https://qwen.ai/blog?id=qwen3-max-thinking)
* [2026-01-26, 15:01:03](https://news.ycombinator.com/item?id=46766432) - [OSS ChatGPT WebUI – 530 Models, MCP, Tools, Gemini RAG, Image/Audio Gen](https://llmspy.org/docs/v3)
* [2026-01-26, 14:42:11](https://lobste.rs/s/zojcpq/reversing_abstractions_existential) - [Reversing abstractions: an existential crisis](https://www.humprog.org/~stephen/blog/research/recovering-abstraction.html)
* [2026-01-26, 14:41:04](https://news.ycombinator.com/item?id=46766188) - [Television is 100 years old today](https://diamondgeezer.blogspot.com/2026/01/tv100.html)
* [2026-01-26, 14:40:00](https://news.slashdot.org/story/26/01/26/1428221/ai-is-hitting-uk-harder-than-other-big-economies-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI is Hitting UK Harder Than Other Big Economies, Study Finds](https://news.slashdot.org/story/26/01/26/1428221/ai-is-hitting-uk-harder-than-other-big-economies-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-26, 14:27:00](https://news.ycombinator.com/item?id=46766031) - [Google AI Overviews cite YouTube more than any medical site for health queries](https://www.theguardian.com/technology/2026/jan/24/google-ai-overviews-youtube-medical-citations-study)
* [2026-01-26, 14:00:00](https://games.slashdot.org/story/26/01/26/1359241/angry-gamers-are-forcing-studios-to-scrap-or-rethink-new-releases?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Angry Gamers Are Forcing Studios To Scrap or Rethink New Releases](https://games.slashdot.org/story/26/01/26/1359241/angry-gamers-are-forcing-studios-to-scrap-or-rethink-new-releases?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-26, 12:44:59](https://lobste.rs/s/nktckk/mcclim_7guis_part_1_counter) - [McCLIM and 7GUIs - Part 1: The Counter](https://turtleware.eu/posts/McCLIM-and-7GUIs---Part-1-The-Counter.html)
* [2026-01-26, 12:34:00](https://news.slashdot.org/story/26/01/25/1952231/richard-stallman-was-asked-is-software-piracy-wrong?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Richard Stallman Was Asked: Is Software Piracy Wrong?](https://news.slashdot.org/story/26/01/25/1952231/richard-stallman-was-asked-is-software-piracy-wrong?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-26, 11:55:00](https://soylentnews.org/article.pl?sid=26/01/25/0439223&amp;from=rss) - [Starlink Now Uses Customers&apos; Personal Data for AI Training](https://soylentnews.org/article.pl?sid=26/01/25/0439223&amp;from=rss)
* [2026-01-26, 11:46:03](https://lobste.rs/s/rjfmon/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/rjfmon/what_are_you_doing_this_week)
* [2026-01-26, 11:42:25](https://lobste.rs/s/vyrmdi/implementing_transcendental_functions) - [Implementing the transcendental functions in Ivy](https://commandcenter.blogspot.com/2026/01/implementing-transcendental-functions.html)
* [2026-01-26, 11:00:44](https://news.ycombinator.com/item?id=46764170) - [Show HN: Only 1 LLM can fly a drone](https://github.com/kxzk/snapbench)
* [2026-01-26, 10:19:51](https://news.ycombinator.com/item?id=46763864) - [MapLibre Tile: a modern and efficient vector tile format](https://maplibre.org/news/2026-01-23-mlt-release/)
* [2026-01-26, 10:19:18](https://lobste.rs/s/izn3wf/long_branches_compilers_assemblers) - [Long branches in compilers, assemblers, and linkers](https://maskray.me/blog/2026-01-25-long-branches-in-compilers-assemblers-and-linkers)
* [2026-01-26, 10:18:32](https://lobste.rs/s/qqfg0q/announcing_maplibre_tile_modern) - [Announcing MapLibre Tile: a modern and efficient vector tile format](https://maplibre.org/news/2026-01-23-mlt-release/)
* [2026-01-26, 10:02:12](https://news.ycombinator.com/item?id=46763721) - [San Francisco Graffiti](https://walzr.com/sf-graffiti)
* [2026-01-26, 09:41:37](https://lobste.rs/s/cyx4ba/apple_what_have_you_done) - [Apple, What Have You Done?](https://onlinegoddess.net/2026/01/apple-what-have-you-done/)
* [2026-01-26, 08:34:00](https://news.slashdot.org/story/26/01/26/008257/is-google-prioritizing-youtube-and-x-over-news-publishers-on-discover?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is Google Prioritizing YouTube and X Over News Publishers on Discover?](https://news.slashdot.org/story/26/01/26/008257/is-google-prioritizing-youtube-and-x-over-news-publishers-on-discover?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-26, 07:49:09](https://lobste.rs/s/u7bjzq/why_there_s_no_european_google) - [Why there’s no European Google?](https://ploum.net/2026-01-22-why-no-european-google.html)
* [2026-01-26, 07:41:52](https://news.ycombinator.com/item?id=46762882) - [The Holy Grail of Linux Binary Compatibility: Musl and Dlopen](https://github.com/quaadgras/graphics.gd/discussions/242)
* [2026-01-26, 07:11:00](https://soylentnews.org/article.pl?sid=26/01/25/0432221&amp;from=rss) - [Attackers Find a New Way to Share Malicious Snap Packages](https://soylentnews.org/article.pl?sid=26/01/25/0432221&amp;from=rss)
* [2026-01-26, 05:44:00](https://hardware.slashdot.org/story/26/01/26/0317225/startup-uses-spacex-tech-to-cool-data-centers-with-less-power-and-no-water?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Startup Uses SpaceX Tech to Cool Data Centers With Less Power and No Water](https://hardware.slashdot.org/story/26/01/26/0317225/startup-uses-spacex-tech-to-cool-data-centers-with-less-power-and-no-water?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-26, 05:23:01](https://news.ycombinator.com/item?id=46762150) - [The browser is the sandbox](https://simonwillison.net/2026/Jan/25/the-browser-is-the-sandbox/)
* [2026-01-26, 05:11:02](https://lobste.rs/s/ve0986/exploring_linux_on_loongarch_mini_pc) - [Exploring Linux on a LoongArch Mini PC](https://www.wezm.net/v2/posts/2026/loongarch-mini-pc-m700s/)
* [2026-01-26, 05:09:38](https://lobste.rs/s/kvvxkl/enclosure_feedback_loop_how_llms) - [The Enclosure feedback loop, or how LLMs sabotage existing programming practices by privatizing a public good](https://michiel.buddingh.eu/enclosure-feedback-loop)
* [2026-01-26, 03:26:00](https://soylentnews.org/article.pl?sid=26/01/25/0429246&amp;from=rss) - [UK MPs Call for AI Stress Testing in Financial Services](https://soylentnews.org/article.pl?sid=26/01/25/0429246&amp;from=rss)
* [2026-01-26, 02:01:04](https://news.ycombinator.com/item?id=46760927) - [Show HN: SF Microclimates](https://github.com/solo-founders/sf-microclimates)
* [2026-01-26, 01:43:12](https://lobste.rs/s/ue0bau/zerobrew_is_rust_based_5_20x_faster_drop) - [zerobrew is a Rust-based, 5-20x faster drop-in Homebrew alternative](https://github.com/lucasgelfond/zerobrew)
* [2026-01-26, 01:23:10](https://lobste.rs/s/d4y8rq/sysp_systems_lisp_compiling_c_with) - [sysp: Systems Lisp compiling to C with homoiconic macros, refcounted memory, Hindley-Milner type inference](https://github.com/karans4/sysp)
* [2026-01-25, 23:03:05](https://lobste.rs/s/uqfh4p/screeps_how_game_about_programming) - [Screeps: How a game about programming exposed thousands of players to remote code execution](https://outsidetheasylum.blog/screeps/)
* [2026-01-25, 22:36:00](https://soylentnews.org/article.pl?sid=26/01/24/0116243&amp;from=rss) - [Microsoft Gave FBI a Set of BitLocker Encryption Keys to Unlock Suspects’ Laptops](https://soylentnews.org/article.pl?sid=26/01/24/0116243&amp;from=rss)
* [2026-01-25, 19:51:45](https://lobste.rs/s/xmwgtx/how_think_about_gas_town) - [How to think about Gas Town](https://steveklabnik.com/writing/how-to-think-about-gas-town/)
* [2026-01-25, 19:29:25](https://lobste.rs/s/5qylwg/i_was_right_about_atproto_key_management) - [I Was Right About ATProto Key Management](https://notes.nora.codes/atproto-again/)
* [2026-01-25, 17:53:00](https://soylentnews.org/article.pl?sid=26/01/24/0114253&amp;from=rss) - [This May Be The Grossest Eye Pic Ever—but the Cause is What’s Truly Horrifying](https://soylentnews.org/article.pl?sid=26/01/24/0114253&amp;from=rss)
* [2026-01-25, 17:48:30](https://lobste.rs/s/pnhbjw/allowlist_for_gitignore) - [Allowlist for .gitignore](https://blog.izissise.net/posts/gitignoreallowlist/)
* [2026-01-25, 16:22:07](https://lobste.rs/s/4jiqup/software_patches_nixos_for_fun) - [Software patches in NixOS for fun and productivity](https://log.pfad.fr/2026/software-patching-in-nixos/)
* [2026-01-25, 13:02:00](https://soylentnews.org/article.pl?sid=26/01/24/0112225&amp;from=rss) - [OpenAI Rolls Out Ads in ChatGPT as Expenses Skyrocket](https://soylentnews.org/article.pl?sid=26/01/24/0112225&amp;from=rss)
* [2026-01-25, 08:30:00](https://soylentnews.org/article.pl?sid=26/01/24/0110242&amp;from=rss) - [Major River Deltas Are Sinking Faster Than Sea-Level Rise](https://soylentnews.org/article.pl?sid=26/01/24/0110242&amp;from=rss)
* [2026-01-25, 03:38:00](https://soylentnews.org/article.pl?sid=26/01/24/019242&amp;from=rss) - [How Greenwashing Creates &apos;False Stability&apos; for Companies](https://soylentnews.org/article.pl?sid=26/01/24/019242&amp;from=rss)
* [2026-01-24, 22:54:00](https://soylentnews.org/article.pl?sid=26/01/23/1016236&amp;from=rss) - [Ancient “Mosaic” Fossils Found in Morocco Challenge the Timeline of Human Evolution](https://soylentnews.org/article.pl?sid=26/01/23/1016236&amp;from=rss)
* [2026-01-24, 18:11:00](https://soylentnews.org/article.pl?sid=26/01/23/1010250&amp;from=rss) - [Micron Acquires PSMC Fab Site in Taiwan for $1.8 Billion](https://soylentnews.org/article.pl?sid=26/01/23/1010250&amp;from=rss)
* [2026-01-24, 13:25:00](https://soylentnews.org/article.pl?sid=26/01/23/1012244&amp;from=rss) - [Hygienic Conditions in Pompeii&apos;s Early Baths Were Poor](https://soylentnews.org/article.pl?sid=26/01/23/1012244&amp;from=rss)
* [2026-01-24, 08:42:00](https://soylentnews.org/article.pl?sid=26/01/22/124243&amp;from=rss) - [A Billiard Ball as a Universal Computation Machine](https://soylentnews.org/article.pl?sid=26/01/22/124243&amp;from=rss)
* [2026-01-24, 04:01:00](https://soylentnews.org/article.pl?sid=26/01/22/121252&amp;from=rss) - [When Order Matters: How A Single DNS Change Broke The Internet For Millions](https://soylentnews.org/article.pl?sid=26/01/22/121252&amp;from=rss)
* [2026-01-23, 23:16:00](https://soylentnews.org/article.pl?sid=26/01/22/1148259&amp;from=rss) - [Caltech-Led Team Finds New Superconducting State](https://soylentnews.org/article.pl?sid=26/01/22/1148259&amp;from=rss)
* [2026-01-23, 18:32:00](https://soylentnews.org/article.pl?sid=26/01/22/1144249&amp;from=rss) - [Starlink in Iran: How the Regime Jams the Service and What Helps Against It](https://soylentnews.org/article.pl?sid=26/01/22/1144249&amp;from=rss)
* [2026-01-23, 13:45:00](https://soylentnews.org/article.pl?sid=26/01/22/1141230&amp;from=rss) - [Physics of Foam Strangely Resembles AI Training](https://soylentnews.org/article.pl?sid=26/01/22/1141230&amp;from=rss)
* [2026-01-23, 08:59:00](https://soylentnews.org/article.pl?sid=26/01/22/0422248&amp;from=rss) - [Wikipedia Volunteers Spent Years Cataloging AI Tells. Now There&apos;s a Plugin to Avoid Them.](https://soylentnews.org/article.pl?sid=26/01/22/0422248&amp;from=rss)
* [2026-01-23, 04:12:00](https://soylentnews.org/article.pl?sid=26/01/22/043242&amp;from=rss) - [Nvidia Wanted Pirated Book Stash Access](https://soylentnews.org/article.pl?sid=26/01/22/043242&amp;from=rss)
* [2026-01-23, 02:27:30](https://news.ycombinator.com/item?id=46727603) - [Not all Chess960 positions are equally complex](https://arxiv.org/abs/2512.14319)
* [2026-01-22, 23:28:00](https://soylentnews.org/article.pl?sid=26/01/22/0355223&amp;from=rss) - [Textbooks Were Wrong: Human Hair Doesn&apos;t Grow the Way Scientists Thought](https://soylentnews.org/article.pl?sid=26/01/22/0355223&amp;from=rss)
* [2026-01-22, 20:10:25](https://news.ycombinator.com/item?id=46724542) - [Taming P99s in OpenFGA: How we built a self-tuning strategy planner](https://auth0.com/blog/self-tuning-strategy-planner-openfga/)
* [2026-01-22, 18:40:00](https://soylentnews.org/article.pl?sid=26/01/21/0150257&amp;from=rss) - [Cows Use Tools](https://soylentnews.org/article.pl?sid=26/01/21/0150257&amp;from=rss)
* [2026-01-22, 13:46:00](https://soylentnews.org/article.pl?sid=26/01/21/0147238&amp;from=rss) - [AI Bathroom Monitors? Welcome To America’s New Surveillance High Schools](https://soylentnews.org/article.pl?sid=26/01/21/0147238&amp;from=rss)
* [2026-01-22, 09:07:00](https://soylentnews.org/article.pl?sid=26/01/21/0141201&amp;from=rss) - [France Records More Deaths Than Births for First Time Since End of Second World War](https://soylentnews.org/article.pl?sid=26/01/21/0141201&amp;from=rss)
* [2026-01-22, 04:16:00](https://soylentnews.org/article.pl?sid=26/01/21/0136237&amp;from=rss) - [Professors Issue Warning Over Surge in College Students Unable to Read](https://soylentnews.org/article.pl?sid=26/01/21/0136237&amp;from=rss)
