# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Programming

* [No Let, No Rec, No Problem: A Gentler Introduction to the Y and Z combinators](https://irfanali.org/blog/zcom) - An approachable guide to the Y and Z combinators, providing a simpler way to understand these complex functional programming constructs. [Comments](https://lobste.rs/s/mbejmj/no_let_no_rec_no_problem_gentler)

* [Self-calling executables](https://log.pfad.fr/2026/self-calling-executable/) - Explore a unique software concept where executables can call themselves for modular functionality. [Comments](https://lobste.rs/s/o78n3y/self_calling_executables)

* [rustc_codegen_jvm: Rust compiler backend to emit JVM bytecode](https://github.com/IntegralPilot/rustc_codegen_jvm) - Learn about a new Rust compiler backend designed for generating JVM bytecode, combining two powerful ecosystems in programming. [Comments](https://lobste.rs/s/lcldxn/rustc_codegen_jvm_rust_compiler_backend)

* [CS336: Language Modeling from Scratch](https://cs336.stanford.edu/) - A unique course offered by Stanford, showcasing the fundamentals of building language models. [Comments](https://news.ycombinator.com/item?id=48357075)

* [Quality in the Age of Slop](https://sinclairtarget.com/blog/2026/06/01/quality-in-the-age-of-slop/) - A compelling discussion on maintaining software quality amidst decreasing standards in the age of rapid technological iteration. [Comments](https://lobste.rs/s/8ohth3/quality_age_slop)

## Artificial Intelligence

* [iddqd, or the hardest kind of unsafe Rust](https://oxide.computer/blog/iddqd-unsafe) - A deep dive into the challenges surrounding unsafe programming practices in Rust, with lessons for developers. [Comments](https://lobste.rs/s/6eyhii/iddqd_hardest_kind_unsafe_rust)

* [AI Doesn't Have ROI](https://www.wheresyoured.at/ai-doesnt-have-roi/) - An analysis that challenges the assumptions behind the return on investment for AI technologies. [Comments](https://news.ycombinator.com/item?id=48370437)

* [US Law Enforcement Warns of \"Anti-Tech Extremism\" as AI Hatred Grows](https://soylentnews.org/politics/article.pl?sid=26/06/01/1149213&amp;from=rss) - Insights into escalating opposition to artificial intelligence by certain groups. [Comments](https://news.ycombinator.com/item?id=48369098)

* [Hating AI is good, actually](https://www.thehandbasket.co/p/hating-ai-is-good-actually) - A contrarian perspective on the perceived over-enthusiasm around artificial intelligence. [Comments](https://lobste.rs/s/97uskt/hating_ai_is_good_actually)

## Memory Safety and System Security

* [Memory safety is a matter of life and death](https://joshlf.com/posts/memory-safety-life-and-death/) - A critical examination of the role of memory safety in software engineering and the implications of its absence. [Comments](https://lobste.rs/s/67tqpz/memory_safety_is_matter_life_death)

* [Browser identification through header order](https://geocar.sdf1.org/browser-verification.html) - Delve into the implications of HTTP header order for browser fingerprinting and identification. [Comments](https://lobste.rs/s/4az1lx/browser_identification_through_header)

## Emerging Hardware Developments

* [User-Replaceable Batteries Are Coming Back In a Big Way](https://hardware.slashdot.org/story/26/06/02/0520254/user-replaceable-batteries-are-coming-back-in-a-big-way?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The resurgence of user-replaceable batteries signals a rethinking of consumer electronics design. [Comments](https://hardware.slashdot.org/story/26/06/02/0520254/user-replaceable-batteries-are-coming-back-in-a-big-way?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Google Requests Permission to Release 32 Million Mosquitoes In California and Florida](https://news.slashdot.org/story/26/06/02/052244/google-requests-permission-to-release-32-million-mosquitoes-in-california-and-florida?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Google's latest initiative involves deploying genetically engineered mosquitoes to combat health issues. [Comments](https://news.slashdot.org/story/26/06/02/052244/google-requests-permission-to-release-32-million-mosquitoes-in-california-and-florida?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Historical and Niche Software

* [Pinball on 64-bit Alpha AXP Windows NT](https://virtuallyfun.com/2026/06/02/pinball-on-64-bit-alpha-axp-windows-nt/) - A nostalgic exploration of running essential legacy software on old systems. [Comments](https://lobste.rs/s/bygb9t/pinball_on_64_bit_alpha_axp_windows_nt)

* [Why Janet? (2023)](https://ianthehenry.com/posts/why-janet/) - An argument for utilizing the little-known programming language Janet for unique use cases. [Comments](https://news.ycombinator.com/item?id=48367907)

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

* [2026-06-02, 17:03:11](https://lobste.rs/s/mbejmj/no_let_no_rec_no_problem_gentler) - [No Let, No Rec, No Problem: A Gentler Introduction to the Y and Z combinators](https://irfanali.org/blog/zcom)
* [2026-06-02, 17:00:00](https://yro.slashdot.org/story/26/06/02/1647209/adafruit-pauses-blog-after-demand-letter-from-fluxais-lawyers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Adafruit Pauses Blog After Demand Letter From Flux.ai&apos;s Lawyers](https://yro.slashdot.org/story/26/06/02/1647209/adafruit-pauses-blog-after-demand-letter-from-fluxais-lawyers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-02, 16:54:12](https://lobste.rs/s/o78n3y/self_calling_executables) - [Self-calling executables](https://log.pfad.fr/2026/self-calling-executable/)
* [2026-06-02, 16:20:18](https://lobste.rs/s/6eyhii/iddqd_hardest_kind_unsafe_rust) - [iddqd, or the hardest kind of unsafe Rust](https://oxide.computer/blog/iddqd-unsafe)
* [2026-06-02, 16:00:00](https://hardware.slashdot.org/story/26/06/02/0520254/user-replaceable-batteries-are-coming-back-in-a-big-way?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [User-Replaceable Batteries Are Coming Back In a Big Way](https://hardware.slashdot.org/story/26/06/02/0520254/user-replaceable-batteries-are-coming-back-in-a-big-way?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-02, 15:43:50](https://lobste.rs/s/xvmmvb/recent_improvements_swift_type_checker) - [Recent improvements to the Swift type checker](https://forums.swift.org/t/recent-improvements-to-the-type-checker/87048)
* [2026-06-02, 15:00:00](https://news.slashdot.org/story/26/06/02/0512209/github-copilot-users-react-to-new-usage-based-pricing-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GitHub Copilot Users React To New Usage-Based Pricing System](https://news.slashdot.org/story/26/06/02/0512209/github-copilot-users-react-to-new-usage-based-pricing-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-02, 14:16:20](https://lobste.rs/s/jy1xaa/preparing_for_kde_plasma_s_last_x11) - [Preparing for KDE Plasma’s Last X11-Supported Release](https://blog.davidedmundson.co.uk/blog/596/)
* [2026-06-02, 14:07:42](https://lobste.rs/s/67tqpz/memory_safety_is_matter_life_death) - [Memory safety is a matter of life and death](https://joshlf.com/posts/memory-safety-life-and-death/)
* [2026-06-02, 14:06:52](https://news.ycombinator.com/item?id=48370437) - [AI Doesn&apos;t Have ROI](https://www.wheresyoured.at/ai-doesnt-have-roi/)
* [2026-06-02, 13:56:46](https://news.ycombinator.com/item?id=48370330) - [Please don&apos;t spam people looking for employment. It&apos;s just cruel](https://news.ycombinator.com/item?id=48370330)
* [2026-06-02, 13:53:52](https://news.ycombinator.com/item?id=48370291) - [Fidonet: Technology, Use, Tools, and History (1993)](https://www.fidonet.org/inet92_Randy_Bush.txt)
* [2026-06-02, 13:39:29](https://news.ycombinator.com/item?id=48370144) - [Martin Scorsese Is Embracing A.I](https://www.nytimes.com/2026/06/02/business/media/martin-scorsese-artificial-intelligence.html)
* [2026-06-02, 13:24:32](https://news.ycombinator.com/item?id=48369980) - [A walking tour of surveillance infrastructure in Seattle](https://coveillance.org/a-walking-tour-of-surveillance-infrastructure-in-seattle/)
* [2026-06-02, 13:15:14](https://news.ycombinator.com/item?id=48369863) - [Expanding Project Glasswing](https://www.anthropic.com/news/expanding-project-glasswing)
* [2026-06-02, 13:07:00](https://soylentnews.org/politics/article.pl?sid=26/06/01/1149213&amp;from=rss) - [US Law Enforcement Warns of \&quot;Anti-Tech Extremism\&quot; as AI Hatred Grows](https://soylentnews.org/politics/article.pl?sid=26/06/01/1149213&amp;from=rss)
* [2026-06-02, 12:01:04](https://news.ycombinator.com/item?id=48369098) - [Great Question (YC W21) Is Hiring Applied AI Interns](https://www.ycombinator.com/companies/great-question/jobs/J5TNvQH-ai-engineer-intern)
* [2026-06-02, 12:00:03](https://news.ycombinator.com/item?id=48369088) - [Apple rejected my dictation app for using the accessibility API](https://www.mitmllc.com/blog/apple-rejected-my-dictation-app/)
* [2026-06-02, 11:58:33](https://lobste.rs/s/bygb9t/pinball_on_64_bit_alpha_axp_windows_nt) - [Pinball on 64-bit Alpha AXP Windows NT](https://virtuallyfun.com/2026/06/02/pinball-on-64-bit-alpha-axp-windows-nt/)
* [2026-06-02, 11:53:11](https://lobste.rs/s/q5enyi/bpf_support_gcc_16_beyond) - [BPF support in GCC 16 and beyond](https://lwn.net/SubscriberLink/1071973/19e2866f07249dfb/)
* [2026-06-02, 11:53:01](https://lobste.rs/s/6xwqvv/vim_classic_8_3_released) - [Vim Classic 8.3 released](https://vim-classic.org/news/vim-8.3-released.html)
* [2026-06-02, 11:00:00](https://news.slashdot.org/story/26/06/02/052244/google-requests-permission-to-release-32-million-mosquitoes-in-california-and-florida?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Requests Permission to Release 32 Million Mosquitoes In California and Florida](https://news.slashdot.org/story/26/06/02/052244/google-requests-permission-to-release-32-million-mosquitoes-in-california-and-florida?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-02, 10:23:37](https://news.ycombinator.com/item?id=48368291) - [CSS-Native Parallax Effect](https://dan-webnotes.com/posts/2026-06-02-css-native-parallax-effect/)
* [2026-06-02, 10:15:20](https://lobste.rs/s/lcldxn/rustc_codegen_jvm_rust_compiler_backend) - [rustc_codegen_jvm: Rust compiler backend to emit JVM bytecode](https://github.com/IntegralPilot/rustc_codegen_jvm)
* [2026-06-02, 10:00:56](https://news.ycombinator.com/item?id=48368121) - [Adafruit Receives Demand Letter from Fenwick Legal Counsel on Behalf of Flux.ai](https://blog.adafruit.com/)
* [2026-06-02, 09:52:42](https://news.ycombinator.com/item?id=48368059) - [Stop Ruining It](https://seths.blog/2026/06/stop-ruining-it/)
* [2026-06-02, 09:34:31](https://news.ycombinator.com/item?id=48367907) - [Why Janet? (2023)](https://ianthehenry.com/posts/why-janet/)
* [2026-06-02, 09:34:11](https://news.ycombinator.com/item?id=48367904) - [You Don&apos;t Love Systemd Timers Enough](https://blog.tjll.net/you-dont-love-systemd-timers-enough/)
* [2026-06-02, 09:11:39](https://lobste.rs/s/8ohth3/quality_age_slop) - [Quality in the Age of Slop](https://sinclairtarget.com/blog/2026/06/01/quality-in-the-age-of-slop/)
* [2026-06-02, 09:04:49](https://news.ycombinator.com/item?id=48367723) - [Show HN: Eyeball](https://eyeball.rory.codes/)
* [2026-06-02, 08:24:00](https://soylentnews.org/article.pl?sid=26/06/01/1138224&amp;from=rss) - [Researcher Develops &apos;Spray-On&apos; Stealth Coating For Drones](https://soylentnews.org/article.pl?sid=26/06/01/1138224&amp;from=rss)
* [2026-06-02, 07:12:34](https://lobste.rs/s/2eaosl/kelvin_versioning) - [kelvin versioning](https://wiki.xxiivv.com/site/kelvin_versioning.html)
* [2026-06-02, 07:00:00](https://hardware.slashdot.org/story/26/06/02/0452232/texas-adds-another-huge-solar-farm-as-ercot-grid-demand-soars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Texas Adds Another Huge Solar Farm As ERCOT Grid Demand Soars](https://hardware.slashdot.org/story/26/06/02/0452232/texas-adds-another-huge-solar-farm-as-ercot-grid-demand-soars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-02, 06:51:21](https://lobste.rs/s/4az1lx/browser_identification_through_header) - [Browser identification through header order](https://geocar.sdf1.org/browser-verification.html)
* [2026-06-02, 06:29:00](https://soylentnews.org/meta/article.pl?sid=26/06/02/0621229&amp;from=rss) - [Please see kolie&apos;s journal!](https://soylentnews.org/meta/article.pl?sid=26/06/02/0621229&amp;from=rss)
* [2026-06-02, 05:08:45](https://lobste.rs/s/iwtzvc/strace_ui_bonsai_term_tui_renaissance) - [strace-ui, Bonsai_term, and the TUI renaissance](https://blog.janestreet.com/strace-ui-bonsai-term-and-the-tui-renaissance/)
* [2026-06-02, 04:51:02](https://lobste.rs/s/y0euno/why_janet_2023) - [Why Janet? (2023)](https://ianthehenry.com/posts/why-janet/)
* [2026-06-02, 04:05:23](https://news.ycombinator.com/item?id=48365904) - [Strace-ui, Bonsai_term, and the TUI renaissance](https://blog.janestreet.com/strace-ui-bonsai-term-and-the-tui-renaissance/)
* [2026-06-02, 04:01:30](https://lobste.rs/s/eoaytx/making_pebble_apps_2026) - [Making pebble apps in 2026](https://coconauts.net/blog/2026/05/08/pebble-apps/)
* [2026-06-02, 03:39:00](https://soylentnews.org/article.pl?sid=26/06/01/1131223&amp;from=rss) - [CIFSwitch Vulnerability Exposes Some Linux Distros to Local Root Access](https://soylentnews.org/article.pl?sid=26/06/01/1131223&amp;from=rss)
* [2026-06-02, 03:30:00](https://news.slashdot.org/story/26/06/01/2151248/remote-work-not-ai-has-sidelined-recent-college-graduates-research-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Remote Work, Not AI, Has Sidelined Recent College Graduates, Research Finds](https://news.slashdot.org/story/26/06/01/2151248/remote-work-not-ai-has-sidelined-recent-college-graduates-research-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-02, 01:28:34](https://news.ycombinator.com/item?id=48364800) - [macOS needs its grid back](https://blog.hopefullyuseful.com/blog/macos-needs-its-grid-back/)
* [2026-06-01, 23:45:46](https://news.ycombinator.com/item?id=48364055) - [Can the stockmarket swallow Anthropic, SpaceX and OpenAI?](https://www.economist.com/finance-and-economics/2026/06/01/can-the-stockmarket-swallow-anthropic-spacex-and-openai)
* [2026-06-01, 23:06:35](https://news.ycombinator.com/item?id=48363765) - [Chipotlai Max](https://github.com/cyberpapiii/chipotlai-max)
* [2026-06-01, 23:00:00](https://yro.slashdot.org/story/26/06/01/2145208/the-pirate-bay-remains-resilient-20-years-after-the-raid?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Pirate Bay Remains Resilient, 20 Years After The Raid](https://yro.slashdot.org/story/26/06/01/2145208/the-pirate-bay-remains-resilient-20-years-after-the-raid?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-01, 22:54:00](https://soylentnews.org/article.pl?sid=26/06/01/027245&amp;from=rss) - [After $2.5 Billion Supermicro Smuggling Bust, Nvidia CEO Urges Company To Fix Export Compliance](https://soylentnews.org/article.pl?sid=26/06/01/027245&amp;from=rss)
* [2026-06-01, 22:00:00](https://meta.slashdot.org/story/26/06/01/2130239/hackers-simply-asked-metas-ai-to-take-over-high-profile-instagram-accounts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hackers Simply Asked Meta&apos;s AI To Take Over High-Profile Instagram Accounts](https://meta.slashdot.org/story/26/06/01/2130239/hackers-simply-asked-metas-ai-to-take-over-high-profile-instagram-accounts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-01, 21:50:02](https://news.ycombinator.com/item?id=48363132) - [OpenAI frontier models and Codex are now available on AWS](https://openai.com/index/openai-frontier-models-and-codex-are-now-available-on-aws/)
* [2026-06-01, 21:00:00](https://yro.slashdot.org/story/26/06/01/1846250/florida-sues-openai-and-ceo-sam-altman-accusing-them-of-putting-profit-over-safety?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Florida Sues OpenAI and CEO Sam Altman, Accusing Them of Putting Profit Over Safety](https://yro.slashdot.org/story/26/06/01/1846250/florida-sues-openai-and-ceo-sam-altman-accusing-them-of-putting-profit-over-safety?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-01, 20:40:13](https://news.ycombinator.com/item?id=48362347) - [Debug Project](https://debug.com/)
* [2026-06-01, 20:00:00](https://slashdot.org/story/26/06/01/1837259/anthropic-files-to-go-public?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Files to Go Public](https://slashdot.org/story/26/06/01/1837259/anthropic-files-to-go-public?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-01, 19:00:00](https://slashdot.org/story/26/06/01/1857210/anthropic-invites-eu-to-access-mythos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Invites EU To Access Mythos](https://slashdot.org/story/26/06/01/1857210/anthropic-invites-eu-to-access-mythos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-01, 18:00:00](https://mobile.slashdot.org/story/26/06/01/1636253/united-airlines-flight-to-spain-pulls-u-turn-over-bluetooth-device-name?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [United Airlines Flight To Spain Pulls U-Turn Over Bluetooth Device Name](https://mobile.slashdot.org/story/26/06/01/1636253/united-airlines-flight-to-spain-pulls-u-turn-over-bluetooth-device-name?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-01, 17:47:32](https://lobste.rs/s/97uskt/hating_ai_is_good_actually) - [Hating AI is good, actually](https://www.thehandbasket.co/p/hating-ai-is-good-actually)
* [2026-06-01, 17:38:50](https://lobste.rs/s/pmkmil/newest_instagram_exploit_is_goofiest_i_ve) - [The Newest Instagram \&quot;Exploit\&quot; is the Goofiest I&apos;ve Seen](https://www.0xsid.com/blog/meta-account-takeover-fiasco)
* [2026-06-01, 17:37:20](https://news.ycombinator.com/item?id=48360054) - [Should you normalize RGB values by 255 or 256?](https://30fps.net/pages/255-vs-256-division/)
* [2026-06-01, 17:29:39](https://lobste.rs/s/da3ffr/postmodern_build_system) - [The postmodern build system](https://jade.fyi/blog/the-postmodern-build-system/)
* [2026-06-01, 17:28:15](https://lobste.rs/s/9vt4ng/you_don_t_love_systemd_timers_enough) - [You Don&apos;t Love systemd Timers Enough](https://blog.tjll.net/you-dont-love-systemd-timers-enough/)
* [2026-06-01, 17:12:00](https://soylentnews.org/article.pl?sid=26/06/01/023237&amp;from=rss) - [Bezos Rocket Fell Short After Cryogenic Leak Cut Engine Thrust](https://soylentnews.org/article.pl?sid=26/06/01/023237&amp;from=rss)
* [2026-06-01, 17:00:00](https://it.slashdot.org/story/26/06/01/1624228/red-hat-npm-packages-compromised-to-spread-a-credential-stealing-worm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Red Hat npm Packages Compromised to Spread a Credential-Stealing Worm](https://it.slashdot.org/story/26/06/01/1624228/red-hat-npm-packages-compromised-to-spread-a-credential-stealing-worm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-01, 16:57:53](https://lobste.rs/s/vcrjmk/arm_desktop_so_many_cores_not_enough_speed) - [Arm desktop: so many cores, not enough speed](https://marcin.juszkiewicz.com.pl/2026/06/01/arm-desktop-so-many-cores-not-enough-speed/)
* [2026-06-01, 16:41:49](https://news.ycombinator.com/item?id=48359232) - [AI Agent Guidelines for CS336 at Stanford](https://github.com/stanford-cs336/assignment1-basics/blob/main/CLAUDE.md)
* [2026-06-01, 16:31:42](https://news.ycombinator.com/item?id=48359102) - [The newest Instagram “exploit” is the goofiest I&apos;ve seen](https://www.0xsid.com/blog/meta-account-takeover-fiasco)
* [2026-06-01, 16:00:00](https://hardware.slashdot.org/story/26/06/01/0319209/dell-rivals-apples-macbook-neo-with-699-touchscreen-xps-13-laptop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Dell Rivals Apple&apos;s MacBook Neo With $699 Touchscreen XPS 13 Laptop](https://hardware.slashdot.org/story/26/06/01/0319209/dell-rivals-apples-macbook-neo-with-699-touchscreen-xps-13-laptop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-01, 15:36:49](https://lobste.rs/s/vkoa7r/github_crime_against_software) - [github and the crime against software](https://eblog.fly.dev/githubbad.html)
* [2026-06-01, 15:00:00](https://it.slashdot.org/story/26/06/01/0336226/botnet-of-more-than-17-million-devices-dismantled?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Botnet of More Than 17 Million Devices Dismantled](https://it.slashdot.org/story/26/06/01/0336226/botnet-of-more-than-17-million-devices-dismantled?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-01, 14:10:32](https://news.ycombinator.com/item?id=48357075) - [CS336: Language Modeling from Scratch](https://cs336.stanford.edu/)
* [2026-06-01, 13:30:13](https://lobste.rs/s/uuvuhv/should_you_normalize_rgb_values_by_255_256) - [Should you normalize RGB values by 255 or 256?](https://30fps.net/pages/255-vs-256-division/)
* [2026-06-01, 13:11:00](https://lobste.rs/s/jhbndn/announcing_zstandard_rust) - [Announcing Zstandard in Rust](https://trifectatech.org/blog/announcing-zstandard-in-rust/)
* [2026-06-01, 12:19:00](https://soylentnews.org/article.pl?sid=26/06/01/021214&amp;from=rss) - [Drone Breaks World Speed Record With 453 Mph In Test Run](https://soylentnews.org/article.pl?sid=26/06/01/021214&amp;from=rss)
* [2026-06-01, 11:57:04](https://lobste.rs/s/aahxxs/qbe_compiler_backend_version_1_3) - [QBE - Compiler Backend: Version 1.3](https://c9x.me/compile/release/qbe-1.3.html)
* [2026-06-01, 07:37:00](https://soylentnews.org/article.pl?sid=26/05/31/0238226&amp;from=rss) - [Japanese Space Agency Names Arrival Date For BepiColombo Mercury Mission](https://soylentnews.org/article.pl?sid=26/05/31/0238226&amp;from=rss)
* [2026-06-01, 02:58:00](https://soylentnews.org/article.pl?sid=26/05/31/0236235&amp;from=rss) - [Microcode Inside the Intel 8087 Floating-point Chip: Register Exchange ](https://soylentnews.org/article.pl?sid=26/05/31/0236235&amp;from=rss)
* [2026-05-31, 22:00:00](https://soylentnews.org/article.pl?sid=26/05/31/0233244&amp;from=rss) - [The End of American Science](https://soylentnews.org/article.pl?sid=26/05/31/0233244&amp;from=rss)
* [2026-05-31, 17:18:00](https://soylentnews.org/article.pl?sid=26/05/30/1431200&amp;from=rss) - [This AI Compressed &apos;All Human Cooking&apos; Into 2 Megabytes](https://soylentnews.org/article.pl?sid=26/05/30/1431200&amp;from=rss)
* [2026-05-31, 12:36:00](https://soylentnews.org/article.pl?sid=26/05/30/1418232&amp;from=rss) - [Blue Origin&apos;s New Glenn Rocket Explodes on its Launchpad](https://soylentnews.org/article.pl?sid=26/05/30/1418232&amp;from=rss)
* [2026-05-31, 07:54:00](https://soylentnews.org/article.pl?sid=26/05/30/1415220&amp;from=rss) - [What is a Dickover?](https://soylentnews.org/article.pl?sid=26/05/30/1415220&amp;from=rss)
* [2026-05-31, 06:16:06](https://news.ycombinator.com/item?id=48343435) - [Why Custom Attributes in .NET Give Me Nightmares](https://blog.washi.dev/posts/custom-attributes-and-why-they-suck/)
* [2026-05-31, 03:09:00](https://soylentnews.org/article.pl?sid=26/05/29/1513233&amp;from=rss) - [‘AI Washing’: Firms Are Scrambling to Rebrand Themselves as Tech-Focused](https://soylentnews.org/article.pl?sid=26/05/29/1513233&amp;from=rss)
* [2026-05-31, 01:59:06](https://news.ycombinator.com/item?id=48342399) - [Muxcard, a dyi credit card size computer](https://github.com/krauseler/muxcard)
* [2026-05-30, 22:23:00](https://soylentnews.org/article.pl?sid=26/05/29/1511219&amp;from=rss) - [The LLM Permission Slip](https://soylentnews.org/article.pl?sid=26/05/29/1511219&amp;from=rss)
* [2026-05-30, 17:38:00](https://soylentnews.org/article.pl?sid=26/05/29/159239&amp;from=rss) - [Researchers Develop A New Process To Get Lithium Out Of Rocks](https://soylentnews.org/article.pl?sid=26/05/29/159239&amp;from=rss)
* [2026-05-30, 14:42:55](https://news.ycombinator.com/item?id=48336783) - [Webcam head tracking, webcam to control in‑game FOV](https://www.openfov.com/)
* [2026-05-30, 12:52:00](https://soylentnews.org/article.pl?sid=26/05/29/155242&amp;from=rss) - [Finding a Parking Spot in Pyongyang-Chinese Cars in N. Korea](https://soylentnews.org/article.pl?sid=26/05/29/155242&amp;from=rss)
* [2026-05-30, 11:18:04](https://news.ycombinator.com/item?id=48335022) - [CQL: Categorical Databases](https://categoricaldata.net/)
* [2026-05-30, 08:02:00](https://soylentnews.org/article.pl?sid=26/05/29/152259&amp;from=rss) - [AI Code Increasingly Leads to Production Failures](https://soylentnews.org/article.pl?sid=26/05/29/152259&amp;from=rss)
* [2026-05-30, 03:19:00](https://soylentnews.org/article.pl?sid=26/05/29/0212218&amp;from=rss) - [Google Search is Becoming Something Fundamentally Different](https://soylentnews.org/article.pl?sid=26/05/29/0212218&amp;from=rss)
* [2026-05-29, 22:36:00](https://soylentnews.org/article.pl?sid=26/05/29/028217&amp;from=rss) - [Chinese GPU Maker Sells Out Over 30,000 Gaming GPUs Within 48 Hours Despite Lukewarm Benchmarks](https://soylentnews.org/article.pl?sid=26/05/29/028217&amp;from=rss)
* [2026-05-29, 17:53:00](https://soylentnews.org/article.pl?sid=26/05/29/024230&amp;from=rss) - [(Next Step in the) NASA Moon Base Revealed](https://soylentnews.org/article.pl?sid=26/05/29/024230&amp;from=rss)
* [2026-05-29, 16:41:56](https://news.ycombinator.com/item?id=48325668) - [Reviving Teletext for Ham Radio](https://spectrum.ieee.org/reviving-teletext-for-ham-radio)
* [2026-05-29, 13:11:00](https://soylentnews.org/article.pl?sid=26/05/29/022223&amp;from=rss) - [The Boring Internet - the Internet You Grew Up on Isn&apos;t Dying](https://soylentnews.org/article.pl?sid=26/05/29/022223&amp;from=rss)
* [2026-05-29, 10:06:47](https://news.ycombinator.com/item?id=48321210) - [Fooling around with encrypted reasoning blobs](https://blog.cryptographyengineering.com/2026/05/29/fooling-around-with-encrypted-reasoning-blobs/)
* [2026-05-29, 08:29:00](https://soylentnews.org/article.pl?sid=26/05/28/1232210&amp;from=rss) - [HP Now Sponsoring The Linux Vendor Firmware Service / Fwupd](https://soylentnews.org/article.pl?sid=26/05/28/1232210&amp;from=rss)
* [2026-05-29, 03:47:00](https://soylentnews.org/article.pl?sid=26/05/28/1228205&amp;from=rss) - [ESA Boss Tires of Being Dragged Around by NASA Mood Swings](https://soylentnews.org/article.pl?sid=26/05/28/1228205&amp;from=rss)
