# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and Technology Advancements

* [AI is going to kill app subscriptions](https://nichehunt.app/blog/ai-going-to-kill-app-subscriptions) ([comments](https://news.ycombinator.com/item?id=47024387))

* [AI is slowly munching away my passion](https://whynot.fail/human/ai-is-slowly-munching-away-my-passion/) ([comments](https://lobste.rs/s/qmjejh/ai_is_slowly_munching_away_my_passion))

* [Claude Code Tips From the Guy Who Built It](https://www.anup.io/35-claude-code-tips-from-the-guy-who-built-it/) ([comments](https://lobste.rs/s/0nxrxx/claude_code_tips_from_guy_who_built_it))

* [Your Friends Could Be Sharing Your Phone Number with ChatGPT](https://yro.slashdot.org/story/26/02/15/0040259/your-friends-could-be-sharing-your-phone-number-with-chatgpt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://yro.slashdot.org/story/26/02/15/0040259/your-friends-could-be-sharing-your-phone-number-with-chatgpt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

## Space and Astronomy Discoveries

* [Analysis of JWST Data Finds - Old Galaxies in a Young Universe?](https://science.slashdot.org/story/26/02/15/0151204/analysis-of-jwst-data-finds---old-galaxies-in-a-young-universe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://science.slashdot.org/story/26/02/15/0151204/analysis-of-jwst-data-finds---old-galaxies-in-a-young-universe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Newly Discovered Sungrazing Comet C/2026 A1 (MAPS) Could be the Brightest of the Year](https://soylentnews.org/article.pl?sid=26/02/10/036255&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/02/10/036255&amp;from=rss))

## Privacy and Security Concerns

* [Amazon, Google Unwittingly Reveal the Severity of the U.S. Surveillance State](https://greenwald.substack.com/p/amazons-ring-and-googles-nest-unwittingly) ([comments](https://news.ycombinator.com/item?id=47023238))

* [Apple Patches Decade-Old IOS Zero-Day, Possibly Exploited By Commercial Spyware](https://apple.slashdot.org/story/26/02/15/018217/apple-patches-decade-old-ios-zero-day-possibly-exploited-by-commercial-spyware?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://apple.slashdot.org/story/26/02/15/018217/apple-patches-decade-old-ios-zero-day-possibly-exploited-by-commercial-spyware?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

## Technological Innovations

* [Single Reason To Not Vibe Code](https://asindu.xyz/a-single-reason-to-not-vibe-code) ([comments](https://lobste.rs/s/uvdj0c/single_reason_not_vibe_code))

* [I Fixed Windows Native Development](https://marler8997.github.io/blog/fixed-windows/) ([comments](https://news.ycombinator.com/item?id=47022891))

* [Two different tricks for fast LLM inference](https://www.seangoedecke.com/fast-llm-inference/) ([comments](https://news.ycombinator.com/item?id=47022329))

* [Flashpoint Archive – Over 200k web games and animations preserved](https://flashpointarchive.org) ([comments](https://news.ycombinator.com/item?id=47021354))

* [Oat – Ultra-lightweight, semantic, zero-dependency HTML UI component library](https://oat.ink/) ([comments](https://news.ycombinator.com/item?id=47021980))

## Science and Health

* [Additional Benefits For Brain, Heart, and Lungs Found for Drugs Like Viagra and Cialis](https://science.slashdot.org/story/26/02/15/0334219/additional-benefits-for-brain-heart-and-lungs-found-for-drugs-like-viagra-and-cialis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://science.slashdot.org/story/26/02/15/0334219/additional-benefits-for-brain-heart-and-lungs-found-for-drugs-like-viagra-and-cialis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [MIT Scientists Build Terahertz Microscope That Reveals Hidden Superconducting Motion](https://soylentnews.org/article.pl?sid=26/02/10/0830234&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/02/10/0830234&amp;from=rss))

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

* [2026-02-15, 15:34:00](https://science.slashdot.org/story/26/02/15/0151204/analysis-of-jwst-data-finds---old-galaxies-in-a-young-universe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Analysis of JWST Data Finds - Old Galaxies in a Young Universe?](https://science.slashdot.org/story/26/02/15/0151204/analysis-of-jwst-data-finds---old-galaxies-in-a-young-universe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-15, 15:32:42](https://lobste.rs/s/mosgwl/simple_way_scale_pixel_art_games) - [A simple way to scale pixel art games](https://30fps.net/pages/pixelart-scaling/)
* [2026-02-15, 15:24:41](https://lobste.rs/s/llcigc/ai_is_going_kill_app_subscriptions) - [AI is going to kill app subscriptions](https://nichehunt.app/blog/ai-going-to-kill-app-subscriptions)
* [2026-02-15, 15:21:08](https://news.ycombinator.com/item?id=47024387) - [AI is going to kill app subscriptions](https://nichehunt.app/blog/ai-going-to-kill-app-subscriptions)
* [2026-02-15, 15:06:00](https://lobste.rs/s/fgz5oa/mesa_s_kosmickrisp_vulkan_on_metal) - [Mesa&apos;s KosmicKrisp Vulkan-On-Metal Achieves MoltenVK Feature Parity](https://www.phoronix.com/news/KosmicKrisp-Parity)
* [2026-02-15, 14:36:09](https://lobste.rs/s/qmjejh/ai_is_slowly_munching_away_my_passion) - [AI is slowly munching away my passion](https://whynot.fail/human/ai-is-slowly-munching-away-my-passion/)
* [2026-02-15, 14:35:00](https://soylentnews.org/article.pl?sid=26/02/14/0057218&amp;from=rss) - [5 Linux Servers That Let You Ditch the Public Cloud and Reclaim Your Privacy](https://soylentnews.org/article.pl?sid=26/02/14/0057218&amp;from=rss)
* [2026-02-15, 14:29:03](https://news.ycombinator.com/item?id=47023959) - [The Dark Side of the Enlightenment](https://www.newstatesman.com/culture/books/2026/02/the-dark-side-of-the-enlightenment)
* [2026-02-15, 14:07:05](https://lobste.rs/s/uvdj0c/single_reason_not_vibe_code) - [A Single Reason To Not Vibe Code](https://asindu.xyz/a-single-reason-to-not-vibe-code)
* [2026-02-15, 13:55:28](https://lobste.rs/s/dtzfkd/rendering_visible_spectrum) - [Rendering the Visible Spectrum](https://brandonli.net/spectra/doc/)
* [2026-02-15, 13:48:44](https://news.ycombinator.com/item?id=47023633) - [Kimi Claw](https://www.kimi.com/bot)
* [2026-02-15, 13:36:33](https://lobste.rs/s/uyb4ej/picoclaw_openclaw_on_mcu) - [picoclaw: OpenClaw on an MCU](https://github.com/sipeed/picoclaw)
* [2026-02-15, 12:42:17](https://news.ycombinator.com/item?id=47023238) - [Amazon, Google Unwittingly Reveal the Severity of the U.S. Surveillance State](https://greenwald.substack.com/p/amazons-ring-and-googles-nest-unwittingly)
* [2026-02-15, 12:34:00](https://developers.slashdot.org/story/26/02/15/0741249/vim-92-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Vim 9.2 Released](https://developers.slashdot.org/story/26/02/15/0741249/vim-92-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-15, 11:45:21](https://lobste.rs/s/3cdwxo/how_michael_abrash_doubled_quake) - [How Michael Abrash doubled Quake framerate](https://fabiensanglard.net/quake_asm_optimizations/index.html)
* [2026-02-15, 11:37:29](https://news.ycombinator.com/item?id=47022943) - [Reversed engineered game Starflight (1986)](https://github.com/s-macke/starflight-reverse)
* [2026-02-15, 11:25:26](https://news.ycombinator.com/item?id=47022891) - [I Fixed Windows Native Development](https://marler8997.github.io/blog/fixed-windows/)
* [2026-02-15, 10:40:49](https://news.ycombinator.com/item?id=47022704) - [A Pokémon of a Different Color](https://matthew.verive.me/blog/color/)
* [2026-02-15, 09:42:00](https://soylentnews.org/article.pl?sid=26/02/14/0053238&amp;from=rss) - [Hiroshima Scientists Crack the Code for 3D Printing Tungsten Carbide](https://soylentnews.org/article.pl?sid=26/02/14/0053238&amp;from=rss)
* [2026-02-15, 09:27:49](https://lobste.rs/s/wjkyf5/how_add_drm_your_backend_easy_2026_working) - [How To Add DRM To Your Backend (easy) [2026 WORKING]](https://maia.crimew.gay/posts/kinemaster-drm/)
* [2026-02-15, 09:27:33](https://news.ycombinator.com/item?id=47022329) - [Two different tricks for fast LLM inference](https://www.seangoedecke.com/fast-llm-inference/)
* [2026-02-15, 09:05:35](https://news.ycombinator.com/item?id=47022213) - [DjVu and its connection to Deep Learning (2023)](https://scottlocklin.wordpress.com/2023/05/31/djvu-and-its-connection-to-deep-learning/)
* [2026-02-15, 08:34:00](https://apple.slashdot.org/story/26/02/15/018217/apple-patches-decade-old-ios-zero-day-possibly-exploited-by-commercial-spyware?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Patches Decade-Old IOS Zero-Day, Possibly Exploited By Commercial Spyware](https://apple.slashdot.org/story/26/02/15/018217/apple-patches-decade-old-ios-zero-day-possibly-exploited-by-commercial-spyware?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-15, 08:17:05](https://news.ycombinator.com/item?id=47021980) - [Oat – Ultra-lightweight, semantic, zero-dependency HTML UI component library](https://oat.ink/)
* [2026-02-15, 08:11:53](https://lobste.rs/s/0nxrxx/claude_code_tips_from_guy_who_built_it) - [Claude Code Tips From the Guy Who Built It](https://www.anup.io/35-claude-code-tips-from-the-guy-who-built-it/)
* [2026-02-15, 07:51:52](https://lobste.rs/s/hirsns/i_fixed_windows_native_development) - [I Fixed Windows Native Development](https://marler8997.github.io/blog/fixed-windows/)
* [2026-02-15, 05:43:59](https://news.ycombinator.com/item?id=47021354) - [Flashpoint Archive – Over 200k web games and animations preserved](https://flashpointarchive.org)
* [2026-02-15, 05:39:56](https://lobste.rs/s/xdrdrm/understanding_std_shared_mutex_from_c_17) - [Understanding std::shared_mutex from C++17](https://www.cppstories.com/2026/shared_mutex/)
* [2026-02-15, 05:11:00](https://soylentnews.org/article.pl?sid=26/02/14/0052214&amp;from=rss) - [Ford Posts $11.1 Billion Net Loss in Fourth Quarter as EV Losses, Tariffs Weigh](https://soylentnews.org/article.pl?sid=26/02/14/0052214&amp;from=rss)
* [2026-02-15, 04:34:00](https://science.slashdot.org/story/26/02/15/0334219/additional-benefits-for-brain-heart-and-lungs-found-for-drugs-like-viagra-and-cialis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Additional Benefits For Brain, Heart, and Lungs Found for Drugs Like Viagra and Cialis](https://science.slashdot.org/story/26/02/15/0334219/additional-benefits-for-brain-heart-and-lungs-found-for-drugs-like-viagra-and-cialis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-15, 03:29:39](https://news.ycombinator.com/item?id=47020791) - [Guitars of the USSR and the Jolana Special in Azerbaijani Music (2012)](https://caucascapades.wordpress.com/2012/06/14/guitars-of-the-ussr-and-the-jolana-special-in-azerbaijani-music/)
* [2026-02-15, 02:34:00](https://yro.slashdot.org/story/26/02/15/0040259/your-friends-could-be-sharing-your-phone-number-with-chatgpt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Your Friends Could Be Sharing Your Phone Number with ChatGPT](https://yro.slashdot.org/story/26/02/15/0040259/your-friends-could-be-sharing-your-phone-number-with-chatgpt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-15, 01:20:58](https://news.ycombinator.com/item?id=47020191) - [I love the work of the ArchWiki maintainers](https://k7r.eu/i-love-the-work-of-the-archwiki-maintainers/)
* [2026-02-15, 00:57:23](https://lobste.rs/s/av1it1/zig_landed_io_uring_grand_central) - [Zig landed io_uring and Grand Central Dispatch std.Io implementations](https://ziglang.org/devlog/2026/?20260213#2026-02-13)
* [2026-02-15, 00:10:00](https://soylentnews.org/article.pl?sid=26/02/14/0050248&amp;from=rss) - [We Finally Know How the Most Common Types of Planets Are Created](https://soylentnews.org/article.pl?sid=26/02/14/0050248&amp;from=rss)
* [2026-02-14, 23:52:00](https://hardware.slashdot.org/story/26/02/14/2330259/small-crowd-pays-to-watch-a-boxing-match-between-80-pound-chinese-robots?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Small Crowd Pays to Watch a Boxing Match Between 80-Pound Chinese Robots](https://hardware.slashdot.org/story/26/02/14/2330259/small-crowd-pays-to-watch-a-boxing-match-between-80-pound-chinese-robots?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-14, 22:52:00](https://tech.slashdot.org/story/26/02/14/2248251/us-government-will-stop-pollution-reduction-credits-for-cars-with-start-stop-systems?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Government Will Stop Pollution-Reduction Credits for Cars With &apos;Start-Stop&apos; Systems](https://tech.slashdot.org/story/26/02/14/2248251/us-government-will-stop-pollution-reduction-credits-for-cars-with-start-stop-systems?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-14, 22:03:48](https://lobste.rs/s/unpaan/arborium_is_ai_slopware_should_not_be) - [Arborium is AI slopware and should not be trusted](https://ewie.online/posts/20260214-arborium-is-ai-slopw/)
* [2026-02-14, 21:55:10](https://lobste.rs/s/xgoe2y/windows_nt_design_workbook_1990) - [Windows NT Design Workbook (1990)](https://computernewb.com/~lily/files/Documents/NTDesignWorkbook/)
* [2026-02-14, 21:52:00](https://slashdot.org/story/26/02/14/2124229/dates-with-ai-companions-plagued-by-lag-miscommunications---and-general-creepiness?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Dates with AI Companions Plagued by Lag, Miscommunications - and General Creepiness](https://slashdot.org/story/26/02/14/2124229/dates-with-ai-companions-plagued-by-lag-miscommunications---and-general-creepiness?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-14, 21:14:32](https://lobste.rs/s/x4vtpq/hacking_pharmacy_get_free_prescription) - [Hacking a pharmacy to get free prescription drugs and more](https://eaton-works.com/2026/02/13/dava-india-hack/)
* [2026-02-14, 20:52:00](https://tech.slashdot.org/story/26/02/14/0733246/social-networks-agree-to-be-rated-on-their-teen-safety-efforts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Social Networks Agree to Be Rated On Their Teen Safety Efforts](https://tech.slashdot.org/story/26/02/14/0733246/social-networks-agree-to-be-rated-on-their-teen-safety-efforts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-14, 20:35:48](https://lobste.rs/s/7kjrtz/ublock_filter_list_hide_all_youtube) - [uBlock filter list to hide all YouTube Shorts](https://github.com/i5heu/ublock-hide-yt-shorts)
* [2026-02-14, 19:34:00](https://slashdot.org/story/26/02/14/0313259/bytedances-seedance-2-criticized-over-ai-generated-video-of-tom-cruise-fighting-brad-pitt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ByteDance&apos;s Seedance 2 Criticized Over AI-Generated Video of Tom Cruise Fighting Brad Pitt](https://slashdot.org/story/26/02/14/0313259/bytedances-seedance-2-criticized-over-ai-generated-video-of-tom-cruise-fighting-brad-pitt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-14, 19:34:00](https://soylentnews.org/article.pl?sid=26/02/13/1246200&amp;from=rss) - [&apos;Another Dark Day&apos;: Users Slam Microsoft Over Polyglot Notebooks Deprecation](https://soylentnews.org/article.pl?sid=26/02/13/1246200&amp;from=rss)
* [2026-02-14, 19:09:26](https://lobste.rs/s/zao3mz/leaning_into_coding_interview_lean_4_vs) - [Leaning Into the Coding Interview: Lean 4 vs Dafny cage-match](https://ntaylor.ca/posts/proving-the-coding-interview-lean/)
* [2026-02-14, 18:53:57](https://lobste.rs/s/m8imnx/gitdatamodel_documentation) - [gitdatamodel documentation](https://git-scm.com/docs/gitdatamodel)
* [2026-02-14, 18:46:32](https://news.ycombinator.com/item?id=47017138) - [News publishers limit Internet Archive access due to AI scraping concerns](https://www.niemanlab.org/2026/01/news-publishers-limit-internet-archive-access-due-to-ai-scraping-concerns/)
* [2026-02-14, 18:34:00](https://news.slashdot.org/story/26/02/14/070222/earth-is-warming-faster-than-ever-but-why?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Earth is Warming Faster Than Ever. But Why?](https://news.slashdot.org/story/26/02/14/070222/earth-is-warming-faster-than-ever-but-why?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-14, 17:36:45](https://news.ycombinator.com/item?id=47016443) - [uBlock filter list to hide all YouTube Shorts](https://github.com/i5heu/ublock-hide-yt-shorts/)
* [2026-02-14, 17:34:00](https://tech.slashdot.org/story/26/02/13/1847236/the-eu-moves-to-kill-infinite-scrolling?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The EU Moves To Kill Infinite Scrolling](https://tech.slashdot.org/story/26/02/13/1847236/the-eu-moves-to-kill-infinite-scrolling?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-14, 16:50:47](https://news.ycombinator.com/item?id=47016008) - [Amsterdam Compiler Kit](https://github.com/davidgiven/ack)
* [2026-02-14, 16:34:00](https://tech.slashdot.org/story/26/02/14/0447228/sudden-telnet-traffic-drop-are-telcos-filtering-ports-to-block-critical-vulnerability?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sudden Telnet Traffic Drop. Are Telcos Filtering Ports to Block Critical Vulnerability?](https://tech.slashdot.org/story/26/02/14/0447228/sudden-telnet-traffic-drop-are-telcos-filtering-ports-to-block-critical-vulnerability?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-14, 16:22:54](https://lobste.rs/s/k5dqmn/new_repository_settings_for_configuring) - [New repository settings for configuring pull request access](https://github.blog/changelog/2026-02-13-new-repository-settings-for-configuring-pull-request-access/)
* [2026-02-14, 15:52:11](https://lobste.rs/s/wukx2g/vim_9_2_released) - [Vim 9.2 released](https://www.vim.org/vim-9.2-released.php)
* [2026-02-14, 15:35:47](https://news.ycombinator.com/item?id=47015294) - [My smart sleep mask broadcasts users&apos; brainwaves to an open MQTT broker](https://aimilios.bearblog.dev/reverse-engineering-sleep-mask/)
* [2026-02-14, 15:34:00](https://slashdot.org/story/26/02/14/0235231/anthropics-claude-got-11-user-boost-from-super-bowl-ad-mocking-chatgpts-advertising?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic&apos;s Claude Got 11% User Boost from Super Bowl Ad Mocking ChatGPT&apos;s Advertising](https://slashdot.org/story/26/02/14/0235231/anthropics-claude-got-11-user-boost-from-super-bowl-ad-mocking-chatgpts-advertising?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-14, 14:50:00](https://soylentnews.org/article.pl?sid=26/02/13/1241210&amp;from=rss) - [AI-Generated Text is Overwhelming Institutions – Setting Off a No-Win ‘Arms Race’ With AI Detectors](https://soylentnews.org/article.pl?sid=26/02/13/1241210&amp;from=rss)
* [2026-02-14, 14:32:42](https://lobste.rs/s/q57iuj/i_love_work_archwiki_maintainers) - [I love the work of the ArchWiki maintainers](https://k7r.eu/i-love-the-work-of-the-archwiki-maintainers/)
* [2026-02-14, 12:19:34](https://lobste.rs/s/m1mkjm/programmer_s_loss_identity) - [A programmer&apos;s loss of identity](https://ratfactor.com/tech-nope2)
* [2026-02-14, 12:00:00](https://news.slashdot.org/story/26/02/13/1949236/israeli-soldiers-accused-of-using-polymarket-to-bet-on-strikes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Israeli Soldiers Accused of Using Polymarket To Bet on Strikes](https://news.slashdot.org/story/26/02/13/1949236/israeli-soldiers-accused-of-using-polymarket-to-bet-on-strikes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-14, 10:06:00](https://soylentnews.org/article.pl?sid=26/02/13/1238248&amp;from=rss) - [Wikipedia May Remove Nearly 700,000 Links After Archive.today DDoS Fallout](https://soylentnews.org/article.pl?sid=26/02/13/1238248&amp;from=rss)
* [2026-02-14, 07:50:13](https://news.ycombinator.com/item?id=47012553) - [OpenAI should build Slack](https://www.latent.space/p/ainews-why-openai-should-build-slack)
* [2026-02-14, 06:33:08](https://lobste.rs/s/fbaxhc/ai_agent_published_hit_piece_on_me_more) - [An AI Agent Published a Hit Piece on Me – More Things Have Happened](https://theshamblog.com/an-ai-agent-published-a-hit-piece-on-me-part-2/)
* [2026-02-14, 05:19:00](https://soylentnews.org/article.pl?sid=26/02/13/1231209&amp;from=rss) - [AMD Rockets Past 35% Market Share in Desktop PC Market as Intel&apos;s Share Loss Accelerates](https://soylentnews.org/article.pl?sid=26/02/13/1231209&amp;from=rss)
* [2026-02-14, 00:34:00](https://soylentnews.org/article.pl?sid=26/02/13/0615203&amp;from=rss) - [El Paso Airport Closed After Military Used New Anti-Drone Laser to Zap Party Balloon](https://soylentnews.org/article.pl?sid=26/02/13/0615203&amp;from=rss)
* [2026-02-13, 23:49:14](https://lobste.rs/s/fynfup/supercazzola_generate_spam_for_web) - [Supercazzola - Generate spam for web scrapers](https://dacav.org/projects/supercazzola/)
* [2026-02-13, 19:51:00](https://soylentnews.org/article.pl?sid=26/02/13/0612228&amp;from=rss) - [80386 Barrel Shifter](https://soylentnews.org/article.pl?sid=26/02/13/0612228&amp;from=rss)
* [2026-02-13, 19:22:18](https://news.ycombinator.com/item?id=47006615) - [Breaking the spell of vibe coding](https://www.fast.ai/posts/2026-01-28-dark-flow/)
* [2026-02-13, 16:42:04](https://news.ycombinator.com/item?id=47004689) - [Instagram&apos;s URL Blackhole](https://medium.com/@shredlife/instagrams-url-blackhole-c1733e081664)
* [2026-02-13, 15:08:00](https://soylentnews.org/article.pl?sid=26/02/13/0611200&amp;from=rss) - [Taiwan Tells Uncle Sam its Chip Ecosystem Ain&apos;t Going Anywhere](https://soylentnews.org/article.pl?sid=26/02/13/0611200&amp;from=rss)
* [2026-02-13, 10:26:00](https://soylentnews.org/article.pl?sid=26/02/12/0346212&amp;from=rss) - [New Critique Debunks Claim That Trees Can Sense a Solar Eclipse](https://soylentnews.org/article.pl?sid=26/02/12/0346212&amp;from=rss)
* [2026-02-13, 08:53:51](https://news.ycombinator.com/item?id=47000535) - [Zvec: A lightweight, fast, in-process vector database](https://github.com/alibaba/zvec)
* [2026-02-13, 05:38:00](https://soylentnews.org/article.pl?sid=26/02/12/0319239&amp;from=rss) - [Google Recovers “Deleted” Nest Video in High-Profile Abduction Case](https://soylentnews.org/article.pl?sid=26/02/12/0319239&amp;from=rss)
* [2026-02-13, 03:28:47](https://news.ycombinator.com/item?id=46998580) - [Interference Pattern Formed in a Finger Gap Is Not Single Slit Diffraction](https://note.com/hydraenids/n/nbe89030deaba)
* [2026-02-13, 00:47:00](https://soylentnews.org/article.pl?sid=26/02/12/0318206&amp;from=rss) - [SpaceX is Pivoting to Focus on a Moon Base Before Mars](https://soylentnews.org/article.pl?sid=26/02/12/0318206&amp;from=rss)
* [2026-02-12, 20:04:00](https://soylentnews.org/article.pl?sid=26/02/12/0316208&amp;from=rss) - [Byte Magazine Artist Robert Tinney, Who Illustrated the Birth of PCs, Dies at 78](https://soylentnews.org/article.pl?sid=26/02/12/0316208&amp;from=rss)
* [2026-02-12, 16:35:10](https://news.ycombinator.com/item?id=46990888) - [A practical guide to observing the night sky for real skies and real equipment](https://stargazingbuddy.com/)
* [2026-02-12, 15:23:00](https://soylentnews.org/article.pl?sid=26/02/11/1346239&amp;from=rss) - [Malicious Packages for dYdX Cryptocurrency Exchange Empties User Wallets](https://soylentnews.org/article.pl?sid=26/02/11/1346239&amp;from=rss)
* [2026-02-12, 10:33:00](https://soylentnews.org/article.pl?sid=26/02/10/0833231&amp;from=rss) - [Terry Pratchett&apos;s Novels May Have Held Clues to His Dementia a Decade Before Diagnosis](https://soylentnews.org/article.pl?sid=26/02/10/0833231&amp;from=rss)
* [2026-02-12, 05:48:00](https://soylentnews.org/article.pl?sid=26/02/10/0830234&amp;from=rss) - [MIT Scientists Build Terahertz Microscope That Reveals Hidden Superconducting Motion](https://soylentnews.org/article.pl?sid=26/02/10/0830234&amp;from=rss)
* [2026-02-12, 01:07:00](https://soylentnews.org/politics/article.pl?sid=26/02/10/0826224&amp;from=rss) - [EU Interferes In Its Own Elections And Ours, Say US Tech Bros](https://soylentnews.org/politics/article.pl?sid=26/02/10/0826224&amp;from=rss)
* [2026-02-11, 20:23:00](https://soylentnews.org/article.pl?sid=26/02/10/0820248&amp;from=rss) - [After a $26 Billion Hit, Stellantis Shifts Focus Back to What Buyers Want](https://soylentnews.org/article.pl?sid=26/02/10/0820248&amp;from=rss)
* [2026-02-11, 17:31:43](https://news.ycombinator.com/item?id=46977966) - [A Visual Source for Shakespeare&apos;s &apos;Tempest&apos;](https://profadamroberts.substack.com/p/a-visual-source-for-shakespeares)
* [2026-02-11, 17:00:20](https://news.ycombinator.com/item?id=46977477) - [Build Gaussian Splat Experiences with SuperSplat Studio](https://blog.playcanvas.com/build-gaussian-splat-experiences-with-supersplat-studio/)
* [2026-02-11, 15:37:00](https://soylentnews.org/article.pl?sid=26/02/10/0818222&amp;from=rss) - [Discord Will Require a Face Scan or ID for Full Access Next Month](https://soylentnews.org/article.pl?sid=26/02/10/0818222&amp;from=rss)
* [2026-02-11, 10:53:00](https://soylentnews.org/article.pl?sid=26/02/10/036255&amp;from=rss) - [Newly Discovered Sungrazing Comet C/2026 A1 (MAPS) Could be the Brightest of the Year](https://soylentnews.org/article.pl?sid=26/02/10/036255&amp;from=rss)
* [2026-02-11, 08:34:51](https://news.ycombinator.com/item?id=46972392) - [Show HN: Copy-and-patch compiler for hard real-time Python](https://github.com/Nonannet/copapy)
* [2026-02-11, 06:05:00](https://soylentnews.org/article.pl?sid=26/02/10/0257251&amp;from=rss) - [Microsoft Does Something Useful, Adds Sysmon to Windows](https://soylentnews.org/article.pl?sid=26/02/10/0257251&amp;from=rss)
* [2026-02-11, 04:12:00](https://news.ycombinator.com/item?id=46970733) - [5,300-year-old &apos;bow drill&apos; rewrites story of ancient Egyptian tools](https://www.ncl.ac.uk/press/articles/latest/2026/02/ancientegyptiandrillbit/)
* [2026-02-11, 01:20:00](https://soylentnews.org/article.pl?sid=26/02/10/0251250&amp;from=rss) - [Ask SN - \&quot;Opt-Out Signal Honored\&quot; - Screen Message](https://soylentnews.org/article.pl?sid=26/02/10/0251250&amp;from=rss)
* [2026-02-11, 00:08:01](https://news.ycombinator.com/item?id=46968964) - [RynnBrain](https://github.com/alibaba-damo-academy/RynnBrain)
