# [News Summary](https://kherrick.github.io/news-summary/)

## Emerging Technologies and Innovations

* [Microplastics Found In the Brains of Mice Within Hours of Consumption](https://science.slashdot.org/story/25/01/29/0115221/microplastics-found-in-the-brains-of-mice-within-hours-of-consumption?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Technology For Lab-Grown Eggs Or Sperm On Brink of Viability, UK Watchdog Finds](https://science.slashdot.org/story/25/01/29/001209/technology-for-lab-grown-eggs-or-sperm-on-brink-of-viability-uk-watchdog-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [5 Super Creepy New Technologies That Should Chill All Of Us To The Core](https://soylentnews.org/article.pl?sid=25/01/27/172217&from=rss)

* [Parkinsons patient "feels cured" with new adaptive deep brain stimulation device](https://www.bbc.com/news/articles/ckgn49r069wo)

## Cybersecurity and Privacy

* [We got hit by an alarmingly well-prepared phish spammer](https://utcc.utoronto.ca/~cks/space/blog/spam/WellPreparedPhishSpammer)

* [Apple Chips Can Be Hacked To Leak Secrets From Gmail, ICloud, and More](https://it.slashdot.org/story/25/01/28/2140207/apple-chips-can-be-hacked-to-leak-secrets-from-gmail-icloud-and-more?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## AI and Machine Learning Developments

* [Hugging Face Researchers Are Trying To Build a More Open Version of DeepSeek's AI 'Reasoning' Model](https://slashdot.org/story/25/01/28/2132226/hugging-face-researchers-are-trying-to-build-a-more-open-version-of-deepseeks-ai-reasoning-model?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Poisoning AI with ".аss" subtitles](https://www.youtube.com/watch?v=NEDFUjqA1s8)

* [Promising results from DeepSeek R1 for code](https://simonwillison.net/2025/Jan/27/llamacpp-pr/)

## Space and Environmental Insights

* [First-Ever Data Center On The Moon Set To Launch Next Month](https://soylentnews.org/article.pl?sid=25/01/27/0432230&from=rss)

* [IAC confirms existence of a Super-earth in the habitable zone of a Sun-like Star](https://www.iac.es/en/outreach/news/iac-confirms-existence-super-earth-habitable-zone-sun-star)

## Science and Exploration

* [Boom Supersonic XB-1 Breaks Sound Barrier During Historic Test Flight](https://tech.slashdot.org/story/25/01/28/2146222/boom-supersonic-xb-1-breaks-sound-barrier-during-historic-test-flight?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [A new ability to pinpoint sources of fast radio bursts](https://news.berkeley.edu/2025/01/21/astronomers-thought-they-understood-fast-radio-bursts-a-recent-one-calls-that-into-question/)

## Historical and Cultural Reflections

* [The Invalid 68030 Instruction That Accidentally Allowed the Mac Classic II to Successfully Boot Up](https://soylentnews.org/article.pl?sid=25/01/27/1515223&from=rss)

* [My history with Forth & stack machines](https://yosefk.com/blog/my-history-with-forth-stack-machines.html)

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

* [2025-01-29, 10:00:00](https://mobile.slashdot.org/story/25/01/29/0122208/cvs-might-let-you-open-locked-shelves-with-your-phone?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [CVS Might Let You Open Locked Shelves With Your Phone](https://mobile.slashdot.org/story/25/01/29/0122208/cvs-might-let-you-open-locked-shelves-with-your-phone?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-29, 09:39:04](https://lobste.rs/s/o7vr0v/how_set_webgl_shader_colors_with_css) - [How to Set WebGL Shader Colors with CSS and JavaScript](https://www.nmattia.com/posts/2025-01-29-shader-css-properties/)
* [2025-01-29, 09:17:44](https://lobste.rs/s/lpl09r/we_got_hit_by_alarmingly_well_prepared) - [We got hit by an alarmingly well-prepared phish spammer](https://utcc.utoronto.ca/~cks/space/blog/spam/WellPreparedPhishSpammer)
* [2025-01-29, 08:49:00](https://soylentnews.org/article.pl?sid=25/01/27/177259&from=rss) - [How Good is Tesla Full Self Driving, by a Motor Trend Road Tester](https://soylentnews.org/article.pl?sid=25/01/27/177259&from=rss)
* [2025-01-29, 08:43:34](https://news.ycombinator.com/item?id=42862873) - [We got hit by an alarmingly well-prepared phish spammer](https://utcc.utoronto.ca/~cks/space/blog/spam/WellPreparedPhishSpammer)
* [2025-01-29, 07:00:00](https://science.slashdot.org/story/25/01/29/0115221/microplastics-found-in-the-brains-of-mice-within-hours-of-consumption?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microplastics Found In the Brains of Mice Within Hours of Consumption](https://science.slashdot.org/story/25/01/29/0115221/microplastics-found-in-the-brains-of-mice-within-hours-of-consumption?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-29, 06:54:35](https://news.ycombinator.com/item?id=42862288) - [What Have We Forgotten?](http://mikhailian.mova.org/node/291)
* [2025-01-29, 06:43:43](https://news.ycombinator.com/item?id=42862246) - [I still like Sublime Text in 2025](https://ohdoylerules.com/workflows/why-i-still-like-sublime-text-in-2025/)
* [2025-01-29, 06:16:14](https://news.ycombinator.com/item?id=42862118) - [Science YouTuber physicsgirl (Dianna Cowern) stands for the first time in 2 yrs](https://www.youtube.com/shorts/2ntx91cOYEc)
* [2025-01-29, 06:06:59](https://lobste.rs/s/adcodp/bidirectional_typechecking_is) - [Bidirectional Typechecking is Bidirectional](https://cybercat-institute.github.io//2025/01/28/bidirectional-typechecking/)
* [2025-01-29, 04:21:18](https://lobste.rs/s/pihql3/you_re_thinking_about_passkeys_wrong) - [You're thinking about passkeys wrong](https://dev.to/yawaramin/youre-thinking-about-passkeys-wrong-171o)
* [2025-01-29, 04:03:00](https://soylentnews.org/article.pl?sid=25/01/27/172217&from=rss) - [5 Super Creepy New Technologies That Should Chill All Of Us To The Core](https://soylentnews.org/article.pl?sid=25/01/27/172217&from=rss)
* [2025-01-29, 03:49:27](https://lobste.rs/s/esqs7z/mlx_distributed_computing_for_apple) - [MLX — Distributed Computing for Apple Silicon](https://ml-explore.github.io/mlx/build/html/index.html)
* [2025-01-29, 03:30:00](https://science.slashdot.org/story/25/01/29/001209/technology-for-lab-grown-eggs-or-sperm-on-brink-of-viability-uk-watchdog-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Technology For Lab-Grown Eggs Or Sperm On Brink of Viability, UK Watchdog Finds](https://science.slashdot.org/story/25/01/29/001209/technology-for-lab-grown-eggs-or-sperm-on-brink-of-viability-uk-watchdog-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-29, 03:15:51](https://lobste.rs/s/pmgl2v/multicore_property_based_tests_for_ocaml) - [Multicore Property-Based Tests for OCaml 5: Challenges and Lessons Learned](https://tarides.com/blog/2024-12-23-multicore-property-based-tests-for-ocaml-5-challenges-and-lessons-learned/)
* [2025-01-29, 03:11:04](https://lobste.rs/s/tswf9y/modern_compiler_for_french_tax_code) - [A Modern Compiler for the French Tax Code](https://inria.hal.science/hal-03002266)
* [2025-01-29, 02:22:22](https://news.ycombinator.com/item?id=42860752) - [Apple and SpaceX link up to support Starlink satellite network on iPhones](https://www.bloomberg.com/news/articles/2025-01-29/apple-and-spacex-link-up-to-support-starlink-satellite-network-on-iphones)
* [2025-01-29, 02:03:11](https://lobste.rs/s/n9vtqo/my_history_with_forth_stack_machines) - [My history with Forth & stack machines](https://yosefk.com/blog/my-history-with-forth-stack-machines.html)
* [2025-01-29, 01:30:00](https://science.slashdot.org/story/25/01/28/2352213/ghost-that-haunts-south-carolina-rail-line-may-be-caused-by-tiny-earthquakes?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['Ghost' That Haunts South Carolina Rail Line May Be Caused By Tiny Earthquakes](https://science.slashdot.org/story/25/01/28/2352213/ghost-that-haunts-south-carolina-rail-line-may-be-caused-by-tiny-earthquakes?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-29, 01:11:08](https://news.ycombinator.com/item?id=42860240) - [Libraries and Well-Being: A Case Study from The New York Public Library](https://lithub.com/its-official-research-has-found-that-libraries-make-everything-better/)
* [2025-01-29, 00:54:58](https://news.ycombinator.com/item?id=42860141) - [Recreating Delicious Library in 2025?](https://dingyu.me/blog/recreating-delicious-library-in-2025)
* [2025-01-29, 00:53:30](https://news.ycombinator.com/item?id=42860128) - [Discovery Coding](https://jimmyhmiller.github.io/discovery-coding)
* [2025-01-29, 00:50:00](https://yro.slashdot.org/story/25/01/28/2225214/record-45-billion-eu-fine-punished-its-innovation-google-tells-eu-court?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Record $4.5 Billion EU Fine Punished Its Innovation, Google Tells EU Court](https://yro.slashdot.org/story/25/01/28/2225214/record-45-billion-eu-fine-punished-its-innovation-google-tells-eu-court?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-29, 00:45:00](https://yro.slashdot.org/story/25/01/28/2218204/white-house-looking-into-national-security-implications-of-deepseeks-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [White House 'Looking Into' National Security Implications of DeepSeek's AI](https://yro.slashdot.org/story/25/01/28/2218204/white-house-looking-into-national-security-implications-of-deepseeks-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-29, 00:25:00](https://yro.slashdot.org/story/25/01/28/226206/opm-sued-over-privacy-concerns-with-new-government-wide-email-system?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [OPM Sued Over Privacy Concerns With New Government-Wide Email System](https://yro.slashdot.org/story/25/01/28/226206/opm-sued-over-privacy-concerns-with-new-government-wide-email-system?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-28, 23:45:00](https://yro.slashdot.org/story/25/01/28/2156244/white-house-says-new-jersey-drones-authorized-to-be-flown-by-faa?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [White House Says New Jersey Drones 'Authorized To Be Flown By FAA'](https://yro.slashdot.org/story/25/01/28/2156244/white-house-says-new-jersey-drones-authorized-to-be-flown-by-faa?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-28, 23:17:00](https://soylentnews.org/article.pl?sid=25/01/27/1659214&from=rss) - [Your Hollywood Career: How to Tell When the End Is Nigh](https://soylentnews.org/article.pl?sid=25/01/27/1659214&from=rss)
* [2025-01-28, 23:02:00](https://tech.slashdot.org/story/25/01/28/2146222/boom-supersonic-xb-1-breaks-sound-barrier-during-historic-test-flight?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Boom Supersonic XB-1 Breaks Sound Barrier During Historic Test Flight](https://tech.slashdot.org/story/25/01/28/2146222/boom-supersonic-xb-1-breaks-sound-barrier-during-historic-test-flight?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-28, 22:38:14](https://lobste.rs/s/fzjejf/handwiki) - [Handwiki](https://handwiki.org/)
* [2025-01-28, 22:25:00](https://it.slashdot.org/story/25/01/28/2140207/apple-chips-can-be-hacked-to-leak-secrets-from-gmail-icloud-and-more?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Apple Chips Can Be Hacked To Leak Secrets From Gmail, ICloud, and More](https://it.slashdot.org/story/25/01/28/2140207/apple-chips-can-be-hacked-to-leak-secrets-from-gmail-icloud-and-more?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-28, 21:45:00](https://slashdot.org/story/25/01/28/2132226/hugging-face-researchers-are-trying-to-build-a-more-open-version-of-deepseeks-ai-reasoning-model?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Hugging Face Researchers Are Trying To Build a More Open Version of DeepSeek's AI 'Reasoning' Model](https://slashdot.org/story/25/01/28/2132226/hugging-face-researchers-are-trying-to-build-a-more-open-version-of-deepseeks-ai-reasoning-model?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-28, 21:05:00](https://tech.slashdot.org/story/25/01/28/2037243/fcc-will-drop-biden-plan-to-ban-bulk-broadband-billing-for-tenants?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [FCC Will Drop Biden Plan To Ban Bulk Broadband Billing For Tenants](https://tech.slashdot.org/story/25/01/28/2037243/fcc-will-drop-biden-plan-to-ban-bulk-broadband-billing-for-tenants?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-28, 21:01:03](https://news.ycombinator.com/item?id=42857929) - [SciPhi (YC W24) Is Hiring](https://www.ycombinator.com/companies/sciphi/jobs/CVYWWpl-founding-ai-research-engineer)
* [2025-01-28, 20:25:00](https://slashdot.org/story/25/01/28/2011237/pay-raises-are-shrinking-in-2025-cfos-say?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Pay Raises Are Shrinking in 2025, CFOs Say](https://slashdot.org/story/25/01/28/2011237/pay-raises-are-shrinking-in-2025-cfos-say?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-28, 20:07:12](https://news.ycombinator.com/item?id=42857293) - [Parkinsons patient \"feels cured\" with new adaptive deep brain stimulation device](https://www.bbc.com/news/articles/ckgn49r069wo)
* [2025-01-28, 19:52:39](https://news.ycombinator.com/item?id=42857091) - [Machine learning and nano-3D printing produce nano-architected materials](https://news.engineering.utoronto.ca/strong-as-steel-light-as-foam-machine-learning-and-nano-3d-printing-produce-breakthrough-high-performance-nano-architected-materials/)
* [2025-01-28, 19:49:00](https://slashdot.org/story/25/01/28/1949218/linkedin-removes-accounts-of-ai-co-workers-looking-for-jobs?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [LinkedIn Removes Accounts of AI 'Co-Workers' Looking for Jobs](https://slashdot.org/story/25/01/28/1949218/linkedin-removes-accounts-of-ai-co-workers-looking-for-jobs?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-28, 19:24:47](https://lobste.rs/s/x5jqq3/preserves_expressive_data_language) - [Preserves: Expressive Data Language](https://preserves.dev/)
* [2025-01-28, 19:19:15](https://lobste.rs/s/4kvugz/sunsetting_cursed_terminal_emulation) - [Sunsetting Cursed Terminal Emulation](https://arcan-fe.com/2025/01/27/sunsetting-cursed-terminal-emulation/)
* [2025-01-28, 18:57:19](https://lobste.rs/s/pzo2xo/speculation_attacks_on_apple_m3_slap_flop) - [Speculation Attacks on Apple M3: SLAP and FLOP](https://predictors.fail/)
* [2025-01-28, 18:31:34](https://news.ycombinator.com/item?id=42856023) - [New speculative attacks on Apple CPUs](https://predictors.fail/)
* [2025-01-28, 18:31:00](https://soylentnews.org/article.pl?sid=25/01/27/1515223&from=rss) - [The Invalid 68030 Instruction That Accidentally Allowed the Mac Classic II to Successfully Boot Up](https://soylentnews.org/article.pl?sid=25/01/27/1515223&from=rss)
* [2025-01-28, 18:19:04](https://lobste.rs/s/bkpqln/marginalia_search_engine_prioritizing) - [Marginalia - A search engine prioritizing non-commercial content](https://marginalia-search.com/)
* [2025-01-28, 18:10:00](https://science.slashdot.org/story/25/01/28/1738223/atomic-scientists-adjust-doomsday-clock-closer-than-ever-to-midnight?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Atomic Scientists Adjust 'Doomsday Clock' Closer Than Ever To Midnight](https://science.slashdot.org/story/25/01/28/1738223/atomic-scientists-adjust-doomsday-clock-closer-than-ever-to-midnight?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-28, 17:35:05](https://news.ycombinator.com/item?id=42855258) - [Using uv as your shebang line](https://akrabat.com/using-uv-as-your-shebang-line/)
* [2025-01-28, 17:12:15](https://news.ycombinator.com/item?id=42854887) - [A new ability to pinpoint sources of fast radio bursts](https://news.berkeley.edu/2025/01/21/astronomers-thought-they-understood-fast-radio-bursts-a-recent-one-calls-that-into-question/)
* [2025-01-28, 15:46:53](https://news.ycombinator.com/item?id=42853633) - [Boom XB-1 First Supersonic Flight [video]](https://www.youtube.com/watch?v=-qisIViAHwI)
* [2025-01-28, 15:37:32](https://news.ycombinator.com/item?id=42853528) - [Maxima in the browser using Embedded Common Lisp on WASM](https://maxima-on-wasm.pages.dev/)
* [2025-01-28, 15:09:52](https://news.ycombinator.com/item?id=42853174) - [IAC confirms existence of a Super-earth in the habitable zone of a Sun-like Star](https://www.iac.es/en/outreach/news/iac-confirms-existence-super-earth-habitable-zone-sun-star)
* [2025-01-28, 14:49:26](https://lobste.rs/s/djvgmv/what_is_lifetime_thinking_lifetimes_as) - [But what is 'a lifetime - thinking of lifetimes as regions of memory](https://youtu.be/gRAVZv7V91Q)
* [2025-01-28, 14:44:06](https://news.ycombinator.com/item?id=42852866) - [Promising results from DeepSeek R1 for code](https://simonwillison.net/2025/Jan/27/llamacpp-pr/)
* [2025-01-28, 13:45:00](https://soylentnews.org/article.pl?sid=25/01/27/0435244&from=rss) - [China's Second-Largest Foundry Hires Former Intel Executive to Lead Advanced Node Development](https://soylentnews.org/article.pl?sid=25/01/27/0435244&from=rss)
* [2025-01-28, 12:42:33](https://lobste.rs/s/qkov2d/daily_command_line_ablutions) - [Daily command-line ablutions](https://lobste.rs/s/qkov2d/daily_command_line_ablutions)
* [2025-01-28, 12:20:44](https://news.ycombinator.com/item?id=42851519) - [Public Access OpenVMS System](https://decuserve.org/)
* [2025-01-28, 12:13:43](https://lobste.rs/s/noffmp/seven_things_i_know_after_25_years) - [Seven things I know after 25 years of development](https://zverok.space/blog/2025-01-27-7things-euruko.html)
* [2025-01-28, 11:37:41](https://lobste.rs/s/utwbwv/can_we_retain_benefits_transitive) - [Can We Retain the Benefits of Transitive Dependencies Without Undermining Security?](https://tratt.net/laurie/blog/2024/can_we_retain_the_benefits_of_transitive_dependencies_without_undermining_security.html)
* [2025-01-28, 09:01:00](https://soylentnews.org/article.pl?sid=25/01/27/0432230&from=rss) - [First-Ever Data Center On The Moon Set To Launch Next Month](https://soylentnews.org/article.pl?sid=25/01/27/0432230&from=rss)
* [2025-01-28, 08:31:30](https://news.ycombinator.com/item?id=42850109) - [Show HN: Meelo, self-hosted music server for collectors and music maniacs](https://github.com/Arthi-chaud/Meelo)
* [2025-01-28, 07:35:08](https://lobste.rs/s/wb8pzw/deepseek_faq) - [DeepSeek FAQ](https://stratechery.com/2025/deepseek-faq/)
* [2025-01-28, 07:23:25](https://lobste.rs/s/zwhml6/zig_what_s_writer) - [In Zig, What's a Writer?](https://www.openmymind.net/In-Zig-Whats-a-Writer/)
* [2025-01-28, 07:02:57](https://news.ycombinator.com/item?id=42849632) - [FTC takes action against GoDaddy for alleged lax data security](https://www.ftc.gov/news-events/news/press-releases/2025/01/ftc-takes-action-against-godaddy-alleged-lax-data-security-its-website-hosting-services)
* [2025-01-28, 06:34:56](https://lobste.rs/s/y1eqnf/clone2leak_your_git_credentials_belong) - [Clone2Leak: Your Git Credentials Belong To Us](https://flatt.tech/research/posts/clone2leak-your-git-credentials-belong-to-us/)
* [2025-01-28, 04:14:00](https://soylentnews.org/article.pl?sid=25/01/27/0425254&from=rss) - [The Drunken Plagiarists: Working with Co-pilots](https://soylentnews.org/article.pl?sid=25/01/27/0425254&from=rss)
* [2025-01-28, 02:58:43](https://lobste.rs/s/vhv91q/poisoning_ai_with_ss_subtitles) - [Poisoning AI with \".аss\" subtitles](https://www.youtube.com/watch?v=NEDFUjqA1s8)
* [2025-01-27, 23:30:00](https://soylentnews.org/article.pl?sid=25/01/27/0421239&from=rss) - [Data Breach Hitting PowerSchool Looks Very, Very Bad](https://soylentnews.org/article.pl?sid=25/01/27/0421239&from=rss)
* [2025-01-27, 21:42:11](https://lobste.rs/s/qczsgz/building_personal_software_with_claude) - [Building personal software with Claude](https://blog.nelhage.com/post/personal-software-with-claude/)
* [2025-01-27, 20:28:36](https://lobste.rs/s/yqx2sx/pebble_smartwatches_open_sourced) - [Pebble smartwatches open-sourced](https://opensource.googleblog.com/2025/01/see-code-that-powered-pebble-smartwatches.html)
* [2025-01-27, 20:11:19](https://news.ycombinator.com/item?id=42845091) - [We're bringing Pebble back](https://repebble.com/)
* [2025-01-27, 18:44:00](https://soylentnews.org/article.pl?sid=25/01/27/049209&from=rss) - [Sleeping Pills Stop the Brain’s System for Cleaning Out Waste](https://soylentnews.org/article.pl?sid=25/01/27/049209&from=rss)
* [2025-01-27, 16:25:00](https://soylentnews.org/article.pl?sid=25/01/27/0416218&from=rss) - [Linux Kernel 6.13 Announced](https://soylentnews.org/article.pl?sid=25/01/27/0416218&from=rss)
* [2025-01-27, 14:22:06](https://lobste.rs/s/j9iugq/is_nixos_truly_reproducible) - [Is NixOS truly reproducible?](https://luj.fr/blog/is-nixos-truly-reproducible.html)
* [2025-01-27, 13:55:00](https://soylentnews.org/article.pl?sid=25/01/27/033246&from=rss) - [Think It Takes 21 Days to Form a Habit? Science Says Think Again](https://soylentnews.org/article.pl?sid=25/01/27/033246&from=rss)
* [2025-01-27, 12:42:10](https://lobste.rs/s/ldaaql/my_failed_attempt_shrink_all_npm_packages) - [My failed attempt to shrink all npm packages by 5%](https://evanhahn.com/my-failed-attempt-to-shrink-all-npm-packages-by-5-percent/)
* [2025-01-27, 09:10:00](https://soylentnews.org/article.pl?sid=25/01/26/0453205&from=rss) - [Medical Device Company Suddenly Stops Hospitals From Fixing Machines Themselves](https://soylentnews.org/article.pl?sid=25/01/26/0453205&from=rss)
* [2025-01-27, 04:22:00](https://soylentnews.org/article.pl?sid=25/01/26/0444214&from=rss) - [Mysterious Blobs Found Inside Cells Are Rewriting the Story of How Life Works](https://soylentnews.org/article.pl?sid=25/01/26/0444214&from=rss)
* [2025-01-26, 23:34:00](https://soylentnews.org/article.pl?sid=25/01/25/155223&from=rss) - [Florida Man Eats Diet of Butter, Cheese, Beef; Cholesterol Oozes From His Body](https://soylentnews.org/article.pl?sid=25/01/25/155223&from=rss)
* [2025-01-26, 18:51:00](https://soylentnews.org/article.pl?sid=25/01/25/152224&from=rss) - [Real Datacenter Emissions Are A Dirty Secret](https://soylentnews.org/article.pl?sid=25/01/25/152224&from=rss)
* [2025-01-26, 18:29:18](https://news.ycombinator.com/item?id=42832482) - [Two Bites of Data Science in K](https://blog.zdsmith.com/posts/two-bites-of-data-science-in-k.html)
* [2025-01-26, 14:10:00](https://soylentnews.org/article.pl?sid=25/01/25/1456254&from=rss) - [Touchscreen Dashboards Have Finally Taken Over and Ruined Driving](https://soylentnews.org/article.pl?sid=25/01/25/1456254&from=rss)
* [2025-01-26, 12:28:40](https://news.ycombinator.com/item?id=42829674) - [TokenVerse: Multi-Concept Personalization in Token Modulation Space by Google](https://token-verse.github.io/)
* [2025-01-26, 11:22:40](https://news.ycombinator.com/item?id=42829402) - [Malimite – iOS and macOS Decompiler](https://github.com/LaurieWired/Malimite)
* [2025-01-26, 11:09:17](https://news.ycombinator.com/item?id=42829346) - [Watch the path of a raindrop from anywhere in the world](https://river-runner-global.samlearner.com/)
* [2025-01-26, 10:15:22](https://news.ycombinator.com/item?id=42829149) - [What's OAuth2, anyway?](https://www.romaglushko.com/blog/whats-aouth2/)
* [2025-01-26, 09:47:13](https://news.ycombinator.com/item?id=42829050) - [The History of Toontown’s SpeedChat](http://habitatchronicles.com/2007/03/the-untold-history-of-toontowns-speedchat-or-blockchattm-from-disney-finally-arrives/)
* [2025-01-26, 09:25:00](https://soylentnews.org/article.pl?sid=25/01/25/1448247&from=rss) - [“Project Mini Rack” Wants Make Your Mini-Homelab a Reality](https://soylentnews.org/article.pl?sid=25/01/25/1448247&from=rss)
* [2025-01-26, 09:08:56](https://news.ycombinator.com/item?id=42828883) - [Composable SQL](https://borretti.me/article/composable-sql)
* [2025-01-26, 04:38:00](https://soylentnews.org/article.pl?sid=25/01/24/2112249&from=rss) - [Anthropic Chief Says AI Could Surpass “Almost All Humans at Almost Everything” Shortly After 2027](https://soylentnews.org/article.pl?sid=25/01/24/2112249&from=rss)
* [2025-01-25, 23:53:00](https://soylentnews.org/article.pl?sid=25/01/24/2110218&from=rss) - [Not an Asteroid, Just Elon's Car](https://soylentnews.org/article.pl?sid=25/01/24/2110218&from=rss)
* [2025-01-25, 19:08:00](https://soylentnews.org/article.pl?sid=25/01/24/1325241&from=rss) - [How Many Sexes Are There?](https://soylentnews.org/article.pl?sid=25/01/24/1325241&from=rss)
* [2025-01-25, 14:23:00](https://soylentnews.org/article.pl?sid=25/01/24/1324218&from=rss) - [Wine 10.0 Brings Arm Windows Apps to Linux, Still Isn't an Emulator](https://soylentnews.org/article.pl?sid=25/01/24/1324218&from=rss)
* [2025-01-25, 09:40:00](https://soylentnews.org/article.pl?sid=25/01/24/1255245&from=rss) - [Trump Pardons Dark Web Silk Road Marketplace Founder Ross Ulbricht](https://soylentnews.org/article.pl?sid=25/01/24/1255245&from=rss)
* [2025-01-25, 04:54:00](https://soylentnews.org/article.pl?sid=25/01/24/1251214&from=rss) - [Opinion: We Need to Protect the Protocol That Runs Bluesky](https://soylentnews.org/article.pl?sid=25/01/24/1251214&from=rss)
* [2025-01-25, 00:09:00](https://soylentnews.org/article.pl?sid=25/01/24/1234214&from=rss) - [AI Workloads Spur Bigger Memory Drives](https://soylentnews.org/article.pl?sid=25/01/24/1234214&from=rss)
