# [News Summary](https://kherrick.github.io/news-summary/)

## Social and Technological Developments

* [France plans to introduce an Australia-style social media ban for children under 15, starting September 2026.](https://www.theguardian.com/world/2025/dec/31/france-plans-social-media-ban-for-under-15s-from-september-2026) [Comments](https://news.ycombinator.com/item?id=46444743)

* [India surpasses Japan to become the 4th-largest economy in the world.](https://news.slashdot.org/story/25/12/30/2025244/india-overtakes-japan-as-4th-largest-economy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) [Comments](https://news.slashdot.org/story/25/12/30/2025244/india-overtakes-japan-as-4th-largest-economy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Denmark's main postal carrier ends letter delivery, transitioning to digital and package-focused services.](https://yro.slashdot.org/story/25/12/31/0012244/denmarks-main-postal-carrier-ends-letter-delivery?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) [Comments](https://yro.slashdot.org/story/25/12/31/0012244/denmarks-main-postal-carrier-ends-letter-delivery?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Tech Innovations and Milestones

* [Stardew Valley developer donates $125k to FOSS C# framework MonoGame, bolstering game development efforts.](https://monogame.net/blog/2025-12-30-385-new-sponsor-announcement/) [Comments](https://news.ycombinator.com/item?id=46445068)

* [A company unveils plans to deploy 4,000 giant mirrors in low Earth orbit to sell sunlight at night.](https://soylentnews.org/article.pl?sid=25/12/29/1752203&amp;from=rss) [Comments](https://soylentnews.org/article.pl?sid=25/12/29/1752203&amp;from=rss)

* [Claude creates a functional NES emulator using a custom API engine.](https://carimbo.games/games/nintendo/) [Comments](https://news.ycombinator.com/item?id=46443767)

* [First gaming handheld with a folding screen announced.](https://mobile.slashdot.org/story/25/12/30/2335237/first-gaming-handheld-with-a-folding-screen?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) [Comments](https://mobile.slashdot.org/story/25/12/30/2335237/first-gaming-handheld-with-a-folding-screen?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Health and Environment

* [US measles cases reach the highest in 30 years, surpassing 2,000, according to CDC.](https://news.slashdot.org/story/25/12/31/1335203/us-measles-cases-surpass-2000-highest-in-30-years-cdc?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) [Comments](https://news.slashdot.org/story/25/12/31/1335203/us-measles-cases-surpass-2000-highest-in-30-years-cdc?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Drugmakers in the US increase the prices of 350 medicines despite growing political and public pressure.](https://www.reuters.com/business/healthcare-pharmaceuticals/drugmakers-raise-us-prices-350-medicines-despite-pressure-trump-2025-12-31/) [Comments](https://news.ycombinator.com/item?id=46444564)

* [Efficient method for capturing CO2 from the atmosphere developed at the University of Helsinki.](https://www.helsinki.fi/en/news/innovations/efficient-method-capture-carbon-dioxide-atmosphere-developed-university-helsinki) [Comments](https://news.ycombinator.com/item?id=46444076)

## Critical Policy Shifts

* [Finland seizes a ship suspected of severing an undersea cable to Estonia, raising security concerns.](https://tech.slashdot.org/story/25/12/31/155232/finland-seizes-ship-suspected-of-severing-undersea-cable-to-estonia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) [Comments](https://tech.slashdot.org/story/25/12/31/155232/finland-seizes-ship-suspected-of-severing-undersea-cable-to-estonia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [China demands the Netherlands to rectify actions regarding a seized chipmaker amidst growing tensions and auto supply shortages.](https://slashdot.org/story/25/12/31/0843244/china-demands-netherlands-correct-mistakes-over-seized-chipmaker-as-auto-supply-crunch-deepens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) [Comments](https://slashdot.org/story/25/12/31/0843244/china-demands-netherlands-correct-mistakes-over-seized-chipmaker-as-auto-supply-crunch-deepens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Research Progress and Knowledge

* [Discovering the pitfalls of inline PGP signatures and why they are a harmful practice.](https://dkg.fifthhorseman.net/notes/inline-pgp-harmful/) [Comments](https://lobste.rs/s/nast9t/inline_pgp_signatures_considered)

* [Who invented the transistor and the history behind the breakthrough explained.](https://people.idsia.ch/~juergen/who-invented-the-transistor.html) [Comments](https://lobste.rs/s/lromlz/who_invented_transistor)

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

* [2025-12-31, 15:39:58](https://news.ycombinator.com/item?id=46445068) - [Stardew Valley developer made a $125k donation to the FOSS C# framework MonoGame](https://monogame.net/blog/2025-12-30-385-new-sponsor-announcement/)
* [2025-12-31, 15:21:00](https://tech.slashdot.org/story/25/12/31/155232/finland-seizes-ship-suspected-of-severing-undersea-cable-to-estonia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Finland Seizes Ship Suspected of Severing Undersea Cable To Estonia](https://tech.slashdot.org/story/25/12/31/155232/finland-seizes-ship-suspected-of-severing-undersea-cable-to-estonia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-31, 15:06:52](https://news.ycombinator.com/item?id=46444743) - [France targets Australia-style social media ban for children next year](https://www.theguardian.com/world/2025/dec/31/france-plans-social-media-ban-for-under-15s-from-september-2026)
* [2025-12-31, 15:03:00](https://soylentnews.org/article.pl?sid=25/12/29/185233&amp;from=rss) - [Closure of US Institute Will Do Immense Harm to Climate Research](https://soylentnews.org/article.pl?sid=25/12/29/185233&amp;from=rss)
* [2025-12-31, 14:51:28](https://news.ycombinator.com/item?id=46444564) - [Drugmakers raise US prices on 350 medicines despite pressure](https://www.reuters.com/business/healthcare-pharmaceuticals/drugmakers-raise-us-prices-350-medicines-despite-pressure-trump-2025-12-31/)
* [2025-12-31, 14:43:38](https://news.ycombinator.com/item?id=46444481) - [Zero-Code Instrumentation of an Envoy TCP Proxy Using eBPF](https://sergiocipriano.com/beyla-envoy.html)
* [2025-12-31, 14:40:00](https://slashdot.org/story/25/12/31/0843244/china-demands-netherlands-correct-mistakes-over-seized-chipmaker-as-auto-supply-crunch-deepens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Demands Netherlands &apos;Correct Mistakes&apos; Over Seized Chipmaker as Auto Supply Crunch Deepens](https://slashdot.org/story/25/12/31/0843244/china-demands-netherlands-correct-mistakes-over-seized-chipmaker-as-auto-supply-crunch-deepens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-31, 14:33:40](https://news.ycombinator.com/item?id=46444367) - [OpenAI Is Paying Employees More Than Any Major Tech Startup in History](https://www.wsj.com/tech/ai/openai-is-paying-employees-more-than-any-major-tech-startup-in-history-23472527)
* [2025-12-31, 14:00:00](https://news.slashdot.org/story/25/12/31/1335203/us-measles-cases-surpass-2000-highest-in-30-years-cdc?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Measles Cases Surpass 2,000, Highest in 30 Years: CDC](https://news.slashdot.org/story/25/12/31/1335203/us-measles-cases-surpass-2000-highest-in-30-years-cdc?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-31, 13:59:09](https://news.ycombinator.com/item?id=46444076) - [Efficient method to capture CO2 from the atmosphere / Univ of Helsinki](https://www.helsinki.fi/en/news/innovations/efficient-method-capture-carbon-dioxide-atmosphere-developed-university-helsinki)
* [2025-12-31, 13:55:37](https://lobste.rs/s/nast9t/inline_pgp_signatures_considered) - [Inline PGP signatures considered harmful (2014)](https://dkg.fifthhorseman.net/notes/inline-pgp-harmful/)
* [2025-12-31, 13:44:41](https://news.ycombinator.com/item?id=46443988) - [When square pixels aren&apos;t square](https://alexwlchan.net/2025/square-pixels/)
* [2025-12-31, 13:07:22](https://news.ycombinator.com/item?id=46443767) - [Claude wrote a functional NES emulator using my engine&apos;s API](https://carimbo.games/games/nintendo/)
* [2025-12-31, 13:02:48](https://news.ycombinator.com/item?id=46443744) - [Tell HN: Happy New Year](https://news.ycombinator.com/item?id=46443744)
* [2025-12-31, 13:00:00](https://hardware.slashdot.org/story/25/12/31/005202/nyc-inauguration-bans-raspberry-pi-flipper-zero-devices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NYC Inauguration Bans Raspberry Pi, Flipper Zero Devices](https://hardware.slashdot.org/story/25/12/31/005202/nyc-inauguration-bans-raspberry-pi-flipper-zero-devices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-31, 12:32:27](https://news.ycombinator.com/item?id=46443579) - [Fifteen Most Famous Transcendental Numbers](https://sprott.physics.wisc.edu/pickover/trans.html)
* [2025-12-31, 12:01:10](https://news.ycombinator.com/item?id=46443438) - [Activeloop (YC S18) Is Hiring MTS – Back End Engineer](https://careers.activeloop.ai/?ashby_jid=d8c54147-5fc8-48ba-a097-a6ae046c42bd)
* [2025-12-31, 11:19:31](https://lobste.rs/s/x6ruya/using_corne_split_keyboard_for_half_year) - [Using The Corne Split Keyboard For Half A Year](https://rugu.dev/en/blog/corne/)
* [2025-12-31, 10:57:11](https://lobste.rs/s/lromlz/who_invented_transistor) - [Who Invented the Transistor?](https://people.idsia.ch/~juergen/who-invented-the-transistor.html)
* [2025-12-31, 10:20:00](https://soylentnews.org/article.pl?sid=25/12/29/1752203&amp;from=rss) - [Company Plans to Build Swarm of 4,000 Giant Mirrors in Low Earth Orbit to “Sell Sunlight\&quot; at Night](https://soylentnews.org/article.pl?sid=25/12/29/1752203&amp;from=rss)
* [2025-12-31, 10:12:51](https://news.ycombinator.com/item?id=46442903) - [Akin&apos;s Laws of Spacecraft Design [pdf]](https://www.ece.uvic.ca/~elec399/201409/Akin%27s%20Laws%20of%20Spacecraft%20Design.pdf)
* [2025-12-31, 10:11:14](https://lobste.rs/s/ozuobo/modular_monolith_microservices_data) - [Modular Monolith and Microservices: Data ownership, boundaries, consistency and synchronization](https://binaryigor.com/modular-monolith-and-microservices-data.html)
* [2025-12-31, 10:08:27](https://lobste.rs/s/4totv7/i_fed_24_years_my_blog_posts_markov_model) - [I Fed 24 Years of My Blog Posts to a Markov Model](https://susam.net/fed-24-years-of-posts-to-markov-model.html)
* [2025-12-31, 10:00:00](https://yro.slashdot.org/story/25/12/31/0012244/denmarks-main-postal-carrier-ends-letter-delivery?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Denmark&apos;s Main Postal Carrier Ends Letter Delivery](https://yro.slashdot.org/story/25/12/31/0012244/denmarks-main-postal-carrier-ends-letter-delivery?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-31, 09:59:10](https://lobste.rs/s/z3ckd3/fixing_buffer_overflow_unix_v4_like_it_s) - [Fixing a Buffer Overflow in UNIX v4 Like It&apos;s 1973](https://sigma-star.at/blog/2025/12/unix-v4-buffer-overflow/)
* [2025-12-31, 09:49:46](https://lobste.rs/s/3cwha2/solid_load_bull) - [A SOLID Load of Bull](https://loup-vaillant.fr/articles/solid-bull)
* [2025-12-31, 09:09:28](https://news.ycombinator.com/item?id=46442597) - [The rise of industrial software](https://chrisloy.dev/post/2025/12/30/the-rise-of-industrial-software)
* [2025-12-31, 07:47:44](https://news.ycombinator.com/item?id=46442245) - [Show HN: Use Claude Code to Query 600 GB Indexes over Hacker News, ArXiv, etc.](https://exopriors.com/scry)
* [2025-12-31, 07:34:20](https://lobste.rs/s/13cyor/mastodon_stories_for_systemd_v259) - [Mastodon Stories for systemd v259](https://0pointer.net/blog/mastodon-stories-for-systemd-v259.html)
* [2025-12-31, 07:00:00](https://tech.slashdot.org/story/25/12/31/0020214/israel-deploys-worlds-first-drone-defense-laser?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Israel Deploys World&apos;s First Drone Defense Laser](https://tech.slashdot.org/story/25/12/31/0020214/israel-deploys-worlds-first-drone-defense-laser?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-31, 06:51:56](https://lobste.rs/s/rneyai/7_practical_std_chrono_calendar_examples) - [7 Practical std::chrono Calendar Examples (C++20)](https://www.cppstories.com/2025/chrono-calendar-examples/)
* [2025-12-31, 05:35:00](https://soylentnews.org/article.pl?sid=25/12/29/1748200&amp;from=rss) - [Spotify Disables Accounts After Open-Source Group Scrapes 86 Million Songs From Platform](https://soylentnews.org/article.pl?sid=25/12/29/1748200&amp;from=rss)
* [2025-12-31, 05:30:08](https://lobste.rs/s/2zuvga/runst_does_not_prevent_resources_from) - [runST does not prevent resources from escaping](https://welltypedwit.ch/posts/runst-does-not-prevent-resources-from-escaping.html)
* [2025-12-31, 03:52:12](https://lobste.rs/s/npnchn/what_are_some_interesting_projects_you_ve) - [What are some interesting projects that you&apos;ve done this year?](https://lobste.rs/s/npnchn/what_are_some_interesting_projects_you_ve)
* [2025-12-31, 03:30:00](https://hardware.slashdot.org/story/25/12/31/001211/cheap-solar-is-transforming-lives-and-economies-across-africa?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cheap Solar Is Transforming Lives and Economies Across Africa](https://hardware.slashdot.org/story/25/12/31/001211/cheap-solar-is-transforming-lives-and-economies-across-africa?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-31, 03:03:25](https://lobste.rs/s/amcuhv/what_i_ve_learned_writing_gleam) - [What I&apos;ve Learned Writing Gleam](https://nohzafk.github.io/posts/2025-12-27-what-i-ve-learned-writting-gleam/)
* [2025-12-31, 02:57:38](https://lobste.rs/s/rmolyl/simple_bidirectional_type_inference) - [Simple Bidirectional Type Inference](https://ettolrach.com/blog/bidirectional_inference.html)
* [2025-12-31, 02:02:00](https://news.slashdot.org/story/25/12/30/2341244/foreign-tech-workers-are-avoiding-travel-to-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Foreign Tech Workers Are Avoiding Travel To the US&apos;](https://news.slashdot.org/story/25/12/30/2341244/foreign-tech-workers-are-avoiding-travel-to-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-31, 02:01:53](https://news.ycombinator.com/item?id=46440510) - [Readings in Database Systems (5th Edition) (2015)](http://www.redbook.io/)
* [2025-12-31, 01:33:03](https://lobste.rs/s/sfmlns/why_we_trust_strangers_open_source_more) - [Why we trust strangers’ open source more than our colleagues’](https://00f.net/2025/09/01/opensource-by-internal-contributors/)
* [2025-12-31, 01:25:00](https://mobile.slashdot.org/story/25/12/30/2335237/first-gaming-handheld-with-a-folding-screen?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [First Gaming Handheld With a Folding Screen](https://mobile.slashdot.org/story/25/12/30/2335237/first-gaming-handheld-with-a-folding-screen?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-31, 00:53:00](https://soylentnews.org/article.pl?sid=25/12/29/1742252&amp;from=rss) - [Is Proton Leaving Switzerland? \&quot;Legal Uncertainty\&quot; of Proposed Surveillance Laws Would be the Reason](https://soylentnews.org/article.pl?sid=25/12/29/1742252&amp;from=rss)
* [2025-12-31, 00:45:00](https://entertainment.slashdot.org/story/25/12/30/2043241/2025-was-the-year-of-creative-bankruptcy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;2025 Was the Year of Creative Bankruptcy&apos;](https://entertainment.slashdot.org/story/25/12/30/2043241/2025-was-the-year-of-creative-bankruptcy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-31, 00:02:00](https://news.slashdot.org/story/25/12/30/2025244/india-overtakes-japan-as-4th-largest-economy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [India Overtakes Japan As 4th-Largest Economy](https://news.slashdot.org/story/25/12/30/2025244/india-overtakes-japan-as-4th-largest-economy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-30, 23:20:00](https://slashdot.org/story/25/12/30/2016207/groq-investor-sounds-alarm-on-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Groq Investor Sounds Alarm On Data Centers](https://slashdot.org/story/25/12/30/2016207/groq-investor-sounds-alarm-on-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-30, 23:06:09](https://lobste.rs/s/rrty6s/turning_dafny_sets_into_sequences) - [Turning Dafny Sets into Sequences](https://youtu.be/-zAhtW8YFKM?t=210)
* [2025-12-30, 22:40:00](https://slashdot.org/story/25/12/30/205238/china-mandates-50-domestic-equipment-rule-for-chipmakers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Mandates 50% Domestic Equipment Rule For Chipmakers](https://slashdot.org/story/25/12/30/205238/china-mandates-50-domestic-equipment-rule-for-chipmakers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-30, 22:00:00](https://tech.slashdot.org/story/25/12/30/202203/toronto-man-outruns-streetcars-to-show-up-sluggish-transit-network?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Toronto Man Outruns Streetcars To Show Up Sluggish Transit Network](https://tech.slashdot.org/story/25/12/30/202203/toronto-man-outruns-streetcars-to-show-up-sluggish-transit-network?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-30, 21:59:35](https://news.ycombinator.com/item?id=46438522) - [Honey&apos;s Dieselgate: Detecting and tricking testers](https://vptdigital.com/blog/honey-detecting-testers/)
* [2025-12-30, 21:21:00](https://yro.slashdot.org/story/25/12/30/1911201/cybersecurity-employees-plead-guilty-to-ransomware-attacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cybersecurity Employees Plead Guilty To Ransomware Attacks](https://yro.slashdot.org/story/25/12/30/1911201/cybersecurity-employees-plead-guilty-to-ransomware-attacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-30, 20:04:00](https://soylentnews.org/article.pl?sid=25/12/28/1123222&amp;from=rss) - [Beware of OpenAI&apos;s &apos;Grantwashing&apos; on AI Harms](https://soylentnews.org/article.pl?sid=25/12/28/1123222&amp;from=rss)
* [2025-12-30, 19:46:02](https://lobste.rs/s/tm1b3f/xous_pure_rust_rethink_embedded) - [Xous: A Pure-Rust Rethink of the Embedded Operating System](https://media.ccc.de/v/39c3-xous-a-pure-rust-rethink-of-the-embedded-operating-system)
* [2025-12-30, 19:38:29](https://lobste.rs/s/54elmf/some_flexibility_with_go_s_sumdb) - [Some flexibility with Go&apos;s sumdb](https://blog.yossarian.net/2025/12/29/Some-flexibility-with-Go-s-sumdb)
* [2025-12-30, 19:26:59](https://lobste.rs/s/wsyy3a/vulnerability_libsodium) - [A vulnerability in libsodium](https://00f.net/2025/12/30/libsodium-vulnerability/)
* [2025-12-30, 19:21:48](https://news.ycombinator.com/item?id=46436889) - [FediMeteo: A €4 FreeBSD VPS Became a Global Weather Service](https://it-notes.dragas.net/2025/02/26/fedimeteo-how-a-tiny-freebsd-vps-became-a-global-weather-service-for-thousands/)
* [2025-12-30, 18:36:37](https://news.ycombinator.com/item?id=46436409) - [A faster heart for F-Droid](https://f-droid.org/2025/12/30/a-faster-heart-for-f-droid.html)
* [2025-12-30, 17:24:57](https://news.ycombinator.com/item?id=46435614) - [A Vulnerability in Libsodium](https://00f.net/2025/12/30/libsodium-vulnerability/)
* [2025-12-30, 17:01:59](https://news.ycombinator.com/item?id=46435308) - [Show HN: 22 GB of Hacker News in SQLite](https://hackerbook.dosaygo.com)
* [2025-12-30, 15:43:42](https://lobste.rs/s/ntslcm/memory_safety_is) - [Memory Safety Is …](https://matklad.github.io/2025/12/30/memory-safety-is.html)
* [2025-12-30, 15:23:00](https://soylentnews.org/article.pl?sid=25/12/28/1121243&amp;from=rss) - [First Ever Version of UNIX Written in C is Running Again](https://soylentnews.org/article.pl?sid=25/12/28/1121243&amp;from=rss)
* [2025-12-30, 15:21:17](https://lobste.rs/s/4pyalq/building_react_app_with_formally) - [Building a React App with Formally Verified State](https://midspiral.com/blog/building-a-react-app-with-formally-verified-state/)
* [2025-12-30, 15:06:28](https://lobste.rs/s/4uhvgb/fedimeteo_how_tiny_4_freebsd_vps_became) - [FediMeteo: How a Tiny €4 FreeBSD VPS Became a Global Weather Service for Thousands](https://it-notes.dragas.net/2025/02/26/fedimeteo-how-a-tiny-freebsd-vps-became-a-global-weather-service-for-thousands/)
* [2025-12-30, 15:06:13](https://lobste.rs/s/0g0ebi/formally_speaking_transpiler_is_useless) - [Formally speaking, \&quot;Transpiler\&quot; is a useless word](https://people.csail.mit.edu/rachit/post/transpiler-formal/)
* [2025-12-30, 11:42:55](https://news.ycombinator.com/item?id=46432311) - [Non-Zero-Sum Games](https://nonzerosum.games/)
* [2025-12-30, 11:03:56](https://lobste.rs/s/ukpngg/make_shift_shebangs_for_go) - [Make-shift shebangs for Go](https://lorentz.app/blog-item.html?id=go-shebang)
* [2025-12-30, 10:36:00](https://soylentnews.org/article.pl?sid=25/12/28/1117228&amp;from=rss) - [South Korea to Require Facial Recognition for New Mobile Numbers](https://soylentnews.org/article.pl?sid=25/12/28/1117228&amp;from=rss)
* [2025-12-30, 05:53:00](https://soylentnews.org/article.pl?sid=25/12/28/1115208&amp;from=rss) - [Phoenix Emerges as a Modern X Server Written From Scratch in Zig](https://soylentnews.org/article.pl?sid=25/12/28/1115208&amp;from=rss)
* [2025-12-30, 01:12:00](https://soylentnews.org/article.pl?sid=25/12/28/1112249&amp;from=rss) - [Shouting at Seagulls Could Stop Them Stealing Your Food](https://soylentnews.org/article.pl?sid=25/12/28/1112249&amp;from=rss)
* [2025-12-29, 23:40:23](https://lobste.rs/s/swdcvg/curl_removes_all_calls_strcpy) - [Curl removes all calls to strcpy](https://daniel.haxx.se/blog/2025/12/29/no-strcpy-either/)
* [2025-12-29, 20:25:00](https://soylentnews.org/article.pl?sid=25/12/27/2318230&amp;from=rss) - [Engineer Turns E-Ink Tablet Into Computer Monitor in Linux](https://soylentnews.org/article.pl?sid=25/12/27/2318230&amp;from=rss)
* [2025-12-29, 19:09:08](https://news.ycombinator.com/item?id=46424173) - [Loss32: Let&apos;s Build a Win32/Linux](https://loss32.org/)
* [2025-12-29, 19:04:59](https://lobste.rs/s/x1xqtv/llms_are_not_fun) - [LLMs Are Not Fun](https://orib.dev/nofun.html)
* [2025-12-29, 15:36:00](https://soylentnews.org/article.pl?sid=25/12/27/239245&amp;from=rss) - [LG Forces TV Owners to Use Microsoft ‘AI’ Copilot App You Can&apos;t Uninstall and Nobody Asked for](https://soylentnews.org/article.pl?sid=25/12/27/239245&amp;from=rss)
* [2025-12-29, 10:52:00](https://soylentnews.org/article.pl?sid=25/12/27/235226&amp;from=rss) - [How Recent is \&quot;Recent\&quot;?](https://soylentnews.org/article.pl?sid=25/12/27/235226&amp;from=rss)
* [2025-12-29, 06:09:00](https://soylentnews.org/article.pl?sid=25/12/27/230209&amp;from=rss) - [Microsoft&apos;s Research Dream to Replace All C/C++ With Rust by 2030](https://soylentnews.org/article.pl?sid=25/12/27/230209&amp;from=rss)
* [2025-12-29, 01:17:00](https://soylentnews.org/article.pl?sid=25/12/27/2258256&amp;from=rss) - [Why Swearing Makes You Stronger](https://soylentnews.org/article.pl?sid=25/12/27/2258256&amp;from=rss)
* [2025-12-28, 20:37:00](https://soylentnews.org/article.pl?sid=25/12/26/2021243&amp;from=rss) - [Your Car&apos;s Web Browser May be on the Road to Cyber Ruin](https://soylentnews.org/article.pl?sid=25/12/26/2021243&amp;from=rss)
* [2025-12-28, 17:00:00](https://soylentnews.org/article.pl?sid=25/12/28/1357214&amp;from=rss) - [The 39th Chaos Communication Congress (39C3) Taking Place Now in Hamburg Through 30 Dec 2025](https://soylentnews.org/article.pl?sid=25/12/28/1357214&amp;from=rss)
* [2025-12-28, 15:49:00](https://soylentnews.org/article.pl?sid=25/12/26/2015254&amp;from=rss) - [How OpenAI is Using GPT-5 Codex to Improve the AI Tool Itself](https://soylentnews.org/article.pl?sid=25/12/26/2015254&amp;from=rss)
* [2025-12-28, 12:42:11](https://news.ycombinator.com/item?id=46410676) - [A super fast website using Cloudflare workers](https://crazyfast.website)
* [2025-12-28, 11:02:00](https://soylentnews.org/article.pl?sid=25/12/26/205213&amp;from=rss) - [Will AI Kill All the Lawyers?](https://soylentnews.org/article.pl?sid=25/12/26/205213&amp;from=rss)
* [2025-12-28, 08:10:01](https://news.ycombinator.com/item?id=46409359) - [Doom in Django: testing the limits of LiveView at 600.000 divs/segundo](https://en.andros.dev/blog/7b1b607b/doom-in-django-testing-the-limits-of-liveview-at-600000-divssegundo/)
* [2025-12-28, 06:19:00](https://soylentnews.org/article.pl?sid=25/12/26/1958223&amp;from=rss) - [Texas Sues TV Makers for Taking Screenshots of What People Watch](https://soylentnews.org/article.pl?sid=25/12/26/1958223&amp;from=rss)
* [2025-12-28, 01:33:00](https://soylentnews.org/article.pl?sid=25/12/26/1946250&amp;from=rss) - [Who Sets the Doomsday Clock?](https://soylentnews.org/article.pl?sid=25/12/26/1946250&amp;from=rss)
* [2025-12-27, 20:44:00](https://soylentnews.org/article.pl?sid=25/12/25/226213&amp;from=rss) - [Night Waking Impacts Cognitive Performance Regardless of Sleep Duration](https://soylentnews.org/article.pl?sid=25/12/25/226213&amp;from=rss)
* [2025-12-27, 15:53:00](https://soylentnews.org/article.pl?sid=25/12/25/224204&amp;from=rss) - [EU Offers UK Early Gift: Data Adequacy Until 2031](https://soylentnews.org/article.pl?sid=25/12/25/224204&amp;from=rss)
* [2025-12-27, 11:16:00](https://soylentnews.org/article.pl?sid=25/12/25/222237&amp;from=rss) - [Science Sleuths Raise Concerns About Scores of Bioengineering Papers](https://soylentnews.org/article.pl?sid=25/12/25/222237&amp;from=rss)
* [2025-12-27, 06:25:00](https://soylentnews.org/article.pl?sid=25/12/25/2156225&amp;from=rss) - [We May Never be Able to Tell If AI Becomes Conscious, Argues Philosopher](https://soylentnews.org/article.pl?sid=25/12/25/2156225&amp;from=rss)
* [2025-12-27, 01:40:00](https://soylentnews.org/article.pl?sid=25/12/25/2154252&amp;from=rss) - [MIT Reveals How High-Fat Diets Quietly Prime the Liver for Cancer](https://soylentnews.org/article.pl?sid=25/12/25/2154252&amp;from=rss)
