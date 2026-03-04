# [News Summary](https://kherrick.github.io/news-summary/)

## Digital Privacy and Security

* [Computer Scientists Caution Against Internet Age-Verification Mandates](https://tech.slashdot.org/story/26/03/04/197220/computer-scientists-caution-against-internet-age-verification-mandates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Vehicle Tire Pressure Sensors Enable Silent Tracking](https://tech.slashdot.org/story/26/03/04/1856240/vehicle-tire-pressure-sensors-enable-silent-tracking?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [LLMs Can Unmask Pseudonymous Users at Scale With Surprising Accuracy](https://soylentnews.org/article.pl?sid=26/03/04/1318201&amp;from=rss)

## Artificial Intelligence and Machine Learning

* [Father claims Google's AI product fuelled son's delusional spiral](https://www.bbc.com/news/articles/czx44p99457o)

* [NanoGPT Slowrun: Language Modeling with Limited Data, Infinite Compute](https://qlabs.sh/slowrun)

* [ChatGPT Gets GPT-5.3 Instant Update With Less 'Cringe,' Fewer Hallucinations](https://slashdot.org/story/26/03/04/0017232/chatgpt-gets-gpt-53-instant-update-with-less-cringe-fewer-hallucinations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Technology Gear and Applications

* [Apple Announces Low-Cost 'MacBook Neo' With A18 Pro Chip](https://hardware.slashdot.org/story/26/03/04/1624211/apple-announces-low-cost-macbook-neo-with-a18-pro-chip?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [SingleFile: Web Extension for saving a faithful copy of a complete web page in a single HTML file](https://github.com/gildas-lormeau/SingleFile)

* [Making Firefox's right-click not suck with about:config](https://joshua.hu/firefox-making-right-click-not-suck)

## Scientific Discoveries and Health

* [To understand our fascination with crystals, researchers gave some to chimps](https://www.nytimes.com/2026/03/04/science/chimpanzees-crystals.html)

* [Humans 40k yrs ago developed a system of conventional signs](https://www.pnas.org/doi/10.1073/pnas.2520385123)

## Space and Exploration

* [NASA Repairs Artemis 2 Rocket, Continues Eyeing April Moon Launch](https://science.slashdot.org/story/26/03/03/2358209/nasa-repairs-artemis-2-rocket-continues-eyeing-april-moon-launch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

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

* [2026-03-04, 21:00:00](https://tech.slashdot.org/story/26/03/04/197220/computer-scientists-caution-against-internet-age-verification-mandates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Computer Scientists Caution Against Internet Age-Verification Mandates](https://tech.slashdot.org/story/26/03/04/197220/computer-scientists-caution-against-internet-age-verification-mandates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-04, 20:30:16](https://news.ycombinator.com/item?id=47253364) - [Does that use a lot of energy?](https://hannahritchie.github.io/energy-use-comparisons/)
* [2026-03-04, 20:19:43](https://news.ycombinator.com/item?id=47253221) - [The View from RSS](https://www.carolinecrampton.com/the-view-from-rss/)
* [2026-03-04, 20:16:03](https://news.ycombinator.com/item?id=47253177) - [Building a new flash](https://bill.newgrounds.com/news/post/1607118)
* [2026-03-04, 20:15:06](https://news.ycombinator.com/item?id=47253160) - [Was Windows 1.0&apos;s lack of overlapping windows a legal or a technical matter?](https://retrocomputing.stackexchange.com/questions/32511/was-windows-1-0s-lack-of-overlapping-windows-a-legal-or-a-technical-matter)
* [2026-03-04, 20:00:00](https://tech.slashdot.org/story/26/03/04/1856240/vehicle-tire-pressure-sensors-enable-silent-tracking?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Vehicle Tire Pressure Sensors Enable Silent Tracking](https://tech.slashdot.org/story/26/03/04/1856240/vehicle-tire-pressure-sensors-enable-silent-tracking?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-04, 19:49:16](https://lobste.rs/s/dmdttx/jj_v0_39_0_released) - [jj v0.39.0 released](https://github.com/jj-vcs/jj/releases/tag/v0.39.0)
* [2026-03-04, 19:48:07](https://news.ycombinator.com/item?id=47252838) - [Father claims Google&apos;s AI product fuelled son&apos;s delusional spiral](https://www.bbc.com/news/articles/czx44p99457o)
* [2026-03-04, 19:48:05](https://lobste.rs/s/bxbytk/accepting_user_supplied_code_is_mostly) - [Accepting user-supplied code is mostly fine](https://dimden.dev/blog/?id=15-webtiles-its-fine-to-accept-user-supplied-code-actually)
* [2026-03-04, 19:40:22](https://news.ycombinator.com/item?id=47252726) - [Google ends its 30 percent app store fee and welcomes third-party app stores](https://www.engadget.com/apps/google-ends-its-30-percent-app-store-fee-and-welcomes-third-party-app-stores-185248647.html)
* [2026-03-04, 19:39:00](https://soylentnews.org/article.pl?sid=26/03/04/1320238&amp;from=rss) - [Small Web, IndieWeb, Gemini… a Guide to the Retro-Web](https://soylentnews.org/article.pl?sid=26/03/04/1320238&amp;from=rss)
* [2026-03-04, 19:00:00](https://tech.slashdot.org/story/26/03/04/1844224/emails-to-outlookcom-rejected-by-faulty-or-overzealous-blocking-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Emails To Outlook.com Rejected By Faulty Or Overzealous Blocking Rules](https://tech.slashdot.org/story/26/03/04/1844224/emails-to-outlookcom-rejected-by-faulty-or-overzealous-blocking-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-04, 18:57:07](https://lobste.rs/s/ii2iaw/singlefile_web_extension_for_saving) - [SingleFile: Web Extension for saving a faithful copy of a complete web page in a single HTML file](https://github.com/gildas-lormeau/SingleFile)
* [2026-03-04, 18:50:45](https://news.ycombinator.com/item?id=47252049) - [An interactive map of Flock Cams](https://deflock.org/map#map=5/37.125286/-96.284180)
* [2026-03-04, 18:46:21](https://news.ycombinator.com/item?id=47251987) - [Data Has Weight but Only on SSDs](https://cubiclenate.com/2026/03/04/data-has-weight-but-only-on-ssds-blathering/)
* [2026-03-04, 18:33:38](https://news.ycombinator.com/item?id=47251787) - [Faster C software with Dynamic Feature Detection](https://gist.github.com/jjl/d998164191af59a594500687a679b98d)
* [2026-03-04, 18:26:47](https://lobste.rs/s/lw8rsa/pocket_id_easy_passkey_authentication) - [Pocket ID: Easy Passkey Authentication](https://runtimeterror.dev/pocket-id-easy-passkey-authentication/)
* [2026-03-04, 18:12:39](https://news.ycombinator.com/item?id=47251480) - [Making Firefox&apos;s right-click not suck with about:config](https://joshua.hu/firefox-making-right-click-not-suck)
* [2026-03-04, 18:02:37](https://lobste.rs/s/fyyk6o/project_reject_ai_agents_via_agents_md) - [A project to reject AI agents via AGENTS.md](https://codeberg.org/rossabaker/no-agents.md)
* [2026-03-04, 18:02:21](https://news.ycombinator.com/item?id=47251332) - [The Space Race&apos;s Forgotten Theme Park](https://daily.jstor.org/the-space-races-forgotten-theme-park/)
* [2026-03-04, 18:00:35](https://lobste.rs/s/dzcrf7/faster_c_software_with_dynamic_feature) - [Faster C software with Dynamic Feature Detection](https://gist.github.com/jjl/d998164191af59a594500687a679b98d)
* [2026-03-04, 18:00:00](https://tech.slashdot.org/story/26/03/04/1638248/tiktok-says-end-to-end-encryption-makes-users-less-safe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [TikTok Says End-To-End Encryption Makes Users Less Safe](https://tech.slashdot.org/story/26/03/04/1638248/tiktok-says-end-to-end-encryption-makes-users-less-safe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-04, 17:56:04](https://news.ycombinator.com/item?id=47251259) - [NanoGPT Slowrun: Language Modeling with Limited Data, Infinite Compute](https://qlabs.sh/slowrun)
* [2026-03-04, 17:49:44](https://news.ycombinator.com/item?id=47251163) - [Roboflow (YC S20) Is Hiring a Security Engineer for AI Infra](https://roboflow.com/careers)
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
* [2026-03-04, 14:52:46](https://news.ycombinator.com/item?id=47248319) - [“It turns out” (2010)](https://jsomers.net/blog/it-turns-out)
* [2026-03-04, 14:25:15](https://lobste.rs/s/46iep3/re_how_we_built_world_s_fastest_regex) - [RE#: how we built the world&apos;s fastest regex engine in F#](https://iev.ee/blog/resharp-how-we-built-the-fastest-regex-in-fsharp/)
* [2026-03-04, 14:16:41](https://news.ycombinator.com/item?id=47247645) - [MacBook Neo](https://www.apple.com/newsroom/2026/03/say-hello-to-macbook-neo/)
* [2026-03-04, 14:11:43](https://lobste.rs/s/tmnv1c/based_base64_now_with_more_steganography) - [Based base64 (now with more steganography!)](https://blog.jordan.matelsky.com/bb64/)
* [2026-03-04, 14:00:00](https://tech.slashdot.org/story/26/03/04/0033216/qualcomm-ceo-resistance-is-futile-as-6g-mobile-revolution-approaches?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Qualcomm CEO: &apos;Resistance Is Futile&apos; As 6G Mobile Revolution Approaches](https://tech.slashdot.org/story/26/03/04/0033216/qualcomm-ceo-resistance-is-futile-as-6g-mobile-revolution-approaches?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-04, 13:21:31](https://news.ycombinator.com/item?id=47247033) - [Glaze by Raycast](https://www.glazeapp.com/)
* [2026-03-04, 13:04:53](https://news.ycombinator.com/item?id=47246858) - [MyFirst Kids Watch Hacked. Access to Camera and Microphone](https://www.kth.se/en/om/nyheter/centrala-nyheter/kth-studenten-hackade-klocka-for-barn-1.1461249)
* [2026-03-04, 13:00:00](https://slashdot.org/story/26/03/04/0017232/chatgpt-gets-gpt-53-instant-update-with-less-cringe-fewer-hallucinations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ChatGPT Gets GPT-5.3 Instant Update With Less &apos;Cringe,&apos; Fewer Hallucinations](https://slashdot.org/story/26/03/04/0017232/chatgpt-gets-gpt-53-instant-update-with-less-cringe-fewer-hallucinations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-04, 12:04:31](https://news.ycombinator.com/item?id=47246296) - [Qwen3.5 Fine-Tuning Guide – Unsloth Documentation](https://unsloth.ai/docs/models/qwen3.5/fine-tune)
* [2026-03-04, 11:43:32](https://news.ycombinator.com/item?id=47246110) - [Nobody Gets Promoted for Simplicity](https://terriblesoftware.org/2026/03/03/nobody-gets-promoted-for-simplicity/)
* [2026-03-04, 11:33:46](https://news.ycombinator.com/item?id=47246044) - [Emails to Outlook.com rejected due to a fault or overzealous blocking rules](https://www.theregister.com/2026/03/04/users_fume_at_outlookcom_email/)
* [2026-03-04, 11:11:02](https://lobste.rs/s/dc3ysd/package_managers_need_cool_down) - [Package Managers Need to Cool Down](https://nesbitt.io/2026/03/04/package-managers-need-to-cool-down.html)
* [2026-03-04, 10:21:13](https://news.ycombinator.com/item?id=47245491) - [Moss is a pixel canvas where every brush is a tiny program](https://www.moss.town/)
* [2026-03-04, 10:15:36](https://lobste.rs/s/oi2emm/pg_jitter_better_jit_for_postgres) - [pg_jitter: Better JIT for Postgres](https://github.com/vladich/pg_jitter)
* [2026-03-04, 10:07:00](https://soylentnews.org/article.pl?sid=26/03/04/077205&amp;from=rss) - [Medical Journal the Lancet Blasts RFK Jr.’s Health Work as a Failure](https://soylentnews.org/article.pl?sid=26/03/04/077205&amp;from=rss)
* [2026-03-04, 10:00:00](https://entertainment.slashdot.org/story/26/03/04/0013218/game-of-thrones-movie-in-the-works?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Game of Thrones&apos; Movie In the Works](https://entertainment.slashdot.org/story/26/03/04/0013218/game-of-thrones-movie-in-the-works?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-04, 08:54:08](https://lobste.rs/s/2ng9uk/rtl_wtf_read_web_like_right_left_readers_do) - [RTL: WTF: Read the web like Right-to-Left readers do](https://rtl.wtf/)
* [2026-03-04, 08:24:51](https://lobste.rs/s/ya5b5h/proposal_add_guix_tag) - [Proposal: Add `Guix` tag](https://lobste.rs/s/ya5b5h/proposal_add_guix_tag)
* [2026-03-04, 07:47:06](https://news.ycombinator.com/item?id=47244395) - [To understand our fascination with crystals, researchers gave some to chimps](https://www.nytimes.com/2026/03/04/science/chimpanzees-crystals.html)
* [2026-03-04, 07:25:24](https://news.ycombinator.com/item?id=47244291) - [RFC 9849. TLS Encrypted Client Hello](https://www.rfc-editor.org/rfc/rfc9849.html)
* [2026-03-04, 07:00:00](https://science.slashdot.org/story/26/03/03/2358209/nasa-repairs-artemis-2-rocket-continues-eyeing-april-moon-launch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Repairs Artemis 2 Rocket, Continues Eyeing April Moon Launch](https://science.slashdot.org/story/26/03/03/2358209/nasa-repairs-artemis-2-rocket-continues-eyeing-april-moon-launch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-04, 05:22:00](https://soylentnews.org/article.pl?sid=26/03/03/029259&amp;from=rss) - [&apos;Cancel ChatGPT&apos;: AI Boycott Surges After OpenAI-Pentagon Military Deal](https://soylentnews.org/article.pl?sid=26/03/03/029259&amp;from=rss)
* [2026-03-04, 03:49:04](https://lobste.rs/s/isuqoa/never_snooze_future) - [Never snooze a future](https://jacko.io/snooze.html)
* [2026-03-04, 03:32:02](https://lobste.rs/s/hz6vhv/california_s_digital_age_assurance_act) - [California&apos;s Digital Age Assurance Act, and FOSS](https://runxiyu.org/comp/ab1043/)
* [2026-03-04, 03:00:00](https://apple.slashdot.org/story/26/03/03/2049253/a-possible-us-government-iphone-hacking-toolkit-is-now-in-the-hands-of-foreign-spies-criminals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Possible US Government iPhone-Hacking Toolkit Is Now In the Hands of Foreign Spies, Criminals](https://apple.slashdot.org/story/26/03/03/2049253/a-possible-us-government-iphone-hacking-toolkit-is-now-in-the-hands-of-foreign-spies-criminals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-04, 01:00:00](https://developers.slashdot.org/story/26/03/04/0039214/openai-is-developing-an-alternative-to-github?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Is Developing an Alternative To GitHub](https://developers.slashdot.org/story/26/03/04/0039214/openai-is-developing-an-alternative-to-github?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-04, 00:30:00](https://soylentnews.org/article.pl?sid=26/03/03/021249&amp;from=rss) - [Entry-Level PC Market To ‘Disappear’ By 2028 — Rising Memory Prices Pile More Strain On Consumer PC ](https://soylentnews.org/article.pl?sid=26/03/03/021249&amp;from=rss)
* [2026-03-03, 23:29:32](https://lobste.rs/s/hu6tos/markless_document_markup_standard) - [The Markless Document Markup Standard](https://shirakumo.org/docs/markless/)
* [2026-03-03, 23:00:00](https://tech.slashdot.org/story/26/03/03/2040230/google-chrome-is-switching-to-a-two-week-release-cycle?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Chrome Is Switching To a Two-Week Release Cycle](https://tech.slashdot.org/story/26/03/03/2040230/google-chrome-is-switching-to-a-two-week-release-cycle?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-03, 22:31:14](https://lobste.rs/s/g6moku/four_months_ruby_central_moving_ruby) - [Four months of Ruby Central moving Ruby backward](https://andre.arko.net/2026/03/03/four-months-of-ruby-central-moving-ruby-backward/)
* [2026-03-03, 22:00:00](https://tech.slashdot.org/story/26/03/03/1951222/libreoffice-says-its-ui-is-way-better-than-microsoft-offices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [LibreOffice Says Its UI Is Way Better Than Microsoft Office&apos;s](https://tech.slashdot.org/story/26/03/03/1951222/libreoffice-says-its-ui-is-way-better-than-microsoft-offices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-03, 20:58:01](https://lobste.rs/s/teexox/claude_s_cycles) - [Claude&apos;s Cycles](https://www-cs-faculty.stanford.edu/~knuth/papers/claude-cycles.pdf)
* [2026-03-03, 20:00:27](https://lobste.rs/s/2gwqlh/rust_zero_cost_abstractions_vs_simd) - [Rust zero-cost abstractions vs. SIMD](https://turbopuffer.com/blog/zero-cost)
* [2026-03-03, 19:54:00](https://soylentnews.org/article.pl?sid=26/03/02/2022221&amp;from=rss) - [Across Cultures, People Combine Reference Frames to Orient Themselves](https://soylentnews.org/article.pl?sid=26/03/02/2022221&amp;from=rss)
* [2026-03-03, 19:33:30](https://lobste.rs/s/tznewb/nobody_gets_promoted_for_simplicity) - [Nobody Gets Promoted for Simplicity](https://terriblesoftware.org/2026/03/03/nobody-gets-promoted-for-simplicity/)
* [2026-03-03, 16:08:22](https://lobste.rs/s/r8kjli/claude_is_electron_app_because_we_ve_lost) - [Claude is an Electron App because we’ve lost native](https://tonsky.me/blog/fall-of-native/)
* [2026-03-03, 15:13:00](https://soylentnews.org/article.pl?sid=26/03/02/2020204&amp;from=rss) - [Pathways to a Fair Technological Future](https://soylentnews.org/article.pl?sid=26/03/02/2020204&amp;from=rss)
* [2026-03-03, 14:09:45](https://lobste.rs/s/of77cp/us_supreme_court_declines_hear_dispute) - [US Supreme Court declines to hear dispute over copyrights for AI-generated material](https://www.reuters.com/legal/government/us-supreme-court-declines-hear-dispute-over-copyrights-ai-generated-material-2026-03-02/)
* [2026-03-03, 10:28:00](https://soylentnews.org/article.pl?sid=26/03/02/2018219&amp;from=rss) - [Satellites Found a &apos;Brown Ribbon&apos; Near Africa – Now Scientists Are Sounding Alarms](https://soylentnews.org/article.pl?sid=26/03/02/2018219&amp;from=rss)
* [2026-03-03, 05:43:00](https://soylentnews.org/article.pl?sid=26/03/02/2014218&amp;from=rss) - [Datacenters in Space Are a Terrible, Horrible, No Good Idea.](https://soylentnews.org/article.pl?sid=26/03/02/2014218&amp;from=rss)
* [2026-03-03, 00:58:00](https://soylentnews.org/article.pl?sid=26/03/02/1659243&amp;from=rss) - [Cleaner Ship Fuel is Reducing Lightning in Key Shipping Lanes](https://soylentnews.org/article.pl?sid=26/03/02/1659243&amp;from=rss)
* [2026-03-02, 20:12:00](https://soylentnews.org/article.pl?sid=26/03/01/0744215&amp;from=rss) - [Hail Protection Using Solar Panels](https://soylentnews.org/article.pl?sid=26/03/01/0744215&amp;from=rss)
* [2026-03-02, 15:23:00](https://soylentnews.org/article.pl?sid=26/03/01/0737210&amp;from=rss) - [Whoops: US Military Laser Strike Takes Down CBP Drone Near Mexican Border](https://soylentnews.org/article.pl?sid=26/03/01/0737210&amp;from=rss)
* [2026-03-02, 10:41:00](https://soylentnews.org/article.pl?sid=26/03/01/0728237&amp;from=rss) - [Trump Bans Anthropic AI From Federal Agencies While OpenAI Eager to Fill the Void](https://soylentnews.org/article.pl?sid=26/03/01/0728237&amp;from=rss)
* [2026-03-02, 05:58:00](https://soylentnews.org/article.pl?sid=26/03/01/071226&amp;from=rss) - [Researchers Discover Massive Wi-Fi Vulnerability Affecting Multiple Access Points](https://soylentnews.org/article.pl?sid=26/03/01/071226&amp;from=rss)
* [2026-03-02, 01:11:00](https://soylentnews.org/article.pl?sid=26/03/01/0653215&amp;from=rss) - [Removable Batteries in Mobile Phones May be Making a Comeback](https://soylentnews.org/article.pl?sid=26/03/01/0653215&amp;from=rss)
* [2026-03-01, 20:22:00](https://soylentnews.org/article.pl?sid=26/02/28/0817218&amp;from=rss) - [Neanderthals Seemed To Have A Thing For Modern Human Women](https://soylentnews.org/article.pl?sid=26/02/28/0817218&amp;from=rss)
* [2026-03-01, 17:25:27](https://news.ycombinator.com/item?id=47208688) - [The Rust calling convention we deserve (2024)](https://mcyoung.xyz/2024/04/17/calling-convention/)
* [2026-03-01, 15:37:00](https://soylentnews.org/article.pl?sid=26/02/28/0811223&amp;from=rss) - [US States Are Getting Tougher on Drivers Who Refuse to Move Over](https://soylentnews.org/article.pl?sid=26/02/28/0811223&amp;from=rss)
* [2026-03-01, 15:36:48](https://news.ycombinator.com/item?id=47207647) - [My Favorite 39C3 Talks](https://asindu.xyz/my-favorite-39c3-talks/)
* [2026-03-01, 10:52:00](https://soylentnews.org/article.pl?sid=26/02/28/0452245&amp;from=rss) - [Human Brain Cells on a Chip Learned to Play Doom in a Week](https://soylentnews.org/article.pl?sid=26/02/28/0452245&amp;from=rss)
* [2026-03-01, 09:01:05](https://news.ycombinator.com/item?id=47204994) - [Libre Solar – Open Hardware for Renewable Energy](https://libre.solar)
* [2026-03-01, 06:10:00](https://soylentnews.org/article.pl?sid=26/02/28/022210&amp;from=rss) - [Block Lays Off 40% Of Workforce As It Goes All-In On AI Tools](https://soylentnews.org/article.pl?sid=26/02/28/022210&amp;from=rss)
* [2026-03-01, 01:27:00](https://soylentnews.org/article.pl?sid=26/02/28/0158247&amp;from=rss) - [The US Military Just Made History With A C-17 Plane &amp; A Nuclear Reactor](https://soylentnews.org/article.pl?sid=26/02/28/0158247&amp;from=rss)
* [2026-03-01, 00:26:43](https://news.ycombinator.com/item?id=47202210) - [Raspberry Pi Pico as AM Radio Transmitter](https://www.pesfandiar.com/blog/2026/02/28/pico-am-radio-transmitter)
* [2026-02-28, 20:41:00](https://soylentnews.org/article.pl?sid=26/02/28/0151255&amp;from=rss) - [OpenAI Secures Record $110 Billion Funding Round Backed By Amazon, Nvidia, and SoftBank](https://soylentnews.org/article.pl?sid=26/02/28/0151255&amp;from=rss)
* [2026-02-28, 15:59:00](https://soylentnews.org/article.pl?sid=26/02/28/0150248&amp;from=rss) - [OsmAnd&apos;s Faster Offline Navigation](https://soylentnews.org/article.pl?sid=26/02/28/0150248&amp;from=rss)
* [2026-02-28, 11:11:00](https://soylentnews.org/article.pl?sid=26/02/27/2232251&amp;from=rss) - [Why LLM-Generated Passwords Are Dangerously Insecure](https://soylentnews.org/article.pl?sid=26/02/27/2232251&amp;from=rss)
* [2026-02-28, 06:30:00](https://soylentnews.org/article.pl?sid=26/02/27/2224202&amp;from=rss) - [A Hacker Used Claude to Breach Mexico&apos;s Government and Steal 150GB of Data](https://soylentnews.org/article.pl?sid=26/02/27/2224202&amp;from=rss)
* [2026-02-28, 02:29:51](https://news.ycombinator.com/item?id=47189390) - [Approximation Game](https://lcamtuf.substack.com/p/approximation-game)
* [2026-02-28, 01:40:00](https://soylentnews.org/article.pl?sid=26/02/27/2217216&amp;from=rss) - [Hackers Expose the Massive Surveillance Stack Hiding Inside Your “Age Verification” Check](https://soylentnews.org/article.pl?sid=26/02/27/2217216&amp;from=rss)
