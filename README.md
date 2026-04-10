# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Innovations and Tools

* [Watgo – A WebAssembly Toolkit for Go](https://eli.thegreenplace.net/2026/watgo-a-webassembly-toolkit-for-go/) ([Comments](https://news.ycombinator.com/item?id=47722262))

* [Show HN: A WYSIWYG word processor in Python](https://codeberg.org/chrisecker/miniword) ([Comments](https://news.ycombinator.com/item?id=47722011))

* [Show HN: FluidCAD – Parametric CAD with JavaScript](https://fluidcad.io/) ([Comments](https://news.ycombinator.com/item?id=47721997))

* [Meet Kiki - an array language](https://eli.li/kiki) ([Comments](https://lobste.rs/s/cwxvlh/meet_kiki_array_language))

* [Ursa - a new Iceberg-first storage engine for Kafka](https://topicpartition.io/blog/ursa-a-new-lakehouse-first-storage-engine-for-kafka) ([Comments](https://lobste.rs/s/lnicis/ursa_new_iceberg_first_storage_engine_for))

## Privacy, Security, and Encryption

* [FBI Extracts Suspect's Deleted Signal Messages Saved In iPhone Notification Data](https://mobile.slashdot.org/story/26/04/10/1656218/fbi-extracts-suspects-deleted-signal-messages-saved-in-iphone-notification-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=47722262))

* [Google Rolls Out Gmail End-To-End Encryption On Mobile Devices](https://it.slashdot.org/story/26/04/10/1620217/google-rolls-out-gmail-end-to-end-encryption-on-mobile-devices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://lobste.rs/s/kfm1ph/honest_climate_case_for_ai))

* [JSON Formatter Chrome Plugin Now Closed and Injecting Adware](https://github.com/callumlocke/json-formatter) ([Comments](https://news.ycombinator.com/item?id=47721946))

* [Protecting Cookies with Device Bound Session Credentials](https://security.googleblog.com/2026/04/protecting-cookies-with-device-bound.html) ([Comments](https://lobste.rs/s/nyorr5/protecting_cookies_with_device_bound))

* [Capsicum vs seccomp: Process Sandboxing](https://vivianvoss.net/blog/capsicum-vs-seccomp) ([Comments](https://lobste.rs/s/hbirya/capsicum_vs_seccomp_process_sandboxing))

## Government and Infrastructure

* [France's Government Is Ditching Windows For Linux](https://linux.slashdot.org/story/26/04/10/1545234/frances-government-is-ditching-windows-for-linux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=47719486))

* [HBO Obtains DMCA Subpoena to Unmask 'Euphoria' Spoiler Account on X](https://torrentfreak.com/hbo-obtains-dmca-subpoena-to-unmask-euphoria-spoiler-account-on-x/) ([Comments](https://news.ycombinator.com/item?id=47721207))

* [Meta Removes Ads For Social Media Addiction Litigation](https://meta.slashdot.org/story/26/04/10/0113243/meta-removes-ads-for-social-media-addiction-litigation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=47716490))

## Science and Research

* [Particles Seen Emerging From Empty Space For First Time](https://science.slashdot.org/story/26/04/10/018227/particles-seen-emerging-from-empty-space-for-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=47722262))

* [Researchers Discover How to Dampen Electronic Noise Using Nanowires](https://soylentnews.org/article.pl?sid=26/04/08/1917256&amp;from=rss) ([Comments](https://news.ycombinator.com/item?id=47714273))

* [Penguin 'Toxicologists' Find PFAS Chemicals in Remote Patagonia](https://www.ucdavis.edu/health/news/penguin-toxicologists-find-pfas-chemicals-remote-patagonia) ([Comments](https://news.ycombinator.com/item?id=47714273))

* [A new trick brings stability to quantum operations](https://ethz.ch/en/news-and-events/eth-news/news/2026/04/a-new-trick-brings-stability-to-quantum-operations.html) ([Comments](https://news.ycombinator.com/item?id=47713495))

* [The Brain Uses Eye Movements to See in 3D](https://soylentnews.org/article.pl?sid=26/04/05/0849255&amp;from=rss) ([Comments](https://news.ycombinator.com/item?id=47781701))

## Artificial Intelligence and Machine Learning

* [AI Is Coming for Car Salesmen](https://tech.slashdot.org/story/26/04/10/0123204/ai-is-coming-for-car-salesmen?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://lobste.rs/s/kfm1ph/honest_climate_case_for_ai))

* [The Honest Climate Case for AI](https://dev.to/dcc/the-honest-climate-case-for-ai-5hg5) ([Comments](https://soylentnews.org/article.pl?sid=26/04/08/197228))

* [Bluesky April 2026 Outage Post-Mortem](https://pckt.blog/b/jcalabro/april-2026-outage-post-mortem-219ebg2) ([Comments](https://news.ycombinator.com/item?id=47713727))

* [Testing Suggests Google&apos;s AI Overviews Tell Millions of Lies Per Hour](https://soylentnews.org/article.pl?sid=26/04/details....)]

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

* [2026-04-10, 19:03:39](https://news.ycombinator.com/item?id=47722262) - [Watgo – A WebAssembly Toolkit for Go](https://eli.thegreenplace.net/2026/watgo-a-webassembly-toolkit-for-go/)
* [2026-04-10, 19:00:00](https://mobile.slashdot.org/story/26/04/10/1656218/fbi-extracts-suspects-deleted-signal-messages-saved-in-iphone-notification-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FBI Extracts Suspect&apos;s Deleted Signal Messages Saved In iPhone Notification Data](https://mobile.slashdot.org/story/26/04/10/1656218/fbi-extracts-suspects-deleted-signal-messages-saved-in-iphone-notification-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-10, 18:40:34](https://news.ycombinator.com/item?id=47722011) - [Show HN: A WYSIWYG word processor in Python](https://codeberg.org/chrisecker/miniword)
* [2026-04-10, 18:39:19](https://news.ycombinator.com/item?id=47721997) - [Show HN: FluidCAD – Parametric CAD with JavaScript](https://fluidcad.io/)
* [2026-04-10, 18:34:55](https://news.ycombinator.com/item?id=47721946) - [JSON Formatter Chrome Plugin Now Closed and Injecting Adware](https://github.com/callumlocke/json-formatter)
* [2026-04-10, 18:00:00](https://news.slashdot.org/story/26/04/10/1640225/google-news-now-prominently-featuring-polymarket-bets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google News Now Prominently Featuring Polymarket Bets](https://news.slashdot.org/story/26/04/10/1640225/google-news-now-prominently-featuring-polymarket-bets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-10, 17:53:58](https://news.ycombinator.com/item?id=47721516) - [\&quot;Not Even Government Agencies\&quot; - Proton&apos;s misleading marketing](https://blog.ppb1701.com/not-even-government-agencies)
* [2026-04-10, 17:41:38](https://lobste.rs/s/k11wgv/difficulty_making_sure_your_website_is) - [The difficulty of making sure your website is broken](https://letsencrypt.org/2026/04/10/test-sites.html)
* [2026-04-10, 17:32:45](https://lobste.rs/s/ggum7f/put_your_ssh_keys_your_tpm_chip) - [Put your SSH keys in your TPM chip](https://raymii.org/s/tutorials/Put_your_SSH_keys_in_your_TPM_chip.html)
* [2026-04-10, 17:30:35](https://lobste.rs/s/cwxvlh/meet_kiki_array_language) - [Meet Kiki - an array language](https://eli.li/kiki)
* [2026-04-10, 17:27:07](https://news.ycombinator.com/item?id=47721207) - [HBO Obtains DMCA Subpoena to Unmask &apos;Euphoria&apos; Spoiler Account on X](https://torrentfreak.com/hbo-obtains-dmca-subpoena-to-unmask-euphoria-spoiler-account-on-x/)
* [2026-04-10, 17:01:07](https://news.ycombinator.com/item?id=47720918) - [Bild AI (YC W25) Is Hiring a Founding Product Engineer](https://www.ycombinator.com/companies/bild-ai/jobs/dDMaxVN-founding-product-engineer)
* [2026-04-10, 17:00:00](https://it.slashdot.org/story/26/04/10/1620217/google-rolls-out-gmail-end-to-end-encryption-on-mobile-devices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Rolls Out Gmail End-To-End Encryption On Mobile Devices](https://it.slashdot.org/story/26/04/10/1620217/google-rolls-out-gmail-end-to-end-encryption-on-mobile-devices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-10, 16:53:55](https://news.ycombinator.com/item?id=47720827) - [A compelling title that is cryptic enough to get you to take action on it](https://ericwbailey.website/published/a-compelling-title-that-is-cryptic-enough-to-get-you-to-take-action-on-it/)
* [2026-04-10, 16:45:40](https://news.ycombinator.com/item?id=47720719) - [The difficulty of making sure your website is broken](https://letsencrypt.org/2026/04/10/test-sites.html)
* [2026-04-10, 16:22:26](https://news.ycombinator.com/item?id=47720419) - [Industrial design files for Keychron keyboards and mice](https://github.com/Keychron/Keychron-Keyboards-Hardware-Design)
* [2026-04-10, 16:22:13](https://news.ycombinator.com/item?id=47720418) - [Launch HN: Twill.ai (YC S25) – Delegate to cloud agents, get back PRs](https://twill.ai)
* [2026-04-10, 16:00:00](https://linux.slashdot.org/story/26/04/10/1545234/frances-government-is-ditching-windows-for-linux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [France&apos;s Government Is Ditching Windows For Linux](https://linux.slashdot.org/story/26/04/10/1545234/frances-government-is-ditching-windows-for-linux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-10, 15:55:34](https://lobste.rs/s/lnicis/ursa_new_iceberg_first_storage_engine_for) - [Ursa - a new Iceberg-first storage engine for Kafka](https://topicpartition.io/blog/ursa-a-new-lakehouse-first-storage-engine-for-kafka)
* [2026-04-10, 15:51:41](https://news.ycombinator.com/item?id=47719975) - [Bluesky April 2026 Outage Post-Mortem](https://pckt.blog/b/jcalabro/april-2026-outage-post-mortem-219ebg2)
* [2026-04-10, 15:49:52](https://news.ycombinator.com/item?id=47719942) - [WireGuard makes new Windows release following Microsoft signing resolution](https://lists.zx2c4.com/pipermail/wireguard/2026-April/009561.html)
* [2026-04-10, 15:41:05](https://lobste.rs/s/hbirya/capsicum_vs_seccomp_process_sandboxing) - [Capsicum vs seccomp: Process Sandboxing](https://vivianvoss.net/blog/capsicum-vs-seccomp)
* [2026-04-10, 15:37:28](https://news.ycombinator.com/item?id=47719740) - [1D Chess](https://rowan441.github.io/1dchess/chess.html)
* [2026-04-10, 15:28:24](https://news.ycombinator.com/item?id=47719602) - [You can&apos;t trust macOS Privacy and Security settings](https://eclecticlight.co/2026/04/10/why-you-cant-trust-privacy-security/)
* [2026-04-10, 15:20:48](https://news.ycombinator.com/item?id=47719486) - [France to ditch Windows for Linux to reduce reliance on US tech](https://techcrunch.com/2026/04/10/france-to-ditch-windows-for-linux-to-reduce-reliance-on-us-tech/)
* [2026-04-10, 15:06:51](https://news.ycombinator.com/item?id=47719274) - [Helium Is Hard to Replace](https://www.construction-physics.com/p/helium-is-hard-to-replace)
* [2026-04-10, 15:05:46](https://lobste.rs/s/kfm1ph/honest_climate_case_for_ai) - [The Honest Climate Case for AI](https://dev.to/dcc/the-honest-climate-case-for-ai-5hg5)
* [2026-04-10, 15:00:00](https://tech.slashdot.org/story/26/04/10/0123204/ai-is-coming-for-car-salesmen?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Is Coming for Car Salesmen](https://tech.slashdot.org/story/26/04/10/0123204/ai-is-coming-for-car-salesmen?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-10, 14:53:00](https://soylentnews.org/article.pl?sid=26/04/09/065206&amp;from=rss) - [Debian’s APT 3.2 Released with History, Undo, Redo, and Rollback Support](https://soylentnews.org/article.pl?sid=26/04/09/065206&amp;from=rss)
* [2026-04-10, 14:42:04](https://news.ycombinator.com/item?id=47718891) - [Supply chain nightmare: How Rust will be attacked and what we can do to mitigate](https://kerkour.com/rust-supply-chain-nightmare)
* [2026-04-10, 14:31:31](https://lobste.rs/s/1sqv11/selective_test_execution_at_stripe_fast) - [Selective Test Execution at Stripe: Fast CI for a 50M-line Ruby monorepo](https://stripe.dev/blog/selective-test-execution-at-stripe-fast-ci-for-a-50m-line-ruby-monorepo)
* [2026-04-10, 13:34:03](https://lobste.rs/s/xfbwic/why_aren_t_we_uv_yet) - [Why Aren&apos;t We uv Yet?](https://aleyan.com/blog/2026-why-arent-we-uv-yet)
* [2026-04-10, 13:29:20](https://news.ycombinator.com/item?id=47717847) - [CPU-Z and HWMonitor compromised](https://www.theregister.com/2026/04/10/cpuid_site_hijacked/)
* [2026-04-10, 12:55:19](https://lobste.rs/s/gfuvjw/git_repositories_as_module_system) - [Git Repositories as a Module System](https://alnewkirk.com/projects/git-from)
* [2026-04-10, 11:38:16](https://lobste.rs/s/pulywh/watgo_webassembly_toolkit_for_go) - [watgo - a WebAssembly Toolkit for Go](https://eli.thegreenplace.net/2026/watgo-a-webassembly-toolkit-for-go/)
* [2026-04-10, 11:29:04](https://news.ycombinator.com/item?id=47716490) - [FBI used iPhone notification data to retrieve deleted Signal messages](https://9to5mac.com/2026/04/09/fbi-used-iphone-notification-data-to-retrieve-deleted-signal-messages/)
* [2026-04-10, 11:00:00](https://meta.slashdot.org/story/26/04/10/0113243/meta-removes-ads-for-social-media-addiction-litigation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Removes Ads For Social Media Addiction Litigation](https://meta.slashdot.org/story/26/04/10/0113243/meta-removes-ads-for-social-media-addiction-litigation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-10, 10:29:37](https://lobste.rs/s/3ukqqt/installing_every_firefox_extension) - [Installing every* Firefox extension](https://jack.cab/blog/every-firefox-extension/)
* [2026-04-10, 10:07:00](https://soylentnews.org/article.pl?sid=26/04/08/1917256&amp;from=rss) - [Researchers Discover How to Dampen Electronic Noise Using Nanowires](https://soylentnews.org/article.pl?sid=26/04/08/1917256&amp;from=rss)
* [2026-04-10, 09:53:52](https://lobste.rs/s/iq7i4f/favorite_programmer_website) - [Favorite programmer website?](https://lobste.rs/s/iq7i4f/favorite_programmer_website)
* [2026-04-10, 09:50:37](https://lobste.rs/s/fqk6re/repository_pattern_with_hygienic_macros) - [Repository Pattern with Hygienic Macros in Scheme – Lisp](https://jointhefreeworld.org/blog/articles/lisps/functional-repository-pattern-in-scheme-with-macros/index.html)
* [2026-04-10, 08:47:37](https://lobste.rs/s/qsoxgf/acyclic_e_graph_cranelift_s_mid_end) - [The acyclic e-graph: Cranelift&apos;s mid-end optimizer](https://cfallin.org/blog/2026/04/09/aegraph/)
* [2026-04-10, 08:25:47](https://lobste.rs/s/nyorr5/protecting_cookies_with_device_bound) - [Protecting Cookies with Device Bound Session Credentials](https://security.googleblog.com/2026/04/protecting-cookies-with-device-bound.html)
* [2026-04-10, 07:59:27](https://lobste.rs/s/rcom8t/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/rcom8t/what_are_you_doing_this_weekend)
* [2026-04-10, 07:35:09](https://lobste.rs/s/0vuzbv/maki_efficient_coder_ai_agent) - [maki - the efficient coder (AI agent)](https://maki.sh/)
* [2026-04-10, 07:00:00](https://science.slashdot.org/story/26/04/10/018227/particles-seen-emerging-from-empty-space-for-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Particles Seen Emerging From Empty Space For First Time](https://science.slashdot.org/story/26/04/10/018227/particles-seen-emerging-from-empty-space-for-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-10, 06:15:46](https://news.ycombinator.com/item?id=47714273) - [Penguin &apos;Toxicologists&apos; Find PFAS Chemicals in Remote Patagonia](https://www.ucdavis.edu/health/news/penguin-toxicologists-find-pfas-chemicals-remote-patagonia)
* [2026-04-10, 05:23:00](https://soylentnews.org/article.pl?sid=26/04/08/1916208&amp;from=rss) - [White House Seeks Deep NASA Cuts as Artemis II Breaks Spaceflight Record](https://soylentnews.org/article.pl?sid=26/04/08/1916208&amp;from=rss)
* [2026-04-10, 04:04:57](https://news.ycombinator.com/item?id=47713495) - [A new trick brings stability to quantum operations](https://ethz.ch/en/news-and-events/eth-news/news/2026/04/a-new-trick-brings-stability-to-quantum-operations.html)
* [2026-04-10, 03:30:00](https://news.slashdot.org/story/26/04/09/215206/us-fertility-rate-falls-to-all-time-low?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Fertility Rate Falls To All-Time Low](https://news.slashdot.org/story/26/04/09/215206/us-fertility-rate-falls-to-all-time-low?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-10, 03:29:03](https://lobste.rs/s/tmbbhl/installing_openbsd_on_pomera_dm250_xy) - [Installing OpenBSD on the Pomera DM250{,XY?}](https://jcs.org/2026/04/09/openbsd-dm250)
* [2026-04-10, 02:27:14](https://lobste.rs/s/tbud4j/incremental_compilation_with_llvm) - [Incremental compilation with LLVM](https://ziglang.org/devlog/2026/#2026-04-08)
* [2026-04-10, 02:01:48](https://news.ycombinator.com/item?id=47712718) - [I still prefer MCP over skills](https://david.coffee/i-still-prefer-mcp-over-skills/)
* [2026-04-10, 01:52:58](https://news.ycombinator.com/item?id=47712656) - [We&apos;ve raised $17M to build what comes after Git](https://blog.gitbutler.com/series-a)
* [2026-04-10, 00:37:00](https://soylentnews.org/article.pl?sid=26/04/08/1912232&amp;from=rss) - [&apos;Voorhees Law&apos; Explains Why the Slower Car Often Catches up](https://soylentnews.org/article.pl?sid=26/04/08/1912232&amp;from=rss)
* [2026-04-09, 23:00:00](https://tech.slashdot.org/story/26/04/09/2053215/negative-views-of-broadcom-driving-thousands-of-vmware-migrations-rival-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Negative&apos; Views of Broadcom Driving Thousands of VMware Migrations, Rival Says](https://tech.slashdot.org/story/26/04/09/2053215/negative-views-of-broadcom-driving-thousands-of-vmware-migrations-rival-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-09, 22:00:00](https://tech.slashdot.org/story/26/04/09/2043257/mozilla-accuses-microsoft-of-sabotaging-firefox-with-windows-and-copilot-tactics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mozilla Accuses Microsoft of Sabotaging Firefox With Windows and Copilot Tactics](https://tech.slashdot.org/story/26/04/09/2043257/mozilla-accuses-microsoft-of-sabotaging-firefox-with-windows-and-copilot-tactics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-09, 21:05:30](https://lobste.rs/s/wnizjm/my_login_shell_assembly) - [My Login Shell in Assembly](https://isene.org/2026/04/Bare.html)
* [2026-04-09, 21:00:00](https://hardware.slashdot.org/story/26/04/09/1916209/amazon-may-sell-trainium-ai-chips-to-third-parties-in-shot-at-nvidia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon May Sell Trainium AI Chips To Third Parties In Shot At Nvidia](https://hardware.slashdot.org/story/26/04/09/1916209/amazon-may-sell-trainium-ai-chips-to-third-parties-in-shot-at-nvidia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-09, 20:00:00](https://it.slashdot.org/story/26/04/09/194221/openai-to-limit-new-model-release-on-cybersecurity-fears?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI To Limit New Model Release On Cybersecurity Fears](https://it.slashdot.org/story/26/04/09/194221/openai-to-limit-new-model-release-on-cybersecurity-fears?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-09, 19:52:00](https://soylentnews.org/article.pl?sid=26/04/08/198248&amp;from=rss) - [Testing Suggests Google&apos;s AI Overviews Tell Millions of Lies Per Hour](https://soylentnews.org/article.pl?sid=26/04/08/198248&amp;from=rss)
* [2026-04-09, 19:00:00](https://yro.slashdot.org/story/26/04/09/1720203/hacker-steals-10-petabytes-of-data-from-chinas-tianjin-supercomputer-center?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hacker Steals 10 Petabytes of Data From China&apos;s Tianjin Supercomputer Center](https://yro.slashdot.org/story/26/04/09/1720203/hacker-steals-10-petabytes-of-data-from-chinas-tianjin-supercomputer-center?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-09, 18:33:20](https://lobste.rs/s/pli6nn/elastic_tabstops_2006) - [Elastic tabstops (2006)](https://nick-gravgaard.com/elastic-tabstops/)
* [2026-04-09, 18:00:00](https://yro.slashdot.org/story/26/04/09/1656219/eff-is-leaving-x?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EFF Is Leaving X](https://yro.slashdot.org/story/26/04/09/1656219/eff-is-leaving-x?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-09, 17:00:00](https://tech.slashdot.org/story/26/04/09/1644208/waymo-is-offering-to-help-cities-fix-their-potholes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Waymo Is Offering To Help Cities Fix Their Potholes](https://tech.slashdot.org/story/26/04/09/1644208/waymo-is-offering-to-help-cities-fix-their-potholes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-09, 15:43:25](https://news.ycombinator.com/item?id=47705187) - [The best seat in town](https://www.torched.la/the-best-seat-in-town/)
* [2026-04-09, 15:05:00](https://soylentnews.org/article.pl?sid=26/04/08/197218&amp;from=rss) - [Social Media is Virtually Useless for Publishers to Attract Readers](https://soylentnews.org/article.pl?sid=26/04/08/197218&amp;from=rss)
* [2026-04-09, 12:54:44](https://lobste.rs/s/s51wss/you_can_absolutely_have_rss_dependent) - [You can absolutely have an RSS dependent website in 2026](https://matduggan.com/you-can-absolutely-have-an-rss-dependent-website-in-2026/)
* [2026-04-09, 12:10:56](https://lobste.rs/s/j2l2ya/let_s_talk_about_llms) - [Let’s talk about LLMs](https://www.b-list.org/weblog/2026/apr/09/llms/)
* [2026-04-09, 11:26:58](https://lobste.rs/s/1iwyg7/til_helix_typst_are_match_made_heaven) - [TIL that Helix and Typst are a match made in heaven](https://ergaster.org/til/helix-typst-match-in-heaven/)
* [2026-04-09, 10:19:00](https://soylentnews.org/article.pl?sid=26/04/08/0231247&amp;from=rss) - [Plan 9 is a Uniquely Complete Operating System](https://soylentnews.org/article.pl?sid=26/04/08/0231247&amp;from=rss)
* [2026-04-09, 08:55:25](https://lobste.rs/s/gns27z/what_are_your_programming_hunches_you) - [What are your programming \&quot;hunches\&quot; you haven&apos;t yet investigated?](https://lobste.rs/s/gns27z/what_are_your_programming_hunches_you)
* [2026-04-09, 05:38:00](https://soylentnews.org/article.pl?sid=26/04/07/2126219&amp;from=rss) - [Big Tech Knows New AI Models Ripe For Cyberattacks — But Plans To Release Them Anyway](https://soylentnews.org/article.pl?sid=26/04/07/2126219&amp;from=rss)
* [2026-04-09, 00:56:00](https://soylentnews.org/article.pl?sid=26/04/07/2124219&amp;from=rss) - [OkCupid Gave 3M Users’ Photos to AI Firm, FTC Says](https://soylentnews.org/article.pl?sid=26/04/07/2124219&amp;from=rss)
* [2026-04-08, 20:11:00](https://soylentnews.org/article.pl?sid=26/04/06/234206&amp;from=rss) - [Sweden Goes Back to Basics, Swapping Screens for Books in the Classroom](https://soylentnews.org/article.pl?sid=26/04/06/234206&amp;from=rss)
* [2026-04-08, 14:19:39](https://news.ycombinator.com/item?id=47690609) - [Deterministic Primality Testing for Limited Bit Width](https://www.jeremykun.com/2026/04/07/deterministic-miller-rabin/)
* [2026-04-08, 10:48:00](https://soylentnews.org/article.pl?sid=26/04/06/2256234&amp;from=rss) - [The Three Ways Big Tech Made The Human Mind Weaker](https://soylentnews.org/article.pl?sid=26/04/06/2256234&amp;from=rss)
* [2026-04-08, 07:10:02](https://news.ycombinator.com/item?id=47686431) - [C++: Freestanding Standard Library](https://www.sandordargo.com/blog/2026/04/08/cpp-freestanding)
* [2026-04-08, 05:56:00](https://soylentnews.org/article.pl?sid=26/04/06/2247253&amp;from=rss) - [Democracy Was Not Just a Greco-Roman Affair in the Ancient World](https://soylentnews.org/article.pl?sid=26/04/06/2247253&amp;from=rss)
* [2026-04-08, 01:12:00](https://soylentnews.org/article.pl?sid=26/04/06/2246200&amp;from=rss) - [Astronomers Say Recent Rash of Meteor Sightings ‘Warrants Serious Investigation’](https://soylentnews.org/article.pl?sid=26/04/06/2246200&amp;from=rss)
* [2026-04-07, 21:41:06](https://news.ycombinator.com/item?id=47681701) - [RSoC 2026: A new CPU scheduler for Redox OS](https://www.redox-os.org/news/rsoc-dwrr/)
* [2026-04-07, 20:28:00](https://soylentnews.org/article.pl?sid=26/04/05/0859242&amp;from=rss) - [Google&apos;s New Compression Drastically Shrinks AI Memory Use While Quietly Speeding Up Performance](https://soylentnews.org/article.pl?sid=26/04/05/0859242&amp;from=rss)
* [2026-04-07, 15:43:00](https://soylentnews.org/article.pl?sid=26/04/05/0854218&amp;from=rss) - [When Earth&apos;s Magnetic Field Took its Time Flipping](https://soylentnews.org/article.pl?sid=26/04/05/0854218&amp;from=rss)
* [2026-04-07, 14:41:08](https://news.ycombinator.com/item?id=47676174) - [Mysteries of Dropbox: Testing of a Distributed Sync Service (2016) [pdf]](https://www.cis.upenn.edu/~bcpierce/papers/mysteriesofdropbox.pdf)
* [2026-04-07, 11:01:00](https://soylentnews.org/article.pl?sid=26/04/05/0852233&amp;from=rss) - [$500 Fiber Optic HDMI Cable Delivers Flawless 48 Gbps Performance Across a Staggering 990 Feet](https://soylentnews.org/article.pl?sid=26/04/05/0852233&amp;from=rss)
* [2026-04-07, 06:18:00](https://soylentnews.org/article.pl?sid=26/04/05/0849255&amp;from=rss) - [The Brain Uses Eye Movements to See in 3D](https://soylentnews.org/article.pl?sid=26/04/05/0849255&amp;from=rss)
* [2026-04-07, 02:09:45](https://news.ycombinator.com/item?id=47669923) - [Clojure on Fennel Part One: Persistent Data Structures](https://andreyor.st/posts/2026-04-07-clojure-on-fennel-part-one-persistent-data-structures/)
* [2026-04-07, 01:33:00](https://soylentnews.org/article.pl?sid=26/04/05/0335237&amp;from=rss) - [RIP Mac Pro: Apple Officially Kills its Tower Computer](https://soylentnews.org/article.pl?sid=26/04/05/0335237&amp;from=rss)
* [2026-04-06, 20:52:00](https://soylentnews.org/article.pl?sid=26/04/05/0233233&amp;from=rss) - [Pentagon Formalizes Palantir&apos;s Maven AI as a Core Military System With Multi-Year Funding](https://soylentnews.org/article.pl?sid=26/04/05/0233233&amp;from=rss)
* [2026-04-06, 16:11:00](https://soylentnews.org/article.pl?sid=26/04/05/0226201&amp;from=rss) - [Claude Source Code Leaked?  But Watch Out for What You Might be Downloading](https://soylentnews.org/article.pl?sid=26/04/05/0226201&amp;from=rss)
* [2026-04-06, 11:23:00](https://soylentnews.org/article.pl?sid=26/04/05/0214222&amp;from=rss) - [Fossils Reveal Many Complex Animals Existed Before the Cambrian Explosion](https://soylentnews.org/article.pl?sid=26/04/05/0214222&amp;from=rss)
* [2026-04-06, 06:35:00](https://soylentnews.org/article.pl?sid=26/04/05/026223&amp;from=rss) - [AMD&apos;s New Desktop CPU Oozes Cache Out of All 16 Cores](https://soylentnews.org/article.pl?sid=26/04/05/026223&amp;from=rss)
* [2026-04-06, 01:54:00](https://soylentnews.org/article.pl?sid=26/04/05/021235&amp;from=rss) - [The &apos;Engineering of Addiction&apos;  - 3 Ways Meta and YouTube Are Claimed to Have Harmed  Users](https://soylentnews.org/article.pl?sid=26/04/05/021235&amp;from=rss)
