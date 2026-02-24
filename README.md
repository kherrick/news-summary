# [News Summary](https://kherrick.github.io/news-summary/)

## Browser and Security Enhancements

* [Firefox 148 Now Available With The New AI Controls, AI Kill Switches](https://news.slashdot.org/story/26/02/24/0054207/firefox-148-now-available-with-the-new-ai-controls-ai-kill-switches?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.slashdot.org/story/26/02/24/0054207/firefox-148-now-available-with-the-new-ai-controls-ai-kill-switches?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Goodbye InnerHTML, Hello SetHTML: Stronger XSS Protection in Firefox 148](https://hacks.mozilla.org/2026/02/goodbye-innerhtml-hello-sethtml-stronger-xss-protection-in-firefox-148/) ([comments](https://news.ycombinator.com/item?id=47136611))

## Artificial Intelligence in Action

* [xAI and Pentagon reach deal to use Grok in classified systems](https://www.axios.com/2026/02/23/ai-defense-department-deal-musk-xai-grok) ([comments](https://news.ycombinator.com/item?id=47136477))

* [Steerling-8B, a language model that can explain any token it generates](https://www.guidelabs.ai/post/steerling-8b-base-model-release/) ([comments](https://news.ycombinator.com/item?id=47131225))

## Innovative Computing and Tools

* [Quantum Algorithm Beats Classical Tools On Complement Sampling Tasks](https://tech.slashdot.org/story/26/02/24/0047210/quantum-algorithm-beats-classical-tools-on-complement-sampling-tasks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://tech.slashdot.org/story/26/02/24/0047210/quantum-algorithm-beats-classical-tools-on-complement-sampling-tasks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [trolley: Run terminal apps anywhere](https://github.com/weedonandscott/trolley) ([comments](https://lobste.rs/s/ed1qpa/trolley_run_terminal_apps_anywhere))

* [x86CSS - An x86 CPU emulator written in CSS](https://lyra.horse/x86css/) ([comments](https://lobste.rs/s/rhgsiy/x86css_x86_cpu_emulator_written_css))

## Healthcare and Science Breakthroughs

* [Blood test boosts Alzheimer&apos;s diagnosis accuracy to 94.5%, clinical study shows](https://medicalxpress.com/news/2026-02-blood-boosts-alzheimer-diagnosis-accuracy.html) ([comments](https://news.ycombinator.com/item?id=47132388))

* [Why Are Tatooine Planets Rare? Blame General Relativity](https://soylentnews.org/article.pl?sid=26/02/23/0050217&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/02/23/0050217&amp;from=rss))

## User Tools and Applications

* [Desk Setup: From Multi-Monitor to Single Screen with Virtual Desktops](https://www.ssp.sh/brain/computer-desk-setup-monitor-workflow/) ([comments](https://lobste.rs/s/jfydxy/desk_setup_from_multi_monitor_single))

* [enveil – hide your .env secrets from prAIng eyes](https://github.com/GreatScott/enveil) ([comments](https://news.ycombinator.com/item?id=47133055))

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

* [2026-02-24, 13:04:16](https://news.ycombinator.com/item?id=47136611) - [Goodbye InnerHTML, Hello SetHTML: Stronger XSS Protection in Firefox 148](https://hacks.mozilla.org/2026/02/goodbye-innerhtml-hello-sethtml-stronger-xss-protection-in-firefox-148/)
* [2026-02-24, 13:02:10](https://lobste.rs/s/kwpvgy/goodbye_innerhtml_hello_sethtml) - [Goodbye innerHTML, Hello setHTML: Stronger XSS Protection in Firefox 148](https://hacks.mozilla.org/2026/02/goodbye-innerhtml-hello-sethtml-stronger-xss-protection-in-firefox-148/)
* [2026-02-24, 13:00:00](https://news.slashdot.org/story/26/02/24/0054207/firefox-148-now-available-with-the-new-ai-controls-ai-kill-switches?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Firefox 148 Now Available With The New AI Controls, AI Kill Switches](https://news.slashdot.org/story/26/02/24/0054207/firefox-148-now-available-with-the-new-ai-controls-ai-kill-switches?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-24, 12:51:49](https://news.ycombinator.com/item?id=47136477) - [xAI and Pentagon reach deal to use Grok in classified systems](https://www.axios.com/2026/02/23/ai-defense-department-deal-musk-xai-grok)
* [2026-02-24, 12:10:38](https://lobste.rs/s/kx2sp3/lines_code_are_back_it_s_worse_than_before) - [Lines of Code Are Back (And It&apos;s Worse Than Before)](https://www.thepragmaticcto.com/p/lines-of-code-are-back-and-its-worse)
* [2026-02-24, 12:09:00](https://soylentnews.org/article.pl?sid=26/02/23/010246&amp;from=rss) - [Two Days of Oatmeal Reduce Cholesterol Level](https://soylentnews.org/article.pl?sid=26/02/23/010246&amp;from=rss)
* [2026-02-24, 11:15:13](https://lobste.rs/s/eiqt3l/about_memory_pressure_lock_contention) - [About memory pressure, lock contention, and Data-oriented Design](https://mnt.io/articles/about-memory-pressure-lock-contention-and-data-oriented-design/)
* [2026-02-24, 10:00:00](https://tech.slashdot.org/story/26/02/24/0047210/quantum-algorithm-beats-classical-tools-on-complement-sampling-tasks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Quantum Algorithm Beats Classical Tools On Complement Sampling Tasks](https://tech.slashdot.org/story/26/02/24/0047210/quantum-algorithm-beats-classical-tools-on-complement-sampling-tasks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-24, 09:46:51](https://lobste.rs/s/nmyrxg/how_i_got_claude_teach_me_dbt) - [How I got Claude to teach me dbt](https://rmoff.net/2026/02/20/claude-the-instructor/)
* [2026-02-24, 09:17:48](https://lobste.rs/s/aqtdow/rust_debugging_survey_2026) - [Rust debugging survey 2026](https://blog.rust-lang.org/2026/02/23/rust-debugging-survey-2026/)
* [2026-02-24, 09:15:56](https://news.ycombinator.com/item?id=47134779) - [Decimal-Java is a library to convert java.math.BigDecimal to and from IEEE-754r](https://github.com/FirebirdSQL/decimal-java)
* [2026-02-24, 08:33:05](https://lobste.rs/s/jfydxy/desk_setup_from_multi_monitor_single) - [Desk Setup: From Multi-Monitor to Single Screen with Virtual Desktops](https://www.ssp.sh/brain/computer-desk-setup-monitor-workflow/)
* [2026-02-24, 07:21:00](https://soylentnews.org/article.pl?sid=26/02/23/0058242&amp;from=rss) - [Video Games are Losing the \&quot;Attention War\&quot; to Gambling, Porn, and Crypto](https://soylentnews.org/article.pl?sid=26/02/23/0058242&amp;from=rss)
* [2026-02-24, 07:19:00](https://lobste.rs/s/nwhp2x/permacomputing) - [Permacomputing](http://permacomputing.net/)
* [2026-02-24, 07:14:26](https://lobste.rs/s/r0z04d/speeding_up_html_generation_by_2000) - [Speeding up HTML generation by 2000%](https://bobrubbens.nl/post/speeding-up-html-generation-2000/)
* [2026-02-24, 07:00:00](https://hardware.slashdot.org/story/26/02/24/0043228/texas-is-about-to-overtake-california-in-battery-storage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Texas Is About To Overtake California In Battery Storage](https://hardware.slashdot.org/story/26/02/24/0043228/texas-is-about-to-overtake-california-in-battery-storage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-24, 06:29:51](https://lobste.rs/s/ed1qpa/trolley_run_terminal_apps_anywhere) - [trolley: Run terminal apps anywhere](https://github.com/weedonandscott/trolley)
* [2026-02-24, 05:47:23](https://news.ycombinator.com/item?id=47133313) - [Firefox 148 Launches with AI Kill Switch Feature and More Enhancements](https://serverhost.com/blog/firefox-148-launches-with-exciting-ai-kill-switch-feature-and-more-enhancements/)
* [2026-02-24, 05:04:50](https://news.ycombinator.com/item?id=47133055) - [Show HN: enveil – hide your .env secrets from prAIng eyes](https://github.com/GreatScott/enveil)
* [2026-02-24, 04:56:24](https://lobste.rs/s/hrw1mi/compiler_education_deserves_revolution) - [Compiler Education Deserves a Revolution](https://thunderseethe.dev/posts/compiler-education-deserves-a-revoluation/)
* [2026-02-24, 04:04:19](https://news.ycombinator.com/item?id=47132721) - [Intel XeSS 3: expanded support for Core Ultra/Core Ultra 2 and Arc A, B series](https://www.intel.com/content/www/us/en/download/785597/intel-arc-graphics-windows.html)
* [2026-02-24, 03:30:00](https://news.slashdot.org/story/26/02/24/005258/us-farmers-are-rejecting-multimillion-dollar-datacenter-bids-for-their-land?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Farmers Are Rejecting Multimillion-Dollar Datacenter Bids For Their Land](https://news.slashdot.org/story/26/02/24/005258/us-farmers-are-rejecting-multimillion-dollar-datacenter-bids-for-their-land?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-24, 03:12:54](https://lobste.rs/s/lq1dxr/huntarr_your_passwords_your_entire_arr) - [Huntarr - Your passwords and your entire arr stack&apos;s API keys are exposed to anyone on your network, or worse, the internet](https://reddit.com/r/selfhosted/comments/1rckopd/huntarr_your_passwords_and_your_entire_arr_stacks/)
* [2026-02-24, 03:10:16](https://news.ycombinator.com/item?id=47132388) - [Blood test boosts Alzheimer&apos;s diagnosis accuracy to 94.5%, clinical study shows](https://medicalxpress.com/news/2026-02-blood-boosts-alzheimer-diagnosis-accuracy.html)
* [2026-02-24, 02:37:00](https://soylentnews.org/article.pl?sid=26/02/23/0050217&amp;from=rss) - [Why Are Tatooine Planets Rare? Blame General Relativity](https://soylentnews.org/article.pl?sid=26/02/23/0050217&amp;from=rss)
* [2026-02-24, 02:29:14](https://lobste.rs/s/rhgsiy/x86css_x86_cpu_emulator_written_css) - [x86CSS - An x86 CPU emulator written in CSS](https://lyra.horse/x86css/)
* [2026-02-24, 02:27:14](https://news.ycombinator.com/item?id=47132102) - [Show HN: X86CSS – An x86 CPU emulator written in CSS](https://lyra.horse/x86css/)
* [2026-02-24, 02:02:00](https://games.slashdot.org/story/26/02/23/2356223/new-microsoft-gaming-ceo-has-no-tolerance-for-bad-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Microsoft Gaming CEO Has &apos;No Tolerance For Bad AI&apos;](https://games.slashdot.org/story/26/02/23/2356223/new-microsoft-gaming-ceo-has-no-tolerance-for-bad-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-24, 01:25:00](https://it.slashdot.org/story/26/02/23/2343241/microsoft-says-bug-in-classic-outlook-hides-the-mouse-pointer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Says Bug In Classic Outlook Hides the Mouse Pointer](https://it.slashdot.org/story/26/02/23/2343241/microsoft-says-bug-in-classic-outlook-hides-the-mouse-pointer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-24, 00:45:00](https://slashdot.org/story/26/02/23/2338242/viral-doomsday-report-lays-bare-wall-streets-deep-anxiety-about-ai-future?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Viral Doomsday Report Lays Bare Wall Street&apos;s Deep Anxiety About AI Future](https://slashdot.org/story/26/02/23/2338242/viral-doomsday-report-lays-bare-wall-streets-deep-anxiety-about-ai-future?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-24, 00:38:02](https://news.ycombinator.com/item?id=47131225) - [Show HN: Steerling-8B, a language model that can explain any token it generates](https://www.guidelabs.ai/post/steerling-8b-base-model-release/)
* [2026-02-24, 00:02:00](https://news.slashdot.org/story/26/02/23/2226231/trumps-board-of-peace-explores-stablecoin-for-gaza?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump&apos;s &apos;Board of Peace&apos; Explores Stablecoin For Gaza](https://news.slashdot.org/story/26/02/23/2226231/trumps-board-of-peace-explores-stablecoin-for-gaza?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-23, 23:58:45](https://news.ycombinator.com/item?id=47130860) - [I Ported Coreboot to the ThinkPad X270](https://dork.dev/posts/2026-02-20-ported-coreboot/)
* [2026-02-23, 23:55:26](https://lobste.rs/s/ttkuj8/c_enum_sizes_how_msvc_ignores_standard) - [C Enum Sizes; or, How MSVC Ignores The Standard Once Again](https://ettolrach.com/blog/c_enum_msvc.html)
* [2026-02-23, 23:20:00](https://slashdot.org/story/26/02/23/2217212/openai-calls-in-the-consultants-for-its-enterprise-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Calls In the Consultants For Its Enterprise Push](https://slashdot.org/story/26/02/23/2217212/openai-calls-in-the-consultants-for-its-enterprise-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-23, 22:59:25](https://lobste.rs/s/xrtjlq/i_ported_coreboot_thinkpad_x270) - [I ported Coreboot to the Thinkpad X270](https://dork.dev/posts/2026-02-20-ported-coreboot/)
* [2026-02-23, 22:40:00](https://entertainment.slashdot.org/story/26/02/23/229229/panasonic-will-no-longer-make-its-own-tvs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Panasonic Will No Longer Make Its Own TVs](https://entertainment.slashdot.org/story/26/02/23/229229/panasonic-will-no-longer-make-its-own-tvs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-23, 22:11:34](https://news.ycombinator.com/item?id=47129727) - [Making Wolfram tech available as a foundation tool for LLM systems](https://writings.stephenwolfram.com/2026/02/making-wolfram-tech-available-as-a-foundation-tool-for-llm-systems/)
* [2026-02-23, 21:57:00](https://hardware.slashdot.org/story/26/02/23/2155225/asml-unveils-euv-light-source-advance-that-could-yield-50-more-chips-by-2030?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ASML Unveils EUV Light Source Advance That Could Yield 50% More Chips By 2030](https://hardware.slashdot.org/story/26/02/23/2155225/asml-unveils-euv-light-source-advance-that-could-yield-50-more-chips-by-2030?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-23, 21:53:00](https://soylentnews.org/article.pl?sid=26/02/22/1313253&amp;from=rss) - [How Digitally Sovereign is Your Organization? This Red Hat Tool Can Tell You in Minutes](https://soylentnews.org/article.pl?sid=26/02/22/1313253&amp;from=rss)
* [2026-02-23, 21:18:20](https://lobste.rs/s/vsl6hv/binding_port_0_avoid_port_collisions) - [Binding port 0 to avoid port collisions](https://ntietz.com/blog/binding-ephemeral-port/)
* [2026-02-23, 21:10:00](https://slashdot.org/story/26/02/23/2110221/ibm-shares-crater-13-after-anthropic-says-claude-code-can-tackle-cobol-modernization?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [IBM Shares Crater 13% After Anthropic Says Claude Code Can Tackle COBOL Modernization](https://slashdot.org/story/26/02/23/2110221/ibm-shares-crater-13-after-anthropic-says-claude-code-can-tackle-cobol-modernization?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-23, 20:33:19](https://lobste.rs/s/cyuyhm/300_days_rubocop) - [300 Days of RuboCop](https://lovro-bikic.github.io/300-days-of-rubocop/)
* [2026-02-23, 20:16:08](https://news.ycombinator.com/item?id=47128138) - [“Car Wash” test with 53 models](https://opper.ai/blog/car-wash-test)
* [2026-02-23, 20:05:15](https://news.ycombinator.com/item?id=47127986) - [UNIX99, a UNIX-like OS for the TI-99/4A (2025)](https://forums.atariage.com/topic/380883-unix99-a-unix-like-os-for-the-ti-994a/page/5/#findComment-5713334)
* [2026-02-23, 19:36:00](https://linux.slashdot.org/story/26/02/23/1936208/linus-torvalds-someone-more-competent-who-isnt-afraid-of-numbers-past-the-teens-will-take-over-linux-one-day?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linus Torvalds: Someone &apos;More Competent Who Isn&apos;t Afraid of Numbers Past the Teens&apos; Will Take Over Linux One Day](https://linux.slashdot.org/story/26/02/23/1936208/linus-torvalds-someone-more-competent-who-isnt-afraid-of-numbers-past-the-teens-will-take-over-linux-one-day?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-23, 18:50:00](https://it.slashdot.org/story/26/02/23/1833239/how-many-ais-does-it-take-to-read-a-pdf?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;How Many AIs Does It Take To Read a PDF?&apos;](https://it.slashdot.org/story/26/02/23/1833239/how-many-ais-does-it-take-to-read-a-pdf?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-23, 18:10:00](https://slashdot.org/story/26/02/23/1810225/anthropic-accuses-chinese-companies-of-siphoning-data-from-claude?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Accuses Chinese Companies of Siphoning Data From Claude](https://slashdot.org/story/26/02/23/1810225/anthropic-accuses-chinese-companies-of-siphoning-data-from-claude?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-23, 17:20:25](https://news.ycombinator.com/item?id=47125374) - [Writing code is cheap now](https://simonwillison.net/guides/agentic-engineering-patterns/code-is-cheap/)
* [2026-02-23, 17:15:14](https://news.ycombinator.com/item?id=47125286) - [What it means that Ubuntu is using Rust](https://smallcultfollowing.com/babysteps/blog/2026/02/23/ubuntu-rustnation/)
* [2026-02-23, 17:07:00](https://soylentnews.org/article.pl?sid=26/02/22/1311241&amp;from=rss) - [Goodbye Paper Vehicle Titles – Illinois State is Making Digital Mandatory](https://soylentnews.org/article.pl?sid=26/02/22/1311241&amp;from=rss)
* [2026-02-23, 16:40:31](https://lobste.rs/s/xsi6um/some_silly_z3_scripts_i_wrote) - [Some Silly Z3 Scripts I Wrote](https://www.hillelwayne.com/post/z3-examples/)
* [2026-02-23, 16:02:48](https://news.ycombinator.com/item?id=47124171) - [The Missing Semester of Your CS Education – Revised for 2026](https://missing.csail.mit.edu/)
* [2026-02-23, 16:01:18](https://news.ycombinator.com/item?id=47124149) - [A simple web we own](https://rsdoiel.github.io/blog/2026/02/21/a_simple_web_we_own.html)
* [2026-02-23, 15:41:13](https://lobste.rs/s/ype4g3/disappointing_phones) - [Disappointing phones](https://cadence.moe/blog/2026-02-08-disappointing-phones)
* [2026-02-23, 15:36:50](https://news.ycombinator.com/item?id=47123689) - [Terence Tao, at 8 years old (1984) [pdf]](https://gwern.net/doc/iq/high/smpy/1984-clements.pdf)
* [2026-02-23, 15:33:24](https://news.ycombinator.com/item?id=47123631) - [Show HN: PgDog – Scale Postgres without changing the app](https://github.com/pgdogdev/pgdog)
* [2026-02-23, 15:24:40](https://lobste.rs/s/bto9ju/tracking_nixos_option_values) - [Tracking NixOS option values and dependencies](https://oddlama.org/blog/tracking-options-in-nixos/)
* [2026-02-23, 15:23:11](https://lobste.rs/s/pgh4ss/so_i_ve_been_thinking_about_static_site) - [So I&apos;ve Been Thinking About Static Site Generators](https://wolfgirl.dev/blog/2026-02-23-so-ive-been-thinking-about-static-site-generators/)
* [2026-02-23, 14:22:39](https://news.ycombinator.com/item?id=47122715) - [The Age Verification Trap: Verifying age undermines everyone&apos;s data protection](https://spectrum.ieee.org/age-verification)
* [2026-02-23, 14:15:27](https://lobste.rs/s/tmynah/using_haskell_s_newtype_c) - [Using Haskell&apos;s &apos;newtype&apos; in C](https://blog.nelhage.com/2010/10/using-haskells-newtype-in-c/)
* [2026-02-23, 13:28:15](https://lobste.rs/s/1ydlk8/ladybird_adopts_rust_with_help_from_ai) - [Ladybird adopts Rust, with help from AI](https://ladybird.org/posts/adopting-rust/)
* [2026-02-23, 13:20:43](https://lobste.rs/s/7zdq2s/you_don_t_need_free_lists) - [You don&apos;t need free lists](https://jakubtomsu.github.io/posts/bit_pools/)
* [2026-02-23, 12:47:33](https://lobste.rs/s/tbsdd4/cursed_engineering_jumping_randomly) - [Cursed engineering: jumping randomly through CSV files without hurting yourself](https://github.com/medialab/xan/blob/master/docs/blog/csv_base_jumping.md)
* [2026-02-23, 12:22:00](https://soylentnews.org/article.pl?sid=26/02/22/139236&amp;from=rss) - [Concrete “Battery” Developed at MIT Now Packs 10 Times the Power](https://soylentnews.org/article.pl?sid=26/02/22/139236&amp;from=rss)
* [2026-02-23, 11:29:22](https://news.ycombinator.com/item?id=47120899) - [Ladybird adopts Rust, with help from AI](https://ladybird.org/posts/adopting-rust/)
* [2026-02-23, 09:52:14](https://news.ycombinator.com/item?id=47120145) - [Hetzner Prices increase 30-40%](https://docs.hetzner.com/general/infrastructure-and-availability/price-adjustment/)
* [2026-02-23, 07:41:00](https://soylentnews.org/article.pl?sid=26/02/22/1259218&amp;from=rss) - [Privacy Is Not a Price You Pay for Growth](https://soylentnews.org/article.pl?sid=26/02/22/1259218&amp;from=rss)
* [2026-02-23, 06:35:32](https://news.ycombinator.com/item?id=47118838) - [Genetic underpinnings of chills from art and music](https://journals.plos.org/plosgenetics/article?id=10.1371/journal.pgen.1012002)
* [2026-02-23, 02:55:00](https://soylentnews.org/article.pl?sid=26/02/22/1256215&amp;from=rss) - [Pink Noise Reduces REM Sleep and May Harm Sleep Quality](https://soylentnews.org/article.pl?sid=26/02/22/1256215&amp;from=rss)
* [2026-02-22, 23:53:14](https://lobste.rs/s/nddlyy/codespelunker_cli_code_search_tool) - [codespelunker - CLI code search tool that understands code structure and ranks results by relevance. No indexing required](https://github.com/boyter/cs)
* [2026-02-22, 22:10:00](https://soylentnews.org/article.pl?sid=26/02/21/1350257&amp;from=rss) - [Richard Stallman: The Legend of Software Freedom That Saved the World](https://soylentnews.org/article.pl?sid=26/02/21/1350257&amp;from=rss)
* [2026-02-22, 17:28:00](https://soylentnews.org/article.pl?sid=26/02/21/1339255&amp;from=rss) - [NASA Releases Starliner Failures Report as It Preps for March Launch of Artemis 2](https://soylentnews.org/article.pl?sid=26/02/21/1339255&amp;from=rss)
* [2026-02-22, 12:41:00](https://soylentnews.org/article.pl?sid=26/02/21/1334230&amp;from=rss) - [Microsoft&apos;s New Windows 11 Speed Test is Just a Link to Ookla&apos;s Speedtest Via Bing](https://soylentnews.org/article.pl?sid=26/02/21/1334230&amp;from=rss)
* [2026-02-22, 07:59:00](https://soylentnews.org/article.pl?sid=26/02/21/1326214&amp;from=rss) - [It&apos;s Time to Get Rid of Networked Cameras](https://soylentnews.org/article.pl?sid=26/02/21/1326214&amp;from=rss)
* [2026-02-22, 03:14:00](https://soylentnews.org/article.pl?sid=26/02/21/1322208&amp;from=rss) - [Mechanochemical Breakthrough Unlocks Cheap, Safe, Powdered Hydrogen](https://soylentnews.org/article.pl?sid=26/02/21/1322208&amp;from=rss)
* [2026-02-21, 22:32:00](https://soylentnews.org/article.pl?sid=26/02/21/137227&amp;from=rss) - [Did We Just See a Black Hole Explode?](https://soylentnews.org/article.pl?sid=26/02/21/137227&amp;from=rss)
* [2026-02-21, 21:33:28](https://news.ycombinator.com/item?id=47105038) - [Graph Topology and Battle Royale Mechanics](https://blog.lukesalamone.com/posts/beam-search-graph-pruning/)
* [2026-02-21, 17:49:00](https://soylentnews.org/article.pl?sid=26/02/21/0130244&amp;from=rss) - [AIRD -  a New Term for Workers Freaking Out Over Being Replaced by AI](https://soylentnews.org/article.pl?sid=26/02/21/0130244&amp;from=rss)
* [2026-02-21, 13:36:45](https://news.ycombinator.com/item?id=47100714) - [Unsung heroes: Flickr&apos;s URLs scheme](https://unsung.aresluna.org/unsung-heroes-flickrs-urls-scheme/)
* [2026-02-21, 12:55:00](https://soylentnews.org/article.pl?sid=26/02/21/0126215&amp;from=rss) - [Hackers Expose Age-Verification Software Powering Surveillance Web](https://soylentnews.org/article.pl?sid=26/02/21/0126215&amp;from=rss)
* [2026-02-21, 10:31:37](https://news.ycombinator.com/item?id=47099401) - [A distributed queue in a single JSON file on object storage](https://turbopuffer.com/blog/object-storage-queue)
* [2026-02-21, 08:12:00](https://soylentnews.org/article.pl?sid=26/02/21/0123209&amp;from=rss) - [Visualizing the Internet in 2026](https://soylentnews.org/article.pl?sid=26/02/21/0123209&amp;from=rss)
* [2026-02-21, 03:20:00](https://soylentnews.org/article.pl?sid=26/02/21/0121213&amp;from=rss) - [Palo Alto CEO Says AI Isn&apos;t Great for Business, Yet](https://soylentnews.org/article.pl?sid=26/02/21/0121213&amp;from=rss)
* [2026-02-21, 00:47:09](https://news.ycombinator.com/item?id=47096186) - [Show HN: Cellarium: A Playground for Cellular Automata](https://github.com/andrewosh/cellarium)
* [2026-02-21, 00:18:31](https://news.ycombinator.com/item?id=47095972) - [ATAboy is a USB adapter for legacy CHS only style IDE (PATA) drives](https://github.com/redruM0381/ATAboy)
* [2026-02-20, 23:02:08](https://news.ycombinator.com/item?id=47095266) - [λProlog: Logic programming in higher-order logic](https://www.lix.polytechnique.fr/Labo/Dale.Miller/lProlog/)
* [2026-02-20, 22:40:00](https://soylentnews.org/article.pl?sid=26/02/19/1712216&amp;from=rss) - [Bacteria Frozen Inside 5,000-Year-Old Ice Cave is Crazy Resistant to Antibiotics ](https://soylentnews.org/article.pl?sid=26/02/19/1712216&amp;from=rss)
* [2026-02-20, 22:14:13](https://news.ycombinator.com/item?id=47094768) - [Diode – Build, program, and simulate hardware](https://www.withdiode.com/)
* [2026-02-20, 17:56:00](https://soylentnews.org/article.pl?sid=26/02/19/178226&amp;from=rss) - [OpenClaw Security Fears Lead Meta, Other AI Firms to Restrict its Use](https://soylentnews.org/article.pl?sid=26/02/19/178226&amp;from=rss)
* [2026-02-20, 13:13:00](https://soylentnews.org/article.pl?sid=26/02/19/1613238&amp;from=rss) - [Texas Sues Wi-Fi Router Maker Over Alleged China Links](https://soylentnews.org/article.pl?sid=26/02/19/1613238&amp;from=rss)
* [2026-02-20, 08:25:00](https://soylentnews.org/article.pl?sid=26/02/19/1617210&amp;from=rss) - [Data Centres Consider Backing Uranium Projects, NexGen CEO Says](https://soylentnews.org/article.pl?sid=26/02/19/1617210&amp;from=rss)
* [2026-02-20, 03:49:00](https://soylentnews.org/article.pl?sid=26/02/19/1610250&amp;from=rss) - [Password Managers Less Secure Than Promised](https://soylentnews.org/article.pl?sid=26/02/19/1610250&amp;from=rss)
