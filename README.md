# [News Summary](https://kherrick.github.io/news-summary/)

## Software and Programming Innovations

* [Perfect Jumps in SM64 - Arctan Straining Explained](https://youtu.be/_yx0eutBwII) - Exploring a mathematical technique for perfect jumps in Super Mario 64.

* [Introduction to reverse-engineering vintage synth firmware](https://ajxs.me/blog/Introduction_to_Reverse-Engineering_Vintage_Synth_Firmware.html) - A detailed guide into dissecting old synthesizer firmware.

* [Forth: The programming language that writes itself](https://ratfactor.com/forth/the_programming_language_that_writes_itself.html) - An exploration of Forth, a unique self-writing programming language.

* [Replua.nvim – an Emacs-style scratch buffer for executing Lua](https://github.com/mghaight/replua.nvim) - Introducing a tool for executing Lua in a scratch buffer like Emacs.

* [How I made my own web server in Gleam](https://wskiy.de/blog/making_my_own_web_server_in_gleam) - A personal take on creating a web server using the Gleam programming language.

* [LoC Is a Dumb Metric for Functions](https://theaxolot.wordpress.com/2025/10/18/loc-is-a-dumb-metric-for-functions/) - Understanding why lines of code might not be the best metric for assessing function quality.

* [Tracking Down a Regression in Mesa 3D](https://vkoskiv.com/mesa-regression/) - Unraveling a regression issue in Mesa 3D.

* [Doing well in your courses: Andrej's advice for success (2013)](https://cs.stanford.edu/people/karpathy/advice.html) - Advice on excelling in academic programming courses from Andrej Karpathy.

## Technology and Hardware

* [Nvidia has produced the first Blackwell wafer on US soil](https://www.xda-developers.com/nvidia-produced-first-blackwell-wafer-us-soil/) - A milestone in semiconductor manufacturing achieved in the US.

* [Duke Nukem: Zero Hour N64 ROM Reverse-Engineering Project Hits 100%](https://github.com/Gillou68310/DukeNukemZeroHour) - The completion of a retro game reverse-engineering initiative.

* [QuickDrawViewer: A Mac OS X utility to visualise QuickDraw (PICT) files](https://github.com/wiesmann/QuickDrawViewer) - A tool designed to visualize QuickDraw files on Mac OS X.

* [Librebooting the ThinkPad T480](https://ezntek.com/posts/librebooting-the-thinkpad-t480-20241207t0933/) - A deep dive into installing Libreboot on the ThinkPad T480.

* [Ripgrep 15.0.0](https://github.com/BurntSushi/ripgrep/releases/tag/15.0.0) - Updates and features in the latest release of a high-performance search tool.

## Society and Environment

* [From Hollywood to horticulture: Cate Blanchett on a mission to save seeds](https://www.bbc.com/news/articles/cwy7ekl4yl8o) - The actress's journey from Hollywood to environmental advocacy.

* [New Data Shows Record CO2 Levels in 2024. Are Carbon Sinks Failing?](https://news.slashdot.org/story/25/10/19/040239/new-data-shows-record-co2-levels-in-2024-are-carbon-sinks-failing?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Concerns about increasing CO2 levels and potential implications.

* [Poverty in Australia Increases to 1 in 7 People, According to Report](https://soylentnews.org/article.pl?sid=25/10/18/004205&from=rss) - A concerning look at poverty statistics in Australia.

* [Understanding Volcanoes Better: Scientists Find Exact Locations of Magma Movement](https://soylentnews.org/article.pl?sid=25/10/17/1219257&from=rss) - Advancements in identifying magma movements within volcanoes.

* [Western Executives Who Visit China are Coming Back Terrified](https://soylentnews.org/article.pl?sid=25/10/15/0422232&from=rss) - Reporting on cultural and political tensions impacting Western executives.

## Historical and Experimental Insights

* [Original C64 Lode Runner Source Code](https://github.com/Piddewitt/Loderunner) - The source code of the beloved game now available.

* [AT&T Long Lines – A Forgotten System (2018)](https://personal.garrettfuller.org/blog/2018/01/19/att-long-lines-a-forgotten-system/) - A trip into the history of AT&T's once-prominent communication system.

* [Improve PixelMelt's Kindle Web Deobfuscator](https://shkspr.mobi/blog/2025/10/improving-pixelmelts-kindle-web-deobfuscator/) - Enhancements in decoding Kindle's web output.

* [Dosbian: Boot to DOSBox on Raspberry Pi](https://cmaiolino.wordpress.com/dosbian/) - Turning Raspberry Pi into a bootable DOS emulator.

* [Consistent Hashing](https://eli.thegreenplace.net/2025/consistent-hashing) - An explanation of consistent hashing and its real-world applications.

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

* [2025-10-20, 04:08:45](https://lobste.rs/s/4ffid5/perfect_jumps_sm64_arctan_straining) - [Perfect Jumps in SM64 - Arctan Straining Explained](https://youtu.be/_yx0eutBwII)
* [2025-10-20, 04:03:53](https://lobste.rs/s/wsezlo/mars_pathfinder_disaster) - [Mars pathfinder disaster](https://guitarvydas.github.io/2023/10/25/Mars-Pathfinder-Disaster.html)
* [2025-10-20, 03:57:32](https://lobste.rs/s/jihdxj/no_military_funding_2004) - [No Military Funding (2004)](https://web.eecs.umich.edu/~kuipers/opinions/no-military-funding.html)
* [2025-10-20, 03:34:15](https://lobste.rs/s/9bubx6/when_it_comes_mcps_everything_we_know) - [When it comes to MCPs, everything we know about API design is wrong](https://blog.fsck.com/2025/10/19/mcps-are-not-like-other-apis/)
* [2025-10-20, 02:56:20](https://news.ycombinator.com/item?id=45639860) - [Introduction to reverse-engineering vintage synth firmware](https://ajxs.me/blog/Introduction_to_Reverse-Engineering_Vintage_Synth_Firmware.html)
* [2025-10-20, 02:34:00](https://news.slashdot.org/story/25/10/20/0230212/was-the-web-more-creative-and-human-20-years-ago?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Was the Web More Creative and Human 20 Years Ago?](https://news.slashdot.org/story/25/10/20/0230212/was-the-web-more-creative-and-human-20-years-ago?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-20, 02:12:24](https://news.ycombinator.com/item?id=45639654) - [Nvidia has produced the first Blackwell wafer on US soil](https://www.xda-developers.com/nvidia-produced-first-blackwell-wafer-us-soil/)
* [2025-10-20, 01:32:43](https://news.ycombinator.com/item?id=45639498) - [Look at how unhinged GPU box art was in the 2000s](https://www.xda-developers.com/absolutely-unhinged-gpu-box-art-from-the-early-2000s/)
* [2025-10-20, 00:40:03](https://news.ycombinator.com/item?id=45639250) - [Forth: The programming language that writes itself](https://ratfactor.com/forth/the_programming_language_that_writes_itself.html)
* [2025-10-20, 00:28:38](https://lobste.rs/s/fv1hvp/three_times_faster_with_lazy_imports) - [Three times faster with lazy imports](https://hugovk.dev/blog/2025/lazy-imports/)
* [2025-10-20, 00:20:00](https://developers.slashdot.org/story/25/10/20/005250/a-plan-for-improving-javascripts-trustworthiness-on-the-web?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Plan for Improving JavaScript&apos;s Trustworthiness on the Web](https://developers.slashdot.org/story/25/10/20/005250/a-plan-for-improving-javascripts-trustworthiness-on-the-web?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-20, 00:19:54](https://news.ycombinator.com/item?id=45639157) - [From Hollywood to horticulture: Cate Blanchett on a mission to save seeds](https://www.bbc.com/news/articles/cwy7ekl4yl8o)
* [2025-10-19, 23:52:00](https://soylentnews.org/article.pl?sid=25/10/18/004205&amp;from=rss) - [Poverty in Australia Increases to 1 in 7 People, According to Report](https://soylentnews.org/article.pl?sid=25/10/18/004205&amp;from=rss)
* [2025-10-19, 23:39:57](https://news.ycombinator.com/item?id=45638986) - [LoC Is a Dumb Metric for Functions](https://theaxolot.wordpress.com/2025/10/18/loc-is-a-dumb-metric-for-functions/)
* [2025-10-19, 23:35:25](https://news.ycombinator.com/item?id=45638966) - [QuickDrawViewer: A Mac OS X utility to visualise QuickDraw (PICT) files](https://github.com/wiesmann/QuickDrawViewer)
* [2025-10-19, 23:20:00](https://it.slashdot.org/story/25/10/19/2318202/should-workers-start-learning-to-work-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Should Workers Start Learning to Work With AI?](https://it.slashdot.org/story/25/10/19/2318202/should-workers-start-learning-to-work-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-19, 22:49:34](https://news.ycombinator.com/item?id=45638739) - [Replua.nvim – an Emacs-style scratch buffer for executing Lua](https://github.com/mghaight/replua.nvim)
* [2025-10-19, 22:25:46](https://news.ycombinator.com/item?id=45638588) - [Gleam OTP – Fault Tolerant Multicore Programs with Actors](https://github.com/gleam-lang/otp)
* [2025-10-19, 22:20:37](https://lobste.rs/s/ovn98j/add_rust_binder_driver) - [Add Rust Binder Driver](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=eafedbc7c050)
* [2025-10-19, 22:13:21](https://news.ycombinator.com/item?id=45638514) - [Original C64 Lode Runner Source Code](https://github.com/Piddewitt/Loderunner)
* [2025-10-19, 21:50:00](https://it.slashdot.org/story/25/10/19/2146235/to-fight-business-enshittification-cory-doctorow-urges-tech-workers-join-unions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [To Fight Business &apos;Enshittification&apos;, Cory Doctorow Urges Tech Workers: Join Unions](https://it.slashdot.org/story/25/10/19/2146235/to-fight-business-enshittification-cory-doctorow-urges-tech-workers-join-unions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-19, 21:34:48](https://lobste.rs/s/aovn8c/day_my_smart_vacuum_turned_against_me) - [The Day My Smart Vacuum Turned Against Me](https://codetiger.github.io/blog/the-day-my-smart-vacuum-turned-against-me/)
* [2025-10-19, 20:54:31](https://news.ycombinator.com/item?id=45637880) - [Duke Nukem: Zero Hour N64 ROM Reverse-Engineering Project Hits 100%](https://github.com/Gillou68310/DukeNukemZeroHour)
* [2025-10-19, 20:39:13](https://news.ycombinator.com/item?id=45637744) - [Novo Nordisk&apos;s Canadian Mistake](https://www.science.org/content/blog-post/novo-nordisk-s-canadian-mistake)
* [2025-10-19, 20:19:00](https://tech.slashdot.org/story/25/10/19/1954240/gimp-now-offers-an-official-snap-package-for-linux-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GIMP Now Offers an Official Snap Package For Linux Users](https://tech.slashdot.org/story/25/10/19/1954240/gimp-now-offers-an-official-snap-package-for-linux-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-19, 19:26:54](https://news.ycombinator.com/item?id=45637133) - [Dosbian: Boot to DOSBox on Raspberry Pi](https://cmaiolino.wordpress.com/dosbian/)
* [2025-10-19, 19:19:00](https://tech.slashdot.org/story/25/10/19/1914248/desperate-to-stop-waymos-dead-end-detours-a-san-francisco-resident-tried-an-orange-cone-with-a-sign?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Desperate to Stop Waymo&apos;s Dead-End Detours, a San Francisco Resident Tried an Orange Cone with a Sign](https://tech.slashdot.org/story/25/10/19/1914248/desperate-to-stop-waymos-dead-end-detours-a-san-francisco-resident-tried-an-orange-cone-with-a-sign?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-19, 19:06:00](https://soylentnews.org/article.pl?sid=25/10/18/002218&amp;from=rss) - [Windows 11 Update Breaks Localhost, Prompting Mass Uninstall Workaround](https://soylentnews.org/article.pl?sid=25/10/18/002218&amp;from=rss)
* [2025-10-19, 18:02:00](https://news.ycombinator.com/item?id=45636365) - [Compare Single Board Computers](https://sbc.compare/)
* [2025-10-19, 18:00:19](https://lobste.rs/s/fq7i4s/compare_single_board_computers) - [Compare Single Board Computers](https://sbc.compare/)
* [2025-10-19, 17:54:21](https://news.ycombinator.com/item?id=45636285) - [Airliner hit by possible space debris](https://avbrief.com/united-max-hit-by-falling-object-at-36000-feet/)
* [2025-10-19, 17:53:00](https://news.slashdot.org/story/25/10/19/1749212/sony-applies-to-establish-national-crypto-bank-issue-stablecoin-for-us-dollar?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ Sony Applies to Establish National Crypto Bank, Issue Stablecoin for US Dollar](https://news.slashdot.org/story/25/10/19/1749212/sony-applies-to-establish-national-crypto-bank-issue-stablecoin-for-us-dollar?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-19, 17:38:11](https://news.ycombinator.com/item?id=45636116) - [Could the XZ backdoor been detected with better Git/Deb packaging practices?](https://optimizedbyotto.com/post/xz-backdoor-debian-git-detection/)
* [2025-10-19, 17:00:42](https://news.ycombinator.com/item?id=45635757) - [Infisical (YC W23) Is Hiring Full Stack Engineers](https://www.ycombinator.com/companies/infisical/jobs/0gY2Da1-full-stack-engineer-global)
* [2025-10-19, 16:34:00](https://it.slashdot.org/story/25/10/19/0546205/why-signals-post-quantum-makeover-is-an-amazing-engineering-achievement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why Signal&apos;s Post-Quantum Makeover Is An Amazing Engineering Achievement](https://it.slashdot.org/story/25/10/19/0546205/why-signals-post-quantum-makeover-is-an-amazing-engineering-achievement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-19, 16:31:57](https://news.ycombinator.com/item?id=45635533) - [Doing well in your courses: Andrej&apos;s advice for success (2013)](https://cs.stanford.edu/people/karpathy/advice.html)
* [2025-10-19, 16:17:10](https://lobste.rs/s/0hhu20/at_t_long_lines_forgotten_system_2018) - [AT&amp;T Long Lines – A Forgotten System (2018)](https://personal.garrettfuller.org/blog/2018/01/19/att-long-lines-a-forgotten-system/)
* [2025-10-19, 15:48:52](https://news.ycombinator.com/item?id=45635069) - [GNU Octave Meets JupyterLite: Compute Anywhere, Anytime](https://blog.jupyter.org/gnu-octave-meets-jupyterlite-compute-anywhere-anytime-8b033afbbcdc)
* [2025-10-19, 15:34:00](https://news.slashdot.org/story/25/10/19/0439258/are-supershear-earthquakes-even-more-dangerous-than-we-thought?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Are Supershear Earthquakes Even More Dangerous Than We Thought?](https://news.slashdot.org/story/25/10/19/0439258/are-supershear-earthquakes-even-more-dangerous-than-we-thought?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-19, 14:34:00](https://news.slashdot.org/story/25/10/18/036200/fsf-reminds-consumers-that-truly-free-oss-exist?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FSF Reminds Consumers That Truly Free OS&apos;s Exist](https://news.slashdot.org/story/25/10/18/036200/fsf-reminds-consumers-that-truly-free-oss-exist?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-19, 14:22:56](https://lobste.rs/s/ec4dqf/tracking_down_regression_mesa_3d) - [Tracking Down a Regression in Mesa 3D](https://vkoskiv.com/mesa-regression/)
* [2025-10-19, 14:22:00](https://soylentnews.org/article.pl?sid=25/10/18/000230&amp;from=rss) - [Is AI Running Out of Training Data?](https://soylentnews.org/article.pl?sid=25/10/18/000230&amp;from=rss)
* [2025-10-19, 14:10:37](https://lobste.rs/s/vw7ooi/how_i_made_my_own_web_server_gleam) - [How I made my own web server in Gleam](https://wskiy.de/blog/making_my_own_web_server_in_gleam)
* [2025-10-19, 13:29:05](https://lobste.rs/s/nqn7ct/balancing_coupling_software_design) - [Balancing Coupling in Software Design](https://olano.dev/blog/balancing-coupling/)
* [2025-10-19, 13:25:44](https://lobste.rs/s/zzpztw/improving_pixelmelt_s_kindle_web) - [Improving PixelMelt&apos;s Kindle Web Deobfuscator](https://shkspr.mobi/blog/2025/10/improving-pixelmelts-kindle-web-deobfuscator/)
* [2025-10-19, 13:25:11](https://lobste.rs/s/n5khhu/weird_haskell_feels_easy) - [Weird, but Haskell feels easy](https://xlii.space/eng/haskell-feels-easy/)
* [2025-10-19, 13:01:34](https://news.ycombinator.com/item?id=45633815) - [The macOS LC_COLLATE hunt: Or why does sort order differently on macOS and Linux (2020)](https://blog.zhimingwang.org/macos-lc_collate-hunt)
* [2025-10-19, 12:21:10](https://lobste.rs/s/jgn90f/librebooting_thinkpad_t480) - [Librebooting the ThinkPad T480](https://ezntek.com/posts/librebooting-the-thinkpad-t480-20241207t0933/)
* [2025-10-19, 12:05:09](https://lobste.rs/s/m9dkcf/how_i_d_like_my_init_system_service) - [How I’d like my init system / service supervisor to be](https://runxiyu.org/blog/linit/)
* [2025-10-19, 11:34:00](https://it.slashdot.org/story/25/10/19/0238212/extortion-and-ransomware-drive-over-half-of-cyberattacks-sometimes-using-ai-microsoft-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Extortion and Ransomware Drive Over Half of Cyberattacks &amp;mdash; Sometimes Using AI, Microsoft Finds](https://it.slashdot.org/story/25/10/19/0238212/extortion-and-ransomware-drive-over-half-of-cyberattacks-sometimes-using-ai-microsoft-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-19, 11:19:38](https://news.ycombinator.com/item?id=45633453) - [Show HN: Duck-UI – Browser-Based SQL IDE for DuckDB](https://demo.duckui.com)
* [2025-10-19, 10:43:44](https://lobste.rs/s/huszno/future_python_web_services_looks_gil_free) - [The future of Python web services looks GIL-free](https://blog.baro.dev/p/the-future-of-python-web-services-looks-gil-free)
* [2025-10-19, 09:55:29](https://lobste.rs/s/fb8btf/ai_trading_real_market) - [AI Trading in Real Market](https://nof1.ai/)
* [2025-10-19, 09:36:00](https://soylentnews.org/article.pl?sid=25/10/17/2341221&amp;from=rss) - [New Psychology Research Looks at Why We Help Our Friends When They Need It](https://soylentnews.org/article.pl?sid=25/10/17/2341221&amp;from=rss)
* [2025-10-19, 09:34:38](https://lobste.rs/s/kfjzta/everybody_s_so_creative) - [Everybody&apos;s so Creative](https://daymare.net/blogs/everbody-so-creative/)
* [2025-10-19, 09:20:05](https://news.ycombinator.com/item?id=45632976) - [Deterministic multithreading is hard (2024)](https://www.factorio.com/blog/post/fff-415)
* [2025-10-19, 08:35:15](https://lobste.rs/s/0gxzau/consistent_hashing) - [Consistent Hashing](https://eli.thegreenplace.net/2025/consistent-hashing)
* [2025-10-19, 07:34:00](https://news.slashdot.org/story/25/10/19/040239/new-data-shows-record-co2-levels-in-2024-are-carbon-sinks-failing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Data Shows Record CO2 Levels in 2024. Are Carbon Sinks Failing?](https://news.slashdot.org/story/25/10/19/040239/new-data-shows-record-co2-levels-in-2024-are-carbon-sinks-failing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-19, 04:48:00](https://soylentnews.org/article.pl?sid=25/10/17/1219257&amp;from=rss) - [Understanding Volcanoes Better: Scientists Find Exact Locations of Magma Movement](https://soylentnews.org/article.pl?sid=25/10/17/1219257&amp;from=rss)
* [2025-10-19, 03:34:00](https://developers.slashdot.org/story/25/10/19/0022237/openai-cofounder-builds-new-open-source-llm-nanochat---and-doesnt-use-vibe-coding?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Cofounder Builds New Open Source LLM &apos;Nanochat&apos; - and Doesn&apos;t Use Vibe Coding](https://developers.slashdot.org/story/25/10/19/0022237/openai-cofounder-builds-new-open-source-llm-nanochat---and-doesnt-use-vibe-coding?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-19, 01:34:00](https://hardware.slashdot.org/story/25/10/19/0052247/repair-plan-underway-to-restore-power-at-ukrainian-nuclear-plant?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Repair Plan Underway to Restore Power at Ukrainian Nuclear Plant](https://hardware.slashdot.org/story/25/10/19/0052247/repair-plan-underway-to-restore-power-at-ukrainian-nuclear-plant?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-19, 00:01:00](https://soylentnews.org/article.pl?sid=25/10/18/1745254&amp;from=rss) - [Comet Lemmon (Not Lemon) Nearing Peak](https://soylentnews.org/article.pl?sid=25/10/18/1745254&amp;from=rss)
* [2025-10-18, 22:48:00](https://science.slashdot.org/story/25/10/18/2242221/protein-powders-and-shakes-contain-high-levels-of-lead?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Protein Powders and Shakes Contain High Levels of Lead](https://science.slashdot.org/story/25/10/18/2242221/protein-powders-and-shakes-contain-high-levels-of-lead?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-18, 21:39:42](https://lobste.rs/s/kdsrtf/software_can_be_finished) - [Software can be finished](https://rosswintle.uk/2025/10/software-can-be-finished/)
* [2025-10-18, 20:38:50](https://lobste.rs/s/pk8ee9/ripgrep_15_0_0) - [Ripgrep 15.0.0](https://github.com/BurntSushi/ripgrep/releases/tag/15.0.0)
* [2025-10-18, 20:24:41](https://lobste.rs/s/fzi1lj/open_letter_obsidian_team) - [An open letter to the Obsidian team](https://www.emilebangma.com/Writings/Blog/An-open-letter-to-the-Obsidian-team)
* [2025-10-18, 19:37:26](https://lobste.rs/s/chaivl/on_perfetto_open_source_company) - [On Perfetto, Open Source, and Company Priorities](https://lalitm.com/perfetto-oss-company-prio/)
* [2025-10-18, 19:16:00](https://soylentnews.org/article.pl?sid=25/10/16/1547215&amp;from=rss) - [GM to Take $1.6 Billion Hit as It Scales Back Electric Vehicle Operations](https://soylentnews.org/article.pl?sid=25/10/16/1547215&amp;from=rss)
* [2025-10-18, 14:27:00](https://soylentnews.org/article.pl?sid=25/10/16/1545234&amp;from=rss) - [Thousands of Customers Imperiled After Nation-State Ransacks F5’s Network](https://soylentnews.org/article.pl?sid=25/10/16/1545234&amp;from=rss)
* [2025-10-18, 13:29:22](https://lobste.rs/s/ko5i9y/if_you_could_redesign_linux_userland_from) - [If you could redesign Linux userland from scratch, what would you do differently?](https://lobste.rs/s/ko5i9y/if_you_could_redesign_linux_userland_from)
* [2025-10-18, 09:43:00](https://soylentnews.org/article.pl?sid=25/10/16/1543247&amp;from=rss) - [Lasers and Gold Nanoparticles Enable on-Demand Crystal Growth for New Materials](https://soylentnews.org/article.pl?sid=25/10/16/1543247&amp;from=rss)
* [2025-10-18, 04:57:00](https://soylentnews.org/article.pl?sid=25/10/16/1538252&amp;from=rss) - [Why Signal&apos;s Post-Quantum Makeover is an Amazing Engineering Achievement](https://soylentnews.org/article.pl?sid=25/10/16/1538252&amp;from=rss)
* [2025-10-18, 00:18:00](https://soylentnews.org/article.pl?sid=25/10/16/1534249&amp;from=rss) - [FSF Librephone](https://soylentnews.org/article.pl?sid=25/10/16/1534249&amp;from=rss)
* [2025-10-17, 19:33:00](https://soylentnews.org/article.pl?sid=25/10/16/0136252&amp;from=rss) - [First Device Based on &apos;Optical Thermodynamics&apos; Can Route Light Without Switches](https://soylentnews.org/article.pl?sid=25/10/16/0136252&amp;from=rss)
* [2025-10-17, 14:48:00](https://soylentnews.org/article.pl?sid=25/10/16/0130242&amp;from=rss) - [How Science, Understanding, and Capitalism Super-Charged Human Growth](https://soylentnews.org/article.pl?sid=25/10/16/0130242&amp;from=rss)
* [2025-10-17, 10:00:00](https://soylentnews.org/article.pl?sid=25/10/16/0122209&amp;from=rss) - [Nanoplastics Detected in Farm Animal Cells: Study Warns of Possible Human Consequences](https://soylentnews.org/article.pl?sid=25/10/16/0122209&amp;from=rss)
* [2025-10-17, 05:16:00](https://soylentnews.org/article.pl?sid=25/10/16/0117201&amp;from=rss) - [Elon Musk Plans to Take on Wikipedia With &apos;Grokipedia&apos;](https://soylentnews.org/article.pl?sid=25/10/16/0117201&amp;from=rss)
* [2025-10-17, 00:30:00](https://soylentnews.org/article.pl?sid=25/10/16/0112201&amp;from=rss) - [Drones Rain Fire on Crowd in Southern China](https://soylentnews.org/article.pl?sid=25/10/16/0112201&amp;from=rss)
* [2025-10-16, 19:48:00](https://soylentnews.org/article.pl?sid=25/10/15/0422232&amp;from=rss) - [Western Executives Who Visit China are Coming Back Terrified](https://soylentnews.org/article.pl?sid=25/10/15/0422232&amp;from=rss)
* [2025-10-16, 15:03:00](https://soylentnews.org/article.pl?sid=25/10/14/1737233&amp;from=rss) - [New Method is the Fastest Way to Find the Best Routes](https://soylentnews.org/article.pl?sid=25/10/14/1737233&amp;from=rss)
* [2025-10-16, 10:18:00](https://soylentnews.org/article.pl?sid=25/10/14/1729247&amp;from=rss) - [Microsoft Restricts IE Mode Access in Edge After Zero-Day Attacks](https://soylentnews.org/article.pl?sid=25/10/14/1729247&amp;from=rss)
* [2025-10-16, 05:37:00](https://soylentnews.org/article.pl?sid=25/10/14/069243&amp;from=rss) - [Wild Honeybees Now Officially Listed as Endangered in the EU](https://soylentnews.org/article.pl?sid=25/10/14/069243&amp;from=rss)
* [2025-10-16, 00:54:00](https://soylentnews.org/article.pl?sid=25/10/13/233212&amp;from=rss) - [97% of Companies Struggle to Prove AI&apos;s ROI - but These 5 Expert Tips Can Help](https://soylentnews.org/article.pl?sid=25/10/13/233212&amp;from=rss)
