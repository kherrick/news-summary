# [News Summary](https://kherrick.github.io/news-summary/)

## Urban Development and Cultural Shifts

* [Saudi Arabia's Dystopian Futuristic City Project Is Crashing and Burning](https://news.slashdot.org/story/25/11/10/238215/saudi-arabias-dystopian-futuristic-city-project-is-crashing-and-burning?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Technology and Cybersecurity

* [A Jailed Hacking Kingpin Reveals All About Cybercrime Gang](https://it.slashdot.org/story/25/11/10/2320251/a-jailed-hacking-kingpin-reveals-all-about-cybercrime-gang?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [The Linux Kernel Looks To 'Bite the Bullet' In Enabling Microsoft C Extensions](https://developers.slashdot.org/story/25/11/10/2250251/the-linux-kernel-looks-to-bite-the-bullet-in-enabling-microsoft-c-extensions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Wikipedia Urges AI Companies To Use Its Paid API, and Stop Scraping](https://news.slashdot.org/story/25/11/10/204221/wikipedia-urges-ai-companies-to-use-its-paid-api-and-stop-scraping?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Linux in a Pixel Shader – A RISC-V Emulator for VRChat](https://blog.pimaker.at/texts/rvc1/)

* [New Project Brings Strong Linux Compatibility To More Classic Windows Games](https://linux.slashdot.org/story/25/11/10/2216209/new-project-brings-strong-linux-compatibility-to-more-classic-windows-games?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Artificial Intelligence Developments

* [AI Sets Up Kodak Moment for Global Consultants](https://soylentnews.org/article.pl?sid=25/11/09/1338227&amp;from=rss)

* [Spatial intelligence is AI’s next frontier](https://drfeifei.substack.com/p/from-words-to-worlds-spatial-intelligence)

* [Omnilingual ASR: Advancing automatic speech recognition for 1600 languages](https://ai.meta.com/blog/omnilingual-asr-advancing-automatic-speech-recognition/?_fb_noscript=1)

## Environmental and Regulatory News

* [EU Eyes Banning Huawei, ZTE Corp From Mobile Networks of Member Countries](https://mobile.slashdot.org/story/25/11/10/2257257/eu-eyes-banning-huawei-zte-corp-from-mobile-networks-of-member-countries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [World's First Green Fuel Levy To Add Almost $32 To Air Fares](https://news.slashdot.org/story/25/11/10/1927209/worlds-first-green-fuel-levy-to-add-almost-32-to-air-fares?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Notable Articles and Opinions

* [Warren Buffett's final shareholder letter [pdf]](https://berkshirehathaway.com/news/nov1025.pdf)

* [TRMNL | E-ink dashboard to stay focused](https://usetrmnl.com/)

* [I hate screenshots of text](https://parkscomputing.com/page/i-hate-screenshots-of-text)

## Industry Updates

* [PDF Will Support JPEG XL Format As 'Preferred Solution'](https://news.slashdot.org/story/25/11/10/2230233/pdf-will-support-jpeg-xl-format-as-preferred-solution?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Meta Is Killing Off the External Facebook Like Button](https://tech.slashdot.org/story/25/11/10/2222221/meta-is-killing-off-the-external-facebook-like-button?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [The Algorithm Failed Music](https://entertainment.slashdot.org/story/25/11/10/1723223/the-algorithm-failed-music?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

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

* [2025-11-11, 03:30:00](https://news.slashdot.org/story/25/11/10/238215/saudi-arabias-dystopian-futuristic-city-project-is-crashing-and-burning?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Saudi Arabia&apos;s Dystopian Futuristic City Project Is Crashing and Burning](https://news.slashdot.org/story/25/11/10/238215/saudi-arabias-dystopian-futuristic-city-project-is-crashing-and-burning?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-11, 03:04:00](https://soylentnews.org/article.pl?sid=25/11/09/1338227&amp;from=rss) - [AI Sets Up Kodak Moment for Global Consultants](https://soylentnews.org/article.pl?sid=25/11/09/1338227&amp;from=rss)
* [2025-11-11, 02:20:00](https://it.slashdot.org/story/25/11/10/2320251/a-jailed-hacking-kingpin-reveals-all-about-cybercrime-gang?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Jailed Hacking Kingpin Reveals All About Cybercrime Gang](https://it.slashdot.org/story/25/11/10/2320251/a-jailed-hacking-kingpin-reveals-all-about-cybercrime-gang?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-11, 01:40:00](https://mobile.slashdot.org/story/25/11/10/2257257/eu-eyes-banning-huawei-zte-corp-from-mobile-networks-of-member-countries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EU Eyes Banning Huawei, ZTE Corp From Mobile Networks of Member Countries](https://mobile.slashdot.org/story/25/11/10/2257257/eu-eyes-banning-huawei-zte-corp-from-mobile-networks-of-member-countries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-11, 01:36:47](https://news.ycombinator.com/item?id=45883124) - [I hate screenshots of text](https://parkscomputing.com/page/i-hate-screenshots-of-text)
* [2025-11-11, 01:00:00](https://developers.slashdot.org/story/25/11/10/2250251/the-linux-kernel-looks-to-bite-the-bullet-in-enabling-microsoft-c-extensions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Linux Kernel Looks To &apos;Bite the Bullet&apos; In Enabling Microsoft C Extensions](https://developers.slashdot.org/story/25/11/10/2250251/the-linux-kernel-looks-to-bite-the-bullet-in-enabling-microsoft-c-extensions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-11, 00:51:44](https://news.ycombinator.com/item?id=45882837) - [Warren Buffett&apos;s final shareholder letter [pdf]](https://berkshirehathaway.com/news/nov1025.pdf)
* [2025-11-11, 00:31:58](https://news.ycombinator.com/item?id=45882736) - [Toucan Wireless Split Keyboard with Touchpad](https://shop.beekeeb.com/products/toucan-wireless-piantor-wireless-split-keyboard-with-touchpad)
* [2025-11-11, 00:26:42](https://lobste.rs/s/qj60m9/trmnl_e_ink_dashboard_stay_focused) - [TRMNL | E-ink dashboard to stay focused](https://usetrmnl.com/)
* [2025-11-11, 00:20:00](https://yro.slashdot.org/story/25/11/10/2237230/critics-call-proposed-changes-to-landmark-eu-privacy-law-death-by-a-thousand-cuts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Critics Call Proposed Changes To Landmark EU Privacy Law &apos;Death By a Thousand Cuts&apos;](https://yro.slashdot.org/story/25/11/10/2237230/critics-call-proposed-changes-to-landmark-eu-privacy-law-death-by-a-thousand-cuts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-10, 23:40:00](https://news.slashdot.org/story/25/11/10/2230233/pdf-will-support-jpeg-xl-format-as-preferred-solution?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [PDF Will Support JPEG XL Format As &apos;Preferred Solution&apos;](https://news.slashdot.org/story/25/11/10/2230233/pdf-will-support-jpeg-xl-format-as-preferred-solution?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-10, 23:27:53](https://news.ycombinator.com/item?id=45882305) - [What caused performance issues in my tiny RPG](https://jslegenddev.substack.com/p/what-caused-performance-issues-in)
* [2025-11-10, 23:00:00](https://tech.slashdot.org/story/25/11/10/2222221/meta-is-killing-off-the-external-facebook-like-button?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Is Killing Off the External Facebook Like Button](https://tech.slashdot.org/story/25/11/10/2222221/meta-is-killing-off-the-external-facebook-like-button?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-10, 22:39:34](https://lobste.rs/s/zqhnsy/refreshing_apache_xml_infrastructure) - [Refreshing Apache XML Infrastructure](https://blog.adamretter.org.uk/refreshing-apache-xml-infrastructure/)
* [2025-11-10, 22:22:00](https://soylentnews.org/article.pl?sid=25/11/08/2137231&amp;from=rss) - [EBikes Banned from NSW Trains Due To Fire Hazard](https://soylentnews.org/article.pl?sid=25/11/08/2137231&amp;from=rss)
* [2025-11-10, 22:20:00](https://linux.slashdot.org/story/25/11/10/2216209/new-project-brings-strong-linux-compatibility-to-more-classic-windows-games?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Project Brings Strong Linux Compatibility To More Classic Windows Games](https://linux.slashdot.org/story/25/11/10/2216209/new-project-brings-strong-linux-compatibility-to-more-classic-windows-games?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-10, 22:05:16](https://news.ycombinator.com/item?id=45881568) - [High-performance 2D graphics rendering on the CPU using sparse strips [pdf]](https://github.com/LaurenzV/master-thesis/blob/main/main.pdf)
* [2025-11-10, 21:50:03](https://news.ycombinator.com/item?id=45881404) - [Linux in a Pixel Shader – A RISC-V Emulator for VRChat](https://blog.pimaker.at/texts/rvc1/)
* [2025-11-10, 21:36:00](https://lobste.rs/s/nmcdan/reimagine_date_picker) - [Reimagine the Date Picker](https://dbushell.com/2025/11/10/pikaday/)
* [2025-11-10, 21:30:00](https://news.slashdot.org/story/25/11/10/204221/wikipedia-urges-ai-companies-to-use-its-paid-api-and-stop-scraping?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wikipedia Urges AI Companies To Use Its Paid API, and Stop Scraping](https://news.slashdot.org/story/25/11/10/204221/wikipedia-urges-ai-companies-to-use-its-paid-api-and-stop-scraping?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-10, 21:17:04](https://news.ycombinator.com/item?id=45881056) - [Zeroing in on Zero-Point Motion Inside a Crystal](https://physics.aps.org/articles/v18/178)
* [2025-11-10, 21:07:02](https://news.ycombinator.com/item?id=45880939) - [Spatial intelligence is AI’s next frontier](https://drfeifei.substack.com/p/from-words-to-worlds-spatial-intelligence)
* [2025-11-10, 20:51:00](https://developers.slashdot.org/story/25/11/10/194259/the-php-foundation-is-seeking-a-new-executive-director?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The PHP Foundation Is Seeking a New Executive Director](https://developers.slashdot.org/story/25/11/10/194259/the-php-foundation-is-seeking-a-new-executive-director?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-10, 20:10:00](https://news.slashdot.org/story/25/11/10/1927209/worlds-first-green-fuel-levy-to-add-almost-32-to-air-fares?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [World&apos;s First Green Fuel Levy To Add Almost $32 To Air Fares](https://news.slashdot.org/story/25/11/10/1927209/worlds-first-green-fuel-levy-to-add-almost-32-to-air-fares?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-10, 19:54:46](https://lobste.rs/s/6ei6oe/arm_homelab_box_minisforum_ms_r1) - [Arm Homelab-in-a-Box – Minisforum MS-R1](https://youtu.be/WXfd0rOOtkg)
* [2025-11-10, 19:35:00](https://apple.slashdot.org/story/25/11/10/1935215/apple-delays-release-of-next-iphone-air-amid-weak-sales?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Delays Release of Next iPhone Air Amid Weak Sales](https://apple.slashdot.org/story/25/11/10/1935215/apple-delays-release-of-next-iphone-air-amid-weak-sales?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-10, 19:28:07](https://news.ycombinator.com/item?id=45879793) - [Using Generative AI in Content Production](https://partnerhelp.netflixstudios.com/hc/en-us/articles/43393929218323-Using-Generative-AI-in-Content-Production)
* [2025-11-10, 18:59:00](https://slashdot.org/story/25/11/10/1859225/how-hr-took-over-the-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How HR Took Over the World](https://slashdot.org/story/25/11/10/1859225/how-hr-took-over-the-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-10, 18:48:09](https://lobste.rs/s/ii5opg/exposing_git_information_rust_binaries) - [Exposing Git Information in Rust Binaries Built With Nix](https://lgug2z.com/articles/exposing-git-information-in-rust-binaries-built-with-nix/)
* [2025-11-10, 18:30:06](https://news.ycombinator.com/item?id=45879101) - [Redmond, WA, turns off Flock Safety cameras after ICE arrests](https://www.seattletimes.com/seattle-news/law-justice/redmond-turns-off-flock-safety-cameras-after-ice-arrests/)
* [2025-11-10, 18:23:28](https://lobste.rs/s/mytmnl/memory_safety_for_skeptics) - [Memory Safety for Skeptics](https://queue.acm.org/detail.cfm?id=3773095)
* [2025-11-10, 18:23:10](https://news.ycombinator.com/item?id=45879012) - [Memory Safety for Skeptics](https://queue.acm.org/detail.cfm?id=3773095)
* [2025-11-10, 18:10:12](https://news.ycombinator.com/item?id=45878826) - [Omnilingual ASR: Advancing automatic speech recognition for 1600 languages](https://ai.meta.com/blog/omnilingual-asr-advancing-automatic-speech-recognition/?_fb_noscript=1)
* [2025-11-10, 18:10:00](https://science.slashdot.org/story/25/11/10/1755247/africa-finally-has-its-own-drug-regulation-agency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Africa Finally Has Its Own Drug-Regulation Agency](https://science.slashdot.org/story/25/11/10/1755247/africa-finally-has-its-own-drug-regulation-agency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-10, 17:50:21](https://news.ycombinator.com/item?id=45878578) - [The lazy Git UI you didn&apos;t know you need](https://www.bwplotka.dev/2025/lazygit/)
* [2025-11-10, 17:43:10](https://lobste.rs/s/haoxkc/underwear_fixed_point) - [The Underwear Fixed Point](https://notes.hella.cheap/the-underwear-fixed-point.html)
* [2025-11-10, 17:40:00](https://soylentnews.org/article.pl?sid=25/11/08/2128227&amp;from=rss) - [Australian Wine Industry Battles Fakes With Smart Bottle Caps](https://soylentnews.org/article.pl?sid=25/11/08/2128227&amp;from=rss)
* [2025-11-10, 17:30:00](https://entertainment.slashdot.org/story/25/11/10/1723223/the-algorithm-failed-music?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Algorithm Failed Music](https://entertainment.slashdot.org/story/25/11/10/1723223/the-algorithm-failed-music?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-10, 16:43:53](https://lobste.rs/s/z5a1nb/natural_language_semantic_analysis) - [Natural Language, Semantic Analysis, and Interactive Fiction (2006)](https://worrydream.com/refs/Nelson_G_2006_-_Natural_Language,_Semantic_Analysis_and_Interactive_Fiction.pdf)
* [2025-11-10, 16:38:31](https://news.ycombinator.com/item?id=45877698) - [Benchmarking leading AI agents against Google reCAPTCHA v2](https://research.roundtable.ai/captcha-benchmarking/)
* [2025-11-10, 16:23:24](https://news.ycombinator.com/item?id=45877517) - [Launch HN: Hypercubic (YC F25) – AI for COBOL and Mainframes](https://news.ycombinator.com/item?id=45877517)
* [2025-11-10, 16:05:46](https://news.ycombinator.com/item?id=45877257) - [Unexpected things that are people](https://bengoldhaber.substack.com/p/unexpected-things-that-are-people)
* [2025-11-10, 15:51:14](https://lobste.rs/s/uclead/opinion_piece_on_zig_design_choices) - [Opinion piece: On Zig (and the design choices within)](https://blueberrywren.dev/blog/on-zig/)
* [2025-11-10, 15:32:28](https://lobste.rs/s/pkktfc/sass_css_preprocessor_survived) - [SASS: The CSS Preprocessor That Survived the Apocalypse](https://en.andros.dev/blog/e9ded1a5/sass-the-css-preprocessor-that-survived-the-apocalypse/)
* [2025-11-10, 15:25:20](https://lobste.rs/s/necwp9/praise_dhh) - [In praise of dhh](https://okayfail.com/2025/in-praise-of-dhh.html)
* [2025-11-10, 14:57:26](https://news.ycombinator.com/item?id=45876598) - [Time to start de-Appling](https://heatherburns.tech/2025/11/10/time-to-start-de-appling/)
* [2025-11-10, 14:57:02](https://lobste.rs/s/6jiur6/building_high_performance_ticketing) - [Building a High-Performance Ticketing System with TigerBeetle](https://renerocks.ai/blog/2025-11-02--tigerfans/)
* [2025-11-10, 14:23:17](https://news.ycombinator.com/item?id=45876308) - [Head in the Zed Cloud](https://maxdeviant.com/posts/2025/head-in-the-zed-cloud/)
* [2025-11-10, 14:22:06](https://lobste.rs/s/h6ikaz/head_zed_cloud) - [Head in the Zed Cloud](https://maxdeviant.com/posts/2025/head-in-the-zed-cloud/)
* [2025-11-10, 13:14:55](https://lobste.rs/s/ni1qi1/android_security_bulletin_november_2025) - [Android security bulletin: November 2025 patch fixes zero-click RCE](https://source.android.com/docs/security/bulletin/2025-11-01)
* [2025-11-10, 13:00:00](https://soylentnews.org/article.pl?sid=25/11/08/2122221&amp;from=rss) - [Plumbing the Universe for Dark Matter](https://soylentnews.org/article.pl?sid=25/11/08/2122221&amp;from=rss)
* [2025-11-10, 12:31:12](https://lobste.rs/s/mzye3p/writing_your_own_beam) - [Writing your own BEAM](https://martin.janiczek.cz/2025/11/09/writing-your-own-beam.html)
* [2025-11-10, 12:19:02](https://lobste.rs/s/ln3nzt/error_model_2016) - [The Error Model (2016)](https://joeduffyblog.com/2016/02/07/the-error-model/)
* [2025-11-10, 11:59:50](https://lobste.rs/s/vbv9il/vibe_code_warning_from_1k_10k_lines) - [Vibe Code Warning – from 1k to 10k lines, a personal casestudy](https://github.com/jackdoe/pico2-swd-riscv?tab=readme-ov-file#0-vibe-code-warning)
* [2025-11-10, 11:45:15](https://news.ycombinator.com/item?id=45874987) - [Vibe Code Warning – A personal casestudy](https://github.com/jackdoe/pico2-swd-riscv)
* [2025-11-10, 11:19:25](https://lobste.rs/s/ekawwc/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/ekawwc/what_are_you_doing_this_week)
* [2025-11-10, 08:21:00](https://soylentnews.org/article.pl?sid=25/11/08/214219&amp;from=rss) - [The Chemistry Behind That Pricey Cup of Civet Coffee](https://soylentnews.org/article.pl?sid=25/11/08/214219&amp;from=rss)
* [2025-11-10, 08:14:35](https://lobste.rs/s/kinpl3/what_s_your_favourite_podcast_at_moment) - [What’s your favourite podcast at the moment?](https://lobste.rs/s/kinpl3/what_s_your_favourite_podcast_at_moment)
* [2025-11-10, 07:39:37](https://lobste.rs/s/3vyjzk/linux_kernel_looks_bite_bullet_enabling) - [The Linux Kernel Looks To \&quot;Bite The Bullet\&quot; In Enabling Microsoft C Extensions](https://www.phoronix.com/news/Linux-6.19-Patch-Would-MS-Ext)
* [2025-11-10, 06:37:51](https://lobste.rs/s/tevqkd/marble_fountain) - [Marble Fountain](https://willmorrison.net/posts/marble-fountain/)
* [2025-11-10, 06:37:42](https://lobste.rs/s/ugx90t/voxel_engine_weekend) - [Voxel Engine in a Weekend](https://daymare.net/blogs/voxel-engine-in-a-weekend/)
* [2025-11-10, 03:47:00](https://soylentnews.org/article.pl?sid=25/11/08/1723229&amp;from=rss) - [Blame game over Air India crash goes on](https://soylentnews.org/article.pl?sid=25/11/08/1723229&amp;from=rss)
* [2025-11-10, 02:31:36](https://news.ycombinator.com/item?id=45871688) - [Error ABI](https://matklad.github.io/2025/11/09/error-ABI.html)
* [2025-11-10, 02:29:06](https://lobste.rs/s/agae3o/error_abi) - [Error ABI](https://matklad.github.io/2025/11/09/error-ABI.html)
* [2025-11-09, 23:06:00](https://soylentnews.org/article.pl?sid=25/11/08/1721215&amp;from=rss) - [The 2026 Farmers’ Almanac Will Be Its Last Edition](https://soylentnews.org/article.pl?sid=25/11/08/1721215&amp;from=rss)
* [2025-11-09, 21:03:59](https://lobste.rs/s/zhwdem/plan_for_5_10_faster_free_threaded_jit_by) - [A Plan for 5-10%* Faster Free-Threaded JIT by Python 3.16](https://fidget-spinner.github.io/posts/faster-jit-plan.html)
* [2025-11-09, 18:29:43](https://news.ycombinator.com/item?id=45867828) - [Writing your own BEAM](https://martin.janiczek.cz/2025/11/09/writing-your-own-beam.html)
* [2025-11-09, 18:17:00](https://soylentnews.org/article.pl?sid=25/11/07/0311239&amp;from=rss) - [Microsoft AI Chief Warns Pursuing Machine Consciousness is a Gigantic Waste of Time](https://soylentnews.org/article.pl?sid=25/11/07/0311239&amp;from=rss)
* [2025-11-09, 14:52:32](https://lobste.rs/s/0rtjwc/new_du_command_lib_cargo_bin_coreutils) - [The new `du` command (in `/lib/cargo/bin/coreutils`) outputs wrong sizes in Ubuntu 25.10](https://askubuntu.com/questions/1559396/the-new-du-command-in-lib-cargo-bin-coreutils-outputs-wrong-sizes-in-ubun)
* [2025-11-09, 13:35:00](https://soylentnews.org/article.pl?sid=25/11/07/036254&amp;from=rss) - [Ford CEO Jim Farley strikes a Cautious Tone on Apple’s New CarPlay Ultra](https://soylentnews.org/article.pl?sid=25/11/07/036254&amp;from=rss)
* [2025-11-09, 08:46:00](https://soylentnews.org/article.pl?sid=25/11/07/032255&amp;from=rss) - [Nvidia Will Help Build 7 AI Supercomputers for DoE](https://soylentnews.org/article.pl?sid=25/11/07/032255&amp;from=rss)
* [2025-11-09, 04:10:00](https://soylentnews.org/article.pl?sid=25/11/07/0255249&amp;from=rss) - [Gen Z is Ditching the Tie for a Toolbelt, and it’s the Smartest Rebellion Yet](https://soylentnews.org/article.pl?sid=25/11/07/0255249&amp;from=rss)
* [2025-11-08, 23:18:00](https://soylentnews.org/article.pl?sid=25/11/06/0740218&amp;from=rss) - [Does Academia Need a Wake Up Call on Wikibooks?](https://soylentnews.org/article.pl?sid=25/11/06/0740218&amp;from=rss)
* [2025-11-08, 18:34:00](https://soylentnews.org/article.pl?sid=25/11/06/0735234&amp;from=rss) - [OpenAI Looking for Taxpayers to Bail Them Out If the Bubble Bursts](https://soylentnews.org/article.pl?sid=25/11/06/0735234&amp;from=rss)
* [2025-11-08, 13:48:00](https://soylentnews.org/article.pl?sid=25/11/06/0723234&amp;from=rss) - [FuguIta 7.8 - OpenBSD-based Live System - Released!](https://soylentnews.org/article.pl?sid=25/11/06/0723234&amp;from=rss)
* [2025-11-08, 09:06:00](https://soylentnews.org/article.pl?sid=25/11/06/0715239&amp;from=rss) - [Uncle Sam Wants to Scan Your Iris and Collect Your DNA, Citizen or Not](https://soylentnews.org/article.pl?sid=25/11/06/0715239&amp;from=rss)
* [2025-11-08, 04:19:00](https://soylentnews.org/article.pl?sid=25/11/06/0710228&amp;from=rss) - [Study Concludes Cybersecurity Training Doesn&apos;t Work](https://soylentnews.org/article.pl?sid=25/11/06/0710228&amp;from=rss)
* [2025-11-08, 00:01:05](https://news.ycombinator.com/item?id=45852755) - [Building a high-performance ticketing system with TigerBeetle](https://renerocks.ai/blog/2025-11-02--tigerfans/)
* [2025-11-07, 23:35:00](https://soylentnews.org/article.pl?sid=25/11/06/0317205&amp;from=rss) - [Developer Warns Users That Fake Download Site is Hosting Windows 11 Upgrade Bypass Tool](https://soylentnews.org/article.pl?sid=25/11/06/0317205&amp;from=rss)
* [2025-11-07, 18:53:00](https://soylentnews.org/article.pl?sid=25/11/06/0311253&amp;from=rss) - [LM8560, the Eternal Chip From the 1980 Years](https://soylentnews.org/article.pl?sid=25/11/06/0311253&amp;from=rss)
* [2025-11-07, 14:09:00](https://soylentnews.org/article.pl?sid=25/11/06/0257203&amp;from=rss) - [Ubuntu Certification Now Available Through Canonical Academy](https://soylentnews.org/article.pl?sid=25/11/06/0257203&amp;from=rss)
* [2025-11-07, 09:28:00](https://soylentnews.org/article.pl?sid=25/11/05/1549218&amp;from=rss) - [Australian Law To Require EV Cars To Be Noisy For Blind People](https://soylentnews.org/article.pl?sid=25/11/05/1549218&amp;from=rss)
* [2025-11-07, 04:46:00](https://soylentnews.org/article.pl?sid=25/11/05/1540235&amp;from=rss) - [7 Basic Science Discoveries That Changed the World](https://soylentnews.org/article.pl?sid=25/11/05/1540235&amp;from=rss)
* [2025-11-07, 00:01:00](https://soylentnews.org/article.pl?sid=25/11/06/0331241&amp;from=rss) - [GNOME Mutter Now \&quot;Completely Drops the Whole X11 Backend\&quot;](https://soylentnews.org/article.pl?sid=25/11/06/0331241&amp;from=rss)
