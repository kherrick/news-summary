# [News Summary](https://kherrick.github.io/news-summary/)

## Technological Innovations and Updates

* [Claude Wrote a Full FreeBSD Remote Kernel RCE with Root Shell (CVE-2026-4747)](https://github.com/califio/publications/blob/main/MADBugs/CVE-2026-4747/write-up.md) - A deep dive into a recently discovered FreeBSD kernel exploit and its implications for system security. [Comments](https://news.ycombinator.com/item?id=47597119)

* [Running DOOM Over DNS Queries](https://soylentnews.org/article.pl?sid=26/03/30/154227&from=rss) - An exploration of a creative method to run DOOM using DNS queries as the transport protocol. [Comments](https://soylentnews.org/article.pl?sid=26/03/30/154227&from=rss)

* [From 300KB to 69KB per Token: How LLM Architectures Solve the KV Cache Problem](https://news.future-shock.ai/the-weight-of-remembering/) - An analysis of the advancements in large language model architectures reducing memory overhead. [Comments](https://news.ycombinator.com/item?id=47558733)

## AI and Research Innovations

* [Neanderthals survived on a knife's edge for 350k years](https://www.science.org/content/article/neanderthals-survived-knife-s-edge-350-000-years) - An in-depth examination of how Neanderthals adapted for survival over hundreds of thousands of years. [Comments](https://news.ycombinator.com/item?id=47595572)

* [Analyzing Geekbench 6 under Intel's BOT](https://www.geekbench.com/blog/2026/03/analyzing-geekbench-6-under-intels-bot/) - A technical analysis of Geekbench performance under Intel's optimization tool. [Comments](https://news.ycombinator.com/item?id=47596457)

* [OpenAI closes funding round at an $852B valuation](https://www.cnbc.com/2026/03/31/openai-funding-round-ipo.html) - OpenAI secures a massive valuation through a major funding round. [Comments](https://news.ycombinator.com/item?id=47593285)

## Cybersecurity Developments

* [Supply Chain Attack on Axios](https://socket.dev/blog/axios-npm-package-compromised) - Details about a critical supply chain attack compromising Axios on npm. [Comments](https://lobste.rs/s/l57wuc/supply_chain_attack_on_axios)

* [RubyGems Fracture Incident Report](https://rubycentral.org/news/rubygems-fracture-incident-report/) - Insights into a major incident affecting RubyGem's systems. [Comments](https://lobste.rs/s/jaibqs/rubygems_fracture_incident_report)

## Space and Scientific Discoveries

* [SpaceX Starlink Satellite Suffers Mysterious 'Anomaly' In Orbit](https://tech.slashdot.org/story/26/03/31/2229204/spacex-starlink-satellite-suffers-mysterious-anomaly-in-orbit?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Coverage of an unexplained anomaly encountered by a Starlink satellite. [Comments](https://tech.slashdot.org/story/26/03/31/2229204/spacex-starlink-satellite-suffers-mysterious-anomaly-in-orbit?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Quadratic Gravity Theory Reshapes Quantum View of Big Bang](https://science.slashdot.org/story/26/03/31/0454242/quadratic-gravity-theory-reshapes-quantum-view-of-big-bang?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A theoretical exploration into how quadratic gravity affects our understanding of the universe's origin. [Comments](https://science.slashdot.org/story/26/03/31/0454242/quadratic-gravity-theory-reshapes-quantum-view-of-big-bang?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Privacy and Surveillance

* [Ranked: The World’s Most Surveilled Cities](https://soylentnews.org/article.pl?sid=26/03/30/151240&from=rss) - A breakdown of cities with the highest levels of surveillance. [Comments](https://soylentnews.org/article.pl?sid=26/03/30/151240&from=rss)

* [Russia Goes After VPNs As 'Great Crackdown' Gathers Pace](https://tech.slashdot.org/story/26/03/31/2233209/russia-goes-after-vpns-as-great-crackdown-gathers-pace?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Russian measures to limit VPN usage amidst increasing government control. [Comments](https://tech.slashdot.org/story/26/03/31/2233209/russia-goes-after-vpns-as-great-crackdown-gathers-pace?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Historic and Cultural Reflections

* [Remembering Magnetic Memories and the Apollo AGC](https://2earth.github.io/website/20260304.html) - A retrospective on the role of magnetic memories in the Apollo Guidance Computer. [Comments](https://news.ycombinator.com/item?id=47597908)

* [After 40 years, arbitrary code execution has been achieved in Super Mario Bros](https://youtu.be/bNulp6cDqUU) - A groundbreaking technical achievement in retro gaming exploitation. [Comments](https://lobste.rs/s/vnlthc/after_40_years_arbitrary_code_execution)

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

* [2026-04-01, 09:20:54](https://lobste.rs/s/5ffpcd/rubysyn_clarifying_ruby_s_syntax) - [Rubysyn: clarifying Ruby&apos;s syntax and semantics](https://github.com/squadette/rubysyn/blob/master/README.md)
* [2026-04-01, 09:00:36](https://lobste.rs/s/zd797w/red_black_tree_lean_4_prover_with) - [Red-black tree in Lean 4 prover with everything proved](https://rentry.co/8sfon8ez)
* [2026-04-01, 08:32:00](https://soylentnews.org/article.pl?sid=26/03/30/154227&amp;from=rss) - [Running DOOM Over DNS Queries](https://soylentnews.org/article.pl?sid=26/03/30/154227&amp;from=rss)
* [2026-04-01, 07:27:13](https://news.ycombinator.com/item?id=47597935) - [CERN levels up with new superconducting karts](https://home.cern/news/news/engineering/cern-levels-new-superconducting-karts)
* [2026-04-01, 07:27:03](https://lobste.rs/s/womghi/reconstructing_full_linux_history) - [Reconstructing full Linux history](https://rentry.co/sv4de7ty)
* [2026-04-01, 07:22:41](https://news.ycombinator.com/item?id=47597908) - [Remembering Magnetic Memories and the Apollo AGC](https://2earth.github.io/website/20260304.html)
* [2026-04-01, 07:00:00](https://tech.slashdot.org/story/26/03/31/2229204/spacex-starlink-satellite-suffers-mysterious-anomaly-in-orbit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SpaceX Starlink Satellite Suffers Mysterious &apos;Anomaly&apos; In Orbit](https://tech.slashdot.org/story/26/03/31/2229204/spacex-starlink-satellite-suffers-mysterious-anomaly-in-orbit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-01, 06:07:52](https://lobste.rs/s/6gqiqy/self_cancelling_subscription) - [The Self-Cancelling Subscription](https://predr.ag/blog/the-self-cancelling-subscription/)
* [2026-04-01, 05:21:48](https://news.ycombinator.com/item?id=47597119) - [Claude Wrote a Full FreeBSD Remote Kernel RCE with Root Shell (CVE-2026-4747)](https://github.com/califio/publications/blob/main/MADBugs/CVE-2026-4747/write-up.md)
* [2026-04-01, 05:15:37](https://news.ycombinator.com/item?id=47597085) - [Claude Code Unpacked : A visual guide](https://ccunpacked.dev/)
* [2026-04-01, 03:44:00](https://soylentnews.org/article.pl?sid=26/03/30/151240&amp;from=rss) - [Ranked: The World’s Most Surveilled Cities](https://soylentnews.org/article.pl?sid=26/03/30/151240&amp;from=rss)
* [2026-04-01, 03:30:00](https://tech.slashdot.org/story/26/03/31/2233209/russia-goes-after-vpns-as-great-crackdown-gathers-pace?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Russia Goes After VPNs As &apos;Great Crackdown&apos; Gathers Pace](https://tech.slashdot.org/story/26/03/31/2233209/russia-goes-after-vpns-as-great-crackdown-gathers-pace?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-01, 03:27:38](https://news.ycombinator.com/item?id=47596457) - [Analyzing Geekbench 6 under Intel&apos;s BOT](https://www.geekbench.com/blog/2026/03/analyzing-geekbench-6-under-intels-bot/)
* [2026-04-01, 02:53:15](https://lobste.rs/s/vnlthc/after_40_years_arbitrary_code_execution) - [After 40 years, arbitrary code execution has been achieved in Super Mario Bros](https://youtu.be/bNulp6cDqUU)
* [2026-04-01, 02:42:24](https://lobste.rs/s/mgga0o/dsts_are_just_polymorphically_compiled) - [DSTs Are Just Polymorphically Compiled Generics](https://faultlore.com/blah/dsts-are-polymorphic-generics/)
* [2026-04-01, 01:12:12](https://news.ycombinator.com/item?id=47595572) - [Neanderthals survived on a knife&apos;s edge for 350k years](https://www.science.org/content/article/neanderthals-survived-knife-s-edge-350-000-years)
* [2026-04-01, 01:11:36](https://lobste.rs/s/olipz6/early_observations_from_interviews_with) - [Early observations from Interviews with Engineering Teams Adopting AI](https://jonathannen.com/observations-from-interviews/)
* [2026-04-01, 00:16:22](https://lobste.rs/s/rqzqjz/i_made_keyboard_nobody_asked_for_my) - [I Made a Keyboard Nobody Asked For: My Experience Making TapType](https://fireborn.mataroa.blog/blog/i-made-a-keyboard-nobody-asked-for-my-experience-making-taptype/)
* [2026-03-31, 23:01:00](https://soylentnews.org/article.pl?sid=26/03/30/1458237&amp;from=rss) - [China&apos;s Not Thrilled its AI Experts Want to Leave the Country](https://soylentnews.org/article.pl?sid=26/03/30/1458237&amp;from=rss)
* [2026-03-31, 23:00:00](https://tech.slashdot.org/story/26/03/31/2035210/volvo-shifts-polestar-3-production-entirely-to-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Volvo Shifts Polestar 3 Production Entirely To the US](https://tech.slashdot.org/story/26/03/31/2035210/volvo-shifts-polestar-3-production-entirely-to-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-31, 22:55:39](https://lobste.rs/s/6c8cwq/reading_leaked_claude_code_source_code) - [Reading leaked Claude Code source code](https://lr0.org/blog/p/claude-code-source/)
* [2026-03-31, 22:15:23](https://lobste.rs/s/sgpxyf/gaim_3_exists) - [Gaim 3 Exists](https://gaim.imfreedom.org/)
* [2026-03-31, 22:00:00](https://developers.slashdot.org/story/26/03/31/2023228/oracle-cuts-thousands-of-jobs-across-sales-engineering-security?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Oracle Cuts Thousands of Jobs Across Sales, Engineering, Security](https://developers.slashdot.org/story/26/03/31/2023228/oracle-cuts-thousands-of-jobs-across-sales-engineering-security?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-31, 21:22:48](https://news.ycombinator.com/item?id=47593634) - [Ordinary Lab Gloves May Have Skewed Microplastic Data](https://nautil.us/ordinary-lab-gloves-may-have-skewed-microplastic-data-1279386)
* [2026-03-31, 21:16:35](https://lobste.rs/s/lv540l/plakar_openbsd) - [plakar + openbsd](https://x61.sh/log/2026/03/25032026151800-plakar.html)
* [2026-03-31, 21:15:01](https://news.ycombinator.com/item?id=47593556) - [A dot a day keeps the clutter away](https://scottlawsonbc.com/post/dot-system)
* [2026-03-31, 21:03:30](https://lobste.rs/s/lqyne4/wastrelly_wabbits) - [wastrelly wabbits](https://wingolog.org/archives/2026/03/31/wastrelly-wabbits)
* [2026-03-31, 21:01:18](https://news.ycombinator.com/item?id=47593422) - [Show HN: 1-Bit Bonsai, the First Commercially Viable 1-Bit LLMs](https://prismml.com/)
* [2026-03-31, 21:00:00](https://yro.slashdot.org/story/26/03/31/1859249/top-brussels-official-urges-europeans-to-work-from-home-drive-less-as-energy-crisis-deepens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Top Brussels Official Urges Europeans To Work From Home, Drive Less As Energy Crisis Deepens](https://yro.slashdot.org/story/26/03/31/1859249/top-brussels-official-urges-europeans-to-work-from-home-drive-less-as-energy-crisis-deepens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-31, 20:48:15](https://news.ycombinator.com/item?id=47593285) - [MiniStack (replacement for LocalStack)](https://ministack.org/)
* [2026-03-31, 20:31:41](https://lobste.rs/s/n42iq0/pidgin_3_0_alpha_1_2_95_0_has_been_released) - [Pidgin 3.0 Alpha 1 2.95.0 has been released](https://discourse.imfreedom.org/t/pidgin-3-0-alpha-1-2-95-0-has-been-released/378)
* [2026-03-31, 20:07:30](https://news.ycombinator.com/item?id=47592755) - [OpenAI closes funding round at an $852B valuation](https://www.cnbc.com/2026/03/31/openai-funding-round-ipo.html)
* [2026-03-31, 20:00:00](https://tech.slashdot.org/story/26/03/31/1844253/google-now-lets-you-change-your-gmail-address?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Now Lets You Change Your Gmail Address](https://tech.slashdot.org/story/26/03/31/1844253/google-now-lets-you-change-your-gmail-address?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-31, 19:03:06](https://lobste.rs/s/hssl4e/your_hex_editor_should_color_code_bytes) - [your hex editor should color-code bytes](https://simonomi.dev/blog/color-code-your-bytes/)
* [2026-03-31, 19:00:00](https://news.slashdot.org/story/26/03/31/1837244/global-ban-on-digital-duties-expires-after-stalled-talks-at-wto-meeting?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Global Ban On Digital Duties Expires After Stalled Talks At WTO Meeting](https://news.slashdot.org/story/26/03/31/1837244/global-ban-on-digital-duties-expires-after-stalled-talks-at-wto-meeting?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-31, 18:27:16](https://lobste.rs/s/s5z94j/historical_github_uptime_charts) - [Historical GitHub Uptime Charts](https://damrnelson.github.io/github-historical-uptime/)
* [2026-03-31, 18:13:00](https://soylentnews.org/article.pl?sid=26/03/30/1454213&amp;from=rss) - [Number of AI Chatbots Ignoring Human Instructions is Increasing  ](https://soylentnews.org/article.pl?sid=26/03/30/1454213&amp;from=rss)
* [2026-03-31, 18:00:00](https://yro.slashdot.org/story/26/03/31/1717242/australia-readies-social-media-court-action-citing-teen-ban-breaches?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Australia Readies Social Media Court Action Citing Teen Ban Breaches](https://yro.slashdot.org/story/26/03/31/1717242/australia-readies-social-media-court-action-citing-teen-ban-breaches?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-31, 17:05:00](https://developers.slashdot.org/story/26/03/31/172257/claude-codes-source-code-leaks-via-npm-source-maps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Claude Code&apos;s Source Code Leaks Via npm Source Maps](https://developers.slashdot.org/story/26/03/31/172257/claude-codes-source-code-leaks-via-npm-source-maps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-31, 16:29:52](https://news.ycombinator.com/item?id=47589856) - [Show HN: Postgres extension for BM25 relevance-ranked full-text search](https://github.com/timescale/pg_textsearch)
* [2026-03-31, 16:27:02](https://news.ycombinator.com/item?id=47589818) - [Cohere Transcribe: Speech Recognition](https://cohere.com/blog/transcribe)
* [2026-03-31, 16:00:00](https://slashdot.org/story/26/03/31/0438235/euro-office-wants-to-replace-google-docs-and-microsoft-office?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Euro-Office Wants To Replace Google Docs and Microsoft Office](https://slashdot.org/story/26/03/31/0438235/euro-office-wants-to-replace-google-docs-and-microsoft-office?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-31, 15:44:03](https://lobste.rs/s/g2v6oe/software_you_can_love_2026_tickets_are_on) - [Software You Can Love 2026 tickets are on sale](https://mattnite.net/blog/sycl-2026-tickets-are-here/)
* [2026-03-31, 15:17:40](https://lobste.rs/s/kp6eap/subprime_technical_debt_crisis) - [The Subprime Technical Debt Crisis](https://blog.happyfellow.dev/the-subprime-technical-debt-crisis/)
* [2026-03-31, 15:00:00](https://yro.slashdot.org/story/26/03/31/0413258/us-paves-way-for-private-assets-to-be-included-in-401k-retirement-plans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Paves Way For Private Assets To Be Included In 401(k) Retirement Plans](https://yro.slashdot.org/story/26/03/31/0413258/us-paves-way-for-private-assets-to-be-included-in-401k-retirement-plans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-31, 14:32:26](https://news.ycombinator.com/item?id=47587953) - [Slop is not necessarily the future](https://www.greptile.com/blog/ai-slopware-future)
* [2026-03-31, 14:08:03](https://lobste.rs/s/jaibqs/rubygems_fracture_incident_report) - [RubyGems Fracture Incident Report](https://rubycentral.org/news/rubygems-fracture-incident-report/)
* [2026-03-31, 13:05:57](https://lobste.rs/s/fbxzte/february_servo_faster_layout_pause) - [February in Servo: faster layout, pause and resume scripts, and more](https://servo.org/blog/2026/03/31/february-in-servo/)
* [2026-03-31, 13:04:30](https://news.ycombinator.com/item?id=47586778) - [The Claude Code Source Leak: fake tools, frustration regexes, undercover mode](https://alex000kim.com/posts/2026-03-31-claude-code-source-leak/)
* [2026-03-31, 12:50:23](https://news.ycombinator.com/item?id=47586614) - [Open source CAD in the browser (Solvespace)](https://solvespace.com/webver.pl)
* [2026-03-31, 11:29:40](https://lobste.rs/s/uf8z1b/autoscaling_ci_for_gitea_rust) - [Autoscaling CI for Gitea in Rust](https://rustunit.com/blog/2026/03-30-gitea-ci-autoscaler/)
* [2026-03-31, 11:25:00](https://soylentnews.org/article.pl?sid=26/03/30/0239206&amp;from=rss) - [Court Temporarily Blocks US Government From Labeling Anthropic as a &apos;Supply Chain Risk&apos;](https://soylentnews.org/article.pl?sid=26/03/30/0239206&amp;from=rss)
* [2026-03-31, 11:00:00](https://science.slashdot.org/story/26/03/31/0454242/quadratic-gravity-theory-reshapes-quantum-view-of-big-bang?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Quadratic Gravity Theory Reshapes Quantum View of Big Bang](https://science.slashdot.org/story/26/03/31/0454242/quadratic-gravity-theory-reshapes-quantum-view-of-big-bang?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-31, 09:30:43](https://news.ycombinator.com/item?id=47584795) - [Why the US Navy won&apos;t blast the Iranians and &apos;open&apos; Strait of Hormuz](https://responsiblestatecraft.org/iran-strait-of-hormuz/)
* [2026-03-31, 07:28:23](https://lobste.rs/s/l57wuc/supply_chain_attack_on_axios) - [Supply Chain Attack on Axios](https://socket.dev/blog/axios-npm-package-compromised)
* [2026-03-31, 07:02:06](https://lobste.rs/s/qmb53b/let_commits_tell_story) - [Let the commits tell the story](https://chrismaiorana.com/git-commits-tell-the-story/)
* [2026-03-31, 07:00:00](https://science.slashdot.org/story/26/03/31/0421252/scientists-shocked-to-find-lab-gloves-may-be-skewing-microplastics-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Shocked To Find Lab Gloves May Be Skewing Microplastics Data](https://science.slashdot.org/story/26/03/31/0421252/scientists-shocked-to-find-lab-gloves-may-be-skewing-microplastics-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-31, 06:42:00](https://soylentnews.org/article.pl?sid=26/03/30/0233201&amp;from=rss) - [Touchscreens, Long Nails, and an Experimental Polish](https://soylentnews.org/article.pl?sid=26/03/30/0233201&amp;from=rss)
* [2026-03-31, 04:12:15](https://lobste.rs/s/nz2wdr/why_have_supply_chain_attacks_become_near) - [Why have supply chain attacks become a near daily occurrence ?](https://lobste.rs/s/nz2wdr/why_have_supply_chain_attacks_become_near)
* [2026-03-31, 03:30:00](https://developers.slashdot.org/story/26/03/30/2337240/ai-data-centers-can-warm-surrounding-areas-by-up-to-91c?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Data Centers Can Warm Surrounding Areas By Up To 9.1C](https://developers.slashdot.org/story/26/03/30/2337240/ai-data-centers-can-warm-surrounding-areas-by-up-to-91c?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-31, 02:54:17](https://news.ycombinator.com/item?id=47582220) - [Axios compromised on NPM – Malicious versions drop remote access trojan](https://www.stepsecurity.io/blog/axios-compromised-on-npm-malicious-versions-drop-remote-access-trojan)
* [2026-03-31, 01:56:00](https://soylentnews.org/article.pl?sid=26/03/29/1343212&amp;from=rss) - [Are US-Based VPN Users at Risk of Being Treated as Foreign Surveillance Targets?](https://soylentnews.org/article.pl?sid=26/03/29/1343212&amp;from=rss)
* [2026-03-30, 23:00:00](https://tech.slashdot.org/story/26/03/30/2245259/microsoft-plans-to-build-100-native-apps-for-windows-11?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Plans To Build 100% Native Apps For Windows 11](https://tech.slashdot.org/story/26/03/30/2245259/microsoft-plans-to-build-100-native-apps-for-windows-11?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-30, 21:12:00](https://soylentnews.org/article.pl?sid=26/03/29/1333211&amp;from=rss) - [Over Half of UK Businesses Have No Idea How Fast They Could Stop AI in a Crisis](https://soylentnews.org/article.pl?sid=26/03/29/1333211&amp;from=rss)
* [2026-03-30, 16:25:00](https://soylentnews.org/article.pl?sid=26/03/29/1329244&amp;from=rss) - [Water Has a Newfound ‘Critical Point’ That May Help Explain its Quirks](https://soylentnews.org/article.pl?sid=26/03/29/1329244&amp;from=rss)
* [2026-03-30, 15:55:11](https://lobste.rs/s/fug4fz/your_job_isn_t_programming) - [Your job isn&apos;t programming](https://codeandcake.dev/posts/2025-12-12-your-job-isnt-programming)
* [2026-03-30, 14:45:35](https://news.ycombinator.com/item?id=47575039) - [In Case of Emergency, Make Burrito Bison 3](https://juicybeast.com/2017/08/03/in-case-of-emergency-make-burrito-bison-3/)
* [2026-03-30, 13:18:43](https://lobste.rs/s/0o60nu/copilot_edited_ad_into_my_pr) - [copilot edited an ad into my pr](https://notes.zachmanson.com/copilot-edited-an-ad-into-my-pr/)
* [2026-03-30, 12:31:52](https://news.ycombinator.com/item?id=47573450) - [Intuiting Pratt Parsing](https://louis.co.nz/2026/03/26/pratt-parsing.html)
* [2026-03-30, 11:40:00](https://soylentnews.org/article.pl?sid=26/03/29/1321221&amp;from=rss) - [I Decompiled the White House&apos;s New App](https://soylentnews.org/article.pl?sid=26/03/29/1321221&amp;from=rss)
* [2026-03-30, 06:50:00](https://soylentnews.org/article.pl?sid=26/03/28/0354240&amp;from=rss) - [The Drone Swarm is Coming, and NATO Air Defenses Are Too Expensive to Cope](https://soylentnews.org/article.pl?sid=26/03/28/0354240&amp;from=rss)
* [2026-03-30, 06:45:58](https://news.ycombinator.com/item?id=47571183) - [Show HN: CLI to order groceries via reverse-engineered REWE API (Haskell)](https://github.com/yannick-cw/korb)
* [2026-03-30, 02:07:00](https://soylentnews.org/article.pl?sid=26/03/28/0349246&amp;from=rss) - [Google Unveils TurboQuant, a New AI Memory Compression Algorithm](https://soylentnews.org/article.pl?sid=26/03/28/0349246&amp;from=rss)
* [2026-03-29, 21:26:00](https://soylentnews.org/article.pl?sid=26/03/28/0347204&amp;from=rss) - [A 32-Year-Old Bug Walks Into a Telnet Server](https://soylentnews.org/article.pl?sid=26/03/28/0347204&amp;from=rss)
* [2026-03-29, 16:32:00](https://soylentnews.org/article.pl?sid=26/03/28/0345249&amp;from=rss) - [Google is Now Changing News Headlines – Without Permission](https://soylentnews.org/article.pl?sid=26/03/28/0345249&amp;from=rss)
* [2026-03-29, 13:25:16](https://news.ycombinator.com/item?id=47562961) - [Chess in SQL](https://www.dbpro.app/blog/chess-in-pure-sql)
* [2026-03-29, 11:52:00](https://soylentnews.org/article.pl?sid=26/03/27/0334236&amp;from=rss) - [Pilot Didn&apos;t Mind NASA&apos;s Experimental Plane Doesnt Have a Front Window](https://soylentnews.org/article.pl?sid=26/03/27/0334236&amp;from=rss)
* [2026-03-29, 11:50:44](https://news.ycombinator.com/item?id=47562342) - [Digitizing photos from the 1998 Game Boy Camera](https://swiftrocks.com/digitizing-photos-from-the-1998-game-boy-camera)
* [2026-03-29, 07:03:00](https://soylentnews.org/article.pl?sid=26/03/27/0325254&amp;from=rss) - [Someone Forked systemd to Strip Out Its Age Verification Support](https://soylentnews.org/article.pl?sid=26/03/27/0325254&amp;from=rss)
* [2026-03-29, 02:18:00](https://soylentnews.org/article.pl?sid=26/03/27/0319208&amp;from=rss) - [Nvidia CEO Jensen Huang Says ‘I Think We&apos;ve Achieved AGI’](https://soylentnews.org/article.pl?sid=26/03/27/0319208&amp;from=rss)
* [2026-03-28, 22:42:23](https://news.ycombinator.com/item?id=47558733) - [From 300KB to 69KB per Token: How LLM Architectures Solve the KV Cache Problem](https://news.future-shock.ai/the-weight-of-remembering/)
* [2026-03-28, 21:34:00](https://soylentnews.org/article.pl?sid=26/03/27/0310204&amp;from=rss) - [Age Checks Creep Into Linux, systemd Locks It in, Developer Defends Himself](https://soylentnews.org/article.pl?sid=26/03/27/0310204&amp;from=rss)
* [2026-03-28, 21:04:06](https://news.ycombinator.com/item?id=47558101) - [Bring Back MiniDV with This Raspberry Pi FireWire Hat](https://www.jeffgeerling.com/blog/2026/minidv-with-raspberry-pi-firewire-hat/)
* [2026-03-28, 18:39:39](https://news.ycombinator.com/item?id=47557171) - [TruffleRuby](https://chrisseaton.com/truffleruby/)
* [2026-03-28, 16:51:00](https://soylentnews.org/article.pl?sid=26/03/26/0657232&amp;from=rss) - [CERN Scientists Burn AI Into Silicon to Stem Data Deluge](https://soylentnews.org/article.pl?sid=26/03/26/0657232&amp;from=rss)
* [2026-03-28, 12:09:00](https://soylentnews.org/article.pl?sid=26/03/26/0650221&amp;from=rss) - [Elon Musk Wants to Build 50 Times More Chips Than the World Currently Produces, Using &apos;New Physics&apos;](https://soylentnews.org/article.pl?sid=26/03/26/0650221&amp;from=rss)
* [2026-03-28, 07:24:00](https://soylentnews.org/article.pl?sid=26/03/26/0645257&amp;from=rss) - [Australia to Datacenter Operators: BYO Energy, Pay Your Way, Build Green, or Stay Home](https://soylentnews.org/article.pl?sid=26/03/26/0645257&amp;from=rss)
* [2026-03-28, 02:36:00](https://soylentnews.org/article.pl?sid=26/03/26/0644236&amp;from=rss) - [An Uncontrolled Experiment in Atmospheric Chemistry](https://soylentnews.org/article.pl?sid=26/03/26/0644236&amp;from=rss)
* [2026-03-28, 01:04:56](https://news.ycombinator.com/item?id=47550433) - [Teenage Engineering&apos;s PO-32 acoustic modem and synth implementation](https://github.com/ericlewis/libpo32)
