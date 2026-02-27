# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovations

* [PostmarketOS in 2026-02: generic kernels, bans use of generative AI](https://postmarketos.org/blog/2026/02/26/pmOS-update-2026-02/) ([comments](https://news.ycombinator.com/item?id=47179553))

* [Linux ID: Linux explores new way of authenticating developers and their code](https://www.zdnet.com/article/linux-kernel-maintainers-new-way-of-authenticating-developers-and-code/) ([comments](https://lobste.rs/s/xm8vfl/linux_id_linux_explores_new_way))

* [Parakeet.cpp – Parakeet ASR inference in pure C++ with Metal GPU acceleration](https://github.com/Frikallo/parakeet.cpp) ([comments](https://news.ycombinator.com/item?id=47176239))

* [BuildKit: Docker's hidden gem that can build almost anything](https://tuananh.net/2026/02/25/buildkit-docker-hidden-gem/) ([comments](https://lobste.rs/s/0pof41/buildkit_docker_s_hidden_gem_can_build))

* [Google Launches Nano Banana 2 Model With Faster Image Generation](https://tech.slashdot.org/story/26/02/26/2145253/google-launches-nano-banana-2-model-with-faster-image-generation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Making WebAssembly a first-class language on the Web](https://hacks.mozilla.org/2026/02/making-webassembly-a-first-class-language-on-the-web/) ([comments](https://lobste.rs/s/ul9mjj/making_webassembly_first_class_language))

## Science and Space

* [Moon's Ancient Magnetic Field May Have Flickered On and Off](https://science.slashdot.org/story/26/02/26/2356249/moons-ancient-magnetic-field-may-have-flickered-on-and-off?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [NASA Officially Classifies Boeing Starliner Failure as a Maximum-Level Type A Mishap](https://soylentnews.org/article.pl?sid=26/02/26/049239&amp;from=rss)

* [Astronomers Identify a Galaxy Made Almost Entirely of Dark Matter](https://soylentnews.org/article.pl?sid=26/02/24/0444250&amp;from=rss)

## AI and Ethical Concerns

* [Anthropic CEO Says AI Company 'Cannot In Good Conscience Accede' To Pentagon](https://tech.slashdot.org/story/26/02/26/2352217/anthropic-ceo-says-ai-company-cannot-in-good-conscience-accede-to-pentagon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Chinese Official's Use of ChatGPT Revealed a Global Intimidation Operation](https://tech.slashdot.org/story/26/02/26/2045225/chinese-officials-use-of-chatgpt-revealed-a-global-intimidation-opperation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [The Government Just Made it Harder to See What Spy Tech it Buys](https://yro.slashdot.org/story/26/02/26/1722205/the-government-just-made-it-harder-to-see-what-spy-tech-it-buys?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Cultural and Historical Insights

* [Return of the Obra Dinn: spherical mapped dithering for a 1bpp 1st-person game (2017)](https://forums.tigsource.com/index.php?topic=40832.msg1363742#msg1363742) ([comments](https://lobste.rs/s/bohhcq/return_obra_dinn_spherical_mapped))

* [An Introduction to the Codex Seraphinianus, the Strangest Book Ever Published](https://www.openculture.com/2026/02/an-introduction-to-the-codex-seraphinianus.html) ([comments](https://news.ycombinator.com/item?id=47124454))

* [Reading English from 1000 AD](https://lewiscampbell.tech/blog/260224.html) ([comments](https://news.ycombinator.com/item?id=47131980))

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

* [2026-02-27, 13:18:19](https://lobste.rs/s/h2cv91/zsa_andrew_smith) - [ZSA: Andrew Smith](https://people.zsa.io/andrew-smith)
* [2026-02-27, 13:00:00](https://hardware.slashdot.org/story/26/02/27/008259/memory-price-hikes-will-kill-off-budget-pcs-and-smartphones-analyst-warns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Memory Price Hikes Will Kill Off Budget PCs and Smartphones, Analyst Warns](https://hardware.slashdot.org/story/26/02/27/008259/memory-price-hikes-will-kill-off-budget-pcs-and-smartphones-analyst-warns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-27, 12:01:36](https://news.ycombinator.com/item?id=47179553) - [PostmarketOS in 2026-02: generic kernels, bans use of generative AI](https://postmarketos.org/blog/2026/02/26/pmOS-update-2026-02/)
* [2026-02-27, 11:47:22](https://lobste.rs/s/wdrawa/ai_sandbox_runs_on_your_homelab) - [AI sandbox that runs on your homelab](https://github.com/deevus/pixels)
* [2026-02-27, 11:37:49](https://news.ycombinator.com/item?id=47179356) - [Lawmakers say US Military used laser to take down Border Protection drone in TX](https://apnews.com/article/military-laser-border-drone-texas-airport-55aaab7093f7d6dd174f909f3875001c)
* [2026-02-27, 11:30:00](https://soylentnews.org/article.pl?sid=26/02/26/0411234&amp;from=rss) - [AMD&apos;s Next-Gen Ryzen 10000 Desktop CPUs Rumored to Come in Seven Different Configs](https://soylentnews.org/article.pl?sid=26/02/26/0411234&amp;from=rss)
* [2026-02-27, 10:52:07](https://news.ycombinator.com/item?id=47179038) - [MitID, Denmarks sole digital ID, has been down for over an hour and counting](https://www.digitaliser.dk/mitid/nyt-fra-mitid/2026/feb/driftsforstyrrelser-mitid)
* [2026-02-27, 10:43:12](https://lobste.rs/s/jw5pg6/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/jw5pg6/what_are_you_doing_this_weekend)
* [2026-02-27, 10:27:29](https://news.ycombinator.com/item?id=47178863) - [F-Droid Board of Directors nominations 2026](https://f-droid.org/2026/02/26/board-of-directors-nominations.html)
* [2026-02-27, 10:21:40](https://news.ycombinator.com/item?id=47178836) - [Dyson settles forced labour suit in landmark UK case](https://www.bbc.com/news/articles/cddnry8dnl7o)
* [2026-02-27, 10:00:00](https://science.slashdot.org/story/26/02/26/2356249/moons-ancient-magnetic-field-may-have-flickered-on-and-off?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Moon&apos;s Ancient Magnetic Field May Have Flickered On and Off](https://science.slashdot.org/story/26/02/26/2356249/moons-ancient-magnetic-field-may-have-flickered-on-and-off?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-27, 09:56:42](https://news.ycombinator.com/item?id=47178678) - [Breaking Free](https://www.forbrukerradet.no/breakingfree/)
* [2026-02-27, 09:04:48](https://news.ycombinator.com/item?id=47178344) - [Working on Pharo Smalltalk: BPatterns: Rewrite Engine with Smalltalk Style](http://dionisiydk.blogspot.com/2026/02/bpatterns-rewrite-engine-with-smalltalk.html)
* [2026-02-27, 08:45:02](https://news.ycombinator.com/item?id=47178176) - [Ubicloud (YC W24): Software Engineer – $95-$250K in Turkey, Netherlands, CA](https://www.ycombinator.com/companies/ubicloud/jobs/j4bntEJ-software-engineer)
* [2026-02-27, 08:02:52](https://news.ycombinator.com/item?id=47177877) - [The complete Manic Miner disassembly](https://skoolkit.ca/disassemblies/manic_miner/)
* [2026-02-27, 07:45:44](https://lobste.rs/s/xm8vfl/linux_id_linux_explores_new_way) - [Linux ID: Linux explores new way of authenticating developers and their code](https://www.zdnet.com/article/linux-kernel-maintainers-new-way-of-authenticating-developers-and-code/)
* [2026-02-27, 07:34:09](https://lobste.rs/s/4pqmdx/mothlamp_problems) - [Mothlamp Problems](https://unfoldingdiagrams.leaflet.pub/3mft6olldos26)
* [2026-02-27, 07:32:42](https://lobste.rs/s/aifnbl/accidentally_disabling_ssh_access_via) - [Accidentally disabling SSH access via scp](https://sny.sh/hypha/blog/scp)
* [2026-02-27, 07:00:00](https://science.slashdot.org/story/26/02/27/002252/nasa-reveals-identity-of-astronaut-who-suffered-medical-incident-aboard-iss?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Reveals Identity of Astronaut Who Suffered Medical Incident Aboard ISS](https://science.slashdot.org/story/26/02/27/002252/nasa-reveals-identity-of-astronaut-who-suffered-medical-incident-aboard-iss?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-27, 06:47:00](https://soylentnews.org/article.pl?sid=26/02/26/049239&amp;from=rss) - [NASA Officially Classifies Boeing Starliner Failure as a Maximum-Level Type A Mishap](https://soylentnews.org/article.pl?sid=26/02/26/049239&amp;from=rss)
* [2026-02-27, 06:41:38](https://lobste.rs/s/djammf/our_programs_are_fun_use) - [“Our programs are fun to use.”](https://unsung.aresluna.org/our-programs-are-fun-to-use/)
* [2026-02-27, 06:21:23](https://news.ycombinator.com/item?id=47177186) - [The normalization of corruption in organizations (2003) [pdf]](https://gwern.net/doc/sociology/2003-ashforth.pdf)
* [2026-02-27, 06:12:58](https://lobste.rs/s/ukzck5/proposal_for_generic_methods_for_go_has) - [The proposal for generic methods for Go has been officially accepted](https://www.reddit.com/r/golang/comments/1rfmjbq/the_proposal_for_generic_methods_for_go_from/)
* [2026-02-27, 03:49:48](https://news.ycombinator.com/item?id=47176257) - [The Hunt for Dark Breakfast](https://moultano.wordpress.com/2026/02/22/the-hunt-for-dark-breakfast/)
* [2026-02-27, 03:48:05](https://news.ycombinator.com/item?id=47176239) - [Parakeet.cpp – Parakeet ASR inference in pure C++ with Metal GPU acceleration](https://github.com/Frikallo/parakeet.cpp)
* [2026-02-27, 03:33:28](https://news.ycombinator.com/item?id=47176150) - [Compact disc story (1998)](https://www.researchgate.net/publication/294484774_Compact_disc_story)
* [2026-02-27, 03:30:00](https://tech.slashdot.org/story/26/02/26/2352217/anthropic-ceo-says-ai-company-cannot-in-good-conscience-accede-to-pentagon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic CEO Says AI Company &apos;Cannot In Good Conscience Accede&apos; To Pentagon](https://tech.slashdot.org/story/26/02/26/2352217/anthropic-ceo-says-ai-company-cannot-in-good-conscience-accede-to-pentagon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-27, 01:59:00](https://soylentnews.org/article.pl?sid=26/02/26/042214&amp;from=rss) - [Hungarian Startup Transforming Robot Manufacturing With 3D Tissue Braiding](https://soylentnews.org/article.pl?sid=26/02/26/042214&amp;from=rss)
* [2026-02-27, 01:38:52](https://lobste.rs/s/qm55ud/man_who_stole_infinity) - [The Man Who Stole Infinity](https://www.quantamagazine.org/the-man-who-stole-infinity-20260225/)
* [2026-02-27, 00:45:00](https://yro.slashdot.org/story/26/02/26/2242230/four-convicted-over-spyware-affair-that-shook-greece?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Four Convicted Over Spyware Affair That Shook Greece](https://yro.slashdot.org/story/26/02/26/2242230/four-convicted-over-spyware-affair-that-shook-greece?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-27, 00:02:00](https://tech.slashdot.org/story/26/02/26/233213/colorado-lawmakers-push-for-age-verification-at-the-operating-system-level?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Colorado Lawmakers Push for Age Verification at the Operating System Level](https://tech.slashdot.org/story/26/02/26/233213/colorado-lawmakers-push-for-age-verification-at-the-operating-system-level?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-26, 23:38:42](https://lobste.rs/s/bohhcq/return_obra_dinn_spherical_mapped) - [Return of the Obra Dinn: spherical mapped dithering for a 1bpp 1st-person game (2017)](https://forums.tigsource.com/index.php?topic=40832.msg1363742#msg1363742)
* [2026-02-26, 23:20:00](https://slashdot.org/story/26/02/26/2250206/jack-dorseys-block-cuts-nearly-half-of-its-staff-in-ai-gamble?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Jack Dorsey&apos;s Block Cuts Nearly Half of Its Staff In AI Gamble](https://slashdot.org/story/26/02/26/2250206/jack-dorseys-block-cuts-nearly-half-of-its-staff-in-ai-gamble?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-26, 22:42:47](https://news.ycombinator.com/item?id=47173121) - [Statement from Dario Amodei on our discussions with the Department of War](https://www.anthropic.com/news/statement-department-of-war)
* [2026-02-26, 22:40:00](https://news.slashdot.org/story/26/02/26/2154237/whats-the-point-of-school-when-ai-can-do-your-homework?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What&apos;s the Point of School When AI Can Do Your Homework?](https://news.slashdot.org/story/26/02/26/2154237/whats-the-point-of-school-when-ai-can-do-your-homework?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-26, 22:00:00](https://tech.slashdot.org/story/26/02/26/2145253/google-launches-nano-banana-2-model-with-faster-image-generation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Launches Nano Banana 2 Model With Faster Image Generation](https://tech.slashdot.org/story/26/02/26/2145253/google-launches-nano-banana-2-model-with-faster-image-generation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-26, 21:54:17](https://lobste.rs/s/wbpjmd/how_my_side_project_got_banned_from) - [How my side project got banned from the internet](https://trysound.io/how-my-side-project-got-banned-from-the-internet/)
* [2026-02-26, 21:20:00](https://tech.slashdot.org/story/26/02/26/2045225/chinese-officials-use-of-chatgpt-revealed-a-global-intimidation-opperation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chinese Official&apos;s Use of ChatGPT Revealed a Global Intimidation Opperation](https://tech.slashdot.org/story/26/02/26/2045225/chinese-officials-use-of-chatgpt-revealed-a-global-intimidation-opperation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-26, 21:17:56](https://news.ycombinator.com/item?id=47172119) - [Layoffs at Block](https://twitter.com/jack/status/2027129697092731343)
* [2026-02-26, 21:17:00](https://soylentnews.org/article.pl?sid=26/02/25/1612247&amp;from=rss) - [Tesla &apos;Robotaxi&apos; Adds 5 More Crashes in Austin in a Month](https://soylentnews.org/article.pl?sid=26/02/25/1612247&amp;from=rss)
* [2026-02-26, 20:40:00](https://mobile.slashdot.org/story/26/02/26/2036231/iphone-and-ipad-are-first-consumer-devices-cleared-for-nato-classified-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [iPhone and iPad Are First Consumer Devices Cleared for NATO Classified Data](https://mobile.slashdot.org/story/26/02/26/2036231/iphone-and-ipad-are-first-consumer-devices-cleared-for-nato-classified-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-26, 19:58:46](https://news.ycombinator.com/item?id=47171233) - [What does \&quot; 2&gt;&amp;1 \&quot; mean?](https://stackoverflow.com/questions/818255/what-does-21-mean)
* [2026-02-26, 19:20:00](https://news.slashdot.org/story/26/02/26/182239/firefox-148-lets-you-kill-all-ai-features-in-one-click?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Firefox 148 Lets You Kill All AI Features in One Click](https://news.slashdot.org/story/26/02/26/182239/firefox-148-lets-you-kill-all-ai-features-in-one-click?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-26, 18:40:00](https://slashdot.org/story/26/02/26/1744240/which-piece-of-speculative-fiction-had-the-greatest-single-day-stock-market-impact?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Which Piece of Speculative Fiction Had the Greatest Single-Day Stock Market Impact?](https://slashdot.org/story/26/02/26/1744240/which-piece-of-speculative-fiction-had-the-greatest-single-day-stock-market-impact?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-26, 18:38:38](https://news.ycombinator.com/item?id=47170174) - [Launch HN: Cardboard (YC W26) – Agentic video editor](https://www.usecardboard.com/)
* [2026-02-26, 18:37:59](https://news.ycombinator.com/item?id=47170157) - [OsmAnd’s Faster Offline Navigation (2025)](https://osmand.net/blog/fast-routing/)
* [2026-02-26, 18:13:44](https://lobste.rs/s/vgvzys/gilded_age_open_source_is_over) - [The Gilded Age of Open Source is over](https://www.youtube.com/watch?v=pTBgvhdz9VU)
* [2026-02-26, 18:12:26](https://news.ycombinator.com/item?id=47169757) - [What Claude Code chooses](https://amplifying.ai/research/claude-code-picks)
* [2026-02-26, 18:11:41](https://lobste.rs/s/hfnps5/osmand_s_faster_offline_navigation) - [OsmAnd&apos;s Faster Offline Navigation](https://osmand.net/blog/fast-routing)
* [2026-02-26, 18:01:00](https://yro.slashdot.org/story/26/02/26/1722205/the-government-just-made-it-harder-to-see-what-spy-tech-it-buys?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Government Just Made it Harder to See What Spy Tech it Buys](https://yro.slashdot.org/story/26/02/26/1722205/the-government-just-made-it-harder-to-see-what-spy-tech-it-buys?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-26, 17:35:24](https://lobste.rs/s/bhzsdr/open_source_endowment_world_s_first) - [Open Source Endowment — World&apos;s First Endowment Fund for OSS](https://endowment.dev/)
* [2026-02-26, 17:20:00](https://slashdot.org/story/26/02/26/1714241/the-ai-case-against-indian-it-ignores-what-indian-it-actually-does?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The AI Case Against Indian IT Ignores What Indian IT Actually Does](https://slashdot.org/story/26/02/26/1714241/the-ai-case-against-indian-it-ignores-what-indian-it-actually-does?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-26, 16:45:11](https://lobste.rs/s/o3cpxf/sliced_by_go_s_slices) - [Sliced by Go’s Slices](https://ohadravid.github.io/posts/2026-02-go-sliced/)
* [2026-02-26, 16:34:00](https://soylentnews.org/article.pl?sid=26/02/25/1553206&amp;from=rss) - [SpaceX&apos;s Faulty Falcon Spewed Massive Lithium Plume Over Europe, Say Scientists](https://soylentnews.org/article.pl?sid=26/02/25/1553206&amp;from=rss)
* [2026-02-26, 16:25:09](https://lobste.rs/s/ul9mjj/making_webassembly_first_class_language) - [Making WebAssembly a first-class language on the Web](https://hacks.mozilla.org/2026/02/making-webassembly-a-first-class-language-on-the-web/)
* [2026-02-26, 16:23:31](https://lobste.rs/s/nxmzzn/snakes_run_rendering_100m_pixels_second) - [snakes.run: rendering 100M pixels a second over ssh](https://eieio.games/blog/secure-massively-multiplayer-snake/)
* [2026-02-26, 15:55:48](https://news.ycombinator.com/item?id=47167763) - [AirSnitch: Demystifying and breaking client isolation in Wi-Fi networks [pdf]](https://www.ndss-symposium.org/wp-content/uploads/2026-f1282-paper.pdf)
* [2026-02-26, 15:21:35](https://lobste.rs/s/kj7g7j/ordered_dithering_with_arbitrary) - [Ordered Dithering with Arbitrary or Irregular Colour Palettes](https://matejlou.blog/2023/12/06/ordered-dithering-for-arbitrary-or-irregular-palettes/)
* [2026-02-26, 13:58:53](https://lobste.rs/s/ccworf/model_collapse_ends_ai_hype) - [Model Collapse Ends AI Hype](https://youtu.be/ShusuVq32hc)
* [2026-02-26, 13:36:33](https://lobste.rs/s/3kwdvv/can_llms_sat) - [Can LLMs SAT?](https://blog.aiono.dev/posts/can-llms-sat.html)
* [2026-02-26, 11:48:00](https://soylentnews.org/article.pl?sid=26/02/25/1551209&amp;from=rss) - [Michael Pollan Says AI May &apos;Think&apos; — but It Will Never be Conscious](https://soylentnews.org/article.pl?sid=26/02/25/1551209&amp;from=rss)
* [2026-02-26, 11:21:58](https://lobste.rs/s/ibkc72/git_postgres) - [Git in Postgres](https://nesbitt.io/2026/02/26/git-in-postgres.html)
* [2026-02-26, 07:58:03](https://lobste.rs/s/0pof41/buildkit_docker_s_hidden_gem_can_build) - [BuildKit: Docker&apos;s hidden gem that can build almost anything](https://tuananh.net/2026/02/25/buildkit-docker-hidden-gem/)
* [2026-02-26, 07:42:39](https://lobste.rs/s/oj6hru/google_api_keys_weren_t_secrets_then) - [Google API Keys Weren&apos;t Secrets. But then Gemini Changed the Rules](https://trufflesecurity.com/blog/google-api-keys-werent-secrets-but-then-gemini-changed-the-rules)
* [2026-02-26, 07:06:00](https://soylentnews.org/article.pl?sid=26/02/25/1546252&amp;from=rss) - [80386 Protection](https://soylentnews.org/article.pl?sid=26/02/25/1546252&amp;from=rss)
* [2026-02-26, 06:07:48](https://lobste.rs/s/uikg3e/open_letter_google_regarding_mandatory) - [An Open Letter to Google regarding Mandatory Developer Registration for Android](https://keepandroidopen.org/open-letter/)
* [2026-02-26, 02:20:00](https://soylentnews.org/article.pl?sid=26/02/25/1544219&amp;from=rss) - [AI Bot Seemingly Shames Developer for Rejected Pull Request](https://soylentnews.org/article.pl?sid=26/02/25/1544219&amp;from=rss)
* [2026-02-26, 01:20:36](https://lobste.rs/s/yhv8lq/against_query_based_compilers) - [Against Query Based Compilers](https://matklad.github.io/2026/02/25/against-query-based-compilers.html)
* [2026-02-25, 21:35:00](https://soylentnews.org/article.pl?sid=26/02/24/0734201&amp;from=rss) - [AI Agent Throws LAN Party](https://soylentnews.org/article.pl?sid=26/02/24/0734201&amp;from=rss)
* [2026-02-25, 16:37:00](https://soylentnews.org/article.pl?sid=26/02/24/0444250&amp;from=rss) - [Astronomers Identify a Galaxy Made Almost Entirely of Dark Matter](https://soylentnews.org/article.pl?sid=26/02/24/0444250&amp;from=rss)
* [2026-02-25, 12:30:36](https://news.ycombinator.com/item?id=47150674) - [I rendered 1,418 confusables over 230 fonts. Most aren&apos;t confusable to the eye](https://paultendo.github.io/posts/confusable-vision-visual-similarity/)
* [2026-02-25, 11:55:00](https://soylentnews.org/article.pl?sid=26/02/24/0437208&amp;from=rss) - [China Remains Embedded in US Energy Networks &apos;for the Purpose of Taking It Down&apos;](https://soylentnews.org/article.pl?sid=26/02/24/0437208&amp;from=rss)
* [2026-02-25, 10:36:43](https://news.ycombinator.com/item?id=47149829) - [Implementing a clear room Z80 / ZX Spectrum emulator with Claude Code](https://antirez.com/news/160)
* [2026-02-25, 07:13:00](https://soylentnews.org/article.pl?sid=26/02/24/0427256&amp;from=rss) - [California Bill Would Restrict 3D Printers to State-Approved Models to Prevent Making  Gun Parts](https://soylentnews.org/article.pl?sid=26/02/24/0427256&amp;from=rss)
* [2026-02-25, 02:26:00](https://soylentnews.org/article.pl?sid=26/02/24/0420243&amp;from=rss) - [AI Apps on the Google Play Store Are Leaking Customer Data and Photos](https://soylentnews.org/article.pl?sid=26/02/24/0420243&amp;from=rss)
* [2026-02-25, 02:20:13](https://news.ycombinator.com/item?id=47146487) - [Can you reverse engineer our neural network?](https://blog.janestreet.com/can-you-reverse-engineer-our-neural-network/)
* [2026-02-24, 21:41:00](https://soylentnews.org/politics/article.pl?sid=26/02/23/103249&amp;from=rss) - [OS-Level Age Verification in Proposed Legislation in Colorado](https://soylentnews.org/politics/article.pl?sid=26/02/23/103249&amp;from=rss)
* [2026-02-24, 20:11:04](https://news.ycombinator.com/item?id=47142225) - [The quixotic team trying to build a world in a 20-year-old game](https://arstechnica.com/gaming/2026/02/inside-the-quixotic-team-trying-to-build-an-entire-world-in-a-20-year-old-game/)
* [2026-02-24, 17:31:05](https://news.ycombinator.com/item?id=47139911) - [An interactive intro to quadtrees](https://growingswe.com/blog/quadtrees)
* [2026-02-24, 16:56:00](https://soylentnews.org/article.pl?sid=26/02/23/0959244&amp;from=rss) - [Is This Glass Square the Long, Long Future of Data Storage ?](https://soylentnews.org/article.pl?sid=26/02/23/0959244&amp;from=rss)
* [2026-02-24, 15:56:32](https://news.ycombinator.com/item?id=47138698) - [80386 Protection](https://nand2mario.github.io/posts/2026/80386_protection/)
* [2026-02-24, 12:09:00](https://soylentnews.org/article.pl?sid=26/02/23/010246&amp;from=rss) - [Two Days of Oatmeal Reduce Cholesterol Level](https://soylentnews.org/article.pl?sid=26/02/23/010246&amp;from=rss)
* [2026-02-24, 07:21:00](https://soylentnews.org/article.pl?sid=26/02/23/0058242&amp;from=rss) - [Video Games are Losing the \&quot;Attention War\&quot; to Gambling, Porn, and Crypto](https://soylentnews.org/article.pl?sid=26/02/23/0058242&amp;from=rss)
* [2026-02-24, 02:37:00](https://soylentnews.org/article.pl?sid=26/02/23/0050217&amp;from=rss) - [Why Are Tatooine Planets Rare? Blame General Relativity](https://soylentnews.org/article.pl?sid=26/02/23/0050217&amp;from=rss)
* [2026-02-24, 02:06:50](https://news.ycombinator.com/item?id=47131980) - [Reading English from 1000 Ad](https://lewiscampbell.tech/blog/260224.html)
* [2026-02-23, 21:53:00](https://soylentnews.org/article.pl?sid=26/02/22/1313253&amp;from=rss) - [How Digitally Sovereign is Your Organization? This Red Hat Tool Can Tell You in Minutes](https://soylentnews.org/article.pl?sid=26/02/22/1313253&amp;from=rss)
* [2026-02-23, 17:07:00](https://soylentnews.org/article.pl?sid=26/02/22/1311241&amp;from=rss) - [Goodbye Paper Vehicle Titles – Illinois State is Making Digital Mandatory](https://soylentnews.org/article.pl?sid=26/02/22/1311241&amp;from=rss)
* [2026-02-23, 16:58:58](https://news.ycombinator.com/item?id=47124999) - [Museum of Plugs and Sockets](https://plugsocketmuseum.nl/index.html)
* [2026-02-23, 16:23:01](https://news.ycombinator.com/item?id=47124454) - [An Introduction to the Codex Seraphinianus, the Strangest Book Ever Published](https://www.openculture.com/2026/02/an-introduction-to-the-codex-seraphinianus.html)
* [2026-02-23, 14:56:58](https://news.ycombinator.com/item?id=47123109) - [The Origins of Agar](https://www.asimov.press/p/agar)
* [2026-02-23, 12:22:00](https://soylentnews.org/article.pl?sid=26/02/22/139236&amp;from=rss) - [Concrete “Battery” Developed at MIT Now Packs 10 Times the Power](https://soylentnews.org/article.pl?sid=26/02/22/139236&amp;from=rss)
* [2026-02-23, 07:41:00](https://soylentnews.org/article.pl?sid=26/02/22/1259218&amp;from=rss) - [Privacy Is Not a Price You Pay for Growth](https://soylentnews.org/article.pl?sid=26/02/22/1259218&amp;from=rss)
* [2026-02-23, 02:55:00](https://soylentnews.org/article.pl?sid=26/02/22/1256215&amp;from=rss) - [Pink Noise Reduces REM Sleep and May Harm Sleep Quality](https://soylentnews.org/article.pl?sid=26/02/22/1256215&amp;from=rss)
