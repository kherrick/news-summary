# [News Summary](https://kherrick.github.io/news-summary/)

## Technological Innovations and Challenges

* [Hand-Crafting Domain-Specific Compression with an LLM](https://engineering.nanit.com/hand-crafting-domain-specific-compression-with-an-llm-3c42f5c2b070) - A discussion of how LLMs (Large Language Models) can be leveraged for creating domain-specific compression algorithms. [Comments](https://lobste.rs/s/xo4mfg/hand_crafting_domain_specific)

* [Google's 'AI Overviews' Cite YouTube For Health Queries More Than Any Medical Sites, Study Suggests](https://news.slashdot.org/story/26/01/25/0043256/googles-ai-overviews-cite-youtube-for-health-queries-more-than-any-medical-sites-study-suggests) - Study explores the reliance of Google's AI on YouTube as a content source for health information, scrutinizing its implications. [Comments](https://news.slashdot.org/story/26/01/25/0043256/googles-ai-overviews-cite-youtube-for-health-queries-more-than-any-medical-sites-study-suggests)

## Data Privacy and Security

* [Data Leak Exposes 149M Logins, Including Gmail, Facebook](https://www.techrepublic.com/article/news-149-million-passwords-exposed-infostealer-database/) - A massive leak reveals the exposure of over 149 million login credentials from various platforms. [Comments](https://news.ycombinator.com/item?id=46757465)

## Artificial Intelligence and Its Societal Impact

* [AI Tribalism](https://nolanlawson.com/2026/01/24/ai-tribalism/) - An insightful exploration into the ideological divides shaping the evolution of AI systems. [Comments](https://news.ycombinator.com/item?id=46758175)

## Critique and Ethics in Technology

* [Richard Stallman Critiques AI, Connected Cars, Smartphones, and DRM](https://news.slashdot.org/story/26/01/25/1930244/richard-stallman-critiques-ai-connected-cars-smartphones-and-drm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A talk by Richard Stallman where he critiques various aspects of modern technology. [Comments](https://news.slashdot.org/story/26/01/25/1930244/richard-stallman-critiques-ai-connected-cars-smartphones-and-drm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Cybersecurity Highlights

* [Infotainment, EV Charger Exploits Earn $1M at Pwn2Own Automotive 2026](https://it.slashdot.org/story/26/01/25/0131222/infotainment-ev-charger-exploits-earn-1m-at-pwn2own-automotive-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Security experts uncover exploits in modern automotive systems at Pwn2Own Automotive 2026. [Comments](https://it.slashdot.org/story/26/01/25/0131222/infotainment-ev-charger-exploits-earn-1m-at-pwn2own-automotive-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Trends in Energy and the Environment

* [Major River Deltas Are Sinking Faster Than Sea-Level Rise](https://soylentnews.org/article.pl?sid=26/01/24/0110242&amp;from=rss) - Survey results show that river deltas are subsiding at rates faster than the rise in sea levels, triggering significant environmental concerns. [Comments](https://soylentnews.org/article.pl?sid=26/01/24/0110242&amp;from=rss)

## Miscellaneous

* [Cows Use Tools](https://soylentnews.org/article.pl?sid=26/01/21/0150257&amp;from=rss) - A fascinating exploration of tool use by cows, shedding light on animal behavior and cognition. [Comments](https://soylentnews.org/article.pl?sid=26/01/21/0150257&amp;from=rss)

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

* [2026-01-25, 21:47:14](https://lobste.rs/s/xo4mfg/hand_crafting_domain_specific) - [Hand-Crafting Domain-Specific Compression with an LLM](https://engineering.nanit.com/hand-crafting-domain-specific-compression-with-an-llm-3c42f5c2b070)
* [2026-01-25, 21:44:10](https://news.ycombinator.com/item?id=46758644) - [LED lighting undermines visual performance unless supplemented by wider spectra](https://www.nature.com/articles/s41598-026-35389-6)
* [2026-01-25, 21:39:24](https://lobste.rs/s/sbtjef/spreadsheets_vi_json) - [spreadsheets + vi + json](https://awalgarg.me/untitled_project)
* [2026-01-25, 21:07:41](https://news.ycombinator.com/item?id=46758242) - [Canada](https://www.jenn.site/on-canada/)
* [2026-01-25, 21:01:37](https://news.ycombinator.com/item?id=46758175) - [AI Tribalism](https://nolanlawson.com/2026/01/24/ai-tribalism/)
* [2026-01-25, 20:39:25](https://news.ycombinator.com/item?id=46757944) - [OnePlus update blocks downgrades and custom ROMs by blowing a fuse](https://consumerrights.wiki/w/Oneplus_phone_update_introduces_hardware_anti-rollback)
* [2026-01-25, 19:51:45](https://lobste.rs/s/xmwgtx/how_think_about_gas_town) - [How to think about Gas Town](https://steveklabnik.com/writing/how-to-think-about-gas-town/)
* [2026-01-25, 19:45:10](https://news.ycombinator.com/item?id=46757465) - [Data Leak Exposes 149M Logins, Including Gmail, Facebook](https://www.techrepublic.com/article/news-149-million-passwords-exposed-infostealer-database/)
* [2026-01-25, 19:36:00](https://news.slashdot.org/story/26/01/25/1930244/richard-stallman-critiques-ai-connected-cars-smartphones-and-drm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Richard Stallman Critiques AI, Connected Cars, Smartphones, and DRM](https://news.slashdot.org/story/26/01/25/1930244/richard-stallman-critiques-ai-connected-cars-smartphones-and-drm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-25, 19:31:23](https://news.ycombinator.com/item?id=46757357) - [I was right about ATProto key management](https://notes.nora.codes/atproto-again/)
* [2026-01-25, 19:29:25](https://lobste.rs/s/5qylwg/i_was_right_about_atproto_key_management) - [I Was Right About ATProto Key Management](https://notes.nora.codes/atproto-again/)
* [2026-01-25, 19:12:50](https://news.ycombinator.com/item?id=46757162) - [Spanish track was fractured before high-speed train disaster, report finds](https://www.bbc.com/news/articles/c1m77dmxlvlo)
* [2026-01-25, 19:03:40](https://news.ycombinator.com/item?id=46757067) - [First, make me care](https://gwern.net/blog/2026/make-me-care)
* [2026-01-25, 18:59:38](https://lobste.rs/s/qajpk1/frozen_insight_moving_world) - [Frozen Insight in a Moving World](https://jdu.github.io/2026-01-25-frozen-insights-in-a-moving-world.html)
* [2026-01-25, 18:38:49](https://lobste.rs/s/cmvafz/corsproxy) - [CorsProxy](https://corsproxy.io)
* [2026-01-25, 17:59:43](https://lobste.rs/s/kqt13j/visitor_as_sum_type_2018) - [Visitor as a sum type (2018)](https://blog.ploeh.dk/2018/06/25/visitor-as-a-sum-type/)
* [2026-01-25, 17:53:00](https://soylentnews.org/article.pl?sid=26/01/24/0114253&amp;from=rss) - [This May Be The Grossest Eye Pic Ever—but the Cause is What’s Truly Horrifying](https://soylentnews.org/article.pl?sid=26/01/24/0114253&amp;from=rss)
* [2026-01-25, 17:48:30](https://lobste.rs/s/pnhbjw/allowlist_for_gitignore) - [Allowlist for .gitignore](https://blog.izissise.net/posts/gitignoreallowlist/)
* [2026-01-25, 17:36:19](https://news.ycombinator.com/item?id=46756117) - [ICE using Palantir tool that feeds on Medicaid data](https://www.eff.org/deeplinks/2026/01/report-ice-using-palantir-tool-feeds-medicaid-data)
* [2026-01-25, 17:34:00](https://tech.slashdot.org/story/26/01/24/1845236/us-congress-fails-to-repeal-kill-switch-for-cars-mandate?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Congress Fails to Repeal &apos;Kill Switch&apos; for Cars Mandate](https://tech.slashdot.org/story/26/01/24/1845236/us-congress-fails-to-repeal-kill-switch-for-cars-mandate?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-25, 17:24:42](https://news.ycombinator.com/item?id=46755999) - [FAA institutes nationwide drone no-fly zones around ICE operations](https://www.aerotime.aero/articles/faa-drone-no-fly-zone-ice-dhs)
* [2026-01-25, 16:34:00](https://mobile.slashdot.org/story/26/01/25/060240/the-android-nexphone-linux-on-demand-dual-boots-into-windows-11---and-transforms-into-a-workstation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Android &apos;NexPhone&apos;: Linux on Demand, Dual-Boots Into Windows 11 - and Transforms Into a Workstation](https://mobile.slashdot.org/story/26/01/25/060240/the-android-nexphone-linux-on-demand-dual-boots-into-windows-11---and-transforms-into-a-workstation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-25, 16:22:07](https://lobste.rs/s/4jiqup/software_patches_nixos_for_fun) - [Software patches in NixOS for fun and productivity](https://log.pfad.fr/2026/software-patching-in-nixos/)
* [2026-01-25, 16:00:16](https://lobste.rs/s/o3amdz/because_coordination_is_expensive) - [Because coordination is expensive](https://surfingcomplexity.blog/2026/01/24/because-coordination-is-expensive/)
* [2026-01-25, 15:51:03](https://news.ycombinator.com/item?id=46755115) - [Using PostgreSQL as a Dead Letter Queue for Event-Driven Systems](https://www.diljitpr.net/blog-post-postgresql-dlq)
* [2026-01-25, 15:34:51](https://news.ycombinator.com/item?id=46754944) - [A macOS app that blurs your screen when you slouch](https://github.com/tldev/posturr)
* [2026-01-25, 15:34:00](https://hardware.slashdot.org/story/26/01/24/0452209/the-case-against-small-modular-nuclear-reactors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Case Against Small Modular Nuclear Reactors](https://hardware.slashdot.org/story/26/01/24/0452209/the-case-against-small-modular-nuclear-reactors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-25, 14:20:01](https://lobste.rs/s/vzatmm/welcome_email_expiration_date) - [Welcome to the \&quot;Email Expiration Date\&quot; initiative](https://www.zerocarbon.email/)
* [2026-01-25, 13:55:53](https://lobste.rs/s/yryapx/indieweb_small_web) - [The IndieWeb and Small web](https://christiano.dev/post/indieweb_smallweb/)
* [2026-01-25, 13:02:00](https://soylentnews.org/article.pl?sid=26/01/24/0112225&amp;from=rss) - [OpenAI Rolls Out Ads in ChatGPT as Expenses Skyrocket](https://soylentnews.org/article.pl?sid=26/01/24/0112225&amp;from=rss)
* [2026-01-25, 12:54:53](https://news.ycombinator.com/item?id=46753708) - [Web-based image editor modeled after Deluxe Paint](https://github.com/steffest/DPaint-js)
* [2026-01-25, 12:50:35](https://lobste.rs/s/utenv0/is_it_worth_it) - [Is It Worth It?](https://griffin.com/blog/is-it-worth-it)
* [2026-01-25, 12:50:13](https://lobste.rs/s/wncdwu/cppstat_c_c_compiler_support_status) - [cppstat - C and C++ Compiler Support Status](https://cppstat.dev/)
* [2026-01-25, 12:34:00](https://news.slashdot.org/story/26/01/25/0422212/the-risks-of-ai-in-schools-outweigh-the-benefits-report-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Risks of AI in Schools Outweigh the Benefits, Report Says](https://news.slashdot.org/story/26/01/25/0422212/the-risks-of-ai-in-schools-outweigh-the-benefits-report-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-25, 12:22:12](https://news.ycombinator.com/item?id=46753484) - [Doom has been ported to an earbud](https://doombuds.com)
* [2026-01-25, 12:02:01](https://news.ycombinator.com/item?id=46753336) - [Nango (YC W23, Dev Infrastructure) Is Hiring Remotely](https://jobs.ashbyhq.com/Nango)
* [2026-01-25, 11:56:42](https://news.ycombinator.com/item?id=46753301) - [Show HN: Bonsplit – Tabs and splits for native macOS apps](https://bonsplit.alasdairmonk.com)
* [2026-01-25, 11:38:53](https://lobste.rs/s/ylgyhu/lament_for_aperture_app_we_ll_never_get) - [A Lament For Aperture, The App We&apos;ll Never Get Over Losing](https://ikennd.ac/blog/2026/01/old-man-yells-at-modern-software-design/)
* [2026-01-25, 11:19:04](https://news.ycombinator.com/item?id=46753078) - [Show HN: TUI for managing XDG default applications](https://github.com/mitjafelicijan/xdgctl)
* [2026-01-25, 11:09:11](https://lobste.rs/s/xefxir/bouncy_ball_will_always_bounce_back) - [Bouncy Ball will always bounce back](https://filipfila.wordpress.com/2026/01/25/bouncy-ball-will-always-bounce-back/)
* [2026-01-25, 10:54:29](https://news.ycombinator.com/item?id=46752907) - [150k lines of vibe coded Elixir: The good, the bad and the ugly](https://getboothiq.com/blog/150k-lines-vibe-coded-elixir-good-bad-ugly)
* [2026-01-25, 09:22:17](https://news.ycombinator.com/item?id=46752261) - [Jurassic Park - Tablet device on Nedry&apos;s desk? (2012)](https://www.therpf.com/forums/threads/jurassic-park-tablet-device-on-nedrys-desk.169883/)
* [2026-01-25, 09:04:30](https://news.ycombinator.com/item?id=46752151) - [A flawed paper in management science has been cited more than 6k times](https://statmodeling.stat.columbia.edu/2026/01/22/aking/)
* [2026-01-25, 08:44:00](https://linux.slashdot.org/story/26/01/24/2332205/former-canonical-developer-advocate-warns-snap-store-isnt-safe-after-slow-responses-to-malware-reports?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Former Canonical Developer Advocate Warns Snap Store Isn&apos;t Safe After Slow Responses to Malware Reports](https://linux.slashdot.org/story/26/01/24/2332205/former-canonical-developer-advocate-warns-snap-store-isnt-safe-after-slow-responses-to-malware-reports?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-25, 08:30:00](https://soylentnews.org/article.pl?sid=26/01/24/0110242&amp;from=rss) - [Major River Deltas Are Sinking Faster Than Sea-Level Rise](https://soylentnews.org/article.pl?sid=26/01/24/0110242&amp;from=rss)
* [2026-01-25, 08:22:17](https://news.ycombinator.com/item?id=46751899) - [Deutsche Telekom is throttling the internet](https://netzbremse.de/en/)
* [2026-01-25, 08:07:03](https://news.ycombinator.com/item?id=46751826) - [Introduction to PostgreSQL Indexes](https://dlt.github.io/blog/posts/introduction-to-postgresql-indexes/)
* [2026-01-25, 08:05:34](https://lobste.rs/s/zktaom/hands_on_with_two_apple_network_server) - [Hands-on with two Apple Network Server prototype ROMs](http://oldvcr.blogspot.com/2026/01/hands-on-with-two-apple-network-server.html)
* [2026-01-25, 06:56:57](https://lobste.rs/s/upkphl/introducing_kitty_cards) - [Introducing Kitty Cards](https://lmno.lol/alvaro/introducing-kitty-cards)
* [2026-01-25, 06:11:57](https://lobste.rs/s/7hxrjv/home_router_recommendations) - [Home router recommendations](https://lobste.rs/s/7hxrjv/home_router_recommendations)
* [2026-01-25, 05:34:00](https://news.slashdot.org/story/26/01/25/0043256/googles-ai-overviews-cite-youtube-for-health-queries-more-than-any-medical-sites-study-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s &apos;AI Overviews&apos; Cite YouTube For Health Queries More Than Any Medical Sites, Study Suggests](https://news.slashdot.org/story/26/01/25/0043256/googles-ai-overviews-cite-youtube-for-health-queries-more-than-any-medical-sites-study-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-25, 04:46:41](https://lobste.rs/s/weixyl/value_things) - [The Value of Things](https://journal.stuffwithstuff.com/2026/01/24/the-value-of-things/)
* [2026-01-25, 03:38:00](https://soylentnews.org/article.pl?sid=26/01/24/019242&amp;from=rss) - [How Greenwashing Creates &apos;False Stability&apos; for Companies](https://soylentnews.org/article.pl?sid=26/01/24/019242&amp;from=rss)
* [2026-01-25, 02:34:00](https://it.slashdot.org/story/26/01/25/0131222/infotainment-ev-charger-exploits-earn-1m-at-pwn2own-automotive-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Infotainment, EV Charger Exploits Earn $1M at Pwn2Own Automotive 2026](https://it.slashdot.org/story/26/01/25/0131222/infotainment-ev-charger-exploits-earn-1m-at-pwn2own-automotive-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-24, 23:34:00](https://it.slashdot.org/story/26/01/24/2146216/work-from-office-mandate-expect-top-talent-turnover-culture-rot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Work-From-Office Mandate? Expect Top Talent Turnover, Culture Rot](https://it.slashdot.org/story/26/01/24/2146216/work-from-office-mandate-expect-top-talent-turnover-culture-rot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-24, 22:54:00](https://soylentnews.org/article.pl?sid=26/01/23/1016236&amp;from=rss) - [Ancient “Mosaic” Fossils Found in Morocco Challenge the Timeline of Human Evolution](https://soylentnews.org/article.pl?sid=26/01/23/1016236&amp;from=rss)
* [2026-01-24, 22:34:00](https://tech.slashdot.org/story/26/01/24/2223200/airlines-cancel-over-10000-us-flights-due-to-massive-winter-storm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Airlines Cancel Over 10,000 US Flights Due To Massive Winter Storm](https://tech.slashdot.org/story/26/01/24/2223200/airlines-cancel-over-10000-us-flights-due-to-massive-winter-storm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-24, 22:14:14](https://lobste.rs/s/pdsego/i_added_bluesky_comment_section_my_blog) - [I added a Bluesky comment section to my blog](https://micahcantor.com/blog/bluesky-comment-section.html)
* [2026-01-24, 21:50:44](https://lobste.rs/s/iuzuw1/doing_gigabit_ethernet_over_my_british) - [Doing Gigabit Ethernet Over My British Phone Wires](https://thehftguy.com/2026/01/22/doing-gigabit-ethernet-over-my-british-phone-wires/)
* [2026-01-24, 21:34:00](https://hardware.slashdot.org/story/26/01/24/1938220/cheap-green-tech-allows-faster-path-to-electrification-for-the-developing-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cheap Green Tech Allows Faster Path To Electrification For the Developing World](https://hardware.slashdot.org/story/26/01/24/1938220/cheap-green-tech-allows-faster-path-to-electrification-for-the-developing-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-24, 21:31:36](https://lobste.rs/s/cw6f2s/ai_tribalism) - [AI tribalism](https://nolanlawson.com/2026/01/24/ai-tribalism/)
* [2026-01-24, 20:34:00](https://it.slashdot.org/story/26/01/24/2031221/microsoft-365-endured-9-hours-of-outages-thursday?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft 365 Endured 9+ Hours of Outages Thursday](https://it.slashdot.org/story/26/01/24/2031221/microsoft-365-endured-9-hours-of-outages-thursday?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-24, 19:34:00](https://slashdot.org/story/26/01/24/076228/ai-luminaries-clash-at-davos-over-how-close-human-level-intelligence-really-is?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Luminaries Clash At Davos Over How Close Human-Level Intelligence Really Is](https://slashdot.org/story/26/01/24/076228/ai-luminaries-clash-at-davos-over-how-close-human-level-intelligence-really-is?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-24, 18:34:00](https://science.slashdot.org/story/26/01/24/0633252/nasa-confident-but-some-critics-wonder-if-its-orion-spacecraft-is-safe-to-fly?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Confident, But Some Critics Wonder if Its Orion Spacecraft is Safe to Fly](https://science.slashdot.org/story/26/01/24/0633252/nasa-confident-but-some-critics-wonder-if-its-orion-spacecraft-is-safe-to-fly?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-24, 18:11:00](https://soylentnews.org/article.pl?sid=26/01/23/1010250&amp;from=rss) - [Micron Acquires PSMC Fab Site in Taiwan for $1.8 Billion](https://soylentnews.org/article.pl?sid=26/01/23/1010250&amp;from=rss)
* [2026-01-24, 18:05:49](https://lobste.rs/s/abqeyo/obvious_things_c_should_do) - [Obvious Things C Should Do](https://www.digitalmars.com/articles/Cobvious.html)
* [2026-01-24, 17:34:00](https://tech.slashdot.org/story/26/01/24/0736248/us-insurer-lemonade-cuts-rates-50-for-drivers-using-teslas-full-self-driving-software?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Insurer &apos;Lemonade&apos; Cuts Rates 50% for Drivers Using Tesla&apos;s &apos;Full Self-Driving&apos; Software](https://tech.slashdot.org/story/26/01/24/0736248/us-insurer-lemonade-cuts-rates-50-for-drivers-using-teslas-full-self-driving-software?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-24, 16:39:37](https://lobste.rs/s/2qsmw8/e9p_pure_erlang_9p_implementation) - [e9p - pure Erlang 9p implementation](https://tangled.org/hauleth.dev/e9p)
* [2026-01-24, 13:25:00](https://soylentnews.org/article.pl?sid=26/01/23/1012244&amp;from=rss) - [Hygienic Conditions in Pompeii&apos;s Early Baths Were Poor](https://soylentnews.org/article.pl?sid=26/01/23/1012244&amp;from=rss)
* [2026-01-24, 08:42:00](https://soylentnews.org/article.pl?sid=26/01/22/124243&amp;from=rss) - [A Billiard Ball as a Universal Computation Machine](https://soylentnews.org/article.pl?sid=26/01/22/124243&amp;from=rss)
* [2026-01-24, 04:01:00](https://soylentnews.org/article.pl?sid=26/01/22/121252&amp;from=rss) - [When Order Matters: How A Single DNS Change Broke The Internet For Millions](https://soylentnews.org/article.pl?sid=26/01/22/121252&amp;from=rss)
* [2026-01-23, 23:16:00](https://soylentnews.org/article.pl?sid=26/01/22/1148259&amp;from=rss) - [Caltech-Led Team Finds New Superconducting State](https://soylentnews.org/article.pl?sid=26/01/22/1148259&amp;from=rss)
* [2026-01-23, 18:32:00](https://soylentnews.org/article.pl?sid=26/01/22/1144249&amp;from=rss) - [Starlink in Iran: How the Regime Jams the Service and What Helps Against It](https://soylentnews.org/article.pl?sid=26/01/22/1144249&amp;from=rss)
* [2026-01-23, 13:45:00](https://soylentnews.org/article.pl?sid=26/01/22/1141230&amp;from=rss) - [Physics of Foam Strangely Resembles AI Training](https://soylentnews.org/article.pl?sid=26/01/22/1141230&amp;from=rss)
* [2026-01-23, 08:59:00](https://soylentnews.org/article.pl?sid=26/01/22/0422248&amp;from=rss) - [Wikipedia Volunteers Spent Years Cataloging AI Tells. Now There&apos;s a Plugin to Avoid Them.](https://soylentnews.org/article.pl?sid=26/01/22/0422248&amp;from=rss)
* [2026-01-23, 04:12:00](https://soylentnews.org/article.pl?sid=26/01/22/043242&amp;from=rss) - [Nvidia Wanted Pirated Book Stash Access](https://soylentnews.org/article.pl?sid=26/01/22/043242&amp;from=rss)
* [2026-01-22, 23:28:00](https://soylentnews.org/article.pl?sid=26/01/22/0355223&amp;from=rss) - [Textbooks Were Wrong: Human Hair Doesn&apos;t Grow the Way Scientists Thought](https://soylentnews.org/article.pl?sid=26/01/22/0355223&amp;from=rss)
* [2026-01-22, 18:40:00](https://soylentnews.org/article.pl?sid=26/01/21/0150257&amp;from=rss) - [Cows Use Tools](https://soylentnews.org/article.pl?sid=26/01/21/0150257&amp;from=rss)
* [2026-01-22, 13:46:00](https://soylentnews.org/article.pl?sid=26/01/21/0147238&amp;from=rss) - [AI Bathroom Monitors? Welcome To America’s New Surveillance High Schools](https://soylentnews.org/article.pl?sid=26/01/21/0147238&amp;from=rss)
* [2026-01-22, 09:07:00](https://soylentnews.org/article.pl?sid=26/01/21/0141201&amp;from=rss) - [France Records More Deaths Than Births for First Time Since End of Second World War](https://soylentnews.org/article.pl?sid=26/01/21/0141201&amp;from=rss)
* [2026-01-22, 04:16:00](https://soylentnews.org/article.pl?sid=26/01/21/0136237&amp;from=rss) - [Professors Issue Warning Over Surge in College Students Unable to Read](https://soylentnews.org/article.pl?sid=26/01/21/0136237&amp;from=rss)
* [2026-01-21, 23:34:00](https://soylentnews.org/article.pl?sid=26/01/19/1628204&amp;from=rss) - [The Science That Casts Doubt on Claims About Microplastics](https://soylentnews.org/article.pl?sid=26/01/19/1628204&amp;from=rss)
* [2026-01-21, 19:58:59](https://news.ycombinator.com/item?id=46710747) - [ANN v3: 200ms p99 query latency over 100B vectors](https://turbopuffer.com/blog/ann-v3)
* [2026-01-21, 18:49:00](https://soylentnews.org/article.pl?sid=26/01/19/1619249&amp;from=rss) - [Hobbies Don&apos;t Just Improve Personal Lives, They Can Boost Workplace Creativity Too](https://soylentnews.org/article.pl?sid=26/01/19/1619249&amp;from=rss)
* [2026-01-21, 14:06:00](https://soylentnews.org/article.pl?sid=26/01/19/1618219&amp;from=rss) - [IT Spending Set to Hit $1.4 Trillion in 2026 - but What Exactly Are We Spending It On?](https://soylentnews.org/article.pl?sid=26/01/19/1618219&amp;from=rss)
* [2026-01-21, 09:20:00](https://soylentnews.org/article.pl?sid=26/01/19/1615238&amp;from=rss) - [The Places We Make Memories Help Us Inscribe Them](https://soylentnews.org/article.pl?sid=26/01/19/1615238&amp;from=rss)
* [2026-01-21, 04:34:00](https://soylentnews.org/article.pl?sid=26/01/19/1613240&amp;from=rss) - [Proton VPN Kills Off Legacy OpenVPN Configs in Push for Better Security](https://soylentnews.org/article.pl?sid=26/01/19/1613240&amp;from=rss)
