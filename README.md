# [News Summary](https://kherrick.github.io/news-summary/)

## Major Technology and Industry Developments

* [Google Hit With $3.45 Billion EU Antitrust Fine Over Adtech Practices](https://tech.slashdot.org/story/25/09/05/1527251/google-hit-with-345-billion-eu-antitrust-fine-over-adtech-practices?utm_source=rss1.0mainlinkanon&utm_medium=feed) - European regulators target Google's advertising practices with a record-breaking fine.

* [Google Deletes Net-Zero Pledge From Sustainability Website](https://tech.slashdot.org/story/25/09/05/135248/google-deletes-net-zero-pledge-from-sustainability-website?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Google retracts its environmental commitments, sparking criticism.

* [Amazon's Project Kuiper Strikes Its First Satellite Internet Deal With an Airline](https://mobile.slashdot.org/story/25/09/04/2317243/amazons-project-kuiper-strikes-its-first-satellite-internet-deal-with-an-airline?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Amazon's satellite internet initiative makes inroads into airline connectivity.

## Emerging Innovations and Research

* [Stressed Ice Generates Electricity, Researchers Find](https://soylentnews.org/article.pl?sid=25/09/04/0430216&from=rss) - A novel approach discovers how mechanical stress on ice can produce electricity.

* [First Brain-Wide Map of Decision-Making Charted In Mice](https://science.slashdot.org/story/25/09/04/2311257/first-brain-wide-map-of-decision-making-charted-in-mice?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Groundbreaking neuroscience research maps decision-making processes.

* [WiFi signals can measure heart rate](https://news.ucsc.edu/2025/09/pulse-fi-wifi-heart-rate/) - Revolutionary technology utilizes WiFi signals for non-invasive medical monitoring.

## Programming and Developer Insights

* [Protobuffers Are Wrong](https://reasonablypolymorphic.com/blog/protos-are-wrong/) - A critique of protobuffer implementation and its effects on software development.

* [I Ditched Docker for Podman (and You Should Too)](https://codesmash.dev/why-i-ditched-docker-for-podman-and-you-should-too) - A developer shares their journey from Docker to Podman.

* [Why ML Needs a New Programming Language](https://signalsandthreads.com/why-ml-needs-a-new-programming-language/) - The argument for an updated programming paradigm tailored for machine learning.

## AI and Automation Impacts

* [OpenAI eats jobs, then offers to help you find a new one at Walmart](https://www.theregister.com/2025/09/05/openai_jobs_board/) - Examining how AI systems are disrupting industries and employment.

* [Uber India Starts Offering Drivers Gigs Collecting and Classifying Info For AI Models](https://yro.slashdot.org/story/25/09/05/1315244/uber-india-starts-offering-drivers-gigs-collecting-and-classifying-info-for-ai-models?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Uber's innovative gig economy work moves into data collection for artificial intelligence.

## Consumer Tech and Gadgets

* [1TB Raspberry Pi SSD on sale now for $70](https://www.raspberrypi.com/news/1tb-raspberry-pi-ssd-on-sale-now-for-70/) - Affordable storage alternatives for Raspberry Pi enthusiasts.

* [Bathroom Doomscrolling May Increase Your Risk of Hemorrhoids](https://science.slashdot.org/story/25/09/04/2159215/bathroom-doomscrolling-may-increase-your-risk-of-hemorrhoids?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Study links bathroom phone use to increased health risks like hemorrhoids.

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

* [2025-09-05, 16:00:00](https://tech.slashdot.org/story/25/09/05/1527251/google-hit-with-345-billion-eu-antitrust-fine-over-adtech-practices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Hit With $3.45 Billion EU Antitrust Fine Over Adtech Practices](https://tech.slashdot.org/story/25/09/05/1527251/google-hit-with-345-billion-eu-antitrust-fine-over-adtech-practices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 15:25:10](https://news.ycombinator.com/item?id=45139656) - [Protobuffers Are Wrong](https://reasonablypolymorphic.com/blog/protos-are-wrong/)
* [2025-09-05, 15:20:00](https://ask.slashdot.org/story/25/09/05/1515244/slashdot-asks-can-panasonic-reinvent-itself?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Slashdot Asks: Can Panasonic Reinvent Itself?](https://ask.slashdot.org/story/25/09/05/1515244/slashdot-asks-can-panasonic-reinvent-itself?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 14:57:44](https://lobste.rs/s/o0x7rb/your_mouse_free_setups) - [Your mouse-free setups](https://lobste.rs/s/o0x7rb/your_mouse_free_setups)
* [2025-09-05, 14:52:37](https://news.ycombinator.com/item?id=45139270) - [A computer upgrade has shut down BART](https://www.bart.gov/news/articles/2025/news20250905)
* [2025-09-05, 14:40:00](https://tech.slashdot.org/story/25/09/05/135248/google-deletes-net-zero-pledge-from-sustainability-website?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Deletes Net-Zero Pledge From Sustainability Website](https://tech.slashdot.org/story/25/09/05/135248/google-deletes-net-zero-pledge-from-sustainability-website?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 14:20:07](https://news.ycombinator.com/item?id=45138932) - [1TB Raspberry Pi SSD on sale now for $70](https://www.raspberrypi.com/news/1tb-raspberry-pi-ssd-on-sale-now-for-70/)
* [2025-09-05, 14:15:31](https://lobste.rs/s/ciqk7x/use_singular_nouns_for_database_table) - [Use singular nouns for database table names](https://www.teamten.com/lawrence/programming/use-singular-nouns-for-database-table-names.html)
* [2025-09-05, 14:00:00](https://yro.slashdot.org/story/25/09/05/1315244/uber-india-starts-offering-drivers-gigs-collecting-and-classifying-info-for-ai-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Uber India Starts Offering Drivers Gigs Collecting and Classifying Info For AI Models](https://yro.slashdot.org/story/25/09/05/1315244/uber-india-starts-offering-drivers-gigs-collecting-and-classifying-info-for-ai-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 13:42:44](https://lobste.rs/s/m6vk7v/stelvio_aws_for_python_devs_made_simple) - [stelvio: AWS for Python devs - made simple](https://github.com/michal-stlv/stelvio)
* [2025-09-05, 13:13:41](https://news.ycombinator.com/item?id=45138156) - [Development Speed Has Never Been a Bottleneck](https://pawelbrodzinski.substack.com/p/development-speed-is-not-a-bottleneck)
* [2025-09-05, 12:51:27](https://news.ycombinator.com/item?id=45137927) - [Data Modeling Guide for Real-Time Analytics with ClickHouse](https://www.ssp.sh/blog/practical-data-modeling-clickhouse/)
* [2025-09-05, 12:50:00](https://news.ycombinator.com/item?id=45137914) - [Lava RGB](https://amaiorano.io/2025/09/03/lava-rgb.html)
* [2025-09-05, 12:36:47](https://news.ycombinator.com/item?id=45137802) - [You&apos;re absolutely Right!](https://absolutelyright.lol/)
* [2025-09-05, 12:28:00](https://soylentnews.org/article.pl?sid=25/09/04/0430216&amp;from=rss) - [Stressed Ice Generates Electricity, Researchers Find](https://soylentnews.org/article.pl?sid=25/09/04/0430216&amp;from=rss)
* [2025-09-05, 12:17:22](https://news.ycombinator.com/item?id=45137658) - [OpenAI eats jobs, then offers to help you find a new one at Walmart](https://www.theregister.com/2025/09/05/openai_jobs_board/)
* [2025-09-05, 12:17:16](https://news.ycombinator.com/item?id=45137656) - [Using Your Phone on Toilet May Give You Hemorrhoids: Study](https://www.nbcnews.com/health/health-news/phone-use-hemorrhoids-bathroom-social-media-scrolling-rcna228080)
* [2025-09-05, 12:01:09](https://news.ycombinator.com/item?id=45137554) - [Relace (YC W23) Is Hiring for Code LLM&apos;s (SF)](https://news.ycombinator.com/item?id=45137554)
* [2025-09-05, 11:56:59](https://news.ycombinator.com/item?id=45137525) - [I Ditched Docker for Podman (and You Should Too)](https://codesmash.dev/why-i-ditched-docker-for-podman-and-you-should-too)
* [2025-09-05, 11:33:48](https://news.ycombinator.com/item?id=45137373) - [Why ML Needs a New Programming Language](https://signalsandthreads.com/why-ml-needs-a-new-programming-language/)
* [2025-09-05, 11:08:26](https://news.ycombinator.com/item?id=45137245) - [Interview with Japanese Demoscener – 0b5vr](https://6octaves.com/2025/09/interview-with-demoscener-0b5vr.html)
* [2025-09-05, 10:00:00](https://news.slashdot.org/story/25/09/04/2326232/uk-government-trial-of-m365-copilot-finds-no-clear-productivity-boost?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Government Trial of M365 Copilot Finds No Clear Productivity Boost](https://news.slashdot.org/story/25/09/04/2326232/uk-government-trial-of-m365-copilot-finds-no-clear-productivity-boost?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 09:05:42](https://lobste.rs/s/ezmgyy/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/ezmgyy/what_are_you_doing_this_weekend)
* [2025-09-05, 08:19:28](https://lobste.rs/s/d30ska/nixos_is_endgame_distrohopping) - [NixOS is the endgame of distrohopping](https://joshblais.com/blog/nixos-is-the-endgame-of-distrohopping/)
* [2025-09-05, 08:00:34](https://lobste.rs/s/noazra/capitalization_initialisms_2009) - [Capitalization of Initialisms (2009)](https://www.teamten.com/lawrence/writings/capitalization_of_initialisms.html)
* [2025-09-05, 07:47:00](https://soylentnews.org/article.pl?sid=25/09/04/0419219&amp;from=rss) - [Google Won&apos;t Have to Sell Chrome, Judge Rules](https://soylentnews.org/article.pl?sid=25/09/04/0419219&amp;from=rss)
* [2025-09-05, 07:03:08](https://lobste.rs/s/gsmdft/radicle_1_4_0_lily) - [Radicle 1.4.0 – Lily](https://radicle.xyz/2025/09/04/radicle-1.4.0)
* [2025-09-05, 07:00:00](https://mobile.slashdot.org/story/25/09/04/2317243/amazons-project-kuiper-strikes-its-first-satellite-internet-deal-with-an-airline?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon&apos;s Project Kuiper Strikes Its First Satellite Internet Deal With an Airline](https://mobile.slashdot.org/story/25/09/04/2317243/amazons-project-kuiper-strikes-its-first-satellite-internet-deal-with-an-airline?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 06:42:05](https://lobste.rs/s/rylewy/sql_needed_structure) - [SQL needed structure](https://www.scattered-thoughts.net/writing/sql-needed-structure/)
* [2025-09-05, 05:57:10](https://lobste.rs/s/rfbvqb/type_checking_is_symptom_not_solution) - [Type Checking is a Symptom, Not a Solution](https://programmingsimplicity.substack.com/p/type-checking-is-a-symptom-not-a)
* [2025-09-05, 05:01:41](https://lobste.rs/s/atvx0k/if_i_hear_design_pattern_one_more_time_i_ll) - [If I hear \&quot;design pattern\&quot; one more time, I&apos;ll go mad](https://purplesyringa.moe/blog/if-i-hear-design-pattern-one-more-time-ill-go-mad/)
* [2025-09-05, 03:50:14](https://lobste.rs/s/d9jbh9/dealing_with_cancel_safety_async_rust) - [Dealing with cancel safety in async Rust](https://rfd.shared.oxide.computer/rfd/400)
* [2025-09-05, 03:47:27](https://lobste.rs/s/q7b1gm/fil_s_unbelievable_garbage_collector) - [Fil&apos;s Unbelievable Garbage Collector](https://fil-c.org/fugc)
* [2025-09-05, 03:30:31](https://lobste.rs/s/uxbodb/trying_make_sense_casing_conventions_on) - [Trying to Make Sense of Casing Conventions on the Web](https://blog.jim-nielsen.com/2025/casing-on-the-web/)
* [2025-09-05, 03:30:00](https://news.slashdot.org/story/25/09/04/2258256/air-pollution-can-drive-devastating-forms-of-dementia-research-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Air Pollution Can Drive Devastating Forms of Dementia, Research Suggests](https://news.slashdot.org/story/25/09/04/2258256/air-pollution-can-drive-devastating-forms-of-dementia-research-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 03:03:00](https://soylentnews.org/article.pl?sid=25/09/04/0414246&amp;from=rss) - [U.S. Gov&apos;t Revokes TSMC&apos;s Authorization to Ship Tools to its Fabs in China](https://soylentnews.org/article.pl?sid=25/09/04/0414246&amp;from=rss)
* [2025-09-05, 02:40:12](https://lobste.rs/s/qdsiyi/evolving_ocaml_programming_language) - [Evolving the OCaml Programming Language (2025)](https://kcsrk.info/slides/Evolution_Ashoka_2025.pdf)
* [2025-09-05, 02:02:00](https://science.slashdot.org/story/25/09/04/2311257/first-brain-wide-map-of-decision-making-charted-in-mice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [First Brain-Wide Map of Decision-Making Charted In Mice](https://science.slashdot.org/story/25/09/04/2311257/first-brain-wide-map-of-decision-making-charted-in-mice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 01:25:00](https://yro.slashdot.org/story/25/09/04/2251235/mark-zuckerberg-sues-mark-zuckerberg?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mark Zuckerberg Sues Mark Zuckerberg](https://yro.slashdot.org/story/25/09/04/2251235/mark-zuckerberg-sues-mark-zuckerberg?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 00:55:52](https://news.ycombinator.com/item?id=45133938) - [Fil&apos;s Unbelievable Garbage Collector](https://fil-c.org/fugc)
* [2025-09-05, 00:45:00](https://yro.slashdot.org/story/25/09/04/2236226/warner-bros-discovery-sues-midjourney-for-copyright-infringement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Warner Bros. Discovery Sues Midjourney For Copyright Infringement](https://yro.slashdot.org/story/25/09/04/2236226/warner-bros-discovery-sues-midjourney-for-copyright-infringement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 00:05:50](https://news.ycombinator.com/item?id=45133652) - [Evolving the OCaml Programming Language (2025) [pdf]](https://kcsrk.info/slides/Evolution_Ashoka_2025.pdf)
* [2025-09-05, 00:02:00](https://science.slashdot.org/story/25/09/04/2159215/bathroom-doomscrolling-may-increase-your-risk-of-hemorrhoids?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bathroom Doomscrolling May Increase Your Risk of Hemorrhoids](https://science.slashdot.org/story/25/09/04/2159215/bathroom-doomscrolling-may-increase-your-risk-of-hemorrhoids?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 23:20:00](https://hardware.slashdot.org/story/25/09/04/2152214/intel-outspends-rivals-in-rd-28-more-than-nvidia-156-more-than-amd?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel Outspends Rivals In R&amp;amp;D: 28% More Than Nvidia, 156% More Than AMD](https://hardware.slashdot.org/story/25/09/04/2152214/intel-outspends-rivals-in-rd-28-more-than-nvidia-156-more-than-amd?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 22:40:00](https://hardware.slashdot.org/story/25/09/04/2138217/philips-hue-plans-to-make-all-your-lights-motion-sensors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Philips Hue Plans To Make All Your Lights Motion Sensors](https://hardware.slashdot.org/story/25/09/04/2138217/philips-hue-plans-to-make-all-your-lights-motion-sensors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 22:16:00](https://soylentnews.org/article.pl?sid=25/09/04/048238&amp;from=rss) - [Scammers Will Try to Trick You Into Filling Out Google Forms. Don’t Fall for It](https://soylentnews.org/article.pl?sid=25/09/04/048238&amp;from=rss)
* [2025-09-04, 22:11:09](https://news.ycombinator.com/item?id=45132810) - [What Is the Fourier Transform?](https://www.quantamagazine.org/what-is-the-fourier-transform-20250903/)
* [2025-09-04, 22:01:44](https://lobste.rs/s/kzxxky/maak_infinitely_extensible_command) - [maak: The infinitely extensible command runner and automation project build system à la Make](https://codeberg.org/jjba23/maak)
* [2025-09-04, 22:01:11](https://news.ycombinator.com/item?id=45132710) - [io_uring is faster than mmap](https://www.bitflux.ai/blog/memory-is-slow-part2/)
* [2025-09-04, 22:00:00](https://yro.slashdot.org/story/25/09/04/2131246/calling-boss-a-dickhead-was-not-a-sackable-offense-tribunal-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Calling Boss a Dickhead Was Not a Sackable Offense, Tribunal Rules](https://yro.slashdot.org/story/25/09/04/2131246/calling-boss-a-dickhead-was-not-a-sackable-offense-tribunal-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 21:46:00](https://lobste.rs/s/gkzmfy/let_s_rename_vibecoding_tag_llms) - [Let&apos;s rename the \&quot;vibecoding\&quot; tag to \&quot;llms\&quot;](https://lobste.rs/s/gkzmfy/let_s_rename_vibecoding_tag_llms)
* [2025-09-04, 21:36:50](https://news.ycombinator.com/item?id=45132498) - [What If OpenDocument Used SQLite?](https://www.sqlite.org/affcase1.html)
* [2025-09-04, 21:22:00](https://tech.slashdot.org/story/25/09/04/207250/nepal-blocks-most-social-media-platforms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nepal Blocks Most Social Media Platforms](https://tech.slashdot.org/story/25/09/04/207250/nepal-blocks-most-social-media-platforms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 19:53:42](https://news.ycombinator.com/item?id=45131538) - [Classic 8×8-pixel B&amp;W Mac patterns](https://www.pauladamsmith.com/blog/2025/09/classic-mac-patterns.html)
* [2025-09-04, 19:50:45](https://lobste.rs/s/cruxfx/classic_8x8_pixel_b_w_mac_patterns) - [Classic 8×8-pixel B&amp;W Mac patterns](https://www.pauladamsmith.com/blog/2025/09/classic-mac-patterns.html)
* [2025-09-04, 18:29:48](https://lobste.rs/s/b6ipnz/you_don_t_need_animations) - [You Don&apos;t Need Animations](https://emilkowal.ski/ui/you-dont-need-animations)
* [2025-09-04, 18:06:05](https://news.ycombinator.com/item?id=45130260) - [LLM Visualization](https://bbycroft.net/llm)
* [2025-09-04, 17:29:00](https://soylentnews.org/article.pl?sid=25/09/04/0350224&amp;from=rss) - [Passkeys Are Incompatible With Open-Source Software](https://soylentnews.org/article.pl?sid=25/09/04/0350224&amp;from=rss)
* [2025-09-04, 16:32:24](https://news.ycombinator.com/item?id=45129085) - [Stripe Launches L1 Blockchain: Tempo](https://tempo.xyz)
* [2025-09-04, 15:30:20](https://news.ycombinator.com/item?id=45128391) - [Wikipedia survives while the rest of the internet breaks](https://www.theverge.com/cs/features/717322/wikipedia-attacks-neutrality-history-jimmy-wales)
* [2025-09-04, 14:58:58](https://lobste.rs/s/vdankx/look_out_for_bugs) - [Look Out For Bugs](https://matklad.github.io/2025/09/04/look-for-bugs.html)
* [2025-09-04, 14:53:50](https://news.ycombinator.com/item?id=45127983) - [WiFi signals can measure heart rate](https://news.ucsc.edu/2025/09/pulse-fi-wifi-heart-rate/)
* [2025-09-04, 12:44:00](https://soylentnews.org/article.pl?sid=25/09/03/0226210&amp;from=rss) - [Get Ready for Plastic Blood](https://soylentnews.org/article.pl?sid=25/09/03/0226210&amp;from=rss)
* [2025-09-04, 12:18:27](https://lobste.rs/s/z4cszc/programming_lang_future) - [The Programming-Lang of the Future](https://vimeo.com/1115794889)
* [2025-09-04, 11:27:26](https://lobste.rs/s/6tfwtv/why_ml_needs_new_programming_language) - [Why ML Needs a New Programming Language](https://signalsandthreads.com/why-ml-needs-a-new-programming-language/)
* [2025-09-04, 11:01:50](https://lobste.rs/s/pvwg6m/ca_trusted_by_microsoft_mis_issued) - [A CA Trusted by Microsoft Mis-issued Certificates for 1.1.1.1 in May 2025, According to Logs](https://arstechnica.com/security/2025/09/mis-issued-certificates-for-1-1-1-1-dns-service-pose-a-threat-to-the-internet/)
* [2025-09-04, 09:21:38](https://lobste.rs/s/ksxhza/jujutsu_v0_33_0_released) - [jujutsu v0.33.0 released](https://github.com/jj-vcs/jj/releases/tag/v0.33.0)
* [2025-09-04, 07:57:00](https://soylentnews.org/article.pl?sid=25/09/03/0223245&amp;from=rss) - [Nearly 40% of Nvidia&apos;s Revenue Tied to Two Mystery Customers, Filing Shows](https://soylentnews.org/article.pl?sid=25/09/03/0223245&amp;from=rss)
* [2025-09-04, 05:58:25](https://lobste.rs/s/mjajol/faster_rust_builds_on_mac) - [Faster Rust builds on Mac](https://nnethercote.github.io/2025/09/04/faster-rust-builds-on-mac.html)
* [2025-09-04, 03:14:00](https://soylentnews.org/article.pl?sid=25/09/03/0216228&amp;from=rss) - [People Who Believe in Conspiracy Theories Process Information Differently at the Neural Level](https://soylentnews.org/article.pl?sid=25/09/03/0216228&amp;from=rss)
* [2025-09-03, 22:47:22](https://lobste.rs/s/pqy0pp/where_s_shovelware_why_ai_coding_claims) - [Where&apos;s the Shovelware? Why AI Coding Claims Don&apos;t Add Up](https://substack.com/inbox/post/172538377)
* [2025-09-03, 22:27:00](https://soylentnews.org/article.pl?sid=25/09/02/192213&amp;from=rss) - [CRLite: Fast, Private, and Comprehensive Certificate Revocation Checking in Firefox](https://soylentnews.org/article.pl?sid=25/09/02/192213&amp;from=rss)
* [2025-09-03, 17:44:00](https://soylentnews.org/article.pl?sid=25/09/02/1855227&amp;from=rss) - [Microsoft Can&apos;t Guarantee Data Sovereignty – OVHcloud Says &apos;We Told You So&apos;](https://soylentnews.org/article.pl?sid=25/09/02/1855227&amp;from=rss)
* [2025-09-03, 13:01:00](https://soylentnews.org/article.pl?sid=25/09/02/1851257&amp;from=rss) - [Fascinating New Psychology Research Shows How Music Shapes Imagination](https://soylentnews.org/article.pl?sid=25/09/02/1851257&amp;from=rss)
* [2025-09-03, 10:26:00](https://soylentnews.org/article.pl?sid=25/09/03/0230242&amp;from=rss) - [We Fed People a Milkshake With 130g of Fat to See What It Did to Their Brains](https://soylentnews.org/article.pl?sid=25/09/03/0230242&amp;from=rss)
* [2025-09-03, 08:17:00](https://soylentnews.org/article.pl?sid=25/09/02/1848251&amp;from=rss) - [DUPE - China Turns on Giant Neutrino Detector](https://soylentnews.org/article.pl?sid=25/09/02/1848251&amp;from=rss)
* [2025-09-03, 03:31:00](https://soylentnews.org/article.pl?sid=25/09/02/0359228&amp;from=rss) - [Artificial Toy Story: Do AI-Powered Toys Take the Life Out of Playtime?](https://soylentnews.org/article.pl?sid=25/09/02/0359228&amp;from=rss)
* [2025-09-02, 22:46:00](https://soylentnews.org/article.pl?sid=25/09/02/0144236&amp;from=rss) - [World’s Largest Neutrino Detector Switches On](https://soylentnews.org/article.pl?sid=25/09/02/0144236&amp;from=rss)
* [2025-09-02, 17:59:00](https://soylentnews.org/article.pl?sid=25/09/01/0031222&amp;from=rss) - [New Paper Finds Cases of \&quot;AI Psychosis\&quot; Manifesting Differently From Schizophrenia](https://soylentnews.org/article.pl?sid=25/09/01/0031222&amp;from=rss)
* [2025-09-02, 13:14:00](https://soylentnews.org/article.pl?sid=25/09/01/0021218&amp;from=rss) - [The Unix Epochalypse Might be Sooner Than You Think](https://soylentnews.org/article.pl?sid=25/09/01/0021218&amp;from=rss)
* [2025-09-02, 08:42:43](https://news.ycombinator.com/item?id=45100516) - [Debugging Rustler on Illumos](https://system-illumination.org/01-rustler.html)
* [2025-09-02, 08:26:00](https://soylentnews.org/article.pl?sid=25/09/01/0018253&amp;from=rss) - [AI in Schools Isn’t Progress — It’s a Sign of How Far We’ve Strayed from the Purpose of Education.](https://soylentnews.org/article.pl?sid=25/09/01/0018253&amp;from=rss)
* [2025-09-02, 06:17:26](https://news.ycombinator.com/item?id=45099681) - [Making the most of a dumb fax switcher box in the old days](https://rachelbythebay.com/w/2025/09/01/fax/)
* [2025-09-02, 03:44:00](https://soylentnews.org/article.pl?sid=25/08/31/1416227&amp;from=rss) - [AMD Roadmap Leak Points to Zen 6 Mobile CPUs in 2027](https://soylentnews.org/article.pl?sid=25/08/31/1416227&amp;from=rss)
* [2025-09-02, 02:43:00](https://news.ycombinator.com/item?id=45098609) - [The Old Robots Website](https://www.theoldrobots.com/index2.html)
* [2025-09-01, 23:04:00](https://soylentnews.org/article.pl?sid=25/08/31/146226&amp;from=rss) - [AI Crawlers Destroying Websites in Hunger for Content](https://soylentnews.org/article.pl?sid=25/08/31/146226&amp;from=rss)
* [2025-09-01, 19:03:03](https://news.ycombinator.com/item?id=45095591) - [The Diffusion Dilemma](https://arenamag.com/articles/the-diffusion-dilemma)
* [2025-09-01, 18:14:00](https://soylentnews.org/article.pl?sid=25/08/31/1355250&amp;from=rss) - [Tesla Denied Having Fatal Crash Data Until a Hacker Found It](https://soylentnews.org/article.pl?sid=25/08/31/1355250&amp;from=rss)
* [2025-09-01, 17:31:43](https://news.ycombinator.com/item?id=45094760) - [I made a drive to store files like 40 years ago –.but for ants [video]](https://www.youtube.com/watch?v=GQwTPH67YqY)
* [2025-09-01, 15:29:09](https://news.ycombinator.com/item?id=45093501) - [Vetinari&apos;s Clock (2011)](https://www.waitingforfriday.com/?p=264)
* [2025-09-01, 13:32:00](https://soylentnews.org/article.pl?sid=25/08/31/1353201&amp;from=rss) - [Massive Data Breach: Google Warns 2.5 Billion Gmail Users](https://soylentnews.org/article.pl?sid=25/08/31/1353201&amp;from=rss)
* [2025-09-01, 08:44:00](https://soylentnews.org/article.pl?sid=25/08/30/1515239&amp;from=rss) - [Medical Cannabis Fails the Long-Term Test: 58% of Patients Quit Within a Year](https://soylentnews.org/article.pl?sid=25/08/30/1515239&amp;from=rss)
* [2025-09-01, 07:56:30](https://news.ycombinator.com/item?id=45090553) - [Rasterizer: A GPU-accelerated 2D vector graphics engine in ~4k LOC](https://github.com/mindbrix/Rasterizer)
* [2025-09-01, 04:01:00](https://soylentnews.org/article.pl?sid=25/08/30/157235&amp;from=rss) - [The Mysterious Shortwave Radio Station Stoking US-Russia Nuclear Fears](https://soylentnews.org/article.pl?sid=25/08/30/157235&amp;from=rss)
