# [News Summary](https://kherrick.github.io/news-summary/)

## Innovations and Technology

* [Will AI Bring 'the End of Computer Programming As We Know It'?](https://developers.slashdot.org/story/26/03/14/2137238/will-ai-bring-the-end-of-computer-programming-as-we-know-it?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Discussion on how AI advancements could revolutionize or potentially terminate traditional computer programming.

* [StorageReview Sets New Pi Record: 314 Trillion Digits on a Dell PowerEdge R7725](https://www.storagereview.com/review/storagereview-sets-new-pi-record-314-trillion-digits-on-a-dell-poweredge-r7725) - An impressive record-breaking calculation of Pi to 314 trillion digits using Dell's PowerEdge R7725.

* [Tree Search Distillation for Language Models Using PPO](https://ayushtambde.com/blog/tree-search-distillation-for-language-models-using-ppo/) - Exploring PPO techniques to fine-tune language models effectively through Tree Search distillation.

* [GitAgent – An open standard that turns any Git repo into an AI agent](https://www.gitagent.sh/) - A unique open standard tool to revolutionize Git repositories by turning them into AI agents.

## Scientific Advances and Discoveries

* [Why Are Some Animal and Human Signals Honest, While Others Are Deceptive?](https://soylentnews.org/article.pl?sid=26/03/14/0928215&from=rss) - Insightful exploration into why certain animal and human signals are sincere whereas others are deceptive in nature.

* [Bumblebee queens breathe underwater to survive drowning](https://www.smithsonianmag.com/science-nature/bumblebee-queens-breathe-underwater-to-survive-drowning-revealing-how-they-can-live-submerged-for-a-week-180988330/) - An amazing discovery about bumblebee queens' ability to survive underwater demonstrates their unique adaptation.

* [How a Species Evolved Fast Enough to Save Itself from Extinction](https://news.slashdot.org/story/26/03/14/0343209/how-a-species-evolved-fast-enough-to-save-itself-from-extinction?utm_source=rss1.0mainlinkanon&utm_medium=feed) - This article discusses the fascinating rapid evolutionary process that allowed a species to avoid extinction.

* [NASA Satellite Just Made a Fiery Return to Earth](https://soylentnews.org/article.pl?sid=26/03/13/0443231&from=rss) - A 1,300-pound NASA satellite re-entered the Earth's atmosphere in a spectacular fiery display.

## Energy and Environment

* [America's First Large-Scale Offshore Wind Project Finally Finishes Construction](https://news.slashdot.org/story/26/03/14/2225243/americas-first-large-scale-offshore-wind-project-finally-finishes-construction?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Milestone achievement as the U.S. concludes its first major offshore wind project.

* [Are U.S. Utilities Trying to Delay Easy-to-Use Solar 'Balcony' Panels?](https://news.slashdot.org/story/26/03/14/0711230/are-us-utilities-trying-to-delay-easy-to-use-solar-balcony-panels?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Investigation into whether U.S. utility companies are hindering the adoption of practical solar solutions.

## Historical and Cultural Findings

* [Two Long-Lost Episodes of 'Doctor Who' Found](https://entertainment.slashdot.org/story/26/03/14/0048239/two-long-lost-episodes-of-doctor-who-found?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Rediscovery of two classic 'Doctor Who' episodes that were thought to be lost forever.

* [How a Raspberry Pi Saved the Super Nintendo's Infamously Inferior Version Of 'Doom'](https://games.slashdot.org/story/26/03/14/2326222/how-a-raspberry-pi-saved-the-super-nintendos-infamously-inferior-version-of-doom?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The fascinating tale of how modern technology revitalized a classic video game.

## Space Exploration

* [Airbus is preparing two uncrewed combat aircraft](https://www.airbus.com/en/newsroom/press-releases/2026-03-airbus-is-preparing-two-uncrewed-combat-aircraft-from-kratos-for-first-flight-with-a-european) - Exploration into Airbus' efforts to develop and test revolutionary uncrewed combat aircrafts.

## Human Behavior and Society

* [Treasure hunter freed from jail after refusing to turn over shipwreck gold](https://www.bbc.com/news/articles/cg4g7kn99q3o) - The story of a treasure hunter who gained his freedom after resisting orders to return gold from a discovered shipwreck.

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

* [2026-03-15, 04:37:00](https://soylentnews.org/article.pl?sid=26/03/14/0928215&amp;from=rss) - [Why Are Some Animal and Human Signals Honest, While Others Are Deceptive?](https://soylentnews.org/article.pl?sid=26/03/14/0928215&amp;from=rss)
* [2026-03-15, 04:05:08](https://lobste.rs/s/dvynxz/lotusnotes) - [LotusNotes](https://computer.rip/2026-03-14-lotusnotes.html)
* [2026-03-15, 03:34:00](https://developers.slashdot.org/story/26/03/14/2137238/will-ai-bring-the-end-of-computer-programming-as-we-know-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Will AI Bring &apos;the End of Computer Programming As We Know It&apos;?](https://developers.slashdot.org/story/26/03/14/2137238/will-ai-bring-the-end-of-computer-programming-as-we-know-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-15, 02:57:26](https://lobste.rs/s/dw0hx5/tree_style_invite_systems_reduce_ai_slop) - [tree-style invite systems reduce AI slop](https://abyss.fish/tree-style_invite_systems_reduce_AI_slop)
* [2026-03-15, 02:48:33](https://news.ycombinator.com/item?id=47383804) - [Treasure hunter freed from jail after refusing to turn over shipwreck gold](https://www.bbc.com/news/articles/cg4g7kn99q3o)
* [2026-03-15, 02:21:53](https://lobste.rs/s/wcncyj/storagereview_sets_new_pi_record_314) - [StorageReview Sets New Pi Record: 314 Trillion Digits on a Dell PowerEdge R7725](https://www.storagereview.com/review/storagereview-sets-new-pi-record-314-trillion-digits-on-a-dell-poweredge-r7725)
* [2026-03-15, 01:34:00](https://news.slashdot.org/story/26/03/14/2225243/americas-first-large-scale-offshore-wind-project-finally-finishes-construction?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [America&apos;s First Large-Scale Offshore Wind Project Finally Finishes Construction](https://news.slashdot.org/story/26/03/14/2225243/americas-first-large-scale-offshore-wind-project-finally-finishes-construction?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-15, 01:17:17](https://lobste.rs/s/cxiddw/ageless_linux_software_for_humans) - [Ageless Linux — Software for Humans of Indeterminate Age](https://agelesslinux.org/)
* [2026-03-15, 00:51:55](https://news.ycombinator.com/item?id=47383059) - [Tree Search Distillation for Language Models Using PPO](https://ayushtambde.com/blog/tree-search-distillation-for-language-models-using-ppo/)
* [2026-03-15, 00:15:10](https://news.ycombinator.com/item?id=47382791) - [How Kernel Anti-Cheats Work: A Deep Dive into Modern Game Protection](https://s4dbrd.github.io/posts/how-kernel-anti-cheats-work/)
* [2026-03-14, 23:34:00](https://games.slashdot.org/story/26/03/14/2326222/how-a-raspberry-pi-saved-the-super-nintendos-infamously-inferior-version-of-doom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How a Raspberry Pi Saved the Super Nintendo&apos;s Infamously Inferior Version Of &apos;Doom&apos;](https://games.slashdot.org/story/26/03/14/2326222/how-a-raspberry-pi-saved-the-super-nintendos-infamously-inferior-version-of-doom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-14, 23:22:39](https://news.ycombinator.com/item?id=47382398) - [SBCL Fibers – Lightweight Cooperative Threads](https://atgreen.github.io/repl-yell/posts/sbcl-fibers/)
* [2026-03-14, 23:10:24](https://news.ycombinator.com/item?id=47382277) - [Airbus is preparing two uncrewed combat aircraft](https://www.airbus.com/en/newsroom/press-releases/2026-03-airbus-is-preparing-two-uncrewed-combat-aircraft-from-kratos-for-first-flight-with-a-european)
* [2026-03-14, 22:52:00](https://soylentnews.org/article.pl?sid=26/03/13/0443231&amp;from=rss) - [A 1,300-Pound NASA Satellite Just Made a Fiery Return to Earth](https://soylentnews.org/article.pl?sid=26/03/13/0443231&amp;from=rss)
* [2026-03-14, 22:41:28](https://news.ycombinator.com/item?id=47382072) - [Show HN: GrobPaint: Somewhere Between MS Paint and Paint.net](https://github.com/groverburger/grobpaint)
* [2026-03-14, 22:10:26](https://news.ycombinator.com/item?id=47381791) - [Ageless Linux – Software for humans of indeterminate age](https://agelesslinux.org/)
* [2026-03-14, 22:04:48](https://news.ycombinator.com/item?id=47381746) - [Changes to OpenTTD Distribution on Steam](https://www.openttd.org/news/2026/03/14/steam-changes)
* [2026-03-14, 22:03:47](https://news.ycombinator.com/item?id=47381736) - [Allow me to get to know you, mistakes and all](https://sebi.io/posts/2026-03-14-allow-me-to-get-to-know-you-mistakes-and-all/)
* [2026-03-14, 22:02:48](https://news.ycombinator.com/item?id=47381731) - [Learning Creative Coding](https://stigmollerhansen.dk/resume/learning-creative-coding/)
* [2026-03-14, 21:34:00](https://news.slashdot.org/story/26/03/14/0711230/are-us-utilities-trying-to-delay-easy-to-use-solar-balcony-panels?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Are U.S. Utilities Trying to Delay Easy-to-Use Solar &apos;Balcony&apos; Panels?](https://news.slashdot.org/story/26/03/14/0711230/are-us-utilities-trying-to-delay-easy-to-use-solar-balcony-panels?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-14, 21:27:33](https://news.ycombinator.com/item?id=47381382) - [Show HN: Han – A Korean programming language written in Rust](https://github.com/xodn348/han)
* [2026-03-14, 21:23:42](https://news.ycombinator.com/item?id=47381340) - [Launching the Claude Partner Network](https://www.anthropic.com/news/claude-partner-network)
* [2026-03-14, 21:14:03](https://news.ycombinator.com/item?id=47381238) - [Postgres with Builtin File Systems](https://db9.ai/)
* [2026-03-14, 20:53:02](https://lobste.rs/s/8wq1vi/preview_coalton_0_2) - [A Preview of Coalton 0.2](https://coalton-lang.github.io/20260312-coalton0p2/)
* [2026-03-14, 20:49:10](https://news.ycombinator.com/item?id=47381011) - [Bumblebee queens breathe underwater to survive drowning](https://www.smithsonianmag.com/science-nature/bumblebee-queens-breathe-underwater-to-survive-drowning-revealing-how-they-can-live-submerged-for-a-week-180988330/)
* [2026-03-14, 20:34:00](https://news.slashdot.org/story/26/03/14/0458245/gaming-site-editor-jailbreaks-an-amazon-echo-show?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Gaming Site Editor Jailbreaks an Amazon Echo Show](https://news.slashdot.org/story/26/03/14/0458245/gaming-site-editor-jailbreaks-an-amazon-echo-show?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-14, 20:16:19](https://news.ycombinator.com/item?id=47380726) - [Library of Short Stories](https://www.libraryofshortstories.com/)
* [2026-03-14, 19:56:38](https://news.ycombinator.com/item?id=47380512) - [Fedora 44 on the Raspberry Pi 5](https://nullr0ute.com/2026/03/fedora-44-on-the-raspberry-pi-5/)
* [2026-03-14, 19:56:25](https://lobste.rs/s/zbo422/fedora_44_on_raspberry_pi_5) - [Fedora 44 on the Raspberry Pi 5](https://nullr0ute.com/2026/03/fedora-44-on-the-raspberry-pi-5/)
* [2026-03-14, 19:35:40](https://news.ycombinator.com/item?id=47380295) - [Marketing for Founders](https://github.com/EdoStra/Marketing-for-Founders)
* [2026-03-14, 19:34:00](https://apple.slashdot.org/story/26/03/14/1818213/should-keycaps-use-text-or-glyphs-for-delete-return-tab-caps-lock-and-shift?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Should Keycaps Use Text or Glyphs for Delete, Return, Tab, Caps Lock, and Shift?](https://apple.slashdot.org/story/26/03/14/1818213/should-keycaps-use-text-or-glyphs-for-delete-return-tab-caps-lock-and-shift?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-14, 18:57:12](https://news.ycombinator.com/item?id=47379898) - [Show HN: Ichinichi – One note per day, E2E encrypted, local-first](https://news.ycombinator.com/item?id=47379898)
* [2026-03-14, 18:34:00](https://linux.slashdot.org/story/26/03/14/085223/system76-ceo-sees-real-possibility-colorados-age-verification-bill-excludes-open-source?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [System76 CEO Sees &apos;Real Possibility&apos; Colorado&apos;s Age-Verification Bill Excludes Open-Source](https://linux.slashdot.org/story/26/03/14/085223/system76-ceo-sees-real-possibility-colorados-age-verification-bill-excludes-open-source?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-14, 18:22:55](https://lobste.rs/s/jh5ljk/lies_i_was_told_about_collaborative) - [Lies I was Told About Collaborative Editing, Part 2: Why we don&apos;t use Yjs](https://www.moment.dev/blog/lies-i-was-told-pt-2)
* [2026-03-14, 18:21:57](https://lobste.rs/s/l5ompx/jpeg_compression) - [JPEG compression](https://www.sophielwang.com/blog/jpeg)
* [2026-03-14, 18:21:09](https://lobste.rs/s/kyrt0i/sunsetting_jazzband) - [Sunsetting Jazzband](https://jazzband.co/news/2026/03/14/sunsetting-jazzband)
* [2026-03-14, 18:09:45](https://lobste.rs/s/dvkasd/companies_house_vulnerability_enabled) - [Companies House vulnerability enabled company hijacking](https://taxpolicy.org.uk/2026/03/13/companies-house-security-vulnerability-directors-addresses/)
* [2026-03-14, 18:06:00](https://soylentnews.org/article.pl?sid=26/03/13/0438246&amp;from=rss) - [Americans Are Quietly Installing DIY Solar to Fight Skyrocketing Energy Bills](https://soylentnews.org/article.pl?sid=26/03/13/0438246&amp;from=rss)
* [2026-03-14, 17:56:47](https://lobste.rs/s/gsg6fc/humanities_machine) - [Humanities in the Machine](https://blainsmith.com/essays/humanities-in-the-machine/)
* [2026-03-14, 17:34:00](https://tech.slashdot.org/story/26/03/14/1733200/us-set-to-receive-10-billion-fee-for-brokering-tiktok-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Set To Receive $10 Billion Fee For Brokering TikTok Deal](https://tech.slashdot.org/story/26/03/14/1733200/us-set-to-receive-10-billion-fee-for-brokering-tiktok-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-14, 17:25:17](https://lobste.rs/s/ypes5v/thoughts_on_generative_i) - [Thoughts on generative A.I](https://kghose.github.io/generative-ai/)
* [2026-03-14, 16:50:32](https://lobste.rs/s/b4vncq/developing_2fa_desktop_client_go) - [Developing a 2FA Desktop Client in Go](https://www.youtube.com/watch?v=HFu3CUtrOQ8)
* [2026-03-14, 16:34:00](https://news.slashdot.org/story/26/03/14/0343209/how-a-species-evolved-fast-enough-to-save-itself-from-extinction?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How a Species Evolved Fast Enough to Save Itself from Extinction](https://news.slashdot.org/story/26/03/14/0343209/how-a-species-evolved-fast-enough-to-save-itself-from-extinction?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-14, 16:01:23](https://news.ycombinator.com/item?id=47377998) - [An ode to bzip](https://purplesyringa.moe/blog/an-ode-to-bzip/)
* [2026-03-14, 15:57:25](https://lobste.rs/s/kzm8tb/why_mathematica_does_not_simplify_sinh) - [Why Mathematica does not simplify Sinh[ArcCosh[x]]](https://www.johndcook.com/blog/2026/03/10/sinh-arccosh/)
* [2026-03-14, 15:34:00](https://it.slashdot.org/story/26/03/14/0539247/ais-productivity-boost-just-16-minutes-per-week-claims-study?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI&apos;s Productivity Boost?  Just 16 Minutes Per Week, Claims Study](https://it.slashdot.org/story/26/03/14/0539247/ais-productivity-boost-just-16-minutes-per-week-claims-study?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-14, 14:34:00](https://science.slashdot.org/story/26/03/14/033215/us-state-bans-on-lab-grown-meats-challenged-in-court?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [U.S. State Bans on Lab-Grown Meats Challenged in Court](https://science.slashdot.org/story/26/03/14/033215/us-state-bans-on-lab-grown-meats-challenged-in-court?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-14, 13:59:58](https://news.ycombinator.com/item?id=47376767) - [Montana passes Right to Compute act (2025)](https://www.westernmt.news/2025/04/21/montana-leads-the-nation-with-groundbreaking-right-to-compute-act/)
* [2026-03-14, 13:41:25](https://news.ycombinator.com/item?id=47376584) - [Show HN: GitAgent – An open standard that turns any Git repo into an AI agent](https://www.gitagent.sh/)
* [2026-03-14, 13:31:43](https://lobste.rs/s/u3cc1e/compose_key_is_magic) - [The Compose key is magic](https://crescentro.se/posts/compose-key/)
* [2026-03-14, 13:19:00](https://soylentnews.org/article.pl?sid=26/03/13/0430253&amp;from=rss) - [Adobe Plunges to 7 Year Low on CEO Resignation, Muted Forecast](https://soylentnews.org/article.pl?sid=26/03/13/0430253&amp;from=rss)
* [2026-03-14, 13:11:34](https://lobste.rs/s/rmemq6/guide_vim_pack_neovim_built_plugin) - [A Guide to vim.pack (Neovim built-in plugin manager)](https://echasnovski.com/blog/2026-03-13-a-guide-to-vim-pack)
* [2026-03-14, 12:00:34](https://lobste.rs/s/vnkkp5/baochip_what_it_is_why_i_m_doing_it_now_how_it) - [Baochip: What It Is, Why I&apos;m Doing It Now, and How It Came About](https://www.crowdsupply.com/baochip/dabao/updates/what-it-is-why-im-doing-it-now-and-how-it-came-about)
* [2026-03-14, 11:20:04](https://lobste.rs/s/k0cm8c/getting_started_with_claude_for_software) - [Getting started with Claude for software development](https://steveklabnik.com/writing/getting-started-with-claude-for-software-development/)
* [2026-03-14, 11:00:00](https://tech.slashdot.org/story/26/03/14/012226/meta-plans-sweeping-layoffs-as-ai-costs-mount?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Plans Sweeping Layoffs As AI Costs Mount](https://tech.slashdot.org/story/26/03/14/012226/meta-plans-sweeping-layoffs-as-ai-costs-mount?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-14, 09:38:37](https://news.ycombinator.com/item?id=47374924) - [Mathematics Distillation Challenge – Equational Theories](https://terrytao.wordpress.com/2026/03/13/mathematics-distillation-challenge-equational-theories/)
* [2026-03-14, 09:14:51](https://news.ycombinator.com/item?id=47374796) - [Starlink militarization and its impact on global strategic stability (2023)](https://interpret.csis.org/translations/starlink-militarization-and-its-impact-on-global-strategic-stability/)
* [2026-03-14, 08:40:09](https://lobste.rs/s/dempb5/emacs_vim_age_ai) - [Emacs and Vim in the Age of AI](https://batsov.com/articles/2026/03/09/emacs-and-vim-in-the-age-of-ai/)
* [2026-03-14, 08:38:00](https://soylentnews.org/article.pl?sid=26/03/13/0421208&amp;from=rss) - [14,000 Routers Are Infected by Malware That&apos;s Highly Resistant to Takedowns](https://soylentnews.org/article.pl?sid=26/03/13/0421208&amp;from=rss)
* [2026-03-14, 07:00:00](https://entertainment.slashdot.org/story/26/03/14/0048239/two-long-lost-episodes-of-doctor-who-found?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Two Long-Lost Episodes of &apos;Doctor Who&apos; Found](https://entertainment.slashdot.org/story/26/03/14/0048239/two-long-lost-episodes-of-doctor-who-found?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-14, 05:51:57](https://lobste.rs/s/ec6xnf/torturing_rustc_by_emulating_hkts) - [Torturing rustc by Emulating HKTs, Causing an Inductive Cycle and Borking the Compiler](https://www.harudagondi.space/blog/torturing-rustc-by-emulating-hkts/)
* [2026-03-14, 03:51:00](https://soylentnews.org/article.pl?sid=26/03/13/0413211&amp;from=rss) - [As Frank Yeary Retires From Intel, the Company Picks an Engineer to Chair its Board](https://soylentnews.org/article.pl?sid=26/03/13/0413211&amp;from=rss)
* [2026-03-14, 03:30:00](https://yro.slashdot.org/story/26/03/13/2111234/chatgpt-other-chatbots-approved-for-official-use-in-the-senate?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ChatGPT, Other Chatbots Approved For Official Use In the Senate](https://yro.slashdot.org/story/26/03/13/2111234/chatgpt-other-chatbots-approved-for-official-use-in-the-senate?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-14, 00:09:35](https://lobste.rs/s/ub7a5k/ode_bzip) - [An ode to bzip](https://purplesyringa.moe/blog/an-ode-to-bzip/)
* [2026-03-14, 00:06:05](https://lobste.rs/s/rb8pas/i_beg_you_follow_crocker_s_rules_even_if_you) - [I beg you to follow Crocker&apos;s Rules, even if you will be rude to me](https://lr0.org/blog/p/crocker/)
* [2026-03-13, 23:02:00](https://soylentnews.org/article.pl?sid=26/03/12/1111206&amp;from=rss) - [After Outages, Amazon to Make Senior Engineers Sign Off on AI-Assisted Changes](https://soylentnews.org/article.pl?sid=26/03/12/1111206&amp;from=rss)
* [2026-03-13, 23:00:00](https://it.slashdot.org/story/26/03/13/214229/instagram-discontinues-end-to-end-encryption-for-dms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Instagram Discontinues End-To-End Encryption For DMs](https://it.slashdot.org/story/26/03/13/214229/instagram-discontinues-end-to-end-encryption-for-dms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-13, 19:47:37](https://lobste.rs/s/i2xkrm/xml_is_cheap_dsl) - [XML is a cheap DSL](https://unplannedobsolescence.com/blog/xml-cheap-dsl/)
* [2026-03-13, 18:19:00](https://soylentnews.org/article.pl?sid=26/03/12/1023220&amp;from=rss) - [Online Intelligence Dashboards (Aka, More AI Slop?)](https://soylentnews.org/article.pl?sid=26/03/12/1023220&amp;from=rss)
* [2026-03-13, 17:19:01](https://news.ycombinator.com/item?id=47367129) - [1M context is now generally available for Opus 4.6 and Sonnet 4.6](https://claude.com/blog/1m-context-ga)
* [2026-03-13, 15:15:03](https://lobste.rs/s/zcmoab/windows_11_after_two_decades_macos_okay) - [Windows 11 after two decades of macOS: okay, but also awful](https://rakhim.exotext.com/windows-11-experience)
* [2026-03-13, 13:37:00](https://soylentnews.org/article.pl?sid=26/03/12/1011221&amp;from=rss) - [LEGO&apos;s 0.002mm Specification and It&apos;s Implications for Manufacturing](https://soylentnews.org/article.pl?sid=26/03/12/1011221&amp;from=rss)
* [2026-03-13, 11:41:55](https://lobste.rs/s/ddrcpa/i_traced_2_billion_nonprofit_grants_45) - [I traced $2 billion in nonprofit grants and 45 states of lobbying records to figure out who&apos;s behind the age verification bills](https://www.reddit.com/r/linux/s/WqwsCnFE8E)
* [2026-03-13, 08:52:00](https://soylentnews.org/article.pl?sid=26/03/12/107259&amp;from=rss) - [Infinity Train Got 14.5 MWh Battery That, Ideally, Never Needs Charging](https://soylentnews.org/article.pl?sid=26/03/12/107259&amp;from=rss)
* [2026-03-13, 04:09:00](https://soylentnews.org/article.pl?sid=26/03/11/2010247&amp;from=rss) - [Ig Nobels Ceremony Moves to Europe Over Security Concerns](https://soylentnews.org/article.pl?sid=26/03/11/2010247&amp;from=rss)
* [2026-03-12, 23:23:00](https://soylentnews.org/article.pl?sid=26/03/11/164207&amp;from=rss) - [Is Low Fertility Really an Economic Threat?](https://soylentnews.org/article.pl?sid=26/03/11/164207&amp;from=rss)
* [2026-03-12, 18:39:00](https://soylentnews.org/article.pl?sid=26/03/11/163209&amp;from=rss) - [OpenAI&apos;s Massive Stargate Data Center Canceled as Firm Can&apos;t Reach Terms With Oracle](https://soylentnews.org/article.pl?sid=26/03/11/163209&amp;from=rss)
* [2026-03-12, 13:57:00](https://soylentnews.org/article.pl?sid=26/03/11/1558207&amp;from=rss) - [Digital Targeting Creeps Out Customers](https://soylentnews.org/article.pl?sid=26/03/11/1558207&amp;from=rss)
* [2026-03-12, 09:11:00](https://soylentnews.org/article.pl?sid=26/03/11/0450209&amp;from=rss) - [Why the US is Using a Cheap Iranian Drone Against the Country Itself](https://soylentnews.org/article.pl?sid=26/03/11/0450209&amp;from=rss)
* [2026-03-12, 05:40:14](https://news.ycombinator.com/item?id=47346920) - [Making Sense of the DXY](https://dm13450.github.io/2026/03/10/Making-Sense-of-the-DXY.html)
* [2026-03-12, 04:23:00](https://soylentnews.org/article.pl?sid=26/03/11/0135252&amp;from=rss) - [Are Consumers Doomed to Pay More for Electricity Due to Data Center Buildouts?](https://soylentnews.org/article.pl?sid=26/03/11/0135252&amp;from=rss)
* [2026-03-11, 23:36:00](https://soylentnews.org/article.pl?sid=26/03/11/0138245&amp;from=rss) - [Iranian Drone Strikes Hit Three AWS Data Centers in the UAE and Bahrain](https://soylentnews.org/article.pl?sid=26/03/11/0138245&amp;from=rss)
* [2026-03-11, 18:54:00](https://soylentnews.org/article.pl?sid=26/03/11/0441214&amp;from=rss) - [An Unexpected Discovery Just Uncovered Metals Tech Companies Are Desperate for](https://soylentnews.org/article.pl?sid=26/03/11/0441214&amp;from=rss)
* [2026-03-11, 18:21:58](https://news.ycombinator.com/item?id=47339219) - [Baochip-1x: What it is, why I&apos;m doing it now and how it came about](https://www.crowdsupply.com/baochip/dabao/updates/what-it-is-why-im-doing-it-now-and-how-it-came-about)
* [2026-03-11, 16:17:42](https://news.ycombinator.com/item?id=47337568) - [Refinement Modeling and Verification of RISC-V Assembly Using Knuckledragger](https://www.philipzucker.com/refine_assembly/)
* [2026-03-11, 15:42:26](https://news.ycombinator.com/item?id=47337087) - [A look inside Dialector, filmmaker Chris Marker&apos;s chatbot from 1988](https://kubicki.org/letters/the-festival-of-the-machines/)
* [2026-03-11, 14:10:31](https://news.ycombinator.com/item?id=47335796) - [A Recursive Algorithm to Render Signed Distance Fields](https://pointersgonewild.com/2026-03-06-a-recursive-algorithm-to-render-signed-distance-fields/)
* [2026-03-11, 14:03:00](https://soylentnews.org/article.pl?sid=26/03/09/1454227&amp;from=rss) - [Trump Gets Data Center Companies to Pledge to Pay for Power Generation](https://soylentnews.org/article.pl?sid=26/03/09/1454227&amp;from=rss)
* [2026-03-11, 09:17:00](https://soylentnews.org/article.pl?sid=26/03/09/1451208&amp;from=rss) - [The Cybertruck is More Explosive Than the Ford Pinto](https://soylentnews.org/article.pl?sid=26/03/09/1451208&amp;from=rss)
* [2026-03-11, 04:32:00](https://soylentnews.org/article.pl?sid=26/03/09/096203&amp;from=rss) - [Ancient Clay Hidden Under Japan Caused Rupture That Triggered the 2011 Earthquake and Tsunami](https://soylentnews.org/article.pl?sid=26/03/09/096203&amp;from=rss)
