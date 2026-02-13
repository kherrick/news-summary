# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and Machine Learning

* [Meta's New Patent: an AI That Likes, Comments and Messages For You When You're Dead](https://tech.slashdot.org/story/26/02/13/1929209/metas-new-patent-an-ai-that-likes-comments-and-messages-for-you-when-youre-dead?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A unique patent by Meta enables posthumous social media interactivity controlled by AI.

* [Spotify Says Its Best Developers Haven't Written a Line of Code Since December, Thanks To AI](https://developers.slashdot.org/story/26/02/13/1834228/spotify-says-its-best-developers-havent-written-a-line-of-code-since-december-thanks-to-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Spotify shares insights on how AI tools significantly revolutionized their development process.

* [GPT-5.2 derives a new result in theoretical physics](https://openai.com/index/new-result-theoretical-physics/) - OpenAI's latest language model demonstrates its groundbreaking capability in deriving advanced physics results.

* [An AI Agent Published a Hit Piece on Me](https://theshamblog.com/an-ai-agent-published-a-hit-piece-on-me/) - Thought-provoking commentary on automated content generation and its unexpected consequences.

* [The AI productivity trap: Why your Best Engineers are Getting Slower](https://soylentnews.org/article.pl?sid=26/02/07/0352243&from=rss) - Analysis of unintended impacts of AI productivity tools on engineers.

## Technology Regulations and Privacy Concerns

* [Google Warns EU Risks Undermining Own Competitiveness With Tech Sovereignty Push](https://tech.slashdot.org/story/26/02/13/1844218/google-warns-eu-risks-undermining-own-competitiveness-with-tech-sovereignty-push?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Google's critique of the EU's drive for technological sovereignty highlights potential risks to competitiveness.

* [Ring Cancels Its Partnership With Flock Safety After Surveillance Backlash](https://yro.slashdot.org/story/26/02/13/0846202/ring-cancels-its-partnership-with-flock-safety-after-surveillance-backlash?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Ring ends its controversial deal amid growing concerns over surveillance.

* [CBP Signs Clearview AI Deal to Use Face Recognition for 'Tactical Targeting'](https://www.wired.com/story/cbp-signs-clearview-ai-deal-to-use-face-recognition-for-tactical-targeting/) - U.S. border agency partners with Clearview AI for facial recognition technology.

* [Windows 11 Notepad Flaw Let Files Execute Silently via Markdown Links](https://tech.slashdot.org/story/26/02/12/2111243/windows-11-notepad-flaw-let-files-execute-silently-via-markdown-links?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Discovery of a critical flaw in Windows 11's Notepad functionality raises security concerns.

## Space and Science Innovations

* [Newly Discovered Sungrazing Comet C/2026 A1 (MAPS) Could be the Brightest of the Year](https://soylentnews.org/article.pl?sid=26/02/10/036255&from=rss) - Scientists announce a potentially record-breaking comet for 2026.

* [SpaceX is Pivoting to Focus on a Moon Base Before Mars](https://soylentnews.org/article.pl?sid=26/02/12/0318206&from=rss) - SpaceX shifts its attention to lunar colonization as an intermediate step to Mars.

* [MIT Scientists Build Terahertz Microscope That Reveals Hidden Superconducting Motion](https://soylentnews.org/article.pl?sid=26/02/10/0830234&from=rss) - A cutting-edge tool by MIT offers insights into the elusive behavior of superconductors.

## Programming and Open Source Developments

* [Functional Data Structures and Algorithms. A Proof Assistant Approach](https://fdsa-book.net) - A detailed exploration of advanced programming using proof assistants.

* [The Many Flavors of Ignore Files](https://nesbitt.io/2026/02/12/the-many-flavors-of-ignore-files.html) - Overview of the diverse implementations of ignore files across operating systems and languages.

* [The 12-Factor App - 15 Years later. Does it Still Hold Up in 2026?](https://lukasniessen.medium.com/the-12-factor-app-15-years-later-does-it-still-hold-up-in-2026-c8af494e8465) - Revisiting the relevance of the 12-factor methodology in modern app development.

* [moss-kernel: Rust Linux-compatible kernel](https://github.com/hexagonal-sun/moss-kernel) - Introduction to a Linux-compatible kernel written in Rust for enhanced performance and security.

## Emerging Trends and Cultural Stories

* [Waymo is Asking DoorDash Drivers To Shut the Doors of Its Self-Driving Cars](https://tech.slashdot.org/story/26/02/13/1527208/waymo-is-asking-doordash-drivers-to-shut-the-doors-of-its-self-driving-cars?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Unexpected collaboration showcases unique challenges for autonomous car operations.

* [I spent two days gigging at RentAHuman and didn't make a single cent](https://www.wired.com/story/i-tried-rentahuman-ai-agents-hired-me-to-hype-their-ai-startups/) - Experiences highlight how human gigs are being adapted for an AI-dominated future.

* [Terry Pratchett's Novels May Have Held Clues to His Dementia a Decade Before Diagnosis](https://soylentnews.org/article.pl?sid=26/02/10/0833231&from=rss) - Literary analysis presents intriguing medical insights found in Terry Pratchett's works.

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

* [2026-02-13, 21:30:00](https://tech.slashdot.org/story/26/02/13/1929209/metas-new-patent-an-ai-that-likes-comments-and-messages-for-you-when-youre-dead?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta&apos;s New Patent: an AI That Likes, Comments and Messages For You When You&apos;re Dead](https://tech.slashdot.org/story/26/02/13/1929209/metas-new-patent-an-ai-that-likes-comments-and-messages-for-you-when-youre-dead?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-13, 20:31:00](https://tech.slashdot.org/story/26/02/13/1844218/google-warns-eu-risks-undermining-own-competitiveness-with-tech-sovereignty-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Warns EU Risks Undermining Own Competitiveness With Tech Sovereignty Push](https://tech.slashdot.org/story/26/02/13/1844218/google-warns-eu-risks-undermining-own-competitiveness-with-tech-sovereignty-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-13, 20:16:31](https://news.ycombinator.com/item?id=47007259) - [Something Big Is (Not) Happening](https://www.aricolaprete.com/2026/02/something-big-is-not-happening.html)
* [2026-02-13, 19:51:00](https://soylentnews.org/article.pl?sid=26/02/13/0612228&amp;from=rss) - [80386 Barrel Shifter](https://soylentnews.org/article.pl?sid=26/02/13/0612228&amp;from=rss)
* [2026-02-13, 19:41:42](https://news.ycombinator.com/item?id=47006843) - [The Scott Shambaugh Situation Clarifies How Dumb We Are Acting](https://ardentperf.com/2026/02/13/the-scott-shambaugh-situation-clarifies-how-dumb-we-are-acting/)
* [2026-02-13, 19:30:00](https://developers.slashdot.org/story/26/02/13/1834228/spotify-says-its-best-developers-havent-written-a-line-of-code-since-december-thanks-to-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Spotify Says Its Best Developers Haven&apos;t Written a Line of Code Since December, Thanks To AI](https://developers.slashdot.org/story/26/02/13/1834228/spotify-says-its-best-developers-havent-written-a-line-of-code-since-december-thanks-to-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-13, 19:26:48](https://lobste.rs/s/ytym8l/functional_data_structures_algorithms) - [Functional Data Structures and Algorithms. A Proof Assistant Approach](https://fdsa-book.net)
* [2026-02-13, 19:20:12](https://news.ycombinator.com/item?id=47006594) - [GPT-5.2 derives a new result in theoretical physics](https://openai.com/index/new-result-theoretical-physics/)
* [2026-02-13, 19:02:17](https://news.ycombinator.com/item?id=47006393) - [Show HN: Skill that lets Claude Code/Codex spin up VMs and GPUs](https://cloudrouter.dev/)
* [2026-02-13, 18:56:38](https://news.ycombinator.com/item?id=47006316) - [Age of Empires: 25 years of pathfinding problems with C++ [video]](https://www.youtube.com/watch?v=lEBQveBCtKY)
* [2026-02-13, 18:43:15](https://lobste.rs/s/pgem2t/ann_i_built_new_ada_build_tool_for_personal) - [ANN: I built a new Ada build tool for personal use](https://github.com/tomekw/tada)
* [2026-02-13, 18:35:32](https://news.ycombinator.com/item?id=47006055) - [The Sharp PC-2000 Computer Boombox from 1979](https://stereo2go.com/forums/threads/one-of-the-rarest-the-sharp-pc-2000-computer-boombox-from-1979.10341/)
* [2026-02-13, 18:31:00](https://slashdot.org/story/26/02/13/1757219/ftc-ratchets-up-microsoft-probe-queries-rivals-on-cloud-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FTC Ratchets Up Microsoft Probe, Queries Rivals on Cloud, AI](https://slashdot.org/story/26/02/13/1757219/ftc-ratchets-up-microsoft-probe-queries-rivals-on-cloud-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-13, 18:30:19](https://lobste.rs/s/2codpm/how_we_allowed_remote_code_execution) - [How we allowed remote code execution (but safely)](https://tumuchdata.club/post/coding-challenge-infrastructure/)
* [2026-02-13, 18:09:21](https://lobste.rs/s/jcio2j/evolving_git_for_next_decade) - [Evolving Git for the next decade](https://lwn.net/SubscriberLink/1057561/bddc1e61152fadf6/)
* [2026-02-13, 17:52:15](https://lobste.rs/s/vimek7/what_should_we_do_with_cls_generated_by_ai) - [What should we do with CLs generated by AI?](https://groups.google.com/g/golang-dev/c/4Li4Ovd_ehE/m/8L9s_jq4BAAJ)
* [2026-02-13, 17:50:54](https://news.ycombinator.com/item?id=47005509) - [Building a TUI is easy now](https://hatchet.run/blog/tuis-are-easy-now)
* [2026-02-13, 17:30:00](https://news.slashdot.org/story/26/02/13/1710236/epa-reverses-long-standing-climate-change-finding-stripping-its-own-ability-to-regulate-emissions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EPA Reverses Long-Standing Climate Change Finding, Stripping Its Own Ability To Regulate Emissions](https://news.slashdot.org/story/26/02/13/1710236/epa-reverses-long-standing-climate-change-finding-stripping-its-own-ability-to-regulate-emissions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-13, 17:13:01](https://news.ycombinator.com/item?id=47005081) - [CBP Signs Clearview AI Deal to Use Face Recognition for &apos;Tactical Targeting&apos;](https://www.wired.com/story/cbp-signs-clearview-ai-deal-to-use-face-recognition-for-tactical-targeting/)
* [2026-02-13, 16:45:07](https://lobste.rs/s/gibxel/nixtamal_1_0_0_released) - [Nixtamal 1.0.0 released](https://nixtamal.toast.al/changelog/)
* [2026-02-13, 16:39:41](https://lobste.rs/s/uttn9z/catalog_refactorings) - [Catalog of Refactorings](https://refactoring.com/catalog/)
* [2026-02-13, 16:30:00](https://slashdot.org/story/26/02/13/1630235/openai-claims-deepseek-distilled-us-models-to-gain-an-edge?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Claims DeepSeek Distilled US Models To Gain an Edge](https://slashdot.org/story/26/02/13/1630235/openai-claims-deepseek-distilled-us-models-to-gain-an-edge?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-13, 16:28:07](https://lobste.rs/s/z6myes/deep_dive_into_apple_s_car_file_format) - [A Deep Dive into Apple&apos;s .car File Format](https://dbg.re/posts/car-file-format/)
* [2026-02-13, 16:11:18](https://lobste.rs/s/qxmhjm/future_software_engineering_future) - [The future of software engineering - The future of software development retreat](https://www.thoughtworks.com/content/dam/thoughtworks/documents/report/tw_future%20_of_software_development_retreat_%20key_takeaways.pdf)
* [2026-02-13, 16:11:08](https://news.ycombinator.com/item?id=47004319) - [I spent two days gigging at RentAHuman and didn&apos;t make a single cent](https://www.wired.com/story/i-tried-rentahuman-ai-agents-hired-me-to-hype-their-ai-startups/)
* [2026-02-13, 16:10:07](https://news.ycombinator.com/item?id=47004312) - [IronClaw: a Rust-based clawd that runs tools in isolated WASM sandboxes](https://github.com/nearai/ironclaw)
* [2026-02-13, 16:08:13](https://lobste.rs/s/uyjjtz/microgpt) - [microgpt](http://karpathy.github.io/2026/02/12/microgpt/)
* [2026-02-13, 15:36:54](https://lobste.rs/s/t7jbfe/12_factor_app_15_years_later_does_it_still) - [The 12-Factor App - 15 Years later. Does it Still Hold Up in 2026?](https://lukasniessen.medium.com/the-12-factor-app-15-years-later-does-it-still-hold-up-in-2026-c8af494e8465)
* [2026-02-13, 15:30:00](https://tech.slashdot.org/story/26/02/13/1527208/waymo-is-asking-doordash-drivers-to-shut-the-doors-of-its-self-driving-cars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Waymo is Asking DoorDash Drivers To Shut the Doors of Its Self-Driving Cars](https://tech.slashdot.org/story/26/02/13/1527208/waymo-is-asking-doordash-drivers-to-shut-the-doors-of-its-self-driving-cars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-13, 15:21:06](https://lobste.rs/s/misukt/thanks_for_all_frames_rust_gui) - [Thanks for All the Frames: Rust GUI Observations](https://tritium.legal/blog/desktop)
* [2026-02-13, 15:09:58](https://lobste.rs/s/kegsv1/resizing_windows_on_macos_tahoe_saga) - [Resizing windows on macOS Tahoe – the saga continues](https://noheger.at/blog/2026/02/12/resizing-windows-on-macos-tahoe-the-saga-continues/)
* [2026-02-13, 15:08:00](https://soylentnews.org/article.pl?sid=26/02/13/0611200&amp;from=rss) - [Taiwan Tells Uncle Sam its Chip Ecosystem Ain&apos;t Going Anywhere](https://soylentnews.org/article.pl?sid=26/02/13/0611200&amp;from=rss)
* [2026-02-13, 14:36:28](https://news.ycombinator.com/item?id=47003219) - [Open Source Is Not About You (2018)](https://gist.github.com/richhickey/1563cddea1002958f96e7ba9519972d9)
* [2026-02-13, 14:30:00](https://news.slashdot.org/story/26/02/13/1424257/bill-introduced-to-replace-west-virginias-new-cs-course-graduation-requirement-with-computer-literacy-proficiency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bill Introduced To Replace West Virginia&apos;s New CS Course Graduation Requirement With Computer Literacy Proficiency](https://news.slashdot.org/story/26/02/13/1424257/bill-introduced-to-replace-west-virginias-new-cs-course-graduation-requirement-with-computer-literacy-proficiency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-13, 14:21:01](https://news.ycombinator.com/item?id=47003064) - [Fix the iOS keyboard before the timer hits zero or I&apos;m switching back to Android](https://ios-countdown.win/)
* [2026-02-13, 14:13:23](https://lobste.rs/s/9ltmes/moss_kernel_rust_linux_compatible_kernel) - [moss-kernel: Rust Linux-compatible kernel](https://github.com/hexagonal-sun/moss-kernel)
* [2026-02-13, 14:03:14](https://news.ycombinator.com/item?id=47002825) - [Zed editor switching graphics lib from blade to wgpu](https://github.com/zed-industries/zed/pull/46758)
* [2026-02-13, 13:36:00](https://tech.slashdot.org/story/26/02/13/1336235/meta-plans-to-let-smart-glasses-identify-people-through-ai-powered-facial-recognition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Plans To Let Smart Glasses Identify People Through AI-Powered Facial Recognition](https://tech.slashdot.org/story/26/02/13/1336235/meta-plans-to-let-smart-glasses-identify-people-through-ai-powered-facial-recognition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-13, 13:14:23](https://lobste.rs/s/wqzxyu/hare_0_26_0_released) - [Hare 0.26.0 released](https://harelang.org/blog/2026-02-13-hare-0.26.0-released/)
* [2026-02-13, 12:18:05](https://news.ycombinator.com/item?id=47001871) - [Monosketch](https://monosketch.io/)
* [2026-02-13, 12:01:11](https://news.ycombinator.com/item?id=47001756) - [GovDash (YC W22) Is Hiring Senior Engineers (Product and Search) in NYC](https://www.workatastartup.com/companies/govdash)
* [2026-02-13, 10:26:00](https://soylentnews.org/article.pl?sid=26/02/12/0346212&amp;from=rss) - [New Critique Debunks Claim That Trees Can Sense a Solar Eclipse](https://soylentnews.org/article.pl?sid=26/02/12/0346212&amp;from=rss)
* [2026-02-13, 09:15:45](https://lobste.rs/s/mclhjq/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/mclhjq/what_are_you_doing_this_weekend)
* [2026-02-13, 09:00:00](https://yro.slashdot.org/story/26/02/13/0846202/ring-cancels-its-partnership-with-flock-safety-after-surveillance-backlash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ring Cancels Its Partnership With Flock Safety After Surveillance Backlash](https://yro.slashdot.org/story/26/02/13/0846202/ring-cancels-its-partnership-with-flock-safety-after-surveillance-backlash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-13, 06:10:00](https://tech.slashdot.org/story/26/02/13/067244/russia-fully-blocks-whatsapp?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Russia Fully Blocks WhatsApp](https://tech.slashdot.org/story/26/02/13/067244/russia-fully-blocks-whatsapp?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-13, 05:38:00](https://soylentnews.org/article.pl?sid=26/02/12/0319239&amp;from=rss) - [Google Recovers “Deleted” Nest Video in High-Profile Abduction Case](https://soylentnews.org/article.pl?sid=26/02/12/0319239&amp;from=rss)
* [2026-02-13, 05:24:40](https://news.ycombinator.com/item?id=46999224) - [MMAcevedo aka Lena by qntm](https://qntm.org/mmacevedo)
* [2026-02-13, 05:17:21](https://lobste.rs/s/hkrawz/google_might_think_your_website_is_down) - [Google might think your Website is down](https://codeinput.com/blog/google-seo)
* [2026-02-13, 03:45:00](https://tech.slashdot.org/story/26/02/12/2111243/windows-11-notepad-flaw-let-files-execute-silently-via-markdown-links?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Windows 11 Notepad Flaw Let Files Execute Silently via Markdown Links](https://tech.slashdot.org/story/26/02/12/2111243/windows-11-notepad-flaw-let-files-execute-silently-via-markdown-links?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-13, 03:36:49](https://lobste.rs/s/pc7u1q/i_improved_15_llms_at_coding_one_afternoon) - [I Improved 15 LLMs at Coding in One Afternoon. Only the Harness Changed](https://blog.can.ac/2026/02/12/the-harness-problem/)
* [2026-02-13, 03:03:33](https://lobste.rs/s/x3vd7h/many_flavors_ignore_files) - [The Many Flavors of Ignore Files](https://nesbitt.io/2026/02/12/the-many-flavors-of-ignore-files.html)
* [2026-02-13, 01:30:00](https://news.slashdot.org/story/26/02/12/211223/cia-makes-new-push-to-recruit-chinese-military-officers-as-informants?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CIA Makes New Push To Recruit Chinese Military Officers as Informants](https://news.slashdot.org/story/26/02/12/211223/cia-makes-new-push-to-recruit-chinese-military-officers-as-informants?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-13, 00:47:00](https://soylentnews.org/article.pl?sid=26/02/12/0318206&amp;from=rss) - [SpaceX is Pivoting to Focus on a Moon Base Before Mars](https://soylentnews.org/article.pl?sid=26/02/12/0318206&amp;from=rss)
* [2026-02-12, 23:52:24](https://news.ycombinator.com/item?id=46997008) - [Resizing windows on macOS Tahoe – the saga continues](https://noheger.at/blog/2026/02/12/resizing-windows-on-macos-tahoe-the-saga-continues/)
* [2026-02-12, 23:19:34](https://lobste.rs/s/bsprvp/apple_has_transparency_issue) - [Apple has a transparency issue](https://www.youtube.com/watch?v=ejPqAJ0dHwY)
* [2026-02-12, 22:58:58](https://news.ycombinator.com/item?id=46996490) - [Tell HN: Ralph Giles has died (Xiph.org| Rust@Mozilla | Ghostscript)](https://news.ycombinator.com/item?id=46996490)
* [2026-02-12, 22:30:00](https://slashdot.org/story/26/02/12/214250/ibm-plans-to-triple-entry-level-hiring-in-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [IBM Plans To Triple Entry-Level Hiring in the US](https://slashdot.org/story/26/02/12/214250/ibm-plans-to-triple-entry-level-hiring-in-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-12, 22:18:47](https://lobste.rs/s/zgdpht/plan_files_2020) - [.plan files (2020)](https://matteolandi.net/plan-files.html)
* [2026-02-12, 21:00:00](https://yro.slashdot.org/story/26/02/12/2055249/wp-engine-says-automattic-planned-to-shake-down-10-hosting-companies-for-wordpress-royalties?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [WP Engine Says Automattic Planned To Shake Down 10 Hosting Companies For WordPress Royalties](https://yro.slashdot.org/story/26/02/12/2055249/wp-engine-says-automattic-planned-to-shake-down-10-hosting-companies-for-wordpress-royalties?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-12, 20:04:00](https://soylentnews.org/article.pl?sid=26/02/12/0316208&amp;from=rss) - [Byte Magazine Artist Robert Tinney, Who Illustrated the Birth of PCs, Dies at 78](https://soylentnews.org/article.pl?sid=26/02/12/0316208&amp;from=rss)
* [2026-02-12, 19:15:21](https://news.ycombinator.com/item?id=46993587) - [Show HN: Moltis – AI assistant with memory, tools, and self-extending skills](https://www.moltis.org)
* [2026-02-12, 18:52:26](https://lobste.rs/s/lel7zt/allocators_from_c_zig) - [Allocators from C to Zig](https://antonz.org/allocators/)
* [2026-02-12, 18:18:40](https://lobste.rs/s/qtxw92/workledger_offline_first_engineering) - [Workledger - An offline first  engineering notebook](https://about.workledger.org/)
* [2026-02-12, 18:06:09](https://news.ycombinator.com/item?id=46992553) - [GPT‑5.3‑Codex‑Spark](https://openai.com/index/introducing-gpt-5-3-codex-spark/)
* [2026-02-12, 17:14:31](https://lobste.rs/s/n4kbuj/ai_agent_published_hit_piece_on_me) - [An AI Agent Published a Hit Piece on Me](https://theshamblog.com/an-ai-agent-published-a-hit-piece-on-me/)
* [2026-02-12, 16:55:50](https://news.ycombinator.com/item?id=46991240) - [Gemini 3 Deep Think](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-deep-think/)
* [2026-02-12, 16:23:24](https://news.ycombinator.com/item?id=46990729) - [An AI agent published a hit piece on me](https://theshamblog.com/an-ai-agent-published-a-hit-piece-on-me/)
* [2026-02-12, 15:23:00](https://soylentnews.org/article.pl?sid=26/02/11/1346239&amp;from=rss) - [Malicious Packages for dYdX Cryptocurrency Exchange Empties User Wallets](https://soylentnews.org/article.pl?sid=26/02/11/1346239&amp;from=rss)
* [2026-02-12, 14:43:25](https://lobste.rs/s/jagwef/css_clicker) - [CSS Clicker](https://lyra.horse/css-clicker/)
* [2026-02-12, 10:33:00](https://soylentnews.org/article.pl?sid=26/02/10/0833231&amp;from=rss) - [Terry Pratchett&apos;s Novels May Have Held Clues to His Dementia a Decade Before Diagnosis](https://soylentnews.org/article.pl?sid=26/02/10/0833231&amp;from=rss)
* [2026-02-12, 05:48:00](https://soylentnews.org/article.pl?sid=26/02/10/0830234&amp;from=rss) - [MIT Scientists Build Terahertz Microscope That Reveals Hidden Superconducting Motion](https://soylentnews.org/article.pl?sid=26/02/10/0830234&amp;from=rss)
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
* [2026-02-10, 02:36:34](https://news.ycombinator.com/item?id=46954637) - [Faster Than Dijkstra?](https://systemsapproach.org/2026/02/09/faster-than-dijkstra/)
* [2026-02-10, 01:38:00](https://soylentnews.org/article.pl?sid=26/02/09/0519218&amp;from=rss) - [A Fresh Look at IBM 3270 Information Display System](https://soylentnews.org/article.pl?sid=26/02/09/0519218&amp;from=rss)
* [2026-02-09, 20:54:00](https://soylentnews.org/article.pl?sid=26/02/09/0514240&amp;from=rss) - [New York Lawmakers Introduce Bill That Aims to Halt Data Center Development for Three Years](https://soylentnews.org/article.pl?sid=26/02/09/0514240&amp;from=rss)
* [2026-02-09, 16:09:00](https://soylentnews.org/article.pl?sid=26/02/08/0232241&amp;from=rss) - [Taking a Second to Change the Time](https://soylentnews.org/article.pl?sid=26/02/08/0232241&amp;from=rss)
* [2026-02-09, 14:39:51](https://news.ycombinator.com/item?id=46945696) - [Do Metaprojects](https://taylor.town/wealth-001)
* [2026-02-09, 12:24:00](https://soylentnews.org/article.pl?sid=26/02/08/0226226&amp;from=rss) - [Vibe Coding is Killing Open Source Software](https://soylentnews.org/article.pl?sid=26/02/08/0226226&amp;from=rss)
* [2026-02-09, 12:17:23](https://news.ycombinator.com/item?id=46944430) - [gRPC: From service definition to wire format](https://kreya.app/blog/grpc-deep-dive/)
* [2026-02-09, 08:39:00](https://soylentnews.org/article.pl?sid=26/02/07/0352243&amp;from=rss) - [The AI productivity trap: Why your Best Engineers are Getting Slower](https://soylentnews.org/article.pl?sid=26/02/07/0352243&amp;from=rss)
* [2026-02-09, 03:54:00](https://soylentnews.org/article.pl?sid=26/02/07/0347222&amp;from=rss) - [FBI Stymied by Apple&apos;s Lockdown Mode After Seizing Journalist&apos;s iPhone](https://soylentnews.org/article.pl?sid=26/02/07/0347222&amp;from=rss)
