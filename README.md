# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovations

* [Lean proved this program was correct; then I found a bug](https://kirancodes.me/posts/log-who-watches-the-watchers.html) ([Comments](https://lobste.rs/s/wwr6zu/lean_proved_this_program_was_correct_then))

* [Intel Introduces its Own Neural Compression Technology With a Fallback Mode That Works on All GPUs](https://soylentnews.org/article.pl?sid=26/04/12/1154237&amp;from=rss) ([Comments](https://soylentnews.org/article.pl?sid=26/04/12/1154237&amp;from=rss))

* [Servo 0.1.0 (first LTS version) is now available on crates.io](https://servo.org/blog/2026/04/13/servo-0.1.0-release/) ([Comments](https://lobste.rs/s/f8vyzy/servo_0_1_0_first_lts_version_is_now))

* [A Dumb Introduction to z3](https://ar-ms.me/thoughts/a-gentle-introduction-to-z3/) ([Comments](https://lobste.rs/s/c1tlxi/dumb_introduction_z3))

* [All elementary functions from a single binary operator](https://arxiv.org/abs/2603.21852) ([Comments](https://lobste.rs/s/rnx6fh/all_elementary_functions_from_single))

* [Reflecting on deserialization. Why you should explicitly decode your JSON](https://hashset.dev/article/2026/03/21/reflecting-on-deserialization-why-you-should-explicitly-decode-your-json/) ([Comments](https://lobste.rs/s/3ci3hd/reflecting_on_deserialization_why_you))

## Cybersecurity and Privacy

* [Californians Sue Over AI Tool That Records Doctor Visits](https://slashdot.org/story/26/04/13/0330204/californians-sue-over-ai-tool-that-records-doctor-visits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://slashdot.org/story/26/04/13/0330204/californians-sue-over-ai-tool-that-records-doctor-visits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Android now stops you sharing your location in photos](https://shkspr.mobi/blog/2026/04/android-now-stops-you-sharing-your-location-in-photos/) ([Comments](https://news.ycombinator.com/item?id=47750669))

* [Adobes Secretly Modifies Your Hosts File for the Stupidest Reason](https://soylentnews.org/article.pl?sid=26/04/09/067240&amp;from=rss) ([Comments](https://soylentnews.org/article.pl?sid=26/04/09/067240&amp;from=rss))

* [Maine Set To Become First State With Data Center Ban](https://yro.slashdot.org/story/26/04/13/0335254/maine-set-to-become-first-state-with-data-center-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://yro.slashdot.org/story/26/04/13/0335254/maine-set-to-become-first-state-with-data-center-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

## Applications and Software

* [App Store Reviews are Busted](https://blog.terrygodier.com/2026/04/13/app-store-reviews-are-busted.html) ([Comments](https://lobste.rs/s/9w4iju/app_store_reviews_are_busted))

* [Little LaTeX Pearls](https://ionathan.ch/2026/04/08/LaTeX.html) ([Comments](https://lobste.rs/s/xcurde/little_latex_pearls))

* [SQL Has Problems. We Can Fix Them: Pipe Syntax In SQL (2024)](https://research.google/pubs/sql-has-problems-we-can-fix-them-pipe-syntax-in-sql/) ([Comments](https://lobste.rs/s/yiiupr/sql_has_problems_we_can_fix_them_pipe))

## Human Impacts and Society

* [US appeals court declares 158-year-old home distilling ban unconstitutional](https://nypost.com/2026/04/11/us-news/us-appeals-court-declares-158-year-old-home-distilling-ban-unconstitutional/) ([Comments](https://news.ycombinator.com/item?id=47751781))

* [Anthropic Asks Christian Leaders for Help Steering Claude's Spiritual Development](https://slashdot.org/story/26/04/13/0156227/anthropic-asks-christian-leaders-for-help-steering-claudes-spiritual-development?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://slashdot.org/story/26/04/13/0156227/anthropic-asks-christian-leaders-for-help-steering-claudes-spiritual-development?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Alpine Divorce: A Hike That Ends a Relationship](https://www.nytimes.com/2026/04/12/style/alpine-divorce-relationships-hike.html) ([Comments](https://news.ycombinator.com/item?id=47753446))

## Miscellaneous

* [Recovering a Lost Document: Habitat Anecdotes (1988)](https://habitatchronicles.com/2026/04/habitat-anecdotes/) ([Comments](https://lobste.rs/s/cyzmjq/recovering_lost_document_habitat))

* [Robot Birds Deployed by Park to Attract Real Birds - Built By High School Students](https://news.slashdot.org/story/26/04/13/0115243/robot-birds-deployed-by-park-to-attract-real-birds---built-by-high-school-students?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://news.slashdot.org/story/26/04/13/0115243/robot-birds-deployed-by-park-to-attract-real-birds---built-by-high-school-students?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [I gave every train in New York an instrument](https://www.trainjazz.com/) ([Comments](https://news.ycombinator.com/item?id=47719490))

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

* [2026-04-13, 16:04:27](https://lobste.rs/s/wwr6zu/lean_proved_this_program_was_correct_then) - [Lean proved this program was correct; then I found a bug](https://kirancodes.me/posts/log-who-watches-the-watchers.html)
* [2026-04-13, 16:00:00](https://yro.slashdot.org/story/26/04/13/0335254/maine-set-to-become-first-state-with-data-center-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Maine Set To Become First State With Data Center Ban](https://yro.slashdot.org/story/26/04/13/0335254/maine-set-to-become-first-state-with-data-center-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-13, 15:48:45](https://lobste.rs/s/9w4iju/app_store_reviews_are_busted) - [App Store Reviews are Busted](https://blog.terrygodier.com/2026/04/13/app-store-reviews-are-busted.html)
* [2026-04-13, 15:41:08](https://news.ycombinator.com/item?id=47753643) - [Claude.ai down](https://status.claude.com/incidents/6jd2m42f8mld)
* [2026-04-13, 15:29:35](https://news.ycombinator.com/item?id=47753446) - [Alpine Divorce: A Hike That Ends a Relationship](https://www.nytimes.com/2026/04/12/style/alpine-divorce-relationships-hike.html)
* [2026-04-13, 15:28:32](https://lobste.rs/s/v30zok/autoscaling_forgejo_runner) - [Autoscaling Forgejo Runner](https://aahlenst.dev/blog/autoscaling-forgejo-runner/)
* [2026-04-13, 15:12:52](https://lobste.rs/s/pvawq1/configuration_flags_are_where_software) - [Configuration flags are where software goes to rot](https://00f.net/2026/04/11/config-flags/)
* [2026-04-13, 15:00:00](https://slashdot.org/story/26/04/13/0330204/californians-sue-over-ai-tool-that-records-doctor-visits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Californians Sue Over AI Tool That Records Doctor Visits](https://slashdot.org/story/26/04/13/0330204/californians-sue-over-ai-tool-that-records-doctor-visits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-13, 14:53:05](https://news.ycombinator.com/item?id=47752884) - [We May Be Living Through the Most Consequential Hundred Days in Cyber History](https://ringmast4r.substack.com/p/we-may-be-living-through-the-most)
* [2026-04-13, 14:48:55](https://news.ycombinator.com/item?id=47752819) - [Make Tmux Pretty and Usable](https://hamvocke.com/blog/a-guide-to-customizing-your-tmux-conf/)
* [2026-04-13, 14:36:49](https://lobste.rs/s/cyzmjq/recovering_lost_document_habitat) - [Recovering a Lost Document: Habitat Anecdotes (1988)](https://habitatchronicles.com/2026/04/habitat-anecdotes/)
* [2026-04-13, 14:11:00](https://soylentnews.org/article.pl?sid=26/04/12/1154237&amp;from=rss) - [Intel Introduces its Own Neural Compression Technology With a Fallback Mode That Works on All GPUs](https://soylentnews.org/article.pl?sid=26/04/12/1154237&amp;from=rss)
* [2026-04-13, 13:52:04](https://lobste.rs/s/brblmp/malleable_software) - [Malleable Software](https://blog.cemunalan.com.tr/2026/02/01/malleable-software/)
* [2026-04-13, 13:48:24](https://news.ycombinator.com/item?id=47751936) - [Microsoft isn&apos;t removing Copilot from Windows 11, it&apos;s just renaming it](https://www.neowin.net/opinions/microsoft-isnt-removing-copilot-from-windows-11-its-just-renaming-it/)
* [2026-04-13, 13:42:04](https://lobste.rs/s/f8vyzy/servo_0_1_0_first_lts_version_is_now) - [Servo 0.1.0 (first LTS version) is now available on crates.io](https://servo.org/blog/2026/04/13/servo-0.1.0-release/)
* [2026-04-13, 13:37:33](https://news.ycombinator.com/item?id=47751781) - [US appeals court declares 158-year-old home distilling ban unconstitutional](https://nypost.com/2026/04/11/us-news/us-appeals-court-declares-158-year-old-home-distilling-ban-unconstitutional/)
* [2026-04-13, 13:23:50](https://news.ycombinator.com/item?id=47751621) - [Initial mainline video capture and camera support for Rockchip RK3588](https://www.collabora.com/news-and-blog/news-and-events/mainline-video-capture-and-camera-support-for-rockchip-rk3588.html)
* [2026-04-13, 13:18:10](https://lobste.rs/s/xcurde/little_latex_pearls) - [Little LaTeX Pearls](https://ionathan.ch/2026/04/08/LaTeX.html)
* [2026-04-13, 12:12:22](https://news.ycombinator.com/item?id=47750872) - [Servo is now available on crates.io](https://servo.org/blog/2026/04/13/servo-0.1.0-release/)
* [2026-04-13, 12:05:35](https://news.ycombinator.com/item?id=47750821) - [Michigan &apos;digital age&apos; bills pulled after privacy concerns raised](https://www.thecentersquare.com/michigan/article_7ca4e268-4a68-42fb-9042-f9d8604ebd7f.html)
* [2026-04-13, 12:02:51](https://lobste.rs/s/3ci3hd/reflecting_on_deserialization_why_you) - [Reflecting on deserialization. Why you should explicitly decode your JSON](https://hashset.dev/article/2026/03/21/reflecting-on-deserialization-why-you-should-explicitly-decode-your-json/)
* [2026-04-13, 11:48:15](https://news.ycombinator.com/item?id=47750669) - [Android now stops you sharing your location in photos](https://shkspr.mobi/blog/2026/04/android-now-stops-you-sharing-your-location-in-photos/)
* [2026-04-13, 11:43:10](https://lobste.rs/s/sslbph/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/sslbph/what_are_you_doing_this_week)
* [2026-04-13, 11:34:00](https://developers.slashdot.org/story/26/04/12/2225245/will-some-programmers-become-ai-babysitters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Will Some Programmers Become &apos;AI Babysitters&apos;?](https://developers.slashdot.org/story/26/04/12/2225245/will-some-programmers-become-ai-babysitters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-13, 10:55:10](https://news.ycombinator.com/item?id=47750259) - [Point Cloud Allemansrätten](https://digitalflapjack.com/weeknotes/point-cloud-allemansr%C3%A4tten/)
* [2026-04-13, 10:30:59](https://lobste.rs/s/rnx6fh/all_elementary_functions_from_single) - [All elementary functions from a single binary operator](https://arxiv.org/abs/2603.21852)
* [2026-04-13, 09:26:56](https://news.ycombinator.com/item?id=47749674) - [Show HN: I built a social media management tool in 3 weeks with Claude and Codex](https://github.com/brightbeanxyz/brightbean-studio)
* [2026-04-13, 09:24:00](https://soylentnews.org/article.pl?sid=26/04/12/1147250&amp;from=rss) - [Cloudflare and GoDaddy Team Up to Curb AI Bot Brigades](https://soylentnews.org/article.pl?sid=26/04/12/1147250&amp;from=rss)
* [2026-04-13, 08:08:30](https://lobste.rs/s/o7zxmn/programming_used_be_free) - [Programming used to be free](https://purplesyringa.moe/blog/programming-used-to-be-free/)
* [2026-04-13, 07:47:03](https://lobste.rs/s/c1tlxi/dumb_introduction_z3) - [A Dumb Introduction to z3](https://ar-ms.me/thoughts/a-gentle-introduction-to-z3/)
* [2026-04-13, 07:34:00](https://slashdot.org/story/26/04/13/0156227/anthropic-asks-christian-leaders-for-help-steering-claudes-spiritual-development?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Asks Christian Leaders for Help Steering Claude&apos;s Spiritual Development](https://slashdot.org/story/26/04/13/0156227/anthropic-asks-christian-leaders-for-help-steering-claudes-spiritual-development?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-13, 06:24:39](https://news.ycombinator.com/item?id=47748314) - [Programming Used to Be Free](https://purplesyringa.moe/blog/programming-used-to-be-free/)
* [2026-04-13, 05:53:07](https://lobste.rs/s/eqawpx/did_you_notice_command_error_exit_shell) - [Did you notice the command error exit in the shell?](https://monzool.net/blog/2026/04/10/error-banner-in-shell/)
* [2026-04-13, 05:45:32](https://news.ycombinator.com/item?id=47748064) - [The economics of software teams: Why most engineering orgs are flying blind](https://www.viktorcessan.com/the-economics-of-software-teams/)
* [2026-04-13, 04:35:00](https://soylentnews.org/article.pl?sid=26/04/11/0355254&amp;from=rss) - [Little Snitch for Linux Released!](https://soylentnews.org/article.pl?sid=26/04/11/0355254&amp;from=rss)
* [2026-04-13, 03:34:00](https://yro.slashdot.org/story/26/04/13/0219250/sam-altmans-home-targeted-a-second-time-two-suspects-arrested?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sam Altman&apos;s Home Targeted a Second Time, Two Suspects Arrested](https://yro.slashdot.org/story/26/04/13/0219250/sam-altmans-home-targeted-a-second-time-two-suspects-arrested?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-13, 02:53:10](https://news.ycombinator.com/item?id=47747017) - [Apple&apos;s accidental moat: How the \&quot;AI Loser\&quot; may end up winning](https://adlrocha.substack.com/p/adlrocha-how-the-ai-loser-may-end)
* [2026-04-13, 01:49:32](https://news.ycombinator.com/item?id=47746610) - [All elementary functions from a single binary operator](https://arxiv.org/abs/2603.21852)
* [2026-04-13, 01:34:00](https://news.slashdot.org/story/26/04/13/0115243/robot-birds-deployed-by-park-to-attract-real-birds---built-by-high-school-students?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Robot Birds Deployed by Park to Attract Real Birds - Built By High School Students](https://news.slashdot.org/story/26/04/13/0115243/robot-birds-deployed-by-park-to-attract-real-birds---built-by-high-school-students?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-13, 00:53:28](https://lobste.rs/s/yiiupr/sql_has_problems_we_can_fix_them_pipe) - [SQL Has Problems. We Can Fix Them: Pipe Syntax In SQL (2024)](https://research.google/pubs/sql-has-problems-we-can-fix-them-pipe-syntax-in-sql/)
* [2026-04-12, 23:48:00](https://soylentnews.org/article.pl?sid=26/04/11/0321245&amp;from=rss) - [&apos;Dead End&apos;: Radical 20-Year Study Reveals Genetic Cloning Hits a Limit](https://soylentnews.org/article.pl?sid=26/04/11/0321245&amp;from=rss)
* [2026-04-12, 23:32:00](https://lobste.rs/s/6wxsq3/native_raspberry_pi_3b_version_oberon) - [Native Raspberry Pi 3b version of the Oberon System 3](https://github.com/rochus-keller/OberonSystem3Native/releases/tag/2026-04-10)
* [2026-04-12, 23:32:00](https://developers.slashdot.org/story/26/04/12/2329229/has-the-rust-programming-languages-popularity-reached-its-plateau?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Has the Rust Programming Language&apos;s Popularity Reached Its Plateau?](https://developers.slashdot.org/story/26/04/12/2329229/has-the-rust-programming-languages-popularity-reached-its-plateau?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-12, 22:38:45](https://news.ycombinator.com/item?id=47745284) - [Taking on CUDA with ROCm: &apos;One Step After Another&apos;](https://www.eetimes.com/taking-on-cuda-with-rocm-one-step-after-another/)
* [2026-04-12, 21:52:00](https://hardware.slashdot.org/story/26/04/12/2149242/how-good-is-windows-on-arm-with-snapdragon-x?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Good is Windows on Arm With Snapdragon X?](https://hardware.slashdot.org/story/26/04/12/2149242/how-good-is-windows-on-arm-with-snapdragon-x?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-12, 21:34:10](https://lobste.rs/s/pel3uq/undocumented_bug_apollo_11_guidance) - [An undocumented bug in the Apollo 11 guidance computer code](https://www.juxt.pro/blog/a-bug-on-the-dark-side-of-the-moon/)
* [2026-04-12, 21:19:55](https://lobste.rs/s/kulbhu/mark_s_magic_multiply) - [Mark’s Magic Multiply](https://wren.wtf/shower-thoughts/marks-magic-multiply/)
* [2026-04-12, 21:11:24](https://news.ycombinator.com/item?id=47744540) - [A perfectable programming language](https://alok.github.io/lean-pages/perfectable-lean/)
* [2026-04-12, 20:43:08](https://news.ycombinator.com/item?id=47744255) - [I ran Gemma 4 as a local model in Codex CLI](https://blog.danielvaughan.com/i-ran-gemma-4-as-a-local-model-in-codex-cli-7fda754dc0d4)
* [2026-04-12, 20:31:59](https://lobste.rs/s/9ihinj/business_case_for_vanilla_js) - [The Business Case for Vanilla JS](https://lewiscampbell.tech/blog/250430.html)
* [2026-04-12, 20:13:00](https://entertainment.slashdot.org/story/26/04/12/2010229/super-mario-galaxy-movie-and-project-hail-mary-combine-for-best-box-office-in-7-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Super Mario Galaxy Movie&apos; and &apos;Project Hail Mary&apos; Combine for Best Box Office in 7 Years](https://entertainment.slashdot.org/story/26/04/12/2010229/super-mario-galaxy-movie-and-project-hail-mary-combine-for-best-box-office-in-7-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-12, 19:53:57](https://lobste.rs/s/7fhahl/48_hours_ago_lobste_rs_surpassed_20_000) - [48 hours ago lobste.rs surpassed 20,000 users](https://lobste.rs/s/7fhahl/48_hours_ago_lobste_rs_surpassed_20_000)
* [2026-04-12, 19:17:36](https://lobste.rs/s/tmddcs/peril_laziness_lost) - [The peril of laziness lost](https://bcantrill.dtrace.org/2026/04/12/the-peril-of-laziness-lost/)
* [2026-04-12, 19:02:00](https://soylentnews.org/article.pl?sid=26/04/11/0313203&amp;from=rss) - [Tech Industry Lays Off Nearly 80,000 Employees in the First Quarter of 2026 (Almost 50% Due to AI)](https://soylentnews.org/article.pl?sid=26/04/11/0313203&amp;from=rss)
* [2026-04-12, 19:01:46](https://lobste.rs/s/o2b59m/forgejo_monthly_report_march_2026) - [Forgejo monthly report - March 2026](https://forgejo.org/2026-03-monthly-report/)
* [2026-04-12, 18:55:00](https://hardware.slashdot.org/story/26/04/12/1854206/hisenses-new-backlit-rgb-led-tv-a-shot-against-oleds-bow-and-includes-a-dp-port?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hisense&apos;s New Backlit RGB LED TV &apos;a Shot Against OLED&apos;s Bow&apos;, and Includes a DP Port](https://hardware.slashdot.org/story/26/04/12/1854206/hisenses-new-backlit-rgb-led-tv-a-shot-against-oleds-bow-and-includes-a-dp-port?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-12, 18:32:46](https://lobste.rs/s/vpdpkq/llm_reviews_cargo_crev) - [LLM Reviews in cargo-crev](https://dpc.pw/posts/llm-reviews-in-cargo-crev/)
* [2026-04-12, 17:34:00](https://news.slashdot.org/story/26/04/12/1728224/botched-it-upgrade-ended-liquor-sales-for-the-entire-state-of-mississippi?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Botched IT Upgrade Ended Liquor Sales for the Entire State of Mississippi](https://news.slashdot.org/story/26/04/12/1728224/botched-it-upgrade-ended-liquor-sales-for-the-entire-state-of-mississippi?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-12, 17:25:44](https://news.ycombinator.com/item?id=47742200) - [Show HN: boringBar – a taskbar-style dock replacement for macOS](https://boringbar.app/)
* [2026-04-12, 16:38:43](https://news.ycombinator.com/item?id=47741701) - [DIY Soft Drinks](https://blinry.org/diy-soft-drinks/)
* [2026-04-12, 16:34:00](https://hardware.slashdot.org/story/26/04/12/0640253/neuroscientists-ai-powered-startup-aims-to-transform-human-cognition-with-perfect-infinite-memory?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Neuroscientist&apos;s AI-Powered Startup Aims To Transform Human Cognition With Perfect, Infinite Memory](https://hardware.slashdot.org/story/26/04/12/0640253/neuroscientists-ai-powered-startup-aims-to-transform-human-cognition-with-perfect-infinite-memory?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-12, 16:24:43](https://news.ycombinator.com/item?id=47741527) - [Ask HN: What Are You Working On? (April 2026)](https://news.ycombinator.com/item?id=47741527)
* [2026-04-12, 16:19:15](https://lobste.rs/s/5ywxzh/bring_back_idiomatic_design) - [Bring Back Idiomatic Design](https://essays.johnloeber.com/p/4-bring-back-idiomatic-design)
* [2026-04-12, 15:53:24](https://lobste.rs/s/gptqt7/how_i_run_multiple_10k_mrr_companies_on_20) - [How I run multiple $10K MRR companies on a $20/month tech stack](https://stevehanov.ca/blog/how-i-run-multiple-10k-mrr-companies-on-a-20month-tech-stack)
* [2026-04-12, 15:34:00](https://science.slashdot.org/story/26/04/12/0511204/dna-level-encryption-developed-by-researchers-to-protect-the-secrets-of-bioengineered-cells?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DNA-Level Encryption Developed by Researchers to Protect the Secrets of Bioengineered Cells](https://science.slashdot.org/story/26/04/12/0511204/dna-level-encryption-developed-by-researchers-to-protect-the-secrets-of-bioengineered-cells?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-12, 14:34:00](https://linux.slashdot.org/story/26/04/12/063252/greg-kroah-hartman-tests-new-clanker-t1000-fuzzing-tool-for-linux-patches?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Greg Kroah-Hartman Tests New &apos;Clanker T1000&apos; Fuzzing Tool for Linux Patches](https://linux.slashdot.org/story/26/04/12/063252/greg-kroah-hartman-tests-new-clanker-t1000-fuzzing-tool-for-linux-patches?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-12, 14:15:00](https://soylentnews.org/article.pl?sid=26/04/11/037238&amp;from=rss) - [Dad Stuck in Support Nightmare After Teen Lied About Age on Discord](https://soylentnews.org/article.pl?sid=26/04/11/037238&amp;from=rss)
* [2026-04-12, 13:06:44](https://news.ycombinator.com/item?id=47739174) - [Show HN: Oberon System 3 runs natively on Raspberry Pi 3 (with ready SD card)](https://github.com/rochus-keller/OberonSystem3Native/releases)
* [2026-04-12, 12:42:25](https://news.ycombinator.com/item?id=47738978) - [We have a 99% email reputation, but Gmail disagrees](https://blogfontawesome.wpcomstaging.com/we-have-a-99-email-reputation-gmail-disagrees/)
* [2026-04-12, 12:28:57](https://news.ycombinator.com/item?id=47738883) - [Tell HN: Docker pull fails in Spain due to football Cloudflare block](https://news.ycombinator.com/item?id=47738883)
* [2026-04-12, 12:21:26](https://news.ycombinator.com/item?id=47738827) - [Bring Back Idiomatic Design (2023)](https://essays.johnloeber.com/p/4-bring-back-idiomatic-design)
* [2026-04-12, 10:34:00](https://news.slashdot.org/story/26/04/11/2331242/crypto-billionaire-pardoned-in-prison-by-trump-just-wrote-a-memoir?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Crypto Billionaire Pardoned In Prison By Trump Just Wrote a Memoir](https://news.slashdot.org/story/26/04/11/2331242/crypto-billionaire-pardoned-in-prison-by-trump-just-wrote-a-memoir?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-12, 09:33:00](https://soylentnews.org/article.pl?sid=26/04/11/0256207&amp;from=rss) - [Federal Cyber Experts Called Microsoft&apos;s Cloud a “Pile of Sh*T,” Approved It Anyway](https://soylentnews.org/article.pl?sid=26/04/11/0256207&amp;from=rss)
* [2026-04-12, 08:25:03](https://news.ycombinator.com/item?id=47737292) - [Is math big or small?](https://chessapig.github.io/talks/Big-Small)
* [2026-04-12, 04:44:00](https://soylentnews.org/article.pl?sid=26/04/11/0245252&amp;from=rss) - [3D Printing a Motor--Some First Steps](https://soylentnews.org/article.pl?sid=26/04/11/0245252&amp;from=rss)
* [2026-04-12, 00:03:00](https://soylentnews.org/article.pl?sid=26/04/11/0242235&amp;from=rss) - [This New &apos;Laughing Rat&apos; Malware Will Steal Your Data, Hack Your Systems, and Laugh at You](https://soylentnews.org/article.pl?sid=26/04/11/0242235&amp;from=rss)
* [2026-04-11, 19:18:00](https://soylentnews.org/article.pl?sid=26/04/10/0259257&amp;from=rss) - [EFF is Leaving X](https://soylentnews.org/article.pl?sid=26/04/10/0259257&amp;from=rss)
* [2026-04-11, 19:15:56](https://news.ycombinator.com/item?id=47733217) - [Exploiting the most prominent AI agent benchmarks](https://rdi.berkeley.edu/blog/trustworthy-benchmarks-cont/)
* [2026-04-11, 14:35:00](https://soylentnews.org/article.pl?sid=26/04/10/0256206&amp;from=rss) - [Standard Model of Particle Physics Verified to One Trillionth Accuracy](https://soylentnews.org/article.pl?sid=26/04/10/0256206&amp;from=rss)
* [2026-04-11, 09:50:00](https://soylentnews.org/article.pl?sid=26/04/10/0254231&amp;from=rss) - [Toward Cheaper, Cleaner Hydrogen Production](https://soylentnews.org/article.pl?sid=26/04/10/0254231&amp;from=rss)
* [2026-04-11, 05:09:00](https://soylentnews.org/article.pl?sid=26/04/10/0250211&amp;from=rss) - [Honda Hits Brakes On EV Rollout Amid Rising Losses](https://soylentnews.org/article.pl?sid=26/04/10/0250211&amp;from=rss)
* [2026-04-11, 00:27:00](https://soylentnews.org/article.pl?sid=26/04/10/0248230&amp;from=rss) - [Ancient Rocks Reveal Evidence of the First Continents and Crust Recycling Processes on Earth](https://soylentnews.org/article.pl?sid=26/04/10/0248230&amp;from=rss)
* [2026-04-10, 19:36:00](https://soylentnews.org/article.pl?sid=26/04/09/067240&amp;from=rss) - [Adobe Secretly Modifies Your Hosts File for the Stupidest Reason](https://soylentnews.org/article.pl?sid=26/04/09/067240&amp;from=rss)
* [2026-04-10, 15:21:07](https://news.ycombinator.com/item?id=47719490) - [I gave every train in New York an instrument](https://www.trainjazz.com/)
* [2026-04-10, 14:53:00](https://soylentnews.org/article.pl?sid=26/04/09/065206&amp;from=rss) - [Debian’s APT 3.2 Released with History, Undo, Redo, and Rollback Support](https://soylentnews.org/article.pl?sid=26/04/09/065206&amp;from=rss)
* [2026-04-10, 10:07:00](https://soylentnews.org/article.pl?sid=26/04/08/1917256&amp;from=rss) - [Researchers Discover How to Dampen Electronic Noise Using Nanowires](https://soylentnews.org/article.pl?sid=26/04/08/1917256&amp;from=rss)
* [2026-04-10, 05:23:00](https://soylentnews.org/article.pl?sid=26/04/08/1916208&amp;from=rss) - [White House Seeks Deep NASA Cuts as Artemis II Breaks Spaceflight Record](https://soylentnews.org/article.pl?sid=26/04/08/1916208&amp;from=rss)
* [2026-04-10, 00:37:00](https://soylentnews.org/article.pl?sid=26/04/08/1912232&amp;from=rss) - [&apos;Voorhees Law&apos; Explains Why the Slower Car Often Catches up](https://soylentnews.org/article.pl?sid=26/04/08/1912232&amp;from=rss)
* [2026-04-09, 19:52:00](https://soylentnews.org/article.pl?sid=26/04/08/198248&amp;from=rss) - [Testing Suggests Google&apos;s AI Overviews Tell Millions of Lies Per Hour](https://soylentnews.org/article.pl?sid=26/04/08/198248&amp;from=rss)
* [2026-04-09, 15:05:00](https://soylentnews.org/article.pl?sid=26/04/08/197218&amp;from=rss) - [Social Media is Virtually Useless for Publishers to Attract Readers](https://soylentnews.org/article.pl?sid=26/04/08/197218&amp;from=rss)
* [2026-04-09, 12:35:20](https://news.ycombinator.com/item?id=47702887) - [Most people can&apos;t juggle one ball](https://www.lesswrong.com/posts/jTGbKKGqs5EdyYoRc/most-people-can-t-juggle-one-ball)
* [2026-04-09, 10:19:00](https://soylentnews.org/article.pl?sid=26/04/08/0231247&amp;from=rss) - [Plan 9 is a Uniquely Complete Operating System](https://soylentnews.org/article.pl?sid=26/04/08/0231247&amp;from=rss)
* [2026-04-09, 05:38:00](https://soylentnews.org/article.pl?sid=26/04/07/2126219&amp;from=rss) - [Big Tech Knows New AI Models Ripe For Cyberattacks — But Plans To Release Them Anyway](https://soylentnews.org/article.pl?sid=26/04/07/2126219&amp;from=rss)
* [2026-04-09, 00:56:00](https://soylentnews.org/article.pl?sid=26/04/07/2124219&amp;from=rss) - [OkCupid Gave 3M Users’ Photos to AI Firm, FTC Says](https://soylentnews.org/article.pl?sid=26/04/07/2124219&amp;from=rss)
