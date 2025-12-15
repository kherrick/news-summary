# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence Advances and Impacts

* [CEOS Plan to Spend More on AI in 2026 - Despite Spotty Returns](https://it.slashdot.org/story/25/12/15/0013251/ceos-plan-to-spend-more-on-ai-in-2026---despite-spotty-returns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A look at how companies remain committed to investing in AI despite uneven outcomes.

* [If AI replaces workers, should it also pay taxes?](https://english.elpais.com/technology/2025-11-30/if-ai-replaces-workers-should-it-also-pay-taxes.html) - An exploration of the ethical and economic considerations of implementing AI to replace human labor.

* [AI agents are starting to eat SaaS](https://martinalderson.com/posts/ai-agents-are-starting-to-eat-saas/) - An analysis of how autonomous AI agents are shifting the software-as-a-service landscape.

* [New Rule Forbids GNOME Shell Extensions Made Using AI-Generated Code](https://tech.slashdot.org/story/25/12/14/0453227/new-rule-forbids-gnome-shell-extensions-made-using-ai-generated-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The GNOME community moves to prohibit shell extensions created with AI-generated code.

* [Purdue University Approves New AI Requirement For All Undergrads](https://news.slashdot.org/story/25/12/14/0557226/purdue-university-approves-new-ai-requirement-for-all-undergrads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Purdue University integrates AI education into its undergraduate curriculum.

* [Time Magazine's 'Person of the Year': the Architects of AI](https://news.slashdot.org/story/25/12/14/084207/time-magazines-person-of-the-year-the-architects-of-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Highlighting the people who shaped the advancements in artificial intelligence.

## Technological Developments and Discoveries

* [System76 Launches First Stable Release of Rust-Based COSMIC Desktop and Pop!_OS 24.04 LTS](https://soylentnews.org/article.pl?sid=25/12/13/144230&amp;from=rss) - A significant release of a Linux distribution featuring the new COSMIC desktop environment built with Rust.

* [ACME Device Attestation Extension](https://datatracker.ietf.org/doc/draft-ietf-acme-device-attest/) - An overview of a new ACME extension for device attestation in network security.

* [Ultra-Thin Nanomembrane Device Forms Soft, Seamless Interface With Living Tissue](https://soylentnews.org/article.pl?sid=25/12/13/0329247&amp;from=rss) - A groundbreaking device that integrates seamlessly with living tissue for medical applications.

* [Chattanooga's Municipal Fiber Network Has Delivered $5.3 Billion in Community Benefits](https://soylentnews.org/article.pl?sid=25/12/10/027248&amp;from=rss) - Highlighting the economic benefits of high-speed municipal internet service in Chattanooga.

## Cultural and Societal Shifts

* [Our emotional pain became a product](https://www.theguardian.com/us-news/ng-interactive/2025/dec/14/trauma-mental-health) - An investigation into the commoditization of psychological trauma in the modern age.

* [Entry-Level Tech Workers Confront an AI-Fueled Jobpocalypse](https://developers.slashdot.org/story/25/12/14/2030215/entry-level-tech-workers-confront-an-ai-fueled-jobpocalypse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - An exploration of how AI is impacting entry-level technology jobs.

* [Repeal Section 230 and Its Platform Protections, Urges New Bipartisan US Bill](https://news.slashdot.org/story/25/12/14/0656223/repeal-section-230-and-its-platform-protections-urges-new-bipartisan-us-bill?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A bipartisan attempt to repeal online platform protection laws sparks debate.

## Environmental and Scientific Insights

* [Polar Bears are Rewiring Their Own Genetics to Survive a Warming Climate](https://news.slashdot.org/story/25/12/14/199215/polar-bears-are-rewiring-their-own-genetics-to-survive-a-warming-climate?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Examining the adaptive genetic changes polar bears are undergoing in response to climate change.

* [Trump Ban on Wind Energy Permits 'Unlawful', Court Rules](https://hardware.slashdot.org/story/25/12/13/0157258/trump-ban-on-wind-energy-permits-unlawful-court-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A court ruling deems the previously imposed ban on wind energy permits illegal.

## Explorations in Development and Coding

* [Let's write a toy UI library](https://nakst.gitlab.io/tutorial/ui-part-1.html) - A tutorial focusing on creating a simple user interface library.

* [How I wrote JustHTML using coding agents](https://friendlybit.com/python/writing-justhtml-with-coding-agents/) - The process of creating the JustHTML system with automated coding support.

* [Traceroute Tool from Scratch in Go](https://kmcd.dev/posts/traceroute/) - A developer shares insights on crafting a traceroute tool from scratch using Go programming language.

* [Compiler Engineering in Practice](https://chisophugis.github.io/2025/12/08/compiler-engineering-in-practice-part-1-what-is-a-compiler.html) - A beginner-friendly exploration into the world of compiler engineering and its importance.

## Economic and Industrial Updates

* [Robot Vacuum Roomba Maker Files for Bankruptcy After 35 Years](https://news.bloomberglaw.com/bankruptcy-law/robot-vacuum-roomba-maker-files-for-bankruptcy-after-35-years) - After decades of operation, a pioneer in the robot vacuum industry files for bankruptcy.

* [Free Software Awards Winners Announced: Andy Wingo, Alx Sa, Govdirectory](https://news.slashdot.org/story/25/12/14/0030234/free-software-awards-winners-announced-andy-wingo-alx-sa-govdirectory?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Celebrating contributions to open-source software through annual awards.

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

* [2025-12-15, 01:24:00](https://tech.slashdot.org/story/25/12/15/0120247/like-australia-denmark-plans-to-severely-restrict-social-media-use-for-teenagers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Like Australia, Denmark Plans to Severely Restrict Social Media Use for Teenagers](https://tech.slashdot.org/story/25/12/15/0120247/like-australia-denmark-plans-to-severely-restrict-social-media-use-for-teenagers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-15, 00:36:44](https://news.ycombinator.com/item?id=46268854) - [Robot Vacuum Roomba Maker Files for Bankruptcy After 35 Years](https://news.bloomberglaw.com/bankruptcy-law/robot-vacuum-roomba-maker-files-for-bankruptcy-after-35-years)
* [2025-12-15, 00:17:02](https://news.ycombinator.com/item?id=46268709) - [If AI replaces workers, should it also pay taxes?](https://english.elpais.com/technology/2025-11-30/if-ai-replaces-workers-should-it-also-pay-taxes.html)
* [2025-12-15, 00:17:00](https://it.slashdot.org/story/25/12/15/0013251/ceos-plan-to-spend-more-on-ai-in-2026---despite-spotty-returns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CEOS Plan to Spend More on AI in 2026 - Despite Spotty Returns](https://it.slashdot.org/story/25/12/15/0013251/ceos-plan-to-spend-more-on-ai-in-2026---despite-spotty-returns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-15, 00:05:23](https://lobste.rs/s/v2p3id/let_s_write_toy_ui_library) - [Let&apos;s write a toy UI library](https://nakst.gitlab.io/tutorial/ui-part-1.html)
* [2025-12-15, 00:02:39](https://lobste.rs/s/ktfrjk/world_is_not_desktop_1994) - [The World Is Not A Desktop (1994)](https://dl.acm.org/doi/pdf/10.1145/174800.174801)
* [2025-12-14, 23:59:00](https://soylentnews.org/article.pl?sid=25/12/13/144230&amp;from=rss) - [System76 Launches First Stable Release of Rust-Based COSMIC Desktop and Pop!_OS 24.04 LTS](https://soylentnews.org/article.pl?sid=25/12/13/144230&amp;from=rss)
* [2025-12-14, 23:50:32](https://news.ycombinator.com/item?id=46268469) - [Our emotional pain became a product](https://www.theguardian.com/us-news/ng-interactive/2025/dec/14/trauma-mental-health)
* [2025-12-14, 23:48:37](https://news.ycombinator.com/item?id=46268452) - [AI agents are starting to eat SaaS](https://martinalderson.com/posts/ai-agents-are-starting-to-eat-saas/)
* [2025-12-14, 23:23:00](https://news.ycombinator.com/item?id=46268222) - [Claude CLI deleted my home directory Wiped my whole Mac](https://old.reddit.com/r/ClaudeAI/comments/1pgxckk/claude_cli_deleted_my_entire_home_directory_wiped/)
* [2025-12-14, 23:13:39](https://news.ycombinator.com/item?id=46268153) - [DARPA GO: Generative Optogenetics](https://www.darpa.mil/research/programs/go)
* [2025-12-14, 23:02:40](https://news.ycombinator.com/item?id=46268055) - [Ask HN: Is starting a personal blog still worth it in the age of AI?](https://news.ycombinator.com/item?id=46268055)
* [2025-12-14, 22:59:00](https://tech.slashdot.org/story/25/12/14/2257237/investors-in-limbo-will-the-tiktok-deals-deadline-be-extended-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Investors in Limbo&apos;.  Will the TikTok Deal&apos;s Deadline Be Extended Again?](https://tech.slashdot.org/story/25/12/14/2257237/investors-in-limbo-will-the-tiktok-deals-deadline-be-extended-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-14, 22:46:31](https://lobste.rs/s/1qdc9j/my_gift_rustdoc_team) - [My gift to the rustdoc team](https://fasterthanli.me/articles/my-gift-to-the-rust-docs-team)
* [2025-12-14, 22:46:01](https://news.ycombinator.com/item?id=46267947) - [History of Declarative Programming](https://shenlanguage.org/TBoS/tbos_15.html)
* [2025-12-14, 22:45:54](https://lobste.rs/s/07fdbv/advent_swift) - [Advent of Swift](https://leahneukirchen.org/blog/archive/2025/12/advent-of-swift.html)
* [2025-12-14, 22:02:53](https://lobste.rs/s/hrmr9m/time_element_should_actually_do) - [The &lt;time&gt; element should actually do something](https://nolanlawson.com/2025/12/14/the-time-element-should-actually-do-something/)
* [2025-12-14, 21:54:23](https://lobste.rs/s/ypqhq5/traceroute_tool_from_scratch_go) - [Traceroute Tool from Scratch in Go](https://kmcd.dev/posts/traceroute/)
* [2025-12-14, 21:53:13](https://news.ycombinator.com/item?id=46267385) - [Anthropic Outage for Opus 4.5 and Sonnet 4/4.5 across all services](https://status.claude.com/incidents/9g6qpr72ttbr)
* [2025-12-14, 21:34:00](https://slashdot.org/story/25/12/14/2110234/podcast-industry-under-siege-as-ai-bots-flood-airways-with-thousands-of-programs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Podcast Industry Under Siege as AI Bots Flood Airways with Thousands of Programs](https://slashdot.org/story/25/12/14/2110234/podcast-industry-under-siege-as-ai-bots-flood-airways-with-thousands-of-programs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-14, 21:05:13](https://news.ycombinator.com/item?id=46266875) - [2002: Last.fm and Audioscrobbler Herald the Social Web](https://cybercultural.com/p/lastfm-audioscrobbler-2002/)
* [2025-12-14, 20:34:00](https://developers.slashdot.org/story/25/12/14/2030215/entry-level-tech-workers-confront-an-ai-fueled-jobpocalypse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Entry-Level Tech Workers Confront an AI-Fueled Jobpocalypse](https://developers.slashdot.org/story/25/12/14/2030215/entry-level-tech-workers-confront-an-ai-fueled-jobpocalypse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-14, 20:04:11](https://news.ycombinator.com/item?id=46266312) - [Advent of Swift](https://leahneukirchen.org/blog/archive/2025/12/advent-of-swift.html)
* [2025-12-14, 19:42:53](https://news.ycombinator.com/item?id=46266102) - [JSDoc is TypeScript](https://culi.bearblog.dev/jsdoc-is-typescript/)
* [2025-12-14, 19:12:00](https://news.slashdot.org/story/25/12/14/199215/polar-bears-are-rewiring-their-own-genetics-to-survive-a-warming-climate?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Polar Bears are Rewiring Their Own Genetics to Survive a Warming Climate](https://news.slashdot.org/story/25/12/14/199215/polar-bears-are-rewiring-their-own-genetics-to-survive-a-warming-climate?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-14, 19:11:00](https://soylentnews.org/article.pl?sid=25/12/13/0439237&amp;from=rss) - [Big Tech Joins Forces With Linux Foundation to Standardize AI Agents](https://soylentnews.org/article.pl?sid=25/12/13/0439237&amp;from=rss)
* [2025-12-14, 19:08:57](https://news.ycombinator.com/item?id=46265811) - [GNU recutils: Plain text database](https://www.gnu.org/software/recutils/)
* [2025-12-14, 19:01:18](https://lobste.rs/s/duyqgm/postfix_macros_let_place) - [Postfix Macros and let place](https://nadrieril.github.io/blog/2025/12/09/postfix-macros-and-let-place.html)
* [2025-12-14, 17:43:39](https://news.ycombinator.com/item?id=46265015) - [The Typeframe PX-88 Portable Computing System](https://www.typeframe.net/)
* [2025-12-14, 17:34:00](https://hardware.slashdot.org/story/25/12/13/0110246/america-adds-117-gw-of-new-solar-capacity-in-q3---third-largest-quarter-on-record?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [America Adds 11.7 GW of New Solar Capacity in Q3 - Third Largest Quarter on Record](https://hardware.slashdot.org/story/25/12/13/0110246/america-adds-117-gw-of-new-solar-capacity-in-q3---third-largest-quarter-on-record?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-14, 17:13:30](https://news.ycombinator.com/item?id=46264704) - [GraphQL: The enterprise honeymoon is over](https://johnjames.blog/posts/graphql-the-enterprise-honeymoon-is-over)
* [2025-12-14, 16:55:29](https://news.ycombinator.com/item?id=46264492) - [Hashcards: A plain-text spaced repetition system](https://borretti.me/article/hashcards-plain-text-spaced-repetition)
* [2025-12-14, 16:55:25](https://news.ycombinator.com/item?id=46264491) - [Ask HN: What Are You Working On? (December 2025)](https://news.ycombinator.com/item?id=46264491)
* [2025-12-14, 16:43:57](https://lobste.rs/s/hwo6rn/how_i_wrote_justhtml_using_coding_agents) - [How I wrote JustHTML using coding agents](https://friendlybit.com/python/writing-justhtml-with-coding-agents/)
* [2025-12-14, 16:35:53](https://lobste.rs/s/oiib0n/very_basic_implementation_virtual) - [A very basic implementation of a virtual continuum fingerboard](https://continuum.awalgarg.me)
* [2025-12-14, 16:35:12](https://lobste.rs/s/4ixwyf/shai_hulud_complete_post_mortem) - [Shai-Hulud: A complete post-mortem](https://trigger.dev/blog/shai-hulud-postmortem)
* [2025-12-14, 16:34:00](https://news.slashdot.org/story/25/12/14/0557226/purdue-university-approves-new-ai-requirement-for-all-undergrads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Purdue University Approves New AI Requirement For All Undergrads](https://news.slashdot.org/story/25/12/14/0557226/purdue-university-approves-new-ai-requirement-for-all-undergrads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-14, 16:09:44](https://news.ycombinator.com/item?id=46264068) - [Price of a bot army revealed across online platforms](https://www.cam.ac.uk/stories/price-bot-army-global-index)
* [2025-12-14, 15:34:00](https://news.slashdot.org/story/25/12/14/0656223/repeal-section-230-and-its-platform-protections-urges-new-bipartisan-us-bill?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Repeal Section 230 and Its Platform Protections, Urges New Bipartisan US Bill](https://news.slashdot.org/story/25/12/14/0656223/repeal-section-230-and-its-platform-protections-urges-new-bipartisan-us-bill?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-14, 15:18:08](https://lobste.rs/s/vp1zbg/tier_list_linux_security_mechanisms_2024) - [Tier list of Linux security mechanisms (2024)](https://blog.ce9e.org/posts/2024-06-23-linux-security-mechanisms/)
* [2025-12-14, 15:05:06](https://news.ycombinator.com/item?id=46263530) - [Illuminating the processor core with LLVM-mca](https://abseil.io/fast/99)
* [2025-12-14, 14:26:00](https://soylentnews.org/article.pl?sid=25/12/13/0429235&amp;from=rss) - [Calibre Now Integrated With AI](https://soylentnews.org/article.pl?sid=25/12/13/0429235&amp;from=rss)
* [2025-12-14, 14:19:53](https://lobste.rs/s/qapljp/improved_my_feedreader_s_writing_web) - [Improved My Feedreader’s Writing to the Web](https://www.zylstra.org/blog/2025/12/improved-my-feedreaders-writing-to-the-web/)
* [2025-12-14, 14:07:25](https://lobste.rs/s/ues4u6/acme_device_attestation_extension) - [ACME Device Attestation Extension](https://datatracker.ietf.org/doc/draft-ietf-acme-device-attest/)
* [2025-12-14, 13:40:07](https://lobste.rs/s/7gyuha/distraction_free_writing_environment) - [A distraction-free writing environment](https://github.com/andrewmd5/dawn)
* [2025-12-14, 13:28:12](https://lobste.rs/s/qcbiec/myna_v2_0_0_beta_myna_now_supports_bold) - [Myna v2.0.0 beta: Myna now supports bold/italic variants and even APL programming](https://github.com/sayyadirfanali/Myna/releases/tag/v2.0.0.0-beta)
* [2025-12-14, 13:19:15](https://news.ycombinator.com/item?id=46262816) - [AI and the ironies of automation – Part 2](https://www.ufried.com/blog/ironies_of_ai_2/)
* [2025-12-14, 12:43:26](https://lobste.rs/s/hhddvz/goodbye_microservices_from_100s_problem) - [Goodbye Microservices: From 100s of problem children to 1 superstar (2018)](https://www.twilio.com/en-us/blog/developers/best-practices/goodbye-microservices)
* [2025-12-14, 12:34:35](https://news.ycombinator.com/item?id=46262592) - [Baumol&apos;s Cost Disease](https://en.wikipedia.org/wiki/Baumol_effect)
* [2025-12-14, 12:34:00](https://news.slashdot.org/story/25/12/14/084207/time-magazines-person-of-the-year-the-architects-of-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Time Magazine&apos;s &apos;Person of the Year&apos;: the Architects of AI](https://news.slashdot.org/story/25/12/14/084207/time-magazines-person-of-the-year-the-architects-of-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-14, 11:28:43](https://lobste.rs/s/u5oqny/bpfjailer_ebpf_mandatory_access_control) - [BpfJailer: eBPF Mandatory Access Control](https://lpc.events/event/19/contributions/2159/attachments/1833/3929/BpfJailer%20LPC%202025.pdf)
* [2025-12-14, 10:07:00](https://news.ycombinator.com/item?id=46262021) - [Shai-Hulud compromised a dev machine and raided GitHub org access: a post-mortem](https://trigger.dev/blog/shai-hulud-postmortem)
* [2025-12-14, 09:36:00](https://soylentnews.org/article.pl?sid=25/12/13/0329247&amp;from=rss) - [Ultra-Thin Nanomembrane Device Forms Soft, Seamless Interface With Living Tissue](https://soylentnews.org/article.pl?sid=25/12/13/0329247&amp;from=rss)
* [2025-12-14, 08:44:00](https://hardware.slashdot.org/story/25/12/13/0157258/trump-ban-on-wind-energy-permits-unlawful-court-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Ban on Wind Energy Permits &apos;Unlawful&apos;, Court Rules](https://hardware.slashdot.org/story/25/12/13/0157258/trump-ban-on-wind-energy-permits-unlawful-court-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-14, 08:40:41](https://lobste.rs/s/keyz9l/clickhaskell_1_0_0_is_out) - [ClickHaskell 1.0.0 is out](https://github.com/KovalevDima/ClickHaskell)
* [2025-12-14, 07:45:15](https://news.ycombinator.com/item?id=46261452) - [Compiler Engineering in Practice](https://chisophugis.github.io/2025/12/08/compiler-engineering-in-practice-part-1-what-is-a-compiler.html)
* [2025-12-14, 07:23:52](https://lobste.rs/s/hzyyyy/stop_writing_if_statements_for_your_cli) - [Stop writing if statements for your CLI flags](https://hackers.pub/@hongminhee/2025/stop-writing-if-statements-for-your-cli-flags)
* [2025-12-14, 05:34:00](https://tech.slashdot.org/story/25/12/14/0453227/new-rule-forbids-gnome-shell-extensions-made-using-ai-generated-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Rule Forbids GNOME Shell Extensions Made Using AI-Generated Code](https://tech.slashdot.org/story/25/12/14/0453227/new-rule-forbids-gnome-shell-extensions-made-using-ai-generated-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-14, 04:46:00](https://soylentnews.org/article.pl?sid=25/12/13/0323237&amp;from=rss) - [When It All Comes Crashing Down: The Aftermath of the AI Boom](https://soylentnews.org/article.pl?sid=25/12/13/0323237&amp;from=rss)
* [2025-12-14, 04:37:15](https://lobste.rs/s/o3daas/build_systems_la_carte_2018) - [Build Systems A La Carte (2018)](https://www.microsoft.com/en-us/research/wp-content/uploads/2018/03/build-systems.pdf)
* [2025-12-14, 03:44:00](https://developers.slashdot.org/story/25/12/14/0340217/is-the-r-programming-language-surging-in-popularity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is the R Programming Language Surging in Popularity?](https://developers.slashdot.org/story/25/12/14/0340217/is-the-r-programming-language-surging-in-popularity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-14, 02:32:05](https://lobste.rs/s/6awweq/larval_stage_support_engineering_great) - [Larval stage support engineering: great at what doesn’t scale](https://thundergolfer.com/startups/support/2025/12/13/support-eng-stage-1/)
* [2025-12-14, 01:34:00](https://news.slashdot.org/story/25/12/14/0112231/system76-launches-first-stable-release-of-cosmic-desktop-and-popos-2404-lts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [System76 Launches First Stable Release of COSMIC Desktop and Pop!_OS 24.04 LTS](https://news.slashdot.org/story/25/12/14/0112231/system76-launches-first-stable-release-of-cosmic-desktop-and-popos-2404-lts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-14, 00:35:00](https://news.slashdot.org/story/25/12/14/0030234/free-software-awards-winners-announced-andy-wingo-alx-sa-govdirectory?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Free Software Awards&apos; Winners Announced: Andy Wingo, Alx Sa, Govdirectory ](https://news.slashdot.org/story/25/12/14/0030234/free-software-awards-winners-announced-andy-wingo-alx-sa-govdirectory?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-14, 00:34:07](https://lobste.rs/s/ibjihl/icl_interactive_common_lisp_enhanced) - [icl: Interactive Common Lisp: an enhanced REPL](https://github.com/atgreen/icl)
* [2025-12-14, 00:04:00](https://soylentnews.org/article.pl?sid=25/12/13/0314229&amp;from=rss) - [A New Anonymous Phone Carrier Lets You Sign Up With Nothing but a Zip Code](https://soylentnews.org/article.pl?sid=25/12/13/0314229&amp;from=rss)
* [2025-12-13, 19:40:53](https://lobste.rs/s/zlsrd2/what_is_build_system_anyway) - [what is a build system, anyway?](https://jyn.dev/what-is-a-build-system-anyway/)
* [2025-12-13, 19:23:00](https://soylentnews.org/article.pl?sid=25/12/11/0919226&amp;from=rss) - [Scientists Finally Uncover Why the World’s Most Common Heart Drug Causes Muscle Pain](https://soylentnews.org/article.pl?sid=25/12/11/0919226&amp;from=rss)
* [2025-12-13, 17:19:16](https://lobste.rs/s/zfnnvr/editors_should_have_opt_for_less) - [Editors should have an opt-in for less assistance (2024)](https://www.da.vidbuchanan.co.uk/blog/annoying-text-editors.html)
* [2025-12-13, 17:01:32](https://lobste.rs/s/aoqsqp/i_tried_gleam_for_advent_code_i_get_hype) - [I Tried Gleam for Advent of Code, and I Get the Hype](https://blog.tymscar.com/posts/gleamaoc2025/)
* [2025-12-13, 14:37:00](https://soylentnews.org/article.pl?sid=25/12/11/0916209&amp;from=rss) - [Germany Might Have Just Saved Gas Engines From a European Ban](https://soylentnews.org/article.pl?sid=25/12/11/0916209&amp;from=rss)
* [2025-12-13, 09:52:00](https://soylentnews.org/article.pl?sid=25/12/11/0910257&amp;from=rss) - [Space Shuttle Lessons: Backtracks Can Create Breakthroughs](https://soylentnews.org/article.pl?sid=25/12/11/0910257&amp;from=rss)
* [2025-12-13, 05:05:00](https://soylentnews.org/article.pl?sid=25/12/11/092209&amp;from=rss) - [USA Wants Your Social Media History If You Visit](https://soylentnews.org/article.pl?sid=25/12/11/092209&amp;from=rss)
* [2025-12-13, 00:21:00](https://soylentnews.org/article.pl?sid=25/12/11/023241&amp;from=rss) - [Man Dies of Rabies After Kidney Transplant From Donor Who Saved Kitten From Skunk](https://soylentnews.org/article.pl?sid=25/12/11/023241&amp;from=rss)
* [2025-12-12, 19:36:00](https://soylentnews.org/article.pl?sid=25/12/11/0157235&amp;from=rss) - [ICEBlock App Sues Trump Administration for Censorship and &apos;Unlawful Threats&apos;](https://soylentnews.org/article.pl?sid=25/12/11/0157235&amp;from=rss)
* [2025-12-12, 14:54:00](https://soylentnews.org/article.pl?sid=25/12/11/0150219&amp;from=rss) - [Ubuntu to Offer AMD ROCm Packages for AI Processing](https://soylentnews.org/article.pl?sid=25/12/11/0150219&amp;from=rss)
* [2025-12-12, 14:18:10](https://news.ycombinator.com/item?id=46244362) - [Checkers Arcade](https://blog.fogus.me/games/checkers-arcade.html)
* [2025-12-12, 10:07:00](https://soylentnews.org/article.pl?sid=25/12/10/2258243&amp;from=rss) - [Porsche Panic in Russia as Pricey Status Symbols Forget How to Car](https://soylentnews.org/article.pl?sid=25/12/10/2258243&amp;from=rss)
* [2025-12-12, 05:22:00](https://soylentnews.org/article.pl?sid=25/12/10/2256226&amp;from=rss) - [Pebble Index 01 Arrives as a Private Open Source Voice Capture Ring](https://soylentnews.org/article.pl?sid=25/12/10/2256226&amp;from=rss)
* [2025-12-12, 00:39:00](https://soylentnews.org/article.pl?sid=25/12/10/2252241&amp;from=rss) - [Russia Says It Might Build its Own Linux Community After Removal of Several Kernel Maintainers](https://soylentnews.org/article.pl?sid=25/12/10/2252241&amp;from=rss)
* [2025-12-11, 19:56:00](https://soylentnews.org/article.pl?sid=25/12/10/2248258&amp;from=rss) - [ER Doctors Are Sounding the Alarm on a Fast-Growing Cannabis Illness](https://soylentnews.org/article.pl?sid=25/12/10/2248258&amp;from=rss)
* [2025-12-11, 15:07:00](https://soylentnews.org/article.pl?sid=25/12/10/1242208&amp;from=rss) - [AI Favors Texts Written by Other AIs, Even When They&apos;re Worse Than Human Ones](https://soylentnews.org/article.pl?sid=25/12/10/1242208&amp;from=rss)
* [2025-12-11, 14:29:16](https://news.ycombinator.com/item?id=46231813) - [Interview with Kent Overstreet (Bcachefs) [audio]](https://linuxunplugged.com/644)
* [2025-12-11, 10:25:00](https://soylentnews.org/article.pl?sid=25/12/10/0213247&amp;from=rss) - [Proton Launches Encrypted Sheets as a Privacy-First Alternative to Google, Microsoft Excel](https://soylentnews.org/article.pl?sid=25/12/10/0213247&amp;from=rss)
* [2025-12-11, 05:48:00](https://soylentnews.org/article.pl?sid=25/12/10/0211215&amp;from=rss) - [This German State Decides to Save €15 Million Each Year By Kicking Out Microsoft for Open Source](https://soylentnews.org/article.pl?sid=25/12/10/0211215&amp;from=rss)
* [2025-12-11, 00:52:00](https://soylentnews.org/article.pl?sid=25/12/10/027248&amp;from=rss) - [Chattanooga&apos;s Municipal Fiber Network Has Delivered $5.3 Billion in Community Benefits](https://soylentnews.org/article.pl?sid=25/12/10/027248&amp;from=rss)
