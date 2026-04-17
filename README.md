# [News Summary](https://kherrick.github.io/news-summary/)

## Cybersecurity and Software Innovations

* [NIST Limits CVE Enrichment After 263% Surge In Vulnerability Submissions](https://it.slashdot.org/story/26/04/17/2127243/nist-limits-cve-enrichment-after-263-surge-in-vulnerability-submissions?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A discussion on NIST scaling back vulnerability data enrichment due to an overwhelming increase in CVE submissions, raising concerns about cybersecurity practices and data management.

* [AppArmor's experimental permissions prompting](https://discourse.ubuntu.com/t/ubuntu-desktop-s-24-10-dev-cycle-part-5-introducing-permissions-prompting/47963) - Introduction of experimental permissions prompting in AppArmor, aimed at improving system security and user interaction.

* [Practical Antiforgery in Software Design](https://hudlow.org/2026/practical-antiforgery) - A detailed approach to implementing effective antiforgery mechanisms in software design.

* [Okay, what actually uses Rust](https://blog.goose.love/posts/what-actually-uses-rust/) - Exploration of real-world use cases and adoption of the Rust programming language.

* [Stop using JWTs (2019)](https://gist.github.com/samsch/0d1f3d3b4745d778f78b230cf6061452) - A reflective critique on security pitfalls and suggested alternatives to JSON Web Tokens.

## Technological Breakthroughs and Innovations

* [Mozilla 'Thunderbolt' Is an Open-Source AI Client Focused On Control and Self-Hosting](https://tech.slashdot.org/story/26/04/17/1850251/mozilla-thunderbolt-is-an-open-source-ai-client-focused-on-control-and-self-hosting?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Mozilla introduces 'Thunderbolt,' an open-source AI client designed to prioritize user control and self-hosting capabilities.

* [Microsoft Increases the FAT32 Limit From 32GB To 2TB](https://hardware.slashdot.org/story/26/04/17/1623236/microsoft-increases-the-fat32-limit-from-32gb-to-2tb?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Microsoft expands the FAT32 partition size limit, enabling support for up to 2TB.

* [An early look at tailscale-rs, a tsnet library in Rust](https://tailscale.com/blog/tailscale-rs-rust-tsnet-library-preview) - Preview of a Rust-based library to support tailscale networking.

* [git-kv: Key-value store attached to git commits using Git notes](https://github.com/sebastien/git-kv) - Introduction to git-kv, a tool that enables key-value storage attached to git commits via Git notes.

## Artificial Intelligence Developments

* [OpenAI Starts Offering a Biology-Tuned LLM](https://science.slashdot.org/story/26/04/17/1721205/openai-starts-offering-a-biology-tuned-llm?utm_source=rss1.0mainlinkanon&utm_medium=feed) - OpenAI launches a new AI model specifically calibrated for advancements in biology.

* [The AI Great Leap Forward](https://soylentnews.org/article.pl?sid=26/04/14/043205&from=rss) - A reflection on the significant advancements in AI and its implications for technology and society.

* [Meta Zuckerberg Becomes the New Clippy](https://soylentnews.org/article.pl?sid=26/04/15/1727239&from=rss) - Satirical commentary on how Mark Zuckerberg is likened to Clippy, referencing Meta's advances in digital assistants.

* [Cloudflare and GoDaddy Team Up to Curb AI Bot Brigades](https://soylentnews.org/article.pl?sid=26/04/12/1147250&from=rss) - A partnership aiming to prevent misuse of AI bots through technological innovation.

## Space Exploration and Astronomy

* [All 12 moonwalkers had 'lunar hay fever' from dust smelling like gunpowder (2018)](https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/The_toxic_side_of_the_Moon) - Exploration of health effects experienced by Apollo astronauts, including 'lunar hay fever' caused by moon dust.

* [NASA Force](https://nasaforce.gov/) - A newly launched platform by NASA exploring advancements in space exploration and technology.

## Science Discoveries

* [Physicists Think They've Resolved the Proton Size Puzzle](https://soylentnews.org/article.pl?sid=26/04/16/1137236&from=rss) - Scientists claim to have solved the long-standing mystery surrounding the size of protons.

* [Sperm Whales' Communication Closely Parallels Human Language, Study Finds](https://science.slashdot.org/story/26/04/17/0143228/sperm-whales-communication-closely-parallels-human-language-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Study uncovers startling parallels between sperm whale communication structures and human language.

* [Human Echolocation Works Step by Step](https://soylentnews.org/article.pl?sid=26/04/12/1524251&from=rss) - Examination of the science behind human echolocation and its implications for navigation.

## Cultural and Historical Insights

* [Middle schooler finds coin from Troy in Berlin](https://www.thehistoryblog.com/archives/75848) - A young student discovers an ancient coin from Troy during a school trip to Berlin.

* [A history of teapots and UNIX](https://discuss.systems/@thalia/116417242648384997) - A whimsical exploration of the surprising intersection between teapots and UNIX systems.

* [Tea: A Stimulant That Made the Modern World](https://soylentnews.org/article.pl?sid=26/04/12/173259&from=rss) - A retrospective on how tea's popularity influenced modern societal and economic structures.

* [Connie Converse was a folk-music genius. Then she vanished](https://www.bbc.com/culture/article/20260413-the-mystery-of-a-missing-folk-music-pioneer) - Telling the story of a pioneering folk musician's life and mysterious disappearance.

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

* [2026-04-17, 22:00:00](https://it.slashdot.org/story/26/04/17/2127243/nist-limits-cve-enrichment-after-263-surge-in-vulnerability-submissions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NIST Limits CVE Enrichment After 263% Surge In Vulnerability Submissions](https://it.slashdot.org/story/26/04/17/2127243/nist-limits-cve-enrichment-after-263-surge-in-vulnerability-submissions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-17, 21:38:20](https://news.ycombinator.com/item?id=47810872) - [A simplified model of Fil-C](https://www.corsix.org/content/simplified-model-of-fil-c)
* [2026-04-17, 21:33:13](https://lobste.rs/s/tyxxnd/building_ezli_me_link_shortener_rust) - [Building ezli.me, a link shortener in Rust](https://rustunit.com/blog/2026/04-17-ezlime-link-shortener-in-rust/)
* [2026-04-17, 21:00:34](https://lobste.rs/s/m0c78b/why_is_ipv6_so_complicated) - [Why is IPv6 so complicated?](https://github.com/becarpenter/misc/blob/main/why6why.md)
* [2026-04-17, 21:00:08](https://news.ycombinator.com/item?id=47810507) - [Arc Prize Foundation (YC W26) Is Hiring a Platform Engineer for ARC-AGI-4](https://www.ycombinator.com/companies/arc-prize-foundation/jobs/AKZRZDN-platform-engineer-benchmark-lead)
* [2026-04-17, 21:00:00](https://yro.slashdot.org/story/26/04/17/2115258/gazing-into-sam-altmans-orb-could-solve-ticket-scalping?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Gazing Into Sam Altman&apos;s Orb Could Solve Ticket Scalping](https://yro.slashdot.org/story/26/04/17/2115258/gazing-into-sam-altmans-orb-could-solve-ticket-scalping?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-17, 20:27:16](https://lobste.rs/s/rp1yrv/simplified_model_fil_c) - [A simplified model of Fil-C](https://www.corsix.org/content/simplified-model-of-fil-c)
* [2026-04-17, 20:01:54](https://lobste.rs/s/u1fill/apparmor_s_experimental_permissions) - [AppArmor&apos;s experimental permissions prompting](https://discourse.ubuntu.com/t/ubuntu-desktop-s-24-10-dev-cycle-part-5-introducing-permissions-prompting/47963)
* [2026-04-17, 20:00:00](https://tech.slashdot.org/story/26/04/17/1850251/mozilla-thunderbolt-is-an-open-source-ai-client-focused-on-control-and-self-hosting?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mozilla &apos;Thunderbolt&apos; Is an Open-Source AI Client Focused On Control and Self-Hosting](https://tech.slashdot.org/story/26/04/17/1850251/mozilla-thunderbolt-is-an-open-source-ai-client-focused-on-control-and-self-hosting?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-17, 19:00:07](https://news.ycombinator.com/item?id=47809347) - [Tesla tells HW3 owner to &apos;be patient&apos; after 7 years of waiting for FSD](https://electrek.co/2026/04/17/tesla-hw3-owners-be-patient-7-years-fsd/)
* [2026-04-17, 19:00:00](https://entertainment.slashdot.org/story/26/04/17/180203/amazons-new-fire-tv-sticks-no-longer-support-sideloading?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon&apos;s New Fire TV Sticks No Longer Support Sideloading](https://entertainment.slashdot.org/story/26/04/17/180203/amazons-new-fire-tv-sticks-no-longer-support-sideloading?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-17, 18:17:01](https://news.ycombinator.com/item?id=47808913) - [All 12 moonwalkers had \&quot;lunar hay fever\&quot; from dust smelling like gunpowder (2018)](https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/The_toxic_side_of_the_Moon)
* [2026-04-17, 18:06:00](https://soylentnews.org/article.pl?sid=26/04/16/1137236&amp;from=rss) - [Physicists Think They&apos;ve Resolved the Proton Size Puzzle](https://soylentnews.org/article.pl?sid=26/04/16/1137236&amp;from=rss)
* [2026-04-17, 18:00:00](https://science.slashdot.org/story/26/04/17/1721205/openai-starts-offering-a-biology-tuned-llm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Starts Offering a Biology-Tuned LLM](https://science.slashdot.org/story/26/04/17/1721205/openai-starts-offering-a-biology-tuned-llm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-17, 17:46:45](https://lobste.rs/s/my3lu9/lost_thesis_dennis_ritchie) - [The lost thesis of Dennis Ritchie](https://archive.computerhistory.org/resources/access/text/2020/05/102790971/Ritchie_dissertation.pdf)
* [2026-04-17, 17:40:49](https://lobste.rs/s/b75v6m/reflections_on_30_years_hpc_programming) - [Reflections on 30 Years of HPC Programming: So many hardware advances, so little adoption of new languages](https://chapel-lang.org/blog/posts/30years/)
* [2026-04-17, 17:18:58](https://news.ycombinator.com/item?id=47808268) - [Show HN: Smol machines – subsecond coldstart, portable virtual machines](https://github.com/smol-machines/smolvm)
* [2026-04-17, 17:00:00](https://hardware.slashdot.org/story/26/04/17/1623236/microsoft-increases-the-fat32-limit-from-32gb-to-2tb?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Increases the FAT32 Limit From 32GB To 2TB](https://hardware.slashdot.org/story/26/04/17/1623236/microsoft-increases-the-fat32-limit-from-32gb-to-2tb?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-17, 16:38:44](https://news.ycombinator.com/item?id=47807809) - [Show HN: PanicLock – Close your MacBook lid disable TouchID –&gt; password unlock](https://github.com/paniclock/paniclock/)
* [2026-04-17, 16:23:22](https://news.ycombinator.com/item?id=47807619) - [Hyperscalers have already outspent most famous US megaprojects](https://twitter.com/finmoorhouse/status/2044933442236776794)
* [2026-04-17, 16:19:53](https://news.ycombinator.com/item?id=47807583) - [I&apos;m spending 3 months coding the old way](https://miguelconner.substack.com/p/im-coding-by-hand)
* [2026-04-17, 16:13:26](https://news.ycombinator.com/item?id=47807503) - [Detecting DOSBox from Within the Box](https://datagirl.xyz/posts/dos_inside_the_box.html)
* [2026-04-17, 16:06:02](https://lobste.rs/s/9vw47d/practical_antiforgery_software_design) - [Practical Antiforgery in Software Design](https://hudlow.org/2026/practical-antiforgery)
* [2026-04-17, 16:00:00](https://news.slashdot.org/story/26/04/17/0345239/newly-unsealed-records-reveal-amazons-price-fixing-tactics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Newly Unsealed Records Reveal Amazon&apos;s Price-Fixing Tactics](https://news.slashdot.org/story/26/04/17/0345239/newly-unsealed-records-reveal-amazons-price-fixing-tactics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-17, 15:47:41](https://news.ycombinator.com/item?id=47807209) - [NASA Force](https://nasaforce.gov/)
* [2026-04-17, 15:29:36](https://news.ycombinator.com/item?id=47807006) - [Measuring Claude 4.7&apos;s tokenizer costs](https://www.claudecodecamp.com/p/i-measured-claude-4-7-s-new-tokenizer-here-s-what-it-costs-you)
* [2026-04-17, 15:20:45](https://news.ycombinator.com/item?id=47806899) - [The Gregorio project – GPL tools for typesetting Gregorian chant](https://gregorio-project.github.io/index.html)
* [2026-04-17, 15:09:14](https://news.ycombinator.com/item?id=47806777) - [NIST gives up enriching most CVEs](https://risky.biz/risky-bulletin-nist-gives-up-enriching-most-cves/)
* [2026-04-17, 15:04:09](https://news.ycombinator.com/item?id=47806725) - [Claude Design](https://www.anthropic.com/news/claude-design-anthropic-labs)
* [2026-04-17, 15:00:00](https://news.slashdot.org/story/26/04/17/0158258/us-to-create-high-tech-manufacturing-zone-in-philippines?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US To Create High-Tech Manufacturing Zone In Philippines](https://news.slashdot.org/story/26/04/17/0158258/us-to-create-high-tech-manufacturing-zone-in-philippines?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-17, 14:58:04](https://lobste.rs/s/tirqno/healthchecks_io_now_uses_self_hosted) - [Healthchecks.io Now Uses Self-hosted Object Storage](https://blog.healthchecks.io/2026/04/healthchecks-io-now-uses-self-hosted-object-storage/)
* [2026-04-17, 14:41:49](https://news.ycombinator.com/item?id=47806484) - [Middle schooler finds coin from Troy in Berlin](https://www.thehistoryblog.com/archives/75848)
* [2026-04-17, 14:37:16](https://news.ycombinator.com/item?id=47806440) - [Iceye Open Data](https://www.iceye.com/open-data-initiative)
* [2026-04-17, 14:29:11](https://news.ycombinator.com/item?id=47806348) - [Healthchecks.io now uses self-hosted object storage](https://blog.healthchecks.io/2026/04/healthchecks-io-now-uses-self-hosted-object-storage/)
* [2026-04-17, 14:25:46](https://news.ycombinator.com/item?id=47806304) - [Ban the sale of precise geolocation](https://www.lawfaremedia.org/article/it-is-time-to-ban-the-sale-of-precise-geolocation)
* [2026-04-17, 13:49:55](https://lobste.rs/s/d55yj0/we_beat_google_s_zero_knowledge_proof) - [We beat Google’s zero-knowledge proof of quantum cryptanalysis](https://blog.trailofbits.com/2026/04/17/we-beat-googles-zero-knowledge-proof-of-quantum-cryptanalysis/)
* [2026-04-17, 13:20:00](https://soylentnews.org/article.pl?sid=26/04/15/1730255&amp;from=rss) - [Claude Mythos Preview Has Officially Frightened the British](https://soylentnews.org/article.pl?sid=26/04/15/1730255&amp;from=rss)
* [2026-04-17, 13:02:52](https://lobste.rs/s/y8jlwv/tangled_newsletter_01_hello) - [tangled newsletter 01 — hello](https://blog.tangled.org/newsletter-01/)
* [2026-04-17, 12:22:14](https://lobste.rs/s/oozbdu/zmx_run_local_code_agents_on_remote) - [zmx - run local code agents on remote machines](https://bower.sh/zmx-ai-portal)
* [2026-04-17, 12:01:19](https://news.ycombinator.com/item?id=47804965) - [Isaac Asimov: The Last Question (1956)](https://hex.ooo/library/last_question.html)
* [2026-04-17, 11:59:40](https://lobste.rs/s/zxgmfx/http_desync_discord_s_media_proxy_spying) - [HTTP desync in Discord&apos;s media proxy: Spying on a whole platform](https://tmctmt.com/posts/http-desync-in-discord/)
* [2026-04-17, 11:50:11](https://lobste.rs/s/ku8hlz/discourse_is_not_going_closed_source) - [Discourse is Not Going Closed Source](https://blog.discourse.org/2026/04/discourse-is-not-going-closed-source/)
* [2026-04-17, 11:37:05](https://lobste.rs/s/tbvl30/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/tbvl30/what_are_you_doing_this_weekend)
* [2026-04-17, 11:00:00](https://news.slashdot.org/story/26/04/17/0325238/reed-hastings-is-leaving-netflix-after-29-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Reed Hastings Is Leaving Netflix After 29 Years](https://news.slashdot.org/story/26/04/17/0325238/reed-hastings-is-leaving-netflix-after-29-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-17, 08:51:38](https://news.ycombinator.com/item?id=47803844) - [Ada, its design, and the language that built the languages](https://www.iqiipi.com/the-quiet-colossus.html)
* [2026-04-17, 08:36:00](https://soylentnews.org/article.pl?sid=26/04/15/1727239&amp;from=rss) - [Meta Zuckerberg Becomes the New Clippy](https://soylentnews.org/article.pl?sid=26/04/15/1727239&amp;from=rss)
* [2026-04-17, 07:54:45](https://lobste.rs/s/vbid4k/early_look_at_tailscale_rs_tsnet_library) - [An early look at tailscale-rs, a tsnet library in Rust](https://tailscale.com/blog/tailscale-rs-rust-tsnet-library-preview)
* [2026-04-17, 07:00:00](https://apple.slashdot.org/story/26/04/17/0336256/intels-new-core-series-3-is-its-answer-to-the-macbook-neo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel&apos;s New Core Series 3 Is Its Answer To the MacBook Neo](https://apple.slashdot.org/story/26/04/17/0336256/intels-new-core-series-3-is-its-answer-to-the-macbook-neo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-17, 06:53:27](https://lobste.rs/s/ql5jpq/history_teapots_unix) - [A history of teapots and UNIX](https://discuss.systems/@thalia/116417242648384997)
* [2026-04-17, 05:43:07](https://lobste.rs/s/yr2mcf/folk_computer) - [Folk Computer](https://folk.computer/start)
* [2026-04-17, 04:11:13](https://lobste.rs/s/ygjm5d/git_kv_key_value_store_attached_git) - [git-kv: Key-value store attached to git commits using Git notes](https://github.com/sebastien/git-kv)
* [2026-04-17, 03:52:00](https://soylentnews.org/article.pl?sid=26/04/15/1723257&amp;from=rss) - [Ukraine&apos;s Military Robot Surge Aims to Offset Drone Risks to Humans](https://soylentnews.org/article.pl?sid=26/04/15/1723257&amp;from=rss)
* [2026-04-17, 03:30:00](https://science.slashdot.org/story/26/04/17/0143228/sperm-whales-communication-closely-parallels-human-language-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sperm Whales&apos; Communication Closely Parallels Human Language, Study Finds](https://science.slashdot.org/story/26/04/17/0143228/sperm-whales-communication-closely-parallels-human-language-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-17, 01:38:01](https://news.ycombinator.com/item?id=47801639) - [Solitaire simulator for finding the best strategy: Current record is 8.590%](https://github.com/dacracot/Klondike3-Simulator)
* [2026-04-16, 23:07:00](https://soylentnews.org/article.pl?sid=26/04/15/1539246&amp;from=rss) - [The Entity That Has Been Watching Bitcoin for 14 Years](https://soylentnews.org/article.pl?sid=26/04/15/1539246&amp;from=rss)
* [2026-04-16, 23:00:00](https://yro.slashdot.org/story/26/04/16/2052224/totalrecall-reloaded-tool-finds-a-side-entrance-to-windows-11-recall-database?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;TotalRecall Reloaded&apos; Tool Finds a Side Entrance To Windows 11 Recall Database](https://yro.slashdot.org/story/26/04/16/2052224/totalrecall-reloaded-tool-finds-a-side-entrance-to-windows-11-recall-database?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-16, 22:00:00](https://developers.slashdot.org/story/26/04/16/2040206/openais-big-codex-update-is-a-direct-shot-at-claude-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI&apos;s Big Codex Update Is a Direct Shot At Claude Code](https://developers.slashdot.org/story/26/04/16/2040206/openais-big-codex-update-is-a-direct-shot-at-claude-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-16, 21:00:00](https://linux.slashdot.org/story/26/04/16/2029253/is-linux-mint-in-trouble?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is Linux Mint In Trouble?](https://linux.slashdot.org/story/26/04/16/2029253/is-linux-mint-in-trouble?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-16, 20:32:27](https://lobste.rs/s/dlxlvj/okay_what_actually_uses_rust) - [Okay, what actually uses Rust](https://blog.goose.love/posts/what-actually-uses-rust/)
* [2026-04-16, 20:00:00](https://hardware.slashdot.org/story/26/04/16/1916239/europe-has-maybe-6-weeks-of-jet-fuel-left?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Europe Has &apos;Maybe 6 Weeks of Jet Fuel Left&apos;](https://hardware.slashdot.org/story/26/04/16/1916239/europe-has-maybe-6-weeks-of-jet-fuel-left?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-16, 19:16:00](https://lobste.rs/s/xaicu8/claude_coding_vibes_are_getting_worse) - [The Claude Coding Vibes Are Getting Worse](https://blog.matthewbrunelle.com/the-claude-coding-vibes-are-getting-worse/)
* [2026-04-16, 19:12:07](https://lobste.rs/s/nvzsa5/clojure_documentary) - [Clojure: The Documentary](https://www.youtube.com/watch?v=Y24vK_QDLFg)
* [2026-04-16, 18:20:00](https://soylentnews.org/article.pl?sid=26/04/15/1535223&amp;from=rss) - [US Appeals Court Declares 158-Year-Old Home Distilling Ban Unconstitutional](https://soylentnews.org/article.pl?sid=26/04/15/1535223&amp;from=rss)
* [2026-04-16, 17:36:29](https://news.ycombinator.com/item?id=47796818) - [Show HN: Stage – Putting humans back in control of code review](https://stagereview.app/)
* [2026-04-16, 17:34:44](https://lobste.rs/s/myzsbg/stop_using_jwts_2019) - [Stop using JWTs (2019)](https://gist.github.com/samsch/0d1f3d3b4745d778f78b230cf6061452)
* [2026-04-16, 15:14:10](https://lobste.rs/s/pmxhem/announcing_rust_1_95_0) - [Announcing Rust 1.95.0](https://blog.rust-lang.org/2026/04/16/Rust-1.95.0/)
* [2026-04-16, 14:01:20](https://lobste.rs/s/yhbjpt/future_everything_is_lies_i_guess_where_do) - [The Future of Everything is Lies, I Guess: Where Do We Go From Here?](https://aphyr.com/posts/420-the-future-of-everything-is-lies-i-guess-where-do-we-go-from-here)
* [2026-04-16, 13:36:00](https://soylentnews.org/article.pl?sid=26/04/15/0217209&amp;from=rss) - [AI Token Freeloaders Manipulating Customer Support Bots](https://soylentnews.org/article.pl?sid=26/04/15/0217209&amp;from=rss)
* [2026-04-16, 08:52:00](https://soylentnews.org/communityreviews/article.pl?sid=26/04/15/0214204&amp;from=rss) - [OpenAI Says Elon Musk is ‘Injecting Chaos’ With Recent Legal Maneuver](https://soylentnews.org/communityreviews/article.pl?sid=26/04/15/0214204&amp;from=rss)
* [2026-04-16, 08:47:04](https://lobste.rs/s/xijpr1/ipv6_traffic_crosses_50_mark) - [IPv6 traffic crosses the 50% mark](https://www.google.com/intl/en/ipv6/statistics.html?yzh=28197)
* [2026-04-16, 04:05:00](https://soylentnews.org/article.pl?sid=26/04/15/028227&amp;from=rss) - [This Memory Chip Survives Temperatures Hotter Than Lava](https://soylentnews.org/article.pl?sid=26/04/15/028227&amp;from=rss)
* [2026-04-15, 23:20:00](https://soylentnews.org/article.pl?sid=26/04/15/021231&amp;from=rss) - [Blaming Kids for Poor Security](https://soylentnews.org/article.pl?sid=26/04/15/021231&amp;from=rss)
* [2026-04-15, 18:37:00](https://soylentnews.org/article.pl?sid=26/04/15/0158227&amp;from=rss) - [South Korea&apos;s Telecom Giants Surprise 7 Million Users With Unlimited, Universal Internet](https://soylentnews.org/article.pl?sid=26/04/15/0158227&amp;from=rss)
* [2026-04-15, 16:59:08](https://news.ycombinator.com/item?id=47781889) - [Introducing: ShaderPad](https://rileyjshaw.com/blog/introducing-shaderpad/)
* [2026-04-15, 13:59:07](https://news.ycombinator.com/item?id=47779049) - [I built a 3D printing business and ran it for 8 months](https://www.wespiser.com/posts/2026-04-12-3D-Printing-Biz.html)
* [2026-04-15, 13:52:00](https://soylentnews.org/article.pl?sid=26/04/14/0413241&amp;from=rss) - [Electrode Technology Achieves 86% Efficiency for Converting CO₂ Into Plastic Precursors](https://soylentnews.org/article.pl?sid=26/04/14/0413241&amp;from=rss)
* [2026-04-15, 13:47:58](https://news.ycombinator.com/item?id=47778922) - [Are the costs of AI agents also rising exponentially? (2025)](https://www.tobyord.com/writing/hourly-costs-for-ai-agents)
* [2026-04-15, 13:13:20](https://news.ycombinator.com/item?id=47778524) - [Designing the Transport Typeface](https://www.thamesandhudson.com/blogs/all-news-features/designing-the-transport-typeface-margaret-calvert-on-the-making-of-britain-s-road-signs)
* [2026-04-15, 09:24:06](https://news.ycombinator.com/item?id=47776663) - [Connie Converse was a folk-music genius. Then she vanished](https://www.bbc.com/culture/article/20260413-the-mystery-of-a-missing-folk-music-pioneer)
* [2026-04-15, 09:07:00](https://soylentnews.org/article.pl?sid=26/04/14/049220&amp;from=rss) - [Linux Lays Down the Law on AI-Generated Code](https://soylentnews.org/article.pl?sid=26/04/14/049220&amp;from=rss)
* [2026-04-15, 04:22:00](https://soylentnews.org/article.pl?sid=26/04/14/043205&amp;from=rss) - [The AI Great Leap Forward](https://soylentnews.org/article.pl?sid=26/04/14/043205&amp;from=rss)
* [2026-04-15, 01:47:46](https://news.ycombinator.com/item?id=47773722) - [The GNU libc atanh is correctly rounded](https://inria.hal.science/hal-05591661)
* [2026-04-14, 23:35:00](https://soylentnews.org/article.pl?sid=26/04/14/0256247&amp;from=rss) - [Missouri Town Fires Half its City Council Over Data Center Deal](https://soylentnews.org/article.pl?sid=26/04/14/0256247&amp;from=rss)
* [2026-04-14, 19:37:51](https://news.ycombinator.com/item?id=47770405) - [MZI-based transistorlessness might finally be here](https://write.as/mnggfj7asl07k)
* [2026-04-14, 18:53:00](https://soylentnews.org/article.pl?sid=26/04/14/0235214&amp;from=rss) - [Original Task Manager Was Only 80KB So It Could Run Smoothly on 90s Computers](https://soylentnews.org/article.pl?sid=26/04/14/0235214&amp;from=rss)
* [2026-04-14, 14:02:00](https://soylentnews.org/article.pl?sid=26/04/12/173259&amp;from=rss) - [Tea: A Stimulant That Made the Modern World ](https://soylentnews.org/article.pl?sid=26/04/12/173259&amp;from=rss)
* [2026-04-14, 09:12:00](https://soylentnews.org/article.pl?sid=26/04/12/170258&amp;from=rss) - [Linux Kernel Maintainers Are Following Through on Removing Intel 486 Support](https://soylentnews.org/article.pl?sid=26/04/12/170258&amp;from=rss)
* [2026-04-14, 04:29:00](https://soylentnews.org/article.pl?sid=26/04/12/170200&amp;from=rss) - [Startup Secures $30 Million Contract to 3D Print Jet Engines for the USAF](https://soylentnews.org/article.pl?sid=26/04/12/170200&amp;from=rss)
* [2026-04-13, 23:44:00](https://soylentnews.org/article.pl?sid=26/04/12/1524251&amp;from=rss) - [Human Echolocation Works Step by Step](https://soylentnews.org/article.pl?sid=26/04/12/1524251&amp;from=rss)
* [2026-04-13, 21:51:30](https://news.ycombinator.com/item?id=47758309) - [Webloc: Analysis of Penlink&apos;s Ad-Based Geolocation Surveillance Tech](https://citizenlab.ca/research/analysis-of-penlinks-ad-based-geolocation-surveillance-tech/)
* [2026-04-13, 18:54:00](https://soylentnews.org/article.pl?sid=26/04/12/1522257&amp;from=rss) - [OpenAI Backs Bill That Would Limit Liability for AI-Enabled Mass Deaths or Financial Disasters](https://soylentnews.org/article.pl?sid=26/04/12/1522257&amp;from=rss)
* [2026-04-13, 14:11:00](https://soylentnews.org/article.pl?sid=26/04/12/1154237&amp;from=rss) - [Intel Introduces its Own Neural Compression Technology With a Fallback Mode That Works on All GPUs](https://soylentnews.org/article.pl?sid=26/04/12/1154237&amp;from=rss)
* [2026-04-13, 09:24:00](https://soylentnews.org/article.pl?sid=26/04/12/1147250&amp;from=rss) - [Cloudflare and GoDaddy Team Up to Curb AI Bot Brigades](https://soylentnews.org/article.pl?sid=26/04/12/1147250&amp;from=rss)
* [2026-04-13, 04:35:00](https://soylentnews.org/article.pl?sid=26/04/11/0355254&amp;from=rss) - [Little Snitch for Linux Released!](https://soylentnews.org/article.pl?sid=26/04/11/0355254&amp;from=rss)
