# [News Summary](https://kherrick.github.io/news-summary/)

## Major Exposures and Legal Developments

* [Email Blunder Exposes $90 Billion Russian Oil Smuggling Ring](https://it.slashdot.org/story/26/02/20/1559212/email-blunder-exposes-90-billion-russian-oil-smuggling-ring?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Massive Russian oil smuggling operation revealed due to an email mishap.

* [US Supreme Court Rejects Trump&apos;s Global Tariffs](https://yro.slashdot.org/story/26/02/20/1529240/us-supreme-court-rejects-trumps-global-tariffs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - High court decision puts an end to contentious global tariffs introduced during Trump's administration.

* [PayPal discloses data breach that exposed user info for 6 months](https://www.bleepingcomputer.com/news/security/paypal-discloses-data-breach-exposing-users-personal-information/) - PayPal reveals a significant security vulnerability that lasted for half a year.

* [Silicon Valley engineers were indicted for allegedly sending secrets to Iran](https://www.cnbc.com/2026/02/20/three-engineers-charged-stealing-google-trade-secrets-data-iran-soc-snapdragon.html) - Engineers accused of compromising data from major tech firms and transferring it to Iran.

## Technological Developments and Discoveries

* [An AI Agent Published a Hit Piece on Me – The Operator Came Forward](https://theshamblog.com/an-ai-agent-wrote-a-hit-piece-on-me-part-4/) - The strange account of an AI-generated defamatory article and its creator's eventual confession.

* [Consistency diffusion language models: Up to 14x faster, no quality loss](https://www.together.ai/blog/consistency-diffusion-language-models) - A new era in AI as researchers develop more efficient language models.

* [Trump Directs US Government To Prepare Release of Files on Aliens and UFOs](https://news.slashdot.org/story/26/02/20/0450230/trump-directs-us-government-to-prepare-release-of-files-on-aliens-and-ufos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Former president Trump orders the disclosure of classified information on extraterrestrial phenomena.

* [Amazon Service Was Taken Down By AI Coding Bot](https://it.slashdot.org/story/26/02/20/1252243/amazon-service-was-taken-down-by-ai-coding-bot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A surprising AI malfunction disrupts Amazon services.

## Cultural and Philosophical Commentary

* [Child&apos;s Play: Tech&apos;s new generation and the end of thinking](https://harpers.org/archive/2026/03/childs-play-sam-kriss-ai-startup-roy-lee/) - Critical perspectives on how future technology trends may impact thought and decision-making.

* [AI makes you boring](https://www.marginalia.nu/log/a_132_ai_bores/) - Philosophical musings on how AI influences creativity and originality.

* [A Web Revival: the Internet didn&apos;t die, you&apos;re just not on it](https://youtu.be/tkUgOT22F5s) - A fresh perspective on the supposed decline of the original decentralized web.

## Scientific Advancements and Research

* [NASA Chief Classifies Starliner Flight As &apos;Type A&apos; Mishap, Says Agency Made Mistakes](https://science.slashdot.org/story/26/02/19/2353238/nasa-chief-classifies-starliner-flight-as-type-a-mishap-says-agency-made-mistakes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - NASA acknowledges critical errors in the Starliner program.

* [Incredible Chinese Humanoid Robot Show on CCTV Chinese New Year TV Gala this Week](https://soylentnews.org/article.pl?sid=26/02/18/0140215&amp;from=rss) - China's latest showcase of advancements in humanoid robotics.

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

* [2026-02-20, 16:05:00](https://it.slashdot.org/story/26/02/20/1559212/email-blunder-exposes-90-billion-russian-oil-smuggling-ring?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Email Blunder Exposes $90 Billion Russian Oil Smuggling Ring](https://it.slashdot.org/story/26/02/20/1559212/email-blunder-exposes-90-billion-russian-oil-smuggling-ring?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-20, 15:39:08](https://lobste.rs/s/wbtvf2/how_i_built_minimal_knowledge_sync_for) - [How I built a minimal-knowledge sync for WorkLedger](https://bastiangruber.ca/posts/how-i-built-a-minimal-knowledge-sync-for-workledger/)
* [2026-02-20, 15:29:00](https://yro.slashdot.org/story/26/02/20/1529240/us-supreme-court-rejects-trumps-global-tariffs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Supreme Court Rejects Trump&apos;s Global Tariffs](https://yro.slashdot.org/story/26/02/20/1529240/us-supreme-court-rejects-trumps-global-tariffs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-20, 15:27:38](https://news.ycombinator.com/item?id=47089213) - [Trump&apos;s global tariffs struck down by US Supreme Court](https://www.bbc.com/news/live/c0l9r67drg7t)
* [2026-02-20, 14:48:34](https://news.ycombinator.com/item?id=47088685) - [Child&apos;s Play: Tech&apos;s new generation and the end of thinking](https://harpers.org/archive/2026/03/childs-play-sam-kriss-ai-startup-roy-lee/)
* [2026-02-20, 14:40:00](https://it.slashdot.org/story/26/02/20/1252243/amazon-service-was-taken-down-by-ai-coding-bot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Service Was Taken Down By AI Coding Bot](https://it.slashdot.org/story/26/02/20/1252243/amazon-service-was-taken-down-by-ai-coding-bot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-20, 14:09:07](https://lobste.rs/s/mje6ui/everything_you_never_wanted_know_about) - [Everything you never wanted to know about visually-hidden](https://dbushell.com/2026/02/20/visually-hidden/)
* [2026-02-20, 14:03:18](https://lobste.rs/s/6yjefp/ebpf_hard_way) - [eBPF the Hard Way](https://feyor.sh/blog/ebpf-the-hard-way)
* [2026-02-20, 14:03:06](https://news.ycombinator.com/item?id=47088181) - [I found a useful Git one liner buried in leaked CIA developer docs](https://spencer.wtf/2026/02/20/cleaning-up-merged-git-branches-a-one-liner-from-the-cias-leaked-dev-docs.html)
* [2026-02-20, 14:02:05](https://news.ycombinator.com/item?id=47088166) - [Show HN: A native macOS client for Hacker News, built with SwiftUI](https://github.com/IronsideXXVI/Hacker-News)
* [2026-02-20, 14:01:24](https://lobste.rs/s/5iucri/made_eu_it_was_harder_than_i_thought) - [\&quot;Made in EU\&quot; - it was harder than I thought](https://www.coinerella.com/made-in-eu-it-was-harder-than-i-thought/)
* [2026-02-20, 14:00:00](https://news.slashdot.org/story/26/02/20/0450230/trump-directs-us-government-to-prepare-release-of-files-on-aliens-and-ufos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Directs US Government To Prepare Release of Files on Aliens and UFOs](https://news.slashdot.org/story/26/02/20/0450230/trump-directs-us-government-to-prepare-release-of-files-on-aliens-and-ufos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-20, 13:51:04](https://news.ycombinator.com/item?id=47088037) - [Ggml.ai joins Hugging Face to ensure the long-term progress of Local AI](https://github.com/ggml-org/llama.cpp/discussions/19759)
* [2026-02-20, 13:44:42](https://news.ycombinator.com/item?id=47087954) - [Mothers (YC X26) Is Hiring](https://jobs.ashbyhq.com/9-mothers?utm_source=x8pZ4B3P3Q)
* [2026-02-20, 13:22:32](https://news.ycombinator.com/item?id=47087719) - [PayPal discloses data breach that exposed user info for 6 months](https://www.bleepingcomputer.com/news/security/paypal-discloses-data-breach-exposing-users-personal-information/)
* [2026-02-20, 13:13:00](https://soylentnews.org/article.pl?sid=26/02/19/1613238&amp;from=rss) - [Texas Sues Wi-Fi Router Maker Over Alleged China Links](https://soylentnews.org/article.pl?sid=26/02/19/1613238&amp;from=rss)
* [2026-02-20, 13:00:00](https://it.slashdot.org/story/26/02/20/003230/how-private-equity-debt-left-a-leading-vpn-open-to-chinese-hackers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Private Equity Debt Left a Leading VPN Open To Chinese Hackers](https://it.slashdot.org/story/26/02/20/003230/how-private-equity-debt-left-a-leading-vpn-open-to-chinese-hackers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-20, 12:09:18](https://lobste.rs/s/xe7vkq/django_orm_standalone_querying_existing) - [Django ORM Standalone⁽¹⁾: Querying an existing database](https://www.paulox.net/2026/02/20/django-orm-standalone-database-inspectdb-query/)
* [2026-02-20, 12:04:35](https://news.ycombinator.com/item?id=47086980) - [Nvidia and OpenAI abandon unfinished $100B deal in favour of $30B investment](https://www.ft.com/content/dea24046-0a73-40b2-8246-5ac7b7a54323)
* [2026-02-20, 11:20:15](https://lobste.rs/s/gc4ygs/i_used_claude_code_gsd_build) - [I used Claude Code and GSD to build the accessibility tool I’ve always wanted](https://www.blakewatson.com/journal/i-used-claude-code-and-gsd-to-build-the-accessibility-tool-ive-always-wanted/)
* [2026-02-20, 11:20:02](https://news.ycombinator.com/item?id=47086557) - [Minions – Stripe&apos;s Coding Agents Part 2](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents-part-2)
* [2026-02-20, 11:19:38](https://lobste.rs/s/ihsrgj/web_revival_internet_didn_t_die_you_re_just) - [A Web Revival: the Internet didn&apos;t die, you&apos;re just not on it](https://youtu.be/tkUgOT22F5s)
* [2026-02-20, 10:55:11](https://lobste.rs/s/ickplq/your_personal_blog_should_have_comments) - [Your Personal Blog Should Have Comments](https://medv.io/blog/your-personal-blog-should-have-comments)
* [2026-02-20, 10:50:58](https://news.ycombinator.com/item?id=47086319) - [Silicon Valley engineers were indicted for allegedly sending secrets to Iran](https://www.cnbc.com/2026/02/20/three-engineers-charged-stealing-google-trade-secrets-data-iran-soc-snapdragon.html)
* [2026-02-20, 10:32:52](https://news.ycombinator.com/item?id=47086181) - [The path to ubiquitous AI (17k tokens/sec)](https://taalas.com/the-path-to-ubiquitous-ai/)
* [2026-02-20, 10:00:00](https://tech.slashdot.org/story/26/02/19/231216/new-york-drops-plan-to-legalize-robotaxis-outside-nyc?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New York Drops Plan To Legalize Robotaxis Outside NYC](https://tech.slashdot.org/story/26/02/19/231216/new-york-drops-plan-to-legalize-robotaxis-outside-nyc?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-20, 09:23:49](https://lobste.rs/s/wejtbl/keep_android_open) - [Keep Android Open](https://keepandroidopen.org/)
* [2026-02-20, 09:15:36](https://lobste.rs/s/f7zq93/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/f7zq93/what_are_you_doing_this_weekend)
* [2026-02-20, 09:02:05](https://news.ycombinator.com/item?id=47085483) - [I tried building my startup entirely on European infrastructure](https://www.coinerella.com/made-in-eu-it-was-harder-than-i-thought/)
* [2026-02-20, 08:52:17](https://news.ycombinator.com/item?id=47085425) - [Untapped Way to Learn a Codebase: Build a Visualizer](https://jimmyhmiller.com/learn-codebase-visualizer)
* [2026-02-20, 08:48:05](https://news.ycombinator.com/item?id=47085387) - [Raspberry Pi Pico 2 at 873.5MHz with 3.05V Core Abuse](https://learn.pimoroni.com/article/overclocking-the-pico-2)
* [2026-02-20, 08:45:57](https://news.ycombinator.com/item?id=47085370) - [Web Components: The Framework-Free Renaissance](https://www.caimito.net/en/blog/2026/02/17/web-components-the-framework-free-renaissance.html)
* [2026-02-20, 08:43:40](https://lobste.rs/s/gkv4xd/internationalise_fediverse_2024) - [Internationalise The Fediverse (2024)](https://shkspr.mobi/blog/2024/02/internationalise-the-fediverse/)
* [2026-02-20, 08:25:00](https://soylentnews.org/article.pl?sid=26/02/19/1617210&amp;from=rss) - [Data Centres Consider Backing Uranium Projects, NexGen CEO Says](https://soylentnews.org/article.pl?sid=26/02/19/1617210&amp;from=rss)
* [2026-02-20, 07:00:00](https://science.slashdot.org/story/26/02/19/2353238/nasa-chief-classifies-starliner-flight-as-type-a-mishap-says-agency-made-mistakes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Chief Classifies Starliner Flight As &apos;Type A&apos; Mishap, Says Agency Made Mistakes](https://science.slashdot.org/story/26/02/19/2353238/nasa-chief-classifies-starliner-flight-as-type-a-mishap-says-agency-made-mistakes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-20, 05:51:58](https://lobste.rs/s/2mkkpo/ai_agent_published_hit_piece_on_me) - [An AI Agent Published a Hit Piece on Me – The Operator Came Forward](https://theshamblog.com/an-ai-agent-wrote-a-hit-piece-on-me-part-4/)
* [2026-02-20, 05:06:40](https://news.ycombinator.com/item?id=47084000) - [Reading the undocumented MEMS accelerometer on Apple Silicon MacBooks via iokit](https://github.com/olvvier/apple-silicon-accelerometer)
* [2026-02-20, 04:46:37](https://news.ycombinator.com/item?id=47083882) - [Fast KV Compaction via Attention Matching](https://arxiv.org/abs/2602.16284)
* [2026-02-20, 04:39:29](https://lobste.rs/s/jmxzcr/how_i_made_shooter_game_64_kb) - [How I made a shooter game in 64 KB](https://youtu.be/qht68vFaa1M)
* [2026-02-20, 04:15:58](https://news.ycombinator.com/item?id=47083648) - [Consistency diffusion language models: Up to 14x faster, no quality loss](https://www.together.ai/blog/consistency-diffusion-language-models)
* [2026-02-20, 04:10:37](https://lobste.rs/s/wk6rjh/claude_c_compiler_what_it_reveals_about) - [The Claude C Compiler: What It Reveals About the Future of Software](https://www.modular.com/blog/the-claude-c-compiler-what-it-reveals-about-the-future-of-software)
* [2026-02-20, 03:49:00](https://soylentnews.org/article.pl?sid=26/02/19/1610250&amp;from=rss) - [Password Managers Less Secure Than Promised](https://soylentnews.org/article.pl?sid=26/02/19/1610250&amp;from=rss)
* [2026-02-20, 03:36:56](https://lobste.rs/s/zddzgo/dillo_appreciation_post) - [The Dillo Appreciation Post](https://bobbyhiltz.com/posts/2026/02/dillo-appreciation/)
* [2026-02-20, 03:30:00](https://science.slashdot.org/story/26/02/19/2254229/newborn-chicks-connect-sounds-with-shapes-just-like-humans-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Newborn Chicks Connect Sounds With Shapes Just Like Humans, Study Finds](https://science.slashdot.org/story/26/02/19/2254229/newborn-chicks-connect-sounds-with-shapes-just-like-humans-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-20, 02:02:00](https://yro.slashdot.org/story/26/02/19/2247257/us-plans-online-portal-to-bypass-content-bans-in-europe-and-elsewhere?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Plans Online Portal To Bypass Content Bans In Europe and Elsewhere](https://yro.slashdot.org/story/26/02/19/2247257/us-plans-online-portal-to-bypass-content-bans-in-europe-and-elsewhere?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-20, 01:33:36](https://news.ycombinator.com/item?id=47082548) - [An ARM Homelab Server, or a Minisforum MS-R1 Review](https://sour.coffee/2026/02/20/an-arm-homelab-server-or-a-minisforum-ms-r1-review/)
* [2026-02-20, 01:25:00](https://hardware.slashdot.org/story/26/02/19/2219256/californias-new-bill-requires-doj-approved-3d-printers-that-report-on-themselves?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [California&apos;s New Bill Requires DOJ-Approved 3D Printers That Report on Themselves](https://hardware.slashdot.org/story/26/02/19/2219256/californias-new-bill-requires-doj-approved-3d-printers-that-report-on-themselves?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-20, 00:45:00](https://tech.slashdot.org/story/26/02/19/226258/google-announces-gemini-31-pro-for-complex-problem-solving?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Announces Gemini 3.1 Pro For &apos;Complex Problem-Solving&apos;](https://tech.slashdot.org/story/26/02/19/226258/google-announces-gemini-31-pro-for-complex-problem-solving?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-20, 00:05:09](https://lobste.rs/s/zzlxaa/lindenmayer_systems) - [Lindenmayer Systems](https://justinpombrio.net/2026/02/16/l-systems.html)
* [2026-02-20, 00:02:00](https://it.slashdot.org/story/26/02/19/223226/openclaw-security-fears-lead-meta-other-ai-firms-to-restrict-its-use?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenClaw Security Fears Lead Meta, Other AI Firms To Restrict Its Use](https://it.slashdot.org/story/26/02/19/223226/openclaw-security-fears-lead-meta-other-ai-firms-to-restrict-its-use?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-19, 23:20:00](https://developers.slashdot.org/story/26/02/19/2156234/minecraft-java-is-switching-from-opengl-to-vulkan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Minecraft Java Is Switching From OpenGL To Vulkan](https://developers.slashdot.org/story/26/02/19/2156234/minecraft-java-is-switching-from-opengl-to-vulkan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-19, 22:56:00](https://soylentnews.org/article.pl?sid=26/02/18/0737205&amp;from=rss) - [Streaming Service Crunchyroll Raises Prices Weeks After Killing its Free Tier](https://soylentnews.org/article.pl?sid=26/02/18/0737205&amp;from=rss)
* [2026-02-19, 22:40:00](https://it.slashdot.org/story/26/02/19/2151205/irs-loses-40-of-it-staff-80-of-tech-leaders-in-efficiency-shakeup?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [IRS Loses 40% of IT Staff, 80% of Tech Leaders In &apos;Efficiency&apos; Shakeup](https://it.slashdot.org/story/26/02/19/2151205/irs-loses-40-of-it-staff-80-of-tech-leaders-in-efficiency-shakeup?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-19, 22:11:50](https://lobste.rs/s/9zos31/every_app_you_ve_built_is_etl_pipeline_you) - [Every app you&apos;ve built is an ETL pipeline (you just didn&apos;t call it that)](https://www.inngest.com/blog/etl-via-inngest)
* [2026-02-19, 22:02:00](https://tech.slashdot.org/story/26/02/19/2145254/mark-zuckerberg-grilled-on-usage-goals-and-underage-users-at-california-trial?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mark Zuckerberg Grilled On Usage Goals and Underage Users At California Trial](https://tech.slashdot.org/story/26/02/19/2145254/mark-zuckerberg-grilled-on-usage-goals-and-underage-users-at-california-trial?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-19, 20:21:23](https://lobste.rs/s/df1p8i/resurrecting_why_s_dream) - [Resurrecting _why&apos;s Dream](https://schwadlabs.io/blog/resurrecting-whys-dream)
* [2026-02-19, 19:55:11](https://news.ycombinator.com/item?id=47078324) - [AI is not a coworker, it&apos;s an exoskeleton](https://www.kasava.dev/blog/ai-as-exoskeleton)
* [2026-02-19, 18:45:21](https://lobste.rs/s/fgkcxo/ai_makes_you_boring) - [AI makes you boring](https://www.marginalia.nu/log/a_132_ai_bores/)
* [2026-02-19, 18:10:00](https://soylentnews.org/article.pl?sid=26/02/18/0735220&amp;from=rss) - [Ring Cancels Flock Deal After Dystopian Super Bowl Ad Prompts Mass Outrage](https://soylentnews.org/article.pl?sid=26/02/18/0735220&amp;from=rss)
* [2026-02-19, 17:15:20](https://lobste.rs/s/q4ykw7/missing_semester_your_cs_education) - [The Missing Semester of Your CS Education](https://missing.csail.mit.edu/)
* [2026-02-19, 16:54:23](https://lobste.rs/s/jkvtew/choosing_language_based_on_its_syntax) - [Choosing a Language Based on its Syntax?](https://www.gingerbill.org/article/2026/02/19/choosing-a-language-based-on-syntax/)
* [2026-02-19, 16:13:36](https://lobste.rs/s/vrru3d/using_browser_s_canvas_for_data) - [Using the Browser’s &lt;canvas&gt; for Data Compression](https://jstrieb.github.io/posts/canvas-compress/)
* [2026-02-19, 15:54:14](https://news.ycombinator.com/item?id=47075124) - [Show HN: Micasa – track your house from the terminal](https://micasa.dev)
* [2026-02-19, 15:25:00](https://lobste.rs/s/rn4g9a/linux_cve_assignment_process) - [Linux CVE assignment process](http://www.kroah.com/log/blog/2026/02/16/linux-cve-assignment-process/)
* [2026-02-19, 15:19:57](https://news.ycombinator.com/item?id=47074735) - [Gemini 3.1 Pro](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/)
* [2026-02-19, 13:24:00](https://soylentnews.org/article.pl?sid=26/02/18/0145204&amp;from=rss) - [What in the World Is Going on in Our Public Schools?](https://soylentnews.org/article.pl?sid=26/02/18/0145204&amp;from=rss)
* [2026-02-19, 12:16:07](https://lobste.rs/s/bzqteq/paged_out_8) - [Paged Out! #8](https://pagedout.institute/download/PagedOut_008.pdf)
* [2026-02-19, 11:52:49](https://news.ycombinator.com/item?id=47072849) - [The Popper Principle](https://theamericanscholar.org/the-popper-principle/)
* [2026-02-19, 08:32:00](https://soylentnews.org/article.pl?sid=26/02/18/0143232&amp;from=rss) - [Western Digital Has No More HDD Capacity Left, as CEO Reveals Massive AI Deals](https://soylentnews.org/article.pl?sid=26/02/18/0143232&amp;from=rss)
* [2026-02-19, 03:55:00](https://soylentnews.org/article.pl?sid=26/02/18/0140215&amp;from=rss) - [Incredible Chinese Humanoid Robot Show on CCTV Chinese New Year TV Gala this Week](https://soylentnews.org/article.pl?sid=26/02/18/0140215&amp;from=rss)
* [2026-02-19, 01:09:04](https://lobste.rs/s/yyqxg6/how_openai_us_government_persona_built) - [how openai, the US government, and persona built an identity surveillance machine that files reports on you to the feds](https://vmfunc.re/blog/persona/)
* [2026-02-18, 23:08:00](https://soylentnews.org/article.pl?sid=26/02/17/1849228&amp;from=rss) - [How to Incentivize Problem Solving in Groups](https://soylentnews.org/article.pl?sid=26/02/17/1849228&amp;from=rss)
* [2026-02-18, 22:25:13](https://news.ycombinator.com/item?id=47067270) - [US plans online portal to bypass content bans in Europe and elsewhere](https://www.reuters.com/world/us-plans-online-portal-bypass-content-bans-europe-elsewhere-2026-02-18/)
* [2026-02-18, 20:30:22](https://news.ycombinator.com/item?id=47065972) - [Notes on Clarifying Man Pages](https://jvns.ca/blog/2026/02/18/man-pages/)
* [2026-02-18, 18:21:00](https://soylentnews.org/article.pl?sid=26/02/17/1842234&amp;from=rss) - [This Bonobo Just Did Something Scientists Thought Only Humans Could Do](https://soylentnews.org/article.pl?sid=26/02/17/1842234&amp;from=rss)
* [2026-02-18, 13:39:00](https://soylentnews.org/article.pl?sid=26/02/17/1321256&amp;from=rss) - [A Fluid Can Store Solar Energy and Then Release It as Heat Months Later](https://soylentnews.org/article.pl?sid=26/02/17/1321256&amp;from=rss)
* [2026-02-18, 08:57:00](https://soylentnews.org/article.pl?sid=26/02/17/1319222&amp;from=rss) - [New ClickFix Attack Abuses Nslookup to Retrieve PowerShell Payload Via DNS](https://soylentnews.org/article.pl?sid=26/02/17/1319222&amp;from=rss)
* [2026-02-18, 04:09:00](https://soylentnews.org/article.pl?sid=26/02/16/2249254&amp;from=rss) - [Instruction Decoding in the Intel 8087 Floating-Point Chip](https://soylentnews.org/article.pl?sid=26/02/16/2249254&amp;from=rss)
* [2026-02-17, 23:27:00](https://soylentnews.org/article.pl?sid=26/02/16/2248253&amp;from=rss) - [How the GNU C Compiler Became the Clippy of Cryptography](https://soylentnews.org/article.pl?sid=26/02/16/2248253&amp;from=rss)
* [2026-02-17, 18:46:00](https://soylentnews.org/article.pl?sid=26/02/16/2246259&amp;from=rss) - [Why We Sleep Poorly in New Environments: A Brain Circuit That Keeps Animals Awake](https://soylentnews.org/article.pl?sid=26/02/16/2246259&amp;from=rss)
* [2026-02-17, 13:57:00](https://soylentnews.org/article.pl?sid=26/02/15/2340202&amp;from=rss) - [AI Could Wipe Out Most White-Collar Jobs Within 12 Months, Microsoft AI Chief Warns](https://soylentnews.org/article.pl?sid=26/02/15/2340202&amp;from=rss)
* [2026-02-17, 12:57:38](https://news.ycombinator.com/item?id=47047010) - [FreeCAD](https://www.freecad.org/index.php)
* [2026-02-17, 09:11:00](https://soylentnews.org/article.pl?sid=26/02/15/2333213&amp;from=rss) - [\&quot;ICE Out of Our Faces Act\&quot; Would Ban ICE and CBP Use of Facial Recognition](https://soylentnews.org/article.pl?sid=26/02/15/2333213&amp;from=rss)
* [2026-02-17, 04:28:00](https://soylentnews.org/article.pl?sid=26/02/15/2326234&amp;from=rss) - [Self-Driving Cars, Drones Hijacked by Custom Road Signs](https://soylentnews.org/article.pl?sid=26/02/15/2326234&amp;from=rss)
* [2026-02-17, 03:23:16](https://news.ycombinator.com/item?id=47043345) - [Infrastructure decisions I endorse or regret after 4 years at a startup (2024)](https://cep.dev/posts/every-infrastructure-decision-i-endorse-or-regret-after-4-years-running-infrastructure-at-a-startup/)
* [2026-02-16, 23:43:00](https://soylentnews.org/article.pl?sid=26/02/14/0525257&amp;from=rss) - [Why Are Criminals Stealing Used Cooking Oil From Scotland&apos;s Chip Shops?](https://soylentnews.org/article.pl?sid=26/02/14/0525257&amp;from=rss)
* [2026-02-16, 18:58:00](https://soylentnews.org/article.pl?sid=26/02/14/0521202&amp;from=rss) - [John Carmack Proposes Fiber-Optic Loops as High-Speed AI Cache](https://soylentnews.org/article.pl?sid=26/02/14/0521202&amp;from=rss)
* [2026-02-16, 14:12:00](https://soylentnews.org/politics/article.pl?sid=26/02/14/0514214&amp;from=rss) - [Europe&apos;s $24 Trillion Breakup With Visa and Mastercard](https://soylentnews.org/politics/article.pl?sid=26/02/14/0514214&amp;from=rss)
* [2026-02-16, 09:31:00](https://soylentnews.org/article.pl?sid=26/02/14/0455240&amp;from=rss) - [Ubisoft Workers Strike in Protest of Job Cuts and Return-to-Office Mandate](https://soylentnews.org/article.pl?sid=26/02/14/0455240&amp;from=rss)
* [2026-02-16, 05:27:35](https://news.ycombinator.com/item?id=47031197) - [Defer available in gcc and clang](https://gustedt.wordpress.com/2026/02/15/defer-available-in-gcc-and-clang/)
* [2026-02-16, 04:45:00](https://soylentnews.org/article.pl?sid=26/02/14/0452212&amp;from=rss) - [Anthropic Launches New Model That Spots Zero Days](https://soylentnews.org/article.pl?sid=26/02/14/0452212&amp;from=rss)
* [2026-02-16, 02:58:55](https://news.ycombinator.com/item?id=47030387) - [The Rediscovery of 103 Hokusai Lost Sketches (2021)](https://japan-forward.com/eternal-hokusai-the-rediscovery-of-103-hokusai-lost-sketches/)
* [2026-02-16, 00:35:00](https://soylentnews.org/article.pl?sid=26/02/14/0517216&amp;from=rss) - [Astronomers Discover the Surprising Reason for a Star&apos;s Disappearance](https://soylentnews.org/article.pl?sid=26/02/14/0517216&amp;from=rss)
* [2026-02-16, 00:31:01](https://news.ycombinator.com/item?id=47029368) - [A beginner&apos;s guide to split keyboards](https://www.justinmklam.com/posts/2026/02/beginners-guide-split-keyboards/)
* [2026-02-16, 00:01:00](https://soylentnews.org/article.pl?sid=26/02/13/1649236&amp;from=rss) - [Happy Birthday SoylentNews - 12 Years Old!](https://soylentnews.org/article.pl?sid=26/02/13/1649236&amp;from=rss)
