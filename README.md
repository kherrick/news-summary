# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Technology Developments

* [Small language models are the future of agentic AI](https://arxiv.org/abs/2506.02153) explores the rising potential of smaller AI models in achieving advanced capabilities. [Comments](https://news.ycombinator.com/item?id=44430311)

* [Google Buys 200 Megawatts of Fusion Energy That Doesn&apos;t Even Exist Yet](https://hardware.slashdot.org/story/25/06/30/2143225/google-buys-200-megawatts-of-fusion-energy-that-doesnt-even-exist-yet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) sheds light on the company's forward-thinking investment in fusion energy. [Comments](https://news.ycombinator.com/item?id=44429531)

* [NASA To Stream Rocket Launches and Spacewalks On Netflix](https://entertainment.slashdot.org/story/25/06/30/2135227/nasa-to-stream-rocket-launches-and-spacewalks-on-netflix?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) reveals the space agency's outreach efforts through mainstream streaming platforms. [Comments](https://news.ycombinator.com/item?id=44429695)

## Programming and Development Innovations

* [Orchestrating Edge AI workloads on a Jetson Orin Nano with Nomad](https://atodorov.me/2025/06/27/orchestrating-edge-ai-workloads-on-a-jetson-orin-nano-with-nomad/) delves into managing AI workloads at the edge using Nomad. [Comments](https://lobste.rs/s/4vpj8q/orchestrating_edge_ai_workloads_on)

* [`git stage` over `git add`](https://bhoot.dev/2025/git-stage-over-git-add/) details the advantages of adopting `git stage` in version control workflows. [Comments](https://lobste.rs/s/ha3xyn/git_stage_over_git_add)

* [Pluto is a unique dialect of Lua with a focus on general-purpose programming](https://github.com/PlutoLang/Pluto) introduces a novel Lua dialect aimed at broader programming applications. [Comments](https://news.ycombinator.com/item?id=44429531)

## Scientific Discoveries and Advances

* [Aging-Related Inflammation Is Not Universal Across Human Populations](https://www.publichealth.columbia.edu/news/aging-related-inflammation-not-universal-across-human-populations) examines disparities in aging-related inflammation globally. [Comments](https://news.ycombinator.com/item?id=44430984)

* [CISA, NSA Repeat Call for Memory Safe Programming Languages](https://soylentnews.org/article.pl?sid=25/06/30/1149231&amp;from=rss) highlights renewed emphasis on secure programming practices. [Comments](https://news.ycombinator.com/item?id=44430542)

* [Scientists Unlock the Light-Bending Secrets of Squid Skin](https://soylentnews.org/article.pl?sid=25/06/30/0230251&amp;from=rss) explores the optical properties of squid skin. [Comments](https://news.ycombinator.com/item?id=44426128)

## Cultural and Unusual Highlights

* [Melbourne man discovers extensive model train network underneath house](https://www.sbs.com.au/news/article/i-was-shocked-melbourne-mans-unbelievable-find-after-buying-house/m4sksfer8) shares the surprising story of a discovery hidden under a home. [Comments](https://news.ycombinator.com/item?id=44429182)

* [Norwegian Lotto Mistakenly Told Thousands They Were Filthy Rich After Math Error](https://science.slashdot.org/story/25/06/30/2131215/norwegian-lotto-mistakenly-told-thousands-they-were-filthy-rich-after-math-error?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) reports on a significant lottery error. [Comments](https://news.ycombinator.com/item?id=44429011)

## Industry and Infrastructure

* [Apple Loses Bid To Dismiss US Smartphone Monopoly Case](https://apple.slashdot.org/story/25/06/30/204242/apple-loses-bid-to-dismiss-us-smartphone-monopoly-case?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) discusses a notable legal setback in the tech industry. [Comments](https://news.ycombinator.com/item?id=44429531)

* [Oracle Inks Cloud Deal Worth $30 Billion a Year](https://developers.slashdot.org/story/25/06/30/218226/oracle-inks-cloud-deal-worth-30-billion-a-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) covers financial growth within the cloud services sector. [Comments](https://news.ycombinator.com/item?id=44429561)

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

* [2025-07-01, 06:48:50](https://news.ycombinator.com/item?id=44431251) - [Ask HN: Is your company forcing use of AI?](https://news.ycombinator.com/item?id=44431251)
* [2025-07-01, 06:11:46](https://lobste.rs/s/ha3xyn/git_stage_over_git_add) - [`git stage` over `git add`](https://bhoot.dev/2025/git-stage-over-git-add/)
* [2025-07-01, 05:59:13](https://lobste.rs/s/re0ogb/people_keep_inventing_prolly_trees) - [People Keep Inventing Prolly Trees](https://www.dolthub.com/blog/2025-06-03-people-keep-inventing-prolly-trees/)
* [2025-07-01, 05:52:40](https://news.ycombinator.com/item?id=44430984) - [Aging-Related Inflammation Is Not Universal Across Human Populations](https://www.publichealth.columbia.edu/news/aging-related-inflammation-not-universal-across-human-populations)
* [2025-07-01, 04:59:48](https://lobste.rs/s/4vpj8q/orchestrating_edge_ai_workloads_on) - [Orchestrating Edge AI workloads on a Jetson Orin Nano with Nomad](https://atodorov.me/2025/06/27/orchestrating-edge-ai-workloads-on-a-jetson-orin-nano-with-nomad/)
* [2025-07-01, 03:57:00](https://soylentnews.org/article.pl?sid=25/06/30/1149231&amp;from=rss) - [CISA, NSA Repeat Call for Memory Safe Programming Languages](https://soylentnews.org/article.pl?sid=25/06/30/1149231&amp;from=rss)
* [2025-07-01, 03:33:49](https://news.ycombinator.com/item?id=44430311) - [Small language models are the future of agentic AI](https://arxiv.org/abs/2506.02153)
* [2025-07-01, 03:30:00](https://hardware.slashdot.org/story/25/06/30/224233/china-hosts-first-fully-autonomous-ai-robot-football-match?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Hosts First Fully Autonomous AI Robot Football Match](https://hardware.slashdot.org/story/25/06/30/224233/china-hosts-first-fully-autonomous-ai-robot-football-match?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-01, 03:27:09](https://news.ycombinator.com/item?id=44430286) - [Nimtable: Open-source web UI to browse and manage Apache Iceberg tables](https://github.com/nimtable/nimtable)
* [2025-07-01, 03:19:29](https://news.ycombinator.com/item?id=44430263) - [Virtue garnish: A mental hack to short-circuit bad habits](https://ledgeroflife.blog/virtue-garnishes-the-3-second-mental-hack-that-short-circuits-bad-habits/)
* [2025-07-01, 02:02:00](https://hardware.slashdot.org/story/25/06/30/2143225/google-buys-200-megawatts-of-fusion-energy-that-doesnt-even-exist-yet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Buys 200 Megawatts of Fusion Energy That Doesn&apos;t Even Exist Yet](https://hardware.slashdot.org/story/25/06/30/2143225/google-buys-200-megawatts-of-fusion-energy-that-doesnt-even-exist-yet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-01, 01:25:07](https://news.ycombinator.com/item?id=44429695) - [Rust CLIs with Clap](https://tucson-josh.com/posts/rust-clap-cli/)
* [2025-07-01, 01:25:00](https://entertainment.slashdot.org/story/25/06/30/2135227/nasa-to-stream-rocket-launches-and-spacewalks-on-netflix?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA To Stream Rocket Launches and Spacewalks On Netflix](https://entertainment.slashdot.org/story/25/06/30/2135227/nasa-to-stream-rocket-launches-and-spacewalks-on-netflix?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-01, 00:58:22](https://news.ycombinator.com/item?id=44429531) - [Pluto is a unique dialect of Lua with a focus on general-purpose programming](https://github.com/PlutoLang/Pluto)
* [2025-07-01, 00:45:00](https://science.slashdot.org/story/25/06/30/2131215/norwegian-lotto-mistakenly-told-thousands-they-were-filthy-rich-after-math-error?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Norwegian Lotto Mistakenly Told Thousands They Were Filthy Rich After Math Error](https://science.slashdot.org/story/25/06/30/2131215/norwegian-lotto-mistakenly-told-thousands-they-were-filthy-rich-after-math-error?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-01, 00:02:00](https://tech.slashdot.org/story/25/06/30/2123239/windows-user-base-shrinks-by-400-million-in-three-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Windows User Base Shrinks By 400 Million In Three Years](https://tech.slashdot.org/story/25/06/30/2123239/windows-user-base-shrinks-by-400-million-in-three-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-01, 00:01:15](https://news.ycombinator.com/item?id=44429225) - [Claude Code now supports Hooks](https://docs.anthropic.com/en/docs/claude-code/hooks)
* [2025-06-30, 23:56:08](https://lobste.rs/s/nid79d/google_developer_search_appliance) - [Google Developer Search Appliance – Proxmox Port](https://archive.org/details/google-search-appliance-proxmox-40G-image-inside.tar)
* [2025-06-30, 23:53:42](https://news.ycombinator.com/item?id=44429182) - [Melbourne man discovers extensive model train network underneath house](https://www.sbs.com.au/news/article/i-was-shocked-melbourne-mans-unbelievable-find-after-buying-house/m4sksfer8)
* [2025-06-30, 23:41:15](https://lobste.rs/s/qcjdam/doing_my_day_job_on_chimera_linux) - [Doing My Day Job on Chimera Linux](https://www.wezm.net/v2/posts/2025/daily-driving-chimera-for-work/)
* [2025-06-30, 23:20:00](https://developers.slashdot.org/story/25/06/30/218226/oracle-inks-cloud-deal-worth-30-billion-a-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Oracle Inks Cloud Deal Worth $30 Billion a Year](https://developers.slashdot.org/story/25/06/30/218226/oracle-inks-cloud-deal-worth-30-billion-a-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-30, 23:13:00](https://soylentnews.org/article.pl?sid=25/06/30/0625204&amp;from=rss) - [Group of Investors Represented by Youtuber Perifractic Buys Commodore](https://soylentnews.org/article.pl?sid=25/06/30/0625204&amp;from=rss)
* [2025-06-30, 23:00:00](https://tech.slashdot.org/story/25/06/30/211204/tumblrs-move-to-wordpress-and-fediverse-integration-is-on-hold?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tumblr&apos;s Move To WordPress and Fediverse Integration Is &apos;On Hold&apos;](https://tech.slashdot.org/story/25/06/30/211204/tumblrs-move-to-wordpress-and-fediverse-integration-is-on-hold?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-30, 22:40:00](https://slashdot.org/story/25/06/30/2052250/carfax-for-used-pcs-hewlett-packard-wants-to-give-laptops-new-life?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CarFax For Used PCs: Hewlett Packard Wants To Give Laptops New Life](https://slashdot.org/story/25/06/30/2052250/carfax-for-used-pcs-hewlett-packard-wants-to-give-laptops-new-life?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-30, 22:37:06](https://news.ycombinator.com/item?id=44428674) - [GPEmu: A GPU emulator for rapid, low-cost deep learning prototyping [pdf]](https://vldb.org/pvldb/vol18/p1919-wang.pdf)
* [2025-06-30, 22:08:59](https://news.ycombinator.com/item?id=44428438) - [Show HN: A continuation of IRS Direct File that can be self-hosted](https://github.com/openfiletax/openfile)
* [2025-06-30, 22:04:53](https://news.ycombinator.com/item?id=44428399) - [Jim Boddie codeveloped the first successful DSP at Bell Labs](https://spectrum.ieee.org/dsp-pioneer-jim-boddie)
* [2025-06-30, 22:00:00](https://slashdot.org/story/25/06/30/1959225/freelancers-using-ai-tools-earn-40-more-per-hour-than-peers-study-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Freelancers Using AI Tools Earn 40% More Per Hour Than Peers, Study Says](https://slashdot.org/story/25/06/30/1959225/freelancers-using-ai-tools-earn-40-more-per-hour-than-peers-study-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-30, 21:20:00](https://apple.slashdot.org/story/25/06/30/204242/apple-loses-bid-to-dismiss-us-smartphone-monopoly-case?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Loses Bid To Dismiss US Smartphone Monopoly Case](https://apple.slashdot.org/story/25/06/30/204242/apple-loses-bid-to-dismiss-us-smartphone-monopoly-case?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-30, 21:11:30](https://news.ycombinator.com/item?id=44427929) - [Entropy of a Mixture](https://cgad.ski/blog/entropy-of-a-mixture.html)
* [2025-06-30, 21:05:24](https://lobste.rs/s/jeekwf/llvm_instcombine_improve_optimizations) - [llvm: InstCombine: improve optimizations for ceiling division with no overflow—a PR by Alex Gaynor and Claude Code](https://simonwillison.net/2025/Jun/30/llvm/)
* [2025-06-30, 20:53:55](https://news.ycombinator.com/item?id=44427757) - [The new skill in AI is not prompting, it&apos;s context engineering](https://www.philschmid.de/context-engineering)
* [2025-06-30, 20:40:00](https://mobile.slashdot.org/story/25/06/30/2011219/senate-gop-budget-bill-has-little-noticed-provision-that-could-hurt-your-wi-fi?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Senate GOP Budget Bill Has Little-Noticed Provision That Could Hurt Your Wi-Fi](https://mobile.slashdot.org/story/25/06/30/2011219/senate-gop-budget-bill-has-little-noticed-provision-that-could-hurt-your-wi-fi?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-30, 20:00:00](https://apple.slashdot.org/story/25/06/30/1918231/apple-weighs-using-anthropic-or-openai-to-power-siri-in-major-reversal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Weighs Using Anthropic or OpenAI To Power Siri in Major Reversal](https://apple.slashdot.org/story/25/06/30/1918231/apple-weighs-using-anthropic-or-openai-to-power-siri-in-major-reversal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-30, 19:58:24](https://lobste.rs/s/srcfxn/cve_2025_32463_vulnerability_advisory) - [CVE-2025-32463 Vulnerability Advisory: Sudo chroot Elevation of Privilege](https://www.stratascale.com/vulnerability-alert-CVE-2025-32463-sudo-chroot)
* [2025-06-30, 19:19:52](https://news.ycombinator.com/item?id=44426864) - [The original LZEXE (A.K.A. Kosinski) compressor source code has been released](https://clownacy.wordpress.com/2025/05/24/the-original-lzexe-a-k-a-kosinski-compressor-source-code-has-been-released/)
* [2025-06-30, 19:17:11](https://news.ycombinator.com/item?id=44426845) - [End of an Era](https://www.erasmatazz.com/personal/self/end-of-an-era.html)
* [2025-06-30, 19:03:50](https://news.ycombinator.com/item?id=44426726) - [Xfinity using WiFi signals in your house to detect motion](https://www.xfinity.com/support/articles/wifi-motion)
* [2025-06-30, 18:56:16](https://lobste.rs/s/p8nvru/caching_is_abstraction_not_optimization) - [Caching is an Abstraction, not an Optimization](https://buttondown.com/jaffray/archive/caching-is-an-abstraction-not-an-optimization/)
* [2025-06-30, 18:50:00](https://news.slashdot.org/story/25/06/30/1852224/vpnet-promises-cryptographically-verifiable-privacy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [VP.net Promises \&quot;Cryptographically Verifiable Privacy\&quot;](https://news.slashdot.org/story/25/06/30/1852224/vpnet-promises-cryptographically-verifiable-privacy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-30, 18:45:00](https://tech.slashdot.org/story/25/06/30/1825238/wordpress-ceo-regrets-belongs-to-me-comment-amid-ongoing-wp-engine-legal-battle?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [WordPress CEO Regrets &apos;Belongs to Me&apos; Comment Amid Ongoing WP Engine Legal Battle](https://tech.slashdot.org/story/25/06/30/1825238/wordpress-ceo-regrets-belongs-to-me-comment-amid-ongoing-wp-engine-legal-battle?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-30, 18:34:27](https://news.ycombinator.com/item?id=44426428) - [The hidden JTAG in a Qualcomm/Snapdragon device’s USB port](https://www.linaro.org/blog/hidden-jtag-qualcomm-snapdragon-usb/)
* [2025-06-30, 18:30:00](https://soylentnews.org/article.pl?sid=25/06/30/0230251&amp;from=rss) - [Scientists Unlock the Light-Bending Secrets of Squid Skin](https://soylentnews.org/article.pl?sid=25/06/30/0230251&amp;from=rss)
* [2025-06-30, 18:08:00](https://slashdot.org/story/25/06/30/188259/in-china-coins-and-banknotes-have-all-but-disappeared?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [In China, Coins and Banknotes Have All But Disappeared](https://slashdot.org/story/25/06/30/188259/in-china-coins-and-banknotes-have-all-but-disappeared?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-30, 18:05:34](https://lobste.rs/s/odtepz/zig_community_mirrors) - [Zig Community Mirrors](https://ziglang.org/download/community-mirrors/)
* [2025-06-30, 18:03:26](https://news.ycombinator.com/item?id=44426171) - [Sony DTC-700 audio DAT player/recorder](https://kevinboone.me/dtc-700.html)
* [2025-06-30, 17:58:38](https://news.ycombinator.com/item?id=44426128) - [Proton joins suit against Apple for practices that harm developers and consumers](https://proton.me/blog/apple-lawsuit)
* [2025-06-30, 17:00:57](https://news.ycombinator.com/item?id=44425537) - [14.ai (YC W24) hiring founding engineers in SF to build a Zendesk alternative](https://14.ai/careers)
* [2025-06-30, 16:55:20](https://news.ycombinator.com/item?id=44425461) - [I write type-safe generic data structures in C](https://danielchasehooper.com/posts/typechecked-generic-c-data-structures/)
* [2025-06-30, 16:48:47](https://lobste.rs/s/s4po4y/how_i_write_type_safe_generic_data) - [How I Write Type Safe Generic Data Structures in C](https://danielchasehooper.com/posts/typechecked-generic-c-data-structures/)
* [2025-06-30, 16:38:43](https://news.ycombinator.com/item?id=44425253) - [A CarFax for Used PCs; Hewlett Packard wants to give old laptops new life](https://spectrum.ieee.org/carmax-used-pcs)
* [2025-06-30, 16:27:53](https://lobste.rs/s/a9pkib/role_university_is_resist_ai) - [The role of the University is to resist AI](https://www.danmcquillan.org/cpct_seminar.html)
* [2025-06-30, 16:03:38](https://lobste.rs/s/t0ktay/update_on_improving_passkey_support) - [An update on improving passkey support in Linux](https://www.iinuwa.xyz/blog/linux-passkeys-update/)
* [2025-06-30, 15:46:20](https://lobste.rs/s/gdfo4p/making_rails_delegated_type_s_clearer) - [Making Rails delegated_type’s clearer](https://kaspth.com/posts/making-rails-delegated_types-clearer)
* [2025-06-30, 15:19:21](https://lobste.rs/s/7isozy/how_often_is_query_plan_optimal) - [How often is the query plan optimal?](https://vondra.me/posts/how-often-is-the-query-plan-optimal/)
* [2025-06-30, 15:05:01](https://lobste.rs/s/tizpzz/tail_latency_might_matter_more_than_you) - [Tail Latency Might Matter More Than You Think](https://brooker.co.za/blog/2021/04/19/latency.html)
* [2025-06-30, 15:01:12](https://news.ycombinator.com/item?id=44424194) - [Donkey Kong Country 2 and Open Bus](https://jsgroth.dev/blog/posts/dkc2-open-bus/)
* [2025-06-30, 14:43:46](https://news.ycombinator.com/item?id=44423983) - [There are no new ideas in AI only new datasets](https://blog.jxmo.io/p/there-are-no-new-ideas-in-ai-only)
* [2025-06-30, 14:42:27](https://lobste.rs/s/n15x7u/boolean_should_probably_be_something) - [That boolean should probably be something else](https://ntietz.com/blog/that-boolean-should-probably-be-something-else/)
* [2025-06-30, 14:23:07](https://lobste.rs/s/qg9xxh/maestro_now_supports_gcc) - [Maestro now supports GCC](https://blog.lenot.re/a/compiler)
* [2025-06-30, 13:45:00](https://soylentnews.org/article.pl?sid=25/06/30/020252&amp;from=rss) - [You Sound Like ChatGPT](https://soylentnews.org/article.pl?sid=25/06/30/020252&amp;from=rss)
* [2025-06-30, 13:19:05](https://lobste.rs/s/vb1owz/reverse_engineering_vercel_s_botid) - [Reverse Engineering Vercel&apos;s BotID](https://www.nullpt.rs/reversing-botid)
* [2025-06-30, 12:35:17](https://lobste.rs/s/hci9kg/critical_correctness_bug_lix) - [Critical correctness bug in Lix](https://lix.systems/blog/2025-06-27-lix-critical-bug/)
* [2025-06-30, 10:22:14](https://lobste.rs/s/vaqyrt/history_unix_manpages) - [History of UNIX Manpages](https://manpages.bsd.lv/history.html)
* [2025-06-30, 10:05:08](https://lobste.rs/s/ksacpj/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/ksacpj/what_are_you_doing_this_week)
* [2025-06-30, 09:42:49](https://lobste.rs/s/zjmrkk/provenance_memory_model_for_c) - [The provenance memory model for C](https://gustedt.wordpress.com/2025/06/30/the-provenance-memory-model-for-c/)
* [2025-06-30, 09:03:00](https://soylentnews.org/article.pl?sid=25/06/29/1626204&amp;from=rss) - [Why Are the Physical Constants of the Universe So Perfect for Life?](https://soylentnews.org/article.pl?sid=25/06/29/1626204&amp;from=rss)
* [2025-06-30, 04:18:00](https://soylentnews.org/article.pl?sid=25/06/29/1610258&amp;from=rss) - [At Last, We Are Discovering What Quantum Computers Will be Useful for](https://soylentnews.org/article.pl?sid=25/06/29/1610258&amp;from=rss)
* [2025-06-30, 00:43:22](https://lobste.rs/s/cafcxn/use_keyword_only_arguments_python) - [Use keyword-only arguments in Python dataclasses](https://chipx86.blog/2025/06/29/tip-use-keyword-only-arguments-in-python-dataclasses/)
* [2025-06-29, 23:32:00](https://soylentnews.org/article.pl?sid=25/06/29/164217&amp;from=rss) - [Work Begins to Create Artificial Human DNA From Scratch](https://soylentnews.org/article.pl?sid=25/06/29/164217&amp;from=rss)
* [2025-06-29, 20:21:28](https://news.ycombinator.com/item?id=44416093) - [Ask HN: What Are You Working On? (June 2025)](https://news.ycombinator.com/item?id=44416093)
* [2025-06-29, 19:36:32](https://lobste.rs/s/otlxxz/tools_i_love_mise_en_place) - [Tools I love: mise(-en-place)](https://blog.vbang.dk/2025/06/29/tools-i-love-mise/)
* [2025-06-29, 18:50:00](https://soylentnews.org/article.pl?sid=25/06/29/1253258&amp;from=rss) - [Why Countries Are Suddenly Broadcasting Their Spies’ Exploits](https://soylentnews.org/article.pl?sid=25/06/29/1253258&amp;from=rss)
* [2025-06-29, 18:16:34](https://lobste.rs/s/gyiwkq/agile_was_never_your_problem) - [Agile Was Never Your Problem](https://thecynical.dev/posts/agile-was-never-your-problem/)
* [2025-06-29, 14:05:00](https://soylentnews.org/article.pl?sid=25/06/29/0435239&amp;from=rss) - [First Images From World&apos;s Largest Digital Camera Reveal Galaxies and Cosmic Collisions](https://soylentnews.org/article.pl?sid=25/06/29/0435239&amp;from=rss)
* [2025-06-29, 09:19:00](https://soylentnews.org/article.pl?sid=25/06/29/0430235&amp;from=rss) - [Danish Copyright on Your Digital Representation](https://soylentnews.org/article.pl?sid=25/06/29/0430235&amp;from=rss)
* [2025-06-29, 04:46:00](https://soylentnews.org/meta/article.pl?sid=25/06/29/0446225&amp;from=rss) - [Reason for the Site Outage - the Cable Had Been Cut Again!](https://soylentnews.org/meta/article.pl?sid=25/06/29/0446225&amp;from=rss)
* [2025-06-29, 04:35:00](https://soylentnews.org/article.pl?sid=25/06/29/0427207&amp;from=rss) - [Fedora Plans to Drop 32-Bit  i686 Packages](https://soylentnews.org/article.pl?sid=25/06/29/0427207&amp;from=rss)
* [2025-06-29, 01:00:11](https://news.ycombinator.com/item?id=44409488) - [Genetic Code Enables Zebrafish to Mend Damaged Organs](https://www.caltech.edu/about/news/genetic-code-enables-zebrafish-to-mend-damaged-organs)
* [2025-06-28, 22:15:42](https://news.ycombinator.com/item?id=44408615) - [Automatic build number incrementing in Xcode](https://blog.gingerbeardman.com/2025/06/28/automatic-build-number-incrementing-in-xcode/)
* [2025-06-28, 20:15:00](https://soylentnews.org/article.pl?sid=25/06/28/0137201&amp;from=rss) - [Win11 Black Screen of Death update](https://soylentnews.org/article.pl?sid=25/06/28/0137201&amp;from=rss)
* [2025-06-28, 20:01:54](https://news.ycombinator.com/item?id=44407708) - [People Keep Inventing Prolly Trees](https://www.dolthub.com/blog/2025-06-03-people-keep-inventing-prolly-trees/)
* [2025-06-28, 15:33:53](https://news.ycombinator.com/item?id=44405423) - [Restoring a ZX Spectrum+ Toastrack](https://celso.io/posts/2025/06/28/toastrack/)
* [2025-06-28, 15:30:00](https://soylentnews.org/article.pl?sid=25/06/27/021255&amp;from=rss) - [Sparcs Cubesats To Test Electrodynamic Tethers ](https://soylentnews.org/article.pl?sid=25/06/27/021255&amp;from=rss)
* [2025-06-28, 11:45:00](https://soylentnews.org/article.pl?sid=25/06/26/1527200&amp;from=rss) - [Canonical to Remove GPU Exploit Mitigation to Gain 20% Performance Boost](https://soylentnews.org/article.pl?sid=25/06/26/1527200&amp;from=rss)
* [2025-06-28, 07:03:00](https://soylentnews.org/article.pl?sid=25/06/26/158255&amp;from=rss) - [Edit is Back](https://soylentnews.org/article.pl?sid=25/06/26/158255&amp;from=rss)
* [2025-06-28, 02:17:00](https://soylentnews.org/article.pl?sid=25/06/26/153208&amp;from=rss) - [Trump Administration Moves to Count Crypto as a Federal Mortgage Asset](https://soylentnews.org/article.pl?sid=25/06/26/153208&amp;from=rss)
* [2025-06-27, 21:33:00](https://soylentnews.org/article.pl?sid=25/06/26/0234223&amp;from=rss) - [A Solid-State Battery Breakthrough May be Taking Shape in Maryland](https://soylentnews.org/article.pl?sid=25/06/26/0234223&amp;from=rss)
* [2025-06-27, 16:47:00](https://soylentnews.org/article.pl?sid=25/06/26/0227253&amp;from=rss) - [Greek Man Sentenced to Prison for Running a Private Torrent Site 10 Years Ago](https://soylentnews.org/article.pl?sid=25/06/26/0227253&amp;from=rss)
* [2025-06-27, 12:04:00](https://soylentnews.org/article.pl?sid=25/06/26/0225203&amp;from=rss) - [An Updated PNG Spec](https://soylentnews.org/article.pl?sid=25/06/26/0225203&amp;from=rss)
* [2025-06-27, 07:14:00](https://soylentnews.org/article.pl?sid=25/06/26/0223205&amp;from=rss) - [Modified Bacteria Convert Plastic Waste Into Pain Reliever](https://soylentnews.org/article.pl?sid=25/06/26/0223205&amp;from=rss)
* [2025-06-27, 02:29:00](https://soylentnews.org/article.pl?sid=25/06/26/0210246&amp;from=rss) - [Why Geoengineering is No Longer a Complete Taboo for Scientists](https://soylentnews.org/article.pl?sid=25/06/26/0210246&amp;from=rss)
