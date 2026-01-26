# [News Summary](https://kherrick.github.io/news-summary/)

## Technological Innovations

* [Startup Uses SpaceX Tech to Cool Data Centers With Less Power and No Water](https://hardware.slashdot.org/story/26/01/26/0317225/startup-uses-spacex-tech-to-cool-data-centers-with-less-power-and-no-water?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A startup leverages SpaceX technology to revolutionize data center cooling, using no water and less power. [Comments](https://hardware.slashdot.org/story/26/01/26/0317225/startup-uses-spacex-tech-to-cool-data-centers-with-less-power-and-no-water?utm_source=rss1.0mainlinkanon&utm_medium=feed).

* [zerobrew is a Rust-based, 5-20x faster drop-in Homebrew alternative](https://github.com/lucasgelfond/zerobrew) - Discover zerobrew, a high-performance Rust-based alternative to Homebrew. [Comments](https://lobste.rs/s/ue0bau/zerobrew_is_rust_based_5_20x_faster_drop).

* [sysp: Systems Lisp compiling to C with homoiconic macros, refcounted memory, Hindley-Milner type inference](https://github.com/karans4/sysp) - An exploration of sysp, a Systems Lisp designed for vast functionality through C compilation and type inference. [Comments](https://lobste.rs/s/d4y8rq/sysp_systems_lisp_compiling_c_with).

* [Washington State May Mandate 'Firearm Blueprint Detection Algorithms' For 3D Printers](https://hardware.slashdot.org/story/26/01/26/0035209/washington-state-may-mandate-firearm-blueprint-detection-algorithms-for-3d-printers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Discuss the implications of Washington State's potential regulation of firearm blueprint detection in 3D printers. [Comments](https://hardware.slashdot.org/story/26/01/26/0035209/washington-state-may-mandate-firearm-blueprint-detection-algorithms-for-3d-printers?utm_source=rss1.0mainlinkanon&utm_medium=feed).

## Global Policy and Society

* [Iran's internet blackout may become permanent, with access for elites only](https://restofworld.org/2026/iran-blackout-tiered-internet/) - A report investigates how Iran's restrictive internet policies may lead to a permanent blackout with tiered access. [Comments](https://news.ycombinator.com/item?id=46761822).

* [UK MPs Call for AI Stress Testing in Financial Services](https://soylentnews.org/article.pl?sid=26/01/25/0429246&from=rss) - UK policymakers propose stress testing artificial intelligence technologies in financial sectors. [Comments](https://soylentnews.org/article.pl?sid=26/01/24/0429246&from=rss).

* [Environmentalists worry Google behind bid to control Oregon town's water](https://www.sfgate.com/national-parks/article/mount-hood-water-google-21307223.php) - Concerns arise over Google's involvement in acquiring water rights in an Oregon town. [Comments](https://news.ycombinator.com/item?id=46761614).

* [Microsoft Gave FBI a Set of BitLocker Encryption Keys to Unlock Suspects’ Laptops](https://soylentnews.org/article.pl?sid=26/01/24/0116243&from=rss) - Learn about Microsoft's cooperation with the FBI on BitLocker encryption keys. [Comments](https://soylentnews.org/article.pl?sid=26/01/24/0116243&from=rss).

## Intriguing Science and Research

* [Scientists identify brain waves that define the limits of 'you'](https://www.sciencealert.com/scientists-identify-brain-waves-that-define-the-limits-of-you) - Researchers find the brain wave patterns linked to self-identity. [Comments](https://news.ycombinator.com/item?id=46760099).

* [Physics of Foam Strangely Resembles AI Training](https://soylentnews.org/article.pl?sid=26/01/22/1141230&from=rss) - A fascinating comparison between the structure of foam and processes in AI training. [Comments](https://soylentnews.org/article.pl?sid=26/01/22/1141230&from=rss).

* [Gasoline Out of Thin Air? It's a Reality!](https://hardware.slashdot.org/story/26/01/25/2153246/gasoline-out-of-thin-air-its-a-reality?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Innovative scientists successfully produce gasoline from carbon dioxide and air. [Comments](https://hardware.slashdot.org/story/26/01/25/2153246/gasoline-out-of-thin-air-its-a-reality?utm_source=rss1.0mainlinkanon&utm_medium=feed).

* [Ancient “Mosaic” Fossils Found in Morocco Challenge the Timeline of Human Evolution](https://soylentnews.org/article.pl?sid=26/01/23/1016236&from=rss) - The discovery of unique fossils raises questions about current human evolution theories. [Comments](https://soylentnews.org/article.pl?sid=26/01/23/1016236&from=rss).

## AI and Computational Techniques

* [Case study: Creative math – How AI fakes proofs](https://tomaszmachnik.pl/case-study-math-en.html) - Dive into how AI can fabricate mathematical proofs, exploring both potential and perils. [Comments](https://news.ycombinator.com/item?id=46759352).

* [UK AI Bathroom Monitors in High Schools Spark Privacy Concerns](https://soylentnews.org/article.pl?sid=26/01/21/0147238&from=rss) - Explore the ethical considerations of deploying AI in schools for monitoring purposes. [Comments](https://soylentnews.org/article.pl?sid=26/01/21/0147238&from=rss).

* [How a game about programming exposed thousands of players to remote code execution](https://outsidetheasylum.blog/screeps/) - Screeps inadvertently provided a live lesson in secure coding through dynamic gameplay. [Comments](https://lobste.rs/s/uqfh4p/screeps_how_game_about_programming).

* [The Enclosure feedback loop, or how LLMs sabotage existing programming practices by privatizing a public good](https://michiel.buddingh.eu/enclosure-feedback-loop) - An analysis of how Large Language Models might disrupt open-source practices. [Comments](https://lobste.rs/s/kvvxkl/enclosure_feedback_loop_how_llms).

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

* [2026-01-26, 06:46:27](https://lobste.rs/s/laiwnt/browser_is_sandbox) - [the browser is the sandbox](https://aifoc.us/the-browser-is-the-sandbox)
* [2026-01-26, 05:44:00](https://hardware.slashdot.org/story/26/01/26/0317225/startup-uses-spacex-tech-to-cool-data-centers-with-less-power-and-no-water?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Startup Uses SpaceX Tech to Cool Data Centers With Less Power and No Water](https://hardware.slashdot.org/story/26/01/26/0317225/startup-uses-spacex-tech-to-cool-data-centers-with-less-power-and-no-water?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-26, 05:23:01](https://news.ycombinator.com/item?id=46762150) - [The browser is the sandbox](https://simonwillison.net/2026/Jan/25/the-browser-is-the-sandbox/)
* [2026-01-26, 05:11:02](https://lobste.rs/s/ve0986/exploring_linux_on_loongarch_mini_pc) - [Exploring Linux on a LoongArch Mini PC](https://www.wezm.net/v2/posts/2026/loongarch-mini-pc-m700s/)
* [2026-01-26, 05:09:38](https://lobste.rs/s/kvvxkl/enclosure_feedback_loop_how_llms) - [The Enclosure feedback loop, or how LLMs sabotage existing programming practices by privatizing a public good](https://michiel.buddingh.eu/enclosure-feedback-loop)
* [2026-01-26, 04:24:00](https://news.slashdot.org/story/26/01/25/2226239/new-linuxandroid-2-in-1-tablet-open-slate-announced-by-brax-technologies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Linux/Android 2-in-1 Tablet &apos;Open Slate&apos; Announced by Brax Technologies](https://news.slashdot.org/story/26/01/25/2226239/new-linuxandroid-2-in-1-tablet-open-slate-announced-by-brax-technologies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-26, 04:18:19](https://news.ycombinator.com/item?id=46761822) - [Iran&apos;s internet blackout may become permanent, with access for elites only](https://restofworld.org/2026/iran-blackout-tiered-internet/)
* [2026-01-26, 03:40:06](https://news.ycombinator.com/item?id=46761614) - [Environmentalists worry Google behind bid to control Oregon town&apos;s water](https://www.sfgate.com/national-parks/article/mount-hood-water-google-21307223.php)
* [2026-01-26, 03:26:00](https://soylentnews.org/article.pl?sid=26/01/25/0429246&amp;from=rss) - [UK MPs Call for AI Stress Testing in Financial Services](https://soylentnews.org/article.pl?sid=26/01/25/0429246&amp;from=rss)
* [2026-01-26, 02:41:32](https://news.ycombinator.com/item?id=46761239) - [You can just port things to Cloudflare Workers](https://sigh.dev/posts/you-can-just-port-things-to-cloudflare-workers/)
* [2026-01-26, 02:07:34](https://news.ycombinator.com/item?id=46760998) - [Video Games as Art](https://gwern.net/video-game-art)
* [2026-01-26, 02:04:00](https://bsd.slashdot.org/story/26/01/26/0135254/kdes-plasma-login-manager-stops-supporting-freebsd---because-systemd?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [KDE&apos;s &apos;Plasma Login Manager&apos; Stops Supporting FreeBSD - Because Systemd](https://bsd.slashdot.org/story/26/01/26/0135254/kdes-plasma-login-manager-stops-supporting-freebsd---because-systemd?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-26, 02:01:04](https://news.ycombinator.com/item?id=46760927) - [Show HN: SF Microclimates](https://github.com/solo-founders/sf-microclimates)
* [2026-01-26, 01:43:12](https://lobste.rs/s/ue0bau/zerobrew_is_rust_based_5_20x_faster_drop) - [zerobrew is a Rust-based, 5-20x faster drop-in Homebrew alternative](https://github.com/lucasgelfond/zerobrew)
* [2026-01-26, 01:23:10](https://lobste.rs/s/d4y8rq/sysp_systems_lisp_compiling_c_with) - [sysp: Systems Lisp compiling to C with homoiconic macros, refcounted memory, Hindley-Milner type inference](https://github.com/karans4/sysp)
* [2026-01-26, 01:04:00](https://hardware.slashdot.org/story/26/01/26/0035209/washington-state-may-mandate-firearm-blueprint-detection-algorithms-for-3d-printers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Washington State May Mandate &apos;Firearm Blueprint Detection Algorithms&apos; For 3D Printers](https://hardware.slashdot.org/story/26/01/26/0035209/washington-state-may-mandate-firearm-blueprint-detection-algorithms-for-3d-printers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-26, 00:34:17](https://news.ycombinator.com/item?id=46760285) - [Tell HN: I cut Claude API costs from $70/month to pennies](https://news.ycombinator.com/item?id=46760285)
* [2026-01-26, 00:10:42](https://news.ycombinator.com/item?id=46760099) - [Scientists identify brain waves that define the limits of &apos;you&apos;](https://www.sciencealert.com/scientists-identify-brain-waves-that-define-the-limits-of-you)
* [2026-01-26, 00:04:00](https://news.slashdot.org/story/26/01/26/001230/google-discover-replaces-news-headlines-with-sometimes-inaccurate-ai-generated-alternatives?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Discover Replaces News Headlines With Sometimes Inaccurate AI-Generated Alternatives](https://news.slashdot.org/story/26/01/26/001230/google-discover-replaces-news-headlines-with-sometimes-inaccurate-ai-generated-alternatives?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-25, 23:38:55](https://news.ycombinator.com/item?id=46759850) - [Show HN: A desktop app that blocks work when you bite your nails](https://github.com/cacoos/trackhands)
* [2026-01-25, 23:03:05](https://lobste.rs/s/uqfh4p/screeps_how_game_about_programming) - [Screeps: How a game about programming exposed thousands of players to remote code execution](https://outsidetheasylum.blog/screeps/)
* [2026-01-25, 22:47:55](https://news.ycombinator.com/item?id=46759387) - [Ask HN: DDD was a great debugger – what would a modern equivalent look like?](https://news.ycombinator.com/item?id=46759387)
* [2026-01-25, 22:44:50](https://news.ycombinator.com/item?id=46759352) - [Case study: Creative math – How AI fakes proofs](https://tomaszmachnik.pl/case-study-math-en.html)
* [2026-01-25, 22:36:00](https://soylentnews.org/article.pl?sid=26/01/24/0116243&amp;from=rss) - [Microsoft Gave FBI a Set of BitLocker Encryption Keys to Unlock Suspects’ Laptops](https://soylentnews.org/article.pl?sid=26/01/24/0116243&amp;from=rss)
* [2026-01-25, 22:18:38](https://news.ycombinator.com/item?id=46759063) - [The future of software engineering is SRE](https://swizec.com/blog/the-future-of-software-engineering-is-sre/)
* [2026-01-25, 21:56:00](https://hardware.slashdot.org/story/26/01/25/2153246/gasoline-out-of-thin-air-its-a-reality?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Gasoline Out of Thin Air? It&apos;s a Reality!](https://hardware.slashdot.org/story/26/01/25/2153246/gasoline-out-of-thin-air-its-a-reality?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-25, 21:47:14](https://lobste.rs/s/xo4mfg/hand_crafting_domain_specific) - [Hand-Crafting Domain-Specific Compression with an LLM](https://engineering.nanit.com/hand-crafting-domain-specific-compression-with-an-llm-3c42f5c2b070)
* [2026-01-25, 21:39:24](https://lobste.rs/s/sbtjef/spreadsheets_vi_json) - [spreadsheets + vi + json](https://awalgarg.me/untitled_project)
* [2026-01-25, 21:27:11](https://news.ycombinator.com/item?id=46758450) - [The &apos;3.5% rule&apos;: How a small minority can change the world (2019)](https://www.bbc.com/future/article/20190513-it-only-takes-35-of-people-to-change-the-world)
* [2026-01-25, 20:39:25](https://news.ycombinator.com/item?id=46757944) - [Oneplus phone update introduces hardware anti-rollback](https://consumerrights.wiki/w/Oneplus_phone_update_introduces_hardware_anti-rollback)
* [2026-01-25, 19:51:45](https://lobste.rs/s/xmwgtx/how_think_about_gas_town) - [How to think about Gas Town](https://steveklabnik.com/writing/how-to-think-about-gas-town/)
* [2026-01-25, 19:36:00](https://news.slashdot.org/story/26/01/25/1930244/richard-stallman-critiques-ai-connected-cars-smartphones-and-drm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Richard Stallman Critiques AI, Connected Cars, Smartphones, and DRM](https://news.slashdot.org/story/26/01/25/1930244/richard-stallman-critiques-ai-connected-cars-smartphones-and-drm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-25, 19:29:25](https://lobste.rs/s/5qylwg/i_was_right_about_atproto_key_management) - [I Was Right About ATProto Key Management](https://notes.nora.codes/atproto-again/)
* [2026-01-25, 19:12:50](https://news.ycombinator.com/item?id=46757162) - [Spanish track was fractured before high-speed train disaster, report finds](https://www.bbc.com/news/articles/c1m77dmxlvlo)
* [2026-01-25, 19:03:40](https://news.ycombinator.com/item?id=46757067) - [First, make me care](https://gwern.net/blog/2026/make-me-care)
* [2026-01-25, 18:06:26](https://news.ycombinator.com/item?id=46756427) - [Show HN: An interactive map of US lighthouses and navigational aids](https://www.lighthouses.app/)
* [2026-01-25, 17:59:43](https://lobste.rs/s/kqt13j/visitor_as_sum_type_2018) - [Visitor as a sum type (2018)](https://blog.ploeh.dk/2018/06/25/visitor-as-a-sum-type/)
* [2026-01-25, 17:53:00](https://soylentnews.org/article.pl?sid=26/01/24/0114253&amp;from=rss) - [This May Be The Grossest Eye Pic Ever—but the Cause is What’s Truly Horrifying](https://soylentnews.org/article.pl?sid=26/01/24/0114253&amp;from=rss)
* [2026-01-25, 17:48:30](https://lobste.rs/s/pnhbjw/allowlist_for_gitignore) - [Allowlist for .gitignore](https://blog.izissise.net/posts/gitignoreallowlist/)
* [2026-01-25, 17:36:19](https://news.ycombinator.com/item?id=46756117) - [ICE using Palantir tool that feeds on Medicaid data](https://www.eff.org/deeplinks/2026/01/report-ice-using-palantir-tool-feeds-medicaid-data)
* [2026-01-25, 17:34:00](https://tech.slashdot.org/story/26/01/24/1845236/us-congress-fails-to-repeal-kill-switch-for-cars-mandate?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Congress Fails to Repeal &apos;Kill Switch&apos; for Cars Mandate](https://tech.slashdot.org/story/26/01/24/1845236/us-congress-fails-to-repeal-kill-switch-for-cars-mandate?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-25, 16:34:00](https://mobile.slashdot.org/story/26/01/25/060240/the-android-nexphone-linux-on-demand-dual-boots-into-windows-11---and-transforms-into-a-workstation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Android &apos;NexPhone&apos;: Linux on Demand, Dual-Boots Into Windows 11 - and Transforms Into a Workstation](https://mobile.slashdot.org/story/26/01/25/060240/the-android-nexphone-linux-on-demand-dual-boots-into-windows-11---and-transforms-into-a-workstation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-25, 16:22:07](https://lobste.rs/s/4jiqup/software_patches_nixos_for_fun) - [Software patches in NixOS for fun and productivity](https://log.pfad.fr/2026/software-patching-in-nixos/)
* [2026-01-25, 16:00:16](https://lobste.rs/s/o3amdz/because_coordination_is_expensive) - [Because coordination is expensive](https://surfingcomplexity.blog/2026/01/24/because-coordination-is-expensive/)
* [2026-01-25, 15:51:03](https://news.ycombinator.com/item?id=46755115) - [Using PostgreSQL as a Dead Letter Queue for Event-Driven Systems](https://www.diljitpr.net/blog-post-postgresql-dlq)
* [2026-01-25, 15:34:51](https://news.ycombinator.com/item?id=46754944) - [A macOS app that blurs your screen when you slouch](https://github.com/tldev/posturr)
* [2026-01-25, 15:34:00](https://hardware.slashdot.org/story/26/01/24/0452209/the-case-against-small-modular-nuclear-reactors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Case Against Small Modular Nuclear Reactors](https://hardware.slashdot.org/story/26/01/24/0452209/the-case-against-small-modular-nuclear-reactors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-25, 14:55:03](https://news.ycombinator.com/item?id=46754522) - [Bitwise conversion of doubles using only FP multiplication and addition (2020)](https://dougallj.wordpress.com/2020/05/10/bitwise-conversion-of-doubles-using-only-floating-point-multiplication-and-addition/)
* [2026-01-25, 14:20:01](https://lobste.rs/s/vzatmm/welcome_email_expiration_date) - [Welcome to the \&quot;Email Expiration Date\&quot; initiative](https://www.zerocarbon.email/)
* [2026-01-25, 13:55:53](https://lobste.rs/s/yryapx/indieweb_small_web) - [The IndieWeb and Small web](https://christiano.dev/post/indieweb_smallweb/)
* [2026-01-25, 13:02:00](https://soylentnews.org/article.pl?sid=26/01/24/0112225&amp;from=rss) - [OpenAI Rolls Out Ads in ChatGPT as Expenses Skyrocket](https://soylentnews.org/article.pl?sid=26/01/24/0112225&amp;from=rss)
* [2026-01-25, 12:54:53](https://news.ycombinator.com/item?id=46753708) - [Web-based image editor modeled after Deluxe Paint](https://github.com/steffest/DPaint-js)
* [2026-01-25, 12:50:35](https://lobste.rs/s/utenv0/is_it_worth_it) - [Is It Worth It?](https://griffin.com/blog/is-it-worth-it)
* [2026-01-25, 12:34:00](https://news.slashdot.org/story/26/01/25/0422212/the-risks-of-ai-in-schools-outweigh-the-benefits-report-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Risks of AI in Schools Outweigh the Benefits, Report Says](https://news.slashdot.org/story/26/01/25/0422212/the-risks-of-ai-in-schools-outweigh-the-benefits-report-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-25, 11:38:53](https://lobste.rs/s/ylgyhu/lament_for_aperture_app_we_ll_never_get) - [A Lament For Aperture, The App We&apos;ll Never Get Over Losing](https://ikennd.ac/blog/2026/01/old-man-yells-at-modern-software-design/)
* [2026-01-25, 11:09:11](https://lobste.rs/s/xefxir/bouncy_ball_will_always_bounce_back) - [Bouncy Ball will always bounce back](https://filipfila.wordpress.com/2026/01/25/bouncy-ball-will-always-bounce-back/)
* [2026-01-25, 08:44:00](https://linux.slashdot.org/story/26/01/24/2332205/former-canonical-developer-advocate-warns-snap-store-isnt-safe-after-slow-responses-to-malware-reports?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Former Canonical Developer Advocate Warns Snap Store Isn&apos;t Safe After Slow Responses to Malware Reports](https://linux.slashdot.org/story/26/01/24/2332205/former-canonical-developer-advocate-warns-snap-store-isnt-safe-after-slow-responses-to-malware-reports?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-25, 08:30:00](https://soylentnews.org/article.pl?sid=26/01/24/0110242&amp;from=rss) - [Major River Deltas Are Sinking Faster Than Sea-Level Rise](https://soylentnews.org/article.pl?sid=26/01/24/0110242&amp;from=rss)
* [2026-01-25, 08:05:34](https://lobste.rs/s/zktaom/hands_on_with_two_apple_network_server) - [Hands-on with two Apple Network Server prototype ROMs](http://oldvcr.blogspot.com/2026/01/hands-on-with-two-apple-network-server.html)
* [2026-01-25, 06:11:57](https://lobste.rs/s/7hxrjv/home_router_recommendations) - [Home router recommendations](https://lobste.rs/s/7hxrjv/home_router_recommendations)
* [2026-01-25, 05:34:00](https://news.slashdot.org/story/26/01/25/0043256/googles-ai-overviews-cite-youtube-for-health-queries-more-than-any-medical-sites-study-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s &apos;AI Overviews&apos; Cite YouTube For Health Queries More Than Any Medical Sites, Study Suggests](https://news.slashdot.org/story/26/01/25/0043256/googles-ai-overviews-cite-youtube-for-health-queries-more-than-any-medical-sites-study-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-25, 05:12:12](https://news.ycombinator.com/item?id=46750951) - [Compiling models to megakernels](https://blog.luminal.com/p/compiling-models-to-megakernels)
* [2026-01-25, 04:46:41](https://lobste.rs/s/weixyl/value_things) - [The Value of Things](https://journal.stuffwithstuff.com/2026/01/24/the-value-of-things/)
* [2026-01-25, 03:38:00](https://soylentnews.org/article.pl?sid=26/01/24/019242&amp;from=rss) - [How Greenwashing Creates &apos;False Stability&apos; for Companies](https://soylentnews.org/article.pl?sid=26/01/24/019242&amp;from=rss)
* [2026-01-25, 02:34:00](https://it.slashdot.org/story/26/01/25/0131222/infotainment-ev-charger-exploits-earn-1m-at-pwn2own-automotive-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Infotainment, EV Charger Exploits Earn $1M at Pwn2Own Automotive 2026](https://it.slashdot.org/story/26/01/25/0131222/infotainment-ev-charger-exploits-earn-1m-at-pwn2own-automotive-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-24, 23:34:00](https://it.slashdot.org/story/26/01/24/2146216/work-from-office-mandate-expect-top-talent-turnover-culture-rot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Work-From-Office Mandate? Expect Top Talent Turnover, Culture Rot](https://it.slashdot.org/story/26/01/24/2146216/work-from-office-mandate-expect-top-talent-turnover-culture-rot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-24, 22:54:00](https://soylentnews.org/article.pl?sid=26/01/23/1016236&amp;from=rss) - [Ancient “Mosaic” Fossils Found in Morocco Challenge the Timeline of Human Evolution](https://soylentnews.org/article.pl?sid=26/01/23/1016236&amp;from=rss)
* [2026-01-24, 21:31:36](https://lobste.rs/s/cw6f2s/ai_tribalism) - [AI tribalism](https://nolanlawson.com/2026/01/24/ai-tribalism/)
* [2026-01-24, 18:11:00](https://soylentnews.org/article.pl?sid=26/01/23/1010250&amp;from=rss) - [Micron Acquires PSMC Fab Site in Taiwan for $1.8 Billion](https://soylentnews.org/article.pl?sid=26/01/23/1010250&amp;from=rss)
* [2026-01-24, 18:05:49](https://lobste.rs/s/abqeyo/obvious_things_c_should_do) - [Obvious Things C Should Do](https://www.digitalmars.com/articles/Cobvious.html)
* [2026-01-24, 16:39:37](https://lobste.rs/s/2qsmw8/e9p_pure_erlang_9p_implementation) - [e9p - pure Erlang 9p implementation](https://tangled.org/hauleth.dev/e9p)
* [2026-01-24, 13:25:00](https://soylentnews.org/article.pl?sid=26/01/23/1012244&amp;from=rss) - [Hygienic Conditions in Pompeii&apos;s Early Baths Were Poor](https://soylentnews.org/article.pl?sid=26/01/23/1012244&amp;from=rss)
* [2026-01-24, 08:42:00](https://soylentnews.org/article.pl?sid=26/01/22/124243&amp;from=rss) - [A Billiard Ball as a Universal Computation Machine](https://soylentnews.org/article.pl?sid=26/01/22/124243&amp;from=rss)
* [2026-01-24, 04:01:00](https://soylentnews.org/article.pl?sid=26/01/22/121252&amp;from=rss) - [When Order Matters: How A Single DNS Change Broke The Internet For Millions](https://soylentnews.org/article.pl?sid=26/01/22/121252&amp;from=rss)
* [2026-01-23, 23:16:00](https://soylentnews.org/article.pl?sid=26/01/22/1148259&amp;from=rss) - [Caltech-Led Team Finds New Superconducting State](https://soylentnews.org/article.pl?sid=26/01/22/1148259&amp;from=rss)
* [2026-01-23, 18:32:00](https://soylentnews.org/article.pl?sid=26/01/22/1144249&amp;from=rss) - [Starlink in Iran: How the Regime Jams the Service and What Helps Against It](https://soylentnews.org/article.pl?sid=26/01/22/1144249&amp;from=rss)
* [2026-01-23, 15:03:08](https://news.ycombinator.com/item?id=46733306) - [The Science of Fermentation [audio]](https://www.bbc.co.uk/programmes/m002pqg6)
* [2026-01-23, 13:45:00](https://soylentnews.org/article.pl?sid=26/01/22/1141230&amp;from=rss) - [Physics of Foam Strangely Resembles AI Training](https://soylentnews.org/article.pl?sid=26/01/22/1141230&amp;from=rss)
* [2026-01-23, 08:59:00](https://soylentnews.org/article.pl?sid=26/01/22/0422248&amp;from=rss) - [Wikipedia Volunteers Spent Years Cataloging AI Tells. Now There&apos;s a Plugin to Avoid Them.](https://soylentnews.org/article.pl?sid=26/01/22/0422248&amp;from=rss)
* [2026-01-23, 04:12:00](https://soylentnews.org/article.pl?sid=26/01/22/043242&amp;from=rss) - [Nvidia Wanted Pirated Book Stash Access](https://soylentnews.org/article.pl?sid=26/01/22/043242&amp;from=rss)
* [2026-01-22, 23:28:00](https://soylentnews.org/article.pl?sid=26/01/22/0355223&amp;from=rss) - [Textbooks Were Wrong: Human Hair Doesn&apos;t Grow the Way Scientists Thought](https://soylentnews.org/article.pl?sid=26/01/22/0355223&amp;from=rss)
* [2026-01-22, 18:40:00](https://soylentnews.org/article.pl?sid=26/01/21/0150257&amp;from=rss) - [Cows Use Tools](https://soylentnews.org/article.pl?sid=26/01/21/0150257&amp;from=rss)
* [2026-01-22, 14:52:43](https://news.ycombinator.com/item?id=46719958) - [Building a Real-Time HN Display for $15](https://medium.com/@lee.harding/building-a-real-time-hn-display-for-15-3ea1772051ff)
* [2026-01-22, 13:46:00](https://soylentnews.org/article.pl?sid=26/01/21/0147238&amp;from=rss) - [AI Bathroom Monitors? Welcome To America’s New Surveillance High Schools](https://soylentnews.org/article.pl?sid=26/01/21/0147238&amp;from=rss)
* [2026-01-22, 09:07:00](https://soylentnews.org/article.pl?sid=26/01/21/0141201&amp;from=rss) - [France Records More Deaths Than Births for First Time Since End of Second World War](https://soylentnews.org/article.pl?sid=26/01/21/0141201&amp;from=rss)
* [2026-01-22, 04:16:00](https://soylentnews.org/article.pl?sid=26/01/21/0136237&amp;from=rss) - [Professors Issue Warning Over Surge in College Students Unable to Read](https://soylentnews.org/article.pl?sid=26/01/21/0136237&amp;from=rss)
* [2026-01-22, 03:37:03](https://news.ycombinator.com/item?id=46714981) - [Delta single handle ball faucets (1963)](https://archive.org/details/DeltaSingleHandleBallFaucets)
