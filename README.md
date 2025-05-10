# [News Summary](https://kherrick.github.io/news-summary/)

## Innovative Technology Developments

* [Sierpiński Triangle? In My Bitwise and?](https://lcamtuf.substack.com/p/sierpinski-triangle-in-my-bitwise) - A deep dive into mathematical visualization using bitwise operations, creating surprising geometric patterns like the Sierpiński Triangle. [Comments](https://news.ycombinator.com/item?id=43949238)

* [Show HN: Xenolab – Rasp Pi monitor for my pet carnivorous plants](https://github.com/blackrabbit17/xenolab) - A Raspberry Pi-powered monitoring system to track the health of pet carnivorous plants. [Comments](https://news.ycombinator.com/item?id=43948945)

* [Show HN: PLAttice, for assembling structures much larger than the 3D printer bed](https://zachfred.in/projects/plattice/plattice.html) - An innovative project enabling the assembly of oversized 3D-printed structures. [Comments](https://news.ycombinator.com/item?id=43948633)

* [Reverse engineering the 386 processor's prefetch queue circuitry](http://www.righto.com/2025/05/386-prefetch-circuitry-reverse-engineered.html) - An in-depth analysis uncovering the intricacies of the 386 processor’s hardware. [Comments](https://news.ycombinator.com/item?id=43946824)

* [Vision Now Available in Llama.cpp](https://github.com/ggml-org/llama.cpp/blob/master/docs/multimodal.md) - Multimodal capabilities are now supported in the powerful Llama.cpp framework, enhancing AI interaction. [Comments](https://news.ycombinator.com/item?id=43943047)

## AI and Ethical Implications

* [Everyone Is Cheating Their Way Through College](https://www.msn.com/en-us/news/technology/everyone-is-cheating-their-way-through-college/ar-AA1EjCRk) - The growing role of AI in academic dishonesty. [Comments](https://news.ycombinator.com/item?id=43949108)

* [Is Everyone Using AI to Cheat Their Way Through College?](https://news.slashdot.org/story/25/05/10/2112201/is-everyone-using-ai-to-cheat-their-way-through-college?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A broader examination of how AI tools are reshaping educational integrity. [Comments](https://news.slashdot.org/story/25/05/10/2112201)

* [AI Use Damages Professional Reputation, Study Suggests](https://slashdot.org/story/25/05/09/225245/ai-use-damages-professional-reputation-study-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A study indicating that reliance on AI can negatively impact professional standing. [Comments](https://slashdot.org/story/25/05/09/225245)

## Climate and Environmental Updates

* [Sea Levels Rose Faster Than Expected Last Year. Blame Global Warming - But What Happens Next?](https://news.slashdot.org/story/25/05/10/0830239/sea-levels-rose-faster-than-expected-last-year-blame-global-warming---but-what-happens-next?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - An analysis of accelerating sea-level rise and its concerning implications. [Comments](https://news.slashdot.org/story/25/05/10/0830239)

## Tech Industry Challenges and Noteworthy Projects

* [Google Will Pay $1.4 Billion to Texas to Settle Claims It Collected User Data Without Permission](https://tech.slashdot.org/story/25/05/10/0430217/google-will-pay-14-billion-to-texas-to-settle-claims-it-collected-user-data-without-permission?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A major lawsuit settlement regarding Google's data privacy practices. [Comments](https://tech.slashdot.org/story/25/05/10/0430217)

* [I Want to Love Linux. It Doesn’t Love Me Back](https://fireborn.mataroa.blog/blog/i-want-to-love-linux-it-doesnt-love-me-back-post-1-built-for-control-but-not-for-people/) - Reflections on challenges faced by users trying to adopt Linux systems. [Comments](https://lobste.rs/s/biswto/i_want_love_linux_it_doesn_t_love_me_back)

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

* [2025-05-10, 21:42:55](https://news.ycombinator.com/item?id=43949238) - [Sierpiński Triangle? In My Bitwise and?](https://lcamtuf.substack.com/p/sierpinski-triangle-in-my-bitwise)
* [2025-05-10, 21:21:41](https://news.ycombinator.com/item?id=43949108) - [Everyone Is Cheating Their Way Through College](https://www.msn.com/en-us/news/technology/everyone-is-cheating-their-way-through-college/ar-AA1EjCRk)
* [2025-05-10, 21:21:23](https://lobste.rs/s/wvz30t/naked_objects) - [Naked objects](https://en.wikipedia.org/wiki/Naked_objects)
* [2025-05-10, 21:14:00](https://news.slashdot.org/story/25/05/10/2112201/is-everyone-using-ai-to-cheat-their-way-through-college?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is Everyone Using AI to Cheat Their Way Through College?](https://news.slashdot.org/story/25/05/10/2112201/is-everyone-using-ai-to-cheat-their-way-through-college?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-10, 21:07:00](https://soylentnews.org/article.pl?sid=25/05/09/1123216&amp;from=rss) - [Kuwait Declares Cryptocurrency Mining Illegal Amid Power Crisis Crackdown](https://soylentnews.org/article.pl?sid=25/05/09/1123216&amp;from=rss)
* [2025-05-10, 20:58:27](https://news.ycombinator.com/item?id=43948945) - [Show HN: Xenolab – Rasp Pi monitor for my pet carnivourus plants](https://github.com/blackrabbit17/xenolab)
* [2025-05-10, 20:18:19](https://news.ycombinator.com/item?id=43948633) - [Show HN: PLAttice, for assembling structures much larger than the 3D printer bed](https://zachfred.in/projects/plattice/plattice.html)
* [2025-05-10, 19:39:57](https://news.ycombinator.com/item?id=43948291) - [Microsoft Teams will soon block screen capture during meetings](https://www.bleepingcomputer.com/news/microsoft/microsoft-teams-will-soon-block-screen-capture-during-meetings/)
* [2025-05-10, 19:34:00](https://news.slashdot.org/story/25/05/10/0830239/sea-levels-rose-faster-than-expected-last-year-blame-global-warming---but-what-happens-next?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sea Levels Rose Faster Than Expected Last Year. Blame Global Warming - But What Happens Next?](https://news.slashdot.org/story/25/05/10/0830239/sea-levels-rose-faster-than-expected-last-year-blame-global-warming---but-what-happens-next?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-10, 19:07:32](https://news.ycombinator.com/item?id=43948050) - [Email Forwarding for Your Domain](https://mailwip.com)
* [2025-05-10, 18:45:17](https://lobste.rs/s/mzxwgb/steps_2012_progress_final_nsf_report) - [STEPS 2012 Progress and Final NSF Report](https://tinlizzie.org/VPRIPapers/tr2012001_steps.pdf)
* [2025-05-10, 18:34:00](https://tech.slashdot.org/story/25/05/10/0247242/i-broke-up-with-google-search-it-was-surprisingly-easy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;I Broke Up with Google Search. It was Surprisingly Easy.&apos;](https://tech.slashdot.org/story/25/05/10/0247242/i-broke-up-with-google-search-it-was-surprisingly-easy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-10, 18:05:09](https://news.ycombinator.com/item?id=43947630) - [For $595, you get what nobody else can give you for twice the price (1982) [pdf]](https://s3data.computerhistory.org/brochures/commodore.commodore64.1982.102646264.pdf)
* [2025-05-10, 17:34:00](https://it.slashdot.org/story/25/05/10/0656226/how-a-simple-question-tripped-up-a-north-korean-spy-interviewing-for-an-it-job?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How A Simple Question Tripped Up a North Korean Spy Interviewing for an IT Job](https://it.slashdot.org/story/25/05/10/0656226/how-a-simple-question-tripped-up-a-north-korean-spy-interviewing-for-an-it-job?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-10, 17:00:39](https://news.ycombinator.com/item?id=43947137) - [Weave (YC W25) is hiring a founding engineer](https://www.ycombinator.com/companies/weave-3/jobs)
* [2025-05-10, 16:42:48](https://lobste.rs/s/kxmrsa/dcj11_single_board_computer_pdp_11) - [DCJ11 Single Board Computer (PDP-11)](https://www.5volts.ch/pages/dcj11sbc/)
* [2025-05-10, 16:39:44](https://lobste.rs/s/3edrcj/exploiting_copilot_ai_for_sharepoint) - [Exploiting Copilot AI for SharePoint](https://www.pentestpartners.com/security-blog/exploiting-copilot-ai-for-sharepoint/)
* [2025-05-10, 16:38:52](https://news.ycombinator.com/item?id=43946949) - [Unique Games Conjecture](https://en.wikipedia.org/wiki/Unique_games_conjecture)
* [2025-05-10, 16:34:00](https://tech.slashdot.org/story/25/05/10/0547237/more-us-airports-are-scanning-faces-but-a-new-bill-could-limit-the-practice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [More US Airports are Scanning Faces.  But a New Bill Could Limit the Practice](https://tech.slashdot.org/story/25/05/10/0547237/more-us-airports-are-scanning-faces-but-a-new-bill-could-limit-the-practice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-10, 16:31:58](https://lobste.rs/s/azcfyx/announcing_lix_2_93_bici_bici) - [Announcing Lix 2.93 “Bici Bici”](https://lix.systems/blog/2025-05-06-lix-2.93-release/)
* [2025-05-10, 16:29:04](https://lobste.rs/s/biswto/i_want_love_linux_it_doesn_t_love_me_back) - [I Want to Love Linux. It Doesn’t Love Me Back](https://fireborn.mataroa.blog/blog/i-want-to-love-linux-it-doesnt-love-me-back-post-1-built-for-control-but-not-for-people/)
* [2025-05-10, 16:23:06](https://news.ycombinator.com/item?id=43946824) - [Reverse engineering the 386 processor&apos;s prefetch queue circuitry](http://www.righto.com/2025/05/386-prefetch-circuitry-reverse-engineered.html)
* [2025-05-10, 16:22:00](https://soylentnews.org/article.pl?sid=25/05/09/0353243&amp;from=rss) - [Astronomers Used Old &apos;Maps&apos; to Find What Could be a 9th Planet in Our Solar System](https://soylentnews.org/article.pl?sid=25/05/09/0353243&amp;from=rss)
* [2025-05-10, 16:20:31](https://lobste.rs/s/dicjhi/reverse_engineering_386_processor_s) - [Reverse engineering the 386 processor&apos;s prefetch queue circuitry](http://www.righto.com/2025/05/386-prefetch-circuitry-reverse-engineered.html)
* [2025-05-10, 15:59:48](https://lobste.rs/s/vlyrt4/are_we_serious_about_using_tla_for) - [Are We Serious About Using TLA+ For Statistical Properties?](https://emptysqua.re/blog/are-we-serious-about-statistical-properties-tlaplus/)
* [2025-05-10, 15:35:24](https://news.ycombinator.com/item?id=43946498) - [&apos;It cannot provide nuance&apos;: UK experts warn AI therapy chatbots are not safe](https://www.theguardian.com/technology/2025/may/07/experts-warn-therapy-ai-chatbots-are-not-safe-to-use)
* [2025-05-10, 15:34:00](https://yro.slashdot.org/story/25/05/10/0715216/high-tariffs-become-real-for-adafruit---with-their-first-36k-bill-just-for-import-duties?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [High Tariffs Become &apos;Real&apos; For Adafruit - With Their First $36K Bill Just For Import Duties](https://yro.slashdot.org/story/25/05/10/0715216/high-tariffs-become-real-for-adafruit---with-their-first-36k-bill-just-for-import-duties?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-10, 15:31:56](https://news.ycombinator.com/item?id=43946472) - [Lead Bullets (2011)](https://a16z.com/lead-bullets/)
* [2025-05-10, 15:21:29](https://lobste.rs/s/vuolg1/secure_by_design_google_s_perspective_on) - [Secure by Design: Google’s Perspective on Memory Safety (2024)](https://storage.googleapis.com/gweb-research2023-media/pubtools/7665.pdf)
* [2025-05-10, 14:55:52](https://news.ycombinator.com/item?id=43946149) - [Comparison of C/POSIX standard library implementations for Linux](https://www.etalabs.net/compare_libcs.html)
* [2025-05-10, 14:47:12](https://news.ycombinator.com/item?id=43946066) - [Show HN: Code Claude Code](https://github.com/RVCA212/codesys)
* [2025-05-10, 14:37:59](https://news.ycombinator.com/item?id=43945993) - [A Critical Look at MCP](https://raz.sh/blog/2025-05-02_a_critical_look_at_mcp)
* [2025-05-10, 14:34:00](https://tech.slashdot.org/story/25/05/10/0430217/google-will-pay-14-billion-to-texas-to-settle-claims-it-collected-user-data-without-permission?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Will Pay $1.4 Billion to Texas to Settle Claims It Collected User Data Without Permission](https://tech.slashdot.org/story/25/05/10/0430217/google-will-pay-14-billion-to-texas-to-settle-claims-it-collected-user-data-without-permission?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-10, 14:30:04](https://lobste.rs/s/wabkap/changelog_slack_is_dead_long_live_zulip) - [Changelog Slack is dead. Long live Zulip](https://changelog.com/posts/our-slack-is-dead-long-live-zulip)
* [2025-05-10, 14:25:34](https://lobste.rs/s/gwucam/lume_3_was_released) - [Lume 3 was released](https://lume.land/blog/posts/lume-3/)
* [2025-05-10, 14:15:56](https://news.ycombinator.com/item?id=43945820) - [US vs. Google amicus curiae brief of Y Combinator in support of plaintiffs [pdf]](https://storage.courtlistener.com/recap/gov.uscourts.dcd.223205/gov.uscourts.dcd.223205.1300.1.pdf)
* [2025-05-10, 13:33:49](https://lobste.rs/s/3zhwyb/truenas_core_is_dead_long_live_zvault) - [TrueNAS CORE is Dead – Long Live zVault](https://vermaden.wordpress.com/2024/04/20/truenas-core-versus-truenas-scale/#truenas-core-dead-long-live-zvault)
* [2025-05-10, 13:02:55](https://news.ycombinator.com/item?id=43945293) - [React Three Ecosystem](https://www.react-three.org/)
* [2025-05-10, 13:00:00](https://it.slashdot.org/story/25/05/09/2223226/police-dismantles-botnet-selling-hacked-routers-as-residential-proxies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Police Dismantles Botnet Selling Hacked Routers As Residential Proxies](https://it.slashdot.org/story/25/05/09/2223226/police-dismantles-botnet-selling-hacked-routers-as-residential-proxies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-10, 11:36:00](https://soylentnews.org/article.pl?sid=25/05/09/0327207&amp;from=rss) - [Washington the Eighth State to Pass ‘Right to Repair’ Law](https://soylentnews.org/article.pl?sid=25/05/09/0327207&amp;from=rss)
* [2025-05-10, 11:19:39](https://news.ycombinator.com/item?id=43944790) - [Intel: Winning and Losing](https://www.abortretry.fail/p/intel-winning-and-losing)
* [2025-05-10, 11:19:39](https://news.ycombinator.com/item?id=43944789) - [Embracer Games Archive is preserving 75000 video games and needs contributions](https://embracergamesarchive.com/)
* [2025-05-10, 10:49:34](https://lobste.rs/s/34sjxc/tool_verify_estimates_ii_flexible_proof) - [A tool to verify estimates, II: a flexible proof assistant](https://terrytao.wordpress.com/2025/05/09/a-tool-to-verify-estimates-ii-a-flexible-proof-assistant/)
* [2025-05-10, 10:27:02](https://lobste.rs/s/x6jqrr/testing_sourcery_ai_github_copilot_for) - [Testing sourcery.ai and GitHub Copilot for cockpit PR reviews](https://piware.de/post/2025-08-09-sourcery/)
* [2025-05-10, 10:04:47](https://news.ycombinator.com/item?id=43944467) - [The Deathbed Fallacy (2018)](https://www.hjorthjort.xyz/2018/02/21/the-deathbed-fallacy.html)
* [2025-05-10, 10:00:00](https://news.slashdot.org/story/25/05/09/2216249/bill-gates-plans-to-give-away-his-wealth-shutter-foundation-over-next-20-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bill Gates Plans To Give Away His Wealth, Shutter Foundation Over Next 20 Years](https://news.slashdot.org/story/25/05/09/2216249/bill-gates-plans-to-give-away-his-wealth-shutter-foundation-over-next-20-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-10, 09:01:33](https://lobste.rs/s/dvm2cs/bold_linker_v0_2_0_release_bold_just_got) - [bold linker v0.2.0 release - bold just got faster](https://github.com/kubkon/bold/releases/tag/v0.2.0)
* [2025-05-10, 07:00:00](https://news.slashdot.org/story/25/05/09/2210247/lithium-deposit-valued-at-15-trillion-discovered-in-oregon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Lithium Deposit Valued At $1.5 Trillion Discovered In Oregon](https://news.slashdot.org/story/25/05/09/2210247/lithium-deposit-valued-at-15-trillion-discovered-in-oregon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-10, 06:58:15](https://news.ycombinator.com/item?id=43943737) - [Not a three-year-old chimney sweep (2022)](https://fakehistoryhunter.net/2022/07/26/not-a-3-year-old-chimney-sweep/)
* [2025-05-10, 06:52:00](https://soylentnews.org/article.pl?sid=25/05/09/0324231&amp;from=rss) - [Mathematical Beauty, Truth and Proof in the Age of AI](https://soylentnews.org/article.pl?sid=25/05/09/0324231&amp;from=rss)
* [2025-05-10, 06:36:52](https://lobste.rs/s/teddrj/slow_software_for_burning_world) - [Slow Software for a Burning World](https://bonfirenetworks.org/posts/slow_software_for_a_burning_world/)
* [2025-05-10, 06:28:40](https://lobste.rs/s/alodyz/praise_grobi_for_auto_configuring_x11) - [In praise of grobi for auto-configuring X11 monitors](https://michael.stapelberg.ch/posts/2025-05-10-grobi-x11-monitor-autoconfig/)
* [2025-05-10, 06:23:29](https://lobste.rs/s/tz2xog/tuscolo_static_certificate) - [Tuscolo Static Certificate Transparency Log](https://bsky.app/profile/filippo.abyssdomain.expert/post/3loquchbrpm2m)
* [2025-05-10, 04:25:43](https://news.ycombinator.com/item?id=43943236) - [Gmail to SQLite](https://github.com/marcboeker/gmail-to-sqlite)
* [2025-05-10, 03:39:46](https://news.ycombinator.com/item?id=43943047) - [Vision Now Available in Llama.cpp](https://github.com/ggml-org/llama.cpp/blob/master/docs/multimodal.md)
* [2025-05-10, 03:30:00](https://slashdot.org/story/25/05/09/225245/ai-use-damages-professional-reputation-study-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Use Damages Professional Reputation, Study Suggests](https://slashdot.org/story/25/05/09/225245/ai-use-damages-professional-reputation-study-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-10, 02:56:38](https://news.ycombinator.com/item?id=43942881) - [A simple 16x16 dot animation from simple math rules](https://tixy.land)
* [2025-05-10, 02:45:40](https://lobste.rs/s/12m2f0/algebraic_effects_another_mistake) - [Algebraic Effects: Another mistake carried through to perfection?](https://kjosib.github.io/Counterpoint/effects.html)
* [2025-05-10, 02:33:39](https://lobste.rs/s/9otwa3/formal_analysis_apple_s_imessage_pq3) - [A Formal Analysis of Apple’s iMessage PQ3 Protocol](https://www.usenix.org/system/files/conference/usenixsecurity25/sec25cycle1-prepub-595-linker.pdf)
* [2025-05-10, 02:04:00](https://soylentnews.org/article.pl?sid=25/05/08/137234&amp;from=rss) - [DOJ Confirms It Wants To Break Up Google&apos;s Advertising Tech Monopoly](https://soylentnews.org/article.pl?sid=25/05/08/137234&amp;from=rss)
* [2025-05-10, 01:25:00](https://science.slashdot.org/story/25/05/09/2149209/court-unanimously-denies-theranos-founder-elizabeth-holmes-request-for-rehearing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Court Unanimously Denies Theranos Founder Elizabeth Holmes&apos; Request For Rehearing](https://science.slashdot.org/story/25/05/09/2149209/court-unanimously-denies-theranos-founder-elizabeth-holmes-request-for-rehearing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-10, 00:45:00](https://hardware.slashdot.org/story/25/05/09/2125208/huawei-unveils-a-harmonyos-laptop-its-first-windows-free-computer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Huawei Unveils a HarmonyOS Laptop, Its First Windows-Free Computer](https://hardware.slashdot.org/story/25/05/09/2125208/huawei-unveils-a-harmonyos-laptop-its-first-windows-free-computer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-10, 00:02:00](https://news.slashdot.org/story/25/05/09/2119217/mexico-sues-google-over-changing-gulf-of-mexicos-name-for-us-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mexico Sues Google Over Changing Gulf of Mexico&apos;s Name For US Users](https://news.slashdot.org/story/25/05/09/2119217/mexico-sues-google-over-changing-gulf-of-mexicos-name-for-us-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-09, 23:20:00](https://news.slashdot.org/story/25/05/09/2059229/kids-are-short-circuiting-their-school-issued-chromebooks-for-tiktok-clout?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Kids Are Short-Circuiting Their School-Issued Chromebooks For TikTok Clout](https://news.slashdot.org/story/25/05/09/2059229/kids-are-short-circuiting-their-school-issued-chromebooks-for-tiktok-clout?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-09, 21:19:00](https://soylentnews.org/article.pl?sid=25/05/08/1259227&amp;from=rss) - [Software Bloat and Security: have we all Gone Mad?](https://soylentnews.org/article.pl?sid=25/05/08/1259227&amp;from=rss)
* [2025-05-09, 19:56:20](https://lobste.rs/s/bl1xi0/branchless_development_2015) - [branchless development (2015)](https://flak.tedunangst.com/post/branchless-development)
* [2025-05-09, 16:33:00](https://soylentnews.org/article.pl?sid=25/05/08/1156250&amp;from=rss) - [The Future of Data Storage Might be Ceramic Glass That Can Last Thousands of Years](https://soylentnews.org/article.pl?sid=25/05/08/1156250&amp;from=rss)
* [2025-05-09, 15:28:40](https://lobste.rs/s/wsnwqz/can_it_run_doom_archive_all_known_ports) - [Can It Run Doom? An Archive of All Known Ports](https://canitrundoom.org/)
* [2025-05-09, 14:29:14](https://lobste.rs/s/zozo8v/write_most_clever_code_you_possibly_can) - [Write the most clever code you possibly can](https://buttondown.com/hillelwayne/archive/write-the-most-clever-code-you-possibly-can/)
* [2025-05-09, 11:46:00](https://soylentnews.org/article.pl?sid=25/05/08/1151256&amp;from=rss) - [Federal Court Says Cell Tower Dumps Violate the Fourth Amendment](https://soylentnews.org/article.pl?sid=25/05/08/1151256&amp;from=rss)
* [2025-05-09, 11:07:36](https://lobste.rs/s/4r3rcv/wasm_2_0_completed) - [Wasm 2.0 Completed](https://webassembly.org/news/2025-03-20-wasm-2.0/)
* [2025-05-09, 07:01:00](https://soylentnews.org/article.pl?sid=25/05/07/2330241&amp;from=rss) - [We Have Reached the “Severed Fingers and Abductions” Stage of the Crypto Revolution ](https://soylentnews.org/article.pl?sid=25/05/07/2330241&amp;from=rss)
* [2025-05-09, 02:14:00](https://soylentnews.org/article.pl?sid=25/05/07/1352238&amp;from=rss) - [OpenSUSE Joins the End of 10 Campaign](https://soylentnews.org/article.pl?sid=25/05/07/1352238&amp;from=rss)
* [2025-05-08, 21:29:00](https://soylentnews.org/article.pl?sid=25/05/07/1350218&amp;from=rss) - [Building Custom Atomic Distributions - a Step-by-Step Guide](https://soylentnews.org/article.pl?sid=25/05/07/1350218&amp;from=rss)
* [2025-05-08, 19:57:38](https://lobste.rs/s/j3nhhc/rust_dependencies_scare_me) - [Rust Dependencies scare Me](https://vincents.dev/blog/rust-dependencies-scare-me/?)
* [2025-05-08, 16:44:00](https://soylentnews.org/article.pl?sid=25/05/06/235250&amp;from=rss) - [Nvidia Warns US AI Hardware Export Rules Could Backfire Empowering Huawei To Define Global Standards](https://soylentnews.org/article.pl?sid=25/05/06/235250&amp;from=rss)
* [2025-05-08, 13:41:23](https://news.ycombinator.com/item?id=43926029) - [Adventures in Imbalanced Learning and Class Weight](http://andersource.dev/2025/05/05/imbalanced-learning.html)
* [2025-05-08, 12:17:08](https://news.ycombinator.com/item?id=43925396) - [The Price of Remission](https://www.propublica.org/article/revlimid-price-cancer-celgene-drugs-fda-multiple-myeloma)
* [2025-05-08, 12:00:00](https://soylentnews.org/article.pl?sid=25/05/06/2254241&amp;from=rss) - [Hacker Breaches Telemessage System Used By US Officials, Raising Security Concerns](https://soylentnews.org/article.pl?sid=25/05/06/2254241&amp;from=rss)
* [2025-05-08, 11:32:01](https://news.ycombinator.com/item?id=43925132) - [Prolog&apos;s Eternal September (2017)](https://storytotell.org/prologs-eternal-september)
* [2025-05-08, 07:22:00](https://soylentnews.org/article.pl?sid=25/05/06/1923215&amp;from=rss) - [People Trust Legal Advice Generated by ChatGPT More Than a Lawyer](https://soylentnews.org/article.pl?sid=25/05/06/1923215&amp;from=rss)
* [2025-05-08, 02:36:00](https://soylentnews.org/article.pl?sid=25/05/06/1537247&amp;from=rss) - [The First Driverless Semis Have Started Running Regular Longhaul Routes](https://soylentnews.org/article.pl?sid=25/05/06/1537247&amp;from=rss)
* [2025-05-07, 21:55:00](https://soylentnews.org/article.pl?sid=25/05/06/0348250&amp;from=rss) - [Scientists Build First-Ever &apos;Black Hole Bomb&apos; Analog](https://soylentnews.org/article.pl?sid=25/05/06/0348250&amp;from=rss)
* [2025-05-07, 17:07:00](https://soylentnews.org/article.pl?sid=25/05/06/0338215&amp;from=rss) - [UK Could Require Solar Panels on Most New Homes by 2027](https://soylentnews.org/article.pl?sid=25/05/06/0338215&amp;from=rss)
* [2025-05-07, 12:22:00](https://soylentnews.org/article.pl?sid=25/05/06/0334233&amp;from=rss) - [Hackers Abuse IPv6 Networking Feature to Hijack Windows Software Updates](https://soylentnews.org/article.pl?sid=25/05/06/0334233&amp;from=rss)
* [2025-05-07, 09:31:53](https://news.ycombinator.com/item?id=43913705) - [Private Japanese lunar lander enters orbit around moon ahead of a June touchdown](https://phys.org/news/2025-05-private-japanese-lunar-lander-orbit.html)
* [2025-05-07, 07:37:00](https://soylentnews.org/article.pl?sid=25/05/06/0312252&amp;from=rss) - [Mathematicians Just Solved a 125-Year-Old Problem, Uniting 3 Theories in Physics](https://soylentnews.org/article.pl?sid=25/05/06/0312252&amp;from=rss)
* [2025-05-07, 05:50:15](https://news.ycombinator.com/item?id=43912618) - [Internet Roadtrip: Vote to steer](https://neal.fun/internet-roadtrip/)
* [2025-05-07, 02:51:00](https://soylentnews.org/article.pl?sid=25/05/06/032221&amp;from=rss) - [PA’s Largest Coal Plant to Become 4.5GW Gas-Fired AI Hub](https://soylentnews.org/article.pl?sid=25/05/06/032221&amp;from=rss)
* [2025-05-06, 22:03:00](https://soylentnews.org/meta/article.pl?sid=25/05/06/0251212&amp;from=rss) - [Who&apos;s in?](https://soylentnews.org/meta/article.pl?sid=25/05/06/0251212&amp;from=rss)
* [2025-05-06, 20:48:41](https://news.ycombinator.com/item?id=43909487) - [Building Local-First Flutter Apps with Riverpod, Drift, and PowerSync](https://dinkomarinac.dev/building-local-first-flutter-apps-with-riverpod-drift-and-powersync)
* [2025-05-06, 17:16:00](https://soylentnews.org/article.pl?sid=25/05/05/2311202&amp;from=rss) - [Adventure – March 1980](https://soylentnews.org/article.pl?sid=25/05/05/2311202&amp;from=rss)
* [2025-05-06, 12:37:00](https://soylentnews.org/article.pl?sid=25/05/05/0249236&amp;from=rss) - [Soviet-Era Spacecraft Expected to Plunge Uncontrolled to Earth Next Week](https://soylentnews.org/article.pl?sid=25/05/05/0249236&amp;from=rss)
* [2025-05-06, 07:50:00](https://soylentnews.org/article.pl?sid=25/05/04/1840238&amp;from=rss) - [Backstage Access: Spotify’s Dev Tools Side-Hustle is Growing Legs](https://soylentnews.org/article.pl?sid=25/05/04/1840238&amp;from=rss)
* [2025-05-06, 03:05:00](https://soylentnews.org/article.pl?sid=25/05/03/1953213&amp;from=rss) - [Microsoft Finally Launches its Controversial Recall Feature](https://soylentnews.org/article.pl?sid=25/05/03/1953213&amp;from=rss)
