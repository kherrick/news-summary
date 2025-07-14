# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Advancements and Computing

* [Ten years of running every day, visualized](https://nodaysoff.run/) discusses a decade-long commitment to running through stunning visual representation. [Comments](https://lobste.rs/s/9c5i3u/ten_years_running_every_day_visualized)

* [Google is tracking you (even when using DuckDuckGo)](https://www.simpleanalytics.com/blog/google-is-tracking-you-even-when-you-use-duck-duck-go) highlights unsettling practices around user data privacy. [Comments](https://news.ycombinator.com/item?id=44558235)

* [Upyo: Simple and modern email sending library for JavaScript](https://upyo.org/) introduces a new tool for JavaScript developers focused on email functionality. [Comments](https://lobste.rs/s/x3y6ls/upyo_simple_modern_email_sending_library)

* [Blender Studio Releases Free New Game 'Dogwalk' to Showcase Its Open Source Godot Game Engine](https://games.slashdot.org/story/25/07/14/0513223/blender-studio-releases-free-new-game-dogwalk-to-showcase-its-open-source-godot-game-engine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) demonstrates game design capabilities of the open-source tool. [Comments](https://lobste.rs/s/kidktn/bash_patch_add_shopt_for_implicit_place)

* [COVID-19 Vaccine's mRNA Technology Adapted for First Antibiotic-Resistant Bacteria Vaccine](https://science.slashdot.org/story/25/07/14/0420225/covid-19-vaccines-mrna-technology-adapted-for-first-antibiotic-resistant-bacteria-vaccine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) explores revolutionary applications of mRNA technology. [Comments](https://science.slashdot.org/story/25/07/14/0420225/covid-19-vaccines-mrna-technology-adapted-for-first-antibiotic-resistant-bacteria-vaccine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Research and Insights

* [Why recycling solar panels is harder than you might think](https://theconversation.com/why-recycling-solar-panels-is-harder-than-you-might-think-an-electrical-engineer-explains-259115) delves into the logistics and challenges of sustainable solar tech. [Comments](https://news.ycombinator.com/item?id=44559469)

* [Data alignment for speed: myth or reality? (2012)](https://lemire.me/blog/2012/05/31/data-alignment-for-speed-myth-or-reality/) revisits an enduring topic in programming and hardware performance. [Comments](https://lobste.rs/s/plrsmw/data_alignment_for_speed_myth_reality)

* [Let’s Learn x86-64 Assembly! Part 0 - Setup and First Steps](https://gpfault.net/posts/asm-tut-0.txt.html) offers a practical introduction to assembly language. [Comments](https://lobste.rs/s/rqewmw/let_s_learn_x86_64_assembly_part_0_setup)

* [Myanmar’s proliferating scam centers](https://asia.nikkei.com/static/vdata/infographics/myanmar-scam-centers/) sheds light on emerging issues in online scams. [Comments](https://news.ycombinator.com/item?id=44556406)

* [How does a screen work?](https://www.makingsoftware.com/chapters/how-a-screen-works) breaks down the mechanics of digital displays. [Comments](https://lobste.rs/s/2gmuhq/how_does_screen_work)

## Challenges and Controversies

* ['Positive Review Only': Researchers Hide AI Prompts in Papers](https://soylentnews.org/article.pl?sid=25/07/13/0039240&amp;from=rss) addresses ethical dilemmas in academic research. [Comments](https://soylentnews.org/article.pl?sid=25/07/13/0039240&amp;from=rss)

* [Nintendo Banned Switch 2 Owner For Playing a Used Switch 1 Game They Bought Online](https://games.slashdot.org/story/25/07/13/0437254/nintendo-banned-switch-2-owner-for-playing-a-used-switch-1-game-they-bought-online?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) reveals contentious digital ownership practices. [Comments](https://games.slashdot.org/story/25/07/13/0437254/nintendo-banned-switch-2-owner-for-playing-a-used-switch-1-game-they-bought-online?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Emergent Misalignment: Narrow finetuning can produce broadly misaligned LLMs](https://arxiv.org/abs/2502.17424) highlights challenges in managing AI alignment. [Comments](https://news.ycombinator.com/item?id=44554865)

* [More Than Half of Carbon Credit Auditors Have Signed Off on 'Overclaimed' Benefits](https://news.slashdot.org/story/25/07/14/0058203/more-than-half-of-carbon-credit-auditors-have-signed-off-on-overclaimed-benefits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) critiques the efficacy of carbon trading systems. [Comments](https://news.slashdot.org/story/25/07/14/0058203/more-than-half-of-carbon-credit-auditors-have-signed-off-on-overclaimed-benefits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [The Foolproof Way to Win Any Lottery, According to Maths](https://soylentnews.org/article.pl?sid=25/07/13/0024234&amp;from=rss) reveals statistical insights into lottery odds. [Comments](https://soylentnews.org/article.pl?sid=25/07/13/0024234&amp;from=rss)

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

* [2025-07-14, 12:45:49](https://lobste.rs/s/9c5i3u/ten_years_running_every_day_visualized) - [Ten years of running every day, visualized](https://nodaysoff.run/)
* [2025-07-14, 12:38:18](https://news.ycombinator.com/item?id=44559469) - [Why recycling solar panels is harder than you might think](https://theconversation.com/why-recycling-solar-panels-is-harder-than-you-might-think-an-electrical-engineer-explains-259115)
* [2025-07-14, 12:11:40](https://lobste.rs/s/plrsmw/data_alignment_for_speed_myth_reality) - [Data alignment for speed: myth or reality? (2012)](https://lemire.me/blog/2012/05/31/data-alignment-for-speed-myth-or-reality/)
* [2025-07-14, 11:38:15](https://lobste.rs/s/omytrc/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/omytrc/what_are_you_doing_this_week)
* [2025-07-14, 11:34:00](https://science.slashdot.org/story/25/07/14/0420225/covid-19-vaccines-mrna-technology-adapted-for-first-antibiotic-resistant-bacteria-vaccine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [COVID-19 Vaccine&apos;s mRNA Technology Adapted for First Antibiotic-Resistant Bacteria Vaccine](https://science.slashdot.org/story/25/07/14/0420225/covid-19-vaccines-mrna-technology-adapted-for-first-antibiotic-resistant-bacteria-vaccine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-14, 11:02:37](https://news.ycombinator.com/item?id=44558665) - [Death by a Thousand Slops](https://daniel.haxx.se/blog/2025/07/14/death-by-a-thousand-slops/)
* [2025-07-14, 11:00:21](https://news.ycombinator.com/item?id=44558646) - [Impacts of Adding PV Solar System to Internal Combustion Engine Vehicles](https://www.jstor.org/stable/26169128)
* [2025-07-14, 10:32:25](https://lobste.rs/s/x3y6ls/upyo_simple_modern_email_sending_library) - [Upyo: Simple and modern email sending library for JavaScript](https://upyo.org/)
* [2025-07-14, 10:25:32](https://lobste.rs/s/y1a8dk/llm_for_software_yo_yo) - [The LLM-for-software Yo-yo](https://tratt.net/laurie/blog/2025/the_llm_for_software_yoyo.html)
* [2025-07-14, 10:06:45](https://news.ycombinator.com/item?id=44558252) - [Interview with Google&apos;s Android leader Sameer Samat](https://www.techradar.com/phones/android/i-think-you-see-the-future-first-on-android-googles-android-leader-sameer-samat)
* [2025-07-14, 10:03:59](https://news.ycombinator.com/item?id=44558235) - [Google is tracking you (even when using DuckDuckGo)](https://www.simpleanalytics.com/blog/google-is-tracking-you-even-when-you-use-duck-duck-go)
* [2025-07-14, 09:40:51](https://lobste.rs/s/j1ps6w/hunt_for_perfect_laptop_continues) - [The hunt for a perfect laptop continues](https://pointieststick.com/2025/07/13/the-hunt-for-a-perfect-laptop-continues/)
* [2025-07-14, 09:15:00](https://soylentnews.org/article.pl?sid=25/07/13/0039240&amp;from=rss) - [&apos;Positive Review Only&apos;: Researchers Hide AI Prompts in Papers](https://soylentnews.org/article.pl?sid=25/07/13/0039240&amp;from=rss)
* [2025-07-14, 08:49:01](https://lobste.rs/s/kidktn/bash_patch_add_shopt_for_implicit_place) - [Bash patch - Add shopt for implicit &amp;&amp; in place of ; for functions end of lines](https://savannah.gnu.org/patch/?10534)
* [2025-07-14, 08:43:50](https://news.ycombinator.com/item?id=44557757) - [Telefónica DE shifts VMware support to Spinnaker due to cost](https://www.theregister.com/2025/07/11/telefnica_germany_shifts_vmware_support/)
* [2025-07-14, 08:04:00](https://games.slashdot.org/story/25/07/14/0513223/blender-studio-releases-free-new-game-dogwalk-to-showcase-its-open-source-godot-game-engine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Blender Studio Releases Free New Game &apos;Dogwalk&apos; to Showcase Its Open Source Godot Game Engine](https://games.slashdot.org/story/25/07/14/0513223/blender-studio-releases-free-new-game-dogwalk-to-showcase-its-open-source-godot-game-engine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-14, 07:27:02](https://news.ycombinator.com/item?id=44557348) - [Apple&apos;s Browser Engine Ban Persists, Even Under the DMA](https://open-web-advocacy.org/blog/apples-browser-engine-ban-persists-even-under-the-dma/)
* [2025-07-14, 07:18:52](https://lobste.rs/s/1hizee/using_usb_foot_pedal_for_vibe_coding) - [Using a USB Foot Pedal for Vibe Coding](https://coding.napolux.com/using-a-usb-foot-pedal-for-vibe-coding/)
* [2025-07-14, 07:14:01](https://lobste.rs/s/e2mor6/how_bring_data_centre_like_connectivity) - [How to bring data centre-like connectivity to your home with IPTTTH](https://www.daryllswer.com/how-to-bring-data-centre-like-connectivity-to-your-home-with-ipttth/)
* [2025-07-14, 06:41:51](https://news.ycombinator.com/item?id=44557115) - [How I build software quickly](https://evanhahn.com/how-i-build-software-quickly/)
* [2025-07-14, 06:13:27](https://lobste.rs/s/zyiibk/stepanov_s_biggest_blunder) - [Stepanov’s biggest blunder](https://mmapped.blog/posts/43-stepanovs-biggest-blunder)
* [2025-07-14, 06:00:34](https://lobste.rs/s/olsvyy/c_portable_assembly_language_1997) - [C-: A Portable Assembly Language (1997)](https://www.microsoft.com/en-us/research/publication/c-a-portable-assembly-language/)
* [2025-07-14, 05:57:15](https://lobste.rs/s/hvo6lf/improving_avif_open_source) - [Improving AVIF in Open Source](https://halide.cx/blog/improving-avif-in-open-source/index.html)
* [2025-07-14, 05:36:50](https://lobste.rs/s/2gmuhq/how_does_screen_work) - [How does a screen work?](https://www.makingsoftware.com/chapters/how-a-screen-works)
* [2025-07-14, 05:12:18](https://news.ycombinator.com/item?id=44556684) - [Show HN: Refine – A Local Alternative to Grammarly](https://refine.sh)
* [2025-07-14, 04:59:00](https://developers.slashdot.org/story/25/07/14/0456224/ada-beats-sql-perl-and-fortan-for-10-spot-on-programming-language-popularity-index?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ada Beats SQL, Perl, and Fortan for #10 Spot on Programming Language Popularity Index](https://developers.slashdot.org/story/25/07/14/0456224/ada-beats-sql-perl-and-fortan-for-10-spot-on-programming-language-popularity-index?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-14, 04:30:00](https://soylentnews.org/article.pl?sid=25/07/13/0024234&amp;from=rss) - [The Foolproof Way to Win Any Lottery, According to Maths](https://soylentnews.org/article.pl?sid=25/07/13/0024234&amp;from=rss)
* [2025-07-14, 04:16:29](https://news.ycombinator.com/item?id=44556406) - [Myanmar’s proliferating scam centers](https://asia.nikkei.com/static/vdata/infographics/myanmar-scam-centers/)
* [2025-07-14, 02:02:46](https://lobste.rs/s/x9s2mu/store_tags_after_payloads) - [Store tags after payloads](https://www.scattered-thoughts.net/writing/store-tags-after-payloads/)
* [2025-07-14, 01:34:00](https://news.slashdot.org/story/25/07/14/0058203/more-than-half-of-carbon-credit-auditors-have-signed-off-on-overclaimed-benefits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [More Than Half of Carbon Credit Auditors Have Signed Off on &apos;Overclaimed&apos; Benefits](https://news.slashdot.org/story/25/07/14/0058203/more-than-half-of-carbon-credit-auditors-have-signed-off-on-overclaimed-benefits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-14, 01:33:46](https://lobste.rs/s/rqewmw/let_s_learn_x86_64_assembly_part_0_setup) - [Let&apos;s Learn x86-64 Assembly! Part 0 - Setup and First Steps](https://gpfault.net/posts/asm-tut-0.txt.html)
* [2025-07-13, 23:48:00](https://yro.slashdot.org/story/25/07/13/2345250/some-amazon-warehouses-are-losing-hundreds-of-workers-after-changes-in-legal-status?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Some Amazon Warehouses are Losing Hundreds of Workers After Changes in Legal Status](https://yro.slashdot.org/story/25/07/13/2345250/some-amazon-warehouses-are-losing-hundreds-of-workers-after-changes-in-legal-status?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-13, 23:46:12](https://news.ycombinator.com/item?id=44554865) - [Emergent Misalignment: Narrow finetuning can produce broadly misaligned LLMs](https://arxiv.org/abs/2502.17424)
* [2025-07-13, 23:45:00](https://soylentnews.org/article.pl?sid=25/07/13/008207&amp;from=rss) - [1960s Schools Experiment That Created a New Alphabet and Left Thousands of Children Unable to Spell](https://soylentnews.org/article.pl?sid=25/07/13/008207&amp;from=rss)
* [2025-07-13, 22:22:15](https://news.ycombinator.com/item?id=44554307) - [Let&apos;s Learn x86-64 Assembly (2020)](https://gpfault.net/posts/asm-tut-0.txt.html)
* [2025-07-13, 21:55:00](https://it.slashdot.org/story/25/07/13/2152256/why-its-time-to-invest-in-quantum-cybersecurity-now?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why It&apos;s Time To Invest In Quantum Cybersecurity Now](https://it.slashdot.org/story/25/07/13/2152256/why-its-time-to-invest-in-quantum-cybersecurity-now?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-13, 21:11:44](https://lobste.rs/s/smje5p/task_runner_census_2025) - [Task Runner Census 2025](https://aleyan.com/blog/2025-task-runners-census/)
* [2025-07-13, 21:08:47](https://news.ycombinator.com/item?id=44553752) - [OpenCut: The open-source CapCut alternative](https://github.com/OpenCut-app/OpenCut)
* [2025-07-13, 21:08:14](https://news.ycombinator.com/item?id=44553747) - [APKLab: Android Reverse-Engineering Workbench for VS Code](https://github.com/APKLab/APKLab)
* [2025-07-13, 20:47:00](https://linux.slashdot.org/story/25/07/13/1946205/gparted-live-170-linux-distro-drops-32-bit-support?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GParted Live 1.7.0 Linux Distro Drops 32-Bit Support](https://linux.slashdot.org/story/25/07/13/1946205/gparted-live-170-linux-distro-drops-32-bit-support?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-13, 20:34:28](https://lobste.rs/s/byp59z/programming_language_theory_has_public) - [Programming Language Theory has a public relations problem](https://happyfellow.bearblog.dev/programming-language-theory-has-a-public-relations-problem/)
* [2025-07-13, 19:47:00](https://tech.slashdot.org/story/25/07/13/1930206/a-never-ending-supply-of-drones-has-frozen-the-front-lines-in-ukraine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Never-Ending Supply of Drones Has Frozen the Front Lines in Ukraine](https://tech.slashdot.org/story/25/07/13/1930206/a-never-ending-supply-of-drones-has-frozen-the-front-lines-in-ukraine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-13, 19:15:00](https://soylentnews.org/article.pl?sid=25/07/12/1336231&amp;from=rss) - [Zombie Fabs Plague China&apos;s Chipmaking Ambitions, Failures Burning Tens of Billions of Dollars](https://soylentnews.org/article.pl?sid=25/07/12/1336231&amp;from=rss)
* [2025-07-13, 18:47:00](https://hardware.slashdot.org/story/25/07/13/1837237/is-enron-transforming-into-a-real-texas-retail-electricity-provider?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is Enron Transforming Into a Real Texas Retail Electricity Provider?](https://hardware.slashdot.org/story/25/07/13/1837237/is-enron-transforming-into-a-real-texas-retail-electricity-provider?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-13, 18:44:56](https://news.ycombinator.com/item?id=44552500) - [Happy 20th Birthday, Django](https://www.djangoproject.com/weblog/2025/jul/13/happy-20th-birthday-django/)
* [2025-07-13, 18:31:47](https://news.ycombinator.com/item?id=44552414) - [GLP-1s are breaking life insurance](https://www.glp1digest.com/p/how-glp-1s-are-breaking-life-insurance)
* [2025-07-13, 18:21:27](https://lobste.rs/s/7o1ilj/exploiting_all_google_kernelctf) - [Exploiting All Google kernelCTF Instances And Debian 12 With A 0-Day For $82k: A RBTree Family Drama (Part One)](https://syst3mfailure.io/rbtree-family-drama/)
* [2025-07-13, 17:47:00](https://science.slashdot.org/story/25/07/13/1743232/some-gut-microbes-can-absorb-and-help-expel-forever-chemicals-study-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Some Gut Microbes Can Absorb and Help Expel &apos;Forever Chemicals&apos;, Study Shows](https://science.slashdot.org/story/25/07/13/1743232/some-gut-microbes-can-absorb-and-help-expel-forever-chemicals-study-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-13, 16:58:03](https://lobste.rs/s/rx4vvq/algorithms_for_making_interesting) - [Algorithms for making interesting organic simulations](https://bleuje.com/physarum-explanation/)
* [2025-07-13, 16:57:48](https://news.ycombinator.com/item?id=44551762) - [Show HN: A Raycast-compatible launcher for Linux](https://github.com/ByteAtATime/raycast-linux)
* [2025-07-13, 16:57:43](https://lobste.rs/s/gjh1xi/notes_on_graham_s_ansi_common_lisp) - [Notes on Graham&apos;s ANSI Common Lisp](https://courses.cs.northwestern.edu/325/readings/graham/graham-notes.html)
* [2025-07-13, 16:45:02](https://news.ycombinator.com/item?id=44551652) - [A technical look at Iran&apos;s internet shutdowns](https://zola.ink/blog/posts/a-technical-look-at-irans-internet-shutdown)
* [2025-07-13, 16:34:00](https://news.slashdot.org/story/25/07/12/0428216/underwater-turbine-spins-65-years-off-scotlands-coast-proving-viability-of-tidal-energy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Underwater Turbine Spins 6.5 Years Off Scotland&apos;s Coast, Proving Viability of Tidal Energy](https://news.slashdot.org/story/25/07/12/0428216/underwater-turbine-spins-65-years-off-scotlands-coast-proving-viability-of-tidal-energy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-13, 16:30:34](https://lobste.rs/s/rnwozv/detour_detour_through_linux_dynamic) - [detour: A detour through the Linux dynamic linker](https://github.com/graphitemaster/detour)
* [2025-07-13, 15:34:00](https://tech.slashdot.org/story/25/07/12/0624259/chinas-omoway-announces-a-new-self-driving-electric-scooter-named-omo-x?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China&apos;s Omoway Announces a New Self-Driving Electric Scooter Named &apos;Omo X&apos;](https://tech.slashdot.org/story/25/07/12/0624259/chinas-omoway-announces-a-new-self-driving-electric-scooter-named-omo-x?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-13, 14:34:00](https://games.slashdot.org/story/25/07/13/0437254/nintendo-banned-switch-2-owner-for-playing-a-used-switch-1-game-they-bought-online?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nintendo Banned Switch 2 Owner For Playing a Used Switch 1 Game They Bought Online](https://games.slashdot.org/story/25/07/13/0437254/nintendo-banned-switch-2-owner-for-playing-a-used-switch-1-game-they-bought-online?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-13, 14:28:00](https://soylentnews.org/article.pl?sid=25/07/12/1251234&amp;from=rss) - [Man&apos;s Ghastly Festering Ulcer Stumps Doctors—Until They Cut Out a Wedge of Flesh](https://soylentnews.org/article.pl?sid=25/07/12/1251234&amp;from=rss)
* [2025-07-13, 14:09:06](https://news.ycombinator.com/item?id=44550572) - [How does a screen work?](https://www.makingsoftware.com/chapters/how-a-screen-works)
* [2025-07-13, 11:34:00](https://entertainment.slashdot.org/story/25/07/12/2317208/dcs-brighter-superman-movie-smashes-box-office-expectations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DC&apos;s &apos;Brighter&apos; Superman Movie Smashes Box Office Expectations](https://entertainment.slashdot.org/story/25/07/12/2317208/dcs-brighter-superman-movie-smashes-box-office-expectations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-13, 09:52:04](https://lobste.rs/s/lree6z/perldelta_what_is_new_for_perl_v5_42_0) - [perldelta - what is new for perl v5.42.0](https://perldoc.perl.org/5.42.0/perldelta)
* [2025-07-13, 09:40:00](https://soylentnews.org/article.pl?sid=25/07/12/1244241&amp;from=rss) - [This Glitchy, Error-Prone Tool Could Get You Deported](https://soylentnews.org/article.pl?sid=25/07/12/1244241&amp;from=rss)
* [2025-07-13, 07:34:00](https://science.slashdot.org/story/25/07/13/031226/astronomers-plan-far-side-of-the-moon-satellite-to-hear-billion-year-old-radio-waves?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Astronomers Plan Far Side of the Moon Satellite to Hear Billion-Year-Old Radio Waves](https://science.slashdot.org/story/25/07/13/031226/astronomers-plan-far-side-of-the-moon-satellite-to-hear-billion-year-old-radio-waves?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-13, 06:20:11](https://lobste.rs/s/ubpr2o/migrating_my_nas_from_coreos_flatcar) - [Migrating my NAS from CoreOS/Flatcar Linux to NixOS](https://michael.stapelberg.ch/posts/2025-07-13-nixos-nas-network-storage-config/)
* [2025-07-13, 04:56:00](https://soylentnews.org/article.pl?sid=25/07/12/1237201&amp;from=rss) - [Experts Say It is Unlikely You Will See a Moa Any Time Soon](https://soylentnews.org/article.pl?sid=25/07/12/1237201&amp;from=rss)
* [2025-07-13, 01:53:33](https://lobste.rs/s/pbj1da/how_i_found_bypass_google_s_big_anti) - [How I found a bypass in Google&apos;s big anti-adblock update](https://0x44.xyz/blog/web-request-blocking/)
* [2025-07-13, 00:14:00](https://soylentnews.org/article.pl?sid=25/07/12/1213215&amp;from=rss) - [&apos;123456&apos; Password Exposed Chats for 64 Million McDonald&apos;s Job Applicants](https://soylentnews.org/article.pl?sid=25/07/12/1213215&amp;from=rss)
* [2025-07-13, 00:13:27](https://lobste.rs/s/mtcsug/zig_s_new_async_i_o) - [Zig&apos;s New Async I/O](https://kristoff.it/blog/zig-new-async-io/)
* [2025-07-12, 23:55:39](https://news.ycombinator.com/item?id=44546265) - [Show HN: ArchGW – An intelligent edge and service proxy for agents](https://github.com/katanemo/archgw/)
* [2025-07-12, 19:29:00](https://soylentnews.org/article.pl?sid=25/07/12/123235&amp;from=rss) - [Semiconductor Industry Could Short Out as Copper Runs Dry](https://soylentnews.org/article.pl?sid=25/07/12/123235&amp;from=rss)
* [2025-07-12, 14:45:00](https://soylentnews.org/article.pl?sid=25/07/11/238234&amp;from=rss) - [70,000 Years Ago Humans Underwent A Major Shift – That’s Why We Exist ](https://soylentnews.org/article.pl?sid=25/07/11/238234&amp;from=rss)
* [2025-07-12, 10:00:00](https://soylentnews.org/article.pl?sid=25/07/11/2237233&amp;from=rss) - [PerfektBlue Bluetooth Vulnerabilities Expose Millions of Vehicles to Remote Code Execution](https://soylentnews.org/article.pl?sid=25/07/11/2237233&amp;from=rss)
* [2025-07-12, 05:15:00](https://soylentnews.org/article.pl?sid=25/07/11/2226206&amp;from=rss) - [CEO Claims Intel No Longer In The \&quot;Top 10 Semiconductor Companies\&quot; ](https://soylentnews.org/article.pl?sid=25/07/11/2226206&amp;from=rss)
* [2025-07-12, 00:31:00](https://soylentnews.org/article.pl?sid=25/07/11/1218211&amp;from=rss) - [Derinkuyu: A Subterranean Marvel of Ancient Engineering with  Capacity for 20,000 Inhabitants](https://soylentnews.org/article.pl?sid=25/07/11/1218211&amp;from=rss)
* [2025-07-11, 19:46:00](https://soylentnews.org/article.pl?sid=25/07/11/114218&amp;from=rss) - [New Android TapTrap Attack Fools Users With Invisible UI Trick](https://soylentnews.org/article.pl?sid=25/07/11/114218&amp;from=rss)
* [2025-07-11, 15:02:00](https://soylentnews.org/article.pl?sid=25/07/11/0518225&amp;from=rss) - [What is AGI? Nobody Agrees, and It&apos;s Tearing Microsoft and OpenAI Apart.](https://soylentnews.org/article.pl?sid=25/07/11/0518225&amp;from=rss)
* [2025-07-11, 14:27:42](https://news.ycombinator.com/item?id=44532527) - [C3 solved memory lifetimes with scopes](https://c3-lang.org/blog/forget-borrow-checkers-c3-solved-memory-lifetimes-with-scopes/)
* [2025-07-11, 09:45:56](https://news.ycombinator.com/item?id=44530250) - [Bold Mission to Hunt for Aliens on Venus Is Happening](https://gizmodo.com/a-bold-mission-to-hunt-for-aliens-on-venus-is-actually-happening-2000627704)
* [2025-07-11, 08:15:00](https://soylentnews.org/article.pl?sid=25/07/10/0029200&amp;from=rss) - [Nvidia Has Become the World’s First Company Worth $4 Trillion](https://soylentnews.org/article.pl?sid=25/07/10/0029200&amp;from=rss)
* [2025-07-11, 03:30:00](https://soylentnews.org/article.pl?sid=25/07/10/0025232&amp;from=rss) - [Apple Just Released an Interesting Coding Language Model](https://soylentnews.org/article.pl?sid=25/07/10/0025232&amp;from=rss)
* [2025-07-11, 01:22:12](https://news.ycombinator.com/item?id=44527525) - [Concurrent Programming with Harmony](https://harmony.cs.cornell.edu/book/)
* [2025-07-10, 23:08:14](https://news.ycombinator.com/item?id=44526728) - [Binding Application in Idris](https://andrevidela.com/blog/2025/binding-application/)
* [2025-07-10, 22:43:00](https://soylentnews.org/article.pl?sid=25/07/09/1114240&amp;from=rss) - [AI is Scraping the Web, but the Web is Fighting Back](https://soylentnews.org/article.pl?sid=25/07/09/1114240&amp;from=rss)
* [2025-07-10, 19:19:58](https://news.ycombinator.com/item?id=44524537) - [Lasagna Battery Cell](https://amazingribs.com/more-technique-and-science/more-cooking-science/reactive-pans/)
* [2025-07-10, 17:58:00](https://soylentnews.org/article.pl?sid=25/07/09/116236&amp;from=rss) - [Earth is Going to Spin Much Faster Over the Next Few Months](https://soylentnews.org/article.pl?sid=25/07/09/116236&amp;from=rss)
* [2025-07-10, 17:30:33](https://news.ycombinator.com/item?id=44523372) - [Burning a Magnesium NeXT Cube (1993)](https://simson.net/ref/1993/cubefire.html)
* [2025-07-10, 16:21:13](https://news.ycombinator.com/item?id=44522683) - [Show HN: Ten years of running every day, visualized](https://nodaysoff.run)
* [2025-07-10, 13:32:49](https://news.ycombinator.com/item?id=44520855) - [Show HN: FFmpeg in plain English – LLM-assisted FFmpeg in the browser](https://vidmix.app/ffmpeg-in-plain-english/)
* [2025-07-10, 13:14:00](https://soylentnews.org/article.pl?sid=25/07/09/1058230&amp;from=rss) - [Compact GeV Proton Acceleration Using Ultra-Intense Lasers](https://soylentnews.org/article.pl?sid=25/07/09/1058230&amp;from=rss)
* [2025-07-10, 10:30:42](https://news.ycombinator.com/item?id=44519395) - [The underground cathedral protecting Tokyo from floods (2018)](https://www.bbc.com/future/article/20181129-the-underground-cathedral-protecting-tokyo-from-floods)
* [2025-07-10, 08:30:00](https://soylentnews.org/article.pl?sid=25/07/08/2330230&amp;from=rss) - [Shrinking Antarctic Sea Ice Is Warming The Ocean Faster Than Expected](https://soylentnews.org/article.pl?sid=25/07/08/2330230&amp;from=rss)
* [2025-07-10, 03:45:00](https://soylentnews.org/article.pl?sid=25/07/08/1724218&amp;from=rss) - [The Curious Rise of Giant Tablets on Wheels](https://soylentnews.org/article.pl?sid=25/07/08/1724218&amp;from=rss)
