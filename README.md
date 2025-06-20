# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software

* [Reworking Memory Management in CRuby: A Practitioner Report](https://blog.peterzhu.ca/assets/ismm_2025.pdf) - Details a technical deep-dive into optimizing CRuby's memory management, essential for Ruby developers. [Discuss on Hacker News](https://lobste.rs/s/ixjwwe/reworking_memory_management_cruby)

* [Adapting nnue-pytorch's binary position format for Lichess](https://lichess.org/@/revoof/blog/adapting-nnue-pytorchs-binary-position-format-for-lichess/cpeeAMeY) - Explores how a complex neural network was adapted into an open-source chess application. [Comments on Lobsters](https://lobste.rs/s/xzzfdu/adapting_nnue_pytorch_s_binary_position)

* [Hurl: Run and test HTTP requests with plain text](https://github.com/Orange-OpenSource/hurl) - Introduces a tool for HTTP API testing using simple text syntax. [Discuss on Hacker News](https://news.ycombinator.com/item?id=44324592)

* [Open source can't coordinate?](https://matklad.github.io/2025/05/20/open-source-cant-coordinate.html) - Examines challenges inherent in collective contributions to open-source projects. [Discuss on Hacker News](https://news.ycombinator.com/item?id=44323904)

## Science and Research

* [NASA Scientists Find Ties Between Earth's Oxygen and Magnetic Field](https://science.nasa.gov/earth/earth-oxygen-magnetic-field-linked/) - Groundbreaking discovery linking planetary oxygen dynamics to Earth's magnetism evolution. [Comments on Hacker News](https://news.ycombinator.com/item?id=44327501)

* [Oklo, the Earth's Two-billion-year-old only Known Natural Nuclear Reactor](https://www.iaea.org/newscenter/news/meet-oklo-the-earths-two-billion-year-old-only-known-natural-nuclear-reactor) - A fascinating look at Earth's natural nuclear process and its evolutionary implications. [Discuss on Hacker News](https://news.ycombinator.com/item?id=44326145)

* [Axolotl Discovery Brings Us Closer Than Ever To Regrowing Human Limbs](https://science.slashdot.org/story/25/06/19/2130210/axolotl-discovery-brings-us-closer-than-ever-to-regrowing-human-limbs?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Highlights breakthroughs in regenerative medical research using axolotl biology. [Discuss on Slashdot](https://science.slashdot.org/story/25/06/19/2130210/axolotl-discovery-brings-us-closer-than-ever-to-regrowing-human-limbs?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Environment and Energy

* [Turning Coalmines Into Solar Energy Plants 'Could Add 300GW of Renewables By 2030'](https://hardware.slashdot.org/story/25/06/20/0129241/turning-coalmines-into-solar-energy-plants-could-add-300gw-of-renewables-by-2030?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Highlights a transformative renewable energy strategy to repurpose old coalmines. [Comments on Slashdot](https://hardware.slashdot.org/story/25/06/20/0129241/turning-coalmines-into-solar-energy-plants-could-add-300gw-of-renewables-by-2030?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Three Years Left To Limit Warming To 1.5C, Leading Scientists Warn](https://news.slashdot.org/story/25/06/19/2122207/three-years-left-to-limit-warming-to-15c-leading-scientists-warn?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Urgent climate research identifying critical intervention deadlines. [Discuss on Slashdot](https://news.slashdot.org/story/25/06/19/2122207/three-years-left-to-limit-warming-to-15c-leading-scientists-warn?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Cultural and Historical Insights

* [Visualizing environmental costs of war in Hayao Miyazaki's Nausicaä](https://jgeekstudies.org/2025/06/20/wilted-lands-and-wounded-worlds-visualizing-environmental-costs-of-war-in-hayao-miyazakis-nausicaa-of-the-valley-of-the-wind/) - A literary and visual examination of war's environmental losses within animated storytelling. [Comments on Hacker News](https://news.ycombinator.com/item?id=44328598)

* [Elliptic curves as art](https://elliptic-curves.art/) - Explores the fusion of advanced mathematics and digital art. [Comments on Lobsters](https://lobste.rs/s/qc3ywx/elliptic_curves_as_art)

## Security and Privacy

* [Malware-Laced GitHub Repos Found Masquerading as Developer Tools](https://klarrio.com/klarrio-discovers-large-scale-malware-network-on-github/) - A cybersecurity warning detailing disguised malicious repositories. [Discuss on Hacker News](https://news.ycombinator.com/item?id=44328389)

* [Massive Privacy Concern: Over 40,000 Security Cameras Are Streaming Unsecured Footage Worldwide](https://soylentnews.org/article.pl?sid=25/06/15/1350208&from=rss) - Exposes systemic vulnerabilities in global surveillance systems. [Comments on SoylentNews](https://soylentnews.org/article.pl?sid=25/06/15/1350208&from=rss)

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

* [2025-06-20, 15:23:29](https://news.ycombinator.com/item?id=44328598) - [Visualizing environmental costs of war in Hayao Miyazaki&apos;s Nausicaä](https://jgeekstudies.org/2025/06/20/wilted-lands-and-wounded-worlds-visualizing-environmental-costs-of-war-in-hayao-miyazakis-nausicaa-of-the-valley-of-the-wind/)
* [2025-06-20, 15:20:00](https://news.slashdot.org/story/25/06/20/159208/semicolon-usage-in-british-literature-drops-nearly-50-since-2000?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Semicolon Usage in British Literature Drops Nearly 50% Since 2000](https://news.slashdot.org/story/25/06/20/159208/semicolon-usage-in-british-literature-drops-nearly-50-since-2000?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-20, 15:05:36](https://lobste.rs/s/ixjwwe/reworking_memory_management_cruby) - [Reworking Memory Management in CRuby: A Practitioner Report](https://blog.peterzhu.ca/assets/ismm_2025.pdf)
* [2025-06-20, 15:03:23](https://news.ycombinator.com/item?id=44328389) - [Malware-Laced GitHub Repos Found Masquerading as Developer Tools](https://klarrio.com/klarrio-discovers-large-scale-malware-network-on-github/)
* [2025-06-20, 15:02:07](https://news.ycombinator.com/item?id=44328373) - [Rise in &apos;alert fatigue&apos; risks phone users disabling news notifications](https://www.theguardian.com/media/2025/jun/20/increase-alert-fatigue-phone-users-disable-news-notifications-study-finds)
* [2025-06-20, 14:57:04](https://news.ycombinator.com/item?id=44328326) - [Phoenix.new – The Remote AI Runtime for Phoenix](https://fly.io/blog/phoenix-new-the-remote-ai-runtime/)
* [2025-06-20, 14:40:00](https://it.slashdot.org/story/25/06/20/1331257/broadcoms-answer-to-vmware-pricing-outrage-youre-using-it-wrong?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Broadcom&apos;s Answer To VMware Pricing Outrage: You&apos;re Using It Wrong](https://it.slashdot.org/story/25/06/20/1331257/broadcoms-answer-to-vmware-pricing-outrage-youre-using-it-wrong?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-20, 14:26:49](https://news.ycombinator.com/item?id=44328032) - [Congestion pricing in Manhattan is a predictable success](https://www.economist.com/united-states/2025/06/19/congestion-pricing-in-manhattan-is-a-predictable-success)
* [2025-06-20, 14:21:00](https://soylentnews.org/article.pl?sid=25/06/19/2327225&amp;from=rss) - [LibreOffice Adds Voice To &apos;Ditch Windows For Linux&apos; Campaign](https://soylentnews.org/article.pl?sid=25/06/19/2327225&amp;from=rss)
* [2025-06-20, 14:02:49](https://lobste.rs/s/xzzfdu/adapting_nnue_pytorch_s_binary_position) - [Adapting nnue-pytorch&apos;s binary position format for Lichess](https://lichess.org/@/revoof/blog/adapting-nnue-pytorchs-binary-position-format-for-lichess/cpeeAMeY)
* [2025-06-20, 14:00:00](https://news.slashdot.org/story/25/06/20/1354239/lawmakers-in-britain-narrowly-approve-bill-to-legalize-assisted-dying?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Lawmakers in Britain Narrowly Approve Bill To Legalize Assisted Dying](https://news.slashdot.org/story/25/06/20/1354239/lawmakers-in-britain-narrowly-approve-bill-to-legalize-assisted-dying?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-20, 13:53:34](https://news.ycombinator.com/item?id=44327759) - [Minimal auto-differentiation engine in Rust (for educational purposes)](https://github.com/e3ntity/nanograd)
* [2025-06-20, 13:44:36](https://lobste.rs/s/2nzhe4/let_s_all_write_good_software) - [Let’s All Write Good Software](https://youtu.be/eZ1mmqlq-mY)
* [2025-06-20, 13:21:31](https://news.ycombinator.com/item?id=44327501) - [NASA Scientists Find Ties Between Earth&apos;s Oxygen and Magnetic Field](https://science.nasa.gov/earth/earth-oxygen-magnetic-field-linked/)
* [2025-06-20, 13:17:02](https://news.ycombinator.com/item?id=44327468) - [Meta announces Oakley smart glasses](https://www.theverge.com/news/690133/meta-oakley-hstn-ai-glasses-price-date)
* [2025-06-20, 13:00:00](https://hardware.slashdot.org/story/25/06/20/0129241/turning-coalmines-into-solar-energy-plants-could-add-300gw-of-renewables-by-2030?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Turning Coalmines Into Solar Energy Plants &apos;Could Add 300GW of Renewables By 2030&apos;](https://hardware.slashdot.org/story/25/06/20/0129241/turning-coalmines-into-solar-energy-plants-could-add-300gw-of-renewables-by-2030?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-20, 12:44:09](https://news.ycombinator.com/item?id=44327173) - [Klong: A Simple Array Language](https://t3x.org/klong/)
* [2025-06-20, 11:31:00](https://lobste.rs/s/4iglq1/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/4iglq1/what_are_you_doing_this_weekend)
* [2025-06-20, 11:08:18](https://news.ycombinator.com/item?id=44326620) - [Show HN: SnapQL – Desktop app to query Postgres with AI](https://github.com/NickTikhonov/snap-ql)
* [2025-06-20, 10:35:34](https://lobste.rs/s/6lqco4/my_a11y_journey) - [My A11y Journey](https://mjg59.dreamwidth.org/72379.html)
* [2025-06-20, 10:00:00](https://yro.slashdot.org/story/25/06/19/2312257/doj-files-to-seize-225-million-in-crypto-from-scammers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DOJ Files To Seize $225 Million In Crypto From Scammers](https://yro.slashdot.org/story/25/06/19/2312257/doj-files-to-seize-225-million-in-crypto-from-scammers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-20, 09:52:50](https://news.ycombinator.com/item?id=44326145) - [Oklo, the Earth&apos;s Two-billion-year-old only Known Natural Nuclear Reactor](https://www.iaea.org/newscenter/news/meet-oklo-the-earths-two-billion-year-old-only-known-natural-nuclear-reactor)
* [2025-06-20, 09:36:00](https://soylentnews.org/article.pl?sid=25/06/19/0919227&amp;from=rss) - [Breakthrough Alzheimer&apos;s Drugs Too Pricey for UK&apos;s National Health Service](https://soylentnews.org/article.pl?sid=25/06/19/0919227&amp;from=rss)
* [2025-06-20, 08:43:42](https://lobste.rs/s/la5mgg/infinite_mac_os_x) - [Infinite Mac OS X](https://blog.persistent.info/2025/03/infinite-mac-os-x.html)
* [2025-06-20, 08:10:34](https://lobste.rs/s/jrm2jd/pipelined_state_machine_corruption) - [pipelined state machine corruption](https://flak.tedunangst.com/post/pipelined-state-machine-corruption)
* [2025-06-20, 07:51:36](https://lobste.rs/s/3ew6rt/javascript_broke_web_called_it_progress) - [JavaScript broke the web (and called it progress)](https://www.jonoalderson.com/conjecture/javascript-broke-the-web-and-called-it-progress/)
* [2025-06-20, 07:00:18](https://news.ycombinator.com/item?id=44325362) - [Qfex (YC X25) – Back End Engineer for a 24/7 Stock Exchange](https://www.ycombinator.com/companies/qfex/jobs/S7XSybx-founding-backend-engineer)
* [2025-06-20, 07:00:00](https://science.slashdot.org/story/25/06/19/236226/our-galaxys-monster-black-hole-is-spinning-almost-as-fast-as-physics-allows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Our Galaxy&apos;s Monster Black Hole Is Spinning Almost As Fast As Physics Allows](https://science.slashdot.org/story/25/06/19/236226/our-galaxys-monster-black-hole-is-spinning-almost-as-fast-as-physics-allows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-20, 05:08:06](https://lobste.rs/s/uf70vb/achieving_excellence_open_source) - [Achieving Excellence in Open Source Software Design](https://www.youtube.com/watch?v=12TJ-zTgiH0)
* [2025-06-20, 04:55:00](https://soylentnews.org/article.pl?sid=25/06/18/1523244&amp;from=rss) - [‘Net Zero’ Is Collapsing in U.S. States](https://soylentnews.org/article.pl?sid=25/06/18/1523244&amp;from=rss)
* [2025-06-20, 03:55:03](https://news.ycombinator.com/item?id=44324592) - [Hurl: Run and test HTTP requests with plain text](https://github.com/Orange-OpenSource/hurl)
* [2025-06-20, 03:30:00](https://news.slashdot.org/story/25/06/19/2122207/three-years-left-to-limit-warming-to-15c-leading-scientists-warn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Three Years Left To Limit Warming To 1.5C, Leading Scientists Warn](https://news.slashdot.org/story/25/06/19/2122207/three-years-left-to-limit-warming-to-15c-leading-scientists-warn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-20, 03:03:05](https://news.ycombinator.com/item?id=44324378) - [Show HN: Ts-SSH – SSH over Tailscale without running the daemon](https://github.com/derekg/ts-ssh)
* [2025-06-20, 02:58:39](https://lobste.rs/s/hnfoam/zig_rust_2023) - [Zig And Rust (2023)](https://matklad.github.io/2023/03/26/zig-and-rust.html)
* [2025-06-20, 02:30:00](https://tech.slashdot.org/story/25/06/20/0221229/social-media-ban-moves-closer-in-australia-after-tech-trial?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Social Media Ban Moves Closer in Australia After Tech Trial](https://tech.slashdot.org/story/25/06/20/0221229/social-media-ban-moves-closer-in-australia-after-tech-trial?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-20, 01:56:16](https://news.ycombinator.com/item?id=44324084) - [Asterinas: A new Linux-compatible kernel project](https://lwn.net/SubscriberLink/1022920/ad60263cd13c8a13/)
* [2025-06-20, 01:44:55](https://lobste.rs/s/ibipnj/feeling_blue_noroff_inside) - [Feeling Blue(Noroff): Inside a Sophisticated DPRK Web3 Intrusion](https://www.huntress.com/blog/inside-bluenoroff-web3-intrusion-analysis)
* [2025-06-20, 01:35:36](https://lobste.rs/s/bwbvcn/revisiting_knuth_s_premature) - [Revisiting Knuth’s “Premature Optimization” Paper](https://probablydance.com/2025/06/19/revisiting-knuths-premature-optimization-paper/)
* [2025-06-20, 01:10:00](https://science.slashdot.org/story/25/06/19/2130210/axolotl-discovery-brings-us-closer-than-ever-to-regrowing-human-limbs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Axolotl Discovery Brings Us Closer Than Ever To Regrowing Human Limbs](https://science.slashdot.org/story/25/06/19/2130210/axolotl-discovery-brings-us-closer-than-ever-to-regrowing-human-limbs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-20, 01:06:12](https://news.ycombinator.com/item?id=44323904) - [Open source can&apos;t coordinate?](https://matklad.github.io/2025/05/20/open-source-cant-coordinate.html)
* [2025-06-20, 00:30:00](https://science.slashdot.org/story/25/06/19/2256256/mit-chemical-engineers-develop-new-way-to-separate-crude-oil?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [MIT Chemical Engineers Develop New Way To Separate Crude Oil](https://science.slashdot.org/story/25/06/19/2256256/mit-chemical-engineers-develop-new-way-to-separate-crude-oil?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-20, 00:18:37](https://lobste.rs/s/4gcvo0/metaobject_protocols_why_we_want_them) - [Metaobject Protocols: Why we want them and what else they can do (1993)](https://cseweb.ucsd.edu/%7Evahdat/papers/mop.pdf)
* [2025-06-20, 00:13:00](https://soylentnews.org/article.pl?sid=25/06/18/1445231&amp;from=rss) - [Fermilab G-2 Collaboration Publishes Final Result](https://soylentnews.org/article.pl?sid=25/06/18/1445231&amp;from=rss)
* [2025-06-19, 23:50:00](https://apple.slashdot.org/story/25/06/19/230226/macos-tahoe-beta-drops-firewire-support?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [macOS Tahoe Beta Drops FireWire Support](https://apple.slashdot.org/story/25/06/19/230226/macos-tahoe-beta-drops-firewire-support?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-19, 23:17:39](https://news.ycombinator.com/item?id=44323389) - [Giant, all-seeing telescope is set to revolutionize astronomy](https://www.science.org/content/article/giant-all-seeing-telescope-set-revolutionize-astronomy)
* [2025-06-19, 23:10:00](https://slashdot.org/story/25/06/19/213255/publishers-facing-existential-threat-from-ai-cloudflare-ceo-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Publishers Facing Existential Threat From AI, Cloudflare CEO Says](https://slashdot.org/story/25/06/19/213255/publishers-facing-existential-threat-from-ai-cloudflare-ceo-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-19, 22:49:49](https://news.ycombinator.com/item?id=44323253) - [Show HN: I wrote a new BitTorrent tracker in Elixir](https://github.com/Dahrkael/ExTracker)
* [2025-06-19, 22:30:00](https://entertainment.slashdot.org/story/25/06/19/2050243/chinese-studios-plan-ai-powered-remakes-of-kung-fu-classics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chinese Studios Plan AI-Powered Remakes of Kung Fu Classics](https://entertainment.slashdot.org/story/25/06/19/2050243/chinese-studios-plan-ai-powered-remakes-of-kung-fu-classics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-19, 22:18:45](https://news.ycombinator.com/item?id=44323045) - [Literate programming tool for any language](https://github.com/zyedidia/Literate)
* [2025-06-19, 21:50:00](https://it.slashdot.org/story/25/06/19/2046206/microsoft-365-brings-the-shutters-down-on-legacy-protocols?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft 365 Brings the Shutters Down On Legacy Protocols](https://it.slashdot.org/story/25/06/19/2046206/microsoft-365-brings-the-shutters-down-on-legacy-protocols?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-19, 21:10:00](https://science.slashdot.org/story/25/06/19/2034234/spacex-starship-explodes-on-test-stand?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SpaceX Starship Explodes On Test Stand](https://science.slashdot.org/story/25/06/19/2034234/spacex-starship-explodes-on-test-stand?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-19, 19:56:36](https://lobste.rs/s/ofnqos/less_humble_programmer_2023) - [The Less Humble Programmer (2023)](https://digitalhumanities.org/dhq/vol/17/2/000698/000698.html)
* [2025-06-19, 19:23:00](https://soylentnews.org/article.pl?sid=25/06/18/1420200&amp;from=rss) - [Welcome to the ‘Infinite Workday’ of 8 P.M. Meetings and Constant Messages](https://soylentnews.org/article.pl?sid=25/06/18/1420200&amp;from=rss)
* [2025-06-19, 19:20:54](https://news.ycombinator.com/item?id=44321672) - [Compiling LLMs into a MegaKernel: A path to low-latency inference](https://zhihaojia.medium.com/compiling-llms-into-a-megakernel-a-path-to-low-latency-inference-cf7840913c17)
* [2025-06-19, 18:09:51](https://lobste.rs/s/76i5wh/i_want_love_linux_it_doesn_t_love_me_back) - [I Want to Love Linux. It Doesn’t Love Me Back: Post 4 – Wayland Is Growing Up. And Now We Don’t Have a Choice](https://fireborn.mataroa.blog/blog/i-want-to-love-linux-it-doesnt-love-me-back-post-4-wayland-is-growing-up-and-now-we-dont-have-a-choice/)
* [2025-06-19, 17:26:54](https://lobste.rs/s/5dbwyr/homegrown_closures_for_uxn) - [Homegrown closures for Uxn](https://krzysckh.org/b/Homegrown-closures-for-uxn.html)
* [2025-06-19, 16:41:29](https://lobste.rs/s/ac19tp/2048_with_only_64_bits_state) - [2048 with only 64 bits of state](https://github.com/izabera/bitwise-challenge-2048)
* [2025-06-19, 15:17:33](https://lobste.rs/s/jtrrow/dynamic_graph_approach_immediate_cycle) - [A Dynamic Graph Approach to Immediate Cycle Collection](https://dl.acm.org/doi/10.1145/3735950.3735953)
* [2025-06-19, 14:39:00](https://soylentnews.org/article.pl?sid=25/06/18/1415223&amp;from=rss) - [Marijuana to Treat Autism? Some Parents Say Yes](https://soylentnews.org/article.pl?sid=25/06/18/1415223&amp;from=rss)
* [2025-06-19, 12:00:14](https://lobste.rs/s/kmizrf/what_would_kubernetes_2_0_look_like) - [What Would a Kubernetes 2.0 Look Like](https://matduggan.com/what-would-a-kubernetes-2-0-look-like/)
* [2025-06-19, 10:27:52](https://lobste.rs/s/jnhsdh/2025_stack_overflow_developer_survey) - [2025 Stack Overflow Developer Survey](https://stackoverflow.az1.qualtrics.com/jfe/form/SV_1MNG2CYTY2AzkAm)
* [2025-06-19, 10:10:27](https://lobste.rs/s/cjnt2y/rewriting_kafka_rust_async_insights) - [Rewriting Kafka in Rust Async: Insights and Lessons Learned in Rust](https://wangjunfei.com/2025/06/18/Rewriting-Kafka-in-Rust-Async-Insights-and-Lessons-Learned/)
* [2025-06-19, 09:54:00](https://soylentnews.org/article.pl?sid=25/06/18/0134253&amp;from=rss) - [Reddit User Surprised When 1960s Computer Panel Emerged From Collapsed Family Garage](https://soylentnews.org/article.pl?sid=25/06/18/0134253&amp;from=rss)
* [2025-06-19, 08:52:49](https://lobste.rs/s/qc3ywx/elliptic_curves_as_art) - [Elliptic curves as art](https://elliptic-curves.art/)
* [2025-06-19, 06:37:07](https://lobste.rs/s/blwshw/charmbracelet_fang_cli_starter_kit) - [charmbracelet/fang: The CLI starter kit](https://github.com/charmbracelet/fang)
* [2025-06-19, 05:08:00](https://soylentnews.org/article.pl?sid=25/06/18/0130206&amp;from=rss) - [Zero-Click AI Vulnerability Exposes Microsoft 365 Copilot Data Without User Interaction](https://soylentnews.org/article.pl?sid=25/06/18/0130206&amp;from=rss)
* [2025-06-19, 00:33:21](https://news.ycombinator.com/item?id=44314423) - [Andrej Karpathy: Software in the era of AI [video]](https://www.youtube.com/watch?v=LCEmiRjPEtQ)
* [2025-06-19, 00:22:00](https://soylentnews.org/article.pl?sid=25/06/18/0123206&amp;from=rss) - [Honda Shows Low Speed, Narrow BEV for City Delivery](https://soylentnews.org/article.pl?sid=25/06/18/0123206&amp;from=rss)
* [2025-06-18, 21:08:20](https://lobste.rs/s/5moehg/quick_notes_on_brief_agentic_coding) - [Quick notes on a brief agentic coding experience](https://olano.dev/blog/agentic-coding-experience/)
* [2025-06-18, 19:38:00](https://soylentnews.org/article.pl?sid=25/06/18/0120221&amp;from=rss) - [Trump&apos;s Cuts to NASA and the National Science Foundation Will Have Huge Consequences](https://soylentnews.org/article.pl?sid=25/06/18/0120221&amp;from=rss)
* [2025-06-18, 14:50:00](https://soylentnews.org/article.pl?sid=25/06/18/0115237&amp;from=rss) - [Google&apos;s Advanced Protection Arrives on Android: Should You Use It?](https://soylentnews.org/article.pl?sid=25/06/18/0115237&amp;from=rss)
* [2025-06-18, 14:05:58](https://lobste.rs/s/8t6uxp/server_doesn_t_render_anything) - [The Server Doesn&apos;t Render Anything](https://unplannedobsolescence.com/blog/the-server-doesnt-render/)
* [2025-06-18, 10:04:00](https://soylentnews.org/article.pl?sid=25/06/17/0655244&amp;from=rss) - [The Effect of Physical Fitness on Mortality is Overestimated](https://soylentnews.org/article.pl?sid=25/06/17/0655244&amp;from=rss)
* [2025-06-18, 05:17:00](https://soylentnews.org/article.pl?sid=25/06/17/0651210&amp;from=rss) - [SmartAttack Uses Smartwatches to Steal Data From Air-Gapped Systems](https://soylentnews.org/article.pl?sid=25/06/17/0651210&amp;from=rss)
* [2025-06-18, 00:32:00](https://soylentnews.org/article.pl?sid=25/06/17/0648206&amp;from=rss) - [Kali Linux 2025.2 released with 13 new tools, car hacking updates](https://soylentnews.org/article.pl?sid=25/06/17/0648206&amp;from=rss)
* [2025-06-17, 22:24:18](https://news.ycombinator.com/item?id=44304634) - [A &apos;70s performance artist who became a hero to &apos;garbage men&apos;](https://www.nytimes.com/2025/06/14/nyregion/maintenance-artist-mierle-laderman-ukeles.html)
* [2025-06-17, 21:22:23](https://news.ycombinator.com/item?id=44304107) - [The Right Chemistry: How Jean Harlow became a ‘platinum blond’ (2020)](https://montrealgazette.com/opinion/columnists/article249177.html)
* [2025-06-17, 19:45:00](https://soylentnews.org/article.pl?sid=25/06/17/0358247&amp;from=rss) - [You Don&apos;t Have to Almost Die to be Happy at Work, but It Helps](https://soylentnews.org/article.pl?sid=25/06/17/0358247&amp;from=rss)
* [2025-06-17, 19:37:49](https://news.ycombinator.com/item?id=44303011) - [Reworking Memory Management in CRuby [pdf]](https://blog.peterzhu.ca/assets/ismm_2025.pdf)
* [2025-06-17, 15:57:15](https://news.ycombinator.com/item?id=44300641) - [ELIZA Reanimated: Restoring the Mother of All Chatbots](https://www.computer.org/csdl/magazine/an/2025/02/11030922/27sQDLuL7Uc)
* [2025-06-17, 15:05:00](https://soylentnews.org/article.pl?sid=25/06/16/0136200&amp;from=rss) - [4Chan Under Investigation by Uk Ofcom Over Online Safety Concerns](https://soylentnews.org/article.pl?sid=25/06/16/0136200&amp;from=rss)
* [2025-06-17, 14:52:00](https://soylentnews.org/breakingnews/article.pl?sid=25/06/17/1439252&amp;from=rss) - [This Is Not A Drill](https://soylentnews.org/breakingnews/article.pl?sid=25/06/17/1439252&amp;from=rss)
* [2025-06-17, 12:33:44](https://news.ycombinator.com/item?id=44298360) - [Pipelined State Machine Corruption](https://flak.tedunangst.com/post/pipelined-state-machine-corruption)
* [2025-06-17, 10:18:00](https://soylentnews.org/article.pl?sid=25/06/16/0131240&amp;from=rss) - [Behold the First Images of the Sun’s South Pole](https://soylentnews.org/article.pl?sid=25/06/16/0131240&amp;from=rss)
* [2025-06-17, 05:30:00](https://soylentnews.org/article.pl?sid=25/06/16/0115212&amp;from=rss) - [Can We Stop Big Tech From Controlling the Internet With AI Agents?](https://soylentnews.org/article.pl?sid=25/06/16/0115212&amp;from=rss)
* [2025-06-17, 04:18:38](https://news.ycombinator.com/item?id=44295725) - [Virtual cells](https://udara.io/science/virtual-cells/)
* [2025-06-17, 00:43:00](https://soylentnews.org/article.pl?sid=25/06/16/016221&amp;from=rss) - [TSMC Slows Down Global Plans Due to Soft Demand, but Accelerates Arizona Fab Plans by Six Months](https://soylentnews.org/article.pl?sid=25/06/16/016221&amp;from=rss)
* [2025-06-16, 20:09:17](https://news.ycombinator.com/item?id=44292965) - [The Ecosystem Dynamics That Can Make or Break an Invasion](https://www.quantamagazine.org/the-ecosystem-dynamics-that-can-make-or-break-an-invasion-20250616/)
* [2025-06-16, 19:56:00](https://soylentnews.org/article.pl?sid=25/06/16/0057231&amp;from=rss) - [Washington Post in Talks With Substack About Using its Writers](https://soylentnews.org/article.pl?sid=25/06/16/0057231&amp;from=rss)
* [2025-06-16, 16:28:10](https://news.ycombinator.com/item?id=44291052) - [A Brief, Incomplete, and Mostly Wrong History of Robotics](https://generalrobots.substack.com/p/a-brief-incomplete-and-mostly-wrong)
* [2025-06-16, 16:20:32](https://news.ycombinator.com/item?id=44290992) - [College baseball, venture capital, and the long maybe](https://bcantrill.dtrace.org/2025/06/15/college-baseball-venture-capital-and-the-long-maybe/)
* [2025-06-16, 15:11:00](https://soylentnews.org/article.pl?sid=25/06/16/0052252&amp;from=rss) - [Huawei CEO Says Washington Has Exaggerated its Achievements, Saying the Company Isn&apos;t That Powerful](https://soylentnews.org/article.pl?sid=25/06/16/0052252&amp;from=rss)
* [2025-06-16, 10:25:00](https://soylentnews.org/article.pl?sid=25/06/15/145200&amp;from=rss) - [Buried Under 2 Kilometers of Antarctic Ice, Scientists Find a 34-Million-Year-Old Lost World](https://soylentnews.org/article.pl?sid=25/06/15/145200&amp;from=rss)
* [2025-06-16, 05:41:00](https://soylentnews.org/article.pl?sid=25/06/15/1353252&amp;from=rss) - [Photonic Processor Could Streamline 6G Wireless Signal Processing](https://soylentnews.org/article.pl?sid=25/06/15/1353252&amp;from=rss)
* [2025-06-16, 00:58:00](https://soylentnews.org/article.pl?sid=25/06/15/1350208&amp;from=rss) - [Massive Privacy Concern: Over 40,000 Security Cameras Are Streaming Unsecured Footage Worldwide](https://soylentnews.org/article.pl?sid=25/06/15/1350208&amp;from=rss)
