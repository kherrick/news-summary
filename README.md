# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Technology

* [Robinhood Now Lets Your AI Agents Trade Stocks](https://tech.slashdot.org/story/26/05/28/067216/robinhood-now-lets-your-ai-agents-trade-stocks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Robinhood has launched a new feature allowing AI-powered agents to trade stocks on customers' behalf, marking a potential shift in user investments.

* [Five frontier LLMs disagree on 67% of 1k real-world fact-check claims](https://lenz.io/research/llm-disagreement) - A study reveals significant disagreements among cutting-edge large language models (LLMs) on real-world fact-checking, highlighting potential limitations in AI consensus.

* [A Eureka machine that thinks like nature and explores what AI cannot](https://iisc.ac.in/a-eureka-machine-that-thinks-like-nature-and-explores-what-ai-cannot/) - Researchers introduce a novel 'Eureka machine' designed to emulate natural processes and tackle problems unattainable by artificial intelligence systems.

## Security and Surveillance

* [Websites Have a New Way To Spy On Visitors: Analyzing Their SSD Activity](https://hardware.slashdot.org/story/26/05/27/2153246/websites-have-a-new-way-to-spy-on-visitors-analyzing-their-ssd-activity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A new technique allows websites to monitor users' SSD activity, raising privacy concerns in an increasingly surveillance-heavy digital landscape.

* [Researchers Issue Warning About using WiFi Routers as Surveillance Tech](https://soylentnews.org/article.pl?sid=26/05/26/1725241&amp;from=rss) - Scientists caution against the potential misuse of WiFi routers for covert surveillance, sparking privacy and security discussions.

* [DOJ Charges Google Employee With $1.2 Million Polymarket Bet On Search Term](https://yro.slashdot.org/story/26/05/28/060223/doj-charges-google-employee-with-12-million-polymarket-bet-on-search-term?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A Google employee faces charges after allegedly placing a $1.2 million insider trading bet using search term insights.

* [FBI Arrests CIA Official with $40M in Gold Bars in His Home](https://www.nytimes.com/2026/05/27/us/politics/fbi-arrest-cia-official-gold-bars.html) - A dramatic incident reveals a CIA official hoarding $40M in gold bars, raising concerns about corruption and misuse of power.

## Music, Media, and Creativity

* [Concerning Emacs (and Jazz)](https://omidmash.de/blog/concerning-emacs) - This captivating article draws parallels between the open-ended creativity of jazz music and the robust customization possibilities of Emacs.

* [Last.fm Goes Independent After Breaking Up With Paramount Skydance](https://entertainment.slashdot.org/story/26/05/28/0552205/lastfm-goes-independent-after-breaking-up-with-paramount-skydance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The music streaming platform Last.fm declares independence from Paramount Skydance, opening up new possibilities for its development.

* [Nitpicking the shell history scene in ‘Tron: Legacy’](https://www.chiark.greenend.org.uk/~sgtatham/quasiblog/tron-legacy/) - A hilarious and thoughtful critique of the hacking scene from the film *Tron: Legacy*, focusing on its portrayal of shell history.

## Open Source and Developer Tools

* [Creusot helps you prove your Rust code is correct](https://github.com/creusot-rs/creusot/tree/master) - Creusot emerges as a valuable tool for Rust developers, offering a way to verify code correctness programmatically.

* [jjc: Non-interactive hunk-level operations for Jujutsu](https://tangled.org/akashina.tngl.sh/jjc) - Explore Jujutsu's new non-interactive hunk-level operations with 'jjc,' facilitating efficient code management for developers.

* [Package managers that package package managers](https://nesbitt.io/2026/05/28/package-managers-that-package-package-managers.html) - Insights into the intriguing world of package managers designed to manage other package managers, showcasing innovation in developer solutions.

* [I analysed 20 years of my chats](https://drobinin.com/posts/am-i-a-bad-friend/) - A data-driven journey through two decades of personal chats reveals fascinating trends in communication behaviors over time.

## Science and Research Breakthroughs

* [Perfect Randomness Realized For the First Time](https://science.slashdot.org/story/26/05/28/0542214/perfect-randomness-realized-for-the-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Scientists claim to have achieved perfect randomness, a milestone that has profound implications for cryptography and computing.

* [Nature Might Have a Universal Rhythm](https://soylentnews.org/article.pl?sid=26/05/26/179259&amp;from=rss) - A compelling hypothesis posits that nature may operate on a universal rhythm, influencing systems from biology to cosmology.

* [Seeing Around Corners Using Smartphone-Grade Lidar](https://spectrum.ieee.org/smartphone-grade-lidar) - Engineers demonstrate the ability to 'see around corners' using everyday smartphone-grade lidar, hinting at potential futurist applications.

## Global Technology and Economics

* [Nvidia To Spend $150 Billion a Year In Taiwan](https://slashdot.org/story/26/05/27/2132231/nvidia-to-spend-150-billion-a-year-in-taiwan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Nvidia's massive annual investment in Taiwan underscores its pursuit of dominance in the global semiconductor industry.

* [Temu €200M fine for breaching the Digital Services Act](https://ec.europa.eu/commission/presscorner/home/en) - The European Commission slaps Temu with a hefty €200M fine for violations of the Digital Services Act in a crackdown on corporate accountability.

* [China Says 'World's First' Offshore Wind-Powered Underwater Data Center Has Entered Full Operation](https://soylentnews.org/politics/article.pl?sid=26/05/24/1253249&amp;from=rss) - A pioneering achievement combines renewable energy and cutting-edge data storage technology at China's new offshore underwater data center.

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

* [2026-05-28, 16:00:00](https://tech.slashdot.org/story/26/05/28/067216/robinhood-now-lets-your-ai-agents-trade-stocks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Robinhood Now Lets Your AI Agents Trade Stocks](https://tech.slashdot.org/story/26/05/28/067216/robinhood-now-lets-your-ai-agents-trade-stocks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-28, 15:59:46](https://lobste.rs/s/w4vsvq/jjc_non_interactive_hunk_level) - [jjc: Non-interactive hunk-level operations for Jujutsu](https://tangled.org/akashina.tngl.sh/jjc)
* [2026-05-28, 15:15:35](https://lobste.rs/s/dt7jn8/concerning_emacs_jazz) - [Concerning Emacs (and Jazz)](https://omidmash.de/blog/concerning-emacs)
* [2026-05-28, 15:00:00](https://yro.slashdot.org/story/26/05/28/060223/doj-charges-google-employee-with-12-million-polymarket-bet-on-search-term?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DOJ Charges Google Employee With $1.2 Million Polymarket Bet On Search Term](https://yro.slashdot.org/story/26/05/28/060223/doj-charges-google-employee-with-12-million-polymarket-bet-on-search-term?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-28, 14:51:40](https://lobste.rs/s/eh9gja/what_kache_actually_caches) - [What kache actually caches](https://kunobi.ninja/blog/what-kache-actually-caches)
* [2026-05-28, 13:04:36](https://lobste.rs/s/re4ztm/package_managers_package_package) - [Package managers that package package managers](https://nesbitt.io/2026/05/28/package-managers-that-package-package-managers.html)
* [2026-05-28, 12:42:33](https://lobste.rs/s/0zltfs/nitpicking_shell_history_scene_tron) - [Nitpicking the shell history scene in ‘Tron: Legacy’](https://www.chiark.greenend.org.uk/~sgtatham/quasiblog/tron-legacy/)
* [2026-05-28, 12:20:19](https://news.ycombinator.com/item?id=48307887) - [Five frontier LLMs disagree on 67% of 1k real-world fact-check claims](https://lenz.io/research/llm-disagreement)
* [2026-05-28, 11:34:00](https://soylentnews.org/article.pl?sid=26/05/26/1725241&amp;from=rss) - [Researchers Issue Warning About using WiFi Routers as Surveillance Tech](https://soylentnews.org/article.pl?sid=26/05/26/1725241&amp;from=rss)
* [2026-05-28, 11:00:00](https://entertainment.slashdot.org/story/26/05/28/0552205/lastfm-goes-independent-after-breaking-up-with-paramount-skydance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Last.fm Goes Independent After Breaking Up With Paramount Skydance](https://entertainment.slashdot.org/story/26/05/28/0552205/lastfm-goes-independent-after-breaking-up-with-paramount-skydance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-28, 10:57:34](https://news.ycombinator.com/item?id=48307237) - [Commission fines Temu €200M for breaching the Digital Services Act](https://ec.europa.eu/commission/presscorner/home/en)
* [2026-05-28, 10:56:55](https://news.ycombinator.com/item?id=48307231) - [AMD pulls a bait-and-switch on Linux users with Vivado licensing changes](https://itsfoss.com/news/amd-vivado-bait-and-switch-on-linux-users/)
* [2026-05-28, 10:46:28](https://lobste.rs/s/jowjkj/what_s_cooking_on_sourcehut_q2_2026) - [What&apos;s cooking on SourceHut? Q2 2026](https://sourcehut.org/blog/2026-05-28-whats-cooking-q2-2026/)
* [2026-05-28, 10:39:32](https://news.ycombinator.com/item?id=48307098) - [AI sticker shock hits corporate America](https://www.axios.com/2026/05/28/ai-spending-roi-enterprise-costs)
* [2026-05-28, 10:01:05](https://lobste.rs/s/dfz7tg/tenth_openpgp_email_summit) - [The tenth OpenPGP email summit](https://lwn.net/Articles/1072870/)
* [2026-05-28, 09:52:05](https://lobste.rs/s/nx1xwo/why_gentoo) - [Why Gentoo?](https://blogs.gentoo.org/mgorny/2026/05/28/why-gentoo/)
* [2026-05-28, 07:00:00](https://science.slashdot.org/story/26/05/28/0542214/perfect-randomness-realized-for-the-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Perfect Randomness Realized For the First Time](https://science.slashdot.org/story/26/05/28/0542214/perfect-randomness-realized-for-the-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-28, 06:53:00](https://soylentnews.org/article.pl?sid=26/05/26/1722203&amp;from=rss) - [5 Ways Pope Leo Says AI Could Warp Humanity](https://soylentnews.org/article.pl?sid=26/05/26/1722203&amp;from=rss)
* [2026-05-28, 06:40:31](https://news.ycombinator.com/item?id=48305446) - [A Eureka machine that thinks like nature and explores what AI cannot](https://iisc.ac.in/a-eureka-machine-that-thinks-like-nature-and-explores-what-ai-cannot/)
* [2026-05-28, 05:59:15](https://lobste.rs/s/qtno6s/clojure_on_fennel_part_three_parsing) - [Clojure on Fennel part three: parsing](https://andreyor.st/posts/2026-04-27-clojure-on-fennel-part-three-parsing/)
* [2026-05-28, 04:54:17](https://lobste.rs/s/k1q4tr/finding_miscompiles_for_fun_not_profit) - [Finding miscompiles for fun, not profit](https://newsletter.semianalysis.com/p/finding-miscompiles-for-fun-not-profit)
* [2026-05-28, 03:50:01](https://news.ycombinator.com/item?id=48304260) - [Hallucinate – Massively Multiplayer Online Rave](https://hallucinate.site)
* [2026-05-28, 03:30:00](https://hardware.slashdot.org/story/26/05/27/2153246/websites-have-a-new-way-to-spy-on-visitors-analyzing-their-ssd-activity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Websites Have a New Way To Spy On Visitors: Analyzing Their SSD Activity](https://hardware.slashdot.org/story/26/05/27/2153246/websites-have-a-new-way-to-spy-on-visitors-analyzing-their-ssd-activity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-28, 02:58:44](https://news.ycombinator.com/item?id=48303881) - [Biff is a command line datetime Swiss army knife](https://github.com/BurntSushi/biff)
* [2026-05-28, 02:30:43](https://lobste.rs/s/v1jbbe/using_gcc_s_nested_functions_with_wide) - [Using GCC&apos;s Nested Functions with Wide Pointers and no Trampolines](https://uecker.codeberg.page/2026-01-06.html)
* [2026-05-28, 02:21:11](https://news.ycombinator.com/item?id=48303599) - [RamAIn (YC W26) Is Hiring](https://www.ycombinator.com/companies/ramain/jobs/hqvmyKN-founding-gtm-engineer)
* [2026-05-28, 02:03:00](https://soylentnews.org/article.pl?sid=26/05/26/1718219&amp;from=rss) - [Power Prices to Fall for Most Customers, With Bigger Drops for Businesses](https://soylentnews.org/article.pl?sid=26/05/26/1718219&amp;from=rss)
* [2026-05-28, 00:49:58](https://news.ycombinator.com/item?id=48302822) - [Google employee charged with $1M Polymarket insider trading bet on search term](https://www.cnbc.com/2026/05/27/google-employee-polymarket-insider-trading.html)
* [2026-05-28, 00:18:18](https://lobste.rs/s/xtydht/creusot_helps_you_prove_your_rust_code_is) - [Creusot helps you prove your Rust code is correct](https://github.com/creusot-rs/creusot/tree/master)
* [2026-05-27, 23:54:16](https://lobste.rs/s/m57z5f/love_letter_neovim) - [A Love Letter to Neovim](https://caio.ca/blog/a-love-letter-to-neovim)
* [2026-05-27, 23:46:37](https://lobste.rs/s/mlfx3s/rust_slint_on_jailbroken_kindle) - [Rust (and Slint) on a jailbroken Kindle](https://sverre.me/blog/rust-on-kindle/)
* [2026-05-27, 23:37:48](https://lobste.rs/s/tw3jle/csci_1377_tools_for_thought_spring_2026) - [CSCI 1377: Tools for Thought (Spring 2026)](https://cel.cs.brown.edu/csci-1377-s26/)
* [2026-05-27, 23:31:13](https://news.ycombinator.com/item?id=48302220) - [I analysed 20 years of my chats](https://drobinin.com/posts/am-i-a-bad-friend/)
* [2026-05-27, 23:23:29](https://news.ycombinator.com/item?id=48302151) - [FBI Arrests CIA Official with $40M in Gold Bars in His Home](https://www.nytimes.com/2026/05/27/us/politics/fbi-arrest-cia-official-gold-bars.html)
* [2026-05-27, 23:00:00](https://news.slashdot.org/story/26/05/27/2142239/meta-to-start-testing-ai-subscription-services?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta To Start Testing AI Subscription Services](https://news.slashdot.org/story/26/05/27/2142239/meta-to-start-testing-ai-subscription-services?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-27, 22:00:00](https://slashdot.org/story/26/05/27/2132231/nvidia-to-spend-150-billion-a-year-in-taiwan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia To Spend $150 Billion a Year In Taiwan](https://slashdot.org/story/26/05/27/2132231/nvidia-to-spend-150-billion-a-year-in-taiwan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-27, 21:19:00](https://soylentnews.org/article.pl?sid=26/05/26/179259&amp;from=rss) - [Nature Might Have a Universal Rhythm](https://soylentnews.org/article.pl?sid=26/05/26/179259&amp;from=rss)
* [2026-05-27, 21:00:00](https://linux.slashdot.org/story/26/05/27/208203/rust-will-save-linux-from-ai-says-greg-kroah-hartman?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rust Will Save Linux From AI, Says Greg Kroah-Hartman](https://linux.slashdot.org/story/26/05/27/208203/rust-will-save-linux-from-ai-says-greg-kroah-hartman?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-27, 20:44:08](https://lobste.rs/s/es9wmf/making_wl_shm_fast) - [Making wl_shm fast](https://zamundaaa.github.io/wayland/2026/05/06/making-wl-shm-fast.html)
* [2026-05-27, 20:42:01](https://news.ycombinator.com/item?id=48300342) - [Warm up your MacBook (2019)](https://z3ugma.github.io/2019/11/18/warm-up-your-macbook/)
* [2026-05-27, 20:00:51](https://news.ycombinator.com/item?id=48299753) - [YouTube to automatically label AI-generated videos](https://blog.youtube/news-and-events/improving-ai-labels-viewers-creators/)
* [2026-05-27, 20:00:00](https://news.slashdot.org/story/26/05/27/1946203/the-ai-fight-brewing-inside-the-new-york-times?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The AI Fight Brewing Inside the New York Times](https://news.slashdot.org/story/26/05/27/1946203/the-ai-fight-brewing-inside-the-new-york-times?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-27, 19:52:49](https://news.ycombinator.com/item?id=48299638) - [I&apos;m Getting into Mesh Networks (Meshtastic, MeshCore, and Reticulum)](https://www.jonaharagon.com/posts/im-getting-into-mesh-networks-meshtastic-meshcore-and-reticulum/)
* [2026-05-27, 19:51:47](https://news.ycombinator.com/item?id=48299623) - [Rust (and Slint) on a Jailbroken Kindle](https://sverre.me/blog/rust-on-kindle/)
* [2026-05-27, 19:24:10](https://news.ycombinator.com/item?id=48299220) - [What Apple and Google are doing to push notifications](https://www.jacquescorbytuech.com/writing/what-apple-and-google-are-doing-your-push-notifications)
* [2026-05-27, 19:00:00](https://news.slashdot.org/story/26/05/27/1936207/youtube-to-automatically-detect-label-ai-generated-videos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [YouTube To Automatically Detect, Label AI-Generated Videos](https://news.slashdot.org/story/26/05/27/1936207/youtube-to-automatically-detect-label-ai-generated-videos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-27, 18:00:00](https://entertainment.slashdot.org/story/26/05/27/1647224/roku-updates-its-ui-for-the-first-time-in-a-decade?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Roku Updates Its UI For the First Time In a Decade](https://entertainment.slashdot.org/story/26/05/27/1647224/roku-updates-its-ui-for-the-first-time-in-a-decade?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-27, 17:36:29](https://news.ycombinator.com/item?id=48297645) - [SimCity 3k in 4k (2025)](https://www.thran.uk/writ/hdid/2025/12/simcity-3k-in-4k.html)
* [2026-05-27, 17:00:00](https://tech.slashdot.org/story/26/05/27/1641250/tech-ceos-are-apparently-suffering-from-ai-psychosis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tech CEOs Are Apparently Suffering From AI Psychosis](https://tech.slashdot.org/story/26/05/27/1641250/tech-ceos-are-apparently-suffering-from-ai-psychosis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-27, 16:53:22](https://lobste.rs/s/jegctv/i_m_tired_talking_ai) - [I’m tired of talking to AI](https://orchidfiles.com/im-tired-of-ai-generated-answers/)
* [2026-05-27, 16:53:16](https://lobste.rs/s/h9b8ik/new_register_allocator_for_zjit) - [A new register allocator for ZJIT](https://railsatscale.com/2026-05-27-a-new-register-allocator-for-zjit/)
* [2026-05-27, 16:48:05](https://lobste.rs/s/lfusbg/atom_exhaustion_is_not_footgun_it_s_one) - [Atom Exhaustion Is Not a Footgun. It&apos;s One Third of Our CVEs](https://erlef.org/blog/security/atom-exhaustion)
* [2026-05-27, 16:39:13](https://news.ycombinator.com/item?id=48296794) - [I think Anthropic and OpenAI have found product-market fit](https://simonwillison.net/2026/May/27/product-market-fit/)
* [2026-05-27, 16:35:00](https://soylentnews.org/article.pl?sid=26/05/26/0146250&amp;from=rss) - [In Addition to Space Stations, Vast Says It Will Now Build High-Power Satellites](https://soylentnews.org/article.pl?sid=26/05/26/0146250&amp;from=rss)
* [2026-05-27, 16:28:41](https://news.ycombinator.com/item?id=48296649) - [DuckDuckGo search saw 28% more visits after Google said people love AI mode](https://www.pcgamer.com/hardware/duckduckgos-ai-free-search-saw-nearly-28-percent-more-visits-in-the-week-following-googles-insistence-that-people-love-ai-mode/)
* [2026-05-27, 16:26:31](https://news.ycombinator.com/item?id=48296622) - [Stress disrupts hippocampal integration of overlapping events, memory inference](https://www.science.org/doi/10.1126/sciadv.aea5496?user_id=66c4bf745d78644b3aa57b08)
* [2026-05-27, 16:16:38](https://lobste.rs/s/rgybfv/macsurf_netsurf_for_mac_os_9) - [MacSurf: NetSurf for Mac OS 9](https://github.com/mplsllc/macsurf)
* [2026-05-27, 16:00:00](https://hardware.slashdot.org/story/26/05/27/0047247/dropbox-ceo-drew-houston-to-step-down-after-19-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Dropbox CEO Drew Houston To Step Down After 19 Years](https://hardware.slashdot.org/story/26/05/27/0047247/dropbox-ceo-drew-houston-to-step-down-after-19-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-27, 15:50:11](https://lobste.rs/s/mzxmnh/brief_note_about_slot_access_cost_common) - [A brief note about slot access cost in Common Lisp](https://turtleware.eu/posts/A-brief-note-about-slot-access-cost-in-Common-Lisp.html)
* [2026-05-27, 15:36:02](https://lobste.rs/s/yjwa9q/interview_with_zig_creator_andrew_kelley) - [Interview with Zig creator Andrew Kelley](https://www.youtube.com/watch?v=iqddnwKF8HQ)
* [2026-05-27, 15:00:00](https://yro.slashdot.org/story/26/05/27/0029246/company-behind-school-bus-ai-cameras-wants-to-share-footage-with-police?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Company Behind School Bus AI Cameras Wants To Share Footage With Police](https://yro.slashdot.org/story/26/05/27/0029246/company-behind-school-bus-ai-cameras-wants-to-share-footage-with-police?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-27, 12:15:14](https://news.ycombinator.com/item?id=48293080) - [Incident with Pull Requests, Issues, Git Operations and API Requests](https://www.githubstatus.com/incidents/xy1tt3hs572m)
* [2026-05-27, 11:52:00](https://soylentnews.org/article.pl?sid=26/05/26/0145204&amp;from=rss) - [With &apos;The Mandalorian and Grogu&apos; Out, Can &apos;Star Wars&apos; Ever Feel Like a Big-Screen Event Again?](https://soylentnews.org/article.pl?sid=26/05/26/0145204&amp;from=rss)
* [2026-05-27, 11:00:00](https://tech.slashdot.org/story/26/05/27/0038228/starlink-and-amazon-may-be-able-to-buy-into-eu-mobile-satellite-spectrum-plan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Starlink and Amazon May Be Able To Buy Into EU Mobile Satellite Spectrum Plan](https://tech.slashdot.org/story/26/05/27/0038228/starlink-and-amazon-may-be-able-to-buy-into-eu-mobile-satellite-spectrum-plan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-27, 10:01:18](https://lobste.rs/s/rzdtx8/may_i_recommend_thinking_emacs_as_your) - [May I recommend thinking of Emacs as your Fortress of Solitude](https://martinsos.com/posts/may-recommend-emacs-home-base)
* [2026-05-27, 09:02:59](https://news.ycombinator.com/item?id=48291575) - [Go: Support for Generic Methods](https://github.com/golang/go/issues/77273)
* [2026-05-27, 08:13:35](https://lobste.rs/s/ynrwwo/keyboard_latency_probe) - [Keyboard latency probe](https://xkqr.org/bellwether/keyboardtest.html)
* [2026-05-27, 07:05:00](https://soylentnews.org/article.pl?sid=26/05/26/0141244&amp;from=rss) - [Google Antigravity 2.0 Forced Update Strips Code Editor, Leaves Developers With a Chat Window](https://soylentnews.org/article.pl?sid=26/05/26/0141244&amp;from=rss)
* [2026-05-27, 05:40:47](https://lobste.rs/s/2jdvxa/what_are_some_your_favourite_developer) - [What are some of your favourite developer tools?](https://lobste.rs/s/2jdvxa/what_are_some_your_favourite_developer)
* [2026-05-27, 02:24:00](https://soylentnews.org/article.pl?sid=26/05/25/1525251&amp;from=rss) - [AI Sackings Reach New Zealand, Which Will Use It to Eject 14 Percent of Government Staff](https://soylentnews.org/article.pl?sid=26/05/25/1525251&amp;from=rss)
* [2026-05-26, 21:38:00](https://soylentnews.org/article.pl?sid=26/05/25/1522231&amp;from=rss) - [After Decades on Linux, FreeBSD Finally Gave Me a Reason to Switch Operating Systems](https://soylentnews.org/article.pl?sid=26/05/25/1522231&amp;from=rss)
* [2026-05-26, 16:54:00](https://soylentnews.org/article.pl?sid=26/05/25/157204&amp;from=rss) - [FBI Seeks US-Wide Access to License Plate Cameras, Wants \&quot;Data in Near Real Time\&quot;](https://soylentnews.org/article.pl?sid=26/05/25/157204&amp;from=rss)
* [2026-05-26, 15:45:12](https://news.ycombinator.com/item?id=48281336) - [More Whimsical OEIS Sequences](https://www.jeremykun.com/shortform/2026-05-22-1528/)
* [2026-05-26, 12:07:00](https://soylentnews.org/article.pl?sid=26/05/25/150246&amp;from=rss) - [Europe Tests Laser Links As Satellite Comms Outgrow Radio](https://soylentnews.org/article.pl?sid=26/05/25/150246&amp;from=rss)
* [2026-05-26, 07:43:22](https://news.ycombinator.com/item?id=48276429) - [Investigating how prompt politeness affects LLM accuracy (2025)](https://arxiv.org/abs/2510.04950)
* [2026-05-26, 07:23:00](https://soylentnews.org/article.pl?sid=26/05/25/1437228&amp;from=rss) - [EU Taps Sweden&apos;s EQT to Manage Major €5Bn Scale-Up Europe Fund](https://soylentnews.org/article.pl?sid=26/05/25/1437228&amp;from=rss)
* [2026-05-26, 05:08:56](https://news.ycombinator.com/item?id=48275255) - [A New Typst Template for Pandoc (2025)](https://imaginarytext.ca/posts/2025/typst-templates-for-pandoc/)
* [2026-05-26, 02:39:00](https://soylentnews.org/article.pl?sid=26/05/25/1430256&amp;from=rss) - [The Coolest Record Player Ever Made](https://soylentnews.org/article.pl?sid=26/05/25/1430256&amp;from=rss)
* [2026-05-25, 21:57:00](https://soylentnews.org/article.pl?sid=26/05/24/1319237&amp;from=rss) - [Torvalds Says AI Bug Hunters Have Made Linux Security Mailing List ‘Almost Entirely Unmanageable&apos;](https://soylentnews.org/article.pl?sid=26/05/24/1319237&amp;from=rss)
* [2026-05-25, 18:49:32](https://news.ycombinator.com/item?id=48270265) - [Ruby vs. Java vs. TypeScript: my experience on building a Cowork DOCX plugin](https://tanin.nanakorn.com/ruby-java-typescrip-claude-docx-plugin/)
* [2026-05-25, 17:08:00](https://soylentnews.org/article.pl?sid=26/05/24/1316229&amp;from=rss) - [The Big AI Companies Are Going to See Their Margins Disappear](https://soylentnews.org/article.pl?sid=26/05/24/1316229&amp;from=rss)
* [2026-05-25, 14:51:20](https://news.ycombinator.com/item?id=48267558) - [The Ask](https://randsinrepose.com/archives/the-ask/)
* [2026-05-25, 12:18:00](https://soylentnews.org/article.pl?sid=26/05/24/136257&amp;from=rss) - [Uncle Sam&apos;s Next Big Supercomputer Might Use Something More Exotic Than GPUs](https://soylentnews.org/article.pl?sid=26/05/24/136257&amp;from=rss)
* [2026-05-25, 11:32:56](https://news.ycombinator.com/item?id=48265668) - [Seeing Around Corners Using Smartphone-Grade Lidar](https://spectrum.ieee.org/smartphone-grade-lidar)
* [2026-05-25, 08:37:36](https://news.ycombinator.com/item?id=48264705) - [Rapira (Рапира) – Soviet programming language interpreter](https://github.com/begoon/rapira)
* [2026-05-25, 07:28:00](https://soylentnews.org/politics/article.pl?sid=26/05/24/1253249&amp;from=rss) - [China Says &apos;World&apos;s First&apos; Offshore Wind-Powered Underwater Data Center Has Entered Full Operation](https://soylentnews.org/politics/article.pl?sid=26/05/24/1253249&amp;from=rss)
* [2026-05-25, 02:46:00](https://soylentnews.org/article.pl?sid=26/05/24/1247208&amp;from=rss) - [Bots be Sorting](https://soylentnews.org/article.pl?sid=26/05/24/1247208&amp;from=rss)
* [2026-05-24, 22:00:00](https://soylentnews.org/article.pl?sid=26/05/23/2053216&amp;from=rss) - [Prankster Posts Real Monet Painting, Tells People It&apos;s AI](https://soylentnews.org/article.pl?sid=26/05/23/2053216&amp;from=rss)
* [2026-05-24, 17:12:00](https://soylentnews.org/article.pl?sid=26/05/23/1259209&amp;from=rss) - [1 in 5 Brits Think AI Layoffs Could Trigger Civil Unrest](https://soylentnews.org/article.pl?sid=26/05/23/1259209&amp;from=rss)
* [2026-05-24, 13:43:15](https://news.ycombinator.com/item?id=48257224) - [Libwce: The entropy layer of a wavelet codec, on its own](https://yogthos.net/posts/2026-05-24-libwce.html)
* [2026-05-24, 12:24:00](https://soylentnews.org/article.pl?sid=26/05/23/1239233&amp;from=rss) - [The US Space Enterprise is Desperately Waiting for Starship—Will It Finally Deliver?](https://soylentnews.org/article.pl?sid=26/05/23/1239233&amp;from=rss)
* [2026-05-24, 07:42:00](https://soylentnews.org/article.pl?sid=26/05/23/1223236&amp;from=rss) - [Baidu Says the Quiet Part Out Loud – You Can&apos;t Build AI Infrastructure, So Clouds Can Cash in](https://soylentnews.org/article.pl?sid=26/05/23/1223236&amp;from=rss)
* [2026-05-24, 02:53:00](https://soylentnews.org/article.pl?sid=26/05/23/1216212&amp;from=rss) - [Silicon Valley Wants to Put a Chip in Your Brain](https://soylentnews.org/article.pl?sid=26/05/23/1216212&amp;from=rss)
