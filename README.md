# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and Technology

* [Move GitHub Private Repos to Google Drive in Minutes](https://tonym.us/move-github-repos-to-google-drive.html) ([comments](https://lobste.rs/s/lcv3lx/move_github_private_repos_google_drive))

* [Life With AI Causing Human Brain 'Fry'](https://it.slashdot.org/story/26/03/30/1824254/life-with-ai-causing-human-brain-fry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://it.slashdot.org/story/26/03/30/1824254/life-with-ai-causing-human-brain-fry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Microsoft Copilot Is Now Injecting Ads Into Pull Requests On GitHub](https://slashdot.org/story/26/03/30/1649230/microsoft-copilot-is-now-injecting-ads-into-pull-requests-on-github?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://slashdot.org/story/26/03/30/1649230/microsoft-copilot-is-now-injecting-ads-into-pull-requests-on-github?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Google Unveils TurboQuant, a New AI Memory Compression Algorithm](https://soylentnews.org/article.pl?sid=26/03/28/0349246&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/03/28/0349246&amp;from=rss))

* [NASA Sets 'Impossible' Ground Rules for Relocation of 'Flown Space Vehicle'](https://soylentnews.org/article.pl?sid=26/03/23/163239&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/03/23/163239&amp;from=rss))

* [Nvidia CEO Jensen Huang Says ‘I Think We've Achieved AGI’](https://soylentnews.org/article.pl?sid=26/03/27/0319208&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/03/27/0319208&amp;from=rss))

## Data Security and Government Surveillance

* [Fedware: Government apps that spy harder than the apps they ban](https://www.sambent.com/the-white-house-app-has-huawei-spyware-and-an-ice-tip-line/) ([comments](https://news.ycombinator.com/item?id=47577761))

* [I Decompiled the White House's New App](https://soylentnews.org/article.pl?sid=26/03/29/1321221&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/03/29/1321221&amp;from=rss))

* [Judge Allows BitTorrent Seeding Claims Against Meta, Despite Lawyers 'Lame Excuses'](https://yro.slashdot.org/story/26/03/30/1815258/judge-allows-bittorrent-seeding-claims-against-meta-despite-lawyers-lame-excuses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://yro.slashdot.org/story/26/03/30/1815258/judge-allows-bittorrent-seeding-claims-against-meta-despite-lawyers-lame-excuses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [FTC action against Match and OkCupid for deceiving users, sharing personal data](https://www.ftc.gov/news-events/news/press-releases/2026/03/ftc-takes-action-against-match-okcupid-deceiving-users-sharing-personal-data-third-party) ([comments](https://news.ycombinator.com/item?id=47575616))

## Innovations and Discoveries

* [A sea of sparks: Seeing radioactivity](https://maurycyz.com/projects/spinthariscope/) ([comments](https://news.ycombinator.com/item?id=47577979))

* [Water Has a Newfound 'Critical Point' That May Help Explain its Quirks](https://soylentnews.org/article.pl?sid=26/03/29/1329244&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/03/29/1329244&amp;from=rss))

* [Hamilton-Jacobi-Bellman Equation: Reinforcement Learning and Diffusion Models](https://dani2442.github.io/posts/continuous-rl/) ([comments](https://news.ycombinator.com/item?id=47571495))

* [An Uncontrolled Experiment in Atmospheric Chemistry](https://soylentnews.org/article.pl?sid=26/03/26/0644236&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/03/26/0644236&amp;from=rss))

* [The Mystery of How Volcanic Lightning Happens Has Been Solved](https://soylentnews.org/article.pl?sid=26/03/25/2339207&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/03/25/2339207&amp;from=rss))

## Gaming and DIY Projects

* [Clojure: The Documentary (Trailer)](https://youtu.be/JJEyffSdBsk) ([comments](https://lobste.rs/s/lxzmm2/clojure_documentary_trailer))

* [CodingFont: A game to help you pick a coding font](https://www.codingfont.com/) ([comments](https://news.ycombinator.com/item?id=47575403))

* [The Steam Controller D0ggle Adventure](https://im-just-lee.ing/steam-controller-d0ggle-54682aa4/) ([comments](https://lobste.rs/s/wkukvc/steam_controller_d0ggle_adventure))

* [This gorgeous DIY camera looks straight out of Severance](https://www.dpreview.com/articles/9055612016/saturnix-diy-camera-alien-sci-fi-raspberry-pi) ([comments](https://lobste.rs/s/zgkb0z/this_gorgeous_diy_camera_looks_straight))

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

* [2026-03-30, 19:22:12](https://lobste.rs/s/lcv3lx/move_github_private_repos_google_drive) - [Move GitHub Private Repos to Google Drive in Minutes](https://tonym.us/move-github-repos-to-google-drive.html)
* [2026-03-30, 19:13:05](https://news.ycombinator.com/item?id=47578464) - [William Blake, Remote by the Sea](https://www.laphamsquarterly.org/roundtable/william-blake-remote-sea)
* [2026-03-30, 19:00:00](https://it.slashdot.org/story/26/03/30/1824254/life-with-ai-causing-human-brain-fry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Life With AI Causing Human Brain &apos;Fry&apos;](https://it.slashdot.org/story/26/03/30/1824254/life-with-ai-causing-human-brain-fry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-30, 18:34:47](https://news.ycombinator.com/item?id=47577979) - [A sea of sparks: Seeing radioactivity](https://maurycyz.com/projects/spinthariscope/)
* [2026-03-30, 18:16:00](https://news.ycombinator.com/item?id=47577761) - [Fedware: Government apps that spy harder than the apps they ban](https://www.sambent.com/the-white-house-app-has-huawei-spyware-and-an-ice-tip-line/)
* [2026-03-30, 18:00:00](https://yro.slashdot.org/story/26/03/30/1815258/judge-allows-bittorrent-seeding-claims-against-meta-despite-lawyers-lame-excuses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Judge Allows BitTorrent Seeding Claims Against Meta, Despite Lawyers &apos;Lame Excuses&apos;](https://yro.slashdot.org/story/26/03/30/1815258/judge-allows-bittorrent-seeding-claims-against-meta-despite-lawyers-lame-excuses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-30, 17:14:06](https://news.ycombinator.com/item?id=47577032) - [DigitalOcean Seeks $800M in Funding](https://www.datacenterdynamics.com/en/news/digitalocean-seeks-800m-in-funding/)
* [2026-03-30, 17:13:50](https://lobste.rs/s/zudaci/joins_are_not_expensive) - [Joins are NOT Expensive](https://www.database-doctor.com/posts/joins-are-not-expensive)
* [2026-03-30, 17:09:56](https://news.ycombinator.com/item?id=47576978) - [You are falling behind because you haven&apos;t fed the insincerity machine](https://christianheilmann.com/2026/03/28/you-are-falling-behind-because-you-havent-fed-the-insincerity-machine-in-the-last-5-minutes/)
* [2026-03-30, 17:01:35](https://news.ycombinator.com/item?id=47576861) - [New Washington state law bans noncompete agreements](https://www.seattletimes.com/business/local-business/new-washington-law-bans-noncompete-agreements/)
* [2026-03-30, 17:00:00](https://slashdot.org/story/26/03/30/1649230/microsoft-copilot-is-now-injecting-ads-into-pull-requests-on-github?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Copilot Is Now Injecting Ads Into Pull Requests On GitHub](https://slashdot.org/story/26/03/30/1649230/microsoft-copilot-is-now-injecting-ads-into-pull-requests-on-github?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-30, 16:25:00](https://soylentnews.org/article.pl?sid=26/03/29/1329244&amp;from=rss) - [Water Has a Newfound ‘Critical Point’ That May Help Explain its Quirks](https://soylentnews.org/article.pl?sid=26/03/29/1329244&amp;from=rss)
* [2026-03-30, 16:23:56](https://news.ycombinator.com/item?id=47576317) - [Take better notes, by hand](https://brianschrader.com/archive/take-better-notes-by-hand/)
* [2026-03-30, 16:05:46](https://news.ycombinator.com/item?id=47576055) - [OCR for construction documents does not work, we fixed it](https://www.getanchorgrid.com/developer/docs/endpoints/drawings-doors)
* [2026-03-30, 16:00:00](https://hardware.slashdot.org/story/26/03/30/0345230/sony-shuts-down-nearly-its-entire-memory-card-business-due-to-ssd-shortage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sony Shuts Down Nearly Its Entire Memory Card Business Due To SSD Shortage](https://hardware.slashdot.org/story/26/03/30/0345230/sony-shuts-down-nearly-its-entire-memory-card-business-due-to-ssd-shortage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-30, 15:58:11](https://news.ycombinator.com/item?id=47575935) - [An NSFW filter for Marginalia search](https://www.marginalia.nu/log/a_134_nsfw/)
* [2026-03-30, 15:55:11](https://lobste.rs/s/fug4fz/your_job_isn_t_programming) - [Your job isn&apos;t programming](https://codeandcake.dev/posts/2025-12-12-your-job-isnt-programming)
* [2026-03-30, 15:43:47](https://lobste.rs/s/uliqp4/how_turn_anything_into_router) - [How to turn anything into a router](https://nbailey.ca/post/router/)
* [2026-03-30, 15:32:37](https://news.ycombinator.com/item?id=47575616) - [FTC action against Match and OkCupid for deceiving users, sharing personal data](https://www.ftc.gov/news-events/news/press-releases/2026/03/ftc-takes-action-against-match-okcupid-deceiving-users-sharing-personal-data-third-party)
* [2026-03-30, 15:31:55](https://lobste.rs/s/v8agk2/numpy_as_synth_engine) - [NumPy as Synth Engine](https://kennethreitz.org/essays/2026-03-29-numpy_as_synth_engine)
* [2026-03-30, 15:23:01](https://lobste.rs/s/z0wm9i/fixing_our_own_problems_rust_compiler) - [Fixing our own problems in the Rust compiler](https://trifectatech.org/blog/fixing-our-own-problems-in-the-rust-compiler/)
* [2026-03-30, 15:17:51](https://news.ycombinator.com/item?id=47575417) - [Show HN: Coasts – Containerized Hosts for Agents](https://github.com/coast-guard/coasts)
* [2026-03-30, 15:16:35](https://news.ycombinator.com/item?id=47575403) - [CodingFont: A game to help you pick a coding font](https://www.codingfont.com/)
* [2026-03-30, 15:00:00](https://slashdot.org/story/26/03/30/043233/tech-ceos-suddenly-love-blaming-ai-for-mass-job-cuts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tech CEOs Suddenly Love Blaming AI For Mass Job Cuts](https://slashdot.org/story/26/03/30/043233/tech-ceos-suddenly-love-blaming-ai-for-mass-job-cuts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-30, 14:42:27](https://lobste.rs/s/vxqecz/working_software_runs_locally) - [Working software runs locally](https://nickmonad.blog/2026/working-software-runs-locally/)
* [2026-03-30, 14:32:20](https://lobste.rs/s/h1hr9m/fast_compact_immutable_map_from_strings) - [A fast, compact, immutable map from strings to uint64 values in Go](https://github.com/lemire/constmap)
* [2026-03-30, 14:26:39](https://lobste.rs/s/zsute2/github_monaspace_case_study) - [GitHub Monaspace Case Study](https://lettermatic.com/custom/monaspace-case-study)
* [2026-03-30, 13:51:31](https://news.ycombinator.com/item?id=47574346) - [The ladder is missing rungs – Engineering Progression When AI Ate the Middle](https://negroniventurestudios.com/2026/03/19/the-ladder-is-missing-rungs/)
* [2026-03-30, 13:28:54](https://news.ycombinator.com/item?id=47574034) - [How to turn anything into a router](https://nbailey.ca/post/router/)
* [2026-03-30, 13:18:43](https://lobste.rs/s/0o60nu/copilot_edited_ad_into_my_pr) - [copilot edited an ad into my pr](https://notes.zachmanson.com/copilot-edited-an-ad-into-my-pr/)
* [2026-03-30, 13:18:39](https://lobste.rs/s/6jlrx2/2026_has_been_most_pivotal_year_my_career) - [2026 has been the most pivotal year in my career… and it&apos;s only March](https://nullprogram.com/blog/2026/03/29/)
* [2026-03-30, 13:14:27](https://news.ycombinator.com/item?id=47573887) - [Bird brains (2023)](https://www.dhanishsemar.com/writing/bird-brains)
* [2026-03-30, 12:39:56](https://news.ycombinator.com/item?id=47573519) - [Do your own writing](https://alexhwoods.com/dont-let-ai-write-for-you/)
* [2026-03-30, 11:40:00](https://soylentnews.org/article.pl?sid=26/03/29/1321221&amp;from=rss) - [I Decompiled the White House&apos;s New App](https://soylentnews.org/article.pl?sid=26/03/29/1321221&amp;from=rss)
* [2026-03-30, 11:34:00](https://yro.slashdot.org/story/26/03/30/0639249/new-company-hopes-to-build-age-verification-tech-into-vape-cartridges?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Company Hopes to Build Age-Verification Tech into Vape Cartridges](https://yro.slashdot.org/story/26/03/30/0639249/new-company-hopes-to-build-age-verification-tech-into-vape-cartridges?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-30, 11:31:01](https://lobste.rs/s/xnfqw6/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/xnfqw6/what_are_you_doing_this_week)
* [2026-03-30, 11:29:24](https://lobste.rs/s/iprjpk/category_theory_illustrated_types) - [Category Theory Illustrated - Types](https://abuseofnotation.github.io/category-theory-illustrated/06_type/)
* [2026-03-30, 11:25:06](https://lobste.rs/s/ye0e0z/three_little_rust_crates) - [Three Little Rust Crates](https://blog.sebastianwick.net/posts/three-little-rust-crates/)
* [2026-03-30, 11:05:37](https://news.ycombinator.com/item?id=47572771) - [Mathematical methods and human thought in the age of AI](https://arxiv.org/abs/2603.26524)
* [2026-03-30, 07:34:04](https://news.ycombinator.com/item?id=47571495) - [Hamilton-Jacobi-Bellman Equation: Reinforcement Learning and Diffusion Models](https://dani2442.github.io/posts/continuous-rl/)
* [2026-03-30, 07:34:00](https://apple.slashdot.org/story/26/03/30/0547245/apples-early-days-massive-oral-history-shares-stories-about-young-wozniak-and-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple&apos;s Early Days: Massive Oral History Shares Stories About Young Wozniak and Jobs](https://apple.slashdot.org/story/26/03/30/0547245/apples-early-days-massive-oral-history-shares-stories-about-young-wozniak-and-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-30, 07:17:06](https://news.ycombinator.com/item?id=47571376) - [I use Excalidraw to manage my diagrams for my blog](https://blog.lysk.tech/excalidraw-frame-export/)
* [2026-03-30, 07:14:21](https://lobste.rs/s/kqnoi9/okapi_what_if_ripgrep_could_edit) - [Okapi, or “What if ripgrep Could Edit?”](https://kocharhook.com/post/6/)
* [2026-03-30, 07:03:18](https://news.ycombinator.com/item?id=47571279) - [I am definitely missing the pre-AI writing era](https://www.lesswrong.com/posts/BJ4pnropWdnzzgeJc/i-am-definitely-missing-the-pre-ai-writing-era)
* [2026-03-30, 06:50:00](https://soylentnews.org/article.pl?sid=26/03/28/0354240&amp;from=rss) - [The Drone Swarm is Coming, and NATO Air Defenses Are Too Expensive to Cope](https://soylentnews.org/article.pl?sid=26/03/28/0354240&amp;from=rss)
* [2026-03-30, 06:16:09](https://lobste.rs/s/zkg4wr/uvwatauavawh_pushy_string) - [UVWATAUAVAWH, The Pushy String](https://www.hexacorn.com/blog/2013/05/16/uvwatauavawh-meet-the-pushy-string/)
* [2026-03-30, 05:41:18](https://lobste.rs/s/lxkqhp/chatgpt_won_t_let_you_type_until) - [ChatGPT Won&apos;t Let You Type Until Cloudflare Reads Your React State. I Decrypted the Program That Does It](https://www.buchodi.com/chatgpt-wont-let-you-type-until-cloudflare-reads-your-react-state-i-decrypted-the-program-that-does-it/)
* [2026-03-30, 05:27:18](https://news.ycombinator.com/item?id=47570666) - [The curious case of retro demo scene graphics](https://www.datagubbe.se/aipixels/)
* [2026-03-30, 05:21:21](https://lobste.rs/s/yyxyjy/15_years_forking_waterfox) - [15 Years of Forking (Waterfox)](https://www.waterfox.com/blog/15-years-of-forking/)
* [2026-03-30, 05:19:22](https://lobste.rs/s/lxzmm2/clojure_documentary_trailer) - [Clojure: The Documentary (Trailer)](https://youtu.be/JJEyffSdBsk)
* [2026-03-30, 05:12:51](https://lobste.rs/s/wkukvc/steam_controller_d0ggle_adventure) - [The Steam Controller D0ggle Adventure](https://im-just-lee.ing/steam-controller-d0ggle-54682aa4/)
* [2026-03-30, 04:39:15](https://news.ycombinator.com/item?id=47570435) - [VHDL&apos;s Crown Jewel](https://www.sigasi.com/opinion/jan/vhdls-crown-jewel/)
* [2026-03-30, 04:04:31](https://news.ycombinator.com/item?id=47570269) - [Copilot edited an ad into my PR](https://notes.zachmanson.com/copilot-edited-an-ad-into-my-pr/)
* [2026-03-30, 03:34:00](https://tech.slashdot.org/story/26/03/30/0219229/rivian-and-lucid-win-right-to-sell-their-evs-directly-to-buyers-in-washington-state?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rivian and Lucid Win Right to Sell Their EVs Directly to Buyers in Washington State](https://tech.slashdot.org/story/26/03/30/0219229/rivian-and-lucid-win-right-to-sell-their-evs-directly-to-buyers-in-washington-state?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-30, 02:07:00](https://soylentnews.org/article.pl?sid=26/03/28/0349246&amp;from=rss) - [Google Unveils TurboQuant, a New AI Memory Compression Algorithm](https://soylentnews.org/article.pl?sid=26/03/28/0349246&amp;from=rss)
* [2026-03-30, 01:37:00](https://tech.slashdot.org/story/26/03/30/0135235/will-social-media-change-after-youtube-and-metas-court-defeat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Will Social Media Change After YouTube and Meta&apos;s Court Defeat?](https://tech.slashdot.org/story/26/03/30/0135235/will-social-media-change-after-youtube-and-metas-court-defeat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-30, 01:15:11](https://lobste.rs/s/zgkb0z/this_gorgeous_diy_camera_looks_straight) - [This gorgeous DIY camera looks straight out of Severance](https://www.dpreview.com/articles/9055612016/saturnix-diy-camera-alien-sci-fi-raspberry-pi)
* [2026-03-29, 23:46:00](https://developers.slashdot.org/story/26/03/29/2343236/is-it-time-for-open-source-to-start-charging-for-access?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is It Time For Open Source to Start Charging For Access?](https://developers.slashdot.org/story/26/03/29/2343236/is-it-time-for-open-source-to-start-charging-for-access?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-29, 22:57:08](https://lobste.rs/s/350aqk/c_26_is_done_trip_report_march_2026_iso_c) - [C++26 is done! — Trip report: March 2026 ISO C++ standards meeting (London Croydon, UK)](https://herbsutter.com/2026/03/29/c26-is-done-trip-report-march-2026-iso-c-standards-meeting-london-croydon-uk/)
* [2026-03-29, 22:19:00](https://entertainment.slashdot.org/story/26/03/29/2216247/project-hail-mary-real-space-science-real-astrophotography?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Project Hail Mary&apos;:  Real Space Science, Real Astrophotography](https://entertainment.slashdot.org/story/26/03/29/2216247/project-hail-mary-real-space-science-real-astrophotography?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-29, 21:26:00](https://soylentnews.org/article.pl?sid=26/03/28/0347204&amp;from=rss) - [A 32-Year-Old Bug Walks Into a Telnet Server](https://soylentnews.org/article.pl?sid=26/03/28/0347204&amp;from=rss)
* [2026-03-29, 21:15:00](https://hardware.slashdot.org/story/26/03/29/2112231/worlds-smallest-qr-code---smaller-than-bacteria---could-store-data-for-centuries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [World&apos;s Smallest QR Code - Smaller Than Bacteria - Could Store Data for Centuries](https://hardware.slashdot.org/story/26/03/29/2112231/worlds-smallest-qr-code---smaller-than-bacteria---could-store-data-for-centuries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-29, 20:58:22](https://news.ycombinator.com/item?id=47567242) - [Build123d: A Python CAD programming library](https://github.com/gumyr/build123d)
* [2026-03-29, 19:48:00](https://hardware.slashdot.org/story/26/03/29/1947202/this-friendly-robot-just-installed-100-mw-of-solar-power?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [This Friendly Robot Just Installed 100 MW of Solar Power](https://hardware.slashdot.org/story/26/03/29/1947202/this-friendly-robot-just-installed-100-mw-of-solar-power?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-29, 18:34:00](https://tech.slashdot.org/story/26/03/29/1832200/blueskys-newest-product-an-ai-tool-that-gives-you-custom-feeds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bluesky&apos;s Newest Product: an AI Tool That Gives You Custom Feeds](https://tech.slashdot.org/story/26/03/29/1832200/blueskys-newest-product-an-ai-tool-that-gives-you-custom-feeds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-29, 18:01:55](https://lobste.rs/s/vixzkq/who_s_hiring_q2_2026) - [Who&apos;s hiring? Q2 2026](https://lobste.rs/s/vixzkq/who_s_hiring_q2_2026)
* [2026-03-29, 17:44:38](https://lobste.rs/s/64hfnw/neovim_0_12_0) - [Neovim 0.12.0](https://github.com/neovim/neovim/releases/tag/v0.12.0)
* [2026-03-29, 16:34:00](https://news.slashdot.org/story/26/03/29/066219/amazon-gambles-on-4b-push-into-americas-rural-areas-may-soon-carry-more-parcels-than-usps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Gambles on $4B Push Into America&apos;s Rural Areas, May Soon Carry More Parcels Than USPS](https://news.slashdot.org/story/26/03/29/066219/amazon-gambles-on-4b-push-into-americas-rural-areas-may-soon-carry-more-parcels-than-usps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-29, 16:32:00](https://soylentnews.org/article.pl?sid=26/03/28/0345249&amp;from=rss) - [Google is Now Changing News Headlines – Without Permission](https://soylentnews.org/article.pl?sid=26/03/28/0345249&amp;from=rss)
* [2026-03-29, 15:46:50](https://lobste.rs/s/bpotqb/cognitive_dark_forest) - [The Cognitive Dark Forest](https://ryelang.org/blog/posts/cognitive-dark-forest/)
* [2026-03-29, 11:52:00](https://soylentnews.org/article.pl?sid=26/03/27/0334236&amp;from=rss) - [Pilot Didn&apos;t Mind NASA&apos;s Experimental Plane Doesnt Have a Front Window](https://soylentnews.org/article.pl?sid=26/03/27/0334236&amp;from=rss)
* [2026-03-29, 07:03:00](https://soylentnews.org/article.pl?sid=26/03/27/0325254&amp;from=rss) - [Someone Forked systemd to Strip Out Its Age Verification Support](https://soylentnews.org/article.pl?sid=26/03/27/0325254&amp;from=rss)
* [2026-03-29, 02:18:00](https://soylentnews.org/article.pl?sid=26/03/27/0319208&amp;from=rss) - [Nvidia CEO Jensen Huang Says ‘I Think We&apos;ve Achieved AGI’](https://soylentnews.org/article.pl?sid=26/03/27/0319208&amp;from=rss)
* [2026-03-28, 21:34:00](https://soylentnews.org/article.pl?sid=26/03/27/0310204&amp;from=rss) - [Age Checks Creep Into Linux, systemd Locks It in, Developer Defends Himself](https://soylentnews.org/article.pl?sid=26/03/27/0310204&amp;from=rss)
* [2026-03-28, 16:51:00](https://soylentnews.org/article.pl?sid=26/03/26/0657232&amp;from=rss) - [CERN Scientists Burn AI Into Silicon to Stem Data Deluge](https://soylentnews.org/article.pl?sid=26/03/26/0657232&amp;from=rss)
* [2026-03-28, 16:28:32](https://news.ycombinator.com/item?id=47556063) - [Seeing Like a Spreadsheet](https://davidoks.blog/p/how-the-spreadsheet-reshaped-america)
* [2026-03-28, 12:09:00](https://soylentnews.org/article.pl?sid=26/03/26/0650221&amp;from=rss) - [Elon Musk Wants to Build 50 Times More Chips Than the World Currently Produces, Using &apos;New Physics&apos;](https://soylentnews.org/article.pl?sid=26/03/26/0650221&amp;from=rss)
* [2026-03-28, 07:24:00](https://soylentnews.org/article.pl?sid=26/03/26/0645257&amp;from=rss) - [Australia to Datacenter Operators: BYO Energy, Pay Your Way, Build Green, or Stay Home](https://soylentnews.org/article.pl?sid=26/03/26/0645257&amp;from=rss)
* [2026-03-28, 02:36:00](https://soylentnews.org/article.pl?sid=26/03/26/0644236&amp;from=rss) - [An Uncontrolled Experiment in Atmospheric Chemistry](https://soylentnews.org/article.pl?sid=26/03/26/0644236&amp;from=rss)
* [2026-03-27, 23:39:44](https://news.ycombinator.com/item?id=47549824) - [Cherri – programming language that compiles to an Apple Shortuct](https://github.com/electrikmilk/cherri)
* [2026-03-27, 21:50:00](https://soylentnews.org/article.pl?sid=26/03/26/0634229&amp;from=rss) - [Concerns Raised Over Shahed Kamikaze Drone Listings on Alibaba](https://soylentnews.org/article.pl?sid=26/03/26/0634229&amp;from=rss)
* [2026-03-27, 16:03:00](https://soylentnews.org/article.pl?sid=26/03/26/0225217&amp;from=rss) - [Palantir Trial Plugs Into UK Financial Watchdog&apos;s Data Trove](https://soylentnews.org/article.pl?sid=26/03/26/0225217&amp;from=rss)
* [2026-03-27, 13:49:42](https://news.ycombinator.com/item?id=47542640) - [Fibonacci&apos;s Composed Fractions](https://ztoz.blog/posts/fibonacci-fractions/)
* [2026-03-27, 11:20:00](https://soylentnews.org/article.pl?sid=26/03/26/0220234&amp;from=rss) - [Amid Fuel Crunch, Cuban Mechanic Converts Car to Run on Charcoal](https://soylentnews.org/article.pl?sid=26/03/26/0220234&amp;from=rss)
* [2026-03-27, 06:38:00](https://soylentnews.org/article.pl?sid=26/03/26/0219214&amp;from=rss) - [The US Bans All New Foreign-Made Network Routers](https://soylentnews.org/article.pl?sid=26/03/26/0219214&amp;from=rss)
* [2026-03-27, 01:55:00](https://soylentnews.org/article.pl?sid=26/03/26/0217248&amp;from=rss) - [TCL&apos;s German QLED Ban Puts Pressure on TV Brands to be More Honest About QDs](https://soylentnews.org/article.pl?sid=26/03/26/0217248&amp;from=rss)
* [2026-03-26, 21:05:00](https://soylentnews.org/article.pl?sid=26/03/25/2355253&amp;from=rss) - [Supreme Court Says Internet Service Provider Isn&apos;t Liable for Bootlegged Music Downloads](https://soylentnews.org/article.pl?sid=26/03/25/2355253&amp;from=rss)
* [2026-03-26, 16:23:00](https://soylentnews.org/article.pl?sid=26/03/25/2344247&amp;from=rss) - [Tech Employees Are Reportedly Being Evaluated by How Fast They Burn Through LLM Tokens](https://soylentnews.org/article.pl?sid=26/03/25/2344247&amp;from=rss)
* [2026-03-26, 11:40:00](https://soylentnews.org/article.pl?sid=26/03/25/2341257&amp;from=rss) - [Micron Predicts That Cars Will Need 300GB of RAM](https://soylentnews.org/article.pl?sid=26/03/25/2341257&amp;from=rss)
* [2026-03-26, 09:41:44](https://news.ycombinator.com/item?id=47528403) - [In math, rigor is vital, but are digitized proofs taking it too far?](https://www.quantamagazine.org/in-math-rigor-is-vital-but-are-digitized-proofs-taking-it-too-far-20260325/)
* [2026-03-26, 06:59:00](https://soylentnews.org/article.pl?sid=26/03/25/2339207&amp;from=rss) - [The Mystery of How Volcanic Lightning Happens Has Been Solved](https://soylentnews.org/article.pl?sid=26/03/25/2339207&amp;from=rss)
* [2026-03-26, 04:53:21](https://news.ycombinator.com/item?id=47526744) - [Proactively Parasocial](https://nicklandolfi.com/posts/proactively-parasocial.html)
* [2026-03-26, 02:12:00](https://soylentnews.org/article.pl?sid=26/03/23/163239&amp;from=rss) - [NASA Sets &apos;Impossible&apos; Ground Rules for Relocation of &apos;Flown Space Vehicle&apos;](https://soylentnews.org/article.pl?sid=26/03/23/163239&amp;from=rss)
