# [News Summary](https://kherrick.github.io/news-summary/)

## Programming and Technology Innovations

* [clj-coll: Clojure collections and sequences in Common Lisp](https://github.com/dtenny/clj-coll) - Highlights interoperability between Common Lisp and Clojure data structures. [Comments](https://lobste.rs/s/78kvoj/clj_coll_clojure_collections_sequences)

* [From Async/Await to Virtual Threads](https://lucumr.pocoo.org/2025/7/26/virtual-threads/) - Discusses shifts in modern concurrency models. [Comments](https://lobste.rs/s/byakmv/from_async_await_virtual_threads)

* [Heredocs Can Make Your Bash Scripts Self-Documenting](https://holdtherobot.com/blog/heredocs-can-make-your-bash-scripts-self-documenting/) - Explains how Heredocs enhance readability and maintainability in scripting. [Comments](https://lobste.rs/s/6yqrbm/heredocs_can_make_your_bash_scripts_self)

* [Rust running on every GPU](https://rust-gpu.github.io/blog/2025/07/25/rust-on-every-gpu/) - Highlights the unification of GPU computation with Rust. [Comments](https://news.ycombinator.com/item?id=44692876)

* [Simon Tatham's Portable Puzzle Collection](https://www.chiark.greenend.org.uk/~sgtatham/puzzles/) - A delightful collection of mind-bending puzzles, now portable. [Comments](https://news.ycombinator.com/item?id=44691935)

## Artificial Intelligence and Robotics

* [Meta Names Shengjia Zhao As Chief Scientist of AI Superintelligence Unit](https://tech.slashdot.org/story/25/07/25/2143237/meta-names-shengjia-zhao-as-chief-scientist-of-ai-superintelligence-unit?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Strategic leadership move in AI research by Meta. [Comments](https://news.ycombinator.com/item?id=44689236)

* [Google Set Up Two Robotic Arms For a Game of Infinite Table Tennis](https://hardware.slashdot.org/story/25/07/25/2237245/google-set-up-two-robotic-arms-for-a-game-of-infinite-table-tennis?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Advances in robotics showcased in a unique interaction test. [Comments](https://news.ycombinator.com/item?id=44688810)

* [Experimental surgery performed by AI-driven surgical robot](https://arstechnica.com/science/2025/07/experimental-surgery-performed-by-ai-driven-surgical-robot/) - Milestone in AI-driven medical procedures. [Comments](https://news.ycombinator.com/item?id=44687888)

## Climate and Environmental Science

* [The Manmade Clouds That Could Help Save the Great Barrier Reef](https://news.slashdot.org/story/25/07/25/181205/the-manmade-clouds-that-could-help-save-the-great-barrier-reef?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Examination of geoengineering as a tool to mitigate coral bleaching effects. [Comments](https://news.ycombinator.com/item?id=44687810)

* [Study Finds 'Pressure Point' In the Gulf Could Drive Hurricane Strength](https://news.slashdot.org/story/25/07/26/0358218/study-finds-pressure-point-in-the-gulf-could-drive-hurricane-strength?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Reveals critical environmental factors influencing hurricanes. [Comments](https://news.ycombinator.com/item?id=44691887)

## Controversies and Retractions

* [Controversial 'Arsenic Life' Paper Retracted After 15 Years](https://science.slashdot.org/story/25/07/26/044239/controversial-arsenic-life-paper-retracted-after-15-years?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Decades-long debate culminates in the retraction of faulty scientific findings. [Comments](https://news.ycombinator.com/item?id=44692012)

## Historical and Cultural Insights

* [CCTV footage captures the first-ever video of an earthquake fault in motion](https://www.smithsonianmag.com/smart-news/cctv-footage-captures-the-first-ever-video-of-an-earthquake-fault-in-motion-shining-a-rare-light-on-seismic-dynamics-180987034/) - A breakthrough in understanding seismic dynamics through visual evidence. [Comments](https://news.ycombinator.com/item?id=44690911)

* [Celebrating 20 years of MDN](https://developer.mozilla.org/en-US/blog/mdn-turns-20/) - Reflecting on two decades of contributions to web development. [Comments](https://news.ycombinator.com/item?id=44683972)

## Legal and Governance Challenges

* [Judge Sanctions Lawyers Defending Alabama's Prison System For Using Fake ChatGPT Cases In Filings](https://yro.slashdot.org/story/25/07/25/1945229/judge-sanctions-lawyers-defending-alabamas-prison-system-for-using-fake-chatgpt-cases-in-filings?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Highlighting ethical concerns in AI-assisted legal practice. [Comments](https://news.ycombinator.com/item?id=44688121)

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

* [2025-07-26, 14:56:13](https://lobste.rs/s/78kvoj/clj_coll_clojure_collections_sequences) - [clj-coll: Clojure collections and sequences in Common Lisp](https://github.com/dtenny/clj-coll)
* [2025-07-26, 14:36:45](https://lobste.rs/s/8cwich/perfecting_anti_aliasing_on_signed) - [Perfecting anti-aliasing on signed distance functions](https://blog.pkh.me/p/44-perfecting-anti-aliasing-on-signed-distance-functions.html)
* [2025-07-26, 14:11:15](https://lobste.rs/s/sba8mw/emacs_arei_async_ide_for_guile) - [emacs-arei Async IDE for Guile](https://git.sr.ht/~abcdw/emacs-arei)
* [2025-07-26, 12:04:54](https://lobste.rs/s/byakmv/from_async_await_virtual_threads) - [From Async/Await to Virtual Threads](https://lucumr.pocoo.org/2025/7/26/virtual-threads/)
* [2025-07-26, 11:56:04](https://lobste.rs/s/y1qs6b/hand_drawn_cgi_animating_terrahawks) - [Hand Drawn CGI: Animating the Terrahawks Title Sequence](https://www.youtube.com/watch?v=HI7oEiaR8PU)
* [2025-07-26, 11:43:00](https://soylentnews.org/article.pl?sid=25/07/25/0534229&amp;from=rss) - [Work Less, Feel Better](https://soylentnews.org/article.pl?sid=25/07/25/0534229&amp;from=rss)
* [2025-07-26, 11:12:27](https://lobste.rs/s/mf5mup/arm_desktop_x86_emulation) - [Arm desktop: x86 emulation](https://marcin.juszkiewicz.com.pl/2025/07/22/arm-desktop-emulation/)
* [2025-07-26, 11:08:03](https://news.ycombinator.com/item?id=44693129) - [Bringing a decade old bicycle navigator back to life with open source software](https://raymii.org/s/blog/Bringing_a_Decade_Old_Bicycle_Navigator_Back_to_Life_with_Open_Source_Software_and_DOOM.html)
* [2025-07-26, 11:00:03](https://lobste.rs/s/6yqrbm/heredocs_can_make_your_bash_scripts_self) - [Heredocs Can Make Your Bash Scripts Self-Documenting](https://holdtherobot.com/blog/heredocs-can-make-your-bash-scripts-self-documenting/)
* [2025-07-26, 10:40:30](https://lobste.rs/s/x3obdr/most_your_projects_are_stupid_please_make) - [Most of your projects are stupid. Please make some actual games](https://www.youtube.com/watch?v=Ca53JTohdN4)
* [2025-07-26, 10:14:02](https://news.ycombinator.com/item?id=44692897) - [The UK’s new age-gating rules are easy to bypass](https://www.theverge.com/analysis/713773/uk-online-safety-act-age-verification-bypass-vpn)
* [2025-07-26, 10:08:09](https://news.ycombinator.com/item?id=44692876) - [Rust running on every GPU](https://rust-gpu.github.io/blog/2025/07/25/rust-on-every-gpu/)
* [2025-07-26, 10:00:00](https://science.slashdot.org/story/25/07/26/044239/controversial-arsenic-life-paper-retracted-after-15-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Controversial &apos;Arsenic Life&apos; Paper Retracted After 15 Years](https://science.slashdot.org/story/25/07/26/044239/controversial-arsenic-life-paper-retracted-after-15-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-26, 09:01:51](https://lobste.rs/s/zditcp/it_s_time_for_modern_css_kill_spa) - [It&apos;s time for modern CSS to kill the SPA](https://www.jonoalderson.com/conjecture/its-time-for-modern-css-to-kill-the-spa/)
* [2025-07-26, 07:00:00](https://news.slashdot.org/story/25/07/26/0358218/study-finds-pressure-point-in-the-gulf-could-drive-hurricane-strength?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Study Finds &apos;Pressure Point&apos; In the Gulf Could Drive Hurricane Strength](https://news.slashdot.org/story/25/07/26/0358218/study-finds-pressure-point-in-the-gulf-could-drive-hurricane-strength?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-26, 06:58:00](https://soylentnews.org/article.pl?sid=25/07/25/0511234&amp;from=rss) - [Debian Linux \&quot;Trixie\&quot; is Planned to Release on August 9](https://soylentnews.org/article.pl?sid=25/07/25/0511234&amp;from=rss)
* [2025-07-26, 06:46:44](https://news.ycombinator.com/item?id=44691935) - [Simon Tatham&apos;s Portable Puzzle Collection](https://www.chiark.greenend.org.uk/~sgtatham/puzzles/)
* [2025-07-26, 05:57:20](https://news.ycombinator.com/item?id=44691722) - [Why I do programming](https://esafev.com/notes/why-i-do-programming/)
* [2025-07-26, 04:38:35](https://lobste.rs/s/jmttl2/can_llms_do_accounting) - [Can LLMs Do Accounting?](https://accounting.penrose.com/)
* [2025-07-26, 04:23:36](https://news.ycombinator.com/item?id=44691312) - [Users claim Discord&apos;s age verification can be tricked with video game characters](https://www.thepinknews.com/2025/07/25/discord-video-game-characters-age-verification-checks-uk-online-safety-act/)
* [2025-07-26, 03:35:00](https://lobste.rs/s/oosbf5/split_flap) - [Split Flap](https://fx.hot.page/split-flap)
* [2025-07-26, 03:30:00](https://hardware.slashdot.org/story/25/07/25/2237245/google-set-up-two-robotic-arms-for-a-game-of-infinite-table-tennis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Set Up Two Robotic Arms For a Game of Infinite Table Tennis](https://hardware.slashdot.org/story/25/07/25/2237245/google-set-up-two-robotic-arms-for-a-game-of-infinite-table-tennis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-26, 02:54:43](https://news.ycombinator.com/item?id=44690911) - [CCTV footage captures the first-ever video of an earthquake fault in motion](https://www.smithsonianmag.com/smart-news/cctv-footage-captures-the-first-ever-video-of-an-earthquake-fault-in-motion-shining-a-rare-light-on-seismic-dynamics-180987034/)
* [2025-07-26, 02:14:00](https://soylentnews.org/article.pl?sid=25/07/25/055215&amp;from=rss) - [Low(er) Price Tesla Announced](https://soylentnews.org/article.pl?sid=25/07/25/055215&amp;from=rss)
* [2025-07-26, 01:30:00](https://tech.slashdot.org/story/25/07/25/2151251/pebble-is-officially-pebble-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pebble Is Officially Pebble Again](https://tech.slashdot.org/story/25/07/25/2151251/pebble-is-officially-pebble-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-26, 00:50:00](https://tech.slashdot.org/story/25/07/25/2143237/meta-names-shengjia-zhao-as-chief-scientist-of-ai-superintelligence-unit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Names Shengjia Zhao As Chief Scientist of AI Superintelligence Unit](https://tech.slashdot.org/story/25/07/25/2143237/meta-names-shengjia-zhao-as-chief-scientist-of-ai-superintelligence-unit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-26, 00:10:00](https://mobile.slashdot.org/story/25/07/25/2134233/echelon-kills-smart-home-gym-equipment-offline-capabilities-with-update?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Echelon Kills Smart Home Gym Equipment Offline Capabilities With Update](https://mobile.slashdot.org/story/25/07/25/2134233/echelon-kills-smart-home-gym-equipment-offline-capabilities-with-update?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-25, 23:30:00](https://yro.slashdot.org/story/25/07/25/1945229/judge-sanctions-lawyers-defending-alabamas-prison-system-for-using-fake-chatgpt-cases-in-filings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Judge Sanctions Lawyers Defending Alabama&apos;s Prison System For Using Fake ChatGPT Cases In Filings](https://yro.slashdot.org/story/25/07/25/1945229/judge-sanctions-lawyers-defending-alabamas-prison-system-for-using-fake-chatgpt-cases-in-filings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-25, 22:56:42](https://lobste.rs/s/dfket6/gnome_calendar_new_era_accessibility) - [GNOME Calendar: A New Era of Accessibility Achieved in 90 Days](https://tesk.page/2025/07/25/gnome-calendar-a-new-era-of-accessibility-achieved-in-90-days/)
* [2025-07-25, 22:50:00](https://linux.slashdot.org/story/25/07/25/1950226/linux-kernel-could-soon-expose-every-line-ai-helps-write?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linux Kernel Could Soon Expose Every Line AI Helps Write](https://linux.slashdot.org/story/25/07/25/1950226/linux-kernel-could-soon-expose-every-line-ai-helps-write?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-25, 22:10:00](https://hardware.slashdot.org/story/25/07/25/1939254/us-doe-taps-federal-sites-for-fast-track-ai-datacenter-energy-builds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US DOE Taps Federal Sites For Fast-Track AI Datacenter, Energy Builds](https://hardware.slashdot.org/story/25/07/25/1939254/us-doe-taps-federal-sites-for-fast-track-ai-datacenter-energy-builds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-25, 22:07:09](https://news.ycombinator.com/item?id=44689059) - [Do not download the app, use the website](https://idiallo.com/blog/dont-download-apps)
* [2025-07-25, 21:44:52](https://lobste.rs/s/hol26j/http_1_1_must_die) - [HTTP/1.1 Must Die](https://http1mustdie.com/)
* [2025-07-25, 21:38:09](https://lobste.rs/s/terwiu/lobsters_interview_with_technomancy) - [Lobsters Interview with Technomancy](https://lobste.rs/s/terwiu/lobsters_interview_with_technomancy)
* [2025-07-25, 21:31:00](https://soylentnews.org/article.pl?sid=25/07/25/0459237&amp;from=rss) - [NASA Scientist Finds Predicted Companion Star to Betelgeuse - NASA](https://soylentnews.org/article.pl?sid=25/07/25/0459237&amp;from=rss)
* [2025-07-25, 21:30:00](https://yro.slashdot.org/story/25/07/25/1934249/women-dating-safety-app-tea-breached-users-ids-posted-to-4chan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Women Dating Safety App &apos;Tea&apos; Breached, Users&apos; IDs Posted To 4chan](https://yro.slashdot.org/story/25/07/25/1934249/women-dating-safety-app-tea-breached-users-ids-posted-to-4chan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-25, 21:08:00](https://news.ycombinator.com/item?id=44688489) - [It&apos;s time for modern CSS to kill the SPA](https://www.jonoalderson.com/conjecture/its-time-for-modern-css-to-kill-the-spa/)
* [2025-07-25, 20:55:55](https://lobste.rs/s/3uemyk/rust_running_on_every_major_gpu_platform) - [Rust running on every major GPU platform](https://rust-gpu.github.io/blog/2025/07/25/rust-on-every-gpu/)
* [2025-07-25, 20:51:00](https://news.slashdot.org/story/25/07/25/181205/the-manmade-clouds-that-could-help-save-the-great-barrier-reef?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Manmade Clouds That Could Help Save the Great Barrier Reef](https://news.slashdot.org/story/25/07/25/181205/the-manmade-clouds-that-could-help-save-the-great-barrier-reef?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-25, 20:34:22](https://news.ycombinator.com/item?id=44688096) - [Experimental surgery performed by AI-driven surgical robot](https://arstechnica.com/science/2025/07/experimental-surgery-performed-by-ai-driven-surgical-robot/)
* [2025-07-25, 20:10:00](https://science.slashdot.org/story/25/07/25/1756232/clean-cyclists-now-outperform-doped-champions-of-tour-de-frances-past?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Clean Cyclists Now Outperform Doped Champions of Tour de France&apos;s Past](https://science.slashdot.org/story/25/07/25/1756232/clean-cyclists-now-outperform-doped-champions-of-tour-de-frances-past?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-25, 19:53:06](https://lobste.rs/s/dxhuqb/bringing_decade_old_bicycle_navigator) - [Bringing a Decade Old Bicycle Navigator Back to Life with Open Source Software (and DOOM)](https://raymii.org/s/blog/Bringing_a_Decade_Old_Bicycle_Navigator_Back_to_Life_with_Open_Source_Software_and_DOOM.html)
* [2025-07-25, 19:30:00](https://science.slashdot.org/story/25/07/25/1743228/air-pollution-raises-risk-of-dementia-say-cambridge-scientists?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Air Pollution Raises Risk of Dementia, Say Cambridge Scientists](https://science.slashdot.org/story/25/07/25/1743228/air-pollution-raises-risk-of-dementia-say-cambridge-scientists?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-25, 19:04:00](https://lobste.rs/s/oy0cov/efficient_computer_s_electron_e1_cpu) - [Efficient Computer&apos;s Electron E1 CPU - claims 100x more efficient than ARM](https://morethanmoore.substack.com/p/efficient-computers-electron-e1-cpu)
* [2025-07-25, 18:50:00](https://yro.slashdot.org/story/25/07/25/1735224/internet-archive-designated-as-a-federal-depository-library?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Internet Archive Designated as a Federal Depository Library](https://yro.slashdot.org/story/25/07/25/1735224/internet-archive-designated-as-a-federal-depository-library?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-25, 18:27:18](https://lobste.rs/s/ljvdv9/monotonic_wall_clock_time_go_time_package) - [Monotonic and Wall Clock Time in the Go time package](https://victoriametrics.com/blog/go-time-monotonic-wall-clock/)
* [2025-07-25, 18:11:21](https://news.ycombinator.com/item?id=44686317) - [Vanilla JavaScript support for Tailwind Plus](https://tailwindcss.com/blog/vanilla-js-support-for-tailwind-plus)
* [2025-07-25, 18:10:00](https://tech.slashdot.org/story/25/07/25/1726243/man-awarded-12500-after-google-street-view-camera-captured-him-naked-in-his-yard?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Man Awarded $12,500 After Google Street View Camera Captured Him Naked in His Yard](https://tech.slashdot.org/story/25/07/25/1726243/man-awarded-12500-after-google-street-view-camera-captured-him-naked-in-his-yard?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-25, 17:59:25](https://news.ycombinator.com/item?id=44686164) - [Animated Cursors](https://tattoy.sh/news/animated-cursors/)
* [2025-07-25, 17:36:25](https://news.ycombinator.com/item?id=44685875) - [Never write your own date parsing library](https://www.zachleat.com/web/adventures-in-date-parsing/)
* [2025-07-25, 16:38:16](https://news.ycombinator.com/item?id=44685119) - [Why MIT switched from Scheme to Python (2009)](https://www.wisdomandwonder.com/link/2110/why-mit-switched-from-scheme-to-python)
* [2025-07-25, 16:30:44](https://news.ycombinator.com/item?id=44685050) - [Efficient Computer&apos;s Electron E1 CPU – 100x more efficient than Arm?](https://morethanmoore.substack.com/p/efficient-computers-electron-e1-cpu)
* [2025-07-25, 16:27:51](https://news.ycombinator.com/item?id=44685011) - [Steam, Itch.io are pulling ‘porn’ games. Critics say it&apos;s a slippery slope](https://www.wired.com/story/steam-itchio-are-pulling-porn-games-censorship/)
* [2025-07-25, 15:12:34](https://lobste.rs/s/slvzea/using_fortune_reinforce_habits) - [Using fortune to reinforce habits](https://www.judy.co.uk/blog/using-fortune-to-reinforce-habits/)
* [2025-07-25, 14:44:00](https://soylentnews.org/article.pl?sid=25/07/24/1036232&amp;from=rss) - [Doctors Used Music Instead of Medication for Dementia Treatment](https://soylentnews.org/article.pl?sid=25/07/24/1036232&amp;from=rss)
* [2025-07-25, 14:38:50](https://lobste.rs/s/wvy1o7/montana_mini_computer) - [The MonTana Mini Computer](https://mtmc.cs.montana.edu)
* [2025-07-25, 14:38:42](https://lobste.rs/s/c4bhyg/programming_vehicles_games) - [Programming Vehicles in Games](https://wassimulator.com/blog/programming/programming_vehicles_in_games.html)
* [2025-07-25, 13:35:09](https://news.ycombinator.com/item?id=44682964) - [It&apos;s a DE9, not a DB9 (but we know what you mean)](https://news.sparkfun.com/14298)
* [2025-07-25, 12:00:05](https://news.ycombinator.com/item?id=44682175) - [The future is not self-hosted](https://www.drewlyton.com/story/the-future-is-not-self-hosted/)
* [2025-07-25, 10:01:00](https://soylentnews.org/article.pl?sid=25/07/24/1032215&amp;from=rss) - [Welcome to DebConf25 - the 26th Debian Linux Conference](https://soylentnews.org/article.pl?sid=25/07/24/1032215&amp;from=rss)
* [2025-07-25, 08:16:21](https://lobste.rs/s/7cffqo/celebrating_20_years_mdn) - [Celebrating 20 years of MDN](https://developer.mozilla.org/en-US/blog/mdn-turns-20/)
* [2025-07-25, 06:18:27](https://lobste.rs/s/dzqdtj/three_http_versions_later_forms_are_still) - [Three HTTP versions later, forms are still a mess](https://yorickpeterse.com/articles/three-http-versions-later-forms-are-still-a-mess/)
* [2025-07-25, 05:17:00](https://soylentnews.org/article.pl?sid=25/07/24/1027254&amp;from=rss) - [&apos;I Destroyed Months of Your Work in Seconds&apos; Says AI Coding Tool ](https://soylentnews.org/article.pl?sid=25/07/24/1027254&amp;from=rss)
* [2025-07-25, 00:28:00](https://soylentnews.org/article.pl?sid=25/07/24/1023256&amp;from=rss) - [How the Space Shuttles Were Given Better Names Thanks to Star Trek](https://soylentnews.org/article.pl?sid=25/07/24/1023256&amp;from=rss)
* [2025-07-25, 00:16:35](https://lobste.rs/s/az8v5r/renting_is_for_suckers) - [Renting is for Suckers](https://andrewkelley.me/post/renting-is-for-suckers.html)
* [2025-07-24, 21:23:09](https://news.ycombinator.com/item?id=44676363) - [Upsides and Downsides](https://calv.info/upsides-and-downsides)
* [2025-07-24, 20:21:03](https://lobste.rs/s/llo8k8/racket_as_first_language) - [Racket as a first language](https://felleisen.org/matthias/Thoughts/py.html)
* [2025-07-24, 19:41:00](https://soylentnews.org/article.pl?sid=25/07/24/0312243&amp;from=rss) - [mwm: An X11 Window Manager in 20 Lines of Code](https://soylentnews.org/article.pl?sid=25/07/24/0312243&amp;from=rss)
* [2025-07-24, 14:56:00](https://soylentnews.org/article.pl?sid=25/07/23/1245206&amp;from=rss) - [Real Milk Proteins, No Cows: Engineered Bacteria Pave the Way for Vegan Cheese and Yogurt](https://soylentnews.org/article.pl?sid=25/07/23/1245206&amp;from=rss)
* [2025-07-24, 10:15:00](https://soylentnews.org/meta/article.pl?sid=25/07/24/1019233&amp;from=rss) - [Bots, Spiders, Scrapers and AI - Connections to SN](https://soylentnews.org/meta/article.pl?sid=25/07/24/1019233&amp;from=rss)
* [2025-07-24, 10:11:00](https://soylentnews.org/article.pl?sid=25/07/23/1253202&amp;from=rss) - [Fearful of AI-Generated Grant Proposals, NIH Limits Scientists to Six Applications Per Year](https://soylentnews.org/article.pl?sid=25/07/23/1253202&amp;from=rss)
* [2025-07-24, 05:28:00](https://soylentnews.org/article.pl?sid=25/07/23/1249230&amp;from=rss) - [A Surveillance Vendor Was Caught Exploiting a New SS7 Attack to Track People&apos;s Phone Locations](https://soylentnews.org/article.pl?sid=25/07/23/1249230&amp;from=rss)
* [2025-07-24, 00:39:00](https://soylentnews.org/article.pl?sid=25/07/23/1254253&amp;from=rss) - [UPDATED: SharePoint Vulnerability With 9.8 Severity Rating Under Exploit Across Globe](https://soylentnews.org/article.pl?sid=25/07/23/1254253&amp;from=rss)
* [2025-07-23, 19:54:00](https://soylentnews.org/article.pl?sid=25/07/22/0833233&amp;from=rss) - [Conversations Between LLMs Could Automate the Creation of Exploits, Study Shows](https://soylentnews.org/article.pl?sid=25/07/22/0833233&amp;from=rss)
* [2025-07-23, 19:34:26](https://news.ycombinator.com/item?id=44663072) - [Developing our position on AI](https://www.recurse.com/blog/191-developing-our-position-on-ai)
* [2025-07-23, 15:10:00](https://soylentnews.org/article.pl?sid=25/07/22/0822201&amp;from=rss) - [Microsoft Wants to Find Out Why Windows 11 is So Slow](https://soylentnews.org/article.pl?sid=25/07/22/0822201&amp;from=rss)
* [2025-07-23, 13:01:26](https://news.ycombinator.com/item?id=44658745) - [The append-and-review note](https://karpathy.bearblog.dev/the-append-and-review-note/)
* [2025-07-23, 11:48:17](https://news.ycombinator.com/item?id=44658127) - [Instapaper Rakuten Kobo Integration](https://blog.instapaper.com/post/789685899750424576/instapaper-rakuten-kobo-integration)
* [2025-07-23, 11:34:41](https://news.ycombinator.com/item?id=44658009) - [Font-size-adjust Is Useful](https://matklad.github.io/2025/07/16/font-size-adjust.html)
* [2025-07-23, 11:04:47](https://news.ycombinator.com/item?id=44657803) - [Yes, the Book of PF, Fourth Edition Is Coming Soon](https://bsdly.blogspot.com/2025/07/yes-book-of-pf-4th-edition-is-coming.html)
* [2025-07-23, 10:24:00](https://soylentnews.org/article.pl?sid=25/07/22/079200&amp;from=rss) - [The Atomic Bomb Marker Inside Your Body](https://soylentnews.org/article.pl?sid=25/07/22/079200&amp;from=rss)
* [2025-07-23, 10:22:05](https://news.ycombinator.com/item?id=44657550) - [Open Sauce is a confoundingly brilliant Bay Area event](https://www.jeffgeerling.com/blog/2025/open-sauce-confoundingly-brilliant-bay-area-event)
* [2025-07-23, 10:18:06](https://news.ycombinator.com/item?id=44657527) - [What is X-Forwarded-For and when can you trust it? (2024)](https://httptoolkit.com/blog/what-is-x-forwarded-for/)
* [2025-07-23, 08:36:04](https://news.ycombinator.com/item?id=44656961) - [The rise and fall of the Hanseatic League](https://worksinprogress.co/issue/the-rise-and-fall-of-the-hanseatic-league/)
* [2025-07-23, 07:11:31](https://news.ycombinator.com/item?id=44656516) - [Breaking the WASM/JS communication performance barrier](https://github.com/ealmloff/sledgehammer_bindgen)
* [2025-07-23, 07:04:26](https://news.ycombinator.com/item?id=44656472) - [Generic Containers in C: Vec](https://uecker.codeberg.page/2025-07-20.html)
* [2025-07-23, 06:54:11](https://news.ycombinator.com/item?id=44656419) - [Keep Pydantic out of your Domain Layer](https://coderik.nl/posts/keep-pydantic-out-of-your-domain-layer/)
* [2025-07-23, 05:35:00](https://soylentnews.org/article.pl?sid=25/07/22/074257&amp;from=rss) - [Matson Suspends Shipping EVs Citing Hazards of Lithium-ion Batteries](https://soylentnews.org/article.pl?sid=25/07/22/074257&amp;from=rss)
* [2025-07-23, 00:54:00](https://soylentnews.org/article.pl?sid=25/07/21/225220&amp;from=rss) - [11,000-Year-Old Feast Uncovered: Why Hunters Hauled Wild Boars Across Mountains](https://soylentnews.org/article.pl?sid=25/07/21/225220&amp;from=rss)
* [2025-07-22, 20:09:00](https://soylentnews.org/article.pl?sid=25/07/21/2142206&amp;from=rss) - [Popular Sugar Substitute Linked to Brain Cell Damage and Stroke Risk](https://soylentnews.org/article.pl?sid=25/07/21/2142206&amp;from=rss)
* [2025-07-22, 18:48:00](https://soylentnews.org/article.pl?sid=25/07/22/1846202&amp;from=rss) - [RIP - Ozzy Osborne](https://soylentnews.org/article.pl?sid=25/07/22/1846202&amp;from=rss)
* [2025-07-22, 15:22:00](https://soylentnews.org/article.pl?sid=25/07/21/2130213&amp;from=rss) - [A Strange Fossil at the Edge of the Solar System Just Shook Up Planet Nine Theories](https://soylentnews.org/article.pl?sid=25/07/21/2130213&amp;from=rss)
* [2025-07-22, 10:33:00](https://soylentnews.org/article.pl?sid=25/07/21/1642237&amp;from=rss) - [Microsoft Says It Will No Longer Use Engineers in China for Department of Defense Work](https://soylentnews.org/article.pl?sid=25/07/21/1642237&amp;from=rss)
* [2025-07-22, 05:47:00](https://soylentnews.org/article.pl?sid=25/07/21/1617239&amp;from=rss) - [Thelonious Monk, the Teenage Weirdo, and the Battle Over a Lost Sonic Masterpiece](https://soylentnews.org/article.pl?sid=25/07/21/1617239&amp;from=rss)
* [2025-07-22, 01:04:00](https://soylentnews.org/article.pl?sid=25/07/20/2227233&amp;from=rss) - [Meta is Building “Several” Multi-Gigawatt Compute Clusters](https://soylentnews.org/article.pl?sid=25/07/20/2227233&amp;from=rss)
