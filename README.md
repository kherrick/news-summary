# [News Summary](https://kherrick.github.io/news-summary/)

## Programming and Technology Innovations

* [Show HN: Asdf Overlay – High performance in-game overlay library for Windows](https://github.com/storycraft/asdf-overlay) ([comments](https://news.ycombinator.com/item?id=44138775))

* [Cap: Lightweight, modern open-source CAPTCHA alternative using proof-of-work](https://capjs.js.org/) ([comments](https://news.ycombinator.com/item?id=44137867))

* [Microsandbox: Virtual Machines that feel and perform like containers](https://github.com/microsandbox/microsandbox) ([comments](https://news.ycombinator.com/item?id=44135977))

* [Programming Beyond Practices](https://notes.skillstopractice.com/pbp.pdf) ([comments](https://lobste.rs/s/ykhfh0/programming_beyond_practices))

## Scientific Discoveries and Environmental Insights

* [Almost 40% of World's Glaciers Already Doomed Due To Climate Crisis](https://news.slashdot.org/story/25/05/30/153212/almost-40-of-worlds-glaciers-already-doomed-due-to-climate-crisis?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=44137187))

* [Scientists Have Clear Evidence of Martian Atmosphere 'Sputtering'](https://science.slashdot.org/story/25/05/30/040234/scientists-have-clear-evidence-of-martian-atmosphere-sputtering?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=44137192))

* [Bed Bugs Are Most Likely the First Human Pest, New Research Shows](https://soylentnews.org/article.pl?sid=25/05/29/0634252&from=rss) ([comments](https://news.ycombinator.com/item?id=44137192))

## AI and Machine Learning Developments

* [The Darwin Gödel Machine: AI that improves itself by rewriting its own code](https://sakana.ai/dgm/) ([comments](https://news.ycombinator.com/item?id=44135369))

* [OpenAI and UAE in Talks For Free ChatGPT Plus For All, Report Says](https://slashdot.org/story/25/05/30/147218/openai-and-uae-in-talks-for-free-chatgpt-plus-for-all-report-says?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=44137542))

## Legal and Corporate Accountability

* [German Court Confirms Civil Liability for Corporate Climate Harms](https://news.slashdot.org/story/25/05/30/1741255/german-court-confirms-civil-liability-for-corporate-climate-harms?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=44135738))

* [MinIO Removes Web UI Features from Community Version, Pushes Users to Paid Plans](https://biggo.com/news/202505261334_MinIO_Removes_Web_UI_Features) ([comments](https://lobste.rs/s/wjb9ox/minio_removes_web_ui_features_from))

* [MAHA Report Found To Contain Citations To Nonexistent Studies](https://news.slashdot.org/story/25/05/30/1643248/maha-report-found-to-contain-citations-to-nonexistent-studies?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=44137715))

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

* [2025-05-30, 18:40:59](https://news.ycombinator.com/item?id=44138879) - [Colour and Shape: Using Computer Vision to Explore the Science Museum (2020)](https://lab.sciencemuseum.org.uk/colour-shape-using-computer-vision-to-explore-the-science-museum-c4b4f1cbd72c)
* [2025-05-30, 18:27:44](https://news.ycombinator.com/item?id=44138775) - [Show HN: Asdf Overlay – High performance in-game overlay library for Windows](https://github.com/storycraft/asdf-overlay)
* [2025-05-30, 18:23:05](https://lobste.rs/s/odnoc2/what_is_racket_doing) - [What is Racket DOING???](https://defn.io/2025/05/30/racket-thread-stack-dumps/)
* [2025-05-30, 18:15:00](https://it.slashdot.org/story/25/05/30/1810246/the-hottest-new-vibe-coding-startup-may-be-a-sitting-duck-for-hackers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Hottest New Vibe Coding Startup May Be a Sitting Duck For Hackers](https://it.slashdot.org/story/25/05/30/1810246/the-hottest-new-vibe-coding-startup-may-be-a-sitting-duck-for-hackers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-30, 17:51:19](https://lobste.rs/s/hqlvf9/book_shen) - [The Book of Shen](https://shenlanguage.org/TBoS/tbos.html)
* [2025-05-30, 17:41:00](https://news.slashdot.org/story/25/05/30/1741255/german-court-confirms-civil-liability-for-corporate-climate-harms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [German Court Confirms Civil Liability for Corporate Climate Harms](https://news.slashdot.org/story/25/05/30/1741255/german-court-confirms-civil-liability-for-corporate-climate-harms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-30, 17:13:00](https://lobste.rs/s/ykhfh0/programming_beyond_practices) - [Programming Beyond Practices](https://notes.skillstopractice.com/pbp.pdf)
* [2025-05-30, 17:01:12](https://news.ycombinator.com/item?id=44138084) - [Weave (YC W25) is hiring a founding engineer](https://www.ycombinator.com/companies/weave-3/jobs)
* [2025-05-30, 16:55:16](https://news.ycombinator.com/item?id=44138034) - [A Smiling Public Man](https://salmagundi.skidmore.edu/articles/1407-a-smiling-public-man)
* [2025-05-30, 16:44:00](https://news.slashdot.org/story/25/05/30/1643248/maha-report-found-to-contain-citations-to-nonexistent-studies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [MAHA Report Found To Contain Citations To Nonexistent Studies](https://news.slashdot.org/story/25/05/30/1643248/maha-report-found-to-contain-citations-to-nonexistent-studies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-30, 16:36:10](https://news.ycombinator.com/item?id=44137867) - [Cap: Lightweight, modern open-source CAPTCHA alternative using proof-of-work](https://capjs.js.org/)
* [2025-05-30, 16:19:50](https://news.ycombinator.com/item?id=44137715) - [Beating Google&apos;s kernelCTF PoW using AVX512](https://anemato.de/blog/kctf-vdf)
* [2025-05-30, 16:13:00](https://slashdot.org/story/25/05/30/1614212/us-airlines-are-quietly-hitting-solo-and-business-travelers-with-higher-fares?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Airlines Are Quietly Hitting Solo and Business Travelers With Higher Fares](https://slashdot.org/story/25/05/30/1614212/us-airlines-are-quietly-hitting-solo-and-business-travelers-with-higher-fares?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-30, 16:11:07](https://news.ycombinator.com/item?id=44137630) - [When will M&amp;S take online orders again?](https://moneyweek.com/personal-finance/marks-and-spencer-online-order-problems)
* [2025-05-30, 16:10:54](https://lobste.rs/s/xkvw45/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/xkvw45/what_are_you_doing_this_weekend)
* [2025-05-30, 16:01:44](https://news.ycombinator.com/item?id=44137542) - [Toxic Origins, Toxic Decisions: Biases in CEO Selection](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5270031)
* [2025-05-30, 15:51:24](https://news.ycombinator.com/item?id=44137439) - [De Bruijn notation, and why it&apos;s useful](https://blueberrywren.dev/blog/debruijn-explanation/)
* [2025-05-30, 15:29:23](https://news.ycombinator.com/item?id=44137192) - [Build API integrations with SQL and YAML – no SaaS lock-in, no drag-and-drop UIs](https://github.com/paloaltodatabases/sequor)
* [2025-05-30, 15:29:04](https://news.ycombinator.com/item?id=44137187) - [The Surveilled Student (2021)](https://www.chronicle.com/article/the-surveilled-student)
* [2025-05-30, 15:25:00](https://news.slashdot.org/story/25/05/30/153212/almost-40-of-worlds-glaciers-already-doomed-due-to-climate-crisis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Almost 40% of World&apos;s Glaciers Already Doomed Due To Climate Crisis](https://news.slashdot.org/story/25/05/30/153212/almost-40-of-worlds-glaciers-already-doomed-due-to-climate-crisis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-30, 15:25:00](https://soylentnews.org/article.pl?sid=25/05/29/0634252&amp;from=rss) - [Bed Bugs Are Most Likely the First Human Pest, New Research Shows](https://soylentnews.org/article.pl?sid=25/05/29/0634252&amp;from=rss)
* [2025-05-30, 14:58:01](https://news.ycombinator.com/item?id=44136884) - [Show HN: W++ – A Python-style scripting language for .NET with NuGet support](https://github.com/sinisterMage/WPlusPlus)
* [2025-05-30, 14:55:50](https://lobste.rs/s/x1eeru/decomplexification) - [Decomplexification](https://daniel.haxx.se/blog/2025/05/29/decomplexification/)
* [2025-05-30, 14:48:00](https://slashdot.org/story/25/05/30/1448240/gmails-ai-summaries-now-appear-automatically?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Gmail&apos;s AI Summaries Now Appear Automatically](https://slashdot.org/story/25/05/30/1448240/gmails-ai-summaries-now-appear-automatically?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-30, 14:07:00](https://slashdot.org/story/25/05/30/147218/openai-and-uae-in-talks-for-free-chatgpt-plus-for-all-report-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI and UAE in Talks For Free ChatGPT Plus For All, Report Says](https://slashdot.org/story/25/05/30/147218/openai-and-uae-in-talks-for-free-chatgpt-plus-for-all-report-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-30, 13:35:17](https://lobste.rs/s/wjb9ox/minio_removes_web_ui_features_from) - [MinIO Removes Web UI Features from Community Version, Pushes Users to Paid Plans](https://biggo.com/news/202505261334_MinIO_Removes_Web_UI_Features)
* [2025-05-30, 13:20:04](https://news.ycombinator.com/item?id=44135977) - [Microsandbox: Virtual Machines that feel and perform like containers](https://github.com/microsandbox/microsandbox)
* [2025-05-30, 12:54:55](https://news.ycombinator.com/item?id=44135738) - [Show HN: Git-Add–Interactive with Enhancements](https://github.com/cwarden/git-add-interactive)
* [2025-05-30, 12:49:01](https://lobste.rs/s/rtiqxg/i_want_love_linux_it_doesn_t_love_me_back) - [I Want to Love Linux. It Doesn&apos;t Love Me Back: Post 3 – Speakup, BRLTTY, and the Forgotten Infrastructure of Console Access](https://fireborn.mataroa.blog/blog/i-want-to-love-linux-it-doesnt-love-me-back-post-3-speakup-brltty-and-the-forgotten-infrastructure-of-console-access/)
* [2025-05-30, 12:48:41](https://lobste.rs/s/wmbuqi/iconography_x_window_system_boot_stipple) - [Iconography of the X Window System: The Boot Stipple](https://matttproud.com/blog/posts/x-window-system-boot-stipple.html)
* [2025-05-30, 12:44:55](https://lobste.rs/s/4clijt/types_other_techniques_as_accessibility) - [Types and other techniques as an accessibility tool for the ADHD brain](https://www.youtube.com/watch?v=DG5gLPFKcbk)
* [2025-05-30, 12:43:13](https://news.ycombinator.com/item?id=44135638) - [Systems Correctness Practices at Amazon Web Services](https://cacm.acm.org/practice/systems-correctness-practices-at-amazon-web-services/)
* [2025-05-30, 12:08:40](https://news.ycombinator.com/item?id=44135369) - [The Darwin Gödel Machine: AI that improves itself by rewriting its own code](https://sakana.ai/dgm/)
* [2025-05-30, 11:02:19](https://news.ycombinator.com/item?id=44134896) - [Ask HN: What is the best LLM for consumer grade hardware?](https://news.ycombinator.com/item?id=44134896)
* [2025-05-30, 10:41:00](https://soylentnews.org/article.pl?sid=25/05/29/0338204&amp;from=rss) - [5 Ways to Stop AI Cheating](https://soylentnews.org/article.pl?sid=25/05/29/0338204&amp;from=rss)
* [2025-05-30, 10:31:13](https://news.ycombinator.com/item?id=44134728) - [Bridged Indexes in OrioleDB: architecture, internals and everyday use?](https://www.orioledb.com/blog/orioledb-bridged-indexes)
* [2025-05-30, 10:00:00](https://yro.slashdot.org/story/25/05/30/0410208/french-mps-vote-to-scrap-low-emission-zones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [French MPs Vote To Scrap Low-Emission Zones](https://yro.slashdot.org/story/25/05/30/0410208/french-mps-vote-to-scrap-low-emission-zones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-30, 09:52:07](https://lobste.rs/s/1ch2zd/radix_2_51_trick_256_bit_addition_2020) - [The radix 2^51 trick to 256-bit addition (2020)](https://www.chosenplaintext.ca/articles/radix-2-51-trick.html)
* [2025-05-30, 09:49:37](https://lobste.rs/s/ytefme/when_was_last_time_you_broke_production) - [When was the last time you broke production and how?](https://lobste.rs/s/ytefme/when_was_last_time_you_broke_production)
* [2025-05-30, 09:14:31](https://news.ycombinator.com/item?id=44134364) - [Radio Astronomy Software Defined Radio (Rasdr)](https://radio-astronomy.org/rasdr)
* [2025-05-30, 08:59:02](https://news.ycombinator.com/item?id=44134290) - [Tokenization for language modeling: BPE vs. Unigram Language Modeling (2020)](https://ndingwall.github.io/blog/tokenization)
* [2025-05-30, 07:00:00](https://science.slashdot.org/story/25/05/30/040234/scientists-have-clear-evidence-of-martian-atmosphere-sputtering?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Have Clear Evidence of Martian Atmosphere &apos;Sputtering&apos;](https://science.slashdot.org/story/25/05/30/040234/scientists-have-clear-evidence-of-martian-atmosphere-sputtering?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-30, 06:54:21](https://lobste.rs/s/y13fa3/poor_man_s_types) - [A poor man’s types](https://blog.snork.dev/posts/a-poor-man-s-types.html)
* [2025-05-30, 06:21:06](https://lobste.rs/s/jhsxpa/three_level_summary_neural_radiance) - [Three Level Summary: Neural Radiance Fields vs. 3D Gaussian Splatting](https://edwardahn.me/archive/2024/02/19/NeRFvs3DGS)
* [2025-05-30, 05:56:00](https://soylentnews.org/article.pl?sid=25/05/29/0334246&amp;from=rss) - [Lenovo Caught Out by Trump&apos;s on-Again Off-Again Tariffs](https://soylentnews.org/article.pl?sid=25/05/29/0334246&amp;from=rss)
* [2025-05-30, 04:52:23](https://lobste.rs/s/cinefb/announcing_dotnet_run_app_cs_simpler_way) - [Announcing dotnet run app.cs—A simpler way to start with C# and .NET 10](https://devblogs.microsoft.com/dotnet/announcing-dotnet-run-app/)
* [2025-05-30, 04:36:21](https://lobste.rs/s/tsxfuc/linux_6_15_kernel_arrives_it_s_big_victory) - [The Linux 6.15 kernel arrives and it&apos;s big a victory for Rust fans](https://www.zdnet.com/article/the-linux-6-15-kernel-arrives-and-its-big-a-victory-for-rust-fans/)
* [2025-05-30, 04:07:17](https://news.ycombinator.com/item?id=44132744) - [Triangle splatting: radiance fields represented by triangles](https://trianglesplatting.github.io/)
* [2025-05-30, 03:55:37](https://news.ycombinator.com/item?id=44132673) - [The radix 2^51 trick (2017)](https://www.chosenplaintext.ca/articles/radix-2-51-trick.html)
* [2025-05-30, 03:30:00](https://science.slashdot.org/story/25/05/29/222251/e-tattoo-could-track-mental-workload-for-people-in-high-stake-jobs-study-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;E-Tattoo&apos; Could Track Mental Workload For People In High-Stake Jobs, Study Says](https://science.slashdot.org/story/25/05/29/222251/e-tattoo-could-track-mental-workload-for-people-in-high-stake-jobs-study-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-30, 01:34:23](https://news.ycombinator.com/item?id=44131984) - [Practical SDR: Getting started with software-defined radio](https://nostarch.com/practical-sdr)
* [2025-05-30, 01:12:00](https://soylentnews.org/article.pl?sid=25/05/29/0327229&amp;from=rss) - [How to Stop and Disable Unwanted Services From Linux System](https://soylentnews.org/article.pl?sid=25/05/29/0327229&amp;from=rss)
* [2025-05-30, 00:32:11](https://news.ycombinator.com/item?id=44131669) - [Copy Excel to Markdown Table (and vice versa)](https://thisdavej.com/copy-table-in-excel-and-paste-as-a-markdown-table/)
* [2025-05-30, 00:20:00](https://games.slashdot.org/story/25/05/29/2149241/amazon-taps-xbox-co-founder-to-develop-breakthrough-consumer-products?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Taps Xbox Co-Founder To Develop &apos;Breakthrough&apos; Consumer Products](https://games.slashdot.org/story/25/05/29/2149241/amazon-taps-xbox-co-founder-to-develop-breakthrough-consumer-products?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-29, 23:40:00](https://yro.slashdot.org/story/25/05/29/216216/man-who-stole-1000-dvds-from-employer-strikes-plea-deal-over-movie-leaks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Man Who Stole 1,000 DVDs From Employer Strikes Plea Deal Over Movie Leaks](https://yro.slashdot.org/story/25/05/29/216216/man-who-stole-1000-dvds-from-employer-strikes-plea-deal-over-movie-leaks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-29, 23:17:29](https://lobste.rs/s/gwf1mz/revisiting_loop_recognition_c_rust) - [Revisiting Loop Recognition in C++... in Rust](http://blomqu.ist/posts/2025/loop-recognition)
* [2025-05-29, 23:00:00](https://hardware.slashdot.org/story/25/05/29/211200/gemini-can-now-watch-google-drive-videos-for-you?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Gemini Can Now Watch Google Drive Videos For You](https://hardware.slashdot.org/story/25/05/29/211200/gemini-can-now-watch-google-drive-videos-for-you?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-29, 22:20:00](https://yro.slashdot.org/story/25/05/29/2058225/intel-wins-jury-trial-over-patent-licenses-in-3-billion-vlsi-fight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel Wins Jury Trial Over Patent Licenses In $3 Billion VLSI Fight](https://yro.slashdot.org/story/25/05/29/2058225/intel-wins-jury-trial-over-patent-licenses-in-3-billion-vlsi-fight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-29, 22:00:00](https://yro.slashdot.org/story/25/05/29/2155215/sec-voluntarily-dismisses-lawsuit-against-binance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SEC Voluntarily Dismisses Lawsuit Against Binance](https://yro.slashdot.org/story/25/05/29/2155215/sec-voluntarily-dismisses-lawsuit-against-binance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-29, 21:50:19](https://lobste.rs/s/cubwue/this_website_does_not_exist) - [This website does not exist](https://thiswebsitedoesnotexist.net/)
* [2025-05-29, 21:27:13](https://lobste.rs/s/nl1rei/hellcaptcha_accessibility_theater_at) - [HellCaptcha: Accessibility Theater at Its Worst](https://fireborn.mataroa.blog/blog/hellcaptcha-accessibility-theater-at-its-worst/)
* [2025-05-29, 20:51:02](https://lobste.rs/s/qnrz7c/which_new_language_should_i_learn_for_web) - [Which New Language Should I Learn for Web Development?](https://mtlynch.io/notes/which-new-language/)
* [2025-05-29, 20:37:25](https://lobste.rs/s/dj960n/net_negative_cursor) - [Net-Negative Cursor](https://lukasatkinson.de/2025/net-negative-cursor/)
* [2025-05-29, 20:30:00](https://soylentnews.org/article.pl?sid=25/05/29/0221209&amp;from=rss) - [Russia is Still Swimming in New Intel and AMD Chips Thanks to Sanction \&quot;Workarounds\&quot;](https://soylentnews.org/article.pl?sid=25/05/29/0221209&amp;from=rss)
* [2025-05-29, 20:05:59](https://lobste.rs/s/sswikt/making_openat_2_friends_more_useful) - [Making openat(2) and friends more useful in practice](https://undeadly.org/cgi?action=article;sid=20250529080623)
* [2025-05-29, 18:28:18](https://lobste.rs/s/giokgl/systems_correctness_practices_at_amazon) - [Systems Correctness Practices at Amazon Web Services](https://cacm.acm.org/practice/systems-correctness-practices-at-amazon-web-services/)
* [2025-05-29, 17:40:35](https://news.ycombinator.com/item?id=44128322) - [FLUX.1 Kontext](https://bfl.ai/models/flux-kontext)
* [2025-05-29, 16:52:45](https://lobste.rs/s/loydfp/break_from_programming_languages) - [A break from programming languages](https://lexi-lambda.github.io/blog/2025/05/29/a-break-from-programming-languages/)
* [2025-05-29, 15:48:00](https://soylentnews.org/article.pl?sid=25/05/28/1749257&amp;from=rss) - [University Of Arizona Scientists Unveil Breakthrough Petahertz-Speed Transistor](https://soylentnews.org/article.pl?sid=25/05/28/1749257&amp;from=rss)
* [2025-05-29, 14:51:03](https://lobste.rs/s/9j9wdi/case_for_using_web_browser_as_your) - [The case for using a web browser as your terminal](https://blog.pomdtr.me/posts/tweety-v1/)
* [2025-05-29, 11:18:04](https://lobste.rs/s/0hfgse/what_s_cooking_on_sourcehut_q2_2025) - [What&apos;s cooking on SourceHut? Q2 2025](https://sourcehut.org/blog/2025-05-29-whats-cooking-q2/)
* [2025-05-29, 11:06:00](https://soylentnews.org/article.pl?sid=25/05/28/1747229&amp;from=rss) - [Some Signs of AI Model Collapse Begin to Reveal Themselves](https://soylentnews.org/article.pl?sid=25/05/28/1747229&amp;from=rss)
* [2025-05-29, 06:15:00](https://soylentnews.org/article.pl?sid=25/05/28/0352254&amp;from=rss) - [Scientists Just Discovered A Mysterious New World Far Beyond Pluto](https://soylentnews.org/article.pl?sid=25/05/28/0352254&amp;from=rss)
* [2025-05-29, 01:30:00](https://soylentnews.org/article.pl?sid=25/05/27/2358202&amp;from=rss) - [Humanoid AI-powered Robots Duke It Out In China Fight Competition](https://soylentnews.org/article.pl?sid=25/05/27/2358202&amp;from=rss)
* [2025-05-28, 20:49:00](https://soylentnews.org/article.pl?sid=25/05/27/2241220&amp;from=rss) - [Intel Uncovers Alleged Embezzlement Involving Former Employee And Supplier](https://soylentnews.org/article.pl?sid=25/05/27/2241220&amp;from=rss)
* [2025-05-28, 20:44:04](https://news.ycombinator.com/item?id=44120480) - [On eval in dynamic languages generally and in Racket specifically (2011)](https://blog.racket-lang.org/2011/10/on-eval-in-dynamic-languages-generally.html)
* [2025-05-28, 16:04:00](https://soylentnews.org/article.pl?sid=25/05/27/2237231&amp;from=rss) - [Telescope Upgrade Reveals Sun&apos;s \&quot;Coronal Rain\&quot; In Unprecedented Detail](https://soylentnews.org/article.pl?sid=25/05/27/2237231&amp;from=rss)
* [2025-05-28, 11:19:00](https://soylentnews.org/article.pl?sid=25/05/27/2233218&amp;from=rss) - [iPhone Won&apos;t Be Made In US Anytime Soon: Analysts ](https://soylentnews.org/article.pl?sid=25/05/27/2233218&amp;from=rss)
* [2025-05-28, 08:00:48](https://news.ycombinator.com/item?id=44113706) - [Atomics and Concurrency](https://redixhumayun.github.io/systems/2024/01/03/atomics-and-concurrency.html)
* [2025-05-28, 06:34:00](https://soylentnews.org/article.pl?sid=25/05/27/124252&amp;from=rss) - [The CIA Used A Star Wars Fan Site To Secretly Communicate With Spies](https://soylentnews.org/article.pl?sid=25/05/27/124252&amp;from=rss)
* [2025-05-28, 01:47:00](https://soylentnews.org/article.pl?sid=25/05/27/120223&amp;from=rss) - [Security News: Telemessage Worsens, Predictive Patching, GoDaddy Incompetence, Credential DB Found](https://soylentnews.org/article.pl?sid=25/05/27/120223&amp;from=rss)
* [2025-05-27, 21:12:33](https://news.ycombinator.com/item?id=44110721) - [Automated Verification of Monotonic Data Structure Traversals in C](https://arxiv.org/abs/2505.18818)
* [2025-05-27, 21:04:00](https://soylentnews.org/article.pl?sid=25/05/27/1135228&amp;from=rss) - [Gabe Newell&apos;s Brain-Computer Interface Startup to Reveal First Chips Later This Year](https://soylentnews.org/article.pl?sid=25/05/27/1135228&amp;from=rss)
* [2025-05-27, 16:19:40](https://news.ycombinator.com/item?id=44108386) - [Vrs: Personal Software Runtime inspired by Emacs, Plan 9, Erlang, Hypermedia](https://github.com/leoshimo/vrs)
* [2025-05-27, 16:16:00](https://soylentnews.org/article.pl?sid=25/05/27/1132236&amp;from=rss) - [Texas is Getting Ready to Ban Social Media for Anyone Under 18](https://soylentnews.org/article.pl?sid=25/05/27/1132236&amp;from=rss)
* [2025-05-27, 11:31:00](https://soylentnews.org/article.pl?sid=25/05/27/0520206&amp;from=rss) - [Research Reveals &apos;Forever Chemicals&apos; Present in Beer](https://soylentnews.org/article.pl?sid=25/05/27/0520206&amp;from=rss)
* [2025-05-27, 06:43:00](https://soylentnews.org/article.pl?sid=25/05/27/0515241&amp;from=rss) - [Scientists Discover Potential New Targets For Alzheimer’s Drugs](https://soylentnews.org/article.pl?sid=25/05/27/0515241&amp;from=rss)
* [2025-05-27, 01:53:00](https://soylentnews.org/article.pl?sid=25/05/25/2124211&amp;from=rss) - [Google Brings Ads to AI Search](https://soylentnews.org/article.pl?sid=25/05/25/2124211&amp;from=rss)
* [2025-05-26, 21:07:00](https://soylentnews.org/article.pl?sid=25/05/25/2119235&amp;from=rss) - [The Sun is Producing Strong Solar Flares; Are There More Than Expected During This Solar Cycle?](https://soylentnews.org/article.pl?sid=25/05/25/2119235&amp;from=rss)
* [2025-05-26, 16:21:00](https://soylentnews.org/article.pl?sid=25/05/25/2059205&amp;from=rss) - [Ex-NSA Listened to Scattered Spider&apos;s Calls: &apos;They&apos;re Good&apos;](https://soylentnews.org/article.pl?sid=25/05/25/2059205&amp;from=rss)
* [2025-05-26, 16:03:56](https://news.ycombinator.com/item?id=44098688) - [Sieving pores: stable,fast alloying chemistry of Si -electrodes in Li-ion batt](https://www.nature.com/articles/s41467-025-60191-9)
* [2025-05-26, 11:36:00](https://soylentnews.org/article.pl?sid=25/05/25/1717211&amp;from=rss) - [GitHub Copilot Angles for Promotion From Assistant to Agent](https://soylentnews.org/article.pl?sid=25/05/25/1717211&amp;from=rss)
* [2025-05-26, 06:48:00](https://soylentnews.org/article.pl?sid=25/05/25/0833214&amp;from=rss) - [Positive Proof-of-Concept Experiments May Lead to the World&apos;s First Treatment for Celiac Disease](https://soylentnews.org/article.pl?sid=25/05/25/0833214&amp;from=rss)
* [2025-05-26, 02:00:00](https://soylentnews.org/article.pl?sid=25/05/24/1910230&amp;from=rss) - [We did the Math on AI’s Energy Footprint. Here’s the Story you Haven’t Heard.](https://soylentnews.org/article.pl?sid=25/05/24/1910230&amp;from=rss)
