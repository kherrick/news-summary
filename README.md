# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [SpaceX Strikes Deal With Coding Startup Cursor For $60 Billion](https://developers.slashdot.org/story/26/04/21/2343219/spacex-strikes-deal-with-coding-startup-cursor-for-60-billion?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://developers.slashdot.org/story/26/04/21/2343219/spacex-strikes-deal-with-coding-startup-cursor-for-60-billion?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Framework Laptop 13 Pro Is a Major Overhaul For the Modular, Upgradeable Laptop](https://hardware.slashdot.org/story/26/04/21/2019256/framework-laptop-13-pro-is-a-major-overhaul-for-the-modular-upgradeable-laptop?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://lobste.rs/s/0rzs0d/framework_laptop_13_pro_intel_core_ultra_3))

* [Highlights from Git 2.54](https://github.blog/open-source/git/highlights-from-git-2-54/) ([comments](https://lobste.rs/s/ojh2aq/highlights_from_git_2_54))

* [Meta To Start Capturing Employee Mouse Movements, Keystrokes For AI Training Data](https://tech.slashdot.org/story/26/04/21/1849217/meta-to-start-capturing-employee-mouse-movements-keystrokes-for-ai-training-data?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=47851948))

* [Diverse Organic Molecules on Mars Revealed by the First SAM TMAH Experiment](https://www.courthousenews.com/preserved-for-billions-of-years-organic-compounds-found-on-mars/) ([comments](https://news.ycombinator.com/item?id=47846861))

* [Wait is over - coreboot on the AMD StarBook](https://starlabs.systems/blogs/news/coreboot-on-the-amd-starbook-finally) ([comments](https://lobste.rs/s/wt6xvx/wait_is_over_coreboot_on_amd_starbook))

## Space Exploration

* [Total Solar Eclipse Led to Seismic Quiet for Cities Within its Path](https://soylentnews.org/article.pl?sid=26/04/20/0228241&from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/04/20/0228241&from=rss))

* [FBI Looks into Dead or Missing Scientists Tied to NASA, Blue Origin, SpaceX](https://fortune.com/2026/04/21/scientists-disappear-die-nasa-space-blue-origin-spacex/) ([comments](https://news.ycombinator.com/item?id=47858246))

* [A Fresh Scar on the Moon: Newly Discovered Crater Reveals Recent Impact](https://soylentnews.org/article.pl?sid=26/04/19/1341258&from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/04/19/1341258&from=rss))

* [Meet Orpheus—a Hopper Mission Built to Hunt for Life in Martian Volcanoes](https://soylentnews.org/article.pl?sid=26/04/17/0326235&from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/04/17/0326235&from=rss))

## Artificial Intelligence

* [Is Claude Code Going to Cost $100/Month? Probably Not—it’s All Very Confusing](https://simonwillison.net/2026/Apr/22/claude-code-confusion/) ([comments](https://lobste.rs/s/0qdgc0/is_claude_code_going_cost_100_month))

* [Job Cuts Driven By AI Are Rising on Wall Street](https://news.slashdot.org/story/26/04/21/194240/job-cuts-driven-by-ai-are-rising-on-wall-street?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://tech.slashdot.org/story/26/04/21/1849217/meta-to-start-capturing-employee-mouse-movements-keystrokes-for-ai-training-data?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Drunk Post: Things I&apos;ve Learned as a Senior Engineer](https://luminousmen.substack.com/p/drunk-post-things-ive-learned-as) ([comments](https://news.ycombinator.com/item?id=47856535))

* [Maryland Becomes First State To Pass Bill Banning 'Surveillance Pricing'](https://yro.slashdot.org/story/26/04/21/0115210/maryland-becomes-first-state-to-pass-bill-banning-surveillance-pricing?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://lobste.rs/s/cfzhwf/how_are_you_protecting_yourself_against))

## Science & Environment

* [Global Growth In Solar 'the Largest Ever Observed For Any Source'](https://hardware.slashdot.org/story/26/04/21/1549243/global-growth-in-solar-the-largest-ever-observed-for-any-source?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=47857509))

* [Online Response to the Attack on Sam Altman&apos;s House Shows a Generational Divide](https://soylentnews.org/article.pl?sid=26/04/17/0336248&from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/04/17/0336248&from=rss))

* [Irish Bog Plant Revives Ancient Remedy as a New Weapon Vs Superbugs](https://soylentnews.org/article.pl?sid=26/04/18/1847221&from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/04/18/1847221&from=rss))

* [10 Math Books That Sharpen Your Thinking](https://soylentnews.org/article.pl?sid=26/04/18/2352244&from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/04/18/2352244&from=rss))

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

* [2026-04-22, 05:17:23](https://lobste.rs/s/nvwn1i/math_is_hard_openbsd_on_vax) - [Math is hard (OpenBSD on VAX)](http://miod.online.fr/software/openbsd/stories/vaxfp.html)
* [2026-04-22, 03:30:00](https://developers.slashdot.org/story/26/04/21/2343219/spacex-strikes-deal-with-coding-startup-cursor-for-60-billion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SpaceX Strikes Deal With Coding Startup Cursor For $60 Billion](https://developers.slashdot.org/story/26/04/21/2343219/spacex-strikes-deal-with-coding-startup-cursor-for-60-billion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-22, 02:57:34](https://lobste.rs/s/0qdgc0/is_claude_code_going_cost_100_month) - [Is Claude Code going to cost $100/month? Probably not—it’s all very confusing](https://simonwillison.net/2026/Apr/22/claude-code-confusion/)
* [2026-04-22, 02:49:40](https://news.ycombinator.com/item?id=47858246) - [FBI looks into dead or missing scientists tied to NASA, Blue Origin, SpaceX](https://fortune.com/2026/04/21/scientists-disappear-die-nasa-space-blue-origin-spacex/)
* [2026-04-22, 02:34:00](https://soylentnews.org/article.pl?sid=26/04/20/0228241&amp;from=rss) - [Total Solar Eclipse Led to Seismic Quiet for Cities Within its Path](https://soylentnews.org/article.pl?sid=26/04/20/0228241&amp;from=rss)
* [2026-04-22, 01:25:04](https://news.ycombinator.com/item?id=47857509) - [Global growth in solar \&quot;the largest ever observed for any source\&quot;](https://arstechnica.com/science/2026/04/global-growth-in-solar-the-largest-ever-observed-for-any-source/)
* [2026-04-22, 01:21:09](https://news.ycombinator.com/item?id=47857477) - [San Diego rents declined following surge in supply](https://www.kpbs.org/news/economy/2026/03/27/san-diego-rents-declined-more-than-19-of-nations-top-20-markets-following-surge-in-supply)
* [2026-04-22, 01:19:30](https://news.ycombinator.com/item?id=47857461) - [I&apos;m Sick of AI Everything](https://news.ycombinator.com/item?id=47857461)
* [2026-04-21, 23:53:45](https://news.ycombinator.com/item?id=47856535) - [Drunk Post: Things I&apos;ve Learned as a Senior Engineer](https://luminousmen.substack.com/p/drunk-post-things-ive-learned-as)
* [2026-04-21, 23:00:00](https://yro.slashdot.org/story/26/04/21/2039235/florida-launches-criminal-investigation-into-chatgpt-over-school-shooting?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Florida Launches Criminal Investigation Into ChatGPT Over School Shooting](https://yro.slashdot.org/story/26/04/21/2039235/florida-launches-criminal-investigation-into-chatgpt-over-school-shooting?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-21, 22:13:18](https://news.ycombinator.com/item?id=47855293) - [SpaceX says it has agreement to acquire Cursor for $60B](https://twitter.com/spacex/status/2046713419978453374)
* [2026-04-21, 22:00:00](https://news.slashdot.org/story/26/04/21/2028206/mozilla-uses-anthropics-mythos-to-fix-271-bugs-in-firefox?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mozilla Uses Anthropic&apos;s Mythos To Fix 271 Bugs In Firefox](https://news.slashdot.org/story/26/04/21/2028206/mozilla-uses-anthropics-mythos-to-fix-271-bugs-in-firefox?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-21, 21:50:00](https://soylentnews.org/article.pl?sid=26/04/19/1341258&amp;from=rss) - [A Fresh Scar on the Moon: Newly Discovered Crater Reveals Recent Impact](https://soylentnews.org/article.pl?sid=26/04/19/1341258&amp;from=rss)
* [2026-04-21, 21:03:04](https://news.ycombinator.com/item?id=47854477) - [Claude Code to be removed from Anthropic&apos;s Pro plan?](https://bsky.app/profile/edzitron.com/post/3mjzxwfx3qs2a)
* [2026-04-21, 21:00:00](https://hardware.slashdot.org/story/26/04/21/2019256/framework-laptop-13-pro-is-a-major-overhaul-for-the-modular-upgradeable-laptop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Framework Laptop 13 Pro Is a Major Overhaul For the Modular, Upgradeable Laptop](https://hardware.slashdot.org/story/26/04/21/2019256/framework-laptop-13-pro-is-a-major-overhaul-for-the-modular-upgradeable-laptop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-21, 20:18:32](https://lobste.rs/s/48omfn/announcing_typescript_7_0_beta) - [Announcing TypeScript 7.0 Beta](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0-beta/)
* [2026-04-21, 20:02:21](https://lobste.rs/s/p8idoc/i_don_t_want_your_prs_anymore) - [I don&apos;t want your PRs anymore](https://dpc.pw/posts/i-dont-want-your-prs-anymore/)
* [2026-04-21, 20:00:00](https://news.slashdot.org/story/26/04/21/194240/job-cuts-driven-by-ai-are-rising-on-wall-street?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Job Cuts Driven By AI Are Rising On Wall Street](https://news.slashdot.org/story/26/04/21/194240/job-cuts-driven-by-ai-are-rising-on-wall-street?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-21, 19:25:26](https://lobste.rs/s/uczgez/switching_from_uv_pdm) - [Switching from uv to PDM](https://stuartm.nz/2026/04/pdm-rocks/)
* [2026-04-21, 19:24:03](https://lobste.rs/s/0rzs0d/framework_laptop_13_pro_intel_core_ultra_3) - [Framework Laptop 13 Pro: Intel Core Ultra 3 &amp; LPCAMM2](https://frame.work/laptop13pro)
* [2026-04-21, 19:20:28](https://lobste.rs/s/yyuyni/building_enterprise_homelab_part_5) - [Building an Enterprise Homelab - Part 5: The Synology Btrfs Trap](https://rant.mvh.dev/building-an-enterprise-homelab-part-5-the-synology-btrfs-trap/)
* [2026-04-21, 19:11:02](https://lobste.rs/s/glpz3r/zero_days_are_numbered) - [The zero-days are numbered](https://blog.mozilla.org/en/privacy-security/ai-security-zero-day-vulnerabilities/)
* [2026-04-21, 19:00:00](https://tech.slashdot.org/story/26/04/21/1849217/meta-to-start-capturing-employee-mouse-movements-keystrokes-for-ai-training-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta To Start Capturing Employee Mouse Movements, Keystrokes For AI Training Data](https://tech.slashdot.org/story/26/04/21/1849217/meta-to-start-capturing-employee-mouse-movements-keystrokes-for-ai-training-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-21, 18:50:00](https://news.ycombinator.com/item?id=47852835) - [ChatGPT Images 2.0](https://openai.com/index/introducing-chatgpt-images-2-0/)
* [2026-04-21, 18:17:05](https://lobste.rs/s/ojh2aq/highlights_from_git_2_54) - [Highlights from Git 2.54](https://github.blog/open-source/git/highlights-from-git-2-54/)
* [2026-04-21, 18:00:34](https://news.ycombinator.com/item?id=47852177) - [Framework Laptop 13 Pro](https://frame.work/laptop13pro)
* [2026-04-21, 18:00:00](https://developers.slashdot.org/story/26/04/21/1655253/googles-internal-politics-leave-it-playing-catch-up-on-ai-coding?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s Internal Politics Leave It Playing Catch-Up On AI Coding](https://developers.slashdot.org/story/26/04/21/1655253/googles-internal-politics-leave-it-playing-catch-up-on-ai-coding?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-21, 17:58:21](https://news.ycombinator.com/item?id=47852155) - [Cal.diy: open-source community edition of cal.com](https://github.com/calcom/cal.diy)
* [2026-04-21, 17:40:43](https://lobste.rs/s/mrmvl5/using_quic_backscatter_infer_hypergiant) - [Using QUIC backscatter to infer hypergiant deployment configurations](https://blog.apnic.net/2026/04/21/using-quic-backscatter-to-infer-hypergiant-deployment-configurations/)
* [2026-04-21, 17:40:39](https://news.ycombinator.com/item?id=47851948) - [Meta to start capturing employee mouse movements, keystrokes for AI training](https://www.reuters.com/sustainability/boards-policy-regulation/meta-start-capturing-employee-mouse-movements-keystrokes-ai-training-data-2026-04-21/)
* [2026-04-21, 17:33:50](https://news.ycombinator.com/item?id=47851885) - [Britannica11.org – a structured edition of the 1911 Encyclopædia Britannica](https://britannica11.org/)
* [2026-04-21, 17:14:35](https://news.ycombinator.com/item?id=47851634) - [The Vercel breach: OAuth attack exposes risk in platform environment variables](https://www.trendmicro.com/en_us/research/26/d/vercel-breach-oauth-supply-chain.html)
* [2026-04-21, 17:05:00](https://soylentnews.org/article.pl?sid=26/04/19/1338217&amp;from=rss) - [Europol Launches Operation PowerOFF — Warns 75,000 DDoS Users and Takes Down 53 Domains](https://soylentnews.org/article.pl?sid=26/04/19/1338217&amp;from=rss)
* [2026-04-21, 17:01:15](https://news.ycombinator.com/item?id=47851456) - [Trellis AI (YC W24) Is hiring engineers to build self-improving agents](https://www.ycombinator.com/companies/trellis-ai/jobs/SvzJaTH-member-of-technical-staff-product-engineering-full-time)
* [2026-04-21, 17:00:00](https://games.slashdot.org/story/26/04/21/1639222/xbox-game-pass-ultimate-gets-a-price-cut?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Xbox Game Pass Ultimate Gets a Price Cut](https://games.slashdot.org/story/26/04/21/1639222/xbox-game-pass-ultimate-gets-a-price-cut?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-21, 16:06:59](https://lobste.rs/s/2jqoor/force_all_app_traffic_into_tunnel) - [Force all app traffic into the tunnel](https://mullvad.net/en/blog/force-all-app-traffic-into-the-tunnel)
* [2026-04-21, 16:00:00](https://hardware.slashdot.org/story/26/04/21/1549243/global-growth-in-solar-the-largest-ever-observed-for-any-source?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Global Growth In Solar &apos;the Largest Ever Observed For Any Source&apos;](https://hardware.slashdot.org/story/26/04/21/1549243/global-growth-in-solar-the-largest-ever-observed-for-any-source?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-21, 15:55:07](https://lobste.rs/s/6vx5uy/features_everyone_should_steal_from_npmx) - [Features everyone should steal from npmx](https://nesbitt.io/2026/04/16/features-everyone-should-steal-from-npmx.html)
* [2026-04-21, 15:29:16](https://news.ycombinator.com/item?id=47850212) - [CrabTrap: An LLM-as-a-judge HTTP proxy to secure agents in production](https://www.brex.com/crabtrap)
* [2026-04-21, 15:00:00](https://yro.slashdot.org/story/26/04/21/0115210/maryland-becomes-first-state-to-pass-bill-banning-surveillance-pricing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Maryland Becomes First State To Pass Bill Banning &apos;Surveillance Pricing&apos;](https://yro.slashdot.org/story/26/04/21/0115210/maryland-becomes-first-state-to-pass-bill-banning-surveillance-pricing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-21, 14:03:20](https://lobste.rs/s/fgwvua/performance_wren_programming_language) - [Performance of the Wren programming language](https://wren.io/performance.html)
* [2026-04-21, 13:53:02](https://lobste.rs/s/cfzhwf/how_are_you_protecting_yourself_against) - [How are you protecting yourself against the imminent AI dooms zero day?](https://lobste.rs/s/cfzhwf/how_are_you_protecting_yourself_against)
* [2026-04-21, 13:48:53](https://lobste.rs/s/ual4t5/grasp_simple_protocol_for_decentralized) - [grasp: a simple protocol for decentralized git](https://gitgrasp.com/)
* [2026-04-21, 13:19:29](https://lobste.rs/s/5r04ck/lixcon_2026) - [LixCon 2026](https://media.ccc.de/c/lixcon2026)
* [2026-04-21, 12:30:49](https://lobste.rs/s/prquts/emacs_is_my_browser) - [Emacs is my browser](https://joshblais.com/blog/emacs-as-my-browser/)
* [2026-04-21, 12:19:00](https://soylentnews.org/article.pl?sid=26/04/19/1333258&amp;from=rss) - [Soviet CDs and CD Players Existed, and They Were Strange](https://soylentnews.org/article.pl?sid=26/04/19/1333258&amp;from=rss)
* [2026-04-21, 11:58:16](https://news.ycombinator.com/item?id=47847558) - [Show HN: VidStudio, a browser based video editor that doesn&apos;t upload your files](https://vidstudio.app/video-editor)
* [2026-04-21, 11:04:56](https://news.ycombinator.com/item?id=47847179) - [Laws of Software Engineering](https://lawsofsoftwareengineering.com)
* [2026-04-21, 11:00:00](https://slashdot.org/story/26/04/21/014228/amazon-to-invest-up-to-another-25-billion-in-anthropic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon To Invest Up To Another $25 Billion In Anthropic](https://slashdot.org/story/26/04/21/014228/amazon-to-invest-up-to-another-25-billion-in-anthropic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-21, 10:19:49](https://news.ycombinator.com/item?id=47846861) - [Diverse organic molecules on Mars revealed by the first SAM TMAH experiment](https://www.courthousenews.com/preserved-for-billions-of-years-organic-compounds-found-on-mars/)
* [2026-04-21, 10:17:18](https://lobste.rs/s/p3fzyr/finishing_things) - [Finishing Things](https://ratfactor.com/finishing-things)
* [2026-04-21, 10:09:48](https://lobste.rs/s/xqmug2/what_is_your_go_project_for_learning_new) - [What is your go-to project for learning a new language?](https://lobste.rs/s/xqmug2/what_is_your_go_project_for_learning_new)
* [2026-04-21, 09:48:45](https://lobste.rs/s/wt6xvx/wait_is_over_coreboot_on_amd_starbook) - [Wait is over - coreboot on the AMD StarBook](https://starlabs.systems/blogs/news/coreboot-on-the-amd-starbook-finally)
* [2026-04-21, 09:37:13](https://lobste.rs/s/vrmjge/how_make_fast_dynamic_language) - [How To Make a Fast Dynamic Language Interpreter](https://zef-lang.dev/implementation)
* [2026-04-21, 07:32:00](https://soylentnews.org/article.pl?sid=26/04/19/125219&amp;from=rss) - [Chinese Carmaker Patents Voice-Controlled &apos;in-Vehicle Toilet&apos;](https://soylentnews.org/article.pl?sid=26/04/19/125219&amp;from=rss)
* [2026-04-21, 07:00:00](https://science.slashdot.org/story/26/04/21/0012245/iphone-video-shows-earthset-from-space?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [iPhone Video Shows &apos;Earthset&apos; From Space](https://science.slashdot.org/story/26/04/21/0012245/iphone-video-shows-earthset-from-space?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-21, 03:30:00](https://games.slashdot.org/story/26/04/20/2357225/playstation-to-require-age-verification-for-messages-and-voice-chat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [PlayStation To Require Age Verification For Messages and Voice Chat](https://games.slashdot.org/story/26/04/20/2357225/playstation-to-require-age-verification-for-messages-and-voice-chat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-21, 02:47:00](https://soylentnews.org/article.pl?sid=26/04/19/120245&amp;from=rss) - [In the Face of Rampant AI, is ‘Data Poisoning’ a New Form of Civil Disobedience?](https://soylentnews.org/article.pl?sid=26/04/19/120245&amp;from=rss)
* [2026-04-20, 23:35:06](https://news.ycombinator.com/item?id=47842569) - [Making RAM at Home [video]](https://www.youtube.com/watch?v=h6GWikWlAQA)
* [2026-04-20, 23:00:00](https://mobile.slashdot.org/story/26/04/20/2014246/mobile-phones-to-be-banned-in-schools-in-england-under-new-plans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mobile Phones To Be Banned In Schools In England Under New Plans](https://mobile.slashdot.org/story/26/04/20/2014246/mobile-phones-to-be-banned-in-schools-in-england-under-new-plans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-20, 22:08:39](https://lobste.rs/s/etrtmp/jujutsu_megamerges_for_fun_profit) - [Jujutsu megamerges for fun and profit](https://isaaccorbrey.com/notes/jujutsu-megamerges-for-fun-and-profit)
* [2026-04-20, 22:05:00](https://apple.slashdot.org/story/26/04/20/221244/apple-ceo-tim-cook-is-stepping-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple CEO Tim Cook Is Stepping Down](https://apple.slashdot.org/story/26/04/20/221244/apple-ceo-tim-cook-is-stepping-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-20, 22:02:00](https://soylentnews.org/article.pl?sid=26/04/19/1148259&amp;from=rss) - [The Quiet Colossus](https://soylentnews.org/article.pl?sid=26/04/19/1148259&amp;from=rss)
* [2026-04-20, 20:54:37](https://lobste.rs/s/47iclr/stalwart_v0_16_new_foundation) - [Stalwart v0.16: A New Foundation](https://stalw.art/blog/stalwart-0-16)
* [2026-04-20, 18:40:55](https://lobste.rs/s/ea0xug/quantum_computers_are_not_threat_128_bit) - [Quantum Computers Are Not a Threat to 128-bit Symmetric Keys](https://words.filippo.io/128-bits/)
* [2026-04-20, 18:24:05](https://news.ycombinator.com/item?id=47838508) - [Changes to GitHub Copilot individual plans](https://github.blog/news-insights/company-news/changes-to-github-copilot-individual-plans/)
* [2026-04-20, 17:16:00](https://soylentnews.org/article.pl?sid=26/04/19/1147228&amp;from=rss) - [How Much Does Chatbot Bias Influence Users? A Lot, It Turns Out](https://soylentnews.org/article.pl?sid=26/04/19/1147228&amp;from=rss)
* [2026-04-20, 15:34:45](https://news.ycombinator.com/item?id=47835837) - [A printing press for biological data](https://www.owlposting.com/p/the-printing-press-for-biological)
* [2026-04-20, 15:21:16](https://news.ycombinator.com/item?id=47835635) - [Acetaminophen vs. ibuprofen](https://asteriskmag.com/issues/14/the-mystery-in-the-medicine-cabinet)
* [2026-04-20, 13:06:15](https://lobste.rs/s/uxkvmr/forgejo_v15_0_is_available) - [Forgejo v15.0 is available](https://forgejo.org/2026-04-release-v15-0/)
* [2026-04-20, 12:29:00](https://soylentnews.org/article.pl?sid=26/04/19/000236&amp;from=rss) - [Russia Hits European Thermal Power Plant in Attempted ‘Destructive’ Cyberattack](https://soylentnews.org/article.pl?sid=26/04/19/000236&amp;from=rss)
* [2026-04-20, 07:43:00](https://soylentnews.org/article.pl?sid=26/04/18/2354201&amp;from=rss) - [How Two Motorola Transistors Became the World&apos;s Default NPNs](https://soylentnews.org/article.pl?sid=26/04/18/2354201&amp;from=rss)
* [2026-04-20, 05:30:06](https://news.ycombinator.com/item?id=47830687) - [Fields Medal Video: Maryna Viazovska (2022)](https://www.simonsfoundation.org/2022/07/05/fields-medal-video-maryna-viazovska/)
* [2026-04-20, 04:14:48](https://news.ycombinator.com/item?id=47830332) - [Theseus, a Static Windows Emulator](https://neugierig.org/software/blog/2026/04/theseus.html)
* [2026-04-20, 03:01:00](https://soylentnews.org/article.pl?sid=26/04/18/2352244&amp;from=rss) - [10 Math Books That Sharpen Your Thinking](https://soylentnews.org/article.pl?sid=26/04/18/2352244&amp;from=rss)
* [2026-04-19, 22:16:00](https://soylentnews.org/article.pl?sid=26/04/18/2348241&amp;from=rss) - [“TotalRecall Reloaded” Tool Finds a Side Entrance to the Windows 11 Recall Database](https://soylentnews.org/article.pl?sid=26/04/18/2348241&amp;from=rss)
* [2026-04-19, 21:57:25](https://news.ycombinator.com/item?id=47827991) - [Hunting a 34 year old pointer bug in EtherSlip (DOS Networking)](https://www.brutman.com/Adventures_In_Code/EtherSlip_ARP/EtherSlip_ARP.html)
* [2026-04-19, 17:34:00](https://soylentnews.org/article.pl?sid=26/04/18/195238&amp;from=rss) - [Pentagon Reportedly Asks Detroit to Use More Car Factories as Arms Factories](https://soylentnews.org/article.pl?sid=26/04/18/195238&amp;from=rss)
* [2026-04-19, 12:51:00](https://soylentnews.org/article.pl?sid=26/04/18/192211&amp;from=rss) - [The \&quot;Passive Income\&quot; Trap Ate a Generation of Entrepreneurs](https://soylentnews.org/article.pl?sid=26/04/18/192211&amp;from=rss)
* [2026-04-19, 09:26:04](https://news.ycombinator.com/item?id=47822978) - [Edit store price tags using Flipper Zero](https://github.com/i12bp8/TagTinker)
* [2026-04-19, 08:03:00](https://soylentnews.org/article.pl?sid=26/04/18/1855201&amp;from=rss) - [Why the Phrase &apos;Super El Niño&apos; Makes Australian Climate Scientists Roll Their Eyes](https://soylentnews.org/article.pl?sid=26/04/18/1855201&amp;from=rss)
* [2026-04-19, 04:28:31](https://news.ycombinator.com/item?id=47821801) - [Windows Server 2025 Runs Better on ARM](https://jasoneckert.github.io/myblog/server-2025-arm64/)
* [2026-04-19, 03:14:00](https://soylentnews.org/article.pl?sid=26/04/18/1847221&amp;from=rss) - [Irish Bog Plant Revives Ancient Remedy as a New Weapon Vs Superbugs](https://soylentnews.org/article.pl?sid=26/04/18/1847221&amp;from=rss)
* [2026-04-18, 22:26:00](https://soylentnews.org/article.pl?sid=26/04/17/0348237&amp;from=rss) - [Netgear Routers Seemingly Won&apos;t be Banned in the US After All](https://soylentnews.org/article.pl?sid=26/04/17/0348237&amp;from=rss)
* [2026-04-18, 17:42:00](https://soylentnews.org/article.pl?sid=26/04/17/0337240&amp;from=rss) - [Scientists Invented a Fake Disease. AI Told People It Was Real](https://soylentnews.org/article.pl?sid=26/04/17/0337240&amp;from=rss)
* [2026-04-18, 14:45:41](https://news.ycombinator.com/item?id=47816333) - [Optimizing Tail Sampling in OpenTelemetry with Retroactive Sampling](https://victoriametrics.com/blog/kubecon-eu-2026-sampling/index.html)
* [2026-04-18, 12:54:00](https://soylentnews.org/article.pl?sid=26/04/17/0336248&amp;from=rss) - [Online Response to the Attack on Sam Altman&apos;s House Shows a Generational Divide](https://soylentnews.org/article.pl?sid=26/04/17/0336248&amp;from=rss)
* [2026-04-18, 12:41:00](https://news.ycombinator.com/item?id=47815462) - [Running a Minecraft Server and More on a 1960s Univac Computer](https://farlow.dev/2026/04/17/running-a-minecraft-server-and-more-on-a-1960s-univac-computer)
* [2026-04-18, 10:53:42](https://news.ycombinator.com/item?id=47814874) - [Stephen&apos;s Sausage Roll remains one of the most influential puzzle games](https://thinkygames.com/features/10-years-of-grilling-stephens-sausage-roll-remains-one-of-the-most-influential-puzzle-games-ever-created/)
* [2026-04-18, 08:12:00](https://soylentnews.org/article.pl?sid=26/04/17/0326235&amp;from=rss) - [Meet Orpheus—a Hopper Mission Built to Hunt for Life in Martian Volcanoes](https://soylentnews.org/article.pl?sid=26/04/17/0326235&amp;from=rss)
* [2026-04-18, 03:30:00](https://soylentnews.org/article.pl?sid=26/04/17/0318245&amp;from=rss) - [IPv6 Adoption Reaches 50% - The Long Journey Toward Internet&apos;s Next Generation](https://soylentnews.org/article.pl?sid=26/04/17/0318245&amp;from=rss)
