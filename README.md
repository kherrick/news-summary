# [News Summary](https://kherrick.github.io/news-summary/)

## Advances in Artificial Intelligence

* [OpenAI Launches $4.6 Budget AI Subscription Tier in India](https://slashdot.org/story/25/08/19/0333218/openai-launches-46-budget-ai-subscription-tier-in-india?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://slashdot.org/story/25/08/19/0333218/openai-launches-46-budget-ai-subscription-tier-in-india?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [AI is a mass-delusion event](https://www.theatlantic.com/technology/archive/2025/08/ai-mass-delusion-event/683909/) ([Comments](https://lobste.rs/s/y7gw78/ai_is_mass_delusion_event))

## Scientific and Technological Breakthroughs

* [Scientists 3D Print Inside a Living Cell](https://soylentnews.org/article.pl?sid=25/08/18/126258&amp;from=rss) ([Comments](https://soylentnews.org/article.pl?sid=25/08/18/126258&amp;from=rss))

* [Croatian freediver held breath for 29 minutes](https://divernet.com/scuba-news/freediving/how-croatian-freediver-held-breath-for-29-minutes/) ([Comments](https://news.ycombinator.com/item?id=44946762))

## Legal and Regulatory News

* [US FTC Sues Ticket Reseller For Evading Taylor Swift's Eras Tour Ticket Limits](https://news.slashdot.org/story/25/08/19/0716252/us-ftc-sues-ticket-reseller-for-evading-taylor-swifts-eras-tour-ticket-limits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://news.slashdot.org/story/25/08/19/0716252/us-ftc-sues-ticket-reseller-for-evading-taylor-swifts-eras-tour-ticket-limits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Wikipedia Loses Challenge Against Online Safety Act, but the Door is Open for a Challenge](https://soylentnews.org/article.pl?sid=25/08/18/122222&amp;from=rss) ([Comments](https://soylentnews.org/article.pl?sid=25/08/18/122222&amp;from=rss))

## Open Source and Programming Innovations

* [OpenMower – An open source lawn mower](https://github.com/ClemensElflein/OpenMower) ([Comments](https://news.ycombinator.com/item?id=44946996))

* [Why developers question everything](https://timharek.no/blog/why-developers-question-everything/) ([Comments](https://lobste.rs/s/bibyfi/why_developers_question_everything))

## Cultural and Societal Insights

* [The peculiar case of Japanese web design](https://sabrinas.space) ([Comments](https://lobste.rs/s/t5ygt3/peculiar_case_japanese_web_design))

* [Why Did Hollywood Stop Making Comedies? A Statistical Analysis](https://entertainment.slashdot.org/story/25/08/18/2333256/why-did-hollywood-stop-making-comedies-a-statistical-analysis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://entertainment.slashdot.org/story/25/08/18/2333256/why-did-hollywood-stop-making-comedies-a-statistical-analysis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

## Tech Privacy and Security

* [US Spy Chief Gabbard Says UK Agreed To Drop 'Backdoor' Mandate for Apple](https://apple.slashdot.org/story/25/08/19/0345252/us-spy-chief-gabbard-says-uk-agreed-to-drop-backdoor-mandate-for-apple?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://apple.slashdot.org/story/25/08/19/0345252/us-spy-chief-gabbard-says-uk-agreed-to-drop-backdoor-mandate-for-apple?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Intel Outside: Hacking every Intel employee and various internal websites](https://eaton-works.com/2025/08/18/intel-outside-hack/) ([Comments](https://lobste.rs/s/6cls8e/intel_outside_hacking_every_intel))

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

* [2025-08-19, 07:33:09](https://news.ycombinator.com/item?id=44949162) - [Prime Number Grid](https://susam.net/primegrid.html)
* [2025-08-19, 07:32:02](https://lobste.rs/s/dcw2ea/prime_number_grid) - [Prime Number Grid](https://susam.net/primegrid.html)
* [2025-08-19, 07:30:00](https://news.slashdot.org/story/25/08/19/0716252/us-ftc-sues-ticket-reseller-for-evading-taylor-swifts-eras-tour-ticket-limits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US FTC Sues Ticket Reseller For Evading Taylor Swift&apos;s Eras Tour Ticket Limits](https://news.slashdot.org/story/25/08/19/0716252/us-ftc-sues-ticket-reseller-for-evading-taylor-swifts-eras-tour-ticket-limits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-19, 07:05:00](https://soylentnews.org/article.pl?sid=25/08/18/126258&amp;from=rss) - [Scientists 3D Print Inside a Living Cell](https://soylentnews.org/article.pl?sid=25/08/18/126258&amp;from=rss)
* [2025-08-19, 06:46:57](https://lobste.rs/s/b30klp/sinking_itanic_free_ebook) - [The Sinking of the Itanic: free ebook](http://bitmason.blogspot.com/2024/02/the-sinking-of-itanic-free-ebook.html)
* [2025-08-19, 06:26:24](https://lobste.rs/s/3l009s/multimedia_renaissance) - [The Multimedia Renaissance](https://giannirosato.com/blog/post/the-multimedia-renaissance/)
* [2025-08-19, 04:49:35](https://news.ycombinator.com/item?id=44948352) - [How to Build a Medieval Castle](https://archaeology.org/issues/september-october-2025/features/how-to-build-a-medieval-castle/)
* [2025-08-19, 04:30:31](https://lobste.rs/s/ik0pjv/left_right_programming) - [Left to Right Programming](https://graic.net/p/left-to-right-programming)
* [2025-08-19, 04:30:00](https://apple.slashdot.org/story/25/08/19/0345252/us-spy-chief-gabbard-says-uk-agreed-to-drop-backdoor-mandate-for-apple?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Spy Chief Gabbard Says UK Agreed To Drop &apos;Backdoor&apos; Mandate for Apple](https://apple.slashdot.org/story/25/08/19/0345252/us-spy-chief-gabbard-says-uk-agreed-to-drop-backdoor-mandate-for-apple?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-19, 04:16:47](https://lobste.rs/s/kf5gi2/memory_filesystems_rust) - [In-memory Filesystems in Rust](https://andre.arko.net/2025/08/18/in-memory-filesystems-in-rust/)
* [2025-08-19, 04:08:59](https://lobste.rs/s/bibyfi/why_developers_question_everything) - [Why developers question everything](https://timharek.no/blog/why-developers-question-everything/)
* [2025-08-19, 03:33:00](https://slashdot.org/story/25/08/19/0333218/openai-launches-46-budget-ai-subscription-tier-in-india?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Launches $4.6 Budget AI Subscription Tier in India](https://slashdot.org/story/25/08/19/0333218/openai-launches-46-budget-ai-subscription-tier-in-india?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-19, 02:20:00](https://soylentnews.org/article.pl?sid=25/08/18/122222&amp;from=rss) - [Wikipedia Loses Challenge Against Online Safety Act, but the Door is Open for a Challenge](https://soylentnews.org/article.pl?sid=25/08/18/122222&amp;from=rss)
* [2025-08-19, 02:02:00](https://slashdot.org/story/25/08/18/2337225/intel-is-getting-a-2-billion-investment-from-softbank?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel is Getting a $2 Billion Investment From SoftBank](https://slashdot.org/story/25/08/18/2337225/intel-is-getting-a-2-billion-investment-from-softbank?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-19, 01:01:00](https://entertainment.slashdot.org/story/25/08/18/2333256/why-did-hollywood-stop-making-comedies-a-statistical-analysis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why Did Hollywood Stop Making Comedies? A Statistical Analysis](https://entertainment.slashdot.org/story/25/08/18/2333256/why-did-hollywood-stop-making-comedies-a-statistical-analysis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-19, 00:35:08](https://news.ycombinator.com/item?id=44946996) - [OpenMower – An open source lawn mower](https://github.com/ClemensElflein/OpenMower)
* [2025-08-19, 00:12:18](https://lobste.rs/s/y7gw78/ai_is_mass_delusion_event) - [AI is a mass-delusion event](https://www.theatlantic.com/technology/archive/2025/08/ai-mass-delusion-event/683909/)
* [2025-08-19, 00:12:17](https://news.ycombinator.com/item?id=44946813) - [A general Fortran code for solutions of problems in space mechanics [pdf]](https://jonathanadams.pro/blog-articles/Nasa-Fortran-Code-1963.pdf)
* [2025-08-19, 00:05:59](https://news.ycombinator.com/item?id=44946774) - [Ted Chiang: The Secret Third Thing](https://linch.substack.com/p/ted-chiang-review)
* [2025-08-19, 00:04:11](https://news.ycombinator.com/item?id=44946762) - [Croatian freediver held breath for 29 minutes](https://divernet.com/scuba-news/freediving/how-croatian-freediver-held-breath-for-29-minutes/)
* [2025-08-19, 00:01:00](https://slashdot.org/story/25/08/18/2330231/fujifilm-announces-second-us-price-increase-in-august?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fujifilm Announces Second US Price Increase in August](https://slashdot.org/story/25/08/18/2330231/fujifilm-announces-second-us-price-increase-in-august?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-18, 23:44:47](https://lobste.rs/s/t5ygt3/peculiar_case_japanese_web_design) - [The peculiar case of Japanese web design](https://sabrinas.space)
* [2025-08-18, 23:23:00](https://news.slashdot.org/story/25/08/18/2323214/how-can-england-possibly-be-running-out-of-water?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Can England Possibly Be Running Out of Water?](https://news.slashdot.org/story/25/08/18/2323214/how-can-england-possibly-be-running-out-of-water?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-18, 23:19:45](https://lobste.rs/s/bdwpyk/understanding_gnome_shell_s_focus) - [Understanding GNOME Shell’s focus stealing prevention](https://blogs.gnome.org/shell-dev/2024/09/20/understanding-gnome-shells-focus-stealing-prevention/)
* [2025-08-18, 22:52:37](https://lobste.rs/s/6cls8e/intel_outside_hacking_every_intel) - [Intel Outside: Hacking every Intel employee and various internal websites](https://eaton-works.com/2025/08/18/intel-outside-hack/)
* [2025-08-18, 22:27:01](https://news.ycombinator.com/item?id=44945943) - [Shamelessness as a strategy (2019)](https://nadia.xyz/shameless)
* [2025-08-18, 21:54:13](https://news.ycombinator.com/item?id=44945730) - [Newgrounds: Flash Forward 2025](https://www.newgrounds.com/bbs/topic/1542140)
* [2025-08-18, 21:50:15](https://lobste.rs/s/asfwb9/system_guide_five_sample_pc_builds_from) - [System Guide: Five sample PC builds, from $500 to $5,000](https://arstechnica.com/gadgets/2025/08/ars-technica-system-guide-back-to-pc-building-for-back-to-school/)
* [2025-08-18, 21:43:58](https://lobste.rs/s/8lti4g/google_is_killing_open_web) - [Google is killing the open web](https://wok.oblomov.eu/tecnologia/google-killing-open-web/)
* [2025-08-18, 21:37:54](https://lobste.rs/s/iyl4vu/phrack_72) - [Phrack 72](https://phrack.org/issues/72/1)
* [2025-08-18, 21:33:00](https://soylentnews.org/article.pl?sid=25/08/18/1144234&amp;from=rss) - [A Tale of Two Distros: One Outgoing and One Incoming](https://soylentnews.org/article.pl?sid=25/08/18/1144234&amp;from=rss)
* [2025-08-18, 21:31:49](https://news.ycombinator.com/item?id=44945562) - [Spice Data (YC S19) Is Hiring a Product Associate (New Grad)](https://www.ycombinator.com/companies/spice-data/jobs/RJz1peY-product-associate-new-grad)
* [2025-08-18, 21:28:05](https://news.ycombinator.com/item?id=44945532) - [Obsidian Bases](https://help.obsidian.md/bases)
* [2025-08-18, 21:01:40](https://lobste.rs/s/re6xka/using_nix_as_library) - [Using Nix as a library](https://fzakaria.com/2025/08/17/using-nix-as-a-library)
* [2025-08-18, 20:34:37](https://news.ycombinator.com/item?id=44945008) - [Tiny-tpu: A minimal tensor processing unit (TPU), inspired by Google&apos;s TPU](https://github.com/tiny-tpu-v2/tiny-tpu)
* [2025-08-18, 19:52:14](https://news.ycombinator.com/item?id=44944592) - [Show HN: I built a toy TPU that can do inference and training on the XOR problem](https://www.tinytpu.com)
* [2025-08-18, 18:51:23](https://news.ycombinator.com/item?id=44943986) - [Show HN: We started building an AI dev tool but it turned into a Sims-style game](https://www.youtube.com/watch?v=sRPnX_f2V_c)
* [2025-08-18, 18:01:00](https://slashdot.org/story/25/08/18/181255/ai-business-agents-will-kill-saas-by-2030-says-microsoft?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI &apos;Business Agents&apos; Will Kill SaaS by 2030, Says Microsoft](https://slashdot.org/story/25/08/18/181255/ai-business-agents-will-kill-saas-by-2030-says-microsoft?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-18, 17:50:56](https://lobste.rs/s/7ufqz3/introducing_action_native_push) - [Introducing Action Native Push](https://dev.37signals.com/introducing-action-native-push/)
* [2025-08-18, 17:08:36](https://news.ycombinator.com/item?id=44942936) - [Left to Right Programming](https://graic.net/p/left-to-right-programming)
* [2025-08-18, 17:00:00](https://news.slashdot.org/story/25/08/18/1655234/gamblers-now-bet-on-ai-models-like-racehorses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Gamblers Now Bet on AI Models Like Racehorses](https://news.slashdot.org/story/25/08/18/1655234/gamblers-now-bet-on-ai-models-like-racehorses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-18, 16:52:29](https://news.ycombinator.com/item?id=44942731) - [Show HN: Whispering – Open-source, local-first dictation you can trust](https://github.com/epicenter-so/epicenter/tree/main/apps/whispering)
* [2025-08-18, 16:48:00](https://soylentnews.org/article.pl?sid=25/08/18/1141215&amp;from=rss) - [Radioactive Water From UK Nuclear Bomb Base Leaked Into Sea, Files Show](https://soylentnews.org/article.pl?sid=25/08/18/1141215&amp;from=rss)
* [2025-08-18, 16:31:48](https://news.ycombinator.com/item?id=44942501) - [Anna&apos;s Archive: An Update from the Team](https://annas-archive.org/blog/an-update-from-the-team.html)
* [2025-08-18, 16:11:34](https://lobste.rs/s/1slbkm/dynamo_dynamodb_aurora_dsql) - [Dynamo, DynamoDB, and Aurora DSQL](https://brooker.co.za/blog/2025/08/15/dynamo-dynamodb-dsql.html)
* [2025-08-18, 16:00:00](https://tech.slashdot.org/story/25/08/18/109237/linkedin-is-the-fakest-platform-of-them-all?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [LinkedIn Is the Fakest Platform of Them All](https://tech.slashdot.org/story/25/08/18/109237/linkedin-is-the-fakest-platform-of-them-all?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-18, 15:16:34](https://news.ycombinator.com/item?id=44941580) - [Launch HN: Reality Defender (YC W22) – API for Deepfake and GenAI Detection](https://www.realitydefender.com/platform/api)
* [2025-08-18, 15:00:00](https://tech.slashdot.org/story/25/08/18/102226/the-one-feature-that-keeps-me-from-recommending-flip-phones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;The One Feature That Keeps Me From Recommending Flip Phones&apos;](https://tech.slashdot.org/story/25/08/18/102226/the-one-feature-that-keeps-me-from-recommending-flip-phones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-18, 14:59:26](https://news.ycombinator.com/item?id=44941369) - [Counter-Strike: A billion-dollar game built in a dorm room](https://www.nytimes.com/2025/08/18/arts/counter-strike-half-life-minh-le.html)
* [2025-08-18, 14:16:25](https://lobste.rs/s/cv9cmo/basic_dependency_injection_ocaml_with) - [Basic dependency injection in OCaml with objects](https://gr-im.github.io/a/dependency-injection.html)
* [2025-08-18, 14:00:00](https://news.slashdot.org/story/25/08/18/0953228/wikipedia-volunteer-uncovers-decade-long-campaign-that-created-335-articles-about-one-composer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wikipedia Volunteer Uncovers Decade-Long Campaign That Created 335 Articles About One Composer](https://news.slashdot.org/story/25/08/18/0953228/wikipedia-volunteer-uncovers-decade-long-campaign-that-created-335-articles-about-one-composer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-18, 13:39:53](https://news.ycombinator.com/item?id=44940485) - [FFmpeg Assembly Language Lessons](https://github.com/FFmpeg/asm-lessons)
* [2025-08-18, 13:22:45](https://lobste.rs/s/1qr3zy/gpt_5_goes_hard_on_real_world_programming) - [GPT-5 goes hard on real-world programming](https://www.omerba.dev/blog/gpt-5-evtx-zig-parser)
* [2025-08-18, 13:21:07](https://lobste.rs/s/gd0joi/asciidots_esolang_based_on_ascii_art) - [AsciiDots: an esolang based on ascii art](https://ajanse.me/asciidots/)
* [2025-08-18, 12:05:00](https://soylentnews.org/article.pl?sid=25/08/17/1234239&amp;from=rss) - [Toothpaste Made From Hair Provides Natural Root to Repair Teeth](https://soylentnews.org/article.pl?sid=25/08/17/1234239&amp;from=rss)
* [2025-08-18, 11:59:53](https://lobste.rs/s/giy0kl/all_atc_message_routing_germany_was_done) - [All ATC message routing in Germany was done through Emacs (2021)](https://www.reddit.com/r/emacs/comments/lly7po/comment/gnvzisy/)
* [2025-08-18, 11:34:00](https://science.slashdot.org/story/25/08/18/0631210/5-of-americans-are-cancer-survivors---and-theyre-living-longer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [5% of Americans are Cancer Survivors - and They&apos;re Living Longer](https://science.slashdot.org/story/25/08/18/0631210/5-of-americans-are-cancer-survivors---and-theyre-living-longer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-18, 11:02:04](https://lobste.rs/s/l5qpv2/this_website_is_served_from_nine_neovim) - [This Website is Served from Nine Neovim Buffers on My Old ThinkPad](https://vim.gabornyeki.com/)
* [2025-08-18, 09:35:17](https://news.ycombinator.com/item?id=44938818) - [Electromechanical reshaping,  an alternative to laser eye surgery](https://medicalxpress.com/news/2025-08-alternative-lasik-lasers.html)
* [2025-08-18, 08:25:58](https://lobste.rs/s/tagrrs/introducing_illumos_cafe_another_cozy) - [Introducing the illumos Cafe: Another Cozy Corner for OS Diversity](https://it-notes.dragas.net/2025/08/18/introducing-the-illumos-cafe/)
* [2025-08-18, 08:10:20](https://lobste.rs/s/hpzxmg/i_tried_every_todo_app_ended_up_with_txt) - [I Tried Every Todo App and Ended Up With a .txt File](https://www.al3rez.com/todo-txt-journey)
* [2025-08-18, 07:34:00](https://it.slashdot.org/story/25/08/18/0550252/male-oriented-app-teaonher-also-had-security-flaws-that-could-leak-mens-drivers-license-photos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Male-Oriented App &apos;TeaOnHer&apos; Also Had Security Flaws That Could Leak Men&apos;s Driver&apos;s License Photos](https://it.slashdot.org/story/25/08/18/0550252/male-oriented-app-teaonher-also-had-security-flaws-that-could-leak-mens-drivers-license-photos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-18, 07:21:00](https://soylentnews.org/article.pl?sid=25/08/17/1246229&amp;from=rss) - [Firefox’s New “AI” Features Cause CPU Spikes and Battery Drain](https://soylentnews.org/article.pl?sid=25/08/17/1246229&amp;from=rss)
* [2025-08-18, 05:25:00](https://science.slashdot.org/story/25/08/18/0423227/rare-upper-atmosphere-lightning-photographed-from-iss?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rare &apos;Upper Atmosphere Lightning&apos; Photographed From ISS](https://science.slashdot.org/story/25/08/18/0423227/rare-upper-atmosphere-lightning-photographed-from-iss?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-18, 04:02:05](https://lobste.rs/s/tuiofz/why_i_prefer_rst_restructuredtext) - [Why I prefer rST [reStructuredText] to Markdown (2024)](https://buttondown.com/hillelwayne/archive/why-i-prefer-rst-to-markdown/)
* [2025-08-18, 02:36:00](https://soylentnews.org/article.pl?sid=25/08/17/1237215&amp;from=rss) - [Blackhole Bounce - New Universes](https://soylentnews.org/article.pl?sid=25/08/17/1237215&amp;from=rss)
* [2025-08-17, 21:53:00](https://soylentnews.org/article.pl?sid=25/08/17/1310222&amp;from=rss) - [What’s a Smut Peddler to Do These Days?](https://soylentnews.org/article.pl?sid=25/08/17/1310222&amp;from=rss)
* [2025-08-17, 18:58:54](https://lobste.rs/s/gvtlpo/email_is_easy_email_address_quiz) - [“Email is Easy” email address quiz](https://e-mail.wtf)
* [2025-08-17, 17:08:00](https://soylentnews.org/article.pl?sid=25/08/17/0238238&amp;from=rss) - [Air Pollution Filters Help Scientists Produce First UK Wildlife Survey Using eDNA](https://soylentnews.org/article.pl?sid=25/08/17/0238238&amp;from=rss)
* [2025-08-17, 12:21:00](https://soylentnews.org/article.pl?sid=25/08/17/0227231&amp;from=rss) - [Massive Magnets Are on the Move: Repurposing Electromagnets for Research](https://soylentnews.org/article.pl?sid=25/08/17/0227231&amp;from=rss)
* [2025-08-17, 07:34:00](https://soylentnews.org/article.pl?sid=25/08/16/1255244&amp;from=rss) - [People Reoccupied Pompeii After Vesuvius Eruption, Archaeologists Find](https://soylentnews.org/article.pl?sid=25/08/16/1255244&amp;from=rss)
* [2025-08-17, 02:47:00](https://soylentnews.org/article.pl?sid=25/08/16/0019213&amp;from=rss) - [Bill Gates Declares the End of the Smartphone Era and Unveils Its Surprising Replacement](https://soylentnews.org/article.pl?sid=25/08/16/0019213&amp;from=rss)
* [2025-08-16, 23:48:35](https://news.ycombinator.com/item?id=44927778) - [An IRC-Enabled Lawn Mower (2021)](https://jotunheimr.idlerpg.net/users/jotun/lawnmower/)
* [2025-08-16, 23:15:25](https://news.ycombinator.com/item?id=44927629) - [How to free up and automatically manage disk space for WSL](https://www.freecodecamp.org/news/how-to-free-up-and-automatically-manage-disk-space-for-wsl-on-windows-1011/)
* [2025-08-16, 22:07:00](https://soylentnews.org/article.pl?sid=25/08/16/008232&amp;from=rss) - [Americans Who ‘Learned To Code’ At Obama’s Behest Can’t Find Jobs Now](https://soylentnews.org/article.pl?sid=25/08/16/008232&amp;from=rss)
* [2025-08-16, 20:54:54](https://news.ycombinator.com/item?id=44926855) - [X-ray scans reveal Buddhist prayers inside tiny Tibetan scrolls](https://www.popsci.com/technology/tibetan-prayer-scroll-scans/)
* [2025-08-16, 17:23:00](https://soylentnews.org/article.pl?sid=25/08/15/2243238&amp;from=rss) - [On its Fifth Try, SpaceX Manages Launch of Competitor Amazon&apos;s Satellites](https://soylentnews.org/article.pl?sid=25/08/15/2243238&amp;from=rss)
* [2025-08-16, 15:27:27](https://news.ycombinator.com/item?id=44924261) - [Netflix Revamps Tudum&apos;s CQRS Architecture with Raw Hollow In-Memory Object Store](https://www.infoq.com/news/2025/08/netflix-tudum-cqrs-raw-hollow/)
* [2025-08-16, 14:01:38](https://news.ycombinator.com/item?id=44923520) - [Show HN: I built an app to block Shorts and Reels](https://scrollguard.app/)
* [2025-08-16, 12:34:00](https://soylentnews.org/politics/article.pl?sid=25/08/15/1324240&amp;from=rss) - [Trump Administration Considering US Government Purchase of Stake in Intel](https://soylentnews.org/politics/article.pl?sid=25/08/15/1324240&amp;from=rss)
* [2025-08-16, 12:08:45](https://news.ycombinator.com/item?id=44922540) - [Walkie-Textie Wireless Communicator](http://www.technoblogy.com/show?2AON)
* [2025-08-16, 07:48:00](https://soylentnews.org/article.pl?sid=25/08/15/1320204&amp;from=rss) - [In Trial, People Lost Twice as Much Weight by Ditching Ultraprocessed Food](https://soylentnews.org/article.pl?sid=25/08/15/1320204&amp;from=rss)
* [2025-08-16, 03:07:00](https://soylentnews.org/article.pl?sid=25/08/15/1316257&amp;from=rss) - [Many Countries Banned From Using PayPal for Steam Games in Latest Payment Processor Drama](https://soylentnews.org/article.pl?sid=25/08/15/1316257&amp;from=rss)
* [2025-08-16, 02:12:45](https://news.ycombinator.com/item?id=44919527) - [Association for the Preservation of Spiritualist and Occult Periodicals](https://iapsop.com)
* [2025-08-15, 22:22:00](https://soylentnews.org/article.pl?sid=25/08/15/0813246&amp;from=rss) - [Internal Meta Guidelines for AI Permit \&quot;Sensual\&quot; Discussions With Children](https://soylentnews.org/article.pl?sid=25/08/15/0813246&amp;from=rss)
* [2025-08-15, 18:30:47](https://news.ycombinator.com/item?id=44915897) - [Lazy-brush – smooth drawing with mouse or finger](https://lazybrush.dulnan.net)
* [2025-08-15, 17:35:00](https://soylentnews.org/article.pl?sid=25/08/13/1633213&amp;from=rss) - [Half of US Adults Now Use AI—but Views on How to Regulate the Technology Vary Widely by State](https://soylentnews.org/article.pl?sid=25/08/13/1633213&amp;from=rss)
* [2025-08-15, 12:51:00](https://soylentnews.org/article.pl?sid=25/08/13/1629233&amp;from=rss) - [Awesome Wooden Pixel Display](https://soylentnews.org/article.pl?sid=25/08/13/1629233&amp;from=rss)
* [2025-08-15, 09:35:15](https://news.ycombinator.com/item?id=44910300) - [The Life and Death of London&apos;s Crystal Palace (2021)](https://heritagecalling.com/2021/11/29/picturing-the-crystal-palace/)
* [2025-08-15, 08:07:00](https://soylentnews.org/article.pl?sid=25/08/13/1625217&amp;from=rss) - [Culture Influences Men&apos;s Experiences With Intimate Partner Violence, Study Finds](https://soylentnews.org/article.pl?sid=25/08/13/1625217&amp;from=rss)
* [2025-08-15, 03:20:00](https://soylentnews.org/article.pl?sid=25/08/13/1621256&amp;from=rss) - [Harvard Business School on the Value of Open Source Software](https://soylentnews.org/article.pl?sid=25/08/13/1621256&amp;from=rss)
