# [News Summary](https://kherrick.github.io/news-summary/)

## Emerging Technologies

* [Cheap 'Transforming' Electric Truck Announced by Jeff Bezos-Backed Startup](https://tech.slashdot.org/story/25/04/26/0425259/cheap-transforming-electric-truck-announced-by-jeff-bezos-backed-startup?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The electric truck market takes a turn with this innovative and cost-effective vehicle concept.

* [LLMs can see and hear without any training](https://github.com/facebookresearch/MILS) - Discusses technology allowing large language models to interpret visual and auditory data.

* [German Team Demonstrates Quantum Communication Over an Existing 254km Fibre Optic Network](https://soylentnews.org/article.pl?sid=25/04/25/0319203&from=rss) - A breakthrough in secure quantum communication through existing infrastructure.

## Cultural and Social Developments

* [The History of Timekeeping](https://soylentnews.org/article.pl?sid=25/04/25/0329237&from=rss) - Explores the evolution of timekeeping methods over centuries.

* [The Friendship Recession: The Lost Art of Connecting](https://www.happiness.hks.harvard.edu/february-2025-issue/the-friendship-recession-the-lost-art-of-connecting) - Analyzes the decline in social connections and the implications for human interaction.

* [Netflix Introduces a New Kind of Subtitles For the Non-Hearing Impaired](https://entertainment.slashdot.org/story/25/04/25/2159253/netflix-introduces-a-new-kind-of-subtitles-for-the-non-hearing-impaired?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Innovations in accessibility for streaming services.

## Artificial Intelligence and Ethics

* [What Happens When You Pay People Not to Use Google Search?](https://tech.slashdot.org/story/25/04/26/065228/what-happens-when-you-pay-people-not-to-use-google-search?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Experiment showcases how search habits and search engine reliance influence behavior.

* [Will the Humanities Survive Artificial Intelligence?](https://www.newyorker.com/culture/the-weekend-essay/will-the-humanities-survive-artificial-intelligence) - Reflects on AI’s impact on humanities education and preservation.

* [Your phone isn't secretly listening to you, but the truth is more disturbing](https://newatlas.com/computers/smartphone-listening-conversations-ads-facebook/) - Examines how personal data is leveraged for targeted advertising.

## Scientific Discoveries

* [Drawing a Line From the Gut Microbiome to Inflammation and Depression](https://soylentnews.org/article.pl?sid=25/04/25/0327235&from=rss) - Links between gut health and mental wellness explored in new study.

* [Catastrophic fires and soil degradation: possible link with Neolithic revolution](https://link.springer.com/article/10.1007/s11368-025-04021-x) - Examines historical environmental changes tied to early agriculture.

* [New Analysis Casts Doubt On 'Biosignatures' Found On Planet K2-18b](https://science.slashdot.org/story/25/04/25/229213/new-analysis-casts-doubt-on-biosignatures-found-on-planet-k2-18b?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Re-evaluates potential life signs in distant planetary atmospheres.

## Creative and Open Source Projects

* [Show HN: My self-written hobby OS is finally running on my vintage IBM ThinkPad](https://github.com/joexbayer/RetrOS-32) - A hobby operating system tailored for retro computing enthusiasts.

* [Berkeley Humanoid Lite – Open-source robot](https://lite.berkeley-humanoid.org/) - A lightweight open-source project to build humanoid robots.

* [Implementing Silent Hill's Fog in My (Real) PS1 Game](https://www.youtube.com/watch?v=EwpFdMJlVP4) - Creator recreates famous game atmospheric effects using original hardware.

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

* [2025-04-26, 15:34:00](https://tech.slashdot.org/story/25/04/26/0425259/cheap-transforming-electric-truck-announced-by-jeff-bezos-backed-startup?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cheap &apos;Transforming&apos; Electric Truck Announced by Jeff Bezos-Backed Startup](https://tech.slashdot.org/story/25/04/26/0425259/cheap-transforming-electric-truck-announced-by-jeff-bezos-backed-startup?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-26, 15:28:00](https://soylentnews.org/article.pl?sid=25/04/25/0329237&amp;from=rss) - [The History of Timekeeping](https://soylentnews.org/article.pl?sid=25/04/25/0329237&amp;from=rss)
* [2025-04-26, 14:45:07](https://lobste.rs/s/thgtxa/ruby_feature_16131_remove_safe_taint) - [Ruby Feature #16131: Remove $SAFE, taint and trust (2019)](https://bugs.ruby-lang.org/issues/16131)
* [2025-04-26, 14:34:00](https://tech.slashdot.org/story/25/04/26/065228/what-happens-when-you-pay-people-not-to-use-google-search?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What Happens When You Pay People Not to Use Google Search?](https://tech.slashdot.org/story/25/04/26/065228/what-happens-when-you-pay-people-not-to-use-google-search?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-26, 14:04:01](https://news.ycombinator.com/item?id=43803724) - [Stuffed-Na(a)N: stuff your NaNs](https://github.com/si14/stuffed-naan-js)
* [2025-04-26, 13:56:34](https://news.ycombinator.com/item?id=43803659) - [Thank you for holding my duck (2021)](https://naml.us/post/thank-you-for-holding-my-duck/)
* [2025-04-26, 13:38:25](https://news.ycombinator.com/item?id=43803518) - [LLMs can see and hear without any training](https://github.com/facebookresearch/MILS)
* [2025-04-26, 13:19:52](https://lobste.rs/s/lkxhg6/stop_overbuilding_evals) - [Stop overbuilding evals](https://softwaredoug.com/blog/2025/04/26/stop-overbuilding-evals)
* [2025-04-26, 13:04:08](https://news.ycombinator.com/item?id=43803243) - [Watching o3 guess a photo&apos;s location is surreal, dystopian and entertaining](https://simonwillison.net/2025/Apr/26/o3-photo-locations/)
* [2025-04-26, 13:00:00](https://slashdot.org/story/25/04/25/2228254/xprize-in-carbon-removal-goes-to-enhanced-rock-weathering?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [XPrize In Carbon Removal Goes To Enhanced Rock Weathering](https://slashdot.org/story/25/04/25/2228254/xprize-in-carbon-removal-goes-to-enhanced-rock-weathering?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-26, 12:51:41](https://news.ycombinator.com/item?id=43803148) - [Show HN: My self-written hobby OS is finally running on my vintage IBM ThinkPad](https://github.com/joexbayer/RetrOS-32)
* [2025-04-26, 12:00:38](https://news.ycombinator.com/item?id=43802839) - [Freshpaint (YC S19) is hiring back end and front end engineers (Remote, US only)](https://news.ycombinator.com/item?id=43802839)
* [2025-04-26, 11:57:33](https://lobste.rs/s/9vwrsb/implementing_silent_hill_s_fog_my_real_ps1) - [Implementing Silent Hill&apos;s Fog in My (Real) PS1 Game](https://www.youtube.com/watch?v=EwpFdMJlVP4)
* [2025-04-26, 11:54:04](https://news.ycombinator.com/item?id=43802792) - [The NNCPNET Email Network](https://changelog.complete.org/archives/10768-announcing-the-nncpnet-email-network)
* [2025-04-26, 11:41:21](https://news.ycombinator.com/item?id=43802727) - [The Friendship Recession: The Lost Art of Connecting](https://www.happiness.hks.harvard.edu/february-2025-issue/the-friendship-recession-the-lost-art-of-connecting)
* [2025-04-26, 11:30:20](https://news.ycombinator.com/item?id=43802675) - [Backblaze: Mounting Losses, Lawsuits, Sham Accounting, Insider Selling](https://www.morpheus-research.com/backblaze/)
* [2025-04-26, 10:42:00](https://soylentnews.org/article.pl?sid=25/04/25/0327235&amp;from=rss) - [Drawing a Line From the Gut Microbiome to Inflammation and Depression](https://soylentnews.org/article.pl?sid=25/04/25/0327235&amp;from=rss)
* [2025-04-26, 10:41:37](https://news.ycombinator.com/item?id=43802436) - [Will the Humanities Survive Artificial Intelligence?](https://www.newyorker.com/culture/the-weekend-essay/will-the-humanities-survive-artificial-intelligence)
* [2025-04-26, 10:00:00](https://science.slashdot.org/story/25/04/25/229213/new-analysis-casts-doubt-on-biosignatures-found-on-planet-k2-18b?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Analysis Casts Doubt On &apos;Biosignatures&apos; Found On Planet K2-18b](https://science.slashdot.org/story/25/04/25/229213/new-analysis-casts-doubt-on-biosignatures-found-on-planet-k2-18b?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-26, 09:35:22](https://lobste.rs/s/pipsig/nncp_encrypted_authenticated_onion) - [NNCP: Encrypted, authenticated, onion-routed version of UUCP](https://www.complete.org/nncp/)
* [2025-04-26, 08:49:29](https://news.ycombinator.com/item?id=43801959) - [ICE Deports 3 U.S. Citizen Children Held Incommunicado Prior to the Deportation](https://www.aclu.org/press-releases/ice-deports-3-u-s-citizen-children-held-incommunicado-prior-to-the-deportation)
* [2025-04-26, 08:39:29](https://news.ycombinator.com/item?id=43801906) - [An end to all this prostate trouble?](https://yarchive.net/blog/prostate/)
* [2025-04-26, 07:19:40](https://lobste.rs/s/focgny/taxonomy_c_types) - [A taxonomy of C++ types](https://blog.knatten.org/2025/04/25/a-taxonomy-of-c-types/)
* [2025-04-26, 07:00:00](https://science.slashdot.org/story/25/04/25/224229/china-shares-rare-moon-rocks-with-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Shares Rare Moon Rocks With US](https://science.slashdot.org/story/25/04/25/224229/china-shares-rare-moon-rocks-with-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-26, 06:42:59](https://news.ycombinator.com/item?id=43801439) - [Australian who ordered radioactive materials walks away from court](https://www.chemistryworld.com/news/australian-who-ordered-radioactive-materials-over-the-internet-walks-away-from-court/4021306.article)
* [2025-04-26, 05:55:00](https://soylentnews.org/article.pl?sid=25/04/25/0319203&amp;from=rss) - [German Team Demonstrates Quantum Communication Over an Existing 254km Fibre Optic Network](https://soylentnews.org/article.pl?sid=25/04/25/0319203&amp;from=rss)
* [2025-04-26, 05:31:52](https://news.ycombinator.com/item?id=43801179) - [Cloth](https://www.cloudofoz.com/verlet-test/)
* [2025-04-26, 04:43:03](https://news.ycombinator.com/item?id=43801000) - [Catastrophic fires and soil degradation: possible link with Neolithic revolution](https://link.springer.com/article/10.1007/s11368-025-04021-x)
* [2025-04-26, 03:55:24](https://lobste.rs/s/qs0onc/nofl_precise_immix) - [Nofl: A Precise Immix](https://arxiv.org/pdf/2503.16971v1)
* [2025-04-26, 03:43:01](https://lobste.rs/s/ebcxhd/when_etc_h_sts_breaks_your_substack_editor) - [When /etc/h*sts Breaks Your Substack Editor: An Adventure in Web Content Filtering](https://scalewithlee.substack.com/p/when-etchsts-breaks-your-substack)
* [2025-04-26, 03:30:00](https://entertainment.slashdot.org/story/25/04/25/2159253/netflix-introduces-a-new-kind-of-subtitles-for-the-non-hearing-impaired?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Netflix Introduces a New Kind of Subtitles For the Non-Hearing Impaired](https://entertainment.slashdot.org/story/25/04/25/2159253/netflix-introduces-a-new-kind-of-subtitles-for-the-non-hearing-impaired?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-26, 02:32:25](https://lobste.rs/s/1c9kcg/k_slices_k_dices) - [K Slices, K Dices](https://beyondloom.com/blog/slicedice.html)
* [2025-04-26, 02:13:00](https://lobste.rs/s/n1s9xa/wanix_virtual_environment_kit_for_local) - [Wanix :: Virtual environment kit for the local-first web, inspired by Plan 9](https://wanix.sh/)
* [2025-04-26, 02:02:00](https://entertainment.slashdot.org/story/25/04/25/2155205/apple-tv-is-worst-marketer-in-the-universe-says-producer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple TV+ Is &apos;Worst Marketer In the Universe,&apos; Says Producer](https://entertainment.slashdot.org/story/25/04/25/2155205/apple-tv-is-worst-marketer-in-the-universe-says-producer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-26, 01:38:54](https://news.ycombinator.com/item?id=43800151) - [Mobygratis – Free Moby music to empower your creative projects](https://mobygratis.com/)
* [2025-04-26, 01:25:00](https://tech.slashdot.org/story/25/04/25/2148256/worlds-biggest-zipper-maker-is-developing-a-self-propelled-zipper?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [World&apos;s Biggest Zipper Maker Is Developing a Self-Propelled Zipper](https://tech.slashdot.org/story/25/04/25/2148256/worlds-biggest-zipper-maker-is-developing-a-self-propelled-zipper?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-26, 01:08:00](https://soylentnews.org/article.pl?sid=25/04/25/035210&amp;from=rss) - [Matter Mediates Ultrastrong Coupling Between Light Particles](https://soylentnews.org/article.pl?sid=25/04/25/035210&amp;from=rss)
* [2025-04-26, 01:03:40](https://news.ycombinator.com/item?id=43800002) - [Berkeley Humanoid Lite – Open-source robot](https://lite.berkeley-humanoid.org/)
* [2025-04-26, 00:45:00](https://developers.slashdot.org/story/25/04/25/2139216/devs-sound-alarm-after-microsoft-subtracts-cc-extension-from-vs-code-forks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Devs Sound Alarm After Microsoft Subtracts C/C++ Extension From VS Code Forks](https://developers.slashdot.org/story/25/04/25/2139216/devs-sound-alarm-after-microsoft-subtracts-cc-extension-from-vs-code-forks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-26, 00:30:41](https://news.ycombinator.com/item?id=43799820) - [I wrote a book called \&quot;Crap Towns\&quot;. It seemed funny at the time](https://samj.substack.com/p/that-joke-isnt-funny-any-more)
* [2025-04-26, 00:26:48](https://news.ycombinator.com/item?id=43799802) - [Your phone isn&apos;t secretly listening to you, but the truth is more disturbing](https://newatlas.com/computers/smartphone-listening-conversations-ads-facebook/)
* [2025-04-26, 00:02:00](https://tech.slashdot.org/story/25/04/25/2129256/comcast-president-bemoans-broadband-customer-losses-we-are-not-winning?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Comcast President Bemoans Broadband Customer Losses: &apos;We Are Not Winning&apos;](https://tech.slashdot.org/story/25/04/25/2129256/comcast-president-bemoans-broadband-customer-losses-we-are-not-winning?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-25, 23:48:44](https://news.ycombinator.com/item?id=43799557) - [Fifteen new giant radio galaxies discovered with ASKAP](https://phys.org/news/2025-04-fifteen-giant-radio-galaxies-askap.html)
* [2025-04-25, 23:20:00](https://news.slashdot.org/story/25/04/25/2125224/doordash-makes-36-billion-offer-for-deliveroo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DoorDash Makes $3.6 Billion Offer For Deliveroo](https://news.slashdot.org/story/25/04/25/2125224/doordash-makes-36-billion-offer-for-deliveroo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-25, 23:19:56](https://news.ycombinator.com/item?id=43799396) - [Parallel ./configure](https://tavianator.com/2025/configure.html)
* [2025-04-25, 23:03:55](https://news.ycombinator.com/item?id=43799302) - [Wikipedia’s nonprofit status questioned by D.C. U.S. attorney](https://www.washingtonpost.com/technology/2025/04/25/wikipedia-nonprofit-ed-martin-letter/)
* [2025-04-25, 22:48:52](https://lobste.rs/s/7yjohg/actix_request_reply_cache_redis_backed) - [actix-request-reply-cache: A Redis-backed response caching middleware for Actix Web applications](https://github.com/densumesh/actix-request-reply-cache)
* [2025-04-25, 22:40:00](https://tech.slashdot.org/story/25/04/25/2052237/google-is-killing-software-support-for-early-nest-thermostats?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Is Killing Software Support For Early Nest Thermostats](https://tech.slashdot.org/story/25/04/25/2052237/google-is-killing-software-support-for-early-nest-thermostats?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-25, 22:39:21](https://lobste.rs/s/ljr4im/ats3_xanadu_released) - [ATS3 Xanadu released](https://github.com/githwxi/XATSHOME)
* [2025-04-25, 22:02:00](https://yro.slashdot.org/story/25/04/25/2049213/government-censorship-comes-to-bluesky?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Government Censorship Comes To Bluesky](https://yro.slashdot.org/story/25/04/25/2049213/government-censorship-comes-to-bluesky?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-25, 21:33:57](https://news.ycombinator.com/item?id=43798757) - [World Emulation via Neural Network](https://madebyoll.in/posts/world_emulation_via_dnn/)
* [2025-04-25, 21:30:48](https://lobste.rs/s/yzjiqj/mceliece_standardization) - [McEliece standardization](https://blog.cr.yp.to/20250423-mceliece.html)
* [2025-04-25, 21:24:00](https://news.slashdot.org/story/25/04/25/1931247/top-colleges-are-too-costly-even-for-parents-making-300000?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Top Colleges Are Too Costly Even for Parents Making $300,000](https://news.slashdot.org/story/25/04/25/1931247/top-colleges-are-too-costly-even-for-parents-making-300000?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-25, 21:09:27](https://lobste.rs/s/poyxdo/o_no_you_didn_t) - [O(no) You Didn’t](https://mrshiny608.github.io/MrShiny608/optimisation/2025/04/22/OhNoYouDidnt.html)
* [2025-04-25, 20:45:00](https://it.slashdot.org/story/25/04/25/1830232/microsoft-launches-windows-recall-after-year-long-delay?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Launches Windows Recall After Year-Long Delay](https://it.slashdot.org/story/25/04/25/1830232/microsoft-launches-windows-recall-after-year-long-delay?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-25, 20:20:00](https://soylentnews.org/article.pl?sid=25/04/24/0635218&amp;from=rss) - [First SD Express 8.0 Memory Card From Adata Hits 1.6 GB/s Read Speeds](https://soylentnews.org/article.pl?sid=25/04/24/0635218&amp;from=rss)
* [2025-04-25, 19:46:39](https://lobste.rs/s/chpmcp/linus_torvalds_expresses_his_hatred_for) - [Linus Torvalds Expresses His Hatred For Case-Insensitive File-Systems](https://www.phoronix.com/news/Linus-Torvalds-Anti-Case-Fold)
* [2025-04-25, 18:49:30](https://news.ycombinator.com/item?id=43797256) - [Show HN: Formalizing Principia Mathematica using Lean](https://github.com/ndrwnaguib/principia)
* [2025-04-25, 18:20:53](https://news.ycombinator.com/item?id=43796935) - [Lossless LLM compression for efficient GPU inference via dynamic-length float](https://arxiv.org/abs/2504.11651)
* [2025-04-25, 17:43:30](https://lobste.rs/s/gcq1i1/beos_file_system_os_geek_retrospective) - [The BeOS file system, an OS geek retrospective (2018)](https://arstechnica.com/information-technology/2018/07/the-beos-filesystem/)
* [2025-04-25, 16:19:32](https://lobste.rs/s/hmjv3a/gcc_15_1_released) - [GCC 15.1 Released](https://gcc.gnu.org/pipermail/gcc/2025-April/245971.html)
* [2025-04-25, 16:14:08](https://news.ycombinator.com/item?id=43795300) - [Reproducibility project fails to validate dozens of biomedical studies](https://www.nature.com/articles/d41586-025-01266-x)
* [2025-04-25, 15:58:22](https://lobste.rs/s/aukxak/differential_coverage_for_debugging) - [Differential Coverage for Debugging](https://research.swtch.com/diffcover)
* [2025-04-25, 15:34:00](https://soylentnews.org/politics/article.pl?sid=25/04/24/0632233&amp;from=rss) - [Harvard Stands Up for the First Amendment](https://soylentnews.org/politics/article.pl?sid=25/04/24/0632233&amp;from=rss)
* [2025-04-25, 15:28:35](https://lobste.rs/s/1dy62n/devenv_1_6_extensible_ad_hoc_nix) - [devenv 1.6: Extensible Ad-Hoc Nix Environments](https://devenv.sh/blog/2025/04/25/devenv-16-extensible-ad-hoc-nix-environments/)
* [2025-04-25, 15:04:25](https://lobste.rs/s/0hhmip/new_kind_paper) - [New Kind of Paper](https://mlajtos.mu/posts/new-kind-of-paper)
* [2025-04-25, 15:01:37](https://news.ycombinator.com/item?id=43794284) - [A $20k American-made electric pickup with no paint, no stereo, no screen](https://www.theverge.com/electric-cars/655527/slate-electric-truck-price-paint-radio-bezos)
* [2025-04-25, 13:48:30](https://news.ycombinator.com/item?id=43793526) - [Writing \&quot;/etc/hosts\&quot; breaks the Substack editor](https://scalewithlee.substack.com/p/when-etchsts-breaks-your-substack)
* [2025-04-25, 13:45:05](https://lobste.rs/s/icn0oe/don_t_delete_just_don_t_2009) - [Don’t Delete – Just Don’t (2009)](https://udidahan.com/2009/09/01/dont-delete-just-dont/)
* [2025-04-25, 13:19:02](https://news.ycombinator.com/item?id=43793288) - [Eurorack Knob Idea](https://mitxela.com/projects/euroknob)
* [2025-04-25, 12:28:17](https://lobste.rs/s/uybibu/another_war_story_hardest_bug_i_ever) - [Another war story: the hardest bug I ever debugged](https://philippweissensteiner.com/another-war-story.html)
* [2025-04-25, 10:47:00](https://soylentnews.org/article.pl?sid=25/04/24/0626241&amp;from=rss) - [Out-of-Balance Bacteria is Linked to Multiple Sclerosis − the Ratio Can Predict Severity of Disease](https://soylentnews.org/article.pl?sid=25/04/24/0626241&amp;from=rss)
* [2025-04-25, 10:05:39](https://news.ycombinator.com/item?id=43791992) - [Show HN: I used OpenAI&apos;s new image API for a personalized coloring book service](https://clevercoloringbook.com/)
* [2025-04-25, 06:02:00](https://soylentnews.org/article.pl?sid=25/04/24/0233226&amp;from=rss) - [4chan May be Dead, but its Toxic Legacy Lives on](https://soylentnews.org/article.pl?sid=25/04/24/0233226&amp;from=rss)
* [2025-04-25, 05:25:17](https://lobste.rs/s/v3dllz/lost_css_tricks_cohost_org) - [The Lost CSS Tricks of Cohost.org](https://css-tricks.com/the-lost-css-tricks-of-cohost-org/)
* [2025-04-25, 03:55:04](https://lobste.rs/s/jntn1m/how_decentralized_is_fediverse_really) - [How decentralized is the fediverse, really?](https://discuss.systems/@ricci/114396317436420669)
* [2025-04-25, 01:13:00](https://soylentnews.org/article.pl?sid=25/04/23/1540254&amp;from=rss) - [Crosswalk Button Voices Altered](https://soylentnews.org/article.pl?sid=25/04/23/1540254&amp;from=rss)
* [2025-04-24, 23:58:28](https://lobste.rs/s/lwyo5r/implementing_unsure_calculator_100) - [Implementing Unsure Calculator in 100 lines of Haskell](https://alt-romes.github.io/posts/2025-04-25-unsure-calculator-in-100-lines-of-haskell.html)
* [2025-04-24, 22:22:29](https://lobste.rs/s/dpeywc/protecting_nats_integrity_open_source) - [Protecting NATS and the integrity of open source: CNCF’s commitment to the community](https://www.cncf.io/blog/2025/04/24/protecting-nats-and-the-integrity-of-open-source-cncfs-commitment-to-the-community/)
* [2025-04-24, 20:24:00](https://soylentnews.org/article.pl?sid=25/04/23/1538243&amp;from=rss) - [C64 Demo Using Audio for Video and Vice Versa](https://soylentnews.org/article.pl?sid=25/04/23/1538243&amp;from=rss)
* [2025-04-24, 15:38:00](https://soylentnews.org/article.pl?sid=25/04/23/1521205&amp;from=rss) - [Open Home passes 2 million homes equipped](https://soylentnews.org/article.pl?sid=25/04/23/1521205&amp;from=rss)
* [2025-04-24, 10:53:00](https://soylentnews.org/article.pl?sid=25/04/23/1515240&amp;from=rss) - [Sophisticated Gmail Attack Highlights Dangers of Trusting Big Tech with Personal Data](https://soylentnews.org/article.pl?sid=25/04/23/1515240&amp;from=rss)
* [2025-04-24, 06:11:00](https://soylentnews.org/article.pl?sid=25/04/23/0422241&amp;from=rss) - [World&apos;s First Drone System for Fighting Lightning Protects Cities and Infrastructure](https://soylentnews.org/article.pl?sid=25/04/23/0422241&amp;from=rss)
* [2025-04-24, 01:26:00](https://soylentnews.org/article.pl?sid=25/04/23/0353259&amp;from=rss) - [Lone Black Hole Discovered](https://soylentnews.org/article.pl?sid=25/04/23/0353259&amp;from=rss)
* [2025-04-23, 20:41:00](https://soylentnews.org/article.pl?sid=25/04/23/0343211&amp;from=rss) - [Hosting a Blog on a Nintendo Wii](https://soylentnews.org/article.pl?sid=25/04/23/0343211&amp;from=rss)
* [2025-04-23, 15:56:00](https://soylentnews.org/article.pl?sid=25/04/22/015230&amp;from=rss) - [Laser Stimulation of Photoreceptors Reveals New Colors](https://soylentnews.org/article.pl?sid=25/04/22/015230&amp;from=rss)
* [2025-04-23, 11:13:00](https://soylentnews.org/article.pl?sid=25/04/22/011227&amp;from=rss) - [ChatGPT is Now a Potent Tool for Finding the Locations of Photos, Raising Doxxing Concerns](https://soylentnews.org/article.pl?sid=25/04/22/011227&amp;from=rss)
* [2025-04-23, 06:27:00](https://soylentnews.org/article.pl?sid=25/04/22/0055253&amp;from=rss) - [Major Blow For Cheap Handhelds As Anbernic No Longer Ships To The US](https://soylentnews.org/article.pl?sid=25/04/22/0055253&amp;from=rss)
* [2025-04-23, 01:42:00](https://soylentnews.org/article.pl?sid=25/04/22/0052214&amp;from=rss) - [Cancer-Causing Arsenic is Building Up in the World&apos;s Rice](https://soylentnews.org/article.pl?sid=25/04/22/0052214&amp;from=rss)
* [2025-04-22, 20:57:00](https://soylentnews.org/article.pl?sid=25/04/22/0038216&amp;from=rss) - [CA/Browser Forum Votes to Reduce the Maximum Validity Term of SSL/TLS Certs to 47 Days by 2029](https://soylentnews.org/article.pl?sid=25/04/22/0038216&amp;from=rss)
* [2025-04-22, 16:10:00](https://soylentnews.org/article.pl?sid=25/04/22/0023201&amp;from=rss) - [Tesla Accused of Speeding Up Odometers So Their Warranties Expire Faster](https://soylentnews.org/article.pl?sid=25/04/22/0023201&amp;from=rss)
* [2025-04-22, 11:27:00](https://soylentnews.org/article.pl?sid=25/04/21/2227242&amp;from=rss) - [Oldest Serving US Astronaut Returns to Earth on 70th Birthday](https://soylentnews.org/article.pl?sid=25/04/21/2227242&amp;from=rss)
* [2025-04-22, 06:44:00](https://soylentnews.org/article.pl?sid=25/04/21/2224243&amp;from=rss) - [Scientists Can Tell Healthy And Cancerous Cells Apart By How They Move](https://soylentnews.org/article.pl?sid=25/04/21/2224243&amp;from=rss)
* [2025-04-22, 06:28:00](https://soylentnews.org/meta/article.pl?sid=25/04/22/0619254&amp;from=rss) - [ \&quot;Only 2 submissions in the queue.\&quot;](https://soylentnews.org/meta/article.pl?sid=25/04/22/0619254&amp;from=rss)
* [2025-04-22, 02:01:00](https://soylentnews.org/article.pl?sid=25/04/20/1820252&amp;from=rss) - [Jim Zemlin on Taking a &apos;Portfolio Approach&apos; to Linux Foundation Projects](https://soylentnews.org/article.pl?sid=25/04/20/1820252&amp;from=rss)
