# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software

* [How I Found Myself In the Game Industry](https://nothings.org/gamedev/how_i_found_myself_in_the_game_industry.html) - A fascinating read about personal experiences in breaking into the game industry. [Discussion](https://lobste.rs/s/dbbau4/how_i_found_myself_game_industry)

* [Exploring the Secrets of layoutPriority in SwiftUI ZStack](https://fatbobman.com/en/posts/exploring-the-secrets-of-layoutpriority-in-zstack/) - An in-depth technical exploration into SwiftUI's ZStack behavior for developers. [Comments](https://lobste.rs/s/hqbhxk/exploring_secrets_layoutpriority)

* [FFmpeg devs boast of another 100x leap thanks to handwritten assembly code](https://www.tomshardware.com/software/the-biggest-speedup-ive-seen-so-far-ffmpeg-devs-boast-of-another-100x-leap-thanks-to-handwritten-assembly-code) - A monumental performance boost achieved in multimedia processing. [Comments](https://news.ycombinator.com/item?id=44629206)

* [Subreply: An open source text-only social network](https://github.com/lucianmarin/subreply) - A lightweight and minimalist social media platform meant to connect users through plain text. [Discussion](https://news.ycombinator.com/item?id=44628082)

* [Parallelizing the physics solver](https://youtu.be/Kvsvd67XUKw) - A visualization of optimization techniques for real-time physics simulations. [Discussion](https://lobste.rs/s/sjzggo/parallelizing_physics_solver)

* [Async I/O on Linux and durability](https://blog.canoozie.net/async-i-o-on-linux-and-durability/) - Dive into the mechanics and reliability aspects of asynchronous I/O operations in Linux systems. [Comments](https://lobste.rs/s/szcq9k/async_i_o_on_linux_durability)

* [The Latest Windows PCs Remember Everything](https://soylentnews.org/article.pl?sid=25/07/19/0033258&amp;from=rss) - Examining security challenges posed by advancements in always-on memory technologies.

## Science and Innovation

* [Staying Cool Without Refrigerants: Next-generation Peltier cooling](https://news.samsung.com/global/interview-staying-cool-without-refrigerants-how-samsung-is-pioneering-next-generation-peltier-cooling) - Innovation in energy-efficient cooling technologies by refraining from traditional refrigerants. [Comments](https://news.ycombinator.com/item?id=44628930)

* [Healthy Babies Born in Britain After Scientists Used DNA From Three People to Avoid Genetic Disease](https://science.slashdot.org/story/25/07/20/0328203/healthy-babies-born-in-britain-after-scientists-used-dna-from-three-people-to-avoid-genetic-disease?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A new groundbreaking method for preventing genetic diseases while pushing ethical boundaries.

* [New Antimatter Physics Discovered at the Large Hadron Collider](https://www.scientificamerican.com/article/the-large-hadron-collider-discovers-antimatter-behaving-oddly-in-new-class/) - Astonishing new findings about antimatter behavior that challenge our understanding of physics. [Comments](https://news.ycombinator.com/item?id=44627827)

## Cybersecurity and Digital Threats

* [Remote Access Trojan (RAT) Found in the AUR (Arch Linux User Repository)](https://soylentnews.org/article.pl?sid=25/07/20/1854256&amp;from=rss) - A rare yet concerning security breach showcases the vulnerabilities even in popular repositories. [Discussion](https://news.ycombinator.com/item?id=44627828)

* [Intel Has Discontinued Clear Linux, Effective Immediately](https://soylentnews.org/article.pl?sid=25/07/19/123202&amp;from=rss) - Intel terminates its Linux distribution shocking developers targeting performance Linux.

* [Hacking a Toniebox](https://www.schafe-sind-bessere-rasenmaeher.de/tech/hack-all-the-things-toniebox/) - Reverse-engineering the popular interactive speaker for creative personalizations. [Discussion](https://news.ycombinator.com/item?id=44627211)

* [Payment processors&apos; bar on Japanese adult content endangers democracy (2024)](https://automaton-media.com/en/news/nier-creator-speaks-out-against-payment-processors-pressuring-japanese-adult-content-platforms/)

## Global Affairs and Policies

* [EU commissioner shocked by dangers of some goods sold by Shein and Temu](https://www.theguardian.com/business/2025/jul/20/eu-commissioner-shocked-dangerous-goods-sold-shein-temu) - Concerns raised over consumer safety and quality from widely popular online retailers. [Comments](https://news.ycombinator.com/item?id=44629074)

* [Jack Dorsey Pumps $10M Into a Nonprofit Focused on Open Source Social Media](https://news.slashdot.org/story/25/07/20/058235/jack-dorsey-pumps-10m-into-a-nonprofit-focused-on-open-source-social-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Billionaire supports decentralized online platforms.

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

* [2025-07-20, 21:54:25](https://lobste.rs/s/dbbau4/how_i_found_myself_game_industry) - [How I Found Myself In the Game Industry](https://nothings.org/gamedev/how_i_found_myself_in_the_game_industry.html)
* [2025-07-20, 21:00:52](https://lobste.rs/s/hqbhxk/exploring_secrets_layoutpriority) - [Exploring the Secrets of layoutPriority in SwiftUI ZStack](https://fatbobman.com/en/posts/exploring-the-secrets-of-layoutpriority-in-zstack/)
* [2025-07-20, 20:51:41](https://news.ycombinator.com/item?id=44629206) - [FFmpeg devs boast of another 100x leap thanks to handwritten assembly code](https://www.tomshardware.com/software/the-biggest-speedup-ive-seen-so-far-ffmpeg-devs-boast-of-another-100x-leap-thanks-to-handwritten-assembly-code)
* [2025-07-20, 20:44:00](https://slashdot.org/story/25/07/20/2041256/how-did-amazon-spin-this-years-prime-day-sales?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Did Amazon Spin This Year&apos;s Prime Day Sales?](https://slashdot.org/story/25/07/20/2041256/how-did-amazon-spin-this-years-prime-day-sales?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 20:43:16](https://news.ycombinator.com/item?id=44629134) - [Tough news for our UK users](https://blog.janitorai.com/posts/3/)
* [2025-07-20, 20:35:36](https://news.ycombinator.com/item?id=44629074) - [EU commissioner shocked by dangers of some goods sold by Shein and Temu](https://www.theguardian.com/business/2025/jul/20/eu-commissioner-shocked-dangerous-goods-sold-shein-temu)
* [2025-07-20, 20:35:00](https://soylentnews.org/article.pl?sid=25/07/19/1342209&amp;from=rss) - [Iran Seeks Three Cloud Providers To Power Its Government](https://soylentnews.org/article.pl?sid=25/07/19/1342209&amp;from=rss)
* [2025-07-20, 20:18:54](https://news.ycombinator.com/item?id=44628930) - [Staying cool without refrigerants: Next-generation Peltier cooling](https://news.samsung.com/global/interview-staying-cool-without-refrigerants-how-samsung-is-pioneering-next-generation-peltier-cooling)
* [2025-07-20, 19:34:00](https://tech.slashdot.org/story/25/07/20/1714257/kill-russian-soldiers-win-points-is-ukraines-new-drone-scheme-gamifying-war?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Kill Russian Soldiers, Win Points: Is Ukraine&apos;s New Drone Scheme Gamifying War?](https://tech.slashdot.org/story/25/07/20/1714257/kill-russian-soldiers-win-points-is-ukraines-new-drone-scheme-gamifying-war?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 19:27:01](https://lobste.rs/s/04g8ge/foo_archive) - [The Foo Archive](https://soda.privatevoid.net/foo/)
* [2025-07-20, 19:14:55](https://lobste.rs/s/tfc3cb/stdio_3_change_file_is_now_opaque) - [stdio(3) change: FILE is now opaque](https://undeadly.org/cgi?action=article;sid=20250717103345)
* [2025-07-20, 19:12:00](https://soylentnews.org/article.pl?sid=25/07/20/1854256&amp;from=rss) - [Remote Access Trojan (RAT) Found in the AUR (Arch Linux User Repository)](https://soylentnews.org/article.pl?sid=25/07/20/1854256&amp;from=rss)
* [2025-07-20, 18:46:14](https://news.ycombinator.com/item?id=44628082) - [Subreply – an open source text-only social network](https://github.com/lucianmarin/subreply)
* [2025-07-20, 18:34:00](https://yro.slashdot.org/story/25/07/20/1559242/how-gmail-server-evidence-led-to-a-jury-verdict-of-232-million-for-wrongful-death?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Gmail Server Evidence Led to a Jury Verdict of $23.2 Million For Wrongful Death](https://yro.slashdot.org/story/25/07/20/1559242/how-gmail-server-evidence-led-to-a-jury-verdict-of-232-million-for-wrongful-death?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 18:22:01](https://news.ycombinator.com/item?id=44627828) - [Payment processors&apos; bar on Japanese adult content endangers democracy (2024)](https://automaton-media.com/en/news/nier-creator-speaks-out-against-payment-processors-pressuring-japanese-adult-content-platforms/)
* [2025-07-20, 18:21:53](https://news.ycombinator.com/item?id=44627827) - [New Antimatter Physics Discovered at the Large Hadron Collider](https://www.scientificamerican.com/article/the-large-hadron-collider-discovers-antimatter-behaving-oddly-in-new-class/)
* [2025-07-20, 18:18:40](https://news.ycombinator.com/item?id=44627793) - [Stdio(3) change: FILE is now opaque (OpenBSD)](https://undeadly.org/cgi?action=article;sid=20250717103345)
* [2025-07-20, 17:57:44](https://news.ycombinator.com/item?id=44627590) - [QuakeNotch: Quake Terminal on your MacBook&apos;s notch](https://quakenotch.com)
* [2025-07-20, 17:34:00](https://tech.slashdot.org/story/25/07/20/1421220/deltas-boeing-767-makes-emergency-landing-as-engine-catches-fire-moments-after-takeoff?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Delta&apos;s Boeing 767 Makes Emergency Landing as Engine Catches Fire Moments After Takeoff](https://tech.slashdot.org/story/25/07/20/1421220/deltas-boeing-767-makes-emergency-landing-as-engine-catches-fire-moments-after-takeoff?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 17:16:36](https://news.ycombinator.com/item?id=44627211) - [Hacking a Toniebox](https://www.schafe-sind-bessere-rasenmaeher.de/tech/hack-all-the-things-toniebox/)
* [2025-07-20, 17:13:58](https://news.ycombinator.com/item?id=44627185) - [Master Foo and the Script Kiddie (1996)](https://soda.privatevoid.net/foo/arc/02.html)
* [2025-07-20, 17:11:43](https://news.ycombinator.com/item?id=44627158) - [Insights on Teufel&apos;s First Open-Source Speaker](https://blog.teufelaudio.com/visionary-mynds-insights-on-teufels-first-open-source-speaker/)
* [2025-07-20, 17:00:46](https://lobste.rs/s/ihmxdn/they_re_putting_blue_food_coloring) - [They&apos;re putting blue food coloring in everything](https://blog.foxtrotluna.social/theyre-putting-blue-food-coloring-in-everything/)
* [2025-07-20, 16:34:00](https://science.slashdot.org/story/25/07/19/0457201/inside-the-silicon-valley-push-to-breed-super-babies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Inside the Silicon Valley Push to Breed Super-Babies&apos;](https://science.slashdot.org/story/25/07/19/0457201/inside-the-silicon-valley-push-to-breed-super-babies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 16:33:46](https://news.ycombinator.com/item?id=44626789) - [\&quot;The Bitter Lesson\&quot; is wrong. Well sort of](https://assaf-pinhasi.medium.com/the-bitter-lesson-is-wrong-sort-of-a3d021864924)
* [2025-07-20, 16:15:17](https://lobste.rs/s/9pp08h/i_m_tired_talking_about_ai) - [I’m Tired of Talking About AI](https://paddy.carvers.com/posts/2025/07/ai/)
* [2025-07-20, 15:51:44](https://news.ycombinator.com/item?id=44626363) - [Speeding Up My ZSH Shell](https://scottspence.com/posts/speeding-up-my-zsh-shell)
* [2025-07-20, 15:49:00](https://soylentnews.org/article.pl?sid=25/07/19/123202&amp;from=rss) - [Intel Has Discontinued Clear Linux, Effective Immediately](https://soylentnews.org/article.pl?sid=25/07/19/123202&amp;from=rss)
* [2025-07-20, 15:18:26](https://lobste.rs/s/bj5yad/tour_microsoft_s_macbu_lab_2006) - [A tour of Microsoft&apos;s MacBU lab (2006)](https://davidweiss.blogspot.com/2006/04/tour-of-microsofts-mac-lab.html)
* [2025-07-20, 14:34:07](https://lobste.rs/s/hikcqp/rust_clippy_performance_status_update) - [Rust Clippy performance status update](https://blog.goose.love/posts/clippy-performance-status-update/)
* [2025-07-20, 14:33:56](https://lobste.rs/s/xx0k66/responsible_ai_enterprise_applications) - [Responsible AI in Enterprise Applications: A Practitioner&apos;s View](https://www.jjude.com/responsible-ai-in-enterprise-apps/)
* [2025-07-20, 14:17:00](https://slashdot.org/story/25/07/20/0557204/why-ibms-amazing-sliding-keyboard-thinkpad-701-never-survived-past-1995?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why IBM&apos;s Amazing &apos;Sliding Keyboard&apos; ThinkPad 701 Never Survived Past 1995](https://slashdot.org/story/25/07/20/0557204/why-ibms-amazing-sliding-keyboard-thinkpad-701-never-survived-past-1995?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 14:11:26](https://news.ycombinator.com/item?id=44625360) - [The old Caveman Chemistry website (1996-2000)](https://cavemanchemistry.com/oldcave/)
* [2025-07-20, 14:04:12](https://lobste.rs/s/7ykaux/introducing_xmlui) - [Introducing XMLUI](https://blog.jonudell.net/2025/07/18/introducing-xmlui/)
* [2025-07-20, 14:03:39](https://news.ycombinator.com/item?id=44625292) - [XMLUI](https://blog.jonudell.net/2025/07/18/introducing-xmlui/)
* [2025-07-20, 12:22:09](https://lobste.rs/s/6ifojq/coding_with_llms_summer_2025_update) - [Coding with LLMs in the summer of 2025 (an update)](https://antirez.com/news/154)
* [2025-07-20, 11:34:00](https://tech.slashdot.org/story/25/07/20/0119236/kde-plasma-finally-gets-rounded-bottom-window-corners?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [KDE Plasma Finally Gets Rounded Bottom Window Corners ](https://tech.slashdot.org/story/25/07/20/0119236/kde-plasma-finally-gets-rounded-bottom-window-corners?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 11:26:09](https://news.ycombinator.com/item?id=44624114) - [Digital vassals? French Government &apos;exposes citizens&apos; data to US&apos;](https://brusselssignal.eu/2025/07/digital-vassals-french-government-exposes-citizens-data-to-us/)
* [2025-07-20, 11:04:02](https://news.ycombinator.com/item?id=44623953) - [Coding with LLMs in the summer of 2025 – an update](https://antirez.com/news/154)
* [2025-07-20, 11:04:00](https://soylentnews.org/article.pl?sid=25/07/19/0033258&amp;from=rss) - [The Latest Windows PCs Remember Everything](https://soylentnews.org/article.pl?sid=25/07/19/0033258&amp;from=rss)
* [2025-07-20, 10:11:22](https://news.ycombinator.com/item?id=44623581) - [A Tour of Microsoft&apos;s Mac Lab (2006)](https://davidweiss.blogspot.com/2006/04/tour-of-microsofts-mac-lab.html)
* [2025-07-20, 09:40:45](https://lobste.rs/s/szcq9k/async_i_o_on_linux_durability) - [Async I/O on Linux and durability](https://blog.canoozie.net/async-i-o-on-linux-and-durability/)
* [2025-07-20, 09:33:48](https://news.ycombinator.com/item?id=44623361) - [AI is killing the web – can anything save it?](https://www.economist.com/business/2025/07/14/ai-is-killing-the-web-can-anything-save-it)
* [2025-07-20, 08:13:15](https://news.ycombinator.com/item?id=44622973) - [A human metaphor for evaluating AI capability](https://mathstodon.xyz/@tao/114881418225852441)
* [2025-07-20, 08:02:00](https://news.slashdot.org/story/25/07/20/058235/jack-dorsey-pumps-10m-into-a-nonprofit-focused-on-open-source-social-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Jack Dorsey Pumps $10M Into a Nonprofit Focused on Open Source Social Media](https://news.slashdot.org/story/25/07/20/058235/jack-dorsey-pumps-10m-into-a-nonprofit-focused-on-open-source-social-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 06:56:01](https://news.ycombinator.com/item?id=44622608) - [LLM architecture comparison](https://magazine.sebastianraschka.com/p/the-big-llm-architecture-comparison)
* [2025-07-20, 06:20:02](https://news.ycombinator.com/item?id=44622454) - [Async I/O on Linux in databases](https://blog.canoozie.net/async-i-o-on-linux-and-durability/)
* [2025-07-20, 06:18:00](https://soylentnews.org/article.pl?sid=25/07/19/0023239&amp;from=rss) - [Infographic: Every Microsoft Acquisition Since 1986](https://soylentnews.org/article.pl?sid=25/07/19/0023239&amp;from=rss)
* [2025-07-20, 04:02:00](https://science.slashdot.org/story/25/07/20/0328203/healthy-babies-born-in-britain-after-scientists-used-dna-from-three-people-to-avoid-genetic-disease?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Healthy Babies Born in Britain After Scientists Used DNA From Three People to Avoid Genetic Disease](https://science.slashdot.org/story/25/07/20/0328203/healthy-babies-born-in-britain-after-scientists-used-dna-from-three-people-to-avoid-genetic-disease?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 02:23:00](https://games.slashdot.org/story/25/07/20/0219213/that-coldplay-kiss-cam-couple-just-became-a-vibe-coded-videogame---and-then-an-nft?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [That Coldplay &apos;Kiss Cam&apos; Couple Just Became a Vibe-Coded Videogame - and Then an NFT](https://games.slashdot.org/story/25/07/20/0219213/that-coldplay-kiss-cam-couple-just-became-a-vibe-coded-videogame---and-then-an-nft?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 01:33:00](https://soylentnews.org/article.pl?sid=25/07/18/2350226&amp;from=rss) - [Is Tor Trustworthy and Safe?](https://soylentnews.org/article.pl?sid=25/07/18/2350226&amp;from=rss)
* [2025-07-20, 00:44:00](https://hardware.slashdot.org/story/25/07/20/0042202/first-electronic-photonic-quantum-chip-created-in-commercial-foundry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [First Electronic-Photonic Quantum Chip Created In Commercial Foundry](https://hardware.slashdot.org/story/25/07/20/0042202/first-electronic-photonic-quantum-chip-created-in-commercial-foundry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 00:13:17](https://lobste.rs/s/sjzggo/parallelizing_physics_solver) - [Parallelizing the physics solver](https://youtu.be/Kvsvd67XUKw)
* [2025-07-19, 23:35:08](https://lobste.rs/s/jtd0b1/giving_up_on_element_matrix_org) - [Giving Up on Element &amp; Matrix.org](https://xn--gckvb8fzb.com/giving-up-on-element-and-matrixorg/)
* [2025-07-19, 22:50:40](https://lobste.rs/s/z2ehwo/borrowchecker_is_what_i_like_least_about) - [The borrowchecker is what I like the least about Rust](https://viralinstruction.com/posts/borrowchecker/)
* [2025-07-19, 22:34:00](https://science.slashdot.org/story/25/07/19/0252236/23andmes-data-sold-to-nonprofit-run-by-its-co-founder---and-i-still-dont-trust-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [23andMe&apos;s Data Sold to Nonprofit Run by Its Co-Founder - &apos;And I Still Don&apos;t Trust It&apos;](https://science.slashdot.org/story/25/07/19/0252236/23andmes-data-sold-to-nonprofit-run-by-its-co-founder---and-i-still-dont-trust-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-19, 22:11:12](https://lobste.rs/s/pv4vxu/why_you_should_choose_htmx_for_your_next) - [Why you should choose HTMX for your next web-based side project - and ditch the crufty MPA and complex SPA](https://hamy.xyz/blog/2024-02_htmx-for-side-projects)
* [2025-07-19, 21:34:00](https://news.slashdot.org/story/25/07/19/1958211/in-shallow-water-ships-trigger-seafloor-methane-emissions-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [In Shallow Water Ships Trigger Seafloor Methane Emissions, Study Finds](https://news.slashdot.org/story/25/07/19/1958211/in-shallow-water-ships-trigger-seafloor-methane-emissions-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-19, 21:19:56](https://lobste.rs/s/8wrzuo/metap_meta_programming_layer_for_python) - [metap: A Meta-Programming Layer for Python](https://sbaziotis.com/compilers/metap.html)
* [2025-07-19, 20:34:00](https://news.slashdot.org/story/25/07/19/1934209/android-phones-can-detect-earthquakes-before-the-ground-starts-shaking?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Android Phones Can Detect Earthquakes Before the Ground Starts Shaking](https://news.slashdot.org/story/25/07/19/1934209/android-phones-can-detect-earthquakes-before-the-ground-starts-shaking?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-19, 20:33:00](https://soylentnews.org/article.pl?sid=25/07/18/0948223&amp;from=rss) - [The Fascinating Science of Pain – and Why Everyone Feels it Differently](https://soylentnews.org/article.pl?sid=25/07/18/0948223&amp;from=rss)
* [2025-07-19, 19:41:15](https://lobste.rs/s/3isa6t/make_your_own_backup_system_part_1) - [Make Your Own Backup System – Part 1: Strategy Before Scripts](https://it-notes.dragas.net/2025/07/18/make-your-own-backup-system-part-1-strategy-before-scripts/)
* [2025-07-19, 19:34:00](https://tech.slashdot.org/story/25/07/19/187249/what-eyewitnesses-remembered-about-the-worlds-first-atomic-bomb-explosion-in-1945?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What Eyewitnesses Remembered About the World&apos;s First Atomic Bomb Explosion in 1945](https://tech.slashdot.org/story/25/07/19/187249/what-eyewitnesses-remembered-about-the-worlds-first-atomic-bomb-explosion-in-1945?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-19, 17:31:13](https://lobste.rs/s/5f541e/legendary_software_rendering_era_with) - [Legendary Software Rendering Era with Sean Barrett](https://www.youtube.com/watch?v=T1tXepGXDDM)
* [2025-07-19, 17:24:39](https://lobste.rs/s/naiwvd/my_ultimate_self_hosting_setup) - [My Ultimate Self-hosting Setup](https://codecaptured.com/blog/my-ultimate-self-hosting-setup/)
* [2025-07-19, 16:57:09](https://lobste.rs/s/czx98y/rethinking_cli_interfaces_for_ai) - [Rethinking CLI interfaces for AI](https://www.notcheckmark.com/2025/07/rethinking-cli-interfaces-for-ai/)
* [2025-07-19, 15:50:00](https://soylentnews.org/article.pl?sid=25/07/18/0939219&amp;from=rss) - [FuguIta: OpenBSD Live CD - Desktop Environment Demo Version with XFCE v.4.20.0](https://soylentnews.org/article.pl?sid=25/07/18/0939219&amp;from=rss)
* [2025-07-19, 11:08:00](https://soylentnews.org/article.pl?sid=25/07/18/0920228&amp;from=rss) - [Most Warming This Century May Be Due To Air Pollution Cuts](https://soylentnews.org/article.pl?sid=25/07/18/0920228&amp;from=rss)
* [2025-07-19, 11:03:00](https://lobste.rs/s/cwmt11/do_you_understand_f_strings) - [Do you understand f-strings?](https://fstrings.wtf/)
* [2025-07-19, 06:20:00](https://soylentnews.org/article.pl?sid=25/07/18/0136203&amp;from=rss) - [Two Guys Hated Using Comcast, So They Built Their Own Fiber ISP](https://soylentnews.org/article.pl?sid=25/07/18/0136203&amp;from=rss)
* [2025-07-19, 01:37:00](https://soylentnews.org/article.pl?sid=25/07/18/0124213&amp;from=rss) - [Radio Hobbyists, Rejoice! Good News for LoRa &amp; Mesh](https://soylentnews.org/article.pl?sid=25/07/18/0124213&amp;from=rss)
* [2025-07-18, 23:29:11](https://lobste.rs/s/f0um5j/async_rust_is_bad_language_2023) - [Async Rust Is A Bad Language (2023)](https://bitbashing.io/async-rust.html)
* [2025-07-18, 20:55:00](https://soylentnews.org/article.pl?sid=25/07/18/0111248&amp;from=rss) - [Drones, AI and Robot Pickers: Meet the Fully Autonomous Farm](https://soylentnews.org/article.pl?sid=25/07/18/0111248&amp;from=rss)
* [2025-07-18, 19:21:17](https://lobste.rs/s/oeuohp/asynchrony_is_not_concurrency) - [Asynchrony is not Concurrency](https://kristoff.it/blog/asynchrony-is-not-concurrency/)
* [2025-07-18, 19:13:24](https://lobste.rs/s/df2azc/firefox_patch_bin_librewolf_fix_bin_zen) - [firefox-patch-bin, librewolf-fix-bin and zen-browser-patched-bin AUR packages contain malware](https://lists.archlinux.org/archives/list/aur-general@lists.archlinux.org/thread/7EZTJXLIAQLARQNTMEW2HBWZYE626IFJ/)
* [2025-07-18, 16:10:00](https://soylentnews.org/article.pl?sid=25/07/18/011202&amp;from=rss) - [DOGE Staffer With Access to Americans&apos; Personal Data Leaked Private xAI API Key](https://soylentnews.org/article.pl?sid=25/07/18/011202&amp;from=rss)
* [2025-07-18, 11:26:00](https://soylentnews.org/article.pl?sid=25/07/17/127255&amp;from=rss) - [Intel Axes Thousands of Technicians and Engineers in Sweeping U.S. Layoffs](https://soylentnews.org/article.pl?sid=25/07/17/127255&amp;from=rss)
* [2025-07-18, 06:49:00](https://soylentnews.org/article.pl?sid=25/07/17/124242&amp;from=rss) - [Engineering the Origin of the Wheel](https://soylentnews.org/article.pl?sid=25/07/17/124242&amp;from=rss)
* [2025-07-18, 02:05:00](https://soylentnews.org/article.pl?sid=25/07/17/1148204&amp;from=rss) - [Nvidia Chips Become the First GPUs to Fall to Rowhammer Bit-Flip Attacks](https://soylentnews.org/article.pl?sid=25/07/17/1148204&amp;from=rss)
* [2025-07-18, 00:54:27](https://news.ycombinator.com/item?id=44600043) - [Laminar Flow Airfoil](http://www.aviation-history.com/theory/lam-flow.htm)
* [2025-07-17, 21:43:23](https://news.ycombinator.com/item?id=44598578) - [What My Mother Didn&apos;t Talk About (2020)](https://www.buzzfeednews.com/article/karolinawaclawiak/what-my-mother-didnt-talk-about-karolina-waclawiak)
* [2025-07-17, 21:14:00](https://soylentnews.org/article.pl?sid=25/07/16/188244&amp;from=rss) - [Belkin Shows Tech Firms Getting Too Comfortable With Bricking Customers’ Stuff](https://soylentnews.org/article.pl?sid=25/07/16/188244&amp;from=rss)
* [2025-07-17, 16:32:00](https://soylentnews.org/article.pl?sid=25/07/16/182208&amp;from=rss) - [Holographic Ribbon Aims To Oust Magnetic Tape With 50-Year Life Span And 200Tb Per Cartridge](https://soylentnews.org/article.pl?sid=25/07/16/182208&amp;from=rss)
* [2025-07-17, 16:01:17](https://news.ycombinator.com/item?id=44594808) - [New colors without shooting lasers into your eyes](https://dynomight.net/colors/)
* [2025-07-17, 15:43:04](https://news.ycombinator.com/item?id=44594584) - [Show HN: Conductor, a Mac app that lets you run a bunch of Claude Codes at once](https://conductor.build/)
* [2025-07-17, 11:47:00](https://soylentnews.org/article.pl?sid=25/07/16/1758241&amp;from=rss) - [AI Slows Down Some Experienced Software Developers](https://soylentnews.org/article.pl?sid=25/07/16/1758241&amp;from=rss)
* [2025-07-17, 09:35:37](https://news.ycombinator.com/item?id=44591439) - [Jove (Jonathan&apos;s Own Version of Emacs)](https://en.wikipedia.org/wiki/JOVE)
* [2025-07-17, 09:12:26](https://news.ycombinator.com/item?id=44591305) - [Simulating Hand-Drawn Motion with SVG Filters](https://camillovisini.com/coding/simulating-hand-drawn-motion-with-svg-filters)
* [2025-07-17, 07:07:00](https://soylentnews.org/article.pl?sid=25/07/16/1725249&amp;from=rss) - [Industrial Waste is Turning Into Rock in Just Decades, Study Suggests](https://soylentnews.org/article.pl?sid=25/07/16/1725249&amp;from=rss)
* [2025-07-17, 02:22:00](https://soylentnews.org/article.pl?sid=25/07/15/1735235&amp;from=rss) - [Merger of Two Massive Black Holes is One for the Record Books](https://soylentnews.org/article.pl?sid=25/07/15/1735235&amp;from=rss)
* [2025-07-16, 21:33:00](https://soylentnews.org/article.pl?sid=25/07/15/1642247&amp;from=rss) - [Nvidia CEO says China&apos;s Military Will Avoid U.S. AI Tech](https://soylentnews.org/article.pl?sid=25/07/15/1642247&amp;from=rss)
* [2025-07-16, 16:53:00](https://soylentnews.org/article.pl?sid=25/07/15/1528250&amp;from=rss) - [Texas Governor Says His Emails With Elon Musk are Too ‘Intimate or Embarrassing’ to Release](https://soylentnews.org/article.pl?sid=25/07/15/1528250&amp;from=rss)
* [2025-07-16, 12:48:54](https://news.ycombinator.com/item?id=44581725) - [The Minecraft game score unexpectedly became big business for its composer](https://www.billboard.com/pro/how-minecraft-score-became-big-business-for-composer/)
* [2025-07-16, 12:15:00](https://soylentnews.org/article.pl?sid=25/07/15/0229246&amp;from=rss) - [Secretive Chinese Satellite Emerges in Surprising Orbit After 6-Day Vanishing Act](https://soylentnews.org/article.pl?sid=25/07/15/0229246&amp;from=rss)
* [2025-07-16, 07:34:00](https://soylentnews.org/article.pl?sid=25/07/14/1828216&amp;from=rss) - [Stopping The Rot When Good Software Goes Bad Means New Rules](https://soylentnews.org/article.pl?sid=25/07/14/1828216&amp;from=rss)
* [2025-07-16, 02:51:00](https://soylentnews.org/article.pl?sid=25/07/14/1819237&amp;from=rss) - [GPS On The Fritz? Britain And France Plot A Backup Plan](https://soylentnews.org/article.pl?sid=25/07/14/1819237&amp;from=rss)
