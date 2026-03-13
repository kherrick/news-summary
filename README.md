# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and AI Innovations

* [Anthropic's Claude AI Can Respond With Charts, Diagrams, and Other Visualschat](https://features.slashdot.org/story/26/03/12/1710246/anthropics-claude-ai-can-respond-with-charts-diagrams-and-other-visualschat?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Google Maps Gets Its Biggest Navigation Redesign In a Decade, Plus More AI](https://tech.slashdot.org/story/26/03/12/1546207/google-maps-gets-its-biggest-navigation-redesign-in-a-decade-plus-more-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Perplexity's 'Personal Computer' Lets AI Agents Access Your Local Files](https://slashdot.org/story/26/03/12/191200/perplexitys-personal-computer-lets-ai-agents-access-your-local-files?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Show HN: Understudy – Teach a desktop agent by demonstrating a task once](https://github.com/understudy-ai/understudy)

* [Guix System - One Month Later](https://nemin.hu/guix-one-month-later.html)

* [AI Agents Love Gleam](https://curling.io/blog/21-reasons-ai-agents-love-gleam)

## Security and Privacy Developments

* [oss-security - Re: Multiple vulnerabilities in AppArmor](https://www.openwall.com/lists/oss-security/2026/03/12/7)

* [Document poisoning in RAG systems: How attackers corrupt AI's sources](https://aminrj.com/posts/rag-document-poisoning/)

* [Secure Communication, Buried In A News App](https://hackaday.com/2026/03/09/secure-communication-buried-in-a-news-app)

* [My PostgreSQL database got nuked lol](https://akselmo.dev/posts/they-broke-my-server/)

## Industry and Corporate News

* [Adobe CEO to Step Down After 18 Years](https://slashdot.org/story/26/03/12/212212/adobe-ceo-to-step-down-after-18-years?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Honda Cancels All Three EVs That It Planned To Build In the US](https://tech.slashdot.org/story/26/03/12/1836249/honda-cancels-all-three-evs-that-it-planned-to-build-in-the-us?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Atlassian CEO Cites AI Shift When Announcing Plan To Shed 1,600 Jobs](https://slashdot.org/story/26/03/12/0722207/atlassian-ceo-cites-ai-shift-when-announcing-plan-to-shed-1600-jobs?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Trump Gets Data Center Companies to Pledge to Pay for Power Generation](https://soylentnews.org/article.pl?sid=26/03/09/1454227&from=rss)

## Unique Discoveries and Fun Concepts

* [Games in PostScript - Play Chess Against Your Printer](https://www.youtube.com/watch?v=2YCATafErA8)

* [Bubble Sorted Amen Break](https://parametricavocado.itch.io/amen-sorting)

* [Why Falling Cats Always Seem To Land On Their Feet](https://science.slashdot.org/story/26/03/11/2151249/why-falling-cats-always-seem-to-land-on-their-feet?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Runners who churn butter on their runs](https://www.runnersworld.com/news/a70683169/how-to-make-butter-while-running/)

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

* [2026-03-12, 23:30:25](https://lobste.rs/s/efhaws/games_postscript_play_chess_against_your) - [Games in PostScript - Play Chess Against Your Printer](https://www.youtube.com/watch?v=2YCATafErA8)
* [2026-03-12, 23:23:00](https://soylentnews.org/article.pl?sid=26/03/11/164207&amp;from=rss) - [Is Low Fertility Really an Economic Threat?](https://soylentnews.org/article.pl?sid=26/03/11/164207&amp;from=rss)
* [2026-03-12, 23:00:00](https://apple.slashdot.org/story/26/03/12/2234239/google-chrome-is-finally-coming-to-arm64-linux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Chrome Is Finally Coming To ARM64 Linux](https://apple.slashdot.org/story/26/03/12/2234239/google-chrome-is-finally-coming-to-arm64-linux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-12, 22:29:41](https://lobste.rs/s/2oob2h/oss_security_re_multiple) - [oss-security - Re: Multiple vulnerabilities in AppArmor](https://www.openwall.com/lists/oss-security/2026/03/12/7)
* [2026-03-12, 22:00:00](https://slashdot.org/story/26/03/12/212212/adobe-ceo-to-step-down-after-18-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Adobe CEO to Step Down After 18 Years](https://slashdot.org/story/26/03/12/212212/adobe-ceo-to-step-down-after-18-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-12, 21:38:06](https://news.ycombinator.com/item?id=47357515) - [Show HN: OpenClaw-class agents on ESP32 (and the IDE that makes it possible)](https://pycoclaw.com/)
* [2026-03-12, 21:01:10](https://news.ycombinator.com/item?id=47357042) - [Shall I implement it? No](https://gist.github.com/bretonium/291f4388e2de89a43b25c135b44e41f0)
* [2026-03-12, 21:00:00](https://apple.slashdot.org/story/26/03/12/2042240/apples-macbook-neo-makes-repairs-easier-cheaper-than-other-macbooks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple&apos;s MacBook Neo Makes Repairs Easier, Cheaper Than Other MacBooks](https://apple.slashdot.org/story/26/03/12/2042240/apples-macbook-neo-makes-repairs-easier-cheaper-than-other-macbooks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-12, 20:55:51](https://news.ycombinator.com/item?id=47356968) - [Innocent woman jailed after being misidentified using AI facial recognition](https://www.grandforksherald.com/news/north-dakota/ai-error-jails-innocent-grandmother-for-months-in-north-dakota-fraud-case)
* [2026-03-12, 20:22:27](https://lobste.rs/s/eqkxoo/ai_agents_love_gleam) - [AI Agents Love Gleam](https://curling.io/blog/21-reasons-ai-agents-love-gleam)
* [2026-03-12, 20:12:06](https://lobste.rs/s/koymkj/guix_system_one_month_later) - [Guix System - One Month Later](https://nemin.hu/guix-one-month-later.html)
* [2026-03-12, 20:00:00](https://slashdot.org/story/26/03/12/191200/perplexitys-personal-computer-lets-ai-agents-access-your-local-files?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Perplexity&apos;s &apos;Personal Computer&apos; Lets AI Agents Access Your Local Files](https://slashdot.org/story/26/03/12/191200/perplexitys-personal-computer-lets-ai-agents-access-your-local-files?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-12, 19:41:35](https://news.ycombinator.com/item?id=47356017) - [An old photo of a large BBS (2022)](https://rachelbythebay.com/w/2022/01/26/swcbbs/)
* [2026-03-12, 19:21:45](https://news.ycombinator.com/item?id=47355781) - [Runners who churn butter on their runs](https://www.runnersworld.com/news/a70683169/how-to-make-butter-while-running/)
* [2026-03-12, 19:19:34](https://lobste.rs/s/zcoz8h/how_do_you_manage_ssh_keys) - [How do you manage SSH keys?](https://lobste.rs/s/zcoz8h/how_do_you_manage_ssh_keys)
* [2026-03-12, 19:00:00](https://tech.slashdot.org/story/26/03/12/1836249/honda-cancels-all-three-evs-that-it-planned-to-build-in-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Honda Cancels All Three EVs That It Planned To Build In the US](https://tech.slashdot.org/story/26/03/12/1836249/honda-cancels-all-three-evs-that-it-planned-to-build-in-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-12, 18:52:36](https://news.ycombinator.com/item?id=47355410) - [Launch HN: IonRouter (YC W26) – High-throughput, low-cost inference](https://ionrouter.io)
* [2026-03-12, 18:39:00](https://soylentnews.org/article.pl?sid=26/03/11/163209&amp;from=rss) - [OpenAI&apos;s Massive Stargate Data Center Canceled as Firm Can&apos;t Reach Terms With Oracle](https://soylentnews.org/article.pl?sid=26/03/11/163209&amp;from=rss)
* [2026-03-12, 18:29:15](https://lobste.rs/s/8xccbo/on_making) - [On Making](https://beej.us/blog/data/ai-making/)
* [2026-03-12, 18:00:00](https://features.slashdot.org/story/26/03/12/1710246/anthropics-claude-ai-can-respond-with-charts-diagrams-and-other-visualschat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic&apos;s Claude AI Can Respond With Charts, Diagrams, and Other Visualschat](https://features.slashdot.org/story/26/03/12/1710246/anthropics-claude-ai-can-respond-with-charts-diagrams-and-other-visualschat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-12, 17:33:35](https://lobste.rs/s/lle7ol/agent_shell_0_47_updates) - [agent-shell 0.47 updates](https://xenodium.com/agent-shell-0-47-1-updates)
* [2026-03-12, 17:13:56](https://news.ycombinator.com/item?id=47354098) - [Bubble Sorted Amen Break](https://parametricavocado.itch.io/amen-sorting)
* [2026-03-12, 17:04:35](https://news.ycombinator.com/item?id=47353957) - [Show HN: Understudy – Teach a desktop agent by demonstrating a task once](https://github.com/understudy-ai/understudy)
* [2026-03-12, 17:01:46](https://news.ycombinator.com/item?id=47353904) - [Converge (YC S23) Is Hiring a Founding Platform Engineer (NYC, Onsite)](https://www.runconverge.com/careers/founding-platform-engineer)
* [2026-03-12, 17:00:00](https://tech.slashdot.org/story/26/03/12/1546207/google-maps-gets-its-biggest-navigation-redesign-in-a-decade-plus-more-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Maps Gets Its Biggest Navigation Redesign In a Decade, Plus More AI](https://tech.slashdot.org/story/26/03/12/1546207/google-maps-gets-its-biggest-navigation-redesign-in-a-decade-plus-more-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-12, 16:43:27](https://lobste.rs/s/zyt5uz/this_is_not_computer_for_you) - [This Is Not The Computer For You](https://samhenri.gold/blog/20260312-this-is-not-the-computer-for-you/)
* [2026-03-12, 16:41:06](https://news.ycombinator.com/item?id=47353558) - [Show HN: OneCLI – Vault for AI Agents in Rust](https://github.com/onecli/onecli)
* [2026-03-12, 16:38:51](https://news.ycombinator.com/item?id=47353533) - [Reversing memory loss via gut-brain communication](https://med.stanford.edu/news/all-news/2026/03/gut-brain-cognitive-decline.html)
* [2026-03-12, 16:28:03](https://lobste.rs/s/fzgcjh/arcaos_5_1_2_now_available_os_2_warp) - [ArcaOS 5.1.2 now available (OS/2 Warp)](https://www.arcanoae.com/arcaos-5-1-2-now-available/)
* [2026-03-12, 16:17:40](https://lobste.rs/s/eng6mr/dreaming_ten_year_computer) - [Dreaming of a ten-year computer](https://alexwlchan.net/2026/ten-year-computer/)
* [2026-03-12, 16:03:54](https://lobste.rs/s/wxfznm/malus_clean_room_as_service) - [MALUS - Clean Room as a Service](https://malus.sh/)
* [2026-03-12, 16:00:00](https://slashdot.org/story/26/03/12/0722207/atlassian-ceo-cites-ai-shift-when-announcing-plan-to-shed-1600-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Atlassian CEO Cites AI Shift When Announcing Plan To Shed 1,600 Jobs](https://slashdot.org/story/26/03/12/0722207/atlassian-ceo-cites-ai-shift-when-announcing-plan-to-shed-1600-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-12, 15:43:39](https://news.ycombinator.com/item?id=47352459) - [The Met releases high-def 3D scans of 140 famous art objects](https://www.openculture.com/2026/03/the-met-releases-high-definition-3d-scans-of-140-famous-art-objects.html)
* [2026-03-12, 15:39:50](https://news.ycombinator.com/item?id=47352385) - [WolfIP: Lightweight TCP/IP stack with no dynamic memory allocations](https://github.com/wolfssl/wolfip)
* [2026-03-12, 15:31:21](https://news.ycombinator.com/item?id=47352236) - [The Road Not Taken: A World Where IPv4 Evolved](https://owl.billpg.com/ipv4x/)
* [2026-03-12, 15:00:00](https://news.slashdot.org/story/26/03/12/0710204/strait-of-hormuz-closure-triggers-work-from-home-4-day-weeks-in-asia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Strait of Hormuz Closure Triggers Work From Home, 4-Day Weeks In Asia](https://news.slashdot.org/story/26/03/12/0710204/strait-of-hormuz-closure-triggers-work-from-home-4-day-weeks-in-asia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-12, 14:48:57](https://news.ycombinator.com/item?id=47351371) - [ATMs didn&apos;t kill bank teller jobs, but the iPhone did](https://davidoks.blog/p/why-the-atm-didnt-kill-bank-teller)
* [2026-03-12, 14:00:00](https://hardware.slashdot.org/story/26/03/12/0137208/reducing-europes-nuclear-energy-sector-was-strategic-mistake-eu-chief-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Reducing Europe&apos;s Nuclear Energy Sector Was &apos;Strategic Mistake&apos;, EU Chief Says](https://hardware.slashdot.org/story/26/03/12/0137208/reducing-europes-nuclear-energy-sector-was-strategic-mistake-eu-chief-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-12, 13:57:00](https://soylentnews.org/article.pl?sid=26/03/11/1558207&amp;from=rss) - [Digital Targeting Creeps Out Customers](https://soylentnews.org/article.pl?sid=26/03/11/1558207&amp;from=rss)
* [2026-03-12, 13:49:12](https://news.ycombinator.com/item?id=47350516) - [Show HN: Axe – A 12MB binary that replaces your AI framework](https://github.com/jrswab/axe)
* [2026-03-12, 13:42:04](https://news.ycombinator.com/item?id=47350424) - [Malus – Clean Room as a Service](https://malus.sh)
* [2026-03-12, 13:40:36](https://news.ycombinator.com/item?id=47350407) - [Document poisoning in RAG systems: How attackers corrupt AI&apos;s sources](https://aminrj.com/posts/rag-document-poisoning/)
* [2026-03-12, 13:16:11](https://news.ycombinator.com/item?id=47350136) - [Long Overlooked as Crucial to Life, Fungi Start to Get Their Due](https://e360.yale.edu/features/fungi-kingdom)
* [2026-03-12, 12:44:45](https://news.ycombinator.com/item?id=47349806) - [US private credit defaults hit record 9.2% in 2025, Fitch says](https://www.marketscreener.com/news/us-private-credit-defaults-hit-record-9-2-in-2025-fitch-says-ce7e5fd8df8fff2d)
* [2026-03-12, 11:49:05](https://news.ycombinator.com/item?id=47349334) - [Are LLM merge rates not getting better?](https://entropicthoughts.com/no-swe-bench-improvement)
* [2026-03-12, 11:41:14](https://news.ycombinator.com/item?id=47349277) - [Big data on the cheapest MacBook](https://duckdb.org/2026/03/11/big-data-on-the-cheapest-macbook)
* [2026-03-12, 11:05:29](https://lobste.rs/s/z5qqob/announcing_mercurial_sprint_london_may) - [Announcing Mercurial sprint in London, May 27-29th](https://mercurial-scm.org/news/2026/0001-london-sprint)
* [2026-03-12, 11:00:00](https://entertainment.slashdot.org/story/26/03/11/2348256/only-half-of-americans-went-to-a-movie-theater-in-2025-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Only Half of Americans Went To a Movie Theater In 2025, Study Finds](https://entertainment.slashdot.org/story/26/03/11/2348256/only-half-of-americans-went-to-a-movie-theater-in-2025-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-12, 09:31:01](https://lobste.rs/s/rz6gak/lowdown_manpage_support) - [Lowdown Manpage Support](https://kristaps.bsd.lv/lowdown/mdoc.html)
* [2026-03-12, 09:25:16](https://lobste.rs/s/mcwe1g/claude_code_isn_t_going_replace_data) - [Claude Code isn’t going to replace data engineers (yet)](https://rmoff.net/2026/03/11/claude-code-isnt-going-to-replace-data-engineers-yet/)
* [2026-03-12, 09:23:01](https://news.ycombinator.com/item?id=47348304) - [Dolphin Progress Release 2603](https://dolphin-emu.org/blog/2026/03/12/dolphin-progress-report-release-2603/)
* [2026-03-12, 09:11:00](https://soylentnews.org/article.pl?sid=26/03/11/0450209&amp;from=rss) - [Why the US is Using a Cheap Iranian Drone Against the Country Itself](https://soylentnews.org/article.pl?sid=26/03/11/0450209&amp;from=rss)
* [2026-03-12, 07:00:00](https://tech.slashdot.org/story/26/03/11/2342217/gfiber-and-astound-broadband-to-join-forces?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GFiber and Astound Broadband To Join Forces](https://tech.slashdot.org/story/26/03/11/2342217/gfiber-and-astound-broadband-to-join-forces?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-12, 06:48:59](https://lobste.rs/s/l3rkdl/parametricity_comptime_is_bonkers) - [Parametricity, or Comptime is Bonkers](https://noelwelsh.com/posts/comptime-is-bonkers/)
* [2026-03-12, 06:06:46](https://news.ycombinator.com/item?id=47347064) - [Returning to Rails in 2026](https://www.markround.com/blog/2026/03/05/returning-to-rails-in-2026/)
* [2026-03-12, 05:17:51](https://lobste.rs/s/wssz9m/grief_ai_split) - [Grief and the AI Split](https://blog.lmorchard.com/2026/03/11/grief-and-the-ai-split/)
* [2026-03-12, 04:23:00](https://soylentnews.org/article.pl?sid=26/03/11/0135252&amp;from=rss) - [Are Consumers Doomed to Pay More for Electricity Due to Data Center Buildouts?](https://soylentnews.org/article.pl?sid=26/03/11/0135252&amp;from=rss)
* [2026-03-12, 03:30:00](https://science.slashdot.org/story/26/03/11/2151249/why-falling-cats-always-seem-to-land-on-their-feet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why Falling Cats Always Seem To Land On Their Feet](https://science.slashdot.org/story/26/03/11/2151249/why-falling-cats-always-seem-to-land-on-their-feet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-12, 02:42:35](https://lobste.rs/s/wxxxuc/building_new_flash) - [Building a new Flash](https://bill.newgrounds.com/news/post/1607118)
* [2026-03-12, 00:35:43](https://lobste.rs/s/g3qpeu/generative_ai_vegetarianism) - [Generative AI vegetarianism](https://sboots.ca/2026/03/11/generative-ai-vegetarianism/)
* [2026-03-11, 23:54:29](https://lobste.rs/s/d2skzd/secure_communication_buried_news_app) - [Secure Communication, Buried In A News App](https://hackaday.com/2026/03/09/secure-communication-buried-in-a-news-app/)
* [2026-03-11, 23:36:00](https://soylentnews.org/article.pl?sid=26/03/11/0138245&amp;from=rss) - [Iranian Drone Strikes Hit Three AWS Data Centers in the UAE and Bahrain](https://soylentnews.org/article.pl?sid=26/03/11/0138245&amp;from=rss)
* [2026-03-11, 23:00:00](https://it.slashdot.org/story/26/03/11/2140227/researchers-discover-14000-routers-wrangled-into-never-before-seen-botnet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Researchers Discover 14,000 Routers Wrangled Into Never-Before-Seen Botnet](https://it.slashdot.org/story/26/03/11/2140227/researchers-discover-14000-routers-wrangled-into-never-before-seen-botnet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-11, 22:16:55](https://lobste.rs/s/6lqnhh/lobsters_interview_with_ngoldbaum) - [Lobsters Interview with ngoldbaum](https://alexalejandre.com/programming/interview-with-ngoldbaum/)
* [2026-03-11, 22:00:00](https://games.slashdot.org/story/26/03/11/2132256/microsofts-xbox-mode-is-coming-to-every-windows-11-pc?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft&apos;s &apos;Xbox Mode&apos; Is Coming To Every Windows 11 PC](https://games.slashdot.org/story/26/03/11/2132256/microsofts-xbox-mode-is-coming-to-every-windows-11-pc?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-11, 21:25:23](https://lobste.rs/s/wxk0ka/on_need_for_understanding) - [On The Need For Understanding](https://blog.information-superhighway.net/on-the-need-for-understanding)
* [2026-03-11, 18:54:00](https://soylentnews.org/article.pl?sid=26/03/11/0441214&amp;from=rss) - [An Unexpected Discovery Just Uncovered Metals Tech Companies Are Desperate for](https://soylentnews.org/article.pl?sid=26/03/11/0441214&amp;from=rss)
* [2026-03-11, 18:06:57](https://lobste.rs/s/vb7ipx/my_postgresql_database_got_nuked_lol) - [My PostgreSQL database got nuked lol](https://akselmo.dev/posts/they-broke-my-server/)
* [2026-03-11, 18:04:41](https://lobste.rs/s/vjsm2q/go_fix_inline_source_level_inliner) - [//go:fix inline and the source-level inliner](https://go.dev/blog/inliner)
* [2026-03-11, 16:00:20](https://lobste.rs/s/bunmdv/faster_asin_was_hiding_plain_sight) - [Faster asin() Was Hiding In Plain Sight](https://16bpp.net/blog/post/faster-asin-was-hiding-in-plain-sight/)
* [2026-03-11, 14:03:00](https://soylentnews.org/article.pl?sid=26/03/09/1454227&amp;from=rss) - [Trump Gets Data Center Companies to Pledge to Pay for Power Generation](https://soylentnews.org/article.pl?sid=26/03/09/1454227&amp;from=rss)
* [2026-03-11, 13:59:37](https://lobste.rs/s/eu5uiz/fully_snapshotable_wasm_interpreter) - [A fully snapshotable Wasm interpreter](https://github.com/friendlymatthew/gabagool?tab=readme-ov-file#gabagool)
* [2026-03-11, 09:17:00](https://soylentnews.org/article.pl?sid=26/03/09/1451208&amp;from=rss) - [The Cybertruck is More Explosive Than the Ford Pinto](https://soylentnews.org/article.pl?sid=26/03/09/1451208&amp;from=rss)
* [2026-03-11, 04:32:00](https://soylentnews.org/article.pl?sid=26/03/09/096203&amp;from=rss) - [Ancient Clay Hidden Under Japan Caused Rupture That Triggered the 2011 Earthquake and Tsunami](https://soylentnews.org/article.pl?sid=26/03/09/096203&amp;from=rss)
* [2026-03-10, 23:43:00](https://soylentnews.org/article.pl?sid=26/03/09/094202&amp;from=rss) - [Norwegian Gov&apos;t Consumer Watchdog Calls Out ‘Enshittification’ of Video Games, Connected Devices](https://soylentnews.org/article.pl?sid=26/03/09/094202&amp;from=rss)
* [2026-03-10, 18:57:00](https://soylentnews.org/article.pl?sid=26/03/09/0859227&amp;from=rss) - [The Slow Death of the Power User](https://soylentnews.org/article.pl?sid=26/03/09/0859227&amp;from=rss)
* [2026-03-10, 14:10:00](https://soylentnews.org/article.pl?sid=26/03/08/1511250&amp;from=rss) - [Indigenous Peoples in the Amazon and Australia Share Some Ancestry](https://soylentnews.org/article.pl?sid=26/03/08/1511250&amp;from=rss)
* [2026-03-10, 09:29:00](https://soylentnews.org/article.pl?sid=26/03/08/1510201&amp;from=rss) - [In 1985 Maxell Built a Bunch of Life-Size Robots for its Bad Floppy Ad](https://soylentnews.org/article.pl?sid=26/03/08/1510201&amp;from=rss)
* [2026-03-10, 06:02:27](https://news.ycombinator.com/item?id=47319539) - [DDR4 Sdram – Initialization, Training and Calibration](https://www.systemverilog.io/design/ddr4-initialization-and-calibration/)
* [2026-03-10, 04:47:00](https://soylentnews.org/article.pl?sid=26/03/08/157253&amp;from=rss) - [Sam Altman Wonders: Should the Government Nationalize AGI?](https://soylentnews.org/article.pl?sid=26/03/08/157253&amp;from=rss)
* [2026-03-10, 00:02:00](https://soylentnews.org/article.pl?sid=26/03/08/154256&amp;from=rss) - [Charter Gets FCC Permission to Buy Cox and Become Largest ISP in the US](https://soylentnews.org/article.pl?sid=26/03/08/154256&amp;from=rss)
* [2026-03-09, 19:20:00](https://soylentnews.org/article.pl?sid=26/03/08/1456250&amp;from=rss) - [The New European Office Suite is a Private, Open-Source Alternative](https://soylentnews.org/article.pl?sid=26/03/08/1456250&amp;from=rss)
* [2026-03-09, 17:28:34](https://news.ycombinator.com/item?id=47312226) - [The Cost of Indirection in Rust](https://blog.sebastiansastre.co/posts/cost-of-indirection-in-rust/)
* [2026-03-09, 14:54:31](https://news.ycombinator.com/item?id=47309940) - [Understanding the Go Runtime: The Scheduler](https://internals-for-interns.com/posts/go-runtime-scheduler/)
* [2026-03-09, 14:35:00](https://soylentnews.org/article.pl?sid=26/03/08/1446203&amp;from=rss) - [Time Zones vs. Mean Solar Time](https://soylentnews.org/article.pl?sid=26/03/08/1446203&amp;from=rss)
* [2026-03-09, 09:52:00](https://soylentnews.org/article.pl?sid=26/03/07/1635228&amp;from=rss) - [Claude Code Deletes Developers&apos; Production Setup, Including its Database and Snapshots](https://soylentnews.org/article.pl?sid=26/03/07/1635228&amp;from=rss)
* [2026-03-09, 05:10:00](https://soylentnews.org/article.pl?sid=26/03/07/1632227&amp;from=rss) - [Open Source Registries Don&apos;t Have Enough Money to Implement Basic Security](https://soylentnews.org/article.pl?sid=26/03/07/1632227&amp;from=rss)
* [2026-03-09, 00:24:00](https://soylentnews.org/article.pl?sid=26/03/07/1629233&amp;from=rss) - [Roundup:  OS-level Age Verification Laws](https://soylentnews.org/article.pl?sid=26/03/07/1629233&amp;from=rss)
* [2026-03-09, 00:00:05](https://news.ycombinator.com/item?id=47303044) - [NASA&apos;s DART spacecraft changed an asteroid&apos;s orbit around the sun](https://www.sciencenews.org/article/spacecraft-changed-asteroid-orbit-nasa)
