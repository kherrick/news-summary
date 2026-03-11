# [News Summary](https://kherrick.github.io/news-summary/)

## Scientific Discoveries

* [Ancient Clay Hidden Under Japan Caused Rupture That Triggered the 2011 Earthquake and Tsunami](https://soylentnews.org/article.pl?sid=26/03/09/096203&amp;from=rss) - A study reveals that ancient clay deposits under Japan contributed to the devastating 2011 earthquake and tsunami which caused large-scale destruction.

* [What Crystals Older Than the Sun Reveal About the Start of the Solar System](https://soylentnews.org/article.pl?sid=26/03/06/1335212&amp;from=rss) - Researchers analyze ancient crystals to unlock secrets about the early formation of our solar system.

## Artificial Intelligence and Technology

* [After Outages, Amazon To Make Senior Engineers Sign Off On AI-Assisted Changes](https://slashdot.org/story/26/03/10/212214/after-outages-amazon-to-make-senior-engineers-sign-off-on-ai-assisted-changes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Amazon reacts to recent outages by requiring senior engineers to approve AI-driven system changes, aiming to enhance reliability.

* [LLM Neuroanatomy: How I Topped the AI Leaderboard Without Changing a Single Weight](https://dnhkng.github.io/posts/rys/) - An innovative approach to maximize AI leaderboard performance without modifying model parameters.

* [Yann LeCun Raises $1B to Build AI That Understands the Physical World](https://www.wired.com/story/yann-lecun-raises-dollar1-billion-to-build-ai-that-understands-the-physical-world/) - AI expert Yann LeCun secures significant funding to develop AI capable of broad physical understanding.

* [Intel Demos Chip To Compute With Encrypted Data](https://it.slashdot.org/story/26/03/10/2022201/intel-demos-chip-to-compute-with-encrypted-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Intel showcases a groundbreaking chip capable of processing encrypted data directly, ensuring enhanced privacy and security.

## Tributes and Losses in Technology

* [Tony Hoare, Turing Award-Winning Computer Scientist Behind QuickSort, Dies At 92](https://developers.slashdot.org/story/26/03/10/2038225/tony-hoare-turing-award-winning-computer-scientist-behind-quicksort-dies-at-92?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A tribute to computer science pioneer Tony Hoare, remembered for his significant contributions and achievements, including the creation of QuickSort.

## Innovations in Programming and Development

* [Writing my own text editor, and daily-driving it](https://blog.jsbarretto.com/post/text-editor) - The journey and insights of building and relying on a self-developed text editor for daily tasks.

* [Rebasing in Magit](https://entropicthoughts.com/rebasing-in-magit) - A guide to mastering rebasing with Magit, an Emacs mode for Git.

* [Meta Acquires Moltbook, the Social Network For AI Agents](https://tech.slashdot.org/story/26/03/10/1524229/meta-acquires-moltbook-the-social-network-for-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Meta acquires a platform fostering collaboration among AI agents.

## Notable Policy Decisions

* [Debian Decides Not to Decide on AI-Generated Contributions](https://lwn.net/SubscriberLink/1061544/125f911834966dd0/) - The Debian project opts for ambiguity regarding the inclusion of AI-generated content within its contributions.

* [Amazon Wins Court Order To Block Perplexity's AI Shopping Bots](https://yro.slashdot.org/story/26/03/10/2012222/amazon-wins-court-order-to-block-perplexitys-ai-shopping-bots?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Amazon secures a legal victory against unauthorized AI bots impacting its e-commerce operations.

## Social and Ethical Implications of Technology

* [Online Age-Verification Tools for Child Safety Are Surveilling Adults](https://www.cnbc.com/2026/03/08/social-media-child-safety-internet-ai-surveillance.html) - The growing concern over age-verification systems and their impact on personal privacy.

* [Universal Vaccine Against Respiratory Infections and Allergens](https://med.stanford.edu/news/all-news/2026/02/universal-vaccine.html) - A significant medical breakthrough aims to combat a wide range of respiratory illnesses.

## Space and Science Fiction Innovations

* [Startup Wants To Launch a Space Mirror](https://science.slashdot.org/story/26/03/09/230222/startup-wants-to-launch-a-space-mirror?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - An ambitious venture seeks to harness a space mirror for countering climate change.

* [Congress Extends ISS and Tells NASA To Get Moving on Private Space Stations](https://soylentnews.org/article.pl?sid=26/03/06/1533251&amp;from=rss) - The US government supports extending the ISS while urging NASA to accelerate private space station development.

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

* [2026-03-11, 04:32:00](https://soylentnews.org/article.pl?sid=26/03/09/096203&amp;from=rss) - [Ancient Clay Hidden Under Japan Caused Rupture That Triggered the 2011 Earthquake and Tsunami](https://soylentnews.org/article.pl?sid=26/03/09/096203&amp;from=rss)
* [2026-03-11, 03:30:00](https://slashdot.org/story/26/03/10/212214/after-outages-amazon-to-make-senior-engineers-sign-off-on-ai-assisted-changes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [After Outages, Amazon To Make Senior Engineers Sign Off On AI-Assisted Changes](https://slashdot.org/story/26/03/10/212214/after-outages-amazon-to-make-senior-engineers-sign-off-on-ai-assisted-changes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-11, 02:13:47](https://lobste.rs/s/ev2hsx/type_resolution_redesign_with_language) - [Type resolution redesign, with language changes to taste](https://ziglang.org/devlog/2026/#2026-03-10)
* [2026-03-11, 02:04:22](https://news.ycombinator.com/item?id=47331034) - [Writing my own text editor, and daily-driving it](https://blog.jsbarretto.com/post/text-editor)
* [2026-03-11, 01:53:01](https://lobste.rs/s/ufczx8/writing_my_own_text_editor_daily_driving) - [Writing my own text editor, and daily-driving it](https://blog.jsbarretto.com/post/text-editor)
* [2026-03-11, 01:24:47](https://news.ycombinator.com/item?id=47330836) - [Zig – Type Resolution Redesign and Language Changes](https://ziglang.org/devlog/2026/#2026-03-10)
* [2026-03-11, 01:00:00](https://developers.slashdot.org/story/26/03/10/2038225/tony-hoare-turing-award-winning-computer-scientist-behind-quicksort-dies-at-92?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tony Hoare, Turing Award-Winning Computer Scientist Behind QuickSort, Dies At 92](https://developers.slashdot.org/story/26/03/10/2038225/tony-hoare-turing-award-winning-computer-scientist-behind-quicksort-dies-at-92?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-10, 23:43:00](https://soylentnews.org/article.pl?sid=26/03/09/094202&amp;from=rss) - [Norwegian Gov&apos;t Consumer Watchdog Calls Out ‘Enshittification’ of Video Games, Connected Devices](https://soylentnews.org/article.pl?sid=26/03/09/094202&amp;from=rss)
* [2026-03-10, 23:07:47](https://lobste.rs/s/c3dfjr/cellpond_spatial_programming_without) - [Cellpond: Spatial programming without escape](https://www.youtube.com/watch?v=eQgxFuw8f1U)
* [2026-03-10, 23:00:00](https://it.slashdot.org/story/26/03/10/2022201/intel-demos-chip-to-compute-with-encrypted-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel Demos Chip To Compute With Encrypted Data](https://it.slashdot.org/story/26/03/10/2022201/intel-demos-chip-to-compute-with-encrypted-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-10, 22:58:43](https://lobste.rs/s/1ygngg/embrace_uncertainty) - [Embrace the uncertainty](https://brittanyellich.com/embrace-the-uncertainty)
* [2026-03-10, 22:38:37](https://lobste.rs/s/tiktds/ai_should_help_us_produce_better_code) - [AI should help us produce better code](https://simonwillison.net/guides/agentic-engineering-patterns/better-code/)
* [2026-03-10, 22:36:45](https://lobste.rs/s/6ctfpa/enamored_with_macy) - [Enamored with Macy](https://addisoncrump.info/research/enamored-with-macy/)
* [2026-03-10, 22:33:48](https://news.ycombinator.com/item?id=47329608) - [Universal vaccine against respiratory infections and allergens](https://med.stanford.edu/news/all-news/2026/02/universal-vaccine.html)
* [2026-03-10, 22:33:45](https://news.ycombinator.com/item?id=47329605) - [U+237C ⍼ Is Azimuth](https://ionathan.ch/2026/02/16/angzarr.html)
* [2026-03-10, 22:27:15](https://news.ycombinator.com/item?id=47329557) - [Cloudflare crawl endpoint](https://developers.cloudflare.com/changelog/post/2026-03-10-br-crawl-endpoint/)
* [2026-03-10, 22:00:00](https://yro.slashdot.org/story/26/03/10/2012222/amazon-wins-court-order-to-block-perplexitys-ai-shopping-bots?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Wins Court Order To Block Perplexity&apos;s AI Shopping Bots](https://yro.slashdot.org/story/26/03/10/2012222/amazon-wins-court-order-to-block-perplexitys-ai-shopping-bots?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-10, 21:41:15](https://lobste.rs/s/imwkxe/unions_merged_into_dotnet_11_preview_3) - [Unions merged into dotnet 11 preview 3](https://github.com/dotnet/csharplang/blob/main/proposals/unions.md)
* [2026-03-10, 21:12:44](https://lobste.rs/s/wvewpi/debian_decides_not_decide_on_ai_generated) - [Debian decides not to decide on AI-generated contributions](https://lwn.net/SubscriberLink/1061544/125f911834966dd0/)
* [2026-03-10, 21:00:00](https://news.slashdot.org/story/26/03/10/200253/silicon-valley-is-buzzing-about-this-new-idea-ai-compute-as-compensation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Silicon Valley Is Buzzing About This New Idea: AI Compute As Compensation](https://news.slashdot.org/story/26/03/10/200253/silicon-valley-is-buzzing-about-this-new-idea-ai-compute-as-compensation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-10, 20:12:41](https://lobste.rs/s/zzjjyo/llm_neuroanatomy_how_i_topped_ai) - [LLM Neuroanatomy: How I Topped the AI Leaderboard Without Changing a Single Weight](https://dnhkng.github.io/posts/rys/)
* [2026-03-10, 20:11:54](https://news.ycombinator.com/item?id=47328214) - [RISC-V Is Sloooow](https://marcin.juszkiewicz.com.pl/2026/03/10/risc-v-is-sloooow/)
* [2026-03-10, 20:00:00](https://mobile.slashdot.org/story/26/03/10/162222/att-outlines-250-billion-us-investment-plan-to-boost-infrastructure-in-ai-age?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AT&amp;amp;T Outlines $250 Billion US Investment Plan To Boost Infrastructure In AI Age](https://mobile.slashdot.org/story/26/03/10/162222/att-outlines-250-billion-us-investment-plan-to-boost-infrastructure-in-ai-age?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-10, 19:56:52](https://news.ycombinator.com/item?id=47328034) - [Tell HN: Apple development certificate server seems down?](https://news.ycombinator.com/item?id=47328034)
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
* [2026-03-10, 16:45:35](https://lobste.rs/s/ktzbfa/i_built_programming_language_using) - [I built a programming language using Claude Code](https://ankursethi.com/blog/programming-language-claude-code/)
* [2026-03-10, 16:00:00](https://tech.slashdot.org/story/26/03/10/1524229/meta-acquires-moltbook-the-social-network-for-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Acquires Moltbook, the Social Network For AI Agents](https://tech.slashdot.org/story/26/03/10/1524229/meta-acquires-moltbook-the-social-network-for-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-10, 15:45:04](https://lobste.rs/s/ysvfji/source_available_projects_their_ai) - [Source-available projects and their AI contribution policies](https://theconsensus.dev/p/2026/03/02/source-available-projects-and-their-ai-contribution-policies.html)
* [2026-03-10, 15:42:09](https://lobste.rs/s/lyktdk/tony_hoare_1934_2026) - [Tony Hoare (1934-2026)](https://blog.computationalcomplexity.org/2026/03/tony-hoare-1934-2026.html)
* [2026-03-10, 15:08:05](https://news.ycombinator.com/item?id=47324296) - [Launch HN: Didit (YC W26) – Stripe for Identity Verification](https://news.ycombinator.com/item?id=47324296)
* [2026-03-10, 15:00:00](https://apple.slashdot.org/story/26/03/10/050253/german-publishers-push-regulators-to-fine-apple-over-app-tracking-transparency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [German Publishers Push Regulators To Fine Apple Over App Tracking Transparency](https://apple.slashdot.org/story/26/03/10/050253/german-publishers-push-regulators-to-fine-apple-over-app-tracking-transparency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-10, 14:53:13](https://news.ycombinator.com/item?id=47324087) - [Debian decides not to decide on AI-generated contributions](https://lwn.net/SubscriberLink/1061544/125f911834966dd0/)
* [2026-03-10, 14:50:16](https://news.ycombinator.com/item?id=47324054) - [Tony Hoare has died](https://blog.computationalcomplexity.org/2026/03/tony-hoare-1934-2026.html)
* [2026-03-10, 14:38:06](https://news.ycombinator.com/item?id=47323900) - [Meta acquires Moltbook](https://www.axios.com/2026/03/10/meta-facebook-moltbook-agent-social-network)
* [2026-03-10, 14:25:25](https://lobste.rs/s/t5dvs5/amazon_holds_engineering_meeting_about) - [Amazon holds engineering meeting about GenAI based outages](https://arstechnica.com/ai/2026/03/after-outages-amazon-to-make-senior-engineers-sign-off-on-ai-assisted-changes/)
* [2026-03-10, 14:10:00](https://soylentnews.org/article.pl?sid=26/03/08/1511250&amp;from=rss) - [Indigenous Peoples in the Amazon and Australia Share Some Ancestry](https://soylentnews.org/article.pl?sid=26/03/08/1511250&amp;from=rss)
* [2026-03-10, 14:05:15](https://lobste.rs/s/5mf3cb/rebasing_magit) - [Rebasing in Magit](https://entropicthoughts.com/rebasing-in-magit)
* [2026-03-10, 14:00:00](https://linux.slashdot.org/story/26/03/10/0450204/eqt-eyes-6-billion-sale-of-suse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EQT Eyes $6 Billion Sale of SUSE](https://linux.slashdot.org/story/26/03/10/0450204/eqt-eyes-6-billion-sale-of-suse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-10, 13:38:39](https://news.ycombinator.com/item?id=47323105) - [Rebasing in Magit](https://entropicthoughts.com/rebasing-in-magit)
* [2026-03-10, 13:31:17](https://news.ycombinator.com/item?id=47323017) - [After outages, Amazon to make senior engineers sign off on AI-assisted changes](https://arstechnica.com/ai/2026/03/after-outages-amazon-to-make-senior-engineers-sign-off-on-ai-assisted-changes/)
* [2026-03-10, 13:18:55](https://news.ycombinator.com/item?id=47322887) - [Show HN: How I topped the HuggingFace open LLM leaderboard on two gaming GPUs](https://dnhkng.github.io/posts/rys/)
* [2026-03-10, 13:10:48](https://news.ycombinator.com/item?id=47322815) - [Intel Demos Chip to Compute with Encrypted Data](https://spectrum.ieee.org/fhe-intel)
* [2026-03-10, 13:04:43](https://lobste.rs/s/g6gfvg/what_s_my_jnd) - [What&apos;s My JND?](https://www.keithcirkel.co.uk/whats-my-jnd)
* [2026-03-10, 13:00:00](https://games.slashdot.org/story/26/03/10/0442249/many-international-game-developers-plan-to-skip-gdc-in-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Many International Game Developers Plan To Skip GDC In US](https://games.slashdot.org/story/26/03/10/0442249/many-international-game-developers-plan-to-skip-gdc-in-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-10, 12:55:54](https://lobste.rs/s/9nzeu7/madblog_turn_markdown_folder_into) - [Madblog: Turn a Markdown folder into a federated blog](https://blog.fabiomanganiello.com/article/Madblog-federated-blogging-from-markdown)
* [2026-03-10, 12:55:42](https://news.ycombinator.com/item?id=47322635) - [Online age-verification tools for child safety are surveilling adults](https://www.cnbc.com/2026/03/08/social-media-child-safety-internet-ai-surveillance.html)
* [2026-03-10, 12:13:03](https://lobste.rs/s/cpqm9i/too_much_color) - [Too Much Color](https://www.keithcirkel.co.uk/too-much-color/)
* [2026-03-10, 11:51:21](https://lobste.rs/s/gh0mwq/nominal_types_webassembly) - [nominal types in webassembly](https://wingolog.org/archives/2026/03/10/nominal-types-in-webassembly)
* [2026-03-10, 10:07:13](https://lobste.rs/s/vkxmwj/redox_os_has_adopted_certificate_origin) - [Redox OS has adopted a Certificate of Origin policy and a strict no-LLM policy](https://gitlab.redox-os.org/redox-os/redox/-/blob/master/CONTRIBUTING.md)
* [2026-03-10, 10:00:00](https://yro.slashdot.org/story/26/03/09/236207/fbi-investigates-breach-that-may-have-hit-its-wiretapping-tools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FBI Investigates Breach That May Have Hit Its Wiretapping Tools](https://yro.slashdot.org/story/26/03/09/236207/fbi-investigates-breach-that-may-have-hit-its-wiretapping-tools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-10, 09:29:00](https://soylentnews.org/article.pl?sid=26/03/08/1510201&amp;from=rss) - [In 1985 Maxell Built a Bunch of Life-Size Robots for its Bad Floppy Ad](https://soylentnews.org/article.pl?sid=26/03/08/1510201&amp;from=rss)
* [2026-03-10, 08:51:15](https://lobste.rs/s/izprt4/evi_hard_fork_vim) - [EVi, a hard-fork of Vim](https://codeberg.org/NerdNextDoor/evi)
* [2026-03-10, 08:47:35](https://lobste.rs/s/lsjk8m/dependency_tracking_is_hard) - [Dependency Tracking is Hard](https://daniel.haxx.se/blog/2026/03/10/dependency-tracking-is-hard/)
* [2026-03-10, 08:46:53](https://news.ycombinator.com/item?id=47320600) - [Yann LeCun raises $1B to build AI that understands the physical world](https://www.wired.com/story/yann-lecun-raises-dollar1-billion-to-build-ai-that-understands-the-physical-world/)
* [2026-03-10, 07:00:00](https://science.slashdot.org/story/26/03/09/230222/startup-wants-to-launch-a-space-mirror?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Startup Wants To Launch a Space Mirror](https://science.slashdot.org/story/26/03/09/230222/startup-wants-to-launch-a-space-mirror?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
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
* [2026-03-08, 10:13:00](https://soylentnews.org/article.pl?sid=26/03/06/1545254&amp;from=rss) - [Would Aliens Do Physics, or is Science a Human Invention?](https://soylentnews.org/article.pl?sid=26/03/06/1545254&amp;from=rss)
* [2026-03-08, 10:01:23](https://news.ycombinator.com/item?id=47295996) - [Bippy: React Internals Toolkit](https://www.bippy.dev/)
* [2026-03-08, 09:27:34](https://news.ycombinator.com/item?id=47295855) - [Julia Snail – An Emacs Development Environment for Julia Like Clojure&apos;s Cider](https://github.com/gcv/julia-snail)
* [2026-03-08, 08:16:53](https://news.ycombinator.com/item?id=47295559) - [Invoker Commands API](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API)
* [2026-03-08, 05:24:00](https://soylentnews.org/article.pl?sid=26/03/06/1541249&amp;from=rss) - [Lawsuit: Google Gemini Sent Man on Violent Missions, Set Suicide “Countdown”](https://soylentnews.org/article.pl?sid=26/03/06/1541249&amp;from=rss)
* [2026-03-08, 01:20:05](https://news.ycombinator.com/item?id=47293337) - [Roblox is minting teen millionaires](https://www.bloomberg.com/news/articles/2026-03-06/roblox-s-teen-millionaires-are-disrupting-the-gaming-industry)
* [2026-03-08, 00:39:00](https://soylentnews.org/article.pl?sid=26/03/06/1538243&amp;from=rss) - [Clueless Cops Post Seized Crypto Wallet Password. $5M Quickly Stolen.](https://soylentnews.org/article.pl?sid=26/03/06/1538243&amp;from=rss)
* [2026-03-07, 19:55:00](https://soylentnews.org/article.pl?sid=26/03/06/1533251&amp;from=rss) - [Congress Extends ISS and Tells NASA to Get Moving on Private Space Stations](https://soylentnews.org/article.pl?sid=26/03/06/1533251&amp;from=rss)
* [2026-03-07, 17:29:54](https://news.ycombinator.com/item?id=47289590) - [Exploring the ocean with Raspberry Pi–powered marine robots](https://www.raspberrypi.com/news/exploring-the-ocean-with-raspberry-pi-powered-marine-robots/)
* [2026-03-07, 15:07:00](https://soylentnews.org/article.pl?sid=26/03/06/1338239&amp;from=rss) - [Starlink Mobile Teases ‘5G Speeds From Space With 100X the Data Density’](https://soylentnews.org/article.pl?sid=26/03/06/1338239&amp;from=rss)
* [2026-03-07, 11:28:37](https://news.ycombinator.com/item?id=47286657) - [The Gervais Principle, or the Office According to “The Office” (2009)](https://www.ribbonfarm.com/2009/10/07/the-gervais-principle-or-the-office-according-to-the-office/)
* [2026-03-07, 10:21:00](https://soylentnews.org/article.pl?sid=26/03/06/1335212&amp;from=rss) - [What Crystals Older Than the Sun Reveal About the Start of the Solar System](https://soylentnews.org/article.pl?sid=26/03/06/1335212&amp;from=rss)
* [2026-03-07, 06:56:43](https://news.ycombinator.com/item?id=47285166) - [\&quot;I built a spell checker for back end configuration mistakes.\&quot;](https://www.npmjs.com/package/safelaunch)
* [2026-03-07, 05:40:00](https://soylentnews.org/article.pl?sid=26/03/06/1321207&amp;from=rss) - [Holy C Batman, He Built an Operating System!](https://soylentnews.org/article.pl?sid=26/03/06/1321207&amp;from=rss)
* [2026-03-07, 00:53:00](https://soylentnews.org/article.pl?sid=26/03/05/2316254&amp;from=rss) - [vscreen: A Real Browser for AI Agents, Streamed Live via WebRTC](https://soylentnews.org/article.pl?sid=26/03/05/2316254&amp;from=rss)
