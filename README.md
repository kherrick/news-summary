# [News Summary](https://kherrick.github.io/news-summary/)

## Nature and Technology Innovations

* [Glow-in-the-dark succulents are here](https://www.popsci.com/science/glow-in-the-dark-plants-succulents/) ([comments](https://news.ycombinator.com/item?id=45047080))

## Cultural and Historical Developments

* [As PBS Stations Confront Cuts, American History Takes a Hit](https://www.nytimes.com/2025/08/27/arts/television/american-experience.html) ([comments](https://news.ycombinator.com/item?id=45046960))

## Health and Well-Being

* [Altered states of consciousness induced by breathwork accompanied by music](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0329411) ([comments](https://news.ycombinator.com/item?id=45046916))

* [Scientists Develop Interface That ‘Reads’ Thoughts From Speech-Impaired Patients](https://soylentnews.org/article.pl?sid=25/08/22/073206&amp;from=rss)

## Cybersecurity and Technology Lawsuits

* [Developer Unlocks Newly Enshittified Echelon Exercise Bikes But Can&apos;t Legally Release Software](https://tech.slashdot.org/story/25/08/27/2131210/developer-unlocks-newly-enshittified-echelon-exercise-bikes-but-cant-legally-release-software?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=45046960))

* [4chan and Kiwi Farms Sue the UK Over Its Age Verification Law](https://yro.slashdot.org/story/25/08/27/205230/4chan-and-kiwi-farms-sue-the-uk-over-its-age-verification-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Corporate Maneuverings and Impacts

* [Google has eliminated 35% of managers overseeing small teams in past year](https://www.cnbc.com/2025/08/27/google-executive-says-company-has-cut-a-third-of-its-managers.html) ([comments](https://news.ycombinator.com/item?id=45045398))

* [Google Will Require Developer Verification to Install Android Apps, Including Sideloading](https://soylentnews.org/article.pl?sid=25/08/27/1222255&amp;from=rss) ([comments](https://news.ycombinator.com/item?id=45045398))

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

* [2025-08-28, 00:55:59](https://news.ycombinator.com/item?id=45047080) - [Glow-in-the-dark succulents are here](https://www.popsci.com/science/glow-in-the-dark-plants-succulents/)
* [2025-08-28, 00:29:01](https://news.ycombinator.com/item?id=45046960) - [As PBS Stations Confront Cuts, American History Takes a Hit](https://www.nytimes.com/2025/08/27/arts/television/american-experience.html)
* [2025-08-28, 00:22:24](https://news.ycombinator.com/item?id=45046916) - [Altered states of consciousness induced by breathwork accompanied by music](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0329411)
* [2025-08-28, 00:04:00](https://soylentnews.org/article.pl?sid=25/08/27/1225221&amp;from=rss) - [Xz Format Inadequate for General Use](https://soylentnews.org/article.pl?sid=25/08/27/1225221&amp;from=rss)
* [2025-08-28, 00:02:00](https://tech.slashdot.org/story/25/08/27/2131210/developer-unlocks-newly-enshittified-echelon-exercise-bikes-but-cant-legally-release-software?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Developer Unlocks Newly Enshittified Echelon Exercise Bikes But Can&apos;t Legally Release Software](https://tech.slashdot.org/story/25/08/27/2131210/developer-unlocks-newly-enshittified-echelon-exercise-bikes-but-cant-legally-release-software?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-27, 23:20:00](https://it.slashdot.org/story/25/08/27/2143210/silver-state-goes-dark-as-cyberattack-knocks-nevada-websites-offline?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Silver State Goes Dark as Cyberattack Knocks Nevada Websites Offline](https://it.slashdot.org/story/25/08/27/2143210/silver-state-goes-dark-as-cyberattack-knocks-nevada-websites-offline?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-27, 22:40:00](https://tech.slashdot.org/story/25/08/27/2026245/defense-department-reportedly-relies-on-utility-written-by-russian-dev?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Defense Department Reportedly Relies On Utility Written by Russian Dev](https://tech.slashdot.org/story/25/08/27/2026245/defense-department-reportedly-relies-on-utility-written-by-russian-dev?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-27, 22:00:00](https://yro.slashdot.org/story/25/08/27/205230/4chan-and-kiwi-farms-sue-the-uk-over-its-age-verification-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [4chan and Kiwi Farms Sue the UK Over Its Age Verification Law](https://yro.slashdot.org/story/25/08/27/205230/4chan-and-kiwi-farms-sue-the-uk-over-its-age-verification-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-27, 21:20:00](https://slashdot.org/story/25/08/27/1955256/word-documents-will-now-be-saved-to-the-cloud-automatically-on-windows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Word Documents Will Now Be Saved To the Cloud Automatically On Windows](https://slashdot.org/story/25/08/27/1955256/word-documents-will-now-be-saved-to-the-cloud-automatically-on-windows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-27, 21:16:56](https://news.ycombinator.com/item?id=45045398) - [Google has eliminated 35% of managers overseeing small teams in past year](https://www.cnbc.com/2025/08/27/google-executive-says-company-has-cut-a-third-of-its-managers.html)
* [2025-08-27, 21:08:49](https://news.ycombinator.com/item?id=45045307) - [Yamanot.es: A music box of train station melodies from the JR Yamanote Line](https://yamanot.es/)
* [2025-08-27, 20:53:51](https://news.ycombinator.com/item?id=45045116) - [Show HN: Meetup.com and eventribe alternative to small groups](https://github.com/polaroi8d/cactoide)
* [2025-08-27, 20:42:00](https://tech.slashdot.org/story/25/08/27/1955230/google-has-eliminated-35-of-managers-overseeing-small-teams-in-past-year-exec-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Has Eliminated 35% of Managers Overseeing Small Teams in Past Year, Exec Says](https://tech.slashdot.org/story/25/08/27/1955230/google-has-eliminated-35-of-managers-overseeing-small-teams-in-past-year-exec-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-27, 20:20:19](https://lobste.rs/s/ulhomf/vulnerability_might_be_proof_concept) - [The vulnerability might be in the proof-of-concept](https://sethmlarson.dev/the-vulnerability-is-in-the-proof-of-concept)
* [2025-08-27, 20:13:29](https://lobste.rs/s/nkw0jk/music_break_models_by) - [Music to Break Models By](https://matthodges.com/posts/2025-08-26-music-to-break-models-by/)
* [2025-08-27, 20:02:00](https://politics.slashdot.org/story/25/08/27/1938243/a-proposal-to-ban-ghost-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Proposal to Ban Ghost Jobs](https://politics.slashdot.org/story/25/08/27/1938243/a-proposal-to-ban-ghost-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-27, 19:25:00](https://politics.slashdot.org/story/25/08/27/1923235/republicans-investigate-wikipedia-over-allegations-of-organized-bias?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Republicans Investigate Wikipedia Over Allegations of Organized Bias](https://politics.slashdot.org/story/25/08/27/1923235/republicans-investigate-wikipedia-over-allegations-of-organized-bias?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-27, 19:22:00](https://soylentnews.org/article.pl?sid=25/08/27/1222255&amp;from=rss) - [Google Will Require Developer Verification to Install Android Apps, Including Sideloading](https://soylentnews.org/article.pl?sid=25/08/27/1222255&amp;from=rss)
* [2025-08-27, 18:05:00](https://slashdot.org/story/25/08/27/1756253/one-long-sentence-is-all-it-takes-to-make-llms-misbehave?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [One Long Sentence is All It Takes To Make LLMs Misbehave](https://slashdot.org/story/25/08/27/1756253/one-long-sentence-is-all-it-takes-to-make-llms-misbehave?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-27, 17:29:00](https://news.slashdot.org/story/25/08/27/1729211/deforestation-has-killed-half-a-million-people-in-past-20-years-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Deforestation Has Killed Half a Million People in Past 20 Years, Study Finds](https://news.slashdot.org/story/25/08/27/1729211/deforestation-has-killed-half-a-million-people-in-past-20-years-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-27, 17:28:20](https://news.ycombinator.com/item?id=45042461) - [A failure of security systems at PayPal is causing concern for German banks](https://www.nordbayern.de/news-in-english/paypal-security-systems-down-german-banks-block-payments-in-the-billions-1.14811187)
* [2025-08-27, 17:17:40](https://lobste.rs/s/gcwpnc/testing_time_other_asyncronicities) - [Testing Time (and other asyncronicities)](https://go.dev/blog/testing-time)
* [2025-08-27, 17:14:58](https://lobste.rs/s/fz3mgu/unexpected_productivity_boost_rust) - [The unexpected productivity boost of Rust](https://lubeno.dev/blog/rusts-productivity-curve)
* [2025-08-27, 17:14:30](https://lobste.rs/s/a6tlkb/doxx_viewer_for_microsoft_word_docx_files) - [doxx - A viewer for Microsoft Word .docx files in the terminal](https://terminaltrove.com/doxx/)
* [2025-08-27, 17:01:06](https://news.ycombinator.com/item?id=45042175) - [Lago – Open-Source Usage Based Billing – Is Hiring in Sales, Eng, Ops (EU, US)](https://www.ycombinator.com/companies/lago/jobs)
* [2025-08-27, 16:44:00](https://it.slashdot.org/story/25/08/27/1644221/fbi-warns-chinese-hacking-campaign-has-expanded-reaching-80-countries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FBI Warns Chinese Hacking Campaign Has Expanded, Reaching 80 Countries](https://it.slashdot.org/story/25/08/27/1644221/fbi-warns-chinese-hacking-campaign-has-expanded-reaching-80-countries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-27, 16:28:20](https://news.ycombinator.com/item?id=45041807) - [Typepad is shutting down](https://everything.typepad.com/blog/2025/08/typepad-is-shutting-down.html)
* [2025-08-27, 16:03:35](https://lobste.rs/s/g4cq0o/object_oriented_design_patterns) - [Object-oriented design patterns](https://oshub.org/projects/retros-32/posts/object-oriented-design-patterns-in-osdev)
* [2025-08-27, 16:01:00](https://mobile.slashdot.org/story/25/08/27/1529224/nothing-caught-using-stock-photos-as-phone-3-camera-samples?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nothing Caught Using Stock Photos as Phone 3 Camera Samples](https://mobile.slashdot.org/story/25/08/27/1529224/nothing-caught-using-stock-photos-as-phone-3-camera-samples?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-27, 15:50:54](https://news.ycombinator.com/item?id=45041315) - [VIM Master](https://github.com/renzorlive/vimmaster)
* [2025-08-27, 15:48:07](https://news.ycombinator.com/item?id=45041286) - [Unexpected productivity boost of Rust](https://lubeno.dev/blog/rusts-productivity-curve)
* [2025-08-27, 15:39:33](https://news.ycombinator.com/item?id=45041185) - [Launch HN: Bitrig (YC S25) – Build Swift apps on your iPhone](https://news.ycombinator.com/item?id=45041185)
* [2025-08-27, 15:34:15](https://lobste.rs/s/jxssnu/why_ai_isn_t_ready_be_real_coder) - [Why AI Isn’t Ready to Be a Real Coder](https://spectrum.ieee.org/ai-for-coding)
* [2025-08-27, 15:21:00](https://mobile.slashdot.org/story/25/08/27/155240/south-korea-bans-phones-in-school-classrooms-nationwide?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [South Korea Bans Phones in School Classrooms Nationwide](https://mobile.slashdot.org/story/25/08/27/155240/south-korea-bans-phones-in-school-classrooms-nationwide?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-27, 15:16:18](https://news.ycombinator.com/item?id=45040875) - [Efficient Array Programming](https://github.com/razetime/efficient-array-programming)
* [2025-08-27, 15:14:14](https://lobste.rs/s/iekyyu/efficient_array_programming) - [Efficient Array Programming](https://github.com/razetime/efficient-array-programming)
* [2025-08-27, 14:57:54](https://lobste.rs/s/e22pos/inside_zig_s_new_writer) - [Inside Zig&apos;s New Writer](https://joegm.github.io/blog/inside-zigs-new-writer-interface/)
* [2025-08-27, 14:40:00](https://news.slashdot.org/story/25/08/27/107221/wikipedia-editors-reject-founders-ai-review-proposal-after-chatgpt-fails-basic-policy-test?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wikipedia Editors Reject Founder&apos;s AI Review Proposal After ChatGPT Fails Basic Policy Test](https://news.slashdot.org/story/25/08/27/107221/wikipedia-editors-reject-founders-ai-review-proposal-after-chatgpt-fails-basic-policy-test?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-27, 14:34:00](https://soylentnews.org/article.pl?sid=25/08/26/1126243&amp;from=rss) - [Postal Services Around the World Suspend Deliveries to US: How Will It Affect You?](https://soylentnews.org/article.pl?sid=25/08/26/1126243&amp;from=rss)
* [2025-08-27, 14:00:00](https://slashdot.org/story/25/08/27/094233/posthumous-ai-avatars-shift-from-memorial-tools-to-revenue-generators?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Posthumous AI Avatars Shift From Memorial Tools To Revenue Generators](https://slashdot.org/story/25/08/27/094233/posthumous-ai-avatars-shift-from-memorial-tools-to-revenue-generators?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-27, 13:23:58](https://lobste.rs/s/imehlk/malicious_versions_nx_some_supporting) - [Malicious versions of Nx and some supporting plugins were published](https://github.com/nrwl/nx/security/advisories/GHSA-cxm3-wv7p-598c)
* [2025-08-27, 13:19:11](https://news.ycombinator.com/item?id=45039301) - [Implementing Forth in Go and C](https://eli.thegreenplace.net/2025/implementing-forth-in-go-and-c/)
* [2025-08-27, 13:15:59](https://lobste.rs/s/ppq6hf/implementing_forth_go_c) - [Implementing Forth in Go and C](https://eli.thegreenplace.net/2025/implementing-forth-in-go-and-c/)
* [2025-08-27, 12:25:38](https://news.ycombinator.com/item?id=45038710) - [Bring Your Own Agent to Zed – Featuring Gemini CLI](https://zed.dev/blog/bring-your-own-agent-to-zed)
* [2025-08-27, 11:38:35](https://news.ycombinator.com/item?id=45038260) - [How to slow down a program and why it can be useful](https://stefan-marr.de/2025/08/how-to-slow-down-a-program/)
* [2025-08-27, 11:36:21](https://lobste.rs/s/6yb7yl/how_slow_down_program_why_it_can_be_useful) - [How to Slow Down a Program? And Why it Can Be Useful](https://stefan-marr.de/2025/08/how-to-slow-down-a-program/)
* [2025-08-27, 11:33:26](https://lobste.rs/s/nfin3n/llms_for_software_developers_notes_from) - [LLMs for Software Developers (notes from my talk at NWRUG)](https://theartandscienceofruby.com/llms-for-software-developers-notes-from-my-talk-at-nwrug/)
* [2025-08-27, 11:15:54](https://lobste.rs/s/7iiuxu/state_art_for_reducing_executable_size) - [State of the art for reducing executable size with heavily optimized program](https://discourse.llvm.org/t/state-of-the-art-for-reducing-executable-size-with-heavily-optimized-program/87952)
* [2025-08-27, 10:54:41](https://news.ycombinator.com/item?id=45037904) - [Monodraw](https://monodraw.helftone.com/)
* [2025-08-27, 09:48:00](https://soylentnews.org/article.pl?sid=25/08/26/1117241&amp;from=rss) - [Scientists Pioneer Sustainable Carbon Capture From Shrimp Waste](https://soylentnews.org/article.pl?sid=25/08/26/1117241&amp;from=rss)
* [2025-08-27, 08:53:49](https://lobste.rs/s/ef2w3b/lessons_from_building_game_engine_from) - [Lessons from Building a Game Engine from Scratch in Gleam](https://www.youtube.com/watch?v=uExwRo_qM-k)
* [2025-08-27, 06:57:56](https://news.ycombinator.com/item?id=45036294) - [The Therac-25 Incident (2021)](https://thedailywtf.com/articles/the-therac-25-incident)
* [2025-08-27, 05:03:00](https://soylentnews.org/politics/article.pl?sid=25/08/26/1113220&amp;from=rss) - [Trump Threatens Taxes, Bans, for Nations That Tax Big Tech](https://soylentnews.org/politics/article.pl?sid=25/08/26/1113220&amp;from=rss)
* [2025-08-27, 02:54:28](https://lobste.rs/s/ibyhse/uncertain_t) - [Uncertain&lt;T&gt;](https://nshipster.com/uncertainty/)
* [2025-08-27, 02:47:19](https://lobste.rs/s/31d67l/dissecting_apple_m1_gpu_end) - [Dissecting the Apple M1 GPU, the end](https://rosenzweig.io/blog/asahi-gpu-part-n.html)
* [2025-08-27, 01:38:48](https://news.ycombinator.com/item?id=45034496) - [Malicious versions of Nx and some supporting plugins were published](https://github.com/nrwl/nx/security/advisories/GHSA-cxm3-wv7p-598c)
* [2025-08-27, 01:18:19](https://lobste.rs/s/gljsa0/shared_ptr_t_not_always_atomic_reference) - [shared_ptr&lt;T&gt;: the (not always) atomic reference counted smart pointer (2019)](https://snf.github.io/2019/02/13/shared-ptr-optimization/)
* [2025-08-27, 00:16:00](https://soylentnews.org/article.pl?sid=25/08/26/0059245&amp;from=rss) - [Twenty Years After Katrina: How Levee Failures Changed America](https://soylentnews.org/article.pl?sid=25/08/26/0059245&amp;from=rss)
* [2025-08-26, 23:38:16](https://lobste.rs/s/na4vsd/so_many_conferences_are_mid_why_was_bsc) - [So many conferences are mid. Why was BSC 2025 so good?](https://bgthompson.codeberg.page/blog/thoughts-on-BSC-2025/)
* [2025-08-26, 21:57:26](https://lobste.rs/s/adttgy/chez_scheme_vs_sbcl_comparison_2019) - [Chez Scheme vs. SBCL: a comparison (2019)](https://elmord.org/blog/?entry=20191114-sbcl-chez)
* [2025-08-26, 21:00:50](https://lobste.rs/s/ffkdyr/das_problem_mit_german_strings) - [Das Problem mit German Strings](https://www.polarsignals.com/blog/posts/2025/08/26/das-problem-mit-german-strings)
* [2025-08-26, 19:33:00](https://soylentnews.org/article.pl?sid=25/08/26/0056205&amp;from=rss) - [Kelp Forests in Marine Protected Areas are More Resilient to Marine Heatwaves](https://soylentnews.org/article.pl?sid=25/08/26/0056205&amp;from=rss)
* [2025-08-26, 18:08:48](https://lobste.rs/s/vk0nvp/i_know_when_you_re_vibe_coding) - [I Know When You&apos;re Vibe Coding](https://alexkondov.com/i-know-when-youre-vibe-coding/)
* [2025-08-26, 14:57:37](https://lobste.rs/s/gus44s/give_your_spouse_gift_couple_s_email) - [Give Your Spouse the Gift of a Couple&apos;s Email Domain](https://mtlynch.io/couples-email-domain/)
* [2025-08-26, 14:49:00](https://soylentnews.org/article.pl?sid=25/08/26/0050212&amp;from=rss) - [Canadian EV Sales Collapse by 35% as Gas Car Purchases Surge](https://soylentnews.org/article.pl?sid=25/08/26/0050212&amp;from=rss)
* [2025-08-26, 13:10:11](https://lobste.rs/s/eb7isb/developing_alt_text_button_for_images_on) - [Developing an alt text button for images on my website](https://jamesg.blog/2025/08/17/alt-text-button)
* [2025-08-26, 10:02:00](https://soylentnews.org/article.pl?sid=25/08/25/197208&amp;from=rss) - [Does 3I/ATLAS Generate its Own Light?](https://soylentnews.org/article.pl?sid=25/08/25/197208&amp;from=rss)
* [2025-08-26, 08:34:15](https://news.ycombinator.com/item?id=45023857) - [Object-oriented design patterns in C and kernel development](https://oshub.org/projects/retros-32/posts/object-oriented-design-patterns-in-osdev)
* [2025-08-26, 08:15:04](https://lobste.rs/s/mnhgwm/rv_new_kind_ruby_management_tool) - [rv, a new kind of Ruby management tool](https://andre.arko.net/2025/08/25/rv-a-new-kind-of-ruby-management-tool/)
* [2025-08-26, 05:16:00](https://soylentnews.org/article.pl?sid=25/08/25/1248228&amp;from=rss) - [Revolutionary AI Tech Breathes Life Into Virtual Companion Animals](https://soylentnews.org/article.pl?sid=25/08/25/1248228&amp;from=rss)
* [2025-08-26, 00:31:00](https://soylentnews.org/article.pl?sid=25/08/25/1234216&amp;from=rss) - [Oops! Earendel, Most Distant Star Ever Discovered, May Not Actually be a Star](https://soylentnews.org/article.pl?sid=25/08/25/1234216&amp;from=rss)
* [2025-08-25, 19:45:00](https://soylentnews.org/article.pl?sid=25/08/25/0225208&amp;from=rss) - [The 8,000-Year History of Great Salt Lake and its Watershed is Recorded in Sediments](https://soylentnews.org/article.pl?sid=25/08/25/0225208&amp;from=rss)
* [2025-08-25, 15:27:59](https://news.ycombinator.com/item?id=45014911) - [SDS: Simple Dynamic Strings library for C](https://github.com/antirez/sds)
* [2025-08-25, 14:59:00](https://soylentnews.org/article.pl?sid=25/08/24/2253216&amp;from=rss) - [What Happens When AI Comes for Our Fonts?](https://soylentnews.org/article.pl?sid=25/08/24/2253216&amp;from=rss)
* [2025-08-25, 13:33:49](https://news.ycombinator.com/item?id=45013682) - [Show HN: Spart – A Rust library for fast spatial search with Python bindings](https://news.ycombinator.com/item?id=45013682)
* [2025-08-25, 12:11:38](https://news.ycombinator.com/item?id=45012995) - [Areal, Are.na&apos;s new typeface](https://www.are.na/editorial/introducing-areal-are-nas-new-typeface)
* [2025-08-25, 10:15:00](https://soylentnews.org/article.pl?sid=25/08/24/136245&amp;from=rss) - [NASA Challenge Winners Cook Up New Industry Developments](https://soylentnews.org/article.pl?sid=25/08/24/136245&amp;from=rss)
* [2025-08-25, 07:58:56](https://news.ycombinator.com/item?id=45011404) - [About Containers and VMs](https://linuxcontainers.org/incus/docs/main/explanation/containers_and_vms/)
* [2025-08-25, 05:55:35](https://news.ycombinator.com/item?id=45010658) - [Reverse-engineering the Globus INK, a Soviet spaceflight navigation computer (2023)](https://www.righto.com/2023/03/reverse-engineering-globus-ink-soviet.html)
* [2025-08-25, 05:30:00](https://soylentnews.org/article.pl?sid=25/08/24/1253242&amp;from=rss) - [Radio Waves Can Strengthen Sense of Smell](https://soylentnews.org/article.pl?sid=25/08/24/1253242&amp;from=rss)
* [2025-08-25, 00:50:00](https://soylentnews.org/article.pl?sid=25/08/23/2218218&amp;from=rss) - [Creative Commons Becomes an Official UNESCO NGO Partner](https://soylentnews.org/article.pl?sid=25/08/23/2218218&amp;from=rss)
* [2025-08-24, 20:03:00](https://soylentnews.org/article.pl?sid=25/08/23/2216200&amp;from=rss) - [U.S. Government Now Holds 10% Stake in Intel](https://soylentnews.org/article.pl?sid=25/08/23/2216200&amp;from=rss)
* [2025-08-24, 19:20:46](https://news.ycombinator.com/item?id=45006882) - [Internet Access Providers Aren&apos;t Bound by DMCA Unmasking Subpoenas–In Re Cox](https://blog.ericgoldman.org/archives/2025/08/internet-access-providers-arent-bound-by-dmca-unmasking-subpoenas-in-re-cox.htm)
* [2025-08-24, 17:03:44](https://news.ycombinator.com/item?id=45005823) - [&apos;Rocks as big as cars&apos; are flying down the Dolomites](https://www.bbc.com/future/article/20250819-why-italys-beloved-ancient-monolith-is-falling)
* [2025-08-24, 15:18:00](https://soylentnews.org/article.pl?sid=25/08/23/1053236&amp;from=rss) - [‘Quiet Cracking’ is Spreading in Offices: Half of Workers are at Breaking Point](https://soylentnews.org/article.pl?sid=25/08/23/1053236&amp;from=rss)
* [2025-08-24, 10:36:00](https://soylentnews.org/article.pl?sid=25/08/22/079224&amp;from=rss) - [Turning the Lights Back on](https://soylentnews.org/article.pl?sid=25/08/22/079224&amp;from=rss)
* [2025-08-24, 05:52:00](https://soylentnews.org/article.pl?sid=25/08/22/073206&amp;from=rss) - [Scientists Develop Interface That ‘Reads’ Thoughts From Speech-Impaired Patients](https://soylentnews.org/article.pl?sid=25/08/22/073206&amp;from=rss)
* [2025-08-24, 02:54:11](https://news.ycombinator.com/item?id=45000904) - [Using information theory to solve Mastermind](https://www.goranssongaspar.com/mastermind)
* [2025-08-24, 01:12:00](https://soylentnews.org/article.pl?sid=25/08/22/0656227&amp;from=rss) - [AWS CEO Says Using AI to Replace Junior Staff is &apos;Dumbest Thing I&apos;ve Ever Heard&apos;](https://soylentnews.org/article.pl?sid=25/08/22/0656227&amp;from=rss)
