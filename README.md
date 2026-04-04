# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Digital Trends

* [Before Webcomics: Selling Political Cartoons On BBSes In 1992](https://tech.slashdot.org/story/26/04/04/0547259/before-webcomics-selling-political-cartoons-on-bbses-in-1992?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A historical exploration of how political cartoons were monetized through BBS platforms in the pre-webcomic era.

* [Seat Pricing Is Dead](http://seatpricing.rip/) - An analysis questioning the future of traditional seat pricing models in the service industry.

* [Apple Requires Device-Level Age Verification in the UK Now. Could the US Be Next?](https://soylentnews.org/article.pl?sid=26/04/03/0351210&from=rss) - Apple's new age-verification mandate for UK devices sparks concerns about its potential implications elsewhere.

* [Your code is worthless](https://nathanielfishel.substack.com/p/your-code-is-worthless) - A provocative take on the fleeting value of software code in the programming world.

* [The CMS is dead, long live the CMS](https://next.jazzsequence.com/posts/the-cms-is-dead-long-live-the-cms) - A perspective on the changing landscape of content management systems as platforms evolve.

* [Building a GPU: Show HN](https://jaso1024.com/mvidia/) - A fascinating game allowing users to build and understand graphics processing units.

* [TurboQuant-WASM – Google&apos;s vector quantization in the browser](https://github.com/teamchong/turboquant-wasm) - Introducing a tool for implementing Google's vector quantization directly in web browsers.

* [Emotion concepts and their function in a large language model](https://www.anthropic.com/research/emotion-concepts-function) - A deep dive into how language models process and utilize emotion concepts.

* [GitHub to Use User Data for AI Training by Default](https://soylentnews.org/article.pl?sid=26/04/02/0226234&from=rss) - Discussion of GitHub's decision to leverage user data for training artificial intelligence models.

## Labor and Market Dynamics

* [Are Employers Using Your Data To Figure Out the Lowest Salary You&apos;ll Accept?](https://it.slashdot.org/story/26/04/04/0420240/are-employers-using-your-data-to-figure-out-the-lowest-salary-youll-accept?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The ethical concerns surrounding employer use of personal data for determining salary thresholds.

* [Amazon Must Negotiate With First Warehouse Workers Union, US Labor Board Rules](https://it.slashdot.org/story/26/04/04/0638246/amazon-must-negotiate-with-first-warehouse-workers-union-us-labor-board-rules?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A landmark decision mandating Amazon to negotiate with its first warehouse workers' union.

## Scientific Discoveries and Insights

* [Scientists observe an immune signaling complex forming inside cells](https://news.stanford.edu/stories/2026/03/immune-response-inside-cells-inflammation-research) - Groundbreaking research on cellular inflammation mechanisms and immune response.

* [Scientists Just Spotted a Black Hole Collision That Defies All Odds](https://soylentnews.org/article.pl?sid=26/04/02/0220210&from=rss) - Astronomers uncover an unusual black hole collision that challenges existing cosmic theories.

## Business and Technology Conflicts

* [Anthropic Announces Claude Subscribers Must Now Pay Extra to Use OpenClaw](https://slashdot.org/story/26/04/04/1919236/anthropic-announces-claude-subscribers-must-now-pay-extra-to-use-openclaw?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Controversy over Anthropic's pricing changes for its Claude subscription tiers.

* [Sony Shuts Down Nearly Its Entire Memory Card Business Due to Flash Shortage](https://soylentnews.org/article.pl?sid=26/04/03/0327238&from=rss) - Sony faces major setbacks in memory card production amid global flash shortages.

## Cultural and Historical Perspectives

* [The Cathedral, the Bazaar, and the Winchester Mystery House](https://www.dbreunig.com/2026/03/26/winchester-mystery-house.html) - A thought-provoking analogy drawing connections between open-source culture and unique architectural styles.

* [Plague Ships (2020)](https://www.afloat.com.au/feature/plague-ships/) - An exploration of historical plague ships and their relevance to modern times.

## Noteworthy Incidents and Events

* [How many products does Microsoft have named &apos;Copilot&apos;?](https://teybannerman.com/strategy/2026/03/31/how-many-microsoft-copilot-are-there.html) - A humorous take on Microsoft's extensive use of the 'Copilot' brand name.

* [Iranian missile blitz takes down AWS data centers in Bahrain and Dubai](https://www.tomshardware.com/tech-industry/iranian-missile-blitz-takes-down-aws-data-centers-in-bahrain-and-dubai-amazon-declares-hard-down-status-for-multiple-zones) - A geopolitical event leading to service disruptions at AWS data centers.

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

* [2026-04-04, 21:34:00](https://tech.slashdot.org/story/26/04/04/0547259/before-webcomics-selling-political-cartoons-on-bbses-in-1992?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Before Webcomics: Selling Political Cartoons On BBSes In 1992](https://tech.slashdot.org/story/26/04/04/0547259/before-webcomics-selling-political-cartoons-on-bbses-in-1992?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-04, 21:28:01](https://news.ycombinator.com/item?id=47643620) - [Seat Pricing Is Dead](http://seatpricing.rip/)
* [2026-04-04, 21:18:00](https://soylentnews.org/article.pl?sid=26/04/03/0351210&amp;from=rss) - [Apple Requires Device-Level Age Verification in the UK Now. Could the US Be Next?](https://soylentnews.org/article.pl?sid=26/04/03/0351210&amp;from=rss)
* [2026-04-04, 20:49:42](https://lobste.rs/s/fqjzje/value_numbering) - [Value numbering](https://bernsteinbear.com/blog/value-numbering/)
* [2026-04-04, 20:48:56](https://news.ycombinator.com/item?id=47643217) - [Microsoft to force updates to Windows 11 25H2 for PCs with older OS versions](https://www.tomshardware.com/software/windows/microsoft-forces-updates-to-windows-11-25h2-update-for-pcs-running-on-24h2)
* [2026-04-04, 20:34:00](https://it.slashdot.org/story/26/04/04/0420240/are-employers-using-your-data-to-figure-out-the-lowest-salary-youll-accept?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Are Employers Using Your Data To Figure Out the Lowest Salary You&apos;ll Accept?](https://it.slashdot.org/story/26/04/04/0420240/are-employers-using-your-data-to-figure-out-the-lowest-salary-youll-accept?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-04, 20:31:56](https://lobste.rs/s/5kuph5/cathedral_bazaar_winchester_mystery) - [The Cathedral, the Bazaar, and the Winchester Mystery House](https://www.dbreunig.com/2026/03/26/winchester-mystery-house.html)
* [2026-04-04, 19:39:43](https://news.ycombinator.com/item?id=47642569) - [How many products does Microsoft have named &apos;Copilot&apos;?](https://teybannerman.com/strategy/2026/03/31/how-many-microsoft-copilot-are-there.html)
* [2026-04-04, 19:34:00](https://slashdot.org/story/26/04/04/1919236/anthropic-announces-claude-subscribers-must-now-pay-extra-to-use-openclaw?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Announces Claude Subscribers Must Now Pay Extra to Use OpenClaw](https://slashdot.org/story/26/04/04/1919236/anthropic-announces-claude-subscribers-must-now-pay-extra-to-use-openclaw?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-04, 19:18:09](https://lobste.rs/s/o7ulwh/cva6_cfi_first_glance_at_risc_v_control) - [CVA6-CFI: A First Glance at RISC-V Control-Flow Integrity Extensions](https://arxiv.org/pdf/2602.04991)
* [2026-04-04, 18:36:53](https://lobste.rs/s/jr4acs/nvim_treesitter_repository_was_archived) - [The nvim-treesitter repository was archived](https://github.com/nvim-treesitter/nvim-treesitter)
* [2026-04-04, 18:34:00](https://slashdot.org/story/26/04/04/0535221/no-amd-is-not-buying-intel?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [No, AMD Is Not Buying Intel](https://slashdot.org/story/26/04/04/0535221/no-amd-is-not-buying-intel?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-04, 18:23:55](https://news.ycombinator.com/item?id=47641788) - [Iranian missile blitz takes down AWS data centers in Bahrain and Dubai](https://www.tomshardware.com/tech-industry/iranian-missile-blitz-takes-down-aws-data-centers-in-bahrain-and-dubai-amazon-declares-hard-down-status-for-multiple-zones)
* [2026-04-04, 18:06:24](https://news.ycombinator.com/item?id=47641615) - [Sopwith – 1984 Game (2000)](http://www.sopwith.org/)
* [2026-04-04, 17:52:55](https://news.ycombinator.com/item?id=47641464) - [Scientists observe an immune signaling complex forming inside cells](https://news.stanford.edu/stories/2026/03/immune-response-inside-cells-inflammation-research)
* [2026-04-04, 17:34:00](https://it.slashdot.org/story/26/04/04/0638246/amazon-must-negotiate-with-first-warehouse-workers-union-us-labor-board-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Must Negotiate With First Warehouse Workers Union, US Labor Board Rules](https://it.slashdot.org/story/26/04/04/0638246/amazon-must-negotiate-with-first-warehouse-workers-union-us-labor-board-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-04, 17:33:21](https://news.ycombinator.com/item?id=47641255) - [Plague Ships (2020)](https://www.afloat.com.au/feature/plague-ships/)
* [2026-04-04, 17:20:39](https://news.ycombinator.com/item?id=47641141) - [IBM 3270 Information Display System: Color and Programmed Symbols (1979) [pdf]](https://bitsavers.org/pdf/ibm/3278/GA33-3056-0_3270_Information_Display_System_Color_and_Programmed_Symbols_3278_3279_3287_Sep1979.pdf)
* [2026-04-04, 16:49:40](https://news.ycombinator.com/item?id=47640775) - [Why the most valuable things you know are things you cannot say](https://deadneurons.substack.com/p/why-the-most-valuable-things-you)
* [2026-04-04, 16:45:54](https://news.ycombinator.com/item?id=47640728) - [Show HN: A game where you build a GPU](https://jaso1024.com/mvidia/)
* [2026-04-04, 16:34:00](https://news.slashdot.org/story/26/04/04/0334217/the-document-foundation-removes-dozens-of-collabora-developers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Document Foundation Removes Dozens of Collabora Developers](https://news.slashdot.org/story/26/04/04/0334217/the-document-foundation-removes-dozens-of-collabora-developers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-04, 16:34:00](https://soylentnews.org/article.pl?sid=26/04/03/0343222&amp;from=rss) - [Artemis 2 - Roundup](https://soylentnews.org/article.pl?sid=26/04/03/0343222&amp;from=rss)
* [2026-04-04, 16:30:19](https://lobste.rs/s/gxtycj/what_kind_productivity_tools_do_you_use_if) - [What kind of productivity tools do you use, if any?](https://lobste.rs/s/gxtycj/what_kind_productivity_tools_do_you_use_if)
* [2026-04-04, 16:16:10](https://news.ycombinator.com/item?id=47640380) - [Apple approves driver that lets Nvidia eGPUs work with Arm Macs](https://www.theverge.com/tech/907003/apple-approves-driver-that-lets-nvidia-egpus-work-with-arm-macs)
* [2026-04-04, 15:42:27](https://lobste.rs/s/v7r423/where_can_i_find_old_internet) - [Where can I find the old internet?](https://lobste.rs/s/v7r423/where_can_i_find_old_internet)
* [2026-04-04, 15:18:58](https://news.ycombinator.com/item?id=47639779) - [Show HN: sllm – Split a GPU node with other developers, unlimited tokens](https://sllm.cloud)
* [2026-04-04, 15:14:06](https://news.ycombinator.com/item?id=47639727) - [When legal sports betting surges, so do Americans&apos; financial problems](https://www.npr.org/2026/04/04/nx-s1-5773354/legal-sports-betting-research-credit-bankruptcy)
* [2026-04-04, 14:53:16](https://news.ycombinator.com/item?id=47639567) - [Show HN: TurboQuant-WASM – Google&apos;s vector quantization in the browser](https://github.com/teamchong/turboquant-wasm)
* [2026-04-04, 14:48:26](https://news.ycombinator.com/item?id=47639524) - [Author of \&quot;Careless People\&quot; banned from saying anything negative about Meta](https://www.thetimes.com/uk/technology-uk/article/sarah-wynn-williams-careless-people-meta-nrffdfpmf)
* [2026-04-04, 14:18:06](https://news.ycombinator.com/item?id=47639291) - [The Indie Internet Index – submit your favorite sites](https://iii.social)
* [2026-04-04, 14:00:00](https://science.slashdot.org/story/26/04/03/2334204/cognitive-surrender-leads-ai-users-to-abandon-logical-thinking-research-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Cognitive Surrender&apos; Leads AI Users To Abandon Logical Thinking, Research Finds](https://science.slashdot.org/story/26/04/03/2334204/cognitive-surrender-leads-ai-users-to-abandon-logical-thinking-research-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-04, 13:34:43](https://lobste.rs/s/bor4wy/embarrassingly_simple_self) - [Embarrassingly Simple Self-Distillation Improves Code Generation](https://arxiv.org/abs/2604.01193)
* [2026-04-04, 13:16:33](https://news.ycombinator.com/item?id=47638810) - [Components of a Coding Agent](https://magazine.sebastianraschka.com/p/components-of-a-coding-agent)
* [2026-04-04, 12:00:38](https://news.ycombinator.com/item?id=47638270) - [Mbodi AI (YC P25) Is Hiring](https://www.ycombinator.com/companies/mbodi-ai/jobs/mf9L3sy-senior-robotics-engineer-systems-controls)
* [2026-04-04, 11:46:00](https://soylentnews.org/article.pl?sid=26/04/03/0327238&amp;from=rss) - [Sony Shuts Down Nearly Its Entire Memory Card Business Due to Flash Shortage](https://soylentnews.org/article.pl?sid=26/04/03/0327238&amp;from=rss)
* [2026-04-04, 11:28:31](https://lobste.rs/s/xqttxu/absurd_production) - [Absurd In Production](https://lucumr.pocoo.org/2026/4/4/absurd-in-production/)
* [2026-04-04, 11:24:30](https://news.ycombinator.com/item?id=47638075) - [The CMS is dead, long live the CMS](https://next.jazzsequence.com/posts/the-cms-is-dead-long-live-the-cms)
* [2026-04-04, 11:00:00](https://tech.slashdot.org/story/26/04/03/207238/colorados-new-speed-camera-system-makes-waze-nearly-useless?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Colorado&apos;s New Speed Camera System Makes Waze Nearly Useless](https://tech.slashdot.org/story/26/04/03/207238/colorados-new-speed-camera-system-makes-waze-nearly-useless?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-04, 10:26:21](https://news.ycombinator.com/item?id=47637757) - [Embarrassingly simple self-distillation improves code generation](https://arxiv.org/abs/2604.01193)
* [2026-04-04, 09:21:44](https://lobste.rs/s/063ldo/why_lean) - [Why Lean?](https://leodemoura.github.io/blog/2026-4-2-why-lean/)
* [2026-04-04, 09:04:19](https://news.ycombinator.com/item?id=47637287) - [Some Unusual Trees](https://thoughts.wyounas.com/p/some-unusual-trees)
* [2026-04-04, 07:04:00](https://soylentnews.org/article.pl?sid=26/04/02/0226234&amp;from=rss) - [GitHub to Use User Data for AI Training by Default](https://soylentnews.org/article.pl?sid=26/04/02/0226234&amp;from=rss)
* [2026-04-04, 07:00:00](https://science.slashdot.org/story/26/04/03/2326236/artemis-ii-astronauts-pass-100000-miles-from-earth-on-voyage-to-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Artemis II Astronauts Pass 100,000 Miles From Earth On Voyage To the Moon](https://science.slashdot.org/story/26/04/03/2326236/artemis-ii-astronauts-pass-100000-miles-from-earth-on-voyage-to-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-04, 06:30:25](https://news.ycombinator.com/item?id=47636435) - [Emotion concepts and their function in a large language model](https://www.anthropic.com/research/emotion-concepts-function)
* [2026-04-04, 05:01:33](https://lobste.rs/s/8sqd2j/feature_has_never_worked_broken_auto_live) - [The Feature That Has Never Worked · A broken auto-live poller, and what perceived urgency does to Claude Code](https://christophermeiklejohn.com/ai/zabriskie/reliability/2026/04/03/the-feature-that-has-never-worked.html)
* [2026-04-04, 04:18:54](https://lobste.rs/s/wdq10i/your_code_is_worthless) - [Your code is worthless](https://nathanielfishel.substack.com/p/your-code-is-worthless)
* [2026-04-04, 03:30:00](https://games.slashdot.org/story/26/04/03/2024233/ai-is-coming-for-your-online-gaming-servers-next?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;AI&apos; Is Coming For Your Online Gaming Servers Next](https://games.slashdot.org/story/26/04/03/2024233/ai-is-coming-for-your-online-gaming-servers-next?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-04, 02:11:00](https://soylentnews.org/article.pl?sid=26/04/02/0224235&amp;from=rss) - [Quo Vadis, Humanitas?](https://soylentnews.org/article.pl?sid=26/04/02/0224235&amp;from=rss)
* [2026-04-04, 02:10:13](https://lobste.rs/s/lqthae/functional_algorithms_verified) - [Functional Algorithms, Verified](https://www21.in.tum.de/teaching/fds/SS21/assets/book-draft.pdf)
* [2026-04-04, 01:40:11](https://lobste.rs/s/exmliu/legibility_is_ruining_you) - [Legibility is Ruining You](https://jimmyhmiller.com/legibility-is-ruining-you)
* [2026-04-03, 23:55:14](https://lobste.rs/s/59wywf/c89cc_sh_standalone_c89_elf64_compiler) - [c89cc.sh - standalone C89/ELF64 compiler in pure portable shell](https://gist.github.com/alganet/2b89c4368f8d23d033961d8a3deb5c19)
* [2026-04-03, 23:46:51](https://news.ycombinator.com/item?id=47633855) - [Claude Code Found a Linux Vulnerability Hidden for 23 Years](https://mtlynch.io/claude-code-found-linux-vulnerability/)
* [2026-04-03, 23:00:00](https://tech.slashdot.org/story/26/04/03/2238241/iran-strikes-leave-amazon-availability-zones-hard-down-in-bahrain-and-dubai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Iran Strikes Leave Amazon Availability Zones &apos;Hard Down&apos; In Bahrain and Dubai](https://tech.slashdot.org/story/26/04/03/2238241/iran-strikes-leave-amazon-availability-zones-hard-down-in-bahrain-and-dubai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-03, 22:55:24](https://news.ycombinator.com/item?id=47633396) - [Tell HN: Anthropic no longer allowing Claude Code subscriptions to use OpenClaw](https://news.ycombinator.com/item?id=47633396)
* [2026-04-03, 22:00:00](https://slashdot.org/story/26/04/03/1914243/microsoft-to-invest-10-billion-in-japan-for-ai-cyber-defense-expansion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft To Invest $10 Billion In Japan For AI, Cyber Defense Expansion](https://slashdot.org/story/26/04/03/1914243/microsoft-to-invest-10-billion-in-japan-for-ai-cyber-defense-expansion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-03, 21:44:29](https://lobste.rs/s/mksk9n/rails_on_beam) - [Rails on the BEAM](https://intertwingly.net/blog/2026/04/02/Rails-on-the-BEAM.html)
* [2026-04-03, 21:35:00](https://soylentnews.org/article.pl?sid=26/04/02/0220210&amp;from=rss) - [Scientists Just Spotted a Black Hole Collision That Defies All Odds](https://soylentnews.org/article.pl?sid=26/04/02/0220210&amp;from=rss)
* [2026-04-03, 21:00:00](https://yro.slashdot.org/story/26/04/03/197223/netflix-must-refund-customers-for-years-of-price-hikes-italian-court-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Netflix Must Refund Customers For Years of Price Hikes, Italian Court Rules](https://yro.slashdot.org/story/26/04/03/197223/netflix-must-refund-customers-for-years-of-price-hikes-italian-court-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-03, 20:49:12](https://lobste.rs/s/uagdwq/why_nobody_can_verify_what_booted_your) - [Why Nobody Can Verify What Booted Your Server](https://unmitigatedrisk.com/?p=1231)
* [2026-04-03, 20:00:00](https://tech.slashdot.org/story/26/04/03/1859232/fan-fiction-website-ao3-exits-beta-after-17-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fan Fiction Website AO3 Exits Beta After 17 Years](https://tech.slashdot.org/story/26/04/03/1859232/fan-fiction-website-ao3-exits-beta-after-17-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-03, 19:00:00](https://yro.slashdot.org/story/26/04/03/1845258/tech-companies-are-trying-to-neuter-colorados-landmark-right-to-repair-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tech Companies Are Trying To Neuter Colorado&apos;s Landmark Right-to-Repair Law](https://yro.slashdot.org/story/26/04/03/1845258/tech-companies-are-trying-to-neuter-colorados-landmark-right-to-repair-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-03, 17:36:21](https://lobste.rs/s/vintrg/making_type_checker_lsp_for_nix) - [Making a Type Checker/LSP for Nix](https://johns.codes/blog/making-a-type-checker-lsp-for-nix)
* [2026-04-03, 16:43:00](https://soylentnews.org/article.pl?sid=26/04/02/0214254&amp;from=rss) - [Google Has a Secret Reference Desk. Here&apos;s How to Use It.](https://soylentnews.org/article.pl?sid=26/04/02/0214254&amp;from=rss)
* [2026-04-03, 16:09:55](https://lobste.rs/s/vplcij/baby_s_second_garbage_collector) - [Baby’s Second Garbage Collector](https://www.matheusmoreira.com/articles/babys-second-garbage-collector)
* [2026-04-03, 15:37:25](https://lobste.rs/s/s04of3/build_your_own_dial_up_isp_with_raspberry) - [Build your own Dial-up ISP with a Raspberry Pi](https://www.jeffgeerling.com/blog/2026/build-your-own-dial-up-isp-with-a-raspberry-pi/)
* [2026-04-03, 14:50:47](https://lobste.rs/s/lh9rmv/claude_code_found_linux_vulnerability) - [Claude Code Found a Linux Vulnerability Hidden for 23 Years](https://mtlynch.io/claude-code-found-linux-vulnerability/)
* [2026-04-03, 14:30:48](https://lobste.rs/s/3fprl8/slap_functional_concatenative_language) - [Slap: Functional Concatenative Language... with a Borrow Checker?](https://taylor.town/slap-000)
* [2026-04-03, 12:17:43](https://lobste.rs/s/rw62j7/lisette_rust_syntax_go_runtime) - [Lisette — Rust syntax, Go runtime](https://lisette.run)
* [2026-04-03, 12:00:00](https://soylentnews.org/article.pl?sid=26/03/31/1458218&amp;from=rss) - [Attorney Hit With Historic Fine for Citing AI-Generated Cases](https://soylentnews.org/article.pl?sid=26/03/31/1458218&amp;from=rss)
* [2026-04-03, 11:08:54](https://lobste.rs/s/vtqfx7/idiomatic_lisp_nbody_benchmark) - [Idiomatic Lisp and the nbody benchmark](https://www.stylewarning.com/posts/nbody/)
* [2026-04-03, 09:53:22](https://lobste.rs/s/kltbuq/adobe_wrote_my_hosts_file) - [Adobe wrote to my hosts file](https://www.reddit.com/r/webdev/comments/1sb6hzk/adobe_wrote_to_my_hosts_file_ive_never_had_an_app/)
* [2026-04-03, 09:52:11](https://lobste.rs/s/unme8t/ssh_certificates_better_ssh_experience) - [SSH certificates: the better SSH experience](https://jpmens.net/2026/04/03/ssh-certificates-the-better-ssh-experience/)
* [2026-04-03, 07:17:00](https://soylentnews.org/article.pl?sid=26/03/31/1439256&amp;from=rss) - [Wikipedia Has Banned AI-Generated Articles](https://soylentnews.org/article.pl?sid=26/03/31/1439256&amp;from=rss)
* [2026-04-03, 02:31:00](https://soylentnews.org/article.pl?sid=26/03/31/1431219&amp;from=rss) - [Ancient Alphabets, New Insights: Researchers Uncover Hidden Links Among the Letters](https://soylentnews.org/article.pl?sid=26/03/31/1431219&amp;from=rss)
* [2026-04-02, 21:41:00](https://soylentnews.org/article.pl?sid=26/03/31/1413235&amp;from=rss) - [Why October 1, 2026, Could be the Day SSL/TLS Certificates &apos;Break the Internet&apos;](https://soylentnews.org/article.pl?sid=26/03/31/1413235&amp;from=rss)
* [2026-04-02, 17:00:00](https://soylentnews.org/article.pl?sid=26/03/31/140207&amp;from=rss) - [Ubuntu MATE Founder Martin Wimpress Steps Back After 12 Years](https://soylentnews.org/article.pl?sid=26/03/31/140207&amp;from=rss)
* [2026-04-02, 14:25:52](https://news.ycombinator.com/item?id=47614956) - [Notes from from Butterick&apos;s Practical Typography](https://adamadam.blog/2026/04/01/my-notes-from-buttericks-practical-typography/)
* [2026-04-02, 13:54:12](https://news.ycombinator.com/item?id=47614532) - [Ruckus: Racket for iOS](https://ruckus.defn.io/)
* [2026-04-02, 12:42:00](https://soylentnews.org/article.pl?sid=26/03/31/147230&amp;from=rss) - [Euro-Office is a Free, Open-Source Alternative to Microsoft 365 and Google Docs](https://soylentnews.org/article.pl?sid=26/03/31/147230&amp;from=rss)
* [2026-04-02, 08:13:00](https://soylentnews.org/article.pl?sid=26/03/31/1354212&amp;from=rss) - [World&apos;s smallest QR code, smaller than bacteria, could store data for centuries  ](https://soylentnews.org/article.pl?sid=26/03/31/1354212&amp;from=rss)
* [2026-04-02, 03:09:00](https://soylentnews.org/article.pl?sid=26/03/31/1352230&amp;from=rss) - [Google Won&apos;t Block Loading Unverified Apps, but Adds Friction to the Process](https://soylentnews.org/article.pl?sid=26/03/31/1352230&amp;from=rss)
* [2026-04-01, 22:34:00](https://soylentnews.org/article.pl?sid=26/03/30/1515244&amp;from=rss) - [Tails Linux 7.6 Released: Introduces Automatic Tor Bridges to Bypass Censorship](https://soylentnews.org/article.pl?sid=26/03/30/1515244&amp;from=rss)
* [2026-04-01, 20:38:24](https://news.ycombinator.com/item?id=47606244) - [Training mRNA Language Models Across 25 Species for $165](https://news.ycombinator.com/item?id=47606244)
* [2026-04-01, 18:47:48](https://news.ycombinator.com/item?id=47604887) - [Electrical Transformer Manufacturing Is Throttling the Electrified Future](https://www.bloomberg.com/features/2025-bottlenecks-transformers/)
* [2026-04-01, 17:53:00](https://soylentnews.org/article.pl?sid=26/03/30/1513241&amp;from=rss) - [How Graphene Oxide Kills Bacteria While Sparing Human Cells](https://soylentnews.org/article.pl?sid=26/03/30/1513241&amp;from=rss)
* [2026-04-01, 17:32:00](https://soylentnews.org/article.pl?sid=26/04/01/1726213&amp;from=rss) - [Artemis II Mission is About to Fly Humans to the Moon — Here&apos;s the Science They&apos;ll Do](https://soylentnews.org/article.pl?sid=26/04/01/1726213&amp;from=rss)
* [2026-04-01, 14:13:34](https://news.ycombinator.com/item?id=47601194) - [The Cathedral, the Bazaar, and the Winchester Mystery House](https://www.dbreunig.com/2026/03/26/winchester-mystery-house.html)
* [2026-04-01, 13:12:00](https://soylentnews.org/article.pl?sid=26/03/30/159237&amp;from=rss) - [US Foreign Router Ban Criticized for Being ‘Industrial Policy Disguised as Cybersecurity’](https://soylentnews.org/article.pl?sid=26/03/30/159237&amp;from=rss)
* [2026-04-01, 08:32:00](https://soylentnews.org/article.pl?sid=26/03/30/154227&amp;from=rss) - [Running DOOM Over DNS Queries](https://soylentnews.org/article.pl?sid=26/03/30/154227&amp;from=rss)
* [2026-04-01, 06:04:12](https://news.ycombinator.com/item?id=47597366) - [The most-disliked people in the publishing industry](https://www.woman-of-letters.com/p/the-most-disliked-people-in-the-publishing)
* [2026-04-01, 03:44:00](https://soylentnews.org/article.pl?sid=26/03/30/151240&amp;from=rss) - [Ranked: The World’s Most Surveilled Cities](https://soylentnews.org/article.pl?sid=26/03/30/151240&amp;from=rss)
* [2026-03-31, 23:01:00](https://soylentnews.org/article.pl?sid=26/03/30/1458237&amp;from=rss) - [China&apos;s Not Thrilled its AI Experts Want to Leave the Country](https://soylentnews.org/article.pl?sid=26/03/30/1458237&amp;from=rss)
* [2026-03-31, 18:13:00](https://soylentnews.org/article.pl?sid=26/03/30/1454213&amp;from=rss) - [Number of AI Chatbots Ignoring Human Instructions is Increasing  ](https://soylentnews.org/article.pl?sid=26/03/30/1454213&amp;from=rss)
* [2026-03-31, 11:25:00](https://soylentnews.org/article.pl?sid=26/03/30/0239206&amp;from=rss) - [Court Temporarily Blocks US Government From Labeling Anthropic as a &apos;Supply Chain Risk&apos;](https://soylentnews.org/article.pl?sid=26/03/30/0239206&amp;from=rss)
* [2026-03-31, 06:42:00](https://soylentnews.org/article.pl?sid=26/03/30/0233201&amp;from=rss) - [Touchscreens, Long Nails, and an Experimental Polish](https://soylentnews.org/article.pl?sid=26/03/30/0233201&amp;from=rss)
* [2026-03-31, 01:56:00](https://soylentnews.org/article.pl?sid=26/03/29/1343212&amp;from=rss) - [Are US-Based VPN Users at Risk of Being Treated as Foreign Surveillance Targets?](https://soylentnews.org/article.pl?sid=26/03/29/1343212&amp;from=rss)
