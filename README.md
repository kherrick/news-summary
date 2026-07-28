# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovations

* [DEF CON Bans Meta-Style 'Pervert Glasses'](https://yro.slashdot.org/story/26/07/28/171225/def-con-bans-meta-style-pervert-glasses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://yro.slashdot.org/story/26/07/28/171225/def-con-bans-meta-style-pervert-glasses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)): DEF CON, a well-known hacker conference, has banned 'pervert glasses' inspired by Meta's product line, pointing to concerns about privacy and security.

* [Show HN: Flashpaper – Self-destructing secret sharing with no database](https://flashpaper.app/) ([Comments](https://news.ycombinator.com/item?id=49085503)): A web tool for creating self-destructing secret messages without using a database, aimed at increasing privacy protection.

* [GrapheneOS Defends Data-Wiping Function That Blocked US Border Search](https://yro.slashdot.org/story/26/07/28/1652243/grapheneos-defends-data-wiping-function-that-blocked-us-border-search?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://yro.slashdot.org/story/26/07/28/1652243/grapheneos-defends-data-wiping-function-that-blocked-us-border-search?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)): GrapheneOS publicly defends their data-wiping feature in the face of legal scrutiny.

## Artificial Intelligence

* [Discovering Cryptographic Weaknesses with Claude](https://www.anthropic.com/research/discovering-cryptographic-weaknesses) ([Comments](https://news.ycombinator.com/item?id=49087091)): Researchers demonstrate how the AI model 'Claude' identifies cryptographic vulnerabilities.

* [South Korea Making its Own Security-Centric AI Model](https://soylentnews.org/article.pl?sid=26/07/27/0428208&amp;from=rss) ([Comments](https://soylentnews.org/article.pl?sid=26/07/27/0428208&amp;from=rss)): South Korea launches an ambitious program to develop a security-focused AI model.

* [Former OpenAI CTO Does What Altman Won't: Releases a Frontier AI Model That's Actually Open](https://soylentnews.org/article.pl?sid=26/07/23/0234212&amp;from=rss) ([Comments](https://soylentnews.org/article.pl?sid=26/07/23/0234212&amp;from=rss)): Controversy arises as OpenAI's ex-CTO unveils an openly accessible frontier AI model, diverging from the organization's previous practices.

## Scientific Discoveries and Research

* [New HIV vaccine shows unprecedented success in preclinical study](https://www.lji.org/news-events/news/post/new-hiv-vaccine-shows-unprecedented-success-in-preclinical-study/) ([Comments](https://news.ycombinator.com/item?id=49083314)): A groundbreaking development in HIV vaccine research reports extraordinary success in preclinical trials.

* [Earth's Biggest Disasters Strike In a Hidden Pattern Every 27 Million Years](https://science.slashdot.org/story/26/07/28/0047230/earths-biggest-disasters-strike-in-a-hidden-pattern-every-27-million-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://science.slashdot.org/story/26/07/28/0047230/earths-biggest-disasters-strike-in-a-hidden-pattern-every-27-million-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)): Scientific research proposes a cyclical pattern for Earth's largest disasters occurring every 27 million years.

## Engineering and Design

* [Parallel JSON parsing on the GPU with compute shaders](https://github.com/friendlymatthew/slurpjson#slurpjson) ([Comments](https://lobste.rs/s/nhixqy/parallel_json_parsing_on_gpu_with_compute)): Implementation of a system for parallel JSON parsing using GPU compute shaders.

* [I Designed A Custom PCB To Avoid Pressing A Button Three Times](https://blog.tymscar.com/posts/opensourcedimmer/) ([Comments](https://lobste.rs/s/49nob7/i_designed_custom_pcb_avoid_pressing)): An innovative story detailing a custom PCB design for avoiding repetitive input tasks.

* [Making KIO copy many files fast](https://blogs.kde.org/2026/07/28/making-kio-copy-many-files-fast/) ([Comments](https://lobste.rs/s/ewifzf/making_kio_copy_many_files_fast)): Examination of improvements to KIO software for accelerating the file copying process in KDE environments.

## Internet and Cybersecurity

* [DMARC has been public since 2012 but most company domains still don't enforce it](https://ciphercue.com/blog/dmarc-enforcement-gap-rua-fragmentation-2026) ([Comments](https://news.ycombinator.com/item?id=49081783)): Despite being public for over a decade, DMARC adoption remains slow in business ecosystems, highlighting shortcomings in email domain security.

* [Stop Killing the Internet: No Digital ID and No Age Verification](https://citizens-initiative.europa.eu/initiatives/details/2026/000011_en) ([Comments](https://news.ycombinator.com/item?id=49084938)): Initiative calls for halting the introduction of digital IDs and age verification measures that may impact freedom and privacy online.

## Culture and Society

* [Arizona State Launches Influencer Degree Where Students Must Gain Real Followers](https://news.slashdot.org/story/26/07/28/012244/arizona-state-launches-influencer-degree-where-students-must-gain-real-followers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://news.slashdot.org/story/26/07/28/012244/arizona-state-launches-influencer-degree-where-students-must-gain-real-followers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)): Arizona State University introduces a pioneering program in social media influence where students need to build a real-world audience.

* [One Ring to Rule Them All: Wiring Radios to Laptops the Hard Way](https://www.lysk.ai/post/wiring-radios-to-laptops-the-hard-way/) ([Comments](https://lobste.rs/s/db0m6j/one_ring_rule_them_all_wiring_radios)): A creative project showcasing the integration of modern laptops with various radio hardware, overcoming technical challenges in unexpected ways.

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

* [2026-07-28, 18:41:48](https://news.ycombinator.com/item?id=49088148) - [Deflock Casa Grande](https://deflockcg.com/)
* [2026-07-28, 18:35:11](https://news.ycombinator.com/item?id=49088058) - [MCP 2026-07-28 Specification: transport going stateless](https://blog.modelcontextprotocol.io/posts/2026-07-28/)
* [2026-07-28, 18:00:00](https://yro.slashdot.org/story/26/07/28/171225/def-con-bans-meta-style-pervert-glasses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DEF CON Bans Meta-Style &apos;Pervert Glasses&apos;](https://yro.slashdot.org/story/26/07/28/171225/def-con-bans-meta-style-pervert-glasses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-28, 17:22:16](https://news.ycombinator.com/item?id=49087091) - [Discovering Cryptographic Weaknesses with Claude](https://www.anthropic.com/research/discovering-cryptographic-weaknesses)
* [2026-07-28, 17:13:15](https://news.ycombinator.com/item?id=49086987) - [Scientific computing in the age of agentic AI](https://openai.com/index/scientific-computing-agentic-ai/)
* [2026-07-28, 17:11:54](https://news.ycombinator.com/item?id=49086971) - [Steel Bank Common Lisp version 2.6.7](https://sbcl.org/all-news.html?2.6.7)
* [2026-07-28, 17:05:51](https://news.ycombinator.com/item?id=49086890) - [WOFF 1.0: a milestone on W3C&apos;s journey of fonts on the web](https://www.w3.org/blog/2026/woff-1-0-a-milestone-on-w3cs-journey-of-fonts-on-the-web/)
* [2026-07-28, 17:00:00](https://yro.slashdot.org/story/26/07/28/1652243/grapheneos-defends-data-wiping-function-that-blocked-us-border-search?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GrapheneOS Defends Data-Wiping Function That Blocked US Border Search](https://yro.slashdot.org/story/26/07/28/1652243/grapheneos-defends-data-wiping-function-that-blocked-us-border-search?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-28, 16:58:31](https://news.ycombinator.com/item?id=49086788) - [Substack writers, you need a website](https://elizabethtai.com/2026/06/10/substack-writers-you-need-a-website/)
* [2026-07-28, 16:11:30](https://lobste.rs/s/an2tby/bastillion_5_1_single_jar_ssh_gateway_now) - [Bastillion 5.1: single-JAR SSH gateway now audits and replays every session](https://github.com/bastillion-io/Bastillion/releases#release-v5.1.0)
* [2026-07-28, 16:02:07](https://news.ycombinator.com/item?id=49085909) - [You Could Have Come Up with Kimi Delta Attention](https://blog.doubleword.ai/you-could-have-come-up-with-kimi-delta-attention)
* [2026-07-28, 16:00:00](https://hardware.slashdot.org/story/26/07/28/0123243/review-roundup-framework-laptop-13-pro?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Review Roundup: Framework Laptop 13 Pro](https://hardware.slashdot.org/story/26/07/28/0123243/review-roundup-framework-laptop-13-pro?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-28, 15:55:44](https://news.ycombinator.com/item?id=49085811) - [How Do I Profile eBPF Code?](https://naveensrinivasan.com/posts/2026-07-22-how-do-i-profile-ebpf-code/)
* [2026-07-28, 15:54:55](https://news.ycombinator.com/item?id=49085798) - [Show HN: XY – A Fast, composable, GPU-accelerated interactive plotting library](https://github.com/reflex-dev/xy)
* [2026-07-28, 15:50:38](https://news.ycombinator.com/item?id=49085731) - [Delayed Gratification – Proud to Be &apos;Last to Breaking News&apos;](https://www.slow-journalism.com/)
* [2026-07-28, 15:48:34](https://news.ycombinator.com/item?id=49085698) - [Kimi K3 Architecture Overview and Notes](https://sebastianraschka.com/blog/2026/kimi-k3-architecture-notes.html)
* [2026-07-28, 15:46:45](https://news.ycombinator.com/item?id=49085666) - [Zig&apos;s Incremental Compilation Internals](https://mlugg.co.uk/posts/incremental-compilation-internals/)
* [2026-07-28, 15:36:45](https://news.ycombinator.com/item?id=49085509) - [So, you want to make a game engine (2023)](https://lisyarus.github.io/blog/posts/so-you-want-to-make-a-game-engine.html#part-3)
* [2026-07-28, 15:36:35](https://news.ycombinator.com/item?id=49085503) - [Show HN: Flashpaper – Self-destructing secret sharing with no database](https://flashpaper.app/)
* [2026-07-28, 15:20:35](https://news.ycombinator.com/item?id=49085280) - [Harmony Explained: Progress Towards a Scientific Theory of Music (2012)](https://arxiv.org/abs/1202.4212)
* [2026-07-28, 15:18:40](https://lobste.rs/s/cxbtfq/dependency_cultures_richard_feldman) - [Dependency Cultures - Richard Feldman (Software Should Work Conf 2026)](https://www.youtube.com/watch?v=E82ly38YEEQ)
* [2026-07-28, 15:01:15](https://news.ycombinator.com/item?id=49084989) - [Anthropeum – Where in the world, and when, does this human artifact belong?](https://anthropeum.com/)
* [2026-07-28, 15:01:12](https://news.ycombinator.com/item?id=49084987) - [Now Is the Time to Give LLMs Access to the ACM Digital Library](https://cacm.acm.org/opinion/now-is-the-time-to-give-llms-access-to-the-acm-digital-library/)
* [2026-07-28, 15:00:00](https://yro.slashdot.org/story/26/07/28/0052221/tons-of-peoples-claude-chats-and-creations-are-exposed-on-google?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tons of Peoples&apos; Claude Chats and Creations Are Exposed On Google](https://yro.slashdot.org/story/26/07/28/0052221/tons-of-peoples-claude-chats-and-creations-are-exposed-on-google?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-28, 14:58:15](https://news.ycombinator.com/item?id=49084938) - [Stop Killing the Internet: No Digital ID and No Age Verification](https://citizens-initiative.europa.eu/initiatives/details/2026/000011_en)
* [2026-07-28, 14:52:00](https://soylentnews.org/article.pl?sid=26/07/27/0440212&amp;from=rss) - [The Fight Against AI Data Centers is Important – but It&apos;s Just a Starting Point](https://soylentnews.org/article.pl?sid=26/07/27/0440212&amp;from=rss)
* [2026-07-28, 14:39:46](https://lobste.rs/s/nhixqy/parallel_json_parsing_on_gpu_with_compute) - [Parallel JSON parsing on the GPU with compute shaders](https://github.com/friendlymatthew/slurpjson#slurpjson)
* [2026-07-28, 14:38:19](https://lobste.rs/s/jyiecw/where_are_third_places_for_learners) - [Where are the third places for learners?](https://kernelkennel.com/blog/where-is-the-middle-space/)
* [2026-07-28, 14:14:06](https://lobste.rs/s/rmzzdb/inside_zig_s_incremental_compilation) - [Inside Zig&apos;s Incremental Compilation](https://mlugg.co.uk/posts/incremental-compilation-internals/)
* [2026-07-28, 13:33:42](https://news.ycombinator.com/item?id=49083634) - [VMs can&apos;t boot with Network Mode set to Bridged on Apple M5 Pro machines](https://github.com/utmapp/UTM/issues/7658)
* [2026-07-28, 13:33:00](https://lobste.rs/s/49nob7/i_designed_custom_pcb_avoid_pressing) - [I Designed A Custom PCB To Avoid Pressing A Button Three Times](https://blog.tymscar.com/posts/opensourcedimmer/)
* [2026-07-28, 13:25:24](https://lobste.rs/s/6gx5vy/design_flaws_issetugid_2017) - [Design flaws in issetugid() (2017)](https://gist.github.com/nicowilliams/4daf74a3a0c86848d3cbd9d0cdb5e26e)
* [2026-07-28, 13:12:01](https://news.ycombinator.com/item?id=49083314) - [New HIV vaccine shows unprecedented success in preclinical study](https://www.lji.org/news-events/news/post/new-hiv-vaccine-shows-unprecedented-success-in-preclinical-study/)
* [2026-07-28, 13:10:24](https://lobste.rs/s/wdopf8/building_systems_software_with_nix) - [Building (systems) software with Nix](https://hondu.co/blog/building-systems-software)
* [2026-07-28, 13:07:14](https://news.ycombinator.com/item?id=49083239) - [Show HN: Formally verified 3D CSG: Trust 93 lines spec, not 1000 lines AI code](https://github.com/schildep/verified-3d-mesh-intersection)
* [2026-07-28, 12:57:42](https://lobste.rs/s/cshefz/aux_control_let_whole_room_vote_on_music) - [Aux Control — Let the whole room vote on the music](https://auxcontrol.live)
* [2026-07-28, 12:14:24](https://lobste.rs/s/7qtdhk/what_even_are_microservices) - [What even are microservices?](https://var0.xyz/posts/what-even-are-microservices.html)
* [2026-07-28, 12:06:54](https://lobste.rs/s/qvs2s7/golang_maps_how_swiss_tables_replaced_old) - [Golang Maps: How Swiss Tables Replaced the Old Bucket Design](https://blog.gaborkoos.com/posts/2026-07-24-Golang-Maps-How-Swiss-Tables-Replaced-the-Old-Bucket-Design/)
* [2026-07-28, 11:51:29](https://lobste.rs/s/ngcurk/improving_heuristics_2015) - [Improving Heuristics (2015)](https://www.redblobgames.com/pathfinding/heuristics/differential.html)
* [2026-07-28, 11:00:00](https://news.slashdot.org/story/26/07/28/012244/arizona-state-launches-influencer-degree-where-students-must-gain-real-followers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Arizona State Launches Influencer Degree Where Students Must Gain Real Followers](https://news.slashdot.org/story/26/07/28/012244/arizona-state-launches-influencer-degree-where-students-must-gain-real-followers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-28, 10:52:30](https://news.ycombinator.com/item?id=49082022) - [Kimi Linear: An Expressive, Efficient Attention Architecture](https://arxiv.org/abs/2510.26692)
* [2026-07-28, 10:32:54](https://lobste.rs/s/jrq2d9/develop_cross_platform_cli_gui_tools_with) - [Develop Cross-Platform CLI and GUI Tools With Tcl/Tk](https://cgicoffee.com/blog/2026/04/tcl-tk-develop-cross-platform-cli-gui-tools-tutorial-guide)
* [2026-07-28, 10:20:50](https://news.ycombinator.com/item?id=49081783) - [DMARC has been public since 2012 but most company domains still don&apos;t enforce it](https://ciphercue.com/blog/dmarc-enforcement-gap-rua-fragmentation-2026)
* [2026-07-28, 10:11:18](https://lobste.rs/s/ewifzf/making_kio_copy_many_files_fast) - [Making KIO copy many files fast](https://blogs.kde.org/2026/07/28/making-kio-copy-many-files-fast/)
* [2026-07-28, 10:05:00](https://soylentnews.org/article.pl?sid=26/07/27/0428208&amp;from=rss) - [South Korea Making its Own Security-Centric AI Model](https://soylentnews.org/article.pl?sid=26/07/27/0428208&amp;from=rss)
* [2026-07-28, 09:59:13](https://news.ycombinator.com/item?id=49081644) - [Google&apos;s Beyond Zero: Enterprise Security for the AI Era](https://spawn-queue.acm.org/doi/10.1145/3819083)
* [2026-07-28, 08:57:54](https://lobste.rs/s/db0m6j/one_ring_rule_them_all_wiring_radios) - [One Ring to Rule Them All: Wiring Radios to Laptops the Hard Way](https://www.lysk.ai/post/wiring-radios-to-laptops-the-hard-way)
* [2026-07-28, 07:44:24](https://news.ycombinator.com/item?id=49080664) - [7.1 Earthquake in Japan](https://www.data.jma.go.jp/multi/quake/quake_detail.html?eventID=20260728163528&amp;lang=en)
* [2026-07-28, 07:00:00](https://science.slashdot.org/story/26/07/28/0047230/earths-biggest-disasters-strike-in-a-hidden-pattern-every-27-million-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Earth&apos;s Biggest Disasters Strike In a Hidden Pattern Every 27 Million Years](https://science.slashdot.org/story/26/07/28/0047230/earths-biggest-disasters-strike-in-a-hidden-pattern-every-27-million-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-28, 05:24:00](https://soylentnews.org/article.pl?sid=26/07/26/2115230&amp;from=rss) - [If You&apos;re Reading This, You&apos;re Probably an AI Bot](https://soylentnews.org/article.pl?sid=26/07/26/2115230&amp;from=rss)
* [2026-07-28, 03:30:00](https://yro.slashdot.org/story/26/07/28/0037231/a-missing-underscore-sent-innocent-man-to-prison-for-18-months?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Missing Underscore Sent Innocent Man To Prison For 18 Months](https://yro.slashdot.org/story/26/07/28/0037231/a-missing-underscore-sent-innocent-man-to-prison-for-18-months?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-28, 03:15:40](https://lobste.rs/s/yo5wxp/framework_13_pro_review_much_better) - [Framework 13 Pro review: Much better battery, much worse price](https://arstechnica.com/gadgets/2026/07/framework-laptop-13-pro-review-much-better-battery-much-worse-price/)
* [2026-07-28, 00:43:29](https://lobste.rs/s/pzsmzv/try_new_firefox_design_nightly) - [Try the New Firefox Design in Nightly](https://blog.nightly.mozilla.org/2026/07/27/new-firefox-design/)
* [2026-07-28, 00:38:00](https://soylentnews.org/article.pl?sid=26/07/26/1939241&amp;from=rss) - [China Advances Plans For National Single-Stack IPv6 Network, And Its Surveillance-Friendly Version](https://soylentnews.org/article.pl?sid=26/07/26/1939241&amp;from=rss)
* [2026-07-27, 23:00:00](https://news.slashdot.org/story/26/07/27/1942254/peacock-to-be-included-with-youtube-premium-in-major-streaming-tie-up?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Peacock to Be Included With YouTube Premium In Major Streaming Tie-Up](https://news.slashdot.org/story/26/07/27/1942254/peacock-to-be-included-with-youtube-premium-in-major-streaming-tie-up?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-27, 22:27:54](https://lobste.rs/s/nfcclq/setup_simple_self_hosted_web_server_with) - [Setup a Simple, Self-Hosted Web Server with OpenBSD](https://btxx.org/posts/self-hosted-openbsd/)
* [2026-07-27, 22:00:00](https://tech.slashdot.org/story/26/07/27/1936209/amazon-trying-to-launch-a-global-satellite-cellphone-network-in-2028?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Trying to Launch a Global Satellite Cellphone Network In 2028](https://tech.slashdot.org/story/26/07/27/1936209/amazon-trying-to-launch-a-global-satellite-cellphone-network-in-2028?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-27, 21:00:00](https://it.slashdot.org/story/26/07/27/195206/nvidia-tech-giants-launch-ai-safety-initiative?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia, Tech Giants Launch AI Safety Initiative](https://it.slashdot.org/story/26/07/27/195206/nvidia-tech-giants-launch-ai-safety-initiative?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-27, 20:42:46](https://news.ycombinator.com/item?id=49075264) - [Solving Fermat: Andrew Wiles](https://www.pbs.org/wgbh/nova/proof/wiles.html)
* [2026-07-27, 20:00:00](https://developers.slashdot.org/story/26/07/27/1842211/codeberg-bans-cryptocurrency-and-llm-generated-code-projects?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Codeberg Bans Cryptocurrency and LLM-Generated Code Projects](https://developers.slashdot.org/story/26/07/27/1842211/codeberg-bans-cryptocurrency-and-llm-generated-code-projects?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-27, 19:55:00](https://soylentnews.org/article.pl?sid=26/07/26/1934211&amp;from=rss) - [When Your Vehicle Outlives its Cloud: What Happens Next?](https://soylentnews.org/article.pl?sid=26/07/26/1934211&amp;from=rss)
* [2026-07-27, 19:00:00](https://hardware.slashdot.org/story/26/07/27/1827257/china-begins-mass-production-of-homegrown-duv-chip-tools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Begins Mass Production of Homegrown DUV Chip Tools](https://hardware.slashdot.org/story/26/07/27/1827257/china-begins-mass-production-of-homegrown-duv-chip-tools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-27, 18:57:58](https://lobste.rs/s/snetpk/seriously_what_is_large_code_model_even) - [Seriously, what is the large code-model even for?](https://fzakaria.com/2026/07/26/seriously-what-is-the-large-code-model-even-for)
* [2026-07-27, 18:10:00](https://slashdot.org/story/26/07/27/185249/chatgpt-starts-blocking-direct-requests-to-copy-an-authors-style?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ChatGPT Starts Blocking Direct Requests To Copy an Author&apos;s Style](https://slashdot.org/story/26/07/27/185249/chatgpt-starts-blocking-direct-requests-to-copy-an-authors-style?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-27, 17:00:00](https://apple.slashdot.org/story/26/07/27/1656234/apple-will-watch-everything-burn-when-ai-bubble-bursts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Will &apos;Watch Everything Burn&apos; When AI Bubble Bursts](https://apple.slashdot.org/story/26/07/27/1656234/apple-will-watch-everything-burn-when-ai-bubble-bursts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-27, 16:00:00](https://tech.slashdot.org/story/26/07/27/0540205/big-tech-accused-of-stonewalling-european-social-media-researchers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Big Tech Accused of Stonewalling European Social Media Researchers](https://tech.slashdot.org/story/26/07/27/0540205/big-tech-accused-of-stonewalling-european-social-media-researchers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-27, 15:09:00](https://soylentnews.org/article.pl?sid=26/07/26/1927253&amp;from=rss) - [Firefox Containers Preview: Introducing Native Containers in Firefox 153 ](https://soylentnews.org/article.pl?sid=26/07/26/1927253&amp;from=rss)
* [2026-07-27, 14:55:38](https://lobste.rs/s/cbbit5/paged_out_issue_9) - [Paged Out - Issue #9](https://pagedout.institute/webview.php?issue=9&amp;page=1)
* [2026-07-27, 13:34:39](https://lobste.rs/s/yijxwe/blogging_can_just_be_stating_obvious) - [Blogging Can Just Be Stating The Obvious](https://blog.jim-nielsen.com/2026/blogging-stating-the-obvious/)
* [2026-07-27, 12:32:24](https://lobste.rs/s/vtev1n/how_is_bun_rewrite_rust_going) - [How is the Bun Rewrite in Rust Going?](https://lockwood.dev/ai/2026/07/27/how-is-the-bun-rewrite-in-rust-going.html)
* [2026-07-27, 10:54:37](https://lobste.rs/s/gicomw/productivity_mirage) - [The Productivity Mirage](https://frantic.im/mirage)
* [2026-07-27, 10:40:48](https://lobste.rs/s/h9hdzg/most_googlebots_are_fake) - [Most Googlebots are fake](https://digitalseams.com/blog/most-googlebots-are-fake)
* [2026-07-27, 10:23:00](https://soylentnews.org/article.pl?sid=26/07/26/1920201&amp;from=rss) - [Google Just Had Its First Negative Cash Flow Quarter Due To Massive AI Spending](https://soylentnews.org/article.pl?sid=26/07/26/1920201&amp;from=rss)
* [2026-07-27, 08:52:37](https://lobste.rs/s/zljfgp/on_ai) - [On AI](https://jcs.org/2026/07/23/ai)
* [2026-07-27, 05:38:00](https://soylentnews.org/article.pl?sid=26/07/26/041247&amp;from=rss) - [Orange-Lipped Monkey That Roars and Snorts Deep in Congo Rainforest is New Species to Science](https://soylentnews.org/article.pl?sid=26/07/26/041247&amp;from=rss)
* [2026-07-27, 00:52:00](https://soylentnews.org/article.pl?sid=26/07/26/0345250&amp;from=rss) - [GitHub Slashes Public Bug Bounty Payouts as AI Report Flood Buries its Security Team](https://soylentnews.org/article.pl?sid=26/07/26/0345250&amp;from=rss)
* [2026-07-26, 20:06:00](https://soylentnews.org/article.pl?sid=26/07/26/0337236&amp;from=rss) - [India&apos;s First Privately Developed Rocket Reaches Orbit on Dramatic Debut Launch](https://soylentnews.org/article.pl?sid=26/07/26/0337236&amp;from=rss)
* [2026-07-26, 15:19:00](https://soylentnews.org/article.pl?sid=26/07/25/2052238&amp;from=rss) - [The ACLU is Arming Lawyers to Expose State Surveillance Secrets](https://soylentnews.org/article.pl?sid=26/07/25/2052238&amp;from=rss)
* [2026-07-26, 10:35:00](https://soylentnews.org/article.pl?sid=26/07/25/2048246&amp;from=rss) - [Your Cookware Got Worse on Purpose](https://soylentnews.org/article.pl?sid=26/07/25/2048246&amp;from=rss)
* [2026-07-26, 05:43:00](https://soylentnews.org/article.pl?sid=26/07/25/2045217&amp;from=rss) - [Astronomers Found the First Atmosphere on a Planet in Another Star&apos;s Habitable Zone](https://soylentnews.org/article.pl?sid=26/07/25/2045217&amp;from=rss)
* [2026-07-26, 01:00:00](https://soylentnews.org/article.pl?sid=26/07/25/2042256&amp;from=rss) - [MIT to Become Hotbed of AI Video Surveillance](https://soylentnews.org/article.pl?sid=26/07/25/2042256&amp;from=rss)
* [2026-07-25, 20:17:00](https://soylentnews.org/article.pl?sid=26/07/25/2039220&amp;from=rss) - [Ben Thompson is Wrong: US [AI] Frontier Labs are Right to be Panicking](https://soylentnews.org/article.pl?sid=26/07/25/2039220&amp;from=rss)
* [2026-07-25, 15:34:00](https://soylentnews.org/article.pl?sid=26/07/24/1452216&amp;from=rss) - [There Isn&apos;t a Single Consumer Wi-Fi Router That is 100% American-Made](https://soylentnews.org/article.pl?sid=26/07/24/1452216&amp;from=rss)
* [2026-07-25, 10:50:00](https://soylentnews.org/article.pl?sid=26/07/24/1448254&amp;from=rss) - [Alan Turing&apos;s Top Secret DIY Project](https://soylentnews.org/article.pl?sid=26/07/24/1448254&amp;from=rss)
* [2026-07-25, 06:04:00](https://soylentnews.org/article.pl?sid=26/07/24/1428215&amp;from=rss) - [OpenAI&apos;s Rogue Agents are a Wake-up Call to Risks Posed by Artificial Intelligence](https://soylentnews.org/article.pl?sid=26/07/24/1428215&amp;from=rss)
* [2026-07-25, 01:21:00](https://soylentnews.org/article.pl?sid=26/07/24/1423206&amp;from=rss) - [US Blocks SSL Security Certificates for Iran&apos;s Fars News Agency](https://soylentnews.org/article.pl?sid=26/07/24/1423206&amp;from=rss)
* [2026-07-24, 20:37:00](https://soylentnews.org/article.pl?sid=26/07/23/229219&amp;from=rss) - [Former Microsoft AI Leaders Are Spending $1M to Prove AI Can Replace CEOs](https://soylentnews.org/article.pl?sid=26/07/23/229219&amp;from=rss)
* [2026-07-24, 18:39:32](https://news.ycombinator.com/item?id=49039904) - [The most advanced robotic servicing satellite–that we know about](https://arstechnica.com/space/2026/07/this-is-the-worlds-most-advanced-robotic-servicing-satellite-that-we-know-about/)
* [2026-07-24, 15:55:00](https://soylentnews.org/article.pl?sid=26/07/23/225237&amp;from=rss) - [Scientists Believed This Near-Earth Object Was an Asteroid for 28 Years. They Were Wrong](https://soylentnews.org/article.pl?sid=26/07/23/225237&amp;from=rss)
* [2026-07-24, 14:19:16](https://news.ycombinator.com/item?id=49036068) - [How to survive boiling water](https://taxa.substack.com/p/how-to-survive-boiling-water)
* [2026-07-24, 11:08:00](https://soylentnews.org/article.pl?sid=26/07/23/221216&amp;from=rss) - [I Wanted a Clock That Never Needed Setting. Things Escalated.](https://soylentnews.org/article.pl?sid=26/07/23/221216&amp;from=rss)
* [2026-07-24, 06:26:00](https://soylentnews.org/article.pl?sid=26/07/23/0249220&amp;from=rss) - [I Could&apos;ve Rickrolled the Entire FIFA World Cup and All I Needed Was My ID](https://soylentnews.org/article.pl?sid=26/07/23/0249220&amp;from=rss)
* [2026-07-24, 01:43:00](https://soylentnews.org/article.pl?sid=26/07/23/0234212&amp;from=rss) - [Former OpenAI CTO Does What Altman Won&apos;t: Releases a Frontier AI Model That&apos;s Actually Open](https://soylentnews.org/article.pl?sid=26/07/23/0234212&amp;from=rss)
