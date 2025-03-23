# [News Summary](https://kherrick.github.io/news-summary/)

## No content was returned.

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

* [2025-03-23, 15:34:00](https://build.slashdot.org/story/25/03/23/0012253/raspberry-pi-announces-new-tool-for-customized-software-images?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Raspberry Pi Announces New Tool for Customized Software Images](https://build.slashdot.org/story/25/03/23/0012253/raspberry-pi-announces-new-tool-for-customized-software-images?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-23, 15:31:26](https://news.ycombinator.com/item?id=43453582) - [A USB Interface to the \"Mother of All Demos\" Keyset](https://www.righto.com/2025/03/mother-of-all-demos-usb-keyset-interface.html)
* [2025-03-23, 14:36:06](https://lobste.rs/s/rtnt5g/brief_introduction_esoteric) - [A Brief Introduction to Esoteric Programming Languages [Video]](https://www.youtube.com/watch?v=cQ7bcCrJMHc)
* [2025-03-23, 14:34:00](https://science.slashdot.org/story/25/03/22/0542234/this-is-the-sharpest-image-yet-of-our-universe-as-a-baby?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['This Is the Sharpest Image Yet of Our Universe As a Baby'](https://science.slashdot.org/story/25/03/22/0542234/this-is-the-sharpest-image-yet-of-our-universe-as-a-baby?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-23, 14:23:45](https://lobste.rs/s/m7uwhw/deep_vs_shallow_go_interfaces) - [Deep vs Shallow Go interfaces](https://tpaschalis.me/shallow-vs-deep-interfaces/)
* [2025-03-23, 13:14:15](https://news.ycombinator.com/item?id=43452688) - [Technicalities of Homeworld 2 Backgrounds](https://simonschreibt.de/gat/homeworld-2-backgrounds/)
* [2025-03-23, 13:11:51](https://lobste.rs/s/kxv2um/technicalities_homeworld_2_backgrounds) - [Technicalities of Homeworld 2 backgrounds](https://simonschreibt.de/gat/homeworld-2-backgrounds/)
* [2025-03-23, 13:08:45](https://news.ycombinator.com/item?id=43452649) - [The Worst Programmer I Know (2023)](https://dannorth.net/the-worst-programmer/)
* [2025-03-23, 12:45:21](https://news.ycombinator.com/item?id=43452525) - [argp: GNU-style command line argument parser for Go](https://github.com/tdewolff/argp)
* [2025-03-23, 12:15:51](https://news.ycombinator.com/item?id=43452413) - [Hadrius (YC W23) Is Hiring Engineers with Ambitious Career Goals](https://www.ycombinator.com/companies/hadrius/jobs/CObSGR0-founding-software-engineer-tech-lead)
* [2025-03-23, 12:05:45](https://lobste.rs/s/gww2jq/mikrotik_ubiquiti) - [Mikrotik to Ubiquiti](https://blog.poggs.com/2025/03/23/mikrotik-to-ubiquiti/)
* [2025-03-23, 11:38:00](https://soylentnews.org/article.pl?sid=25/03/22/1912255&from=rss) - [US Court of Appeals Unanimously Denies Copyright Protection for AI-Created Images](https://soylentnews.org/article.pl?sid=25/03/22/1912255&from=rss)
* [2025-03-23, 11:34:00](https://news.slashdot.org/story/25/03/23/0324221/wired-drops-paywalls-for-articles-based-on-public-records-requests-urges-other-sites-to-follow?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['Wired' Drops Paywalls for Articles Based on Public Records Requests, Urges Other Sites to Follow](https://news.slashdot.org/story/25/03/23/0324221/wired-drops-paywalls-for-articles-based-on-public-records-requests-urges-other-sites-to-follow?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-23, 11:09:28](https://news.ycombinator.com/item?id=43452185) - [The SeL4 Microkernel: An Introduction [pdf]](https://sel4.systems/About/seL4-whitepaper.pdf)
* [2025-03-23, 09:20:43](https://lobste.rs/s/lv1foz/ai_is_useless_it_is_our_best_bet_for_future) - [AI is useless, but it is our best bet for the future](https://antirez.com/news/148)
* [2025-03-23, 09:01:36](https://lobste.rs/s/h1fyct/decision_maker_s_guide_typed_functional) - [A decision maker's guide to Typed Functional Languages by Evan Czaplicki](https://youtu.be/sl1UQXgtepE)
* [2025-03-23, 08:14:25](https://news.ycombinator.com/item?id=43451525) - [The case of the critical section that let multiple threads enter a block of code](https://devblogs.microsoft.com/oldnewthing/20250321-00/?p=110984)
* [2025-03-23, 07:57:40](https://news.ycombinator.com/item?id=43451485) - [Next.js and the corrupt middleware: the authorizing artifact](https://zhero-web-sec.github.io/research-and-things/nextjs-and-the-corrupt-middleware)
* [2025-03-23, 07:34:00](https://science.slashdot.org/story/25/03/22/223207/nasa-considers-eliminating-its-headquarters-in-washington-dc?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [NASA Considers Eliminating Its Headquarters in Washington D.C.](https://science.slashdot.org/story/25/03/22/223207/nasa-considers-eliminating-its-headquarters-in-washington-dc?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-23, 07:29:03](https://news.ycombinator.com/item?id=43451397) - [Do Viruses Trigger Alzheimer's?](https://www.economist.com/science-and-technology/2025/03/17/do-viruses-trigger-alzheimers)
* [2025-03-23, 06:52:00](https://soylentnews.org/article.pl?sid=25/03/22/199248&from=rss) - [Cloudflare Turns AI Against Itself With Endless Maze of Irrelevant Facts](https://soylentnews.org/article.pl?sid=25/03/22/199248&from=rss)
* [2025-03-23, 05:28:04](https://lobste.rs/s/ib6oyf/why_did_you_need_change_8_files_add_one) - [Why did you need to change 8 files to add one checkbox?](https://www.mrlacey.com/2025/03/why-did-you-need-to-change-8-files-to.html)
* [2025-03-23, 03:40:05](https://news.ycombinator.com/item?id=43450732) - [Improving recommendation systems and search in the age of LLMs](https://eugeneyan.com/writing/recsys-llm/)
* [2025-03-23, 03:34:00](https://yro.slashdot.org/story/25/03/22/2333213/hungary-to-use-facial-recognition-to-suppress-pride-march?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Hungary To Use Facial Recognition to Suppress Pride March](https://yro.slashdot.org/story/25/03/22/2333213/hungary-to-use-facial-recognition-to-suppress-pride-march?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-23, 03:28:44](https://lobste.rs/s/is92qm/optimizing_by_170_000_by_not_being_silly) - [Optimizing by 170,000% by not being silly](https://ayende.com/blog/202147-A/optimizing-by-170-000-by-not-being-silly)
* [2025-03-23, 03:24:27](https://lobste.rs/s/g6jiui/what_influences_developers_trust) - [What influences developers' trust in adopting AI-assisted coding tools?](https://rdel.substack.com/p/rdel-84-what-influences-developers)
* [2025-03-23, 02:51:38](https://news.ycombinator.com/item?id=43450550) - [Stop using the elbow criterion for k-means](https://arxiv.org/abs/2212.12189)
* [2025-03-23, 02:48:42](https://lobste.rs/s/kcnb6n/custom_vc_focused_emacs_functions) - [Custom VC-Focused Emacs Functions to Enhance My Git Workflow](https://www.rahuljuliato.com/posts/vc-git-functions)
* [2025-03-23, 02:15:54](https://lobste.rs/s/bgxytg/powxy_anti_scraper_reverse_proxy) - [Powxy: anti-scraper reverse proxy](https://git.sr.ht/~runxiyu/powxy)
* [2025-03-23, 02:07:00](https://soylentnews.org/article.pl?sid=25/03/22/198241&from=rss) - [Linux Security Hardening Cache Randomization Was Inadvertently Using The Same Seed](https://soylentnews.org/article.pl?sid=25/03/22/198241&from=rss)
* [2025-03-23, 01:34:00](https://yro.slashdot.org/story/25/03/23/0043217/italy-demands-google-poison-its-public-dns-under-strict-piracy-shield-law?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Italy Demands Google Poison Its Public DNS Under Strict Piracy Shield Law](https://yro.slashdot.org/story/25/03/23/0043217/italy-demands-google-poison-its-public-dns-under-strict-piracy-shield-law?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-23, 01:14:39](https://lobste.rs/s/rsfp1p/enabling_seamless_interop_between_rust) - [Enabling seamless interop between Rust and other languages](https://hackmd.io/@rust-lang-team/rJvv36hq1e)
* [2025-03-23, 00:43:56](https://lobste.rs/s/9hyjs0/use_long_options_scripts) - [Use Long Options in Scripts](https://matklad.github.io/2025/03/21/use-long-options-in-scripts.html)
* [2025-03-22, 23:38:46](https://lobste.rs/s/tzwdfz/why_do_people_default_react_javascript) - [Why do people default to React and JavaScript for frontend and UIs?](https://lobste.rs/s/tzwdfz/why_do_people_default_react_javascript)
* [2025-03-22, 22:37:32](https://lobste.rs/s/75irlv/improved_ways_operate_rude_crawler) - [Improved ways to operate a rude crawler](https://www.marginalia.nu/log/a_115_rude_crawler/)
* [2025-03-22, 22:34:00](https://hardware.slashdot.org/story/25/03/22/2227218/china-explores-limiting-its-ev-and-battery-exports-for-us-tariff-negotiations?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [China Explores Limiting Its EV and Battery Exports For US Tariff Negotiations](https://hardware.slashdot.org/story/25/03/22/2227218/china-explores-limiting-its-ev-and-battery-exports-for-us-tariff-negotiations?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-22, 22:09:31](https://lobste.rs/s/mickni/pussh_simple_ssh_based_deployment_tool) - [pussh: A simple SSH-based deployment tool written in Bash](https://github.com/bearstech/pussh)
* [2025-03-22, 21:34:00](https://news.slashdot.org/story/25/03/22/2112245/americas-college-board-launches-ap-cybersecurity-course-for-non-college-bound-students?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [America's College Board Launches AP Cybersecurity Course For Non-College-Bound Students](https://news.slashdot.org/story/25/03/22/2112245/americas-college-board-launches-ap-cybersecurity-course-for-non-college-bound-students?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-22, 21:23:00](https://soylentnews.org/article.pl?sid=25/03/21/1841234&from=rss) - [A Dyson Swarm Made of Solar Panels Would Make Earth Uninhabitable](https://soylentnews.org/article.pl?sid=25/03/21/1841234&from=rss)
* [2025-03-22, 21:19:07](https://news.ycombinator.com/item?id=43448723) - [Next.js version 15.2.3 has been released to address a security vulnerability](https://nextjs.org/blog/cve-2025-29927)
* [2025-03-22, 20:52:23](https://lobste.rs/s/fptkgx/kurlnavbar_me) - [KURLNavBar and me](https://akselmo.dev/posts/visual-woes/)
* [2025-03-22, 20:42:04](https://news.ycombinator.com/item?id=43448457) - [Quitting an Intel x86 Hypervisor](https://halobates.de/blog/p/446)
* [2025-03-22, 20:40:41](https://lobste.rs/s/t5dx8z/quitting_intel_x86_hypervisor) - [Quitting an Intel x86 hypervisor](https://halobates.de/blog/p/446)
* [2025-03-22, 20:34:00](https://yro.slashdot.org/story/25/03/22/0459224/six-countries-named-as-likely-purchasers-of-paragons-cellphone-spyware?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Six Countries Named as 'Likely' Purchasers of Paragon's Cellphone Spyware](https://yro.slashdot.org/story/25/03/22/0459224/six-countries-named-as-likely-purchasers-of-paragons-cellphone-spyware?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-22, 19:34:00](https://tech.slashdot.org/story/25/03/22/1927247/rebooting-a-retro-pdp-11-workstation---and-its-classic-venix-unix?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Rebooting A Retro PDP-11 Workstation - and Its Classic 'Venix' UNIX](https://tech.slashdot.org/story/25/03/22/1927247/rebooting-a-retro-pdp-11-workstation---and-its-classic-venix-unix?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-22, 19:31:38](https://news.ycombinator.com/item?id=43448023) - [The polar vortex is hitting the brakes](https://www.climate.gov/news-features/blogs/polar-vortex/polar-vortex-hitting-brakes)
* [2025-03-22, 18:35:00](https://news.ycombinator.com/item?id=43447616) - [Most AI value will come from broad automation, not from R & D](https://epoch.ai/gradient-updates/most-ai-value-will-come-from-broad-automation-not-from-r-d)
* [2025-03-22, 18:34:00](https://yro.slashdot.org/story/25/03/22/1821200/was-undersea-cable-sabotage-part-of-a-larger-pattern?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Was Undersea Cable Sabotage Part of a Larger Pattern?](https://yro.slashdot.org/story/25/03/22/1821200/was-undersea-cable-sabotage-part-of-a-larger-pattern?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-22, 17:42:10](https://news.ycombinator.com/item?id=43447335) - [Map Features in OpenStreetMap with Computer Vision](https://blog.mozilla.ai/map-features-in-openstreetmap-with-computer-vision/)
* [2025-03-22, 17:34:00](https://science.slashdot.org/story/25/03/22/0414254/surprisingly-some-dyson-spheres-and-ringworlds-can-be-stable?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Surprisingly, Some Dyson Spheres and Ringworlds Can Be Stable](https://science.slashdot.org/story/25/03/22/0414254/surprisingly-some-dyson-spheres-and-ringworlds-can-be-stable?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-22, 17:25:32](https://news.ycombinator.com/item?id=43447254) - [Tencent's 'Hunyuan-T1'–The First Mamba-Powered Ultra-Large Model](https://llm.hunyuan.tencent.com/#/blog/hy-t1?lang=en)
* [2025-03-22, 16:48:11](https://lobste.rs/s/awzx8f/c3_reading_writing_files) - [C3: Reading and writing files](https://ebn.codeberg.page/programming/c3/c3-file-io/)
* [2025-03-22, 16:39:00](https://soylentnews.org/article.pl?sid=25/03/21/0242250&from=rss) - [Researcher Trolls Microsoft Over Bug Disclosure Annoyance](https://soylentnews.org/article.pl?sid=25/03/21/0242250&from=rss)
* [2025-03-22, 16:34:00](https://news.slashdot.org/story/25/03/22/0237216/us-release-of-unredacted-jfk-files-doxxed-officials-including-social-security-numbers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [US Release of Unredacted JFK Files 'Doxxed' Officials, Including Social Security Numbers](https://news.slashdot.org/story/25/03/22/0237216/us-release-of-unredacted-jfk-files-doxxed-officials-including-social-security-numbers?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-22, 15:34:00](https://slashdot.org/story/25/03/22/0341222/majority-of-ai-researchers-say-tech-industry-is-pouring-billions-into-a-dead-end?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Majority of AI Researchers Say Tech Industry Is Pouring Billions Into a Dead End](https://slashdot.org/story/25/03/22/0341222/majority-of-ai-researchers-say-tech-industry-is-pouring-billions-into-a-dead-end?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-22, 14:39:04](https://news.ycombinator.com/item?id=43445931) - [PyTorch Internals: Ezyang's Blog](https://blog.ezyang.com/2019/05/pytorch-internals/)
* [2025-03-22, 14:34:00](https://news.slashdot.org/story/25/03/21/0212206/unaware-and-uncertain-report-finds-widespread-unfamiliarity-with-2027s-eu-cyber-resilience-requirements?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['Unaware and Uncertain':  Report Finds Widespread Unfamiliarity With 2027's EU Cyber Resilience Requirements](https://news.slashdot.org/story/25/03/21/0212206/unaware-and-uncertain-report-finds-widespread-unfamiliarity-with-2027s-eu-cyber-resilience-requirements?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-22, 13:56:59](https://news.ycombinator.com/item?id=43445662) - [Landrun: Sandbox any Linux process using Landlock, no root or containers](https://github.com/Zouuup/landrun)
* [2025-03-22, 13:23:55](https://lobste.rs/s/r1hu2x/crabtime_zig_s_comptime_rust) - [Crabtime: Zig's Comptime in Rust](https://docs.rs/crabtime/latest/crabtime/)
* [2025-03-22, 12:46:46](https://lobste.rs/s/qmmfje/don_t_be_afraid_types) - [Don't Be Afraid Of Types](https://lmika.org/2025/03/18/dont-be-afraid-of-types.html)
* [2025-03-22, 11:53:00](https://soylentnews.org/article.pl?sid=25/03/21/0236216&from=rss) - [Euro Techies Call for Sovereign Fund to Escape US Dependency](https://soylentnews.org/article.pl?sid=25/03/21/0236216&from=rss)
* [2025-03-22, 09:30:07](https://lobste.rs/s/ad3dgx/haiku_loves_nvidia_porting_nvidia_gpu) - [Haiku loves Nvidia (porting Nvidia GPU driver)](https://discuss.haiku-os.org/t/haiku-nvidia-porting-nvidia-gpu-driver/16520)
* [2025-03-22, 07:22:41](https://lobste.rs/s/zmgtvx/when_you_deleted_lib_on_linux_while_still) - [When you deleted /lib on Linux while still connected via ssh](https://tinyhack.com/2022/09/16/when-you-deleted-lib-on-linux-while-still-connected-via-ssh/)
* [2025-03-22, 07:05:00](https://soylentnews.org/article.pl?sid=25/03/21/0227252&from=rss) - [China Will Enforce Clear Flagging of All AI Generated Content Starting From September](https://soylentnews.org/article.pl?sid=25/03/21/0227252&from=rss)
* [2025-03-22, 02:19:00](https://soylentnews.org/article.pl?sid=25/03/21/0159251&from=rss) - [Ubuntu Plans to Swap GNU Coreutils for Rust](https://soylentnews.org/article.pl?sid=25/03/21/0159251&from=rss)
* [2025-03-22, 01:34:13](https://lobste.rs/s/ykvjrj/how_glitch_online_survey_replaced_word) - [How a glitch in an online survey replaced the word ‘yes’ with ‘forks’](https://www.pewresearch.org/decoded/2025/03/21/how-a-glitch-in-an-online-survey-replaced-the-word-yes-with-forks/)
* [2025-03-21, 21:37:00](https://soylentnews.org/article.pl?sid=25/03/20/0719234&from=rss) - [Academics Accuse AI Startups of Co-Opting Peer Review for Publicity](https://soylentnews.org/article.pl?sid=25/03/20/0719234&from=rss)
* [2025-03-21, 20:06:52](https://lobste.rs/s/htsyvf/i_want_good_parallel_computer) - [I want a good parallel computer](https://raphlinus.github.io/gpu/2025/03/21/good-parallel-computer.html)
* [2025-03-21, 16:51:00](https://soylentnews.org/article.pl?sid=25/03/20/0714208&from=rss) - [Los Alamos Scientists Invent Speedometer For Satellites](https://soylentnews.org/article.pl?sid=25/03/20/0714208&from=rss)
* [2025-03-21, 12:04:00](https://soylentnews.org/article.pl?sid=25/03/20/0658243&from=rss) - [The Naturalness of the Seasonal Time Change: Researchers Question Basis of Modern Criticism](https://soylentnews.org/article.pl?sid=25/03/20/0658243&from=rss)
* [2025-03-21, 12:00:58](https://news.ycombinator.com/item?id=43434605) - [Unknown microorganisms used marble and limestone as a habitat](https://www.sciencedaily.com/releases/2025/03/250319143419.htm)
* [2025-03-21, 11:28:06](https://news.ycombinator.com/item?id=43434364) - [All Placebos are not created equal (2021)](https://www.samstack.io/p/all-placebos-are-not-created-equal)
* [2025-03-21, 07:21:00](https://soylentnews.org/article.pl?sid=25/03/20/0652220&from=rss) - [North Korea's Bitcoin Reserve Thought to be 3rd Largest in World](https://soylentnews.org/article.pl?sid=25/03/20/0652220&from=rss)
* [2025-03-21, 05:42:27](https://news.ycombinator.com/item?id=43432151) - [Matched and Deleted](https://www.dikshaupadhyay.com/p/matched-and-deleted)
* [2025-03-21, 02:37:00](https://soylentnews.org/article.pl?sid=25/03/19/1458230&from=rss) - [New Undersea Cable Tech Listens For Sabotage  Can Be Retrofitted To Existing Fiber Optic Line](https://soylentnews.org/article.pl?sid=25/03/19/1458230&from=rss)
* [2025-03-21, 01:45:19](https://news.ycombinator.com/item?id=43431057) - [Scientists program stem cells to mimic first days of embryonic development](https://news.ucsc.edu/2025/03/shariati-cellstemcell-25.html)
* [2025-03-20, 21:56:00](https://soylentnews.org/article.pl?sid=25/03/19/1456215&from=rss) - [Microsoft's Quantum Breakthrough Claim Labeled 'Unreliable'](https://soylentnews.org/article.pl?sid=25/03/19/1456215&from=rss)
* [2025-03-20, 17:08:00](https://soylentnews.org/politics/article.pl?sid=25/03/19/1440251&from=rss) - [FTC Removes Posts Critical of Amazon, Microsoft, and AI Companies](https://soylentnews.org/politics/article.pl?sid=25/03/19/1440251&from=rss)
* [2025-03-20, 17:07:11](https://news.ycombinator.com/item?id=43425855) - [Euclid opens data treasure trove, offers glimpse of deep fields](https://www.esa.int/Science_Exploration/Space_Science/Euclid/Euclid_opens_data_treasure_trove_offers_glimpse_of_deep_fields)
* [2025-03-20, 15:55:51](https://news.ycombinator.com/item?id=43424970) - [EmptyEpsilon open source spaceship bridge simulator](https://daid.github.io/EmptyEpsilon/)
* [2025-03-20, 12:25:00](https://soylentnews.org/article.pl?sid=25/03/19/120255&from=rss) - [Apple Loses 2025 Antitrust Appeal in Germany](https://soylentnews.org/article.pl?sid=25/03/19/120255&from=rss)
* [2025-03-20, 10:03:17](https://news.ycombinator.com/item?id=43421324) - [How to create value objects in Ruby – the idiomatic way](https://allaboutcoding.ghinda.com/how-to-create-value-objects-in-ruby-the-idiomatic-way)
* [2025-03-20, 07:41:00](https://soylentnews.org/article.pl?sid=25/03/19/1152214&from=rss) - [Firefly Bids Farewell to its Lunar Lander After 14 Days on the Moon](https://soylentnews.org/article.pl?sid=25/03/19/1152214&from=rss)
* [2025-03-20, 02:57:00](https://soylentnews.org/article.pl?sid=25/03/19/1145216&from=rss) - [UK's Internet Watchdog Puts Storage and File-Sharing Services on Watch Over CSAM](https://soylentnews.org/article.pl?sid=25/03/19/1145216&from=rss)
* [2025-03-19, 22:14:00](https://soylentnews.org/article.pl?sid=25/03/18/1622242&from=rss) - [Tobacco's Hidden Friendly Side: How the Controversial Plant Could be Used for Good](https://soylentnews.org/article.pl?sid=25/03/18/1622242&from=rss)
* [2025-03-19, 21:15:39](https://news.ycombinator.com/item?id=43417398) - [Through a Glass Lushly: Michalina Janoszanka's Reverse Paintings (Ca. 1920s)](https://publicdomainreview.org/collection/michalina-janoszanka/)
* [2025-03-19, 20:37:58](https://news.ycombinator.com/item?id=43417038) - [300-year-old Polish beech voted Tree of the Year](https://www.bbc.co.uk/news/articles/c20dd6yk55yo)
* [2025-03-19, 17:29:00](https://soylentnews.org/article.pl?sid=25/03/18/1610234&from=rss) - [U.S. Atari Parts Store Still Open After 41 Years, Has Spent $100K+ Designing New Parts](https://soylentnews.org/article.pl?sid=25/03/18/1610234&from=rss)
* [2025-03-19, 17:17:06](https://news.ycombinator.com/item?id=43414743) - [Feral pig meat transmits rare bacteria](https://arstechnica.com/health/2025/03/florida-man-eats-feral-pig-meat-contracts-rare-biothreat-bacteria/)
* [2025-03-19, 12:46:00](https://soylentnews.org/article.pl?sid=25/03/18/168222&from=rss) - [Discord Launches SDK to Help Developers Enhance Social Experiences in Their Games](https://soylentnews.org/article.pl?sid=25/03/18/168222&from=rss)
* [2025-03-19, 11:39:01](https://news.ycombinator.com/item?id=43410666) - [A single-fibre computer enables textile networks and distributed inference](https://www.nature.com/articles/s41586-024-08568-6)
* [2025-03-19, 08:02:00](https://soylentnews.org/article.pl?sid=25/03/18/165235&from=rss) - [Iguanas Floated One-Fifth of the Way Around the World to Colonize Fiji, Genetic Analysis Indicates](https://soylentnews.org/article.pl?sid=25/03/18/165235&from=rss)
* [2025-03-19, 03:18:00](https://soylentnews.org/article.pl?sid=25/03/18/0159258&from=rss) - [Everything You Say to Your Echo Will be Sent to Amazon Starting on March 28](https://soylentnews.org/article.pl?sid=25/03/18/0159258&from=rss)
