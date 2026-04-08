# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Advances and Innovations

* [Meta Debuts 'Muse Spark', First AI Model Under Alexandr Wang](https://tech.slashdot.org/story/26/04/08/1731245/meta-debuts-muse-spark-first-ai-model-under-alexandr-wang?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=47692102))

* [Understanding the Kalman Filter with a Simple Radar Example](https://kalmanfilter.net) ([Comments](https://news.ycombinator.com/item?id=47693153))

* [CIA Reportedly Used Secret Quantum Tool To Find Downed Airman in Iran](https://tech.slashdot.org/story/26/04/08/0152253/cia-reportedly-used-secret-quantum-tool-to-find-downed-airman-in-iran?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=47689237))

* [Valve Releases Native Steam Link App For Apple's Vision Pro](https://games.slashdot.org/story/26/04/08/0554203/valve-releases-native-steam-link-app-for-apples-vision-pro?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=47691330))

## Programming and Software Development

* [Zsh: select generated files with (om[1]) glob qualifiers](https://adamj.eu/tech/2026/01/27/zsh-om1-glob-qualifiers/) ([Comments](https://lobste.rs/s/6k8cyc/zsh_select_generated_files_with_om_1_glob))

* [Borrow-checking surprises](https://www.scattered-thoughts.net/writing/borrow-checking-surprises/) ([Comments](https://lobste.rs/s/lgdejq/borrow_checking_surprises))

* [Git commands I run before reading any code](https://piechowski.io/post/git-commands-before-reading-code/) ([Comments](https://news.ycombinator.com/item?id=47687273))

* [On Vinyl Cache and Varnish Cache](https://vinyl-cache.org/organization/on_vinyl_cache_and_varnish_cache.html) ([Comments](https://lobste.rs/s/itjrwp/on_vinyl_cache_varnish_cache))

## Cybersecurity and Privacy

* [Microsoft Abruptly Terminates VeraCrypt Account, Halting Windows Updates](https://tech.slashdot.org/story/26/04/08/1715213/microsoft-abruptly-terminates-veracrypt-account-halting-windows-updates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=47690977))

* [US cities are axing Flock Safety surveillance technology](https://www.cnet.com/home/security/when-flock-comes-to-town-why-cities-are-axing-the-controversial-surveillance-technology/) ([Comments](https://news.ycombinator.com/item?id=47689237))

* [Russian Government Hackers Broke Into Thousands of Home Routers To Steal Passwords](https://it.slashdot.org/story/26/04/07/2326240/russian-government-hackers-broke-into-thousands-of-home-routers-to-steal-passwords?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=47686549))

## Science and Research

* [MegaTrain: Full Precision Training of 100B+ Parameter LLMs on a Single GPU](https://arxiv.org/abs/2604.05091) ([Comments](https://news.ycombinator.com/item?id=47689174))

* [Astronomers Say Recent Rash of Meteor Sightings 'Warrants Serious Investigation'](https://soylentnews.org/article.pl?sid=26/04/06/2246200&amp;from=rss) ([Comments](https://news.ycombinator.com/item?id=47684514))

* [Fossils Reveal Many Complex Animals Existed Before the Cambrian Explosion](https://soylentnews.org/article.pl?sid=26/04/05/0214222&amp;from=rss) ([Comments](https://news.ycombinator.com/item?id=47661038))

* [The Brain Uses Eye Movements to See in 3D](https://soylentnews.org/article.pl?sid=26/04/05/0849255&amp;from=rss) ([Comments](https://news.ycombinator.com/item?id=47658000))

## Creative and Innovative Solutions

* [I Ported Mac OS X to the Nintendo Wii](https://bryankeller.github.io/2026/04/08/porting-mac-os-x-nintendo-wii.html) ([Comments](https://news.ycombinator.com/item?id=47691730))

* [Škoda DuoBell: A bicycle bell that penetrates noise-cancelling headphones](https://www.skoda-storyboard.com/en/skoda-world/skoda-duobell-a-bicycle-bell-that-outsmarts-even-smart-headphones/) ([Comments](https://news.ycombinator.com/item?id=47687248))

* [Explore the Silk Roads through an interactive map](https://www.intofarlands.com/silk-roads-map) ([Comments](https://news.ycombinator.com/item?id=47691174))

* [Show HN: I pipe free sports streams into Jellyfin – no ads, just HLS](https://github.com/pcruz1905/hls-restream-proxy) ([Comments](https://news.ycombinator.com/item?id=47689165))

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

* [2026-04-08, 18:27:30](https://lobste.rs/s/6k8cyc/zsh_select_generated_files_with_om_1_glob) - [Zsh: select generated files with (om[1]) glob qualifiers](https://adamj.eu/tech/2026/01/27/zsh-om1-glob-qualifiers/)
* [2026-04-08, 18:13:22](https://news.ycombinator.com/item?id=47694093) - [One item purchased, Ten emails](https://joshghent.com/online-shopping/)
* [2026-04-08, 18:08:52](https://news.ycombinator.com/item?id=47694036) - [Show HN: Orange Juice – Small UX improvements that make HN much easier to read](http://oj-hn.com/)
* [2026-04-08, 18:00:00](https://tech.slashdot.org/story/26/04/08/1731245/meta-debuts-muse-spark-first-ai-model-under-alexandr-wang?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Debuts &apos;Muse Spark&apos;, First AI Model Under Alexandr Wang](https://tech.slashdot.org/story/26/04/08/1731245/meta-debuts-muse-spark-first-ai-model-under-alexandr-wang?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-08, 17:58:26](https://lobste.rs/s/3a1dpx/tailslayer_technique_for_reducing_tail) - [Tailslayer: A technique for reducing tail latency in DRAM operations](https://www.youtube.com/watch?v=KKbgulTp3FE)
* [2026-04-08, 17:37:29](https://lobste.rs/s/lgdejq/borrow_checking_surprises) - [Borrow-checking surprises](https://www.scattered-thoughts.net/writing/borrow-checking-surprises/)
* [2026-04-08, 17:11:46](https://news.ycombinator.com/item?id=47693153) - [Understanding the Kalman Filter with a Simple Radar Example](https://kalmanfilter.net)
* [2026-04-08, 17:11:40](https://lobste.rs/s/9pipxp/tailslayer_library_for_reducing_tail) - [tailslayer: Library for reducing tail latency in RAM reads](https://github.com/LaurieWired/tailslayer)
* [2026-04-08, 17:04:40](https://news.ycombinator.com/item?id=47693047) - [Claude Managed Agents](https://claude.com/blog/claude-managed-agents)
* [2026-04-08, 17:00:00](https://tech.slashdot.org/story/26/04/08/1715213/microsoft-abruptly-terminates-veracrypt-account-halting-windows-updates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Abruptly Terminates VeraCrypt Account, Halting Windows Updates](https://tech.slashdot.org/story/26/04/08/1715213/microsoft-abruptly-terminates-veracrypt-account-halting-windows-updates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-08, 16:41:16](https://news.ycombinator.com/item?id=47692661) - [Show HN: TUI-use: Let AI agents control interactive terminal programs](https://github.com/onesuper/tui-use)
* [2026-04-08, 16:16:57](https://lobste.rs/s/i0vvrs/porting_mac_os_x_nintendo_wii) - [Porting Mac OS X to the Nintendo Wii](https://bryankeller.github.io/2026/04/08/porting-mac-os-x-nintendo-wii.html)
* [2026-04-08, 16:05:54](https://news.ycombinator.com/item?id=47692102) - [Muse Spark – Meta Superintelligence Labs](https://meta.ai/)
* [2026-04-08, 16:01:32](https://news.ycombinator.com/item?id=47692043) - [Muse Spark: Scaling Towards Personal Superintelligence](https://ai.meta.com/blog/introducing-muse-spark-msl/?_fb_noscript=1)
* [2026-04-08, 16:00:00](https://games.slashdot.org/story/26/04/08/0554203/valve-releases-native-steam-link-app-for-apples-vision-pro?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Valve Releases Native Steam Link App For Apple&apos;s Vision Pro](https://games.slashdot.org/story/26/04/08/0554203/valve-releases-native-steam-link-app-for-apples-vision-pro?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-08, 15:40:00](https://news.ycombinator.com/item?id=47691730) - [I Ported Mac OS X to the Nintendo Wii](https://bryankeller.github.io/2026/04/08/porting-mac-os-x-nintendo-wii.html)
* [2026-04-08, 15:35:46](https://lobste.rs/s/fdybbj/verifying_human_authorship_with_human) - [Verifying human authorship with human.json](https://joelchrono.xyz/blog/implementing-human-json/)
* [2026-04-08, 15:25:29](https://lobste.rs/s/qayr1f/open_source_security_at_astral) - [Open source security at Astral](https://astral.sh/blog/open-source-security-at-astral)
* [2026-04-08, 15:20:42](https://lobste.rs/s/itjrwp/on_vinyl_cache_varnish_cache) - [On Vinyl Cache and Varnish Cache](https://vinyl-cache.org/organization/on_vinyl_cache_and_varnish_cache.html)
* [2026-04-08, 15:00:12](https://news.ycombinator.com/item?id=47691174) - [Show HN: Explore the Silk Roads through an interactive map](https://www.intofarlands.com/silk-roads-map)
* [2026-04-08, 15:00:00](https://hardware.slashdot.org/story/26/04/08/0543217/apple-and-lenovo-have-the-least-repairable-laptops-analysis-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple and Lenovo Have the Least Repairable Laptops, Analysis Finds](https://hardware.slashdot.org/story/26/04/08/0543217/apple-and-lenovo-have-the-least-repairable-laptops-analysis-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-08, 14:46:15](https://news.ycombinator.com/item?id=47690977) - [Microsoft Abruptly Terminates VeraCrypt Account, Halting Windows Updates](https://www.404media.co/microsoft-abruptly-terminates-veracrypt-account-halting-windows-updates/)
* [2026-04-08, 14:33:30](https://news.ycombinator.com/item?id=47690797) - [Show HN: Go-Bt: Minimalist Behavior Trees for Go](https://github.com/rvitorper/go-bt)
* [2026-04-08, 14:04:03](https://lobste.rs/s/phhjvs/future_everything_is_lies_i_guess) - [The Future of Everything is Lies, I Guess](https://aphyr.com/posts/411-the-future-of-everything-is-lies-i-guess)
* [2026-04-08, 13:35:34](https://lobste.rs/s/oh8rgj/audio_reactive_led_strips_are) - [Audio Reactive LED Strips Are Diabolically Hard](https://scottlawsonbc.com/post/audio-led)
* [2026-04-08, 13:35:27](https://lobste.rs/s/9xjhfm/full_text_search_with_indexeddb) - [Full Text Search with IndexedDB](https://blog.jmp.chat/b/2026-full-text-search-indexeddb)
* [2026-04-08, 12:26:14](https://news.ycombinator.com/item?id=47689237) - [US cities are axing Flock Safety surveillance technology](https://www.cnet.com/home/security/when-flock-comes-to-town-why-cities-are-axing-the-controversial-surveillance-technology/)
* [2026-04-08, 12:19:00](https://news.ycombinator.com/item?id=47689174) - [MegaTrain: Full Precision Training of 100B+ Parameter LLMs on a Single GPU](https://arxiv.org/abs/2604.05091)
* [2026-04-08, 12:17:57](https://news.ycombinator.com/item?id=47689165) - [Show HN: I pipe free sports streams into Jellyfin – no ads, just HLS](https://github.com/pcruz1905/hls-restream-proxy)
* [2026-04-08, 11:20:50](https://news.ycombinator.com/item?id=47688678) - [They&apos;re Made Out of Meat (1991)](http://www.terrybisson.com/theyre-made-out-of-meat-2/)
* [2026-04-08, 11:00:00](https://tech.slashdot.org/story/26/04/08/0152253/cia-reportedly-used-secret-quantum-tool-to-find-downed-airman-in-iran?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CIA Reportedly Used Secret Quantum Tool To Find Downed Airman in Iran](https://tech.slashdot.org/story/26/04/08/0152253/cia-reportedly-used-secret-quantum-tool-to-find-downed-airman-in-iran?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-08, 10:48:00](https://soylentnews.org/article.pl?sid=26/04/06/2256234&amp;from=rss) - [The Three Ways Big Tech Made The Human Mind Weaker](https://soylentnews.org/article.pl?sid=26/04/06/2256234&amp;from=rss)
* [2026-04-08, 09:20:30](https://lobste.rs/s/kz6rvd/under_hood_mdn_s_new_frontend) - [Under the hood of MDN&apos;s new frontend](https://developer.mozilla.org/en-US/blog/mdn-front-end-deep-dive/)
* [2026-04-08, 08:53:42](https://news.ycombinator.com/item?id=47687273) - [Git commands I run before reading any code](https://piechowski.io/post/git-commands-before-reading-code/)
* [2026-04-08, 08:50:37](https://news.ycombinator.com/item?id=47687248) - [Škoda DuoBell: A bicycle bell that penetrates noise-cancelling headphones](https://www.skoda-storyboard.com/en/skoda-world/skoda-duobell-a-bicycle-bell-that-outsmarts-even-smart-headphones/)
* [2026-04-08, 07:40:46](https://lobste.rs/s/ejaimk/applying_programming_without_pointers) - [Applying \&quot;Programming Without Pointers\&quot; to an mbox indexer using Zig](https://simonhartcher.com/posts/2026-04-08-applying-programming-without-pointers-to-an-mbox-indexer-using-zig)
* [2026-04-08, 07:23:39](https://news.ycombinator.com/item?id=47686549) - [Veracrypt project update](https://sourceforge.net/p/veracrypt/discussion/general/thread/9620d7a4b3/)
* [2026-04-08, 07:00:00](https://tech.slashdot.org/story/26/04/08/0145220/planet-labs-tests-ai-powered-object-detection-on-satellite?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Planet Labs Tests AI-Powered Object Detection On Satellite](https://tech.slashdot.org/story/26/04/08/0145220/planet-labs-tests-ai-powered-object-detection-on-satellite?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-08, 06:03:04](https://lobste.rs/s/f3qxk6/1subml_plan_vs_reality) - [1SubML: Plan vs Reality](https://blog.polybdenum.com/2026/04/05/1subml-plan-vs-reality.html)
* [2026-04-08, 06:01:00](https://news.ycombinator.com/item?id=47685945) - [We moved Railway&apos;s frontend off Next.js. Builds went from 10+ mins to under 2](https://blog.railway.com/p/moving-railways-frontend-off-nextjs)
* [2026-04-08, 05:56:00](https://soylentnews.org/article.pl?sid=26/04/06/2247253&amp;from=rss) - [Democracy Was Not Just a Greco-Roman Affair in the Ancient World](https://soylentnews.org/article.pl?sid=26/04/06/2247253&amp;from=rss)
* [2026-04-08, 05:34:08](https://news.ycombinator.com/item?id=47685739) - [Revision Demoparty 2026: Razor1911 [video]](https://www.youtube.com/watch?v=Lw4W9V57SKs&amp;t=5716s)
* [2026-04-08, 04:41:53](https://lobste.rs/s/3yvhkz/rfc_jsir_high_level_ir_for_javascript) - [[RFC] JSIR: A High-Level IR for JavaScript](https://discourse.llvm.org/t/rfc-jsir-a-high-level-ir-for-javascript/90456)
* [2026-04-08, 03:30:00](https://it.slashdot.org/story/26/04/07/2326240/russian-government-hackers-broke-into-thousands-of-home-routers-to-steal-passwords?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Russian Government Hackers Broke Into Thousands of Home Routers To Steal Passwords](https://it.slashdot.org/story/26/04/07/2326240/russian-government-hackers-broke-into-thousands-of-home-routers-to-steal-passwords?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-08, 03:03:33](https://news.ycombinator.com/item?id=47684514) - [Protect your shed](https://dylanbutler.dev/blog/protect-your-shed/)
* [2026-04-08, 01:12:00](https://soylentnews.org/article.pl?sid=26/04/06/2246200&amp;from=rss) - [Astronomers Say Recent Rash of Meteor Sightings ‘Warrants Serious Investigation’](https://soylentnews.org/article.pl?sid=26/04/06/2246200&amp;from=rss)
* [2026-04-07, 23:35:34](https://lobste.rs/s/214wj4/when_compiler_lies_breaking_memory) - [When the compiler lies: breaking memory safety in safe Go](https://ciolek.dev/posts/when-the-compiler-lies)
* [2026-04-07, 23:00:00](https://hardware.slashdot.org/story/26/04/07/2157238/apple-faces-massive-dilemma-with-success-of-the-macbook-neo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Faces &apos;Massive Dilemma&apos; With Success of the MacBook Neo](https://hardware.slashdot.org/story/26/04/07/2157238/apple-faces-massive-dilemma-with-success-of-the-macbook-neo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-07, 22:41:54](https://lobste.rs/s/lwdzn1/nix_security_advisory_privilege) - [Nix security advisory: Privilege escalation via symlink following during FOD output registration](https://discourse.nixos.org/t/nix-security-advisory-privilege-escalation-via-symlink-following-during-fod-output-registration/76900)
* [2026-04-07, 22:00:00](https://it.slashdot.org/story/26/04/07/2115208/anthropic-unveils-claude-mythos-powerful-ai-with-major-cyber-implications?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Unveils &apos;Claude Mythos&apos;, Powerful AI With Major Cyber Implications](https://it.slashdot.org/story/26/04/07/2115208/anthropic-unveils-claude-mythos-powerful-ai-with-major-cyber-implications?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-07, 21:58:48](https://lobste.rs/s/khf0ye/all_string_types) - [All of the String types](https://lambdalemon.gay/posts/string-types)
* [2026-04-07, 21:00:00](https://tech.slashdot.org/story/26/04/07/2018212/chrome-is-finally-getting-vertical-tabs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chrome Is Finally Getting Vertical Tabs](https://tech.slashdot.org/story/26/04/07/2018212/chrome-is-finally-getting-vertical-tabs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-07, 20:28:00](https://soylentnews.org/article.pl?sid=26/04/05/0859242&amp;from=rss) - [Google&apos;s New Compression Drastically Shrinks AI Memory Use While Quietly Speeding Up Performance](https://soylentnews.org/article.pl?sid=26/04/05/0859242&amp;from=rss)
* [2026-04-07, 20:24:13](https://lobste.rs/s/m5ufxm/blackholing_my_email) - [Blackholing My Email](https://www.johnsto.co.uk/blog/blackholing-my-email/)
* [2026-04-07, 20:00:00](https://yro.slashdot.org/story/26/04/07/1750202/supreme-court-wipes-piracy-liability-verdict-against-grande-communications?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Supreme Court Wipes Piracy Liability Verdict Against Grande Communications](https://yro.slashdot.org/story/26/04/07/1750202/supreme-court-wipes-piracy-liability-verdict-against-grande-communications?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-07, 19:19:09](https://lobste.rs/s/enkaal/last_quiet_thing) - [The Last Quiet Thing](https://www.terrygodier.com/the-last-quiet-thing)
* [2026-04-07, 19:00:00](https://tech.slashdot.org/story/26/04/07/1717240/testing-suggests-googles-ai-overviews-tells-millions-of-lies-per-hour?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Testing Suggests Google&apos;s AI Overviews Tells Millions of Lies Per Hour](https://tech.slashdot.org/story/26/04/07/1717240/testing-suggests-googles-ai-overviews-tells-millions-of-lies-per-hour?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-07, 18:21:32](https://lobste.rs/s/aw2jr4/assessing_claude_mythos_preview_s) - [Assessing Claude Mythos Preview’s cybersecurity capabilities](https://red.anthropic.com/2026/mythos-preview/)
* [2026-04-07, 18:18:36](https://news.ycombinator.com/item?id=47679258) - [System Card: Claude Mythos Preview [pdf]](https://www-cdn.anthropic.com/53566bf5440a10affd749724787c8913a2ae0841.pdf)
* [2026-04-07, 18:00:00](https://hardware.slashdot.org/story/26/04/07/175246/anthropic-reveals-30-billion-run-rate-plans-to-use-35gw-of-new-google-ai-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Reveals $30 Billion Run Rate, Plans To Use 3.5GW of New Google AI Chips](https://hardware.slashdot.org/story/26/04/07/175246/anthropic-reveals-30-billion-run-rate-plans-to-use-35gw-of-new-google-ai-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-07, 17:00:00](https://tech.slashdot.org/story/26/04/07/1648211/cloudflare-fast-tracks-post-quantum-rollout-to-2029?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cloudflare Fast-Tracks Post-Quantum Rollout To 2029](https://tech.slashdot.org/story/26/04/07/1648211/cloudflare-fast-tracks-post-quantum-rollout-to-2029?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-07, 16:21:50](https://lobste.rs/s/ltdyov/great_nix_flake_check) - [The Great Nix Flake Check](https://goldstein.lol/posts/great-nix-flake-check/)
* [2026-04-07, 16:00:00](https://news.slashdot.org/story/26/04/06/230222/new-revelations-reignite-crypto-scandal-involving-argentinas-president-milei?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Revelations Reignite Crypto Scandal Involving Argentina&apos;s President Milei](https://news.slashdot.org/story/26/04/06/230222/new-revelations-reignite-crypto-scandal-involving-argentinas-president-milei?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-07, 15:43:00](https://soylentnews.org/article.pl?sid=26/04/05/0854218&amp;from=rss) - [When Earth&apos;s Magnetic Field Took its Time Flipping](https://soylentnews.org/article.pl?sid=26/04/05/0854218&amp;from=rss)
* [2026-04-07, 15:07:45](https://news.ycombinator.com/item?id=47676561) - [Teardown of unreleased LG Rollable shows why rollable phones aren&apos;t a thing](https://arstechnica.com/gadgets/2026/04/teardown-of-unreleased-lg-rollable-shows-why-rollable-phones-arent-a-thing/)
* [2026-04-07, 14:40:14](https://lobste.rs/s/vq6o44/what_text_editor_cli_gui_are_you_using_for) - [What text editor (cli or gui) are you using for writing non-code?](https://lobste.rs/s/vq6o44/what_text_editor_cli_gui_are_you_using_for)
* [2026-04-07, 13:55:14](https://news.ycombinator.com/item?id=47675446) - [Audio Reactive LED Strips Are Diabolically Hard](https://scottlawsonbc.com/post/audio-led)
* [2026-04-07, 11:01:00](https://soylentnews.org/article.pl?sid=26/04/05/0852233&amp;from=rss) - [$500 Fiber Optic HDMI Cable Delivers Flawless 48 Gbps Performance Across a Staggering 990 Feet](https://soylentnews.org/article.pl?sid=26/04/05/0852233&amp;from=rss)
* [2026-04-07, 09:44:46](https://lobste.rs/s/edkm8d/openssh_post_quantum_cryptography_2025) - [OpenSSH Post-Quantum Cryptography (2025)](https://www.openssh.com/pq.html)
* [2026-04-07, 06:18:00](https://soylentnews.org/article.pl?sid=26/04/05/0849255&amp;from=rss) - [The Brain Uses Eye Movements to See in 3D](https://soylentnews.org/article.pl?sid=26/04/05/0849255&amp;from=rss)
* [2026-04-07, 01:33:00](https://soylentnews.org/article.pl?sid=26/04/05/0335237&amp;from=rss) - [RIP Mac Pro: Apple Officially Kills its Tower Computer](https://soylentnews.org/article.pl?sid=26/04/05/0335237&amp;from=rss)
* [2026-04-06, 20:52:00](https://soylentnews.org/article.pl?sid=26/04/05/0233233&amp;from=rss) - [Pentagon Formalizes Palantir&apos;s Maven AI as a Core Military System With Multi-Year Funding](https://soylentnews.org/article.pl?sid=26/04/05/0233233&amp;from=rss)
* [2026-04-06, 19:21:34](https://lobste.rs/s/jxw4nj/downfall_enshittification_microsoft) - [The Downfall and Enshittification of Microsoft in 2026](https://caio.ca/blog/the-downfall-and-enshittification-of-microsoft.html)
* [2026-04-06, 16:11:00](https://soylentnews.org/article.pl?sid=26/04/05/0226201&amp;from=rss) - [Claude Source Code Leaked?  But Watch Out for What You Might be Downloading](https://soylentnews.org/article.pl?sid=26/04/05/0226201&amp;from=rss)
* [2026-04-06, 13:58:58](https://news.ycombinator.com/item?id=47661038) - [Show HN: I built a navigation app that displays weather along the route](https://navimodo.com/)
* [2026-04-06, 11:23:00](https://soylentnews.org/article.pl?sid=26/04/05/0214222&amp;from=rss) - [Fossils Reveal Many Complex Animals Existed Before the Cambrian Explosion](https://soylentnews.org/article.pl?sid=26/04/05/0214222&amp;from=rss)
* [2026-04-06, 06:35:00](https://soylentnews.org/article.pl?sid=26/04/05/026223&amp;from=rss) - [AMD&apos;s New Desktop CPU Oozes Cache Out of All 16 Cores](https://soylentnews.org/article.pl?sid=26/04/05/026223&amp;from=rss)
* [2026-04-06, 03:40:31](https://news.ycombinator.com/item?id=47656730) - [Understanding Traceroute](https://tech.stonecharioteer.com/posts/2026/traceroute/)
* [2026-04-06, 03:06:16](https://news.ycombinator.com/item?id=47656518) - [Your File System Is Already A Graph Database](https://rumproarious.com/2026/04/04/your-file-system-is-already-a-graph-database/)
* [2026-04-06, 01:54:00](https://soylentnews.org/article.pl?sid=26/04/05/021235&amp;from=rss) - [The &apos;Engineering of Addiction&apos;  - 3 Ways Meta and YouTube Are Claimed to Have Harmed  Users](https://soylentnews.org/article.pl?sid=26/04/05/021235&amp;from=rss)
* [2026-04-05, 21:30:19](https://news.ycombinator.com/item?id=47654062) - [Ask HN: Any interesting niche hobbies?](https://news.ycombinator.com/item?id=47654062)
* [2026-04-05, 21:04:00](https://soylentnews.org/article.pl?sid=26/04/04/0231228&amp;from=rss) - [‘Shockingly Bad’: Nissan Leaf Drivers Voice Anger Over App Shutdown](https://soylentnews.org/article.pl?sid=26/04/04/0231228&amp;from=rss)
* [2026-04-05, 16:13:00](https://soylentnews.org/article.pl?sid=26/04/04/0228218&amp;from=rss) - [Data Centers Causing Huge Temperature Spikes for Miles Around Them, Study Suggests](https://soylentnews.org/article.pl?sid=26/04/04/0228218&amp;from=rss)
* [2026-04-05, 11:41:00](https://soylentnews.org/article.pl?sid=26/04/04/0223207&amp;from=rss) - [Security Researchers Scoured the Web and Found Hundreds of Valid API Keys](https://soylentnews.org/article.pl?sid=26/04/04/0223207&amp;from=rss)
* [2026-04-05, 11:28:12](https://news.ycombinator.com/item?id=47648307) - [Virtual Mars Traverse: Every inch of Curiosity rover&apos;s path since 2012 landing](https://www.rovers.land/)
* [2026-04-05, 06:49:00](https://soylentnews.org/article.pl?sid=26/04/03/040255&amp;from=rss) - [VitruvianOS 0.3 Debuts as Haiku-Inspired Linux OS Without X11 or Wayland](https://soylentnews.org/article.pl?sid=26/04/03/040255&amp;from=rss)
* [2026-04-05, 05:37:00](https://soylentnews.org/breakingnews/article.pl?sid=26/04/05/0541233&amp;from=rss) - [2nd Crew Member of F15E Has Been Rescued.](https://soylentnews.org/breakingnews/article.pl?sid=26/04/05/0541233&amp;from=rss)
* [2026-04-05, 02:53:07](https://news.ycombinator.com/item?id=47645717) - [Union types in C# 15](https://devblogs.microsoft.com/dotnet/csharp-15-union-types/)
* [2026-04-05, 02:02:00](https://soylentnews.org/article.pl?sid=26/04/03/0357220&amp;from=rss) - [Investigating 3D-Printed Metals for Aeronautical Engineering](https://soylentnews.org/article.pl?sid=26/04/03/0357220&amp;from=rss)
* [2026-04-04, 21:18:00](https://soylentnews.org/article.pl?sid=26/04/03/0351210&amp;from=rss) - [Apple Requires Device-Level Age Verification in the UK Now. Could the US Be Next?](https://soylentnews.org/article.pl?sid=26/04/03/0351210&amp;from=rss)
* [2026-04-04, 16:34:00](https://soylentnews.org/article.pl?sid=26/04/03/0343222&amp;from=rss) - [Artemis 2 - Roundup](https://soylentnews.org/article.pl?sid=26/04/03/0343222&amp;from=rss)
* [2026-04-04, 11:46:00](https://soylentnews.org/article.pl?sid=26/04/03/0327238&amp;from=rss) - [Sony Shuts Down Nearly Its Entire Memory Card Business Due to Flash Shortage](https://soylentnews.org/article.pl?sid=26/04/03/0327238&amp;from=rss)
* [2026-04-04, 07:04:00](https://soylentnews.org/article.pl?sid=26/04/02/0226234&amp;from=rss) - [GitHub to Use User Data for AI Training by Default](https://soylentnews.org/article.pl?sid=26/04/02/0226234&amp;from=rss)
* [2026-04-04, 02:11:00](https://soylentnews.org/article.pl?sid=26/04/02/0224235&amp;from=rss) - [Quo Vadis, Humanitas?](https://soylentnews.org/article.pl?sid=26/04/02/0224235&amp;from=rss)
