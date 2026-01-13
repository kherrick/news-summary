# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software Development

* [Detecting MIME Types in Go](https://rnemeth90.github.io/posts/2024-03-27-golang-detect-file-type/) - A guide on detecting and identifying various MIME types using Go. [Comments](https://lobste.rs/s/qk9tqb/detecting_mime_types_go)

* [Your CLI&apos;s completion should know what options you&apos;ve already typed](https://hackers.pub/@hongminhee/2026/optique-context-aware-cli-completion) - A discussion on creating a smarter, context-aware command-line interface for better user experience. [Comments](https://lobste.rs/s/5se1tq/your_cli_s_completion_should_know_what)

* [Grounding LLMs with Recursive Code Execution](https://yogthos.net/posts/2026-01-12-recursive-language-model.html) - Exploring how recursive code execution can enhance the utility of Large Language Models. [Comments](https://lobste.rs/s/o0lw2d/grounding_llms_with_recursive_code)

* [How Markdown Took Over the World](https://it.slashdot.org/story/26/01/12/2049226/how-markdown-took-over-the-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A dive into Markdown&apos;s rise as a widespread tool for documentation and writing. [Comments](https://it.slashdot.org/story/26/01/12/2049226/how-markdown-took-over-the-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [The coolest feature in Python 3.14](https://savannah.dev/posts/the-coolest-feature-in-314/) - Highlighting the standout changes and improvements in Python 3.14. [Comments](https://lobste.rs/s/jmbwp2/coolest_feature_python_3_14)

## Artificial Intelligence and Machine Learning

* [Should AI Agents Be Classified As People?](https://slashdot.org/story/26/01/12/2220207/should-ai-agents-be-classified-as-people?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Debating the ethical and societal implications of recognizing AI agents as persons. [Comments](https://slashdot.org/story/26/01/12/2220207/should-ai-agents-be-classified-as-people?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Provenance Is the New Version Control](https://aicoding.leaflet.pub/3mcbiyal7jc2y) - Introducing &apos;provenance&apos; as an innovative concept in managing code history and collaboration. [Comments](https://news.ycombinator.com/item?id=46597023)

* [Apple picks Gemini to power Siri](https://www.cnbc.com/2026/01/12/apple-google-ai-siri-gemini.html) - Apple&apos;s collaboration with Gemini to enhance AI-driven assistant capabilities in Siri. [Comments](https://news.ycombinator.com/item?id=46589675)

## Environmental and Science Discoveries

* [Norway Reaches 97% EV Sales as EVs Now Outnumber Diesels On Its Roads](https://tech.slashdot.org/story/26/01/12/1940241/norway-reaches-97-ev-sales-as-evs-now-outnumber-diesels-on-its-roads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Norway&apos;s impressive strides and leadership in promoting electric vehicle adoption. [Comments](https://tech.slashdot.org/story/26/01/12/1940241/norway-reaches-97-ev-sales-as-evs-now-outnumber-diesels-on-its-roads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [China is Geoengineering Deserts With Blue-Green Algae](https://slashdot.org/story/26/01/12/1932258/china-is-geoengineering-deserts-with-blue-green-algae?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Examining China&apos;s innovative approach to combating desertification using algae. [Comments](https://slashdot.org/story/26/01/12/1932258/china-is-geoengineering-deserts-with-blue-green-algae?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Data Security and Breaches

* [Fintech Firm Betterment Confirms Data Breach After Hackers Send Fake $10,000 Crypto Scam Messages](https://it.slashdot.org/story/26/01/12/2232223/fintech-firm-betterment-confirms-data-breach-after-hackers-send-fake-10000-crypto-scam-messages?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A deeper look into a recent cybersecurity breach impacting financial technology services. [Comments](https://it.slashdot.org/story/26/01/12/2232223/fintech-firm-betterment-confirms-data-breach-after-hackers-send-fake-10000-crypto-scam-messages?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Society and Culture

* [Viral Chinese App &apos;Are You Dead?&apos; Checks On Those Who Live Alone](https://tech.slashdot.org/story/26/01/12/2318223/viral-chinese-app-are-you-dead-checks-on-those-who-live-alone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The cultural and societal implications of an app designed to check in on individuals living alone. [Comments](https://tech.slashdot.org/story/26/01/12/2318223/viral-chinese-app-are-you-dead-checks-on-those-who-live-alone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

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

* [2026-01-13, 06:45:00](https://soylentnews.org/article.pl?sid=26/01/12/0126219&amp;from=rss) - [How Doubting Your Doubts May Increase Commitment to Goals](https://soylentnews.org/article.pl?sid=26/01/12/0126219&amp;from=rss)
* [2026-01-13, 06:09:55](https://lobste.rs/s/qk9tqb/detecting_mime_types_go) - [Detecting MIME Types in Go](https://rnemeth90.github.io/posts/2024-03-27-golang-detect-file-type/)
* [2026-01-13, 05:16:10](https://news.ycombinator.com/item?id=46597518) - [Text-Based Web Browsers](https://cssence.com/2026/text-based-web-browsers/)
* [2026-01-13, 05:03:35](https://lobste.rs/s/5se1tq/your_cli_s_completion_should_know_what) - [Your CLI&apos;s completion should know what options you&apos;ve already typed](https://hackers.pub/@hongminhee/2026/optique-context-aware-cli-completion)
* [2026-01-13, 03:30:00](https://yro.slashdot.org/story/26/01/12/2333202/epa-to-stop-considering-lives-saved-by-limiting-air-pollution?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EPA To Stop Considering Lives Saved By Limiting Air Pollution](https://yro.slashdot.org/story/26/01/12/2333202/epa-to-stop-considering-lives-saved-by-limiting-air-pollution?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-13, 03:26:23](https://news.ycombinator.com/item?id=46597023) - [Provenance Is the New Version Control](https://aicoding.leaflet.pub/3mcbiyal7jc2y)
* [2026-01-13, 02:19:16](https://lobste.rs/s/n8cqal/remarks_on_sframe) - [Remarks on SFrame](https://maskray.me/blog/2025-09-28-remarks-on-sframe)
* [2026-01-13, 02:10:00](https://slashdot.org/story/26/01/12/2324253/european-firms-hit-hiring-brakes-over-ai-and-slowing-growth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [European Firms Hit Hiring Brakes Over AI and Slowing Growth](https://slashdot.org/story/26/01/12/2324253/european-firms-hit-hiring-brakes-over-ai-and-slowing-growth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-13, 01:52:00](https://soylentnews.org/article.pl?sid=26/01/12/013252&amp;from=rss) - [The Book Only Gets 3 Stars, but is Considered Great Literature](https://soylentnews.org/article.pl?sid=26/01/12/013252&amp;from=rss)
* [2026-01-13, 01:30:00](https://tech.slashdot.org/story/26/01/12/2318223/viral-chinese-app-are-you-dead-checks-on-those-who-live-alone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Viral Chinese App &apos;Are You Dead?&apos; Checks On Those Who Live Alone](https://tech.slashdot.org/story/26/01/12/2318223/viral-chinese-app-are-you-dead-checks-on-those-who-live-alone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-13, 00:50:00](https://linux.slashdot.org/story/26/01/12/2311234/even-linus-torvalds-is-vibe-coding-now?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Even Linus Torvalds Is Vibe Coding Now](https://linux.slashdot.org/story/26/01/12/2311234/even-linus-torvalds-is-vibe-coding-now?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-13, 00:19:34](https://lobste.rs/s/o0lw2d/grounding_llms_with_recursive_code) - [Grounding LLMs with Recursive Code Execution](https://yogthos.net/posts/2026-01-12-recursive-language-model.html)
* [2026-01-13, 00:10:00](https://it.slashdot.org/story/26/01/12/2232223/fintech-firm-betterment-confirms-data-breach-after-hackers-send-fake-10000-crypto-scam-messages?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fintech Firm Betterment Confirms Data Breach After Hackers Send Fake $10,000 Crypto Scam Messages](https://it.slashdot.org/story/26/01/12/2232223/fintech-firm-betterment-confirms-data-breach-after-hackers-send-fake-10000-crypto-scam-messages?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-12, 23:30:00](https://slashdot.org/story/26/01/12/2220207/should-ai-agents-be-classified-as-people?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Should AI Agents Be Classified As People?](https://slashdot.org/story/26/01/12/2220207/should-ai-agents-be-classified-as-people?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-12, 23:05:04](https://news.ycombinator.com/item?id=46595419) - [Google removes AI health summaries after investigation finds dangerous flaws](https://arstechnica.com/ai/2026/01/google-removes-some-ai-health-summaries-after-investigation-finds-dangerous-flaws/)
* [2026-01-12, 22:50:00](https://meta.slashdot.org/story/26/01/12/2216207/meta-plans-to-cut-around-10-of-employees-in-reality-labs-division?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Plans To Cut Around 10% of Employees In Reality Labs Division](https://meta.slashdot.org/story/26/01/12/2216207/meta-plans-to-cut-around-10-of-employees-in-reality-labs-division?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-12, 22:30:33](https://news.ycombinator.com/item?id=46595130) - [F2 (YC S25) Is Hiring](https://www.ycombinator.com/companies/f2/jobs/cJsc7Fe-product-designer)
* [2026-01-12, 22:10:00](https://yro.slashdot.org/story/26/01/12/229233/supreme-court-takes-case-that-could-strip-fcc-of-authority-to-issue-fines?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Supreme Court Takes Case That Could Strip FCC of Authority To Issue Fines](https://yro.slashdot.org/story/26/01/12/229233/supreme-court-takes-case-that-could-strip-fcc-of-authority-to-issue-fines?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-12, 21:25:00](https://it.slashdot.org/story/26/01/12/2049226/how-markdown-took-over-the-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Markdown Took Over the World](https://it.slashdot.org/story/26/01/12/2049226/how-markdown-took-over-the-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-12, 21:11:00](https://soylentnews.org/article.pl?sid=26/01/10/2227246&amp;from=rss) - [NASA Postponed ISS Spacewalk Over Medical Issue, Crew Will Return Early](https://soylentnews.org/article.pl?sid=26/01/10/2227246&amp;from=rss)
* [2026-01-12, 20:50:00](https://it.slashdot.org/story/26/01/12/2012246/microsoft-pulls-the-plug-on-its-free-two-decade-old-windows-deployment-toolkit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Pulls the Plug On Its Free, Two-Decade-Old Windows Deployment Toolkit](https://it.slashdot.org/story/26/01/12/2012246/microsoft-pulls-the-plug-on-its-free-two-decade-old-windows-deployment-toolkit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-12, 20:26:47](https://news.ycombinator.com/item?id=46593802) - [Fabrice Bellard&apos;s TS Zip (2024)](https://www.bellard.org/ts_zip/)
* [2026-01-12, 20:15:19](https://lobste.rs/s/h5e24r/how_stick_with_your_projects_even_when) - [How to stick with your projects, even when they&apos;re janky](https://www.youtube.com/watch?v=Alfq8RG80Ns)
* [2026-01-12, 20:10:00](https://tech.slashdot.org/story/26/01/12/1940241/norway-reaches-97-ev-sales-as-evs-now-outnumber-diesels-on-its-roads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Norway Reaches 97% EV Sales as EVs Now Outnumber Diesels On Its Roads](https://tech.slashdot.org/story/26/01/12/1940241/norway-reaches-97-ev-sales-as-evs-now-outnumber-diesels-on-its-roads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-12, 19:57:37](https://news.ycombinator.com/item?id=46593395) - [The chess bot on Delta Air Lines will destroy you (2024) [video]](https://www.youtube.com/watch?v=c0mLhHDcY3I)
* [2026-01-12, 19:32:00](https://slashdot.org/story/26/01/12/1932258/china-is-geoengineering-deserts-with-blue-green-algae?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China is Geoengineering Deserts With Blue-Green Algae](https://slashdot.org/story/26/01/12/1932258/china-is-geoengineering-deserts-with-blue-green-algae?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-12, 19:27:19](https://news.ycombinator.com/item?id=46593022) - [Cowork: Claude Code for the rest of your work](https://claude.com/blog/cowork-research-preview)
* [2026-01-12, 18:57:41](https://lobste.rs/s/8qcrxm/building_scion_25_gbit_s_workstation) - [Building the SCION 25 Gbit/s Workstation](https://github.com/scionassociation/blog-25gbit-workstation)
* [2026-01-12, 18:45:00](https://entertainment.slashdot.org/story/26/01/12/1819211/batman-tv-series-premiered-60-years-ago-today?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Batman TV Series Premiered 60 Years Ago Today](https://entertainment.slashdot.org/story/26/01/12/1819211/batman-tv-series-premiered-60-years-ago-today?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-12, 18:43:28](https://lobste.rs/s/wddfsw/building_high_end_ai_desktop) - [Building a High-End AI Desktop](https://dnhkng.github.io/posts/hopper/)
* [2026-01-12, 18:36:12](https://news.ycombinator.com/item?id=46592376) - [Show HN: Fall asleep by watching JavaScript load](https://github.com/sarusso/bedtime)
* [2026-01-12, 18:34:02](https://news.ycombinator.com/item?id=46592344) - [Show HN: Yolobox – Run AI coding agents with full sudo without nuking home dir](https://github.com/finbarr/yolobox)
* [2026-01-12, 18:06:00](https://science.slashdot.org/story/26/01/12/185236/revolutionary-eye-injection-saved-my-sight-says-first-ever-patient?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Revolutionary Eye Injection Saved My Sight, Says First-Ever Patient](https://science.slashdot.org/story/26/01/12/185236/revolutionary-eye-injection-saved-my-sight-says-first-ever-patient?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-12, 17:41:52](https://lobste.rs/s/atz78i/text_based_web_browsers) - [Text-based web browsers](https://cssence.com/2026/text-based-web-browsers/)
* [2026-01-12, 17:41:50](https://news.ycombinator.com/item?id=46591708) - [Postal Arbitrage](https://walzr.com/postal-arbitrage)
* [2026-01-12, 17:22:00](https://apple.slashdot.org/story/26/01/12/176259/why-it-is-difficult-to-resize-windows-on-macos-26?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why It Is Difficult To Resize Windows on MacOS 26](https://apple.slashdot.org/story/26/01/12/176259/why-it-is-difficult-to-resize-windows-on-macos-26?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-12, 17:17:35](https://lobste.rs/s/ygqmfr/bad_dye_job) - [Bad Dye Job](https://daringfireball.net/2025/12/bad_dye_job)
* [2026-01-12, 17:17:09](https://news.ycombinator.com/item?id=46591402) - [Message Queues: A Simple Guide with Analogies (2024)](https://www.cloudamqp.com/blog/message-queues-exaplined-with-analogies.html)
* [2026-01-12, 16:56:17](https://news.ycombinator.com/item?id=46591100) - [Show HN: AI in SolidWorks](https://www.trylad.com)
* [2026-01-12, 16:38:00](https://soylentnews.org/article.pl?sid=26/01/10/2218252&amp;from=rss) - [Very Tough Microbes May Help Us Cement Our Future on Mars](https://soylentnews.org/article.pl?sid=26/01/10/2218252&amp;from=rss)
* [2026-01-12, 16:04:27](https://news.ycombinator.com/item?id=46590280) - [TimeCapsuleLLM: LLM trained only on data from 1800-1875](https://github.com/haykgrigo3/TimeCapsuleLLM)
* [2026-01-12, 15:22:21](https://news.ycombinator.com/item?id=46589675) - [Apple picks Gemini to power Siri](https://www.cnbc.com/2026/01/12/apple-google-ai-siri-gemini.html)
* [2026-01-12, 15:20:36](https://news.ycombinator.com/item?id=46589658) - [Date is out, Temporal is in](https://piccalil.li/blog/date-is-out-and-temporal-is-in/)
* [2026-01-12, 14:23:07](https://news.ycombinator.com/item?id=46588905) - [Show HN: Agent-of-empires: OpenCode and Claude Code session manager](https://github.com/njbrake/agent-of-empires)
* [2026-01-12, 14:19:22](https://lobste.rs/s/tyyi9z/j_incunabulum) - [The J Incunabulum](https://tony-zorman.com/posts/j-incunabulum.html)
* [2026-01-12, 14:18:13](https://news.ycombinator.com/item?id=46588837) - [LLVM: The bad parts](https://www.npopov.com/2026/01/11/LLVM-The-bad-parts.html)
* [2026-01-12, 14:04:57](https://lobste.rs/s/70isfv/how_make_damn_website) - [How to Make a Damn Website](https://lmnt.me/blog/how-to-make-a-damn-website.html)
* [2026-01-12, 13:22:44](https://news.ycombinator.com/item?id=46588132) - [Windows 8 Desktop Environment for Linux](https://github.com/er-bharat/Win8DE)
* [2026-01-12, 13:19:17](https://lobste.rs/s/j9xv8v/we_rolled_our_own_documentation_site) - [we rolled our own documentation site](https://blog.tangled.org/docs)
* [2026-01-12, 13:07:49](https://news.ycombinator.com/item?id=46587934) - [Floppy disks turn out to be the greatest TV remote for kids](https://blog.smartere.dk/2026/01/floppy-disks-the-best-tv-remote-for-kids/)
* [2026-01-12, 12:57:44](https://news.ycombinator.com/item?id=46587804) - [Zen-C: Write like a high-level language, run like C](https://github.com/z-libs/Zen-C)
* [2026-01-12, 12:41:07](https://lobste.rs/s/r4wccr/rise_future_fall_discord_2024) - [The rise (and future fall) of Discord (2024)](https://slugcat.systems/post/24-12-12-the-rise-and-future-fall-of-discord/)
* [2026-01-12, 12:29:00](https://news.ycombinator.com/item?id=46587536) - [Ozempic is changing the foods Americans buy](https://news.cornell.edu/stories/2025/12/ozempic-changing-foods-americans-buy)
* [2026-01-12, 12:00:00](https://soylentnews.org/article.pl?sid=26/01/10/2213252&amp;from=rss) - [Oceans Are Struggling To Absorb Carbon As Microplastics Flood Their Waters](https://soylentnews.org/article.pl?sid=26/01/10/2213252&amp;from=rss)
* [2026-01-12, 11:04:44](https://lobste.rs/s/mhgog9/anthropic_blocks_third_party_tools_using) - [Anthropic blocks third-party tools using Claude Code OAuth tokens](https://archaeologist.dev/artifacts/anthropic)
* [2026-01-12, 10:57:29](https://news.ycombinator.com/item?id=46586766) - [Anthropic made a mistake in cutting off third-party clients](https://archaeologist.dev/artifacts/anthropic)
* [2026-01-12, 10:17:39](https://lobste.rs/s/b5dqak/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/b5dqak/what_are_you_doing_this_week)
* [2026-01-12, 07:19:33](https://lobste.rs/s/hhtuqh/three_inverse_laws_robotics) - [Three Inverse Laws of Robotics](https://susam.net/inverse-laws-of-robotics.html)
* [2026-01-12, 07:11:00](https://soylentnews.org/article.pl?sid=26/01/10/227243&amp;from=rss) - [Scientists Discover Ancient Bees Built Nests Inside Animal Bones](https://soylentnews.org/article.pl?sid=26/01/10/227243&amp;from=rss)
* [2026-01-12, 04:18:46](https://lobste.rs/s/jmbwp2/coolest_feature_python_3_14) - [The coolest feature in Python 3.14](https://savannah.dev/posts/the-coolest-feature-in-314/)
* [2026-01-12, 04:06:23](https://lobste.rs/s/ypq8u0/typical_pdf) - [A Typical PDF](https://hackerfactor.com/blog/index.php?/archives/1085-A-Typical-PDF.html)
* [2026-01-12, 02:33:00](https://soylentnews.org/article.pl?sid=26/01/10/2158258&amp;from=rss) - [Bose Open-Sources its SoundTouch Home Theater Smart Speakers Ahead of End-of-Life](https://soylentnews.org/article.pl?sid=26/01/10/2158258&amp;from=rss)
* [2026-01-12, 01:56:34](https://lobste.rs/s/prsi0f/rethinking_helix) - [Rethinking Helix](https://asta.boserup.eu/forest/rethinking-helix/)
* [2026-01-11, 23:47:34](https://lobste.rs/s/yvgfh8/struggle_resizing_windows_on_macos_tahoe) - [The struggle of resizing windows on macOS Tahoe](https://noheger.at/blog/2026/01/11/the-struggle-of-resizing-windows-on-macos-tahoe/)
* [2026-01-11, 23:13:30](https://lobste.rs/s/ehtrmf/turntiles_nyt_style_word_game_i_made_for_my) - [Turntiles, an NYT style word game I made for my parents](https://github.com/wheybags/turntiles)
* [2026-01-11, 22:33:32](https://news.ycombinator.com/item?id=46581095) - [Unauthenticated remote code execution in OpenCode](https://cy.md/opencode-rce/)
* [2026-01-11, 21:52:00](https://soylentnews.org/article.pl?sid=26/01/10/0115240&amp;from=rss) - [Dell Reveals People Don&apos;t Care About AI in PCs – and a New Truly Embarrassing Windows 11 Fail ](https://soylentnews.org/article.pl?sid=26/01/10/0115240&amp;from=rss)
* [2026-01-11, 20:47:55](https://news.ycombinator.com/item?id=46579864) - [The struggle of resizing windows on macOS Tahoe](https://noheger.at/blog/2026/01/11/the-struggle-of-resizing-windows-on-macos-tahoe/)
* [2026-01-11, 20:38:37](https://lobste.rs/s/hcpnrj/who_are_people_currently_using_as_hosting) - [Who are people currently using as hosting providers?](https://lobste.rs/s/hcpnrj/who_are_people_currently_using_as_hosting)
* [2026-01-11, 20:17:08](https://lobste.rs/s/kiryys/whatsapp_is_untrustable) - [WhatsApp is untrustable](https://toki.la/posts/whatsapp)
* [2026-01-11, 19:23:35](https://lobste.rs/s/8nwjov/llvm_bad_parts) - [LLVM: The bad parts](https://www.npopov.com/2026/01/11/LLVM-The-bad-parts.html)
* [2026-01-11, 17:13:00](https://soylentnews.org/article.pl?sid=26/01/10/0111244&amp;from=rss) - [Your Daily Cup of Tea Could Help Fight Heart Disease, Cancer, Aging, and More](https://soylentnews.org/article.pl?sid=26/01/10/0111244&amp;from=rss)
* [2026-01-11, 12:26:00](https://soylentnews.org/article.pl?sid=26/01/10/019216&amp;from=rss) - [Finding Runaway Stars to Help Map Dark Matter in the Milky Way](https://soylentnews.org/article.pl?sid=26/01/10/019216&amp;from=rss)
* [2026-01-11, 10:23:20](https://lobste.rs/s/cmsfbu/don_t_fall_into_anti_ai_hype) - [Don&apos;t fall into the anti-AI hype](https://antirez.com/news/158)
* [2026-01-11, 07:24:00](https://soylentnews.org/article.pl?sid=26/01/10/015202&amp;from=rss) - [Virginia&apos;s Datacenter Tax Breaks Cost State $1.6B in 2025](https://soylentnews.org/article.pl?sid=26/01/10/015202&amp;from=rss)
* [2026-01-11, 02:54:00](https://soylentnews.org/article.pl?sid=26/01/09/1830221&amp;from=rss) - [Some People Get Drunk Without Drinking and Scientists Finally Know Why](https://soylentnews.org/article.pl?sid=26/01/09/1830221&amp;from=rss)
* [2026-01-10, 22:10:00](https://soylentnews.org/article.pl?sid=26/01/09/1828213&amp;from=rss) - [Busting the 5 Biggest Myths About Renewable Energy](https://soylentnews.org/article.pl?sid=26/01/09/1828213&amp;from=rss)
* [2026-01-10, 17:27:00](https://soylentnews.org/article.pl?sid=26/01/09/1824225&amp;from=rss) - [Bali Wants Three Months of Bank Account Statements to Visit ](https://soylentnews.org/article.pl?sid=26/01/09/1824225&amp;from=rss)
* [2026-01-10, 12:42:00](https://soylentnews.org/article.pl?sid=26/01/09/1822241&amp;from=rss) - [Microsoft Silently Kills Windows and Office Phone Activation and Forces Online Activation](https://soylentnews.org/article.pl?sid=26/01/09/1822241&amp;from=rss)
* [2026-01-10, 07:53:00](https://soylentnews.org/article.pl?sid=26/01/09/1820256&amp;from=rss) - [Renowned Mathematician Joel David Hamkins Declares AI Models Useless for Solving Math](https://soylentnews.org/article.pl?sid=26/01/09/1820256&amp;from=rss)
* [2026-01-10, 03:09:00](https://soylentnews.org/article.pl?sid=26/01/08/0331227&amp;from=rss) - [The Nation&apos;s Strictest Privacy Law Just Took Effect, to Data Brokers’ Chagrin](https://soylentnews.org/article.pl?sid=26/01/08/0331227&amp;from=rss)
* [2026-01-09, 22:20:00](https://soylentnews.org/article.pl?sid=26/01/08/0325201&amp;from=rss) - [Scientists Found a Way to Help the Brain Bounce Back From Alzheimer&apos;s](https://soylentnews.org/article.pl?sid=26/01/08/0325201&amp;from=rss)
* [2026-01-09, 19:05:04](https://news.ycombinator.com/item?id=46557733) - [The Cray-1 Computer System (1977) [pdf]](https://s3data.computerhistory.org/brochures/cray.cray1.1977.102638650.pdf)
* [2026-01-09, 17:36:00](https://soylentnews.org/article.pl?sid=26/01/08/0319211&amp;from=rss) - [Palo Alto Networks Security-Intel Boss Calls AI Agents 2026&apos;S Biggest Insider Threat](https://soylentnews.org/article.pl?sid=26/01/08/0319211&amp;from=rss)
* [2026-01-09, 12:53:00](https://soylentnews.org/article.pl?sid=26/01/07/1246247&amp;from=rss) - [OpenAI Bets Big on Audio as Silicon Valley Declares War on Screens](https://soylentnews.org/article.pl?sid=26/01/07/1246247&amp;from=rss)
* [2026-01-09, 08:07:00](https://soylentnews.org/article.pl?sid=26/01/07/1228222&amp;from=rss) - [While the World Cools on EVs, Norway Pushes to 96% Electric Sales](https://soylentnews.org/article.pl?sid=26/01/07/1228222&amp;from=rss)
* [2026-01-09, 03:24:12](https://news.ycombinator.com/item?id=46549714) - [Implementing a web server in a single printf() call (2014)](https://tinyhack.com/2014/03/12/implementing-a-web-server-in-a-single-printf-call/)
* [2026-01-09, 03:24:00](https://soylentnews.org/article.pl?sid=26/01/06/1126220&amp;from=rss) - [Scientists Create a “Periodic Table” for Artificial Intelligence](https://soylentnews.org/article.pl?sid=26/01/06/1126220&amp;from=rss)
