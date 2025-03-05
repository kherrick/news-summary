# [News Summary](https://kherrick.github.io/news-summary/)

## Technological Innovations

* [Bayleaf: Building a low-profile wireless split keyboard](https://www.graz.io/articles/bayleaf-wireless-keyboard) explores the design and functionality of a compact, wireless keyboard aimed at enhancing typing ergonomics. [Article](https://lobste.rs/s/i0c3bz/bayleaf_building_low_profile_wireless).

* [Melbourne startup launches 'biological computer' made of human brain cells](https://www.abc.net.au/news/science/2025-03-05/cortical-labs-neuron-brain-chip/104996484) highlights a groundbreaking innovation integrating human neurons for computational tasks. [Hacker News](https://news.ycombinator.com/item?id=43261218).

* [Google Releases SpeciesNet, an AI Model Designed To Identify Wildlife](https://tech.slashdot.org/story/25/03/04/0321215/google-releases-speciesnet-an-ai-model-designed-to-identify-wildlife) introduces an AI system to aid wildlife conservation by identifying species. [Slashdot](https://tech.slashdot.org/story/25/03/04/0321215/google-releases-speciesnet-an-ai-model-designed-to-identify-wildlife).

* [Meet Rayhunter: A New Open Source Tool from EFF to Detect Cellular Spying](https://www.eff.org/deeplinks/2025/03/meet-rayhunter-new-open-source-tool-eff-detect-cellular-spying) details a tool to discover and counteract cellular surveillance systems. [Lobsters](https://lobste.rs/s/8idf4d/meet_rayhunter_new_open_source_tool_from).

## AI, Law, and Ethics

* [YouTube Warns Creators an AI-Generated Video of Its CEO is Being Used For Phishing Scams](https://news.slashdot.org/story/25/03/04/220243/youtube-warns-creators-an-ai-generated-video-of-its-ceo-is-being-used-for-phishing-scams?utm_source=rss1.0mainlinkanon&utm_medium=feed) sheds light on malicious exploitations of AI to deceive content creators. [Slashdot](https://news.slashdot.org/story/25/03/04/220243/youtube-warns-creators-an-ai-generated-video-of-its-ceo-is-being-used-for-phishing-scams?utm_source=rss1.0mainlinkanon&utm_medium=feed).

* [Judges Are Fed Up With Lawyers Using AI That Hallucinate Court Cases](https://yro.slashdot.org/story/25/03/04/2139203/judges-are-fed-up-with-lawyers-using-ai-that-hallucinate-court-cases?utm_source=rss1.0mainlinkanon&utm_medium=feed) discusses legal challenges and concerns over inaccurate AI-generated legal briefs. [Slashdot](https://yro.slashdot.org/story/25/03/04/2139203/judges-are-fed-up-with-lawyers-using-ai-that-hallucinate-court-cases?utm_source=rss1.0mainlinkanon&utm_medium=feed).

* [Show HN: Time travel debugging AI for more reliable vibe coding](https://nut.new) introduces a novel AI tool for debugging systems more effectively. [Hacker News](https://news.ycombinator.com/item?id=43258585).

* [Learn How to Break AES](https://davidwong.fr/blockbreakers/) explores cryptography vulnerabilities and methods to understand encryption systems. [Hacker News](https://news.ycombinator.com/item?id=43257583).

## Scientific Discoveries and Research

* [Scientists Create 'Woolly Mice'](https://science.slashdot.org/story/25/03/04/1624239/scientists-create-woolly-mice?utm_source=rss1.0mainlinkanon&utm_medium=feed) reveals genetic engineering advancements to produce mice with wool-like fur for research. [Slashdot](https://science.slashdot.org/story/25/03/04/1624239/scientists-create-woolly-mice?utm_source=rss1.0mainlinkanon&utm_medium=feed).

* [20,000-Year-Old Evidence of Ancient Travois (Sled) Discovered in New Mexico](https://soylentnews.org/article.pl?sid=25/03/03/1354250&from=rss) uncovers archaeological findings shedding light on prehistoric transportation methods. [SoylentNews](https://soylentnews.org/article.pl?sid=25/03/03/1354250&from=rss).

* [The Pentium Contains a Complicated Circuit to Multiply by Three](https://soylentnews.org/article.pl?sid=25/03/03/1359231&from=rss) provides technical insights into unique and seldom-known processor complexities. [SoylentNews](https://soylentnews.org/article.pl?sid=25/03/03/1359231&from=rss).

* [Encoding Hangeul, Koreas writing system](https://brookjeynes.dev/posts/unicode-hangeul/) explains the engineering behind encoding South Korea's native writing into Unicode systems. [Lobsters](https://lobste.rs/s/ct8nua/encoding_hangeul_koreas_writing_system).

## Historic and Cultural Insights

* [The Imaginary Engineer – Karl Hans Janke's Flights of Fancy](https://www.cabinetmagazine.org/issues/29/lee.php) celebrates the visionary designs of an unorthodox engineer. [Hacker News](https://news.ycombinator.com/item?id=43258104).

* [The Tinkerings of Robert Noyce by Tom Wolfe (1983)](https://classic.esquire.com/article/share/58ff278a-21da-4ee4-a446-b7f451b90275) revisits the influential work of the co-inventor of the integrated circuit. [Hacker News](https://news.ycombinator.com/item?id=43230862).

* [Making Flow – Interview with director Gints Zilbalodis —](https://www.blender.org/user-stories/making-flow-an-interview-with-director-gints-zilbalodis/) delves into the artistic vision behind an animated feature. [Lobsters](https://lobste.rs/s/aslonc/making_flow_interview_with_director).

* [An Uneasy Propaganda Alliance](https://www.historytoday.com/archive/history-matters/uneasy-propaganda-alliance) explores historical collaborations in information dissemination. [Hacker News](https://news.ycombinator.com/item?id=43234457).

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

* [2025-03-05, 00:38:25](https://lobste.rs/s/i0c3bz/bayleaf_building_low_profile_wireless) - [Bayleaf: Building a low-profile wireless split keyboard](https://www.graz.io/articles/bayleaf-wireless-keyboard)
* [2025-03-05, 00:27:34](https://news.ycombinator.com/item?id=43261218) - [Melbourne startup launches 'biological computer' made of human brain cells](https://www.abc.net.au/news/science/2025-03-05/cortical-labs-neuron-brain-chip/104996484)
* [2025-03-05, 00:20:00](https://news.slashdot.org/story/25/03/04/220243/youtube-warns-creators-an-ai-generated-video-of-its-ceo-is-being-used-for-phishing-scams?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [YouTube Warns Creators an AI-Generated Video of Its CEO is Being Used For Phishing Scams](https://news.slashdot.org/story/25/03/04/220243/youtube-warns-creators-an-ai-generated-video-of-its-ceo-is-being-used-for-phishing-scams?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-04, 23:48:16](https://lobste.rs/s/cbytov/lean_4_release_v4_17_0) - [Lean 4, release v4.17.0](https://github.com/leanprover/lean4/releases/tag/v4.17.0)
* [2025-03-04, 23:40:00](https://slashdot.org/story/25/03/04/2158224/opera-adds-an-automated-ai-agent-to-its-browser?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Opera Adds an Automated AI Agent To Its Browser](https://slashdot.org/story/25/03/04/2158224/opera-adds-an-automated-ai-agent-to-its-browser?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-04, 23:03:11](https://lobste.rs/s/ct8nua/encoding_hangeul_koreas_writing_system) - [Encoding Hangeul, Koreas writing system](https://brookjeynes.dev/posts/unicode-hangeul/)
* [2025-03-04, 23:00:00](https://hardware.slashdot.org/story/25/03/04/2151220/brother-accused-of-locking-down-third-party-printer-ink-cartridges-via-forced-firmware-updates?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Brother Accused of Locking Down Third-Party Printer Ink Cartridges Via Forced Firmware Updates](https://hardware.slashdot.org/story/25/03/04/2151220/brother-accused-of-locking-down-third-party-printer-ink-cartridges-via-forced-firmware-updates?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-04, 22:20:00](https://slashdot.org/story/25/03/04/2144219/automattic-ceo-matt-mullenweg-talks-succession---i-dont-want-to-pass-it-to-a-committee?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Automattic CEO Matt Mullenweg Talks Succession - 'I Don't Want To Pass It To a Committee'](https://slashdot.org/story/25/03/04/2144219/automattic-ceo-matt-mullenweg-talks-succession---i-dont-want-to-pass-it-to-a-committee?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-04, 21:41:48](https://lobste.rs/s/igqzdo/tailscale_is_pretty_useful) - [Tailscale is pretty useful](https://blog.6nok.org/tailscale-is-pretty-useful/)
* [2025-03-04, 21:40:00](https://yro.slashdot.org/story/25/03/04/2139203/judges-are-fed-up-with-lawyers-using-ai-that-hallucinate-court-cases?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Judges Are Fed Up With Lawyers Using AI That Hallucinate Court Cases](https://yro.slashdot.org/story/25/03/04/2139203/judges-are-fed-up-with-lawyers-using-ai-that-hallucinate-court-cases?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-04, 21:14:56](https://news.ycombinator.com/item?id=43259862) - [Show HN: ArchGW – An open-source intelligent proxy server for prompts](https://github.com/katanemo/archgw)
* [2025-03-04, 21:05:42](https://lobste.rs/s/gp3ch3/why_fastdoom_is_fast) - [Why fastDOOM is fast](https://fabiensanglard.net/fastdoom/index.html)
* [2025-03-04, 20:48:00](https://soylentnews.org/article.pl?sid=25/03/03/1359231&from=rss) - [The Pentium Contains a Complicated Circuit to Multiply by Three](https://soylentnews.org/article.pl?sid=25/03/03/1359231&from=rss)
* [2025-03-04, 20:36:10](https://lobste.rs/s/icz96h/hytradboi_2025_postmortem) - [HYTRADBOI 2025 postmortem](https://www.scattered-thoughts.net/writing/hytradboi-2025-postmortem/)
* [2025-03-04, 19:52:38](https://news.ycombinator.com/item?id=43259182) - [ARC-AGI without pretraining](https://iliao2345.github.io/blog_posts/arc_agi_without_pretraining/arc_agi_without_pretraining.html)
* [2025-03-04, 19:52:00](https://it.slashdot.org/story/25/03/04/1952241/citi-copy-paste-error-almost-sent-6-billion-to-wealth-account?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Citi Copy-Paste Error Almost Sent $6 Billion to Wealth Account](https://it.slashdot.org/story/25/03/04/1952241/citi-copy-paste-error-almost-sent-6-billion-to-wealth-account?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-04, 19:05:43](https://news.ycombinator.com/item?id=43258709) - [Why fastDOOM is fast](https://fabiensanglard.net/fastdoom/index.html)
* [2025-03-04, 18:54:26](https://lobste.rs/s/8idf4d/meet_rayhunter_new_open_source_tool_from) - [Meet Rayhunter: A New Open Source Tool from EFF to Detect Cellular Spying](https://www.eff.org/deeplinks/2025/03/meet-rayhunter-new-open-source-tool-eff-detect-cellular-spying)
* [2025-03-04, 18:53:44](https://news.ycombinator.com/item?id=43258585) - [Show HN: Time travel debugging AI for more reliable vibe coding](https://nut.new)
* [2025-03-04, 18:44:00](https://tech.slashdot.org/story/25/03/04/1842209/australia-with-no-auto-industry-to-protect-is-awash-with-chinese-evs?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Australia, With No Auto Industry To Protect, is Awash With Chinese EVs](https://tech.slashdot.org/story/25/03/04/1842209/australia-with-no-auto-industry-to-protect-is-awash-with-chinese-evs?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-04, 18:12:12](https://news.ycombinator.com/item?id=43258104) - [The Imaginary Engineer – Karl Hans Janke's Flights of Fancy](https://www.cabinetmagazine.org/issues/29/lee.php)
* [2025-03-04, 18:04:16](https://news.ycombinator.com/item?id=43258010) - [Who's Afraid of Tom Wolfe?](https://commonreader.wustl.edu/c/whos-afraid-of-tom-wolfe/)
* [2025-03-04, 18:02:00](https://apple.slashdot.org/story/25/03/04/1743218/apple-launches-legal-challenge-to-uk-back-door-order?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Apple Launches Legal Challenge To UK 'Back Door' Order](https://apple.slashdot.org/story/25/03/04/1743218/apple-launches-legal-challenge-to-uk-back-door-order?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-04, 17:58:30](https://news.ycombinator.com/item?id=43257963) - [Solving SICP](https://lockywolf.wordpress.com/2021/02/08/solving-sicp/)
* [2025-03-04, 17:56:19](https://lobste.rs/s/d29jkm/solving_sicp) - [Solving SICP](https://lockywolf.wordpress.com/2021/02/08/solving-sicp/)
* [2025-03-04, 17:36:23](https://news.ycombinator.com/item?id=43257719) - [Translating natural language to first-order logic for logical fallacy detection](https://arxiv.org/abs/2405.02318)
* [2025-03-04, 17:35:00](https://news.ycombinator.com/item?id=43257704) - [Show HN: Vidformer – Drop-In Acceleration for Cv2 Video Annotation Scripts](https://github.com/ixlab/vidformer)
* [2025-03-04, 17:27:00](https://it.slashdot.org/story/25/03/04/1728200/after-exam-fiasco-california-state-bar-staff-recommend-reverting-to-in-person-exams?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [After Exam Fiasco, California State Bar Staff Recommend Reverting To In-person Exams](https://it.slashdot.org/story/25/03/04/1728200/after-exam-fiasco-california-state-bar-staff-recommend-reverting-to-in-person-exams?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-04, 17:25:51](https://news.ycombinator.com/item?id=43257583) - [Learn How to Break AES](https://davidwong.fr/blockbreakers/)
* [2025-03-04, 17:16:13](https://news.ycombinator.com/item?id=43257473) - [DARPA exploring growing bio structures of \"unprecedented size\" in microgravity](https://sam.gov/opp/426e5868fcf74dd4ada3768b00b09234/view)
* [2025-03-04, 17:08:22](https://lobste.rs/s/1xdrzu/hierarchy_hazard_controls) - [The Hierarchy of Hazard Controls](https://www.hillelwayne.com/post/hoc/)
* [2025-03-04, 17:06:53](https://news.ycombinator.com/item?id=43257358) - [The inspection paradox is everywhere (2015)](http://allendowney.blogspot.com/2015/08/the-inspection-paradox-is-everywhere.html)
* [2025-03-04, 17:04:17](https://news.ycombinator.com/item?id=43257323) - [Launch HN: Enhanced Radar (YC W25) – A safety net for air traffic control](https://news.ycombinator.com/item?id=43257323)
* [2025-03-04, 17:00:34](https://news.ycombinator.com/item?id=43257268) - [Foundry (YC F24) Hiring Founding Engineer to Build an Internet-Scale Web Crawler](https://www.ycombinator.com/companies/foundry/jobs/xtwLIsF-founding-engineer-large-scale-web-scraping-crawling)
* [2025-03-04, 16:56:44](https://lobste.rs/s/7pc24z/triangle_separation) - [Triangle of Separation](https://thoughtbot.com/blog/triangle-of-separation)
* [2025-03-04, 16:40:00](https://science.slashdot.org/story/25/03/04/1624239/scientists-create-woolly-mice?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Scientists Create 'Woolly Mice'](https://science.slashdot.org/story/25/03/04/1624239/scientists-create-woolly-mice?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-04, 16:07:00](https://soylentnews.org/article.pl?sid=25/03/03/1354250&from=rss) - [20,000-Year-Old Evidence of Ancient Travois (Sled) Discovered in New Mexico](https://soylentnews.org/article.pl?sid=25/03/03/1354250&from=rss)
* [2025-03-04, 16:00:00](https://apple.slashdot.org/story/25/03/04/1552204/apple-unveils-ipad-air-with-m3-chip?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Apple Unveils iPad Air With M3 Chip](https://apple.slashdot.org/story/25/03/04/1552204/apple-unveils-ipad-air-with-m3-chip?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-04, 15:56:58](https://news.ycombinator.com/item?id=43256349) - [Satellogic's Open Satellite Feed](https://tech.marksblogg.com/satellogic-open-data-feed.html)
* [2025-03-04, 15:51:36](https://lobste.rs/s/6f8cww/web_should_be_conversation) - [The Web Should Be A Conversation](https://andregarzia.com/2025/03/the-web-should-be-a-conversation.html)
* [2025-03-04, 15:42:38](https://lobste.rs/s/hkei82/hue_tools_open_source_toolbox_for_colors) - [hue.tools: An open source toolbox for colors](https://hue.tools/)
* [2025-03-04, 15:41:12](https://news.ycombinator.com/item?id=43256113) - [Should managers still code?](https://theengineeringmanager.substack.com/p/should-managers-still-code)
* [2025-03-04, 15:24:32](https://news.ycombinator.com/item?id=43255855) - [Show HN: Appstat – Process Monitor for Windows](https://pragmar.com/appstat/)
* [2025-03-04, 15:20:00](https://science.slashdot.org/story/25/03/04/1348203/europes-biggest-battery-powered-up-in-scotland?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Europe's Biggest Battery Powered Up In Scotland](https://science.slashdot.org/story/25/03/04/1348203/europes-biggest-battery-powered-up-in-scotland?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-04, 15:00:51](https://news.ycombinator.com/item?id=43255529) - [Show HN: Bayleaf – Building a low-profile wireless split keyboard](https://www.graz.io/articles/bayleaf-wireless-keyboard)
* [2025-03-04, 14:48:35](https://lobste.rs/s/uxhwyb/thaiger_sprint_2025_starring_h2o_http) - [Thaiger Sprint 2025: Starring H2O, the HTTP server (& dropping Nginx)](https://toast.al/posts/softwarecraft/2025-03-04_thaiger-sprint-2025-starring-h2o/)
* [2025-03-04, 14:40:00](https://science.slashdot.org/story/25/03/04/1331210/chinas-supreme-court-calls-for-crack-down-on-paper-mills?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [China's Supreme Court Calls For Crack Down on Paper Mills](https://science.slashdot.org/story/25/03/04/1331210/chinas-supreme-court-calls-for-crack-down-on-paper-mills?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-04, 14:24:54](https://lobste.rs/s/cpro2r/falsehoods_programmers_believe_about) - [Falsehoods programmers believe about languages](https://www.lexiconista.com/falsehoods-about-languages/)
* [2025-03-04, 14:24:49](https://news.ycombinator.com/item?id=43254995) - [What a crab sees before it gets eaten by a cuttlefish](https://www.nytimes.com/2025/03/03/science/cuttlefish-camouflage-huting-crabs.html)
* [2025-03-04, 14:00:00](https://mobile.slashdot.org/story/25/03/04/1132213/realme-charts-path-to-10000mah-phone-batteries-by-2026?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Realme Charts Path To 10,000mAh Phone Batteries by 2026](https://mobile.slashdot.org/story/25/03/04/1132213/realme-charts-path-to-10000mah-phone-batteries-by-2026?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-04, 13:35:12](https://news.ycombinator.com/item?id=43254351) - [Show HN: Fork of Claude-code working with local and other LLM providers](https://github.com/dnakov/anon-kode)
* [2025-03-04, 13:00:00](https://tech.slashdot.org/story/25/03/04/0321215/google-releases-speciesnet-an-ai-model-designed-to-identify-wildlife?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google Releases SpeciesNet, an AI Model Designed To Identify Wildlife](https://tech.slashdot.org/story/25/03/04/0321215/google-releases-speciesnet-an-ai-model-designed-to-identify-wildlife?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-04, 11:59:43](https://lobste.rs/s/b5buoi/tigerbeetle_architecture) - [TigerBeetle Architecture](https://github.com/tigerbeetle/tigerbeetle/blob/main/docs/internals/ARCHITECTURE.md)
* [2025-03-04, 11:48:07](https://lobste.rs/s/ifpjdh/avoid_nightmare_bicycle) - [Avoid the nightmare bicycle](https://www.geoffreylitt.com/2025/03/03/the-nightmare-bicycle.html)
* [2025-03-04, 11:26:00](https://soylentnews.org/article.pl?sid=25/03/03/1239241&from=rss) - [YR4 Asteroid: The Hits and Near-Misses You Never Hear About](https://soylentnews.org/article.pl?sid=25/03/03/1239241&from=rss)
* [2025-03-04, 06:40:00](https://soylentnews.org/article.pl?sid=25/03/02/2054246&from=rss) - [NASA is Watching a Vast, Growing Anomaly in Earth's Magnetic Field](https://soylentnews.org/article.pl?sid=25/03/02/2054246&from=rss)
* [2025-03-04, 04:48:17](https://lobste.rs/s/aslonc/making_flow_interview_with_director) - [Making Flow – Interview with director Gints Zilbalodis —](https://www.blender.org/user-stories/making-flow-an-interview-with-director-gints-zilbalodis/)
* [2025-03-04, 02:00:00](https://soylentnews.org/article.pl?sid=25/03/02/2037225&from=rss) - [The Next Chapter: Moving From Skype to Microsoft Teams](https://soylentnews.org/article.pl?sid=25/03/02/2037225&from=rss)
* [2025-03-04, 00:44:04](https://lobste.rs/s/4sfqtn/you_need_much_less_memory_than_time) - [You Need Much Less Memory than Time](https://blog.computationalcomplexity.org/2025/02/you-need-much-less-memory-than-time.html)
* [2025-03-04, 00:31:01](https://lobste.rs/s/4bxwnl/do_not_run_any_cargo_commands_on_untrusted) - [Do not run any Cargo commands on untrusted projects](https://shnatsel.medium.com/do-not-run-any-cargo-commands-on-untrusted-projects-4c31c89a78d6)
* [2025-03-03, 22:19:48](https://lobste.rs/s/2wifpj/fibrovisor_turning_dollar_store_fibre) - [The Fibrovisor: Turning a dollar store fibre optic wand into a low resolution display](https://www.youtube.com/watch?v=zz59e1wWyVc)
* [2025-03-03, 22:14:12](https://lobste.rs/s/np4prk/use_firefox_2025) - [Use Firefox in 2025](https://alexn.org/blog/2025/03/03/use-firefox/)
* [2025-03-03, 21:19:56](https://news.ycombinator.com/item?id=43246892) - [Repairable Flatpack Toaster](https://www.kaseyhou.com/#/repairable-flatpack-toaster/)
* [2025-03-03, 21:17:00](https://soylentnews.org/article.pl?sid=25/03/02/1651205&from=rss) - [A New Android Feature is Scanning Your Photos for 'Sensitive Content'](https://soylentnews.org/article.pl?sid=25/03/02/1651205&from=rss)
* [2025-03-03, 20:05:32](https://lobste.rs/s/oychrz/vt220_font_emulation_browser) - [VT220 font emulation in browser](https://martin.janiczek.cz/vt220-font-emulation/)
* [2025-03-03, 16:40:34](https://news.ycombinator.com/item?id=43243580) - [TSMC expected to announce $100B investment in U.S.](https://www.wsj.com/tech/trump-chip-maker-tsmc-expected-to-announce-100-billion-investment-in-u-s-02a44399)
* [2025-03-03, 16:37:00](https://soylentnews.org/article.pl?sid=25/03/03/1430230&from=rss) - [U.S. Company Firefly Aerospace Just Landed On The Moon With Its Blue Ghost Spacecraft](https://soylentnews.org/article.pl?sid=25/03/03/1430230&from=rss)
* [2025-03-03, 15:58:56](https://lobste.rs/s/xexk4h/some_things_make_rust_lifetimes_hard) - [Some things that make Rust lifetimes hard to learn](https://ntietz.com/blog/rust-lifetimes-learning/)
* [2025-03-03, 15:18:22](https://news.ycombinator.com/item?id=43242551) - [Show HN: Open-source Deep Research across workplace applications](https://github.com/onyx-dot-app/onyx)
* [2025-03-03, 14:47:02](https://lobste.rs/s/5ltsh1/why_can_t_we_screenshot_frames_from_drm) - [Why Can’t We Screenshot Frames From DRM-Protected Video on Apple Devices?](https://daringfireball.net/2025/03/why_cant_we_screenshot_frames_from_drm-protected_video)
* [2025-03-03, 11:50:00](https://soylentnews.org/article.pl?sid=25/03/02/1636204&from=rss) - [Superelastic Alloy That Functions in Extreme Temperatures Could Aid Space Exploration](https://soylentnews.org/article.pl?sid=25/03/02/1636204&from=rss)
* [2025-03-03, 08:10:07](https://lobste.rs/s/epok9v/apple_s_software_quality_crisis_when) - [Apple's Software Quality Crisis: When Premium Hardware Meets Subpar Software](https://www.eliseomartelli.it/blog/2025-03-02-apple-quality)
* [2025-03-03, 07:05:00](https://soylentnews.org/article.pl?sid=25/03/02/1442219&from=rss) - [The Surveillance Tech Waiting for Workers as They Return to the Office](https://soylentnews.org/article.pl?sid=25/03/02/1442219&from=rss)
* [2025-03-03, 02:18:00](https://soylentnews.org/article.pl?sid=25/03/02/1437201&from=rss) - ['Utterly Cataclysmic': James Webb Telescope Spots 2 Alien Planets Disintegrating Before Our Eyes](https://soylentnews.org/article.pl?sid=25/03/02/1437201&from=rss)
* [2025-03-02, 21:34:00](https://soylentnews.org/article.pl?sid=25/03/02/1031228&from=rss) - [Auto-Color: An Emerging and Evasive Linux Backdoor](https://soylentnews.org/article.pl?sid=25/03/02/1031228&from=rss)
* [2025-03-02, 20:05:28](https://news.ycombinator.com/item?id=43234457) - [An Uneasy Propaganda Alliance](https://www.historytoday.com/archive/history-matters/uneasy-propaganda-alliance)
* [2025-03-02, 16:48:00](https://soylentnews.org/article.pl?sid=25/03/01/1531250&from=rss) - [Avast Antivirus Customers Can be Compensated for Harvesting of Their Personal Info](https://soylentnews.org/article.pl?sid=25/03/01/1531250&from=rss)
* [2025-03-02, 14:34:16](https://news.ycombinator.com/item?id=43230862) - [The Tinkerings of Robert Noyce by Tom Wolfe (1983)](https://classic.esquire.com/article/share/58ff278a-21da-4ee4-a446-b7f451b90275)
* [2025-03-02, 12:02:00](https://soylentnews.org/article.pl?sid=25/03/01/1515217&from=rss) - [Journalist Completely Misrepresents Quantum Teleportation](https://soylentnews.org/article.pl?sid=25/03/01/1515217&from=rss)
* [2025-03-02, 07:14:00](https://soylentnews.org/article.pl?sid=25/03/01/155219&from=rss) - [Chinese Chipmaker Claims New Loongson 3B6600 CPU Could Hit 13Th-Gen Intel Performance](https://soylentnews.org/article.pl?sid=25/03/01/155219&from=rss)
* [2025-03-02, 02:31:00](https://soylentnews.org/article.pl?sid=25/03/01/152214&from=rss) - [Engineers Create Lightweight Multi-Color Fresnel Lens for Telescopes](https://soylentnews.org/article.pl?sid=25/03/01/152214&from=rss)
* [2025-03-01, 21:49:00](https://soylentnews.org/article.pl?sid=25/03/01/0115227&from=rss) - [SpaceX: Actually, Dying Starlink Satellites Don't Always Fully Burn Up](https://soylentnews.org/article.pl?sid=25/03/01/0115227&from=rss)
* [2025-03-01, 17:47:27](https://news.ycombinator.com/item?id=43221633) - [Windows NT for GameCube/Wii](https://github.com/Wack0/entii-for-workcubes)
* [2025-03-01, 17:01:00](https://soylentnews.org/article.pl?sid=25/03/01/0055211&from=rss) - [Pandas \"Tricked\" Into Becoming the World's Biggest Bamboo Fans](https://soylentnews.org/article.pl?sid=25/03/01/0055211&from=rss)
* [2025-03-01, 12:17:00](https://soylentnews.org/article.pl?sid=25/03/01/0049207&from=rss) - [Skype is Shutting Down After Two Decades](https://soylentnews.org/article.pl?sid=25/03/01/0049207&from=rss)
* [2025-03-01, 11:44:18](https://news.ycombinator.com/item?id=43218343) - [A Map of Python](https://fi-le.net/pypi/)
* [2025-03-01, 08:29:48](https://news.ycombinator.com/item?id=43217264) - [Chip-8 Archive](https://johnearnest.github.io/chip8Archive/)
* [2025-03-01, 08:19:11](https://news.ycombinator.com/item?id=43217209) - [The cost of Go's panic and recover](https://jub0bs.com/posts/2025-02-28-cost-of-panic-recover/)
* [2025-03-01, 07:36:00](https://soylentnews.org/article.pl?sid=25/02/28/0659242&from=rss) - [Five Days of Ultra-Processed Food: Study Finds That's Enough to Alter the Brain](https://soylentnews.org/article.pl?sid=25/02/28/0659242&from=rss)
* [2025-03-01, 02:53:00](https://soylentnews.org/article.pl?sid=25/02/28/0654225&from=rss) - [Internet Society Wants to Improve Terrestrial Fibre Maps](https://soylentnews.org/article.pl?sid=25/02/28/0654225&from=rss)
