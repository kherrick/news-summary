# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Computing

* [Claude Is Connecting Directly To Your Personal Apps](https://tech.slashdot.org/story/26/04/24/066231/claude-is-connecting-directly-to-your-personal-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) explores how Claude, an advanced AI, is integrating further with personal applications to enhance user experience. [Comments](https://news.ycombinator.com/item?id=47889030)

* [Show HN: How LLMs Work – Interactive visual guide based on Karpathy's lecture](https://ynarwal.github.io/how-llms-work/) offers an interactive guide to understand large language models based on a Karpathy lecture. [Comments](https://news.ycombinator.com/item?id=47886517)

* [Spinel: Ruby AOT Native Compiler](https://github.com/matz/spinel) introduces a new ahead-of-time compiler for the Ruby language. [Comments](https://news.ycombinator.com/item?id=47887334)

* [Shibuya – Haskell Data Pipelines](https://github.com/shinzui/shibuya) showcases a tool for building data pipelines using Haskell. [Comments](https://lobste.rs/s/oyj3nd/shibuya_haskell_data_pipelines)

* [Pure Borrow: Linear Haskell Meets Rust-Style Borrowing](https://discourse.haskell.org/t/pure-borrow-linear-haskell-meets-rust-style-borrowing/13975) discusses the intersection of Haskell's linear types and Rust's borrowing model. [Comments](https://lobste.rs/s/esidgp/pure_borrow_linear_haskell_meets_rust)

* [TorchTPU: Running PyTorch Natively on TPUs at Google Scale](https://developers.googleblog.com/torchtpu-running-pytorch-natively-on-tpus-at-google-scale/) highlights PyTorch's capabilities on Google's tensor processing units. [Comments](https://news.ycombinator.com/item?id=47881786)

* [raylib v6.0](https://github.com/raysan5/raylib/releases/tag/6.0) announces the latest update to a simple game programming library aimed at beginners. [Comments](https://lobste.rs/s/eiwtub/raylib_v6_0)

## Social and Ethical Issues in Technology

* [The Era of Citizens United Could Be Nearing Its End](https://jacobin.com/2026/04/citizens-united-electoral-corruption-case) examines the future of Citizens United and its impact on electoral corruption. [Comments](https://news.ycombinator.com/item?id=47889664)

* [The Rich and Powerful Want to Live Forever. What If They Could?](https://www.nytimes.com/2026/04/24/magazine/eternal-life-longevity-world-leaders.html) explores the ethical implications of life extension technologies targeting the elite. [Comments](https://news.ycombinator.com/item?id=47889488)

* [Habitual coffee intake shapes the microbiome, modifies physiology and cognition](https://www.nature.com/articles/s41467-026-71264-8) presents research on how consistent coffee consumption impacts health beyond caffeine. [Comments](https://news.ycombinator.com/item?id=47885377)

* [UK Biobank leak: Health details of 500 000 people are offered for sale](https://www.bmj.com/content/393/bmj.s781) reports on a significant data breach involving sensitive medical records. [Comments](https://news.ycombinator.com/item?id=47888557)

* [New Gas-Powered Data Centers Could Emit More Greenhouse Gases Than Entire Nations](https://hardware.slashdot.org/story/26/04/23/2110220/new-gas-powered-data-centers-could-emit-more-greenhouse-gases-than-entire-nations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) discusses the environmental impact of new data center architecture. [Comments](https://news.ycombinator.com/item?id=47884971)

## Innovation in Science and Engineering

* [NASA Inspector Fears New Spacesuits Won't be Ready for Moon Landing](https://soylentnews.org/article.pl?sid=26/04/23/1139251&amp;from=rss) highlights concerns about developing spacesuit technology required for the next lunar mission. [Comments](https://soylentnews.org/article.pl?sid=26/04/23/1139251&amp;from=rss)

* [Scientists Load Quantum Computer With First Complete Genome to Crack Biology's 'Impossible' Puzzle](https://soylentnews.org/article.pl?sid=26/04/23/1112242&amp;from=rss) announces a breakthrough in the application of quantum computing for genome analysis. [Comments](https://soylentnews.org/article.pl?sid=26/04/23/1112242&amp;from=rss)

* [Sperm Whales Speak With a Complex Alphabet and Even Have ‘Vowels,’ Study Finds](https://soylentnews.org/article.pl?sid=26/04/20/0233208&amp;from=rss) reveals groundbreaking discoveries in the communication methods of sperm whales. [Comments](https://soylentnews.org/article.pl?sid=26/04/20/0233208&amp;from=rss)

* [The NAND Gate of Continuous Math](https://soylentnews.org/article.pl?sid=26/04/21/2358226&amp;from=rss) explores mathematical principles analogous to computer science fundamental constructs. [Comments](https://soylentnews.org/article.pl?sid=26/04/21/2358226&amp;from=rss)

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

* [2026-04-24, 13:05:02](https://news.ycombinator.com/item?id=47889664) - [The Era of Citizens United Could Be Nearing Its End](https://jacobin.com/2026/04/citizens-united-electoral-corruption-case)
* [2026-04-24, 12:48:56](https://news.ycombinator.com/item?id=47889488) - [The Rich and Powerful Want to Live Forever. What If They Could?](https://www.nytimes.com/2026/04/24/magazine/eternal-life-longevity-world-leaders.html)
* [2026-04-24, 12:27:18](https://news.ycombinator.com/item?id=47889279) - [The operating cost of adult and gambling startups](https://orchidfiles.com/stigma-is-a-tax-on-every-operational-decision/)
* [2026-04-24, 11:58:39](https://news.ycombinator.com/item?id=47889030) - [Aspartame is not that bad?](https://dynomight.net/aspartame/)
* [2026-04-24, 11:32:00](https://soylentnews.org/article.pl?sid=26/04/23/1143221&amp;from=rss) - [This Pasta Sauce Wants to Record Your Family](https://soylentnews.org/article.pl?sid=26/04/23/1143221&amp;from=rss)
* [2026-04-24, 11:09:36](https://news.ycombinator.com/item?id=47888557) - [UK Biobank leak: Health details of 500 000 people are offered for sale](https://www.bmj.com/content/393/bmj.s781)
* [2026-04-24, 11:00:00](https://tech.slashdot.org/story/26/04/24/066231/claude-is-connecting-directly-to-your-personal-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Claude Is Connecting Directly To Your Personal Apps](https://tech.slashdot.org/story/26/04/24/066231/claude-is-connecting-directly-to-your-personal-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-24, 10:58:45](https://news.ycombinator.com/item?id=47888465) - [Hear your agent suffer through your code](https://github.com/AndrewVos/endless-toil)
* [2026-04-24, 10:48:14](https://news.ycombinator.com/item?id=47888372) - [How to be anti-social – a guide to incoherent and isolating social experiences](https://nate.leaflet.pub/3mk4xkaxobc2p)
* [2026-04-24, 10:45:42](https://lobste.rs/s/vksnyl/tribe_has_outlive_model) - [The Tribe Has to Outlive the Model](https://christophermeiklejohn.com/ai/zabriskie/agents/reliability/2026/04/23/the-tribe-has-to-outlive-the-model.html)
* [2026-04-24, 10:44:09](https://news.ycombinator.com/item?id=47888337) - [nowhere: an entire website encoded in a URL](https://hostednowhere.com/)
* [2026-04-24, 10:23:05](https://lobste.rs/s/zroip2/hire_based_on_conversation_about_code_not) - [Hire based on the conversation about code, not the code itself](https://dbarabashh.com/thoughts-and-experience/hire-for-the-conversation-not-the-code)
* [2026-04-24, 10:13:26](https://news.ycombinator.com/item?id=47888124) - [Mounting tar archives as a filesystem in WebAssembly](https://jeroen.github.io/notes/webassembly-tar/)
* [2026-04-24, 10:02:19](https://lobste.rs/s/qtytfe/sloppy_copies) - [Sloppy Copies](https://www.markround.com/blog/2026/04/19/sloppy-copies/)
* [2026-04-24, 09:17:57](https://news.ycombinator.com/item?id=47887683) - [S. Korea police arrest man over AI image of runaway wolf that misled authorities](https://www.bbc.com/news/articles/c4gx1n0dl9no)
* [2026-04-24, 08:28:47](https://news.ycombinator.com/item?id=47887334) - [Spinel: Ruby AOT Native Compiler](https://github.com/matz/spinel)
* [2026-04-24, 08:15:21](https://lobste.rs/s/oyj3nd/shibuya_haskell_data_pipelines) - [Shibuya – Haskell Data Pipelines](https://github.com/shinzui/shibuya)
* [2026-04-24, 07:22:31](https://news.ycombinator.com/item?id=47886773) - [Composition Shouldn&apos;t be this Hard](https://www.cambra.dev/blog/announcement/)
* [2026-04-24, 07:01:08](https://lobste.rs/s/esidgp/pure_borrow_linear_haskell_meets_rust) - [Pure Borrow: Linear Haskell Meets Rust-Style Borrowing](https://discourse.haskell.org/t/pure-borrow-linear-haskell-meets-rust-style-borrowing/13975)
* [2026-04-24, 07:00:00](https://mobile.slashdot.org/story/26/04/24/0617244/fccs-foreign-made-router-ban-expands-to-portable-wi-fi-hotspot-devices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FCC&apos;s Foreign-Made Router Ban Expands To Portable Wi-Fi Hotspot Devices](https://mobile.slashdot.org/story/26/04/24/0617244/fccs-foreign-made-router-ban-expands-to-portable-wi-fi-hotspot-devices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-24, 06:51:00](https://soylentnews.org/article.pl?sid=26/04/23/1139251&amp;from=rss) - [NASA Inspector Fears New Spacesuits Won&apos;t be Ready for Moon Landing](https://soylentnews.org/article.pl?sid=26/04/23/1139251&amp;from=rss)
* [2026-04-24, 06:48:53](https://news.ycombinator.com/item?id=47886517) - [Show HN: How LLMs Work – Interactive visual guide based on Karpathy&apos;s lecture](https://ynarwal.github.io/how-llms-work/)
* [2026-04-24, 06:16:47](https://news.ycombinator.com/item?id=47886272) - [Show HN: Gova – The declarative GUI framework for Go](https://github.com/NV404/gova)
* [2026-04-24, 04:48:54](https://news.ycombinator.com/item?id=47885668) - [Familiarity is the enemy: On why Enterprise systems have failed for 60 years](https://felixbarbalet.com/familiarity-is-the-enemy/)
* [2026-04-24, 04:04:42](https://news.ycombinator.com/item?id=47885377) - [Habitual coffee intake shapes the microbiome, modifies physiology and cognition](https://www.nature.com/articles/s41467-026-71264-8)
* [2026-04-24, 03:30:00](https://hardware.slashdot.org/story/26/04/23/2110220/new-gas-powered-data-centers-could-emit-more-greenhouse-gases-than-entire-nations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Gas-Powered Data Centers Could Emit More Greenhouse Gases Than Entire Nations](https://hardware.slashdot.org/story/26/04/23/2110220/new-gas-powered-data-centers-could-emit-more-greenhouse-gases-than-entire-nations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-24, 03:01:21](https://news.ycombinator.com/item?id=47884971) - [DeepSeek v4](https://api-docs.deepseek.com/)
* [2026-04-24, 02:26:23](https://news.ycombinator.com/item?id=47884768) - [Why I Write (1946)](https://www.orwellfoundation.com/the-orwell-foundation/orwell/essays-and-other-works/why-i-write/)
* [2026-04-24, 02:13:47](https://lobste.rs/s/crspm5/vibin_with_erlang) - [Vibin&apos; With Erlang](https://blog.whenhen.com/posts/vibin-with-erlang.html)
* [2026-04-24, 02:05:00](https://soylentnews.org/article.pl?sid=26/04/23/1118227&amp;from=rss) - [Linux 7.1 Will Have an Optional New NTFS Driver](https://soylentnews.org/article.pl?sid=26/04/23/1118227&amp;from=rss)
* [2026-04-24, 01:59:16](https://lobste.rs/s/g9jlyl/what_are_best_developer_tools_built) - [What are the best developer tools built around Markdown?](https://lobste.rs/s/g9jlyl/what_are_best_developer_tools_built)
* [2026-04-24, 01:50:57](https://lobste.rs/s/emcmxd/llm_rb_is_ruby_s_most_capable_ai_runtime) - [llm.rb is Ruby&apos;s most capable AI runtime](https://github.com/llmrb/llm.rb#readme)
* [2026-04-24, 00:12:47](https://lobste.rs/s/fbfu56/how_hard_is_it_open_file) - [How Hard Is It To Open a File?](https://blog.sebastianwick.net/posts/how-hard-is-it-to-open-a-file/)
* [2026-04-23, 23:27:12](https://lobste.rs/s/p76mlf/box_save_memory) - [Box to save memory](https://dystroy.org/blog/box-to-save-memory/)
* [2026-04-23, 23:00:00](https://yro.slashdot.org/story/26/04/23/2051228/apple-stops-weirdly-storing-data-that-let-cops-spy-on-signal-chats?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Stops Weirdly Storing Data That Let Cops Spy On Signal Chats](https://yro.slashdot.org/story/26/04/23/2051228/apple-stops-weirdly-storing-data-that-let-cops-spy-on-signal-chats?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-23, 22:01:59](https://news.ycombinator.com/item?id=47882697) - [Show HN: Tolaria – Open-source macOS app to manage Markdown knowledge bases](https://github.com/refactoringhq/tolaria)
* [2026-04-23, 22:00:00](https://entertainment.slashdot.org/story/26/04/23/1940241/warner-bros-shareholders-approve-paramounts-81-billion-takeover?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Warner Bros Shareholders Approve Paramount&apos;s $81 Billion Takeover](https://entertainment.slashdot.org/story/26/04/23/1940241/warner-bros-shareholders-approve-paramounts-81-billion-takeover?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-23, 21:56:15](https://news.ycombinator.com/item?id=47882645) - [US special forces soldier arrested after allegedly winning $400k on Maduro raid](https://www.cnn.com/2026/04/23/politics/us-special-forces-soldier-arrested-maduro-raid-trade)
* [2026-04-23, 21:21:00](https://soylentnews.org/article.pl?sid=26/04/23/1112242&amp;from=rss) - [Scientists Load Quantum Computer With First Complete Genome to Crack Biology&apos;s &apos;Impossible&apos; Puzzle](https://soylentnews.org/article.pl?sid=26/04/23/1112242&amp;from=rss)
* [2026-04-23, 21:00:00](https://slashdot.org/story/26/04/23/1931220/openai-says-its-new-gpt-55-model-is-more-efficient-and-better-at-coding?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Says Its New GPT-5.5 Model Is More Efficient and Better At Coding](https://slashdot.org/story/26/04/23/1931220/openai-says-its-new-gpt-55-model-is-more-efficient-and-better-at-coding?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-23, 20:58:32](https://lobste.rs/s/9csbvp/configuring_firefox) - [Configuring Firefox](https://sciops.net/information/technology/firefox)
* [2026-04-23, 20:53:27](https://news.ycombinator.com/item?id=47881786) - [TorchTPU: Running PyTorch Natively on TPUs at Google Scale](https://developers.googleblog.com/torchtpu-running-pytorch-natively-on-tpus-at-google-scale/)
* [2026-04-23, 20:36:50](https://lobste.rs/s/eiwtub/raylib_v6_0) - [raylib v6.0](https://github.com/raysan5/raylib/releases/tag/6.0)
* [2026-04-23, 20:14:29](https://news.ycombinator.com/item?id=47881198) - [Using the internet like it&apos;s 1999](https://joshblais.com/blog/using-the-internet-like-its-1999/)
* [2026-04-23, 20:00:00](https://meta.slashdot.org/story/26/04/23/1917223/meta-is-laying-off-10-of-its-workforce?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Is Laying Off 10% of Its Workforce](https://meta.slashdot.org/story/26/04/23/1917223/meta-is-laying-off-10-of-its-workforce?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-23, 19:26:51](https://lobste.rs/s/2mpjlh/ubuntu_26_04_lts_release) - [Ubuntu 26.04 LTS Release](https://documentation.ubuntu.com/release-notes/26.04/)
* [2026-04-23, 19:00:00](https://it.slashdot.org/story/26/04/23/1646252/france-confirms-data-breach-at-government-agency-that-manages-citizens-ids?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [France Confirms Data Breach At Government Agency That Manages Citizens&apos; IDs](https://it.slashdot.org/story/26/04/23/1646252/france-confirms-data-breach-at-government-agency-that-manages-citizens-ids?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-23, 18:55:32](https://news.ycombinator.com/item?id=47879986) - [Meta tells staff it will cut 10% of jobs](https://www.bloomberg.com/news/articles/2026-04-23/meta-tells-staff-it-will-cut-10-of-jobs-in-push-for-efficiency)
* [2026-04-23, 18:01:39](https://news.ycombinator.com/item?id=47879092) - [GPT-5.5](https://openai.com/index/introducing-gpt-5-5/)
* [2026-04-23, 18:00:00](https://apple.slashdot.org/story/26/04/23/1642215/tim-cook-calls-apple-maps-launch-his-first-really-big-mistake-as-ceo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tim Cook Calls Apple Maps Launch His &apos;First Really Big Mistake&apos; as CEO](https://apple.slashdot.org/story/26/04/23/1642215/tim-cook-calls-apple-maps-launch-his-first-really-big-mistake-as-ceo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-23, 17:48:38](https://news.ycombinator.com/item?id=47878905) - [An update on recent Claude Code quality reports](https://www.anthropic.com/engineering/april-23-postmortem)
* [2026-04-23, 17:20:42](https://lobste.rs/s/9p8j3s/security_issues_found_within_rust) - [Security issues found within rust-coreutils](https://discourse.ubuntu.com/t/an-update-on-rust-coreutils/80773)
* [2026-04-23, 17:00:00](https://slashdot.org/story/26/04/23/1628235/microsoft-plans-first-ever-voluntary-employee-buyout?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Plans First-Ever Voluntary Employee Buyout](https://slashdot.org/story/26/04/23/1628235/microsoft-plans-first-ever-voluntary-employee-buyout?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-23, 16:55:13](https://news.ycombinator.com/item?id=47878117) - [MeshCore development team splits over trademark dispute and AI-generated code](https://blog.meshcore.io/2026/04/23/the-split)
* [2026-04-23, 16:34:00](https://soylentnews.org/article.pl?sid=26/04/22/0215210&amp;from=rss) - [Europe&apos;s EV Sales Jump 51% as Iran War Sends Gasoline Prices Soaring](https://soylentnews.org/article.pl?sid=26/04/22/0215210&amp;from=rss)
* [2026-04-23, 16:27:07](https://news.ycombinator.com/item?id=47877715) - [My phone replaced a brass plug](https://drobinin.com/posts/my-phone-replaced-a-brass-plug/)
* [2026-04-23, 16:23:43](https://lobste.rs/s/nlaxri/serving_for_you_feed) - [Serving the For You Feed](https://atproto.com/blog/serving-the-for-you-feed)
* [2026-04-23, 16:15:00](https://yro.slashdot.org/story/26/04/23/1611254/new-york-sues-coinbase-and-gemini-seeking-to-halt-unlicensed-prediction-market-businesses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New York Sues Coinbase and Gemini, Seeking To Halt Unlicensed Prediction Market Businesses](https://yro.slashdot.org/story/26/04/23/1611254/new-york-sues-coinbase-and-gemini-seeking-to-halt-unlicensed-prediction-market-businesses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-23, 16:13:36](https://lobste.rs/s/izqocw/meshcore_io_why_split) - [Meshcore.io - Why The Split?](https://blog.meshcore.io/2026/04/23/the-split)
* [2026-04-23, 15:26:22](https://lobste.rs/s/x79usb/bitwarden_cli_compromised_ongoing) - [Bitwarden CLI Compromised in Ongoing Checkmarx Supply Chain](https://socket.dev/blog/bitwarden-cli-compromised)
* [2026-04-23, 15:00:00](https://hardware.slashdot.org/story/26/04/23/0442209/intel-lands-tesla-as-first-major-customer-for-14a-chip-technology?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel Lands Tesla As First Major Customer For 14A Chip Technology](https://hardware.slashdot.org/story/26/04/23/0442209/intel-lands-tesla-as-first-major-customer-for-14a-chip-technology?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-23, 14:17:08](https://news.ycombinator.com/item?id=47876043) - [Bitwarden CLI compromised in ongoing Checkmarx supply chain campaign](https://socket.dev/blog/bitwarden-cli-compromised)
* [2026-04-23, 13:58:03](https://news.ycombinator.com/item?id=47875843) - [UK Biobank health data keeps ending up on GitHub](https://biobank.rocher.lc)
* [2026-04-23, 11:57:45](https://lobste.rs/s/3l5gw0/email_could_have_been_x_400_times_better) - [Email could have been X.400 times better](https://buttondown.com/blog/x400-vs-smtp-email)
* [2026-04-23, 11:50:00](https://soylentnews.org/article.pl?sid=26/04/22/023218&amp;from=rss) - [Bluetooth Tracker Hidden in a Postcard and Mailed to a Warship Exposed its Location](https://soylentnews.org/article.pl?sid=26/04/22/023218&amp;from=rss)
* [2026-04-23, 11:35:57](https://lobste.rs/s/tzws72/single_pass_palette_refinement_ordered) - [Single-pass palette refinement and ordered dithering](https://30fps.net/pages/bayer-order-online-kmeans/)
* [2026-04-23, 11:00:00](https://news.slashdot.org/story/26/04/23/0432254/53-nations-gather-to-plan-a-fossil-fuel-phaseout?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [53 Nations Gather To Plan a Fossil Fuel Phaseout](https://news.slashdot.org/story/26/04/23/0432254/53-nations-gather-to-plan-a-fossil-fuel-phaseout?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-23, 10:46:49](https://lobste.rs/s/vr4rsc/who_even_uses_jemalloc_2026_anyway_many) - [Who even uses jemalloc in 2026 anyway? (many major projects)](https://theconsensus.dev/p/2026/04/16/who-even-uses-jemalloc-anyway.html)
* [2026-04-23, 08:42:44](https://lobste.rs/s/yghhn6/i_am_building_cloud) - [I am building a cloud](https://crawshaw.io/blog/building-a-cloud)
* [2026-04-23, 08:22:39](https://lobste.rs/s/l4eo1q/linux_desktop_x86_64_assembly) - [A Linux desktop in x86_64 Assembly](https://isene.org/2026/04/MyTools.html)
* [2026-04-23, 07:07:00](https://soylentnews.org/article.pl?sid=26/04/21/2358226&amp;from=rss) - [The NAND Gate of Continuous Math](https://soylentnews.org/article.pl?sid=26/04/21/2358226&amp;from=rss)
* [2026-04-23, 07:00:00](https://tech.slashdot.org/story/26/04/22/2314218/your-phones-next-speed-boost-may-come-from-magnetic-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Your Phone&apos;s Next Speed Boost May Come From Magnetic Chips](https://tech.slashdot.org/story/26/04/22/2314218/your-phones-next-speed-boost-may-come-from-magnetic-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-23, 04:04:05](https://lobste.rs/s/t04nvc/how_heck_does_shazam_work) - [How The Heck Does Shazam Work?](https://perthirtysix.com/how-the-heck-does-shazam-work)
* [2026-04-23, 03:30:00](https://news.slashdot.org/story/26/04/22/2345209/nearly-half-of-us-children-are-breathing-dangerous-levels-of-air-pollution?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nearly Half of US Children Are Breathing Dangerous Levels of Air Pollution](https://news.slashdot.org/story/26/04/22/2345209/nearly-half-of-us-children-are-breathing-dangerous-levels-of-air-pollution?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-23, 02:53:48](https://lobste.rs/s/5jkwmc/borrow_checking_without_type_checking) - [Borrow-checking without type-checking](https://www.scattered-thoughts.net/writing/borrow-checking-without-type-checking/)
* [2026-04-23, 02:22:00](https://soylentnews.org/article.pl?sid=26/04/21/2355256&amp;from=rss) - [WebinarTV’s Rampant Scraping of Online Meetings ](https://soylentnews.org/article.pl?sid=26/04/21/2355256&amp;from=rss)
* [2026-04-22, 21:39:00](https://soylentnews.org/article.pl?sid=26/04/21/2350253&amp;from=rss) - [How Museums Can Use Biomolecular Archaeology to Bring Ancient Scents to Life](https://soylentnews.org/article.pl?sid=26/04/21/2350253&amp;from=rss)
* [2026-04-22, 18:39:32](https://lobste.rs/s/sz3gab/what_are_your_favorite_emacs_packages) - [What are your favorite Emacs packages?](https://lobste.rs/s/sz3gab/what_are_your_favorite_emacs_packages)
* [2026-04-22, 16:53:00](https://soylentnews.org/article.pl?sid=26/04/20/0241235&amp;from=rss) - [Tech Companies Are Trying to Neuter Colorado&apos;s Landmark Right-to-Repair Law](https://soylentnews.org/article.pl?sid=26/04/20/0241235&amp;from=rss)
* [2026-04-22, 16:29:25](https://news.ycombinator.com/item?id=47865868) - [Alberta startup sells no-tech tractors for half price](https://wheelfront.com/this-alberta-startup-sells-no-tech-tractors-for-half-price/)
* [2026-04-22, 12:09:00](https://soylentnews.org/article.pl?sid=26/04/20/0233208&amp;from=rss) - [Sperm Whales Speak With a Complex Alphabet and Even Have ‘Vowels,’ Study Finds](https://soylentnews.org/article.pl?sid=26/04/20/0233208&amp;from=rss)
* [2026-04-22, 07:27:00](https://soylentnews.org/article.pl?sid=26/04/20/0227209&amp;from=rss) - [The Friction We Forgot](https://soylentnews.org/article.pl?sid=26/04/20/0227209&amp;from=rss)
* [2026-04-22, 02:34:00](https://soylentnews.org/article.pl?sid=26/04/20/0228241&amp;from=rss) - [Total Solar Eclipse Led to Seismic Quiet for Cities Within its Path](https://soylentnews.org/article.pl?sid=26/04/20/0228241&amp;from=rss)
* [2026-04-21, 21:50:00](https://soylentnews.org/article.pl?sid=26/04/19/1341258&amp;from=rss) - [A Fresh Scar on the Moon: Newly Discovered Crater Reveals Recent Impact](https://soylentnews.org/article.pl?sid=26/04/19/1341258&amp;from=rss)
* [2026-04-21, 17:05:00](https://soylentnews.org/article.pl?sid=26/04/19/1338217&amp;from=rss) - [Europol Launches Operation PowerOFF — Warns 75,000 DDoS Users and Takes Down 53 Domains](https://soylentnews.org/article.pl?sid=26/04/19/1338217&amp;from=rss)
* [2026-04-21, 12:19:00](https://soylentnews.org/article.pl?sid=26/04/19/1333258&amp;from=rss) - [Soviet CDs and CD Players Existed, and They Were Strange](https://soylentnews.org/article.pl?sid=26/04/19/1333258&amp;from=rss)
* [2026-04-21, 07:32:00](https://soylentnews.org/article.pl?sid=26/04/19/125219&amp;from=rss) - [Chinese Carmaker Patents Voice-Controlled &apos;in-Vehicle Toilet&apos;](https://soylentnews.org/article.pl?sid=26/04/19/125219&amp;from=rss)
* [2026-04-21, 02:47:00](https://soylentnews.org/article.pl?sid=26/04/19/120245&amp;from=rss) - [In the Face of Rampant AI, is ‘Data Poisoning’ a New Form of Civil Disobedience?](https://soylentnews.org/article.pl?sid=26/04/19/120245&amp;from=rss)
* [2026-04-20, 22:02:00](https://soylentnews.org/article.pl?sid=26/04/19/1148259&amp;from=rss) - [The Quiet Colossus](https://soylentnews.org/article.pl?sid=26/04/19/1148259&amp;from=rss)
* [2026-04-20, 17:16:00](https://soylentnews.org/article.pl?sid=26/04/19/1147228&amp;from=rss) - [How Much Does Chatbot Bias Influence Users? A Lot, It Turns Out](https://soylentnews.org/article.pl?sid=26/04/19/1147228&amp;from=rss)
* [2026-04-20, 12:29:00](https://soylentnews.org/article.pl?sid=26/04/19/000236&amp;from=rss) - [Russia Hits European Thermal Power Plant in Attempted ‘Destructive’ Cyberattack](https://soylentnews.org/article.pl?sid=26/04/19/000236&amp;from=rss)
* [2026-04-20, 07:43:00](https://soylentnews.org/article.pl?sid=26/04/18/2354201&amp;from=rss) - [How Two Motorola Transistors Became the World&apos;s Default NPNs](https://soylentnews.org/article.pl?sid=26/04/18/2354201&amp;from=rss)
* [2026-04-20, 03:01:00](https://soylentnews.org/article.pl?sid=26/04/18/2352244&amp;from=rss) - [10 Math Books That Sharpen Your Thinking](https://soylentnews.org/article.pl?sid=26/04/18/2352244&amp;from=rss)
