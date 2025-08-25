# [News Summary](https://kherrick.github.io/news-summary/)

## Gaming and Performance

* [Mario 64 wastes so much memory](https://youtu.be/oZcbgNdWL7w) ([comments](https://lobste.rs/s/rvgx8d/mario_64_wastes_so_much_memory))

## Science and Health Innovations

* [Could Recreating a Rare Mutation Grant Almost Universal Virus Immunity For Days?](https://science.slashdot.org/story/25/08/25/0242216/could-recreating-a-rare-mutation-grant-almost-universal-virus-immunity-for-days?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://science.slashdot.org/story/25/08/25/0242216/could-recreating-a-rare-mutation-grant-almost-universal-virus-immunity-for-days?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Scientists Develop Interface That ‘Reads’ Thoughts From Speech-Impaired Patients](https://soylentnews.org/article.pl?sid=25/08/22/073206&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/08/22/073206&from=rss))

## Software, Tools, and Technology

* [Linear scan with lifetime holes](https://bernsteinbear.com/blog/linear-scan-lifetime-holes/) ([comments](https://lobste.rs/s/lwaht3/linear_scan_with_lifetime_holes))

* [frogmouth: A Markdown browser for your terminal](https://github.com/Textualize/frogmouth) ([comments](https://lobste.rs/s/dqvkes/frogmouth_markdown_browser_for_your))

* [30 Years of Satellite Data Confirm Predictions from Early Models of Sea Level Rise](https://news.slashdot.org/story/25/08/24/1745208/30-years-of-satellite-data-confirm-predictions-from-early-models-of-sea-level-rise?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.slashdot.org/story/25/08/24/1745208/30-years-of-satellite-data-confirm-predictions-from-early-models-of-sea-level-rise?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Threats and Security

* [After Tea Leak, 33,000 Women's Addresses Were Purportedly Mapped on Google Maps](https://tech.slashdot.org/story/25/08/24/2227258/after-tea-leak-33000-womens-addresses-were-purportedly-mapped-on-google-maps?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://tech.slashdot.org/story/25/08/24/2227258/after-tea-leak-33000-womens-addresses-were-purportedly-mapped-on-google-maps?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [A German ISP tampered with their DNS - specifically to sabotage my website](https://lina.sh/blog/telefonica-sabotages-me) ([comments](https://lobste.rs/s/ynezsm/german_isp_tampered_with_their_dns))

## AI and Future of Work

* [YouTube's Sneaky AI 'Experiment': Is Social Media Embracing AI-Generated Content?](https://news.slashdot.org/story/25/08/23/0836256/youtubes-sneaky-ai-experiment-is-social-media-embracing-ai-generated-content?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.slashdot.org/story/25/08/23/0836256/youtubes-sneaky-ai-experiment-is-social-media-embracing-ai-generated-content?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [AWS CEO Says Using AI to Replace Junior Staff is 'Dumbest Thing I've Ever Heard'](https://soylentnews.org/article.pl?sid=25/08/22/0656227&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/08/22/0656227&from=rss))

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

* [2025-08-25, 03:59:50](https://lobste.rs/s/rvgx8d/mario_64_wastes_so_much_memory) - [Mario 64 wastes so much memory](https://youtu.be/oZcbgNdWL7w)
* [2025-08-25, 02:50:00](https://science.slashdot.org/story/25/08/25/0242216/could-recreating-a-rare-mutation-grant-almost-universal-virus-immunity-for-days?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Could Recreating a Rare Mutation Grant Almost Universal Virus Immunity For Days?](https://science.slashdot.org/story/25/08/25/0242216/could-recreating-a-rare-mutation-grant-almost-universal-virus-immunity-for-days?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-25, 02:18:30](https://lobste.rs/s/lwaht3/linear_scan_with_lifetime_holes) - [Linear scan with lifetime holes](https://bernsteinbear.com/blog/linear-scan-lifetime-holes/)
* [2025-08-25, 00:50:00](https://soylentnews.org/article.pl?sid=25/08/23/2218218&amp;from=rss) - [Creative Commons Becomes an Official UNESCO NGO Partner](https://soylentnews.org/article.pl?sid=25/08/23/2218218&amp;from=rss)
* [2025-08-25, 00:29:00](https://news.slashdot.org/story/25/08/25/0027216/burning-man-hit-by-50-mph-dust-storm-possible-monsoon-thunderstorms-forecast?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Burning Man Hit By 50 MPH Dust Storm. Possible Monsoon Thunderstorms Forecast](https://news.slashdot.org/story/25/08/25/0027216/burning-man-hit-by-50-mph-dust-storm-possible-monsoon-thunderstorms-forecast?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-25, 00:10:00](https://news.ycombinator.com/item?id=45008995) - [Prison isn’t set up for today’s tech so we have to do legal work the old way](https://prisonjournalismproject.org/2025/08/19/prisons-outdated-technology-hurts-our-chances-at-freedom/)
* [2025-08-24, 23:44:47](https://news.ycombinator.com/item?id=45008832) - [How to check if your Apple Silicon Mac is booting securely](https://eclecticlight.co/2025/08/21/how-to-check-if-your-apple-silicon-mac-is-booting-securely/)
* [2025-08-24, 23:42:01](https://news.ycombinator.com/item?id=45008819) - [Show HN: Sping – An HTTP/TCP latency tool that&apos;s easy on the eye](https://dseltzer.gitlab.io/sping/docs/)
* [2025-08-24, 23:27:52](https://news.ycombinator.com/item?id=45008740) - [Ghrc.io appears to be malicious](https://bmitch.net/blog/2025-08-22-ghrc-appears-malicious/)
* [2025-08-24, 23:26:47](https://lobste.rs/s/bk3cyd/ghrc_io_appears_be_malicious) - [ghrc.io Appears to be Malicious](https://bmitch.net/blog/2025-08-22-ghrc-appears-malicious/)
* [2025-08-24, 22:30:00](https://tech.slashdot.org/story/25/08/24/2227258/after-tea-leak-33000-womens-addresses-were-purportedly-mapped-on-google-maps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [After Tea Leak, 33,000 Women&apos;s Addresses Were Purportedly Mapped on Google Maps](https://tech.slashdot.org/story/25/08/24/2227258/after-tea-leak-33000-womens-addresses-were-purportedly-mapped-on-google-maps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-24, 22:20:07](https://news.ycombinator.com/item?id=45008308) - [GNU cross-tools: musl-cross 313.3M](https://github.com/cross-tools/musl-cross)
* [2025-08-24, 22:08:26](https://news.ycombinator.com/item?id=45008239) - [From Hackathon to YC](https://www.producthunt.com/p/april-yc-s25/from-hackathon-to-yc)
* [2025-08-24, 21:16:35](https://lobste.rs/s/cya9ki/i_don_t_like_imports) - [I Don&apos;t Like Imports](https://kevincox.ca/2025/07/20/no-imports/)
* [2025-08-24, 20:50:28](https://lobste.rs/s/etxhbj/automating_pre_push_checks_with_jujutsu) - [Automating Pre-Push Checks with Jujutsu](https://www.aazuspan.dev/blog/automating-pre-push-checks-with-jujutsu/)
* [2025-08-24, 20:39:15](https://lobste.rs/s/ypffje/anubis_offload_userscript_offload) - [anubis_offload: userscript to offload Anubis PoW to native CPU or GPU code](https://github.com/DavidBuchanan314/anubis_offload)
* [2025-08-24, 20:34:00](https://science.slashdot.org/story/25/08/24/1920233/a-universal-rhythm-guides-how-we-speak-global-analysis-reveals-16-second-units?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Universal Rhythm Guides How We Speak: Global Analysis Reveals 1.6-Second Units](https://science.slashdot.org/story/25/08/24/1920233/a-universal-rhythm-guides-how-we-speak-global-analysis-reveals-16-second-units?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-24, 20:25:14](https://lobste.rs/s/lal22i/kruci_post_mortem_ui_library) - [kruci: Post-mortem of a UI library](https://pwy.io/posts/kruci-post-mortem/)
* [2025-08-24, 20:19:55](https://news.ycombinator.com/item?id=45007414) - [Halt and Catch Fire Syllabus (2021)](https://bits.ashleyblewer.com/halt-and-catch-fire-syllabus/)
* [2025-08-24, 20:09:12](https://news.ycombinator.com/item?id=45007333) - [How many paths of length K are there between A and B? (2021)](https://horace.io/walks)
* [2025-08-24, 20:03:00](https://soylentnews.org/article.pl?sid=25/08/23/2216200&amp;from=rss) - [U.S. Government Now Holds 10% Stake in Intel](https://soylentnews.org/article.pl?sid=25/08/23/2216200&amp;from=rss)
* [2025-08-24, 19:34:00](https://news.slashdot.org/story/25/08/24/1745208/30-years-of-satellite-data-confirm-predictions-from-early-models-of-sea-level-rise?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [30 Years of Satellite Data Confirm Predictions from Early Models of Sea Level Rise](https://news.slashdot.org/story/25/08/24/1745208/30-years-of-satellite-data-confirm-predictions-from-early-models-of-sea-level-rise?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-24, 19:23:19](https://news.ycombinator.com/item?id=45006902) - [A Brilliant and Nearby One-off Fast Radio Burst Localized to 13 pc Precision](https://iopscience.iop.org/article/10.3847/2041-8213/adf62f)
* [2025-08-24, 19:10:09](https://news.ycombinator.com/item?id=45006801) - [Everything I know about good API design](https://www.seangoedecke.com/good-api-design/)
* [2025-08-24, 18:49:56](https://lobste.rs/s/dqvkes/frogmouth_markdown_browser_for_your) - [frogmouth: A Markdown browser for your terminal](https://github.com/Textualize/frogmouth)
* [2025-08-24, 18:34:00](https://hardware.slashdot.org/story/25/08/24/1653202/flames-smoke-toxic-gas-the-danger-of-battery-fires-on-planes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Flames, Smoke, Toxic Gas: The Danger of Battery Fires on Planes](https://hardware.slashdot.org/story/25/08/24/1653202/flames-smoke-toxic-gas-the-danger-of-battery-fires-on-planes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-24, 17:38:30](https://news.ycombinator.com/item?id=45006098) - [Show HN: I Built a XSLT Blog Framework](https://vgr.land/content/posts/20250821.xml)
* [2025-08-24, 17:34:00](https://science.slashdot.org/story/25/08/24/025222/americas-secretive-x-37b-space-plane-will-test-a-quantum-alternative-to-gps-for-the-us-space-force?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [America&apos;s Secretive X-37B Space Plane Will Test a Quantum Alternative to GPS for the US Space Force](https://science.slashdot.org/story/25/08/24/025222/americas-secretive-x-37b-space-plane-will-test-a-quantum-alternative-to-gps-for-the-us-space-force?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-24, 17:25:07](https://lobste.rs/s/9cuaig/update_on_my_racket_exit) - [Update on my Racket exit](https://blog.winny.tech/posts/update-on-my-racket-exit/)
* [2025-08-24, 16:42:36](https://lobste.rs/s/f8wwq6/introducing_zod_codecs) - [Introducing Zod Codecs](https://colinhacks.com/essays/introducing-zod-codecs)
* [2025-08-24, 16:34:00](https://entertainment.slashdot.org/story/25/08/24/0413234/music-services-caught-streaming-ai-generated-albums-impersonating-real-singers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Music Services Caught Streaming AI-Generated Albums Impersonating Real Singers](https://entertainment.slashdot.org/story/25/08/24/0413234/music-services-caught-streaming-ai-generated-albums-impersonating-real-singers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-24, 16:30:18](https://news.ycombinator.com/item?id=45005545) - [Is 4chan the perfect Pirate Bay poster child to justify wider UK site-blocking?](https://torrentfreak.com/uk-govt-finds-ideal-pirate-bay-poster-boy-to-sell-blocking-of-non-pirate-sites-250824/)
* [2025-08-24, 16:27:18](https://lobste.rs/s/htxzoy/which_programming_language_should_i) - [Which Programming Language Should I Teach First?](https://parentheticallyspeaking.org/articles/first-language-wrong-question/)
* [2025-08-24, 16:18:53](https://news.ycombinator.com/item?id=45005434) - [We put a coding agent in a while loop](https://github.com/repomirrorhq/repomirror/blob/main/repomirror.md)
* [2025-08-24, 15:42:41](https://lobste.rs/s/2mnmwq/true_names_matter_c) - [True names matter in C++](https://quuxplusone.github.io/blog/2025/08/01/true-names/)
* [2025-08-24, 15:38:42](https://lobste.rs/s/ozqdi6/sqlite_with_wal_doesn_t_do_fsync_on_each) - [SQLite (with WAL) doesn&apos;t do `fsync` on each commit under default settings](https://avi.im/blag/2025/sqlite-fsync/)
* [2025-08-24, 15:34:00](https://tech.slashdot.org/story/25/08/24/0124257/a-future-air-taxi-archers-electric-evtol-flies-55-miles-in-31-minutes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Future Air Taxi? Archer&apos;s Electric eVTOL Flies 55 Miles in 31 Minutes](https://tech.slashdot.org/story/25/08/24/0124257/a-future-air-taxi-archers-electric-evtol-flies-55-miles-in-31-minutes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-24, 15:18:00](https://soylentnews.org/article.pl?sid=25/08/23/1053236&amp;from=rss) - [‘Quiet Cracking’ is Spreading in Offices: Half of Workers are at Breaking Point](https://soylentnews.org/article.pl?sid=25/08/23/1053236&amp;from=rss)
* [2025-08-24, 15:14:34](https://news.ycombinator.com/item?id=45004846) - [Comet AI browser can get prompt injected from any site, drain your bank account](https://twitter.com/zack_overflow/status/1959308058200551721)
* [2025-08-24, 15:09:04](https://lobste.rs/s/kxlsdz/comparing_nitro_runit) - [Comparing nitro to runit](https://leahneukirchen.org/blog/archive/2025/08/comparing-nitro-to-runit.html)
* [2025-08-24, 15:07:06](https://lobste.rs/s/diaied/good_vibes_claude_code_case_study) - [Good Vibes: A Claude-Code Case-Study](https://taylor.town/diggit-000)
* [2025-08-24, 15:01:24](https://news.ycombinator.com/item?id=45004728) - [Making games in Go: 3 months without LLMs vs. 3 days with LLMs](https://marianogappa.github.io/software/2025/08/24/i-made-two-card-games-in-go/)
* [2025-08-24, 14:04:00](https://news.slashdot.org/story/25/08/24/0547251/firefox-142s-link-previews-have-a-new-option-ai-generated-summaries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Firefox 142&apos;s Link Previews Have a New Option: AI-Generated Summaries](https://news.slashdot.org/story/25/08/24/0547251/firefox-142s-link-previews-have-a-new-option-ai-generated-summaries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-24, 14:01:23](https://lobste.rs/s/lpiufb/interview_with_jon_corbett_cree) - [Interview with Jon Corbett: Cree#, Ancestral Code, and an Indigenous Computing Framework](https://esoteric.codes/blog/jon-corbett)
* [2025-08-24, 13:21:23](https://lobste.rs/s/8tycd0/surrealdb_is_sacrificing_data) - [SurrealDB is sacrificing data durability to make benchmarks look better](https://blog.cf8.gg/surrealdbs-ch/)
* [2025-08-24, 12:26:12](https://lobste.rs/s/q7fels/fast_bytecode_vm_for_arithmetic_compiler) - [A Fast Bytecode VM for Arithmetic: The Compiler](https://abhinavsarkar.net/posts/arithmetic-bytecode-vm-compiler/)
* [2025-08-24, 11:58:10](https://lobste.rs/s/ynezsm/german_isp_tampered_with_their_dns) - [A German ISP tampered with their DNS - specifically to sabotage my website](https://lina.sh/blog/telefonica-sabotages-me)
* [2025-08-24, 11:34:15](https://news.ycombinator.com/item?id=45003420) - [Show HN: Clearcam – Add AI object detection to your IP CCTV cameras](https://github.com/roryclear/clearcam)
* [2025-08-24, 11:34:00](https://news.slashdot.org/story/25/08/24/0638238/fbi-warns-russian-hackers-targeted-thousands-of-critical-us-infrastructure-it-systems?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FBI Warns Russian Hackers Targeted &apos;Thousands&apos; of Critical US Infrastructure IT Systems](https://news.slashdot.org/story/25/08/24/0638238/fbi-warns-russian-hackers-targeted-thousands-of-critical-us-infrastructure-it-systems?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-24, 10:36:00](https://soylentnews.org/article.pl?sid=25/08/22/079224&amp;from=rss) - [Turning the Lights Back on](https://soylentnews.org/article.pl?sid=25/08/22/079224&amp;from=rss)
* [2025-08-24, 08:59:09](https://lobste.rs/s/ayqmih/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/ayqmih/what_are_you_doing_this_weekend)
* [2025-08-24, 08:02:30](https://lobste.rs/s/5tvmgp/secret_management_on_nixos_with_sops_nix) - [Secret Management on NixOS with sops-nix](https://michael.stapelberg.ch/posts/2025-08-24-secret-management-with-sops-nix/)
* [2025-08-24, 07:58:36](https://lobste.rs/s/rivvjq/how_build_coding_agent) - [how to build a coding agent](https://ghuntley.com/agent/)
* [2025-08-24, 07:34:00](https://news.slashdot.org/story/25/08/23/0836256/youtubes-sneaky-ai-experiment-is-social-media-embracing-ai-generated-content?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [YouTube&apos;s Sneaky AI &apos;Experiment&apos;: Is Social Media Embracing AI-Generated Content?](https://news.slashdot.org/story/25/08/23/0836256/youtubes-sneaky-ai-experiment-is-social-media-embracing-ai-generated-content?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-24, 05:52:00](https://soylentnews.org/article.pl?sid=25/08/22/073206&amp;from=rss) - [Scientists Develop Interface That ‘Reads’ Thoughts From Speech-Impaired Patients](https://soylentnews.org/article.pl?sid=25/08/22/073206&amp;from=rss)
* [2025-08-24, 04:06:10](https://lobste.rs/s/tjv7ha/line_scan_camera_image_processing_train) - [Line scan camera image processing (train photography)](https://daniel.lawrence.lu/blog/y2025m09d21/)
* [2025-08-24, 03:34:00](https://hardware.slashdot.org/story/25/08/24/038259/will-googles-battery-health-assistant-throttle-your-pixel-10s-battery?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Will Google&apos;s &apos;Battery Health Assistant&apos; Throttle Your Pixel 10&apos;s Battery?](https://hardware.slashdot.org/story/25/08/24/038259/will-googles-battery-health-assistant-throttle-your-pixel-10s-battery?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-24, 03:21:14](https://news.ycombinator.com/item?id=45001051) - [How to build a coding agent](https://ghuntley.com/agent/)
* [2025-08-24, 01:34:00](https://news.slashdot.org/story/25/08/24/0022205/solar-energy-was-americas-largest-source-of-new-energy-for-21-straight-months?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Solar Energy Was America&apos;s Largest Source of New Energy for 21 Straight Months](https://news.slashdot.org/story/25/08/24/0022205/solar-energy-was-americas-largest-source-of-new-energy-for-21-straight-months?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-24, 01:12:00](https://soylentnews.org/article.pl?sid=25/08/22/0656227&amp;from=rss) - [AWS CEO Says Using AI to Replace Junior Staff is &apos;Dumbest Thing I&apos;ve Ever Heard&apos;](https://soylentnews.org/article.pl?sid=25/08/22/0656227&amp;from=rss)
* [2025-08-23, 22:34:00](https://hardware.slashdot.org/story/25/08/23/1851227/intels-new-funding-came-from-already-awarded-grants-so-what-happens-next?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel&apos;s New Funding Came From Already-Awarded Grants. So What Happens Next?](https://hardware.slashdot.org/story/25/08/23/1851227/intels-new-funding-came-from-already-awarded-grants-so-what-happens-next?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-23, 20:25:00](https://soylentnews.org/article.pl?sid=25/08/22/0551243&amp;from=rss) - [Webb Discovers a New Moon Orbiting Uranus](https://soylentnews.org/article.pl?sid=25/08/22/0551243&amp;from=rss)
* [2025-08-23, 19:08:57](https://lobste.rs/s/rkedkd/optimizing_fizzbuzz_rust) - [Optimizing FizzBuzz in Rust](https://github.com/nrposner/fizzcrate)
* [2025-08-23, 15:35:00](https://soylentnews.org/article.pl?sid=25/08/22/0547201&amp;from=rss) - [Congressman Proposes Bringing Back Letters of Marque for Cyber Privateers](https://soylentnews.org/article.pl?sid=25/08/22/0547201&amp;from=rss)
* [2025-08-23, 14:22:12](https://lobste.rs/s/7yj16h/big_o) - [Big O](https://samwho.dev/big-o/)
* [2025-08-23, 11:00:00](https://soylentnews.org/article.pl?sid=25/08/22/0544206&amp;from=rss) - [Heat-Styling Hair Care Products Release Billions of Nanoparticles That Can Accumulate in Lungs](https://soylentnews.org/article.pl?sid=25/08/22/0544206&amp;from=rss)
* [2025-08-23, 06:10:00](https://soylentnews.org/article.pl?sid=25/08/22/019206&amp;from=rss) - [New Research Ferments the Perfect Recipe for Fine Chocolate Flavour](https://soylentnews.org/article.pl?sid=25/08/22/019206&amp;from=rss)
* [2025-08-23, 01:25:00](https://soylentnews.org/article.pl?sid=25/08/22/010203&amp;from=rss) - [T-Mobile Claimed Selling Location Data Without Consent is Legal—Judges Disagree](https://soylentnews.org/article.pl?sid=25/08/22/010203&amp;from=rss)
* [2025-08-22, 22:47:08](https://news.ycombinator.com/item?id=44990839) - [Busy beaver hunters reach numbers that overwhelm ordinary math](https://www.quantamagazine.org/busy-beaver-hunters-reach-numbers-that-overwhelm-ordinary-math-20250822/)
* [2025-08-22, 20:39:00](https://soylentnews.org/article.pl?sid=25/08/21/1213229&amp;from=rss) - [Tree Species Face Unprecedented Climate Shifts Across Their Ranges](https://soylentnews.org/article.pl?sid=25/08/21/1213229&amp;from=rss)
* [2025-08-22, 16:46:42](https://news.ycombinator.com/item?id=44986723) - [Trees on city streets cope with drought by drinking from leaky pipes](https://www.newscientist.com/article/2487804-trees-on-city-streets-cope-with-drought-by-drinking-from-leaky-pipes/)
* [2025-08-22, 15:56:00](https://soylentnews.org/article.pl?sid=25/08/21/123255&amp;from=rss) - [Adult Sites Are Stashing Exploit Code Inside Racy .svg Files](https://soylentnews.org/article.pl?sid=25/08/21/123255&amp;from=rss)
* [2025-08-22, 11:58:36](https://news.ycombinator.com/item?id=44983442) - [Bash Strict Mode](http://redsymbol.net/articles/unofficial-bash-strict-mode/)
* [2025-08-22, 11:11:00](https://soylentnews.org/article.pl?sid=25/08/21/1154233&amp;from=rss) - [Teenagers Are Choosing to Study STEM Subjects. It&apos;s a Sign of the Times](https://soylentnews.org/article.pl?sid=25/08/21/1154233&amp;from=rss)
* [2025-08-22, 06:22:00](https://soylentnews.org/article.pl?sid=25/08/20/2255245&amp;from=rss) - [VW Introduces Monthly Subscription to Increase Car Power](https://soylentnews.org/article.pl?sid=25/08/20/2255245&amp;from=rss)
* [2025-08-22, 04:14:10](https://news.ycombinator.com/item?id=44980940) - [Cloudflare incident on August 21, 2025](https://blog.cloudflare.com/cloudflare-incident-on-august-21-2025/)
* [2025-08-22, 01:35:00](https://soylentnews.org/article.pl?sid=25/08/20/2242220&amp;from=rss) - [We Need to Become Unoptomizable](https://soylentnews.org/article.pl?sid=25/08/20/2242220&amp;from=rss)
* [2025-08-22, 01:06:56](https://news.ycombinator.com/item?id=44980042) - [OS Yamato lets your data fade away](https://github.com/osyamato/os-yamato)
* [2025-08-22, 00:42:44](https://news.ycombinator.com/item?id=44979906) - [NASA&apos;s Juno mission leaves legacy of science at Jupiter](https://www.scientificamerican.com/article/how-nasas-juno-probe-changed-everything-we-know-about-jupiter/)
* [2025-08-22, 00:05:37](https://news.ycombinator.com/item?id=44979687) - [Y Combinator files brief supporting Epic Games, says store fees stifle startups](https://www.macrumors.com/2025/08/21/y-combinator-epic-games-amicus-brief/)
* [2025-08-21, 20:49:00](https://soylentnews.org/article.pl?sid=25/08/20/1759228&amp;from=rss) - [Uncovering the Fraudsters and Their Schemes Responsible for Polluting the Scientific Literature](https://soylentnews.org/article.pl?sid=25/08/20/1759228&amp;from=rss)
* [2025-08-21, 17:09:08](https://news.ycombinator.com/item?id=44975313) - [Iterative DFS with stack-based graph traversal (2024)](https://dwf.dev/blog/2024/09/23/2024/dfs-iterative-stack-based)
* [2025-08-21, 16:09:00](https://soylentnews.org/article.pl?sid=25/08/20/1743213&amp;from=rss) - [Physics of Badminton’s New Killer Spin Serve](https://soylentnews.org/article.pl?sid=25/08/20/1743213&amp;from=rss)
* [2025-08-21, 11:30:59](https://news.ycombinator.com/item?id=44971451) - [Stepanov&apos;s biggest blunder? The curious case of adjacent difference](https://mmapped.blog/posts/43-stepanovs-biggest-blunder)
* [2025-08-21, 11:24:00](https://soylentnews.org/article.pl?sid=25/08/20/1736217&amp;from=rss) - [Mozilla Warns Germany Could Declare Ad Blockers Illegal](https://soylentnews.org/article.pl?sid=25/08/20/1736217&amp;from=rss)
* [2025-08-21, 09:34:32](https://news.ycombinator.com/item?id=44970769) - [The two versions of Parquet](https://www.jeronimo.dev/the-two-versions-of-parquet/)
* [2025-08-21, 08:58:44](https://news.ycombinator.com/item?id=44970583) - [My ZIP isn&apos;t your ZIP: Identifying and exploiting semantic gaps between parsers](https://www.usenix.org/conference/usenixsecurity25/presentation/you)
* [2025-08-21, 06:38:00](https://soylentnews.org/article.pl?sid=25/08/20/033241&amp;from=rss) - [If AI Takes Most of Our Jobs, Money as We Know It Will be Over. What Then?](https://soylentnews.org/article.pl?sid=25/08/20/033241&amp;from=rss)
* [2025-08-21, 01:52:00](https://soylentnews.org/article.pl?sid=25/08/20/0153218&amp;from=rss) - [A Treatise on AI Chatbots Undermining the Enlightenment](https://soylentnews.org/article.pl?sid=25/08/20/0153218&amp;from=rss)
