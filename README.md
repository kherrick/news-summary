# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Robotics Innovations

* [MIRA: Multiplayer Interactive World Models Trained on Rocket League](https://mira-wm.com/) - [Comments](https://news.ycombinator.com/item?id=48839355)

* [We made Grok 4.5, GPT-5.5, and Claude build the same apps](https://www.tryai.dev/blog/grok-4.5-vs-gpt-5.5-vs-claude-build-off) - [Comments](https://news.ycombinator.com/item?id=48838772)

* [Mistral's Robostral Navigate: a state of the art robotics navigation model](https://mistral.ai/news/robostral-navigate/) - [Comments](https://news.ycombinator.com/item?id=48832212)

## Right-to-Repair Movement

* [John Deere owners will get the right to repair equipment under FTC settlement](https://apnews.com/article/john-deere-right-to-repair-agriculture-equipment-cb7514ffedb95c130a976af661f2bc02) - [Comments](https://news.ycombinator.com/item?id=48838876)

* [John Deere Agrees To 10-Year Right-To-Repair Deal In FTC Antitrust Lawsuit](https://yro.slashdot.org/story/26/07/08/2049231/john-deere-agrees-to-10-year-right-to-repair-deal-in-ftc-antitrust-lawsuit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Comments](https://news.ycombinator.com/item?id=48838876)

## New Releases and Open Source Initiatives

* [Rewriting Bun in Rust](https://bun.com/blog/bun-in-rust) - [Comments](https://lobste.rs/s/6rkdik/rewriting_bun_rust)

* [Announcing TypeScript 7.0](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/) - [Comments](https://lobste.rs/s/txmyod/announcing_typescript_7_0)

* [Chatto is now open source](https://www.hmans.dev/blog/chatto-is-open-source) - [Comments](https://news.ycombinator.com/item?id=48833116)

* [Valve Releases Proton 11 With Huge Linux Gaming Improvements](https://games.slashdot.org/story/26/07/08/0713204/valve-releases-proton-11-with-huge-linux-gaming-improvements?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Comments](https://lobste.rs/s/fvpk3i/almost_always_unsigned)

## Tech Ethics and Security

* [Meta&apos;s Glasses Will Turn Off the Camera If You Tamper With the Privacy Light](https://yro.slashdot.org/story/26/07/08/1750234/metas-glasses-will-turn-off-the-camera-if-you-tamper-with-the-privacy-light?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Comments](https://yro.slashdot.org/story/26/07/08/1750234/metas-glasses-will-turn-off-the-camera-if-you-tamper-with-the-privacy-light?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [New Attack Provides One More Reason Why AI Browsers Are A Bad Idea](https://soylentnews.org/article.pl?sid=26/07/05/2151242&amp;from=rss) - [Comments](https://soylentnews.org/article.pl?sid=26/07/05/2151242&amp;from=rss)

* [GitLost: How We Tricked GitHub’s AI Agent into Leaking Private Repos](https://noma.security/blog/gitlost-how-we-tricked-githubs-ai-agent-into-leaking-private-repos/) - [Comments](https://lobste.rs/s/rcg4bo/gitlost_how_we_tricked_github_s_ai_agent)

## Extraordinary Tech Advances

* [Superconducting Thruster Harnesses Earth&apos;s Magnetic Field In First Orbital Test](https://science.slashdot.org/story/26/07/07/2327219/superconducting-thruster-harnesses-earths-magnetic-field-in-first-orbital-test?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Comments](https://science.slashdot.org/story/26/07/07/2327219/superconducting-thruster-harnesses-earths-magnetic-field-in-first-orbital-test?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Japan Releases Snowman-Like Asteroid Image After Flyby](https://science.slashdot.org/story/26/07/07/2245233/japan-releases-snowman-like-asteroid-image-after-flyby?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Comments](https://science.slashdot.org/story/26/07/07/2245233/japan-releases-snowman-like-asteroid-image-after-flyby?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [The Weirdness of Neutrinos Could Completely Rewrite Particle Physics](https://soylentnews.org/article.pl?sid=26/07/05/0859246&amp;from=rss) - [Comments](https://soylentnews.org/article.pl?sid=26/07/05/0859246&amp;from=rss)

## Historical and Cultural Insights

* [New Sweden: the US&apos;s long-lost &apos;secret&apos; colony](https://www.bbc.com/travel/article/20260629-new-sweden-the-uss-long-lost-secret-colony) - [Comments](https://news.ycombinator.com/item?id=48836324)

* [My road trip with the do-gooding cactus smugglers](https://economist.com/1843/2026/03/06/my-road-trip-with-the-do-gooding-cactus-smugglers) - [Comments](https://news.ycombinator.com/item?id=48794568)

* [10 Medieval Inventions That Shaped the Modern World](https://soylentnews.org/article.pl?sid=26/07/04/0645204&amp;from=rss) - [Comments](https://soylentnews.org/article.pl?sid=26/07/04/0645204&amp;from=rss)

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

* [2026-07-09, 00:32:33](https://news.ycombinator.com/item?id=48839397) - [Remote Attestation](https://www.liamcvw.com/p/remote-attestation)
* [2026-07-09, 00:27:57](https://news.ycombinator.com/item?id=48839355) - [MIRA: Multiplayer Interactive World Models Trained on Rocket League](https://mira-wm.com/)
* [2026-07-08, 23:37:43](https://news.ycombinator.com/item?id=48838876) - [John Deere owners will get the right to repair equipment under FTC settlement](https://apnews.com/article/john-deere-right-to-repair-agriculture-equipment-cb7514ffedb95c130a976af661f2bc02)
* [2026-07-08, 23:27:14](https://news.ycombinator.com/item?id=48838772) - [We made Grok 4.5, GPT-5.5, and Claude build the same apps](https://www.tryai.dev/blog/grok-4.5-vs-gpt-5.5-vs-claude-build-off)
* [2026-07-08, 23:00:00](https://slashdot.org/story/26/07/08/2059254/a-silent-workspace-in-claude-mirrors-key-features-of-human-consciousness?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Silent Workspace In Claude Mirrors Key Features of Human Consciousness](https://slashdot.org/story/26/07/08/2059254/a-silent-workspace-in-claude-mirrors-key-features-of-human-consciousness?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-08, 22:23:24](https://lobste.rs/s/q5vga3/openmandriva_says_former_contributor) - [OpenMandriva Says Former Contributor Sabotaged Its Repositories](https://linuxiac.com/openmandriva-says-former-contributor-sabotaged-its-repositories/)
* [2026-07-08, 22:22:00](https://soylentnews.org/article.pl?sid=26/07/08/0147225&amp;from=rss) - [Kernel Anti-Cheat Digital Restrictions Management Technology Is an Overreach](https://soylentnews.org/article.pl?sid=26/07/08/0147225&amp;from=rss)
* [2026-07-08, 22:00:00](https://yro.slashdot.org/story/26/07/08/2049231/john-deere-agrees-to-10-year-right-to-repair-deal-in-ftc-antitrust-lawsuit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [John Deere Agrees To 10-Year Right-To-Repair Deal In FTC Antitrust Lawsuit](https://yro.slashdot.org/story/26/07/08/2049231/john-deere-agrees-to-10-year-right-to-repair-deal-in-ftc-antitrust-lawsuit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-08, 21:50:54](https://lobste.rs/s/6rkdik/rewriting_bun_rust) - [Rewriting Bun in Rust](https://bun.com/blog/bun-in-rust)
* [2026-07-08, 21:50:46](https://lobste.rs/s/bbhgr9/spacewasm_nasa_jpl_s_wasm_interpreter_for) - [SpaceWASM: NASA/JPL&apos;s Wasm interpreter for spacecraft sequencing](https://github.com/nasa/spacewasm)
* [2026-07-08, 21:49:59](https://news.ycombinator.com/item?id=48837877) - [Rewriting Bun in Rust](https://bun.com/blog/bun-in-rust)
* [2026-07-08, 21:43:07](https://news.ycombinator.com/item?id=48837809) - [Open Source Barware: free, local-first bar inventory software (GPLv3)](https://opensourcebarware.com)
* [2026-07-08, 21:03:51](https://news.ycombinator.com/item?id=48837396) - [Separating signal from noise in coding evaluations](https://openai.com/index/separating-signal-from-noise-coding-evaluations/)
* [2026-07-08, 21:00:00](https://yro.slashdot.org/story/26/07/08/1750234/metas-glasses-will-turn-off-the-camera-if-you-tamper-with-the-privacy-light?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta&apos;s Glasses Will Turn Off the Camera If You Tamper With the Privacy Light](https://yro.slashdot.org/story/26/07/08/1750234/metas-glasses-will-turn-off-the-camera-if-you-tamper-with-the-privacy-light?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-08, 20:37:29](https://news.ycombinator.com/item?id=48837110) - [Turning a pile of documents into a searchable useable knowledge base](https://github.com/linuxrebel/DocuBrowser)
* [2026-07-08, 20:05:42](https://news.ycombinator.com/item?id=48836778) - [FAANG Simulator](https://www.abeyk.com/escape-the-rat-race/)
* [2026-07-08, 20:00:00](https://hardware.slashdot.org/story/26/07/08/1744225/apple-says-it-will-spend-30-billion-to-design-us-made-broadcom-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Says It Will Spend $30 Billion To Design US-Made Broadcom Chips](https://hardware.slashdot.org/story/26/07/08/1744225/apple-says-it-will-spend-30-billion-to-design-us-made-broadcom-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-08, 19:26:18](https://news.ycombinator.com/item?id=48836324) - [New Sweden: the US&apos;s long-lost &apos;secret&apos; colony](https://www.bbc.com/travel/article/20260629-new-sweden-the-uss-long-lost-secret-colony)
* [2026-07-08, 19:18:26](https://news.ycombinator.com/item?id=48836233) - [Cloudflare Drop](https://www.cloudflare.com/drop/)
* [2026-07-08, 19:00:00](https://tech.slashdot.org/story/26/07/08/1728229/windows-drops-under-60-in-global-desktop-os-share?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Windows Drops Under 60% in Global Desktop OS Share](https://tech.slashdot.org/story/26/07/08/1728229/windows-drops-under-60-in-global-desktop-os-share?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-08, 18:21:53](https://news.ycombinator.com/item?id=48835439) - [OpenMandriva: Statement regarding attempted distribution sabotage](https://forum.openmandriva.org/t/statement-regarding-attempted-distribution-sabotage/8997)
* [2026-07-08, 18:00:32](https://news.ycombinator.com/item?id=48835111) - [Grok 4.5](https://x.ai/news/grok-4-5)
* [2026-07-08, 18:00:00](https://tech.slashdot.org/story/26/07/08/1643256/knockoff-browser-extension-hides-sketchy-brands-on-amazon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Knockoff&apos; Browser Extension Hides Sketchy Brands On Amazon](https://tech.slashdot.org/story/26/07/08/1643256/knockoff-browser-extension-hides-sketchy-brands-on-amazon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-08, 17:46:12](https://news.ycombinator.com/item?id=48834924) - [Show HN: Microsoft releases Flint, a visualization language for AI agents](https://microsoft.github.io/flint-chart/#/)
* [2026-07-08, 17:37:00](https://soylentnews.org/article.pl?sid=26/07/06/2010203&amp;from=rss) - [Zombie ‘Who Owns Unix?’ Lawsuit Comes Alive Again](https://soylentnews.org/article.pl?sid=26/07/06/2010203&amp;from=rss)
* [2026-07-08, 17:03:19](https://news.ycombinator.com/item?id=48834405) - [GPT‑Live](https://openai.com/index/introducing-gpt-live/)
* [2026-07-08, 17:00:00](https://apple.slashdot.org/story/26/07/08/1638234/apple-loses-eu-fight-over-app-store-gatekeeper-label?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Loses EU Fight Over App Store Gatekeeper Label](https://apple.slashdot.org/story/26/07/08/1638234/apple-loses-eu-fight-over-app-store-gatekeeper-label?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-08, 16:57:26](https://lobste.rs/s/txmyod/announcing_typescript_7_0) - [Announcing TypeScript 7.0](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/)
* [2026-07-08, 16:53:06](https://news.ycombinator.com/item?id=48834296) - [EU now one step away from reviving private message scanning rules](https://cyberinsider.com/eu-now-one-step-away-from-reviving-private-message-scanning-rules/)
* [2026-07-08, 16:23:12](https://lobste.rs/s/jfyhu4/best_webassembly_runtime_may_still_be_no) - [The best WebAssembly runtime may still be no runtime at all](https://00f.net/2026/07/08/webassembly-compilation-to-c-2026/)
* [2026-07-08, 16:19:36](https://news.ycombinator.com/item?id=48833866) - [SWE-1.7 Reach Near GPT 5.5 and Opus Intelligence](https://cognition.com/blog/swe-1-7)
* [2026-07-08, 16:06:35](https://news.ycombinator.com/item?id=48833715) - [TypeScript 7](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/)
* [2026-07-08, 16:00:00](https://games.slashdot.org/story/26/07/08/0713204/valve-releases-proton-11-with-huge-linux-gaming-improvements?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Valve Releases Proton 11 With Huge Linux Gaming Improvements](https://games.slashdot.org/story/26/07/08/0713204/valve-releases-proton-11-with-huge-linux-gaming-improvements?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-08, 15:54:22](https://lobste.rs/s/fvpk3i/almost_always_unsigned) - [Almost Always Unsigned](https://graphitemaster.github.io/aau/)
* [2026-07-08, 15:47:51](https://lobste.rs/s/nritf1/eve_online_s_carbon_engine_is_now_open) - [Eve Online&apos;s Carbon engine is now open source: Fenris Creations explains why](https://www.gamesindustry.biz/eve-onlines-carbon-engine-is-now-open-source-fenris-creations-explains-why)
* [2026-07-08, 15:35:59](https://lobste.rs/s/tbs5t3/botkit_standalone_activitypub_bots) - [BotKit: Standalone ActivityPub bots in TypeScript](https://botkit.fedify.dev/)
* [2026-07-08, 15:22:19](https://lobste.rs/s/kd2o1j/lisafpga_apple_lisa_computer) - [LisaFPGA: the Apple Lisa computer implemented inside an FPGA](https://github.com/alexthecat123/LisaFPGA)
* [2026-07-08, 15:19:50](https://news.ycombinator.com/item?id=48833116) - [Chatto is now open source](https://www.hmans.dev/blog/chatto-is-open-source)
* [2026-07-08, 15:00:00](https://science.slashdot.org/story/26/07/08/078258/mysterious-spheres-found-in-australia-are-likely-space-debris?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mysterious Spheres Found In Australia Are Likely Space Debris](https://science.slashdot.org/story/26/07/08/078258/mysterious-spheres-found-in-australia-are-likely-space-debris?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-08, 14:29:42](https://lobste.rs/s/mp42ys/obfuscated_bash_script_by_akamai_being) - [Obfuscated bash script by Akamai being supplied to consumers via retail stores](https://tris.sherliker.net/blog/obfuscated-self-evaluating-bash-script-by-cdn-akamai-being-supplied-to-consumers-via-retail-stores/)
* [2026-07-08, 14:09:17](https://news.ycombinator.com/item?id=48832212) - [Mistral&apos;s Robostral Navigate: a state of the art robotics navigation model](https://mistral.ai/news/robostral-navigate/)
* [2026-07-08, 14:04:11](https://lobste.rs/s/rcg4bo/gitlost_how_we_tricked_github_s_ai_agent) - [GitLost: How We Tricked GitHub’s AI Agent into Leaking Private Repos](https://noma.security/blog/gitlost-how-we-tricked-githubs-ai-agent-into-leaking-private-repos/)
* [2026-07-08, 14:02:44](https://lobste.rs/s/qmzekw/funding_open_source_software_without) - [Funding open-source software without compromising it](https://yorickpeterse.com/articles/funding-open-source-software-without-compromising-it/)
* [2026-07-08, 13:59:35](https://lobste.rs/s/zcyy2u/zine_0_12_0) - [Zine 0.12.0](https://zine-ssg.io/log/?v0.12.0#v0.12.0)
* [2026-07-08, 13:46:22](https://lobste.rs/s/zrvoqb/unicode_s_transliteration_rules_are) - [Unicode&apos;s Transliteration Rules Are Turing-Complete](https://seriot.ch/computation/uts35/)
* [2026-07-08, 13:20:05](https://news.ycombinator.com/item?id=48831587) - [A bug which affected only left handed users](https://shkspr.mobi/blog/2026/07/a-bug-which-only-affected-left-handed-users/)
* [2026-07-08, 13:18:03](https://news.ycombinator.com/item?id=48831565) - [Cloudflare Meerkat - Globally distributed consensus](https://blog.cloudflare.com/meerkat-introduction/)
* [2026-07-08, 13:01:25](https://lobste.rs/s/oj9lal/bug_which_only_affected_left_handed_users) - [A bug which only affected left-handed users](https://shkspr.mobi/blog/2026/07/a-bug-which-only-affected-left-handed-users/)
* [2026-07-08, 12:53:00](https://soylentnews.org/article.pl?sid=26/07/06/204247&amp;from=rss) - [Paper Mill Cancer Studies Get Double the Number of Citations as Genuine Papers](https://soylentnews.org/article.pl?sid=26/07/06/204247&amp;from=rss)
* [2026-07-08, 12:29:10](https://lobste.rs/s/wkmhrv/democratizing_abandonware) - [Democratizing Abandonware](https://geopjr.dev/blog/democratizing-abandonware)
* [2026-07-08, 11:43:45](https://lobste.rs/s/tvvosc/noiselang_where_n_5_is_dirac_delta) - [NoiseLang: Where N = 5 is a Dirac delta](https://manualmeida.dev/articles/noiselang/)
* [2026-07-08, 11:00:00](https://science.slashdot.org/story/26/07/07/2327219/superconducting-thruster-harnesses-earths-magnetic-field-in-first-orbital-test?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Superconducting Thruster Harnesses Earth&apos;s Magnetic Field In First Orbital Test](https://science.slashdot.org/story/26/07/07/2327219/superconducting-thruster-harnesses-earths-magnetic-field-in-first-orbital-test?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-08, 09:44:20](https://news.ycombinator.com/item?id=48829797) - [Unicode&apos;s transliteration rules are Turing-complete](https://seriot.ch/computation/uts35/)
* [2026-07-08, 08:58:35](https://lobste.rs/s/8dadel/accessibility_gnome) - [Accessibility in GNOME](https://blogs.gnome.org/sophieh/2026/07/07/accessibility-in-gnome/)
* [2026-07-08, 08:46:06](https://news.ycombinator.com/item?id=48829312) - [Decoding the obfuscated bash script on a Uniqlo t-shirt](https://tris.sherliker.net/blog/obfuscated-self-evaluating-bash-script-by-cdn-akamai-being-supplied-to-consumers-via-retail-stores/)
* [2026-07-08, 08:05:00](https://soylentnews.org/article.pl?sid=26/07/06/1957237&amp;from=rss) - [South Korea to Spend $1T on More Memory Chip Production and Humanoid Robots](https://soylentnews.org/article.pl?sid=26/07/06/1957237&amp;from=rss)
* [2026-07-08, 07:00:00](https://science.slashdot.org/story/26/07/07/2245233/japan-releases-snowman-like-asteroid-image-after-flyby?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Japan Releases Snowman-Like Asteroid Image After Flyby](https://science.slashdot.org/story/26/07/07/2245233/japan-releases-snowman-like-asteroid-image-after-flyby?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-08, 03:58:54](https://lobste.rs/s/y0tvll/jim_s_truetype_qr_code_font) - [Jim&apos;s TrueType QR Code Font](https://qr.jim.sh/)
* [2026-07-08, 03:30:00](https://tech.slashdot.org/story/26/07/07/2239255/meta-now-lets-anyone-use-your-instagram-photos-in-ai-images?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Now Lets Anyone Use Your Instagram Photos In AI Images](https://tech.slashdot.org/story/26/07/07/2239255/meta-now-lets-anyone-use-your-instagram-photos-in-ai-images?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-08, 03:21:00](https://soylentnews.org/article.pl?sid=26/07/05/222222&amp;from=rss) - [Google Loses Final Appeal Over $4.7 Billion EU Android Antitrust Fine](https://soylentnews.org/article.pl?sid=26/07/05/222222&amp;from=rss)
* [2026-07-08, 01:49:39](https://lobste.rs/s/8kxouk/software_engineering_interview) - [a software engineering interview question I like: computing the median](https://krisshamloo.com/blog/007)
* [2026-07-08, 01:02:05](https://lobste.rs/s/7hmu0w/openbsd_through_7_9_has_use_after_free) - [OpenBSD through 7.9 has a use-after-free allowing local privilege escalation to root (CVE-2026-57589)](https://nvd.nist.gov/vuln/detail/cve-2026-57589)
* [2026-07-07, 23:00:00](https://games.slashdot.org/story/26/07/07/1938210/doom-developer-id-software-is-reportedly-losing-half-its-staff?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Doom Developer id Software Is Reportedly Losing Half Its Staff](https://games.slashdot.org/story/26/07/07/1938210/doom-developer-id-software-is-reportedly-losing-half-its-staff?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-07, 22:44:00](https://soylentnews.org/article.pl?sid=26/07/05/2151242&amp;from=rss) - [New Attack Provides One More Reason Why AI Browsers Are A Bad Idea](https://soylentnews.org/article.pl?sid=26/07/05/2151242&amp;from=rss)
* [2026-07-07, 22:00:00](https://tech.slashdot.org/story/26/07/07/1933209/microsoft-flips-windows-backup-on-by-default-outside-the-eu?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Flips Windows Backup On By Default Outside the EU](https://tech.slashdot.org/story/26/07/07/1933209/microsoft-flips-windows-backup-on-by-default-outside-the-eu?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-07, 21:00:00](https://hardware.slashdot.org/story/26/07/07/1927217/samsung-passes-nvidia-to-become-most-profitable-company-in-the-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Samsung Passes Nvidia To Become Most Profitable Company In the World](https://hardware.slashdot.org/story/26/07/07/1927217/samsung-passes-nvidia-to-become-most-profitable-company-in-the-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-07, 18:00:00](https://soylentnews.org/article.pl?sid=26/07/05/2125258&amp;from=rss) - [Florida Bans Local Governments From Pursuing Net-Zero Emissions Goals](https://soylentnews.org/article.pl?sid=26/07/05/2125258&amp;from=rss)
* [2026-07-07, 13:13:47](https://lobste.rs/s/8d9pgd/you_shouldn_t_trust_trusted_publishing) - [You shouldn&apos;t trust Trusted Publishing](https://blog.yossarian.net/2026/07/07/You-shouldnt-trust-trusted-publishing)
* [2026-07-07, 13:13:00](https://soylentnews.org/article.pl?sid=26/07/05/2113231&amp;from=rss) - [NetNut Cracked As Google And FBI Target 2 Million-Device Botnet](https://soylentnews.org/article.pl?sid=26/07/05/2113231&amp;from=rss)
* [2026-07-07, 12:47:46](https://news.ycombinator.com/item?id=48816987) - [Show HN: Yamanote.fun – A complete soundscape for Tokyo&apos;s Yamanote line](https://www.yamanote.fun/)
* [2026-07-07, 12:20:54](https://news.ycombinator.com/item?id=48816724) - [Show HN: Frugon – Find which LLM calls a cheaper model could handle (local, MIT)](https://github.com/Rodiun/frugon)
* [2026-07-07, 09:35:02](https://lobste.rs/s/709awc/together_for_healthier_clippy) - [Together for a healthier Clippy](https://blog.rust-lang.org/inside-rust/2026/07/06/unite-for-clippy/)
* [2026-07-07, 08:34:00](https://soylentnews.org/article.pl?sid=26/07/05/1926209&amp;from=rss) - [Amazon is Ready to Deploy the LEO Satellite Broadband Service](https://soylentnews.org/article.pl?sid=26/07/05/1926209&amp;from=rss)
* [2026-07-07, 07:33:16](https://lobste.rs/s/v8hk8q/google_s_exponential_path_climate) - [Google’s exponential path to climate-wrecking digital bloat](https://ketanjoshi.co/2026/07/01/googles-exponential-path-to-climate-wrecking-digital-bloat/)
* [2026-07-07, 06:20:55](https://lobste.rs/s/5rvgim/odin_1_0_announcement) - [Odin 1.0 Announcement](https://www.youtube.com/watch?v=dLPAqXi9In0)
* [2026-07-07, 03:52:00](https://soylentnews.org/article.pl?sid=26/07/05/1924207&amp;from=rss) - [For The First Time, A Cell Built From Scratch Grows And Divides](https://soylentnews.org/article.pl?sid=26/07/05/1924207&amp;from=rss)
* [2026-07-06, 23:04:00](https://soylentnews.org/article.pl?sid=26/07/05/1921216&amp;from=rss) - [David Rosenthal on the LLM Negative Feedback Loop](https://soylentnews.org/article.pl?sid=26/07/05/1921216&amp;from=rss)
* [2026-07-06, 18:23:00](https://soylentnews.org/article.pl?sid=26/07/05/1917212&amp;from=rss) - [Travel like it&apos;s 0 AD. ](https://soylentnews.org/article.pl?sid=26/07/05/1917212&amp;from=rss)
* [2026-07-06, 14:06:34](https://news.ycombinator.com/item?id=48804801) - [I Built a Telegram Client for Pi](https://www.npmjs.com/package/@atharva-again/pi-tg)
* [2026-07-06, 13:42:00](https://soylentnews.org/article.pl?sid=26/07/05/1911206&amp;from=rss) - [Modern Life May be Outpacing the Human Mind](https://soylentnews.org/article.pl?sid=26/07/05/1911206&amp;from=rss)
* [2026-07-06, 13:02:57](https://news.ycombinator.com/item?id=48804016) - [DKIM2 and DMARCbis Have Landed](https://stalw.art/blog/dkim2-dmarcbis/)
* [2026-07-06, 09:00:00](https://soylentnews.org/article.pl?sid=26/07/05/092233&amp;from=rss) - [New Law Could Let Tesla Ship Cars With No Brake Pedals Installed](https://soylentnews.org/article.pl?sid=26/07/05/092233&amp;from=rss)
* [2026-07-06, 04:16:00](https://soylentnews.org/article.pl?sid=26/07/05/0859246&amp;from=rss) - [The Weirdness of Neutrinos Could Completely Rewrite Particle Physics](https://soylentnews.org/article.pl?sid=26/07/05/0859246&amp;from=rss)
* [2026-07-05, 23:35:00](https://soylentnews.org/article.pl?sid=26/07/04/0717219&amp;from=rss) - [What the US Was Like in the 1920s](https://soylentnews.org/article.pl?sid=26/07/04/0717219&amp;from=rss)
* [2026-07-05, 18:52:00](https://soylentnews.org/article.pl?sid=26/07/04/0714213&amp;from=rss) - [Raspberry Pi OS Gets a New Kernel but Apparently Not a New Version Number](https://soylentnews.org/article.pl?sid=26/07/04/0714213&amp;from=rss)
* [2026-07-05, 14:30:44](https://news.ycombinator.com/item?id=48794568) - [My road trip with the do-gooding cactus smugglers](https://economist.com/1843/2026/03/06/my-road-trip-with-the-do-gooding-cactus-smugglers)
* [2026-07-05, 14:02:00](https://soylentnews.org/article.pl?sid=26/07/04/074205&amp;from=rss) - [61% of US Adults Use AI for Health Information Now - Up From 2% in 2024](https://soylentnews.org/article.pl?sid=26/07/04/074205&amp;from=rss)
* [2026-07-05, 09:21:00](https://soylentnews.org/article.pl?sid=26/07/04/0653237&amp;from=rss) - [It&apos;s Looking Like a Hot, Messy Summer for Security Teams as AI Finds Hidden Vulnerabilities](https://soylentnews.org/article.pl?sid=26/07/04/0653237&amp;from=rss)
* [2026-07-05, 05:34:00](https://soylentnews.org/article.pl?sid=26/07/04/0645204&amp;from=rss) - [10 Medieval Inventions That Shaped the Modern World](https://soylentnews.org/article.pl?sid=26/07/04/0645204&amp;from=rss)
* [2026-07-05, 00:48:00](https://soylentnews.org/article.pl?sid=26/07/04/0643229&amp;from=rss) - [Large Hadron Collider Goes Offline to Make Room for its Enhanced Successor](https://soylentnews.org/article.pl?sid=26/07/04/0643229&amp;from=rss)
