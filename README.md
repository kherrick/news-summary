# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Cybersecurity

* [IPv6 Just Turned 30 and Still Hasn't Taken Over the World, But Don't Call It a Failure](https://tech.slashdot.org/story/26/01/01/1833202/ipv6-just-turned-30-and-still-hasnt-taken-over-the-world-but-dont-call-it-a-failure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A critical assessment of the promise and challenges in the adoption of IPv6, three decades after its inception.

* [European Space Agency Acknowledges Another Breach as Criminals Claim 200 GB Data Haul](https://it.slashdot.org/story/26/01/01/1525235/european-space-agency-acknowledges-another-breach-as-criminals-claim-200-gb-data-haul?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The ESA comes under fire again, facing another cybersecurity breach as hackers claim they have extracted 200GB worth of data.

* [Sony PS5 ROM Keys Leaked – Jailbreaking Could Be Made Easier With BootROM Codes](https://www.tomshardware.com/video-games/playstation/playstation-5-rom-keys-leaked-jailbreaking-could-be-made-easier-with-bootrom-codes) - New concerns arise over the security of Sony's PlayStation 5 as its ROM keys are leaked, facilitating potential hacking.

## Privacy and Online Security

* [Meta Made Scam Ads Harder to Find Instead of Removing Them](https://sherwood.news/tech/rather-than-fully-cracking-down-on-scam-ads-meta-worked-to-make-them-harder/) - A revealing expose on Meta's controversial approach to managing scam ads.

* [How Do You Secure Access to Your Self-hosted/Homelab Services?](https://lobste.rs/s/rmenr4/how_do_you_secure_access_your_self_hosted) - A discussion about approaches to ensure the security of self-hosted and homelab services amidst increasing vulnerabilities.

## Science and Innovations

* [The Man Taking Over the Large Hadron Collider](https://science.slashdot.org/story/26/01/01/1455227/the-man-taking-over-the-large-hadron-collider?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A glimpse into the life and vision of the new leader of one of the major centers for cutting-edge physics.

* [World's Largest Electric Ship Launched by Tasmanian Boatbuilder](https://www.theguardian.com/australia-news/2025/may/02/hull-096-worlds-largest-electric-ship-battery-power-launched) - The massive, eco-friendly ship promises to revolutionize transport and shipping.

## Artificial Intelligence and Software Development

* [2025: The Year in LLMs](https://simonwillison.net/2025/Dec/31/the-year-in-llms/) - A reflective piece highlighting the transformative developments in the field of large language models.

* [Z80-μLM is a 2-Bit Quantized Language Model Small Enough to Run on an 8-Bit Z80 Processor](https://github.com/HarryR/z80ai) - Introducing an ultra-compact language model designed for resource-limited environments.

* [Rust--: Rust Without the Borrow Checker](https://github.com/buyukakyuz/rustmm) - A fascinating experiment stripping Rust of its trademark borrow checker and its implications for programming.

## Open Source and Development Tools

* [ACM Is Now Open Access](https://www.acm.org/articles/bulletins/2026/january/acm-open-access) - The Association for Computing Machinery embraces open access to democratize access to research publications.

* [Building a Deep Learning Library](https://zekcrates.quarto.pub/deep-learning-library/) - A hands-on guide to creating your own deep learning library from scratch.

## Entertainment and Cultural Trends

* [Public Domain Day 2026 Brings Betty Boop, Nancy Drew and 'I Got Rhythm' Into the Commons](https://news.slashdot.org/story/26/01/01/1712212/public-domain-day-2026-brings-betty-boop-nancy-drew-and-i-got-rhythm-into-the-commons?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Celebrating the inclusion of iconic characters and cultural touchstones into the public domain.

* [You Can't Trust Your Eyes To Tell You What's Real Anymore, Says Instagram Head](https://tech.slashdot.org/story/26/01/01/1355226/you-cant-trust-your-eyes-to-tell-you-whats-real-anymore-says-instagram-head?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - An analysis of the ever-blurring line between authenticity and artificiality in visual media.

## Business and Society

* [Warren Buffett Retires As Berkshire Hathaway CEO After 55 Years](https://news.slashdot.org/story/25/12/31/226259/warren-buffett-retires-as-berkshire-hathaway-ceo-after-55-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Marking the end of an era, Warren Buffett steps down after shaping an empire over five decades.

* [Tech Startups Are Handing Out Free Nicotine Pouches to Boost Productivity](https://tech.slashdot.org/story/25/12/31/2238231/tech-startups-are-handing-out-free-nicotine-pouches-to-boost-productivity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A controversial and unconventional productivity strategy gains attention in the tech world.

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

* [2026-01-01, 18:40:00](https://tech.slashdot.org/story/26/01/01/1833202/ipv6-just-turned-30-and-still-hasnt-taken-over-the-world-but-dont-call-it-a-failure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;IPv6 Just Turned 30 and Still Hasn&apos;t Taken Over the World, But Don&apos;t Call It a Failure&apos;](https://tech.slashdot.org/story/26/01/01/1833202/ipv6-just-turned-30-and-still-hasnt-taken-over-the-world-but-dont-call-it-a-failure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-01, 18:11:00](https://news.slashdot.org/story/26/01/01/1736221/dhs-says-real-id-which-dhs-certifies-is-too-unreliable-to-confirm-us-citizenship?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DHS Says REAL ID, Which DHS Certifies, Is Too Unreliable To Confirm US Citizenship](https://news.slashdot.org/story/26/01/01/1736221/dhs-says-real-id-which-dhs-certifies-is-too-unreliable-to-confirm-us-citizenship?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-01, 17:58:51](https://lobste.rs/s/cbgqpd/parameter_efficient_fine_tuning) - [Parameter-efficient fine-tuning in tinygrad](https://dxuuu.xyz/peft.html)
* [2026-01-01, 17:52:30](https://news.ycombinator.com/item?id=46456215) - [Memory Subsystem Optimizations](https://johnnysswlab.com/memory-subsystem-optimizations/)
* [2026-01-01, 17:42:51](https://lobste.rs/s/5ie2jz/lazypromise_async_primitive) - [LazyPromise: an async primitive that complements Signals and supports typed errors](https://github.com/lazy-promise/lazy-promise)
* [2026-01-01, 17:18:01](https://news.ycombinator.com/item?id=46455872) - [Cameras and Lenses (2020)](https://ciechanow.ski/cameras-and-lenses/)
* [2026-01-01, 17:12:00](https://news.slashdot.org/story/26/01/01/1712212/public-domain-day-2026-brings-betty-boop-nancy-drew-and-i-got-rhythm-into-the-commons?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Public Domain Day 2026 Brings Betty Boop, Nancy Drew and &apos;I Got Rhythm&apos; Into the Commons](https://news.slashdot.org/story/26/01/01/1712212/public-domain-day-2026-brings-betty-boop-nancy-drew-and-i-got-rhythm-into-the-commons?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-01, 17:09:24](https://lobste.rs/s/cniequ/wireguard_packet_relay_for_nat_traversal) - [WireGuard packet relay for NAT traversal](https://github.com/weiiwang01/wpex)
* [2026-01-01, 16:28:43](https://news.ycombinator.com/item?id=46455330) - [European Space Agency hit again as cybercriminals claim 200 GB data up for sale](https://www.theregister.com/2025/12/31/european_space_agency_hacked/)
* [2026-01-01, 16:01:00](https://it.slashdot.org/story/26/01/01/1525235/european-space-agency-acknowledges-another-breach-as-criminals-claim-200-gb-data-haul?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [European Space Agency Acknowledges Another Breach as Criminals Claim 200 GB Data Haul](https://it.slashdot.org/story/26/01/01/1525235/european-space-agency-acknowledges-another-breach-as-criminals-claim-200-gb-data-haul?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-01, 15:57:39](https://news.ycombinator.com/item?id=46455053) - [Sony PS5 ROM keys leaked – jailbreaking could be made easier with BootROM codes](https://www.tomshardware.com/video-games/playstation/playstation-5-rom-keys-leaked-jailbreaking-could-be-made-easier-with-bootrom-codes)
* [2026-01-01, 15:48:31](https://news.ycombinator.com/item?id=46454968) - [Implementing HNSW (Hierarchical Navigable Small World) Vector Search in PHP](https://centamori.com/index.php?slug=hierarchical-navigable-small-world-hnsw-php&amp;lang=en)
* [2026-01-01, 15:47:17](https://news.ycombinator.com/item?id=46454958) - [Common Lisp SDK for the Datastar Hypermedia Framework](https://github.com/fsmunoz/datastar-cl)
* [2026-01-01, 15:31:24](https://news.ycombinator.com/item?id=46454854) - [Heap Overflow in FFmpeg EXIF](https://bugs.pwno.io/0014)
* [2026-01-01, 15:19:26](https://news.ycombinator.com/item?id=46454763) - [ACM Is Now Open Access](https://www.acm.org/articles/bulletins/2026/january/acm-open-access)
* [2026-01-01, 15:09:06](https://news.ycombinator.com/item?id=46454693) - [OpenWorkers: Self-Hosted Cloudflare Workers in Rust](https://openworkers.com/introducing-openworkers)
* [2026-01-01, 15:00:00](https://science.slashdot.org/story/26/01/01/1455227/the-man-taking-over-the-large-hadron-collider?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Man Taking Over the Large Hadron Collider](https://science.slashdot.org/story/26/01/01/1455227/the-man-taking-over-the-large-hadron-collider?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-01, 14:53:50](https://news.ycombinator.com/item?id=46454587) - [Build a Deep Learning Library](https://zekcrates.quarto.pub/deep-learning-library/)
* [2026-01-01, 14:46:00](https://soylentnews.org/article.pl?sid=25/12/31/027237&amp;from=rss) - [Bye-Bye Microplastics: New Plastic is Recyclable and Fully Ocean-Degradable](https://soylentnews.org/article.pl?sid=25/12/31/027237&amp;from=rss)
* [2026-01-01, 14:39:23](https://news.ycombinator.com/item?id=46454470) - [Python Numbers Every Programmer Should Know](https://mkennedy.codes/posts/python-numbers-every-programmer-should-know/)
* [2026-01-01, 14:32:12](https://news.ycombinator.com/item?id=46454413) - [2025 Letter](https://danwang.co/2025-letter/)
* [2026-01-01, 14:14:14](https://lobste.rs/s/kgbaoc/software_taketh_away_faster_than) - [Software taketh away faster than hardware giveth: Why C++ programmers keep growing fast despite competition, safety, and AI](https://herbsutter.com/2025/12/30/software-taketh-away-faster-than-hardware-giveth-why-c-programmers-keep-growing-fast-despite-competition-safety-and-ai/)
* [2026-01-01, 14:00:00](https://tech.slashdot.org/story/26/01/01/1355226/you-cant-trust-your-eyes-to-tell-you-whats-real-anymore-says-instagram-head?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [You Can&apos;t Trust Your Eyes To Tell You What&apos;s Real Anymore, Says Instagram Head](https://tech.slashdot.org/story/26/01/01/1355226/you-cant-trust-your-eyes-to-tell-you-whats-real-anymore-says-instagram-head?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-01, 13:30:45](https://news.ycombinator.com/item?id=46453950) - [iOS allows alternative browser engines in Japan](https://developer.apple.com/support/alternative-browser-engines-jp/)
* [2026-01-01, 13:04:07](https://lobste.rs/s/mxqift/one_number_i_trust_plain_text_accounting) - [One Number I Trust: Plain-Text Accounting for a Multi-Currency Household](https://lalitm.com/post/one-number-i-trust/)
* [2026-01-01, 13:00:00](https://tech.slashdot.org/story/25/12/31/2232231/waymos-are-now-coming-for-your-coveted-san-francisco-parking-spots?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Waymos Are Now Coming For Your Coveted San Francisco Parking Spots](https://tech.slashdot.org/story/25/12/31/2232231/waymos-are-now-coming-for-your-coveted-san-francisco-parking-spots?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-01, 12:29:01](https://news.ycombinator.com/item?id=46453582) - [Meta made scam ads harder to find instead of removing them](https://sherwood.news/tech/rather-than-fully-cracking-down-on-scam-ads-meta-worked-to-make-them-harder/)
* [2026-01-01, 11:33:31](https://lobste.rs/s/t5niao/z80_lm_is_2_bit_quantized_language_model) - [Z80-μLM is a 2-bit quantized language model small enough to run on an 8-bit Z80 processor](https://github.com/HarryR/z80ai)
* [2026-01-01, 11:17:18](https://news.ycombinator.com/item?id=46453204) - [Bluetooth Headphone Jacking: A Key to Your Phone [video]](https://media.ccc.de/v/39c3-bluetooth-headphone-jacking-a-key-to-your-phone)
* [2026-01-01, 11:01:38](https://news.ycombinator.com/item?id=46453114) - [I rebooted my social life](https://takes.jamesomalley.co.uk/p/this-might-be-oversharing)
* [2026-01-01, 10:53:12](https://news.ycombinator.com/item?id=46453062) - [Rust--: Rust without the borrow checker](https://github.com/buyukakyuz/rustmm)
* [2026-01-01, 10:29:54](https://news.ycombinator.com/item?id=46452937) - [Worlds largest electric ship launched by Tasmanian boatbuilder](https://www.theguardian.com/australia-news/2025/may/02/hull-096-worlds-largest-electric-ship-battery-power-launched)
* [2026-01-01, 10:14:59](https://lobste.rs/s/0rq8fz/confidential_computing_for_self_hosted) - [Confidential computing for self-hosted communities](https://lobste.rs/s/0rq8fz/confidential_computing_for_self_hosted)
* [2026-01-01, 10:03:00](https://soylentnews.org/article.pl?sid=25/12/31/026206&amp;from=rss) - [D7VK Reaches Version 1.1 and Adds New Frontend and Experimental Direct3D 6 Support](https://soylentnews.org/article.pl?sid=25/12/31/026206&amp;from=rss)
* [2026-01-01, 10:02:00](https://soylentnews.org/article.pl?sid=25/12/31/022234&amp;from=rss) - [Study Reveals Just How Much AI Slop is on YouTube](https://soylentnews.org/article.pl?sid=25/12/31/022234&amp;from=rss)
* [2026-01-01, 10:00:00](https://news.slashdot.org/story/25/12/31/2224224/uk-company-sends-factory-with-1000c-furnace-into-space?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Company Sends Factory With 1,000C Furnace Into Space](https://news.slashdot.org/story/25/12/31/2224224/uk-company-sends-factory-with-1000c-furnace-into-space?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-01, 09:53:48](https://news.ycombinator.com/item?id=46452763) - [Children and Helical Time](https://moultano.wordpress.com/2025/12/30/children-and-helical-time/)
* [2026-01-01, 09:37:54](https://lobste.rs/s/ki1qtn/writing_windows_95_software_2025) - [Writing Windows 95 software in 2025](https://tlxdev.hashnode.dev/writing-windows-95-software-in-2025)
* [2026-01-01, 09:14:31](https://lobste.rs/s/heusg4/hindsight_github_style_git_activity) - [hindsight: GitHub-style git activity visualizer for terminal](https://github.com/chaosprint/hindsight)
* [2026-01-01, 07:00:00](https://news.slashdot.org/story/25/12/31/2216247/nasas-largest-library-is-closing-amid-staff-and-lab-cuts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA&apos;s Largest Library Is Closing Amid Staff and Lab Cuts](https://news.slashdot.org/story/25/12/31/2216247/nasas-largest-library-is-closing-amid-staff-and-lab-cuts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-01, 05:53:53](https://lobste.rs/s/ukybhb/pidgin_3_0_experimental_5_2_94_0_has_been) - [Pidgin 3.0 Experimental 5 (2.94.0) has been released](https://discourse.imfreedom.org/t/pidgin-3-0-experimental-5-2-94-0-has-been-released/338)
* [2026-01-01, 05:15:00](https://soylentnews.org/article.pl?sid=25/12/31/020219&amp;from=rss) - [US Insurance Giant Aflac Says Hackers Stole Personal and Health Data of 22.6 Million People](https://soylentnews.org/article.pl?sid=25/12/31/020219&amp;from=rss)
* [2026-01-01, 04:49:09](https://lobste.rs/s/fq0fyl/statically_linking_pipewire) - [Statically Linking PipeWire](https://gamesbymason.com/blog/2025/statically-linking-pipewire/)
* [2026-01-01, 03:41:32](https://lobste.rs/s/iasv7u/corroded_illegal_rust) - [corroded: Illegal rust](https://github.com/buyukakyuz/corroded)
* [2026-01-01, 03:30:00](https://science.slashdot.org/story/25/12/31/2014258/heart-association-revives-theory-that-light-drinking-may-be-good-for-you?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Heart Association Revives Theory That Light Drinking May Be Good For You](https://science.slashdot.org/story/25/12/31/2014258/heart-association-revives-theory-that-light-drinking-may-be-good-for-you?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-01, 02:34:39](https://lobste.rs/s/kcz898/silly_diffuse_shading_model) - [A silly diffuse shading model](https://lisyarus.github.io/blog/posts/a-silly-diffuse-shading-model.html)
* [2026-01-01, 02:25:12](https://lobste.rs/s/rmenr4/how_do_you_secure_access_your_self_hosted) - [How do you secure access to your self-hosted/homelab services?](https://lobste.rs/s/rmenr4/how_do_you_secure_access_your_self_hosted)
* [2026-01-01, 01:25:44](https://lobste.rs/s/ykqi2f/2025_year_llms) - [2025: The year in LLMs](https://simonwillison.net/2025/Dec/31/the-year-in-llms/)
* [2026-01-01, 01:10:00](https://news.slashdot.org/story/25/12/31/226259/warren-buffett-retires-as-berkshire-hathaway-ceo-after-55-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Warren Buffett Retires As Berkshire Hathaway CEO After 55 Years](https://news.slashdot.org/story/25/12/31/226259/warren-buffett-retires-as-berkshire-hathaway-ceo-after-55-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-01, 00:50:00](https://hardware.slashdot.org/story/25/12/31/2149206/stewart-cheifet-computer-chronicles-host-dies-at-87?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Stewart Cheifet, Computer Chronicles Host, Dies At 87](https://hardware.slashdot.org/story/25/12/31/2149206/stewart-cheifet-computer-chronicles-host-dies-at-87?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-01, 00:37:00](https://soylentnews.org/article.pl?sid=25/12/31/0148238&amp;from=rss) - [Not Everyone Reads the Room the Same](https://soylentnews.org/article.pl?sid=25/12/31/0148238&amp;from=rss)
* [2026-01-01, 00:30:00](https://tech.slashdot.org/story/25/12/31/2238231/tech-startups-are-handing-out-free-nicotine-pouches-to-boost-productivity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tech Startups Are Handing Out Free Nicotine Pouches to Boost Productivity](https://tech.slashdot.org/story/25/12/31/2238231/tech-startups-are-handing-out-free-nicotine-pouches-to-boost-productivity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-01, 00:18:53](https://lobste.rs/s/tenl1g/i_canceled_my_programming_book_deal) - [I canceled my programming book deal](https://austinhenley.com/blog/canceledbookdeal.html)
* [2026-01-01, 00:00:00](https://soylentnews.org/article.pl?sid=25/12/31/0616216&amp;from=rss) - [Happy New Year 2026 !](https://soylentnews.org/article.pl?sid=25/12/31/0616216&amp;from=rss)
* [2025-12-31, 23:58:28](https://lobste.rs/s/hj01zc/hp_ux_hits_end_life_today_i_m_sad) - [HP-UX hits end-of-life today, and I’m sad](https://www.osnews.com/story/144094/hp-ux-hits-end-of-life-today-and-im-sad/)
* [2025-12-31, 23:54:46](https://news.ycombinator.com/item?id=46449643) - [2025: The Year in LLMs](https://simonwillison.net/2025/Dec/31/the-year-in-llms/)
* [2025-12-31, 23:50:00](https://it.slashdot.org/story/25/12/31/2021253/darkspectre-hackers-spread-malware-to-88-million-chrome-edge-and-firefox-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DarkSpectre Hackers Spread Malware To 8.8 Million Chrome, Edge, and Firefox Users](https://it.slashdot.org/story/25/12/31/2021253/darkspectre-hackers-spread-malware-to-88-million-chrome-edge-and-firefox-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-31, 23:10:00](https://slashdot.org/story/25/12/31/204215/openai-is-paying-employees-more-than-any-major-tech-startup-in-history?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Is Paying Employees More Than Any Major Tech Startup in History](https://slashdot.org/story/25/12/31/204215/openai-is-paying-employees-more-than-any-major-tech-startup-in-history?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-31, 23:04:40](https://lobste.rs/s/gs5ujg/why_object_arrays_soa_pattern_beat) - [Why Object of Arrays (SoA pattern) beat interleaved arrays: a JavaScript performance rabbit hole](https://www.royalbhati.com/posts/js-array-vs-typedarray)
* [2025-12-31, 23:01:03](https://lobste.rs/s/shqikf/way_do_open_permissionless_mesh_network) - [A way to do an open and permissionless mesh network](https://fiatjaf.com/582ccd1d.html)
* [2025-12-31, 22:25:58](https://news.ycombinator.com/item?id=46448998) - [Resistance training load does not determine hypertrophy](https://physoc.onlinelibrary.wiley.com/doi/10.1113/JP289684)
* [2025-12-31, 21:34:29](https://lobste.rs/s/foipu8/what_are_you_planning_learn_2026) - [What are you planning to learn in 2026?](https://lobste.rs/s/foipu8/what_are_you_planning_learn_2026)
* [2025-12-31, 19:46:00](https://soylentnews.org/article.pl?sid=25/12/29/1810235&amp;from=rss) - [Jolla&apos;s Community Linux Phone Surpasses its Funding Goal](https://soylentnews.org/article.pl?sid=25/12/29/1810235&amp;from=rss)
* [2025-12-31, 18:37:34](https://lobste.rs/s/sp7fkl/on_privacy_control_my_tech_setup) - [On Privacy and control. My tech setup](https://toidiu.com/blog/2025-12-25-privacy-and-control/)
* [2025-12-31, 18:26:32](https://news.ycombinator.com/item?id=46446815) - [I canceled my book deal](https://austinhenley.com/blog/canceledbookdeal.html)
* [2025-12-31, 17:42:20](https://news.ycombinator.com/item?id=46446366) - [Web Browsers have stopped blocking pop-ups](https://www.smokingonabike.com/2025/12/31/web-browsers-have-stopped-blocking-pop-ups/)
* [2025-12-31, 17:26:25](https://lobste.rs/s/whjn41/apple_file_system_reference_2020) - [Apple File System Reference (2020)](https://developer.apple.com/support/downloads/Apple-File-System-Reference.pdf)
* [2025-12-31, 15:03:00](https://soylentnews.org/article.pl?sid=25/12/29/185233&amp;from=rss) - [Closure of US Institute Will Do Immense Harm to Climate Research](https://soylentnews.org/article.pl?sid=25/12/29/185233&amp;from=rss)
* [2025-12-31, 13:02:48](https://news.ycombinator.com/item?id=46443744) - [Tell HN: Happy New Year](https://news.ycombinator.com/item?id=46443744)
* [2025-12-31, 10:20:00](https://soylentnews.org/article.pl?sid=25/12/29/1752203&amp;from=rss) - [Company Plans to Build Swarm of 4,000 Giant Mirrors in Low Earth Orbit to “Sell Sunlight\&quot; at Night](https://soylentnews.org/article.pl?sid=25/12/29/1752203&amp;from=rss)
* [2025-12-31, 09:59:10](https://lobste.rs/s/z3ckd3/fixing_buffer_overflow_unix_v4_like_it_s) - [Fixing a Buffer Overflow in UNIX v4 Like It&apos;s 1973](https://sigma-star.at/blog/2025/12/unix-v4-buffer-overflow/)
* [2025-12-31, 09:49:46](https://lobste.rs/s/3cwha2/solid_load_bull) - [A SOLID Load of Bull](https://loup-vaillant.fr/articles/solid-bull)
* [2025-12-31, 05:35:00](https://soylentnews.org/article.pl?sid=25/12/29/1748200&amp;from=rss) - [Spotify Disables Accounts After Open-Source Group Scrapes 86 Million Songs From Platform](https://soylentnews.org/article.pl?sid=25/12/29/1748200&amp;from=rss)
* [2025-12-31, 03:52:12](https://lobste.rs/s/npnchn/what_are_some_interesting_projects_you_ve) - [What are some interesting projects that you&apos;ve done this year?](https://lobste.rs/s/npnchn/what_are_some_interesting_projects_you_ve)
* [2025-12-31, 00:53:00](https://soylentnews.org/article.pl?sid=25/12/29/1742252&amp;from=rss) - [Is Proton Leaving Switzerland? \&quot;Legal Uncertainty\&quot; of Proposed Surveillance Laws Would be the Reason](https://soylentnews.org/article.pl?sid=25/12/29/1742252&amp;from=rss)
* [2025-12-30, 20:04:00](https://soylentnews.org/article.pl?sid=25/12/28/1123222&amp;from=rss) - [Beware of OpenAI&apos;s &apos;Grantwashing&apos; on AI Harms](https://soylentnews.org/article.pl?sid=25/12/28/1123222&amp;from=rss)
* [2025-12-30, 15:23:00](https://soylentnews.org/article.pl?sid=25/12/28/1121243&amp;from=rss) - [First Ever Version of UNIX Written in C is Running Again](https://soylentnews.org/article.pl?sid=25/12/28/1121243&amp;from=rss)
* [2025-12-30, 10:36:00](https://soylentnews.org/article.pl?sid=25/12/28/1117228&amp;from=rss) - [South Korea to Require Facial Recognition for New Mobile Numbers](https://soylentnews.org/article.pl?sid=25/12/28/1117228&amp;from=rss)
* [2025-12-30, 05:53:00](https://soylentnews.org/article.pl?sid=25/12/28/1115208&amp;from=rss) - [Phoenix Emerges as a Modern X Server Written From Scratch in Zig](https://soylentnews.org/article.pl?sid=25/12/28/1115208&amp;from=rss)
* [2025-12-30, 01:12:00](https://soylentnews.org/article.pl?sid=25/12/28/1112249&amp;from=rss) - [Shouting at Seagulls Could Stop Them Stealing Your Food](https://soylentnews.org/article.pl?sid=25/12/28/1112249&amp;from=rss)
* [2025-12-29, 20:25:00](https://soylentnews.org/article.pl?sid=25/12/27/2318230&amp;from=rss) - [Engineer Turns E-Ink Tablet Into Computer Monitor in Linux](https://soylentnews.org/article.pl?sid=25/12/27/2318230&amp;from=rss)
* [2025-12-29, 15:36:00](https://soylentnews.org/article.pl?sid=25/12/27/239245&amp;from=rss) - [LG Forces TV Owners to Use Microsoft ‘AI’ Copilot App You Can&apos;t Uninstall and Nobody Asked for](https://soylentnews.org/article.pl?sid=25/12/27/239245&amp;from=rss)
* [2025-12-29, 10:52:00](https://soylentnews.org/article.pl?sid=25/12/27/235226&amp;from=rss) - [How Recent is \&quot;Recent\&quot;?](https://soylentnews.org/article.pl?sid=25/12/27/235226&amp;from=rss)
* [2025-12-29, 06:09:00](https://soylentnews.org/article.pl?sid=25/12/27/230209&amp;from=rss) - [Microsoft&apos;s Research Dream to Replace All C/C++ With Rust by 2030](https://soylentnews.org/article.pl?sid=25/12/27/230209&amp;from=rss)
* [2025-12-29, 01:17:00](https://soylentnews.org/article.pl?sid=25/12/27/2258256&amp;from=rss) - [Why Swearing Makes You Stronger](https://soylentnews.org/article.pl?sid=25/12/27/2258256&amp;from=rss)
* [2025-12-28, 20:37:00](https://soylentnews.org/article.pl?sid=25/12/26/2021243&amp;from=rss) - [Your Car&apos;s Web Browser May be on the Road to Cyber Ruin](https://soylentnews.org/article.pl?sid=25/12/26/2021243&amp;from=rss)
* [2025-12-28, 17:00:00](https://soylentnews.org/article.pl?sid=25/12/28/1357214&amp;from=rss) - [The 39th Chaos Communication Congress (39C3) Taking Place Now in Hamburg Through 30 Dec 2025](https://soylentnews.org/article.pl?sid=25/12/28/1357214&amp;from=rss)
* [2025-12-28, 15:49:00](https://soylentnews.org/article.pl?sid=25/12/26/2015254&amp;from=rss) - [How OpenAI is Using GPT-5 Codex to Improve the AI Tool Itself](https://soylentnews.org/article.pl?sid=25/12/26/2015254&amp;from=rss)
* [2025-12-28, 11:02:00](https://soylentnews.org/article.pl?sid=25/12/26/205213&amp;from=rss) - [Will AI Kill All the Lawyers?](https://soylentnews.org/article.pl?sid=25/12/26/205213&amp;from=rss)
* [2025-12-28, 06:19:00](https://soylentnews.org/article.pl?sid=25/12/26/1958223&amp;from=rss) - [Texas Sues TV Makers for Taking Screenshots of What People Watch](https://soylentnews.org/article.pl?sid=25/12/26/1958223&amp;from=rss)
* [2025-12-28, 01:33:00](https://soylentnews.org/article.pl?sid=25/12/26/1946250&amp;from=rss) - [Who Sets the Doomsday Clock?](https://soylentnews.org/article.pl?sid=25/12/26/1946250&amp;from=rss)
* [2025-12-28, 01:00:52](https://news.ycombinator.com/item?id=46407292) - [Show HN: I created a tool to design and create foamcore inserts for boardgames](https://boxinsertdesigner.com/)
