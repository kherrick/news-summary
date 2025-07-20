# [News Summary](https://kherrick.github.io/news-summary/)

## Tech Advancements in Artificial Intelligence

* [I'm betting against AI agents, despite building them](https://utkarshkanwat.com/writing/betting-against-agents/) - A perspective on the limitations of AI agents, even from someone actively developing them. [Comments](https://news.ycombinator.com/item?id=44623207)

* [The Big LLM Architecture Comparison](https://magazine.sebastianraschka.com/p/the-big-llm-architecture-comparison) - An in-depth comparison of large language model architectures. [Comments](https://news.ycombinator.com/item?id=44622608)

* [Robot metabolism: Toward machines that can grow by consuming other machines](https://www.science.org/doi/10.1126/sciadv.adu6897) - A revolutionary concept that aims to enable robots to 'grow' by recycling material from other devices. [Comments](https://news.ycombinator.com/item?id=44622999)

## Scientific and Psychological Phenomena

* [Scientists reveal a widespread but unidentified psychological phenomenon](https://www.psypost.org/scientists-reveal-a-widespread-but-previously-unidentified-psychological-phenomenon/) - New research uncovers previously undetected psychological behaviors. [Comments](https://news.ycombinator.com/item?id=44624454)

* [Healthy Babies Born in Britain After Scientists Used DNA From Three People to Avoid Genetic Disease](https://science.slashdot.org/story/25/07/20/0328203/healthy-babies-born-in-britain-after-scientists-used-dna-from-three-people-to-avoid-genetic-disease?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A groundbreaking medical achievement addressing genetic disorders.

## Tech Company Developments and Innovations

* [Jack Dorsey Pumps $10M Into a Nonprofit Focused on Open Source Social Media](https://news.slashdot.org/story/25/07/20/058235/jack-dorsey-pumps-10m-into-a-nonprofit-focused-on-open-source-social-media?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A major funding milestone for open-source social platforms.

* [Infographic: Every Microsoft Acquisition Since 1986](https://soylentnews.org/article.pl?sid=25/07/19/0023239&from=rss) - A historical overview of Microsoft's acquisitions and expansions. [Comments](https://soylentnews.org/article.pl?sid=25/07/19/0023239&from=rss)

## Future Computing and Operating Systems

* [Parallelizing the physics solver](https://youtu.be/Kvsvd67XUKw) - An exploration of advances in physics engines for computational simulations. [Comments](https://lobste.rs/s/sjzggo/parallelizing_physics_solver)

* [KDE Plasma Finally Gets Rounded Bottom Window Corners](https://tech.slashdot.org/story/25/07/20/0119236/kde-plasma-finally-gets-rounded-bottom-window-corners?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A long-awaited design update for KDE users.

## Retrospectives and Archives

* [A Tour of Microsoft's Mac Lab (2006)](https://davidweiss.blogspot.com/2006/04/tour-of-microsofts-mac-lab.html) - A nostalgic look into Microsoft's experiments with Mac development. [Comments](https://news.ycombinator.com/item?id=44623581)

* [Merger of Two Massive Black Holes is One for the Record Books](https://soylentnews.org/article.pl?sid=25/07/15/1735235&from=rss) - Insights into a record-breaking astronomical event.

## Cybersecurity and Vulnerabilities

* [Using leaked data to examine vulnerabilities in SMS routing and SS7 signalling](https://medium.com/@lighthousereports/using-leaked-data-to-examine-vulnerabilities-in-sms-routing-and-ss7-signalling-8e30298491d9) - A study on the security gaps in older telecommunications protocols. [Comments](https://lobste.rs/s/47ckxy/using_leaked_data_examine)

* [Is Tor Trustworthy and Safe?](https://soylentnews.org/article.pl?sid=25/07/18/2350226&from=rss) - An examination of Tor's reliability and potential pitfalls. [Comments](https://soylentnews.org/article.pl?sid=25/07/18/2350226&from=rss)

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

* [2025-07-20, 12:22:09](https://lobste.rs/s/6ifojq/coding_with_llms_summer_2025_update) - [Coding with LLMs in the summer of 2025 (an update)](https://antirez.com/news/154)
* [2025-07-20, 12:14:52](https://news.ycombinator.com/item?id=44624454) - [Scientists reveal a widespread but unidentified psychological phenomenon](https://www.psypost.org/scientists-reveal-a-widespread-but-previously-unidentified-psychological-phenomenon/)
* [2025-07-20, 11:34:00](https://tech.slashdot.org/story/25/07/20/0119236/kde-plasma-finally-gets-rounded-bottom-window-corners?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [KDE Plasma Finally Gets Rounded Bottom Window Corners ](https://tech.slashdot.org/story/25/07/20/0119236/kde-plasma-finally-gets-rounded-bottom-window-corners?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 11:04:02](https://news.ycombinator.com/item?id=44623953) - [Coding with LLMs in the summer of 2025 (an update)](https://antirez.com/news/154)
* [2025-07-20, 11:04:00](https://soylentnews.org/article.pl?sid=25/07/19/0033258&amp;from=rss) - [The Latest Windows PCs Remember Everything](https://soylentnews.org/article.pl?sid=25/07/19/0033258&amp;from=rss)
* [2025-07-20, 10:11:22](https://news.ycombinator.com/item?id=44623581) - [A Tour of Microsoft&apos;s Mac Lab (2006)](https://davidweiss.blogspot.com/2006/04/tour-of-microsofts-mac-lab.html)
* [2025-07-20, 09:40:45](https://lobste.rs/s/szcq9k/async_i_o_on_linux_durability) - [Async I/O on Linux and durability](https://blog.canoozie.net/async-i-o-on-linux-and-durability/)
* [2025-07-20, 08:59:19](https://news.ycombinator.com/item?id=44623207) - [I&apos;m betting against AI agents, despite building them](https://utkarshkanwat.com/writing/betting-against-agents/)
* [2025-07-20, 08:17:13](https://news.ycombinator.com/item?id=44622999) - [Robot metabolism: Toward machines that can grow by consuming other machines](https://www.science.org/doi/10.1126/sciadv.adu6897)
* [2025-07-20, 08:13:15](https://news.ycombinator.com/item?id=44622973) - [Terence Tao: A human metaphor for evaluating AI capability](https://mathstodon.xyz/@tao/114881418225852441)
* [2025-07-20, 08:10:51](https://news.ycombinator.com/item?id=44622953) - [The bewildering phenomenon of declining quality](https://english.elpais.com/culture/2025-07-20/the-bewildering-phenomenon-of-declining-quality.html)
* [2025-07-20, 08:02:00](https://news.slashdot.org/story/25/07/20/058235/jack-dorsey-pumps-10m-into-a-nonprofit-focused-on-open-source-social-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Jack Dorsey Pumps $10M Into a Nonprofit Focused on Open Source Social Media](https://news.slashdot.org/story/25/07/20/058235/jack-dorsey-pumps-10m-into-a-nonprofit-focused-on-open-source-social-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 06:56:01](https://news.ycombinator.com/item?id=44622608) - [The Big LLM Architecture Comparison](https://magazine.sebastianraschka.com/p/the-big-llm-architecture-comparison)
* [2025-07-20, 06:42:58](https://news.ycombinator.com/item?id=44622543) - [Roman Roads Research Association (UK)](https://www.romanroads.org/index.html)
* [2025-07-20, 06:20:02](https://news.ycombinator.com/item?id=44622454) - [Async I/O on Linux in databases](https://blog.canoozie.net/async-i-o-on-linux-and-durability/)
* [2025-07-20, 06:18:00](https://soylentnews.org/article.pl?sid=25/07/19/0023239&amp;from=rss) - [Infographic: Every Microsoft Acquisition Since 1986](https://soylentnews.org/article.pl?sid=25/07/19/0023239&amp;from=rss)
* [2025-07-20, 06:01:45](https://news.ycombinator.com/item?id=44622374) - [Show HN: MCP server for Blender that builds 3D scenes via natural language](https://blender-mcp-psi.vercel.app/)
* [2025-07-20, 04:02:00](https://science.slashdot.org/story/25/07/20/0328203/healthy-babies-born-in-britain-after-scientists-used-dna-from-three-people-to-avoid-genetic-disease?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Healthy Babies Born in Britain After Scientists Used DNA From Three People to Avoid Genetic Disease](https://science.slashdot.org/story/25/07/20/0328203/healthy-babies-born-in-britain-after-scientists-used-dna-from-three-people-to-avoid-genetic-disease?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 02:36:53](https://news.ycombinator.com/item?id=44621487) - [Borg – Deduplicating archiver with compression and encryption](https://www.borgbackup.org/)
* [2025-07-20, 02:23:13](https://lobste.rs/s/3cigc9/structuring_large_clojure_codebases) - [Structuring large Clojure codebases with Biff](https://biffweb.com/p/structuring-large-codebases/)
* [2025-07-20, 02:23:00](https://games.slashdot.org/story/25/07/20/0219213/that-coldplay-kiss-cam-couple-just-became-a-vibe-coded-videogame---and-then-an-nft?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [That Coldplay &apos;Kiss Cam&apos; Couple Just Became a Vibe-Coded Videogame - and Then an NFT](https://games.slashdot.org/story/25/07/20/0219213/that-coldplay-kiss-cam-couple-just-became-a-vibe-coded-videogame---and-then-an-nft?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 01:33:00](https://soylentnews.org/article.pl?sid=25/07/18/2350226&amp;from=rss) - [Is Tor Trustworthy and Safe?](https://soylentnews.org/article.pl?sid=25/07/18/2350226&amp;from=rss)
* [2025-07-20, 00:44:00](https://hardware.slashdot.org/story/25/07/20/0042202/first-electronic-photonic-quantum-chip-created-in-commercial-foundry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [First Electronic-Photonic Quantum Chip Created In Commercial Foundry](https://hardware.slashdot.org/story/25/07/20/0042202/first-electronic-photonic-quantum-chip-created-in-commercial-foundry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 00:13:17](https://lobste.rs/s/sjzggo/parallelizing_physics_solver) - [Parallelizing the physics solver](https://youtu.be/Kvsvd67XUKw)
* [2025-07-19, 23:54:40](https://news.ycombinator.com/item?id=44620606) - [Beyond Meat fights for survival](https://foodinstitute.com/focus/beyond-meat-fights-for-survival/)
* [2025-07-19, 23:35:08](https://lobste.rs/s/jtd0b1/giving_up_on_element_matrix_org) - [Giving Up on Element &amp; Matrix.org](https://xn--gckvb8fzb.com/giving-up-on-element-and-matrixorg/)
* [2025-07-19, 22:50:40](https://lobste.rs/s/z2ehwo/borrowchecker_is_what_i_like_least_about) - [The borrowchecker is what I like the least about Rust](https://viralinstruction.com/posts/borrowchecker/)
* [2025-07-19, 22:34:00](https://science.slashdot.org/story/25/07/19/0252236/23andmes-data-sold-to-nonprofit-run-by-its-co-founder---and-i-still-dont-trust-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [23andMe&apos;s Data Sold to Nonprofit Run by Its Co-Founder - &apos;And I Still Don&apos;t Trust It&apos;](https://science.slashdot.org/story/25/07/19/0252236/23andmes-data-sold-to-nonprofit-run-by-its-co-founder---and-i-still-dont-trust-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-19, 22:25:09](https://news.ycombinator.com/item?id=44620002) - [Ring introducing new feature to allow police to live-stream access to cameras](https://www.eff.org/deeplinks/2025/07/amazon-ring-cashes-techno-authoritarianism-and-mass-surveillance)
* [2025-07-19, 22:11:12](https://lobste.rs/s/pv4vxu/why_you_should_choose_htmx_for_your_next) - [Why you should choose HTMX for your next web-based side project - and ditch the crufty MPA and complex SPA](https://hamy.xyz/blog/2024-02_htmx-for-side-projects)
* [2025-07-19, 21:34:00](https://news.slashdot.org/story/25/07/19/1958211/in-shallow-water-ships-trigger-seafloor-methane-emissions-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [In Shallow Water Ships Trigger Seafloor Methane Emissions, Study Finds](https://news.slashdot.org/story/25/07/19/1958211/in-shallow-water-ships-trigger-seafloor-methane-emissions-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-19, 21:19:56](https://lobste.rs/s/8wrzuo/metap_meta_programming_layer_for_python) - [metap: A Meta-Programming Layer for Python](https://sbaziotis.com/compilers/metap.html)
* [2025-07-19, 20:34:00](https://news.slashdot.org/story/25/07/19/1934209/android-phones-can-detect-earthquakes-before-the-ground-starts-shaking?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Android Phones Can Detect Earthquakes Before the Ground Starts Shaking](https://news.slashdot.org/story/25/07/19/1934209/android-phones-can-detect-earthquakes-before-the-ground-starts-shaking?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-19, 20:33:00](https://soylentnews.org/article.pl?sid=25/07/18/0948223&amp;from=rss) - [The Fascinating Science of Pain – and Why Everyone Feels it Differently](https://soylentnews.org/article.pl?sid=25/07/18/0948223&amp;from=rss)
* [2025-07-19, 20:13:54](https://lobste.rs/s/toitpk/trigon_exploiting_coprocessors_for_fun) - [Trigon: exploiting coprocessors for fun and for profit (part 2)](https://alfiecg.uk/2025/07/16/Trigon.html)
* [2025-07-19, 19:43:23](https://news.ycombinator.com/item?id=44618687) - [Make Your Own Backup System – Part 1: Strategy Before Scripts](https://it-notes.dragas.net/2025/07/18/make-your-own-backup-system-part-1-strategy-before-scripts/)
* [2025-07-19, 19:41:15](https://lobste.rs/s/3isa6t/make_your_own_backup_system_part_1) - [Make Your Own Backup System – Part 1: Strategy Before Scripts](https://it-notes.dragas.net/2025/07/18/make-your-own-backup-system-part-1-strategy-before-scripts/)
* [2025-07-19, 19:34:00](https://tech.slashdot.org/story/25/07/19/187249/what-eyewitnesses-remembered-about-the-worlds-first-atomic-bomb-explosion-in-1945?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What Eyewitnesses Remembered About the World&apos;s First Atomic Bomb Explosion in 1945](https://tech.slashdot.org/story/25/07/19/187249/what-eyewitnesses-remembered-about-the-worlds-first-atomic-bomb-explosion-in-1945?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-19, 18:34:00](https://tech.slashdot.org/story/25/07/19/168254/boeing-fuel-switches-checked-as-critic-cites-a-similar-fuel-switch-cutoff-in-2019?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Boeing Fuel Switches Checked, as Critic Cites a Similar Fuel Switch Cutoff in 2019](https://tech.slashdot.org/story/25/07/19/168254/boeing-fuel-switches-checked-as-critic-cites-a-similar-fuel-switch-cutoff-in-2019?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-19, 17:45:20](https://lobste.rs/s/xh8lz6/faq_what_s_kevlinhenney) - [FAQ: What’s a @KevlinHenney?](https://kevlinhenney.medium.com/faq-whats-a-kevlinhenney-cc98d172f811)
* [2025-07-19, 17:34:00](https://it.slashdot.org/story/25/07/19/0659227/chinese-companies-now-authorized-to-conduct-foreign-cyberattacks-sell-access-to-government?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chinese Companies Now Authorized to Conduct Foreign Cyberattacks, Sell Access to Government](https://it.slashdot.org/story/25/07/19/0659227/chinese-companies-now-authorized-to-conduct-foreign-cyberattacks-sell-access-to-government?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-19, 17:31:13](https://lobste.rs/s/5f541e/legendary_software_rendering_era_with) - [Legendary Software Rendering Era with Sean Barrett](https://www.youtube.com/watch?v=T1tXepGXDDM)
* [2025-07-19, 17:24:39](https://lobste.rs/s/naiwvd/my_ultimate_self_hosting_setup) - [My Ultimate Self-hosting Setup](https://codecaptured.com/blog/my-ultimate-self-hosting-setup/)
* [2025-07-19, 16:58:42](https://news.ycombinator.com/item?id=44617184) - [Rethinking CLI interfaces for AI](https://www.notcheckmark.com/2025/07/rethinking-cli-interfaces-for-ai/)
* [2025-07-19, 16:57:09](https://lobste.rs/s/czx98y/rethinking_cli_interfaces_for_ai) - [Rethinking CLI interfaces for AI](https://www.notcheckmark.com/2025/07/rethinking-cli-interfaces-for-ai/)
* [2025-07-19, 16:49:02](https://news.ycombinator.com/item?id=44617078) - [Local LLMs versus offline Wikipedia](https://evanhahn.com/local-llms-versus-offline-wikipedia/)
* [2025-07-19, 16:34:00](https://slashdot.org/story/25/07/19/0528234/after-30-years-you-can-buy-a-new-commodore-64-ultimate-for-299?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [After 30 Years, You Can Buy a New &apos;Commodore 64 Ultimate&apos; for $299](https://slashdot.org/story/25/07/19/0528234/after-30-years-you-can-buy-a-new-commodore-64-ultimate-for-299?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-19, 15:50:00](https://soylentnews.org/article.pl?sid=25/07/18/0939219&amp;from=rss) - [FuguIta: OpenBSD Live CD - Desktop Environment Demo Version with XFCE v.4.20.0](https://soylentnews.org/article.pl?sid=25/07/18/0939219&amp;from=rss)
* [2025-07-19, 15:45:01](https://news.ycombinator.com/item?id=44616479) - [Nobody knows how to build with AI yet](https://worksonmymachine.substack.com/p/nobody-knows-how-to-build-with-ai)
* [2025-07-19, 15:34:00](https://tech.slashdot.org/story/25/07/19/0612203/openai-ceo-says-meta-tried-poaching-chatgpt-engineers-with-100m-bonuses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI CEO Says Meta Tried Poaching ChatGPT Engineers With $100M Bonuses](https://tech.slashdot.org/story/25/07/19/0612203/openai-ceo-says-meta-tried-poaching-chatgpt-engineers-with-100m-bonuses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-19, 15:10:43](https://lobste.rs/s/47ckxy/using_leaked_data_examine) - [Using leaked data to examine vulnerabilities in SMS routing and SS7 signalling](https://medium.com/@lighthousereports/using-leaked-data-to-examine-vulnerabilities-in-sms-routing-and-ss7-signalling-8e30298491d9)
* [2025-07-19, 14:35:11](https://news.ycombinator.com/item?id=44615801) - [Death by AI](https://davebarry.substack.com/p/death-by-ai)
* [2025-07-19, 14:34:00](https://tech.slashdot.org/story/25/07/19/0336250/edge-of-space-skydiver-felix-baumgartner-dies-in-paragliding-accident?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Edge of Space&apos; Skydiver Felix Baumgartner Dies in Paragliding Accident](https://tech.slashdot.org/story/25/07/19/0336250/edge-of-space-skydiver-felix-baumgartner-dies-in-paragliding-accident?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-19, 13:00:00](https://tech.slashdot.org/story/25/07/19/0022209/utopian-city-california-forever-announces-huge-tech-manufacturing-park?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Utopian&apos; City &apos;California Forever&apos; Announces Huge Tech Manufacturing Park](https://tech.slashdot.org/story/25/07/19/0022209/utopian-city-california-forever-announces-huge-tech-manufacturing-park?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-19, 11:08:00](https://soylentnews.org/article.pl?sid=25/07/18/0920228&amp;from=rss) - [Most Warming This Century May Be Due To Air Pollution Cuts](https://soylentnews.org/article.pl?sid=25/07/18/0920228&amp;from=rss)
* [2025-07-19, 11:03:00](https://lobste.rs/s/cwmt11/do_you_understand_f_strings) - [Do you understand f-strings?](https://fstrings.wtf/)
* [2025-07-19, 08:26:20](https://lobste.rs/s/p0ylu1/linux_secure_boot_certificate) - [Linux and Secure Boot certificate expiration](https://lwn.net/SubscriberLink/1029767/43b62a7a7408c2a9/)
* [2025-07-19, 06:20:00](https://soylentnews.org/article.pl?sid=25/07/18/0136203&amp;from=rss) - [Two Guys Hated Using Comcast, So They Built Their Own Fiber ISP](https://soylentnews.org/article.pl?sid=25/07/18/0136203&amp;from=rss)
* [2025-07-19, 01:37:00](https://soylentnews.org/article.pl?sid=25/07/18/0124213&amp;from=rss) - [Radio Hobbyists, Rejoice! Good News for LoRa &amp; Mesh](https://soylentnews.org/article.pl?sid=25/07/18/0124213&amp;from=rss)
* [2025-07-18, 23:43:41](https://lobste.rs/s/vaqh5i/shutting_down_clear_linux_os) - [Shutting down Clear Linux OS](https://community.clearlinux.org/t/all-good-things-come-to-an-end-shutting-down-clear-linux-os/10716)
* [2025-07-18, 23:29:11](https://lobste.rs/s/f0um5j/async_rust_is_bad_language_2023) - [Async Rust Is A Bad Language (2023)](https://bitbashing.io/async-rust.html)
* [2025-07-18, 20:55:00](https://soylentnews.org/article.pl?sid=25/07/18/0111248&amp;from=rss) - [Drones, AI and Robot Pickers: Meet the Fully Autonomous Farm](https://soylentnews.org/article.pl?sid=25/07/18/0111248&amp;from=rss)
* [2025-07-18, 20:16:10](https://lobste.rs/s/s8ldew/current_technology_is_not_ready_for) - [The current technology is not ready for proper blending](https://blog.pkh.me/p/43-the-current-technology-is-not-ready-for-proper-blending.html)
* [2025-07-18, 19:43:57](https://lobste.rs/s/ojxlqm/pimping_my_casio_part_deux) - [Pimping my Casio: Part Deux](https://blog.jgc.org/2025/07/pimping-my-casio-part-deux.html)
* [2025-07-18, 19:21:17](https://lobste.rs/s/oeuohp/asynchrony_is_not_concurrency) - [Asynchrony is not Concurrency](https://kristoff.it/blog/asynchrony-is-not-concurrency/)
* [2025-07-18, 19:13:24](https://lobste.rs/s/df2azc/firefox_patch_bin_librewolf_fix_bin_zen) - [firefox-patch-bin, librewolf-fix-bin and zen-browser-patched-bin AUR packages contain malware](https://lists.archlinux.org/archives/list/aur-general@lists.archlinux.org/thread/7EZTJXLIAQLARQNTMEW2HBWZYE626IFJ/)
* [2025-07-18, 16:10:00](https://soylentnews.org/article.pl?sid=25/07/18/011202&amp;from=rss) - [DOGE Staffer With Access to Americans&apos; Personal Data Leaked Private xAI API Key](https://soylentnews.org/article.pl?sid=25/07/18/011202&amp;from=rss)
* [2025-07-18, 15:49:02](https://lobste.rs/s/hoxhnw/petition_repeal_online_safety_act) - [Petition: Repeal the Online Safety Act](https://petition.parliament.uk/petitions/722903)
* [2025-07-18, 11:26:00](https://soylentnews.org/article.pl?sid=25/07/17/127255&amp;from=rss) - [Intel Axes Thousands of Technicians and Engineers in Sweeping U.S. Layoffs](https://soylentnews.org/article.pl?sid=25/07/17/127255&amp;from=rss)
* [2025-07-18, 06:49:00](https://soylentnews.org/article.pl?sid=25/07/17/124242&amp;from=rss) - [Engineering the Origin of the Wheel](https://soylentnews.org/article.pl?sid=25/07/17/124242&amp;from=rss)
* [2025-07-18, 02:25:13](https://lobste.rs/s/l8a8zq/nih_is_far_cheaper_than_wrong_dependency) - [NIH Is Far Cheaper Than The Wrong Dependency](https://lewiscampbell.tech/blog/250718.html)
* [2025-07-18, 02:05:00](https://soylentnews.org/article.pl?sid=25/07/17/1148204&amp;from=rss) - [Nvidia Chips Become the First GPUs to Fall to Rowhammer Bit-Flip Attacks](https://soylentnews.org/article.pl?sid=25/07/17/1148204&amp;from=rss)
* [2025-07-17, 21:14:00](https://soylentnews.org/article.pl?sid=25/07/16/188244&amp;from=rss) - [Belkin Shows Tech Firms Getting Too Comfortable With Bricking Customers’ Stuff](https://soylentnews.org/article.pl?sid=25/07/16/188244&amp;from=rss)
* [2025-07-17, 20:20:58](https://news.ycombinator.com/item?id=44597727) - [Behind the ballistics of the &apos;explosive&apos; squirting cucumber](https://phys.org/news/2025-07-ballistics-explosive-squirting-cucumber.html)
* [2025-07-17, 16:32:00](https://soylentnews.org/article.pl?sid=25/07/16/182208&amp;from=rss) - [Holographic Ribbon Aims To Oust Magnetic Tape With 50-Year Life Span And 200Tb Per Cartridge](https://soylentnews.org/article.pl?sid=25/07/16/182208&amp;from=rss)
* [2025-07-17, 11:47:00](https://soylentnews.org/article.pl?sid=25/07/16/1758241&amp;from=rss) - [AI Slows Down Some Experienced Software Developers](https://soylentnews.org/article.pl?sid=25/07/16/1758241&amp;from=rss)
* [2025-07-17, 10:43:05](https://news.ycombinator.com/item?id=44591775) - [Mushroom learns to crawl after being given robot body (2024)](https://www.the-independent.com/tech/robot-mushroom-biohybrid-robotics-cornell-b2610411.html)
* [2025-07-17, 07:51:49](https://news.ycombinator.com/item?id=44590795) - [The Secrets We Keep](https://blog.bl00cyb.org/2025/07/the-secrets-we-keep/)
* [2025-07-17, 07:07:00](https://soylentnews.org/article.pl?sid=25/07/16/1725249&amp;from=rss) - [Industrial Waste is Turning Into Rock in Just Decades, Study Suggests](https://soylentnews.org/article.pl?sid=25/07/16/1725249&amp;from=rss)
* [2025-07-17, 06:39:17](https://news.ycombinator.com/item?id=44590391) - [How to run an Arduino for years on a battery (2021)](https://makecademy.com/arduino-battery)
* [2025-07-17, 02:22:00](https://soylentnews.org/article.pl?sid=25/07/15/1735235&amp;from=rss) - [Merger of Two Massive Black Holes is One for the Record Books](https://soylentnews.org/article.pl?sid=25/07/15/1735235&amp;from=rss)
* [2025-07-16, 22:25:42](https://news.ycombinator.com/item?id=44587486) - [Open-Source BCI Platform with Mobile SDK for Rapid Neurotech Prototyping](https://www.preprints.org/manuscript/202507.1198/v1)
* [2025-07-16, 21:33:00](https://soylentnews.org/article.pl?sid=25/07/15/1642247&amp;from=rss) - [Nvidia CEO says China&apos;s Military Will Avoid U.S. AI Tech](https://soylentnews.org/article.pl?sid=25/07/15/1642247&amp;from=rss)
* [2025-07-16, 18:25:14](https://news.ycombinator.com/item?id=44585370) - [Matterport walkthrough of the original Microsoft Building 3](https://my.matterport.com/show/?m=SZSV6vjcf4L)
* [2025-07-16, 16:53:00](https://soylentnews.org/article.pl?sid=25/07/15/1528250&amp;from=rss) - [Texas Governor Says His Emails With Elon Musk are Too ‘Intimate or Embarrassing’ to Release](https://soylentnews.org/article.pl?sid=25/07/15/1528250&amp;from=rss)
* [2025-07-16, 15:25:30](https://news.ycombinator.com/item?id=44583316) - [Hungary&apos;s oldest library is fighting to save books from a beetle infestation](https://www.npr.org/2025/07/14/nx-s1-5467062/hungary-library-books-beetles)
* [2025-07-16, 14:25:42](https://news.ycombinator.com/item?id=44582730) - [Show HN: ggc – A terminal-based Git CLI written in Go](https://github.com/bmf-san/ggc)
* [2025-07-16, 12:48:54](https://news.ycombinator.com/item?id=44581725) - [How the &apos;Minecraft&apos; Score Became Big Business for Its Composer](https://www.billboard.com/pro/how-minecraft-score-became-big-business-for-composer/)
* [2025-07-16, 12:15:00](https://soylentnews.org/article.pl?sid=25/07/15/0229246&amp;from=rss) - [Secretive Chinese Satellite Emerges in Surprising Orbit After 6-Day Vanishing Act](https://soylentnews.org/article.pl?sid=25/07/15/0229246&amp;from=rss)
* [2025-07-16, 10:14:42](https://news.ycombinator.com/item?id=44580567) - [I tried vibe coding in BASIC and it didn&apos;t go well](https://www.goto10retro.com/p/vibe-coding-in-basic)
* [2025-07-16, 07:34:00](https://soylentnews.org/article.pl?sid=25/07/14/1828216&amp;from=rss) - [Stopping The Rot When Good Software Goes Bad Means New Rules](https://soylentnews.org/article.pl?sid=25/07/14/1828216&amp;from=rss)
* [2025-07-16, 02:51:00](https://soylentnews.org/article.pl?sid=25/07/14/1819237&amp;from=rss) - [GPS On The Fritz? Britain And France Plot A Backup Plan](https://soylentnews.org/article.pl?sid=25/07/14/1819237&amp;from=rss)
