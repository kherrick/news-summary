# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Advances

* [Apple's First 50 Years Celebrated - Including How Steve Jobs Finally Accepted an 'Open' App Store](https://apple.slashdot.org/story/26/04/05/0628250/apples-first-50-years-celebrated---including-how-steve-jobs-finally-accepted-an-open-app-store?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Comments](https://apple.slashdot.org/story/26/04/05/0628250/apples-first-50-years-celebrated---including-how-steve-jobs-finally-accepted-an-open-app-store?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [VitruvianOS 0.3 Debuts as Haiku-Inspired Linux OS Without X11 or Wayland](https://soylentnews.org/article.pl?sid=26/04/03/040255&amp;from=rss) - [Comments](https://soylentnews.org/article.pl?sid=26/04/03/040255&amp;from=rss)

* [Top NPM Maintainers Targeted with AI Deepfakes in Massive Supply-Chain Attack, Axios Briefly Compromised](https://it.slashdot.org/story/26/04/05/0316250/top-npm-maintainers-targeted-with-ai-deepfakes-in-massive-supply-chain-attack-axios-briefly-compromised?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Comments](https://it.slashdot.org/story/26/04/05/0316250/top-npm-maintainers-targeted-with-ai-deepfakes-in-massive-supply-chain-attack-axios-briefly-compromised?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Microsoft Pulls Then Re-Issues Windows 11 Preview Update.  Also Begins Force-Updating Windows 11](https://tech.slashdot.org/story/26/04/05/001246/microsoft-pulls-then-re-issues-windows-11-preview-update-also-begins-force-updating-windows-11?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Comments](https://tech.slashdot.org/story/26/04/05/001246/microsoft-pulls-then-re-issues-windows-11-preview-update-also-begins-force-updating-windows-11?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Artificial Intelligence and Open Source

* [Rethinking open source mentorship in the AI era](https://github.blog/open-source/maintainers/rethinking-open-source-mentorship-in-the-ai-era/) - [Comments](https://lobste.rs/s/3m7sbl/rethinking_open_source_mentorship_ai_era)

* [Writing Lisp is AI Resistant and I'm Sad — Dan's Musings](https://blog.djhaskin.com/blog/writing-lisp-is-ai-resistant-and-im-sad/) - [Comments](https://lobste.rs/s/hfwu86/writing_lisp_is_ai_resistant_i_m_sad_dan_s)

* ['Cognitive Surrender' Leads AI Users To Abandon Logical Thinking, Research Finds](https://science.slashdot.org/story/26/04/03/2334204/cognitive-surrender-leads-ai-users-to-abandon-logical-thinking-research-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Comments](https://science.slashdot.org/story/26/04/03/2334204/cognitive-surrender-leads-ai-users-to-abandon-logical-thinking-research-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Historical and Niche Tech Tools

* [Modern Generic SVGA driver for Windows 3.1](https://github.com/PluMGMK/vbesvga.drv) - [Comments](https://news.ycombinator.com/item?id=47646363)

* [Making Gamedev Tooling For Windows 3.1 in Turbo C++](https://www.youtube.com/watch?v=-7mc-D5V4L8) - [Comments](https://lobste.rs/s/gx4ato/making_gamedev_tooling_for_windows_3_1)

* [Running DOOM Over DNS Queries](https://soylentnews.org/article.pl?sid=26/03/30/154227&amp;from=rss) - [Comments](https://soylentnews.org/article.pl?sid=26/03/30/154227&amp;from=rss)

* [Build your own Dial-up ISP with a Raspberry Pi](https://www.jeffgeerling.com/blog/2026/build-your-own-dial-up-isp-with-a-raspberry-pi/) - [Comments](https://lobste.rs/s/s04of3/build_your_own_dial_up_isp_with_raspberry)

## Developer Insights and Tools

* [Components of a Coding Agent](https://magazine.sebastianraschka.com/p/components-of-a-coding-agent) - [Comments](https://news.ycombinator.com/item?id=47638810)

* [The CMS is dead, long live the CMS](https://next.jazzsequence.com/posts/the-cms-is-dead-long-live-the-cms) - [Comments](https://news.ycombinator.com/item?id=47638075)

* [How many products does Microsoft have named 'Copilot'?](https://teybannerman.com/strategy/2026/03/31/how-many-microsoft-copilot-are-there.html) - [Comments](https://news.ycombinator.com/item?id=47642569)

## AI and Security Concerns

* [GitHub to Use User Data for AI Training by Default](https://soylentnews.org/article.pl?sid=26/04/02/0226234&amp;from=rss) - [Comments](https://soylentnews.org/article.pl?sid=26/04/02/0226234&amp;from=rss)

* [AI Is Coming For Your Online Gaming Servers Next](https://games.slashdot.org/story/26/04/03/2024233/ai-is-coming-for-your-online-gaming-servers-next?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Comments](https://games.slashdot.org/story/26/04/03/2024233/ai-is-coming-for-your-online-gaming-servers-next?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

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

* [2026-04-05, 07:34:00](https://apple.slashdot.org/story/26/04/05/0628250/apples-first-50-years-celebrated---including-how-steve-jobs-finally-accepted-an-open-app-store?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple&apos;s First 50 Years Celebrated - Including How Steve Jobs Finally Accepted an &apos;Open&apos; App Store](https://apple.slashdot.org/story/26/04/05/0628250/apples-first-50-years-celebrated---including-how-steve-jobs-finally-accepted-an-open-app-store?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-05, 06:49:00](https://soylentnews.org/article.pl?sid=26/04/03/040255&amp;from=rss) - [VitruvianOS 0.3 Debuts as Haiku-Inspired Linux OS Without X11 or Wayland](https://soylentnews.org/article.pl?sid=26/04/03/040255&amp;from=rss)
* [2026-04-05, 06:45:23](https://lobste.rs/s/3m7sbl/rethinking_open_source_mentorship_ai_era) - [Rethinking open source mentorship in the AI era](https://github.blog/open-source/maintainers/rethinking-open-source-mentorship-in-the-ai-era/)
* [2026-04-05, 05:37:00](https://soylentnews.org/breakingnews/article.pl?sid=26/04/05/0541233&amp;from=rss) - [2nd Crew Member of F15E Has Been Rescued.](https://soylentnews.org/breakingnews/article.pl?sid=26/04/05/0541233&amp;from=rss)
* [2026-04-05, 05:28:41](https://news.ycombinator.com/item?id=47646363) - [Modern Generic SVGA driver for Windows 3.1](https://github.com/PluMGMK/vbesvga.drv)
* [2026-04-05, 04:36:01](https://lobste.rs/s/hfwu86/writing_lisp_is_ai_resistant_i_m_sad_dan_s) - [Writing Lisp is AI Resistant and I&apos;m Sad — Dan&apos;s Musings](https://blog.djhaskin.com/blog/writing-lisp-is-ai-resistant-and-im-sad/)
* [2026-04-05, 03:47:51](https://lobste.rs/s/05o8yu/if_you_thought_speed_writing_code_was_your) - [If you thought the speed of writing code was your problem - you have bigger problems](https://debuggingleadership.com/blog/if-you-thought-the-speed-of-writing-code-was-your-problem-you-have-bigger-problems)
* [2026-04-05, 03:34:00](https://it.slashdot.org/story/26/04/05/0316250/top-npm-maintainers-targeted-with-ai-deepfakes-in-massive-supply-chain-attack-axios-briefly-compromised?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Top NPM Maintainers Targeted with AI Deepfakes in Massive Supply-Chain Attack, Axios Briefly Compromised](https://it.slashdot.org/story/26/04/05/0316250/top-npm-maintainers-targeted-with-ai-deepfakes-in-massive-supply-chain-attack-axios-briefly-compromised?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-05, 02:02:00](https://soylentnews.org/article.pl?sid=26/04/03/0357220&amp;from=rss) - [Investigating 3D-Printed Metals for Aeronautical Engineering](https://soylentnews.org/article.pl?sid=26/04/03/0357220&amp;from=rss)
* [2026-04-05, 01:54:29](https://news.ycombinator.com/item?id=47645432) - [Introduction to Computer Music (2009) [pdf]](https://composerprogrammer.com/introductiontocomputermusic.pdf)
* [2026-04-05, 01:53:07](https://lobste.rs/s/uai6zz/setting_up_atkey_pro_usb_fingerprint) - [setting up the atkey.pro usb fingerprint reader in linux -- this should also work for any fido2 u2p usb fingerprint reader; maybe even those $20 ones](https://gist.github.com/charmparticle/a3f3ccb804f9f79115e9d88892363e7f)
* [2026-04-05, 01:34:00](https://tech.slashdot.org/story/26/04/05/001246/microsoft-pulls-then-re-issues-windows-11-preview-update-also-begins-force-updating-windows-11?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Pulls Then Re-Issues Windows 11 Preview Update.  Also Begins Force-Updating Windows 11](https://tech.slashdot.org/story/26/04/05/001246/microsoft-pulls-then-re-issues-windows-11-preview-update-also-begins-force-updating-windows-11?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-05, 01:32:28](https://news.ycombinator.com/item?id=47645305) - [Demonstrating Real Time AV2 Decoding on Consumer Laptops](http://aomedia.org/blog%20posts/Demonstrating-Real-Time-AV2-Decoding-on-Consumer-Laptops/)
* [2026-04-05, 01:22:36](https://lobste.rs/s/uvd41y/what_are_senders_good_for_anyway_2024) - [What are Senders Good For, Anyway? (2024)](https://ericniebler.com/2024/02/04/what-are-senders-good-for-anyway/)
* [2026-04-05, 00:40:18](https://news.ycombinator.com/item?id=47645025) - [Show HN: Contrapunk – Real-time counterpoint harmony from guitar input, in Rust](https://contrapunk.com/)
* [2026-04-05, 00:13:55](https://news.ycombinator.com/item?id=47644864) - [AWS engineer reports PostgreSQL perf halved by Linux 7.0, fix may not be easy](https://www.phoronix.com/news/Linux-7.0-AWS-PostgreSQL-Drop)
* [2026-04-04, 23:39:44](https://news.ycombinator.com/item?id=47644667) - [Nvim-treesitter (13K+ Stars) is Archived](https://github.com/nvim-treesitter/nvim-treesitter/discussions/8627)
* [2026-04-04, 23:18:54](https://news.ycombinator.com/item?id=47644566) - [Advice to young people, the lies I tell myself (2024)](https://jxnl.co/writing/2024/06/01/advice-to-young-people/)
* [2026-04-04, 22:57:44](https://news.ycombinator.com/item?id=47644406) - [German implementation of eIDAS will require an Apple/Google account to function](https://bmi.usercontent.opencode.de/eudi-wallet/wallet-development-documentation-public/latest/architecture-concept/06-mobile-devices/02-mdvm/)
* [2026-04-04, 22:36:09](https://lobste.rs/s/gx4ato/making_gamedev_tooling_for_windows_3_1) - [Making Gamedev Tooling For Windows 3.1 in Turbo C++](https://www.youtube.com/watch?v=-7mc-D5V4L8)
* [2026-04-04, 22:34:00](https://news.slashdot.org/story/26/04/04/2055256/americas-cia-recruited-irans-nuclear-scientists---by-threatening-to-kill-them?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [America&apos;s CIA Recruited Iran&apos;s Nuclear Scientists - By Threatening To Kill Them](https://news.slashdot.org/story/26/04/04/2055256/americas-cia-recruited-irans-nuclear-scientists---by-threatening-to-kill-them?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-04, 21:34:00](https://tech.slashdot.org/story/26/04/04/0547259/before-webcomics-selling-political-cartoons-on-bbses-in-1992?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Before Webcomics: Selling Political Cartoons On BBSes In 1992](https://tech.slashdot.org/story/26/04/04/0547259/before-webcomics-selling-political-cartoons-on-bbses-in-1992?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-04, 21:18:00](https://soylentnews.org/article.pl?sid=26/04/03/0351210&amp;from=rss) - [Apple Requires Device-Level Age Verification in the UK Now. Could the US Be Next?](https://soylentnews.org/article.pl?sid=26/04/03/0351210&amp;from=rss)
* [2026-04-04, 20:49:42](https://lobste.rs/s/fqjzje/value_numbering) - [Value numbering](https://bernsteinbear.com/blog/value-numbering/)
* [2026-04-04, 20:34:00](https://it.slashdot.org/story/26/04/04/0420240/are-employers-using-your-data-to-figure-out-the-lowest-salary-youll-accept?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Are Employers Using Your Data To Figure Out the Lowest Salary You&apos;ll Accept?](https://it.slashdot.org/story/26/04/04/0420240/are-employers-using-your-data-to-figure-out-the-lowest-salary-youll-accept?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-04, 20:31:56](https://lobste.rs/s/5kuph5/cathedral_bazaar_winchester_mystery) - [The Cathedral, the Bazaar, and the Winchester Mystery House](https://www.dbreunig.com/2026/03/26/winchester-mystery-house.html)
* [2026-04-04, 19:43:54](https://news.ycombinator.com/item?id=47642601) - [Show HN: M. C. Escher spiral in WebGL inspired by 3Blue1Brown](https://static.laszlokorte.de/escher/)
* [2026-04-04, 19:39:43](https://news.ycombinator.com/item?id=47642569) - [How many products does Microsoft have named &apos;Copilot&apos;?](https://teybannerman.com/strategy/2026/03/31/how-many-microsoft-copilot-are-there.html)
* [2026-04-04, 19:34:00](https://slashdot.org/story/26/04/04/1919236/anthropic-announces-claude-subscribers-must-now-pay-extra-to-use-openclaw?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Announces Claude Subscribers Must Now Pay Extra to Use OpenClaw](https://slashdot.org/story/26/04/04/1919236/anthropic-announces-claude-subscribers-must-now-pay-extra-to-use-openclaw?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-04, 19:18:09](https://lobste.rs/s/o7ulwh/cva6_cfi_first_glance_at_risc_v_control) - [CVA6-CFI: A First Glance at RISC-V Control-Flow Integrity Extensions](https://arxiv.org/pdf/2602.04991)
* [2026-04-04, 18:36:53](https://lobste.rs/s/jr4acs/nvim_treesitter_repository_was_archived) - [The nvim-treesitter repository was archived](https://github.com/nvim-treesitter/nvim-treesitter)
* [2026-04-04, 18:34:00](https://slashdot.org/story/26/04/04/0535221/no-amd-is-not-buying-intel?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [No, AMD Is Not Buying Intel](https://slashdot.org/story/26/04/04/0535221/no-amd-is-not-buying-intel?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-04, 17:34:00](https://it.slashdot.org/story/26/04/04/0638246/amazon-must-negotiate-with-first-warehouse-workers-union-us-labor-board-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Must Negotiate With First Warehouse Workers Union, US Labor Board Rules](https://it.slashdot.org/story/26/04/04/0638246/amazon-must-negotiate-with-first-warehouse-workers-union-us-labor-board-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-04, 16:57:45](https://news.ycombinator.com/item?id=47640875) - [LLM Wiki – example of an \&quot;idea file\&quot;](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)
* [2026-04-04, 16:45:54](https://news.ycombinator.com/item?id=47640728) - [Show HN: A game where you build a GPU](https://jaso1024.com/mvidia/)
* [2026-04-04, 16:34:00](https://news.slashdot.org/story/26/04/04/0334217/the-document-foundation-removes-dozens-of-collabora-developers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Document Foundation Removes Dozens of Collabora Developers](https://news.slashdot.org/story/26/04/04/0334217/the-document-foundation-removes-dozens-of-collabora-developers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-04, 16:34:00](https://soylentnews.org/article.pl?sid=26/04/03/0343222&amp;from=rss) - [Artemis 2 - Roundup](https://soylentnews.org/article.pl?sid=26/04/03/0343222&amp;from=rss)
* [2026-04-04, 16:16:10](https://news.ycombinator.com/item?id=47640380) - [Apple approves driver that lets Nvidia eGPUs work with Arm Macs](https://www.theverge.com/tech/907003/apple-approves-driver-that-lets-nvidia-egpus-work-with-arm-macs)
* [2026-04-04, 15:42:27](https://lobste.rs/s/v7r423/where_can_i_find_old_internet) - [Where can I find the old internet?](https://lobste.rs/s/v7r423/where_can_i_find_old_internet)
* [2026-04-04, 15:18:58](https://news.ycombinator.com/item?id=47639779) - [Show HN: sllm – Split a GPU node with other developers, unlimited tokens](https://sllm.cloud)
* [2026-04-04, 14:53:16](https://news.ycombinator.com/item?id=47639567) - [Show HN: TurboQuant-WASM – Google&apos;s vector quantization in the browser](https://github.com/teamchong/turboquant-wasm)
* [2026-04-04, 14:20:21](https://news.ycombinator.com/item?id=47639303) - [Show HN: I made open source, zero power PCB hackathon badges](https://github.com/KaiPereira/Overglade-Badges)
* [2026-04-04, 14:18:06](https://news.ycombinator.com/item?id=47639291) - [The Indie Internet Index – submit your favorite sites](https://iii.social)
* [2026-04-04, 14:00:00](https://science.slashdot.org/story/26/04/03/2334204/cognitive-surrender-leads-ai-users-to-abandon-logical-thinking-research-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Cognitive Surrender&apos; Leads AI Users To Abandon Logical Thinking, Research Finds](https://science.slashdot.org/story/26/04/03/2334204/cognitive-surrender-leads-ai-users-to-abandon-logical-thinking-research-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-04, 13:34:43](https://lobste.rs/s/bor4wy/embarrassingly_simple_self) - [Embarrassingly Simple Self-Distillation Improves Code Generation](https://arxiv.org/abs/2604.01193)
* [2026-04-04, 13:16:33](https://news.ycombinator.com/item?id=47638810) - [Components of a Coding Agent](https://magazine.sebastianraschka.com/p/components-of-a-coding-agent)
* [2026-04-04, 11:46:00](https://soylentnews.org/article.pl?sid=26/04/03/0327238&amp;from=rss) - [Sony Shuts Down Nearly Its Entire Memory Card Business Due to Flash Shortage](https://soylentnews.org/article.pl?sid=26/04/03/0327238&amp;from=rss)
* [2026-04-04, 11:28:31](https://lobste.rs/s/xqttxu/absurd_production) - [Absurd In Production](https://lucumr.pocoo.org/2026/4/4/absurd-in-production/)
* [2026-04-04, 11:24:30](https://news.ycombinator.com/item?id=47638075) - [The CMS is dead, long live the CMS](https://next.jazzsequence.com/posts/the-cms-is-dead-long-live-the-cms)
* [2026-04-04, 11:00:00](https://tech.slashdot.org/story/26/04/03/207238/colorados-new-speed-camera-system-makes-waze-nearly-useless?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Colorado&apos;s New Speed Camera System Makes Waze Nearly Useless](https://tech.slashdot.org/story/26/04/03/207238/colorados-new-speed-camera-system-makes-waze-nearly-useless?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-04, 10:26:21](https://news.ycombinator.com/item?id=47637757) - [Embarrassingly simple self-distillation improves code generation](https://arxiv.org/abs/2604.01193)
* [2026-04-04, 09:21:44](https://lobste.rs/s/063ldo/why_lean) - [Why Lean?](https://leodemoura.github.io/blog/2026-4-2-why-lean/)
* [2026-04-04, 07:04:00](https://soylentnews.org/article.pl?sid=26/04/02/0226234&amp;from=rss) - [GitHub to Use User Data for AI Training by Default](https://soylentnews.org/article.pl?sid=26/04/02/0226234&amp;from=rss)
* [2026-04-04, 07:00:00](https://science.slashdot.org/story/26/04/03/2326236/artemis-ii-astronauts-pass-100000-miles-from-earth-on-voyage-to-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Artemis II Astronauts Pass 100,000 Miles From Earth On Voyage To the Moon](https://science.slashdot.org/story/26/04/03/2326236/artemis-ii-astronauts-pass-100000-miles-from-earth-on-voyage-to-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-04, 05:01:33](https://lobste.rs/s/8sqd2j/feature_has_never_worked_broken_auto_live) - [The Feature That Has Never Worked · A broken auto-live poller, and what perceived urgency does to Claude Code](https://christophermeiklejohn.com/ai/zabriskie/reliability/2026/04/03/the-feature-that-has-never-worked.html)
* [2026-04-04, 04:18:54](https://lobste.rs/s/wdq10i/your_code_is_worthless) - [Your code is worthless](https://nathanielfishel.substack.com/p/your-code-is-worthless)
* [2026-04-04, 03:30:00](https://games.slashdot.org/story/26/04/03/2024233/ai-is-coming-for-your-online-gaming-servers-next?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;AI&apos; Is Coming For Your Online Gaming Servers Next](https://games.slashdot.org/story/26/04/03/2024233/ai-is-coming-for-your-online-gaming-servers-next?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-04, 02:11:00](https://soylentnews.org/article.pl?sid=26/04/02/0224235&amp;from=rss) - [Quo Vadis, Humanitas?](https://soylentnews.org/article.pl?sid=26/04/02/0224235&amp;from=rss)
* [2026-04-04, 01:40:11](https://lobste.rs/s/exmliu/legibility_is_ruining_you) - [Legibility is Ruining You](https://jimmyhmiller.com/legibility-is-ruining-you)
* [2026-04-03, 23:00:00](https://tech.slashdot.org/story/26/04/03/2238241/iran-strikes-leave-amazon-availability-zones-hard-down-in-bahrain-and-dubai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Iran Strikes Leave Amazon Availability Zones &apos;Hard Down&apos; In Bahrain and Dubai](https://tech.slashdot.org/story/26/04/03/2238241/iran-strikes-leave-amazon-availability-zones-hard-down-in-bahrain-and-dubai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-03, 22:55:24](https://news.ycombinator.com/item?id=47633396) - [Tell HN: Anthropic no longer allowing Claude Code subscriptions to use OpenClaw](https://news.ycombinator.com/item?id=47633396)
* [2026-04-03, 21:35:00](https://soylentnews.org/article.pl?sid=26/04/02/0220210&amp;from=rss) - [Scientists Just Spotted a Black Hole Collision That Defies All Odds](https://soylentnews.org/article.pl?sid=26/04/02/0220210&amp;from=rss)
* [2026-04-03, 20:49:12](https://lobste.rs/s/uagdwq/why_nobody_can_verify_what_booted_your) - [Why Nobody Can Verify What Booted Your Server](https://unmitigatedrisk.com/?p=1231)
* [2026-04-03, 17:36:21](https://lobste.rs/s/vintrg/making_type_checker_lsp_for_nix) - [Making a Type Checker/LSP for Nix](https://johns.codes/blog/making-a-type-checker-lsp-for-nix)
* [2026-04-03, 16:43:00](https://soylentnews.org/article.pl?sid=26/04/02/0214254&amp;from=rss) - [Google Has a Secret Reference Desk. Here&apos;s How to Use It.](https://soylentnews.org/article.pl?sid=26/04/02/0214254&amp;from=rss)
* [2026-04-03, 16:09:55](https://lobste.rs/s/vplcij/baby_s_second_garbage_collector) - [Baby’s Second Garbage Collector](https://www.matheusmoreira.com/articles/babys-second-garbage-collector)
* [2026-04-03, 15:37:25](https://lobste.rs/s/s04of3/build_your_own_dial_up_isp_with_raspberry) - [Build your own Dial-up ISP with a Raspberry Pi](https://www.jeffgeerling.com/blog/2026/build-your-own-dial-up-isp-with-a-raspberry-pi/)
* [2026-04-03, 14:50:47](https://lobste.rs/s/lh9rmv/claude_code_found_linux_vulnerability) - [Claude Code Found a Linux Vulnerability Hidden for 23 Years](https://mtlynch.io/claude-code-found-linux-vulnerability/)
* [2026-04-03, 14:30:48](https://lobste.rs/s/3fprl8/slap_functional_concatenative_language) - [Slap: Functional Concatenative Language... with a Borrow Checker?](https://taylor.town/slap-000)
* [2026-04-03, 12:17:43](https://lobste.rs/s/rw62j7/lisette_rust_syntax_go_runtime) - [Lisette — Rust syntax, Go runtime](https://lisette.run)
* [2026-04-03, 12:00:00](https://soylentnews.org/article.pl?sid=26/03/31/1458218&amp;from=rss) - [Attorney Hit With Historic Fine for Citing AI-Generated Cases](https://soylentnews.org/article.pl?sid=26/03/31/1458218&amp;from=rss)
* [2026-04-03, 09:53:22](https://lobste.rs/s/kltbuq/adobe_wrote_my_hosts_file) - [Adobe wrote to my hosts file](https://www.reddit.com/r/webdev/comments/1sb6hzk/adobe_wrote_to_my_hosts_file_ive_never_had_an_app/)
* [2026-04-03, 07:17:00](https://soylentnews.org/article.pl?sid=26/03/31/1439256&amp;from=rss) - [Wikipedia Has Banned AI-Generated Articles](https://soylentnews.org/article.pl?sid=26/03/31/1439256&amp;from=rss)
* [2026-04-03, 02:31:00](https://soylentnews.org/article.pl?sid=26/03/31/1431219&amp;from=rss) - [Ancient Alphabets, New Insights: Researchers Uncover Hidden Links Among the Letters](https://soylentnews.org/article.pl?sid=26/03/31/1431219&amp;from=rss)
* [2026-04-02, 21:41:00](https://soylentnews.org/article.pl?sid=26/03/31/1413235&amp;from=rss) - [Why October 1, 2026, Could be the Day SSL/TLS Certificates &apos;Break the Internet&apos;](https://soylentnews.org/article.pl?sid=26/03/31/1413235&amp;from=rss)
* [2026-04-02, 17:00:00](https://soylentnews.org/article.pl?sid=26/03/31/140207&amp;from=rss) - [Ubuntu MATE Founder Martin Wimpress Steps Back After 12 Years](https://soylentnews.org/article.pl?sid=26/03/31/140207&amp;from=rss)
* [2026-04-02, 15:53:45](https://news.ycombinator.com/item?id=47616157) - [Software never had a soul](https://www.jmduke.com/posts/software-never-had-a-soul.html)
* [2026-04-02, 13:54:12](https://news.ycombinator.com/item?id=47614532) - [Ruckus: Racket for iOS](https://ruckus.defn.io/)
* [2026-04-02, 12:42:00](https://soylentnews.org/article.pl?sid=26/03/31/147230&amp;from=rss) - [Euro-Office is a Free, Open-Source Alternative to Microsoft 365 and Google Docs](https://soylentnews.org/article.pl?sid=26/03/31/147230&amp;from=rss)
* [2026-04-02, 11:44:01](https://news.ycombinator.com/item?id=47613118) - [Show HN: I built a small app for FSI German Course](https://detawk.com/)
* [2026-04-02, 08:13:00](https://soylentnews.org/article.pl?sid=26/03/31/1354212&amp;from=rss) - [World&apos;s smallest QR code, smaller than bacteria, could store data for centuries  ](https://soylentnews.org/article.pl?sid=26/03/31/1354212&amp;from=rss)
* [2026-04-02, 03:09:00](https://soylentnews.org/article.pl?sid=26/03/31/1352230&amp;from=rss) - [Google Won&apos;t Block Loading Unverified Apps, but Adds Friction to the Process](https://soylentnews.org/article.pl?sid=26/03/31/1352230&amp;from=rss)
* [2026-04-01, 22:34:00](https://soylentnews.org/article.pl?sid=26/03/30/1515244&amp;from=rss) - [Tails Linux 7.6 Released: Introduces Automatic Tor Bridges to Bypass Censorship](https://soylentnews.org/article.pl?sid=26/03/30/1515244&amp;from=rss)
* [2026-04-01, 20:38:24](https://news.ycombinator.com/item?id=47606244) - [Training mRNA Language Models Across 25 Species for $165](https://news.ycombinator.com/item?id=47606244)
* [2026-04-01, 18:47:48](https://news.ycombinator.com/item?id=47604887) - [Electrical transformer manufacturing is throttling the electrified future](https://www.bloomberg.com/features/2025-bottlenecks-transformers/)
* [2026-04-01, 17:53:00](https://soylentnews.org/article.pl?sid=26/03/30/1513241&amp;from=rss) - [How Graphene Oxide Kills Bacteria While Sparing Human Cells](https://soylentnews.org/article.pl?sid=26/03/30/1513241&amp;from=rss)
* [2026-04-01, 17:32:00](https://soylentnews.org/article.pl?sid=26/04/01/1726213&amp;from=rss) - [Artemis II Mission is About to Fly Humans to the Moon — Here&apos;s the Science They&apos;ll Do](https://soylentnews.org/article.pl?sid=26/04/01/1726213&amp;from=rss)
* [2026-04-01, 13:12:00](https://soylentnews.org/article.pl?sid=26/03/30/159237&amp;from=rss) - [US Foreign Router Ban Criticized for Being ‘Industrial Policy Disguised as Cybersecurity’](https://soylentnews.org/article.pl?sid=26/03/30/159237&amp;from=rss)
* [2026-04-01, 09:54:18](https://news.ycombinator.com/item?id=47598835) - [Rubysyn: Clarifying Ruby&apos;s Syntax and Semantics](https://github.com/squadette/rubysyn/blob/master/README.md)
* [2026-04-01, 08:32:00](https://soylentnews.org/article.pl?sid=26/03/30/154227&amp;from=rss) - [Running DOOM Over DNS Queries](https://soylentnews.org/article.pl?sid=26/03/30/154227&amp;from=rss)
* [2026-04-01, 03:44:00](https://soylentnews.org/article.pl?sid=26/03/30/151240&amp;from=rss) - [Ranked: The World’s Most Surveilled Cities](https://soylentnews.org/article.pl?sid=26/03/30/151240&amp;from=rss)
* [2026-04-01, 01:31:46](https://news.ycombinator.com/item?id=47595695) - [OpenScreen is an open-source alternative to Screen Studio](https://github.com/siddharthvaddem/openscreen)
