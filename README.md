# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence Developments and Controversies

* [IBM CEO says there is 'no way' spending on AI data centers will pay off](https://www.businessinsider.com/ibm-ceo-big-tech-ai-capex-data-center-spending-2025-12) ([comments](https://news.ycombinator.com/item?id=46124324))

* [Mistral 3 family of models released](https://mistral.ai/news/mistral-3) ([comments](https://news.ycombinator.com/item?id=46121889))

* [OpenAI declares 'code red' as Google catches up in AI race](https://www.theverge.com/news/836212/openai-code-red-chatgpt) ([comments](https://news.ycombinator.com/item?id=46121870))

* [An Independent Effort Says AI Is the Secret To Topple 2-Party Power In Congress](https://politics.slashdot.org/story/25/12/02/0120200/an-independent-effort-says-ai-is-the-secret-to-topple-2-party-power-in-congress?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=46120611))

* [Mind-Reading Devices Can Now Predict Preconscious Thoughts: Is It Time to Worry?](https://soylentnews.org/article.pl?sid=25/12/01/043228&from=rss)

## Tech Failures and Risks

* [Google's Vibe Coding Platform Deletes Entire Drive](https://hardware.slashdot.org/story/25/12/02/0546206/googles-vibe-coding-platform-deletes-entire-drive?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=46124324))

* [Zillow Drops Climate Risk Scores After Agents Complained of Lost Sales](https://news.slashdot.org/story/25/12/02/0536226/zillow-drops-climate-risk-scores-after-agents-complained-of-lost-sales?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Supreme Court Hears Copyright Battle Over Online Music Piracy](https://yro.slashdot.org/story/25/12/02/0517211/supreme-court-hears-copyright-battle-over-online-music-piracy?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Ukraine First Country in Europe to Get Starlink Satellite Phone Service](https://soylentnews.org/article.pl?sid=25/12/01/0343223&from=rss)

## Advancements in Software

* [Progress on TypeScript 7 - December 2025](https://devblogs.microsoft.com/typescript/progress-on-typescript-7-december-2025/) ([comments](https://lobste.rs/s/xvroiv/progress_on_typescript_7_december_2025))

* [Zig's new plan for asynchronous programs](https://lwn.net/SubscriberLink/1046084/4c048ee008e1c70e/) ([comments](https://news.ycombinator.com/item?id=46121539))

* [Solid state volumetric display](https://mastodon.social/@ancientjames/115648797968721973) ([comments](https://lobste.rs/s/tyehi5/solid_state_volumetric_display))

* [nixtml: Static website and blog generator written in nix](https://github.com/arnarg/nixtml) ([comments](https://lobste.rs/s/ysvvbi/nixtml_static_website_blog_generator))

## Cryptocurrency and Blockchain

* [Swiss Illegal Cryptocurrency Mixing Service Shut Down](https://slashdot.org/story/25/12/02/0042253/swiss-illegal-cryptocurrency-mixing-service-shut-down?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Bitcoin Mining Needs Regulatory Legislation](https://soylentnews.org/article.pl?sid=25/11/25/157251&from=rss)

## Miscellaneous

* [Steam On Linux Hits An All-Time High In November](https://linux.slashdot.org/story/25/12/02/0525221/steam-on-linux-hits-an-all-time-high-in-november?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Samsung Debuts Its First Trifold Phone](https://mobile.slashdot.org/story/25/12/02/0511211/samsung-debuts-its-first-trifold-phone?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Apple to beat Samsung in smartphone shipments for first time in 14 years](https://sherwood.news/tech/apple-to-beat-samsung-in-smartphone-shipments-for-first-time-in-14-years/) ([comments](https://news.ycombinator.com/item?id=46123747))

* [We Built a Database of 290,000 English Medieval Soldiers](https://developers.slashdot.org/story/25/12/02/0049229/we-built-a-database-of-290000-english-medieval-soldiers?utm_source=rss1.0mainlinkanon&utm_medium=feed)

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

* [2025-12-02, 18:56:58](https://lobste.rs/s/kgtuc6/quantifying_information_loss) - [Quantifying Information Loss](https://www.testingbranch.com/information_loss_and_noise/)
* [2025-12-02, 18:41:43](https://lobste.rs/s/ymwbkg/web_based_markdown_editor_with_no_ai) - [Web-based markdown editor with no AI](https://kraa.io/about)
* [2025-12-02, 18:38:51](https://lobste.rs/s/2toe3f/noise_stability_ml_model_calibration) - [Noise, Stability, and ML model Calibration](https://www.testingbranch.com/noise_study/)
* [2025-12-02, 18:36:41](https://lobste.rs/s/kwbowm/acme_challenge_for_persistent_dns_txt) - [ACME Challenge for Persistent DNS TXT Record Validation](https://datatracker.ietf.org/doc/html/draft-sheurich-acme-dns-persist-01)
* [2025-12-02, 18:18:00](https://hardware.slashdot.org/story/25/12/02/0546206/googles-vibe-coding-platform-deletes-entire-drive?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s Vibe Coding Platform Deletes Entire Drive](https://hardware.slashdot.org/story/25/12/02/0546206/googles-vibe-coding-platform-deletes-entire-drive?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-02, 18:10:23](https://news.ycombinator.com/item?id=46124324) - [IBM CEO says there is &apos;no way&apos; spending on AI data centers will pay off](https://www.businessinsider.com/ibm-ceo-big-tech-ai-capex-data-center-spending-2025-12)
* [2025-12-02, 18:05:44](https://news.ycombinator.com/item?id=46124267) - [Anthropic acquires Bun](https://bun.com/blog/bun-joins-anthropic)
* [2025-12-02, 18:04:23](https://news.ycombinator.com/item?id=46124258) - [Anthropic Acquires Bun](https://www.anthropic.com/news/anthropic-acquires-bun-as-claude-code-reaches-usd1b-milestone)
* [2025-12-02, 17:59:53](https://news.ycombinator.com/item?id=46124205) - [100000 TPS over a billion rows: the unreasonable effectiveness of SQLite](https://andersmurphy.com/2025/12/02/100000-tps-over-a-billion-rows-the-unreasonable-effectiveness-of-sqlite.html)
* [2025-12-02, 17:58:11](https://news.ycombinator.com/item?id=46124179) - [School Cell Phone Bans and Student Achievement (NBER Digest)](https://www.nber.org/digest/202512/school-cell-phone-bans-and-student-achievement)
* [2025-12-02, 17:54:35](https://lobste.rs/s/xvroiv/progress_on_typescript_7_december_2025) - [Progress on TypeScript 7 - December 2025](https://devblogs.microsoft.com/typescript/progress-on-typescript-7-december-2025/)
* [2025-12-02, 17:48:33](https://news.ycombinator.com/item?id=46124063) - [The Junior Hiring Crisis](https://people-work.io/blog/junior-hiring-crisis/)
* [2025-12-02, 17:37:06](https://news.ycombinator.com/item?id=46123921) - [Progress on TypeScript 7 – December 2025](https://devblogs.microsoft.com/typescript/progress-on-typescript-7-december-2025/)
* [2025-12-02, 17:25:18](https://lobste.rs/s/tvweri/emacsconf_2025) - [EmacsConf 2025](https://emacsconf.org/2025/)
* [2025-12-02, 17:24:33](https://news.ycombinator.com/item?id=46123747) - [Apple to beat Samsung in smartphone shipments for first time in 14 years](https://sherwood.news/tech/apple-to-beat-samsung-in-smartphone-shipments-for-first-time-in-14-years/)
* [2025-12-02, 17:17:00](https://news.slashdot.org/story/25/12/02/0536226/zillow-drops-climate-risk-scores-after-agents-complained-of-lost-sales?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Zillow Drops Climate Risk Scores After Agents Complained of Lost Sales](https://news.slashdot.org/story/25/12/02/0536226/zillow-drops-climate-risk-scores-after-agents-complained-of-lost-sales?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-02, 17:00:12](https://news.ycombinator.com/item?id=46123374) - [Poka Labs (YC S24) Is Hiring a Founding Engineer](https://www.ycombinator.com/companies/poka-labs/jobs/RCQgmqB-founding-engineer)
* [2025-12-02, 16:44:50](https://lobste.rs/s/tyehi5/solid_state_volumetric_display) - [Solid state volumetric display](https://mastodon.social/@ancientjames/115648797968721973)
* [2025-12-02, 16:42:31](https://lobste.rs/s/fvdh2d/zmx_session_persistence_for_terminal) - [zmx: session persistence for terminal processes](https://github.com/neurosnap/zmx)
* [2025-12-02, 16:30:52](https://news.ycombinator.com/item?id=46122957) - [4.3M Browsers Infected: Inside ShadyPanda&apos;s 7-Year Malware Campaign](https://www.koi.ai/blog/4-million-browsers-infected-inside-shadypanda-7-year-malware-campaign)
* [2025-12-02, 16:22:00](https://soylentnews.org/article.pl?sid=25/12/01/0413229&amp;from=rss) - [Major Software Version Releases for Blender and Bottles](https://soylentnews.org/article.pl?sid=25/12/01/0413229&amp;from=rss)
* [2025-12-02, 16:16:00](https://yro.slashdot.org/story/25/12/02/0530257/trump-administration-to-take-equity-stake-in-former-intel-ceos-chip-startup?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Administration To Take Equity Stake In Former Intel CEO&apos;s Chip Startup](https://yro.slashdot.org/story/25/12/02/0530257/trump-administration-to-take-equity-stake-in-former-intel-ceos-chip-startup?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-02, 15:15:00](https://linux.slashdot.org/story/25/12/02/0525221/steam-on-linux-hits-an-all-time-high-in-november?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Steam On Linux Hits An All-Time High In November](https://linux.slashdot.org/story/25/12/02/0525221/steam-on-linux-hits-an-all-time-high-in-november?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-02, 15:01:53](https://news.ycombinator.com/item?id=46121889) - [Mistral 3 family of models released](https://mistral.ai/news/mistral-3)
* [2025-12-02, 15:00:16](https://news.ycombinator.com/item?id=46121870) - [OpenAI declares &apos;code red&apos; as Google catches up in AI race](https://www.theverge.com/news/836212/openai-code-red-chatgpt)
* [2025-12-02, 14:59:40](https://news.ycombinator.com/item?id=46121860) - [Show HN: Marmot – Single-binary data catalog (no Kafka, no Elasticsearch)](https://github.com/marmotdata/marmot)
* [2025-12-02, 14:54:49](https://news.ycombinator.com/item?id=46121799) - [Nixtml: Static website and blog generator written in Nix](https://github.com/arnarg/nixtml)
* [2025-12-02, 14:52:22](https://lobste.rs/s/ysvvbi/nixtml_static_website_blog_generator) - [nixtml: Static website and blog generator written in nix](https://github.com/arnarg/nixtml)
* [2025-12-02, 14:31:16](https://news.ycombinator.com/item?id=46121539) - [Zig&apos;s new plan for asynchronous programs](https://lwn.net/SubscriberLink/1046084/4c048ee008e1c70e/)
* [2025-12-02, 14:20:03](https://lobste.rs/s/fd2j1n/my_first_impressions_meshcore_off_grid) - [My First Impressions of MeshCore Off-Grid Messaging](https://mtlynch.io/first-impressions-of-meshcore/)
* [2025-12-02, 14:14:00](https://yro.slashdot.org/story/25/12/02/0517211/supreme-court-hears-copyright-battle-over-online-music-piracy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Supreme Court Hears Copyright Battle Over Online Music Piracy](https://yro.slashdot.org/story/25/12/02/0517211/supreme-court-hears-copyright-battle-over-online-music-piracy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-02, 14:01:05](https://news.ycombinator.com/item?id=46121243) - [Proximity to coworkers increases long-run development, lowers short-term output (2023)](https://pallais.scholars.harvard.edu/publications/power-proximity-coworkers-training-tomorrow-or-productivity-today)
* [2025-12-02, 13:46:18](https://lobste.rs/s/cw85yf/lazier_binary_decision_diagrams_bdds_for) - [Lazier Binary Decision Diagrams (BDDs) for set-theoretic types](https://elixir-lang.org/blog/2025/12/02/lazier-bdds-for-set-theoretic-types/)
* [2025-12-02, 13:13:00](https://politics.slashdot.org/story/25/12/02/0120200/an-independent-effort-says-ai-is-the-secret-to-topple-2-party-power-in-congress?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [An Independent Effort Says AI Is the Secret To Topple 2-Party Power In Congress](https://politics.slashdot.org/story/25/12/02/0120200/an-independent-effort-says-ai-is-the-secret-to-topple-2-party-power-in-congress?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-02, 12:38:28](https://news.ycombinator.com/item?id=46120611) - [Python Data Science Handbook](https://jakevdp.github.io/PythonDataScienceHandbook/)
* [2025-12-02, 12:37:47](https://news.ycombinator.com/item?id=46120603) - [Lazier Binary Decision Diagrams for set-theoretic types](https://elixir-lang.org/blog/2025/12/02/lazier-bdds-for-set-theoretic-types/)
* [2025-12-02, 12:30:19](https://lobste.rs/s/dngk6l/go_proposal_type_safe_error_checking) - [Go proposal: Type-safe error checking](https://antonz.org/accepted/errors-astype/)
* [2025-12-02, 12:28:34](https://news.ycombinator.com/item?id=46120549) - [A series of vignettes from my childhood and early career](https://www.jasonscheirer.com/weblog/vignettes/)
* [2025-12-02, 11:40:00](https://soylentnews.org/article.pl?sid=25/12/01/043228&amp;from=rss) - [Mind-Reading Devices Can Now Predict Preconscious Thoughts: Is It Time to Worry?](https://soylentnews.org/article.pl?sid=25/12/01/043228&amp;from=rss)
* [2025-12-02, 11:39:18](https://lobste.rs/s/1naccs/new_ai_slop_signal_code_blocks_with_weird) - [New AI slop signal: code blocks with weird indentation](https://xeiaso.net/notes/2025/slop-signal-indentation/)
* [2025-12-02, 11:31:23](https://lobste.rs/s/2ucpgd/addressing_adding_situation) - [Addressing the adding situation](https://xania.org/202512/02-adding-integers)
* [2025-12-02, 11:30:29](https://news.ycombinator.com/item?id=46120181) - [Addressing the adding situation](https://xania.org/202512/02-adding-integers)
* [2025-12-02, 10:00:00](https://science.slashdot.org/story/25/12/02/0125248/russia-still-using-black-market-starlink-terminals-on-its-drones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Russia Still Using Black Market Starlink Terminals On Its Drones](https://science.slashdot.org/story/25/12/02/0125248/russia-still-using-black-market-starlink-terminals-on-its-drones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-02, 09:51:42](https://news.ycombinator.com/item?id=46119500) - [Advent of Compiler Optimisations 2025](https://xania.org/202511/advent-of-compiler-optimisation)
* [2025-12-02, 09:34:34](https://lobste.rs/s/lfnjvn/ptrhash_minimal_perfect_hashing_at_ram) - [PtrHash: Minimal Perfect Hashing at RAM Throughput](https://curiouscoding.nl/posts/ptrhash/)
* [2025-12-02, 09:11:41](https://news.ycombinator.com/item?id=46119214) - [Comparing AWS Lambda ARM64 vs. x86_64 Performance Across Runtimes in Late 2025](https://chrisebert.net/comparing-aws-lambda-arm64-vs-x86_64-performance-across-multiple-runtimes-in-late-2025/)
* [2025-12-02, 07:00:11](https://lobste.rs/s/r2bamx/decreasing_certificate_lifetimes_45) - [Decreasing Certificate Lifetimes to 45 Days](https://letsencrypt.org/2025/12/02/from-90-to-45.html)
* [2025-12-02, 07:00:00](https://science.slashdot.org/story/25/12/02/0110257/russian-launch-site-mishap-shows-perilous-state-of-storied-space-program?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Russian Launch Site Mishap Shows Perilous State of Storied Space Program](https://science.slashdot.org/story/25/12/02/0110257/russian-launch-site-mishap-shows-perilous-state-of-storied-space-program?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-02, 06:57:00](https://soylentnews.org/article.pl?sid=25/12/01/0350249&amp;from=rss) - [Billion-Dollar AI Chip Deal Between Google and Meta Could be on the Cards](https://soylentnews.org/article.pl?sid=25/12/01/0350249&amp;from=rss)
* [2025-12-02, 06:26:01](https://lobste.rs/s/c8bzzd/gitmal_static_pages_generator_for_git) - [Gitmal - a static pages generator for Git repos](https://github.com/antonmedv/gitmal)
* [2025-12-02, 05:13:00](https://mobile.slashdot.org/story/25/12/02/0511211/samsung-debuts-its-first-trifold-phone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Samsung Debuts Its First Trifold Phone](https://mobile.slashdot.org/story/25/12/02/0511211/samsung-debuts-its-first-trifold-phone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-02, 05:10:01](https://news.ycombinator.com/item?id=46117802) - [Apple Releases Open Weights Video Model](https://starflow-v.github.io)
* [2025-12-02, 03:30:00](https://developers.slashdot.org/story/25/12/02/0049229/we-built-a-database-of-290000-english-medieval-soldiers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;We Built a Database of 290,000 English Medieval Soldiers&apos;](https://developers.slashdot.org/story/25/12/02/0049229/we-built-a-database-of-290000-english-medieval-soldiers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-02, 03:23:10](https://news.ycombinator.com/item?id=46117112) - [What will enter the public domain in 2026?](https://publicdomainreview.org/features/entering-the-public-domain/2026/)
* [2025-12-02, 02:09:00](https://soylentnews.org/article.pl?sid=25/12/01/0343223&amp;from=rss) - [Ukraine First Country in Europe to Get Starlink Satellite Phone Service](https://soylentnews.org/article.pl?sid=25/12/01/0343223&amp;from=rss)
* [2025-12-02, 01:25:00](https://slashdot.org/story/25/12/02/0042253/swiss-illegal-cryptocurrency-mixing-service-shut-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Swiss Illegal Cryptocurrency Mixing Service Shut Down](https://slashdot.org/story/25/12/02/0042253/swiss-illegal-cryptocurrency-mixing-service-shut-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-02, 00:45:00](https://mobile.slashdot.org/story/25/12/02/008223/smartphones-at-age-12-linked-to-worse-health?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Smartphones At Age 12 Linked To Worse Health](https://mobile.slashdot.org/story/25/12/02/008223/smartphones-at-age-12-linked-to-worse-health?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-02, 00:25:00](https://lobste.rs/s/azyiij/freebsd_15_0_release_announcement) - [FreeBSD 15.0-RELEASE Announcement](https://www.freebsd.org/releases/15.0R/announce/)
* [2025-12-02, 00:23:00](https://apple.slashdot.org/story/25/12/02/0021253/apple-ai-chief-retiring-after-siri-failure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple AI Chief Retiring After Siri Failure](https://apple.slashdot.org/story/25/12/02/0021253/apple-ai-chief-retiring-after-siri-failure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-02, 00:02:00](https://yro.slashdot.org/story/25/12/01/2249209/flock-uses-overseas-gig-workers-to-build-its-surveillance-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Flock Uses Overseas Gig Workers To Build Its Surveillance AI](https://yro.slashdot.org/story/25/12/01/2249209/flock-uses-overseas-gig-workers-to-build-its-surveillance-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-01, 23:37:22](https://lobste.rs/s/fkt2is/claude_4_5_opus_soul_document) - [Claude 4.5 Opus&apos; Soul Document](https://www.lesswrong.com/posts/vpNG99GhbBoLov9og/claude-4-5-opus-soul-document)
* [2025-12-01, 23:20:00](https://tech.slashdot.org/story/25/12/01/2239244/austrias-rebel-nuns-refuse-to-give-up-instagram-to-stay-in-their-convent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Austria&apos;s Rebel Nuns Refuse To Give Up Instagram To Stay In Their Convent](https://tech.slashdot.org/story/25/12/01/2239244/austrias-rebel-nuns-refuse-to-give-up-instagram-to-stay-in-their-convent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-01, 21:26:00](https://soylentnews.org/article.pl?sid=25/12/01/0335217&amp;from=rss) - [NTSB Finds Root Cause of Container Ship Hitting Baltimore Bridge](https://soylentnews.org/article.pl?sid=25/12/01/0335217&amp;from=rss)
* [2025-12-01, 19:33:05](https://lobste.rs/s/dv0uwu/why_xor_eax_eax) - [Why xor eax, eax?](https://xania.org/202512/01-xor-eax-eax)
* [2025-12-01, 18:20:56](https://lobste.rs/s/gvldct/llms_are_failure_new_ai_winter_is_coming) - [LLMs are a failure. A new AI winter is coming](https://taranis.ie/llms-are-a-failure-a-new-ai-winter-is-coming/)
* [2025-12-01, 18:19:04](https://lobste.rs/s/lkvvh7/don_t_click_here) - [Don&apos;t Click Here](https://www.dont-click-here.com)
* [2025-12-01, 16:40:00](https://soylentnews.org/article.pl?sid=25/11/30/0244232&amp;from=rss) - [Pebble, the E-Ink Smartwatch That Refuses to Die, Just Went Fully Open Source](https://soylentnews.org/article.pl?sid=25/11/30/0244232&amp;from=rss)
* [2025-12-01, 11:51:00](https://soylentnews.org/article.pl?sid=25/11/30/0234208&amp;from=rss) - [ClamAV Signature Retirement Announcement](https://soylentnews.org/article.pl?sid=25/11/30/0234208&amp;from=rss)
* [2025-12-01, 10:49:48](https://lobste.rs/s/8eawgd/building_perfect_linux_pc_with_linus) - [Building the perfect Linux PC with Linus Torvalds](https://youtu.be/mfv0V1SxbNA)
* [2025-12-01, 10:36:22](https://lobste.rs/s/6joasa/punycode_my_new_favorite_algorithm) - [Punycode: My New Favorite Algorithm](https://www.iankduncan.com/engineering/2025-12-01-punycode)
* [2025-12-01, 10:14:59](https://lobste.rs/s/jxubs2/internet_handle) - [Internet Handle](https://internethandle.org/)
* [2025-12-01, 07:07:00](https://soylentnews.org/article.pl?sid=25/11/30/0229203&amp;from=rss) - [Roblox to Use AI for User Age Identification but Aus Government Wants More](https://soylentnews.org/article.pl?sid=25/11/30/0229203&amp;from=rss)
* [2025-12-01, 02:20:00](https://soylentnews.org/article.pl?sid=25/11/30/0224246&amp;from=rss) - [Particle Accelerator Waste Could Help Produce Cancer-Fighting Materials](https://soylentnews.org/article.pl?sid=25/11/30/0224246&amp;from=rss)
* [2025-11-30, 21:34:00](https://soylentnews.org/article.pl?sid=25/11/30/0218206&amp;from=rss) - [AI-Induced Psychosis: The Danger of Humans and Machines Hallucinating Together](https://soylentnews.org/article.pl?sid=25/11/30/0218206&amp;from=rss)
* [2025-11-30, 16:51:00](https://soylentnews.org/article.pl?sid=25/11/26/1555213&amp;from=rss) - [Rust for Linux Kernel Co-Maintainer Formally Steps Down](https://soylentnews.org/article.pl?sid=25/11/26/1555213&amp;from=rss)
* [2025-11-30, 14:17:00](https://soylentnews.org/article.pl?sid=25/11/26/1550227&amp;from=rss) - [Tor Switches to New Counter Galois Onion Relay Encryption Algorithm](https://soylentnews.org/article.pl?sid=25/11/26/1550227&amp;from=rss)
* [2025-11-30, 11:43:00](https://soylentnews.org/article.pl?sid=25/11/26/149224&amp;from=rss) - [Beijing Unveils Supercritical CO2 Turbine That Could Upend Power Tech](https://soylentnews.org/article.pl?sid=25/11/26/149224&amp;from=rss)
* [2025-11-30, 11:03:13](https://news.ycombinator.com/item?id=46095662) - [Beej&apos;s Guide to Learning Computer Science](https://beej.us/guide/bglcs/)
* [2025-11-30, 09:12:00](https://soylentnews.org/article.pl?sid=25/11/26/1415217&amp;from=rss) - [The Unpowered SSDs in Your Drawer Are Slowly Losing Your Data](https://soylentnews.org/article.pl?sid=25/11/26/1415217&amp;from=rss)
* [2025-11-30, 06:56:33](https://news.ycombinator.com/item?id=46094460) - [I Designed and Printed a Custom Nose Guard to Help My Dog with DLE](https://snoutcover.com/billie-story)
* [2025-11-30, 06:53:00](https://soylentnews.org/article.pl?sid=25/11/25/1521238&amp;from=rss) - [Horse Virus EHV-1 Outbreak Spreads to Eight Texas Counties: Two Horses Have Died](https://soylentnews.org/article.pl?sid=25/11/25/1521238&amp;from=rss)
* [2025-11-30, 04:38:00](https://soylentnews.org/article.pl?sid=25/11/25/1517228&amp;from=rss) - [Scientists Unveil Breakthrough Low-Temperature Fuel Cell That Could Revolutionize Hydrogen Power](https://soylentnews.org/article.pl?sid=25/11/25/1517228&amp;from=rss)
* [2025-11-30, 04:09:41](https://news.ycombinator.com/item?id=46093613) - [YouTube increases FreeBASIC performance (2019)](https://freebasic.net/forum/viewtopic.php?t=27927)
* [2025-11-30, 02:23:00](https://soylentnews.org/article.pl?sid=25/11/25/1514218&amp;from=rss) - [Myths About Rapid Spread of the Black Death Influenced by Single “Literary Tale”](https://soylentnews.org/article.pl?sid=25/11/25/1514218&amp;from=rss)
* [2025-11-30, 00:05:00](https://soylentnews.org/article.pl?sid=25/11/25/1512241&amp;from=rss) - [A Rare GM EV1 Saved From The Crusher is Going to be Driveable Again](https://soylentnews.org/article.pl?sid=25/11/25/1512241&amp;from=rss)
* [2025-11-29, 21:56:00](https://soylentnews.org/article.pl?sid=25/11/29/2035258&amp;from=rss) - [Valve Announces the Steam Frame: &apos;A New Way to Play Your Entire Steam Library&apos;](https://soylentnews.org/article.pl?sid=25/11/29/2035258&amp;from=rss)
* [2025-11-29, 21:16:00](https://soylentnews.org/article.pl?sid=25/11/25/157251&amp;from=rss) - [Bitcoin Mining Needs Regulatory Legislation](https://soylentnews.org/article.pl?sid=25/11/25/157251&amp;from=rss)
* [2025-11-29, 20:53:00](https://soylentnews.org/article.pl?sid=25/11/29/2053221&amp;from=rss) - [Re-releasing Stories in Queue](https://soylentnews.org/article.pl?sid=25/11/29/2053221&amp;from=rss)
* [2025-11-29, 12:26:00](https://soylentnews.org/article.pl?sid=25/11/26/2246256&amp;from=rss) - [This Linux OS Has Got a Million Downloads Since Windows 10 Support Ended](https://soylentnews.org/article.pl?sid=25/11/26/2246256&amp;from=rss)
* [2025-11-29, 07:43:00](https://soylentnews.org/article.pl?sid=25/11/26/2245225&amp;from=rss) - [Americans With Four-Year Degrees Now Comprise a Record 25% of Unemployed Workers](https://soylentnews.org/article.pl?sid=25/11/26/2245225&amp;from=rss)
* [2025-11-29, 02:58:00](https://soylentnews.org/article.pl?sid=25/11/26/2239240&amp;from=rss) - [China Launches Shenzhou-22 Early for Stranded Space Station Crew](https://soylentnews.org/article.pl?sid=25/11/26/2239240&amp;from=rss)
* [2025-11-28, 22:06:00](https://soylentnews.org/article.pl?sid=25/11/26/2238205&amp;from=rss) - [Cryptology Firm Cancels Elections After Losing Encryption Key](https://soylentnews.org/article.pl?sid=25/11/26/2238205&amp;from=rss)
* [2025-11-28, 16:50:32](https://news.ycombinator.com/item?id=46080307) - [Lowtype: Elegant Types in Ruby](https://codeberg.org/Iow/type)
