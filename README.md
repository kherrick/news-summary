# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Advancements

* [A Code Centric Journey Into the Gleam Language](https://www.youtube.com/watch?v=LMrKEaAi4RI) - Dive into the Gleam programming language through an exploratory code-centric approach.

* [Building Trustworthy AI Agents](https://www.schneier.com/blog/archives/2025/12/building-trustworthy-ai-agents.html) - A discussion on creating reliable and ethically sound AI agents.

* [The Tor Project is switching to Rust](https://itsfoss.com/news/tor-rust-rewrite-progress/) - A shift to Rust programming marks a significant technical evolution in the Tor Project.

* [97% of Buildings On Earth 3D-Mapped](https://news.slashdot.org/story/25/12/11/2333243/97-of-buildings-on-earth-3d-mapped?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Efforts to 3D map nearly all global structures achieve remarkable progress.

## Artificial Intelligence

* [Washington Post's AI-Generated Podcasts Rife With Errors, Fictional Quotes](https://news.slashdot.org/story/25/12/12/1526213/washington-posts-ai-generated-podcasts-rife-with-errors-fictional-quotes?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Issues like factual inaccuracies and fake quotes emerge in AI-driven podcast content.

* [AI Favors Texts Written by Other AIs, Even When They're Worse Than Human Ones](https://soylentnews.org/article.pl?sid=25/12/10/1242208&from=rss) - A study revealing AI's intrinsic preference for text by other AIs over human-generated content.

## Open Source and Software

* [Fedora: Open-source repository for long-term digital preservation](https://fedorarepository.org/) - Introducing Fedora as a preservation tool for critical data archives.

* [Freeing a Xiaomi Humidifier from the Cloud](https://0l.de/blog/2025/11/xiaomi-humidifier/) - Modify devices like Xiaomi humidifiers to function without cloud dependency.

* [A Lisp Interpreter Implemented in Conway’s Game of Life](https://woodrush.github.io/blog/posts/2022-01-12-lisp-in-life.html) - Lisp programming embedded elegantly within Conway's Game of Life simulation.

* [Debian's APT Will Require a Rust Compiler](https://soylentnews.org/article.pl?sid=25/12/07/1514234&from=rss) - Significant changes bring Rust as a core requirement for Debian’s package manager.

## Cryptocurrency and Economics

* [Hollywood Director Found Guilty of Blowing $11 Million Netflix Budget on Crypto and Ferraris](https://yro.slashdot.org/story/25/12/12/1428243/hollywood-director-found-guilty-of-blowing-11-million-netflix-budget-on-crypto-and-ferraris?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Misuse of a hefty Netflix budget for personal cryptocurrency and luxury items.

* [SEC Gives DTCC OK to Tokenize Stocks In Move To Blockchain](https://yro.slashdot.org/story/25/12/12/0354219/sec-gives-dtcc-ok-to-tokenize-stocks-in-move-to-blockchain?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Regulatory approval marks a significant blockchain integration into stock trading.

* [TerraUSD Creator Do Kwon Sentenced To 15 Years Over $40 Billion Crypto Collapse](https://yro.slashdot.org/story/25/12/11/2239200/terrausd-creator-do-kwon-sentenced-to-15-years-over-40-billion-crypto-collapse?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Accountability enforced for crypto collapse resulting in massive financial damage.

## Science and Health

* [Cadmium Zinc Telluride: The Wonder Material Powering a Medical 'Revolution'](https://science.slashdot.org/story/25/12/12/0346227/cadmium-zinc-telluride-the-wonder-material-powering-a-medical-revolution?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Cadmium Zinc Telluride advancements hold transformative potential for healthcare diagnostics.

* [This Cellular Trick Helps Cancer Spread, but Could Also Stop It](https://soylentnews.org/article.pl?sid=25/12/08/0456233&from=rss) - Cellular mechanisms offer dual pathways for both aiding and preventing cancer.

* [A Therapeutic HPV Vaccine Shrank Cervical Tumors in Mice](https://soylentnews.org/article.pl?sid=25/12/08/1614203&from=rss) - Promising preclinical results for cutting-edge HPV treatments involving vaccines.

## Notable Innovations

* [Smartphone without a battery (2022)](https://yaky.dev/2022-09-06-smartphone-without-battery/) - A creative approach to powering mobile devices devoid of traditional batteries.

* [Chattanooga's Municipal Fiber Network Has Delivered $5.3 Billion in Community Benefits](https://soylentnews.org/article.pl?sid=25/12/10/027248&from=rss) - Demonstrating economic uplift through municipal-level technological investment.

* [Recreating the Lost SDK for a 42-Year-Old Operating System: VisiCorp Visi on](https://soylentnews.org/article.pl?sid=25/12/08/0147224&from=rss) - Reviving classic software development kits for historical and educational value.

* [Samsung's First Tri-Fold Phone is Here: Everything You Need to Know](https://soylentnews.org/article.pl?sid=25/12/08/0455213&from=rss) - Introduction of a unique smartphone folding mechanism catered for utility and design.

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

* [2025-12-12, 16:00:36](https://lobste.rs/s/fafy2d/code_centric_journey_into_gleam_language) - [A Code Centric Journey Into the Gleam Language](https://www.youtube.com/watch?v=LMrKEaAi4RI)
* [2025-12-12, 15:44:31](https://lobste.rs/s/ouph7k/i_couldn_t_find_logging_library_worked_for) - [I couldn&apos;t find a logging library that worked for my library, so I made one](https://hackers.pub/@hongminhee/2025/logtape-fedify-case-study)
* [2025-12-12, 15:26:00](https://news.slashdot.org/story/25/12/12/1526213/washington-posts-ai-generated-podcasts-rife-with-errors-fictional-quotes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Washington Post&apos;s AI-Generated Podcasts Rife With Errors, Fictional Quotes](https://news.slashdot.org/story/25/12/12/1526213/washington-posts-ai-generated-podcasts-rife-with-errors-fictional-quotes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-12, 15:08:46](https://lobste.rs/s/wqoq6t/building_trustworthy_ai_agents) - [Building Trustworthy AI Agents](https://www.schneier.com/blog/archives/2025/12/building-trustworthy-ai-agents.html)
* [2025-12-12, 14:54:00](https://soylentnews.org/article.pl?sid=25/12/11/0150219&amp;from=rss) - [Ubuntu to Offer AMD ROCm Packages for AI Processing](https://soylentnews.org/article.pl?sid=25/12/11/0150219&amp;from=rss)
* [2025-12-12, 14:40:00](https://yro.slashdot.org/story/25/12/12/1428243/hollywood-director-found-guilty-of-blowing-11-million-netflix-budget-on-crypto-and-ferraris?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hollywood Director Found Guilty of Blowing $11 Million Netflix Budget on Crypto and Ferraris](https://yro.slashdot.org/story/25/12/12/1428243/hollywood-director-found-guilty-of-blowing-11-million-netflix-budget-on-crypto-and-ferraris?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-12, 14:21:17](https://lobste.rs/s/q5jsvl/how_run_ministral_3_with_amd_gpu_on_windows) - [How to run Ministral 3 with an AMD GPU on Windows](https://www.50-nuances-octets.fr/en/posts/ministral-3-gpu-amd-windows/)
* [2025-12-12, 14:20:20](https://news.ycombinator.com/item?id=46244378) - [BpfJailer: eBPF Mandatory Access Control [pdf]](https://lpc.events/event/19/contributions/2159/attachments/1833/3929/BpfJailer%20LPC%202025.pdf)
* [2025-12-12, 14:01:00](https://tech.slashdot.org/story/25/12/12/141238/major-automakers-say-china-poses-clear-and-present-threat-to-us-auto-industry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Major Automakers Say China Poses &apos;Clear and Present Threat&apos; To US Auto Industry](https://tech.slashdot.org/story/25/12/12/141238/major-automakers-say-china-poses-clear-and-present-threat-to-us-auto-industry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-12, 13:37:05](https://lobste.rs/s/ytelgx/rethinking_sudo_with_object) - [Rethinking sudo with object capabilities](https://ariadne.space/2025/12/12/rethinking-sudo-with-object-capabilities.html)
* [2025-12-12, 13:25:19](https://news.ycombinator.com/item?id=46243904) - [SQLite JSON at Full Index Speed Using Generated Columns](https://www.dbpro.app/blog/sqlite-json-virtual-columns-indexing)
* [2025-12-12, 13:23:31](https://news.ycombinator.com/item?id=46243883) - [Fedora: Open-source repository for long-term digital preservation](https://fedorarepository.org/)
* [2025-12-12, 13:00:00](https://yro.slashdot.org/story/25/12/12/041226/reddit-launches-high-court-challenge-to-australias-under-16s-social-media-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Reddit Launches High Court Challenge To Australia&apos;s Under-16s Social Media Ban](https://yro.slashdot.org/story/25/12/12/041226/reddit-launches-high-court-challenge-to-australias-under-16s-social-media-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-12, 12:35:57](https://news.ycombinator.com/item?id=46243543) - [The Tor Project is switching to Rust](https://itsfoss.com/news/tor-rust-rewrite-progress/)
* [2025-12-12, 10:50:22](https://news.ycombinator.com/item?id=46242871) - [Koralm Railway](https://infrastruktur.oebb.at/en/projects-for-austria/railway-lines/southern-line-vienna-villach/koralm-railway)
* [2025-12-12, 10:46:40](https://lobste.rs/s/zi1xf6/building_smaller_docker_images_faster) - [Building smaller Docker images faster](https://sgt.hootr.club/blog/docker-protips/)
* [2025-12-12, 10:37:51](https://news.ycombinator.com/item?id=46242795) - [Training LLMs for Honesty via Confessions](https://arxiv.org/abs/2512.08093)
* [2025-12-12, 10:07:00](https://soylentnews.org/article.pl?sid=25/12/10/2258243&amp;from=rss) - [Porsche Panic in Russia as Pricey Status Symbols Forget How to Car](https://soylentnews.org/article.pl?sid=25/12/10/2258243&amp;from=rss)
* [2025-12-12, 10:00:00](https://yro.slashdot.org/story/25/12/12/0354219/sec-gives-dtcc-ok-to-tokenize-stocks-in-move-to-blockchain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SEC Gives DTCC OK to Tokenize Stocks In Move To Blockchain](https://yro.slashdot.org/story/25/12/12/0354219/sec-gives-dtcc-ok-to-tokenize-stocks-in-move-to-blockchain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-12, 09:53:15](https://lobste.rs/s/192yxw/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/192yxw/what_are_you_doing_this_weekend)
* [2025-12-12, 08:54:36](https://lobste.rs/s/9vbm52/typeslayer_typescript_types) - [Typeslayer - a TypeScript types performance tool](https://youtu.be/IP6EZXzXBzY)
* [2025-12-12, 07:51:04](https://news.ycombinator.com/item?id=46241849) - [Guarding My Git Forge Against AI Scrapers](https://vulpinecitrus.info/blog/guarding-git-forge-ai-scrapers/)
* [2025-12-12, 07:36:17](https://news.ycombinator.com/item?id=46241767) - [Smartphone without a battery (2022)](https://yaky.dev/2022-09-06-smartphone-without-battery/)
* [2025-12-12, 07:35:49](https://news.ycombinator.com/item?id=46241763) - [The tiniest yet real telescope I&apos;ve built](https://lucassifoni.info/blog/miniscope-tiny-telescope/)
* [2025-12-12, 07:00:00](https://science.slashdot.org/story/25/12/12/0346227/cadmium-zinc-telluride-the-wonder-material-powering-a-medical-revolution?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cadmium Zinc Telluride: The Wonder Material Powering a Medical &apos;Revolution&apos;](https://science.slashdot.org/story/25/12/12/0346227/cadmium-zinc-telluride-the-wonder-material-powering-a-medical-revolution?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-12, 06:15:48](https://lobste.rs/s/cxhdjd/freeing_xiaomi_humidifier_from_cloud) - [Freeing a Xiaomi Humidifier from the Cloud](https://0l.de/blog/2025/11/xiaomi-humidifier/)
* [2025-12-12, 05:56:21](https://lobste.rs/s/g1o2t8/guarding_my_git_forge_against_ai_scrapers) - [Guarding My Git Forge Against AI Scrapers](https://vulpinecitrus.info/blog/guarding-git-forge-ai-scrapers/)
* [2025-12-12, 05:22:00](https://soylentnews.org/article.pl?sid=25/12/10/2256226&amp;from=rss) - [Pebble Index 01 Arrives as a Private Open Source Voice Capture Ring](https://soylentnews.org/article.pl?sid=25/12/10/2256226&amp;from=rss)
* [2025-12-12, 03:35:25](https://lobste.rs/s/lzmklx/being_sysadmin_is_hard) - [Being a SysAdmin is hard](https://about.tree.ht/blog/treehut-outages-december-2025)
* [2025-12-12, 03:30:00](https://yro.slashdot.org/story/25/12/11/2239200/terrausd-creator-do-kwon-sentenced-to-15-years-over-40-billion-crypto-collapse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [TerraUSD Creator Do Kwon Sentenced To 15 Years Over $40 Billion Crypto Collapse](https://yro.slashdot.org/story/25/12/11/2239200/terrausd-creator-do-kwon-sentenced-to-15-years-over-40-billion-crypto-collapse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-12, 03:11:31](https://lobste.rs/s/gxycog/lisp_interpreter_implemented_conway_s) - [A Lisp Interpreter Implemented in Conway’s Game of Life](https://woodrush.github.io/blog/posts/2022-01-12-lisp-in-life.html)
* [2025-12-12, 02:02:00](https://news.slashdot.org/story/25/12/11/2333243/97-of-buildings-on-earth-3d-mapped?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [97% of Buildings On Earth 3D-Mapped](https://news.slashdot.org/story/25/12/11/2333243/97-of-buildings-on-earth-3d-mapped?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-12, 01:41:22](https://lobste.rs/s/zyvhp9/pop_goes_population_count) - [Pop goes the...population count?](https://xania.org/202512/11-pop-goes-the-weasel-er-count)
* [2025-12-12, 01:25:00](https://yro.slashdot.org/story/25/12/11/2328238/over-10000-docker-hub-images-found-leaking-credentials-auth-keys?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Over 10,000 Docker Hub Images Found Leaking Credentials, Auth Keys](https://yro.slashdot.org/story/25/12/11/2328238/over-10000-docker-hub-images-found-leaking-credentials-auth-keys?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-12, 01:20:05](https://news.ycombinator.com/item?id=46239752) - [Google de-indexed Bear Blog and I don&apos;t know why](https://journal.james-zhan.com/google-de-indexed-my-entire-bear-blog-and-i-dont-know-why/)
* [2025-12-12, 00:59:46](https://news.ycombinator.com/item?id=46239629) - [CRISPR fungus: Protein-packed, sustainable, and tastes like meat](https://www.isaaa.org/kc/cropbiotechupdate/article/default.asp?ID=21607)
* [2025-12-12, 00:45:00](https://slashdot.org/story/25/12/11/2324224/vmware-kills-vsphere-foundation-in-parts-of-emea?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [VMware Kills vSphere Foundation In Parts of EMEA](https://slashdot.org/story/25/12/11/2324224/vmware-kills-vsphere-foundation-in-parts-of-emea?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-12, 00:39:00](https://soylentnews.org/article.pl?sid=25/12/10/2252241&amp;from=rss) - [Russia Says It Might Build its Own Linux Community After Removal of Several Kernel Maintainers](https://soylentnews.org/article.pl?sid=25/12/10/2252241&amp;from=rss)
* [2025-12-12, 00:27:22](https://lobste.rs/s/vvnsdb/notes_on_gamma) - [Notes on Gamma](https://poniesandlight.co.uk/reflect/gamma/)
* [2025-12-12, 00:04:29](https://news.ycombinator.com/item?id=46239177) - [Nokia N900 Necromancy](https://yaky.dev/2025-12-11-nokia-n900-necromancy/)
* [2025-12-12, 00:02:00](https://yro.slashdot.org/story/25/12/11/2352215/trump-signs-executive-order-for-single-national-ai-regulation-framework-limiting-power-of-states?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Signs Executive Order For Single National AI Regulation Framework, Limiting Power of States](https://yro.slashdot.org/story/25/12/11/2352215/trump-signs-executive-order-for-single-national-ai-regulation-framework-limiting-power-of-states?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-11, 23:20:00](https://yro.slashdot.org/story/25/12/11/222243/uc-berkeley-professor-uses-secret-camera-to-catch-phd-candidate-sabotaging-rival?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UC Berkeley Professor Uses Secret Camera To Catch PhD Candidate Sabotaging Rival](https://yro.slashdot.org/story/25/12/11/222243/uc-berkeley-professor-uses-secret-camera-to-catch-phd-candidate-sabotaging-rival?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-11, 22:40:00](https://tech.slashdot.org/story/25/12/11/2149239/rivian-goes-big-on-autonomy-with-custom-silicon-lidar-and-a-hint-at-robotaxis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rivian Goes Big On Autonomy, With Custom Silicon, Lidar, and a Hint At Robotaxis](https://tech.slashdot.org/story/25/12/11/2149239/rivian-goes-big-on-autonomy-with-custom-silicon-lidar-and-a-hint-at-robotaxis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-11, 22:23:20](https://lobste.rs/s/lchmal/oils_0_37_0_alpine_linux_ysh_mycpp) - [Oils 0.37.0 - Alpine Linux, YSH, and mycpp](https://oils.pub/blog/2025/12/release-0.37.0.html)
* [2025-12-11, 22:00:00](https://tech.slashdot.org/story/25/12/11/2141219/disney-says-google-ai-infringes-copyright-on-a-massive-scale?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Disney Says Google AI Infringes Copyright &apos;On a Massive Scale&apos;](https://tech.slashdot.org/story/25/12/11/2141219/disney-says-google-ai-infringes-copyright-on-a-massive-scale?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-11, 21:24:34](https://news.ycombinator.com/item?id=46237358) - [Show HN: Autofix Bot – Hybrid static analysis and AI code review agent](https://news.ycombinator.com/item?id=46237358)
* [2025-12-11, 21:22:00](https://tech.slashdot.org/story/25/12/11/2022257/google-is-building-an-experimental-new-browser-and-a-new-kind-of-web-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google is Building an Experimental New Browser and a New Kind of Web App](https://tech.slashdot.org/story/25/12/11/2022257/google-is-building-an-experimental-new-browser-and-a-new-kind-of-web-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-11, 20:48:49](https://lobste.rs/s/v5umfb/bidicalc_bidirectional_calculator) - [bidicalc: a bidirectional calculator](https://victorpoughon.github.io/bidicalc/)
* [2025-12-11, 20:46:46](https://news.ycombinator.com/item?id=46236924) - [Denial of service and source code exposure in React Server Components](https://react.dev/blog/2025/12/11/denial-of-service-and-source-code-exposure-in-react-server-components)
* [2025-12-11, 19:56:00](https://soylentnews.org/article.pl?sid=25/12/10/2248258&amp;from=rss) - [ER Doctors Are Sounding the Alarm on a Fast-Growing Cannabis Illness](https://soylentnews.org/article.pl?sid=25/12/10/2248258&amp;from=rss)
* [2025-12-11, 19:48:06](https://lobste.rs/s/u7yz80/installing_every_nixos_package) - [Installing Every NixOS Package](https://unnamed.website/posts/installing-every-nixos-package/)
* [2025-12-11, 19:37:35](https://lobste.rs/s/jyl2j6/pop_os_24_04_lts_released_letter_from_our) - [Pop!_OS 24.04 LTS Released: A Letter From Our Founder](https://blog.system76.com/post/pop-os-letter-from-our-founder)
* [2025-12-11, 19:25:14](https://news.ycombinator.com/item?id=46235959) - [An SVG is all you need](https://jon.recoil.org/blog/2025/12/an-svg-is-all-you-need.html)
* [2025-12-11, 18:34:59](https://lobste.rs/s/djfvzj/helldivers_2_85_reduction_install_size) - [Helldivers 2 - 85% reduction in install size with minimal performance impact](https://store.steampowered.com/news/app/553850/view/491583942944621371)
* [2025-12-11, 18:17:19](https://news.ycombinator.com/item?id=46234920) - [Rivian Unveils Custom Silicon, R2 Lidar Roadmap, and Universal Hands Free](https://riviantrackr.com/news/rivian-unveils-custom-silicon-r2-lidar-roadmap-universal-hands-free-and-its-next-gen-autonomy-platform/)
* [2025-12-11, 18:06:42](https://news.ycombinator.com/item?id=46234806) - [Programmers and software developers lost the plot on naming their tools](https://larr.net/p/namings.html)
* [2025-12-11, 18:05:55](https://lobste.rs/s/qhairc/programmers_software_developers_lost) - [Programmers and software developers lost the plot on naming their tools](https://larr.net/p/namings.html)
* [2025-12-11, 18:04:47](https://news.ycombinator.com/item?id=46234788) - [GPT-5.2](https://openai.com/index/introducing-gpt-5-2/)
* [2025-12-11, 17:59:30](https://lobste.rs/s/p20st3/litestream_vfs) - [Litestream VFS](https://fly.io/blog/litestream-vfs/)
* [2025-12-11, 17:59:10](https://news.ycombinator.com/item?id=46234710) - [Litestream VFS](https://fly.io/blog/litestream-vfs/)
* [2025-12-11, 17:28:05](https://lobste.rs/s/ueglwk/cosmic_desktop_is_fantastic_first_draft) - [Cosmic Desktop is a fantastic first draft](https://www.youtube.com/watch?v=ob-Y77kuVwM)
* [2025-12-11, 16:33:14](https://lobste.rs/s/3ejc1u/announcing_rust_1_92_0) - [Announcing Rust 1.92.0](https://blog.rust-lang.org/2025/12/11/Rust-1.92.0)
* [2025-12-11, 15:31:09](https://lobste.rs/s/jecsli/google_s_code_review_practices) - [Google’s code review practices](https://google.github.io/eng-practices/)
* [2025-12-11, 15:07:00](https://soylentnews.org/article.pl?sid=25/12/10/1242208&amp;from=rss) - [AI Favors Texts Written by Other AIs, Even When They&apos;re Worse Than Human Ones](https://soylentnews.org/article.pl?sid=25/12/10/1242208&amp;from=rss)
* [2025-12-11, 14:45:49](https://news.ycombinator.com/item?id=46232003) - [From text to token: How tokenization pipelines work](https://www.paradedb.com/blog/when-tokenization-becomes-token)
* [2025-12-11, 13:45:08](https://news.ycombinator.com/item?id=46231274) - [Craft software that makes people feel something](https://rapha.land/craft-software-that-makes-people-feel-something/)
* [2025-12-11, 12:48:49](https://lobste.rs/s/x49jb2/let_s_embed_go_program_into_linux_kernel) - [Let&apos;s Embed a Go Program into the Linux Kernel](https://sigma-star.at/blog/2023/07/embedded-go-prog/)
* [2025-12-11, 10:25:00](https://soylentnews.org/article.pl?sid=25/12/10/0213247&amp;from=rss) - [Proton Launches Encrypted Sheets as a Privacy-First Alternative to Google, Microsoft Excel](https://soylentnews.org/article.pl?sid=25/12/10/0213247&amp;from=rss)
* [2025-12-11, 09:46:56](https://news.ycombinator.com/item?id=46229437) - [Show HN: Tripwire: A new anti evil maid defense](https://github.com/fr33-sh/Tripwire)
* [2025-12-11, 05:48:00](https://soylentnews.org/article.pl?sid=25/12/10/0211215&amp;from=rss) - [This German State Decides to Save €15 Million Each Year By Kicking Out Microsoft for Open Source](https://soylentnews.org/article.pl?sid=25/12/10/0211215&amp;from=rss)
* [2025-12-11, 00:52:00](https://soylentnews.org/article.pl?sid=25/12/10/027248&amp;from=rss) - [Chattanooga&apos;s Municipal Fiber Network Has Delivered $5.3 Billion in Community Benefits](https://soylentnews.org/article.pl?sid=25/12/10/027248&amp;from=rss)
* [2025-12-10, 20:11:00](https://soylentnews.org/article.pl?sid=25/12/10/023246&amp;from=rss) - [Planned Satellite Constellations May Swamp Future Orbiting Telescopes](https://soylentnews.org/article.pl?sid=25/12/10/023246&amp;from=rss)
* [2025-12-10, 17:23:53](https://news.ycombinator.com/item?id=46220540) - [Auto-grading decade-old Hacker News discussions with hindsight](https://karpathy.bearblog.dev/auto-grade-hn/)
* [2025-12-10, 15:25:00](https://soylentnews.org/article.pl?sid=25/12/08/1621249&amp;from=rss) - [Germany Bets Billions on Nuclear Fusion for Energy Future](https://soylentnews.org/article.pl?sid=25/12/08/1621249&amp;from=rss)
* [2025-12-10, 10:43:00](https://soylentnews.org/article.pl?sid=25/12/08/1614203&amp;from=rss) - [A Therapeutic HPV Vaccine Shrank Cervical Tumors in Mice](https://soylentnews.org/article.pl?sid=25/12/08/1614203&amp;from=rss)
* [2025-12-10, 05:52:00](https://soylentnews.org/article.pl?sid=25/12/08/1611257&amp;from=rss) - [Zig Quits GitHub, Says Microsoft&apos;s AI Obsession Has Ruined the Service](https://soylentnews.org/article.pl?sid=25/12/08/1611257&amp;from=rss)
* [2025-12-10, 01:09:00](https://soylentnews.org/article.pl?sid=25/12/08/0456233&amp;from=rss) - [This Cellular Trick Helps Cancer Spread, but Could Also Stop It](https://soylentnews.org/article.pl?sid=25/12/08/0456233&amp;from=rss)
* [2025-12-09, 20:23:00](https://soylentnews.org/article.pl?sid=25/12/08/0455213&amp;from=rss) - [Samsung&apos;s First Tri-Fold Phone is Here: Everything You Need to Know](https://soylentnews.org/article.pl?sid=25/12/08/0455213&amp;from=rss)
* [2025-12-09, 15:39:00](https://soylentnews.org/article.pl?sid=25/12/08/0152232&amp;from=rss) - [Complex Life Started Nearly a Billion Years Earlier Than We Thought](https://soylentnews.org/article.pl?sid=25/12/08/0152232&amp;from=rss)
* [2025-12-09, 10:51:00](https://soylentnews.org/article.pl?sid=25/12/08/0146206&amp;from=rss) - [US Wants Laws to Force App Store Age Checks, Despite Apple&apos;s Existing Protections](https://soylentnews.org/article.pl?sid=25/12/08/0146206&amp;from=rss)
* [2025-12-09, 06:03:00](https://soylentnews.org/article.pl?sid=25/12/08/0143259&amp;from=rss) - [Common Desktop Environment \&quot;CDE\&quot; 2.5.3 Released After Two Years](https://soylentnews.org/article.pl?sid=25/12/08/0143259&amp;from=rss)
* [2025-12-09, 01:21:00](https://soylentnews.org/article.pl?sid=25/12/07/1532244&amp;from=rss) - [Improved Truncated Wigner Approximation Makes Quantum Calcs on Classical Computers More Accessible](https://soylentnews.org/article.pl?sid=25/12/07/1532244&amp;from=rss)
* [2025-12-08, 21:33:09](https://news.ycombinator.com/item?id=46197930) - [The highest quality codebase](https://gricha.dev/blog/the-highest-quality-codebase)
* [2025-12-08, 20:34:00](https://soylentnews.org/article.pl?sid=25/12/07/1527246&amp;from=rss) - [San Francisco Sues Nation&apos;s Top Food Manufacturers Over Ultraprocessed Foods](https://soylentnews.org/article.pl?sid=25/12/07/1527246&amp;from=rss)
* [2025-12-08, 15:45:00](https://soylentnews.org/article.pl?sid=25/12/07/1521257&amp;from=rss) - [Soaring DDR5 Prices Lead to Falling Motherboard Sales and Calls for Gamers to Boycott RAM](https://soylentnews.org/article.pl?sid=25/12/07/1521257&amp;from=rss)
* [2025-12-08, 11:04:00](https://soylentnews.org/article.pl?sid=25/12/07/1514234&amp;from=rss) - [Debian&apos;s APT Will Require a Rust Compiler](https://soylentnews.org/article.pl?sid=25/12/07/1514234&amp;from=rss)
* [2025-12-08, 08:52:03](https://news.ycombinator.com/item?id=46189962) - [Use Python for Scripting](https://hypirion.com/musings/use-python-for-scripting)
* [2025-12-08, 06:24:00](https://soylentnews.org/article.pl?sid=25/12/07/1510243&amp;from=rss) - [New Jolla Phone Now Available for Pre-Order as an Independent Linux Phone](https://soylentnews.org/article.pl?sid=25/12/07/1510243&amp;from=rss)
* [2025-12-08, 02:06:00](https://soylentnews.org/article.pl?sid=25/12/08/0147224&amp;from=rss) - [Recreating the Lost SDK for a 42-Year-Old Operating System: VisiCorp Visi on](https://soylentnews.org/article.pl?sid=25/12/08/0147224&amp;from=rss)
* [2025-12-08, 01:38:00](https://soylentnews.org/article.pl?sid=25/12/06/1419220&amp;from=rss) - [Waymo Drives Straight Into Active Police Scene, Ignores Chaos](https://soylentnews.org/article.pl?sid=25/12/06/1419220&amp;from=rss)
* [2025-12-08, 00:37:42](https://news.ycombinator.com/item?id=46186990) - [What folk can do](https://folk.computer/guides/what-folk-can-do)
