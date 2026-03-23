# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Fyn: An uv fork with new features, bug fixes, stripped telemetry](https://github.com/duriantaco/fyn) ([comments](https://news.ycombinator.com/item?id=47488635))

* [GitHub appears to be struggling with measly three nines availability](https://www.theregister.com/2026/02/10/github_outages/) ([comments](https://news.ycombinator.com/item?id=47487584))

* [Will AI Force Source Code to Evolve - Or Make it Extinct?](https://developers.slashdot.org/story/26/03/23/0222218/will-ai-force-source-code-to-evolve---or-make-it-extinct?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://developers.slashdot.org/story/26/03/23/0222218/will-ai-force-source-code-to-evolve---or-make-it-extinct?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [GrapheneOS Refuses to Comply with Age-Verification Laws](https://tech.slashdot.org/story/26/03/23/0116256/grapheneos-refuses-to-comply-with-age-verification-laws?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://tech.slashdot.org/story/26/03/23/0116256/grapheneos-refuses-to-comply-with-age-verification-laws?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Programming and Development

* [Designing a Spatula (in Haskell) (Video)](https://www.youtube.com/watch?v=R_uQ7Y31e50) ([comments](https://lobste.rs/s/1umutj/designing_spatula_haskell_video))

* [The Death of Character in Game Console Interfaces](https://vale.rocks/posts/game-console-interfaces) ([comments](https://lobste.rs/s/he8mhk/death_character_game_console_interfaces))

* [From virtio-snd 0-Day to Hypervisor Escape: Exploiting QEMU with an Uncontrolled Heap Overflow](https://osec.io/blog/2026-03-17-virtio-snd-qemu-hypervisor-escape/) ([comments](https://lobste.rs/s/6br2rv/from_virtio_snd_0_day_hypervisor_escape))

* [Whistler: Live eBPF Programming from the Common Lisp REPL](https://atgreen.github.io/repl-yell/posts/whistler/) ([comments](https://lobste.rs/s/1dufuw/whistler_live_ebpf_programming_from))

## Science and Environment

* [This Fungus Can Make Water Freeze](https://soylentnews.org/article.pl?sid=26/03/21/1319201&from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/03/21/1319201&from=rss))

* [Meteor Rumbles Over Houston, as Six-Pound Fragment Crashes Into a Texas Home](https://science.slashdot.org/story/26/03/22/0542203/meteor-rumbles-over-houston-as-six-pound-fragment-crashes-into-a-texas-home?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://science.slashdot.org/story/26/03/22/0542203/meteor-rumbles-over-houston-as-six-pound-fragment-crashes-into-a-texas-home?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [The Science of How Fireflies Stay in Sync](https://soylentnews.org/article.pl?sid=26/03/18/1522208&from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/03/18/1522208&from=rss))

## Industry Updates and Business

* [Moltbook Was Peak AI Theater](https://soylentnews.org/article.pl?sid=26/03/21/1413247&from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/03/21/1413247&from=rss))

* [Amazon Plans to Test Four-Legged Robots on Wheels for Deliveries](https://hardware.slashdot.org/story/26/03/21/0548213/amazon-plans-to-test-four-legged-robots-on-wheels-for-deliveries?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://hardware.slashdot.org/story/26/03/21/0548213/amazon-plans-to-test-four-legged-robots-on-wheels-for-deliveries?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Elon Musk Announces $20B 'Terafab' Chip Plant in Texas To Supply His Companies](https://hardware.slashdot.org/story/26/03/22/2151236/elon-musk-announces-20b-terafab-chip-plant-in-texas-to-supply-his-companies?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://hardware.slashdot.org/story/26/03/22/2151236/elon-musk-announces-20b-terafab-chip-plant-in-texas-to-supply-his-companies?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Privacy and Ethics

* [Proton Mail Helped FBI Unmask Anonymous ‘Stop Cop City’ Protester](https://soylentnews.org/article.pl?sid=26/03/21/1345242&from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/03/21/1345242&from=rss))

* [Is Local the Future of AI?](https://tombedor.dev/open-source-models/) ([comments](https://lobste.rs/s/n1h2tl/is_local_future_ai))

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

* [2026-03-23, 12:37:39](https://news.ycombinator.com/item?id=47488635) - [Fyn: An uv fork with new features, bug fixes, stripped telemetry](https://github.com/duriantaco/fyn)
* [2026-03-23, 12:18:32](https://lobste.rs/s/1umutj/designing_spatula_haskell_video) - [Designing a Spatula (in Haskell) (Video)](https://www.youtube.com/watch?v=R_uQ7Y31e50)
* [2026-03-23, 12:17:00](https://soylentnews.org/article.pl?sid=26/03/22/1822230&amp;from=rss) - [Concerns Due to TrueNAS Moving its Build Repository to Private Servers](https://soylentnews.org/article.pl?sid=26/03/22/1822230&amp;from=rss)
* [2026-03-23, 12:12:53](https://lobste.rs/s/he8mhk/death_character_game_console_interfaces) - [The Death of Character in Game Console Interfaces](https://vale.rocks/posts/game-console-interfaces)
* [2026-03-23, 12:08:54](https://lobste.rs/s/tsxpzy/my_google_recruitment_journey_part_1) - [My Google Recruitment Journey (Part 1): Brute-Forcing My Algorithmic Ignorance](http://blog.dominikrudnik.pl/my-google-recruitment-journey-part-1)
* [2026-03-23, 11:54:39](https://lobste.rs/s/cwdzd6/gram_1_1_0_released) - [Gram 1.1.0 released](https://gram.liten.app/posts/release-1-1-0/)
* [2026-03-23, 11:31:19](https://news.ycombinator.com/item?id=47488015) - [Attractive students no longer receive better results as classes moved online](https://www.sciencedirect.com/science/article/pii/S016517652200283X)
* [2026-03-23, 11:15:11](https://lobste.rs/s/xsrgdn/gren_26_03_parser_improvements) - [Gren 26.03: Parser improvements](https://gren-lang.org/news/260323_gren_26_03)
* [2026-03-23, 11:09:12](https://lobste.rs/s/ogfxq9/on_becoming_day_person) - [On becoming a day person](https://herman.bearblog.dev/becoming-a-day-person/)
* [2026-03-23, 11:08:02](https://news.ycombinator.com/item?id=47487790) - [Jazz CRJ9 at New York on Mar 22nd 2026, collision with fire truck on runway](https://avherald.com/h?article=536bb98e)
* [2026-03-23, 10:39:39](https://news.ycombinator.com/item?id=47487584) - [GitHub appears to be struggling with measly three nines availability](https://www.theregister.com/2026/02/10/github_outages/)
* [2026-03-23, 10:34:00](https://developers.slashdot.org/story/26/03/23/0222218/will-ai-force-source-code-to-evolve---or-make-it-extinct?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Will AI Force Source Code to Evolve - Or Make it Extinct?](https://developers.slashdot.org/story/26/03/23/0222218/will-ai-force-source-code-to-evolve---or-make-it-extinct?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 10:17:32](https://news.ycombinator.com/item?id=47487436) - [Migrating to the EU](https://rz01.org/eu-migration/)
* [2026-03-23, 10:04:00](https://lobste.rs/s/6br2rv/from_virtio_snd_0_day_hypervisor_escape) - [From virtio-snd 0-Day to Hypervisor Escape: Exploiting QEMU with an Uncontrolled Heap Overflow](https://osec.io/blog/2026-03-17-virtio-snd-qemu-hypervisor-escape/)
* [2026-03-23, 09:39:39](https://lobste.rs/s/sz4bzf/native_instant_space_switching_on_macos) - [Native Instant Space Switching on MacOS](https://arhan.sh/blog/native-instant-space-switching-on-macos/)
* [2026-03-23, 09:01:55](https://news.ycombinator.com/item?id=47486915) - [Dataframe 1.0.0.0](https://discourse.haskell.org/t/ann-dataframe-1-0-0-0/13834)
* [2026-03-23, 08:29:27](https://news.ycombinator.com/item?id=47486726) - [POSSE – Publish on your Own Site, Syndicate Elsewhere](https://indieweb.org/POSSE)
* [2026-03-23, 08:21:57](https://news.ycombinator.com/item?id=47486680) - [Show HN: The King Wen Permutation: [52, 10, 2]](https://gzw1987-bit.github.io/iching-math/)
* [2026-03-23, 08:10:20](https://lobste.rs/s/sndfxf/way_ctrl_c_postgres_cli_cancels_queries_is) - [The way CTRL-C in Postgres CLI cancels queries is incredibly hack-y](https://neon.com/blog/ctrl-c-in-psql-gives-me-the-heebie-jeebies)
* [2026-03-23, 07:34:00](https://tech.slashdot.org/story/26/03/23/0116256/grapheneos-refuses-to-comply-with-age-verification-laws?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GrapheneOS Refuses to Comply with Age-Verification Laws](https://tech.slashdot.org/story/26/03/23/0116256/grapheneos-refuses-to-comply-with-age-verification-laws?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 07:32:00](https://soylentnews.org/article.pl?sid=26/03/21/1413247&amp;from=rss) - [Moltbook Was Peak AI Theater](https://soylentnews.org/article.pl?sid=26/03/21/1413247&amp;from=rss)
* [2026-03-23, 05:01:30](https://lobste.rs/s/yc3olx/so_many_new_systems_programming) - [So Many New Systems Programming Languages II (2023)](https://colinsblog.net/2023-03-22-systems-languages-details/)
* [2026-03-23, 04:34:00](https://tech.slashdot.org/story/26/03/23/0030225/some-microsoft-insiders-fight-to-drop-windows-11s-microsoft-account-requirements?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Some Microsoft Insiders Fight to Drop Windows 11&apos;s Microsoft Account Requirements](https://tech.slashdot.org/story/26/03/23/0030225/some-microsoft-insiders-fight-to-drop-windows-11s-microsoft-account-requirements?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 03:33:41](https://news.ycombinator.com/item?id=47485231) - [GoGoGrandparent (YC S16) is hiring Back end Engineers](https://www.ycombinator.com/companies/gogograndparent/jobs/2vbzAw8-backend-engineer)
* [2026-03-23, 02:55:47](https://lobste.rs/s/2hkvoo/does_computer_science_still_exist) - [Does Computer Science still exist?](https://davidbau.com/archives/2026/03/20/does_computer_science_still_exist.html)
* [2026-03-23, 02:42:00](https://soylentnews.org/article.pl?sid=26/03/21/145246&amp;from=rss) - [Commission Says EU Inc Will be in Place by End of 2026](https://soylentnews.org/article.pl?sid=26/03/21/145246&amp;from=rss)
* [2026-03-23, 01:41:45](https://lobste.rs/s/xrwc0y/blessed_rs_recommended_crate_directory) - [blessed.rs - Recommended Crate Directory](https://blessed.rs/)
* [2026-03-23, 01:39:33](https://lobste.rs/s/1dufuw/whistler_live_ebpf_programming_from) - [Whistler: Live eBPF Programming from the Common Lisp REPL](https://atgreen.github.io/repl-yell/posts/whistler/)
* [2026-03-23, 01:34:00](https://slashdot.org/story/26/03/22/2346224/walmart-announces-digital-price-labels-for-every-store-in-the-us-by-the-end-of-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Walmart Announces Digital Price Labels for Every Store in the U.S. By the End of 2026](https://slashdot.org/story/26/03/22/2346224/walmart-announces-digital-price-labels-for-every-store-in-the-us-by-the-end-of-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-22, 22:55:00](https://tech.slashdot.org/story/26/03/22/2246209/trapped-inside-a-self-driving-car-during-an-anti-robot-attack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trapped! Inside a Self-Driving Car During an Anti-Robot Attack](https://tech.slashdot.org/story/26/03/22/2246209/trapped-inside-a-self-driving-car-during-an-anti-robot-attack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-22, 22:32:15](https://lobste.rs/s/n1h2tl/is_local_future_ai) - [Is Local the Future of AI?](https://tombedor.dev/open-source-models/)
* [2026-03-22, 21:55:33](https://lobste.rs/s/g4sj0m/diminished_art_coding) - [The diminished art of coding](https://nolanlawson.com/2026/03/22/the-diminished-art-of-coding/)
* [2026-03-22, 21:55:00](https://hardware.slashdot.org/story/26/03/22/2151236/elon-musk-announces-20b-terafab-chip-plant-in-texas-to-supply-his-companies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Elon Musk Announces $20B &apos;Terafab&apos; Chip Plant in Texas To Supply His Companies](https://hardware.slashdot.org/story/26/03/22/2151236/elon-musk-announces-20b-terafab-chip-plant-in-texas-to-supply-his-companies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-22, 21:54:00](https://soylentnews.org/article.pl?sid=26/03/21/1345242&amp;from=rss) - [Proton Mail Helped FBI Unmask Anonymous ‘Stop Cop City’ Protester](https://soylentnews.org/article.pl?sid=26/03/21/1345242&amp;from=rss)
* [2026-03-22, 21:14:11](https://news.ycombinator.com/item?id=47482217) - [GrapheneOS will remain usable by anyone without requiring personal information](https://grapheneos.social/@GrapheneOS/116261301913660830)
* [2026-03-22, 20:34:00](https://yro.slashdot.org/story/26/03/22/2025249/tech-leaders-support-california-bill-to-stop-dominant-platforms-from-blocking-competition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tech Leaders Support California Bill to Stop &apos;Dominant Platforms&apos; From Blocking Competition](https://yro.slashdot.org/story/26/03/22/2025249/tech-leaders-support-california-bill-to-stop-dominant-platforms-from-blocking-competition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-22, 19:19:00](https://apple.slashdot.org/story/26/03/22/1917223/why-apple-temporarily-blocked-popular-vibe-coding-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why Apple Temporarily Blocked Popular Vibe Coding Apps](https://apple.slashdot.org/story/26/03/22/1917223/why-apple-temporarily-blocked-popular-vibe-coding-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-22, 19:02:43](https://news.ycombinator.com/item?id=47480886) - [The gold standard of optimization: A look under the hood of RollerCoaster Tycoon](https://larstofus.com/2026/03/22/the-gold-standard-of-optimization-a-look-under-the-hood-of-rollercoaster-tycoon/)
* [2026-03-22, 18:23:40](https://news.ycombinator.com/item?id=47480507) - [PC Gamer recommends RSS readers in a 37mb article that just keeps downloading](https://stuartbreckenridge.net/2026-03-19-pc-gamer-recommends-rss-readers-in-a-37mb-article/)
* [2026-03-22, 18:18:01](https://news.ycombinator.com/item?id=47480447) - [What young workers are doing to AI-proof themselves](https://www.wsj.com/economy/jobs/ai-jobs-young-people-careers-14282284)
* [2026-03-22, 17:55:00](https://entertainment.slashdot.org/story/26/03/22/1752237/william-shatner-celebrates-95th-birthday-smokes-cigar-revisits-rocket-man-and-tests-x-money?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [William Shatner Celebrates 95th Birthday, Smokes Cigar, Revisits &apos;Rocket Man&apos; and Tests X Money](https://entertainment.slashdot.org/story/26/03/22/1752237/william-shatner-celebrates-95th-birthday-smokes-cigar-revisits-rocket-man-and-tests-x-money?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-22, 17:17:06](https://news.ycombinator.com/item?id=47479751) - [Why I love NixOS](https://www.birkey.co/2026-03-22-why-i-love-nixos.html)
* [2026-03-22, 17:09:00](https://soylentnews.org/article.pl?sid=26/03/21/1339251&amp;from=rss) - [Wayland Set the Linux Desktop Back by 10 Years](https://soylentnews.org/article.pl?sid=26/03/21/1339251&amp;from=rss)
* [2026-03-22, 17:06:38](https://news.ycombinator.com/item?id=47479627) - [Five years of running a systems reading group at Microsoft](https://armaansood.com/posts/systems-reading-group/)
* [2026-03-22, 16:38:38](https://lobste.rs/s/702zix/let_s_see_paul_allen_s_simd_csv_parser) - [Let&apos;s see Paul Allen&apos;s SIMD CSV parser](https://chunkofcoal.com/posts/simd-csv/)
* [2026-03-22, 16:34:00](https://slashdot.org/story/26/03/21/2326202/a-cnn-producer-explores-the-magic-ai-workout-mirror?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A CNN Producer Explores the &apos;Magic AI&apos; Workout Mirror](https://slashdot.org/story/26/03/21/2326202/a-cnn-producer-explores-the-magic-ai-workout-mirror?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-22, 16:18:42](https://lobste.rs/s/qhtpe5/slow_collapse_mkdocs) - [The Slow Collapse of MkDocs](https://fpgmaas.com/blog/collapse-of-mkdocs/)
* [2026-03-22, 16:11:14](https://lobste.rs/s/gwp3b9/i_hate_programming_wayland_applications) - [I Hate Programming Wayland Applications](https://www.p4m.dev/posts/29/index.html)
* [2026-03-22, 15:34:00](https://tech.slashdot.org/story/26/03/22/0517221/google-search-is-now-sometimes-using-ai-to-replace-headlines?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Search Is Now Sometimes Using AI To Replace Headlines](https://tech.slashdot.org/story/26/03/22/0517221/google-search-is-now-sometimes-using-ai-to-replace-headlines?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-22, 15:30:54](https://news.ycombinator.com/item?id=47478548) - [You are not your job](https://jry.io/writing/you-are-not-your-job/)
* [2026-03-22, 15:29:02](https://lobste.rs/s/w2x9dq/case_against_currying) - [A Case Against Currying](https://emi-h.com/articles/a-case-against-currying.html)
* [2026-03-22, 15:16:28](https://news.ycombinator.com/item?id=47478401) - [The future of version control](https://bramcohen.com/p/manyana)
* [2026-03-22, 15:15:46](https://lobste.rs/s/1vcuqm/manyana_coherent_vision_for_future) - [Manyana: A Coherent Vision For The Future Of Version Control](https://bramcohen.com/p/manyana)
* [2026-03-22, 14:34:00](https://hardware.slashdot.org/story/26/03/21/0548213/amazon-plans-to-test-four-legged-robots-on-wheels-for-deliveries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Plans to Test Four-Legged Robots on Wheels for Deliveries](https://hardware.slashdot.org/story/26/03/21/0548213/amazon-plans-to-test-four-legged-robots-on-wheels-for-deliveries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-22, 14:12:13](https://lobste.rs/s/oe0qp1/my_home_network_observes_bedtime_with) - [My home network observes bedtime with OpenBSD and pf](https://ratfactor.com/openbsd/pf-gateway-bedtime)
* [2026-03-22, 13:30:45](https://lobste.rs/s/xpek6g/windows_native_app_development_is_mess) - [Windows Native App Development Is a Mess](https://domenic.me/windows-native-dev/)
* [2026-03-22, 13:24:38](https://news.ycombinator.com/item?id=47477284) - [Building an FPGA 3dfx Voodoo with Modern RTL Tools](https://noquiche.fyi/voodoo)
* [2026-03-22, 12:28:38](https://news.ycombinator.com/item?id=47476821) - [Project Nomad – Knowledge That Never Goes Offline](https://www.projectnomad.us)
* [2026-03-22, 12:22:00](https://soylentnews.org/article.pl?sid=26/03/21/1337239&amp;from=rss) - [Analysis From West Point Warns That Strait of Hormuz Blockade Will Strangle US Defense Industry](https://soylentnews.org/article.pl?sid=26/03/21/1337239&amp;from=rss)
* [2026-03-22, 11:34:00](https://entertainment.slashdot.org/story/26/03/22/0422221/us-cable-tv-industry-faces-dramatic-collapse-as-local-operators-shut-down---or-become-isps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Cable TV Industry Faces &apos;Dramatic Collapse&apos; as Local Operators Shut Down - or Become ISPs](https://entertainment.slashdot.org/story/26/03/22/0422221/us-cable-tv-industry-faces-dramatic-collapse-as-local-operators-shut-down---or-become-isps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-22, 11:30:03](https://news.ycombinator.com/item?id=47476422) - [Flash-MoE: Running a 397B Parameter Model on a Laptop](https://github.com/danveloper/flash-moe)
* [2026-03-22, 11:09:34](https://news.ycombinator.com/item?id=47476315) - [Reports of code&apos;s death are greatly exaggerated](https://stevekrouse.com/precision)
* [2026-03-22, 07:37:00](https://soylentnews.org/article.pl?sid=26/03/21/1319201&amp;from=rss) - [This Fungus Can Make Water Freeze](https://soylentnews.org/article.pl?sid=26/03/21/1319201&amp;from=rss)
* [2026-03-22, 07:34:00](https://science.slashdot.org/story/26/03/22/0542203/meteor-rumbles-over-houston-as-six-pound-fragment-crashes-into-a-texas-home?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meteor Rumbles Over Houston, as Six-Pound Fragment Crashes Into a Texas Home](https://science.slashdot.org/story/26/03/22/0542203/meteor-rumbles-over-houston-as-six-pound-fragment-crashes-into-a-texas-home?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-22, 07:12:14](https://lobste.rs/s/hmb3mz/security_advisory_for_cargo) - [Security advisory for Cargo](https://blog.rust-lang.org/2026/03/21/cve-2026-33056/)
* [2026-03-22, 06:05:18](https://lobste.rs/s/hun60m/ubuntu_26_04_ends_46_years_silent_sudo) - [Ubuntu 26.04 Ends 46 Years of Silent sudo Passwords](https://pbxscience.com/ubuntu-26-04-ends-46-years-of-silent-sudo-passwords/)
* [2026-03-22, 06:03:46](https://lobste.rs/s/gukzip/three_pillars_javascript_bloat) - [The Three Pillars of JavaScript Bloat](https://43081j.com/2026/03/three-pillars-of-javascript-bloat)
* [2026-03-22, 04:34:00](https://tech.slashdot.org/story/26/03/22/0317216/teslas-upcoming-electric-big-rig-is-already-a-hit-with-truckers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tesla&apos;s Upcoming Electric Big Rig Is Already a Hit with Truckers](https://tech.slashdot.org/story/26/03/22/0317216/teslas-upcoming-electric-big-rig-is-already-a-hit-with-truckers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-22, 02:52:00](https://soylentnews.org/article.pl?sid=26/03/19/208240&amp;from=rss) - [Tech Hobbyist Makes Shoulder-Mounted Guided Missile Prototype With $96 In Parts And A 3D Printer](https://soylentnews.org/article.pl?sid=26/03/19/208240&amp;from=rss)
* [2026-03-21, 22:07:00](https://soylentnews.org/article.pl?sid=26/03/19/205228&amp;from=rss) - [Nearly Half of UK Adults Happy to Use ChatGPT as a Counsellor](https://soylentnews.org/article.pl?sid=26/03/19/205228&amp;from=rss)
* [2026-03-21, 17:22:00](https://soylentnews.org/article.pl?sid=26/03/19/203221&amp;from=rss) - [Nvidia Resumes Manufacturing of H200 Chips for China, CEO Says](https://soylentnews.org/article.pl?sid=26/03/19/203221&amp;from=rss)
* [2026-03-21, 12:40:00](https://soylentnews.org/article.pl?sid=26/03/19/201233&amp;from=rss) - [Tundra Tongue: The Science Behind a Very Cold Mistake](https://soylentnews.org/article.pl?sid=26/03/19/201233&amp;from=rss)
* [2026-03-21, 07:55:00](https://soylentnews.org/article.pl?sid=26/03/19/1958201&amp;from=rss) - [Afroman Wins &apos;Lemon Pound Cake&apos; Lawsuit Over Raid-Turned-Music-Video](https://soylentnews.org/article.pl?sid=26/03/19/1958201&amp;from=rss)
* [2026-03-21, 03:07:00](https://soylentnews.org/article.pl?sid=26/03/19/1638217&amp;from=rss) - [How Should We Define Mathematical Beauty in the AI Age?](https://soylentnews.org/article.pl?sid=26/03/19/1638217&amp;from=rss)
* [2026-03-20, 22:15:00](https://soylentnews.org/article.pl?sid=26/03/19/1636248&amp;from=rss) - [Invisible Malicious Code Attacks 151 GitHub Repos And VS Code — Glassworm Attack Uses Blockchain](https://soylentnews.org/article.pl?sid=26/03/19/1636248&amp;from=rss)
* [2026-03-20, 17:59:35](https://news.ycombinator.com/item?id=47458248) - [General Motors Is Assisting with the Restoration of a Rare EV1](https://evinfo.net/2026/03/general-motors-is-assisting-with-the-restoration-of-an-1996-ev1/)
* [2026-03-20, 17:53:00](https://soylentnews.org/article.pl?sid=26/03/19/1635218&amp;from=rss) - [Researchers Played Music to Cells – Aggressiveness of Laryngeal Cancer Decreased](https://soylentnews.org/article.pl?sid=26/03/19/1635218&amp;from=rss)
* [2026-03-20, 14:02:14](https://news.ycombinator.com/item?id=47454647) - [Tin Can, a &apos;landline&apos; for kids](https://www.businessinsider.com/tin-can-landline-kids-cellphone-cell-alternative-how-2025-9)
* [2026-03-20, 13:21:51](https://news.ycombinator.com/item?id=47454127) - [The way CTRL-C in Postgres CLI cancels queries is incredibly hack-y](https://neon.com/blog/ctrl-c-in-psql-gives-me-the-heebie-jeebies)
* [2026-03-20, 12:46:00](https://soylentnews.org/article.pl?sid=26/03/19/0318230&amp;from=rss) - [Elon Musk Says His Chipmaking &apos;Terafab Project&apos; Venture Will Launch in Seven Days](https://soylentnews.org/article.pl?sid=26/03/19/0318230&amp;from=rss)
* [2026-03-20, 12:11:35](https://news.ycombinator.com/item?id=47453462) - [Can you get root with only a cigarette lighter? (2024)](https://www.da.vidbuchanan.co.uk/blog/dram-emfi.html)
* [2026-03-20, 07:57:00](https://soylentnews.org/article.pl?sid=26/03/19/0310236&amp;from=rss) - [Massive Interpol Operation Takes Down 45,000 Ip Addresses and Leads to 94 Arrests](https://soylentnews.org/article.pl?sid=26/03/19/0310236&amp;from=rss)
* [2026-03-20, 03:11:00](https://soylentnews.org/article.pl?sid=26/03/19/035202&amp;from=rss) - [The Ongoing Strait of Hormuz Blockage Will Impact the Semiconductor and AI Industries](https://soylentnews.org/article.pl?sid=26/03/19/035202&amp;from=rss)
* [2026-03-19, 22:23:00](https://soylentnews.org/article.pl?sid=26/03/19/0258237&amp;from=rss) - [Over Fifteen Years Later, Microsoft Morged My Diagram](https://soylentnews.org/article.pl?sid=26/03/19/0258237&amp;from=rss)
* [2026-03-19, 19:42:35](https://news.ycombinator.com/item?id=47444812) - [Walmart: ChatGPT checkout converted 3x worse than website](https://searchengineland.com/walmart-chatgpt-checkout-converted-worse-472071)
* [2026-03-19, 17:38:00](https://soylentnews.org/article.pl?sid=26/03/18/1530220&amp;from=rss) - [Predicted by Einstein 100 Years Ago, This Cosmic Phenomenon Has Finally Been Observed](https://soylentnews.org/article.pl?sid=26/03/18/1530220&amp;from=rss)
* [2026-03-19, 12:53:00](https://soylentnews.org/article.pl?sid=26/03/18/1524211&amp;from=rss) - [100 Years Later, Where is Robert Goddard&apos;s First Liquid-Fuel Rocket?](https://soylentnews.org/article.pl?sid=26/03/18/1524211&amp;from=rss)
* [2026-03-19, 10:00:42](https://news.ycombinator.com/item?id=47437005) - [An Unsolicited Guide to Being a Researcher [pdf]](https://emerge-lab.github.io/papers/an-unsolicited-guide-to-good-research.pdf)
* [2026-03-19, 08:53:36](https://news.ycombinator.com/item?id=47436592) - [Bombadil: Property-based testing for web UIs by Antithesis](https://github.com/antithesishq/bombadil)
* [2026-03-19, 08:08:00](https://soylentnews.org/article.pl?sid=26/03/18/1522208&amp;from=rss) - [The Science of How Fireflies Stay in Sync](https://soylentnews.org/article.pl?sid=26/03/18/1522208&amp;from=rss)
* [2026-03-19, 03:23:00](https://soylentnews.org/article.pl?sid=26/03/17/0844255&amp;from=rss) - [Humanities in the Machine](https://soylentnews.org/article.pl?sid=26/03/17/0844255&amp;from=rss)
