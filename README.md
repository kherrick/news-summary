# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovations

* [Load and store forwarding in the Toy Optimizer](https://bernsteinbear.com/blog/toy-load-store/) investigates advanced memory optimization techniques. [Comments](https://lobste.rs/s/z5ae9q/load_store_forwarding_toy_optimizer)

* [Using Vectorize to build a search engine in 160 loc](https://blog.partykit.io/posts/using-vectorize-to-build-search/) explains creating a lightweight and powerful search engine with minimal code. [Comments](https://lobste.rs/s/n7sn45/using_vectorize_build_search_engine_160)

* [phoenix - A modern X server written from scratch in Zig](https://git.dec05eba.com/phoenix/about/) showcases a modern approach to creating X servers with Zig. [Comments](https://lobste.rs/s/8ayphg/phoenix_modern_x_server_written_from)

* [Datafun - functional language that generalizes Datalog](https://www.rntz.net/datafun/) highlights the introduction of a functional programming language inspired by Datalog. [Comments](https://lobste.rs/s/b1vxmq/datafun_functional_language)

## Environmental and Energy Advancements

* [Nuclear Developer Proposes Using Navy Reactors For Data Centers](https://hardware.slashdot.org/story/25/12/24/1920243/nuclear-developer-proposes-using-navy-reactors-for-data-centers?utm_source=rss1.0mainlinkanon&utm_medium=feed) explores using naval nuclear reactors for sustainable data centers. [Comments](https://hardware.slashdot.org/story/25/12/24/1920243/nuclear-developer-proposes-using-navy-reactors-for-data-centers?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Russia Plans a Nuclear Power Plant on the Moon Within a Decade](https://science.slashdot.org/story/25/12/24/1724223/russia-plans-a-nuclear-power-plant-on-the-moon-within-a-decade?utm_source=rss1.0mainlinkanon&utm_medium=feed) details ambitious plans for moon-based energy infrastructure. [Comments](https://science.slashdot.org/story/25/12/24/1724223/russia-plans-a-nuclear-power-plant-on-the-moon-within-a-decade?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Privacy and Policies

* [Italy Tells Meta To Suspend Its Policy That Bans Rival AI Chatbots From WhatsApp](https://yro.slashdot.org/story/25/12/24/1945240/italy-tells-meta-to-suspend-its-policy-that-bans-rival-ai-chatbots-from-whatsapp?utm_source=rss1.0mainlinkanon&utm_medium=feed) sheds light on regulatory conflicts with tech giants. [Comments](https://yro.slashdot.org/story/25/12/24/1945240/italy-tells-meta-to-suspend-its-policy-that-bans-rival-ai-chatbots-from-whatsapp?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Some of DOJ's Careful Redactions Can Be Defeated With Copy-Paste](https://news.slashdot.org/story/25/12/24/1710233/some-of-dojs-careful-redactions-can-be-defeated-with-copy-paste?utm_source=rss1.0mainlinkanon&utm_medium=feed) examines an oversight in sensitive document security. [Comments](https://news.slashdot.org/story/25/12/24/1710233/some-of-dojs-careful-redactions-can-be-defeated-with-copy-paste?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Historical and Cultural Insights

* [The Lost Story of Alan Turing’s Secret 'Delilah' Project](https://soylentnews.org/article.pl?sid=25/12/22/1747232&from=rss) revisits an underappreciated piece of Turing's contributions to cryptography and communications. [Comments](https://soylentnews.org/article.pl?sid=25/12/22/1747232&from=rss)

* [The e-scooter isn't new – London was zooming around on Autopeds a century ago](https://www.ianvisits.co.uk/articles/the-e-scooter-isnt-new-london-was-zooming-around-on-autopeds-a-century-ago-86263/) connects modern micromobility to its surprising historical roots. [Comments](https://www.ianvisits.co.uk/articles/the-e-scooter-isnt-new-london-was-zooming-around-on-autopeds-a-century-ago-86263/)

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

* [2025-12-25, 03:40:12](https://lobste.rs/s/z5ae9q/load_store_forwarding_toy_optimizer) - [Load and store forwarding in the Toy Optimizer](https://bernsteinbear.com/blog/toy-load-store/)
* [2025-12-25, 03:33:52](https://news.ycombinator.com/item?id=46381839) - [Python Applied Mathematics Labs](https://labs.acme.byu.edu/Pages/intro.html)
* [2025-12-25, 03:30:38](https://lobste.rs/s/n7sn45/using_vectorize_build_search_engine_160) - [Using Vectorize to build a search engine in 160 loc](https://blog.partykit.io/posts/using-vectorize-to-build-search/)
* [2025-12-25, 03:30:00](https://hardware.slashdot.org/story/25/12/24/1920243/nuclear-developer-proposes-using-navy-reactors-for-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nuclear Developer Proposes Using Navy Reactors For Data Centers](https://hardware.slashdot.org/story/25/12/24/1920243/nuclear-developer-proposes-using-navy-reactors-for-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-25, 03:29:58](https://lobste.rs/s/8ayphg/phoenix_modern_x_server_written_from) - [phoenix - A modern X server written from scratch in Zig](https://git.dec05eba.com/phoenix/about/)
* [2025-12-25, 02:59:24](https://news.ycombinator.com/item?id=46381681) - [The most damaging taboo about sexual violence](https://write.as/3k6gb4heu8whz)
* [2025-12-25, 02:15:00](https://soylentnews.org/article.pl?sid=25/12/22/1747232&amp;from=rss) - [The Lost Story of Alan Turing’s Secret “Delilah” Project](https://soylentnews.org/article.pl?sid=25/12/22/1747232&amp;from=rss)
* [2025-12-25, 01:49:38](https://lobste.rs/s/bygvwv/package_managers_keep_using_git_as) - [Package managers keep using git as a database, it never works out](https://nesbitt.io/2025/12/24/package-managers-keep-using-git-as-a-database.html)
* [2025-12-25, 01:26:38](https://lobste.rs/s/8xduvx/advent_code_2025_haskell_solution) - [Advent of Code 2025: Haskell Solution Reflections for all 12 Days](https://blog.jle.im/entry/advent-of-code-2025.html)
* [2025-12-25, 01:25:00](https://news.slashdot.org/story/25/12/24/219224/why-i-quit-streaming-and-got-back-into-cassettes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Why I Quit Streaming And Got Back Into Cassettes&apos;](https://news.slashdot.org/story/25/12/24/219224/why-i-quit-streaming-and-got-back-into-cassettes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-25, 01:16:06](https://lobste.rs/s/qy1wrx/newtype_index_pattern_zig) - [Newtype Index Pattern In Zig](https://matklad.github.io/2025/12/23/zig-newtype-index-pattern.html)
* [2025-12-25, 00:45:00](https://apple.slashdot.org/story/25/12/24/2055236/apple-to-allow-alternative-app-stores-for-ios-users-in-brazil?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple To Allow Alternative App Stores For iOS Users In Brazil](https://apple.slashdot.org/story/25/12/24/2055236/apple-to-allow-alternative-app-stores-for-ios-users-in-brazil?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-25, 00:38:09](https://news.ycombinator.com/item?id=46380953) - [The Next-Gen Mainboard Designed with AmigaOS4 and MorphOS in Mind](https://mirari.vitasys.nl/our-story/)
* [2025-12-25, 00:37:08](https://lobste.rs/s/ljfhgy/next_gen_mainboard_designed_with) - [The Next-Gen Mainboard Designed with AmigaOS4 and MorphOS in mind](https://mirari.vitasys.nl/our-story/)
* [2025-12-25, 00:20:08](https://lobste.rs/s/qq9gml/qemu_version_10_2_0_released) - [QEMU version 10.2.0 released](https://www.qemu.org/2025/12/24/qemu-10-2-0/)
* [2025-12-25, 00:10:12](https://news.ycombinator.com/item?id=46380758) - [Who Watches the Waymos? I do [video]](https://www.youtube.com/watch?v=oYU2hAbx_Fc)
* [2025-12-25, 00:02:00](https://developers.slashdot.org/story/25/12/24/1957228/apples-app-course-runs-20000-a-student-is-it-really-worth-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple&apos;s App Course Runs $20,000 a Student. Is It Really Worth It?](https://developers.slashdot.org/story/25/12/24/1957228/apples-app-course-runs-20000-a-student-is-it-really-worth-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-24, 23:33:15](https://news.ycombinator.com/item?id=46380475) - [Microsoft please get your tab to autocomplete shit together](https://ivanca.github.io/programming/2025/11/26/microsoft-pls-get-your-tab-to-autocomplete-shit-together/)
* [2025-12-24, 23:25:37](https://news.ycombinator.com/item?id=46380399) - [Asterisk AI Voice Agent](https://github.com/hkjarral/Asterisk-AI-Voice-Agent)
* [2025-12-24, 23:22:52](https://lobste.rs/s/b1vxmq/datafun_functional_language) - [Datafun - functional language that generalizes Datalog](https://www.rntz.net/datafun/)
* [2025-12-24, 23:20:00](https://tech.slashdot.org/story/25/12/24/1952241/the-phone-based-retirement-is-here?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Phone-Based Retirement Is Here](https://tech.slashdot.org/story/25/12/24/1952241/the-phone-based-retirement-is-here?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-24, 22:56:00](https://news.ycombinator.com/item?id=46380168) - [Tell HN: Merry Christmas](https://news.ycombinator.com/item?id=46380168)
* [2025-12-24, 22:43:53](https://news.ycombinator.com/item?id=46380075) - [Phoenix: A modern X server written from scratch in Zig](https://git.dec05eba.com/phoenix/about/)
* [2025-12-24, 22:40:00](https://entertainment.slashdot.org/story/25/12/24/1939236/spotify-disables-accounts-after-open-source-group-scrapes-86-million-songs-from-platform?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Spotify Disables Accounts After Open-Source Group Scrapes 86 Million Songs From Platform](https://entertainment.slashdot.org/story/25/12/24/1939236/spotify-disables-accounts-after-open-source-group-scrapes-86-million-songs-from-platform?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-24, 22:33:17](https://lobste.rs/s/rug4vo/2025_matrix_holiday_special) - [The 2025 Matrix Holiday Special](https://matrix.org/blog/2025/12/24/matrix-holiday-special/)
* [2025-12-24, 22:02:00](https://tech.slashdot.org/story/25/12/24/1819240/microsoft-says-its-not-planning-to-use-ai-to-rewrite-windows-from-c-to-rust?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Says It&apos;s Not Planning To Use AI To Rewrite Windows From C To Rust](https://tech.slashdot.org/story/25/12/24/1819240/microsoft-says-its-not-planning-to-use-ai-to-rewrite-windows-from-c-to-rust?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-24, 21:54:48](https://news.ycombinator.com/item?id=46379677) - [How I Left YouTube](https://zhach.news/how-i-left-youtube/)
* [2025-12-24, 21:40:00](https://yro.slashdot.org/story/25/12/24/1945240/italy-tells-meta-to-suspend-its-policy-that-bans-rival-ai-chatbots-from-whatsapp?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Italy Tells Meta To Suspend Its Policy That Bans Rival AI Chatbots From WhatsApp](https://yro.slashdot.org/story/25/12/24/1945240/italy-tells-meta-to-suspend-its-policy-that-bans-rival-ai-chatbots-from-whatsapp?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-24, 21:30:00](https://soylentnews.org/article.pl?sid=25/12/22/1741226&amp;from=rss) - [Research Explores the Indigenous Origins of the Hammock](https://soylentnews.org/article.pl?sid=25/12/22/1741226&amp;from=rss)
* [2025-12-24, 21:21:00](https://slashdot.org/story/25/12/24/1937204/amazon-faces-leaders-dilemma---fight-ai-shopping-bots-or-join-them?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Faces &apos;Leader&apos;s Dilemma&apos; - Fight AI Shopping Bots or Join Them](https://slashdot.org/story/25/12/24/1937204/amazon-faces-leaders-dilemma---fight-ai-shopping-bots-or-join-them?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-24, 21:20:13](https://lobste.rs/s/0zxfoh/how_jpeg_screenshots_defeated_our) - [How JPEG Screenshots Defeated Our Beautiful H.264 WebCodecs Pipeline](https://blog.helix.ml/p/we-mass-deployed-15-year-old-screen)
* [2025-12-24, 21:02:15](https://news.ycombinator.com/item?id=46379183) - [Nvidia buying AI chip startup Groq for about $20B in cash](https://www.cnbc.com/2025/12/24/nvidia-buying-ai-chip-startup-groq-for-about-20-billion-biggest-deal.html)
* [2025-12-24, 21:01:05](https://news.ycombinator.com/item?id=46379173) - [Keystone (YC S25) is hiring engineer #1 to automate coding](https://www.ycombinator.com/companies/keystone/jobs/J3t9XeM-founding-engineer)
* [2025-12-24, 20:48:53](https://news.ycombinator.com/item?id=46379076) - [Spaced repetition for efficient learning (2019)](https://gwern.net/spaced-repetition)
* [2025-12-24, 20:40:00](https://yro.slashdot.org/story/25/12/24/1910223/china-is-worried-ai-threatens-party-rule?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Is Worried AI Threatens Party Rule](https://yro.slashdot.org/story/25/12/24/1910223/china-is-worried-ai-threatens-party-rule?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-24, 20:36:49](https://lobste.rs/s/nfakle/wayback_0_3_released) - [Wayback 0.3 Released](https://wayback.freedesktop.org/news/2025/12/22/wayback-0.3-released/)
* [2025-12-24, 20:29:41](https://lobste.rs/s/8gpquu/my_second_year_linux_desktop_for_gaming) - [(My) Second Year of the Linux Desktop (For Gaming)](https://blog.matthewbrunelle.com/my-second-year-of-the-linux-desktop-for-gaming/)
* [2025-12-24, 20:00:00](https://news.slashdot.org/story/25/12/24/187259/an-amateur-codebreaker-may-have-just-solved-the-black-dahlia-and-zodiac-killings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [An Amateur Codebreaker May Have Just Solved the Black Dahlia and Zodiac Killings](https://news.slashdot.org/story/25/12/24/187259/an-amateur-codebreaker-may-have-just-solved-the-black-dahlia-and-zodiac-killings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-24, 19:42:25](https://news.ycombinator.com/item?id=46378554) - [Show HN: Minimalist editor that lives in browser, stores everything in the URL](https://github.com/antonmedv/textarea)
* [2025-12-24, 19:35:47](https://lobste.rs/s/ddgreh/curl_2025_review) - [A curl 2025 review](https://daniel.haxx.se/blog/2025/12/23/a-curl-2025-review/)
* [2025-12-24, 19:30:00](https://news.slashdot.org/story/25/12/24/1919250/european-leaders-condemn-us-visa-bans-as-row-over-censorship-escalates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [European Leaders Condemn US Visa Bans as Row Over &apos;Censorship&apos; Escalates](https://news.slashdot.org/story/25/12/24/1919250/european-leaders-condemn-us-visa-bans-as-row-over-censorship-escalates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-24, 19:05:16](https://lobste.rs/s/g1wsya/cjanet) - [cjanet](https://github.com/janet-lang/spork/blob/cjanet-jit/spork/cjanet.janet)
* [2025-12-24, 19:01:00](https://science.slashdot.org/story/25/12/24/1724223/russia-plans-a-nuclear-power-plant-on-the-moon-within-a-decade?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Russia Plans a Nuclear Power Plant on the Moon Within a Decade](https://science.slashdot.org/story/25/12/24/1724223/russia-plans-a-nuclear-power-plant-on-the-moon-within-a-decade?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-24, 18:17:47](https://news.ycombinator.com/item?id=46377862) - [Fabrice Bellard: Biography (2009) [pdf]](https://www.ipaidia.gr/wp-content/uploads/2020/12/117-2020-fabrice-bellard.pdf)
* [2025-12-24, 18:03:34](https://lobste.rs/s/fexaye/zippop_space_conserving_unzipping) - [ZipPop: a space conserving unzipping script](https://github.com/th0ma5w/ZipPop)
* [2025-12-24, 18:01:00](https://news.slashdot.org/story/25/12/24/1710233/some-of-dojs-careful-redactions-can-be-defeated-with-copy-paste?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Some of DOJ&apos;s Careful Redactions Can Be Defeated With Copy-Paste](https://news.slashdot.org/story/25/12/24/1710233/some-of-dojs-careful-redactions-can-be-defeated-with-copy-paste?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-24, 17:56:58](https://lobste.rs/s/4sn9j4/how_why_i_moved_from_apple_services_my_own) - [How and why I moved from Apple Services to my own server](https://bastiangruber.ca/posts/mass-quitting-apple/)
* [2025-12-24, 17:49:02](https://news.ycombinator.com/item?id=46377597) - [Show HN: Vibium – Browser automation for AI and humans, by Selenium&apos;s creator](https://github.com/VibiumDev/vibium)
* [2025-12-24, 17:00:00](https://entertainment.slashdot.org/story/25/12/24/1632200/what-rules-govern-hallmark-christmas-movies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What Rules Govern Hallmark Christmas Movies?](https://entertainment.slashdot.org/story/25/12/24/1632200/what-rules-govern-hallmark-christmas-movies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-24, 16:45:00](https://soylentnews.org/article.pl?sid=25/12/22/0125252&amp;from=rss) - [Nvidia Plans Heavy Cuts to GPU Supply in Early 2026](https://soylentnews.org/article.pl?sid=25/12/22/0125252&amp;from=rss)
* [2025-12-24, 16:42:04](https://lobste.rs/s/dfomel/ai_is_bad_ux) - [\&quot;AI\&quot; is bad UX](https://buttondown.com/apperceptive/archive/ai-is-bad-ux/)
* [2025-12-24, 14:03:07](https://lobste.rs/s/zrgtnx/i_m_returning_my_framework_16) - [I&apos;m returning my Framework 16](https://yorickpeterse.com/articles/im-returning-my-framework-16/)
* [2025-12-24, 13:27:50](https://news.ycombinator.com/item?id=46375384) - [When Compilers Surprise You](https://xania.org/202512/24-cunning-clang)
* [2025-12-24, 12:55:19](https://news.ycombinator.com/item?id=46375174) - [I&apos;m returning my Framework 16](https://yorickpeterse.com/articles/im-returning-my-framework-16/)
* [2025-12-24, 12:46:10](https://lobste.rs/s/mi8vrp/avoid_mini_frameworks) - [Avoid mini-frameworks](https://laike9m.com/blog/avoid-mini-frameworks,171/)
* [2025-12-24, 12:41:43](https://lobste.rs/s/irewer/implementation_optimized_vector) - [Implementation of optimized vector of strings in C++ in SumatraPDF](https://blog.kowalczyk.info/a-u2y2/implementation-of-optimized-vector-of-strings-in-c-in-sumatrapdf.html)
* [2025-12-24, 11:52:00](https://soylentnews.org/article.pl?sid=25/12/22/0124250&amp;from=rss) - [Is Talented Youth Nurtured the Wrong Way? Top Performers Develop Differently Than Assumed](https://soylentnews.org/article.pl?sid=25/12/22/0124250&amp;from=rss)
* [2025-12-24, 08:32:27](https://news.ycombinator.com/item?id=46373644) - [The e-scooter isn&apos;t new – London was zooming around on Autopeds a century ago](https://www.ianvisits.co.uk/articles/the-e-scooter-isnt-new-london-was-zooming-around-on-autopeds-a-century-ago-86263/)
* [2025-12-24, 07:10:00](https://soylentnews.org/article.pl?sid=25/12/22/0121248&amp;from=rss) - [Ford EV Battery Joint Venture Plant Lays Off All Workers](https://soylentnews.org/article.pl?sid=25/12/22/0121248&amp;from=rss)
* [2025-12-24, 02:28:00](https://soylentnews.org/article.pl?sid=25/12/22/0120207&amp;from=rss) - [Google Search Now Lets You Upload Images and PDFs for Analysis](https://soylentnews.org/article.pl?sid=25/12/22/0120207&amp;from=rss)
* [2025-12-23, 22:37:54](https://lobste.rs/s/urk73b/they_made_me_offer_i_couldn_t_refuse_1997) - [They made me an offer I couldn&apos;t refuse (1997)](http://jens.mooseyard.com/1997/04/13/they-made-me-an-offer-i-couldnt-refuse/)
* [2025-12-23, 21:41:00](https://soylentnews.org/article.pl?sid=25/12/22/0032258&amp;from=rss) - [Firefox Will Ship With an “AI Kill Switch” to Completely Disable All AI Features](https://soylentnews.org/article.pl?sid=25/12/22/0032258&amp;from=rss)
* [2025-12-23, 17:33:42](https://news.ycombinator.com/item?id=46367224) - [Fabrice Bellard Releases MicroQuickJS](https://github.com/bellard/mquickjs/blob/main/README.md)
* [2025-12-23, 16:57:00](https://soylentnews.org/article.pl?sid=25/12/22/0029209&amp;from=rss) - [A Better Zip Bomb](https://soylentnews.org/article.pl?sid=25/12/22/0029209&amp;from=rss)
* [2025-12-23, 15:53:35](https://lobste.rs/s/eqsxsc/linux_kernel_is_just_program) - [The Linux kernel is just a program](https://serversfor.dev/linux-inside-out/the-linux-kernel-is-just-a-program/)
* [2025-12-23, 14:02:13](https://lobste.rs/s/60fjs1/mquickjs_micro_quickjs_javascript) - [mquickjs: Micro QuickJS Javascript Engine](https://github.com/bellard/mquickjs)
* [2025-12-23, 12:14:00](https://soylentnews.org/article.pl?sid=25/12/21/0921233&amp;from=rss) - [Titan&apos;s Slushy Oceans](https://soylentnews.org/article.pl?sid=25/12/21/0921233&amp;from=rss)
* [2025-12-23, 07:38:18](https://lobste.rs/s/st1mpl/lightest_notes_app_implementation_111) - [The lightest notes app implementation in 111 loc](https://github.com/antonmedv/textarea)
* [2025-12-23, 07:31:00](https://soylentnews.org/article.pl?sid=25/12/21/0918231&amp;from=rss) - [New UEFI Flaw Enables Pre-Boot Attacks on Motherboards From Gigabyte, MSI, ASUS, ASRock](https://soylentnews.org/article.pl?sid=25/12/21/0918231&amp;from=rss)
* [2025-12-23, 02:44:00](https://soylentnews.org/article.pl?sid=25/12/21/0915233&amp;from=rss) - [Creating Apps Like Signal or WhatsApp Could be &apos;Hostile Activity,&apos; Claims UK Watchdog](https://soylentnews.org/article.pl?sid=25/12/21/0915233&amp;from=rss)
* [2025-12-22, 22:02:00](https://soylentnews.org/article.pl?sid=25/12/21/099243&amp;from=rss) - [Communities Are Rising Up Against Data Centers — and Winning](https://soylentnews.org/article.pl?sid=25/12/21/099243&amp;from=rss)
* [2025-12-22, 17:17:00](https://soylentnews.org/article.pl?sid=25/12/21/0855202&amp;from=rss) - [Where Do Microplastics Go Once They Sink Into the Ocean?](https://soylentnews.org/article.pl?sid=25/12/21/0855202&amp;from=rss)
* [2025-12-22, 12:32:00](https://soylentnews.org/article.pl?sid=25/12/20/1453248&amp;from=rss) - [North Korean Infiltrator Caught Working in Amazon IT Department Thanks to Keystroke Lag](https://soylentnews.org/article.pl?sid=25/12/20/1453248&amp;from=rss)
* [2025-12-22, 07:47:00](https://soylentnews.org/article.pl?sid=25/12/20/1449230&amp;from=rss) - [Google is Shutting Down its Dark Web Report Feature in January](https://soylentnews.org/article.pl?sid=25/12/20/1449230&amp;from=rss)
* [2025-12-22, 05:38:33](https://news.ycombinator.com/item?id=46351666) - [CSRF protection without tokens or hidden form fields](https://blog.miguelgrinberg.com/post/csrf-protection-without-tokens-or-hidden-form-fields)
* [2025-12-22, 03:04:00](https://soylentnews.org/article.pl?sid=25/12/20/1446230&amp;from=rss) - [Senators Count the Shady Ways Data Centers Pass Energy Costs on to Americans](https://soylentnews.org/article.pl?sid=25/12/20/1446230&amp;from=rss)
* [2025-12-21, 22:18:00](https://soylentnews.org/article.pl?sid=25/12/20/1439207&amp;from=rss) - [Google&apos;s New &apos;Disco&apos; Browser Turns Tabs Into Custom Web Apps](https://soylentnews.org/article.pl?sid=25/12/20/1439207&amp;from=rss)
* [2025-12-21, 17:36:00](https://soylentnews.org/article.pl?sid=25/12/20/1428203&amp;from=rss) - [The Secret Life of Moles: What They&apos;re Really Up to Underground](https://soylentnews.org/article.pl?sid=25/12/20/1428203&amp;from=rss)
* [2025-12-21, 16:36:25](https://news.ycombinator.com/item?id=46346026) - [Using Vectorize to build an unreasonably good search engine in 160 lines of code](https://blog.partykit.io/posts/using-vectorize-to-build-search/)
* [2025-12-21, 12:49:00](https://soylentnews.org/article.pl?sid=25/12/20/0114215&amp;from=rss) - [Public Domain Day 2026](https://soylentnews.org/article.pl?sid=25/12/20/0114215&amp;from=rss)
* [2025-12-21, 11:38:48](https://news.ycombinator.com/item?id=46344104) - [Jingle Bells (Batman Smells): An incomplete festive folk-rhyme taxonomy](https://loreandordure.com/2025/12/16/jingle-bells/)
* [2025-12-21, 08:08:00](https://soylentnews.org/article.pl?sid=25/12/20/0110218&amp;from=rss) - [Home Depot Exposed Access to Internal Systems for a Year](https://soylentnews.org/article.pl?sid=25/12/20/0110218&amp;from=rss)
* [2025-12-21, 04:40:00](https://soylentnews.org/article.pl?sid=25/12/20/016256&amp;from=rss) - [Ventoy 1.1.09 Released With Experimental Btrfs Support](https://soylentnews.org/article.pl?sid=25/12/20/016256&amp;from=rss)
* [2025-12-21, 03:17:00](https://soylentnews.org/article.pl?sid=25/12/20/018216&amp;from=rss) - [Indoor Tanning Makes Youthful Skin Much Older on a Genetic Level](https://soylentnews.org/article.pl?sid=25/12/20/018216&amp;from=rss)
