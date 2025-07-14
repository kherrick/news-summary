# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and Technology Advancements

* [Zuckerberg Pledges Hundreds of Billions For AI Data Centers in Superintelligence Push](https://tech.slashdot.org/story/25/07/14/165238/zuckerberg-pledges-hundreds-of-billions-for-ai-data-centers-in-superintelligence-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A significant investment by Meta's CEO to advance AI capabilities.

* [AWS launches Kiro, its Cursor clone](https://kiro.dev/blog/introducing-kiro/) - AWS introduces new open-source software to compete with existing tools like Cursor.

* [Japanese AI Adoption Remains Drastically Below Global Leaders](https://slashdot.org/story/25/07/14/1324237/japanese-ai-adoption-remains-drastically-below-global-leaders?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Insights into Japan's slow pace in embracing AI compared to other nations.

* [Emergent Misalignment: Narrow finetuning can produce broadly misaligned LLMs](https://arxiv.org/abs/2502.17424) - A research paper exploring how fine-tuning AI can lead to significant model misalignments.

* [Hypercapitalism and the AI talent wars](https://blog.johnluttig.com/p/hypercapitalism-and-the-ai-talent) - An exploration of the competitive landscape in acquiring AI talent globally.

## Software Development and Engineering

* [Building Modular Rails Applications: A Deep Dive into Rails Engines](https://www.panasiti.me/blog/modular-rails-applications-rails-engines-active-storage-dashboard/) - A comprehensive guide for constructing modular applications in Rails.

* [Strategies for Fast Lexers](https://xnacly.me/posts/2025/fast-lexer-strategies/) - Methods and strategies for creating high-performance lexical analyzers.

* [Lightning Detector Circuits](https://techlib.com/electronics/lightningnew.htm) - A fascinating dive into how circuits can detect lightning strikes.

* [Improving AVIF in Open Source](https://halide.cx/blog/improving-avif-in-open-source/index.html) - Enhancements being made to the AVIF image format within the open-source community.

* [How I build software quickly](https://evanhahn.com/how-i-build-software-quickly/) - A personal methodology for rapidly developing software projects.

## Consumer Technology and Gaming

* [Blender Studio Releases Free New Game 'Dogwalk' to Showcase Its Open Source Godot Game Engine](https://games.slashdot.org/story/25/07/14/0513223/blender-studio-releases-free-new-game-dogwalk-to-showcase-its-open-source-godot-game-engine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Blender Studio demonstrates Godot's potential with a free new game.

* [Lenovo Legion Go S: Windows 11 vs. SteamOS Performance, and General Availability](https://boilingsteam.com/lenovo-legion-go-s-windows-vs-steam-os-performance/) - Performance comparison of Lenovo's gaming device across Windows 11 and SteamOS.

## Environmental and Scientific Developments

* [COVID-19 Vaccine's mRNA Technology Adapted for First Antibiotic-Resistant Bacteria Vaccine](https://science.slashdot.org/story/25/07/14/0420225/covid-19-vaccines-mrna-technology-adapted-for-first-antibiotic-resistant-bacteria-vaccine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A new milestone in mRNA adaptation addressing antibiotic resistance.

* [Shrinking Antarctic Sea Ice Is Warming The Ocean Faster Than Expected](https://soylentnews.org/article.pl?sid=25/07/08/2330230&amp;from=rss) - Severe impacts of Antarctic ice loss on ocean temperatures.

* [Underwater Turbine Spins 6.5 Years Off Scotland's Coast, Proving Viability of Tidal Energy](https://news.slashdot.org/story/25/07/12/0428216/underwater-turbine-spins-65-years-off-scotlands-coast-proving-viability-of-tidal-energy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Demonstrating the viability of tidal power as a renewable energy source.

## Privacy, Security, and Ethical Concerns

* [BulletVPN Shuts Down, Killing Lifetime Members' Subscriptions](https://tech.slashdot.org/story/25/07/14/1420257/bulletvpn-shuts-down-killing-lifetime-members-subscriptions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Another cautionary tale about lifetime subscriptions.

* [Apple's Browser Engine Ban Persists, Even Under the DMA](https://open-web-advocacy.org/blog/apples-browser-engine-ban-persists-even-under-the-dma/) - Apple's browser policies continue to raise concerns, even in the post-DMA era.

* [More Than Half of Carbon Credit Auditors Have Signed Off on 'Overclaimed' Benefits](https://news.slashdot.org/story/25/07/14/0058203/more-than-half-of-carbon-credit-auditors-have-signed-off-on-overclaimed-benefits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Reports of inaccuracies in carbon credit auditing processes.

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

* [2025-07-14, 16:05:00](https://tech.slashdot.org/story/25/07/14/165238/zuckerberg-pledges-hundreds-of-billions-for-ai-data-centers-in-superintelligence-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Zuckerberg Pledges Hundreds of Billions For AI Data Centers in Superintelligence Push](https://tech.slashdot.org/story/25/07/14/165238/zuckerberg-pledges-hundreds-of-billions-for-ai-data-centers-in-superintelligence-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-14, 15:30:31](https://news.ycombinator.com/item?id=44561354) - [Building Modular Rails Applications: A Deep Dive into Rails Engines](https://www.panasiti.me/blog/modular-rails-applications-rails-engines-active-storage-dashboard/)
* [2025-07-14, 15:24:57](https://news.ycombinator.com/item?id=44561284) - [GM, LG to upgrade Tennessee plant to make low-cost EV batteries](https://www.cnbc.com/2025/07/14/gm-lg-ultium-spring-hill-tennessee-plant-ev-batteries.html)
* [2025-07-14, 15:20:00](https://tech.slashdot.org/story/25/07/14/1420257/bulletvpn-shuts-down-killing-lifetime-members-subscriptions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [BulletVPN Shuts Down, Killing Lifetime Members&apos; Subscriptions](https://tech.slashdot.org/story/25/07/14/1420257/bulletvpn-shuts-down-killing-lifetime-members-subscriptions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-14, 15:07:31](https://news.ycombinator.com/item?id=44561104) - [Lightning Detector Circuits](https://techlib.com/electronics/lightningnew.htm)
* [2025-07-14, 15:02:43](https://news.ycombinator.com/item?id=44561060) - [You Are in a Box](https://jyn.dev/you-are-in-a-box/)
* [2025-07-14, 15:00:39](https://lobste.rs/s/hhxj7i/you_are_box) - [you are in a box](https://jyn.dev/you-are-in-a-box/)
* [2025-07-14, 14:47:54](https://news.ycombinator.com/item?id=44560913) - [Lenovo Legion Go S: Windows 11 vs. SteamOS Performance, and General Availability](https://boilingsteam.com/lenovo-legion-go-s-windows-vs-steam-os-performance/)
* [2025-07-14, 14:42:54](https://news.ycombinator.com/item?id=44560871) - [Strategies for Fast Lexers](https://xnacly.me/posts/2025/fast-lexer-strategies/)
* [2025-07-14, 14:40:00](https://tech.slashdot.org/story/25/07/14/1413234/bay-area-restaurants-are-vetting-your-social-media-before-you-even-walk-in?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bay Area Restaurants Are Vetting Your Social Media Before You Even Walk In](https://tech.slashdot.org/story/25/07/14/1413234/bay-area-restaurants-are-vetting-your-social-media-before-you-even-walk-in?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-14, 14:32:08](https://news.ycombinator.com/item?id=44560740) - [AI slows down open source developers. Peter Naur can teach us why](https://johnwhiles.com/posts/mental-models-vs-ai-tools)
* [2025-07-14, 14:24:40](https://news.ycombinator.com/item?id=44560662) - [AWS launches Kiro, its Cursor clone](https://kiro.dev/blog/introducing-kiro/)
* [2025-07-14, 14:23:29](https://lobste.rs/s/q6comq/binding_application_idris) - [Binding Application in Idris](https://andrevidela.com/blog/2025/binding-application/)
* [2025-07-14, 14:00:00](https://slashdot.org/story/25/07/14/1324237/japanese-ai-adoption-remains-drastically-below-global-leaders?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Japanese AI Adoption Remains Drastically Below Global Leaders](https://slashdot.org/story/25/07/14/1324237/japanese-ai-adoption-remains-drastically-below-global-leaders?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-14, 14:00:00](https://soylentnews.org/article.pl?sid=25/07/13/014215&amp;from=rss) - [AMD Discloses New CPU Flaws that can Enable Data Leaks via Timing Attacks](https://soylentnews.org/article.pl?sid=25/07/13/014215&amp;from=rss)
* [2025-07-14, 12:45:49](https://lobste.rs/s/9c5i3u/ten_years_running_every_day_visualized) - [Ten years of running every day, visualized](https://nodaysoff.run/)
* [2025-07-14, 12:11:40](https://lobste.rs/s/plrsmw/data_alignment_for_speed_myth_reality) - [Data alignment for speed: myth or reality? (2012)](https://lemire.me/blog/2012/05/31/data-alignment-for-speed-myth-or-reality/)
* [2025-07-14, 11:38:15](https://lobste.rs/s/omytrc/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/omytrc/what_are_you_doing_this_week)
* [2025-07-14, 11:34:00](https://science.slashdot.org/story/25/07/14/0420225/covid-19-vaccines-mrna-technology-adapted-for-first-antibiotic-resistant-bacteria-vaccine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [COVID-19 Vaccine&apos;s mRNA Technology Adapted for First Antibiotic-Resistant Bacteria Vaccine](https://science.slashdot.org/story/25/07/14/0420225/covid-19-vaccines-mrna-technology-adapted-for-first-antibiotic-resistant-bacteria-vaccine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-14, 11:00:21](https://news.ycombinator.com/item?id=44558646) - [Impacts of adding PV solar system to internal combustion engine vehicles](https://www.jstor.org/stable/26169128)
* [2025-07-14, 10:32:25](https://lobste.rs/s/x3y6ls/upyo_simple_modern_email_sending_library) - [Upyo: Simple and modern email sending library for JavaScript](https://upyo.org/)
* [2025-07-14, 10:25:32](https://lobste.rs/s/y1a8dk/llm_for_software_yo_yo) - [The LLM-for-software Yo-yo](https://tratt.net/laurie/blog/2025/the_llm_for_software_yoyo.html)
* [2025-07-14, 09:40:51](https://lobste.rs/s/j1ps6w/hunt_for_perfect_laptop_continues) - [The hunt for a perfect laptop continues](https://pointieststick.com/2025/07/13/the-hunt-for-a-perfect-laptop-continues/)
* [2025-07-14, 09:15:00](https://soylentnews.org/article.pl?sid=25/07/13/0039240&amp;from=rss) - [&apos;Positive Review Only&apos;: Researchers Hide AI Prompts in Papers](https://soylentnews.org/article.pl?sid=25/07/13/0039240&amp;from=rss)
* [2025-07-14, 08:49:01](https://lobste.rs/s/kidktn/bash_patch_add_shopt_for_implicit_place) - [Bash patch - Add shopt for implicit &amp;&amp; in place of ; for functions end of lines](https://savannah.gnu.org/patch/?10534)
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
* [2025-07-13, 20:09:34](https://news.ycombinator.com/item?id=44553257) - [Hypercapitalism and the AI talent wars](https://blog.johnluttig.com/p/hypercapitalism-and-the-ai-talent)
* [2025-07-13, 19:47:00](https://tech.slashdot.org/story/25/07/13/1930206/a-never-ending-supply-of-drones-has-frozen-the-front-lines-in-ukraine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Never-Ending Supply of Drones Has Frozen the Front Lines in Ukraine](https://tech.slashdot.org/story/25/07/13/1930206/a-never-ending-supply-of-drones-has-frozen-the-front-lines-in-ukraine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-13, 19:15:00](https://soylentnews.org/article.pl?sid=25/07/12/1336231&amp;from=rss) - [Zombie Fabs Plague China&apos;s Chipmaking Ambitions, Failures Burning Tens of Billions of Dollars](https://soylentnews.org/article.pl?sid=25/07/12/1336231&amp;from=rss)
* [2025-07-13, 18:47:00](https://hardware.slashdot.org/story/25/07/13/1837237/is-enron-transforming-into-a-real-texas-retail-electricity-provider?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is Enron Transforming Into a Real Texas Retail Electricity Provider?](https://hardware.slashdot.org/story/25/07/13/1837237/is-enron-transforming-into-a-real-texas-retail-electricity-provider?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-13, 18:44:56](https://news.ycombinator.com/item?id=44552500) - [Happy 20th Birthday, Django](https://www.djangoproject.com/weblog/2025/jul/13/happy-20th-birthday-django/)
* [2025-07-13, 18:21:27](https://lobste.rs/s/7o1ilj/exploiting_all_google_kernelctf) - [Exploiting All Google kernelCTF Instances And Debian 12 With A 0-Day For $82k: A RBTree Family Drama (Part One)](https://syst3mfailure.io/rbtree-family-drama/)
* [2025-07-13, 17:47:00](https://science.slashdot.org/story/25/07/13/1743232/some-gut-microbes-can-absorb-and-help-expel-forever-chemicals-study-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Some Gut Microbes Can Absorb and Help Expel &apos;Forever Chemicals&apos;, Study Shows](https://science.slashdot.org/story/25/07/13/1743232/some-gut-microbes-can-absorb-and-help-expel-forever-chemicals-study-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-13, 16:58:03](https://lobste.rs/s/rx4vvq/algorithms_for_making_interesting) - [Algorithms for making interesting organic simulations](https://bleuje.com/physarum-explanation/)
* [2025-07-13, 16:45:02](https://news.ycombinator.com/item?id=44551652) - [A technical look at Iran&apos;s internet shutdowns](https://zola.ink/blog/posts/a-technical-look-at-irans-internet-shutdown)
* [2025-07-13, 16:34:00](https://news.slashdot.org/story/25/07/12/0428216/underwater-turbine-spins-65-years-off-scotlands-coast-proving-viability-of-tidal-energy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Underwater Turbine Spins 6.5 Years Off Scotland&apos;s Coast, Proving Viability of Tidal Energy](https://news.slashdot.org/story/25/07/12/0428216/underwater-turbine-spins-65-years-off-scotlands-coast-proving-viability-of-tidal-energy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-13, 16:30:34](https://lobste.rs/s/rnwozv/detour_detour_through_linux_dynamic) - [detour: A detour through the Linux dynamic linker](https://github.com/graphitemaster/detour)
* [2025-07-13, 14:28:00](https://soylentnews.org/article.pl?sid=25/07/12/1251234&amp;from=rss) - [Man&apos;s Ghastly Festering Ulcer Stumps Doctors—Until They Cut Out a Wedge of Flesh](https://soylentnews.org/article.pl?sid=25/07/12/1251234&amp;from=rss)
* [2025-07-13, 14:09:06](https://news.ycombinator.com/item?id=44550572) - [How does a screen work?](https://www.makingsoftware.com/chapters/how-a-screen-works)
* [2025-07-13, 09:40:00](https://soylentnews.org/article.pl?sid=25/07/12/1244241&amp;from=rss) - [This Glitchy, Error-Prone Tool Could Get You Deported](https://soylentnews.org/article.pl?sid=25/07/12/1244241&amp;from=rss)
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
* [2025-07-11, 18:17:22](https://news.ycombinator.com/item?id=44535378) - [Six Game Devs Speak to Computer Games Mag (1984)](https://computeradsfromthepast.substack.com/p/six-game-devs-speak-to-computer-games)
* [2025-07-11, 15:02:00](https://soylentnews.org/article.pl?sid=25/07/11/0518225&amp;from=rss) - [What is AGI? Nobody Agrees, and It&apos;s Tearing Microsoft and OpenAI Apart.](https://soylentnews.org/article.pl?sid=25/07/11/0518225&amp;from=rss)
* [2025-07-11, 08:28:53](https://news.ycombinator.com/item?id=44529645) - [Self-imposed ban – a lightweight bash script to block commands](https://github.com/alex-moon/ban)
* [2025-07-11, 08:15:00](https://soylentnews.org/article.pl?sid=25/07/10/0029200&amp;from=rss) - [Nvidia Has Become the World’s First Company Worth $4 Trillion](https://soylentnews.org/article.pl?sid=25/07/10/0029200&amp;from=rss)
* [2025-07-11, 03:30:00](https://soylentnews.org/article.pl?sid=25/07/10/0025232&amp;from=rss) - [Apple Just Released an Interesting Coding Language Model](https://soylentnews.org/article.pl?sid=25/07/10/0025232&amp;from=rss)
* [2025-07-11, 01:22:12](https://news.ycombinator.com/item?id=44527525) - [Concurrent Programming with Harmony](https://harmony.cs.cornell.edu/book/)
* [2025-07-10, 23:08:14](https://news.ycombinator.com/item?id=44526728) - [Binding Application in Idris](https://andrevidela.com/blog/2025/binding-application/)
* [2025-07-10, 22:43:00](https://soylentnews.org/article.pl?sid=25/07/09/1114240&amp;from=rss) - [AI is Scraping the Web, but the Web is Fighting Back](https://soylentnews.org/article.pl?sid=25/07/09/1114240&amp;from=rss)
* [2025-07-10, 19:19:58](https://news.ycombinator.com/item?id=44524537) - [Lasagna Battery Cell](https://amazingribs.com/more-technique-and-science/more-cooking-science/reactive-pans/)
* [2025-07-10, 18:12:21](https://news.ycombinator.com/item?id=44523876) - [Lossless Float Image Compression](https://aras-p.info/blog/2025/07/08/Lossless-Float-Image-Compression/)
* [2025-07-10, 17:58:00](https://soylentnews.org/article.pl?sid=25/07/09/116236&amp;from=rss) - [Earth is Going to Spin Much Faster Over the Next Few Months](https://soylentnews.org/article.pl?sid=25/07/09/116236&amp;from=rss)
* [2025-07-10, 17:30:33](https://news.ycombinator.com/item?id=44523372) - [Burning a Magnesium NeXT Cube (1993)](https://simson.net/ref/1993/cubefire.html)
* [2025-07-10, 16:21:13](https://news.ycombinator.com/item?id=44522683) - [Show HN: Ten years of running every day, visualized](https://nodaysoff.run)
* [2025-07-10, 13:14:00](https://soylentnews.org/article.pl?sid=25/07/09/1058230&amp;from=rss) - [Compact GeV Proton Acceleration Using Ultra-Intense Lasers](https://soylentnews.org/article.pl?sid=25/07/09/1058230&amp;from=rss)
* [2025-07-10, 10:30:42](https://news.ycombinator.com/item?id=44519395) - [The underground cathedral protecting Tokyo from floods (2018)](https://www.bbc.com/future/article/20181129-the-underground-cathedral-protecting-tokyo-from-floods)
* [2025-07-10, 08:30:00](https://soylentnews.org/article.pl?sid=25/07/08/2330230&amp;from=rss) - [Shrinking Antarctic Sea Ice Is Warming The Ocean Faster Than Expected](https://soylentnews.org/article.pl?sid=25/07/08/2330230&amp;from=rss)
* [2025-07-10, 03:45:00](https://soylentnews.org/article.pl?sid=25/07/08/1724218&amp;from=rss) - [The Curious Rise of Giant Tablets on Wheels](https://soylentnews.org/article.pl?sid=25/07/08/1724218&amp;from=rss)
