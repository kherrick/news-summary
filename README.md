# [News Summary](https://kherrick.github.io/news-summary/)

## Developments in Technology and Software

* [An expression language for Vixen](https://raku-advent.blog/2025/12/15/day-15-an-expression-language-for-vixen/) ([comments](https://lobste.rs/s/ek7jpu/expression_language_for_vixen))

* [Liskell - Haskell Semantics with Lisp Syntax](http://clemens.endorphin.org/ILC07-Liskell-draft.pdf) ([comments](https://lobste.rs/s/dhvobg/liskell_haskell_semantics_with_lisp))

* [Chafa: Terminal Graphics for the 21st Century](https://hpjansson.org/chafa/) ([comments](https://lobste.rs/s/qh6lil/chafa_terminal_graphics_for_21st_century))

* [Umbrel – Personal Cloud](https://umbrel.com) ([comments](https://news.ycombinator.com/item?id=46279187))

* [IronFleet: Proving Practical Distributed Systems Correct](https://www.andrew.cmu.edu/user/bparno/papers/ironfleet.pdf) ([comments](https://lobste.rs/s/xy3dpm/ironfleet_proving_practical))

* [30 Years of <br> Tags](https://www.artmann.co/articles/30-years-of-br-tags) ([comments](https://lobste.rs/s/qawuhq/30_years_br_tags))

* [Rust's v0 mangling scheme in a nutshell](https://purplesyringa.moe/blog/rusts-v0-mangling-scheme-in-a-nutshell/) ([comments](https://lobste.rs/s/khozwx/rust_s_v0_mangling_scheme_nutshell))

## Consumer Technology and Security

* [Verizon Refused To Unlock Man's iPhone, So He Sued the Carrier and Won](https://tech.slashdot.org/story/25/12/15/190217/verizon-refused-to-unlock-mans-iphone-so-he-sued-the-carrier-and-won?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://tech.slashdot.org/story/25/12/15/190217/verizon-refused-to-unlock-mans-iphone-so-he-sued-the-carrier-and-won?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* ["Super secure" messaging app leaks everyone's phone number](https://ericdaigle.ca/posts/super-secure-maga-messaging-app-leaks-everyones-phone-number/) ([comments](https://news.ycombinator.com/item?id=46279123))

* [Security Researcher Found Critical Kindle Vulnerabilities That Allowed Hijacking Amazon Accounts](https://it.slashdot.org/story/25/12/15/0833242/security-researcher-found-critical-kindle-vulnerabilities-that-allowed-hijacking-amazon-accounts?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://it.slashdot.org/story/25/12/15/0833242/security-researcher-found-critical-kindle-vulnerabilities-that-allowed-hijacking-amazon-accounts?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [SoundCloud has banned VPN access](https://old.reddit.com/r/SoundCloudMusic/comments/1pltd19/soundcloud_just_banned_vpn_access/) ([comments](https://news.ycombinator.com/item?id=46269891))

## Science and Environmental Insights

* [Russian Ban On Roblox Gaming Platform Sparks Rare Protest](https://yro.slashdot.org/story/25/12/15/2121240/russian-ban-on-roblox-gaming-platform-sparks-rare-protest?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://yro.slashdot.org/story/25/12/15/2121240/russian-ban-on-roblox-gaming-platform-sparks-rare-protest?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Scientists Thought Parkinson's Was in Our Genes. It Might Be in the Water](https://science.slashdot.org/story/25/12/15/1550214/scientists-thought-parkinsons-was-in-our-genes-it-might-be-in-the-water?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://science.slashdot.org/story/25/12/15/1550214/scientists-thought-parkinsons-was-in-our-genes-it-might-be-in-the-water?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [A Speed Camera for the Universe](https://soylentnews.org/article.pl?sid=25/12/13/1627258&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/12/13/1627258&from=rss))

## Industry and Economy

* [Ford kills the All-Electric F-150](https://www.wired.com/story/ford-kills-electric-f-150-lightning-for-hybrid/) ([comments](https://news.ycombinator.com/item?id=46281182))

* [Electricity Is Now Holding Back Growth Across the Global Economy](https://hardware.slashdot.org/story/25/12/15/1511233/electricity-is-now-holding-back-growth-across-the-global-economy?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://hardware.slashdot.org/story/25/12/15/1511233/electricity-is-now-holding-back-growth-across-the-global-economy?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Roomba Maker 'iRobot' Files for Bankruptcy After 35 Years](https://hardware.slashdot.org/story/25/12/15/0152212/roomba-maker-irobot-files-for-bankruptcy-after-35-years?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://hardware.slashdot.org/story/25/12/15/0152212/roomba-maker-irobot-files-for-bankruptcy-after-35-years?utm_source=rss1.0mainlinkanon&utm_medium=feed))

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

* [2025-12-15, 21:46:53](https://news.ycombinator.com/item?id=46281182) - [Ford kills the All-Electric F-150](https://www.wired.com/story/ford-kills-electric-f-150-lightning-for-hybrid/)
* [2025-12-15, 21:40:57](https://lobste.rs/s/ek7jpu/expression_language_for_vixen) - [An expression language for Vixen](https://raku-advent.blog/2025/12/15/day-15-an-expression-language-for-vixen/)
* [2025-12-15, 21:23:00](https://yro.slashdot.org/story/25/12/15/2121240/russian-ban-on-roblox-gaming-platform-sparks-rare-protest?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Russian Ban On Roblox Gaming Platform Sparks Rare Protest](https://yro.slashdot.org/story/25/12/15/2121240/russian-ban-on-roblox-gaming-platform-sparks-rare-protest?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-15, 20:52:35](https://news.ycombinator.com/item?id=46280465) - [A kernel bug froze my machine: Debugging an async-profiler deadlock](https://questdb.com/blog/async-profiler-kernel-bug/)
* [2025-12-15, 20:26:38](https://lobste.rs/s/dhvobg/liskell_haskell_semantics_with_lisp) - [Liskell - Haskell Semantics with Lisp Syntax](http://clemens.endorphin.org/ILC07-Liskell-draft.pdf)
* [2025-12-15, 20:20:58](https://lobste.rs/s/2q5g02/tla_modeling_tips) - [TLA+ modeling tips](http://muratbuffalo.blogspot.com/2025/12/tla-modeling-tips.html)
* [2025-12-15, 20:10:08](https://lobste.rs/s/ukxbtv/using_e_ink_tablet_as_monitor_for_linux) - [Using E-Ink tablet as monitor for Linux](https://alavi.me/blog/e-ink-tablet-as-monitor-linux/)
* [2025-12-15, 20:09:48](https://news.ycombinator.com/item?id=46279825) - [The appropriate amount of effort is zero](https://expandingawareness.org/blog/the-appropriate-amount-of-effort-is-zero/)
* [2025-12-15, 20:05:00](https://tech.slashdot.org/story/25/12/15/190217/verizon-refused-to-unlock-mans-iphone-so-he-sued-the-carrier-and-won?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Verizon Refused To Unlock Man&apos;s iPhone, So He Sued the Carrier and Won](https://tech.slashdot.org/story/25/12/15/190217/verizon-refused-to-unlock-mans-iphone-so-he-sued-the-carrier-and-won?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-15, 19:42:35](https://lobste.rs/s/e62vku/d_bus_is_disgrace_linux_desktop) - [D-Bus is a disgrace to the Linux desktop](https://blog.vaxry.net/articles/2025-dbusSucks)
* [2025-12-15, 19:30:22](https://news.ycombinator.com/item?id=46279241) - [Upcoming Changes to Let&apos;s Encrypt Certificates](https://community.letsencrypt.org/t/upcoming-changes-to-let-s-encrypt-certificates/243873)
* [2025-12-15, 19:27:08](https://news.ycombinator.com/item?id=46279187) - [Umbrel – Personal Cloud](https://umbrel.com)
* [2025-12-15, 19:24:00](https://news.slashdot.org/story/25/12/15/1850220/why-floods-threaten-one-of-the-driest-places-in-the-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why Floods Threaten One of the Driest Places in the World](https://news.slashdot.org/story/25/12/15/1850220/why-floods-threaten-one-of-the-driest-places-in-the-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-15, 19:23:51](https://news.ycombinator.com/item?id=46279123) - [“Super secure” messaging app leaks everyone&apos;s phone number](https://ericdaigle.ca/posts/super-secure-maga-messaging-app-leaks-everyones-phone-number/)
* [2025-12-15, 19:07:10](https://news.ycombinator.com/item?id=46278857) - [Problems with D-Bus on the Linux desktop](https://blog.vaxry.net/articles/2025-dbusSucks)
* [2025-12-15, 19:01:00](https://soylentnews.org/article.pl?sid=25/12/13/1627258&amp;from=rss) - [A Speed Camera for the Universe](https://soylentnews.org/article.pl?sid=25/12/13/1627258&amp;from=rss)
* [2025-12-15, 18:45:00](https://tech.slashdot.org/story/25/12/15/1830212/cloudflare-reveals-how-bots-and-governments-reshaped-the-internet-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cloudflare Reveals How Bots and Governments Reshaped the Internet in 2025](https://tech.slashdot.org/story/25/12/15/1830212/cloudflare-reveals-how-bots-and-governments-reshaped-the-internet-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-15, 18:16:34](https://news.ycombinator.com/item?id=46278208) - [Chafa: Terminal Graphics for the 21st Century](https://hpjansson.org/chafa/)
* [2025-12-15, 18:07:34](https://lobste.rs/s/mgt6av/swift_configuration_1_0_released) - [Swift Configuration 1.0 released](https://swift.org/blog/swift-configuration-1.0-released/)
* [2025-12-15, 18:06:00](https://tech.slashdot.org/story/25/12/15/186244/google-to-retire-dark-web-report-tool-that-scanned-for-leaked-user-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google To Retire &apos;Dark Web Report&apos; Tool That Scanned for Leaked User Data](https://tech.slashdot.org/story/25/12/15/186244/google-to-retire-dark-web-report-tool-that-scanned-for-leaked-user-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-15, 17:47:21](https://lobste.rs/s/xy3dpm/ironfleet_proving_practical) - [IronFleet: Proving Practical Distributed Systems Correct](https://www.andrew.cmu.edu/user/bparno/papers/ironfleet.pdf)
* [2025-12-15, 17:21:00](https://news.slashdot.org/story/25/12/15/1648225/us-tech-force-aims-to-recruit-1000-technologists?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Tech Force Aims To Recruit 1,000 Technologists ](https://news.slashdot.org/story/25/12/15/1648225/us-tech-force-aims-to-recruit-1000-technologists?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-15, 17:19:24](https://news.ycombinator.com/item?id=46277353) - [US Tech Force](https://techforce.gov/)
* [2025-12-15, 17:01:42](https://news.ycombinator.com/item?id=46277090) - [Cosmic-ray bath in a past supernova gives birth to Earth-like planets](https://www.science.org/doi/10.1126/sciadv.adx7892)
* [2025-12-15, 16:40:00](https://science.slashdot.org/story/25/12/15/1550214/scientists-thought-parkinsons-was-in-our-genes-it-might-be-in-the-water?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Thought Parkinson&apos;s Was in Our Genes. It Might Be in the Water](https://science.slashdot.org/story/25/12/15/1550214/scientists-thought-parkinsons-was-in-our-genes-it-might-be-in-the-water?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-15, 16:08:01](https://news.ycombinator.com/item?id=46276313) - [We architected an edge caching layer to eliminate cold starts](https://www.mintlify.com/blog/page-speed-improvements)
* [2025-12-15, 16:00:00](https://news.slashdot.org/story/25/12/15/1541213/how-did-the-cia-lose-a-nuclear-device?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Did the CIA Lose a Nuclear Device?](https://news.slashdot.org/story/25/12/15/1541213/how-did-the-cia-lose-a-nuclear-device?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-15, 15:56:38](https://lobste.rs/s/l2icfd/will_turso_be_better_sqlite) - [Will Turso Be The Better SQLite?](https://www.youtube.com/watch?v=1JHOY0zqNBY)
* [2025-12-15, 15:21:00](https://hardware.slashdot.org/story/25/12/15/1511233/electricity-is-now-holding-back-growth-across-the-global-economy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Electricity Is Now Holding Back Growth Across the Global Economy](https://hardware.slashdot.org/story/25/12/15/1511233/electricity-is-now-holding-back-growth-across-the-global-economy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-15, 15:13:40](https://lobste.rs/s/z9h9iq/careless_whisper_side_channel_attack) - [\&quot;Careless Whisper\&quot; side-channel attack affects WhatsApp and Signal](https://cybernews.com/security/whatsapp-signal-real-time-tracking-battery-drain-flaw/)
* [2025-12-15, 15:07:13](https://lobste.rs/s/z0j9gr/announcing_key_transparency_for) - [Announcing Key Transparency for the Fediverse](https://soatok.blog/2025/12/15/announcing-key-transparency-fediverse/)
* [2025-12-15, 14:56:02](https://news.ycombinator.com/item?id=46275316) - [We are discontinuing the dark web report](https://support.google.com/websearch/answer/16767242?hl=en)
* [2025-12-15, 14:47:32](https://lobste.rs/s/ry9pp0/identity_aware_vpn_proxy_for_remote) - [Identity-aware VPN and proxy for remote access](https://github.com/fosrl/pangolin)
* [2025-12-15, 14:40:00](https://entertainment.slashdot.org/story/25/12/15/1430224/lgs-software-update-forces-microsoft-copilot-onto-smart-tvs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [LG&apos;s Software Update Forces Microsoft Copilot Onto Smart TVs](https://entertainment.slashdot.org/story/25/12/15/1430224/lgs-software-update-forces-microsoft-copilot-onto-smart-tvs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-15, 14:18:30](https://lobste.rs/s/mldhwy/stopping_systemd_services_under_memory) - [Stopping systemd services under memory pressure](https://blog.cyplo.dev/stopping-systemd-services-under-memory-pressure.html)
* [2025-12-15, 14:16:32](https://news.ycombinator.com/item?id=46274822) - [Carrier Landing in Top Gun for the NES](https://relaxing.run/blag/posts/top-gun-landing/)
* [2025-12-15, 14:13:46](https://lobste.rs/s/qbonja/top_gun_s_carrier_landing_exposed) - [Top Gun&apos;s Carrier Landing: Exposed](https://relaxing.run/blag/posts/top-gun-landing)
* [2025-12-15, 14:11:00](https://soylentnews.org/article.pl?sid=25/12/13/1625224&amp;from=rss) - [Scientists Thought Parkinson’s Was in Our Genes. It Might Be in the Water](https://soylentnews.org/article.pl?sid=25/12/13/1625224&amp;from=rss)
* [2025-12-15, 14:01:00](https://it.slashdot.org/story/25/12/15/0833242/security-researcher-found-critical-kindle-vulnerabilities-that-allowed-hijacking-amazon-accounts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Security Researcher Found Critical Kindle Vulnerabilities That Allowed Hijacking Amazon Accounts](https://it.slashdot.org/story/25/12/15/0833242/security-researcher-found-critical-kindle-vulnerabilities-that-allowed-hijacking-amazon-accounts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-15, 13:48:03](https://news.ycombinator.com/item?id=46274478) - [It seems that OpenAI is scraping [certificate transparency] logs](https://benjojo.co.uk/u/benjojo/h/Gxy2qrCkn1Y327Y6D3)
* [2025-12-15, 12:26:01](https://lobste.rs/s/gdtrgm/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/gdtrgm/what_are_you_doing_this_week)
* [2025-12-15, 12:12:24](https://news.ycombinator.com/item?id=46273466) - [I&apos;m Kenyan. I don&apos;t write like ChatGPT, ChatGPT writes like me](https://marcusolang.substack.com/p/im-kenyan-i-dont-write-like-chatgpt)
* [2025-12-15, 12:00:26](https://news.ycombinator.com/item?id=46273372) - [Optery (YC W22) Hiring CISO, Release Manager, Tech Lead (Node), Full Stack Eng](https://www.optery.com/careers/)
* [2025-12-15, 10:08:02](https://news.ycombinator.com/item?id=46272487) - [Avoid UUID Version 4 Primary Keys in Postgres](https://andyatkinson.com/avoid-uuid-version-4-primary-keys)
* [2025-12-15, 10:05:21](https://lobste.rs/s/qh6lil/chafa_terminal_graphics_for_21st_century) - [Chafa: Terminal Graphics for the 21st Century](https://hpjansson.org/chafa/)
* [2025-12-15, 09:44:32](https://lobste.rs/s/qawuhq/30_years_br_tags) - [30 Years of &lt;br&gt; Tags](https://www.artmann.co/articles/30-years-of-br-tags)
* [2025-12-15, 09:22:00](https://soylentnews.org/article.pl?sid=25/12/13/1619207&amp;from=rss) - [The State of Open Source Software in 2025](https://soylentnews.org/article.pl?sid=25/12/13/1619207&amp;from=rss)
* [2025-12-15, 08:37:14](https://lobste.rs/s/khozwx/rust_s_v0_mangling_scheme_nutshell) - [Rust&apos;s v0 mangling scheme in a nutshell](https://purplesyringa.moe/blog/rusts-v0-mangling-scheme-in-a-nutshell/)
* [2025-12-15, 08:34:00](https://slashdot.org/story/25/12/15/0812238/are-warnings-of-superintelligence-inevitability-masking-a-grab-for-power?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Are Warnings of Superintelligence &apos;Inevitability&apos; Masking a Grab for Power?](https://slashdot.org/story/25/12/15/0812238/are-warnings-of-superintelligence-inevitability-masking-a-grab-for-power?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-15, 08:21:58](https://lobste.rs/s/sxbxfe/experimental_sokol_vulkan_backend) - [The experimental Sokol Vulkan backend](https://floooh.github.io/2025/12/01/sokol-vulkan-backend-1.html)
* [2025-12-15, 07:10:01](https://lobste.rs/s/2nbzsq/jubilant_python_subprocess_go_codegen) - [Jubilant: Python subprocess and Go codegen](https://benhoyt.com/writings/jubilant/)
* [2025-12-15, 05:24:00](https://science.slashdot.org/story/25/12/15/033255/spacex-alleges-a-chinese-deployed-satellite-risked-colliding-with-starlink?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SpaceX Alleges a Chinese-Deployed Satellite Risked Colliding with Starlink](https://science.slashdot.org/story/25/12/15/033255/spacex-alleges-a-chinese-deployed-satellite-risked-colliding-with-starlink?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-15, 04:45:00](https://soylentnews.org/article.pl?sid=25/12/13/1616219&amp;from=rss) - [What Time is It on Mars? NIST Physicists Have the Answer](https://soylentnews.org/article.pl?sid=25/12/13/1616219&amp;from=rss)
* [2025-12-15, 03:57:46](https://news.ycombinator.com/item?id=46270298) - [Arborium: Tree-sitter code highlighting with Native and WASM targets](https://arborium.bearcove.eu/)
* [2025-12-15, 03:55:07](https://news.ycombinator.com/item?id=46270282) - [Unscii](http://viznut.fi/unscii/)
* [2025-12-15, 03:38:11](https://lobste.rs/s/vcjisp/l5_processing_library_lua_for) - [L5: A Processing Library in Lua for Interactive Artwork](https://l5lua.org/)
* [2025-12-15, 03:24:00](https://hardware.slashdot.org/story/25/12/15/0152212/roomba-maker-irobot-files-for-bankruptcy-after-35-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Roomba Maker &apos;iRobot&apos; Files for Bankruptcy After 35 Years](https://hardware.slashdot.org/story/25/12/15/0152212/roomba-maker-irobot-files-for-bankruptcy-after-35-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-15, 02:51:24](https://news.ycombinator.com/item?id=46269891) - [SoundCloud has banned VPN access](https://old.reddit.com/r/SoundCloudMusic/comments/1pltd19/soundcloud_just_banned_vpn_access/)
* [2025-12-15, 01:24:00](https://tech.slashdot.org/story/25/12/15/0120247/like-australia-denmark-plans-to-severely-restrict-social-media-use-for-teenagers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Like Australia, Denmark Plans to Severely Restrict Social Media Use for Teenagers](https://tech.slashdot.org/story/25/12/15/0120247/like-australia-denmark-plans-to-severely-restrict-social-media-use-for-teenagers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-15, 00:17:02](https://news.ycombinator.com/item?id=46268709) - [If AI replaces workers, should it also pay taxes?](https://english.elpais.com/technology/2025-11-30/if-ai-replaces-workers-should-it-also-pay-taxes.html)
* [2025-12-15, 00:05:23](https://lobste.rs/s/v2p3id/let_s_write_toy_ui_library) - [Let&apos;s write a toy UI library](https://nakst.gitlab.io/tutorial/ui-part-1.html)
* [2025-12-14, 23:59:00](https://soylentnews.org/article.pl?sid=25/12/13/144230&amp;from=rss) - [System76 Launches First Stable Release of Rust-Based COSMIC Desktop and Pop!_OS 24.04 LTS](https://soylentnews.org/article.pl?sid=25/12/13/144230&amp;from=rss)
* [2025-12-14, 23:48:37](https://news.ycombinator.com/item?id=46268452) - [AI agents are starting to eat SaaS](https://martinalderson.com/posts/ai-agents-are-starting-to-eat-saas/)
* [2025-12-14, 22:46:31](https://lobste.rs/s/1qdc9j/my_gift_rustdoc_team) - [My gift to the rustdoc team](https://fasterthanli.me/articles/my-gift-to-the-rust-docs-team)
* [2025-12-14, 22:45:54](https://lobste.rs/s/07fdbv/advent_swift) - [Advent of Swift](https://leahneukirchen.org/blog/archive/2025/12/advent-of-swift.html)
* [2025-12-14, 22:02:53](https://lobste.rs/s/hrmr9m/time_element_should_actually_do) - [The &lt;time&gt; element should actually do something](https://nolanlawson.com/2025/12/14/the-time-element-should-actually-do-something/)
* [2025-12-14, 19:11:00](https://soylentnews.org/article.pl?sid=25/12/13/0439237&amp;from=rss) - [Big Tech Joins Forces With Linux Foundation to Standardize AI Agents](https://soylentnews.org/article.pl?sid=25/12/13/0439237&amp;from=rss)
* [2025-12-14, 17:10:08](https://news.ycombinator.com/item?id=46264657) - [Show HN: A pager](https://www.udp7777.com/)
* [2025-12-14, 16:55:25](https://news.ycombinator.com/item?id=46264491) - [Ask HN: What Are You Working On? (December 2025)](https://news.ycombinator.com/item?id=46264491)
* [2025-12-14, 16:43:57](https://lobste.rs/s/hwo6rn/how_i_wrote_justhtml_using_coding_agents) - [How I wrote JustHTML using coding agents](https://friendlybit.com/python/writing-justhtml-with-coding-agents/)
* [2025-12-14, 14:26:00](https://soylentnews.org/article.pl?sid=25/12/13/0429235&amp;from=rss) - [Calibre Now Integrated With AI](https://soylentnews.org/article.pl?sid=25/12/13/0429235&amp;from=rss)
* [2025-12-14, 09:44:13](https://news.ycombinator.com/item?id=46261942) - [Show HN: I Ching simulator with accurate Yarrow Stalk probabilities](https://castiching.com/)
* [2025-12-14, 09:36:00](https://soylentnews.org/article.pl?sid=25/12/13/0329247&amp;from=rss) - [Ultra-Thin Nanomembrane Device Forms Soft, Seamless Interface With Living Tissue](https://soylentnews.org/article.pl?sid=25/12/13/0329247&amp;from=rss)
* [2025-12-14, 04:46:00](https://soylentnews.org/article.pl?sid=25/12/13/0323237&amp;from=rss) - [When It All Comes Crashing Down: The Aftermath of the AI Boom](https://soylentnews.org/article.pl?sid=25/12/13/0323237&amp;from=rss)
* [2025-12-14, 00:04:00](https://soylentnews.org/article.pl?sid=25/12/13/0314229&amp;from=rss) - [A New Anonymous Phone Carrier Lets You Sign Up With Nothing but a Zip Code](https://soylentnews.org/article.pl?sid=25/12/13/0314229&amp;from=rss)
* [2025-12-13, 19:23:00](https://soylentnews.org/article.pl?sid=25/12/11/0919226&amp;from=rss) - [Scientists Finally Uncover Why the World’s Most Common Heart Drug Causes Muscle Pain](https://soylentnews.org/article.pl?sid=25/12/11/0919226&amp;from=rss)
* [2025-12-13, 18:19:51](https://news.ycombinator.com/item?id=46256643) - [Essential Semiconductor Physics [pdf]](https://nanohub.org/resources/43623/download/Essential_Semiconductor_Physics.pdf)
* [2025-12-13, 17:41:32](https://news.ycombinator.com/item?id=46256325) - [Building an efficient hash table in Java](https://bluuewhale.github.io/posts/building-a-fast-and-memory-efficient-hash-table-in-java-by-borrowing-the-best-ideas/)
* [2025-12-13, 14:37:00](https://soylentnews.org/article.pl?sid=25/12/11/0916209&amp;from=rss) - [Germany Might Have Just Saved Gas Engines From a European Ban](https://soylentnews.org/article.pl?sid=25/12/11/0916209&amp;from=rss)
* [2025-12-13, 09:52:00](https://soylentnews.org/article.pl?sid=25/12/11/0910257&amp;from=rss) - [Space Shuttle Lessons: Backtracks Can Create Breakthroughs](https://soylentnews.org/article.pl?sid=25/12/11/0910257&amp;from=rss)
* [2025-12-13, 05:05:00](https://soylentnews.org/article.pl?sid=25/12/11/092209&amp;from=rss) - [USA Wants Your Social Media History If You Visit](https://soylentnews.org/article.pl?sid=25/12/11/092209&amp;from=rss)
* [2025-12-13, 00:21:00](https://soylentnews.org/article.pl?sid=25/12/11/023241&amp;from=rss) - [Man Dies of Rabies After Kidney Transplant From Donor Who Saved Kitten From Skunk](https://soylentnews.org/article.pl?sid=25/12/11/023241&amp;from=rss)
* [2025-12-12, 23:21:02](https://news.ycombinator.com/item?id=46250259) - [US TikTok investors in limbo as deal set to be delayed again](https://www.bbc.com/news/articles/cp34442z25ko)
* [2025-12-12, 19:36:00](https://soylentnews.org/article.pl?sid=25/12/11/0157235&amp;from=rss) - [ICEBlock App Sues Trump Administration for Censorship and &apos;Unlawful Threats&apos;](https://soylentnews.org/article.pl?sid=25/12/11/0157235&amp;from=rss)
* [2025-12-12, 14:54:00](https://soylentnews.org/article.pl?sid=25/12/11/0150219&amp;from=rss) - [Ubuntu to Offer AMD ROCm Packages for AI Processing](https://soylentnews.org/article.pl?sid=25/12/11/0150219&amp;from=rss)
* [2025-12-12, 10:07:00](https://soylentnews.org/article.pl?sid=25/12/10/2258243&amp;from=rss) - [Porsche Panic in Russia as Pricey Status Symbols Forget How to Car](https://soylentnews.org/article.pl?sid=25/12/10/2258243&amp;from=rss)
* [2025-12-12, 06:47:45](https://news.ycombinator.com/item?id=46241500) - [“Are you the one?” is free money](https://blog.owenlacey.dev/posts/are-you-the-one-is-free-money/)
* [2025-12-12, 05:22:00](https://soylentnews.org/article.pl?sid=25/12/10/2256226&amp;from=rss) - [Pebble Index 01 Arrives as a Private Open Source Voice Capture Ring](https://soylentnews.org/article.pl?sid=25/12/10/2256226&amp;from=rss)
* [2025-12-12, 00:39:00](https://soylentnews.org/article.pl?sid=25/12/10/2252241&amp;from=rss) - [Russia Says It Might Build its Own Linux Community After Removal of Several Kernel Maintainers](https://soylentnews.org/article.pl?sid=25/12/10/2252241&amp;from=rss)
* [2025-12-11, 19:56:00](https://soylentnews.org/article.pl?sid=25/12/10/2248258&amp;from=rss) - [ER Doctors Are Sounding the Alarm on a Fast-Growing Cannabis Illness](https://soylentnews.org/article.pl?sid=25/12/10/2248258&amp;from=rss)
* [2025-12-11, 15:07:00](https://soylentnews.org/article.pl?sid=25/12/10/1242208&amp;from=rss) - [AI Favors Texts Written by Other AIs, Even When They&apos;re Worse Than Human Ones](https://soylentnews.org/article.pl?sid=25/12/10/1242208&amp;from=rss)
* [2025-12-11, 10:25:00](https://soylentnews.org/article.pl?sid=25/12/10/0213247&amp;from=rss) - [Proton Launches Encrypted Sheets as a Privacy-First Alternative to Google, Microsoft Excel](https://soylentnews.org/article.pl?sid=25/12/10/0213247&amp;from=rss)
* [2025-12-11, 05:48:00](https://soylentnews.org/article.pl?sid=25/12/10/0211215&amp;from=rss) - [This German State Decides to Save €15 Million Each Year By Kicking Out Microsoft for Open Source](https://soylentnews.org/article.pl?sid=25/12/10/0211215&amp;from=rss)
* [2025-12-11, 00:52:00](https://soylentnews.org/article.pl?sid=25/12/10/027248&amp;from=rss) - [Chattanooga&apos;s Municipal Fiber Network Has Delivered $5.3 Billion in Community Benefits](https://soylentnews.org/article.pl?sid=25/12/10/027248&amp;from=rss)
