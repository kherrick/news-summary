# [News Summary](https://kherrick.github.io/news-summary/)

## Data Privacy and Security Breaches

* [Microsoft Will Finally Kill Obsolete Cipher That Has Wrecked Decades of Havoc](https://it.slashdot.org/story/25/12/15/2244255/microsoft-will-finally-kill-obsolete-cipher-that-has-wrecked-decades-of-havoc?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - After years of security threats, Microsoft announces it will finally remove an outdated cipher to enhance user security ([comments](https://it.slashdot.org/story/25/12/15/2244255/microsoft-will-finally-kill-obsolete-cipher-that-has-wrecked-decades-of-havoc?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)).

* [8M Users' AI Conversations Sold for Profit by "Privacy" Extensions](https://www.koi.ai/blog/urban-vpn-browser-extension-ai-conversations-data-collection) - Controversy arises as popular extensions profit from selling private AI conversation data ([comments](https://news.ycombinator.com/item?id=46284266)).

* [SoundCloud confirms breach after member data stolen, VPN access disrupted](https://www.bleepingcomputer.com/news/security/soundcloud-confirms-breach-after-member-data-stolen-vpn-access-disrupted/) - SoundCloud experiences a significant security breach resulting in stolen user data and VPN service disruptions ([comments](https://news.ycombinator.com/item?id=46283699)).

## Technology and Open Source Innovations

* [Quill OS is an open-source, fully-functional standalone OS for Kobo's eReaders](https://quill-os.org/) - Introducing Quill OS, a new way to enhance Kobo's eReaders with open-source software ([comments](https://news.ycombinator.com/item?id=46283016)).

* [Radicle: peer-to-peer collaboration with Git (2024)](https://lwn.net/Articles/966869/) - A modern take on collaborative coding with a focus on peer-to-peer interaction ([comments](https://lobste.rs/s/ukmf3a/radicle_peer_peer_collaboration_with_git)).

* [Liskell - Haskell Semantics with Lisp Syntax (2007)](http://clemens.endorphin.org/ILC07-Liskell-draft.pdf) - A throwback to a creative integration of Haskell semantics into Lisp syntax ([comments](https://lobste.rs/s/dhvobg/liskell_haskell_semantics_with_lisp)).

## Corporate Developments and Industry Trends

* [Lidar-Maker Luminar Files For Bankruptcy](https://tech.slashdot.org/story/25/12/15/2238214/lidar-maker-luminar-files-for-bankruptcy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Troubles continue for the automobile tech industry as Luminar declares bankruptcy ([comments](https://tech.slashdot.org/story/25/12/15/2238214/lidar-maker-luminar-files-for-bankruptcy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)).

* [Ford Ends F-150 Lightning Production, Starts Battery Storage Business](https://hardware.slashdot.org/story/25/12/15/2127228/ford-ends-f-150-lightning-production-starts-battery-storage-business?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - In a strategic shift, Ford halts production of its electric pickup to focus on energy storage solutions ([comments](https://news.ycombinator.com/item?id=46281182)).

* [JPMorgan Steps Further Into Crypto With Tokenized Money Fund](https://news.slashdot.org/story/25/12/15/2139238/jpmorgan-steps-further-into-crypto-with-tokenized-money-fund?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Financial giant JPMorgan deepens its investment in cryptocurrency with a new tokenized money fund ([comments](https://news.slashdot.org/story/25/12/15/2139238/jpmorgan-steps-further-into-crypto-with-tokenized-money-fund?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)).

## Science and Space

* [Cosmic-ray bath in a past supernova gives birth to Earth-like planets](https://www.science.org/doi/10.1126/sciadv.adx7892) - A study explores how space phenomena might have played a vital role in planetary genesis ([comments](https://news.ycombinator.com/item?id=46277090)).

* [What Time is It on Mars? NIST Physicists Have the Answer](https://soylentnews.org/article.pl?sid=25/12/13/1616219&amp;from=rss) - Innovative time-tracking methods for Mars could redefine our understanding of day-night cycles on the Red Planet ([comments](https://lobste.rs/s/vcjisp/l5_processing_library_lua_for)).

## Societal Issues and Cultural Shifts

* [Merriam-Webster's 2025 Word of the Year Is 'Slop'](https://tech.slashdot.org/story/25/12/15/2133250/merriam-websters-2025-word-of-the-year-is-slop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Highlighting cultural and societal dialogues, 'Slop' takes the spotlight as Word of the Year ([comments](https://tech.slashdot.org/story/25/12/15/2133250/merriam-websters-2025-word-of-the-year-is-slop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)).

* [Russian Ban On Roblox Gaming Platform Sparks Rare Protest](https://yro.slashdot.org/story/25/12/15/2121240/russian-ban-on-roblox-gaming-platform-sparks-rare-protest?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - An unexpected protest emerges in Russia following the blocking of the popular Roblox gaming platform ([comments](https://yro.slashdot.org/story/25/12/15/2121240/russian-ban-on-roblox-gaming-platform-sparks-rare-protest?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)).

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

* [2025-12-16, 03:30:00](https://it.slashdot.org/story/25/12/15/2244255/microsoft-will-finally-kill-obsolete-cipher-that-has-wrecked-decades-of-havoc?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Will Finally Kill Obsolete Cipher That Has Wrecked Decades of Havoc](https://it.slashdot.org/story/25/12/15/2244255/microsoft-will-finally-kill-obsolete-cipher-that-has-wrecked-decades-of-havoc?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-16, 03:03:49](https://news.ycombinator.com/item?id=46284266) - [8M Users&apos; AI Conversations Sold for Profit by \&quot;Privacy\&quot; Extensions](https://www.koi.ai/blog/urban-vpn-browser-extension-ai-conversations-data-collection)
* [2025-12-16, 01:51:50](https://news.ycombinator.com/item?id=46283750) - [Rollstack (YC W23) is hiring multiple software engineers (TypeScript) US/Canada](https://www.ycombinator.com/companies/rollstack-2/jobs/QPqpb1n-software-engineer-typescript-us-canada)
* [2025-12-16, 01:44:47](https://news.ycombinator.com/item?id=46283699) - [SoundCloud confirms breach after member data stolen, VPN access disrupted](https://www.bleepingcomputer.com/news/security/soundcloud-confirms-breach-after-member-data-stolen-vpn-access-disrupted/)
* [2025-12-16, 01:42:06](https://lobste.rs/s/p1uk1o/are_you_one_is_free_money) - [\&quot;Are you the one?\&quot; is free money](https://blog.owenlacey.dev/posts/are-you-the-one-is-free-money/)
* [2025-12-16, 01:25:00](https://tech.slashdot.org/story/25/12/15/2238214/lidar-maker-luminar-files-for-bankruptcy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Lidar-Maker Luminar Files For Bankruptcy](https://tech.slashdot.org/story/25/12/15/2238214/lidar-maker-luminar-files-for-bankruptcy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-16, 01:16:12](https://lobste.rs/s/wilmno/i_m_just_having_fun) - [i&apos;m just having fun](https://jyn.dev/i-m-just-having-fun/)
* [2025-12-16, 00:45:00](https://search.slashdot.org/story/25/12/15/2232246/google-search-homepage-adds-a-plus-menu?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Search Homepage Adds a &apos;Plus&apos; Menu](https://search.slashdot.org/story/25/12/15/2232246/google-search-homepage-adds-a-plus-menu?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-16, 00:34:35](https://news.ycombinator.com/item?id=46283129) - [Ideas aren&apos;t getting harder to find](https://asteriskmag.com/issues/12-books/ideas-arent-getting-harder-to-find)
* [2025-12-16, 00:22:41](https://news.ycombinator.com/item?id=46283016) - [Quill OS is an open-source, fully-functional standalone OS for Kobo&apos;s eReaders](https://quill-os.org/)
* [2025-12-16, 00:18:58](https://news.ycombinator.com/item?id=46282984) - [The Bob Dylan concert for just one person](https://www.flaggingdown.com/p/the-bob-dylan-concert-for-just-one)
* [2025-12-16, 00:02:00](https://it.slashdot.org/story/25/12/15/2227217/china-iran-are-having-a-field-day-with-react2shell-google-warns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China, Iran Are Having a Field Day With React2Shell, Google Warns](https://it.slashdot.org/story/25/12/15/2227217/china-iran-are-having-a-field-day-with-react2shell-google-warns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-15, 23:47:37](https://news.ycombinator.com/item?id=46282679) - [Native vs. emulation: World of Warcraft game performance on Snapdragon X Elite](https://rkblog.dev/posts/pc-hardware/pc-on-arm/x86_versus_arm_native_game/)
* [2025-12-15, 23:39:00](https://soylentnews.org/article.pl?sid=25/12/13/1642242&amp;from=rss) - [To Bop or to Sway? the Music Will Tell You](https://soylentnews.org/article.pl?sid=25/12/13/1642242&amp;from=rss)
* [2025-12-15, 23:20:00](https://news.slashdot.org/story/25/12/15/2139238/jpmorgan-steps-further-into-crypto-with-tokenized-money-fund?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [JPMorgan Steps Further Into Crypto With Tokenized Money Fund](https://news.slashdot.org/story/25/12/15/2139238/jpmorgan-steps-further-into-crypto-with-tokenized-money-fund?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-15, 23:17:55](https://lobste.rs/s/ukmf3a/radicle_peer_peer_collaboration_with_git) - [Radicle: peer-to-peer collaboration with Git (2024)](https://lwn.net/Articles/966869/)
* [2025-12-15, 22:48:56](https://news.ycombinator.com/item?id=46281944) - [JetBlue flight averts mid-air collision with US Air Force jet](https://www.reuters.com/world/americas/jetblue-flight-averts-mid-air-collision-with-us-air-force-jet-2025-12-15/)
* [2025-12-15, 22:40:00](https://tech.slashdot.org/story/25/12/15/2133250/merriam-websters-2025-word-of-the-year-is-slop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Merriam-Webster&apos;s 2025 Word of the Year Is &apos;Slop&apos;](https://tech.slashdot.org/story/25/12/15/2133250/merriam-websters-2025-word-of-the-year-is-slop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-15, 22:00:00](https://hardware.slashdot.org/story/25/12/15/2127228/ford-ends-f-150-lightning-production-starts-battery-storage-business?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ford Ends F-150 Lightning Production, Starts Battery Storage Business](https://hardware.slashdot.org/story/25/12/15/2127228/ford-ends-f-150-lightning-production-starts-battery-storage-business?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-15, 21:56:03](https://news.ycombinator.com/item?id=46281288) - [Economics of Orbital vs. Terrestrial Data Centers](https://andrewmccalip.com/space-datacenters)
* [2025-12-15, 21:46:53](https://news.ycombinator.com/item?id=46281182) - [Ford kills the All-Electric F-150](https://www.wired.com/story/ford-kills-electric-f-150-lightning-for-hybrid/)
* [2025-12-15, 21:40:57](https://lobste.rs/s/ek7jpu/expression_language_for_vixen) - [An expression language for Vixen](https://raku-advent.blog/2025/12/15/day-15-an-expression-language-for-vixen/)
* [2025-12-15, 21:37:09](https://news.ycombinator.com/item?id=46281060) - [Fix HDMI-CEC weirdness with a Raspberry Pi and a $7 cable](https://johnlian.net/posts/hdmi-cec/)
* [2025-12-15, 21:24:06](https://news.ycombinator.com/item?id=46280887) - [Secret Documents Show Pepsi and Walmart Colluded to Raise Food Prices](https://www.thebignewsletter.com/p/secret-documents-show-pepsi-and-walmart)
* [2025-12-15, 21:23:00](https://yro.slashdot.org/story/25/12/15/2121240/russian-ban-on-roblox-gaming-platform-sparks-rare-protest?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Russian Ban On Roblox Gaming Platform Sparks Rare Protest](https://yro.slashdot.org/story/25/12/15/2121240/russian-ban-on-roblox-gaming-platform-sparks-rare-protest?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-15, 20:52:35](https://news.ycombinator.com/item?id=46280465) - [A kernel bug froze my machine: Debugging an async-profiler deadlock](https://questdb.com/blog/async-profiler-kernel-bug/)
* [2025-12-15, 20:26:38](https://lobste.rs/s/dhvobg/liskell_haskell_semantics_with_lisp) - [Liskell - Haskell Semantics with Lisp Syntax (2007)](http://clemens.endorphin.org/ILC07-Liskell-draft.pdf)
* [2025-12-15, 20:20:58](https://lobste.rs/s/2q5g02/tla_modeling_tips) - [TLA+ modeling tips](http://muratbuffalo.blogspot.com/2025/12/tla-modeling-tips.html)
* [2025-12-15, 20:17:50](https://lobste.rs/s/gtpvpi/super_secure_maga_themed_messaging_app) - [\&quot;Super secure\&quot; MAGA-themed messaging app leaks everyone&apos;s phone number](https://ericdaigle.ca/posts/super-secure-maga-messaging-app-leaks-everyones-phone-number/)
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
* [2025-12-15, 17:21:00](https://news.slashdot.org/story/25/12/15/1648225/us-tech-force-aims-to-recruit-1000-technologists?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Tech Force Aims To Recruit 1,000 Technologists ](https://news.slashdot.org/story/25/12/15/1648225/us-tech-force-aims-to-recruit-1000-technologists?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-15, 17:01:42](https://news.ycombinator.com/item?id=46277090) - [Cosmic-ray bath in a past supernova gives birth to Earth-like planets](https://www.science.org/doi/10.1126/sciadv.adx7892)
* [2025-12-15, 16:40:00](https://science.slashdot.org/story/25/12/15/1550214/scientists-thought-parkinsons-was-in-our-genes-it-might-be-in-the-water?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Thought Parkinson&apos;s Was in Our Genes. It Might Be in the Water](https://science.slashdot.org/story/25/12/15/1550214/scientists-thought-parkinsons-was-in-our-genes-it-might-be-in-the-water?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-15, 16:00:00](https://news.slashdot.org/story/25/12/15/1541213/how-did-the-cia-lose-a-nuclear-device?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Did the CIA Lose a Nuclear Device?](https://news.slashdot.org/story/25/12/15/1541213/how-did-the-cia-lose-a-nuclear-device?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-15, 15:56:38](https://lobste.rs/s/l2icfd/will_turso_be_better_sqlite) - [Will Turso Be The Better SQLite?](https://www.youtube.com/watch?v=1JHOY0zqNBY)
* [2025-12-15, 15:13:40](https://lobste.rs/s/z9h9iq/careless_whisper_side_channel_attack) - [\&quot;Careless Whisper\&quot; side-channel attack affects WhatsApp and Signal](https://cybernews.com/security/whatsapp-signal-real-time-tracking-battery-drain-flaw/)
* [2025-12-15, 15:07:13](https://lobste.rs/s/z0j9gr/announcing_key_transparency_for) - [Announcing Key Transparency for the Fediverse](https://soatok.blog/2025/12/15/announcing-key-transparency-fediverse/)
* [2025-12-15, 14:56:02](https://news.ycombinator.com/item?id=46275316) - [We are discontinuing the dark web report](https://support.google.com/websearch/answer/16767242?hl=en)
* [2025-12-15, 14:18:30](https://lobste.rs/s/mldhwy/stopping_systemd_services_under_memory) - [Stopping systemd services under memory pressure](https://blog.cyplo.dev/stopping-systemd-services-under-memory-pressure.html)
* [2025-12-15, 14:16:32](https://news.ycombinator.com/item?id=46274822) - [Carrier Landing in Top Gun for the NES](https://relaxing.run/blag/posts/top-gun-landing/)
* [2025-12-15, 14:13:46](https://lobste.rs/s/qbonja/top_gun_s_carrier_landing_exposed) - [Top Gun&apos;s Carrier Landing: Exposed](https://relaxing.run/blag/posts/top-gun-landing)
* [2025-12-15, 14:11:00](https://soylentnews.org/article.pl?sid=25/12/13/1625224&amp;from=rss) - [Scientists Thought Parkinson’s Was in Our Genes. It Might Be in the Water](https://soylentnews.org/article.pl?sid=25/12/13/1625224&amp;from=rss)
* [2025-12-15, 12:26:01](https://lobste.rs/s/gdtrgm/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/gdtrgm/what_are_you_doing_this_week)
* [2025-12-15, 12:12:24](https://news.ycombinator.com/item?id=46273466) - [I&apos;m Kenyan. I don&apos;t write like ChatGPT, ChatGPT writes like me](https://marcusolang.substack.com/p/im-kenyan-i-dont-write-like-chatgpt)
* [2025-12-15, 10:05:21](https://lobste.rs/s/qh6lil/chafa_terminal_graphics_for_21st_century) - [Chafa: Terminal Graphics for the 21st Century](https://hpjansson.org/chafa/)
* [2025-12-15, 09:44:32](https://lobste.rs/s/qawuhq/30_years_br_tags) - [30 Years of &lt;br&gt; Tags](https://www.artmann.co/articles/30-years-of-br-tags)
* [2025-12-15, 09:22:00](https://soylentnews.org/article.pl?sid=25/12/13/1619207&amp;from=rss) - [The State of Open Source Software in 2025](https://soylentnews.org/article.pl?sid=25/12/13/1619207&amp;from=rss)
* [2025-12-15, 08:37:14](https://lobste.rs/s/khozwx/rust_s_v0_mangling_scheme_nutshell) - [Rust&apos;s v0 mangling scheme in a nutshell](https://purplesyringa.moe/blog/rusts-v0-mangling-scheme-in-a-nutshell/)
* [2025-12-15, 08:21:58](https://lobste.rs/s/sxbxfe/experimental_sokol_vulkan_backend) - [The experimental Sokol Vulkan backend](https://floooh.github.io/2025/12/01/sokol-vulkan-backend-1.html)
* [2025-12-15, 07:10:01](https://lobste.rs/s/2nbzsq/jubilant_python_subprocess_go_codegen) - [Jubilant: Python subprocess and Go codegen](https://benhoyt.com/writings/jubilant/)
* [2025-12-15, 04:45:00](https://soylentnews.org/article.pl?sid=25/12/13/1616219&amp;from=rss) - [What Time is It on Mars? NIST Physicists Have the Answer](https://soylentnews.org/article.pl?sid=25/12/13/1616219&amp;from=rss)
* [2025-12-15, 03:38:11](https://lobste.rs/s/vcjisp/l5_processing_library_lua_for) - [L5: A Processing Library in Lua for Interactive Artwork](https://l5lua.org/)
* [2025-12-15, 00:05:23](https://lobste.rs/s/v2p3id/let_s_write_toy_ui_library) - [Let&apos;s write a toy UI library](https://nakst.gitlab.io/tutorial/ui-part-1.html)
* [2025-12-14, 23:59:00](https://soylentnews.org/article.pl?sid=25/12/13/144230&amp;from=rss) - [System76 Launches First Stable Release of Rust-Based COSMIC Desktop and Pop!_OS 24.04 LTS](https://soylentnews.org/article.pl?sid=25/12/13/144230&amp;from=rss)
* [2025-12-14, 22:46:31](https://lobste.rs/s/1qdc9j/my_gift_rustdoc_team) - [My gift to the rustdoc team](https://fasterthanli.me/articles/my-gift-to-the-rust-docs-team)
* [2025-12-14, 22:02:53](https://lobste.rs/s/hrmr9m/time_element_should_actually_do) - [The &lt;time&gt; element should actually do something](https://nolanlawson.com/2025/12/14/the-time-element-should-actually-do-something/)
* [2025-12-14, 19:11:00](https://soylentnews.org/article.pl?sid=25/12/13/0439237&amp;from=rss) - [Big Tech Joins Forces With Linux Foundation to Standardize AI Agents](https://soylentnews.org/article.pl?sid=25/12/13/0439237&amp;from=rss)
* [2025-12-14, 14:26:00](https://soylentnews.org/article.pl?sid=25/12/13/0429235&amp;from=rss) - [Calibre Now Integrated With AI](https://soylentnews.org/article.pl?sid=25/12/13/0429235&amp;from=rss)
* [2025-12-14, 09:36:00](https://soylentnews.org/article.pl?sid=25/12/13/0329247&amp;from=rss) - [Ultra-Thin Nanomembrane Device Forms Soft, Seamless Interface With Living Tissue](https://soylentnews.org/article.pl?sid=25/12/13/0329247&amp;from=rss)
* [2025-12-14, 04:46:00](https://soylentnews.org/article.pl?sid=25/12/13/0323237&amp;from=rss) - [When It All Comes Crashing Down: The Aftermath of the AI Boom](https://soylentnews.org/article.pl?sid=25/12/13/0323237&amp;from=rss)
* [2025-12-14, 00:04:00](https://soylentnews.org/article.pl?sid=25/12/13/0314229&amp;from=rss) - [A New Anonymous Phone Carrier Lets You Sign Up With Nothing but a Zip Code](https://soylentnews.org/article.pl?sid=25/12/13/0314229&amp;from=rss)
* [2025-12-13, 19:23:00](https://soylentnews.org/article.pl?sid=25/12/11/0919226&amp;from=rss) - [Scientists Finally Uncover Why the World’s Most Common Heart Drug Causes Muscle Pain](https://soylentnews.org/article.pl?sid=25/12/11/0919226&amp;from=rss)
* [2025-12-13, 18:19:51](https://news.ycombinator.com/item?id=46256643) - [Essential Semiconductor Physics [pdf]](https://nanohub.org/resources/43623/download/Essential_Semiconductor_Physics.pdf)
* [2025-12-13, 14:37:00](https://soylentnews.org/article.pl?sid=25/12/11/0916209&amp;from=rss) - [Germany Might Have Just Saved Gas Engines From a European Ban](https://soylentnews.org/article.pl?sid=25/12/11/0916209&amp;from=rss)
* [2025-12-13, 09:52:00](https://soylentnews.org/article.pl?sid=25/12/11/0910257&amp;from=rss) - [Space Shuttle Lessons: Backtracks Can Create Breakthroughs](https://soylentnews.org/article.pl?sid=25/12/11/0910257&amp;from=rss)
* [2025-12-13, 05:05:00](https://soylentnews.org/article.pl?sid=25/12/11/092209&amp;from=rss) - [USA Wants Your Social Media History If You Visit](https://soylentnews.org/article.pl?sid=25/12/11/092209&amp;from=rss)
* [2025-12-13, 00:21:00](https://soylentnews.org/article.pl?sid=25/12/11/023241&amp;from=rss) - [Man Dies of Rabies After Kidney Transplant From Donor Who Saved Kitten From Skunk](https://soylentnews.org/article.pl?sid=25/12/11/023241&amp;from=rss)
* [2025-12-12, 20:13:26](https://news.ycombinator.com/item?id=46248294) - [In Defense of Matlab Code](https://runmat.org/blog/in-defense-of-matlab-whiteboard-style-code)
* [2025-12-12, 19:36:00](https://soylentnews.org/article.pl?sid=25/12/11/0157235&amp;from=rss) - [ICEBlock App Sues Trump Administration for Censorship and &apos;Unlawful Threats&apos;](https://soylentnews.org/article.pl?sid=25/12/11/0157235&amp;from=rss)
* [2025-12-12, 14:54:00](https://soylentnews.org/article.pl?sid=25/12/11/0150219&amp;from=rss) - [Ubuntu to Offer AMD ROCm Packages for AI Processing](https://soylentnews.org/article.pl?sid=25/12/11/0150219&amp;from=rss)
* [2025-12-12, 10:07:00](https://soylentnews.org/article.pl?sid=25/12/10/2258243&amp;from=rss) - [Porsche Panic in Russia as Pricey Status Symbols Forget How to Car](https://soylentnews.org/article.pl?sid=25/12/10/2258243&amp;from=rss)
* [2025-12-12, 06:47:45](https://news.ycombinator.com/item?id=46241500) - [“Are you the one?” is free money](https://blog.owenlacey.dev/posts/are-you-the-one-is-free-money/)
* [2025-12-12, 05:22:00](https://soylentnews.org/article.pl?sid=25/12/10/2256226&amp;from=rss) - [Pebble Index 01 Arrives as a Private Open Source Voice Capture Ring](https://soylentnews.org/article.pl?sid=25/12/10/2256226&amp;from=rss)
* [2025-12-12, 00:39:00](https://soylentnews.org/article.pl?sid=25/12/10/2252241&amp;from=rss) - [Russia Says It Might Build its Own Linux Community After Removal of Several Kernel Maintainers](https://soylentnews.org/article.pl?sid=25/12/10/2252241&amp;from=rss)
