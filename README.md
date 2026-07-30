# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [OpenJDK Interim Policy on Generative AI](https://openjdk.org/legal/ai) (discusses the evolving policy on generative AI within OpenJDK and its implications for open-source development) [Comments](https://news.ycombinator.com/item?id=49109165)

* [GCC steering committee announces AI policy](https://lwn.net/Articles/1086041/) (explores new AI-related policies adopted by the GCC steering committee) [Comments](https://news.ycombinator.com/item?id=49108685)

* [Logic for Programmers](https://logicforprogrammers.com/) (an introduction and resource for programmers interested in exploring logic) [Comments](https://lobste.rs/s/l03yv1/logic_for_programmers)

* [Why Don&apos;t People Use Formal Methods?](https://www.hillelwayne.com/post/why-dont-people-use-formal-methods/) (an article investigating why formal methods haven’t been adopted widely in software development) [Comments](https://news.ycombinator.com/item?id=49109026)

* [Building Progressively Enhanced Forms Using htmx](https://www.rafa.ee/articles/progressive-enhanced-forms-htmx/) (guide on improving forms with htmx for better progressive enhancement) [Comments](https://lobste.rs/s/4bvpqh/building_progressively_enhanced_forms)

* [What it means for an API to be RESTful](https://en.andros.dev/blog/9761fd2e/what-it-means-for-an-api-to-be-restful/) (discussion on the principles and implementation of RESTful APIs) [Comments](https://news.ycombinator.com/item?id=49108966)

* [CosmosEscape: Taking over Every Database in Azure Cosmos DB](https://www.wiz.io/blog/cosmosescape-taking-over-every-database-in-azure-cosmos-db) (security analysis on a potentially devastating vulnerability in Azure's Cosmos DB) [Comments](https://news.ycombinator.com/item?id=49108963)

* [PCI formalization in AI](https://github.com/YoanWai/agent-manager) (details about a Tmux-based text interface for managing code-related AI systems which include tools like Codex) [Comments](https://news.ycombinator.com/item?id=49107749)

## Science and Exploration

* [Signals Are Grim for Jodrell Bank Observatory After UK Science Funding Decision](https://soylentnews.org/article.pl?sid=26/07/29/0711249&amp;from=rss) (an in-depth look into potential funding challenges facing a renowned observatory) [Comments](https://soylentnews.org/article.pl?sid=26/07/29/0711249&amp;from=rss)

* [Astronomers Found the First Atmosphere on a Planet in Another Star&apos;s Habitable Zone](https://soylentnews.org/article.pl?sid=26/07/25/2045217&amp;from=rss) (scientists discover an atmospheric layer in an extrasolar planet’s habitable zone) [Comments](https://soylentnews.org/article.pl?sid=26/07/25/2045217&amp;from=rss)

## Unusual Developments and Legal Cases

* [Comcast Store Punished Low Sales By Smashing Pies In Workers&apos; Faces, Lawsuit Claims](https://yro.slashdot.org/story/26/07/30/0031205/comcast-store-punished-low-sales-by-smashing-pies-in-workers-faces-lawsuit-claims?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) (examines unsettling labor practices at a Comcast store) [Comments](https://yro.slashdot.org/story/26/07/30/0031205/comcast-store-punished-low-sales-by-smashing-pies-in-workers-faces-lawsuit-claims?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Activist Charged With Felony After Giving Border Agent “Duress Code” That Wiped His Phone](https://soylentnews.org/article.pl?sid=26/07/28/1933258&amp;from=rss) (story of a unique case involving privacy actions against a border agent) [Comments](https://soylentnews.org/article.pl?sid=26/07/28/1933258&amp;from=rss)

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

* [2026-07-30, 13:07:53](https://news.ycombinator.com/item?id=49109474) - [RFC 8890 – The Internet is for End Users (2020)](https://mnot.net/blog/2020/for_the_users)
* [2026-07-30, 13:03:27](https://news.ycombinator.com/item?id=49109440) - [&apos;VPNs are lawful technical tools,&apos; says EU Court in landmark copyright ruling](https://remysharp.com/links/2026-07-23-35890312)
* [2026-07-30, 12:38:51](https://news.ycombinator.com/item?id=49109193) - [Why Is Everyone Trying to Build a Solid-State Battery?](https://www.construction-physics.com/p/why-is-everyone-trying-to-build-a)
* [2026-07-30, 12:36:38](https://news.ycombinator.com/item?id=49109165) - [OpenJDK Interim Policy on Generative AI](https://openjdk.org/legal/ai)
* [2026-07-30, 12:24:16](https://lobste.rs/s/l03yv1/logic_for_programmers) - [Logic for Programmers](https://logicforprogrammers.com/)
* [2026-07-30, 12:21:34](https://news.ycombinator.com/item?id=49109026) - [Why Don&apos;t People Use Formal Methods?](https://www.hillelwayne.com/post/why-dont-people-use-formal-methods/)
* [2026-07-30, 12:17:01](https://lobste.rs/s/4bvpqh/building_progressively_enhanced_forms) - [Building Progressively Enhanced Forms Using htmx](https://www.rafa.ee/articles/progressive-enhanced-forms-htmx/)
* [2026-07-30, 12:14:23](https://news.ycombinator.com/item?id=49108971) - [How Old Is Ann?](https://quuxplusone.github.io/blog/2026/07/29/how-old-is-ann/)
* [2026-07-30, 12:13:46](https://news.ycombinator.com/item?id=49108966) - [What it means for an API to be RESTful](https://en.andros.dev/blog/9761fd2e/what-it-means-for-an-api-to-be-restful/)
* [2026-07-30, 12:13:42](https://news.ycombinator.com/item?id=49108963) - [CosmosEscape: Taking over Every Database in Azure Cosmos DB](https://www.wiz.io/blog/cosmosescape-taking-over-every-database-in-azure-cosmos-db)
* [2026-07-30, 12:01:05](https://news.ycombinator.com/item?id=49108840) - [Mbodi AI (YC P25) Is Hiring Robotics/Research Engineers](https://www.ycombinator.com/companies/mbodi-ai/jobs)
* [2026-07-30, 11:55:39](https://news.ycombinator.com/item?id=49108778) - [Go LLM SDK for streaming, tool-calling AI backends (plus frontend React lib)](https://github.com/grafana/ai-sdk)
* [2026-07-30, 11:45:44](https://news.ycombinator.com/item?id=49108685) - [GCC steering committee announces AI policy](https://lwn.net/Articles/1086041/)
* [2026-07-30, 11:33:02](https://news.ycombinator.com/item?id=49108571) - [I made a game where you build a CPU from logic gates](https://select.supply/game/chipbuilder)
* [2026-07-30, 11:30:34](https://news.ycombinator.com/item?id=49108556) - [ChatGPT, Roblox to Fall Under Strictest EU Rules for Platforms](https://www.bloomberg.com/news/articles/2026-07-29/chatgpt-roblox-to-fall-under-strictest-eu-rules-for-platforms)
* [2026-07-30, 11:00:00](https://yro.slashdot.org/story/26/07/30/0031205/comcast-store-punished-low-sales-by-smashing-pies-in-workers-faces-lawsuit-claims?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Comcast Store Punished Low Sales By Smashing Pies In Workers&apos; Faces, Lawsuit Claims](https://yro.slashdot.org/story/26/07/30/0031205/comcast-store-punished-low-sales-by-smashing-pies-in-workers-faces-lawsuit-claims?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-30, 10:32:41](https://news.ycombinator.com/item?id=49108048) - [Gpiozero Flow](https://bennuttall.com/blog/2026/07/gpiozero-flow/)
* [2026-07-30, 10:13:46](https://news.ycombinator.com/item?id=49107950) - [Google will expand age checks on Android worldwide till the end of the year](https://android-developers.googleblog.com/2026/07/google-play-age-signals-api-safer-experiences.html)
* [2026-07-30, 09:48:00](https://soylentnews.org/article.pl?sid=26/07/29/0716213&amp;from=rss) - [Covertly Transmitting Data From Air-Gapped Systems Via Video Cable Emissions](https://soylentnews.org/article.pl?sid=26/07/29/0716213&amp;from=rss)
* [2026-07-30, 09:34:27](https://news.ycombinator.com/item?id=49107749) - [Agent-Manager: A Tmux TUI for Running Claude Code, Codex and OpenCode](https://github.com/YoanWai/agent-manager)
* [2026-07-30, 09:28:01](https://news.ycombinator.com/item?id=49107713) - [Carolina Cloud pays SOFR on unused prepaid credits](https://docs.carolinacloud.io/organizations/prepaid-interest/)
* [2026-07-30, 08:44:30](https://news.ycombinator.com/item?id=49107437) - [The Apple Calculator Language](https://wadetregaskis.com/the-apple-calculator-language/)
* [2026-07-30, 08:10:33](https://news.ycombinator.com/item?id=49107246) - [Ron Gilbert started production on Thimbleweed Park 2](https://www.grumpygamer.com/twp2_announce/)
* [2026-07-30, 07:52:39](https://lobste.rs/s/zk0qqe/deskhop_fast_desktop_switching_device) - [deskhop: Fast Desktop Switching Device](https://github.com/hrvach/deskhop)
* [2026-07-30, 07:00:00](https://tech.slashdot.org/story/26/07/30/0022247/qantas-plane-flies-for-more-than-24-hours-in-record-breaking-flight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Qantas Plane Flies For More Than 24 Hours In Record-Breaking Flight](https://tech.slashdot.org/story/26/07/30/0022247/qantas-plane-flies-for-more-than-24-hours-in-record-breaking-flight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-30, 05:03:00](https://soylentnews.org/article.pl?sid=26/07/29/0711249&amp;from=rss) - [Signals Are Grim for Jodrell Bank Observatory After UK Science Funding Decision](https://soylentnews.org/article.pl?sid=26/07/29/0711249&amp;from=rss)
* [2026-07-30, 03:47:26](https://lobste.rs/s/ba2yfy/c_float_int_conversion_can_be_undefined) - [C++ float-to-int conversion can be undefined behavior](https://kttnr.net/blog/cpp-float-to-int-conversion-undefined-behavior/)
* [2026-07-30, 03:42:59](https://lobste.rs/s/hkemqm/difference_between_button_link) - [The Difference Between a Button and a Link](https://unplannedobsolescence.com/blog/buttons-vs-links/)
* [2026-07-30, 03:30:00](https://news.slashdot.org/story/26/07/29/2213243/ai-companies-are-recruiting-electricians-and-carpenters-by-the-thousands?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Companies Are Recruiting Electricians and Carpenters By the Thousands](https://news.slashdot.org/story/26/07/29/2213243/ai-companies-are-recruiting-electricians-and-carpenters-by-the-thousands?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-30, 01:40:31](https://lobste.rs/s/mbk56v/what_side_projects_have_you_enjoyed_most) - [What side projects have you enjoyed the most?](https://lobste.rs/s/mbk56v/what_side_projects_have_you_enjoyed_most)
* [2026-07-30, 00:15:00](https://soylentnews.org/article.pl?sid=26/07/29/078223&amp;from=rss) - [Librarians Are Hosting Viral &apos;Avoiding AI&apos; Workshops for People Who Are Fed Up With Big Tech](https://soylentnews.org/article.pl?sid=26/07/29/078223&amp;from=rss)
* [2026-07-30, 00:00:00](https://hardware.slashdot.org/story/26/07/29/2152220/who-wins-and-who-loses-after-us-bans-foreign-robots?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Who Wins and Who Loses After US Bans Foreign Robots?](https://hardware.slashdot.org/story/26/07/29/2152220/who-wins-and-who-loses-after-us-bans-foreign-robots?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-29, 23:18:11](https://news.ycombinator.com/item?id=49104335) - [The Productivity Mirage](https://frantic.im/mirage/)
* [2026-07-29, 23:00:00](https://news.slashdot.org/story/26/07/29/2140215/valve-sponsors-work-bringing-open-source-radv-driver-to-windows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Valve Sponsors Work Bringing Open-Source RADV Driver To Windows](https://news.slashdot.org/story/26/07/29/2140215/valve-sponsors-work-bringing-open-source-radv-driver-to-windows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-29, 22:51:03](https://news.ycombinator.com/item?id=49104117) - [LLM Honeypot](https://llm2human.pages.dev/)
* [2026-07-29, 22:00:00](https://tech.slashdot.org/story/26/07/29/2053245/google-shuts-down-its-nobel-prize-winning-alphafold-project?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Shuts Down Its Nobel-Prize Winning AlphaFold Project](https://tech.slashdot.org/story/26/07/29/2053245/google-shuts-down-its-nobel-prize-winning-alphafold-project?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-29, 21:25:40](https://news.ycombinator.com/item?id=49103285) - [AI&apos;s top startups are barely publishing their research](https://www.science.org/content/article/ai-s-top-startups-are-barely-publishing-their-research)
* [2026-07-29, 21:06:42](https://news.ycombinator.com/item?id=49103089) - [The Cold Email](https://zachholman.com/posts/cold-email)
* [2026-07-29, 21:00:00](https://slashdot.org/story/26/07/29/2047205/claude-opus-5-became-downright-ruthless-when-tasked-with-running-a-vending-machine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Claude Opus 5 Became Downright Ruthless When Tasked With Running a Vending Machine](https://slashdot.org/story/26/07/29/2047205/claude-opus-5-became-downright-ruthless-when-tasked-with-running-a-vending-machine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-29, 20:39:40](https://news.ycombinator.com/item?id=49102774) - [The coolest use for the Vision Pro](https://christianselig.com/2026/07/vision-pro-house/)
* [2026-07-29, 20:22:39](https://lobste.rs/s/rulynz/strain_your_brain) - [The strain in your brain](https://anirudh.fi/strain)
* [2026-07-29, 20:00:00](https://hardware.slashdot.org/story/26/07/29/1826214/nextera-brookfield-to-build-100-billion-kentucky-data-campus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NextEra, Brookfield to Build $100 Billion Kentucky Data Campus](https://hardware.slashdot.org/story/26/07/29/1826214/nextera-brookfield-to-build-100-billion-kentucky-data-campus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-29, 19:29:00](https://soylentnews.org/article.pl?sid=26/07/29/0621219&amp;from=rss) - [Your Shared Claude Chats Were Being Quietly Published on Google](https://soylentnews.org/article.pl?sid=26/07/29/0621219&amp;from=rss)
* [2026-07-29, 19:00:00](https://slashdot.org/story/26/07/29/181218/doordash-is-building-its-own-drone-delivery-business?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DoorDash Is Building Its Own Drone Delivery Business](https://slashdot.org/story/26/07/29/181218/doordash-is-building-its-own-drone-delivery-business?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-29, 18:11:44](https://lobste.rs/s/l3sj7g/first_cheriot_silicon) - [First CHERIoT Silicon](https://cheriot.org/silicon/2026/03/04/cheriot-first-silicon.html)
* [2026-07-29, 18:00:00](https://yro.slashdot.org/story/26/07/29/1752235/russia-charges-telegram-founder-durov-with-facilitating-terrorism?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Russia Charges Telegram Founder Durov With Facilitating Terrorism](https://yro.slashdot.org/story/26/07/29/1752235/russia-charges-telegram-founder-durov-with-facilitating-terrorism?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-29, 16:36:59](https://news.ycombinator.com/item?id=49099715) - [Keychron announces first open-source firmware for gaming mice](https://www.digitalfoundry.net/news/2026/07/keychron-announces-first-open-source-firmware-for-gaming-mice)
* [2026-07-29, 16:26:11](https://lobste.rs/s/1efcss/setting_timers_simple_games_feat_frame) - [Setting timers in simple games (feat. the frame rule)](https://lynn.github.io/blog/pico-timers/)
* [2026-07-29, 16:14:46](https://lobste.rs/s/jisg7l/const_cast_necessary_evil) - [const_cast: A Necessary Evil](https://www.elbeno.com/blog/?p=1858)
* [2026-07-29, 16:00:00](https://it.slashdot.org/story/26/07/29/0517201/openais-rogue-ai-agent-hacked-more-than-just-hugging-face?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI&apos;s Rogue AI Agent Hacked More Than Just Hugging Face](https://it.slashdot.org/story/26/07/29/0517201/openais-rogue-ai-agent-hacked-more-than-just-hugging-face?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-29, 14:54:30](https://lobste.rs/s/s78pit/basebrowserproject) - [basebrowserproject](https://mastodon.social/@sarahjamielewis/116965925134524215)
* [2026-07-29, 14:36:00](https://soylentnews.org/article.pl?sid=26/07/29/0617214&amp;from=rss) - [Microsoft responds to LG monitors installing McAfee ads on Windows](https://soylentnews.org/article.pl?sid=26/07/29/0617214&amp;from=rss)
* [2026-07-29, 14:28:50](https://lobste.rs/s/g9bkak/some_notes_about_anthropic_s_new_results) - [Some notes about Anthropic’s new results](https://blog.cryptographyengineering.com/2026/07/29/some-notes-about-anthropics-new-results/)
* [2026-07-29, 14:24:20](https://lobste.rs/s/odojje/flycheck_38_might_magic) - [Flycheck 38: Might &amp; Magic](https://emacsredux.com/blog/2026/07/29/flycheck-38/)
* [2026-07-29, 13:42:44](https://lobste.rs/s/r9zgni/field_day_for_gleam_s_language_server) - [A field day for Gleam’s language server | Gleam v.1.18.0 release](https://gleam.run/news/a-field-day-for-gleams-language-server/)
* [2026-07-29, 13:25:07](https://lobste.rs/s/vjelns/postgresql_mvcc_tradeoffs_compared) - [PostgreSQL MVCC: tradeoffs compared to other engines](https://boringsql.com/posts/mvcc-bad-bad/)
* [2026-07-29, 13:22:18](https://lobste.rs/s/ozules/overengineered_calculator_zig_qbe) - [Overengineered calculator: Zig + QBE](https://tomekw.com/overengineered-calculator-zig-qbe/)
* [2026-07-29, 13:12:17](https://lobste.rs/s/w1va9j/it_doesn_t_matter_whether_matz_is_nice) - [It doesn’t matter whether “Matz is nice”](https://po-ru.com/2026/07/29/it-doesnt-matter-whether-matz-is-nice)
* [2026-07-29, 13:00:44](https://lobste.rs/s/5z7akz/gnu_hyperbole_implicit_buttons_build) - [GNU Hyperbole Implicit Buttons: Build your Hyperverse](https://www.chiply.dev/post-hyperbole-implicit-buttons)
* [2026-07-29, 13:00:00](https://it.slashdot.org/story/26/07/29/057255/more-than-30-minnesota-water-systems-targeted-in-cyberattack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [More Than 30 Minnesota Water Systems Targeted In Cyberattack](https://it.slashdot.org/story/26/07/29/057255/more-than-30-minnesota-water-systems-targeted-in-cyberattack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-29, 12:35:26](https://lobste.rs/s/hrhb42/dark_night_mathematics) - [The Dark Night of Mathematics](https://kirwinhampshire.substack.com/p/the-dark-night-of-mathematics)
* [2026-07-29, 10:42:50](https://lobste.rs/s/xi6azw/ai_mania_is_eviscerating_global_decision) - [AI Mania Is Eviscerating Global Decision-Making](https://hermit-tech.com/blog/ai-mania-is-eviscerating-global-decisionmaking)
* [2026-07-29, 09:51:00](https://soylentnews.org/article.pl?sid=26/07/28/1936202&amp;from=rss) - [Sony&apos;s Decision to Ditch Discs Was Practically Inevitable, Data Shows](https://soylentnews.org/article.pl?sid=26/07/28/1936202&amp;from=rss)
* [2026-07-29, 09:00:00](https://science.slashdot.org/story/26/07/29/0455211/your-brain-can-rewire-itself-to-allow-true-multitasking?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Your Brain Can Rewire Itself To Allow True Multitasking](https://science.slashdot.org/story/26/07/29/0455211/your-brain-can-rewire-itself-to-allow-true-multitasking?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-29, 08:07:13](https://lobste.rs/s/csff09/user_interfaces_demo_scene) - [User Interfaces of the Demo Scene](https://datagubbe.se/scenegui/)
* [2026-07-29, 05:30:00](https://hardware.slashdot.org/story/26/07/29/0441240/trump-administration-bans-new-chinese-humanoid-robots?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Administration Bans New Chinese Humanoid Robots](https://hardware.slashdot.org/story/26/07/29/0441240/trump-administration-bans-new-chinese-humanoid-robots?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-29, 05:14:46](https://lobste.rs/s/ax6col/writing_toy_software_is_joy_2025) - [Writing Toy Software Is A Joy (2025)](https://blog.jsbarretto.com/post/software-is-joy)
* [2026-07-29, 05:04:00](https://soylentnews.org/article.pl?sid=26/07/28/1933258&amp;from=rss) - [Activist Charged With Felony After Giving Border Agent “Duress Code” That Wiped His Phone](https://soylentnews.org/article.pl?sid=26/07/28/1933258&amp;from=rss)
* [2026-07-29, 04:44:39](https://lobste.rs/s/c9xa6h/manganin_tools_matter) - [Manganin: tools matter](https://blog.manganin.dev/blog/tools-matter/)
* [2026-07-29, 03:30:00](https://news.slashdot.org/story/26/07/28/2242250/workplaces-look-for-cheaper-ai-as-tokenmaxxing-fades-as-a-corporate-fad?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Workplaces Look For Cheaper AI As &apos;Tokenmaxxing&apos; Fades As a Corporate Fad](https://news.slashdot.org/story/26/07/28/2242250/workplaces-look-for-cheaper-ai-as-tokenmaxxing-fades-as-a-corporate-fad?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-29, 00:19:00](https://soylentnews.org/article.pl?sid=26/07/28/1925225&amp;from=rss) - [JWST Just Examined Two Stars Suspected of Harboring Dyson Spheres](https://soylentnews.org/article.pl?sid=26/07/28/1925225&amp;from=rss)
* [2026-07-28, 21:16:29](https://lobste.rs/s/vnh6b2/why_rocq_is_better_than_lean_for_program) - [Why Rocq is better than Lean for program verification](https://joomy.korkutblech.com/posts/2026-07-28-why-rocq-is-better.html)
* [2026-07-28, 20:29:03](https://news.ycombinator.com/item?id=49089502) - [Azulejo](https://en.wikipedia.org/wiki/Azulejo)
* [2026-07-28, 20:28:33](https://news.ycombinator.com/item?id=49089500) - [Anatomy of a Frontier Lab Agent Intrusion: A Timeline of the July 2026 Incident](https://huggingface.co/blog/agent-intrusion-technical-timeline)
* [2026-07-28, 19:34:00](https://soylentnews.org/article.pl?sid=26/07/27/0445232&amp;from=rss) - [Google Breaks Alibaba’s Record For Europe’s Largest DMA Fine](https://soylentnews.org/article.pl?sid=26/07/27/0445232&amp;from=rss)
* [2026-07-28, 14:52:00](https://soylentnews.org/article.pl?sid=26/07/27/0440212&amp;from=rss) - [The Fight Against AI Data Centers is Important – but It&apos;s Just a Starting Point](https://soylentnews.org/article.pl?sid=26/07/27/0440212&amp;from=rss)
* [2026-07-28, 14:14:06](https://lobste.rs/s/rmzzdb/inside_zig_s_incremental_compilation) - [Inside Zig&apos;s Incremental Compilation](https://mlugg.co.uk/posts/incremental-compilation-internals/)
* [2026-07-28, 10:05:00](https://soylentnews.org/article.pl?sid=26/07/27/0428208&amp;from=rss) - [South Korea Making its Own Security-Centric AI Model](https://soylentnews.org/article.pl?sid=26/07/27/0428208&amp;from=rss)
* [2026-07-28, 05:24:00](https://soylentnews.org/article.pl?sid=26/07/26/2115230&amp;from=rss) - [If You&apos;re Reading This, You&apos;re Probably an AI Bot](https://soylentnews.org/article.pl?sid=26/07/26/2115230&amp;from=rss)
* [2026-07-28, 00:38:00](https://soylentnews.org/article.pl?sid=26/07/26/1939241&amp;from=rss) - [China Advances Plans For National Single-Stack IPv6 Network, And Its Surveillance-Friendly Version](https://soylentnews.org/article.pl?sid=26/07/26/1939241&amp;from=rss)
* [2026-07-27, 19:55:00](https://soylentnews.org/article.pl?sid=26/07/26/1934211&amp;from=rss) - [When Your Vehicle Outlives its Cloud: What Happens Next?](https://soylentnews.org/article.pl?sid=26/07/26/1934211&amp;from=rss)
* [2026-07-27, 15:09:00](https://soylentnews.org/article.pl?sid=26/07/26/1927253&amp;from=rss) - [Firefox Containers Preview: Introducing Native Containers in Firefox 153 ](https://soylentnews.org/article.pl?sid=26/07/26/1927253&amp;from=rss)
* [2026-07-27, 14:18:23](https://news.ycombinator.com/item?id=49070073) - [The Glass Famine](https://edconway.substack.com/p/the-glass-famine)
* [2026-07-27, 10:23:00](https://soylentnews.org/article.pl?sid=26/07/26/1920201&amp;from=rss) - [Google Just Had Its First Negative Cash Flow Quarter Due To Massive AI Spending](https://soylentnews.org/article.pl?sid=26/07/26/1920201&amp;from=rss)
* [2026-07-27, 06:38:54](https://news.ycombinator.com/item?id=49065874) - [Concurrency, interactivity, mutability, choose two](https://www.n16f.net/blog/concurrency-interactivity-mutability-choose-two/)
* [2026-07-27, 05:38:00](https://soylentnews.org/article.pl?sid=26/07/26/041247&amp;from=rss) - [Orange-Lipped Monkey That Roars and Snorts Deep in Congo Rainforest is New Species to Science](https://soylentnews.org/article.pl?sid=26/07/26/041247&amp;from=rss)
* [2026-07-27, 00:52:00](https://soylentnews.org/article.pl?sid=26/07/26/0345250&amp;from=rss) - [GitHub Slashes Public Bug Bounty Payouts as AI Report Flood Buries its Security Team](https://soylentnews.org/article.pl?sid=26/07/26/0345250&amp;from=rss)
* [2026-07-26, 20:06:00](https://soylentnews.org/article.pl?sid=26/07/26/0337236&amp;from=rss) - [India&apos;s First Privately Developed Rocket Reaches Orbit on Dramatic Debut Launch](https://soylentnews.org/article.pl?sid=26/07/26/0337236&amp;from=rss)
* [2026-07-26, 15:19:00](https://soylentnews.org/article.pl?sid=26/07/25/2052238&amp;from=rss) - [The ACLU is Arming Lawyers to Expose State Surveillance Secrets](https://soylentnews.org/article.pl?sid=26/07/25/2052238&amp;from=rss)
* [2026-07-26, 11:46:32](https://news.ycombinator.com/item?id=49057130) - [The first watch featuring computer functions](https://by.seiko-design.com/140th/en/topic/58.html)
* [2026-07-26, 10:35:00](https://soylentnews.org/article.pl?sid=26/07/25/2048246&amp;from=rss) - [Your Cookware Got Worse on Purpose](https://soylentnews.org/article.pl?sid=26/07/25/2048246&amp;from=rss)
* [2026-07-26, 05:43:00](https://soylentnews.org/article.pl?sid=26/07/25/2045217&amp;from=rss) - [Astronomers Found the First Atmosphere on a Planet in Another Star&apos;s Habitable Zone](https://soylentnews.org/article.pl?sid=26/07/25/2045217&amp;from=rss)
* [2026-07-26, 01:00:00](https://soylentnews.org/article.pl?sid=26/07/25/2042256&amp;from=rss) - [MIT to Become Hotbed of AI Video Surveillance](https://soylentnews.org/article.pl?sid=26/07/25/2042256&amp;from=rss)
