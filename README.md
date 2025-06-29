# [News Summary](https://kherrick.github.io/news-summary/)

## Scientific Discoveries and Innovations

* [Just How Much Space Data Will the Rubin Observatory Collect?](https://science.slashdot.org/story/25/06/29/0119223/just-how-much-space-data-will-the-rubin-observatory-collect?utm_source=rss1.0mainlinkanon&utm_medium=feed) - An exploration into the massive scale of data the Rubin Observatory is set to collect.

* [Carbon Record Reveals Evidence of Extensive Human Fire Use 50,000 Years Ago](https://science.slashdot.org/story/25/06/29/0142237/carbon-record-reveals-evidence-of-extensive-human-fire-use-50000-years-ago?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Research uncovers ancient human fire use through carbon records.

* [Mysterious Radio Burst Turns Out to Be From a Dead 1967 NASA Satellite](https://science.slashdot.org/story/25/06/29/0410213/mysterious-radio-burst-turns-out-to-be-from-a-dead-1967-nasa-satellite?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Scientists trace a puzzling radio burst back to a defunct NASA satellite.

* [First Images From World&apos;s Largest Digital Camera Reveal Galaxies and Cosmic Collisions](https://soylentnews.org/article.pl?sid=25/06/29/0435239&from=rss) - The world's largest digital camera unveils stunning celestial phenomena.

## Artificial Intelligence and Machine Consciousness

* [The Consciousness Gradient: When Machines Begin to Wonder](https://v1tali.com/ai-consciousness) - A deep dive into the possibilities of machines attaining consciousness.

* [Generative AI’s crippling and widespread failure to induce robust models of the world](https://garymarcus.substack.com/p/generative-ais-crippling-and-widespread) - A critique on generative AI's limitations in understanding the complexities of the world.

* [AI Improves At Improving Itself Using an Evolutionary Trick](https://slashdot.org/story/25/06/28/2314203/ai-improves-at-improving-itself-using-an-evolutionary-trick?utm_source=rss1.0mainlinkanon&utm_medium=feed) - How AI leverages evolutionary strategies to enhance its capabilities.

## Technology and Development

* [Python GIL Removal Reveals Second, Stronger GIL Behind It](https://medium.com/@sebastiancarlos/pythons-gil-removal-reveals-second-stronger-gil-behind-it-cdb5b9b4e2b3) - Python's endeavor to remove the GIL unveils new challenges in concurrent programming.

* [WebAssembly Troubles part 4: Microwasm (2019)](http://troubles.md/microwasm/) - Tutorials and challenges surrounding WebAssembly development.

* [Magnetic Tape Storage Technology: usage, history, and future outlook](https://dl.acm.org/doi/10.1145/3708997) - A comprehensive look at magnetic tape storage evolution and its future.

## Historical and Cultural Explorations

* [The Medley Interlisp Project: Reviving a Historical Software System [pdf]](https://interlisp.org/documentation/young-ccece2025.pdf) - Efforts to breathe new life into a legacy software system.

* [Scientists Retrace 30k-Year-Old Sea Voyage, in a Hollowed-Out Log](https://www.nytimes.com/2025/06/25/science/anthropology-ocean-migration-japan.html) - Researchers recreate an ancient sea journey in a log canoe.

* [Leak Stops on the International Space Station. But NASA Engineers Still Worry](https://science.slashdot.org/story/25/06/28/1440217/leak-stops-on-the-international-space-station-but-nasa-engineers-still-worry?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A look at recent challenges and solutions on the ISS.

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

* [2025-06-29, 15:50:00](https://lobste.rs/s/1q5lko/python_gil_removal_reveals_second) - [Python GIL Removal Reveals Second, Stronger GIL Behind It](https://medium.com/@sebastiancarlos/pythons-gil-removal-reveals-second-stronger-gil-behind-it-cdb5b9b4e2b3)
* [2025-06-29, 15:48:03](https://lobste.rs/s/sgita2/20_years_programming) - [20 years of programming](https://sidhion.com/blog/20_years/)
* [2025-06-29, 15:34:00](https://science.slashdot.org/story/25/06/29/0119223/just-how-much-space-data-will-the-rubin-observatory-collect?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Just How Much Space Data Will the Rubin Observatory Collect?](https://science.slashdot.org/story/25/06/29/0119223/just-how-much-space-data-will-the-rubin-observatory-collect?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-29, 15:09:01](https://news.ycombinator.com/item?id=44413750) - [The Consciousness Gradient: When Machines Begin to Wonder](https://v1tali.com/ai-consciousness)
* [2025-06-29, 14:45:10](https://news.ycombinator.com/item?id=44413574) - [The Medley Interlisp Project: Reviving a Historical Software System [pdf]](https://interlisp.org/documentation/young-ccece2025.pdf)
* [2025-06-29, 14:34:00](https://science.slashdot.org/story/25/06/29/0142237/carbon-record-reveals-evidence-of-extensive-human-fire-use-50000-years-ago?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Carbon Record Reveals Evidence of Extensive Human Fire Use 50,000 Years Ago](https://science.slashdot.org/story/25/06/29/0142237/carbon-record-reveals-evidence-of-extensive-human-fire-use-50000-years-ago?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-29, 14:22:16](https://lobste.rs/s/c9tweu/rss_as_my_default_web_browser_for_some) - [RSS as my default web browser (for some stuff)](https://neilzone.co.uk/2022/10/rss-as-my-default-web-browser-for-some-stuff/)
* [2025-06-29, 14:05:00](https://soylentnews.org/article.pl?sid=25/06/29/0435239&amp;from=rss) - [First Images From World&apos;s Largest Digital Camera Reveal Galaxies and Cosmic Collisions](https://soylentnews.org/article.pl?sid=25/06/29/0435239&amp;from=rss)
* [2025-06-29, 13:55:18](https://news.ycombinator.com/item?id=44413185) - [I made my VM think it has a CPU fan](https://wbenny.github.io/2025/06/29/i-made-my-vm-think-it-has-a-cpu-fan.html)
* [2025-06-29, 13:55:07](https://news.ycombinator.com/item?id=44413184) - [Show HN: SmartStepper – Multi-Step Form Library with Config-Based Flow](https://github.com/Miladxsar23/smartstepper)
* [2025-06-29, 13:52:57](https://lobste.rs/s/kn7na7/i_made_my_vm_think_it_has_cpu_fan) - [I made my VM think it has a CPU fan](https://wbenny.github.io/2025/06/29/i-made-my-vm-think-it-has-a-cpu-fan.html)
* [2025-06-29, 13:41:09](https://news.ycombinator.com/item?id=44413083) - [Performance Debugging with LLVM-mca: Simulating the CPU](https://johnnysswlab.com/performance-debugging-with-llvm-mca-simulating-the-cpu/)
* [2025-06-29, 13:08:58](https://lobste.rs/s/zmikbm/starlink_openwrt_eeros_oh_my) - [Starlink, OpenWrt, and Eeros… Oh My](https://btxx.org/posts/starlink-openwrt/)
* [2025-06-29, 13:03:35](https://lobste.rs/s/fphpfx/generative_ai_s_crippling_widespread) - [Generative AI’s crippling and widespread failure to induce robust models of the world](https://garymarcus.substack.com/p/generative-ais-crippling-and-widespread)
* [2025-06-29, 12:59:21](https://lobste.rs/s/2wxyci/using_podman_hooks_mount_persistent_zfs) - [Using Podman hooks to mount persistent ZFS datasets into ephemeral Containers](https://people.freebsd.org/~dch/posts/2025-06-27-oci-zfs/)
* [2025-06-29, 11:56:09](https://news.ycombinator.com/item?id=44412370) - [Bloom Filters by Example](https://llimllib.github.io/bloomfilter-tutorial/)
* [2025-06-29, 11:45:04](https://lobste.rs/s/oiabdv/bought_myself_ampere_altra_system) - [Bought myself an Ampere Altra system](https://marcin.juszkiewicz.com.pl/2025/06/27/bought-myself-an-ampere-altra-system/)
* [2025-06-29, 11:34:00](https://ask.slashdot.org/story/25/06/28/0521201/ask-slashdot-do-you-use-ai---and-is-it-actually-helpful?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ask Slashdot: Do You Use AI - and Is It Actually Helpful?](https://ask.slashdot.org/story/25/06/28/0521201/ask-slashdot-do-you-use-ai---and-is-it-actually-helpful?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-29, 11:24:17](https://news.ycombinator.com/item?id=44412207) - [Show HN: Octelium – FOSS Alternative to Teleport, Cloudflare, Tailscale, Ngrok](https://github.com/octelium/octelium)
* [2025-06-29, 10:59:26](https://news.ycombinator.com/item?id=44412080) - [Implementing fast TCP fingerprinting with eBPF](https://halb.it/posts/ebpf-fingerprinting-1/)
* [2025-06-29, 10:54:38](https://lobste.rs/s/kbxolz/brief_history_web_browsers) - [A brief history of web browsers](https://eclecticlight.co/2025/06/28/a-brief-history-of-web-browsers/)
* [2025-06-29, 09:19:00](https://soylentnews.org/article.pl?sid=25/06/29/0430235&amp;from=rss) - [Danish Copyright on Your Digital Representation](https://soylentnews.org/article.pl?sid=25/06/29/0430235&amp;from=rss)
* [2025-06-29, 09:01:34](https://lobste.rs/s/dfhenp/webassembly_troubles_part_4_microwasm) - [WebAssembly Troubles part 4: Microwasm (2019)](http://troubles.md/microwasm/)
* [2025-06-29, 08:23:49](https://lobste.rs/s/lqf7tn/using_internet_without_ipv4) - [Using the Internet without IPv4 connectivity](https://jamesmcm.github.io/blog/no-ipv4/)
* [2025-06-29, 08:23:40](https://news.ycombinator.com/item?id=44411273) - [Using the Internet without IPv4 connectivity](https://jamesmcm.github.io/blog/no-ipv4/)
* [2025-06-29, 07:45:56](https://news.ycombinator.com/item?id=44411069) - [More on Apple&apos;s Trust-Eroding &apos;F1 the Movie&apos; Wallet Ad](https://daringfireball.net/2025/06/more_on_apples_trust-eroding_f1_the_movie_wallet_ad)
* [2025-06-29, 07:34:00](https://science.slashdot.org/story/25/06/29/0410213/mysterious-radio-burst-turns-out-to-be-from-a-dead-1967-nasa-satellite?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mysterious Radio Burst Turns Out to Be From a Dead 1967 NASA Satellite](https://science.slashdot.org/story/25/06/29/0410213/mysterious-radio-burst-turns-out-to-be-from-a-dead-1967-nasa-satellite?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-29, 07:07:03](https://news.ycombinator.com/item?id=44410900) - [The Unsustainability of Moore&apos;s Law](https://bzolang.blog/p/the-unsustainability-of-moores-law)
* [2025-06-29, 06:47:01](https://news.ycombinator.com/item?id=44410822) - [Magnetic Tape Storage Technology: usage, history, and future outlook](https://dl.acm.org/doi/10.1145/3708997)
* [2025-06-29, 04:46:00](https://soylentnews.org/meta/article.pl?sid=25/06/29/0446225&amp;from=rss) - [Reason for the Site Outage - the Cable Had Been Cut Again!](https://soylentnews.org/meta/article.pl?sid=25/06/29/0446225&amp;from=rss)
* [2025-06-29, 04:35:00](https://soylentnews.org/article.pl?sid=25/06/29/0427207&amp;from=rss) - [Fedora Plans to Drop 32-Bit  i686 Packages](https://soylentnews.org/article.pl?sid=25/06/29/0427207&amp;from=rss)
* [2025-06-29, 03:34:00](https://linux.slashdot.org/story/25/06/29/0248236/new-linux-kernel-drama-torvalds-drops-bcachefs-support-after-clash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Linux Kernel Drama: Torvalds Drops Bcachefs Support After Clash](https://linux.slashdot.org/story/25/06/29/0248236/new-linux-kernel-drama-torvalds-drops-bcachefs-support-after-clash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-29, 01:34:00](https://slashdot.org/story/25/06/28/2314203/ai-improves-at-improving-itself-using-an-evolutionary-trick?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Improves At Improving Itself Using an Evolutionary Trick](https://slashdot.org/story/25/06/28/2314203/ai-improves-at-improving-itself-using-an-evolutionary-trick?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-29, 00:01:02](https://lobste.rs/s/kt2ekf/refurb_weekend_gremlin_blasto_arcade) - [Refurb weekend: Gremlin Blasto arcade board](http://oldvcr.blogspot.com/2025/06/refurb-weekend-gremlin-blasto-arcade.html)
* [2025-06-28, 23:36:02](https://lobste.rs/s/qd78bl/wayback_experimental_x11_compatibility) - [wayback: experimental X11 compatibility layer](https://github.com/kaniini/wayback)
* [2025-06-28, 23:04:25](https://lobste.rs/s/wfz7qh/solving_uk_passport_application_with) - [Solving `UK Passport Application` with Haskell](https://jameshaydon.github.io/passport/)
* [2025-06-28, 23:01:15](https://news.ycombinator.com/item?id=44408872) - [Solving `Passport Application` with Haskell](https://jameshaydon.github.io/passport/)
* [2025-06-28, 22:39:00](https://slashdot.org/story/25/06/28/1859227/people-are-being-committed-after-spiraling-into-chatgpt-psychosis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [People Are Being Committed After Spiraling Into &apos;ChatGPT Psychosis&apos;](https://slashdot.org/story/25/06/28/1859227/people-are-being-committed-after-spiraling-into-chatgpt-psychosis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-28, 22:10:28](https://lobste.rs/s/p0pozh/fil_c) - [Fil-C](https://github.com/pizlonator/llvm-project-deluge)
* [2025-06-28, 22:06:31](https://news.ycombinator.com/item?id=44408552) - [The Death of the Middle-Class Musician](https://thewalrus.ca/the-death-of-the-middle-class-musician/)
* [2025-06-28, 21:39:00](https://yro.slashdot.org/story/25/06/28/1941246/sinaloa-cartel-used-phone-data-and-surveillance-cameras-to-find-and-kill-fbi-informants-in-2018-doj-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sinaloa Cartel Used Phone Data and Surveillance Cameras To Find and Kill FBI Informants in 2018, DOJ Says](https://yro.slashdot.org/story/25/06/28/1941246/sinaloa-cartel-used-phone-data-and-surveillance-cameras-to-find-and-kill-fbi-informants-in-2018-doj-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-28, 21:22:14](https://news.ycombinator.com/item?id=44408286) - [Schizophrenia is the price we pay for minds poised near the edge of a cliff](https://www.psychiatrymargins.com/p/schizophrenia-is-the-price-we-pay)
* [2025-06-28, 20:39:00](https://it.slashdot.org/story/25/06/28/2036249/duolingo-stock-plummets-after-slowing-user-growth-possibly-caused-by-ai-first-backlash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Duolingo Stock Plummets After Slowing User Growth, Possibly Caused By &apos;AI-First&apos; Backlash](https://it.slashdot.org/story/25/06/28/2036249/duolingo-stock-plummets-after-slowing-user-growth-possibly-caused-by-ai-first-backlash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-28, 20:15:00](https://soylentnews.org/article.pl?sid=25/06/28/0137201&amp;from=rss) - [Win11 Black Screen of Death update](https://soylentnews.org/article.pl?sid=25/06/28/0137201&amp;from=rss)
* [2025-06-28, 19:34:00](https://science.slashdot.org/story/25/06/28/1440217/leak-stops-on-the-international-space-station-but-nasa-engineers-still-worry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Leak Stops on the International Space Station. But NASA Engineers Still Worry](https://science.slashdot.org/story/25/06/28/1440217/leak-stops-on-the-international-space-station-but-nasa-engineers-still-worry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-28, 19:04:04](https://news.ycombinator.com/item?id=44407245) - [2025 ARRL Field Day](https://www.arrl.org/field-day)
* [2025-06-28, 18:52:00](https://news.ycombinator.com/item?id=44407139) - [JavaScript Trademark Update](https://deno.com/blog/deno-v-oracle4)
* [2025-06-28, 18:42:05](https://news.ycombinator.com/item?id=44407058) - [Life of an inference request (vLLM V1): How LLMs are served efficiently at scale](https://www.ubicloud.com/blog/life-of-an-inference-request-vllm-v1)
* [2025-06-28, 18:34:00](https://it.slashdot.org/story/25/06/28/1740215/call-center-workers-are-tired-of-being-mistaken-for-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Call Center Workers Are Tired of Being Mistaken for AI](https://it.slashdot.org/story/25/06/28/1740215/call-center-workers-are-tired-of-being-mistaken-for-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-28, 17:50:58](https://lobste.rs/s/yvkyke/memory_safe_languages_reducing) - [Memory Safe Languages: Reducing Vulnerabilities in Modern Software Development](https://media.defense.gov/2025/Jun/23/2003742198/-1/-1/0/CSI_MEMORY_SAFE_LANGUAGES_REDUCING_VULNERABILITIES_IN_MODERN_SOFTWARE_DEVELOPMENT.PDF)
* [2025-06-28, 17:39:22](https://lobste.rs/s/ptsrso/emacsconf_2025_call_for_participation) - [EmacsConf 2025 Call for Participation](https://emacsconf.org/2025/cfp/)
* [2025-06-28, 17:34:00](https://tech.slashdot.org/story/25/06/28/0427240/researchers-accuse-uber-of-using-opaque-algorithm-to-dramatically-boost-its-profits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Researchers Accuse Uber of Using Opaque Algorithm To Dramatically Boost Its Profits](https://tech.slashdot.org/story/25/06/28/0427240/researchers-accuse-uber-of-using-opaque-algorithm-to-dramatically-boost-its-profits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-28, 16:55:01](https://news.ycombinator.com/item?id=44406178) - [An Indoor Beehive in My Bedroom Wall](https://www.keepingbackyardbees.com/an-indoor-beehive-zbwz1810zsau/)
* [2025-06-28, 16:53:56](https://news.ycombinator.com/item?id=44406171) - [BusyBeaver(6) Is Quite Large](https://scottaaronson.blog/?p=8972)
* [2025-06-28, 16:50:19](https://news.ycombinator.com/item?id=44406140) - [Is being bilingual good for your brain?](https://www.economist.com/science-and-technology/2025/06/27/is-being-bilingual-good-for-your-brain)
* [2025-06-28, 16:34:00](https://linux.slashdot.org/story/25/06/28/054245/x11-fork-xlibre-released-for-testing-on-systemd-free-artix-linux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [X11 Fork XLibre Released For Testing On Systemd-Free Artix Linux](https://linux.slashdot.org/story/25/06/28/054245/x11-fork-xlibre-released-for-testing-on-systemd-free-artix-linux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-28, 15:34:00](https://tech.slashdot.org/story/25/06/28/047250/how-a-crewless-ai-enhanced-vessel-will-patrol-denmarks-and-natos-waters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How a Crewless, AI-Enhanced Vessel Will Patrol Denmark&apos;s and NATO&apos;s Waters](https://tech.slashdot.org/story/25/06/28/047250/how-a-crewless-ai-enhanced-vessel-will-patrol-denmarks-and-natos-waters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-28, 15:30:00](https://soylentnews.org/article.pl?sid=25/06/27/021255&amp;from=rss) - [Sparcs Cubesats To Test Electrodynamic Tethers ](https://soylentnews.org/article.pl?sid=25/06/27/021255&amp;from=rss)
* [2025-06-28, 15:19:54](https://lobste.rs/s/66rxz9/ai_manager_future_management) - [AI Manager - The Future of Management](https://aimanagers.app)
* [2025-06-28, 14:45:43](https://news.ycombinator.com/item?id=44405057) - [Engineered Addictions](https://masonyarbrough.substack.com/p/engineered-addictions)
* [2025-06-28, 14:34:00](https://tech.slashdot.org/story/25/06/28/0342219/mercedes-amg-to-drop-four-cylinder-for-inline-sixes-and-v-8s?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mercedes-AMG to Drop Four-Cylinder for Inline-Sixes and V-8s](https://tech.slashdot.org/story/25/06/28/0342219/mercedes-amg-to-drop-four-cylinder-for-inline-sixes-and-v-8s?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-28, 14:22:10](https://news.ycombinator.com/item?id=44404905) - [MCP: An (Accidentally) Universal Plugin System](https://worksonmymachine.substack.com/p/mcp-an-accidentally-universal-plugin)
* [2025-06-28, 14:09:24](https://lobste.rs/s/6zbrhj/i_really_like_helix_editor) - [I really like the Helix editor](https://herecomesthemoon.net/2025/06/i-like-helix/)
* [2025-06-28, 13:57:13](https://lobste.rs/s/l6nfum/computer_coding_books_from_usborne_1982) - [Computer and coding books from Usborne (1982-1985)](https://usborne.com/us/books/computer-and-coding-books)
* [2025-06-28, 12:20:08](https://news.ycombinator.com/item?id=44404164) - [We ran a Unix-like OS on our home-built CPU with a home-built C compiler (2020)](https://fuel.edby.coffee/posts/how-we-ported-xv6-os-to-a-home-built-cpu-with-a-home-built-c-compiler/)
* [2025-06-28, 11:52:40](https://lobste.rs/s/xontfe/medley_interlisp_project_reviving) - [The Medley Interlisp Project: Reviving a Historical Software System](https://interlisp.org/documentation/young-ccece2025.pdf)
* [2025-06-28, 11:45:00](https://soylentnews.org/article.pl?sid=25/06/26/1527200&amp;from=rss) - [Canonical to Remove GPU Exploit Mitigation to Gain 20% Performance Boost](https://soylentnews.org/article.pl?sid=25/06/26/1527200&amp;from=rss)
* [2025-06-28, 07:58:01](https://lobste.rs/s/7d4on3/newbie_s_first_contribution_rust_for) - [A Newbie&apos;s First Contribution to (Rust for) Linux](https://blog.buenzli.dev/rust-for-linux-first-contrib/)
* [2025-06-28, 07:03:00](https://soylentnews.org/article.pl?sid=25/06/26/158255&amp;from=rss) - [Edit is Back](https://soylentnews.org/article.pl?sid=25/06/26/158255&amp;from=rss)
* [2025-06-28, 06:38:39](https://lobste.rs/s/39mnhf/bcachefs_may_be_headed_out_kernel) - [Bcachefs may be headed out of the kernel](https://lwn.net/Articles/1027289/)
* [2025-06-28, 02:17:00](https://soylentnews.org/article.pl?sid=25/06/26/153208&amp;from=rss) - [Trump Administration Moves to Count Crypto as a Federal Mortgage Asset](https://soylentnews.org/article.pl?sid=25/06/26/153208&amp;from=rss)
* [2025-06-27, 23:53:35](https://lobste.rs/s/zyhphz/cross_compiling_common_lisp_for_windows) - [Cross-compiling Common Lisp for Windows](https://www.fosskers.ca/en/blog/cl-windows)
* [2025-06-27, 23:50:01](https://lobste.rs/s/14xytr/go_is_80_20_language) - [Go is an 80/20 language](https://blog.kowalczyk.info/article/d-2025-06-26/go-is-8020-language.html)
* [2025-06-27, 21:33:00](https://soylentnews.org/article.pl?sid=25/06/26/0234223&amp;from=rss) - [A Solid-State Battery Breakthrough May be Taking Shape in Maryland](https://soylentnews.org/article.pl?sid=25/06/26/0234223&amp;from=rss)
* [2025-06-27, 16:47:00](https://soylentnews.org/article.pl?sid=25/06/26/0227253&amp;from=rss) - [Greek Man Sentenced to Prison for Running a Private Torrent Site 10 Years Ago](https://soylentnews.org/article.pl?sid=25/06/26/0227253&amp;from=rss)
* [2025-06-27, 12:04:00](https://soylentnews.org/article.pl?sid=25/06/26/0225203&amp;from=rss) - [An Updated PNG Spec](https://soylentnews.org/article.pl?sid=25/06/26/0225203&amp;from=rss)
* [2025-06-27, 07:14:00](https://soylentnews.org/article.pl?sid=25/06/26/0223205&amp;from=rss) - [Modified Bacteria Convert Plastic Waste Into Pain Reliever](https://soylentnews.org/article.pl?sid=25/06/26/0223205&amp;from=rss)
* [2025-06-27, 02:29:00](https://soylentnews.org/article.pl?sid=25/06/26/0210246&amp;from=rss) - [Why Geoengineering is No Longer a Complete Taboo for Scientists](https://soylentnews.org/article.pl?sid=25/06/26/0210246&amp;from=rss)
* [2025-06-26, 21:43:00](https://soylentnews.org/article.pl?sid=25/06/25/1717228&amp;from=rss) - [Apple&apos;s A19 May Be Powerful, But Leans Towards Saving Power](https://soylentnews.org/article.pl?sid=25/06/25/1717228&amp;from=rss)
* [2025-06-26, 16:53:00](https://soylentnews.org/article.pl?sid=25/06/25/1715224&amp;from=rss) - [Rubin Telescope To Collect Up To 500,000 Tb Of Data From 3,200-Megapixel Camera Over Ten Years](https://soylentnews.org/article.pl?sid=25/06/25/1715224&amp;from=rss)
* [2025-06-26, 12:15:44](https://news.ycombinator.com/item?id=44386670) - [What UI first distinguished radio buttons from checkboxes with circles/squares?](https://retrocomputing.stackexchange.com/questions/31806/what-ui-first-distinguished-radio-buttons-from-checkboxes-with-circles-and-squar)
* [2025-06-26, 12:11:00](https://soylentnews.org/article.pl?sid=25/06/25/1712202&amp;from=rss) - [Key Fair Use Ruling Clarifies When Books Can be Used for AI Training](https://soylentnews.org/article.pl?sid=25/06/25/1712202&amp;from=rss)
* [2025-06-26, 07:23:00](https://soylentnews.org/article.pl?sid=25/06/25/0358212&amp;from=rss) - [Blaze Sends Ship Carrying Hundreds Of Chinese EVs To Bottom Of Pacific](https://soylentnews.org/article.pl?sid=25/06/25/0358212&amp;from=rss)
* [2025-06-26, 02:38:00](https://soylentnews.org/article.pl?sid=25/06/24/2342222&amp;from=rss) - [Judge Denies Creating “Mass Surveillance Program” Harming All ChatGPT Users](https://soylentnews.org/article.pl?sid=25/06/24/2342222&amp;from=rss)
* [2025-06-26, 00:24:20](https://news.ycombinator.com/item?id=44383086) - [Show HN: A different kind of AI Video generation](https://news.ycombinator.com/item?id=44383086)
* [2025-06-25, 22:37:53](https://news.ycombinator.com/item?id=44382419) - [Improving River Simulation](https://undiscoveredworlds.blogspot.com/2025/04/improving-river-simulation.html)
* [2025-06-25, 22:29:29](https://news.ycombinator.com/item?id=44382356) - [Scientists Retrace 30k-Year-Old Sea Voyage, in a Hollowed-Out Log](https://www.nytimes.com/2025/06/25/science/anthropology-ocean-migration-japan.html)
* [2025-06-25, 22:17:00](https://soylentnews.org/article.pl?sid=25/06/24/1258205&amp;from=rss) - [Creating AI Based Entirely on Ethically-Sourced Data](https://soylentnews.org/article.pl?sid=25/06/24/1258205&amp;from=rss)
* [2025-06-25, 18:49:43](https://news.ycombinator.com/item?id=44380655) - [What LLMs Know About Their Users](https://www.schneier.com/)
* [2025-06-25, 17:30:00](https://soylentnews.org/article.pl?sid=25/06/24/1256227&amp;from=rss) - [New Research Provides First Evidence of the Use of Browser Fingerprints for Online Tracking](https://soylentnews.org/article.pl?sid=25/06/24/1256227&amp;from=rss)
* [2025-06-25, 12:45:00](https://soylentnews.org/article.pl?sid=25/06/24/0336243&amp;from=rss) - [Apple to Australians: You&apos;re Too Stupid to Choose Your Own Apps](https://soylentnews.org/article.pl?sid=25/06/24/0336243&amp;from=rss)
* [2025-06-25, 08:59:12](https://news.ycombinator.com/item?id=44375075) - [Sequence and first differences together list all positive numbers exactly once](https://oeis.org/A005228)
* [2025-06-25, 08:02:00](https://soylentnews.org/article.pl?sid=25/06/24/0044241&amp;from=rss) - [UK Retail&apos;s Estimated Cyberattack Costs Pegged at $500M](https://soylentnews.org/article.pl?sid=25/06/24/0044241&amp;from=rss)
* [2025-06-25, 03:18:00](https://soylentnews.org/article.pl?sid=25/06/24/0039212&amp;from=rss) - [BEV Battery Swapping in Shanghai](https://soylentnews.org/article.pl?sid=25/06/24/0039212&amp;from=rss)
