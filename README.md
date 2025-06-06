# [News Summary](https://kherrick.github.io/news-summary/)

## Space and Science Updates

* [Breakthrough in search for HIV cure leaves researchers 'overwhelmed'](https://www.theguardian.com/global-development/2025/jun/05/breakthrough-in-search-for-hiv-cure-leaves-researchers-overwhelmed) - Researchers celebrate a significant breakthrough in the hunt for an HIV cure, sparking hope globally. [Comments](https://news.ycombinator.com/item?id=44202664).

* [Japan's Resilience Moon Lander Has Crashed Into The Lunar Surface](https://soylentnews.org/article.pl?sid=25/06/06/1417217&amp;from=rss) - Japan’s ambitious moon lander mission ends in failure after unexpected lunar surface impact. [Comments](https://news.ycombinator.com/item?id=44201583).

* [The Far Side of the Moon May Host the World's Most Sensitive Telescope, Shielded From Interference](https://soylentnews.org/article.pl?sid=25/06/05/1051216&amp;from=rss) - Proposal to establish a highly sensitive telescope on the Moon's far side to avoid earthly interference.

## Tech and Software Developments

* [How we decreased GitLab repo backup times from 48 hours to 41 minutes](https://about.gitlab.com/blog/2025/06/05/how-we-decreased-gitlab-repo-backup-times-from-48-hours-to-41-minutes/) - Detailed optimization effort showcasing immense reduction in GitLab backup times. [Comments](https://news.ycombinator.com/item?id=44201975).

* [An Interactive Guide to Rate Limiting](https://blog.sagyamthapa.com.np/interactive-guide-to-rate-limiting) - A visual and interactive primer on implementing rate-limiting in systems. [Comments](https://news.ycombinator.com/item?id=44201583).

* [Sharing everything I could understand about gradient noise](https://blog.pkh.me/p/42-sharing-everything-i-could-understand-about-gradient-noise.html) - Insights and challenges with gradient noise in machine learning systems. [Comments](https://lobste.rs/s/cnnp08/sharing_everything_i_could_understand).

* [Recovering control flow structures without CFGs](https://purplesyringa.moe/blog/recovering-control-flow-structures-without-cfgs/) - Exploring techniques to restore control flow structures bypassing CFG dependency. [Comments](https://lobste.rs/s/guet32/recovering_control_flow_structures).

## Privacy, AI, and Ethics

* [Meta: Shut down your invasive AI Discover feed](https://www.mozillafoundation.org/en/campaigns/meta-shut-down-your-invasive-ai-discover-feed-now/) - Mozilla critiques Meta's AI-driven feeds for privacy violations and lack of user consent. [Comments](https://news.ycombinator.com/item?id=44201872).

* [OpenAI is retaining all ChatGPT logs "indefinitely." Here's who's affected](https://arstechnica.com/tech-policy/2025/06/openai-confronts-user-panic-over-court-ordered-retention-of-chatgpt-logs/) - Backlash against OpenAI's data retention policies sparks wider privacy concerns. [Comments](https://news.ycombinator.com/item?id=44201785).

* [YouTube Pulls Tech Creator's Self-Hosting Tutorial as 'Harmful Content'](https://news.slashdot.org/story/25/06/06/1039216/youtube-pulls-tech-creators-self-hosting-tutorial-as-harmful-content?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Controversy arises over YouTube's removal of content advocating for self-hosting.

## Emerging Insights in Computing and Programming

* [Sandia turns on brain-like storage-free supercomputer](https://blocksandfiles.com/2025/06/06/sandia-turns-on-brain-like-storage-free-supercomputer/) - Introduction of a novel computational super-system mimicking human brain's data-free processing. [Comments](https://news.ycombinator.com/item?id=44201812).

* [Binary Lambda Calculus](https://gist.github.com/tromp/86b3184f852f65bfb814e3ab0987d861) - Innovative exploration into minimalist programming constructs reshaping computations. [Comments](https://lobste.rs/s/6ssfjk/binary_lambda_calculus).

* [APL Interpreter in Haskell (2024)](https://scharenbroch.dev/projects/apl-interpreter/) - A project blending niche programming paradigms to bring APL interactivity to Haskell. [Comments](https://lobste.rs/s/v8ny3n/apl_interpreter_haskell_2024).

## Corporate and Economic News

* [Apple Faces Billions in Losses as EU Comma Interpretation Ends External Purchase Fees](https://apple.slashdot.org/story/25/06/06/1633206/apple-faces-billions-in-losses-as-eu-comma-interpretation-ends-external-purchase-fees?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Apple grapples with unexpected regulatory challenges, impacting revenues. [Comments](https://apple.slashdot.org/story/25/06/06/1633206).

* [About 20% of Tech Startups Worth More Than $1 Billion Will Fail, Accel Says](https://tech.slashdot.org/story/25/06/06/1414204/about-20-of-tech-startups-worth-more-than-1-billion-will-fail-accel-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Insights into startup volatility prompting warnings for unicorns in tech.

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

* [2025-06-06, 18:28:16](https://lobste.rs/s/wrdnsx/next_phase_jank_s_c_interop) - [The next phase of jank&apos;s C++ interop](https://jank-lang.org/blog/2025-06-06-next-phase-of-interop/)
* [2025-06-06, 18:18:27](https://lobste.rs/s/1yt2qz/supercharging_gcp_navigation_with) - [Supercharging GCP Navigation with Alfred](https://dineshgowda.com/posts/supercharging-gcp-navigation-with-alfred/)
* [2025-06-06, 18:17:00](https://soylentnews.org/article.pl?sid=25/06/05/1218249&amp;from=rss) - [European Commission: Make Europe Great Again for Startups](https://soylentnews.org/article.pl?sid=25/06/05/1218249&amp;from=rss)
* [2025-06-06, 18:10:29](https://news.ycombinator.com/item?id=44203494) - [SaaS is just vendor lock-in with better branding](https://rwsdk.com/blog/saas-is-just-vendor-lock-in-with-better-branding)
* [2025-06-06, 18:09:24](https://news.ycombinator.com/item?id=44203486) - [Great Question (YC W21) Is Hiring a Director of Customer Success](https://www.ycombinator.com/companies/great-question/jobs/fYB5UKu-director-of-customer-success)
* [2025-06-06, 17:18:08](https://news.ycombinator.com/item?id=44203003) - [Series C and Scale (Cursor)](https://www.cursor.com/en/blog/series-c)
* [2025-06-06, 17:07:56](https://lobste.rs/s/6ssfjk/binary_lambda_calculus) - [Binary Lambda Calculus](https://gist.github.com/tromp/86b3184f852f65bfb814e3ab0987d861)
* [2025-06-06, 16:44:12](https://news.ycombinator.com/item?id=44202664) - [Breakthrough in search for HIV cure leaves researchers &apos;overwhelmed&apos;](https://www.theguardian.com/global-development/2025/jun/05/breakthrough-in-search-for-hiv-cure-leaves-researchers-overwhelmed)
* [2025-06-06, 16:40:00](https://apple.slashdot.org/story/25/06/06/1633206/apple-faces-billions-in-losses-as-eu-comma-interpretation-ends-external-purchase-fees?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Faces Billions in Losses as EU Comma Interpretation Ends External Purchase Fees](https://apple.slashdot.org/story/25/06/06/1633206/apple-faces-billions-in-losses-as-eu-comma-interpretation-ends-external-purchase-fees?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-06, 16:30:52](https://news.ycombinator.com/item?id=44202519) - [See how a dollar would have grown over the past 94 years [pdf]](https://www.newyorklifeinvestments.com/assets/documents/education/investing-essentials-growthofadollar.pdf)
* [2025-06-06, 16:03:00](https://soylentnews.org/article.pl?sid=25/06/06/1417217&amp;from=rss) - [Japan&apos;s Resilience Moon Lander Has Crashed Into The Lunar Surface](https://soylentnews.org/article.pl?sid=25/06/06/1417217&amp;from=rss)
* [2025-06-06, 16:00:00](https://tech.slashdot.org/story/25/06/06/1414204/about-20-of-tech-startups-worth-more-than-1-billion-will-fail-accel-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [About 20% of Tech Startups Worth More Than $1 Billion Will Fail, Accel Says](https://tech.slashdot.org/story/25/06/06/1414204/about-20-of-tech-startups-worth-more-than-1-billion-will-fail-accel-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-06, 15:54:52](https://news.ycombinator.com/item?id=44202110) - [Ask HN: Any good tools for viewing congressional bills?](https://news.ycombinator.com/item?id=44202110)
* [2025-06-06, 15:45:48](https://lobste.rs/s/guet32/recovering_control_flow_structures) - [Recovering control flow structures without CFGs](https://purplesyringa.moe/blog/recovering-control-flow-structures-without-cfgs/)
* [2025-06-06, 15:43:05](https://news.ycombinator.com/item?id=44201975) - [How we decreased GitLab repo backup times from 48 hours to 41 minutes](https://about.gitlab.com/blog/2025/06/05/how-we-decreased-gitlab-repo-backup-times-from-48-hours-to-41-minutes/)
* [2025-06-06, 15:36:00](https://news.ycombinator.com/item?id=44201901) - [4-7-8 Breathing](https://www.breathbelly.com/exercises/4-7-8-breathing)
* [2025-06-06, 15:33:10](https://news.ycombinator.com/item?id=44201872) - [Meta: Shut down your invasive AI Discover feed](https://www.mozillafoundation.org/en/campaigns/meta-shut-down-your-invasive-ai-discover-feed-now/)
* [2025-06-06, 15:31:18](https://news.ycombinator.com/item?id=44201857) - [VPN providers in France ordered to block pirate sports IPTV](https://torrentfreak.com/major-vpn-providers-ordered-to-block-pirate-sports-streaming-sites-250516/)
* [2025-06-06, 15:24:44](https://news.ycombinator.com/item?id=44201812) - [Sandia turns on brain-like storage-free supercomputer](https://blocksandfiles.com/2025/06/06/sandia-turns-on-brain-like-storage-free-supercomputer/)
* [2025-06-06, 15:21:24](https://news.ycombinator.com/item?id=44201785) - [OpenAI is retaining all ChatGPT logs \&quot;indefinitely.\&quot; Here&apos;s who&apos;s affected](https://arstechnica.com/tech-policy/2025/06/openai-confronts-user-panic-over-court-ordered-retention-of-chatgpt-logs/)
* [2025-06-06, 15:20:00](https://slashdot.org/story/25/06/06/1357256/trump-ai-czar-sacks-on-universal-basic-income-its-not-going-to-happen?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump AI Czar Sacks on Universal Basic Income: &apos;It&apos;s Not Going To Happen&apos;](https://slashdot.org/story/25/06/06/1357256/trump-ai-czar-sacks-on-universal-basic-income-its-not-going-to-happen?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-06, 15:18:46](https://news.ycombinator.com/item?id=44201762) - [Too Many Open Files](https://mattrighetti.com/2025/06/04/too-many-files-open)
* [2025-06-06, 15:16:58](https://news.ycombinator.com/item?id=44201748) - [Free Gaussian Primitives at Anytime Anywhere for Dynamic Scene Reconstruction](https://zju3dv.github.io/freetimegs/)
* [2025-06-06, 15:15:44](https://news.ycombinator.com/item?id=44201736) - [Self-reported race, ethnicity don&apos;t match genetic ancestry in the U.S.: study](https://www.science.org/content/article/race-ethnicity-don-t-match-genetic-ancestry-according-large-u-s-study)
* [2025-06-06, 14:58:17](https://news.ycombinator.com/item?id=44201583) - [An Interactive Guide to Rate Limiting](https://blog.sagyamthapa.com.np/interactive-guide-to-rate-limiting)
* [2025-06-06, 14:54:02](https://lobste.rs/s/cnnp08/sharing_everything_i_could_understand) - [Sharing everything I could understand about gradient noise](https://blog.pkh.me/p/42-sharing-everything-i-could-understand-about-gradient-noise.html)
* [2025-06-06, 14:40:00](https://news.slashdot.org/story/25/06/06/1039216/youtube-pulls-tech-creators-self-hosting-tutorial-as-harmful-content?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [YouTube Pulls Tech Creator&apos;s Self-Hosting Tutorial as &apos;Harmful Content&apos;](https://news.slashdot.org/story/25/06/06/1039216/youtube-pulls-tech-creators-self-hosting-tutorial-as-harmful-content?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-06, 14:37:19](https://lobste.rs/s/v8ny3n/apl_interpreter_haskell_2024) - [APL Interpreter in Haskell (2024)](https://scharenbroch.dev/projects/apl-interpreter/)
* [2025-06-06, 14:07:28](https://news.ycombinator.com/item?id=44201072) - [Top researchers leave Intel to build startup with &apos;the biggest, baddest CPU&apos;](https://www.oregonlive.com/silicon-forest/2025/06/top-researchers-leave-intel-to-build-startup-with-the-biggest-baddest-cpu.html)
* [2025-06-06, 14:00:00](https://news.slashdot.org/story/25/06/06/1025248/consumers-are-increasingly-turning-to-buy-now-pay-later-services-for-groceries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Consumers Are Increasingly Turning To Buy-Now-Pay-Later Services For Groceries](https://news.slashdot.org/story/25/06/06/1025248/consumers-are-increasingly-turning-to-buy-now-pay-later-services-for-groceries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-06, 13:48:52](https://news.ycombinator.com/item?id=44200895) - [A masochist&apos;s guide to web development](https://sebastiano.tronto.net/blog/2025-06-06-webdev/)
* [2025-06-06, 13:46:17](https://news.ycombinator.com/item?id=44200870) - [Curate your shell history](https://esham.io/2025/05/shell-history)
* [2025-06-06, 13:46:01](https://news.ycombinator.com/item?id=44200866) - [Odyc.js – A tiny JavaScript library for narrative games](https://odyc.dev)
* [2025-06-06, 13:43:44](https://lobste.rs/s/dayufo/curate_your_shell_history) - [Curate your shell history](https://esham.io/2025/05/shell-history)
* [2025-06-06, 13:38:31](https://news.ycombinator.com/item?id=44200797) - [Small Programs and Languages](https://ratfactor.com/cards/pl-small)
* [2025-06-06, 13:32:45](https://lobste.rs/s/imidny/git_remote_sqlite_single_file_git_repos) - [git-remote-sqlite: Single-file Git repos that can replicate with Litestream](https://github.com/chrislloyd/git-remote-sqlite)
* [2025-06-06, 13:32:00](https://soylentnews.org/article.pl?sid=25/06/05/1054224&amp;from=rss) - [TSMC&apos;s 2Nm Wafer Prices Hit $30,000 As SRAM Yields Reportedly Hit 90%](https://soylentnews.org/article.pl?sid=25/06/05/1054224&amp;from=rss)
* [2025-06-06, 13:27:57](https://lobste.rs/s/3wmstw/small_programs_languages) - [Small Programs and Languages](https://ratfactor.com/cards/pl-small)
* [2025-06-06, 12:38:48](https://lobste.rs/s/jl4drk/analyzing_metastable_failures) - [Analyzing Metastable Failures in Distributed Systems](http://muratbuffalo.blogspot.com/2025/06/analyzing-metastable-failures-in.html)
* [2025-06-06, 11:29:11](https://news.ycombinator.com/item?id=44199770) - [How to (actually) send DTMF on Android without being the default call app](https://edm115.dev/blog/2025/01/22/how-to-send-dtmf-on-android)
* [2025-06-06, 11:22:42](https://lobste.rs/s/spmwde/i_let_chatgpt_make_all_my_architectural) - [I Let ChatGPT Make All My Architectural Decisions for a Month: The Surprising Results](https://medium.com/@sohail_saifi/i-let-chatgpt-make-all-my-architectural-decisions-for-a-month-the-surprising-results-e21f1254c74c)
* [2025-06-06, 11:15:16](https://news.ycombinator.com/item?id=44199699) - [Swift and the Cute 2d game framework: Setting up a project with CMake](https://layer22.com/swift-and-cute-framework-setting-up-a-project-with-cmake)
* [2025-06-06, 11:14:57](https://lobste.rs/s/ndcp7o/conventional_commit_message_generator) - [Conventional Commit message generator using local LLMs](https://wimpysworld.com/posts/faff-ollama-conventional-commit-generator/)
* [2025-06-06, 11:08:17](https://lobste.rs/s/v6lr1v/fuzzer_blind_spots_meet_jepsen) - [Fuzzer Blind Spots (Meet Jepsen!)](https://tigerbeetle.com/blog/2025-06-06-fuzzer-blind-spots-meet-jepsen/)
* [2025-06-06, 11:07:06](https://lobste.rs/s/gynzfc/just_fucking_code) - [Just fucking code](https://www.justfuckingcode.com/)
* [2025-06-06, 11:06:48](https://news.ycombinator.com/item?id=44199649) - [What you need to know about EMP weapons](https://www.aardvark.co.nz/daily/2025/0606.shtml)
* [2025-06-06, 10:55:17](https://news.ycombinator.com/item?id=44199597) - [Weaponizing Dependabot: Pwn Request at its finest](https://boostsecurity.io/blog/weaponizing-dependabot-pwn-request-at-its-finest)
* [2025-06-06, 10:54:15](https://lobste.rs/s/oei5fj/jepsen_tigerbeetle_0_16_11) - [Jepsen: TigerBeetle 0.16.11](https://jepsen.io/analyses/tigerbeetle-0.16.11)
* [2025-06-06, 10:53:51](https://news.ycombinator.com/item?id=44199592) - [Jepsen: TigerBeetle 0.16.11](https://jepsen.io/analyses/tigerbeetle-0.16.11)
* [2025-06-06, 10:26:41](https://lobste.rs/s/dlpbtw/earnest_guide_symbols_common_lisp) - [An Earnest Guide to Symbols in Common Lisp](https://kevingal.com/blog/cl-symbols.html)
* [2025-06-06, 10:25:39](https://news.ycombinator.com/item?id=44199437) - [The Coleco Adam Computer](https://dfarq.homeip.net/coleco-adam-computer/)
* [2025-06-06, 10:16:55](https://lobste.rs/s/bgytib/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/bgytib/what_are_you_doing_this_weekend)
* [2025-06-06, 10:00:00](https://slashdot.org/story/25/06/06/0050210/klarna-ceo-says-company-will-use-humans-to-offer-vip-customer-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Klarna CEO Says Company Will Use Humans To Offer VIP Customer Service](https://slashdot.org/story/25/06/06/0050210/klarna-ceo-says-company-will-use-humans-to-offer-vip-customer-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-06, 09:16:07](https://lobste.rs/s/bhzsar/magic_namerefs) - [magic namerefs](https://gist.github.com/izabera/e4717562e20eb6cfb6e05f8019883efb)
* [2025-06-06, 08:48:00](https://soylentnews.org/article.pl?sid=25/06/05/1051216&amp;from=rss) - [The Far Side of the Moon May Host the World&apos;s Most Sensitive Telescope, Shielded From Interference](https://soylentnews.org/article.pl?sid=25/06/05/1051216&amp;from=rss)
* [2025-06-06, 07:00:00](https://science.slashdot.org/story/25/06/06/0249228/resilience-spacecraft-likely-crashed-into-the-moon-ispace-confirms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Resilience Spacecraft Likely Crashed Into the Moon, Ispace Confirms](https://science.slashdot.org/story/25/06/06/0249228/resilience-spacecraft-likely-crashed-into-the-moon-ispace-confirms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-06, 06:05:08](https://lobste.rs/s/mrbuca/i_learned_rust_24_hours_eat_free_pizza) - [I Learned Rust In 24 Hours To Eat Free Pizza Morally](https://medium.com/@sebastiancarlos/i-learned-rust-in-24-hours-to-eat-free-pizza-morally-28ea8312e523)
* [2025-06-06, 04:59:58](https://news.ycombinator.com/item?id=44197932) - [Self-hosting your own media considered harmful according to YouTube](https://www.jeffgeerling.com/blog/2025/self-hosting-your-own-media-considered-harmful)
* [2025-06-06, 03:59:00](https://soylentnews.org/article.pl?sid=25/06/04/2236200&amp;from=rss) - [Spacex&apos;s Starship And Super Heavy Booster Crash](https://soylentnews.org/article.pl?sid=25/06/04/2236200&amp;from=rss)
* [2025-06-06, 03:30:00](https://tech.slashdot.org/story/25/06/05/2343244/proxy-services-feast-on-ukraines-ip-address-exodus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Proxy Services Feast On Ukraine&apos;s IP Address Exodus](https://tech.slashdot.org/story/25/06/05/2343244/proxy-services-feast-on-ukraines-ip-address-exodus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-06, 01:40:00](https://games.slashdot.org/story/25/06/05/2330221/nintendo-warns-switch-2-gamechat-users-your-chat-is-recorded?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nintendo Warns Switch 2 GameChat Users: &apos;Your Chat Is Recorded&apos;](https://games.slashdot.org/story/25/06/05/2330221/nintendo-warns-switch-2-gamechat-users-your-chat-is-recorded?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-06, 01:00:00](https://news.slashdot.org/story/25/06/05/2316255/uk-tech-job-openings-climb-21-to-pre-pandemic-highs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Tech Job Openings Climb 21% To Pre-Pandemic Highs](https://news.slashdot.org/story/25/06/05/2316255/uk-tech-job-openings-climb-21-to-pre-pandemic-highs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-06, 00:20:00](https://hardware.slashdot.org/story/25/06/05/2311240/intel-new-products-must-deliver-50-gross-profit-to-get-the-green-light?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel: New Products Must Deliver 50% Gross Profit To Get the Green Light](https://hardware.slashdot.org/story/25/06/05/2311240/intel-new-products-must-deliver-50-gross-profit-to-get-the-green-light?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-05, 23:40:00](https://news.slashdot.org/story/25/06/05/2114241/consumer-group-accuses-shein-of-manipulating-shoppers-with-dark-patterns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Consumer Group Accuses Shein of Manipulating Shoppers With &apos;Dark Patterns&apos;](https://news.slashdot.org/story/25/06/05/2114241/consumer-group-accuses-shein-of-manipulating-shoppers-with-dark-patterns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-05, 23:14:00](https://soylentnews.org/article.pl?sid=25/06/04/2225230&amp;from=rss) - [TSMC Is Once Again In Talks With US Officials Over A Possible Gigafab In The UAE](https://soylentnews.org/article.pl?sid=25/06/04/2225230&amp;from=rss)
* [2025-06-05, 23:00:00](https://slashdot.org/story/25/06/05/214212/anthropic-co-founder-on-cutting-access-to-windsurf-it-would-be-odd-for-us-to-sell-claude-to-openai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Co-founder on Cutting Access To Windsurf: &apos;It Would Be Odd For Us To Sell Claude To OpenAI&apos;](https://slashdot.org/story/25/06/05/214212/anthropic-co-founder-on-cutting-access-to-windsurf-it-would-be-odd-for-us-to-sell-claude-to-openai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-05, 22:20:00](https://slashdot.org/story/25/06/05/215254/stablecoin-issuer-circle-soars-168-in-ipo-debut?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Stablecoin Issuer Circle Soars 168% In IPO Debut](https://slashdot.org/story/25/06/05/215254/stablecoin-issuer-circle-soars-168-in-ipo-debut?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-05, 21:45:50](https://lobste.rs/s/njbvot/introducing_facet_reflection_for_rust) - [Introducing facet: Reflection for Rust](https://youtu.be/0mqFCqw_XvI)
* [2025-06-05, 21:40:00](https://apple.slashdot.org/story/25/06/05/2048253/apple-notes-expected-to-gain-markdown-support?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Notes Expected To Gain Markdown Support](https://apple.slashdot.org/story/25/06/05/2048253/apple-notes-expected-to-gain-markdown-support?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-05, 20:12:50](https://news.ycombinator.com/item?id=44195354) - [Defending adverbs exuberantly if conditionally](https://countercraft.substack.com/p/defending-adverbs-exuberantly-if)
* [2025-06-05, 18:29:00](https://soylentnews.org/politics/article.pl?sid=25/06/04/1510212&amp;from=rss) - [The Trump Administration&apos;s Plan for National Citizen Database is a Massive Threat to Civil Liberties](https://soylentnews.org/politics/article.pl?sid=25/06/04/1510212&amp;from=rss)
* [2025-06-05, 16:51:37](https://lobste.rs/s/ggcrok/announcing_bonfire_social_1_0_release) - [Announcing the Bonfire Social 1.0 Release Candidate](https://bonfirenetworks.org//posts/bonfire_social_rc/)
* [2025-06-05, 15:14:12](https://lobste.rs/s/495rx9/which_i_have_opinions_about_parsing) - [In which I have Opinions about parsing and grammars](https://www.chiark.greenend.org.uk/~sgtatham/quasiblog/parsing/)
* [2025-06-05, 15:02:07](https://lobste.rs/s/mp34xp/ai_is_gamechanger_for_tla_users) - [AI is a gamechanger for TLA+ users](https://buttondown.com/hillelwayne/archive/ai-is-a-gamechanger-for-tla-users/)
* [2025-06-05, 13:42:00](https://soylentnews.org/article.pl?sid=25/06/04/156228&amp;from=rss) - [German Roads Thrown Into Chaos After Google Maps Mislabels Highways As Closed](https://soylentnews.org/article.pl?sid=25/06/04/156228&amp;from=rss)
* [2025-06-05, 13:40:48](https://news.ycombinator.com/item?id=44191620) - [The impossible predicament of the death newts](https://crookedtimber.org/2025/06/05/occasional-paper-the-impossible-predicament-of-the-death-newts/)
* [2025-06-05, 10:12:55](https://lobste.rs/s/yjbsof/programming_system) - [A programming system](https://andreyor.st/posts/2023-10-18-a-programming-system/)
* [2025-06-05, 09:00:00](https://soylentnews.org/article.pl?sid=25/06/04/0129202&amp;from=rss) - [A New Sodium Metal Fuel Cell Could Help Clean Up Transportation](https://soylentnews.org/article.pl?sid=25/06/04/0129202&amp;from=rss)
* [2025-06-05, 06:13:51](https://lobste.rs/s/rzskjk/i_think_i_m_done_thinking_about_genai_for) - [I Think I’m Done Thinking About genAI For Now](https://blog.glyph.im/2025/06/i-think-im-done-thinking-about-genai-for-now.html)
* [2025-06-05, 04:15:00](https://soylentnews.org/article.pl?sid=25/06/04/0117248&amp;from=rss) - [Apple Must Pay 500M Euro Digital Markets Act Fine by July 26](https://soylentnews.org/article.pl?sid=25/06/04/0117248&amp;from=rss)
* [2025-06-04, 23:30:00](https://soylentnews.org/article.pl?sid=25/06/04/0110238&amp;from=rss) - [In North Korea, Your Phone Secretly Takes Screenshots Every 5 Minutes for Government Surveillance](https://soylentnews.org/article.pl?sid=25/06/04/0110238&amp;from=rss)
* [2025-06-04, 18:45:00](https://soylentnews.org/article.pl?sid=25/06/03/1645240&amp;from=rss) - [Trust, Attitudes and Use of Artificial Intelligence 2025](https://soylentnews.org/article.pl?sid=25/06/03/1645240&amp;from=rss)
* [2025-06-04, 14:04:00](https://soylentnews.org/article.pl?sid=25/06/03/1113216&amp;from=rss) - [Model Context Protocol (MCP): What It is and Why It Matters](https://soylentnews.org/article.pl?sid=25/06/03/1113216&amp;from=rss)
* [2025-06-04, 09:23:00](https://soylentnews.org/article.pl?sid=25/06/03/0455214&amp;from=rss) - [Fire Safety Concerns Spark New Battery Rules on Flights](https://soylentnews.org/article.pl?sid=25/06/03/0455214&amp;from=rss)
* [2025-06-04, 04:36:00](https://soylentnews.org/article.pl?sid=25/06/03/0447247&amp;from=rss) - [Making Magnesium From Sea Water](https://soylentnews.org/article.pl?sid=25/06/03/0447247&amp;from=rss)
* [2025-06-03, 23:47:00](https://soylentnews.org/article.pl?sid=25/06/03/0136212&amp;from=rss) - [Texas Right To Repair Bill Passes, Heads To The Governor’s Desk](https://soylentnews.org/article.pl?sid=25/06/03/0136212&amp;from=rss)
* [2025-06-03, 19:02:00](https://soylentnews.org/article.pl?sid=25/06/02/1755220&amp;from=rss) - [The Workers Who Lost Their Jobs To AI](https://soylentnews.org/article.pl?sid=25/06/02/1755220&amp;from=rss)
* [2025-06-03, 14:17:00](https://soylentnews.org/article.pl?sid=25/06/02/1319210&amp;from=rss) - [China To Ease Rare Earth Export Restrictions To Benefit Domestic And European Semiconductor Firms](https://soylentnews.org/article.pl?sid=25/06/02/1319210&amp;from=rss)
* [2025-06-03, 13:57:00](https://soylentnews.org/breakingnews/article.pl?sid=25/06/03/1339246&amp;from=rss) - [Mount Etna Erupts as Large Plumes Rise From Italian Volcano](https://soylentnews.org/breakingnews/article.pl?sid=25/06/03/1339246&amp;from=rss)
* [2025-06-03, 09:30:00](https://soylentnews.org/article.pl?sid=25/06/01/1835204&amp;from=rss) - [Mysterious Leaker Outs Conti Ransomware Kingpins](https://soylentnews.org/article.pl?sid=25/06/01/1835204&amp;from=rss)
* [2025-06-03, 04:42:00](https://soylentnews.org/article.pl?sid=25/06/01/1533234&amp;from=rss) - [Leprosy Was in the Americas Long Before the Arrival of Europeans](https://soylentnews.org/article.pl?sid=25/06/01/1533234&amp;from=rss)
* [2025-06-02, 23:54:00](https://soylentnews.org/article.pl?sid=25/06/01/1527223&amp;from=rss) - [Intel Wins Crucial Verdict in Legal Fight Against Patent Troll VLSI](https://soylentnews.org/article.pl?sid=25/06/01/1527223&amp;from=rss)
* [2025-06-02, 19:10:00](https://soylentnews.org/article.pl?sid=25/06/01/1523222&amp;from=rss) - [120 Court Cases Have Been Caught With AI Hallucinations, According to New Database](https://soylentnews.org/article.pl?sid=25/06/01/1523222&amp;from=rss)
* [2025-06-02, 14:24:00](https://soylentnews.org/article.pl?sid=25/06/01/1517235&amp;from=rss) - [OpenAI Model Modifies Own Shutdown Script, Say Researchers](https://soylentnews.org/article.pl?sid=25/06/01/1517235&amp;from=rss)
* [2025-06-02, 09:48:00](https://soylentnews.org/article.pl?sid=25/06/01/159251&amp;from=rss) - [Clock Still Keeping Village on Time After 500 Years](https://soylentnews.org/article.pl?sid=25/06/01/159251&amp;from=rss)
* [2025-06-02, 05:00:00](https://soylentnews.org/article.pl?sid=25/06/01/151242&amp;from=rss) - [Malware Reverse Engineering - Unraveling the Secrets of Encryption in Malware](https://soylentnews.org/article.pl?sid=25/06/01/151242&amp;from=rss)
* [2025-06-02, 00:16:00](https://soylentnews.org/article.pl?sid=25/06/01/1439246&amp;from=rss) - [New JWST Observations of &apos;Trans-Neptunian Objects&apos; Could Help Reveal Our Solar System&apos;s Past](https://soylentnews.org/article.pl?sid=25/06/01/1439246&amp;from=rss)
