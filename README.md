# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Developments

* [Maximally minimal view types · baby steps](https://smallcultfollowing.com/babysteps/blog/2026/03/21/view-types-max-min/) ([Comments](https://lobste.rs/s/rnfqfd/maximally_minimal_view_types_baby_steps))

* [SSH certificates and git signing](https://codon.org.uk/~mjg59/blog/p/ssh-certificates-and-git-signing/) ([Comments](https://lobste.rs/s/jr9zx6/ssh_certificates_git_signing))

* [Intel, NVIDIA, AMD GPU Drivers Finally Play Nice With ReactOS](https://tech.slashdot.org/story/26/03/21/1712201/intel-nvidia-amd-gpu-drivers-finally-play-nice-with-reactos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://tech.slashdot.org/story/26/03/21/1712201/intel-nvidia-amd-gpu-drivers-finally-play-nice-with-reactos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Predicting home electricity usage based on historical patterns in Home Assistant](https://blog.cyplo.dev/posts/2026/03/load-prediction-in-home-assistant/) ([Comments](https://lobste.rs/s/ufxrc1/predicting_home_electricity_usage_based))

* [Show HN: Termcraft – terminal-first 2D sandbox survival in Rust](https://github.com/pagel-s/termcraft) ([Comments](https://news.ycombinator.com/item?id=47469949))

* [Grafeo – A fast, lean, embeddable graph database built in Rust](https://grafeo.dev/) ([Comments](https://news.ycombinator.com/item?id=47467567))

## AI and Machine Learning

* [Tinybox- offline AI device 120B parameters](https://tinygrad.org/#tinybox) ([Comments](https://news.ycombinator.com/item?id=47470773))

* [What creative technical outlets of yours have been ruined by generative AI?](https://lobste.rs/s/vvt1fh/what_creative_technical_outlets_yours) ([Comments](https://lobste.rs/s/vvt1fh/what_creative_technical_outlets_yours))

* [Thinking Fast, Slow, and Artificial: How AI Is Reshaping Human Reasoning](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6097646) ([Comments](https://news.ycombinator.com/item?id=47467913))

* [OpenCode – Open source AI coding agent](https://opencode.ai/) ([Comments](https://news.ycombinator.com/item?id=47460525))

* [EnshittifAIcation](https://it-notes.dragas.net/2026/03/20/enshittifaication/) ([Comments](https://lobste.rs/s/cvt7fd/enshittifaication))

## Social and Economic Impact

* [Millions Face Mobile Internet Outages in Moscow. 'Digital Crackdown' Feared](https://yro.slashdot.org/story/26/03/21/2135236/millions-face-mobile-internet-outages-in-moscow-digital-crackdown-feared?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://yro.slashdot.org/story/26/03/21/2135236/millions-face-mobile-internet-outages-in-moscow-digital-crackdown-feared?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Hawaii's worst flooding in 20 years threatens dam, prompts evacuations](https://www.nbcnews.com/weather/floods/hawaii-worst-flooding-in-20-years-rcna264573) ([Comments](https://news.ycombinator.com/item?id=47470658))

* [Mayor of Paris removed parking spaces, reduced the number of cars](https://www.cnn.com/2026/03/21/travel/paris-transformation-anne-hidalgo-mayor) ([Comments](https://news.ycombinator.com/item?id=47466697))

* [Chimps’ Love for Crystals Could Help Us Understand Our Own Ancestors’ Fascination With Gems](https://soylentnews.org/article.pl?sid=26/03/17/0839217&amp;from=rss) ([Comments](https://soylentnews.org/article.pl?sid=26/03/17/0839217&amp;from=rss))

## Health and Environment

* [Juicier Steaks Soon? The UK Approves Testing of Gene-Edited Cow Feed](https://science.slashdot.org/story/26/03/21/2036248/juicier-steaks-soon-the-uk-approves-testing-of-gene-edited-cow-feed?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://science.slashdot.org/story/26/03/21/2036248/juicier-steaks-soon-the-uk-approves-testing-of-gene-edited-cow-feed?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [No evidence cannabis helps anxiety, depression, or PTSD](https://www.sciencedaily.com/releases/2026/03/260319044656.htm) ([Comments](https://news.ycombinator.com/item?id=47470750))

* [NASA's Hubble Unexpectedly Catches Comet Breaking Up](https://science.slashdot.org/story/26/03/20/2251251/nasas-hubble-unexpectedly-catches-comet-breaking-up?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://science.slashdot.org/story/26/03/20/2251251/nasas-hubble-unexpectedly-catches-comet-breaking-up?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

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

* [2026-03-21, 21:38:55](https://lobste.rs/s/rnfqfd/maximally_minimal_view_types_baby_steps) - [Maximally minimal view types · baby steps](https://smallcultfollowing.com/babysteps/blog/2026/03/21/view-types-max-min/)
* [2026-03-21, 21:38:00](https://yro.slashdot.org/story/26/03/21/2135236/millions-face-mobile-internet-outages-in-moscow-digital-crackdown-feared?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Millions Face Mobile Internet Outages in Moscow. &apos;Digital Crackdown&apos; Feared](https://yro.slashdot.org/story/26/03/21/2135236/millions-face-mobile-internet-outages-in-moscow-digital-crackdown-feared?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-21, 21:37:27](https://lobste.rs/s/jr9zx6/ssh_certificates_git_signing) - [SSH certificates and git signing](https://codon.org.uk/~mjg59/blog/p/ssh-certificates-and-git-signing/)
* [2026-03-21, 21:31:44](https://lobste.rs/s/6c0xve/console_debugger_for_async_rust) - [console: a debugger for async rust](https://github.com/tokio-rs/console)
* [2026-03-21, 21:04:37](https://lobste.rs/s/nsnlxi/bye_bye_rtmp) - [bye bye RTMP](https://daniel.haxx.se/blog/2026/03/21/bye-bye-rtmp/)
* [2026-03-21, 20:53:43](https://news.ycombinator.com/item?id=47471213) - [Revert \&quot;userdb: add birthDate field to JSON user records](https://github.com/systemd/systemd/pull/41179)
* [2026-03-21, 20:38:00](https://science.slashdot.org/story/26/03/21/2036248/juicier-steaks-soon-the-uk-approves-testing-of-gene-edited-cow-feed?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Juicier Steaks Soon? The UK Approves Testing of Gene-Edited Cow Feed](https://science.slashdot.org/story/26/03/21/2036248/juicier-steaks-soon-the-uk-approves-testing-of-gene-edited-cow-feed?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-21, 20:32:20](https://news.ycombinator.com/item?id=47470991) - [Do Not Turn Child Protection into Internet Access Control](https://news.dyne.org/child-protection-is-not-access-control/)
* [2026-03-21, 20:08:37](https://news.ycombinator.com/item?id=47470773) - [Tinybox- offline AI device 120B parameters](https://tinygrad.org/#tinybox)
* [2026-03-21, 20:05:58](https://news.ycombinator.com/item?id=47470750) - [No evidence cannabis helps anxiety, depression, or PTSD](https://www.sciencedaily.com/releases/2026/03/260319044656.htm)
* [2026-03-21, 19:58:06](https://lobste.rs/s/mznrvv/common_lisp_development_tooling) - [Common Lisp Development Tooling](https://www.creativetension.co/posts/common-lisp-development-tooling)
* [2026-03-21, 19:55:23](https://news.ycombinator.com/item?id=47470658) - [Hawaii&apos;s worst flooding in 20 years threatens dam, prompts evacuations](https://www.nbcnews.com/weather/floods/hawaii-worst-flooding-in-20-years-rcna264573)
* [2026-03-21, 19:34:00](https://science.slashdot.org/story/26/03/21/1838236/can-private-space-companies-replace-the-iss-before-2030?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Can Private Space Companies Replace the ISS Before 2030?](https://science.slashdot.org/story/26/03/21/1838236/can-private-space-companies-replace-the-iss-before-2030?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-21, 19:07:20](https://news.ycombinator.com/item?id=47470200) - [No Semicolons Needed](https://terts.dev/blog/no-semicolons-needed/)
* [2026-03-21, 19:07:09](https://lobste.rs/s/zoyqdb/monsterbook) - [MonsterBook](https://github.com/gladir/MonsterBook)
* [2026-03-21, 18:42:38](https://news.ycombinator.com/item?id=47469949) - [Show HN: Termcraft – terminal-first 2D sandbox survival in Rust](https://github.com/pagel-s/termcraft)
* [2026-03-21, 18:34:00](https://tech.slashdot.org/story/26/03/21/1712201/intel-nvidia-amd-gpu-drivers-finally-play-nice-with-reactos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel, NVIDIA, AMD GPU Drivers Finally Play Nice With ReactOS](https://tech.slashdot.org/story/26/03/21/1712201/intel-nvidia-amd-gpu-drivers-finally-play-nice-with-reactos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-21, 18:14:32](https://lobste.rs/s/ufxrc1/predicting_home_electricity_usage_based) - [Predicting home electricity usage based on historical patterns in Home Assistant](https://blog.cyplo.dev/posts/2026/03/load-prediction-in-home-assistant/)
* [2026-03-21, 17:46:00](https://news.ycombinator.com/item?id=47469331) - [Hide macOS Tahoe&apos;s Menu Icons](https://512pixels.net/2026/03/hide-macos-tahoes-menu-icons-with-this-one-simple-trick/)
* [2026-03-21, 17:40:43](https://lobste.rs/s/f598ob/infinite_lists_lean) - [Infinite Lists in Lean](https://unnamed.website/posts/infinite-lists-lean/)
* [2026-03-21, 17:34:00](https://slashdot.org/story/26/03/21/0126208/50-of-consumers-prefer-brands-that-avoid-genai-content?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [50% of Consumers Prefer Brands That Avoid GenAI Content](https://slashdot.org/story/26/03/21/0126208/50-of-consumers-prefer-brands-that-avoid-genai-content?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-21, 17:22:00](https://soylentnews.org/article.pl?sid=26/03/19/203221&amp;from=rss) - [Nvidia Resumes Manufacturing of H200 Chips for China, CEO Says](https://soylentnews.org/article.pl?sid=26/03/19/203221&amp;from=rss)
* [2026-03-21, 16:40:05](https://lobste.rs/s/hlsbcu/antix_26_released_with_5_init_systems) - [antiX-26 released with 5 init systems](https://antixlinux.com/antix-26-released/)
* [2026-03-21, 16:34:00](https://news.slashdot.org/story/26/03/21/027217/firefox-announces-built-in-vpn-and-other-new-features---and-introduces-its-new-mascot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Firefox Announces Built-In VPN and Other New Features - and Introduces Its New Mascot](https://news.slashdot.org/story/26/03/21/027217/firefox-announces-built-in-vpn-and-other-new-features---and-introduces-its-new-mascot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-21, 15:34:00](https://linux.slashdot.org/story/26/03/21/0424203/systemd-adds-optional-birthdate-field-for-age-verification-to-json-user-records?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SystemD Adds Optional &apos;birthDate&apos; Field for Age Verification to JSON User Records](https://linux.slashdot.org/story/26/03/21/0424203/systemd-adds-optional-birthdate-field-for-age-verification-to-json-user-records?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-21, 15:32:51](https://lobste.rs/s/xfaivk/pigeon_s_device) - [Pigeon&apos;s Device](http://pigeonsnest.co.uk/stuff/pigeons-device.html)
* [2026-03-21, 15:30:29](https://news.ycombinator.com/item?id=47467913) - [Thinking Fast, Slow, and Artificial: How AI Is Reshaping Human Reasoning](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6097646)
* [2026-03-21, 15:16:27](https://lobste.rs/s/uqeo3m/solod_go_can_be_better_c) - [Solod: Go can be a better C](https://antonz.org/solod/)
* [2026-03-21, 15:10:54](https://news.ycombinator.com/item?id=47467746) - [404 Deno CEO not found](https://dbushell.com/2026/03/20/denos-decline-and-layoffs/)
* [2026-03-21, 15:02:30](https://news.ycombinator.com/item?id=47467671) - [Show HN: Joonote – A note-taking app on your lock screen and notification panel](https://joonote.com/)
* [2026-03-21, 14:58:47](https://lobste.rs/s/vxsjiv/why_craft_lovers_are_losing_their_craft) - [Why craft-lovers are losing their craft](https://writings.hongminhee.org/2026/03/craft-alienation-llm/)
* [2026-03-21, 14:50:18](https://news.ycombinator.com/item?id=47467567) - [Grafeo – A fast, lean, embeddable graph database built in Rust](https://grafeo.dev/)
* [2026-03-21, 14:46:56](https://news.ycombinator.com/item?id=47467537) - [Some things just take time](https://lucumr.pocoo.org/2026/3/20/some-things-just-take-time/)
* [2026-03-21, 14:34:00](https://slashdot.org/story/26/03/21/0529209/jeff-bezos-seeking-100-billion-to-buy-manufacturing-companies-transform-them-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Jeff Bezos Seeking $100 Billion to Buy Manufacturing Companies, &apos;Transform&apos; Them With AI](https://slashdot.org/story/26/03/21/0529209/jeff-bezos-seeking-100-billion-to-buy-manufacturing-companies-transform-them-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-21, 14:22:48](https://news.ycombinator.com/item?id=47467300) - [A pig&apos;s brain has been frozen with its cellular activity locked in place](https://www.newscientist.com/article/2520204-major-leap-towards-reanimation-after-death-as-mammals-brain-preserved/)
* [2026-03-21, 13:52:22](https://news.ycombinator.com/item?id=47467034) - [Western carmakers&apos; retreat from electric risks dooming them to irrelevance](https://www.theguardian.com/business/2026/mar/21/west-carmakers-retreat-electric-vehicle-risks-irrelevance-iran-war-evs-china)
* [2026-03-21, 13:45:22](https://lobste.rs/s/72zcea/binary_dependencies_identifying_hidden) - [Binary Dependencies: Identifying the Hidden Packages We All Depend On](https://vlad.website/binary-dependencies-identifying-the-hidden-packages-we-all-depend-on/)
* [2026-03-21, 13:42:31](https://lobste.rs/s/xxfivf/rant_about_resolutions) - [A rant about resolutions](https://blog.brixit.nl/rant-about-resolutions/)
* [2026-03-21, 13:12:10](https://news.ycombinator.com/item?id=47466697) - [Mayor of Paris removed parking spaces, reduced the number of cars](https://www.cnn.com/2026/03/21/travel/paris-transformation-anne-hidalgo-mayor)
* [2026-03-21, 12:40:00](https://soylentnews.org/article.pl?sid=26/03/19/201233&amp;from=rss) - [Tundra Tongue: The Science Behind a Very Cold Mistake](https://soylentnews.org/article.pl?sid=26/03/19/201233&amp;from=rss)
* [2026-03-21, 11:00:00](https://science.slashdot.org/story/26/03/20/2251251/nasas-hubble-unexpectedly-catches-comet-breaking-up?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA&apos;s Hubble Unexpectedly Catches Comet Breaking Up](https://science.slashdot.org/story/26/03/20/2251251/nasas-hubble-unexpectedly-catches-comet-breaking-up?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-21, 10:30:58](https://lobste.rs/s/jiqeom/is_simple_actually_good) - [Is simple actually good?](https://darth.games/posts/is-simple-good/)
* [2026-03-21, 09:38:09](https://lobste.rs/s/dhogio/thoughts_on_openai_acquiring_astral_uv) - [Thoughts on OpenAI acquiring Astral and uv/ruff/ty](https://simonwillison.net/2026/Mar/19/openai-acquiring-astral/)
* [2026-03-21, 07:55:00](https://soylentnews.org/article.pl?sid=26/03/19/1958201&amp;from=rss) - [Afroman Wins &apos;Lemon Pound Cake&apos; Lawsuit Over Raid-Turned-Music-Video](https://soylentnews.org/article.pl?sid=26/03/19/1958201&amp;from=rss)
* [2026-03-21, 07:30:16](https://news.ycombinator.com/item?id=47464818) - [Blocking Internet Archive Won&apos;t Stop AI, but Will Erase Web&apos;s Historical Record](https://www.eff.org/deeplinks/2026/03/blocking-internet-archive-wont-stop-ai-it-will-erase-webs-historical-record)
* [2026-03-21, 07:00:00](https://tech.slashdot.org/story/26/03/20/2244207/officer-leaks-location-of-french-aircraft-carrier-with-strava-run?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Officer Leaks Location of French Aircraft Carrier With Strava Run](https://tech.slashdot.org/story/26/03/20/2244207/officer-leaks-location-of-french-aircraft-carrier-with-strava-run?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-21, 06:14:17](https://lobste.rs/s/d5nvf5/h_r_block_tax_software_installs_tls_root) - [H&amp;R Block tax software installs a TLS root certificate with bundled private key](https://news.ycombinator.com/item?id=47457162)
* [2026-03-21, 05:06:11](https://news.ycombinator.com/item?id=47464134) - [Ubuntu 26.04 Ends 46 Years of Silent sudo Passwords](https://pbxscience.com/ubuntu-26-04-ends-46-years-of-silent-sudo-passwords/)
* [2026-03-21, 04:23:02](https://lobste.rs/s/dttagp/unix_philosophy_is_dead_long_live) - [Unix philosophy is dead! Long live... something else?](https://sdomi.pl/weblog/27-manifesto-of-a-burnt-out-hacker/)
* [2026-03-21, 03:30:00](https://yro.slashdot.org/story/26/03/20/2111225/white-house-unveils-national-ai-policy-framework-to-limit-state-power?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [White House Unveils National AI Policy Framework To Limit State Power](https://yro.slashdot.org/story/26/03/20/2111225/white-house-unveils-national-ai-policy-framework-to-limit-state-power?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-21, 03:07:00](https://soylentnews.org/article.pl?sid=26/03/19/1638217&amp;from=rss) - [How Should We Define Mathematical Beauty in the AI Age?](https://soylentnews.org/article.pl?sid=26/03/19/1638217&amp;from=rss)
* [2026-03-21, 02:47:13](https://news.ycombinator.com/item?id=47463547) - [FFmpeg 101 (2024)](https://blogs.igalia.com/llepage/ffmpeg-101/)
* [2026-03-21, 02:27:43](https://lobste.rs/s/vvt1fh/what_creative_technical_outlets_yours) - [What creative technical outlets of yours have been ruined by generative AI?](https://lobste.rs/s/vvt1fh/what_creative_technical_outlets_yours)
* [2026-03-20, 23:00:00](https://news.slashdot.org/story/26/03/20/2052214/cbs-news-shutters-radio-service-after-nearly-a-century?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CBS News Shutters Radio Service After Nearly a Century](https://news.slashdot.org/story/26/03/20/2052214/cbs-news-shutters-radio-service-after-nearly-a-century?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-20, 22:15:00](https://soylentnews.org/article.pl?sid=26/03/19/1636248&amp;from=rss) - [Invisible Malicious Code Attacks 151 GitHub Repos And VS Code — Glassworm Attack Uses Blockchain](https://soylentnews.org/article.pl?sid=26/03/19/1636248&amp;from=rss)
* [2026-03-20, 22:00:00](https://tech.slashdot.org/story/26/03/20/2043213/microsoft-says-it-is-fixing-windows-11?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Says It Is Fixing Windows 11](https://tech.slashdot.org/story/26/03/20/2043213/microsoft-says-it-is-fixing-windows-11?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-20, 21:03:52](https://news.ycombinator.com/item?id=47460525) - [OpenCode – Open source AI coding agent](https://opencode.ai/)
* [2026-03-20, 21:00:00](https://hardware.slashdot.org/story/26/03/20/2035252/work-from-home-and-drive-more-slowly-to-save-energy-iea-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Work From Home and Drive More Slowly To Save Energy, IEA Says](https://hardware.slashdot.org/story/26/03/20/2035252/work-from-home-and-drive-more-slowly-to-save-energy-iea-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-20, 20:54:57](https://news.ycombinator.com/item?id=47460452) - [A Japanese glossary of chopsticks faux pas (2022)](https://www.nippon.com/en/japan-data/h01362/)
* [2026-03-20, 20:00:00](https://slashdot.org/story/26/03/20/1711251/openai-plans-launch-of-desktop-superapp?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Plans Launch of Desktop &apos;Superapp&apos;](https://slashdot.org/story/26/03/20/1711251/openai-plans-launch-of-desktop-superapp?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-20, 18:08:40](https://lobste.rs/s/ldglpx/adding_live_reload_static_site_generator) - [Adding Live Reload to a Static Site Generator Written in Go](https://jon.chrt.dev/2026/03/20/adding-live-reload-to-a-static-site-generator-written-in-go.html)
* [2026-03-20, 17:53:00](https://soylentnews.org/article.pl?sid=26/03/19/1635218&amp;from=rss) - [Researchers Played Music to Cells – Aggressiveness of Laryngeal Cancer Decreased](https://soylentnews.org/article.pl?sid=26/03/19/1635218&amp;from=rss)
* [2026-03-20, 17:42:40](https://lobste.rs/s/8iyfng/related_ui_elements_should_not_appear) - [Related UI elements should not appear unrelated](https://rakhim.exotext.com/related-ui-elements-should-not-appear-unrelated)
* [2026-03-20, 16:27:31](https://lobste.rs/s/bekb7j/lobsters_interview_with_internet) - [Lobsters Interview with Internet_Jannitor](https://alexalejandre.com/programming/interview-with-john-earnest/)
* [2026-03-20, 16:14:06](https://lobste.rs/s/eewvj8/what_we_heard_about_rust_s_challenges_how) - [What we heard about Rust&apos;s challenges, and how we can address them](https://blog.rust-lang.org/2026/03/20/rust-challenges.md/)
* [2026-03-20, 14:33:41](https://news.ycombinator.com/item?id=47455138) - [Molly guard in reverse](https://unsung.aresluna.org/molly-guard-in-reverse/)
* [2026-03-20, 13:53:48](https://lobste.rs/s/ghtnpx/i_m_ok_being_left_behind_thanks) - [I&apos;m OK being left behind, thanks](https://shkspr.mobi/blog/2026/03/im-ok-being-left-behind-thanks/)
* [2026-03-20, 12:46:00](https://soylentnews.org/article.pl?sid=26/03/19/0318230&amp;from=rss) - [Elon Musk Says His Chipmaking &apos;Terafab Project&apos; Venture Will Launch in Seven Days](https://soylentnews.org/article.pl?sid=26/03/19/0318230&amp;from=rss)
* [2026-03-20, 10:21:12](https://lobste.rs/s/cvt7fd/enshittifaication) - [EnshittifAIcation](https://it-notes.dragas.net/2026/03/20/enshittifaication/)
* [2026-03-20, 07:57:00](https://soylentnews.org/article.pl?sid=26/03/19/0310236&amp;from=rss) - [Massive Interpol Operation Takes Down 45,000 Ip Addresses and Leads to 94 Arrests](https://soylentnews.org/article.pl?sid=26/03/19/0310236&amp;from=rss)
* [2026-03-20, 03:11:00](https://soylentnews.org/article.pl?sid=26/03/19/035202&amp;from=rss) - [The Ongoing Strait of Hormuz Blockage Will Impact the Semiconductor and AI Industries](https://soylentnews.org/article.pl?sid=26/03/19/035202&amp;from=rss)
* [2026-03-19, 22:23:00](https://soylentnews.org/article.pl?sid=26/03/19/0258237&amp;from=rss) - [Over Fifteen Years Later, Microsoft Morged My Diagram](https://soylentnews.org/article.pl?sid=26/03/19/0258237&amp;from=rss)
* [2026-03-19, 17:38:00](https://soylentnews.org/article.pl?sid=26/03/18/1530220&amp;from=rss) - [Predicted by Einstein 100 Years Ago, This Cosmic Phenomenon Has Finally Been Observed](https://soylentnews.org/article.pl?sid=26/03/18/1530220&amp;from=rss)
* [2026-03-19, 12:53:00](https://soylentnews.org/article.pl?sid=26/03/18/1524211&amp;from=rss) - [100 Years Later, Where is Robert Goddard&apos;s First Liquid-Fuel Rocket?](https://soylentnews.org/article.pl?sid=26/03/18/1524211&amp;from=rss)
* [2026-03-19, 08:08:00](https://soylentnews.org/article.pl?sid=26/03/18/1522208&amp;from=rss) - [The Science of How Fireflies Stay in Sync](https://soylentnews.org/article.pl?sid=26/03/18/1522208&amp;from=rss)
* [2026-03-19, 04:40:59](https://news.ycombinator.com/item?id=47435028) - [How Invisalign became the biggest user of 3D printers](https://www.wired.com/story/how-invisalign-became-the-worlds-biggest-3d-printing-company/)
* [2026-03-19, 04:35:51](https://news.ycombinator.com/item?id=47434986) - [Electronics for Kids, 2nd Edition](https://nostarch.com/electronics-for-kids-2e)
* [2026-03-19, 03:23:00](https://soylentnews.org/article.pl?sid=26/03/17/0844255&amp;from=rss) - [Humanities in the Machine](https://soylentnews.org/article.pl?sid=26/03/17/0844255&amp;from=rss)
* [2026-03-19, 00:58:25](https://news.ycombinator.com/item?id=47433429) - [Books of the Century by Le Monde](https://standardebooks.org/collections/le-mondes-100-books-of-the-century)
* [2026-03-18, 22:38:00](https://soylentnews.org/article.pl?sid=26/03/17/0839217&amp;from=rss) - [Chimps’ Love for Crystals Could Help Us Understand Our Own Ancestors’ Fascination With Gems](https://soylentnews.org/article.pl?sid=26/03/17/0839217&amp;from=rss)
* [2026-03-18, 21:26:23](https://news.ycombinator.com/item?id=47431625) - [ZJIT removes redundant object loads and stores](https://railsatscale.com/2026-03-18-how-zjit-removes-redundant-object-loads-and-stores/)
* [2026-03-18, 17:54:00](https://soylentnews.org/politics/article.pl?sid=26/03/17/0835230&amp;from=rss) - [FCC Chairman Threatens To Revoke TV Licenses Over Iran Coverage](https://soylentnews.org/politics/article.pl?sid=26/03/17/0835230&amp;from=rss)
* [2026-03-18, 13:04:00](https://soylentnews.org/article.pl?sid=26/03/17/0831246&amp;from=rss) - [Woman Sneezes Out Maggots After Fly Larvae Get Trapped in Her Deviated Septum](https://soylentnews.org/article.pl?sid=26/03/17/0831246&amp;from=rss)
* [2026-03-18, 08:21:00](https://soylentnews.org/article.pl?sid=26/03/17/0828240&amp;from=rss) - [Research Shows How Lost Memories Can be Reactivated](https://soylentnews.org/article.pl?sid=26/03/17/0828240&amp;from=rss)
* [2026-03-18, 05:00:18](https://news.ycombinator.com/item?id=47421749) - [Meta&apos;s Omnilingual MT for 1,600 Languages](https://ai.meta.com/research/publications/omnilingual-mt-machine-translation-for-1600-languages/?_fb_noscript=1)
* [2026-03-18, 03:36:00](https://soylentnews.org/article.pl?sid=26/03/17/0827224&amp;from=rss) - [Apocalyptic Beliefs Are No Longer Fringe—and They&apos;re Shaping How People Respond](https://soylentnews.org/article.pl?sid=26/03/17/0827224&amp;from=rss)
* [2026-03-17, 22:53:00](https://soylentnews.org/article.pl?sid=26/03/16/140213&amp;from=rss) - [Porsche Puts Its Faith Back in Internal Combustion Engines](https://soylentnews.org/article.pl?sid=26/03/16/140213&amp;from=rss)
* [2026-03-17, 22:45:12](https://news.ycombinator.com/item?id=47419391) - [Mamba-3](https://www.together.ai/blog/mamba-3)
* [2026-03-17, 18:08:00](https://soylentnews.org/article.pl?sid=26/03/16/1356204&amp;from=rss) - [Meta is Ending Instagram Direct Message End-to-End Encryption](https://soylentnews.org/article.pl?sid=26/03/16/1356204&amp;from=rss)
* [2026-03-17, 16:48:51](https://news.ycombinator.com/item?id=47415179) - [The paddle wheel aircraft carriers of Lake Michigan](https://signoregalilei.com/2026/03/08/the-paddle-wheel-aircraft-carriers-of-lake-michigan/)
* [2026-03-17, 13:23:00](https://soylentnews.org/article.pl?sid=26/03/16/1353215&amp;from=rss) - [IBM, Sonic Delay Lines, and the History of the 80×24 Display](https://soylentnews.org/article.pl?sid=26/03/16/1353215&amp;from=rss)
* [2026-03-17, 11:14:23](https://news.ycombinator.com/item?id=47411110) - [The seven hour explosion nobody could explain](https://phys.org/news/2026-03-hour-explosion.html)
* [2026-03-17, 08:38:00](https://soylentnews.org/article.pl?sid=26/03/15/1351230&amp;from=rss) - [Magnetars Drag Spacetime to Power Superluminous Supernovae](https://soylentnews.org/article.pl?sid=26/03/15/1351230&amp;from=rss)
* [2026-03-17, 03:57:00](https://soylentnews.org/article.pl?sid=26/03/15/1339231&amp;from=rss) - [Musk Fails To Block California Data Disclosure Law He Fears Will Ruin XAI](https://soylentnews.org/article.pl?sid=26/03/15/1339231&amp;from=rss)
