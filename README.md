# [News Summary](https://kherrick.github.io/news-summary/)

## Advancements and Impacts of AI Technology

* [DuckDuckGo Users Vote Overwhelmingly Against AI Features](https://search.slashdot.org/story/26/01/30/182230/duckduckgo-users-vote-overwhelmingly-against-ai-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Amazon in Talks To Invest Up To $50 Billion in OpenAI](https://slashdot.org/story/26/01/30/1221255/amazon-in-talks-to-invest-up-to-50-billion-in-openai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [How AI Impacts Skill Formation](https://arxiv.org/abs/2601.20245)

* [Former Google Engineer Found Guilty of Stealing AI Secrets For Chinese Firms](https://yro.slashdot.org/story/26/01/30/062232/former-google-engineer-found-guilty-of-stealing-ai-secrets-for-chinese-firms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Radiologists Catch More Aggressive Breast Cancers By Using AI To Help Read Mammograms, Study Finds](https://science.slashdot.org/story/26/01/30/0616204/radiologists-catch-more-aggressive-breast-cancers-by-using-ai-to-help-read-mammograms-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Global Technology and Infrastructure

* [The UK Paid $5.65 Million For a Bookmarks Site](https://news.slashdot.org/story/26/01/30/1241207/the-uk-paid-565-million-for-a-bookmarks-site?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Wisconsin Communities Signed Secrecy Deals For Billion-Dollar Data Centers](https://www.wpr.org/news/4-wisconsin-communities-signed-secrecy-deals-billion-dollar-data-centers)

* [Netflix Animation Studios Joins the Blender Development Fund as Corporate Patron](https://www.blender.org/press/netflix-animation-studios-joins-the-blender-development-fund-as-corporate-patron/)

## Cybersecurity and Privacy Concerns

* [Nobel Hacking Likely Leaked Peace Prize Winner Name, Probe Finds](https://news.slashdot.org/story/26/01/30/1750253/nobel-hacking-likely-leaked-peace-prize-winner-name-probe-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Google Disrupts Large Residential Proxy Network](https://cloud.google.com/blog/topics/threat-intelligence/disrupting-largest-residential-proxy-network)

* [For the Price of Netflix, Crooks Can Rent AI Crime Ops](https://soylentnews.org/article.pl?sid=26/01/28/2237224&amp;from=rss)

## Creative and Technical Innovations

* [cl-Litestream Writable VFS](https://fly.io/blog/litestream-writable-vfs/)

* [Buttered Crumpet: A Custom Typeface for Wallace and Gromit](https://jamieclarketype.com/case-study/wallace-and-gromit-font/)

* [cli-stash: TUI Tool to Save and Recall Shell Commands with Fuzzy Search](https://github.com/itcaat/cli-stash)

## Cultural and Ethical Implications

* [Do Markets Make Us Moral?](https://slashdot.org/story/26/01/30/1157228/do-markets-make-us-moral?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Universal Basic Income Could Be Used To Soften Hit From AI Job Losses In UK, Minister Says](https://news.slashdot.org/story/26/01/29/2330216/universal-basic-income-could-be-used-to-soften-hit-from-ai-job-losses-in-uk-minister-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Microsoft CEO Says AI Needs to Have Wider Impact or Risk Quickly Losing 'Social Permission'](https://soylentnews.org/article.pl?sid=26/01/25/1435251&amp;from=rss)

## Science and Technology Breakthroughs

* [Breakthrough Wireless Transceiver Transmits Data 24 Times Faster Than 5G Connections](https://soylentnews.org/article.pl?sid=26/01/27/0441241&amp;from=rss)

* [Executives Keep Overestimating AI Benefits](https://soylentnews.org/article.pl?sid=26/01/28/2247217&amp;from=rss)

* [Red Dwarfs Are Too Dim to Generate Complex Life](https://soylentnews.org/article.pl?sid=26/01/27/0433200&amp;from=rss)

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

* [2026-01-30, 19:18:00](https://lobste.rs/s/6abrie/story_computer_use_where_we_started_where) - [A Story of Computer-Use: Where We Started, Where We&apos;re Headed](https://cua.ai/blog/clawdbot-computer-use-history)
* [2026-01-30, 18:45:00](https://search.slashdot.org/story/26/01/30/182230/duckduckgo-users-vote-overwhelmingly-against-ai-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DuckDuckGo Users Vote Overwhelmingly Against AI Features](https://search.slashdot.org/story/26/01/30/182230/duckduckgo-users-vote-overwhelmingly-against-ai-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-30, 18:07:02](https://news.ycombinator.com/item?id=46827731) - [ClawdBot Skills ganked all my crypto](https://opensourcemalware.com/blog/clawdbot-skills-ganked-your-crypto)
* [2026-01-30, 18:06:26](https://lobste.rs/s/kcnqgp/amdahl_s_law_agentic_coding) - [Amdahl’s law and agentic coding](https://evnm.substack.com/p/amdahls-law-and-agentic-coding)
* [2026-01-30, 18:05:46](https://lobste.rs/s/5rjh8v/subtypes_status_dependent_data_pure) - [Subtypes and status-dependent data: pure relational approach](https://minimalmodeling.substack.com/p/subtypes-and-status-dependent-data)
* [2026-01-30, 18:05:00](https://news.slashdot.org/story/26/01/30/1750253/nobel-hacking-likely-leaked-peace-prize-winner-name-probe-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nobel Hacking Likely Leaked Peace Prize Winner Name, Probe Finds](https://news.slashdot.org/story/26/01/30/1750253/nobel-hacking-likely-leaked-peace-prize-winner-name-probe-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-30, 17:37:23](https://lobste.rs/s/bhoyfm/ingress_nginx_statement_from_kubernetes) - [Ingress NGINX: Statement from the Kubernetes Steering and Security Response Committees](https://kubernetes.io/blog/2026/01/29/ingress-nginx-statement/)
* [2026-01-30, 17:20:00](https://slashdot.org/story/26/01/30/1157228/do-markets-make-us-moral?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Do Markets Make Us Moral?](https://slashdot.org/story/26/01/30/1157228/do-markets-make-us-moral?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-30, 17:12:39](https://news.ycombinator.com/item?id=46827003) - [Microsoft Just Killed the \&quot;Cover for Me\&quot; Excuse: 365 Now Tracks You in Real-Time](https://ztechtalk.com/microsoft-teams)
* [2026-01-30, 16:46:28](https://news.ycombinator.com/item?id=46826634) - [Vcad: Free BRep CAD in the Browser](https://vcad.io)
* [2026-01-30, 16:43:50](https://news.ycombinator.com/item?id=46826597) - [Kimi K2.5 Technical Report [pdf]](https://github.com/MoonshotAI/Kimi-K2.5/blob/master/tech_report.pdf)
* [2026-01-30, 16:41:00](https://mobile.slashdot.org/story/26/01/30/1333208/call-screening-is-aggravating-the-rich-and-powerful?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Call Screening is Aggravating the Rich and Powerful&apos;](https://mobile.slashdot.org/story/26/01/30/1333208/call-screening-is-aggravating-the-rich-and-powerful?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-30, 16:01:00](https://news.slashdot.org/story/26/01/30/1241207/the-uk-paid-565-million-for-a-bookmarks-site?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The UK Paid $5.65 Million For a Bookmarks Site](https://news.slashdot.org/story/26/01/30/1241207/the-uk-paid-565-million-for-a-bookmarks-site?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-30, 15:38:00](https://soylentnews.org/article.pl?sid=26/01/28/2248256&amp;from=rss) - [Salty Facts: Takeaways Have More Salt Than Labels Claim](https://soylentnews.org/article.pl?sid=26/01/28/2248256&amp;from=rss)
* [2026-01-30, 15:36:45](https://lobste.rs/s/kfo7mc/building_breakwater_with_ai) - [Building Breakwater with AI](https://www.bencurtis.com/2026/01/building-breakwater-with-ai/)
* [2026-01-30, 15:20:00](https://slashdot.org/story/26/01/30/1221255/amazon-in-talks-to-invest-up-to-50-billion-in-openai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon in Talks To Invest Up To $50 Billion in OpenAI](https://slashdot.org/story/26/01/30/1221255/amazon-in-talks-to-invest-up-to-50-billion-in-openai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-30, 15:19:28](https://news.ycombinator.com/item?id=46825415) - [Buttered Crumpet, a custom typeface for Wallace and Gromit](https://jamieclarketype.com/case-study/wallace-and-gromit-font/)
* [2026-01-30, 15:04:36](https://news.ycombinator.com/item?id=46825200) - [HumanConsumption.Live – Real-Time Global Animal Consumption Stats](https://www.humanconsumption.live/)
* [2026-01-30, 14:40:00](https://tech.slashdot.org/story/26/01/30/1355254/microsoft-is-experimenting-with-a-top-menu-bar-for-windows-11?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft is Experimenting With a Top Menu Bar for Windows 11](https://tech.slashdot.org/story/26/01/30/1355254/microsoft-is-experimenting-with-a-top-menu-bar-for-windows-11?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-30, 14:34:32](https://news.ycombinator.com/item?id=46824877) - [Show HN: Amla Sandbox – WASM bash shell sandbox for AI agents](https://github.com/amlalabs/amla-sandbox)
* [2026-01-30, 14:33:29](https://news.ycombinator.com/item?id=46824867) - [Richard Feynman Side Hustles](https://twitter.com/carl_feynman/status/2016979540099420428)
* [2026-01-30, 14:00:00](https://tech.slashdot.org/story/26/01/30/1128238/backseat-software?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Backseat Software](https://tech.slashdot.org/story/26/01/30/1128238/backseat-software?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-30, 13:57:02](https://lobste.rs/s/zvcae4/cli_stash_tui_tool_save_recall_shell) - [cli-stash: TUI tool to save and recall shell commands with fuzzy search](https://github.com/itcaat/cli-stash)
* [2026-01-30, 13:56:51](https://news.ycombinator.com/item?id=46824422) - [HTTP Cats](https://http.cat/)
* [2026-01-30, 13:23:53](https://news.ycombinator.com/item?id=46824098) - [Wisconsin communities signed secrecy deals for billion-dollar data centers](https://www.wpr.org/news/4-wisconsin-communities-signed-secrecy-deals-billion-dollar-data-centers)
* [2026-01-30, 13:00:00](https://slashdot.org/story/26/01/30/0633251/unable-to-stop-ai-sag-aftra-mulls-a-studio-tax-on-digital-performers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Unable To Stop AI, SAG-AFTRA Mulls a Studio Tax On Digital Performers](https://slashdot.org/story/26/01/30/0633251/unable-to-stop-ai-sag-aftra-mulls-a-studio-tax-on-digital-performers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-30, 12:11:49](https://news.ycombinator.com/item?id=46823544) - [Pangolin (YC S25) is hiring software engineers (open-source, Go, networking)](https://docs.pangolin.net/careers/join-us)
* [2026-01-30, 12:07:26](https://news.ycombinator.com/item?id=46823498) - [Show HN: Cicada – A scripting language that integrates with C](https://github.com/heltilda/cicada)
* [2026-01-30, 12:02:49](https://lobste.rs/s/s9ey3g/coding_is_when_we_re_least_productive) - [Coding Is When We’re Least Productive](https://codemanship.wordpress.com/2026/01/30/coding-is-when-were-least-productive/)
* [2026-01-30, 11:58:07](https://lobste.rs/s/862tn2/email_experiments_filtering_out) - [Email experiments: filtering out external images](https://www.terracrypt.net/posts/email-experiments-image-filtering.html)
* [2026-01-30, 11:52:46](https://news.ycombinator.com/item?id=46823358) - [Track Your Routine – Open-source app for task management](https://github.com/MSF01/TYR)
* [2026-01-30, 10:46:00](https://soylentnews.org/article.pl?sid=26/01/28/2247217&amp;from=rss) - [Executives Keep Overestimating AI Benefits](https://soylentnews.org/article.pl?sid=26/01/28/2247217&amp;from=rss)
* [2026-01-30, 10:00:54](https://lobste.rs/s/k6fjcb/how_ai_impacts_skill_formation) - [How AI Impacts Skill Formation](https://arxiv.org/abs/2601.20245)
* [2026-01-30, 10:00:00](https://yro.slashdot.org/story/26/01/30/062232/former-google-engineer-found-guilty-of-stealing-ai-secrets-for-chinese-firms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Former Google Engineer Found Guilty of Stealing AI Secrets For Chinese Firms](https://yro.slashdot.org/story/26/01/30/062232/former-google-engineer-found-guilty-of-stealing-ai-secrets-for-chinese-firms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-30, 09:38:39](https://lobste.rs/s/p3nxq9/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/p3nxq9/what_are_you_doing_this_weekend)
* [2026-01-30, 08:09:41](https://news.ycombinator.com/item?id=46821774) - [GOG: Linux \&quot;the next major frontier\&quot; for gaming as it works on a native client](https://www.xda-developers.com/gog-calls-linux-the-next-major-frontier-for-gaming-as-it-works-on-a-native-client/)
* [2026-01-30, 07:06:47](https://news.ycombinator.com/item?id=46821360) - [How AI Impacts Skill Formation](https://arxiv.org/abs/2601.20245)
* [2026-01-30, 07:00:00](https://science.slashdot.org/story/26/01/30/0616204/radiologists-catch-more-aggressive-breast-cancers-by-using-ai-to-help-read-mammograms-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Radiologists Catch More Aggressive Breast Cancers By Using AI To Help Read Mammograms, Study Finds](https://science.slashdot.org/story/26/01/30/0616204/radiologists-catch-more-aggressive-breast-cancers-by-using-ai-to-help-read-mammograms-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-30, 06:19:36](https://news.ycombinator.com/item?id=46821134) - [Netflix Animation Studios Joins the Blender Development Fund as Corporate Patron](https://www.blender.org/press/netflix-animation-studios-joins-the-blender-development-fund-as-corporate-patron/)
* [2026-01-30, 06:19:20](https://lobste.rs/s/vtpnw6/gnu_units) - [GNU Units](https://www.gnu.org/software/units/)
* [2026-01-30, 06:10:18](https://lobste.rs/s/0r26qz/backseat_software) - [Backseat Software](https://blog.mikeswanson.com/backseat-software/)
* [2026-01-30, 06:10:00](https://soylentnews.org/article.pl?sid=26/01/28/2241225&amp;from=rss) - [Musk&apos;s X Releases Source Code for Platform&apos;s Algorithm](https://soylentnews.org/article.pl?sid=26/01/28/2241225&amp;from=rss)
* [2026-01-30, 05:41:23](https://news.ycombinator.com/item?id=46820924) - [How AI assistance impacts the formation of coding skills](https://www.anthropic.com/research/AI-assistance-coding-skills)
* [2026-01-30, 05:14:48](https://news.ycombinator.com/item?id=46820783) - [OpenClaw – Moltbot Renamed Again](https://openclaw.ai/blog/introducing-openclaw)
* [2026-01-30, 04:24:57](https://lobste.rs/s/js7tql/google_disrupts_large_residential_proxy) - [Google Disrupts Large Residential Proxy Network](https://cloud.google.com/blog/topics/threat-intelligence/disrupting-largest-residential-proxy-network)
* [2026-01-30, 03:57:31](https://lobste.rs/s/pou5h2/dank_case_for_scrolling_window_managers) - [The Dank Case For Scrolling Window Managers](https://tedium.co/2026/01/29/niri-danklinux-scrolling-window-managers/)
* [2026-01-30, 03:55:34](https://news.ycombinator.com/item?id=46820360) - [Moltbook](https://www.moltbook.com/)
* [2026-01-30, 03:30:00](https://news.slashdot.org/story/26/01/29/2330216/universal-basic-income-could-be-used-to-soften-hit-from-ai-job-losses-in-uk-minister-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Universal Basic Income Could Be Used To Soften Hit From AI Job Losses In UK, Minister Says](https://news.slashdot.org/story/26/01/29/2330216/universal-basic-income-could-be-used-to-soften-hit-from-ai-job-losses-in-uk-minister-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-30, 02:02:00](https://tech.slashdot.org/story/26/01/29/2324200/comcast-keeps-losing-customers-despite-price-guarantee-unlimited-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Comcast Keeps Losing Customers Despite Price Guarantee, Unlimited Data](https://tech.slashdot.org/story/26/01/29/2324200/comcast-keeps-losing-customers-despite-price-guarantee-unlimited-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-30, 01:43:25](https://lobste.rs/s/izh4dt/no_cloudflare_s_matrix_server_isn_t) - [No, Cloudflare&apos;s Matrix server isn&apos;t an earnest project](https://nexy.blog/2026/01/28/cf-matrix-workers/)
* [2026-01-30, 01:25:00](https://news.slashdot.org/story/26/01/29/230246/cory-doctorow-on-tariffs-and-the-dmca-in-canada?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cory Doctorow On Tariffs and the DMCA In Canada](https://news.slashdot.org/story/26/01/29/230246/cory-doctorow-on-tariffs-and-the-dmca-in-canada?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-30, 01:15:00](https://soylentnews.org/article.pl?sid=26/01/28/2237224&amp;from=rss) - [For the Price of Netflix, Crooks Can Rent AI Crime Ops](https://soylentnews.org/article.pl?sid=26/01/28/2237224&amp;from=rss)
* [2026-01-30, 00:45:00](https://games.slashdot.org/story/26/01/29/2252203/linux-gaming-developers-join-forces-to-form-the-open-gaming-collective?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linux Gaming Developers Join Forces To Form the Open Gaming Collective](https://games.slashdot.org/story/26/01/29/2252203/linux-gaming-developers-join-forces-to-form-the-open-gaming-collective?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-30, 00:37:02](https://lobste.rs/s/fxro47/10_years_wasm_retrospective) - [10 Years of Wasm: A Retrospective](https://bytecodealliance.org/articles/ten-years-of-webassembly-a-retrospective)
* [2026-01-30, 00:06:53](https://lobste.rs/s/lrlmqz/litestream_writable_vfs) - [Litestream Writable VFS](https://fly.io/blog/litestream-writable-vfs/)
* [2026-01-29, 22:38:57](https://news.ycombinator.com/item?id=46817813) - [Grid: Free, local-first, browser-based 3D printing/CNC/laser slicer](https://grid.space/stem/)
* [2026-01-29, 21:19:58](https://lobste.rs/s/vxjeui/building_docs_like_product) - [Building Docs Like a Product](https://emschwartz.me/building-docs-like-a-product/)
* [2026-01-29, 21:02:31](https://news.ycombinator.com/item?id=46816539) - [Retiring GPT-4o, GPT-4.1, GPT-4.1 mini, and OpenAI o4-mini in ChatGPT](https://openai.com/index/retiring-gpt-4o-and-older-models/)
* [2026-01-29, 20:57:07](https://lobste.rs/s/t02552/solving_fossil_s_ascii_art_captcha_171) - [Solving Fossil&apos;s ASCII art CAPTCHA in 171 characters](https://blog.nns.ee/2026/01/29/fossil-captcha-solver/)
* [2026-01-29, 20:30:00](https://soylentnews.org/article.pl?sid=26/01/27/0538204&amp;from=rss) - [Four Arrested Following $1.6 Million NFT Heist in the Netherlands](https://soylentnews.org/article.pl?sid=26/01/27/0538204&amp;from=rss)
* [2026-01-29, 19:42:26](https://lobste.rs/s/9dqubn/crazy_jumpman) - [crazy-jumpman](https://codeberg.org/pgeorgi/crazy-jumpman/#english)
* [2026-01-29, 16:19:19](https://news.ycombinator.com/item?id=46812285) - [Show HN: Kolibri, a DIY music club in Sweden](https://kolibrinkpg.com/)
* [2026-01-29, 16:07:35](https://lobste.rs/s/b7lh3o/beta_testing_webusbunpinner_tool) - [Beta testing of WebUSBUnpinner - a tool to investigate platform worker&apos;s privacy and rights violations](https://reversing.works/posts/2026/01/help-reversing.works-empower-workers-by-testing-our-tool/)
* [2026-01-29, 15:40:00](https://soylentnews.org/article.pl?sid=26/01/27/0515229&amp;from=rss) - [Microsoft Admits Windows 11 Update Is Nuking System Drives but There&apos;s &apos;A Limited Number Of Reports&apos;](https://soylentnews.org/article.pl?sid=26/01/27/0515229&amp;from=rss)
* [2026-01-29, 15:20:12](https://lobste.rs/s/g0te8h/how_choose_colors_for_your_cli) - [How to Choose Colors for Your CLI Applications (2023)](https://blog.xoria.org/terminal-colors/)
* [2026-01-29, 15:05:55](https://lobste.rs/s/x2pwi5/introducing_fluux_messenger_modern_xmpp) - [Introducing Fluux Messenger: A Modern XMPP Client Born from a Holiday Coding Session](https://www.process-one.net/blog/introducing-fluux-messenger-a-modern-xmpp-client-born-from-a-holiday-coding-session/)
* [2026-01-29, 13:08:11](https://news.ycombinator.com/item?id=46809708) - [AGENTS.md outperforms skills in our agent evals](https://vercel.com/blog/agents-md-outperforms-skills-in-our-agent-evals)
* [2026-01-29, 10:59:00](https://soylentnews.org/article.pl?sid=26/01/27/0441241&amp;from=rss) - [Breakthrough Wireless Transceiver Transmits Data 24 Times Faster Than 5G Connections](https://soylentnews.org/article.pl?sid=26/01/27/0441241&amp;from=rss)
* [2026-01-29, 09:34:06](https://lobste.rs/s/97wsdw/phantom_obligation) - [Phantom Obligation](https://terrygodier.com/phantom-obligation)
* [2026-01-29, 09:20:16](https://lobste.rs/s/g0ep2s/30_years_reactos) - [30 years of ReactOS](https://reactos.org/blogs/30yrs-of-ros/)
* [2026-01-29, 06:11:00](https://soylentnews.org/article.pl?sid=26/01/27/0433200&amp;from=rss) - [Red Dwarfs are Too Dim to Generate Complex Life](https://soylentnews.org/article.pl?sid=26/01/27/0433200&amp;from=rss)
* [2026-01-29, 01:30:00](https://soylentnews.org/article.pl?sid=26/01/27/0352207&amp;from=rss) - [AI is Already Writing Almost One-Third of New Software Code](https://soylentnews.org/article.pl?sid=26/01/27/0352207&amp;from=rss)
* [2026-01-28, 20:39:00](https://soylentnews.org/article.pl?sid=26/01/26/1911209&amp;from=rss) - [The Return of Digg, and the Proliferation of Cancel Culture](https://soylentnews.org/article.pl?sid=26/01/26/1911209&amp;from=rss)
* [2026-01-28, 15:55:00](https://soylentnews.org/article.pl?sid=26/01/26/197234&amp;from=rss) - [Socializing Alone: The Downside of Communication Technology](https://soylentnews.org/article.pl?sid=26/01/26/197234&amp;from=rss)
* [2026-01-28, 11:13:00](https://soylentnews.org/article.pl?sid=26/01/26/195201&amp;from=rss) - [TSMC Says AI Demand is “Endless” After Record Q4 Earnings](https://soylentnews.org/article.pl?sid=26/01/26/195201&amp;from=rss)
* [2026-01-28, 06:27:00](https://soylentnews.org/article.pl?sid=26/01/26/192227&amp;from=rss) - [Design Your Next Building Out of Bamboo](https://soylentnews.org/article.pl?sid=26/01/26/192227&amp;from=rss)
* [2026-01-28, 01:42:00](https://soylentnews.org/article.pl?sid=26/01/26/191227&amp;from=rss) - [North Sea Winds Of Change](https://soylentnews.org/article.pl?sid=26/01/26/191227&amp;from=rss)
* [2026-01-27, 21:02:00](https://soylentnews.org/article.pl?sid=26/01/26/1857242&amp;from=rss) - [Proton VPN Reveals Major Linux Makeover](https://soylentnews.org/article.pl?sid=26/01/26/1857242&amp;from=rss)
* [2026-01-27, 16:42:18](https://news.ycombinator.com/item?id=46782412) - [The National Herbarium of Ireland digital collection of Irish plants](https://dri.ie/news/new-collection-in-dri-the-national-herbarium-of-ireland-digital-collection-of-irish-plants/)
* [2026-01-27, 16:39:27](https://news.ycombinator.com/item?id=46782357) - [Emoji Design Convergence Review: 2018-2026](https://blog.emojipedia.org/emoji-design-convergence-review-2018-2026/)
* [2026-01-27, 16:19:00](https://soylentnews.org/article.pl?sid=26/01/26/1850245&amp;from=rss) - [80386 Multiplication and Division](https://soylentnews.org/article.pl?sid=26/01/26/1850245&amp;from=rss)
* [2026-01-27, 11:39:00](https://soylentnews.org/article.pl?sid=26/01/25/1435251&amp;from=rss) - [Microsoft CEO Says AI Needs to Have Wider Impact or Risk Quickly Losing \&quot;Social Permission\&quot;](https://soylentnews.org/article.pl?sid=26/01/25/1435251&amp;from=rss)
* [2026-01-27, 06:54:00](https://soylentnews.org/article.pl?sid=26/01/25/1419203&amp;from=rss) - [The Hidden Complexity Crisis: When Simple Radio Buttons Require 200+ Lines of Code](https://soylentnews.org/article.pl?sid=26/01/25/1419203&amp;from=rss)
* [2026-01-27, 02:08:00](https://soylentnews.org/article.pl?sid=26/01/25/1410231&amp;from=rss) - [Elon Musk Restarts Dojo3 &apos;Space&apos; Supercomputer Project As AI5 Chip Design Gets In &apos;Good Shape&apos;](https://soylentnews.org/article.pl?sid=26/01/25/1410231&amp;from=rss)
* [2026-01-27, 00:24:56](https://news.ycombinator.com/item?id=46773793) - [Quack-Cluster: A Serverless Distributed SQL Query Engine with DuckDB and Ray](https://github.com/kristianaryanto/Quack-Cluster)
* [2026-01-27, 00:08:33](https://news.ycombinator.com/item?id=46773655) - [The Engineer who invented the Mars Rover Suspension in his garage [video]](https://www.youtube.com/watch?v=QKSPk_0N4Jc)
* [2026-01-26, 21:19:00](https://soylentnews.org/article.pl?sid=26/01/25/145215&amp;from=rss) - [Apple&apos;s Enshittification Moment: How the App Store is Quietly Abandoning User Trust](https://soylentnews.org/article.pl?sid=26/01/25/145215&amp;from=rss)
* [2026-01-26, 18:32:47](https://news.ycombinator.com/item?id=46769606) - [Godot 4.6 Release: It&apos;s all about your flow](https://godotengine.org/releases/4.6/)
* [2026-01-26, 16:38:00](https://soylentnews.org/article.pl?sid=26/01/25/1312202&amp;from=rss) - [Snover.exit()](https://soylentnews.org/article.pl?sid=26/01/25/1312202&amp;from=rss)
* [2026-01-26, 11:55:00](https://soylentnews.org/article.pl?sid=26/01/25/0439223&amp;from=rss) - [Starlink Now Uses Customers&apos; Personal Data for AI Training](https://soylentnews.org/article.pl?sid=26/01/25/0439223&amp;from=rss)
* [2026-01-26, 07:11:00](https://soylentnews.org/article.pl?sid=26/01/25/0432221&amp;from=rss) - [Attackers Find a New Way to Share Malicious Snap Packages](https://soylentnews.org/article.pl?sid=26/01/25/0432221&amp;from=rss)
* [2026-01-26, 03:26:00](https://soylentnews.org/article.pl?sid=26/01/25/0429246&amp;from=rss) - [UK MPs Call for AI Stress Testing in Financial Services](https://soylentnews.org/article.pl?sid=26/01/25/0429246&amp;from=rss)
