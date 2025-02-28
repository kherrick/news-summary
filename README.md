# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Machine Learning Advancements

* [Viral Video Shows AIs Conversing In Their Own Language](https://tech.slashdot.org/story/25/02/28/0058237/viral-video-shows-ais-conversing-in-their-own-language?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://tech.slashdot.org/story/25/02/28/0058237/viral-video-shows-ais-conversing-in-their-own-language?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Launch HN: Bild AI (YC W25) - Understand Construction Blueprints Using AI](https://news.ycombinator.com/item?id=43196474)

## Scientific Breakthroughs and Discoveries

* [Hydrogen cyanide and acetylene detected in a brown dwarf](https://phys.org/news/2025-02-hydrogen-cyanide-acetylene-brown-dwarf.html) ([comments](https://news.ycombinator.com/item?id=43201164))

* [World-first experimental cancer treatment paves way for clinical trial](https://www.wehi.edu.au/news/world-first-experimental-cancer-treatment-paves-way-for-clinical-trial/) ([comments](https://news.ycombinator.com/item?id=43199210))

* [Robot With 1,000 Muscles Twitches Like Human While Dangling From Ceiling](https://soylentnews.org/article.pl?sid=25/02/26/1856235&from=rss)

## Technological and Internet Security

* [Apple's Find My Network Exploit Lets Hackers Silently Track Any Bluetooth Device](https://yro.slashdot.org/story/25/02/28/013227/apples-find-my-network-exploit-lets-hackers-silently-track-any-bluetooth-device?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://yro.slashdot.org/story/25/02/28/013227/apples-find-my-network-exploit-lets-hackers-silently-track-any-bluetooth-device?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Thousands of Exposed GitHub Repositories, Now Private, Can Still Be Accessed Through Copilot](https://yro.slashdot.org/story/25/02/27/2129241/thousands-of-exposed-github-repositories-now-private-can-still-be-accessed-through-copilot?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Open Source Innovations

* [Some Command & Conquer Games Are Now Open Source](https://github.com/electronicarts) ([comments](https://news.ycombinator.com/item?id=43199460))

* [Welcome to Ladybird, a Truly Independent Web Browser](https://github.com/LadybirdBrowser/ladybird) ([comments](https://news.ycombinator.com/item?id=43200604))

## Environmental and Sustainability Efforts

* [Piezoelectric Catalyst Destroys Forever Chemicals](https://soylentnews.org/article.pl?sid=25/02/27/1633200&from=rss)

* [More Than 100,000 African Seeds Put in Svalbard Vault For Safekeeping](https://news.slashdot.org/story/25/02/27/1916211/more-than-100000-african-seeds-put-in-svalbard-vault-for-safekeeping?utm_source=rss1.0mainlinkanon&utm_medium=feed)

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

* [2025-02-28, 03:34:14](https://news.ycombinator.com/item?id=43201417) - [macOS Tips and Tricks](https://saurabhs.org/macos-tips)
* [2025-02-28, 03:30:00](https://tech.slashdot.org/story/25/02/28/0058237/viral-video-shows-ais-conversing-in-their-own-language?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Viral Video Shows AIs Conversing In Their Own Language](https://tech.slashdot.org/story/25/02/28/0058237/viral-video-shows-ais-conversing-in-their-own-language?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-28, 03:17:19](https://lobste.rs/s/d9ivn2/make_cross_views) - [Make Cross Views](https://moultano.wordpress.com/2025/02/24/you-should-make-cross-views/)
* [2025-02-28, 03:05:00](https://soylentnews.org/article.pl?sid=25/02/27/1633200&from=rss) - [Piezoelectric Catalyst Destroys Forever Chemicals](https://soylentnews.org/article.pl?sid=25/02/27/1633200&from=rss)
* [2025-02-28, 02:46:44](https://news.ycombinator.com/item?id=43201164) - [Hydrogen cyanide and acetylene detected in a brown dwarf](https://phys.org/news/2025-02-hydrogen-cyanide-acetylene-brown-dwarf.html)
* [2025-02-28, 02:20:11](https://lobste.rs/s/ioztzf/there_isn_t_much_point_http_2_past_load) - [There Isn’t Much Point to HTTP/2 Past The Load Balancer](https://byroot.github.io/ruby/performance/2025/02/24/http2-past-the-load-balancer.html)
* [2025-02-28, 02:18:55](https://news.ycombinator.com/item?id=43200960) - [Doc NTIA lead nominee criticizes \"woke\" and \"socialist\" fiber broadband subsidy](https://broadbandbreakfast.com/incoming-ntia-chief-doesnt-like-beads-fiber-preference-low-cost-mandates-2/)
* [2025-02-28, 02:02:00](https://yro.slashdot.org/story/25/02/28/013227/apples-find-my-network-exploit-lets-hackers-silently-track-any-bluetooth-device?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Apple's Find My Network Exploit Lets Hackers Silently Track Any Bluetooth Device](https://yro.slashdot.org/story/25/02/28/013227/apples-find-my-network-exploit-lets-hackers-silently-track-any-bluetooth-device?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-28, 01:34:00](https://soylentnews.org/meta/article.pl?sid=25/02/21/1425224&from=rss) - [Adoption of Site Documentation - THIS IS THE VOTE - RESTORED](https://soylentnews.org/meta/article.pl?sid=25/02/21/1425224&from=rss)
* [2025-02-28, 01:29:49](https://news.ycombinator.com/item?id=43200604) - [Welcome to Ladybird, a truly independent web browser](https://github.com/LadybirdBrowser/ladybird)
* [2025-02-28, 01:26:26](https://news.ycombinator.com/item?id=43200572) - [Fire-Flyer File System from DeepSeek](https://github.com/deepseek-ai/3FS)
* [2025-02-28, 01:25:00](https://tech.slashdot.org/story/25/02/28/0046233/apple-launches-age-assurance-tech-as-us-states-mull-social-media-laws?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Apple Launches 'Age Assurance' Tech As US States Mull Social Media Laws](https://tech.slashdot.org/story/25/02/28/0046233/apple-launches-age-assurance-tech-as-us-states-mull-social-media-laws?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-28, 01:18:58](https://news.ycombinator.com/item?id=43200536) - [Show HN: Python micro event loop library (~250 LOC)](https://gist.github.com/tarruda/5b8c19779c8ff4e8100f0b37eb5981ea)
* [2025-02-28, 01:03:59](https://news.ycombinator.com/item?id=43200450) - [Markov Chains Explained Visually (2014)](https://setosa.io/ev/markov-chains/)
* [2025-02-28, 00:45:00](https://apple.slashdot.org/story/25/02/27/2152210/microsoft-releases-a-copilot-app-for-mac?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Releases a Copilot App For Mac](https://apple.slashdot.org/story/25/02/27/2152210/microsoft-releases-a-copilot-app-for-mac?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-28, 00:05:31](https://news.ycombinator.com/item?id=43200065) - [Mozilla owns \"information you input through Firefox\"](https://www.mozilla.org/en-US/about/legal/terms/firefox/)
* [2025-02-28, 00:02:57](https://lobste.rs/s/0ldvvk/nvidia_emulation_journey_part_1_riva_128) - [NVIDIA emulation journey, part 1: RIVA 128 / NV3 architecture history and basic overview](https://86box.net/2025/02/25/riva128-part-1.html)
* [2025-02-28, 00:02:00](https://tech.slashdot.org/story/25/02/27/2147257/openai-sam-altman-says-the-company-is-out-of-gpus?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [OpenAI Sam Altman Says the Company Is 'Out of GPUs'](https://tech.slashdot.org/story/25/02/27/2147257/openai-sam-altman-says-the-company-is-out-of-gpus?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-27, 23:20:00](https://games.slashdot.org/story/25/02/27/2144203/ea-releases-source-code-for-old-command-and-conquer-games?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [EA Releases Source Code For Old Command and Conquer Games](https://games.slashdot.org/story/25/02/27/2144203/ea-releases-source-code-for-old-command-and-conquer-games?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-27, 23:00:31](https://lobste.rs/s/abs9fe/building_query_compilers) - [Building Query Compilers](https://pi3.informatik.uni-mannheim.de/~moer/querycompiler.pdf)
* [2025-02-27, 23:00:00](https://tech.slashdot.org/story/25/02/27/2134206/technicolor-begins-to-shut-down-operations?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Technicolor Begins To Shut Down Operations](https://tech.slashdot.org/story/25/02/27/2134206/technicolor-begins-to-shut-down-operations?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-27, 22:52:17](https://news.ycombinator.com/item?id=43199460) - [Some Command & Conquer games are now open source](https://github.com/electronicarts)
* [2025-02-27, 22:40:00](https://yro.slashdot.org/story/25/02/27/2129241/thousands-of-exposed-github-repositories-now-private-can-still-be-accessed-through-copilot?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Thousands of Exposed GitHub Repositories, Now Private, Can Still Be Accessed Through Copilot](https://yro.slashdot.org/story/25/02/27/2129241/thousands-of-exposed-github-repositories-now-private-can-still-be-accessed-through-copilot?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-27, 22:28:49](https://news.ycombinator.com/item?id=43199256) - [IBM Completes Acquisition of HashiCorp](https://newsroom.ibm.com/2025-02-27-ibm-completes-acquisition-of-hashicorp,-creates-comprehensive,-end-to-end-hybrid-cloud-platform)
* [2025-02-27, 22:24:22](https://news.ycombinator.com/item?id=43199210) - [World-first experimental cancer treatment paves way for clinical trial](https://www.wehi.edu.au/news/world-first-experimental-cancer-treatment-paves-way-for-clinical-trial/)
* [2025-02-27, 22:19:00](https://soylentnews.org/article.pl?sid=25/02/26/190229&from=rss) - [Right to Repair Laws Have Now Been Introduced in All 50 US States](https://soylentnews.org/article.pl?sid=25/02/26/190229&from=rss)
* [2025-02-27, 22:00:00](https://tech.slashdot.org/story/25/02/27/199236/meta-is-firing-about-20-employees-for-leaking?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Meta is Firing About 20 Employees For Leaking](https://tech.slashdot.org/story/25/02/27/199236/meta-is-firing-about-20-employees-for-leaking?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-27, 21:22:00](https://news.slashdot.org/story/25/02/27/1916211/more-than-100000-african-seeds-put-in-svalbard-vault-for-safekeeping?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [More Than 100,000 African Seeds Put in Svalbard Vault For Safekeeping](https://news.slashdot.org/story/25/02/27/1916211/more-than-100000-african-seeds-put-in-svalbard-vault-for-safekeeping?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-27, 21:11:38](https://lobste.rs/s/5i3syb/visual_programming_is_stuck_on_form) - [Visual programming is stuck on the form](https://interjectedfuture.com/visual-programming-is-stuck-on-the-form/)
* [2025-02-27, 21:07:57](https://news.ycombinator.com/item?id=43198520) - [Postgres as a Graph Database: (Ab)Using PgRouting](https://supabase.com/blog/pgrouting-postgres-graph-database)
* [2025-02-27, 21:00:33](https://news.ycombinator.com/item?id=43198457) - [Kastle (YC S24) Is Hiring – AI for Loan Servicing](https://www.ycombinator.com/companies/kastle/jobs/ItDVKB7-founding-backend-engineer-at-kastle-s24)
* [2025-02-27, 20:51:23](https://news.ycombinator.com/item?id=43198379) - [Nvidia emulation journey, part 1: RIVA 128/NV3 architecture history and overview](https://86box.net/2025/02/25/riva128-part-1.html)
* [2025-02-27, 20:39:29](https://news.ycombinator.com/item?id=43198245) - [Show HN: Wireless video streaming on POV bike display](https://www.youtube.com/watch?v=o8n-bu2kKnc)
* [2025-02-27, 20:25:00](https://slashdot.org/story/25/02/27/2022254/openai-rolls-out-gpt-45?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [OpenAI Rolls Out GPT-4.5](https://slashdot.org/story/25/02/27/2022254/openai-rolls-out-gpt-45?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-27, 20:09:36](https://lobste.rs/s/h5zfdf/branded_types) - [Branded Types](https://www.learningtypescript.com/articles/branded-types)
* [2025-02-27, 20:01:16](https://news.ycombinator.com/item?id=43197872) - [GPT-4.5](https://openai.com/index/introducing-gpt-4-5/)
* [2025-02-27, 20:00:00](https://yro.slashdot.org/story/25/02/27/1329252/automattics-nuclear-war-over-wordpress-access-sparks-potential-class-action?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Automattic's 'Nuclear War' Over WordPress Access Sparks Potential Class Action](https://yro.slashdot.org/story/25/02/27/1329252/automattics-nuclear-war-over-wordpress-access-sparks-potential-class-action?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-27, 19:20:00](https://news.slashdot.org/story/25/02/27/0747237/one-mans-battle-to-save-the-last-phone-box-in-his-village?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [One Man's Battle To Save the Last Phone Box in His Village](https://news.slashdot.org/story/25/02/27/0747237/one-mans-battle-to-save-the-last-phone-box-in-his-village?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-27, 19:11:13](https://lobste.rs/s/sdm7pb/tips_debug_hanging_go_programs) - [Tips to debug hanging Go programs](https://michael.stapelberg.ch/posts/2025-02-27-debug-hanging-go-programs/)
* [2025-02-27, 18:54:19](https://lobste.rs/s/d8ydvt/command_conquer_red_alert_source_code) - [Command and Conquer: Red Alert source code](https://github.com/electronicarts/CnC_Red_Alert)
* [2025-02-27, 18:52:01](https://news.ycombinator.com/item?id=43197234) - [What can be computed? A practical guide to the theory of computation (2018) [pdf]](https://www.softouch.on.ca/kb/data/What%20Can%20Be%20Computed.pdf)
* [2025-02-27, 18:42:01](https://lobste.rs/s/fpidir/accessing_region_locked_ios_features) - [Accessing region-locked iOS features, such as EU app stores](https://downrightnifty.me/blog/2025/02/27/eu-features-outside.html)
* [2025-02-27, 18:41:00](https://games.slashdot.org/story/25/02/27/1048224/pokemon-boss-believes-series-can-last-another-50-to-100-years?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Pokemon Boss Believes Series Can Last Another 50 To 100 Years](https://games.slashdot.org/story/25/02/27/1048224/pokemon-boss-believes-series-can-last-another-50-to-100-years?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-27, 18:00:00](https://developers.slashdot.org/story/25/02/27/0931201/the-reality-of-long-term-software-maintenance?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [The Reality of Long-Term Software Maintenance](https://developers.slashdot.org/story/25/02/27/0931201/the-reality-of-long-term-software-maintenance?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-27, 17:35:00](https://soylentnews.org/article.pl?sid=25/02/26/1856235&from=rss) - [Robot With 1,000 Muscles Twitches Like Human While Dangling From Ceiling](https://soylentnews.org/article.pl?sid=25/02/26/1856235&from=rss)
* [2025-02-27, 17:30:51](https://news.ycombinator.com/item?id=43196474) - [Launch HN: Bild AI (YC W25) – Understand Construction Blueprints Using AI](https://news.ycombinator.com/item?id=43196474)
* [2025-02-27, 17:24:20](https://lobste.rs/s/1naw96/goodbye_k_9_mail) - [Goodbye K-9 Mail](https://cketti.de/2025/02/26/goodbye-k9mail/)
* [2025-02-27, 17:20:22](https://news.ycombinator.com/item?id=43196374) - [Show HN: Superglue – open source API connector that writes its own code](https://github.com/superglue-ai/superglue)
* [2025-02-27, 17:03:39](https://news.ycombinator.com/item?id=43196207) - [Turning a Bluetooth device into an Apple AirTag without root privileges](https://nroottag.github.io/)
* [2025-02-27, 16:14:45](https://news.ycombinator.com/item?id=43195724) - [Muon's magnetic moment exposes a hole in the Standard Model, unless it doesn't](https://physicsworld.com/a/the-muons-magnetic-moment-exposes-a-huge-hole-in-the-standard-model-unless-it-doesnt/)
* [2025-02-27, 15:55:21](https://news.ycombinator.com/item?id=43195525) - [A $100 DIY muon tomographer](https://spectrum.ieee.org/diy-muon-tomography)
* [2025-02-27, 15:54:36](https://news.ycombinator.com/item?id=43195516) - [Solitaire](https://localthunk.com/blog/solitaire)
* [2025-02-27, 15:15:28](https://lobste.rs/s/0hxggz/servo_security_report_findings) - [Servo Security Report: findings and solutions](https://servo.org/blog/2025/02/26/servo-security-report/)
* [2025-02-27, 15:02:39](https://news.ycombinator.com/item?id=43194971) - [Show HN: Probly – Spreadsheets, Python, and AI in the browser](https://github.com/PragmaticMachineLearning/probly)
* [2025-02-27, 14:16:38](https://lobste.rs/s/ww96mh/why_are_jujutsu_s_id_prefixes_so_short) - [Why are Jujutsu's ID Prefixes So Short?](https://jonathan-frere.com/posts/jujutsu-shortest-ids/)
* [2025-02-27, 14:05:57](https://lobste.rs/s/4fxbkn/git_for_fansubbing_probably_mistake) - [Git for Fansubbing: Probably a Mistake](https://redvice.org/2025/git-subbing-was-a-mistake/)
* [2025-02-27, 13:32:38](https://lobste.rs/s/ym7xhm/release_fish_shell_4_0_0_now_ported_rust) - [Release fish shell 4.0.0, now ported to Rust](https://github.com/fish-shell/fish-shell/releases/tag/4.0.0)
* [2025-02-27, 13:23:53](https://lobste.rs/s/0csx3b/safetycore_new_android_feature_is) - [SafetyCore: new Android feature is scanning your photos for 'sensitive content'](https://www.zdnet.com/article/a-new-android-feature-is-scanning-your-photos-for-sensitive-content-how-to-stop-it/)
* [2025-02-27, 12:51:00](https://soylentnews.org/article.pl?sid=25/02/26/1852225&from=rss) - [Physx Feature Unlocked For RTX 5090 With RTX 3050 'Helper' To Enable Full Performance](https://soylentnews.org/article.pl?sid=25/02/26/1852225&from=rss)
* [2025-02-27, 12:41:00](https://lobste.rs/s/bvzlzb/testing_numbs_us_our_loss_intellectual) - [Testing Numbs Us to Our Loss of Intellectual Control (2020)](https://www.computer.org/csdl/magazine/so/2020/03/09068304/1j30VMzNxLO)
* [2025-02-27, 12:23:41](https://news.ycombinator.com/item?id=43193714) - [A data analysis of speeches at the Oscars](https://stephenfollows.com/p/harvey-weinstein-thanked-more-than-god)
* [2025-02-27, 12:10:10](https://lobste.rs/s/jivgtn/why_we_designed_tigerbeetle_s_docs_from) - [Why We Designed TigerBeetle's Docs from Scratch](https://tigerbeetle.com/blog/2025-02-27-why-we-designed-tigerbeetles-docs-from-scratch/)
* [2025-02-27, 11:59:08](https://lobste.rs/s/equl2g/pipe_operator_generics_is_not_sum_type) - [The Pipe Operator In Generics Is Not A Sum Type](https://jerf.org/iri/post/2024/go_faq_pipe_in_generics/)
* [2025-02-27, 08:08:00](https://soylentnews.org/article.pl?sid=25/02/26/1850240&from=rss) - [Bubbles That Break Rules: A Fluid Discovery That Defies Logic](https://soylentnews.org/article.pl?sid=25/02/26/1850240&from=rss)
* [2025-02-27, 07:45:13](https://lobste.rs/s/6rl9ah/launching_rdap_sunsetting_whois) - [Launching RDAP; Sunsetting WHOIS](https://www.icann.org/en/announcements/details/icann-update-launching-rdap-sunsetting-whois-27-01-2025-en)
* [2025-02-27, 06:24:04](https://lobste.rs/s/tv45be/assorted_macos_tips_tricks) - [Assorted macOS Tips & Tricks](https://saurabhs.org/macos-tips)
* [2025-02-27, 02:27:00](https://soylentnews.org/article.pl?sid=25/02/26/0210231&from=rss) - [As the Kernel Turns: Rust in Linux Saga Reaches the “Linus in All-Caps” Phase](https://soylentnews.org/article.pl?sid=25/02/26/0210231&from=rss)
* [2025-02-27, 01:58:25](https://lobste.rs/s/de2ab1/firefox_adds_terms_use) - [Firefox adds terms of use](https://blog.mozilla.org/en/products/firefox/firefox-news/firefox-terms-of-use/)
* [2025-02-27, 00:31:53](https://lobste.rs/s/lragbd/imac_g4_k) - [iMac G4(K)](https://jcs.org/2025/02/26/imacg4k)
* [2025-02-26, 23:48:41](https://lobste.rs/s/olofvt/faster_go_maps_with_swiss_tables) - [Faster Go maps with Swiss Tables](https://go.dev/blog/swisstable)
* [2025-02-26, 21:42:00](https://soylentnews.org/article.pl?sid=25/02/25/0655200&from=rss) - [Software Engineering Job Openings Hit 5-Year Low Amid Industry Shift](https://soylentnews.org/article.pl?sid=25/02/25/0655200&from=rss)
* [2025-02-26, 17:19:59](https://lobste.rs/s/ebpdwe/typescript_types_can_run_doom) - [TypeScript types can run DOOM](https://www.youtube.com/watch?v=0mCsluv5FXA)
* [2025-02-26, 16:53:00](https://soylentnews.org/article.pl?sid=25/02/25/0646226&from=rss) - [Chinese Hackers Compromised Organizations in 70 Nations, Warn US Federal Agencies](https://soylentnews.org/article.pl?sid=25/02/25/0646226&from=rss)
* [2025-02-26, 16:47:10](https://lobste.rs/s/yemc16/cp_copying_all_files_directory_including) - [cp -  copying all files of a directory, including hidden ones](https://bhoot.dev/2025/cp-dot-copies-everything/)
* [2025-02-26, 12:05:00](https://soylentnews.org/article.pl?sid=25/02/25/0640214&from=rss) - [Seagate's Fraudulent HDD Scandal Expands: Ironwolf Pro Hard Drives Reportedly Also Affected](https://soylentnews.org/article.pl?sid=25/02/25/0640214&from=rss)
* [2025-02-26, 07:20:00](https://soylentnews.org/article.pl?sid=25/02/25/0633257&from=rss) - [The Secretive X-37B Space Plane Snapped This Picture of Earth From Orbit](https://soylentnews.org/article.pl?sid=25/02/25/0633257&from=rss)
* [2025-02-26, 02:33:00](https://soylentnews.org/article.pl?sid=25/02/24/1625242&from=rss) - [US Treasury Beneficial Ownership Information Reporting is Back On (Again)](https://soylentnews.org/article.pl?sid=25/02/24/1625242&from=rss)
* [2025-02-25, 21:50:00](https://soylentnews.org/article.pl?sid=25/02/24/1621220&from=rss) - [Polish Treasure Hunters Unearth Seriously Badass Two-Handed Medieval Sword](https://soylentnews.org/article.pl?sid=25/02/24/1621220&from=rss)
* [2025-02-25, 17:06:00](https://soylentnews.org/article.pl?sid=25/02/24/1617229&from=rss) - [21st Century C++](https://soylentnews.org/article.pl?sid=25/02/24/1617229&from=rss)
* [2025-02-25, 12:23:00](https://soylentnews.org/politics/article.pl?sid=25/02/24/1615209&from=rss) - [Trump Threatens Tariffs On Any Nation That Taxes Big Tech](https://soylentnews.org/politics/article.pl?sid=25/02/24/1615209&from=rss)
* [2025-02-25, 11:42:02](https://news.ycombinator.com/item?id=43170701) - [Theoi Greek Mythology](https://www.theoi.com/)
* [2025-02-25, 07:37:00](https://soylentnews.org/article.pl?sid=25/02/24/0728229&from=rss) - [Building a Chipmaking Fab in the US Costs Twice as Much, Takes Twice as Long as in Taiwan](https://soylentnews.org/article.pl?sid=25/02/24/0728229&from=rss)
* [2025-02-25, 05:33:21](https://news.ycombinator.com/item?id=43168533) - [There isn't much point to HTTP/2 past the load balancer](https://byroot.github.io/ruby/performance/2025/02/24/http2-past-the-load-balancer.html)
* [2025-02-25, 02:51:00](https://soylentnews.org/article.pl?sid=25/02/24/0723218&from=rss) - [Astronomers Uncover The Topsy-Turvy Atmosphere Of A Distant Planet](https://soylentnews.org/article.pl?sid=25/02/24/0723218&from=rss)
* [2025-02-24, 22:04:00](https://soylentnews.org/article.pl?sid=25/02/24/0715224&from=rss) - [How to Backdoor Large Language Models](https://soylentnews.org/article.pl?sid=25/02/24/0715224&from=rss)
* [2025-02-24, 17:20:00](https://soylentnews.org/article.pl?sid=25/02/24/0713223&from=rss) - [Bird Flu Endemic in America Cows. Found in Rats](https://soylentnews.org/article.pl?sid=25/02/24/0713223&from=rss)
* [2025-02-24, 15:24:19](https://news.ycombinator.com/item?id=43160582) - [Type 1 diabetes reversed by new cell transplantation technique](https://newatlas.com/diabetes/islet-transplantation-type-1-diabetes/)
* [2025-02-24, 12:32:00](https://soylentnews.org/article.pl?sid=25/02/24/078229&from=rss) - [AMD Could Block the Sale of Intel Due to a Cross-Licensing Agreement](https://soylentnews.org/article.pl?sid=25/02/24/078229&from=rss)
* [2025-02-24, 11:41:47](https://news.ycombinator.com/item?id=43158402) - [Ask HN: Have you written or consumed OpenAPI Arazzo specification?](https://news.ycombinator.com/item?id=43158402)
* [2025-02-24, 09:01:07](https://news.ycombinator.com/item?id=43157296) - [The Great Re-shard: adding Postgres capacity (again) with zero downtime (2023)](https://www.notion.com/blog/the-great-re-shard)
* [2025-02-24, 07:47:00](https://soylentnews.org/article.pl?sid=25/02/24/074241&from=rss) - [Apple Pulls End-to-End Encryption From UK Rather Than Provide Government a Backdoor](https://soylentnews.org/article.pl?sid=25/02/24/074241&from=rss)
* [2025-02-24, 03:03:00](https://soylentnews.org/article.pl?sid=25/02/23/1133234&from=rss) - [After 20 Years, Math Couple Solves Major Group Theory Problem](https://soylentnews.org/article.pl?sid=25/02/23/1133234&from=rss)
