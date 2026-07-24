# [News Summary](https://kherrick.github.io/news-summary/)

## Technological Advances and Innovations

* [Anthropic's New Opus 5 Model Rivals Fable 5 For Half the Price](https://slashdot.org/story/26/07/24/1853236/anthropics-new-opus-5-model-rivals-fable-5-for-half-the-price?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Anthropic introduces its Opus 5 AI model, competing with Fable 5 at half the price, highlighting advancements in artificial general intelligence.

* [Flux 3 X Mimic: The Next Generation of Video-Action Models](https://bfl.ai/blog/flux-3-mimic) - A sneak peek into Flux 3 X Mimic, a groundbreaking video-action model setting the tone for next-gen AI capabilities.

* [DuckPGQ – A DuckDB community extension for graph workloads](https://duckpgq.org/) - Explore DuckPGQ, a new DuckDB extension designed to manage graph data workloads more effectively.

* [Unitree As2-W](https://www.unitree.com/As2-W/) - Discover the Unitree As2-W robotic platform showcasing cutting-edge robotics functionalities.

* [Stripe Eyes $10 Billion Deal For AI Model Marketplace OpenRouter](https://slashdot.org/story/26/07/24/0719241/stripe-eyes-10-billion-deal-for-ai-model-marketplace-openrouter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Reports suggest that Stripe is evaluating a major $10B acquisition to tap into OpenRouter's AI model marketplace.

## Scientific Discoveries and Insights

* [Astronomers May Have Discovered First Moon Outside Our Solar System](https://science.slashdot.org/story/26/07/24/0712238/astronomers-may-have-discovered-first-moon-outside-our-solar-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Astronomers reveal groundbreaking discovery of a potential exomoon outside our Solar System.

* [Humans Can Learn To Echolocate In Just 10 Weeks, and It Rewires the Brain](https://science.slashdot.org/story/26/07/24/021238/humans-can-learn-to-echolocate-in-just-10-weeks-and-it-rewires-the-brain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Learn how humans can develop echolocation skills within weeks, fundamentally changing brain structures.

## Cybersecurity and Internet Challenges

* [BGP ORIGIN attribute manipulation and its impact on the Internet](https://blog.cloudflare.com/bgp-origin-attribute/) - Cloudflare discusses the vulnerabilities arising from BGP ORIGIN attribute manipulations and their effect on cybersecurity.

* [My security camera shipped a GitHub admin token in its login page](https://hhh.hn/hanwha-github-token/) - A user's shocking discovery reveals a privacy breach with embedded admin tokens in security camera software.

* [Be skeptical of OpenAI's rogue hacker agent story](https://www.theguardian.com/technology/2026/jul/24/openai-rogue-hacker) - A critical assessment of OpenAI's claims regarding rogue hacker agents.

## Unique and Curious Developments

* [I Could've Rickrolled the Entire FIFA World Cup and All I Needed Was My ID](https://soylentnews.org/article.pl?sid=26/07/23/0249220&amp;from=rss) - Explore the incident involving a clever attempt to manipulate a massive FIFA event with just an ID.

* [Making GIFs from 35mm film photography](https://blog.willgrant.org/2026/07/23/the-hardest-way-to-make-gif.html) - A unique endeavor showcasing the process of creating GIFs from traditional 35mm film.

* [The small, real, original web](https://spacetimetech.wordpress.com/2026/07/19/the-small-real-original-web/) - A nostalgic dive into the origins of the web and reflection on its simpler beginnings.

## Notable Passings and Cultural Reflections

* [John C. Dvorak, an Early and Influential Technology Journalist, Dies At 80](https://news.slashdot.org/story/26/07/24/1650239/john-c-dvorak-an-early-and-influential-technology-journalist-dies-at-80?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Remembering John C. Dvorak, a pioneer in the technology journalism field.

* [The rise and fall of language diversity through the Holocene](https://www.science.org/doi/10.1126/science.adx4343) - A deep study examining the shifts in language diversity over millennia.

## Developer Tools and Resources

* [git rebase -i is not that scary](https://cachebag.sh/journal/interactive-rebasing/) - A developer's guide demystifying interactive rebasing in Git.

* [Extended Connectivity Fingerprint in APL](https://butwhyisthat.substack.com/p/ecfp) - A detailed exploration of APL's capabilities in handling extended connectivity fingerprints.

* [WebAIM 2026 report on Accessibility errors across the top 1M web pages](https://webaim.org/projects/million/#errors) - A study addressing accessibility challenges and errors in major websites.

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

* [2026-07-24, 19:00:00](https://slashdot.org/story/26/07/24/1853236/anthropics-new-opus-5-model-rivals-fable-5-for-half-the-price?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic&apos;s New Opus 5 Model Rivals Fable 5 For Half the Price](https://slashdot.org/story/26/07/24/1853236/anthropics-new-opus-5-model-rivals-fable-5-for-half-the-price?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-24, 18:40:04](https://lobste.rs/s/9ytnkn/extended_connectivity_fingerprint_apl) - [Extended Connectivity Fingerprint in APL](https://butwhyisthat.substack.com/p/ecfp)
* [2026-07-24, 18:07:08](https://news.ycombinator.com/item?id=49039490) - [BGP ORIGIN attribute manipulation and its impact on the Internet](https://blog.cloudflare.com/bgp-origin-attribute/)
* [2026-07-24, 18:03:22](https://news.ycombinator.com/item?id=49039448) - [I got into YC by hacking it](https://obaid.wtf/jotbook/2026/07/18/how-i-got-into-yc-by-hacking-it.html)
* [2026-07-24, 17:59:08](https://news.ycombinator.com/item?id=49039395) - [Gsxui – Shadcn-style components for Go](https://ui.gsxhq.dev/)
* [2026-07-24, 17:41:20](https://lobste.rs/s/uawqly/git_rebase_i_is_not_scary) - [git rebase -i is not that scary](https://cachebag.sh/journal/interactive-rebasing/)
* [2026-07-24, 17:28:59](https://news.ycombinator.com/item?id=49038977) - [The small, real, original web](https://spacetimetech.wordpress.com/2026/07/19/the-small-real-original-web/)
* [2026-07-24, 17:10:38](https://lobste.rs/s/jw5a02/ffi_call_plan_caching_for_glib) - [ffi_call_plan caching for GLib](https://blogs.gnome.org/chergert/2026/07/24/ffi_call_plan-caching-for-glib/)
* [2026-07-24, 17:00:23](https://news.ycombinator.com/item?id=49038481) - [DuckPGQ – A DuckDB community extension for graph workloads](https://duckpgq.org/)
* [2026-07-24, 17:00:00](https://news.slashdot.org/story/26/07/24/1650239/john-c-dvorak-an-early-and-influential-technology-journalist-dies-at-80?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ John C. Dvorak, an Early and Influential Technology Journalist, Dies At 80](https://news.slashdot.org/story/26/07/24/1650239/john-c-dvorak-an-early-and-influential-technology-journalist-dies-at-80?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-24, 16:57:41](https://news.ycombinator.com/item?id=49038433) - [Claude Opus 5](https://www.anthropic.com/news/claude-opus-5)
* [2026-07-24, 16:52:33](https://news.ycombinator.com/item?id=49038352) - [JEP 541: Deprecate the macOS/x64 Port for Removal](https://openjdk.org/jeps/541)
* [2026-07-24, 16:48:57](https://news.ycombinator.com/item?id=49038298) - [Don&apos;t Take the Black Pill [video]](https://www.youtube.com/watch?v=zLZwpH5lCD4)
* [2026-07-24, 16:47:23](https://news.ycombinator.com/item?id=49038276) - [Online Historical Encyclopaedia of Programming Languages](https://hopl.info/)
* [2026-07-24, 16:43:03](https://lobste.rs/s/g71xle/alp_adaptive_lossless_floating_point) - [ALP: Adaptive Lossless Floating-Point Compression](https://github.com/cwida/ALP)
* [2026-07-24, 16:40:49](https://news.ycombinator.com/item?id=49038181) - [The rise and fall of language diversity through the Holocene](https://www.science.org/doi/10.1126/science.adx4343)
* [2026-07-24, 16:33:31](https://news.ycombinator.com/item?id=49038060) - [Be skeptical of OpenAI&apos;s rogue hacker agent story](https://www.theguardian.com/technology/2026/jul/24/openai-rogue-hacker)
* [2026-07-24, 16:33:26](https://news.ycombinator.com/item?id=49038059) - [Proving a Human Wrote Something](https://gjtorikian.online/posts/proving-a-human-wrote-something/)
* [2026-07-24, 16:32:52](https://news.ycombinator.com/item?id=49038045) - [Unitree As2-W](https://www.unitree.com/As2-W/)
* [2026-07-24, 16:00:00](https://slashdot.org/story/26/07/24/0719241/stripe-eyes-10-billion-deal-for-ai-model-marketplace-openrouter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Stripe Eyes $10 Billion Deal For AI Model Marketplace OpenRouter](https://slashdot.org/story/26/07/24/0719241/stripe-eyes-10-billion-deal-for-ai-model-marketplace-openrouter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-24, 15:55:00](https://soylentnews.org/article.pl?sid=26/07/23/225237&amp;from=rss) - [Scientists Believed This Near-Earth Object Was an Asteroid for 28 Years. They Were Wrong](https://soylentnews.org/article.pl?sid=26/07/23/225237&amp;from=rss)
* [2026-07-24, 15:24:00](https://news.ycombinator.com/item?id=49037031) - [The front end framework for correctness: built on Effect, architected like Elm](https://foldkit.dev/)
* [2026-07-24, 15:05:06](https://news.ycombinator.com/item?id=49036765) - [Codeberg Divides](https://lucumr.pocoo.org/2026/7/24/codeberg-divides/)
* [2026-07-24, 15:00:00](https://science.slashdot.org/story/26/07/24/0712238/astronomers-may-have-discovered-first-moon-outside-our-solar-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Astronomers May Have Discovered First Moon Outside Our Solar System](https://science.slashdot.org/story/26/07/24/0712238/astronomers-may-have-discovered-first-moon-outside-our-solar-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-24, 14:41:59](https://news.ycombinator.com/item?id=49036433) - [Government orders GitHub to remove Bluetooth-based chat app Bitchat: Jack Dorsey](https://www.thehindu.com/news/national/government-orders-github-to-remove-bluetooth-based-chat-app-bitchat-over-security-concerns-jack-dorsey/article71262049.ece)
* [2026-07-24, 14:38:42](https://lobste.rs/s/rbfmuh/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/rbfmuh/what_are_you_doing_this_weekend)
* [2026-07-24, 14:24:29](https://lobste.rs/s/td8rne/don_t_take_black_pill) - [Don&apos;t take the black pill](https://www.youtube.com/watch?v=zLZwpH5lCD4)
* [2026-07-24, 14:01:24](https://lobste.rs/s/gqgbrz/open_weights_american_ai_leadership) - [Open Weights and American AI Leadership](https://www.microsoft.com/en-us/corporate-responsibility/topics/open-weight/)
* [2026-07-24, 13:54:04](https://lobste.rs/s/xnwxcz/interview_with_maintainer) - [Interview with a Maintainer](https://nesbitt.io/2026/07/24/interview-with-a-maintainer.html)
* [2026-07-24, 13:32:30](https://news.ycombinator.com/item?id=49035303) - [Nvidia, Microsoft, Meta warn against overregulating open-weight models](https://www.cnbc.com/2026/07/24/nvidia-microsoft-meta-open-weight-ai-models.html)
* [2026-07-24, 13:26:36](https://lobste.rs/s/wsqti1/make_origami_circuit_board) - [Make an Origami Circuit Board](https://spectrum.ieee.org/origami-circuit-boards)
* [2026-07-24, 12:53:59](https://news.ycombinator.com/item?id=49034868) - [Half-Life 2 running natively on HaikuOS](https://discuss.haiku-os.org/t/haiku-nvidia-porting-nvidia-driver-for-turing-gpus/16520?page=18)
* [2026-07-24, 12:40:27](https://news.ycombinator.com/item?id=49034747) - [Em dashes are amazing](https://psychotechnology.substack.com/p/em-dashes-are-fucking-amazing)
* [2026-07-24, 11:54:41](https://news.ycombinator.com/item?id=49034292) - [My security camera shipped a GitHub admin token in its login page](https://hhh.hn/hanwha-github-token/)
* [2026-07-24, 11:08:00](https://soylentnews.org/article.pl?sid=26/07/23/221216&amp;from=rss) - [I Wanted a Clock That Never Needed Setting. Things Escalated.](https://soylentnews.org/article.pl?sid=26/07/23/221216&amp;from=rss)
* [2026-07-24, 11:00:00](https://science.slashdot.org/story/26/07/24/021238/humans-can-learn-to-echolocate-in-just-10-weeks-and-it-rewires-the-brain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Humans Can Learn To Echolocate In Just 10 Weeks, and It Rewires the Brain](https://science.slashdot.org/story/26/07/24/021238/humans-can-learn-to-echolocate-in-just-10-weeks-and-it-rewires-the-brain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-24, 09:56:24](https://lobste.rs/s/troy2w/case_for_muds_modern_times) - [The case for MUDs in modern times](https://www.andrewzigler.com/feed/the-case-for-muds-in-modern-times)
* [2026-07-24, 09:31:48](https://news.ycombinator.com/item?id=49033127) - [Flux 3 X Mimic: The Next Generation of Video-Action Models](https://bfl.ai/blog/flux-3-mimic)
* [2026-07-24, 08:18:30](https://news.ycombinator.com/item?id=49032660) - [It&apos;s getting harder to focus every day](https://glyphack.com/attention/)
* [2026-07-24, 07:05:58](https://news.ycombinator.com/item?id=49032126) - [The hardest way to make a GIF](https://blog.willgrant.org/2026/07/23/the-hardest-way-to-make-gif.html)
* [2026-07-24, 07:00:00](https://hardware.slashdot.org/story/26/07/24/0152240/worlds-first-wave-power-generator-receives-certification-for-regular-use?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [World&apos;s First Wave Power Generator Receives Certification For Regular Use](https://hardware.slashdot.org/story/26/07/24/0152240/worlds-first-wave-power-generator-receives-certification-for-regular-use?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-24, 06:37:28](https://lobste.rs/s/zobigz/query_cycles_compiler_murder_mystery) - [Query cycles: A compiler murder mystery](https://ferrous-systems.com/blog/query-cycles-a-compiler-murder-mystery/)
* [2026-07-24, 06:26:00](https://soylentnews.org/article.pl?sid=26/07/23/0249220&amp;from=rss) - [I Could&apos;ve Rickrolled the Entire FIFA World Cup and All I Needed Was My ID](https://soylentnews.org/article.pl?sid=26/07/23/0249220&amp;from=rss)
* [2026-07-24, 06:17:08](https://news.ycombinator.com/item?id=49031796) - [Flux 3](https://bfl.ai/blog/flux-3)
* [2026-07-24, 05:41:17](https://lobste.rs/s/oiiu0u/webaim_2026_report_on_accessibility) - [WebAIM 2026 report on Accessibility errors across the top 1M web pages](https://webaim.org/projects/million/#errors)
* [2026-07-24, 05:29:28](https://lobste.rs/s/ewh4v6/making_gifs_from_35mm_film_photography) - [Making GIFs from 35mm film photography](https://blog.willgrant.org/2026/07/23/the-hardest-way-to-make-gif.html)
* [2026-07-24, 05:08:56](https://lobste.rs/s/wj5bs5/fast_synthesis_basic_oscillators) - [Fast Synthesis of Basic Oscillators](https://artemis.sh/2026/07/23/fast-synthesis-basic-oscillators.html)
* [2026-07-24, 05:05:03](https://lobste.rs/s/h9gdj8/freebsd_ports_frozen_after_someone) - [FreeBSD ports frozen after someone commits the entire 150MB Linux Copilot binary](https://www.osnews.com/story/145593/freebsd-ports-frozen-after-someone-commits-the-entire-150mb-linux-copilot-binary/)
* [2026-07-24, 03:30:00](https://yro.slashdot.org/story/26/07/24/0144247/google-adds-selfie-video-as-a-log-in-option?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Adds Selfie Video As a Log-In Option](https://yro.slashdot.org/story/26/07/24/0144247/google-adds-selfie-video-as-a-log-in-option?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-24, 01:43:00](https://soylentnews.org/article.pl?sid=26/07/23/0234212&amp;from=rss) - [Former OpenAI CTO Does What Altman Won&apos;t: Releases a Frontier AI Model That&apos;s Actually Open](https://soylentnews.org/article.pl?sid=26/07/23/0234212&amp;from=rss)
* [2026-07-23, 23:00:00](https://developers.slashdot.org/story/26/07/23/2142251/oracle-signs-10-year-software-contract-with-pentagon-worth-up-to-7-billion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Oracle Signs 10-Year Software Contract With Pentagon Worth Up To $7 Billion](https://developers.slashdot.org/story/26/07/23/2142251/oracle-signs-10-year-software-contract-with-pentagon-worth-up-to-7-billion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-23, 22:00:00](https://tech.slashdot.org/story/26/07/23/2137202/microsoft-responds-to-lg-monitors-installing-mcafee-ads-on-windows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Responds to LG Monitors Installing McAfee Ads On Windows](https://tech.slashdot.org/story/26/07/23/2137202/microsoft-responds-to-lg-monitors-installing-mcafee-ads-on-windows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-23, 21:20:10](https://lobste.rs/s/badu44/fil_c_garbage_memory_safety_out) - [Fil-C: Garbage In, Memory Safety Out](https://www.youtube.com/watch?v=5F-2Y1LPRek)
* [2026-07-23, 21:10:09](https://lobste.rs/s/x3x2aw/you_should_selfhost_your_mail_2026) - [You should selfhost your mail (in 2026)](https://blog.haschek.at/2026/you-should-selfhost-your-mail.html)
* [2026-07-23, 21:00:00](https://search.slashdot.org/story/26/07/23/2034235/eu-fines-google-1-billion-for-breaking-digital-antitrust-regulations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EU Fines Google $1 Billion For Breaking Digital Antitrust Regulations](https://search.slashdot.org/story/26/07/23/2034235/eu-fines-google-1-billion-for-breaking-digital-antitrust-regulations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-23, 20:55:00](https://soylentnews.org/article.pl?sid=26/07/23/0228206&amp;from=rss) - [NASA&apos;s Artemis III Will Need Three Rockets to Do the Job Apollo Did With One](https://soylentnews.org/article.pl?sid=26/07/23/0228206&amp;from=rss)
* [2026-07-23, 20:54:31](https://lobste.rs/s/btplc7/jolt_running_clojure_on_chez_scheme) - [Jolt: running Clojure on Chez Scheme](https://yogthos.net/posts/2026-07-02-jolt.html)
* [2026-07-23, 20:00:00](https://games.slashdot.org/story/26/07/23/1830257/amazon-is-bringing-games-to-prime-video?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Is Bringing Games to Prime Video](https://games.slashdot.org/story/26/07/23/1830257/amazon-is-bringing-games-to-prime-video?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-23, 19:37:37](https://news.ycombinator.com/item?id=49026933) - [Fil-C: Garbage In, Memory Safety Out [video]](https://www.youtube.com/watch?v=5F-2Y1LPRek)
* [2026-07-23, 19:00:00](https://games.slashdot.org/story/26/07/23/1825217/sonys-decision-to-ditch-discs-was-practically-inevitable-data-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sony&apos;s Decision To Ditch Discs Was Practically Inevitable, Data Shows](https://games.slashdot.org/story/26/07/23/1825217/sonys-decision-to-ditch-discs-was-practically-inevitable-data-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-23, 18:50:40](https://lobste.rs/s/dto1e4/software_should_work_worked) - [Software Should Work Worked](https://isaacvando.com/software-should-work-worked)
* [2026-07-23, 18:00:00](https://tech.slashdot.org/story/26/07/23/1626218/in-a-first-apple-maps-navigation-to-be-embedded-in-ford-uev-pickups?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [In a First, Apple Maps Navigation To Be Embedded In Ford UEV Pickups](https://tech.slashdot.org/story/26/07/23/1626218/in-a-first-apple-maps-navigation-to-be-embedded-in-ford-uev-pickups?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-23, 17:00:00](https://science.slashdot.org/story/26/07/23/1616208/four-young-mathematicians-awarded-the-2026-fields-medals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Four Young Mathematicians Awarded the 2026 Fields Medals](https://science.slashdot.org/story/26/07/23/1616208/four-young-mathematicians-awarded-the-2026-fields-medals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-23, 16:58:59](https://lobste.rs/s/gtxmc4/pimpl_idiom_c_26_std_indirect_type) - [The PImpl idiom and the C++26 std::indirect type](https://mariusbancila.ro/blog/2026/07/23/the-pimpl-idiom-and-the-cpp26-stdindirect-type/)
* [2026-07-23, 16:08:00](https://soylentnews.org/article.pl?sid=26/07/23/029223&amp;from=rss) - [Could China and Russia Really Destroy Starlink?](https://soylentnews.org/article.pl?sid=26/07/23/029223&amp;from=rss)
* [2026-07-23, 16:00:00](https://slashdot.org/story/26/07/23/0623233/startup-founders-urge-trump-not-to-shut-off-chinese-open-weight-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Startup Founders Urge Trump Not to Shut Off Chinese Open Weight AI](https://slashdot.org/story/26/07/23/0623233/startup-founders-urge-trump-not-to-shut-off-chinese-open-weight-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-23, 15:33:26](https://lobste.rs/s/gpqa52/everyone_should_know_simd) - [Everyone Should Know SIMD](https://mitchellh.com/writing/everyone-should-know-simd)
* [2026-07-23, 13:01:28](https://lobste.rs/s/mwelmm/on_accountability) - [On Accountability](https://addisoncrump.info/research/on-accountability/)
* [2026-07-23, 12:49:10](https://news.ycombinator.com/item?id=49020751) - [Self-host your mail server](https://blog.haschek.at/2026/you-should-selfhost-your-mail.html)
* [2026-07-23, 11:20:00](https://soylentnews.org/article.pl?sid=26/07/23/023217&amp;from=rss) - [Sweet! Sugar Found in Raspberries Was Discovered Near the Milky Way&apos;s Center](https://soylentnews.org/article.pl?sid=26/07/23/023217&amp;from=rss)
* [2026-07-23, 09:30:45](https://lobste.rs/s/p1jpv1/justif_knuth_plass_justification) - [Justif: Knuth-Plass justification and microtypography for the web](https://justif.lyall.co/)
* [2026-07-23, 06:38:00](https://soylentnews.org/article.pl?sid=26/07/22/0039239&amp;from=rss) - [Zilog Z80 Turns 50 as an Open-Source Replacement Heads to Drop-in DIP40 Silicon](https://soylentnews.org/article.pl?sid=26/07/22/0039239&amp;from=rss)
* [2026-07-23, 02:26:09](https://lobste.rs/s/fmyrgy/calm_technologies_excite_me) - [Calm technologies that excite me](https://abhi.now/blog/calm-technologies/)
* [2026-07-23, 01:56:00](https://soylentnews.org/article.pl?sid=26/07/21/2227215&amp;from=rss) - [Open Source Misses the Point and Cannot Save Us](https://soylentnews.org/article.pl?sid=26/07/21/2227215&amp;from=rss)
* [2026-07-23, 01:04:08](https://lobste.rs/s/ax914v/protecting_our_floss_commons_from_llms) - [Protecting our FLOSS commons from LLMs](https://blog.codeberg.org/protecting-our-floss-commons-from-llms.html)
* [2026-07-22, 21:14:00](https://soylentnews.org/article.pl?sid=26/07/21/2225209&amp;from=rss) - [Five Tech Giants are Hiding $1.65tn in AI Debt, Using the Trick that Toppled Enron](https://soylentnews.org/article.pl?sid=26/07/21/2225209&amp;from=rss)
* [2026-07-22, 16:23:00](https://soylentnews.org/article.pl?sid=26/07/21/2223243&amp;from=rss) - [German Startup Qurie Bags Funding for Molecular Heat Pump](https://soylentnews.org/article.pl?sid=26/07/21/2223243&amp;from=rss)
* [2026-07-22, 13:41:00](https://soylentnews.org/article.pl?sid=26/07/21/2222218&amp;from=rss) - [My Hunt for the Original McDonald’s French-Fry Recipe](https://soylentnews.org/article.pl?sid=26/07/21/2222218&amp;from=rss)
* [2026-07-22, 11:36:00](https://soylentnews.org/article.pl?sid=26/07/22/0025243&amp;from=rss) - [The 2024 New York City Meteorite Contains Amino Acids](https://soylentnews.org/article.pl?sid=26/07/22/0025243&amp;from=rss)
* [2026-07-22, 10:35:43](https://news.ycombinator.com/item?id=49004541) - [Making Xen&apos;s dom0 I/O path NUMA aware](https://edera.dev/stories/numa-part-4-closing-the-xen-dom0-i-o-gap)
* [2026-07-22, 06:57:00](https://soylentnews.org/article.pl?sid=26/07/21/069235&amp;from=rss) - [How a Gang of Thieves Pulled Off a Multimillion-Dollar Data Center Heist](https://soylentnews.org/article.pl?sid=26/07/21/069235&amp;from=rss)
* [2026-07-22, 02:12:00](https://soylentnews.org/article.pl?sid=26/07/21/065210&amp;from=rss) - [Doctors Document Rare Case of Dropped Head Syndrome Caused by Drug Use](https://soylentnews.org/article.pl?sid=26/07/21/065210&amp;from=rss)
* [2026-07-21, 21:26:32](https://news.ycombinator.com/item?id=48998589) - [Extending Polars with Rust Expression Plugins](https://fenic.ai/blog/extending-polars-with-rust-expression-plugins)
* [2026-07-21, 21:24:00](https://soylentnews.org/article.pl?sid=26/07/21/0559241&amp;from=rss) - [The Shocking Secrets of Madison Square Garden’s Surveillance Machine](https://soylentnews.org/article.pl?sid=26/07/21/0559241&amp;from=rss)
* [2026-07-21, 16:41:00](https://soylentnews.org/article.pl?sid=26/07/21/0553204&amp;from=rss) - [Airbus Migrating 70 Critical Apps From AWS To France&apos;s Scaleway Amid Digital Sovereignty Push](https://soylentnews.org/article.pl?sid=26/07/21/0553204&amp;from=rss)
* [2026-07-21, 11:45:00](https://soylentnews.org/article.pl?sid=26/07/21/0550247&amp;from=rss) - [Deep-Sea Life Has a Secret Food Source Scientists Never Expected](https://soylentnews.org/article.pl?sid=26/07/21/0550247&amp;from=rss)
* [2026-07-21, 07:59:00](https://soylentnews.org/article.pl?sid=26/07/20/0431234&amp;from=rss) - [Eating Chili Peppers May Raise the Risk of One Deadly Cancer](https://soylentnews.org/article.pl?sid=26/07/20/0431234&amp;from=rss)
* [2026-07-21, 03:15:00](https://soylentnews.org/article.pl?sid=26/07/20/0413210&amp;from=rss) - [US Sanctions First VPN In Crackdown On Ransomware Criminals](https://soylentnews.org/article.pl?sid=26/07/20/0413210&amp;from=rss)
* [2026-07-20, 22:27:00](https://soylentnews.org/article.pl?sid=26/07/20/040231&amp;from=rss) - [A Moment Of Silence, Please, For The Final Release Of Debian On X86-32](https://soylentnews.org/article.pl?sid=26/07/20/040231&amp;from=rss)
* [2026-07-20, 17:43:00](https://soylentnews.org/article.pl?sid=26/07/20/0344230&amp;from=rss) - [Clever Hacker Fits 537,000 Domains in a Tiny $5 ESP32 Ad-Blocking Dongle](https://soylentnews.org/article.pl?sid=26/07/20/0344230&amp;from=rss)
* [2026-07-20, 12:55:00](https://soylentnews.org/article.pl?sid=26/07/20/0338215&amp;from=rss) - [Great Ape Laughter Reveals a Hidden Origin of Human Speech](https://soylentnews.org/article.pl?sid=26/07/20/0338215&amp;from=rss)
* [2026-07-20, 10:53:59](https://news.ycombinator.com/item?id=48977014) - [Reporting Web 3D Capabilities on a Budget of $3 a Month](https://ben3d.ca/blog/reporting-web-3d-capabilities-on-a-budget)
* [2026-07-20, 08:12:00](https://soylentnews.org/article.pl?sid=26/07/20/0325216&amp;from=rss) - [Fake Go DNS Scanner Spread Malware Through Over 200 GitHub Repos](https://soylentnews.org/article.pl?sid=26/07/20/0325216&amp;from=rss)
* [2026-07-20, 03:24:00](https://soylentnews.org/article.pl?sid=26/07/20/0318228&amp;from=rss) - [The Galaxy&apos;s Coldest “Stars” Might Actually be Alien Megastructures](https://soylentnews.org/article.pl?sid=26/07/20/0318228&amp;from=rss)
* [2026-07-20, 02:43:54](https://news.ycombinator.com/item?id=48973835) - [India&apos;s first privately-developed rocket reaches orbit on dramatic debut launch](https://arstechnica.com/space/2026/07/indias-first-privately-developed-rocket-reaches-orbit-on-dramatic-debut-launch/)
