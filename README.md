# [News Summary](https://kherrick.github.io/news-summary/)

## Space, Science, and Technology Breakthroughs

* [ULA Launches First National Security Mission On Vulcan Centaur Rocket](https://tech.slashdot.org/story/25/08/13/0724221/ula-launches-first-national-security-mission-on-vulcan-centaur-rocket?utm_source=rss1.0mainlinkanon&utm_medium=feed) - An important milestone for space exploration, as ULA successfully launched its first national security mission using its Vulcan Centaur rocket.

* [Google and IBM Believe First Workable Quantum Computer is in Sight](https://tech.slashdot.org/story/25/08/12/2048213/google-and-ibm-believe-first-workable-quantum-computer-is-in-sight?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A major breakthrough in quantum computing could be closer than expected, as Google and IBM make significant progress toward a functional quantum computer.

* [Cornell Researchers Develop Invisible Light-Based Watermark To Detect Deepfakes](https://slashdot.org/story/25/08/12/2214243/cornell-researchers-develop-invisible-light-based-watermark-to-detect-deepfakes?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Tackling the challenges of digital deception, new watermark technology offers a robust approach to identifying deepfakes.

* [Extra-Strong Bacterial Cellulose Sheets as a Biodegradable Alternative to Plastic](https://soylentnews.org/article.pl?sid=25/08/10/2217254&from=rss) - Scientists explore using bacterial cellulose sheets to replace plastic, addressing environmental sustainability concerns.

## Innovations in AI and Software

* [Perplexity offers to buy Google Chrome for $34.5B](https://www.theverge.com/news/758218/perplexity-google-chrome-bid-unsolicited-offer) - A surprising unsolicited offer demonstrates the high stakes in the tech world’s browser wars.

* [Using AI to Increase Access to Historic Archives](https://news.slashdot.org/story/25/08/12/2050216/boston-public-library-aims-to-increase-access-to-a-vast-historic-archive-using-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Boston Public Library employs AI to ensure broader public access to massive historical archives.

* [Microsoft Releases Lightweight Office Taskbar Apps for Windows 11](https://it.slashdot.org/story/25/08/12/1754254/microsoft-releases-lightweight-office-taskbar-apps-for-windows-11?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Microsoft simplifies office tools with taskbar apps designed for ease-of-access in Windows 11.

* [Numba v2 Compiler Design](https://numba.pydata.org/numba-prototypes/sealir_tutorials/index.html) - Numba’s new compiler design demonstrates innovation in optimizing Python for high-performance computing.

## Cybersecurity Concerns and Controversies

* [Online Safety Act – shutdowns and site blocks](https://www.blocked.org.uk/osa-blocks) - The UK’s Online Safety Act is raising concerns around internet freedom and access, with the potential for shutdowns and widespread site blocks.

* [WinRAR zero-day Exploited to Plant Malware on Archive Extraction](https://soylentnews.org/article.pl?sid=25/08/09/1818247&from=rss) - A critical vulnerability in popular software WinRAR is exploited, highlighting the importance of software security updates.

* [Russia Is Suspected To Be Behind Breach of Federal Court Filing System](https://yro.slashdot.org/story/25/08/12/213252/russia-is-suspected-to-be-behind-breach-of-federal-court-filing-system?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A cyber breach possibly linked to Russia highlights concerns over securing national infrastructures.

## Tech Community Discussions

* [Linus Torvalds Blasts Kernel Dev For 'Making the World Worse' With 'Garbage' Patches](https://linux.slashdot.org/story/25/08/12/2150211/linus-torvalds-blasts-kernel-dev-for-making-the-world-worse-with-garbage-patches?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A heated exchange within the Linux community over coding practices highlights the challenges of collaborative development.

* [Git Interactive Rebase Order is Wrong (2019)](https://salferrarello.com/git-interactive-rebase-order-is-wrong/) - Exploring inefficiencies in Git’s interactive rebase, sparking conversation on ways to improve workflows.

## Astronomy and Space Technology Challenges

* [Nearly 1 in 3 Starlink satellites detected within the SKA-Low frequency band](https://astrobites.org/2025/08/12/starlink-ska-low/) - Astronomers raise concerns as Starlink satellites interfere with SKA-Low telescope observations.

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

* [2025-08-13, 09:42:29](https://lobste.rs/s/xcvyjm/pure_static_analysis_file_format_checker) - [pure: A static analysis file format checker for Zip files](https://github.com/ronomon/pure)
* [2025-08-13, 08:38:18](https://news.ycombinator.com/item?id=44885991) - [Perplexity offers to buy Google Chrome for $34.5B](https://www.theverge.com/news/758218/perplexity-google-chrome-bid-unsolicited-offer)
* [2025-08-13, 08:34:00](https://soylentnews.org/article.pl?sid=25/08/12/1137226&amp;from=rss) - [Small Clouds Out as VMware Again Changes Partner Program](https://soylentnews.org/article.pl?sid=25/08/12/1137226&amp;from=rss)
* [2025-08-13, 08:12:48](https://news.ycombinator.com/item?id=44885821) - [Nearly 1 in 3 Starlink satellites detected within the SKA-Low frequency band](https://astrobites.org/2025/08/12/starlink-ska-low/)
* [2025-08-13, 08:03:14](https://news.ycombinator.com/item?id=44885761) - [The Factory Timezone](https://data.iana.org/time-zones/tzdb-2025a/factory)
* [2025-08-13, 08:01:53](https://lobste.rs/s/ywyzag/factory_timezone) - [The Factory Timezone](https://data.iana.org/time-zones/tzdb-2025a/factory)
* [2025-08-13, 07:30:00](https://tech.slashdot.org/story/25/08/13/0724221/ula-launches-first-national-security-mission-on-vulcan-centaur-rocket?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ULA Launches First National Security Mission On Vulcan Centaur Rocket](https://tech.slashdot.org/story/25/08/13/0724221/ula-launches-first-national-security-mission-on-vulcan-centaur-rocket?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-13, 06:40:38](https://news.ycombinator.com/item?id=44885295) - [Online Safety Act – shutdowns and site blocks](https://www.blocked.org.uk/osa-blocks)
* [2025-08-13, 04:43:39](https://news.ycombinator.com/item?id=44884709) - [F-Droid build servers can&apos;t build modern Android apps due to outdated CPUs](https://news.ycombinator.com/item?id=44884709)
* [2025-08-13, 04:23:52](https://lobste.rs/s/vnwv2r/linear_scan_register_allocation_on_ssa) - [Linear scan register allocation on SSA](https://bernsteinbear.com/blog/linear-scan/)
* [2025-08-13, 04:08:45](https://lobste.rs/s/4zxyua/numba_v2_compiler_design) - [Numba v2 Compiler Design](https://numba.pydata.org/numba-prototypes/sealir_tutorials/index.html)
* [2025-08-13, 04:03:18](https://news.ycombinator.com/item?id=44884546) - [Fennel libraries as single files (2023)](https://andreyor.st/posts/2023-08-27-fennel-libraries-as-single-files/)
* [2025-08-13, 03:57:41](https://lobste.rs/s/gkzkf1/fennel_libraries_as_single_files) - [Fennel libraries as single files](https://andreyor.st/posts/2023-08-27-fennel-libraries-as-single-files/)
* [2025-08-13, 03:51:00](https://soylentnews.org/article.pl?sid=25/08/12/0427247&amp;from=rss) - [OpenAI Will Not Disclose GPT-5’s Energy Use. It Could be Higher Than Past Models](https://soylentnews.org/article.pl?sid=25/08/12/0427247&amp;from=rss)
* [2025-08-13, 03:30:00](https://linux.slashdot.org/story/25/08/12/2150211/linus-torvalds-blasts-kernel-dev-for-making-the-world-worse-with-garbage-patches?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linus Torvalds Blasts Kernel Dev For &apos;Making the World Worse&apos; With &apos;Garbage&apos; Patches](https://linux.slashdot.org/story/25/08/12/2150211/linus-torvalds-blasts-kernel-dev-for-making-the-world-worse-with-garbage-patches?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-13, 03:26:53](https://news.ycombinator.com/item?id=44884393) - [1948: Catholic Church publishes final edition of “Index Librorum Prohibitorum”](https://historyofinformation.com/detail.php?entryid=856)
* [2025-08-13, 02:26:32](https://news.ycombinator.com/item?id=44884091) - [A Comprehensive Survey of Self-Evolving AI Agents [pdf]](https://arxiv.org/abs/2508.07407)
* [2025-08-13, 02:01:16](https://lobste.rs/s/l3qyvk/crowdsourcing_broken_qr_codes_still) - [Crowdsourcing Broken QR Codes (Still)](https://www.humanqr.com/news/qr-code-not-scanning-well-try-to-help/)
* [2025-08-13, 01:25:00](https://slashdot.org/story/25/08/12/2214243/cornell-researchers-develop-invisible-light-based-watermark-to-detect-deepfakes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cornell Researchers Develop Invisible Light-Based Watermark To Detect Deepfakes](https://slashdot.org/story/25/08/12/2214243/cornell-researchers-develop-invisible-light-based-watermark-to-detect-deepfakes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-13, 01:18:23](https://lobste.rs/s/86ptga/nyc_s_urban_textscape) - [NYC’s Urban Textscape](https://pudding.cool/2025/07/street-view/)
* [2025-08-13, 00:45:00](https://yro.slashdot.org/story/25/08/12/2142218/do-kwon-pleads-guilty-to-us-fraud-charges-in-40-billion-crypto-collapse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Do Kwon Pleads Guilty to US Fraud Charges In $40 Billion Crypto Collapse](https://yro.slashdot.org/story/25/08/12/2142218/do-kwon-pleads-guilty-to-us-fraud-charges-in-40-billion-crypto-collapse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-13, 00:17:33](https://news.ycombinator.com/item?id=44883304) - [Search all text in New York City](https://www.alltext.nyc/)
* [2025-08-13, 00:02:00](https://yro.slashdot.org/story/25/08/12/213252/russia-is-suspected-to-be-behind-breach-of-federal-court-filing-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Russia Is Suspected To Be Behind Breach of Federal Court Filing System](https://yro.slashdot.org/story/25/08/12/213252/russia-is-suspected-to-be-behind-breach-of-federal-court-filing-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-13, 00:01:08](https://lobste.rs/s/fh5wex/go_1_25_release_notes) - [Go 1.25 Release Notes](https://go.dev/doc/go1.25)
* [2025-08-12, 23:20:00](https://news.slashdot.org/story/25/08/12/2050216/boston-public-library-aims-to-increase-access-to-a-vast-historic-archive-using-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Boston Public Library Aims To Increase Access To a Vast Historic Archive Using AI](https://news.slashdot.org/story/25/08/12/2050216/boston-public-library-aims-to-increase-access-to-a-vast-historic-archive-using-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-12, 23:08:00](https://soylentnews.org/article.pl?sid=25/08/12/0419218&amp;from=rss) - [Using a Fan Can Make Older Adults Hotter in a Dry Heat](https://soylentnews.org/article.pl?sid=25/08/12/0419218&amp;from=rss)
* [2025-08-12, 22:41:00](https://tech.slashdot.org/story/25/08/12/2048213/google-and-ibm-believe-first-workable-quantum-computer-is-in-sight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google and IBM Believe First Workable Quantum Computer is in Sight](https://tech.slashdot.org/story/25/08/12/2048213/google-and-ibm-believe-first-workable-quantum-computer-is-in-sight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-12, 22:19:08](https://news.ycombinator.com/item?id=44882441) - [Show HN: Doom port to pure Go – Gore](https://github.com/AndreRenaud/gore)
* [2025-08-12, 22:18:55](https://news.ycombinator.com/item?id=44882438) - [A gentle introduction to anchor positioning](https://webkit.org/blog/17240/a-gentle-introduction-to-anchor-positioning/)
* [2025-08-12, 22:00:00](https://it.slashdot.org/story/25/08/12/2037200/sloppy-ai-defenses-take-cybersecurity-back-to-the-1990s-researchers-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sloppy AI Defenses Take Cybersecurity Back To the 1990s, Researchers Say](https://it.slashdot.org/story/25/08/12/2037200/sloppy-ai-defenses-take-cybersecurity-back-to-the-1990s-researchers-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-12, 21:20:00](https://tech.slashdot.org/story/25/08/12/2018257/threads-now-has-more-than-400-million-monthly-active-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Threads Now Has More Than 400 Million Monthly Active Users](https://tech.slashdot.org/story/25/08/12/2018257/threads-now-has-more-than-400-million-monthly-active-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-12, 21:13:48](https://lobste.rs/s/a7avpz/introduction_python_rust_interop_for) - [An Introduction to Python-Rust Interop for Scientific Codebases](https://github.com/nrposner/coding_club)
* [2025-08-12, 20:40:00](https://slashdot.org/story/25/08/12/2011252/china-urges-firms-to-avoid-nvidia-h20-chips-after-trump-resumes-sales?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Urges Firms To Avoid Nvidia H20 Chips After Trump Resumes Sales](https://slashdot.org/story/25/08/12/2011252/china-urges-firms-to-avoid-nvidia-h20-chips-after-trump-resumes-sales?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-12, 20:15:17](https://news.ycombinator.com/item?id=44881287) - [The Missing Protocol: Let Me Know](https://deanebarker.net/tech/blog/let-me-know/)
* [2025-08-12, 20:01:00](https://news.slashdot.org/story/25/08/12/1948203/uk-government-suggests-deleting-files-to-save-water?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Government Suggests Deleting Files To Save Water](https://news.slashdot.org/story/25/08/12/1948203/uk-government-suggests-deleting-files-to-save-water?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-12, 19:44:34](https://lobste.rs/s/8iizm7/nimi_sin_make_more_specific_words) - [nimi sin: make more specific words](https://nora.codes/post/nimi-sin/)
* [2025-08-12, 19:22:00](https://slashdot.org/story/25/08/12/1913202/ai-is-forcing-the-return-of-the-in-person-job-interview?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Is Forcing the Return of the In-Person Job Interview](https://slashdot.org/story/25/08/12/1913202/ai-is-forcing-the-return-of-the-in-person-job-interview?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-12, 18:56:38](https://news.ycombinator.com/item?id=44880401) - [Ashet Home Computer](https://ashet.computer/)
* [2025-08-12, 18:42:00](https://tech.slashdot.org/story/25/08/12/1842234/google-will-now-let-you-pick-your-top-sources-for-search-results?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Will Now Let You Pick Your Top Sources For Search Results](https://tech.slashdot.org/story/25/08/12/1842234/google-will-now-let-you-pick-your-top-sources-for-search-results?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-12, 18:41:46](https://lobste.rs/s/ks1m49/ashet_home_computer) - [Ashet Home Computer](https://ashet.computer/)
* [2025-08-12, 18:25:00](https://soylentnews.org/article.pl?sid=25/08/11/2227259&amp;from=rss) - [Post-Quantum Cryptography Advice Added to OpenSSH Website](https://soylentnews.org/article.pl?sid=25/08/11/2227259&amp;from=rss)
* [2025-08-12, 18:02:00](https://it.slashdot.org/story/25/08/12/1754254/microsoft-releases-lightweight-office-taskbar-apps-for-windows-11?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Releases Lightweight Office Taskbar Apps for Windows 11](https://it.slashdot.org/story/25/08/12/1754254/microsoft-releases-lightweight-office-taskbar-apps-for-windows-11?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-12, 17:43:41](https://lobste.rs/s/dejmjq/how_i_do_type_safe_container_types_c) - [How I do (type-safe) container types in C](https://louissven.xyz/article/how_I_do_container_types_in_C.md)
* [2025-08-12, 17:26:00](https://slashdot.org/story/25/08/12/1726210/microsoft-is-trying-to-poach-meta-ai-talent-and-offering-multimillion-dollar-pay-packages?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft is Trying To Poach Meta AI Talent and Offering Multimillion-Dollar Pay Packages](https://slashdot.org/story/25/08/12/1726210/microsoft-is-trying-to-poach-meta-ai-talent-and-offering-multimillion-dollar-pay-packages?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-12, 16:53:37](https://news.ycombinator.com/item?id=44878916) - [WHY2025: How to become your own ISP [video]](https://media.ccc.de/v/why2025-9-how-to-become-your-own-isp)
* [2025-08-12, 16:33:38](https://news.ycombinator.com/item?id=44878650) - [Show HN: Omnara – Run Claude Code from anywhere](https://github.com/omnara-ai/omnara)
* [2025-08-12, 16:31:02](https://lobste.rs/s/jfvyez/git_interactive_rebase_order_is_wrong) - [Git Interactive Rebase Order is Wrong (2019)](https://salferrarello.com/git-interactive-rebase-order-is-wrong/)
* [2025-08-12, 16:19:42](https://lobste.rs/s/1fduyi/jenny_s_daily_drivers_freedos_1_4) - [Jenny’s Daily Drivers: FreeDOS 1.4](https://hackaday.com/2025/08/06/jennys-daily-drivers-freedos-1-4/)
* [2025-08-12, 16:02:40](https://news.ycombinator.com/item?id=44878151) - [Show HN: Building a web search engine from scratch with 3B neural embeddings](https://blog.wilsonl.in/search-engine/)
* [2025-08-12, 16:02:23](https://news.ycombinator.com/item?id=44878147) - [Claude Sonnet 4 now supports 1M tokens of context](https://www.anthropic.com/news/1m-context)
* [2025-08-12, 15:17:16](https://lobste.rs/s/kvit4x/syncthing_v2_0) - [Syncthing v2.0](https://github.com/syncthing/syncthing/releases/tag/v2.0.0)
* [2025-08-12, 14:04:40](https://news.ycombinator.com/item?id=44876356) - [Journaling using Nix, Vim and coreutils](https://tangled.sh/@oppi.li/journal)
* [2025-08-12, 13:42:00](https://soylentnews.org/article.pl?sid=25/08/10/233218&amp;from=rss) - [Coding Error Blamed After Parts of Constitution Disappear From US Website](https://soylentnews.org/article.pl?sid=25/08/10/233218&amp;from=rss)
* [2025-08-12, 13:41:44](https://lobste.rs/s/9tcapq/stylish_bugs) - [stylish bugs](https://flak.tedunangst.com/post/stylish-bugs)
* [2025-08-12, 13:32:16](https://news.ycombinator.com/item?id=44875992) - [Training language models to be warm and empathetic makes them less reliable](https://arxiv.org/abs/2507.21919)
* [2025-08-12, 11:34:39](https://lobste.rs/s/puv5fm/radicle_1_3_0) - [Radicle 1.3.0](https://radicle.xyz/2025/08/12/radicle-1.3.0)
* [2025-08-12, 10:00:08](https://lobste.rs/s/fmiqeh/best_hello_world_web_development) - [The Best \&quot;Hello World\&quot; in Web Development](https://unplannedobsolescence.com/blog/best-hello-world-web-development/)
* [2025-08-12, 08:55:00](https://soylentnews.org/article.pl?sid=25/08/10/2217254&amp;from=rss) - [Extra-Strong Bacterial Cellulose Sheets as a Biodegradable Alternative to Plastic](https://soylentnews.org/article.pl?sid=25/08/10/2217254&amp;from=rss)
* [2025-08-12, 08:15:29](https://lobste.rs/s/en2zdl/history_windows_xp) - [The History of Windows XP](https://www.abortretry.fail/p/the-history-of-windows-xp)
* [2025-08-12, 08:11:36](https://lobste.rs/s/hs9zf7/mutually_attacking_knights) - [Mutually Attacking Knights](https://susam.net/mutually-attacking-knights.html)
* [2025-08-12, 07:17:35](https://lobste.rs/s/ykunj2/high_level_cpu_challenge_2008) - [The \&quot;high-level CPU\&quot; challenge (2008)](https://yosefk.com/blog/the-high-level-cpu-challenge.html)
* [2025-08-12, 04:14:00](https://soylentnews.org/article.pl?sid=25/08/10/1521232&amp;from=rss) - [Here’s How Deepfake Vishing Attacks Work, and Why They Can Be Hard to Detect](https://soylentnews.org/article.pl?sid=25/08/10/1521232&amp;from=rss)
* [2025-08-12, 03:35:52](https://news.ycombinator.com/item?id=44872114) - [From Here?](https://www.dirtyfeed.org/2025/07/from-here/)
* [2025-08-12, 03:01:30](https://lobste.rs/s/ghlmkv/ai_reviews_my_mini_webserver) - [ai reviews my mini webserver](https://gist.github.com/izabera/91f44d29bb9da9a703514e815f71cf8c)
* [2025-08-12, 02:35:24](https://lobste.rs/s/3aogtw/uxn) - [uxn](https://100r.co/site/uxn.html)
* [2025-08-11, 23:28:00](https://soylentnews.org/article.pl?sid=25/08/10/1038254&amp;from=rss) - [Quantum \&quot;Schrödinger&apos;s Cat\&quot; Survives For Mind-Blowing 23 Minutes In Record-Breaking Experiment](https://soylentnews.org/article.pl?sid=25/08/10/1038254&amp;from=rss)
* [2025-08-11, 23:00:33](https://lobste.rs/s/lg9rft/fight_chat_control) - [Fight Chat Control](https://fightchatcontrol.eu/)
* [2025-08-11, 20:10:48](https://lobste.rs/s/jrrhfu/missing_css_1_2_0) - [missing.css 1.2.0](https://missing.style/releases/1.2.0/)
* [2025-08-11, 18:45:00](https://soylentnews.org/article.pl?sid=25/08/10/1036210&amp;from=rss) - [Asian Hornet’s Unique Buzz May Hold Secret to Containing Invasive Species](https://soylentnews.org/article.pl?sid=25/08/10/1036210&amp;from=rss)
* [2025-08-11, 14:14:00](https://soylentnews.org/article.pl?sid=25/08/11/145224&amp;from=rss) - [RIP: Dame Stephanie &apos;Steve&apos; Shirley, Technology Pioneer, Dies Aged 91](https://soylentnews.org/article.pl?sid=25/08/11/145224&amp;from=rss)
* [2025-08-11, 14:01:00](https://soylentnews.org/article.pl?sid=25/08/09/1958210&amp;from=rss) - [CalyxOS: The Pause That Wasn&apos;t](https://soylentnews.org/article.pl?sid=25/08/09/1958210&amp;from=rss)
* [2025-08-11, 09:11:00](https://soylentnews.org/article.pl?sid=25/08/09/1827235&amp;from=rss) - [Americans, Be Warned: Lessons From Reddit’s Chaotic UK Age Verification Rollout](https://soylentnews.org/article.pl?sid=25/08/09/1827235&amp;from=rss)
* [2025-08-11, 05:14:00](https://soylentnews.org/article.pl?sid=25/08/11/0456211&amp;from=rss) - [RIP: James Lovell Dead at 97](https://soylentnews.org/article.pl?sid=25/08/11/0456211&amp;from=rss)
* [2025-08-11, 04:34:00](https://soylentnews.org/article.pl?sid=25/08/09/1818247&amp;from=rss) - [WinRAR zero-day Exploited to Plant Malware on Archive Extraction](https://soylentnews.org/article.pl?sid=25/08/09/1818247&amp;from=rss)
* [2025-08-10, 23:45:00](https://soylentnews.org/article.pl?sid=25/08/09/188231&amp;from=rss) - [Is Perrier as Pure as it Claims? The Bottled Water Scandal Gripping France](https://soylentnews.org/article.pl?sid=25/08/09/188231&amp;from=rss)
* [2025-08-10, 18:57:00](https://soylentnews.org/article.pl?sid=25/08/09/091234&amp;from=rss) - [Man Swaps His Salt for Sodium Bromide—and Suffers Psychosis](https://soylentnews.org/article.pl?sid=25/08/09/091234&amp;from=rss)
* [2025-08-10, 18:14:38](https://news.ycombinator.com/item?id=44857100) - [Conversations remotely detected from cell phone vibrations, researchers report](https://www.psu.edu/news/engineering/story/conversations-remotely-detected-cell-phone-vibrations-researchers-report)
* [2025-08-10, 16:14:40](https://news.ycombinator.com/item?id=44856161) - [The Anti-Pattern Game](https://hakon.gylterud.net/antipattern/)
* [2025-08-10, 15:55:54](https://news.ycombinator.com/item?id=44856046) - [QNX: The Incredible 1.44M Demo](https://archive.org/details/QNX_incredible_1.44m_demo_v4.0)
* [2025-08-10, 13:12:00](https://soylentnews.org/article.pl?sid=25/08/09/0853200&amp;from=rss) - [Oh No, Wavy Dave! Robot Crustacean Waves at Fiddler Crabs for Science, Has a Bad Time](https://soylentnews.org/article.pl?sid=25/08/09/0853200&amp;from=rss)
* [2025-08-10, 11:40:14](https://news.ycombinator.com/item?id=44854518) - [LLMs aren&apos;t world models](https://yosefk.com/blog/llms-arent-world-models.html)
* [2025-08-10, 08:28:00](https://soylentnews.org/article.pl?sid=25/08/09/0850232&amp;from=rss) - [Japanese Scientists Develop Artificial Blood](https://soylentnews.org/article.pl?sid=25/08/09/0850232&amp;from=rss)
* [2025-08-10, 03:45:00](https://soylentnews.org/article.pl?sid=25/08/09/0847239&amp;from=rss) - [Denmark Zoo: Donate Unwanted Pets to Feed Predators and Imitate ‘Natural Food Chain’](https://soylentnews.org/article.pl?sid=25/08/09/0847239&amp;from=rss)
* [2025-08-09, 23:01:00](https://soylentnews.org/article.pl?sid=25/08/09/0123224&amp;from=rss) - [Personalized Pricing Has Spread Across Many Industries. Here&apos;s How Consumers Can Avoid It](https://soylentnews.org/article.pl?sid=25/08/09/0123224&amp;from=rss)
* [2025-08-09, 22:18:21](https://news.ycombinator.com/item?id=44850843) - [Lördagsgodis (Saturday Sweets)](https://en.wikipedia.org/wiki/L%C3%B6rdagsgodis)
* [2025-08-09, 18:15:00](https://soylentnews.org/article.pl?sid=25/08/09/0113237&amp;from=rss) - [YouTube to Gauge US Users’ Ages With AI After UK and Australia Add Age Checks](https://soylentnews.org/article.pl?sid=25/08/09/0113237&amp;from=rss)
* [2025-08-09, 16:36:29](https://news.ycombinator.com/item?id=44847903) - [Fingerjigger](https://fingerjigger.com/play)
* [2025-08-09, 14:33:12](https://news.ycombinator.com/item?id=44846781) - [Bezier-rs – algorithms for Bézier segments and shapes](https://graphite.rs/libraries/bezier-rs/)
* [2025-08-09, 13:48:00](https://soylentnews.org/article.pl?sid=25/08/08/047222&amp;from=rss) - [Hacker Summer Camp: What to Expect From BSides, Black Hat, and DEF CON](https://soylentnews.org/article.pl?sid=25/08/08/047222&amp;from=rss)
* [2025-08-09, 11:48:24](https://news.ycombinator.com/item?id=44845787) - [Multimodal WFH setup: flight SIM, EE lab, and music studio in 60sqft/5.5M²](https://www.sdo.group/study)
* [2025-08-09, 09:02:00](https://soylentnews.org/article.pl?sid=25/08/08/0353246&amp;from=rss) - [An Ohio Couple Welcomes a Baby Boy From a Nearly 31-Year-Old Frozen Embryo](https://soylentnews.org/article.pl?sid=25/08/08/0353246&amp;from=rss)
* [2025-08-09, 08:20:00](https://news.ycombinator.com/item?id=44844903) - [Visualizing quaternions: An explorable video series (2018)](https://eater.net/quaternions)
* [2025-08-09, 04:16:00](https://soylentnews.org/article.pl?sid=25/08/08/0113247&amp;from=rss) - [KubeSphere Kills Open Source Edition](https://soylentnews.org/article.pl?sid=25/08/08/0113247&amp;from=rss)
* [2025-08-09, 02:26:48](https://news.ycombinator.com/item?id=44843586) - [Blender is Native on Windows 11 on Arm](https://www.thurrott.com/music-videos/324346/blender-is-native-on-windows-11-on-arm)
