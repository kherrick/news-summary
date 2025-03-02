# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Science Innovations

* [A voice model significantly more human-like than OpenAIs advanced voice](https://www.sesame.com/research/crossing_the_uncanny_valley_of_voice) ([comments](https://news.ycombinator.com/item?id=43227881))

* [Nebu: a spreadsheet editor for Varvara](https://wiki.xxiivv.com/site/nebu) ([comments](https://lobste.rs/s/zjj9p1/nebu_spreadsheet_editor_for_varvara))

* [Engineers Create Lightweight Multi-Color Fresnel Lens for Telescopes](https://soylentnews.org/article.pl?sid=25/03/01/152214&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/03/01/152214&from=rss))

* [Making o1, o3, and Sonnet 3.7 Hallucinate for Everyone](https://bengarcia.dev/making-o1-o3-and-sonnet-3-7-hallucinate-for-everyone) ([comments](https://lobste.rs/s/nvoykv/making_o1_o3_sonnet_3_7_hallucinate_for))

* [Nginx Explorer - Upload](https://blog.izissise.net/posts/ngxp-upload/) ([comments](https://lobste.rs/s/pul56b/nginx_explorer_upload))

* [New Research Suggests Ancient Ocean on Mars](https://science.slashdot.org/story/25/03/01/0719208/new-research-suggests-ancient-ocean-on-mars?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://science.slashdot.org/story/25/03/01/0719208/new-research-suggests-ancient-ocean-on-mars?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Artificial Intelligence and Reverse Engineering

* [27-Year-Old EXE Became Python In Minutes. Is AI-Assisted Reverse Engineering Next?](https://developers.slashdot.org/story/25/03/01/2211210/27-year-old-exe-became-python-in-minutes-is-ai-assisted-reverse-engineering-next?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://developers.slashdot.org/story/25/03/01/2211210/27-year-old-exe-became-python-in-minutes-is-ai-assisted-reverse-engineering-next?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [AI-assisted creativity and the race to claim the future](https://kyefox.com/ai-assisted-creativity/) ([comments](https://lobste.rs/s/uai6m2/ai_assisted_creativity_race_claim_future))

## Space and Exploration

* [Firefly Blue Ghost Mission 1 Lunar Landing](https://plus.nasa.gov/scheduled-video/firefly-blue-ghost-mission-1-lunar-landing/) ([comments](https://news.ycombinator.com/item?id=43224107))

* [Euclid finds complete Einstein Ring in NGC galaxy](https://www.euclid-ec.org/einstein-ring-in-ngc-6505/) ([comments](https://news.ycombinator.com/item?id=43223596))

* [Chinese Scientists Developing Mars Drone That Can Roll and Fly](https://science.slashdot.org/story/25/03/01/0116201/chinese-scientists-developing-mars-drone-that-can-roll-and-fly?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://science.slashdot.org/story/25/03/01/0116201/chinese-scientists-developing-mars-drone-that-can-roll-and-fly?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Societal and Environmental Issues

* [Utah Could Become America's First State To Ban Fluoride In Public Water](https://yro.slashdot.org/story/25/03/01/2316220/utah-could-become-americas-first-state-to-ban-fluoride-in-public-water?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://yro.slashdot.org/story/25/03/01/2316220/utah-could-become-americas-first-state-to-ban-fluoride-in-public-water?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Five Days of Ultra-Processed Food: Study Finds That's Enough to Alter the Brain](https://soylentnews.org/article.pl?sid=25/02/28/0659242&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/02/28/0659242&from=rss))

* [Water Chlorination Might Be Raising Our Risk Of Certain Cancers](https://soylentnews.org/article.pl?sid=25/02/28/0647213&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/02/28/0647213&from=rss))

## Technological Failures and Concerns

* [Mozilla site down due to "overdue hosting payments"](https://linuxmom.net/@vkc/114089626244932902) ([comments](https://news.ycombinator.com/item?id=43226089))

* [Microsoft Outage Leaves Tens of Thousands Unable to Access Email and Other Apps](https://slashdot.org/story/25/03/01/2348212/microsoft-outage-leaves-tens-of-thousands-unable-to-access-email-and-other-apps?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://slashdot.org/story/25/03/01/2348212/microsoft-outage-leaves-tens-of-thousands-unable-to-access-email-and-other-apps?utm_source=rss1.0mainlinkanon&utm_medium=feed))

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

* [2025-03-02, 06:13:01](https://news.ycombinator.com/item?id=43227881) - [A voice model significantly more human-like than OpenAIs advanced voice](https://www.sesame.com/research/crossing_the_uncanny_valley_of_voice)
* [2025-03-02, 04:34:00](https://developers.slashdot.org/story/25/03/01/2211210/27-year-old-exe-became-python-in-minutes-is-ai-assisted-reverse-engineering-next?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [27-Year-Old EXE Became Python In Minutes.  Is AI-Assisted Reverse Engineering Next?](https://developers.slashdot.org/story/25/03/01/2211210/27-year-old-exe-became-python-in-minutes-is-ai-assisted-reverse-engineering-next?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-02, 03:09:31](https://lobste.rs/s/zjj9p1/nebu_spreadsheet_editor_for_varvara) - [Nebu: a spreadsheet editor for Varvara](https://wiki.xxiivv.com/site/nebu)
* [2025-03-02, 02:34:00](https://yro.slashdot.org/story/25/03/01/2316220/utah-could-become-americas-first-state-to-ban-fluoride-in-public-water?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Utah Could Become America's First State To Ban Fluoride In Public Water](https://yro.slashdot.org/story/25/03/01/2316220/utah-could-become-americas-first-state-to-ban-fluoride-in-public-water?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-02, 02:31:00](https://soylentnews.org/article.pl?sid=25/03/01/152214&from=rss) - [Engineers Create Lightweight Multi-Color Fresnel Lens for Telescopes](https://soylentnews.org/article.pl?sid=25/03/01/152214&from=rss)
* [2025-03-02, 01:20:17](https://news.ycombinator.com/item?id=43226089) - [Mozilla site down due to \"overdue hosting payments\"](https://linuxmom.net/@vkc/114089626244932902)
* [2025-03-02, 00:47:23](https://news.ycombinator.com/item?id=43225886) - [Passing the Buck: The story of the 2022 Wings Over Dallas air show collision](https://admiralcloudberg.medium.com/passing-the-buck-the-story-of-the-2022-wings-over-dallas-air-show-collision-9bbe5947297b)
* [2025-03-02, 00:18:21](https://news.ycombinator.com/item?id=43225686) - [The early days of Linux (2023)](https://lwn.net/Articles/928581/)
* [2025-03-02, 00:05:30](https://news.ycombinator.com/item?id=43225560) - [How Flash games shaped the video game industry (2020)](https://www.flashgamehistory.com/)
* [2025-03-01, 23:51:00](https://slashdot.org/story/25/03/01/2348212/microsoft-outage-leaves-tens-of-thousands-unable-to-access-email-and-other-apps?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Outage Leaves Tens of Thousands Unable to Access Email and Other Apps](https://slashdot.org/story/25/03/01/2348212/microsoft-outage-leaves-tens-of-thousands-unable-to-access-email-and-other-apps?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-01, 23:09:57](https://lobste.rs/s/osinlb/infrastructural_problems) - [Infrastructural problems and instabilities caused by cloud services](https://mental-reverb.com/blog.php?id=15)
* [2025-03-01, 22:58:35](https://lobste.rs/s/eajqg1/python_is_not_java_c_python_as_second) - [Python is not Java or C++: Python as a second language empathy (2018)](https://ballingt.com/python-second-language-empathy/)
* [2025-03-01, 22:34:00](https://slashdot.org/story/25/03/01/209255/amd-reveals-rdna-4-gpu-architecture-powering-next-gen-radeon-rx-9070-cards?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [AMD Reveals RDNA 4 GPU Architecture Powering Next Gen Radeon RX 9070 Cards](https://slashdot.org/story/25/03/01/209255/amd-reveals-rdna-4-gpu-architecture-powering-next-gen-radeon-rx-9070-cards?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-01, 21:53:34](https://news.ycombinator.com/item?id=43224107) - [Firefly Blue Ghost Mission 1 Lunar Landing](https://plus.nasa.gov/scheduled-video/firefly-blue-ghost-mission-1-lunar-landing/)
* [2025-03-01, 21:49:00](https://soylentnews.org/article.pl?sid=25/03/01/0115227&from=rss) - [SpaceX: Actually, Dying Starlink Satellites Don't Always Fully Burn Up](https://soylentnews.org/article.pl?sid=25/03/01/0115227&from=rss)
* [2025-03-01, 21:34:00](https://news.slashdot.org/story/25/03/01/2111254/mozilla-revises-firefoxs-terms-of-use-clarifies-that-they-dont-own-your-data?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Mozilla Revises Firefox's Terms of Use, Clarifies That They Don't Own Your Data](https://news.slashdot.org/story/25/03/01/2111254/mozilla-revises-firefoxs-terms-of-use-clarifies-that-they-dont-own-your-data?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-01, 21:11:26](https://news.ycombinator.com/item?id=43223718) - [Show HN: Berlin Swapfest – Electronics flea market](https://www.swapfest.berlin/)
* [2025-03-01, 20:58:18](https://lobste.rs/s/nvoykv/making_o1_o3_sonnet_3_7_hallucinate_for) - [Making o1, o3, and Sonnet 3.7 Hallucinate for Everyone](https://bengarcia.dev/making-o1-o3-and-sonnet-3-7-hallucinate-for-everyone)
* [2025-03-01, 20:56:03](https://news.ycombinator.com/item?id=43223596) - [Euclid finds complete Einstein Ring in NGC galaxy](https://www.euclid-ec.org/einstein-ring-in-ngc-6505/)
* [2025-03-01, 20:34:00](https://science.slashdot.org/story/25/03/01/0719208/new-research-suggests-ancient-ocean-on-mars?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [New Research Suggests Ancient Ocean on Mars](https://science.slashdot.org/story/25/03/01/0719208/new-research-suggests-ancient-ocean-on-mars?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-01, 19:55:43](https://lobste.rs/s/nzjtop/user_defined_order_sql_2018) - [User-defined Order in SQL (2018)](https://begriffs.com/posts/2018-03-20-user-defined-order.html)
* [2025-03-01, 19:34:00](https://developers.slashdot.org/story/25/03/01/0548217/perls-cpan-security-group-is-now-a-cna-can-assign-cves?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Perl's CPAN Security Group is Now a CNA, Can Assign CVEs](https://developers.slashdot.org/story/25/03/01/0548217/perls-cpan-security-group-is-now-a-cna-can-assign-cves?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-01, 19:33:41](https://news.ycombinator.com/item?id=43222791) - [GLP-1 drugs: An economic disruptor? (2024)](https://wildfirelabs.substack.com/p/the-100-trillion-disruption-the-unforeseen)
* [2025-03-01, 19:07:21](https://lobste.rs/s/pul56b/nginx_explorer_upload) - [Nginx Explorer - Upload](https://blog.izissise.net/posts/ngxp-upload/)
* [2025-03-01, 18:53:20](https://news.ycombinator.com/item?id=43222344) - [Abusing C to implement JSON parsing with struct methods](https://xnacly.me/posts/2025/json-parser-in-c-with-methods/)
* [2025-03-01, 18:37:09](https://news.ycombinator.com/item?id=43222168) - [Efabless – Shutdown Notice](https://efabless.com/notice)
* [2025-03-01, 18:34:00](https://science.slashdot.org/story/25/03/01/0424235/anti-aging-pill-for-dogs-clears-key-fda-hurdle?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Anti-Aging Pill for Dogs Clears Key FDA Hurdle](https://science.slashdot.org/story/25/03/01/0424235/anti-aging-pill-for-dogs-clears-key-fda-hurdle?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-01, 18:30:51](https://news.ycombinator.com/item?id=43222099) - [Show HN: I took over Painteresque, a 14 year old Objective-C app and rebuilt it](https://apps.apple.com/ca/app/painteresque-photo-to-sketch/id6742038583)
* [2025-03-01, 18:24:22](https://news.ycombinator.com/item?id=43222027) - [Making o1, o3, and Sonnet 3.7 hallucinate for everyone](https://bengarcia.dev/making-o1-o3-and-sonnet-3-7-hallucinate-for-everyone)
* [2025-03-01, 18:20:43](https://lobste.rs/s/g9uepw/lisp_your_language) - [Lisp in Your Language](https://danthedev.com/lisp-in-your-language)
* [2025-03-01, 18:09:00](https://lobste.rs/s/jhj07m/get_loser_we_re_rewinding_stack) - [Get in loser. We're rewinding the stack. (Sandboxing Perl with WASM.)](https://andrews.substack.com/p/get-in-loser-were-rewinding-the-stack)
* [2025-03-01, 17:54:55](https://news.ycombinator.com/item?id=43221697) - [The most unhinged video wall, made out of Chromebooks](https://varun.ch/posts/videowall/)
* [2025-03-01, 17:34:00](https://games.slashdot.org/story/25/03/01/051200/magnus-carlsen-auctions-jeans-admits-he-cant-beat-chess-engines?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Magnus Carlsen Auctions Jeans, Admits He Can't Beat Chess Engines](https://games.slashdot.org/story/25/03/01/051200/magnus-carlsen-auctions-jeans-admits-he-cant-beat-chess-engines?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-01, 17:01:00](https://soylentnews.org/article.pl?sid=25/03/01/0055211&from=rss) - [Pandas \"Tricked\" Into Becoming the World's Biggest Bamboo Fans](https://soylentnews.org/article.pl?sid=25/03/01/0055211&from=rss)
* [2025-03-01, 16:49:44](https://lobste.rs/s/ifczmp/pinning_nixos_with_npins_how_kill) - [Pinning NixOS with npins, or how to kill channels forever without flakes](https://jade.fyi/blog/pinning-nixos-with-npins/)
* [2025-03-01, 16:34:00](https://tech.slashdot.org/story/25/03/01/0346205/tesla-moves-towards-launching-an-uber-competitor?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Tesla Moves Towards Launching an Uber Competitor](https://tech.slashdot.org/story/25/03/01/0346205/tesla-moves-towards-launching-an-uber-competitor?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-01, 16:02:58](https://lobste.rs/s/m0mwil/hardware_discovery_acpi_device_tree) - [Hardware discovery: ACPI & Device Tree](https://blogsystem5.substack.com/p/hardware-autoconfiguration)
* [2025-03-01, 15:34:00](https://developers.slashdot.org/story/25/02/28/0340214/google-calls-for-measurable-memory-safety-standards-for-software?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google Calls for Measurable Memory-Safety Standards for Software](https://developers.slashdot.org/story/25/02/28/0340214/google-calls-for-measurable-memory-safety-standards-for-software?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-01, 15:11:56](https://lobste.rs/s/uai6m2/ai_assisted_creativity_race_claim_future) - [AI-assisted creativity and the race to claim the future](https://kyefox.com/ai-assisted-creativity/)
* [2025-03-01, 14:56:03](https://lobste.rs/s/xmlv0z/your_next_two_zeroes) - [Your Next Two Zeroes](https://taylor.town/next-two-zeroes)
* [2025-03-01, 13:28:03](https://news.ycombinator.com/item?id=43219026) - [China tells its AI leaders to avoid U.S. travel over security concerns](https://www.wsj.com/world/china/china-ai-us-travel-advisory-ff248349)
* [2025-03-01, 12:17:00](https://soylentnews.org/article.pl?sid=25/03/01/0049207&from=rss) - [Skype is Shutting Down After Two Decades](https://soylentnews.org/article.pl?sid=25/03/01/0049207&from=rss)
* [2025-03-01, 10:18:31](https://lobste.rs/s/d8amk0/is_rust_good_fit_for_business_apps) - [Is Rust a good fit for business apps?](https://www.bartoszsypytkowski.com/is-rust-a-good-fit-for-business-apps/)
* [2025-03-01, 10:00:00](https://tech.slashdot.org/story/25/03/01/0059224/cosmic-desktop-alpha-6-released?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [COSMIC Desktop Alpha 6 Released](https://tech.slashdot.org/story/25/03/01/0059224/cosmic-desktop-alpha-6-released?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-01, 09:21:21](https://lobste.rs/s/vgbpbc/4_mains_nothing_at_all) - [4 mains or nothing at all](https://andrews.substack.com/p/4-mains-or-nothing-at-all)
* [2025-03-01, 08:17:29](https://news.ycombinator.com/item?id=43217195) - [Emacs Tree-sitter custom highlighting](https://amitp.blogspot.com/2025/02/emacs-tree-sitter-custom-highlighting.html)
* [2025-03-01, 08:17:02](https://lobste.rs/s/8wmhlu/cost_go_s_panic_recover) - [The cost of Go's panic and recover](https://jub0bs.com/posts/2025-02-28-cost-of-panic-recover/)
* [2025-03-01, 07:36:00](https://soylentnews.org/article.pl?sid=25/02/28/0659242&from=rss) - [Five Days of Ultra-Processed Food: Study Finds That's Enough to Alter the Brain](https://soylentnews.org/article.pl?sid=25/02/28/0659242&from=rss)
* [2025-03-01, 07:00:00](https://science.slashdot.org/story/25/03/01/0116201/chinese-scientists-developing-mars-drone-that-can-roll-and-fly?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Chinese Scientists Developing Mars Drone That Can Roll and Fly](https://science.slashdot.org/story/25/03/01/0116201/chinese-scientists-developing-mars-drone-that-can-roll-and-fly?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-01, 04:12:12](https://lobste.rs/s/suy0fp/deno_shows_us_there_s_better_way) - [Deno shows us there's a better way](https://www.macchaffee.com/blog/2025/deno/)
* [2025-03-01, 03:30:00](https://it.slashdot.org/story/25/03/01/019202/serbian-students-android-phone-compromised-by-exploit-from-cellebrite?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Serbian Student's Android Phone Compromised By Exploit From Cellebrite](https://it.slashdot.org/story/25/03/01/019202/serbian-students-android-phone-compromised-by-exploit-from-cellebrite?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-01, 02:53:00](https://soylentnews.org/article.pl?sid=25/02/28/0654225&from=rss) - [Internet Society Wants to Improve Terrestrial Fibre Maps](https://soylentnews.org/article.pl?sid=25/02/28/0654225&from=rss)
* [2025-03-01, 02:10:00](https://tech.slashdot.org/story/25/02/28/2231210/googles-taara-hopes-to-usher-in-a-new-era-of-internet-powered-by-light?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google's Taara Hopes To Usher in a New Era of Internet Powered by Light](https://tech.slashdot.org/story/25/02/28/2231210/googles-taara-hopes-to-usher-in-a-new-era-of-internet-powered-by-light?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-01, 01:26:34](https://lobste.rs/s/kmsjd8/nine_c64_sprite_demo_explained) - [Nine C64 sprite demo explained](https://www.linusakesson.net/scene/nine/explanation.php)
* [2025-02-28, 23:33:50](https://lobste.rs/s/mpkdpt/it_is_no_longer_safe_move_our_governments) - [It is no longer safe to move our governments and societies to US clouds](https://berthub.eu/articles/posts/you-can-no-longer-base-your-government-and-society-on-us-clouds/)
* [2025-02-28, 23:05:21](https://news.ycombinator.com/item?id=43212952) - [Why it's so hard to build a jet engine](https://www.construction-physics.com/p/why-its-so-hard-to-build-a-jet-engine)
* [2025-02-28, 22:05:00](https://soylentnews.org/article.pl?sid=25/02/28/0647213&from=rss) - [Water Chlorination Might Be Raising Our Risk Of Certain Cancers](https://soylentnews.org/article.pl?sid=25/02/28/0647213&from=rss)
* [2025-02-28, 21:57:03](https://lobste.rs/s/edcrrx/enough_with_all_raft) - [Enough with all the Raft](https://www.hytradboi.com/2025/2016d6c4-b08d-40b3-af2f-67926ca8521f-enough-with-all-the-raft)
* [2025-02-28, 21:32:35](https://lobste.rs/s/zian90/how_gain_code_execution_on_millions) - [how to gain code execution on millions of people and hundreds of popular apps](https://kibty.town/blog/todesktop/)
* [2025-02-28, 20:04:35](https://lobste.rs/s/2ah6bi/programming_without_pointers) - [Programming without pointers](https://www.hytradboi.com/2025/05c72e39-c07e-41bc-ac40-85e8308f2917-programming-without-pointers)
* [2025-02-28, 19:19:20](https://lobste.rs/s/uzx2be/windows_nt_for_gamecube_wii) - [Windows NT for GameCube/Wii](https://github.com/Wack0/entii-for-workcubes)
* [2025-02-28, 17:53:11](https://lobste.rs/s/xhssly/thoughts_about_rustdoc) - [Thoughts about rustdoc](https://lobste.rs/s/xhssly/thoughts_about_rustdoc)
* [2025-02-28, 17:40:06](https://lobste.rs/s/h38zur/structured_data_extraction_from) - [Structured data extraction from unstructured content using LLM schemas](https://simonwillison.net/2025/Feb/28/llm-schemas/)
* [2025-02-28, 17:17:00](https://soylentnews.org/article.pl?sid=25/02/28/0643220&from=rss) - [US Investigates Whether Deepseek Obtained NVidia Chips Through Singapore to Bypass Restrictions](https://soylentnews.org/article.pl?sid=25/02/28/0643220&from=rss)
* [2025-02-28, 17:01:43](https://news.ycombinator.com/item?id=43207831) - [3,200% CPU Utilization](https://josephmate.github.io/2025-02-26-3200p-cpu-util/)
* [2025-02-28, 14:35:12](https://lobste.rs/s/ccazb3/let_s_hold_hands) - [Let's Hold Hands](https://untested.sonnet.io/notes/lets-hold-hands/)
* [2025-02-28, 14:28:26](https://news.ycombinator.com/item?id=43205968) - [Reimagining Fluid Typography](https://www.oddbird.net/2025/02/12/fluid-type/)
* [2025-02-28, 12:32:00](https://soylentnews.org/article.pl?sid=25/02/28/0640209&from=rss) - [PSA: Amazon Kills “Download & Transfer Via USB” Option for Kindles This Week](https://soylentnews.org/article.pl?sid=25/02/28/0640209&from=rss)
* [2025-02-28, 10:31:00](https://news.ycombinator.com/item?id=43204032) - [Drone captures narwhals using their tusks to explore, forage and play](https://phys.org/news/2025-02-drone-captures-narwhals-tusks-explore.html)
* [2025-02-28, 08:31:27](https://news.ycombinator.com/item?id=43203180) - ['Slime' keeps the brain safe ― and could guard against ageing](https://www.nature.com/articles/d41586-025-00554-w)
* [2025-02-28, 07:47:00](https://soylentnews.org/article.pl?sid=25/02/27/1641235&from=rss) - [NASA's James Webb Space Telescope Faces Potential 20% Budget Cut Just 4 Years Into its Mission](https://soylentnews.org/article.pl?sid=25/02/27/1641235&from=rss)
* [2025-02-28, 04:33:26](https://news.ycombinator.com/item?id=43201720) - [Video encoding requires using your eyes](https://redvice.org/2025/encoding-requires-eyes/)
* [2025-02-28, 03:05:00](https://soylentnews.org/article.pl?sid=25/02/27/1633200&from=rss) - [Piezoelectric Catalyst Destroys Forever Chemicals](https://soylentnews.org/article.pl?sid=25/02/27/1633200&from=rss)
* [2025-02-27, 22:19:00](https://soylentnews.org/article.pl?sid=25/02/26/190229&from=rss) - [Right to Repair Laws Have Now Been Introduced in All 50 US States](https://soylentnews.org/article.pl?sid=25/02/26/190229&from=rss)
* [2025-02-27, 17:35:00](https://soylentnews.org/article.pl?sid=25/02/26/1856235&from=rss) - [Robot With 1,000 Muscles Twitches Like Human While Dangling From Ceiling](https://soylentnews.org/article.pl?sid=25/02/26/1856235&from=rss)
* [2025-02-27, 12:51:00](https://soylentnews.org/article.pl?sid=25/02/26/1852225&from=rss) - [Physx Feature Unlocked For RTX 5090 With RTX 3050 'Helper' To Enable Full Performance](https://soylentnews.org/article.pl?sid=25/02/26/1852225&from=rss)
* [2025-02-27, 08:08:00](https://soylentnews.org/article.pl?sid=25/02/26/1850240&from=rss) - [Bubbles That Break Rules: A Fluid Discovery That Defies Logic](https://soylentnews.org/article.pl?sid=25/02/26/1850240&from=rss)
* [2025-02-27, 06:05:46](https://news.ycombinator.com/item?id=43191773) - [Rifling through the archives with Robert Caro](https://www.smithsonianmag.com/history/rifling-through-archives-legendary-historian-robert-caro-180985956/)
* [2025-02-27, 05:46:32](https://news.ycombinator.com/item?id=43191696) - [Python as a second language empathy (2018)](https://ballingt.com/python-second-language-empathy/)
* [2025-02-27, 02:27:00](https://soylentnews.org/article.pl?sid=25/02/26/0210231&from=rss) - [As the Kernel Turns: Rust in Linux Saga Reaches the “Linus in All-Caps” Phase](https://soylentnews.org/article.pl?sid=25/02/26/0210231&from=rss)
* [2025-02-26, 21:42:00](https://soylentnews.org/article.pl?sid=25/02/25/0655200&from=rss) - [Software Engineering Job Openings Hit 5-Year Low Amid Industry Shift](https://soylentnews.org/article.pl?sid=25/02/25/0655200&from=rss)
* [2025-02-26, 16:53:00](https://soylentnews.org/article.pl?sid=25/02/25/0646226&from=rss) - [Chinese Hackers Compromised Organizations in 70 Nations, Warn US Federal Agencies](https://soylentnews.org/article.pl?sid=25/02/25/0646226&from=rss)
* [2025-02-26, 14:27:15](https://news.ycombinator.com/item?id=43183873) - [Nuclear Reactor Lasers: From fission to photon](http://toughsf.blogspot.com/2019/04/nuclear-reactor-lasers-from-fission-to.html)
* [2025-02-26, 13:58:24](https://news.ycombinator.com/item?id=43183635) - [Show HN: I made a website where you can create your own \"Life in Weeks\" timeline](https://lifeweeks.app/)
* [2025-02-26, 12:05:00](https://soylentnews.org/article.pl?sid=25/02/25/0640214&from=rss) - [Seagate's Fraudulent HDD Scandal Expands: Ironwolf Pro Hard Drives Reportedly Also Affected](https://soylentnews.org/article.pl?sid=25/02/25/0640214&from=rss)
* [2025-02-26, 07:20:00](https://soylentnews.org/article.pl?sid=25/02/25/0633257&from=rss) - [The Secretive X-37B Space Plane Snapped This Picture of Earth From Orbit](https://soylentnews.org/article.pl?sid=25/02/25/0633257&from=rss)
* [2025-02-26, 05:40:14](https://news.ycombinator.com/item?id=43180977) - [AlgoMIDI – A Mathematical 'Music Studio'](https://github.com/myanvoos/algoMIDI)
* [2025-02-26, 02:33:00](https://soylentnews.org/article.pl?sid=25/02/24/1625242&from=rss) - [US Treasury Beneficial Ownership Information Reporting is Back On (Again)](https://soylentnews.org/article.pl?sid=25/02/24/1625242&from=rss)
