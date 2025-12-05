# [News Summary](https://kherrick.github.io/news-summary/)

## Technological Innovations and Challenges

* [Linux First, Windows Later! Dell Launches Qualcomm NPU Laptop on Linux Before Windows](https://soylentnews.org/article.pl?sid=25/12/03/1319210&amp;from=rss) - Dell leads with Linux in its latest Qualcomm NPU laptop, highlighting the advancements being made to prioritize open-source operating systems.

* [Plane Crashed After 3D-Printed Part Collapsed](https://hardware.slashdot.org/story/25/12/04/2125206/plane-crashed-after-3d-printed-part-collapsed?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A cautionary tale involving a failed 3D-printed part raises concerns about reliability and safety measures in manufacturing.

* [Fairphone open-sources Fairphone 5 and 6 software, and Moments switch](https://www.fairphone.com/en/2025/12/04/were-big-fans-of-open-source-buildable-code-at-fairphone-heres-why/) - Fairphone takes a step toward increased transparency and innovation by open-sourcing their software for recent phone models.

* [AV1 – Now Powering 30% of Netflix Streaming](https://netflixtechblog.com/av1-now-powering-30-of-netflix-streaming-02f592242d80) - Netflix’s adoption of the AV1 codec demonstrates advances in streaming efficiency and user experience enhancement.

## Security and Data Privacy

* [Trick users and bypass warnings – Modern SVG Clickjacking attacks](https://lyra.horse/blog/2025/12/svg-clickjacking/) - Modern clickjacking techniques targeting SVG graphics emerge as new threats in the cybersecurity landscape.

* [Microsoft Faces New Complaint For Unlawfully Processing Data On Behalf of Israeli Military](https://yro.slashdot.org/story/25/12/04/2153226/microsoft-faces-new-complaint-for-unlawfully-processing-data-on-behalf-of-israeli-military?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Microsoft finds itself under scrutiny again for controversial data handling practices.

* [Battle with SMS phishing: SMS phishers pivot to points, taxes, fake retailers](https://krebsonsecurity.com/2025/12/sms-phishers-pivot-to-points-taxes-fake-retailers/) - Cybercriminals refocus their phishing campaigns with novel schemes targeting end-user incentives.

* [End-To-End Encrypted&apos; Smart Toilet Camera Is Not Actually End-To-End Encrypted](https://it.slashdot.org/story/25/12/04/0436234/end-to-end-encrypted-smart-toilet-camera-is-not-actually-end-to-end-encrypted?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Lax privacy features in unexpected devices highlight the continued challenges of IoT security.

## Artificial Intelligence Developments

* [US Probes Reports Waymo Self-Driving Cars Illegally Passed School Buses 19 Times](https://tech.slashdot.org/story/25/12/04/2158221/us-probes-reports-waymo-self-driving-cars-illegally-passed-school-buses-19-times?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A regulatory investigation raises questions about self-driving technology’s maturity and safety.

* [State of AI: An Empirical 100T Token Study with OpenRouter](https://openrouter.ai/state-of-ai) - A detailed study explores the performance of AI models working across massive datasets.

* [We gave 5 LLMs $100K to trade stocks for 8 months](https://www.aitradearena.com/research/we-ran-llms-for-8-months) - Testing AIs' aptitude for handling real-world, high-stakes financial trading scenarios.

## Corporate and Industry News

* [EU Hits Meta With Antitrust Probe Over Plans To Block AI Rivals From WhatsApp](https://yro.slashdot.org/story/25/12/04/181250/eu-hits-meta-with-antitrust-probe-over-plans-to-block-ai-rivals-from-whatsapp?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Meta faces scrutiny over allegations that its behavior undermines competition within the AI sector.

* [Bending Spoons Buys Eventbrite For $500 Million](https://news.slashdot.org/story/25/12/04/1751254/bending-spoons-buys-eventbrite-for-500-million?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A notable acquisition reshapes the tech landscape related to event management platforms.

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

* [2025-12-05, 01:24:00](https://soylentnews.org/article.pl?sid=25/12/03/1319210&amp;from=rss) - [Linux First, Windows Later! Dell Launches Qualcomm NPU Laptop on Linux Before Windows](https://soylentnews.org/article.pl?sid=25/12/03/1319210&amp;from=rss)
* [2025-12-05, 01:05:57](https://news.ycombinator.com/item?id=46155619) - [BMW PHEV: When EU engineering becomes a synonym for \&quot;unrepairable\&quot; (EV Clinic)](https://evclinic.eu/2025/12/04/2021-phev-bmw-ibmucp-21f37e-post-crash-recovery-when-eu-engineering-becomes-a-synonym-for-unrepairable-generating-waste/)
* [2025-12-05, 01:01:00](https://tech.slashdot.org/story/25/12/04/2158221/us-probes-reports-waymo-self-driving-cars-illegally-passed-school-buses-19-times?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Probes Reports Waymo Self-Driving Cars Illegally Passed School Buses 19 Times](https://tech.slashdot.org/story/25/12/04/2158221/us-probes-reports-waymo-self-driving-cars-illegally-passed-school-buses-19-times?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-05, 00:41:08](https://news.ycombinator.com/item?id=46155401) - [The Ofcom Files, Part 4: Ofcom Rides Again](https://prestonbyrne.com/2025/12/04/the-ofcom-files-part-4-ofcom-rides-again/)
* [2025-12-05, 00:09:57](https://news.ycombinator.com/item?id=46155135) - [AV1 – Now Powering 30% of Netflix Streaming](https://netflixtechblog.com/av1-now-powering-30-of-netflix-streaming-02f592242d80)
* [2025-12-05, 00:03:36](https://news.ycombinator.com/item?id=46155085) - [Trick users and bypass warnings – Modern SVG Clickjacking attacks](https://lyra.horse/blog/2025/12/svg-clickjacking/)
* [2025-12-05, 00:00:00](https://yro.slashdot.org/story/25/12/04/2153226/microsoft-faces-new-complaint-for-unlawfully-processing-data-on-behalf-of-israeli-military?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Faces New Complaint For Unlawfully Processing Data On Behalf of Israeli Military](https://yro.slashdot.org/story/25/12/04/2153226/microsoft-faces-new-complaint-for-unlawfully-processing-data-on-behalf-of-israeli-military?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-04, 23:23:00](https://hardware.slashdot.org/story/25/12/04/2125206/plane-crashed-after-3d-printed-part-collapsed?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Plane Crashed After 3D-Printed Part Collapsed](https://hardware.slashdot.org/story/25/12/04/2125206/plane-crashed-after-3d-printed-part-collapsed?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-04, 23:08:25](https://news.ycombinator.com/item?id=46154491) - [We gave 5 LLMs $100K to trade stocks for 8 months](https://www.aitradearena.com/research/we-ran-llms-for-8-months)
* [2025-12-04, 23:08:07](https://news.ycombinator.com/item?id=46154484) - [SMS phishers pivot to points, taxes, fake retailers](https://krebsonsecurity.com/2025/12/sms-phishers-pivot-to-points-taxes-fake-retailers/)
* [2025-12-04, 22:56:08](https://news.ycombinator.com/item?id=46154344) - [StardustOS: Library operating system for building light-weight Unikernels](https://github.com/StardustOS)
* [2025-12-04, 22:26:43](https://news.ycombinator.com/item?id=46154022) - [State of AI: An Empirical 100T Token Study with OpenRouter](https://openrouter.ai/state-of-ai)
* [2025-12-04, 22:22:00](https://yro.slashdot.org/story/25/12/04/186254/russia-blocks-roblox-apples-facetime?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Russia Blocks Roblox, Apple&apos;s FaceTime](https://yro.slashdot.org/story/25/12/04/186254/russia-blocks-roblox-apples-facetime?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-04, 22:20:47](https://lobste.rs/s/d5jx09/what_is_package_manager) - [What is a Package Manager?](https://nesbitt.io/2025/12/02/what-is-a-package-manager.html)
* [2025-12-04, 21:46:54](https://lobste.rs/s/x7glis/jujutsu_v0_36_0_released) - [jujutsu v0.36.0 released](https://github.com/jj-vcs/jj/releases/tag/v0.36.0)
* [2025-12-04, 21:40:24](https://news.ycombinator.com/item?id=46153466) - [Thoughts on Go vs. Rust vs. Zig](https://sinclairtarget.com/blog/2025/08/thoughts-on-go-vs.-rust-vs.-zig/)
* [2025-12-04, 21:21:00](https://yro.slashdot.org/story/25/12/04/181250/eu-hits-meta-with-antitrust-probe-over-plans-to-block-ai-rivals-from-whatsapp?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EU Hits Meta With Antitrust Probe Over Plans To Block AI Rivals From WhatsApp](https://yro.slashdot.org/story/25/12/04/181250/eu-hits-meta-with-antitrust-probe-over-plans-to-block-ai-rivals-from-whatsapp?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-04, 21:12:03](https://lobste.rs/s/xisyov/what_is_better_lookup_table_enum_type) - [What is better: a lookup table or an enum type?](https://www.cybertec-postgresql.com/en/lookup-table-or-enum-type/)
* [2025-12-04, 21:09:56](https://news.ycombinator.com/item?id=46153116) - [Django 6](https://docs.djangoproject.com/en/6.0/releases/6.0/)
* [2025-12-04, 21:04:29](https://news.ycombinator.com/item?id=46153058) - [CUDA-l2: Surpassing cuBLAS performance for matrix multiplication through RL](https://github.com/deepreinforce-ai/CUDA-L2)
* [2025-12-04, 21:01:47](https://lobste.rs/s/v82ecm/javascript_announced_30_years_ago) - [JavaScript Announced 30 Years Ago](https://web.archive.org/web/20070916144913/http://wp.netscape.com/newsref/pr/newsrelease67.html)
* [2025-12-04, 20:56:08](https://news.ycombinator.com/item?id=46152941) - [A Cozy Mk IV light aircraft crashed after 3D-printed part was weakened by heat](https://www.bbc.com/news/articles/c1w932vqye0o)
* [2025-12-04, 20:42:13](https://lobste.rs/s/wkuvhx/hello_blog) - [][ Hello blog](https://nobloat.org/articles/2025-07-01-hello-blog.html)
* [2025-12-04, 20:42:00](https://soylentnews.org/article.pl?sid=25/12/03/1255251&amp;from=rss) - [Netflix Quietly Drops Support for Casting to Most TVs](https://soylentnews.org/article.pl?sid=25/12/03/1255251&amp;from=rss)
* [2025-12-04, 20:41:13](https://lobste.rs/s/4pvwma/fairphone_open_sources_fairphone_5_6) - [Fairphone open-sources Fairphone 5 and 6 software, and Moments switch](https://www.fairphone.com/en/2025/12/04/were-big-fans-of-open-source-buildable-code-at-fairphone-heres-why/)
* [2025-12-04, 20:20:00](https://news.slashdot.org/story/25/12/04/1751254/bending-spoons-buys-eventbrite-for-500-million?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bending Spoons Buys Eventbrite For $500 Million](https://news.slashdot.org/story/25/12/04/1751254/bending-spoons-buys-eventbrite-for-500-million?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-04, 20:04:42](https://lobste.rs/s/lmyqtn/bcachefs_1_33_0_reconcile) - [bcachefs 1.33.0 - reconcile](https://lore.kernel.org/linux-bcachefs/slvis5ybvo7ch3vxh5yb6turapyq7hai2tddwjriicfxqivnpn@xdpb25wey5xd/)
* [2025-12-04, 19:58:39](https://lobste.rs/s/asnk6f/rsync_net_technical_notes_q4) - [rsync.net technical notes Q4](https://www.rsync.net/resources/notes/2025-q4-rsync.net_technotes.html)
* [2025-12-04, 19:19:00](https://it.slashdot.org/story/25/12/04/1744255/microsoft-mitigates-windows-lnk-flaw-exploited-as-zero-day?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft &apos;Mitigates&apos; Windows LNK Flaw Exploited As Zero-Day](https://it.slashdot.org/story/25/12/04/1744255/microsoft-mitigates-windows-lnk-flaw-exploited-as-zero-day?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-04, 19:18:10](https://lobste.rs/s/ojl8fn/why_ed_1) - [Why ed(1)?](https://blog.thechases.com/posts/cli/why-ed1/)
* [2025-12-04, 18:27:17](https://lobste.rs/s/qdenps/apl_for_plan9) - [APL for Plan9](https://apl.pmikkelsen.com/)
* [2025-12-04, 18:18:00](https://hardware.slashdot.org/story/25/12/04/1739230/ram-is-so-expensive-samsung-wont-even-sell-it-to-samsung?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [RAM Is So Expensive, Samsung Won&apos;t Even Sell It To Samsung](https://hardware.slashdot.org/story/25/12/04/1739230/ram-is-so-expensive-samsung-wont-even-sell-it-to-samsung?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-04, 18:04:07](https://news.ycombinator.com/item?id=46150715) - [Why are 38 percent of Stanford students saying they&apos;re disabled?](https://reason.com/2025/12/04/why-are-38-percent-of-stanford-students-saying-theyre-disabled/)
* [2025-12-04, 17:43:07](https://news.ycombinator.com/item?id=46150447) - [PyTogether: Collaborative lightweight real-time Python IDE for teachers/learners](https://github.com/SJRiz/pytogether)
* [2025-12-04, 17:17:00](https://science.slashdot.org/story/25/12/04/0538249/30-of-doctors-in-uk-use-ai-tools-in-patient-consultations-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [30% of Doctors In UK Use AI Tools In Patient Consultations, Study Finds](https://science.slashdot.org/story/25/12/04/0538249/30-of-doctors-in-uk-use-ai-tools-in-patient-consultations-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-04, 17:07:08](https://lobste.rs/s/ud9u0e/functional_quadtrees) - [Functional Quadtrees](https://lbjgruppen.com/en/posts/functional-quadtree-clojure)
* [2025-12-04, 17:00:37](https://news.ycombinator.com/item?id=46149849) - [Converge (YC S23) is hiring a martech expert in NYC](https://www.runconverge.com/careers/technical-customer-success-manager)
* [2025-12-04, 16:58:35](https://news.ycombinator.com/item?id=46149813) - [Multivox: Volumetric Display](https://github.com/AncientJames/multivox)
* [2025-12-04, 16:52:56](https://news.ycombinator.com/item?id=46149727) - [Launch HN: Browser Buddy (YC W24) – A recommendation system for Internet writing](https://www.browserbuddy.com/)
* [2025-12-04, 16:25:31](https://news.ycombinator.com/item?id=46149375) - [Autism should not be treated as a single condition](https://www.economist.com/science-and-technology/2025/12/03/why-autism-should-not-be-treated-as-a-single-condition)
* [2025-12-04, 16:20:11](https://lobste.rs/s/u0k1h6/django_6_0_released) - [Django 6.0 released](https://www.djangoproject.com/weblog/2025/dec/03/django-60-released/)
* [2025-12-04, 16:16:00](https://tech.slashdot.org/story/25/12/04/0534222/subaru-owners-are-ticked-about-in-car-pop-up-ads-for-siriusxm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Subaru Owners Are Ticked About In-Car Pop-Up Ads For SiriusXM](https://tech.slashdot.org/story/25/12/04/0534222/subaru-owners-are-ticked-about-in-car-pop-up-ads-for-siriusxm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-04, 16:03:02](https://news.ycombinator.com/item?id=46149066) - [Feynman vs. Computer](https://entropicthoughts.com/feynman-vs-computer)
* [2025-12-04, 15:58:18](https://lobste.rs/s/wtzco2/hunting_production_only_proxy_bug) - [Hunting a production-only proxy bug in SvelteKit](https://drew.silcock.dev/blog/fixing-a-bug-in-sveltekit/)
* [2025-12-04, 15:53:00](https://soylentnews.org/article.pl?sid=25/12/03/1244208&amp;from=rss) - [Google&apos;s Gemini 3 Jailbroken in Minutes, and the Fallout is Alarming](https://soylentnews.org/article.pl?sid=25/12/03/1244208&amp;from=rss)
* [2025-12-04, 15:15:00](https://tech.slashdot.org/story/25/12/04/057208/meta-poaches-apple-design-exec-alan-dye?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Poaches Apple Design Exec Alan Dye](https://tech.slashdot.org/story/25/12/04/057208/meta-poaches-apple-design-exec-alan-dye?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-04, 15:06:08](https://news.ycombinator.com/item?id=46148460) - [Show HN: Onlyrecipe 2.0 – I added all features HN requested – 4 years later](https://onlyrecipeapp.com/?url=https://www.allrecipes.com/turkish-pasta-recipe-8754903)
* [2025-12-04, 14:14:00](https://news.slashdot.org/story/25/12/04/0449221/new-homes-in-london-were-delayed-by-energy-hungry-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Homes In London Were Delayed By &apos;Energy-Hungry&apos; Data Centers](https://news.slashdot.org/story/25/12/04/0449221/new-homes-in-london-were-delayed-by-energy-hungry-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-04, 14:04:13](https://lobste.rs/s/omnyrf/svg_filters_clickjacking_2_0) - [SVG Filters - Clickjacking 2.0](https://lyra.horse/blog/2025/12/svg-clickjacking/)
* [2025-12-04, 13:40:00](https://news.ycombinator.com/item?id=46147540) - [Transparent leadership beats servant leadership](https://entropicthoughts.com/transparent-leadership-beats-servant-leadership)
* [2025-12-04, 13:34:27](https://news.ycombinator.com/item?id=46147493) - [Fighting the age-gated internet](https://www.wired.com/story/age-verification-is-sweeping-the-us-activists-are-fighting-back/)
* [2025-12-04, 13:18:38](https://news.ycombinator.com/item?id=46147341) - [Functional Quadtrees](https://lbjgruppen.com/en/posts/functional-quadtree-clojure)
* [2025-12-04, 13:13:00](https://it.slashdot.org/story/25/12/04/0436234/end-to-end-encrypted-smart-toilet-camera-is-not-actually-end-to-end-encrypted?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;End-To-End Encrypted&apos; Smart Toilet Camera Is Not Actually End-To-End Encrypted](https://it.slashdot.org/story/25/12/04/0436234/end-to-end-encrypted-smart-toilet-camera-is-not-actually-end-to-end-encrypted?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-04, 11:44:00](https://lobste.rs/s/ffick3/tunnl_gg_expose_localhost_internet) - [tunnl.gg | Expose localhost to the internet](https://tunnl.gg/)
* [2025-12-04, 11:36:36](https://news.ycombinator.com/item?id=46146451) - [I ignore the spotlight as a staff engineer](https://lalitm.com/software-engineering-outside-the-spotlight/)
* [2025-12-04, 11:34:59](https://lobste.rs/s/xdjgbd/why_i_ignore_spotlight_as_staff_engineer) - [Why I Ignore The Spotlight as a Staff Engineer](https://lalitm.com/software-engineering-outside-the-spotlight/)
* [2025-12-04, 11:33:55](https://lobste.rs/s/abxtov/pglite_embeddable_postgres) - [PGlite - Embeddable Postgres](https://pglite.dev/)
* [2025-12-04, 11:04:00](https://soylentnews.org/article.pl?sid=25/12/03/0225225&amp;from=rss) - [Datacenters in Space Are a Terrible, Horrible, No Good Idea.](https://soylentnews.org/article.pl?sid=25/12/03/0225225&amp;from=rss)
* [2025-12-04, 10:58:11](https://lobste.rs/s/dvhbwp/walrus_high_performance_distributed_log) - [walrus (High Performance distributed log streaming engine)](https://github.com/nubskr/walrus)
* [2025-12-04, 10:52:42](https://news.ycombinator.com/item?id=46146133) - [PGlite – Embeddable Postgres](https://pglite.dev/)
* [2025-12-04, 10:42:13](https://lobste.rs/s/z8gyu7/on_recreating_lost_sdk_for_42_year_old) - [On recreating the lost SDK for a 42-year-old operating system: VisiCorp Visi On](https://git.sr.ht/~nkali/vision-sdk/tree/main/note/index.md)
* [2025-12-04, 10:32:26](https://lobste.rs/s/psmwt9/human_writes_font) - [The Human Writes Font](https://humanwritesfont.com/)
* [2025-12-04, 10:10:00](https://news.slashdot.org/story/25/12/04/0430227/top-journal-retracts-study-predicting-catastrophic-climate-toll?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Top Journal Retracts Study Predicting Catastrophic Climate Toll](https://news.slashdot.org/story/25/12/04/0430227/top-journal-retracts-study-predicting-catastrophic-climate-toll?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-04, 09:01:55](https://news.ycombinator.com/item?id=46145365) - [It’s time to free JavaScript (2024)](https://javascript.tm/letter)
* [2025-12-04, 08:38:17](https://news.ycombinator.com/item?id=46145180) - [How elites could shape mass preferences as AI reduces persuasion costs](https://arxiv.org/abs/2512.04047)
* [2025-12-04, 07:52:53](https://lobste.rs/s/kiouhn/swi_prolog_10_0_0_released) - [SWI-Prolog 10.0.0 released](https://swi-prolog.discourse.group/t/ann-swi-prolog-10-0-0-stable/9412)
* [2025-12-04, 07:07:00](https://slashdot.org/story/25/12/03/2348233/russian-astronaut-kicked-out-of-the-us-for-stealing-proprietary-spacex-designs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Russian Astronaut Kicked Out of the US For Stealing Proprietary SpaceX Designs](https://slashdot.org/story/25/12/03/2348233/russian-astronaut-kicked-out-of-the-us-for-stealing-proprietary-spacex-designs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-04, 06:44:38](https://lobste.rs/s/0ujeoo/super_flat_asts) - [Super-flat ASTs](https://jhwlr.io/super-flat-ast/)
* [2025-12-04, 06:17:00](https://soylentnews.org/article.pl?sid=25/12/03/0223207&amp;from=rss) - [Flock Uses Overseas Gig Workers to Build its Surveillance AI](https://soylentnews.org/article.pl?sid=25/12/03/0223207&amp;from=rss)
* [2025-12-04, 05:32:10](https://lobste.rs/s/feeb0w/foreign_dlopen_call_dlopen_from_static) - [foreign-dlopen: call dlopen from static programs](https://github.com/pfalcon/foreign-dlopen/)
* [2025-12-04, 01:36:00](https://soylentnews.org/article.pl?sid=25/12/02/1148202&amp;from=rss) - [KDE to Drop X11 Session in KDE Plasma 6.8](https://soylentnews.org/article.pl?sid=25/12/02/1148202&amp;from=rss)
* [2025-12-03, 20:59:16](https://lobste.rs/s/dxqyh4/ghostty_is_now_non_profit) - [Ghostty Is Now Non-Profit](https://mitchellh.com/writing/ghostty-non-profit)
* [2025-12-03, 20:49:00](https://soylentnews.org/article.pl?sid=25/12/02/1141208&amp;from=rss) - [Rapidus to Start Construction on 1.4nm Fab in 2027 — R&amp;D on Node Begins Next Year](https://soylentnews.org/article.pl?sid=25/12/02/1141208&amp;from=rss)
* [2025-12-03, 18:56:29](https://lobste.rs/s/lo8f8p/teaching_llm_niche_diagraming_language) - [Teaching an LLM a Niche Diagraming Language](https://huy.rocks/everyday/12-01-2025-ai-teaching-an-llm-a-niche-diagraming-language)
* [2025-12-03, 16:02:00](https://soylentnews.org/article.pl?sid=25/12/01/0724224&amp;from=rss) - [openSUSE Tumbleweed to update GRUB package and enable full disk encryption](https://soylentnews.org/article.pl?sid=25/12/01/0724224&amp;from=rss)
* [2025-12-03, 11:20:00](https://soylentnews.org/article.pl?sid=25/12/01/0721253&amp;from=rss) - [Bright Orange Life-Form Could Point to New Dino Discoveries](https://soylentnews.org/article.pl?sid=25/12/01/0721253&amp;from=rss)
* [2025-12-03, 06:58:00](https://soylentnews.org/article.pl?sid=25/12/01/0719241&amp;from=rss) - [Dell: About 1 Billion PCs Will Not or Cannot be Upgraded to Windows 11](https://soylentnews.org/article.pl?sid=25/12/01/0719241&amp;from=rss)
* [2025-12-03, 01:53:00](https://soylentnews.org/article.pl?sid=25/12/01/0716216&amp;from=rss) - [Scientists Warn Mountain Climate Change is Accelerating Faster Than Predicted](https://soylentnews.org/article.pl?sid=25/12/01/0716216&amp;from=rss)
* [2025-12-02, 21:29:00](https://soylentnews.org/article.pl?sid=25/12/01/0713251&amp;from=rss) - [Scientists Discover That People Act Way Better When Batman is Present](https://soylentnews.org/article.pl?sid=25/12/01/0713251&amp;from=rss)
* [2025-12-02, 16:22:00](https://soylentnews.org/article.pl?sid=25/12/01/0413229&amp;from=rss) - [Major Software Version Releases for Blender and Bottles](https://soylentnews.org/article.pl?sid=25/12/01/0413229&amp;from=rss)
* [2025-12-02, 15:23:57](https://news.ycombinator.com/item?id=46122114) - [Some models of reality are bolder than others](https://cjauvin.github.io/posts/metaphysical-boldness/)
* [2025-12-02, 11:40:00](https://soylentnews.org/article.pl?sid=25/12/01/043228&amp;from=rss) - [Mind-Reading Devices Can Now Predict Preconscious Thoughts: Is It Time to Worry?](https://soylentnews.org/article.pl?sid=25/12/01/043228&amp;from=rss)
* [2025-12-02, 06:57:00](https://soylentnews.org/article.pl?sid=25/12/01/0350249&amp;from=rss) - [Billion-Dollar AI Chip Deal Between Google and Meta Could be on the Cards](https://soylentnews.org/article.pl?sid=25/12/01/0350249&amp;from=rss)
* [2025-12-02, 02:09:00](https://soylentnews.org/article.pl?sid=25/12/01/0343223&amp;from=rss) - [Ukraine First Country in Europe to Get Starlink Satellite Phone Service](https://soylentnews.org/article.pl?sid=25/12/01/0343223&amp;from=rss)
* [2025-12-01, 21:26:00](https://soylentnews.org/article.pl?sid=25/12/01/0335217&amp;from=rss) - [NTSB Finds Root Cause of Container Ship Hitting Baltimore Bridge](https://soylentnews.org/article.pl?sid=25/12/01/0335217&amp;from=rss)
* [2025-12-01, 16:40:00](https://soylentnews.org/article.pl?sid=25/11/30/0244232&amp;from=rss) - [Pebble, the E-Ink Smartwatch That Refuses to Die, Just Went Fully Open Source](https://soylentnews.org/article.pl?sid=25/11/30/0244232&amp;from=rss)
* [2025-12-01, 11:51:00](https://soylentnews.org/article.pl?sid=25/11/30/0234208&amp;from=rss) - [ClamAV Signature Retirement Announcement](https://soylentnews.org/article.pl?sid=25/11/30/0234208&amp;from=rss)
* [2025-12-01, 07:07:00](https://soylentnews.org/article.pl?sid=25/11/30/0229203&amp;from=rss) - [Roblox to Use AI for User Age Identification but Aus Government Wants More](https://soylentnews.org/article.pl?sid=25/11/30/0229203&amp;from=rss)
* [2025-12-01, 02:20:00](https://soylentnews.org/article.pl?sid=25/11/30/0224246&amp;from=rss) - [Particle Accelerator Waste Could Help Produce Cancer-Fighting Materials](https://soylentnews.org/article.pl?sid=25/11/30/0224246&amp;from=rss)
