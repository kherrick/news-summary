# [News Summary](https://kherrick.github.io/news-summary/)

## Technological Advances and Innovations

* [nixidy: Kubernetes GitOps with nix and Argo CD](https://nixidy.dev) - Offers an advanced approach to Kubernetes GitOps using Nix and Argo CD tools. [Comments](https://lobste.rs/s/jcpcvk/nixidy_kubernetes_gitops_with_nix_argo_cd)

* [NIST Finalizes 'Lightweight Cryptography' Standard to Protect Small Devices](https://www.nist.gov/news-events/news/2025/08/nist-finalizes-lightweight-cryptography-standard-protect-small-devices) - A critical step towards improving the security of IoT and small-scale devices. [Comments](https://news.ycombinator.com/item?id=44893600)

* [Polestar Sets Production Car Record For Longest Drive On a Single Charge](https://tech.slashdot.org/story/25/08/13/2011212/polestar-sets-production-car-record-for-longest-drive-on-a-single-charge?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Foregrounds advancements in EV battery technology. [Comments](https://tech.slashdot.org/story/25/08/13/2011212/polestar-sets-production-car-record-for-longest-drive-on-a-single-charge?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Samsung Launches World's First Micro RGB TV](https://entertainment.slashdot.org/story/25/08/13/174211/samsung-launches-worlds-first-micro-rgb-tv?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Pioneer technology in display manufacturing. [Comments](https://entertainment.slashdot.org/story/25/08/13/174211/samsung-launches-worlds-first-micro-rgb-tv?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Introducing Nexus - the Open-Source AI Router to aggregate, govern, and secure your AI stack](https://nexusrouter.com/blog/introducing-nexus-the-open-source-ai-router) - Demystifies the growing need for open-source solutions in AI management. [Comments](https://lobste.rs/s/26zxoe/introducing_nexus_open_source_ai_router)

## Policy, Ethics, and Society

* [Illinois bans use of artificial intelligence for mental health therapy](https://www.washingtonpost.com/nation/2025/08/12/illinois-ai-therapy-ban/) - Marks an important discussion on ethics and AI usage in sensitive human applications. [Comments](https://news.ycombinator.com/item?id=44893254)

* [US national debt reaches a record $37T, the Treasury Department reports](https://apnews.com/article/treasury-debt-spending-trump-obbb-6f807c4aae78dcc96f29ff07a3c926f4) - Highlights the economic challenges facing the US. [Comments](https://news.ycombinator.com/item?id=44892086)

* [Study: Social media probably can’t be fixed](https://arstechnica.com/science/2025/08/study-social-media-probably-cant-be-fixed/) - Provokes thought about the enduring issues with the social media paradigm. [Comments](https://lobste.rs/s/7gkxzt/study_social_media_probably_can_t_be_fixed)

## Coding and Software Tools

* [Coalton Playground: Type-Safe Lisp in Your Browser](https://abacusnoir.com/2025/08/12/coalton-playground-type-safe-lisp-in-your-browser/) - Introduces an innovative browser-based tool for Lisp programming. [Comments](https://lobste.rs/s/rq9woq/coalton_playground_type_safe_lisp_your)

* [git-who: Git blame for file trees](https://github.com/sinclairtarget/git-who) - A creative Git utility to analyze blame across file trees. [Comments](https://lobste.rs/s/5yyh3p/git_who_git_blame_for_file_trees)

* [Numba v2 Compiler Design](https://numba.pydata.org/numba-prototypes/sealir_tutorials/index.html) - Provides insight into the latest developments in Python just-in-time compilation tools. [Comments](https://lobste.rs/s/4zxyua/numba_v2_compiler_design)

## Healthcare and Science

* [New treatment eliminates bladder cancer in 82% of patients](https://news.keckmedicine.org/new-treatment-eliminates-bladder-cancer-in-82-of-patients/) - A groundbreaking advancement in cancer treatment with promising clinical outcomes. [Comments](https://news.ycombinator.com/item?id=44889580)

* [Japanese Scientists Develop Artificial Blood](https://soylentnews.org/article.pl?sid=25/08/09/0850232&amp;from=rss) - A remarkable leap forward in medical technology. [Comments](https://soylentnews.org/article.pl?sid=25/08/09/0850232&amp;from=rss)

## Climate and Environment

* [Temperature Records Broken as Extreme Heat Grips Parts of Europe](https://news.slashdot.org/story/25/08/13/1449205/temperature-records-broken-as-extreme-heat-grips-parts-of-europe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Underlines the harsh realities of climate change. [Comments](https://news.slashdot.org/story/25/08/13/1449205/temperature-records-broken-as-extreme-heat-grips-parts-of-europe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

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

* [2025-08-13, 21:51:50](https://lobste.rs/s/jcpcvk/nixidy_kubernetes_gitops_with_nix_argo_cd) - [nixidy: Kubernetes GitOps with nix and Argo CD](https://nixidy.dev)
* [2025-08-13, 21:30:00](https://tech.slashdot.org/story/25/08/13/2126230/pebble-time-2-reboot-gets-a-redesign?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pebble Time 2 Reboot Gets a Redesign](https://tech.slashdot.org/story/25/08/13/2126230/pebble-time-2-reboot-gets-a-redesign?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-13, 20:43:46](https://news.ycombinator.com/item?id=44893600) - [NIST Finalizes &apos;Lightweight Cryptography&apos; Standard to Protect Small Devices](https://www.nist.gov/news-events/news/2025/08/nist-finalizes-lightweight-cryptography-standard-protect-small-devices)
* [2025-08-13, 20:13:00](https://tech.slashdot.org/story/25/08/13/2011212/polestar-sets-production-car-record-for-longest-drive-on-a-single-charge?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Polestar Sets Production Car Record For Longest Drive On a Single Charge](https://tech.slashdot.org/story/25/08/13/2011212/polestar-sets-production-car-record-for-longest-drive-on-a-single-charge?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-13, 20:11:50](https://news.ycombinator.com/item?id=44893254) - [Illinois bans use of artificial intelligence for mental health therapy](https://www.washingtonpost.com/nation/2025/08/12/illinois-ai-therapy-ban/)
* [2025-08-13, 19:45:45](https://lobste.rs/s/zo4nto/snooping_on_slow_builds_using_syscalls) - [Snooping On Slow Builds (Using Syscalls)](https://danielchasehooper.com/posts/syscall-build-snooping/)
* [2025-08-13, 18:52:33](https://news.ycombinator.com/item?id=44892321) - [Job Listing Site Highlighting H-1B Positions So Americans Can Apply](https://www.newsweek.com/h1b-jobs-now-american-workers-green-cards-2041404)
* [2025-08-13, 18:48:00](https://apple.slashdot.org/story/25/08/13/1846238/apple-plots-expansion-into-ai-robots-home-security-and-smart-displays?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Plots Expansion Into AI Robots, Home Security and Smart Displays](https://apple.slashdot.org/story/25/08/13/1846238/apple-plots-expansion-into-ai-robots-home-security-and-smart-displays?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-13, 18:42:49](https://news.ycombinator.com/item?id=44892209) - [PYX: The next step in Python packaging](https://astral.sh/pyx)
* [2025-08-13, 18:31:19](https://news.ycombinator.com/item?id=44892086) - [US national debt reaches a record $37T, the Treasury Department reports](https://apnews.com/article/treasury-debt-spending-trump-obbb-6f807c4aae78dcc96f29ff07a3c926f4)
* [2025-08-13, 18:30:12](https://news.ycombinator.com/item?id=44892070) - [29 years later, Settlers II gets Amiga release](https://gamingretro.co.uk/29-years-later-settlers-ii-finally-gets-amiga-release/)
* [2025-08-13, 18:28:14](https://lobste.rs/s/v8eiev/pyx_python_native_package_registry_now) - [pyx: a Python-native package registry, now in Beta](https://astral.sh/blog/introducing-pyx)
* [2025-08-13, 18:18:34](https://lobste.rs/s/iupiot/standard_package_layout_2016) - [Standard Package Layout (2016)](https://www.gobeyond.dev/standard-package-layout/)
* [2025-08-13, 18:10:00](https://science.slashdot.org/story/25/08/13/188205/countrywide-natural-experiment-links-built-environment-to-physical-activity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Countrywide Natural Experiment Links Built Environment To Physical Activity](https://science.slashdot.org/story/25/08/13/188205/countrywide-natural-experiment-links-built-environment-to-physical-activity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-13, 18:10:00](https://soylentnews.org/article.pl?sid=25/08/12/1155214&amp;from=rss) - [Oracle VirtualBox Licensing Tweak Lies in Wait for Unwary](https://soylentnews.org/article.pl?sid=25/08/12/1155214&amp;from=rss)
* [2025-08-13, 18:05:05](https://news.ycombinator.com/item?id=44891759) - [OCaml as my primary language](https://xvw.lol/en/articles/why-ocaml.html)
* [2025-08-13, 18:04:35](https://lobste.rs/s/isgyrq/why_i_chose_ocaml_as_my_primary_language) - [Why I chose OCaml as my primary language](https://xvw.lol/en/articles/why-ocaml.html)
* [2025-08-13, 17:46:40](https://news.ycombinator.com/item?id=44891509) - [April Fools 2014: The *Real* Test Driven Development (2014)](https://testing.googleblog.com/2014/04/the-real-test-driven-development.html)
* [2025-08-13, 17:31:08](https://news.ycombinator.com/item?id=44891302) - [Cross-Site Request Forgery](https://words.filippo.io/csrf/)
* [2025-08-13, 17:30:00](https://entertainment.slashdot.org/story/25/08/13/174211/samsung-launches-worlds-first-micro-rgb-tv?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Samsung Launches World&apos;s First Micro RGB TV](https://entertainment.slashdot.org/story/25/08/13/174211/samsung-launches-worlds-first-micro-rgb-tv?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-13, 17:11:35](https://news.ycombinator.com/item?id=44891090) - [Launch HN: Golpo (YC S25) – AI-generated explainer videos](https://video.golpoai.com/)
* [2025-08-13, 17:04:23](https://lobste.rs/s/jp2ajo/physically_based_shading_theory) - [Physically Based Shading in Theory and Practice](https://blog.selfshadow.com/publications/s2025-shading-course/)
* [2025-08-13, 17:00:37](https://news.ycombinator.com/item?id=44890956) - [ReadMe (YC W15) Is Hiring a Developer Experience PM](https://readme.com/careers#product-manager-developer-experience)
* [2025-08-13, 16:50:00](https://tech.slashdot.org/story/25/08/13/1651209/young-americans-push-playback-beyond-1x-as-platforms-widen-speed-controls?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Young Americans Push Playback Beyond 1x as Platforms Widen Speed Controls](https://tech.slashdot.org/story/25/08/13/1651209/young-americans-push-playback-beyond-1x-as-platforms-widen-speed-controls?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-13, 16:42:13](https://news.ycombinator.com/item?id=44890722) - [A case study in bad hiring practice and how to fix it](https://www.tomkranz.com/blog1/a-case-study-in-bad-hiring-practice-and-how-to-fix-it)
* [2025-08-13, 16:05:00](https://it.slashdot.org/story/25/08/13/165224/microsoft-makes-pull-print-generally-available?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Makes Pull Print Generally Available](https://it.slashdot.org/story/25/08/13/165224/microsoft-makes-pull-print-generally-available?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-13, 16:00:29](https://lobste.rs/s/guo2nf/type_inference_for_plain_data) - [Type inference for plain data](https://www.haskellforall.com/2025/08/type-inference-for-plain-data.html)
* [2025-08-13, 15:56:43](https://lobste.rs/s/rq9woq/coalton_playground_type_safe_lisp_your) - [Coalton Playground: Type-Safe Lisp in Your Browser](https://abacusnoir.com/2025/08/12/coalton-playground-type-safe-lisp-in-your-browser/)
* [2025-08-13, 15:47:33](https://news.ycombinator.com/item?id=44890012) - [Gartner&apos;s grift is about to unravel](https://dx.tips/gartner)
* [2025-08-13, 15:41:55](https://news.ycombinator.com/item?id=44889941) - [Nginx introduces native support for ACME protocol](https://blog.nginx.org/blog/native-support-for-acme-protocol)
* [2025-08-13, 15:36:00](https://news.slashdot.org/story/25/08/13/1536215/chinas-lead-in-open-source-ai-jolts-washington-and-silicon-valley?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China&apos;s Lead in Open-Source AI Jolts Washington and Silicon Valley](https://news.slashdot.org/story/25/08/13/1536215/chinas-lead-in-open-source-ai-jolts-washington-and-silicon-valley?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-13, 15:23:15](https://news.ycombinator.com/item?id=44889676) - [OpenIndiana: Community-Driven Illumos Distribution](https://www.openindiana.org/)
* [2025-08-13, 15:19:53](https://news.ycombinator.com/item?id=44889627) - [This website is for humans](https://localghost.dev/blog/this-website-is-for-humans/)
* [2025-08-13, 15:16:59](https://news.ycombinator.com/item?id=44889580) - [New treatment eliminates bladder cancer in 82% of patients](https://news.keckmedicine.org/new-treatment-eliminates-bladder-cancer-in-82-of-patients/)
* [2025-08-13, 15:06:08](https://lobste.rs/s/7gkxzt/study_social_media_probably_can_t_be_fixed) - [Study: Social media probably can’t be fixed](https://arstechnica.com/science/2025/08/study-social-media-probably-cant-be-fixed/)
* [2025-08-13, 15:00:33](https://news.ycombinator.com/item?id=44889359) - [Coalton Playground: Type-Safe Lisp in the Browser](https://abacusnoir.com/2025/08/12/coalton-playground-type-safe-lisp-in-your-browser/)
* [2025-08-13, 14:53:46](https://lobste.rs/s/cknohu/oomprof_take_heap_profile_just_before) - [OOMProf - Take a heap profile just before OOMkill using eBPF](https://www.polarsignals.com/blog/posts/2025/08/13/oomprof)
* [2025-08-13, 14:48:00](https://news.slashdot.org/story/25/08/13/1449205/temperature-records-broken-as-extreme-heat-grips-parts-of-europe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Temperature Records Broken as Extreme Heat Grips Parts of Europe](https://news.slashdot.org/story/25/08/13/1449205/temperature-records-broken-as-extreme-heat-grips-parts-of-europe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-13, 14:31:20](https://lobste.rs/s/26zxoe/introducing_nexus_open_source_ai_router) - [Introducing Nexus - the Open-Source AI Router to aggregate, govern, and secure your AI stack](https://nexusrouter.com/blog/introducing-nexus-the-open-source-ai-router)
* [2025-08-13, 14:27:40](https://lobste.rs/s/zzw5j1/arch_shares_its_wiki_strategy_with_debian) - [Arch shares its wiki strategy with Debian](https://lwn.net/SubscriberLink/1032604/73596e0c3ed1945a/)
* [2025-08-13, 14:00:00](https://news.slashdot.org/story/25/08/13/1355200/us-embeds-trackers-in-ai-chip-shipments-to-catch-diversions-to-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Embeds Trackers in AI Chip Shipments To Catch Diversions To China](https://news.slashdot.org/story/25/08/13/1355200/us-embeds-trackers-in-ai-chip-shipments-to-catch-diversions-to-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-13, 13:50:35](https://news.ycombinator.com/item?id=44888445) - [We caught companies making it harder to delete your personal data online](https://themarkup.org/privacy/2025/08/12/we-caught-companies-making-it-harder-to-delete-your-data)
* [2025-08-13, 13:31:25](https://lobste.rs/s/fqqfia/miegakure_siggraph_2025_talk) - [Miegakure SIGGRAPH 2025 Talk](https://www.youtube.com/live/ucRukZM0d1s?t=5203s)
* [2025-08-13, 13:31:16](https://news.ycombinator.com/item?id=44888210) - [DoubleAgents: Fine-Tuning LLMs for Covert Malicious Tool Calls](https://pub.aimind.so/doubleagents-fine-tuning-llms-for-covert-malicious-tool-calls-b8ff00bf513e)
* [2025-08-13, 13:26:34](https://news.ycombinator.com/item?id=44888167) - [The Mary Queen of Scots Channel Anamorphosis: A 3D Simulation](https://www.charlespetzold.com/blog/2025/05/Mary-Queen-of-Scots-Channel-Anamorphosis-A-3D-Simulation.html)
* [2025-08-13, 13:22:00](https://soylentnews.org/article.pl?sid=25/08/12/1147242&amp;from=rss) - [Smartwatches Offer Little Insight Into Stress Levels, Researchers Find](https://soylentnews.org/article.pl?sid=25/08/12/1147242&amp;from=rss)
* [2025-08-13, 13:06:29](https://news.ycombinator.com/item?id=44887965) - [So what&apos;s the difference between plotted and printed artwork?](https://lostpixels.io/writings/the-difference-between-plotted-and-printed-artwork)
* [2025-08-13, 12:54:45](https://news.ycombinator.com/item?id=44887853) - [Pebble Time 2 Design Reveal [video]](https://www.youtube.com/watch?v=pcPzmDePH3E)
* [2025-08-13, 12:26:22](https://lobste.rs/s/rna1d1/starting_with_pytest_s_parametrize) - [Starting with pytest’s parametrize](https://nedbatchelder.com/blog/202508/starting_with_pytests_parametrize.html)
* [2025-08-13, 10:19:35](https://news.ycombinator.com/item?id=44886647) - [FFmpeg 8.0 adds Whisper support](https://code.ffmpeg.org/FFmpeg/FFmpeg/commit/13ce36fef98a3f4e6d8360c24d6b8434cbb8869b)
* [2025-08-13, 10:18:25](https://lobste.rs/s/d3dfvo/writing_your_own_simple_tab_completions) - [Writing Your Own Simple Tab-Completions for Bash and Zsh](https://mill-build.org/blog/14-bash-zsh-completion.html)
* [2025-08-13, 10:10:00](https://science.slashdot.org/story/25/08/13/0733245/cats-develop-dementia-in-a-similar-way-to-humans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cats Develop Dementia In a Similar Way To Humans](https://science.slashdot.org/story/25/08/13/0733245/cats-develop-dementia-in-a-similar-way-to-humans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-13, 08:34:00](https://soylentnews.org/article.pl?sid=25/08/12/1137226&amp;from=rss) - [Small Clouds Out as VMware Again Changes Partner Program](https://soylentnews.org/article.pl?sid=25/08/12/1137226&amp;from=rss)
* [2025-08-13, 08:01:53](https://lobste.rs/s/ywyzag/factory_timezone) - [The Factory Timezone](https://data.iana.org/time-zones/tzdb-2025a/factory)
* [2025-08-13, 07:30:00](https://tech.slashdot.org/story/25/08/13/0724221/ula-launches-first-national-security-mission-on-vulcan-centaur-rocket?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ULA Launches First National Security Mission On Vulcan Centaur Rocket](https://tech.slashdot.org/story/25/08/13/0724221/ula-launches-first-national-security-mission-on-vulcan-centaur-rocket?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-13, 07:00:26](https://lobste.rs/s/5yyh3p/git_who_git_blame_for_file_trees) - [git-who: Git blame for file trees](https://github.com/sinclairtarget/git-who)
* [2025-08-13, 06:59:35](https://news.ycombinator.com/item?id=44885398) - [Claude says “You&apos;re absolutely right!” about everything](https://github.com/anthropics/claude-code/issues/3382)
* [2025-08-13, 04:23:52](https://lobste.rs/s/vnwv2r/linear_scan_register_allocation_on_ssa) - [Linear scan register allocation on SSA](https://bernsteinbear.com/blog/linear-scan/)
* [2025-08-13, 04:08:45](https://lobste.rs/s/4zxyua/numba_v2_compiler_design) - [Numba v2 Compiler Design](https://numba.pydata.org/numba-prototypes/sealir_tutorials/index.html)
* [2025-08-13, 03:51:00](https://soylentnews.org/article.pl?sid=25/08/12/0427247&amp;from=rss) - [OpenAI Will Not Disclose GPT-5’s Energy Use. It Could be Higher Than Past Models](https://soylentnews.org/article.pl?sid=25/08/12/0427247&amp;from=rss)
* [2025-08-13, 03:30:00](https://linux.slashdot.org/story/25/08/12/2150211/linus-torvalds-blasts-kernel-dev-for-making-the-world-worse-with-garbage-patches?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linus Torvalds Blasts Kernel Dev For &apos;Making the World Worse&apos; With &apos;Garbage&apos; Patches](https://linux.slashdot.org/story/25/08/12/2150211/linus-torvalds-blasts-kernel-dev-for-making-the-world-worse-with-garbage-patches?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-13, 01:25:00](https://slashdot.org/story/25/08/12/2214243/cornell-researchers-develop-invisible-light-based-watermark-to-detect-deepfakes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cornell Researchers Develop Invisible Light-Based Watermark To Detect Deepfakes](https://slashdot.org/story/25/08/12/2214243/cornell-researchers-develop-invisible-light-based-watermark-to-detect-deepfakes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-13, 01:18:23](https://lobste.rs/s/86ptga/nyc_s_urban_textscape) - [NYC’s Urban Textscape](https://pudding.cool/2025/07/street-view/)
* [2025-08-13, 01:14:36](https://news.ycombinator.com/item?id=44883634) - [VC-backed company just killed my EU trademark for a small OSS project](https://news.ycombinator.com/item?id=44883634)
* [2025-08-13, 00:45:00](https://yro.slashdot.org/story/25/08/12/2142218/do-kwon-pleads-guilty-to-us-fraud-charges-in-40-billion-crypto-collapse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Do Kwon Pleads Guilty to US Fraud Charges In $40 Billion Crypto Collapse](https://yro.slashdot.org/story/25/08/12/2142218/do-kwon-pleads-guilty-to-us-fraud-charges-in-40-billion-crypto-collapse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-13, 00:01:08](https://lobste.rs/s/fh5wex/go_1_25_release_notes) - [Go 1.25 Release Notes](https://go.dev/doc/go1.25)
* [2025-08-12, 23:08:00](https://soylentnews.org/article.pl?sid=25/08/12/0419218&amp;from=rss) - [Using a Fan Can Make Older Adults Hotter in a Dry Heat](https://soylentnews.org/article.pl?sid=25/08/12/0419218&amp;from=rss)
* [2025-08-12, 18:41:46](https://lobste.rs/s/ks1m49/ashet_home_computer) - [Ashet Home Computer](https://ashet.computer/)
* [2025-08-12, 18:25:00](https://soylentnews.org/article.pl?sid=25/08/11/2227259&amp;from=rss) - [Post-Quantum Cryptography Advice Added to OpenSSH Website](https://soylentnews.org/article.pl?sid=25/08/11/2227259&amp;from=rss)
* [2025-08-12, 17:43:41](https://lobste.rs/s/dejmjq/how_i_do_type_safe_container_types_c) - [How I do (type-safe) container types in C](https://louissven.xyz/article/how_I_do_container_types_in_C.md)
* [2025-08-12, 15:17:16](https://lobste.rs/s/kvit4x/syncthing_v2_0) - [Syncthing v2.0](https://github.com/syncthing/syncthing/releases/tag/v2.0.0)
* [2025-08-12, 13:42:00](https://soylentnews.org/article.pl?sid=25/08/10/233218&amp;from=rss) - [Coding Error Blamed After Parts of Constitution Disappear From US Website](https://soylentnews.org/article.pl?sid=25/08/10/233218&amp;from=rss)
* [2025-08-12, 10:00:08](https://lobste.rs/s/fmiqeh/best_hello_world_web_development) - [The Best \&quot;Hello World\&quot; in Web Development](https://unplannedobsolescence.com/blog/best-hello-world-web-development/)
* [2025-08-12, 08:55:00](https://soylentnews.org/article.pl?sid=25/08/10/2217254&amp;from=rss) - [Extra-Strong Bacterial Cellulose Sheets as a Biodegradable Alternative to Plastic](https://soylentnews.org/article.pl?sid=25/08/10/2217254&amp;from=rss)
* [2025-08-12, 06:12:32](https://news.ycombinator.com/item?id=44872984) - [Rerank-2.5 and rerank-2.5-lite: instruction-following rerankers](https://blog.voyageai.com/2025/08/11/rerank-2-5/)
* [2025-08-12, 04:14:00](https://soylentnews.org/article.pl?sid=25/08/10/1521232&amp;from=rss) - [Here’s How Deepfake Vishing Attacks Work, and Why They Can Be Hard to Detect](https://soylentnews.org/article.pl?sid=25/08/10/1521232&amp;from=rss)
* [2025-08-11, 23:28:00](https://soylentnews.org/article.pl?sid=25/08/10/1038254&amp;from=rss) - [Quantum \&quot;Schrödinger&apos;s Cat\&quot; Survives For Mind-Blowing 23 Minutes In Record-Breaking Experiment](https://soylentnews.org/article.pl?sid=25/08/10/1038254&amp;from=rss)
* [2025-08-11, 18:45:00](https://soylentnews.org/article.pl?sid=25/08/10/1036210&amp;from=rss) - [Asian Hornet’s Unique Buzz May Hold Secret to Containing Invasive Species](https://soylentnews.org/article.pl?sid=25/08/10/1036210&amp;from=rss)
* [2025-08-11, 16:11:16](https://news.ycombinator.com/item?id=44865908) - [Fighting with YouTube to show a preview image](https://shaneosullivan.wordpress.com/2025/08/11/fighting-with-youtube-to-show-a-preview-image/)
* [2025-08-11, 14:14:00](https://soylentnews.org/article.pl?sid=25/08/11/145224&amp;from=rss) - [RIP: Dame Stephanie &apos;Steve&apos; Shirley, Technology Pioneer, Dies Aged 91](https://soylentnews.org/article.pl?sid=25/08/11/145224&amp;from=rss)
* [2025-08-11, 14:01:00](https://soylentnews.org/article.pl?sid=25/08/09/1958210&amp;from=rss) - [CalyxOS: The Pause That Wasn&apos;t](https://soylentnews.org/article.pl?sid=25/08/09/1958210&amp;from=rss)
* [2025-08-11, 09:11:00](https://soylentnews.org/article.pl?sid=25/08/09/1827235&amp;from=rss) - [Americans, Be Warned: Lessons From Reddit’s Chaotic UK Age Verification Rollout](https://soylentnews.org/article.pl?sid=25/08/09/1827235&amp;from=rss)
* [2025-08-11, 05:14:00](https://soylentnews.org/article.pl?sid=25/08/11/0456211&amp;from=rss) - [RIP: James Lovell Dead at 97](https://soylentnews.org/article.pl?sid=25/08/11/0456211&amp;from=rss)
* [2025-08-11, 04:34:00](https://soylentnews.org/article.pl?sid=25/08/09/1818247&amp;from=rss) - [WinRAR zero-day Exploited to Plant Malware on Archive Extraction](https://soylentnews.org/article.pl?sid=25/08/09/1818247&amp;from=rss)
* [2025-08-10, 23:47:56](https://news.ycombinator.com/item?id=44859499) - [Electrically controlled heat transport in graphite films](https://www.science.org/doi/10.1126/sciadv.adw8588)
* [2025-08-10, 23:45:00](https://soylentnews.org/article.pl?sid=25/08/09/188231&amp;from=rss) - [Is Perrier as Pure as it Claims? The Bottled Water Scandal Gripping France](https://soylentnews.org/article.pl?sid=25/08/09/188231&amp;from=rss)
* [2025-08-10, 18:57:00](https://soylentnews.org/article.pl?sid=25/08/09/091234&amp;from=rss) - [Man Swaps His Salt for Sodium Bromide—and Suffers Psychosis](https://soylentnews.org/article.pl?sid=25/08/09/091234&amp;from=rss)
* [2025-08-10, 13:12:00](https://soylentnews.org/article.pl?sid=25/08/09/0853200&amp;from=rss) - [Oh No, Wavy Dave! Robot Crustacean Waves at Fiddler Crabs for Science, Has a Bad Time](https://soylentnews.org/article.pl?sid=25/08/09/0853200&amp;from=rss)
* [2025-08-10, 08:28:00](https://soylentnews.org/article.pl?sid=25/08/09/0850232&amp;from=rss) - [Japanese Scientists Develop Artificial Blood](https://soylentnews.org/article.pl?sid=25/08/09/0850232&amp;from=rss)
* [2025-08-10, 03:45:00](https://soylentnews.org/article.pl?sid=25/08/09/0847239&amp;from=rss) - [Denmark Zoo: Donate Unwanted Pets to Feed Predators and Imitate ‘Natural Food Chain’](https://soylentnews.org/article.pl?sid=25/08/09/0847239&amp;from=rss)
* [2025-08-09, 23:01:00](https://soylentnews.org/article.pl?sid=25/08/09/0123224&amp;from=rss) - [Personalized Pricing Has Spread Across Many Industries. Here&apos;s How Consumers Can Avoid It](https://soylentnews.org/article.pl?sid=25/08/09/0123224&amp;from=rss)
* [2025-08-09, 22:41:36](https://news.ycombinator.com/item?id=44851019) - [PCIe 8.0 announced by the PCI-Sig will double throughput again](https://www.servethehome.com/pcie-8-0-announced-by-the-pci-sig-will-double-throughput-again/)
* [2025-08-09, 18:15:00](https://soylentnews.org/article.pl?sid=25/08/09/0113237&amp;from=rss) - [YouTube to Gauge US Users’ Ages With AI After UK and Australia Add Age Checks](https://soylentnews.org/article.pl?sid=25/08/09/0113237&amp;from=rss)
* [2025-08-09, 13:48:00](https://soylentnews.org/article.pl?sid=25/08/08/047222&amp;from=rss) - [Hacker Summer Camp: What to Expect From BSides, Black Hat, and DEF CON](https://soylentnews.org/article.pl?sid=25/08/08/047222&amp;from=rss)
* [2025-08-09, 09:02:00](https://soylentnews.org/article.pl?sid=25/08/08/0353246&amp;from=rss) - [An Ohio Couple Welcomes a Baby Boy From a Nearly 31-Year-Old Frozen Embryo](https://soylentnews.org/article.pl?sid=25/08/08/0353246&amp;from=rss)
* [2025-08-09, 04:16:00](https://soylentnews.org/article.pl?sid=25/08/08/0113247&amp;from=rss) - [KubeSphere Kills Open Source Edition](https://soylentnews.org/article.pl?sid=25/08/08/0113247&amp;from=rss)
