# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Machine Learning

* [Microsoft Deletes Blog Telling Users To Train AI on Pirated Harry Potter Books](https://it.slashdot.org/story/26/02/20/1918241/microsoft-deletes-blog-telling-users-to-train-ai-on-pirated-harry-potter-books?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=47094192))

* [OpenAI Has No Moat, No Tech Edge, No Lock-in and No Real Plan, Analyst Warns](https://slashdot.org/story/26/02/20/1849221/openai-has-no-moat-no-tech-edge-no-lock-in-and-no-real-plan-analyst-warns?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=47093724))

* [Consistency diffusion language models: Up to 14x faster, no quality loss](https://www.together.ai/blog/consistency-diffusion-language-models) ([Comments](https://news.ycombinator.com/item?id=47083648))

* [Uncovering insiders and alpha on Polymarket with AI](https://twitter.com/peterjliu/status/2024901585806225723) ([Comments](https://news.ycombinator.com/item?id=47091557))

* [An AI Agent Published a Hit Piece on Me – The Operator Came Forward](https://theshamblog.com/an-ai-agent-wrote-a-hit-piece-on-me-part-4/) ([Comments](https://lobste.rs/s/2mkkpo/ai_agent_published_hit_piece_on_me))

## Cybersecurity and Vulnerabilities

* [PayPal Discloses Data Breach That Exposed User Info For 6 Months](https://slashdot.org/story/26/02/20/1733211/paypal-discloses-data-breach-that-exposed-user-info-for-6-months?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=47091419))

* [I found a Vulnerability. They found a Lawyer](https://dixken.de/blog/i-found-a-vulnerability-they-found-a-lawyer) ([Comments](https://lobste.rs/s/vpxzhe/i_found_vulnerability_they_found_lawyer))

* [Escaping Misconfigured VSCode Extensions (2023)](https://blog.trailofbits.com/2023/02/21/vscode-extension-escape-vulnerability/) ([Comments](https://news.ycombinator.com/item?id=47093604))

* [Email Blunder Exposes $90 Billion Russian Oil Smuggling Ring](https://it.slashdot.org/story/26/02/20/1559212/email-blunder-exposes-90-billion-russian-oil-smuggling-ring?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://slashdot.org/story/26/02/20/167244/hsbc-to-investors-if-india-couldnt-build-an-enterprise-software-challenger-neither-can-ai))

## Emerging Technologies

* [The Claude C Compiler: What It Reveals About the Future of Software](https://www.modular.com/blog/the-claude-c-compiler-what-it-reveals-about-the-future-of-software) ([Comments](https://lobste.rs/s/wk6rjh/claude_c_compiler_what_it_reveals_about))

* [How Streaming Became Cable TV&apos;s Unlikely Life Raft](https://tech.slashdot.org/story/26/02/20/1757211/how-streaming-became-cable-tvs-unlikely-life-raft?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://tech.slashdot.org/story/26/02/20/1815253/several-meta-employees-have-started-calling-themselves-ai-builders?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Testing Super Mario Using a Behavior Model Autonomously](https://testflows.com/blog/testing-super-mario-using-a-behavior-model-autonomously-part1/) ([Comments](https://news.ycombinator.com/item?id=47092348))

## Technology Impacts on Society

* [Amazon Service Was Taken Down By AI Coding Bot](https://it.slashdot.org/story/26/02/20/1252243/amazon-service-was-taken-down-by-ai-coding-bot?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://it.slashdot.org/story/26/02/20/1252243/amazon-service-was-taken-down-by-ai-coding-bot?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Child&apos;s Play: Tech&apos;s new generation and the end of thinking](https://harpers.org/archive/2026/03/childs-play-sam-kriss-ai-startup-roy-lee/) ([Comments](https://news.ycombinator.com/item?id=47088685))

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

* [2026-02-20, 21:25:41](https://news.ycombinator.com/item?id=47094192) - [Turn Dependabot Off](https://words.filippo.io/dependabot/)
* [2026-02-20, 21:22:27](https://news.ycombinator.com/item?id=47094149) - [Show HN: Mines.fyi – all the mines in the US in a leaflet visualization](https://mines.fyi/)
* [2026-02-20, 21:20:00](https://it.slashdot.org/story/26/02/20/1918241/microsoft-deletes-blog-telling-users-to-train-ai-on-pirated-harry-potter-books?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Deletes Blog Telling Users To Train AI on Pirated Harry Potter Books](https://it.slashdot.org/story/26/02/20/1918241/microsoft-deletes-blog-telling-users-to-train-ai-on-pirated-harry-potter-books?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-20, 20:47:48](https://news.ycombinator.com/item?id=47093724) - [OpenScan](https://openscan.eu/pages/scan-gallery)
* [2026-02-20, 20:44:00](https://slashdot.org/story/26/02/20/1849221/openai-has-no-moat-no-tech-edge-no-lock-in-and-no-real-plan-analyst-warns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Has No Moat, No Tech Edge, No Lock-in and No Real Plan, Analyst Warns](https://slashdot.org/story/26/02/20/1849221/openai-has-no-moat-no-tech-edge-no-lock-in-and-no-real-plan-analyst-warns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-20, 20:40:14](https://lobste.rs/s/vpxzhe/i_found_vulnerability_they_found_lawyer) - [I found a Vulnerability. They found a Lawyer](https://dixken.de/blog/i-found-a-vulnerability-they-found-a-lawyer)
* [2026-02-20, 20:39:06](https://news.ycombinator.com/item?id=47093604) - [Escaping Misconfigured VSCode Extensions (2023)](https://blog.trailofbits.com/2023/02/21/vscode-extension-escape-vulnerability/)
* [2026-02-20, 20:31:39](https://lobste.rs/s/gscaw3/turn_dependabot_off) - [Turn Dependabot Off](https://words.filippo.io/dependabot/)
* [2026-02-20, 20:05:00](https://tech.slashdot.org/story/26/02/20/1815253/several-meta-employees-have-started-calling-themselves-ai-builders?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Several Meta Employees Have Started Calling Themselves &apos;AI Builders&apos;](https://tech.slashdot.org/story/26/02/20/1815253/several-meta-employees-have-started-calling-themselves-ai-builders?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-20, 19:44:29](https://lobste.rs/s/t760l8/beginner_s_guide_split_keyboards) - [A Beginner’s Guide to Split Keyboards](https://justinmklam.com/posts/2026/02/beginners-guide-split-keyboards/)
* [2026-02-20, 19:34:26](https://lobste.rs/s/zkby7e/lil_fun_langs) - [Lil&apos; Fun Langs](https://taylor.town/scrapscript-000)
* [2026-02-20, 19:25:00](https://entertainment.slashdot.org/story/26/02/20/187222/amc-theatres-will-refuse-to-screen-ai-short-film-after-online-uproar?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AMC Theatres Will Refuse To Screen AI Short Film After Online Uproar](https://entertainment.slashdot.org/story/26/02/20/187222/amc-theatres-will-refuse-to-screen-ai-short-film-after-online-uproar?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-20, 19:19:58](https://news.ycombinator.com/item?id=47092578) - [I found a Vulnerability. They found a Lawyer](https://dixken.de/blog/i-found-a-vulnerability-they-found-a-lawyer)
* [2026-02-20, 19:18:35](https://lobste.rs/s/w1bsle/lobsters_interview_with_steveklabnik) - [Lobsters Interview with steveklabnik](https://alexalejandre.com/programming/steve-klabnik-interview/)
* [2026-02-20, 19:04:55](https://news.ycombinator.com/item?id=47092348) - [Testing Super Mario Using a Behavior Model Autonomously](https://testflows.com/blog/testing-super-mario-using-a-behavior-model-autonomously-part1/)
* [2026-02-20, 18:55:15](https://news.ycombinator.com/item?id=47092203) - [Every company building your AI assistant is now an ad company](https://juno-labs.com/blogs/every-company-building-your-ai-assistant-is-an-ad-company)
* [2026-02-20, 18:45:00](https://tech.slashdot.org/story/26/02/20/1757211/how-streaming-became-cable-tvs-unlikely-life-raft?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Streaming Became Cable TV&apos;s Unlikely Life Raft](https://tech.slashdot.org/story/26/02/20/1757211/how-streaming-became-cable-tvs-unlikely-life-raft?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-20, 18:42:21](https://news.ycombinator.com/item?id=47092006) - [Wikipedia deprecates Archive.today, starts removing archive links](https://arstechnica.com/tech-policy/2026/02/wikipedia-bans-archive-today-after-site-executed-ddos-and-altered-web-captures/)
* [2026-02-20, 18:25:07](https://news.ycombinator.com/item?id=47091748) - [Facebook is cooked](https://pilk.website/3/facebook-is-absolutely-cooked)
* [2026-02-20, 18:14:13](https://news.ycombinator.com/item?id=47091606) - [Blue light filters don&apos;t work – controlling total luminance is a better bet](https://www.neuroai.science/p/blue-light-filters-dont-work)
* [2026-02-20, 18:11:02](https://news.ycombinator.com/item?id=47091557) - [Uncovering insiders and alpha on Polymarket with AI](https://twitter.com/peterjliu/status/2024901585806225723)
* [2026-02-20, 18:03:19](https://news.ycombinator.com/item?id=47091469) - [Making frontier cybersecurity capabilities available to defenders](https://www.anthropic.com/news/claude-code-security)
* [2026-02-20, 18:00:00](https://slashdot.org/story/26/02/20/1733211/paypal-discloses-data-breach-that-exposed-user-info-for-6-months?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [PayPal Discloses Data Breach That Exposed User Info For 6 Months](https://slashdot.org/story/26/02/20/1733211/paypal-discloses-data-breach-that-exposed-user-info-for-6-months?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-20, 17:58:51](https://news.ycombinator.com/item?id=47091419) - [Keep Android Open](https://f-droid.org/2026/02/20/twif.html)
* [2026-02-20, 17:56:00](https://soylentnews.org/article.pl?sid=26/02/19/178226&amp;from=rss) - [OpenClaw Security Fears Lead Meta, Other AI Firms to Restrict its Use](https://soylentnews.org/article.pl?sid=26/02/19/178226&amp;from=rss)
* [2026-02-20, 17:34:12](https://news.ycombinator.com/item?id=47091071) - [Lil&apos; Fun Langs](https://taylor.town/scrapscript-000)
* [2026-02-20, 17:20:06](https://lobste.rs/s/i4u55k/finding_credentials_msi_files_with) - [finding credentials in .msi files with msiexec](https://ljb.fyi/your-msi-isnt-an-executable/)
* [2026-02-20, 17:20:00](https://it.slashdot.org/story/26/02/20/167244/hsbc-to-investors-if-india-couldnt-build-an-enterprise-software-challenger-neither-can-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [HSBC To Investors: If India Couldn&apos;t Build an Enterprise Software Challenger, Neither Can AI](https://it.slashdot.org/story/26/02/20/167244/hsbc-to-investors-if-india-couldnt-build-an-enterprise-software-challenger-neither-can-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-20, 17:02:15](https://news.ycombinator.com/item?id=47090610) - [Legion Health (YC) Is Hiring Cracked SWEs for Autonomous Mental Health](https://jobs.ashbyhq.com/legionhealth/ffdd2b52-eb21-489e-b124-3c0804231424)
* [2026-02-20, 16:58:16](https://lobste.rs/s/bi9wsi/death_scroll_fade) - [Death to Scroll Fade](https://dbushell.com/2026/01/09/death-to-scroll-fade/)
* [2026-02-20, 16:57:52](https://lobste.rs/s/wul2hi/brat_parallel_tap_testing_harness_for) - [Brat, a parallel TAP testing harness for the POSIX shell](https://codeberg.org/sstephenson/brat)
* [2026-02-20, 16:05:00](https://it.slashdot.org/story/26/02/20/1559212/email-blunder-exposes-90-billion-russian-oil-smuggling-ring?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Email Blunder Exposes $90 Billion Russian Oil Smuggling Ring](https://it.slashdot.org/story/26/02/20/1559212/email-blunder-exposes-90-billion-russian-oil-smuggling-ring?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-20, 15:52:15](https://lobste.rs/s/rxsphs/ipv6_adoption_2026) - [IPv6 Adoption in 2026](https://www.netmeister.org/blog/ipv6-adoption.html)
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
* [2026-02-20, 13:22:32](https://news.ycombinator.com/item?id=47087719) - [PayPal discloses data breach that exposed user info for 6 months](https://www.bleepingcomputer.com/news/security/paypal-discloses-data-breach-exposing-users-personal-information/)
* [2026-02-20, 13:13:00](https://soylentnews.org/article.pl?sid=26/02/19/1613238&amp;from=rss) - [Texas Sues Wi-Fi Router Maker Over Alleged China Links](https://soylentnews.org/article.pl?sid=26/02/19/1613238&amp;from=rss)
* [2026-02-20, 13:00:00](https://it.slashdot.org/story/26/02/20/003230/how-private-equity-debt-left-a-leading-vpn-open-to-chinese-hackers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Private Equity Debt Left a Leading VPN Open To Chinese Hackers](https://it.slashdot.org/story/26/02/20/003230/how-private-equity-debt-left-a-leading-vpn-open-to-chinese-hackers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-20, 12:09:18](https://lobste.rs/s/xe7vkq/django_orm_standalone_querying_existing) - [Django ORM Standalone⁽¹⁾: Querying an existing database](https://www.paulox.net/2026/02/20/django-orm-standalone-database-inspectdb-query/)
* [2026-02-20, 11:19:38](https://lobste.rs/s/ihsrgj/web_revival_internet_didn_t_die_you_re_just) - [A Web Revival: the Internet didn&apos;t die, you&apos;re just not on it](https://youtu.be/tkUgOT22F5s)
* [2026-02-20, 10:55:11](https://lobste.rs/s/ickplq/your_personal_blog_should_have_comments) - [Your Personal Blog Should Have Comments](https://medv.io/blog/your-personal-blog-should-have-comments)
* [2026-02-20, 10:32:52](https://news.ycombinator.com/item?id=47086181) - [The path to ubiquitous AI (17k tokens/sec)](https://taalas.com/the-path-to-ubiquitous-ai/)
* [2026-02-20, 10:00:00](https://tech.slashdot.org/story/26/02/19/231216/new-york-drops-plan-to-legalize-robotaxis-outside-nyc?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New York Drops Plan To Legalize Robotaxis Outside NYC](https://tech.slashdot.org/story/26/02/19/231216/new-york-drops-plan-to-legalize-robotaxis-outside-nyc?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-20, 09:23:49](https://lobste.rs/s/wejtbl/keep_android_open) - [Keep Android Open](https://keepandroidopen.org/)
* [2026-02-20, 09:15:36](https://lobste.rs/s/f7zq93/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/f7zq93/what_are_you_doing_this_weekend)
* [2026-02-20, 08:52:17](https://news.ycombinator.com/item?id=47085425) - [Untapped Way to Learn a Codebase: Build a Visualizer](https://jimmyhmiller.com/learn-codebase-visualizer)
* [2026-02-20, 08:48:05](https://news.ycombinator.com/item?id=47085387) - [Raspberry Pi Pico 2 at 873.5MHz with 3.05V Core Abuse](https://learn.pimoroni.com/article/overclocking-the-pico-2)
* [2026-02-20, 08:43:40](https://lobste.rs/s/gkv4xd/internationalise_fediverse_2024) - [Internationalise The Fediverse (2024)](https://shkspr.mobi/blog/2024/02/internationalise-the-fediverse/)
* [2026-02-20, 08:25:00](https://soylentnews.org/article.pl?sid=26/02/19/1617210&amp;from=rss) - [Data Centres Consider Backing Uranium Projects, NexGen CEO Says](https://soylentnews.org/article.pl?sid=26/02/19/1617210&amp;from=rss)
* [2026-02-20, 07:00:00](https://science.slashdot.org/story/26/02/19/2353238/nasa-chief-classifies-starliner-flight-as-type-a-mishap-says-agency-made-mistakes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Chief Classifies Starliner Flight As &apos;Type A&apos; Mishap, Says Agency Made Mistakes](https://science.slashdot.org/story/26/02/19/2353238/nasa-chief-classifies-starliner-flight-as-type-a-mishap-says-agency-made-mistakes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-20, 05:51:58](https://lobste.rs/s/2mkkpo/ai_agent_published_hit_piece_on_me) - [An AI Agent Published a Hit Piece on Me – The Operator Came Forward](https://theshamblog.com/an-ai-agent-wrote-a-hit-piece-on-me-part-4/)
* [2026-02-20, 04:15:58](https://news.ycombinator.com/item?id=47083648) - [Consistency diffusion language models: Up to 14x faster, no quality loss](https://www.together.ai/blog/consistency-diffusion-language-models)
* [2026-02-20, 04:10:37](https://lobste.rs/s/wk6rjh/claude_c_compiler_what_it_reveals_about) - [The Claude C Compiler: What It Reveals About the Future of Software](https://www.modular.com/blog/the-claude-c-compiler-what-it-reveals-about-the-future-of-software)
* [2026-02-20, 03:49:00](https://soylentnews.org/article.pl?sid=26/02/19/1610250&amp;from=rss) - [Password Managers Less Secure Than Promised](https://soylentnews.org/article.pl?sid=26/02/19/1610250&amp;from=rss)
* [2026-02-20, 03:36:56](https://lobste.rs/s/zddzgo/dillo_appreciation_post) - [The Dillo Appreciation Post](https://bobbyhiltz.com/posts/2026/02/dillo-appreciation/)
* [2026-02-20, 03:30:00](https://science.slashdot.org/story/26/02/19/2254229/newborn-chicks-connect-sounds-with-shapes-just-like-humans-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Newborn Chicks Connect Sounds With Shapes Just Like Humans, Study Finds](https://science.slashdot.org/story/26/02/19/2254229/newborn-chicks-connect-sounds-with-shapes-just-like-humans-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-20, 00:05:09](https://lobste.rs/s/zzlxaa/lindenmayer_systems) - [Lindenmayer Systems](https://justinpombrio.net/2026/02/16/l-systems.html)
* [2026-02-19, 22:56:00](https://soylentnews.org/article.pl?sid=26/02/18/0737205&amp;from=rss) - [Streaming Service Crunchyroll Raises Prices Weeks After Killing its Free Tier](https://soylentnews.org/article.pl?sid=26/02/18/0737205&amp;from=rss)
* [2026-02-19, 19:55:11](https://news.ycombinator.com/item?id=47078324) - [AI is not a coworker, it&apos;s an exoskeleton](https://www.kasava.dev/blog/ai-as-exoskeleton)
* [2026-02-19, 18:45:21](https://lobste.rs/s/fgkcxo/ai_makes_you_boring) - [AI makes you boring](https://www.marginalia.nu/log/a_132_ai_bores/)
* [2026-02-19, 18:10:00](https://soylentnews.org/article.pl?sid=26/02/18/0735220&amp;from=rss) - [Ring Cancels Flock Deal After Dystopian Super Bowl Ad Prompts Mass Outrage](https://soylentnews.org/article.pl?sid=26/02/18/0735220&amp;from=rss)
* [2026-02-19, 17:15:20](https://lobste.rs/s/q4ykw7/missing_semester_your_cs_education) - [The Missing Semester of Your CS Education](https://missing.csail.mit.edu/)
* [2026-02-19, 16:54:23](https://lobste.rs/s/jkvtew/choosing_language_based_on_its_syntax) - [Choosing a Language Based on its Syntax?](https://www.gingerbill.org/article/2026/02/19/choosing-a-language-based-on-syntax/)
* [2026-02-19, 13:24:00](https://soylentnews.org/article.pl?sid=26/02/18/0145204&amp;from=rss) - [What in the World Is Going on in Our Public Schools?](https://soylentnews.org/article.pl?sid=26/02/18/0145204&amp;from=rss)
* [2026-02-19, 11:52:49](https://news.ycombinator.com/item?id=47072849) - [The Popper Principle](https://theamericanscholar.org/the-popper-principle/)
* [2026-02-19, 08:32:00](https://soylentnews.org/article.pl?sid=26/02/18/0143232&amp;from=rss) - [Western Digital Has No More HDD Capacity Left, as CEO Reveals Massive AI Deals](https://soylentnews.org/article.pl?sid=26/02/18/0143232&amp;from=rss)
* [2026-02-19, 03:55:00](https://soylentnews.org/article.pl?sid=26/02/18/0140215&amp;from=rss) - [Incredible Chinese Humanoid Robot Show on CCTV Chinese New Year TV Gala this Week](https://soylentnews.org/article.pl?sid=26/02/18/0140215&amp;from=rss)
* [2026-02-18, 23:08:00](https://soylentnews.org/article.pl?sid=26/02/17/1849228&amp;from=rss) - [How to Incentivize Problem Solving in Groups](https://soylentnews.org/article.pl?sid=26/02/17/1849228&amp;from=rss)
* [2026-02-18, 18:21:00](https://soylentnews.org/article.pl?sid=26/02/17/1842234&amp;from=rss) - [This Bonobo Just Did Something Scientists Thought Only Humans Could Do](https://soylentnews.org/article.pl?sid=26/02/17/1842234&amp;from=rss)
* [2026-02-18, 13:39:00](https://soylentnews.org/article.pl?sid=26/02/17/1321256&amp;from=rss) - [A Fluid Can Store Solar Energy and Then Release It as Heat Months Later](https://soylentnews.org/article.pl?sid=26/02/17/1321256&amp;from=rss)
* [2026-02-18, 08:57:00](https://soylentnews.org/article.pl?sid=26/02/17/1319222&amp;from=rss) - [New ClickFix Attack Abuses Nslookup to Retrieve PowerShell Payload Via DNS](https://soylentnews.org/article.pl?sid=26/02/17/1319222&amp;from=rss)
* [2026-02-18, 04:09:00](https://soylentnews.org/article.pl?sid=26/02/16/2249254&amp;from=rss) - [Instruction Decoding in the Intel 8087 Floating-Point Chip](https://soylentnews.org/article.pl?sid=26/02/16/2249254&amp;from=rss)
* [2026-02-17, 23:27:00](https://soylentnews.org/article.pl?sid=26/02/16/2248253&amp;from=rss) - [How the GNU C Compiler Became the Clippy of Cryptography](https://soylentnews.org/article.pl?sid=26/02/16/2248253&amp;from=rss)
* [2026-02-17, 18:46:00](https://soylentnews.org/article.pl?sid=26/02/16/2246259&amp;from=rss) - [Why We Sleep Poorly in New Environments: A Brain Circuit That Keeps Animals Awake](https://soylentnews.org/article.pl?sid=26/02/16/2246259&amp;from=rss)
* [2026-02-17, 13:57:00](https://soylentnews.org/article.pl?sid=26/02/15/2340202&amp;from=rss) - [AI Could Wipe Out Most White-Collar Jobs Within 12 Months, Microsoft AI Chief Warns](https://soylentnews.org/article.pl?sid=26/02/15/2340202&amp;from=rss)
* [2026-02-17, 09:11:00](https://soylentnews.org/article.pl?sid=26/02/15/2333213&amp;from=rss) - [\&quot;ICE Out of Our Faces Act\&quot; Would Ban ICE and CBP Use of Facial Recognition](https://soylentnews.org/article.pl?sid=26/02/15/2333213&amp;from=rss)
* [2026-02-17, 07:34:57](https://news.ycombinator.com/item?id=47044700) - [How to Review an AUR Package](https://bertptrs.nl/2026/01/30/how-to-review-an-aur-package.html)
* [2026-02-17, 04:28:00](https://soylentnews.org/article.pl?sid=26/02/15/2326234&amp;from=rss) - [Self-Driving Cars, Drones Hijacked by Custom Road Signs](https://soylentnews.org/article.pl?sid=26/02/15/2326234&amp;from=rss)
* [2026-02-17, 03:23:16](https://news.ycombinator.com/item?id=47043345) - [Infrastructure decisions I endorse or regret after 4 years at a startup (2024)](https://cep.dev/posts/every-infrastructure-decision-i-endorse-or-regret-after-4-years-running-infrastructure-at-a-startup/)
* [2026-02-16, 23:43:00](https://soylentnews.org/article.pl?sid=26/02/14/0525257&amp;from=rss) - [Why Are Criminals Stealing Used Cooking Oil From Scotland&apos;s Chip Shops?](https://soylentnews.org/article.pl?sid=26/02/14/0525257&amp;from=rss)
* [2026-02-16, 18:58:00](https://soylentnews.org/article.pl?sid=26/02/14/0521202&amp;from=rss) - [John Carmack Proposes Fiber-Optic Loops as High-Speed AI Cache](https://soylentnews.org/article.pl?sid=26/02/14/0521202&amp;from=rss)
* [2026-02-16, 16:01:55](https://news.ycombinator.com/item?id=47036680) - [The Essential Economics of Nigeria&apos;s Okrika Industry (2023)](https://rpublc.com/august-september-2023/nigerias-okrika-industry/)
* [2026-02-16, 14:12:00](https://soylentnews.org/politics/article.pl?sid=26/02/14/0514214&amp;from=rss) - [Europe&apos;s $24 Trillion Breakup With Visa and Mastercard](https://soylentnews.org/politics/article.pl?sid=26/02/14/0514214&amp;from=rss)
* [2026-02-16, 09:31:00](https://soylentnews.org/article.pl?sid=26/02/14/0455240&amp;from=rss) - [Ubisoft Workers Strike in Protest of Job Cuts and Return-to-Office Mandate](https://soylentnews.org/article.pl?sid=26/02/14/0455240&amp;from=rss)
* [2026-02-16, 04:45:00](https://soylentnews.org/article.pl?sid=26/02/14/0452212&amp;from=rss) - [Anthropic Launches New Model That Spots Zero Days](https://soylentnews.org/article.pl?sid=26/02/14/0452212&amp;from=rss)
* [2026-02-16, 00:35:00](https://soylentnews.org/article.pl?sid=26/02/14/0517216&amp;from=rss) - [Astronomers Discover the Surprising Reason for a Star&apos;s Disappearance](https://soylentnews.org/article.pl?sid=26/02/14/0517216&amp;from=rss)
* [2026-02-16, 00:01:00](https://soylentnews.org/article.pl?sid=26/02/13/1649236&amp;from=rss) - [Happy Birthday SoylentNews - 12 Years Old!](https://soylentnews.org/article.pl?sid=26/02/13/1649236&amp;from=rss)
