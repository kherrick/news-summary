# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Engineering

* [Tesla deliveries down 43% in Europe while EVs are up 31%](https://electrek.co/2025/03/25/tesla-tsla-deliveries-down-43-in-europe-while-evs-are-up-28/) ([comments](https://news.ycombinator.com/item?id=43470763))

* [Samsung CEO Jong-hee Han has died](https://www.engadget.com/big-tech/samsung-ceo-jong-hee-han-has-died-120029286.html) ([comments](https://news.ycombinator.com/item?id=43470699))

* [Firefly Aerospace Selects Blue Origin Unit To Explore Volcanic Formations On Moon](https://science.slashdot.org/story/25/03/25/013236/firefly-aerospace-selects-blue-origin-unit-to-explore-volcanic-formations-on-moon?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://science.slashdot.org/story/25/03/25/013236/firefly-aerospace-selects-blue-origin-unit-to-explore-volcanic-formations-on-moon?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [NASA's Curiosity Rover Detects Largest Organic Molecules Yet Found on Mars](https://science.slashdot.org/story/25/03/25/018216/nasas-curiosity-rover-detects-largest-organic-molecules-yet-found-on-mars?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://science.slashdot.org/story/25/03/25/018216/nasas-curiosity-rover-detects-largest-organic-molecules-yet-found-on-mars?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Software Development and Security

* [A Debugger is a REPL is a Debugger](https://matklad.github.io/2025/03/25/debugger-is-repl-is-debugger.html) ([comments](https://lobste.rs/s/7hqdxx/debugger_is_repl_is_debugger))

* [9.8 Critical Vulnerabilities in Ingress Nginx](https://www.wiz.io/blog/ingress-nginx-kubernetes-vulnerabilities) ([comments](https://news.ycombinator.com/item?id=43469629))

* [TrapC: Memory Safe C Programming with No UB](https://www.open-std.org/jtc1/sc22/wg14/www/docs/n3423.pdf) ([comments](https://lobste.rs/s/fftt89/trapc_memory_safe_c_programming_with_no_ub))

* [Software Engineer Runs Generative AI On 20-Year-Old PowerBook G4](https://apple.slashdot.org/story/25/03/24/2253253/software-engineer-runs-generative-ai-on-20-year-old-powerbook-g4?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://apple.slashdot.org/story/25/03/24/2253253/software-engineer-runs-generative-ai-on-20-year-old-powerbook-g4?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Artificial Intelligence

* [Jack Ma-Backed Ant Touts AI Breakthrough Using Chinese Chips](https://slashdot.org/story/25/03/24/2047228/jack-ma-backed-ant-touts-ai-breakthrough-using-chinese-chips?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://slashdot.org/story/25/03/24/2047228/jack-ma-backed-ant-touts-ai-breakthrough-using-chinese-chips?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Meta Considers Charging For Ad-Free Facebook and Instagram In the UK](https://tech.slashdot.org/story/25/03/24/2314215/meta-considers-charging-for-ad-free-facebook-and-instagram-in-the-uk?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://tech.slashdot.org/story/25/03/24/2314215/meta-considers-charging-for-ad-free-facebook-and-instagram-in-the-uk?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Reflecting on WikiTok](https://www.aizk.sh/posts/reflecting-on-wikitok) ([comments](https://news.ycombinator.com/item?id=43468491))

## Environment and Health

* [High‑dose Vitamin D reduces disease activity in early multiple sclerosis onset](https://medicalxpress.com/news/2025-03-highdose-vitamin-d-significantly-disease.html) ([comments](https://news.ycombinator.com/item?id=43469661))

* [Squirrels Inspire Leaping Strategy for Salto Robot](https://soylentnews.org/article.pl?sid=25/03/24/0347235&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/03/24/0347235&from=rss))

* [How a Nephew's CD Burner Inspired Early Valve To Embrace DRM](https://slashdot.org/story/25/03/24/1939209/how-a-nephews-cd-burner-inspired-early-valve-to-embrace-drm?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://slashdot.org/story/25/03/24/1939209/how-a-nephews-cd-burner-inspired-early-valve-to-embrace-drm?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Historical and Cultural Insights

* [German parliament votes as a Git contribution graph](https://abstimmung.eu/git/2024) ([comments](https://news.ycombinator.com/item?id=43466509))

* [Battling the Blaze: Artifacts from the history of firefighting](https://worldhistory.substack.com/p/battling-the-blaze) ([comments](https://news.ycombinator.com/item?id=43452904))

* [The Lost Towers of the Guelph-Ghibelline Wars](https://www.exurbe.com/the-lost-towers-of-the-guelph-ghibelline-wars/) ([comments](https://news.ycombinator.com/item?id=43452588))

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

* [2025-03-25, 13:11:03](https://news.ycombinator.com/item?id=43470763) - [Tesla deliveries down 43% in Europe while EVs are up 31%](https://electrek.co/2025/03/25/tesla-tsla-deliveries-down-43-in-europe-while-evs-are-up-28/)
* [2025-03-25, 13:04:54](https://news.ycombinator.com/item?id=43470699) - [Samsung CEO Jong-hee Han has died](https://www.engadget.com/big-tech/samsung-ceo-jong-hee-han-has-died-120029286.html)
* [2025-03-25, 12:54:59](https://news.ycombinator.com/item?id=43470613) - [X's head of engineering is out](https://www.theverge.com/twitter/634833/x-head-engineering-leaves-elon-musk)
* [2025-03-25, 12:33:07](https://lobste.rs/s/7hqdxx/debugger_is_repl_is_debugger) - [A Debugger is a REPL is a Debugger](https://matklad.github.io/2025/03/25/debugger-is-repl-is-debugger.html)
* [2025-03-25, 12:29:30](https://lobste.rs/s/au3938/database_protocols_are_underwhelming) - [Database Protocols Are Underwhelming](https://byroot.github.io/performance/2025/03/21/database-protocols.html)
* [2025-03-25, 12:24:42](https://lobste.rs/s/fftt89/trapc_memory_safe_c_programming_with_no_ub) - [TrapC: Memory Safe C Programming with No UB](https://www.open-std.org/jtc1/sc22/wg14/www/docs/n3423.pdf)
* [2025-03-25, 12:20:00](https://lobste.rs/s/aagvzy/entropy_attacks) - [Entropy Attacks](https://blog.cr.yp.to/20140205-entropy.html)
* [2025-03-25, 12:10:04](https://lobste.rs/s/guprex/implementers_solvers_finders) - [Implementers, Solvers, and Finders](https://rkoutnik.com/2016/04/21/implementers-solvers-and-finders.html)
* [2025-03-25, 12:01:58](https://lobste.rs/s/kjbpoh/better_shell_history_search) - [Better Shell History Search](https://tratt.net/laurie/blog/2025/better_shell_history_search.html)
* [2025-03-25, 11:09:00](https://soylentnews.org/article.pl?sid=25/03/24/0347235&from=rss) - [Squirrels Inspire Leaping Strategy for Salto Robot](https://soylentnews.org/article.pl?sid=25/03/24/0347235&from=rss)
* [2025-03-25, 10:43:31](https://lobste.rs/s/7nkvua/beyond_traditional_pattern_matching) - [Beyond Traditional Pattern Matching in Lisp](https://github.com/naver/lispe/wiki/6.1-Pattern-Matching-in-LispE)
* [2025-03-25, 10:39:18](https://news.ycombinator.com/item?id=43469727) - [The Hartlib Papers](https://www.dhi.ac.uk/hartlib/)
* [2025-03-25, 10:34:23](https://news.ycombinator.com/item?id=43469711) - [Coding Isn't Programming](https://www.socallinuxexpo.org/scale/22x/presentations/closing-keynote-leslie-lamport)
* [2025-03-25, 10:32:38](https://lobste.rs/s/zz69lm/closing_keynote_with_leslie_lamport_at) - [Closing Keynote with Leslie Lamport at SCALE 22x: Coding isn't programming](https://www.socallinuxexpo.org/scale/22x/presentations/closing-keynote-leslie-lamport)
* [2025-03-25, 10:28:22](https://news.ycombinator.com/item?id=43469690) - [The Great Barefoot Running Hysteria of 2010](https://runningshoescore.com/blog/barefoot-running-hysteria-of-2010)
* [2025-03-25, 10:20:37](https://news.ycombinator.com/item?id=43469661) - [High‑dose Vitamin D reduces disease activity in early multiple sclerosis onset](https://medicalxpress.com/news/2025-03-highdose-vitamin-d-significantly-disease.html)
* [2025-03-25, 10:12:17](https://news.ycombinator.com/item?id=43469629) - [9.8 Critical Vulnerabilities in Ingress Nginx](https://www.wiz.io/blog/ingress-nginx-kubernetes-vulnerabilities)
* [2025-03-25, 10:00:00](https://science.slashdot.org/story/25/03/25/013236/firefly-aerospace-selects-blue-origin-unit-to-explore-volcanic-formations-on-moon?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Firefly Aerospace Selects Blue Origin Unit To Explore Volcanic Formations On Moon](https://science.slashdot.org/story/25/03/25/013236/firefly-aerospace-selects-blue-origin-unit-to-explore-volcanic-formations-on-moon?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-25, 09:59:58](https://news.ycombinator.com/item?id=43469565) - [Closing the Chapter on OpenH264](https://bbhtt.space/posts/closing-the-chapter-on-openh264/)
* [2025-03-25, 09:58:23](https://lobste.rs/s/pi7xjh/closing_chapter_on_openh264) - [Closing the chapter on OpenH264](https://bbhtt.space/posts/closing-the-chapter-on-openh264/)
* [2025-03-25, 09:39:48](https://news.ycombinator.com/item?id=43469457) - [Quad9 – A public and free DNS service for a better security and privacy](https://www.quad9.net/)
* [2025-03-25, 09:07:51](https://lobste.rs/s/l5c7gj/next_js_cve_2025_29927) - [Next.js CVE-2025-29927](https://nextjs.org/blog/cve-2025-29927)
* [2025-03-25, 08:14:50](https://news.ycombinator.com/item?id=43468995) - [Spammers are better at SPF, DKIM, and DMARC than everyone else](https://toad.social/@grumpybozo/114213600922816869)
* [2025-03-25, 08:10:36](https://news.ycombinator.com/item?id=43468976) - [Writing your own C++ standard library from scratch](https://nibblestew.blogspot.com/2025/03/writing-your-own-c-standard-library.html)
* [2025-03-25, 07:00:00](https://science.slashdot.org/story/25/03/25/018216/nasas-curiosity-rover-detects-largest-organic-molecules-yet-found-on-mars?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [NASA's Curiosity Rover Detects Largest Organic Molecules Yet Found on Mars](https://science.slashdot.org/story/25/03/25/018216/nasas-curiosity-rover-detects-largest-organic-molecules-yet-found-on-mars?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-25, 06:59:44](https://news.ycombinator.com/item?id=43468666) - [Status as a Service (2019)](https://www.eugenewei.com/blog/2019/2/19/status-as-a-service)
* [2025-03-25, 06:24:00](https://soylentnews.org/article.pl?sid=25/03/24/0335233&from=rss) - [Sperm Donation Giant California Cryobank Warns of a Data Breach](https://soylentnews.org/article.pl?sid=25/03/24/0335233&from=rss)
* [2025-03-25, 06:09:11](https://news.ycombinator.com/item?id=43468491) - [Reflecting on WikiTok](https://www.aizk.sh/posts/reflecting-on-wikitok)
* [2025-03-25, 05:50:36](https://news.ycombinator.com/item?id=43468435) - [Why we chose LangGraph to build our coding agent](https://www.qodo.ai/blog/why-we-chose-langgraph-to-build-our-coding-agent/)
* [2025-03-25, 03:30:00](https://tech.slashdot.org/story/25/03/24/2318217/software-maker-sap-becomes-europes-largest-company?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Software Maker SAP Becomes Europe's Largest Company](https://tech.slashdot.org/story/25/03/24/2318217/software-maker-sap-becomes-europes-largest-company?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-25, 02:33:34](https://lobste.rs/s/avwtt3/post_apocalyptic_computing) - [Post Apocalyptic Computing](https://thomashunter.name/posts/2025-03-23-post-apocalyptic-computing)
* [2025-03-25, 02:19:03](https://news.ycombinator.com/item?id=43467541) - [Search My Site – open-source search engine for personal and independent websites](https://searchmysite.net)
* [2025-03-25, 01:40:00](https://tech.slashdot.org/story/25/03/24/2314215/meta-considers-charging-for-ad-free-facebook-and-instagram-in-the-uk?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Meta Considers Charging For Ad-Free Facebook and Instagram In the UK](https://tech.slashdot.org/story/25/03/24/2314215/meta-considers-charging-for-ad-free-facebook-and-instagram-in-the-uk?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-25, 01:37:00](https://soylentnews.org/article.pl?sid=25/03/23/1454225&from=rss) - [Cement Sand Substitute Made Directly From Seawater, Electricity and CO2](https://soylentnews.org/article.pl?sid=25/03/23/1454225&from=rss)
* [2025-03-25, 01:20:00](https://slashdot.org/story/25/03/25/0058230/samsung-ceo-han-jong-hee-passes-away-at-63?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Samsung CEO Han Jong-hee Passes Away At 63](https://slashdot.org/story/25/03/25/0058230/samsung-ceo-han-jong-hee-passes-away-at-63?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-25, 01:00:00](https://it.slashdot.org/story/25/03/24/2258219/2-in-5-tech-workers-quit-over-inflexible-workspace-policies?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [2 In 5 Tech Workers Quit Over Inflexible Workspace Policies](https://it.slashdot.org/story/25/03/24/2258219/2-in-5-tech-workers-quit-over-inflexible-workspace-policies?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-25, 00:52:39](https://lobste.rs/s/wwclbe/rce_vulnerabilities_k8s_ingress_nginx_9_8) - [RCE Vulnerabilities in k8s Ingress NGINX  (9.8 CVE for ingress-nginx)](https://www.wiz.io/blog/ingress-nginx-kubernetes-vulnerabilities)
* [2025-03-25, 00:20:00](https://apple.slashdot.org/story/25/03/24/2253253/software-engineer-runs-generative-ai-on-20-year-old-powerbook-g4?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Software Engineer Runs Generative AI On 20-Year-Old PowerBook G4](https://apple.slashdot.org/story/25/03/24/2253253/software-engineer-runs-generative-ai-on-20-year-old-powerbook-g4?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-24, 23:40:00](https://slashdot.org/story/25/03/24/2047228/jack-ma-backed-ant-touts-ai-breakthrough-using-chinese-chips?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Jack Ma-Backed Ant Touts AI Breakthrough Using Chinese Chips](https://slashdot.org/story/25/03/24/2047228/jack-ma-backed-ant-touts-ai-breakthrough-using-chinese-chips?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-24, 23:29:03](https://news.ycombinator.com/item?id=43466509) - [German parliament votes as a Git contribution graph](https://abstimmung.eu/git/2024)
* [2025-03-24, 23:00:00](https://it.slashdot.org/story/25/03/24/2035256/microsoft-announces-security-ai-agents-to-help-overwhelmed-humans?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Announces Security AI Agents To Help Overwhelmed Humans](https://it.slashdot.org/story/25/03/24/2035256/microsoft-announces-security-ai-agents-to-help-overwhelmed-humans?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-24, 22:20:00](https://slashdot.org/story/25/03/24/2027250/chinas-engineer-dividend-is-paying-off-big-time?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['China's Engineer Dividend Is Paying Off Big Time'](https://slashdot.org/story/25/03/24/2027250/chinas-engineer-dividend-is-paying-off-big-time?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-24, 22:16:56](https://news.ycombinator.com/item?id=43465971) - [Three Hundred Years Later, a Tool from Isaac Newton Gets an Update](https://www.quantamagazine.org/three-hundred-years-later-a-tool-from-isaac-newton-gets-an-update-20250324/)
* [2025-03-24, 21:40:00](https://news.slashdot.org/story/25/03/24/2027215/faunadb-shuts-down-but-hints-at-open-source-future?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [FaunaDB Shuts Down But Hints At Open Source Future](https://news.slashdot.org/story/25/03/24/2027215/faunadb-shuts-down-but-hints-at-open-source-future?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-24, 21:00:00](https://science.slashdot.org/story/25/03/24/2022232/dna-of-15-million-people-for-sale-in-23andme-bankruptcy?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [DNA of 15 Million People For Sale In 23andMe Bankruptcy](https://science.slashdot.org/story/25/03/24/2022232/dna-of-15-million-people-for-sale-in-23andme-bankruptcy?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-24, 20:52:00](https://soylentnews.org/article.pl?sid=25/03/23/1444231&from=rss) - [\"Old Stump\" in Texas Turns Out to be Incredibly Rare Mammoth Tusk](https://soylentnews.org/article.pl?sid=25/03/23/1444231&from=rss)
* [2025-03-24, 20:20:00](https://science.slashdot.org/story/25/03/24/206247/what-cern-does-next-matters-for-science-and-for-international-cooperation?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['What CERN Does Next Matters For Science and For International Cooperation'](https://science.slashdot.org/story/25/03/24/206247/what-cern-does-next-matters-for-science-and-for-international-cooperation?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-24, 19:40:00](https://slashdot.org/story/25/03/24/1939209/how-a-nephews-cd-burner-inspired-early-valve-to-embrace-drm?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [How a Nephew's CD Burner Inspired Early Valve To Embrace DRM](https://slashdot.org/story/25/03/24/1939209/how-a-nephews-cd-burner-inspired-early-valve-to-embrace-drm?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-24, 19:32:21](https://lobste.rs/s/1o8pik/prospero_challenge) - [The Prospero Challenge](https://www.mattkeeter.com/projects/prospero/)
* [2025-03-24, 19:18:40](https://lobste.rs/s/bsmefl/next_generation_bazel_builds) - [The next generation of Bazel builds](https://blogsystem5.substack.com/p/bazel-next-generation)
* [2025-03-24, 19:04:00](https://science.slashdot.org/story/25/03/24/194257/researchers-search-for-more-precise-ways-to-measure-pain?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Researchers Search For More Precise Ways To Measure Pain](https://science.slashdot.org/story/25/03/24/194257/researchers-search-for-more-precise-ways-to-measure-pain?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-24, 18:35:12](https://news.ycombinator.com/item?id=43464068) - [Qwen2.5-VL-32B: Smarter and Lighter](https://qwenlm.github.io/blog/qwen2.5-vl-32b/)
* [2025-03-24, 17:45:49](https://lobste.rs/s/9sxdp3/ledger_implementation_postgresql) - [Ledger Implementation in PostgreSQL](https://www.pgrs.net/2025/03/24/pgledger-ledger-implementation-in-postgresql/)
* [2025-03-24, 17:36:29](https://lobste.rs/s/pfqqi9/llms_on_powerpc_mac) - [LLMs on a PowerPC Mac](http://www.theresistornetwork.com/2025/03/thinking-different-thinking-slowly-llms.html)
* [2025-03-24, 17:09:07](https://news.ycombinator.com/item?id=43463200) - [I won't connect my dishwasher to your cloud](https://www.jeffgeerling.com/blog/2025/i-wont-connect-my-dishwasher-your-stupid-cloud)
* [2025-03-24, 16:41:27](https://lobste.rs/s/7mmbwk/triforce_microphone_array_beamformer) - [Triforce: a microphone array beamformer for Apple Silicon laptops](https://crates.io/crates/triforce-lv2)
* [2025-03-24, 16:09:00](https://soylentnews.org/article.pl?sid=25/03/23/1439235&from=rss) - [AMD Launches Gaia Open Source Project for Running LLMs Locally on Any PC](https://soylentnews.org/article.pl?sid=25/03/23/1439235&from=rss)
* [2025-03-24, 14:52:30](https://lobste.rs/s/qjzd9y/everyone_quotes_command_line_arguments) - [Everyone quotes command line arguments the wrong way (on Windows)](https://learn.microsoft.com/en-us/archive/blogs/twistylittlepassagesallalike/everyone-quotes-command-line-arguments-the-wrong-way)
* [2025-03-24, 14:45:34](https://news.ycombinator.com/item?id=43461701) - [Triforce – a beamformer for Apple Silicon laptops](https://github.com/chadmed/triforce)
* [2025-03-24, 13:52:18](https://lobste.rs/s/mpopy0/non_obvious_haskell_idiom_conditional) - [Non-Obvious Haskell Idiom: Conditional For](https://entropicthoughts.com/non-obvious-haskell-idiom-conditional-for)
* [2025-03-24, 11:34:00](https://lobste.rs/s/bwadph/gpstracker_self_hosted_foss_alternative) - [GPSTracker: A self-hosted FOSS alternative to Google Maps Timeline](https://blog.fabiomanganiello.com/article/gpstracker-a-self-hosted-alternative-to-google-maps-timeline)
* [2025-03-24, 11:27:00](https://soylentnews.org/article.pl?sid=25/03/23/1437244&from=rss) - [Italy Demands Google Poison DNS Under Strict Piracy Shield Law](https://soylentnews.org/article.pl?sid=25/03/23/1437244&from=rss)
* [2025-03-24, 09:42:24](https://lobste.rs/s/srwduz/notes_on_building_app_looks_like_ikea) - [Notes on building an app that looks like an IKEA manual](https://nmattia.com/posts/2025-03-24-skapa-intro/)
* [2025-03-24, 06:42:00](https://soylentnews.org/article.pl?sid=25/03/23/1435254&from=rss) - [Microsoft Trust Signing Service Abused to Code-Sign Malware](https://soylentnews.org/article.pl?sid=25/03/23/1435254&from=rss)
* [2025-03-24, 05:33:05](https://lobste.rs/s/nshbnc/figma_s_not_design_tool_it_s_rube_goldberg) - [Figma’s not a design tool — it’s a Rube Goldberg machine for avoiding code](https://uxdesign.cc/figmas-not-a-design-tool-it-s-a-rube-goldberg-machine-for-avoiding-code-2a24f11add5d)
* [2025-03-24, 04:18:26](https://lobste.rs/s/mebiow/exploring_ruby_ractors_i_paid_for_for_10) - [Exploring Ruby Ractors -- I paid for for 10 cores I'm gonna use 10 cores](https://jpterry.com/posts/2025/03/exploring-ruby-ractors/)
* [2025-03-24, 01:55:00](https://soylentnews.org/article.pl?sid=25/03/23/1422252&from=rss) - [Autopsies Can Reveal Intimate Health Details. Should They be Kept Private?](https://soylentnews.org/article.pl?sid=25/03/23/1422252&from=rss)
* [2025-03-24, 01:10:50](https://lobste.rs/s/fautbt/avoid_building_security_treadmill) - [Avoid building a security treadmill](https://www.macchaffee.com/blog/2025/security-treadmill/)
* [2025-03-23, 23:49:18](https://lobste.rs/s/uhf7pm/notes_on_coreutils_rust) - [Notes on coreutils in Rust](https://alexgaynor.net/2025/mar/22/coreutils-in-rust/)
* [2025-03-23, 21:10:00](https://soylentnews.org/article.pl?sid=25/03/22/1921254&from=rss) - [First Stroke Rehabilitation Drug That Reestablishes Brain Connections Discovered in Mouse Model](https://soylentnews.org/article.pl?sid=25/03/22/1921254&from=rss)
* [2025-03-23, 16:23:00](https://soylentnews.org/article.pl?sid=25/03/22/1919201&from=rss) - [Why Don't New Cars Come With Spare Tires Anymore?](https://soylentnews.org/article.pl?sid=25/03/22/1919201&from=rss)
* [2025-03-23, 13:46:24](https://news.ycombinator.com/item?id=43452904) - [Battling the Blaze: Artifacts from the history of firefighting](https://worldhistory.substack.com/p/battling-the-blaze)
* [2025-03-23, 12:58:41](https://news.ycombinator.com/item?id=43452588) - [The Lost Towers of the Guelph-Ghibelline Wars](https://www.exurbe.com/the-lost-towers-of-the-guelph-ghibelline-wars/)
* [2025-03-23, 11:38:00](https://soylentnews.org/article.pl?sid=25/03/22/1912255&from=rss) - [US Court of Appeals Unanimously Denies Copyright Protection for AI-Created Images](https://soylentnews.org/article.pl?sid=25/03/22/1912255&from=rss)
* [2025-03-23, 06:52:00](https://soylentnews.org/article.pl?sid=25/03/22/199248&from=rss) - [Cloudflare Turns AI Against Itself With Endless Maze of Irrelevant Facts](https://soylentnews.org/article.pl?sid=25/03/22/199248&from=rss)
* [2025-03-23, 05:58:35](https://news.ycombinator.com/item?id=43451141) - [Show HN: I'm a teacher and built an AI presentation tool](https://news.ycombinator.com/item?id=43451141)
* [2025-03-23, 03:10:33](https://news.ycombinator.com/item?id=43450632) - [A sodium-ion portable power bank comes to market](https://www.theverge.com/news/631357/elecom-power-bank-battery-sodium-ion)
* [2025-03-23, 02:07:00](https://soylentnews.org/article.pl?sid=25/03/22/198241&from=rss) - [Linux Security Hardening Cache Randomization Was Inadvertently Using The Same Seed](https://soylentnews.org/article.pl?sid=25/03/22/198241&from=rss)
* [2025-03-22, 21:52:58](https://news.ycombinator.com/item?id=43448933) - [WWI's 'Dazzle' Camouflage Seemed Effective Due to Unexpected Optical Trick](https://gizmodo.com/wwis-famous-dazzle-camouflage-seemed-effective-due-to-unexpected-optical-trick-study-finds-2000577568)
* [2025-03-22, 21:23:00](https://soylentnews.org/article.pl?sid=25/03/21/1841234&from=rss) - [A Dyson Swarm Made of Solar Panels Would Make Earth Uninhabitable](https://soylentnews.org/article.pl?sid=25/03/21/1841234&from=rss)
* [2025-03-22, 19:33:16](https://news.ycombinator.com/item?id=43448035) - [A study reveals that deciduous trees' roots remain active in winter](https://www.creaf.cat/en/articules/deciduous-trees-roots-remain-active-winter)
* [2025-03-22, 16:39:00](https://soylentnews.org/article.pl?sid=25/03/21/0242250&from=rss) - [Researcher Trolls Microsoft Over Bug Disclosure Annoyance](https://soylentnews.org/article.pl?sid=25/03/21/0242250&from=rss)
* [2025-03-22, 11:53:00](https://soylentnews.org/article.pl?sid=25/03/21/0236216&from=rss) - [Euro Techies Call for Sovereign Fund to Escape US Dependency](https://soylentnews.org/article.pl?sid=25/03/21/0236216&from=rss)
* [2025-03-22, 07:05:00](https://soylentnews.org/article.pl?sid=25/03/21/0227252&from=rss) - [China Will Enforce Clear Flagging of All AI Generated Content Starting From September](https://soylentnews.org/article.pl?sid=25/03/21/0227252&from=rss)
* [2025-03-22, 02:19:00](https://soylentnews.org/article.pl?sid=25/03/21/0159251&from=rss) - [Ubuntu Plans to Swap GNU Coreutils for Rust](https://soylentnews.org/article.pl?sid=25/03/21/0159251&from=rss)
* [2025-03-21, 21:41:18](https://news.ycombinator.com/item?id=43441082) - [CO2 laser enables long-range detection of radioactive material](https://physicsworld.com/a/co2-laser-enables-long-range-detection-of-radioactive-material/)
* [2025-03-21, 21:37:00](https://soylentnews.org/article.pl?sid=25/03/20/0719234&from=rss) - [Academics Accuse AI Startups of Co-Opting Peer Review for Publicity](https://soylentnews.org/article.pl?sid=25/03/20/0719234&from=rss)
* [2025-03-21, 18:24:51](https://news.ycombinator.com/item?id=43439307) - [Gene drive modified mosquitoes offer new tool for malaria elimination efforts](https://www.imperial.ac.uk/news/261995/gene-drive-modified-mosquitoes-offer-tool/)
* [2025-03-21, 16:51:00](https://soylentnews.org/article.pl?sid=25/03/20/0714208&from=rss) - [Los Alamos Scientists Invent Speedometer For Satellites](https://soylentnews.org/article.pl?sid=25/03/20/0714208&from=rss)
* [2025-03-21, 16:32:30](https://news.ycombinator.com/item?id=43437725) - [Brain Scans of Infants Reveal the Moment We Start Making Memories](https://singularityhub.com/2025/03/20/new-baby-brain-scans-reveal-the-moment-we-start-making-memories/)
* [2025-03-21, 12:04:00](https://soylentnews.org/article.pl?sid=25/03/20/0658243&from=rss) - [The Naturalness of the Seasonal Time Change: Researchers Question Basis of Modern Criticism](https://soylentnews.org/article.pl?sid=25/03/20/0658243&from=rss)
* [2025-03-21, 07:21:00](https://soylentnews.org/article.pl?sid=25/03/20/0652220&from=rss) - [North Korea's Bitcoin Reserve Thought to be 3rd Largest in World](https://soylentnews.org/article.pl?sid=25/03/20/0652220&from=rss)
* [2025-03-21, 02:37:00](https://soylentnews.org/article.pl?sid=25/03/19/1458230&from=rss) - [New Undersea Cable Tech Listens For Sabotage  Can Be Retrofitted To Existing Fiber Optic Line](https://soylentnews.org/article.pl?sid=25/03/19/1458230&from=rss)
