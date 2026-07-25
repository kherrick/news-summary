# [News Summary](https://kherrick.github.io/news-summary/)

## Innovations and Breakthroughs

* [Alan Turing's Top Secret DIY Project](https://soylentnews.org/article.pl?sid=26/07/24/1448254&amp;from=rss) explores a newly discovered endeavor by the pioneering computer scientist. [Comments](https://news.ycombinator.com/item?id=49045446)

* [SpaceX's Starship Megarocket Hits Key Milestones In Its 'Lucky 13' Test Flight](https://science.slashdot.org/story/26/07/25/0511222/spacexs-starship-megarocket-hits-key-milestones-in-its-lucky-13-test-flight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) marks advancements in reusable space technology. [Comments](https://yro.slashdot.org/story/26/07/25/0059247/openais-rogue-agent-went-unnoticed-for-a-week?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [MouthPad: A Tongue-Controlled Touchpad](https://www.augmental.tech/) unveils a transformative tool for accessibility. [Comments](https://news.ycombinator.com/item?id=49045446)

* [Humans Can Learn To Echolocate In Just 10 Weeks, and It Rewires the Brain](https://science.slashdot.org/story/26/07/24/021238/humans-can-learn-to-echolocate-in-just-10-weeks-and-it-rewires-the-brain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) details groundbreaking research into sensory adaptation. [Comments](https://www.microsoft.com/en-us/corporate-responsibility/topics/open-weight/)

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

* [2026-07-25, 12:00:04](https://news.ycombinator.com/item?id=49046858) - [Kyber (YC W23) Is Hiring a Head of Engineering](https://www.ycombinator.com/companies/kyber/jobs/FGmI8mx-head-of-engineering)
* [2026-07-25, 11:33:00](https://lobste.rs/s/eidh3u/shell_colon_does_nothing_use_it_anyway) - [A shell colon does nothing. Use it anyway](https://refp.se/articles/your-shell-and-the-magic-colon)
* [2026-07-25, 11:14:51](https://lobste.rs/s/pqkfur/emacs_writing_machine) - [Emacs Writing Machine](https://chainsawriot.com/postmannheim/2026/07/25/writeredeck.html)
* [2026-07-25, 11:04:57](https://news.ycombinator.com/item?id=49046525) - [The Fedora 45 Sausage Factory](https://supakeen.com/weblog/the-fedora-45-sausage-factory/)
* [2026-07-25, 11:00:00](https://tech.slashdot.org/story/26/07/25/014225/wine-1114-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wine 11.14 Released](https://tech.slashdot.org/story/26/07/25/014225/wine-1114-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-25, 10:50:00](https://soylentnews.org/article.pl?sid=26/07/24/1448254&amp;from=rss) - [Alan Turing&apos;s Top Secret DIY Project](https://soylentnews.org/article.pl?sid=26/07/24/1448254&amp;from=rss)
* [2026-07-25, 10:01:03](https://lobste.rs/s/t5os1h/android_may_soon_restrict_on_device_adb) - [Android May Soon Restrict On-Device ADB, Affecting Shizuku, libadb and Developers](https://kitsumed.github.io/blog/posts/android-may-soon-restrict-on-device-adb/)
* [2026-07-25, 09:59:40](https://lobste.rs/s/3ttebv/sending_packets_directly_from_bpf) - [Sending packets directly from BPF](https://lwn.net/Articles/1081696/)
* [2026-07-25, 09:10:12](https://lobste.rs/s/bvgaff/stinkpot_sqlite_backed_shell_history) - [stinkpot: sqlite-backed shell history](https://tangled.org/oppi.li/stinkpot)
* [2026-07-25, 07:51:19](https://news.ycombinator.com/item?id=49045446) - [MouthPad: A Tongue-Controlled Touchpad](https://www.augmental.tech/)
* [2026-07-25, 07:00:00](https://science.slashdot.org/story/26/07/25/0511222/spacexs-starship-megarocket-hits-key-milestones-in-its-lucky-13-test-flight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SpaceX&apos;s Starship Megarocket Hits Key Milestones In Its &apos;Lucky 13&apos; Test Flight](https://science.slashdot.org/story/26/07/25/0511222/spacexs-starship-megarocket-hits-key-milestones-in-its-lucky-13-test-flight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-25, 06:57:14](https://news.ycombinator.com/item?id=49045159) - [Android May Soon Restrict On-Device ADB](https://kitsumed.github.io/blog/posts/android-may-soon-restrict-on-device-adb/)
* [2026-07-25, 06:31:40](https://news.ycombinator.com/item?id=49045040) - [ARC-AGI Leaderboard](https://arcprize.org/leaderboard)
* [2026-07-25, 06:07:49](https://lobste.rs/s/ypgw9x/perils_parsing_type_inference) - [the perils of parsing type inference declarations in c](https://sebsite.pw/w/20260725-auto.html)
* [2026-07-25, 06:04:00](https://soylentnews.org/article.pl?sid=26/07/24/1428215&amp;from=rss) - [OpenAI&apos;s Rogue Agents are a Wake-up Call to Risks Posed by Artificial Intelligence](https://soylentnews.org/article.pl?sid=26/07/24/1428215&amp;from=rss)
* [2026-07-25, 05:51:27](https://news.ycombinator.com/item?id=49044874) - [Extinct Media Museum Tokyo](https://extinct-media-museum.blog.jp/otemachi/)
* [2026-07-25, 05:29:51](https://lobste.rs/s/yajc8q/i_m_running_icfp_programming_contest_2026) - [I&apos;m running the ICFP programming contest (2026)](https://eieio.games/blog/im-running-the-icfp-programming-contest/)
* [2026-07-25, 04:20:21](https://news.ycombinator.com/item?id=49044492) - [UK AISI / Caisi Preliminary Assessment of Kimi K3&apos;s Cyber Capabilities](https://www.nist.gov/news-events/news/2026/07/uk-aisi-caisi-preliminary-assessment-kimi-k3s-cyber-capabilities)
* [2026-07-25, 03:30:00](https://yro.slashdot.org/story/26/07/25/0059247/openais-rogue-agent-went-unnoticed-for-a-week?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI&apos;s Rogue Agent Went Unnoticed For a Week](https://yro.slashdot.org/story/26/07/25/0059247/openais-rogue-agent-went-unnoticed-for-a-week?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-25, 03:00:20](https://lobste.rs/s/zfvln5/we_are_not_special) - [We Are Not Special](https://www.hillelwayne.com/post/we-are-not-special/)
* [2026-07-25, 01:44:12](https://news.ycombinator.com/item?id=49043724) - [Hannah Fry Wins the Leelavati Prize in 2026 for Mathematics Outreach](https://www.maths.cam.ac.uk/features/professor-hannah-fry-wins-leelavati-prize)
* [2026-07-25, 01:34:26](https://lobste.rs/s/fw69uj/microformats_building_blocks_for_data) - [Microformats – building blocks for data-rich web pages](https://microformats.org/)
* [2026-07-25, 01:21:00](https://soylentnews.org/article.pl?sid=26/07/24/1423206&amp;from=rss) - [US Blocks SSL Security Certificates for Iran&apos;s Fars News Agency](https://soylentnews.org/article.pl?sid=26/07/24/1423206&amp;from=rss)
* [2026-07-25, 01:00:00](https://tech.slashdot.org/story/26/07/24/2212248/instagram-is-now-banning-pickup-artists-pranksters-who-use-meta-glasses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Instagram Is Now Banning Pickup Artists, Pranksters Who Use Meta Glasses](https://tech.slashdot.org/story/26/07/24/2212248/instagram-is-now-banning-pickup-artists-pranksters-who-use-meta-glasses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-25, 00:23:02](https://lobste.rs/s/aibmo4/2026_stack_overflow_developer_survey) - [2026 Stack Overflow Developer Survey](https://take.survey.stackoverflow.co/jfe/form/SV_4GHunpL3IfJ3rRc)
* [2026-07-24, 23:13:18](https://news.ycombinator.com/item?id=49042751) - [Sperm Whales blow bubbles to achieve restful, vertical sleep](https://news.st-andrews.ac.uk/archive/sperm-whales-blow-bubbles-to-achieve-restful-vertical-sleep/)
* [2026-07-24, 23:04:57](https://lobste.rs/s/c76s0r/chrome_registers_global_shortcut_for) - [Chrome registers a global shortcut for Gemini popup window](https://unsung.aresluna.org/chromes-breaking-and-entering/)
* [2026-07-24, 23:00:00](https://yro.slashdot.org/story/26/07/24/2235232/paramount-agrees-to-postpone-warner-bros-merger-until-june-2027?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Paramount Agrees to Postpone Warner Bros. Merger Until June 2027](https://yro.slashdot.org/story/26/07/24/2235232/paramount-agrees-to-postpone-warner-bros-merger-until-june-2027?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-24, 22:11:44](https://lobste.rs/s/yia0pc/systems_delays_2026) - [Systems and Delays (2026)](https://martin.janiczek.cz/2026/07/24/systems-and-delays.html)
* [2026-07-24, 22:00:00](https://yro.slashdot.org/story/26/07/24/215251/us-accuses-american-of-allegedly-wiping-his-phone-using-a-duress-password-during-border-search?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Accuses American of Allegedly Wiping His Phone Using a &apos;Duress&apos; Password During Border Search](https://yro.slashdot.org/story/26/07/24/215251/us-accuses-american-of-allegedly-wiping-his-phone-using-a-duress-password-during-border-search?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-24, 21:00:00](https://news.slashdot.org/story/26/07/24/2059242/roku-raises-prices-of-streaming-devices-by-up-to-60?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Roku Raises Prices of Streaming Devices By Up To 60%](https://news.slashdot.org/story/26/07/24/2059242/roku-raises-prices-of-streaming-devices-by-up-to-60?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-24, 20:37:00](https://soylentnews.org/article.pl?sid=26/07/23/229219&amp;from=rss) - [Former Microsoft AI Leaders Are Spending $1M to Prove AI Can Replace CEOs](https://soylentnews.org/article.pl?sid=26/07/23/229219&amp;from=rss)
* [2026-07-24, 20:34:19](https://lobste.rs/s/u60zv9/watching_go_s_new_garbage_collector_move) - [Watching Go&apos;s new garbage collector move through the heap](https://theconsensus.dev/p/2026/07/19/observing-gos-garbage-collector-old-and-new.html)
* [2026-07-24, 20:33:34](https://lobste.rs/s/9mocvp/love_letter_object_orientation) - [A Love Letter to Object Orientation](https://blog.mempko.com/a-love-letter-to-object-orientation/)
* [2026-07-24, 20:24:48](https://lobste.rs/s/khaizc/delightful_integration_tests_rust) - [Delightful integration tests in Rust](https://github.com/alexpusch/rust-magic-patterns/blob/master/delightful-integration-tests/Readme.md)
* [2026-07-24, 20:00:00](https://meta.slashdot.org/story/26/07/24/1911233/nvidia-microsoft-meta-warn-against-premature-restrictions-of-open-weight-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia, Microsoft, Meta Warn Against &apos;Premature Restrictions&apos; of Open-Weight Models](https://meta.slashdot.org/story/26/07/24/1911233/nvidia-microsoft-meta-warn-against-premature-restrictions-of-open-weight-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-24, 19:48:17](https://lobste.rs/s/ighdht/postgres_listen_notify_actually_scales) - [Postgres LISTEN/NOTIFY Actually Scales](https://www.dbos.dev/blog/postgres-listen-notify-scalability)
* [2026-07-24, 19:45:10](https://news.ycombinator.com/item?id=49040741) - [Opus 5 is currently #1 on Artificial Analysis Intelligence Leaderboard](https://artificialanalysis.ai/models)
* [2026-07-24, 19:05:53](https://news.ycombinator.com/item?id=49040296) - [Postgres LISTEN/NOTIFY actually scales](https://www.dbos.dev/blog/postgres-listen-notify-scalability)
* [2026-07-24, 19:00:00](https://slashdot.org/story/26/07/24/1853236/anthropics-new-opus-5-model-rivals-fable-5-for-half-the-price?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic&apos;s New Opus 5 Model Rivals Fable 5 For Half the Price](https://slashdot.org/story/26/07/24/1853236/anthropics-new-opus-5-model-rivals-fable-5-for-half-the-price?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-24, 17:41:20](https://lobste.rs/s/uawqly/git_rebase_i_is_not_scary) - [git rebase -i is not that scary](https://cachebag.sh/journal/interactive-rebasing/)
* [2026-07-24, 17:00:00](https://news.slashdot.org/story/26/07/24/1650239/john-c-dvorak-an-early-and-influential-technology-journalist-dies-at-80?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ John C. Dvorak, an Early and Influential Technology Journalist, Dies At 80](https://news.slashdot.org/story/26/07/24/1650239/john-c-dvorak-an-early-and-influential-technology-journalist-dies-at-80?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-24, 16:57:41](https://news.ycombinator.com/item?id=49038433) - [Claude Opus 5](https://www.anthropic.com/news/claude-opus-5)
* [2026-07-24, 16:00:00](https://slashdot.org/story/26/07/24/0719241/stripe-eyes-10-billion-deal-for-ai-model-marketplace-openrouter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Stripe Eyes $10 Billion Deal For AI Model Marketplace OpenRouter](https://slashdot.org/story/26/07/24/0719241/stripe-eyes-10-billion-deal-for-ai-model-marketplace-openrouter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-24, 15:55:00](https://soylentnews.org/article.pl?sid=26/07/23/225237&amp;from=rss) - [Scientists Believed This Near-Earth Object Was an Asteroid for 28 Years. They Were Wrong](https://soylentnews.org/article.pl?sid=26/07/23/225237&amp;from=rss)
* [2026-07-24, 15:00:00](https://science.slashdot.org/story/26/07/24/0712238/astronomers-may-have-discovered-first-moon-outside-our-solar-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Astronomers May Have Discovered First Moon Outside Our Solar System](https://science.slashdot.org/story/26/07/24/0712238/astronomers-may-have-discovered-first-moon-outside-our-solar-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-24, 14:38:42](https://lobste.rs/s/rbfmuh/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/rbfmuh/what_are_you_doing_this_weekend)
* [2026-07-24, 14:24:29](https://lobste.rs/s/td8rne/don_t_take_black_pill) - [Don&apos;t take the black pill](https://www.youtube.com/watch?v=zLZwpH5lCD4)
* [2026-07-24, 14:01:24](https://lobste.rs/s/gqgbrz/open_weights_american_ai_leadership) - [Open Weights and American AI Leadership](https://www.microsoft.com/en-us/corporate-responsibility/topics/open-weight/)
* [2026-07-24, 12:53:59](https://news.ycombinator.com/item?id=49034868) - [Half-Life 2 running natively on HaikuOS](https://discuss.haiku-os.org/t/haiku-nvidia-porting-nvidia-driver-for-turing-gpus/16520?page=18)
* [2026-07-24, 11:54:41](https://news.ycombinator.com/item?id=49034292) - [My security camera shipped a GitHub admin token in its login page](https://hhh.hn/hanwha-github-token/)
* [2026-07-24, 11:08:00](https://soylentnews.org/article.pl?sid=26/07/23/221216&amp;from=rss) - [I Wanted a Clock That Never Needed Setting. Things Escalated.](https://soylentnews.org/article.pl?sid=26/07/23/221216&amp;from=rss)
* [2026-07-24, 11:00:00](https://science.slashdot.org/story/26/07/24/021238/humans-can-learn-to-echolocate-in-just-10-weeks-and-it-rewires-the-brain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Humans Can Learn To Echolocate In Just 10 Weeks, and It Rewires the Brain](https://science.slashdot.org/story/26/07/24/021238/humans-can-learn-to-echolocate-in-just-10-weeks-and-it-rewires-the-brain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-24, 09:56:24](https://lobste.rs/s/troy2w/case_for_muds_modern_times) - [The case for MUDs in modern times](https://www.andrewzigler.com/feed/the-case-for-muds-in-modern-times)
* [2026-07-24, 09:52:58](https://news.ycombinator.com/item?id=49033240) - [IRGC claims it destroyed Amazon&apos;s Bahrain data center](https://houseofsaud.com/irgc-claims-destroyed-amazon-bahrain-data-center/)
* [2026-07-24, 09:29:44](https://news.ycombinator.com/item?id=49033110) - [Future euro banknote design proposals](https://www.ecb.europa.eu/euro/banknotes/future_banknotes/html/all-design-proposals.en.html)
* [2026-07-24, 07:00:00](https://hardware.slashdot.org/story/26/07/24/0152240/worlds-first-wave-power-generator-receives-certification-for-regular-use?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [World&apos;s First Wave Power Generator Receives Certification For Regular Use](https://hardware.slashdot.org/story/26/07/24/0152240/worlds-first-wave-power-generator-receives-certification-for-regular-use?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-24, 06:26:00](https://soylentnews.org/article.pl?sid=26/07/23/0249220&amp;from=rss) - [I Could&apos;ve Rickrolled the Entire FIFA World Cup and All I Needed Was My ID](https://soylentnews.org/article.pl?sid=26/07/23/0249220&amp;from=rss)
* [2026-07-24, 05:29:28](https://lobste.rs/s/ewh4v6/making_gifs_from_35mm_film_photography) - [Making GIFs from 35mm film photography](https://blog.willgrant.org/2026/07/23/the-hardest-way-to-make-gif.html)
* [2026-07-24, 05:05:03](https://lobste.rs/s/h9gdj8/freebsd_ports_frozen_after_someone) - [FreeBSD ports frozen after someone commits the entire 150MB Linux Copilot binary](https://www.osnews.com/story/145593/freebsd-ports-frozen-after-someone-commits-the-entire-150mb-linux-copilot-binary/)
* [2026-07-24, 03:30:00](https://yro.slashdot.org/story/26/07/24/0144247/google-adds-selfie-video-as-a-log-in-option?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Adds Selfie Video As a Log-In Option](https://yro.slashdot.org/story/26/07/24/0144247/google-adds-selfie-video-as-a-log-in-option?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-24, 01:43:00](https://soylentnews.org/article.pl?sid=26/07/23/0234212&amp;from=rss) - [Former OpenAI CTO Does What Altman Won&apos;t: Releases a Frontier AI Model That&apos;s Actually Open](https://soylentnews.org/article.pl?sid=26/07/23/0234212&amp;from=rss)
* [2026-07-23, 21:10:09](https://lobste.rs/s/x3x2aw/you_should_selfhost_your_mail_2026) - [You should selfhost your mail (in 2026)](https://blog.haschek.at/2026/you-should-selfhost-your-mail.html)
* [2026-07-23, 20:55:00](https://soylentnews.org/article.pl?sid=26/07/23/0228206&amp;from=rss) - [NASA&apos;s Artemis III Will Need Three Rockets to Do the Job Apollo Did With One](https://soylentnews.org/article.pl?sid=26/07/23/0228206&amp;from=rss)
* [2026-07-23, 17:10:02](https://news.ycombinator.com/item?id=49024938) - [Kimi K3 exploited the latest Redis server](https://twitter.com/fried_rice/status/2080059356322918777)
* [2026-07-23, 16:08:00](https://soylentnews.org/article.pl?sid=26/07/23/029223&amp;from=rss) - [Could China and Russia Really Destroy Starlink?](https://soylentnews.org/article.pl?sid=26/07/23/029223&amp;from=rss)
* [2026-07-23, 15:33:26](https://lobste.rs/s/gpqa52/everyone_should_know_simd) - [Everyone Should Know SIMD](https://mitchellh.com/writing/everyone-should-know-simd)
* [2026-07-23, 12:31:21](https://news.ycombinator.com/item?id=49020545) - [Show HN: I simulated closing the Strait of Hormuz on real oil trade data](https://globaloilnetwork.staffinganalytics.io/)
* [2026-07-23, 11:20:00](https://soylentnews.org/article.pl?sid=26/07/23/023217&amp;from=rss) - [Sweet! Sugar Found in Raspberries Was Discovered Near the Milky Way&apos;s Center](https://soylentnews.org/article.pl?sid=26/07/23/023217&amp;from=rss)
* [2026-07-23, 06:38:00](https://soylentnews.org/article.pl?sid=26/07/22/0039239&amp;from=rss) - [Zilog Z80 Turns 50 as an Open-Source Replacement Heads to Drop-in DIP40 Silicon](https://soylentnews.org/article.pl?sid=26/07/22/0039239&amp;from=rss)
* [2026-07-23, 01:56:00](https://soylentnews.org/article.pl?sid=26/07/21/2227215&amp;from=rss) - [Open Source Misses the Point and Cannot Save Us](https://soylentnews.org/article.pl?sid=26/07/21/2227215&amp;from=rss)
* [2026-07-22, 21:58:42](https://news.ycombinator.com/item?id=49014034) - [Charles Ross spent 50 yrs building Star Axis naked-eye observatory in New Mexico](https://www.nytimes.com/2026/07/22/arts/design/charles-ross-star-axis-land-art.html)
* [2026-07-22, 21:14:00](https://soylentnews.org/article.pl?sid=26/07/21/2225209&amp;from=rss) - [Five Tech Giants are Hiding $1.65tn in AI Debt, Using the Trick that Toppled Enron](https://soylentnews.org/article.pl?sid=26/07/21/2225209&amp;from=rss)
* [2026-07-22, 20:03:32](https://news.ycombinator.com/item?id=49012604) - [Book Corners: Community map of neighborhood book exchange spots](https://www.bookcorners.org)
* [2026-07-22, 18:09:26](https://news.ycombinator.com/item?id=49010993) - [Building a Tiny 3D Renderer for a Tiny Handheld](https://saffroncr.itch.io/katavatis/devlog/1534514/building-a-tiny-3d-renderer-for-a-tiny-handheld)
* [2026-07-22, 16:23:00](https://soylentnews.org/article.pl?sid=26/07/21/2223243&amp;from=rss) - [German Startup Qurie Bags Funding for Molecular Heat Pump](https://soylentnews.org/article.pl?sid=26/07/21/2223243&amp;from=rss)
* [2026-07-22, 15:37:25](https://news.ycombinator.com/item?id=49008512) - [An old patent inspired the new \&quot;Y-zipper\&quot;, a three-sided fastener](https://news.mit.edu/2026/three-sided-y-zipper-design-0504)
* [2026-07-22, 14:20:34](https://news.ycombinator.com/item?id=49007291) - [PyPI Blog: Releases now reject new files after 14 days](https://blog.pypi.org/posts/2026-07-22-releases-now-reject-new-files-after-14-days/)
* [2026-07-22, 13:41:00](https://soylentnews.org/article.pl?sid=26/07/21/2222218&amp;from=rss) - [My Hunt for the Original McDonald’s French-Fry Recipe](https://soylentnews.org/article.pl?sid=26/07/21/2222218&amp;from=rss)
* [2026-07-22, 13:00:29](https://news.ycombinator.com/item?id=49006096) - [My Images Are Dithered](https://dead.garden/blog/how-my-images-are-dithered.html)
* [2026-07-22, 11:36:00](https://soylentnews.org/article.pl?sid=26/07/22/0025243&amp;from=rss) - [The 2024 New York City Meteorite Contains Amino Acids](https://soylentnews.org/article.pl?sid=26/07/22/0025243&amp;from=rss)
* [2026-07-22, 06:57:00](https://soylentnews.org/article.pl?sid=26/07/21/069235&amp;from=rss) - [How a Gang of Thieves Pulled Off a Multimillion-Dollar Data Center Heist](https://soylentnews.org/article.pl?sid=26/07/21/069235&amp;from=rss)
* [2026-07-22, 02:12:00](https://soylentnews.org/article.pl?sid=26/07/21/065210&amp;from=rss) - [Doctors Document Rare Case of Dropped Head Syndrome Caused by Drug Use](https://soylentnews.org/article.pl?sid=26/07/21/065210&amp;from=rss)
* [2026-07-21, 21:24:00](https://soylentnews.org/article.pl?sid=26/07/21/0559241&amp;from=rss) - [The Shocking Secrets of Madison Square Garden’s Surveillance Machine](https://soylentnews.org/article.pl?sid=26/07/21/0559241&amp;from=rss)
* [2026-07-21, 17:27:59](https://news.ycombinator.com/item?id=48995409) - [Firefox Containers Preview](https://blog.mozilla.org/en/firefox/firefox-containers-preview/)
* [2026-07-21, 16:41:00](https://soylentnews.org/article.pl?sid=26/07/21/0553204&amp;from=rss) - [Airbus Migrating 70 Critical Apps From AWS To France&apos;s Scaleway Amid Digital Sovereignty Push](https://soylentnews.org/article.pl?sid=26/07/21/0553204&amp;from=rss)
* [2026-07-21, 13:19:13](https://news.ycombinator.com/item?id=48991945) - [PartialString – A finite-difference time-domain physical modelling synthesiser](https://differentinstruments.com/)
* [2026-07-21, 11:45:00](https://soylentnews.org/article.pl?sid=26/07/21/0550247&amp;from=rss) - [Deep-Sea Life Has a Secret Food Source Scientists Never Expected](https://soylentnews.org/article.pl?sid=26/07/21/0550247&amp;from=rss)
* [2026-07-21, 07:59:00](https://soylentnews.org/article.pl?sid=26/07/20/0431234&amp;from=rss) - [Eating Chili Peppers May Raise the Risk of One Deadly Cancer](https://soylentnews.org/article.pl?sid=26/07/20/0431234&amp;from=rss)
* [2026-07-21, 03:15:00](https://soylentnews.org/article.pl?sid=26/07/20/0413210&amp;from=rss) - [US Sanctions First VPN In Crackdown On Ransomware Criminals](https://soylentnews.org/article.pl?sid=26/07/20/0413210&amp;from=rss)
