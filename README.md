# [News Summary](https://kherrick.github.io/news-summary/)

## Linux, Programming, and Technology

* [Hannah Montana Linux v26.0](https://gitlab.com/DecaCagle/hannahmontanalinux26) - An intriguing update for the niche yet fascinating Hannah Montana-themed Linux distribution.

* [Practical Algorithms for Incremental Software Development Environments](https://www2.eecs.berkeley.edu/Pubs/TechRpts/1997/Archive/CSD-97-946.pdf) - A classic yet valuable resource on how to construct incremental computation algorithms in programming environments.

* [A road to Lisp: Why Lisp](https://scotto.me/blog/2026-07-09-why-lisp/) - A thought-provoking exploration reflecting on the legacy and unique contributions of the Lisp programming language.

* [Practical Algorithms for Incremental Software Development Environments](https://www2.eecs.berkeley.edu/Pubs/TechRpts/1997/Archive/CSD-97-946.pdf) - A comprehensive look at efficiently using algorithms in software development workflows.

* [How to build a circular LCD clock](https://blinry.org/lcd-clock/) - A creative step-by-step guide for crafting a functional circular LCD clock.

* [Ditching Vagrant: VMs with KVM and Virsh on Debian](https://benjamintoll.com/2026/06/29/on-ditching-vagrant/) - Alternatives to Vagrant that leverage KVM and Virsh for virtual machine management on Debian systems.

* [Announcing TypeScript 7.0](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/) - Microsoft's release of TypeScript 7.0, highlighting its new features and advancements.

## Artificial Intelligence and Machine Learning

* [AI-generated videos to maximally drive a target brain region](https://nevo-project.epfl.ch/) - A surreal and innovative use of AI to create videos designed to stimulate specific brain regions.

* [Cpp2Rust: Automatic Translation of C++ to Safe Rust](https://github.com/Cpp2Rust/cpp2rust) - A project showcasing the translation of C++ code into safer Rust programming language.

* [OpenAI's CEO of AGI Deployment, Fidji Simo, Is Stepping Down](https://slashdot.org/story/26/07/10/052227/openais-ceo-of-agi-deployment-fidji-simo-is-stepping-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Leadership changes in OpenAI as Fidji Simo steps down from her AGI deployment role.

* [OpenAI Rolls Out GPT-5.6 After Government Greenlight, Announces 'ChatGPT Work'](https://slashdot.org/story/26/07/09/1821245/openai-rolls-out-gpt-56-after-government-greenlight-announces-chatgpt-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The next evolution in OpenAI's advancements in generative AI has arrived with GPT-5.6.

## Design and Development

* [Good Tools Are Invisible](https://www.gingerbill.org/article/2026/07/10/good-tools-are-invisible/) - Explores the philosophy behind effective tools that don't impede the workflow, blending seamlessly into the creative process.

* [What are you doing this weekend?](https://lobste.rs/s/u9yf5l/what_are_you_doing_this_weekend) - A community discussion celebrating diverse programming projects and ideas for the weekend.

* [Write code like a human will maintain it](https://unstack.io/write-code-like-a-human-will-maintain-it) - Insights into writing maintainable and readable code with long-term utility in mind.

* [The Annotated JEPA](https://elonlit.com/scrivings/the-annotated-jepa/) - A detailed analysis and thoughtful perspective on JEPA methodology and concepts.

## Science and Technology Innovations

* [Nobel-Winning US Chemist Will Move to China to Lead AI Institute](https://science.slashdot.org/story/26/07/10/0830229/nobel-winning-us-chemist-will-move-to-china-to-lead-ai-institute?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - High-profile career moves emphasizing the global nature of cutting-edge research.

* [Record-Breaking Ocean Drilling Reveals Why Japan's 2011 Tsunami Was So Deadly](https://soylentnews.org/article.pl?sid=26/07/09/0335227&amp;from=rss) - Scientific exploration reveals the geological events that contributed to Japan's devastating tsunami in 2011.

* [Humanoid Robots Controlled By Surgeons Did World-First Operation On Live Pigs](https://hardware.slashdot.org/story/26/07/10/0128252/humanoid-robots-controlled-by-surgeons-did-world-first-operation-on-live-pigs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A major breakthrough in medical robotics as surgeons remotely control humanoid robots for surgery on live animals.

## Cultural Reflections and Society

* [Parents' Phone Addiction Affects Bond With Kids, New Study Finds](https://mobile.slashdot.org/story/26/07/09/0445259/parents-phone-addiction-affects-bond-with-kids-new-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A study revealing the impacts of excessive screen time on parent-child relationships.

* [Google Search Hits All-Time Usage Record](https://tech.slashdot.org/story/26/07/09/1829252/google-search-hits-all-time-usage-record?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Milestone achievement for Google hits a record usage peak.

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

* [2026-07-10, 16:28:11](https://lobste.rs/s/w8svjr/hannah_montana_linux_v26_0) - [Hannah Montana Linux v26.0](https://gitlab.com/DecaCagle/hannahmontanalinux26)
* [2026-07-10, 16:21:18](https://news.ycombinator.com/item?id=48862035) - [Garnix Is Joining Shopify](https://garnix.io/blog/shutting-down/)
* [2026-07-10, 16:00:00](https://tech.slashdot.org/story/26/07/10/0846241/sap-makes-it-easier-for-customers-to-shop-for-legacy-product-support-ending-eu-antitrust-probe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SAP Makes It Easier For Customers To Shop For Legacy Product Support, Ending EU Antitrust Probe](https://tech.slashdot.org/story/26/07/10/0846241/sap-makes-it-easier-for-customers-to-shop-for-legacy-product-support-ending-eu-antitrust-probe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-10, 15:59:53](https://news.ycombinator.com/item?id=48861717) - [QuadRF can spot drones and see WiFi through my wall](https://www.jeffgeerling.com/blog/2026/quadrf-can-spot-drones-and-see-wifi-through-my-wall/)
* [2026-07-10, 15:42:38](https://lobste.rs/s/cq3mft/practical_algorithms_for_incremental) - [Practical Algorithms for Incremental Software Development Environments](https://www2.eecs.berkeley.edu/Pubs/TechRpts/1997/Archive/CSD-97-946.pdf)
* [2026-07-10, 15:30:44](https://news.ycombinator.com/item?id=48861319) - [A Love Letter to Flashcards](https://lesleylai.info/en/flashcards/)
* [2026-07-10, 15:23:42](https://news.ycombinator.com/item?id=48861213) - [Computation as a Universal and Fundamental Concept](https://ergo.org/courses/computation-as-a-universal-and-fundamental-concept)
* [2026-07-10, 15:00:00](https://slashdot.org/story/26/07/10/052227/openais-ceo-of-agi-deployment-fidji-simo-is-stepping-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI&apos;s CEO of AGI Deployment, Fidji Simo, Is Stepping Down](https://slashdot.org/story/26/07/10/052227/openais-ceo-of-agi-deployment-fidji-simo-is-stepping-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-10, 13:45:05](https://news.ycombinator.com/item?id=48859835) - [The Annotated JEPA](https://elonlit.com/scrivings/the-annotated-jepa/)
* [2026-07-10, 13:40:01](https://news.ycombinator.com/item?id=48859784) - [ActivityPub over ATProto](https://berjon.com/ap-at/)
* [2026-07-10, 13:33:00](https://news.ycombinator.com/item?id=48859701) - [Write code like a human will maintain it](https://unstack.io/write-code-like-a-human-will-maintain-it)
* [2026-07-10, 13:31:08](https://news.ycombinator.com/item?id=48859678) - [Successful Companies Go Blind](https://ianreppel.org/how-successful-companies-go-blind/)
* [2026-07-10, 13:07:38](https://news.ycombinator.com/item?id=48859387) - [Show HN: Runloom – Go-style coroutines for Python free-threaded](https://github.com/robertsdotpm/runloom)
* [2026-07-10, 12:17:00](https://soylentnews.org/article.pl?sid=26/07/09/0339222&amp;from=rss) - [Back to Basics, or Masm. Writing a Tiny Notepad for W11.](https://soylentnews.org/article.pl?sid=26/07/09/0339222&amp;from=rss)
* [2026-07-10, 12:01:41](https://lobste.rs/s/ey7far/two_ways_design) - [Two Ways To Design](https://wiki.c2.com/?TwoWaysToDesign)
* [2026-07-10, 12:00:36](https://news.ycombinator.com/item?id=48858745) - [Laylo (YC S20) Is Hiring a Head of Finance](https://www.ycombinator.com/companies/laylo/jobs/qce41D2-head-of-finance)
* [2026-07-10, 12:00:00](https://tech.slashdot.org/story/26/07/10/0838224/microsoft-to-retire-owa-light-client-in-exchange-server?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft to Retire OWA Light Client In Exchange Server](https://tech.slashdot.org/story/26/07/10/0838224/microsoft-to-retire-owa-light-client-in-exchange-server?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-10, 11:59:55](https://news.ycombinator.com/item?id=48858737) - [Late Bronze Age Collapse](https://acoup.blog/2026/01/30/collections-the-late-bronze-age-collapse-a-very-brief-introduction/)
* [2026-07-10, 11:00:15](https://news.ycombinator.com/item?id=48858292) - [EU Commission: addictive design Instagram and Facebook in breach of the DSA](https://ec.europa.eu/commission/presscorner/home/en)
* [2026-07-10, 10:44:48](https://lobste.rs/s/u9yf5l/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/u9yf5l/what_are_you_doing_this_weekend)
* [2026-07-10, 10:40:26](https://news.ycombinator.com/item?id=48858171) - [Unified Memory, Explained: Why Mini PCs Can Run 70B Models a Big GPU Can&apos;t](https://vettedconsumer.com/unified-memory-explained-why-mini-pcs-can-run-70b-models-a-big-gpu-cant-and-where-they-slow-down/)
* [2026-07-10, 10:32:41](https://news.ycombinator.com/item?id=48858121) - [Good Tools Are Invisible](https://www.gingerbill.org/article/2026/07/10/good-tools-are-invisible/)
* [2026-07-10, 09:00:00](https://science.slashdot.org/story/26/07/10/0830229/nobel-winning-us-chemist-will-move-to-china-to-lead-ai-institute?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nobel-Winning US Chemist Will Move to China to Lead AI Institute](https://science.slashdot.org/story/26/07/10/0830229/nobel-winning-us-chemist-will-move-to-china-to-lead-ai-institute?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-10, 08:21:10](https://news.ycombinator.com/item?id=48857230) - [In Emacs, Everything Looks Like a Service](http://yummymelon.com/devnull/in-emacs-everything-looks-like-a-service.html)
* [2026-07-10, 07:39:11](https://news.ycombinator.com/item?id=48856904) - [AI-generated videos to maximally drive a target brain region](https://nevo-project.epfl.ch/)
* [2026-07-10, 07:30:00](https://soylentnews.org/article.pl?sid=26/07/09/0335227&amp;from=rss) - [Record-Breaking Ocean Drilling Reveals Why Japan&apos;s 2011 Tsunami Was So Deadly](https://soylentnews.org/article.pl?sid=26/07/09/0335227&amp;from=rss)
* [2026-07-10, 05:28:45](https://lobste.rs/s/skiumt/let_s_build_simple_interpreter_for_apl) - [Let&apos;s build a simple interpreter for APL](https://mathspp.com/blog/lsbasi-apl-part1)
* [2026-07-10, 03:30:00](https://hardware.slashdot.org/story/26/07/10/0128252/humanoid-robots-controlled-by-surgeons-did-world-first-operation-on-live-pigs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Humanoid Robots Controlled By Surgeons Did World-First Operation On Live Pigs](https://hardware.slashdot.org/story/26/07/10/0128252/humanoid-robots-controlled-by-surgeons-did-world-first-operation-on-live-pigs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-10, 03:24:53](https://lobste.rs/s/xyotoa/cpp2rust_automatic_translation_c_safe) - [Cpp2Rust: Automatic Translation of C++ to Safe Rust](https://github.com/Cpp2Rust/cpp2rust)
* [2026-07-10, 02:46:00](https://soylentnews.org/article.pl?sid=26/07/09/0329217&amp;from=rss) - [Bethesda, Id Software Reportedly Hit Hard by Microsoft Layoffs](https://soylentnews.org/article.pl?sid=26/07/09/0329217&amp;from=rss)
* [2026-07-10, 02:14:15](https://lobste.rs/s/gd15cf/fast_image_video_fidelity_metrics_c_zig) - [Fast Image &amp; Video Fidelity Metrics in C, Zig](https://github.com/halidecx/fmetrics)
* [2026-07-10, 01:25:59](https://lobste.rs/s/2jgiax/superoptimizer_look_at_smallest_program) - [Superoptimizer -- A Look at the Smallest Program](https://dl.acm.org/doi/epdf/10.1145/36177.36194)
* [2026-07-10, 00:46:25](https://lobste.rs/s/e85zgh/road_lisp_why_lisp) - [A road to Lisp: Why Lisp](https://scotto.me/blog/2026-07-09-why-lisp/)
* [2026-07-09, 23:49:39](https://lobste.rs/s/bcf7pk/repo_local_documentation_system_for) - [Repo-Local Documentation System for Humans &amp; Agents](https://gist.github.com/lukewilson2002/cb48062397d8b51954034d94b8c19d6d)
* [2026-07-09, 23:00:00](https://news.slashdot.org/story/26/07/09/1947218/lawmakers-probe-growing-use-of-chinese-ai-models-in-us-companies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Lawmakers Probe Growing Use of Chinese AI Models In US Companies ](https://news.slashdot.org/story/26/07/09/1947218/lawmakers-probe-growing-use-of-chinese-ai-models-in-us-companies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-09, 22:06:00](https://soylentnews.org/article.pl?sid=26/07/08/0159235&amp;from=rss) - [Interoception:  the Sense of How You Feel Inside](https://soylentnews.org/article.pl?sid=26/07/08/0159235&amp;from=rss)
* [2026-07-09, 22:00:00](https://tech.slashdot.org/story/26/07/09/1829252/google-search-hits-all-time-usage-record?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Search Hits All-Time Usage Record](https://tech.slashdot.org/story/26/07/09/1829252/google-search-hits-all-time-usage-record?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-09, 21:00:00](https://yro.slashdot.org/story/26/07/09/1835232/meta-patents-ai-device-that-tracks-your-emotions-watches-you-take-your-meds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Patents AI Device That Tracks Your Emotions, Watches You Take Your Meds](https://yro.slashdot.org/story/26/07/09/1835232/meta-patents-ai-device-that-tracks-your-emotions-watches-you-take-your-meds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-09, 20:37:43](https://news.ycombinator.com/item?id=48852048) - [How RCA Victor sold Sound Service to classrooms in 1939](https://pncnmnp.github.io/blogs/rca-victor-education.html)
* [2026-07-09, 20:36:43](https://lobste.rs/s/lep7wh/how_build_circular_lcd_clock) - [How to build a circular LCD clock](https://blinry.org/lcd-clock/)
* [2026-07-09, 20:06:04](https://lobste.rs/s/eehcpl/page_weight_matters) - [Page weight matters](https://nh3.dev/blog/05-bloat)
* [2026-07-09, 20:00:00](https://slashdot.org/story/26/07/09/1821245/openai-rolls-out-gpt-56-after-government-greenlight-announces-chatgpt-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Rolls Out GPT-5.6 After Government Greenlight, Announces &apos;ChatGPT Work&apos;](https://slashdot.org/story/26/07/09/1821245/openai-rolls-out-gpt-56-after-government-greenlight-announces-chatgpt-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-09, 19:00:00](https://news.slashdot.org/story/26/07/09/1659227/google-hands-open-health-stack-to-the-linux-foundation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Hands Open Health Stack To the Linux Foundation](https://news.slashdot.org/story/26/07/09/1659227/google-hands-open-health-stack-to-the-linux-foundation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-09, 18:31:39](https://lobste.rs/s/ykabry/batch_job_elm_architecture) - [A batch job, in The Elm Architecture](https://cekrem.github.io/posts/elm-run-batch-job/)
* [2026-07-09, 18:00:00](https://news.slashdot.org/story/26/07/09/1649254/san-francisco-moves-to-build-private-luxury-airport-terminal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [San Francisco Moves To Build Private Luxury Airport Terminal](https://news.slashdot.org/story/26/07/09/1649254/san-francisco-moves-to-build-private-luxury-airport-terminal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-09, 17:23:00](https://soylentnews.org/article.pl?sid=26/07/08/0155211&amp;from=rss) - [NASA May Send A Backup, Nuclear-Powered Mars Rover To The Moon](https://soylentnews.org/article.pl?sid=26/07/08/0155211&amp;from=rss)
* [2026-07-09, 17:17:16](https://news.ycombinator.com/item?id=48849292) - [Interview with Mitchell Hashimoto about Ghostty and Zig](https://alexalejandre.com/programming/interview-with-mitchell-hashimoto/)
* [2026-07-09, 17:04:14](https://news.ycombinator.com/item?id=48849066) - [GPT-5.6](https://openai.com/index/gpt-5-6/)
* [2026-07-09, 17:00:00](https://hardware.slashdot.org/story/26/07/09/1641225/macos-28-will-drop-support-for-encrypted-mac-os-extended-volumes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [macOS 28 Will Drop Support For Encrypted Mac OS Extended Volumes](https://hardware.slashdot.org/story/26/07/09/1641225/macos-28-will-drop-support-for-encrypted-mac-os-extended-volumes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-09, 16:26:15](https://lobste.rs/s/pg7hce/conviviality_computational_science) - [Conviviality in computational science](https://blog.khinsen.net/posts/2026/07/06/conviviality.html)
* [2026-07-09, 16:00:00](https://slashdot.org/story/26/07/09/0452203/openai-releases-new-voice-models-for-more-natural-live-conversations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Releases New Voice Models For More Natural Live Conversations](https://slashdot.org/story/26/07/09/0452203/openai-releases-new-voice-models-for-more-natural-live-conversations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-09, 15:41:15](https://lobste.rs/s/0mam5k/lobsters_interview_with_mitchellh) - [Lobsters Interview with mitchellh](https://alexalejandre.com/programming/interview-with-mitchell-hashimoto/)
* [2026-07-09, 15:27:48](https://news.ycombinator.com/item?id=48847552) - [Hy3](https://hy.tencent.com/research/hy3)
* [2026-07-09, 15:21:30](https://lobste.rs/s/tedi5h/you_paid_me_long_time_linux_user_use) - [You paid me, a long-time Linux user, to use Windows 11 exclusively for a month: here’s how it went](https://www.osnews.com/story/145459/you-paid-me-a-long-time-linux-user-to-use-windows-11-exclusively-for-a-month-heres-how-it-went/)
* [2026-07-09, 15:00:00](https://mobile.slashdot.org/story/26/07/09/0445259/parents-phone-addiction-affects-bond-with-kids-new-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Parents&apos; Phone Addiction Affects Bond With Kids, New Study Finds](https://mobile.slashdot.org/story/26/07/09/0445259/parents-phone-addiction-affects-bond-with-kids-new-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-09, 14:56:32](https://lobste.rs/s/o9edbl/announcing_rust_1_97_0) - [Announcing Rust 1.97.0](https://blog.rust-lang.org/2026/07/09/Rust-1.97.0/)
* [2026-07-09, 14:54:34](https://news.ycombinator.com/item?id=48846941) - [My burner email blocklist blocked me](https://benjamin.piouffle.com/blog/burner-email-blocklists/)
* [2026-07-09, 14:48:28](https://lobste.rs/s/qnipw7/physically_based_pbr_values_database) - [Physically Based - The PBR values database](https://physicallybased.info)
* [2026-07-09, 13:52:12](https://lobste.rs/s/ad7cm6/prolog_library_for_interfacing_with_llms) - [A Prolog library for interfacing with LLMs](https://github.com/vagos/llmpl)
* [2026-07-09, 12:53:46](https://lobste.rs/s/3eo2nv/i_did_not_kill_stanley_lieber_how_draw_with) - [I Did Not Kill Stanley Lieber: How to draw (with 9front)](https://triapul.cz/automa/i_did_not_kill_stanley_lieber)
* [2026-07-09, 12:32:00](https://soylentnews.org/article.pl?sid=26/07/08/0153215&amp;from=rss) - [The Twenty-Ninth International Obfuscated C Code Contest is back](https://soylentnews.org/article.pl?sid=26/07/08/0153215&amp;from=rss)
* [2026-07-09, 11:03:54](https://news.ycombinator.com/item?id=48843923) - [EU Parliament greenlights Chat Control 1.0](https://www.patrick-breyer.de/en/eu-parliament-greenlights-chat-control-1-0-breyer-our-children-lose-out/)
* [2026-07-09, 11:00:00](https://news.slashdot.org/story/26/07/09/0436235/meta-to-build-9-billion-alberta-data-center-its-first-in-canada?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta To Build $9 Billion Alberta Data Center, Its First In Canada](https://news.slashdot.org/story/26/07/09/0436235/meta-to-build-9-billion-alberta-data-center-its-first-in-canada?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-09, 08:23:07](https://lobste.rs/s/v5hkjy/two_case_studies_nan) - [two case studies of NaN](https://sebsite.pw/w/20260709-nan.html)
* [2026-07-09, 08:05:04](https://news.ycombinator.com/item?id=48842459) - [Show HN: Getting GLM 5.2 running on my slow computer](https://github.com/JustVugg/colibri)
* [2026-07-09, 07:51:00](https://soylentnews.org/article.pl?sid=26/07/08/0151252&amp;from=rss) - [The Supreme Court Just Lit a Fuse Under Flock&apos;s License Plate Camera Empire](https://soylentnews.org/article.pl?sid=26/07/08/0151252&amp;from=rss)
* [2026-07-09, 07:45:31](https://lobste.rs/s/sy980q/peace_for_all_re_factor) - [Peace For All – Re: Factor](https://re.factorcode.org/2026/07/peace-for-all.html)
* [2026-07-09, 03:08:00](https://soylentnews.org/article.pl?sid=26/07/08/0149218&amp;from=rss) - [Rats Show Empathy, According to Model](https://soylentnews.org/article.pl?sid=26/07/08/0149218&amp;from=rss)
* [2026-07-09, 00:43:32](https://lobste.rs/s/dbakbg/interview_drew_devault_on_ai_free_version) - [Interview: Drew DeVault on an AI-free version of Vim](https://jasonpolak.substack.com/p/interview-drew-devault-on-an-ai-free)
* [2026-07-08, 22:22:00](https://soylentnews.org/article.pl?sid=26/07/08/0147225&amp;from=rss) - [Kernel Anti-Cheat Digital Restrictions Management Technology Is an Overreach](https://soylentnews.org/article.pl?sid=26/07/08/0147225&amp;from=rss)
* [2026-07-08, 21:50:54](https://lobste.rs/s/6rkdik/rewriting_bun_rust) - [Rewriting Bun in Rust](https://bun.com/blog/bun-in-rust)
* [2026-07-08, 17:37:00](https://soylentnews.org/article.pl?sid=26/07/06/2010203&amp;from=rss) - [Zombie ‘Who Owns Unix?’ Lawsuit Comes Alive Again](https://soylentnews.org/article.pl?sid=26/07/06/2010203&amp;from=rss)
* [2026-07-08, 16:57:26](https://lobste.rs/s/txmyod/announcing_typescript_7_0) - [Announcing TypeScript 7.0](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/)
* [2026-07-08, 12:53:00](https://soylentnews.org/article.pl?sid=26/07/06/204247&amp;from=rss) - [Paper Mill Cancer Studies Get Double the Number of Citations as Genuine Papers](https://soylentnews.org/article.pl?sid=26/07/06/204247&amp;from=rss)
* [2026-07-08, 08:05:00](https://soylentnews.org/article.pl?sid=26/07/06/1957237&amp;from=rss) - [South Korea to Spend $1T on More Memory Chip Production and Humanoid Robots](https://soylentnews.org/article.pl?sid=26/07/06/1957237&amp;from=rss)
* [2026-07-08, 03:21:00](https://soylentnews.org/article.pl?sid=26/07/05/222222&amp;from=rss) - [Google Loses Final Appeal Over $4.7 Billion EU Android Antitrust Fine](https://soylentnews.org/article.pl?sid=26/07/05/222222&amp;from=rss)
* [2026-07-07, 22:44:00](https://soylentnews.org/article.pl?sid=26/07/05/2151242&amp;from=rss) - [New Attack Provides One More Reason Why AI Browsers Are A Bad Idea](https://soylentnews.org/article.pl?sid=26/07/05/2151242&amp;from=rss)
* [2026-07-07, 18:00:00](https://soylentnews.org/article.pl?sid=26/07/05/2125258&amp;from=rss) - [Florida Bans Local Governments From Pursuing Net-Zero Emissions Goals](https://soylentnews.org/article.pl?sid=26/07/05/2125258&amp;from=rss)
* [2026-07-07, 13:13:00](https://soylentnews.org/article.pl?sid=26/07/05/2113231&amp;from=rss) - [NetNut Cracked As Google And FBI Target 2 Million-Device Botnet](https://soylentnews.org/article.pl?sid=26/07/05/2113231&amp;from=rss)
* [2026-07-07, 08:34:00](https://soylentnews.org/article.pl?sid=26/07/05/1926209&amp;from=rss) - [Amazon is Ready to Deploy the LEO Satellite Broadband Service](https://soylentnews.org/article.pl?sid=26/07/05/1926209&amp;from=rss)
* [2026-07-07, 03:52:00](https://soylentnews.org/article.pl?sid=26/07/05/1924207&amp;from=rss) - [For The First Time, A Cell Built From Scratch Grows And Divides](https://soylentnews.org/article.pl?sid=26/07/05/1924207&amp;from=rss)
* [2026-07-06, 23:04:00](https://soylentnews.org/article.pl?sid=26/07/05/1921216&amp;from=rss) - [David Rosenthal on the LLM Negative Feedback Loop](https://soylentnews.org/article.pl?sid=26/07/05/1921216&amp;from=rss)
* [2026-07-06, 21:09:56](https://news.ycombinator.com/item?id=48810543) - [Alternate Clock Designs and Time Systems](https://serialc.github.io/altClocks/)
* [2026-07-06, 18:23:00](https://soylentnews.org/article.pl?sid=26/07/05/1917212&amp;from=rss) - [Travel like it&apos;s 0 AD. ](https://soylentnews.org/article.pl?sid=26/07/05/1917212&amp;from=rss)
* [2026-07-06, 14:59:21](https://news.ycombinator.com/item?id=48805598) - [Apple Silicon Exec Explains Mac Mini AI Demand and On-Device Future](https://www.macrumors.com/2026/07/06/apple-silicon-exec-explains-mac-mini-ai-demand/)
* [2026-07-06, 14:42:04](https://news.ycombinator.com/item?id=48805342) - [Ditching Vagrant: VMs with KVM and Virsh on Debian](https://benjamintoll.com/2026/06/29/on-ditching-vagrant/)
* [2026-07-06, 13:42:00](https://soylentnews.org/article.pl?sid=26/07/05/1911206&amp;from=rss) - [Modern Life May be Outpacing the Human Mind](https://soylentnews.org/article.pl?sid=26/07/05/1911206&amp;from=rss)
* [2026-07-06, 12:32:57](https://news.ycombinator.com/item?id=48803707) - [Lost city discovered beneath Egypt&apos;s desert with ancient church](https://www.dailymail.com/sciencetech/article-15956159/Incredible-lost-city-discovered-Egypts-desert.html)
* [2026-07-06, 09:00:00](https://soylentnews.org/article.pl?sid=26/07/05/092233&amp;from=rss) - [New Law Could Let Tesla Ship Cars With No Brake Pedals Installed](https://soylentnews.org/article.pl?sid=26/07/05/092233&amp;from=rss)
* [2026-07-06, 04:16:00](https://soylentnews.org/article.pl?sid=26/07/05/0859246&amp;from=rss) - [The Weirdness of Neutrinos Could Completely Rewrite Particle Physics](https://soylentnews.org/article.pl?sid=26/07/05/0859246&amp;from=rss)
