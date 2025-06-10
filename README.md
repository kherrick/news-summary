# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence Advancements and Challenges

* [Meta Is Creating a New AI Lab To Pursue 'Superintelligence'](https://tech.slashdot.org/story/25/06/10/0738216/meta-is-creating-a-new-ai-lab-to-pursue-superintelligence?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://tech.slashdot.org/story/25/06/10/0738216/meta-is-creating-a-new-ai-lab-to-pursue-superintelligence?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Apple announces Foundation Models and Containerization frameworks, etc](https://www.apple.com/newsroom/2025/06/apple-supercharges-its-tools-and-technologies-for-developers/) ([comments](https://news.ycombinator.com/item?id=44226978))

* [Ohio University Says All Students Will Be Required To Train and 'Be Fluent' In AI](https://news.slashdot.org/story/25/06/09/2130227/ohio-university-says-all-students-will-be-required-to-train-and-be-fluent-in-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.slashdot.org/story/25/06/09/2130227/ohio-university-says-all-students-will-be-required-to-train-and-be-fluent-in-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [YouTube Will 'Protect Free Expression' By Pulling Back On Content Moderation](https://yro.slashdot.org/story/25/06/09/1839245/youtube-will-protect-free-expression-by-pulling-back-on-content-moderation?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://yro.slashdot.org/story/25/06/09/1839245/youtube-will-protect-free-expression-by-pulling-back-on-content-moderation?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Tech Policy and Governance

* [Europe needs digital sovereignty – and Microsoft has just proven why](https://tuta.com/blog/digital-sovereignty-europe) ([comments](https://news.ycombinator.com/item?id=44233480))

* [FAA To Eliminate Floppy Disks Used In Air Traffic Control Systems](https://hardware.slashdot.org/story/25/06/09/2249232/faa-to-eliminate-floppy-disks-used-in-air-traffic-control-systems?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://hardware.slashdot.org/story/25/06/09/2249232/faa-to-eliminate-floppy-disks-used-in-air-traffic-control-systems?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [ICANN Waves Hands in Protest at AFRINIC Election Arrangement](https://tech.slashdot.org/story/25/06/10/0111203/icann-waves-hands-in-protest-at-afrinic-election-arrangement?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://tech.slashdot.org/story/25/06/10/0111203/icann-waves-hands-in-protest-at-afrinic-election-arrangement?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Space and Science Innovation

* [Second New Glenn Launch Slips Toward Fall As Program Leadership Departs](https://science.slashdot.org/story/25/06/09/230255/second-new-glenn-launch-slips-toward-fall-as-program-leadership-departs?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://science.slashdot.org/story/25/06/09/230255/second-new-glenn-launch-slips-toward-fall-as-program-leadership-departs?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Scientists Find New Markers To Identify Species From Fragments Of Fossilized Bone](https://soylentnews.org/article.pl?sid=25/06/08/0311242&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/06/08/0311242&from=rss))

* [The Far Side of the Moon May Host the World's Most Sensitive Telescope, Shielded From Interference](https://soylentnews.org/article.pl?sid=25/06/05/1051216&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/06/05/1051216&from=rss))

## Historical and Cultural Insights

* [Micrographia (1665) [pdf]](https://arhipa.org/libros/Hooke_Robert_Micrographia-1665.pdf) ([comments](https://news.ycombinator.com/item?id=44232699))

* [Sly Stone has died](https://abcnews.go.com/US/sly-stone-pioneering-leader-funk-band-sly-family/story?id=122666345) ([comments](https://news.ycombinator.com/item?id=44229841))

* [Are Dead Sea Scrolls Older Than We Thought?](https://soylentnews.org/article.pl?sid=25/06/08/031256&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/06/08/031256&from=rss))

## Software Development and Open Source

* [Ada Continues to Climb in June Tiobe Index and PYPL](https://forum.ada-lang.io/t/ada-continues-to-climb-in-june-tiobe-index-and-pypl/2126) ([comments](https://news.ycombinator.com/item?id=44233188))

* [Zig's self-hosted x86 backend is now default in Debug mode](https://ziglang.org/devlog/2025/?unique/#2025-06-08) ([comments](https://lobste.rs/s/fmof95/zig_s_self_hosted_x86_backend_is_now))

* [LLMs are cheap](https://www.snellman.net/blog/archive/2025-06-02-llms-are-cheap/) ([comments](https://lobste.rs/s/btogou/llms_are_cheap))

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

* [2025-06-10, 08:38:11](https://news.ycombinator.com/item?id=44234160) - [Mozilla shuts down even more Firefox services](https://www.neowin.net/news/mozilla-shuts-down-even-more-firefox-services-you-might-still-be-using/)
* [2025-06-10, 07:38:00](https://tech.slashdot.org/story/25/06/10/0738216/meta-is-creating-a-new-ai-lab-to-pursue-superintelligence?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Is Creating a New AI Lab To Pursue &apos;Superintelligence&apos;](https://tech.slashdot.org/story/25/06/10/0738216/meta-is-creating-a-new-ai-lab-to-pursue-superintelligence?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-10, 07:19:00](https://soylentnews.org/article.pl?sid=25/06/09/1152234&amp;from=rss) - [FDA Rushed Out Agency-Wide AI Tool](https://soylentnews.org/article.pl?sid=25/06/09/1152234&amp;from=rss)
* [2025-06-10, 07:00:00](https://science.slashdot.org/story/25/06/09/230255/second-new-glenn-launch-slips-toward-fall-as-program-leadership-departs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Second New Glenn Launch Slips Toward Fall As Program Leadership Departs](https://science.slashdot.org/story/25/06/09/230255/second-new-glenn-launch-slips-toward-fall-as-program-leadership-departs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-10, 06:51:14](https://news.ycombinator.com/item?id=44233480) - [Europe needs digital sovereignty – and Microsoft has just proven why](https://tuta.com/blog/digital-sovereignty-europe)
* [2025-06-10, 06:30:03](https://news.ycombinator.com/item?id=44233315) - [Show HN: A MCP server and client implementing the latest spec](https://github.com/hemanth/paws-on-mcp)
* [2025-06-10, 06:12:52](https://news.ycombinator.com/item?id=44233188) - [Ada Continues to Climb in June Tiobe Index and PYPL](https://forum.ada-lang.io/t/ada-continues-to-climb-in-june-tiobe-index-and-pypl/2126)
* [2025-06-10, 05:01:49](https://news.ycombinator.com/item?id=44232714) - [Successful people set constraints rather than chasing goals](https://www.joanwestenberg.com/smart-people-dont-chase-goals-they-create-limits/)
* [2025-06-10, 04:57:52](https://news.ycombinator.com/item?id=44232699) - [Micrographia (1665) [pdf]](https://arhipa.org/libros/Hooke_Robert_Micrographia-1665.pdf)
* [2025-06-10, 04:04:41](https://news.ycombinator.com/item?id=44232371) - [Scientific Papers: Innovation or Imitation?](https://www.johndcook.com/blog/2025/06/05/scientific-papers-innovation-or-imitation/)
* [2025-06-10, 03:55:30](https://news.ycombinator.com/item?id=44232314) - [AI Saved My Company from a 2-Year Litigation Nightmare](https://tylertringas.com/ai-legal/)
* [2025-06-10, 03:51:56](https://news.ycombinator.com/item?id=44232296) - [Apple has announced its final version of macOS for Intel](https://tedium.co/2025/06/09/apple-wwdc-intel-mac-support-ending/)
* [2025-06-10, 03:30:00](https://hardware.slashdot.org/story/25/06/09/2249232/faa-to-eliminate-floppy-disks-used-in-air-traffic-control-systems?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FAA To Eliminate Floppy Disks Used In Air Traffic Control Systems](https://hardware.slashdot.org/story/25/06/09/2249232/faa-to-eliminate-floppy-disks-used-in-air-traffic-control-systems?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-10, 02:31:00](https://soylentnews.org/article.pl?sid=25/06/08/1422259&amp;from=rss) - [American Science &amp; Surplus is Fighting for its Life and Here&apos;s Why You Should Care](https://soylentnews.org/article.pl?sid=25/06/08/1422259&amp;from=rss)
* [2025-06-10, 02:15:00](https://news.slashdot.org/story/25/06/10/0216200/if-india-chokes-less-it-will-fry-more?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [If India Chokes Less, It Will Fry More](https://news.slashdot.org/story/25/06/10/0216200/if-india-chokes-less-it-will-fry-more?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-10, 01:48:07](https://news.ycombinator.com/item?id=44231649) - [Discrete Mathematics: An Open Introduction [pdf]](https://discrete.openmathbooks.org/pdfs/dmoi4.pdf)
* [2025-06-10, 01:36:39](https://news.ycombinator.com/item?id=44231594) - [Implementing DOES&gt; in Forth, the entire reason I started this mess](https://boston.conman.org/2025/06/09.1)
* [2025-06-10, 01:35:05](https://lobste.rs/s/w1ludh/implementing_does_forth_entire_reason_i) - [Implementing DOES&gt; in Forth, the entire reason I started this mess](https://boston.conman.org/2025/06/09.1)
* [2025-06-10, 01:08:00](https://tech.slashdot.org/story/25/06/10/0111203/icann-waves-hands-in-protest-at-afrinic-election-arrangement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ICANN Waves Hands in Protest at AFRINIC Election Arrangement](https://tech.slashdot.org/story/25/06/10/0111203/icann-waves-hands-in-protest-at-afrinic-election-arrangement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-10, 00:16:00](https://slashdot.org/story/25/06/10/0016235/private-equity-ceo-predicts-ai-will-leave-60-of-finance-conference-attendees-jobless?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Private Equity CEO Predicts AI Will Leave 60% of Finance Conference Attendees Jobless](https://slashdot.org/story/25/06/10/0016235/private-equity-ceo-predicts-ai-will-leave-60-of-finance-conference-attendees-jobless?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-09, 23:36:23](https://news.ycombinator.com/item?id=44230838) - [Why agents are bad pair programmers](https://justin.searls.co/posts/why-agents-are-bad-pair-programmers/)
* [2025-06-09, 23:20:00](https://apple.slashdot.org/story/25/06/09/2245206/apple-will-end-support-for-intel-macs-next-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Will End Support For Intel Macs Next Year](https://apple.slashdot.org/story/25/06/09/2245206/apple-will-end-support-for-intel-macs-next-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-09, 23:19:18](https://lobste.rs/s/xos8tb/12_development_tools) - [12 Development Tools](https://dev.to/anthonymax/12-open-source-tools-every-developer-should-know-pn2)
* [2025-06-09, 22:42:22](https://lobste.rs/s/ldfeqs/gap_through_which_we_praise_machine) - [The Gap Through Which We Praise the Machine](https://ferd.ca/the-gap-through-which-we-praise-the-machine.html)
* [2025-06-09, 22:40:00](https://news.slashdot.org/story/25/06/09/2130227/ohio-university-says-all-students-will-be-required-to-train-and-be-fluent-in-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ohio University Says All Students Will Be Required To Train and &apos;Be Fluent&apos; In AI](https://news.slashdot.org/story/25/06/09/2130227/ohio-university-says-all-students-will-be-required-to-train-and-be-fluent-in-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-09, 22:21:09](https://news.ycombinator.com/item?id=44230182) - [Marines being mobilized in response to LA protests](https://www.cnn.com/2025/06/09/politics/marines-mobilized-los-angeles-protests)
* [2025-06-09, 22:14:11](https://lobste.rs/s/h0pge0/container_tool_for_creating_running) - [container: tool for creating and running Linux containers using lightweight virtual machines on a Mac](https://github.com/apple/container)
* [2025-06-09, 22:00:00](https://entertainment.slashdot.org/story/25/06/09/2120207/warner-bros-discovery-splits-streaming-from-cable-tv?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Warner Bros. Discovery Splits Streaming From Cable TV](https://entertainment.slashdot.org/story/25/06/09/2120207/warner-bros-discovery-splits-streaming-from-cable-tv?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-09, 21:45:00](https://soylentnews.org/article.pl?sid=25/06/08/1410212&amp;from=rss) - [New Technologies Help Wood-Burning Stoves Burn More Efficiently, Produce Less Smoke](https://soylentnews.org/article.pl?sid=25/06/08/1410212&amp;from=rss)
* [2025-06-09, 21:42:25](https://news.ycombinator.com/item?id=44229841) - [Sly Stone has died](https://abcnews.go.com/US/sly-stone-pioneering-leader-funk-band-sly-family/story?id=122666345)
* [2025-06-09, 21:25:44](https://news.ycombinator.com/item?id=44229694) - [The Xerox Alto, Smalltalk, and rewriting a running GUI (2017)](https://www.righto.com/2017/10/the-xerox-alto-smalltalk-and-rewriting.html)
* [2025-06-09, 21:20:00](https://apple.slashdot.org/story/25/06/09/1859253/apple-lets-developers-tap-into-its-offline-ai-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Lets Developers Tap Into Its Offline AI Models](https://apple.slashdot.org/story/25/06/09/1859253/apple-lets-developers-tap-into-its-offline-ai-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-09, 20:53:29](https://news.ycombinator.com/item?id=44229348) - [Containerization is a Swift package for running Linux containers on macOS](https://github.com/apple/containerization)
* [2025-06-09, 20:42:23](https://news.ycombinator.com/item?id=44229239) - [Container: Apple&apos;s Linux-Container Runtime](https://github.com/apple/container)
* [2025-06-09, 20:40:00](https://apple.slashdot.org/story/25/06/09/1854216/apple-unveils-a-dedicated-games-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Unveils a Dedicated Games App](https://apple.slashdot.org/story/25/06/09/1854216/apple-unveils-a-dedicated-games-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-09, 20:00:00](https://news.slashdot.org/story/25/06/09/1849202/china-shuts-down-ai-tools-during-nationwide-college-exams?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Shuts Down AI Tools During Nationwide College Exams](https://news.slashdot.org/story/25/06/09/1849202/china-shuts-down-ai-tools-during-nationwide-college-exams?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-09, 19:31:06](https://lobste.rs/s/g2tfxg/munal_os_graphical_experimental_os_with) - [Munal OS: A graphical experimental OS with WASM sandboxing](https://github.com/Askannz/munal-os)
* [2025-06-09, 19:20:00](https://apple.slashdot.org/story/25/06/09/1843200/apple-finally-brings-mac-like-windowing-and-menu-bar-to-ipad?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Finally Brings Mac-like Windowing and Menu Bar To iPad](https://apple.slashdot.org/story/25/06/09/1843200/apple-finally-brings-mac-like-windowing-and-menu-bar-to-ipad?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-09, 18:40:00](https://yro.slashdot.org/story/25/06/09/1839245/youtube-will-protect-free-expression-by-pulling-back-on-content-moderation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [YouTube Will &apos;Protect Free Expression&apos; By Pulling Back On Content Moderation](https://yro.slashdot.org/story/25/06/09/1839245/youtube-will-protect-free-expression-by-pulling-back-on-content-moderation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-09, 18:14:33](https://lobste.rs/s/nds4tx/qwen3_embedding_models) - [Qwen3 embedding models](https://huggingface.co/Qwen/Qwen3-Embedding-0.6B-GGUF)
* [2025-06-09, 18:12:31](https://lobste.rs/s/etkjh7/killing_x11) - [killing X11](https://flak.tedunangst.com/post/killing-X11)
* [2025-06-09, 18:11:51](https://lobste.rs/s/hrk5y5/why_doesn_t_rust_care_more_about_compiler) - [Why doesn’t Rust care more about compiler performance?](https://kobzol.github.io/rust/rustc/2025/06/09/why-doesnt-rust-care-more-about-compiler-performance.html)
* [2025-06-09, 18:07:43](https://lobste.rs/s/in8yn9/is_rust_faster_than_c) - [Is Rust faster than C?](https://steveklabnik.com/writing/is-rust-faster-than-c/)
* [2025-06-09, 18:05:00](https://hardware.slashdot.org/story/25/06/09/180229/seagates-new-4tb-xbox-expansion-card-costs-more-than-the-xbox-series-s?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Seagate&apos;s New 4TB Xbox Expansion Card Costs More Than the Xbox Series S](https://hardware.slashdot.org/story/25/06/09/180229/seagates-new-4tb-xbox-expansion-card-costs-more-than-the-xbox-series-s?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-09, 17:49:28](https://lobste.rs/s/zj46zn/makefile_md_possibly_use_ful_less) - [Makefile.md - Possibly Use(ful|less) Polyglot Synthesis of Makefile and Markdown](https://zoo.dev/blog/polyglot-makefile-markdown)
* [2025-06-09, 17:44:16](https://news.ycombinator.com/item?id=44226978) - [Apple announces Foundation Models and Containerization frameworks, etc](https://www.apple.com/newsroom/2025/06/apple-supercharges-its-tools-and-technologies-for-developers/)
* [2025-06-09, 17:34:29](https://news.ycombinator.com/item?id=44226879) - [Show HN: Munal OS: a graphical experimental OS with WASM sandboxing](https://github.com/Askannz/munal-os)
* [2025-06-09, 17:11:44](https://lobste.rs/s/ujgjkb/illusion_thinking) - [The Illusion of Thinking](https://ml-site.cdn-apple.com/papers/the-illusion-of-thinking.pdf)
* [2025-06-09, 17:09:47](https://news.ycombinator.com/item?id=44226612) - [Apple introduces a universal design across platforms](https://www.apple.com/newsroom/2025/06/apple-introduces-a-delightful-and-elegant-new-software-design/)
* [2025-06-09, 16:58:00](https://soylentnews.org/article.pl?sid=25/06/08/142216&amp;from=rss) - [Bill Atkinson, Macintosh Pioneer and Inventor of Hypercard, Dies at 74](https://soylentnews.org/article.pl?sid=25/06/08/142216&amp;from=rss)
* [2025-06-09, 16:56:09](https://lobste.rs/s/q8zput/radeon_software_for_linux_dropping_amd_s) - [Radeon Software For Linux Dropping AMD&apos;s Proprietary OpenGL/Vulkan Drivers](https://www.phoronix.com/news/Radeon-Software-Drop-Prop-GL-VK)
* [2025-06-09, 16:28:51](https://news.ycombinator.com/item?id=44226145) - [Tell HN: Help restore the tax deduction for software dev in the US (Section 174)](https://news.ycombinator.com/item?id=44226145)
* [2025-06-09, 16:09:03](https://news.ycombinator.com/item?id=44225930) - [Launch HN: Chonkie (YC X25) – Open-Source Library for Advanced Chunking](https://news.ycombinator.com/item?id=44225930)
* [2025-06-09, 15:22:06](https://lobste.rs/s/wyizli/ai_angst) - [AI Angst](https://www.tbray.org/ongoing/When/202x/2025/06/06/My-AI-Angst)
* [2025-06-09, 14:47:55](https://lobste.rs/s/qjtoox/your_phoenix_application_directly_on) - [Your Phoenix application, directly on your Tailnet](https://gist.github.com/Munksgaard/9102f0be2562f7ba1eca32b7e0da643e)
* [2025-06-09, 14:40:42](https://lobste.rs/s/1lbcze/cross_compiling_zig_on_old_kindle) - [Cross-compiling Zig on an old Kindle](https://samkhawase.com/blog/zig-kindle-gdb/)
* [2025-06-09, 14:27:32](https://lobste.rs/s/1sglvd/bruteforcing_phone_number_any_google) - [Bruteforcing the phone number of any Google user](https://brutecat.com/articles/leaking-google-phones)
* [2025-06-09, 14:27:30](https://news.ycombinator.com/item?id=44224874) - [Doctors could hack the nervous system with ultrasound](https://spectrum.ieee.org/focused-ultrasound-stimulation-inflammation-diabetes)
* [2025-06-09, 14:06:51](https://news.ycombinator.com/item?id=44224684) - [Bruteforcing the phone number of any Google user](https://brutecat.com/articles/leaking-google-phones)
* [2025-06-09, 14:02:48](https://lobste.rs/s/tcrtpl/ish_grep_like_text_search_with_optimal) - [Ish: Grep-like text search with optimal alignment, built with Mojo](https://github.com/BioRadOpenSource/ish)
* [2025-06-09, 13:45:56](https://lobste.rs/s/5i3lhl/apple_wwdc_2025) - [Apple WWDC 2025](https://www.apple.com/apple-events/)
* [2025-06-09, 12:24:44](https://lobste.rs/s/yjshul/how_i_program_with_agents) - [How I program with Agents](https://crawshaw.io/blog/programming-with-agents)
* [2025-06-09, 12:17:15](https://lobste.rs/s/hjogbb/high_level_os_challenge) - [The high-level OS challenge](https://ochagavia.nl/blog/the-high-level-os-challenge/)
* [2025-06-09, 12:11:00](https://soylentnews.org/article.pl?sid=25/06/08/0319228&amp;from=rss) - [University Of Michigan Achieves First Human Brain Recording With Wireless Implant](https://soylentnews.org/article.pl?sid=25/06/08/0319228&amp;from=rss)
* [2025-06-09, 11:41:06](https://lobste.rs/s/btogou/llms_are_cheap) - [LLMs are cheap](https://www.snellman.net/blog/archive/2025-06-02-llms-are-cheap/)
* [2025-06-09, 11:17:08](https://lobste.rs/s/nrxya6/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/nrxya6/what_are_you_doing_this_week)
* [2025-06-09, 07:27:00](https://soylentnews.org/article.pl?sid=25/06/08/0311242&amp;from=rss) - [Scientists Find New Markers To Identify Species From Fragments Of Fossilized Bone](https://soylentnews.org/article.pl?sid=25/06/08/0311242&amp;from=rss)
* [2025-06-09, 06:38:05](https://lobste.rs/s/akvlo8/two_approaches_solving_quiet_fediverse) - [Two Approaches to Solving the “Quiet Fediverse” Problem: Conversation Backfilling Mechanisms](https://hackers.pub/@hongminhee/2025/quiet-fediverse-two-approaches/en)
* [2025-06-09, 05:51:39](https://lobste.rs/s/fmof95/zig_s_self_hosted_x86_backend_is_now) - [Zig&apos;s self-hosted x86 backend is now default in Debug mode](https://ziglang.org/devlog/2025/?unique/#2025-06-08)
* [2025-06-09, 02:46:00](https://soylentnews.org/article.pl?sid=25/06/08/031256&amp;from=rss) - [Are Dead Sea Scrolls Older Than We Thought?](https://soylentnews.org/article.pl?sid=25/06/08/031256&amp;from=rss)
* [2025-06-08, 22:01:00](https://soylentnews.org/article.pl?sid=25/06/07/1357214&amp;from=rss) - [Crypto Kidnapping Organiser Arrested in Morocco](https://soylentnews.org/article.pl?sid=25/06/07/1357214&amp;from=rss)
* [2025-06-08, 17:17:12](https://lobste.rs/s/82zdak/low_impact_keybase_impersonation_issue) - [A Low-Impact Keybase Impersonation Issue on Lobsters](https://www.naff.dev/blog/lobsters-keybase-impersonation)
* [2025-06-08, 17:16:00](https://soylentnews.org/article.pl?sid=25/06/07/1218218&amp;from=rss) - [Volvo is Introducing the First Multi-Adaptive Seatbelt Technology on the EX60 EV](https://soylentnews.org/article.pl?sid=25/06/07/1218218&amp;from=rss)
* [2025-06-08, 12:28:00](https://soylentnews.org/article.pl?sid=25/06/07/1211222&amp;from=rss) - [Endangered Classic Mac Plastic Color Returns as 3D-Printer Filament](https://soylentnews.org/article.pl?sid=25/06/07/1211222&amp;from=rss)
* [2025-06-08, 08:12:00](https://soylentnews.org/article.pl?sid=25/06/07/123250&amp;from=rss) - [UK Govt Study: Copilot AI Saved Workers 26 Minutes a Day](https://soylentnews.org/article.pl?sid=25/06/07/123250&amp;from=rss)
* [2025-06-08, 03:29:00](https://soylentnews.org/article.pl?sid=25/06/07/1155252&amp;from=rss) - [Damage-Sensing and Self-Healing Artificial Muscles Heralded as Huge Step Forward in Robotics](https://soylentnews.org/article.pl?sid=25/06/07/1155252&amp;from=rss)
* [2025-06-07, 22:42:00](https://soylentnews.org/article.pl?sid=25/06/06/1411252&amp;from=rss) - [Windows Users! Keep the Machine You&apos;ve Got and Switch to Linux and Plasma](https://soylentnews.org/article.pl?sid=25/06/06/1411252&amp;from=rss)
* [2025-06-07, 18:02:00](https://soylentnews.org/article.pl?sid=25/06/06/0553236&amp;from=rss) - [Mathematical Model Helps European Regions Set Suitable Targets to Close Gender Gaps](https://soylentnews.org/article.pl?sid=25/06/06/0553236&amp;from=rss)
* [2025-06-07, 13:17:00](https://soylentnews.org/article.pl?sid=25/06/06/1139229&amp;from=rss) - [Reality Check: Microsoft Azure CTO Pushes Back on AI Vibe Coding Hype, Sees ‘Upper Limit’](https://soylentnews.org/article.pl?sid=25/06/06/1139229&amp;from=rss)
* [2025-06-07, 08:30:00](https://soylentnews.org/article.pl?sid=25/06/06/111254&amp;from=rss) - [Klarna CEO Says Company Will Use Humans to Offer VIP Customer Service](https://soylentnews.org/article.pl?sid=25/06/06/111254&amp;from=rss)
* [2025-06-07, 06:53:41](https://news.ycombinator.com/item?id=44207943) - [Working with the EPA to Secure Exposed Water HMIs](https://censys.com/blog/turning-off-the-information-flow-working-with-the-epa-to-secure-hundreds-of-exposed-water-hmis)
* [2025-06-07, 03:45:00](https://soylentnews.org/article.pl?sid=25/06/06/1057206&amp;from=rss) - [Venus’ Tectonics May be Actively Reshaping its Surface](https://soylentnews.org/article.pl?sid=25/06/06/1057206&amp;from=rss)
* [2025-06-06, 23:02:00](https://soylentnews.org/article.pl?sid=25/06/05/2347208&amp;from=rss) - [X Changes its Terms to Bar Training of AI Models Using its Content](https://soylentnews.org/article.pl?sid=25/06/05/2347208&amp;from=rss)
* [2025-06-06, 21:47:10](https://news.ycombinator.com/item?id=44205319) - [Animate a mesh across a sphere&apos;s surface](https://garden.bradwoods.io/notes/javascript/three-js/animate-a-mesh-on-a-spheres-surface)
* [2025-06-06, 18:17:00](https://soylentnews.org/article.pl?sid=25/06/05/1218249&amp;from=rss) - [European Commission: Make Europe Great Again for Startups](https://soylentnews.org/article.pl?sid=25/06/05/1218249&amp;from=rss)
* [2025-06-06, 18:06:11](https://news.ycombinator.com/item?id=44203464) - [Encapsulated Co–Ni alloy boosts high-temperature CO2 electroreduction](https://www.nature.com/articles/s41586-025-08978-0)
* [2025-06-06, 16:51:50](https://news.ycombinator.com/item?id=44202759) - [The Chicxulub Asteroid Impact and Mass Extinction](https://www.science.org/doi/10.1126/science.1177265)
* [2025-06-06, 16:03:00](https://soylentnews.org/article.pl?sid=25/06/06/1417217&amp;from=rss) - [Japan&apos;s Resilience Moon Lander Has Crashed Into The Lunar Surface](https://soylentnews.org/article.pl?sid=25/06/06/1417217&amp;from=rss)
* [2025-06-06, 14:15:28](https://news.ycombinator.com/item?id=44201143) - [What methylene blue can (and can’t) do for the brain](https://neurofrontiers.blog/what-methylene-blue-can-and-cant-do-for-the-brain/)
* [2025-06-06, 13:32:00](https://soylentnews.org/article.pl?sid=25/06/05/1054224&amp;from=rss) - [TSMC&apos;s 2Nm Wafer Prices Hit $30,000 As SRAM Yields Reportedly Hit 90%](https://soylentnews.org/article.pl?sid=25/06/05/1054224&amp;from=rss)
* [2025-06-06, 08:48:00](https://soylentnews.org/article.pl?sid=25/06/05/1051216&amp;from=rss) - [The Far Side of the Moon May Host the World&apos;s Most Sensitive Telescope, Shielded From Interference](https://soylentnews.org/article.pl?sid=25/06/05/1051216&amp;from=rss)
* [2025-06-06, 03:59:00](https://soylentnews.org/article.pl?sid=25/06/04/2236200&amp;from=rss) - [Spacex&apos;s Starship And Super Heavy Booster Crash](https://soylentnews.org/article.pl?sid=25/06/04/2236200&amp;from=rss)
