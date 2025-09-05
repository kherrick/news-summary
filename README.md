# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Programming Trends

* [Data Modeling Guide for Real-Time Analytics with ClickHouse](https://www.ssp.sh/blog/practical-data-modeling-clickhouse/) offers insights into efficient data modeling strategies for real-time analytics applications using ClickHouse. [Comments](https://news.ycombinator.com/item?id=45137927)

* [Why ML Needs a New Programming Language](https://signalsandthreads.com/why-ml-needs-a-new-programming-language/) proposes the creation of a specialized programming language to meet the unique requirements of machine learning tasks. [Comments](https://news.ycombinator.com/item?id=45137373)

* [Fil's Unbelievable Garbage Collector](https://fil-c.org/fugc) introduces a revolutionary garbage collection system tailored for modern applications. [Comments](https://news.ycombinator.com/item?id=45133938)

* [I Ditched Docker for Podman (and You Should Too)](https://codesmash.dev/why-i-ditched-docker-for-podman-and-you-should-too) discusses the advantages of switching from Docker to Podman for container management. [Comments](https://news.ycombinator.com/item?id=45137525)

## AI and Social Impact

* [OpenAI eats jobs, then offers to help you find a new one at Walmart](https://www.theregister.com/2025/09/05/openai_jobs_board/) critiques the paradoxical impact of OpenAI's disruptive automation technologies. [Comments](https://news.ycombinator.com/item?id=45137658)

* [Mark Zuckerberg Sues Mark Zuckerberg](https://yro.slashdot.org/story/25/09/04/2251235/mark-zuckerberg-sues-mark-zuckerberg?utm_source=rss1.0mainlinkanon&utm_medium=feed) highlights an unexpected legal battle involving the Meta CEO. [Comments](https://yro.slashdot.org/story/25/09/04/2251235/mark-zuckerberg-sues-mark-zuckerberg?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Bathroom Doomscrolling May Increase Your Risk of Hemorrhoids](https://science.slashdot.org/story/25/09/04/2159215/bathroom-doomscrolling-may-increase-your-risk-of-hemorrhoids?utm_source=rss1.0mainlinkanon&utm_medium=feed) outlines the health risks associated with prolonged smartphone usage in bathrooms. [Comments](https://science.slashdot.org/comments.pl?sid=25/09/04/2159215&id=251126)

## Scientific Discoveries

* [First Brain-Wide Map of Decision-Making Charted In Mice](https://science.slashdot.org/story/25/09/04/2311257/first-brain-wide-map-of-decision-making-charted-in-mice?utm_source=rss1.0mainlinkanon&utm_medium=feed) unveils comprehensive research on the neurological basis of decision-making in mice. [Comments](https://science.slashdot.org/comments.pl?sid=25/09/04/2311257&id=251131)

* [Stressed Ice Generates Electricity, Researchers Find](https://soylentnews.org/article.pl?sid=25/09/04/0430216&from=rss) reveals a breakthrough finding where stressed ice can produce electricity. [Comments](https://soylentnews.org/comments.pl?sid=25/09/04/0430216)

## Controversial Policies and Legal Issues

* [Nepal moves to block Facebook, X, YouTube and others](https://www.aljazeera.com/news/2025/9/4/nepal-moves-to-block-facebook-x-youtube-and-others) reports on Nepal's major censorship decision targeting popular social media platforms. [Comments](https://news.ycombinator.com/item?id=45137363)

* [Warner Bros. Discovery Sues Midjourney For Copyright Infringement](https://yro.slashdot.org/story/25/09/04/2236226/warner-bros-discovery-sues-midjourney-for-copyright-infringement?utm_source=rss1.0mainlinkanon&utm_medium=feed) sparks discussions on the role of AI in copyright violations. [Comments](https://yro.slashdot.org/comments.pl?sid=25/09/04/2236226&id=251128)

* [Calling Boss a Dickhead Was Not a Sackable Offense, Tribunal Rules](https://yro.slashdot.org/story/25/09/04/2131246/calling-boss-a-dickhead-was-not-a-sackable-offense-tribunal-rules?utm_source=rss1.0mainlinkanon&utm_medium=feed) explores a notable employment tribunal ruling. [Comments](https://yro.slashdot.org/comments.pl?sid=25/09/04/2131246)

## Cultural and Historical Insights

* [Classic 8×8-pixel B&W Mac patterns](https://www.pauladamsmith.com/blog/2025/09/classic-mac-patterns.html) nostalgically reflects on iconic Mac designs from an earlier era. [Comments](https://news.ycombinator.com/item?id=45131538)

* [Interview with Japanese Demoscener – 0b5vr](https://6octaves.com/2025/09/interview-with-demoscener-0b5vr.html) delves into the creative world of a prominent figure in digital art. [Comments](https://news.ycombinator.com/item?id=45137245)

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

* [2025-09-05, 12:51:27](https://news.ycombinator.com/item?id=45137927) - [Data Modeling Guide for Real-Time Analytics with ClickHouse](https://www.ssp.sh/blog/practical-data-modeling-clickhouse/)
* [2025-09-05, 12:50:00](https://news.ycombinator.com/item?id=45137914) - [Lava RGB](https://amaiorano.io/2025/09/03/lava-rgb.html)
* [2025-09-05, 12:36:47](https://news.ycombinator.com/item?id=45137802) - [You&apos;re absolutely Right!](https://absolutelyright.lol/)
* [2025-09-05, 12:28:00](https://soylentnews.org/article.pl?sid=25/09/04/0430216&amp;from=rss) - [Stressed Ice Generates Electricity, Researchers Find](https://soylentnews.org/article.pl?sid=25/09/04/0430216&amp;from=rss)
* [2025-09-05, 12:24:01](https://lobste.rs/s/yehlo1/lava_rgb) - [Lava RGB](https://amaiorano.io/2025/09/03/lava-rgb.html)
* [2025-09-05, 12:17:22](https://news.ycombinator.com/item?id=45137658) - [OpenAI eats jobs, then offers to help you find a new one at Walmart](https://www.theregister.com/2025/09/05/openai_jobs_board/)
* [2025-09-05, 12:01:09](https://news.ycombinator.com/item?id=45137554) - [Relace (YC W23) Is Hiring for Code LLM&apos;s (SF)](https://news.ycombinator.com/item?id=45137554)
* [2025-09-05, 11:56:59](https://news.ycombinator.com/item?id=45137525) - [I Ditched Docker for Podman (and You Should Too)](https://codesmash.dev/why-i-ditched-docker-for-podman-and-you-should-too)
* [2025-09-05, 11:33:48](https://news.ycombinator.com/item?id=45137373) - [Why ML Needs a New Programming Language](https://signalsandthreads.com/why-ml-needs-a-new-programming-language/)
* [2025-09-05, 11:31:58](https://news.ycombinator.com/item?id=45137363) - [Nepal moves to block Facebook, X, YouTube and others](https://www.aljazeera.com/news/2025/9/4/nepal-moves-to-block-facebook-x-youtube-and-others)
* [2025-09-05, 11:08:26](https://news.ycombinator.com/item?id=45137245) - [Interview with Japanese Demoscener – 0b5vr](https://6octaves.com/2025/09/interview-with-demoscener-0b5vr.html)
* [2025-09-05, 10:39:41](https://news.ycombinator.com/item?id=45137097) - [Heap-based buffer overflow in Kernel Streaming](https://www.crowdfense.com/cve-2025-53149-windows-ksthunk-heap-overflow/)
* [2025-09-05, 09:05:42](https://lobste.rs/s/ezmgyy/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/ezmgyy/what_are_you_doing_this_weekend)
* [2025-09-05, 08:43:01](https://news.ycombinator.com/item?id=45136367) - [IRHash: Efficient Multi-Language Compiler Caching by IR-Level Hashing](https://www.usenix.org/conference/atc25/presentation/landsberg)
* [2025-09-05, 08:19:28](https://lobste.rs/s/d30ska/nixos_is_endgame_distrohopping) - [NixOS is the endgame of distrohopping](https://joshblais.com/blog/nixos-is-the-endgame-of-distrohopping/)
* [2025-09-05, 08:00:34](https://lobste.rs/s/noazra/capitalization_initialisms_2009) - [Capitalization of Initialisms (2009)](https://www.teamten.com/lawrence/writings/capitalization_of_initialisms.html)
* [2025-09-05, 07:47:00](https://soylentnews.org/article.pl?sid=25/09/04/0419219&amp;from=rss) - [Google Won&apos;t Have to Sell Chrome, Judge Rules](https://soylentnews.org/article.pl?sid=25/09/04/0419219&amp;from=rss)
* [2025-09-05, 07:44:26](https://news.ycombinator.com/item?id=45136008) - [Fiber Concurrency](https://honeyryderchuck.gitlab.io/httpx/wiki/Fiber-Concurrency)
* [2025-09-05, 07:03:08](https://lobste.rs/s/gsmdft/radicle_1_4_0_lily) - [Radicle 1.4.0 – Lily](https://radicle.xyz/2025/09/04/radicle-1.4.0)
* [2025-09-05, 06:42:05](https://lobste.rs/s/rylewy/sql_needed_structure) - [SQL needed structure](https://www.scattered-thoughts.net/writing/sql-needed-structure/)
* [2025-09-05, 06:23:19](https://lobste.rs/s/babkll/xmake_v3_0_2_has_been_released_improve_c) - [Xmake v3.0.2 has been released, Improve C++ modules and new native thread support](https://github.com/xmake-io/xmake/releases/tag/v3.0.2)
* [2025-09-05, 05:57:10](https://lobste.rs/s/rfbvqb/type_checking_is_symptom_not_solution) - [Type Checking is a Symptom, Not a Solution](https://programmingsimplicity.substack.com/p/type-checking-is-a-symptom-not-a)
* [2025-09-05, 05:33:03](https://news.ycombinator.com/item?id=45135263) - [Swimming in Tech Debt](https://helpthisbook.com/lou-franco/swimming-in-tech-debt)
* [2025-09-05, 05:01:41](https://lobste.rs/s/atvx0k/if_i_hear_design_pattern_one_more_time_i_ll) - [If I hear \&quot;design pattern\&quot; one more time, I&apos;ll go mad](https://purplesyringa.moe/blog/if-i-hear-design-pattern-one-more-time-ill-go-mad/)
* [2025-09-05, 03:50:14](https://lobste.rs/s/d9jbh9/dealing_with_cancel_safety_async_rust) - [Dealing with cancel safety in async Rust](https://rfd.shared.oxide.computer/rfd/400)
* [2025-09-05, 03:47:27](https://lobste.rs/s/q7b1gm/fil_s_unbelievable_garbage_collector) - [Fil&apos;s Unbelievable Garbage Collector](https://fil-c.org/fugc)
* [2025-09-05, 03:30:31](https://lobste.rs/s/uxbodb/trying_make_sense_casing_conventions_on) - [Trying to Make Sense of Casing Conventions on the Web](https://blog.jim-nielsen.com/2025/casing-on-the-web/)
* [2025-09-05, 03:03:00](https://soylentnews.org/article.pl?sid=25/09/04/0414246&amp;from=rss) - [U.S. Gov&apos;t Revokes TSMC&apos;s Authorization to Ship Tools to its Fabs in China](https://soylentnews.org/article.pl?sid=25/09/04/0414246&amp;from=rss)
* [2025-09-05, 02:40:12](https://lobste.rs/s/qdsiyi/evolving_ocaml_programming_language) - [Evolving the OCaml Programming Language (2025)](https://kcsrk.info/slides/Evolution_Ashoka_2025.pdf)
* [2025-09-05, 02:02:00](https://science.slashdot.org/story/25/09/04/2311257/first-brain-wide-map-of-decision-making-charted-in-mice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [First Brain-Wide Map of Decision-Making Charted In Mice](https://science.slashdot.org/story/25/09/04/2311257/first-brain-wide-map-of-decision-making-charted-in-mice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 01:25:00](https://yro.slashdot.org/story/25/09/04/2251235/mark-zuckerberg-sues-mark-zuckerberg?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mark Zuckerberg Sues Mark Zuckerberg](https://yro.slashdot.org/story/25/09/04/2251235/mark-zuckerberg-sues-mark-zuckerberg?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 00:55:52](https://news.ycombinator.com/item?id=45133938) - [Fil&apos;s Unbelievable Garbage Collector](https://fil-c.org/fugc)
* [2025-09-05, 00:54:55](https://news.ycombinator.com/item?id=45133935) - [Forking Chrome to render in a terminal (2023)](https://fathy.fr/carbonyl)
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
* [2025-09-04, 20:42:00](https://news.slashdot.org/story/25/09/04/1924220/germany-already-met-its-2028-goal-for-reducing-coal-fired-power?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Germany Already Met Its 2028 Goal for Reducing Coal-Fired Power](https://news.slashdot.org/story/25/09/04/1924220/germany-already-met-its-2028-goal-for-reducing-coal-fired-power?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 20:16:20](https://lobste.rs/s/kqm5ks/glamorous_toolkit_moldable_development) - [Glamorous Toolkit: The Moldable Development Environment](https://github.com/feenkcom/gtoolkit)
* [2025-09-04, 20:01:00](https://slashdot.org/story/25/09/04/1854249/openai-plans-jobs-platform-certification-program-for-ai-roles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Plans Jobs Platform, Certification Program for AI Roles](https://slashdot.org/story/25/09/04/1854249/openai-plans-jobs-platform-certification-program-for-ai-roles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 19:53:42](https://news.ycombinator.com/item?id=45131538) - [Classic 8×8-pixel B&amp;W Mac patterns](https://www.pauladamsmith.com/blog/2025/09/classic-mac-patterns.html)
* [2025-09-04, 19:50:45](https://lobste.rs/s/cruxfx/classic_8x8_pixel_b_w_mac_patterns) - [Classic 8×8-pixel B&amp;W Mac patterns](https://www.pauladamsmith.com/blog/2025/09/classic-mac-patterns.html)
* [2025-09-04, 19:24:00](https://news.slashdot.org/story/25/09/04/1832219/adobes-premiere-video-editor-is-coming-to-iphone-for-free?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Adobe&apos;s Premiere Video Editor is Coming To iPhone For Free](https://news.slashdot.org/story/25/09/04/1832219/adobes-premiere-video-editor-is-coming-to-iphone-for-free?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 18:45:00](https://it.slashdot.org/story/25/09/04/1823204/solar-powered-logitech-keyboard-appears-on-amazon-mexico?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Solar-Powered Logitech Keyboard Appears on Amazon Mexico](https://it.slashdot.org/story/25/09/04/1823204/solar-powered-logitech-keyboard-appears-on-amazon-mexico?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 18:29:48](https://lobste.rs/s/b6ipnz/you_don_t_need_animations) - [You Don&apos;t Need Animations](https://emilkowal.ski/ui/you-dont-need-animations)
* [2025-09-04, 18:06:05](https://news.ycombinator.com/item?id=45130260) - [LLM Visualization](https://bbycroft.net/llm)
* [2025-09-04, 18:05:00](https://science.slashdot.org/story/25/09/04/1742218/ultra-processed-foods---its-time-for-an-improved-definition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ultra-Processed Foods - It&apos;s Time For an Improved Definition](https://science.slashdot.org/story/25/09/04/1742218/ultra-processed-foods---its-time-for-an-improved-definition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 17:29:00](https://soylentnews.org/article.pl?sid=25/09/04/0350224&amp;from=rss) - [Passkeys Are Incompatible With Open-Source Software](https://soylentnews.org/article.pl?sid=25/09/04/0350224&amp;from=rss)
* [2025-09-04, 17:27:00](https://it.slashdot.org/story/25/09/04/1710210/nvidia-dominates-gpu-shipments-with-94-share?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia Dominates GPU Shipments With 94% Share](https://it.slashdot.org/story/25/09/04/1710210/nvidia-dominates-gpu-shipments-with-94-share?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 16:49:00](https://news.slashdot.org/story/25/09/04/1649210/microsofts-6502-basic-is-now-open-source?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft&apos;s 6502 BASIC Is Now Open Source](https://news.slashdot.org/story/25/09/04/1649210/microsofts-6502-basic-is-now-open-source?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 16:41:24](https://news.ycombinator.com/item?id=45129190) - [Age Simulation Suit](https://www.age-simulation-suit.com/)
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
* [2025-09-02, 08:26:00](https://soylentnews.org/article.pl?sid=25/09/01/0018253&amp;from=rss) - [AI in Schools Isn’t Progress — It’s a Sign of How Far We’ve Strayed from the Purpose of Education.](https://soylentnews.org/article.pl?sid=25/09/01/0018253&amp;from=rss)
* [2025-09-02, 06:17:26](https://news.ycombinator.com/item?id=45099681) - [Making the most of a dumb fax switcher box in the old days](https://rachelbythebay.com/w/2025/09/01/fax/)
* [2025-09-02, 04:29:15](https://news.ycombinator.com/item?id=45099151) - [The Anatomy of a Mach-O: Structure, Code Signing, and Pac](https://oliviagallucci.com/the-anatomy-of-a-mach-o-structure-code-signing-and-pac/)
* [2025-09-02, 03:44:00](https://soylentnews.org/article.pl?sid=25/08/31/1416227&amp;from=rss) - [AMD Roadmap Leak Points to Zen 6 Mobile CPUs in 2027](https://soylentnews.org/article.pl?sid=25/08/31/1416227&amp;from=rss)
* [2025-09-01, 23:04:00](https://soylentnews.org/article.pl?sid=25/08/31/146226&amp;from=rss) - [AI Crawlers Destroying Websites in Hunger for Content](https://soylentnews.org/article.pl?sid=25/08/31/146226&amp;from=rss)
* [2025-09-01, 19:03:03](https://news.ycombinator.com/item?id=45095591) - [The Diffusion Dilemma](https://arenamag.com/articles/the-diffusion-dilemma)
* [2025-09-01, 18:14:00](https://soylentnews.org/article.pl?sid=25/08/31/1355250&amp;from=rss) - [Tesla Denied Having Fatal Crash Data Until a Hacker Found It](https://soylentnews.org/article.pl?sid=25/08/31/1355250&amp;from=rss)
* [2025-09-01, 15:29:09](https://news.ycombinator.com/item?id=45093501) - [Vetinari&apos;s Clock (2011)](https://www.waitingforfriday.com/?p=264)
* [2025-09-01, 13:32:00](https://soylentnews.org/article.pl?sid=25/08/31/1353201&amp;from=rss) - [Massive Data Breach: Google Warns 2.5 Billion Gmail Users](https://soylentnews.org/article.pl?sid=25/08/31/1353201&amp;from=rss)
* [2025-09-01, 08:44:00](https://soylentnews.org/article.pl?sid=25/08/30/1515239&amp;from=rss) - [Medical Cannabis Fails the Long-Term Test: 58% of Patients Quit Within a Year](https://soylentnews.org/article.pl?sid=25/08/30/1515239&amp;from=rss)
* [2025-09-01, 07:56:30](https://news.ycombinator.com/item?id=45090553) - [Rasterizer: A GPU-accelerated 2D vector graphics engine in ~4k LOC](https://github.com/mindbrix/Rasterizer)
* [2025-09-01, 04:01:00](https://soylentnews.org/article.pl?sid=25/08/30/157235&amp;from=rss) - [The Mysterious Shortwave Radio Station Stoking US-Russia Nuclear Fears](https://soylentnews.org/article.pl?sid=25/08/30/157235&amp;from=rss)
