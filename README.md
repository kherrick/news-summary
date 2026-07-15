# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Technology Advancements

* [I Left Google DeepMind](https://turntrout.com/why-i-left-google-deepmind) ([comments](https://news.ycombinator.com/item?id=48925271)): A former employee explains their decision to leave Google DeepMind, giving rare insights into high-profile AI work environments.

* [Murati's Thinking Machines Releases Open-Weights 975B Parameter LLM](https://thinkingmachines.ai/inkling/) ([comments](https://news.ycombinator.com/item?id=48924929)): A significant development in AI as a new open-weights, 975-billion-parameter language learning model is introduced.

* [Killing Coding Agent Slop With Adversarial Self-Play](https://usetelos.ai/blog/killing-coding-agent-slop) ([comments](https://lobste.rs/s/k5ibd3/killing_coding_agent_slop_with)): Exploration of how adversarial self-play is being applied to refine AI coding agents.

* [OpenAI Launches a Keypad for AI Agents](https://hardware.slashdot.org/story/26/07/15/1659217/openai-launches-a-keypad-for-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=48923833)): OpenAI unveils an innovative hardware interface designed to interact with AI systems.

## Software and Open Source

* [FreeBSD 16 Retires the Last of Its GPL Code](https://bsd.slashdot.org/story/26/07/15/1727252/freebsd-16-retires-the-last-of-its-gpl-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://lobste.rs/s/n1cwdh/freebsd_16_retires_last_its_gpl_code_from)): FreeBSD achieves a milestone by completely eliminating GPL code from its base system.

* [Open-source memory for coding agents, synced over SSH](https://github.com/vshulcz/deja-vu/) ([comments](https://news.ycombinator.com/item?id=48923111)): Introduction to a new open-source tool for synchronizing memory across environments for coding agents.

* [Show HN: misa77 - a codec that decodes 2x faster than LZ4 (at better ratios)](https://github.com/welcome-to-the-sunny-side/misa77) ([comments](https://news.ycombinator.com/item?id=48922838)): A new codec offering improved speed and compression over LZ4.

## Research and Scientific Breakthroughs

* [Sleep regularity is a stronger predictor of mortality risk than sleep duration (2023)](https://academic.oup.com/sleep/article/47/1/zsad253/7280269) ([comments](https://news.ycombinator.com/item?id=48919363)): An insightful study discusses the impact of sleep regularity on mortality risk, claiming it outweighs the importance of sleep duration.

* [Astronauts Take First X-Rays In Space](https://science.slashdot.org/story/26/07/15/0354223/astronauts-take-first-x-rays-in-space?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=48924112)): An extraordinary milestone in space medicine as astronauts capture the first x-rays outside Earth's atmosphere.

## Privacy and Security Concerns

* [Microsoft Confirms Windows GDID Device Identifier That Cannot Be Disabled, Documented in FBI Case Filing](https://www.ghacks.net/2026/07/12/microsoft-confirms-windows-gdid-device-identifier-that-cannot-be-disabled-documented-in-fbi-case-filing/) ([comments](https://lobste.rs/s/agkcmz/microsoft_confirms_windows_gdid_device)): A controversial report reveals that Microsoft's GDID Device Identifier cannot be disabled, raising privacy concerns.

* [AI Coding Agents Can be Tricked Into Installing Malware Via 'Clean' GitHub Repositories](https://soylentnews.org/article.pl?sid=26/07/14/0543205&amp;from=rss) ([comments](https://news.ycombinator.com/item?id=48919198)): Discussion of vulnerabilities in AI coding agents, exposing how they can be exploited via seemingly innocuous repositories.

## Unique and Thought-Provoking Articles

* [The Memory Heist](https://ayush.digital/blog/the-memory-heist) ([comments](https://lobste.rs/s/lelroo/memory_heist)): A fascinating analysis of memory in the digital age and the implications of its manipulation.

* [When A.I. Is a Member of the Family](https://www.newyorker.com/magazine/2026/07/20/when-ai-is-a-member-of-the-family) ([comments](https://news.ycombinator.com/item?id=48922487)): An exploration of AI's integration into family life, blurring the lines between machines and human relationships.

* [Inventing ELIZA - How the First Chatbot Shaped the Future of AI](https://mitpress.mit.edu/9780262052481/inventing-eliza/) ([comments](https://lobste.rs/s/hquwey/inventing_eliza_how_first_chatbot_shaped)): A historical deep dive into the development of the first chatbot, ELIZA, and its enduring influence on AI.

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

* [2026-07-15, 18:40:34](https://news.ycombinator.com/item?id=48925271) - [I Left Google DeepMind](https://turntrout.com/why-i-left-google-deepmind)
* [2026-07-15, 18:14:23](https://news.ycombinator.com/item?id=48924929) - [Murati&apos;s Thinking Machines Releases Open-Weights 975B Parameter LLM](https://thinkingmachines.ai/inkling/)
* [2026-07-15, 18:12:45](https://news.ycombinator.com/item?id=48924912) - [Inkling: Our Open-Weights Model](https://thinkingmachines.ai/news/introducing-inkling/)
* [2026-07-15, 18:04:19](https://lobste.rs/s/k5ibd3/killing_coding_agent_slop_with) - [Killing Coding Agent Slop With Adversarial Self-Play](https://usetelos.ai/blog/killing-coding-agent-slop)
* [2026-07-15, 18:00:00](https://bsd.slashdot.org/story/26/07/15/1727252/freebsd-16-retires-the-last-of-its-gpl-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FreeBSD 16 Retires the Last of Its GPL Code](https://bsd.slashdot.org/story/26/07/15/1727252/freebsd-16-retires-the-last-of-its-gpl-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-15, 17:01:02](https://news.ycombinator.com/item?id=48923833) - [Artie (YC S23) Is Hiring Software Engineers](https://jobs.ashbyhq.com/artie)
* [2026-07-15, 17:00:00](https://hardware.slashdot.org/story/26/07/15/1659217/openai-launches-a-keypad-for-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Launches a Keypad for AI Agents](https://hardware.slashdot.org/story/26/07/15/1659217/openai-launches-a-keypad-for-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-15, 16:49:43](https://lobste.rs/s/6vsam1/your_ai_is_not_tool) - [Your AI Is Not a Tool](https://theconvivialsociety.substack.com/p/your-ai-is-not-a-tool)
* [2026-07-15, 16:35:09](https://news.ycombinator.com/item?id=48923412) - [A General Goal-Conditioned Minecraft Model](https://pantograph.com/journal/pan-1)
* [2026-07-15, 16:33:15](https://news.ycombinator.com/item?id=48923380) - [Collection of Digital Clock Designs](https://clocks.dev)
* [2026-07-15, 16:22:14](https://news.ycombinator.com/item?id=48923209) - [What designing 54 computer science cards taught me about graphic design](https://fhoehl.com/designing-algodeck)
* [2026-07-15, 16:15:03](https://news.ycombinator.com/item?id=48923111) - [Open-source memory for coding agents, synced over SSH](https://github.com/vshulcz/deja-vu/)
* [2026-07-15, 16:15:01](https://news.ycombinator.com/item?id=48923109) - [Unsolved Problems in MLOps](https://spawn-queue.acm.org/doi/pdf/10.1145/3762989)
* [2026-07-15, 16:12:58](https://news.ycombinator.com/item?id=48923079) - [Codex Micro](https://openai.com/supply/co-lab/work-louder/)
* [2026-07-15, 16:04:00](https://soylentnews.org/article.pl?sid=26/07/14/0547216&amp;from=rss) - [AI Servers Will Consume More Power Than All Conventional Data Centers Combined By 2027](https://soylentnews.org/article.pl?sid=26/07/14/0547216&amp;from=rss)
* [2026-07-15, 16:00:00](https://news.slashdot.org/story/26/07/15/047200/stripe-advent-offer-to-buy-paypal-for-more-than-53-billion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Stripe, Advent Offer to Buy PayPal For More Than $53 Billion](https://news.slashdot.org/story/26/07/15/047200/stripe-advent-offer-to-buy-paypal-for-more-than-53-billion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-15, 15:58:59](https://news.ycombinator.com/item?id=48922838) - [Show HN: misa77 - a codec that decodes 2x faster than LZ4 (at better ratios)](https://github.com/welcome-to-the-sunny-side/misa77)
* [2026-07-15, 15:51:20](https://news.ycombinator.com/item?id=48922706) - [Launch HN: Coasty (YC S26) – An API for computer-use agents](https://coasty.ai/docs)
* [2026-07-15, 15:37:47](https://news.ycombinator.com/item?id=48922487) - [When A.I. Is a Member of the Family](https://www.newyorker.com/magazine/2026/07/20/when-ai-is-a-member-of-the-family)
* [2026-07-15, 15:36:16](https://lobste.rs/s/agkcmz/microsoft_confirms_windows_gdid_device) - [Microsoft Confirms Windows GDID Device Identifier That Cannot Be Disabled, Documented in FBI Case Filing](https://www.ghacks.net/2026/07/12/microsoft-confirms-windows-gdid-device-identifier-that-cannot-be-disabled-documented-in-fbi-case-filing/)
* [2026-07-15, 15:34:05](https://news.ycombinator.com/item?id=48922434) - [Running Gemma 4 26B at 5 tokens/sec on a 13-year-old Xeon with no GPU](https://www.neomindlabs.com/2026/06/08/running-gemma-4-26b-at-5-tokens-sec-on-a-13-year-old-xeon-with-no-gpu/)
* [2026-07-15, 15:00:00](https://tech.slashdot.org/story/26/07/15/042220/microsoft-patches-a-record-570-security-flaws?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Patches a Record 570 Security Flaws](https://tech.slashdot.org/story/26/07/15/042220/microsoft-patches-a-record-570-security-flaws?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-15, 14:32:36](https://news.ycombinator.com/item?id=48921461) - [OpenAI loses trademark dispute at EU court](https://dpa-international.com/economics/urn:newsml:dpa.com:20090101:260715-930-389143/)
* [2026-07-15, 14:23:44](https://news.ycombinator.com/item?id=48921303) - [My midlife crisis Corolla is fast, furious, and modded](https://www.zocalopublicsquare.org/my-midlife-crisis-corolla-fast-furious-fully-modded/)
* [2026-07-15, 14:12:05](https://lobste.rs/s/hquwey/inventing_eliza_how_first_chatbot_shaped) - [Inventing ELIZA - How the First Chatbot Shaped the Future of AI](https://mitpress.mit.edu/9780262052481/inventing-eliza/)
* [2026-07-15, 14:11:12](https://news.ycombinator.com/item?id=48921121) - [The well-calibrated Bayesian [pdf] (1982)](https://fitelson.org/seminar/dawid.pdf)
* [2026-07-15, 14:08:28](https://news.ycombinator.com/item?id=48921077) - [Towards a Harness That Can Do Anything](https://eardatasci.github.io/c/ambiance/index.html)
* [2026-07-15, 13:22:00](https://news.ycombinator.com/item?id=48920475) - [Mysteries of Telegram Data Centers](https://dev.moe/en/3025)
* [2026-07-15, 13:18:15](https://news.ycombinator.com/item?id=48920432) - [The Three-Second Theft: Why AI Voice Fraud Outruns Every Defence](https://smarterarticles.co.uk/the-three-second-theft-why-ai-voice-fraud-outruns-every-defence)
* [2026-07-15, 12:57:21](https://lobste.rs/s/h1r6gc/comparing_obelisk_with_temporal_restate) - [Comparing Obelisk with Temporal and Restate](https://obeli.sk/blog/comparing-obelisk-temporal-restate/)
* [2026-07-15, 12:33:58](https://lobste.rs/s/n1cwdh/freebsd_16_retires_last_its_gpl_code_from) - [FreeBSD 16 Retires The Last Of Its GPL Code From Its Base System](https://www.phoronix.com/news/FreeBSD-16-Goes-GPL-Free)
* [2026-07-15, 12:33:27](https://news.ycombinator.com/item?id=48919869) - [Briar is in maintenance mode](https://briarproject.org/news/2026-maintenance-mode/)
* [2026-07-15, 12:28:27](https://lobste.rs/s/qrtxzl/bunch_stuff_i_used_not_know_about_k_r_c) - [a bunch of stuff i used to not know about K&amp;R C](https://sebsite.pw/w/20260712-kandr.html)
* [2026-07-15, 12:23:36](https://lobste.rs/s/tnlxmc/i_ve_been_thinking_about_null_pointers) - [i&apos;ve been thinking about null pointers](https://sebsite.pw/w/20260715-null.html)
* [2026-07-15, 12:21:33](https://lobste.rs/s/latr8d/tower_keeps_rising) - [The Tower Keeps Rising](https://lucumr.pocoo.org/2026/7/13/the-tower-keeps-rising/)
* [2026-07-15, 11:46:06](https://news.ycombinator.com/item?id=48919363) - [Sleep regularity is a stronger predictor of mortality risk than sleep duration (2023)](https://academic.oup.com/sleep/article/47/1/zsad253/7280269)
* [2026-07-15, 11:27:35](https://news.ycombinator.com/item?id=48919198) - [Prioritize mental health, and why communication is so important](https://ramones.dev/posts/mental-health/)
* [2026-07-15, 11:19:00](https://soylentnews.org/article.pl?sid=26/07/14/0543205&amp;from=rss) - [AI Coding Agents Can be Tricked Into Installing Malware Via &apos;Clean&apos; GitHub Repositories](https://soylentnews.org/article.pl?sid=26/07/14/0543205&amp;from=rss)
* [2026-07-15, 11:02:43](https://news.ycombinator.com/item?id=48919013) - [Weathergotchi – an open-source climate Tamagotchi](https://github.com/Michael-Manning/E-Paper-Climate-Logger)
* [2026-07-15, 11:00:00](https://science.slashdot.org/story/26/07/15/0354223/astronauts-take-first-x-rays-in-space?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Astronauts Take First X-Rays In Space](https://science.slashdot.org/story/26/07/15/0354223/astronauts-take-first-x-rays-in-space?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-15, 10:06:39](https://news.ycombinator.com/item?id=48918534) - [Telegram Serverless](https://core.telegram.org/bots/serverless)
* [2026-07-15, 09:58:14](https://lobste.rs/s/6vevse/over_edge_2_0_microsoft_s_design_tactics) - [Over the Edge 2.0: Microsoft’s Design Tactics Still Undermine Browser Choice](https://research.mozilla.org/browser-competition/over-the-edge-2/)
* [2026-07-15, 09:52:06](https://lobste.rs/s/8rjl7o/order_data_defaults_performance) - [The Order of Data: defaults, performance, determinism &amp; paging](https://binaryigor.com/the-order-of-data.html)
* [2026-07-15, 08:00:02](https://lobste.rs/s/fxtvgm/clickhouse_rowbinary_when_your_library) - [@clickhouse/rowbinary: when your library is also a parser compiler](https://clickhouse.com/blog/clickhouse-rowbinary-library-parser-compiler)
* [2026-07-15, 07:00:00](https://yro.slashdot.org/story/26/07/15/0346241/house-votes-for-permanent-daylight-saving-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [House Votes For Permanent Daylight Saving Time](https://yro.slashdot.org/story/26/07/15/0346241/house-votes-for-permanent-daylight-saving-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-15, 06:29:00](https://soylentnews.org/article.pl?sid=26/07/14/0540206&amp;from=rss) - [MPs Tell NHS to Start Packing Palantir&apos;s Bags Ahead of 2027 Contract Break](https://soylentnews.org/article.pl?sid=26/07/14/0540206&amp;from=rss)
* [2026-07-15, 06:03:23](https://lobste.rs/s/knrrsr/how_c_20_improved_for_loop_syntax) - [How C++20 improved the for-loop syntax](https://lzon.ca/posts/tips/cpp-for-range-init/)
* [2026-07-15, 05:04:57](https://lobste.rs/s/upgpyq/c_strings_50_year_mistake) - [C Strings: A 50-Year Mistake](https://longtran2904.substack.com/p/c-strings-a-50-year-mistake)
* [2026-07-15, 04:30:14](https://lobste.rs/s/s4qbwh/empathy_delight_mean_nothing_when) - [Empathy and delight mean nothing when the software is disrespectful](https://productpicnic.beehiiv.com/p/empathy-and-delight-mean-nothing-when-the-software-is-disrespectful)
* [2026-07-15, 03:32:45](https://news.ycombinator.com/item?id=48915953) - [Stripe, Advent offer to buy PayPal for more than $53B](https://www.reuters.com/business/finance/stripe-advent-offer-buy-paypal-more-than-53-billion-sources-say-2026-07-15/)
* [2026-07-15, 03:30:00](https://tech.slashdot.org/story/26/07/14/2121249/iran-abused-mobile-networks-vulnerabilities-to-locate-us-military-in-middle-east?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Iran Abused Mobile Networks&apos; Vulnerabilities To Locate US Military In Middle East](https://tech.slashdot.org/story/26/07/14/2121249/iran-abused-mobile-networks-vulnerabilities-to-locate-us-military-in-middle-east?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-15, 02:13:19](https://lobste.rs/s/hkgxnm/low_resource_computing_2026) - [Low Resource Computing 2026](https://lrc.cs.dartmouth.edu/)
* [2026-07-15, 02:02:02](https://lobste.rs/s/vlr279/full_disclosure_arbitrary_code) - [Full disclosure: Arbitrary code execution in Cursor](https://mindgard.ai/blog/cursor-0day-when-full-disclosure-becomes-the-only-protection-left)
* [2026-07-15, 01:42:00](https://soylentnews.org/article.pl?sid=26/07/14/0538220&amp;from=rss) - [Microsoft Admits Windows 11 Has a GDID Tracker With No Off Switch](https://soylentnews.org/article.pl?sid=26/07/14/0538220&amp;from=rss)
* [2026-07-15, 00:11:45](https://lobste.rs/s/lelroo/memory_heist) - [The Memory Heist](https://ayush.digital/blog/the-memory-heist)
* [2026-07-14, 23:00:00](https://hardware.slashdot.org/story/26/07/14/2116245/openais-first-device-will-be-moveable-screenless-speaker-built-as-ai-companion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI&apos;s First Device Will Be Moveable, Screenless Speaker Built as AI Companion](https://hardware.slashdot.org/story/26/07/14/2116245/openais-first-device-will-be-moveable-screenless-speaker-built-as-ai-companion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-14, 22:02:25](https://lobste.rs/s/slrak5/you_should_probably_check_on_your_smart) - [You should probably check on your smart appliances](https://xeiaso.net/notes/2026/check-your-smart-tv/)
* [2026-07-14, 22:00:00](https://tech.slashdot.org/story/26/07/14/215259/google-images-gets-a-pinterest-like-redesign-focused-on-discovery?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Images Gets a Pinterest-Like Redesign Focused On Discovery](https://tech.slashdot.org/story/26/07/14/215259/google-images-gets-a-pinterest-like-redesign-focused-on-discovery?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-14, 21:47:07](https://lobste.rs/s/h7pett/qr_swastika_avoider_v0_1_0) - [qr-swastika-avoider v0.1.0](https://crates.io/crates/qr-swastika-avoider)
* [2026-07-14, 21:02:00](https://soylentnews.org/article.pl?sid=26/07/12/2153233&amp;from=rss) - [This UK Satellite&apos;s Thermal Camera Raises Major Privacy Concerns](https://soylentnews.org/article.pl?sid=26/07/12/2153233&amp;from=rss)
* [2026-07-14, 21:00:00](https://yro.slashdot.org/story/26/07/14/2054236/lawsuit-claims-metas-layoff-decisions-were-made-by-ai-not-humans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Lawsuit Claims Meta&apos;s Layoff Decisions Were Made By AI, Not Humans](https://yro.slashdot.org/story/26/07/14/2054236/lawsuit-claims-metas-layoff-decisions-were-made-by-ai-not-humans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-14, 20:00:00](https://yro.slashdot.org/story/26/07/14/1934241/google-deepmind-calls-for-us-to-spearhead-ai-standards-body?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google DeepMind Calls For US To Spearhead AI Standards Body](https://yro.slashdot.org/story/26/07/14/1934241/google-deepmind-calls-for-us-to-spearhead-ai-standards-body?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-14, 19:40:54](https://news.ycombinator.com/item?id=48912013) - [The Memory Heist](https://www.ayush.digital/blog/the-memory-heist)
* [2026-07-14, 19:00:00](https://linux.slashdot.org/story/26/07/14/1853255/linux-foundations-latest-foray-is-to-standardize-internet-native-payments-for-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linux Foundation&apos;s Latest Foray Is To Standardize Internet-Native Payments For AI Agents](https://linux.slashdot.org/story/26/07/14/1853255/linux-foundations-latest-foray-is-to-standardize-internet-native-payments-for-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-14, 18:34:27](https://lobste.rs/s/rg1wee/how_i_use_htmx_with_go) - [How I use HTMX with Go](https://www.alexedwards.net/blog/how-i-use-htmx-with-go)
* [2026-07-14, 18:07:13](https://lobste.rs/s/pw5yuk/measuring_input_latency_on_linux_x11_vs) - [Measuring input latency on Linux: X11 vs Wayland, VRR, and DXVK](https://marco-nett.de/blog/measuring-input-latency-on-linux-x11-vs-wayland-vrr-dxvk/)
* [2026-07-14, 18:00:00](https://mobile.slashdot.org/story/26/07/14/1641233/oneplus-is-reportedly-shutting-down-in-the-us-europe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OnePlus Is Reportedly Shutting Down In the US, Europe](https://mobile.slashdot.org/story/26/07/14/1641233/oneplus-is-reportedly-shutting-down-in-the-us-europe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-14, 17:00:52](https://lobste.rs/s/tzzarv/whatcable_macos_menu_bar_app_tells_you) - [whatcable: macOS menu bar app that tells you, in plain English, what each USB-C cable plugged into your Mac can actually do](https://github.com/darrylmorley/whatcable)
* [2026-07-14, 17:00:00](https://hardware.slashdot.org/story/26/07/14/1634227/ibm-stock-collapses-after-a-grave-warning-about-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [IBM Stock Collapses After a Grave Warning About AI](https://hardware.slashdot.org/story/26/07/14/1634227/ibm-stock-collapses-after-a-grave-warning-about-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-14, 16:35:18](https://lobste.rs/s/86lwsv/too_many_words_about_dids) - [Too many words about DIDs](https://steveklabnik.com/writing/too-many-words-about-dids/)
* [2026-07-14, 16:06:00](https://soylentnews.org/article.pl?sid=26/07/12/2149242&amp;from=rss) - [US Weighs Removing Steering Wheel Requirement For Driverless Cars](https://soylentnews.org/article.pl?sid=26/07/12/2149242&amp;from=rss)
* [2026-07-14, 16:00:00](https://news.slashdot.org/story/26/07/14/1520222/new-york-becomes-first-state-to-impose-data-center-moratorium?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New York Becomes First State To Impose Data Center Moratorium](https://news.slashdot.org/story/26/07/14/1520222/new-york-becomes-first-state-to-impose-data-center-moratorium?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-14, 13:52:21](https://news.ycombinator.com/item?id=48906893) - [The Conservationist Who Turned 40 Terabytes of Public Data into a Video Game](https://blog.exe.dev/meet-the-conservationist-who-turned-40-terabytes-of-government-data-into-a-video-game)
* [2026-07-14, 11:22:00](https://soylentnews.org/article.pl?sid=26/07/12/2143209&amp;from=rss) - [Scientist Models Way To Make Sure No One&apos;s Violating The Ban On Nuclear Weapons In Space](https://soylentnews.org/article.pl?sid=26/07/12/2143209&amp;from=rss)
* [2026-07-14, 09:24:36](https://lobste.rs/s/xv8dix/jurassic_park_computers_excruciating) - [Jurassic Park computers in excruciating detail](https://fabiensanglard.net/jurrasic_park_computers/index.html)
* [2026-07-14, 06:45:00](https://soylentnews.org/article.pl?sid=26/07/12/2137226&amp;from=rss) - [Utility Companies Want To Take Control Of Your Home&apos;s Smart Thermostat](https://soylentnews.org/article.pl?sid=26/07/12/2137226&amp;from=rss)
* [2026-07-14, 02:00:00](https://soylentnews.org/article.pl?sid=26/07/12/2132224&amp;from=rss) - [New Horizons Pluto Probe Just Woke Itself Up After 321 Days Of Hibernation](https://soylentnews.org/article.pl?sid=26/07/12/2132224&amp;from=rss)
* [2026-07-13, 21:22:00](https://soylentnews.org/article.pl?sid=26/07/12/1514220&amp;from=rss) - [OpenAI Job Listing Suggests ChatGPT Could Someday Replace Junior Analysts at Goldman Sachs](https://soylentnews.org/article.pl?sid=26/07/12/1514220&amp;from=rss)
* [2026-07-13, 16:40:00](https://soylentnews.org/article.pl?sid=26/07/12/1511228&amp;from=rss) - [China Recovered its First Reusable Rocket and Showed a New Way to Do It](https://soylentnews.org/article.pl?sid=26/07/12/1511228&amp;from=rss)
* [2026-07-13, 13:49:33](https://news.ycombinator.com/item?id=48892647) - [Editing React components that never rendered](https://blog.crossui.com/2026/07/editing-react-components-that-never-rendered)
* [2026-07-13, 11:53:00](https://soylentnews.org/article.pl?sid=26/07/12/2127219&amp;from=rss) - [Why Navies Around The World Keep Submarine Propeller Designs So Secretive](https://soylentnews.org/article.pl?sid=26/07/12/2127219&amp;from=rss)
* [2026-07-13, 07:07:00](https://soylentnews.org/article.pl?sid=26/07/12/150251&amp;from=rss) - [Electric Drone Breaks World Air Speed Record at 434 Mph, Designed for Anti-Aircraft Interceptor Role](https://soylentnews.org/article.pl?sid=26/07/12/150251&amp;from=rss)
* [2026-07-13, 02:27:00](https://soylentnews.org/article.pl?sid=26/07/11/1848242&amp;from=rss) - [Higher Blood Glucose Levels Linked to Faster Brain Aging](https://soylentnews.org/article.pl?sid=26/07/11/1848242&amp;from=rss)
* [2026-07-12, 21:45:00](https://soylentnews.org/article.pl?sid=26/07/11/1846204&amp;from=rss) - [Volkswagen Sales Plunge as German Automaker Lays Out Plan to Slash Number of Brands](https://soylentnews.org/article.pl?sid=26/07/11/1846204&amp;from=rss)
* [2026-07-12, 19:00:49](https://news.ycombinator.com/item?id=48883578) - [Today I Rescued 7,234 Old GIFs](https://danq.me/2026/07/10/rescuing-7234-gifs/)
* [2026-07-12, 16:57:00](https://soylentnews.org/article.pl?sid=26/07/11/1844243&amp;from=rss) - [Quantum Mechanics Surprisingly Based on Real Numbers](https://soylentnews.org/article.pl?sid=26/07/11/1844243&amp;from=rss)
* [2026-07-12, 12:10:00](https://soylentnews.org/article.pl?sid=26/07/11/0144241&amp;from=rss) - [New Dental Robot Attaches to Patient&apos;s Teeth for Drilling](https://soylentnews.org/article.pl?sid=26/07/11/0144241&amp;from=rss)
* [2026-07-12, 07:21:00](https://soylentnews.org/article.pl?sid=26/07/11/0138228&amp;from=rss) - [Failed Aussie Blockchain Project Ends With Big Fine for Fibs About It Being on Track](https://soylentnews.org/article.pl?sid=26/07/11/0138228&amp;from=rss)
* [2026-07-12, 02:38:00](https://soylentnews.org/article.pl?sid=26/07/11/0130201&amp;from=rss) - [NHTSA Calls Out Autonomous Cars for Interfering With First Responders](https://soylentnews.org/article.pl?sid=26/07/11/0130201&amp;from=rss)
* [2026-07-11, 21:49:00](https://soylentnews.org/article.pl?sid=26/07/11/0123222&amp;from=rss) - [Woman&apos;s Puzzling Decline Turns Out to be Cobalt Poisoning From Hip Replacement](https://soylentnews.org/article.pl?sid=26/07/11/0123222&amp;from=rss)
* [2026-07-11, 17:07:00](https://soylentnews.org/article.pl?sid=26/07/10/0939213&amp;from=rss) - [Geopolitical Tensions Are Complicating Research Efforts in the Norwegian Archipelago of Svalbar](https://soylentnews.org/article.pl?sid=26/07/10/0939213&amp;from=rss)
* [2026-07-11, 12:23:00](https://soylentnews.org/article.pl?sid=26/07/10/0919216&amp;from=rss) - [Secure Unix Ancestor KSOS Did Type Safety Before Rust Made It Cool](https://soylentnews.org/article.pl?sid=26/07/10/0919216&amp;from=rss)
* [2026-07-11, 07:41:00](https://soylentnews.org/article.pl?sid=26/07/10/0916227&amp;from=rss) - [Scientists Discover the Deep Sleep Circuit That Builds Muscle, Burns Fat, and Boosts the Brain](https://soylentnews.org/article.pl?sid=26/07/10/0916227&amp;from=rss)
* [2026-07-11, 02:54:00](https://soylentnews.org/article.pl?sid=26/07/09/1625207&amp;from=rss) - [Suspecting AI Cheating, Ivy League Prof Ordered an in-Person Final; Scores Fell 50%](https://soylentnews.org/article.pl?sid=26/07/09/1625207&amp;from=rss)
