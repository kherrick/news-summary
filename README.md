# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Engineering

* [A CT scanner reveals surprises inside the 386 processor's ceramic package](http://www.righto.com/2025/08/intel-386-package-ct-scan.html) ([comments](https://lobste.rs/s/w5eawb/ct_scanner_reveals_surprises_inside_386))

* [Chevy Silverado EV Drives 1,059.2 Miles on a Single Charge, Surpassing World Record](https://tech.slashdot.org/story/25/08/09/0517212/chevy-silverado-ev-drives-10592-miles-on-a-single-charge-surpassing-world-record?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://tech.slashdot.org/story/25/08/09/0517212/chevy-silverado-ev-drives-10592-miles-on-a-single-charge-surpassing-world-record?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [ESP32 Bus Pirate 0.5 – A Hardware Hacking Tool That Speaks Every Protocol](https://github.com/geo-tp/ESP32-Bus-Pirate) ([comments](https://news.ycombinator.com/item?id=44847001))

* [California Successfully Tests 'Virtual Power Plant', Drawing Power From Batteries in 100,000 Homes](https://hardware.slashdot.org/story/25/08/09/0446221/california-successfully-tests-virtual-power-plant-drawing-power-from-batteries-in-100000-homes?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://hardware.slashdot.org/story/25/08/09/0446221/california-successfully-tests-virtual-power-plant-drawing-power-from-batteries-in-100000-homes?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Space Exploration and Science

* [Spacecraft Designed That Could Carry 2,400 People on a 400-Year Trip to Alpha Centauri](https://science.slashdot.org/story/25/08/09/1731242/spacecraft-designed-that-could-carry-2400-people-on-a-400-year-trip-to-alpha-centauri?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://science.slashdot.org/story/25/08/09/1731242/spacecraft-designed-that-could-carry-2400-people-on-a-400-year-trip-to-alpha-centauri?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [NASA Crew-10 Astronauts Depart Space Station After Five-Month Mission](https://science.slashdot.org/story/25/08/08/2323252/nasa-crew-10-astronauts-depart-space-station-after-five-month-mission?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://science.slashdot.org/story/25/08/08/2323252/nasa-crew-10-astronauts-depart-space-station-after-five-month-mission?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Inspired by Astronauts, Researchers Use High-Tech Pants to Uncover Heart Issues on MRI](https://soylentnews.org/article.pl?sid=25/08/05/1441236&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/08/05/1441236&from=rss))

## Software and AI

* [Don Knuth on ChatGPT(07 April 2023)](https://cs.stanford.edu/~knuth/chatGPT20.txt) ([comments](https://news.ycombinator.com/item?id=44848259))

* [The current state of LLM-driven development](http://blog.tolki.dev/posts/2025/08-07-llms/) ([comments](https://news.ycombinator.com/item?id=44847741))

* [Red Teams Jailbreak GPT-5 With Ease, Warn It's 'Nearly Unusable' For Enterprise](https://it.slashdot.org/story/25/08/08/2113251/red-teams-jailbreak-gpt-5-with-ease-warn-its-nearly-unusable-for-enterprise?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://it.slashdot.org/story/25/08/08/2113251/red-teams-jailbreak-gpt-5-with-ease-warn-its-nearly-unusable-for-enterprise?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Human Interest and Society

* [Ratfactor's Illustrated Guide to Folding Fitted Sheets](https://ratfactor.com/cards/fitted-sheets) ([comments](https://news.ycombinator.com/item?id=44845839))

* [An Ohio Couple Welcomes a Baby Boy From a Nearly 31-Year-Old Frozen Embryo](https://soylentnews.org/article.pl?sid=25/08/08/0353246&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/08/08/0353246&from=rss))

* [Residents cheer as Tucson rejects data center campus](https://www.datacenterdynamics.com/en/news/residents-cheer-as-tucson-rejects-amazons-massive-project-blue-data-center-campus-in-arizona/) ([comments](https://news.ycombinator.com/item?id=44848698))

## Cybersecurity and Privacy

* [Debian 13 "Trixie"](https://www.debian.org/News/2025/20250809) ([comments](https://news.ycombinator.com/item?id=44848782))

* [Plague: A Newly Discovered PAM-Based Backdoor for Linux](https://soylentnews.org/article.pl?sid=25/08/05/1452205&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/08/05/1452205&from=rss))

* [Net Neutrality Advocates Won't Appeal Loss](https://yro.slashdot.org/story/25/08/08/222237/net-neutrality-advocates-wont-appeal-loss?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://yro.slashdot.org/story/25/08/08/222237/net-neutrality-advocates-wont-appeal-loss?utm_source=rss1.0mainlinkanon&utm_medium=feed))

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

* [2025-08-09, 18:47:28](https://lobste.rs/s/w5eawb/ct_scanner_reveals_surprises_inside_386) - [A CT scanner reveals surprises inside the 386 processor&apos;s ceramic package](http://www.righto.com/2025/08/intel-386-package-ct-scan.html)
* [2025-08-09, 18:34:00](https://science.slashdot.org/story/25/08/09/1731242/spacecraft-designed-that-could-carry-2400-people-on-a-400-year-trip-to-alpha-centauri?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Spacecraft Designed That Could Carry 2,400 People on a 400-Year Trip to Alpha Centauri](https://science.slashdot.org/story/25/08/09/1731242/spacecraft-designed-that-could-carry-2400-people-on-a-400-year-trip-to-alpha-centauri?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-09, 18:18:45](https://news.ycombinator.com/item?id=44848782) - [Debian 13 \&quot;Trixie\&quot;](https://www.debian.org/News/2025/20250809)
* [2025-08-09, 18:15:00](https://soylentnews.org/article.pl?sid=25/08/09/0113237&amp;from=rss) - [YouTube to Gauge US Users’ Ages With AI After UK and Australia Add Age Checks](https://soylentnews.org/article.pl?sid=25/08/09/0113237&amp;from=rss)
* [2025-08-09, 18:09:56](https://news.ycombinator.com/item?id=44848698) - [Residents cheer as Tucson rejects data center campus](https://www.datacenterdynamics.com/en/news/residents-cheer-as-tucson-rejects-amazons-massive-project-blue-data-center-campus-in-arizona/)
* [2025-08-09, 17:34:00](https://tech.slashdot.org/story/25/08/09/0517212/chevy-silverado-ev-drives-10592-miles-on-a-single-charge-surpassing-world-record?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chevy Silverado EV Drives 1,059.2 Miles on a Single Charge, Surpassing World Record](https://tech.slashdot.org/story/25/08/09/0517212/chevy-silverado-ev-drives-10592-miles-on-a-single-charge-surpassing-world-record?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-09, 17:17:07](https://news.ycombinator.com/item?id=44848293) - [A CT scanner reveals surprises inside the 386 processor&apos;s ceramic package](https://www.righto.com/2025/08/intel-386-package-ct-scan.html)
* [2025-08-09, 17:13:14](https://news.ycombinator.com/item?id=44848259) - [Don Knuth on ChatGPT(07 April 2023)](https://cs.stanford.edu/~knuth/chatGPT20.txt)
* [2025-08-09, 16:58:47](https://lobste.rs/s/cy5mns/from_chrome_renderer_code_exec_kernel) - [From Chrome renderer code exec to kernel with MSG_OOB](https://googleprojectzero.blogspot.com/2025/08/from-chrome-renderer-code-exec-to-kernel.html)
* [2025-08-09, 16:52:02](https://news.ycombinator.com/item?id=44848058) - [Ask HN: What Toolchains Are People Using for Desktop App Development in 2025?](https://news.ycombinator.com/item?id=44848058)
* [2025-08-09, 16:44:28](https://lobste.rs/s/rqk6cs/accessibility_agentic_web) - [Accessibility and the agentic web](https://tetralogical.com/blog/2025/08/08/accessibility-and-the-agentic-web/)
* [2025-08-09, 16:44:01](https://news.ycombinator.com/item?id=44847971) - [Accessibility and the Agentic Web](https://tetralogical.com/blog/2025/08/08/accessibility-and-the-agentic-web/)
* [2025-08-09, 16:34:00](https://news.slashdot.org/story/25/08/09/0624254/students-have-been-called-to-the-office---or-arrested---for-false-alarms-from-ai-powered-surveillance-systems?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Students Have Been Called to the Office - Or Arrested - for False Alarms from AI-Powered Surveillance Systems](https://news.slashdot.org/story/25/08/09/0624254/students-have-been-called-to-the-office---or-arrested---for-false-alarms-from-ai-powered-surveillance-systems?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-09, 16:17:16](https://news.ycombinator.com/item?id=44847741) - [The current state of LLM-driven development](http://blog.tolki.dev/posts/2025/08-07-llms/)
* [2025-08-09, 15:52:22](https://news.ycombinator.com/item?id=44847481) - [Empire of the Absurd: A Brief History of the Absurdities of the Soviet Union](https://laurivahtre.ee/empire-of-the-absurd/)
* [2025-08-09, 15:48:40](https://lobste.rs/s/vvntib/why_mcp_s_disregard_for_40_years_rpc_best) - [Why MCP’s Disregard for 40 Years of RPC Best Practices Will Burn Enterprises](https://julsimon.medium.com/why-mcps-disregard-for-40-years-of-rpc-best-practices-will-burn-enterprises-8ef85ce5bc9b)
* [2025-08-09, 15:41:57](https://news.ycombinator.com/item?id=44847368) - [ChatGPT Agent – EU Launch](https://help.openai.com/en/articles/11752874-chatgpt-agent)
* [2025-08-09, 15:36:21](https://news.ycombinator.com/item?id=44847334) - [End-User Programmable AI](https://queue.acm.org/detail.cfm?id=3746223)
* [2025-08-09, 15:36:16](https://lobste.rs/s/lqztqk/irmin_retrospective) - [Irmin Retrospective](https://patrick.sirref.org/irmin-retro/index.xml)
* [2025-08-09, 15:34:00](https://linux.slashdot.org/story/25/08/09/0328207/kdes-other-distro---kde-linux---now-available-to-download-in-pre-alpha?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [KDE&apos;s &apos;Other&apos; Distro - KDE Linux - Now Available To Download In Pre-Alpha](https://linux.slashdot.org/story/25/08/09/0328207/kdes-other-distro---kde-linux---now-available-to-download-in-pre-alpha?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-09, 15:05:48](https://lobste.rs/s/rlrrgk/notes_on_smaller_rust_2019) - [Notes on a smaller Rust (2019)](https://without.boats/blog/notes-on-a-smaller-rust/)
* [2025-08-09, 15:03:43](https://lobste.rs/s/vvis5u/what_even_is_distributed_systems) - [What even is distributed systems](https://notes.eatonphil.com/2025-08-09-what-even-is-distributed-systems.html)
* [2025-08-09, 14:56:16](https://news.ycombinator.com/item?id=44847001) - [ESP32 Bus Pirate 0.5 – A Hardware Hacking Tool That Speaks Every Protocol](https://github.com/geo-tp/ESP32-Bus-Pirate)
* [2025-08-09, 14:47:38](https://news.ycombinator.com/item?id=44846922) - [Simon Willison&apos;s Lethal Trifecta Talk at the Bay Area AI Security Meetup](https://simonwillison.net/2025/Aug/9/bay-area-ai/)
* [2025-08-09, 14:42:10](https://news.ycombinator.com/item?id=44846871) - [MCP&apos;s Disregard for 40 Years of RPC Best Practices](https://julsimon.medium.com/why-mcps-disregard-for-40-years-of-rpc-best-practices-will-burn-enterprises-8ef85ce5bc9b)
* [2025-08-09, 14:41:56](https://lobste.rs/s/pnu5hc/why_racket_why_lisp) - [Why Racket? Why Lisp?](https://practicaltypography.com/why-racket-why-lisp.html)
* [2025-08-09, 14:34:00](https://hardware.slashdot.org/story/25/08/09/0446221/california-successfully-tests-virtual-power-plant-drawing-power-from-batteries-in-100000-homes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [California Successfully Tests &apos;Virtual Power Plant&apos;, Drawing Power From Batteries in 100,000 Homes](https://hardware.slashdot.org/story/25/08/09/0446221/california-successfully-tests-virtual-power-plant-drawing-power-from-batteries-in-100000-homes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-09, 14:30:49](https://news.ycombinator.com/item?id=44846758) - [Mexico to US livestock trade halted due to screwworm spread](https://www.usda.gov/about-usda/news/press-releases/2025/07/09/secretary-rollins-takes-decisive-action-and-shuts-down-us-southern-border-ports-livestock-trade-due)
* [2025-08-09, 13:48:00](https://soylentnews.org/article.pl?sid=25/08/08/047222&amp;from=rss) - [Hacker Summer Camp: What to Expect From BSides, Black Hat, and DEF CON](https://soylentnews.org/article.pl?sid=25/08/08/047222&amp;from=rss)
* [2025-08-09, 13:32:02](https://news.ycombinator.com/item?id=44846323) - [The dead need right to delete their data so they can&apos;t be AI-ified, lawyer says](https://www.theregister.com/2025/08/09/dead_need_ai_data_delete_right/)
* [2025-08-09, 13:31:30](https://news.ycombinator.com/item?id=44846318) - [OpenFreeMap survived 100k requests per second](https://blog.hyperknot.com/p/openfreemap-survived-100000-requests)
* [2025-08-09, 13:25:16](https://news.ycombinator.com/item?id=44846281) - [Show HN: The current sky at your approximate location, as a CSS gradient](https://sky.dlazaro.ca)
* [2025-08-09, 13:01:31](https://news.ycombinator.com/item?id=44846164) - [Long-term exposure to outdoor air pollution linked to increased risk of dementia](https://www.cam.ac.uk/research/news/long-term-exposure-to-outdoor-air-pollution-linked-to-increased-risk-of-dementia)
* [2025-08-09, 12:54:09](https://news.ycombinator.com/item?id=44846130) - [Stanford to continue legacy admissions and withdraw from Cal Grants](https://www.forbes.com/sites/michaeltnietzel/2025/08/08/stanford-to-continue-legacy-admissions-and-withdraw-from-cal-grants/)
* [2025-08-09, 11:58:52](https://news.ycombinator.com/item?id=44845839) - [Ratfactor&apos;s Illustrated Guide to Folding Fitted Sheets](https://ratfactor.com/cards/fitted-sheets)
* [2025-08-09, 11:35:39](https://lobste.rs/s/qx8lw4/framework_desktop_is_beast) - [The Framework Desktop is a beast](https://world.hey.com/dhh/the-framework-desktop-is-a-beast-636fb4ff)
* [2025-08-09, 10:00:00](https://yro.slashdot.org/story/25/08/08/2335203/japanese-company-staff-implicated-in-alleged-theft-of-key-tsmc-technology?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Japanese Company Staff Implicated In Alleged Theft of Key TSMC Technology](https://yro.slashdot.org/story/25/08/08/2335203/japanese-company-staff-implicated-in-alleged-theft-of-key-tsmc-technology?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-09, 09:54:13](https://news.ycombinator.com/item?id=44845272) - [Jan – Ollama alternative with local UI](https://github.com/menloresearch/jan)
* [2025-08-09, 09:38:47](https://lobste.rs/s/htrh9u/partially_matching_zig_enums) - [Partially Matching Zig Enums](https://matklad.github.io/2025/08/08/partially-matching-zig-enums.html)
* [2025-08-09, 09:35:31](https://lobste.rs/s/vtipaz/on_window_activation) - [On Window Activation](https://blog.broulik.de/2025/08/on-window-activation/)
* [2025-08-09, 09:22:56](https://lobste.rs/s/7laqgd/engineer_s_perspective_on_hiring) - [an engineer&apos;s perspective on hiring](https://jyn.dev/an-engineers-perspective-on-hiring)
* [2025-08-09, 09:12:14](https://lobste.rs/s/phb7ir/why_i_prefer_human_readable_file_formats) - [Why I prefer human-readable file formats](https://adele.pollux.casa/gemlog/2025-08-04_why_I_prefer_human-readble_file_formats.gmi)
* [2025-08-09, 09:02:00](https://soylentnews.org/article.pl?sid=25/08/08/0353246&amp;from=rss) - [An Ohio Couple Welcomes a Baby Boy From a Nearly 31-Year-Old Frozen Embryo](https://soylentnews.org/article.pl?sid=25/08/08/0353246&amp;from=rss)
* [2025-08-09, 07:00:00](https://science.slashdot.org/story/25/08/08/2323252/nasa-crew-10-astronauts-depart-space-station-after-five-month-mission?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Crew-10 Astronauts Depart Space Station After Five-Month Mission](https://science.slashdot.org/story/25/08/08/2323252/nasa-crew-10-astronauts-depart-space-station-after-five-month-mission?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-09, 06:46:14](https://news.ycombinator.com/item?id=44844561) - [Tribblix – The Retro Illumos Distribution](http://www.tribblix.org/)
* [2025-08-09, 06:06:56](https://news.ycombinator.com/item?id=44844394) - [Sandstorm- self-hostable web productivity suite](https://sandstorm.org/)
* [2025-08-09, 05:34:09](https://news.ycombinator.com/item?id=44844257) - [Breaking the Sorting Barrier for Directed Single-Source Shortest Paths](https://arxiv.org/abs/2504.17033)
* [2025-08-09, 05:04:38](https://lobste.rs/s/dhjlvv/gnome_49_backlight_changes) - [GNOME 49 Backlight Changes](https://blog.sebastianwick.net/posts/gnome-49-backlight-changes/)
* [2025-08-09, 04:55:49](https://lobste.rs/s/6v9osj/over_engineering_my_homelab_so_i_don_t_pay) - [Over engineering my homelab so I don&apos;t pay cloud providers](https://ergaster.org/posts/2025/08/04-overegineering-homelab/)
* [2025-08-09, 04:16:00](https://soylentnews.org/article.pl?sid=25/08/08/0113247&amp;from=rss) - [KubeSphere Kills Open Source Edition](https://soylentnews.org/article.pl?sid=25/08/08/0113247&amp;from=rss)
* [2025-08-09, 03:30:00](https://science.slashdot.org/story/25/08/08/2150214/smartwatches-offer-little-insight-into-stress-levels-researchers-find?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Smartwatches Offer Little Insight Into Stress Levels, Researchers Find](https://science.slashdot.org/story/25/08/08/2150214/smartwatches-offer-little-insight-into-stress-levels-researchers-find?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-09, 02:44:20](https://lobste.rs/s/5qq2k2/why_is_github_ui_getting_so_much_slower) - [Why is GitHub UI getting so much slower?](https://yoyo-code.com/why-is-github-ui-getting-so-much-slower/)
* [2025-08-09, 02:02:00](https://yro.slashdot.org/story/25/08/08/222237/net-neutrality-advocates-wont-appeal-loss?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Net Neutrality Advocates Won&apos;t Appeal Loss](https://yro.slashdot.org/story/25/08/08/222237/net-neutrality-advocates-wont-appeal-loss?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-09, 01:25:00](https://games.slashdot.org/story/25/08/08/2140221/millions-flock-to-grow-virtual-gardens-in-viral-roblox-game?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Millions Flock To Grow Virtual Gardens In Viral Roblox Game](https://games.slashdot.org/story/25/08/08/2140221/millions-flock-to-grow-virtual-gardens-in-viral-roblox-game?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-09, 01:05:32](https://lobste.rs/s/wnmrkl/spellchecker_used_be_major_feat_software) - [A Spellchecker Used to Be a Major Feat of Software Engineering (2008)](https://prog21.dadgum.com/29.html)
* [2025-08-09, 00:45:00](https://yro.slashdot.org/story/25/08/08/2133257/uk-courts-service-covered-up-it-bug-that-lost-evidence?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Courts Service &apos;Covered Up&apos; IT Bug That Lost Evidence](https://yro.slashdot.org/story/25/08/08/2133257/uk-courts-service-covered-up-it-bug-that-lost-evidence?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-09, 00:02:00](https://it.slashdot.org/story/25/08/08/2113251/red-teams-jailbreak-gpt-5-with-ease-warn-its-nearly-unusable-for-enterprise?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Red Teams Jailbreak GPT-5 With Ease, Warn It&apos;s &apos;Nearly Unusable&apos; For Enterprise](https://it.slashdot.org/story/25/08/08/2113251/red-teams-jailbreak-gpt-5-with-ease-warn-its-nearly-unusable-for-enterprise?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-08, 23:35:00](https://soylentnews.org/article.pl?sid=25/08/08/0056210&amp;from=rss) - [RFK Jr Cancels $500m in mRNA Vaccine Development in the US](https://soylentnews.org/article.pl?sid=25/08/08/0056210&amp;from=rss)
* [2025-08-08, 23:20:00](https://science.slashdot.org/story/25/08/08/211245/apollo-13-astronaut-jim-lovell-dies-at-97?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apollo 13 Astronaut Jim Lovell Dies At 97](https://science.slashdot.org/story/25/08/08/211245/apollo-13-astronaut-jim-lovell-dies-at-97?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-08, 22:40:00](https://slashdot.org/story/25/08/08/2053229/chatgpt-is-bringing-back-4o?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ChatGPT Is Bringing Back 4o](https://slashdot.org/story/25/08/08/2053229/chatgpt-is-bringing-back-4o?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-08, 22:00:00](https://yro.slashdot.org/story/25/08/08/2040214/ai-industry-horrified-to-face-largest-copyright-class-action-ever-certified?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Industry Horrified To Face Largest Copyright Class Action Ever Certified](https://yro.slashdot.org/story/25/08/08/2040214/ai-industry-horrified-to-face-largest-copyright-class-action-ever-certified?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-08, 21:51:29](https://lobste.rs/s/vzr1b1/introducing_spindle) - [Introducing spindle](https://blog.tangled.sh/ci)
* [2025-08-08, 21:35:30](https://lobste.rs/s/bc53lh/lobsters_interview_with_hwayne) - [Lobsters Interview with Hwayne](https://lobste.rs/s/bc53lh/lobsters_interview_with_hwayne)
* [2025-08-08, 21:20:21](https://lobste.rs/s/qtm9uv/puzzling_python_program) - [A puzzling Python program](https://jo3-l.dev/posts/python-countdown/)
* [2025-08-08, 18:50:00](https://soylentnews.org/article.pl?sid=25/08/07/1131203&amp;from=rss) - [More Malware Uploaded to Arch Linux AUR](https://soylentnews.org/article.pl?sid=25/08/07/1131203&amp;from=rss)
* [2025-08-08, 18:19:05](https://news.ycombinator.com/item?id=44840013) - [I want everything local – Building my offline AI workspace](https://instavm.io/blog/building-my-offline-ai-workspace)
* [2025-08-08, 15:30:03](https://lobste.rs/s/zrbpds/hypothesis_is_now_thread_safe) - [Hypothesis is now thread-safe](https://hypothesis.works/articles/thread-safe/)
* [2025-08-08, 15:00:28](https://lobste.rs/s/fswjtl/programming_as_extended_cognition) - [Programming as Extended Cognition](https://ieeexplore.ieee.org/document/11119124)
* [2025-08-08, 14:05:00](https://soylentnews.org/article.pl?sid=25/08/07/0255247&amp;from=rss) - [Ubuntu Replacing wget With wcurl](https://soylentnews.org/article.pl?sid=25/08/07/0255247&amp;from=rss)
* [2025-08-08, 13:36:25](https://lobste.rs/s/gk3luv/how_long_does_it_take_upgrade_ebook) - [How long does it take to upgrade an eBook?](https://shkspr.mobi/blog/2025/08/how-long-does-it-take-to-upgrade-an-ebook/)
* [2025-08-08, 12:59:03](https://lobste.rs/s/qllaru/http_is_not_simple) - [HTTP is not simple](https://daniel.haxx.se/blog/2025/08/08/http-is-not-simple/)
* [2025-08-08, 09:22:00](https://soylentnews.org/article.pl?sid=25/08/07/0248239&amp;from=rss) - [Hiding Secret Codes in Light Can Protect Against Fake Videos](https://soylentnews.org/article.pl?sid=25/08/07/0248239&amp;from=rss)
* [2025-08-08, 06:55:32](https://lobste.rs/s/zxppfh/all_cool_kids_are_doing_it) - [All the cool kids are doing it](https://www.scattered-thoughts.net/writing/all-the-cool-kids-are-doing-it/)
* [2025-08-08, 04:35:00](https://soylentnews.org/article.pl?sid=25/08/06/235236&amp;from=rss) - [China&apos;s Solar Giants Quietly Shed a Third of Their Workforces Last Year](https://soylentnews.org/article.pl?sid=25/08/06/235236&amp;from=rss)
* [2025-08-07, 23:52:00](https://soylentnews.org/article.pl?sid=25/08/06/1435231&amp;from=rss) - [OpenAI Announces Two “gpt-oss” Open AI Models, and You Can Download Them Today](https://soylentnews.org/article.pl?sid=25/08/06/1435231&amp;from=rss)
* [2025-08-07, 19:07:00](https://soylentnews.org/article.pl?sid=25/08/06/1129217&amp;from=rss) - [U.S. Semiconductor Design Company Fined $140 Million Over China Dealings](https://soylentnews.org/article.pl?sid=25/08/06/1129217&amp;from=rss)
* [2025-08-07, 14:22:00](https://soylentnews.org/article.pl?sid=25/08/06/1123237&amp;from=rss) - [AWS Deleted a 10-Year Account and All Data Without Warning](https://soylentnews.org/article.pl?sid=25/08/06/1123237&amp;from=rss)
* [2025-08-07, 09:33:00](https://soylentnews.org/article.pl?sid=25/08/05/1550247&amp;from=rss) - [Underwater Robot Draws in Millions of Viewers](https://soylentnews.org/article.pl?sid=25/08/05/1550247&amp;from=rss)
* [2025-08-07, 04:51:00](https://soylentnews.org/article.pl?sid=25/08/05/151223&amp;from=rss) - [Infrared Contact Lens Helps People See in the Dark, Even With Their Eyes Closed](https://soylentnews.org/article.pl?sid=25/08/05/151223&amp;from=rss)
* [2025-08-07, 00:07:00](https://soylentnews.org/article.pl?sid=25/08/05/1452205&amp;from=rss) - [Plague: A Newly Discovered PAM-Based Backdoor for Linux](https://soylentnews.org/article.pl?sid=25/08/05/1452205&amp;from=rss)
* [2025-08-06, 19:20:00](https://soylentnews.org/article.pl?sid=25/08/05/1446223&amp;from=rss) - [Russian Volcano Erupts for First Time in Centuries](https://soylentnews.org/article.pl?sid=25/08/05/1446223&amp;from=rss)
* [2025-08-06, 17:40:40](https://news.ycombinator.com/item?id=44815164) - [Testing Bitchat at the music festival](https://primal.net/saunter/testing-bitchat-at-the-music-festival)
* [2025-08-06, 14:37:00](https://soylentnews.org/article.pl?sid=25/08/05/1441236&amp;from=rss) - [Inspired by Astronauts, Researchers Use High-Tech Pants to Uncover Heart Issues on MRI](https://soylentnews.org/article.pl?sid=25/08/05/1441236&amp;from=rss)
* [2025-08-06, 10:06:45](https://news.ycombinator.com/item?id=44810057) - [Which Colors Are Primary?](https://jamesgurney.substack.com/p/which-colors-are-primary)
* [2025-08-06, 09:58:00](https://soylentnews.org/article.pl?sid=25/08/05/1150228&amp;from=rss) - [Space&apos;s Spinning Enigma: A ‘Unicorn’ Object Defies Astrophysics](https://soylentnews.org/article.pl?sid=25/08/05/1150228&amp;from=rss)
* [2025-08-06, 05:08:00](https://soylentnews.org/article.pl?sid=25/08/05/0156215&amp;from=rss) - [AI and the Democratization of Cybercrime](https://soylentnews.org/article.pl?sid=25/08/05/0156215&amp;from=rss)
* [2025-08-06, 00:53:44](https://news.ycombinator.com/item?id=44806422) - [Car has more than 1.2M km on it – and it&apos;s still going strong](https://www.cbc.ca/news/canada/nova-scotia/1985-toyota-tercel-high-mileage-1.7597168)
* [2025-08-06, 00:25:00](https://soylentnews.org/article.pl?sid=25/08/05/0152249&amp;from=rss) - [Christiaan Huygens and the Scientific Secrets of Saturn](https://soylentnews.org/article.pl?sid=25/08/05/0152249&amp;from=rss)
* [2025-08-05, 19:40:00](https://soylentnews.org/article.pl?sid=25/08/04/0644251&amp;from=rss) - [ChatGPT Users Shocked to Learn Their Chats Were in Google Search Results](https://soylentnews.org/article.pl?sid=25/08/04/0644251&amp;from=rss)
* [2025-08-05, 19:00:51](https://news.ycombinator.com/item?id=44802657) - [Cordoomceps – replacing an Amiga&apos;s brain with Doom](https://mjg59.dreamwidth.org/73001.html)
* [2025-08-05, 16:18:53](https://news.ycombinator.com/item?id=44800048) - [Quickshell – building blocks for your desktop](https://quickshell.org/)
* [2025-08-05, 14:54:00](https://soylentnews.org/article.pl?sid=25/08/03/2140229&amp;from=rss) - [China Forms AI Alliances To Cut U.S. Tech Reliance](https://soylentnews.org/article.pl?sid=25/08/03/2140229&amp;from=rss)
* [2025-08-05, 10:03:00](https://soylentnews.org/article.pl?sid=25/08/03/2136209&amp;from=rss) - [Solid-State Batteries Charge in 3 Minutes:  Why Aren&apos;t They in Your Phones and Cars Yet?](https://soylentnews.org/article.pl?sid=25/08/03/2136209&amp;from=rss)
* [2025-08-05, 05:22:00](https://soylentnews.org/article.pl?sid=25/08/03/0242234&amp;from=rss) - [Ousted Vaccine Panel Members Say Rigorous Science is Being Abandoned](https://soylentnews.org/article.pl?sid=25/08/03/0242234&amp;from=rss)
* [2025-08-05, 00:40:00](https://soylentnews.org/article.pl?sid=25/08/03/0225206&amp;from=rss) - [World News: United Nations Report Finds UN Reports Aren’t Widely Read](https://soylentnews.org/article.pl?sid=25/08/03/0225206&amp;from=rss)
