# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and Machine Learning

* [Hugging Face Researchers Are Trying To Build a More Open Version of DeepSeek's AI 'Reasoning' Model](https://slashdot.org/story/25/01/28/2132226/hugging-face-researchers-are-trying-to-build-a-more-open-version-of-deepseeks-ai-reasoning-model?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Hugging Face aims to provide an open alternative to DeepSeek's closed AI reasoning systems.

* [Poisoning AI with ".аss" subtitles](https://www.youtube.com/watch?v=NEDFUjqA1s8) - A fascinating experiment explores how malicious subtitles can influence AI behavior.

* [DeepSeek FAQ](https://stratechery.com/2025/deepseek-faq/) - A deep dive into the capabilities and limitations of DeepSeek's AI technology.

* [Promising results from DeepSeek R1 for code](https://simonwillison.net/2025/Jan/27/llamacpp-pr/) - Highlights potential breakthroughs in AI-assisted coding with improvements from DeepSeek R1.

## Space and Astronomy

* [IAC confirms existence of a Super-earth in the habitable zone of a Sun-like Star](https://www.iac.es/en/outreach/news/iac-confirms-existence-super-earth-habitable-zone-sun-star) - Discoveries reveal a potentially habitable planet, igniting discussions around extraterrestrial possibilities.

* [2024 YR4 and other dangerous asteroids](https://starwalk.space/en/news/should-you-worry-about-an-asteroid-hitting-earth) - An informative guide on the risks posed by nearby asteroids.

## Technology Innovations

* [Machine learning and nano-3D printing produce nano-architected materials](https://news.engineering.utoronto.ca/strong-as-steel-light-as-foam-machine-learning-and-nano-3d-printing-produce-breakthrough-high-performance-nano-architected-materials/) - University of Toronto researchers achieve breakthroughs in lightweight, yet strong materials using advanced technologies.

* [New FPGA-Powered Retro Console Re-Creates the PlayStation](https://games.slashdot.org/story/25/01/28/047253/new-fpga-powered-retro-console-re-creates-the-playstation?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A novel retro console faithfully emulates the classic PlayStation experience.

* [Marginalia - A search engine prioritizing non-commercial content](https://marginalia-search.com/) - A refreshing approach to web searches prioritizes content over commercialization.

## Social Issues and Regulations

* [Atomic Scientists Adjust 'Doomsday Clock' Closer Than Ever To Midnight](https://science.slashdot.org/story/25/01/28/1738223/atomic-scientists-adjust-doomsday-clock-closer-than-ever-to-midnight?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A stark reminder of escalating global threats as the Doomsday Clock moves further towards midnight.

* [LinkedIn Removes Accounts of AI 'Co-Workers' Looking for Jobs](https://slashdot.org/story/25/01/28/1949218/linkedin-removes-accounts-of-ai-co-workers-looking-for-jobs?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Striking a balance between automation and human employment concerns.

## Health and Science

* [Parkinsons patient "feels cured" with new adaptive deep brain stimulation device](https://www.bbc.com/news/articles/ckgn49r069wo) - A breakthrough medical device offers renewed hope to patients battling Parkinson’s disease.

* [Sleeping Pills Stop the Brain’s System for Cleaning Out Waste](https://soylentnews.org/article.pl?sid=25/01/27/049209&from=rss) - A surprising downside to common sleeping aids could impact brain health.

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

* [2025-01-28, 21:45:00](https://slashdot.org/story/25/01/28/2132226/hugging-face-researchers-are-trying-to-build-a-more-open-version-of-deepseeks-ai-reasoning-model?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Hugging Face Researchers Are Trying To Build a More Open Version of DeepSeek's AI 'Reasoning' Model](https://slashdot.org/story/25/01/28/2132226/hugging-face-researchers-are-trying-to-build-a-more-open-version-of-deepseeks-ai-reasoning-model?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-28, 21:37:27](https://news.ycombinator.com/item?id=42858386) - [CA, NY Attorneys General sue to resume federal funding of Medicaid, FEMA, PEPFAR](https://oag.ca.gov/news/press-releases/attorney-general-bonta-files-lawsuit-seeks-immediate-court-order-block-sweeping)
* [2025-01-28, 21:16:46](https://news.ycombinator.com/item?id=42858134) - [2024 YR4 and other dangerous asteroids](https://starwalk.space/en/news/should-you-worry-about-an-asteroid-hitting-earth)
* [2025-01-28, 21:09:40](https://news.ycombinator.com/item?id=42858051) - [Slicing the Fourth](https://axalatar.github.io/slicing-the-fourth/)
* [2025-01-28, 21:05:00](https://tech.slashdot.org/story/25/01/28/2037243/fcc-will-drop-biden-plan-to-ban-bulk-broadband-billing-for-tenants?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [FCC Will Drop Biden Plan To Ban Bulk Broadband Billing For Tenants](https://tech.slashdot.org/story/25/01/28/2037243/fcc-will-drop-biden-plan-to-ban-bulk-broadband-billing-for-tenants?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-28, 21:01:03](https://news.ycombinator.com/item?id=42857929) - [SciPhi (YC W24) Is Hiring](https://www.ycombinator.com/companies/sciphi/jobs/CVYWWpl-founding-ai-research-engineer)
* [2025-01-28, 20:45:54](https://lobste.rs/s/mxihoz/deep_learning_for_nlp_best_practices) - [Deep Learning for NLP Best Practices](https://www.ruder.io/deep-learning-nlp-best-practices/)
* [2025-01-28, 20:28:48](https://news.ycombinator.com/item?id=42857532) - [Can we get the benefits of transitive dependencies without undermining security?](https://tratt.net/laurie/blog/2024/can_we_retain_the_benefits_of_transitive_dependencies_without_undermining_security.html)
* [2025-01-28, 20:25:00](https://slashdot.org/story/25/01/28/2011237/pay-raises-are-shrinking-in-2025-cfos-say?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Pay Raises Are Shrinking in 2025, CFOs Say](https://slashdot.org/story/25/01/28/2011237/pay-raises-are-shrinking-in-2025-cfos-say?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-28, 20:07:12](https://news.ycombinator.com/item?id=42857293) - [Parkinsons patient \"feels cured\" with new adaptive deep brain stimulation device](https://www.bbc.com/news/articles/ckgn49r069wo)
* [2025-01-28, 19:53:52](https://news.ycombinator.com/item?id=42857106) - [Svelte 5 and the Future of Frameworks: A Chat with Rich Harris](https://www.smashingmagazine.com/2025/01/svelte-5-future-frameworks-chat-rich-harris/)
* [2025-01-28, 19:52:39](https://news.ycombinator.com/item?id=42857091) - [Machine learning and nano-3D printing produce nano-architected materials](https://news.engineering.utoronto.ca/strong-as-steel-light-as-foam-machine-learning-and-nano-3d-printing-produce-breakthrough-high-performance-nano-architected-materials/)
* [2025-01-28, 19:49:00](https://slashdot.org/story/25/01/28/1949218/linkedin-removes-accounts-of-ai-co-workers-looking-for-jobs?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [LinkedIn Removes Accounts of AI 'Co-Workers' Looking for Jobs](https://slashdot.org/story/25/01/28/1949218/linkedin-removes-accounts-of-ai-co-workers-looking-for-jobs?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-28, 19:46:45](https://news.ycombinator.com/item?id=42857008) - [Old Games Magazines](https://www.theguardian.com/games/2025/jan/28/video-game-history-foundation-digitised-archive-games-magazines)
* [2025-01-28, 19:24:47](https://lobste.rs/s/x5jqq3/preserves_expressive_data_language) - [Preserves: Expressive Data Language](https://preserves.dev/)
* [2025-01-28, 19:19:15](https://lobste.rs/s/4kvugz/sunsetting_cursed_terminal_emulation) - [Sunsetting Cursed Terminal Emulation](https://arcan-fe.com/2025/01/27/sunsetting-cursed-terminal-emulation/)
* [2025-01-28, 18:57:19](https://lobste.rs/s/pzo2xo/speculation_attacks_on_apple_m3_slap_flop) - [Speculation Attacks on Apple M3: SLAP and FLOP](https://predictors.fail/)
* [2025-01-28, 18:48:42](https://news.ycombinator.com/item?id=42856262) - [Windows 7 boots slower if you set a solid background color](https://support.microsoft.com/en-gb/topic/the-welcome-screen-may-be-displayed-for-30-seconds-during-the-logon-process-after-you-set-a-solid-color-as-the-desktop-background-in-windows-7-or-in-windows-server-2008-r2-b4565ced-703a-cc85-bf9c-6b3d586d6421)
* [2025-01-28, 18:31:34](https://news.ycombinator.com/item?id=42856023) - [New speculative attacks on Apple CPUs](https://predictors.fail/)
* [2025-01-28, 18:31:00](https://soylentnews.org/article.pl?sid=25/01/27/1515223&from=rss) - [The Invalid 68030 Instruction That Accidentally Allowed the Mac Classic II to Successfully Boot Up](https://soylentnews.org/article.pl?sid=25/01/27/1515223&from=rss)
* [2025-01-28, 18:19:04](https://lobste.rs/s/bkpqln/marginalia_search_engine_prioritizing) - [Marginalia - A search engine prioritizing non-commercial content](https://marginalia-search.com/)
* [2025-01-28, 18:16:37](https://lobste.rs/s/uw3ztu/why_social_media_has_captured_our) - [Why Social Media has Captured Our Attention](https://www.makeartwithpython.com/blog/social-media-is-the-final-film/)
* [2025-01-28, 18:10:00](https://science.slashdot.org/story/25/01/28/1738223/atomic-scientists-adjust-doomsday-clock-closer-than-ever-to-midnight?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Atomic Scientists Adjust 'Doomsday Clock' Closer Than Ever To Midnight](https://science.slashdot.org/story/25/01/28/1738223/atomic-scientists-adjust-doomsday-clock-closer-than-ever-to-midnight?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-28, 17:35:05](https://news.ycombinator.com/item?id=42855258) - [Using uv as your shebang line](https://akrabat.com/using-uv-as-your-shebang-line/)
* [2025-01-28, 17:30:00](https://news.slashdot.org/story/25/01/28/1730238/uk-considers-making-netflix-users-pay-license-fee-to-fund-bbc?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [ UK Considers Making Netflix Users Pay License Fee to Fund BBC](https://news.slashdot.org/story/25/01/28/1730238/uk-considers-making-netflix-users-pay-license-fee-to-fund-bbc?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-28, 17:12:15](https://news.ycombinator.com/item?id=42854887) - [A new ability to pinpoint sources of fast radio bursts](https://news.berkeley.edu/2025/01/21/astronomers-thought-they-understood-fast-radio-bursts-a-recent-one-calls-that-into-question/)
* [2025-01-28, 16:41:00](https://it.slashdot.org/story/25/01/28/1636224/garmin-users-say-their-watches-are-bricked-with-a-blue-triangle-of-death?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Garmin Users Say Their Watches Are Bricked With a 'Blue Triangle of Death'](https://it.slashdot.org/story/25/01/28/1636224/garmin-users-say-their-watches-are-bricked-with-a-blue-triangle-of-death?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-28, 16:02:00](https://tech.slashdot.org/story/25/01/28/1514236/google-to-cut-off-chrome-sync-for-older-browser-versions?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google To Cut Off Chrome Sync for Older Browser Versions](https://tech.slashdot.org/story/25/01/28/1514236/google-to-cut-off-chrome-sync-for-older-browser-versions?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-28, 15:51:26](https://news.ycombinator.com/item?id=42853696) - [Bitwarden introduces mandatory 2FA for new devices](https://bitwarden.com/help/new-device-verification/)
* [2025-01-28, 15:46:53](https://news.ycombinator.com/item?id=42853633) - [Boom XB-1 First Supersonic Flight [video]](https://www.youtube.com/watch?v=-qisIViAHwI)
* [2025-01-28, 15:37:32](https://news.ycombinator.com/item?id=42853528) - [Maxima in the browser using Embedded Common Lisp on WASM](https://maxima-on-wasm.pages.dev/)
* [2025-01-28, 15:20:00](https://news.slashdot.org/story/25/01/28/1411257/cloud-services-market-is-not-working-says-uk-regulator?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Cloud Services Market Is 'Not Working,' Says UK Regulator](https://news.slashdot.org/story/25/01/28/1411257/cloud-services-market-is-not-working-says-uk-regulator?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-28, 15:09:52](https://news.ycombinator.com/item?id=42853174) - [IAC confirms existence of a Super-earth in the habitable zone of a Sun-like Star](https://www.iac.es/en/outreach/news/iac-confirms-existence-super-earth-habitable-zone-sun-star)
* [2025-01-28, 14:49:26](https://lobste.rs/s/djvgmv/what_is_lifetime_thinking_lifetimes_as) - [But what is 'a lifetime - thinking of lifetimes as regions of memory](https://youtu.be/gRAVZv7V91Q)
* [2025-01-28, 14:44:06](https://news.ycombinator.com/item?id=42852866) - [Promising results from DeepSeek R1 for code](https://simonwillison.net/2025/Jan/27/llamacpp-pr/)
* [2025-01-28, 14:40:00](https://news.slashdot.org/story/25/01/28/1345201/bookshop-takes-on-amazon-with-e-book-platform-for-independent-stores?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Bookshop Takes On Amazon With E-book Platform For Independent Stores](https://news.slashdot.org/story/25/01/28/1345201/bookshop-takes-on-amazon-with-e-book-platform-for-independent-stores?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-28, 14:00:00](https://tech.slashdot.org/story/25/01/28/1315215/deepseek-has-spent-over-500-million-on-nvidia-chips-despite-low-cost-ai-claims-semianalysis-says?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [DeepSeek Has Spent Over $500 Million on Nvidia Chips Despite Low-Cost AI Claims, SemiAnalysis Says](https://tech.slashdot.org/story/25/01/28/1315215/deepseek-has-spent-over-500-million-on-nvidia-chips-despite-low-cost-ai-claims-semianalysis-says?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-28, 13:45:00](https://soylentnews.org/article.pl?sid=25/01/27/0435244&from=rss) - [China's Second-Largest Foundry Hires Former Intel Executive to Lead Advanced Node Development](https://soylentnews.org/article.pl?sid=25/01/27/0435244&from=rss)
* [2025-01-28, 13:00:00](https://games.slashdot.org/story/25/01/28/047253/new-fpga-powered-retro-console-re-creates-the-playstation?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [New FPGA-Powered Retro Console Re-Creates the PlayStation](https://games.slashdot.org/story/25/01/28/047253/new-fpga-powered-retro-console-re-creates-the-playstation?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-28, 12:43:43](https://lobste.rs/s/saxziq/pattern_for_obtaining_single_value_while) - [A pattern for obtaining a single value while holding a lock](https://devblogs.microsoft.com/oldnewthing/20250127-00/?p=110809)
* [2025-01-28, 12:42:33](https://lobste.rs/s/qkov2d/daily_command_line_ablutions) - [Daily command-line ablutions](https://lobste.rs/s/qkov2d/daily_command_line_ablutions)
* [2025-01-28, 12:20:44](https://news.ycombinator.com/item?id=42851519) - [Public Access OpenVMS System](https://decuserve.org/)
* [2025-01-28, 12:13:43](https://lobste.rs/s/noffmp/seven_things_i_know_after_25_years) - [Seven things I know after 25 years of development](https://zverok.space/blog/2025-01-27-7things-euruko.html)
* [2025-01-28, 12:04:03](https://lobste.rs/s/6fbecb/testable_examples_go) - [Testable Examples in Go](https://go.dev/blog/examples)
* [2025-01-28, 11:37:41](https://lobste.rs/s/utwbwv/can_we_retain_benefits_transitive) - [Can We Retain the Benefits of Transitive Dependencies Without Undermining Security?](https://tratt.net/laurie/blog/2024/can_we_retain_the_benefits_of_transitive_dependencies_without_undermining_security.html)
* [2025-01-28, 11:29:24](https://lobste.rs/s/oeabdn/data_protection_day_only_1_3_cases_before) - [Data Protection Day: Only 1.3% of cases before EU DPAs result in a fine](https://noyb.eu/en/data-protection-day-only-13-cases-eu-dpas-result-fine)
* [2025-01-28, 11:23:52](https://lobste.rs/s/wxc4jq/prototyping_power) - [Prototyping and Power](https://planb.nicecupoftea.org/2025/01/25/prototyping-and-power/)
* [2025-01-28, 10:00:00](https://apple.slashdot.org/story/25/01/28/0354243/homepod-with-screen-most-significant-new-apple-product-of-2025-says-gurman?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [HomePod With Screen 'Most Significant New Apple Product' of 2025, Says Gurman](https://apple.slashdot.org/story/25/01/28/0354243/homepod-with-screen-most-significant-new-apple-product-of-2025-says-gurman?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-28, 09:01:00](https://soylentnews.org/article.pl?sid=25/01/27/0432230&from=rss) - [First-Ever Data Center On The Moon Set To Launch Next Month](https://soylentnews.org/article.pl?sid=25/01/27/0432230&from=rss)
* [2025-01-28, 08:52:47](https://news.ycombinator.com/item?id=42850222) - [Run DeepSeek R1 Dynamic 1.58-bit](https://unsloth.ai/blog/deepseekr1-dynamic)
* [2025-01-28, 08:31:30](https://news.ycombinator.com/item?id=42850109) - [Show HN: Meelo, self-hosted music server for collectors and music maniacs](https://github.com/Arthi-chaud/Meelo)
* [2025-01-28, 07:35:08](https://lobste.rs/s/wb8pzw/deepseek_faq) - [DeepSeek FAQ](https://stratechery.com/2025/deepseek-faq/)
* [2025-01-28, 07:23:25](https://lobste.rs/s/zwhml6/zig_what_s_writer) - [In Zig, What's a Writer?](https://www.openmymind.net/In-Zig-Whats-a-Writer/)
* [2025-01-28, 07:02:57](https://news.ycombinator.com/item?id=42849632) - [FTC takes action against GoDaddy for alleged lax data security](https://www.ftc.gov/news-events/news/press-releases/2025/01/ftc-takes-action-against-godaddy-alleged-lax-data-security-its-website-hosting-services)
* [2025-01-28, 07:00:00](https://science.slashdot.org/story/25/01/28/0346254/peeing-is-socially-contagious-in-chimps?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Peeing Is Socially Contagious In Chimps](https://science.slashdot.org/story/25/01/28/0346254/peeing-is-socially-contagious-in-chimps?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-28, 06:46:45](https://lobste.rs/s/mvcalo/public_inbox_archives_first_approach) - [public-inbox - an \"archives first\" approach to mailing lists](https://public-inbox.org/README.html)
* [2025-01-28, 06:34:56](https://lobste.rs/s/y1eqnf/clone2leak_your_git_credentials_belong) - [Clone2Leak: Your Git Credentials Belong To Us](https://flatt.tech/research/posts/clone2leak-your-git-credentials-belong-to-us/)
* [2025-01-28, 04:14:00](https://soylentnews.org/article.pl?sid=25/01/27/0425254&from=rss) - [The Drunken Plagiarists: Working with Co-pilots](https://soylentnews.org/article.pl?sid=25/01/27/0425254&from=rss)
* [2025-01-28, 03:30:00](https://slashdot.org/story/25/01/28/0039232/ai-is-too-unpredictable-to-behave-according-to-human-goals?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['AI Is Too Unpredictable To Behave According To Human Goals'](https://slashdot.org/story/25/01/28/0039232/ai-is-too-unpredictable-to-behave-according-to-human-goals?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-28, 02:58:43](https://lobste.rs/s/vhv91q/poisoning_ai_with_ss_subtitles) - [Poisoning AI with \".аss\" subtitles](https://www.youtube.com/watch?v=NEDFUjqA1s8)
* [2025-01-27, 23:30:00](https://soylentnews.org/article.pl?sid=25/01/27/0421239&from=rss) - [Data Breach Hitting PowerSchool Looks Very, Very Bad](https://soylentnews.org/article.pl?sid=25/01/27/0421239&from=rss)
* [2025-01-27, 21:42:11](https://lobste.rs/s/qczsgz/building_personal_software_with_claude) - [Building personal software with Claude](https://blog.nelhage.com/post/personal-software-with-claude/)
* [2025-01-27, 20:28:36](https://lobste.rs/s/yqx2sx/pebble_smartwatches_open_sourced) - [Pebble smartwatches open-sourced](https://opensource.googleblog.com/2025/01/see-code-that-powered-pebble-smartwatches.html)
* [2025-01-27, 20:11:19](https://news.ycombinator.com/item?id=42845091) - [We're bringing Pebble back](https://repebble.com/)
* [2025-01-27, 19:02:11](https://lobste.rs/s/quamiu/first_perfect_computer) - [The First Perfect Computer](https://celso.io/posts/2025/01/26/the-first-perfect-computer/)
* [2025-01-27, 18:44:00](https://soylentnews.org/article.pl?sid=25/01/27/049209&from=rss) - [Sleeping Pills Stop the Brain’s System for Cleaning Out Waste](https://soylentnews.org/article.pl?sid=25/01/27/049209&from=rss)
* [2025-01-27, 16:25:00](https://soylentnews.org/article.pl?sid=25/01/27/0416218&from=rss) - [Linux Kernel 6.13 Announced](https://soylentnews.org/article.pl?sid=25/01/27/0416218&from=rss)
* [2025-01-27, 14:26:04](https://lobste.rs/s/vy25lh/steam_brick_no_screen_no_controller) - [Steam Brick: No screen, no controller, and absolutely no sense, just a power button and a USB port](https://crastinator-pro.github.io/steam-brick/)
* [2025-01-27, 14:22:06](https://lobste.rs/s/j9iugq/is_nixos_truly_reproducible) - [Is NixOS truly reproducible?](https://luj.fr/blog/is-nixos-truly-reproducible.html)
* [2025-01-27, 13:55:00](https://soylentnews.org/article.pl?sid=25/01/27/033246&from=rss) - [Think It Takes 21 Days to Form a Habit? Science Says Think Again](https://soylentnews.org/article.pl?sid=25/01/27/033246&from=rss)
* [2025-01-27, 12:42:10](https://lobste.rs/s/ldaaql/my_failed_attempt_shrink_all_npm_packages) - [My failed attempt to shrink all npm packages by 5%](https://evanhahn.com/my-failed-attempt-to-shrink-all-npm-packages-by-5-percent/)
* [2025-01-27, 09:10:00](https://soylentnews.org/article.pl?sid=25/01/26/0453205&from=rss) - [Medical Device Company Suddenly Stops Hospitals From Fixing Machines Themselves](https://soylentnews.org/article.pl?sid=25/01/26/0453205&from=rss)
* [2025-01-27, 04:22:00](https://soylentnews.org/article.pl?sid=25/01/26/0444214&from=rss) - [Mysterious Blobs Found Inside Cells Are Rewriting the Story of How Life Works](https://soylentnews.org/article.pl?sid=25/01/26/0444214&from=rss)
* [2025-01-26, 23:34:00](https://soylentnews.org/article.pl?sid=25/01/25/155223&from=rss) - [Florida Man Eats Diet of Butter, Cheese, Beef; Cholesterol Oozes From His Body](https://soylentnews.org/article.pl?sid=25/01/25/155223&from=rss)
* [2025-01-26, 18:51:00](https://soylentnews.org/article.pl?sid=25/01/25/152224&from=rss) - [Real Datacenter Emissions Are A Dirty Secret](https://soylentnews.org/article.pl?sid=25/01/25/152224&from=rss)
* [2025-01-26, 14:10:00](https://soylentnews.org/article.pl?sid=25/01/25/1456254&from=rss) - [Touchscreen Dashboards Have Finally Taken Over and Ruined Driving](https://soylentnews.org/article.pl?sid=25/01/25/1456254&from=rss)
* [2025-01-26, 12:28:40](https://news.ycombinator.com/item?id=42829674) - [TokenVerse: Multi-Concept Personalization in Token Modulation Space by Google](https://token-verse.github.io/)
* [2025-01-26, 11:22:40](https://news.ycombinator.com/item?id=42829402) - [Malimite – iOS and macOS Decompiler](https://github.com/LaurieWired/Malimite)
* [2025-01-26, 11:09:17](https://news.ycombinator.com/item?id=42829346) - [Watch the path of a raindrop from anywhere in the world](https://river-runner-global.samlearner.com/)
* [2025-01-26, 11:03:50](https://news.ycombinator.com/item?id=42829315) - [Keycloak, Angular, and the BFF Pattern](https://blog.brakmic.com/keycloak-angular-and-the-bff-pattern/)
* [2025-01-26, 09:47:13](https://news.ycombinator.com/item?id=42829050) - [The Untold History of Toontown's SpeedChat](http://habitatchronicles.com/2007/03/the-untold-history-of-toontowns-speedchat-or-blockchattm-from-disney-finally-arrives/)
* [2025-01-26, 09:25:00](https://soylentnews.org/article.pl?sid=25/01/25/1448247&from=rss) - [“Project Mini Rack” Wants Make Your Mini-Homelab a Reality](https://soylentnews.org/article.pl?sid=25/01/25/1448247&from=rss)
* [2025-01-26, 09:01:16](https://news.ycombinator.com/item?id=42828848) - [Fixing my monitor's power button](https://www.lkhrs.com/blog/2025/monitor-repair/)
* [2025-01-26, 04:38:00](https://soylentnews.org/article.pl?sid=25/01/24/2112249&from=rss) - [Anthropic Chief Says AI Could Surpass “Almost All Humans at Almost Everything” Shortly After 2027](https://soylentnews.org/article.pl?sid=25/01/24/2112249&from=rss)
* [2025-01-25, 23:53:00](https://soylentnews.org/article.pl?sid=25/01/24/2110218&from=rss) - [Not an Asteroid, Just Elon's Car](https://soylentnews.org/article.pl?sid=25/01/24/2110218&from=rss)
* [2025-01-25, 19:08:00](https://soylentnews.org/article.pl?sid=25/01/24/1325241&from=rss) - [How Many Sexes Are There?](https://soylentnews.org/article.pl?sid=25/01/24/1325241&from=rss)
* [2025-01-25, 14:23:00](https://soylentnews.org/article.pl?sid=25/01/24/1324218&from=rss) - [Wine 10.0 Brings Arm Windows Apps to Linux, Still Isn't an Emulator](https://soylentnews.org/article.pl?sid=25/01/24/1324218&from=rss)
* [2025-01-25, 09:40:00](https://soylentnews.org/article.pl?sid=25/01/24/1255245&from=rss) - [Trump Pardons Dark Web Silk Road Marketplace Founder Ross Ulbricht](https://soylentnews.org/article.pl?sid=25/01/24/1255245&from=rss)
* [2025-01-25, 04:54:00](https://soylentnews.org/article.pl?sid=25/01/24/1251214&from=rss) - [Opinion: We Need to Protect the Protocol That Runs Bluesky](https://soylentnews.org/article.pl?sid=25/01/24/1251214&from=rss)
* [2025-01-25, 00:09:00](https://soylentnews.org/article.pl?sid=25/01/24/1234214&from=rss) - [AI Workloads Spur Bigger Memory Drives](https://soylentnews.org/article.pl?sid=25/01/24/1234214&from=rss)
* [2025-01-24, 19:24:00](https://soylentnews.org/article.pl?sid=25/01/23/1255246&from=rss) - [Oyster Blood: A New Frontier in Fighting Infection](https://soylentnews.org/article.pl?sid=25/01/23/1255246&from=rss)
* [2025-01-24, 19:14:41](https://news.ycombinator.com/item?id=42816133) - [Desmos Animated Graphing Calculator](https://www.desmos.com/)
* [2025-01-24, 14:38:00](https://soylentnews.org/article.pl?sid=25/01/23/1249227&from=rss) - [Chinese Salt Typhoon Hackers 1st Spotted on Federal Networks Under Another Name](https://soylentnews.org/article.pl?sid=25/01/23/1249227&from=rss)
* [2025-01-24, 09:53:00](https://soylentnews.org/article.pl?sid=25/01/23/1247207&from=rss) - [New California Law Criminalizing AI Generated Child Porn Claims First Arrest](https://soylentnews.org/article.pl?sid=25/01/23/1247207&from=rss)
* [2025-01-24, 05:07:00](https://soylentnews.org/article.pl?sid=25/01/23/0458201&from=rss) - [Time to Check My Tire Pressures...Hand Me That Hammer](https://soylentnews.org/article.pl?sid=25/01/23/0458201&from=rss)
* [2025-01-24, 00:22:00](https://soylentnews.org/article.pl?sid=25/01/23/0454218&from=rss) - [Google Is Now the East India Company of the Internet](https://soylentnews.org/article.pl?sid=25/01/23/0454218&from=rss)
