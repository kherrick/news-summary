# [News Summary](https://kherrick.github.io/news-summary/)

## Scientific and Technological Advancements

* [New Type of Supernova Detected as Black Hole Causes Star To Explode](https://science.slashdot.org/story/25/08/14/1916235/new-type-of-supernova-detected-as-black-hole-causes-star-to-explode?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [LazyLog: A New Shared Log Abstraction for Low-Latency Applications](https://ramalagappan.github.io/pdfs/papers/lazylog.pdf)

* [Gemma 3 270M: Compact model for hyper-efficient AI](https://developers.googleblog.com/en/introducing-gemma-3-270m/)

* [NGINX Introduces Native Support for ACME Protocol](https://blog.nginx.org/blog/native-support-for-acme-protocol)

* [Japanese Scientists Develop Artificial Blood](https://soylentnews.org/article.pl?sid=25/08/09/0850232&from=rss)

## AI and Ethical Concerns

* [Meta's AI Rules Have Let Bots Hold 'Sensual' Chats With Kids, Offer False Medical Info](https://tech.slashdot.org/story/25/08/14/1759222/metas-ai-rules-have-let-bots-hold-sensual-chats-with-kids-offer-false-medical-info?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [The Head of ChatGPT Won't Rule Out Adding Ads](https://slashdot.org/story/25/08/14/1852218/the-head-of-chatgpt-wont-rule-out-adding-ads?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Why LLMs Can't Really Build Software](https://zed.dev/blog/why-llms-cant-build-software)

* [Streaming Services Are Driving Viewers Back to Piracy](https://www.theguardian.com/film/2025/aug/14/cant-pay-wont-pay-impoverished-streaming-services-are-driving-viewers-back-to-piracy)

## Environmental and Societal Issues

* [Plastic Pollution Treaty Talks Deadlocked as Negotiations Draw To a Close](https://news.slashdot.org/story/25/08/14/198211/plastic-pollution-treaty-talks-deadlocked-as-negotiations-draw-to-a-close?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Big Tech's AI Data Centers Are Driving Up Electricity Bills for Everyone](https://hardware.slashdot.org/story/25/08/14/1655246/big-techs-ai-data-centers-are-driving-up-electricity-bills-for-everyone?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Reddit Bars Internet Archive From its Website, Sparking Access Concerns](https://soylentnews.org/article.pl?sid=25/08/13/1127246&from=rss)

* [Denmark Zoo: Donate Unwanted Pets to Feed Predators and Imitate ‘Natural Food Chain’](https://soylentnews.org/article.pl?sid=25/08/09/0847239&from=rss)

## Cybersecurity and Software Developments

* [I Made a Real-Time C/C++/Rust Build Visualizer](https://danielchasehooper.com/posts/syscall-build-snooping/)

* [NaN-Propagation: A Novel Method for Sparsity Detection in Black-Box Computational Functions](https://arxiv.org/abs/2507.23186)

* [Why Cars Still Don't Have Airless Tires, Yet](https://science.slashdot.org/story/25/08/14/1733234/why-cars-still-dont-have-airless-tires-yet?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Microsoft Recall Exposes Passwords and Banking Data](https://soylentnews.org/article.pl?sid=25/08/13/1139229&from=rss)

* [Cross-Site Request Forgery](https://words.filippo.io/csrf/)

## Historical Perspectives and Educational Insights

* [Airbrush Art of the 80s Was Chrome-tastic (2015)](https://www.coolandcollected.com/airbrush-art-of-the-80s-was-chrome-tastic/)

* [1976 Soviet Edition of 'The Hobbit' (2015)](https://mashable.com/archive/soviet-hobbit)

* [Steve Wozniak: Life to me was never about accomplishment, but about happiness](https://yro.slashdot.org/comments.pl?sid=23765914&cid=65583466)

* [Plan 9 Desktop Guide](https://web.archive.org/web/20250725161816/https://pspodcasting.net/dan/blog/2019/plan9_desktop.html)

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

* [2025-08-14, 21:26:00](https://slashdot.org/story/25/08/14/1928226/paypal-no-longer-available-for-steam-purchases-outside-major-currency-zones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [PayPal No Longer Available for Steam Purchases Outside Major Currency Zones](https://slashdot.org/story/25/08/14/1928226/paypal-no-longer-available-for-steam-purchases-outside-major-currency-zones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-14, 21:19:00](https://news.ycombinator.com/item?id=44905808) - [We Rewrote the Ghostty GTK Application](https://mitchellh.com/writing/ghostty-gtk-rewrite)
* [2025-08-14, 21:06:37](https://lobste.rs/s/ms94ja/what_is_go_proxy_even_doing) - [what is the go proxy even doing?](https://flak.tedunangst.com/post/what-is-the-go-proxy-even-doing)
* [2025-08-14, 21:01:04](https://news.ycombinator.com/item?id=44905647) - [OneSignal (YC S11) Is Hiring Engineers](https://onesignal.com/careers)
* [2025-08-14, 20:52:10](https://lobste.rs/s/zwz8ka/nan_propagation_novel_method_for) - [NaN-Propagation: A Novel Method for Sparsity Detection in Black-Box Computational Functions](https://arxiv.org/abs/2507.23186)
* [2025-08-14, 20:45:00](https://science.slashdot.org/story/25/08/14/1916235/new-type-of-supernova-detected-as-black-hole-causes-star-to-explode?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Type of Supernova Detected as Black Hole Causes Star To Explode](https://science.slashdot.org/story/25/08/14/1916235/new-type-of-supernova-detected-as-black-hole-causes-star-to-explode?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-14, 20:31:19](https://lobste.rs/s/zl41np/history_improvements_vacuum_postgresql) - [History of improvements in VACUUM in PostgreSQL (2023)](https://www.enterprisedb.com/postgres-tutorials/history-improvements-vacuum-postgresql)
* [2025-08-14, 20:06:30](https://lobste.rs/s/hfojix/syncing_with_postgres_logical) - [Syncing with Postgres: Logical Replication vs. ETL](https://www.paradedb.com/blog/etl_vs_logical_replication)
* [2025-08-14, 20:05:00](https://news.slashdot.org/story/25/08/14/198211/plastic-pollution-treaty-talks-deadlocked-as-negotiations-draw-to-a-close?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Plastic Pollution Treaty Talks Deadlocked as Negotiations Draw To a Close](https://news.slashdot.org/story/25/08/14/198211/plastic-pollution-treaty-talks-deadlocked-as-negotiations-draw-to-a-close?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-14, 20:01:33](https://news.ycombinator.com/item?id=44904974) - [Show HN: MCP Security Suite](https://github.com/NineSunsInc/mighty-security)
* [2025-08-14, 19:53:12](https://news.ycombinator.com/item?id=44904869) - [Airbrush art of the 80s was Chrome-tastic (2015)](https://www.coolandcollected.com/airbrush-art-of-the-80s-was-chrome-tastic/)
* [2025-08-14, 19:50:47](https://lobste.rs/s/ypcgpv/mixbox_natural_color_mixing_based_on_real) - [Mixbox - Natural Color Mixing Based on Real Pigments (2021)](https://scrtwpns.com/mixbox/)
* [2025-08-14, 19:30:00](https://games.slashdot.org/story/25/08/14/1859256/ex-playstation-boss-says-game-subscription-turns-developers-into-wage-slaves?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ex-PlayStation Boss Says Game Subscription Turns Developers Into &apos;Wage Slaves&apos;](https://games.slashdot.org/story/25/08/14/1859256/ex-playstation-boss-says-game-subscription-turns-developers-into-wage-slaves?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-14, 18:52:00](https://slashdot.org/story/25/08/14/1852218/the-head-of-chatgpt-wont-rule-out-adding-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Head of ChatGPT Won&apos;t Rule Out Adding Ads](https://slashdot.org/story/25/08/14/1852218/the-head-of-chatgpt-wont-rule-out-adding-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-14, 18:22:58](https://lobste.rs/s/1v1slg/jujutsu_with_radicle) - [Jujutsu with Radicle](https://radicle.xyz/2025/08/14/jujutsu-with-radicle)
* [2025-08-14, 18:19:42](https://news.ycombinator.com/item?id=44903803) - [Steve Wozniak: Life to me was never about accomplishment, but about happiness](https://yro.slashdot.org/comments.pl?sid=23765914&amp;cid=65583466)
* [2025-08-14, 18:10:00](https://tech.slashdot.org/story/25/08/14/1759222/metas-ai-rules-have-let-bots-hold-sensual-chats-with-kids-offer-false-medical-info?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta&apos;s AI Rules Have Let Bots Hold &apos;Sensual&apos; Chats With Kids, Offer False Medical Info](https://tech.slashdot.org/story/25/08/14/1759222/metas-ai-rules-have-let-bots-hold-sensual-chats-with-kids-offer-false-medical-info?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-14, 17:52:00](https://soylentnews.org/article.pl?sid=25/08/13/1344242&amp;from=rss) - [AOL is Discontinuing its Dial-Up Service](https://soylentnews.org/article.pl?sid=25/08/13/1344242&amp;from=rss)
* [2025-08-14, 17:50:23](https://lobste.rs/s/tuodvv/placing_arguments) - [Placing Arguments](https://blog.yoshuawuyts.com/placing-arguments/)
* [2025-08-14, 17:40:51](https://news.ycombinator.com/item?id=44903351) - [\&quot;Privacy preserving age verification\&quot; is bullshit](https://pluralistic.net/2025/08/14/bellovin/)
* [2025-08-14, 17:33:06](https://lobste.rs/s/kbxhp4/fun_with_finite_state_transducers) - [Fun with finite state transducers](https://blog.yossarian.net/2025/08/14/Fun-with-finite-state-transducers)
* [2025-08-14, 17:33:00](https://science.slashdot.org/story/25/08/14/1733234/why-cars-still-dont-have-airless-tires-yet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why Cars Still Don&apos;t Have Airless Tires, Yet](https://science.slashdot.org/story/25/08/14/1733234/why-cars-still-dont-have-airless-tires-yet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-14, 16:56:31](https://news.ycombinator.com/item?id=44902797) - [Streaming services are driving viewers back to piracy](https://www.theguardian.com/film/2025/aug/14/cant-pay-wont-pay-impoverished-streaming-services-are-driving-viewers-back-to-piracy)
* [2025-08-14, 16:55:00](https://hardware.slashdot.org/story/25/08/14/1655246/big-techs-ai-data-centers-are-driving-up-electricity-bills-for-everyone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Big Tech&apos;s AI Data Centers Are Driving Up Electricity Bills for Everyone](https://hardware.slashdot.org/story/25/08/14/1655246/big-techs-ai-data-centers-are-driving-up-electricity-bills-for-everyone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-14, 16:54:14](https://news.ycombinator.com/item?id=44902763) - [Bluesky: Updated Terms and Policies](https://bsky.social/about/blog/08-14-2025-updated-terms-and-policies)
* [2025-08-14, 16:13:29](https://news.ycombinator.com/item?id=44902227) - [Show HN: Modelence – Supabase for MongoDB](https://github.com/modelence/modelence)
* [2025-08-14, 16:10:00](https://news.slashdot.org/story/25/08/14/1610236/commissioner-of-canada-elections-will-explore-the-use-of-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Commissioner of Canada Elections Will &apos;Explore the Use&apos; of AI](https://news.slashdot.org/story/25/08/14/1610236/commissioner-of-canada-elections-will-explore-the-use-of-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-14, 16:08:36](https://news.ycombinator.com/item?id=44902148) - [Gemma 3 270M: Compact model for hyper-efficient AI](https://developers.googleblog.com/en/introducing-gemma-3-270m/)
* [2025-08-14, 16:06:55](https://news.ycombinator.com/item?id=44902127) - [I made a real-time C/C++/Rust build visualizer](https://danielchasehooper.com/posts/syscall-build-snooping/)
* [2025-08-14, 15:47:43](https://news.ycombinator.com/item?id=44901853) - [Show HN: OWhisper – Ollama for realtime speech-to-text](https://docs.hyprnote.com/owhisper/what-is-this)
* [2025-08-14, 15:44:55](https://lobste.rs/s/acbnix/why_llms_can_t_really_build_software) - [Why LLMs Can&apos;t Really Build Software](https://zed.dev/blog/why-llms-cant-build-software)
* [2025-08-14, 15:34:46](https://news.ycombinator.com/item?id=44901683) - [Show HN: I built a free alternative to Adobe Acrobat PDF viewer](https://github.com/embedpdf/embed-pdf-viewer)
* [2025-08-14, 15:30:00](https://slashdot.org/story/25/08/14/1531205/kodak-says-itll-figure-things-out-and-wont-shut-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Kodak Says It&apos;ll Figure Things Out and Won&apos;t Shut Down](https://slashdot.org/story/25/08/14/1531205/kodak-says-itll-figure-things-out-and-wont-shut-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-14, 15:24:53](https://news.ycombinator.com/item?id=44901528) - [Launch HN: Cyberdesk (YC S25) – Automate Windows legacy desktop apps](https://news.ycombinator.com/item?id=44901528)
* [2025-08-14, 14:53:44](https://lobste.rs/s/pm5vdm/enforce_proper_direnv_setup) - [Enforce Proper direnv Setup](https://joeyates.info/posts/enforce-proper-direnv-setup/)
* [2025-08-14, 14:42:00](https://tech.slashdot.org/story/25/08/14/1441240/microsoft-says-voice-will-emerge-as-primary-input-for-next-windows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Says Voice Will Emerge as Primary Input for Next Windows](https://tech.slashdot.org/story/25/08/14/1441240/microsoft-says-voice-will-emerge-as-primary-input-for-next-windows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-14, 14:10:15](https://lobste.rs/s/wyec76/lazylog_new_shared_log_abstraction_for) - [LazyLog: A New Shared Log Abstraction for Low-Latency Applications](https://ramalagappan.github.io/pdfs/papers/lazylog.pdf)
* [2025-08-14, 14:02:00](https://news.slashdot.org/story/25/08/14/142255/fintech-crypto-ceos-urge-us-president-to-block-banks-data-access-fees?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fintech, Crypto CEOs Urge US President To Block Banks&apos; Data-Access Fees](https://news.slashdot.org/story/25/08/14/142255/fintech-crypto-ceos-urge-us-president-to-block-banks-data-access-fees?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-14, 13:14:35](https://news.ycombinator.com/item?id=44899999) - [Blood oxygen monitoring returning to Apple Watch in the US](https://www.apple.com/newsroom/2025/08/an-update-on-blood-oxygen-for-apple-watch-in-the-us/)
* [2025-08-14, 13:03:00](https://soylentnews.org/article.pl?sid=25/08/13/1139229&amp;from=rss) - [Microsoft Recall Exposes Passwords and Banking Data](https://soylentnews.org/article.pl?sid=25/08/13/1139229&amp;from=rss)
* [2025-08-14, 13:00:00](https://it.slashdot.org/story/25/08/14/0238234/lenovos-pc-business-surges-to-15-quarter-high-with-ai-models-leading-the-charge?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Lenovo&apos;s PC Business Surges To 15-Quarter High With AI Models Leading The Charge](https://it.slashdot.org/story/25/08/14/0238234/lenovos-pc-business-surges-to-15-quarter-high-with-ai-models-leading-the-charge?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-14, 12:04:05](https://news.ycombinator.com/item?id=44899415) - [How to rig elections [video]](https://media.ccc.de/v/why2025-218-how-to-rig-elections)
* [2025-08-14, 12:01:48](https://lobste.rs/s/xzubsr/how_rig_elections) - [How to rig elections](https://media.ccc.de/v/why2025-218-how-to-rig-elections)
* [2025-08-14, 12:00:00](https://slashdot.org/story/25/08/14/0414234/co-founder-of-xai-departs-the-company?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Co-Founder of xAI Departs the Company](https://slashdot.org/story/25/08/14/0414234/co-founder-of-xai-departs-the-company?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-14, 11:56:20](https://news.ycombinator.com/item?id=44899339) - [New protein therapy shows promise as antidote for carbon monoxide poisoning](https://www.medschool.umaryland.edu/news/2025/new-protein-therapy-shows-promise-as-first-ever-antidote-for-carbon-monoxide-poisoning.html)
* [2025-08-14, 10:54:09](https://lobste.rs/s/nvt1zk/org_social_is_decentralized_social) - [Org-social is a decentralized social network that runs on an Org Mode](https://github.com/tanrax/org-social)
* [2025-08-14, 10:50:25](https://lobste.rs/s/vqd2oj/emacs_30_2_is_here) - [Emacs 30.2 is here](https://github.com/emacs-mirror/emacs/releases/tag/emacs-30.2)
* [2025-08-14, 10:00:00](https://yro.slashdot.org/story/25/08/14/0235234/data-brokers-are-hiding-their-opt-out-pages-from-google-search?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Data Brokers Are Hiding Their Opt-Out Pages From Google Search](https://yro.slashdot.org/story/25/08/14/0235234/data-brokers-are-hiding-their-opt-out-pages-from-google-search?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-14, 08:47:27](https://news.ycombinator.com/item?id=44898242) - [iPhone DevOps (2023)](https://clearsky.dev/blog/iphone-devops-ssh/)
* [2025-08-14, 08:22:00](https://soylentnews.org/article.pl?sid=25/08/13/1127246&amp;from=rss) - [Reddit Bars Internet Archive From its Website, Sparking Access Concerns](https://soylentnews.org/article.pl?sid=25/08/13/1127246&amp;from=rss)
* [2025-08-14, 07:42:44](https://lobste.rs/s/goxxao/optimizing_your_debian_13_desktop) - [Optimizing Your Debian 13 Desktop](https://teejeetech.com/2025/08/14/debian_13_tips/)
* [2025-08-14, 06:54:31](https://lobste.rs/s/y6abdu/taming_beast_comparing_jsonnet_dhall_cue) - [Taming the Beast: Comparing Jsonnet, Dhall, Cue](https://pv.wtf/posts/taming-the-beast)
* [2025-08-14, 04:57:08](https://lobste.rs/s/m434ps/nginx_introduces_native_support_for_acme) - [NGINX Introduces Native Support for ACME Protocol](https://blog.nginx.org/blog/native-support-for-acme-protocol)
* [2025-08-14, 03:37:00](https://soylentnews.org/article.pl?sid=25/08/12/180244&amp;from=rss) - [Debian 13 \&quot;Trixie\&quot; and Debian \&quot;Hurd 2025\&quot; Released](https://soylentnews.org/article.pl?sid=25/08/12/180244&amp;from=rss)
* [2025-08-14, 03:30:27](https://lobste.rs/s/cts5fi/modifying_other_people_s_software) - [Modifying Other People&apos;s Software](https://natkr.com/2025-08-14-modifying-other-peoples-software/)
* [2025-08-14, 01:12:00](https://lobste.rs/s/6s0n5d/cross_site_request_forgery) - [Cross-Site Request Forgery](https://words.filippo.io/csrf/)
* [2025-08-13, 23:03:16](https://news.ycombinator.com/item?id=44894910) - [What does Palantir actually do?](https://www.wired.com/story/palantir-what-the-company-does/)
* [2025-08-13, 22:56:00](https://soylentnews.org/article.pl?sid=25/08/12/1737238&amp;from=rss) - [Microsoft Sued for Discontinuing Windows 10 Support](https://soylentnews.org/article.pl?sid=25/08/12/1737238&amp;from=rss)
* [2025-08-13, 21:51:50](https://lobste.rs/s/jcpcvk/nixidy_kubernetes_gitops_with_nix_argo_cd) - [nixidy: Kubernetes GitOps with nix and Argo CD](https://nixidy.dev)
* [2025-08-13, 20:41:44](https://lobste.rs/s/1ugmaz/plan_9_desktop_guide) - [Plan 9 Desktop Guide](https://web.archive.org/web/20250725161816/https://pspodcasting.net/dan/blog/2019/plan9_desktop.html)
* [2025-08-13, 20:34:27](https://news.ycombinator.com/item?id=44893522) - [All Souls exam questions and the limits of machine reasoning](https://resobscura.substack.com/p/all-souls-exam-questions-and-the)
* [2025-08-13, 19:45:45](https://lobste.rs/s/zo4nto/snooping_on_slow_builds_using_syscalls) - [Snooping On Slow Builds (Using Syscalls)](https://danielchasehooper.com/posts/syscall-build-snooping/)
* [2025-08-13, 18:28:14](https://lobste.rs/s/v8eiev/pyx_python_native_package_registry_now) - [pyx: a Python-native package registry, now in Beta](https://astral.sh/blog/introducing-pyx)
* [2025-08-13, 18:10:00](https://soylentnews.org/article.pl?sid=25/08/12/1155214&amp;from=rss) - [Oracle VirtualBox Licensing Tweak Lies in Wait for Unwary](https://soylentnews.org/article.pl?sid=25/08/12/1155214&amp;from=rss)
* [2025-08-13, 18:04:35](https://lobste.rs/s/isgyrq/why_i_chose_ocaml_as_my_primary_language) - [Why I chose OCaml as my primary language](https://xvw.lol/en/articles/why-ocaml.html)
* [2025-08-13, 15:06:08](https://lobste.rs/s/7gkxzt/study_social_media_probably_can_t_be_fixed) - [Study: Social media probably can’t be fixed](https://arstechnica.com/science/2025/08/study-social-media-probably-cant-be-fixed/)
* [2025-08-13, 15:00:25](https://news.ycombinator.com/item?id=44889354) - [Org-social is a decentralized social network that runs on Org Mode](https://github.com/tanrax/org-social)
* [2025-08-13, 13:22:00](https://soylentnews.org/article.pl?sid=25/08/12/1147242&amp;from=rss) - [Smartwatches Offer Little Insight Into Stress Levels, Researchers Find](https://soylentnews.org/article.pl?sid=25/08/12/1147242&amp;from=rss)
* [2025-08-13, 08:34:00](https://soylentnews.org/article.pl?sid=25/08/12/1137226&amp;from=rss) - [Small Clouds Out as VMware Again Changes Partner Program](https://soylentnews.org/article.pl?sid=25/08/12/1137226&amp;from=rss)
* [2025-08-13, 03:51:00](https://soylentnews.org/article.pl?sid=25/08/12/0427247&amp;from=rss) - [OpenAI Will Not Disclose GPT-5’s Energy Use. It Could be Higher Than Past Models](https://soylentnews.org/article.pl?sid=25/08/12/0427247&amp;from=rss)
* [2025-08-12, 23:08:00](https://soylentnews.org/article.pl?sid=25/08/12/0419218&amp;from=rss) - [Using a Fan Can Make Older Adults Hotter in a Dry Heat](https://soylentnews.org/article.pl?sid=25/08/12/0419218&amp;from=rss)
* [2025-08-12, 18:33:20](https://news.ycombinator.com/item?id=44880139) - [500 days of math](https://gmays.com/500-days-of-math/)
* [2025-08-12, 18:25:00](https://soylentnews.org/article.pl?sid=25/08/11/2227259&amp;from=rss) - [Post-Quantum Cryptography Advice Added to OpenSSH Website](https://soylentnews.org/article.pl?sid=25/08/11/2227259&amp;from=rss)
* [2025-08-12, 13:42:00](https://soylentnews.org/article.pl?sid=25/08/10/233218&amp;from=rss) - [Coding Error Blamed After Parts of Constitution Disappear From US Website](https://soylentnews.org/article.pl?sid=25/08/10/233218&amp;from=rss)
* [2025-08-12, 13:15:34](https://news.ycombinator.com/item?id=44875848) - [What&apos;s the strongest AI model you can train on a laptop in five minutes?](https://www.seangoedecke.com/model-on-a-mbp/)
* [2025-08-12, 13:14:14](https://news.ycombinator.com/item?id=44875837) - [Why and how to write things on the Internet (2022)](https://www.benkuhn.net/writing/)
* [2025-08-12, 08:55:00](https://soylentnews.org/article.pl?sid=25/08/10/2217254&amp;from=rss) - [Extra-Strong Bacterial Cellulose Sheets as a Biodegradable Alternative to Plastic](https://soylentnews.org/article.pl?sid=25/08/10/2217254&amp;from=rss)
* [2025-08-12, 08:05:39](https://news.ycombinator.com/item?id=44873635) - [Architecting large software projects [video]](https://www.youtube.com/watch?v=sSpULGNHyoI)
* [2025-08-12, 04:14:00](https://soylentnews.org/article.pl?sid=25/08/10/1521232&amp;from=rss) - [Here’s How Deepfake Vishing Attacks Work, and Why They Can Be Hard to Detect](https://soylentnews.org/article.pl?sid=25/08/10/1521232&amp;from=rss)
* [2025-08-11, 23:31:24](https://news.ycombinator.com/item?id=44870664) - [Lambdas, Nested Functions, and Blocks](https://thephd.dev/lambdas-nested-functions-block-expressions-oh-my)
* [2025-08-11, 23:28:00](https://soylentnews.org/article.pl?sid=25/08/10/1038254&amp;from=rss) - [Quantum \&quot;Schrödinger&apos;s Cat\&quot; Survives For Mind-Blowing 23 Minutes In Record-Breaking Experiment](https://soylentnews.org/article.pl?sid=25/08/10/1038254&amp;from=rss)
* [2025-08-11, 18:45:00](https://soylentnews.org/article.pl?sid=25/08/10/1036210&amp;from=rss) - [Asian Hornet’s Unique Buzz May Hold Secret to Containing Invasive Species](https://soylentnews.org/article.pl?sid=25/08/10/1036210&amp;from=rss)
* [2025-08-11, 14:14:00](https://soylentnews.org/article.pl?sid=25/08/11/145224&amp;from=rss) - [RIP: Dame Stephanie &apos;Steve&apos; Shirley, Technology Pioneer, Dies Aged 91](https://soylentnews.org/article.pl?sid=25/08/11/145224&amp;from=rss)
* [2025-08-11, 14:05:24](https://news.ycombinator.com/item?id=44864212) - [Reverse Proxy Deep Dive: Why Load Balancing at Scale Is Hard](https://startwithawhy.com/reverseproxy/2025/08/08/ReverseProxy-Deep-Dive-Part4.html)
* [2025-08-11, 14:01:00](https://soylentnews.org/article.pl?sid=25/08/09/1958210&amp;from=rss) - [CalyxOS: The Pause That Wasn&apos;t](https://soylentnews.org/article.pl?sid=25/08/09/1958210&amp;from=rss)
* [2025-08-11, 09:11:00](https://soylentnews.org/article.pl?sid=25/08/09/1827235&amp;from=rss) - [Americans, Be Warned: Lessons From Reddit’s Chaotic UK Age Verification Rollout](https://soylentnews.org/article.pl?sid=25/08/09/1827235&amp;from=rss)
* [2025-08-11, 07:18:13](https://news.ycombinator.com/item?id=44861536) - [Homekit-steam-user-switcher: A way to remotely switch Steam users using HomeKit](https://github.com/rcarmo/homekit-steam-user-switcher)
* [2025-08-11, 05:14:00](https://soylentnews.org/article.pl?sid=25/08/11/0456211&amp;from=rss) - [RIP: James Lovell Dead at 97](https://soylentnews.org/article.pl?sid=25/08/11/0456211&amp;from=rss)
* [2025-08-11, 04:34:00](https://soylentnews.org/article.pl?sid=25/08/09/1818247&amp;from=rss) - [WinRAR zero-day Exploited to Plant Malware on Archive Extraction](https://soylentnews.org/article.pl?sid=25/08/09/1818247&amp;from=rss)
* [2025-08-11, 01:46:22](https://news.ycombinator.com/item?id=44860080) - [Nyxt: The Emacs-like web browser](https://lwn.net/Articles/1001773/)
* [2025-08-10, 23:45:00](https://soylentnews.org/article.pl?sid=25/08/09/188231&amp;from=rss) - [Is Perrier as Pure as it Claims? The Bottled Water Scandal Gripping France](https://soylentnews.org/article.pl?sid=25/08/09/188231&amp;from=rss)
* [2025-08-10, 22:54:35](https://news.ycombinator.com/item?id=44859049) - [1976 Soviet edition of &apos;The Hobbit&apos; (2015)](https://mashable.com/archive/soviet-hobbit)
* [2025-08-10, 18:57:00](https://soylentnews.org/article.pl?sid=25/08/09/091234&amp;from=rss) - [Man Swaps His Salt for Sodium Bromide—and Suffers Psychosis](https://soylentnews.org/article.pl?sid=25/08/09/091234&amp;from=rss)
* [2025-08-10, 13:12:00](https://soylentnews.org/article.pl?sid=25/08/09/0853200&amp;from=rss) - [Oh No, Wavy Dave! Robot Crustacean Waves at Fiddler Crabs for Science, Has a Bad Time](https://soylentnews.org/article.pl?sid=25/08/09/0853200&amp;from=rss)
* [2025-08-10, 08:28:00](https://soylentnews.org/article.pl?sid=25/08/09/0850232&amp;from=rss) - [Japanese Scientists Develop Artificial Blood](https://soylentnews.org/article.pl?sid=25/08/09/0850232&amp;from=rss)
* [2025-08-10, 03:45:00](https://soylentnews.org/article.pl?sid=25/08/09/0847239&amp;from=rss) - [Denmark Zoo: Donate Unwanted Pets to Feed Predators and Imitate ‘Natural Food Chain’](https://soylentnews.org/article.pl?sid=25/08/09/0847239&amp;from=rss)
