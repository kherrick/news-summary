# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Innovations and Announcements

* [CES 2026: Taking the Lids Off AMD's Venice and MI400 SoCs](https://chipsandcheese.com/p/ces-2026-taking-the-lids-off-amds) ([comments](https://news.ycombinator.com/item?id=46519326))

* [Nvidia's New G-Sync Pulsar Monitors Target Motion Blur at the Human Retina Level](https://tech.slashdot.org/story/26/01/06/1859211/nvidias-new-g-sync-pulsar-monitors-target-motion-blur-at-the-human-retina-level?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=46515936))

* [Lego Unveils Smart Bricks, Its 'Most Significant Evolution' in 50 years](https://tech.slashdot.org/story/26/01/06/1842257/lego-unveils-smart-bricks-its-most-significant-evolution-in-50-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=46515936))

* [HarperCollins Will Use AI To Translate Harlequin Romance Novels](https://news.slashdot.org/story/26/01/06/1624238/harpercollins-will-use-ai-to-translate-harlequin-romance-novels?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=46515936))

* [Hyundai and Boston Dynamics Unveil Humanoid Robot Atlas At CES](https://hardware.slashdot.org/story/26/01/06/0420253/hyundai-and-boston-dynamics-unveil-humanoid-robot-atlas-at-ces?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=46515936))

## Scientific Research and Discoveries

* [Study Casts Doubt on Potential For Life on Jupiter's Moon Europa](https://science.slashdot.org/story/26/01/06/1913207/study-casts-doubt-on-potential-for-life-on-jupiters-moon-europa?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=46519326))

* [Hierarchical Autoregressive Modeling for Memory-Efficient Language Generation](https://arxiv.org/abs/2512.20687) ([comments](https://news.ycombinator.com/item?id=46515987))

* [Mystery Solved: Scientists Discover Why Colorectal Cancer Defies Immune System Rules](https://soylentnews.org/article.pl?sid=26/01/03/0133238&amp;from=rss) ([comments](https://news.ycombinator.com/item?id=46515936))

* [Comparing AI agents to cybersecurity professionals in real-world pen testing](https://arxiv.org/abs/2512.09882) ([comments](https://news.ycombinator.com/item?id=46515936))

## Open Source and Developer Utilities

* [High-Performance DBMSs with io_uring: When and How to use it](https://arxiv.org/abs/2512.04859) ([comments](https://news.ycombinator.com/item?id=46517319))

* [Show HN: Prism.Tools – Free and privacy-focused developer utilities](https://blgardner.github.io/prism.tools/) ([comments](https://news.ycombinator.com/item?id=46511469))

* [Show HN: Mantic.sh – A structural code search engine for AI agents](https://github.com/marcoaapfortes/Mantic.sh) ([comments](https://news.ycombinator.com/item?id=46512182))

* [I switched from VSCode to Zed](https://tenthousandmeters.com/blog/i-switched-from-vscode-to-zed/) ([comments](https://news.ycombinator.com/item?id=46515936))

## Cultural and Social Dynamics

* [Many Schools Don't Think Students Can Read Full Novels Anymore](https://news.slashdot.org/story/26/01/06/1614223/many-schools-dont-think-students-can-read-full-novels-anymore?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=46515936))

* [Video Game Websites in the early 00s](https://www.webdesignmuseum.org/exhibitions/video-game-websites-in-the-early-00s) ([comments](https://news.ycombinator.com/item?id=46516559))

* [Office Is Now 'Microsoft 365 Copilot App'](https://slashdot.org/story/26/01/06/1313225/microsoft-office-is-now-microsoft-365-copilot-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=46515936))

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

* [2026-01-06, 21:46:04](https://news.ycombinator.com/item?id=46519326) - [CES 2026: Taking the Lids Off AMD&apos;s Venice and MI400 SoCs](https://chipsandcheese.com/p/ces-2026-taking-the-lids-off-amds)
* [2026-01-06, 21:44:37](https://news.ycombinator.com/item?id=46519303) - [Laylo (YC S20) – Head of Growth (Organic and Partners and Loops and AI) – Remote US](https://www.ycombinator.com/companies/laylo/jobs/ZtLHRXe-head-of-growth)
* [2026-01-06, 21:23:07](https://news.ycombinator.com/item?id=46518996) - [Comparing AI agents to cybersecurity professionals in real-world pen testing](https://arxiv.org/abs/2512.09882)
* [2026-01-06, 21:22:00](https://science.slashdot.org/story/26/01/06/1913207/study-casts-doubt-on-potential-for-life-on-jupiters-moon-europa?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Study Casts Doubt on Potential For Life on Jupiter&apos;s Moon Europa](https://science.slashdot.org/story/26/01/06/1913207/study-casts-doubt-on-potential-for-life-on-jupiters-moon-europa?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-06, 21:10:47](https://news.ycombinator.com/item?id=46518804) - [Oral microbiome sequencing after taking probiotics](https://blog.booleanbiotech.com/oral-microbiome-biogaia)
* [2026-01-06, 20:42:00](https://tech.slashdot.org/story/26/01/06/1859211/nvidias-new-g-sync-pulsar-monitors-target-motion-blur-at-the-human-retina-level?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia&apos;s New G-Sync Pulsar Monitors Target Motion Blur at the Human Retina Level](https://tech.slashdot.org/story/26/01/06/1859211/nvidias-new-g-sync-pulsar-monitors-target-motion-blur-at-the-human-retina-level?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-06, 20:39:36](https://lobste.rs/s/b0sfwb/high_performance_dbmss_with_io_uring_when) - [High-Performance DBMSs with io_uring: When and How to use it](https://arxiv.org/abs/2512.04859)
* [2026-01-06, 20:24:45](https://news.ycombinator.com/item?id=46518129) - [Calling All Hackers: How money works (2024)](https://phrack.org/issues/71/17)
* [2026-01-06, 20:22:43](https://news.ycombinator.com/item?id=46518106) - [Show HN: Finding similarities in New Yorker covers](https://shoplurker.com/labs/newyorker-covers/)
* [2026-01-06, 20:01:00](https://tech.slashdot.org/story/26/01/06/1842257/lego-unveils-smart-bricks-its-most-significant-evolution-in-50-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Lego Unveils Smart Bricks, Its &apos;Most Significant Evolution&apos; in 50 years](https://tech.slashdot.org/story/26/01/06/1842257/lego-unveils-smart-bricks-its-most-significant-evolution-in-50-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-06, 19:50:35](https://news.ycombinator.com/item?id=46517636) - [Self hosting my media library with Jellyfin and Wireguard on Hetzner](https://layandreas.github.io/personal-blog/posts/how-spotify-made-me-self-host/)
* [2026-01-06, 19:38:32](https://news.ycombinator.com/item?id=46517458) - [Stop Doom Scrolling, Start Doom Coding: Build via the terminal from your phone](https://github.com/rberg27/doom-coding)
* [2026-01-06, 19:29:15](https://news.ycombinator.com/item?id=46517319) - [High-Performance DBMSs with io_uring: When and How to use it](https://arxiv.org/abs/2512.04859)
* [2026-01-06, 19:26:47](https://lobste.rs/s/uaaaao/diffs_js_library_for_rendering_diffs) - [Diffs - JS library for rendering diffs](https://diffs.com)
* [2026-01-06, 19:21:00](https://news.slashdot.org/story/26/01/06/1814242/elite-colleges-are-back-at-the-top-of-the-list-for-company-recruiters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Elite Colleges Are Back at the Top of the List For Company Recruiters](https://news.slashdot.org/story/26/01/06/1814242/elite-colleges-are-back-at-the-top-of-the-list-for-company-recruiters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-06, 19:05:56](https://lobste.rs/s/xa27z2/postgresql_scripting_tips) - [PostgreSQL Scripting Tips](https://www.pgrs.net/2026/01/06/postgresql-scripting-tips/)
* [2026-01-06, 18:42:00](https://news.slashdot.org/story/26/01/06/1624238/harpercollins-will-use-ai-to-translate-harlequin-romance-novels?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [HarperCollins Will Use AI To Translate Harlequin Romance Novels](https://news.slashdot.org/story/26/01/06/1624238/harpercollins-will-use-ai-to-translate-harlequin-romance-novels?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-06, 18:39:21](https://news.ycombinator.com/item?id=46516559) - [Video Game Websites in the early 00s](https://www.webdesignmuseum.org/exhibitions/video-game-websites-in-the-early-00s)
* [2026-01-06, 18:19:00](https://soylentnews.org/article.pl?sid=26/01/03/0139235&amp;from=rss) - [Strengthening Asphalt Roads With a Unique Green Ingredient: Algae](https://soylentnews.org/article.pl?sid=26/01/03/0139235&amp;from=rss)
* [2026-01-06, 18:11:51](https://news.ycombinator.com/item?id=46516137) - [Passing of Joe Mancuso author of Masonite (Python web framework)](https://github.com/MasoniteFramework/masonite/discussions/853)
* [2026-01-06, 18:02:01](https://news.ycombinator.com/item?id=46515987) - [Hierarchical Autoregressive Modeling for Memory-Efficient Language Generation](https://arxiv.org/abs/2512.20687)
* [2026-01-06, 18:01:00](https://news.slashdot.org/story/26/01/06/1614223/many-schools-dont-think-students-can-read-full-novels-anymore?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Many Schools Don&apos;t Think Students Can Read Full Novels Anymore](https://news.slashdot.org/story/26/01/06/1614223/many-schools-dont-think-students-can-read-full-novels-anymore?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-06, 18:00:27](https://news.ycombinator.com/item?id=46515948) - [Locating a Photo of a Vehicle in 30 Seconds with GeoSpy](https://geospy.ai/blog/locating-a-photo-of-a-vehicle-in-30-seconds-with-geospy)
* [2026-01-06, 17:59:41](https://news.ycombinator.com/item?id=46515936) - [Dude, where&apos;s my supersonic jet?](https://rationaloptimistsociety.substack.com/p/dude-wheres-my-supersonic-jet)
* [2026-01-06, 17:49:56](https://news.ycombinator.com/item?id=46515777) - [Launch HN: Tamarind Bio (YC W24) – AI Inference Provider for Drug Discovery](https://news.ycombinator.com/item?id=46515777)
* [2026-01-06, 17:45:37](https://news.ycombinator.com/item?id=46515696) - [Opus 4.5 is not the normal AI agent experience that I have had thus far](https://burkeholland.github.io/posts/opus-4-5-change-everything/)
* [2026-01-06, 17:33:50](https://lobste.rs/s/zly6jq/self_exchange_leaves_us_valid) - [Self-exchange leaves us in a valid but unspecified state](https://aatango.codeberg.page/cpp-self-exchange.html)
* [2026-01-06, 17:20:00](https://tech.slashdot.org/story/26/01/06/1353214/uk-urged-to-unplug-from-us-tech-giants-as-digital-sovereignty-fears-grow?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Urged To Unplug From US Tech Giants as Digital Sovereignty Fears Grow](https://tech.slashdot.org/story/26/01/06/1353214/uk-urged-to-unplug-from-us-tech-giants-as-digital-sovereignty-fears-grow?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-06, 17:00:30](https://lobste.rs/s/uqsbvk/zero_heap_allocation_http_server_using) - [Zero heap allocation HTTP server using OxCaml](https://github.com/avsm/httpz)
* [2026-01-06, 16:59:44](https://news.ycombinator.com/item?id=46514913) - [Volkswagen Brings Back Physical Buttons](https://www.caranddriver.com/news/a69916699/volkswagen-interior-physical-buttons-return/)
* [2026-01-06, 16:53:27](https://news.ycombinator.com/item?id=46514816) - [Why Big Companies Keep Failing: The Stack Fallacy (2016)](https://techcrunch.com/2016/01/18/why-big-companies-keep-failing-the-stack-fallacy/)
* [2026-01-06, 16:52:56](https://news.ycombinator.com/item?id=46514807) - [Loongarch Improvements with Box64](https://box86.org/2026/01/new-box64-v0-4-0-released/)
* [2026-01-06, 16:46:13](https://news.ycombinator.com/item?id=46514692) - [Why is the Gmail app 700 MB?](https://akr.am/blog/posts/why-is-the-gmail-app-700-mb)
* [2026-01-06, 16:45:42](https://news.ycombinator.com/item?id=46514677) - [Vienam bans unskippable ads](https://saigoneer.com/vietnam-news/28652-vienam-bans-unskippable-ads,-requires-skip-button-to-appear-after-5-seconds)
* [2026-01-06, 16:41:00](https://slashdot.org/story/26/01/06/1420211/hp-pushes-pc-in-a-keyboard-for-businesses-with-hot-desks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [HP Pushes PC-in-a-Keyboard for Businesses With Hot Desks](https://slashdot.org/story/26/01/06/1420211/hp-pushes-pc-in-a-keyboard-for-businesses-with-hot-desks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-06, 16:01:00](https://tech.slashdot.org/story/26/01/06/1359221/ny-orders-apps-to-lie-about-social-media-addiction-will-lose-in-court?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;NY Orders Apps To Lie About Social Media Addiction, Will Lose In Court&apos;](https://tech.slashdot.org/story/26/01/06/1359221/ny-orders-apps-to-lie-about-social-media-addiction-will-lose-in-court?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-06, 15:23:17](https://lobste.rs/s/mg7vml/gemini_protocol_stats) - [Gemini Protocol Stats](https://www.obsessivefacts.com/gemini-proxy?uri=gemini%3A%2F%2Fgemini.bortzmeyer.org%2Fsoftware%2Flupa%2Fstats.gmi)
* [2026-01-06, 15:20:00](https://tech.slashdot.org/story/26/01/06/1444201/razer-thinks-youd-rather-have-ai-headphones-instead-of-glasses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Razer Thinks You&apos;d Rather Have AI Headphones Instead of Glasses](https://tech.slashdot.org/story/26/01/06/1444201/razer-thinks-youd-rather-have-ai-headphones-instead-of-glasses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-06, 15:10:00](https://lobste.rs/s/5ymlmt/h_neurons_on_existence_impact_origin) - [H-Neurons: On the Existence, Impact, and Origin of Hallucination-Associated Neurons in LLMs](https://arxiv.org/pdf/2512.01797)
* [2026-01-06, 14:40:00](https://slashdot.org/story/26/01/06/1313225/microsoft-office-is-now-microsoft-365-copilot-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Office Is Now &apos;Microsoft 365 Copilot App&apos;](https://slashdot.org/story/26/01/06/1313225/microsoft-office-is-now-microsoft-365-copilot-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-06, 14:38:19](https://lobste.rs/s/gszn6p/there_were_bgp_anomalies_during) - [There Were BGP Anomalies During The Venezuela Blackout](https://loworbitsecurity.com/radar/radar16/)
* [2026-01-06, 14:00:00](https://tech.slashdot.org/story/26/01/06/0915233/stratechery-pushes-back-on-ai-capital-dystopia-predictions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Stratechery Pushes Back on AI Capital Dystopia Predictions](https://tech.slashdot.org/story/26/01/06/0915233/stratechery-pushes-back-on-ai-capital-dystopia-predictions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-06, 13:48:27](https://news.ycombinator.com/item?id=46512182) - [Show HN: Mantic.sh – A structural code search engine for AI agents](https://github.com/marcoaapfortes/Mantic.sh)
* [2026-01-06, 13:37:00](https://soylentnews.org/article.pl?sid=26/01/03/0137246&amp;from=rss) - [Venus Cloud Research Highlights Value of Combining Light and Polarization Measurements](https://soylentnews.org/article.pl?sid=26/01/03/0137246&amp;from=rss)
* [2026-01-06, 13:01:06](https://lobste.rs/s/rvgvgj/best_line_length_is_88) - [The Best Line Length is 88](https://blog.glyph.im/2025/08/the-best-line-length.html)
* [2026-01-06, 13:00:00](https://tech.slashdot.org/story/26/01/06/0437256/vw-brings-back-physical-buttons?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [VW Brings Back Physical Buttons](https://tech.slashdot.org/story/26/01/06/0437256/vw-brings-back-physical-buttons?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-06, 12:33:49](https://news.ycombinator.com/item?id=46511469) - [Show HN: Prism.Tools – Free and privacy-focused developer utilities](https://blgardner.github.io/prism.tools/)
* [2026-01-06, 12:09:38](https://lobste.rs/s/cvk3lx/adding_insular_script_like_it_s_1626) - [Adding insular script like it&apos;s 1626](https://djmurphy.net/blog/clo-gaelach/)
* [2026-01-06, 12:06:02](https://lobste.rs/s/ntvlee/easy_horizontal_scrollbar_fixes_for_your) - [Easy (Horizontal Scrollbar) Fixes for Your Blog CSS](https://aartaka.me/easy-fixes.html)
* [2026-01-06, 11:01:13](https://lobste.rs/s/eflriy/javascript_s_for_loops_are_actually_fast) - [JavaScript&apos;s for-of loops are actually fast](https://waspdev.com/articles/2026-01-01/javascript-for-of-loops-are-actually-fast)
* [2026-01-06, 10:00:00](https://hardware.slashdot.org/story/26/01/06/0428249/dell-admits-it-made-a-huge-mistake-when-it-abandoned-xps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Dell Admits It Made a Huge Mistake When It Abandoned XPS](https://hardware.slashdot.org/story/26/01/06/0428249/dell-admits-it-made-a-huge-mistake-when-it-abandoned-xps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-06, 08:57:48](https://lobste.rs/s/eqcmik/no_microsoft_office_didn_t_just_get) - [No, Microsoft Office didn&apos;t just get renamed to Microsoft 365 Copilot](https://www.howtogeek.com/no-microsoft-office-didnt-just-get-renamed-to-microsoft-365-copilot/)
* [2026-01-06, 08:44:00](https://soylentnews.org/article.pl?sid=26/01/03/0135207&amp;from=rss) - [How Talking Slows Eye Movements Behind the Wheel](https://soylentnews.org/article.pl?sid=26/01/03/0135207&amp;from=rss)
* [2026-01-06, 07:59:56](https://lobste.rs/s/ep8rbp/i_switched_from_vscode_zed) - [I switched from VSCode to Zed](https://tenthousandmeters.com/blog/i-switched-from-vscode-to-zed/)
* [2026-01-06, 07:21:43](https://lobste.rs/s/zt9gsb/bgp_2025) - [BGP in 2025](https://www.potaroo.net/ispcol/2026-01/bgp2025.html)
* [2026-01-06, 07:00:00](https://hardware.slashdot.org/story/26/01/06/0420253/hyundai-and-boston-dynamics-unveil-humanoid-robot-atlas-at-ces?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hyundai and Boston Dynamics Unveil Humanoid Robot Atlas At CES](https://hardware.slashdot.org/story/26/01/06/0420253/hyundai-and-boston-dynamics-unveil-humanoid-robot-atlas-at-ces?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-06, 04:28:12](https://lobste.rs/s/9c952c/minimal_keyboard_key_effect_with_css) - [A minimal keyboard key effect with CSS](https://pjg1.site/kbd-css.html)
* [2026-01-06, 04:01:00](https://soylentnews.org/article.pl?sid=26/01/03/0133238&amp;from=rss) - [Mystery Solved: Scientists Discover Why Colorectal Cancer Defies Immune System Rules](https://soylentnews.org/article.pl?sid=26/01/03/0133238&amp;from=rss)
* [2026-01-06, 03:54:19](https://lobste.rs/s/2kheyy/i_o_is_no_longer_bottleneck_2022) - [I/O is no longer the bottleneck? (2022)](https://stoppels.ch/2022/11/27/io-is-no-longer-the-bottleneck.html)
* [2026-01-06, 03:13:41](https://lobste.rs/s/eb73xx/so_you_want_chunk_really_fast) - [so, you want to chunk really fast?](https://minha.sh/posts/so,-you-want-to-chunk-really-fast)
* [2026-01-06, 03:07:08](https://lobste.rs/s/a8x19t/why_markdown_emphasis_fails_cjk_deep_dive) - [Why Markdown emphasis fails in CJK: A deep dive into CommonMark&apos;s delimiter rules](https://hackers.pub/@yurume/019b912a-cc3b-7e45-9227-d08f0d1eafe8)
* [2026-01-05, 23:19:00](https://soylentnews.org/article.pl?sid=26/01/02/1627244&amp;from=rss) - [The Worst CPUs Ever Made](https://soylentnews.org/article.pl?sid=26/01/02/1627244&amp;from=rss)
* [2026-01-05, 20:30:43](https://lobste.rs/s/exv2eq/go_sum_is_not_lockfile) - [go.sum Is Not a Lockfile](https://words.filippo.io/gosum/)
* [2026-01-05, 18:37:00](https://soylentnews.org/article.pl?sid=26/01/02/1618258&amp;from=rss) - [Parkinson&apos;s is the Canary in the Coal Mine Warning Us That Our Environment is Sick](https://soylentnews.org/article.pl?sid=26/01/02/1618258&amp;from=rss)
* [2026-01-05, 18:10:50](https://lobste.rs/s/7d6b5i/go_1_26_interactive_tour) - [Go 1.26 interactive tour](https://antonz.org/go-1-26/)
* [2026-01-05, 17:32:56](https://lobste.rs/s/l9gkjo/field_guide_sandboxes_for_ai) - [A field guide to sandboxes for AI](https://www.luiscardoso.dev/blog/sandboxes-for-ai)
* [2026-01-05, 16:30:38](https://lobste.rs/s/gykpyi/who_owns_memory_part_3_how_big_is_your_type) - [Who Owns the Memory? Part 3: How Big Is your Type?](https://lukefleed.xyz/posts/who-owns-the-memory-pt3/)
* [2026-01-05, 13:53:00](https://soylentnews.org/politics/article.pl?sid=26/01/02/1617210&amp;from=rss) - [U.S. Allows TSMC to Import Chipmaking Equipment to its China Fabs](https://soylentnews.org/politics/article.pl?sid=26/01/02/1617210&amp;from=rss)
* [2026-01-05, 13:28:01](https://lobste.rs/s/2gvk2r/it_s_hard_justify_tahoe_icons) - [It’s hard to justify Tahoe icons](https://tonsky.me/blog/tahoe-icons/)
* [2026-01-05, 10:44:51](https://lobste.rs/s/bnovba/databases_2025_year_review) - [Databases in 2025: A Year in Review](https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html)
* [2026-01-05, 09:03:00](https://soylentnews.org/article.pl?sid=26/01/02/1614239&amp;from=rss) - [How Do We Hold Companies Accountable for \&quot;Do as I Say, Not as I Do\&quot; Security Practices?](https://soylentnews.org/article.pl?sid=26/01/02/1614239&amp;from=rss)
* [2026-01-05, 04:19:00](https://soylentnews.org/article.pl?sid=26/01/02/1613215&amp;from=rss) - [In 1962, a Geologist Went Into a Cave. 2 Months Later, He&apos;d Accidentally Invented a New Field](https://soylentnews.org/article.pl?sid=26/01/02/1613215&amp;from=rss)
* [2026-01-04, 23:36:00](https://soylentnews.org/article.pl?sid=26/01/02/0549225&amp;from=rss) - [He Made Beer That&apos;s Also a Vaccine. Now Controversy is Brewing](https://soylentnews.org/article.pl?sid=26/01/02/0549225&amp;from=rss)
* [2026-01-04, 18:52:00](https://soylentnews.org/article.pl?sid=26/01/02/0544211&amp;from=rss) - [HP-UX Hits End-of-Life](https://soylentnews.org/article.pl?sid=26/01/02/0544211&amp;from=rss)
* [2026-01-04, 14:06:00](https://soylentnews.org/article.pl?sid=26/01/02/018201&amp;from=rss) - [Americans Lost $333 Million to Bitcoin ATM Fraud in 2025](https://soylentnews.org/article.pl?sid=26/01/02/018201&amp;from=rss)
* [2026-01-04, 09:22:00](https://soylentnews.org/article.pl?sid=26/01/02/016205&amp;from=rss) - [Large Hadron Collider Upgrade](https://soylentnews.org/article.pl?sid=26/01/02/016205&amp;from=rss)
* [2026-01-04, 04:34:00](https://soylentnews.org/article.pl?sid=26/01/02/010257&amp;from=rss) - [Ozempic is Changing the Foods Americans Buy](https://soylentnews.org/article.pl?sid=26/01/02/010257&amp;from=rss)
* [2026-01-03, 23:48:00](https://soylentnews.org/article.pl?sid=26/01/02/0059210&amp;from=rss) - [Scientists Outline How to Control Light at the Atomic Scale Using Polaritons](https://soylentnews.org/article.pl?sid=26/01/02/0059210&amp;from=rss)
* [2026-01-03, 23:06:55](https://news.ycombinator.com/item?id=46482685) - [Show HN: Foundertrace – chain of YC startups founded by its employees](https://foundertrace.com/)
* [2026-01-03, 19:04:00](https://soylentnews.org/article.pl?sid=26/01/02/0056200&amp;from=rss) - [UK Company Shoots a 1,000-Degree Furnace Into Space to Study Off-World Chip Manufacturing](https://soylentnews.org/article.pl?sid=26/01/02/0056200&amp;from=rss)
* [2026-01-03, 14:19:00](https://soylentnews.org/article.pl?sid=26/01/02/0051241&amp;from=rss) - [Start-Up Proposes Scaled Up AI Data Center &apos;Active Radio Cable&apos; Connectivity](https://soylentnews.org/article.pl?sid=26/01/02/0051241&amp;from=rss)
* [2026-01-03, 09:30:00](https://soylentnews.org/article.pl?sid=26/01/02/0043212&amp;from=rss) - [Thousands of Servers Exposed as MongoBleed Vulnerability Exploited](https://soylentnews.org/article.pl?sid=26/01/02/0043212&amp;from=rss)
* [2026-01-03, 04:45:00](https://soylentnews.org/article.pl?sid=26/01/02/0038241&amp;from=rss) - [QNX Releases New Desktop-Focused Image: QNX 8.0 With Xfce on Wayland](https://soylentnews.org/article.pl?sid=26/01/02/0038241&amp;from=rss)
* [2026-01-03, 00:04:00](https://soylentnews.org/article.pl?sid=25/12/31/194236&amp;from=rss) - [For Computational Devices, Talk Isn&apos;t Cheap](https://soylentnews.org/article.pl?sid=25/12/31/194236&amp;from=rss)
* [2026-01-02, 23:11:32](https://news.ycombinator.com/item?id=46470659) - [How HTML changes in ePub](https://www.htmhell.dev/adventcalendar/2025/11/)
* [2026-01-02, 19:18:00](https://soylentnews.org/article.pl?sid=25/12/31/190247&amp;from=rss) - [FDA Officially Confirms Kava is a Food Under Federal Law](https://soylentnews.org/article.pl?sid=25/12/31/190247&amp;from=rss)
* [2026-01-02, 17:04:03](https://news.ycombinator.com/item?id=46466843) - [I wanted a camera that doesn&apos;t exist – so I built it](https://medium.com/@cristi.baluta/i-wanted-a-camera-that-doesnt-exist-so-i-built-it-5f9864533eb7)
* [2026-01-02, 14:35:00](https://soylentnews.org/article.pl?sid=25/12/31/1856202&amp;from=rss) - [Irish Gov’t to Push for European Union to Ban Anonymous Social Media Accounts](https://soylentnews.org/article.pl?sid=25/12/31/1856202&amp;from=rss)
* [2026-01-02, 09:48:00](https://soylentnews.org/article.pl?sid=25/12/31/1850201&amp;from=rss) - [A Built-in Odometer: New Study Reveals How the Brain Measures Distance](https://soylentnews.org/article.pl?sid=25/12/31/1850201&amp;from=rss)
* [2026-01-02, 07:04:14](https://news.ycombinator.com/item?id=46462188) - [Show HN: I built \&quot;Google\&quot; for searching Shadcn blocks on the web](https://shoogle.dev/)
* [2026-01-02, 05:05:00](https://soylentnews.org/article.pl?sid=25/12/31/1846257&amp;from=rss) - [39C3: Multiple Vulnerabilities in GnuPG and Other Cryptographic Tools](https://soylentnews.org/article.pl?sid=25/12/31/1846257&amp;from=rss)
* [2026-01-02, 00:21:00](https://soylentnews.org/article.pl?sid=25/12/31/1843231&amp;from=rss) - [Funding Agencies Can End Profit-First Science Publishing](https://soylentnews.org/article.pl?sid=25/12/31/1843231&amp;from=rss)
