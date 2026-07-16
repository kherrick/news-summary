# [News Summary](https://kherrick.github.io/news-summary/)

## AI Innovations

* [South Korea To Launch Universal Basic AI Chatbot](https://slashdot.org/story/26/07/16/0431223/south-korea-to-launch-universal-basic-ai-chatbot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - South Korea is embarking on a groundbreaking project to launch a universal basic AI chatbot for public use. [Comments](https://news.ycombinator.com/item?id=48935687).

* [Where are YC founders now? OpenAI and Anthropic, mostly](https://joinedanthropic.com) - A look into the current ventures of Y Combinator founders and their predominant focus on OpenAI and Anthropic. [Comments](https://news.ycombinator.com/item?id=48931588).

* [Linus Torvalds on LLM usage in kernel development](https://lore.kernel.org/linux-media/CAHk-=wi4zC+Ze8e+p3tMv8TtG_80KzsZ1syL9anBtmEh5Z40vg@mail.gmail.com/) - Linus Torvalds shares his insights on using large language models in Linux kernel development. [Comments](https://lobste.rs/s/pb6d8m/linus_torvalds_on_llm_usage_kernel).

## Science and Technology Breakthroughs

* [Physicists Create First Room-Temperature Quantum Material](https://science.slashdot.org/story/26/07/16/0421206/physicists-create-first-room-temperature-quantum-material?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Scientists develop the first quantum material capable of functioning at room temperature, allowing for potential revolutionary applications in technology. [Comments](https://science.slashdot.org/comments.pl?sid=26/07/16/0421206).

* [Astronauts Take First X-Rays In Space](https://science.slashdot.org/story/26/07/15/0354223/astronauts-take-first-x-rays-in-space?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A historic milestone as astronauts capture the first X-ray images directly in space. [Comments](https://science.slashdot.org/comments.pl?sid=26/07/15/0354223).

* [Higher Blood Glucose Levels Linked to Faster Brain Aging](https://soylentnews.org/article.pl?sid=26/07/11/1848242&amp;from=rss) - Researchers have found a significant correlation between elevated blood glucose levels and accelerated brain aging. [Comments](https://soylentnews.org/comments.pl?sid=26/07/11/1848242&amp;cid=117968).

## Digital Privacy and Ownership

* [Sony Deletes a Bunch More Movies from the Accounts of People Who &apos;Bought&apos; Them](https://www.techdirt.com/2026/07/15/sony-deletes-a-bunch-more-movies-from-the-accounts-of-people-who-bought-them/) - A report on Sony's controversial removal of purchased movies from customers' accounts. [Comments](https://news.ycombinator.com/item?id=48933419).

* [Microsoft Admits Windows 11 Has a GDID Tracker With No Off Switch](https://soylentnews.org/article.pl?sid=26/07/14/0538220&amp;from=rss) - Microsoft confirms that Windows 11 includes a unique device identifier (GDID) that cannot be disabled. [Comments](https://soylentnews.org/comments.pl?sid=26/07/14/0538220).

* [This UK Satellite&apos;s Thermal Camera Raises Major Privacy Concerns](https://soylentnews.org/article.pl?sid=26/07/12/2153233&amp;from=rss) - A new U.K. satellite equipped with a thermal camera stirs debates over privacy implications. [Comments](https://soylentnews.org/comments.pl?sid=26/07/12/2153233).

## Open Source and Tech Innovation

* [Forgejo v16.0 is available](https://forgejo.org/2026-07-release-v16-0/) - The open-source code hosting platform, Forgejo, releases its 16.0 version, presenting new features and updates. [Comments](https://lobste.rs/s/giyb8x/forgejo_v16_0_is_available).

* [Introduction to KizunaShelf: A shelf for everything you love](https://mudkip.me/2026/07/16/Introduction-to-KizunaShelf/) - Dive into KizunaShelf, a new tool designed to organize and manage everything you care about in one place. [Comments](https://news.ycombinator.com/item?id=48933581).

* [Your AI Is Not a Tool](https://theconvivialsociety.substack.com/p/your-ai-is-not-a-tool) - An exploration of why considering AI as mere tools may oversimplify their potential. [Comments](https://lobste.rs/s/6vsam1/your_ai_is_not_tool).

## Global Trends and Issues

* [OnePlus halts operations in USA and Europe](https://community.oneplus.com/thread/2170715118587871237) - Smartphone giant OnePlus announces cessation of operations in the U.S. and Europe. [Comments](https://news.ycombinator.com/item?id=48932539).

* [AI Servers Will Consume More Power Than All Conventional Data Centers Combined By 2027](https://soylentnews.org/article.pl?sid=26/07/14/0547216&amp;from=rss) - A prediction shows AI servers may soon outpace the energy consumption of all traditional data centers. [Comments](https://soylentnews.org/comments.pl?sid=26/07/14/0547216).

* [Volkswagen Sales Plunge as German Automaker Lays Out Plan to Slash Number of Brands ](https://soylentnews.org/article.pl?sid=26/07/11/1846204&amp;from=rss) - The iconic automaker restructures to combat declining sales. [Comments](https://soylentnews.org/comments.pl?sid=26/07/11/1846204).

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

* [2026-07-16, 16:00:00](https://tech.slashdot.org/story/26/07/16/0436218/eu-wont-require-user-replaceable-batteries-for-wearables?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EU Won&apos;t Require User-Replaceable Batteries for Wearables](https://tech.slashdot.org/story/26/07/16/0436218/eu-wont-require-user-replaceable-batteries-for-wearables?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-16, 15:13:00](https://news.ycombinator.com/item?id=48935687) - [How to Train a Gen AI Kick Drum Model on Your Old Linux Desktop with 6GB VRAM](https://www.zhinit.dev/blog/training-a-kick-drum-diffusion-model)
* [2026-07-16, 15:00:00](https://slashdot.org/story/26/07/16/0431223/south-korea-to-launch-universal-basic-ai-chatbot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [South Korea To Launch Universal Basic AI Chatbot](https://slashdot.org/story/26/07/16/0431223/south-korea-to-launch-universal-basic-ai-chatbot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-16, 14:59:14](https://news.ycombinator.com/item?id=48935510) - [Guide to data tools landscape for developers](https://sinja.io/blog/data-landscape-guide-for-developers)
* [2026-07-16, 14:46:05](https://news.ycombinator.com/item?id=48935342) - [Kimi K3 is now live](https://www.kimi.com/en)
* [2026-07-16, 13:51:27](https://lobste.rs/s/wveduf/readme_not) - [README, not](https://blog.yossarian.net/2026/07/16/README-not)
* [2026-07-16, 13:30:18](https://news.ycombinator.com/item?id=48934290) - [My Homepage Has a Pulse](https://snehankekre.com/posts/hr/)
* [2026-07-16, 13:30:00](https://news.ycombinator.com/item?id=48934286) - [Goes-19 weather satellite enters Safe Hold mode](https://www.spaceweather.gov/news/goes-19-safe-hold)
* [2026-07-16, 13:15:49](https://news.ycombinator.com/item?id=48934092) - [Show HN: I&apos;ve built a words game based on binary search](https://hilogame.cc/)
* [2026-07-16, 13:12:52](https://lobste.rs/s/76tcpe/what_gdb_frontend_do_you_prefer_linux) - [What gdb frontend do you prefer (linux)](https://lobste.rs/s/76tcpe/what_gdb_frontend_do_you_prefer_linux)
* [2026-07-16, 13:01:06](https://lobste.rs/s/xdoavp/what_memory_compiler_actually_means_from) - [What \&quot;Memory Compiler\&quot; Actually Means: From Bitcells to GDS Tiling](https://thecloudlet.github.io/technical/compiler/memory-compiler/)
* [2026-07-16, 12:48:52](https://lobste.rs/s/kzo2fe/why_ml_ocaml_are_good_for_writing) - [Why ML/OCaml are good for writing compilers (1998)](https://flint.cs.yale.edu/cs421/case-for-ml.html)
* [2026-07-16, 12:38:10](https://lobste.rs/s/55rpwn/whoop_4_0_without_subscription) - [WHOOP 4.0 without a subscription](https://github.com/OpenStrap/edge)
* [2026-07-16, 12:33:06](https://news.ycombinator.com/item?id=48933581) - [Introduction to KizunaShelf: A shelf for everything you love](https://mudkip.me/2026/07/16/Introduction-to-KizunaShelf/)
* [2026-07-16, 12:13:43](https://news.ycombinator.com/item?id=48933419) - [Sony Deletes a Bunch More Movies from the Accounts of People Who &apos;Bought&apos; Them](https://www.techdirt.com/2026/07/15/sony-deletes-a-bunch-more-movies-from-the-accounts-of-people-who-bought-them/)
* [2026-07-16, 12:05:42](https://news.ycombinator.com/item?id=48933370) - [The Act and the Outcome of Creation](https://www.ssp.sh/blog/on-creation/)
* [2026-07-16, 11:58:09](https://news.ycombinator.com/item?id=48933303) - [Let&apos;s Build PlanetScale from Scratch: Infrastructure](https://onatm.dev/2026/07/16/homescale-part-1/)
* [2026-07-16, 11:39:27](https://news.ycombinator.com/item?id=48933149) - [How Our Rust-to-Zig Rewrite Is Going](https://rtfeldman.com/rust-to-zig)
* [2026-07-16, 11:31:41](https://lobste.rs/s/axdfjx/how_our_rust_zig_rewrite_is_going) - [How Our Rust-to-Zig Rewrite is Going](https://rtfeldman.com/rust-to-zig)
* [2026-07-16, 11:27:04](https://lobste.rs/s/6wdufu/perldelta_what_is_new_for_perl_v5_44_0) - [perldelta - what is new for perl v5.44.0](https://metacpan.org/dist/perl/view/pod/perldelta.pod)
* [2026-07-16, 11:07:00](https://soylentnews.org/article.pl?sid=26/07/15/0038203&amp;from=rss) - [Meta Data Center Water Discharges Suspended After Contaminating The City&apos;s Reclamation Water Supply ](https://soylentnews.org/article.pl?sid=26/07/15/0038203&amp;from=rss)
* [2026-07-16, 11:00:00](https://slashdot.org/story/26/07/16/0425232/chinese-users-bid-farewell-to-ai-companions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chinese Users Bid Farewell To AI Companions](https://slashdot.org/story/26/07/16/0425232/chinese-users-bid-farewell-to-ai-companions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-16, 10:49:50](https://news.ycombinator.com/item?id=48932784) - [Track your workout from the iPhone Lock Screen](https://musklr.com/blog/2026/iphone-lock-screen-workout-tracking-live-activity/)
* [2026-07-16, 10:37:17](https://news.ycombinator.com/item?id=48932697) - [Ente – Opening Our Books](https://ente.com/open/)
* [2026-07-16, 10:14:04](https://news.ycombinator.com/item?id=48932539) - [OnePlus halts operations in USA and Europe](https://community.oneplus.com/thread/2170715118587871237)
* [2026-07-16, 10:01:50](https://lobste.rs/s/giyb8x/forgejo_v16_0_is_available) - [Forgejo v16.0 is available](https://forgejo.org/2026-07-release-v16-0/)
* [2026-07-16, 09:29:06](https://lobste.rs/s/rvtn4v/guix_creating_package_from_binary) - [Guix: creating a package from a binary](https://aloysberger.com/posts/guix-packaging-a-binary-as-a-guix-beginner.html)
* [2026-07-16, 08:29:26](https://lobste.rs/s/9b49zd/bring_modern_package_management_meson_s) - [Bring modern package management to Meson&apos;s native wrap ecosystem](https://collider.ee/1.5.1/)
* [2026-07-16, 08:03:35](https://news.ycombinator.com/item?id=48931588) - [Where are YC founders now? OpenAI and Anthropic, mostly](https://joinedanthropic.com)
* [2026-07-16, 07:00:00](https://science.slashdot.org/story/26/07/16/0421206/physicists-create-first-room-temperature-quantum-material?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Physicists Create First Room-Temperature Quantum Material](https://science.slashdot.org/story/26/07/16/0421206/physicists-create-first-room-temperature-quantum-material?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-16, 06:15:00](https://soylentnews.org/article.pl?sid=26/07/15/0036236&amp;from=rss) - [RAMpocalyse Pricing Prompts Maker To Construct His Own Memory Using Ancient Apollo-Era Tech](https://soylentnews.org/article.pl?sid=26/07/15/0036236&amp;from=rss)
* [2026-07-16, 04:46:21](https://news.ycombinator.com/item?id=48930454) - [The lost joy of music piracy](https://www.pigeonsandplanes.com/read/music-piracy-what-cd-oink-nine-inch-nails-streaming)
* [2026-07-16, 04:36:07](https://news.ycombinator.com/item?id=48930397) - [Reynard: A real Firefox web browser for iOS 13 or later](https://github.com/minh-ton/reynard-browser)
* [2026-07-16, 03:48:43](https://news.ycombinator.com/item?id=48930136) - [If you want to create a button from scratch, you must first create the universe](https://madcampos.dev/blog/2026/07/accessibility-from-scratch/)
* [2026-07-16, 03:36:42](https://news.ycombinator.com/item?id=48930075) - [Making 768 servers look like 1](https://planetscale.com/blog/making-768-servers-look-like-1)
* [2026-07-16, 03:30:00](https://hardware.slashdot.org/story/26/07/15/2123238/us-suffered-a-major-power-outage-every-month-of-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Suffered a Major Power Outage Every Month of 2026](https://hardware.slashdot.org/story/26/07/15/2123238/us-suffered-a-major-power-outage-every-month-of-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-16, 03:19:34](https://lobste.rs/s/pb6d8m/linus_torvalds_on_llm_usage_kernel) - [Linus Torvalds on LLM usage in kernel development](https://lore.kernel.org/linux-media/CAHk-=wi4zC+Ze8e+p3tMv8TtG_80KzsZ1syL9anBtmEh5Z40vg@mail.gmail.com/)
* [2026-07-16, 03:12:47](https://news.ycombinator.com/item?id=48929945) - [1,300 Beautiful Wildlife Illustrations from the 19th Century Now Restored](https://www.openculture.com/2026/07/explore-1300-beautiful-wildlife-illustrations-from-the-19th-century.html)
* [2026-07-16, 02:55:49](https://lobste.rs/s/47h4yu/shape_apps) - [The Shape of Apps](https://parakeet.co/blog/the-shape-of-apps/)
* [2026-07-16, 02:21:03](https://lobste.rs/s/etvwzv/dailyprog_puzzle_safety_net) - [The dailyprog puzzle safety net](https://blog.lvmbdv.dev/posts/the-puzzle-safety-net/)
* [2026-07-16, 01:32:00](https://soylentnews.org/article.pl?sid=26/07/15/0034229&amp;from=rss) - [Mapped: Where It Costs the Most to Own a Car in America](https://soylentnews.org/article.pl?sid=26/07/15/0034229&amp;from=rss)
* [2026-07-16, 01:13:20](https://lobste.rs/s/0ae9j5/long_tail_work_left_until_activitypub_has) - [The Long Tail of Work Left Until ActivityPub Has E2EE](https://soatok.blog/2026/07/15/the-long-tail-of-work-left-until-activitypub-has-e2ee/)
* [2026-07-15, 23:57:58](https://lobste.rs/s/eilycs/detecting_full_table_scans_with_sqlite) - [Detecting Full Table Scans With SQLite](https://tenderlovemaking.com/2026/07/15/detecting-full-table-scans-with-sqlite/)
* [2026-07-15, 23:00:00](https://yro.slashdot.org/story/26/07/15/2113245/book-publishers-sue-google-for-copyright-infringement-over-gemini-ai-training?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Book Publishers Sue Google For Copyright Infringement Over Gemini AI Training](https://yro.slashdot.org/story/26/07/15/2113245/book-publishers-sue-google-for-copyright-infringement-over-gemini-ai-training?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-15, 22:57:15](https://lobste.rs/s/rnc3h4/abstracting_effects_with_continuations) - [Abstracting effects with continuations](https://crowdhailer.me/2026-07-15/abstracting-effects-with-continuations/)
* [2026-07-15, 22:42:58](https://news.ycombinator.com/item?id=48928135) - [SQLite should have (Rust-style) editions](https://mort.coffee/home/sqlite-editions/)
* [2026-07-15, 22:00:00](https://entertainment.slashdot.org/story/26/07/15/2026236/spotify-is-now-an-ai-chatbot-too?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Spotify Is Now an AI Chatbot, Too](https://entertainment.slashdot.org/story/26/07/15/2026236/spotify-is-now-an-ai-chatbot-too?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-15, 21:16:36](https://news.ycombinator.com/item?id=48927095) - [Governments, companies, nonprofits should invest in free, open source AI [pdf]](https://www.siegelendowment.org/wp-content/uploads/2026/07/fortune-david-siegel-open-source-ai.pdf)
* [2026-07-15, 21:06:48](https://lobste.rs/s/iow7ts/ai_data_centers_concentration_wealth) - [AI Data Centers and the Concentration of Wealth](https://www.schneier.com/blog/archives/2026/07/ai-data-centers-and-the-concentration-of-wealth.html)
* [2026-07-15, 21:00:00](https://news.slashdot.org/story/26/07/15/2010250/hack-reveals-suno-ai-music-generator-scraped-youtube-deezer-and-genius?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hack Reveals Suno AI Music Generator Scraped YouTube, Deezer, and Genius](https://news.slashdot.org/story/26/07/15/2010250/hack-reveals-suno-ai-music-generator-scraped-youtube-deezer-and-genius?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-15, 20:50:00](https://soylentnews.org/article.pl?sid=26/07/15/0032228&amp;from=rss) - [‘STEM Is Not Just About Formulas And Calculations, It Is Also About Creativity’](https://soylentnews.org/article.pl?sid=26/07/15/0032228&amp;from=rss)
* [2026-07-15, 20:24:58](https://news.ycombinator.com/item?id=48926590) - [Grok Build is open source](https://github.com/xai-org/grok-build)
* [2026-07-15, 20:00:00](https://entertainment.slashdot.org/story/26/07/15/1953229/fcc-plans-to-repeal-39-tv-ownership-cap?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FCC Plans To Repeal 39% TV Ownership Cap](https://entertainment.slashdot.org/story/26/07/15/1953229/fcc-plans-to-repeal-39-tv-ownership-cap?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-15, 19:34:54](https://lobste.rs/s/2nry82/sqlite_should_have_rust_style_editions) - [SQLite should have (Rust-style) editions](https://mort.coffee/home/sqlite-editions/)
* [2026-07-15, 19:00:00](https://yro.slashdot.org/story/26/07/15/1738217/google-and-epic-cancel-settlement-third-party-app-stores-coming-to-google-play?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google and Epic Cancel Settlement; Third-Party App Stores Coming To Google Play](https://yro.slashdot.org/story/26/07/15/1738217/google-and-epic-cancel-settlement-third-party-app-stores-coming-to-google-play?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-15, 18:12:45](https://news.ycombinator.com/item?id=48924912) - [Inkling: Our Open-Weights Model](https://thinkingmachines.ai/news/introducing-inkling/)
* [2026-07-15, 18:00:00](https://bsd.slashdot.org/story/26/07/15/1727252/freebsd-16-retires-the-last-of-its-gpl-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FreeBSD 16 Retires the Last of Its GPL Code](https://bsd.slashdot.org/story/26/07/15/1727252/freebsd-16-retires-the-last-of-its-gpl-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-15, 17:00:00](https://hardware.slashdot.org/story/26/07/15/1659217/openai-launches-a-keypad-for-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Launches a Keypad for AI Agents](https://hardware.slashdot.org/story/26/07/15/1659217/openai-launches-a-keypad-for-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-15, 16:49:43](https://lobste.rs/s/6vsam1/your_ai_is_not_tool) - [Your AI Is Not a Tool](https://theconvivialsociety.substack.com/p/your-ai-is-not-a-tool)
* [2026-07-15, 16:04:00](https://soylentnews.org/article.pl?sid=26/07/14/0547216&amp;from=rss) - [AI Servers Will Consume More Power Than All Conventional Data Centers Combined By 2027](https://soylentnews.org/article.pl?sid=26/07/14/0547216&amp;from=rss)
* [2026-07-15, 16:00:00](https://news.slashdot.org/story/26/07/15/047200/stripe-advent-offer-to-buy-paypal-for-more-than-53-billion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Stripe, Advent Offer to Buy PayPal For More Than $53 Billion](https://news.slashdot.org/story/26/07/15/047200/stripe-advent-offer-to-buy-paypal-for-more-than-53-billion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-15, 15:36:16](https://lobste.rs/s/agkcmz/microsoft_confirms_windows_gdid_device) - [Microsoft Confirms Windows GDID Device Identifier That Cannot Be Disabled, Documented in FBI Case Filing](https://www.ghacks.net/2026/07/12/microsoft-confirms-windows-gdid-device-identifier-that-cannot-be-disabled-documented-in-fbi-case-filing/)
* [2026-07-15, 15:00:00](https://tech.slashdot.org/story/26/07/15/042220/microsoft-patches-a-record-570-security-flaws?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Patches a Record 570 Security Flaws](https://tech.slashdot.org/story/26/07/15/042220/microsoft-patches-a-record-570-security-flaws?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-15, 12:33:58](https://lobste.rs/s/n1cwdh/freebsd_16_retires_last_its_gpl_code_from) - [FreeBSD 16 Retires The Last Of Its GPL Code From Its Base System](https://www.phoronix.com/news/FreeBSD-16-Goes-GPL-Free)
* [2026-07-15, 12:28:27](https://lobste.rs/s/qrtxzl/bunch_stuff_i_used_not_know_about_k_r_c) - [a bunch of stuff i used to not know about K&amp;R C](https://sebsite.pw/w/20260712-kandr.html)
* [2026-07-15, 12:23:36](https://lobste.rs/s/tnlxmc/i_ve_been_thinking_about_null_pointers) - [i&apos;ve been thinking about null pointers](https://sebsite.pw/w/20260715-null.html)
* [2026-07-15, 12:21:33](https://lobste.rs/s/latr8d/tower_keeps_rising) - [The Tower Keeps Rising](https://lucumr.pocoo.org/2026/7/13/the-tower-keeps-rising/)
* [2026-07-15, 11:19:00](https://soylentnews.org/article.pl?sid=26/07/14/0543205&amp;from=rss) - [AI Coding Agents Can be Tricked Into Installing Malware Via &apos;Clean&apos; GitHub Repositories](https://soylentnews.org/article.pl?sid=26/07/14/0543205&amp;from=rss)
* [2026-07-15, 11:00:00](https://science.slashdot.org/story/26/07/15/0354223/astronauts-take-first-x-rays-in-space?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Astronauts Take First X-Rays In Space](https://science.slashdot.org/story/26/07/15/0354223/astronauts-take-first-x-rays-in-space?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-15, 06:29:00](https://soylentnews.org/article.pl?sid=26/07/14/0540206&amp;from=rss) - [MPs Tell NHS to Start Packing Palantir&apos;s Bags Ahead of 2027 Contract Break](https://soylentnews.org/article.pl?sid=26/07/14/0540206&amp;from=rss)
* [2026-07-15, 01:42:00](https://soylentnews.org/article.pl?sid=26/07/14/0538220&amp;from=rss) - [Microsoft Admits Windows 11 Has a GDID Tracker With No Off Switch](https://soylentnews.org/article.pl?sid=26/07/14/0538220&amp;from=rss)
* [2026-07-14, 22:02:25](https://lobste.rs/s/slrak5/you_should_probably_check_on_your_smart) - [You should probably check on your smart appliances](https://xeiaso.net/notes/2026/check-your-smart-tv/)
* [2026-07-14, 21:02:00](https://soylentnews.org/article.pl?sid=26/07/12/2153233&amp;from=rss) - [This UK Satellite&apos;s Thermal Camera Raises Major Privacy Concerns](https://soylentnews.org/article.pl?sid=26/07/12/2153233&amp;from=rss)
* [2026-07-14, 16:06:00](https://soylentnews.org/article.pl?sid=26/07/12/2149242&amp;from=rss) - [US Weighs Removing Steering Wheel Requirement For Driverless Cars](https://soylentnews.org/article.pl?sid=26/07/12/2149242&amp;from=rss)
* [2026-07-14, 11:22:00](https://soylentnews.org/article.pl?sid=26/07/12/2143209&amp;from=rss) - [Scientist Models Way To Make Sure No One&apos;s Violating The Ban On Nuclear Weapons In Space](https://soylentnews.org/article.pl?sid=26/07/12/2143209&amp;from=rss)
* [2026-07-14, 06:45:00](https://soylentnews.org/article.pl?sid=26/07/12/2137226&amp;from=rss) - [Utility Companies Want To Take Control Of Your Home&apos;s Smart Thermostat](https://soylentnews.org/article.pl?sid=26/07/12/2137226&amp;from=rss)
* [2026-07-14, 02:00:00](https://soylentnews.org/article.pl?sid=26/07/12/2132224&amp;from=rss) - [New Horizons Pluto Probe Just Woke Itself Up After 321 Days Of Hibernation](https://soylentnews.org/article.pl?sid=26/07/12/2132224&amp;from=rss)
* [2026-07-13, 21:22:00](https://soylentnews.org/article.pl?sid=26/07/12/1514220&amp;from=rss) - [OpenAI Job Listing Suggests ChatGPT Could Someday Replace Junior Analysts at Goldman Sachs](https://soylentnews.org/article.pl?sid=26/07/12/1514220&amp;from=rss)
* [2026-07-13, 20:17:46](https://news.ycombinator.com/item?id=48898215) - [Accidental Anonymity](https://macwright.com/2026/06/24/accidental-anonymity)
* [2026-07-13, 16:40:00](https://soylentnews.org/article.pl?sid=26/07/12/1511228&amp;from=rss) - [China Recovered its First Reusable Rocket and Showed a New Way to Do It](https://soylentnews.org/article.pl?sid=26/07/12/1511228&amp;from=rss)
* [2026-07-13, 11:53:00](https://soylentnews.org/article.pl?sid=26/07/12/2127219&amp;from=rss) - [Why Navies Around The World Keep Submarine Propeller Designs So Secretive](https://soylentnews.org/article.pl?sid=26/07/12/2127219&amp;from=rss)
* [2026-07-13, 07:07:00](https://soylentnews.org/article.pl?sid=26/07/12/150251&amp;from=rss) - [Electric Drone Breaks World Air Speed Record at 434 Mph, Designed for Anti-Aircraft Interceptor Role](https://soylentnews.org/article.pl?sid=26/07/12/150251&amp;from=rss)
* [2026-07-13, 02:27:00](https://soylentnews.org/article.pl?sid=26/07/11/1848242&amp;from=rss) - [Higher Blood Glucose Levels Linked to Faster Brain Aging](https://soylentnews.org/article.pl?sid=26/07/11/1848242&amp;from=rss)
* [2026-07-12, 21:45:00](https://soylentnews.org/article.pl?sid=26/07/11/1846204&amp;from=rss) - [Volkswagen Sales Plunge as German Automaker Lays Out Plan to Slash Number of Brands](https://soylentnews.org/article.pl?sid=26/07/11/1846204&amp;from=rss)
* [2026-07-12, 20:15:08](https://news.ycombinator.com/item?id=48884312) - [Panel meter calculator with floating point](https://lcamtuf.substack.com/p/panel-meter-calculator-with-floating)
* [2026-07-12, 17:57:58](https://news.ycombinator.com/item?id=48883036) - [Teardown: A Generic 7-Port USB 3.0 Hub That Wasn&apos;t](https://goughlui.com/2026/07/09/teardown-a-generic-7-port-usb-3-0-hub-that-wasnt/)
* [2026-07-12, 16:57:00](https://soylentnews.org/article.pl?sid=26/07/11/1844243&amp;from=rss) - [Quantum Mechanics Surprisingly Based on Real Numbers](https://soylentnews.org/article.pl?sid=26/07/11/1844243&amp;from=rss)
* [2026-07-12, 12:10:00](https://soylentnews.org/article.pl?sid=26/07/11/0144241&amp;from=rss) - [New Dental Robot Attaches to Patient&apos;s Teeth for Drilling](https://soylentnews.org/article.pl?sid=26/07/11/0144241&amp;from=rss)
* [2026-07-12, 07:21:00](https://soylentnews.org/article.pl?sid=26/07/11/0138228&amp;from=rss) - [Failed Aussie Blockchain Project Ends With Big Fine for Fibs About It Being on Track](https://soylentnews.org/article.pl?sid=26/07/11/0138228&amp;from=rss)
* [2026-07-12, 02:38:00](https://soylentnews.org/article.pl?sid=26/07/11/0130201&amp;from=rss) - [NHTSA Calls Out Autonomous Cars for Interfering With First Responders](https://soylentnews.org/article.pl?sid=26/07/11/0130201&amp;from=rss)
* [2026-07-12, 00:27:52](https://news.ycombinator.com/item?id=48877151) - [GC shape stenciling in Go generics](https://rednafi.com/go/gc-shape-stenciling/)
