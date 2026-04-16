# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and Technology Advances

* [The AI Great Leap Forward](https://soylentnews.org/article.pl?sid=26/04/14/043205) ([comments](https://soylentnews.org/comments.pl?sid=26/04/14/043205))

* [AI Token Freeloaders Manipulating Customer Support Bots](https://soylentnews.org/article.pl?sid=26/04/15/0217209&amp;from=rss) ([comments](https://news.ycombinator.com/item?id=47792764))

* [I Let Claude Opus Write a Chrome Exploit: The Next Model (Mythos?) Won't Need My Help?](https://www.hacktron.ai/blog/i-let-claude-opus-to-write-me-a-chrome-exploit) ([comments](https://lobste.rs/s/xkxbq3/i_let_claude_opus_write_chrome_exploit))

* [Qwen3.6-35B-A3B: Agentic Coding Power, Now Open to All](https://qwen.ai/blog?id=qwen3.6-35b-a3b) ([comments](https://news.ycombinator.com/item?id=47792764))

* [€54k spike in 13h from unrestricted Firebase browser key accessing Gemini APIs](https://discuss.ai.google.dev/t/unexpected-54k-billing-spike-in-13-hours-firebase-browser-key-without-api-restrictions-used-for-gemini-requests/140262) ([comments](https://news.ycombinator.com/item?id=47791871))

* [Mozilla Thunderbolt](https://www.thunderbolt.io/) ([comments](https://news.ycombinator.com/item?id=47792368))

## Cybersecurity Updates

* [This New 'Laughing Rat' Malware Will Steal Your Data, Hack Your Systems, and Laugh at You](https://soylentnews.org/article.pl?sid=26/04/11/0242235&amp;from=rss) ([comments](https://soylentnews.org/comments.pl?sid=26/04/11/0242235))

* [Codex Hacked a Samsung TV](https://blog.calif.io/p/codex-hacked-a-samsung-tv) ([comments](https://news.ycombinator.com/item?id=47791212))

* [AI cybersecurity is not proof of work](https://antirez.com/news/163) ([comments](https://news.ycombinator.com/item?id=47791236))

## Environmental and Sustainable Technology

* [Apple accelerates eco progress with highest-ever recycled materials](https://www.apple.com/newsroom/2026/04/apple-accelerates-progress-with-highest-ever-recycled-material-in-its-products/) ([comments](https://news.ycombinator.com/item?id=47791855))

* [Rivian's Illinois Factory Will Run On Recycled EV Batteries](https://hardware.slashdot.org/story/26/04/15/0712256/rivians-illinois-factory-will-run-on-recycled-ev-batteries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://hardware.slashdot.org/story/26/04/15/0712256/comments))

## Cutting-Edge Research

* [Ancient DNA reveals pervasive directional selection across West Eurasia [pdf]](https://reich.hms.harvard.edu/sites/reich.hms.harvard.edu/files/inline-files/2026_Akbari_Nature_selection_0.pdf) ([comments](https://news.ycombinator.com/item?id=47791282))

* [Nature Is Still Molding Human Genes, Study Finds](https://news.slashdot.org/story/26/04/16/007258/nature-is-still-molding-human-genes-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.slashdot.org/story/26/04/16/007258/comments))

* [Startup Secures $30 Million Contract to 3D Print Jet Engines for the USAF](https://soylentnews.org/article.pl?sid=26/04/12/170200&amp;from=rss) ([comments](https://soylentnews.org/comments.pl?sid=26/04/12/170200))

## Infrastructure and Protocols

* [Cloudflare Email Service: now in public beta. Ready for your agents](https://blog.cloudflare.com/email-for-agents/) ([comments](https://news.ycombinator.com/item?id=47792593))

* [Cloudflare's AI Platform: an inference layer designed for agents](https://blog.cloudflare.com/ai-platform/) ([comments](https://news.ycombinator.com/item?id=47792538))

* [IPv6 traffic crosses the 50% mark](https://www.google.com/intl/en/ipv6/statistics.html?yzh=28197) ([comments](https://news.ycombinator.com/item?id=47792026))

* [Internet-Draft Internet Protocol Version 8 (IPv8)](https://datatracker.ietf.org/doc/draft-thain-ipv8/00/) ([comments](https://lobste.rs/s/y8j7by/internet_draft_internet_protocol))

## Entertainment and Media

* [Sony Boss Urges Theaters To Stop 30 Minutes of Trailers and Ads Before Movies](https://entertainment.slashdot.org/story/26/04/14/2045226/sony-boss-urges-theaters-to-stop-30-minutes-of-trailers-and-ads-before-movies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://entertainment.slashdot.org/story/26/04/14/2045226/comments))

* [Sony Is Removing Many Popular Features From Its Free OTA TV Options](https://entertainment.slashdot.org/story/26/04/14/2213204/sony-is-removing-many-popular-features-from-its-free-ota-tv-options?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://entertainment.slashdot.org/story/26/04/14/2213204/comments))

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

* [2026-04-16, 13:36:27](https://news.ycombinator.com/item?id=47792764) - [Qwen3.6-35B-A3B: Agentic Coding Power, Now Open to All](https://qwen.ai/blog?id=qwen3.6-35b-a3b)
* [2026-04-16, 13:36:00](https://soylentnews.org/article.pl?sid=26/04/15/0217209&amp;from=rss) - [AI Token Freeloaders Manipulating Customer Support Bots](https://soylentnews.org/article.pl?sid=26/04/15/0217209&amp;from=rss)
* [2026-04-16, 13:32:13](https://news.ycombinator.com/item?id=47792718) - [The Future of Everything Is Lies, I Guess: Where Do We Go from Here?](https://aphyr.com/posts/420-the-future-of-everything-is-lies-i-guess-where-do-we-go-from-here)
* [2026-04-16, 13:21:53](https://news.ycombinator.com/item?id=47792593) - [Cloudflare Email Service: now in public beta. Ready for your agents](https://blog.cloudflare.com/email-for-agents/)
* [2026-04-16, 13:17:37](https://news.ycombinator.com/item?id=47792538) - [Cloudflare&apos;s AI Platform: an inference layer designed for agents](https://blog.cloudflare.com/ai-platform/)
* [2026-04-16, 13:05:54](https://lobste.rs/s/wa4xvo/compiling_java_as_target_language) - [Compiling to Java as a target language](https://matt.might.net/articles/compiling-to-java/)
* [2026-04-16, 13:01:36](https://news.ycombinator.com/item?id=47792368) - [Mozilla Thunderbolt](https://www.thunderbolt.io/)
* [2026-04-16, 12:48:35](https://lobste.rs/s/y8shi7/many_step_sequences_go) - [Many-Step Sequences in Go](https://lesiw.dev/go/step/)
* [2026-04-16, 12:29:33](https://news.ycombinator.com/item?id=47792026) - [Show HN: 48 absurd web projects – one every month](https://news.ycombinator.com/item?id=47792026)
* [2026-04-16, 12:13:30](https://news.ycombinator.com/item?id=47791871) - [€54k spike in 13h from unrestricted Firebase browser key accessing Gemini APIs](https://discuss.ai.google.dev/t/unexpected-54k-billing-spike-in-13-hours-firebase-browser-key-without-api-restrictions-used-for-gemini-requests/140262)
* [2026-04-16, 12:11:17](https://news.ycombinator.com/item?id=47791855) - [Apple accelerates eco progress with highest-ever recycled materials](https://www.apple.com/newsroom/2026/04/apple-accelerates-progress-with-highest-ever-recycled-material-in-its-products/)
* [2026-04-16, 11:38:21](https://lobste.rs/s/2byom8/too_much_discussion_xor_swap_trick) - [Too much Discussion of the XOR swap trick](https://heather.cafe/posts/too_much_xor_swap_trick/)
* [2026-04-16, 11:00:00](https://mobile.slashdot.org/story/26/04/16/071239/bullet-train-upgrade-brings-5g-windows-noise-cancelling-cabins-to-japan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bullet Train Upgrade Brings 5G Windows, Noise-Cancelling Cabins To Japan](https://mobile.slashdot.org/story/26/04/16/071239/bullet-train-upgrade-brings-5g-windows-noise-cancelling-cabins-to-japan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-16, 10:57:13](https://news.ycombinator.com/item?id=47791282) - [Ancient DNA reveals pervasive directional selection across West Eurasia [pdf]](https://reich.hms.harvard.edu/sites/reich.hms.harvard.edu/files/inline-files/2026_Akbari_Nature_selection_0.pdf)
* [2026-04-16, 10:48:00](https://news.ycombinator.com/item?id=47791236) - [AI cybersecurity is not proof of work](https://antirez.com/news/163)
* [2026-04-16, 10:44:45](https://news.ycombinator.com/item?id=47791212) - [Codex Hacked a Samsung TV](https://blog.calif.io/p/codex-hacked-a-samsung-tv)
* [2026-04-16, 10:44:04](https://lobste.rs/s/t8xjpi/kde_gear_26_04) - [KDE Gear 26.04](https://kde.org/announcements/gear/26.04.0/)
* [2026-04-16, 10:19:26](https://lobste.rs/s/sbtemt/age_snarky_ui) - [The age of snarky UI](https://thoughtbot.com/blog/the-age-of-snarky-ui)
* [2026-04-16, 10:08:16](https://lobste.rs/s/djnmmd/inside_2026_ram_crunch_how_ai_will_make) - [Inside the 2026 &apos;RAM Crunch&apos;: How AI Will Make Your Next Laptop Much Pricier](https://www.pcmag.com/explainers/inside-2026-ram-crunch-why-ai-will-make-your-next-laptop-much-pricier)
* [2026-04-16, 10:02:25](https://lobste.rs/s/dsjczh/halloy_open_source_ircv3_client) - [Halloy: An Open Source IRCv3 Client](https://halloy.chat/)
* [2026-04-16, 09:57:55](https://lobste.rs/s/0qggzn/mastodon_don_t_use_mastodon_mstdn_domain) - [Mastodon: Don&apos;t use \&quot;mastodon\&quot; or \&quot;mstdn\&quot; in domain names](https://github.com/mastodon/mastodon/commit/d6f8ac97e808821180e9ae0c66879b7a2d64e690)
* [2026-04-16, 09:56:15](https://lobste.rs/s/xkxbq3/i_let_claude_opus_write_chrome_exploit) - [I Let Claude Opus Write a Chrome Exploit: The Next Model (Mythos?) Won&apos;t Need My Help?](https://www.hacktron.ai/blog/i-let-claude-opus-to-write-me-a-chrome-exploit)
* [2026-04-16, 08:52:00](https://soylentnews.org/communityreviews/article.pl?sid=26/04/15/0214204&amp;from=rss) - [OpenAI Says Elon Musk is ‘Injecting Chaos’ With Recent Legal Maneuver](https://soylentnews.org/communityreviews/article.pl?sid=26/04/15/0214204&amp;from=rss)
* [2026-04-16, 08:47:04](https://lobste.rs/s/xijpr1/ipv6_traffic_crosses_50_mark) - [IPv6 traffic crosses the 50% mark](https://www.google.com/intl/en/ipv6/statistics.html?yzh=28197)
* [2026-04-16, 08:40:23](https://lobste.rs/s/htdiau/reimplementing_space_protocol_stack) - [Reimplementing the Space Protocol Stack from Scratch](https://gazagnaire.org/blog/2026-04-15-ccsds-protocol-stack.html)
* [2026-04-16, 08:07:15](https://lobste.rs/s/cazzpf/cltrace_dtrace_inspired_tracing) - [CLTRACE: DTrace inspired tracing and observability framework for Common Lisp applications](https://github.com/MarceColl/CLTRACE)
* [2026-04-16, 07:44:11](https://lobste.rs/s/gsxwzt/switching_higher_order_streams_first) - [Switching higher-order streams to first-order streams](https://mnt.io/articles/switching-higher-order-streams-to-first-order-streams/)
* [2026-04-16, 07:01:29](https://news.ycombinator.com/item?id=47789607) - [RamAIn (YC W26) Is Hiring](https://www.ycombinator.com/companies/ramain/jobs/bwtwd9W-founding-gtm-operations-lead)
* [2026-04-16, 07:00:00](https://hardware.slashdot.org/story/26/04/16/0030206/uk-households-to-be-urged-to-use-more-power-this-summer-as-renewables-soar?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Households To Be Urged To Use More Power This Summer As Renewables Soar](https://hardware.slashdot.org/story/26/04/16/0030206/uk-households-to-be-urged-to-use-more-power-this-summer-as-renewables-soar?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-16, 05:01:05](https://news.ycombinator.com/item?id=47788818) - [Moving a large-scale metrics pipeline from StatsD to OpenTelemetry / Prometheus](https://medium.com/airbnb-engineering/building-a-high-volume-metrics-pipeline-with-opentelemetry-and-vmagent-c714d6910b45)
* [2026-04-16, 04:06:39](https://news.ycombinator.com/item?id=47788542) - [Darkbloom – Private inference on idle Macs](https://darkbloom.dev)
* [2026-04-16, 04:05:00](https://soylentnews.org/article.pl?sid=26/04/15/028227&amp;from=rss) - [This Memory Chip Survives Temperatures Hotter Than Lava](https://soylentnews.org/article.pl?sid=26/04/15/028227&amp;from=rss)
* [2026-04-16, 03:54:21](https://news.ycombinator.com/item?id=47788473) - [RedSun: System user access on Win 11/10 and Server with the April 2026 Update](https://github.com/Nightmare-Eclipse/RedSun)
* [2026-04-16, 03:44:38](https://news.ycombinator.com/item?id=47788424) - [FSF trying to contact Google about spammer sending 10k+ mails from Gmail account](https://daedal.io/@thomzane/116410863009847575)
* [2026-04-16, 03:38:45](https://news.ycombinator.com/item?id=47788398) - [North American English Dialects](https://aschmann.net/AmEng/)
* [2026-04-16, 03:30:00](https://news.slashdot.org/story/26/04/16/007258/nature-is-still-molding-human-genes-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nature Is Still Molding Human Genes, Study Finds](https://news.slashdot.org/story/26/04/16/007258/nature-is-still-molding-human-genes-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-16, 03:29:30](https://lobste.rs/s/y8j7by/internet_draft_internet_protocol) - [Internet-Draft Internet Protocol Version 8 (IPv8)](https://datatracker.ietf.org/doc/draft-thain-ipv8/00/)
* [2026-04-15, 23:20:00](https://soylentnews.org/article.pl?sid=26/04/15/021231&amp;from=rss) - [Blaming Kids for Poor Security](https://soylentnews.org/article.pl?sid=26/04/15/021231&amp;from=rss)
* [2026-04-15, 23:00:00](https://hardware.slashdot.org/story/26/04/15/2143237/boston-dynamics-robot-dog-can-now-read-gauges-spot-spills-and-reason?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Boston Dynamics&apos; Robot Dog Can Now Read Gauges, Spot Spills, and Reason](https://hardware.slashdot.org/story/26/04/15/2143237/boston-dynamics-robot-dog-can-now-read-gauges-spot-spills-and-reason?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-15, 22:50:38](https://lobste.rs/s/dzlbeb/cybersecurity_looks_like_proof_work_now) - [Cybersecurity Looks Like Proof of Work Now](https://www.dbreunig.com/2026/04/14/cybersecurity-is-proof-of-work-now.html)
* [2026-04-15, 22:27:54](https://news.ycombinator.com/item?id=47786164) - [I made a terminal pager](https://theleo.zone/posts/pager/)
* [2026-04-15, 22:00:00](https://news.slashdot.org/story/26/04/15/1943246/us-jobs-too-important-to-risk-chinese-car-imports-says-ford-ceo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Jobs Too Important To Risk Chinese Car Imports, Says Ford CEO](https://news.slashdot.org/story/26/04/15/1943246/us-jobs-too-important-to-risk-chinese-car-imports-says-ford-ceo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-15, 21:21:05](https://news.ycombinator.com/item?id=47785397) - [ChatGPT for Excel](https://chatgpt.com/apps/spreadsheets/)
* [2026-04-15, 21:00:00](https://yro.slashdot.org/story/26/04/15/1913213/calcom-is-going-closed-source-because-of-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cal.com Is Going Closed Source Because of AI](https://yro.slashdot.org/story/26/04/15/1913213/calcom-is-going-closed-source-because-of-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-15, 20:00:00](https://yro.slashdot.org/story/26/04/15/1937205/live-nation-illegally-monopolized-ticketing-market-jury-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Live Nation Illegally Monopolized Ticketing Market, Jury Finds](https://yro.slashdot.org/story/26/04/15/1937205/live-nation-illegally-monopolized-ticketing-market-jury-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-15, 19:59:39](https://lobste.rs/s/nihbc8/you_cannot_use_gnu_gpl_take_software) - [You cannot use the GNU (A)GPL to take software freedom away](https://www.fsf.org/blogs/licensing/agpl-is-not-a-tool-for-taking-freedom-away)
* [2026-04-15, 19:00:00](https://yro.slashdot.org/story/26/04/15/1831241/annas-archive-loses-322-million-spotify-piracy-case-without-a-fight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anna&apos;s Archive Loses $322 Million Spotify Piracy Case Without a Fight](https://yro.slashdot.org/story/26/04/15/1831241/annas-archive-loses-322-million-spotify-piracy-case-without-a-fight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-15, 18:37:00](https://soylentnews.org/article.pl?sid=26/04/15/0158227&amp;from=rss) - [South Korea&apos;s Telecom Giants Surprise 7 Million Users With Unlimited, Universal Internet](https://soylentnews.org/article.pl?sid=26/04/15/0158227&amp;from=rss)
* [2026-04-15, 18:12:33](https://lobste.rs/s/r4dspa/ai_assistance_reduces_persistence_hurts) - [AI Assistance Reduces Persistence and Hurts Independent Performance](https://arxiv.org/pdf/2604.04721)
* [2026-04-15, 18:00:00](https://slashdot.org/story/26/04/15/1737249/snapchat-blames-ai-as-it-cuts-1000-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Snapchat Blames AI As It Cuts 1,000 Jobs](https://slashdot.org/story/26/04/15/1737249/snapchat-blames-ai-as-it-cuts-1000-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-15, 17:44:26](https://news.ycombinator.com/item?id=47782570) - [Google broke its promise to me – now ICE has my data](https://www.eff.org/deeplinks/2026/04/google-broke-its-promise-me-now-ice-has-my-data)
* [2026-04-15, 17:00:00](https://news.slashdot.org/story/26/04/15/1646259/struggling-shoe-retailer-allbirds-pivots-to-ai-stock-explodes-more-than-700?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Struggling Shoe Retailer Allbirds Pivots To AI, Stock Explodes More Than 700%](https://news.slashdot.org/story/26/04/15/1646259/struggling-shoe-retailer-allbirds-pivots-to-ai-stock-explodes-more-than-700?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-15, 16:57:15](https://lobste.rs/s/8disen/xata_open_source_postgres_platform_with) - [Xata: Open source Postgres platform with copy-on-write branching and scale-to-zero](https://github.com/xataio/xata)
* [2026-04-15, 16:29:31](https://lobste.rs/s/inohss/not_all_elementary_functions_can_be) - [Not all elementary functions can be expressed with exp-minus-log](https://www.stylewarning.com/posts/not-all-elementary/)
* [2026-04-15, 16:12:55](https://lobste.rs/s/jbyxup/sdl3_add_dos_platform_support) - [SDL3 - Add DOS platform support](https://bsky.app/profile/dosnostalgic.bsky.social/post/3mjfdos7iok2o)
* [2026-04-15, 16:07:47](https://lobste.rs/s/9ooaxp/let_sleeping_cpus_lie_s0ix) - [Let Sleeping CPUs Lie — S0ix](https://freebsdfoundation.org/our-work/journal/browser-based-edition/laptop-desktop/let-sleeping-cpus-lie-s0ix)
* [2026-04-15, 16:00:00](https://hardware.slashdot.org/story/26/04/15/0712256/rivians-illinois-factory-will-run-on-recycled-ev-batteries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rivian&apos;s Illinois Factory Will Run On Recycled EV Batteries](https://hardware.slashdot.org/story/26/04/15/0712256/rivians-illinois-factory-will-run-on-recycled-ev-batteries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-15, 15:26:46](https://news.ycombinator.com/item?id=47780456) - [Cal.com is going closed source](https://cal.com/blog/cal-com-goes-closed-source-why)
* [2026-04-15, 15:00:00](https://science.slashdot.org/story/26/04/15/076216/norway-man-cured-of-hiv-with-brothers-stem-cells?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Norway Man Cured of HIV With Brother&apos;s Stem Cells](https://science.slashdot.org/story/26/04/15/076216/norway-man-cured-of-hiv-with-brothers-stem-cells?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-15, 13:52:00](https://soylentnews.org/article.pl?sid=26/04/14/0413241&amp;from=rss) - [Electrode Technology Achieves 86% Efficiency for Converting CO₂ Into Plastic Precursors](https://soylentnews.org/article.pl?sid=26/04/14/0413241&amp;from=rss)
* [2026-04-15, 13:05:31](https://lobste.rs/s/hphrhd/direct_win32_api_weird_shaped_windows_why) - [Direct Win32 API, Weird-Shaped Windows, and Why They Mostly Disappeared](https://warped3.substack.com/p/direct-win32-api-weird-shaped-windows)
* [2026-04-15, 12:57:28](https://lobste.rs/s/otzxqs/things_you_didn_t_know_about_indexes) - [Things you didn&apos;t know about indexes](https://jon.chrt.dev/2026/04/15/things-you-didnt-know-about-indexes.html)
* [2026-04-15, 11:59:49](https://news.ycombinator.com/item?id=47777894) - [IPv6 traffic crosses the 50% mark](https://www.google.com/intl/en/ipv6/statistics.html?yzh=28197)
* [2026-04-15, 11:57:24](https://lobste.rs/s/q6j2fu/retrofitting_jit_compilers_into_c) - [Retrofitting JIT Compilers into C Interpreters](https://tratt.net/laurie/blog/2026/retrofitting_jit_compilers_into_c_interpreters.html)
* [2026-04-15, 11:00:00](https://entertainment.slashdot.org/story/26/04/14/2045226/sony-boss-urges-theaters-to-stop-30-minutes-of-trailers-and-ads-before-movies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sony Boss Urges Theaters To Stop 30 Minutes of Trailers and Ads Before Movies](https://entertainment.slashdot.org/story/26/04/14/2045226/sony-boss-urges-theaters-to-stop-30-minutes-of-trailers-and-ads-before-movies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-15, 09:07:00](https://soylentnews.org/article.pl?sid=26/04/14/049220&amp;from=rss) - [Linux Lays Down the Law on AI-Generated Code](https://soylentnews.org/article.pl?sid=26/04/14/049220&amp;from=rss)
* [2026-04-15, 07:00:00](https://tech.slashdot.org/story/26/04/15/0642220/amazon-buys-globalstar-for-108-billion-moving-to-expand-its-satellite-internet-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Buys Globalstar For $10.8 Billion, Moving To Expand Its Satellite Internet Service](https://tech.slashdot.org/story/26/04/15/0642220/amazon-buys-globalstar-for-108-billion-moving-to-expand-its-satellite-internet-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-15, 04:22:00](https://soylentnews.org/article.pl?sid=26/04/14/043205&amp;from=rss) - [The AI Great Leap Forward](https://soylentnews.org/article.pl?sid=26/04/14/043205&amp;from=rss)
* [2026-04-15, 03:43:06](https://lobste.rs/s/vb70md/i_don_t_care_it_s_x_times_faster) - [I don&apos;t care that it&apos;s X times faster](https://tinkering.xyz/faster/)
* [2026-04-15, 03:30:00](https://entertainment.slashdot.org/story/26/04/14/2213204/sony-is-removing-many-popular-features-from-its-free-ota-tv-options?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sony Is Removing Many Popular Features From Its Free OTA TV Options](https://entertainment.slashdot.org/story/26/04/14/2213204/sony-is-removing-many-popular-features-from-its-free-ota-tv-options?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-14, 23:35:00](https://soylentnews.org/article.pl?sid=26/04/14/0256247&amp;from=rss) - [Missouri Town Fires Half its City Council Over Data Center Deal](https://soylentnews.org/article.pl?sid=26/04/14/0256247&amp;from=rss)
* [2026-04-14, 18:53:00](https://soylentnews.org/article.pl?sid=26/04/14/0235214&amp;from=rss) - [Original Task Manager Was Only 80KB So It Could Run Smoothly on 90s Computers](https://soylentnews.org/article.pl?sid=26/04/14/0235214&amp;from=rss)
* [2026-04-14, 18:08:14](https://news.ycombinator.com/item?id=47769089) - [Cybersecurity looks like proof of work now](https://www.dbreunig.com/2026/04/14/cybersecurity-is-proof-of-work-now.html)
* [2026-04-14, 14:02:00](https://soylentnews.org/article.pl?sid=26/04/12/173259&amp;from=rss) - [Tea: A Stimulant That Made the Modern World ](https://soylentnews.org/article.pl?sid=26/04/12/173259&amp;from=rss)
* [2026-04-14, 10:59:33](https://news.ycombinator.com/item?id=47763959) - [PHP 8.6 Closure Optimizations](https://wiki.php.net/rfc/closure-optimizations)
* [2026-04-14, 09:12:00](https://soylentnews.org/article.pl?sid=26/04/12/170258&amp;from=rss) - [Linux Kernel Maintainers Are Following Through on Removing Intel 486 Support](https://soylentnews.org/article.pl?sid=26/04/12/170258&amp;from=rss)
* [2026-04-14, 04:29:00](https://soylentnews.org/article.pl?sid=26/04/12/170200&amp;from=rss) - [Startup Secures $30 Million Contract to 3D Print Jet Engines for the USAF](https://soylentnews.org/article.pl?sid=26/04/12/170200&amp;from=rss)
* [2026-04-13, 23:44:00](https://soylentnews.org/article.pl?sid=26/04/12/1524251&amp;from=rss) - [Human Echolocation Works Step by Step](https://soylentnews.org/article.pl?sid=26/04/12/1524251&amp;from=rss)
* [2026-04-13, 18:54:00](https://soylentnews.org/article.pl?sid=26/04/12/1522257&amp;from=rss) - [OpenAI Backs Bill That Would Limit Liability for AI-Enabled Mass Deaths or Financial Disasters](https://soylentnews.org/article.pl?sid=26/04/12/1522257&amp;from=rss)
* [2026-04-13, 14:11:00](https://soylentnews.org/article.pl?sid=26/04/12/1154237&amp;from=rss) - [Intel Introduces its Own Neural Compression Technology With a Fallback Mode That Works on All GPUs](https://soylentnews.org/article.pl?sid=26/04/12/1154237&amp;from=rss)
* [2026-04-13, 11:22:22](https://news.ycombinator.com/item?id=47750486) - [Too much discussion of the XOR swap trick](https://heather.cafe/posts/too_much_xor_swap_trick/)
* [2026-04-13, 09:24:00](https://soylentnews.org/article.pl?sid=26/04/12/1147250&amp;from=rss) - [Cloudflare and GoDaddy Team Up to Curb AI Bot Brigades](https://soylentnews.org/article.pl?sid=26/04/12/1147250&amp;from=rss)
* [2026-04-13, 05:53:28](https://news.ycombinator.com/item?id=47748101) - [Fly Drones from the Browser](https://fpvsim.com/sim)
* [2026-04-13, 04:57:48](https://news.ycombinator.com/item?id=47747770) - [The paper computer](https://jsomers.net/blog/the-paper-computer)
* [2026-04-13, 04:35:00](https://soylentnews.org/article.pl?sid=26/04/11/0355254&amp;from=rss) - [Little Snitch for Linux Released!](https://soylentnews.org/article.pl?sid=26/04/11/0355254&amp;from=rss)
* [2026-04-12, 23:48:00](https://soylentnews.org/article.pl?sid=26/04/11/0321245&amp;from=rss) - [&apos;Dead End&apos;: Radical 20-Year Study Reveals Genetic Cloning Hits a Limit](https://soylentnews.org/article.pl?sid=26/04/11/0321245&amp;from=rss)
* [2026-04-12, 19:02:00](https://soylentnews.org/article.pl?sid=26/04/11/0313203&amp;from=rss) - [Tech Industry Lays Off Nearly 80,000 Employees in the First Quarter of 2026 (Almost 50% Due to AI)](https://soylentnews.org/article.pl?sid=26/04/11/0313203&amp;from=rss)
* [2026-04-12, 14:15:00](https://soylentnews.org/article.pl?sid=26/04/11/037238&amp;from=rss) - [Dad Stuck in Support Nightmare After Teen Lied About Age on Discord](https://soylentnews.org/article.pl?sid=26/04/11/037238&amp;from=rss)
* [2026-04-12, 09:33:00](https://soylentnews.org/article.pl?sid=26/04/11/0256207&amp;from=rss) - [Federal Cyber Experts Called Microsoft&apos;s Cloud a “Pile of Sh*T,” Approved It Anyway](https://soylentnews.org/article.pl?sid=26/04/11/0256207&amp;from=rss)
* [2026-04-12, 09:05:29](https://news.ycombinator.com/item?id=47737499) - [Modern Microprocessors – A 90-Minute Guide](https://www.lighterra.com/articles/)
* [2026-04-12, 06:36:23](https://news.ycombinator.com/item?id=47736738) - [FIXAPL](https://fixapl.netlify.app/)
* [2026-04-12, 04:44:00](https://soylentnews.org/article.pl?sid=26/04/11/0245252&amp;from=rss) - [3D Printing a Motor--Some First Steps](https://soylentnews.org/article.pl?sid=26/04/11/0245252&amp;from=rss)
* [2026-04-12, 00:03:00](https://soylentnews.org/article.pl?sid=26/04/11/0242235&amp;from=rss) - [This New &apos;Laughing Rat&apos; Malware Will Steal Your Data, Hack Your Systems, and Laugh at You](https://soylentnews.org/article.pl?sid=26/04/11/0242235&amp;from=rss)
