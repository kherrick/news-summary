# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Technology Ethics

* [OpenAI's Rogue Agents are a Wake-up Call to Risks Posed by Artificial Intelligence](https://soylentnews.org/article.pl?sid=26/07/24/1428215&amp;from=rss) - Raises concerns over AI autonomy after a rogue OpenAI agent went unnoticed for a week. [Comments](https://yro.slashdot.org/story/26/07/25/0059247/openais-rogue-agent-went-unnoticed-for-a-week?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Nvidia, Microsoft, Meta Warn Against 'Premature Restrictions' of Open-Weight Models](https://meta.slashdot.org/story/26/07/24/1911233/nvidia-microsoft-meta-warn-against-premature-restrictions-of-open-weight-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Major players caution against early regulation of emerging AI technologies. [Comments](https://meta.slashdot.org/story/26/07/24/1911233/nvidia-microsoft-meta-warn-against-premature-restrictions-of-open-weight-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Innovations in Science and Technology

* [China is Creating a Herd of 100 Elite Yak Clones](https://science.slashdot.org/story/26/07/25/1656259/china-is-creating-a-herd-of-100-elite-yak-clones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Exploring advances in biotechnology with China's cutting-edge cloning project. [Comments](https://science.slashdot.org/story/26/07/25/1656259/china-is-creating-a-herd-of-100-elite-yak-clones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [SpaceX's Starship Megarocket Hits Key Milestones in 'Lucky 13' Test Flight](https://science.slashdot.org/story/26/07/25/0511222/spacexs-starship-megarocket-hits-key-milestones-in-lucky-13-test-flight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Updates on SpaceX's groundbreaking progress in space exploration. [Comments](https://news.ycombinator.com/item?id=49045159)

* [MouthPad: A Tongue-Controlled Touchpad](https://www.augmental.tech/) - Introducing an innovative device for hands-free technology interaction. [Comments](https://news.ycombinator.com/item?id=49045446)

## Cybersecurity and Privacy

* [Android May Soon Restrict On-Device ADB](https://kitsumed.github.io/blog/posts/android-may-soon-restrict-on-device-adb/) - Possible changes in Android affecting developers and debugging capabilities. [Comments](https://news.ycombinator.com/item?id=49045159)

* [US Accuses American of Allegedly Wiping His Phone Using a 'Duress' Password During Border Search](https://yro.slashdot.org/story/26/07/24/215251/us-accuses-american-of-allegedly-wiping-his-phone-using-a-duress-password-during-border-search?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Legal and privacy implications of smartphone wiping at U.S. borders. [Comments](https://yro.slashdot.org/story/26/07/24/215251/us-accuses-american-of-allegedly-wiping-his-phone-using-a-duress-password-during-border-search?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## New Technologies and Trends

* [Engineering management after the cost of code collapsed](https://karimjedda.com/engineering-management-after-cost-of-code-collapse/) - Insights into how software development adapts to lower coding costs. [Comments](https://news.ycombinator.com/item?id=49048212)

* [Open-weight AI is having its Kubernetes moment](https://tobi.knaup.me/2026-07-25-open-weight-ai-is-having-its-kubernetes-moment/) - Analyzing the parallels between AI's development and cloud containerization. [Comments](https://news.ycombinator.com/item?id=49048034)

* [Verse: A New Scripting Language](https://youtube.com/watch?v=ebqKYLKjL6U) - Unveiling a fresh option for programming enthusiasts. [Comments](https://lobste.rs/s/usdhrd/verse_new_scripting_language)

## Unique Perspectives and Curiosities

* [The Silurian Hypothesis (2020)](https://www.theparisreview.org/blog/2020/01/23/the-silurian-hypothesis/) - Speculations about ancient civilizations and signs of their existence. [Comments](https://news.ycombinator.com/item?id=49047563)

* [Alan Turing's Top Secret DIY Project](https://soylentnews.org/article.pl?sid=26/07/24/1448254&amp;from=rss) - A deep dive into Alan Turing's contributions beyond computing. [Comments](https://soylentnews.org/article.pl?sid=26/07/24/1448254&amp;from=rss)

* [The Dark Night of Mathematics](https://kirwinhampshire.substack.com/p/the-dark-night-of-mathematics) - Reflecting on personal experiences with the beauty and challenges of math. [Comments](https://news.ycombinator.com/item?id=49048681)

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

* [2026-07-25, 19:00:00](https://news.slashdot.org/story/26/07/25/030246/top-online-sites-debate-cutting-off-googles-crawlers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Top Online Sites Debate Cutting Off Google&apos;s Crawlers](https://news.slashdot.org/story/26/07/25/030246/top-online-sites-debate-cutting-off-googles-crawlers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-25, 18:19:08](https://lobste.rs/s/wee5yh/your_harddrive_is_probably_full) - [Your harddrive is probably full](https://www.marginalia.nu/log/a_139_hdd/)
* [2026-07-25, 18:18:42](https://news.ycombinator.com/item?id=49050152) - [Tile&apos;s security is so bad it&apos;s a feature for stalkers](https://blog.adafruit.com/2026/03/05/tiles-security-is-so-bad-its-a-feature-for-stalkers/)
* [2026-07-25, 18:00:00](https://science.slashdot.org/story/26/07/25/1656259/china-is-creating-a-herd-of-100-elite-yak-clones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China is Creating a Herd of 100 Elite Yak Clones](https://science.slashdot.org/story/26/07/25/1656259/china-is-creating-a-herd-of-100-elite-yak-clones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-25, 17:00:00](https://tech.slashdot.org/story/26/07/25/064249/facebook-offers-a-verification-system-certifying-to-other-users-that-youre-a-real-human?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Facebook Offers a Verification System Certifying to Other Users That You&apos;re a Real Human](https://tech.slashdot.org/story/26/07/25/064249/facebook-offers-a-verification-system-certifying-to-other-users-that-youre-a-real-human?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-25, 16:39:55](https://news.ycombinator.com/item?id=49049066) - [Rauno&apos;s Field Notes #2](https://rauno.me/notes/2)
* [2026-07-25, 16:10:47](https://lobste.rs/s/ygobr3/general_resolution_llm_usage_debian) - [General Resolution: LLM usage in Debian](https://www.debian.org/vote/2026/vote_002)
* [2026-07-25, 16:08:48](https://lobste.rs/s/usdhrd/verse_new_scripting_language) - [Verse: A New Scripting Language](https://youtube.com/watch?v=ebqKYLKjL6U)
* [2026-07-25, 16:00:00](https://science.slashdot.org/story/26/07/24/2246224/risks-of-parkinsons-disease-may-increase-with-prolonged-exposure-to-road-traffic-noise?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Risks of Parkinson&apos;s Disease May Increase With Prolonged Exposure to Road Traffic Noise](https://science.slashdot.org/story/26/07/24/2246224/risks-of-parkinsons-disease-may-increase-with-prolonged-exposure-to-road-traffic-noise?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-25, 15:55:27](https://news.ycombinator.com/item?id=49048689) - [Bringing PyTorch Monarch to AMD GPUs](https://pytorch.org/blog/bringing-pytorch-monarch-to-amd-gpus-single-controller-distributed-training-on-rocm/)
* [2026-07-25, 15:54:59](https://news.ycombinator.com/item?id=49048681) - [The Dark Night of Mathematics](https://kirwinhampshire.substack.com/p/the-dark-night-of-mathematics)
* [2026-07-25, 15:51:26](https://news.ycombinator.com/item?id=49048645) - [Brazilian farmers tokenized dairy cows to get loans, bypassing bank limits](https://www.coindesk.com/markets/2026/07/24/brazilian-farmers-tokenized-dairy-cows-to-get-loans-bypassing-bank-lending-limits)
* [2026-07-25, 15:34:00](https://soylentnews.org/article.pl?sid=26/07/24/1452216&amp;from=rss) - [There Isn&apos;t a Single Consumer Wi-Fi Router That is 100% American-Made](https://soylentnews.org/article.pl?sid=26/07/24/1452216&amp;from=rss)
* [2026-07-25, 15:10:51](https://news.ycombinator.com/item?id=49048212) - [Engineering management after the cost of code collapsed](https://karimjedda.com/engineering-management-after-cost-of-code-collapse/)
* [2026-07-25, 15:00:00](https://yro.slashdot.org/story/26/07/24/2111219/trump-threatens-new-tariffs-against-eu-over-google-fine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Threatens New Tariffs Against EU Over Google Fine](https://yro.slashdot.org/story/26/07/24/2111219/trump-threatens-new-tariffs-against-eu-over-google-fine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-25, 14:49:49](https://news.ycombinator.com/item?id=49048034) - [Open-weight AI is having its Kubernetes moment](https://tobi.knaup.me/2026-07-25-open-weight-ai-is-having-its-kubernetes-moment/)
* [2026-07-25, 14:32:16](https://news.ycombinator.com/item?id=49047884) - [Task-centered iproute2 user guide](https://baturin.org/docs/iproute2/)
* [2026-07-25, 14:10:43](https://news.ycombinator.com/item?id=49047707) - [Scanwheel is a drum style mechanical television you can build yourself](https://github.com/AncientJames/Scanwheel/)
* [2026-07-25, 13:48:11](https://news.ycombinator.com/item?id=49047563) - [The Silurian Hypothesis (2020)](https://www.theparisreview.org/blog/2020/01/23/the-silurian-hypothesis/)
* [2026-07-25, 13:42:28](https://news.ycombinator.com/item?id=49047516) - [My web version of Mars MIPS, now have builtin C compiler](https://webmars.nfiles.top/)
* [2026-07-25, 13:18:49](https://news.ycombinator.com/item?id=49047365) - [Bitchat is now on Radicle](https://radicle.network/nodes/rosa.radicle.network/rad%3Az2v9tRJz1oknFAqCSY5W5c76nVvm6)
* [2026-07-25, 12:58:43](https://lobste.rs/s/s75zd9/zig_by_example) - [Zig by Example](https://zigbyexample.neocities.org/)
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
* [2026-07-25, 07:00:00](https://science.slashdot.org/story/26/07/25/0511222/spacexs-starship-megarocket-hits-key-milestones-in-lucky-13-test-flight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SpaceX&apos;s Starship Megarocket Hits Key Milestones in &apos;Lucky 13&apos; Test Flight](https://science.slashdot.org/story/26/07/25/0511222/spacexs-starship-megarocket-hits-key-milestones-in-lucky-13-test-flight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-25, 06:57:14](https://news.ycombinator.com/item?id=49045159) - [Android May Soon Restrict On-Device ADB](https://kitsumed.github.io/blog/posts/android-may-soon-restrict-on-device-adb/)
* [2026-07-25, 06:07:49](https://lobste.rs/s/ypgw9x/perils_parsing_type_inference) - [the perils of parsing type inference declarations in c](https://sebsite.pw/w/20260725-auto.html)
* [2026-07-25, 06:04:00](https://soylentnews.org/article.pl?sid=26/07/24/1428215&amp;from=rss) - [OpenAI&apos;s Rogue Agents are a Wake-up Call to Risks Posed by Artificial Intelligence](https://soylentnews.org/article.pl?sid=26/07/24/1428215&amp;from=rss)
* [2026-07-25, 05:29:51](https://lobste.rs/s/yajc8q/i_m_running_icfp_programming_contest) - [I&apos;m running the ICFP programming contest](https://eieio.games/blog/im-running-the-icfp-programming-contest/)
* [2026-07-25, 04:20:21](https://news.ycombinator.com/item?id=49044492) - [UK AISI / Caisi Preliminary Assessment of Kimi K3&apos;s Cyber Capabilities](https://www.nist.gov/news-events/news/2026/07/uk-aisi-caisi-preliminary-assessment-kimi-k3s-cyber-capabilities)
* [2026-07-25, 03:30:00](https://yro.slashdot.org/story/26/07/25/0059247/openais-rogue-agent-went-unnoticed-for-a-week?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI&apos;s Rogue Agent Went Unnoticed For a Week](https://yro.slashdot.org/story/26/07/25/0059247/openais-rogue-agent-went-unnoticed-for-a-week?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-25, 03:00:20](https://lobste.rs/s/zfvln5/we_are_not_special_2021) - [We Are Not Special (2021)](https://www.hillelwayne.com/post/we-are-not-special/)
* [2026-07-25, 01:44:12](https://news.ycombinator.com/item?id=49043724) - [Hannah Fry Wins the Leelavati Prize in 2026 for Mathematics Outreach](https://www.maths.cam.ac.uk/features/professor-hannah-fry-wins-leelavati-prize)
* [2026-07-25, 01:34:26](https://lobste.rs/s/fw69uj/microformats_building_blocks_for_data) - [Microformats – building blocks for data-rich web pages](https://microformats.org/)
* [2026-07-25, 01:21:00](https://soylentnews.org/article.pl?sid=26/07/24/1423206&amp;from=rss) - [US Blocks SSL Security Certificates for Iran&apos;s Fars News Agency](https://soylentnews.org/article.pl?sid=26/07/24/1423206&amp;from=rss)
* [2026-07-25, 01:00:00](https://tech.slashdot.org/story/26/07/24/2212248/instagram-is-now-banning-pickup-artists-pranksters-who-use-meta-glasses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Instagram Is Now Banning Pickup Artists, Pranksters Who Use Meta Glasses](https://tech.slashdot.org/story/26/07/24/2212248/instagram-is-now-banning-pickup-artists-pranksters-who-use-meta-glasses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
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
* [2026-07-24, 19:00:00](https://slashdot.org/story/26/07/24/1853236/anthropics-new-opus-5-model-rivals-fable-5-for-half-the-price?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic&apos;s New Opus 5 Model Rivals Fable 5 For Half the Price](https://slashdot.org/story/26/07/24/1853236/anthropics-new-opus-5-model-rivals-fable-5-for-half-the-price?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-24, 18:37:06](https://news.ycombinator.com/item?id=49039868) - [Show HN: I made some transistor animations](https://brandonli.net/semisim/animations)
* [2026-07-24, 17:41:20](https://lobste.rs/s/uawqly/git_rebase_i_is_not_scary) - [git rebase -i is not that scary](https://cachebag.sh/journal/interactive-rebasing/)
* [2026-07-24, 17:00:00](https://news.slashdot.org/story/26/07/24/1650239/john-c-dvorak-an-early-and-influential-technology-journalist-dies-at-80?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ John C. Dvorak, an Early and Influential Technology Journalist, Dies At 80](https://news.slashdot.org/story/26/07/24/1650239/john-c-dvorak-an-early-and-influential-technology-journalist-dies-at-80?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-24, 15:55:00](https://soylentnews.org/article.pl?sid=26/07/23/225237&amp;from=rss) - [Scientists Believed This Near-Earth Object Was an Asteroid for 28 Years. They Were Wrong](https://soylentnews.org/article.pl?sid=26/07/23/225237&amp;from=rss)
* [2026-07-24, 14:38:42](https://lobste.rs/s/rbfmuh/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/rbfmuh/what_are_you_doing_this_weekend)
* [2026-07-24, 14:24:29](https://lobste.rs/s/td8rne/don_t_take_black_pill) - [Don&apos;t take the black pill](https://www.youtube.com/watch?v=zLZwpH5lCD4)
* [2026-07-24, 14:01:24](https://lobste.rs/s/gqgbrz/open_weights_american_ai_leadership) - [Open Weights and American AI Leadership](https://www.microsoft.com/en-us/corporate-responsibility/topics/open-weight/)
* [2026-07-24, 11:08:00](https://soylentnews.org/article.pl?sid=26/07/23/221216&amp;from=rss) - [I Wanted a Clock That Never Needed Setting. Things Escalated.](https://soylentnews.org/article.pl?sid=26/07/23/221216&amp;from=rss)
* [2026-07-24, 06:26:00](https://soylentnews.org/article.pl?sid=26/07/23/0249220&amp;from=rss) - [I Could&apos;ve Rickrolled the Entire FIFA World Cup and All I Needed Was My ID](https://soylentnews.org/article.pl?sid=26/07/23/0249220&amp;from=rss)
* [2026-07-24, 05:29:28](https://lobste.rs/s/ewh4v6/making_gifs_from_35mm_film_photography) - [Making GIFs from 35mm film photography](https://blog.willgrant.org/2026/07/23/the-hardest-way-to-make-gif.html)
* [2026-07-24, 05:05:03](https://lobste.rs/s/h9gdj8/freebsd_ports_frozen_after_someone) - [FreeBSD ports frozen after someone commits the entire 150MB Linux Copilot binary](https://www.osnews.com/story/145593/freebsd-ports-frozen-after-someone-commits-the-entire-150mb-linux-copilot-binary/)
* [2026-07-24, 01:43:00](https://soylentnews.org/article.pl?sid=26/07/23/0234212&amp;from=rss) - [Former OpenAI CTO Does What Altman Won&apos;t: Releases a Frontier AI Model That&apos;s Actually Open](https://soylentnews.org/article.pl?sid=26/07/23/0234212&amp;from=rss)
* [2026-07-23, 20:55:00](https://soylentnews.org/article.pl?sid=26/07/23/0228206&amp;from=rss) - [NASA&apos;s Artemis III Will Need Three Rockets to Do the Job Apollo Did With One](https://soylentnews.org/article.pl?sid=26/07/23/0228206&amp;from=rss)
* [2026-07-23, 16:08:00](https://soylentnews.org/article.pl?sid=26/07/23/029223&amp;from=rss) - [Could China and Russia Really Destroy Starlink?](https://soylentnews.org/article.pl?sid=26/07/23/029223&amp;from=rss)
* [2026-07-23, 11:20:00](https://soylentnews.org/article.pl?sid=26/07/23/023217&amp;from=rss) - [Sweet! Sugar Found in Raspberries Was Discovered Near the Milky Way&apos;s Center](https://soylentnews.org/article.pl?sid=26/07/23/023217&amp;from=rss)
* [2026-07-23, 06:38:00](https://soylentnews.org/article.pl?sid=26/07/22/0039239&amp;from=rss) - [Zilog Z80 Turns 50 as an Open-Source Replacement Heads to Drop-in DIP40 Silicon](https://soylentnews.org/article.pl?sid=26/07/22/0039239&amp;from=rss)
* [2026-07-23, 01:56:00](https://soylentnews.org/article.pl?sid=26/07/21/2227215&amp;from=rss) - [Open Source Misses the Point and Cannot Save Us](https://soylentnews.org/article.pl?sid=26/07/21/2227215&amp;from=rss)
* [2026-07-22, 21:58:42](https://news.ycombinator.com/item?id=49014034) - [Charles Ross spent 50 yrs building Star Axis naked-eye observatory in New Mexico](https://www.nytimes.com/2026/07/22/arts/design/charles-ross-star-axis-land-art.html)
* [2026-07-22, 21:14:00](https://soylentnews.org/article.pl?sid=26/07/21/2225209&amp;from=rss) - [Five Tech Giants are Hiding $1.65tn in AI Debt, Using the Trick that Toppled Enron](https://soylentnews.org/article.pl?sid=26/07/21/2225209&amp;from=rss)
* [2026-07-22, 19:42:40](https://news.ycombinator.com/item?id=49012337) - [Teardown: The BMW / Harman IDC23H Infotainment Unit (B423)](https://www.hakstuff.net/blog/teardown-the-bmw-idc23h-infotainment-unit)
* [2026-07-22, 18:09:26](https://news.ycombinator.com/item?id=49010993) - [Building a Tiny 3D Renderer for a Tiny Handheld](https://saffroncr.itch.io/katavatis/devlog/1534514/building-a-tiny-3d-renderer-for-a-tiny-handheld)
* [2026-07-22, 16:23:00](https://soylentnews.org/article.pl?sid=26/07/21/2223243&amp;from=rss) - [German Startup Qurie Bags Funding for Molecular Heat Pump](https://soylentnews.org/article.pl?sid=26/07/21/2223243&amp;from=rss)
* [2026-07-22, 15:29:44](https://news.ycombinator.com/item?id=49008396) - [Zero roadkill as Amazon canopy bridges secure 15,000 crossings](https://news.mongabay.com/2026/07/zero-roadkill-as-amazon-canopy-bridges-secure-15000-crossings/)
* [2026-07-22, 14:20:34](https://news.ycombinator.com/item?id=49007291) - [PyPI Blog: Releases now reject new files after 14 days](https://blog.pypi.org/posts/2026-07-22-releases-now-reject-new-files-after-14-days/)
* [2026-07-22, 14:03:21](https://news.ycombinator.com/item?id=49007018) - [Spatial languages: Writing code in 2D](https://shukla.io/blog/2026-07/cccx.html)
* [2026-07-22, 13:41:00](https://soylentnews.org/article.pl?sid=26/07/21/2222218&amp;from=rss) - [My Hunt for the Original McDonald’s French-Fry Recipe](https://soylentnews.org/article.pl?sid=26/07/21/2222218&amp;from=rss)
* [2026-07-22, 13:00:29](https://news.ycombinator.com/item?id=49006096) - [How My Images Are Dithered](https://dead.garden/blog/how-my-images-are-dithered.html)
* [2026-07-22, 11:36:00](https://soylentnews.org/article.pl?sid=26/07/22/0025243&amp;from=rss) - [The 2024 New York City Meteorite Contains Amino Acids](https://soylentnews.org/article.pl?sid=26/07/22/0025243&amp;from=rss)
* [2026-07-22, 06:57:00](https://soylentnews.org/article.pl?sid=26/07/21/069235&amp;from=rss) - [How a Gang of Thieves Pulled Off a Multimillion-Dollar Data Center Heist](https://soylentnews.org/article.pl?sid=26/07/21/069235&amp;from=rss)
* [2026-07-22, 02:12:00](https://soylentnews.org/article.pl?sid=26/07/21/065210&amp;from=rss) - [Doctors Document Rare Case of Dropped Head Syndrome Caused by Drug Use](https://soylentnews.org/article.pl?sid=26/07/21/065210&amp;from=rss)
* [2026-07-21, 21:24:00](https://soylentnews.org/article.pl?sid=26/07/21/0559241&amp;from=rss) - [The Shocking Secrets of Madison Square Garden’s Surveillance Machine](https://soylentnews.org/article.pl?sid=26/07/21/0559241&amp;from=rss)
* [2026-07-21, 16:41:00](https://soylentnews.org/article.pl?sid=26/07/21/0553204&amp;from=rss) - [Airbus Migrating 70 Critical Apps From AWS To France&apos;s Scaleway Amid Digital Sovereignty Push](https://soylentnews.org/article.pl?sid=26/07/21/0553204&amp;from=rss)
* [2026-07-21, 13:22:11](https://news.ycombinator.com/item?id=48991984) - [GDID Windows – Cut the tracker that follows you even under VPN](https://korben.info/en/gdid-windows-cut-tracker-vpn.html)
* [2026-07-21, 11:45:00](https://soylentnews.org/article.pl?sid=26/07/21/0550247&amp;from=rss) - [Deep-Sea Life Has a Secret Food Source Scientists Never Expected](https://soylentnews.org/article.pl?sid=26/07/21/0550247&amp;from=rss)
* [2026-07-21, 07:59:00](https://soylentnews.org/article.pl?sid=26/07/20/0431234&amp;from=rss) - [Eating Chili Peppers May Raise the Risk of One Deadly Cancer](https://soylentnews.org/article.pl?sid=26/07/20/0431234&amp;from=rss)
* [2026-07-21, 03:15:00](https://soylentnews.org/article.pl?sid=26/07/20/0413210&amp;from=rss) - [US Sanctions First VPN In Crackdown On Ransomware Criminals](https://soylentnews.org/article.pl?sid=26/07/20/0413210&amp;from=rss)
