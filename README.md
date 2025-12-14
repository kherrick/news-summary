# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and Technology Advancements

* [Time Magazine's 'Person of the Year': the Architects of AI](https://news.slashdot.org/story/25/12/14/084207/time-magazines-person-of-the-year-the-architects-of-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Celebrating efforts of individuals shaping the AI landscape.

* [Meta replaces SELinux with eBPF](https://lpc.events/event/19/contributions/2159/attachments/1833/3929/BpfJailer%20LPC%202025.pdf) - Insights into Meta's transition to enhanced Linux security with eBPF.

* [New Rule Forbids GNOME Shell Extensions Made Using AI-Generated Code](https://tech.slashdot.org/story/25/12/14/0453227/new-rule-forbids-gnome-shell-extensions-made-using-ai-generated-code?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Ethical concerns push GNOME to restrict certain AI contributions.

* [System76 Launches First Stable Release of COSMIC Desktop and Pop!_OS 24.04 LTS](https://news.slashdot.org/story/25/12/14/0112231/system76-launches-first-stable-release-of-cosmic-desktop-and-popos-2404-lts?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Exciting developments in open-source Linux desktops.

* [Startup Successfully Uses AI to Find New Geothermal Energy Reservoirs](https://hardware.slashdot.org/story/25/12/13/2211227/startup-successfully-uses-ai-to-find-new-geothermal-energy-reservoirs?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Combining AI with energy innovation for a sustainable future.

## Healthcare and Scientific Breakthroughs

* [Ultra-Thin Nanomembrane Device Forms Soft, Seamless Interface With Living Tissue](https://soylentnews.org/article.pl?sid=25/12/13/0329247&from=rss) - Breakthroughs in bioelectronics with potential medical applications.

* [A Therapeutic HPV Vaccine Shrank Cervical Tumors in Mice](https://soylentnews.org/article.pl?sid=25/12/08/1614203&from=rss) - Promising advances in cancer treatment.

* [Scientists Finally Uncover Why the World’s Most Common Heart Drug Causes Muscle Pain](https://soylentnews.org/article.pl?sid=25/12/11/0919226&from=rss) - Shedding light on medical side effects.

## Environment and Renewable Energy

* [Trump Ban on Wind Energy Permits 'Unlawful', Court Rules](https://hardware.slashdot.org/story/25/12/13/0157258/trump-ban-on-wind-energy-permits-unlawful-court-rules?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Judicial challenges to environmental policies.

* [Germany Covers Nearly 56 Percent of 2025 Electricity Use With Renewables](https://hardware.slashdot.org/story/25/12/12/239237/germany-covers-nearly-56-percent-of-2025-electricity-use-with-renewables?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Leading the way in renewable energy adoption.

* [How a 23-Year-Old in 1975 Built the World's First Handheld Digital Camera](https://hardware.slashdot.org/story/25/12/13/0652226/how-a-23-year-old-in-1975-built-the-worlds-first-handheld-digital-camera?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A historical look into innovation.

## Software and Open Source Development

* [Goodbye Microservices: From 100s of problem children to 1 superstar](https://www.twilio.com/en-us/blog/developers/best-practices/goodbye-microservices) - Exploring the shift back to monolithic architectures.

* [ClickHaskell 1.0.0 is out](https://github.com/KovalevDima/ClickHaskell) - Celebrating the release of a new Haskell tool.

* [Please stop using middleware to protect your routes (2024)](https://pilcrowonpaper.com/blog/middleware-auth/) - Rethinking middleware design in software applications.

* [Rust in Linux's Kernel 'is No Longer Experimental'](https://linux.slashdot.org/story/25/12/13/0347245/rust-in-linuxs-kernel-is-no-longer-experimental?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Significant progress in Linux kernel development.

## Social Impact and Lifestyle

* [Heavy metal is healing teens on the Blackfeet Nation](https://www.hcn.org/issues/57-11/heavy-metal-is-healing-teens-on-the-blackfeet-nation/) - Cultural music's therapeutic role.

* [An off-grid, flat-packable washing machine](https://www.positive.news/society/flat-pack-washing-machine-spins-a-fairer-future/) - Ingenious design catering to sustainable living.

* [Bye, Mom](https://aella.substack.com/p/bye-mom) - A heartfelt personal piece intertwined with grief.

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

* [2025-12-14, 12:43:26](https://lobste.rs/s/hhddvz/goodbye_microservices_from_100s_problem) - [Goodbye Microservices: From 100s of problem children to 1 superstar](https://www.twilio.com/en-us/blog/developers/best-practices/goodbye-microservices)
* [2025-12-14, 12:34:00](https://news.slashdot.org/story/25/12/14/084207/time-magazines-person-of-the-year-the-architects-of-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Time Magazine&apos;s &apos;Person of the Year&apos;: the Architects of AI](https://news.slashdot.org/story/25/12/14/084207/time-magazines-person-of-the-year-the-architects-of-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-14, 11:28:43](https://lobste.rs/s/u5oqny/meta_replaces_selinux_with_ebpf) - [Meta replaces SELinux with eBPF](https://lpc.events/event/19/contributions/2159/attachments/1833/3929/BpfJailer%20LPC%202025.pdf)
* [2025-12-14, 09:36:00](https://soylentnews.org/article.pl?sid=25/12/13/0329247&amp;from=rss) - [Ultra-Thin Nanomembrane Device Forms Soft, Seamless Interface With Living Tissue](https://soylentnews.org/article.pl?sid=25/12/13/0329247&amp;from=rss)
* [2025-12-14, 08:44:00](https://hardware.slashdot.org/story/25/12/13/0157258/trump-ban-on-wind-energy-permits-unlawful-court-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Ban on Wind Energy Permits &apos;Unlawful&apos;, Court Rules](https://hardware.slashdot.org/story/25/12/13/0157258/trump-ban-on-wind-energy-permits-unlawful-court-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-14, 08:40:41](https://lobste.rs/s/keyz9l/clickhaskell_1_0_0_is_out) - [ClickHaskell 1.0.0 is out](https://github.com/KovalevDima/ClickHaskell)
* [2025-12-14, 08:21:59](https://news.ycombinator.com/item?id=46261616) - [Bye, Mom](https://aella.substack.com/p/bye-mom)
* [2025-12-14, 07:45:15](https://news.ycombinator.com/item?id=46261452) - [Compiler Engineering in Practice](https://chisophugis.github.io/2025/12/08/compiler-engineering-in-practice-part-1-what-is-a-compiler.html)
* [2025-12-14, 07:23:52](https://lobste.rs/s/hzyyyy/stop_writing_if_statements_for_your_cli) - [Stop writing if statements for your CLI flags](https://hackers.pub/@hongminhee/2025/stop-writing-if-statements-for-your-cli-flags)
* [2025-12-14, 05:38:52](https://news.ycombinator.com/item?id=46261020) - [“You should never build a CMS”](https://www.sanity.io/blog/you-should-never-build-a-cms)
* [2025-12-14, 05:34:00](https://tech.slashdot.org/story/25/12/14/0453227/new-rule-forbids-gnome-shell-extensions-made-using-ai-generated-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Rule Forbids GNOME Shell Extensions Made Using AI-Generated Code](https://tech.slashdot.org/story/25/12/14/0453227/new-rule-forbids-gnome-shell-extensions-made-using-ai-generated-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-14, 04:46:00](https://soylentnews.org/article.pl?sid=25/12/13/0323237&amp;from=rss) - [When It All Comes Crashing Down: The Aftermath of the AI Boom](https://soylentnews.org/article.pl?sid=25/12/13/0323237&amp;from=rss)
* [2025-12-14, 04:37:15](https://lobste.rs/s/o3daas/build_systems_la_carte) - [Build Systems A La Carte](https://www.microsoft.com/en-us/research/wp-content/uploads/2018/03/build-systems.pdf)
* [2025-12-14, 03:46:51](https://news.ycombinator.com/item?id=46260596) - [Heavy metal is healing teens on the Blackfeet Nation](https://www.hcn.org/issues/57-11/heavy-metal-is-healing-teens-on-the-blackfeet-nation/)
* [2025-12-14, 03:44:00](https://developers.slashdot.org/story/25/12/14/0340217/is-the-r-programming-language-surging-in-popularity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is the R Programming Language Surging in Popularity?](https://developers.slashdot.org/story/25/12/14/0340217/is-the-r-programming-language-surging-in-popularity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-14, 02:32:05](https://lobste.rs/s/6awweq/larval_stage_support_engineering_great) - [Larval stage support engineering: great at what doesn’t scale](https://thundergolfer.com/startups/support/2025/12/13/support-eng-stage-1/)
* [2025-12-14, 01:49:11](https://news.ycombinator.com/item?id=46260128) - [Lean theorem prover mathlib](https://github.com/leanprover-community/mathlib4)
* [2025-12-14, 01:43:33](https://news.ycombinator.com/item?id=46260106) - [If a Meta AI model can read a brain-wide signal, why wouldn&apos;t the brain?](https://1393.xyz/writing/if-a-meta-ai-model-can-read-a-brain-wide-signal-why-wouldnt-the-brain)
* [2025-12-14, 01:34:00](https://news.slashdot.org/story/25/12/14/0112231/system76-launches-first-stable-release-of-cosmic-desktop-and-popos-2404-lts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [System76 Launches First Stable Release of COSMIC Desktop and Pop!_OS 24.04 LTS](https://news.slashdot.org/story/25/12/14/0112231/system76-launches-first-stable-release-of-cosmic-desktop-and-popos-2404-lts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-14, 00:48:51](https://lobste.rs/s/6qdrdj/very_unscientific_guide_security) - [A very unscientific guide to the security of various PQC algorithms](https://keymaterial.net/2025/12/13/a-very-unscientific-guide-to-the-security-of-various-pqc-algorithms/)
* [2025-12-14, 00:35:00](https://news.slashdot.org/story/25/12/14/0030234/free-software-awards-winners-announced-andy-wingo-alx-sa-govdirectory?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Free Software Awards&apos; Winners Announced: Andy Wingo, Alx Sa, Govdirectory ](https://news.slashdot.org/story/25/12/14/0030234/free-software-awards-winners-announced-andy-wingo-alx-sa-govdirectory?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-14, 00:34:56](https://news.ycombinator.com/item?id=46259702) - [An Implementation of J (1992)](https://www.jsoftware.com/ioj/ioj.htm)
* [2025-12-14, 00:34:07](https://lobste.rs/s/ibjihl/icl_interactive_common_lisp_enhanced) - [icl: Interactive Common Lisp: an enhanced REPL](https://github.com/atgreen/icl)
* [2025-12-14, 00:04:00](https://soylentnews.org/article.pl?sid=25/12/13/0314229&amp;from=rss) - [A New Anonymous Phone Carrier Lets You Sign Up With Nothing but a Zip Code](https://soylentnews.org/article.pl?sid=25/12/13/0314229&amp;from=rss)
* [2025-12-13, 23:39:48](https://news.ycombinator.com/item?id=46259334) - [Closures as Win32 Window Procedures](https://nullprogram.com/blog/2025/12/12/)
* [2025-12-13, 23:19:00](https://developers.slashdot.org/story/25/12/13/2316245/applets-are-officially-going-but-java-in-the-browser-is-better-than-ever?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Applets Are Officially Going, But Java In the Browser Is Better Than Ever](https://developers.slashdot.org/story/25/12/13/2316245/applets-are-officially-going-but-java-in-the-browser-is-better-than-ever?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-13, 22:58:29](https://news.ycombinator.com/item?id=46259064) - [Linux Sandboxes and Fil-C](https://fil-c.org/seccomp)
* [2025-12-13, 22:38:08](https://news.ycombinator.com/item?id=46258906) - [An off-grid, flat-packable washing machine](https://www.positive.news/society/flat-pack-washing-machine-spins-a-fairer-future/)
* [2025-12-13, 22:17:00](https://hardware.slashdot.org/story/25/12/13/2211227/startup-successfully-uses-ai-to-find-new-geothermal-energy-reservoirs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Startup Successfully Uses AI to Find New Geothermal Energy Reservoirs](https://hardware.slashdot.org/story/25/12/13/2211227/startup-successfully-uses-ai-to-find-new-geothermal-energy-reservoirs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-13, 21:18:01](https://news.ycombinator.com/item?id=46258163) - [Recovering Anthony Bourdain&apos;s Li.st&apos;s](https://sandyuraz.com/blogs/bourdain/)
* [2025-12-13, 21:17:00](https://news.slashdot.org/story/25/12/13/2114221/firefox-survey-finds-only-16-feel-in-control-of-their-privacy-choices-online?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Firefox Survey Finds Only 16% Feel In Control of Their Privacy Choices Online](https://news.slashdot.org/story/25/12/13/2114221/firefox-survey-finds-only-16-feel-in-control-of-their-privacy-choices-online?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-13, 20:30:34](https://news.ycombinator.com/item?id=46257714) - [Why Twilio Segment moved from microservices back to a monolith](https://www.twilio.com/en-us/blog/developers/best-practices/goodbye-microservices)
* [2025-12-13, 20:19:53](https://news.ycombinator.com/item?id=46257607) - [I fed 24 years of my blog posts to a Markov model](https://susam.net/fed-24-years-of-posts-to-markov-model.html)
* [2025-12-13, 20:19:10](https://news.ycombinator.com/item?id=46257599) - [The Rise of Computer Games, Part I: Adventure](https://technicshistory.com/2025/12/13/the-rise-of-computer-games-part-i-adventure/)
* [2025-12-13, 20:00:03](https://lobste.rs/s/j90ulf/faster_double_string_conversion) - [Faster double-to-string conversion](https://vitaut.net/posts/2025/faster-dtoa/)
* [2025-12-13, 19:53:23](https://lobste.rs/s/ijztws/go_is_portable_until_it_isn_t) - [Go is portable, until it isn&apos;t](https://simpleobservability.com/blog/go-portable-until-isnt)
* [2025-12-13, 19:46:19](https://news.ycombinator.com/item?id=46257339) - [VPN location claims don&apos;t match real traffic exits](https://ipinfo.io/blog/vpn-location-mismatch-report)
* [2025-12-13, 19:40:53](https://lobste.rs/s/zlsrd2/what_is_build_system_anyway) - [what is a build system, anyway?](https://jyn.dev/what-is-a-build-system-anyway/)
* [2025-12-13, 19:23:00](https://soylentnews.org/article.pl?sid=25/12/11/0919226&amp;from=rss) - [Scientists Finally Uncover Why the World’s Most Common Heart Drug Causes Muscle Pain](https://soylentnews.org/article.pl?sid=25/12/11/0919226&amp;from=rss)
* [2025-12-13, 18:34:00](https://hardware.slashdot.org/story/25/12/13/0041234/the-worlds-electric-car-sales-have-spiked-21-so-far-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The World&apos;s Electric Car Sales Have Spiked 21% So Far in 2025](https://hardware.slashdot.org/story/25/12/13/0041234/the-worlds-electric-car-sales-have-spiked-21-so-far-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-13, 17:34:00](https://hardware.slashdot.org/story/25/12/13/0652226/how-a-23-year-old-in-1975-built-the-worlds-first-handheld-digital-camera?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How a 23-Year-Old in 1975 Built the World&apos;s First Handheld Digital Camera](https://hardware.slashdot.org/story/25/12/13/0652226/how-a-23-year-old-in-1975-built-the-worlds-first-handheld-digital-camera?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-13, 17:28:35](https://lobste.rs/s/g535vs/using_nvi_as_minimal_fast_text_editor) - [Using nvi as a Minimal and Fast Text Editor](https://git.sr.ht/~r1w1s1/code-notes/blob/main/notes/NVI_Editor_Guide.txt)
* [2025-12-13, 17:19:16](https://lobste.rs/s/zfnnvr/editors_should_have_opt_for_less) - [Editors should have an opt-in for less assistance (2024)](https://www.da.vidbuchanan.co.uk/blog/annoying-text-editors.html)
* [2025-12-13, 17:01:32](https://lobste.rs/s/aoqsqp/i_tried_gleam_for_advent_code_i_get_hype) - [I Tried Gleam for Advent of Code, and I Get the Hype](https://blog.tymscar.com/posts/gleamaoc2025/)
* [2025-12-13, 17:00:14](https://news.ycombinator.com/item?id=46255991) - [I tried Gleam for Advent of Code](https://blog.tymscar.com/posts/gleamaoc2025/)
* [2025-12-13, 16:34:00](https://hardware.slashdot.org/story/25/12/13/0254253/more-of-americas-coal-fired-power-plants-cease-operations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [More of America&apos;s Coal-Fired Power Plants Cease Operations](https://hardware.slashdot.org/story/25/12/13/0254253/more-of-americas-coal-fired-power-plants-cease-operations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-13, 16:08:29](https://lobste.rs/s/49dt7g/indexed_reverse_polish_notation) - [Indexed Reverse Polish Notation, an Alternative to AST](https://burakemir.ch/post/indexed-rpn/)
* [2025-12-13, 15:37:16](https://news.ycombinator.com/item?id=46255285) - [Ask HN: How can I get better at using AI for programming?](https://news.ycombinator.com/item?id=46255285)
* [2025-12-13, 15:34:00](https://linux.slashdot.org/story/25/12/13/0347245/rust-in-linuxs-kernel-is-no-longer-experimental?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rust in Linux&apos;s Kernel &apos;is No Longer Experimental&apos;](https://linux.slashdot.org/story/25/12/13/0347245/rust-in-linuxs-kernel-is-no-longer-experimental?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-13, 14:55:09](https://lobste.rs/s/lsjmah/rats_play_doom) - [Rats Play Doom](https://ratsplaydoom.com/)
* [2025-12-13, 14:37:00](https://soylentnews.org/article.pl?sid=25/12/11/0916209&amp;from=rss) - [Germany Might Have Just Saved Gas Engines From a European Ban](https://soylentnews.org/article.pl?sid=25/12/11/0916209&amp;from=rss)
* [2025-12-13, 13:29:17](https://lobste.rs/s/pjggcx/state_kernel_rust_experiment) - [The state of the kernel Rust experiment](https://lwn.net/SubscriberLink/1050174/63aa7da43214c3ce/)
* [2025-12-13, 12:55:25](https://lobste.rs/s/vx1gr7/please_stop_using_middleware_protect) - [Please stop using middleware to protect your routes (2024)](https://pilcrowonpaper.com/blog/middleware-auth/)
* [2025-12-13, 12:25:31](https://lobste.rs/s/agc8ik/concrete_syntax_matters_actually) - [Concrete syntax matters, actually](https://www.youtube.com/watch?v=kQjrcSMYpaA)
* [2025-12-13, 10:23:56](https://lobste.rs/s/jgiub1/typeframe_px_88_portable_computing) - [The Typeframe PX-88 Portable Computing System](https://www.typeframe.net/)
* [2025-12-13, 10:00:00](https://hardware.slashdot.org/story/25/12/12/239237/germany-covers-nearly-56-percent-of-2025-electricity-use-with-renewables?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Germany Covers Nearly 56 Percent of 2025 Electricity Use With Renewables](https://hardware.slashdot.org/story/25/12/12/239237/germany-covers-nearly-56-percent-of-2025-electricity-use-with-renewables?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-13, 09:52:00](https://soylentnews.org/article.pl?sid=25/12/11/0910257&amp;from=rss) - [Space Shuttle Lessons: Backtracks Can Create Breakthroughs](https://soylentnews.org/article.pl?sid=25/12/11/0910257&amp;from=rss)
* [2025-12-13, 08:06:41](https://lobste.rs/s/jkwpjw/what_s_point_lightweight_code_with_modern) - [What&apos;s the point of lightweight code with modern computers?](https://liam-on-linux.dreamwidth.org/97426.html)
* [2025-12-13, 07:19:31](https://lobste.rs/s/klxjty/mostly_complete_unicode_spiral_2022) - [The (Mostly) Complete Unicode Spiral (2022)](https://shkspr.mobi/blog/2022/07/the-mostly-complete-unicode-spiral/)
* [2025-12-13, 07:00:00](https://yro.slashdot.org/story/25/12/12/2341230/chinese-whistleblower-living-in-us-is-being-hunted-by-beijing-with-us-tech?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chinese Whistleblower Living In US Is Being Hunted By Beijing With US Tech](https://yro.slashdot.org/story/25/12/12/2341230/chinese-whistleblower-living-in-us-is-being-hunted-by-beijing-with-us-tech?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-13, 06:55:58](https://lobste.rs/s/npbaul/crypto_fido_security_tokens) - [Crypto, FIDO and Security Tokens](https://docs.google.com/spreadsheets/d/1XlwmreiBkt82F4HG965Yp9ncULkgnFpNyfe7WAAtYPk/edit?gid=0#gid=0)
* [2025-12-13, 05:05:00](https://soylentnews.org/article.pl?sid=25/12/11/092209&amp;from=rss) - [USA Wants Your Social Media History If You Visit](https://soylentnews.org/article.pl?sid=25/12/11/092209&amp;from=rss)
* [2025-12-13, 04:10:48](https://lobste.rs/s/dndrsh/indices_point_between_elements_2015) - [Indices point between elements (2015)](https://blog.nelhage.com/2015/08/indices-point-between-elements/)
* [2025-12-13, 02:06:05](https://lobste.rs/s/zhfh4t/vacuum_is_lie_about_your_indexes) - [VACUUM Is a Lie: About Your Indexes](https://boringsql.com/posts/vacuum-is-lie/)
* [2025-12-13, 00:21:00](https://soylentnews.org/article.pl?sid=25/12/11/023241&amp;from=rss) - [Man Dies of Rabies After Kidney Transplant From Donor Who Saved Kitten From Skunk](https://soylentnews.org/article.pl?sid=25/12/11/023241&amp;from=rss)
* [2025-12-12, 19:36:00](https://soylentnews.org/article.pl?sid=25/12/11/0157235&amp;from=rss) - [ICEBlock App Sues Trump Administration for Censorship and &apos;Unlawful Threats&apos;](https://soylentnews.org/article.pl?sid=25/12/11/0157235&amp;from=rss)
* [2025-12-12, 14:54:00](https://soylentnews.org/article.pl?sid=25/12/11/0150219&amp;from=rss) - [Ubuntu to Offer AMD ROCm Packages for AI Processing](https://soylentnews.org/article.pl?sid=25/12/11/0150219&amp;from=rss)
* [2025-12-12, 10:07:00](https://soylentnews.org/article.pl?sid=25/12/10/2258243&amp;from=rss) - [Porsche Panic in Russia as Pricey Status Symbols Forget How to Car](https://soylentnews.org/article.pl?sid=25/12/10/2258243&amp;from=rss)
* [2025-12-12, 05:22:00](https://soylentnews.org/article.pl?sid=25/12/10/2256226&amp;from=rss) - [Pebble Index 01 Arrives as a Private Open Source Voice Capture Ring](https://soylentnews.org/article.pl?sid=25/12/10/2256226&amp;from=rss)
* [2025-12-12, 00:39:00](https://soylentnews.org/article.pl?sid=25/12/10/2252241&amp;from=rss) - [Russia Says It Might Build its Own Linux Community After Removal of Several Kernel Maintainers](https://soylentnews.org/article.pl?sid=25/12/10/2252241&amp;from=rss)
* [2025-12-11, 19:56:00](https://soylentnews.org/article.pl?sid=25/12/10/2248258&amp;from=rss) - [ER Doctors Are Sounding the Alarm on a Fast-Growing Cannabis Illness](https://soylentnews.org/article.pl?sid=25/12/10/2248258&amp;from=rss)
* [2025-12-11, 15:07:00](https://soylentnews.org/article.pl?sid=25/12/10/1242208&amp;from=rss) - [AI Favors Texts Written by Other AIs, Even When They&apos;re Worse Than Human Ones](https://soylentnews.org/article.pl?sid=25/12/10/1242208&amp;from=rss)
* [2025-12-11, 10:25:00](https://soylentnews.org/article.pl?sid=25/12/10/0213247&amp;from=rss) - [Proton Launches Encrypted Sheets as a Privacy-First Alternative to Google, Microsoft Excel](https://soylentnews.org/article.pl?sid=25/12/10/0213247&amp;from=rss)
* [2025-12-11, 05:48:00](https://soylentnews.org/article.pl?sid=25/12/10/0211215&amp;from=rss) - [This German State Decides to Save €15 Million Each Year By Kicking Out Microsoft for Open Source](https://soylentnews.org/article.pl?sid=25/12/10/0211215&amp;from=rss)
* [2025-12-11, 00:52:00](https://soylentnews.org/article.pl?sid=25/12/10/027248&amp;from=rss) - [Chattanooga&apos;s Municipal Fiber Network Has Delivered $5.3 Billion in Community Benefits](https://soylentnews.org/article.pl?sid=25/12/10/027248&amp;from=rss)
* [2025-12-10, 21:08:41](https://news.ycombinator.com/item?id=46223882) - [Useful patterns for building HTML tools](https://simonwillison.net/2025/Dec/10/html-tools/)
* [2025-12-10, 20:11:00](https://soylentnews.org/article.pl?sid=25/12/10/023246&amp;from=rss) - [Planned Satellite Constellations May Swamp Future Orbiting Telescopes](https://soylentnews.org/article.pl?sid=25/12/10/023246&amp;from=rss)
* [2025-12-10, 18:36:00](https://news.ycombinator.com/item?id=46221575) - [No-Tifier (2017)](https://subject.space/projects/no-tifier/)
* [2025-12-10, 15:25:00](https://soylentnews.org/article.pl?sid=25/12/08/1621249&amp;from=rss) - [Germany Bets Billions on Nuclear Fusion for Energy Future](https://soylentnews.org/article.pl?sid=25/12/08/1621249&amp;from=rss)
* [2025-12-10, 12:50:46](https://news.ycombinator.com/item?id=46217126) - [Create a Markdown Editor in Ruby on Rails](https://blog.appsignal.com/2025/12/10/create-a-markdown-editor-in-ruby-on-rails.html)
* [2025-12-10, 10:43:00](https://soylentnews.org/article.pl?sid=25/12/08/1614203&amp;from=rss) - [A Therapeutic HPV Vaccine Shrank Cervical Tumors in Mice](https://soylentnews.org/article.pl?sid=25/12/08/1614203&amp;from=rss)
* [2025-12-10, 10:03:56](https://news.ycombinator.com/item?id=46216008) - [Getting into Public Speaking](https://james.brooks.page/blog/getting-into-public-speaking)
* [2025-12-10, 05:52:00](https://soylentnews.org/article.pl?sid=25/12/08/1611257&amp;from=rss) - [Zig Quits GitHub, Says Microsoft&apos;s AI Obsession Has Ruined the Service](https://soylentnews.org/article.pl?sid=25/12/08/1611257&amp;from=rss)
* [2025-12-10, 04:09:04](https://news.ycombinator.com/item?id=46213985) - [Cat Gap](https://en.wikipedia.org/wiki/Cat_gap)
* [2025-12-10, 01:09:00](https://soylentnews.org/article.pl?sid=25/12/08/0456233&amp;from=rss) - [This Cellular Trick Helps Cancer Spread, but Could Also Stop It](https://soylentnews.org/article.pl?sid=25/12/08/0456233&amp;from=rss)
