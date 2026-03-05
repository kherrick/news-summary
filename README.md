# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Nvidia PersonaPlex 7B on Apple Silicon: Full-Duplex Speech-to-Speech in Swift](https://blog.ivan.digital/nvidia-personaplex-7b-on-apple-silicon-full-duplex-speech-to-speech-in-native-swift-with-mlx-0aa5276f2e23) ([comments](https://news.ycombinator.com/item?id=47258801))

* [A Nuclear Reactor Backed By Bill Gates Gets Federal Approval To Start Building](https://hardware.slashdot.org/story/26/03/04/2324220/a-nuclear-reactor-backed-by-bill-gates-gets-federal-approval-to-start-building?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=47257352))

* [BMW Group to deploy humanoid robots in production in Germany for the first time](https://www.press.bmwgroup.com/global/article/detail/T0455864EN/bmw-group-to-deploy-humanoid-robots-in-production-in-germany-for-the-first-time?language=en) ([comments](https://news.ycombinator.com/item?id=47253892))

* [Claude’s Cycles](https://www-cs-faculty.stanford.edu/~knuth/papers/claude-cycles.pdf) ([comments](https://lobste.rs/s/teexox/claude_s_cycles))

## Artificial Intelligence

* [The L in "LLM" Stands for Lying](https://acko.net/blog/the-l-in-llm-stands-for-lying/) ([comments](https://news.ycombinator.com/item?id=47257394))

* [Vision for Rust: A Grand Vision for Language Development](https://blog.yoshuawuyts.com/a-grand-vision-for-rust/) ([comments](https://lobste.rs/s/xhoyg7/grand_vision_for_rust))

* [your ai slop bores me](https://www.youraislopbores.me/) ([comments](https://lobste.rs/s/ma7lsz/your_ai_slop_bores_me))

* [Picking Up a Zillion Pieces of Litter](https://www.sixstepstobetterhealth.com/litter.html) ([comments](https://news.ycombinator.com/item?id=47212451))

## Privacy and Legal Concerns

* [Father Sues Google, Claiming Gemini Chatbot Drove Son Into Fatal Delusion](https://yro.slashdot.org/story/26/03/04/1937236/father-sues-google-claiming-gemini-chatbot-drove-son-into-fatal-delusion?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=47257394))

* [US Cybersecurity Adds Exploited VMware Aria Operations To KEV Catalog](https://it.slashdot.org/story/26/03/04/2314224/us-cybersecurity-adds-exploited-vmware-aria-operations-to-kev-catalog?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=47258885))

* [No right to relicense this project](https://github.com/chardet/chardet/issues/327) ([comments](https://news.ycombinator.com/item?id=47259177))

* [Satellites Found a 'Brown Ribbon' Near Africa – Now Scientists Are Sounding Alarms](https://soylentnews.org/article.pl?sid=26/03/02/2018219&from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/03/02/2018219&from=rss))

## Cultural and Social Developments

* [Dulce et Decorum Est (1921)](https://www.poetryfoundation.org/poems/46560/dulce-et-decorum-est) ([comments](https://news.ycombinator.com/item?id=47254322))

* [Medical Journal the Lancet Blasts RFK Jr.’s Health Work as a Failure](https://soylentnews.org/article.pl?sid=26/03/04/077205&from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/03/04/077205&from=rss))

* [Hail Protection Using Solar Panels](https://soylentnews.org/article.pl?sid=26/03/01/0744215&from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/03/01/0744215&from=rss))

* [Anonymous Credentials: an Illustrated Primer](https://soylentnews.org/article.pl?sid=26/03/04/1535231&from=rss) ([comments](https://lobste.rs/s/ma7lsz/your_ai_slop_bores_me))

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

* [2026-03-05, 08:55:06](https://news.ycombinator.com/item?id=47259303) - [Noem Can&apos;t Explain Why She Hired 8-Day-Old Company for Ad Campaign](https://newrepublic.com/post/207381/kristi-noem-explain-company-ad-campaign)
* [2026-03-05, 08:37:51](https://news.ycombinator.com/item?id=47259177) - [No right to relicense this project](https://github.com/chardet/chardet/issues/327)
* [2026-03-05, 07:57:25](https://news.ycombinator.com/item?id=47258885) - [Smalltalk&apos;s Browser: Unbeatable, yet Not Enough](https://blog.lorenzano.eu/smalltalks-browser-unbeatable-yet-not-enough/)
* [2026-03-05, 07:44:33](https://news.ycombinator.com/item?id=47258809) - [Poor Man&apos;s Polaroid](https://boxart.lt/blog/poor_mans_polaroid)
* [2026-03-05, 07:43:41](https://news.ycombinator.com/item?id=47258801) - [Nvidia PersonaPlex 7B on Apple Silicon: Full-Duplex Speech-to-Speech in Swift](https://blog.ivan.digital/nvidia-personaplex-7b-on-apple-silicon-full-duplex-speech-to-speech-in-native-swift-with-mlx-0aa5276f2e23)
* [2026-03-05, 07:23:40](https://news.ycombinator.com/item?id=47258641) - [Jails for NetBSD – Kernel Enforced Isolation and Native Resource Control](https://netbsd-jails.petermann-digital.de/)
* [2026-03-05, 07:00:00](https://it.slashdot.org/story/26/03/04/2314224/us-cybersecurity-adds-exploited-vmware-aria-operations-to-kev-catalog?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Cybersecurity Adds Exploited VMware Aria Operations To KEV Catalog](https://it.slashdot.org/story/26/03/04/2314224/us-cybersecurity-adds-exploited-vmware-aria-operations-to-kev-catalog?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-05, 06:59:30](https://news.ycombinator.com/item?id=47258455) - [The Self-Help Trap: What 20 Years of \&quot;Optimizing\&quot; Has Taught Me](https://tim.blog/2026/03/04/the-self-help-trap/)
* [2026-03-05, 06:11:00](https://soylentnews.org/article.pl?sid=26/03/05/0523208&amp;from=rss) - [No Fooling: NASA Targets April 1 for Artemis II Launch to the Moon](https://soylentnews.org/article.pl?sid=26/03/05/0523208&amp;from=rss)
* [2026-03-05, 06:01:18](https://news.ycombinator.com/item?id=47258076) - [Relax NG is a schema language for XML (2014)](https://relaxng.org/)
* [2026-03-05, 05:07:33](https://news.ycombinator.com/item?id=47257803) - [Relicensing with AI-Assisted Rewrite](https://tuananh.net/2026/03/05/relicensing-with-ai-assisted-rewrite/)
* [2026-03-05, 05:07:03](https://lobste.rs/s/jr3zym/relicensing_with_ai_assisted_rewrite) - [Relicensing with AI-assisted rewrite](https://tuananh.net/2026/03/05/relicensing-with-ai-assisted-rewrite/)
* [2026-03-05, 04:37:43](https://news.ycombinator.com/item?id=47257637) - [You Just Reveived](https://dylan.gr/1772520728)
* [2026-03-05, 04:24:28](https://lobste.rs/s/ma7lsz/your_ai_slop_bores_me) - [your ai slop bores me](https://www.youraislopbores.me/)
* [2026-03-05, 04:02:32](https://news.ycombinator.com/item?id=47257394) - [The L in \&quot;LLM\&quot; Stands for Lying](https://acko.net/blog/the-l-in-llm-stands-for-lying/)
* [2026-03-05, 03:56:38](https://news.ycombinator.com/item?id=47257352) - [Show HN: Poppy – A simple app to stay intentional with relationships](https://poppy-connection-keeper.netlify.app/)
* [2026-03-05, 03:00:00](https://hardware.slashdot.org/story/26/03/04/2324220/a-nuclear-reactor-backed-by-bill-gates-gets-federal-approval-to-start-building?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Nuclear Reactor Backed By Bill Gates Gets Federal Approval To Start Building](https://hardware.slashdot.org/story/26/03/04/2324220/a-nuclear-reactor-backed-by-bill-gates-gets-federal-approval-to-start-building?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-05, 02:55:57](https://news.ycombinator.com/item?id=47256923) - [What Python’s asyncio primitives get wrong about shared state](https://www.inngest.com/blog/no-lost-updates-python-asyncio)
* [2026-03-05, 02:00:07](https://news.ycombinator.com/item?id=47256545) - [US tech firms pledge at White House to bear costs of energy for datacenters](https://www.theguardian.com/us-news/2026/mar/04/us-tech-companies-energy-cost-pledge-white-house)
* [2026-03-05, 01:57:21](https://lobste.rs/s/kjb4gb/just_use_postgres) - [Just Use Postgres](http://amattn.com/p/just_use_postgres.html)
* [2026-03-05, 01:50:51](https://news.ycombinator.com/item?id=47256478) - [Chaos and Dystopian news for the dead internet survivors](https://www.fubardaily.com)
* [2026-03-05, 01:00:31](https://lobste.rs/s/xhoyg7/grand_vision_for_rust) - [A grand vision for Rust](https://blog.yoshuawuyts.com/a-grand-vision-for-rust/)
* [2026-03-05, 01:00:00](https://yro.slashdot.org/story/26/03/04/1937236/father-sues-google-claiming-gemini-chatbot-drove-son-into-fatal-delusion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Father Sues Google, Claiming Gemini Chatbot Drove Son Into Fatal Delusion](https://yro.slashdot.org/story/26/03/04/1937236/father-sues-google-claiming-gemini-chatbot-drove-son-into-fatal-delusion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-05, 00:23:00](https://soylentnews.org/article.pl?sid=26/03/04/1535231&amp;from=rss) - [Anonymous Credentials: an Illustrated Primer](https://soylentnews.org/article.pl?sid=26/03/04/1535231&amp;from=rss)
* [2026-03-05, 00:22:09](https://news.ycombinator.com/item?id=47255881) - [Google Workspace CLI](https://github.com/googleworkspace/cli)
* [2026-03-04, 23:51:10](https://news.ycombinator.com/item?id=47255662) - [Dario Amodei calls OpenAI’s messaging around military deal ‘straight up lies’](https://techcrunch.com/2026/03/04/anthropic-ceo-dario-amodei-calls-openais-messaging-around-military-deal-straight-up-lies-report-says/)
* [2026-03-04, 23:44:42](https://lobste.rs/s/3vnl2v/google_epic_announce_settlement_end_app) - [Google and Epic announce settlement to end app store antitrust case](https://arstechnica.com/gadgets/2026/03/google-and-epic-look-to-bury-the-hatchet-with-new-app-store-settlement/)
* [2026-03-04, 23:28:48](https://lobste.rs/s/1rh6f3/introducing_wgsl_rs) - [Introducing wgsl-rs](https://renderling.xyz/articles/introducing-wgsl-rs.html)
* [2026-03-04, 23:10:13](https://lobste.rs/s/dghhq8/you_bought_zuck_s_ray_bans_now_someone) - [You Bought Zuck’s Ray-Bans. Now Someone in Nairobi Is Watching You Poop](https://blog.adafruit.com/2026/03/04/you-bought-zucks-ray-bans-now-someone-in-nairobi-is-watching-you-poop/)
* [2026-03-04, 23:00:00](https://developers.slashdot.org/story/26/03/04/2218226/google-ends-its-30-app-store-fee-welcomes-third-party-app-stores?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Ends Its 30% App Store Fee, Welcomes Third-Party App Stores](https://developers.slashdot.org/story/26/03/04/2218226/google-ends-its-30-app-store-fee-welcomes-third-party-app-stores?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-04, 22:00:00](https://games.slashdot.org/story/26/03/04/1929211/sony-pulls-back-from-playstation-games-on-pc?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sony Pulls Back From PlayStation Games on PC](https://games.slashdot.org/story/26/03/04/1929211/sony-pulls-back-from-playstation-games-on-pc?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-04, 21:56:20](https://news.ycombinator.com/item?id=47254516) - [NRC issues first commercial reactor construction approval in 10 years [pdf]](https://www.nrc.gov/sites/default/files/cdn/doc-collection-news/2026/26-028.pdf)
* [2026-03-04, 21:41:40](https://news.ycombinator.com/item?id=47254322) - [Dulce et Decorum Est (1921)](https://www.poetryfoundation.org/poems/46560/dulce-et-decorum-est)
* [2026-03-04, 21:11:15](https://news.ycombinator.com/item?id=47253892) - [BMW Group to deploy humanoid robots in production in Germany for the first time](https://www.press.bmwgroup.com/global/article/detail/T0455864EN/bmw-group-to-deploy-humanoid-robots-in-production-in-germany-for-the-first-time?language=en)
* [2026-03-04, 21:00:00](https://tech.slashdot.org/story/26/03/04/197220/computer-scientists-caution-against-internet-age-verification-mandates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Computer Scientists Caution Against Internet Age-Verification Mandates](https://tech.slashdot.org/story/26/03/04/197220/computer-scientists-caution-against-internet-age-verification-mandates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-04, 20:16:03](https://news.ycombinator.com/item?id=47253177) - [Building a new Flash](https://bill.newgrounds.com/news/post/1607118)
* [2026-03-04, 20:00:00](https://tech.slashdot.org/story/26/03/04/1856240/vehicle-tire-pressure-sensors-enable-silent-tracking?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Vehicle Tire Pressure Sensors Enable Silent Tracking](https://tech.slashdot.org/story/26/03/04/1856240/vehicle-tire-pressure-sensors-enable-silent-tracking?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-04, 19:50:44](https://lobste.rs/s/qh6y97/who_writes_bugs_deeper_look_at_125_000) - [Who Writes the Bugs? A Deeper Look at 125,000 Kernel Vulnerabilities](https://pebblebed.com/blog/kernel-bugs-part2)
* [2026-03-04, 19:49:16](https://lobste.rs/s/dmdttx/jj_v0_39_0_released) - [jj v0.39.0 released](https://github.com/jj-vcs/jj/releases/tag/v0.39.0)
* [2026-03-04, 19:48:05](https://lobste.rs/s/bxbytk/accepting_user_supplied_code_is_mostly) - [Accepting user-supplied code is mostly fine](https://dimden.dev/blog/?id=15-webtiles-its-fine-to-accept-user-supplied-code-actually)
* [2026-03-04, 19:39:00](https://soylentnews.org/article.pl?sid=26/03/04/1320238&amp;from=rss) - [Small Web, IndieWeb, Gemini… a Guide to the Retro-Web](https://soylentnews.org/article.pl?sid=26/03/04/1320238&amp;from=rss)
* [2026-03-04, 19:00:00](https://tech.slashdot.org/story/26/03/04/1844224/emails-to-outlookcom-rejected-by-faulty-or-overzealous-blocking-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Emails To Outlook.com Rejected By Faulty Or Overzealous Blocking Rules](https://tech.slashdot.org/story/26/03/04/1844224/emails-to-outlookcom-rejected-by-faulty-or-overzealous-blocking-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-04, 18:57:07](https://lobste.rs/s/ii2iaw/singlefile_web_extension_for_saving) - [SingleFile: Web Extension for saving a faithful copy of a complete web page in a single HTML file](https://github.com/gildas-lormeau/SingleFile)
* [2026-03-04, 18:26:47](https://lobste.rs/s/lw8rsa/pocket_id_easy_passkey_authentication) - [Pocket ID: Easy Passkey Authentication](https://runtimeterror.dev/pocket-id-easy-passkey-authentication/)
* [2026-03-04, 18:00:35](https://lobste.rs/s/dzcrf7/faster_c_software_with_dynamic_feature) - [Faster C software with Dynamic Feature Detection](https://gist.github.com/jjl/d998164191af59a594500687a679b98d)
* [2026-03-04, 18:00:00](https://tech.slashdot.org/story/26/03/04/1638248/tiktok-says-end-to-end-encryption-makes-users-less-safe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [TikTok Says End-To-End Encryption Makes Users Less Safe](https://tech.slashdot.org/story/26/03/04/1638248/tiktok-says-end-to-end-encryption-makes-users-less-safe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-04, 17:00:00](https://hardware.slashdot.org/story/26/03/04/1624211/apple-announces-low-cost-macbook-neo-with-a18-pro-chip?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Announces Low-Cost &apos;MacBook Neo&apos; With A18 Pro Chip](https://hardware.slashdot.org/story/26/03/04/1624211/apple-announces-low-cost-macbook-neo-with-a18-pro-chip?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-04, 16:48:36](https://lobste.rs/s/nbsppn/au_revoir_eleventy) - [Au revoir, Eleventy](https://hamatti.org/posts/au-revoir-eleventy/)
* [2026-03-04, 16:38:36](https://lobste.rs/s/dzh1vd/advanced_terraform_performance) - [Advanced Terraform performance optimization](https://www.bejarano.io/terraform-performance/)
* [2026-03-04, 16:34:33](https://lobste.rs/s/3df9bm/smalltalk_s_browser_unbeatable_yet_not) - [Smalltalk’s Browser: Unbeatable, Yet Not Enough](https://blog.lorenzano.eu/smalltalks-browser-unbeatable-yet-not-enough/)
* [2026-03-04, 16:20:36](https://news.ycombinator.com/item?id=47249744) - [Humans 40k yrs ago developed a system of conventional signs](https://www.pnas.org/doi/10.1073/pnas.2520385123)
* [2026-03-04, 16:08:39](https://lobste.rs/s/brkdxd/what_alternatives_exist_for_anonymous) - [What alternatives exist for Anonymous Github?](https://lobste.rs/s/brkdxd/what_alternatives_exist_for_anonymous)
* [2026-03-04, 16:00:00](https://hardware.slashdot.org/story/26/03/04/0048212/intels-make-or-break-18a-process-node-debuts-for-data-center-with-288-core-xeon-6-cpu?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel&apos;s Make-Or-Break 18A Process Node Debuts For Data Center With 288-Core Xeon 6+ CPU](https://hardware.slashdot.org/story/26/03/04/0048212/intels-make-or-break-18a-process-node-debuts-for-data-center-with-288-core-xeon-6-cpu?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-04, 15:55:34](https://news.ycombinator.com/item?id=47249343) - [Something is afoot in the land of Qwen](https://simonwillison.net/2026/Mar/4/qwen/)
* [2026-03-04, 15:00:00](https://yro.slashdot.org/story/26/03/03/2343215/new-app-alerts-you-if-someone-nearby-is-wearing-smart-glasses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New App Alerts You If Someone Nearby Is Wearing Smart Glasses](https://yro.slashdot.org/story/26/03/03/2343215/new-app-alerts-you-if-someone-nearby-is-wearing-smart-glasses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-04, 14:53:00](https://soylentnews.org/article.pl?sid=26/03/04/1318201&amp;from=rss) - [LLMs Can Unmask Pseudonymous Users at Scale With Surprising Accuracy](https://soylentnews.org/article.pl?sid=26/03/04/1318201&amp;from=rss)
* [2026-03-04, 14:25:15](https://lobste.rs/s/46iep3/re_how_we_built_world_s_fastest_regex) - [RE#: how we built the world&apos;s fastest regex engine in F#](https://iev.ee/blog/resharp-how-we-built-the-fastest-regex-in-fsharp/)
* [2026-03-04, 14:16:41](https://news.ycombinator.com/item?id=47247645) - [MacBook Neo](https://www.apple.com/newsroom/2026/03/say-hello-to-macbook-neo/)
* [2026-03-04, 14:00:00](https://tech.slashdot.org/story/26/03/04/0033216/qualcomm-ceo-resistance-is-futile-as-6g-mobile-revolution-approaches?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Qualcomm CEO: &apos;Resistance Is Futile&apos; As 6G Mobile Revolution Approaches](https://tech.slashdot.org/story/26/03/04/0033216/qualcomm-ceo-resistance-is-futile-as-6g-mobile-revolution-approaches?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-04, 13:00:00](https://slashdot.org/story/26/03/04/0017232/chatgpt-gets-gpt-53-instant-update-with-less-cringe-fewer-hallucinations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ChatGPT Gets GPT-5.3 Instant Update With Less &apos;Cringe,&apos; Fewer Hallucinations](https://slashdot.org/story/26/03/04/0017232/chatgpt-gets-gpt-53-instant-update-with-less-cringe-fewer-hallucinations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-04, 11:11:02](https://lobste.rs/s/dc3ysd/package_managers_need_cool_down) - [Package Managers Need to Cool Down](https://nesbitt.io/2026/03/04/package-managers-need-to-cool-down.html)
* [2026-03-04, 10:21:13](https://news.ycombinator.com/item?id=47245491) - [Moss is a pixel canvas where every brush is a tiny program](https://www.moss.town/)
* [2026-03-04, 10:07:00](https://soylentnews.org/article.pl?sid=26/03/04/077205&amp;from=rss) - [Medical Journal the Lancet Blasts RFK Jr.’s Health Work as a Failure](https://soylentnews.org/article.pl?sid=26/03/04/077205&amp;from=rss)
* [2026-03-04, 10:00:00](https://entertainment.slashdot.org/story/26/03/04/0013218/game-of-thrones-movie-in-the-works?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Game of Thrones&apos; Movie In the Works](https://entertainment.slashdot.org/story/26/03/04/0013218/game-of-thrones-movie-in-the-works?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-04, 08:54:08](https://lobste.rs/s/2ng9uk/rtl_wtf_read_web_like_right_left_readers_do) - [RTL: WTF: Read the web like Right-to-Left readers do](https://rtl.wtf/)
* [2026-03-04, 05:22:00](https://soylentnews.org/article.pl?sid=26/03/03/029259&amp;from=rss) - [&apos;Cancel ChatGPT&apos;: AI Boycott Surges After OpenAI-Pentagon Military Deal](https://soylentnews.org/article.pl?sid=26/03/03/029259&amp;from=rss)
* [2026-03-04, 03:49:04](https://lobste.rs/s/isuqoa/never_snooze_future) - [Never snooze a future](https://jacko.io/snooze.html)
* [2026-03-04, 03:32:02](https://lobste.rs/s/hz6vhv/california_s_digital_age_assurance_act) - [California&apos;s Digital Age Assurance Act, and FOSS](https://runxiyu.org/comp/ab1043/)
* [2026-03-04, 00:30:00](https://soylentnews.org/article.pl?sid=26/03/03/021249&amp;from=rss) - [Entry-Level PC Market To ‘Disappear’ By 2028 — Rising Memory Prices Pile More Strain On Consumer PC ](https://soylentnews.org/article.pl?sid=26/03/03/021249&amp;from=rss)
* [2026-03-03, 20:58:01](https://lobste.rs/s/teexox/claude_s_cycles) - [Claude&apos;s Cycles](https://www-cs-faculty.stanford.edu/~knuth/papers/claude-cycles.pdf)
* [2026-03-03, 19:54:00](https://soylentnews.org/article.pl?sid=26/03/02/2022221&amp;from=rss) - [Across Cultures, People Combine Reference Frames to Orient Themselves](https://soylentnews.org/article.pl?sid=26/03/02/2022221&amp;from=rss)
* [2026-03-03, 19:33:30](https://lobste.rs/s/tznewb/nobody_gets_promoted_for_simplicity) - [Nobody Gets Promoted for Simplicity](https://terriblesoftware.org/2026/03/03/nobody-gets-promoted-for-simplicity/)
* [2026-03-03, 16:08:22](https://lobste.rs/s/r8kjli/claude_is_electron_app_because_we_ve_lost) - [Claude is an Electron App because we’ve lost native](https://tonsky.me/blog/fall-of-native/)
* [2026-03-03, 15:13:00](https://soylentnews.org/article.pl?sid=26/03/02/2020204&amp;from=rss) - [Pathways to a Fair Technological Future](https://soylentnews.org/article.pl?sid=26/03/02/2020204&amp;from=rss)
* [2026-03-03, 10:28:00](https://soylentnews.org/article.pl?sid=26/03/02/2018219&amp;from=rss) - [Satellites Found a &apos;Brown Ribbon&apos; Near Africa – Now Scientists Are Sounding Alarms](https://soylentnews.org/article.pl?sid=26/03/02/2018219&amp;from=rss)
* [2026-03-03, 05:43:00](https://soylentnews.org/article.pl?sid=26/03/02/2014218&amp;from=rss) - [Datacenters in Space Are a Terrible, Horrible, No Good Idea.](https://soylentnews.org/article.pl?sid=26/03/02/2014218&amp;from=rss)
* [2026-03-03, 02:49:22](https://news.ycombinator.com/item?id=47227340) - [Arabic document from 17th-cent. rubbish heap confirms semi-legendary Nubian king](https://phys.org/news/2026-02-arabic-document-17th-century-rubbish.html)
* [2026-03-03, 00:58:00](https://soylentnews.org/article.pl?sid=26/03/02/1659243&amp;from=rss) - [Cleaner Ship Fuel is Reducing Lightning in Key Shipping Lanes](https://soylentnews.org/article.pl?sid=26/03/02/1659243&amp;from=rss)
* [2026-03-02, 20:12:00](https://soylentnews.org/article.pl?sid=26/03/01/0744215&amp;from=rss) - [Hail Protection Using Solar Panels](https://soylentnews.org/article.pl?sid=26/03/01/0744215&amp;from=rss)
* [2026-03-02, 15:23:00](https://soylentnews.org/article.pl?sid=26/03/01/0737210&amp;from=rss) - [Whoops: US Military Laser Strike Takes Down CBP Drone Near Mexican Border](https://soylentnews.org/article.pl?sid=26/03/01/0737210&amp;from=rss)
* [2026-03-02, 11:51:57](https://news.ycombinator.com/item?id=47216825) - [AMD will bring its “Ryzen AI” processors to standard desktop PCs for first time](https://arstechnica.com/gadgets/2026/03/amd-ryzen-ai-400-cpus-will-bring-upgraded-graphics-to-socket-am5-desktops/)
* [2026-03-02, 10:41:00](https://soylentnews.org/article.pl?sid=26/03/01/0728237&amp;from=rss) - [Trump Bans Anthropic AI From Federal Agencies While OpenAI Eager to Fill the Void](https://soylentnews.org/article.pl?sid=26/03/01/0728237&amp;from=rss)
* [2026-03-02, 05:58:00](https://soylentnews.org/article.pl?sid=26/03/01/071226&amp;from=rss) - [Researchers Discover Massive Wi-Fi Vulnerability Affecting Multiple Access Points](https://soylentnews.org/article.pl?sid=26/03/01/071226&amp;from=rss)
* [2026-03-02, 01:11:00](https://soylentnews.org/article.pl?sid=26/03/01/0653215&amp;from=rss) - [Removable Batteries in Mobile Phones May be Making a Comeback](https://soylentnews.org/article.pl?sid=26/03/01/0653215&amp;from=rss)
* [2026-03-02, 00:40:52](https://news.ycombinator.com/item?id=47212451) - [Picking Up a Zillion Pieces of Litter](https://www.sixstepstobetterhealth.com/litter.html)
* [2026-03-01, 20:48:30](https://news.ycombinator.com/item?id=47210509) - [Dbslice: Extract a slice of your production database to reproduce bugs](https://github.com/nabroleonx/dbslice)
* [2026-03-01, 20:22:00](https://soylentnews.org/article.pl?sid=26/02/28/0817218&amp;from=rss) - [Neanderthals Seemed To Have A Thing For Modern Human Women](https://soylentnews.org/article.pl?sid=26/02/28/0817218&amp;from=rss)
* [2026-03-01, 18:27:20](https://news.ycombinator.com/item?id=47209315) - [Aura-State: Formally Verified LLM State Machine Compiler](https://news.ycombinator.com/item?id=47209315)
* [2026-03-01, 15:37:00](https://soylentnews.org/article.pl?sid=26/02/28/0811223&amp;from=rss) - [US States Are Getting Tougher on Drivers Who Refuse to Move Over](https://soylentnews.org/article.pl?sid=26/02/28/0811223&amp;from=rss)
* [2026-03-01, 10:52:00](https://soylentnews.org/article.pl?sid=26/02/28/0452245&amp;from=rss) - [Human Brain Cells on a Chip Learned to Play Doom in a Week](https://soylentnews.org/article.pl?sid=26/02/28/0452245&amp;from=rss)
* [2026-03-01, 06:10:00](https://soylentnews.org/article.pl?sid=26/02/28/022210&amp;from=rss) - [Block Lays Off 40% Of Workforce As It Goes All-In On AI Tools](https://soylentnews.org/article.pl?sid=26/02/28/022210&amp;from=rss)
* [2026-03-01, 01:27:00](https://soylentnews.org/article.pl?sid=26/02/28/0158247&amp;from=rss) - [The US Military Just Made History With A C-17 Plane &amp; A Nuclear Reactor](https://soylentnews.org/article.pl?sid=26/02/28/0158247&amp;from=rss)
