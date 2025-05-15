# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and Machine Learning

* [Copyright Office Thinks AI Companies Sometimes Stole Content](https://soylentnews.org/politics/article.pl?sid=25/05/14/1136218&amp;from=rss) - The U.S. Copyright Office has flagged concerns about AI models potentially misappropriating copyrighted material, raising critical issues about intellectual property in the AI age. [Comments](https://soylentnews.org/politics/article.pl?sid=25/05/14/1136218&amp;from=rss)

* [Google DeepMind Creates Super-Advanced AI That Can Invent New Algorithms](https://tech.slashdot.org/story/25/05/14/2212200/google-deepmind-creates-super-advanced-ai-that-can-invent-new-algorithms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A breakthrough from DeepMind introduces AI capable of devising entirely new algorithms, potentially accelerating progress in various computational tasks. [Comments](https://tech.slashdot.org/story/25/05/14/2212200/google-deepmind-creates-super-advanced-ai-that-can-invent-new-algorithms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [LLMs get lost in multi-turn conversation](https://arxiv.org/abs/2505.06120) - Research uncovers limitations of large language models (LLMs) in maintaining context during extended interactions. [Comments](https://news.ycombinator.com/item?id=43991256)

## Technology Failures and Challenges

* [Klarna Pivots Back To Humans After AI Experiment Fails](https://slashdot.org/story/25/05/14/2339257/klarna-pivots-back-to-humans-after-ai-experiment-fails?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Klarna's decision to abandon its AI-led customer service experiment underscores challenges in completely replacing human interactions with AI. [Comments](https://slashdot.org/story/25/05/14/2339257/klarna-pivots-back-to-humans-after-ai-experiment-fails?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Critical Warning for External Purchases in Apple App Store](https://mjtsai.com/blog/2025/05/14/critical-warning-for-external-purchases-in-app-store/) - Apple implements a measure that cautions users about external purchases, spurring debate over its implications for user freedom and app monetization. [Comments](https://news.ycombinator.com/item?id=43992420)

## Cybersecurity and Privacy

* [Breaking out of restricted mode: XSS to RCE in Visual Studio Code](https://starlabs.sg/blog/2025/05-breaking-out-of-restricted-mode-xss-to-rce-in-visual-studio-code/) - A technical deep dive into an exploit against Visual Studio Code shows how restricted mode can be bypassed to achieve remote code execution. [Comments](https://lobste.rs/s/h9ypzn/breaking_out_restricted_mode_xss_rce)

* [The cryptography behind passkeys](https://blog.trailofbits.com/2025/05/14/the-cryptography-behind-passkeys/) - Analyzing the technological infrastructure of passphrase alternatives reveals a potential leap in online security. [Comments](https://lobste.rs/s/djboer/cryptography_behind_passkeys)

## Software and Platforms

* [MicroPython v1.25.0](https://github.com/micropython/micropython/releases/tag/v1.25.0) - The latest release of MicroPython introduces new features and bug fixes, enhancing its appeal for hardware-software integrations. [Comments](https://news.ycombinator.com/item?id=43991091)

* [NordVPN Finally Gets a Proper GUI On Linux](https://tech.slashdot.org/story/25/05/14/2054229/nordvpn-finally-gets-a-proper-gui-on-linux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Linux users of NordVPN rejoice as the software now includes a full graphical user interface, simplifying usability. [Comments](https://tech.slashdot.org/story/25/05/14/2054229/nordvpn-finally-gets-a-proper-gui-on-linux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Scientific and Technological Innovations

* [Doom on the oldest digital computer in America](https://www.youtube.com/watch?v=no0CkQk7id0) - An intriguing feat of engineering demonstrates the iconic game Doom running on an antiquated digital computer. [Comments](https://lobste.rs/s/vwtuni/doom_on_oldest_digital_computer_america)

* [New Way To Pull Uranium From Water Can Help China's Nuclear Power Push](https://soylentnews.org/article.pl?sid=25/05/14/0413235&amp;from=rss) - Scientists introduced a novel uranium extraction method from seawater, with significant implications for sustainable nuclear energy. [Comments](https://soylentnews.org/article.pl?sid=25/05/14/0413235&amp;from=rss)

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

* [2025-05-15, 06:38:13](https://news.ycombinator.com/item?id=43992420) - [Critical Warning for External Purchases in Apple App Store](https://mjtsai.com/blog/2025/05/14/critical-warning-for-external-purchases-in-app-store/)
* [2025-05-15, 05:47:00](https://soylentnews.org/politics/article.pl?sid=25/05/14/1136218&amp;from=rss) - [Copyright Office Thinks AI Companies Sometimes Stole Content](https://soylentnews.org/politics/article.pl?sid=25/05/14/1136218&amp;from=rss)
* [2025-05-15, 05:30:00](https://slashdot.org/story/25/05/14/2339257/klarna-pivots-back-to-humans-after-ai-experiment-fails?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Klarna Pivots Back To Humans After AI Experiment Fails](https://slashdot.org/story/25/05/14/2339257/klarna-pivots-back-to-humans-after-ai-experiment-fails?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-15, 05:09:55](https://lobste.rs/s/ivoh2z/data_is_code) - [Data is code](https://blog.information-superhighway.net/data-is-code)
* [2025-05-15, 04:20:12](https://lobste.rs/s/sntjcg/rulecompile_undocumented_ghidra) - [RULECOMPILE - Undocumented Ghidra decompiler rule language](https://msm.lt/re/ghidra/rulecompile/)
* [2025-05-15, 04:09:36](https://lobste.rs/s/ot7gbr/stop_using_rest_for_state) - [Stop using REST for state synchronization](https://www.mbid.me/posts/stop-using-rest-for-state-synchronization/)
* [2025-05-15, 03:30:00](https://tech.slashdot.org/story/25/05/14/2212200/google-deepmind-creates-super-advanced-ai-that-can-invent-new-algorithms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google DeepMind Creates Super-Advanced AI That Can Invent New Algorithms](https://tech.slashdot.org/story/25/05/14/2212200/google-deepmind-creates-super-advanced-ai-that-can-invent-new-algorithms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-15, 03:03:34](https://lobste.rs/s/eoc08i/zache_simple_ruby_memory_cache) - [Zache: A Simple Ruby In-Memory Cache](https://www.yegor256.com/2019/02/05/zache.html)
* [2025-05-15, 02:57:19](https://news.ycombinator.com/item?id=43991396) - [Human](https://quarter--mile.com/Human)
* [2025-05-15, 02:42:13](https://lobste.rs/s/h9ypzn/breaking_out_restricted_mode_xss_rce) - [Breaking out of restricted mode: XSS to RCE in Visual Studio Code](https://starlabs.sg/blog/2025/05-breaking-out-of-restricted-mode-xss-to-rce-in-visual-studio-code/)
* [2025-05-15, 02:28:42](https://news.ycombinator.com/item?id=43991256) - [LLMs get lost in multi-turn conversation](https://arxiv.org/abs/2505.06120)
* [2025-05-15, 02:15:05](https://lobste.rs/s/vwtuni/doom_on_oldest_digital_computer_america) - [Doom on the oldest digital computer in America](https://www.youtube.com/watch?v=no0CkQk7id0)
* [2025-05-15, 01:53:11](https://news.ycombinator.com/item?id=43991091) - [MicroPython v1.25.0](https://github.com/micropython/micropython/releases/tag/v1.25.0)
* [2025-05-15, 01:25:00](https://slashdot.org/story/25/05/14/2245232/microsoft-cuts-off-access-to-bing-search-data-as-it-shifts-focus-to-chatbots?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Cuts Off Access To Bing Search Data as It Shifts Focus To Chatbots](https://slashdot.org/story/25/05/14/2245232/microsoft-cuts-off-access-to-bing-search-data-as-it-shifts-focus-to-chatbots?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-15, 01:01:00](https://soylentnews.org/article.pl?sid=25/05/14/0413235&amp;from=rss) - [New Way To Pull Uranium From Water Can Help China&apos;s Nuclear Power Push](https://soylentnews.org/article.pl?sid=25/05/14/0413235&amp;from=rss)
* [2025-05-15, 00:45:00](https://it.slashdot.org/story/25/05/14/224205/aggressive-hackers-of-uk-retailers-are-now-targeting-us-stores-says-google?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Aggressive&apos; Hackers of UK Retailers Are Now Targeting US Stores, Says Google](https://it.slashdot.org/story/25/05/14/224205/aggressive-hackers-of-uk-retailers-are-now-targeting-us-stores-says-google?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-15, 00:02:00](https://entertainment.slashdot.org/story/25/05/14/2125248/netflix-says-its-ad-tier-now-has-94-million-monthly-active-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Netflix Says Its Ad Tier Now Has 94 Million Monthly Active Users](https://entertainment.slashdot.org/story/25/05/14/2125248/netflix-says-its-ad-tier-now-has-94-million-monthly-active-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-14, 23:27:53](https://lobste.rs/s/skb8dl/warteschlangensimulator) - [Warteschlangensimulator](https://a-herzog.github.io/Warteschlangensimulator/)
* [2025-05-14, 23:20:00](https://mobile.slashdot.org/story/25/05/14/2118214/iphone-shipments-crash-50-in-china-as-local-brands-dominate?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [iPhone Shipments Crash 50% In China As Local Brands Dominate](https://mobile.slashdot.org/story/25/05/14/2118214/iphone-shipments-crash-50-in-china-as-local-brands-dominate?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-14, 22:40:00](https://linux.slashdot.org/story/25/05/14/215254/microsoft-is-open-sourcing-its-linux-integration-services-automation-image-testing-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Is Open-Sourcing Its Linux Integration Services Automation Image-Testing Service](https://linux.slashdot.org/story/25/05/14/215254/microsoft-is-open-sourcing-its-linux-integration-services-automation-image-testing-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-14, 22:00:00](https://tech.slashdot.org/story/25/05/14/2054229/nordvpn-finally-gets-a-proper-gui-on-linux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NordVPN Finally Gets a Proper GUI On Linux](https://tech.slashdot.org/story/25/05/14/2054229/nordvpn-finally-gets-a-proper-gui-on-linux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-14, 21:53:05](https://lobste.rs/s/djboer/cryptography_behind_passkeys) - [The cryptography behind passkeys](https://blog.trailofbits.com/2025/05/14/the-cryptography-behind-passkeys/)
* [2025-05-14, 21:39:45](https://news.ycombinator.com/item?id=43989497) - [Migrating to Postgres](https://engineering.usemotion.com/migrating-to-postgres-3c93dff9c65d)
* [2025-05-14, 21:20:00](https://tech.slashdot.org/story/25/05/14/2048258/uber-to-introduce-fixed-route-shuttles-in-major-us-cities?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Uber To Introduce Fixed-Route Shuttles In Major US Cities](https://tech.slashdot.org/story/25/05/14/2048258/uber-to-introduce-fixed-route-shuttles-in-major-us-cities?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-14, 21:08:03](https://lobste.rs/s/o15bge/scalar_select_anti_pattern) - [Scalar Select Anti-Pattern](https://matklad.github.io/2025/05/14/scalar-select-aniti-pattern.html)
* [2025-05-14, 21:01:15](https://news.ycombinator.com/item?id=43989173) - [StackAI (YC W23) Is Hiring Pydantic and FastAPI Wizard](https://www.ycombinator.com/companies/stackai/jobs/8nYnmlN-backend-engineer)
* [2025-05-14, 20:42:18](https://lobste.rs/s/c94pi7/high_available_mosquitto_mqtt_on) - [High Available Mosquitto MQTT on Kubernetes](https://raymii.org/s/tutorials/High_Available_Mosquitto_MQTT_Broker_on_Kubernetes.html)
* [2025-05-14, 20:42:00](https://tech.slashdot.org/story/25/05/14/2041200/valve-takes-another-step-toward-making-steamos-a-true-windows-competitor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Valve Takes Another Step Toward Making SteamOS a True Windows Competitor](https://tech.slashdot.org/story/25/05/14/2041200/valve-takes-another-step-toward-making-steamos-a-true-windows-competitor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-14, 20:13:00](https://soylentnews.org/article.pl?sid=25/05/14/0020240&amp;from=rss) - [Ask Soylent: Insert Code Here](https://soylentnews.org/article.pl?sid=25/05/14/0020240&amp;from=rss)
* [2025-05-14, 20:05:40](https://lobste.rs/s/du21xr/why_we_need_lisp_machines) - [Why we need lisp machines](https://fultonsramblings.substack.com/p/why-we-need-lisp-machines)
* [2025-05-14, 19:55:20](https://lobste.rs/s/8yscq2/good_enough_ten_second_sum_types_for) - [Good enough ten-second sum types for Postgres](https://duckrabbit.tech/articles/pg-epoch.html)
* [2025-05-14, 19:54:31](https://news.ycombinator.com/item?id=43988533) - [Show HN: Semantic Calculator (king-man+woman=?)](https://calc.datova.ai)
* [2025-05-14, 19:44:23](https://lobste.rs/s/s5t6wa/why_i_wrote_fx_web_server) - [Why I wrote the fx web server](https://huijzer.xyz/posts/74)
* [2025-05-14, 19:38:26](https://news.ycombinator.com/item?id=43988381) - [Show HN: Muscle-Mem, a behavior cache for AI agents](https://github.com/pig-dot-dev/muscle-mem)
* [2025-05-14, 18:30:00](https://slashdot.org/story/25/05/14/1830212/palantir-ceo-slams-europes-ai-ambitions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Palantir CEO Slams Europe&apos;s AI Ambitions](https://slashdot.org/story/25/05/14/1830212/palantir-ceo-slams-europes-ai-ambitions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-14, 18:21:01](https://lobste.rs/s/q919pi/introducing_oniux_kernel_level_tor) - [Introducing oniux: Kernel-level Tor isolation for any Linux app](https://blog.torproject.org/introducing-oniux-tor-isolation-using-linux-namespaces/)
* [2025-05-14, 17:30:00](https://yro.slashdot.org/story/25/05/14/1715234/judge-slams-lawyers-for-bogus-ai-generated-research?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Judge Slams Lawyers For &apos;Bogus AI-Generated Research&apos;](https://yro.slashdot.org/story/25/05/14/1715234/judge-slams-lawyers-for-bogus-ai-generated-research?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-14, 17:17:46](https://lobste.rs/s/26oqqu/why_i_use_webassembly) - [Why I use WebAssembly](https://nasso.dev/blog/why-i-use-wasm)
* [2025-05-14, 17:05:30](https://news.ycombinator.com/item?id=43986833) - [Smalltalk-78 Xerox NoteTaker in-browser emulator](https://smalltalkzoo.thechm.org/users/bert/Smalltalk-78.html)
* [2025-05-14, 17:04:46](https://lobste.rs/s/yz2vny/crowdsourcing_broken_qr_codes) - [Crowdsourcing Broken QR Codes](https://www.humanqr.com/news/qr-code-not-scanning-well-try-to-help/)
* [2025-05-14, 16:55:00](https://it.slashdot.org/story/25/05/14/1655244/rogue-communication-devices-found-in-chinese-solar-power-inverters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rogue Communication Devices Found in Chinese Solar Power Inverters](https://it.slashdot.org/story/25/05/14/1655244/rogue-communication-devices-found-in-chinese-solar-power-inverters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-14, 16:27:48](https://news.ycombinator.com/item?id=43986424) - [Our narrative prison](https://aeon.co/essays/why-does-every-film-and-tv-series-seem-to-have-the-same-plot)
* [2025-05-14, 16:18:00](https://entertainment.slashdot.org/story/25/05/14/1618216/hbo-maxes-out-on-rebranding?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [HBO Maxes Out on Rebranding](https://entertainment.slashdot.org/story/25/05/14/1618216/hbo-maxes-out-on-rebranding?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-14, 15:50:49](https://lobste.rs/s/ularz6/server_wasn_t_meant_exist) - [The Server That Wasn&apos;t Meant to Exist](https://it-notes.dragas.net/2025/05/13/the_server_that_wasnt_meant_to_exist/)
* [2025-05-14, 15:50:30](https://news.ycombinator.com/item?id=43985971) - [A server that wasn&apos;t meant to exist](https://it-notes.dragas.net/2025/05/13/the_server_that_wasnt_meant_to_exist/)
* [2025-05-14, 15:30:00](https://soylentnews.org/article.pl?sid=25/05/13/1445228&amp;from=rss) - [Google Pays $1.375 Billion to Texas Over Unauthorized Tracking and Biometric Data Collection](https://soylentnews.org/article.pl?sid=25/05/13/1445228&amp;from=rss)
* [2025-05-14, 15:21:00](https://games.slashdot.org/story/25/05/14/1440243/sony-considers-ps5-price-hikes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sony Considers PS5 Price Hikes](https://games.slashdot.org/story/25/05/14/1440243/sony-considers-ps5-price-hikes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-14, 15:10:15](https://news.ycombinator.com/item?id=43985489) - [AlphaEvolve: A Gemini-powered coding agent for designing advanced algorithms](https://deepmind.google/discover/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/)
* [2025-05-14, 13:26:38](https://lobste.rs/s/anrlu2/sms_2fa_is_not_just_insecure_it_s_also) - [SMS 2FA is not just insecure, it&apos;s also hostile to mountain people](https://blog.stillgreenmoss.net/sms-2fa-is-not-just-insecure-its-also-hostile-to-mountain-people)
* [2025-05-14, 13:23:24](https://lobste.rs/s/hiux0l/minorminer_we_turn_your_kid_s_maths) - [MinorMiner: we turn your kid&apos;s maths homework into Bitcoin](https://robertheaton.com/minor-miner/)
* [2025-05-14, 13:08:26](https://news.ycombinator.com/item?id=43984097) - [How the economics of multitenancy work](https://www.blacksmith.sh/blog/the-economics-of-operating-a-ci-cloud)
* [2025-05-14, 12:46:39](https://news.ycombinator.com/item?id=43983871) - [What is HDR, anyway?](https://www.lux.camera/what-is-hdr/)
* [2025-05-14, 12:19:54](https://lobste.rs/s/w9eg2a/zjit_has_been_merged_into_ruby) - [ZJIT has been merged into Ruby](https://railsatscale.com/2025-05-14-merge-zjit/)
* [2025-05-14, 11:22:39](https://news.ycombinator.com/item?id=43983159) - [The cryptography behind passkeys](https://blog.trailofbits.com/2025/05/14/the-cryptography-behind-passkeys/)
* [2025-05-14, 11:14:40](https://lobste.rs/s/gkpmli/if_ai_is_so_good_at_coding_where_are_open) - [If AI is so good at coding … where are the open source contributions?](https://pivot-to-ai.com/2025/05/13/if-ai-is-so-good-at-coding-where-are-the-open-source-contributions/)
* [2025-05-14, 10:37:00](https://soylentnews.org/article.pl?sid=25/05/13/0245205&amp;from=rss) - [You Think Ransomware is Bad Now? Wait Until It Infects CPUs](https://soylentnews.org/article.pl?sid=25/05/13/0245205&amp;from=rss)
* [2025-05-14, 10:11:56](https://news.ycombinator.com/item?id=43982784) - [UK&apos;s Ancient Tree Inventory](https://ati.woodlandtrust.org.uk/)
* [2025-05-14, 10:10:00](https://news.ycombinator.com/item?id=43982777) - [Databricks acquires Neon](https://www.databricks.com/blog/databricks-neon)
* [2025-05-14, 08:54:07](https://lobste.rs/s/msvjge/ai_is_like_crappy_consultant) - [AI Is Like a Crappy Consultant](https://lukekanies.com/writing/ai-is-like-a-crappy-consultant/)
* [2025-05-14, 08:29:35](https://lobste.rs/s/wvkq5b/20k_bounty_offered_for_optimizing_rust) - [$20K Bounty Offered for Optimizing Rust Code in rav1d AV1 Decoder](https://www.memorysafety.org/blog/rav1d-perf-bounty/)
* [2025-05-14, 07:02:54](https://news.ycombinator.com/item?id=43981680) - [How to Build a Smartwatch: Picking a Chip](https://ericmigi.com/blog/how-to-build-a-smartwatch-picking-a-chip/)
* [2025-05-14, 05:51:00](https://soylentnews.org/article.pl?sid=25/05/13/0234223&amp;from=rss) - [The Viking Age is Undergoing a Revisionist Transformation](https://soylentnews.org/article.pl?sid=25/05/13/0234223&amp;from=rss)
* [2025-05-14, 01:04:00](https://soylentnews.org/article.pl?sid=25/05/13/020213&amp;from=rss) - [Nvidia NeMo Microservices to Embed AI Agents in Workflows](https://soylentnews.org/article.pl?sid=25/05/13/020213&amp;from=rss)
* [2025-05-13, 21:50:54](https://lobste.rs/s/9a0x7c/penultimate_conditional_syntax) - [The penultimate conditional syntax](https://dotat.at/@/2025-05-13-if-is.html)
* [2025-05-13, 20:19:00](https://soylentnews.org/article.pl?sid=25/05/13/0140243&amp;from=rss) - [Wikipedia Launches Legal Challenge Against UK Government](https://soylentnews.org/article.pl?sid=25/05/13/0140243&amp;from=rss)
* [2025-05-13, 19:48:01](https://lobste.rs/s/kpkczj/first_year_free_threaded_python) - [The first year of free-threaded Python](https://labs.quansight.org/blog/free-threaded-one-year-recap)
* [2025-05-13, 15:35:00](https://soylentnews.org/article.pl?sid=25/05/13/0133228&amp;from=rss) - [Charting the Future of Biotechnology and AI](https://soylentnews.org/article.pl?sid=25/05/13/0133228&amp;from=rss)
* [2025-05-13, 12:02:53](https://news.ycombinator.com/item?id=43971941) - [NASA Stennis Releases First Open-Source Software](https://www.nasa.gov/centers-and-facilities/stennis/stennis-first-open-source-software/)
* [2025-05-13, 11:49:56](https://news.ycombinator.com/item?id=43971853) - [Internet Artifacts](https://neal.fun/internet-artifacts/)
* [2025-05-13, 11:07:29](https://news.ycombinator.com/item?id=43971620) - [Git Bug: Distributed, Offline-First Bug Tracker Embedded in Git, with Bridges](https://github.com/git-bug/git-bug)
* [2025-05-13, 10:46:00](https://soylentnews.org/article.pl?sid=25/05/12/1123248&amp;from=rss) - [75 Zero-Days Exploited in 2024 With Focus on Enterprise Tech](https://soylentnews.org/article.pl?sid=25/05/12/1123248&amp;from=rss)
* [2025-05-13, 10:43:20](https://news.ycombinator.com/item?id=43971515) - [Changes since congestion pricing started in New York](https://www.nytimes.com/interactive/2025/05/11/upshot/congestion-pricing.html)
* [2025-05-13, 09:35:43](https://news.ycombinator.com/item?id=43971177) - [Working on Complex Systems: What I Learned Working at Google](https://www.thecoder.cafe/p/complex-systems)
* [2025-05-13, 09:30:46](https://news.ycombinator.com/item?id=43971149) - [Self-hostable webhook tester in go](https://testwebhook.xyz)
* [2025-05-13, 06:01:00](https://soylentnews.org/article.pl?sid=25/05/12/1114249&amp;from=rss) - [People Who Use AI at Work Are Perceived by Colleagues as Lazier and Less Competent, Study Finds](https://soylentnews.org/article.pl?sid=25/05/12/1114249&amp;from=rss)
* [2025-05-13, 01:16:00](https://soylentnews.org/article.pl?sid=25/05/11/1440209&amp;from=rss) - [China&apos;s Daring Cloud Sample Mission to Venus](https://soylentnews.org/article.pl?sid=25/05/11/1440209&amp;from=rss)
* [2025-05-12, 20:59:10](https://news.ycombinator.com/item?id=43967405) - [Hegel 2.0: The imaginary history of ternary computing (2018)](https://www.cabinetmagazine.org/issues/65/weatherby.php)
* [2025-05-12, 19:33:00](https://soylentnews.org/article.pl?sid=25/05/11/1444208&amp;from=rss) - [Reverse Engineering the 386 Processor&apos;s Prefetch Queue Circuitry](https://soylentnews.org/article.pl?sid=25/05/11/1444208&amp;from=rss)
* [2025-05-12, 15:46:00](https://soylentnews.org/article.pl?sid=25/05/11/1335239&amp;from=rss) - [Urine-Powered Electrolysis Systems Offer Energy-Efficient Green Hydrogen Production](https://soylentnews.org/article.pl?sid=25/05/11/1335239&amp;from=rss)
* [2025-05-12, 10:57:00](https://soylentnews.org/article.pl?sid=25/05/11/1335201&amp;from=rss) - [‘Tone Deaf’: US Tech Company Responsible for Global IT Outage to Cut Jobs and Use AI](https://soylentnews.org/article.pl?sid=25/05/11/1335201&amp;from=rss)
* [2025-05-12, 06:12:00](https://soylentnews.org/article.pl?sid=25/05/11/1323217&amp;from=rss) - [Into the Ethical AI Bush](https://soylentnews.org/article.pl?sid=25/05/11/1323217&amp;from=rss)
* [2025-05-12, 01:36:02](https://news.ycombinator.com/item?id=43958846) - [Python lib generates its code on-the-fly based on usage](https://github.com/cofob/autogenlib)
* [2025-05-12, 01:28:00](https://soylentnews.org/article.pl?sid=25/05/10/0222240&amp;from=rss) - [Skype is Officially Dead](https://soylentnews.org/article.pl?sid=25/05/10/0222240&amp;from=rss)
* [2025-05-11, 23:34:12](https://news.ycombinator.com/item?id=43958190) - [Internet Scrabble Club (2002-)](https://isc.ro/)
* [2025-05-11, 20:43:00](https://soylentnews.org/article.pl?sid=25/05/10/0150220&amp;from=rss) - [openSUSE Removes Deepin After Long String of Security Issues and Unauthorised Security Bypass](https://soylentnews.org/article.pl?sid=25/05/10/0150220&amp;from=rss)
* [2025-05-11, 15:58:00](https://soylentnews.org/article.pl?sid=25/05/10/0134211&amp;from=rss) - [The Bayeux Penis Count](https://soylentnews.org/article.pl?sid=25/05/10/0134211&amp;from=rss)
* [2025-05-11, 11:11:00](https://soylentnews.org/article.pl?sid=25/05/10/0031230&amp;from=rss) - [Curl Project Founder Snaps over Deluge of Time-Sucking AI Slop Bug Reports](https://soylentnews.org/article.pl?sid=25/05/10/0031230&amp;from=rss)
* [2025-05-11, 06:34:00](https://soylentnews.org/article.pl?sid=25/05/09/1729255&amp;from=rss) - [Sunscreen Might Have Helped Early Humans Outlive Neanderthals](https://soylentnews.org/article.pl?sid=25/05/09/1729255&amp;from=rss)
* [2025-05-11, 04:26:01](https://news.ycombinator.com/item?id=43951366) - [Getting Started with Celtic Coins – Crude and Barbarous, or Just Different?](https://collectingancientcoins.co.uk/getting-started-with-celtic-coins-crude-and-barbarous-or-just-different/)
* [2025-05-11, 01:49:00](https://soylentnews.org/article.pl?sid=25/05/09/1211227&amp;from=rss) - [How Hungry Fat Cells Could Someday Starve Cancer to Death](https://soylentnews.org/article.pl?sid=25/05/09/1211227&amp;from=rss)
