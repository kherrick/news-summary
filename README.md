# [News Summary](https://kherrick.github.io/news-summary/)

## Technological innovations and advancements

* [China Smashes Solar Installation Record In May](https://hardware.slashdot.org/story/25/06/23/2342253/china-smashes-solar-installation-record-in-may?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - China achieves a groundbreaking milestone in renewable energy by setting a solar installation record.

* [Scientists Use Bacteria To Turn Plastic Waste Into Paracetamol](https://science.slashdot.org/story/25/06/23/1945219/scientists-use-bacteria-to-turn-plastic-waste-into-paracetamol?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Researchers convert plastic waste into valuable medicine, demonstrating a novel approach to tackling pollution.

* [Breakthrough cancer test predicts whether chemotherapy will work](https://www.telegraph.co.uk/news/2025/06/23/cancer-test-predicts-whether-chemotherapy-will-work/) - A revolutionary diagnostic test could tailor cancer treatments by predicting chemotherapy effectiveness.

* [Magic Lantern Software for Canon Cameras Is Back](https://news.slashdot.org/story/25/06/23/2054229/magic-lantern-software-for-canon-cameras-is-back?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Popular open-source software for Canon cameras is making a comeback after a hiatus.

## Cybersecurity and AI debates

* [Judge Denies Creating 'Mass Surveillance Program' Harming All ChatGPT Users](https://yro.slashdot.org/story/25/06/23/2039253/judge-denies-creating-mass-surveillance-program-harming-all-chatgpt-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Legal battles arise over privacy concerns around AI systems and mass data logging.

* [Canadian Telecom Hacked By Suspected China State Group](https://tech.slashdot.org/story/25/06/23/201237/canadian-telecom-hacked-by-suspected-china-state-group?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A cybersecurity breach implicates a Chinese state group in targeting a key Canadian telecom firm.

* [Hinge CEO Says Dating AI Chatbots Is 'Playing With Fire'](https://slashdot.org/story/25/06/23/2324250/hinge-ceo-says-dating-ai-chatbots-is-playing-with-fire?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Concerns grow over the ethical implications of integrating AI in online dating.

## Innovative tools and projects

* [Show HN: Comparator - I built a free, open-source app to compare job offers](https://comparator-one.vercel.app/) - A new open-source project simplifies job offer comparisons for job seekers.

* [alden: detachable terminal sessions without breaking scrollback](https://ansuz.sooke.bc.ca/entry/389) - Innovating command-line workflows, this tool keeps scrollback intact in detachable terminal sessions.

* [Making TRAMP Go Brrrr](https://coredumped.dev/2025/06/18/making-tramp-go-brrrr./) - TRAMP's performance in remote file editing sees major improvements through innovative tweaks.

* [Can your terminal do emojis? How big?](https://dgl.cx/2025/06/can-your-terminal-do-emojis) - A playful exploration of terminals' emoji handling capabilities and limitations.

## Scientific and cosmic breakthroughs

* [A Cracked Piece of Metal Self-Healed in Experiment That Stunned Scientists](https://soylentnews.org/article.pl?sid=25/06/22/179210&amp;from=rss) - Researchers uncover an unexpected phenomenon of self-healing metal in experimental conditions.

* [Astronomers Locate Universe's 'Missing' Matter in the Largest Cosmic Structures](https://soylentnews.org/article.pl?sid=25/06/22/0357239&amp;from=rss) - Scientists make an exciting discovery about the elusive baryonic matter of the universe.

* [Dead NASA Satellite Unexpectedly Emits Powerful Radio Pulse](https://soylentnews.org/article.pl?sid=25/06/21/1928245&amp;from=rss) - A defunct NASA satellite surprises researchers by emitting an unexpected radio signal.

* [First methane-powered sea spiders found crawling on the ocean floor](https://www.cnn.com/2025/06/17/science/spiders-deep-sea-methane-new-species) - New marine species discovered utilizing methane for survival challenges established paradigms.

## Historic and societal reflections

* [50 Years of JAWS](https://soylentnews.org/article.pl?sid=25/06/22/173242&amp;from=rss) - Reflecting on the legacy of "JAWS" and its impact on filmmaking.

* [Dr. Demento Announces Retirement From Radio After 55 Years](https://soylentnews.org/article.pl?sid=25/06/21/1934229&amp;from=rss) - Legendary radio personality Dr. Demento retires, marking the end of a historic career.

* [Book Documents the Rise and Fall of the Concept of the Private Life](https://soylentnews.org/article.pl?sid=25/06/22/0319216&amp;from=rss) - A new book explores the evolution and decline of privacy in the digital age.

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

* [2025-06-24, 03:36:00](https://soylentnews.org/article.pl?sid=25/06/22/1718247&amp;from=rss) - [US Tech Czar: China Just Two Years Behind On Chip Design](https://soylentnews.org/article.pl?sid=25/06/22/1718247&amp;from=rss)
* [2025-06-24, 03:30:00](https://hardware.slashdot.org/story/25/06/23/2342253/china-smashes-solar-installation-record-in-may?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Smashes Solar Installation Record In May](https://hardware.slashdot.org/story/25/06/23/2342253/china-smashes-solar-installation-record-in-may?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-24, 02:13:02](https://news.ycombinator.com/item?id=44362272) - [Can your terminal do emojis? How big?](https://dgl.cx/2025/06/can-your-terminal-do-emojis)
* [2025-06-24, 02:11:03](https://news.ycombinator.com/item?id=44362263) - [Breakthrough cancer test predicts whether chemotherapy will work](https://www.telegraph.co.uk/news/2025/06/23/cancer-test-predicts-whether-chemotherapy-will-work/)
* [2025-06-24, 01:54:12](https://news.ycombinator.com/item?id=44362165) - [Excalidraw+ Is Now SoC 2 Certified](https://plus.excalidraw.com/blog/excalidraw-soc2)
* [2025-06-24, 01:28:37](https://lobste.rs/s/r0txxp/interesting_bits_postgres_grammar) - [Interesting Bits of Postgres Grammar](https://steve.dignam.xyz/2025/06/20/interesting-bits-of-postgres-grammar/)
* [2025-06-24, 01:25:00](https://games.slashdot.org/story/25/06/23/2356213/xbox-app-for-pc-now-integrates-your-steam-games?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Xbox App For PC Now Integrates Your Steam Games](https://games.slashdot.org/story/25/06/23/2356213/xbox-app-for-pc-now-integrates-your-steam-games?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-24, 00:45:00](https://tech.slashdot.org/story/25/06/23/2140208/microsoft-sets-new-60-day-limit-for-system-restore-points-in-windows-11-update?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Sets New 60-Day Limit For System Restore Points In Windows 11 Update](https://tech.slashdot.org/story/25/06/23/2140208/microsoft-sets-new-60-day-limit-for-system-restore-points-in-windows-11-update?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-24, 00:20:00](https://slashdot.org/story/25/06/23/2324250/hinge-ceo-says-dating-ai-chatbots-is-playing-with-fire?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hinge CEO Says Dating AI Chatbots Is &apos;Playing With Fire&apos;](https://slashdot.org/story/25/06/23/2324250/hinge-ceo-says-dating-ai-chatbots-is-playing-with-fire?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-24, 00:02:00](https://news.slashdot.org/story/25/06/23/2054229/magic-lantern-software-for-canon-cameras-is-back?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Magic Lantern Software for Canon Cameras Is Back](https://news.slashdot.org/story/25/06/23/2054229/magic-lantern-software-for-canon-cameras-is-back?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-24, 00:01:16](https://news.ycombinator.com/item?id=44361480) - [Marble Blast](https://marbleblast.vaniverse.io/)
* [2025-06-24, 00:00:47](https://news.ycombinator.com/item?id=44361475) - [Show HN: Comparator - I built a free, open-source app to compare job offers](https://comparator-one.vercel.app/)
* [2025-06-23, 23:40:00](https://ask.slashdot.org/story/25/06/23/2313202/ask-slashdot-printer-recommendation-for-family-with-kids?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ask Slashdot: Printer Recommendation For Family With Kids?](https://ask.slashdot.org/story/25/06/23/2313202/ask-slashdot-printer-recommendation-for-family-with-kids?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-23, 23:20:00](https://news.slashdot.org/story/25/06/23/2046259/ubuntu-to-disable-intel-graphics-security-mitigations-to-boost-gpu-performance-by-up-to-20?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ubuntu To Disable Intel Graphics Security Mitigations To Boost GPU Performance By Up To 20%](https://news.slashdot.org/story/25/06/23/2046259/ubuntu-to-disable-intel-graphics-security-mitigations-to-boost-gpu-performance-by-up-to-20?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-23, 23:11:36](https://lobste.rs/s/yd7cra/google_donates_a2a_linux_foundation) - [Google donates A2A to Linux Foundation](https://developers.googleblog.com/en/google-cloud-donates-a2a-to-linux-foundation/)
* [2025-06-23, 23:07:55](https://lobste.rs/s/rhjl2n/iwp9_talk_recordings) - [IWP9 talk recordings](https://youtube.com/playlist?list=PLEZEb6vVXSE-CV_vti2I6tJQNBn6f9swB)
* [2025-06-23, 22:52:00](https://soylentnews.org/article.pl?sid=25/06/22/179210&amp;from=rss) - [A Cracked Piece of Metal Self-Healed in Experiment That Stunned Scientists](https://soylentnews.org/article.pl?sid=25/06/22/179210&amp;from=rss)
* [2025-06-23, 22:40:00](https://yro.slashdot.org/story/25/06/23/2039253/judge-denies-creating-mass-surveillance-program-harming-all-chatgpt-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Judge Denies Creating &apos;Mass Surveillance Program&apos; Harming All ChatGPT Users](https://yro.slashdot.org/story/25/06/23/2039253/judge-denies-creating-mass-surveillance-program-harming-all-chatgpt-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-23, 22:00:00](https://apple.slashdot.org/story/25/06/23/2023213/ios-26-allows-you-to-restore-any-iphone-without-a-mac-or-pc?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [iOS 26 Allows You To Restore Any iPhone Without a Mac or PC](https://apple.slashdot.org/story/25/06/23/2023213/ios-26-allows-you-to-restore-any-iphone-without-a-mac-or-pc?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-23, 21:22:00](https://science.slashdot.org/story/25/06/23/2015258/phd-graduates-far-exceed-academic-job-openings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [PhD Graduates Far Exceed Academic Job Openings](https://science.slashdot.org/story/25/06/23/2015258/phd-graduates-far-exceed-academic-job-openings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-23, 20:50:32](https://news.ycombinator.com/item?id=44359938) - [GitHub CEO: manual coding remains key despite AI boom](https://www.techinasia.com/news/github-ceo-manual-coding-remains-key-despite-ai-boom)
* [2025-06-23, 20:40:00](https://tech.slashdot.org/story/25/06/23/201237/canadian-telecom-hacked-by-suspected-china-state-group?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Canadian Telecom Hacked By Suspected China State Group](https://tech.slashdot.org/story/25/06/23/201237/canadian-telecom-hacked-by-suspected-china-state-group?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-23, 20:01:00](https://science.slashdot.org/story/25/06/23/1945219/scientists-use-bacteria-to-turn-plastic-waste-into-paracetamol?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Use Bacteria To Turn Plastic Waste Into Paracetamol](https://science.slashdot.org/story/25/06/23/1945219/scientists-use-bacteria-to-turn-plastic-waste-into-paracetamol?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-23, 19:56:58](https://lobste.rs/s/ybf4ss/alden_detachable_terminal_sessions) - [alden: detachable terminal sessions without breaking scrollback](https://ansuz.sooke.bc.ca/entry/389)
* [2025-06-23, 19:21:00](https://science.slashdot.org/story/25/06/23/1922202/caps-of-glass-bottles-contaminate-beverages-with-microplastics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Caps of Glass Bottles Contaminate Beverages With Microplastics](https://science.slashdot.org/story/25/06/23/1922202/caps-of-glass-bottles-contaminate-beverages-with-microplastics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-23, 19:09:00](https://soylentnews.org/breakingnews/article.pl?sid=25/06/23/1910209&amp;from=rss) - [US and Allied Base  Al Udeid in Qatar Attacked](https://soylentnews.org/breakingnews/article.pl?sid=25/06/23/1910209&amp;from=rss)
* [2025-06-23, 19:02:17](https://news.ycombinator.com/item?id=44358944) - [Resurrecting flip phone typing as a Linux driver](https://github.com/FoxMoss/libt9)
* [2025-06-23, 18:54:27](https://lobste.rs/s/tts73s/monotone_functions_cache_lines) - [Monotone Functions and Cache Lines](https://buttondown.com/jaffray/archive/monotone-functions-and-cache-lines/)
* [2025-06-23, 18:34:36](https://news.ycombinator.com/item?id=44358668) - [2025 Iberia Blackout Report [pdf]](https://media.licdn.com/dms/document/media/v2/D4D1FAQGcyyYYrelkNg/feedshare-document-pdf-analyzed/B4DZeBtlohGsAk-/0/1750227910090?e=1750896000&amp;v=beta&amp;t=uEftse3BPsTjdLQ3DmjoVkadhUGqf7-MfYj_6UnSS28)
* [2025-06-23, 18:23:00](https://news.slashdot.org/story/25/06/23/1823245/fico-to-incorporate-buy-now-pay-later-loans-into-credit-scores?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FICO To Incorporate Buy-Now-Pay-Later Loans Into Credit Scores](https://news.slashdot.org/story/25/06/23/1823245/fico-to-incorporate-buy-now-pay-later-loans-into-credit-scores?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-23, 18:18:11](https://news.ycombinator.com/item?id=44358524) - [Judge denies creating “mass surveillance program” harming all ChatGPT users](https://arstechnica.com/tech-policy/2025/06/judge-rejects-claim-that-forcing-openai-to-keep-chatgpt-logs-is-mass-surveillance/)
* [2025-06-23, 18:08:00](https://soylentnews.org/article.pl?sid=25/06/22/173242&amp;from=rss) - [50 Years of JAWS](https://soylentnews.org/article.pl?sid=25/06/22/173242&amp;from=rss)
* [2025-06-23, 17:26:03](https://lobste.rs/s/doctsl/call_by_meaning_2014) - [Call by Meaning (2014)](https://tinlizzie.org/VPRIPapers/tr2014003_callbymeaning.pdf)
* [2025-06-23, 17:21:57](https://lobste.rs/s/6pk5gf/moonbase_alpha_time_nasa_made_meme_video) - [Moonbase Alpha: That time NASA made a meme video game](https://www.spacebar.news/moonbase-alpha-nasa-video-game/)
* [2025-06-23, 17:20:00](https://slashdot.org/story/25/06/23/1515222/deepseek-aids-chinas-military-and-evaded-export-controls-us-official-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DeepSeek Aids China&apos;s Military and Evaded Export Controls, US Official Says](https://slashdot.org/story/25/06/23/1515222/deepseek-aids-chinas-military-and-evaded-export-controls-us-official-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-23, 16:27:25](https://news.ycombinator.com/item?id=44357411) - [uv: An extremely fast Python package and project manager, written in Rust](https://github.com/astral-sh/uv)
* [2025-06-23, 15:41:00](https://news.ycombinator.com/item?id=44356890) - [Vera C. Rubin Observatory first images](https://rubinobservatory.org/news/rubin-first-look/cosmic-treasure-chest)
* [2025-06-23, 15:40:51](https://news.ycombinator.com/item?id=44356888) - [The Last of Us Part II – Seattle Locations Tour](https://docs.google.com/document/d/1gfFoe2xVoS9GzmmcbGUjTVVtss1Jwh4Yi-73C6Trn-I/edit?usp=sharing)
* [2025-06-23, 15:30:33](https://news.ycombinator.com/item?id=44356799) - [Launch HN: Reducto Studio (YC W24) – Build accurate document pipelines, fast](https://news.ycombinator.com/item?id=44356799)
* [2025-06-23, 15:29:51](https://news.ycombinator.com/item?id=44356788) - [Fairphone 6 is switching to a new design that&apos;s even more sustainable](https://www.androidcentral.com/phones/fairphone-6-official-render-leaks-showcase-its-sustainable-design)
* [2025-06-23, 15:22:07](https://lobste.rs/s/hvrgxz/go_should_be_more_opinionated) - [Go should be more opinionated](https://eltonminetto.dev/en/post/2025-06-19-go-more-opinated/)
* [2025-06-23, 15:14:29](https://news.ycombinator.com/item?id=44356646) - [How I use my terminal](https://jyn.dev/how-i-use-my-terminal/)
* [2025-06-23, 14:46:30](https://lobste.rs/s/ygd1d8/making_tramp_go_brrrr) - [Making TRAMP go Brrrr…](https://coredumped.dev/2025/06/18/making-tramp-go-brrrr./)
* [2025-06-23, 14:46:03](https://news.ycombinator.com/item?id=44356346) - [Making TRAMP go Brrrr](https://coredumped.dev/2025/06/18/making-tramp-go-brrrr./)
* [2025-06-23, 14:37:05](https://news.ycombinator.com/item?id=44356248) - [Backyard Coffee and Jazz in Kyoto](https://thedeletedscenes.substack.com/p/backyard-coffee-and-jazz-in-kyoto)
* [2025-06-23, 14:26:42](https://lobste.rs/s/hacouy/how_i_use_my_terminal) - [how i use my terminal](https://jyn.dev/how-i-use-my-terminal/)
* [2025-06-23, 14:08:42](https://lobste.rs/s/ybarpv/whitesmiths_c_compiler_one_earliest) - [Whitesmiths C compiler: One of the earliest commercial C compilers available](https://github.com/hansake/Whitesmiths-C-compiler)
* [2025-06-23, 14:00:53](https://lobste.rs/s/obsh1m/how_store_go_pointers_from_assembly) - [How to store Go pointers from assembly](https://mazzo.li/posts/go-asm-pointers.html)
* [2025-06-23, 13:30:58](https://lobste.rs/s/9gqnkj/solving_linkedin_queens_using_minizinc) - [Solving LinkedIn Queens using MiniZinc](https://zayenz.se/blog/post/linkedin-queens/)
* [2025-06-23, 13:19:35](https://lobste.rs/s/s9xgbs/json_evolution_go_from_v1_v2) - [JSON evolution in Go: from v1 to v2](https://antonz.org/go-json-v2/)
* [2025-06-23, 13:18:00](https://soylentnews.org/article.pl?sid=25/06/22/1649205&amp;from=rss) - [Open Internet Stack: The EU Commission’s Vague Plans for Open Source](https://soylentnews.org/article.pl?sid=25/06/22/1649205&amp;from=rss)
* [2025-06-23, 12:45:39](https://lobste.rs/s/ib1hj9/family_openssl_forks) - [A family of OpenSSL forks](https://daniel.haxx.se/blog/2025/06/23/a-family-of-forks/)
* [2025-06-23, 12:42:55](https://lobste.rs/s/xw5twr/redmonk_top_20_languages_over_time) - [RedMonk Top 20 Languages Over Time: January 2025](https://redmonk.com/rstephens/2025/06/18/top20-jan2025/)
* [2025-06-23, 11:17:01](https://lobste.rs/s/eyxq10/modeling_world_280_characters) - [Modeling the World in 280 Characters](https://tympanus.net/codrops/2025/06/23/modeling-the-world-in-280-characters/)
* [2025-06-23, 09:45:30](https://lobste.rs/s/33lu8r/satysfi_statically_typed_functional) - [SATySFi: A statically-typed, functional typesetting system](https://github.com/gfngfn/SATySFi)
* [2025-06-23, 08:34:00](https://soylentnews.org/article.pl?sid=25/06/22/0357239&amp;from=rss) - [Astronomers Locate Universe&apos;s &apos;Missing&apos; Matter in the Largest Cosmic Structures](https://soylentnews.org/article.pl?sid=25/06/22/0357239&amp;from=rss)
* [2025-06-23, 08:16:17](https://lobste.rs/s/lrtenu/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/lrtenu/what_are_you_doing_this_week)
* [2025-06-23, 06:26:42](https://lobste.rs/s/u6xhiw/telescopes_are_tries_dependent_type) - [Telescopes Are Tries: A Dependent Type Shellac on SQLite](https://www.philipzucker.com/telescope_tries/)
* [2025-06-23, 04:35:47](https://lobste.rs/s/ez1fqj/compressing_for_browser_go) - [Compressing for the browser in Go](https://blog.kowalczyk.info/a-5hum/compressing-for-the-browser-in-go.html)
* [2025-06-23, 03:48:00](https://soylentnews.org/article.pl?sid=25/06/22/0341247&amp;from=rss) - [The GPU 16-Pin Melting Fiasco Is Getting Ridiculous](https://soylentnews.org/article.pl?sid=25/06/22/0341247&amp;from=rss)
* [2025-06-23, 02:34:16](https://lobste.rs/s/5wc5cm/asterinas_new_linux_compatible_kernel) - [Asterinas: a new Linux-compatible kernel project](https://lwn.net/SubscriberLink/1022920/ad60263cd13c8a13/)
* [2025-06-23, 02:29:20](https://lobste.rs/s/kk3zx3/makefile_formatter_linter) - [Makefile formatter and linter](https://github.com/EbodShojaei/bake)
* [2025-06-22, 23:20:00](https://soylentnews.org/article.pl?sid=25/06/22/0326239&amp;from=rss) - [Gartner: ‘AI is Not Doing its Job and Should Leave Us Alone’](https://soylentnews.org/article.pl?sid=25/06/22/0326239&amp;from=rss)
* [2025-06-22, 21:10:35](https://lobste.rs/s/pdrso1/i_wrote_my_phd_thesis_typst) - [I wrote my PhD Thesis in Typst](https://fransskarman.com/phd_thesis_in_typst.html)
* [2025-06-22, 18:35:00](https://soylentnews.org/article.pl?sid=25/06/22/0319216&amp;from=rss) - [Book Documents the Rise and Fall of the Concept of the Private Life](https://soylentnews.org/article.pl?sid=25/06/22/0319216&amp;from=rss)
* [2025-06-22, 17:06:42](https://lobste.rs/s/a9ve6f/my_first_impressions_gleam) - [My First Impressions of Gleam](https://mtlynch.io/notes/gleam-first-impressions/)
* [2025-06-22, 13:51:00](https://soylentnews.org/article.pl?sid=25/06/21/1934229&amp;from=rss) - [Dr. Demento Announces Retirement From Radio After 55 Years](https://soylentnews.org/article.pl?sid=25/06/21/1934229&amp;from=rss)
* [2025-06-22, 09:04:00](https://soylentnews.org/article.pl?sid=25/06/21/1928245&amp;from=rss) - [Dead NASA Satellite Unexpectedly Emits Powerful Radio Pulse](https://soylentnews.org/article.pl?sid=25/06/21/1928245&amp;from=rss)
* [2025-06-22, 04:15:00](https://soylentnews.org/article.pl?sid=25/06/21/137201&amp;from=rss) - [Man’s Health Crashes After Getting Donated Kidney](https://soylentnews.org/article.pl?sid=25/06/21/137201&amp;from=rss)
* [2025-06-22, 03:00:00](https://soylentnews.org/politics/article.pl?sid=25/06/22/0239226&amp;from=rss) - [UPDATED: USA Bombs Iran&apos;s Nuclear Sites](https://soylentnews.org/politics/article.pl?sid=25/06/22/0239226&amp;from=rss)
* [2025-06-21, 23:32:00](https://soylentnews.org/article.pl?sid=25/06/21/1225217&amp;from=rss) - [Scientists Once Hoarded Pre-Nuclear Steel; Now We&apos;re Hoarding Pre-AI Content](https://soylentnews.org/article.pl?sid=25/06/21/1225217&amp;from=rss)
* [2025-06-21, 18:45:00](https://soylentnews.org/article.pl?sid=25/06/20/2250249&amp;from=rss) - [The Russian FSB May Have Access to Telegram Messages](https://soylentnews.org/article.pl?sid=25/06/20/2250249&amp;from=rss)
* [2025-06-21, 15:29:35](https://news.ycombinator.com/item?id=44338309) - [First methane-powered sea spiders found crawling on the ocean floor](https://www.cnn.com/2025/06/17/science/spiders-deep-sea-methane-new-species)
* [2025-06-21, 14:09:00](https://soylentnews.org/article.pl?sid=25/06/19/2351241&amp;from=rss) - [Penn State Research Team Builds 2D CMOS System](https://soylentnews.org/article.pl?sid=25/06/19/2351241&amp;from=rss)
* [2025-06-21, 09:23:00](https://soylentnews.org/article.pl?sid=25/06/19/2344222&amp;from=rss) - [This is Your Brain on ChatGPT](https://soylentnews.org/article.pl?sid=25/06/19/2344222&amp;from=rss)
* [2025-06-21, 04:41:03](https://news.ycombinator.com/item?id=44334564) - [BYOK – Bring Your Own Keyboard](https://byok.io)
* [2025-06-21, 04:36:00](https://soylentnews.org/article.pl?sid=25/06/19/2318221&amp;from=rss) - [German Government Moves Closer to Ditching Microsoft: \&quot;We&apos;re Done With Teams!\&quot;](https://soylentnews.org/article.pl?sid=25/06/19/2318221&amp;from=rss)
* [2025-06-21, 04:08:34](https://news.ycombinator.com/item?id=44334419) - [Ocarina of Time Randomizer](https://ootrandomizer.com/)
* [2025-06-20, 23:54:00](https://soylentnews.org/article.pl?sid=25/06/19/2339244&amp;from=rss) - [Women in Semiconductors: A Critical Workforce Need](https://soylentnews.org/article.pl?sid=25/06/19/2339244&amp;from=rss)
* [2025-06-20, 23:19:52](https://news.ycombinator.com/item?id=44333033) - [The FPGA turns 40](https://www.adiuvoengineering.com/post/the-fpga-turns-40)
* [2025-06-20, 19:06:00](https://soylentnews.org/article.pl?sid=25/06/19/2331254&amp;from=rss) - [SpaceX Rocket Explodes in New Setback to Elon Musk’s Mars Project](https://soylentnews.org/article.pl?sid=25/06/19/2331254&amp;from=rss)
* [2025-06-20, 17:32:43](https://news.ycombinator.com/item?id=44329964) - [I Solved a 7-Day Calculation Problem in a Weekend](https://medium.com/@jithinsankar.nk/how-i-solved-a-7-day-calculation-problem-in-a-weekend-3fb1a54f2518)
* [2025-06-20, 16:07:51](https://news.ycombinator.com/item?id=44329102) - [Show HN: Pickaxe – A TypeScript library for building AI agents](https://github.com/hatchet-dev/pickaxe)
* [2025-06-20, 15:21:26](https://news.ycombinator.com/item?id=44328575) - [Is Mathematics Mostly Chaos or Mostly Order?](https://www.quantamagazine.org/is-mathematics-mostly-chaos-or-mostly-order-20250620/)
* [2025-06-20, 14:44:18](https://news.ycombinator.com/item?id=44328191) - [Rocknix is an immutable Linux distribution for handheld gaming devices](https://rocknix.org/)
* [2025-06-20, 14:21:00](https://soylentnews.org/article.pl?sid=25/06/19/2327225&amp;from=rss) - [LibreOffice Adds Voice To &apos;Ditch Windows For Linux&apos; Campaign](https://soylentnews.org/article.pl?sid=25/06/19/2327225&amp;from=rss)
* [2025-06-20, 13:53:25](https://news.ycombinator.com/item?id=44327756) - [Minimal Boolean Formulas](https://research.swtch.com/boolean)
* [2025-06-20, 12:47:53](https://news.ycombinator.com/item?id=44327204) - [I ported pigz from Unix to Windows](https://blog.kowalczyk.info/article/4/how-i-ported-pigz-from-unix-to-windows.html)
* [2025-06-20, 12:43:07](https://news.ycombinator.com/item?id=44327163) - [&apos;Dragon prince&apos; dinosaur discovery &apos;rewrites&apos; T.rex family tree](https://www.bbc.com/news/articles/cy8dzv3vp5jo)
* [2025-06-20, 10:31:09](https://news.ycombinator.com/item?id=44326382) - [A Deep Dive into Solid Queue for Ruby on Rails](https://blog.appsignal.com/2025/06/18/a-deep-dive-into-solid-queue-for-ruby-on-rails.html)
* [2025-06-20, 09:36:00](https://soylentnews.org/article.pl?sid=25/06/19/0919227&amp;from=rss) - [Breakthrough Alzheimer&apos;s Drugs Too Pricey for UK&apos;s National Health Service](https://soylentnews.org/article.pl?sid=25/06/19/0919227&amp;from=rss)
* [2025-06-20, 04:55:00](https://soylentnews.org/article.pl?sid=25/06/18/1523244&amp;from=rss) - [‘Net Zero’ Is Collapsing in U.S. States](https://soylentnews.org/article.pl?sid=25/06/18/1523244&amp;from=rss)
* [2025-06-20, 00:13:00](https://soylentnews.org/article.pl?sid=25/06/18/1445231&amp;from=rss) - [Fermilab G-2 Collaboration Publishes Final Result](https://soylentnews.org/article.pl?sid=25/06/18/1445231&amp;from=rss)
