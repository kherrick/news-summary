# [News Summary](https://kherrick.github.io/news-summary/)

## Politics and Society

* [AI Chatbots Can Sway Voters Better Than Political Ads](https://politics.slashdot.org/story/25/12/05/0141235/ai-chatbots-can-sway-voters-better-than-political-ads?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Kenyan court declares law banning seed sharing unconstitutional](https://apnews.com/article/kenya-seed-sharing-law-ruling-ad4df5a364299b3a9f8515c0f52d5f80)

* [Republicans Drop Trump-Ordered Block On State AI Laws From Defense Bill](https://politics.slashdot.org/story/25/12/04/2228233/republicans-drop-trump-ordered-block-on-state-ai-laws-from-defense-bill?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [The US polluters that are rewriting the EU's human rights and climate law](https://www.somo.nl/the-secretive-cabal-of-us-polluters-that-is-rewriting-the-eus-human-rights-and-climate-law/)

* [Microsoft Faces New Complaint For Unlawfully Processing Data On Behalf of Israeli Military](https://yro.slashdot.org/story/25/12/04/2153226/microsoft-faces-new-complaint-for-unlawfully-processing-data-on-behalf-of-israeli-military?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [EU Hits Meta With Antitrust Probe Over Plans To Block AI Rivals From WhatsApp](https://yro.slashdot.org/story/25/12/04/181250/eu-hits-meta-with-antitrust-probe-over-plans-to-block-ai-rivals-from-whatsapp?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Science and Technology

* [Sugars, Gum, Stardust Found in NASA's Asteroid Bennu Samples](https://www.nasa.gov/missions/osiris-rex/sugars-gum-stardust-found-in-nasas-asteroid-bennu-samples/)

* [Space CEO Explains Why He Believes Private Space Stations Are a Viable Business](https://soylentnews.org/article.pl?sid=25/12/03/173255&from=rss)

* [Satellite Captures the First Detailed Look At a Massive Tsunami](https://news.slashdot.org/story/25/12/05/0135228/satellite-captures-the-first-detailed-look-at-a-massive-tsunami?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Mind-Reading Devices Can Now Predict Preconscious Thoughts: Is It Time to Worry?](https://soylentnews.org/article.pl?sid=25/12/01/043228&from=rss)

* [Scientists Warn Mountain Climate Change is Accelerating Faster Than Predicted](https://soylentnews.org/article.pl?sid=25/12/01/0716216&from=rss)

* [30% of Doctors In UK Use AI Tools In Patient Consultations, Study Finds](https://science.slashdot.org/story/25/12/04/0538249/30-of-doctors-in-uk-use-ai-tools-in-patient-consultations-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Business and Entertainment

* [Netflix to Acquire Warner Bros. In an $82.7B Deal](https://about.netflix.com/en/news/netflix-to-acquire-warner-bros)

* [Bending Spoons Buys Eventbrite For $500 Million](https://news.slashdot.org/story/25/12/04/1751254/bending-spoons-buys-eventbrite-for-500-million?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [RoboCop Statue Rises In Detroit](https://entertainment.slashdot.org/story/25/12/04/2211225/robocop-statue-rises-in-detroit?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Netflix Quietly Drops Support for Casting to Most TVs](https://soylentnews.org/article.pl?sid=25/12/03/1255251&from=rss)

* [After 40 years of adventure games, Ron Gilbert pivots to outrunning Death](https://arstechnica.com/gaming/2025/12/after-40-years-of-adventure-games-ron-gilbert-pivots-to-outrunning-death/)

## Programming and Software Development

* [Golang’s Big Miss on Memory Arenas](https://avittig.medium.com/golangs-big-miss-on-memory-arenas-f1375524cc90)

* [Thoughts on Go vs. Rust vs. Zig](https://sinclairtarget.com/blog/2025/08/thoughts-on-go-vs.-rust-vs.-zig/)

* [The Performance Revolution in JavaScript Tooling](https://blog.appsignal.com/2025/12/03/the-performance-revolution-in-javascript-tooling.html)

* [Django 6.0 released](https://www.djangoproject.com/weblog/2025/dec/03/django-60-released/)

* [How to speed up the Rust compiler in December 2025](https://nnethercote.github.io/2025/12/05/how-to-speed-up-the-rust-compiler-in-december-2025.html)

* [SVG Filters - Clickjacking 2.0](https://lyra.horse/blog/2025/12/svg-clickjacking/)

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

* [2025-12-05, 13:13:00](https://politics.slashdot.org/story/25/12/05/0141235/ai-chatbots-can-sway-voters-better-than-political-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Chatbots Can Sway Voters Better Than Political Ads](https://politics.slashdot.org/story/25/12/05/0141235/ai-chatbots-can-sway-voters-better-than-political-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-05, 13:02:50](https://lobste.rs/s/gv0fzl/golang_s_big_miss_on_memory_arenas) - [Golang’s Big Miss on Memory Arenas](https://avittig.medium.com/golangs-big-miss-on-memory-arenas-f1375524cc90)
* [2025-12-05, 12:43:01](https://lobste.rs/s/gdtbbh/performance_revolution_javascript) - [The Performance Revolution in JavaScript Tooling](https://blog.appsignal.com/2025/12/03/the-performance-revolution-in-javascript-tooling.html)
* [2025-12-05, 12:21:19](https://news.ycombinator.com/item?id=46160315) - [Netflix to Acquire Warner Bros. In an $82.7B Deal](https://about.netflix.com/en/news/netflix-to-acquire-warner-bros)
* [2025-12-05, 12:12:52](https://news.ycombinator.com/item?id=46160239) - [Sugars, Gum, Stardust Found in NASA&apos;s Asteroid Bennu Samples](https://www.nasa.gov/missions/osiris-rex/sugars-gum-stardust-found-in-nasas-asteroid-bennu-samples/)
* [2025-12-05, 11:12:00](https://lobste.rs/s/lm8vm2/lisp_style_design) - [LISP Style &amp; Design](https://archive.org/details/miller-and-benson-1990-lisp-style-design)
* [2025-12-05, 10:54:28](https://lobste.rs/s/7nlfjb/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/7nlfjb/what_are_you_doing_this_weekend)
* [2025-12-05, 10:54:00](https://soylentnews.org/article.pl?sid=25/12/03/178224&amp;from=rss) - [Dotcom Survivor Syndrome – How Perl’s Early Success Created the Seeds of Its Downfall](https://soylentnews.org/article.pl?sid=25/12/03/178224&amp;from=rss)
* [2025-12-05, 10:10:00](https://news.slashdot.org/story/25/12/05/0135228/satellite-captures-the-first-detailed-look-at-a-massive-tsunami?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Satellite Captures the First Detailed Look At a Massive Tsunami](https://news.slashdot.org/story/25/12/05/0135228/satellite-captures-the-first-detailed-look-at-a-massive-tsunami?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-05, 09:58:01](https://news.ycombinator.com/item?id=46159193) - [The US polluters that are rewriting the EU&apos;s human rights and climate law](https://www.somo.nl/the-secretive-cabal-of-us-polluters-that-is-rewriting-the-eus-human-rights-and-climate-law/)
* [2025-12-05, 09:09:25](https://news.ycombinator.com/item?id=46158578) - [Kenyan court declares law banning seed sharing unconstitutional](https://apnews.com/article/kenya-seed-sharing-law-ruling-ad4df5a364299b3a9f8515c0f52d5f80)
* [2025-12-05, 07:45:11](https://lobste.rs/s/dgxkdx/unredacted_magazine_issue_008_sep_2025) - [Unredacted Magazine Issue 008 SEP 2025](https://unredactedmagazine.com/issues/008.pdf)
* [2025-12-05, 07:07:00](https://science.slashdot.org/story/25/12/04/2237242/sugars-gum-stardust-found-in-nasas-asteroid-bennu-samples?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sugars, &apos;Gum,&apos; Stardust Found In NASA&apos;s Asteroid Bennu Samples](https://science.slashdot.org/story/25/12/04/2237242/sugars-gum-stardust-found-in-nasas-asteroid-bennu-samples?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-05, 07:06:38](https://news.ycombinator.com/item?id=46157594) - [UniFi 5G](https://blog.ui.com/article/introducing-unifi-5g)
* [2025-12-05, 06:01:00](https://soylentnews.org/article.pl?sid=25/12/03/173255&amp;from=rss) - [Space CEO Explains Why He Believes Private Space Stations Are a Viable Business](https://soylentnews.org/article.pl?sid=25/12/03/173255&amp;from=rss)
* [2025-12-05, 05:12:20](https://lobste.rs/s/ihrynz/how_speed_up_rust_compiler_december_2025) - [How to speed up the Rust compiler in December 2025](https://nnethercote.github.io/2025/12/05/how-to-speed-up-the-rust-compiler-in-december-2025.html)
* [2025-12-05, 04:00:28](https://news.ycombinator.com/item?id=46156718) - [Fast trigram based code search](https://github.com/sourcegraph/zoekt)
* [2025-12-05, 03:33:00](https://politics.slashdot.org/story/25/12/04/2228233/republicans-drop-trump-ordered-block-on-state-ai-laws-from-defense-bill?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Republicans Drop Trump-Ordered Block On State AI Laws From Defense Bill](https://politics.slashdot.org/story/25/12/04/2228233/republicans-drop-trump-ordered-block-on-state-ai-laws-from-defense-bill?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-05, 02:55:34](https://news.ycombinator.com/item?id=46156379) - [Blogging in 2025: Screaming into the Void](https://askmike.org/articles/blogging-in-2025-screaming-into-the-void/)
* [2025-12-05, 02:45:11](https://lobste.rs/s/whiefr/thoughts_on_go_vs_rust_vs_zig) - [Thoughts on Go vs. Rust vs. Zig](https://sinclairtarget.com/blog/2025/08/thoughts-on-go-vs.-rust-vs.-zig/)
* [2025-12-05, 02:41:30](https://lobste.rs/s/h4yblg/lobsters_interview_with_aks) - [Lobsters Interview with Aks](https://lobste.rs/s/h4yblg/lobsters_interview_with_aks)
* [2025-12-05, 02:02:00](https://entertainment.slashdot.org/story/25/12/04/2211225/robocop-statue-rises-in-detroit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [RoboCop Statue Rises In Detroit](https://entertainment.slashdot.org/story/25/12/04/2211225/robocop-statue-rises-in-detroit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-05, 01:24:00](https://soylentnews.org/article.pl?sid=25/12/03/1319210&amp;from=rss) - [Linux First, Windows Later! Dell Launches Qualcomm NPU Laptop on Linux Before Windows](https://soylentnews.org/article.pl?sid=25/12/03/1319210&amp;from=rss)
* [2025-12-05, 01:15:42](https://news.ycombinator.com/item?id=46155701) - [NeurIPS 2025 Best Paper Awards](https://blog.neurips.cc/2025/11/26/announcing-the-neurips-2025-best-paper-awards/)
* [2025-12-05, 01:05:57](https://news.ycombinator.com/item?id=46155619) - [BMW PHEV: Safety fuse replacement is extremely expensive](https://evclinic.eu/2025/12/04/2021-phev-bmw-ibmucp-21f37e-post-crash-recovery-when-eu-engineering-becomes-a-synonym-for-unrepairable-generating-waste/)
* [2025-12-05, 01:01:00](https://tech.slashdot.org/story/25/12/04/2158221/us-probes-reports-waymo-self-driving-cars-illegally-passed-school-buses-19-times?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Probes Reports Waymo Self-Driving Cars Illegally Passed School Buses 19 Times](https://tech.slashdot.org/story/25/12/04/2158221/us-probes-reports-waymo-self-driving-cars-illegally-passed-school-buses-19-times?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-05, 00:09:57](https://news.ycombinator.com/item?id=46155135) - [Netflix’s AV1 Journey: From Android to TVs and Beyond](https://netflixtechblog.com/av1-now-powering-30-of-netflix-streaming-02f592242d80)
* [2025-12-05, 00:03:36](https://news.ycombinator.com/item?id=46155085) - [Trick users and bypass warnings – Modern SVG Clickjacking attacks](https://lyra.horse/blog/2025/12/svg-clickjacking/)
* [2025-12-05, 00:00:00](https://yro.slashdot.org/story/25/12/04/2153226/microsoft-faces-new-complaint-for-unlawfully-processing-data-on-behalf-of-israeli-military?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Faces New Complaint For Unlawfully Processing Data On Behalf of Israeli Military](https://yro.slashdot.org/story/25/12/04/2153226/microsoft-faces-new-complaint-for-unlawfully-processing-data-on-behalf-of-israeli-military?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-04, 23:23:00](https://hardware.slashdot.org/story/25/12/04/2125206/plane-crashed-after-3d-printed-part-collapsed?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Plane Crashed After 3D-Printed Part Collapsed](https://hardware.slashdot.org/story/25/12/04/2125206/plane-crashed-after-3d-printed-part-collapsed?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-04, 23:19:14](https://lobste.rs/s/cbyhwk/this_month_redox_november_2025) - [This Month in Redox - November 2025](https://www.redox-os.org/news/this-month-251130/)
* [2025-12-04, 22:56:08](https://news.ycombinator.com/item?id=46154344) - [StardustOS: Library operating system for building light-weight Unikernels](https://github.com/StardustOS)
* [2025-12-04, 22:22:00](https://yro.slashdot.org/story/25/12/04/186254/russia-blocks-roblox-apples-facetime?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Russia Blocks Roblox, Apple&apos;s FaceTime](https://yro.slashdot.org/story/25/12/04/186254/russia-blocks-roblox-apples-facetime?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-04, 21:46:54](https://lobste.rs/s/x7glis/jujutsu_v0_36_0_released) - [jujutsu v0.36.0 released](https://github.com/jj-vcs/jj/releases/tag/v0.36.0)
* [2025-12-04, 21:40:24](https://news.ycombinator.com/item?id=46153466) - [Thoughts on Go vs. Rust vs. Zig](https://sinclairtarget.com/blog/2025/08/thoughts-on-go-vs.-rust-vs.-zig/)
* [2025-12-04, 21:21:00](https://yro.slashdot.org/story/25/12/04/181250/eu-hits-meta-with-antitrust-probe-over-plans-to-block-ai-rivals-from-whatsapp?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EU Hits Meta With Antitrust Probe Over Plans To Block AI Rivals From WhatsApp](https://yro.slashdot.org/story/25/12/04/181250/eu-hits-meta-with-antitrust-probe-over-plans-to-block-ai-rivals-from-whatsapp?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-04, 21:12:03](https://lobste.rs/s/xisyov/what_is_better_lookup_table_enum_type) - [What is better: a lookup table or an enum type?](https://www.cybertec-postgresql.com/en/lookup-table-or-enum-type/)
* [2025-12-04, 21:04:29](https://news.ycombinator.com/item?id=46153058) - [CUDA-l2: Surpassing cuBLAS performance for matrix multiplication through RL](https://github.com/deepreinforce-ai/CUDA-L2)
* [2025-12-04, 21:01:47](https://lobste.rs/s/v82ecm/javascript_announced_30_years_ago) - [JavaScript Announced 30 Years Ago](https://web.archive.org/web/20070916144913/http://wp.netscape.com/newsref/pr/newsrelease67.html)
* [2025-12-04, 20:42:13](https://lobste.rs/s/wkuvhx/hello_blog) - [][ Hello blog](https://nobloat.org/articles/2025-07-01-hello-blog.html)
* [2025-12-04, 20:42:00](https://soylentnews.org/article.pl?sid=25/12/03/1255251&amp;from=rss) - [Netflix Quietly Drops Support for Casting to Most TVs](https://soylentnews.org/article.pl?sid=25/12/03/1255251&amp;from=rss)
* [2025-12-04, 20:41:13](https://lobste.rs/s/4pvwma/fairphone_open_sources_fairphone_5_6) - [Fairphone open-sources Fairphone 5 and 6 software, and Moments switch](https://www.fairphone.com/en/2025/12/04/were-big-fans-of-open-source-buildable-code-at-fairphone-heres-why/)
* [2025-12-04, 20:20:00](https://news.slashdot.org/story/25/12/04/1751254/bending-spoons-buys-eventbrite-for-500-million?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bending Spoons Buys Eventbrite For $500 Million](https://news.slashdot.org/story/25/12/04/1751254/bending-spoons-buys-eventbrite-for-500-million?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-04, 20:04:42](https://lobste.rs/s/lmyqtn/bcachefs_1_33_0_reconcile) - [bcachefs 1.33.0 - reconcile](https://lore.kernel.org/linux-bcachefs/slvis5ybvo7ch3vxh5yb6turapyq7hai2tddwjriicfxqivnpn@xdpb25wey5xd/)
* [2025-12-04, 19:19:00](https://it.slashdot.org/story/25/12/04/1744255/microsoft-mitigates-windows-lnk-flaw-exploited-as-zero-day?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft &apos;Mitigates&apos; Windows LNK Flaw Exploited As Zero-Day](https://it.slashdot.org/story/25/12/04/1744255/microsoft-mitigates-windows-lnk-flaw-exploited-as-zero-day?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-04, 19:18:10](https://lobste.rs/s/ojl8fn/why_ed_1) - [Why ed(1)?](https://blog.thechases.com/posts/cli/why-ed1/)
* [2025-12-04, 18:49:20](https://news.ycombinator.com/item?id=46151299) - [I have been writing a niche history blog for 15 years](https://resobscura.substack.com/p/why-i-have-been-writing-a-niche-history)
* [2025-12-04, 18:27:17](https://lobste.rs/s/qdenps/apl_for_plan9) - [APL for Plan9](https://apl.pmikkelsen.com/)
* [2025-12-04, 18:18:00](https://hardware.slashdot.org/story/25/12/04/1739230/ram-is-so-expensive-samsung-wont-even-sell-it-to-samsung?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [RAM Is So Expensive, Samsung Won&apos;t Even Sell It To Samsung](https://hardware.slashdot.org/story/25/12/04/1739230/ram-is-so-expensive-samsung-wont-even-sell-it-to-samsung?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-04, 18:04:07](https://news.ycombinator.com/item?id=46150715) - [Why are 38 percent of Stanford students saying they&apos;re disabled?](https://reason.com/2025/12/04/why-are-38-percent-of-stanford-students-saying-theyre-disabled/)
* [2025-12-04, 17:17:00](https://science.slashdot.org/story/25/12/04/0538249/30-of-doctors-in-uk-use-ai-tools-in-patient-consultations-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [30% of Doctors In UK Use AI Tools In Patient Consultations, Study Finds](https://science.slashdot.org/story/25/12/04/0538249/30-of-doctors-in-uk-use-ai-tools-in-patient-consultations-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-04, 17:07:08](https://lobste.rs/s/ud9u0e/functional_quadtrees) - [Functional Quadtrees](https://lbjgruppen.com/en/posts/functional-quadtree-clojure)
* [2025-12-04, 16:58:35](https://news.ycombinator.com/item?id=46149813) - [Multivox: Volumetric Display](https://github.com/AncientJames/multivox)
* [2025-12-04, 16:20:11](https://lobste.rs/s/u0k1h6/django_6_0_released) - [Django 6.0 released](https://www.djangoproject.com/weblog/2025/dec/03/django-60-released/)
* [2025-12-04, 16:16:00](https://tech.slashdot.org/story/25/12/04/0534222/subaru-owners-are-ticked-about-in-car-pop-up-ads-for-siriusxm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Subaru Owners Are Ticked About In-Car Pop-Up Ads For SiriusXM](https://tech.slashdot.org/story/25/12/04/0534222/subaru-owners-are-ticked-about-in-car-pop-up-ads-for-siriusxm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-04, 15:53:00](https://soylentnews.org/article.pl?sid=25/12/03/1244208&amp;from=rss) - [Google&apos;s Gemini 3 Jailbroken in Minutes, and the Fallout is Alarming](https://soylentnews.org/article.pl?sid=25/12/03/1244208&amp;from=rss)
* [2025-12-04, 14:04:13](https://lobste.rs/s/omnyrf/svg_filters_clickjacking_2_0) - [SVG Filters - Clickjacking 2.0](https://lyra.horse/blog/2025/12/svg-clickjacking/)
* [2025-12-04, 13:40:00](https://news.ycombinator.com/item?id=46147540) - [Transparent leadership beats servant leadership](https://entropicthoughts.com/transparent-leadership-beats-servant-leadership)
* [2025-12-04, 13:34:27](https://news.ycombinator.com/item?id=46147493) - [Fighting the age-gated internet](https://www.wired.com/story/age-verification-is-sweeping-the-us-activists-are-fighting-back/)
* [2025-12-04, 11:36:36](https://news.ycombinator.com/item?id=46146451) - [I ignore the spotlight as a staff engineer](https://lalitm.com/software-engineering-outside-the-spotlight/)
* [2025-12-04, 11:34:59](https://lobste.rs/s/xdjgbd/why_i_ignore_spotlight_as_staff_engineer) - [Why I Ignore The Spotlight as a Staff Engineer](https://lalitm.com/software-engineering-outside-the-spotlight/)
* [2025-12-04, 11:33:55](https://lobste.rs/s/abxtov/pglite_embeddable_postgres) - [PGlite - Embeddable Postgres](https://pglite.dev/)
* [2025-12-04, 11:04:00](https://soylentnews.org/article.pl?sid=25/12/03/0225225&amp;from=rss) - [Datacenters in Space Are a Terrible, Horrible, No Good Idea.](https://soylentnews.org/article.pl?sid=25/12/03/0225225&amp;from=rss)
* [2025-12-04, 08:38:17](https://news.ycombinator.com/item?id=46145180) - [How elites could shape mass preferences as AI reduces persuasion costs](https://arxiv.org/abs/2512.04047)
* [2025-12-04, 07:52:53](https://lobste.rs/s/kiouhn/swi_prolog_10_0_0_released) - [SWI-Prolog 10.0.0 released](https://swi-prolog.discourse.group/t/ann-swi-prolog-10-0-0-stable/9412)
* [2025-12-04, 06:44:38](https://lobste.rs/s/0ujeoo/super_flat_asts) - [Super-flat ASTs](https://jhwlr.io/super-flat-ast/)
* [2025-12-04, 06:17:00](https://soylentnews.org/article.pl?sid=25/12/03/0223207&amp;from=rss) - [Flock Uses Overseas Gig Workers to Build its Surveillance AI](https://soylentnews.org/article.pl?sid=25/12/03/0223207&amp;from=rss)
* [2025-12-04, 01:36:00](https://soylentnews.org/article.pl?sid=25/12/02/1148202&amp;from=rss) - [KDE to Drop X11 Session in KDE Plasma 6.8](https://soylentnews.org/article.pl?sid=25/12/02/1148202&amp;from=rss)
* [2025-12-03, 20:59:16](https://lobste.rs/s/dxqyh4/ghostty_is_now_non_profit) - [Ghostty Is Now Non-Profit](https://mitchellh.com/writing/ghostty-non-profit)
* [2025-12-03, 20:49:00](https://soylentnews.org/article.pl?sid=25/12/02/1141208&amp;from=rss) - [Rapidus to Start Construction on 1.4nm Fab in 2027 — R&amp;D on Node Begins Next Year](https://soylentnews.org/article.pl?sid=25/12/02/1141208&amp;from=rss)
* [2025-12-03, 16:02:00](https://soylentnews.org/article.pl?sid=25/12/01/0724224&amp;from=rss) - [openSUSE Tumbleweed to update GRUB package and enable full disk encryption](https://soylentnews.org/article.pl?sid=25/12/01/0724224&amp;from=rss)
* [2025-12-03, 11:20:00](https://soylentnews.org/article.pl?sid=25/12/01/0721253&amp;from=rss) - [Bright Orange Life-Form Could Point to New Dino Discoveries](https://soylentnews.org/article.pl?sid=25/12/01/0721253&amp;from=rss)
* [2025-12-03, 06:58:00](https://soylentnews.org/article.pl?sid=25/12/01/0719241&amp;from=rss) - [Dell: About 1 Billion PCs Will Not or Cannot be Upgraded to Windows 11](https://soylentnews.org/article.pl?sid=25/12/01/0719241&amp;from=rss)
* [2025-12-03, 01:53:00](https://soylentnews.org/article.pl?sid=25/12/01/0716216&amp;from=rss) - [Scientists Warn Mountain Climate Change is Accelerating Faster Than Predicted](https://soylentnews.org/article.pl?sid=25/12/01/0716216&amp;from=rss)
* [2025-12-02, 21:29:00](https://soylentnews.org/article.pl?sid=25/12/01/0713251&amp;from=rss) - [Scientists Discover That People Act Way Better When Batman is Present](https://soylentnews.org/article.pl?sid=25/12/01/0713251&amp;from=rss)
* [2025-12-02, 16:22:00](https://soylentnews.org/article.pl?sid=25/12/01/0413229&amp;from=rss) - [Major Software Version Releases for Blender and Bottles](https://soylentnews.org/article.pl?sid=25/12/01/0413229&amp;from=rss)
* [2025-12-02, 11:40:00](https://soylentnews.org/article.pl?sid=25/12/01/043228&amp;from=rss) - [Mind-Reading Devices Can Now Predict Preconscious Thoughts: Is It Time to Worry?](https://soylentnews.org/article.pl?sid=25/12/01/043228&amp;from=rss)
* [2025-12-02, 09:14:00](https://news.ycombinator.com/item?id=46119234) - [Show HN: I was reintroduced to computers: Raspberry Pi](https://airoboticist.blog/2025/12/01/i-was-reintroduced-to-computers-raspberry-pi/)
* [2025-12-02, 06:57:00](https://soylentnews.org/article.pl?sid=25/12/01/0350249&amp;from=rss) - [Billion-Dollar AI Chip Deal Between Google and Meta Could be on the Cards](https://soylentnews.org/article.pl?sid=25/12/01/0350249&amp;from=rss)
* [2025-12-02, 02:09:00](https://soylentnews.org/article.pl?sid=25/12/01/0343223&amp;from=rss) - [Ukraine First Country in Europe to Get Starlink Satellite Phone Service](https://soylentnews.org/article.pl?sid=25/12/01/0343223&amp;from=rss)
* [2025-12-02, 00:39:41](https://news.ycombinator.com/item?id=46115758) - [Nimony (Nim 3.0) Design Principles](https://nim-lang.org/araq/nimony.html)
* [2025-12-01, 21:26:00](https://soylentnews.org/article.pl?sid=25/12/01/0335217&amp;from=rss) - [NTSB Finds Root Cause of Container Ship Hitting Baltimore Bridge](https://soylentnews.org/article.pl?sid=25/12/01/0335217&amp;from=rss)
* [2025-12-01, 17:13:29](https://news.ycombinator.com/item?id=46109978) - [After 40 years of adventure games, Ron Gilbert pivots to outrunning Death](https://arstechnica.com/gaming/2025/12/after-40-years-of-adventure-games-ron-gilbert-pivots-to-outrunning-death/)
* [2025-12-01, 16:40:00](https://soylentnews.org/article.pl?sid=25/11/30/0244232&amp;from=rss) - [Pebble, the E-Ink Smartwatch That Refuses to Die, Just Went Fully Open Source](https://soylentnews.org/article.pl?sid=25/11/30/0244232&amp;from=rss)
* [2025-12-01, 11:51:00](https://soylentnews.org/article.pl?sid=25/11/30/0234208&amp;from=rss) - [ClamAV Signature Retirement Announcement](https://soylentnews.org/article.pl?sid=25/11/30/0234208&amp;from=rss)
* [2025-12-01, 07:07:00](https://soylentnews.org/article.pl?sid=25/11/30/0229203&amp;from=rss) - [Roblox to Use AI for User Age Identification but Aus Government Wants More](https://soylentnews.org/article.pl?sid=25/11/30/0229203&amp;from=rss)
* [2025-12-01, 04:47:30](https://news.ycombinator.com/item?id=46103571) - [Stacked Diffs with git rebase —onto](https://dineshpandiyan.com/blog/stacked-diffs-with-rebase-onto/)
* [2025-12-01, 02:20:00](https://soylentnews.org/article.pl?sid=25/11/30/0224246&amp;from=rss) - [Particle Accelerator Waste Could Help Produce Cancer-Fighting Materials](https://soylentnews.org/article.pl?sid=25/11/30/0224246&amp;from=rss)
