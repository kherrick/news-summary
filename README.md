# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [MinIO Is Dead, Long Live MinIO](https://blog.vonng.com/en/db/minio-resurrect/) - The revival of MinIO with new features and a fresh perspective.

* [OpenAI Secures Record $110 Billion Funding Round Backed By Amazon, Nvidia, and SoftBank](https://soylentnews.org/article.pl?sid=26/02/28/0151255&amp;from=rss) - OpenAI's record-breaking funding round and the implications for the tech industry.

* [Alibaba's new open-source Qwen3.5 models offer advanced local AI capabilities](https://venturebeat.com/technology/alibabas-new-open-source-qwen3-5-medium-models-offer-sonnet-4-5-performance).

* [World's Largest Battery Soon At Google Data Center: 100-Hour Iron-Air Storage](https://hardware.slashdot.org/story/26/02/28/0446211/worlds-largest-battery-soon-at-google-data-center-100-hour-iron-air-storage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Unveiling the world's largest battery deployment at a Google data center.

* [OsmAnd's Faster Offline Navigation](https://soylentnews.org/article.pl?sid=26/02/28/0150248&amp;from=rss) - Updates enhancing offline navigation technologies.

* [Google Quantum-Proofs HTTPS](https://tech.slashdot.org/story/26/02/28/027202/google-quantum-proofs-https?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Google's advancements towards making HTTPS more secure in the quantum computing era.

## Artificial Intelligence

* [Our Agreement with the Department of War](https://openai.com/index/our-agreement-with-the-department-of-war) - OpenAI's collaboration with the War Department raises ethics concerns.

* [The Science of Detecting LLM-Generated Text](https://dl.acm.org/doi/10.1145/3624725) - Insights into detecting machine-generated content amid advanced language models.

* [America's Teenagers Say AI Cheating Has Become a Regular Feature of Student Life](https://news.slashdot.org/story/26/02/28/0541228/americas-teenagers-say-ai-cheating-has-become-a-regular-feature-of-student-life?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Ethical dilemmas in education due to widespread AI adoption.

## Science and Exploration

* [Antarctica's Massive Neutrino Observatory Gets an Upgrade](https://science.slashdot.org/story/26/02/28/0632201/antarcticas-massive-neutrino-observatory-gets-an-upgrade?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Advances in neutrino detection from the icy observatory.

* [Rubin Observatory Has Started Paging Astronomers 800,000 Times a Night](https://science.slashdot.org/story/26/02/28/0155200/rubin-observatory-has-started-paging-astronomers-800000-times-a-night?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A look at the world's most advanced astrological data collection system.

* [Startup Plans April Launch for a Satellite to Reflect Sunlight to Earth at Night](https://science.slashdot.org/story/26/02/28/076229/startup-plans-april-launch-for-a-satellite-to-reflect-sunlight-to-earth-at-night?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A startup's innovative solution to nighttime illumination.

## Cybersecurity and Data Concerns

* [Block the 'Upgrade to Tahoe' Alerts](https://robservatory.com/block-the-upgrade-to-tahoe-alerts-and-system-settings-indicator/) - How to stop invasive software update notifications.

* [A Hacker Used Claude to Breach Mexico's Government and Steal 150GB of Data](https://soylentnews.org/article.pl?sid=26/02/27/2224202&amp;from=rss) - A striking security breach leveraging AI tools.

* [AI true is an Anti-Pattern](https://keleshev.com/ai-equals-true-is-an-anti-pattern) - Critical analysis on misleading approaches in AI development.

## Cultural and Entertainment Milestones

* [New 'Star Wars' Movies Are Coming to Theatres.  But Will Audiences?](https://entertainment.slashdot.org/story/26/02/28/0514259/new-star-wars-movies-are-coming-to-theatres-but-will-audiences?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Speculations on the return of Star Wars to theaters.

* [Hyperion Author Dan Simmons Dies From Stroke At 77](https://news.slashdot.org/story/26/02/27/2226234/hyperion-author-dan-simmons-dies-from-stroke-at-77?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Celebrating the legacy of a renowned SF author.

* [Perplexity Announces 'Computer,' an AI Agent That Assigns Work To Other AI Agents](https://slashdot.org/story/26/02/27/2151236/perplexity-announces-computer-an-ai-agent-that-assigns-work-to-other-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Introducing an innovative AI hierarchy with far-reaching consequences.

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

* [2026-02-28, 21:34:00](https://entertainment.slashdot.org/story/26/02/28/0514259/new-star-wars-movies-are-coming-to-theatres-but-will-audiences?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New &apos;Star Wars&apos; Movies Are Coming to Theatres.  But Will Audiences?](https://entertainment.slashdot.org/story/26/02/28/0514259/new-star-wars-movies-are-coming-to-theatres-but-will-audiences?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-28, 21:16:53](https://news.ycombinator.com/item?id=47200342) - [MinIO Is Dead, Long Live MinIO](https://blog.vonng.com/en/db/minio-resurrect/)
* [2026-02-28, 20:41:00](https://soylentnews.org/article.pl?sid=26/02/28/0151255&amp;from=rss) - [OpenAI Secures Record $110 Billion Funding Round Backed By Amazon, Nvidia, and SoftBank](https://soylentnews.org/article.pl?sid=26/02/28/0151255&amp;from=rss)
* [2026-02-28, 20:35:29](https://news.ycombinator.com/item?id=47199948) - [Our Agreement with the Department of War](https://openai.com/index/our-agreement-with-the-department-of-war)
* [2026-02-28, 20:34:00](https://tech.slashdot.org/story/26/02/28/2028232/us-threatens-anthropic-with-supply-chain-risk-designation-openai-signs-new-war-department-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Threatens Anthropic with &apos;Supply-Chain Risk&apos; Designation. OpenAI Signs New War Department Deal](https://tech.slashdot.org/story/26/02/28/2028232/us-threatens-anthropic-with-supply-chain-risk-designation-openai-signs-new-war-department-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-28, 20:20:00](https://news.ycombinator.com/item?id=47199781) - [Qwen3.5 122B and 35B models offer Sonnet 4.5 performance on local computers](https://venturebeat.com/technology/alibabas-new-open-source-qwen3-5-medium-models-offer-sonnet-4-5-performance)
* [2026-02-28, 19:51:11](https://lobste.rs/s/szaazg/custom_data_structures_e_graphs) - [Custom Data Structures in E-Graphs](https://uwplse.org/2026/02/24/egglog-containers.html)
* [2026-02-28, 19:34:00](https://science.slashdot.org/story/26/02/28/0632201/antarcticas-massive-neutrino-observatory-gets-an-upgrade?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Antarctica&apos;s Massive Neutrino Observatory Gets an Upgrade](https://science.slashdot.org/story/26/02/28/0632201/antarcticas-massive-neutrino-observatory-gets-an-upgrade?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-28, 19:16:20](https://lobste.rs/s/kkslov/thinking_deeply_about_theming_color) - [Thinking Deeply About Theming and Color Naming](https://css-tricks.com/thinking-deeply-about-theming-and-color-naming/)
* [2026-02-28, 19:04:01](https://news.ycombinator.com/item?id=47198977) - [Block the \&quot;Upgrade to Tahoe\&quot; Alerts](https://robservatory.com/block-the-upgrade-to-tahoe-alerts-and-system-settings-indicator/)
* [2026-02-28, 18:46:40](https://lobste.rs/s/ctxxsx/science_detecting_llm_generated_text) - [The Science of Detecting LLM-Generated Text](https://dl.acm.org/doi/10.1145/3624725)
* [2026-02-28, 18:45:35](https://lobste.rs/s/kch6lb/block_upgrade_tahoe_alerts) - [Block the “Upgrade to Tahoe” alerts](https://robservatory.com/block-the-upgrade-to-tahoe-alerts-and-system-settings-indicator/)
* [2026-02-28, 18:34:00](https://hardware.slashdot.org/story/26/02/28/0446211/worlds-largest-battery-soon-at-google-data-center-100-hour-iron-air-storage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;World&apos;s Largest Battery&apos; Soon At Google Data Center: 100-Hour Iron-Air Storage](https://hardware.slashdot.org/story/26/02/28/0446211/worlds-largest-battery-soon-at-google-data-center-100-hour-iron-air-storage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-28, 17:35:00](https://news.slashdot.org/story/26/02/28/1733240/after-us-israel-attacks-90-million-iranians-lose-internet-connectivity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [After US-Israel Attacks, 90 Million Iranians Lose Internet Connectivity](https://news.slashdot.org/story/26/02/28/1733240/after-us-israel-attacks-90-million-iranians-lose-internet-connectivity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-28, 16:58:54](https://news.ycombinator.com/item?id=47197595) - [Verified Spec-Driven Development (VSDD)](https://gist.github.com/dollspace-gay/d8d3bc3ecf4188df049d7a4726bb2a00)
* [2026-02-28, 16:51:49](https://news.ycombinator.com/item?id=47197505) - [The whole thing was a scam](https://garymarcus.substack.com/p/the-whole-thing-was-scam)
* [2026-02-28, 16:40:35](https://lobste.rs/s/gzqqun/breeze_qtwidgets_style_changes_help_us) - [Breeze QtWidgets style changes to help us prepare for Union](https://akselmo.dev/posts/breeze-and-union-preparing/)
* [2026-02-28, 16:34:00](https://news.slashdot.org/story/26/02/28/0541228/americas-teenagers-say-ai-cheating-has-become-a-regular-feature-of-student-life?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [America&apos;s Teenagers Say AI Cheating Has Become a Regular Feature of Student Life](https://news.slashdot.org/story/26/02/28/0541228/americas-teenagers-say-ai-cheating-has-become-a-regular-feature-of-student-life?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-28, 16:32:24](https://lobste.rs/s/v5nyjz/prek_better_pre_commit) - [prek: a better `pre-commit`](https://github.com/j178/prek)
* [2026-02-28, 16:31:53](https://news.ycombinator.com/item?id=47197267) - [Obsidian Sync now has a headless client](https://help.obsidian.md/sync/headless)
* [2026-02-28, 15:59:00](https://soylentnews.org/article.pl?sid=26/02/28/0150248&amp;from=rss) - [OsmAnd&apos;s Faster Offline Navigation](https://soylentnews.org/article.pl?sid=26/02/28/0150248&amp;from=rss)
* [2026-02-28, 15:37:41](https://lobste.rs/s/3fevyk/fast_servers_interesting_pattern) - [fast-servers: an interesting pattern](https://geocar.sdf1.org/fast-servers.html)
* [2026-02-28, 15:34:00](https://science.slashdot.org/story/26/02/28/076229/startup-plans-april-launch-for-a-satellite-to-reflect-sunlight-to-earth-at-night?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Startup Plans April Launch for a Satellite to Reflect Sunlight to Earth at Night](https://science.slashdot.org/story/26/02/28/076229/startup-plans-april-launch-for-a-satellite-to-reflect-sunlight-to-earth-at-night?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-28, 15:22:34](https://lobste.rs/s/gpcwus/january_servo_preloads_better_forms) - [January in Servo: preloads, better forms, details styling, and more](https://servo.org/blog/2026/02/28/january-in-servo/)
* [2026-02-28, 14:30:50](https://lobste.rs/s/oysfmo/debugging_reproducibility_issues_rust) - [Debugging Reproducibility Issues in Rust Software](https://notes.8pit.net/notes/iqfs.html)
* [2026-02-28, 14:11:55](https://lobste.rs/s/yixhnw/epoll_s_handle_centric_design_is_more) - [epoll&apos;s handle-centric design is more composable than kqueue&apos;s filter-centric design (2021)](https://ariadne.space/2021/06/05/actually-bsd-kqueue-is-a.html)
* [2026-02-28, 13:50:13](https://news.ycombinator.com/item?id=47195371) - [Addressing Antigravity Bans and Reinstating Access](https://github.com/google-gemini/gemini-cli/discussions/20632)
* [2026-02-28, 13:46:20](https://news.ycombinator.com/item?id=47195317) - [OpenAI fires an employee for prediction market insider trading](https://www.wired.com/story/openai-fires-employee-insider-trading-polymarket-kalshi/)
* [2026-02-28, 13:34:13](https://lobste.rs/s/tmstaw/everything_changes_nothing_changes) - [Everything changes, and nothing changes](https://btao.org/posts/2026-02-28-everything-changes-nothing-changes/)
* [2026-02-28, 13:32:28](https://news.ycombinator.com/item?id=47195157) - [The Life Cycle of Money](https://doap.metal.bohyen.space/blog/post/complete-life-cycle-of-money/)
* [2026-02-28, 13:29:36](https://news.ycombinator.com/item?id=47195123) - [Show HN: Now I Get It – Translate scientific papers into interactive webpages](https://nowigetit.us)
* [2026-02-28, 13:00:00](https://tech.slashdot.org/story/26/02/28/027202/google-quantum-proofs-https?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Quantum-Proofs HTTPS](https://tech.slashdot.org/story/26/02/28/027202/google-quantum-proofs-https?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-28, 11:26:08](https://lobste.rs/s/iedoot/ai_true_is_anti_pattern) - [AI=true is an Anti-Pattern](https://keleshev.com/ai-equals-true-is-an-anti-pattern)
* [2026-02-28, 11:11:00](https://soylentnews.org/article.pl?sid=26/02/27/2232251&amp;from=rss) - [Why LLM-Generated Passwords Are Dangerously Insecure](https://soylentnews.org/article.pl?sid=26/02/27/2232251&amp;from=rss)
* [2026-02-28, 10:51:20](https://lobste.rs/s/asryy7/15_years_indie_dev_4_bits_advice) - [15 Years of Indie Dev In 4 Bits of Advice](https://www.pentadact.com/2026-01-08-15-years-of-indie-dev-in-4-bits-of-advice/)
* [2026-02-28, 10:41:53](https://news.ycombinator.com/item?id=47193476) - [The Future of AI](https://lucijagregov.com/2026/02/26/the-future-of-ai/)
* [2026-02-28, 10:40:34](https://lobste.rs/s/g6l9eg/eternal_promise_history_attempts) - [The Eternal Promise: A History of Attempts to Eliminate Programmers](https://www.ivanturkovic.com/2026/01/22/history-software-simplification-cobol-ai-hype/)
* [2026-02-28, 10:01:20](https://news.ycombinator.com/item?id=47193064) - [Stop Burning Your Context Window – How We Cut MCP Output by 98% in Claude Code](https://mksg.lu/blog/context-mode)
* [2026-02-28, 10:00:00](https://science.slashdot.org/story/26/02/28/0155200/rubin-observatory-has-started-paging-astronomers-800000-times-a-night?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rubin Observatory Has Started Paging Astronomers 800,000 Times a Night](https://science.slashdot.org/story/26/02/28/0155200/rubin-observatory-has-started-paging-astronomers-800000-times-a-night?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-28, 09:10:38](https://lobste.rs/s/tza0zh/yes) - [Yes, and](https://htmx.org/essays/yes-and/)
* [2026-02-28, 08:56:33](https://news.ycombinator.com/item?id=47192505) - [Unsloth Dynamic 2.0 GGUFs](https://unsloth.ai/docs/basics/unsloth-dynamic-2.0-ggufs)
* [2026-02-28, 08:47:27](https://lobste.rs/s/fm1eln/package_managers_la_carte_formal_model) - [Package Managers à la Carte: A Formal Model of Dependency Resolution](https://arxiv.org/abs/2602.18602)
* [2026-02-28, 08:27:54](https://lobste.rs/s/we2t0t/bootc_ostree_modernizing_linux_system) - [Bootc and OSTree: Modernizing Linux System Deployment](https://a-cup-of.coffee/blog/ostree-bootc/)
* [2026-02-28, 07:00:00](https://it.slashdot.org/story/26/02/27/2348254/southern-california-air-board-rejects-pollution-rules-after-ai-generated-flood-of-comments?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Southern California Air Board Rejects Pollution Rules After AI-Generated Flood of Comments](https://it.slashdot.org/story/26/02/27/2348254/southern-california-air-board-rejects-pollution-rules-after-ai-generated-flood-of-comments?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-28, 06:34:07](https://news.ycombinator.com/item?id=47191232) - [The United States and Israel have launched a major attack on Iran](https://www.cnn.com/2026/02/28/middleeast/israel-attack-iran-intl-hnk)
* [2026-02-28, 06:30:00](https://soylentnews.org/article.pl?sid=26/02/27/2224202&amp;from=rss) - [A Hacker Used Claude to Breach Mexico&apos;s Government and Steal 150GB of Data](https://soylentnews.org/article.pl?sid=26/02/27/2224202&amp;from=rss)
* [2026-02-28, 03:30:00](https://slashdot.org/story/26/02/27/2342226/openai-fires-an-employee-for-prediction-market-insider-trading?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Fires an Employee For Prediction Market Insider Trading](https://slashdot.org/story/26/02/27/2342226/openai-fires-an-employee-for-prediction-market-insider-trading?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-28, 03:11:40](https://news.ycombinator.com/item?id=47189749) - [Don&apos;t use passkeys for encrypting user data](https://blog.timcappalli.me/p/passkeys-prf-warning/)
* [2026-02-28, 02:59:02](https://news.ycombinator.com/item?id=47189650) - [OpenAI agrees with Dept. of War to deploy models in their classified network](https://twitter.com/sama/status/2027578652477821175)
* [2026-02-28, 02:50:25](https://lobste.rs/s/ykwb2z/ai_agent_coding_skeptic_tries_ai_agent) - [An AI agent coding skeptic tries AI agent coding, in excessive detail](https://minimaxir.com/2026/02/ai-agent-coding/)
* [2026-02-28, 02:08:15](https://lobste.rs/s/lf1hbk/elementary_os_8_1_1_available_now) - [elementary OS 8.1.1 Available Now](https://blog.elementary.io/os-8-1-1-available-now/)
* [2026-02-28, 02:02:00](https://games.slashdot.org/story/26/02/27/2332219/human-brain-cells-on-a-chip-learned-to-play-doom-in-a-week?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Human Brain Cells On a Chip Learned To Play Doom In a Week](https://games.slashdot.org/story/26/02/27/2332219/human-brain-cells-on-a-chip-learned-to-play-doom-in-a-week?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-28, 01:50:37](https://lobste.rs/s/eai9st/stop_putting_secrets_env_files) - [Stop Putting Secrets in .env Files](https://jonmagic.com/posts/stop-putting-secrets-in-dotenv-files/)
* [2026-02-28, 01:40:00](https://soylentnews.org/article.pl?sid=26/02/27/2217216&amp;from=rss) - [Hackers Expose the Massive Surveillance Stack Hiding Inside Your “Age Verification” Check](https://soylentnews.org/article.pl?sid=26/02/27/2217216&amp;from=rss)
* [2026-02-28, 01:25:00](https://news.slashdot.org/story/26/02/27/2226234/hyperion-author-dan-simmons-dies-from-stroke-at-77?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hyperion Author Dan Simmons Dies From Stroke At 77](https://news.slashdot.org/story/26/02/27/2226234/hyperion-author-dan-simmons-dies-from-stroke-at-77?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-28, 00:54:53](https://news.ycombinator.com/item?id=47188473) - [We Will Not Be Divided](https://notdivided.org)
* [2026-02-28, 00:45:00](https://yro.slashdot.org/story/26/02/27/2215238/cisa-replaces-bumbling-acting-director-after-a-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CISA Replaces Bumbling Acting Director After a Year](https://yro.slashdot.org/story/26/02/27/2215238/cisa-replaces-bumbling-acting-director-after-a-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-28, 00:02:00](https://slashdot.org/story/26/02/27/2151236/perplexity-announces-computer-an-ai-agent-that-assigns-work-to-other-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Perplexity Announces &apos;Computer,&apos; an AI Agent That Assigns Work To Other AI Agents](https://slashdot.org/story/26/02/27/2151236/perplexity-announces-computer-an-ai-agent-that-assigns-work-to-other-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-27, 20:58:00](https://soylentnews.org/article.pl?sid=26/02/26/0429221&amp;from=rss) - [UK Government Upgrades Drones, Deploys Joystick Tweakers to Catch Illegal Dumpers](https://soylentnews.org/article.pl?sid=26/02/26/0429221&amp;from=rss)
* [2026-02-27, 20:20:51](https://lobste.rs/s/tf8j5h/please_stop_using_passkeys_for) - [Please stop using passkeys for encrypting user data](https://blog.timcappalli.me/p/passkeys-prf-warning/)
* [2026-02-27, 17:26:55](https://lobste.rs/s/d1j6ye/update_on_svg_gtk) - [An update on SVG in GTK](https://blogs.gnome.org/gtk/2026/02/25/an-update-on-svg-in-gtk/)
* [2026-02-27, 17:22:00](https://news.ycombinator.com/item?id=47182986) - [747s and Coding Agents](https://carlkolon.com/2026/02/27/engineering-747-coding-agents/)
* [2026-02-27, 16:31:35](https://lobste.rs/s/ulxeaa/allocating_on_stack) - [Allocating on the Stack](https://go.dev/blog/allocation-optimizations)
* [2026-02-27, 16:14:00](https://soylentnews.org/politics/article.pl?sid=26/02/26/0417224&amp;from=rss) - [The Political Effects of Xitter’s Feed Algorithm](https://soylentnews.org/politics/article.pl?sid=26/02/26/0417224&amp;from=rss)
* [2026-02-27, 11:30:00](https://soylentnews.org/article.pl?sid=26/02/26/0411234&amp;from=rss) - [AMD&apos;s Next-Gen Ryzen 10000 Desktop CPUs Rumored to Come in Seven Different Configs](https://soylentnews.org/article.pl?sid=26/02/26/0411234&amp;from=rss)
* [2026-02-27, 08:27:45](https://news.ycombinator.com/item?id=47178051) - [Werner Herzog Between Fact and Fiction](https://www.thenation.com/article/culture/werner-herzog-future-truth/)
* [2026-02-27, 07:34:09](https://lobste.rs/s/4pqmdx/mothlamp_problems) - [Mothlamp Problems](https://unfoldingdiagrams.leaflet.pub/3mft6olldos26)
* [2026-02-27, 07:32:42](https://lobste.rs/s/aifnbl/accidentally_disabling_ssh_access_via) - [Accidentally disabling SSH access via scp](https://sny.sh/hypha/blog/scp)
* [2026-02-27, 06:47:00](https://soylentnews.org/article.pl?sid=26/02/26/049239&amp;from=rss) - [NASA Officially Classifies Boeing Starliner Failure as a Maximum-Level Type A Mishap](https://soylentnews.org/article.pl?sid=26/02/26/049239&amp;from=rss)
* [2026-02-27, 01:59:00](https://soylentnews.org/article.pl?sid=26/02/26/042214&amp;from=rss) - [Hungarian Startup Transforming Robot Manufacturing With 3D Tissue Braiding](https://soylentnews.org/article.pl?sid=26/02/26/042214&amp;from=rss)
* [2026-02-26, 21:17:00](https://soylentnews.org/article.pl?sid=26/02/25/1612247&amp;from=rss) - [Tesla &apos;Robotaxi&apos; Adds 5 More Crashes in Austin in a Month](https://soylentnews.org/article.pl?sid=26/02/25/1612247&amp;from=rss)
* [2026-02-26, 19:29:35](https://news.ycombinator.com/item?id=47170847) - [&apos;Play like a dog biting God&apos;s feet&apos;: Steven Isserlis on György Kurtág at 100](https://www.theguardian.com/music/2026/feb/26/steven-isserlis-on-the-formidable-gyorgy-kurtag-at-100)
* [2026-02-26, 16:34:00](https://soylentnews.org/article.pl?sid=26/02/25/1553206&amp;from=rss) - [SpaceX&apos;s Faulty Falcon Spewed Massive Lithium Plume Over Europe, Say Scientists](https://soylentnews.org/article.pl?sid=26/02/25/1553206&amp;from=rss)
* [2026-02-26, 11:48:00](https://soylentnews.org/article.pl?sid=26/02/25/1551209&amp;from=rss) - [Michael Pollan Says AI May &apos;Think&apos; — but It Will Never be Conscious](https://soylentnews.org/article.pl?sid=26/02/25/1551209&amp;from=rss)
* [2026-02-26, 07:52:29](https://news.ycombinator.com/item?id=47163167) - [From Noise to Image – interactive guide to diffusion](https://lighthousesoftware.co.uk/projects/from-noise-to-image/)
* [2026-02-26, 07:06:00](https://soylentnews.org/article.pl?sid=26/02/25/1546252&amp;from=rss) - [80386 Protection](https://soylentnews.org/article.pl?sid=26/02/25/1546252&amp;from=rss)
* [2026-02-26, 04:13:47](https://news.ycombinator.com/item?id=47161759) - [The happiest I&apos;ve ever been](https://ben-mini.com/2026/the-happiest-ive-ever-been)
* [2026-02-26, 02:20:00](https://soylentnews.org/article.pl?sid=26/02/25/1544219&amp;from=rss) - [AI Bot Seemingly Shames Developer for Rejected Pull Request](https://soylentnews.org/article.pl?sid=26/02/25/1544219&amp;from=rss)
* [2026-02-25, 21:35:00](https://soylentnews.org/article.pl?sid=26/02/24/0734201&amp;from=rss) - [AI Agent Throws LAN Party](https://soylentnews.org/article.pl?sid=26/02/24/0734201&amp;from=rss)
* [2026-02-25, 18:24:46](https://news.ycombinator.com/item?id=47155526) - [Woxi: Wolfram Mathematica Reimplementation in Rust](https://github.com/ad-si/Woxi)
* [2026-02-25, 18:07:09](https://news.ycombinator.com/item?id=47155235) - [Ghosts&apos;n Goblins – “Worse danger is ahead”](https://superchartisland.com/ghostsn-goblins/)
* [2026-02-25, 17:28:33](https://news.ycombinator.com/item?id=47154637) - [New evidence that Cantor plagiarized Dedekind?](https://www.quantamagazine.org/the-man-who-stole-infinity-20260225/)
* [2026-02-25, 16:37:00](https://soylentnews.org/article.pl?sid=26/02/24/0444250&amp;from=rss) - [Astronomers Identify a Galaxy Made Almost Entirely of Dark Matter](https://soylentnews.org/article.pl?sid=26/02/24/0444250&amp;from=rss)
* [2026-02-25, 15:28:52](https://news.ycombinator.com/item?id=47152835) - [The archivist preserving decaying floppy disks](https://www.popsci.com/technology/floppy-disk-archivist-project/)
* [2026-02-25, 11:55:06](https://news.ycombinator.com/item?id=47150352) - [What I learned while trying to build a production-ready nearest neighbor system](https://github.com/thatipamula-jashwanth/smart-knn)
* [2026-02-25, 11:55:00](https://soylentnews.org/article.pl?sid=26/02/24/0437208&amp;from=rss) - [China Remains Embedded in US Energy Networks &apos;for the Purpose of Taking It Down&apos;](https://soylentnews.org/article.pl?sid=26/02/24/0437208&amp;from=rss)
* [2026-02-25, 07:13:00](https://soylentnews.org/article.pl?sid=26/02/24/0427256&amp;from=rss) - [California Bill Would Restrict 3D Printers to State-Approved Models to Prevent Making  Gun Parts](https://soylentnews.org/article.pl?sid=26/02/24/0427256&amp;from=rss)
* [2026-02-25, 05:14:09](https://news.ycombinator.com/item?id=47147597) - [The Eternal Promise: A History of Attempts to Eliminate Programmers](https://www.ivanturkovic.com/2026/01/22/history-software-simplification-cobol-ai-hype/)
* [2026-02-25, 02:26:00](https://soylentnews.org/article.pl?sid=26/02/24/0420243&amp;from=rss) - [AI Apps on the Google Play Store Are Leaking Customer Data and Photos](https://soylentnews.org/article.pl?sid=26/02/24/0420243&amp;from=rss)
* [2026-02-24, 23:14:16](https://news.ycombinator.com/item?id=47144835) - [How Long Is the Coast of Britain? (1967)](https://www.jstor.org/stable/1721427)
* [2026-02-24, 21:41:00](https://soylentnews.org/politics/article.pl?sid=26/02/23/103249&amp;from=rss) - [OS-Level Age Verification in Proposed Legislation in Colorado](https://soylentnews.org/politics/article.pl?sid=26/02/23/103249&amp;from=rss)
* [2026-02-24, 16:56:00](https://soylentnews.org/article.pl?sid=26/02/23/0959244&amp;from=rss) - [Is This Glass Square the Long, Long Future of Data Storage ?](https://soylentnews.org/article.pl?sid=26/02/23/0959244&amp;from=rss)
* [2026-02-24, 12:09:00](https://soylentnews.org/article.pl?sid=26/02/23/010246&amp;from=rss) - [Two Days of Oatmeal Reduce Cholesterol Level](https://soylentnews.org/article.pl?sid=26/02/23/010246&amp;from=rss)
* [2026-02-24, 07:21:00](https://soylentnews.org/article.pl?sid=26/02/23/0058242&amp;from=rss) - [Video Games are Losing the \&quot;Attention War\&quot; to Gambling, Porn, and Crypto](https://soylentnews.org/article.pl?sid=26/02/23/0058242&amp;from=rss)
* [2026-02-24, 02:37:00](https://soylentnews.org/article.pl?sid=26/02/23/0050217&amp;from=rss) - [Why Are Tatooine Planets Rare? Blame General Relativity](https://soylentnews.org/article.pl?sid=26/02/23/0050217&amp;from=rss)
