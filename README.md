# [News Summary](https://kherrick.github.io/news-summary/)

## Advancements and Issues in Technology Development

* [SQLite WAL-reset database corruption bug](https://sqlite.org/wal.html#walresetbug): A deep dive into a specific database corruption issue related to SQLite's Write Ahead Logging feature. [Comments](https://lobste.rs/s/mqpba7/sqlite_wal_reset_database_corruption_bug)

* [AutoKernel: Autoresearch for GPU Kernels](https://github.com/RightNow-AI/autokernel): An exploration into an automatic research methodology for optimizing GPU kernels. [Comments](https://news.ycombinator.com/item?id=47332688)

* [Intel Demos Chip to Compute With Encrypted Data](https://it.slashdot.org/story/26/03/10/2022201/intel-demos-chip-to-compute-with-encrypted-data?utm_source=rss1.0mainlinkanon&utm_medium=feed): A look at how Intel is advancing secure computing with a chip capable of processing encrypted data. [Comments](https://it.slashdot.org/story/26/03/10/2022201/intel-demos-chip-to-compute-with-encrypted-data?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [EVi, a hard-fork of Vim](https://codeberg.org/NerdNextDoor/evi): A renewed take on Vim with tweaks tailored for modern development practices. [Comments](https://lobste.rs/s/izprt4/evi_hard_fork_vim)

## AI and Agentic Innovations

* [TADA: Fast, Reliable Speech Generation Through Text-Acoustic Synchronization](https://www.hume.ai/blog/opensource-tada): New advancements in AI for synchronized speech and text generation. [Comments](https://news.ycombinator.com/item?id=47332054)

* [Silicon Valley Is Buzzing About This New Idea: AI Compute as Compensation](https://news.slashdot.org/story/26/03/10/200253/silicon-valley-is-buzzing-about-this-new-idea-ai-compute-as-compensation?utm_source=rss1.0mainlinkanon&utm_medium=feed): Discusses how compute resources can be considered as compensation mechanisms in AI-driven industries. [Comments](https://news.slashdot.org/story/26/03/10/200253/silicon-valley-is-buzzing-about-this-new-idea-ai-compute-as-compensation?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [LLM Neuroanatomy: How I Topped the AI Leaderboard Without Changing a Single Weight](https://dnhkng.github.io/posts/rys/): A fascinating approach to climbing AI leaderboards through deep understanding of large language models rather than algorithmic changes. [Comments](https://lobste.rs/s/zzjjyo/llm_neuroanatomy_how_i_topped_ai)

## Historical Events and Memorable Personalities

* [Tony Hoare, Turing Award-Winning Computer Scientist Behind QuickSort, Dies at 92](https://developers.slashdot.org/story/26/03/10/2038225/tony-hoare-turing-award-winning-computer-scientist-behind-quicksort-dies-at-92?utm_source=rss1.0mainlinkanon&utm_medium=feed): Honoring the life and contributions of Tony Hoare to computer science, particularly his creation of QuickSort. [Comments](https://developers.slashdot.org/story/26/03/10/2038225/tony-hoare-turing-award-winning-computer-scientist-behind-quicksort-dies-at-92?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Ancient Clay Hidden Under Japan Caused Rupture That Triggered the 2011 Earthquake and Tsunami](https://soylentnews.org/article.pl?sid=26/03/09/096203&from=rss): Investigation into geological mysteries related to the disaster in 2011. [Comments](https://soylentnews.org/article.pl?sid=26/03/09/096203&from=rss)

## Industrial and Global Affairs

* [A 1,300-Pound NASA Spacecraft To Re-Enter Earth's Atmosphere](https://science.slashdot.org/story/26/03/11/0026235/a-1300-pound-nasa-spacecraft-to-re-enter-earths-atmosphere?utm_source=rss1.0mainlinkanon&utm_medium=feed): NASA plans for the massive spacecraft's atmospheric re-entry raise operational and safety concerns. [Comments](https://science.slashdot.org/story/26/03/11/0026235/a-1300-pound-nasa-spacecraft-to-re-enter-earths-atmosphere?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Amazon Wins Court Order to Block Perplexity’s AI Shopping Bots](https://yro.slashdot.org/story/26/03/10/2012222/amazon-wins-court-order-to-block-perplexitys-ai-shopping-bots?utm_source=rss1.0mainlinkanon&utm_medium=feed): A legal victory that showcases Amazon’s stance against AI shopping innovations hindering their ecosystem. [Comments](https://yro.slashdot.org/story/26/03/10/2012222/amazon-wins-court-order-to-block-perplexitys-ai-shopping-bots?utm_source=rss1.0mainlinkanon&utm_medium=feed)

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

* [2026-03-11, 09:18:52](https://lobste.rs/s/mqpba7/sqlite_wal_reset_database_corruption_bug) - [SQLite WAL-reset database corruption bug](https://sqlite.org/wal.html#walresetbug)
* [2026-03-11, 09:17:00](https://soylentnews.org/article.pl?sid=26/03/09/1451208&amp;from=rss) - [The Cybertruck is More Explosive Than the Ford Pinto](https://soylentnews.org/article.pl?sid=26/03/09/1451208&amp;from=rss)
* [2026-03-11, 08:33:31](https://lobste.rs/s/dhk0do/code_reviews_do_find_bugs) - [Code reviews do find bugs](https://entropicthoughts.com/code-reviews-do-find-bugs)
* [2026-03-11, 08:11:35](https://lobste.rs/s/1911az/c_26_safety_features_won_t_safe_you) - [C++26 safety features won&apos;t safe you](https://lucisqr.substack.com/p/c26-safety-features-wont-save-you)
* [2026-03-11, 07:42:10](https://news.ycombinator.com/item?id=47332688) - [AutoKernel: Autoresearch for GPU Kernels](https://github.com/RightNow-AI/autokernel)
* [2026-03-11, 07:36:18](https://news.ycombinator.com/item?id=47332649) - [I&apos;m going to build my own OpenClaw, with blackjack and bun](https://github.com/rcarmo/piclaw)
* [2026-03-11, 07:00:00](https://science.slashdot.org/story/26/03/11/0026235/a-1300-pound-nasa-spacecraft-to-re-enter-earths-atmosphere?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A 1,300-Pound NASA Spacecraft To Re-Enter Earth&apos;s Atmosphere](https://science.slashdot.org/story/26/03/11/0026235/a-1300-pound-nasa-spacecraft-to-re-enter-earths-atmosphere?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-11, 05:45:49](https://news.ycombinator.com/item?id=47332074) - [Create value for others and don’t worry about the returns](https://geohot.github.io//blog/jekyll/update/2026/03/11/running-69-agents.html)
* [2026-03-11, 05:42:55](https://news.ycombinator.com/item?id=47332054) - [TADA: Fast, Reliable Speech Generation Through Text-Acoustic Synchronization](https://www.hume.ai/blog/opensource-tada)
* [2026-03-11, 04:42:23](https://news.ycombinator.com/item?id=47331802) - [Standardizing source maps](https://bloomberg.github.io/js-blog/post/standardizing-source-maps/)
* [2026-03-11, 04:32:00](https://soylentnews.org/article.pl?sid=26/03/09/096203&amp;from=rss) - [Ancient Clay Hidden Under Japan Caused Rupture That Triggered the 2011 Earthquake and Tsunami](https://soylentnews.org/article.pl?sid=26/03/09/096203&amp;from=rss)
* [2026-03-11, 03:30:00](https://slashdot.org/story/26/03/10/212214/after-outages-amazon-to-make-senior-engineers-sign-off-on-ai-assisted-changes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [After Outages, Amazon To Make Senior Engineers Sign Off On AI-Assisted Changes](https://slashdot.org/story/26/03/10/212214/after-outages-amazon-to-make-senior-engineers-sign-off-on-ai-assisted-changes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-11, 03:07:37](https://lobste.rs/s/e8lebp/u_237c_is_azimuth) - [U+237C is Azimuth](https://ionathan.ch/2026/02/16/angzarr.html)
* [2026-03-11, 02:13:47](https://lobste.rs/s/ev2hsx/type_resolution_redesign_with_language) - [Type resolution redesign, with language changes to taste](https://ziglang.org/devlog/2026/#2026-03-10)
* [2026-03-11, 02:04:22](https://news.ycombinator.com/item?id=47331034) - [Writing my own text editor, and daily-driving it](https://blog.jsbarretto.com/post/text-editor)
* [2026-03-11, 01:53:01](https://lobste.rs/s/ufczx8/writing_my_own_text_editor_daily_driving) - [Writing my own text editor, and daily-driving it](https://blog.jsbarretto.com/post/text-editor)
* [2026-03-11, 01:24:47](https://news.ycombinator.com/item?id=47330836) - [Zig – Type Resolution Redesign and Language Changes](https://ziglang.org/devlog/2026/#2026-03-10)
* [2026-03-11, 01:00:00](https://developers.slashdot.org/story/26/03/10/2038225/tony-hoare-turing-award-winning-computer-scientist-behind-quicksort-dies-at-92?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tony Hoare, Turing Award-Winning Computer Scientist Behind QuickSort, Dies At 92](https://developers.slashdot.org/story/26/03/10/2038225/tony-hoare-turing-award-winning-computer-scientist-behind-quicksort-dies-at-92?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-10, 23:43:00](https://soylentnews.org/article.pl?sid=26/03/09/094202&amp;from=rss) - [Norwegian Gov&apos;t Consumer Watchdog Calls Out ‘Enshittification’ of Video Games, Connected Devices](https://soylentnews.org/article.pl?sid=26/03/09/094202&amp;from=rss)
* [2026-03-10, 23:07:47](https://lobste.rs/s/c3dfjr/cellpond_spatial_programming_without) - [Cellpond: Spatial programming without escape](https://www.youtube.com/watch?v=eQgxFuw8f1U)
* [2026-03-10, 23:00:00](https://it.slashdot.org/story/26/03/10/2022201/intel-demos-chip-to-compute-with-encrypted-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel Demos Chip To Compute With Encrypted Data](https://it.slashdot.org/story/26/03/10/2022201/intel-demos-chip-to-compute-with-encrypted-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-10, 22:38:37](https://lobste.rs/s/tiktds/ai_should_help_us_produce_better_code) - [AI should help us produce better code](https://simonwillison.net/guides/agentic-engineering-patterns/better-code/)
* [2026-03-10, 22:36:45](https://lobste.rs/s/6ctfpa/enamored_with_macy) - [Enamored with Macy](https://addisoncrump.info/research/enamored-with-macy/)
* [2026-03-10, 22:33:48](https://news.ycombinator.com/item?id=47329608) - [Universal vaccine against respiratory infections and allergens](https://med.stanford.edu/news/all-news/2026/02/universal-vaccine.html)
* [2026-03-10, 22:33:45](https://news.ycombinator.com/item?id=47329605) - [U+237C ⍼ Is Azimuth](https://ionathan.ch/2026/02/16/angzarr.html)
* [2026-03-10, 22:27:15](https://news.ycombinator.com/item?id=47329557) - [Cloudflare crawl endpoint](https://developers.cloudflare.com/changelog/post/2026-03-10-br-crawl-endpoint/)
* [2026-03-10, 22:00:00](https://yro.slashdot.org/story/26/03/10/2012222/amazon-wins-court-order-to-block-perplexitys-ai-shopping-bots?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Wins Court Order To Block Perplexity&apos;s AI Shopping Bots](https://yro.slashdot.org/story/26/03/10/2012222/amazon-wins-court-order-to-block-perplexitys-ai-shopping-bots?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-10, 21:12:44](https://lobste.rs/s/wvewpi/debian_decides_not_decide_on_ai_generated) - [Debian decides not to decide on AI-generated contributions](https://lwn.net/SubscriberLink/1061544/125f911834966dd0/)
* [2026-03-10, 21:00:00](https://news.slashdot.org/story/26/03/10/200253/silicon-valley-is-buzzing-about-this-new-idea-ai-compute-as-compensation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Silicon Valley Is Buzzing About This New Idea: AI Compute As Compensation](https://news.slashdot.org/story/26/03/10/200253/silicon-valley-is-buzzing-about-this-new-idea-ai-compute-as-compensation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-10, 20:12:41](https://lobste.rs/s/zzjjyo/llm_neuroanatomy_how_i_topped_ai) - [LLM Neuroanatomy: How I Topped the AI Leaderboard Without Changing a Single Weight](https://dnhkng.github.io/posts/rys/)
* [2026-03-10, 20:11:54](https://news.ycombinator.com/item?id=47328214) - [RISC-V Is Sloooow](https://marcin.juszkiewicz.com.pl/2026/03/10/risc-v-is-sloooow/)
* [2026-03-10, 20:00:00](https://mobile.slashdot.org/story/26/03/10/162222/att-outlines-250-billion-us-investment-plan-to-boost-infrastructure-in-ai-age?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AT&amp;amp;T Outlines $250 Billion US Investment Plan To Boost Infrastructure In AI Age](https://mobile.slashdot.org/story/26/03/10/162222/att-outlines-250-billion-us-investment-plan-to-boost-infrastructure-in-ai-age?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-10, 19:49:53](https://lobste.rs/s/ta3jjk/risc_v_is_sloooow) - [RISC-V is sloooow](https://marcin.juszkiewicz.com.pl/2026/03/10/risc-v-is-sloooow/)
* [2026-03-10, 19:09:46](https://news.ycombinator.com/item?id=47327559) - [Agents that run while I sleep](https://www.claudecodecamp.com/p/i-m-building-agents-that-run-while-i-sleep)
* [2026-03-10, 19:02:01](https://news.ycombinator.com/item?id=47327473) - [Mesh over Bluetooth LE, TCP, or Reticulum](https://github.com/torlando-tech/columba)
* [2026-03-10, 19:00:00](https://science.slashdot.org/story/26/03/10/1540242/ig-nobels-ceremony-moves-to-europe-indefinitely-citing-us-safety-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ig Nobels Ceremony Moves To Europe Indefinitely, Citing US Safety Concerns](https://science.slashdot.org/story/26/03/10/1540242/ig-nobels-ceremony-moves-to-europe-indefinitely-citing-us-safety-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-10, 18:57:00](https://soylentnews.org/article.pl?sid=26/03/09/0859227&amp;from=rss) - [The Slow Death of the Power User](https://soylentnews.org/article.pl?sid=26/03/09/0859227&amp;from=rss)
* [2026-03-10, 18:53:19](https://lobste.rs/s/8goxn3/llms_are_bad_at_vibing_specifications) - [LLMs are bad at vibing specifications](https://buttondown.com/hillelwayne/archive/llms-are-bad-at-vibing-specifications/)
* [2026-03-10, 18:26:39](https://news.ycombinator.com/item?id=47327015) - [FFmpeg-over-IP – Connect to remote FFmpeg servers](https://github.com/steelbrain/ffmpeg-over-ip)
* [2026-03-10, 18:00:00](https://developers.slashdot.org/story/26/03/10/0510223/openai-is-walking-away-from-expanding-its-stargate-data-center-with-oracle?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Is Walking Away From Expanding Its Stargate Data Center With Oracle](https://developers.slashdot.org/story/26/03/10/0510223/openai-is-walking-away-from-expanding-its-stargate-data-center-with-oracle?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-10, 17:14:52](https://news.ycombinator.com/item?id=47326101) - [Launch HN: RunAnywhere (YC W26) – Faster AI Inference on Apple Silicon](https://github.com/RunanywhereAI/rcli)
* [2026-03-10, 17:00:00](https://it.slashdot.org/story/26/03/10/0521258/claude-ai-finds-bugs-in-microsoft-ctos-40-year-old-apple-ii-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Claude AI Finds Bugs In Microsoft CTO&apos;s 40-Year-Old Apple II Code](https://it.slashdot.org/story/26/03/10/0521258/claude-ai-finds-bugs-in-microsoft-ctos-40-year-old-apple-ii-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-10, 16:00:00](https://tech.slashdot.org/story/26/03/10/1524229/meta-acquires-moltbook-the-social-network-for-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Acquires Moltbook, the Social Network For AI Agents](https://tech.slashdot.org/story/26/03/10/1524229/meta-acquires-moltbook-the-social-network-for-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-10, 15:45:04](https://lobste.rs/s/ysvfji/source_available_projects_their_ai) - [Source-available projects and their AI contribution policies](https://theconsensus.dev/p/2026/03/02/source-available-projects-and-their-ai-contribution-policies.html)
* [2026-03-10, 15:42:09](https://lobste.rs/s/lyktdk/tony_hoare_1934_2026) - [Tony Hoare (1934-2026)](https://blog.computationalcomplexity.org/2026/03/tony-hoare-1934-2026.html)
* [2026-03-10, 15:12:52](https://news.ycombinator.com/item?id=47324364) - [Surpassing vLLM with a Generated Inference Stack](https://infinity.inc/case-studies/qwen3-optimization)
* [2026-03-10, 15:08:05](https://news.ycombinator.com/item?id=47324296) - [Launch HN: Didit (YC W26) – Stripe for Identity Verification](https://news.ycombinator.com/item?id=47324296)
* [2026-03-10, 15:00:00](https://apple.slashdot.org/story/26/03/10/050253/german-publishers-push-regulators-to-fine-apple-over-app-tracking-transparency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [German Publishers Push Regulators To Fine Apple Over App Tracking Transparency](https://apple.slashdot.org/story/26/03/10/050253/german-publishers-push-regulators-to-fine-apple-over-app-tracking-transparency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-10, 14:53:13](https://news.ycombinator.com/item?id=47324087) - [Debian decides not to decide on AI-generated contributions](https://lwn.net/SubscriberLink/1061544/125f911834966dd0/)
* [2026-03-10, 14:50:16](https://news.ycombinator.com/item?id=47324054) - [Tony Hoare has died](https://blog.computationalcomplexity.org/2026/03/tony-hoare-1934-2026.html)
* [2026-03-10, 14:38:06](https://news.ycombinator.com/item?id=47323900) - [Meta acquires Moltbook](https://www.axios.com/2026/03/10/meta-facebook-moltbook-agent-social-network)
* [2026-03-10, 14:25:25](https://lobste.rs/s/t5dvs5/amazon_holds_engineering_meeting_about) - [Amazon holds engineering meeting about GenAI based outages](https://arstechnica.com/ai/2026/03/after-outages-amazon-to-make-senior-engineers-sign-off-on-ai-assisted-changes/)
* [2026-03-10, 14:10:00](https://soylentnews.org/article.pl?sid=26/03/08/1511250&amp;from=rss) - [Indigenous Peoples in the Amazon and Australia Share Some Ancestry](https://soylentnews.org/article.pl?sid=26/03/08/1511250&amp;from=rss)
* [2026-03-10, 14:05:15](https://lobste.rs/s/5mf3cb/rebasing_magit) - [Rebasing in Magit](https://entropicthoughts.com/rebasing-in-magit)
* [2026-03-10, 14:00:00](https://linux.slashdot.org/story/26/03/10/0450204/eqt-eyes-6-billion-sale-of-suse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EQT Eyes $6 Billion Sale of SUSE](https://linux.slashdot.org/story/26/03/10/0450204/eqt-eyes-6-billion-sale-of-suse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-10, 13:00:00](https://games.slashdot.org/story/26/03/10/0442249/many-international-game-developers-plan-to-skip-gdc-in-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Many International Game Developers Plan To Skip GDC In US](https://games.slashdot.org/story/26/03/10/0442249/many-international-game-developers-plan-to-skip-gdc-in-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-10, 12:55:54](https://lobste.rs/s/9nzeu7/madblog_turn_markdown_folder_into) - [Madblog: Turn a Markdown folder into a federated blog](https://blog.fabiomanganiello.com/article/Madblog-federated-blogging-from-markdown)
* [2026-03-10, 12:13:03](https://lobste.rs/s/cpqm9i/too_much_color) - [Too Much Color](https://www.keithcirkel.co.uk/too-much-color/)
* [2026-03-10, 11:51:21](https://lobste.rs/s/gh0mwq/nominal_types_webassembly) - [nominal types in webassembly](https://wingolog.org/archives/2026/03/10/nominal-types-in-webassembly)
* [2026-03-10, 10:07:13](https://lobste.rs/s/vkxmwj/redox_os_has_adopted_certificate_origin) - [Redox OS has adopted a Certificate of Origin policy and a strict no-LLM policy](https://gitlab.redox-os.org/redox-os/redox/-/blob/master/CONTRIBUTING.md)
* [2026-03-10, 10:00:00](https://yro.slashdot.org/story/26/03/09/236207/fbi-investigates-breach-that-may-have-hit-its-wiretapping-tools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FBI Investigates Breach That May Have Hit Its Wiretapping Tools](https://yro.slashdot.org/story/26/03/09/236207/fbi-investigates-breach-that-may-have-hit-its-wiretapping-tools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-10, 09:29:00](https://soylentnews.org/article.pl?sid=26/03/08/1510201&amp;from=rss) - [In 1985 Maxell Built a Bunch of Life-Size Robots for its Bad Floppy Ad](https://soylentnews.org/article.pl?sid=26/03/08/1510201&amp;from=rss)
* [2026-03-10, 08:51:15](https://lobste.rs/s/izprt4/evi_hard_fork_vim) - [EVi, a hard-fork of Vim](https://codeberg.org/NerdNextDoor/evi)
* [2026-03-10, 08:48:40](https://news.ycombinator.com/item?id=47320614) - [Levels of Agentic Engineering](https://www.bassimeledath.com/blog/levels-of-agentic-engineering)
* [2026-03-10, 08:47:35](https://lobste.rs/s/lsjk8m/dependency_tracking_is_hard) - [Dependency Tracking is Hard](https://daniel.haxx.se/blog/2026/03/10/dependency-tracking-is-hard/)
* [2026-03-10, 08:46:53](https://news.ycombinator.com/item?id=47320600) - [Yann LeCun raises $1B to build AI that understands the physical world](https://www.wired.com/story/yann-lecun-raises-dollar1-billion-to-build-ai-that-understands-the-physical-world/)
* [2026-03-10, 04:47:00](https://soylentnews.org/article.pl?sid=26/03/08/157253&amp;from=rss) - [Sam Altman Wonders: Should the Government Nationalize AGI?](https://soylentnews.org/article.pl?sid=26/03/08/157253&amp;from=rss)
* [2026-03-10, 03:34:52](https://news.ycombinator.com/item?id=47318830) - [EQT eyes potential $6B sale of Linux pioneer SUSE, sources say](https://www.reuters.com/business/eqt-eyes-potential-6-billion-sale-linux-pioneer-suse-sources-say-2026-03-09)
* [2026-03-10, 03:28:38](https://news.ycombinator.com/item?id=47318797) - [SSH Secret Menu](https://twitter.com/rebane2001/status/2031037389347406054)
* [2026-03-10, 02:32:31](https://lobste.rs/s/ckr3r2/do_illegible) - [Do the Illegible](https://ashwinsundar.com/posts/legibility-and-programming/)
* [2026-03-10, 00:02:00](https://soylentnews.org/article.pl?sid=26/03/08/154256&amp;from=rss) - [Charter Gets FCC Permission to Buy Cox and Become Largest ISP in the US](https://soylentnews.org/article.pl?sid=26/03/08/154256&amp;from=rss)
* [2026-03-09, 19:20:00](https://soylentnews.org/article.pl?sid=26/03/08/1456250&amp;from=rss) - [The New European Office Suite is a Private, Open-Source Alternative](https://soylentnews.org/article.pl?sid=26/03/08/1456250&amp;from=rss)
* [2026-03-09, 18:52:35](https://lobste.rs/s/flbwoi/ghostty_1_3_0) - [Ghostty 1.3.0](https://ghostty.org/docs/install/release-notes/1-3-0)
* [2026-03-09, 14:35:00](https://soylentnews.org/article.pl?sid=26/03/08/1446203&amp;from=rss) - [Time Zones vs. Mean Solar Time](https://soylentnews.org/article.pl?sid=26/03/08/1446203&amp;from=rss)
* [2026-03-09, 09:52:00](https://soylentnews.org/article.pl?sid=26/03/07/1635228&amp;from=rss) - [Claude Code Deletes Developers&apos; Production Setup, Including its Database and Snapshots](https://soylentnews.org/article.pl?sid=26/03/07/1635228&amp;from=rss)
* [2026-03-09, 05:10:00](https://soylentnews.org/article.pl?sid=26/03/07/1632227&amp;from=rss) - [Open Source Registries Don&apos;t Have Enough Money to Implement Basic Security](https://soylentnews.org/article.pl?sid=26/03/07/1632227&amp;from=rss)
* [2026-03-09, 00:24:00](https://soylentnews.org/article.pl?sid=26/03/07/1629233&amp;from=rss) - [Roundup:  OS-level Age Verification Laws](https://soylentnews.org/article.pl?sid=26/03/07/1629233&amp;from=rss)
* [2026-03-08, 19:41:00](https://soylentnews.org/article.pl?sid=26/03/07/1624228&amp;from=rss) - [‘What Matters More To Employers, Education Or Experience?’ Asks AI Expert](https://soylentnews.org/article.pl?sid=26/03/07/1624228&amp;from=rss)
* [2026-03-08, 14:57:00](https://soylentnews.org/politics/article.pl?sid=26/03/06/1549257&amp;from=rss) - [Tech Industry is in Tariff Hell, Even If Refunds Are Automated](https://soylentnews.org/politics/article.pl?sid=26/03/06/1549257&amp;from=rss)
* [2026-03-08, 10:51:54](https://news.ycombinator.com/item?id=47296284) - [Pike: To Exit or Not to Exit](https://tomjohnell.com/pike-solving-the-should-we-stop-here-or-gamble-on-the-next-exit-problem/)
* [2026-03-08, 10:13:00](https://soylentnews.org/article.pl?sid=26/03/06/1545254&amp;from=rss) - [Would Aliens Do Physics, or is Science a Human Invention?](https://soylentnews.org/article.pl?sid=26/03/06/1545254&amp;from=rss)
* [2026-03-08, 09:27:34](https://news.ycombinator.com/item?id=47295855) - [Julia Snail – An Emacs Development Environment for Julia Like Clojure&apos;s Cider](https://github.com/gcv/julia-snail)
* [2026-03-08, 08:37:02](https://news.ycombinator.com/item?id=47295647) - [When the chain becomes the product: Seven years inside a token-funded venture](https://markmhendrickson.com/posts/when-the-chain-becomes-the-product/)
* [2026-03-08, 05:24:00](https://soylentnews.org/article.pl?sid=26/03/06/1541249&amp;from=rss) - [Lawsuit: Google Gemini Sent Man on Violent Missions, Set Suicide “Countdown”](https://soylentnews.org/article.pl?sid=26/03/06/1541249&amp;from=rss)
* [2026-03-08, 01:20:05](https://news.ycombinator.com/item?id=47293337) - [Roblox is minting teen millionaires](https://www.bloomberg.com/news/articles/2026-03-06/roblox-s-teen-millionaires-are-disrupting-the-gaming-industry)
* [2026-03-08, 00:39:00](https://soylentnews.org/article.pl?sid=26/03/06/1538243&amp;from=rss) - [Clueless Cops Post Seized Crypto Wallet Password. $5M Quickly Stolen.](https://soylentnews.org/article.pl?sid=26/03/06/1538243&amp;from=rss)
* [2026-03-07, 21:18:11](https://news.ycombinator.com/item?id=47291574) - [Building a TB-303 from Scratch](https://loopmaster.xyz/tutorials/tb303-from-scratch)
* [2026-03-07, 19:55:00](https://soylentnews.org/article.pl?sid=26/03/06/1533251&amp;from=rss) - [Congress Extends ISS and Tells NASA to Get Moving on Private Space Stations](https://soylentnews.org/article.pl?sid=26/03/06/1533251&amp;from=rss)
* [2026-03-07, 15:07:00](https://soylentnews.org/article.pl?sid=26/03/06/1338239&amp;from=rss) - [Starlink Mobile Teases ‘5G Speeds From Space With 100X the Data Density’](https://soylentnews.org/article.pl?sid=26/03/06/1338239&amp;from=rss)
* [2026-03-07, 10:21:00](https://soylentnews.org/article.pl?sid=26/03/06/1335212&amp;from=rss) - [What Crystals Older Than the Sun Reveal About the Start of the Solar System](https://soylentnews.org/article.pl?sid=26/03/06/1335212&amp;from=rss)
* [2026-03-07, 05:40:00](https://soylentnews.org/article.pl?sid=26/03/06/1321207&amp;from=rss) - [Holy C Batman, He Built an Operating System!](https://soylentnews.org/article.pl?sid=26/03/06/1321207&amp;from=rss)
* [2026-03-07, 03:55:28](https://news.ycombinator.com/item?id=47284328) - [Support for Aquantia AQC113 and AQC113C Ethernet Controllers on FreeBSD](https://github.com/Aquantia/aqtion-freebsd/issues/32)
* [2026-03-07, 00:53:00](https://soylentnews.org/article.pl?sid=26/03/05/2316254&amp;from=rss) - [vscreen: A Real Browser for AI Agents, Streamed Live via WebRTC](https://soylentnews.org/article.pl?sid=26/03/05/2316254&amp;from=rss)
