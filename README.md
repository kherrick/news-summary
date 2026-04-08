# [News Summary](https://kherrick.github.io/news-summary/)

## Technological Innovations

* [Planet Labs Tests AI-Powered Object Detection On Satellite](https://tech.slashdot.org/story/26/04/08/0145220/planet-labs-tests-ai-powered-object-detection-on-satellite?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Planet Labs is experimenting with new AI technologies that enable advanced object detection from satellite imagery.

* [China Flies World&apos;s First Megawatt-Class Hydrogen Turboprop Engine](https://tech.slashdot.org/story/26/04/06/2242242/china-flies-worlds-first-megawatt-class-hydrogen-turboprop-engine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A groundbreaking hydrogen-powered turboprop engine has been tested in China, marking a milestone in aviation technology.

* [Chrome Is Finally Getting Vertical Tabs](https://tech.slashdot.org/story/26/04/07/2018212/chrome-is-finally-getting-vertical-tabs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Google announces the long-awaited addition of vertical tabs for its Chrome browser, aiming for improved user navigation.

## Cybersecurity Concerns

* [Russian Government Hackers Broke Into Thousands of Home Routers To Steal Passwords](https://it.slashdot.org/story/26/04/07/2326240/russian-government-hackers-broke-into-thousands-of-home-routers-to-steal-passwords?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Reports claim Russian state hackers have compromised numerous home routers to harvest passwords.

* [Nix security advisory: Privilege escalation via symlink following during FOD output registration](https://discourse.nixos.org/t/nix-security-advisory-privilege-escalation-via-symlink-following-during-fod-output-registration/76900) - A critical security advisory warns of privilege escalation vulnerabilities in Nix due to symlink following.

* [LinkedIn Faces Spying Allegations Over Browser Extension Scanning](https://yro.slashdot.org/story/26/04/06/2227247/linkedin-faces-spying-allegations-over-browser-extension-scanning?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - LinkedIn faces scrutiny over alleged scanning of user-installed browser extensions for data collection.

* [OpenSSH begins warning for non-PQC key exchanges](https://www.openssh.com/pq.html) - OpenSSH is now flagging the use of non-post quantum cryptography key exchanges, signaling a shift toward more secure standards.

## AI and Machine Learning Developments

* [Anthropic Unveils &apos;Claude Mythos&apos;, Powerful AI With Major Cyber Implications](https://it.slashdot.org/story/26/04/07/2115208/anthropic-unveils-claude-mythos-powerful-ai-with-major-cyber-implications?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The AI firm Anthropic launches 'Claude Mythos,' which could influence future cybersecurity.

* [Google&apos;s New Compression Drastically Shrinks AI Memory Use While Quietly Speeding Up Performance](https://soylentnews.org/article.pl?sid=26/04/05/0859242&amp;from=rss) - Google's latest compression techniques promise to reduce AI memory usage while enhancing processing speeds.

## Space and Science

* [Astronomers Say Recent Rash of Meteor Sightings ‘Warrants Serious Investigation’](https://soylentnews.org/article.pl?sid=26/04/06/2246200&amp;from=rss) - A surge in meteor sightings has caught the attention of astronomers, prompting calls for further investigation.

* [Lunar Flyby](https://www.nasa.gov/gallery/lunar-flyby/) - NASA showcases stunning imagery captured from a recent flyby of the Moon, captivating space enthusiasts worldwide.

## Historical and Cultural Insights

* [Democracy Was Not Just a Greco-Roman Affair in the Ancient World](https://soylentnews.org/article.pl?sid=26/04/06/2247253&amp;from=rss) - A new study challenges the common notion that democracy originated only in Greco-Roman societies.

* [A truck driver spent 20 years making a scale model of every building in NYC](https://www.smithsonianmag.com/smart-news/a-truck-drive-spent-20-years-making-this-astonishing-scale-model-of-every-single-building-in-new-york-city-180988443/) - A truck driver meticulously crafted a detailed scale model of all buildings in New York City over two decades.

* [The Image Boards of Hayao Miyazaki](https://animationobsessive.substack.com/p/the-image-boards-of-hayao-miyazaki) - Explore the masterpiece image boards of legendary filmmaker Hayao Miyazaki that have influenced generations.

## Environmental Awareness and Sustainability

* [Data Centers Causing Huge Temperature Spikes for Miles Around Them, Study Suggests](https://soylentnews.org/article.pl?sid=26/04/04/0228218&amp;from=rss) - New research highlights the environmental impact of data centers, linking them to localized temperature increases.

* [Cloudflare Fast-Tracks Post-Quantum Rollout To 2029](https://tech.slashdot.org/story/26/04/07/1648211/cloudflare-fast-tracks-post-quantum-rollout-to-2029?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Cloudflare accelerates its timeline for post-quantum cryptography implementation to prepare for future cybersecurity needs.

## Unusual News and Developments

* [Cambodia unveils statue to honour famous landmine-sniffing rat](https://www.bbc.com/news/articles/c0rx7xzd10xo) - Cambodia celebrates a rodent hero with a statue commemorating its contribution to landmine detection.

* [Native Americans had dice 12k years ago](https://www.nbcnews.com/science/science-news/native-americans-dice-games-probability-study-rcna266426) - Researchers discover evidence of dice games played by Native Americans as far back as 12,000 years ago.

* [RIP Mac Pro: Apple Officially Kills its Tower Computer](https://soylentnews.org/article.pl?sid=26/04/05/0335237&amp;from=rss) - Apple discontinues its iconic tower Mac Pro, marking the end of an era in personal computing.

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

* [2026-04-08, 07:00:00](https://tech.slashdot.org/story/26/04/08/0145220/planet-labs-tests-ai-powered-object-detection-on-satellite?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Planet Labs Tests AI-Powered Object Detection On Satellite](https://tech.slashdot.org/story/26/04/08/0145220/planet-labs-tests-ai-powered-object-detection-on-satellite?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-08, 06:34:54](https://news.ycombinator.com/item?id=47686187) - [Sonnet 4.6 Elevated Rate of Errors](https://status.claude.com/incidents/lhws0phdvzz3)
* [2026-04-08, 06:03:04](https://lobste.rs/s/f3qxk6/1subml_plan_vs_reality) - [1SubML: Plan vs Reality](https://blog.polybdenum.com/2026/04/05/1subml-plan-vs-reality.html)
* [2026-04-08, 05:56:00](https://soylentnews.org/article.pl?sid=26/04/06/2247253&amp;from=rss) - [Democracy Was Not Just a Greco-Roman Affair in the Ancient World](https://soylentnews.org/article.pl?sid=26/04/06/2247253&amp;from=rss)
* [2026-04-08, 05:34:08](https://news.ycombinator.com/item?id=47685739) - [Revision Demoparty 2026: Razor1911 [video]](https://www.youtube.com/watch?v=Lw4W9V57SKs&amp;t=5716s)
* [2026-04-08, 04:41:53](https://lobste.rs/s/3yvhkz/rfc_jsir_high_level_ir_for_javascript) - [[RFC] JSIR: A High-Level IR for JavaScript](https://discourse.llvm.org/t/rfc-jsir-a-high-level-ir-for-javascript/90456)
* [2026-04-08, 03:30:00](https://it.slashdot.org/story/26/04/07/2326240/russian-government-hackers-broke-into-thousands-of-home-routers-to-steal-passwords?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Russian Government Hackers Broke Into Thousands of Home Routers To Steal Passwords](https://it.slashdot.org/story/26/04/07/2326240/russian-government-hackers-broke-into-thousands-of-home-routers-to-steal-passwords?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-08, 03:03:33](https://news.ycombinator.com/item?id=47684514) - [Protect your shed](https://dylanbutler.dev/blog/protect-your-shed/)
* [2026-04-08, 03:02:56](https://news.ycombinator.com/item?id=47684506) - [LLM scraper bots are overloading acme.com&apos;s HTTPS server](http://acme.com/updates/archive/229.html)
* [2026-04-08, 01:12:00](https://soylentnews.org/article.pl?sid=26/04/06/2246200&amp;from=rss) - [Astronomers Say Recent Rash of Meteor Sightings ‘Warrants Serious Investigation’](https://soylentnews.org/article.pl?sid=26/04/06/2246200&amp;from=rss)
* [2026-04-08, 00:59:05](https://news.ycombinator.com/item?id=47683376) - [JSIR: A High-Level IR for JavaScript](https://discourse.llvm.org/t/rfc-jsir-a-high-level-ir-for-javascript/90456)
* [2026-04-07, 23:36:15](https://news.ycombinator.com/item?id=47682719) - [Xilem – An experimental Rust native UI framework](https://github.com/linebender/xilem)
* [2026-04-07, 23:00:00](https://hardware.slashdot.org/story/26/04/07/2157238/apple-faces-massive-dilemma-with-success-of-the-macbook-neo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Faces &apos;Massive Dilemma&apos; With Success of the MacBook Neo](https://hardware.slashdot.org/story/26/04/07/2157238/apple-faces-massive-dilemma-with-success-of-the-macbook-neo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-07, 22:41:54](https://lobste.rs/s/lwdzn1/nix_security_advisory_privilege) - [Nix security advisory: Privilege escalation via symlink following during FOD output registration](https://discourse.nixos.org/t/nix-security-advisory-privilege-escalation-via-symlink-following-during-fod-output-registration/76900)
* [2026-04-07, 22:41:02](https://news.ycombinator.com/item?id=47682276) - [US and Iran agree to provisional ceasefire](https://www.theguardian.com/us-news/2026/apr/07/trump-iran-war-ceasefire)
* [2026-04-07, 22:00:00](https://it.slashdot.org/story/26/04/07/2115208/anthropic-unveils-claude-mythos-powerful-ai-with-major-cyber-implications?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Unveils &apos;Claude Mythos&apos;, Powerful AI With Major Cyber Implications](https://it.slashdot.org/story/26/04/07/2115208/anthropic-unveils-claude-mythos-powerful-ai-with-major-cyber-implications?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-07, 21:58:48](https://lobste.rs/s/khf0ye/all_string_types) - [All of the String types](https://lambdalemon.gay/posts/string-types)
* [2026-04-07, 21:00:00](https://tech.slashdot.org/story/26/04/07/2018212/chrome-is-finally-getting-vertical-tabs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chrome Is Finally Getting Vertical Tabs](https://tech.slashdot.org/story/26/04/07/2018212/chrome-is-finally-getting-vertical-tabs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-07, 20:42:37](https://news.ycombinator.com/item?id=47681112) - [Show HN: An interactive map of Tolkien&apos;s Middle-earth](https://middle-earth-interactive-map.web.app/)
* [2026-04-07, 20:28:00](https://soylentnews.org/article.pl?sid=26/04/05/0859242&amp;from=rss) - [Google&apos;s New Compression Drastically Shrinks AI Memory Use While Quietly Speeding Up Performance](https://soylentnews.org/article.pl?sid=26/04/05/0859242&amp;from=rss)
* [2026-04-07, 20:24:13](https://lobste.rs/s/m5ufxm/blackholing_my_email) - [Blackholing My Email](https://www.johnsto.co.uk/blog/blackholing-my-email/)
* [2026-04-07, 20:05:22](https://lobste.rs/s/bgvhjs/no_js_web_irc_client_uses_forms_persistent) - [No-JS web IRC client that uses forms and a persistent HTTP connection](https://github.com/dgl/cgiirc/)
* [2026-04-07, 20:00:00](https://yro.slashdot.org/story/26/04/07/1750202/supreme-court-wipes-piracy-liability-verdict-against-grande-communications?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Supreme Court Wipes Piracy Liability Verdict Against Grande Communications](https://yro.slashdot.org/story/26/04/07/1750202/supreme-court-wipes-piracy-liability-verdict-against-grande-communications?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-07, 19:52:54](https://lobste.rs/s/tok8pz/s3_files_changing_face_s3) - [S3 Files and the changing face of S3](https://www.allthingsdistributed.com/2026/04/s3-files-and-the-changing-face-of-s3.html)
* [2026-04-07, 19:44:01](https://news.ycombinator.com/item?id=47680404) - [S3 Files](https://www.allthingsdistributed.com/2026/04/s3-files-and-the-changing-face-of-s3.html)
* [2026-04-07, 19:37:05](https://news.ycombinator.com/item?id=47680309) - [Show HN: Gemma 4 Multimodal Fine-Tuner for Apple Silicon](https://github.com/mattmireles/gemma-tuner-multimodal)
* [2026-04-07, 19:19:09](https://lobste.rs/s/enkaal/last_quiet_thing) - [The Last Quiet Thing](https://www.terrygodier.com/the-last-quiet-thing)
* [2026-04-07, 19:00:00](https://tech.slashdot.org/story/26/04/07/1717240/testing-suggests-googles-ai-overviews-tells-millions-of-lies-per-hour?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Testing Suggests Google&apos;s AI Overviews Tells Millions of Lies Per Hour](https://tech.slashdot.org/story/26/04/07/1717240/testing-suggests-googles-ai-overviews-tells-millions-of-lies-per-hour?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-07, 18:21:32](https://lobste.rs/s/aw2jr4/assessing_claude_mythos_preview_s) - [Assessing Claude Mythos Preview’s cybersecurity capabilities](https://red.anthropic.com/2026/mythos-preview/)
* [2026-04-07, 18:18:36](https://news.ycombinator.com/item?id=47679258) - [System Card: Claude Mythos Preview [pdf]](https://www-cdn.anthropic.com/53566bf5440a10affd749724787c8913a2ae0841.pdf)
* [2026-04-07, 18:09:34](https://news.ycombinator.com/item?id=47679121) - [Project Glasswing: Securing critical software for the AI era](https://www.anthropic.com/glasswing)
* [2026-04-07, 18:00:00](https://hardware.slashdot.org/story/26/04/07/175246/anthropic-reveals-30-billion-run-rate-plans-to-use-35gw-of-new-google-ai-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Reveals $30 Billion Run Rate, Plans To Use 3.5GW of New Google AI Chips](https://hardware.slashdot.org/story/26/04/07/175246/anthropic-reveals-30-billion-run-rate-plans-to-use-35gw-of-new-google-ai-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-07, 17:23:43](https://news.ycombinator.com/item?id=47678573) - [Cambodia unveils statue to honour famous landmine-sniffing rat](https://www.bbc.com/news/articles/c0rx7xzd10xo)
* [2026-04-07, 17:00:00](https://tech.slashdot.org/story/26/04/07/1648211/cloudflare-fast-tracks-post-quantum-rollout-to-2029?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cloudflare Fast-Tracks Post-Quantum Rollout To 2029](https://tech.slashdot.org/story/26/04/07/1648211/cloudflare-fast-tracks-post-quantum-rollout-to-2029?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-07, 16:55:42](https://lobste.rs/s/8fuoqd/wet_sidewalks_odd_numbers) - [Wet Sidewalks and Odd Numbers](https://philcrissman.net/posts/wet-sidewalks-and-odd-numbers/)
* [2026-04-07, 16:33:57](https://news.ycombinator.com/item?id=47677885) - [Rescuing old printers with an in-browser Linux VM bridged to WebUSB over USB/IP](https://printervention.app/details)
* [2026-04-07, 16:32:15](https://news.ycombinator.com/item?id=47677853) - [GLM-5.1: Towards Long-Horizon Tasks](https://z.ai/blog/glm-5.1)
* [2026-04-07, 16:21:50](https://lobste.rs/s/ltdyov/great_nix_flake_check) - [The Great Nix Flake Check](https://goldstein.lol/posts/great-nix-flake-check/)
* [2026-04-07, 16:00:00](https://news.slashdot.org/story/26/04/06/230222/new-revelations-reignite-crypto-scandal-involving-argentinas-president-milei?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Revelations Reignite Crypto Scandal Involving Argentina&apos;s President Milei](https://news.slashdot.org/story/26/04/06/230222/new-revelations-reignite-crypto-scandal-involving-argentinas-president-milei?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-07, 15:49:16](https://lobste.rs/s/jz63s2/defuddle_get_main_content_any_page_as) - [defuddle: Get the main content of any page as Markdown](https://github.com/kepano/defuddle)
* [2026-04-07, 15:43:00](https://soylentnews.org/article.pl?sid=26/04/05/0854218&amp;from=rss) - [When Earth&apos;s Magnetic Field Took its Time Flipping](https://soylentnews.org/article.pl?sid=26/04/05/0854218&amp;from=rss)
* [2026-04-07, 15:14:48](https://lobste.rs/s/8s4tuz/two_years_valkey) - [Two Years of Valkey](https://redmonk.com/sogrady/2026/04/06/valkey-at-two/)
* [2026-04-07, 15:03:18](https://news.ycombinator.com/item?id=47676509) - [Lunar Flyby](https://www.nasa.gov/gallery/lunar-flyby/)
* [2026-04-07, 15:00:00](https://news.slashdot.org/story/26/04/06/2251200/stanford-daily-ponders-fate-of-bill-gates-namesake-building-on-april-fools-day?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Stanford Daily Ponders Fate of Bill Gates Namesake Building On April Fools&apos; Day](https://news.slashdot.org/story/26/04/06/2251200/stanford-daily-ponders-fate-of-bill-gates-namesake-building-on-april-fools-day?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-07, 14:40:14](https://lobste.rs/s/vq6o44/what_text_editor_cli_gui_are_you_using_for) - [What text editor (cli or gui) are you using for writing non-code?](https://lobste.rs/s/vq6o44/what_text_editor_cli_gui_are_you_using_for)
* [2026-04-07, 14:07:34](https://news.ycombinator.com/item?id=47675625) - [Cloudflare targets 2029 for full post-quantum security](https://blog.cloudflare.com/post-quantum-roadmap/)
* [2026-04-07, 13:39:15](https://news.ycombinator.com/item?id=47675213) - [Google open-sources experimental agent orchestration testbed Scion](https://www.infoq.com/news/2026/04/google-agent-testbed-scion/)
* [2026-04-07, 13:25:06](https://lobste.rs/s/sibep0/value_performance_oracle) - [the value of a performance oracle](https://wingolog.org/archives/2026/04/07/the-value-of-a-performance-oracle)
* [2026-04-07, 11:29:59](https://lobste.rs/s/fxmqsf/plan_9_is_uniquely_complete_operating) - [Plan 9 is a Uniquely Complete Operating System](https://posixcafe.org/blogs/2024/07/27/0/)
* [2026-04-07, 11:07:44](https://news.ycombinator.com/item?id=47673360) - [Show HN: Brutalist Concrete Laptop Stand (2024)](https://sam-burns.com/posts/concrete-laptop-stand/)
* [2026-04-07, 11:01:00](https://soylentnews.org/article.pl?sid=26/04/05/0852233&amp;from=rss) - [$500 Fiber Optic HDMI Cable Delivers Flawless 48 Gbps Performance Across a Staggering 990 Feet](https://soylentnews.org/article.pl?sid=26/04/05/0852233&amp;from=rss)
* [2026-04-07, 11:00:00](https://yro.slashdot.org/story/26/04/06/2227247/linkedin-faces-spying-allegations-over-browser-extension-scanning?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [LinkedIn Faces Spying Allegations Over Browser Extension Scanning](https://yro.slashdot.org/story/26/04/06/2227247/linkedin-faces-spying-allegations-over-browser-extension-scanning?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-07, 10:24:35](https://lobste.rs/s/4r5nkb/floating_point_from_scratch_hard_mode) - [Floating point from scratch: Hard Mode](https://essenceia.github.io/projects/floating_dragon/)
* [2026-04-07, 09:44:46](https://lobste.rs/s/edkm8d/openssh_begins_warning_for_non_pqc_key) - [OpenSSH begins warning for non-PQC key exchanges](https://www.openssh.com/pq.html)
* [2026-04-07, 09:36:02](https://lobste.rs/s/qfcxc6/cult_vibe_coding_is_insane) - [The Cult Of Vibe Coding Is Insane](https://bramcohen.com/p/the-cult-of-vibe-coding-is-insane)
* [2026-04-07, 07:58:04](https://lobste.rs/s/fibtuz/seed_beneath_snow) - [The Seed Beneath the Snow](https://eli.li/the-seed-beneath-the-snow)
* [2026-04-07, 07:00:00](https://tech.slashdot.org/story/26/04/06/2242242/china-flies-worlds-first-megawatt-class-hydrogen-turboprop-engine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Flies World&apos;s First Megawatt-Class Hydrogen Turboprop Engine](https://tech.slashdot.org/story/26/04/06/2242242/china-flies-worlds-first-megawatt-class-hydrogen-turboprop-engine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-07, 06:18:00](https://soylentnews.org/article.pl?sid=26/04/05/0849255&amp;from=rss) - [The Brain Uses Eye Movements to See in 3D](https://soylentnews.org/article.pl?sid=26/04/05/0849255&amp;from=rss)
* [2026-04-07, 05:50:20](https://lobste.rs/s/vjcymq/multi_agentic_software_development_is) - [Multi-agentic Software Development is a Distributed Systems Problem (AGI can&apos;t save you)](https://kirancodes.me/posts/log-distributed-llms.html)
* [2026-04-07, 04:07:39](https://lobste.rs/s/mvfdga/clojure_on_fennel_part_one_persistent) - [Clojure on Fennel part one: Persistent Data Structures](https://andreyor.st/posts/2026-04-07-clojure-on-fennel-part-one-persistent-data-structures/)
* [2026-04-07, 03:30:00](https://yro.slashdot.org/story/26/04/06/2214217/new-jersey-cannot-regulate-kalshis-prediction-market-us-appeals-court-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Jersey Cannot Regulate Kalshi&apos;s Prediction Market, US Appeals Court Rules](https://yro.slashdot.org/story/26/04/06/2214217/new-jersey-cannot-regulate-kalshis-prediction-market-us-appeals-court-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-07, 01:33:00](https://soylentnews.org/article.pl?sid=26/04/05/0335237&amp;from=rss) - [RIP Mac Pro: Apple Officially Kills its Tower Computer](https://soylentnews.org/article.pl?sid=26/04/05/0335237&amp;from=rss)
* [2026-04-06, 23:00:00](https://yro.slashdot.org/story/26/04/06/2154206/openai-calls-for-robot-taxes-public-wealth-fund-and-4-day-workweek-to-tackle-ai-disruption?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Calls For Robot Taxes, Public Wealth Fund, and 4-Day Workweek To Tackle AI Disruption](https://yro.slashdot.org/story/26/04/06/2154206/openai-calls-for-robot-taxes-public-wealth-fund-and-4-day-workweek-to-tackle-ai-disruption?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-06, 20:52:00](https://soylentnews.org/article.pl?sid=26/04/05/0233233&amp;from=rss) - [Pentagon Formalizes Palantir&apos;s Maven AI as a Core Military System With Multi-Year Funding](https://soylentnews.org/article.pl?sid=26/04/05/0233233&amp;from=rss)
* [2026-04-06, 19:21:34](https://lobste.rs/s/jxw4nj/downfall_enshittification_microsoft) - [The Downfall and Enshittification of Microsoft in 2026](https://caio.ca/blog/the-downfall-and-enshittification-of-microsoft.html)
* [2026-04-06, 16:23:07](https://lobste.rs/s/aqaobg/someone_good_at_css_help_my_website_design) - [Someone good at CSS help, my website design is dying](https://ahti.space/~nortti/writeups/my-website-design-is-dying.html)
* [2026-04-06, 16:20:54](https://lobste.rs/s/pfoohx/cryptography_engineer_s_perspective_on) - [A Cryptography Engineer’s Perspective on Quantum Computing Timelines](https://words.filippo.io/crqc-timeline/)
* [2026-04-06, 16:11:00](https://soylentnews.org/article.pl?sid=26/04/05/0226201&amp;from=rss) - [Claude Source Code Leaked?  But Watch Out for What You Might be Downloading](https://soylentnews.org/article.pl?sid=26/04/05/0226201&amp;from=rss)
* [2026-04-06, 11:23:00](https://soylentnews.org/article.pl?sid=26/04/05/0214222&amp;from=rss) - [Fossils Reveal Many Complex Animals Existed Before the Cambrian Explosion](https://soylentnews.org/article.pl?sid=26/04/05/0214222&amp;from=rss)
* [2026-04-06, 07:56:34](https://news.ycombinator.com/item?id=47658104) - [The Image Boards of Hayao Miyazaki](https://animationobsessive.substack.com/p/the-image-boards-of-hayao-miyazaki)
* [2026-04-06, 06:35:00](https://soylentnews.org/article.pl?sid=26/04/05/026223&amp;from=rss) - [AMD&apos;s New Desktop CPU Oozes Cache Out of All 16 Cores](https://soylentnews.org/article.pl?sid=26/04/05/026223&amp;from=rss)
* [2026-04-06, 05:22:24](https://news.ycombinator.com/item?id=47657268) - [A truck driver spent 20 years making a scale model of every building in NYC](https://www.smithsonianmag.com/smart-news/a-truck-drive-spent-20-years-making-this-astonishing-scale-model-of-every-single-building-in-new-york-city-180988443/)
* [2026-04-06, 01:54:00](https://soylentnews.org/article.pl?sid=26/04/05/021235&amp;from=rss) - [The &apos;Engineering of Addiction&apos;  - 3 Ways Meta and YouTube Are Claimed to Have Harmed  Users](https://soylentnews.org/article.pl?sid=26/04/05/021235&amp;from=rss)
* [2026-04-05, 22:32:12](https://news.ycombinator.com/item?id=47654626) - [A whole boss fight in 256 bytes](https://hellmood.111mb.de//A_whole_boss_fight_in_256_bytes.html)
* [2026-04-05, 21:04:00](https://soylentnews.org/article.pl?sid=26/04/04/0231228&amp;from=rss) - [‘Shockingly Bad’: Nissan Leaf Drivers Voice Anger Over App Shutdown](https://soylentnews.org/article.pl?sid=26/04/04/0231228&amp;from=rss)
* [2026-04-05, 20:37:55](https://news.ycombinator.com/item?id=47653642) - [Binary obfuscation used in AAA Games](https://blog.farzon.org/2026/04/binary-obfuscation-that-doesnt-kill-lto.html)
* [2026-04-05, 16:14:12](https://news.ycombinator.com/item?id=47650887) - [How to get better at guitar](https://www.jakeworth.com/posts/how-to-get-better-at-guitar/)
* [2026-04-05, 16:13:00](https://soylentnews.org/article.pl?sid=26/04/04/0228218&amp;from=rss) - [Data Centers Causing Huge Temperature Spikes for Miles Around Them, Study Suggests](https://soylentnews.org/article.pl?sid=26/04/04/0228218&amp;from=rss)
* [2026-04-05, 11:41:00](https://soylentnews.org/article.pl?sid=26/04/04/0223207&amp;from=rss) - [Security Researchers Scoured the Web and Found Hundreds of Valid API Keys](https://soylentnews.org/article.pl?sid=26/04/04/0223207&amp;from=rss)
* [2026-04-05, 06:49:00](https://soylentnews.org/article.pl?sid=26/04/03/040255&amp;from=rss) - [VitruvianOS 0.3 Debuts as Haiku-Inspired Linux OS Without X11 or Wayland](https://soylentnews.org/article.pl?sid=26/04/03/040255&amp;from=rss)
* [2026-04-05, 05:37:00](https://soylentnews.org/breakingnews/article.pl?sid=26/04/05/0541233&amp;from=rss) - [2nd Crew Member of F15E Has Been Rescued.](https://soylentnews.org/breakingnews/article.pl?sid=26/04/05/0541233&amp;from=rss)
* [2026-04-05, 02:02:00](https://soylentnews.org/article.pl?sid=26/04/03/0357220&amp;from=rss) - [Investigating 3D-Printed Metals for Aeronautical Engineering](https://soylentnews.org/article.pl?sid=26/04/03/0357220&amp;from=rss)
* [2026-04-04, 21:44:55](https://news.ycombinator.com/item?id=47643779) - [ACE on a USB-HDMI Adapter](https://blazelight.dev/blog/ms2160.mdx)
* [2026-04-04, 21:18:00](https://soylentnews.org/article.pl?sid=26/04/03/0351210&amp;from=rss) - [Apple Requires Device-Level Age Verification in the UK Now. Could the US Be Next?](https://soylentnews.org/article.pl?sid=26/04/03/0351210&amp;from=rss)
* [2026-04-04, 16:34:00](https://soylentnews.org/article.pl?sid=26/04/03/0343222&amp;from=rss) - [Artemis 2 - Roundup](https://soylentnews.org/article.pl?sid=26/04/03/0343222&amp;from=rss)
* [2026-04-04, 11:46:00](https://soylentnews.org/article.pl?sid=26/04/03/0327238&amp;from=rss) - [Sony Shuts Down Nearly Its Entire Memory Card Business Due to Flash Shortage](https://soylentnews.org/article.pl?sid=26/04/03/0327238&amp;from=rss)
* [2026-04-04, 10:08:31](https://news.ycombinator.com/item?id=47637665) - [The Clock](https://blog.senko.net/the-clock)
* [2026-04-04, 07:04:00](https://soylentnews.org/article.pl?sid=26/04/02/0226234&amp;from=rss) - [GitHub to Use User Data for AI Training by Default](https://soylentnews.org/article.pl?sid=26/04/02/0226234&amp;from=rss)
* [2026-04-04, 02:11:00](https://soylentnews.org/article.pl?sid=26/04/02/0224235&amp;from=rss) - [Quo Vadis, Humanitas?](https://soylentnews.org/article.pl?sid=26/04/02/0224235&amp;from=rss)
* [2026-04-04, 00:59:08](https://news.ycombinator.com/item?id=47634422) - [Native Americans had dice 12k years ago](https://www.nbcnews.com/science/science-news/native-americans-dice-games-probability-study-rcna266426)
