# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software Development

* [WASM Will Replace Containers](https://creston.blog/wasm-will-replace-containers/) - An exploration of how WebAssembly (WASM) could potentially replace traditional application containers. [Comments](https://news.ycombinator.com/item?id=43020684)

* [42links: A bookmarking server, written in Lisp](https://code.rosaelefanten.org/42links) - A unique bookmarking server built with Lisp, focusing on simplicity and efficiency. [Comments](https://lobste.rs/s/ttfywn/42links_bookmarking_server_written_lisp)

* [Composiphrase: Composable editing language like Vim, but moreso](https://www.willghatch.net/blog/text-editing/composiphrase_composable-editing-language-like-vim-but-moreso) - A next-level text editing language offering advanced composable operations inspired by Vim. [Comments](https://lobste.rs/s/hnn6hg/composiphrase_composable_editing)

* [Ohm: A user-friendly parsing toolkit for JavaScript and TypeScript](https://ohmjs.org/) - An announcement on a parsing toolkit designed to simplify syntax creation for JavaScript and TypeScript. [Comments](https://news.ycombinator.com/item?id=42982755)

## AI and Machine Learning

* [LLMs can teach themselves to better predict the future](https://arxiv.org/abs/2502.05253) - Research highlighting how large language models (LLMs) can self-improve their ability to predict future events. [Comments](https://news.ycombinator.com/item?id=43014918)

* [DeepScaleR: Surpassing O1-Preview with a 1.5B Model by Scaling RL](https://pretty-radio-b75.notion.site/DeepScaleR-Surpassing-O1-Preview-with-a-1-5B-Model-by-Scaling-RL-19681902c1468005bed8ca303013a4e2) - Achieving breakthroughs in AI performance by scaling reinforcement learning techniques. [Comments](https://news.ycombinator.com/item?id=43017599)

* [llm-sort: Sort input lines semantically with LLMs](https://github.com/vagos/llm-sort) - A semantic sorting tool taking advantage of large language models for line-based text organization. [Comments](https://lobste.rs/s/yxlisx/llm_sort_sort_input_lines_semantically)

## Cybersecurity and Hacks

* [Hackers leak cop manuals for departments after breaching major provider](https://www.dailydot.com/debug/lexipol-data-leak-puppygirl-hacker-polycule/) - A breach exposing law enforcement training manuals, raising questions about security practices. [Comments](https://news.ycombinator.com/item?id=43020273)

* [AUKUS Blasts Holes In LockBit's Bulletproof Hosting Provider](https://it.slashdot.org/story/25/02/11/2156211/aukus-blasts-holes-in-lockbits-bulletproof-hosting-provider?utm_source=rss1.0mainlinkanon&utm_medium=feed) - News of a major blow to a cybercrime syndicate's hosting infrastructure. [Comments](https://lobste.rs/s/as8dio/roping_our_way_rce)

## AI Copyrights and Intellectual Property

* [Thomson Reuters Wins First Major AI Copyright Case In the US](https://yro.slashdot.org/story/25/02/11/2139217/thomson-reuters-wins-first-major-ai-copyright-case-in-the-us?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A landmark decision in AI copyright in favor of Thomson Reuters. [Comments](https://news.ycombinator.com/item?id=43018251)

## Environmental and Global Perspectives

* [Only One Big Economy Is Aiming for Paris Agreement's 1.5C Goal](https://news.slashdot.org/story/25/02/11/1815209/only-one-big-economy-is-aiming-for-paris-agreements-15c-goal?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Analysis suggesting only one major economic power remains targeted on stringent climate goals. [Comments](https://news.ycombinator.com/item?id=43014408)

* [Rare Otter 'Disappeared' In Kyrgyzstan, Experts Warn](https://soylentnews.org/article.pl?sid=25/02/09/1853248&from=rss) - Worrying developments regarding rare fauna in Central Asia, highlighting ecological concerns. [Comments](https://soylentnews.org/article.pl?sid=25/02/09/1853248&from=rss)

## Historical and Technological Insights

* [Windows 7: A 2025 perspective (rose-tinted or not)](https://www.dedoimedo.com/computers/windows-7-review-2025-perspective.html) - A retrospective examination of Windows 7 and its legacy in 2025. [Comments](https://lobste.rs/s/bleaa6/windows_7_2025_perspective_rose_tinted)

* [The Pinball Philosophy (1975)](https://pinballnirvana.com/forums/threads/the-pinball-philosophy-john-mcphee-1975.22239/) - Revisiting a thought-provoking essay on pinball's place in culture from the mid-20th century. [Comments](https://news.ycombinator.com/item?id=42997344)

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

* [2025-02-12, 01:24:51](https://news.ycombinator.com/item?id=43020684) - [WASM Will Replace Containers](https://creston.blog/wasm-will-replace-containers/)
* [2025-02-12, 00:33:51](https://news.ycombinator.com/item?id=43020273) - [Hackers leak cop manuals for departments after breaching major provider](https://www.dailydot.com/debug/lexipol-data-leak-puppygirl-hacker-polycule/)
* [2025-02-12, 00:23:16](https://news.ycombinator.com/item?id=43020180) - [JJ Cheat Sheet](https://justinpombrio.net/2025/02/11/jj-cheat-sheet.html)
* [2025-02-12, 00:20:00](https://tech.slashdot.org/story/25/02/11/2229240/kde-plasma-63-released?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [KDE Plasma 6.3 Released](https://tech.slashdot.org/story/25/02/11/2229240/kde-plasma-63-released?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-11, 23:40:00](https://tech.slashdot.org/story/25/02/11/2217231/tumblr-to-join-the-fediverse-after-wordpress-migration-completes?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Tumblr To Join the Fediverse After WordPress Migration Completes](https://tech.slashdot.org/story/25/02/11/2217231/tumblr-to-join-the-fediverse-after-wordpress-migration-completes?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-11, 23:00:00](https://hardware.slashdot.org/story/25/02/11/224223/passmark-sees-the-first-yearly-drop-in-average-cpu-performance-in-its-20-years?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [PassMark Sees the First Yearly Drop In Average CPU Performance In Its 20 Years](https://hardware.slashdot.org/story/25/02/11/224223/passmark-sees-the-first-yearly-drop-in-average-cpu-performance-in-its-20-years?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-11, 22:48:53](https://lobste.rs/s/ttfywn/42links_bookmarking_server_written_lisp) - [42links: A bookmarking server, written in Lisp](https://code.rosaelefanten.org/42links)
* [2025-02-11, 22:46:31](https://news.ycombinator.com/item?id=43019352) - [A Year of Telepathy](https://neuralink.com/blog/a-year-of-telepathy/)
* [2025-02-11, 22:20:00](https://it.slashdot.org/story/25/02/11/2156211/aukus-blasts-holes-in-lockbits-bulletproof-hosting-provider?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [AUKUS Blasts Holes In LockBit's Bulletproof Hosting Provider](https://it.slashdot.org/story/25/02/11/2156211/aukus-blasts-holes-in-lockbits-bulletproof-hosting-provider?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-11, 21:44:50](https://lobste.rs/s/aumdwz/turning_down_upspin_infrastructure) - [Turning down Upspin infrastructure](https://groups.google.com/g/upspin/c/Whma_O-iexM/m/lSConHZ5DwAJ)
* [2025-02-11, 21:40:00](https://yro.slashdot.org/story/25/02/11/2139217/thomson-reuters-wins-first-major-ai-copyright-case-in-the-us?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Thomson Reuters Wins First Major AI Copyright Case In the US](https://yro.slashdot.org/story/25/02/11/2139217/thomson-reuters-wins-first-major-ai-copyright-case-in-the-us?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-11, 21:31:43](https://news.ycombinator.com/item?id=43018643) - [NOAA's public weather data powers the local forecasts on your phone and TV](https://theconversation.com/noaas-vast-public-weather-data-powers-the-local-forecasts-on-your-phone-and-tv-a-private-company-alone-couldnt-match-it-249451)
* [2025-02-11, 21:00:32](https://news.ycombinator.com/item?id=43018293) - [Empirical Health (YC S23) Is Hiring Design Engineers in NYC](https://www.ycombinator.com/companies/empirical-health/jobs/nZFQWLW-design-engineer)
* [2025-02-11, 20:56:21](https://news.ycombinator.com/item?id=43018251) - [Thomson Reuters wins first major AI copyright case in the US](https://www.wired.com/story/thomson-reuters-ai-copyright-lawsuit/)
* [2025-02-11, 20:55:00](https://lobste.rs/s/as8dio/roping_our_way_rce) - [ROPing our way to RCE](https://modzero.com/en/blog/roping-our-way-to-rce/)
* [2025-02-11, 20:55:00](https://tech.slashdot.org/story/25/02/11/2011222/anduril-to-take-over-managing-microsoft-goggles-for-us-army?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Anduril To Take Over Managing Microsoft Goggles for US Army](https://tech.slashdot.org/story/25/02/11/2011222/anduril-to-take-over-managing-microsoft-goggles-for-us-army?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-11, 20:42:46](https://lobste.rs/s/g8qbl7/writing_my_own_dithering_algorithm) - [Writing my own dithering algorithm in Racket](https://amanvir.com/blog/writing-my-own-dithering-algorithm-in-racket)
* [2025-02-11, 20:17:24](https://lobste.rs/s/owydl7/open_source_software_corporate) - [Open Source Software and Corporate Influence](https://www.alilleybrinker.com/blog/open-source-software-and-corporate-influence/)
* [2025-02-11, 20:15:00](https://it.slashdot.org/story/25/02/11/1952248/google-chrome-may-soon-use-ai-to-replace-compromised-passwords?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google Chrome May Soon Use 'AI' To Replace Compromised Passwords](https://it.slashdot.org/story/25/02/11/1952248/google-chrome-may-soon-use-ai-to-replace-compromised-passwords?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-11, 20:11:37](https://news.ycombinator.com/item?id=43017739) - [Zeroperl: Sandboxing Perl with WebAssembly](https://andrews.substack.com/p/zeroperl-sandboxed-perl-with-webassembly)
* [2025-02-11, 20:00:13](https://news.ycombinator.com/item?id=43017612) - [The first yearly drop in average CPU performance in its 20 years of benchmarks](https://www.tomshardware.com/pc-components/cpus/passmark-sees-the-first-yearly-drop-in-average-cpu-performance-in-its-20-years-of-benchmark-results)
* [2025-02-11, 19:59:00](https://news.ycombinator.com/item?id=43017599) - [DeepScaleR: Surpassing O1-Preview with a 1.5B Model by Scaling RL](https://pretty-radio-b75.notion.site/DeepScaleR-Surpassing-O1-Preview-with-a-1-5B-Model-by-Scaling-RL-19681902c1468005bed8ca303013a4e2)
* [2025-02-11, 19:45:00](https://soylentnews.org/article.pl?sid=25/02/10/133233&from=rss) - [Asteroid's Odds of Hitting Earth Went Up. But Not Why You Think](https://soylentnews.org/article.pl?sid=25/02/10/133233&from=rss)
* [2025-02-11, 19:39:21](https://lobste.rs/s/bleaa6/windows_7_2025_perspective_rose_tinted) - [Windows 7: A 2025 perspective (rose-tinted or not)](https://www.dedoimedo.com/computers/windows-7-review-2025-perspective.html)
* [2025-02-11, 19:35:00](https://slashdot.org/story/25/02/11/1932223/ftc-fines-donotpay-over-misleading-claims-of-robot-lawyer?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [FTC Fines DoNotPay Over Misleading Claims of 'Robot Lawyer'](https://slashdot.org/story/25/02/11/1932223/ftc-fines-donotpay-over-misleading-claims-of-robot-lawyer?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-11, 19:31:03](https://lobste.rs/s/gjxaca/is_it_okay) - [Is it okay?](https://www.robinsloan.com/lab/is-it-okay/)
* [2025-02-11, 19:15:02](https://news.ycombinator.com/item?id=43017010) - [The subtle art of designing physical controls for cars](https://www.theturnsignalblog.com/the-subtle-art-of-designing-physical-control-for-cars/)
* [2025-02-11, 19:01:00](https://it.slashdot.org/story/25/02/11/191240/hackers-call-current-ai-security-testing-bullshit?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Hackers Call Current AI Security Testing 'Bullshit'](https://it.slashdot.org/story/25/02/11/191240/hackers-call-current-ai-security-testing-bullshit?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-11, 18:43:19](https://lobste.rs/s/6rzmjy/stages_denial) - [Stages of Denial](http://nsl.com/papers/denial.html)
* [2025-02-11, 18:30:13](https://news.ycombinator.com/item?id=43016353) - [Japan can be a science heavyweight once more if it rethinks funding](https://www.nature.com/articles/d41586-025-00394-8)
* [2025-02-11, 18:23:03](https://news.ycombinator.com/item?id=43016248) - [Reviving the joy and honor of working with your hands (2015)](https://richmond.com/holmberg-reviving-the-joy-and-honor-of-working-with-your-hands-will-strengthen-our-nation/article_d8130166-855d-53b6-94e1-cb735edcd7cc.html)
* [2025-02-11, 18:14:00](https://news.slashdot.org/story/25/02/11/1815209/only-one-big-economy-is-aiming-for-paris-agreements-15c-goal?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Only One Big Economy Is Aiming for Paris Agreement's 1.5C Goal](https://news.slashdot.org/story/25/02/11/1815209/only-one-big-economy-is-aiming-for-paris-agreements-15c-goal?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-11, 18:07:56](https://lobste.rs/s/yxlisx/llm_sort_sort_input_lines_semantically) - [llm-sort: Sort input lines semantically with LLMs](https://github.com/vagos/llm-sort)
* [2025-02-11, 17:37:38](https://news.ycombinator.com/item?id=43015631) - [ASTRA: HackerRank's coding benchmark for LLMs](https://www.hackerrank.com/ai/astra-reports)
* [2025-02-11, 17:35:00](https://slashdot.org/story/25/02/11/1735222/kickstarter-will-alert-backers-when-a-project-has-failed?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Kickstarter Will Alert Backers When a Project Has Failed](https://slashdot.org/story/25/02/11/1735222/kickstarter-will-alert-backers-when-a-project-has-failed?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-11, 17:34:31](https://news.ycombinator.com/item?id=43015585) - [Postmortem: The singular design of Namco's Katamari Damacy (2004)](https://www.gamedeveloper.com/design/postmortem-the-singular-design-of-namco-s-katamari-damacy-2004-)
* [2025-02-11, 17:08:35](https://news.ycombinator.com/item?id=43015267) - [Launch HN: A0.dev (YC W25) – React Native App Generator](https://news.ycombinator.com/item?id=43015267)
* [2025-02-11, 16:50:00](https://news.slashdot.org/story/25/02/11/1617259/eu-pledges-200-billion-in-ai-spending-in-bid-to-catch-up-with-us-china?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [EU Pledges $200 Billion in AI Spending in Bid To Catch Up With US, China](https://news.slashdot.org/story/25/02/11/1617259/eu-pledges-200-billion-in-ai-spending-in-bid-to-catch-up-with-us-china?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-11, 16:46:24](https://lobste.rs/s/hnn6hg/composiphrase_composable_editing) - [Composiphrase: Composable editing language like Vim, but moreso](https://www.willghatch.net/blog/text-editing/composiphrase_composable-editing-language-like-vim-but-moreso/)
* [2025-02-11, 16:40:20](https://news.ycombinator.com/item?id=43014918) - [LLMs can teach themselves to better predict the future](https://arxiv.org/abs/2502.05253)
* [2025-02-11, 16:15:05](https://lobste.rs/s/f4ivxh/machine_learning_human_unlearning) - [Machine: Learning; Human: Unlearning](https://wickstrom.tech/2025-02-11-machine-learning-human-unlearning.html)
* [2025-02-11, 16:12:00](https://tech.slashdot.org/story/25/02/11/1612249/meta-starts-eliminating-jobs-in-shift-to-find-ai-talent?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Meta Starts Eliminating Jobs in Shift To Find AI Talent](https://tech.slashdot.org/story/25/02/11/1612249/meta-starts-eliminating-jobs-in-shift-to-find-ai-talent?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-11, 16:00:59](https://news.ycombinator.com/item?id=43014408) - [Intel's Battlemage Architecture](https://chipsandcheese.com/p/intels-battlemage-architecture)
* [2025-02-11, 15:45:00](https://soylentnews.org/meta/article.pl?sid=25/02/04/106248&from=rss) - [Soylent Update - February 2025](https://soylentnews.org/meta/article.pl?sid=25/02/04/106248&from=rss)
* [2025-02-11, 15:41:00](https://news.slashdot.org/story/25/02/11/1541222/youtube-surprise-ceo-says-tv-overtakes-mobile-as-primary-device-for-viewing?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [YouTube Surprise: CEO Says TV Overtakes Mobile as 'Primary Device' for Viewing](https://news.slashdot.org/story/25/02/11/1541222/youtube-surprise-ceo-says-tv-overtakes-mobile-as-primary-device-for-viewing?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-11, 15:39:53](https://lobste.rs/s/ctbita/skill_future_is_focus_not_ai) - [The skill of the future is 'Focus', not 'AI'](https://www.carette.xyz/posts/focus_will_be_the_skill_of_the_future/)
* [2025-02-11, 15:37:43](https://lobste.rs/s/p5nshp/boring_tech_is_mature_not_old) - [Boring tech is mature, not old](https://rubenerd.com/boring-tech-is-mature-not-old/)
* [2025-02-11, 15:08:08](https://news.ycombinator.com/item?id=43013615) - [I tasted Honda's spicy rodent-repelling tape and I will do it again (2021)](https://haterade.substack.com/p/i-tasted-hondas-spicy-rodent-repelling)
* [2025-02-11, 15:00:00](https://soylentnews.org/article.pl?sid=25/02/09/1917214&from=rss) - [Researchers Used AI To Build Groundbreaking Nanomaterials Lighter And Stronger Than Titanium](https://soylentnews.org/article.pl?sid=25/02/09/1917214&from=rss)
* [2025-02-11, 14:55:45](https://news.ycombinator.com/item?id=43013431) - [Backblaze Drive Stats for 2024](https://www.backblaze.com/blog/backblaze-drive-stats-for-2024/)
* [2025-02-11, 14:41:00](https://science.slashdot.org/story/25/02/11/1323249/microplastics-can-block-blood-vessels-in-mice-brains-researchers-find?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microplastics Can Block Blood Vessels in Mice Brains, Researchers Find](https://science.slashdot.org/story/25/02/11/1323249/microplastics-can-block-blood-vessels-in-mice-brains-researchers-find?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-11, 14:33:36](https://lobste.rs/s/8fnyam/your_ai_can_t_see_gorillas) - [Your AI can’t see gorillas](https://chiraaggohel.com/posts/llms-eda/)
* [2025-02-11, 14:10:36](https://lobste.rs/s/ohcl00/catalog_ways_generate_ssa) - [A catalog of ways to generate SSA](https://bernsteinbear.com/blog/ssa/)
* [2025-02-11, 12:44:06](https://lobste.rs/s/lymowb/frontier_ai_systems_have_surpassed_self) - [Frontier AI systems have surpassed the self-replicating red line](https://arxiv.org/abs/2412.12140)
* [2025-02-11, 12:28:49](https://lobste.rs/s/5feang/how_about_trailing_commas_sql) - [How about trailing commas in SQL?](https://peter.eisentraut.org/blog/2025/02/11/how-about-trailing-commas-in-sql)
* [2025-02-11, 10:23:00](https://soylentnews.org/article.pl?sid=25/02/09/194224&from=rss) - [Private Spacecraft Gets Dramatic View Of Earth Eclipsing Moon](https://soylentnews.org/article.pl?sid=25/02/09/194224&from=rss)
* [2025-02-11, 09:03:47](https://lobste.rs/s/4a2qzs/writing_git_extensions_perl) - [Writing git extensions in Perl](https://dev.to/jj/writing-git-extensions-in-perl-3ken)
* [2025-02-11, 07:21:21](https://news.ycombinator.com/item?id=43009952) - [Ways to generate SSA](https://bernsteinbear.com/blog/ssa/)
* [2025-02-11, 06:13:41](https://lobste.rs/s/gr3ghv/we_replaced_our_react_frontend_with_go) - [We Replaced Our React Frontend with Go and WebAssembly](https://dagger.io/blog/replaced-react-with-go)
* [2025-02-11, 05:45:00](https://soylentnews.org/article.pl?sid=25/02/09/190215&from=rss) - [Intel Has Already Received $2.2B in Federal Grants for Chip Production](https://soylentnews.org/article.pl?sid=25/02/09/190215&from=rss)
* [2025-02-11, 04:13:47](https://news.ycombinator.com/item?id=43008879) - [Nvidia's RTX 5090 power connectors are melting](https://www.theverge.com/news/609207/nvidia-rtx-5090-power-connector-melting-burning-issues)
* [2025-02-11, 01:20:21](https://lobste.rs/s/fwqjqm/how_copyover_mud_servers_worked) - [How Copyover MUD Servers Worked](http://jackkelly.name/blog/archives/2025/02/06/how_copyover_mud_servers_worked/)
* [2025-02-11, 01:00:00](https://soylentnews.org/article.pl?sid=25/02/09/1853248&from=rss) - [Rare Otter 'Disappeared' In Kyrgyzstan, Experts Warn](https://soylentnews.org/article.pl?sid=25/02/09/1853248&from=rss)
* [2025-02-10, 23:14:02](https://lobste.rs/s/fkr3ha/some_terminal_frustrations) - [Some terminal frustrations](https://jvns.ca/blog/2025/02/05/some-terminal-frustrations/)
* [2025-02-10, 23:05:03](https://lobste.rs/s/uoiosa/undergraduate_invents_faster_hash_table) - [Undergraduate Invents Faster Hash Table](https://www.quantamagazine.org/undergraduate-upends-a-40-year-old-data-science-conjecture-20250210/)
* [2025-02-10, 20:57:55](https://lobste.rs/s/ktw3bz/you_should_use_tmp_more) - [You Should Use /tmp/ More](https://atthis.link/blog/2025/58671.html)
* [2025-02-10, 20:19:00](https://soylentnews.org/article.pl?sid=25/02/09/1410202&from=rss) - [IBM Banks on Friendlier Us Regulatory Climate for Dealmaking](https://soylentnews.org/article.pl?sid=25/02/09/1410202&from=rss)
* [2025-02-10, 15:43:08](https://lobste.rs/s/jpa59v/sandboxing_perl_with_webassembly) - [Sandboxing Perl with WebAssembly](https://andrews.substack.com/p/zeroperl-sandboxed-perl-with-webassembly)
* [2025-02-10, 15:34:00](https://soylentnews.org/article.pl?sid=25/02/09/145236&from=rss) - [Kaspersky Researchers Find Screenshot-Reading Malware on the App Store and Google Play](https://soylentnews.org/article.pl?sid=25/02/09/145236&from=rss)
* [2025-02-10, 13:20:55](https://lobste.rs/s/ymszmx/i_blog_with_raw_txt) - [I blog with raw txt](https://misc.l3m.in/txt/raw_txt.txt)
* [2025-02-10, 13:11:28](https://news.ycombinator.com/item?id=42999788) - [The hallucinatory thoughts of the dying mind](https://thereader.mitpress.mit.edu/the-hallucinatory-thoughts-of-the-dying-mind/)
* [2025-02-10, 11:59:41](https://news.ycombinator.com/item?id=42999297) - [Building a personal, private AI computer on a budget](https://ewintr.nl/posts/2025/building-a-personal-private-ai-computer-on-a-budget/)
* [2025-02-10, 10:52:00](https://soylentnews.org/article.pl?sid=25/02/09/1336213&from=rss) - [Your AI Can't See Gorillas](https://soylentnews.org/article.pl?sid=25/02/09/1336213&from=rss)
* [2025-02-10, 06:10:00](https://soylentnews.org/article.pl?sid=25/02/09/1321246&from=rss) - [WhatsApp Says Journalists and Civil Society Members Were Targets of Israeli Spyware](https://soylentnews.org/article.pl?sid=25/02/09/1321246&from=rss)
* [2025-02-10, 05:57:53](https://news.ycombinator.com/item?id=42997344) - [The Pinball Philosophy (1975)](https://pinballnirvana.com/forums/threads/the-pinball-philosophy-john-mcphee-1975.22239/)
* [2025-02-10, 01:23:00](https://soylentnews.org/article.pl?sid=25/02/08/1514221&from=rss) - [Facebook Torrents 81TB of Data to Feed their Models](https://soylentnews.org/article.pl?sid=25/02/08/1514221&from=rss)
* [2025-02-09, 22:12:01](https://news.ycombinator.com/item?id=42994590) - [Smoke in the cabin of two 737 MAX caused by Load Reduction Device system [video]](https://www.youtube.com/watch?v=swlVkYVSlIE)
* [2025-02-09, 20:36:00](https://soylentnews.org/article.pl?sid=25/02/08/1511237&from=rss) - [NASA Scientists Want to Solve a Mystery: Why Did Life \"Turn Left?\"](https://soylentnews.org/article.pl?sid=25/02/08/1511237&from=rss)
* [2025-02-09, 15:52:00](https://soylentnews.org/article.pl?sid=25/02/08/155232&from=rss) - [U.K. Orders Apple to Let It Spy on Users’ Encrypted Accounts](https://soylentnews.org/article.pl?sid=25/02/08/155232&from=rss)
* [2025-02-09, 15:00:37](https://news.ycombinator.com/item?id=42991062) - [Sky skimmers: The race to fly satellites at the lowest orbits yet](https://www.bbc.com/future/article/20250207-sky-skimmers-the-race-to-send-satellites-into-very-low-earth-orbits)
* [2025-02-09, 11:08:00](https://soylentnews.org/article.pl?sid=25/02/08/1249225&from=rss) - [Fixing E.T. the Extra-Terrestrial for the Atari 2600](https://soylentnews.org/article.pl?sid=25/02/08/1249225&from=rss)
* [2025-02-09, 06:23:00](https://soylentnews.org/article.pl?sid=25/02/08/1244232&from=rss) - [ 'Cracked' and 'Nulled' Crime Forums,Closed Down In European Cyber Bust](https://soylentnews.org/article.pl?sid=25/02/08/1244232&from=rss)
* [2025-02-09, 01:38:00](https://soylentnews.org/article.pl?sid=25/02/08/1232254&from=rss) - [Mysterious Radiation Belts Detected Around Earth After Epic Solar Storm](https://soylentnews.org/article.pl?sid=25/02/08/1232254&from=rss)
* [2025-02-08, 20:49:00](https://soylentnews.org/article.pl?sid=25/02/07/1312257&from=rss) - [Meta Says This is the Make or Break Year for the Metaverse](https://soylentnews.org/article.pl?sid=25/02/07/1312257&from=rss)
* [2025-02-08, 16:07:00](https://soylentnews.org/article.pl?sid=25/02/07/048232&from=rss) - [Catalytic Converters: How Much Platinum Do They Contain?](https://soylentnews.org/article.pl?sid=25/02/07/048232&from=rss)
* [2025-02-08, 16:04:06](https://news.ycombinator.com/item?id=42983835) - [No Way Home](https://literaryreview.co.uk/no-way-home)
* [2025-02-08, 13:15:26](https://news.ycombinator.com/item?id=42982755) - [Ohm: A user-friendly parsing toolkit for JavaScript and TypeScript](https://ohmjs.org/)
* [2025-02-08, 11:20:00](https://soylentnews.org/article.pl?sid=25/02/07/044225&from=rss) - [Cloudflare Browser Integrity Check Blocking Many Non-Mainstream Browsers Again](https://soylentnews.org/article.pl?sid=25/02/07/044225&from=rss)
* [2025-02-08, 06:32:00](https://soylentnews.org/politics/article.pl?sid=25/02/07/0354212&from=rss) - [US ICE Updates Immigration Raid Timestamps to Game Goggle Search Results](https://soylentnews.org/politics/article.pl?sid=25/02/07/0354212&from=rss)
* [2025-02-08, 01:49:00](https://soylentnews.org/article.pl?sid=25/02/07/0350219&from=rss) - [Piecing Together the Puzzle of the World's Earliest Datable Rune Stone](https://soylentnews.org/article.pl?sid=25/02/07/0350219&from=rss)
