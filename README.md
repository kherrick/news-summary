# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Innovations and Releases

* [DJ With Apple Music launches to enable subscribers to mix their own sets](https://www.musicweek.com/digital/read/dj-with-apple-music-launches-to-enable-subscribers-to-mix-their-own-sets/091655) ([Comments](https://news.ycombinator.com/item?id=43489271))

* [Europen Union creates Fedora-based Linux distribution for the public sector](https://www.linuxjournal.com/content/eu-os-bold-step-toward-digital-sovereignty-europe) ([Comments](https://lobste.rs/s/rurjmx/europen_union_creates_fedora_based_linux))

* [Linux Kernel 6.14 Is a Big Leap Forward In Performance, Windows Compatibility](https://linux.slashdot.org/story/25/03/26/2110211/linux-kernel-614-is-a-big-leap-forward-in-performance-windows-compatibility?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://linux.slashdot.org/story/25/03/26/2110211/linux-kernel-614-is-a-big-leap-forward-in-performance-windows-compatibility?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Blender releases their Oscar winning version tool](https://www.blender.org/download/releases/4-4/) ([Comments](https://news.ycombinator.com/item?id=43489114))

* [Matrix Profiles](https://aneksteind.github.io/posts/2025-03-26.html) ([Comments](https://lobste.rs/s/lyifc7/matrix_profiles))

## Science and Discoveries

* [The Mysterious Flow of Fluid in the Brain](https://www.quantamagazine.org/the-mysterious-flow-of-fluid-in-the-brain-20250326/) ([Comments](https://news.ycombinator.com/item?id=43489136))

* [Study casts doubt on gluten as cause of gut ailments among non-coeliacs](https://www.theguardian.com/australia-news/2025/mar/27/gluten-intolerant-intolerance-non-coeliac-disease) ([Comments](https://news.ycombinator.com/item?id=43489118))

* [Harnessing Nature's Fractals for Flexible Electronics: Biomimetic Fabrication Technique Uses Leaf](https://soylentnews.org/article.pl?sid=25/03/24/1815205&from=rss) ([Comments](https://soylentnews.org/article.pl?sid=25/03/24/1815205&from=rss))

* [Decades-Long Quest Leads to New Antibiotic Compounds](https://soylentnews.org/article.pl?sid=25/03/24/1454238&from=rss) ([Comments](https://soylentnews.org/article.pl?sid=25/03/24/1454238&from=rss))

## Privacy, Security, and Regulation

* [Oracle customers confirm data stolen in alleged cloud breach is valid](https://www.bleepingcomputer.com/news/security/oracle-customers-confirm-data-stolen-in-alleged-cloud-breach-is-valid/) ([Comments](https://news.ycombinator.com/item?id=43486945))

* [How to Delete Your 23andMe Data](https://www.eff.org/deeplinks/2025/03/how-delete-your-23andme-data) ([Comments](https://news.ycombinator.com/item?id=43486236))

* [Sperm Donation Giant California Cryobank Warns of a Data Breach](https://soylentnews.org/article.pl?sid=25/03/24/0335233&from=rss) ([Comments](https://soylentnews.org/article.pl?sid=25/03/24/0335233&from=rss))

* [Malware found on NPM infecting local package with reverse shell](https://www.reversinglabs.com/blog/malicious-npm-patch-delivers-reverse-shell) ([Comments](https://news.ycombinator.com/item?id=43484845))

## Corporate and Policy Developments

* [Fidelity Prepares To Unveil Its Own Stablecoin](https://news.slashdot.org/story/25/03/26/2321223/fidelity-prepares-to-unveil-its-own-stablecoin?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.slashdot.org/story/25/03/26/2321223/fidelity-prepares-to-unveil-its-own-stablecoin?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [US Expands Export Blacklist To Keep Computing Tech Out of China](https://hardware.slashdot.org/story/25/03/26/2053233/us-expands-export-blacklist-to-keep-computing-tech-out-of-china?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://hardware.slashdot.org/story/25/03/26/2053233/us-expands-export-blacklist-to-keep-computing-tech-out-of-china?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Google will now develop the Android OS in private](https://www.androidauthority.com/google-android-development-aosp-3538503/) ([Comments](https://lobste.rs/s/b2yv9c/google_will_now_develop_android_os))

* [VMware Sues Siemens For Allegedly Using Unlicensed Software](https://slashdot.org/story/25/03/26/2030219/vmware-sues-siemens-for-allegedly-using-unlicensed-software?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://slashdot.org/story/25/03/26/2030219/vmware-sues-siemens-for-allegedly-using-unlicensed-software?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Signal President Blasts WhatsApp's Privacy Claims](https://it.slashdot.org/story/25/03/26/1536221/signal-president-blasts-whatsapps-privacy-claims?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://it.slashdot.org/story/25/03/26/1536221/signal-president-blasts-whatsapps-privacy-claims?utm_source=rss1.0mainlinkanon&utm_medium=feed))

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

* [2025-03-27, 01:02:00](https://soylentnews.org/article.pl?sid=25/03/26/033246&from=rss) - [The Search for Missing Plane MH370 is Back on](https://soylentnews.org/article.pl?sid=25/03/26/033246&from=rss)
* [2025-03-27, 00:51:30](https://news.ycombinator.com/item?id=43489271) - [DJ With Apple Music launches to enable subscribers to mix their own sets](https://www.musicweek.com/digital/read/dj-with-apple-music-launches-to-enable-subscribers-to-mix-their-own-sets/091655)
* [2025-03-27, 00:50:00](https://news.slashdot.org/story/25/03/26/2321223/fidelity-prepares-to-unveil-its-own-stablecoin?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Fidelity Prepares To Unveil Its Own Stablecoin](https://news.slashdot.org/story/25/03/26/2321223/fidelity-prepares-to-unveil-its-own-stablecoin?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-27, 00:45:45](https://lobste.rs/s/rurjmx/europen_union_creates_fedora_based_linux) - [Europen Union creates Fedora-based Linux distribution for the public sector](https://www.linuxjournal.com/content/eu-os-bold-step-toward-digital-sovereignty-europe)
* [2025-03-27, 00:31:47](https://news.ycombinator.com/item?id=43489136) - [The Mysterious Flow of Fluid in the Brain](https://www.quantamagazine.org/the-mysterious-flow-of-fluid-in-the-brain-20250326/)
* [2025-03-27, 00:29:04](https://news.ycombinator.com/item?id=43489118) - [Study casts doubt on gluten as cause of gut ailments among non-coeliacs](https://www.theguardian.com/australia-news/2025/mar/27/gluten-intolerant-intolerance-non-coeliac-disease)
* [2025-03-27, 00:27:03](https://news.ycombinator.com/item?id=43489114) - [Blender releases their Oscar winning version tool](https://www.blender.org/download/releases/4-4/)
* [2025-03-27, 00:20:27](https://lobste.rs/s/lyifc7/matrix_profiles) - [Matrix Profiles](https://aneksteind.github.io/posts/2025-03-26.html)
* [2025-03-27, 00:10:00](https://linux.slashdot.org/story/25/03/26/2110211/linux-kernel-614-is-a-big-leap-forward-in-performance-windows-compatibility?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Linux Kernel 6.14 Is a Big Leap Forward In Performance, Windows Compatibility](https://linux.slashdot.org/story/25/03/26/2110211/linux-kernel-614-is-a-big-leap-forward-in-performance-windows-compatibility?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-26, 23:30:00](https://news.slashdot.org/story/25/03/26/211250/over-4-million-gen-zers-are-jobless?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Over 4 Million Gen Zers Are Jobless](https://news.slashdot.org/story/25/03/26/211250/over-4-million-gen-zers-are-jobless?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-26, 22:50:00](https://hardware.slashdot.org/story/25/03/26/2053233/us-expands-export-blacklist-to-keep-computing-tech-out-of-china?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [US Expands Export Blacklist To Keep Computing Tech Out of China](https://hardware.slashdot.org/story/25/03/26/2053233/us-expands-export-blacklist-to-keep-computing-tech-out-of-china?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-26, 22:44:00](https://lobste.rs/s/b2yv9c/google_will_now_develop_android_os) - [Google will now develop the Android OS in private](https://www.androidauthority.com/google-android-development-aosp-3538503/)
* [2025-03-26, 22:11:44](https://lobste.rs/s/9xkrhc/hyperlight_wasm_fast_secure_os_free) - [Hyperlight Wasm: Fast, secure, and OS-free](https://opensource.microsoft.com/blog/2025/03/26/hyperlight-wasm-fast-secure-and-os-free/)
* [2025-03-26, 22:10:00](https://news.slashdot.org/story/25/03/26/2035210/business-schools-are-back?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Business Schools Are Back](https://news.slashdot.org/story/25/03/26/2035210/business-schools-are-back?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-26, 21:55:42](https://lobste.rs/s/avdvvx/very_early_play_with_astral_s_red_knot) - [A Very (!) Early Play With Astral's Red Knot Static Type Checker](https://jurasofish.github.io/a-very-early-play-with-astrals-red-knot-static-type-checker.html)
* [2025-03-26, 21:30:00](https://slashdot.org/story/25/03/26/2030219/vmware-sues-siemens-for-allegedly-using-unlicensed-software?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [VMware Sues Siemens For Allegedly Using Unlicensed Software](https://slashdot.org/story/25/03/26/2030219/vmware-sues-siemens-for-allegedly-using-unlicensed-software?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-26, 21:13:47](https://lobste.rs/s/hhi7vb/commandments_reproducible_builds) - [Commandments of reproducible builds](https://reproducible-builds.org/docs/commandments/)
* [2025-03-26, 20:50:00](https://news.slashdot.org/story/25/03/26/2017227/google-will-develop-the-android-os-fully-in-private?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google Will Develop the Android OS Fully In Private](https://news.slashdot.org/story/25/03/26/2017227/google-will-develop-the-android-os-fully-in-private?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-26, 20:35:46](https://news.ycombinator.com/item?id=43486997) - [Building a Linux Container Runtime from Scratch](https://edera.dev/stories/styrolite)
* [2025-03-26, 20:31:13](https://news.ycombinator.com/item?id=43486945) - [Oracle customers confirm data stolen in alleged cloud breach is valid](https://www.bleepingcomputer.com/news/security/oracle-customers-confirm-data-stolen-in-alleged-cloud-breach-is-valid/)
* [2025-03-26, 20:20:00](https://soylentnews.org/article.pl?sid=25/03/26/0237223&from=rss) - [Producing Wafers at TSMC Arizona is Only 10% More Expensive Than in Taiwan](https://soylentnews.org/article.pl?sid=25/03/26/0237223&from=rss)
* [2025-03-26, 20:14:00](https://slashdot.org/story/25/03/26/2014204/dells-staff-numbers-have-dropped-by-25000-in-just-2-years?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Dell's Staff Numbers Have Dropped By 25,000 in Just 2 Years](https://slashdot.org/story/25/03/26/2014204/dells-staff-numbers-have-dropped-by-25000-in-just-2-years?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-26, 20:08:32](https://news.ycombinator.com/item?id=43486647) - [Building a Firecracker-Powered Course Platform to Learn Docker and Kubernetes](https://iximiuz.com/en/posts/iximiuz-labs-story/)
* [2025-03-26, 19:45:07](https://lobste.rs/s/dygvyk/revisiting_css_border_image) - [Revisiting CSS border-image](https://css-tricks.com/revisiting-css-border-image/)
* [2025-03-26, 19:41:20](https://news.ycombinator.com/item?id=43486236) - [How to Delete Your 23andMe Data](https://www.eff.org/deeplinks/2025/03/how-delete-your-23andme-data)
* [2025-03-26, 19:23:36](https://news.ycombinator.com/item?id=43485980) - [Problems with the heap](https://rachelbythebay.com/w/2025/03/26/atop/)
* [2025-03-26, 19:22:16](https://lobste.rs/s/llixz2/blasting_past_webp) - [Blasting Past Webp](https://googleprojectzero.blogspot.com/2025/03/blasting-past-webp.html)
* [2025-03-26, 19:17:31](https://lobste.rs/s/mvlkdq/servo_vs_ladybird) - [Servo vs Ladybird](https://thelibre.news/servo-vs-ladybird/)
* [2025-03-26, 19:07:39](https://news.ycombinator.com/item?id=43485740) - [Playwright Tools for MCP](https://github.com/microsoft/playwright-mcp)
* [2025-03-26, 18:55:29](https://news.ycombinator.com/item?id=43485566) - [OpenAI adds MCP support to Agents SDK](https://openai.github.io/openai-agents-python/mcp/)
* [2025-03-26, 18:32:00](https://slashdot.org/story/25/03/26/1832216/microsoft-abandons-data-center-projects-td-cowen-says?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Abandons Data Center Projects, TD Cowen Says](https://slashdot.org/story/25/03/26/1832216/microsoft-abandons-data-center-projects-td-cowen-says?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-26, 17:53:47](https://news.ycombinator.com/item?id=43484845) - [Malware found on NPM infecting local package with reverse shell](https://www.reversinglabs.com/blog/malicious-npm-patch-delivers-reverse-shell)
* [2025-03-26, 17:23:17](https://lobste.rs/s/rckxbp/you_just_can_t_be_googling_select) - [You just can’t be Googling ‘Select’](https://sophiabits.com/blog/you-just-cant-be-googling-select)
* [2025-03-26, 17:22:22](https://news.ycombinator.com/item?id=43484520) - [Debian bookworm live images now reproducible](https://lwn.net/Articles/1015402/)
* [2025-03-26, 17:22:00](https://news.slashdot.org/story/25/03/26/172241/who-wins-nobel-prizes?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Who Wins Nobel Prizes?](https://news.slashdot.org/story/25/03/26/172241/who-wins-nobel-prizes?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-26, 17:10:30](https://news.ycombinator.com/item?id=43484399) - [Sharding Pgvector](https://pgdog.dev/blog/sharding-pgvector)
* [2025-03-26, 17:08:56](https://news.ycombinator.com/item?id=43484382) - [A love letter to the CSV format](https://github.com/medialab/xan/blob/master/docs/LOVE_LETTER.md)
* [2025-03-26, 17:00:00](https://news.ycombinator.com/item?id=43484283) - [Weave (YC W25) is hiring a founding product engineer](https://www.ycombinator.com/companies/weave-3/jobs/E0LFOgu-founding-product-engineer)
* [2025-03-26, 16:50:47](https://lobste.rs/s/tzqlyn/ferrous_systems_donates_ferrocene) - [Ferrous Systems Donates Ferrocene Language Specification to Rust Project](https://rustfoundation.org/media/ferrous-systems-donates-ferrocene-language-specification-to-rust-project/)
* [2025-03-26, 16:45:00](https://slashdot.org/story/25/03/26/1641211/quitting-your-job-wont-help-you-get-paid-more-money-right-now?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Quitting Your Job Won't Help You Get Paid More Money Right Now](https://slashdot.org/story/25/03/26/1641211/quitting-your-job-wont-help-you-get-paid-more-money-right-now?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-26, 16:29:49](https://lobste.rs/s/pyvuuk/good_bye_core_types_hello_go_as_we_know_love) - [Good-bye core types; Hello Go as we know and love it](https://go.dev/blog/coretypes)
* [2025-03-26, 16:18:14](https://news.ycombinator.com/item?id=43483842) - [Good-bye core types; Hello Go as we know and love it](https://go.dev/blog/coretypes)
* [2025-03-26, 16:15:31](https://news.ycombinator.com/item?id=43483802) - [Kilo Code: Speedrunning open source coding AI](https://blog.kilocode.ai/p/kilo-code-speedrunning-open-source-coding-ai)
* [2025-03-26, 16:05:00](https://it.slashdot.org/story/25/03/26/1536221/signal-president-blasts-whatsapps-privacy-claims?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Signal President Blasts WhatsApp's Privacy Claims](https://it.slashdot.org/story/25/03/26/1536221/signal-president-blasts-whatsapps-privacy-claims?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-26, 16:02:56](https://news.ycombinator.com/item?id=43483660) - [Botswana Successfully Launches First Satellite, Botsat-1](https://spaceinafrica.com/2025/03/15/botswana-successfully-launches-first-satellite-botsat-1/)
* [2025-03-26, 15:35:00](https://soylentnews.org/article.pl?sid=25/03/26/0243240&from=rss) - [4-Day Work-Week UK Pilot Due in Tech Land by Early Summer](https://soylentnews.org/article.pl?sid=25/03/26/0243240&from=rss)
* [2025-03-26, 15:22:00](https://entertainment.slashdot.org/story/25/03/26/1518225/streaming-services-are-facing-identity-crisis-research-shows?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Streaming Services Are Facing Identity Crisis, Research Shows](https://entertainment.slashdot.org/story/25/03/26/1518225/streaming-services-are-facing-identity-crisis-research-shows?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-26, 14:44:00](https://news.slashdot.org/story/25/03/26/1443258/london-bans-most-e-bikes-on-public-transport-over-fire-risk?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [London Bans Most E-Bikes on Public Transport Over Fire Risk](https://news.slashdot.org/story/25/03/26/1443258/london-bans-most-e-bikes-on-public-transport-over-fire-risk?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-26, 14:34:32](https://news.ycombinator.com/item?id=43482705) - [Collapse OS](http://collapseos.org/)
* [2025-03-26, 14:28:43](https://lobste.rs/s/riiqce/what_s_new_neovim_0_11) - [What's New in Neovim 0.11](https://gpanders.com/blog/whats-new-in-neovim-0-11/)
* [2025-03-26, 14:20:57](https://lobste.rs/s/xgci6l/you_should_know_this_before_choosing_next) - [You should know this before choosing Next.js](https://eduardoboucas.com/posts/2025-03-25-you-should-know-this-before-choosing-nextjs/)
* [2025-03-26, 14:18:19](https://lobste.rs/s/zekdwq/pi_pico_rx_crystal_radio_for_digital_age) - [Pi Pico Rx - A crystal radio for the digital age?](https://101-things.readthedocs.io/en/latest/radio_receiver.html)
* [2025-03-26, 14:03:00](https://apple.slashdot.org/story/25/03/26/1411217/apple-barred-from-google-antitrust-trial-20-billion-search-deal-at-risk?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Apple Barred From Google Antitrust Trial, $20 Billion Search Deal at Risk](https://apple.slashdot.org/story/25/03/26/1411217/apple-barred-from-google-antitrust-trial-20-billion-search-deal-at-risk?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-26, 14:01:50](https://lobste.rs/s/qmfk8h/peg_parsing_series_2019) - [PEG parsing series (2019)](https://medium.com/@gvanrossum_83706/peg-parsing-series-de5d41b2ed60)
* [2025-03-26, 13:57:11](https://lobste.rs/s/ntn1jv/antirez_wants_make_redis_open_source) - [antirez wants to make Redis open source, again](https://youtu.be/Q3PgpCzEnks)
* [2025-03-26, 13:21:51](https://news.ycombinator.com/item?id=43482005) - [The long-awaited Friend Compound laws in California](https://supernuclear.substack.com/p/the-long-awaited-friend-compound)
* [2025-03-26, 12:40:32](https://lobste.rs/s/1huwaa/introduction_monoio_high_performance) - [Introduction to Monoio: A High-Performance Rust Runtime](https://chesedo.me/blog/monoio-introduction/)
* [2025-03-26, 10:53:00](https://soylentnews.org/article.pl?sid=25/03/24/1817219&from=rss) - [European Coalition Pushes For Second Chips Act Funding To Boost Semiconductor Sector](https://soylentnews.org/article.pl?sid=25/03/24/1817219&from=rss)
* [2025-03-26, 06:10:00](https://soylentnews.org/article.pl?sid=25/03/24/1815205&from=rss) - [Harnessing Nature's Fractals for Flexible Electronics: Biomimetic Fabrication Technique Uses Leaf](https://soylentnews.org/article.pl?sid=25/03/24/1815205&from=rss)
* [2025-03-26, 05:26:54](https://lobste.rs/s/dkc0eq/kill_math_2011) - [Kill Math (2011)](https://worrydream.com/KillMath/)
* [2025-03-26, 04:58:48](https://lobste.rs/s/seqpx7/what_is_plus_times_plus) - [What is plus times plus?](https://youtu.be/RcVA8Nj6HEo)
* [2025-03-26, 04:34:11](https://lobste.rs/s/qpqrzb/shrink_your_go_binaries_with_this_one) - [Shrink your Go binaries with this one weird trick (2016)](https://words.filippo.io/shrink-your-go-binaries-with-this-one-weird-trick/)
* [2025-03-26, 02:52:47](https://lobste.rs/s/ec6ro8/don_t_bring_slop_slop_fight) - [Don't bring slop to a slop fight](https://sethmlarson.dev/dont-bring-slop-to-a-slop-fight)
* [2025-03-26, 01:25:00](https://soylentnews.org/article.pl?sid=25/03/24/1812238&from=rss) - [The 25 Years of Finnix](https://soylentnews.org/article.pl?sid=25/03/24/1812238&from=rss)
* [2025-03-26, 00:32:28](https://lobste.rs/s/jaxxly/you_might_want_stop_running_atop) - [You might want to stop running atop](https://rachelbythebay.com/w/2025/03/25/atop/)
* [2025-03-25, 20:38:00](https://soylentnews.org/article.pl?sid=25/03/24/154217&from=rss) - [Device Enables Direct Communication Among Multiple Quantum Processors](https://soylentnews.org/article.pl?sid=25/03/24/154217&from=rss)
* [2025-03-25, 18:47:37](https://news.ycombinator.com/item?id=43474490) - [MCP server for Ghidra](https://github.com/LaurieWired/GhidraMCP)
* [2025-03-25, 17:02:33](https://news.ycombinator.com/item?id=43473495) - [Has the decline of knowledge work begun?](https://www.nytimes.com/2025/03/25/business/economy/white-collar-layoffs.html)
* [2025-03-25, 15:52:00](https://soylentnews.org/article.pl?sid=25/03/24/1454238&from=rss) - [Decades-Long Quest Leads to New Antibiotic Compounds](https://soylentnews.org/article.pl?sid=25/03/24/1454238&from=rss)
* [2025-03-25, 15:07:48](https://lobste.rs/s/yt4eqa/land_ahoy_leaving_sea_nodes) - [Land ahoy: leaving the Sea of Nodes](https://v8.dev/blog/leaving-the-sea-of-nodes)
* [2025-03-25, 12:01:58](https://lobste.rs/s/kjbpoh/better_shell_history_search) - [Better Shell History Search](https://tratt.net/laurie/blog/2025/better_shell_history_search.html)
* [2025-03-25, 11:09:00](https://soylentnews.org/article.pl?sid=25/03/24/0347235&from=rss) - [Squirrels Inspire Leaping Strategy for Salto Robot](https://soylentnews.org/article.pl?sid=25/03/24/0347235&from=rss)
* [2025-03-25, 06:24:00](https://soylentnews.org/article.pl?sid=25/03/24/0335233&from=rss) - [Sperm Donation Giant California Cryobank Warns of a Data Breach](https://soylentnews.org/article.pl?sid=25/03/24/0335233&from=rss)
* [2025-03-25, 01:37:00](https://soylentnews.org/article.pl?sid=25/03/23/1454225&from=rss) - [Cement Sand Substitute Made Directly From Seawater, Electricity and CO2](https://soylentnews.org/article.pl?sid=25/03/23/1454225&from=rss)
* [2025-03-24, 20:52:00](https://soylentnews.org/article.pl?sid=25/03/23/1444231&from=rss) - [\"Old Stump\" in Texas Turns Out to be Incredibly Rare Mammoth Tusk](https://soylentnews.org/article.pl?sid=25/03/23/1444231&from=rss)
* [2025-03-24, 16:09:00](https://soylentnews.org/article.pl?sid=25/03/23/1439235&from=rss) - [AMD Launches Gaia Open Source Project for Running LLMs Locally on Any PC](https://soylentnews.org/article.pl?sid=25/03/23/1439235&from=rss)
* [2025-03-24, 11:27:00](https://soylentnews.org/article.pl?sid=25/03/23/1437244&from=rss) - [Italy Demands Google Poison DNS Under Strict Piracy Shield Law](https://soylentnews.org/article.pl?sid=25/03/23/1437244&from=rss)
* [2025-03-24, 08:53:23](https://news.ycombinator.com/item?id=43458738) - [Writing a tiny undo/redo stack in JavaScript](https://blog.julik.nl/2025/03/a-tiny-undo-stack)
* [2025-03-24, 06:42:00](https://soylentnews.org/article.pl?sid=25/03/23/1435254&from=rss) - [Microsoft Trust Signing Service Abused to Code-Sign Malware](https://soylentnews.org/article.pl?sid=25/03/23/1435254&from=rss)
* [2025-03-24, 01:55:00](https://soylentnews.org/article.pl?sid=25/03/23/1422252&from=rss) - [Autopsies Can Reveal Intimate Health Details. Should They be Kept Private?](https://soylentnews.org/article.pl?sid=25/03/23/1422252&from=rss)
* [2025-03-23, 21:10:00](https://soylentnews.org/article.pl?sid=25/03/22/1921254&from=rss) - [First Stroke Rehabilitation Drug That Reestablishes Brain Connections Discovered in Mouse Model](https://soylentnews.org/article.pl?sid=25/03/22/1921254&from=rss)
* [2025-03-23, 16:23:00](https://soylentnews.org/article.pl?sid=25/03/22/1919201&from=rss) - [Why Don't New Cars Come With Spare Tires Anymore?](https://soylentnews.org/article.pl?sid=25/03/22/1919201&from=rss)
* [2025-03-23, 14:01:49](https://news.ycombinator.com/item?id=43452990) - [NotaGen: Symbolic Music Generation](https://electricalexis.github.io/notagen-demo/)
* [2025-03-23, 13:27:26](https://news.ycombinator.com/item?id=43452789) - [Writing Programs with Ncurses](https://invisible-island.net/ncurses/ncurses-intro.html)
* [2025-03-23, 11:38:00](https://soylentnews.org/article.pl?sid=25/03/22/1912255&from=rss) - [US Court of Appeals Unanimously Denies Copyright Protection for AI-Created Images](https://soylentnews.org/article.pl?sid=25/03/22/1912255&from=rss)
* [2025-03-23, 10:02:02](https://news.ycombinator.com/item?id=43451935) - [Heap-overflowing Llama.cpp to RCE](https://retr0.blog/blog/llama-rpc-rce)
* [2025-03-23, 07:31:15](https://news.ycombinator.com/item?id=43451406) - [Gemma3 Function Calling](https://ai.google.dev/gemma/docs/capabilities/function-calling)
* [2025-03-23, 06:52:00](https://soylentnews.org/article.pl?sid=25/03/22/199248&from=rss) - [Cloudflare Turns AI Against Itself With Endless Maze of Irrelevant Facts](https://soylentnews.org/article.pl?sid=25/03/22/199248&from=rss)
* [2025-03-23, 02:07:00](https://soylentnews.org/article.pl?sid=25/03/22/198241&from=rss) - [Linux Security Hardening Cache Randomization Was Inadvertently Using The Same Seed](https://soylentnews.org/article.pl?sid=25/03/22/198241&from=rss)
