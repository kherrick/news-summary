# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Technology Trends

* [Bots are overwhelming websites with their hunger for AI data](https://www.theregister.com/2025/06/17/bot_overwhelming_websites_report/) ([comments](https://news.ycombinator.com/item?id=44304141))

* [AI will shrink Amazon's workforce in the coming years, CEO Jassy says](https://www.cnbc.com/2025/06/17/ai-amazon-workforce-jassy.html) ([comments](https://news.ycombinator.com/item?id=44303538))

* [OpenAI Weighs 'Nuclear Option' of Antitrust Complaint Against Microsoft](https://yro.slashdot.org/story/25/06/17/209203/openai-weighs-nuclear-option-of-antitrust-complaint-against-microsoft?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=44303361))

* [AI Use at Work Nearly Doubles in Two Years](https://slashdot.org/story/25/06/17/1432203/ai-use-at-work-nearly-doubles-in-two-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Space and Scientific Advances

* [Honda Successfully Launches and Lands Reusable Rocket](https://science.slashdot.org/story/25/06/17/2016204/honda-successfully-launches-and-lands-reusable-rocket?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=44300102))

* [Microbe With Bizarrely Tiny Genome May Be Evolving Into a Virus](https://science.slashdot.org/story/25/06/17/0042221/microbe-with-bizarrely-tiny-genome-may-be-evolving-into-a-virus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Gaming and Display Innovations

* [From SDR to 'Fake HDR': Mario Kart World on Switch 2 Undermines Modern Display Potential](https://www.alexandermejia.com/from-sdr-to-fake-hdr-mario-kart-world-on-switch-2-undermines-modern-display-potential/) ([comments](https://lobste.rs/s/dmwtie/from_sdr_fake_hdr_mario_kart_world_on))

## Web Development and FOSS

* [bzip2 crate switches from C to 100% rust](https://trifectatech.org/blog/bzip2-crate-switches-from-c-to-rust/) ([comments Lobste.rs](https://lobste.rs/s/g3wtej/bzip2_crate_switches_from_c_100_rust) / [comments Hacker News](https://news.ycombinator.com/item?id=44303361))

* [Locally hosting an internet-connected server](https://mjg59.dreamwidth.org/72095.html) ([comments](https://lobste.rs/s/thttgw/locally_hosting_internet_connected))

## Resurrecting Concepts

* [Resurrecting a dead torrent tracker and finding 3 million peers](https://kianbradley.com/2025/06/15/resurrecting-a-dead-tracker.html) ([comments Lobste.rs](https://lobste.rs/s/jamcvc/resurrecting_dead_torrent_tracker) / [comments Hacker News](https://news.ycombinator.com/item?id=44301686))

## Thought-Provoking Reads

* [The Grug Brained Developer (2022)](https://grugbrain.dev/) ([comments](https://news.ycombinator.com/item?id=44303542))

* [What Google Translate Can Tell Us About Vibecoding](https://ingrids.space/posts/what-google-translate-can-tell-us-about-vibecoding/) ([comments Lobste.rs](https://lobste.rs/s/vedkvh/what_google_translate_can_tell_us_about) / [comments Hacker News](https://news.ycombinator.com/item?id=44302870))

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

* [2025-06-17, 21:30:00](https://tech.slashdot.org/story/25/06/17/2027252/all-videos-on-facebook-will-soon-be-shared-as-reels?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [All Videos On Facebook Will Soon Be Shared As Reels](https://tech.slashdot.org/story/25/06/17/2027252/all-videos-on-facebook-will-soon-be-shared-as-reels?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-17, 21:26:14](https://news.ycombinator.com/item?id=44304141) - [Bots are overwhelming websites with their hunger for AI data](https://www.theregister.com/2025/06/17/bot_overwhelming_websites_report/)
* [2025-06-17, 21:12:01](https://lobste.rs/s/dmwtie/from_sdr_fake_hdr_mario_kart_world_on) - [From SDR to ‘Fake HDR’: Mario Kart World on Switch 2 Undermines Modern Display Potential](https://www.alexandermejia.com/from-sdr-to-fake-hdr-mario-kart-world-on-switch-2-undermines-modern-display-potential/)
* [2025-06-17, 21:01:41](https://lobste.rs/s/i4cjur/kicad_wayland_support) - [KiCad and Wayland Support](https://www.kicad.org/blog/2025/06/KiCad-and-Wayland-Support/)
* [2025-06-17, 21:00:27](https://news.ycombinator.com/item?id=44303901) - [Foundry (YC F24) Hiring Early Engineer to Build Web Agent Infrastructure](https://www.ycombinator.com/companies/foundry/jobs/azAgJbN-foundry-software-engineer-new-grad-to-mid-level)
* [2025-06-17, 20:50:00](https://science.slashdot.org/story/25/06/17/2016204/honda-successfully-launches-and-lands-reusable-rocket?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Honda Successfully Launches and Lands Reusable Rocket](https://science.slashdot.org/story/25/06/17/2016204/honda-successfully-launches-and-lands-reusable-rocket?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-17, 20:48:04](https://lobste.rs/s/jamcvc/resurrecting_dead_torrent_tracker) - [Resurrecting a dead torrent tracker and finding 3 million peers](https://kianbradley.com/2025/06/15/resurrecting-a-dead-tracker.html)
* [2025-06-17, 20:24:36](https://news.ycombinator.com/item?id=44303542) - [The Grug Brained Developer (2022)](https://grugbrain.dev/)
* [2025-06-17, 20:24:18](https://news.ycombinator.com/item?id=44303538) - [AI will shrink Amazon&apos;s workforce in the coming years, CEO Jassy says](https://www.cnbc.com/2025/06/17/ai-amazon-workforce-jassy.html)
* [2025-06-17, 20:10:00](https://yro.slashdot.org/story/25/06/17/209203/openai-weighs-nuclear-option-of-antitrust-complaint-against-microsoft?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Weighs &apos;Nuclear Option&apos; of Antitrust Complaint Against Microsoft](https://yro.slashdot.org/story/25/06/17/209203/openai-weighs-nuclear-option-of-antitrust-complaint-against-microsoft?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-17, 20:06:54](https://news.ycombinator.com/item?id=44303361) - [Bzip2 crate switches from C to 100% rust](https://trifectatech.org/blog/bzip2-crate-switches-from-c-to-rust/)
* [2025-06-17, 20:04:34](https://lobste.rs/s/g3wtej/bzip2_crate_switches_from_c_100_rust) - [bzip2 crate switches from C to 100% rust](https://trifectatech.org/blog/bzip2-crate-switches-from-c-to-rust/)
* [2025-06-17, 19:45:00](https://soylentnews.org/article.pl?sid=25/06/17/0358247&amp;from=rss) - [You Don&apos;t Have to Almost Die to be Happy at Work, but It Helps](https://soylentnews.org/article.pl?sid=25/06/17/0358247&amp;from=rss)
* [2025-06-17, 19:39:26](https://news.ycombinator.com/item?id=44303021) - [Real-time action chunking with large models](https://www.pi.website/research/real_time_chunking)
* [2025-06-17, 19:23:10](https://news.ycombinator.com/item?id=44302870) - [What Google Translate Can Tell Us About Vibecoding](https://ingrids.space/posts/what-google-translate-can-tell-us-about-vibecoding/)
* [2025-06-17, 19:20:23](https://lobste.rs/s/vedkvh/what_google_translate_can_tell_us_about) - [What Google Translate Can Tell Us About Vibecoding](https://ingrids.space/posts/what-google-translate-can-tell-us-about-vibecoding/)
* [2025-06-17, 19:17:05](https://news.ycombinator.com/item?id=44302797) - [Programming Language Design in the Era of LLMs: A Return to Mediocrity?](https://kirancodes.me/posts/log-lang-design-llms.html)
* [2025-06-17, 19:07:42](https://news.ycombinator.com/item?id=44302704) - [From SDR to &apos;Fake HDR&apos;: Mario Kart World on Switch 2](https://www.alexandermejia.com/from-sdr-to-fake-hdr-mario-kart-world-on-switch-2-undermines-modern-display-potential/)
* [2025-06-17, 18:27:47](https://lobste.rs/s/uqniaz/double_entry_ledgers_missing_primitive) - [Double-Entry Ledgers: The Missing Primitive in Modern Software](https://www.pgrs.net/2025/06/17/double-entry-ledgers-missing-primitive-in-modern-software/)
* [2025-06-17, 18:05:53](https://news.ycombinator.com/item?id=44301998) - [Time Series Forecasting with Graph Transformers](https://kumo.ai/research/time-series-forecasting/)
* [2025-06-17, 17:50:05](https://news.ycombinator.com/item?id=44301809) - [Building Effective AI Agents](https://www.anthropic.com/engineering/building-effective-agents)
* [2025-06-17, 17:40:19](https://news.ycombinator.com/item?id=44301686) - [Resurrecting a dead torrent tracker and finding 3M peers](https://kianbradley.com/2025/06/15/resurrecting-a-dead-tracker.html)
* [2025-06-17, 17:38:02](https://news.ycombinator.com/item?id=44301660) - [AMD&apos;s CDNA 4 Architecture Announcement](https://chipsandcheese.com/p/amds-cdna-4-architecture-announcement)
* [2025-06-17, 17:36:00](https://tech.slashdot.org/story/25/06/17/1736207/iran-bans-officials-from-using-internet-connected-devices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Iran Bans Officials From Using Internet-Connected Devices](https://tech.slashdot.org/story/25/06/17/1736207/iran-bans-officials-from-using-internet-connected-devices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-17, 17:12:30](https://news.ycombinator.com/item?id=44301373) - [Guidelines on how to be a scientific sleuth released](https://osf.io/2kdez/wiki/home/)
* [2025-06-17, 17:04:49](https://lobste.rs/s/lcc0y4/kde_plasma_6_4_released) - [KDE Plasma 6.4 released](https://kde.org/announcements/plasma/6/6.4.0/)
* [2025-06-17, 16:54:44](https://news.ycombinator.com/item?id=44301186) - [Miscalculation by Spanish power grid operator REE contributed to blackout](https://www.reuters.com/business/energy/investigation-into-spains-april-28-blackout-shows-no-evidence-cyberattack-2025-06-17/)
* [2025-06-17, 16:50:00](https://slashdot.org/story/25/06/17/1646203/salesforce-announces-6-price-increase-as-it-pushes-ai-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Salesforce Announces 6% Price Increase as It Pushes AI Features](https://slashdot.org/story/25/06/17/1646203/salesforce-announces-6-price-increase-as-it-pushes-ai-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-17, 16:12:00](https://slashdot.org/story/25/06/17/1612248/meetings-after-8-pm-are-on-the-rise-microsoft-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meetings After 8 p.m. Are On the Rise, Microsoft Study Finds](https://slashdot.org/story/25/06/17/1612248/meetings-after-8-pm-are-on-the-rise-microsoft-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-17, 16:06:05](https://news.ycombinator.com/item?id=44300717) - [Making 2.5 Flash and 2.5 Pro GA, and introducing Gemini 2.5 Flash-Lite](https://blog.google/products/gemini/gemini-2-5-model-family-expands/)
* [2025-06-17, 15:49:10](https://news.ycombinator.com/item?id=44300554) - [CPU-Based Layout Design for Picker-to-Parts Pallet Warehouses](https://arxiv.org/abs/2506.04266)
* [2025-06-17, 15:25:00](https://news.slashdot.org/story/25/06/17/1520209/firefox-is-dead-to-me?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Firefox Is Dead To Me&apos;](https://news.slashdot.org/story/25/06/17/1520209/firefox-is-dead-to-me?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-17, 15:05:00](https://soylentnews.org/article.pl?sid=25/06/16/0136200&amp;from=rss) - [4Chan Under Investigation by Uk Ofcom Over Online Safety Concerns](https://soylentnews.org/article.pl?sid=25/06/16/0136200&amp;from=rss)
* [2025-06-17, 15:02:12](https://news.ycombinator.com/item?id=44300102) - [Honda conducts successful launch and landing of experimental reusable rocket](https://global.honda/en/topics/2025/c_2025-06-17ceng.html)
* [2025-06-17, 14:52:00](https://soylentnews.org/breakingnews/article.pl?sid=25/06/17/1439252&amp;from=rss) - [This Is Not A Drill](https://soylentnews.org/breakingnews/article.pl?sid=25/06/17/1439252&amp;from=rss)
* [2025-06-17, 14:51:10](https://news.ycombinator.com/item?id=44299970) - [Why JPEGs still rule the web (2024)](https://spectrum.ieee.org/jpeg-image-format-history)
* [2025-06-17, 14:49:50](https://news.ycombinator.com/item?id=44299947) - [O3 Turns Pro](https://thezvi.substack.com/p/o3-turns-pro)
* [2025-06-17, 14:45:29](https://lobste.rs/s/utck4y/what_i_wish_someone_told_me_when_i_was) - [What I Wish Someone Told Me When I Was Getting Into ARIA](https://www.smashingmagazine.com/2025/06/what-i-wish-someone-told-me-aria/)
* [2025-06-17, 14:45:00](https://slashdot.org/story/25/06/17/1432203/ai-use-at-work-nearly-doubles-in-two-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Use at Work Nearly Doubles in Two Years](https://slashdot.org/story/25/06/17/1432203/ai-use-at-work-nearly-doubles-in-two-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-17, 14:09:00](https://slashdot.org/story/25/06/17/149238/how-do-olympiad-medalists-judge-llms-in-competitive-programming?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Do Olympiad Medalists Judge LLMs in Competitive Programming?](https://slashdot.org/story/25/06/17/149238/how-do-olympiad-medalists-judge-llms-in-competitive-programming?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-17, 14:01:16](https://news.ycombinator.com/item?id=44299354) - [The hamburger-menu icon today: Is it recognizable?](https://www.nngroup.com/articles/hamburger-menu-icon-recognizability/)
* [2025-06-17, 13:18:20](https://lobste.rs/s/endekb/zb_beta_released) - [zb beta released](https://www.zombiezen.com/blog/2025/06/zb-beta-release/)
* [2025-06-17, 13:08:01](https://news.ycombinator.com/item?id=44298724) - [Voyager: Real-Time Splatting City-Scale 3D Gaussians on Your Phone](https://arxiv.org/abs/2506.02774)
* [2025-06-17, 13:00:00](https://entertainment.slashdot.org/story/25/06/17/0115238/titan-netflix-documentary-examines-events-leading-to-oceangates-doomed-expedition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Titan&apos; Netflix Documentary Examines Events Leading To OceanGate&apos;s Doomed Expedition](https://entertainment.slashdot.org/story/25/06/17/0115238/titan-netflix-documentary-examines-events-leading-to-oceangates-doomed-expedition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-17, 12:50:58](https://lobste.rs/s/k5tt4a/is_it_really_foss) - [is it really FOSS?](https://isitreallyfoss.com/)
* [2025-06-17, 12:45:20](https://lobste.rs/s/thttgw/locally_hosting_internet_connected) - [Locally hosting an internet-connected server](https://mjg59.dreamwidth.org/72095.html)
* [2025-06-17, 12:35:22](https://lobste.rs/s/z4hrye/is_documentation_like_pineapple_on_pizza) - [Is Documentation Like Pineapple on Pizza?](https://l.idaszak.com/l-docs-like-pineapple-on-pizza)
* [2025-06-17, 10:18:00](https://soylentnews.org/article.pl?sid=25/06/16/0131240&amp;from=rss) - [Behold the First Images of the Sun’s South Pole](https://soylentnews.org/article.pl?sid=25/06/16/0131240&amp;from=rss)
* [2025-06-17, 10:14:44](https://lobste.rs/s/iovrve/type_inference_zoo) - [Type Inference Zoo](https://zoo.cuichen.cc/)
* [2025-06-17, 10:10:23](https://lobste.rs/s/pgusbz/anime_js_v4_is_lightweight_javascript) - [Anime.js v4 is a lightweight JavaScript animation library with a simple, yet powerful API](https://animejs.com)
* [2025-06-17, 10:00:00](https://science.slashdot.org/story/25/06/17/0042221/microbe-with-bizarrely-tiny-genome-may-be-evolving-into-a-virus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microbe With Bizarrely Tiny Genome May Be Evolving Into a Virus](https://science.slashdot.org/story/25/06/17/0042221/microbe-with-bizarrely-tiny-genome-may-be-evolving-into-a-virus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-17, 09:51:08](https://lobste.rs/s/dx84oc/why_claude_code_feels_like_magic) - [Why Claude Code feels like magic?](https://omarabid.com/claude-magic)
* [2025-06-17, 08:57:46](https://news.ycombinator.com/item?id=44297045) - [The magic of through running](https://www.worksinprogress.news/p/the-magic-of-through-running)
* [2025-06-17, 07:00:00](https://tech.slashdot.org/story/25/06/17/018252/denmark-tests-unmanned-robotic-sailboat-fleet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Denmark Tests Unmanned Robotic Sailboat Fleet](https://tech.slashdot.org/story/25/06/17/018252/denmark-tests-unmanned-robotic-sailboat-fleet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-17, 06:16:57](https://lobste.rs/s/oz5ocp/slint_1_12_released_with_wgpu_support_ios) - [Slint 1.12 Released with WGPU Support, iOS Port, and Figma Variables Integration](https://slint.dev/blog/slint-1.12-released)
* [2025-06-17, 05:30:00](https://soylentnews.org/article.pl?sid=25/06/16/0115212&amp;from=rss) - [Can We Stop Big Tech From Controlling the Internet With AI Agents?](https://soylentnews.org/article.pl?sid=25/06/16/0115212&amp;from=rss)
* [2025-06-17, 04:20:11](https://lobste.rs/s/7dy7ti/nuanced_reality_throttling_it_s_not_just) - [The Nuanced Reality of Throttling: It&apos;s Not Just About Preventing Abuse](https://blog.joemag.dev/2025/06/the-nuanced-reality-of-throttling-its.html)
* [2025-06-17, 03:43:07](https://lobste.rs/s/gsci0f/why_generative_ai_coding_tools_agents_do) - [Why Generative AI Coding Tools and Agents Do Not Work For Me](https://blog.miguelgrinberg.com/post/why-generative-ai-coding-tools-and-agents-do-not-work-for-me)
* [2025-06-17, 03:30:00](https://tech.slashdot.org/story/25/06/17/0057254/social-media-now-main-source-of-news-in-us-research-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Social Media Now Main Source of News In US, Research Suggests](https://tech.slashdot.org/story/25/06/17/0057254/social-media-now-main-source-of-news-in-us-research-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-17, 01:30:00](https://science.slashdot.org/story/25/06/17/0048247/your-brain-has-a-hidden-beat----and-smarter-minds-sync-to-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Your Brain Has a Hidden Beat -- and Smarter Minds Sync To It](https://science.slashdot.org/story/25/06/17/0048247/your-brain-has-a-hidden-beat----and-smarter-minds-sync-to-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-17, 00:50:21](https://lobste.rs/s/6bduaj/phkmalloc) - [phkmalloc](https://phk.freebsd.dk/sagas/phkmalloc/)
* [2025-06-17, 00:50:00](https://tech.slashdot.org/story/25/06/16/2141250/google-cloud-caused-outage-by-ignoring-its-usual-code-quality-protections?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Cloud Caused Outage By Ignoring Its Usual Code Quality Protections](https://tech.slashdot.org/story/25/06/16/2141250/google-cloud-caused-outage-by-ignoring-its-usual-code-quality-protections?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-17, 00:43:00](https://soylentnews.org/article.pl?sid=25/06/16/016221&amp;from=rss) - [TSMC Slows Down Global Plans Due to Soft Demand, but Accelerates Arizona Fab Plans by Six Months](https://soylentnews.org/article.pl?sid=25/06/16/016221&amp;from=rss)
* [2025-06-16, 23:19:36](https://lobste.rs/s/f4cvx7/triaging_security_issues_reported_by) - [Triaging security issues reported by third parties (#913) · Issues · GNOME / libxml2 ·](https://gitlab.gnome.org/GNOME/libxml2/-/issues/913)
* [2025-06-16, 21:34:09](https://news.ycombinator.com/item?id=44293610) - [What happens when clergy take psilocybin](https://nautil.us/clergy-blown-away-by-psilocybin-1217112/)
* [2025-06-16, 20:33:14](https://lobste.rs/s/cho8tc/retrobootstrapping_rust_for_some_reason) - [retrobootstrapping rust for some reason](https://graydon2.dreamwidth.org/317484.html)
* [2025-06-16, 19:56:00](https://soylentnews.org/article.pl?sid=25/06/16/0057231&amp;from=rss) - [Washington Post in Talks With Substack About Using its Writers](https://soylentnews.org/article.pl?sid=25/06/16/0057231&amp;from=rss)
* [2025-06-16, 15:46:48](https://lobste.rs/s/q0zon6/goodbye_dark_inc_hello_darklang_inc) - [Goodbye Dark Inc. - Hello Darklang Inc](https://blog.darklang.com/goodbye-dark-inc-welcome-darklang-inc/)
* [2025-06-16, 15:11:37](https://lobste.rs/s/fiaxp8/selfish_reasons_for_building_accessible) - [Selfish reasons for building accessible UIs](https://nolanlawson.com/2025/06/16/selfish-reasons-for-building-accessible-uis/)
* [2025-06-16, 15:11:00](https://soylentnews.org/article.pl?sid=25/06/16/0052252&amp;from=rss) - [Huawei CEO Says Washington Has Exaggerated its Achievements, Saying the Company Isn&apos;t That Powerful](https://soylentnews.org/article.pl?sid=25/06/16/0052252&amp;from=rss)
* [2025-06-16, 14:16:55](https://lobste.rs/s/zx6iiy/working_on_databases_from_prison_how_i_got) - [Working on databases from prison: How I got here, part 2](https://turso.tech/blog/working-on-databases-from-prison)
* [2025-06-16, 10:25:00](https://soylentnews.org/article.pl?sid=25/06/15/145200&amp;from=rss) - [Buried Under 2 Kilometers of Antarctic Ice, Scientists Find a 34-Million-Year-Old Lost World](https://soylentnews.org/article.pl?sid=25/06/15/145200&amp;from=rss)
* [2025-06-16, 05:41:00](https://soylentnews.org/article.pl?sid=25/06/15/1353252&amp;from=rss) - [Photonic Processor Could Streamline 6G Wireless Signal Processing](https://soylentnews.org/article.pl?sid=25/06/15/1353252&amp;from=rss)
* [2025-06-16, 00:58:00](https://soylentnews.org/article.pl?sid=25/06/15/1350208&amp;from=rss) - [Massive Privacy Concern: Over 40,000 Security Cameras Are Streaming Unsecured Footage Worldwide](https://soylentnews.org/article.pl?sid=25/06/15/1350208&amp;from=rss)
* [2025-06-15, 20:12:00](https://soylentnews.org/article.pl?sid=25/06/15/0153218&amp;from=rss) - [Nematode Tower Power](https://soylentnews.org/article.pl?sid=25/06/15/0153218&amp;from=rss)
* [2025-06-15, 19:00:04](https://lobste.rs/s/d3rzjl/writing_toy_software_is_joy) - [Writing Toy Software Is A Joy](https://www.jsbarretto.com/blog/software-is-joy/)
* [2025-06-15, 17:30:07](https://news.ycombinator.com/item?id=44283637) - [Calculating Oil Storage Tank Occupancy with Help of Satellite Imagery](https://medium.com/planet-stories/a-beginners-guide-to-calculating-oil-storage-tank-occupancy-with-help-of-satellite-imagery-e8f387200178)
* [2025-06-15, 15:26:00](https://soylentnews.org/article.pl?sid=25/06/15/0338222&amp;from=rss) - [\&quot;Impossible\&quot; Particle That Hit Earth May Have Been Dark Matter](https://soylentnews.org/article.pl?sid=25/06/15/0338222&amp;from=rss)
* [2025-06-15, 10:41:00](https://soylentnews.org/article.pl?sid=25/06/14/1623235&amp;from=rss) - [RIP: Bill Atkinson, Co-Creator Of Apple Lisa And Mac](https://soylentnews.org/article.pl?sid=25/06/14/1623235&amp;from=rss)
* [2025-06-15, 05:57:00](https://soylentnews.org/article.pl?sid=25/06/14/1549226&amp;from=rss) - [Navy Backs Right to Repair After $13B Carrier Goes Half-Fed](https://soylentnews.org/article.pl?sid=25/06/14/1549226&amp;from=rss)
* [2025-06-15, 01:13:00](https://soylentnews.org/article.pl?sid=25/06/14/1546217&amp;from=rss) - [Stay Hungry,  Stay Foolish ... 20 Years on](https://soylentnews.org/article.pl?sid=25/06/14/1546217&amp;from=rss)
* [2025-06-14, 20:27:00](https://soylentnews.org/article.pl?sid=25/06/14/1315217&amp;from=rss) - [Jupiter Takes Europe&apos;s HPC Crown in 793Pf Top500 Run](https://soylentnews.org/article.pl?sid=25/06/14/1315217&amp;from=rss)
* [2025-06-14, 16:07:23](https://news.ycombinator.com/item?id=44277179) - [AMD&apos;s Pre-Zen Interconnect: Testing Trinity&apos;s Northbridge](https://chipsandcheese.com/p/amds-pre-zen-interconnect-testing)
* [2025-06-14, 15:42:00](https://soylentnews.org/article.pl?sid=25/06/13/1243246&amp;from=rss) - [Toyota Math: 9 Million EVs Are Just as Polluting as 27 Million Hybrids](https://soylentnews.org/article.pl?sid=25/06/13/1243246&amp;from=rss)
* [2025-06-14, 14:55:28](https://news.ycombinator.com/item?id=44276778) - [Attempting to Make the Smallest* Electric Motor [video]](https://www.youtube.com/watch?v=6x_NMytSA90)
* [2025-06-14, 14:53:32](https://news.ycombinator.com/item?id=44276765) - [Tetrachromatic Vision](https://www.bookofjoe.com/2025/05/my-entry-32.html)
* [2025-06-14, 14:35:10](https://news.ycombinator.com/item?id=44276692) - [A Rural Public Transit Odyssey](https://shagbark.substack.com/p/a-rural-public-transit-odyssey)
* [2025-06-14, 10:57:00](https://soylentnews.org/article.pl?sid=25/06/13/0159230&amp;from=rss) - [Climate Change Is Coming For Your Cheese](https://soylentnews.org/article.pl?sid=25/06/13/0159230&amp;from=rss)
* [2025-06-14, 06:12:00](https://soylentnews.org/article.pl?sid=25/06/13/0152245&amp;from=rss) - [Mistral Releases a Vibe Coding Client, Mistral Code](https://soylentnews.org/article.pl?sid=25/06/13/0152245&amp;from=rss)
* [2025-06-14, 01:25:00](https://soylentnews.org/article.pl?sid=25/06/13/0146252&amp;from=rss) - [Vital Chipmaking Software Access Restored to China After High-Level Call Between Trump/Xi Jinping](https://soylentnews.org/article.pl?sid=25/06/13/0146252&amp;from=rss)
* [2025-06-13, 20:41:00](https://soylentnews.org/article.pl?sid=25/06/13/0143245&amp;from=rss) - [The Federal Government in the Age of Artificial Intelligence](https://soylentnews.org/article.pl?sid=25/06/13/0143245&amp;from=rss)
* [2025-06-13, 20:04:03](https://news.ycombinator.com/item?id=44271760) - [After millions of years, why are carnivorous plants still so small?](https://www.smithsonianmag.com/articles/carnivorous-plants-have-been-trapping-animals-for-millions-of-years-so-why-have-they-never-grown-larger-180986708/)
* [2025-06-13, 15:58:00](https://soylentnews.org/article.pl?sid=25/06/13/0135229&amp;from=rss) - [Starlink Shut Down on United Regional Jets - Reports of Radio Interference on Embraer E175](https://soylentnews.org/article.pl?sid=25/06/13/0135229&amp;from=rss)
* [2025-06-13, 11:13:00](https://soylentnews.org/article.pl?sid=25/06/13/0124202&amp;from=rss) - [Google Brute-Force Attack Exposes Phone Numbers in Minutes](https://soylentnews.org/article.pl?sid=25/06/13/0124202&amp;from=rss)
* [2025-06-13, 06:29:00](https://soylentnews.org/article.pl?sid=25/06/12/159242&amp;from=rss) - [1.5Tb of James Webb Space Telescope Data Dumped On The Internet - New Searchable Database](https://soylentnews.org/article.pl?sid=25/06/12/159242&amp;from=rss)
* [2025-06-13, 01:43:00](https://soylentnews.org/article.pl?sid=25/06/12/075226&amp;from=rss) - [Making Hydrogen With Soda Cans and Seawater](https://soylentnews.org/article.pl?sid=25/06/12/075226&amp;from=rss)
