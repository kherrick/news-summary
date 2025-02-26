# [News Summary](https://kherrick.github.io/news-summary/)

## Tech and Programming Developments

* [Framework introduces its first desktop, a unique mini ITX gaming PC](https://arstechnica.com/gadgets/2025/02/framework-known-for-upgradable-laptops-intros-not-particularly-upgradable-desktop/) ([Comments](https://news.ycombinator.com/item?id=43176314))

* [DeepGEMM, efficient FP8 GEMM kernels with fine-grained scaling](https://github.com/deepseek-ai/DeepGEMM) ([Comments](https://news.ycombinator.com/item?id=43179478))

* [EdgeDB rebrands to Gel and emphasizes PostgreSQL's future](https://www.geldata.com/blog/edgedb-is-now-gel-and-postgres-is-the-future) ([Comments](https://news.ycombinator.com/item?id=43177931))

* [Google, Qualcomm to support eight years of Android updates](https://hardware.slashdot.org/story/25/02/25/2132227/google-qualcomm-will-support-8-years-of-android-updates?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Why Ruby on Rails still matters](https://www.contraption.co/rails-versus-nextjs/) ([Comments](https://lobste.rs/s/fwglvt/why_ruby_on_rails_still_matters))

* [Material Theme pulled from VS Code's marketplace](https://github.com/material-theme/vsc-material-theme/discussions/1313) ([Comments](https://news.ycombinator.com/item?id=43178831))

## Scientific and Space Exploration

* [New maps reveal the chaotic space-time inside black holes](https://www.quantamagazine.org/new-maps-of-the-bizarre-chaotic-space-time-inside-black-holes-20250224/) ([Comments](https://news.ycombinator.com/item?id=43173773))

* [Astronomers uncover the topsy-turvy atmosphere of a distant planet](https://soylentnews.org/article.pl?sid=25/02/24/0723218&from=rss)

## AI and Machine Learning Innovations

* [Emergent Misalignment: How finetuning can misalign LLMs](https://martins1612.github.io/emergent_misalignment_betley.pdf) ([Comments](https://news.ycombinator.com/item?id=43176553))

* [Toyota completes phase 1 of its futuristic city in Japan](https://www3.nhk.or.jp/nhkworld/en/news/20250225_B03/) ([Comments](https://news.ycombinator.com/item?id=43180283))

* [Google's Gemini Code Assist is now free for developers](https://tech.slashdot.org/story/25/02/25/1640216/google-makes-gemini-code-assist-free?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Ethics and Policies

* [FBI uses restricted consumer DNA data to identify suspect in Idaho killings](https://yro.slashdot.org/story/25/02/26/0044239/to-identify-suspect-in-idaho-killings-fbi-used-restricted-consumer-dna-data?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://yro.slashdot.org/story/25/02/26/0044239/to-identify-suspect-in-idaho-killings-fbi-used-restricted-consumer-dna-data?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Denmark prepares to ban mobile phones in schools and clubs](https://mobile.slashdot.org/story/25/02/26/0032230/denmark-to-ban-mobile-phones-in-schools-and-after-school-clubs?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [DoorDash compensates drivers $17M for stolen tips](https://news.slashdot.org/story/25/02/25/222252/doordash-paying-drivers-17-million-for-stolen-tips?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Environment and Global Energy

* [BP shifts focus away from green investment towards traditional oil and gas projects](https://www.bbc.com/news/articles/c3374ekd11po) ([Comments](https://news.ycombinator.com/item?id=43181176))

* [Global sales of combustion engine cars have peaked](https://tech.slashdot.org/story/25/02/25/1843248/global-sales-of-combustion-engine-cars-have-peaked?utm_source=rss1.0mainlinkanon&utm_medium=feed)

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

* [2025-02-26, 06:43:50](https://lobste.rs/s/fi97rp/useless_use_cat_award) - [Useless Use of Cat Award](https://porkmail.org/era/unix/award)
* [2025-02-26, 06:12:31](https://news.ycombinator.com/item?id=43181176) - [BP to slash green investment and ramp up gas and oil](https://www.bbc.com/news/articles/c3374ekd11po)
* [2025-02-26, 05:59:34](https://lobste.rs/s/8qygqi/interprocedural_sparse_conditional) - [Interprocedural Sparse Conditional Type Propagation](https://bernsteinbear.com/blog/sctp/)
* [2025-02-26, 05:42:02](https://lobste.rs/s/ersq0z/apl_since_1978) - [APL since 1978](https://dl.acm.org/doi/10.1145/3386319)
* [2025-02-26, 05:25:52](https://lobste.rs/s/fwglvt/why_ruby_on_rails_still_matters) - [Why Ruby on Rails still matters](https://www.contraption.co/rails-versus-nextjs/)
* [2025-02-26, 03:33:00](https://yro.slashdot.org/story/25/02/26/0044239/to-identify-suspect-in-idaho-killings-fbi-used-restricted-consumer-dna-data?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [To Identify Suspect In Idaho Killings, FBI Used Restricted Consumer DNA Data](https://yro.slashdot.org/story/25/02/26/0044239/to-identify-suspect-in-idaho-killings-fbi-used-restricted-consumer-dna-data?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-26, 03:28:54](https://news.ycombinator.com/item?id=43180283) - [Toyota completes phase 1 construction of futuristic city](https://www3.nhk.or.jp/nhkworld/en/news/20250225_B03/)
* [2025-02-26, 02:33:00](https://soylentnews.org/article.pl?sid=25/02/24/1625242&from=rss) - [US Treasury Beneficial Ownership Information Reporting is Back On (Again)](https://soylentnews.org/article.pl?sid=25/02/24/1625242&from=rss)
* [2025-02-26, 01:40:00](https://hardware.slashdot.org/story/25/02/26/0110204/worlds-first-front-flippin-humanoid-robot?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [World's First Front-Flippin' Humanoid Robot](https://hardware.slashdot.org/story/25/02/26/0110204/worlds-first-front-flippin-humanoid-robot?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-26, 01:02:24](https://news.ycombinator.com/item?id=43179478) - [DeepGEMM: clean and efficient FP8 GEMM kernels with fine-grained scaling](https://github.com/deepseek-ai/DeepGEMM)
* [2025-02-26, 01:00:00](https://mobile.slashdot.org/story/25/02/26/0032230/denmark-to-ban-mobile-phones-in-schools-and-after-school-clubs?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Denmark To Ban Mobile Phones In Schools and After-School Clubs](https://mobile.slashdot.org/story/25/02/26/0032230/denmark-to-ban-mobile-phones-in-schools-and-after-school-clubs?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-26, 00:20:00](https://hardware.slashdot.org/story/25/02/26/0018228/a-major-blackout-hits-chile-leaving-millions-without-power?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [A Major Blackout Hits Chile, Leaving Millions Without Power](https://hardware.slashdot.org/story/25/02/26/0018228/a-major-blackout-hits-chile-leaving-millions-without-power?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-25, 23:30:00](https://news.slashdot.org/story/25/02/25/222252/doordash-paying-drivers-17-million-for-stolen-tips?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [DoorDash Paying Drivers $17 Million For Stolen Tips](https://news.slashdot.org/story/25/02/25/222252/doordash-paying-drivers-17-million-for-stolen-tips?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-25, 23:24:40](https://news.ycombinator.com/item?id=43178831) - [Material Theme has been pulled from VS Code's marketplace](https://github.com/material-theme/vsc-material-theme/discussions/1313)
* [2025-02-25, 22:50:00](https://games.slashdot.org/story/25/02/25/2152240/warner-bros-discovery-slashes-gaming-business-closing-three-studios?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Warner Bros Discovery Slashes Gaming Business, Closing Three Studios](https://games.slashdot.org/story/25/02/25/2152240/warner-bros-discovery-slashes-gaming-business-closing-three-studios?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-25, 22:34:40](https://lobste.rs/s/6qm5bc/emergent_misalignment) - [Emergent Misalignment](https://www.emergent-misalignment.com)
* [2025-02-25, 22:13:22](https://news.ycombinator.com/item?id=43178225) - [Voker (YC S24) is hiring an LA-based full stack AI software engineer](https://www.linkedin.com/jobs/view/4165715593)
* [2025-02-25, 22:10:00](https://hardware.slashdot.org/story/25/02/25/2144252/framework-moves-into-desktops-2-in-1-laptops?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Framework Moves Into Desktops, 2-In-1 Laptops](https://hardware.slashdot.org/story/25/02/25/2144252/framework-moves-into-desktops-2-in-1-laptops?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-25, 21:50:00](https://soylentnews.org/article.pl?sid=25/02/24/1621220&from=rss) - [Polish Treasure Hunters Unearth Seriously Badass Two-Handed Medieval Sword](https://soylentnews.org/article.pl?sid=25/02/24/1621220&from=rss)
* [2025-02-25, 21:47:06](https://news.ycombinator.com/item?id=43177931) - [EdgeDB is now Gel and Postgres is the future](https://www.geldata.com/blog/edgedb-is-now-gel-and-postgres-is-the-future)
* [2025-02-25, 21:33:00](https://hardware.slashdot.org/story/25/02/25/2132227/google-qualcomm-will-support-8-years-of-android-updates?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google, Qualcomm Will Support 8 Years of Android Updates](https://hardware.slashdot.org/story/25/02/25/2132227/google-qualcomm-will-support-8-years-of-android-updates?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-25, 20:41:30](https://news.ycombinator.com/item?id=43177117) - [Show HN: MyCoder, an open source Claude-Code alternative](https://github.com/drivecore/mycoder)
* [2025-02-25, 20:08:08](https://lobste.rs/s/oblb9x/framework_2nd_gen_event) - [Framework (2nd Gen) Event](https://www.youtube.com/watch?v=-8k7jTF_JCg)
* [2025-02-25, 19:59:41](https://news.ycombinator.com/item?id=43176553) - [Emergent Misalignment: Narrow finetuning can produce broadly misaligned LLMs [pdf]](https://martins1612.github.io/emergent_misalignment_betley.pdf)
* [2025-02-25, 19:39:21](https://news.ycombinator.com/item?id=43176314) - [Framework's first desktop is a strange–but unique–mini ITX gaming PC](https://arstechnica.com/gadgets/2025/02/framework-known-for-upgradable-laptops-intros-not-particularly-upgradable-desktop/)
* [2025-02-25, 19:37:00](https://news.slashdot.org/story/25/02/25/1937222/most-us-workers-avoid-ai-chatbots-despite-productivity-benefits-pew-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Most US Workers Avoid AI Chatbots Despite Productivity Benefits, PEW Finds](https://news.slashdot.org/story/25/02/25/1937222/most-us-workers-avoid-ai-chatbots-despite-productivity-benefits-pew-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-25, 18:44:00](https://tech.slashdot.org/story/25/02/25/1843248/global-sales-of-combustion-engine-cars-have-peaked?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Global Sales of Combustion Engine Cars Have Peaked](https://tech.slashdot.org/story/25/02/25/1843248/global-sales-of-combustion-engine-cars-have-peaked?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-25, 18:39:10](https://news.ycombinator.com/item?id=43175628) - [I Went to SQL Injection Court](https://sockpuppet.org/blog/2025/02/09/fixing-illinois-foia/)
* [2025-02-25, 18:12:31](https://news.ycombinator.com/item?id=43175315) - [The XB-70 (2019)](http://codex99.com/photography/the-xb70.html)
* [2025-02-25, 18:08:00](https://tech.slashdot.org/story/25/02/25/188257/isps-brace-for-state-level-price-regulation-as-new-yorks-15-broadband-law-sets-precedent?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [ISPs Brace For State-Level Price Regulation as New York's $15 Broadband Law Sets Precedent](https://tech.slashdot.org/story/25/02/25/188257/isps-brace-for-state-level-price-regulation-as-new-yorks-15-broadband-law-sets-precedent?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-25, 17:37:07](https://news.ycombinator.com/item?id=43174910) - [Hard problems that reduce to document ranking](https://noperator.dev/posts/document-ranking-for-complex-problems/)
* [2025-02-25, 17:28:00](https://games.slashdot.org/story/25/02/25/1728223/wyden-asks-for-rules-about-whether-you-own-your-digital-purchases?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Wyden Asks For Rules About Whether You Own Your Digital Purchases](https://games.slashdot.org/story/25/02/25/1728223/wyden-asks-for-rules-about-whether-you-own-your-digital-purchases?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-25, 17:06:00](https://soylentnews.org/article.pl?sid=25/02/24/1617229&from=rss) - [21st Century C++](https://soylentnews.org/article.pl?sid=25/02/24/1617229&from=rss)
* [2025-02-25, 16:45:00](https://tech.slashdot.org/story/25/02/25/1640216/google-makes-gemini-code-assist-free?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google Makes Gemini Code Assist Free](https://tech.slashdot.org/story/25/02/25/1640216/google-makes-gemini-code-assist-free?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-25, 16:15:39](https://news.ycombinator.com/item?id=43173773) - [New maps of the chaotic space-time inside black holes](https://www.quantamagazine.org/new-maps-of-the-bizarre-chaotic-space-time-inside-black-holes-20250224/)
* [2025-02-25, 16:14:00](https://slashdot.org/story/25/02/25/1614220/call-of-duty-maker-activision-admits-to-using-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Call of Duty Maker Activision Admits To Using AI](https://slashdot.org/story/25/02/25/1614220/call-of-duty-maker-activision-admits-to-using-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-25, 15:51:54](https://news.ycombinator.com/item?id=43173462) - [Hyperspace](https://hypercritical.co/2025/02/25/hyperspace)
* [2025-02-25, 15:45:17](https://news.ycombinator.com/item?id=43173378) - [Launch HN: Browser Use (YC W25) – open-source web agents](https://github.com/browser-use/browser-use)
* [2025-02-25, 15:33:00](https://slashdot.org/story/25/02/25/1533243/deepseek-accelerates-ai-model-timeline-as-market-reacts-to-low-cost-breakthrough?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [DeepSeek Accelerates AI Model Timeline as Market Reacts To Low-Cost Breakthrough](https://slashdot.org/story/25/02/25/1533243/deepseek-accelerates-ai-model-timeline-as-market-reacts-to-low-cost-breakthrough?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-25, 15:17:29](https://lobste.rs/s/o1golw/turbocharging_v8_with_mutable_heap) - [Turbocharging V8 with mutable heap numbers](https://v8.dev/blog/mutable-heap-number)
* [2025-02-25, 15:15:18](https://lobste.rs/s/swtkwg/why_how_i_version_my_blog) - [Why and How I Version My Blog](https://rishikeshs.com/blog-version/)
* [2025-02-25, 14:29:58](https://lobste.rs/s/vpfqm2/gleam_coming_from_erlang) - [Gleam, coming from Erlang](https://olano.dev/blog/gleam-coming-from-erlang)
* [2025-02-25, 13:55:35](https://lobste.rs/s/q2kme9/zone_maps_queries_go_brrr) - [Zone maps, or “queries go brrr”](https://blog.spiraldb.com/zone-maps-or-queries-go-brrr/)
* [2025-02-25, 13:32:26](https://lobste.rs/s/7u7hxw/rust_edition_2024_annotated) - [Rust edition 2024 annotated](https://bertptrs.nl/2025/02/23/rust-edition-2024-annotated.html)
* [2025-02-25, 13:19:12](https://lobste.rs/s/f4oemt/reviving_old_kindle_paperwhite_7th_gen) - [Reviving an Old Kindle Paperwhite 7th Gen](https://terminalbytes.com/reviving-kindle-paperwhite-7th-gen/)
* [2025-02-25, 12:53:15](https://news.ycombinator.com/item?id=43171239) - [Embedding Python in Elixir, it's fine](https://dashbit.co/blog/running-python-in-elixir-its-fine)
* [2025-02-25, 12:23:00](https://soylentnews.org/politics/article.pl?sid=25/02/24/1615209&from=rss) - [Trump Threatens Tariffs On Any Nation That Taxes Big Tech](https://soylentnews.org/politics/article.pl?sid=25/02/24/1615209&from=rss)
* [2025-02-25, 12:04:12](https://lobste.rs/s/2ekqcs/why_common_lisp) - [Why Common Lisp](https://kingcons.io/notes/common-lisp.html)
* [2025-02-25, 11:23:16](https://lobste.rs/s/xslm1t/zlib_rs_is_faster_than_c) - [zlib-rs is faster than C](https://trifectatech.org/blog/zlib-rs-is-faster-than-c/)
* [2025-02-25, 11:22:06](https://news.ycombinator.com/item?id=43170545) - [Chicory: A JVM native WebAssembly runtime](https://chicory.dev/)
* [2025-02-25, 11:15:49](https://lobste.rs/s/hyhkxi/mixing_up_public_private_keys_openid) - [Mixing up Public and Private Keys in OpenID Connect deployments](https://blog.hboeck.de/archives/909-Mixing-up-Public-and-Private-Keys-in-OpenID-Connect-deployments.html)
* [2025-02-25, 10:34:00](https://soylentnews.org/meta/article.pl?sid=25/02/21/1425224&from=rss) - [Adoption of Site Documentation - THIS IS THE VOTE - RESTORED](https://soylentnews.org/meta/article.pl?sid=25/02/21/1425224&from=rss)
* [2025-02-25, 10:24:34](https://news.ycombinator.com/item?id=43170155) - [Evaluating modular RAG with reasoning models](https://www.kapa.ai/blog/evaluating-modular-rag-with-reasoning-models)
* [2025-02-25, 10:04:29](https://lobste.rs/s/noeevm/closer_train_station_worse_kebab) - [\"The closer to the train station, the worse the kebab\"](https://www.jmspae.se/write-ups/kebabs-train-stations/)
* [2025-02-25, 09:57:02](https://lobste.rs/s/wrpt6v/what_would_happen_if_we_didn_t_use_tcp_udp) - [What would happen if we didn't use TCP or UDP?](https://github.com/Hawzen/hdp)
* [2025-02-25, 09:15:14](https://news.ycombinator.com/item?id=43169773) - [A possible future of Python in the browser](https://lukasz.langa.pl/f37aa97a-9ea3-4aeb-b6a0-9daeea5a7505/)
* [2025-02-25, 09:10:11](https://lobste.rs/s/ige5d6/tcl_tk_application_binaries_through_go) - [Tcl/Tk application binaries through Go](https://wiki.tcl-lang.org/page/Tcl%2FTk+application+binaries+through+Go)
* [2025-02-25, 07:37:00](https://soylentnews.org/article.pl?sid=25/02/24/0728229&from=rss) - [Building a Chipmaking Fab in the US Costs Twice as Much, Takes Twice as Long as in Taiwan](https://soylentnews.org/article.pl?sid=25/02/24/0728229&from=rss)
* [2025-02-25, 05:09:40](https://lobste.rs/s/r8lrfk/other_kinds_talks) - [Other kinds of talks](https://www.scattered-thoughts.net/writing/other-kinds-of-talks/)
* [2025-02-25, 04:47:19](https://lobste.rs/s/e8cnqe/smart_pointers_can_t_solve_use_after_free) - [Smart Pointers Can't Solve Use-After-Free](http://jacko.io/smart_pointers.html)
* [2025-02-25, 02:51:00](https://soylentnews.org/article.pl?sid=25/02/24/0723218&from=rss) - [Astronomers Uncover The Topsy-Turvy Atmosphere Of A Distant Planet](https://soylentnews.org/article.pl?sid=25/02/24/0723218&from=rss)
* [2025-02-25, 01:21:49](https://lobste.rs/s/mmn0eh/canadian_vps_review) - [Canadian VPS Review](https://lukecyca.com/2025/canadian-vps-review.html)
* [2025-02-25, 01:09:43](https://lobste.rs/s/hfrpwt/new_zealand_company_s_impossible_hack) - [New Zealand Company’s ‘Impossible-to-Hack’ Security Turns Out to Be No Security at All](https://jltee.substack.com/p/new-zealand-companys-impossible-to-hack-security)
* [2025-02-24, 22:04:00](https://soylentnews.org/article.pl?sid=25/02/24/0715224&from=rss) - [How to Backdoor Large Language Models](https://soylentnews.org/article.pl?sid=25/02/24/0715224&from=rss)
* [2025-02-24, 20:21:56](https://lobste.rs/s/elf44b/breaking_into_dozens_apartment) - [Breaking into dozens of apartment buildings in five minutes on my phone](https://www.ericdaigle.ca/posts/breaking-into-dozens-of-apartments-in-five-minutes/)
* [2025-02-24, 19:53:11](https://lobste.rs/s/gbx4tl/how_core_git_developers_configure_git) - [How Core Git Developers Configure Git](https://blog.gitbutler.com/how-git-core-devs-configure-git/)
* [2025-02-24, 18:09:19](https://news.ycombinator.com/item?id=43162793) - [Ggwave: Tiny Data-over-Sound Library](https://github.com/ggerganov/ggwave)
* [2025-02-24, 17:20:00](https://soylentnews.org/article.pl?sid=25/02/24/0713223&from=rss) - [Bird Flu Endemic in America Cows. Found in Rats](https://soylentnews.org/article.pl?sid=25/02/24/0713223&from=rss)
* [2025-02-24, 16:42:31](https://lobste.rs/s/xcqfp7/philosophy_software_design_vs_clean_code) - [\"A Philosophy of Software Design\" vs \"Clean Code\"](https://github.com/johnousterhout/aposd-vs-clean-code/blob/main/README.md)
* [2025-02-24, 12:47:07](https://news.ycombinator.com/item?id=43158916) - [Modernist Cuisine: The Art and Science of Cooking](https://modernistcuisine.com/books/modernist-cuisine/)
* [2025-02-24, 12:32:00](https://soylentnews.org/article.pl?sid=25/02/24/078229&from=rss) - [AMD Could Block the Sale of Intel Due to a Cross-Licensing Agreement](https://soylentnews.org/article.pl?sid=25/02/24/078229&from=rss)
* [2025-02-24, 12:19:40](https://news.ycombinator.com/item?id=43158696) - [Understanding Surrogate Pairs: Why Some Windows Filenames Can't Be Read](https://zaferbalkan.com/surrogates/)
* [2025-02-24, 07:47:00](https://soylentnews.org/article.pl?sid=25/02/24/074241&from=rss) - [Apple Pulls End-to-End Encryption From UK Rather Than Provide Government a Backdoor](https://soylentnews.org/article.pl?sid=25/02/24/074241&from=rss)
* [2025-02-24, 03:03:00](https://soylentnews.org/article.pl?sid=25/02/23/1133234&from=rss) - [After 20 Years, Math Couple Solves Major Group Theory Problem](https://soylentnews.org/article.pl?sid=25/02/23/1133234&from=rss)
* [2025-02-23, 23:36:03](https://news.ycombinator.com/item?id=43154295) - [Bald eagles are thriving again after near extinction](https://www.newsweek.com/bald-eagles-back-brink-extinction-2025097)
* [2025-02-23, 22:14:00](https://soylentnews.org/article.pl?sid=25/02/22/1716217&from=rss) - [NVidia to Consume 77% of Wafers Used for AI Processors in 2025](https://soylentnews.org/article.pl?sid=25/02/22/1716217&from=rss)
* [2025-02-23, 18:51:49](https://news.ycombinator.com/item?id=43151943) - [Part two of Grant Sanderson's video with Terry Tao on the cosmic distance ladder](https://mathstodon.xyz/@tao/114054291471216181)
* [2025-02-23, 17:37:00](https://soylentnews.org/politics/article.pl?sid=25/02/22/1638251&from=rss) - [Trump to Introduce 25% and 'Higher' Tariff on Imported Semiconductors but the Timing is Unclear](https://soylentnews.org/politics/article.pl?sid=25/02/22/1638251&from=rss)
* [2025-02-23, 13:25:44](https://news.ycombinator.com/item?id=43149077) - [Why are QR Codes with capital letters smaller than QR codes with lower case?](https://shkspr.mobi/blog/2025/02/why-are-qr-codes-with-capital-letters-smaller-than-qr-codes-with-lower-case-letters/)
* [2025-02-23, 12:55:00](https://soylentnews.org/article.pl?sid=25/02/22/1636233&from=rss) - [Electric Truck-Maker Nikola Falls Into Bankruptcy Joining a Procession of Failed EV Startups](https://soylentnews.org/article.pl?sid=25/02/22/1636233&from=rss)
* [2025-02-23, 08:05:00](https://soylentnews.org/article.pl?sid=25/02/22/1634220&from=rss) - [Humane's AI Pin is No More and Owners are Left With Nothing](https://soylentnews.org/article.pl?sid=25/02/22/1634220&from=rss)
* [2025-02-23, 03:24:00](https://soylentnews.org/article.pl?sid=25/02/22/1627256&from=rss) - [The Odds of a City-Killer Asteroid Impact in 2032 Keep Rising](https://soylentnews.org/article.pl?sid=25/02/22/1627256&from=rss)
* [2025-02-22, 22:40:00](https://soylentnews.org/article.pl?sid=25/02/22/1622206&from=rss) - [HP  Deliberately Adds 15 Minutes Wait Time for Support Calls](https://soylentnews.org/article.pl?sid=25/02/22/1622206&from=rss)
* [2025-02-22, 17:55:00](https://soylentnews.org/article.pl?sid=25/02/21/056231&from=rss) - [Webcomic Author AndyOh of TMI-Comic Has Died](https://soylentnews.org/article.pl?sid=25/02/21/056231&from=rss)
* [2025-02-22, 13:14:00](https://soylentnews.org/article.pl?sid=25/02/21/055211&from=rss) - [Google's New AI Generates Hypotheses for Researchers](https://soylentnews.org/article.pl?sid=25/02/21/055211&from=rss)
* [2025-02-22, 09:52:26](https://news.ycombinator.com/item?id=43137616) - [If it is worth keeping, save it in Markdown](https://p.migdal.pl/blog/2025/02/markdown-saves/)
* [2025-02-22, 09:11:22](https://news.ycombinator.com/item?id=43137445) - [Terence Tao – Machine-Assisted Proofs [video]](https://www.youtube.com/watch?v=5ZIIGLiQWNM)
* [2025-02-22, 08:31:00](https://soylentnews.org/article.pl?sid=25/02/21/0455231&from=rss) - [Gnome 48 Goes Into Beta, Should Launch in a Month](https://soylentnews.org/article.pl?sid=25/02/21/0455231&from=rss)
* [2025-02-22, 03:48:00](https://soylentnews.org/article.pl?sid=25/02/21/0429228&from=rss) - [DRAM and NAND Prices Are Expected to Rise in the Second Half of 2025](https://soylentnews.org/article.pl?sid=25/02/21/0429228&from=rss)
