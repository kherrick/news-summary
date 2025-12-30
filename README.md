# [News Summary](https://kherrick.github.io/news-summary/)

## Corporate Acquisitions and Partnerships

* [Meta Just Bought Manus, an AI Startup Everyone Has Been Talking About](https://meta.slashdot.org/story/25/12/30/0640250/meta-just-bought-manus-an-ai-startup-everyone-has-been-talking-about?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Nvidia Takes $5 Billion Stake In Intel Under September Agreement](https://slashdot.org/story/25/12/29/2130223/nvidia-takes-5-billion-stake-in-intel-under-september-agreement?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [ManusAI Joins Meta](https://manus.im/blog/manus-joins-meta-for-next-era-of-innovation)

## Technological Innovations

* [Phoenix Emerges as a Modern X Server Written From Scratch in Zig](https://soylentnews.org/article.pl?sid=25/12/28/1115208&from=rss)

* [Researchers Make 'Neuromorphic' Artificial Skin For Robots](https://hardware.slashdot.org/story/25/12/29/2344207/researchers-make-neuromorphic-artificial-skin-for-robots?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Engineer Turns E-Ink Tablet Into Computer Monitor in Linux](https://soylentnews.org/article.pl?sid=25/12/27/2318230&from=rss)

* [Velox is a port of Tauri to Swift](https://github.com/velox-apps/velox)

## AI Integration and Ethical Concerns

* [Sam Altman Offers $555K Salary To Fill Most Daunting Role In AI](https://news.slashdot.org/story/25/12/29/2136221/sam-altman-offers-555k-salary-to-fill-most-daunting-role-in-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [China Drafts World's Strictest Rules To End AI-Encouraged Suicide, Violence](https://slashdot.org/story/25/12/29/2127224/china-drafts-worlds-strictest-rules-to-end-ai-encouraged-suicide-violence?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [AI is forcing us to write good code](https://bits.logic.inc/p/ai-is-forcing-us-to-write-good-code)

## Science and Environment

* [Stingless Bees From the Amazon Granted Legal Rights in World First](https://science.slashdot.org/story/25/12/29/1956236/stingless-bees-from-the-amazon-granted-legal-rights-in-world-first?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Geology of the Gulf of the Farallones National Marine Sanctuary](https://pubs.usgs.gov/fs/farallones/)

* [How Recent is "Recent?"](https://soylentnews.org/article.pl?sid=25/12/27/235226&from=rss)

## Software and Development Innovations

* [Static Allocation with Zig](https://nickmonad.blog/2025/static-allocation-with-zig-kv/)

* [Replacing python-dateutil to remove six](https://hugovk.dev/blog/2025/minus-six/)

* [Curl removes all calls to strcpy](https://daniel.haxx.se/blog/2025/12/29/no-strcpy-either/)

* [Parsing Advances](https://matklad.github.io/2025/12/28/parsing-advances.html)

* [Garbage collection in Rust got a little better](https://claytonwramsey.com/blog/dumpster2/)

## Unique Reads and Experiments

* [Shouting at Seagulls Could Stop Them Stealing Your Food](https://soylentnews.org/article.pl?sid=25/12/28/1112249&from=rss)

* [Hacking Washing Machines [video]](https://media.ccc.de/v/39c3-hacking-washing-machines)

* [My First Meshtastic Network](https://rickcarlino.com/notes/electronics/my-first-meshtastic-network.html)

* [Finding a broken trace on my old Mac with the help of its ROM diagnostics](https://www.downtowndougbrown.com/2025/12/finding-a-broken-trace-on-my-old-mac-with-the-help-of-its-rom-diagnostics/)

## Cultural and Miscellaneous

* [The Silicon Valley Stack Doesn’t Work Here: Why Africa Will Lead the Post-Bloat Web](https://paulallies.medium.com/the-silicon-valley-stack-doesnt-work-here-why-africa-will-lead-the-post-bloat-web-e7c34b577c61)

* [Kidnapped by Deutsche Bahn](https://www.theocharis.dev/blog/kidnapped-by-deutsche-bahn/)

* [After a Decade of Dead Ends, $70 Million Rides on Locating Flight MH370](https://news.slashdot.org/story/25/12/29/1952225/after-a-decade-of-dead-ends-70-million-rides-on-locating-flight-mh370?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Why Swearing Makes You Stronger](https://soylentnews.org/article.pl?sid=25/12/27/2258256&from=rss)

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

* [2025-12-30, 10:00:00](https://meta.slashdot.org/story/25/12/30/0640250/meta-just-bought-manus-an-ai-startup-everyone-has-been-talking-about?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Just Bought Manus, an AI Startup Everyone Has Been Talking About](https://meta.slashdot.org/story/25/12/30/0640250/meta-just-bought-manus-an-ai-startup-everyone-has-been-talking-about?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-30, 08:14:49](https://lobste.rs/s/lyge4r/finding_broken_trace_on_my_old_mac_with) - [Finding a broken trace on my old Mac with the help of its ROM diagnostics](https://www.downtowndougbrown.com/2025/12/finding-a-broken-trace-on-my-old-mac-with-the-help-of-its-rom-diagnostics/)
* [2025-12-30, 07:00:00](https://science.slashdot.org/story/25/12/29/2357222/phds-cant-find-work-as-bostons-biotech-engine-sputters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [PhDs Can&apos;t Find Work as Boston&apos;s Biotech Engine Sputters](https://science.slashdot.org/story/25/12/29/2357222/phds-cant-find-work-as-bostons-biotech-engine-sputters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-30, 05:53:00](https://soylentnews.org/article.pl?sid=25/12/28/1115208&amp;from=rss) - [Phoenix Emerges as a Modern X Server Written From Scratch in Zig](https://soylentnews.org/article.pl?sid=25/12/28/1115208&amp;from=rss)
* [2025-12-30, 05:42:00](https://lobste.rs/s/y1yldn/glamorous_christmas_bringing_charm_ruby) - [Glamorous Christmas: Bringing Charm to Ruby](https://marcoroth.dev/posts/glamorous-christmas)
* [2025-12-30, 05:11:11](https://lobste.rs/s/0vpyii/nes_game_genie_technical_notes_2001) - [NES Game Genie Technical Notes (2001)](https://tuxnes.sourceforge.net/gamegenie.html)
* [2025-12-30, 03:33:00](https://hardware.slashdot.org/story/25/12/29/2344207/researchers-make-neuromorphic-artificial-skin-for-robots?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Researchers Make &apos;Neuromorphic&apos; Artificial Skin For Robots](https://hardware.slashdot.org/story/25/12/29/2344207/researchers-make-neuromorphic-artificial-skin-for-robots?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-30, 02:02:00](https://hardware.slashdot.org/story/25/12/29/2336254/russian-enthusiasts-planning-diy-ddr5-memory-amidst-worldwide-shortage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Russian Enthusiasts Planning DIY DDR5 Memory Amidst Worldwide Shortage](https://hardware.slashdot.org/story/25/12/29/2336254/russian-enthusiasts-planning-diy-ddr5-memory-amidst-worldwide-shortage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-30, 01:40:49](https://news.ycombinator.com/item?id=46428496) - [Hacking Washing Machines [video]](https://media.ccc.de/v/39c3-hacking-washing-machines)
* [2025-12-30, 01:25:00](https://linux.slashdot.org/story/25/12/29/2330252/fedora-continued-at-the-forefront-of-upstream-linux-innovations-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fedora Continued At The Forefront Of Upstream Linux Innovations In 2025](https://linux.slashdot.org/story/25/12/29/2330252/fedora-continued-at-the-forefront-of-upstream-linux-innovations-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-30, 01:12:00](https://soylentnews.org/article.pl?sid=25/12/28/1112249&amp;from=rss) - [Shouting at Seagulls Could Stop Them Stealing Your Food](https://soylentnews.org/article.pl?sid=25/12/28/1112249&amp;from=rss)
* [2025-12-30, 01:00:03](https://news.ycombinator.com/item?id=46428206) - [100x (YC S22) Is Hiring a Front End Engineer](https://news.ycombinator.com/item?id=46428206)
* [2025-12-30, 00:58:46](https://lobste.rs/s/menkib/velox_is_port_tauri_swift) - [Velox is a port of Tauri to Swift](https://github.com/velox-apps/velox)
* [2025-12-30, 00:54:34](https://news.ycombinator.com/item?id=46428154) - [Outside, Dungeon, Town: Integrating the Three Places in Videogames (2024)](https://keithburgun.net/outside-dungeon-town-integrating-the-three-places-in-videogames/)
* [2025-12-30, 00:45:00](https://mobile.slashdot.org/story/25/12/29/2147256/pull-over-and-show-me-your-apple-wallet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Pull Over and Show Me Your Apple Wallet&apos;](https://mobile.slashdot.org/story/25/12/29/2147256/pull-over-and-show-me-your-apple-wallet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-30, 00:23:47](https://news.ycombinator.com/item?id=46427920) - [MongoDB Server Security Update, December 2025](https://www.mongodb.com/company/blog/news/mongodb-server-security-update-december-2025)
* [2025-12-30, 00:02:00](https://interviews.slashdot.org/story/25/12/29/2144201/tough-job-market-has-people-using-dating-apps-to-get-interviews?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tough Job Market Has People Using Dating Apps To Get Interviews](https://interviews.slashdot.org/story/25/12/29/2144201/tough-job-market-has-people-using-dating-apps-to-get-interviews?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-29, 23:50:34](https://news.ycombinator.com/item?id=46427586) - [Stranger Things creator says turn off \&quot;garbage\&quot; settings](https://screenrant.com/stranger-things-creator-turn-off-settings-premiere/)
* [2025-12-29, 23:50:06](https://news.ycombinator.com/item?id=46427582) - [I migrated to an almost all-EU stack and saved 500€ per year](https://www.zeitgeistofbytes.com/p/bye-bye-big-tech-how-i-migrated-to)
* [2025-12-29, 23:40:23](https://lobste.rs/s/swdcvg/curl_removes_all_calls_strcpy) - [Curl removes all calls to strcpy](https://daniel.haxx.se/blog/2025/12/29/no-strcpy-either/)
* [2025-12-29, 23:29:35](https://news.ycombinator.com/item?id=46427376) - [Parsing Advances](https://matklad.github.io/2025/12/28/parsing-advances.html)
* [2025-12-29, 23:20:00](https://news.slashdot.org/story/25/12/29/2136221/sam-altman-offers-555k-salary-to-fill-most-daunting-role-in-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sam Altman Offers $555K Salary To Fill Most Daunting Role In AI](https://news.slashdot.org/story/25/12/29/2136221/sam-altman-offers-555k-salary-to-fill-most-daunting-role-in-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-29, 23:15:07](https://lobste.rs/s/cfzrcx/replacing_python_dateutil_remove_six) - [Replacing python-dateutil to remove six](https://hugovk.dev/blog/2025/minus-six/)
* [2025-12-29, 23:12:00](https://news.ycombinator.com/item?id=46427181) - [Geology of the Gulf of the Farallones National Marine Sanctuary](https://pubs.usgs.gov/fs/farallones/)
* [2025-12-29, 23:01:48](https://lobste.rs/s/grs8wl/xzone_malloc_memory_allocator_for_apple) - [xzone malloc: memory allocator for Apple OS platforms](https://github.com/apple-oss-distributions/libmalloc/blob/af3c5dc3a540eeec030930b35b1349f4de400206/doc/xzone_malloc.md)
* [2025-12-29, 22:40:00](https://slashdot.org/story/25/12/29/2130223/nvidia-takes-5-billion-stake-in-intel-under-september-agreement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia Takes $5 Billion Stake In Intel Under September Agreement](https://slashdot.org/story/25/12/29/2130223/nvidia-takes-5-billion-stake-in-intel-under-september-agreement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-29, 22:30:25](https://news.ycombinator.com/item?id=46426624) - [Show HN: Stop Claude Code from forgetting everything](https://github.com/mutable-state-inc/ensue-skill)
* [2025-12-29, 22:24:22](https://news.ycombinator.com/item?id=46426534) - [ManusAI Joins Meta](https://manus.im/blog/manus-joins-meta-for-next-era-of-innovation)
* [2025-12-29, 22:11:00](https://lobste.rs/s/htjhdh/loss32_let_s_build_win32_linux) - [loss32: let&apos;s build a Win32/Linux](https://loss32.org/)
* [2025-12-29, 22:00:00](https://slashdot.org/story/25/12/29/2127224/china-drafts-worlds-strictest-rules-to-end-ai-encouraged-suicide-violence?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Drafts World&apos;s Strictest Rules To End AI-Encouraged Suicide, Violence](https://slashdot.org/story/25/12/29/2127224/china-drafts-worlds-strictest-rules-to-end-ai-encouraged-suicide-violence?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-29, 21:22:00](https://science.slashdot.org/story/25/12/29/1956236/stingless-bees-from-the-amazon-granted-legal-rights-in-world-first?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Stingless Bees From the Amazon Granted Legal Rights in World First](https://science.slashdot.org/story/25/12/29/1956236/stingless-bees-from-the-amazon-granted-legal-rights-in-world-first?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-29, 20:40:00](https://news.slashdot.org/story/25/12/29/1952225/after-a-decade-of-dead-ends-70-million-rides-on-locating-flight-mh370?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [After a Decade of Dead Ends, $70 Million Rides on Locating Flight MH370](https://news.slashdot.org/story/25/12/29/1952225/after-a-decade-of-dead-ends-70-million-rides-on-locating-flight-mh370?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-29, 20:36:40](https://lobste.rs/s/mvee6u/can_bundler_be_as_fast_as_uv) - [Can Bundler Be as Fast as uv?](https://tenderlovemaking.com/2025/12/29/can-bundler-be-as-fast-as-uv/)
* [2025-12-29, 20:29:26](https://news.ycombinator.com/item?id=46425198) - [Google is dead. Where do we go now?](https://www.circusscientist.com/2025/12/29/google-is-dead-where-do-we-go-now/)
* [2025-12-29, 20:25:00](https://soylentnews.org/article.pl?sid=25/12/27/2318230&amp;from=rss) - [Engineer Turns E-Ink Tablet Into Computer Monitor in Linux](https://soylentnews.org/article.pl?sid=25/12/27/2318230&amp;from=rss)
* [2025-12-29, 20:02:00](https://tech.slashdot.org/story/25/12/29/1928221/how-windows-10-earned-its-good-reputation-while-planting-the-seeds-of-windows-11s-problems?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Windows 10 Earned Its Good Reputation While Planting the Seeds of Windows 11&apos;s Problems](https://tech.slashdot.org/story/25/12/29/1928221/how-windows-10-earned-its-good-reputation-while-planting-the-seeds-of-windows-11s-problems?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-29, 19:59:20](https://lobste.rs/s/gaogav/how_ruin_all_package_management) - [How to Ruin All of Package Management](https://nesbitt.io/2025/12/27/how-to-ruin-all-of-package-management.html)
* [2025-12-29, 19:47:47](https://lobste.rs/s/3eehzp/1ml_for_non_specialists_introduction) - [1ML for non-specialists: introduction](https://pithlessly.github.io/1ml-intro)
* [2025-12-29, 19:30:40](https://news.ycombinator.com/item?id=46424460) - [When someone says they hate your product](https://www.getflack.com/p/responding-to-negative-feedback)
* [2025-12-29, 19:26:00](https://entertainment.slashdot.org/story/25/12/29/1842200/americans-are-watching-fewer-new-tv-shows-and-more-free-tv?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Americans Are Watching Fewer New TV Shows and More Free TV](https://entertainment.slashdot.org/story/25/12/29/1842200/americans-are-watching-fewer-new-tv-shows-and-more-free-tv?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-29, 19:14:17](https://news.ycombinator.com/item?id=46424233) - [The future of software development is software developers](https://codemanship.wordpress.com/2025/11/25/the-future-of-software-development-is-software-developers/)
* [2025-12-29, 19:11:26](https://news.ycombinator.com/item?id=46424200) - [AI is forcing us to write good code](https://bits.logic.inc/p/ai-is-forcing-us-to-write-good-code)
* [2025-12-29, 19:04:59](https://lobste.rs/s/x1xqtv/llms_are_not_fun) - [LLMs Are Not Fun](https://orib.dev/nofun.html)
* [2025-12-29, 18:45:00](https://games.slashdot.org/story/25/12/29/1810221/gog-and-cd-projekt-founder-acquires-100-ownership-of-gog?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GOG and CD Projekt Founder Acquires 100% Ownership of GOG](https://games.slashdot.org/story/25/12/29/1810221/gog-and-cd-projekt-founder-acquires-100-ownership-of-gog?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-29, 18:38:48](https://lobste.rs/s/pab6so/silicon_valley_stack_doesn_t_work_here_why) - [The Silicon Valley Stack Doesn’t Work Here: Why Africa Will Lead the Post-Bloat Web](https://paulallies.medium.com/the-silicon-valley-stack-doesnt-work-here-why-africa-will-lead-the-post-bloat-web-e7c34b577c61)
* [2025-12-29, 18:17:29](https://news.ycombinator.com/item?id=46423521) - [A production bug that made me care about undefined behavior](https://gaultier.github.io/blog/the_production_bug_that_made_me_care_about_undefined_behavior.html)
* [2025-12-29, 17:57:03](https://news.ycombinator.com/item?id=46423290) - [Tesla&apos;s 4680 battery supply chain collapses as partner writes down deal by 99%](https://electrek.co/2025/12/29/tesla-4680-battery-supply-chain-collapses-partner-writes-down-dea/)
* [2025-12-29, 16:43:14](https://news.ycombinator.com/item?id=46422412) - [GOG is getting acquired by its original co-founder](https://www.gog.com/blog/gog-is-getting-acquired-by-its-original-co-founder-what-it-means-for-you/)
* [2025-12-29, 16:42:50](https://lobste.rs/s/dythih/git_s_http_server_side_design_does_not) - [Git&apos;s HTTP server side design does not scale](https://xeiaso.net/notes/2025/distributed-git-ddos)
* [2025-12-29, 16:07:27](https://news.ycombinator.com/item?id=46422009) - [Static Allocation with Zig](https://nickmonad.blog/2025/static-allocation-with-zig-kv/)
* [2025-12-29, 16:05:34](https://lobste.rs/s/jgzpwk/static_allocation_with_zig) - [Static Allocation with Zig](https://nickmonad.blog/2025/static-allocation-with-zig-kv/)
* [2025-12-29, 15:36:00](https://soylentnews.org/article.pl?sid=25/12/27/239245&amp;from=rss) - [LG Forces TV Owners to Use Microsoft ‘AI’ Copilot App You Can&apos;t Uninstall and Nobody Asked for](https://soylentnews.org/article.pl?sid=25/12/27/239245&amp;from=rss)
* [2025-12-29, 14:43:39](https://lobste.rs/s/tnuaff/clock_synchronization_is_nightmare) - [Clock Synchronization Is a Nightmare](https://arpitbhayani.me/blogs/clock-sync-nightmare/)
* [2025-12-29, 14:37:09](https://lobste.rs/s/qicbhv/garbage_collection_rust_got_little) - [Garbage collection in Rust got a little better](https://claytonwramsey.com/blog/dumpster2/)
* [2025-12-29, 13:00:59](https://lobste.rs/s/cwdone/why_are_we_worried_about_memory_access) - [Why are we worried about memory access semantics? Full barriers should be enough for anybody](https://devblogs.microsoft.com/oldnewthing/20251226-00/?p=111919)
* [2025-12-29, 12:40:30](https://lobste.rs/s/ce0ksl/second_great_error_model_convergence) - [The Second Great Error Model Convergence](https://matklad.github.io/2025/12/29/second-error-model-convergence.html)
* [2025-12-29, 12:24:00](https://news.ycombinator.com/item?id=46419970) - [Kidnapped by Deutsche Bahn](https://www.theocharis.dev/blog/kidnapped-by-deutsche-bahn/)
* [2025-12-29, 12:23:49](https://news.ycombinator.com/item?id=46419968) - [Linux DAW: Help Linux musicians to quickly and easily find the tools they need](https://linuxdaw.org/)
* [2025-12-29, 10:52:00](https://soylentnews.org/article.pl?sid=25/12/27/235226&amp;from=rss) - [How Recent is \&quot;Recent\&quot;?](https://soylentnews.org/article.pl?sid=25/12/27/235226&amp;from=rss)
* [2025-12-29, 10:00:59](https://lobste.rs/s/mjmtxx/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/mjmtxx/what_are_you_doing_this_week)
* [2025-12-29, 08:43:11](https://lobste.rs/s/cp4qw3/measuring_out_sync_clocks_on_internet) - [Measuring out-of-sync clocks on the Internet](https://alexsci.com/blog/clock-skew/)
* [2025-12-29, 06:09:00](https://soylentnews.org/article.pl?sid=25/12/27/230209&amp;from=rss) - [Microsoft To Replace All C/C++ With Rust By 2030](https://soylentnews.org/article.pl?sid=25/12/27/230209&amp;from=rss)
* [2025-12-29, 05:35:06](https://lobste.rs/s/vyf7cf/my_first_meshtastic_network) - [My First Meshtastic Network](https://rickcarlino.com/notes/electronics/my-first-meshtastic-network.html)
* [2025-12-29, 05:33:56](https://lobste.rs/s/mytglj/huge_binaries) - [Huge binaries](https://fzakaria.com/2025/12/28/huge-binaries)
* [2025-12-29, 02:45:47](https://lobste.rs/s/asstpu/you_can_make_up_html_tags) - [You can make up HTML tags](https://maurycyz.com/misc/make-up-tags/)
* [2025-12-29, 01:17:00](https://soylentnews.org/article.pl?sid=25/12/27/2258256&amp;from=rss) - [Why Swearing Makes You Stronger](https://soylentnews.org/article.pl?sid=25/12/27/2258256&amp;from=rss)
* [2025-12-28, 23:52:24](https://lobste.rs/s/nqawul/what_unprocessed_photo_looks_like) - [What an unprocessed photo looks like](https://maurycyz.com/misc/raw_photo/)
* [2025-12-28, 20:37:00](https://soylentnews.org/article.pl?sid=25/12/26/2021243&amp;from=rss) - [Your Car&apos;s Web Browser May be on the Road to Cyber Ruin](https://soylentnews.org/article.pl?sid=25/12/26/2021243&amp;from=rss)
* [2025-12-28, 17:00:00](https://soylentnews.org/article.pl?sid=25/12/28/1357214&amp;from=rss) - [The 39th Chaos Communication Congress (39C3) Taking Place Now in Hamburg Through 30 Dec 2025](https://soylentnews.org/article.pl?sid=25/12/28/1357214&amp;from=rss)
* [2025-12-28, 15:49:00](https://soylentnews.org/article.pl?sid=25/12/26/2015254&amp;from=rss) - [How OpenAI is Using GPT-5 Codex to Improve the AI Tool Itself](https://soylentnews.org/article.pl?sid=25/12/26/2015254&amp;from=rss)
* [2025-12-28, 11:02:00](https://soylentnews.org/article.pl?sid=25/12/26/205213&amp;from=rss) - [Will AI Kill All the Lawyers?](https://soylentnews.org/article.pl?sid=25/12/26/205213&amp;from=rss)
* [2025-12-28, 06:19:00](https://soylentnews.org/article.pl?sid=25/12/26/1958223&amp;from=rss) - [Texas Sues TV Makers for Taking Screenshots of What People Watch](https://soylentnews.org/article.pl?sid=25/12/26/1958223&amp;from=rss)
* [2025-12-28, 01:33:00](https://soylentnews.org/article.pl?sid=25/12/26/1946250&amp;from=rss) - [Who Sets the Doomsday Clock?](https://soylentnews.org/article.pl?sid=25/12/26/1946250&amp;from=rss)
* [2025-12-27, 20:44:00](https://soylentnews.org/article.pl?sid=25/12/25/226213&amp;from=rss) - [Night Waking Impacts Cognitive Performance Regardless of Sleep Duration](https://soylentnews.org/article.pl?sid=25/12/25/226213&amp;from=rss)
* [2025-12-27, 15:53:00](https://soylentnews.org/article.pl?sid=25/12/25/224204&amp;from=rss) - [EU Offers UK Early Gift: Data Adequacy Until 2031](https://soylentnews.org/article.pl?sid=25/12/25/224204&amp;from=rss)
* [2025-12-27, 11:30:40](https://news.ycombinator.com/item?id=46401052) - [Flame Graphs vs Tree Maps vs Sunburst (2017)](https://www.brendangregg.com/blog/2017-02-06/flamegraphs-vs-treemaps-vs-sunburst.html)
* [2025-12-27, 11:16:00](https://soylentnews.org/article.pl?sid=25/12/25/222237&amp;from=rss) - [Science Sleuths Raise Concerns About Scores of Bioengineering Papers](https://soylentnews.org/article.pl?sid=25/12/25/222237&amp;from=rss)
* [2025-12-27, 06:25:00](https://soylentnews.org/article.pl?sid=25/12/25/2156225&amp;from=rss) - [We May Never be Able to Tell If AI Becomes Conscious, Argues Philosopher](https://soylentnews.org/article.pl?sid=25/12/25/2156225&amp;from=rss)
* [2025-12-27, 01:40:00](https://soylentnews.org/article.pl?sid=25/12/25/2154252&amp;from=rss) - [MIT Reveals How High-Fat Diets Quietly Prime the Liver for Cancer](https://soylentnews.org/article.pl?sid=25/12/25/2154252&amp;from=rss)
* [2025-12-26, 20:55:00](https://soylentnews.org/article.pl?sid=25/12/23/0437256&amp;from=rss) - [Disaster After Disaster: Do We Have Enough Raw Materials to &apos;Build Back Better?&apos;](https://soylentnews.org/article.pl?sid=25/12/23/0437256&amp;from=rss)
* [2025-12-26, 20:12:09](https://news.ycombinator.com/item?id=46395714) - [Karpathy on Programming: “I&apos;ve never felt this much behind”](https://twitter.com/karpathy/status/2004607146781278521)
* [2025-12-26, 18:01:00](https://soylentnews.org/article.pl?sid=25/12/26/1546258&amp;from=rss) - [Options to Break Free From Smart TV Ads and Tracking](https://soylentnews.org/article.pl?sid=25/12/26/1546258&amp;from=rss)
* [2025-12-26, 16:12:00](https://soylentnews.org/article.pl?sid=25/12/23/0432237&amp;from=rss) - [Reddit challenges AUS Social Media law in court](https://soylentnews.org/article.pl?sid=25/12/23/0432237&amp;from=rss)
* [2025-12-26, 14:39:10](https://news.ycombinator.com/item?id=46392382) - [Streaming compression beats framed compression](https://bou.ke/blog/compressed/)
* [2025-12-26, 11:20:00](https://soylentnews.org/article.pl?sid=25/12/23/0431239&amp;from=rss) - [Climate Misinformation is Becoming a National Security Threat. Canada Isn&apos;t Ready for It](https://soylentnews.org/article.pl?sid=25/12/23/0431239&amp;from=rss)
* [2025-12-26, 08:09:32](https://news.ycombinator.com/item?id=46390218) - [Show HN: Euclidle – Guess the Coordinates in N‑Dimensional Space](https://euclidle.com/)
* [2025-12-26, 07:56:58](https://news.ycombinator.com/item?id=46390154) - [The Signature Flicker](https://steipete.me/posts/2025/signature-flicker)
* [2025-12-26, 06:46:00](https://soylentnews.org/article.pl?sid=25/12/23/0429249&amp;from=rss) - [Seven Projects Killed by Ubuntu (but I Still Miss Them)](https://soylentnews.org/article.pl?sid=25/12/23/0429249&amp;from=rss)
* [2025-12-26, 01:55:00](https://soylentnews.org/article.pl?sid=25/12/23/0426211&amp;from=rss) - [Pennsylvania High Court Rules Police Can Access Google Searches Without Warrant](https://soylentnews.org/article.pl?sid=25/12/23/0426211&amp;from=rss)
