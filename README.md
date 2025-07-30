# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence Developments

* [OpenAI’s ChatGPT Agent Casually Clicks Through 'I am not a robot' Verification Test](https://soylentnews.org/article.pl?sid=25/07/29/1652215&amp;from=rss) - A surprising demonstration of AI’s ability to bypass CAPTCHA systems.

* [Google Confirms It Will Sign the EU AI Code of Practice](https://tech.slashdot.org/story/25/07/30/1916258/google-confirms-it-will-sign-the-eu-ai-code-of-practice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Google officially endorses the European Union's AI Code of Practice.

* [Google is Using AI Age Checks To Lock Down User Accounts](https://tech.slashdot.org/story/25/07/30/1731256/google-is-using-ai-age-checks-to-lock-down-user-accounts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - AI-driven age checks signal increasing measures for online account security.

* [Zuckerberg Says Meta's AI Systems Have Begun Improving Themselves, And Developing Superintelligence is Now in Sight](https://tech.slashdot.org/story/25/07/30/1359201/zuckerberg-says-metas-ai-systems-have-begun-improving-themselves-and-developing-superintelligence-is-now-in-sight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Meta claims a significant step forward in AI advancements.

## Space and Science Discoveries

* [Early universe's 'little red dots' may be black hole stars](https://www.science.org/content/article/early-universe-s-little-red-dots-may-be-black-hole-stars) - New insights into the mysterious 'black hole stars' from the early universe.

* [NASA’s Webb Finds Possible 'Direct Collapse' Black Hole](https://soylentnews.org/article.pl?sid=25/07/29/0611252&amp;from=rss) - Webb Telescope uncovers evidence pointing to a novel black hole formation.

* [India Launches NASA-ISRO Satellite To Track Climate Threats From Space](https://science.slashdot.org/story/25/07/30/1839229/india-launches-nasa-isro-satellite-to-track-climate-threats-from-space?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Joint efforts between NASA and ISRO aim to monitor environmental risks.

* [Famous Double-Slit Experiment Holds Up When Stripped To Its Quantum Essentials](https://science.slashdot.org/story/25/07/30/0322225/famous-double-slit-experiment-holds-up-when-stripped-to-its-quantum-essentials?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Quantum foundations confirmed in stripped-down experimental conditions.

## Technology and Security

* [US Intelligence Intervened With DOJ To Push HPE-Juniper Merger](https://yro.slashdot.org/story/25/07/30/1926221/us-intelligence-intervened-with-doj-to-push-hpe-juniper-merger?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Allegations of intelligence agency interference in corporate mergers.

* [Critical Vulnerability in AI Vibe Coding platform Base44](https://www.wiz.io/blog/critical-vulnerability-base44) - A major flaw discovered in a popular coding tool.

* [Tech CEO's Negative Coverage Vanished From Google via Security Flaw](https://search.slashdot.org/story/25/07/30/1631222/tech-ceos-negative-coverage-vanished-from-google-via-security-flaw?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Investigation into how security flaws allow manipulation of search results.

* [AI Code Generators Are Writing Vulnerable Software Nearly Half the Time, Analysis Finds](https://developers.slashdot.org/story/25/07/30/150216/ai-code-generators-are-writing-vulnerable-software-nearly-half-the-time-analysis-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Research highlights security concerns in AI-generated code.

## Cultural and Social Commentary

* [The Math Is Haunted](https://overreacted.io/the-math-is-haunted/) - A poetic exploration of math’s mysterious and peculiar truths.

* [The Hype is the Product](https://rys.io/en/180.html) - Examining how hype fuels consumer and market behaviors.

* [Most Illinois farmland is not owned by farmers](https://www.chicagotribune.com/2025/06/01/illinois-farming-ownership-climate-change/) - An insightful look at modern farming ownership trends.

* [Social Media Is Dead – Here’s What Comes Next](https://soylentnews.org/article.pl?sid=25/07/26/0146240&amp;from=rss) - Analysis on the decline of traditional social media platforms and future alternatives.

## Space Exploration Challenges

* [First Australian-Made Rocket Crashes After 14 Seconds of Flight](https://slashdot.org/story/25/07/30/1936241/first-australian-made-rocket-crashes-after-14-seconds-of-flight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A disappointing failure for Australia's space ambitions.

* [NASA May Lose Close To 4,000 Employees After Latest Deferred Resignation Round](https://soylentnews.org/article.pl?sid=25/07/28/1524227&amp;from=rss) - Concerns arise over staff shortages at NASA.

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

* [2025-07-30, 21:32:00](https://soylentnews.org/article.pl?sid=25/07/29/1652215&amp;from=rss) - [OpenAI’s ChatGPT Agent Casually Clicks Through “I am not a robot” Verification Test](https://soylentnews.org/article.pl?sid=25/07/29/1652215&amp;from=rss)
* [2025-07-30, 21:30:00](https://slashdot.org/story/25/07/30/1936241/first-australian-made-rocket-crashes-after-14-seconds-of-flight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [First Australian-Made Rocket Crashes After 14 Seconds of Flight](https://slashdot.org/story/25/07/30/1936241/first-australian-made-rocket-crashes-after-14-seconds-of-flight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-30, 21:18:21](https://news.ycombinator.com/item?id=44739618) - [Early universe&apos;s &apos;little red dots&apos; may be black hole stars](https://www.science.org/content/article/early-universe-s-little-red-dots-may-be-black-hole-stars)
* [2025-07-30, 21:13:20](https://news.ycombinator.com/item?id=44739556) - [Vibe code is legacy code](https://blog.val.town/vibe-code)
* [2025-07-30, 20:50:00](https://yro.slashdot.org/story/25/07/30/1926221/us-intelligence-intervened-with-doj-to-push-hpe-juniper-merger?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Intelligence Intervened With DOJ To Push HPE-Juniper Merger](https://yro.slashdot.org/story/25/07/30/1926221/us-intelligence-intervened-with-doj-to-push-hpe-juniper-merger?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-30, 20:46:49](https://news.ycombinator.com/item?id=44739315) - [The Math Is Haunted](https://overreacted.io/the-math-is-haunted/)
* [2025-07-30, 20:20:08](https://lobste.rs/s/ykjkon/hype_is_product) - [The Hype is the Product](https://rys.io/en/180.html)
* [2025-07-30, 20:10:00](https://tech.slashdot.org/story/25/07/30/1916258/google-confirms-it-will-sign-the-eu-ai-code-of-practice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Confirms It Will Sign the EU AI Code of Practice](https://tech.slashdot.org/story/25/07/30/1916258/google-confirms-it-will-sign-the-eu-ai-code-of-practice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-30, 19:39:18](https://lobste.rs/s/aqiske/emacs_macos_bug) - [Emacs: The MacOS Bug](https://xlii.space/eng/emacs-the-macos-bug/)
* [2025-07-30, 19:35:00](https://it.slashdot.org/story/25/07/30/1935230/nothings-phone-3-is-stymied-by-contentious-design-and-price?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nothing&apos;s Phone 3 Is Stymied By Contentious Design and Price](https://it.slashdot.org/story/25/07/30/1935230/nothings-phone-3-is-stymied-by-contentious-design-and-price?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-30, 18:58:16](https://lobste.rs/s/7nho3g/dive_into_open_chat_protocols) - [A Dive Into Open Chat Protocols](https://wiki.alopex.li/ADiveIntoOpenChat)
* [2025-07-30, 18:55:43](https://news.ycombinator.com/item?id=44738161) - [The Preserving Machine by Philip K. Dick (1953)](https://archive.org/details/Fantasy_Science_Fiction_v004n06_1953-06)
* [2025-07-30, 18:50:00](https://science.slashdot.org/story/25/07/30/1839229/india-launches-nasa-isro-satellite-to-track-climate-threats-from-space?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [India Launches NASA-ISRO Satellite To Track Climate Threats From Space](https://science.slashdot.org/story/25/07/30/1839229/india-launches-nasa-isro-satellite-to-track-climate-threats-from-space?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-30, 18:27:01](https://news.ycombinator.com/item?id=44737823) - [Polarizing Parsers](https://flak.tedunangst.com/post/polarizing-parsers)
* [2025-07-30, 18:14:00](https://it.slashdot.org/story/25/07/30/1814253/dropbox-pulls-the-plug-on-password-manager?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Dropbox Pulls the Plug on Password Manager](https://it.slashdot.org/story/25/07/30/1814253/dropbox-pulls-the-plug-on-password-manager?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-30, 17:53:25](https://lobste.rs/s/gyzvmq/always_bet_on_text_2014) - [always bet on text (2014)](https://graydon2.dreamwidth.org/193447.html)
* [2025-07-30, 17:51:21](https://news.ycombinator.com/item?id=44737353) - [Most Illinois farmland is not owned by farmers](https://www.chicagotribune.com/2025/06/01/illinois-farming-ownership-climate-change/)
* [2025-07-30, 17:50:48](https://news.ycombinator.com/item?id=44737346) - [The hype is the product](https://rys.io/en/180.html)
* [2025-07-30, 17:33:32](https://lobste.rs/s/fb9hgm/interacting_with_text_adventures) - [Interacting With Text Adventures Through Perl](https://entropicthoughts.com/interacting-with-text-adventures-through-perl)
* [2025-07-30, 17:31:00](https://tech.slashdot.org/story/25/07/30/1731256/google-is-using-ai-age-checks-to-lock-down-user-accounts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google is Using AI Age Checks To Lock Down User Accounts](https://tech.slashdot.org/story/25/07/30/1731256/google-is-using-ai-age-checks-to-lock-down-user-accounts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-30, 17:21:17](https://news.ycombinator.com/item?id=44736967) - [Fast](https://www.catherinejue.com/fast)
* [2025-07-30, 17:01:10](https://news.ycombinator.com/item?id=44736673) - [Artie (YC S23) Is Hiring Founding AEs](https://www.ycombinator.com/companies/artie/jobs/CfSrcAH-founding-ae)
* [2025-07-30, 16:59:09](https://news.ycombinator.com/item?id=44736646) - [Australia widens teen social media ban to YouTube, scraps exemption](https://www.reuters.com/legal/litigation/australia-widens-teen-social-media-ban-youtube-scraps-exemption-2025-07-29/)
* [2025-07-30, 16:48:00](https://soylentnews.org/article.pl?sid=25/07/29/0611252&amp;from=rss) - [NASA’s Webb Finds Possible &apos;Direct Collapse&apos; Black Hole](https://soylentnews.org/article.pl?sid=25/07/29/0611252&amp;from=rss)
* [2025-07-30, 16:41:00](https://search.slashdot.org/story/25/07/30/1631222/tech-ceos-negative-coverage-vanished-from-google-via-security-flaw?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tech CEO&apos;s Negative Coverage Vanished from Google via Security Flaw](https://search.slashdot.org/story/25/07/30/1631222/tech-ceos-negative-coverage-vanished-from-google-via-security-flaw?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-30, 16:25:12](https://lobste.rs/s/z7fb8w/crush_glamourous_ai_coding_agent_for_your) - [Crush: The glamourous AI coding agent for your favourite terminal](https://github.com/charmbracelet/crush)
* [2025-07-30, 16:18:14](https://news.ycombinator.com/item?id=44736176) - [Crush: Glamourous AI coding agent for your favourite terminal](https://github.com/charmbracelet/crush)
* [2025-07-30, 16:12:32](https://news.ycombinator.com/item?id=44736101) - [Critical Vulnerability in AI Vibe Coding platform Base44](https://www.wiz.io/blog/critical-vulnerability-base44)
* [2025-07-30, 16:11:58](https://news.ycombinator.com/item?id=44736090) - [Optician Sans – A free font based on historical eye charts and optotypes](https://optician-sans.com/)
* [2025-07-30, 16:08:44](https://lobste.rs/s/aew8tt/why_we_need_know_lr_recursive_descent) - [Why We Need to Know LR and Recursive Descent Parsing Techniques](https://tratt.net/laurie/blog/2023/why_we_need_to_know_lr_and_recursive_descent_parsing_techniques.html)
* [2025-07-30, 16:01:00](https://developers.slashdot.org/story/25/07/30/150216/ai-code-generators-are-writing-vulnerable-software-nearly-half-the-time-analysis-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Code Generators Are Writing Vulnerable Software Nearly Half the Time, Analysis Finds](https://developers.slashdot.org/story/25/07/30/150216/ai-code-generators-are-writing-vulnerable-software-nearly-half-the-time-analysis-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-30, 15:54:02](https://news.ycombinator.com/item?id=44735843) - [Launch HN: Lucidic (YC W25) – Debug, test, and evaluate AI agents in production](https://news.ycombinator.com/item?id=44735843)
* [2025-07-30, 15:50:48](https://lobste.rs/s/scar6u/verified_assembly_2_memory_risc_v_cuts_for) - [Verified Assembly 2: Memory, RISC-V, Cuts for Invariants, and Ghost Code](https://www.philipzucker.com/asm_verify2/)
* [2025-07-30, 15:33:35](https://lobste.rs/s/oh2hzs/rfc_upstream_target_support_for_cheri) - [[RFC] Upstream target support for CHERI-enabled architectures](https://discourse.llvm.org/t/rfc-upstream-target-support-for-cheri-enabled-architectures/87623)
* [2025-07-30, 15:24:03](https://lobste.rs/s/yd42ea/agentic_coding_things_didn_t_work) - [Agentic Coding Things That Didn’t Work](https://lucumr.pocoo.org/2025/7/30/things-that-didnt-work/)
* [2025-07-30, 15:20:00](https://slashdot.org/story/25/07/30/1456243/jpmorgan-spooks-fintechs-with-plans-to-charge-for-access-to-customer-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [JPMorgan Spooks Fintechs With Plans To Charge For Access To Customer Data](https://slashdot.org/story/25/07/30/1456243/jpmorgan-spooks-fintechs-with-plans-to-charge-for-access-to-customer-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-30, 15:15:30](https://news.ycombinator.com/item?id=44735334) - [Words about Arrays and Tables](https://buttondown.com/hillelwayne/archive/2000-words-about-arrays-and-tables/)
* [2025-07-30, 15:13:43](https://lobste.rs/s/bhs03m/2000_words_about_arrays_tables) - [2000 words about arrays and tables](https://buttondown.com/hillelwayne/archive/2000-words-about-arrays-and-tables/)
* [2025-07-30, 14:44:08](https://lobste.rs/s/mrzwqr/writing_memory_efficient_c_structs) - [Writing memory efficient C structs](https://tomscheers.github.io/2025/07/29/writing-memory-efficient-structs-post.html)
* [2025-07-30, 14:40:00](https://slashdot.org/story/25/07/30/1440256/only-27-of-managers-worldwide-feel-engaged-at-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Only 27% of Managers Worldwide Feel Engaged at Work](https://slashdot.org/story/25/07/30/1440256/only-27-of-managers-worldwide-feel-engaged-at-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-30, 14:15:07](https://news.ycombinator.com/item?id=44734522) - [A short post on short trains](https://shakeddown.substack.com/p/a-short-post-on-short-trains)
* [2025-07-30, 14:11:36](https://news.ycombinator.com/item?id=44734471) - [Show HN: State of the Art Open-source alternative to ChatGPT Agents for browsing](https://github.com/trymeka/agent)
* [2025-07-30, 14:02:15](https://lobste.rs/s/zwbafr/you_are_bios_now_building_hypervisor_rust) - [You Are The BIOS Now: Building A Hypervisor In Rust With KVM](https://yeet.cx/blog/you-are-the-bios-now)
* [2025-07-30, 14:00:00](https://tech.slashdot.org/story/25/07/30/1359201/zuckerberg-says-metas-ai-systems-have-begun-improving-themselves-and-developing-superintelligence-is-now-in-sight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Zuckerberg Says Meta&apos;s AI Systems Have Begun Improving Themselves, And Developing Superintelligence is Now in Sight](https://tech.slashdot.org/story/25/07/30/1359201/zuckerberg-says-metas-ai-systems-have-begun-improving-themselves-and-developing-superintelligence-is-now-in-sight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-30, 13:32:23](https://news.ycombinator.com/item?id=44733968) - [Writing memory efficient C structs](https://tomscheers.github.io/2025/07/29/writing-memory-efficient-structs-post.html)
* [2025-07-30, 13:26:10](https://lobste.rs/s/p9axqd/rfc_862_echo_protocol) - [RFC 862: Echo Protocol](https://datatracker.ietf.org/doc/html/rfc862)
* [2025-07-30, 13:24:10](https://news.ycombinator.com/item?id=44733888) - [Try the Mosquito Bucket of Death](https://www.energyvanguard.com/blog/try-the-mosquito-bucket-of-death/)
* [2025-07-30, 13:17:28](https://news.ycombinator.com/item?id=44733817) - [Our $100M Series B](https://oxide.computer/blog/our-100m-series-b)
* [2025-07-30, 13:15:35](https://news.ycombinator.com/item?id=44733800) - [I launched 17 side projects. Result? I&apos;m rich in expired domains](https://news.ycombinator.com/item?id=44733800)
* [2025-07-30, 13:05:22](https://lobste.rs/s/uyudor/optimize_cpu_performance_with) - [Optimize CPU performance with Instruments](https://developer.apple.com/videos/play/wwdc2025/308/)
* [2025-07-30, 13:00:00](https://tech.slashdot.org/story/25/07/30/0333248/google-execs-say-employees-have-to-be-more-ai-savvy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Execs Say Employees Have To &apos;Be More AI-Savvy&apos;](https://tech.slashdot.org/story/25/07/30/0333248/google-execs-say-employees-have-to-be-more-ai-savvy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-30, 12:29:52](https://news.ycombinator.com/item?id=44733341) - [Problem solving often a matter of cooking up an appropriate Markov chain (2007)](http://math.uchicago.edu/~shmuel/Network-course-readings/Markov_chain_tricks.pdf)
* [2025-07-30, 12:03:54](https://news.ycombinator.com/item?id=44733119) - [The HTML Hobbyist](https://www.htmlhobbyist.com/)
* [2025-07-30, 11:57:00](https://soylentnews.org/article.pl?sid=25/07/28/1538201&amp;from=rss) - [EU-US Draft 15Pc Tariff Agreement Appears To Include Pharma, Chips](https://soylentnews.org/article.pl?sid=25/07/28/1538201&amp;from=rss)
* [2025-07-30, 11:02:23](https://lobste.rs/s/nadv6h/activity_monitor_anatomy) - [Activity Monitor Anatomy](https://www.bazhenov.me/posts/activity-monitor-anatomy/)
* [2025-07-30, 10:31:12](https://news.ycombinator.com/item?id=44732593) - [From XML to JSON to CBOR](https://cborbook.com/introduction/from_xml_to_json_to_cbor.html)
* [2025-07-30, 10:03:14](https://lobste.rs/s/iubohk/phoenix_liveview_v1_1_0) - [Phoenix LiveView v1.1.0](https://hexdocs.pm/phoenix_live_view/changelog.html)
* [2025-07-30, 10:00:00](https://science.slashdot.org/story/25/07/30/0322225/famous-double-slit-experiment-holds-up-when-stripped-to-its-quantum-essentials?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Famous Double-Slit Experiment Holds Up When Stripped To Its Quantum Essentials](https://science.slashdot.org/story/25/07/30/0322225/famous-double-slit-experiment-holds-up-when-stripped-to-its-quantum-essentials?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-30, 08:34:10](https://news.ycombinator.com/item?id=44732020) - [Sleep all comes down to the mitochondria](https://www.science.org/content/blog-post/it-all-comes-down-mitochondria)
* [2025-07-30, 07:15:08](https://lobste.rs/s/70mi93/month_using_xmpp_for_every_call_chat_2023) - [A month using XMPP for every call and chat (2023)](https://neilzone.co.uk/2023/08/a-month-using-xmpp-using-snikket-for-every-call-and-chat/)
* [2025-07-30, 07:13:00](https://soylentnews.org/article.pl?sid=25/07/28/1533222&amp;from=rss) - [China Advances Toward Tech Independence With New Homegrown 6nm Gaming And AI GPUs](https://soylentnews.org/article.pl?sid=25/07/28/1533222&amp;from=rss)
* [2025-07-30, 07:00:00](https://science.slashdot.org/story/25/07/30/0314210/a-pill-for-sleep-apnea-could-be-on-the-horizon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Pill for Sleep Apnea Could Be on the Horizon](https://science.slashdot.org/story/25/07/30/0314210/a-pill-for-sleep-apnea-could-be-on-the-horizon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-30, 06:43:00](https://lobste.rs/s/5n6jcp/flat_design_vs_realistic_skeuomorphic) - [Flat design vs realistic (“skeuomorphic”) design](https://www.flatisbad.com/)
* [2025-07-30, 06:16:09](https://lobste.rs/s/ikhfqq/pkgbase_removes_freebsd_base_system) - [PKGBASE Removes FreeBSD Base System Feature](https://lists.freebsd.org/archives/freebsd-pkgbase/2025-July/000590.html)
* [2025-07-30, 04:56:43](https://lobste.rs/s/bpeob3/bookmarkfs_fuse_based_pseudo_filesystem) - [bookmarkfs: FUSE-based pseudo-filesystem for managing web browser bookmarks](https://sr.ht/~cismonx/bookmarkfs/)
* [2025-07-30, 03:53:52](https://lobste.rs/s/o7avvq/i_want_defend_wayland_here_explain) - [I want to defend Wayland here and explain a crucial piece that I think people are missing](https://ordinary.cafe/@technobaboo/114935252929285259)
* [2025-07-30, 02:32:00](https://soylentnews.org/article.pl?sid=25/07/28/1524227&amp;from=rss) - [Nasa May Lose Close To 4,000 Employees After Latest Deferred Resignation Round](https://soylentnews.org/article.pl?sid=25/07/28/1524227&amp;from=rss)
* [2025-07-29, 21:44:00](https://soylentnews.org/article.pl?sid=25/07/28/1520211&amp;from=rss) - [Senator Demands Mandiant Hand Over Telco Salt Typhoon Probes](https://soylentnews.org/article.pl?sid=25/07/28/1520211&amp;from=rss)
* [2025-07-29, 17:02:00](https://soylentnews.org/article.pl?sid=25/07/27/2215239&amp;from=rss) - [Hacker Injects Malicious, Potentially Disk-Wiping Prompt Into Amazon&apos;s Ai Coding Assistant](https://soylentnews.org/article.pl?sid=25/07/27/2215239&amp;from=rss)
* [2025-07-29, 16:07:13](https://lobste.rs/s/jyq5hg/2025_stack_overflow_developer_survey) - [2025 Stack Overflow Developer Survey](https://survey.stackoverflow.co/2025/)
* [2025-07-29, 15:44:51](https://lobste.rs/s/ullr4n/printing_book_at_home_with_minimal) - [Printing a Book at Home with Minimal Equipment](https://huijzer.xyz/posts/98/printing-a-book-at-home-with-minimal-equipment)
* [2025-07-29, 13:14:41](https://lobste.rs/s/wd6fhe/ethersync_peer_peer_collaborative) - [Ethersync: Peer-to-peer collaborative editing of local text files](https://github.com/ethersync/ethersync)
* [2025-07-29, 12:15:00](https://soylentnews.org/article.pl?sid=25/07/27/0234226&amp;from=rss) - [Gold Can be Heated to 14 Times its Melting Point Without Melting](https://soylentnews.org/article.pl?sid=25/07/27/0234226&amp;from=rss)
* [2025-07-29, 07:27:00](https://soylentnews.org/article.pl?sid=25/07/27/0228236&amp;from=rss) - [Discovery Alert: Flaring Star, Toasted Planet](https://soylentnews.org/article.pl?sid=25/07/27/0228236&amp;from=rss)
* [2025-07-29, 02:40:00](https://soylentnews.org/article.pl?sid=25/07/26/1945219&amp;from=rss) - [Chinese Hackers Breached U.S. Army National Guard to Steal Network Configurations](https://soylentnews.org/article.pl?sid=25/07/26/1945219&amp;from=rss)
* [2025-07-28, 22:00:00](https://soylentnews.org/article.pl?sid=25/07/26/1935251&amp;from=rss) - [As Site Blocking Is Increasing, European Commission Subtly Slaps Down Italy’s Piracy Shield](https://soylentnews.org/article.pl?sid=25/07/26/1935251&amp;from=rss)
* [2025-07-28, 17:11:00](https://soylentnews.org/article.pl?sid=25/07/26/1924256&amp;from=rss) - [AMD CEO Says U.S.-Made TSMC Chips Are More Expensive, But Worth It](https://soylentnews.org/article.pl?sid=25/07/26/1924256&amp;from=rss)
* [2025-07-28, 12:30:00](https://soylentnews.org/article.pl?sid=25/07/26/192237&amp;from=rss) - [Inventor Claims Bleach Injections will Destroy Cancer Tumors](https://soylentnews.org/article.pl?sid=25/07/26/192237&amp;from=rss)
* [2025-07-28, 10:26:20](https://news.ycombinator.com/item?id=44709303) - [Hierarchical Reasoning Model – 1k training samples SoTA reasoning v/s CoT](https://github.com/sapientinc/HRM)
* [2025-07-28, 07:45:00](https://soylentnews.org/article.pl?sid=25/07/26/1848241&amp;from=rss) - [Coding, Remote Work and Rehabilitation](https://soylentnews.org/article.pl?sid=25/07/26/1848241&amp;from=rss)
* [2025-07-28, 02:58:00](https://soylentnews.org/article.pl?sid=25/07/26/1844226&amp;from=rss) - [Google Sues Operators of 10-Million-Device Badbox 2.0 Botnet](https://soylentnews.org/article.pl?sid=25/07/26/1844226&amp;from=rss)
* [2025-07-27, 22:15:00](https://soylentnews.org/article.pl?sid=25/07/26/1830254&amp;from=rss) - [The Cells That Breathe Two Ways](https://soylentnews.org/article.pl?sid=25/07/26/1830254&amp;from=rss)
* [2025-07-27, 17:37:00](https://soylentnews.org/article.pl?sid=25/07/26/1613246&amp;from=rss) - [UK To Ban Making Ransomware Payments For Some Organizations](https://soylentnews.org/article.pl?sid=25/07/26/1613246&amp;from=rss)
* [2025-07-27, 16:32:46](https://news.ycombinator.com/item?id=44702478) - [Ultra-Rapid Vision in Birds](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0151099)
* [2025-07-27, 11:47:00](https://soylentnews.org/article.pl?sid=25/07/26/0330200&amp;from=rss) - [Japan Bets Big on Ultrathin, Ultralight Solar Panels](https://soylentnews.org/article.pl?sid=25/07/26/0330200&amp;from=rss)
* [2025-07-27, 10:30:48](https://news.ycombinator.com/item?id=44700263) - [Traccar: an open source GPS tracking system](https://github.com/traccar/traccar)
* [2025-07-27, 06:50:00](https://soylentnews.org/article.pl?sid=25/07/26/0153214&amp;from=rss) - [WD Makes Click Of Death A Feature](https://soylentnews.org/article.pl?sid=25/07/26/0153214&amp;from=rss)
* [2025-07-27, 05:53:40](https://news.ycombinator.com/item?id=44699174) - [.NET 10 Preview 6 brings JIT improvements, one-shot tool execution](https://www.infoworld.com/article/4023654/net-10-preview-6-brings-jit-improvements-one-shot-tool-execution.html)
* [2025-07-27, 02:22:51](https://news.ycombinator.com/item?id=44698413) - [A Python dict that can report which keys you did not use](https://www.peterbe.com/plog/a-python-dict-that-can-report-which-keys-you-did-not-use)
* [2025-07-27, 02:06:00](https://soylentnews.org/article.pl?sid=25/07/26/0146240&amp;from=rss) - [Social Media Is Dead – Here’s What Comes Next](https://soylentnews.org/article.pl?sid=25/07/26/0146240&amp;from=rss)
* [2025-07-26, 21:19:00](https://soylentnews.org/article.pl?sid=25/07/26/0136203&amp;from=rss) - [Tesla Continues Slide As Musk Warns Of \&quot;Rough Quarters\&quot; Ahead](https://soylentnews.org/article.pl?sid=25/07/26/0136203&amp;from=rss)
* [2025-07-26, 16:32:00](https://soylentnews.org/article.pl?sid=25/07/26/0131222&amp;from=rss) - [AI Industry&apos;s Size Obsession Is Killing ROI, Engineer Argues](https://soylentnews.org/article.pl?sid=25/07/26/0131222&amp;from=rss)
* [2025-07-26, 11:43:00](https://soylentnews.org/article.pl?sid=25/07/25/0534229&amp;from=rss) - [Work Less, Feel Better](https://soylentnews.org/article.pl?sid=25/07/25/0534229&amp;from=rss)
* [2025-07-26, 06:58:00](https://soylentnews.org/article.pl?sid=25/07/25/0511234&amp;from=rss) - [Debian Linux \&quot;Trixie\&quot; is Planned to Release on August 9](https://soylentnews.org/article.pl?sid=25/07/25/0511234&amp;from=rss)
* [2025-07-26, 02:14:00](https://soylentnews.org/article.pl?sid=25/07/25/055215&amp;from=rss) - [Low(er) Price Tesla Announced](https://soylentnews.org/article.pl?sid=25/07/25/055215&amp;from=rss)
