# [News Summary](https://kherrick.github.io/news-summary/)

## Major Accountability and Ethical Issues

* [Proton Mail Suspended Journalist Accounts At Request of Cybersecurity Agency](https://it.slashdot.org/story/25/09/12/230259/proton-mail-suspended-journalist-accounts-at-request-of-cybersecurity-agency?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A cybersecurity agency requested Proton Mail to suspend certain journalist accounts, raising concerns about governmental overreach and privacy.

* [Newfoundland's 10-Year Education Report Calling For Ethical AI Use Contains Over 15 Fake Sources](https://news.slashdot.org/story/25/09/12/239214/newfoundlands-10-year-education-report-calling-for-ethical-ai-use-contains-over-15-fake-sources?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A government report advocating for ethical AI use has been found to contain numerous fake references, drawing doubts about its integrity.

* [Spotify Peeved After 10,000 Users Sold Data To Build AI Tools](https://entertainment.slashdot.org/story/25/09/12/2112234/spotify-peeved-after-10000-users-sold-data-to-build-ai-tools?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Spotify expresses displeasure as users sell their listening data to AI developers, showcasing the complex boundaries of data ownership.

## Technological Innovations and Tools

* [Show HN: wcwidth-o1 – Find Unicode text cell width in no time for JavaScript/TS](https://github.com/dawsonhuang0/Wcwidth-O1) - A new JavaScript/TypeScript tool for instantly determining the cell width of Unicode text.

* [OCI Registry Explorer](https://oci.dag.dev/) - An interactive tool for exploring OCI registries, aiding developers in managing container images efficiently.

* [Meow: Yet another modal editing on Emacs](https://github.com/meow-edit/meow) - A unique modal editing experience for Emacs users.

* [From 19k to 4.2M events/sec: story of a SQLite query optimisation](https://mnt.io/articles/from-19k-to-4-2m-events-per-sec-story-of-a-sqlite-query-optimisation/) - A deep dive into dramatically improving SQLite performance using targeted optimizations.

## Significant Developments in Climate and Energy

* [EU court rules nuclear energy is clean energy](https://www.weplanet.org/post/eu-court-rules-nuclear-energy-is-clean-energy) - A landmark ruling by an EU court officially designates nuclear energy as clean, potentially reshaping Europe’s energy future.

* [Coffee Prices Post Largest Annual Jump Since 1997](https://news.slashdot.org/story/25/09/12/193214/coffee-prices-post-largest-annual-jump-since-1997?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The skyrocketing cost of coffee highlights the impact of climate and supply chain disruptions on global markets.

* [US EV Sales Smash Records In August](https://tech.slashdot.org/story/25/09/12/2318235/us-ev-sales-smash-records-in-august?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Electric vehicle sales in the U.S. surged to unprecedented levels, signaling widespread adoption.

## Breakthroughs in Science and Space

* [LIGO's Sharpest Detection Yet Confirms Famous Stephen Hawking Theory](https://soylentnews.org/article.pl?sid=25/09/11/036213&amp;from=rss) - The LIGO observatory achieves unprecedented precision in backing a theory proposed by Stephen Hawking.

* [Discovery of a new satellite or ring arc around Quaoar](https://phys.org/news/2025-09-discovery-moon-orbiting-mysterious-distant.html) - Observations reveal new celestial features surrounding the distant dwarf planet Quaoar.

* [Scientists Discover ‘Clearest Sign’ Yet of Life on Mars](https://soylentnews.org/article.pl?sid=25/09/10/2228216&amp;from=rss) - Breakthrough research brings evidence closer to confirming the existence of life on Mars.

## Policy and Society Dynamics

* [California lawmakers pass SB 79, housing bill that brings dense housing](https://www.latimes.com/california/story/2025-09-12/california-lawmakers-pass-sb-79-housing-bill-that-brings-dense-housing-to-transit-hubs) - Landmark legislation in California aims to push housing density near transit hubs to combat the housing crisis.

* [California Bill Lets Renters Escape Exclusive Deals Between ISPs and Landlords](https://news.slashdot.org/story/25/09/12/2030208/california-bill-lets-renters-escape-exclusive-deals-between-isps-and-landlords?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A new bill empowers renters with more choices in broadband providers, pushing back against rigid ISP-landlord agreements.

* [Colleges Are About to See a Big Decline in Applicants](https://news.slashdot.org/story/25/09/12/1954243/colleges-are-about-to-see-a-big-decline-in-applicants?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A demographic cliff may soon result in fewer college applicants, prompting institutions to brace for change.

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

* [2025-09-13, 03:30:00](https://it.slashdot.org/story/25/09/12/230259/proton-mail-suspended-journalist-accounts-at-request-of-cybersecurity-agency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Proton Mail Suspended Journalist Accounts At Request of Cybersecurity Agency](https://it.slashdot.org/story/25/09/12/230259/proton-mail-suspended-journalist-accounts-at-request-of-cybersecurity-agency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-13, 03:04:03](https://lobste.rs/s/hh07fn/basics_equality_saturation) - [Basics of Equality Saturation](https://egglog-python.readthedocs.io/latest/tutorials/tut_1_basics.html)
* [2025-09-13, 02:53:43](https://news.ycombinator.com/item?id=45228938) - [Show HN: wcwidth-o1 – Find Unicode text cell width in no time for JavaScript/TS](https://github.com/dawsonhuang0/Wcwidth-O1)
* [2025-09-13, 02:41:57](https://news.ycombinator.com/item?id=45228891) - [OCI Registry Explorer](https://oci.dag.dev/)
* [2025-09-13, 02:13:40](https://news.ycombinator.com/item?id=45228766) - [Chatbox app is back on the US app store](https://github.com/chatboxai/chatbox/issues/2644)
* [2025-09-13, 02:06:11](https://lobste.rs/s/4xb9m9/i_vibe_coded_r_package_it_actually_works) - [I Vibe Coded an R Package and it ... actually works?!?](https://jcarroll.com.au/2025/09/13/i-vibe-coded-an-r-package/)
* [2025-09-13, 01:55:23](https://news.ycombinator.com/item?id=45228692) - [Legal win](https://ma.tt/2025/09/legal-win/)
* [2025-09-13, 01:50:00](https://tech.slashdot.org/story/25/09/12/2318235/us-ev-sales-smash-records-in-august?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US EV Sales Smash Records In August](https://tech.slashdot.org/story/25/09/12/2318235/us-ev-sales-smash-records-in-august?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-13, 01:32:33](https://news.ycombinator.com/item?id=45228552) - [California lawmakers pass SB 79, housing bill that brings dense housing](https://www.latimes.com/california/story/2025-09-12/california-lawmakers-pass-sb-79-housing-bill-that-brings-dense-housing-to-transit-hubs)
* [2025-09-13, 01:15:37](https://news.ycombinator.com/item?id=45228472) - [Life, work, death and the peasant: Rent and extraction](https://acoup.blog/2025/09/12/collections-life-work-death-and-the-peasant-part-ivc-rent-and-extraction/)
* [2025-09-13, 01:10:00](https://news.slashdot.org/story/25/09/12/239214/newfoundlands-10-year-education-report-calling-for-ethical-ai-use-contains-over-15-fake-sources?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Newfoundland&apos;s 10-Year Education Report Calling For Ethical AI Use Contains Over 15 Fake Sources](https://news.slashdot.org/story/25/09/12/239214/newfoundlands-10-year-education-report-calling-for-ethical-ai-use-contains-over-15-fake-sources?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-13, 01:00:22](https://news.ycombinator.com/item?id=45228396) - [Meow: Yet another modal editing on Emacs](https://github.com/meow-edit/meow)
* [2025-09-13, 00:42:00](https://soylentnews.org/article.pl?sid=25/09/11/0310226&amp;from=rss) - [ASML Invests €1.3bn in AI Company Mistral](https://soylentnews.org/article.pl?sid=25/09/11/0310226&amp;from=rss)
* [2025-09-13, 00:30:00](https://entertainment.slashdot.org/story/25/09/12/2251230/employee-who-leaked-spider-man-blu-ray-sentenced-to-nearly-5-years-prison?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Employee Who Leaked &apos;Spider-Man&apos; Blu-ray Sentenced to Nearly 5 Years Prison](https://entertainment.slashdot.org/story/25/09/12/2251230/employee-who-leaked-spider-man-blu-ray-sentenced-to-nearly-5-years-prison?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-12, 23:50:00](https://tech.slashdot.org/story/25/09/12/2147218/from-discord-to-bitchat-tech-at-the-heart-of-nepal-protests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [From Discord To Bitchat, Tech At the Heart of Nepal Protests](https://tech.slashdot.org/story/25/09/12/2147218/from-discord-to-bitchat-tech-at-the-heart-of-nepal-protests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-12, 23:10:00](https://slashdot.org/story/25/09/12/2136201/intel-talent-bleed-continues?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel Talent Bleed Continues](https://slashdot.org/story/25/09/12/2136201/intel-talent-bleed-continues?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-12, 23:04:08](https://news.ycombinator.com/item?id=45227749) - [Tips for installing Windows 98 in QEMU/UTM](https://sporks.space/2025/08/28/tips-for-installing-windows-98-in-qemu-utm/)
* [2025-09-12, 23:01:42](https://lobste.rs/s/ifdi6q/tips_for_installing_windows_98_qemu_utm) - [Tips for installing Windows 98 in QEMU/UTM](https://sporks.space/2025/08/28/tips-for-installing-windows-98-in-qemu-utm/)
* [2025-09-12, 22:33:38](https://lobste.rs/s/mlbsfi/utf_8_is_brilliant_design) - [UTF-8 is a Brilliant Design](https://iamvishnu.com/posts/utf8-is-brilliant-design)
* [2025-09-12, 22:30:00](https://slashdot.org/story/25/09/12/2119247/microsoft-openai-reach-non-binding-deal-to-allow-openai-to-restructure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft, OpenAI Reach Non-Binding Deal To Allow OpenAI To Restructure](https://slashdot.org/story/25/09/12/2119247/microsoft-openai-reach-non-binding-deal-to-allow-openai-to-restructure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-12, 21:54:34](https://news.ycombinator.com/item?id=45227212) - [FFglitch, FFmpeg fork for glitch art](https://ffglitch.org/gallery/)
* [2025-09-12, 21:50:00](https://entertainment.slashdot.org/story/25/09/12/2112234/spotify-peeved-after-10000-users-sold-data-to-build-ai-tools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Spotify Peeved After 10,000 Users Sold Data To Build AI Tools](https://entertainment.slashdot.org/story/25/09/12/2112234/spotify-peeved-after-10000-users-sold-data-to-build-ai-tools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-12, 21:20:36](https://news.ycombinator.com/item?id=45226903) - [Proton Mail suspended journalist accounts at request of cybersecurity agency](https://theintercept.com/2025/09/12/proton-mail-journalist-accounts-suspended/)
* [2025-09-12, 21:10:00](https://news.slashdot.org/story/25/09/12/2030208/california-bill-lets-renters-escape-exclusive-deals-between-isps-and-landlords?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [California Bill Lets Renters Escape Exclusive Deals Between ISPs and Landlords](https://news.slashdot.org/story/25/09/12/2030208/california-bill-lets-renters-escape-exclusive-deals-between-isps-and-landlords?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-12, 20:59:25](https://lobste.rs/s/pwkci6/meow_yet_another_modal_editing_on_emacs) - [meow: Yet another modal editing on Emacs](https://github.com/meow-edit/meow)
* [2025-09-12, 20:53:33](https://news.ycombinator.com/item?id=45226639) - [I used standard Emacs extension-points to extend org-mode](https://edoput.it/2025/04/16/emacs-paradigm-shift.html)
* [2025-09-12, 20:30:00](https://news.slashdot.org/story/25/09/12/2025228/eu-countries-delay-deal-on-new-climate-goal-diplomats-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EU Countries Delay Deal on New Climate Goal, Diplomats Say](https://news.slashdot.org/story/25/09/12/2025228/eu-countries-delay-deal-on-new-climate-goal-diplomats-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-12, 19:58:00](https://soylentnews.org/article.pl?sid=25/09/11/036213&amp;from=rss) - [LIGO&apos;s Sharpest Detection Yet Confirms Famous Stephen Hawking Theory](https://soylentnews.org/article.pl?sid=25/09/11/036213&amp;from=rss)
* [2025-09-12, 19:54:00](https://news.slashdot.org/story/25/09/12/1954243/colleges-are-about-to-see-a-big-decline-in-applicants?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Colleges Are About to See a Big Decline in Applicants](https://news.slashdot.org/story/25/09/12/1954243/colleges-are-about-to-see-a-big-decline-in-applicants?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-12, 19:10:28](https://lobste.rs/s/j4zqc7/grimoire_css_flexible_utility_class_tool) - [Grimoire CSS - flexible utility class tool](https://grimoirecss.com/)
* [2025-09-12, 19:10:00](https://news.slashdot.org/story/25/09/12/193214/coffee-prices-post-largest-annual-jump-since-1997?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Coffee Prices Post Largest Annual Jump Since 1997 ](https://news.slashdot.org/story/25/09/12/193214/coffee-prices-post-largest-annual-jump-since-1997?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-12, 18:30:15](https://news.ycombinator.com/item?id=45225098) - [UTF-8 is a brilliant design](https://iamvishnu.com/posts/utf8-is-brilliant-design)
* [2025-09-12, 18:30:00](https://tech.slashdot.org/story/25/09/12/1732225/everyone-is-making-smart-glasses-now?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Everyone Is Making Smart Glasses Now](https://tech.slashdot.org/story/25/09/12/1732225/everyone-is-making-smart-glasses-now?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-12, 18:18:00](https://news.ycombinator.com/item?id=45224967) - [EU court rules nuclear energy is clean energy](https://www.weplanet.org/post/eu-court-rules-nuclear-energy-is-clean-energy)
* [2025-09-12, 17:55:54](https://lobste.rs/s/t3wns0/what_happens_after_i_m_gone_future_online) - [What Happens After I&apos;m Gone? The Future of the Online Me](https://btxx.org/posts/planning-ahead/)
* [2025-09-12, 17:40:00](https://slashdot.org/story/25/09/12/1739217/opendoor-board-chair-says-company-is-bloated-needs-to-cut-85-of-workforce?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Opendoor Board Chair Says Company is &apos;Bloated,&apos; Needs To Cut 85% of Workforce](https://slashdot.org/story/25/09/12/1739217/opendoor-board-chair-says-company-is-bloated-needs-to-cut-85-of-workforce?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-12, 17:22:38](https://news.ycombinator.com/item?id=45224421) - [How FOSS Projects Handle Legal Takedown Requests](https://f-droid.org/2025/09/10/how-foss-projects-handle-legal-takedown-requests.html)
* [2025-09-12, 17:13:00](https://slashdot.org/story/25/09/12/1713227/microsoft-is-making-significant-investments-in-training-its-own-ai-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft is Making &apos;Significant Investments&apos; in Training Its Own AI Models](https://slashdot.org/story/25/09/12/1713227/microsoft-is-making-significant-investments-in-training-its-own-ai-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-12, 16:57:17](https://news.ycombinator.com/item?id=45224156) - [QGIS is a free, open-source, cross platform geographical information system](https://github.com/qgis/QGIS)
* [2025-09-12, 16:37:00](https://lobste.rs/s/5p6h8u/from_19k_4_2m_events_sec_story_sqlite_query) - [From 19k to 4.2M events/sec: story of a SQLite query optimisation](https://mnt.io/articles/from-19k-to-4-2m-events-per-sec-story-of-a-sqlite-query-optimisation/)
* [2025-09-12, 16:13:49](https://news.ycombinator.com/item?id=45223719) - [Corporations are trying to hide job openings from US citizens](https://thehill.com/opinion/finance/5498346-corporate-america-has-been-trying-to-hide-job-openings-now-it-is-failing/)
* [2025-09-12, 16:12:28](https://lobste.rs/s/fb75eb/open_edison_mcp_gateway_block_simon) - [open-edison: An MCP Gateway to block Simon Willison&apos;s Lethal Trifecta](https://github.com/Edison-Watch/open-edison)
* [2025-09-12, 16:05:58](https://news.ycombinator.com/item?id=45223660) - [OpenAI Grove](https://openai.com/index/openai-grove/)
* [2025-09-12, 15:54:15](https://lobste.rs/s/2ookth/center_for_alignment_ai_alignment) - [Center for the Alignment of AI Alignment Centers](https://alignmentalignment.ai)
* [2025-09-12, 15:35:19](https://lobste.rs/s/bzzwb7/phishing_campaign_targeting_crates_io) - [Phishing campaign targeting crates.io users](https://blog.rust-lang.org/2025/09/12/crates-io-phishing-campaign/)
* [2025-09-12, 15:14:05](https://lobste.rs/s/kltoas/lobsters_interview_with_susam) - [Lobsters Interview with Susam](https://lobste.rs/s/kltoas/lobsters_interview_with_susam)
* [2025-09-12, 15:13:00](https://soylentnews.org/article.pl?sid=25/09/11/0256255&amp;from=rss) - [Dead Internet Theory Lives: One Out of Three of You is a Bot](https://soylentnews.org/article.pl?sid=25/09/11/0256255&amp;from=rss)
* [2025-09-12, 14:54:24](https://lobste.rs/s/exbkdt/oq_terminal_openapi_spec_viewer) - [oq: Terminal OpenAPI Spec viewer](https://github.com/plutov/oq)
* [2025-09-12, 14:53:45](https://news.ycombinator.com/item?id=45222799) - [Oq: Terminal OpenAPI Spec Viewer](https://github.com/plutov/oq)
* [2025-09-12, 14:44:05](https://news.ycombinator.com/item?id=45222695) - [Many hard LeetCode problems are easy constraint problems](https://buttondown.com/hillelwayne/archive/many-hard-leetcode-problems-are-easy-constraint/)
* [2025-09-12, 14:12:23](https://news.ycombinator.com/item?id=45222369) - [3D modeling with paper](https://www.arvinpoddar.com/blog/3d-modeling-with-paper)
* [2025-09-12, 13:39:15](https://lobste.rs/s/eyjir3/fun_friday_question_what_easter_eggs_have) - [Fun Friday Question: What Easter Eggs have you Found or Made?](https://lobste.rs/s/eyjir3/fun_friday_question_what_easter_eggs_have)
* [2025-09-12, 13:19:19](https://lobste.rs/s/p9abfj/debian_13_postgres_us_time_zones) - [Debian 13, Postgres, and the US/* time zones](https://rachelbythebay.com/w/2025/09/11/debtz/)
* [2025-09-12, 12:38:29](https://lobste.rs/s/2remdu/classic_gtk1_gui_library_for_windows) - [Classic GTK1 GUI Library for Windows, Linux and MacOS](https://gitlab.com/robinrowe/gtk1)
* [2025-09-12, 12:17:28](https://lobste.rs/s/xdrwl3/improving_state_machine_code_generation) - [Improving state machine code generation](https://trifectatech.org/blog/improving-state-machine-code-generation/)
* [2025-09-12, 12:10:29](https://news.ycombinator.com/item?id=45221274) - [The treasury is expanding the Patriot Act to attack Bitcoin self custody](https://www.tftc.io/treasury-iexpanding-patriot-act/)
* [2025-09-12, 10:33:00](https://soylentnews.org/article.pl?sid=25/09/10/2236210&amp;from=rss) - [This is the First Time Scientists Have Seen Decision Making in a Brain](https://soylentnews.org/article.pl?sid=25/09/10/2236210&amp;from=rss)
* [2025-09-12, 09:22:22](https://lobste.rs/s/hkopmb/logging_go_with_slog_practitioner_s_guide) - [Logging in Go with Slog: A Practitioner&apos;s Guide](https://www.dash0.com/guides/logging-in-go-with-slog)
* [2025-09-12, 08:14:40](https://lobste.rs/s/gcygu7/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/gcygu7/what_are_you_doing_this_weekend)
* [2025-09-12, 08:02:20](https://lobste.rs/s/7aer4y/emacs_wants_you_extend_it_sorting_my) - [Emacs Wants You to Extend It: Sorting My Reading List](https://edoput.it/2025/04/16/emacs-paradigm-shift.html)
* [2025-09-12, 07:58:55](https://news.ycombinator.com/item?id=45219817) - [Rust: A quest for performant, reliable software [video]](https://www.youtube.com/watch?v=k_-6KI3m31M)
* [2025-09-12, 06:20:47](https://lobste.rs/s/fwx06s/fatnums_alternate_representation_for) - [FatNums: An Alternate Representation for School Arithmetic (2020)](https://parentheticallyspeaking.org/articles/fat-nums/)
* [2025-09-12, 05:46:00](https://soylentnews.org/article.pl?sid=25/09/10/2228216&amp;from=rss) - [Scientists Discover ‘Clearest Sign’ Yet of Life on Mars](https://soylentnews.org/article.pl?sid=25/09/10/2228216&amp;from=rss)
* [2025-09-12, 04:53:18](https://lobste.rs/s/mftjsk/positive_lambda) - [A positive lambda: &apos;+[]{}&apos;](https://stackoverflow.com/questions/18889028/a-positive-lambda-what-sorcery-is-this)
* [2025-09-12, 02:17:54](https://news.ycombinator.com/item?id=45218017) - [Discovery of a new satellite or ring arc around Quaoar](https://phys.org/news/2025-09-discovery-moon-orbiting-mysterious-distant.html)
* [2025-09-12, 01:01:00](https://soylentnews.org/article.pl?sid=25/09/10/2225205&amp;from=rss) - [Unicode version 17.0.0 Released ](https://soylentnews.org/article.pl?sid=25/09/10/2225205&amp;from=rss)
* [2025-09-11, 20:57:00](https://lobste.rs/s/fqfewf/declarative_music_2_minute_deep_acid) - [Declarative music - 2 Minute Deep Acid in Strudel (from scratch)](https://www.youtube.com/watch?v=HkgV_-nJOuE)
* [2025-09-11, 20:16:00](https://soylentnews.org/article.pl?sid=25/09/10/0627237&amp;from=rss) - [Scientists Create Solar Cells That Generate Energy From Indoor Light at Record Efficiency](https://soylentnews.org/article.pl?sid=25/09/10/0627237&amp;from=rss)
* [2025-09-11, 19:18:16](https://lobste.rs/s/fzzobp/jetzig_web_framework_for_zig) - [Jetzig Web Framework for Zig](https://www.jetzig.dev)
* [2025-09-11, 15:34:00](https://soylentnews.org/article.pl?sid=25/09/10/0624239&amp;from=rss) - [Meta Reportedly Suppressed Research About How Dangerous its VR Headsets Are for Kids](https://soylentnews.org/article.pl?sid=25/09/10/0624239&amp;from=rss)
* [2025-09-11, 15:23:32](https://lobste.rs/s/fetpnl/humanely_dealing_with_humungus_crawlers) - [humanely dealing with humungus crawlers](https://flak.tedunangst.com/post/humanely-dealing-with-humungus-crawlers)
* [2025-09-11, 10:51:00](https://soylentnews.org/article.pl?sid=25/09/10/0619236&amp;from=rss) - [Cannabis Might be Messing With Female Fertility](https://soylentnews.org/article.pl?sid=25/09/10/0619236&amp;from=rss)
* [2025-09-11, 06:05:00](https://soylentnews.org/article.pl?sid=25/09/10/0436239&amp;from=rss) - [Tiny11 Builder Update Lets Users Strip Copilot and Other Bloat From Windows 11](https://soylentnews.org/article.pl?sid=25/09/10/0436239&amp;from=rss)
* [2025-09-11, 01:19:00](https://soylentnews.org/article.pl?sid=25/09/10/0431231&amp;from=rss) - [48 Years Ago, Voyager 1 Left Earth](https://soylentnews.org/article.pl?sid=25/09/10/0431231&amp;from=rss)
* [2025-09-10, 20:29:00](https://soylentnews.org/article.pl?sid=25/09/10/0113202&amp;from=rss) - [Scientists Turned Plastic Trash Into a Material That Eats Carbon](https://soylentnews.org/article.pl?sid=25/09/10/0113202&amp;from=rss)
* [2025-09-10, 15:44:00](https://soylentnews.org/article.pl?sid=25/09/10/0055209&amp;from=rss) - [Ubuntu Software Repositories Unavailable or Slow for Multiple Days Due to Outage](https://soylentnews.org/article.pl?sid=25/09/10/0055209&amp;from=rss)
* [2025-09-10, 10:57:00](https://soylentnews.org/article.pl?sid=25/09/10/0052200&amp;from=rss) - [Amazon&apos;s Project Kuiper Signs Up JetBlue as its First Airline Customer to Use its Satellite Internet](https://soylentnews.org/article.pl?sid=25/09/10/0052200&amp;from=rss)
* [2025-09-10, 06:13:00](https://soylentnews.org/article.pl?sid=25/09/09/1559244&amp;from=rss) - [Congress and Trump May Compromise on the SLS Rocket by Axing its Costly Upper Stage](https://soylentnews.org/article.pl?sid=25/09/09/1559244&amp;from=rss)
* [2025-09-10, 04:28:49](https://news.ycombinator.com/item?id=45193291) - [Automate compile_flags for C/C++ projects on the Zig build system](https://simonhartcher.com/posts/2025-09-08-announcing-compile-flagz/)
* [2025-09-10, 01:28:00](https://soylentnews.org/article.pl?sid=25/09/09/1229205&amp;from=rss) - [Your Red is My Red, at Least to Our Brains](https://soylentnews.org/article.pl?sid=25/09/09/1229205&amp;from=rss)
* [2025-09-09, 20:43:00](https://soylentnews.org/article.pl?sid=25/09/08/1814241&amp;from=rss) - [Microsoft Software Reselling Dispute Heads Back to UK Court](https://soylentnews.org/article.pl?sid=25/09/08/1814241&amp;from=rss)
* [2025-09-09, 15:59:00](https://soylentnews.org/article.pl?sid=25/09/08/1810222&amp;from=rss) - [Multiple Undersea Cable Cuts in the Red Sea, Hampering Internet Performance](https://soylentnews.org/article.pl?sid=25/09/08/1810222&amp;from=rss)
* [2025-09-09, 15:09:34](https://news.ycombinator.com/item?id=45183008) - [Unauthorized Windows/386](https://virtuallyfun.com/2025/09/06/unauthorized-windows-386/)
* [2025-09-09, 14:34:56](https://news.ycombinator.com/item?id=45182518) - [Kefir: Solo-developed full C17/C23 compiler with extensive validation](https://kefir.protopopov.lv/posts/announce0.html)
* [2025-09-09, 14:04:28](https://news.ycombinator.com/item?id=45182098) - [Antlr-Ng Parser Generator](https://www.antlr-ng.org/)
* [2025-09-09, 12:14:58](https://news.ycombinator.com/item?id=45180876) - [Reduce bandwidth costs with dm-cache: fast local SSD caching for network storage](https://devcenter.upsun.com/posts/cut-aws-bandwidth-costs-95-with-dm-cache/)
* [2025-09-09, 11:14:00](https://soylentnews.org/article.pl?sid=25/09/08/1210241&amp;from=rss) - [Recreating &apos;The Magnificient Ambersons&apos; With AI](https://soylentnews.org/article.pl?sid=25/09/08/1210241&amp;from=rss)
* [2025-09-09, 06:27:00](https://soylentnews.org/article.pl?sid=25/09/08/128200&amp;from=rss) - [The World&apos;s Largest Iceberg is Rapidly Breaking Apart and Melting Away](https://soylentnews.org/article.pl?sid=25/09/08/128200&amp;from=rss)
* [2025-09-09, 01:39:00](https://soylentnews.org/article.pl?sid=25/09/08/0254218&amp;from=rss) - [Mazda Patents Six-Stroke Gas Engine](https://soylentnews.org/article.pl?sid=25/09/08/0254218&amp;from=rss)
* [2025-09-09, 00:33:56](https://news.ycombinator.com/item?id=45175982) - [Windows-Use: an AI agent that interacts with Windows at GUI layer](https://github.com/CursorTouch/Windows-Use)
