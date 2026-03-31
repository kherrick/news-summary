# [News Summary](https://kherrick.github.io/news-summary/)

## Source Code and Software Leaks

* [Claude Code full source code leaked on NPM](https://github.com/chatgptprojects/claude-code) ([comments](https://news.ycombinator.com/item?id=47584850))

* [Claude Code's source code has been leaked via a map file in their NPM registry](https://twitter.com/Fried_rice/status/2038894956459290963) ([comments](https://news.ycombinator.com/item?id=47584540))

* [Axios compromised on NPM – Malicious versions drop remote access trojan](https://www.stepsecurity.io/blog/axios-compromised-on-npm-malicious-versions-drop-remote-access-trojan) ([comments](https://news.ycombinator.com/item?id=47582220))

## Artificial Intelligence and Its Transformations

* [Google's 200M-parameter time-series foundation model with 16k context](https://github.com/google-research/timesfm) ([comments](https://news.ycombinator.com/item?id=47583045))

* [Ollama is now powered by MLX on Apple Silicon in preview](https://ollama.com/blog/mlx) ([comments](https://news.ycombinator.com/item?id=47582482))

* [AI Data Centers Can Warm Surrounding Areas By Up To 9.1C](https://developers.slashdot.org/story/26/03/30/2337240/ai-data-centers-can-warm-surrounding-areas-by-up-to-91c?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=47583045))

## Security and Vulnerabilities

* [Supply Chain Attack on Axios](https://socket.dev/blog/axios-npm-package-compromised) ([comments](https://lobste.rs/s/l57wuc/supply_chain_attack_on_axios))

* [Why have supply chain attacks become a near daily occurrence?](https://lobste.rs/s/nz2wdr/why_have_supply_chain_attacks_become_near) ([comments](https://lobste.rs/s/nz2wdr/why_have_supply_chain_attacks_become_near))

* [Claude finds RCE in Vim and Emacs](https://blog.calif.io/p/mad-bugs-vim-vs-emacs-vs-claude) ([comments](https://lobste.rs/s/pbx5yu/claude_finds_rce_vim_emacs))

## Environmental Impact

* [Scientists Shocked To Find Lab Gloves May Be Skewing Microplastics Data](https://science.slashdot.org/story/26/03/31/0421252/scientists-shocked-to-find-lab-gloves-may-be-skewing-microplastics-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=47582984))

* [AI Data Centers Can Warm Surrounding Areas By Up To 9.1C](https://developers.slashdot.org/story/26/03/30/2337240/ai-data-centers-can-warm-surrounding-areas-by-up-to-91c?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=47582482))

## Innovative Projects and Tools

* [Show HN: I turned a sketch into a 3D-print pegboard for my kid with an AI agent](https://github.com/virpo/pegboard) ([comments](https://news.ycombinator.com/item?id=47580910))

* [NumPy as Synth Engine](https://kennethreitz.org/essays/2026-03-29-numpy_as_synth_engine) ([comments](https://lobste.rs/s/v8agk2/numpy_as_synth_engine))

* [Cocoa-way: Native macOS Wayland Compositor written in Rust using Smithay](https://github.com/J-x-Z/cocoa-way) ([comments](https://lobste.rs/s/us9noo/cocoa_way_native_macos_wayland))

* [Okapi, or “What if ripgrep Could Edit?”](https://kocharhook.com/post/6/) ([comments](https://lobste.rs/s/kqnoi9/okapi_what_if_ripgrep_could_edit))

* [How to turn anything into a router](https://nbailey.ca/post/router/) ([comments](https://lobste.rs/s/uliqp4/how_turn_anything_into_router))

## Corporate and Legal Developments

* [GitHub backs down, kills Copilot pull-request ads after backlash](https://www.theregister.com/2026/03/30/github_copilot_ads_pull_requests/) ([comments](https://news.ycombinator.com/item?id=47582984))

* [OkCupid Settles FTC Case On Alleged Misuse of Its Users' Personal Data](https://yro.slashdot.org/story/26/03/30/1924246/okcupid-settles-ftc-case-on-alleged-misuse-of-its-users-personal-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=47578086))

* [After 16 Years and $8 Billion, the Military's New GPS Software Still Doesn't Work](https://tech.slashdot.org/story/26/03/30/1950214/after-16-years-and-8-billion-the-militarys-new-gps-software-still-doesnt-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=47578086))

## Miscellaneous

* [Apple's Early Days: Massive Oral History Shares Stories About Young Wozniak and Jobs](https://apple.slashdot.org/story/26/03/30/0547245/apples-early-days-massive-oral-history-shares-stories-about-young-wozniak-and-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=47580910))

* [The Drone Swarm is Coming, and NATO Air Defenses Are Too Expensive to Cope](https://soylentnews.org/article.pl?sid=26/03/28/0354240&amp;from=rss) ([comments](https://news.ycombinator.com/item?id=47583045))

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

* [2026-03-31, 09:40:12](https://news.ycombinator.com/item?id=47584850) - [Claude Code full source code leaked on NPM](https://github.com/chatgptprojects/claude-code)
* [2026-03-31, 09:00:40](https://news.ycombinator.com/item?id=47584540) - [Claude Code&apos;s source code has been leaked via a map file in their NPM registry](https://twitter.com/Fried_rice/status/2038894956459290963)
* [2026-03-31, 07:28:23](https://lobste.rs/s/l57wuc/supply_chain_attack_on_axios) - [Supply Chain Attack on Axios](https://socket.dev/blog/axios-npm-package-compromised)
* [2026-03-31, 07:02:06](https://lobste.rs/s/qmb53b/let_commits_tell_story) - [Let the commits tell the story](https://chrismaiorana.com/git-commits-tell-the-story/)
* [2026-03-31, 07:01:15](https://news.ycombinator.com/item?id=47583712) - [RamAIn (YC W26) Is Hiring](https://www.ycombinator.com/companies/ramain/jobs/jezgwo5-ai-ml-research-engineer)
* [2026-03-31, 07:00:00](https://science.slashdot.org/story/26/03/31/0421252/scientists-shocked-to-find-lab-gloves-may-be-skewing-microplastics-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Shocked To Find Lab Gloves May Be Skewing Microplastics Data](https://science.slashdot.org/story/26/03/31/0421252/scientists-shocked-to-find-lab-gloves-may-be-skewing-microplastics-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-31, 06:58:40](https://lobste.rs/s/ybrnlc/tree_functions_called_during_boot_linux) - [Tree of functions, called during boot of Linux kernel v7.0-rc1](https://zerobin.net/?e19cf19c9589d7f4#x4dHmryKSRUAVekqQC+1bTOA82A5HQid55jyiKXikIA=)
* [2026-03-31, 06:42:00](https://soylentnews.org/article.pl?sid=26/03/30/0233201&amp;from=rss) - [Touchscreens, Long Nails, and an Experimental Polish](https://soylentnews.org/article.pl?sid=26/03/30/0233201&amp;from=rss)
* [2026-03-31, 06:11:10](https://lobste.rs/s/us9noo/cocoa_way_native_macos_wayland) - [cocoa-way: Native macOS Wayland Compositor written in Rust using Smithay](https://github.com/J-x-Z/cocoa-way)
* [2026-03-31, 05:21:59](https://news.ycombinator.com/item?id=47583045) - [Google&apos;s 200M-parameter time-series foundation model with 16k context](https://github.com/google-research/timesfm)
* [2026-03-31, 05:11:24](https://news.ycombinator.com/item?id=47582984) - [GitHub backs down, kills Copilot pull-request ads after backlash](https://www.theregister.com/2026/03/30/github_copilot_ads_pull_requests/)
* [2026-03-31, 04:12:15](https://lobste.rs/s/nz2wdr/why_have_supply_chain_attacks_become_near) - [Why have supply chain attacks become a near daily occurrence ?](https://lobste.rs/s/nz2wdr/why_have_supply_chain_attacks_become_near)
* [2026-03-31, 03:40:45](https://news.ycombinator.com/item?id=47582482) - [Ollama is now powered by MLX on Apple Silicon in preview](https://ollama.com/blog/mlx)
* [2026-03-31, 03:30:00](https://developers.slashdot.org/story/26/03/30/2337240/ai-data-centers-can-warm-surrounding-areas-by-up-to-91c?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Data Centers Can Warm Surrounding Areas By Up To 9.1C](https://developers.slashdot.org/story/26/03/30/2337240/ai-data-centers-can-warm-surrounding-areas-by-up-to-91c?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-31, 03:26:52](https://lobste.rs/s/pbx5yu/claude_finds_rce_vim_emacs) - [Claude finds RCE in Vim and Emacs](https://blog.calif.io/p/mad-bugs-vim-vs-emacs-vs-claude)
* [2026-03-31, 02:54:17](https://news.ycombinator.com/item?id=47582220) - [Axios compromised on NPM – Malicious versions drop remote access trojan](https://www.stepsecurity.io/blog/axios-compromised-on-npm-malicious-versions-drop-remote-access-trojan)
* [2026-03-31, 02:26:15](https://news.ycombinator.com/item?id=47582056) - [Mr. Chatterbox is a Victorian-era ethically trained model](https://simonwillison.net/2026/Mar/30/mr-chatterbox/)
* [2026-03-31, 02:23:50](https://news.ycombinator.com/item?id=47582043) - [Artemis II is not safe to fly](https://idlewords.com/2026/03/artemis_ii_is_not_safe_to_fly.htm)
* [2026-03-31, 01:56:00](https://soylentnews.org/article.pl?sid=26/03/29/1343212&amp;from=rss) - [Are US-Based VPN Users at Risk of Being Treated as Foreign Surveillance Targets?](https://soylentnews.org/article.pl?sid=26/03/29/1343212&amp;from=rss)
* [2026-03-31, 01:28:18](https://news.ycombinator.com/item?id=47581721) - [Incident March 30th, 2026 – Accidental CDN Caching](https://blog.railway.com/p/incident-report-march-30-2026-accidental-cdn-caching)
* [2026-03-31, 01:24:40](https://lobste.rs/s/gghd7a/onlyoffice_flags_license_violations) - [ONLYOFFICE flags license violations in “Euro-Office” project](https://www.onlyoffice.com/blog/2026/03/onlyoffice-flags-license-violations-in-euro-office-project-by-nextcloud-and-ionos)
* [2026-03-31, 01:23:34](https://news.ycombinator.com/item?id=47581701) - [Universal Claude.md – cut Claude output tokens](https://github.com/drona23/claude-token-efficient)
* [2026-03-30, 23:20:02](https://news.ycombinator.com/item?id=47580910) - [Show HN: I turned a sketch into a 3D-print pegboard for my kid with an AI agent](https://github.com/virpo/pegboard)
* [2026-03-30, 23:00:00](https://tech.slashdot.org/story/26/03/30/2245259/microsoft-plans-to-build-100-native-apps-for-windows-11?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Plans To Build 100% Native Apps For Windows 11](https://tech.slashdot.org/story/26/03/30/2245259/microsoft-plans-to-build-100-native-apps-for-windows-11?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-30, 22:05:21](https://news.ycombinator.com/item?id=47580297) - [Android Developer Verification](https://android-developers.googleblog.com/2026/03/android-developer-verification-rolling-out-to-all-developers.html)
* [2026-03-30, 22:00:00](https://tech.slashdot.org/story/26/03/30/1950214/after-16-years-and-8-billion-the-militarys-new-gps-software-still-doesnt-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [After 16 Years and $8 Billion, the Military&apos;s New GPS Software Still Doesn&apos;t Work](https://tech.slashdot.org/story/26/03/30/1950214/after-16-years-and-8-billion-the-militarys-new-gps-software-still-doesnt-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-30, 21:12:46](https://news.ycombinator.com/item?id=47579754) - [OpenGridWorks: The Electricity Infrasctructure, Mapped](https://www.opengridworks.com)
* [2026-03-30, 21:12:00](https://soylentnews.org/article.pl?sid=26/03/29/1333211&amp;from=rss) - [Over Half of UK Businesses Have No Idea How Fast They Could Stop AI in a Crisis](https://soylentnews.org/article.pl?sid=26/03/29/1333211&amp;from=rss)
* [2026-03-30, 21:00:00](https://mobile.slashdot.org/story/26/03/30/1940252/samsung-is-bringing-airdrop-style-sharing-to-older-galaxy-devices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Samsung Is Bringing AirDrop-Style Sharing to Older Galaxy Devices](https://mobile.slashdot.org/story/26/03/30/1940252/samsung-is-bringing-airdrop-style-sharing-to-older-galaxy-devices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-30, 20:58:23](https://lobste.rs/s/ahbt4t/rust_s_next_generation_trait_solver) - [Rust&apos;s next-generation trait solver](https://lwn.net/SubscriberLink/1063124/81483612b1c8a493/)
* [2026-03-30, 20:58:22](https://lobste.rs/s/3gxqwe/running_plan_9_network_on_openbsd) - [Running a Plan 9 network on OpenBSD](https://www.ueber.net/who/mjl/plan9/plan9-obsd.html)
* [2026-03-30, 20:00:00](https://yro.slashdot.org/story/26/03/30/1924246/okcupid-settles-ftc-case-on-alleged-misuse-of-its-users-personal-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OkCupid Settles FTC Case On Alleged Misuse of Its Users&apos; Personal Data](https://yro.slashdot.org/story/26/03/30/1924246/okcupid-settles-ftc-case-on-alleged-misuse-of-its-users-personal-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-30, 19:32:04](https://lobste.rs/s/etenwb/vulnerability_research_is_cooked) - [Vulnerability Research Is Cooked](https://sockpuppet.org/blog/2026/03/30/vulnerability-research-is-cooked/)
* [2026-03-30, 19:22:33](https://news.ycombinator.com/item?id=47578572) - [Turning a MacBook into a touchscreen with $1 of hardware (2018)](https://anishathalye.com/macbook-touchscreen/)
* [2026-03-30, 19:00:00](https://it.slashdot.org/story/26/03/30/1824254/life-with-ai-causing-human-brain-fry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Life With AI Causing Human Brain &apos;Fry&apos;](https://it.slashdot.org/story/26/03/30/1824254/life-with-ai-causing-human-brain-fry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-30, 18:43:38](https://news.ycombinator.com/item?id=47578086) - [Vulnerability research is cooked](https://sockpuppet.org/blog/2026/03/30/vulnerability-research-is-cooked/)
* [2026-03-30, 18:16:00](https://news.ycombinator.com/item?id=47577761) - [Fedware: Government apps that spy harder than the apps they ban](https://www.sambent.com/the-white-house-app-has-huawei-spyware-and-an-ice-tip-line/)
* [2026-03-30, 18:00:00](https://yro.slashdot.org/story/26/03/30/1815258/judge-allows-bittorrent-seeding-claims-against-meta-despite-lawyers-lame-excuses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Judge Allows BitTorrent Seeding Claims Against Meta, Despite Lawyers &apos;Lame Excuses&apos;](https://yro.slashdot.org/story/26/03/30/1815258/judge-allows-bittorrent-seeding-claims-against-meta-despite-lawyers-lame-excuses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-30, 17:13:50](https://lobste.rs/s/zudaci/joins_are_not_expensive) - [Joins are NOT Expensive](https://www.database-doctor.com/posts/joins-are-not-expensive)
* [2026-03-30, 17:00:00](https://slashdot.org/story/26/03/30/1649230/microsoft-copilot-is-now-injecting-ads-into-pull-requests-on-github?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Copilot Is Now Injecting Ads Into Pull Requests On GitHub](https://slashdot.org/story/26/03/30/1649230/microsoft-copilot-is-now-injecting-ads-into-pull-requests-on-github?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-30, 16:25:00](https://soylentnews.org/article.pl?sid=26/03/29/1329244&amp;from=rss) - [Water Has a Newfound ‘Critical Point’ That May Help Explain its Quirks](https://soylentnews.org/article.pl?sid=26/03/29/1329244&amp;from=rss)
* [2026-03-30, 16:00:00](https://hardware.slashdot.org/story/26/03/30/0345230/sony-shuts-down-nearly-its-entire-memory-card-business-due-to-ssd-shortage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sony Shuts Down Nearly Its Entire Memory Card Business Due To SSD Shortage](https://hardware.slashdot.org/story/26/03/30/0345230/sony-shuts-down-nearly-its-entire-memory-card-business-due-to-ssd-shortage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-30, 15:55:11](https://lobste.rs/s/fug4fz/your_job_isn_t_programming) - [Your job isn&apos;t programming](https://codeandcake.dev/posts/2025-12-12-your-job-isnt-programming)
* [2026-03-30, 15:43:47](https://lobste.rs/s/uliqp4/how_turn_anything_into_router) - [How to turn anything into a router](https://nbailey.ca/post/router/)
* [2026-03-30, 15:31:55](https://lobste.rs/s/v8agk2/numpy_as_synth_engine) - [NumPy as Synth Engine](https://kennethreitz.org/essays/2026-03-29-numpy_as_synth_engine)
* [2026-03-30, 15:23:01](https://lobste.rs/s/z0wm9i/fixing_our_own_problems_rust_compiler) - [Fixing our own problems in the Rust compiler](https://trifectatech.org/blog/fixing-our-own-problems-in-the-rust-compiler/)
* [2026-03-30, 15:16:35](https://news.ycombinator.com/item?id=47575403) - [CodingFont: A game to help you pick a coding font](https://www.codingfont.com/)
* [2026-03-30, 15:00:00](https://slashdot.org/story/26/03/30/043233/tech-ceos-suddenly-love-blaming-ai-for-mass-job-cuts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tech CEOs Suddenly Love Blaming AI For Mass Job Cuts](https://slashdot.org/story/26/03/30/043233/tech-ceos-suddenly-love-blaming-ai-for-mass-job-cuts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-30, 14:42:27](https://lobste.rs/s/vxqecz/working_software_runs_locally) - [Working software runs locally](https://nickmonad.blog/2026/working-software-runs-locally/)
* [2026-03-30, 14:26:39](https://lobste.rs/s/zsute2/github_monaspace_case_study) - [GitHub Monaspace Case Study](https://lettermatic.com/custom/monaspace-case-study)
* [2026-03-30, 13:28:54](https://news.ycombinator.com/item?id=47574034) - [How to turn anything into a router](https://nbailey.ca/post/router/)
* [2026-03-30, 13:18:43](https://lobste.rs/s/0o60nu/copilot_edited_ad_into_my_pr) - [copilot edited an ad into my pr](https://notes.zachmanson.com/copilot-edited-an-ad-into-my-pr/)
* [2026-03-30, 13:14:27](https://news.ycombinator.com/item?id=47573887) - [Bird brains (2023)](https://www.dhanishsemar.com/writing/bird-brains)
* [2026-03-30, 12:39:56](https://news.ycombinator.com/item?id=47573519) - [Do your own writing](https://alexhwoods.com/dont-let-ai-write-for-you/)
* [2026-03-30, 11:40:00](https://soylentnews.org/article.pl?sid=26/03/29/1321221&amp;from=rss) - [I Decompiled the White House&apos;s New App](https://soylentnews.org/article.pl?sid=26/03/29/1321221&amp;from=rss)
* [2026-03-30, 11:34:00](https://yro.slashdot.org/story/26/03/30/0639249/new-company-hopes-to-build-age-verification-tech-into-vape-cartridges?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Company Hopes to Build Age-Verification Tech into Vape Cartridges](https://yro.slashdot.org/story/26/03/30/0639249/new-company-hopes-to-build-age-verification-tech-into-vape-cartridges?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-30, 11:29:24](https://lobste.rs/s/iprjpk/category_theory_illustrated_types) - [Category Theory Illustrated - Types](https://abuseofnotation.github.io/category-theory-illustrated/06_type/)
* [2026-03-30, 09:18:47](https://news.ycombinator.com/item?id=47572162) - [We&apos;re Pausing Asimov Press](https://www.asimov.press/p/pause)
* [2026-03-30, 07:34:00](https://apple.slashdot.org/story/26/03/30/0547245/apples-early-days-massive-oral-history-shares-stories-about-young-wozniak-and-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple&apos;s Early Days: Massive Oral History Shares Stories About Young Wozniak and Jobs](https://apple.slashdot.org/story/26/03/30/0547245/apples-early-days-massive-oral-history-shares-stories-about-young-wozniak-and-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-30, 07:14:21](https://lobste.rs/s/kqnoi9/okapi_what_if_ripgrep_could_edit) - [Okapi, or “What if ripgrep Could Edit?”](https://kocharhook.com/post/6/)
* [2026-03-30, 07:11:11](https://news.ycombinator.com/item?id=47571330) - [Good CTE, Bad CTE](https://boringsql.com/posts/good-cte-bad-cte/)
* [2026-03-30, 06:50:00](https://soylentnews.org/article.pl?sid=26/03/28/0354240&amp;from=rss) - [The Drone Swarm is Coming, and NATO Air Defenses Are Too Expensive to Cope](https://soylentnews.org/article.pl?sid=26/03/28/0354240&amp;from=rss)
* [2026-03-30, 05:41:18](https://lobste.rs/s/lxkqhp/chatgpt_won_t_let_you_type_until) - [ChatGPT Won&apos;t Let You Type Until Cloudflare Reads Your React State. I Decrypted the Program That Does It](https://www.buchodi.com/chatgpt-wont-let-you-type-until-cloudflare-reads-your-react-state-i-decrypted-the-program-that-does-it/)
* [2026-03-30, 05:21:21](https://lobste.rs/s/yyxyjy/15_years_forking_waterfox) - [15 Years of Forking (Waterfox)](https://www.waterfox.com/blog/15-years-of-forking/)
* [2026-03-30, 05:19:22](https://lobste.rs/s/lxzmm2/clojure_documentary_trailer) - [Clojure: The Documentary (Trailer)](https://youtu.be/JJEyffSdBsk)
* [2026-03-30, 05:12:51](https://lobste.rs/s/wkukvc/steam_controller_d0ggle_adventure) - [The Steam Controller D0ggle Adventure](https://im-just-lee.ing/steam-controller-d0ggle-54682aa4/)
* [2026-03-30, 03:34:00](https://tech.slashdot.org/story/26/03/30/0219229/rivian-and-lucid-win-right-to-sell-their-evs-directly-to-buyers-in-washington-state?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rivian and Lucid Win Right to Sell Their EVs Directly to Buyers in Washington State](https://tech.slashdot.org/story/26/03/30/0219229/rivian-and-lucid-win-right-to-sell-their-evs-directly-to-buyers-in-washington-state?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-30, 02:07:00](https://soylentnews.org/article.pl?sid=26/03/28/0349246&amp;from=rss) - [Google Unveils TurboQuant, a New AI Memory Compression Algorithm](https://soylentnews.org/article.pl?sid=26/03/28/0349246&amp;from=rss)
* [2026-03-30, 01:37:00](https://tech.slashdot.org/story/26/03/30/0135235/will-social-media-change-after-youtube-and-metas-court-defeat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Will Social Media Change After YouTube and Meta&apos;s Court Defeat?](https://tech.slashdot.org/story/26/03/30/0135235/will-social-media-change-after-youtube-and-metas-court-defeat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-29, 21:53:42](https://news.ycombinator.com/item?id=47567790) - [Oscar Reutersvärd (2021)](https://escherinhetpaleis.nl/en/about-escher/escher-today/oscar-reutersvard)
* [2026-03-29, 21:26:00](https://soylentnews.org/article.pl?sid=26/03/28/0347204&amp;from=rss) - [A 32-Year-Old Bug Walks Into a Telnet Server](https://soylentnews.org/article.pl?sid=26/03/28/0347204&amp;from=rss)
* [2026-03-29, 16:32:00](https://soylentnews.org/article.pl?sid=26/03/28/0345249&amp;from=rss) - [Google is Now Changing News Headlines – Without Permission](https://soylentnews.org/article.pl?sid=26/03/28/0345249&amp;from=rss)
* [2026-03-29, 15:46:50](https://lobste.rs/s/bpotqb/cognitive_dark_forest) - [The Cognitive Dark Forest](https://ryelang.org/blog/posts/cognitive-dark-forest/)
* [2026-03-29, 11:52:00](https://soylentnews.org/article.pl?sid=26/03/27/0334236&amp;from=rss) - [Pilot Didn&apos;t Mind NASA&apos;s Experimental Plane Doesnt Have a Front Window](https://soylentnews.org/article.pl?sid=26/03/27/0334236&amp;from=rss)
* [2026-03-29, 07:03:00](https://soylentnews.org/article.pl?sid=26/03/27/0325254&amp;from=rss) - [Someone Forked systemd to Strip Out Its Age Verification Support](https://soylentnews.org/article.pl?sid=26/03/27/0325254&amp;from=rss)
* [2026-03-29, 02:18:00](https://soylentnews.org/article.pl?sid=26/03/27/0319208&amp;from=rss) - [Nvidia CEO Jensen Huang Says ‘I Think We&apos;ve Achieved AGI’](https://soylentnews.org/article.pl?sid=26/03/27/0319208&amp;from=rss)
* [2026-03-28, 23:07:15](https://news.ycombinator.com/item?id=47558867) - [One of the largest salt mines in the world exists under Lake Erie](https://apnews.com/article/cleveland-salt-mine-winter-road-0daf091e3d56f65766bcf6a597683893)
* [2026-03-28, 21:34:00](https://soylentnews.org/article.pl?sid=26/03/27/0310204&amp;from=rss) - [Age Checks Creep Into Linux, systemd Locks It in, Developer Defends Himself](https://soylentnews.org/article.pl?sid=26/03/27/0310204&amp;from=rss)
* [2026-03-28, 16:51:00](https://soylentnews.org/article.pl?sid=26/03/26/0657232&amp;from=rss) - [CERN Scientists Burn AI Into Silicon to Stem Data Deluge](https://soylentnews.org/article.pl?sid=26/03/26/0657232&amp;from=rss)
* [2026-03-28, 12:09:00](https://soylentnews.org/article.pl?sid=26/03/26/0650221&amp;from=rss) - [Elon Musk Wants to Build 50 Times More Chips Than the World Currently Produces, Using &apos;New Physics&apos;](https://soylentnews.org/article.pl?sid=26/03/26/0650221&amp;from=rss)
* [2026-03-28, 07:24:00](https://soylentnews.org/article.pl?sid=26/03/26/0645257&amp;from=rss) - [Australia to Datacenter Operators: BYO Energy, Pay Your Way, Build Green, or Stay Home](https://soylentnews.org/article.pl?sid=26/03/26/0645257&amp;from=rss)
* [2026-03-28, 02:36:00](https://soylentnews.org/article.pl?sid=26/03/26/0644236&amp;from=rss) - [An Uncontrolled Experiment in Atmospheric Chemistry](https://soylentnews.org/article.pl?sid=26/03/26/0644236&amp;from=rss)
* [2026-03-27, 23:39:44](https://news.ycombinator.com/item?id=47549824) - [Cherri – programming language that compiles to an Apple Shortuct](https://github.com/electrikmilk/cherri)
* [2026-03-27, 21:50:00](https://soylentnews.org/article.pl?sid=26/03/26/0634229&amp;from=rss) - [Concerns Raised Over Shahed Kamikaze Drone Listings on Alibaba](https://soylentnews.org/article.pl?sid=26/03/26/0634229&amp;from=rss)
* [2026-03-27, 20:57:17](https://news.ycombinator.com/item?id=47548164) - [Researchers find 3,500-year-old loom that reveals textile revolution](https://web.ua.es/en/actualidad-universitaria/2026/marzo2026/23-31/ua-researchers-find-3-500-year-old-loom-that-reveals-key-aspects-of-textile-revolution-in-the-bronze-age.html)
* [2026-03-27, 20:30:05](https://news.ycombinator.com/item?id=47547843) - [Agents of Chaos](https://agentsofchaos.baulab.info/report.html)
* [2026-03-27, 16:03:00](https://soylentnews.org/article.pl?sid=26/03/26/0225217&amp;from=rss) - [Palantir Trial Plugs Into UK Financial Watchdog&apos;s Data Trove](https://soylentnews.org/article.pl?sid=26/03/26/0225217&amp;from=rss)
* [2026-03-27, 11:20:00](https://soylentnews.org/article.pl?sid=26/03/26/0220234&amp;from=rss) - [Amid Fuel Crunch, Cuban Mechanic Converts Car to Run on Charcoal](https://soylentnews.org/article.pl?sid=26/03/26/0220234&amp;from=rss)
* [2026-03-27, 06:38:00](https://soylentnews.org/article.pl?sid=26/03/26/0219214&amp;from=rss) - [The US Bans All New Foreign-Made Network Routers](https://soylentnews.org/article.pl?sid=26/03/26/0219214&amp;from=rss)
* [2026-03-27, 01:55:00](https://soylentnews.org/article.pl?sid=26/03/26/0217248&amp;from=rss) - [TCL&apos;s German QLED Ban Puts Pressure on TV Brands to be More Honest About QDs](https://soylentnews.org/article.pl?sid=26/03/26/0217248&amp;from=rss)
