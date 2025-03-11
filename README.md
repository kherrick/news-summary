# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software Updates

* [Firefox Certificate Expiration Threatens Add-ons, Streaming on March 14](https://news.slashdot.org/story/25/03/11/1446251/firefox-certificate-expiration-threatens-add-ons-streaming-on-march-14?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [A 10x Faster TypeScript](https://devblogs.microsoft.com/typescript/typescript-native-port/)

* [Can I use Secure Curves in the Web Platform?](https://blogs.igalia.com/jfernandez/2025/02/28/can-i-use-secure-curves-in-the-web-platform/)

* [JavaScript Fatigue Strikes Back](https://allenpike.com/2025/javascript-fatigue-ssr)

* [pytest-netbox-docker: Pytest plugin that provides fixtures to start a complete Netbox infrastructure using Docker](https://github.com/link-society/pytest-netbox-docker)

* [Local Deep Research – ArXiv, wiki and other searches included](https://github.com/LearningCircuit/local-deep-research)

## Cybersecurity and Algorithms

* [NIST Selects HQC as Fifth Algorithm for Post-Quantum Encryption](https://www.nist.gov/news-events/news/2025/03/nist-selects-hqc-fifth-algorithm-post-quantum-encryption)

* [CISA Tags Windows, Cisco Vulnerabilities as Actively Exploited](https://soylentnews.org/article.pl?sid=25/03/09/0337252&from=rss)

* [Microsoft Admits GitHub Used to Store Malware That Infected Almost a Million Devices](https://soylentnews.org/article.pl?sid=25/03/10/1151258&from=rss)

## Scientific Breakthroughs and Space

* [Anomalous Ionization in the Central Molecular Zone by Sub-GeV Dark Matter](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.134.101001)

* [NASA Eliminates Chief Scientist and Other Jobs At Its Headquarters](https://science.slashdot.org/story/25/03/11/004258/nasa-eliminates-chief-scientist-and-other-jobs-at-its-headquarters?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Former Google CEO Eric Schmidt Is the New Leader of Relativity Space](https://science.slashdot.org/story/25/03/11/0032245/former-google-ceo-eric-schmidt-is-the-new-leader-of-relativity-space?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Cultural Insights

* [The US island that speaks Elizabethan English](https://www.bbc.com/travel/article/20190623-the-us-island-that-speaks-elizabethan-english)

* [Short Conversations with Poets: Dong Li](https://www.mcsweeneys.net/articles/dong-li)

* [Mapping the University of Chicago's 135-Year Expansion into Hyde Park and Beyond](https://chicagomaroon.github.io/data-visualizations/2025/uchicago-property/)

## Business and Economy Updates

* [California Pension Fund Labels Chevron and Saudi Aramco as Climate Investments](https://news.slashdot.org/story/25/03/11/1436211/california-pension-fund-labels-chevron-and-saudi-aramco-as-climate-investments?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [SpaceX Readies Starlink India Launch](https://tech.slashdot.org/story/25/03/11/1125227/spacex-readies-starlink-india-launch?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Health and Environmental Matters

* [New Zealand's $16B health dept managed finances with single Excel spreadsheet](https://www.theregister.com/2025/03/10/nz_health_excel_spreadsheet/)

* [Microplastics Hinder Plant Photosynthesis, Study Finds](https://news.slashdot.org/story/25/03/10/2349232/microplastics-hinder-plant-photosynthesis-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Artificial Intelligence and Local LLMs

* [Here’s how I use LLMs to help me write code](https://simonwillison.net/2025/Mar/11/using-llms-for-code/)

* [A Practical Guide to Running Local LLMs](https://spin.atomicobject.com/running-local-llms/)

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

* [2025-03-11, 15:20:00](https://news.slashdot.org/story/25/03/11/1446251/firefox-certificate-expiration-threatens-add-ons-streaming-on-march-14?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Firefox Certificate Expiration Threatens Add-ons, Streaming on March 14](https://news.slashdot.org/story/25/03/11/1446251/firefox-certificate-expiration-threatens-add-ons-streaming-on-march-14?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-11, 14:56:37](https://news.ycombinator.com/item?id=43333091) - [Short Conversations with Poets: Dong Li](https://www.mcsweeneys.net/articles/dong-li)
* [2025-03-11, 14:54:33](https://lobste.rs/s/gdmnho/javascript_fatigue_strikes_back) - [JavaScript Fatigue Strikes Back](https://allenpike.com/2025/javascript-fatigue-ssr)
* [2025-03-11, 14:49:30](https://lobste.rs/s/ee6kb4/can_i_use_secure_curves_web_platform) - [Can I use Secure Curves in the Web Platform?](https://blogs.igalia.com/jfernandez/2025/02/28/can-i-use-secure-curves-in-the-web-platform/)
* [2025-03-11, 14:44:44](https://news.ycombinator.com/item?id=43332944) - [NIST Selects HQC as Fifth Algorithm for Post-Quantum Encryption](https://www.nist.gov/news-events/news/2025/03/nist-selects-hqc-fifth-algorithm-post-quantum-encryption)
* [2025-03-11, 14:41:12](https://lobste.rs/s/3q0ei5/10x_faster_typescript) - [A 10x Faster TypeScript](https://devblogs.microsoft.com/typescript/typescript-native-port/)
* [2025-03-11, 14:40:00](https://news.slashdot.org/story/25/03/11/1436211/california-pension-fund-labels-chevron-and-saudi-aramco-as-climate-investments?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [California Pension Fund Labels Chevron and Saudi Aramco as Climate Investments](https://news.slashdot.org/story/25/03/11/1436211/california-pension-fund-labels-chevron-and-saudi-aramco-as-climate-investments?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-11, 14:34:00](https://soylentnews.org/article.pl?sid=25/03/11/1132214&from=rss) - [Musk Complains: X Site Under Attack, and DOGE Interferes With His Job](https://soylentnews.org/article.pl?sid=25/03/11/1132214&from=rss)
* [2025-03-11, 14:32:23](https://news.ycombinator.com/item?id=43332830) - [A 10x Faster TypeScript](https://devblogs.microsoft.com/typescript/typescript-native-port/)
* [2025-03-11, 14:27:45](https://news.ycombinator.com/item?id=43332788) - [Anomalous Ionization in the Central Molecular Zone by Sub-GeV Dark Matter](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.134.101001)
* [2025-03-11, 14:24:48](https://news.ycombinator.com/item?id=43332752) - [The US island that speaks Elizabethan English](https://www.bbc.com/travel/article/20190623-the-us-island-that-speaks-elizabethan-english)
* [2025-03-11, 14:16:54](https://lobste.rs/s/gvkxlf/here_s_how_i_use_llms_help_me_write_code) - [Here’s how I use LLMs to help me write code](https://simonwillison.net/2025/Mar/11/using-llms-for-code/)
* [2025-03-11, 14:15:21](https://lobste.rs/s/nmoyud/pytest_netbox_docker_pytest_plugin) - [pytest-netbox-docker: Pytest plugin that provides fixtures to start a complete Netbox infrastructure using Docker](https://github.com/link-society/pytest-netbox-docker)
* [2025-03-11, 14:00:00](https://tech.slashdot.org/story/25/03/11/1125227/spacex-readies-starlink-india-launch?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [SpaceX Readies Starlink India Launch](https://tech.slashdot.org/story/25/03/11/1125227/spacex-readies-starlink-india-launch?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-11, 13:50:22](https://news.ycombinator.com/item?id=43332424) - [Mapping the University of Chicago's 135-Year Expansion into Hyde Park and Beyond](https://chicagomaroon.github.io/data-visualizations/2025/uchicago-property/)
* [2025-03-11, 13:41:31](https://news.ycombinator.com/item?id=43332352) - [A Practical Guide to Running Local LLMs](https://spin.atomicobject.com/running-local-llms/)
* [2025-03-11, 13:15:40](https://lobste.rs/s/paim15/beyond_bad_output) - [Beyond Bad Output](https://hey.paris/posts/beyond-bad-output/)
* [2025-03-11, 13:00:00](https://tech.slashdot.org/story/25/03/11/0018244/facebook-was-hand-in-glove-with-china?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Facebook Was 'Hand In Glove' With China](https://tech.slashdot.org/story/25/03/11/0018244/facebook-was-hand-in-glove-with-china?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-11, 12:50:02](https://news.ycombinator.com/item?id=43331914) - [Representing Type Lattices Compactly](https://bernsteinbear.com/blog/lattice-bitset/)
* [2025-03-11, 12:02:02](https://news.ycombinator.com/item?id=43331582) - [Show HN: Factorio Learning Environment – Agents Build Factories](https://jackhopkins.github.io/factorio-learning-environment/)
* [2025-03-11, 11:49:22](https://lobste.rs/s/clt1it/small_template_engine_for_c) - [A small template engine for C](https://www.omarpolo.com/post/template.html)
* [2025-03-11, 11:44:27](https://lobste.rs/s/j6bb5k/implementation_j_roger_hui) - [An Implementation of J - Roger Hui](https://www.jsoftware.com/books/pdf/aioj.pdf)
* [2025-03-11, 11:00:39](https://lobste.rs/s/33847t/facil_io_web_application_c_framework) - [facil.io: Web application C framework](https://github.com/boazsegev/facil.io)
* [2025-03-11, 10:07:17](https://news.ycombinator.com/item?id=43330900) - [What Makes Code Hard to Read: Visual Patterns of Complexity (2023)](https://seeinglogic.com/posts/visual-readability-patterns/)
* [2025-03-11, 10:00:00](https://science.slashdot.org/story/25/03/11/0032245/former-google-ceo-eric-schmidt-is-the-new-leader-of-relativity-space?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Former Google CEO Eric Schmidt Is the New Leader of Relativity Space](https://science.slashdot.org/story/25/03/11/0032245/former-google-ceo-eric-schmidt-is-the-new-leader-of-relativity-space?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-11, 09:50:00](https://soylentnews.org/article.pl?sid=25/03/11/0428255&from=rss) - [A Paleoarchaean Impact Crater in the Pilbara Craton, Western Australia](https://soylentnews.org/article.pl?sid=25/03/11/0428255&from=rss)
* [2025-03-11, 07:56:19](https://news.ycombinator.com/item?id=43330206) - [New Zealand's $16B health dept managed finances with single Excel spreadsheet](https://www.theregister.com/2025/03/10/nz_health_excel_spreadsheet/)
* [2025-03-11, 07:51:34](https://lobste.rs/s/fwcnkf/early_look_at_nix_dynamic_derivations) - [An early look at Nix Dynamic Derivations](https://fzakaria.com/2025/03/10/an-early-look-at-nix-dynamic-derivations)
* [2025-03-11, 07:51:32](https://news.ycombinator.com/item?id=43330164) - [Local Deep Research – ArXiv, wiki and other searches included](https://github.com/LearningCircuit/local-deep-research)
* [2025-03-11, 07:00:00](https://science.slashdot.org/story/25/03/11/004258/nasa-eliminates-chief-scientist-and-other-jobs-at-its-headquarters?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [NASA Eliminates Chief Scientist and Other Jobs At Its Headquarters](https://science.slashdot.org/story/25/03/11/004258/nasa-eliminates-chief-scientist-and-other-jobs-at-its-headquarters?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-11, 06:37:14](https://news.ycombinator.com/item?id=43329761) - [Modern Baby: A pioneering computer from Manchester](https://thechipletter.substack.com/p/modern-baby)
* [2025-03-11, 05:19:50](https://news.ycombinator.com/item?id=43329373) - [Extreme poverty in India has dropped to negligible levels](https://www.economist.com/finance-and-economics/2025/02/27/india-has-undermined-a-popular-myth-about-development)
* [2025-03-11, 05:06:00](https://soylentnews.org/article.pl?sid=25/03/10/1151258&from=rss) - [Microsoft Admits GitHub Used to Store Malware That Infected Almost a Million Devices](https://soylentnews.org/article.pl?sid=25/03/10/1151258&from=rss)
* [2025-03-11, 04:14:09](https://lobste.rs/s/ccg097/when_hyperspectral_image_is_cube) - [When a Hyperspectral Image is a Cube](https://mirawelner.com/posts/cube.html)
* [2025-03-11, 04:09:03](https://lobste.rs/s/qnmkqa/ocaml_game_engine_ecs) - [OCaml Game Engine: ECS](https://edwardwibowo.com/blog/ocaml-game-engine-ecs/)
* [2025-03-11, 04:03:51](https://lobste.rs/s/jalbsf/how_i_built_this_website_on_raspberry_pi) - [How I built this website on a Raspberry Pi](https://mirawelner.com/posts/website_howto.html)
* [2025-03-11, 03:30:00](https://news.slashdot.org/story/25/03/10/2349232/microplastics-hinder-plant-photosynthesis-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microplastics Hinder Plant Photosynthesis, Study Finds](https://news.slashdot.org/story/25/03/10/2349232/microplastics-hinder-plant-photosynthesis-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-11, 02:10:00](https://tech.slashdot.org/story/25/03/10/2341223/new-zealands-16-billion-public-health-system-runs-on-a-single-excel-sheet?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [New Zealand's $16 Billion Public Health System Runs on a Single Excel Sheet](https://tech.slashdot.org/story/25/03/10/2341223/new-zealands-16-billion-public-health-system-runs-on-a-single-excel-sheet?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-11, 01:30:00](https://news.slashdot.org/story/25/03/10/2333206/photographers-are-on-a-mission-to-fix-wikipedias-famously-bad-celebrity-portraits?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Photographers Are on a Mission to Fix Wikipedia's Famously Bad Celebrity Portraits](https://news.slashdot.org/story/25/03/10/2333206/photographers-are-on-a-mission-to-fix-wikipedias-famously-bad-celebrity-portraits?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-11, 01:05:10](https://news.ycombinator.com/item?id=43328095) - [Show HN: Seven39, a social media app that is only open for 3 hours every evening](https://www.seven39.com)
* [2025-03-11, 00:50:00](https://tech.slashdot.org/story/25/03/10/2321254/asana-ceo-announces-retirement-stock-plummets-25?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Asana CEO Announces Retirement, Stock Plummets 25%](https://tech.slashdot.org/story/25/03/10/2321254/asana-ceo-announces-retirement-stock-plummets-25?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-11, 00:20:00](https://soylentnews.org/article.pl?sid=25/03/10/0732259&from=rss) - [US Supreme Court Weakens Rules on Discharge of Raw Sewage Into Water Supplies](https://soylentnews.org/article.pl?sid=25/03/10/0732259&from=rss)
* [2025-03-11, 00:16:54](https://news.ycombinator.com/item?id=43327758) - [Shef](https://github.com/eduardoagarcia/shef)
* [2025-03-11, 00:11:33](https://news.ycombinator.com/item?id=43327730) - [Bending Spacetime in the Basement (1997)](https://www.fourmilab.ch/gravitation/foobar/)
* [2025-03-11, 00:10:00](https://entertainment.slashdot.org/story/25/03/10/2111223/bluesky-ceo-jay-graber-pokes-fun-at-mark-zuckerberg-with-latin-phrase-t-shirt?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Bluesky CEO Jay Graber Pokes Fun At Mark Zuckerberg With Latin Phrase T-Shirt](https://entertainment.slashdot.org/story/25/03/10/2111223/bluesky-ceo-jay-graber-pokes-fun-at-mark-zuckerberg-with-latin-phrase-t-shirt?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-11, 00:09:56](https://lobste.rs/s/0t5vg7/common_lisp_error_exception_handling) - [Common Lisp Error and Exception Handling](https://lispcookbook.github.io/cl-cookbook/error_handling.html)
* [2025-03-10, 23:30:00](https://tech.slashdot.org/story/25/03/10/212233/internet-shutdowns-at-record-high-in-africa-as-access-weaponized?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Internet Shutdowns At Record High In Africa As Access 'Weaponized'](https://tech.slashdot.org/story/25/03/10/212233/internet-shutdowns-at-record-high-in-africa-as-access-weaponized?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-10, 22:50:00](https://tech.slashdot.org/story/25/03/10/2055237/wine-releases-framework-mono-614?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Wine Releases Framework Mono 6.14](https://tech.slashdot.org/story/25/03/10/2055237/wine-releases-framework-mono-614?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-10, 22:21:17](https://lobste.rs/s/tcxwgv/stewardship_over_ownership) - [Stewardship over ownership](https://ntietz.com/blog/stewardship-over-ownership/)
* [2025-03-10, 22:10:00](https://games.slashdot.org/story/25/03/10/1944214/sony-experiments-with-ai-powered-playstation-characters?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Sony Experiments With AI-Powered PlayStation Characters](https://games.slashdot.org/story/25/03/10/1944214/sony-experiments-with-ai-powered-playstation-characters?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-10, 21:30:00](https://apple.slashdot.org/story/25/03/10/1936216/apple-pulls-iphone-16-ad-showing-off-more-personal-siri?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Apple Pulls iPhone 16 Ad Showing Off 'More Personal Siri'](https://apple.slashdot.org/story/25/03/10/1936216/apple-pulls-iphone-16-ad-showing-off-more-personal-siri?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-10, 21:24:06](https://news.ycombinator.com/item?id=43326275) - [What made the Irish famine so deadly](https://www.newyorker.com/magazine/2025/03/17/rot-padraic-x-scanlan-book-review)
* [2025-03-10, 20:14:35](https://lobste.rs/s/arffcj/will_future_software_development_run_on) - [Will the future of software development run on vibes?](https://simonwillison.net/2025/Mar/6/vibe-coding/)
* [2025-03-10, 20:13:44](https://lobste.rs/s/qhetdw/android_s_linux_terminal_app_is_now_widely) - [Android's Linux Terminal app is now widely available on Pixels](https://www.androidauthority.com/android-linux-terminal-app-available-3532999/)
* [2025-03-10, 20:01:55](https://lobste.rs/s/ekuzbe/introducing_sidekiq_8_0) - [Introducing Sidekiq 8.0](https://www.mikeperham.com/2025/03/05/introducing-sidekiq-8.0/)
* [2025-03-10, 19:47:30](https://lobste.rs/s/tyws8h/mathml_core) - [MathML Core](https://developer.mozilla.org/en-US/docs/Web/MathML)
* [2025-03-10, 19:35:00](https://soylentnews.org/article.pl?sid=25/03/10/0720214&from=rss) - [Undocumented Commands Found in Bluetooth Chip Used by a Billion Devices](https://soylentnews.org/article.pl?sid=25/03/10/0720214&from=rss)
* [2025-03-10, 18:27:32](https://news.ycombinator.com/item?id=43323946) - [Mathematical Foundations of Reinforcement Learning](https://github.com/MathFoundationRL/Book-Mathematical-Foundation-of-Reinforcement-Learning)
* [2025-03-10, 17:28:25](https://lobste.rs/s/iaqfqn/css_relative_colors) - [CSS Relative Colors](https://ishadeed.com/article/css-relative-colors/)
* [2025-03-10, 17:24:24](https://lobste.rs/s/rftm88/scroll_buddy) - [Scroll buddy](https://scrollbuddy.com/)
* [2025-03-10, 16:54:45](https://lobste.rs/s/vd6all/why_go_s_error_handling_is_awesome) - [Why Go's Error Handling is Awesome](https://rauljordan.com/why-go-error-handling-is-awesome/)
* [2025-03-10, 14:53:28](https://lobste.rs/s/a46njy/rust_2025_targeting_foundational) - [Rust in 2025: Targeting foundational software](https://smallcultfollowing.com/babysteps/blog/2025/03/10/rust-2025-intro/)
* [2025-03-10, 14:46:00](https://soylentnews.org/article.pl?sid=25/03/10/077239&from=rss) - [How Tiny Can You Scale It Until Things Won't Work?](https://soylentnews.org/article.pl?sid=25/03/10/077239&from=rss)
* [2025-03-10, 13:12:38](https://news.ycombinator.com/item?id=43320230) - [Canon EF and RF Lenses – All Autofocus Motors](https://exclusivearchitecture.com/03-technical-articles-CLT-12-autofocus-systems.html)
* [2025-03-10, 10:07:33](https://lobste.rs/s/okqjn5/20_years_linux_on_desktop_part_3) - [20 years of Linux on the Desktop (part 3)](https://ploum.net/2025-03-08-linux_desktop3.html)
* [2025-03-10, 09:27:00](https://soylentnews.org/article.pl?sid=25/03/09/0337252&from=rss) - [CISA Tags Windows, Cisco Vulnerabilities as Actively Exploited](https://soylentnews.org/article.pl?sid=25/03/09/0337252&from=rss)
* [2025-03-10, 08:50:56](https://lobste.rs/s/mxy0si/chromecast_2_s_device_authentication) - [The Chromecast 2's device authentication certificate has expired](https://old.reddit.com/r/Chromecast/comments/1j7lhrs/the_chromecast_2s_device_authentication/)
* [2025-03-10, 04:40:00](https://soylentnews.org/article.pl?sid=25/03/09/0321220&from=rss) - ['Jetsons' Robot Finally Arrives: Sweater-Wearing Neo Gamma Android Helps With Household Chores](https://soylentnews.org/article.pl?sid=25/03/09/0321220&from=rss)
* [2025-03-10, 00:01:00](https://soylentnews.org/article.pl?sid=25/03/09/0316250&from=rss) - [Billions of Years Ago, Mars Featured Beaches Fit for a Vacation, Astronomers Say](https://soylentnews.org/article.pl?sid=25/03/09/0316250&from=rss)
* [2025-03-09, 19:18:00](https://soylentnews.org/article.pl?sid=25/03/08/082224&from=rss) - [‘Slime’ Keeps the Brain Safe ― and Could Guard Against Ageing](https://soylentnews.org/article.pl?sid=25/03/08/082224&from=rss)
* [2025-03-09, 14:37:00](https://soylentnews.org/article.pl?sid=25/03/08/0753249&from=rss) - [Meet Rayhunter: A New Open Source Tool from EFF to Detect Cellular Spying](https://soylentnews.org/article.pl?sid=25/03/08/0753249&from=rss)
* [2025-03-09, 09:53:00](https://soylentnews.org/article.pl?sid=25/03/08/0744250&from=rss) - [Asteroid Mining Startup Loses its Spacecraft Somewhere Beyond the Moon](https://soylentnews.org/article.pl?sid=25/03/08/0744250&from=rss)
* [2025-03-09, 08:08:02](https://news.ycombinator.com/item?id=43307159) - [Sidekick: Local-first native macOS LLM app](https://github.com/johnbean393/Sidekick)
* [2025-03-09, 06:31:11](https://news.ycombinator.com/item?id=43306776) - [Formal Verification of Zero-Downtime Database Migration in PlusCal](https://biradarganesh25.github.io/pluscal/db_migration.html)
* [2025-03-09, 05:07:00](https://soylentnews.org/article.pl?sid=25/03/08/0739224&from=rss) - [Amid a Growing Measles Outbreak, Doctors Worry RFK is Sending the Wrong Message](https://soylentnews.org/article.pl?sid=25/03/08/0739224&from=rss)
* [2025-03-09, 03:35:58](https://news.ycombinator.com/item?id=43305943) - [Traveling Through India on the Himsagar Express](https://www.newyorker.com/culture/the-weekend-essay/travelling-through-india-on-the-himsagar-express)
* [2025-03-09, 03:23:26](https://news.ycombinator.com/item?id=43305881) - [Neonatal fungi: lifelong metabolic health via macrophage β cell development](https://www.science.org/doi/10.1126/science.adn0953)
* [2025-03-09, 00:23:00](https://soylentnews.org/politics/article.pl?sid=25/03/08/0721219&from=rss) - [Some DOGE Staffers Are Drawing Six-Figure Government Salaries](https://soylentnews.org/politics/article.pl?sid=25/03/08/0721219&from=rss)
* [2025-03-08, 22:35:44](https://news.ycombinator.com/item?id=43304205) - [Kissing moons may explain why Earth's moon is so large](https://www.cbc.ca/radio/quirks/kissing-moons-may-explain-why-earth-s-moon-is-so-large-1.7428016)
* [2025-03-08, 22:20:05](https://news.ycombinator.com/item?id=43304088) - [An election forecast that’s 50-50 is not “giving up”](https://statmodeling.stat.columbia.edu/2025/03/05/no-an-election-forecast-thats-50-50-is-not-giving-up-no-the-election-forecasters-in-2024-did-not-say-whatever-happened-it-was-supposed-to-be-razor-thin/)
* [2025-03-08, 19:41:00](https://soylentnews.org/article.pl?sid=25/03/08/0713256&from=rss) - [Alphabet's Taara Chip Uses Light Beams To Provide High-Speed Internet](https://soylentnews.org/article.pl?sid=25/03/08/0713256&from=rss)
* [2025-03-08, 15:37:00](https://soylentnews.org/article.pl?sid=25/03/08/1538213&from=rss) - [Temporary Problem with Stripe](https://soylentnews.org/article.pl?sid=25/03/08/1538213&from=rss)
* [2025-03-08, 14:52:00](https://soylentnews.org/article.pl?sid=25/03/08/072239&from=rss) - [Hugging Face's Chief Science Officer Worries AI is Becoming 'Yes-Men on Servers'](https://soylentnews.org/article.pl?sid=25/03/08/072239&from=rss)
* [2025-03-08, 14:14:22](https://news.ycombinator.com/item?id=43300414) - [The Einstein AI Model](https://thomwolf.io/blog/scientific-ai.html)
* [2025-03-08, 10:07:00](https://soylentnews.org/article.pl?sid=25/03/07/0436239&from=rss) - [Eerily Realistic AI Voice Demo Sparks Amazement and Discomfort Online](https://soylentnews.org/article.pl?sid=25/03/07/0436239&from=rss)
* [2025-03-08, 05:22:00](https://soylentnews.org/article.pl?sid=25/03/07/0427238&from=rss) - [Apple Refuses to Break Encryption, Seeks Reversal of UK Demand for Backdoor](https://soylentnews.org/article.pl?sid=25/03/07/0427238&from=rss)
* [2025-03-08, 00:37:00](https://soylentnews.org/article.pl?sid=25/03/07/0422219&from=rss) - [The International Space Station Lacks Microbial Diversity. Is It Too Clean?](https://soylentnews.org/article.pl?sid=25/03/07/0422219&from=rss)
* [2025-03-07, 19:55:00](https://soylentnews.org/article.pl?sid=25/03/07/047205&from=rss) - [Massive Supereruptions Might Not Trigger the Apocalypse, Just Decades of Chaos](https://soylentnews.org/article.pl?sid=25/03/07/047205&from=rss)
* [2025-03-07, 16:03:18](https://news.ycombinator.com/item?id=43291258) - [When Crocodiles Attack: The Ramree Island Massacre](https://www.atlasobscura.com/articles/the-ramree-island-massacre)
* [2025-03-07, 15:10:00](https://soylentnews.org/article.pl?sid=25/03/07/041244&from=rss) - [Your Kitchen Utensils May be Poisoning You](https://soylentnews.org/article.pl?sid=25/03/07/041244&from=rss)
* [2025-03-07, 14:50:09](https://news.ycombinator.com/item?id=43290620) - [Bel in Clojure (2022)](https://stopa.io/post/290)
* [2025-03-07, 10:26:00](https://soylentnews.org/article.pl?sid=25/03/05/1610259&from=rss) - [How We Added Interlaced Video to Raspberry Pi 5](https://soylentnews.org/article.pl?sid=25/03/05/1610259&from=rss)
* [2025-03-07, 05:42:00](https://soylentnews.org/article.pl?sid=25/03/05/162236&from=rss) - [BP Shuns Renewables in Return to Oil and Gas](https://soylentnews.org/article.pl?sid=25/03/05/162236&from=rss)
* [2025-03-07, 04:07:18](https://news.ycombinator.com/item?id=43287327) - [3dfx: So powerful, it's kind of ridiculous (2023)](https://www.abortretry.fail/p/so-powerful-its-kind-of-ridiculous)
* [2025-03-07, 00:53:00](https://soylentnews.org/politics/article.pl?sid=25/03/05/1555220&from=rss) - [15 Republican AGs Urge The Supreme Court To Make Affordable Broadband For Poor People Illegal](https://soylentnews.org/politics/article.pl?sid=25/03/05/1555220&from=rss)
