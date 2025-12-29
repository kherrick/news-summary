# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [The Silicon Valley Stack Doesn’t Work Here: Why Africa Will Lead the Post-Bloat Web](https://paulallies.medium.com/the-silicon-valley-stack-doesnt-work-here-why-africa-will-lead-the-post-bloat-web-e7c34b577c61) - An analysis of Africa's unique approach to technological development that challenges established norms in Silicon Valley. [Comments](https://lobste.rs/s/pab6so/silicon_valley_stack_doesn_t_work_here_why)

* [Libgodc: Write Go Programs for Sega Dreamcast](https://github.com/drpaneas/libgodc) - A novel library for developing software on a retro gaming console, expanding its development capabilities. [Comments](https://news.ycombinator.com/item?id=46420672)

* [Show HN: Z80-μLM, a 'Conversational AI' That Fits in 40KB](https://github.com/HarryR/z80ai) - A demonstration of a tiny AI system capable of conversational interaction within 40KB of memory. [Comments](https://news.ycombinator.com/item?id=46417815)

* [Clock Synchronization Is a Nightmare](https://arpitbhayani.me/blogs/clock-sync-nightmare/) - A technical exploration of the challenges in achieving accurate clock synchronization in computing. [Comments](https://lobste.rs/s/tnuaff/clock_synchronization_is_nightmare)

## AI and Ethics

* [AI Chatbots May Be Linked to Psychosis, Say Doctors](https://slashdot.org/story/25/12/29/0553256/ai-chatbots-may-be-linked-to-psychosis-say-doctors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Medical professionals raise concerns over the psychological impacts of AI chatbots. [Comments](https://news.ycombinator.com/item?id=46417815)

* [Ask Slashdot: What's the Stupidest Use of AI You Saw In 2025?](https://ask.slashdot.org/story/25/12/29/0738214/ask-slashdot-whats-the-stupidest-use-of-ai-you-saw-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A community discussion on the most absurd applications of AI witnessed in the past year.

* [VC Sees AI-generated Video Gutting the Creator Economy](https://news.slashdot.org/story/25/12/29/186242/vc-sees-ai-generated-video-gutting-the-creator-economy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Analysis of how AI-created video content could disrupt the creative industry. [Comments](https://news.ycombinator.com/item?id=46417815)

## Corporate News and Market Shifts

* [GOG and CD Projekt Founder Acquires 100% Ownership of GOG](https://games.slashdot.org/story/25/12/29/1810221/gog-and-cd-projekt-founder-acquires-100-ownership-of-gog?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Details on the reclaiming of the gaming platform by its original creator. [Comments](https://games.slashdot.org/story/25/12/29/1810221/gog-and-cd-projekt-founder-acquires-100-ownership-of-gog?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Nvidia takes $5B stake in Intel under September agreement](https://www.reuters.com/legal/transactional/nvidia-takes-5-billion-stake-intel-under-september-agreement-2025-12-29/) - Nvidia's strategic investment in Intel reflects its broader industry ambitions. [Comments](https://news.ycombinator.com/item?id=46423010)

* [Tesla's 4680 battery supply chain collapses as partner writes down deal by 99%](https://electrek.co/2025/12/29/tesla-4680-battery-supply-chain-collapses-partner-writes-down-dea/) - The severe financial impact of incomplete battery production partnerships on Tesla's operations. [Comments](https://news.ycombinator.com/item?id=46423290)

## Software Development Insights

* [Five Years of Tinygrad](https://geohot.github.io//blog/jekyll/update/2025/12/29/five-years-of-tinygrad.html) - Reflections on the development and evolution of the Tinygrad library. [Comments](https://news.ycombinator.com/item?id=46422757)

* [Static Allocation with Zig](https://nickmonad.blog/2025/static-allocation-with-zig-kv/) - Exploration of memory allocation techniques in Zig programming language. [Comments](https://news.ycombinator.com/item?id=46422009)

* [Developers remain willing but reluctant to use AI: The 2025 Developer Survey results are here](https://stackoverflow.blog/2025/12/29/developers-remain-willing-but-reluctant-to-use-ai-the-2025-developer-survey-results-are-here/) - Survey results uncover developer sentiment towards AI tools. [Comments](https://lobste.rs/s/gkfdfg/developers_remain_willing_reluctant_use)

## Miscellaneous Insights

* [Kidnapped by Deutsche Bahn](https://www.theocharis.dev/blog/kidnapped-by-deutsche-bahn/) - A personal anecdote turned critique about the quirks of Germany's transport system. [Comments](https://news.ycombinator.com/item?id=46419970)

* [2D Distance Functions](https://iquilezles.org) - A detailed exploration of mathematical functions used to calculate distances in two-dimensional space. [Comments](https://lobste.rs/s/nik5n0/2d_distance_functions)

* [Show HN: My not-for-profit search engine with no ads, no AI, & all DDG bangs](https://nilch.org) - A minimalist search engine prioritizing user privacy and simplicity. [Comments](https://news.ycombinator.com/item?id=46417748)

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

* [2025-12-29, 18:45:00](https://games.slashdot.org/story/25/12/29/1810221/gog-and-cd-projekt-founder-acquires-100-ownership-of-gog?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GOG and CD Projekt Founder Acquires 100% Ownership of GOG](https://games.slashdot.org/story/25/12/29/1810221/gog-and-cd-projekt-founder-acquires-100-ownership-of-gog?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-29, 18:38:48](https://lobste.rs/s/pab6so/silicon_valley_stack_doesn_t_work_here_why) - [The Silicon Valley Stack Doesn’t Work Here: Why Africa Will Lead the Post-Bloat Web](https://paulallies.medium.com/the-silicon-valley-stack-doesnt-work-here-why-africa-will-lead-the-post-bloat-web-e7c34b577c61)
* [2025-12-29, 18:23:08](https://lobste.rs/s/dixnqz/hexacon_2025_keynote_by_ivan_krstic) - [HEXACON 2025 - Keynote by Ivan Krstić](https://www.youtube.com/watch?v=Du8BbJg2Pj4)
* [2025-12-29, 18:21:30](https://news.ycombinator.com/item?id=46423566) - [List of domains censored by German ISPs](https://cuiiliste.de/domains)
* [2025-12-29, 18:06:00](https://news.slashdot.org/story/25/12/29/186242/vc-sees-ai-generated-video-gutting-the-creator-economy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [VC Sees AI-generated Video Gutting the Creator Economy](https://news.slashdot.org/story/25/12/29/186242/vc-sees-ai-generated-video-gutting-the-creator-economy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-29, 17:57:03](https://news.ycombinator.com/item?id=46423290) - [Tesla&apos;s 4680 battery supply chain collapses as partner writes down deal by 99%](https://electrek.co/2025/12/29/tesla-4680-battery-supply-chain-collapses-partner-writes-down-dea/)
* [2025-12-29, 17:32:08](https://news.ycombinator.com/item?id=46423010) - [Nvidia takes $5B stake in Intel under September agreement](https://www.reuters.com/legal/transactional/nvidia-takes-5-billion-stake-intel-under-september-agreement-2025-12-29/)
* [2025-12-29, 17:22:00](https://news.slashdot.org/story/25/12/29/173237/why-academics-should-do-more-consulting?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Why Academics Should Do More Consulting&apos;](https://news.slashdot.org/story/25/12/29/173237/why-academics-should-do-more-consulting?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-29, 17:12:20](https://news.ycombinator.com/item?id=46422757) - [Five Years of Tinygrad](https://geohot.github.io//blog/jekyll/update/2025/12/29/five-years-of-tinygrad.html)
* [2025-12-29, 17:03:36](https://lobste.rs/s/gkfdfg/developers_remain_willing_reluctant_use) - [Developers remain willing but reluctant to use AI: The 2025 Developer Survey results are here](https://stackoverflow.blog/2025/12/29/developers-remain-willing-but-reluctant-to-use-ai-the-2025-developer-survey-results-are-here/)
* [2025-12-29, 16:43:14](https://news.ycombinator.com/item?id=46422412) - [GOG is getting acquired by its original co-founder: What it means for you](https://www.gog.com/blog/gog-is-getting-acquired-by-its-original-co-founder-what-it-means-for-you/)
* [2025-12-29, 16:42:50](https://lobste.rs/s/dythih/git_s_http_server_side_design_does_not) - [Git&apos;s HTTP server side design does not scale](https://xeiaso.net/notes/2025/distributed-git-ddos)
* [2025-12-29, 16:41:00](https://it.slashdot.org/story/25/12/29/1640245/i-switched-to-esim-in-2025-and-i-am-full-of-regret?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;I Switched To eSIM in 2025, and I am Full of Regret&apos;](https://it.slashdot.org/story/25/12/29/1640245/i-switched-to-esim-in-2025-and-i-am-full-of-regret?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-29, 16:07:27](https://news.ycombinator.com/item?id=46422009) - [Static Allocation with Zig](https://nickmonad.blog/2025/static-allocation-with-zig-kv/)
* [2025-12-29, 16:05:34](https://lobste.rs/s/jgzpwk/static_allocation_with_zig) - [Static Allocation with Zig](https://nickmonad.blog/2025/static-allocation-with-zig-kv/)
* [2025-12-29, 16:03:00](https://slashdot.org/story/25/12/29/162224/job-apocalypse-not-yet-ai-is-creating-brand-new-occupations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Job Apocalypse? Not Yet. AI is Creating Brand New Occupations](https://slashdot.org/story/25/12/29/162224/job-apocalypse-not-yet-ai-is-creating-brand-new-occupations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-29, 15:52:47](https://lobste.rs/s/oakjuc/gps_successor_may_be_needed_due_jamming) - [GPS successor may be needed due to jamming vulnerability](https://undark.org/2025/12/24/gps-attack-new-tech/)
* [2025-12-29, 15:36:00](https://soylentnews.org/article.pl?sid=25/12/27/239245&amp;from=rss) - [LG Forces TV Owners to Use Microsoft ‘AI’ Copilot App You Can&apos;t Uninstall and Nobody Asked for](https://soylentnews.org/article.pl?sid=25/12/27/239245&amp;from=rss)
* [2025-12-29, 15:30:20](https://news.ycombinator.com/item?id=46421653) - [Swapping SIM cards used to be easy, and then came eSIM](https://arstechnica.com/gadgets/2025/12/i-switched-to-esim-in-2025-and-i-am-full-of-regret/)
* [2025-12-29, 15:22:00](https://tech.slashdot.org/story/25/12/29/1522239/global-hotel-groups-bet-on-customer-loyalty-to-beat-online-and-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Global Hotel Groups Bet on Customer Loyalty To Beat Online and AI Agents](https://tech.slashdot.org/story/25/12/29/1522239/global-hotel-groups-bet-on-customer-loyalty-to-beat-online-and-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-29, 14:43:39](https://lobste.rs/s/tnuaff/clock_synchronization_is_nightmare) - [Clock Synchronization Is a Nightmare](https://arpitbhayani.me/blogs/clock-sync-nightmare/)
* [2025-12-29, 14:42:00](https://tech.slashdot.org/story/25/12/29/1442208/lg-launches-ultragear-evo-gaming-monitors-with-what-it-claims-is-the-worlds-first-5k-ai-upscaling?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [LG Launches UltraGear Evo Gaming Monitors With What It Claims is the World&apos;s First 5K AI Upscaling](https://tech.slashdot.org/story/25/12/29/1442208/lg-launches-ultragear-evo-gaming-monitors-with-what-it-claims-is-the-worlds-first-5k-ai-upscaling?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-29, 14:37:09](https://lobste.rs/s/qicbhv/garbage_collection_rust_got_little) - [Garbage collection in Rust got a little better](https://claytonwramsey.com/blog/dumpster2/)
* [2025-12-29, 14:00:00](https://it.slashdot.org/story/25/12/29/140214/uk-accounting-body-to-halt-remote-exams-amid-ai-cheating?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Accounting Body To Halt Remote Exams Amid AI Cheating](https://it.slashdot.org/story/25/12/29/140214/uk-accounting-body-to-halt-remote-exams-amid-ai-cheating?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-29, 13:43:29](https://news.ycombinator.com/item?id=46420672) - [Libgodc: Write Go Programs for Sega Dreamcast](https://github.com/drpaneas/libgodc)
* [2025-12-29, 13:22:59](https://news.ycombinator.com/item?id=46420453) - [Show HN: Vibe coding a bookshelf with Claude Code](https://balajmarius.com/writings/vibe-coding-a-bookshelf-with-claude-code/)
* [2025-12-29, 13:14:03](https://lobste.rs/s/jicnhk/how_dynamically_install_custom_html) - [How To Dynamically Install Custom (HTML) Elements](https://heydonworks.com/article/dynamically-loading-custom-elements/)
* [2025-12-29, 13:00:59](https://lobste.rs/s/cwdone/why_are_we_worried_about_memory_access) - [Why are we worried about memory access semantics? Full barriers should be enough for anybody](https://devblogs.microsoft.com/oldnewthing/20251226-00/?p=111919)
* [2025-12-29, 12:40:30](https://lobste.rs/s/ce0ksl/second_great_error_model_convergence) - [The Second Great Error Model Convergence](https://matklad.github.io/2025/12/29/second-error-model-convergence.html)
* [2025-12-29, 12:35:00](https://ask.slashdot.org/story/25/12/29/0738214/ask-slashdot-whats-the-stupidest-use-of-ai-you-saw-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ask Slashdot: What&apos;s the Stupidest Use of AI You Saw In 2025?](https://ask.slashdot.org/story/25/12/29/0738214/ask-slashdot-whats-the-stupidest-use-of-ai-you-saw-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-29, 12:24:00](https://news.ycombinator.com/item?id=46419970) - [Kidnapped by Deutsche Bahn](https://www.theocharis.dev/blog/kidnapped-by-deutsche-bahn/)
* [2025-12-29, 12:23:49](https://news.ycombinator.com/item?id=46419968) - [Linux DAW: Help Linux musicians to quickly and easily find the tools they need](https://linuxdaw.org/)
* [2025-12-29, 11:58:09](https://news.ycombinator.com/item?id=46419822) - [Show HN: See what readers who loved your favorite book/author also loved to read](https://shepherd.com/bboy/2025)
* [2025-12-29, 11:33:46](https://news.ycombinator.com/item?id=46419659) - [Kubernetes egress control with squid proxy](https://interlaye.red/kubernetes_002degress_002dsquid.html)
* [2025-12-29, 10:52:00](https://soylentnews.org/article.pl?sid=25/12/27/235226&amp;from=rss) - [How Recent is \&quot;Recent\&quot;?](https://soylentnews.org/article.pl?sid=25/12/27/235226&amp;from=rss)
* [2025-12-29, 10:44:00](https://it.slashdot.org/story/25/12/29/0642250/60-game-workers-form-first-ubisoft-union-in-north-america?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [60 Game Workers Form First Ubisoft Union in North America](https://it.slashdot.org/story/25/12/29/0642250/60-game-workers-form-first-ubisoft-union-in-north-america?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-29, 10:43:29](https://news.ycombinator.com/item?id=46419273) - [Feynman&apos;s Hughes Lectures: 950 pages of notes](https://thehugheslectures.info/the-lectures/)
* [2025-12-29, 10:00:59](https://lobste.rs/s/mjmtxx/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/mjmtxx/what_are_you_doing_this_week)
* [2025-12-29, 08:44:00](https://games.slashdot.org/story/25/12/29/0637253/breach-forces-ubisoft-to-take-rainbow-six-siege-offline?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Breach Forces Ubisoft to Take &apos;Rainbow Six Siege&apos; Offline](https://games.slashdot.org/story/25/12/29/0637253/breach-forces-ubisoft-to-take-rainbow-six-siege-offline?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-29, 08:43:11](https://lobste.rs/s/cp4qw3/measuring_out_sync_clocks_on_internet) - [Measuring out-of-sync clocks on the Internet](https://alexsci.com/blog/clock-skew/)
* [2025-12-29, 07:54:19](https://news.ycombinator.com/item?id=46418415) - [You can&apos;t design software you don&apos;t work on](https://www.seangoedecke.com/you-cant-design-software-you-dont-work-on/)
* [2025-12-29, 07:52:28](https://lobste.rs/s/zahhx2/trials_visions_internet_relay_chat) - [Trials and Visions of Internet Relay Chat](https://babbagefiles.xyz/no-one-can-be-told-what-irc-is-you-have-to-logon-for-yourself/)
* [2025-12-29, 06:09:00](https://soylentnews.org/article.pl?sid=25/12/27/230209&amp;from=rss) - [Microsoft To Replace All C/C++ With Rust By 2030](https://soylentnews.org/article.pl?sid=25/12/27/230209&amp;from=rss)
* [2025-12-29, 05:55:00](https://slashdot.org/story/25/12/29/0553256/ai-chatbots-may-be-linked-to-psychosis-say-doctors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Chatbots May Be Linked to Psychosis, Say Doctors](https://slashdot.org/story/25/12/29/0553256/ai-chatbots-may-be-linked-to-psychosis-say-doctors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-29, 05:41:24](https://news.ycombinator.com/item?id=46417815) - [Show HN: Z80-μLM, a &apos;Conversational AI&apos; That Fits in 40KB](https://github.com/HarryR/z80ai)
* [2025-12-29, 05:35:17](https://news.ycombinator.com/item?id=46417791) - [Huge Binaries](https://fzakaria.com/2025/12/28/huge-binaries)
* [2025-12-29, 05:35:06](https://lobste.rs/s/vyf7cf/my_first_meshtastic_network) - [My First Meshtastic Network](https://rickcarlino.com/notes/electronics/my-first-meshtastic-network.html)
* [2025-12-29, 05:33:56](https://lobste.rs/s/mytglj/huge_binaries) - [Huge binaries](https://fzakaria.com/2025/12/28/huge-binaries)
* [2025-12-29, 05:25:25](https://news.ycombinator.com/item?id=46417748) - [Show HN: My not-for-profit search engine with no ads, no AI, &amp; all DDG bangs](https://nilch.org)
* [2025-12-29, 05:16:18](https://lobste.rs/s/wwczpv/practical_introduction_finger_trees) - [A Practical Introduction to Finger Trees](https://chrispenner.ca/posts/intro-to-finger-trees)
* [2025-12-29, 05:12:58](https://news.ycombinator.com/item?id=46417676) - [My First Meshtastic Network](https://rickcarlino.com/notes/electronics/my-first-meshtastic-network.html)
* [2025-12-29, 03:32:58](https://lobste.rs/s/nik5n0/2d_distance_functions) - [2D Distance Functions](https://iquilezles.org)
* [2025-12-29, 02:47:44](https://news.ycombinator.com/item?id=46416945) - [You can make up HTML tags](https://maurycyz.com/misc/make-up-tags/)
* [2025-12-29, 02:45:47](https://lobste.rs/s/asstpu/you_can_make_up_html_tags) - [You can make up HTML tags](https://maurycyz.com/misc/make-up-tags/)
* [2025-12-29, 02:34:37](https://lobste.rs/s/wxgtha/consider_nix_flake_for_your_windows_rs) - [Consider a Nix Flake for your windows-rs Project](https://lgug2z.com/articles/consider-a-nix-flake-for-your-windows-rs-project/)
* [2025-12-29, 02:34:00](https://it.slashdot.org/story/25/12/29/004243/rob-pike-angered-by-ai-slop-spam-sent-by-agent-experiment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rob Pike Angered by &apos;AI Slop&apos; Spam Sent By Agent Experiment](https://it.slashdot.org/story/25/12/29/004243/rob-pike-angered-by-ai-slop-spam-sent-by-agent-experiment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-29, 01:17:00](https://soylentnews.org/article.pl?sid=25/12/27/2258256&amp;from=rss) - [Why Swearing Makes You Stronger](https://soylentnews.org/article.pl?sid=25/12/27/2258256&amp;from=rss)
* [2025-12-28, 23:52:24](https://lobste.rs/s/nqawul/what_unprocessed_photo_looks_like) - [What an unprocessed photo looks like](https://maurycyz.com/misc/raw_photo/)
* [2025-12-28, 23:40:00](https://news.slashdot.org/story/25/12/28/2329200/there-was-some-good-news-on-green-energy-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [There Was Some Good News on Green Energy in 2025](https://news.slashdot.org/story/25/12/28/2329200/there-was-some-good-news-on-green-energy-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-28, 22:52:21](https://news.ycombinator.com/item?id=46415338) - [As AI gobbles up chips, prices for devices may rise](https://www.npr.org/2025/12/28/nx-s1-5656190/ai-chips-memory-prices-ram)
* [2025-12-28, 22:40:00](https://entertainment.slashdot.org/story/25/12/28/2238219/no-happy-ending-for-movie-theatres-argues-wsj---no-matter-who-wins-warner-bros?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;No Happy Ending for Movie Theatres&apos;, Argues WSJ - No Matter Who Wins Warner Bros.](https://entertainment.slashdot.org/story/25/12/28/2238219/no-happy-ending-for-movie-theatres-argues-wsj---no-matter-who-wins-warner-bros?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-28, 22:35:02](https://news.ycombinator.com/item?id=46415225) - [What an unprocessed photo looks like](https://maurycyz.com/misc/raw_photo/)
* [2025-12-28, 22:23:33](https://news.ycombinator.com/item?id=46415129) - [Researchers discover molecular difference in autistic brains](https://medicine.yale.edu/news-article/molecular-difference-in-autistic-brains/)
* [2025-12-28, 22:17:33](https://lobste.rs/s/eikvgi/experiment_vibe_coding) - [An experiment in vibe coding](https://nolanlawson.com/2025/12/28/an-experiment-in-vibe-coding/)
* [2025-12-28, 21:41:42](https://news.ycombinator.com/item?id=46414819) - [Unity&apos;s Mono problem: Why your C# code runs slower than it should](https://marekfiser.com/blog/mono-vs-dot-net-in-unity/)
* [2025-12-28, 21:29:32](https://news.ycombinator.com/item?id=46414723) - [Software engineers should be a little bit cynical](https://www.seangoedecke.com/a-little-bit-cynical/)
* [2025-12-28, 20:37:00](https://soylentnews.org/article.pl?sid=25/12/26/2021243&amp;from=rss) - [Your Car&apos;s Web Browser May be on the Road to Cyber Ruin](https://soylentnews.org/article.pl?sid=25/12/26/2021243&amp;from=rss)
* [2025-12-28, 19:09:51](https://lobste.rs/s/cogzfg/parsing_advances) - [Parsing Advances](https://matklad.github.io/2025/12/28/parsing-advances.html)
* [2025-12-28, 17:21:07](https://lobste.rs/s/xs3arv/tiny_types_first_schema_validation_for) - [Tiny, types-first schema validation for TypeScript](https://github.com/easrng/schema)
* [2025-12-28, 17:00:00](https://soylentnews.org/article.pl?sid=25/12/28/1357214&amp;from=rss) - [The 39th Chaos Communication Congress (39C3) Taking Place Now in Hamburg Through 30 Dec 2025](https://soylentnews.org/article.pl?sid=25/12/28/1357214&amp;from=rss)
* [2025-12-28, 15:49:00](https://soylentnews.org/article.pl?sid=25/12/26/2015254&amp;from=rss) - [How OpenAI is Using GPT-5 Codex to Improve the AI Tool Itself](https://soylentnews.org/article.pl?sid=25/12/26/2015254&amp;from=rss)
* [2025-12-28, 11:02:00](https://soylentnews.org/article.pl?sid=25/12/26/205213&amp;from=rss) - [Will AI Kill All the Lawyers?](https://soylentnews.org/article.pl?sid=25/12/26/205213&amp;from=rss)
* [2025-12-28, 06:19:00](https://soylentnews.org/article.pl?sid=25/12/26/1958223&amp;from=rss) - [Texas Sues TV Makers for Taking Screenshots of What People Watch](https://soylentnews.org/article.pl?sid=25/12/26/1958223&amp;from=rss)
* [2025-12-28, 04:24:51](https://lobste.rs/s/fng667/replacing_js_with_just_html) - [Replacing JS with just HTML](https://www.htmhell.dev/adventcalendar/2025/27/)
* [2025-12-28, 01:33:00](https://soylentnews.org/article.pl?sid=25/12/26/1946250&amp;from=rss) - [Who Sets the Doomsday Clock?](https://soylentnews.org/article.pl?sid=25/12/26/1946250&amp;from=rss)
* [2025-12-27, 20:44:00](https://soylentnews.org/article.pl?sid=25/12/25/226213&amp;from=rss) - [Night Waking Impacts Cognitive Performance Regardless of Sleep Duration](https://soylentnews.org/article.pl?sid=25/12/25/226213&amp;from=rss)
* [2025-12-27, 15:53:00](https://soylentnews.org/article.pl?sid=25/12/25/224204&amp;from=rss) - [EU Offers UK Early Gift: Data Adequacy Until 2031](https://soylentnews.org/article.pl?sid=25/12/25/224204&amp;from=rss)
* [2025-12-27, 11:16:00](https://soylentnews.org/article.pl?sid=25/12/25/222237&amp;from=rss) - [Science Sleuths Raise Concerns About Scores of Bioengineering Papers](https://soylentnews.org/article.pl?sid=25/12/25/222237&amp;from=rss)
* [2025-12-27, 06:25:00](https://soylentnews.org/article.pl?sid=25/12/25/2156225&amp;from=rss) - [We May Never be Able to Tell If AI Becomes Conscious, Argues Philosopher](https://soylentnews.org/article.pl?sid=25/12/25/2156225&amp;from=rss)
* [2025-12-27, 01:40:00](https://soylentnews.org/article.pl?sid=25/12/25/2154252&amp;from=rss) - [MIT Reveals How High-Fat Diets Quietly Prime the Liver for Cancer](https://soylentnews.org/article.pl?sid=25/12/25/2154252&amp;from=rss)
* [2025-12-26, 23:34:06](https://news.ycombinator.com/item?id=46397537) - [Show HN: Spacelist, a TUI for Aerospace window manager](https://github.com/magicmark/spacelist)
* [2025-12-26, 22:06:15](https://news.ycombinator.com/item?id=46396824) - [Developing a Beautiful and Performant Block Editor in Qt C++ and QML](https://rubymamistvalove.com/block-editor)
* [2025-12-26, 20:55:00](https://soylentnews.org/article.pl?sid=25/12/23/0437256&amp;from=rss) - [Disaster After Disaster: Do We Have Enough Raw Materials to &apos;Build Back Better?&apos;](https://soylentnews.org/article.pl?sid=25/12/23/0437256&amp;from=rss)
* [2025-12-26, 18:01:00](https://soylentnews.org/article.pl?sid=25/12/26/1546258&amp;from=rss) - [Options to Break Free From Smart TV Ads and Tracking](https://soylentnews.org/article.pl?sid=25/12/26/1546258&amp;from=rss)
* [2025-12-26, 16:12:00](https://soylentnews.org/article.pl?sid=25/12/23/0432237&amp;from=rss) - [Reddit challenges AUS Social Media law in court](https://soylentnews.org/article.pl?sid=25/12/23/0432237&amp;from=rss)
* [2025-12-26, 15:28:15](https://news.ycombinator.com/item?id=46393003) - [My coworker&apos;s 36 key Corne open-source keyboard setup](https://nuon.co/blog/nuon-keyboard-culture/)
* [2025-12-26, 11:20:00](https://soylentnews.org/article.pl?sid=25/12/23/0431239&amp;from=rss) - [Climate Misinformation is Becoming a National Security Threat. Canada Isn&apos;t Ready for It](https://soylentnews.org/article.pl?sid=25/12/23/0431239&amp;from=rss)
* [2025-12-26, 06:46:00](https://soylentnews.org/article.pl?sid=25/12/23/0429249&amp;from=rss) - [Seven Projects Killed by Ubuntu (but I Still Miss Them)](https://soylentnews.org/article.pl?sid=25/12/23/0429249&amp;from=rss)
* [2025-12-26, 01:55:00](https://soylentnews.org/article.pl?sid=25/12/23/0426211&amp;from=rss) - [Pennsylvania High Court Rules Police Can Access Google Searches Without Warrant](https://soylentnews.org/article.pl?sid=25/12/23/0426211&amp;from=rss)
* [2025-12-25, 21:13:00](https://soylentnews.org/article.pl?sid=25/12/22/1756237&amp;from=rss) - [In-Car Touchscreens Are Way More Distracting Than We First Thought, Says New Study](https://soylentnews.org/article.pl?sid=25/12/22/1756237&amp;from=rss)
* [2025-12-25, 16:27:00](https://soylentnews.org/article.pl?sid=25/12/22/1755209&amp;from=rss) - [Trump Signs Executive Order Reclassifying Cannabis, Opening Door to Broader Weed Access](https://soylentnews.org/article.pl?sid=25/12/22/1755209&amp;from=rss)
* [2025-12-25, 11:43:00](https://soylentnews.org/article.pl?sid=25/12/22/1751236&amp;from=rss) - [Danish Postal Service to Stop Delivering Letters After 400 Years](https://soylentnews.org/article.pl?sid=25/12/22/1751236&amp;from=rss)
* [2025-12-25, 06:58:00](https://soylentnews.org/article.pl?sid=25/12/22/1749222&amp;from=rss) - [Cosmic Crash Caught on Camera](https://soylentnews.org/article.pl?sid=25/12/22/1749222&amp;from=rss)
* [2025-12-25, 02:15:00](https://soylentnews.org/article.pl?sid=25/12/22/1747232&amp;from=rss) - [The Lost Story of Alan Turing’s Secret “Delilah” Project](https://soylentnews.org/article.pl?sid=25/12/22/1747232&amp;from=rss)
