# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Open Source

* [Sequoia: Rust OpenPGP implementation](https://gitlab.com/sequoia-pgp/sequoia) - A comprehensive OpenPGP implementation in Rust is gaining traction, offering a secure and modern alternative to older libraries like GnuPG. [Comments](https://lobste.rs/s/ftfvjk/sequoia_rust_openpgp_implementation)

* [Spectral Labs releases SGS-1: the first generative model for structured CAD](https://www.spectrallabs.ai/research/SGS-1) - Spectral Labs has unveiled a groundbreaking generative AI model focused on structured CAD applications, revolutionizing design workflows. [Comments](https://news.ycombinator.com/item?id=45319876)

## Cybersecurity and Software Vulnerabilities

* [Shai-Hulud, The Most Dangerous NPM Breach In History Affecting CrowdStrike and Hundreds of Popular Packages](https://www.koi.security/incident/shai-hulud-npm-supply-chain-attack-crowdstrike-tinycolor) - The Shai-Hulud breach exposed critical supply chain vulnerabilities in NPM, including compromises of CrowdStrike packages. [Comments](https://lobste.rs/s/rgfgku/shai_hulud_most_dangerous_npm_breach)

* [Beyond Sandbox Domains: Rendering Untrusted Web Content with SafeContentFrame](https://bughunters.google.com/blog/6715529872080896/beyond-sandbox-domains-rendering-untrusted-web-content-with-safecontentframe) - Google introduces SafeContentFrame, an innovative way to render untrusted web content more securely. [Comments](https://lobste.rs/s/sbib09/beyond_sandbox_domains_rendering)

## AI and Machine Learning

* [Google Temporarily Pauses AI-Powered 'Homework Helper' Button in Chrome Over Cheating Concerns](https://news.slashdot.org/story/25/09/20/029249/google-temporarily-pauses-ai-powered-homework-helper-button-in-chrome-over-cheating-concerns?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Concerns about fostering academic dishonesty lead Google to pause its AI-powered homework assistance feature. [Comments](https://news.ycombinator.com/item?id=45319062)

* [LLMs are still surprisingly bad at some simple tasks](https://shkspr.mobi/blog/2025/09/llms-are-still-surprisingly-bad-at-simple-tasks/) - Highlighting limitations in modern Language Learning Models, this article underscores the challenges of achieving true cognitive AI. [Comments](https://news.ycombinator.com/item?id=45321983)

## Privacy, Surveillance, and Ethical Issues

* [Meta exposé author faces bankruptcy after ban on criticising company](https://www.theguardian.com/technology/2025/sep/21/meta-expose-author-sarah-wynn-williams-faces-bankruptcy-after-ban-on-criticising-company) - A journalist faces severe financial repercussions for publishing an exposé on Meta's practices. [Comments](https://news.ycombinator.com/item?id=45322050)

* [That DEA agent's 'credit card' could be eavesdropping on you](https://www.independent.co.uk/news/world/americas/dea-surveillance-hidden-cameras-federal-law-enforcement-b2828606.html) - A covert surveillance tool disguised as a credit card highlights expanding law enforcement monitoring capabilities. [Comments](https://news.ycombinator.com/item?id=45322101)

## Energy and Space Innovation

* [Interlune Signs $300M Deal to Harvest Helium-3 for Quantum Computing from the Moon](https://science.slashdot.org/story/25/09/20/0254249/interlune-signs-300m-deal-to-harvest-helium-3-for-quantum-computing-from-the-moon?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Aiming to power next-gen quantum computers, Interlune secures significant funding for Helium-3 extraction from the lunar surface. [Comments](https://news.ycombinator.com/item?id=45312326)

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

* [2025-09-21, 12:59:07](https://lobste.rs/s/ftfvjk/sequoia_rust_openpgp_implementation) - [Sequoia: Rust OpenPGP implementation](https://gitlab.com/sequoia-pgp/sequoia)
* [2025-09-21, 12:31:57](https://news.ycombinator.com/item?id=45322135) - [Why your outdoorsy friend suddenly has a gummy bear power bank](https://www.theverge.com/tech/781387/backpacking-ultralight-haribo-power-bank)
* [2025-09-21, 12:24:31](https://news.ycombinator.com/item?id=45322101) - [That DEA agent&apos;s &apos;credit card&apos; could be eavesdropping on you](https://www.independent.co.uk/news/world/americas/dea-surveillance-hidden-cameras-federal-law-enforcement-b2828606.html)
* [2025-09-21, 12:15:11](https://news.ycombinator.com/item?id=45322050) - [Meta exposé author faces bankruptcy after ban on criticising company](https://www.theguardian.com/technology/2025/sep/21/meta-expose-author-sarah-wynn-williams-faces-bankruptcy-after-ban-on-criticising-company)
* [2025-09-21, 12:03:44](https://news.ycombinator.com/item?id=45321983) - [LLMs are still surprisingly bad at some simple tasks](https://shkspr.mobi/blog/2025/09/llms-are-still-surprisingly-bad-at-simple-tasks/)
* [2025-09-21, 11:45:23](https://lobste.rs/s/srt2xs/linkgraphs_are_fun) - [Linkgraphs are fun](https://andregarzia.com/2025/09/linkgraphs-are-fun.html)
* [2025-09-21, 11:34:00](https://yro.slashdot.org/story/25/09/21/0550202/disney-sued-by-law-firm-wanting-to-use-steamboat-willie-in-its-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Disney Sued by Law Firm Wanting to Use &apos;Steamboat Willie&apos; in Its Ads](https://yro.slashdot.org/story/25/09/21/0550202/disney-sued-by-law-firm-wanting-to-use-steamboat-willie-in-its-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-21, 10:56:42](https://news.ycombinator.com/item?id=45321663) - [They Thought They Were Free (1955)](https://press.uchicago.edu/Misc/Chicago/511928.html)
* [2025-09-21, 10:31:32](https://lobste.rs/s/sf1uml/my_hacking_simulator_runs_on_cyberdeck) - [My Hacking Simulator runs on a Cyberdeck](https://tiniuc.com/hacksim-on-cyberdeck/)
* [2025-09-21, 09:57:04](https://lobste.rs/s/sbib09/beyond_sandbox_domains_rendering) - [Beyond Sandbox Domains: Rendering Untrusted Web Content with SafeContentFrame](https://bughunters.google.com/blog/6715529872080896/beyond-sandbox-domains-rendering-untrusted-web-content-with-safecontentframe)
* [2025-09-21, 09:08:00](https://soylentnews.org/article.pl?sid=25/09/20/0336240&amp;from=rss) - [Brazil&apos;s Payment System Puts Credit Card Firms to the Test](https://soylentnews.org/article.pl?sid=25/09/20/0336240&amp;from=rss)
* [2025-09-21, 09:02:51](https://lobste.rs/s/oenamh/less_is_safer_how_obsidian_reduces_risk) - [Less is safer: how Obsidian reduces the risk of supply chain attacks](https://obsidian.md/blog/less-is-safer/)
* [2025-09-21, 08:57:59](https://lobste.rs/s/vmilfm/hacking_with_ai_sasts_overview_ai) - [Hacking with AI SASTs: An overview of ‘AI Security Engineers’ / ‘LLM Security Scanners’ for Penetration Testers and Security Teams](https://joshua.hu/llm-engineer-review-sast-security-ai-tools-pentesters)
* [2025-09-21, 07:51:09](https://lobste.rs/s/ahvcd2/nixcon_2025_trip_report) - [NixCon 2025 Trip Report](https://michael.stapelberg.ch/posts/2025-09-21-nixcon-2025-trip-report/)
* [2025-09-21, 07:34:25](https://lobste.rs/s/rgfgku/shai_hulud_most_dangerous_npm_breach) - [Shai-Hulud, The Most Dangerous NPM Breach In History Affecting CrowdStrike and Hundreds of Popular Packages](https://www.koi.security/incident/shai-hulud-npm-supply-chain-attack-crowdstrike-tinycolor)
* [2025-09-21, 07:34:00](https://tech.slashdot.org/story/25/09/21/023248/glitches-humiliated-zuck-in-smart-glasses-launch-meta-cto-explains-what-happened?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Glitches Humiliated Zuck in Smart Glasses Launch. Meta CTO Explains What Happened](https://tech.slashdot.org/story/25/09/21/023248/glitches-humiliated-zuck-in-smart-glasses-launch-meta-cto-explains-what-happened?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-21, 07:25:21](https://lobste.rs/s/lr8llu/diary_datum_2005) - [The Diary of a Datum (2005)](https://dominoweb.draco.res.ibm.com/reports/rc23703.pdf)
* [2025-09-21, 07:19:59](https://news.ycombinator.com/item?id=45320759) - [Universities should be more than toll gates](https://www.waliddib.com/posts/universities-should-be-more-than-toll-gates/)
* [2025-09-21, 06:01:49](https://news.ycombinator.com/item?id=45320431) - [Vibe coding cleanup as a service](https://donado.co/en/articles/2025-09-16-vibe-coding-cleanup-as-a-service/)
* [2025-09-21, 04:22:00](https://soylentnews.org/article.pl?sid=25/09/20/0333256&amp;from=rss) - [IG Nobel 2025 winners](https://soylentnews.org/article.pl?sid=25/09/20/0333256&amp;from=rss)
* [2025-09-21, 03:46:07](https://news.ycombinator.com/item?id=45319876) - [Spectral Labs releases SGS-1: the first generative model for structured CAD](https://www.spectrallabs.ai/research/SGS-1)
* [2025-09-21, 03:44:00](https://tech.slashdot.org/story/25/09/21/0056225/pirg-other-groups-criticize-microsofts-plan-to-discontinue-support-for-windows-10?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [PIRG, Other Groups Criticize Microsoft&apos;s Plan to Discontinue Support for Windows 10](https://tech.slashdot.org/story/25/09/21/0056225/pirg-other-groups-criticize-microsofts-plan-to-discontinue-support-for-windows-10?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-21, 03:35:19](https://lobste.rs/s/xttzhv/9_things_every_fresh_graduate_should_know) - [9 Things Every Fresh Graduate Should Know About Software Performance](https://johnnysswlab.com/9-things-every-fresh-graduate-should-know-about-software-performance/)
* [2025-09-21, 03:09:47](https://news.ycombinator.com/item?id=45319690) - [iFixit iPhone Air teardown](https://www.ifixit.com/News/113171/iphone-air-teardown)
* [2025-09-21, 02:09:43](https://news.ycombinator.com/item?id=45319399) - [The bloat of edge-case first libraries](https://43081j.com/2025/09/bloat-of-edge-case-libraries)
* [2025-09-21, 01:34:00](https://news.slashdot.org/story/25/09/20/029249/google-temporarily-pauses-ai-powered-homework-helper-button-in-chrome-over-cheating-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Temporarily Pauses AI-Powered &apos;Homework Helper&apos; Button in Chrome Over Cheating Concerns](https://news.slashdot.org/story/25/09/20/029249/google-temporarily-pauses-ai-powered-homework-helper-button-in-chrome-over-cheating-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-21, 00:56:59](https://news.ycombinator.com/item?id=45319062) - [AI was supposed to help juniors shine. why does it mostly make seniors stronger?](https://elma.dev/notes/ai-makes-seniors-stronger/)
* [2025-09-21, 00:06:38](https://news.ycombinator.com/item?id=45318798) - [In defence of swap: common misconceptions (2018)](https://chrisdown.name/2018/01/02/in-defence-of-swap.html)
* [2025-09-20, 23:38:00](https://soylentnews.org/article.pl?sid=25/09/19/0459228&amp;from=rss) - [Education Report Calling for Ethical AI Use Contains Over 15 Fake Sources](https://soylentnews.org/article.pl?sid=25/09/19/0459228&amp;from=rss)
* [2025-09-20, 23:22:00](https://science.slashdot.org/story/25/09/20/0254249/interlune-signs-300m-deal-to-harvest-helium-3-for-quantum-computing-from-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Interlune Signs $300M Deal to Harvest Helium-3 for Quantum Computing from the Moon](https://science.slashdot.org/story/25/09/20/0254249/interlune-signs-300m-deal-to-harvest-helium-3-for-quantum-computing-from-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 22:22:00](https://tech.slashdot.org/story/25/09/20/2215203/6000-evacuated-during-defusing-of-american-wwii-bomb-found-buried-in-hong-kong?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [6,000 Evacuated During Defusing of American WWII Bomb Found Buried in Hong Kong](https://tech.slashdot.org/story/25/09/20/2215203/6000-evacuated-during-defusing-of-american-wwii-bomb-found-buried-in-hong-kong?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 21:22:00](https://tech.slashdot.org/story/25/09/20/2119232/cyberattack-delays-flights-at-several-of-europes-major-airports?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cyberattack Delays Flights at Several of Europe&apos;s Major Airports](https://tech.slashdot.org/story/25/09/20/2119232/cyberattack-delays-flights-at-several-of-europes-major-airports?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 21:05:14](https://lobste.rs/s/fffvzx/brief_history_threads_threading) - [A brief history of threads and threading](https://eclecticlight.co/2025/09/20/a-brief-history-of-threads-and-threading/)
* [2025-09-20, 21:04:47](https://news.ycombinator.com/item?id=45317527) - [$2 WeAct Display FS adds a 0.96-inch USB information display to your computer](https://www.cnx-software.com/2025/09/18/2-weact-display-fs-adds-a-0-96-inch-usb-information-display-to-your-computer/)
* [2025-09-20, 20:46:01](https://lobste.rs/s/a8ey4q/napkin_project) - [The Napkin project](https://web.evanchen.cc/napkin.html)
* [2025-09-20, 19:50:00](https://science.slashdot.org/story/25/09/20/1927253/doomed-cannibal-star-could-explode-in-a-supernova-visible-during-day?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Doomed &apos;Cannibal&apos; Star Could Explode In a Supernova Visible During Day](https://science.slashdot.org/story/25/09/20/1927253/doomed-cannibal-star-could-explode-in-a-supernova-visible-during-day?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 19:37:21](https://lobste.rs/s/lin8d0/self_reliant_programmer_manifesto) - [self-reliant programmer manifesto](https://yobibyte.github.io/self_reliant_programmer.html)
* [2025-09-20, 19:06:03](https://lobste.rs/s/ihggth/tv_time_machine_raspberry_pi_plays_random) - [TV Time Machine: A Raspberry Pi That Plays Random 90s TV](https://quarters.captaintouch.com/blog/posts/2025-09-20-tv-time-machine-a-raspberry-pi-that-plays-random-90s-tv.html)
* [2025-09-20, 18:51:00](https://soylentnews.org/article.pl?sid=25/09/19/0456242&amp;from=rss) - [Scientists: It&apos;s Do or Die Time for America&apos;s Primacy Exploring the Solar System](https://soylentnews.org/article.pl?sid=25/09/19/0456242&amp;from=rss)
* [2025-09-20, 18:50:00](https://slashdot.org/story/25/09/20/1847246/there-isnt-an-ai-bubble---there-are-three?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [There Isn&apos;t an AI Bubble - There Are Three](https://slashdot.org/story/25/09/20/1847246/there-isnt-an-ai-bubble---there-are-three?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 17:34:00](https://it.slashdot.org/story/25/09/20/0542237/self-replicating-worm-affected-several-hundred-npm-packages-including-crowdstrikes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Self-Replicating Worm Affected Several Hundred NPM Packages, Including CrowdStrike&apos;s](https://it.slashdot.org/story/25/09/20/0542237/self-replicating-worm-affected-several-hundred-npm-packages-including-crowdstrikes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 17:25:58](https://news.ycombinator.com/item?id=45315312) - [Designing NotebookLM](https://jasonspielman.com/notebooklm)
* [2025-09-20, 16:34:00](https://developers.slashdot.org/story/25/09/20/0449252/c-committee-prioritizes-profiles-over-rust-style-safety-model-proposal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [C++ Committee Prioritizes &apos;Profiles&apos; Over Rust-Style Safety Model Proposal](https://developers.slashdot.org/story/25/09/20/0449252/c-committee-prioritizes-profiles-over-rust-style-safety-model-proposal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 16:12:56](https://news.ycombinator.com/item?id=45314592) - [Ultrasonic Chef&apos;s Knife](https://seattleultrasonics.com/)
* [2025-09-20, 15:34:00](https://science.slashdot.org/story/25/09/20/0332242/study-links-microplastic-exposure-to-alzheimers-disease-in-mice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Study Links Microplastic Exposure to Alzheimer&apos;s Disease in Mice](https://science.slashdot.org/story/25/09/20/0332242/study-links-microplastic-exposure-to-alzheimers-disease-in-mice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 14:34:00](https://news.slashdot.org/story/25/09/20/0120220/is-openais-video-generating-tool-sora-scraping-unauthorized-youtube-clips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is OpenAI&apos;s  Video-Generating Tool &apos;Sora&apos; Scraping Unauthorized YouTube Clips?](https://news.slashdot.org/story/25/09/20/0120220/is-openais-video-generating-tool-sora-scraping-unauthorized-youtube-clips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 14:26:11](https://lobste.rs/s/pzhqdb/vulkan_graphics_ocaml_vs_c) - [Vulkan graphics in OCaml vs C](https://roscidus.com/blog/blog/2025/09/20/ocaml-vulkan/)
* [2025-09-20, 14:07:00](https://soylentnews.org/article.pl?sid=25/09/19/0444244&amp;from=rss) - [Nobody Wanted This: Samsung Fridges are Getting Ads](https://soylentnews.org/article.pl?sid=25/09/19/0444244&amp;from=rss)
* [2025-09-20, 13:23:59](https://lobste.rs/s/quagwg/git_introduce_rust_announce_it_will) - [Git: Introduce Rust and announce that it will become mandatory](https://lore.kernel.org/git/20250904-b4-pks-rust-breaking-change-v1-0-3af1d25e0be9@pks.im/)
* [2025-09-20, 12:52:45](https://lobste.rs/s/c4pn1d/nvim_ctagtap_neovim_plugin_for_tap) - [nvim-ctagtap: Neovim plugin for tap-to-navigate ctags, single-click symbol navigation and smart back-navigation (for mobile reading)](https://github.com/h2337/nvim-ctagtap)
* [2025-09-20, 12:20:56](https://lobste.rs/s/8kj7sz/protect_your_keys_with_secure_enclave) - [Protect your keys with the Secure Enclave](https://octet-stream.net/b/scb/2025-09-16-protect-your-keys-with-the-secure-enclave.html)
* [2025-09-20, 12:01:00](https://news.slashdot.org/story/25/09/19/203223/librarians-are-being-asked-to-find-ai-hallucinated-books?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Librarians Are Being Asked To Find AI-Hallucinated Books](https://news.slashdot.org/story/25/09/19/203223/librarians-are-being-asked-to-find-ai-hallucinated-books?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 11:20:04](https://news.ycombinator.com/item?id=45312326) - [FLX1s phone is launched](https://furilabs.com/flx1s-is-launched/)
* [2025-09-20, 10:55:53](https://news.ycombinator.com/item?id=45312202) - [Writing a competitive BZip2 encoder in Ada from scratch in a few days – part 3](https://gautiersblog.blogspot.com/2025/09/writing-competitive-bzip2-encoder-in.html)
* [2025-09-20, 10:31:00](https://news.slashdot.org/story/25/09/19/2026214/hard-fought-treaty-to-protect-ocean-life-clears-a-final-hurdle?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hard-Fought Treaty To Protect Ocean Life Clears a Final Hurdle](https://news.slashdot.org/story/25/09/19/2026214/hard-fought-treaty-to-protect-ocean-life-clears-a-final-hurdle?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 09:21:00](https://soylentnews.org/article.pl?sid=25/09/19/0435227&amp;from=rss) - [L.A. Man Sentenced to 14 Days in Prison for Accidentally Crashing Drone Into Firefighting Plane](https://soylentnews.org/article.pl?sid=25/09/19/0435227&amp;from=rss)
* [2025-09-20, 07:24:25](https://lobste.rs/s/db2pcs/linux_6_17_file_system_benchmarks) - [Linux 6.17 File-System Benchmarks, Including OpenZFS &amp; Bcachefs](https://www.phoronix.com/review/linux-617-filesystems/)
* [2025-09-20, 04:35:00](https://soylentnews.org/article.pl?sid=25/09/19/0433202&amp;from=rss) - [Feds Launch Investigation Into Faulty Tesla Doors](https://soylentnews.org/article.pl?sid=25/09/19/0433202&amp;from=rss)
* [2025-09-20, 03:50:32](https://lobste.rs/s/a0zy9r/introducing_forklift_certified_license) - [Introducing the Forklift Certified License](https://aria.dog/barks/forklift-certified-license/)
* [2025-09-20, 03:42:09](https://lobste.rs/s/oxdyns/overview_modern_css_features_2025) - [Overview of Modern CSS Features (2025 Edition)](https://frontendmasters.com/blog/what-you-need-to-know-about-modern-css-2025-edition/)
* [2025-09-20, 01:26:12](https://lobste.rs/s/js25k9/is_zig_s_new_writer_unsafe) - [Is Zig&apos;s New Writer Unsafe?](https://www.openmymind.net/Is-Zigs-New-Io-Unsafe/)
* [2025-09-19, 23:52:00](https://soylentnews.org/article.pl?sid=25/09/19/0423216&amp;from=rss) - [Ban Social Media for Under 15s, Says French Report Warning of TikTok Dangers](https://soylentnews.org/article.pl?sid=25/09/19/0423216&amp;from=rss)
* [2025-09-19, 21:44:12](https://lobste.rs/s/fwz25e/be_simple) - [Be Simple](https://corrode.dev/blog/simple/)
* [2025-09-19, 20:37:55](https://lobste.rs/s/e69mbb/blots_programming_language) - [The Blots Programming Language](https://blots-lang.org/)
* [2025-09-19, 19:03:00](https://soylentnews.org/article.pl?sid=25/09/19/0416215&amp;from=rss) - [Latest FSR 4 Source Code &apos;Leak&apos; Lets You Run AMD&apos;s AI Upscaling Tech on Nearly Any GPU](https://soylentnews.org/article.pl?sid=25/09/19/0416215&amp;from=rss)
* [2025-09-19, 14:16:00](https://soylentnews.org/article.pl?sid=25/09/19/048212&amp;from=rss) - [Has the Apple iPhone Air Killed Off the Sim Card?](https://soylentnews.org/article.pl?sid=25/09/19/048212&amp;from=rss)
* [2025-09-19, 09:29:00](https://soylentnews.org/article.pl?sid=25/09/18/185203&amp;from=rss) - [New Bill Aims to Block Both Online Adult Content and VPNs](https://soylentnews.org/article.pl?sid=25/09/18/185203&amp;from=rss)
* [2025-09-19, 08:26:41](https://lobste.rs/s/jin16z/ruby_central_s_attack_on_rubygems) - [Ruby Central’s Attack on RubyGems](https://pup-e.com/goodbye-rubygems.pdf)
* [2025-09-19, 04:41:00](https://soylentnews.org/article.pl?sid=25/09/17/2233242&amp;from=rss) - [The Oldest Known Mummies Have Been Found](https://soylentnews.org/article.pl?sid=25/09/17/2233242&amp;from=rss)
* [2025-09-18, 23:56:00](https://soylentnews.org/article.pl?sid=25/09/17/1730237&amp;from=rss) - [GNOME 49 Arrives This Week](https://soylentnews.org/article.pl?sid=25/09/17/1730237&amp;from=rss)
* [2025-09-18, 21:53:03](https://news.ycombinator.com/item?id=45295475) - [Mesda Craftsman Database](http://test0.dlibrary.org/en/nodes/4066-craftsman-database)
* [2025-09-18, 19:12:00](https://soylentnews.org/article.pl?sid=25/09/17/1723242&amp;from=rss) - [China Bans Nvidia&apos;s AI Chips](https://soylentnews.org/article.pl?sid=25/09/17/1723242&amp;from=rss)
* [2025-09-18, 18:05:58](https://news.ycombinator.com/item?id=45292915) - [Lidar, optical distance and time of flight sensors](https://ams-osram.com/innovation/technology/depth-and-3d-sensing/lidar-optical-distance-and-time-of-flight-sensors)
* [2025-09-18, 17:57:20](https://news.ycombinator.com/item?id=45292821) - [Ask HN: How were graphics card drivers programmed back in the 90s?](https://news.ycombinator.com/item?id=45292821)
* [2025-09-18, 17:24:22](https://news.ycombinator.com/item?id=45292404) - [Newton for Ladies (1737) – Newtonianism vs. Cartesianism](https://www.whipplelib.hps.cam.ac.uk/special/exhibitions-and-displays/exhibitions-archive/newton-and-newtonianism/ladies)
* [2025-09-18, 16:47:15](https://news.ycombinator.com/item?id=45291903) - [Were RNNs all we needed? A GPU programming perspective](https://dhruvmsheth.github.io/projects/gpu_pogramming_curnn/)
* [2025-09-18, 14:27:00](https://soylentnews.org/article.pl?sid=25/09/17/1720215&amp;from=rss) - [Modular Nuclear Reactors Sound Great, but Won&apos;t be Ready Any Time Soon](https://soylentnews.org/article.pl?sid=25/09/17/1720215&amp;from=rss)
* [2025-09-18, 13:04:27](https://news.ycombinator.com/item?id=45289150) - [Teardown of Apple 40W dynamic power adapter with 60W max](https://www.chargerlab.com/teardown-of-apple-40w-dynamic-power-adapter-with-60w-max-a3365/)
* [2025-09-18, 09:43:00](https://soylentnews.org/article.pl?sid=25/09/17/1714242&amp;from=rss) - [&apos;Beyond EUV&apos; Chipmaking Tech Pushes Soft X-Ray Lithography Closer to Challenging Hyper-NA EUV](https://soylentnews.org/article.pl?sid=25/09/17/1714242&amp;from=rss)
* [2025-09-18, 09:22:39](https://news.ycombinator.com/item?id=45287474) - [Scream cipher](https://sethmlarson.dev/scream-cipher)
* [2025-09-18, 06:43:41](https://news.ycombinator.com/item?id=45286302) - [Gluco data handler: Receive and visualize glucose data on Android](https://github.com/pachi81/GlucoDataHandler)
* [2025-09-18, 04:59:00](https://soylentnews.org/article.pl?sid=25/09/17/0421208&amp;from=rss) - [Northrop Grumman&apos;s New Spacecraft is a Real Chonker](https://soylentnews.org/article.pl?sid=25/09/17/0421208&amp;from=rss)
* [2025-09-18, 04:26:41](https://news.ycombinator.com/item?id=45285387) - [Why, as a responsible adult, SimCity 2000 hits differently](https://arstechnica.com/gaming/2025/09/thirty-years-later-simcity-2000-hasnt-changed-but-i-have/)
* [2025-09-18, 01:07:26](https://news.ycombinator.com/item?id=45283637) - [Learning Languages with the Help of Algorithms](https://www.johndcook.com/blog/2025/09/17/learning-languages-with-the-help-of-algorithms/)
* [2025-09-18, 00:11:00](https://soylentnews.org/article.pl?sid=25/09/17/0413255&amp;from=rss) - [Chinese AI Chip Market: Nvidia Violates Antitrust and Tencent Produces Locally](https://soylentnews.org/article.pl?sid=25/09/17/0413255&amp;from=rss)
* [2025-09-17, 21:47:42](https://news.ycombinator.com/item?id=45281782) - [Hololuminescent Display](https://lookingglassfactory.com/hld-overview)
* [2025-09-17, 19:28:00](https://soylentnews.org/article.pl?sid=25/09/17/040212&amp;from=rss) - [Hacker Breaks Into on-Campus Smart Washing Machines](https://soylentnews.org/article.pl?sid=25/09/17/040212&amp;from=rss)
* [2025-09-17, 15:30:51](https://news.ycombinator.com/item?id=45277052) - [Knitted Anatomy](https://www.knitted-anatomy.at/cardiovascular-system/)
* [2025-09-17, 14:40:00](https://soylentnews.org/article.pl?sid=25/09/17/0355211&amp;from=rss) - [Stealth Radio Hides Signal in Background Noise to Protect Drone Pilots](https://soylentnews.org/article.pl?sid=25/09/17/0355211&amp;from=rss)
* [2025-09-17, 09:59:00](https://soylentnews.org/article.pl?sid=25/09/16/1159239&amp;from=rss) - [The Varnish Cache Project Will Soon be Called the Vinyl Cache Project](https://soylentnews.org/article.pl?sid=25/09/16/1159239&amp;from=rss)
* [2025-09-17, 05:15:00](https://soylentnews.org/article.pl?sid=25/09/16/1158208&amp;from=rss) - [Boeing Faces $3.1M Fine for Door Plug Blowout, Hundreds of Safety Violations](https://soylentnews.org/article.pl?sid=25/09/16/1158208&amp;from=rss)
