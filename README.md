# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Security Developments

* [GitHub suddenly rejected my SSH key (the fix was a .pub file?!)](https://thorsell.io/2026/07/21/github-ssh-keys.html) - A user details an unexpected issue with GitHub rejecting their SSH key and how they resolved it with a simple `.pub` file, offering insight into SSH key handling.

* [432 Linux kernel CVEs published in the last 24 hours](https://lore.kernel.org/linux-cve-announce/) - Concerns over the sheer volume of CVEs for the Linux kernel flood in, raising questions about security practices.

* [Hackers Are Exploiting Recently Patched WordPress Bugs, Putting Millions of Websites at Risk](https://tech.slashdot.org/story/26/07/20/234246/hackers-are-exploiting-recently-patched-wordpress-bugs-putting-millions-of-websites-at-risk?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Exploitation of WordPress vulnerabilities causes risk for website owners, emphasizing the importance of timely patching.

* [NTP Server That Traveled Back In Time Caused Massive Aussie Mobile Outage](https://soylentnews.org/article.pl?sid=26/07/17/1611241&from=rss) - A bizarre incident involving an NTP server disrupts mobile services in Australia, highlighting the fragility of network systems.

## AI Progress and Applications

* [Running Doom on Our Custom CPU and Going Viral](https://www.armaangomes.com/blogs/doom/) - A fascinating project that involves running the iconic Doom game on a custom-made CPU.

* [Qwen-Image-3.0: Rich Content, Authentic Details, Deep Knowledge](https://qwen.ai/blog?id=qwen-image-3.0) - An upgraded AI visual technology promising enriched content with authentic detail and depth.

* [China’s open-weights AI strategy is winning](https://werd.io/american-ai-is-locked-down-and-proprietary-its-losing/) - A discussion on China's strategy in making AI technology more accessible and its global implications.

* [Rust Will Help Linux Succeed and Makes Coding Fun, Says Greg Kroah-Hartman](https://developers.slashdot.org/story/26/07/20/0417244/rust-will-help-linux-succeed-and-makes-coding-fun-says-greg-kroah-hartman?utm_source=rss1.0mainlinkanon&utm_medium=feed) - An open critique about how adopting Rust could significantly elevate the Linux platform's future.

## Scientific and Environmental Discoveries

* [Eating Chili Peppers May Raise the Risk of One Deadly Cancer](https://soylentnews.org/article.pl?sid=26/07/20/0431234&from=rss) - A surprising health finding linking chili pepper consumption with cancer risk.

* [The Galaxy's Coldest “Stars” Might Actually be Alien Megastructures](https://soylentnews.org/article.pl?sid=26/07/20/0318228&from=rss) - Scientists speculate whether unexplained cold spots in space could be engineered alien megastructures.

* [Great Ape Laughter Reveals a Hidden Origin of Human Speech](https://soylentnews.org/article.pl?sid=26/07/20/0338215&from=rss) - A study that links ape laughter to the evolutionary roots of human speech.

* [Deep-Sea Life Has a Secret Food Source Scientists Never Expected](https://soylentnews.org/article.pl?sid=26/07/21/0550247&from=rss) - Discoveries reveal unexpected food sources in deep-sea life ecosystems.

## Invention and Creativity

* [A Koi Pond Mosaic Made from 10 Pounds of 3D Printer Waste](https://www.instructables.com/A-Koi-Pond-Mosaic-Made-From-10-Pounds-of-3D-Printe/) - A creative and environmentally friendly use of 3D printer waste turned into a beautiful koi pond mosaic.

* [Immersive Gaussian Splat tour of grace cathedral, San Francisco](https://vincentwoo.com/3d/grace_cathedral/) - A visually stunning 3D tour leveraging advanced Gaussian splatting techniques for immersive experiences.

* [Arduino Launches Plug-and-Play Modules for Long-Range Sensor Projects](https://www.allaboutcircuits.com/news/arduino-launches-plug-and-play-modules-for-long-range-sensor-projects/) - Arduino introduces modular solutions aimed at more efficient long-range sensor systems.

## Cultural and Historical Revelations

* [Archaeologists Found Homer’s Iliad Inside a 1,600-Year-Old Egyptian Mummy](https://soylentnews.org/article.pl?sid=26/07/17/1518215&from=rss) - Researchers uncover a manuscript of Homer's Iliad in an Egyptian mummy's wrappings, merging literature and archaeology.

* [VTubing: How a Japanese Phenomenon Is Going Worldwide](https://www.tokyodev.com/articles/vtubing-how-a-japanese-phenomenon-is-going-worldwide) - An exploration of VTubing's evolution from Japan to a massive global trend.

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

* [2026-07-21, 12:31:15](https://lobste.rs/s/cxz7vd/git_end_options) - [git --end-of-options](https://nesbitt.io/2026/07/21/end-of-options.html)
* [2026-07-21, 12:16:08](https://lobste.rs/s/s4gljc/thoughts_on_integers_2023) - [Thoughts On Integers (2023)](https://blog.xoria.org/integers/)
* [2026-07-21, 12:03:14](https://news.ycombinator.com/item?id=48991139) - [New US homeownership measure puts people first](https://www.minneapolisfed.org/article/2026/new-homeownership-measure-puts-people-first)
* [2026-07-21, 11:45:00](https://soylentnews.org/article.pl?sid=26/07/21/0550247&amp;from=rss) - [Deep-Sea Life Has a Secret Food Source Scientists Never Expected](https://soylentnews.org/article.pl?sid=26/07/21/0550247&amp;from=rss)
* [2026-07-21, 11:00:00](https://mobile.slashdot.org/story/26/07/21/0541215/us-police-now-armed-with-israeli-spy-vans-simulating-mobile-phone-towers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Police Now Armed With Israeli Spy Vans Simulating Mobile Phone Towers](https://mobile.slashdot.org/story/26/07/21/0541215/us-police-now-armed-with-israeli-spy-vans-simulating-mobile-phone-towers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-21, 10:11:59](https://lobste.rs/s/twqtlo/github_suddenly_rejected_my_ssh_key_fix) - [GitHub suddenly rejected my SSH key (the fix was a .pub file?!)](https://thorsell.io/2026/07/21/github-ssh-keys.html)
* [2026-07-21, 10:03:51](https://lobste.rs/s/ivtjcv/escape_intellij_scala_kotlin_lsps_on) - [Escape IntelliJ: Scala and Kotlin LSPs on Emacs Eglot](https://jointhefreeworld.org/blog/articles/emacs/emacs-eglot-scala-kotlin/index.html)
* [2026-07-21, 08:44:23](https://news.ycombinator.com/item?id=48989701) - [Qwen-Image-3.0: Rich Content, Authentic Details, Deep Knowledge](https://qwen.ai/blog?id=qwen-image-3.0)
* [2026-07-21, 07:59:00](https://soylentnews.org/article.pl?sid=26/07/20/0431234&amp;from=rss) - [Eating Chili Peppers May Raise the Risk of One Deadly Cancer](https://soylentnews.org/article.pl?sid=26/07/20/0431234&amp;from=rss)
* [2026-07-21, 07:20:43](https://lobste.rs/s/qlg8xj/kde_for_enterprise_needs_strong_pim) - [KDE for Enterprise Needs a Strong PIM Infrastructure](https://ervin.ipsquad.net/blog/2026/07/21/kde-for-entreprise-needs-a-strong-pim-infrastructure/)
* [2026-07-21, 07:00:00](https://developers.slashdot.org/story/26/07/21/0053206/drinking-5-cups-of-coffee-a-day-could-reduce-heart-risk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Drinking 5 Cups of Coffee a Day Could Reduce Heart Risk](https://developers.slashdot.org/story/26/07/21/0053206/drinking-5-cups-of-coffee-a-day-could-reduce-heart-risk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-21, 06:50:14](https://lobste.rs/s/wkm8tk/why_l_new_runtime_for_k_q) - [Why l (new runtime for k and q)](https://lv1.sh/blog/why-l/)
* [2026-07-21, 06:26:16](https://lobste.rs/s/daa59s/30_70_prs_day_how_we_managed_not_wreck_our) - [30 to 70 PRs a Day: How We Managed to Not Wreck Our Systems](https://www.honeycomb.io/blog/30-70-prs-day-how-we-managed-not-wreck-systems)
* [2026-07-21, 04:48:32](https://news.ycombinator.com/item?id=48988158) - [Show HN: Ex Situ – Open-source spatial index of displaced cultural artifacts](https://exsitu.app/map)
* [2026-07-21, 03:54:16](https://news.ycombinator.com/item?id=48987846) - [Running Doom on Our Custom CPU and Going Viral](https://www.armaangomes.com/blogs/doom/)
* [2026-07-21, 03:52:05](https://news.ycombinator.com/item?id=48987831) - [A Koi Pond Mosaic Made from 10 Pounds of 3D Printer Waste](https://www.instructables.com/A-Koi-Pond-Mosaic-Made-From-10-Pounds-of-3D-Printe/)
* [2026-07-21, 03:50:53](https://news.ycombinator.com/item?id=48987822) - [Incremental – A library for incremental computations](https://github.com/janestreet/incremental)
* [2026-07-21, 03:50:28](https://lobste.rs/s/t2jxyu/432_linux_kernel_cves_published_last_24) - [432 Linux kernel CVEs published in the last 24 hours](https://lore.kernel.org/linux-cve-announce/)
* [2026-07-21, 03:42:47](https://news.ycombinator.com/item?id=48987775) - [VTubing: How a Japanese Phenomenon Is Going Worldwide](https://www.tokyodev.com/articles/vtubing-how-a-japanese-phenomenon-is-going-worldwide)
* [2026-07-21, 03:30:00](https://tech.slashdot.org/story/26/07/20/234246/hackers-are-exploiting-recently-patched-wordpress-bugs-putting-millions-of-websites-at-risk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hackers Are Exploiting Recently Patched WordPress Bugs, Putting Millions of Websites at Risk](https://tech.slashdot.org/story/26/07/20/234246/hackers-are-exploiting-recently-patched-wordpress-bugs-putting-millions-of-websites-at-risk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-21, 03:15:00](https://soylentnews.org/article.pl?sid=26/07/20/0413210&amp;from=rss) - [US Sanctions First VPN In Crackdown On Ransomware Criminals](https://soylentnews.org/article.pl?sid=26/07/20/0413210&amp;from=rss)
* [2026-07-21, 03:02:24](https://lobste.rs/s/v3xuxn/95_reasons_for_having_your_own_website) - [95 reasons for having your own website](https://bellkiosk.website/blog/reasons-to-website.html)
* [2026-07-21, 02:23:52](https://lobste.rs/s/s13fc0/using_ssh_bastion_only_when_i_m_touching) - [Using a SSH bastion, but only when I&apos;m touching grass](https://evertpot.com/ssh-tunnel-if-unresolvable/)
* [2026-07-21, 00:09:48](https://lobste.rs/s/iypcjj/secrets_don_t_belong_config) - [Secrets Don’t Belong in Config](https://secretspec.dev/blog/secrets-dont-belong-in-config/)
* [2026-07-20, 23:16:36](https://lobste.rs/s/93norp/informal_tutorial_on_joy) - [An informal tutorial on Joy](https://www.kevinalbrecht.com/code/joy-mirror/j01tut.html)
* [2026-07-20, 23:15:41](https://news.ycombinator.com/item?id=48986091) - [Jellyfin founder Andrew leaves team](https://forum.jellyfin.org/t-project-leadership-changes)
* [2026-07-20, 23:00:00](https://news.slashdot.org/story/26/07/20/2259204/new-orleans-cops-published-policy-document-allowing-weaponized-drones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Orleans Cops Published Policy Document Allowing Weaponized Drones](https://news.slashdot.org/story/26/07/20/2259204/new-orleans-cops-published-policy-document-allowing-weaponized-drones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-20, 22:46:53](https://lobste.rs/s/boyu9x/opaque_interoperable_passkey_records) - [Opaque, Interoperable Passkey Records](https://words.filippo.io/passkey-record/)
* [2026-07-20, 22:40:00](https://news.slashdot.org/story/26/07/20/2239204/longtime-web-weirdness-site-fark-faces-ad-pinch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Longtime Web-Weirdness Site Fark Faces Ad Pinch](https://news.slashdot.org/story/26/07/20/2239204/longtime-web-weirdness-site-fark-faces-ad-pinch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-20, 22:27:00](https://soylentnews.org/article.pl?sid=26/07/20/040231&amp;from=rss) - [A Moment Of Silence, Please, For The Final Release Of Debian On X86-32](https://soylentnews.org/article.pl?sid=26/07/20/040231&amp;from=rss)
* [2026-07-20, 22:16:00](https://lobste.rs/s/wfmpqr/human_mathematicians_are_being) - [Human mathematicians are being outcounterexampled](https://xenaproject.wordpress.com/2026/07/20/human-mathematicians-are-being-outcounterexampled/)
* [2026-07-20, 21:48:43](https://lobste.rs/s/piabis/postgres_19_compression_from_pglz_lz4) - [Postgres 19 Compression: from pglz to LZ4](https://www.crunchydata.com/blog/postgres-19-compression-from-pglz-to-lz4)
* [2026-07-20, 21:00:00](https://hardware.slashdot.org/story/26/07/20/205250/chinas-new-ai-model-halts-new-subscriptions-as-demand-swamps-capacity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China&apos;s New AI Model Halts New Subscriptions As Demand Swamps Capacity](https://hardware.slashdot.org/story/26/07/20/205250/chinas-new-ai-model-halts-new-subscriptions-as-demand-swamps-capacity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-20, 20:12:19](https://news.ycombinator.com/item?id=48984270) - [I wrote an bash enumerator because I was sick of xargs](https://numerlab.org/2025/07/20/bashumerate-enumerator/)
* [2026-07-20, 20:10:44](https://news.ycombinator.com/item?id=48984254) - [Show HN: Immersive Gaussian Splat tour of grace cathedral, San Francisco](https://vincentwoo.com/3d/grace_cathedral/)
* [2026-07-20, 20:08:45](https://news.ycombinator.com/item?id=48984231) - [The Power of Awareness: Overcoming Surveillance Capitalism](https://www.scottrlarson.com/presentations/overcoming-surveillance-capitalism-with-awareness/)
* [2026-07-20, 20:00:00](https://news.slashdot.org/story/26/07/20/1948206/head-of-us-safety-agency-resigns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Head of US Safety Agency Resigns](https://news.slashdot.org/story/26/07/20/1948206/head-of-us-safety-agency-resigns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-20, 19:03:37](https://news.ycombinator.com/item?id=48983382) - [Human mathematicians are being outcounterexampled](https://xenaproject.wordpress.com/2026/07/20/human-mathematicians-are-being-outcounterexampled/)
* [2026-07-20, 19:00:00](https://news.slashdot.org/story/26/07/20/1751219/aliexpress-hit-with-record-625-million-fine-after-failing-to-make-eu-ordered-fixes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AliExpress Hit With Record $625 Million Fine After Failing To Make EU-Ordered Fixes](https://news.slashdot.org/story/26/07/20/1751219/aliexpress-hit-with-record-625-million-fine-after-failing-to-make-eu-ordered-fixes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-20, 18:16:08](https://news.ycombinator.com/item?id=48982681) - [Nativ: Run frontier open models locally on your Mac](https://blaizzy.github.io/nativ/)
* [2026-07-20, 18:06:13](https://news.ycombinator.com/item?id=48982535) - [Agent swarms and the new model economics](https://cursor.com/blog/agent-swarm-model-economics)
* [2026-07-20, 18:00:00](https://hardware.slashdot.org/story/26/07/20/1736218/lg-monitors-silently-install-adware-like-app-on-windows-pcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [LG Monitors Silently Install Adware-Like App On Windows PCs](https://hardware.slashdot.org/story/26/07/20/1736218/lg-monitors-silently-install-adware-like-app-on-windows-pcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-20, 17:43:00](https://soylentnews.org/article.pl?sid=26/07/20/0344230&amp;from=rss) - [Clever Hacker Fits 537,000 Domains in a Tiny $5 ESP32 Ad-Blocking Dongle](https://soylentnews.org/article.pl?sid=26/07/20/0344230&amp;from=rss)
* [2026-07-20, 17:13:23](https://news.ycombinator.com/item?id=48981703) - [Kimi Work](https://www.kimi.com/products/kimi-work)
* [2026-07-20, 17:07:39](https://news.ycombinator.com/item?id=48981620) - [Jelly UI: Soft-body physics for native HTML form controls](https://jelly-ui.com/)
* [2026-07-20, 17:05:00](https://it.slashdot.org/story/26/07/20/172249/hacker-wipes-romanias-entire-land-registry-database?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hacker Wipes Romania&apos;s Entire Land Registry Database](https://it.slashdot.org/story/26/07/20/172249/hacker-wipes-romanias-entire-land-registry-database?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-20, 16:40:40](https://lobste.rs/s/jhcyuq/deep_dive_into_my_forgejo_setup) - [A deep dive into my Forgejo setup](https://a.l3x.in/blog/welcome-to-my-forge/)
* [2026-07-20, 16:36:36](https://news.ycombinator.com/item?id=48981206) - [How we measured AI writing across arXiv, and where the measurement breaks](https://unslop.run/blog/measuring-ai-writing-on-arxiv)
* [2026-07-20, 16:32:10](https://news.ycombinator.com/item?id=48981136) - [Launch HN: Bloomy (YC S26) – AI-powered mastery learning for K-12](https://news.ycombinator.com/item?id=48981136)
* [2026-07-20, 16:07:19](https://lobste.rs/s/wxq96p/type_safe_servant_auth_roles) - [Type Safe Servant Auth Roles](https://blog.cofree.coffee/2026-07-20-servant-auth-roles/)
* [2026-07-20, 16:00:00](https://tech.slashdot.org/story/26/07/20/0438205/lsu-physicists-create-first-room-temperature-quantum-material?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [LSU Physicists Create First Room-Temperature Quantum Material](https://tech.slashdot.org/story/26/07/20/0438205/lsu-physicists-create-first-room-temperature-quantum-material?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-20, 15:47:28](https://news.ycombinator.com/item?id=48980520) - [I Stopped “Creating Content”](https://refactoringenglish.com/blog/why-i-stopped-creating-content/)
* [2026-07-20, 15:21:15](https://lobste.rs/s/kdflhr/invisicaps_fil_c_capability_model) - [InvisiCaps: The Fil-C Capability Model](https://fil-c.org/invisicaps)
* [2026-07-20, 15:07:31](https://news.ycombinator.com/item?id=48979931) - [Corners Don&apos;t Look Like That: Regarding Screenspace Ambient Occlusion (2012)](https://nothings.org/gamedev/ssao/)
* [2026-07-20, 15:00:00](https://news.slashdot.org/story/26/07/20/0431217/libreoffice-once-again-slams-microsoft-for-using-lock-in-with-office-files?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [LibreOffice Once Again Slams Microsoft For Using &apos;Lock-In&apos; With Office Files](https://news.slashdot.org/story/26/07/20/0431217/libreoffice-once-again-slams-microsoft-for-using-lock-in-with-office-files?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-20, 14:33:55](https://lobste.rs/s/bper0d/7_sandbox_escape_vulnerabilities_across) - [7 Sandbox Escape Vulnerabilities Across 4 Coding Agent Vendors](https://www.pillar.security/blog/the-week-of-sandbox-escapes)
* [2026-07-20, 14:21:47](https://news.ycombinator.com/item?id=48979269) - [China’s open-weights AI strategy is winning](https://werd.io/american-ai-is-locked-down-and-proprietary-its-losing/)
* [2026-07-20, 14:10:30](https://news.ycombinator.com/item?id=48979120) - [Perfection is not over-engineering](https://var0.xyz/posts/perfection-is-not-over-engineering.html)
* [2026-07-20, 13:58:52](https://lobste.rs/s/p3z0zw/meta_garbage_collection_using_ocaml_s_gc) - [Meta Garbage Collection: Using OCaml&apos;s GC to GC Rust](https://soteria-tools.com/blog/meta-garbage-collection)
* [2026-07-20, 13:43:10](https://news.ycombinator.com/item?id=48978792) - [Shinjuku Station in 3D](https://satoshi7190.github.io/Shinjuku-indoor-threejs-demo/)
* [2026-07-20, 13:28:33](https://news.ycombinator.com/item?id=48978605) - [Hacker wipes Romania&apos;s land registry database](https://news.risky.biz/risky-bulletin-hacker-wipes-romanias-entire-land-registry-database/)
* [2026-07-20, 12:55:00](https://soylentnews.org/article.pl?sid=26/07/20/0338215&amp;from=rss) - [Great Ape Laughter Reveals a Hidden Origin of Human Speech](https://soylentnews.org/article.pl?sid=26/07/20/0338215&amp;from=rss)
* [2026-07-20, 12:10:14](https://lobste.rs/s/21lrrw/gitolite) - [Gitolite](https://gitolite.com/gitolite/index.html)
* [2026-07-20, 11:34:00](https://entertainment.slashdot.org/story/26/07/20/0331209/hollywood-sci-fi-studio-lot-now-pitched-as-site-to-make-real-space-age-weapons?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hollywood Sci-fi Studio Lot Now Pitched As Site To Make Real Space-age Weapons ](https://entertainment.slashdot.org/story/26/07/20/0331209/hollywood-sci-fi-studio-lot-now-pitched-as-site-to-make-real-space-age-weapons?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-20, 11:05:58](https://news.ycombinator.com/item?id=48977128) - [Who&apos;s afraid of Chinese models?](https://stratechery.com/2026/whos-afraid-of-chinese-models/)
* [2026-07-20, 10:30:01](https://lobste.rs/s/bz0spb/building_amigaos_development) - [Building an AmigaOS Development Environment in 2026](https://turtleware.eu/posts/Building-an-AmigaOS-Development-Environment-in-2026.html)
* [2026-07-20, 09:02:49](https://lobste.rs/s/6zlnpk/json5e_json5_for_humans) - [JSON5E - JSON5 for Humans](https://github.com/boris-kolpackov/libpdjson5/blob/master/JSON5E.md)
* [2026-07-20, 08:28:45](https://lobste.rs/s/jr72dt/minimal_git_ci_using_hooks) - [Minimal Git CI using hooks](https://mccd.space/posts/26-06-29/simple-git-ci)
* [2026-07-20, 08:12:00](https://soylentnews.org/article.pl?sid=26/07/20/0325216&amp;from=rss) - [Fake Go DNS Scanner Spread Malware Through Over 200 GitHub Repos](https://soylentnews.org/article.pl?sid=26/07/20/0325216&amp;from=rss)
* [2026-07-20, 07:34:00](https://yro.slashdot.org/story/26/07/20/0611253/new-free-speech-concern-when-ai-chatbots-wont-criticize-leaders-from-repressive-regimes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Free Speech Concern: When AI Chatbots Won&apos;t Criticize Leaders from Repressive Regimes](https://yro.slashdot.org/story/26/07/20/0611253/new-free-speech-concern-when-ai-chatbots-wont-criticize-leaders-from-repressive-regimes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-20, 07:04:02](https://lobste.rs/s/op1k28/i_wrote_api_client_for_my_water_cooled_bed) - [I wrote an API client for my water-cooled bed](https://tinkering.xyz/bedctl/)
* [2026-07-20, 04:20:00](https://developers.slashdot.org/story/26/07/20/0417244/rust-will-help-linux-succeed-and-makes-coding-fun-says-greg-kroah-hartman?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rust Will Help Linux Succeed and Makes Coding Fun, Says Greg Kroah-Hartman](https://developers.slashdot.org/story/26/07/20/0417244/rust-will-help-linux-succeed-and-makes-coding-fun-says-greg-kroah-hartman?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-20, 03:24:00](https://soylentnews.org/article.pl?sid=26/07/20/0318228&amp;from=rss) - [The Galaxy&apos;s Coldest “Stars” Might Actually be Alien Megastructures](https://soylentnews.org/article.pl?sid=26/07/20/0318228&amp;from=rss)
* [2026-07-19, 21:53:00](https://soylentnews.org/article.pl?sid=26/07/19/0313244&amp;from=rss) - [Welcome to DebConf26!](https://soylentnews.org/article.pl?sid=26/07/19/0313244&amp;from=rss)
* [2026-07-19, 17:08:00](https://soylentnews.org/article.pl?sid=26/07/19/036256&amp;from=rss) - [AI Mania is Eviscerating Global Decision-Making](https://soylentnews.org/article.pl?sid=26/07/19/036256&amp;from=rss)
* [2026-07-19, 12:23:00](https://soylentnews.org/article.pl?sid=26/07/19/034232&amp;from=rss) - [Finland is Preparing to Hide an Entire City Underground](https://soylentnews.org/article.pl?sid=26/07/19/034232&amp;from=rss)
* [2026-07-19, 07:40:00](https://soylentnews.org/article.pl?sid=26/07/17/1611241&amp;from=rss) - [NTP Server That Traveled Back In Time Caused Massive Aussie Mobile Outage](https://soylentnews.org/article.pl?sid=26/07/17/1611241&amp;from=rss)
* [2026-07-19, 02:53:00](https://soylentnews.org/article.pl?sid=26/07/17/1524222&amp;from=rss) - [Experts May Have Drastically Underestimated the Lifespan of EV Batteries](https://soylentnews.org/article.pl?sid=26/07/17/1524222&amp;from=rss)
* [2026-07-18, 22:03:00](https://soylentnews.org/article.pl?sid=26/07/17/1520210&amp;from=rss) - [CXMT&apos;s DDR5 RAM Isn&apos;t As Performant Or As Consistent As SK Hynix Dies, Early Testing Shows](https://soylentnews.org/article.pl?sid=26/07/17/1520210&amp;from=rss)
* [2026-07-18, 17:20:00](https://soylentnews.org/article.pl?sid=26/07/17/1518215&amp;from=rss) - [Archaeologists Found Homer&apos;s Iliad Inside a 1,600-Year-Old Egyptian Mummy](https://soylentnews.org/article.pl?sid=26/07/17/1518215&amp;from=rss)
* [2026-07-18, 12:36:00](https://soylentnews.org/article.pl?sid=26/07/17/151212&amp;from=rss) - [Linus Torvalds Puts His Foot Down, Tells Anti-AI Programmers To &apos;Fork It&apos; - and Then This Happened](https://soylentnews.org/article.pl?sid=26/07/17/151212&amp;from=rss)
* [2026-07-18, 07:51:00](https://soylentnews.org/article.pl?sid=26/07/17/1454240&amp;from=rss) - [Hundreds Rally at Bethesda HQ to Protest Xbox Layoffs](https://soylentnews.org/article.pl?sid=26/07/17/1454240&amp;from=rss)
* [2026-07-18, 03:05:00](https://soylentnews.org/article.pl?sid=26/07/17/0436211&amp;from=rss) - [Teardown: A Generic 7-Port USB 3.0 Hub That Wasn&apos;t](https://soylentnews.org/article.pl?sid=26/07/17/0436211&amp;from=rss)
* [2026-07-18, 02:37:56](https://news.ycombinator.com/item?id=48954668) - [Arduino Launches Plug-and-Play Modules for Long-Range Sensor Projects](https://www.allaboutcircuits.com/news/arduino-launches-plug-and-play-modules-for-long-range-sensor-projects/)
* [2026-07-17, 22:18:00](https://soylentnews.org/article.pl?sid=26/07/17/0430256&amp;from=rss) - [Mathematical Explanation for Accelerated Universe Expansion That Doesn&apos;t Require Dark Energy](https://soylentnews.org/article.pl?sid=26/07/17/0430256&amp;from=rss)
* [2026-07-17, 17:33:00](https://soylentnews.org/article.pl?sid=26/07/16/0415252&amp;from=rss) - [Why the Human Body Has So Many Design Flaws](https://soylentnews.org/article.pl?sid=26/07/16/0415252&amp;from=rss)
* [2026-07-17, 12:49:00](https://soylentnews.org/article.pl?sid=26/07/16/0231216&amp;from=rss) - [Microsoft&apos;s Secure Boot Has Been Broken for a Decade and No One Noticed Until Now](https://soylentnews.org/article.pl?sid=26/07/16/0231216&amp;from=rss)
* [2026-07-17, 08:07:00](https://soylentnews.org/article.pl?sid=26/07/16/0229204&amp;from=rss) - [Irish Datacenters Now Guzzle 23% of the Country&apos;s Electricity](https://soylentnews.org/article.pl?sid=26/07/16/0229204&amp;from=rss)
* [2026-07-17, 03:23:00](https://soylentnews.org/article.pl?sid=26/07/16/0225242&amp;from=rss) - [Miami-Based City Labs Achieves a First for Commercial Nuclear Power in Space](https://soylentnews.org/article.pl?sid=26/07/16/0225242&amp;from=rss)
