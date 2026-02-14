# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Technology Advancements

* [The AI hater's guide to code with LLMs (The Overview)](https://aredridel.dinhe.net/2026/02/12/the-ai-haters-guide-to-code-with-llms/) - A commentary on the role and utilization of language models in coding, especially for critics of AI.

* [Spotify Says Its Best Developers Haven't Written a Line of Code Since December, Thanks To AI](https://developers.slashdot.org/story/26/02/13/1834228/spotify-says-its-best-developers-havent-written-a-line-of-code-since-december-thanks-to-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Examining AI's disruption in software development through Spotify's example.

* [GPT-5.2 derives a new result in theoretical physics](https://openai.com/index/new-result-theoretical-physics/) - AI's leap into theoretical physics innovation.

* [Meta's New Patent: an AI That Likes, Comments and Messages For You When You're Dead](https://tech.slashdot.org/story/26/02/13/1929209/metas-new-patent-an-ai-that-likes-comments-and-messages-for-you-when-youre-dead?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Meta's new technology for posthumous online interactions.

* [OpenAI has deleted the word 'safely' from its mission](https://theconversation.com/openai-has-deleted-the-word-safely-from-its-mission-and-its-new-structure-is-a-test-for-whether-ai-serves-society-or-shareholders-274467) - Questions arise about the impact of OpenAI's altered mission statement.

* [An AI Agent Published a Hit Piece on Me - More Things Have Happened](https://theshamblog.com/an-ai-agent-published-a-hit-piece-on-me-part-2/) - The unfolding controversy on AI-generated personal smear campaigns.

* [Show HN: Skill that lets Claude Code/Codex spin up VMs and GPUs](https://cloudrouter.dev/) - Introducing tools to test and develop using AI capabilities.

* [microgpt](http://karpathy.github.io/2026/02/12/microgpt/) - A focused project delving into minimal AI models.

* [Show HN: Data Engineering Book – An open source, community-driven guide](https://github.com/datascale-ai/data_engineering_book/blob/main/README_en.md) - A collaborative book aiming to democratize data engineering knowledge.

* [FTC Ratchets Up Microsoft Probe, Queries Rivals on Cloud, AI](https://slashdot.org/story/26/02/13/1757219/ftc-ratchets-up-microsoft-probe-queries-rivals-on-cloud-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Regulatory investigation into Microsoft's leadership in cloud and AI technologies.

* [Functional Data Structures and Algorithms. A Proof Assistant Approach](https://fdsa-book.net) - Exploring functional programming with a proof assistant methodology.

## Music, Media, and Legal Battles

* [Anna's Archive Quietly 'Releases' Millions of Spotify Tracks, Despite Legal Pushback](https://yro.slashdot.org/story/26/02/13/197235/annas-archive-quietly-releases-millions-of-spotify-tracks-despite-legal-pushback?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Pirate distribution of vast numbers of Spotify tracks amidst legal challenges.

* [Ring Cancels Its Partnership With Flock Safety After Surveillance Backlash](https://yro.slashdot.org/story/26/02/13/0846202/ring-cancels-its-partnership-with-flock-safety-after-surveillance-backlash?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Termination of a partnership due to privacy concerns.

* [Google Recovers "Deleted" Nest Video in High-Profile Abduction Case](https://soylentnews.org/article.pl?sid=26/02/12/0319239&from=rss) - Nest video aids investigation in a controversial recovery process.

## Innovative Developments

* [moss-kernel: Rust Linux-compatible kernel](https://github.com/hexagonal-sun/moss-kernel) - A new Linux-compatible kernel built in Rust.

* [I built a new Ada build tool for personal use](https://github.com/tomekw/tada) - Highlighting the creation of a novel build tool for Ada.

* [Nixtamal 1.0.0 released](https://nixtamal.toast.al/changelog/) - The debut release of a new platform for development.

* [Deep dive into Apple's .car File Format](https://dbg.re/posts/car-file-format/) - Technical exploration of the .car format for storing UI resources on Apple devices.

## Society, Policy, and Impact

* [The EU moves to kill infinite scrolling](https://www.politico.eu/article/tiktok-meta-facebook-instagram-brussels-kill-infinite-scrolling/) - Europe's regulatory challenge targeting a pervasive UX pattern.

* [EPA Reverses Long-Standing Climate Change Finding, Stripping Its Own Ability To Regulate Emissions](https://news.slashdot.org/story/26/02/13/1710236/epa-reverses-long-standing-climate-change-finding-stripping-its-own-ability-to-regulate-emissions?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Regulatory pivots in US climate policy.

* [Russia Fully Blocks WhatsApp](https://tech.slashdot.org/story/26/02/13/067244/russia-fully-blocks-whatsapp?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Banning communication tools in Russia and its repercussions.

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

* [2026-02-14, 02:00:00](https://yro.slashdot.org/story/26/02/13/197235/annas-archive-quietly-releases-millions-of-spotify-tracks-despite-legal-pushback?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anna&apos;s Archive Quietly &apos;Releases&apos; Millions of Spotify Tracks, Despite Legal Pushback](https://yro.slashdot.org/story/26/02/13/197235/annas-archive-quietly-releases-millions-of-spotify-tracks-despite-legal-pushback?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-14, 01:41:51](https://lobste.rs/s/8wck2c/ai_hater_s_guide_code_with_llms_overview) - [The AI hater&apos;s guide to code with LLMs (The Overview)](https://aredridel.dinhe.net/2026/02/12/the-ai-haters-guide-to-code-with-llms/)
* [2026-02-14, 00:37:53](https://news.ycombinator.com/item?id=47009949) - [An AI Agent Published a Hit Piece on Me – More Things Have Happened](https://theshamblog.com/an-ai-agent-published-a-hit-piece-on-me-part-2/)
* [2026-02-14, 00:34:00](https://soylentnews.org/article.pl?sid=26/02/13/0615203&amp;from=rss) - [El Paso Airport Closed After Military Used New Anti-Drone Laser to Zap Party Balloon](https://soylentnews.org/article.pl?sid=26/02/13/0615203&amp;from=rss)
* [2026-02-13, 23:49:14](https://lobste.rs/s/fynfup/supercazzola_generate_spam_for_web) - [Supercazzola - Generate spam for web scrapers](https://dacav.org/projects/supercazzola/)
* [2026-02-13, 23:30:00](https://tech.slashdot.org/story/26/02/13/191242/detroit-automakers-take-50-billion-hit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Detroit Automakers Take $50 Billion Hit](https://tech.slashdot.org/story/26/02/13/191242/detroit-automakers-take-50-billion-hit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-13, 22:17:06](https://news.ycombinator.com/item?id=47008560) - [OpenAI has deleted the word &apos;safely&apos; from its mission](https://theconversation.com/openai-has-deleted-the-word-safely-from-its-mission-and-its-new-structure-is-a-test-for-whether-ai-serves-society-or-shareholders-274467)
* [2026-02-13, 21:35:52](https://news.ycombinator.com/item?id=47008163) - [Show HN: Data Engineering Book – An open source, community-driven guide](https://github.com/datascale-ai/data_engineering_book/blob/main/README_en.md)
* [2026-02-13, 21:30:00](https://tech.slashdot.org/story/26/02/13/1929209/metas-new-patent-an-ai-that-likes-comments-and-messages-for-you-when-youre-dead?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta&apos;s New Patent: an AI That Likes, Comments and Messages For You When You&apos;re Dead](https://tech.slashdot.org/story/26/02/13/1929209/metas-new-patent-an-ai-that-likes-comments-and-messages-for-you-when-youre-dead?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-13, 20:52:11](https://news.ycombinator.com/item?id=47007656) - [The EU moves to kill infinite scrolling](https://www.politico.eu/article/tiktok-meta-facebook-instagram-brussels-kill-infinite-scrolling/)
* [2026-02-13, 20:31:00](https://tech.slashdot.org/story/26/02/13/1844218/google-warns-eu-risks-undermining-own-competitiveness-with-tech-sovereignty-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Warns EU Risks Undermining Own Competitiveness With Tech Sovereignty Push](https://tech.slashdot.org/story/26/02/13/1844218/google-warns-eu-risks-undermining-own-competitiveness-with-tech-sovereignty-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-13, 19:51:00](https://soylentnews.org/article.pl?sid=26/02/13/0612228&amp;from=rss) - [80386 Barrel Shifter](https://soylentnews.org/article.pl?sid=26/02/13/0612228&amp;from=rss)
* [2026-02-13, 19:41:42](https://news.ycombinator.com/item?id=47006843) - [The \&quot;AI agent hit piece\&quot; situation clarifies how dumb we are acting](https://ardentperf.com/2026/02/13/the-scott-shambaugh-situation-clarifies-how-dumb-we-are-acting/)
* [2026-02-13, 19:30:00](https://developers.slashdot.org/story/26/02/13/1834228/spotify-says-its-best-developers-havent-written-a-line-of-code-since-december-thanks-to-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Spotify Says Its Best Developers Haven&apos;t Written a Line of Code Since December, Thanks To AI](https://developers.slashdot.org/story/26/02/13/1834228/spotify-says-its-best-developers-havent-written-a-line-of-code-since-december-thanks-to-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-13, 19:26:48](https://lobste.rs/s/ytym8l/functional_data_structures_algorithms) - [Functional Data Structures and Algorithms. A Proof Assistant Approach](https://fdsa-book.net)
* [2026-02-13, 19:20:12](https://news.ycombinator.com/item?id=47006594) - [GPT-5.2 derives a new result in theoretical physics](https://openai.com/index/new-result-theoretical-physics/)
* [2026-02-13, 19:13:04](https://news.ycombinator.com/item?id=47006513) - [I&apos;m not worried about AI job loss](https://davidoks.blog/p/why-im-not-worried-about-ai-job-loss)
* [2026-02-13, 19:02:17](https://news.ycombinator.com/item?id=47006393) - [Show HN: Skill that lets Claude Code/Codex spin up VMs and GPUs](https://cloudrouter.dev/)
* [2026-02-13, 18:56:38](https://news.ycombinator.com/item?id=47006316) - [Age of Empires: 25 years of pathfinding problems with C++ [video]](https://www.youtube.com/watch?v=lEBQveBCtKY)
* [2026-02-13, 18:43:15](https://lobste.rs/s/pgem2t/ann_i_built_new_ada_build_tool_for_personal) - [ANN: I built a new Ada build tool for personal use](https://github.com/tomekw/tada)
* [2026-02-13, 18:31:00](https://slashdot.org/story/26/02/13/1757219/ftc-ratchets-up-microsoft-probe-queries-rivals-on-cloud-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FTC Ratchets Up Microsoft Probe, Queries Rivals on Cloud, AI](https://slashdot.org/story/26/02/13/1757219/ftc-ratchets-up-microsoft-probe-queries-rivals-on-cloud-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-13, 18:09:21](https://lobste.rs/s/jcio2j/evolving_git_for_next_decade) - [Evolving Git for the next decade](https://lwn.net/SubscriberLink/1057561/bddc1e61152fadf6/)
* [2026-02-13, 17:52:15](https://lobste.rs/s/vimek7/what_should_we_do_with_cls_generated_by_ai) - [What should we do with CLs generated by AI?](https://groups.google.com/g/golang-dev/c/4Li4Ovd_ehE/m/8L9s_jq4BAAJ)
* [2026-02-13, 17:50:54](https://news.ycombinator.com/item?id=47005509) - [Building a TUI is easy now](https://hatchet.run/blog/tuis-are-easy-now)
* [2026-02-13, 17:30:00](https://news.slashdot.org/story/26/02/13/1710236/epa-reverses-long-standing-climate-change-finding-stripping-its-own-ability-to-regulate-emissions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EPA Reverses Long-Standing Climate Change Finding, Stripping Its Own Ability To Regulate Emissions](https://news.slashdot.org/story/26/02/13/1710236/epa-reverses-long-standing-climate-change-finding-stripping-its-own-ability-to-regulate-emissions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-13, 16:45:07](https://lobste.rs/s/gibxel/nixtamal_1_0_0_released) - [Nixtamal 1.0.0 released](https://nixtamal.toast.al/changelog/)
* [2026-02-13, 16:39:41](https://lobste.rs/s/uttn9z/catalog_refactorings) - [Catalog of Refactorings](https://refactoring.com/catalog/)
* [2026-02-13, 16:30:00](https://slashdot.org/story/26/02/13/1630235/openai-claims-deepseek-distilled-us-models-to-gain-an-edge?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Claims DeepSeek Distilled US Models To Gain an Edge](https://slashdot.org/story/26/02/13/1630235/openai-claims-deepseek-distilled-us-models-to-gain-an-edge?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-13, 16:28:07](https://lobste.rs/s/z6myes/deep_dive_into_apple_s_car_file_format) - [A Deep Dive into Apple&apos;s .car File Format](https://dbg.re/posts/car-file-format/)
* [2026-02-13, 16:11:18](https://lobste.rs/s/qxmhjm/future_software_engineering_future) - [The future of software engineering - The future of software development retreat](https://www.thoughtworks.com/content/dam/thoughtworks/documents/report/tw_future%20_of_software_development_retreat_%20key_takeaways.pdf)
* [2026-02-13, 16:08:13](https://lobste.rs/s/uyjjtz/microgpt) - [microgpt](http://karpathy.github.io/2026/02/12/microgpt/)
* [2026-02-13, 15:36:54](https://lobste.rs/s/t7jbfe/12_factor_app_15_years_later_does_it_still) - [The 12-Factor App - 15 Years later. Does it Still Hold Up in 2026?](https://lukasniessen.medium.com/the-12-factor-app-15-years-later-does-it-still-hold-up-in-2026-c8af494e8465)
* [2026-02-13, 15:30:00](https://tech.slashdot.org/story/26/02/13/1527208/waymo-is-asking-doordash-drivers-to-shut-the-doors-of-its-self-driving-cars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Waymo is Asking DoorDash Drivers To Shut the Doors of Its Self-Driving Cars](https://tech.slashdot.org/story/26/02/13/1527208/waymo-is-asking-doordash-drivers-to-shut-the-doors-of-its-self-driving-cars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-13, 15:21:06](https://lobste.rs/s/misukt/thanks_for_all_frames_rust_gui) - [Thanks for All the Frames: Rust GUI Observations](https://tritium.legal/blog/desktop)
* [2026-02-13, 15:09:58](https://lobste.rs/s/kegsv1/resizing_windows_on_macos_tahoe_saga) - [Resizing windows on macOS Tahoe – the saga continues](https://noheger.at/blog/2026/02/12/resizing-windows-on-macos-tahoe-the-saga-continues/)
* [2026-02-13, 15:08:00](https://soylentnews.org/article.pl?sid=26/02/13/0611200&amp;from=rss) - [Taiwan Tells Uncle Sam its Chip Ecosystem Ain&apos;t Going Anywhere](https://soylentnews.org/article.pl?sid=26/02/13/0611200&amp;from=rss)
* [2026-02-13, 14:36:07](https://news.ycombinator.com/item?id=47003214) - [How did the Maya survive?](https://www.theguardian.com/news/2026/feb/12/apocalypse-no-how-almost-everything-we-thought-we-knew-about-the-maya-is-wrong)
* [2026-02-13, 14:30:00](https://news.slashdot.org/story/26/02/13/1424257/bill-introduced-to-replace-west-virginias-new-cs-course-graduation-requirement-with-computer-literacy-proficiency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bill Introduced To Replace West Virginia&apos;s New CS Course Graduation Requirement With Computer Literacy Proficiency](https://news.slashdot.org/story/26/02/13/1424257/bill-introduced-to-replace-west-virginias-new-cs-course-graduation-requirement-with-computer-literacy-proficiency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-13, 14:21:01](https://news.ycombinator.com/item?id=47003064) - [Fix the iOS keyboard before the timer hits zero or I&apos;m switching back to Android](https://ios-countdown.win/)
* [2026-02-13, 14:13:23](https://lobste.rs/s/9ltmes/moss_kernel_rust_linux_compatible_kernel) - [moss-kernel: Rust Linux-compatible kernel](https://github.com/hexagonal-sun/moss-kernel)
* [2026-02-13, 13:36:00](https://tech.slashdot.org/story/26/02/13/1336235/meta-plans-to-let-smart-glasses-identify-people-through-ai-powered-facial-recognition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Plans To Let Smart Glasses Identify People Through AI-Powered Facial Recognition](https://tech.slashdot.org/story/26/02/13/1336235/meta-plans-to-let-smart-glasses-identify-people-through-ai-powered-facial-recognition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-13, 13:14:23](https://lobste.rs/s/wqzxyu/hare_0_26_0_released) - [Hare 0.26.0 released](https://harelang.org/blog/2026-02-13-hare-0.26.0-released/)
* [2026-02-13, 12:18:05](https://news.ycombinator.com/item?id=47001871) - [Monosketch](https://monosketch.io/)
* [2026-02-13, 12:01:11](https://news.ycombinator.com/item?id=47001756) - [GovDash (YC W22) Is Hiring Senior Engineers (Product and Search) in NYC](https://www.workatastartup.com/companies/govdash)
* [2026-02-13, 10:26:00](https://soylentnews.org/article.pl?sid=26/02/12/0346212&amp;from=rss) - [New Critique Debunks Claim That Trees Can Sense a Solar Eclipse](https://soylentnews.org/article.pl?sid=26/02/12/0346212&amp;from=rss)
* [2026-02-13, 10:18:56](https://news.ycombinator.com/item?id=47001095) - [WolfSSL sucks too, so now what?](https://blog.feld.me/posts/2026/02/wolfssl-sucks-too/)
* [2026-02-13, 09:15:45](https://lobste.rs/s/mclhjq/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/mclhjq/what_are_you_doing_this_weekend)
* [2026-02-13, 09:00:00](https://yro.slashdot.org/story/26/02/13/0846202/ring-cancels-its-partnership-with-flock-safety-after-surveillance-backlash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ring Cancels Its Partnership With Flock Safety After Surveillance Backlash](https://yro.slashdot.org/story/26/02/13/0846202/ring-cancels-its-partnership-with-flock-safety-after-surveillance-backlash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-13, 08:02:23](https://news.ycombinator.com/item?id=47000164) - [CSS-Doodle](https://css-doodle.com/)
* [2026-02-13, 06:10:00](https://tech.slashdot.org/story/26/02/13/067244/russia-fully-blocks-whatsapp?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Russia Fully Blocks WhatsApp](https://tech.slashdot.org/story/26/02/13/067244/russia-fully-blocks-whatsapp?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-13, 05:38:00](https://soylentnews.org/article.pl?sid=26/02/12/0319239&amp;from=rss) - [Google Recovers “Deleted” Nest Video in High-Profile Abduction Case](https://soylentnews.org/article.pl?sid=26/02/12/0319239&amp;from=rss)
* [2026-02-13, 05:24:40](https://news.ycombinator.com/item?id=46999224) - [Lena by qntm (2021)](https://qntm.org/mmacevedo)
* [2026-02-13, 05:17:21](https://lobste.rs/s/hkrawz/google_might_think_your_website_is_down) - [Google might think your Website is down](https://codeinput.com/blog/google-seo)
* [2026-02-13, 03:45:00](https://tech.slashdot.org/story/26/02/12/2111243/windows-11-notepad-flaw-let-files-execute-silently-via-markdown-links?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Windows 11 Notepad Flaw Let Files Execute Silently via Markdown Links](https://tech.slashdot.org/story/26/02/12/2111243/windows-11-notepad-flaw-let-files-execute-silently-via-markdown-links?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-13, 03:36:49](https://lobste.rs/s/pc7u1q/i_improved_15_llms_at_coding_one_afternoon) - [I Improved 15 LLMs at Coding in One Afternoon. Only the Harness Changed](https://blog.can.ac/2026/02/12/the-harness-problem/)
* [2026-02-13, 03:33:27](https://news.ycombinator.com/item?id=47008931) - [The wonder of modern drywall](https://www.worksinprogress.news/p/the-wonder-of-modern-drywall)
* [2026-02-13, 03:03:33](https://lobste.rs/s/x3vd7h/many_flavors_ignore_files) - [The Many Flavors of Ignore Files](https://nesbitt.io/2026/02/12/the-many-flavors-of-ignore-files.html)
* [2026-02-13, 01:30:00](https://news.slashdot.org/story/26/02/12/211223/cia-makes-new-push-to-recruit-chinese-military-officers-as-informants?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CIA Makes New Push To Recruit Chinese Military Officers as Informants](https://news.slashdot.org/story/26/02/12/211223/cia-makes-new-push-to-recruit-chinese-military-officers-as-informants?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-13, 00:54:51](https://news.ycombinator.com/item?id=46997519) - [Skip the Tips: A game to select \&quot;No Tip\&quot; but dark patterns try to stop you](https://skipthe.tips/)
* [2026-02-13, 00:47:00](https://soylentnews.org/article.pl?sid=26/02/12/0318206&amp;from=rss) - [SpaceX is Pivoting to Focus on a Moon Base Before Mars](https://soylentnews.org/article.pl?sid=26/02/12/0318206&amp;from=rss)
* [2026-02-12, 23:19:34](https://lobste.rs/s/bsprvp/apple_has_transparency_issue) - [Apple has a transparency issue](https://www.youtube.com/watch?v=ejPqAJ0dHwY)
* [2026-02-12, 22:18:47](https://lobste.rs/s/zgdpht/plan_files_2020) - [.plan files (2020)](https://matteolandi.net/plan-files.html)
* [2026-02-12, 20:04:00](https://soylentnews.org/article.pl?sid=26/02/12/0316208&amp;from=rss) - [Byte Magazine Artist Robert Tinney, Who Illustrated the Birth of PCs, Dies at 78](https://soylentnews.org/article.pl?sid=26/02/12/0316208&amp;from=rss)
* [2026-02-12, 19:15:21](https://news.ycombinator.com/item?id=46993587) - [Show HN: Moltis – AI assistant with memory, tools, and self-extending skills](https://www.moltis.org)
* [2026-02-12, 18:52:26](https://lobste.rs/s/lel7zt/allocators_from_c_zig) - [Allocators from C to Zig](https://antonz.org/allocators/)
* [2026-02-12, 18:18:40](https://lobste.rs/s/qtxw92/workledger_offline_first_engineering) - [Workledger - An offline first  engineering notebook](https://about.workledger.org/)
* [2026-02-12, 17:14:31](https://lobste.rs/s/n4kbuj/ai_agent_published_hit_piece_on_me) - [An AI Agent Published a Hit Piece on Me](https://theshamblog.com/an-ai-agent-published-a-hit-piece-on-me/)
* [2026-02-12, 15:23:00](https://soylentnews.org/article.pl?sid=26/02/11/1346239&amp;from=rss) - [Malicious Packages for dYdX Cryptocurrency Exchange Empties User Wallets](https://soylentnews.org/article.pl?sid=26/02/11/1346239&amp;from=rss)
* [2026-02-12, 10:33:00](https://soylentnews.org/article.pl?sid=26/02/10/0833231&amp;from=rss) - [Terry Pratchett&apos;s Novels May Have Held Clues to His Dementia a Decade Before Diagnosis](https://soylentnews.org/article.pl?sid=26/02/10/0833231&amp;from=rss)
* [2026-02-12, 05:48:00](https://soylentnews.org/article.pl?sid=26/02/10/0830234&amp;from=rss) - [MIT Scientists Build Terahertz Microscope That Reveals Hidden Superconducting Motion](https://soylentnews.org/article.pl?sid=26/02/10/0830234&amp;from=rss)
* [2026-02-12, 01:44:35](https://news.ycombinator.com/item?id=46983873) - [Common Lisp Screenshots: today&apos;s CL applications in action](http://www.lisp-screenshots.org)
* [2026-02-12, 01:07:00](https://soylentnews.org/politics/article.pl?sid=26/02/10/0826224&amp;from=rss) - [EU Interferes In Its Own Elections And Ours, Say US Tech Bros](https://soylentnews.org/politics/article.pl?sid=26/02/10/0826224&amp;from=rss)
* [2026-02-11, 20:23:00](https://soylentnews.org/article.pl?sid=26/02/10/0820248&amp;from=rss) - [After a $26 Billion Hit, Stellantis Shifts Focus Back to What Buyers Want](https://soylentnews.org/article.pl?sid=26/02/10/0820248&amp;from=rss)
* [2026-02-11, 15:37:00](https://soylentnews.org/article.pl?sid=26/02/10/0818222&amp;from=rss) - [Discord Will Require a Face Scan or ID for Full Access Next Month](https://soylentnews.org/article.pl?sid=26/02/10/0818222&amp;from=rss)
* [2026-02-11, 10:53:00](https://soylentnews.org/article.pl?sid=26/02/10/036255&amp;from=rss) - [Newly Discovered Sungrazing Comet C/2026 A1 (MAPS) Could be the Brightest of the Year](https://soylentnews.org/article.pl?sid=26/02/10/036255&amp;from=rss)
* [2026-02-11, 06:05:00](https://soylentnews.org/article.pl?sid=26/02/10/0257251&amp;from=rss) - [Microsoft Does Something Useful, Adds Sysmon to Windows](https://soylentnews.org/article.pl?sid=26/02/10/0257251&amp;from=rss)
* [2026-02-11, 01:20:00](https://soylentnews.org/article.pl?sid=26/02/10/0251250&amp;from=rss) - [Ask SN - \&quot;Opt-Out Signal Honored\&quot; - Screen Message](https://soylentnews.org/article.pl?sid=26/02/10/0251250&amp;from=rss)
* [2026-02-10, 20:33:00](https://soylentnews.org/article.pl?sid=26/02/09/1936243&amp;from=rss) - [AI.Com&apos;s $85 Million Super Bowl Ad Campaign Falls Foul as Traffic Crashes Servers](https://soylentnews.org/article.pl?sid=26/02/09/1936243&amp;from=rss)
* [2026-02-10, 15:50:00](https://soylentnews.org/article.pl?sid=26/02/09/1922203&amp;from=rss) - [Linux Kernel 6.19 is Released and the Next Version is Confirmed to be 7.0](https://soylentnews.org/article.pl?sid=26/02/09/1922203&amp;from=rss)
* [2026-02-10, 11:08:00](https://soylentnews.org/article.pl?sid=26/02/09/0531254&amp;from=rss) - [Your iPhone is About to Get a New Privacy Feature to Protect Your Location Data From Prying Eyes](https://soylentnews.org/article.pl?sid=26/02/09/0531254&amp;from=rss)
* [2026-02-10, 06:22:00](https://soylentnews.org/article.pl?sid=26/02/09/0524218&amp;from=rss) - [Microsoft Releases Urgent Office Patch While Russian-State Hackers Pounce](https://soylentnews.org/article.pl?sid=26/02/09/0524218&amp;from=rss)
* [2026-02-10, 04:13:49](https://news.ycombinator.com/item?id=46955311) - [Gradient.horse](https://gradient.horse)
* [2026-02-10, 02:36:34](https://news.ycombinator.com/item?id=46954637) - [Faster Than Dijkstra?](https://systemsapproach.org/2026/02/09/faster-than-dijkstra/)
* [2026-02-10, 01:38:00](https://soylentnews.org/article.pl?sid=26/02/09/0519218&amp;from=rss) - [A Fresh Look at IBM 3270 Information Display System](https://soylentnews.org/article.pl?sid=26/02/09/0519218&amp;from=rss)
