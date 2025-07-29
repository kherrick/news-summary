# [News Summary](https://kherrick.github.io/news-summary/)

## Tech Innovations and Tools

* [Ethersync: Peer-to-peer collaborative editing of local text files](https://github.com/ethersync/ethersync) - Innovative tool for peer-to-peer editing of local files, fostering collaboration without relying on cloud services. [Comments](https://lobste.rs/s/wd6fhe/ethersync_peer_peer_collaborative).

* [I designed my own fast game streaming video codec – PyroWave](https://themaister.net/blog/2025/06/16/i-designed-my-own-ridiculously-fast-game-streaming-video-codec-pyrowave/) - Describes the creation of an incredibly fast video codec tailored for game streaming. [Comments](https://news.ycombinator.com/item?id=44714914).

* [Debugging the Pixel 8 kernel via KGDB](https://xairy.io/articles/pixel-kgdb) - A deep dive into kernel debugging for the Pixel 8 using KGDB. [Comments](https://lobste.rs/s/umbpkk/debugging_pixel_8_kernel_via_kgdb).

* [Make Your Own Backup System – Part 2: Forging the FreeBSD Backup Stronghold](https://it-notes.dragas.net/2025/07/29/make-your-own-backup-system-part-2-forging-the-freebsd-backup-stronghold/) - Step-by-step guide to building a robust backup system on FreeBSD. [Comments](https://lobste.rs/s/khuqm7/make_your_own_backup_system_part_2_forging).

## Scientific and Space Discoveries

* [Distorted Sound of the Early Universe Suggests We Are Living In a Giant Void](https://science.slashdot.org/story/25/07/28/2351244/distorted-sound-of-the-early-universe-suggests-we-are-living-in-a-giant-void?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Analysis of the soundwaves from the early universe hints at our residence within a massive cosmic void. [Comments](https://slashdot.org/story/25/07/28/2351244/distorted-sound-of-the-early-universe-suggests-we-are-living-in-a-giant-void?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

* [Gold Can be Heated to 14 Times its Melting Point Without Melting](https://soylentnews.org/article.pl?sid=25/07/27/0234226&amp;from=rss) - Scientists discover gold's ability to resist melting even at extremely high temperatures. [Comments](https://soylentnews.org/article.pl?sid=25/07/27/0234226&amp;from=rss).

* [Discovery Alert: Flaring Star, Toasted Planet](https://soylentnews.org/article.pl?sid=25/07/27/0228236&amp;from=rss) - Observation of a flaring star with a planet enduring extreme temperatures. [Comments](https://soylentnews.org/article.pl?sid=25/07/27/0228236&amp;from=rss).

## Business and Finance

* [Dog-Walking Startup 'Wag' Files For Bankruptcy](https://slashdot.org/story/25/07/28/2359237/dog-walking-startup-wag-files-for-bankruptcy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Rising challenges in the pet services market lead Wag to bankruptcy. [Comments](https://slashdot.org/story/25/07/28/2359237/dog-walking-startup-wag-files-for-bankruptcy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

* [Union Pacific to buy Norfolk in $85B mega U.S. railroad deal](https://www.cnbc.com/2025/07/29/union-pacific-to-buy-norfolk.html) - Massive consolidation in the U.S. rail industry with this monumental merger deal. [Comments](https://news.ycombinator.com/item?id=44722556).

* [Visa and Mastercard Are Getting Overwhelmed By Gamer Fury Over Censorship](https://yro.slashdot.org/story/25/07/28/2223235/visa-and-mastercard-are-getting-overwhelmed-by-gamer-fury-over-censorship?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Credit card giants face heat from the gaming community over censorship issues. [Comments](https://slashdot.org/story/25/07/28/2223235/visa-and-mastercard-are-getting-overwhelmed-by-gamer-fury-over-censorship?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

## Privacy and Cybersecurity

* [Chinese Hackers Breached U.S. Army National Guard to Steal Network Configurations](https://soylentnews.org/article.pl?sid=25/07/26/1945219&amp;from=rss) - Alarming breach impacting U.S. military cyber resilience. [Comments](https://soylentnews.org/article.pl?sid=25/07/26/1945219&amp;from=rss).

* [Anthropic Faces Potentially "Business-Ending" Copyright Lawsuit](https://www.obsolete.pub/p/anthropic-faces-potentially-business) - AI company Anthropic could face dire consequences from a new copyright lawsuit. [Comments](https://news.ycombinator.com/item?id=44722048).

* [Age Verification Laws Send VPN Use Soaring–and Threaten the Open Internet](https://www.wired.com/story/vpn-use-spike-age-verification-laws-uk/) - How age verification regulations in the UK are leading to increased VPN adoption. [Comments](https://news.ycombinator.com/item?id=44721772).

## Unique and Miscellaneous

* [Modernising the Amiga at Forty](https://benjamin.computer/posts/2025-07-28-amiga40.html) - Celebration and innovation for the iconic Amiga at its 40th anniversary. [Comments](https://news.ycombinator.com/item?id=44719532).

* [Nothing to watch – Experimental gallery visualizing 50k film posters](https://nothing-to-watch.port80.ch) - A creative attempt to visualize thousands of film posters in an experimental gallery. [Comments](https://news.ycombinator.com/item?id=44721204).

* [Stop selling “unlimited”, when you mean “until we change our minds”](https://blog.kilocode.ai/p/ai-pricing-playbook-strikes-again) - A critical take on misleading “unlimited” service promises. [Comments](https://news.ycombinator.com/item?id=44721003).

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

* [2025-07-29, 13:14:41](https://lobste.rs/s/wd6fhe/ethersync_peer_peer_collaborative) - [Ethersync: Peer-to-peer collaborative editing of local text files](https://github.com/ethersync/ethersync)
* [2025-07-29, 13:00:00](https://slashdot.org/story/25/07/28/2359237/dog-walking-startup-wag-files-for-bankruptcy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Dog-Walking Startup &apos;Wag&apos; Files For Bankruptcy](https://slashdot.org/story/25/07/28/2359237/dog-walking-startup-wag-files-for-bankruptcy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-29, 12:38:46](https://news.ycombinator.com/item?id=44722584) - [Wish you could escape the planet? Too bad life in space would suck](https://www.salon.com/2024/11/22/wish-you-could-escape-the-planet-too-life-in-space-would-suck/)
* [2025-07-29, 12:36:51](https://news.ycombinator.com/item?id=44722556) - [Union Pacific to buy Norfolk in $85B mega U.S. railroad deal](https://www.cnbc.com/2025/07/29/union-pacific-to-buy-norfolk.html)
* [2025-07-29, 12:15:00](https://soylentnews.org/article.pl?sid=25/07/27/0234226&amp;from=rss) - [Gold Can be Heated to 14 Times its Melting Point Without Melting](https://soylentnews.org/article.pl?sid=25/07/27/0234226&amp;from=rss)
* [2025-07-29, 12:03:14](https://lobste.rs/s/dp1rdd/i_m_never_going_back_matrix) - [I&apos;m never going back to Matrix](https://shkspr.mobi/blog/2025/07/im-never-going-back-to-matrix/)
* [2025-07-29, 12:01:11](https://news.ycombinator.com/item?id=44722217) - [Sendblue (YC S23) is hiring senior engineers](https://www.ycombinator.com/companies/sendblue/jobs/VP7cA0F-senior-backend-engineer)
* [2025-07-29, 11:43:17](https://lobste.rs/s/umbpkk/debugging_pixel_8_kernel_via_kgdb) - [Debugging the Pixel 8 kernel via KGDB](https://xairy.io/articles/pixel-kgdb)
* [2025-07-29, 11:41:26](https://news.ycombinator.com/item?id=44722048) - [Anthropic Faces Potentially \&quot;Business-Ending\&quot; Copyright Lawsuit](https://www.obsolete.pub/p/anthropic-faces-potentially-business)
* [2025-07-29, 11:21:54](https://lobste.rs/s/mygrq6/loading_credentials_from_bitwarden_with) - [Loading credentials from Bitwarden with direnv](https://ergaster.org/posts/2025/07/28-direnv-bitwarden-integration/)
* [2025-07-29, 11:12:03](https://news.ycombinator.com/item?id=44721791) - [Show HN: Terminal-Bench-RL: Training Long-Horizon Terminal Agents with RL](https://github.com/Danau5tin/terminal-bench-rl)
* [2025-07-29, 11:09:18](https://news.ycombinator.com/item?id=44721772) - [Age Verification Laws Send VPN Use Soaring–and Threaten the Open Internet](https://www.wired.com/story/vpn-use-spike-age-verification-laws-uk/)
* [2025-07-29, 10:25:18](https://news.ycombinator.com/item?id=44721485) - [Amazon&apos;s AI Coding Revealed a Dirty Little Secret](https://www.bloomberg.com/opinion/articles/2025-07-29/amazon-ai-coding-revealed-a-dirty-little-secret)
* [2025-07-29, 10:24:11](https://lobste.rs/s/4ns2of/useless_usecallback) - [The Useless useCallback](https://tkdodo.eu/blog/the-useless-use-callback)
* [2025-07-29, 10:12:29](https://news.ycombinator.com/item?id=44721403) - [Wikimedia Foundation Challenges UK Online Safety Act Regulations](https://wikimediafoundation.org/news/2025/07/17/wikimedia-foundation-challenges-uk-online-safety-act-regulations/)
* [2025-07-29, 10:00:00](https://slashdot.org/story/25/07/28/2342234/paypal-expands-crypto-payments-for-us-merchants-to-lower-cross-border-fees?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [PayPal Expands Crypto Payments For US Merchants To Lower Cross-Border Fees](https://slashdot.org/story/25/07/28/2342234/paypal-expands-crypto-payments-for-us-merchants-to-lower-cross-border-fees?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-29, 09:42:14](https://news.ycombinator.com/item?id=44721204) - [Nothing to watch – Experimental gallery visualizing 50k film posters](https://nothing-to-watch.port80.ch)
* [2025-07-29, 09:15:19](https://news.ycombinator.com/item?id=44721003) - [Stop selling “unlimited”, when you mean “until we change our minds”](https://blog.kilocode.ai/p/ai-pricing-playbook-strikes-again)
* [2025-07-29, 07:40:24](https://lobste.rs/s/khuqm7/make_your_own_backup_system_part_2_forging) - [Make Your Own Backup System – Part 2: Forging the FreeBSD Backup Stronghold](https://it-notes.dragas.net/2025/07/29/make-your-own-backup-system-part-2-forging-the-freebsd-backup-stronghold/)
* [2025-07-29, 07:27:00](https://soylentnews.org/article.pl?sid=25/07/27/0228236&amp;from=rss) - [Discovery Alert: Flaring Star, Toasted Planet](https://soylentnews.org/article.pl?sid=25/07/27/0228236&amp;from=rss)
* [2025-07-29, 07:00:00](https://science.slashdot.org/story/25/07/28/2351244/distorted-sound-of-the-early-universe-suggests-we-are-living-in-a-giant-void?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Distorted Sound of the Early Universe Suggests We Are Living In a Giant Void](https://science.slashdot.org/story/25/07/28/2351244/distorted-sound-of-the-early-universe-suggests-we-are-living-in-a-giant-void?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-29, 05:55:32](https://news.ycombinator.com/item?id=44719532) - [Modernising the Amiga at Forty](https://benjamin.computer/posts/2025-07-28-amiga40.html)
* [2025-07-29, 05:34:15](https://news.ycombinator.com/item?id=44719413) - [Pony: An actor-model, capabilities-secure, high-performance programming language](https://www.ponylang.io/discover/)
* [2025-07-29, 03:49:02](https://lobste.rs/s/1sigov/weather_model_based_on_ads_b) - [Weather Model based on ADS-B](https://obrhubr.org/adsb-weather-model)
* [2025-07-29, 03:30:00](https://yro.slashdot.org/story/25/07/28/2223235/visa-and-mastercard-are-getting-overwhelmed-by-gamer-fury-over-censorship?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Visa and Mastercard Are Getting Overwhelmed By Gamer Fury Over Censorship](https://yro.slashdot.org/story/25/07/28/2223235/visa-and-mastercard-are-getting-overwhelmed-by-gamer-fury-over-censorship?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-29, 02:52:58](https://lobste.rs/s/vmqywc/no_more_erlang_manuals) - [No more Erlang manuals](https://blog.whenhen.com/posts/no-more-erlang-manuals.html)
* [2025-07-29, 02:48:01](https://lobste.rs/s/jrippd/contraction_hierarchies_hmc_clinic) - [Contraction Hierarchies: HMC Clinic Project Recap](https://blog.appliedcomputing.io/p/contraction-hierarchies-hmc-clinic)
* [2025-07-29, 02:40:00](https://soylentnews.org/article.pl?sid=25/07/26/1945219&amp;from=rss) - [Chinese Hackers Breached U.S. Army National Guard to Steal Network Configurations](https://soylentnews.org/article.pl?sid=25/07/26/1945219&amp;from=rss)
* [2025-07-29, 01:55:00](https://developers.slashdot.org/story/25/07/29/0156200/claude-code-users-hit-with-weekly-rate-limits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Claude Code Users Hit With Weekly Rate Limits](https://developers.slashdot.org/story/25/07/29/0156200/claude-code-users-hit-with-weekly-rate-limits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-29, 00:51:24](https://lobste.rs/s/trvu9n/identity_behaviour) - [Identity and behaviour](https://ismaelcelis.com/posts/2025-07-identity-and-behaviour/)
* [2025-07-29, 00:10:00](https://news.slashdot.org/story/25/07/28/2211238/bankrupt-futurehome-suddenly-makes-its-smart-home-hub-a-subscription-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bankrupt Futurehome Suddenly Makes Its Smart Home Hub a Subscription Service](https://news.slashdot.org/story/25/07/28/2211238/bankrupt-futurehome-suddenly-makes-its-smart-home-hub-a-subscription-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-28, 23:30:00](https://yro.slashdot.org/story/25/07/28/210244/a-second-tea-breach-reveals-users-dms-about-abortions-and-cheating?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Second Tea Breach Reveals Users&apos; DMs About Abortions and Cheating](https://yro.slashdot.org/story/25/07/28/210244/a-second-tea-breach-reveals-users-dms-about-abortions-and-cheating?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-28, 22:50:00](https://hardware.slashdot.org/story/25/07/28/2052257/anker-is-no-longer-selling-3d-printers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anker Is No Longer Selling 3D Printers](https://hardware.slashdot.org/story/25/07/28/2052257/anker-is-no-longer-selling-3d-printers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-28, 22:17:14](https://news.ycombinator.com/item?id=44716414) - [Show HN: Companies use AI to take your calls. I built AI to make them for you](https://www.pipervoice.com/)
* [2025-07-28, 22:10:00](https://slashdot.org/story/25/07/28/2034216/openais-chatgpt-agent-casually-clicks-through-i-am-not-a-robot-verification-test?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI&apos;s ChatGPT Agent Casually Clicks Through &apos;I Am Not a Robot&apos; Verification Test](https://slashdot.org/story/25/07/28/2034216/openais-chatgpt-agent-casually-clicks-through-i-am-not-a-robot-verification-test?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-28, 22:00:00](https://soylentnews.org/article.pl?sid=25/07/26/1935251&amp;from=rss) - [As Site Blocking Is Increasing, European Commission Subtly Slaps Down Italy’s Piracy Shield](https://soylentnews.org/article.pl?sid=25/07/26/1935251&amp;from=rss)
* [2025-07-28, 21:49:10](https://news.ycombinator.com/item?id=44716106) - [Show HN: Use Their ID – Use your local UK MP’s ID for the Online Safety Act](https://use-their-id.com/)
* [2025-07-28, 21:30:00](https://mobile.slashdot.org/story/25/07/28/2024254/say-goodbye-to-your-custom-roms-as-samsungs-one-ui-8-kills-bootloader-unlock?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Say Goodbye To Your Custom ROMs As Samsung&apos;s One UI 8 Kills Bootloader Unlock](https://mobile.slashdot.org/story/25/07/28/2024254/say-goodbye-to-your-custom-roms-as-samsungs-one-ui-8-kills-bootloader-unlock?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-28, 20:50:00](https://it.slashdot.org/story/25/07/28/2018201/cyberattack-cripples-russian-airline-aeroflot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cyberattack Cripples Russian Airline Aeroflot](https://it.slashdot.org/story/25/07/28/2018201/cyberattack-cripples-russian-airline-aeroflot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-28, 20:24:38](https://news.ycombinator.com/item?id=44715166) - [Sign in with Google in Chrome](https://underpassapp.com/news/2025/7/5.html)
* [2025-07-28, 20:14:27](https://lobste.rs/s/5kv9jc/linux_6_16_changelog) - [Linux 6.16 changelog](https://kernelnewbies.org/Linux_6.16)
* [2025-07-28, 20:10:00](https://hardware.slashdot.org/story/25/07/28/207225/tesla-signs-165-billion-contract-with-samsung-to-make-ai-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tesla Signs $16.5 Billion Contract With Samsung To Make AI Chips](https://hardware.slashdot.org/story/25/07/28/207225/tesla-signs-165-billion-contract-with-samsung-to-make-ai-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-28, 20:01:26](https://news.ycombinator.com/item?id=44714914) - [I designed my own fast game streaming video codec – PyroWave](https://themaister.net/blog/2025/06/16/i-designed-my-own-ridiculously-fast-game-streaming-video-codec-pyrowave/)
* [2025-07-28, 19:28:17](https://lobste.rs/s/ucvpt5/i_designed_my_own_ridiculously_fast_game) - [I designed my own ridiculously fast game streaming video codec](https://themaister.net/blog/2025/06/16/i-designed-my-own-ridiculously-fast-game-streaming-video-codec-pyrowave/)
* [2025-07-28, 19:05:47](https://news.ycombinator.com/item?id=44714223) - [Different Clocks](https://ianto-cannon.github.io/clock.html)
* [2025-07-28, 19:01:46](https://lobste.rs/s/hffqyh/bevy_production_building_modeling_at) - [Bevy in Production: Building Modeling at Metabuild](https://www.youtube.com/watch?v=16r9plbAhXo)
* [2025-07-28, 18:27:51](https://news.ycombinator.com/item?id=44713757) - [Claude Code weekly rate limits](https://news.ycombinator.com/item?id=44713757)
* [2025-07-28, 18:12:00](https://slashdot.org/story/25/07/28/1812229/microsoft-adds-copilot-mode-to-edge?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Adds Copilot Mode To Edge](https://slashdot.org/story/25/07/28/1812229/microsoft-adds-copilot-mode-to-edge?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-28, 18:03:34](https://lobste.rs/s/regzyw/giving_benchmarks_boat) - [Giving Benchmarks a Boat](https://buttondown.com/jaffray/archive/giving-benchmarks-a-boat/)
* [2025-07-28, 17:32:00](https://news.slashdot.org/story/25/07/28/1732217/chinese-universities-want-students-to-use-more-ai-not-less?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chinese Universities Want Students To Use More AI, Not Less](https://news.slashdot.org/story/25/07/28/1732217/chinese-universities-want-students-to-use-more-ai-not-less?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-28, 17:11:00](https://soylentnews.org/article.pl?sid=25/07/26/1924256&amp;from=rss) - [AMD CEO Says U.S.-Made TSMC Chips Are More Expensive, But Worth It](https://soylentnews.org/article.pl?sid=25/07/26/1924256&amp;from=rss)
* [2025-07-28, 16:53:00](https://news.slashdot.org/story/25/07/28/1653234/nearly-half-of-us-venture-capital-professionals-in-middle-to-senior-positions-have-no-successful-investments?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nearly Half of US Venture Capital Professionals in Middle To Senior Positions Have No Successful Investments](https://news.slashdot.org/story/25/07/28/1653234/nearly-half-of-us-venture-capital-professionals-in-middle-to-senior-positions-have-no-successful-investments?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-28, 16:36:43](https://lobste.rs/s/bf8a5i/from_xml_json_cbor) - [From XML to JSON to CBOR](https://cborbook.com/introduction/from_xml_to_json_to_cbor.html)
* [2025-07-28, 16:18:45](https://lobste.rs/s/bqwfhe/on_designing_application_uis_for) - [On designing application UIs for children](https://shaneosullivan.wordpress.com/2025/07/28/on-designing-for-children/)
* [2025-07-28, 15:21:13](https://news.ycombinator.com/item?id=44711745) - [Simplify, then add delightness: On designing for children](https://shaneosullivan.wordpress.com/2025/07/28/on-designing-for-children/)
* [2025-07-28, 14:57:55](https://news.ycombinator.com/item?id=44711519) - [Copyparty – Turn almost any device into a file server](https://github.com/9001/copyparty)
* [2025-07-28, 14:36:39](https://news.ycombinator.com/item?id=44711306) - [Tao on “blue team” vs. “red team” LLMs](https://mathstodon.xyz/@tao/114915604830689046)
* [2025-07-28, 14:21:42](https://lobste.rs/s/iesijl/following_up_on_python_jit) - [Following up on the Python JIT](https://lwn.net/Articles/1029307/)
* [2025-07-28, 13:05:37](https://lobste.rs/s/r44lr9/ai_tool_i_find_useful) - [An AI tool I find useful](https://notes.billmill.org/blog/2025/07/An_AI_tool_I_find_useful.html)
* [2025-07-28, 12:30:00](https://soylentnews.org/article.pl?sid=25/07/26/192237&amp;from=rss) - [Inventor Claims Bleach Injections will Destroy Cancer Tumors](https://soylentnews.org/article.pl?sid=25/07/26/192237&amp;from=rss)
* [2025-07-28, 12:06:27](https://lobste.rs/s/jdd06m/no_moar_cookies) - [No moar cookies](https://paretosecurity.com/blog/no-moar-cookies/)
* [2025-07-28, 10:10:41](https://lobste.rs/s/2ftfd1/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/2ftfd1/what_are_you_doing_this_week)
* [2025-07-28, 07:45:00](https://soylentnews.org/article.pl?sid=25/07/26/1848241&amp;from=rss) - [Coding, Remote Work and Rehabilitation](https://soylentnews.org/article.pl?sid=25/07/26/1848241&amp;from=rss)
* [2025-07-28, 07:41:11](https://lobste.rs/s/zs2xhp/redditor_speculates_eu_age_verification) - [Redditor Speculates that EU age verification app to ban any Android system not licensed by Google](https://www.reddit.com/r/degoogle/comments/1mau7yl/eu_age_verification_app_to_ban_any_android_system/)
* [2025-07-28, 05:40:42](https://lobste.rs/s/eqmttb/trane) - [[trane]](https://lisp.trane.studio/?tutor)
* [2025-07-28, 03:27:34](https://lobste.rs/s/zqinhx/programming_languages_application) - [Programming Languages: Application and Interpretation (3rd edition)](https://www.plai.org)
* [2025-07-28, 02:58:00](https://soylentnews.org/article.pl?sid=25/07/26/1844226&amp;from=rss) - [Google Sues Operators of 10-Million-Device Badbox 2.0 Botnet](https://soylentnews.org/article.pl?sid=25/07/26/1844226&amp;from=rss)
* [2025-07-27, 22:51:28](https://news.ycombinator.com/item?id=44705445) - [Enough AI copilots, we need AI HUDs](https://www.geoffreylitt.com/2025/07/27/enough-ai-copilots-we-need-ai-huds)
* [2025-07-27, 22:15:00](https://soylentnews.org/article.pl?sid=25/07/26/1830254&amp;from=rss) - [The Cells That Breathe Two Ways](https://soylentnews.org/article.pl?sid=25/07/26/1830254&amp;from=rss)
* [2025-07-27, 19:01:16](https://lobste.rs/s/jqm47i/til_exception_add_note) - [TIL: Exception.add_note](https://daniel.feldroy.com/posts/til-2025-05-exception-add_note)
* [2025-07-27, 17:37:00](https://soylentnews.org/article.pl?sid=25/07/26/1613246&amp;from=rss) - [UK To Ban Making Ransomware Payments For Some Organizations](https://soylentnews.org/article.pl?sid=25/07/26/1613246&amp;from=rss)
* [2025-07-27, 12:22:19](https://lobste.rs/s/m8ytbz/jj_vcs_workshop_zero_hero_speedrun) - [The JJ VCS Workshop: A Zero-to-Hero Speedrun](https://github.com/jkoppel/jj-workshop)
* [2025-07-27, 11:47:00](https://soylentnews.org/article.pl?sid=25/07/26/0330200&amp;from=rss) - [Japan Bets Big on Ultrathin, Ultralight Solar Panels](https://soylentnews.org/article.pl?sid=25/07/26/0330200&amp;from=rss)
* [2025-07-27, 06:50:00](https://soylentnews.org/article.pl?sid=25/07/26/0153214&amp;from=rss) - [WD Makes Click Of Death A Feature](https://soylentnews.org/article.pl?sid=25/07/26/0153214&amp;from=rss)
* [2025-07-27, 02:06:00](https://soylentnews.org/article.pl?sid=25/07/26/0146240&amp;from=rss) - [Social Media Is Dead – Here’s What Comes Next](https://soylentnews.org/article.pl?sid=25/07/26/0146240&amp;from=rss)
* [2025-07-26, 21:19:00](https://soylentnews.org/article.pl?sid=25/07/26/0136203&amp;from=rss) - [Tesla Continues Slide As Musk Warns Of \&quot;Rough Quarters\&quot; Ahead](https://soylentnews.org/article.pl?sid=25/07/26/0136203&amp;from=rss)
* [2025-07-26, 16:32:00](https://soylentnews.org/article.pl?sid=25/07/26/0131222&amp;from=rss) - [AI Industry&apos;s Size Obsession Is Killing ROI, Engineer Argues](https://soylentnews.org/article.pl?sid=25/07/26/0131222&amp;from=rss)
* [2025-07-26, 11:43:00](https://soylentnews.org/article.pl?sid=25/07/25/0534229&amp;from=rss) - [Work Less, Feel Better](https://soylentnews.org/article.pl?sid=25/07/25/0534229&amp;from=rss)
* [2025-07-26, 06:58:00](https://soylentnews.org/article.pl?sid=25/07/25/0511234&amp;from=rss) - [Debian Linux \&quot;Trixie\&quot; is Planned to Release on August 9](https://soylentnews.org/article.pl?sid=25/07/25/0511234&amp;from=rss)
* [2025-07-26, 02:54:46](https://news.ycombinator.com/item?id=44690914) - [SQLx – Rust SQL Toolkit](https://github.com/launchbadge/sqlx)
* [2025-07-26, 02:14:00](https://soylentnews.org/article.pl?sid=25/07/25/055215&amp;from=rss) - [Low(er) Price Tesla Announced](https://soylentnews.org/article.pl?sid=25/07/25/055215&amp;from=rss)
* [2025-07-26, 00:27:54](https://news.ycombinator.com/item?id=44690158) - [Hologram v0.5.0](https://hologram.page/blog/hologram-v0-5-0-released)
* [2025-07-26, 00:22:07](https://news.ycombinator.com/item?id=44690117) - [Show HN: CUDA Fractal Renderer](https://github.com/tripplyons/cuda-fractal-renderer)
* [2025-07-26, 00:19:26](https://news.ycombinator.com/item?id=44690095) - [Anker is no longer selling 3D Printers](https://www.theverge.com/report/714006/anker-stop-selling-3d-printer-m5-m5c-parts-eufymake)
* [2025-07-25, 22:53:50](https://news.ycombinator.com/item?id=44689453) - [Truchet Tiles](https://en.wikipedia.org/wiki/Truchet_tiles)
* [2025-07-25, 21:32:22](https://news.ycombinator.com/item?id=44688738) - [Tour de France confronts a new threat: Are cyclists using tiny motors?](https://www.washingtonpost.com/world/2025/07/25/tour-france-bikes-hidden-motors/)
* [2025-07-25, 21:31:00](https://soylentnews.org/article.pl?sid=25/07/25/0459237&amp;from=rss) - [NASA Scientist Finds Predicted Companion Star to Betelgeuse - NASA](https://soylentnews.org/article.pl?sid=25/07/25/0459237&amp;from=rss)
* [2025-07-25, 18:35:22](https://news.ycombinator.com/item?id=44686624) - [Rotring 600 Ballpoint Pen](https://www.shellshore.com/review-rotring-600-ballpoint-pen/)
* [2025-07-25, 14:44:00](https://soylentnews.org/article.pl?sid=25/07/24/1036232&amp;from=rss) - [Doctors Used Music Instead of Medication for Dementia Treatment](https://soylentnews.org/article.pl?sid=25/07/24/1036232&amp;from=rss)
* [2025-07-25, 12:38:30](https://news.ycombinator.com/item?id=44682450) - [Exploiting zero days in abandoned hardware](https://blog.trailofbits.com/2025/07/25/exploiting-zero-days-in-abandoned-hardware/)
* [2025-07-25, 10:01:00](https://soylentnews.org/article.pl?sid=25/07/24/1032215&amp;from=rss) - [Welcome to DebConf25 - the 26th Debian Linux Conference](https://soylentnews.org/article.pl?sid=25/07/24/1032215&amp;from=rss)
* [2025-07-25, 05:17:00](https://soylentnews.org/article.pl?sid=25/07/24/1027254&amp;from=rss) - [&apos;I Destroyed Months of Your Work in Seconds&apos; Says AI Coding Tool ](https://soylentnews.org/article.pl?sid=25/07/24/1027254&amp;from=rss)
* [2025-07-25, 00:28:00](https://soylentnews.org/article.pl?sid=25/07/24/1023256&amp;from=rss) - [How the Space Shuttles Were Given Better Names Thanks to Star Trek](https://soylentnews.org/article.pl?sid=25/07/24/1023256&amp;from=rss)
