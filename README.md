# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and Machine Learning

* [The IRS Is Buying an AI Supercomputer From Nvidia](https://tech.slashdot.org/story/25/02/15/0540249/the-irs-is-buying-an-ai-supercomputer-from-nvidia?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A major initiative where the IRS plans to leverage Nvidia's cutting-edge AI supercomputing capabilities.

* [How to Backdoor Large Language Models](https://blog.sshh.io/p/how-to-backdoor-large-language-models) - An exploration of vulnerabilities and methods for surreptitious manipulation of large language models.

* [Can We Trust AI Benchmarks? A Review of Current Issues in AI Evaluation](https://arxiv.org/abs/2502.06559) - A study delves into the reliability of AI benchmarks and the challenges inherent in evaluation methodologies.

* [Microsoft Study Finds Relying on AI Kills Your Critical Thinking Skills](https://gizmodo.com/microsoft-study-finds-relying-on-ai-kills-your-critical-thinking-skills-2000561788) - Research highlights how overdependence on AI might stifle critical thinking abilities.

* [AI is Stifling Tech Adoption](https://vale.rocks/posts/ai-is-stifling-tech-adoption) - A critical perspective on how AI may inadvertently hamper the adoption of innovative technologies.

* [AI Used To Design a Multi-Step Enzyme That Can Digest Some Plastics](https://science.slashdot.org/story/25/02/15/0549201/ai-used-to-design-a-multi-step-enzyme-that-can-digest-some-plastics?utm_source=rss1.0mainlinkanon&utm_medium=feed) - AI applications expand into biochemistry, such as designing enzymes to mitigate plastic waste.

## Tech Vulnerabilities and Cybersecurity

* [Leaking the email of any YouTube user for $10,000](https://brutecat.com/articles/leaking-youtube-emails) - Highlighting a critical flaw discovered in YouTube's system.

* [Anyone Can Push Updates to the DOGE.gov Website](https://soylentnews.org/article.pl?sid=25/02/14/1925233&from=rss) - A security mishap allows arbitrary updates to an official government-affiliated site.

* [Hackers Leak Cop Manuals for Departments Nationwide After Breaching Major Provider](https://soylentnews.org/article.pl?sid=25/02/13/0155211&from=rss) - A significant data breach exposes law enforcement documentation across the U.S.

## Unique Engineering and Science Innovations

* [8088 MPH Final: Old vs. New CGA (and Other Gory Details) (2015)](https://int10h.org/blog/2015/08/8088-mph-final-old-vs-new-cga-gory-details/) - A fascinating retrospective on old computer graphics technology and its boundaries.

* [The 20 year old PSP can now connect to WPA2 WiFi Networks](https://wololo.net/2025/02/14/the-20-year-old-psp-can-now-connect-to-wpa2-wifi-networks/) - Breathing new life into a vintage gaming device with modern connectivity updates.

* [Earth's Inner Core is Less Solid Than Previously Thought: Study Reveals Structural Transformation](https://soylentnews.org/article.pl?sid=25/02/13/1825211&from=rss) - Groundbreaking research challenges assumptions about Earth's core composition.

## Public Health and Environment

* [Eating From Plastic Takeout Containers Can Increase Heart Failure Risk, Study Finds](https://science.slashdot.org/story/25/02/15/0555235/eating-from-plastic-takeout-containers-can-increase-heart-failure-risk-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Research reveals alarming health risks associated with consuming food from plastic packaging.

* [Brake Pad Dust Can Be More Toxic Than Exhaust Emissions, Study Says](https://tech.slashdot.org/story/25/02/15/0016236/brake-pad-dust-can-be-more-toxic-than-exhaust-emissions-study-says?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A study suggests particulate matter from brake dust may surpass traditional exhaust emissions in toxicity.

## Business and Policy Shifts

* [Bookshop.org launches Kindle alternative, sends e-book sales to local bookstores](https://www.usatoday.com/story/entertainment/books/2025/01/28/bookshop-org-ereader-ebook-app/77928209007/) - A significant push to support local businesses in the e-book market.

* [EU Will Put Over $200 Billion Toward AI Development](https://soylentnews.org/article.pl?sid=25/02/14/1249234&from=rss) - The European Union makes a significant investment to lead AI innovation initiatives.

* [PIN AI Launches Mobile App Letting You Make Your Own Personalized, Private AI Model](https://mobile.slashdot.org/story/25/02/14/2227222/pin-ai-launches-mobile-app-letting-you-make-your-own-personalized-private-ai-model?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Empowering users with tools to create custom AI models while protecting privacy.

## Quirky and Cultural Highlights

* [The hardest working font in Manhattan](https://aresluna.org/the-hardest-working-font-in-manhattan/) - A deep dive into the history and ubiquity of a famous typeface in New York City.

* [Jane Street's Figgie card game](https://www.figgie.com/) - Insight into a unique card game designed by financial quant firm Jane Street.

* [A study on how turtles navigate using the Earth’s magnetic field](https://www.unc.edu/posts/2025/02/12/dancing-turtles-unlock-scientific-discovery/) - An unusual look at the interplay between nature and scientific curiosity.

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

* [2025-02-15, 13:00:00](https://tech.slashdot.org/story/25/02/15/0540249/the-irs-is-buying-an-ai-supercomputer-from-nvidia?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [The IRS Is Buying an AI Supercomputer From Nvidia](https://tech.slashdot.org/story/25/02/15/0540249/the-irs-is-buying-an-ai-supercomputer-from-nvidia?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-15, 12:39:37](https://lobste.rs/s/gfjbhp/how_backdoor_large_language_models) - [How to Backdoor Large Language Models](https://blog.sshh.io/p/how-to-backdoor-large-language-models)
* [2025-02-15, 12:19:48](https://news.ycombinator.com/item?id=43057968) - [Can We Trust AI Benchmarks? A Review of Current Issues in AI Evaluation](https://arxiv.org/abs/2502.06559)
* [2025-02-15, 12:06:01](https://news.ycombinator.com/item?id=43057907) - [Microsoft Study Finds Relying on AI Kills Your Critical Thinking Skills](https://gizmodo.com/microsoft-study-finds-relying-on-ai-kills-your-critical-thinking-skills-2000561788)
* [2025-02-15, 11:38:00](https://soylentnews.org/article.pl?sid=25/02/14/1925233&from=rss) - [Anyone Can Push Updates to the DOGE.gov Website](https://soylentnews.org/article.pl?sid=25/02/14/1925233&from=rss)
* [2025-02-15, 10:59:54](https://lobste.rs/s/lw5dea/8088_mph_final_old_vs_new_cga_other_gory) - [8088 MPH Final: Old vs. New CGA (and Other Gory Details) (2015)](https://int10h.org/blog/2015/08/8088-mph-final-old-vs-new-cga-gory-details/)
* [2025-02-15, 10:49:11](https://lobste.rs/s/gwjvkg/sqlite_on_server_is_misunderstood_better) - [SQLite-on-the-Server Is Misunderstood: Better At Hyper-Scale Than Micro-Scale](https://rivet.gg/blog/2025-02-16-sqlite-on-the-server-is-misunderstood)
* [2025-02-15, 10:42:14](https://lobste.rs/s/wmtpwf/agit_flow_git_repo) - [Agit-Flow and git-repo](https://git-repo.info/en/2020/03/agit-flow-and-git-repo/)
* [2025-02-15, 10:07:23](https://news.ycombinator.com/item?id=43057375) - [Show HN: Kreuzberg – Modern async Python library for document text extraction](https://github.com/Goldziher/kreuzberg)
* [2025-02-15, 10:00:00](https://science.slashdot.org/story/25/02/15/0555235/eating-from-plastic-takeout-containers-can-increase-heart-failure-risk-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Eating From Plastic Takeout Containers Can Increase Heart Failure Risk, Study Finds](https://science.slashdot.org/story/25/02/15/0555235/eating-from-plastic-takeout-containers-can-increase-heart-failure-risk-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-15, 09:59:20](https://news.ycombinator.com/item?id=43057344) - [Jane Street's Figgie card game](https://www.figgie.com/)
* [2025-02-15, 09:36:53](https://lobste.rs/s/tx5ro4/ai_is_stifling_tech_adoption) - [AI is Stifling Tech Adoption](https://vale.rocks/posts/ai-is-stifling-tech-adoption)
* [2025-02-15, 09:34:12](https://lobste.rs/s/2ff7tv/building_fault_tolerant_reverse_proxy) - [Building a fault-tolerant reverse proxy with FreeBSD](https://www.subnetspider.com/2025/01/22/building-a-fault-tolerant-reverse-proxy-with-freebsd.html)
* [2025-02-15, 09:07:23](https://news.ycombinator.com/item?id=43057108) - [Airbnb CEO says it's still too early for AI trip planning](https://techcrunch.com/2025/02/14/airbnb-ceo-says-its-still-too-early-for-ai-trip-planning/)
* [2025-02-15, 07:05:51](https://news.ycombinator.com/item?id=43056526) - [Bookshop.org launches Kindle alternative, sends e-book sales to local bookstores](https://www.usatoday.com/story/entertainment/books/2025/01/28/bookshop-org-ereader-ebook-app/77928209007/)
* [2025-02-15, 07:00:00](https://science.slashdot.org/story/25/02/15/0549201/ai-used-to-design-a-multi-step-enzyme-that-can-digest-some-plastics?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [AI Used To Design a Multi-Step Enzyme That Can Digest Some Plastics](https://science.slashdot.org/story/25/02/15/0549201/ai-used-to-design-a-multi-step-enzyme-that-can-digest-some-plastics?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-15, 06:52:00](https://soylentnews.org/article.pl?sid=25/02/14/1254214&from=rss) - [RTX5090 Cable Overheats to 150 C Where Uneven Current Distribution Likely the Culprit](https://soylentnews.org/article.pl?sid=25/02/14/1254214&from=rss)
* [2025-02-15, 05:48:50](https://lobste.rs/s/qj5sba/leaking_email_any_youtube_user_for_10_000) - [Leaking the email of any YouTube user for $10,000](https://brutecat.com/articles/leaking-youtube-emails)
* [2025-02-15, 03:31:56](https://news.ycombinator.com/item?id=43055671) - [The 20 year old PSP can now connect to WPA2 WiFi Networks](https://wololo.net/2025/02/14/the-20-year-old-psp-can-now-connect-to-wpa2-wifi-networks/)
* [2025-02-15, 03:30:00](https://tech.slashdot.org/story/25/02/15/0016236/brake-pad-dust-can-be-more-toxic-than-exhaust-emissions-study-says?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Brake Pad Dust Can Be More Toxic Than Exhaust Emissions, Study Says](https://tech.slashdot.org/story/25/02/15/0016236/brake-pad-dust-can-be-more-toxic-than-exhaust-emissions-study-says?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-15, 02:08:00](https://soylentnews.org/article.pl?sid=25/02/14/1249234&from=rss) - [EU Will Put Over $200 Billion Toward AI Development](https://soylentnews.org/article.pl?sid=25/02/14/1249234&from=rss)
* [2025-02-15, 02:02:00](https://slashdot.org/story/25/02/15/006253/please-stop-inviting-ai-notetakers-to-meetings?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['Please Stop Inviting AI Notetakers To Meetings'](https://slashdot.org/story/25/02/15/006253/please-stop-inviting-ai-notetakers-to-meetings?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-15, 01:32:05](https://news.ycombinator.com/item?id=43054963) - [Q2DOS – Quake 2 backported to MS-DOS](https://dk.toastednet.org/Q2DOS/)
* [2025-02-15, 01:25:00](https://hardware.slashdot.org/story/25/02/14/2336232/nyc-is-giving-free-e-bikes-to-delivery-workers-using-unsafe-models?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [NYC Is Giving Free E-Bikes To Delivery Workers Using Unsafe Models](https://hardware.slashdot.org/story/25/02/14/2336232/nyc-is-giving-free-e-bikes-to-delivery-workers-using-unsafe-models?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-15, 00:45:00](https://slashdot.org/story/25/02/14/2320203/microsoft-study-finds-relying-on-ai-kills-your-critical-thinking-skills?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Study Finds Relying on AI Kills Your Critical Thinking Skills](https://slashdot.org/story/25/02/14/2320203/microsoft-study-finds-relying-on-ai-kills-your-critical-thinking-skills?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-15, 00:40:31](https://news.ycombinator.com/item?id=43054673) - [Did Semgrep Just Get a Lot More Interesting?](https://fly.io/blog/semgrep-but-for-real-now/)
* [2025-02-15, 00:08:14](https://news.ycombinator.com/item?id=43054473) - [Msxbook OneChipMSX MSX2 Computer](https://www.tindie.com/products/cycle/msxbook-onechipmsx-msx2-computer/)
* [2025-02-15, 00:02:05](https://lobste.rs/s/abkeck/hardest_working_font_manhattan) - [The hardest working font in Manhattan](https://aresluna.org/the-hardest-working-font-in-manhattan/)
* [2025-02-15, 00:02:00](https://mobile.slashdot.org/story/25/02/14/2227222/pin-ai-launches-mobile-app-letting-you-make-your-own-personalized-private-ai-model?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [PIN AI Launches Mobile App Letting You Make Your Own Personalized, Private AI Model](https://mobile.slashdot.org/story/25/02/14/2227222/pin-ai-launches-mobile-app-letting-you-make-your-own-personalized-private-ai-model?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-14, 23:20:00](https://apple.slashdot.org/story/25/02/14/2213202/netflix-accidentally-made-its-content-show-up-in-the-apple-tv-app?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Netflix Accidentally Made Its Content Show Up In the Apple TV App](https://apple.slashdot.org/story/25/02/14/2213202/netflix-accidentally-made-its-content-show-up-in-the-apple-tv-app?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-14, 23:10:36](https://news.ycombinator.com/item?id=43054069) - [A decade later, a decade lost (2024)](https://meyerweb.com/eric/thoughts/2024/06/07/a-decade-later-a-decade-lost/)
* [2025-02-14, 22:45:02](https://news.ycombinator.com/item?id=43053908) - [If you ever stacked cups in gym class, blame my dad](https://defector.com/if-you-ever-stacked-cups-in-gym-class-blame-my-dad)
* [2025-02-14, 22:40:00](https://it.slashdot.org/story/25/02/14/223226/final-fantasy-ios-game-shuts-down-over-unfixable-bug?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Final Fantasy iOS Game Shuts Down Over Unfixable Bug](https://it.slashdot.org/story/25/02/14/223226/final-fantasy-ios-game-shuts-down-over-unfixable-bug?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-14, 22:36:31](https://news.ycombinator.com/item?id=43053844) - [We were wrong about GPUs](https://fly.io/blog/wrong-about-gpu/)
* [2025-02-14, 22:05:33](https://news.ycombinator.com/item?id=43053625) - [Complex dynamics require complex solutions](https://mathstodon.xyz/@tao/113873092369347147)
* [2025-02-14, 22:00:00](https://slashdot.org/story/25/02/14/2156202/openai-eases-content-restrictions-for-chatgpt-with-new-grown-up-mode?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [OpenAI Eases Content Restrictions For ChatGPT With New 'Grown-Up Mode'](https://slashdot.org/story/25/02/14/2156202/openai-eases-content-restrictions-for-chatgpt-with-new-grown-up-mode?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-14, 21:45:49](https://news.ycombinator.com/item?id=43053419) - [The hardest working font in Manhattan](https://aresluna.org/the-hardest-working-font-in-manhattan/)
* [2025-02-14, 21:39:29](https://news.ycombinator.com/item?id=43053350) - [The Iconic 3DBenchy Enters the Public Domain](https://www.nti-group.com/home/information/news/3dbenchy/)
* [2025-02-14, 21:25:00](https://soylentnews.org/article.pl?sid=25/02/13/1833234&from=rss) - [8 Million Requests Later, We Made The SolarWinds Supply Chain Attack Look Amateur](https://soylentnews.org/article.pl?sid=25/02/13/1833234&from=rss)
* [2025-02-14, 21:22:00](https://tech.slashdot.org/story/25/02/14/1852233/meta-to-build-worlds-longest-undersea-cable?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Meta To Build World's Longest Undersea Cable](https://tech.slashdot.org/story/25/02/14/1852233/meta-to-build-worlds-longest-undersea-cable?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-14, 21:21:03](https://lobste.rs/s/rsuopk/tex_typst_layout_models) - [TeX and Typst: Layout Models](https://laurmaedje.github.io/posts/layout-models/)
* [2025-02-14, 20:42:00](https://hardware.slashdot.org/story/25/02/14/1742226/the-whole-world-is-going-to-use-a-lot-more-electricity-iea-says?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [The Whole World Is Going To Use a Lot More Electricity, IEA Says](https://hardware.slashdot.org/story/25/02/14/1742226/the-whole-world-is-going-to-use-a-lot-more-electricity-iea-says?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-14, 20:09:48](https://lobste.rs/s/hl00vs/type_safe_variadic_printf_without_macros) - [Type safe variadic printf, without macros](https://www.stranger.systems/posts/by-slug/type-safe-variadic-printf.html)
* [2025-02-14, 20:01:00](https://hardware.slashdot.org/story/25/02/14/1817233/western-digital-aims-for-100tb-hard-drives-by-2030?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Western Digital Aims For 100TB Hard Drives by 2030](https://hardware.slashdot.org/story/25/02/14/1817233/western-digital-aims-for-100tb-hard-drives-by-2030?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-14, 19:22:00](https://slashdot.org/story/25/02/14/187221/hedge-fund-startup-that-replaced-analysts-with-ai-beats-the-market?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Hedge Fund Startup That Replaced Analysts With AI Beats the Market](https://slashdot.org/story/25/02/14/187221/hedge-fund-startup-that-replaced-analysts-with-ai-beats-the-market?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-14, 18:29:59](https://news.ycombinator.com/item?id=43051465) - [A study on how turtles navigate using the Earth’s magnetic field](https://www.unc.edu/posts/2025/02/12/dancing-turtles-unlock-scientific-discovery/)
* [2025-02-14, 18:01:13](https://lobste.rs/s/1f3pfu/20_year_old_psp_can_now_connect_wpa2_wifi) - [The 20 year old PSP can now connect to WPA2 Wifi Networks](https://wololo.net/2025/02/14/the-20-year-old-psp-can-now-connect-to-wpa2-wifi-networks/)
* [2025-02-14, 17:20:51](https://lobste.rs/s/ixnc7d/first_analysis_apple_s_usb_restricted) - [First analysis of Apple's USB Restricted Mode bypass (CVE-2025-24200)](https://blog.quarkslab.com/first-analysis-of-apples-usb-restricted-mode-bypass-cve-2025-24200.html)
* [2025-02-14, 16:17:02](https://lobste.rs/s/iypstr/simple_declarative_schema_migration_for) - [Simple declarative schema migration for SQLite](https://david.rothlis.net/declarative-schema-migration-for-sqlite/)
* [2025-02-14, 16:17:00](https://soylentnews.org/politics/article.pl?sid=25/02/13/1828257&from=rss) - [Judge Agrees Trump's Removal Of Health Websites Threatens The Public](https://soylentnews.org/politics/article.pl?sid=25/02/13/1828257&from=rss)
* [2025-02-14, 15:48:40](https://lobste.rs/s/rrkfuj/hosting_multiple_websites_under_one) - [Hosting Multiple Websites Under One NearlyFreeSpeech Site](https://btxx.org/posts/nfs-multiple-websites/)
* [2025-02-14, 15:41:50](https://lobste.rs/s/t1enph/siren_call_sqlite_on_server) - [Siren Call of SQLite on the Server](https://pid1.dev/posts/siren-call-of-sqlite-on-the-server/)
* [2025-02-14, 15:24:05](https://news.ycombinator.com/item?id=43049251) - [The largest sofa you can move around a corner](https://www.quantamagazine.org/the-largest-sofa-you-can-move-around-a-corner-20250214/)
* [2025-02-14, 14:36:10](https://lobste.rs/s/ooioeg/xor) - [XOR](https://www.chiark.greenend.org.uk/~sgtatham/quasiblog/xor/)
* [2025-02-14, 13:30:54](https://lobste.rs/s/krgcvz/how_do_modern_compilers_choose_which) - [How do modern compilers choose which variables to put in registers?](https://langdev.stackexchange.com/questions/4325/how-do-modern-compilers-choose-which-variables-to-put-in-registers)
* [2025-02-14, 13:23:23](https://news.ycombinator.com/item?id=43048027) - [Show HN: Transform your codebase into a single Markdown doc for feeding into AI](https://tesserato.web.app/posts/2025-02-12-CodeWeaver-launch/index.html)
* [2025-02-14, 12:41:46](https://lobste.rs/s/qk4qpt/hickory_dns_is_moving_toward_production) - [Hickory DNS is moving toward production readiness](https://www.memorysafety.org/blog/hickory-update-2025/)
* [2025-02-14, 11:53:38](https://lobste.rs/s/ei9qpl/switching_on_strings_zig) - [Switching on Strings in Zig](https://www.openmymind.net/Switching-On-Strings-In-Zig/)
* [2025-02-14, 11:43:09](https://lobste.rs/s/t2zu6j/tiny_book_great_joys) - [The Tiny Book  of Great Joys](https://muffinman.io/blog/the-tiny-book-of-great-joys/)
* [2025-02-14, 11:34:00](https://soylentnews.org/article.pl?sid=25/02/13/1825211&from=rss) - [Earth's Inner Core is Less Solid Than Previously Thought: Study Reveals Structural Transformation](https://soylentnews.org/article.pl?sid=25/02/13/1825211&from=rss)
* [2025-02-14, 11:18:26](https://lobste.rs/s/zbb947/zed_now_predicts_next_edit_with_new_open) - [Zed now predicts next edit with new open model](https://zed.dev/blog/edit-prediction)
* [2025-02-14, 10:56:07](https://lobste.rs/s/qr5vww/unix_operating_system_is_ide_2021) - [The UNIX Operating System is an IDE (2021)](https://0x19.org/posts/2021-12-04.php)
* [2025-02-14, 06:50:00](https://soylentnews.org/article.pl?sid=25/02/13/0155211&from=rss) - [Hackers Leak Cop Manuals for Departments Nationwide After Breaching Major Provider](https://soylentnews.org/article.pl?sid=25/02/13/0155211&from=rss)
* [2025-02-14, 02:51:31](https://lobste.rs/s/rvhull/atkinson_hyperlegible_next_atkinson) - [Atkinson Hyperlegible Next and Atkinson Hyperlegible Mono](https://www.brailleinstitute.org/freefont/)
* [2025-02-14, 02:04:00](https://soylentnews.org/article.pl?sid=25/02/13/0145233&from=rss) - [The Science of Why There's Less Passing in the Daytona 500](https://soylentnews.org/article.pl?sid=25/02/13/0145233&from=rss)
* [2025-02-13, 21:15:00](https://soylentnews.org/article.pl?sid=25/02/13/0126236&from=rss) - [Money May Have Originated Through Long Distance Trade, New Theory Suggests](https://soylentnews.org/article.pl?sid=25/02/13/0126236&from=rss)
* [2025-02-13, 20:23:35](https://lobste.rs/s/oafv9d/on_jujutsu_magit_experience_report) - [On Jujutsu and Magit: experience report](https://blog.alarsyo.net/posts/2025/02/on-jujutsu-and-magit/)
* [2025-02-13, 19:30:54](https://lobste.rs/s/f9zeee/why_i_built_hyper_personalized_search) - [why I built a hyper-personalized search engine that isn't very good](https://search.technomancy.us/why)
* [2025-02-13, 16:29:00](https://soylentnews.org/article.pl?sid=25/02/12/1247251&from=rss) - [Developer Creates Endless Wikipedia Feed to Fight Algorithm Addiction](https://soylentnews.org/article.pl?sid=25/02/12/1247251&from=rss)
* [2025-02-13, 11:43:00](https://soylentnews.org/article.pl?sid=25/02/12/1237237&from=rss) - [Is the EF5 Tornado Rating Effectively Obsolete?](https://soylentnews.org/article.pl?sid=25/02/12/1237237&from=rss)
* [2025-02-13, 06:57:00](https://soylentnews.org/article.pl?sid=25/02/12/1234248&from=rss) - [A Pinch of Salt Boosts Aluminum Batteries](https://soylentnews.org/article.pl?sid=25/02/12/1234248&from=rss)
* [2025-02-13, 04:34:09](https://news.ycombinator.com/item?id=43032697) - [TeX and Typst: Layout Models (2024)](https://laurmaedje.github.io/posts/layout-models/)
* [2025-02-13, 02:12:00](https://soylentnews.org/article.pl?sid=25/02/12/095248&from=rss) - [AI Increases Unemployment Rates in US IT Sector](https://soylentnews.org/article.pl?sid=25/02/12/095248&from=rss)
* [2025-02-13, 00:05:48](https://news.ycombinator.com/item?id=43031228) - [Questioning the Criteria for Evaluating Non-Cryptographic Hash Functions](https://cacm.acm.org/practice/questioning-the-criteria-for-evaluating-non-cryptographic-hash-functions/)
* [2025-02-12, 21:28:00](https://soylentnews.org/article.pl?sid=25/02/11/1313219&from=rss) - [Want the News Summarized Accurately?  Don't Ask an \"AI\".](https://soylentnews.org/article.pl?sid=25/02/11/1313219&from=rss)
* [2025-02-12, 16:43:00](https://soylentnews.org/article.pl?sid=25/02/11/1216252&from=rss) - [MP Materials Starts Producing Neodymium Magnets in the US](https://soylentnews.org/article.pl?sid=25/02/11/1216252&from=rss)
* [2025-02-12, 11:59:00](https://soylentnews.org/article.pl?sid=25/02/11/1210226&from=rss) - [Undergraduate Upends a 40-Year-Old Data Science Conjecture](https://soylentnews.org/article.pl?sid=25/02/11/1210226&from=rss)
* [2025-02-12, 10:43:51](https://news.ycombinator.com/item?id=43023996) - [Rust Memory Management Explained](https://www.infoworld.com/article/3815535/rust-memory-management-explained.html)
* [2025-02-12, 10:43:02](https://news.ycombinator.com/item?id=43023991) - [Nping – ping, but with a graph or table view](https://github.com/hanshuaikang/Nping)
* [2025-02-12, 09:54:14](https://news.ycombinator.com/item?id=43023698) - [Show HN: Letting LLMs Run a Debugger](https://github.com/mohsen1/llm-debugger-vscode-extension)
* [2025-02-12, 08:22:27](https://news.ycombinator.com/item?id=43023101) - [Intensional Joy (a concatenative account of internal structure)](https://pithlessly.github.io/intensionaljoy.html)
* [2025-02-12, 07:12:00](https://soylentnews.org/article.pl?sid=25/02/11/127212&from=rss) - [Handful of Users Claim New Nvidia GPUs Are Melting Power Cables Again](https://soylentnews.org/article.pl?sid=25/02/11/127212&from=rss)
* [2025-02-12, 02:15:17](https://news.ycombinator.com/item?id=43021044) - [TL;DW: Too Long; Didn't Watch Distill YouTube Videos to the Relevant Information](https://tldw.tube/)
* [2025-02-12, 01:34:45](https://news.ycombinator.com/item?id=43020756) - [Apache Iceberg now supports geospatial data types natively](https://wherobots.com/apache-iceberg-and-parquet-now-support-geo/)
* [2025-02-12, 01:29:00](https://soylentnews.org/article.pl?sid=25/02/11/122248&from=rss) - [Boeing Has Informed its Employees of Uncertainty in Future SLS Contracts](https://soylentnews.org/article.pl?sid=25/02/11/122248&from=rss)
* [2025-02-11, 19:45:00](https://soylentnews.org/article.pl?sid=25/02/10/133233&from=rss) - [Asteroid's Odds of Hitting Earth Went Up. But Not Why You Think](https://soylentnews.org/article.pl?sid=25/02/10/133233&from=rss)
* [2025-02-11, 18:04:35](https://news.ycombinator.com/item?id=43015975) - [Elements of Programming (2009)](https://www.elementsofprogramming.com/)
* [2025-02-11, 16:53:38](https://news.ycombinator.com/item?id=43015071) - [Goku Flow Based Video Generative Foundation Models](https://github.com/Saiyan-World/goku)
* [2025-02-11, 16:06:45](https://news.ycombinator.com/item?id=43014481) - [Recurring checklists using Org Mode in Emacs](https://www.naiquev.in/recurring-checklists-using-org-mode-in-emacs.html)
* [2025-02-11, 15:45:00](https://soylentnews.org/meta/article.pl?sid=25/02/04/106248&from=rss) - [Soylent Update - February 2025](https://soylentnews.org/meta/article.pl?sid=25/02/04/106248&from=rss)
* [2025-02-11, 15:00:00](https://soylentnews.org/article.pl?sid=25/02/09/1917214&from=rss) - [Researchers Used AI To Build Groundbreaking Nanomaterials Lighter And Stronger Than Titanium](https://soylentnews.org/article.pl?sid=25/02/09/1917214&from=rss)
* [2025-02-11, 10:23:00](https://soylentnews.org/article.pl?sid=25/02/09/194224&from=rss) - [Private Spacecraft Gets Dramatic View Of Earth Eclipsing Moon](https://soylentnews.org/article.pl?sid=25/02/09/194224&from=rss)
* [2025-02-11, 05:45:00](https://soylentnews.org/article.pl?sid=25/02/09/190215&from=rss) - [Intel Has Already Received $2.2B in Federal Grants for Chip Production](https://soylentnews.org/article.pl?sid=25/02/09/190215&from=rss)
* [2025-02-11, 01:00:00](https://soylentnews.org/article.pl?sid=25/02/09/1853248&from=rss) - [Rare Otter 'Disappeared' In Kyrgyzstan, Experts Warn](https://soylentnews.org/article.pl?sid=25/02/09/1853248&from=rss)
