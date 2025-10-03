# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Innovations and Insights

* [Linus Torvalds Lashes Out At RISC-V Big Endian Plans - Phoronix](https://www.phoronix.com/news/Torvalds-No-RISC-V-BE)

* [The Dawn of the Post-Literate Society](https://news.slashdot.org/story/25/10/03/096256/the-dawn-of-the-post-literate-society?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Webbol: A minimal static web server written in COBOL](https://github.com/jmsdnns/webbol)

* [Snapchat Caps Free Memory Storage, Launches Paid Storage Plans](https://hardware.slashdot.org/story/25/10/03/0444229/snapchat-caps-free-memory-storage-launches-paid-storage-plans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Artificial Intelligence & Data

* [Microsoft Says AI Can Create 'Zero Day' Threats In Biology](https://science.slashdot.org/story/25/10/02/2335217/microsoft-says-ai-can-create-zero-day-threats-in-biology?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [AI Coding is Massively Overhyped, Report Finds](https://soylentnews.org/article.pl?sid=25/10/01/2332257&amp;from=rss)

* [OpenAI Is Just Another Boring, Desperate AI Startup](https://www.wheresyoured.at/sora2-openai/)

## Environmental and Space Advancements

* [Jeff Bezos Predicts Gigawatt Data Centers in Space Within Two Decades](https://science.slashdot.org/story/25/10/03/1426244/jeff-bezos-predicts-gigawatt-data-centers-in-space-within-two-decades?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Frailty in Ageing Populations Worsened By Air Pollution, Global Review Finds](https://news.slashdot.org/story/25/10/03/117228/frailty-in-ageing-populations-worsened-by-air-pollution-global-review-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Ants Trapped in a Soviet Nuclear Bunker Survived for Years](https://www.sciencealert.com/ants-trapped-in-an-old-soviet-nuclear-bunker-survived-for-years-by-turning-on-their-own)

## Security and Cyber Threats

* [CISA Warns of Critical Linux Sudo Flaw Exploited in Attacks](https://soylentnews.org/article.pl?sid=25/10/02/1226238&amp;from=rss)

* [Key Cybersecurity Intelligence-Sharing Law Expires as Government Shuts Down](https://yro.slashdot.org/story/25/10/03/1441215/key-cybersecurity-intelligence-sharing-law-expires-as-government-shuts-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Cultural and Societal Shifts

* [Microsoft Excel UK Championships Crowned Its First Winner](https://slashdot.org/story/25/10/03/0815211/microsoft-excel-uk-championships-crowned-its-first-winner?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [The collapse of the econ PhD job market](https://www.chrisbrunet.com/p/the-collapse-of-the-econ-phd-job)

* [Americans Increasingly See Legal Sports Betting as a Bad Thing For Society and Sports](https://news.slashdot.org/story/25/10/03/0918249/americans-increasingly-see-legal-sports-betting-as-a-bad-thing-for-society-and-sports?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Unique Projects and Developments

* [I turned the Lego Game Boy into a working Game Boy](https://blog.nataliethenerd.com/i-turned-the-lego-game-boy-into-a-working-game-boy-part-1/)

* [Beginner-friendly issues across all repositories](https://tangled.org/goodfirstissues)

* [Niri – A scrollable-tiling Wayland compositor](https://github.com/YaLTeR/niri)

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

* [2025-10-03, 18:40:00](https://slashdot.org/story/25/10/03/0815211/microsoft-excel-uk-championships-crowned-its-first-winner?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Excel UK Championships Crowned Its First Winner](https://slashdot.org/story/25/10/03/0815211/microsoft-excel-uk-championships-crowned-its-first-winner?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-03, 18:34:13](https://lobste.rs/s/iausq0/pointer_leaks_through_pointer_keyed_data) - [Pointer leaks through pointer-keyed data structures](https://googleprojectzero.blogspot.com/2025/09/pointer-leaks-through-pointer-keyed.html)
* [2025-10-03, 18:34:00](https://soylentnews.org/article.pl?sid=25/10/02/1226238&amp;from=rss) - [CISA Warns of Critical Linux Sudo Flaw Exploited in Attacks](https://soylentnews.org/article.pl?sid=25/10/02/1226238&amp;from=rss)
* [2025-10-03, 18:01:00](https://tech.slashdot.org/story/25/10/03/0825245/have-we-passed-peak-social-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Have We Passed Peak Social Media?](https://tech.slashdot.org/story/25/10/03/0825245/have-we-passed-peak-social-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-03, 18:00:02](https://news.ycombinator.com/item?id=45465803) - [Apple removes ICEBlock, won&apos;t allow apps that report locations of ICE agents](https://arstechnica.com/tech-policy/2025/10/apple-bends-to-trump-admin-demand-to-remove-ice-tracking-apps-like-iceblock/)
* [2025-10-03, 17:50:47](https://lobste.rs/s/bsf7e1/linus_torvalds_lashes_out_at_risc_v_big) - [Linus Torvalds Lashes Out At RISC-V Big Endian Plans - Phoronix](https://www.phoronix.com/news/Torvalds-No-RISC-V-BE)
* [2025-10-03, 17:36:32](https://lobste.rs/s/aro0ic/jank_community_has_stepped_up) - [The jank community has stepped up](https://jank-lang.org/blog/2025-10-03-community/)
* [2025-10-03, 17:27:02](https://news.ycombinator.com/item?id=45465392) - [Email was the user interface for the first AI recommendation engines](https://buttondown.com/blog/ringo-email-as-an-ai-interface)
* [2025-10-03, 17:21:00](https://science.slashdot.org/story/25/10/03/1426244/jeff-bezos-predicts-gigawatt-data-centers-in-space-within-two-decades?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Jeff Bezos Predicts Gigawatt Data Centers in Space Within Two Decades](https://science.slashdot.org/story/25/10/03/1426244/jeff-bezos-predicts-gigawatt-data-centers-in-space-within-two-decades?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-03, 17:01:27](https://news.ycombinator.com/item?id=45465091) - [Ants Trapped in a Soviet Nuclear Bunker Survived for Years](https://www.sciencealert.com/ants-trapped-in-an-old-soviet-nuclear-bunker-survived-for-years-by-turning-on-their-own)
* [2025-10-03, 17:00:08](https://news.ycombinator.com/item?id=45465078) - [Depot (YC W23) Is Hiring a Principal Design Engineer (Remote US/EU)](https://www.ycombinator.com/companies/depot/jobs/qg8iVTz-principal-design-engineer)
* [2025-10-03, 16:49:57](https://news.ycombinator.com/item?id=45464984) - [The collapse of the econ PhD job market](https://www.chrisbrunet.com/p/the-collapse-of-the-econ-phd-job)
* [2025-10-03, 16:44:02](https://news.ycombinator.com/item?id=45464921) - [Germany must stand firmly against client-side scanning in Chat Control [pdf]](https://signal.org/blog/pdfs/germany-chat-control.pdf)
* [2025-10-03, 16:40:00](https://news.slashdot.org/story/25/10/03/117228/frailty-in-ageing-populations-worsened-by-air-pollution-global-review-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Frailty in Ageing Populations Worsened By Air Pollution, Global Review Finds](https://news.slashdot.org/story/25/10/03/117228/frailty-in-ageing-populations-worsened-by-air-pollution-global-review-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-03, 16:37:01](https://news.ycombinator.com/item?id=45464849) - [OpenAI Is Just Another Boring, Desperate AI Startup](https://www.wheresyoured.at/sora2-openai/)
* [2025-10-03, 16:18:29](https://news.ycombinator.com/item?id=45464632) - [Cancelling async Rust](https://sunshowers.io/posts/cancelling-async-rust/)
* [2025-10-03, 16:16:55](https://lobste.rs/s/d4batn/cancelling_async_rust) - [Cancelling async Rust](https://sunshowers.io/posts/cancelling-async-rust/)
* [2025-10-03, 16:05:29](https://lobste.rs/s/nzukgn/atuin_desktop_runbooks_run) - [Atuin desktop: Runbooks that run](https://github.com/atuinsh/desktop)
* [2025-10-03, 16:00:00](https://news.slashdot.org/story/25/10/03/0918249/americans-increasingly-see-legal-sports-betting-as-a-bad-thing-for-society-and-sports?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Americans Increasingly See Legal Sports Betting as a Bad Thing For Society and Sports](https://news.slashdot.org/story/25/10/03/0918249/americans-increasingly-see-legal-sports-betting-as-a-bad-thing-for-society-and-sports?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-03, 15:48:47](https://lobste.rs/s/5dlmct/hey_siri_block_reddit) - [Hey Siri. Block Reddit](https://www.jasontokoph.com/hey-siri-block-reddit/)
* [2025-10-03, 15:46:11](https://news.ycombinator.com/item?id=45464269) - [Anduril and Palantir battlefield comms system has deep flaws: Army](https://www.cnbc.com/2025/10/03/anduril-palantir-ngc2-deep-flaws-army.html)
* [2025-10-03, 15:21:00](https://tech.slashdot.org/story/25/10/03/151237/teslas-lead-in-car-software-updates-remains-unchallenged?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tesla&apos;s Lead in Car Software Updates Remains Unchallenged](https://tech.slashdot.org/story/25/10/03/151237/teslas-lead-in-car-software-updates-remains-unchallenged?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-03, 14:51:02](https://news.ycombinator.com/item?id=45463656) - [Social anxiety isn&apos;t about being liked](https://chrislakin.blog/p/social-anxiety)
* [2025-10-03, 14:48:36](https://news.ycombinator.com/item?id=45463642) - [Microsoft CTO says he wants to swap most AMD and Nvidia GPUs for homemade chips](https://www.theregister.com/2025/10/02/microsoft_maia_dc/)
* [2025-10-03, 14:43:12](https://lobste.rs/s/ebared/fundraising_campaign_sustain_gnu_guix) - [Fundraising campaign to sustain GNU Guix](https://guix.gnu.org/en/blog/2025/fundraising-campaign-to-sustain-gnu-guix/)
* [2025-10-03, 14:41:00](https://yro.slashdot.org/story/25/10/03/1441215/key-cybersecurity-intelligence-sharing-law-expires-as-government-shuts-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Key Cybersecurity Intelligence-Sharing Law Expires as Government Shuts Down](https://yro.slashdot.org/story/25/10/03/1441215/key-cybersecurity-intelligence-sharing-law-expires-as-government-shuts-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-03, 14:18:56](https://news.ycombinator.com/item?id=45463319) - [I turned the Lego Game Boy into a working Game Boy](https://blog.nataliethenerd.com/i-turned-the-lego-game-boy-into-a-working-game-boy-part-1/)
* [2025-10-03, 14:13:03](https://news.ycombinator.com/item?id=45463251) - [Webbol: A minimal static web server written in COBOL](https://github.com/jmsdnns/webbol)
* [2025-10-03, 14:00:00](https://news.slashdot.org/story/25/10/03/096256/the-dawn-of-the-post-literate-society?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Dawn of the Post-Literate Society](https://news.slashdot.org/story/25/10/03/096256/the-dawn-of-the-post-literate-society?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-03, 13:51:00](https://soylentnews.org/article.pl?sid=25/10/02/1054255&amp;from=rss) - [Photodiode Design Using Germanium Solves Key Challenge in on-Chip Light Monitoring](https://soylentnews.org/article.pl?sid=25/10/02/1054255&amp;from=rss)
* [2025-10-03, 13:26:03](https://lobste.rs/s/gwa7wm/beginner_friendly_issues_across_all) - [Beginner-friendly issues across all repositories](https://tangled.org/goodfirstissues)
* [2025-10-03, 13:21:44](https://news.ycombinator.com/item?id=45462713) - [CVE-2025-59489: Arbitrary Code Execution in Unity Runtime since 2017](https://flatt.tech/research/posts/arbitrary-code-execution-in-unity-runtime/)
* [2025-10-03, 13:00:00](https://developers.slashdot.org/story/25/10/03/0426240/nyt-podcast-on-job-market-for-recent-cs-grads-raises-ire-of-codeorg?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NYT Podcast On Job Market For Recent CS Grads Raises Ire of Code.org](https://developers.slashdot.org/story/25/10/03/0426240/nyt-podcast-on-job-market-for-recent-cs-grads-raises-ire-of-codeorg?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-03, 12:41:20](https://lobste.rs/s/ggwihc/threat_model_for_accessibility_on_web) - [A threat model for accessibility on the web](https://alice.boxhall.au/articles/a-threat-model-for-accessibility-on-the-web/)
* [2025-10-03, 12:41:03](https://news.ycombinator.com/item?id=45462297) - [Faroes](https://photoblog.nk412.com/Faroe2025/Faroes/n-cPCNFr)
* [2025-10-03, 12:38:47](https://lobste.rs/s/anuzef/cve_2025_59489_arbitrary_code_execution) - [CVE-2025-59489: Arbitrary Code Execution in Unity Runtime](https://flatt.tech/research/posts/arbitrary-code-execution-in-unity-runtime/)
* [2025-10-03, 12:24:02](https://news.ycombinator.com/item?id=45462143) - [A Thermometer for Measuring Quantumness](https://www.quantamagazine.org/a-thermometer-for-measuring-quantumness-20251001/)
* [2025-10-03, 11:15:05](https://lobste.rs/s/cqdtto/we_bought_whole_gpu_so_we_re_damn_well_going) - [We Bought the Whole GPU, So We&apos;re Damn Well Going to Use the Whole GPU](https://hazyresearch.stanford.edu/blog/2025-09-28-tp-llama-main)
* [2025-10-03, 11:08:42](https://news.ycombinator.com/item?id=45461500) - [Niri – A scrollable-tiling Wayland compositor](https://github.com/YaLTeR/niri)
* [2025-10-03, 11:05:21](https://lobste.rs/s/vzvlgy/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/vzvlgy/what_are_you_doing_this_weekend)
* [2025-10-03, 10:00:00](https://hardware.slashdot.org/story/25/10/03/0444229/snapchat-caps-free-memory-storage-launches-paid-storage-plans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Snapchat Caps Free Memory Storage, Launches Paid Storage Plans](https://hardware.slashdot.org/story/25/10/03/0444229/snapchat-caps-free-memory-storage-launches-paid-storage-plans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-03, 09:06:00](https://soylentnews.org/article.pl?sid=25/10/02/1052258&amp;from=rss) - [ICE to Buy Tool that Tracks Locations of Hundreds of Millions of Phones](https://soylentnews.org/article.pl?sid=25/10/02/1052258&amp;from=rss)
* [2025-10-03, 07:00:00](https://science.slashdot.org/story/25/10/02/2335217/microsoft-says-ai-can-create-zero-day-threats-in-biology?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Says AI Can Create &apos;Zero Day&apos; Threats In Biology](https://science.slashdot.org/story/25/10/02/2335217/microsoft-says-ai-can-create-zero-day-threats-in-biology?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-03, 05:13:47](https://news.ycombinator.com/item?id=45459233) - [In Praise of RSS and Controlled Feeds of Information](https://blog.burkert.me/posts/in_praise_of_syndication/)
* [2025-10-03, 04:21:23](https://news.ycombinator.com/item?id=45458948) - [Fp8 runs ~100 tflops faster when the kernel name has \&quot;cutlass\&quot; in it](https://github.com/triton-lang/triton/pull/7298)
* [2025-10-03, 04:21:00](https://soylentnews.org/article.pl?sid=25/10/01/2332257&amp;from=rss) - [AI Coding is Massively Overhyped, Report Finds](https://soylentnews.org/article.pl?sid=25/10/01/2332257&amp;from=rss)
* [2025-10-03, 03:30:00](https://yro.slashdot.org/story/25/10/02/238239/cops-accused-vandal-confessed-to-chatgpt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cops: Accused Vandal Confessed To ChatGPT](https://yro.slashdot.org/story/25/10/02/238239/cops-accused-vandal-confessed-to-chatgpt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-03, 03:02:00](https://lobste.rs/s/cvyvc1/domain_driven_design_clojure_with) - [Domain Driven Design in Clojure with generalized Hiccup](https://www.biotz.io/post/domain-driven-design-in-clojure-with-generalized-hiccup)
* [2025-10-03, 02:02:00](https://science.slashdot.org/story/25/10/02/2217211/autism-should-not-be-seen-as-single-condition-with-one-cause-say-scientists?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Autism Should Not Be Seen As Single Condition With One Cause, Say Scientists](https://science.slashdot.org/story/25/10/02/2217211/autism-should-not-be-seen-as-single-condition-with-one-cause-say-scientists?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-03, 01:25:00](https://it.slashdot.org/story/25/10/02/224238/ford-it-systems-tampered-with-to-display-vulgar-anti-rto-message-across-office-screens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ford IT Systems Tampered With To Display Vulgar Anti-RTO Message Across Office Screens](https://it.slashdot.org/story/25/10/02/224238/ford-it-systems-tampered-with-to-display-vulgar-anti-rto-message-across-office-screens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-03, 01:20:32](https://news.ycombinator.com/item?id=45457670) - [I spent the day teaching seniors how to use an iPhone](https://forums.macrumors.com/threads/i-spent-the-day-trying-to-teach-seniors-how-to-use-an-iphone-and-it-was-a-nightmare.2468117/)
* [2025-10-03, 00:45:00](https://tech.slashdot.org/story/25/10/02/2156215/colorado-deploys-self-driving-crash-trucks-to-protect-highway-workers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Colorado Deploys Self-Driving Crash Trucks To Protect Highway Workers](https://tech.slashdot.org/story/25/10/02/2156215/colorado-deploys-self-driving-crash-trucks-to-protect-highway-workers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-03, 00:44:06](https://lobste.rs/s/be78ef/dropping_upstream_nix_from_determinate) - [Dropping upstream Nix from Determinate Nix Installer](https://determinate.systems/blog/installer-dropping-upstream/)
* [2025-10-03, 00:12:38](https://lobste.rs/s/3oyazz/signal_protocol_post_quantum_ratchets) - [Signal Protocol and Post-Quantum Ratchets](https://signal.org/blog/spqr/)
* [2025-10-02, 23:35:00](https://soylentnews.org/article.pl?sid=25/09/30/1336240&amp;from=rss) - [Mix Insect, Plant and Cultivated Proteins for Healthier, Greener, Tastier Food, Say Experts](https://soylentnews.org/article.pl?sid=25/09/30/1336240&amp;from=rss)
* [2025-10-02, 21:34:34](https://lobste.rs/s/0zzvie/c_26_std_optional_t) - [C++26: std::optional&lt;T&amp;&gt;](https://www.sandordargo.com/blog/2025/10/01/cpp26-optional-of-reference)
* [2025-10-02, 21:15:41](https://lobste.rs/s/xcceiy/neural_network_written_completely_jq) - [A neural network written completely in jq (2017)](https://github.com/kevin-albert/jq-neural-network)
* [2025-10-02, 20:38:31](https://lobste.rs/s/ulyau9/whatever_happened_sha_256_support_git) - [Whatever happened to SHA-256 support in Git? (2022)](https://lwn.net/Articles/898522/)
* [2025-10-02, 20:32:23](https://lobste.rs/s/yhp6ym/where_it_s_at) - [Where It&apos;s at://](https://overreacted.io/where-its-at/)
* [2025-10-02, 20:15:47](https://lobste.rs/s/lp2qpd/risk_rolls_downhill) - [Risk Rolls Downhill](https://corecursive.com/horizon-scandal-with-scott-darlington/)
* [2025-10-02, 20:04:17](https://lobste.rs/s/2ib77w/litestream_v0_5_0_is_here) - [Litestream v0.5.0 is Here](https://fly.io/blog/litestream-v050-is-here/)
* [2025-10-02, 19:02:57](https://news.ycombinator.com/item?id=45453936) - [Litestream v0.5.0](https://fly.io/blog/litestream-v050-is-here/)
* [2025-10-02, 18:52:08](https://lobste.rs/s/cpersg/wombat_s_book_nix) - [Wombat’s Book of Nix](https://mhwombat.codeberg.page/nix-book/)
* [2025-10-02, 18:46:00](https://soylentnews.org/article.pl?sid=25/09/30/1328225&amp;from=rss) - [Complex Knots Can Actually be Easier to Untie Than Simple Ones](https://soylentnews.org/article.pl?sid=25/09/30/1328225&amp;from=rss)
* [2025-10-02, 18:12:01](https://lobste.rs/s/afajjh/nine_http_edge_cases) - [Nine HTTP Edge Cases](https://blog.dochia.dev/blog/http_edge_cases/)
* [2025-10-02, 16:06:10](https://news.ycombinator.com/item?id=45451527) - [Signal Protocol and Post-Quantum Ratchets](https://signal.org/blog/spqr/)
* [2025-10-02, 15:33:18](https://lobste.rs/s/p79vuw/i_turned_lego_game_boy_into_working_game) - [I turned the Lego Game Boy into a working Game Boy](https://blog.nataliethenerd.com/i-turned-the-lego-game-boy-into-a-working-game-boy-part-1/)
* [2025-10-02, 14:03:00](https://soylentnews.org/article.pl?sid=25/09/30/1323239&amp;from=rss) - [Huawei’s Ternary Logic Breakthrough: a Game-Changer or Just Hype?](https://soylentnews.org/article.pl?sid=25/09/30/1323239&amp;from=rss)
* [2025-10-02, 09:53:13](https://lobste.rs/s/8hw5n6/asked_do_something_illegal_at_work_here_s) - [Asked to do something illegal at work? Here’s what these software engineers did](https://blog.pragmaticengineer.com/asked-to-do-something-illegal-at-work/)
* [2025-10-02, 09:16:00](https://soylentnews.org/article.pl?sid=25/09/30/1249215&amp;from=rss) - [Experts Alarmed That AI is Now Producing Functional Viruses](https://soylentnews.org/article.pl?sid=25/09/30/1249215&amp;from=rss)
* [2025-10-02, 04:31:00](https://soylentnews.org/article.pl?sid=25/09/30/0352206&amp;from=rss) - [Scientists Unlock Secret to Thick, Stable Beer Foams](https://soylentnews.org/article.pl?sid=25/09/30/0352206&amp;from=rss)
* [2025-10-01, 23:47:00](https://soylentnews.org/article.pl?sid=25/09/30/0349204&amp;from=rss) - [Explainer: Why a Decades Old Architecture Decision is Impeding the Power of AI Computing](https://soylentnews.org/article.pl?sid=25/09/30/0349204&amp;from=rss)
* [2025-10-01, 19:02:00](https://soylentnews.org/article.pl?sid=25/09/30/0346236&amp;from=rss) - [This Black Hole Flipped its Magnetic Field](https://soylentnews.org/article.pl?sid=25/09/30/0346236&amp;from=rss)
* [2025-10-01, 14:15:00](https://soylentnews.org/article.pl?sid=25/09/30/0336248&amp;from=rss) - [Claude&apos;s New AI File Creation Feature Ships With Deep Security Risks Built in](https://soylentnews.org/article.pl?sid=25/09/30/0336248&amp;from=rss)
* [2025-10-01, 10:26:26](https://news.ycombinator.com/item?id=45436148) - [Kairos: Immutable Distro for K8s at the Edge](https://kairos.io/)
* [2025-10-01, 09:32:00](https://soylentnews.org/article.pl?sid=25/09/29/0143218&amp;from=rss) - [Shopify Engages in Hostile Takeover of RubyGems and Bundler](https://soylentnews.org/article.pl?sid=25/09/29/0143218&amp;from=rss)
* [2025-10-01, 08:55:08](https://news.ycombinator.com/item?id=45435677) - [Copper workers&apos; experiments might have helped usher in Iron Age](https://archaeology.org/news/2025/09/30/copper-workers-experiments-might-have-helped-usher-in-iron-age/)
* [2025-10-01, 08:41:08](https://news.ycombinator.com/item?id=45435608) - [Radicle: Peer-to-Peer Collaboration with Git (2024)](https://lwn.net/Articles/966869/)
* [2025-10-01, 07:51:24](https://news.ycombinator.com/item?id=45435375) - [The Beer Can (2023)](https://brr.fyi/posts/beer-can)
* [2025-10-01, 07:33:20](https://news.ycombinator.com/item?id=45435283) - [Glide, an extensible, keyboard-focused web browser](https://blog.craigie.dev/introducing-glide/)
* [2025-10-01, 04:49:00](https://soylentnews.org/article.pl?sid=25/09/29/0130236&amp;from=rss) - [Workslop - the Result of Too Much Clueless AI](https://soylentnews.org/article.pl?sid=25/09/29/0130236&amp;from=rss)
* [2025-10-01, 00:05:00](https://soylentnews.org/article.pl?sid=25/09/29/0126248&amp;from=rss) - [Inequality in Agri-Food Chains: Global South Produces the Food, the Global North Keeps the Wealth](https://soylentnews.org/article.pl?sid=25/09/29/0126248&amp;from=rss)
* [2025-09-30, 19:24:00](https://soylentnews.org/article.pl?sid=25/09/29/0124238&amp;from=rss) - [Details Beginning to Emerge About Australia&apos;s Social Media Ban](https://soylentnews.org/article.pl?sid=25/09/29/0124238&amp;from=rss)
* [2025-09-30, 14:39:00](https://soylentnews.org/article.pl?sid=25/09/29/0111207&amp;from=rss) - [Forty Years of Commitment to Software Freedom](https://soylentnews.org/article.pl?sid=25/09/29/0111207&amp;from=rss)
* [2025-09-30, 09:57:00](https://soylentnews.org/article.pl?sid=25/09/29/018254&amp;from=rss) - [OpenAI and Nvidia’s $100B AI Plan Will Require Power Equal to 10 Nuclear Reactors](https://soylentnews.org/article.pl?sid=25/09/29/018254&amp;from=rss)
* [2025-09-30, 05:15:00](https://soylentnews.org/article.pl?sid=25/09/29/0055259&amp;from=rss) - [Think Twice Before Abandoning X11. Wayland Breaks Everything!](https://soylentnews.org/article.pl?sid=25/09/29/0055259&amp;from=rss)
* [2025-09-30, 00:49:54](https://news.ycombinator.com/item?id=45420722) - [Modern Font Stacks](https://modernfontstacks.com/)
* [2025-09-30, 00:32:00](https://soylentnews.org/article.pl?sid=25/09/29/0053249&amp;from=rss) - [EA is Reportedly About to be Sold in a Record-Setting $50 Billion Buyout](https://soylentnews.org/article.pl?sid=25/09/29/0053249&amp;from=rss)
* [2025-09-29, 22:44:39](https://news.ycombinator.com/item?id=45419780) - [Low-dose radiation offers relief to people with knee osteoarthritis](https://www.astro.org/news-and-publications/news-and-media-center/news-releases/2025/low-dose-radiation-therapy-offers-substantial-relief-to-people-with-painful-knee-osteoarthritis)
* [2025-09-29, 19:46:00](https://soylentnews.org/article.pl?sid=25/09/28/0016247&amp;from=rss) - [New World Screwworm Parasite Detected in Northern Mexico Near US Border](https://soylentnews.org/article.pl?sid=25/09/28/0016247&amp;from=rss)
* [2025-09-29, 18:25:10](https://news.ycombinator.com/item?id=45417070) - [Small Near-Earth Objects in the Taurid Resonant Swarm](https://arxiv.org/abs/2509.22602)
* [2025-09-29, 15:02:00](https://soylentnews.org/article.pl?sid=25/09/28/0015236&amp;from=rss) - [8,000 years of Human Activities Aave Caused Wild Animals to Shrink and Domestic Animals to Grow](https://soylentnews.org/article.pl?sid=25/09/28/0015236&amp;from=rss)
* [2025-09-29, 10:17:00](https://soylentnews.org/article.pl?sid=25/09/28/008233&amp;from=rss) - [Physicists Nearly Double Speed of Superconducting Qubit Readout in Quantum Computers](https://soylentnews.org/article.pl?sid=25/09/28/008233&amp;from=rss)
* [2025-09-29, 05:35:00](https://soylentnews.org/article.pl?sid=25/09/28/006252&amp;from=rss) - [The Cyber Vulnerabilities Lurking in CRM Systems](https://soylentnews.org/article.pl?sid=25/09/28/006252&amp;from=rss)
* [2025-09-29, 00:49:00](https://soylentnews.org/article.pl?sid=25/09/27/141202&amp;from=rss) - [This Experimental Computer Chip Reuses Energy](https://soylentnews.org/article.pl?sid=25/09/27/141202&amp;from=rss)
