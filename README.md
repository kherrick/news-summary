# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Humanoid Robots Are Meta's Next 'AR-Sized Bet'](https://hardware.slashdot.org/story/25/09/26/2027234/humanoid-robots-are-metas-next-ar-sized-bet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Meta plans to dive deeper into robotics with humanoid robots seen as their next transformative frontier.

* [Typst: a possible LaTeX replacement](https://lwn.net/Articles/1037577/) - Typst emerges as an exciting alternative to conventional LaTeX for document creation, promising ease of use and greater versatility.

* [Meshtastic 64 - A meshtastic radio for the Commodore 64](http://64jim64.blogspot.com/2025/09/meshtastic-64-meshtastic-radio-for.html) - A fascinating project explores retro computing by pairing modern meshed radio capabilities with the classic Commodore 64.

* [Go's builtin 'new()' function will take an expression in Go 1.26](https://utcc.utoronto.ca/~cks/space/blog/programming/GoNewWithExpression) - An intriguing update to Go programming, allowing the 'new()' function to support more complex constructions.

## AI and Computing

* [Former Google CEO Says US Tech Workers Must Match China's 996 Schedule To Remain Competitive](https://slashdot.org/story/25/09/26/2359224/former-google-ceo-says-us-tech-workers-must-match-chinas-996-schedule-to-remain-competitive?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A controversial statement highlights competitive pressures in the tech workforce between the US and China.

* [China's Latest GPU Arrives With Claims of CUDA Compatibility and RT Support](https://soylentnews.org/article.pl?sid=25/09/26/239227&amp;from=rss) - China’s advancements in GPU technology with claimed CUDA compatibility signal potential competition in the hardware ecosystem.

* [GPT-OSS Reinforcement Learning](https://docs.unsloth.ai/new/gpt-oss-reinforcement-learning) - An exploration of advanced reinforcement learning techniques applied to open-source GPT modeling.

## Society and Ethics

* [Cracker Barrel Outrage Was Almost Certainly Driven by Bots, Researchers Say](https://gizmodo.com/cracker-barrel-outrage-was-almost-certainly-driven-by-bots-researchers-say-2000664221) - Research suggests that online outrage against Cracker Barrel may have been fabricated by bots, stirring ethical concerns about social manipulation.

* [Lifetime of social ties adds up to healthy aging at molecular level](https://news.cornell.edu/stories/2025/09/lifetime-social-ties-adds-healthy-aging) - Studies indicate that robust social connections significantly contribute to healthy aging by influencing molecular processes.

## Environment and Energy

* [Magma Displacement Triggered Tens of Thousands of Earthquakes, Santorini Swarm Study Finds](https://soylentnews.org/article.pl?sid=25/09/26/2314203&amp;from=rss) - A study on Santorini reveals how magma displacement has created seismic activity, providing insights into geological behavior.

* [Wind and Solar Will Power Datacenters More Cheaply Than Nuclear, Study Finds](https://hardware.slashdot.org/story/25/09/26/1922220/wind-and-solar-will-power-datacenters-more-cheaply-than-nuclear-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Renewable energy surpasses nuclear in powering datacenters more cost-effectively, according to a new study.

## Cultural Insights

* [The Obsessively Complete Infocom Catalog](https://eblong.com/infocom/) - A nostalgic dive into the deepest details of Infocom's storied interactive fiction games catalog.

* [Why do we remember some life moments but not others?](https://www.bu.edu/articles/2025/why-do-we-remember-some-moments-but-not-others/) - Explorations into human memory reveal why certain moments persist while others fade.

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

* [2025-09-27, 13:00:00](https://tech.slashdot.org/story/25/09/27/004205/pentagon-can-call-dji-a-chinese-military-company-court-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pentagon Can Call DJI a Chinese Military Company, Court Rules](https://tech.slashdot.org/story/25/09/27/004205/pentagon-can-call-dji-a-chinese-military-company-court-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-27, 12:28:41](https://lobste.rs/s/oebpl9/meshtastic_64_meshtastic_radio_for) - [Meshtastic 64 - A meshtastic radio for the Commodore 64](http://64jim64.blogspot.com/2025/09/meshtastic-64-meshtastic-radio-for.html)
* [2025-09-27, 12:24:29](https://lobste.rs/s/ocnhfi/hsbc_publishes_yet_another_claim_quantum) - [HSBC publishes yet another claim of quantum advantage that isn’t](https://scottaaronson.blog/?p=9170)
* [2025-09-27, 12:00:22](https://news.ycombinator.com/item?id=45395010) - [Trellis (YC W24) Is Hiring: Automate Healthcare Paperwork](https://www.ycombinator.com/companies/trellis/jobs/C0VryYb-forward-deployed-engineers-intern-august-2025)
* [2025-09-27, 11:44:57](https://news.ycombinator.com/item?id=45394942) - [Cracker Barrel Outrage Was Almost Certainly Driven by Bots, Researchers Say](https://gizmodo.com/cracker-barrel-outrage-was-almost-certainly-driven-by-bots-researchers-say-2000664221)
* [2025-09-27, 11:04:56](https://lobste.rs/s/wnvj5y/typst_possible_latex_replacement) - [Typst: a possible LaTeX replacement](https://lwn.net/Articles/1037577/)
* [2025-09-27, 10:41:00](https://soylentnews.org/article.pl?sid=25/09/26/2314203&amp;from=rss) - [Magma Displacement Triggered Tens of Thousands of Earthquakes, Santorini Swarm Study Finds](https://soylentnews.org/article.pl?sid=25/09/26/2314203&amp;from=rss)
* [2025-09-27, 10:00:00](https://hardware.slashdot.org/story/25/09/26/2027234/humanoid-robots-are-metas-next-ar-sized-bet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Humanoid Robots Are Meta&apos;s Next &apos;AR-Sized Bet&apos;](https://hardware.slashdot.org/story/25/09/26/2027234/humanoid-robots-are-metas-next-ar-sized-bet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-27, 07:31:58](https://lobste.rs/s/cgx2bu/go_s_builtin_new_function_will_take) - [Go&apos;s builtin &apos;new()&apos; function will take an expression in Go 1.26](https://utcc.utoronto.ca/~cks/space/blog/programming/GoNewWithExpression)
* [2025-09-27, 07:31:39](https://news.ycombinator.com/item?id=45393842) - [Typst: A Possible LaTeX Replacement](https://lwn.net/Articles/1037577/)
* [2025-09-27, 07:00:00](https://tech.slashdot.org/story/25/09/26/1937234/ula-launches-third-batch-of-amazons-project-kuiper-satellites?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ULA Launches Third Batch of Amazon&apos;s Project Kuiper Satellites](https://tech.slashdot.org/story/25/09/26/1937234/ula-launches-third-batch-of-amazons-project-kuiper-satellites?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-27, 06:45:03](https://news.ycombinator.com/item?id=45393653) - [Property-Based Testing of OCaml 5&apos;s Runtime System [pdf]](https://janmidtgaard.dk/papers/Midtgaard%3AOLIVIERFEST25.pdf)
* [2025-09-27, 06:42:53](https://lobste.rs/s/2emtvy/property_based_testing_ocaml_5_s_runtime) - [Property-Based Testing of OCaml 5’s Runtime System](https://janmidtgaard.dk/papers/Midtgaard%3AOLIVIERFEST25.pdf)
* [2025-09-27, 06:00:41](https://news.ycombinator.com/item?id=45393501) - [Lifetime of social ties adds up to healthy aging at molecular level](https://news.cornell.edu/stories/2025/09/lifetime-social-ties-adds-healthy-aging)
* [2025-09-27, 05:56:00](https://soylentnews.org/article.pl?sid=25/09/26/239227&amp;from=rss) - [China&apos;s Latest GPU Arrives With Claims of CUDA Compatibility and RT Support](https://soylentnews.org/article.pl?sid=25/09/26/239227&amp;from=rss)
* [2025-09-27, 03:30:00](https://hardware.slashdot.org/story/25/09/26/1922220/wind-and-solar-will-power-datacenters-more-cheaply-than-nuclear-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wind and Solar Will Power Datacenters More Cheaply Than Nuclear, Study Finds](https://hardware.slashdot.org/story/25/09/26/1922220/wind-and-solar-will-power-datacenters-more-cheaply-than-nuclear-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-27, 02:26:36](https://lobste.rs/s/ybzisr/fun_friday_question_what_s_best_way_you_ve) - [Fun Friday Question: What&apos;s the Best Way you&apos;ve Broken Prod?](https://lobste.rs/s/ybzisr/fun_friday_question_what_s_best_way_you_ve)
* [2025-09-27, 02:01:35](https://news.ycombinator.com/item?id=45392744) - [GPT-OSS Reinforcement Learning](https://docs.unsloth.ai/new/gpt-oss-reinforcement-learning)
* [2025-09-27, 02:00:00](https://slashdot.org/story/25/09/26/2359224/former-google-ceo-says-us-tech-workers-must-match-chinas-996-schedule-to-remain-competitive?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Former Google CEO Says US Tech Workers Must Match China&apos;s 996 Schedule To Remain Competitive](https://slashdot.org/story/25/09/26/2359224/former-google-ceo-says-us-tech-workers-must-match-chinas-996-schedule-to-remain-competitive?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-27, 01:06:00](https://soylentnews.org/article.pl?sid=25/09/26/1437222&amp;from=rss) - [How India&apos;s Unplanned Hydropower Dams and Tunnels Are Disrupting Himalayan Landscapes](https://soylentnews.org/article.pl?sid=25/09/26/1437222&amp;from=rss)
* [2025-09-27, 01:00:00](https://apple.slashdot.org/story/25/09/26/1931209/apple-mac-adoption-is-accelerating-across-us-enterprises?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Mac Adoption Is Accelerating Across US Enterprises](https://apple.slashdot.org/story/25/09/26/1931209/apple-mac-adoption-is-accelerating-across-us-enterprises?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-26, 23:50:00](https://games.slashdot.org/story/25/09/26/2350209/videogame-giant-electronic-arts-nears-roughly-50-billion-deal-to-go-private?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Videogame Giant Electronic Arts Nears Roughly $50 Billion Deal to Go Private](https://games.slashdot.org/story/25/09/26/2350209/videogame-giant-electronic-arts-nears-roughly-50-billion-deal-to-go-private?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-26, 23:43:33](https://news.ycombinator.com/item?id=45392164) - [The Obsessively Complete Infocom Catalog](https://eblong.com/infocom/)
* [2025-09-26, 22:57:57](https://news.ycombinator.com/item?id=45391871) - [New math revives geometry&apos;s oldest problems](https://www.quantamagazine.org/new-math-revives-geometrys-oldest-problems-20250926/)
* [2025-09-26, 22:44:01](https://news.ycombinator.com/item?id=45391786) - [Why do we remember some life moments but not others?](https://www.bu.edu/articles/2025/why-do-we-remember-some-moments-but-not-others/)
* [2025-09-26, 22:17:03](https://news.ycombinator.com/item?id=45391566) - [Thoughts on Mechanical Keyboards and the ZSA Moonlander](https://www.masteringemacs.org/article/thoughts-on-mechanical-keyboards-zsa-moonlander)
* [2025-09-26, 21:59:57](https://news.ycombinator.com/item?id=45391444) - [Moondream 3 Preview: Frontier-level reasoning at a blazing speed](https://moondream.ai/blog/moondream-3-preview)
* [2025-09-26, 21:18:37](https://lobste.rs/s/4zlkza/why_decades_old_architecture_decision_is) - [Why a decades old architecture decision is impeding the power of AI computing](https://research.ibm.com/blog/why-von-neumann-architecture-is-impeding-the-power-of-ai-computing)
* [2025-09-26, 21:08:15](https://lobste.rs/s/tjyzrl/file_system_belongs_kernel_1991) - [The File System Belongs in the Kernel (1991)](https://www.usenix.org/legacy/publications/library/proceedings/mach91/welch.pdf)
* [2025-09-26, 21:00:00](https://yro.slashdot.org/story/25/09/26/1915206/us-plans-11-chip-production-rule-to-curb-overseas-reliance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Plans 1:1 Chip Production Rule To Curb Overseas Reliance](https://yro.slashdot.org/story/25/09/26/1915206/us-plans-11-chip-production-rule-to-curb-overseas-reliance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-26, 20:53:07](https://lobste.rs/s/7gtp0y/flight_recorder_go_1_25) - [Flight Recorder in Go 1.25](https://go.dev/blog/flight-recorder)
* [2025-09-26, 20:46:26](https://news.ycombinator.com/item?id=45390856) - [How insurance risk is transformed into investable assets](https://riskvest.io/riskvest-insights/transforming-insurance-risk)
* [2025-09-26, 20:40:00](https://yro.slashdot.org/story/25/09/26/197223/xai-offers-grok-to-federal-government-for-42-cents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [xAI Offers Grok To Federal Government For 42 Cents](https://yro.slashdot.org/story/25/09/26/197223/xai-offers-grok-to-federal-government-for-42-cents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-26, 20:20:00](https://soylentnews.org/article.pl?sid=25/09/26/1433207&amp;from=rss) - [American Kids Can’t Read or Do Math Anymore](https://soylentnews.org/article.pl?sid=25/09/26/1433207&amp;from=rss)
* [2025-09-26, 20:00:00](https://tech.slashdot.org/story/25/09/26/1859248/sfmta-scambles-to-shut-down-viral-parking-ticket-tracker?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SFMTA Scambles To Shut Down Viral Parking Ticket Tracker](https://tech.slashdot.org/story/25/09/26/1859248/sfmta-scambles-to-shut-down-viral-parking-ticket-tracker?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-26, 19:27:23](https://news.ycombinator.com/item?id=45390121) - [Why use mailing lists?](https://mailarchive.ietf.org/arch/msg/ietf/q6A_anL1u-Y9iXe-vboiOYamsl0/)
* [2025-09-26, 19:25:05](https://lobste.rs/s/yh2bjm/open_social) - [Open Social](https://overreacted.io/open-social/)
* [2025-09-26, 19:20:00](https://tech.slashdot.org/story/25/09/26/1843257/abu-dhabi-royal-family-to-take-stake-in-tiktok-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Abu Dhabi Royal Family To Take Stake In TikTok US](https://tech.slashdot.org/story/25/09/26/1843257/abu-dhabi-royal-family-to-take-stake-in-tiktok-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-26, 19:12:26](https://news.ycombinator.com/item?id=45389965) - [If you are harassed by lasers](https://www.laserpointersafety.com/harassment.html)
* [2025-09-26, 19:00:00](https://games.slashdot.org/story/25/09/26/1849227/electronic-arts-nears-roughly-50-billion-deal-to-go-private?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Electronic Arts Nears Roughly $50 Billion Deal To Go Private](https://games.slashdot.org/story/25/09/26/1849227/electronic-arts-nears-roughly-50-billion-deal-to-go-private?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-26, 18:40:00](https://yro.slashdot.org/story/25/09/26/1836203/chinese-hackers-breach-us-software-and-law-firms-amid-trade-fight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chinese Hackers Breach US Software and Law Firms Amid Trade Fight](https://yro.slashdot.org/story/25/09/26/1836203/chinese-hackers-breach-us-software-and-law-firms-amid-trade-fight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-26, 18:20:33](https://news.ycombinator.com/item?id=45389464) - [Oral Microbes Linked to 3-Fold Increased Risk of Pancreatic Cancer](https://nyulangone.org/news/oral-microbes-linked-increased-risk-pancreatic-cancer)
* [2025-09-26, 18:04:29](https://news.ycombinator.com/item?id=45389293) - [Auth.js is now part of Better Auth](https://www.better-auth.com/blog/authjs-joins-better-auth)
* [2025-09-26, 18:01:26](https://news.ycombinator.com/item?id=45389267) - [SimpleFold: Folding proteins is simpler than you think](https://github.com/apple/ml-simplefold)
* [2025-09-26, 17:34:16](https://lobste.rs/s/liau26/redis_is_fast_i_ll_cache_postgres) - [Redis is fast - I&apos;ll cache in Postgres](https://dizzy.zone/2025/09/24/Redis-is-fast-Ill-cache-in-Postgres/)
* [2025-09-26, 17:21:00](https://linux.slashdot.org/story/25/09/26/1717258/amazon-fire-tv-devices-expected-to-ditch-android-for-linux-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Fire TV Devices Expected To Ditch Android for Linux in 2025](https://linux.slashdot.org/story/25/09/26/1717258/amazon-fire-tv-devices-expected-to-ditch-android-for-linux-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-26, 17:17:54](https://news.ycombinator.com/item?id=45388822) - [Suno Studio, a Generative AI DAW](https://suno.com/studio-welcome)
* [2025-09-26, 17:11:00](https://lobste.rs/s/b9gdmg/informed_poll) - [Informed poll](https://pigweed.dev/pw_async2/informed_poll.html)
* [2025-09-26, 17:06:48](https://news.ycombinator.com/item?id=45388728) - [Modular Manifolds](https://thinkingmachines.ai/blog/modular-manifolds/)
* [2025-09-26, 16:40:00](https://entertainment.slashdot.org/story/25/09/26/1636252/streaming-is-overtaking-theaters-for-movie-watchers-an-ap-norc-poll-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Streaming Is Overtaking Theaters For Movie Watchers, an AP-NORC Poll Finds](https://entertainment.slashdot.org/story/25/09/26/1636252/streaming-is-overtaking-theaters-for-movie-watchers-an-ap-norc-poll-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-26, 16:33:52](https://lobste.rs/s/uarqvg/process_tracing_projects) - [Process Tracing Projects](https://github.com/oils-for-unix/oils/wiki/Process-Tracing-Projects)
* [2025-09-26, 16:05:03](https://lobste.rs/s/jtoukh/dotfiles_with_make) - [Dotfiles with make](https://www.matheusmoreira.com/articles/managing-dotfiles-with-make)
* [2025-09-26, 16:01:55](https://news.ycombinator.com/item?id=45388021) - [Open Social](https://overreacted.io/open-social/)
* [2025-09-26, 15:54:08](https://lobste.rs/s/zsec3k/turning_billions_strings_into_integers) - [Turning Billions of Strings into Integers Every Second Without Collisions](https://jazco.dev/2025/09/26/interning/)
* [2025-09-26, 15:35:00](https://soylentnews.org/article.pl?sid=25/09/26/1416257&amp;from=rss) - [More Than Half of World&apos;s Coastal Settlements Retreating From Rising Seas, Study Shows](https://soylentnews.org/article.pl?sid=25/09/26/1416257&amp;from=rss)
* [2025-09-26, 15:20:06](https://lobste.rs/s/2awkhh/new_popos_beta_shipped_with_cosmis_de) - [New PopOS beta shipped with Cosmis DE](https://system76.com/pop/pop-beta/)
* [2025-09-26, 14:40:29](https://lobste.rs/s/8vyihb/it_is_actually_surprising_earley_can) - [It is actually surprising that Earley can efficiently parse C, ambiguities and all](https://wareya.wordpress.com/2025/09/25/it-is-actually-surprising-that-earley-can-efficiently-parse-c-ambiguities-and-all/)
* [2025-09-26, 13:57:17](https://news.ycombinator.com/item?id=45386578) - [US cities pay too much for buses](https://www.bloomberg.com/news/articles/2025-09-26/us-cities-are-paying-too-much-for-new-transit-buses)
* [2025-09-26, 12:28:38](https://lobste.rs/s/7a4lle/rio_terminal_hardware_accelerated_gpu) - [Rio Terminal: A hardware-accelerated GPU terminal emulator](https://rioterm.com/)
* [2025-09-26, 12:19:31](https://lobste.rs/s/rylcz7/identity_types) - [Identity Types](https://bartoszmilewski.com/2025/09/22/identity-types/)
* [2025-09-26, 10:53:00](https://soylentnews.org/article.pl?sid=25/09/26/1047223&amp;from=rss) - [Huntington&apos;s Disease Successfully Treated for First Time](https://soylentnews.org/article.pl?sid=25/09/26/1047223&amp;from=rss)
* [2025-09-26, 07:23:03](https://lobste.rs/s/rpcu4t/fast_udp_i_o_for_firefox_rust) - [Fast UDP I/O for Firefox in Rust](https://max-inden.de/post/fast-udp-io-in-firefox/)
* [2025-09-26, 06:11:00](https://soylentnews.org/article.pl?sid=25/09/26/0453242&amp;from=rss) - [Facebook Data Reveal the Devastating Real-World Harms Caused by the Spread of Misinformation](https://soylentnews.org/article.pl?sid=25/09/26/0453242&amp;from=rss)
* [2025-09-26, 01:27:00](https://soylentnews.org/article.pl?sid=25/09/25/1231232&amp;from=rss) - [China Starts Producing World-First Non-Binary AI Chips for Aviation, Manufacturing](https://soylentnews.org/article.pl?sid=25/09/25/1231232&amp;from=rss)
* [2025-09-25, 21:58:15](https://lobste.rs/s/mudqlv/zoomer_tries_rss_praise_yarr_2024) - [Zoomer Tries RSS: In Praise of Yarr (2024)](https://tudorr.ro/blog/2024-04-04-zoomer-tries-rss/)
* [2025-09-25, 20:42:00](https://soylentnews.org/article.pl?sid=25/09/25/1225209&amp;from=rss) - [The Future of Nuclear Reactors is Making its Way to the US](https://soylentnews.org/article.pl?sid=25/09/25/1225209&amp;from=rss)
* [2025-09-25, 19:04:53](https://lobste.rs/s/vxzaqm/investigating_forged_pdf) - [Investigating a Forged PDF](https://mjg59.dreamwidth.org/73317.html)
* [2025-09-25, 15:54:00](https://soylentnews.org/article.pl?sid=25/09/25/1221237&amp;from=rss) - [Different Types of Magic Mushrooms Use Unique Biochemical Paths to Produce the Same Active Compound](https://soylentnews.org/article.pl?sid=25/09/25/1221237&amp;from=rss)
* [2025-09-25, 15:32:36](https://lobste.rs/s/ppm44i/very_early_history_algebraic_data_types) - [A Very Early History of Algebraic Data Types](https://www.hillelwayne.com/post/algdt-history/)
* [2025-09-25, 13:52:33](https://lobste.rs/s/8ug7iy/postgresql_18_released) - [PostgreSQL 18 Released](https://www.postgresql.org/about/news/postgresql-18-released-3142/)
* [2025-09-25, 13:52:00](https://news.ycombinator.com/item?id=45372642) - [Show HN: Lingo – A linguistic database in Rust with nanosecond-level performance](https://news.ycombinator.com/item?id=45372642)
* [2025-09-25, 11:43:00](https://soylentnews.org/article.pl?sid=25/09/25/0014257&amp;from=rss) - [The Ganges River is Drying at an Unprecedented Rate](https://soylentnews.org/article.pl?sid=25/09/25/0014257&amp;from=rss)
* [2025-09-25, 10:49:20](https://lobste.rs/s/jqikf7/thoughts_on_cloudflare) - [Thoughts on Cloudflare](https://xn--gckvb8fzb.com/thoughts-on-cloudflare/)
* [2025-09-25, 07:01:00](https://soylentnews.org/article.pl?sid=25/09/24/122235&amp;from=rss) - [Nvidia&apos;s $100 Billion Investment in OpenAI Raises Big Antitrust Concerns](https://soylentnews.org/article.pl?sid=25/09/24/122235&amp;from=rss)
* [2025-09-25, 05:43:01](https://news.ycombinator.com/item?id=45369629) - [Litex: The First Formal Language Learnable in 1-2 Hours](https://github.com/litexlang/golitex)
* [2025-09-25, 03:16:00](https://soylentnews.org/article.pl?sid=25/09/24/1152227&amp;from=rss) - [The End of EU-Imposed Cookie Consent Pop-Ups Could be Nigh](https://soylentnews.org/article.pl?sid=25/09/24/1152227&amp;from=rss)
* [2025-09-24, 22:36:00](https://soylentnews.org/article.pl?sid=25/09/24/1148218&amp;from=rss) - [Cloudflare is Sponsoring Ladybird and Omarchy](https://soylentnews.org/article.pl?sid=25/09/24/1148218&amp;from=rss)
* [2025-09-24, 19:29:13](https://news.ycombinator.com/item?id=45364932) - [CT scans of 1k lithium-ion batteries show quality risks in inexpensive cells](https://www.lumafield.com/article/finding-hidden-risks-in-the-battery-supply-chain)
* [2025-09-24, 17:48:00](https://soylentnews.org/article.pl?sid=25/09/23/0616240&amp;from=rss) - [How Billions of Hacked Mosquitoes and a Vaccine Could Beat the Deadly Dengue Virus](https://soylentnews.org/article.pl?sid=25/09/23/0616240&amp;from=rss)
* [2025-09-24, 17:32:57](https://news.ycombinator.com/item?id=45363471) - [Why is Windows still tinkering with critical sections? – The Old New Thing](https://devblogs.microsoft.com/oldnewthing/20250924-00/?p=111624)
* [2025-09-24, 13:02:00](https://soylentnews.org/article.pl?sid=25/09/23/066237&amp;from=rss) - [Why do Some Gamers Invert Their Controls?](https://soylentnews.org/article.pl?sid=25/09/23/066237&amp;from=rss)
* [2025-09-24, 08:29:58](https://news.ycombinator.com/item?id=45357732) - [Traefik&apos;s 10-year anniversary](https://traefik.io/blog/celebrating-10-years-of-traefik)
* [2025-09-24, 08:16:00](https://soylentnews.org/article.pl?sid=25/09/23/0557257&amp;from=rss) - [&apos;a Black Hole of Energy Use&apos;: Meta&apos;s Massive AI Data Center is Stressing Out a Louisiana Community](https://soylentnews.org/article.pl?sid=25/09/23/0557257&amp;from=rss)
* [2025-09-24, 04:51:54](https://news.ycombinator.com/item?id=45356429) - [The Beauty of Programming (2001)](https://www.brynmawr.edu/inside/academic-information/departments-programs/computer-science/beauty-programming)
* [2025-09-24, 03:35:00](https://soylentnews.org/article.pl?sid=25/09/23/0552218&amp;from=rss) - [When Cancer Targets the Young](https://soylentnews.org/article.pl?sid=25/09/23/0552218&amp;from=rss)
* [2025-09-23, 23:54:01](https://news.ycombinator.com/item?id=45354404) - [Meshtastic 64 – A meshtastic radio for the Commodore 64](http://64jim64.blogspot.com/2025/09/meshtastic-64-meshtastic-radio-for.html)
* [2025-09-23, 22:48:00](https://soylentnews.org/article.pl?sid=25/09/22/2131204&amp;from=rss) - [Porsche EV Roll-Out Delay Deals $6 Billion Hit to Parent Volkswagen](https://soylentnews.org/article.pl?sid=25/09/22/2131204&amp;from=rss)
* [2025-09-23, 18:06:00](https://soylentnews.org/article.pl?sid=25/09/22/1156248&amp;from=rss) - [Scientists Found 7,000-Year-Old Mummies in the Desert That Don&apos;t Share DNA With Modern Humans](https://soylentnews.org/article.pl?sid=25/09/22/1156248&amp;from=rss)
* [2025-09-23, 16:25:13](https://news.ycombinator.com/item?id=45349218) - [I built Foyer: a Rust hybrid cache that slashes S3 latency](https://medium.com/@yingjunwu/the-case-for-hybrid-cache-for-object-stores-4b1f02ec6c9a)
* [2025-09-23, 15:52:09](https://news.ycombinator.com/item?id=45348762) - [Requiem for a Hash Function, or: How I learned to love package maphash](https://matttproud.com/blog/posts/go-maphash.html)
* [2025-09-23, 13:24:00](https://soylentnews.org/article.pl?sid=25/09/21/2249222&amp;from=rss) - [Deaths From Flesh-Eating Bacteria are on the Rise. Who is at Risk?](https://soylentnews.org/article.pl?sid=25/09/21/2249222&amp;from=rss)
* [2025-09-23, 08:35:00](https://soylentnews.org/article.pl?sid=25/09/21/2243223&amp;from=rss) - [We Risk a Deluge of AI-Written ‘Science’ Pushing Corporate Interests](https://soylentnews.org/article.pl?sid=25/09/21/2243223&amp;from=rss)
* [2025-09-23, 03:52:00](https://soylentnews.org/article.pl?sid=25/09/21/2234254&amp;from=rss) - [Something Extremely Strange is Happening at the Event Horizon of This Supermassive Blackhole](https://soylentnews.org/article.pl?sid=25/09/21/2234254&amp;from=rss)
