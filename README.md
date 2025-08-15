# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Security

* [Meta’s AI rules have let bots hold ‘sensual’ chats with kids, offer false medical info](https://www.reuters.com/investigates/special-report/meta-ai-chatbot-guidelines/) ([Comments](https://lobste.rs/s/dguris/meta_s_ai_rules_have_let_bots_hold_sensual))

* [NGINX Introduces Native Support for ACME Protocol](https://blog.nginx.org/blog/native-support-for-acme-protocol) ([Comments](https://lobste.rs/s/m434ps/nginx_introduces_native_support_for_acme))

* [Plex Users Urged To Update Media Server After Security Flaw Exposed](https://it.slashdot.org/story/25/08/14/236202/plex-users-urged-to-update-media-server-after-security-flaw-exposed?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=44907531))

* [Time to End Roundtripping by Big Pharma](https://www.cfr.org/blog/time-end-roundtripping-big-pharma) ([Comments](https://news.ycombinator.com/item?id=44907569))

* [Russian Hackers Seized Control of Norwegian Dam, Spy Chief Says](https://it.slashdot.org/story/25/08/14/232228/russian-hackers-seized-control-of-norwegian-dam-spy-chief-says?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=44907531))

## Science and Innovation

* ['Ghost Particle' That Smashed Into Earth Breaks Records](https://science.slashdot.org/story/25/08/14/2335238/ghost-particle-that-smashed-into-earth-breaks-records?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=44907531))

* [New Type of Supernova Detected as Black Hole Causes Star To Explode](https://science.slashdot.org/story/25/08/14/1916235/new-type-of-supernova-detected-as-black-hole-causes-star-to-explode?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://lobste.rs/s/m434ps/nginx_introduces_native_support_for_acme))

* [Simulating and Visualising the Central Limit Theorem](https://blog.foletta.net/post/2025-07-14-clt/) ([Comments](https://news.ycombinator.com/item?id=44909133))

* [Harvard Business School on the Value of Open Source Software](https://soylentnews.org/article.pl?sid=25/08/13/1621256&from=rss) ([Comments](https://news.ycombinator.com/item?id=44908610))

## Social and Cultural Impact

* [Culture Influences Men's Experiences With Intimate Partner Violence, Study Finds](https://soylentnews.org/article.pl?sid=25/08/13/1625217&from=rss) ([Comments](https://news.ycombinator.com/item?id=44910161))

* [African Union Urges Adoption of World Map Showing Continent's True Size](https://news.slashdot.org/story/25/08/14/2315236/african-union-urges-adoption-of-world-map-showing-continents-true-size?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=44910161))

* [Impoverished Streaming Services Are Driving Viewers Back to Piracy](https://yro.slashdot.org/story/25/08/14/2158204/impoverished-streaming-services-are-driving-viewers-back-to-piracy?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=44905808))

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

* [2025-08-15, 09:10:43](https://news.ycombinator.com/item?id=44910161) - [UK government states that &apos;safety&apos; act is about influence over public discourse](https://bsky.app/profile/tupped.bsky.social/post/3lwgcmswmy222)
* [2025-08-15, 08:51:06](https://lobste.rs/s/yk6f9n/anaphoric_macros) - [Anaphoric Macros](https://letoverlambda.com/index.cl/guest/chap6.html)
* [2025-08-15, 08:07:00](https://soylentnews.org/article.pl?sid=25/08/13/1625217&amp;from=rss) - [Culture Influences Men&apos;s Experiences With Intimate Partner Violence, Study Finds](https://soylentnews.org/article.pl?sid=25/08/13/1625217&amp;from=rss)
* [2025-08-15, 07:35:26](https://lobste.rs/s/p7eaca/slog_is_aptly_named) - [slog is aptly named](https://flak.tedunangst.com/post/slog-is-aptly-named)
* [2025-08-15, 07:22:29](https://lobste.rs/s/g1a53z/ed25519_support_chrome_making_web_faster) - [Ed25519 Support in Chrome: Making the Web Faster and Safer](https://ipfsfoundation.org/ed25519-support-in-chrome-making-the-web-faster-and-safer-2/)
* [2025-08-15, 07:00:00](https://science.slashdot.org/story/25/08/14/2335238/ghost-particle-that-smashed-into-earth-breaks-records?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Ghost Particle&apos; That Smashed Into Earth Breaks Records](https://science.slashdot.org/story/25/08/14/2335238/ghost-particle-that-smashed-into-earth-breaks-records?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-15, 06:11:51](https://news.ycombinator.com/item?id=44909133) - [Simulating and Visualising the Central Limit Theorem](https://blog.foletta.net/post/2025-07-14-clt/)
* [2025-08-15, 04:34:12](https://lobste.rs/s/dguris/meta_s_ai_rules_have_let_bots_hold_sensual) - [Meta’s AI rules have let bots hold ‘sensual’ chats with kids, offer false medical info](https://www.reuters.com/investigates/special-report/meta-ai-chatbot-guidelines/)
* [2025-08-15, 04:33:56](https://lobste.rs/s/nu7cjz/why_lean_4_replaced_ocaml_as_my_primary) - [Why Lean 4 replaced OCaml as my Primary Language](https://kirancodes.me/posts/log-ocaml-to-lean.html)
* [2025-08-15, 04:25:59](https://news.ycombinator.com/item?id=44908610) - [Teenage Engineering&apos;s free computer case](https://teenage.engineering/store/computer-2)
* [2025-08-15, 03:47:21](https://lobste.rs/s/wcevj6/your_mac_game_is_probably_rendering) - [Your Mac Game Is Probably Rendering Blurry](https://www.colincornaby.me/2025/08/your-mac-game-is-probably-rendering-blurry/)
* [2025-08-15, 03:30:00](https://news.slashdot.org/story/25/08/14/2315236/african-union-urges-adoption-of-world-map-showing-continents-true-size?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [African Union Urges Adoption of World Map Showing Continent&apos;s True Size](https://news.slashdot.org/story/25/08/14/2315236/african-union-urges-adoption-of-world-map-showing-continents-true-size?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-15, 03:20:00](https://soylentnews.org/article.pl?sid=25/08/13/1621256&amp;from=rss) - [Harvard Business School on the Value of Open Source Software](https://soylentnews.org/article.pl?sid=25/08/13/1621256&amp;from=rss)
* [2025-08-15, 01:25:00](https://it.slashdot.org/story/25/08/14/232228/russian-hackers-seized-control-of-norwegian-dam-spy-chief-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Russian Hackers Seized Control of Norwegian Dam, Spy Chief Says](https://it.slashdot.org/story/25/08/14/232228/russian-hackers-seized-control-of-norwegian-dam-spy-chief-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-15, 01:08:42](https://news.ycombinator.com/item?id=44907569) - [Time to End Roundtripping by Big Pharma](https://www.cfr.org/blog/time-end-roundtripping-big-pharma)
* [2025-08-15, 01:01:13](https://news.ycombinator.com/item?id=44907531) - [I used to know how to write in Japanese](https://aethermug.com/posts/i-used-to-know-how-to-write-in-japanese)
* [2025-08-15, 01:00:00](https://it.slashdot.org/story/25/08/14/236202/plex-users-urged-to-update-media-server-after-security-flaw-exposed?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Plex Users Urged To Update Media Server After Security Flaw Exposed](https://it.slashdot.org/story/25/08/14/236202/plex-users-urged-to-update-media-server-after-security-flaw-exposed?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-15, 00:45:00](https://yro.slashdot.org/story/25/08/14/2252251/trump-administration-considers-stake-in-intel?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Administration Considers Stake In Intel](https://yro.slashdot.org/story/25/08/14/2252251/trump-administration-considers-stake-in-intel?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-15, 00:02:00](https://developers.slashdot.org/story/25/08/14/2247214/dodgy-huawei-chips-nearly-sunk-deepseeks-next-gen-r2-model?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Dodgy Huawei Chips Nearly Sunk DeepSeek&apos;s Next-Gen R2 Model](https://developers.slashdot.org/story/25/08/14/2247214/dodgy-huawei-chips-nearly-sunk-deepseeks-next-gen-r2-model?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-14, 23:25:51](https://news.ycombinator.com/item?id=44906918) - [The new science of “emergent misalignment”](https://www.quantamagazine.org/the-ai-was-fed-sloppy-code-it-turned-into-something-evil-20250813/)
* [2025-08-14, 23:20:00](https://yro.slashdot.org/story/25/08/14/2158204/impoverished-streaming-services-are-driving-viewers-back-to-piracy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Impoverished Streaming Services Are Driving Viewers Back to Piracy](https://yro.slashdot.org/story/25/08/14/2158204/impoverished-streaming-services-are-driving-viewers-back-to-piracy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-14, 22:56:14](https://lobste.rs/s/8hsb3l/we_rewrote_ghostty_gtk_application) - [We Rewrote the Ghostty GTK Application](https://mitchellh.com/writing/ghostty-gtk-rewrite)
* [2025-08-14, 22:51:16](https://news.ycombinator.com/item?id=44906662) - [Citybound: City building game, microscopic models to vividly simulate organism](https://aeplay.org/citybound)
* [2025-08-14, 22:40:00](https://tech.slashdot.org/story/25/08/14/2150230/google-releases-pint-size-gemma-open-ai-model?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Releases Pint-Size Gemma Open AI Model](https://tech.slashdot.org/story/25/08/14/2150230/google-releases-pint-size-gemma-open-ai-model?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-14, 22:37:00](https://soylentnews.org/article.pl?sid=25/08/13/1347256&amp;from=rss) - [Joint Polar System METOP-SGA1 Launched](https://soylentnews.org/article.pl?sid=25/08/13/1347256&amp;from=rss)
* [2025-08-14, 22:11:47](https://news.ycombinator.com/item?id=44906305) - [Blurry rendering of games on Mac](https://www.colincornaby.me/2025/08/your-mac-game-is-probably-rendering-blurry/)
* [2025-08-14, 22:02:00](https://yro.slashdot.org/story/25/08/14/2018223/apple-returns-blood-oxygen-monitoring-to-the-latest-apple-watches?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Returns Blood Oxygen Monitoring to the Latest Apple Watches](https://yro.slashdot.org/story/25/08/14/2018223/apple-returns-blood-oxygen-monitoring-to-the-latest-apple-watches?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-14, 21:26:00](https://slashdot.org/story/25/08/14/1928226/paypal-no-longer-available-for-steam-purchases-outside-major-currency-zones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [PayPal No Longer Available for Steam Purchases Outside Major Currency Zones](https://slashdot.org/story/25/08/14/1928226/paypal-no-longer-available-for-steam-purchases-outside-major-currency-zones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-14, 21:19:00](https://news.ycombinator.com/item?id=44905808) - [We rewrote the Ghostty GTK application](https://mitchellh.com/writing/ghostty-gtk-rewrite)
* [2025-08-14, 21:06:37](https://lobste.rs/s/ms94ja/what_is_go_proxy_even_doing) - [what is the go proxy even doing?](https://flak.tedunangst.com/post/what-is-the-go-proxy-even-doing)
* [2025-08-14, 21:01:04](https://news.ycombinator.com/item?id=44905647) - [OneSignal (YC S11) Is Hiring Engineers](https://onesignal.com/careers)
* [2025-08-14, 20:52:10](https://lobste.rs/s/zwz8ka/nan_propagation_novel_method_for) - [NaN-Propagation: A Novel Method for Sparsity Detection in Black-Box Computational Functions](https://arxiv.org/abs/2507.23186)
* [2025-08-14, 20:45:00](https://science.slashdot.org/story/25/08/14/1916235/new-type-of-supernova-detected-as-black-hole-causes-star-to-explode?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Type of Supernova Detected as Black Hole Causes Star To Explode](https://science.slashdot.org/story/25/08/14/1916235/new-type-of-supernova-detected-as-black-hole-causes-star-to-explode?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-14, 20:05:00](https://news.slashdot.org/story/25/08/14/198211/plastic-pollution-treaty-talks-deadlocked-as-negotiations-draw-to-a-close?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Plastic Pollution Treaty Talks Deadlocked as Negotiations Draw To a Close](https://news.slashdot.org/story/25/08/14/198211/plastic-pollution-treaty-talks-deadlocked-as-negotiations-draw-to-a-close?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-14, 20:02:46](https://news.ycombinator.com/item?id=44904993) - [DINOv3](https://github.com/facebookresearch/dinov3)
* [2025-08-14, 19:53:12](https://news.ycombinator.com/item?id=44904869) - [Airbrush art of the 80s was Chrome-tastic (2015)](https://www.coolandcollected.com/airbrush-art-of-the-80s-was-chrome-tastic/)
* [2025-08-14, 19:50:47](https://lobste.rs/s/ypcgpv/mixbox_natural_color_mixing_based_on_real) - [Mixbox - Natural Color Mixing Based on Real Pigments (2021)](https://scrtwpns.com/mixbox/)
* [2025-08-14, 19:30:00](https://games.slashdot.org/story/25/08/14/1859256/ex-playstation-boss-says-game-subscription-turns-developers-into-wage-slaves?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ex-PlayStation Boss Says Game Subscription Turns Developers Into &apos;Wage Slaves&apos;](https://games.slashdot.org/story/25/08/14/1859256/ex-playstation-boss-says-game-subscription-turns-developers-into-wage-slaves?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-14, 18:52:00](https://slashdot.org/story/25/08/14/1852218/the-head-of-chatgpt-wont-rule-out-adding-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Head of ChatGPT Won&apos;t Rule Out Adding Ads](https://slashdot.org/story/25/08/14/1852218/the-head-of-chatgpt-wont-rule-out-adding-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-14, 18:22:58](https://lobste.rs/s/1v1slg/jujutsu_with_radicle) - [Jujutsu with Radicle](https://radicle.xyz/2025/08/14/jujutsu-with-radicle)
* [2025-08-14, 18:19:42](https://news.ycombinator.com/item?id=44903803) - [Steve Wozniak: Life to me was never about accomplishment, but about happiness](https://yro.slashdot.org/comments.pl?sid=23765914&amp;cid=65583466)
* [2025-08-14, 18:10:00](https://tech.slashdot.org/story/25/08/14/1759222/metas-ai-rules-have-let-bots-hold-sensual-chats-with-kids-offer-false-medical-info?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta&apos;s AI Rules Have Let Bots Hold &apos;Sensual&apos; Chats With Kids, Offer False Medical Info](https://tech.slashdot.org/story/25/08/14/1759222/metas-ai-rules-have-let-bots-hold-sensual-chats-with-kids-offer-false-medical-info?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-14, 17:52:00](https://soylentnews.org/article.pl?sid=25/08/13/1344242&amp;from=rss) - [AOL is Discontinuing its Dial-Up Service](https://soylentnews.org/article.pl?sid=25/08/13/1344242&amp;from=rss)
* [2025-08-14, 17:50:23](https://lobste.rs/s/tuodvv/placing_arguments) - [Placing Arguments](https://blog.yoshuawuyts.com/placing-arguments/)
* [2025-08-14, 17:33:06](https://lobste.rs/s/kbxhp4/fun_with_finite_state_transducers) - [Fun with finite state transducers](https://blog.yossarian.net/2025/08/14/Fun-with-finite-state-transducers)
* [2025-08-14, 16:56:31](https://news.ycombinator.com/item?id=44902797) - [Streaming services are driving viewers back to piracy](https://www.theguardian.com/film/2025/aug/14/cant-pay-wont-pay-impoverished-streaming-services-are-driving-viewers-back-to-piracy)
* [2025-08-14, 16:08:36](https://news.ycombinator.com/item?id=44902148) - [Gemma 3 270M: Compact model for hyper-efficient AI](https://developers.googleblog.com/en/introducing-gemma-3-270m/)
* [2025-08-14, 16:06:55](https://news.ycombinator.com/item?id=44902127) - [I made a real-time C/C++/Rust build visualizer](https://danielchasehooper.com/posts/syscall-build-snooping/)
* [2025-08-14, 15:47:43](https://news.ycombinator.com/item?id=44901853) - [Show HN: OWhisper – Ollama for realtime speech-to-text](https://docs.hyprnote.com/owhisper/what-is-this)
* [2025-08-14, 15:44:55](https://lobste.rs/s/acbnix/why_llms_can_t_really_build_software) - [Why LLMs Can&apos;t Really Build Software](https://zed.dev/blog/why-llms-cant-build-software)
* [2025-08-14, 15:34:46](https://news.ycombinator.com/item?id=44901683) - [Show HN: I built a free alternative to Adobe Acrobat PDF viewer](https://github.com/embedpdf/embed-pdf-viewer)
* [2025-08-14, 15:24:53](https://news.ycombinator.com/item?id=44901528) - [Launch HN: Cyberdesk (YC S25) – Automate Windows legacy desktop apps](https://news.ycombinator.com/item?id=44901528)
* [2025-08-14, 14:53:44](https://lobste.rs/s/pm5vdm/enforce_proper_direnv_setup) - [Enforce Proper direnv Setup](https://joeyates.info/posts/enforce-proper-direnv-setup/)
* [2025-08-14, 14:10:15](https://lobste.rs/s/wyec76/lazylog_new_shared_log_abstraction_for) - [LazyLog: A New Shared Log Abstraction for Low-Latency Applications](https://ramalagappan.github.io/pdfs/papers/lazylog.pdf)
* [2025-08-14, 13:48:24](https://news.ycombinator.com/item?id=44900340) - [Is chain-of-thought AI reasoning a mirage?](https://www.seangoedecke.com/real-reasoning/)
* [2025-08-14, 13:26:09](https://news.ycombinator.com/item?id=44900116) - [Why LLMs can&apos;t really build software](https://zed.dev/blog/why-llms-cant-build-software)
* [2025-08-14, 13:14:35](https://news.ycombinator.com/item?id=44899999) - [Blood oxygen monitoring returning to Apple Watch in the US](https://www.apple.com/newsroom/2025/08/an-update-on-blood-oxygen-for-apple-watch-in-the-us/)
* [2025-08-14, 13:03:00](https://soylentnews.org/article.pl?sid=25/08/13/1139229&amp;from=rss) - [Microsoft Recall Exposes Passwords and Banking Data](https://soylentnews.org/article.pl?sid=25/08/13/1139229&amp;from=rss)
* [2025-08-14, 12:01:48](https://lobste.rs/s/xzubsr/how_rig_elections) - [How to rig elections](https://media.ccc.de/v/why2025-218-how-to-rig-elections)
* [2025-08-14, 10:54:09](https://lobste.rs/s/nvt1zk/org_social_is_decentralized_social) - [Org-social is a decentralized social network that runs on an Org Mode](https://github.com/tanrax/org-social)
* [2025-08-14, 10:50:25](https://lobste.rs/s/vqd2oj/emacs_30_2_is_here) - [Emacs 30.2 is here](https://github.com/emacs-mirror/emacs/releases/tag/emacs-30.2)
* [2025-08-14, 08:22:00](https://soylentnews.org/article.pl?sid=25/08/13/1127246&amp;from=rss) - [Reddit Bars Internet Archive From its Website, Sparking Access Concerns](https://soylentnews.org/article.pl?sid=25/08/13/1127246&amp;from=rss)
* [2025-08-14, 06:54:31](https://lobste.rs/s/y6abdu/taming_beast_comparing_jsonnet_dhall_cue) - [Taming the Beast: Comparing Jsonnet, Dhall, Cue](https://pv.wtf/posts/taming-the-beast)
* [2025-08-14, 04:57:08](https://lobste.rs/s/m434ps/nginx_introduces_native_support_for_acme) - [NGINX Introduces Native Support for ACME Protocol](https://blog.nginx.org/blog/native-support-for-acme-protocol)
* [2025-08-14, 03:37:00](https://soylentnews.org/article.pl?sid=25/08/12/180244&amp;from=rss) - [Debian 13 \&quot;Trixie\&quot; and Debian \&quot;Hurd 2025\&quot; Released](https://soylentnews.org/article.pl?sid=25/08/12/180244&amp;from=rss)
* [2025-08-14, 03:30:27](https://lobste.rs/s/cts5fi/modifying_other_people_s_software) - [Modifying Other People&apos;s Software](https://natkr.com/2025-08-14-modifying-other-peoples-software/)
* [2025-08-13, 23:03:16](https://news.ycombinator.com/item?id=44894910) - [What does Palantir actually do?](https://www.wired.com/story/palantir-what-the-company-does/)
* [2025-08-13, 22:56:00](https://soylentnews.org/article.pl?sid=25/08/12/1737238&amp;from=rss) - [Microsoft Sued for Discontinuing Windows 10 Support](https://soylentnews.org/article.pl?sid=25/08/12/1737238&amp;from=rss)
* [2025-08-13, 19:45:45](https://lobste.rs/s/zo4nto/snooping_on_slow_builds_using_syscalls) - [Snooping On Slow Builds (Using Syscalls)](https://danielchasehooper.com/posts/syscall-build-snooping/)
* [2025-08-13, 18:28:14](https://lobste.rs/s/v8eiev/pyx_python_native_package_registry_now) - [pyx: a Python-native package registry, now in Beta](https://astral.sh/blog/introducing-pyx)
* [2025-08-13, 18:10:00](https://soylentnews.org/article.pl?sid=25/08/12/1155214&amp;from=rss) - [Oracle VirtualBox Licensing Tweak Lies in Wait for Unwary](https://soylentnews.org/article.pl?sid=25/08/12/1155214&amp;from=rss)
* [2025-08-13, 18:04:35](https://lobste.rs/s/isgyrq/why_i_chose_ocaml_as_my_primary_language) - [Why I chose OCaml as my primary language](https://xvw.lol/en/articles/why-ocaml.html)
* [2025-08-13, 15:00:25](https://news.ycombinator.com/item?id=44889354) - [Org-social is a decentralized social network that runs on Org Mode](https://github.com/tanrax/org-social)
* [2025-08-13, 13:22:00](https://soylentnews.org/article.pl?sid=25/08/12/1147242&amp;from=rss) - [Smartwatches Offer Little Insight Into Stress Levels, Researchers Find](https://soylentnews.org/article.pl?sid=25/08/12/1147242&amp;from=rss)
* [2025-08-13, 08:34:00](https://soylentnews.org/article.pl?sid=25/08/12/1137226&amp;from=rss) - [Small Clouds Out as VMware Again Changes Partner Program](https://soylentnews.org/article.pl?sid=25/08/12/1137226&amp;from=rss)
* [2025-08-13, 03:51:00](https://soylentnews.org/article.pl?sid=25/08/12/0427247&amp;from=rss) - [OpenAI Will Not Disclose GPT-5’s Energy Use. It Could be Higher Than Past Models](https://soylentnews.org/article.pl?sid=25/08/12/0427247&amp;from=rss)
* [2025-08-12, 23:08:00](https://soylentnews.org/article.pl?sid=25/08/12/0419218&amp;from=rss) - [Using a Fan Can Make Older Adults Hotter in a Dry Heat](https://soylentnews.org/article.pl?sid=25/08/12/0419218&amp;from=rss)
* [2025-08-12, 18:25:00](https://soylentnews.org/article.pl?sid=25/08/11/2227259&amp;from=rss) - [Post-Quantum Cryptography Advice Added to OpenSSH Website](https://soylentnews.org/article.pl?sid=25/08/11/2227259&amp;from=rss)
* [2025-08-12, 13:44:29](https://news.ycombinator.com/item?id=44876115) - [Stylish Bugs](https://flak.tedunangst.com/post/stylish-bugs)
* [2025-08-12, 13:42:00](https://soylentnews.org/article.pl?sid=25/08/10/233218&amp;from=rss) - [Coding Error Blamed After Parts of Constitution Disappear From US Website](https://soylentnews.org/article.pl?sid=25/08/10/233218&amp;from=rss)
* [2025-08-12, 12:00:04](https://news.ycombinator.com/item?id=44875137) - [Progress towards universal Copy/Paste shortcuts on Linux](https://mark.stosberg.com/universal-copy-paste/)
* [2025-08-12, 08:55:00](https://soylentnews.org/article.pl?sid=25/08/10/2217254&amp;from=rss) - [Extra-Strong Bacterial Cellulose Sheets as a Biodegradable Alternative to Plastic](https://soylentnews.org/article.pl?sid=25/08/10/2217254&amp;from=rss)
* [2025-08-12, 08:05:39](https://news.ycombinator.com/item?id=44873635) - [Architecting large software projects [video]](https://www.youtube.com/watch?v=sSpULGNHyoI)
* [2025-08-12, 05:03:34](https://news.ycombinator.com/item?id=44872578) - [Galileo&apos;s Telescopes: Seeing Is Believing](https://www.historytoday.com/archive/history-matters/galileos-telescopes-seeing-believing)
* [2025-08-12, 04:14:00](https://soylentnews.org/article.pl?sid=25/08/10/1521232&amp;from=rss) - [Here’s How Deepfake Vishing Attacks Work, and Why They Can Be Hard to Detect](https://soylentnews.org/article.pl?sid=25/08/10/1521232&amp;from=rss)
* [2025-08-11, 23:28:00](https://soylentnews.org/article.pl?sid=25/08/10/1038254&amp;from=rss) - [Quantum \&quot;Schrödinger&apos;s Cat\&quot; Survives For Mind-Blowing 23 Minutes In Record-Breaking Experiment](https://soylentnews.org/article.pl?sid=25/08/10/1038254&amp;from=rss)
* [2025-08-11, 20:37:20](https://news.ycombinator.com/item?id=44869188) - [Snapshots of Kids Bike Jumping in the 1970s](https://flashbak.com/snapshots-of-kids-bike-jumping-in-the-1970s-476580/)
* [2025-08-11, 18:45:00](https://soylentnews.org/article.pl?sid=25/08/10/1036210&amp;from=rss) - [Asian Hornet’s Unique Buzz May Hold Secret to Containing Invasive Species](https://soylentnews.org/article.pl?sid=25/08/10/1036210&amp;from=rss)
* [2025-08-11, 14:14:00](https://soylentnews.org/article.pl?sid=25/08/11/145224&amp;from=rss) - [RIP: Dame Stephanie &apos;Steve&apos; Shirley, Technology Pioneer, Dies Aged 91](https://soylentnews.org/article.pl?sid=25/08/11/145224&amp;from=rss)
* [2025-08-11, 14:01:00](https://soylentnews.org/article.pl?sid=25/08/09/1958210&amp;from=rss) - [CalyxOS: The Pause That Wasn&apos;t](https://soylentnews.org/article.pl?sid=25/08/09/1958210&amp;from=rss)
* [2025-08-11, 09:11:00](https://soylentnews.org/article.pl?sid=25/08/09/1827235&amp;from=rss) - [Americans, Be Warned: Lessons From Reddit’s Chaotic UK Age Verification Rollout](https://soylentnews.org/article.pl?sid=25/08/09/1827235&amp;from=rss)
* [2025-08-11, 05:14:00](https://soylentnews.org/article.pl?sid=25/08/11/0456211&amp;from=rss) - [RIP: James Lovell Dead at 97](https://soylentnews.org/article.pl?sid=25/08/11/0456211&amp;from=rss)
* [2025-08-11, 04:34:00](https://soylentnews.org/article.pl?sid=25/08/09/1818247&amp;from=rss) - [WinRAR zero-day Exploited to Plant Malware on Archive Extraction](https://soylentnews.org/article.pl?sid=25/08/09/1818247&amp;from=rss)
* [2025-08-11, 04:20:57](https://news.ycombinator.com/item?id=44860732) - [Making reliable distributed systems in the presence of software errors (2003) [pdf]](http://erlang.org/download/armstrong_thesis_2003.pdf)
