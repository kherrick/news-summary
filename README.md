# [News Summary](https://kherrick.github.io/news-summary/)

## Tech Innovations and Developments

* [Why Every Company Suddenly Wants To Become a Bank](https://news.slashdot.org/story/25/11/14/1233226/why-every-company-suddenly-wants-to-become-a-bank?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [How we avoided side-channels in our new post-quantum Go cryptography libraries](https://blog.trailofbits.com/2025/11/14/how-we-avoided-side-channels-in-our-new-post-quantum-go-cryptography-libraries/)

* [Moonpool and OCaml5 in Imandrax](https://docs.imandra.ai/imandrax/blog/2025-11-12-moonpool-in-imandrax/)

* [A structural regular expression engine for Rust](https://www.sminez.dev/match-it-again-sam/)

* [Singapore To Trial Tokenized Bills, Bring In Stablecoin Laws](https://yro.slashdot.org/story/25/11/14/0412216/singapore-to-trial-tokenized-bills-bring-in-stablecoin-laws?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Announcing Unikraft Support for MirageOS Unikernels](https://tarides.com/blog/2025-11-13-announcing-unikraft-support-for-mirageos-unikernels)

* [AMD GPUs go brrr](https://hazyresearch.stanford.edu/blog/2025-11-09-amd-brr)

* [Amazon Renames 'Project Kuiper' Satellite Internet Venture To 'Leo'](https://tech.slashdot.org/story/25/11/14/0416257/amazon-renames-project-kuiper-satellite-internet-venture-to-leo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## AI and Data Security

* [Oracle hit hard in Wall Street's tech sell-off over its AI bet](https://www.ft.com/content/583e9391-bdd0-433e-91e0-b1b93038d51e)

* [Nation state threat actor used Claude Code to orchestrate cyber attacks](https://www.anthropic.com/news/disrupting-AI-espionage)

* [Bombshell Report Exposes How Meta Relied on Scam Ad Profits to Fund AI](https://soylentnews.org/article.pl?sid=25/11/13/033247&amp;from=rss)

* [Nvidia is gearing up to sell servers instead of just GPUs and components](https://www.tomshardware.com/tech-industry/artificial-intelligence/jp-morgan-says-nvidia-is-gearing-up-to-sell-entire-ai-servers-instead-of-just-ai-gpus-and-componentry-jensens-master-plan-of-vertical-integration-will-boost-profits-purportedly-starting-with-vera-rubin)

## Health and Science Breakthroughs

* [All Lupus Cases May Be Linked To a Common Virus, Study Finds](https://science.slashdot.org/story/25/11/14/0836231/all-lupus-cases-may-be-linked-to-a-common-virus-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Hooked on Sonics: Experimenting with Sound in 19th-Century Popular Science](https://publicdomainreview.org/essay/science-of-sound/)

* [NASA Confirms Voyager Spacecraft Has Encountered a “Wall of Fire” at the Edge of the Solar System](https://soylentnews.org/article.pl?sid=25/11/10/1939208&amp;from=rss)

* [Sun: First Glimpse of Polar Magnetic Field in Motion](https://soylentnews.org/article.pl?sid=25/11/11/0334251&amp;from=rss)

## Cybersecurity Concerns

* [Russian Hackers Abuse Hyper-V to Hide Malware in Linux VMs](https://soylentnews.org/article.pl?sid=25/11/13/0318258&amp;from=rss)

* [Hyundai Data Breach May Have Leaked Drivers' Personal Information](https://yro.slashdot.org/story/25/11/14/0424237/hyundai-data-breach-may-have-leaked-drivers-personal-information?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [FBI Tries to Unmask Owner of Infamous Archive.is Site](https://soylentnews.org/article.pl?sid=25/11/10/1931219&amp;from=rss)

## Environmental and Economic Insights

* [The Economic Impact of Brexit](https://news.slashdot.org/story/25/11/14/080207/the-economic-impact-of-brexit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [World Still On Track For Catastrophic 2.6C Temperature Rise, Report Finds](https://news.slashdot.org/story/25/11/13/2327240/world-still-on-track-for-catastrophic-26c-temperature-rise-report-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Plumbing the Universe for Dark Matter](https://soylentnews.org/article.pl?sid=25/11/08/2122221&amp;from=rss)

## Miscellaneous Stories

* [Winamp for OS/X](https://github.com/mgreenwood1001/winamp)

* [Netflix's New Era of TV Games Starts Now](https://games.slashdot.org/story/25/11/13/2333224/netflixs-new-era-of-tv-games-starts-now?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [World's First Flying Car Factory Begins Production In China](https://tech.slashdot.org/story/25/11/13/2315231/worlds-first-flying-car-factory-begins-production-in-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

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

* [2025-11-14, 16:02:00](https://news.slashdot.org/story/25/11/14/1233226/why-every-company-suddenly-wants-to-become-a-bank?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why Every Company Suddenly Wants To Become a Bank](https://news.slashdot.org/story/25/11/14/1233226/why-every-company-suddenly-wants-to-become-a-bank?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-14, 15:25:28](https://lobste.rs/s/9appzu/how_we_avoided_side_channels_our_new_post) - [How we avoided side-channels in our new post-quantum Go cryptography libraries](https://blog.trailofbits.com/2025/11/14/how-we-avoided-side-channels-in-our-new-post-quantum-go-cryptography-libraries/)
* [2025-11-14, 15:20:53](https://lobste.rs/s/4vb7wg/moonpool_ocaml5_imandrax) - [Moonpool and OCaml5 in Imandrax](https://docs.imandra.ai/imandrax/blog/2025-11-12-moonpool-in-imandrax/)
* [2025-11-14, 15:20:00](https://slashdot.org/story/25/11/14/1118241/krafton-launches-voluntary-resignation-program-weeks-after-declaring-ai-first-company-future?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Krafton Launches Voluntary Resignation Program Weeks After Declaring &apos;AI-First Company&apos; Future](https://slashdot.org/story/25/11/14/1118241/krafton-launches-voluntary-resignation-program-weeks-after-declaring-ai-first-company-future?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-14, 15:04:22](https://news.ycombinator.com/item?id=45927435) - [Oracle hit hard in Wall Street&apos;s tech sell-off over its AI bet](https://www.ft.com/content/583e9391-bdd0-433e-91e0-b1b93038d51e)
* [2025-11-14, 14:55:57](https://lobste.rs/s/jtpw7d/last_couple_years_v8_s_garbage_collector) - [the last couple years in v8&apos;s garbage collector](https://wingolog.org/archives/2025/11/13/the-last-couple-years-in-v8s-garbage-collector)
* [2025-11-14, 14:40:00](https://science.slashdot.org/story/25/11/14/0836231/all-lupus-cases-may-be-linked-to-a-common-virus-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [All Lupus Cases May Be Linked To a Common Virus, Study Finds](https://science.slashdot.org/story/25/11/14/0836231/all-lupus-cases-may-be-linked-to-a-common-virus-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-14, 14:32:11](https://news.ycombinator.com/item?id=45927035) - [Wealthy foreigners &apos;paid for chance to shoot civilians in Sarajevo&apos;](https://www.thetimes.com/world/europe/article/wealthy-foreigners-paid-for-chance-to-shoot-civilians-in-sarajevo-zrljbb27z)
* [2025-11-14, 14:05:00](https://news.ycombinator.com/item?id=45926779) - [I think nobody wants AI in Firefox, Mozilla](https://manualdousuario.net/en/mozilla-firefox-window-ai/)
* [2025-11-14, 14:00:00](https://news.slashdot.org/story/25/11/14/080207/the-economic-impact-of-brexit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Economic Impact of Brexit](https://news.slashdot.org/story/25/11/14/080207/the-economic-impact-of-brexit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-14, 13:21:24](https://news.ycombinator.com/item?id=45926469) - [AGI fantasy is a blocker to actual engineering](https://www.tomwphillips.co.uk/2025/11/agi-fantasy-is-a-blocker-to-actual-engineering/)
* [2025-11-14, 13:18:09](https://news.ycombinator.com/item?id=45926439) - [Nvidia is gearing up to sell servers instead of just GPUs and components](https://www.tomshardware.com/tech-industry/artificial-intelligence/jp-morgan-says-nvidia-is-gearing-up-to-sell-entire-ai-servers-instead-of-just-ai-gpus-and-componentry-jensens-master-plan-of-vertical-integration-will-boost-profits-purportedly-starting-with-vera-rubin)
* [2025-11-14, 13:14:44](https://lobste.rs/s/k99bvq/structural_regular_expression_engine) - [A structural regular expression engine for Rust](https://www.sminez.dev/match-it-again-sam/)
* [2025-11-14, 13:12:11](https://news.ycombinator.com/item?id=45926395) - [Don&apos;t turn your brain off](https://computingeducationthings.substack.com/p/22-dont-turn-your-brain-off)
* [2025-11-14, 13:10:19](https://news.ycombinator.com/item?id=45926383) - [Backblaze Drive Stats for Q3 2025](https://www.backblaze.com/blog/backblaze-drive-stats-for-q3-2025/)
* [2025-11-14, 13:07:11](https://lobste.rs/s/zgrrqx/amd_gpus_go_brrr) - [AMD GPUs go brrr](https://hazyresearch.stanford.edu/blog/2025-11-09-amd-brr)
* [2025-11-14, 13:00:00](https://yro.slashdot.org/story/25/11/14/0412216/singapore-to-trial-tokenized-bills-bring-in-stablecoin-laws?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Singapore To Trial Tokenized Bills, Bring In Stablecoin Laws](https://yro.slashdot.org/story/25/11/14/0412216/singapore-to-trial-tokenized-bills-bring-in-stablecoin-laws?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-14, 12:57:01](https://lobste.rs/s/yceoaw/announcing_unikraft_support_for) - [Announcing Unikraft Support for MirageOS Unikernels](https://tarides.com/blog/2025-11-13-announcing-unikraft-support-for-mirageos-unikernels)
* [2025-11-14, 12:51:23](https://news.ycombinator.com/item?id=45926263) - [EDE: Small and Fast Desktop Environment](https://edeproject.org/)
* [2025-11-14, 12:44:07](https://news.ycombinator.com/item?id=45926224) - [Winamp for OS/X](https://github.com/mgreenwood1001/winamp)
* [2025-11-14, 12:23:53](https://news.ycombinator.com/item?id=45926105) - [Arrival Radar](https://entropicthoughts.com/arrival-radar)
* [2025-11-14, 12:18:42](https://lobste.rs/s/hdr50v/how_deploy_llm_locally) - [How to Deploy LLM Locally](https://blog.lyc8503.net/en/post/local-llm/)
* [2025-11-14, 12:09:59](https://news.ycombinator.com/item?id=45926037) - [Magit manuals are available online again](https://github.com/magit/magit/issues/5472)
* [2025-11-14, 12:00:57](https://news.ycombinator.com/item?id=45925996) - [Show HN: European Tech News in 6 Languages](https://europedigital.cloud/en/news)
* [2025-11-14, 11:47:00](https://soylentnews.org/article.pl?sid=25/11/13/0318258&amp;from=rss) - [Russian Hackers Abuse Hyper-V to Hide Malware in Linux VMs](https://soylentnews.org/article.pl?sid=25/11/13/0318258&amp;from=rss)
* [2025-11-14, 11:41:47](https://news.ycombinator.com/item?id=45925890) - [Show HN: Encore – Type-safe back end framework that generates infra from code](https://github.com/encoredev/encore)
* [2025-11-14, 10:54:20](https://lobste.rs/s/ndfgai/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/ndfgai/what_are_you_doing_this_weekend)
* [2025-11-14, 10:00:00](https://yro.slashdot.org/story/25/11/14/0424237/hyundai-data-breach-may-have-leaked-drivers-personal-information?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hyundai Data Breach May Have Leaked Drivers&apos; Personal Information](https://yro.slashdot.org/story/25/11/14/0424237/hyundai-data-breach-may-have-leaked-drivers-personal-information?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-14, 09:53:13](https://news.ycombinator.com/item?id=45925431) - [V8 Garbage Collector](https://wingolog.org/archives/2025/11/13/the-last-couple-years-in-v8s-garbage-collector)
* [2025-11-14, 09:51:26](https://lobste.rs/s/tldyec/audio_primary_content_for_inspiration) - [Audio-primary content for inspiration in software development?](https://lobste.rs/s/tldyec/audio_primary_content_for_inspiration)
* [2025-11-14, 09:23:47](https://lobste.rs/s/l4vg9a/this_isn_t_battle) - [This Isn&apos;t a Battle](https://my-notes.dragas.net/2025/11/14/this-isnt-a-battle/)
* [2025-11-14, 07:10:10](https://news.ycombinator.com/item?id=45924619) - [RegreSQL: Regression Testing for PostgreSQL Queries](https://boringsql.com/posts/regresql-testing-queries/)
* [2025-11-14, 07:00:00](https://tech.slashdot.org/story/25/11/14/0416257/amazon-renames-project-kuiper-satellite-internet-venture-to-leo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Renames &apos;Project Kuiper&apos; Satellite Internet Venture To &apos;Leo&apos;](https://tech.slashdot.org/story/25/11/14/0416257/amazon-renames-project-kuiper-satellite-internet-venture-to-leo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-14, 06:59:00](https://soylentnews.org/article.pl?sid=25/11/13/0314253&amp;from=rss) - [Your Worn-Out Keyboard Keys Reveal More About You Than You Think](https://soylentnews.org/article.pl?sid=25/11/13/0314253&amp;from=rss)
* [2025-11-14, 06:54:12](https://lobste.rs/s/9dkn3m/nation_state_threat_actor_used_claude) - [Nation state threat actor used Claude Code to orchestrate cyber attacks](https://www.anthropic.com/news/disrupting-AI-espionage)
* [2025-11-14, 06:13:09](https://news.ycombinator.com/item?id=45924345) - [Hooked on Sonics: Experimenting with Sound in 19th-Century Popular Science](https://publicdomainreview.org/essay/science-of-sound/)
* [2025-11-14, 05:23:04](https://lobste.rs/s/3wgqtc/how_get_north_korea_antarctica_vps) - [How to Get a North Korea / Antarctica VPS](https://blog.lyc8503.net/en/post/asn-5-worldwide-servers/)
* [2025-11-14, 04:48:43](https://lobste.rs/s/xsq6ld/furgit_fast_implementation_git_pure_go) - [Furgit: fast implementation of Git in pure Go](https://github.com/runxiyu/furgit)
* [2025-11-14, 04:44:36](https://lobste.rs/s/hh7pz4/domain_specific_languages_code) - [Domain-specific Languages and Code Synthesis Using Haskell](https://queue.acm.org/detail.cfm?id=2617811)
* [2025-11-14, 03:33:44](https://lobste.rs/s/3rqy74/logic_cue) - [The Logic of CUE](https://cuelang.org/docs/concept/the-logic-of-cue/)
* [2025-11-14, 03:30:00](https://news.slashdot.org/story/25/11/13/2327240/world-still-on-track-for-catastrophic-26c-temperature-rise-report-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [World Still On Track For Catastrophic 2.6C Temperature Rise, Report Finds](https://news.slashdot.org/story/25/11/13/2327240/world-still-on-track-for-catastrophic-26c-temperature-rise-report-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-14, 02:12:00](https://soylentnews.org/article.pl?sid=25/11/13/033247&amp;from=rss) - [Bombshell Report Exposes How Meta Relied on Scam Ad Profits to Fund AI](https://soylentnews.org/article.pl?sid=25/11/13/033247&amp;from=rss)
* [2025-11-14, 01:30:50](https://news.ycombinator.com/item?id=45922850) - [How to Get a North Korea / Antarctica VPS](https://blog.lyc8503.net/en/post/asn-5-worldwide-servers/)
* [2025-11-14, 01:30:00](https://games.slashdot.org/story/25/11/13/2333224/netflixs-new-era-of-tv-games-starts-now?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Netflix&apos;s New Era of TV Games Starts Now](https://games.slashdot.org/story/25/11/13/2333224/netflixs-new-era-of-tv-games-starts-now?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-14, 00:50:00](https://tech.slashdot.org/story/25/11/13/2315231/worlds-first-flying-car-factory-begins-production-in-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [World&apos;s First Flying Car Factory Begins Production In China](https://tech.slashdot.org/story/25/11/13/2315231/worlds-first-flying-car-factory-begins-production-in-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-14, 00:18:23](https://news.ycombinator.com/item?id=45922420) - [What Happened with the CIA and The Paris Review?](https://www.theparisreview.org/blog/2025/11/11/what-really-happened-with-the-cia-and-the-paris-review-a-conversation-with-lance-richardson/)
* [2025-11-14, 00:10:00](https://tech.slashdot.org/story/25/11/13/2247206/jack-dorsey-funds-divine-a-vine-reboot-that-includes-vines-video-archive?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Jack Dorsey Funds diVine, a Vine Reboot That Includes Vine&apos;s Video Archive](https://tech.slashdot.org/story/25/11/13/2247206/jack-dorsey-funds-divine-a-vine-reboot-that-includes-vines-video-archive?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-13, 23:50:00](https://entertainment.slashdot.org/story/25/11/13/2259255/apple-tries-selling-230-iphone-pocket-sock?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Tries Selling $230 iPhone Pocket &apos;Sock&apos;](https://entertainment.slashdot.org/story/25/11/13/2259255/apple-tries-selling-230-iphone-pocket-sock?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-13, 23:30:00](https://news.slashdot.org/story/25/11/13/2231251/apple-cuts-app-store-fee-in-half-for-mini-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Cuts App Store Fee In Half For &apos;Mini Apps&apos;](https://news.slashdot.org/story/25/11/13/2231251/apple-cuts-app-store-fee-in-half-for-mini-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-13, 22:56:49](https://lobste.rs/s/absftt/spectral_rendering_part_2_real_time) - [Spectral rendering, part 2: Real-time rendering](https://momentsingraphics.de/SpectralRendering2Rendering.html)
* [2025-11-13, 22:50:00](https://search.slashdot.org/story/25/11/13/2218200/linkedin-is-making-it-easier-to-search-for-people-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [LinkedIn Is Making It Easier To Search For People With AI](https://search.slashdot.org/story/25/11/13/2218200/linkedin-is-making-it-easier-to-search-for-people-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-13, 22:13:00](https://science.slashdot.org/story/25/11/13/2211216/blue-origin-sticks-first-new-glenn-rocket-landing-and-launches-nasa-spacecraft?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Blue Origin Sticks First New Glenn Rocket Landing and Launches NASA Spacecraft](https://science.slashdot.org/story/25/11/13/2211216/blue-origin-sticks-first-new-glenn-rocket-landing-and-launches-nasa-spacecraft?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-13, 21:33:26](https://news.ycombinator.com/item?id=45920881) - [650GB of Data (Delta Lake on S3). Polars vs. DuckDB vs. Daft vs. Spark](https://dataengineeringcentral.substack.com/p/650gb-of-data-delta-lake-on-s3-polars)
* [2025-11-13, 21:23:00](https://soylentnews.org/article.pl?sid=25/11/12/1214254&amp;from=rss) - [Google&apos;s Gemini Deep Research Can Now Read Your Gmail and Rummage Through Google Drive](https://soylentnews.org/article.pl?sid=25/11/12/1214254&amp;from=rss)
* [2025-11-13, 21:18:14](https://news.ycombinator.com/item?id=45920677) - [OpenMANET Wi-Fi HaLow open-source project for Raspberry Pi–based MANET radios](https://openmanet.net/)
* [2025-11-13, 20:06:25](https://lobste.rs/s/nrrijz/rust_android_move_fast_fix_things) - [Rust in Android: move fast and fix things](https://security.googleblog.com/2025/11/rust-in-android-move-fast-fix-things.html)
* [2025-11-13, 18:34:12](https://news.ycombinator.com/item?id=45918638) - [Disrupting the first reported AI-orchestrated cyber espionage campaign](https://www.anthropic.com/news/disrupting-AI-espionage)
* [2025-11-13, 17:39:13](https://news.ycombinator.com/item?id=45917875) - [Nano Banana can be prompt engineered for nuanced AI image generation](https://minimaxir.com/2025/11/nano-banana-prompts/)
* [2025-11-13, 16:57:41](https://lobste.rs/s/ccy6ey/messing_with_bots) - [Messing with bots](https://herman.bearblog.dev/messing-with-bots/)
* [2025-11-13, 16:41:00](https://soylentnews.org/article.pl?sid=25/11/12/124239&amp;from=rss) - [Microsoft Task Manager Bug Spawns New Processes](https://soylentnews.org/article.pl?sid=25/11/12/124239&amp;from=rss)
* [2025-11-13, 16:03:04](https://news.ycombinator.com/item?id=45916525) - [Launch HN: Tweeks (YC W25) – Browser extension to deshittify the web](https://www.tweeks.io/onboarding)
* [2025-11-13, 15:51:03](https://lobste.rs/s/4inlhr/language_design_notes) - [Language Design Notes](https://cs.lmu.edu/~ray/notes/languagedesignnotes/)
* [2025-11-13, 15:41:56](https://lobste.rs/s/knelbm/there_is_no_such_thing_as_3_5_inch_floppy) - [There is no such thing as a 3.5 inch floppy disc](https://jdebp.uk/FGA/floppy-discs-are-90mm-not-3-and-a-half-inches.html)
* [2025-11-13, 14:43:58](https://lobste.rs/s/6dfpil/parsing_integers_c) - [Parsing integers in C](https://daniel.haxx.se/blog/2025/11/13/parsing-integers-in-c/)
* [2025-11-13, 13:41:54](https://lobste.rs/s/bz1mxo/ingress_nginx_retirement_what_you_need) - [Ingress NGINX Retirement: What You Need to Know](https://www.kubernetes.dev/blog/2025/11/12/ingress-nginx-retirement/)
* [2025-11-13, 13:38:47](https://news.ycombinator.com/item?id=45914761) - [Blender Lab](https://www.blender.org/news/introducing-blender-lab/)
* [2025-11-13, 13:33:13](https://lobste.rs/s/ouy4dq/patterns_for_defensive_programming_rust) - [Patterns for Defensive Programming in Rust](https://corrode.dev/blog/defensive-programming/)
* [2025-11-13, 11:57:00](https://soylentnews.org/article.pl?sid=25/11/11/0337247&amp;from=rss) - [Want to be More Persuasive? Talk With Your Hands, Study Finds](https://soylentnews.org/article.pl?sid=25/11/11/0337247&amp;from=rss)
* [2025-11-13, 11:16:26](https://lobste.rs/s/erdni0/mergiraf_syntax_aware_merging_for_git) - [Mergiraf: syntax-aware merging for Git](https://lwn.net/Articles/1042355/)
* [2025-11-13, 07:05:00](https://soylentnews.org/article.pl?sid=25/11/11/0336223&amp;from=rss) - [Hyundai&apos;s New EV Training Center Opens Amid Market Turmoil](https://soylentnews.org/article.pl?sid=25/11/11/0336223&amp;from=rss)
* [2025-11-13, 02:33:00](https://soylentnews.org/article.pl?sid=25/11/11/0334251&amp;from=rss) - [Sun: First Glimpse of Polar Magnetic Field in Motion](https://soylentnews.org/article.pl?sid=25/11/11/0334251&amp;from=rss)
* [2025-11-12, 21:49:00](https://soylentnews.org/article.pl?sid=25/11/10/1942230&amp;from=rss) - [Brewing Controversy: How Coffee Sparked Fierce Debate in the 16th-Century](https://soylentnews.org/article.pl?sid=25/11/10/1942230&amp;from=rss)
* [2025-11-12, 20:11:26](https://lobste.rs/s/a1tixp/valve_announces_new_steam_machine_steam) - [Valve Announces New Steam Machine, Steam Controller &amp; Steam Frame](https://www.phoronix.com/news/Steam-Machines-Frame-2026)
* [2025-11-12, 17:05:00](https://soylentnews.org/article.pl?sid=25/11/10/1939208&amp;from=rss) - [NASA Confirms Voyager Spacecraft Has Encountered a “Wall of Fire” at the Edge of the Solar System](https://soylentnews.org/article.pl?sid=25/11/10/1939208&amp;from=rss)
* [2025-11-12, 12:24:00](https://soylentnews.org/article.pl?sid=25/11/10/1931219&amp;from=rss) - [FBI Tries to Unmask Owner of Infamous Archive.is Site](https://soylentnews.org/article.pl?sid=25/11/10/1931219&amp;from=rss)
* [2025-11-12, 07:34:00](https://soylentnews.org/article.pl?sid=25/11/10/1925212&amp;from=rss) - [Trinity Desktop Environment R14.1.5 Released with Support for Debian Trixie](https://soylentnews.org/article.pl?sid=25/11/10/1925212&amp;from=rss)
* [2025-11-12, 02:51:00](https://soylentnews.org/article.pl?sid=25/11/10/122217&amp;from=rss) - [The Art and Science of Negotiation](https://soylentnews.org/article.pl?sid=25/11/10/122217&amp;from=rss)
* [2025-11-11, 22:03:00](https://soylentnews.org/article.pl?sid=25/11/10/1159252&amp;from=rss) - [MX Linux 25 “Infinity” Is Now Available for Download, Based on Debian 13 “Trixie”](https://soylentnews.org/article.pl?sid=25/11/10/1159252&amp;from=rss)
* [2025-11-11, 17:18:00](https://soylentnews.org/article.pl?sid=25/11/10/1130222&amp;from=rss) - [New Physical Attacks Are Quickly Diluting Secure Enclave Defenses From Nvidia, AMD, and Intel](https://soylentnews.org/article.pl?sid=25/11/10/1130222&amp;from=rss)
* [2025-11-11, 12:37:00](https://soylentnews.org/article.pl?sid=25/11/09/141240&amp;from=rss) - [Watch Out for These Recent Windows and NPM Vulnerabilities](https://soylentnews.org/article.pl?sid=25/11/09/141240&amp;from=rss)
* [2025-11-11, 07:50:00](https://soylentnews.org/article.pl?sid=25/11/09/1352235&amp;from=rss) - [UK Carriers to Block Spoofed Phone Numbers in Fraud Crackdown](https://soylentnews.org/article.pl?sid=25/11/09/1352235&amp;from=rss)
* [2025-11-11, 03:04:00](https://soylentnews.org/article.pl?sid=25/11/09/1338227&amp;from=rss) - [AI Sets Up Kodak Moment for Global Consultants](https://soylentnews.org/article.pl?sid=25/11/09/1338227&amp;from=rss)
* [2025-11-10, 22:22:00](https://soylentnews.org/article.pl?sid=25/11/08/2137231&amp;from=rss) - [EBikes Banned from NSW Trains Due To Fire Hazard](https://soylentnews.org/article.pl?sid=25/11/08/2137231&amp;from=rss)
* [2025-11-10, 17:40:00](https://soylentnews.org/article.pl?sid=25/11/08/2128227&amp;from=rss) - [Australian Wine Industry Battles Fakes With Smart Bottle Caps](https://soylentnews.org/article.pl?sid=25/11/08/2128227&amp;from=rss)
* [2025-11-10, 13:11:49](https://news.ycombinator.com/item?id=45875618) - [Honda: 2 years of ml vs 1 month of prompting - heres what we learned](https://www.levs.fyi/blog/2-years-of-ml-vs-1-month-of-prompting/)
* [2025-11-10, 13:00:00](https://soylentnews.org/article.pl?sid=25/11/08/2122221&amp;from=rss) - [Plumbing the Universe for Dark Matter](https://soylentnews.org/article.pl?sid=25/11/08/2122221&amp;from=rss)
* [2025-11-10, 08:21:00](https://soylentnews.org/article.pl?sid=25/11/08/214219&amp;from=rss) - [The Chemistry Behind That Pricey Cup of Civet Coffee](https://soylentnews.org/article.pl?sid=25/11/08/214219&amp;from=rss)
* [2025-11-10, 03:47:00](https://soylentnews.org/article.pl?sid=25/11/08/1723229&amp;from=rss) - [Blame game over Air India crash goes on](https://soylentnews.org/article.pl?sid=25/11/08/1723229&amp;from=rss)
* [2025-11-10, 03:29:27](https://news.ycombinator.com/item?id=45872066) - [Scientists Produce Powerhouse Pigment Behind Octopus Camouflage](https://today.ucsd.edu/story/scientists-produce-powerhouse-pigment-behind-octopus-camouflage)
