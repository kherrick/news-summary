# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and Computing Innovations

* [AI tools are making me lose interest in CS fundamentals](https://news.ycombinator.com/item?id=47394291) - A reflection on how the rise of AI tools impacts interest in classical computer science concepts. [Comments](https://news.ycombinator.com/item?id=47394291)

* [How I write software with LLMs](https://www.stavros.io/posts/how-i-write-software-with-llms/) - A detailed guide on integrating large language models into the software development process. [Comments](https://news.ycombinator.com/item?id=47394022)

* [What Is Agentic Engineering?](https://simonwillison.net/guides/agentic-engineering-patterns/what-is-agentic-engineering/) - Explore the concept of agentic engineering and its application in development. [Comments](https://news.ycombinator.com/item?id=47393908)

* [A Visual Introduction to Machine Learning (2015)](https://r2d3.us/visual-intro-to-machine-learning-part-1/) - An interactive guide to understanding machine learning basics. [Comments](https://news.ycombinator.com/item?id=47386116)

* [LLM Architecture Gallery](https://sebastianraschka.com/llm-architecture-gallery/) - A comprehensive collection of large language model architectures. [Comments](https://news.ycombinator.com/item?id=47388676)

## Energy and Sustainability

* [The UK Will Invest Billions to Build a Nuclear Fusion Industry](https://hardware.slashdot.org/story/26/03/16/0049245/the-uk-will-invest-billions-to-build-a-nuclear-fusion-industry?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Large investments into creating sustainable nuclear fusion technology in the UK.

* [Canada's bill C-22 mandates mass metadata surveillance of Canadians](https://www.michaelgeist.ca/2026/03/a-tale-of-two-bills-lawful-access-returns-with-changes-to-warrantless-access-but-dangerous-backdoor-surveillance-risks-remains/) - A controversial bill on metadata surveillance for Canadian citizens. [Comments](https://news.ycombinator.com/item?id=47392084)

* [Are U.S. Utilities Trying to Delay Easy-to-Use Solar 'Balcony' Panels?](https://news.slashdot.org/story/26/03/14/0711230/are-us-utilities-trying-to-delay-easy-to-use-solar-balcony-panels?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Speculating on the motives behind delays in adopting accessible solar technology.

## Healthcare and Science

* [Cannabinoids remove plaque-forming Alzheimer's proteins from brain cells (2016)](https://www.salk.edu/news-release/cannabinoids-remove-plaque-forming-alzheimers-proteins-from-brain-cells/) - Insights into utilizing cannabinoids for addressing Alzheimer's. [Comments](https://news.ycombinator.com/item?id=47393619)

* [Learning athletic humanoid tennis skills from imperfect human motion data](https://zzk273.github.io/LATENT/) - Research into training humanoid robots for sports using human motion data. [Comments](https://news.ycombinator.com/item?id=47388273)

## Tech Projects and Innovations

* [I built an ephemeral P2P chat with WebRTC, without servers](https://ephemchat.vercel.app/) - A project demonstrating P2P chatting using WebRTC without relying on external servers. [Comments](https://news.ycombinator.com/item?id=47393941)

* [Gothub is live](https://x61.sh/log/2026/03/14032026191148-gothub.html) - Introducing a unique platform for GitHub repositories. [Comments](https://lobste.rs/s/yqnihu/gothub_is_live)

* [Changes to OpenTTD distribution on Steam](https://www.openttd.org/news/2026/03/14/steam-changes) - Updates to the popular OpenTTD game being offered on Steam. [Comments](https://lobste.rs/s/nc3c14/changes_openttd_distribution_on_steam)

## Social Policy and Commentary

* [Federal Right to Privacy Act – Draft legislation](https://righttoprivacyact.github.io) - A review and potential implications of the draft Federal Right to Privacy Act. [Comments](https://news.ycombinator.com/item?id=47394264)

* [Nasdaq's Shame](https://keubiko.substack.com/p/nasdaqs-shame) - An exposé on recent controversies related to Nasdaq's commitments. [Comments](https://news.ycombinator.com/item?id=47392550)

## Miscellaneous

* [A new Bigfoot documentary helps explain our conspiracy-minded era](https://www.msn.com/en-us/news/us/a-new-bigfoot-documentary-helps-explain-our-conspiracy-minded-era/ar-AA1Yv6px) - A documentary addressing conspiracy theories through the lens of Bigfoot. [Comments](https://news.ycombinator.com/item?id=47392547)

* [Uber Co-founder Travis Kalanick's Newest Venture? 'Gainfully Employed Robots'](https://hardware.slashdot.org/story/26/03/15/1750229/uber-co-founder-travis-kalanicks-newest-venture-gainfully-employed-robots?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A look at a new venture involving robots by Uber's co-founder.

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

* [2026-03-16, 02:02:12](https://news.ycombinator.com/item?id=47394291) - [AI tools are making me lose interest in CS fundamentals](https://news.ycombinator.com/item?id=47394291)
* [2026-03-16, 01:58:56](https://news.ycombinator.com/item?id=47394264) - [Federal Right to Privacy Act – Draft legislation](https://righttoprivacyact.github.io)
* [2026-03-16, 01:34:00](https://hardware.slashdot.org/story/26/03/16/0049245/the-uk-will-invest-billions-to-build-a-nuclear-fusion-industry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The UK Will Invest Billions to Build a Nuclear Fusion Industry](https://hardware.slashdot.org/story/26/03/16/0049245/the-uk-will-invest-billions-to-build-a-nuclear-fusion-industry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-16, 01:24:09](https://news.ycombinator.com/item?id=47394022) - [How I write software with LLMs](https://www.stavros.io/posts/how-i-write-software-with-llms/)
* [2026-03-16, 01:21:39](https://news.ycombinator.com/item?id=47394004) - [Quillx is an open standard for disclosing AI involvement in software projects](https://github.com/QAInsights/AIx)
* [2026-03-16, 01:11:52](https://news.ycombinator.com/item?id=47393941) - [I built an ephemeral P2P chat with WebRTC, without servers](https://ephemchat.vercel.app/)
* [2026-03-16, 01:07:47](https://news.ycombinator.com/item?id=47393908) - [What Is Agentic Engineering?](https://simonwillison.net/guides/agentic-engineering-patterns/what-is-agentic-engineering/)
* [2026-03-16, 00:51:18](https://news.ycombinator.com/item?id=47393805) - [An experiment to use GitHub Actions as a control plane for a PaaS](https://towlion.github.io)
* [2026-03-16, 00:22:48](https://news.ycombinator.com/item?id=47393619) - [Cannabinoids remove plaque-forming Alzheimer&apos;s proteins from brain cells (2016)](https://www.salk.edu/news-release/cannabinoids-remove-plaque-forming-alzheimers-proteins-from-brain-cells/)
* [2026-03-15, 23:51:26](https://news.ycombinator.com/item?id=47393388) - [The Linux Programming Interface as a university course text](https://man7.org/tlpi/academic/index.html)
* [2026-03-15, 23:35:00](https://soylentnews.org/article.pl?sid=26/03/14/1755235&amp;from=rss) - [How Much Sleep Do Teens Get? Six-Seven Hours](https://soylentnews.org/article.pl?sid=26/03/14/1755235&amp;from=rss)
* [2026-03-15, 22:51:00](https://tech.slashdot.org/story/26/03/15/224224/2026s-ev-sales-hit-11m---but-europe-surges-while-north-america-slides?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [2026&apos;s EV Sales Hit 1.1M - But Europe Surges While North America Slides](https://tech.slashdot.org/story/26/03/15/224224/2026s-ev-sales-hit-11m---but-europe-surges-while-north-america-slides?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-15, 22:16:09](https://news.ycombinator.com/item?id=47392550) - [Nasdaq&apos;s Shame](https://keubiko.substack.com/p/nasdaqs-shame)
* [2026-03-15, 22:15:50](https://news.ycombinator.com/item?id=47392547) - [A new Bigfoot documentary helps explain our conspiracy-minded era](https://www.msn.com/en-us/news/us/a-new-bigfoot-documentary-helps-explain-our-conspiracy-minded-era/ar-AA1Yv6px)
* [2026-03-15, 21:51:00](https://ask.slashdot.org/story/26/03/15/2124224/ask-slashdot-whats-the-best-all-purpose-risc-v-system-on-a-chip-family?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ask Slashdot:  What&apos;s the Best All-Purpose RISC-V System on a Chip Family?](https://ask.slashdot.org/story/26/03/15/2124224/ask-slashdot-whats-the-best-all-purpose-risc-v-system-on-a-chip-family?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-15, 21:40:39](https://lobste.rs/s/vio5wq/rack_mount_hydroponics) - [rack-mount hydroponics](https://sa.lj.am/rack-mount-hydroponics/)
* [2026-03-15, 21:34:44](https://lobste.rs/s/8pfxqy/i_let_claude_code_configure_my_arch) - [I let Claude Code configure my Arch install](https://www.willmorrison.com/blog/03-15-2026-llm-dotfiles)
* [2026-03-15, 21:29:52](https://news.ycombinator.com/item?id=47392158) - [Show HN: Free OpenAI API Access with ChatGPT Account](https://github.com/EvanZhouDev/openai-oauth)
* [2026-03-15, 21:22:16](https://news.ycombinator.com/item?id=47392084) - [Canada&apos;s bill C-22 mandates mass metadata surveillance of Canadians](https://www.michaelgeist.ca/2026/03/a-tale-of-two-bills-lawful-access-returns-with-changes-to-warrantless-access-but-dangerous-backdoor-surveillance-risks-remains/)
* [2026-03-15, 21:08:36](https://lobste.rs/s/wfrpsb/c_26_oxford_variadic_comma) - [C++26: The Oxford variadic comma](https://www.sandordargo.com/blog/2026/03/11/cpp26-oxford-variadic-comma)
* [2026-03-15, 20:56:21](https://news.ycombinator.com/item?id=47391803) - [LLMs can be exhausting](https://tomjohnell.com/llms-can-be-absolutely-exhausting/)
* [2026-03-15, 20:51:00](https://linux.slashdot.org/story/26/03/15/2048241/cachyos-dethrones-arch-as-protondbs-top-linux-gamer-desktop-distro?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CachyOS Dethrones Arch As ProtonDB&apos;s Top Linux Gamer Desktop Distro](https://linux.slashdot.org/story/26/03/15/2048241/cachyos-dethrones-arch-as-protondbs-top-linux-gamer-desktop-distro?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-15, 20:49:29](https://lobste.rs/s/2cbd5h/sane_directory_structure_for_software) - [A Sane Directory Structure for Software Projects](https://trop.in/blog/a-sane-directory-structure-for-software-projects)
* [2026-03-15, 19:49:00](https://it.slashdot.org/story/26/03/15/1942232/how-one-company-finally-exposed-north-koreas-massive-remote-workers-scam?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How One Company Finally Exposed North Korea&apos;s Massive Remote Workers Scam](https://it.slashdot.org/story/26/03/15/1942232/how-one-company-finally-exposed-north-koreas-massive-remote-workers-scam?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-15, 19:25:18](https://news.ycombinator.com/item?id=47390945) - [The 49MB web page](https://thatshubham.com/blog/news-audit)
* [2026-03-15, 19:12:53](https://news.ycombinator.com/item?id=47390817) - [Chrome DevTools MCP](https://developer.chrome.com/blog/chrome-devtools-mcp-debug-your-browser-session)
* [2026-03-15, 19:12:06](https://lobste.rs/s/e1skzj/linux_distribution_designed_eliminate) - [A Linux distribution designed to eliminate single points of failure](https://stagex.tools/)
* [2026-03-15, 19:09:25](https://lobste.rs/s/e0dgqd/bypassing_deep_packet_inspection_with) - [Bypassing deep packet inspection with socat and HTTPS tunnels](https://blog.bofh.it/debian/id_472)
* [2026-03-15, 18:51:00](https://soylentnews.org/article.pl?sid=26/03/14/1750228&amp;from=rss) - [AI Medical Advice - Both Sides](https://soylentnews.org/article.pl?sid=26/03/14/1750228&amp;from=rss)
* [2026-03-15, 17:55:00](https://hardware.slashdot.org/story/26/03/15/1750229/uber-co-founder-travis-kalanicks-newest-venture-gainfully-employed-robots?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Uber Co-founder Travis Kalanick&apos;s Newest Venture?  &apos;Gainfully Employed Robots&apos;](https://hardware.slashdot.org/story/26/03/15/1750229/uber-co-founder-travis-kalanicks-newest-venture-gainfully-employed-robots?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-15, 17:25:00](https://news.ycombinator.com/item?id=47389570) - [Stop Sloppypasta](https://stopsloppypasta.ai/)
* [2026-03-15, 17:16:39](https://lobste.rs/s/oahtd6/codegen_is_not_productivity) - [Codegen is not productivity](https://www.antifound.com/posts/codegen-is-not-productivity/)
* [2026-03-15, 16:34:00](https://news.slashdot.org/story/26/03/15/0823246/should-banksy-remain-anonymous?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Should Banksy Remain Anonymous?](https://news.slashdot.org/story/26/03/15/0823246/should-banksy-remain-anonymous?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-15, 16:01:09](https://news.ycombinator.com/item?id=47388676) - [LLM Architecture Gallery](https://sebastianraschka.com/llm-architecture-gallery/)
* [2026-03-15, 15:46:19](https://news.ycombinator.com/item?id=47388531) - [In Memoriam: John W. Addison, my PhD advisor](https://billwadge.com/2026/03/15/in-memoriam-john-w-addison-jr-my-phd-advisor/)
* [2026-03-15, 15:34:00](https://slashdot.org/story/26/03/15/0436200/new-study-raises-concerns-about-ai-chatbots-fueling-delusional-thinking?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Study Raises Concerns About AI Chatbots Fueling Delusional Thinking](https://slashdot.org/story/26/03/15/0436200/new-study-raises-concerns-about-ai-chatbots-fueling-delusional-thinking?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-15, 15:21:04](https://news.ycombinator.com/item?id=47388273) - [Learning athletic humanoid tennis skills from imperfect human motion data](https://zzk273.github.io/LATENT/)
* [2026-03-15, 15:09:41](https://news.ycombinator.com/item?id=47388141) - [What makes Intel Optane stand out (2023)](https://blog.zuthof.nl/2023/06/02/what-makes-intel-optane-stand-out/)
* [2026-03-15, 15:09:24](https://news.ycombinator.com/item?id=47388137) - [Separating the Wayland compositor and window manager](https://isaacfreund.com/blog/river-window-management/)
* [2026-03-15, 14:34:00](https://entertainment.slashdot.org/story/26/03/15/0553213/new-documentary-exposes-the-truth-behind-that-1967-bigfoot-footage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Documentary Exposes the Truth Behind That 1967 &apos;Bigfoot&apos; Footage](https://entertainment.slashdot.org/story/26/03/15/0553213/new-documentary-exposes-the-truth-behind-that-1967-bigfoot-footage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-15, 14:00:00](https://soylentnews.org/article.pl?sid=26/03/14/1740249&amp;from=rss) - [New Study Challenges Notion That Aging Means Decline, Finds Many Older Adults Improve Over Time](https://soylentnews.org/article.pl?sid=26/03/14/1740249&amp;from=rss)
* [2026-03-15, 13:59:00](https://lobste.rs/s/pk2axu/separating_wayland_compositor_window) - [Separating the Wayland Compositor and Window Manager](https://isaacfreund.com/blog/river-window-management/)
* [2026-03-15, 13:55:20](https://lobste.rs/s/50tanv/snail_mail_sign_ups) - [Snail Mail Sign-Ups](https://btxx.org/posts/snail-mail-signups/)
* [2026-03-15, 13:38:39](https://lobste.rs/s/4jgfcx/llm_time) - [LLM time](https://graydon2.dreamwidth.org/322732.html)
* [2026-03-15, 13:15:58](https://lobste.rs/s/vvrsz3/most_elegant_tcp_hole_punching_algorithm) - [A most elegant TCP hole punching algorithm](https://robertsdotpm.github.io/cryptography/tcp_hole_punching.html)
* [2026-03-15, 13:08:02](https://news.ycombinator.com/item?id=47387047) - [Glassworm is back: A new wave of invisible Unicode attacks hits repositories](https://www.aikido.dev/blog/glassworm-returns-unicode-attack-github-npm-vscode)
* [2026-03-15, 11:44:08](https://lobste.rs/s/5cxzuq/one_hundred_curl_graphs) - [One hundred curl graphs](https://daniel.haxx.se/blog/2026/03/15/one-hundred-curl-graphs/)
* [2026-03-15, 10:47:35](https://news.ycombinator.com/item?id=47386116) - [A Visual Introduction to Machine Learning (2015)](https://r2d3.us/visual-intro-to-machine-learning-part-1/)
* [2026-03-15, 10:34:00](https://news.slashdot.org/story/26/03/15/0647257/does-canada-need-nationalized-public-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Does Canada Need Nationalized, Public AI?](https://news.slashdot.org/story/26/03/15/0647257/does-canada-need-nationalized-public-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-15, 10:28:30](https://lobste.rs/s/8wjbsa/optimization_ladder) - [The Optimization Ladder](https://cemrehancavdar.com/2026/03/10/optimization-ladder/)
* [2026-03-15, 10:23:43](https://lobste.rs/s/yqnihu/gothub_is_live) - [Gothub is live](https://x61.sh/log/2026/03/14032026191148-gothub.html)
* [2026-03-15, 09:20:00](https://soylentnews.org/article.pl?sid=26/03/14/0932244&amp;from=rss) - [OpenAI Wants Everyone To Have A Monthly AI Bill](https://soylentnews.org/article.pl?sid=26/03/14/0932244&amp;from=rss)
* [2026-03-15, 09:06:35](https://news.ycombinator.com/item?id=47385576) - [The emergence of print-on-demand Amazon paperback books](https://www.alexerhardt.com/en/enshittification-amazon-paperback-books/)
* [2026-03-15, 07:43:27](https://lobste.rs/s/1wdfzi/mount_mayhem_at_netflix_scaling) - [Mount Mayhem at Netflix: Scaling Containers on Modern CPUs](https://netflixtechblog.com/mount-mayhem-at-netflix-scaling-containers-on-modern-cpus-f3b09b68beac)
* [2026-03-15, 07:34:00](https://yro.slashdot.org/story/26/03/15/0512246/new-freenet-network-launches-along-with-river-group-chat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Freenet Network Launches, Along With &apos;River&apos; Group Chat](https://yro.slashdot.org/story/26/03/15/0512246/new-freenet-network-launches-along-with-river-group-chat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-15, 07:11:12](https://lobste.rs/s/mizmno/summary_rust_project_perspectives_on_ai) - [Summary - Rust Project Perspectives on AI](https://nikomatsakis.github.io/rust-project-perspectives-on-ai/feb27-summary.html)
* [2026-03-15, 05:19:49](https://lobste.rs/s/nc3c14/changes_openttd_distribution_on_steam) - [Changes to OpenTTD distribution on Steam](https://www.openttd.org/news/2026/03/14/steam-changes)
* [2026-03-15, 04:53:03](https://lobste.rs/s/xnfsd4/gentle_introduction_mercury) - [A Gentle Introduction to Mercury](https://bctnry.github.io/gentle-introduction-to-mercury/)
* [2026-03-15, 04:37:00](https://soylentnews.org/article.pl?sid=26/03/14/0928215&amp;from=rss) - [Why Are Some Animal and Human Signals Honest, While Others Are Deceptive?](https://soylentnews.org/article.pl?sid=26/03/14/0928215&amp;from=rss)
* [2026-03-15, 04:05:08](https://lobste.rs/s/dvynxz/lotusnotes) - [LotusNotes](https://computer.rip/2026-03-14-lotusnotes.html)
* [2026-03-15, 03:34:00](https://developers.slashdot.org/story/26/03/14/2137238/will-ai-bring-the-end-of-computer-programming-as-we-know-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Will AI Bring &apos;the End of Computer Programming As We Know It&apos;?](https://developers.slashdot.org/story/26/03/14/2137238/will-ai-bring-the-end-of-computer-programming-as-we-know-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-15, 02:57:26](https://lobste.rs/s/dw0hx5/tree_style_invite_systems_reduce_ai_slop) - [tree-style invite systems reduce AI slop](https://abyss.fish/tree-style_invite_systems_reduce_AI_slop)
* [2026-03-15, 01:34:00](https://news.slashdot.org/story/26/03/14/2225243/americas-first-large-scale-offshore-wind-project-finally-finishes-construction?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [America&apos;s First Large-Scale Offshore Wind Project Finally Finishes Construction](https://news.slashdot.org/story/26/03/14/2225243/americas-first-large-scale-offshore-wind-project-finally-finishes-construction?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-15, 01:17:17](https://lobste.rs/s/cxiddw/ageless_linux_software_for_humans) - [Ageless Linux — Software for Humans of Indeterminate Age](https://agelesslinux.org/)
* [2026-03-14, 23:34:00](https://games.slashdot.org/story/26/03/14/2326222/how-a-raspberry-pi-microcontroller-saved-the-super-nintendos-infamously-inferior-version-of-doom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How a Raspberry Pi Microcontroller Saved the Super Nintendo&apos;s Infamously Inferior Version Of &apos;Doom&apos;](https://games.slashdot.org/story/26/03/14/2326222/how-a-raspberry-pi-microcontroller-saved-the-super-nintendos-infamously-inferior-version-of-doom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-14, 22:52:00](https://soylentnews.org/article.pl?sid=26/03/13/0443231&amp;from=rss) - [A 1,300-Pound NASA Satellite Just Made a Fiery Return to Earth](https://soylentnews.org/article.pl?sid=26/03/13/0443231&amp;from=rss)
* [2026-03-14, 21:34:00](https://news.slashdot.org/story/26/03/14/0711230/are-us-utilities-trying-to-delay-easy-to-use-solar-balcony-panels?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Are U.S. Utilities Trying to Delay Easy-to-Use Solar &apos;Balcony&apos; Panels?](https://news.slashdot.org/story/26/03/14/0711230/are-us-utilities-trying-to-delay-easy-to-use-solar-balcony-panels?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-14, 18:21:09](https://lobste.rs/s/kyrt0i/sunsetting_jazzband) - [Sunsetting Jazzband](https://jazzband.co/news/2026/03/14/sunsetting-jazzband)
* [2026-03-14, 18:06:00](https://soylentnews.org/article.pl?sid=26/03/13/0438246&amp;from=rss) - [Americans Are Quietly Installing DIY Solar to Fight Skyrocketing Energy Bills](https://soylentnews.org/article.pl?sid=26/03/13/0438246&amp;from=rss)
* [2026-03-14, 17:56:47](https://lobste.rs/s/gsg6fc/humanities_machine) - [Humanities in the Machine](https://blainsmith.com/essays/humanities-in-the-machine/)
* [2026-03-14, 13:31:43](https://lobste.rs/s/u3cc1e/compose_key_is_magic) - [The Compose key is magic](https://crescentro.se/posts/compose-key/)
* [2026-03-14, 13:19:00](https://soylentnews.org/article.pl?sid=26/03/13/0430253&amp;from=rss) - [Adobe Plunges to 7 Year Low on CEO Resignation, Muted Forecast](https://soylentnews.org/article.pl?sid=26/03/13/0430253&amp;from=rss)
* [2026-03-14, 13:11:34](https://lobste.rs/s/rmemq6/guide_vim_pack_neovim_built_plugin) - [A Guide to vim.pack (Neovim built-in plugin manager)](https://echasnovski.com/blog/2026-03-13-a-guide-to-vim-pack)
* [2026-03-14, 08:38:00](https://soylentnews.org/article.pl?sid=26/03/13/0421208&amp;from=rss) - [14,000 Routers Are Infected by Malware That&apos;s Highly Resistant to Takedowns](https://soylentnews.org/article.pl?sid=26/03/13/0421208&amp;from=rss)
* [2026-03-14, 03:51:00](https://soylentnews.org/article.pl?sid=26/03/13/0413211&amp;from=rss) - [As Frank Yeary Retires From Intel, the Company Picks an Engineer to Chair its Board](https://soylentnews.org/article.pl?sid=26/03/13/0413211&amp;from=rss)
* [2026-03-13, 23:02:00](https://soylentnews.org/article.pl?sid=26/03/12/1111206&amp;from=rss) - [After Outages, Amazon to Make Senior Engineers Sign Off on AI-Assisted Changes](https://soylentnews.org/article.pl?sid=26/03/12/1111206&amp;from=rss)
* [2026-03-13, 18:19:00](https://soylentnews.org/article.pl?sid=26/03/12/1023220&amp;from=rss) - [Online Intelligence Dashboards (Aka, More AI Slop?)](https://soylentnews.org/article.pl?sid=26/03/12/1023220&amp;from=rss)
* [2026-03-13, 13:37:00](https://soylentnews.org/article.pl?sid=26/03/12/1011221&amp;from=rss) - [LEGO&apos;s 0.002mm Specification and It&apos;s Implications for Manufacturing](https://soylentnews.org/article.pl?sid=26/03/12/1011221&amp;from=rss)
* [2026-03-13, 08:52:00](https://soylentnews.org/article.pl?sid=26/03/12/107259&amp;from=rss) - [Infinity Train Got 14.5 MWh Battery That, Ideally, Never Needs Charging](https://soylentnews.org/article.pl?sid=26/03/12/107259&amp;from=rss)
* [2026-03-13, 04:09:00](https://soylentnews.org/article.pl?sid=26/03/11/2010247&amp;from=rss) - [Ig Nobels Ceremony Moves to Europe Over Security Concerns](https://soylentnews.org/article.pl?sid=26/03/11/2010247&amp;from=rss)
* [2026-03-12, 23:23:00](https://soylentnews.org/article.pl?sid=26/03/11/164207&amp;from=rss) - [Is Low Fertility Really an Economic Threat?](https://soylentnews.org/article.pl?sid=26/03/11/164207&amp;from=rss)
* [2026-03-12, 20:41:51](https://news.ycombinator.com/item?id=47356782) - [A Plain Anabaptist Story: The Hutterites](https://ulmer457718.substack.com/p/a-plain-anabaptist-story-the-hutterites)
* [2026-03-12, 18:39:00](https://soylentnews.org/article.pl?sid=26/03/11/163209&amp;from=rss) - [OpenAI&apos;s Massive Stargate Data Center Canceled as Firm Can&apos;t Reach Terms With Oracle](https://soylentnews.org/article.pl?sid=26/03/11/163209&amp;from=rss)
* [2026-03-12, 14:10:56](https://news.ycombinator.com/item?id=47350763) - [Bandit: A 32bit baremetal computer that runs Color Forth [video]](https://www.youtube.com/watch?v=HK0uAKkt0AE)
* [2026-03-12, 13:57:00](https://soylentnews.org/article.pl?sid=26/03/11/1558207&amp;from=rss) - [Digital Targeting Creeps Out Customers](https://soylentnews.org/article.pl?sid=26/03/11/1558207&amp;from=rss)
* [2026-03-12, 09:11:00](https://soylentnews.org/article.pl?sid=26/03/11/0450209&amp;from=rss) - [Why the US is Using a Cheap Iranian Drone Against the Country Itself](https://soylentnews.org/article.pl?sid=26/03/11/0450209&amp;from=rss)
* [2026-03-12, 04:23:00](https://soylentnews.org/article.pl?sid=26/03/11/0135252&amp;from=rss) - [Are Consumers Doomed to Pay More for Electricity Due to Data Center Buildouts?](https://soylentnews.org/article.pl?sid=26/03/11/0135252&amp;from=rss)
