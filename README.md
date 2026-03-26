# [News Summary](https://kherrick.github.io/news-summary/)

## Legal and Regulatory Developments

* [Supreme Court Says Internet Service Provider Isn't Liable for Bootlegged Music Downloads](https://soylentnews.org/article.pl?sid=26/03/25/2355253&amp;from=rss) - The U.S. Supreme Court ruled that internet service providers are not liable for piracy activities conducted by their users, marking a significant decision in copyright battles. [Read more](https://soylentnews.org/article.pl?sid=26/03/25/2355253&amp;from=rss).

* [Olympic Committee bars transgender athletes from women’s events](https://www.nytimes.com/2026/03/26/world/olympics/ioc-transgender-athletes-ban.html) - The International Olympic Committee has announced a controversial decision to ban transgender athletes from participating in women’s events. [Comments](https://news.ycombinator.com/item?id=47530945).

* [Wikipedia Bans Use of Generative AI](https://news.slashdot.org/story/26/03/26/1818215/wikipedia-bans-use-of-generative-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Wikipedia has prohibited the use of generative AI tools on its articles, citing concerns about misinformation and intellectual property. [Comments](https://news.ycombinator.com/item?id=47533555).

## Technology and Innovation

* [Show HN: Fio: 3D World editor/game engine – inspired by Radiant and Hammer](https://github.com/ViciousSquid/Fio) - A new 3D world editor and game engine called Fio, inspired by tools like Radiant and Hammer, has been unveiled. [Comments](https://news.ycombinator.com/item?id=47535626).

* [New York City hospitals drop Palantir as controversial AI firm expands in UK](https://www.theguardian.com/technology/2026/mar/26/new-york-hospitals-palantir-ai) - NYC hospitals have discontinued their association with the AI company Palantir, amid the firm's expansion efforts in the UK healthcare sector. [Comments](https://news.ycombinator.com/item?id=47535371).

* [Mozilla and Mila Team Up On Open Source AI Push](https://tech.slashdot.org/story/26/03/26/1827208/mozilla-and-mila-team-up-on-open-source-ai-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Mozilla is partnering with Mila to encourage innovation in AI technology using open-source frameworks. [Comments](https://news.ycombinator.com/item?id=47533090).

* [Using FireWire on a Raspberry Pi](https://www.jeffgeerling.com/blog/2026/firewire-on-a-raspberry-pi/) - A developer showcases how to integrate the retro FireWire technology into the Raspberry Pi. [Comments](https://news.ycombinator.com/item?id=47535249).

* [Show HN: Turbolite – a SQLite VFS serving sub-250ms cold JOIN queries from S3](https://github.com/russellromney/turbolite) - A new SQLite VFS technology called Turbolite claims to deliver extremely fast query speeds from S3. [Comments](https://news.ycombinator.com/item?id=47534283).

## Open Source and Software Development

* [OpenTelemetry profiles enters public alpha](https://opentelemetry.io/blog/2026/profiles-alpha/) - OpenTelemetry has officially launched public alpha support for its profiling features. [Comments](https://news.ycombinator.com/item?id=47532339).

* [Colibri – chat platform built on the AT Protocol for communities big and small](https://colibri.social/) - The open-source Colibri chat platform, built using AT Protocol, launches for community use. [Comments](https://news.ycombinator.com/item?id=47533283).

* [Optimization lessons from a Minecraft structure locator](https://purplesyringa.moe/blog/optimization-lessons-from-a-minecraft-structure-locator/) - A comprehensive article discussing optimization insights drawn from developing a Minecraft structure locator tool. [Comments](https://lobste.rs/s/4izjll/optimization_lessons_from_minecraft).

* [Building a Runtime with QuickJS](https://healeycodes.com/building-a-runtime-with-quickjs) - An in-depth exploration of creating a runtime environment using QuickJS. [Comments](https://lobste.rs/s/pcq6zg/building_runtime_with_quickjs).

## Social Concerns and Cultural Shifts

* [JPMorgan Starts Monitoring Investment Banker Screen Time To Prevent Burnout](https://slashdot.org/story/26/03/26/1918233/jpmorgan-starts-monitoring-investment-banker-screen-time-to-prevent-burnout?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - JPMorgan introduces technology to monitor screen time in a bid to address employee burnout. [Comments](https://news.ycombinator.com/item?id=47514486).

* [Stealing AI tokens: Tech Employees Judged by How Fast They Burn Through AI](https://soylentnews.org/article.pl?sid=26/03/25/2344247&amp;from=rss) - A report highlights how employees in the tech industry are often evaluated by how quickly they consume LLM API tokens, raising ethical questions. [Comments](https://news.ycombinator.com/item?id=47521629).

* [Stephen Colbert To Write Next 'Lord of the Rings' Movie](https://entertainment.slashdot.org/story/26/03/25/1730218/stephen-colbert-to-write-next-lord-of-the-rings-movie?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Famous talk show host Stephen Colbert announced as the screenwriter for the upcoming 'Lord of the Rings' movie. [Comments](https://yro.slashdot.org/story/26/03/25/1730218).

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

* [2026-03-26, 21:05:00](https://soylentnews.org/article.pl?sid=26/03/25/2355253&amp;from=rss) - [Supreme Court Says Internet Service Provider Isn&apos;t Liable for Bootlegged Music Downloads](https://soylentnews.org/article.pl?sid=26/03/25/2355253&amp;from=rss)
* [2026-03-26, 21:00:00](https://slashdot.org/story/26/03/26/1918233/jpmorgan-starts-monitoring-investment-banker-screen-time-to-prevent-burnout?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [JPMorgan Starts Monitoring Investment Banker Screen Time To Prevent Burnout](https://slashdot.org/story/26/03/26/1918233/jpmorgan-starts-monitoring-investment-banker-screen-time-to-prevent-burnout?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-26, 20:58:04](https://news.ycombinator.com/item?id=47535626) - [Show HN: Fio: 3D World editor/game engine – inspired by Radiant and Hammer](https://github.com/ViciousSquid/Fio)
* [2026-03-26, 20:53:54](https://news.ycombinator.com/item?id=47535586) - [Deploytarot.com – tarot card reading for deployments](https://deploytarot.com/setup)
* [2026-03-26, 20:45:24](https://lobste.rs/s/rnuukq/tutorial_analyzing_shell_scripts) - [Tutorial: Analyzing shell scripts](https://blog.greenberg.science/posts/popl2026-tutorial/)
* [2026-03-26, 20:35:53](https://news.ycombinator.com/item?id=47535380) - [The Little Book of C](https://little-book-of.github.io/c/books/en-US/book.html)
* [2026-03-26, 20:35:04](https://news.ycombinator.com/item?id=47535371) - [New York City hospitals drop Palantir as controversial AI firm expands in UK](https://www.theguardian.com/technology/2026/mar/26/new-york-hospitals-palantir-ai)
* [2026-03-26, 20:23:10](https://news.ycombinator.com/item?id=47535249) - [Using FireWire on a Raspberry Pi](https://www.jeffgeerling.com/blog/2026/firewire-on-a-raspberry-pi/)
* [2026-03-26, 20:23:01](https://lobste.rs/s/oua8lg/using_firewire_on_raspberry_pi) - [Using FireWire on a Raspberry Pi](https://www.jeffgeerling.com/blog/2026/firewire-on-a-raspberry-pi/)
* [2026-03-26, 20:20:03](https://lobste.rs/s/haqvra/ssereload_1_introduction) - [ssereload(1) introduction](https://timmarinin.net/2026/ssereload/)
* [2026-03-26, 20:00:00](https://entertainment.slashdot.org/story/26/03/26/197231/vizio-tvs-now-require-walmart-accounts-for-smart-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Vizio TVs Now Require Walmart Accounts For Smart Features](https://entertainment.slashdot.org/story/26/03/26/197231/vizio-tvs-now-require-walmart-accounts-for-smart-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-26, 19:48:05](https://news.ycombinator.com/item?id=47534848) - [We haven&apos;t seen the worst of what gambling and prediction markets will do](https://www.derekthompson.org/p/we-havent-seen-the-worst-of-what)
* [2026-03-26, 19:47:01](https://news.ycombinator.com/item?id=47534837) - [How much precision can you squeeze out of a table?](https://www.johndcook.com/blog/2026/03/26/table-precision/)
* [2026-03-26, 19:41:26](https://lobste.rs/s/i7z3ru/eyg_is_now_open_source) - [EYG is now open source](https://eyg.run/news/editions/6)
* [2026-03-26, 19:30:35](https://news.ycombinator.com/item?id=47534629) - [CERN to host a new phase of Open Research Europe](https://home.cern/news/news/cern/cern-host-europes-flagship-open-access-publishing-platform)
* [2026-03-26, 19:00:00](https://tech.slashdot.org/story/26/03/26/1827208/mozilla-and-mila-team-up-on-open-source-ai-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mozilla and Mila Team Up On Open Source AI Push](https://tech.slashdot.org/story/26/03/26/1827208/mozilla-and-mila-team-up-on-open-source-ai-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-26, 18:58:19](https://news.ycombinator.com/item?id=47534283) - [Show HN: Turbolite – a SQLite VFS serving sub-250ms cold JOIN queries from S3](https://github.com/russellromney/turbolite)
* [2026-03-26, 18:38:50](https://news.ycombinator.com/item?id=47534086) - [John Bradley, author of xv, has died](https://voxday.net/2026/03/25/rip-john-bradley/)
* [2026-03-26, 18:35:36](https://lobste.rs/s/znjvvf/i_can_t_see_apple_s_vision) - [I can&apos;t See Apple&apos;s Vision](https://matduggan.com/i-cant-see-apples-vision/)
* [2026-03-26, 18:20:00](https://news.slashdot.org/story/26/03/26/1818215/wikipedia-bans-use-of-generative-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wikipedia Bans Use of Generative AI](https://news.slashdot.org/story/26/03/26/1818215/wikipedia-bans-use-of-generative-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-26, 17:51:42](https://news.ycombinator.com/item?id=47533555) - [Taming LLMs: Using Executable Oracles to Prevent Bad Code](https://john.regehr.org/writing/zero_dof_programming.html)
* [2026-03-26, 17:29:58](https://news.ycombinator.com/item?id=47533283) - [Colibri – chat platform built on the AT Protocol for communities big and small](https://colibri.social/)
* [2026-03-26, 17:16:21](https://news.ycombinator.com/item?id=47533090) - [Building a Blog with Elixir and Phoenix](https://jola.dev/posts/building-a-blog-with-elixir-and-phoenix)
* [2026-03-26, 17:09:12](https://lobste.rs/s/pcq6zg/building_runtime_with_quickjs) - [Building a Runtime with QuickJS](https://healeycodes.com/building-a-runtime-with-quickjs)
* [2026-03-26, 17:00:00](https://news.slashdot.org/story/26/03/26/1628201/tracy-kidder-author-of-the-soul-of-a-new-machine-dies-at-80?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tracy Kidder, Author of &apos;The Soul of a New Machine&apos;, Dies At 80](https://news.slashdot.org/story/26/03/26/1628201/tracy-kidder-author-of-the-soul-of-a-new-machine-dies-at-80?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-26, 16:23:00](https://soylentnews.org/article.pl?sid=26/03/25/2344247&amp;from=rss) - [Tech Employees Are Reportedly Being Evaluated by How Fast They Burn Through LLM Tokens](https://soylentnews.org/article.pl?sid=26/03/25/2344247&amp;from=rss)
* [2026-03-26, 16:14:56](https://news.ycombinator.com/item?id=47532339) - [OpenTelemetry profiles enters public alpha](https://opentelemetry.io/blog/2026/profiles-alpha/)
* [2026-03-26, 16:00:57](https://news.ycombinator.com/item?id=47532148) - [Stripe Projects: Provision and manage services from the CLI](https://projects.dev/)
* [2026-03-26, 16:00:00](https://slashdot.org/story/26/03/26/077229/china-reviews-2-billion-manus-sale-to-meta-as-founders-barred-from-leaving-country?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Reviews $2 Billion Manus Sale To Meta As Founders Barred From Leaving Country](https://slashdot.org/story/26/03/26/077229/china-reviews-2-billion-manus-sale-to-meta-as-founders-barred-from-leaving-country?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-26, 15:48:40](https://news.ycombinator.com/item?id=47531967) - [My minute-by-minute response to the LiteLLM malware attack](https://futuresearch.ai/blog/litellm-attack-transcript/)
* [2026-03-26, 15:00:00](https://science.slashdot.org/story/26/03/26/065258/researchers-at-cern-transport-antiprotons-by-truck-in-world-first-experiment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Researchers At CERN Transport Antiprotons By Truck In World-First Experiment](https://science.slashdot.org/story/26/03/26/065258/researchers-at-cern-transport-antiprotons-by-truck-in-world-first-experiment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-26, 14:32:34](https://news.ycombinator.com/item?id=47530945) - [Olympic Committee bars transgender athletes from women’s events](https://www.nytimes.com/2026/03/26/world/olympics/ioc-transgender-athletes-ban.html)
* [2026-03-26, 14:17:45](https://lobste.rs/s/sazeyn/don_t_trust_software_verify_it) - [Don’t trust software, verify it](https://daniel.haxx.se/blog/2026/03/26/dont-trust-verify/)
* [2026-03-26, 13:38:25](https://news.ycombinator.com/item?id=47530330) - [Moving from GitHub to Codeberg, for lazy people](https://unterwaditzer.net/2025/codeberg.html)
* [2026-03-26, 13:31:14](https://lobste.rs/s/1stari/when_vectorized_arrays_aren_t_enough) - [When Vectorized Arrays Aren&apos;t Enough](https://nrposner.com/blog/when-vectorized-arrays-arent-enough/)
* [2026-03-26, 13:01:54](https://lobste.rs/s/e4y5ps/two_studies_compiler_optimisations) - [Two studies in compiler optimisations](https://www.hmpcabral.com/2026/03/20/two-studies-in-compiler-optimisations/)
* [2026-03-26, 12:24:36](https://news.ycombinator.com/item?id=47529609) - [End of \&quot;Chat Control\&quot;: EU parliament stops mass surveillance](https://www.patrick-breyer.de/en/end-of-chat-control-eu-parliament-stops-mass-surveillance-in-voting-thriller-paving-the-way-for-genuine-child-protection/)
* [2026-03-26, 12:13:39](https://lobste.rs/s/4izjll/optimization_lessons_from_minecraft) - [Optimization lessons from a Minecraft structure locator](https://purplesyringa.moe/blog/optimization-lessons-from-a-minecraft-structure-locator/)
* [2026-03-26, 11:40:00](https://soylentnews.org/article.pl?sid=26/03/25/2341257&amp;from=rss) - [Micron Predicts That Cars Will Need 300GB of RAM](https://soylentnews.org/article.pl?sid=26/03/25/2341257&amp;from=rss)
* [2026-03-26, 11:00:00](https://yro.slashdot.org/story/26/03/25/2250217/reddit-takes-on-bots-with-human-verification-requirements?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Reddit Takes On Bots With &apos;Human Verification&apos; Requirements](https://yro.slashdot.org/story/26/03/25/2250217/reddit-takes-on-bots-with-human-verification-requirements?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-26, 09:27:34](https://lobste.rs/s/6w8rqm/engineers_do_get_promoted_for_writing) - [Engineers do get promoted for writing simple code](https://www.seangoedecke.com/simple-work-gets-rewarded/)
* [2026-03-26, 07:58:59](https://lobste.rs/s/51ekgy/fedora_moving_from_pagure_forgejo) - [Fedora moving from Pagure to Forgejo](https://communityblog.fedoraproject.org/the-forge-is-our-new-home/)
* [2026-03-26, 07:00:00](https://hardware.slashdot.org/story/26/03/26/0545256/melania-trump-welcomes-humanoid-robot-at-white-house-summit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Melania Trump Welcomes Humanoid Robot At White House Summit](https://hardware.slashdot.org/story/26/03/26/0545256/melania-trump-welcomes-humanoid-robot-at-white-house-summit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-26, 06:59:00](https://soylentnews.org/article.pl?sid=26/03/25/2339207&amp;from=rss) - [The Mystery of How Volcanic Lightning Happens Has Been Solved](https://soylentnews.org/article.pl?sid=26/03/25/2339207&amp;from=rss)
* [2026-03-26, 06:06:21](https://lobste.rs/s/wxl81t/large_scale_online_deanonymization_with) - [Large-scale online deanonymization with LLMs](https://arxiv.org/abs/2602.16800)
* [2026-03-26, 06:01:42](https://lobste.rs/s/cibkd8/lines_code_are_useful) - [Lines of code are useful](https://entropicthoughts.com/lines-of-code)
* [2026-03-26, 05:27:27](https://lobste.rs/s/quxmzz/vim_racing) - [Vim Racing](https://www.vimgym.app/)
* [2026-03-26, 03:30:00](https://entertainment.slashdot.org/story/26/03/25/2322210/brazils-ufo-capital-marks-30-years-since-alien-encounter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Brazil&apos;s UFO Capital Marks 30 Years Since &apos;Alien Encounter&apos;](https://entertainment.slashdot.org/story/26/03/25/2322210/brazils-ufo-capital-marks-30-years-since-alien-encounter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-26, 02:31:50](https://lobste.rs/s/cug5gu/verilog_factorio_compiler_simulator) - [A Verilog to Factorio compiler and simulator (working RISC-V CPU)](https://www.reddit.com/r/rust/comments/1s03w2o/my_first_rust_project_a_verilog_to_factorio/)
* [2026-03-26, 02:12:00](https://soylentnews.org/article.pl?sid=26/03/23/163239&amp;from=rss) - [NASA Sets &apos;Impossible&apos; Ground Rules for Relocation of &apos;Flown Space Vehicle&apos;](https://soylentnews.org/article.pl?sid=26/03/23/163239&amp;from=rss)
* [2026-03-26, 01:57:23](https://lobste.rs/s/vyixek/electric_motorcycles_are_security) - [Electric Motorcycles are a Security Nightmare](https://persephonekarnstein.github.io/post/zero-days/)
* [2026-03-26, 00:28:38](https://news.ycombinator.com/item?id=47525243) - [Shell Tricks That Make Life Easier (and Save Your Sanity)](https://blog.hofstede.it/shell-tricks-that-actually-make-life-easier-and-save-your-sanity/)
* [2026-03-25, 23:56:51](https://lobste.rs/s/iqctrn/vim_classic_long_term_maintenance_vim_8_x) - [vim-classic: Long-term maintenance of Vim 8.x](https://sr.ht/~sircmpwn/vim-classic/)
* [2026-03-25, 23:00:00](https://tech.slashdot.org/story/26/03/25/2258234/postal-service-to-impose-its-first-ever-fuel-surcharge-on-packages?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Postal Service to Impose Its First-Ever Fuel Surcharge on Packages](https://tech.slashdot.org/story/26/03/25/2258234/postal-service-to-impose-its-first-ever-fuel-surcharge-on-packages?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-25, 22:43:44](https://lobste.rs/s/xpx9vi/shell_tricks_actually_make_life_easier) - [Shell Tricks That Actually Make Life Easier (And Save Your Sanity)](https://blog.hofstede.it/shell-tricks-that-actually-make-life-easier-and-save-your-sanity/)
* [2026-03-25, 22:00:00](https://news.slashdot.org/story/26/03/25/204204/canadas-immigration-rejected-applicant-based-on-ai-invented-job-duties?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Canada&apos;s Immigration Rejected Applicant Based On AI-Invented Job Duties](https://news.slashdot.org/story/26/03/25/204204/canadas-immigration-rejected-applicant-based-on-ai-invented-job-duties?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-25, 21:26:00](https://soylentnews.org/article.pl?sid=26/03/23/1558231&amp;from=rss) - [The 49MB Web Page](https://soylentnews.org/article.pl?sid=26/03/23/1558231&amp;from=rss)
* [2026-03-25, 21:11:57](https://news.ycombinator.com/item?id=47523330) - [Running Tesla Model 3&apos;s computer on my desk using parts from crashed cars](https://bugs.xdavidhu.me/tesla/2026/03/23/running-tesla-model-3s-computer-on-my-desk-using-parts-from-crashed-cars/)
* [2026-03-25, 21:00:00](https://apple.slashdot.org/story/26/03/25/1948215/apple-can-create-smaller-on-device-ai-models-from-googles-gemini?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Can Create Smaller On-Device AI Models From Google&apos;s Gemini](https://apple.slashdot.org/story/26/03/25/1948215/apple-can-create-smaller-on-device-ai-models-from-googles-gemini?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-25, 20:00:00](https://yro.slashdot.org/story/26/03/25/1717205/supreme-court-sides-with-internet-provider-in-copyright-fight-over-pirated-music?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Supreme Court Sides With Internet Provider In Copyright Fight Over Pirated Music](https://yro.slashdot.org/story/26/03/25/1717205/supreme-court-sides-with-internet-provider-in-copyright-fight-over-pirated-music?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-25, 19:45:05](https://lobste.rs/s/urwusf/updates_github_copilot_interaction_data) - [Updates to GitHub Copilot interaction data usage policy](https://github.blog/news-insights/company-news/updates-to-github-copilot-interaction-data-usage-policy/)
* [2026-03-25, 19:41:51](https://news.ycombinator.com/item?id=47522173) - [Personal Encyclopedias](https://whoami.wiki/blog/personal-encyclopedias)
* [2026-03-25, 19:00:00](https://entertainment.slashdot.org/story/26/03/25/1730218/stephen-colbert-to-write-next-lord-of-the-rings-movie?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Stephen Colbert To Write Next &apos;Lord of the Rings&apos; Movie](https://entertainment.slashdot.org/story/26/03/25/1730218/stephen-colbert-to-write-next-lord-of-the-rings-movie?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-25, 18:26:13](https://lobste.rs/s/yeoe5q/which_design_doc_did_human_write) - [Which Design Doc Did a Human Write?](https://refactoringenglish.com/blog/ai-vs-human-design-doc/)
* [2026-03-25, 17:14:43](https://lobste.rs/s/4i8uad/thoughts_on_slowing_fuck_down) - [Thoughts on slowing the fuck down](https://mariozechner.at/posts/2026-03-25-thoughts-on-slowing-the-fuck-down/)
* [2026-03-25, 16:50:49](https://lobste.rs/s/tntlde/mojo_s_not_yet_python) - [Mojo&apos;s not (yet) Python](https://theconsensus.dev/p/2026/03/12/mojos-not-yet-python.html)
* [2026-03-25, 16:41:00](https://soylentnews.org/article.pl?sid=26/03/23/1555204&amp;from=rss) - [OpenAI Delays AI Porn Feature Over Safety Uproar](https://soylentnews.org/article.pl?sid=26/03/23/1555204&amp;from=rss)
* [2026-03-25, 15:46:29](https://news.ycombinator.com/item?id=47518960) - [Why so many control rooms were seafoam green (2025)](https://bethmathews.substack.com/p/why-so-many-control-rooms-were-seafoam)
* [2026-03-25, 14:30:51](https://lobste.rs/s/ocrjck/disregard_attacks) - [\&quot;Disregard that!\&quot; attacks](https://calpaterson.com/disregard.html)
* [2026-03-25, 11:55:00](https://soylentnews.org/article.pl?sid=26/03/23/1550203&amp;from=rss) - [I Hacked ChatGPT and Google&apos;s AI](https://soylentnews.org/article.pl?sid=26/03/23/1550203&amp;from=rss)
* [2026-03-25, 10:36:39](https://lobste.rs/s/xv13en/vitruvianos) - [VitruvianOS](https://v-os.dev/)
* [2026-03-25, 07:08:00](https://soylentnews.org/article.pl?sid=26/03/23/1543235&amp;from=rss) - [The FBI is Buying Americans’ Location Data](https://soylentnews.org/article.pl?sid=26/03/23/1543235&amp;from=rss)
* [2026-03-25, 02:23:00](https://soylentnews.org/article.pl?sid=26/03/23/0124221&amp;from=rss) - [Particle Discovered at CERN Solves a 20-Year-Old Mystery](https://soylentnews.org/article.pl?sid=26/03/23/0124221&amp;from=rss)
* [2026-03-24, 21:36:00](https://soylentnews.org/article.pl?sid=26/03/23/0118220&amp;from=rss) - [FBI Surveils Russia’s Elite Agents Through Google Translate Logs](https://soylentnews.org/article.pl?sid=26/03/23/0118220&amp;from=rss)
* [2026-03-24, 16:55:00](https://soylentnews.org/article.pl?sid=26/03/23/0110201&amp;from=rss) - [Cloudflare Appeals Piracy Shield Fine, Hopes to Kill Italy&apos;s Site-Blocking Law](https://soylentnews.org/article.pl?sid=26/03/23/0110201&amp;from=rss)
* [2026-03-24, 16:54:10](https://news.ycombinator.com/item?id=47505670) - [HyperAgents: Self-referential self-improving agents](https://github.com/facebookresearch/hyperagents)
* [2026-03-24, 12:10:00](https://soylentnews.org/article.pl?sid=26/03/23/013259&amp;from=rss) - [Musk&apos;s Tactic of Blaming Users for Grok Sex Images May be Foiled by EU Law](https://soylentnews.org/article.pl?sid=26/03/23/013259&amp;from=rss)
* [2026-03-24, 07:21:00](https://soylentnews.org/article.pl?sid=26/03/23/0055212&amp;from=rss) - [Nvidia is Trying to Make a Computer for Orbital AI Data Centers](https://soylentnews.org/article.pl?sid=26/03/23/0055212&amp;from=rss)
* [2026-03-24, 06:53:30](https://news.ycombinator.com/item?id=47499356) - [From zero to a RAG system: successes and failures](https://en.andros.dev/blog/aa31d744/from-zero-to-a-rag-system-successes-and-failures/)
* [2026-03-24, 06:31:15](https://news.ycombinator.com/item?id=47499242) - [Fast regex search: indexing text for agent tools](https://cursor.com/blog/fast-regex-search)
* [2026-03-24, 02:34:00](https://soylentnews.org/article.pl?sid=26/03/23/0028246&amp;from=rss) - [Never Mind Band-Aids, Neanderthals Had Antiseptic Birch Tar](https://soylentnews.org/article.pl?sid=26/03/23/0028246&amp;from=rss)
* [2026-03-23, 22:06:49](https://news.ycombinator.com/item?id=47495795) - [Cloudflare&apos;s Gen 13 servers: trading cache for cores for 2x performance](https://blog.cloudflare.com/gen13-launch/)
* [2026-03-23, 21:47:00](https://soylentnews.org/article.pl?sid=26/03/22/1834242&amp;from=rss) - [Big Tech’s Security Problem Just Hit Gaming](https://soylentnews.org/article.pl?sid=26/03/22/1834242&amp;from=rss)
* [2026-03-23, 17:02:00](https://soylentnews.org/article.pl?sid=26/03/22/1833208&amp;from=rss) - [Workers Who Love ‘Synergizing Paradigms’ Might be Bad at Their Jobs](https://soylentnews.org/article.pl?sid=26/03/22/1833208&amp;from=rss)
* [2026-03-23, 15:17:38](https://news.ycombinator.com/item?id=47490705) - [DOOM Over DNS](https://github.com/resumex/doom-over-dns)
* [2026-03-23, 13:56:54](https://news.ycombinator.com/item?id=47489620) - [My home network observes bedtime with OpenBSD and pf](https://ratfactor.com/openbsd/pf-gateway-bedtime)
* [2026-03-23, 12:17:00](https://soylentnews.org/article.pl?sid=26/03/22/1822230&amp;from=rss) - [Concerns Due to TrueNAS Moving its Build Repository to Private Servers](https://soylentnews.org/article.pl?sid=26/03/22/1822230&amp;from=rss)
* [2026-03-23, 07:32:00](https://soylentnews.org/article.pl?sid=26/03/21/1413247&amp;from=rss) - [Moltbook Was Peak AI Theater](https://soylentnews.org/article.pl?sid=26/03/21/1413247&amp;from=rss)
* [2026-03-23, 02:42:00](https://soylentnews.org/article.pl?sid=26/03/21/145246&amp;from=rss) - [Commission Says EU Inc Will be in Place by End of 2026](https://soylentnews.org/article.pl?sid=26/03/21/145246&amp;from=rss)
* [2026-03-22, 21:54:00](https://soylentnews.org/article.pl?sid=26/03/21/1345242&amp;from=rss) - [Proton Mail Helped FBI Unmask Anonymous ‘Stop Cop City’ Protester](https://soylentnews.org/article.pl?sid=26/03/21/1345242&amp;from=rss)
* [2026-03-22, 17:09:00](https://soylentnews.org/article.pl?sid=26/03/21/1339251&amp;from=rss) - [Wayland Set the Linux Desktop Back by 10 Years](https://soylentnews.org/article.pl?sid=26/03/21/1339251&amp;from=rss)
* [2026-03-22, 12:22:00](https://soylentnews.org/article.pl?sid=26/03/21/1337239&amp;from=rss) - [Analysis From West Point Warns That Strait of Hormuz Blockade Will Strangle US Defense Industry](https://soylentnews.org/article.pl?sid=26/03/21/1337239&amp;from=rss)
* [2026-03-22, 07:37:00](https://soylentnews.org/article.pl?sid=26/03/21/1319201&amp;from=rss) - [This Fungus Can Make Water Freeze](https://soylentnews.org/article.pl?sid=26/03/21/1319201&amp;from=rss)
* [2026-03-22, 02:52:00](https://soylentnews.org/article.pl?sid=26/03/19/208240&amp;from=rss) - [Tech Hobbyist Makes Shoulder-Mounted Guided Missile Prototype With $96 In Parts And A 3D Printer](https://soylentnews.org/article.pl?sid=26/03/19/208240&amp;from=rss)
