# [News Summary](https://kherrick.github.io/news-summary/)

## Cybersecurity Insights

* [Haunted by Legacy: Discovering and Exploiting Vulnerable Tunnelling Hosts](https://github.com/vanhoefm/tunneltester) ([Article](https://lobste.rs/s/wmj7pg/haunted_by_legacy_discovering), [Comments](https://lobste.rs/s/wmj7pg/haunted_by_legacy_discovering))

* [Malware found in official gravityforms plugin indicating supply chain breach](https://patchstack.com/articles/critical-malware-found-in-gravityforms-official-plugin-site/) ([Comments](https://news.ycombinator.com/item?id=44539879))

* [Bypassing Google's big anti-adblock update](https://0x44.xyz/blog/web-request-blocking/) ([Comments](https://news.ycombinator.com/item?id=44544266))

## Artificial Intelligence Developments

* [AI Therapy Bots Fuel Delusions and Give Dangerous Advice, Stanford Study Finds](https://science.slashdot.org/story/25/07/11/2314204/ai-therapy-bots-fuel-delusions-and-give-dangerous-advice-stanford-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://science.slashdot.org/story/25/07/11/2314204/ai-therapy-bots-fuel-delusions-and-give-dangerous-advice-stanford-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [ETH Zurich and EPFL to release a LLM developed on public infrastructure](https://ethz.ch/en/news-and-events/eth-news/news/2025/07/a-language-model-built-for-the-public-good.html) ([Comments](https://news.ycombinator.com/item?id=44535637))

* [Show HN: DesignArena – crowdsourced benchmark for AI-generated UI/UX](https://www.designarena.ai/) ([Comments](https://news.ycombinator.com/item?id=44542578))

## Emerging Security Threats

* [PerfektBlue Bluetooth Vulnerabilities Expose Millions of Vehicles to Remote Code Execution](https://soylentnews.org/article.pl?sid=25/07/11/2237233&from=rss) ([Comments](https://soylentnews.org/article.pl?sid=25/07/11/2237233&from=rss))

* [NVIDIA Warns Its High-End GPUs May Be Vulnerable to Rowhammer Attacks](https://hardware.slashdot.org/story/25/07/12/199238/nvidia-warns-its-high-end-gpus-may-be-vulnerable-to-rowhammer-attacks?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://hardware.slashdot.org/story/25/07/12/199238/nvidia-warns-its-high-end-gpus-may-be-vulnerable-to-rowhammer-attacks?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [New Android TapTrap Attack Fools Users With Invisible UI Trick](https://soylentnews.org/article.pl?sid=25/07/11/114218&from=rss) ([Comments](https://soylentnews.org/article.pl?sid=25/07/11/114218&from=rss))

## Scientific and Medical Advances

* [The fish kick may be the fastest subsurface swim stroke yet (2015)](https://nautil.us/is-this-new-swim-stroke-the-fastest-yet-235511/) ([Comments](https://news.ycombinator.com/item?id=44541576))

* [Researchers Develop New Tool To Measure Biological Age](https://science.slashdot.org/story/25/07/11/236230/researchers-develop-new-tool-to-measure-biological-age?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://science.slashdot.org/story/25/07/11/236230/researchers-develop-new-tool-to-measure-biological-age?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Northern Arizona Resident Dies From Plague](https://science.slashdot.org/story/25/07/12/1834224/northern-arizona-resident-dies-from-plague?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://science.slashdot.org/story/25/07/12/1834224/northern-arizona-resident-dies-from-plague?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Technological Innovations

* [Damn Small Link Forwarder (DSLF): a bit.ly replacement written in rust](https://github.com/vpetersson/dslf) ([Comments](https://lobste.rs/s/btcmpp/damn_small_link_forwarder_dslf_bit_ly))

* [Vibe-Coding a PCB – surprisingly good](https://atomic14.substack.com/p/vibe-coding-a-pcb-surprisingly-good) ([Comments](https://news.ycombinator.com/item?id=44542880))

* [Stone–Wales Transformations](https://johncarlosbaez.wordpress.com/2025/07/12/stone-wales-transformation/) ([Comments](https://news.ycombinator.com/item?id=44542170))

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

* [2025-07-12, 21:45:52](https://lobste.rs/s/wmj7pg/haunted_by_legacy_discovering) - [Haunted by Legacy: Discovering and Exploiting Vulnerable Tunnelling Hosts](https://github.com/vanhoefm/tunneltester)
* [2025-07-12, 21:44:03](https://lobste.rs/s/ijyz5o/easy_dynamic_dispatch_using_glibc) - [Easy dynamic dispatch using GLIBC Hardware Capabilities](https://www.kvr.at/posts/easy-dynamic-dispatch-using-GLIBC-hardware-capabilities/)
* [2025-07-12, 21:34:00](https://hardware.slashdot.org/story/25/07/12/199238/nvidia-warns-its-high-end-gpus-may-be-vulnerable-to-rowhammer-attacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NVIDIA Warns Its High-End GPUs May Be Vulnerable to Rowhammer Attacks](https://hardware.slashdot.org/story/25/07/12/199238/nvidia-warns-its-high-end-gpus-may-be-vulnerable-to-rowhammer-attacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-12, 20:34:00](https://news.slashdot.org/story/25/07/12/1559255/robinhood-up-160-in-2025-but-may-face-obstacles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Robinhood Up 160% in 2025, But May Face Obstacles](https://news.slashdot.org/story/25/07/12/1559255/robinhood-up-160-in-2025-but-may-face-obstacles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-12, 20:23:05](https://lobste.rs/s/9wf7sc/aeron_efficient_reliable_udp_unicast_udp) - [aeron: Efficient reliable UDP unicast, UDP multicast, and IPC message transport](https://github.com/aeron-io/aeron)
* [2025-07-12, 20:08:20](https://lobste.rs/s/ip3wbn/angr_open_source_binary_analysis) - [angr (open-source binary analysis platform for Python)](https://angr.io/)
* [2025-07-12, 19:34:00](https://science.slashdot.org/story/25/07/12/1834224/northern-arizona-resident-dies-from-plague?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Northern Arizona Resident Dies From Plague](https://science.slashdot.org/story/25/07/12/1834224/northern-arizona-resident-dies-from-plague?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-12, 19:29:00](https://soylentnews.org/article.pl?sid=25/07/12/123235&amp;from=rss) - [Semiconductor Industry Could Short Out as Copper Runs Dry](https://soylentnews.org/article.pl?sid=25/07/12/123235&amp;from=rss)
* [2025-07-12, 19:22:40](https://news.ycombinator.com/item?id=44544388) - [&apos;Starter packs&apos; have played a central role in Bluesky&apos;s rapid growth](https://www.tu-darmstadt.de/universitaet/aktuelles_meldungen/einzelansicht_512064.en.jsp)
* [2025-07-12, 19:20:31](https://news.ycombinator.com/item?id=44544367) - [I Messed Up My Google PM Vibe Coding Interview](https://old.reddit.com/r/ProductManagement/comments/1lw9r9h/i_messed_up_my_google_pm_vibe_coding_interview/)
* [2025-07-12, 19:06:09](https://news.ycombinator.com/item?id=44544266) - [Bypassing Google&apos;s big anti-adblock update](https://0x44.xyz/blog/web-request-blocking/)
* [2025-07-12, 18:34:00](https://slashdot.org/story/25/07/12/1730242/microsoft-outlook-malfunctioned-for-over-21-hours-wednesday-and-thursday?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Outlook Malfunctioned For Over 21 Hours  Wednesday and Thursday](https://slashdot.org/story/25/07/12/1730242/microsoft-outlook-malfunctioned-for-over-21-hours-wednesday-and-thursday?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-12, 18:21:33](https://news.ycombinator.com/item?id=44543913) - [A better Ghidra MCP server – GhidrAssistMCP](https://github.com/jtang613/GhidrAssistMCP)
* [2025-07-12, 18:14:37](https://news.ycombinator.com/item?id=44543865) - [Supreme Court&apos;s Ruling Practically Wipes Out Free Speech for Sex Writing Online](https://ellsberg.substack.com/p/free-speech)
* [2025-07-12, 17:34:00](https://hardware.slashdot.org/story/25/07/12/044242/much-of-the-worlds-solar-gear-is-made-using-fossil-power-in-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Much of the World&apos;s Solar Gear is Made Using Fossil Power in China](https://hardware.slashdot.org/story/25/07/12/044242/much-of-the-worlds-solar-gear-is-made-using-fossil-power-in-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-12, 17:26:24](https://news.ycombinator.com/item?id=44543508) - [Kimi k2 largest open source SOTA model?](https://github.com/MoonshotAI/Kimi-K2)
* [2025-07-12, 17:05:14](https://news.ycombinator.com/item?id=44543368) - [Arizona resident dies from the plague less than 24 hours after showing symptoms](https://www.independent.co.uk/news/health/arizona-plague-death-cases-b2787325.html)
* [2025-07-12, 16:45:45](https://news.ycombinator.com/item?id=44543240) - [Lost Chapter of Automate the Boring Stuff: Audio, Video, and Webcams in Python](https://inventwithpython.com/blog/lost-av-chapter.html)
* [2025-07-12, 16:34:00](https://slashdot.org/story/25/07/12/1550205/bitcoin-hits-an-all-time-high-of-118000-up-21-for-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bitcoin Hits an All-Time High of $118,000, Up 21% for 2025](https://slashdot.org/story/25/07/12/1550205/bitcoin-hits-an-all-time-high-of-118000-up-21-for-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-12, 16:32:12](https://news.ycombinator.com/item?id=44543156) - [Show HN: BinaryRPC – Lightweight WebSocket-based RPC framework in modern C++](https://github.com/efecan0/binaryrpc-framework)
* [2025-07-12, 16:31:03](https://news.ycombinator.com/item?id=44543150) - [Proposed NOAA Budget Kills Program Designed to Prevent Satellite Collisions](https://skyandtelescope.org/astronomy-news/proposed-noaa-budget-kills-program-to-prevent-satellite-collisions/)
* [2025-07-12, 16:16:40](https://lobste.rs/s/f0tt1k/working_through_writing_c_compiler) - [Working through ‘Writing A C Compiler’](https://jollygoodsw.wordpress.com/2025/03/13/working-through-writing-a-c-compiler/)
* [2025-07-12, 16:00:55](https://lobste.rs/s/si4u1m/dyson_sphere_program_s_new) - [Dyson Sphere Program&apos;s new multithreading framework](https://store.steampowered.com/news/app/1366540/view/543361383085900510)
* [2025-07-12, 15:47:26](https://news.ycombinator.com/item?id=44542880) - [Vibe-Coding a PCB – surprisingly good](https://atomic14.substack.com/p/vibe-coding-a-pcb-surprisingly-good)
* [2025-07-12, 15:34:00](https://tech.slashdot.org/story/25/07/12/0559241/fcc-chair-accused-of-political-theater-to-please-net-neutralitys-foes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FCC Chair Accused of &apos;Political Theater&apos; to Please Net Neutrality&apos;s Foes](https://tech.slashdot.org/story/25/07/12/0559241/fcc-chair-accused-of-political-theater-to-please-net-neutralitys-foes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-12, 15:07:46](https://news.ycombinator.com/item?id=44542578) - [Show HN: DesignArena – crowdsourced benchmark for AI-generated UI/UX](https://www.designarena.ai/)
* [2025-07-12, 14:45:00](https://soylentnews.org/article.pl?sid=25/07/11/238234&amp;from=rss) - [70,000 Years Ago Humans Underwent A Major Shift – That’s Why We Exist ](https://soylentnews.org/article.pl?sid=25/07/11/238234&amp;from=rss)
* [2025-07-12, 14:34:00](https://tech.slashdot.org/story/25/07/12/0326234/before-air-india-boeing-787-crash-fuel-switches-were-cut-off-preliminary-report-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Before Air India Boeing 787 Crash, Fuel Switches Were Cut Off, Preliminary Report Says](https://tech.slashdot.org/story/25/07/12/0326234/before-air-india-boeing-787-crash-fuel-switches-were-cut-off-preliminary-report-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-12, 14:07:12](https://news.ycombinator.com/item?id=44542170) - [Stone–Wales Transformations](https://johncarlosbaez.wordpress.com/2025/07/12/stone-wales-transformation/)
* [2025-07-12, 13:00:00](https://developers.slashdot.org/story/25/07/12/016247/ai-slows-down-some-experienced-software-developers-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Slows Down Some Experienced Software Developers, Study Finds](https://developers.slashdot.org/story/25/07/12/016247/ai-slows-down-some-experienced-software-developers-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-12, 12:25:28](https://news.ycombinator.com/item?id=44541576) - [The fish kick may be the fastest subsurface swim stroke yet (2015)](https://nautil.us/is-this-new-swim-stroke-the-fastest-yet-235511/)
* [2025-07-12, 12:23:33](https://news.ycombinator.com/item?id=44541565) - [Working through &apos;Writing A C Compiler&apos;](https://jollygoodsw.wordpress.com/2025/03/13/working-through-writing-a-c-compiler/)
* [2025-07-12, 12:00:11](https://news.ycombinator.com/item?id=44541458) - [Sieve (YC X25) is hiring researchers to build large video datasets for AI labs](https://sievedata.com/about/jobs)
* [2025-07-12, 10:00:00](https://science.slashdot.org/story/25/07/12/0052223/please-dont-cut-funds-for-space-traffic-control-industry-begs-congress?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Please Don&apos;t Cut Funds For Space Traffic Control, Industry Begs Congress](https://science.slashdot.org/story/25/07/12/0052223/please-dont-cut-funds-for-space-traffic-control-industry-begs-congress?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-12, 10:00:00](https://soylentnews.org/article.pl?sid=25/07/11/2237233&amp;from=rss) - [PerfektBlue Bluetooth Vulnerabilities Expose Millions of Vehicles to Remote Code Execution](https://soylentnews.org/article.pl?sid=25/07/11/2237233&amp;from=rss)
* [2025-07-12, 08:45:15](https://news.ycombinator.com/item?id=44540402) - [MacPaint Art from the Mid-80s Still Looks Great Today](https://blog.decryption.net.au/posts/macpaint.html)
* [2025-07-12, 07:01:45](https://lobste.rs/s/btcmpp/damn_small_link_forwarder_dslf_bit_ly) - [Damn Small Link Forwarder (DSLF): a bit.ly replacement written in rust](https://github.com/vpetersson/dslf)
* [2025-07-12, 07:00:00](https://hardware.slashdot.org/story/25/07/12/0045216/solar-was-the-leading-source-of-electricity-in-the-eu-last-month?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Solar Was the Leading Source of Electricity In the EU Last Month](https://hardware.slashdot.org/story/25/07/12/0045216/solar-was-the-leading-source-of-electricity-in-the-eu-last-month?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-12, 06:41:59](https://news.ycombinator.com/item?id=44539879) - [Malware found in official gravityforms plugin indicating supply chain breach](https://patchstack.com/articles/critical-malware-found-in-gravityforms-official-plugin-site/)
* [2025-07-12, 05:15:00](https://soylentnews.org/article.pl?sid=25/07/11/2226206&amp;from=rss) - [CEO Claims Intel No Longer In The \&quot;Top 10 Semiconductor Companies\&quot; ](https://soylentnews.org/article.pl?sid=25/07/11/2226206&amp;from=rss)
* [2025-07-12, 03:30:00](https://science.slashdot.org/story/25/07/11/2314204/ai-therapy-bots-fuel-delusions-and-give-dangerous-advice-stanford-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Therapy Bots Fuel Delusions and Give Dangerous Advice, Stanford Study Finds](https://science.slashdot.org/story/25/07/11/2314204/ai-therapy-bots-fuel-delusions-and-give-dangerous-advice-stanford-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-12, 02:02:00](https://science.slashdot.org/story/25/07/11/236230/researchers-develop-new-tool-to-measure-biological-age?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Researchers Develop New Tool To Measure Biological Age](https://science.slashdot.org/story/25/07/11/236230/researchers-develop-new-tool-to-measure-biological-age?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-12, 01:25:00](https://yro.slashdot.org/story/25/07/11/2254200/russian-basketball-player-arrested-for-alleged-role-in-ransomware-attacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Russian Basketball Player Arrested For Alleged Role In Ransomware Attacks](https://yro.slashdot.org/story/25/07/11/2254200/russian-basketball-player-arrested-for-alleged-role-in-ransomware-attacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-12, 01:08:39](https://lobste.rs/s/gw7wq0/hanami_elephant_room) - [Hanami and the elephant in the room](https://hanamirb.org/blog/2025/07/11/hanami-and-the-elephant-in-the-room/)
* [2025-07-12, 00:45:00](https://games.slashdot.org/story/25/07/11/1936226/ifixit-the-switch-2-pro-is-a-piss-poor-excuse-for-a-controller?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [iFixit: the Switch 2 Pro is a &apos;Piss-Poor Excuse For a Controller&apos;](https://games.slashdot.org/story/25/07/11/1936226/ifixit-the-switch-2-pro-is-a-piss-poor-excuse-for-a-controller?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-12, 00:31:00](https://soylentnews.org/article.pl?sid=25/07/11/1218211&amp;from=rss) - [Derinkuyu: A Subterranean Marvel of Ancient Engineering with  Capacity for 20,000 Inhabitants](https://soylentnews.org/article.pl?sid=25/07/11/1218211&amp;from=rss)
* [2025-07-11, 23:18:53](https://lobste.rs/s/vuguez/watchwitch_interoperability_privacy) - [WatchWitch: Interoperability, Privacy, and Autonomy for the Apple Watch](https://arxiv.org/abs/2507.07210)
* [2025-07-11, 22:57:25](https://news.ycombinator.com/item?id=44537631) - [Faking a JPEG](https://www.ty-penguin.org.uk/~auj/blog/2025/03/25/fake-jpeg/)
* [2025-07-11, 22:55:47](https://lobste.rs/s/s6yydx/faking_jpeg) - [Faking a JPEG](https://www.ty-penguin.org.uk/~auj/blog/2025/03/25/fake-jpeg/)
* [2025-07-11, 21:35:31](https://news.ycombinator.com/item?id=44536988) - [OpenAI’s Windsurf deal is off, and Windsurf’s CEO is going to Google](https://www.theverge.com/openai/705999/google-windsurf-ceo-openai)
* [2025-07-11, 20:26:40](https://lobste.rs/s/k6njx6/rethinking_our_adoption_strategy) - [Rethinking our Adoption Strategy](https://www.youtube.com/watch?v=YPAaUFGrlEE)
* [2025-07-11, 20:23:18](https://news.ycombinator.com/item?id=44536459) - [Preliminary report into Air India crash released](https://www.bbc.co.uk/news/live/cx20p2x9093t)
* [2025-07-11, 19:53:43](https://lobste.rs/s/ogfcwa/measuring_power_network_frequency_using) - [Measuring power network frequency using junk you have in your closet](https://halcy.de/blog/2025/02/09/measuring-power-network-frequency-using-junk-you-have-in-your-closet/)
* [2025-07-11, 19:46:00](https://soylentnews.org/article.pl?sid=25/07/11/114218&amp;from=rss) - [New Android TapTrap Attack Fools Users With Invisible UI Trick](https://soylentnews.org/article.pl?sid=25/07/11/114218&amp;from=rss)
* [2025-07-11, 19:29:00](https://lobste.rs/s/rqkuul/placing_functions) - [Placing functions](https://blog.yoshuawuyts.com/placing-functions/)
* [2025-07-11, 19:26:05](https://lobste.rs/s/ugyxdj/new_date_wtf) - [new Date(\&quot;wtf\&quot;)](https://jsdate.wtf/)
* [2025-07-11, 19:24:07](https://lobste.rs/s/ltp2yr/wasm_hard_way_porting_chicory_compiler) - [Wasm the Hard Way: Porting the Chicory Compiler to Android](https://blog.evacchi.dev/posts/2025/07/11/wasm-the-hard-way-porting-the-chicory-compiler-to-android/)
* [2025-07-11, 18:45:10](https://news.ycombinator.com/item?id=44535637) - [ETH Zurich and EPFL to release a LLM developed on public infrastructure](https://ethz.ch/en/news-and-events/eth-news/news/2025/07/a-language-model-built-for-the-public-good.html)
* [2025-07-11, 17:39:49](https://lobste.rs/s/c5cxwu/cybersecurity_risk_assessment_request) - [Cybersecurity Risk Assessment Request](https://daniel.haxx.se/blog/2025/07/11/cybersecurity-risk-assessment-request/)
* [2025-07-11, 17:22:01](https://news.ycombinator.com/item?id=44534787) - [Jank is C++](https://jank-lang.org/blog/2025-07-11-jank-is-cpp/)
* [2025-07-11, 17:21:43](https://lobste.rs/s/eagdbx/jank_is_c) - [jank is C++](https://jank-lang.org/blog/2025-07-11-jank-is-cpp/)
* [2025-07-11, 17:19:55](https://lobste.rs/s/ccyux0/building_simple_router_with_openbsd) - [Building a Simple Router with OpenBSD](https://btxx.org/posts/openbsd-router/)
* [2025-07-11, 15:02:00](https://soylentnews.org/article.pl?sid=25/07/11/0518225&amp;from=rss) - [What is AGI? Nobody Agrees, and It&apos;s Tearing Microsoft and OpenAI Apart.](https://soylentnews.org/article.pl?sid=25/07/11/0518225&amp;from=rss)
* [2025-07-11, 13:33:17](https://lobste.rs/s/35tpxv/clustered_postgresql) - [Clustered PostgreSQL](https://arch.dog/bark/clustered-postgresql)
* [2025-07-11, 13:24:30](https://lobste.rs/s/vzkmtj/forget_borrow_checkers_c3_solved_memory) - [Forget Borrow Checkers: C3 Solved Memory Lifetimes With Scopes](https://c3-lang.org/blog/forget-borrow-checkers-c3-solved-memory-lifetimes-with-scopes/)
* [2025-07-11, 09:40:31](https://lobste.rs/s/dtj5hr/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/dtj5hr/what_are_you_doing_this_weekend)
* [2025-07-11, 08:15:00](https://soylentnews.org/article.pl?sid=25/07/10/0029200&amp;from=rss) - [Nvidia Has Become the World’s First Company Worth $4 Trillion](https://soylentnews.org/article.pl?sid=25/07/10/0029200&amp;from=rss)
* [2025-07-11, 03:30:00](https://soylentnews.org/article.pl?sid=25/07/10/0025232&amp;from=rss) - [Apple Just Released an Interesting Coding Language Model](https://soylentnews.org/article.pl?sid=25/07/10/0025232&amp;from=rss)
* [2025-07-11, 00:38:06](https://lobste.rs/s/aa7ske/anubis_now_supports_non_js_challenges) - [Anubis now supports non-JS challenges](https://anubis.techaro.lol/blog/release/v1.20.0/#no-js-challenge)
* [2025-07-11, 00:36:34](https://lobste.rs/s/z4jhtb/remembrance_matthew_s_trout_mst) - [A remembrance of Matthew S. Trout (mst)](https://curtispoe.org/blog/rip-mst.html)
* [2025-07-10, 22:43:00](https://soylentnews.org/article.pl?sid=25/07/09/1114240&amp;from=rss) - [AI is Scraping the Web, but the Web is Fighting Back](https://soylentnews.org/article.pl?sid=25/07/09/1114240&amp;from=rss)
* [2025-07-10, 20:11:28](https://lobste.rs/s/jjqmuu/almost_catastrophic_openzfs_bug_humans) - [An (almost) catastrophic OpenZFS bug and the humans that made it (and Rust is here too)](https://despairlabs.com/blog/posts/2025-07-10-an-openzfs-bug-and-the-humans-that-made-it/)
* [2025-07-10, 17:58:00](https://soylentnews.org/article.pl?sid=25/07/09/116236&amp;from=rss) - [Earth is Going to Spin Much Faster Over the Next Few Months](https://soylentnews.org/article.pl?sid=25/07/09/116236&amp;from=rss)
* [2025-07-10, 17:24:35](https://lobste.rs/s/1batvy/measuring_impact_early_2025_ai_on) - [Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/)
* [2025-07-10, 13:14:00](https://soylentnews.org/article.pl?sid=25/07/09/1058230&amp;from=rss) - [Compact GeV Proton Acceleration Using Ultra-Intense Lasers](https://soylentnews.org/article.pl?sid=25/07/09/1058230&amp;from=rss)
* [2025-07-10, 08:30:00](https://soylentnews.org/article.pl?sid=25/07/08/2330230&amp;from=rss) - [Shrinking Antarctic Sea Ice Is Warming The Ocean Faster Than Expected](https://soylentnews.org/article.pl?sid=25/07/08/2330230&amp;from=rss)
* [2025-07-10, 03:45:00](https://soylentnews.org/article.pl?sid=25/07/08/1724218&amp;from=rss) - [The Curious Rise of Giant Tablets on Wheels](https://soylentnews.org/article.pl?sid=25/07/08/1724218&amp;from=rss)
* [2025-07-09, 23:08:00](https://soylentnews.org/article.pl?sid=25/07/08/1129207&amp;from=rss) - [How to Stop Your LG or Samsung Smart TV From Tracking You](https://soylentnews.org/article.pl?sid=25/07/08/1129207&amp;from=rss)
* [2025-07-09, 20:45:19](https://news.ycombinator.com/item?id=44514559) - [QRS: Epsilon Wrangling](https://www.tbray.org/ongoing/When/202x/2025/07/07/Epsilon-Wrangling)
* [2025-07-09, 18:18:00](https://soylentnews.org/article.pl?sid=25/07/08/1122201&amp;from=rss) - [EU Rattles its Purse and AI Datacenter Builders Come Running](https://soylentnews.org/article.pl?sid=25/07/08/1122201&amp;from=rss)
* [2025-07-09, 13:28:00](https://soylentnews.org/article.pl?sid=25/07/08/1113258&amp;from=rss) - [MIT Engineers Develop Electrochemical Sensors for Cheap, Disposable Diagnostics](https://soylentnews.org/article.pl?sid=25/07/08/1113258&amp;from=rss)
* [2025-07-09, 11:33:09](https://news.ycombinator.com/item?id=44508726) - [Show HN: Pyhoff – Connect Python ML Models to Beckhoff/WAGO IO Hardware](https://github.com/Nonannet/pyhoff)
* [2025-07-09, 09:59:48](https://news.ycombinator.com/item?id=44508068) - [Context Engineering Guide](https://nlp.elvissaravia.com/p/context-engineering-guide)
* [2025-07-09, 09:08:34](https://news.ycombinator.com/item?id=44507799) - [Exposing a web service with Cloudflare Tunnel (2022)](https://erisa.dev/exposing-a-web-service-with-cloudflare-tunnel/)
* [2025-07-09, 08:30:00](https://soylentnews.org/article.pl?sid=25/07/07/2242255&amp;from=rss) - [Stop Killing Games Finally Reaches One Million Signature Milestone, but There&apos;s a Pretty Big Catch](https://soylentnews.org/article.pl?sid=25/07/07/2242255&amp;from=rss)
* [2025-07-09, 03:45:00](https://soylentnews.org/article.pl?sid=25/07/07/2215236&amp;from=rss) - [Inside the Australian Lab Growing a Biological Computer](https://soylentnews.org/article.pl?sid=25/07/07/2215236&amp;from=rss)
* [2025-07-09, 00:03:29](https://news.ycombinator.com/item?id=44505121) - [Fundamentals of garbage collection (2023)](https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/fundamentals)
* [2025-07-08, 23:02:00](https://soylentnews.org/article.pl?sid=25/07/07/0143225&amp;from=rss) - [A New Diabetes Treatment Could Free People From Insulin Injections](https://soylentnews.org/article.pl?sid=25/07/07/0143225&amp;from=rss)
* [2025-07-08, 18:11:00](https://soylentnews.org/article.pl?sid=25/07/07/0139229&amp;from=rss) - [Why Don’t Bats Get Cancer? Researchers Discover Protection From Genes and Strong Immune Systems](https://soylentnews.org/article.pl?sid=25/07/07/0139229&amp;from=rss)
* [2025-07-08, 16:14:02](https://news.ycombinator.com/item?id=44501417) - [Making a Speedrun Timer in D](https://bradley.chatha.dev/blog/linux-speedrun-timer-dlang/post/)
* [2025-07-08, 15:16:33](https://news.ycombinator.com/item?id=44500815) - [First malaria treatment for babies approved for use](https://www.bbc.com/news/articles/c89e872jdjxo)
* [2025-07-08, 13:30:00](https://soylentnews.org/article.pl?sid=25/07/06/2318236&amp;from=rss) - [The European Commission&apos;s Call for Technical Advisors: Save Privacy](https://soylentnews.org/article.pl?sid=25/07/06/2318236&amp;from=rss)
* [2025-07-08, 08:45:00](https://soylentnews.org/article.pl?sid=25/07/06/2238227&amp;from=rss) - [First Leisure Swim for Parisians Into the Seine in More Than a Century](https://soylentnews.org/article.pl?sid=25/07/06/2238227&amp;from=rss)
* [2025-07-08, 04:31:00](https://soylentnews.org/article.pl?sid=25/07/06/1323229&amp;from=rss) - [UK Eyes New Laws Over Cable Sabotage](https://soylentnews.org/article.pl?sid=25/07/06/1323229&amp;from=rss)
