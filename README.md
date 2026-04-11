# [News Summary](https://kherrick.github.io/news-summary/)

## Space and Astronomical Discoveries

* [Artemis II Astronauts Splash Down Off California&apos;s Coast](https://science.slashdot.org/story/26/04/11/0052229/artemis-ii-astronauts-splash-down-off-californias-coast?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Artemis II mission has safely concluded with a successful splashdown and significant achievements in space exploration. [Comments](https://news.ycombinator.com/item?id=47725583)

* [Ancient Rocks Reveal Evidence of the First Continents and Crust Recycling Processes on Earth](https://soylentnews.org/article.pl?sid=26/04/10/0248230&amp;from=rss) - Research on ancient rocks sheds light on Earth's early geological developments and the recycling of crust material.

* [Particles Seen Emerging From Empty Space For First Time](https://science.slashdot.org/story/26/04/10/018227/particles-seen-emerging-from-empty-space-for-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Scientists record groundbreaking observations of particles appearing from seemingly empty space, furthering our understanding of quantum mechanics.

## Technology and Innovation

* [Watgo – A WebAssembly Toolkit for Go](https://eli.thegreenplace.net/2026/watgo-a-webassembly-toolkit-for-go/) - Introduction to Watgo, a toolkit designed for leveraging WebAssembly in the Go programming language. [Comments](https://news.ycombinator.com/item?id=47722262)

* [Put your SSH keys in your TPM chip](https://raymii.org/s/tutorials/Put_your_SSH_keys_in_your_TPM_chip.html) - An innovative approach to enhancing security by utilizing TPM chips for storing SSH keys. [Comments](https://lobste.rs/s/ggum7f/put_your_ssh_keys_your_tpm_chip)

* [Meet Kiki - an array language](https://eli.li/kiki) - Explore Kiki, a new array-based programming language introduced for efficient computation. [Comments](https://lobste.rs/s/cwxvlh/meet_kiki_array_language)

## Artificial Intelligence

* [The Honest Climate Case for AI](https://dev.to/dcc/the-honest-climate-case-for-ai-5hg5) - An article discussing the potential positive impacts and ethical considerations of AI on climate change. [Comments](https://lobste.rs/s/kfm1ph/honest_climate_case_for_ai)

* [maki - the efficient coder (AI agent)](https://maki.sh/) - Introduction to maki, a highly efficient AI-powered coding agent for developers. [Comments](https://lobste.rs/s/0vuzbv/maki_efficient_coder_ai_agent)

## Privacy and Security Developments

* [FBI Extracts Suspect&apos;s Deleted Signal Messages Saved In iPhone Notification Data](https://mobile.slashdot.org/story/26/04/10/1656218/fbi-extracts-suspects-deleted-signal-messages-saved-in-iphone-notification-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A detailed report on how the FBI extracted critical data from deleted Signal messages. [Comments](https://news.ycombinator.com/item?id=47722333)

* [JSON formatter Chrome plugin now closed and injecting adware](https://github.com/callumlocke/json-formatter) - Concerns over a previously trusted Chrome plugin now distributing adware. [Comments](https://news.ycombinator.com/item?id=47721946)

* [You can&apos;t trust macOS Privacy and Security settings](https://eclecticlight.co/2026/04/10/why-you-cant-trust-privacy-security/) - Critique of how macOS privacy and security features may not deliver what they promise. [Comments](https://news.ycombinator.com/item?id=47719602)

## Infrastructure and Economics

* [France&apos;s Government Is Ditching Windows For Linux](https://linux.slashdot.org/story/26/04/10/1545234/frances-government-is-ditching-windows-for-linux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - France announces plans to move its government infrastructure to Linux, citing efficiency and cost benefits.

* [Ursa - a new Iceberg-first storage engine for Kafka](https://topicpartition.io/blog/ursa-a-new-lakehouse-first-storage-engine-for-kafka) - Introduction of Ursa, a cutting-edge data storage technology designed for enhanced performance. [Comments](https://lobste.rs/s/lnicis/ursa_new_iceberg_first_storage_engine_for)

## Ethics and Society

* [Chimpanzees In Uganda Locked In Vicious &apos;Civil War&apos;, Say Researchers](https://science.slashdot.org/story/26/04/10/2116254/chimpanzees-in-uganda-locked-in-vicious-civil-war-say-researchers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Researchers reveal insights into prolonged conflicts among chimpanzee groups in Uganda. [Comments](https://news.ycombinator.com/item?id=47722333)

* [OkCupid Gave 3M Users’ Photos to AI Firm, FTC Says](https://soylentnews.org/article.pl?sid=26/04/07/2124219&amp;from=rss) - Alarming reports reveal that OkCupid users’ photos were shared with AI companies without their consent.

## Miscellaneous Topics

* [A bet on whether ML-KEM-768 or X25519 will break first](https://github.com/FiloSottile/ecc-vs-lattices-long-bet) - A long-term wager explores which encryption method will stand the test of time. [Comments](https://lobste.rs/s/sxvq6g/bet_on_whether_ml_kem_768_x25519_will_break)

* [Apple Officially Kills its Tower Computer](https://soylentnews.org/article.pl?sid=26/04/05/0335237&amp;from=rss) - Apple discontinues its line of professional-grade tower computers. [Comments](https://soylentnews.org/article.pl?sid=26/04/05/0335237&amp;from=rss)

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

* [2026-04-11, 01:13:34](https://lobste.rs/s/sxvq6g/bet_on_whether_ml_kem_768_x25519_will_break) - [A bet on whether ML-KEM-768 or X25519 will break first](https://github.com/FiloSottile/ecc-vs-lattices-long-bet)
* [2026-04-11, 01:00:00](https://science.slashdot.org/story/26/04/11/0052229/artemis-ii-astronauts-splash-down-off-californias-coast?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Artemis II Astronauts Splash Down Off California&apos;s Coast](https://science.slashdot.org/story/26/04/11/0052229/artemis-ii-astronauts-splash-down-off-californias-coast?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-11, 00:27:00](https://soylentnews.org/article.pl?sid=26/04/10/0248230&amp;from=rss) - [Ancient Rocks Reveal Evidence of the First Continents and Crust Recycling Processes on Earth](https://soylentnews.org/article.pl?sid=26/04/10/0248230&amp;from=rss)
* [2026-04-11, 00:10:51](https://news.ycombinator.com/item?id=47725583) - [Artemis II safely splashes down](https://www.cbsnews.com/live-updates/artemis-ii-splashdown-return/)
* [2026-04-10, 23:48:07](https://news.ycombinator.com/item?id=47725403) - [Italo Calvino: A Traveller in a World of Uncertainty](https://www.historytoday.com/archive/portrait-author-historian/italo-calvino-traveller-world-uncertainty)
* [2026-04-10, 23:05:48](https://news.ycombinator.com/item?id=47724921) - [Sam Altman&apos;s response to Molotov cocktail incident](https://blog.samaltman.com/2279512)
* [2026-04-10, 23:00:00](https://science.slashdot.org/story/26/04/10/2116254/chimpanzees-in-uganda-locked-in-vicious-civil-war-say-researchers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chimpanzees In Uganda Locked In Vicious &apos;Civil War&apos;, Say Researchers](https://science.slashdot.org/story/26/04/10/2116254/chimpanzees-in-uganda-locked-in-vicious-civil-war-say-researchers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-10, 22:16:40](https://news.ycombinator.com/item?id=47724352) - [Filing the corners off my MacBooks](https://kentwalters.com/posts/corners/)
* [2026-04-10, 22:00:00](https://yro.slashdot.org/story/26/04/10/2012215/eu-parliament-fails-to-renew-loophole-allowing-tech-firms-to-report-abuse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EU Parliament Fails To Renew Loophole Allowing Tech Firms To Report Abuse](https://yro.slashdot.org/story/26/04/10/2012215/eu-parliament-fails-to-renew-loophole-allowing-tech-firms-to-report-abuse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-10, 21:56:33](https://news.ycombinator.com/item?id=47724118) - [Installing Every* Firefox Extension](https://jack.cab/blog/every-firefox-extension)
* [2026-04-10, 21:00:00](https://yro.slashdot.org/story/26/04/10/205209/suspect-arrested-for-allegedly-throwing-molotov-cocktail-at-sam-altmans-home?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Suspect Arrested for Allegedly Throwing Molotov Cocktail at Sam Altman&apos;s Home](https://yro.slashdot.org/story/26/04/10/205209/suspect-arrested-for-allegedly-throwing-molotov-cocktail-at-sam-altmans-home?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-10, 20:00:00](https://tech.slashdot.org/story/26/04/10/1947203/microsoft-begins-removing-copilot-branding-from-windows-11-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Begins Removing Copilot Branding From Windows 11 Apps](https://tech.slashdot.org/story/26/04/10/1947203/microsoft-begins-removing-copilot-branding-from-windows-11-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-10, 19:49:46](https://lobste.rs/s/gh1rks/defense_github_s_poor_uptime) - [In defense of GitHub&apos;s poor uptime](https://evanhahn.com/in-defense-of-githubs-poor-uptime/)
* [2026-04-10, 19:36:00](https://soylentnews.org/article.pl?sid=26/04/09/067240&amp;from=rss) - [Adobe Secretly Modifies Your Hosts File for the Stupidest Reason](https://soylentnews.org/article.pl?sid=26/04/09/067240&amp;from=rss)
* [2026-04-10, 19:27:58](https://news.ycombinator.com/item?id=47722562) - [Nowhere is safe](https://steveblank.com/2026/04/09/nowhere-is-safe/)
* [2026-04-10, 19:10:22](https://news.ycombinator.com/item?id=47722333) - [Chimpanzees in Uganda locked in eight-year &apos;civil war&apos;, say researchers](https://www.bbc.com/news/articles/cr71lkzv49po)
* [2026-04-10, 19:03:39](https://news.ycombinator.com/item?id=47722262) - [Watgo – A WebAssembly Toolkit for Go](https://eli.thegreenplace.net/2026/watgo-a-webassembly-toolkit-for-go/)
* [2026-04-10, 19:00:00](https://mobile.slashdot.org/story/26/04/10/1656218/fbi-extracts-suspects-deleted-signal-messages-saved-in-iphone-notification-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FBI Extracts Suspect&apos;s Deleted Signal Messages Saved In iPhone Notification Data](https://mobile.slashdot.org/story/26/04/10/1656218/fbi-extracts-suspects-deleted-signal-messages-saved-in-iphone-notification-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-10, 18:40:34](https://news.ycombinator.com/item?id=47722011) - [Show HN: A WYSIWYG word processor in Python](https://codeberg.org/chrisecker/miniword)
* [2026-04-10, 18:39:19](https://news.ycombinator.com/item?id=47721997) - [Show HN: FluidCAD – Parametric CAD with JavaScript](https://fluidcad.io/)
* [2026-04-10, 18:35:29](https://news.ycombinator.com/item?id=47721955) - [OpenClaw’s memory is unreliable, and you don’t know when it will break](https://blog.nishantsoni.com/p/ive-seen-a-thousand-openclaw-deploys)
* [2026-04-10, 18:35:21](https://news.ycombinator.com/item?id=47721953) - [AI assistance when contributing to the Linux kernel](https://github.com/torvalds/linux/blob/master/Documentation/process/coding-assistants.rst)
* [2026-04-10, 18:34:55](https://news.ycombinator.com/item?id=47721946) - [JSON formatter Chrome plugin now closed and injecting adware](https://github.com/callumlocke/json-formatter)
* [2026-04-10, 18:00:00](https://news.slashdot.org/story/26/04/10/1640225/google-news-now-prominently-featuring-polymarket-bets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google News Now Prominently Featuring Polymarket Bets](https://news.slashdot.org/story/26/04/10/1640225/google-news-now-prominently-featuring-polymarket-bets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-10, 17:41:38](https://lobste.rs/s/k11wgv/difficulty_making_sure_your_website_is) - [The difficulty of making sure your website is broken](https://letsencrypt.org/2026/04/10/test-sites.html)
* [2026-04-10, 17:32:45](https://lobste.rs/s/ggum7f/put_your_ssh_keys_your_tpm_chip) - [Put your SSH keys in your TPM chip](https://raymii.org/s/tutorials/Put_your_SSH_keys_in_your_TPM_chip.html)
* [2026-04-10, 17:31:22](https://news.ycombinator.com/item?id=47721255) - [Show HN: Eve – Managed OpenClaw for work](https://eve.new/login)
* [2026-04-10, 17:30:35](https://lobste.rs/s/cwxvlh/meet_kiki_array_language) - [Meet Kiki - an array language](https://eli.li/kiki)
* [2026-04-10, 17:01:07](https://news.ycombinator.com/item?id=47720918) - [Bild AI (YC W25) Is Hiring a Founding Product Engineer](https://www.ycombinator.com/companies/bild-ai/jobs/dDMaxVN-founding-product-engineer)
* [2026-04-10, 17:00:00](https://it.slashdot.org/story/26/04/10/1620217/google-rolls-out-gmail-end-to-end-encryption-on-mobile-devices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Rolls Out Gmail End-To-End Encryption On Mobile Devices](https://it.slashdot.org/story/26/04/10/1620217/google-rolls-out-gmail-end-to-end-encryption-on-mobile-devices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-10, 16:53:55](https://news.ycombinator.com/item?id=47720827) - [A compelling title that is cryptic enough to get you to take action on it](https://ericwbailey.website/published/a-compelling-title-that-is-cryptic-enough-to-get-you-to-take-action-on-it/)
* [2026-04-10, 16:22:26](https://news.ycombinator.com/item?id=47720419) - [Industrial design files for Keychron keyboards and mice](https://github.com/Keychron/Keychron-Keyboards-Hardware-Design)
* [2026-04-10, 16:22:13](https://news.ycombinator.com/item?id=47720418) - [Launch HN: Twill.ai (YC S25) – Delegate to cloud agents, get back PRs](https://twill.ai)
* [2026-04-10, 16:00:00](https://linux.slashdot.org/story/26/04/10/1545234/frances-government-is-ditching-windows-for-linux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [France&apos;s Government Is Ditching Windows For Linux](https://linux.slashdot.org/story/26/04/10/1545234/frances-government-is-ditching-windows-for-linux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-10, 15:55:34](https://lobste.rs/s/lnicis/ursa_new_iceberg_first_storage_engine_for) - [Ursa - a new Iceberg-first storage engine for Kafka](https://topicpartition.io/blog/ursa-a-new-lakehouse-first-storage-engine-for-kafka)
* [2026-04-10, 15:49:52](https://news.ycombinator.com/item?id=47719942) - [WireGuard makes new Windows release following Microsoft signing resolution](https://lists.zx2c4.com/pipermail/wireguard/2026-April/009561.html)
* [2026-04-10, 15:41:05](https://lobste.rs/s/hbirya/capsicum_vs_seccomp_process_sandboxing) - [Capsicum vs seccomp: Process Sandboxing](https://vivianvoss.net/blog/capsicum-vs-seccomp)
* [2026-04-10, 15:37:28](https://news.ycombinator.com/item?id=47719740) - [1D Chess](https://rowan441.github.io/1dchess/chess.html)
* [2026-04-10, 15:28:24](https://news.ycombinator.com/item?id=47719602) - [You can&apos;t trust macOS Privacy and Security settings](https://eclecticlight.co/2026/04/10/why-you-cant-trust-privacy-security/)
* [2026-04-10, 15:06:51](https://news.ycombinator.com/item?id=47719274) - [Helium is hard to replace](https://www.construction-physics.com/p/helium-is-hard-to-replace)
* [2026-04-10, 15:05:46](https://lobste.rs/s/kfm1ph/honest_climate_case_for_ai) - [The Honest Climate Case for AI](https://dev.to/dcc/the-honest-climate-case-for-ai-5hg5)
* [2026-04-10, 15:00:00](https://tech.slashdot.org/story/26/04/10/0123204/ai-is-coming-for-car-salesmen?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Is Coming for Car Salesmen](https://tech.slashdot.org/story/26/04/10/0123204/ai-is-coming-for-car-salesmen?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-10, 14:53:00](https://soylentnews.org/article.pl?sid=26/04/09/065206&amp;from=rss) - [Debian’s APT 3.2 Released with History, Undo, Redo, and Rollback Support](https://soylentnews.org/article.pl?sid=26/04/09/065206&amp;from=rss)
* [2026-04-10, 14:31:31](https://lobste.rs/s/1sqv11/selective_test_execution_at_stripe_fast) - [Selective Test Execution at Stripe: Fast CI for a 50M-line Ruby monorepo](https://stripe.dev/blog/selective-test-execution-at-stripe-fast-ci-for-a-50m-line-ruby-monorepo)
* [2026-04-10, 13:34:03](https://lobste.rs/s/xfbwic/why_aren_t_we_uv_yet) - [Why Aren&apos;t We uv Yet?](https://aleyan.com/blog/2026-why-arent-we-uv-yet)
* [2026-04-10, 13:29:20](https://news.ycombinator.com/item?id=47717847) - [CPU-Z and HWMonitor compromised](https://www.theregister.com/2026/04/10/cpuid_site_hijacked/)
* [2026-04-10, 12:55:19](https://lobste.rs/s/gfuvjw/git_repositories_as_module_system) - [Git Repositories as a Module System](https://alnewkirk.com/projects/git-from)
* [2026-04-10, 12:03:34](https://news.ycombinator.com/item?id=47716809) - [Intel 486 CPU announced April 10, 1989](https://dfarq.homeip.net/intel-486-cpu-announced-april-10-1989/)
* [2026-04-10, 11:38:16](https://lobste.rs/s/pulywh/watgo_webassembly_toolkit_for_go) - [watgo - a WebAssembly Toolkit for Go](https://eli.thegreenplace.net/2026/watgo-a-webassembly-toolkit-for-go/)
* [2026-04-10, 11:00:00](https://meta.slashdot.org/story/26/04/10/0113243/meta-removes-ads-for-social-media-addiction-litigation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Removes Ads For Social Media Addiction Litigation](https://meta.slashdot.org/story/26/04/10/0113243/meta-removes-ads-for-social-media-addiction-litigation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-10, 10:29:37](https://lobste.rs/s/3ukqqt/installing_every_firefox_extension) - [Installing every* Firefox extension](https://jack.cab/blog/every-firefox-extension/)
* [2026-04-10, 10:07:00](https://soylentnews.org/article.pl?sid=26/04/08/1917256&amp;from=rss) - [Researchers Discover How to Dampen Electronic Noise Using Nanowires](https://soylentnews.org/article.pl?sid=26/04/08/1917256&amp;from=rss)
* [2026-04-10, 09:53:52](https://lobste.rs/s/iq7i4f/favorite_programmer_website) - [Favorite programmer website?](https://lobste.rs/s/iq7i4f/favorite_programmer_website)
* [2026-04-10, 09:50:37](https://lobste.rs/s/fqk6re/repository_pattern_with_hygienic_macros) - [Repository Pattern with Hygienic Macros in Scheme – Lisp](https://jointhefreeworld.org/blog/articles/lisps/functional-repository-pattern-in-scheme-with-macros/index.html)
* [2026-04-10, 08:47:37](https://lobste.rs/s/qsoxgf/acyclic_e_graph_cranelift_s_mid_end) - [The acyclic e-graph: Cranelift&apos;s mid-end optimizer](https://cfallin.org/blog/2026/04/09/aegraph/)
* [2026-04-10, 07:59:27](https://lobste.rs/s/rcom8t/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/rcom8t/what_are_you_doing_this_weekend)
* [2026-04-10, 07:35:09](https://lobste.rs/s/0vuzbv/maki_efficient_coder_ai_agent) - [maki - the efficient coder (AI agent)](https://maki.sh/)
* [2026-04-10, 07:00:00](https://science.slashdot.org/story/26/04/10/018227/particles-seen-emerging-from-empty-space-for-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Particles Seen Emerging From Empty Space For First Time](https://science.slashdot.org/story/26/04/10/018227/particles-seen-emerging-from-empty-space-for-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-10, 05:23:00](https://soylentnews.org/article.pl?sid=26/04/08/1916208&amp;from=rss) - [White House Seeks Deep NASA Cuts as Artemis II Breaks Spaceflight Record](https://soylentnews.org/article.pl?sid=26/04/08/1916208&amp;from=rss)
* [2026-04-10, 03:30:00](https://news.slashdot.org/story/26/04/09/215206/us-fertility-rate-falls-to-all-time-low?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Fertility Rate Falls To All-Time Low](https://news.slashdot.org/story/26/04/09/215206/us-fertility-rate-falls-to-all-time-low?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-10, 02:27:14](https://lobste.rs/s/tbud4j/incremental_compilation_with_llvm) - [Incremental compilation with LLVM](https://ziglang.org/devlog/2026/#2026-04-08)
* [2026-04-10, 00:37:00](https://soylentnews.org/article.pl?sid=26/04/08/1912232&amp;from=rss) - [&apos;Voorhees Law&apos; Explains Why the Slower Car Often Catches up](https://soylentnews.org/article.pl?sid=26/04/08/1912232&amp;from=rss)
* [2026-04-09, 23:00:00](https://tech.slashdot.org/story/26/04/09/2053215/negative-views-of-broadcom-driving-thousands-of-vmware-migrations-rival-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Negative&apos; Views of Broadcom Driving Thousands of VMware Migrations, Rival Says](https://tech.slashdot.org/story/26/04/09/2053215/negative-views-of-broadcom-driving-thousands-of-vmware-migrations-rival-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-09, 22:00:00](https://tech.slashdot.org/story/26/04/09/2043257/mozilla-accuses-microsoft-of-sabotaging-firefox-with-windows-and-copilot-tactics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mozilla Accuses Microsoft of Sabotaging Firefox With Windows and Copilot Tactics](https://tech.slashdot.org/story/26/04/09/2043257/mozilla-accuses-microsoft-of-sabotaging-firefox-with-windows-and-copilot-tactics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-09, 21:05:30](https://lobste.rs/s/wnizjm/my_login_shell_assembly) - [My Login Shell in Assembly](https://isene.org/2026/04/Bare.html)
* [2026-04-09, 19:52:00](https://soylentnews.org/article.pl?sid=26/04/08/198248&amp;from=rss) - [Testing Suggests Google&apos;s AI Overviews Tell Millions of Lies Per Hour](https://soylentnews.org/article.pl?sid=26/04/08/198248&amp;from=rss)
* [2026-04-09, 18:33:20](https://lobste.rs/s/pli6nn/elastic_tabstops_2006) - [Elastic tabstops (2006)](https://nick-gravgaard.com/elastic-tabstops/)
* [2026-04-09, 15:05:00](https://soylentnews.org/article.pl?sid=26/04/08/197218&amp;from=rss) - [Social Media is Virtually Useless for Publishers to Attract Readers](https://soylentnews.org/article.pl?sid=26/04/08/197218&amp;from=rss)
* [2026-04-09, 13:53:58](https://news.ycombinator.com/item?id=47703805) - [PGLite Evangelism](https://substack.com/home/post/p-193415720)
* [2026-04-09, 12:54:44](https://lobste.rs/s/s51wss/you_can_absolutely_have_rss_dependent) - [You can absolutely have an RSS dependent website in 2026](https://matduggan.com/you-can-absolutely-have-an-rss-dependent-website-in-2026/)
* [2026-04-09, 12:10:56](https://lobste.rs/s/j2l2ya/let_s_talk_about_llms) - [Let’s talk about LLMs](https://www.b-list.org/weblog/2026/apr/09/llms/)
* [2026-04-09, 11:26:58](https://lobste.rs/s/1iwyg7/til_helix_typst_are_match_made_heaven) - [TIL that Helix and Typst are a match made in heaven](https://ergaster.org/til/helix-typst-match-in-heaven/)
* [2026-04-09, 10:28:28](https://news.ycombinator.com/item?id=47701769) - [The Bra-and-Girdle Maker That Fashioned the Impossible for NASA](https://thereader.mitpress.mit.edu/the-bra-and-girdle-maker-that-fashioned-the-impossible-for-nasa/)
* [2026-04-09, 10:19:00](https://soylentnews.org/article.pl?sid=26/04/08/0231247&amp;from=rss) - [Plan 9 is a Uniquely Complete Operating System](https://soylentnews.org/article.pl?sid=26/04/08/0231247&amp;from=rss)
* [2026-04-09, 08:55:25](https://lobste.rs/s/gns27z/what_are_your_programming_hunches_you) - [What are your programming \&quot;hunches\&quot; you haven&apos;t yet investigated?](https://lobste.rs/s/gns27z/what_are_your_programming_hunches_you)
* [2026-04-09, 05:38:00](https://soylentnews.org/article.pl?sid=26/04/07/2126219&amp;from=rss) - [Big Tech Knows New AI Models Ripe For Cyberattacks — But Plans To Release Them Anyway](https://soylentnews.org/article.pl?sid=26/04/07/2126219&amp;from=rss)
* [2026-04-09, 00:56:00](https://soylentnews.org/article.pl?sid=26/04/07/2124219&amp;from=rss) - [OkCupid Gave 3M Users’ Photos to AI Firm, FTC Says](https://soylentnews.org/article.pl?sid=26/04/07/2124219&amp;from=rss)
* [2026-04-08, 20:11:00](https://soylentnews.org/article.pl?sid=26/04/06/234206&amp;from=rss) - [Sweden Goes Back to Basics, Swapping Screens for Books in the Classroom](https://soylentnews.org/article.pl?sid=26/04/06/234206&amp;from=rss)
* [2026-04-08, 15:26:03](https://news.ycombinator.com/item?id=47691538) - [What is RISC-V and why it matters to Canonical](https://ubuntu.com/blog/risc-v-101-what-is-it-and-what-does-it-mean-for-canonical)
* [2026-04-08, 15:20:59](https://news.ycombinator.com/item?id=47691464) - [Vinyl Cache and Varnish Cache](https://vinyl-cache.org/organization/on_vinyl_cache_and_varnish_cache.html)
* [2026-04-08, 10:48:00](https://soylentnews.org/article.pl?sid=26/04/06/2256234&amp;from=rss) - [The Three Ways Big Tech Made The Human Mind Weaker](https://soylentnews.org/article.pl?sid=26/04/06/2256234&amp;from=rss)
* [2026-04-08, 06:06:19](https://news.ycombinator.com/item?id=47685984) - [Investigating Split Locks on x86-64](https://chipsandcheese.com/p/investigating-split-locks-on-x86)
* [2026-04-08, 05:56:00](https://soylentnews.org/article.pl?sid=26/04/06/2247253&amp;from=rss) - [Democracy Was Not Just a Greco-Roman Affair in the Ancient World](https://soylentnews.org/article.pl?sid=26/04/06/2247253&amp;from=rss)
* [2026-04-08, 01:12:00](https://soylentnews.org/article.pl?sid=26/04/06/2246200&amp;from=rss) - [Astronomers Say Recent Rash of Meteor Sightings ‘Warrants Serious Investigation’](https://soylentnews.org/article.pl?sid=26/04/06/2246200&amp;from=rss)
* [2026-04-07, 20:28:00](https://soylentnews.org/article.pl?sid=26/04/05/0859242&amp;from=rss) - [Google&apos;s New Compression Drastically Shrinks AI Memory Use While Quietly Speeding Up Performance](https://soylentnews.org/article.pl?sid=26/04/05/0859242&amp;from=rss)
* [2026-04-07, 15:43:00](https://soylentnews.org/article.pl?sid=26/04/05/0854218&amp;from=rss) - [When Earth&apos;s Magnetic Field Took its Time Flipping](https://soylentnews.org/article.pl?sid=26/04/05/0854218&amp;from=rss)
* [2026-04-07, 11:01:00](https://soylentnews.org/article.pl?sid=26/04/05/0852233&amp;from=rss) - [$500 Fiber Optic HDMI Cable Delivers Flawless 48 Gbps Performance Across a Staggering 990 Feet](https://soylentnews.org/article.pl?sid=26/04/05/0852233&amp;from=rss)
* [2026-04-07, 06:18:00](https://soylentnews.org/article.pl?sid=26/04/05/0849255&amp;from=rss) - [The Brain Uses Eye Movements to See in 3D](https://soylentnews.org/article.pl?sid=26/04/05/0849255&amp;from=rss)
* [2026-04-07, 02:09:45](https://news.ycombinator.com/item?id=47669923) - [Clojure on Fennel Part One: Persistent Data Structures](https://andreyor.st/posts/2026-04-07-clojure-on-fennel-part-one-persistent-data-structures/)
* [2026-04-07, 01:33:00](https://soylentnews.org/article.pl?sid=26/04/05/0335237&amp;from=rss) - [RIP Mac Pro: Apple Officially Kills its Tower Computer](https://soylentnews.org/article.pl?sid=26/04/05/0335237&amp;from=rss)
