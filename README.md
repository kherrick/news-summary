# [News Summary](https://kherrick.github.io/news-summary/)

## Cybersecurity and Database Vulnerabilities

* [Magecart skimmer turns Stripe into a malware command server](https://sansec.io/research/stripe-api-skimmer-infrastructure) - A malicious attack has turned the payment processor Stripe into a malware command server using Magecart skimmer tactics. [Comments](https://lobste.rs/s/evgsx7/magecart_skimmer_turns_stripe_into)

* [Dozens Of Red Hat Packages Backdoored Through Its Official NPM Channel](https://soylentnews.org/article.pl?sid=26/06/05/019244&amp;from=rss) - Red Hat packages were found to be compromised in an npm supply chain attack. [Comments](https://soylentnews.org/article.pl?sid=26/06/05/019244&amp;from=rss)

* [New IronWorm Malware Hits 36 Packages In npm Supply-Chain Attack](https://it.slashdot.org/story/26/06/04/1948205/new-ironworm-malware-hits-36-packages-in-npm-supply-chain-attack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A newly identified malware, IronWorm, has compromised 36 npm packages in a concerning supply chain attack. [Comments](https://it.slashdot.org/story/26/06/04/1948205/new-ironworm-malware-hits-36-packages-in-npm-supply-chain-attack?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## AI Developments and Policies

* [S&P 500 rejects SpaceX, also blocking entry for OpenAI and Anthropic](https://arstechnica.com/tech-policy/2026/06/sp-500-blocks-fast-spacex-entry-wont-waive-rule-for-unprofitable-ai-firms/) - Major tech companies like SpaceX, OpenAI, and Anthropic face rejection from the S&P 500 due to profitability rules. [Comments](https://news.ycombinator.com/item?id=48421442)

* [Illinois Passes Landmark AI Regulation Law](https://soylentnews.org/article.pl?sid=26/06/05/1139233&amp;from=rss) - Illinois enacts groundbreaking AI legislation, aiming to oversee and regulate AI development. [Comments](https://soylentnews.org/article.pl?sid=26/06/05/1139233&amp;from=rss)

* [Anthropic Urges Global Pause in AI Development, Flags 'Self-Improvement' Risk](https://slashdot.org/story/26/06/04/204255/anthropic-urges-global-pause-in-ai-development-flags-self-improvement-risk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - AI organization calls for a global pause in AI advancements to address potential risks of self-improving AI systems. [Comments](https://slashdot.org/story/26/06/04/204255/anthropic-urges-global-pause-in-ai-development-flags-self-improvement-risk?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Advances in Technology and Energy

* [Small Modular Nuclear Reactor Reaches Criticality In First Test](https://hardware.slashdot.org/story/26/06/05/216231/small-modular-nuclear-reactor-reaches-criticality-in-first-test?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A groundbreaking test sees a small modular nuclear reactor reach criticality for the first time. [Comments](https://hardware.slashdot.org/story/26/06/05/216231/small-modular-nuclear-reactor-reaches-criticality-in-first-test?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Used Waymo Robotaxi Batteries Become Backup Storage For Power Grids](https://hardware.slashdot.org/story/26/06/04/1955206/used-waymo-robotaxi-batteries-become-backup-storage-for-power-grids?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Old robotaxi batteries from Waymo are repurposed as backup storage solutions for power grids. [Comments](https://hardware.slashdot.org/story/26/06/04/1955206/used-waymo-robotaxi-batteries-become-backup-storage-for-power-grids?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Cryptographic and Data Advances

* [The Quiet Numbers Station: Decoding Nineteen Years of GPS Cryptography](https://www.benthamsgaze.org/2026/06/02/the-quiet-numbers-station-decoding-nineteen-years-of-gps-cryptography/) - A deep dive into nearly two decades of cryptographic usage in GPS systems reveals unexpected insights. [Comments](https://news.ycombinator.com/item?id=48411799)

* [The smallest C binary](https://blog.weineng.me/posts/smallest_c/) - Discover the challenge and mechanics behind creating the smallest possible binary in C. [Comments](https://lobste.rs/s/eetcxi/smallest_c_binary)

## Creative Applications for AI and Models

* [ZML: Model to Metal](https://zml.ai/) - A showcase on ZML's framework designed to streamline model-to-production transformations. [Comments](https://lobste.rs/s/icyhpt/zml_model_metal)

* [Symbolica 2.0: Programmable Symbols for Python and Rust](https://symbolica.io/posts/symbolica_2_0_release/) - The latest version of Symbolica offers customizable symbolic computation for programming in Python and Rust. [Comments](https://lobste.rs/s/zpjc05/symbolica_2_0_programmable_symbols_for)

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

* [2026-06-06, 07:26:52](https://lobste.rs/s/evgsx7/magecart_skimmer_turns_stripe_into) - [Magecart skimmer turns Stripe into a malware command server](https://sansec.io/research/stripe-api-skimmer-infrastructure)
* [2026-06-06, 04:38:36](https://news.ycombinator.com/item?id=48421442) - [S&amp;P 500 rejects SpaceX, also blocking entry for OpenAI and Anthropic](https://arstechnica.com/tech-policy/2026/06/sp-500-blocks-fast-spacex-entry-wont-waive-rule-for-unprofitable-ai-firms/)
* [2026-06-06, 03:41:32](https://news.ycombinator.com/item?id=48421171) - [Pre-Modern Armies for Worldbuilders, Part I: Why They Fight](https://acoup.blog/2026/06/05/collections-pre-modern-armies-for-worldbuilders-part-i-why-they-fight/)
* [2026-06-06, 03:36:15](https://news.ycombinator.com/item?id=48421145) - [Lockdown Mode](https://help.openai.com/en/articles/20001061-lockdown-mode)
* [2026-06-06, 03:30:00](https://hardware.slashdot.org/story/26/06/05/216231/small-modular-nuclear-reactor-reaches-criticality-in-first-test?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Small Modular Nuclear Reactor Reaches Criticality In First Test](https://hardware.slashdot.org/story/26/06/05/216231/small-modular-nuclear-reactor-reaches-criticality-in-first-test?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-06, 03:28:53](https://lobste.rs/s/icyhpt/zml_model_metal) - [ZML: Model to Metal](https://zml.ai/)
* [2026-06-06, 03:25:28](https://lobste.rs/s/oazsak/total_reciprocity_public_license) - [Total Reciprocity Public License](https://trplfoundation.org/)
* [2026-06-06, 03:23:47](https://news.ycombinator.com/item?id=48421079) - [The back cover of C++: The Language raises questions not answered by front cover](https://devblogs.microsoft.com/oldnewthing/20260605-01/?p=112391)
* [2026-06-06, 03:13:13](https://lobste.rs/s/tmzmta/announcement_from_steering_council) - [An announcement from the Steering Council regarding the JIT project](https://discuss.python.org/t/an-announcement-from-the-steering-council-regarding-the-jit-project/107638)
* [2026-06-06, 02:37:28](https://lobste.rs/s/eetcxi/smallest_c_binary) - [The smallest C binary](https://blog.weineng.me/posts/smallest_c/)
* [2026-06-06, 02:37:00](https://soylentnews.org/article.pl?sid=26/06/05/1139233&amp;from=rss) - [Illinois Passes Landmark AI Regulation Law](https://soylentnews.org/article.pl?sid=26/06/05/1139233&amp;from=rss)
* [2026-06-06, 02:31:51](https://news.ycombinator.com/item?id=48420827) - [Ask HN: Why is the HN crowd so anti-AI?](https://news.ycombinator.com/item?id=48420827)
* [2026-06-06, 01:32:09](https://news.ycombinator.com/item?id=48420494) - [Show HN: ABC Classic 100 Rankings visualised](https://classic100.gotski.workers.dev/)
* [2026-06-06, 00:33:26](https://news.ycombinator.com/item?id=48420148) - [The intracies of modern camera lens repair (2024)](https://salvagedcircuitry.com/sigma-45mm.html)
* [2026-06-05, 23:42:54](https://news.ycombinator.com/item?id=48419821) - [Nordstjernen 1.0](https://github.com/nordstjernen-web/nordstjernen/releases/tag/1.0.0)
* [2026-06-05, 23:13:12](https://news.ycombinator.com/item?id=48419571) - [The perils of UUID primary keys in SQLite](https://andersmurphy.com/2026/06/05/the-perils-of-uuid-primary-keys-in-sqlite.html)
* [2026-06-05, 23:00:00](https://tech.slashdot.org/story/26/06/05/211249/the-us-military-quietly-turned-gps-into-a-global-numbers-station-evidence-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The US Military Quietly Turned GPS Into a Global &apos;Numbers Station,&apos; Evidence Suggests](https://tech.slashdot.org/story/26/06/05/211249/the-us-military-quietly-turned-gps-into-a-global-numbers-station-evidence-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-05, 22:50:44](https://lobste.rs/s/vtlqfy/anatomy_learning_stall) - [The Anatomy of a Learning Stall](https://tagide.com/blog/llm/the-anatomy-of-a-learning-stall/)
* [2026-06-05, 22:00:00](https://hardware.slashdot.org/story/26/06/05/2017239/google-will-pay-spacex-920-million-per-month-for-compute?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Will Pay SpaceX $920 Million Per Month For Compute](https://hardware.slashdot.org/story/26/06/05/2017239/google-will-pay-spacex-920-million-per-month-for-compute?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-05, 21:56:00](https://soylentnews.org/article.pl?sid=26/06/05/019244&amp;from=rss) - [Dozens Of Red Hat Packages Backdoored Through Its Official NPM Channel](https://soylentnews.org/article.pl?sid=26/06/05/019244&amp;from=rss)
* [2026-06-05, 21:00:00](https://it.slashdot.org/story/26/06/05/202230/bitcoin-falls-to-60000-as-zcash-bug-rocks-crypto?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bitcoin Falls To $60,000 As Zcash Bug Rocks Crypto](https://it.slashdot.org/story/26/06/05/202230/bitcoin-falls-to-60000-as-zcash-bug-rocks-crypto?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-05, 20:28:19](https://lobste.rs/s/k9wvkn/pg_durable_postgresql_database_durable) - [pg_durable: PostgreSQL in-database durable execution](https://github.com/microsoft/pg_durable)
* [2026-06-05, 20:00:00](https://news.slashdot.org/story/26/06/05/1910242/340-local-news-outlets-now-blocking-the-internet-archive?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [340 Local News Outlets Now Blocking the Internet Archive](https://news.slashdot.org/story/26/06/05/1910242/340-local-news-outlets-now-blocking-the-internet-archive?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-05, 19:08:12](https://news.ycombinator.com/item?id=48416845) - [Three of our worst VC stories](https://twitter.com/eastdakota/status/2062860530360959273)
* [2026-06-05, 19:00:00](https://news.slashdot.org/story/26/06/05/1839258/govuk-goes-dutch-on-payments-as-it-dumps-stripe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GOV.UK Goes Dutch On Payments As It Dumps Stripe](https://news.slashdot.org/story/26/06/05/1839258/govuk-goes-dutch-on-payments-as-it-dumps-stripe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-05, 18:50:26](https://news.ycombinator.com/item?id=48416635) - [Transformers are inherently succinct](https://openreview.net/pdf?id=Yxz92UuPLQ)
* [2026-06-05, 18:40:29](https://lobste.rs/s/oqlpna/stop_using_conventional_commits) - [Stop Using Conventional Commits](https://sumnerevans.com/posts/software-engineering/stop-using-conventional-commits/)
* [2026-06-05, 18:14:42](https://lobste.rs/s/mf5ryi/did_claude_increase_bugs_rsync) - [Did Claude Increase Bugs in rsync?](https://alexispurslane.github.io/rsync-analysis/)
* [2026-06-05, 18:00:00](https://news.slashdot.org/story/26/06/05/1541215/bsa-lashes-out-at-mandatory-open-source-licensing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [BSA Lashes Out At Mandatory Open-Source Licensing](https://news.slashdot.org/story/26/06/05/1541215/bsa-lashes-out-at-mandatory-open-source-licensing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-05, 17:36:05](https://lobste.rs/s/ehxqv9/using_fedora_silverblue_for_compositor) - [Using Fedora Silverblue for Compositor Development](https://bxt.rs/blog/using-fedora-silverblue-for-compositor-development/)
* [2026-06-05, 17:31:03](https://lobste.rs/s/c3xmxm/win16_memory_management) - [Win16 Memory Management](http://www.os2museum.com/wp/win16-memory-management/)
* [2026-06-05, 17:13:13](https://lobste.rs/s/zpjc05/symbolica_2_0_programmable_symbols_for) - [Symbolica 2.0: programmable symbols for Python and Rust](https://symbolica.io/posts/symbolica_2_0_release/)
* [2026-06-05, 17:07:00](https://soylentnews.org/article.pl?sid=26/06/05/010227&amp;from=rss) - [Ohio Hits Pause On Datacenter Tax Breaks Draining Its Coffers](https://soylentnews.org/article.pl?sid=26/06/05/010227&amp;from=rss)
* [2026-06-05, 17:00:00](https://tech.slashdot.org/story/26/06/05/1531211/google-says-it-will-replenish-more-water-than-it-uses-at-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Says It Will Replenish More Water Than It Uses At Data Centers](https://tech.slashdot.org/story/26/06/05/1531211/google-says-it-will-replenish-more-water-than-it-uses-at-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-05, 16:55:30](https://news.ycombinator.com/item?id=48415217) - [Gov.uk has replaced Stripe with Dutch provider Adyen](https://www.theregister.com/public-sector/2026/06/04/govuk-goes-dutch-on-payments-as-it-dumps-stripe/5250763)
* [2026-06-05, 16:18:48](https://news.ycombinator.com/item?id=48414653) - [Gemma 4 QAT models: Optimizing compression for mobile and laptop efficiency](https://blog.google/innovation-and-ai/technology/developers-tools/quantization-aware-training-gemma-4/)
* [2026-06-05, 16:00:00](https://hardware.slashdot.org/story/26/06/05/1525247/valve-says-steam-machine-shipping-this-summer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Valve Says Steam Machine &apos;Shipping This Summer&apos;](https://hardware.slashdot.org/story/26/06/05/1525247/valve-says-steam-machine-shipping-this-summer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-05, 15:59:57](https://news.ycombinator.com/item?id=48414367) - [pg_durable: Microsoft open sources in-database durable execution](https://github.com/microsoft/pg_durable)
* [2026-06-05, 15:54:53](https://lobste.rs/s/btax6j/polyform_licenses) - [PolyForm Licenses](https://polyformproject.org/licenses)
* [2026-06-05, 15:39:38](https://news.ycombinator.com/item?id=48414027) - [Conventional Commits encourages focus on the wrong things](https://sumnerevans.com/posts/software-engineering/stop-using-conventional-commits/)
* [2026-06-05, 15:20:00](https://science.slashdot.org/story/26/06/05/1515246/iss-astronauts-told-to-prepare-for-possible-evacuation-over-air-leak?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ISS Astronauts Told To Prepare For Possible Evacuation Over Air Leak](https://science.slashdot.org/story/26/06/05/1515246/iss-astronauts-told-to-prepare-for-possible-evacuation-over-air-leak?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-05, 15:04:03](https://news.ycombinator.com/item?id=48413500) - [New method turns ocean water into drinking water, without waste](https://www.rochester.edu/newscenter/what-is-desalination-definition-ocean-water-704732/)
* [2026-06-05, 15:00:31](https://news.ycombinator.com/item?id=48413464) - [Astronauts told to return to ISS after sheltering over air leak repairs](https://www.bbc.com/news/live/c4g44ew3g1kt)
* [2026-06-05, 14:44:44](https://news.ycombinator.com/item?id=48413254) - [India&apos;s surprise baby bust](https://www.economist.com/leaders/2026/06/04/indias-surprise-baby-bust-is-a-warning-to-the-world)
* [2026-06-05, 13:40:18](https://lobste.rs/s/dku5yb/how_do_you_sieve_filter_manage_your) - [How do you sieve/filter/manage your internet mail?](https://lobste.rs/s/dku5yb/how_do_you_sieve_filter_manage_your)
* [2026-06-05, 13:07:50](https://lobste.rs/s/a7v7e5/empty_field_wasn_t_gps_broadcasts_numbers) - [The Empty Field That Wasn&apos;t: GPS Broadcasts a Numbers Station](https://lsc-pagepro.mydigitalpublication.com/publication/?i=865273&amp;p=62&amp;view=issueViewer)
* [2026-06-05, 12:56:44](https://news.ycombinator.com/item?id=48411799) - [The Quiet Numbers Station: Decoding Nineteen Years of GPS Cryptography](https://www.benthamsgaze.org/2026/06/02/the-quiet-numbers-station-decoding-nineteen-years-of-gps-cryptography/)
* [2026-06-05, 12:43:33](https://news.ycombinator.com/item?id=48411635) - [Did Claude increase bugs in rsync?](https://alexispurslane.github.io/rsync-analysis/)
* [2026-06-05, 12:21:00](https://soylentnews.org/article.pl?sid=26/06/05/0055245&amp;from=rss) - [The Newest Instagram \&quot;Exploit\&quot; is the Goofiest I&apos;ve Seen](https://soylentnews.org/article.pl?sid=26/06/05/0055245&amp;from=rss)
* [2026-06-05, 11:08:39](https://lobste.rs/s/u9j9u4/pivco_huffman) - [PivCo-Huffman](https://marcinzukowski.github.io/pivco-huffman/paper-1.0/ph.html)
* [2026-06-05, 08:57:48](https://lobste.rs/s/vzutqp/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/vzutqp/what_are_you_doing_this_weekend)
* [2026-06-05, 08:32:16](https://news.ycombinator.com/item?id=48409664) - [Tracing a powerful GNSS interference source over Europe](https://arxiv.org/abs/2606.03673)
* [2026-06-05, 08:27:32](https://lobste.rs/s/db2owo/changing_how_we_develop_ladybird) - [Changing How We Develop Ladybird](https://ladybird.org/posts/changing-how-we-develop-ladybird/)
* [2026-06-05, 07:37:00](https://soylentnews.org/article.pl?sid=26/06/05/0051235&amp;from=rss) - [‘Bots have now passed human traffic online,’ Cloudflare Boss Laments    ](https://soylentnews.org/article.pl?sid=26/06/05/0051235&amp;from=rss)
* [2026-06-05, 07:00:00](https://hardware.slashdot.org/story/26/06/04/1955206/used-waymo-robotaxi-batteries-become-backup-storage-for-power-grids?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Used Waymo Robotaxi Batteries Become Backup Storage For Power Grids](https://hardware.slashdot.org/story/26/06/04/1955206/used-waymo-robotaxi-batteries-become-backup-storage-for-power-grids?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-05, 03:30:00](https://science.slashdot.org/story/26/06/04/2016228/bees-can-use-tools-to-solve-problems-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bees Can Use Tools To Solve Problems, Study Finds](https://science.slashdot.org/story/26/06/04/2016228/bees-can-use-tools-to-solve-problems-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-05, 02:52:00](https://soylentnews.org/article.pl?sid=26/06/04/1033248&amp;from=rss) - [Troops’ Phones Gave Away Location Data to Foreign Adversaries](https://soylentnews.org/article.pl?sid=26/06/04/1033248&amp;from=rss)
* [2026-06-05, 02:06:52](https://lobste.rs/s/y6a6cg/warren_s_abstract_machine_tutorial) - [Warren&apos;s Abstract Machine: A Tutorial Reconstruction](https://github.com/a-yiorgos/wambook)
* [2026-06-05, 01:24:45](https://lobste.rs/s/onbcu5/code_is_cheap_er) - [Code is Cheap(er)](https://htmx.org/essays/code-is-cheap/)
* [2026-06-05, 00:53:45](https://lobste.rs/s/pmduqk/when_su_replaced_login_for_becoming) - [When su replaced login for becoming another Unix login](https://utcc.utoronto.ca/~cks/space/blog/unix/SuAsLoginReplacement)
* [2026-06-04, 23:42:20](https://news.ycombinator.com/item?id=48406174) - [Ask HN: What was your \&quot;oh shit\&quot; moment with GenAI?](https://news.ycombinator.com/item?id=48406174)
* [2026-06-04, 23:00:00](https://slashdot.org/story/26/06/04/204255/anthropic-urges-global-pause-in-ai-development-flags-self-improvement-risk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Urges Global Pause in AI Development, Flags &apos;Self-Improvement&apos; Risk](https://slashdot.org/story/26/06/04/204255/anthropic-urges-global-pause-in-ai-development-flags-self-improvement-risk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-04, 22:08:00](https://soylentnews.org/article.pl?sid=26/06/04/1030202&amp;from=rss) - [DuckDuckGo Installs Are Up 30% as Users Reject Being ‘Force-Fed’ Google&apos;s AI Search](https://soylentnews.org/article.pl?sid=26/06/04/1030202&amp;from=rss)
* [2026-06-04, 22:00:00](https://it.slashdot.org/story/26/06/04/1948205/new-ironworm-malware-hits-36-packages-in-npm-supply-chain-attack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New IronWorm Malware Hits 36 Packages In npm Supply-Chain Attack](https://it.slashdot.org/story/26/06/04/1948205/new-ironworm-malware-hits-36-packages-in-npm-supply-chain-attack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-04, 21:27:13](https://lobste.rs/s/vta6wp/faster_bump_allocator_for_rust) - [A faster bump allocator for rust](https://owen.cafe/posts/stumpalo/)
* [2026-06-04, 21:09:47](https://lobste.rs/s/lcnc5e/ipv6_zones_urls_are_mistake) - [IPv6 zones in URLs are a mistake](https://xeiaso.net/notes/2026/ipv6-zones-go-url/)
* [2026-06-04, 21:00:00](https://tech.slashdot.org/story/26/06/04/1828244/companies-are-using-reddit-to-manipulate-chatgpt-and-google-ai-search?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Companies Are Using Reddit To Manipulate ChatGPT and Google AI Search](https://tech.slashdot.org/story/26/06/04/1828244/companies-are-using-reddit-to-manipulate-chatgpt-and-google-ai-search?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-04, 17:37:35](https://lobste.rs/s/hb1s2k/reviewing_code_requires_reading) - [Reviewing code requires reading](https://hauleth.dev/post/review-requires-reading/)
* [2026-06-04, 17:26:00](https://soylentnews.org/article.pl?sid=26/06/02/1958258&amp;from=rss) - [Election Interlopers Register 5K+ Domains, Hope To Catch Some Voting Phish](https://soylentnews.org/article.pl?sid=26/06/02/1958258&amp;from=rss)
* [2026-06-04, 16:53:12](https://lobste.rs/s/jqkedb/jujutsu_v0_42_0_released) - [jujutsu v0.42.0 released](https://github.com/jj-vcs/jj/releases/tag/v0.42.0)
* [2026-06-04, 14:10:40](https://news.ycombinator.com/item?id=48398925) - [My Agent Skill for Test-Driven Development](https://www.saturnci.com/my-agent-skill-for-test-driven-development.html)
* [2026-06-04, 13:17:25](https://news.ycombinator.com/item?id=48398233) - [Europe&apos;s largest Copper Age tomb: children&apos;s bones show ancient health crisis](https://phys.org/news/2026-05-europe-largest-copper-age-tomb.html)
* [2026-06-04, 12:43:00](https://soylentnews.org/article.pl?sid=26/06/02/0713224&amp;from=rss) - [Moderna Gets $50 Million To Develop MRNA Ebola Vaccine Against Bundibugyo](https://soylentnews.org/article.pl?sid=26/06/02/0713224&amp;from=rss)
* [2026-06-04, 07:58:00](https://soylentnews.org/article.pl?sid=26/06/02/0711209&amp;from=rss) - [Angry Devs Vow To Flee GitHub Copilot As Metered Billing Takes Hold](https://soylentnews.org/article.pl?sid=26/06/02/0711209&amp;from=rss)
* [2026-06-04, 03:14:00](https://soylentnews.org/article.pl?sid=26/06/02/077231&amp;from=rss) - [Distrowatch Celebrates its 25th Anniversary](https://soylentnews.org/article.pl?sid=26/06/02/077231&amp;from=rss)
* [2026-06-03, 22:26:00](https://soylentnews.org/article.pl?sid=26/06/02/062240&amp;from=rss) - [An OpenAI Model Solved A Famous Math Problem That Stumped Humans For 80 Years](https://soylentnews.org/article.pl?sid=26/06/02/062240&amp;from=rss)
* [2026-06-03, 20:15:13](https://news.ycombinator.com/item?id=48389360) - [How LLMs work](https://www.0xkato.xyz/how-llms-actually-work/)
* [2026-06-03, 17:34:00](https://soylentnews.org/article.pl?sid=26/06/02/060223&amp;from=rss) - [The USS Gerald R. Ford&apos;s Next Mission is as a Floating Nuclear Power Plant](https://soylentnews.org/article.pl?sid=26/06/02/060223&amp;from=rss)
* [2026-06-03, 13:29:03](https://news.ycombinator.com/item?id=48383760) - [Nine Ways to Do Inheritance in Rust, a Language Without Inheritance](https://medium.com/@carlmkadie/nine-ways-to-do-inheritance-in-rust-a-language-without-inheritance-14825bf1e215)
* [2026-06-03, 13:22:06](https://news.ycombinator.com/item?id=48383667) - [Mouseless – keyboard-driven control of macOS/Linux/Windows](https://mouseless.click)
* [2026-06-03, 12:57:00](https://soylentnews.org/article.pl?sid=26/06/02/0359202&amp;from=rss) - [Perplexity AI Says &apos;You Can&apos;t Copyright Facts&apos; In Defense Against CNN Copyright Suit](https://soylentnews.org/article.pl?sid=26/06/02/0359202&amp;from=rss)
* [2026-06-03, 08:03:00](https://soylentnews.org/article.pl?sid=26/06/02/0356255&amp;from=rss) - [Musk Says US Military Suicide Drones Used Starlink In Violation Of SpaceX Rules](https://soylentnews.org/article.pl?sid=26/06/02/0356255&amp;from=rss)
* [2026-06-03, 07:17:30](https://news.ycombinator.com/item?id=48380932) - [Ten Years of Franz](https://meetfranz.com/blog/ten-years-of-franz)
* [2026-06-03, 03:21:00](https://soylentnews.org/article.pl?sid=26/06/02/0353213&amp;from=rss) - [Play it again, hand...](https://soylentnews.org/article.pl?sid=26/06/02/0353213&amp;from=rss)
* [2026-06-02, 22:37:00](https://soylentnews.org/article.pl?sid=26/06/01/120212&amp;from=rss) - [Researchers Say They Can Spy on Your Browsing by Measuring SSD Activity Through a Browser API](https://soylentnews.org/article.pl?sid=26/06/01/120212&amp;from=rss)
* [2026-06-02, 18:12:21](https://news.ycombinator.com/item?id=48373954) - [No Let, No Rec, No Problem: A Gentler Introduction to the Y and Z Combinators](https://irfanali.org/blog/zcom)
* [2026-06-02, 17:52:00](https://soylentnews.org/article.pl?sid=26/06/01/1154226&amp;from=rss) - [Rust Will Save Linux From AI, Says Greg Kroah-Hartman](https://soylentnews.org/article.pl?sid=26/06/01/1154226&amp;from=rss)
* [2026-06-02, 13:15:18](https://news.ycombinator.com/item?id=48369864) - [Social Cache Busting](https://www.autodidacts.io/social-cache-busting/)
* [2026-06-02, 13:07:00](https://soylentnews.org/politics/article.pl?sid=26/06/01/1149213&amp;from=rss) - [US Law Enforcement Warns of \&quot;Anti-Tech Extremism\&quot; as AI Hatred Grows](https://soylentnews.org/politics/article.pl?sid=26/06/01/1149213&amp;from=rss)
* [2026-06-02, 08:24:00](https://soylentnews.org/article.pl?sid=26/06/01/1138224&amp;from=rss) - [Researcher Develops &apos;Spray-On&apos; Stealth Coating For Drones](https://soylentnews.org/article.pl?sid=26/06/01/1138224&amp;from=rss)
* [2026-06-02, 06:29:00](https://soylentnews.org/meta/article.pl?sid=26/06/02/0621229&amp;from=rss) - [Please see kolie&apos;s journal!](https://soylentnews.org/meta/article.pl?sid=26/06/02/0621229&amp;from=rss)
* [2026-06-02, 03:39:00](https://soylentnews.org/article.pl?sid=26/06/01/1131223&amp;from=rss) - [CIFSwitch Vulnerability Exposes Some Linux Distros to Local Root Access](https://soylentnews.org/article.pl?sid=26/06/01/1131223&amp;from=rss)
