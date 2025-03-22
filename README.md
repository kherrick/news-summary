# [News Summary](https://kherrick.github.io/news-summary/)

## Innovations and Tools for Developers

* [Neurosymbolic Programming with Scallop](https://www.scallop-lang.org/) - Introduces an advanced programming language combining symbolic AI and machine learning.

* [Landrun: Sandbox any Linux process using Landlock, no root or containers](https://github.com/Zouuup/landrun) - A tool allowing controlled Linux process isolation without requiring system-level privileges.

* [Show HN: FastOpenAPI – automated docs for many Python frameworks](https://github.com/mr-fatalyst/fastopenapi) - A new tool that simplifies the generation of OpenAPI documentation across various Python frameworks.

* [Hardware-Aware Coding: CPU Architecture Concepts Every Developer Should Know](https://blog.codingconfessions.com/p/hardware-aware-coding) - Explains key CPU architecture concepts for optimizing software design.

* [Crabtime: Zig's Comptime in Rust](https://docs.rs/crabtime/latest/crabtime/) - Implements Zig's compile-time techniques in Rust with innovative capabilities.

## Security and Privacy Concerns

* [Chunking Attacks on File Backup Services using Content-Deﬁned Chunking](https://www.daemonology.net/blog/chunking-attacks.pdf) - Analyzes vulnerabilities in backup systems adopting content-defined chunking techniques.

* [Authorization Bypass in Next.js Middleware](https://github.com/advisories/GHSA-f82v-jwr5-mffw) - Discusses a critical security flaw within Next.js middleware.

* [One mother's win over Meta will change social media for everyone](https://www.thetimes.com/uk/technology-uk/article/facebook-personal-data-opt-out-swg26rm5z) - A case influencing global data privacy and social media governance.

* [France rejects backdoor mandate](https://www.eff.org/deeplinks/2025/03/win-encryption-france-rejects-backdoor-mandate) - France takes a strong stance supporting encryption and against governmental backdoor requirements.

* [China Will Enforce Clear Flagging of All AI Generated Content Starting From September](https://soylentnews.org/article.pl?sid=25/03/21/0227252&from=rss) - New legislation mandates transparent labeling of AI-generated material.

## Perspectives on Artificial Intelligence

* [Majority of AI Researchers Say Tech Industry Is Pouring Billions Into a Dead End](https://slashdot.org/story/25/03/22/0341222/majority-of-ai-researchers-say-tech-industry-is-pouring-billions-into-a-dead-end?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Critiques on the current trajectory and investments in AI technologies.

* [Cloudflare Turns AI Against Itself With Endless Maze of Irrelevant Facts](https://tech.slashdot.org/story/25/03/22/014247/cloudflare-turns-ai-against-itself-with-endless-maze-of-irrelevant-facts?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Innovating methods to counteract malicious AI bots using AI.

* [Meta Spotted Testing AI-Generated Comments on Instagram](https://tech.slashdot.org/story/25/03/21/2246239/meta-spotted-testing-ai-generated-comments-on-instagram?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Reports Meta testing automated comment generation on social platforms.

* [The Cybernetic Teammate](https://www.oneusefulthing.org/p/the-cybernetic-teammate) - Discusses the evolution of collaborative AI entities.

## Unique Events and Observations

* [When you deleted /lib on Linux while still connected via SSH](https://tinyhack.com/2022/09/16/when-you-deleted-lib-on-linux-while-still-connected-via-ssh/) - A technical anecdote on an unusual Linux user experience.

* [How a glitch in an online survey replaced the word ‘yes’ with ‘forks’](https://www.pewresearch.org/decoded/2025/03/21/how-a-glitch-in-an-online-survey-replaced-the-word-yes-with-forks/) - Reflects on unintended consequences within digital surveys.

* [Cake is watching you: I built a camera cake](https://medium.com/@hazalmestci/interact-with-your-cake-and-eat-it-too-24d25da25017) - Combines technology with culinary arts to create an interactive experience.

* [Monster Cables picked the wrong guy to threaten (2008)](https://www.oncontracts.com/monster-cables-picked-the-wrong-guy-to-threaten/) - Revisits an interesting case of trademark disputes.

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

* [2025-03-22, 15:50:31](https://lobste.rs/s/dpvuon/block_based_ui_libraries_for_data_flow) - [Block-based UI Libraries for Data Flow?](https://lobste.rs/s/dpvuon/block_based_ui_libraries_for_data_flow)
* [2025-03-22, 15:41:53](https://lobste.rs/s/f03atu/chunking_attacks_on_file_backup_services) - [Chunking Attacks on File Backup Services using Content-Deﬁned Chunking](https://www.daemonology.net/blog/chunking-attacks.pdf)
* [2025-03-22, 15:34:00](https://slashdot.org/story/25/03/22/0341222/majority-of-ai-researchers-say-tech-industry-is-pouring-billions-into-a-dead-end?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Majority of AI Researchers Say Tech Industry Is Pouring Billions Into a Dead End](https://slashdot.org/story/25/03/22/0341222/majority-of-ai-researchers-say-tech-industry-is-pouring-billions-into-a-dead-end?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-22, 15:30:48](https://news.ycombinator.com/item?id=43446442) - [Paul A. M. Dirac, Interview by Friedrich Hund (1982) [video]](https://www.youtube.com/watch?v=xJzrU38pGWc)
* [2025-03-22, 14:56:09](https://news.ycombinator.com/item?id=43446103) - [Amazon wants a product safety regulator declared unconstitutional](https://www.washingtonpost.com/technology/2025/03/21/amazon-product-safety-regulators-trump/)
* [2025-03-22, 14:39:04](https://news.ycombinator.com/item?id=43445931) - [PyTorch Internals: Ezyang's Blog](https://blog.ezyang.com/2019/05/pytorch-internals/)
* [2025-03-22, 14:35:12](https://news.ycombinator.com/item?id=43445894) - [Understanding R1-Zero-Like Training: A Critical Perspective](https://github.com/sail-sg/understand-r1-zero)
* [2025-03-22, 14:34:00](https://news.slashdot.org/story/25/03/21/0212206/unaware-and-uncertain-report-finds-widespread-unfamiliarity-with-2027s-eu-cyber-resilience-requirements?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['Unaware and Uncertain':  Report Finds Widespread Unfamiliarity With 2027's EU Cyber Resilience Requirements](https://news.slashdot.org/story/25/03/21/0212206/unaware-and-uncertain-report-finds-widespread-unfamiliarity-with-2027s-eu-cyber-resilience-requirements?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-22, 14:17:13](https://news.ycombinator.com/item?id=43445755) - [One mother's win over Meta will change social media for everyone](https://www.thetimes.com/uk/technology-uk/article/facebook-personal-data-opt-out-swg26rm5z)
* [2025-03-22, 14:10:30](https://news.ycombinator.com/item?id=43445720) - [Show HN: FastOpenAPI – automated docs for many Python frameworks](https://github.com/mr-fatalyst/fastopenapi)
* [2025-03-22, 13:56:59](https://news.ycombinator.com/item?id=43445662) - [Landrun: Sandbox any Linux process using Landlock, no root or containers](https://github.com/Zouuup/landrun)
* [2025-03-22, 13:55:43](https://lobste.rs/s/hvmp7k/authorization_bypass_next_js_middleware) - [Authorization Bypass in Next.js Middleware](https://github.com/advisories/GHSA-f82v-jwr5-mffw)
* [2025-03-22, 13:46:30](https://news.ycombinator.com/item?id=43445614) - [Differential Geometry: A First Course in Curves and Surfaces [pdf]](https://math.franklin.uga.edu/sites/default/files/users/user317/ShifrinDiffGeo.pdf)
* [2025-03-22, 13:23:55](https://lobste.rs/s/r1hu2x/crabtime_zig_s_comptime_rust) - [Crabtime: Zig's Comptime in Rust](https://docs.rs/crabtime/latest/crabtime/)
* [2025-03-22, 13:00:00](https://developers.slashdot.org/story/25/03/22/1211202/us-programming-jobs-plunge-275-in-two-years?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [US Programming Jobs Plunge 27.5% in Two Years](https://developers.slashdot.org/story/25/03/22/1211202/us-programming-jobs-plunge-275-in-two-years?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-22, 12:52:27](https://news.ycombinator.com/item?id=43445381) - [The Cybernetic Teammate](https://www.oneusefulthing.org/p/the-cybernetic-teammate)
* [2025-03-22, 12:46:46](https://lobste.rs/s/qmmfje/don_t_be_afraid_types) - [Don't Be Afraid Of Types](https://lmika.org/2025/03/18/dont-be-afraid-of-types.html)
* [2025-03-22, 11:53:00](https://soylentnews.org/article.pl?sid=25/03/21/0236216&from=rss) - [Euro Techies Call for Sovereign Fund to Escape US Dependency](https://soylentnews.org/article.pl?sid=25/03/21/0236216&from=rss)
* [2025-03-22, 11:30:00](https://slashdot.org/story/25/03/22/1125225/new-ios-update-re-enables-apple-intelligence-for-users-who-had-turned-it-off?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [New iOS Update Re-Enables Apple Intelligence For Users Who Had Turned It Off](https://slashdot.org/story/25/03/22/1125225/new-ios-update-re-enables-apple-intelligence-for-users-who-had-turned-it-off?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-22, 09:30:07](https://lobste.rs/s/ad3dgx/haiku_loves_nvidia_porting_nvidia_gpu) - [Haiku loves Nvidia (porting Nvidia GPU driver)](https://discuss.haiku-os.org/t/haiku-nvidia-porting-nvidia-gpu-driver/16520)
* [2025-03-22, 09:30:00](https://it.slashdot.org/story/25/03/22/0855215/france-rejects-backdoor-mandate?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [France Rejects Backdoor Mandate](https://it.slashdot.org/story/25/03/22/0855215/france-rejects-backdoor-mandate?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-22, 08:10:40](https://lobste.rs/s/v4cr5g/neurosymbolic_programming_with_scallop) - [Neurosymbolic Programming with Scallop](https://www.scallop-lang.org/)
* [2025-03-22, 08:01:43](https://lobste.rs/s/tdjkhi/microsoft_proposes_hornet_security) - [Microsoft Proposes \"Hornet\" Security Module For The Linux Kernel](https://www.phoronix.com/news/Microsoft-Hornet-Linux-LSM)
* [2025-03-22, 07:24:05](https://news.ycombinator.com/item?id=43444160) - [When you deleted /lib on Linux while still connected via SSH](https://tinyhack.com/2022/09/16/when-you-deleted-lib-on-linux-while-still-connected-via-ssh/)
* [2025-03-22, 07:22:41](https://lobste.rs/s/zmgtvx/when_you_deleted_lib_on_linux_while_still) - [When you deleted /lib on Linux while still connected via ssh](https://tinyhack.com/2022/09/16/when-you-deleted-lib-on-linux-while-still-connected-via-ssh/)
* [2025-03-22, 07:05:00](https://soylentnews.org/article.pl?sid=25/03/21/0227252&from=rss) - [China Will Enforce Clear Flagging of All AI Generated Content Starting From September](https://soylentnews.org/article.pl?sid=25/03/21/0227252&from=rss)
* [2025-03-22, 07:00:00](https://tech.slashdot.org/story/25/03/22/010205/how-an-electrical-fire-shut-down-heathrow-and-upended-global-air-travel?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [How an Electrical Fire Shut Down Heathrow and Upended Global Air Travel](https://tech.slashdot.org/story/25/03/22/010205/how-an-electrical-fire-shut-down-heathrow-and-upended-global-air-travel?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-22, 06:46:57](https://lobste.rs/s/uyortk/hardware_aware_coding_cpu_architecture) - [Hardware-Aware Coding: CPU Architecture Concepts Every Developer Should Know](https://blog.codingconfessions.com/p/hardware-aware-coding)
* [2025-03-22, 04:45:08](https://news.ycombinator.com/item?id=43443640) - [Scallop – A Language for Neurosymbolic Programming](https://www.scallop-lang.org/)
* [2025-03-22, 04:30:00](https://tech.slashdot.org/story/25/03/22/014247/cloudflare-turns-ai-against-itself-with-endless-maze-of-irrelevant-facts?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Cloudflare Turns AI Against Itself With Endless Maze of Irrelevant Facts](https://tech.slashdot.org/story/25/03/22/014247/cloudflare-turns-ai-against-itself-with-endless-maze-of-irrelevant-facts?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-22, 02:19:00](https://soylentnews.org/article.pl?sid=25/03/21/0159251&from=rss) - [Ubuntu Plans to Swap GNU Coreutils for Rust](https://soylentnews.org/article.pl?sid=25/03/21/0159251&from=rss)
* [2025-03-22, 01:45:00](https://slashdot.org/story/25/03/22/018254/amazon-ceo-criticizes-manager-fiefdoms-and-stresses-the-need-for-meritocracy?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Amazon CEO Criticizes Manager Fiefdoms and Stresses the Need For 'Meritocracy' ](https://slashdot.org/story/25/03/22/018254/amazon-ceo-criticizes-manager-fiefdoms-and-stresses-the-need-for-meritocracy?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-22, 01:34:13](https://lobste.rs/s/ykvjrj/how_glitch_online_survey_replaced_word) - [How a glitch in an online survey replaced the word ‘yes’ with ‘forks’](https://www.pewresearch.org/decoded/2025/03/21/how-a-glitch-in-an-online-survey-replaced-the-word-yes-with-forks/)
* [2025-03-22, 01:29:24](https://lobste.rs/s/yt4vlb/lightpanda_new_browser_built_for) - [Lightpanda: A new browser built for machines](https://lightpanda.io/)
* [2025-03-22, 01:25:09](https://lobste.rs/s/9c875g/chunking_attacks_on_tarsnap_others) - [Chunking attacks on Tarsnap (and others)](https://www.daemonology.net/blog/2025-03-21-Chunking-attacks-on-Tarsnap.html)
* [2025-03-22, 01:01:40](https://news.ycombinator.com/item?id=43442360) - [Imbue (YC S17) Is Hiring Product Engineers](https://news.ycombinator.com/item?id=43442360)
* [2025-03-22, 01:00:00](https://yro.slashdot.org/story/25/03/21/2343252/director-charged-with-netflix-fraud-after-splurging-on-crypto-instead-of-finishing-sci-fi-series?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Director Charged With Netflix Fraud After Splurging on Crypto Instead of Finishing Sci-fi Series](https://yro.slashdot.org/story/25/03/21/2343252/director-charged-with-netflix-fraud-after-splurging-on-crypto-instead-of-finishing-sci-fi-series?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-22, 00:30:37](https://news.ycombinator.com/item?id=43442178) - [Monster Cables picked the wrong guy to threaten (2008)](https://www.oncontracts.com/monster-cables-picked-the-wrong-guy-to-threaten/)
* [2025-03-21, 23:45:00](https://apple.slashdot.org/story/25/03/21/2252226/apple-sued-for-false-advertising-over-apple-intelligence?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Apple Sued For False Advertising Over Apple Intelligence](https://apple.slashdot.org/story/25/03/21/2252226/apple-sued-for-false-advertising-over-apple-intelligence?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-21, 23:03:10](https://lobste.rs/s/swedbj/shaarli_personal_minimalist_super_fast) - [Shaarli: personal, minimalist, super-fast, database free, bookmarking service](https://github.com/shaarli/Shaarli)
* [2025-03-21, 22:53:17](https://lobste.rs/s/h0yytn/c_rust_interoperability_problem) - [C++/Rust Interoperability Problem Statement](https://github.com/rustfoundation/interop-initiative)
* [2025-03-21, 22:46:00](https://tech.slashdot.org/story/25/03/21/2246239/meta-spotted-testing-ai-generated-comments-on-instagram?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Meta Spotted Testing AI-Generated Comments on Instagram](https://tech.slashdot.org/story/25/03/21/2246239/meta-spotted-testing-ai-generated-comments-on-instagram?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-21, 21:37:00](https://soylentnews.org/article.pl?sid=25/03/20/0719234&from=rss) - [Academics Accuse AI Startups of Co-Opting Peer Review for Publicity](https://soylentnews.org/article.pl?sid=25/03/20/0719234&from=rss)
* [2025-03-21, 20:35:11](https://news.ycombinator.com/item?id=43440513) - [France rejects backdoor mandate](https://www.eff.org/deeplinks/2025/03/win-encryption-france-rejects-backdoor-mandate)
* [2025-03-21, 20:07:12](https://news.ycombinator.com/item?id=43440267) - [Pen and Paper Exercises in Machine Learning (2022)](https://arxiv.org/abs/2206.13446)
* [2025-03-21, 20:06:52](https://lobste.rs/s/htsyvf/i_want_good_parallel_computer) - [I want a good parallel computer](https://raphlinus.github.io/gpu/2025/03/21/good-parallel-computer.html)
* [2025-03-21, 19:57:00](https://news.ycombinator.com/item?id=43440184) - [Use Long Options in Scripts](https://matklad.github.io/2025/03/21/use-long-options-in-scripts.html)
* [2025-03-21, 19:55:42](https://news.ycombinator.com/item?id=43440174) - [I want a good parallel computer](https://raphlinus.github.io/gpu/2025/03/21/good-parallel-computer.html)
* [2025-03-21, 19:39:17](https://news.ycombinator.com/item?id=43440046) - [Frink](https://frinklang.org/)
* [2025-03-21, 19:00:00](https://slashdot.org/story/25/03/21/1851233/openai-study-finds-links-between-chatgpt-use-and-loneliness?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [OpenAI Study Finds Links Between ChatGPT Use and Loneliness](https://slashdot.org/story/25/03/21/1851233/openai-study-finds-links-between-chatgpt-use-and-loneliness?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-21, 18:00:00](https://news.slashdot.org/story/25/03/21/1611253/us-removes-tornado-cash-sanctions?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [US Removes Tornado Cash Sanctions](https://news.slashdot.org/story/25/03/21/1611253/us-removes-tornado-cash-sanctions?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-21, 17:43:25](https://news.ycombinator.com/item?id=43438797) - [Show HN: A terminal emulator in pure PHP](https://github.com/soloterm/screen)
* [2025-03-21, 17:24:41](https://lobste.rs/s/1ridxo/tmp_0ut_volume_4) - [tmp.0ut Volume 4](HTTP://Tmpout.sh/4)
* [2025-03-21, 16:51:00](https://soylentnews.org/article.pl?sid=25/03/20/0714208&from=rss) - [Los Alamos Scientists Invent Speedometer For Satellites](https://soylentnews.org/article.pl?sid=25/03/20/0714208&from=rss)
* [2025-03-21, 16:26:34](https://lobste.rs/s/patoqt/what_comes_after_github_actions) - [What Comes After GitHub Actions?](https://garnix.io/blog/what-comes-after-gha)
* [2025-03-21, 16:25:00](https://tech.slashdot.org/story/25/03/21/1623227/microsoft-tells-windows-10-users-to-buy-new-pcs?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Tells Windows 10 Users To Buy New PCs](https://tech.slashdot.org/story/25/03/21/1623227/microsoft-tells-windows-10-users-to-buy-new-pcs?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-21, 15:50:00](https://tech.slashdot.org/story/25/03/21/1550212/yahoo-sells-techcrunch?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Yahoo Sells TechCrunch](https://tech.slashdot.org/story/25/03/21/1550212/yahoo-sells-techcrunch?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-21, 15:35:27](https://news.ycombinator.com/item?id=43436894) - [IronRDP: a Rust implementation of Microsoft's RDP protocol](https://github.com/Devolutions/IronRDP)
* [2025-03-21, 15:12:54](https://lobste.rs/s/ybyno6/trapping_misbehaving_bots_ai_labyrinth) - [Trapping misbehaving bots in an AI Labyrinth](https://blog.cloudflare.com/ai-labyrinth/)
* [2025-03-21, 12:04:00](https://soylentnews.org/article.pl?sid=25/03/20/0658243&from=rss) - [The Naturalness of the Seasonal Time Change: Researchers Question Basis of Modern Criticism](https://soylentnews.org/article.pl?sid=25/03/20/0658243&from=rss)
* [2025-03-21, 11:57:57](https://lobste.rs/s/yl2jwa/mistakes_missed_opportunities_design) - [The mistakes and missed opportunities in the design of IPv6 (episode 1)](https://ipv6.hanazo.no/posts/ipv6-missed-opportunities-1/)
* [2025-03-21, 11:18:33](https://lobste.rs/s/exoxg9/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/exoxg9/what_are_you_doing_this_weekend)
* [2025-03-21, 10:49:41](https://news.ycombinator.com/item?id=43434093) - [Career Development: What It Means to Be a Manager, Director, or VP (2015)](https://kellblog.com/2015/03/08/career-development-what-it-really-means-to-be-a-manager-director-or-vp/)
* [2025-03-21, 07:21:00](https://soylentnews.org/article.pl?sid=25/03/20/0652220&from=rss) - [North Korea's Bitcoin Reserve Thought to be 3rd Largest in World](https://soylentnews.org/article.pl?sid=25/03/20/0652220&from=rss)
* [2025-03-21, 05:52:42](https://lobste.rs/s/6vbtjd/chimera_linux_not_dropping_risc_v_support) - [Chimera Linux NOT dropping RISC-V support after all](https://chimera-linux.org/news/2025/03/new-riscv-server.html)
* [2025-03-21, 03:04:37](https://lobste.rs/s/ahk6h5/vibe_coding_vs_reality) - [\"Vibe Coding\" vs Reality](https://cendyne.dev/posts/2025-03-19-vibe-coding-vs-reality.html)
* [2025-03-21, 02:39:09](https://lobste.rs/s/2xjpig/asahi_linux_progress_report_linux_kernel) - [Asahi Linux progress report: Linux kernel 6.14](https://asahilinux.org/2025/03/progress-report-6-14/)
* [2025-03-21, 02:37:00](https://soylentnews.org/article.pl?sid=25/03/19/1458230&from=rss) - [New Undersea Cable Tech Listens For Sabotage  Can Be Retrofitted To Existing Fiber Optic Line](https://soylentnews.org/article.pl?sid=25/03/19/1458230&from=rss)
* [2025-03-20, 21:56:00](https://soylentnews.org/article.pl?sid=25/03/19/1456215&from=rss) - [Microsoft's Quantum Breakthrough Claim Labeled 'Unreliable'](https://soylentnews.org/article.pl?sid=25/03/19/1456215&from=rss)
* [2025-03-20, 21:37:10](https://lobste.rs/s/sknzdg/anubis_self_hostable_scraper_defense) - [Anubis: self hostable scraper defense software](https://anubis.techaro.lol/)
* [2025-03-20, 17:08:00](https://soylentnews.org/politics/article.pl?sid=25/03/19/1440251&from=rss) - [FTC Removes Posts Critical of Amazon, Microsoft, and AI Companies](https://soylentnews.org/politics/article.pl?sid=25/03/19/1440251&from=rss)
* [2025-03-20, 12:25:00](https://soylentnews.org/article.pl?sid=25/03/19/120255&from=rss) - [Apple Loses 2025 Antitrust Appeal in Germany](https://soylentnews.org/article.pl?sid=25/03/19/120255&from=rss)
* [2025-03-20, 07:41:00](https://soylentnews.org/article.pl?sid=25/03/19/1152214&from=rss) - [Firefly Bids Farewell to its Lunar Lander After 14 Days on the Moon](https://soylentnews.org/article.pl?sid=25/03/19/1152214&from=rss)
* [2025-03-20, 02:57:00](https://soylentnews.org/article.pl?sid=25/03/19/1145216&from=rss) - [UK's Internet Watchdog Puts Storage and File-Sharing Services on Watch Over CSAM](https://soylentnews.org/article.pl?sid=25/03/19/1145216&from=rss)
* [2025-03-20, 01:06:58](https://news.ycombinator.com/item?id=43418960) - [The Humans Building AI Scientists](https://www.asimov.press/p/futurehouse)
* [2025-03-19, 22:14:00](https://soylentnews.org/article.pl?sid=25/03/18/1622242&from=rss) - [Tobacco's Hidden Friendly Side: How the Controversial Plant Could be Used for Good](https://soylentnews.org/article.pl?sid=25/03/18/1622242&from=rss)
* [2025-03-19, 18:44:11](https://news.ycombinator.com/item?id=43415820) - [Crabtime: Zig’s Comptime in Rust](https://crates.io/crates/crabtime)
* [2025-03-19, 17:44:59](https://news.ycombinator.com/item?id=43415113) - [Cake is watching you: I built a camera cake](https://medium.com/@hazalmestci/interact-with-your-cake-and-eat-it-too-24d25da25017)
* [2025-03-19, 17:29:00](https://soylentnews.org/article.pl?sid=25/03/18/1610234&from=rss) - [U.S. Atari Parts Store Still Open After 41 Years, Has Spent $100K+ Designing New Parts](https://soylentnews.org/article.pl?sid=25/03/18/1610234&from=rss)
* [2025-03-19, 12:46:00](https://soylentnews.org/article.pl?sid=25/03/18/168222&from=rss) - [Discord Launches SDK to Help Developers Enhance Social Experiences in Their Games](https://soylentnews.org/article.pl?sid=25/03/18/168222&from=rss)
* [2025-03-19, 12:14:46](https://news.ycombinator.com/item?id=43410874) - [‘Bluey’s World’: How a Cute Aussie Puppy Became a Juggernaut](https://www.hollywoodreporter.com/tv/tv-features/blueys-world-success-puppy-juggernaut-1236164905/)
* [2025-03-19, 08:02:00](https://soylentnews.org/article.pl?sid=25/03/18/165235&from=rss) - [Iguanas Floated One-Fifth of the Way Around the World to Colonize Fiji, Genetic Analysis Indicates](https://soylentnews.org/article.pl?sid=25/03/18/165235&from=rss)
* [2025-03-19, 03:18:00](https://soylentnews.org/article.pl?sid=25/03/18/0159258&from=rss) - [Everything You Say to Your Echo Will be Sent to Amazon Starting on March 28](https://soylentnews.org/article.pl?sid=25/03/18/0159258&from=rss)
* [2025-03-18, 22:33:00](https://soylentnews.org/article.pl?sid=25/03/18/0153234&from=rss) - [People are Using Google's New AI Model to Remove Watermarks From Images](https://soylentnews.org/article.pl?sid=25/03/18/0153234&from=rss)
* [2025-03-18, 21:56:46](https://news.ycombinator.com/item?id=43405638) - [Locks, leases, fencing tokens, FizzBee](https://surfingcomplexity.blog/2025/03/03/locks-leases-fencing-tokens-fizzbee/)
* [2025-03-18, 18:53:00](https://news.ycombinator.com/item?id=43403321) - [Don't Be Afraid of Types](https://lmika.org/2025/03/18/dont-be-afraid-of-types.html)
* [2025-03-18, 17:49:00](https://soylentnews.org/article.pl?sid=25/03/18/0150258&from=rss) - [Unearthed Notebooks Shed Light on Victorian Genius Who Inspired Einstein](https://soylentnews.org/article.pl?sid=25/03/18/0150258&from=rss)
* [2025-03-18, 13:07:00](https://soylentnews.org/article.pl?sid=25/03/17/128219&from=rss) - [On the Road to Idiocracy](https://soylentnews.org/article.pl?sid=25/03/17/128219&from=rss)
* [2025-03-18, 13:04:35](https://news.ycombinator.com/item?id=43398967) - [The New Three-Tier Application](https://www.dbos.dev/blog/new-three-tier-application)
* [2025-03-18, 12:21:12](https://news.ycombinator.com/item?id=43398539) - [Liberapay](https://en.liberapay.com/)
* [2025-03-18, 11:50:38](https://news.ycombinator.com/item?id=43398308) - [Global population datasets underrepresent rural population](https://www.nature.com/articles/s41467-025-56906-7)
* [2025-03-18, 08:24:00](https://soylentnews.org/article.pl?sid=25/03/17/126247&from=rss) - [Forget Windows 11, SteamOS for Desktops May be Released Soon](https://soylentnews.org/article.pl?sid=25/03/17/126247&from=rss)
* [2025-03-18, 03:38:00](https://soylentnews.org/article.pl?sid=25/03/17/123238&from=rss) - [Chaos in Gravity - the Quantum Based Magnetic Monopole of Mass?](https://soylentnews.org/article.pl?sid=25/03/17/123238&from=rss)
