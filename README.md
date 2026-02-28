# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and Technology Innovations

* [Human Brain Cells On a Chip Learned To Play Doom In a Week](https://games.slashdot.org/story/26/02/27/2332219/human-brain-cells-on-a-chip-learned-to-play-doom-in-a-week?utm_source=rss1.0mainlinkanon&utm_medium=feed) — A fascinating development showcasing how human brain cells integrated with chips can learn complex tasks like playing Doom in just one week.

* [AI Agent Throws LAN Party](https://soylentnews.org/article.pl?sid=26/02/24/0734201&from=rss) — An interesting case where an AI agent organized a virtual LAN party, highlighting the possibilities in AI-driven event automation.

* [A Hacker Used Claude to Breach Mexico's Government and Steal 150GB of Data](https://soylentnews.org/article.pl?sid=26/02/27/2224202&from=rss) — A deep dive into how AI like Claude is both a tool and a threat, with significant cybersecurity implications.

* [AI Apps on the Google Play Store Are Leaking Customer Data and Photos](https://soylentnews.org/article.pl?sid=26/02/24/0420243&from=rss) — Concerns are growing over privacy risks posed by AI applications as cases of leaked data surface.

* [Perplexity Announces 'Computer,' an AI Agent That Assigns Work To Other AI Agents](https://slashdot.org/story/26/02/27/2151236/perplexity-announces-computer-an-ai-agent-that-assigns-work-to-other-ai-agents?utm_source=rss1.0mainlinkanon&utm_medium=feed) — This innovative AI agent can allocate workloads among other AI agents, signaling a new level of AI collaboration.

* [Southern California Air Board Rejects Pollution Rules After AI-Generated Flood of Comments](https://it.slashdot.org/story/26/02/27/2348254/southern-california-air-board-rejects-pollution-rules-after-ai-generated-flood-of-comments?utm_source=rss1.0mainlinkanon&utm_medium=feed) — The dual-edged sword of AI-driven comment spam altered policymaking, creating challenges for public governance.

## Scientific Breakthroughs and Environmental Updates

* [Croatia Declared Free of Landmines After 31 Years](https://glashrvatske.hrt.hr/en/domestic/croatia-declared-free-of-landmines-after-31-years-12593533) — A victory for public safety and a testament to global demining efforts as Croatia eradicates landmines after decades.

* [NASA Officially Classifies Boeing Starliner Failure as a Maximum-Level Type A Mishap](https://soylentnews.org/article.pl?sid=26/02/26/049239&from=rss) — A setback in space exploration as the Boeing Starliner faces critical levels of failure.

* [5,300-year-old 'Bow Drill' Rewrites Story of Ancient Egyptian Tools](https://phys.org/news/2026-02-year-drill-rewrites-story-ancient.html) — A new discovery reshapes our understanding of ancient tool technology, shedding light on advanced ingenuity from millennia ago.

* [Astronomers Identify a Galaxy Made Almost Entirely of Dark Matter](https://soylentnews.org/article.pl?sid=26/02/24/0444250&from=rss) — Dark matter research reaches a new milestone with the identification of a largely dark matter galaxy.

## Security and Privacy Issues

* [Hackers Expose the Massive Surveillance Stack Hiding Inside Your “Age Verification” Check](https://soylentnews.org/article.pl?sid=26/02/27/2217216&from=rss) — Eye-opening revelations on how 'age verification' systems serve as surveillance tools.

* [Stop Putting Secrets in .env Files](https://jonmagic.com/posts/stop-putting-secrets-in-dotenv-files/) — A practical warning against common development practices that compromise system security.

* [Open source calculator firmware DB48X forbids CA/CO use due to age verification](https://github.com/c3d/db48x/commit/7819972b641ac808d46c54d3f5d1df70d706d286) — Open-source firmware takes a stand against California’s contentious age verification requirements.

* [Trump Orders Federal Agencies To Stop Using Anthropic AI Tech 'Immediately'](https://tech.slashdot.org/story/26/02/27/2138211/trump-orders-federal-agencies-to-stop-using-anthropic-ai-tech-immediately?utm_source=rss1.0mainlinkanon&utm_medium=feed) — A controversial directive ceasing the government usage of a noted AI tech provider.

## Software Development and Programming Trends

* [Making WebAssembly a First-Class Language on the Web](https://hacks.mozilla.org/2026/02/making-webassembly-a-first-class-language-on-the-web/) — Mozilla’s push escalates WebAssembly’s relevance in the browser ecosystem.

* [Allocating on the Stack](https://go.dev/blog/allocation-optimizations) — New insights into optimization strategies for stack allocations in programming.

* [The Eternal Promise: A History of Attempts to Eliminate Programmers](https://www.ivanturkovic.com/2026/01/22/history-software-simplification-cobol-ai-hype/) — A reflective look at humanity's ongoing effort to reduce dependency on human coders.

* [Sliced by Go’s Slices](https://ohadravid.github.io/posts/2026-02-go-sliced/) — Detailed technical examinations of Go programming and its slice mechanics.

* [What's Cooking in Git.git (Feb 2026, #11)](https://lore.kernel.org/git/xmqq8qcdof3f.fsf@gitster.g/) — The latest updates and discussions surrounding the Git ecosystem.

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

* [2026-02-28, 09:10:38](https://lobste.rs/s/tza0zh/yes) - [Yes, and](https://htmx.org/essays/yes-and/)
* [2026-02-28, 08:56:33](https://news.ycombinator.com/item?id=47192505) - [Unsloth Dynamic 2.0 GGUFs](https://unsloth.ai/docs/basics/unsloth-dynamic-2.0-ggufs)
* [2026-02-28, 08:47:27](https://lobste.rs/s/fm1eln/package_managers_la_carte_formal_model) - [Package Managers à la Carte: A Formal Model of Dependency Resolution](https://arxiv.org/abs/2602.18602)
* [2026-02-28, 08:27:54](https://lobste.rs/s/we2t0t/bootc_ostree_modernizing_linux_system) - [Bootc and OSTree: Modernizing Linux System Deployment](https://a-cup-of.coffee/blog/ostree-bootc/)
* [2026-02-28, 07:45:36](https://news.ycombinator.com/item?id=47191844) - [Inferring Car Movement Patterns from Passive TPMS Measurements](https://dspace.networks.imdea.org/handle/20.500.12761/2011)
* [2026-02-28, 07:00:00](https://it.slashdot.org/story/26/02/27/2348254/southern-california-air-board-rejects-pollution-rules-after-ai-generated-flood-of-comments?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Southern California Air Board Rejects Pollution Rules After AI-Generated Flood of Comments](https://it.slashdot.org/story/26/02/27/2348254/southern-california-air-board-rejects-pollution-rules-after-ai-generated-flood-of-comments?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-28, 06:30:00](https://soylentnews.org/article.pl?sid=26/02/27/2224202&amp;from=rss) - [A Hacker Used Claude to Breach Mexico&apos;s Government and Steal 150GB of Data](https://soylentnews.org/article.pl?sid=26/02/27/2224202&amp;from=rss)
* [2026-02-28, 05:55:01](https://news.ycombinator.com/item?id=47190997) - [How do I cancel my ChatGPT subscription?](https://help.openai.com/en/articles/7232927-how-do-i-cancel-my-chatgpt-subscription)
* [2026-02-28, 05:47:39](https://news.ycombinator.com/item?id=47190947) - [Rust Is Just a Tool](https://lewiscampbell.tech/blog/260204.html)
* [2026-02-28, 05:21:21](https://news.ycombinator.com/item?id=47190806) - [Cash issuing terminals](https://computer.rip/2026-02-27-ibm-atm.html)
* [2026-02-28, 05:18:03](https://lobste.rs/s/moy2ld/what_s_cooking_git_git_feb_2026_11) - [What&apos;s cooking in git.git (Feb 2026, #11)](https://lore.kernel.org/git/xmqq8qcdof3f.fsf@gitster.g/)
* [2026-02-28, 03:30:00](https://slashdot.org/story/26/02/27/2342226/openai-fires-an-employee-for-prediction-market-insider-trading?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Fires an Employee For Prediction Market Insider Trading](https://slashdot.org/story/26/02/27/2342226/openai-fires-an-employee-for-prediction-market-insider-trading?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-28, 03:11:40](https://news.ycombinator.com/item?id=47189749) - [Don&apos;t use passkeys for encrypting user data](https://blog.timcappalli.me/p/passkeys-prf-warning/)
* [2026-02-28, 02:59:02](https://news.ycombinator.com/item?id=47189650) - [OpenAI agrees with Dept. of War to deploy models in their classified network](https://twitter.com/sama/status/2027578652477821175)
* [2026-02-28, 02:55:29](https://news.ycombinator.com/item?id=47189625) - [Bootc and OSTree: Modernizing Linux System Deployment](https://a-cup-of.coffee/blog/ostree-bootc/)
* [2026-02-28, 02:50:25](https://lobste.rs/s/ykwb2z/ai_agent_coding_skeptic_tries_ai_agent) - [An AI agent coding skeptic tries AI agent coding, in excessive detail](https://minimaxir.com/2026/02/ai-agent-coding/)
* [2026-02-28, 02:48:16](https://news.ycombinator.com/item?id=47189535) - [Croatia declared free of landmines after 31 years](https://glashrvatske.hrt.hr/en/domestic/croatia-declared-free-of-landmines-after-31-years-12593533)
* [2026-02-28, 02:08:15](https://lobste.rs/s/lf1hbk/elementary_os_8_1_1_available_now) - [elementary OS 8.1.1 Available Now](https://blog.elementary.io/os-8-1-1-available-now/)
* [2026-02-28, 02:02:00](https://games.slashdot.org/story/26/02/27/2332219/human-brain-cells-on-a-chip-learned-to-play-doom-in-a-week?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Human Brain Cells On a Chip Learned To Play Doom In a Week](https://games.slashdot.org/story/26/02/27/2332219/human-brain-cells-on-a-chip-learned-to-play-doom-in-a-week?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-28, 01:50:37](https://lobste.rs/s/eai9st/stop_putting_secrets_env_files) - [Stop Putting Secrets in .env Files](https://jonmagic.com/posts/stop-putting-secrets-in-dotenv-files/)
* [2026-02-28, 01:40:00](https://soylentnews.org/article.pl?sid=26/02/27/2217216&amp;from=rss) - [Hackers Expose the Massive Surveillance Stack Hiding Inside Your “Age Verification” Check](https://soylentnews.org/article.pl?sid=26/02/27/2217216&amp;from=rss)
* [2026-02-28, 01:25:00](https://news.slashdot.org/story/26/02/27/2226234/hyperion-author-dan-simmons-dies-from-stroke-at-77?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hyperion Author Dan Simmons Dies From Stroke At 77](https://news.slashdot.org/story/26/02/27/2226234/hyperion-author-dan-simmons-dies-from-stroke-at-77?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-28, 01:20:10](https://news.ycombinator.com/item?id=47188697) - [Statement on the comments from Secretary of War Pete Hegseth](https://www.anthropic.com/news/statement-comments-secretary-war)
* [2026-02-28, 00:54:53](https://news.ycombinator.com/item?id=47188473) - [We Will Not Be Divided](https://notdivided.org)
* [2026-02-28, 00:45:00](https://yro.slashdot.org/story/26/02/27/2215238/cisa-replaces-bumbling-acting-director-after-a-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CISA Replaces Bumbling Acting Director After a Year](https://yro.slashdot.org/story/26/02/27/2215238/cisa-replaces-bumbling-acting-director-after-a-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-28, 00:02:00](https://slashdot.org/story/26/02/27/2151236/perplexity-announces-computer-an-ai-agent-that-assigns-work-to-other-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Perplexity Announces &apos;Computer,&apos; an AI Agent That Assigns Work To Other AI Agents](https://slashdot.org/story/26/02/27/2151236/perplexity-announces-computer-an-ai-agent-that-assigns-work-to-other-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-27, 23:42:14](https://news.ycombinator.com/item?id=47187649) - [Qt45: A small polymerase ribozyme that can synthesize itself](https://www.science.org/doi/10.1126/science.adt2760)
* [2026-02-27, 23:20:00](https://tech.slashdot.org/story/26/02/27/2144239/south-korea-set-to-get-a-fully-functioning-google-maps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [South Korea Set To Get a Fully Functioning Google Maps](https://tech.slashdot.org/story/26/02/27/2144239/south-korea-set-to-get-a-fully-functioning-google-maps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-27, 22:40:00](https://tech.slashdot.org/story/26/02/27/2138211/trump-orders-federal-agencies-to-stop-using-anthropic-ai-tech-immediately?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Orders Federal Agencies To Stop Using Anthropic AI Tech &apos;Immediately&apos;](https://tech.slashdot.org/story/26/02/27/2138211/trump-orders-federal-agencies-to-stop-using-anthropic-ai-tech-immediately?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-27, 22:02:00](https://tech.slashdot.org/story/26/02/27/2133209/us-military-accidentally-shoots-down-border-protection-drone-with-laser?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Military Accidentally Shoots Down Border Protection Drone With Laser](https://tech.slashdot.org/story/26/02/27/2133209/us-military-accidentally-shoots-down-border-protection-drone-with-laser?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-27, 21:33:14](https://lobste.rs/s/wvjyad/cultivating_robust_efficient_quantum) - [Cultivating a robust and efficient quantum-safe HTTPS](https://security.googleblog.com/2026/02/cultivating-robust-and-efficient.html)
* [2026-02-27, 21:25:00](https://news.slashdot.org/story/26/02/27/207211/white-house-stalls-release-of-approved-us-science-budgets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [White House Stalls Release of Approved US Science Budgets](https://news.slashdot.org/story/26/02/27/207211/white-house-stalls-release-of-approved-us-science-budgets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-27, 20:58:00](https://soylentnews.org/article.pl?sid=26/02/26/0429221&amp;from=rss) - [UK Government Upgrades Drones, Deploys Joystick Tweakers to Catch Illegal Dumpers](https://soylentnews.org/article.pl?sid=26/02/26/0429221&amp;from=rss)
* [2026-02-27, 20:51:00](https://entertainment.slashdot.org/story/26/02/27/1941205/the-death-of-spotify-why-streaming-is-minutes-away-from-being-obsolete?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;The Death of Spotify: Why Streaming is Minutes Away From Being Obsolete&apos;](https://entertainment.slashdot.org/story/26/02/27/1941205/the-death-of-spotify-why-streaming-is-minutes-away-from-being-obsolete?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-27, 20:20:51](https://lobste.rs/s/tf8j5h/please_stop_using_passkeys_for) - [Please stop using passkeys for encrypting user data](https://blog.timcappalli.me/p/passkeys-prf-warning/)
* [2026-02-27, 20:10:00](https://games.slashdot.org/story/26/02/27/1934258/ai-mistakes-are-infuriating-gamers-as-developers-seek-savings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Mistakes Are Infuriating Gamers as Developers Seek Savings](https://games.slashdot.org/story/26/02/27/1934258/ai-mistakes-are-infuriating-gamers-as-developers-seek-savings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-27, 19:30:00](https://mobile.slashdot.org/story/26/02/27/1917219/smartphone-market-to-decline-13-in-2026-marking-the-largest-drop-ever-due-to-the-memory-shortage-crisis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Smartphone Market To Decline 13% in 2026, Marking the Largest Drop Ever Due To the Memory Shortage Crisis](https://mobile.slashdot.org/story/26/02/27/1917219/smartphone-market-to-decline-13-in-2026-marking-the-largest-drop-ever-due-to-the-memory-shortage-crisis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-27, 19:09:02](https://lobste.rs/s/zpjljr/bill_text_ab_1043_age_verification) - [Bill Text  - AB-1043 Age verification signals: software applications and online services](https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260AB1043)
* [2026-02-27, 18:54:00](https://science.slashdot.org/story/26/02/27/1854230/nasa-announces-artemis-iii-mission-no-longer-aims-to-send-humans-to-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nasa Announces Artemis III Mission No Longer Aims To Send Humans To Moon](https://science.slashdot.org/story/26/02/27/1854230/nasa-announces-artemis-iii-mission-no-longer-aims-to-send-humans-to-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-27, 18:49:50](https://news.ycombinator.com/item?id=47184049) - [Let&apos;s discuss sandbox isolation](https://www.shayon.dev/post/2026/52/lets-discuss-sandbox-isolation/)
* [2026-02-27, 18:03:00](https://slashdot.org/story/26/02/27/185250/a-chinese-officials-use-of-chatgpt-accidentally-revealed-a-global-intimidation-operation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Chinese Official&apos;s Use of ChatGPT Accidentally Revealed a Global Intimidation Operation](https://slashdot.org/story/26/02/27/185250/a-chinese-officials-use-of-chatgpt-accidentally-revealed-a-global-intimidation-operation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-27, 17:26:55](https://lobste.rs/s/d1j6ye/update_on_svg_gtk) - [An update on SVG in GTK](https://blogs.gnome.org/gtk/2026/02/25/an-update-on-svg-in-gtk/)
* [2026-02-27, 17:10:37](https://lobste.rs/s/vlpddk/we_deserve_better_streams_api_for) - [We deserve a better streams API for JavaScript](https://blog.cloudflare.com/a-better-web-streams-api/)
* [2026-02-27, 16:33:39](https://news.ycombinator.com/item?id=47182483) - [NASA announces overhaul of Artemis program amid safety concerns, delays](https://www.cbsnews.com/news/nasa-artemis-moon-program-overhaul/)
* [2026-02-27, 16:31:35](https://lobste.rs/s/ulxeaa/allocating_on_stack) - [Allocating on the Stack](https://go.dev/blog/allocation-optimizations)
* [2026-02-27, 16:26:22](https://news.ycombinator.com/item?id=47182387) - [Show HN: Claude-File-Recovery, recover files from your ~/.claude sessions](https://github.com/hjtenklooster/claude-file-recovery)
* [2026-02-27, 16:14:00](https://soylentnews.org/politics/article.pl?sid=26/02/26/0417224&amp;from=rss) - [The Political Effects of Xitter’s Feed Algorithm](https://soylentnews.org/politics/article.pl?sid=26/02/26/0417224&amp;from=rss)
* [2026-02-27, 15:52:27](https://news.ycombinator.com/item?id=47181944) - [A Chinese official’s use of ChatGPT revealed an intimidation operation](https://www.cnn.com/2026/02/25/politics/chatgpt-china-intimidation-operation)
* [2026-02-27, 15:37:53](https://news.ycombinator.com/item?id=47181753) - [Open source calculator firmware DB48X forbids CA/CO use due to age verification](https://github.com/c3d/db48x/commit/7819972b641ac808d46c54d3f5d1df70d706d286)
* [2026-02-27, 14:56:05](https://news.ycombinator.com/item?id=47181211) - [OpenAI raises $110B on $730B pre-money valuation](https://techcrunch.com/2026/02/27/openai-raises-110b-in-one-of-the-largest-private-funding-rounds-in-history/)
* [2026-02-27, 14:55:49](https://news.ycombinator.com/item?id=47181208) - [A new California law says all operating systems need to have age verification](https://www.pcgamer.com/software/operating-systems/a-new-california-law-says-all-operating-systems-including-linux-need-to-have-some-form-of-age-verification-at-account-setup/)
* [2026-02-27, 14:02:53](https://news.ycombinator.com/item?id=47180569) - [A better streams API is possible for JavaScript](https://blog.cloudflare.com/a-better-web-streams-api/)
* [2026-02-27, 14:00:41](https://lobste.rs/s/fxljxx/fips_free_internetworking_peering) - [FIPS: Free Internetworking Peering System](https://github.com/jmcorgan/fips/blob/master/docs/design/fips-intro.md)
* [2026-02-27, 13:56:20](https://lobste.rs/s/qnaeva/javascript_drms_are_stupid_useless) - [JavaScript DRMs are Stupid and Useless](https://the-ranty-dev.vercel.app/javascript-drms-are-stupid)
* [2026-02-27, 13:36:05](https://lobste.rs/s/wrfca5/jails_for_netbsd) - [Jails for NetBSD](https://netbsd-jails.petermann-digital.de/)
* [2026-02-27, 11:47:22](https://lobste.rs/s/wdrawa/ai_sandbox_runs_on_your_homelab) - [AI sandbox that runs on your homelab](https://github.com/deevus/pixels)
* [2026-02-27, 11:44:34](https://lobste.rs/s/5b8tmd/bitflipped_your_computer_is_cosmic_ray) - [Bitflipped: Your computer is a cosmic ray detector (2018)](https://github.com/Smerity/bitflipped)
* [2026-02-27, 11:30:00](https://soylentnews.org/article.pl?sid=26/02/26/0411234&amp;from=rss) - [AMD&apos;s Next-Gen Ryzen 10000 Desktop CPUs Rumored to Come in Seven Different Configs](https://soylentnews.org/article.pl?sid=26/02/26/0411234&amp;from=rss)
* [2026-02-27, 10:43:12](https://lobste.rs/s/jw5pg6/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/jw5pg6/what_are_you_doing_this_weekend)
* [2026-02-27, 07:45:44](https://lobste.rs/s/xm8vfl/linux_id_linux_explores_new_way) - [Linux ID: Linux explores new way of authenticating developers and their code](https://www.zdnet.com/article/linux-kernel-maintainers-new-way-of-authenticating-developers-and-code/)
* [2026-02-27, 07:34:09](https://lobste.rs/s/4pqmdx/mothlamp_problems) - [Mothlamp Problems](https://unfoldingdiagrams.leaflet.pub/3mft6olldos26)
* [2026-02-27, 07:32:42](https://lobste.rs/s/aifnbl/accidentally_disabling_ssh_access_via) - [Accidentally disabling SSH access via scp](https://sny.sh/hypha/blog/scp)
* [2026-02-27, 06:47:00](https://soylentnews.org/article.pl?sid=26/02/26/049239&amp;from=rss) - [NASA Officially Classifies Boeing Starliner Failure as a Maximum-Level Type A Mishap](https://soylentnews.org/article.pl?sid=26/02/26/049239&amp;from=rss)
* [2026-02-27, 01:59:00](https://soylentnews.org/article.pl?sid=26/02/26/042214&amp;from=rss) - [Hungarian Startup Transforming Robot Manufacturing With 3D Tissue Braiding](https://soylentnews.org/article.pl?sid=26/02/26/042214&amp;from=rss)
* [2026-02-26, 21:54:17](https://lobste.rs/s/wbpjmd/how_my_side_project_got_banned_from) - [How my side project got banned from the internet](https://trysound.io/how-my-side-project-got-banned-from-the-internet/)
* [2026-02-26, 21:30:19](https://news.ycombinator.com/item?id=47172238) - [Show HN: Unfucked - version all changes (by any tool) - local-first/source avail](https://www.unfudged.io/)
* [2026-02-26, 21:17:00](https://soylentnews.org/article.pl?sid=26/02/25/1612247&amp;from=rss) - [Tesla &apos;Robotaxi&apos; Adds 5 More Crashes in Austin in a Month](https://soylentnews.org/article.pl?sid=26/02/25/1612247&amp;from=rss)
* [2026-02-26, 18:29:56](https://news.ycombinator.com/item?id=47170030) - [Smallest transformer that can add two 10-digit numbers](https://github.com/anadim/AdderBoard)
* [2026-02-26, 16:45:11](https://lobste.rs/s/o3cpxf/sliced_by_go_s_slices) - [Sliced by Go’s Slices](https://ohadravid.github.io/posts/2026-02-go-sliced/)
* [2026-02-26, 16:34:00](https://soylentnews.org/article.pl?sid=26/02/25/1553206&amp;from=rss) - [SpaceX&apos;s Faulty Falcon Spewed Massive Lithium Plume Over Europe, Say Scientists](https://soylentnews.org/article.pl?sid=26/02/25/1553206&amp;from=rss)
* [2026-02-26, 16:25:09](https://lobste.rs/s/ul9mjj/making_webassembly_first_class_language) - [Making WebAssembly a first-class language on the Web](https://hacks.mozilla.org/2026/02/making-webassembly-a-first-class-language-on-the-web/)
* [2026-02-26, 11:48:00](https://soylentnews.org/article.pl?sid=26/02/25/1551209&amp;from=rss) - [Michael Pollan Says AI May &apos;Think&apos; — but It Will Never be Conscious](https://soylentnews.org/article.pl?sid=26/02/25/1551209&amp;from=rss)
* [2026-02-26, 07:06:00](https://soylentnews.org/article.pl?sid=26/02/25/1546252&amp;from=rss) - [80386 Protection](https://soylentnews.org/article.pl?sid=26/02/25/1546252&amp;from=rss)
* [2026-02-26, 03:03:00](https://news.ycombinator.com/item?id=47161277) - [The man building Team USA&apos;s Olympic bobsleds](https://www.adirondackexplorer.org/community-news/people/lake-placid-man-builds-team-usas-olympic-bobsleds/)
* [2026-02-26, 02:20:00](https://soylentnews.org/article.pl?sid=26/02/25/1544219&amp;from=rss) - [AI Bot Seemingly Shames Developer for Rejected Pull Request](https://soylentnews.org/article.pl?sid=26/02/25/1544219&amp;from=rss)
* [2026-02-25, 21:35:00](https://soylentnews.org/article.pl?sid=26/02/24/0734201&amp;from=rss) - [AI Agent Throws LAN Party](https://soylentnews.org/article.pl?sid=26/02/24/0734201&amp;from=rss)
* [2026-02-25, 19:47:07](https://news.ycombinator.com/item?id=47156814) - [5,300-year-old &apos;bow drill&apos; rewrites story of ancient Egyptian tools](https://phys.org/news/2026-02-year-drill-rewrites-story-ancient.html)
* [2026-02-25, 18:15:07](https://news.ycombinator.com/item?id=47155375) - [Show HN: I ported Manim to TypeScript (run 3b1B math animations in the browser)](https://github.com/maloyan/manim-web)
* [2026-02-25, 17:47:47](https://news.ycombinator.com/item?id=47154962) - [Time-Travel Debugging: Replaying Production Bugs Locally](https://lackofimagination.org/2026/02/time-travel-debugging-replaying-production-bugs-locally/)
* [2026-02-25, 16:37:00](https://soylentnews.org/article.pl?sid=26/02/24/0444250&amp;from=rss) - [Astronomers Identify a Galaxy Made Almost Entirely of Dark Matter](https://soylentnews.org/article.pl?sid=26/02/24/0444250&amp;from=rss)
* [2026-02-25, 12:16:12](https://news.ycombinator.com/item?id=47150546) - [Inventing the Lisa user interface – Interactions](https://dl.acm.org/doi/10.1145/242388.242405)
* [2026-02-25, 11:55:00](https://soylentnews.org/article.pl?sid=26/02/24/0437208&amp;from=rss) - [China Remains Embedded in US Energy Networks &apos;for the Purpose of Taking It Down&apos;](https://soylentnews.org/article.pl?sid=26/02/24/0437208&amp;from=rss)
* [2026-02-25, 07:13:00](https://soylentnews.org/article.pl?sid=26/02/24/0427256&amp;from=rss) - [California Bill Would Restrict 3D Printers to State-Approved Models to Prevent Making  Gun Parts](https://soylentnews.org/article.pl?sid=26/02/24/0427256&amp;from=rss)
* [2026-02-25, 05:14:09](https://news.ycombinator.com/item?id=47147597) - [The Eternal Promise: A History of Attempts to Eliminate Programmers](https://www.ivanturkovic.com/2026/01/22/history-software-simplification-cobol-ai-hype/)
* [2026-02-25, 02:26:00](https://soylentnews.org/article.pl?sid=26/02/24/0420243&amp;from=rss) - [AI Apps on the Google Play Store Are Leaking Customer Data and Photos](https://soylentnews.org/article.pl?sid=26/02/24/0420243&amp;from=rss)
* [2026-02-24, 21:41:00](https://soylentnews.org/politics/article.pl?sid=26/02/23/103249&amp;from=rss) - [OS-Level Age Verification in Proposed Legislation in Colorado](https://soylentnews.org/politics/article.pl?sid=26/02/23/103249&amp;from=rss)
* [2026-02-24, 16:56:00](https://soylentnews.org/article.pl?sid=26/02/23/0959244&amp;from=rss) - [Is This Glass Square the Long, Long Future of Data Storage ?](https://soylentnews.org/article.pl?sid=26/02/23/0959244&amp;from=rss)
* [2026-02-24, 13:04:25](https://news.ycombinator.com/item?id=47136612) - [Eschewing Zshell for Emacs Shell (2014)](https://www.howardism.org/Technical/Emacs/eshell-fun.html)
* [2026-02-24, 12:27:44](https://news.ycombinator.com/item?id=47136272) - [Package Managers à la Carte: a formal model of dependency resolution](https://arxiv.org/abs/2602.18602)
* [2026-02-24, 12:09:00](https://soylentnews.org/article.pl?sid=26/02/23/010246&amp;from=rss) - [Two Days of Oatmeal Reduce Cholesterol Level](https://soylentnews.org/article.pl?sid=26/02/23/010246&amp;from=rss)
* [2026-02-24, 07:21:00](https://soylentnews.org/article.pl?sid=26/02/23/0058242&amp;from=rss) - [Video Games are Losing the \&quot;Attention War\&quot; to Gambling, Porn, and Crypto](https://soylentnews.org/article.pl?sid=26/02/23/0058242&amp;from=rss)
* [2026-02-24, 02:37:00](https://soylentnews.org/article.pl?sid=26/02/23/0050217&amp;from=rss) - [Why Are Tatooine Planets Rare? Blame General Relativity](https://soylentnews.org/article.pl?sid=26/02/23/0050217&amp;from=rss)
