# [News Summary](https://kherrick.github.io/news-summary/)

## Emerging Technology

* [Fusion Power Company CFS Raises $863M More From Google, Nvidia, and Many Others](https://hardware.slashdot.org/story/25/08/30/1751217/fusion-power-company-cfs-raises-863m-more-from-google-nvidia-and-many-others?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The significant funding this company has raised highlights the growing enthusiasm and competition in the nuclear fusion space. [Comments](https://hardware.slashdot.org/story/25/08/30/1751217/fusion-power-company-cfs-raises-863m-more-from-google-nvidia-and-many-others?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Alibaba Creates AI Chip To Help China Fill Nvidia Void](https://slashdot.org/story/25/08/29/231249/alibaba-creates-ai-chip-to-help-china-fill-nvidia-void?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A key move in China’s efforts to reduce reliance on Western technology giants and bolster its semiconductor industry.

## Science and Research

* [Scientists Just Created Spacetime Crystals Made of Knotted Light](https://science.slashdot.org/story/25/08/30/0720252/scientists-just-created-spacetime-crystals-made-of-knotted-light?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A groundbreaking development with implications for quantum computing and fundamental physics. [Comments](https://science.slashdot.org/story/25/08/30/0720252/scientists-just-created-spacetime-crystals-made-of-knotted-light?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [China Turns On Giant Neutrino Detector That Took a Decade To Build](https://science.slashdot.org/story/25/08/29/2253218/china-turns-on-giant-neutrino-detector-that-took-a-decade-to-build?utm_source=rss1.0mainlinkanon&utm_medium=feed) - This cutting-edge project is poised to unlock new insights into subatomic particles.

## Digital Transformation and Privacy

* [GAO warns of privacy risks in using facial recognition in rental housing](https://files.gao.gov/reports/GAO-25-107196/index.html) - Highlights the ethical challenges linked to the rapid adoption of facial recognition technologies in residential settings. [Comments](https://news.ycombinator.com/item?id=45075664)

* [The Delusion Machine – What happened when I fed my soul into an LLM](https://hedgehogreview.com/web-features/thr/posts/the-delusion-machine) - A thought-provoking exploration of ethical and existential implications of feeding personal data into large language models. [Comments](https://news.ycombinator.com/item?id=45076297)

## Climate and Ecology

* [No Longer Extinct, Beaver Populations in the Netherlands Now Threaten Their Dikes](https://slashdot.org/story/25/08/30/0652254/no-longer-extinct-beaver-populations-in-the-netherlands-now-threaten-their-dikes?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A fascinating story about how wildlife conservation clashes with human infrastructure. [Comments](https://slashdot.org/story/25/08/30/0652254/no-longer-extinct-beaver-populations-in-the-netherlands-now-threaten-their-dikes?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Collapse of Critical Atlantic Current Is No Longer Low-Likelihood, Study Finds](https://news.slashdot.org/story/25/08/29/2137253/collapse-of-critical-atlantic-current-is-no-longer-low-likelihood-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Warning of serious climate instability if environmental conditions worsen.

## Innovation in Software and Hardware

* [New interpretations suggest the "heat death" hypothesis might not hold (2023)](https://www.noemamag.com/life-need-not-ever-end/) - A philosophical and scientific reconsideration of the universe's eventual fate. [Comments](https://news.ycombinator.com/item?id=45075430)

* [10-20x Faster LLVM -O0 Back-End](https://discourse.llvm.org/t/tpde-llvm-10-20x-faster-llvm-o0-back-end/86664) - Significant improvements accelerating compilation speeds for software engineers.

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

* [2025-08-30, 18:34:16](https://lobste.rs/s/49xp2r/type_system_for_rcl_2024) - [A type system for RCL (2024)](https://ruudvanasseldonk.com/2024/a-type-system-for-rcl-part-1-introduction)
* [2025-08-30, 18:34:00](https://hardware.slashdot.org/story/25/08/30/1751217/fusion-power-company-cfs-raises-863m-more-from-google-nvidia-and-many-others?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fusion Power Company CFS Raises $863M More From Google, Nvidia, and Many Others](https://hardware.slashdot.org/story/25/08/30/1751217/fusion-power-company-cfs-raises-863m-more-from-google-nvidia-and-many-others?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-30, 18:34:00](https://soylentnews.org/article.pl?sid=25/08/29/1422213&amp;from=rss) - [4chan and Kiwi Farms Sue UK Regulator Ofcom Over Online Censorship Law](https://soylentnews.org/article.pl?sid=25/08/29/1422213&amp;from=rss)
* [2025-08-30, 17:54:42](https://lobste.rs/s/zoirhl/appealing_ban_user_friendlysock) - [Appealing the ban of user friendlysock](https://lobste.rs/s/zoirhl/appealing_ban_user_friendlysock)
* [2025-08-30, 17:39:23](https://lobste.rs/s/liiqjz/condor_s_cuzco_risc_v_core_at_hot_chips_2025) - [Condor’s Cuzco RISC-V Core at Hot Chips 2025](https://old.chipsandcheese.com/2025/08/29/condors-cuzco-risc-v-core-at-hot-chips-2025/)
* [2025-08-30, 17:34:00](https://science.slashdot.org/story/25/08/30/0720252/scientists-just-created-spacetime-crystals-made-of-knotted-light?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Scientists Just Created Spacetime Crystals Made of Knotted Light&apos;](https://science.slashdot.org/story/25/08/30/0720252/scientists-just-created-spacetime-crystals-made-of-knotted-light?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-30, 17:20:32](https://news.ycombinator.com/item?id=45076367) - [University of Cambridge Cognitive Ability Test](https://planning.e-psychometrics.com/test/icar60)
* [2025-08-30, 17:13:19](https://news.ycombinator.com/item?id=45076297) - [The Delusion Machine – What happened when I fed my soul into an LLM](https://hedgehogreview.com/web-features/thr/posts/the-delusion-machine)
* [2025-08-30, 16:47:24](https://lobste.rs/s/adcfj0/gershwin_desktop_os_x_like_desktop) - [gershwin-desktop: OS X-like Desktop Environment available exclusively in GhostBSD as a community flavor](https://github.com/gershwin-desktop/gershwin-desktop)
* [2025-08-30, 16:34:00](https://slashdot.org/story/25/08/30/0652254/no-longer-extinct-beaver-populations-in-the-netherlands-now-threaten-their-dikes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [No Longer Extinct, Beaver Populations in the Netherlands Now Threaten Their Dikes](https://slashdot.org/story/25/08/30/0652254/no-longer-extinct-beaver-populations-in-the-netherlands-now-threaten-their-dikes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-30, 15:53:05](https://news.ycombinator.com/item?id=45075664) - [GAO warns of privacy risks in using facial recognition in rental housing](https://files.gao.gov/reports/GAO-25-107196/index.html)
* [2025-08-30, 15:34:00](https://yro.slashdot.org/story/25/08/30/0618242/is-a-backlash-building-against-smart-glasses-that-record?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is a Backlash Building Against Smart Glasses That Record?](https://yro.slashdot.org/story/25/08/30/0618242/is-a-backlash-building-against-smart-glasses-that-record?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-30, 15:25:10](https://news.ycombinator.com/item?id=45075430) - [New interpretations suggest the \&quot;heat death\&quot; hypothesis might not hold (2023)](https://www.noemamag.com/life-need-not-ever-end/)
* [2025-08-30, 15:24:16](https://lobste.rs/s/ag6bcx/web_we_lost_2012) - [The Web We Lost (2012)](https://www.anildash.com//2012/12/13/the_web_we_lost/)
* [2025-08-30, 15:19:34](https://lobste.rs/s/nx9ysg/niri_v25_08) - [Niri v25.08](https://github.com/YaLTeR/niri/releases/tag/v25.08)
* [2025-08-30, 14:38:33](https://news.ycombinator.com/item?id=45075048) - [You Have to Feel It](https://mitchellh.com/writing/feel-it)
* [2025-08-30, 14:34:00](https://developers.slashdot.org/story/25/08/30/0314222/new-python-documentary-released-on-youtube?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Python Documentary Released On YouTube](https://developers.slashdot.org/story/25/08/30/0314222/new-python-documentary-released-on-youtube?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-30, 14:28:06](https://news.ycombinator.com/item?id=45074967) - [Adafruit Fruit Jam – An RP2350 mini computer running classic Macintosh](https://www.cnx-software.com/2025/08/27/adafruit-fruit-jam-a-rp2350-mini-computer-running-classic-macintosh/)
* [2025-08-30, 14:18:41](https://news.ycombinator.com/item?id=45074895) - [Condor&apos;s Cuzco RISC-V Core at Hot Chips 2025](https://chipsandcheese.com/p/condors-cuzco-risc-v-core-at-hot)
* [2025-08-30, 13:51:00](https://soylentnews.org/article.pl?sid=25/08/29/0536231&amp;from=rss) - [US Attorneys General Tell AI Companies They &apos;Will be Held Accountable&apos; for Child Safety Failures](https://soylentnews.org/article.pl?sid=25/08/29/0536231&amp;from=rss)
* [2025-08-30, 13:35:13](https://lobste.rs/s/lkt7kf/computing_simplified_coverage_polygons) - [Computing simplified coverage polygons](https://www.volkerkrause.eu/2025/08/30/simplified-coverage-polygons.html)
* [2025-08-30, 13:25:39](https://news.ycombinator.com/item?id=45074467) - [AI models need a virtual machine](https://blog.sigplan.org/2025/08/29/ai-models-need-a-virtual-machine/)
* [2025-08-30, 13:07:41](https://news.ycombinator.com/item?id=45074312) - [Bcachefs Goes to \&quot;Externally Maintained\&quot;](https://lwn.net/Articles/1035736/)
* [2025-08-30, 13:00:00](https://tech.slashdot.org/story/25/08/30/0038225/london-targets-noisy-commuters-with-headphone-campaign?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [London Targets Noisy Commuters With Headphone Campaign](https://tech.slashdot.org/story/25/08/30/0038225/london-targets-noisy-commuters-with-headphone-campaign?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-30, 12:58:48](https://news.ycombinator.com/item?id=45074248) - [Cognitive Load is what matters](https://github.com/zakirullin/cognitive-load)
* [2025-08-30, 12:43:44](https://news.ycombinator.com/item?id=45074157) - [FBI cyber cop: Salt Typhoon pwned &apos;nearly every American&apos;](https://www.theregister.com/2025/08/28/fbi_cyber_cop_salt_typhoon/)
* [2025-08-30, 12:42:30](https://news.ycombinator.com/item?id=45074147) - [Agent Client Protocol](https://agentclientprotocol.com/overview/introduction)
* [2025-08-30, 12:37:28](https://news.ycombinator.com/item?id=45074115) - [F-Stack – A network development kit with high performance based on DPDK](https://www.f-stack.org/)
* [2025-08-30, 12:31:43](https://news.ycombinator.com/item?id=45074071) - [Nokia’s legendary font makes for a great user interface font](https://www.osnews.com/story/143222/it-turns-out-nokias-legendary-font-makes-for-a-great-general-user-interface-font/)
* [2025-08-30, 11:26:35](https://news.ycombinator.com/item?id=45073746) - [Hardening Firefox – a checklist for improved browser privacy](https://andrewmarder.net/firefox/)
* [2025-08-30, 10:00:00](https://slashdot.org/story/25/08/29/231249/alibaba-creates-ai-chip-to-help-china-fill-nvidia-void?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Alibaba Creates AI Chip To Help China Fill Nvidia Void](https://slashdot.org/story/25/08/29/231249/alibaba-creates-ai-chip-to-help-china-fill-nvidia-void?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-30, 09:04:00](https://soylentnews.org/article.pl?sid=25/08/29/0527204&amp;from=rss) - [ADAS (Driver Assist) Gen 2 From BMW](https://soylentnews.org/article.pl?sid=25/08/29/0527204&amp;from=rss)
* [2025-08-30, 08:44:09](https://lobste.rs/s/lgs8qv/triangle_grids) - [Triangle Grids](https://kvachev.com/blog/posts/triangular-grid/)
* [2025-08-30, 07:21:34](https://lobste.rs/s/1t1cr0/rust_ints_rust_enums_with_less) - [Rust ints to Rust enums with less instructions](https://sailor.li/ints-to-enums)
* [2025-08-30, 07:06:24](https://lobste.rs/s/oyxahw/i_m_concerned_excerpt) - [I&apos;m concerned (excerpt)](https://studium.dev/tech/im-concerned-integrity)
* [2025-08-30, 07:02:47](https://lobste.rs/s/ftk8xs/10_20x_faster_llvm_o0_back_end) - [10-20x Faster LLVM -O0 Back-End](https://discourse.llvm.org/t/tpde-llvm-10-20x-faster-llvm-o0-back-end/86664)
* [2025-08-30, 07:00:00](https://science.slashdot.org/story/25/08/29/2253218/china-turns-on-giant-neutrino-detector-that-took-a-decade-to-build?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Turns On Giant Neutrino Detector That Took a Decade To Build](https://science.slashdot.org/story/25/08/29/2253218/china-turns-on-giant-neutrino-detector-that-took-a-decade-to-build?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-30, 06:43:50](https://lobste.rs/s/qumksr/interview_with_julio_barba) - [An Interview With Julio Barba](https://halide.cx/blog/julio-barba-interview/)
* [2025-08-30, 05:45:24](https://news.ycombinator.com/item?id=45072160) - [From Multi-Head to Latent Attention: The Evolution of Attention Mechanisms](https://vinithavn.medium.com/from-multi-head-to-latent-attention-the-evolution-of-attention-mechanisms-64e3c0505f24)
* [2025-08-30, 04:21:00](https://soylentnews.org/article.pl?sid=25/08/29/0523215&amp;from=rss) - [A Gentle Introduction to CP/M](https://soylentnews.org/article.pl?sid=25/08/29/0523215&amp;from=rss)
* [2025-08-30, 04:02:53](https://lobste.rs/s/tmsqcy/linus_torvalds_marks_bcachefs_as) - [Linus Torvalds marks bcachefs as \&quot;externally maintained\&quot;](https://lwn.net/Articles/1035736/)
* [2025-08-30, 03:30:00](https://news.slashdot.org/story/25/08/29/2137253/collapse-of-critical-atlantic-current-is-no-longer-low-likelihood-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Collapse of Critical Atlantic Current Is No Longer Low-Likelihood, Study Finds](https://news.slashdot.org/story/25/08/29/2137253/collapse-of-critical-atlantic-current-is-no-longer-low-likelihood-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-30, 02:49:07](https://lobste.rs/s/ch6jjw/rationale_for_nickel_configuration) - [The rationale for the Nickel configuration language](https://github.com/tweag/nickel/blob/master/RATIONALE.md)
* [2025-08-30, 01:29:13](https://lobste.rs/s/suyihr/moof_mind_history_dogcow_1997) - [Moof! in Mind! The history of dogcow (1997)](https://www.storybytes.com/view-moof/articles/mim.html)
* [2025-08-30, 01:25:00](https://tech.slashdot.org/story/25/08/29/2131208/mastodon-says-it-doesnt-have-the-means-to-comply-with-age-verification-laws?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mastodon Says It Doesn&apos;t &apos;Have the Means&apos; To Comply With Age Verification Laws](https://tech.slashdot.org/story/25/08/29/2131208/mastodon-says-it-doesnt-have-the-means-to-comply-with-age-verification-laws?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-30, 00:45:00](https://tech.slashdot.org/story/25/08/29/2116246/meta-changes-teen-ai-chatbot-responses-as-senate-begins-probe-into-romantic-conversations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Changes Teen AI Chatbot Responses as Senate Begins Probe Into &apos;Romantic&apos; Conversations](https://tech.slashdot.org/story/25/08/29/2116246/meta-changes-teen-ai-chatbot-responses-as-senate-begins-probe-into-romantic-conversations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-30, 00:02:00](https://tech.slashdot.org/story/25/08/29/217243/vivaldi-browser-doubles-down-on-gen-ai-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Vivaldi Browser Doubles Down On Gen AI Ban](https://tech.slashdot.org/story/25/08/29/217243/vivaldi-browser-doubles-down-on-gen-ai-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-29, 23:35:00](https://soylentnews.org/article.pl?sid=25/08/27/1236219&amp;from=rss) - [Punycode - an Overview by a Soylentil](https://soylentnews.org/article.pl?sid=25/08/27/1236219&amp;from=rss)
* [2025-08-29, 23:20:00](https://games.slashdot.org/story/25/08/29/210241/battlefield-6-dev-apologizes-for-requiring-secure-boot-to-power-anti-cheat-tools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Battlefield 6 Dev Apologizes For Requiring Secure Boot To Power Anti-Cheat Tools](https://games.slashdot.org/story/25/08/29/210241/battlefield-6-dev-apologizes-for-requiring-secure-boot-to-power-anti-cheat-tools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-29, 22:56:22](https://lobste.rs/s/rwtagp/snuffle_salsa_chacha) - [snuffle / salsa / chacha](https://graydon2.dreamwidth.org/319755.html)
* [2025-08-29, 22:40:00](https://meta.slashdot.org/story/25/08/29/2049213/meta-created-flirty-chatbots-of-celebrities-without-permission?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Created Flirty Chatbots of Celebrities Without Permission](https://meta.slashdot.org/story/25/08/29/2049213/meta-created-flirty-chatbots-of-celebrities-without-permission?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-29, 22:00:00](https://linux.slashdot.org/story/25/08/29/2033242/linus-torvalds-marks-bcachefs-as-now-externally-maintained?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linus Torvalds Marks Bcachefs as Now &apos;Externally Maintained&apos;](https://linux.slashdot.org/story/25/08/29/2033242/linus-torvalds-marks-bcachefs-as-now-externally-maintained?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-29, 20:46:51](https://lobste.rs/s/jx7r3c/do_simplest_thing_could_possibly_work) - [Do the simplest thing that could possibly work](https://www.seangoedecke.com/the-simplest-thing-that-could-possibly-work/)
* [2025-08-29, 20:25:34](https://news.ycombinator.com/item?id=45068986) - [The Theoretical Limitations of Embedding-Based Retrieval](https://arxiv.org/abs/2508.21038)
* [2025-08-29, 19:05:09](https://news.ycombinator.com/item?id=45068091) - [Do the simplest thing that could possibly work](https://www.seangoedecke.com/the-simplest-thing-that-could-possibly-work/)
* [2025-08-29, 18:51:00](https://soylentnews.org/article.pl?sid=25/08/28/1853258&amp;from=rss) - [Linux Foundation Says Yes to NoSQL Via DocumentDB](https://soylentnews.org/article.pl?sid=25/08/28/1853258&amp;from=rss)
* [2025-08-29, 18:23:17](https://lobste.rs/s/acz07b/default_search_engine_wikipedia) - [Default search engine: Wikipedia](https://paste.sr.ht/~awal/2310cfca431e9f723df281d02558eaebd77e2091)
* [2025-08-29, 17:59:13](https://lobste.rs/s/uiekig/pyret_programming_language_for) - [Pyret: A programming language for programming education](https://pyret.org/)
* [2025-08-29, 17:19:27](https://lobste.rs/s/hgpdws/sqlite_s_durability_settings_are_mess) - [SQLite&apos;s Durability Settings are a Mess](https://www.agwa.name/blog/post/sqlite_durability)
* [2025-08-29, 16:48:38](https://lobste.rs/s/1gvza6/best_way_advertise_language) - [The best way to advertise a language](https://www.stylewarning.com/posts/write-programs/)
* [2025-08-29, 16:45:21](https://news.ycombinator.com/item?id=45066395) - [John Carmack&apos;s arguments against building a custom XR OS at Meta](https://twitter.com/ID_AA_Carmack/status/1961172409920491849)
* [2025-08-29, 15:53:41](https://news.ycombinator.com/item?id=45065705) - [Essential Coding Theory [pdf]](https://cse.buffalo.edu/faculty/atri/courses/coding-theory/book/web-coding-book.pdf)
* [2025-08-29, 15:28:17](https://lobste.rs/s/imftzh/god_created_real_numbers) - [God created the real numbers](https://www.ethanheilman.com/x/34/index.html)
* [2025-08-29, 14:07:00](https://soylentnews.org/article.pl?sid=25/08/28/1849238&amp;from=rss) - [Large Reasoning Models Hitting Limits, Say Apple Researchers](https://soylentnews.org/article.pl?sid=25/08/28/1849238&amp;from=rss)
* [2025-08-29, 13:01:45](https://news.ycombinator.com/item?id=45063559) - [Grok Code Fast 1](https://x.ai/news/grok-code-fast-1)
* [2025-08-29, 10:13:05](https://lobste.rs/s/daybpw/open_letter_everyone_i_ve_butted_heads) - [An Open Letter to Everyone I&apos;ve Butted Heads With](https://andrewkelley.me/post/open-letter-everyone-butted-heads.html)
* [2025-08-29, 09:22:00](https://soylentnews.org/article.pl?sid=25/08/28/1843236&amp;from=rss) - [Breathwork Can Induce Altered States of Consciousness](https://soylentnews.org/article.pl?sid=25/08/28/1843236&amp;from=rss)
* [2025-08-29, 06:12:23](https://lobste.rs/s/0nstyk/join_lobsters_blog_carnival) - [Join the Lobsters Blog Carnival](https://lobste.rs/s/0nstyk/join_lobsters_blog_carnival)
* [2025-08-29, 04:43:00](https://soylentnews.org/article.pl?sid=25/08/28/1214205&amp;from=rss) - [Mercedes Demonstrates Five Minute BEV Charging While Setting Speed Records](https://soylentnews.org/article.pl?sid=25/08/28/1214205&amp;from=rss)
* [2025-08-28, 23:59:00](https://soylentnews.org/article.pl?sid=25/08/28/1211212&amp;from=rss) - [Microsoft&apos;s Windows 95 Release Was 30 Years Ago, the First Time Software Was a Pop Culture Smash](https://soylentnews.org/article.pl?sid=25/08/28/1211212&amp;from=rss)
* [2025-08-28, 20:46:22](https://lobste.rs/s/xx7dbi/you_no_longer_need_javascript_overview) - [You no longer need JavaScript: an overview of what makes modern CSS so awesome](https://lyra.horse/blog/2025/08/you-dont-need-js/)
* [2025-08-28, 19:10:00](https://soylentnews.org/article.pl?sid=25/08/27/1455216&amp;from=rss) - [SpaceX’s Latest Dragon Mission Will Breathe More Fire at the Space Station](https://soylentnews.org/article.pl?sid=25/08/27/1455216&amp;from=rss)
* [2025-08-28, 14:22:00](https://soylentnews.org/article.pl?sid=25/08/27/1449220&amp;from=rss) - [How the Cavefish Lost its Eyes— Again and Again](https://soylentnews.org/article.pl?sid=25/08/27/1449220&amp;from=rss)
* [2025-08-28, 09:34:00](https://soylentnews.org/article.pl?sid=25/08/27/2323243&amp;from=rss) - [An Empty Strip and Fewer Tips: is Las Vegas in Trouble?](https://soylentnews.org/article.pl?sid=25/08/27/2323243&amp;from=rss)
* [2025-08-28, 04:52:00](https://soylentnews.org/article.pl?sid=25/08/27/1232257&amp;from=rss) - [Science Marches on](https://soylentnews.org/article.pl?sid=25/08/27/1232257&amp;from=rss)
* [2025-08-28, 00:04:00](https://soylentnews.org/article.pl?sid=25/08/27/1225221&amp;from=rss) - [Xz Format Inadequate for General Use](https://soylentnews.org/article.pl?sid=25/08/27/1225221&amp;from=rss)
* [2025-08-27, 19:22:00](https://soylentnews.org/article.pl?sid=25/08/27/1222255&amp;from=rss) - [Google Will Require Developer Verification to Install Android Apps, Including Sideloading](https://soylentnews.org/article.pl?sid=25/08/27/1222255&amp;from=rss)
* [2025-08-27, 15:29:28](https://news.ycombinator.com/item?id=45041052) - [How to design a DBMS for Telco requirements](http://mikaelronstrom.blogspot.com/2025/08/how-to-design-dbms-for-telco.html)
* [2025-08-27, 14:34:00](https://soylentnews.org/article.pl?sid=25/08/26/1126243&amp;from=rss) - [Postal Services Around the World Suspend Deliveries to US: How Will It Affect You?](https://soylentnews.org/article.pl?sid=25/08/26/1126243&amp;from=rss)
* [2025-08-27, 13:51:05](https://news.ycombinator.com/item?id=45039662) - [The Grammar According to West](https://dwest.web.illinois.edu/grammar.html)
* [2025-08-27, 13:18:04](https://news.ycombinator.com/item?id=45039292) - [Show HN: I made an Animal Crossing style letter editor](https://acmail.idreesinc.com)
* [2025-08-27, 11:00:45](https://news.ycombinator.com/item?id=45037940) - [Pig Lung Transplanted into a Human in Major Scientific First: ScienceAlert](https://www.sciencealert.com/pig-lung-transplanted-into-a-human-in-major-scientific-first)
* [2025-08-27, 09:50:05](https://news.ycombinator.com/item?id=45037419) - [Lisp from Nothing, Second Edition](http://t3x.org/lfn/index.html)
* [2025-08-27, 09:48:00](https://soylentnews.org/article.pl?sid=25/08/26/1117241&amp;from=rss) - [Scientists Pioneer Sustainable Carbon Capture From Shrimp Waste](https://soylentnews.org/article.pl?sid=25/08/26/1117241&amp;from=rss)
* [2025-08-27, 05:03:00](https://soylentnews.org/politics/article.pl?sid=25/08/26/1113220&amp;from=rss) - [Trump Threatens Taxes, Bans, for Nations That Tax Big Tech](https://soylentnews.org/politics/article.pl?sid=25/08/26/1113220&amp;from=rss)
* [2025-08-27, 04:59:08](https://news.ycombinator.com/item?id=45035618) - [SQL Design Patterns](https://vadimtropashko.wordpress.com/%e2%80%9csql-design-patterns%e2%80%9d-book/about/)
* [2025-08-27, 00:45:06](https://news.ycombinator.com/item?id=45034148) - [Why did dlclose not unload the library? (2023)](https://kishoreganesh.com/post/why-dl-close-did-not-work/)
* [2025-08-27, 00:16:00](https://soylentnews.org/article.pl?sid=25/08/26/0059245&amp;from=rss) - [Twenty Years After Katrina: How Levee Failures Changed America](https://soylentnews.org/article.pl?sid=25/08/26/0059245&amp;from=rss)
* [2025-08-26, 21:38:35](https://news.ycombinator.com/item?id=45032630) - [My Failures Onboarding at Splunk](https://people-work.io/blog/my-failures-onboarding-at-splunk/)
* [2025-08-26, 19:33:00](https://soylentnews.org/article.pl?sid=25/08/26/0056205&amp;from=rss) - [Kelp Forests in Marine Protected Areas are More Resilient to Marine Heatwaves](https://soylentnews.org/article.pl?sid=25/08/26/0056205&amp;from=rss)
* [2025-08-26, 14:49:00](https://soylentnews.org/article.pl?sid=25/08/26/0050212&amp;from=rss) - [Canadian EV Sales Collapse by 35% as Gas Car Purchases Surge](https://soylentnews.org/article.pl?sid=25/08/26/0050212&amp;from=rss)
* [2025-08-26, 12:37:02](https://news.ycombinator.com/item?id=45025685) - [Taylor Otwell: What 14 Years of Laravel Taught Me About Maintainability](https://maintainable.fm/episodes/taylor-otwell-what-14-years-of-laravel-taught-me-about-maintainability)
* [2025-08-26, 10:02:00](https://soylentnews.org/article.pl?sid=25/08/25/197208&amp;from=rss) - [Does 3I/ATLAS Generate its Own Light?](https://soylentnews.org/article.pl?sid=25/08/25/197208&amp;from=rss)
* [2025-08-26, 05:16:00](https://soylentnews.org/article.pl?sid=25/08/25/1248228&amp;from=rss) - [Revolutionary AI Tech Breathes Life Into Virtual Companion Animals](https://soylentnews.org/article.pl?sid=25/08/25/1248228&amp;from=rss)
* [2025-08-26, 00:31:00](https://soylentnews.org/article.pl?sid=25/08/25/1234216&amp;from=rss) - [Oops! Earendel, Most Distant Star Ever Discovered, May Not Actually be a Star](https://soylentnews.org/article.pl?sid=25/08/25/1234216&amp;from=rss)
