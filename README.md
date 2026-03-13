# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Development Highlights

* [Conditional Impls](https://www.possiblerust.com/pattern/conditional-impls) - Exploring advanced Rust patterns for improved software design.

* [Rust Shined Over Python for My CLI Tool](https://smiling.dev/blog/rust-shined-over-python-for-my-cli-tool/) - A developer shares the advantages of using Rust over Python for command-line tools.

* [XML is a cheap DSL](https://unplannedobsolescence.com/blog/xml-cheap-dsl/) - Investigating leveraging XML as a domain-specific language.

* [Bucketsquatting is (Finally) Dead](https://onecloudplease.com/blog/bucketsquatting-is-finally-dead) - Analysis on the end of a decades-old web security loophole.

## AI and Data Developments

* [Don&apos;t Get Used To Cheap AI](https://news.slashdot.org/story/26/03/13/1926255/dont-get-used-to-cheap-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Reflection on the hidden costs of artificial intelligence advancements.

* [Meta Delays Rollout of New AI Model After Performance Concerns](https://tech.slashdot.org/story/26/03/13/1756229/meta-delays-rollout-of-new-ai-model-after-performance-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Meta postpones AI development due to performance challenges.

* [Show HN: Context Gateway – Compress agent context before it hits the LLM](https://github.com/Compresr-ai/Context-Gateway) - Introducing a tool for enhancing AI agent efficiency by compressing contextual data.

* [Online Intelligence Dashboards (Aka, More AI Slop?)](https://soylentnews.org/article.pl?sid=26/03/12/1023220&amp;from=rss) - A skeptical look at the proliferation of AI-driven dashboards.

## Noteworthy Engineering and Science

* [Backblaze Hosts 314 Trillion Digits of Pi Online](https://science.slashdot.org/story/26/03/13/182207/backblaze-hosts-314-trillion-digits-of-pi-online?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A significant milestone in data storage and computation.

* [Stanford researchers report first recording of a blue whale&apos;s heart rate (2019)](https://news.stanford.edu/stories/2019/11/first-ever-recording-blue-whales-heart-rate) - A groundbreaking study on marine biology.

## Business and Policy Trends

* [The wild six weeks for NanoClaw&apos;s creator that led to a deal with Docker](https://techcrunch.com/2026/03/13/the-wild-six-weeks-for-nanoclaws-creator-that-led-to-a-deal-with-docker/) - Insights into the rapid journey of a startup to success.

* [Apple&apos;s App Store In China Gets Lower 25% Commission To Appease Regulators](https://apple.slashdot.org/story/26/03/13/051218/apples-app-store-in-china-gets-lower-25-commission-to-appease-regulators?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Apple's strategy for navigating regulatory challenges in China.

* [Facial Recognition Error Jails Innocent Grandmother For Months](https://yro.slashdot.org/story/26/03/13/0513251/facial-recognition-error-jails-innocent-grandmother-for-months?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A cautionary tale of unintended consequences of rapid tech deployment.

## Open Source and Community Developments

* [Mouser: An open source alternative to Logi-Plus mouse software](https://github.com/TomBadash/MouseControl) - Highlighting an open-source mouse customization tool.

* [Hammerspoon](https://github.com/Hammerspoon/hammerspoon) - A powerful interface tool for macOS users.

* [Launch HN: Captain (YC W26) – Automated RAG for Files](https://www.runcaptain.com/) - AI-driven automated retrieval-augmented generation for file systems.

## Cultural and Historical Perspectives

* [Awash in revisionist histories about Apple&apos;s web efforts, a look at the evidence](https://infrequently.org/2025/09/cupertinos-comforting-myths/) - Reexamining Apple's involvement in web technologies over time.

* [The Accidental Room (2018)](https://99percentinvisible.org/episode/the-accidental-room/) - An intriguing narrative on unexpected findings.

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

* [2026-03-13, 21:00:00](https://news.slashdot.org/story/26/03/13/1926255/dont-get-used-to-cheap-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Don&apos;t Get Used To Cheap AI](https://news.slashdot.org/story/26/03/13/1926255/dont-get-used-to-cheap-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-13, 20:40:29](https://lobste.rs/s/wbnpgw/conditional_impls) - [Conditional Impls](https://www.possiblerust.com/pattern/conditional-impls)
* [2026-03-13, 20:39:22](https://lobste.rs/s/sbsszu/awash_revisionist_histories_about_apple) - [Awash in revisionist histories about Apple&apos;s web efforts, a look at the evidence](https://infrequently.org/2025/09/cupertinos-comforting-myths/)
* [2026-03-13, 20:03:08](https://lobste.rs/s/4ji19h/rust_shined_over_python_for_my_cli_tool) - [Rust Shined Over Python for My CLI Tool](https://smiling.dev/blog/rust-shined-over-python-for-my-cli-tool/)
* [2026-03-13, 20:00:00](https://tech.slashdot.org/story/26/03/13/1953248/digg-relaunch-fails?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Digg Relaunch Fails](https://tech.slashdot.org/story/26/03/13/1953248/digg-relaunch-fails?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-13, 19:47:37](https://lobste.rs/s/i2xkrm/xml_is_cheap_dsl) - [XML is a cheap DSL](https://unplannedobsolescence.com/blog/xml-cheap-dsl/)
* [2026-03-13, 19:35:18](https://news.ycombinator.com/item?id=47368703) - [The wild six weeks for NanoClaw&apos;s creator that led to a deal with Docker](https://techcrunch.com/2026/03/13/the-wild-six-weeks-for-nanoclaws-creator-that-led-to-a-deal-with-docker/)
* [2026-03-13, 19:15:06](https://news.ycombinator.com/item?id=47368430) - [Stanford researchers report first recording of a blue whale&apos;s heart rate (2019)](https://news.stanford.edu/stories/2019/11/first-ever-recording-blue-whales-heart-rate)
* [2026-03-13, 19:12:01](https://lobste.rs/s/eipd7u/good_old_pointers_2015) - [Good Old Pointers (2015)](https://medium.com/@rsx11/good-old-pointers-cfe8e2727e51)
* [2026-03-13, 19:00:00](https://science.slashdot.org/story/26/03/13/182207/backblaze-hosts-314-trillion-digits-of-pi-online?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Backblaze Hosts 314 Trillion Digits of Pi Online](https://science.slashdot.org/story/26/03/13/182207/backblaze-hosts-314-trillion-digits-of-pi-online?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-13, 18:42:54](https://news.ycombinator.com/item?id=47368033) - [Mouser: An open source alternative to Logi-Plus mouse software](https://github.com/TomBadash/MouseControl)
* [2026-03-13, 18:34:12](https://news.ycombinator.com/item?id=47367932) - [Hammerspoon](https://github.com/Hammerspoon/hammerspoon)
* [2026-03-13, 18:19:00](https://soylentnews.org/article.pl?sid=26/03/12/1023220&amp;from=rss) - [Online Intelligence Dashboards (Aka, More AI Slop?)](https://soylentnews.org/article.pl?sid=26/03/12/1023220&amp;from=rss)
* [2026-03-13, 18:02:32](https://news.ycombinator.com/item?id=47367568) - [Your phone is an entire computer](https://medhir.com/blog/your-phone-is-an-entire-computer)
* [2026-03-13, 18:00:00](https://tech.slashdot.org/story/26/03/13/1756229/meta-delays-rollout-of-new-ai-model-after-performance-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Delays Rollout of New AI Model After Performance Concerns](https://tech.slashdot.org/story/26/03/13/1756229/meta-delays-rollout-of-new-ai-model-after-performance-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-13, 17:58:22](https://news.ycombinator.com/item?id=47367526) - [Show HN: Context Gateway – Compress agent context before it hits the LLM](https://github.com/Compresr-ai/Context-Gateway)
* [2026-03-13, 17:51:34](https://news.ycombinator.com/item?id=47367463) - [John Carmack about open source and anti-AI activists](https://twitter.com/id_aa_carmack/status/2032460578669691171)
* [2026-03-13, 17:49:54](https://news.ycombinator.com/item?id=47367443) - [The Accidental Room (2018)](https://99percentinvisible.org/episode/the-accidental-room/)
* [2026-03-13, 17:27:12](https://news.ycombinator.com/item?id=47367220) - [Militaries are scrambling to create their own Starlink](https://www.newscientist.com/article/2517766-why-the-worlds-militaries-are-scrambling-to-create-their-own-starlink/)
* [2026-03-13, 17:19:11](https://lobste.rs/s/btf0gu/software_bonkers) - [Software Bonkers](https://craigmod.com/essays/software_bonkers/)
* [2026-03-13, 17:00:00](https://yro.slashdot.org/story/26/03/13/0524226/live-nation-execs-brag-about-robbing-ticket-buyers-in-slack-dms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Live Nation Execs Brag About &apos;Robbing&apos; Ticket Buyers In Slack DMs](https://yro.slashdot.org/story/26/03/13/0524226/live-nation-execs-brag-about-robbing-ticket-buyers-in-slack-dms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-13, 16:40:42](https://news.ycombinator.com/item?id=47366666) - [Elon Musk pushes out more xAI founders as AI coding effort falters](https://www.ft.com/content/e5fbc6c2-d5a6-4b97-a105-6a96ea849de5)
* [2026-03-13, 16:13:30](https://news.ycombinator.com/item?id=47366374) - [The Wyden Siren Goes Off Again: We&apos;ll Be \&quot;Stunned\&quot; by NSA Under Section 702](https://www.techdirt.com/2026/03/12/the-wyden-siren-goes-off-again-well-be-stunned-by-what-the-nsa-is-doing-under-section-702/)
* [2026-03-13, 16:00:00](https://apple.slashdot.org/story/26/03/13/051218/apples-app-store-in-china-gets-lower-25-commission-to-appease-regulators?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple&apos;s App Store In China Gets Lower 25% Commission To Appease Regulators](https://apple.slashdot.org/story/26/03/13/051218/apples-app-store-in-china-gets-lower-25-commission-to-appease-regulators?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-13, 15:49:15](https://lobste.rs/s/dm1j3a/openclaw_dream_free_labour) - [OpenClaw and the Dream of Free Labour](https://entropytown.com/articles/2026-03-12-openclaw-sandbox/)
* [2026-03-13, 15:45:33](https://news.ycombinator.com/item?id=47366011) - [Launch HN: Captain (YC W26) – Automated RAG for Files](https://www.runcaptain.com/)
* [2026-03-13, 15:17:52](https://lobste.rs/s/jadk6d/reinventing_python_s_asyncio) - [Reinventing Python&apos;s AsyncIO](https://blog.baro.dev/p/reinventing-pythons-asyncio)
* [2026-03-13, 15:17:02](https://lobste.rs/s/ehohsb/plumbing_everyday_magic) - [The Plumbing of Everyday Magic](https://plumbing-of-everyday-magic.hyperclay.com)
* [2026-03-13, 15:15:03](https://lobste.rs/s/zcmoab/windows_11_after_two_decades_macos_okay) - [Windows 11 after two decades of macOS: okay, but also awful](https://rakhim.exotext.com/windows-11-experience)
* [2026-03-13, 15:00:00](https://yro.slashdot.org/story/26/03/13/0513251/facial-recognition-error-jails-innocent-grandmother-for-months?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Facial Recognition Error Jails Innocent Grandmother For Months](https://yro.slashdot.org/story/26/03/13/0513251/facial-recognition-error-jails-innocent-grandmother-for-months?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-13, 14:11:36](https://news.ycombinator.com/item?id=47364729) - [Parallels confirms MacBook Neo can run Windows in a virtual machine](https://www.macrumors.com/2026/03/13/macbook-neo-runs-windows-11-vm/)
* [2026-03-13, 14:08:08](https://lobste.rs/s/hfypk8/how_use_storytelling_fit_inline_assembly) - [How to use storytelling to fit inline assembly into Rust](https://www.ralfj.de/blog/2026/03/13/inline-asm.html)
* [2026-03-13, 14:00:00](https://yro.slashdot.org/story/26/03/12/2252218/italian-prosecutors-seek-trial-for-amazon-four-execs-over-alleged-14-billion-tax-evasion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Italian Prosecutors Seek Trial For Amazon, Four Execs Over Alleged $1.4 Billion Tax Evasion](https://yro.slashdot.org/story/26/03/12/2252218/italian-prosecutors-seek-trial-for-amazon-four-execs-over-alleged-14-billion-tax-evasion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-13, 13:37:00](https://soylentnews.org/article.pl?sid=26/03/12/1011221&amp;from=rss) - [LEGO&apos;s 0.002mm Specification and It&apos;s Implications for Manufacturing](https://soylentnews.org/article.pl?sid=26/03/12/1011221&amp;from=rss)
* [2026-03-13, 13:34:02](https://lobste.rs/s/czj5p4/computing_freedom_with_gnu_emacs) - [Computing in freedom with GNU Emacs](https://protesilaos.com/codelog/2026-03-13-computing-in-freedom-with-gnu-emacs/)
* [2026-03-13, 13:22:40](https://news.ycombinator.com/item?id=47364116) - [Launch HN: Spine Swarm (YC S23) – AI agents that collaborate on a visual canvas](https://www.getspine.ai/)
* [2026-03-13, 13:03:42](https://news.ycombinator.com/item?id=47363922) - [E2E encrypted messaging on Instagram will no longer be supported after 8 May](https://help.instagram.com/491565145294150)
* [2026-03-13, 12:46:10](https://news.ycombinator.com/item?id=47363754) - [Can I run AI locally?](https://www.canirun.ai/)
* [2026-03-13, 12:31:09](https://news.ycombinator.com/item?id=47363584) - [Qatar helium shutdown puts chip supply chain on a two-week clock](https://www.tomshardware.com/tech-industry/qatar-helium-shutdown-puts-chip-supply-chain-on-a-two-week-clock)
* [2026-03-13, 11:41:55](https://lobste.rs/s/ddrcpa/i_traced_2_billion_nonprofit_grants_45) - [I traced $2 billion in nonprofit grants and 45 states of lobbying records to figure out who&apos;s behind the age verification bills](https://www.reddit.com/r/linux/s/WqwsCnFE8E)
* [2026-03-13, 11:06:24](https://lobste.rs/s/bspgu4/bucketsquatting_is_finally_dead) - [Bucketsquatting is (Finally) Dead](https://onecloudplease.com/blog/bucketsquatting-is-finally-dead)
* [2026-03-13, 11:00:00](https://hardware.slashdot.org/story/26/03/12/230230/apple-macbook-neo-beats-every-single-x86-pc-cpu-for-single-core-performance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple MacBook Neo Beats Every Single x86 PC CPU For Single-Core Performance ](https://hardware.slashdot.org/story/26/03/12/230230/apple-macbook-neo-beats-every-single-x86-pc-cpu-for-single-core-performance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-13, 10:32:45](https://news.ycombinator.com/item?id=47362613) - [TUI Studio – visual terminal UI design tool](https://tui.studio/)
* [2026-03-13, 10:25:04](https://lobste.rs/s/jwdr0q/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/jwdr0q/what_are_you_doing_this_weekend)
* [2026-03-13, 10:15:56](https://news.ycombinator.com/item?id=47362528) - [Meta Platforms: Lobbying, dark money, and the App Store Accountability Act](https://github.com/upper-up/meta-lobbying-and-other-findings)
* [2026-03-13, 10:08:54](https://news.ycombinator.com/item?id=47362487) - [Gvisor on Raspbian](https://nubificus.co.uk/blog/gvisor-rpi5/)
* [2026-03-13, 09:45:30](https://news.ycombinator.com/item?id=47362350) - [Source code of Swedish e-government services has been leaked](https://darkwebinformer.com/full-source-code-of-swedens-e-government-platform-leaked-from-compromised-cgi-sverige-infrastructure/)
* [2026-03-13, 09:29:23](https://lobste.rs/s/3elkxf/well_being_times_algorithms) - [Well Being in Times of Algorithms](https://www.ssp.sh/blog/well-being-algorithms/)
* [2026-03-13, 08:52:00](https://soylentnews.org/article.pl?sid=26/03/12/107259&amp;from=rss) - [Infinity Train Got 14.5 MWh Battery That, Ideally, Never Needs Charging](https://soylentnews.org/article.pl?sid=26/03/12/107259&amp;from=rss)
* [2026-03-13, 08:31:33](https://news.ycombinator.com/item?id=47361913) - [Bucketsquatting is finally dead](https://onecloudplease.com/blog/bucketsquatting-is-finally-dead)
* [2026-03-13, 07:00:00](https://yro.slashdot.org/story/26/03/12/236257/london-man-wore-smart-glasses-for-high-court-coaching?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [London Man Wore Smart Glasses For High Court &apos;Coaching&apos;](https://yro.slashdot.org/story/26/03/12/236257/london-man-wore-smart-glasses-for-high-court-coaching?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-13, 06:37:56](https://lobste.rs/s/jn7yoi/best_darn_grid_shader_yet) - [The Best Darn Grid Shader (Yet)](https://bgolus.medium.com/the-best-darn-grid-shader-yet-727f9278b9d8)
* [2026-03-13, 05:18:01](https://news.ycombinator.com/item?id=47360978) - [Lost Doctor Who Episodes Found](https://www.bbc.co.uk/news/articles/c4g7kwq1k11o)
* [2026-03-13, 04:54:39](https://lobste.rs/s/qnnok5/how_make_your_own_static_site_generator) - [How to make your own static site generator](https://gaultier.github.io/blog/how_to_make_your_own_static_site_generator.html)
* [2026-03-13, 04:12:55](https://lobste.rs/s/gpwpji/learn_haskell_two_weeks) - [Learn Haskell in Two Weeks](https://vitez.me/learn-haskell-in-two-weeks)
* [2026-03-13, 04:09:00](https://soylentnews.org/article.pl?sid=26/03/11/2010247&amp;from=rss) - [Ig Nobels Ceremony Moves to Europe Over Security Concerns](https://soylentnews.org/article.pl?sid=26/03/11/2010247&amp;from=rss)
* [2026-03-13, 03:54:26](https://lobste.rs/s/x9znhg/plan_9_s_acme_un_terminal_text_based_guis) - [Plan 9&apos;s Acme: The Un-Terminal and Text-Based GUIs](https://www.danielmoch.com/posts/2025/01/acme/)
* [2026-03-13, 03:32:18](https://news.ycombinator.com/item?id=47360383) - [Hyperlinks in terminal emulators](https://gist.github.com/egmontkob/eb114294efbcd5adb1944c9f3cb5feda)
* [2026-03-13, 03:30:00](https://slashdot.org/story/26/03/12/2049252/microsoft-backs-anthropic-to-halt-us-dods-supply-chain-risk-designation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Backs Anthropic To Halt US DOD&apos;s &apos;Supply-Chain Risk&apos; Designation](https://slashdot.org/story/26/03/12/2049252/microsoft-backs-anthropic-to-halt-us-dods-supply-chain-risk-designation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-13, 03:09:23](https://lobste.rs/s/jow6ea/how_many_times_can_dvd_rw_be_rewritten) - [How Many Times Can a DVD±RW Be Rewritten?](https://goughlui.com/2026/03/07/tested-how-many-times-can-a-dvd%c2%b1rw-be-rewritten-part-2-methodology-results/)
* [2026-03-12, 23:23:00](https://soylentnews.org/article.pl?sid=26/03/11/164207&amp;from=rss) - [Is Low Fertility Really an Economic Threat?](https://soylentnews.org/article.pl?sid=26/03/11/164207&amp;from=rss)
* [2026-03-12, 23:00:00](https://apple.slashdot.org/story/26/03/12/2234239/google-chrome-is-finally-coming-to-arm64-linux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Chrome Is Finally Coming To ARM64 Linux](https://apple.slashdot.org/story/26/03/12/2234239/google-chrome-is-finally-coming-to-arm64-linux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-12, 22:00:00](https://slashdot.org/story/26/03/12/212212/adobe-ceo-to-step-down-after-18-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Adobe CEO to Step Down After 18 Years](https://slashdot.org/story/26/03/12/212212/adobe-ceo-to-step-down-after-18-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-12, 21:00:00](https://apple.slashdot.org/story/26/03/12/2042240/apples-macbook-neo-makes-repairs-easier-cheaper-than-other-macbooks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple&apos;s MacBook Neo Makes Repairs Easier, Cheaper Than Other MacBooks](https://apple.slashdot.org/story/26/03/12/2042240/apples-macbook-neo-makes-repairs-easier-cheaper-than-other-macbooks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-12, 20:00:00](https://slashdot.org/story/26/03/12/191200/perplexitys-personal-computer-lets-ai-agents-access-your-local-files?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Perplexity&apos;s &apos;Personal Computer&apos; Lets AI Agents Access Your Local Files](https://slashdot.org/story/26/03/12/191200/perplexitys-personal-computer-lets-ai-agents-access-your-local-files?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-12, 19:19:34](https://lobste.rs/s/zcoz8h/how_do_you_manage_ssh_keys) - [How do you manage SSH keys?](https://lobste.rs/s/zcoz8h/how_do_you_manage_ssh_keys)
* [2026-03-12, 18:39:00](https://soylentnews.org/article.pl?sid=26/03/11/163209&amp;from=rss) - [OpenAI&apos;s Massive Stargate Data Center Canceled as Firm Can&apos;t Reach Terms With Oracle](https://soylentnews.org/article.pl?sid=26/03/11/163209&amp;from=rss)
* [2026-03-12, 18:29:15](https://lobste.rs/s/8xccbo/on_making) - [On Making](https://beej.us/blog/data/ai-making/)
* [2026-03-12, 16:43:27](https://lobste.rs/s/zyt5uz/this_is_not_computer_for_you) - [This Is Not The Computer For You](https://samhenri.gold/blog/20260312-this-is-not-the-computer-for-you/)
* [2026-03-12, 13:57:00](https://soylentnews.org/article.pl?sid=26/03/11/1558207&amp;from=rss) - [Digital Targeting Creeps Out Customers](https://soylentnews.org/article.pl?sid=26/03/11/1558207&amp;from=rss)
* [2026-03-12, 09:17:56](https://news.ycombinator.com/item?id=47348275) - [Executing programs inside transformers with exponentially faster inference](https://www.percepta.ai/blog/can-llms-be-computers)
* [2026-03-12, 09:11:00](https://soylentnews.org/article.pl?sid=26/03/11/0450209&amp;from=rss) - [Why the US is Using a Cheap Iranian Drone Against the Country Itself](https://soylentnews.org/article.pl?sid=26/03/11/0450209&amp;from=rss)
* [2026-03-12, 06:48:59](https://lobste.rs/s/l3rkdl/parametricity_comptime_is_bonkers) - [Parametricity, or Comptime is Bonkers](https://noelwelsh.com/posts/comptime-is-bonkers/)
* [2026-03-12, 04:23:00](https://soylentnews.org/article.pl?sid=26/03/11/0135252&amp;from=rss) - [Are Consumers Doomed to Pay More for Electricity Due to Data Center Buildouts?](https://soylentnews.org/article.pl?sid=26/03/11/0135252&amp;from=rss)
* [2026-03-11, 23:36:00](https://soylentnews.org/article.pl?sid=26/03/11/0138245&amp;from=rss) - [Iranian Drone Strikes Hit Three AWS Data Centers in the UAE and Bahrain](https://soylentnews.org/article.pl?sid=26/03/11/0138245&amp;from=rss)
* [2026-03-11, 20:46:24](https://news.ycombinator.com/item?id=47341432) - [New &apos;negative light&apos; technology hides data transfers in plain sight](https://www.unsw.edu.au/newsroom/news/2026/03/New-negative-light-technology-hides-data-transfers-in-plain-sight)
* [2026-03-11, 18:54:00](https://soylentnews.org/article.pl?sid=26/03/11/0441214&amp;from=rss) - [An Unexpected Discovery Just Uncovered Metals Tech Companies Are Desperate for](https://soylentnews.org/article.pl?sid=26/03/11/0441214&amp;from=rss)
* [2026-03-11, 14:34:57](https://news.ycombinator.com/item?id=47336100) - [Show HN: Channel Surfer – Watch YouTube like it’s cable TV](https://channelsurfer.tv)
* [2026-03-11, 14:03:00](https://soylentnews.org/article.pl?sid=26/03/09/1454227&amp;from=rss) - [Trump Gets Data Center Companies to Pledge to Pay for Power Generation](https://soylentnews.org/article.pl?sid=26/03/09/1454227&amp;from=rss)
* [2026-03-11, 09:17:00](https://soylentnews.org/article.pl?sid=26/03/09/1451208&amp;from=rss) - [The Cybertruck is More Explosive Than the Ford Pinto](https://soylentnews.org/article.pl?sid=26/03/09/1451208&amp;from=rss)
* [2026-03-11, 08:14:19](https://news.ycombinator.com/item?id=47332883) - [Exploring JEPA for real-time speech translation](https://www.startpinch.com/research/en/jepa-encoder-translation/)
* [2026-03-11, 04:32:00](https://soylentnews.org/article.pl?sid=26/03/09/096203&amp;from=rss) - [Ancient Clay Hidden Under Japan Caused Rupture That Triggered the 2011 Earthquake and Tsunami](https://soylentnews.org/article.pl?sid=26/03/09/096203&amp;from=rss)
* [2026-03-10, 23:43:00](https://soylentnews.org/article.pl?sid=26/03/09/094202&amp;from=rss) - [Norwegian Gov&apos;t Consumer Watchdog Calls Out ‘Enshittification’ of Video Games, Connected Devices](https://soylentnews.org/article.pl?sid=26/03/09/094202&amp;from=rss)
* [2026-03-10, 18:57:00](https://soylentnews.org/article.pl?sid=26/03/09/0859227&amp;from=rss) - [The Slow Death of the Power User](https://soylentnews.org/article.pl?sid=26/03/09/0859227&amp;from=rss)
* [2026-03-10, 14:10:00](https://soylentnews.org/article.pl?sid=26/03/08/1511250&amp;from=rss) - [Indigenous Peoples in the Amazon and Australia Share Some Ancestry](https://soylentnews.org/article.pl?sid=26/03/08/1511250&amp;from=rss)
* [2026-03-10, 09:29:00](https://soylentnews.org/article.pl?sid=26/03/08/1510201&amp;from=rss) - [In 1985 Maxell Built a Bunch of Life-Size Robots for its Bad Floppy Ad](https://soylentnews.org/article.pl?sid=26/03/08/1510201&amp;from=rss)
* [2026-03-10, 07:38:59](https://news.ycombinator.com/item?id=47320158) - [Using Thunderbird for RSS](https://rubenerd.com/using-thunderbird-for-rss/)
* [2026-03-10, 04:47:00](https://soylentnews.org/article.pl?sid=26/03/08/157253&amp;from=rss) - [Sam Altman Wonders: Should the Government Nationalize AGI?](https://soylentnews.org/article.pl?sid=26/03/08/157253&amp;from=rss)
* [2026-03-10, 00:02:00](https://soylentnews.org/article.pl?sid=26/03/08/154256&amp;from=rss) - [Charter Gets FCC Permission to Buy Cox and Become Largest ISP in the US](https://soylentnews.org/article.pl?sid=26/03/08/154256&amp;from=rss)
* [2026-03-09, 19:20:00](https://soylentnews.org/article.pl?sid=26/03/08/1456250&amp;from=rss) - [The New European Office Suite is a Private, Open-Source Alternative](https://soylentnews.org/article.pl?sid=26/03/08/1456250&amp;from=rss)
* [2026-03-09, 14:35:00](https://soylentnews.org/article.pl?sid=26/03/08/1446203&amp;from=rss) - [Time Zones vs. Mean Solar Time](https://soylentnews.org/article.pl?sid=26/03/08/1446203&amp;from=rss)
* [2026-03-09, 14:16:53](https://news.ycombinator.com/item?id=47309397) - [Okmain: How to pick an OK main colour of an image](https://dgroshev.com/blog/okmain/)
* [2026-03-09, 09:52:00](https://soylentnews.org/article.pl?sid=26/03/07/1635228&amp;from=rss) - [Claude Code Deletes Developers&apos; Production Setup, Including its Database and Snapshots](https://soylentnews.org/article.pl?sid=26/03/07/1635228&amp;from=rss)
* [2026-03-09, 05:10:00](https://soylentnews.org/article.pl?sid=26/03/07/1632227&amp;from=rss) - [Open Source Registries Don&apos;t Have Enough Money to Implement Basic Security](https://soylentnews.org/article.pl?sid=26/03/07/1632227&amp;from=rss)
* [2026-03-09, 00:24:00](https://soylentnews.org/article.pl?sid=26/03/07/1629233&amp;from=rss) - [Roundup:  OS-level Age Verification Laws](https://soylentnews.org/article.pl?sid=26/03/07/1629233&amp;from=rss)
