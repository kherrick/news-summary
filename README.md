# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software Developments

* [DNS Speed Test](https://dnsspeedtest.online/) offers users a way to evaluate DNS performance for improved browsing speeds. [Comments](https://news.ycombinator.com/item?id=43469422)

* [Writing your own C++ standard library from scratch](https://nibblestew.blogspot.com/2025/03/writing-your-own-c-standard-library.html) explores the challenges and achievements of creating a custom standard library. [Comments](https://news.ycombinator.com/item?id=43468976)

* [Search My Site – open-source search engine for personal and independent websites](https://searchmysite.net) introduces a project catering to smaller-scale website owners looking for customized search functionality. [Comments](https://news.ycombinator.com/item?id=43467541)

* [The Prospero Challenge](https://www.mattkeeter.com/projects/prospero/) discusses an innovative approach to programming tools and tackling complex software design. [Comments](https://news.ycombinator.com/item?id=43458780)

* [GPSTracker: A self-hosted FOSS alternative to Google Maps Timeline](https://blog.fabiomanganiello.com/article/gpstracker-a-self-hosted-alternative-to-google-maps-timeline) provides privacy-focused tracking with open-source solutions. [Comments](https://lobste.rs/s/bwadph/gpstracker_self_hosted_foss_alternative)

## Science and Space

* [NASA's Curiosity Rover Detects Largest Organic Molecules Yet Found on Mars](https://science.slashdot.org/story/25/03/25/018216/nasas-curiosity-rover-detects-largest-organic-molecules-yet-found-on-mars?utm_source=rss1.0mainlinkanon&utm_medium=feed) reports a monumental discovery from Mars, providing insights into the planet's potential past habitability. [Comments](https://science.slashdot.org/story/25/03/25/018216/nasas-curiosity-rover-detects-largest-organic-molecules-yet-found-on-mars?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* ['What CERN Does Next Matters For Science and For International Cooperation'](https://science.slashdot.org/story/25/03/24/206247/what-cern-does-next-matters-for-science-and-for-international-cooperation?utm_source=rss1.0mainlinkanon&utm_medium=feed) explores the next steps for scientific collaboration and particle physics. [Comments](https://science.slashdot.org/story/25/03/24/206247/what-cern-does-next-matters-for-science-and-for-international-cooperation?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* ["Old Stump" in Texas Turns Out to be Incredibly Rare Mammoth Tusk](https://soylentnews.org/article.pl?sid=25/03/23/1444231&from=rss) highlights a surprising paleontological discovery. [Comments](https://soylentnews.org/article.pl?sid=25/03/23/1444231&from=rss)

## Cybersecurity and Privacy

* [A Sneaky Phish Just Grabbed My Mailchimp Mailing List](https://www.troyhunt.com/a-sneaky-phish-just-grabbed-my-mailchimp-mailing-list/) reveals real-world spear phishing scams and their consequences. [Comments](https://news.ycombinator.com/item?id=43468959)

* [RCE Vulnerabilities in k8s Ingress NGINX  (9.8 CVE for ingress-nginx)](https://www.wiz.io/blog/ingress-nginx-kubernetes-vulnerabilities) uncovers high severity vulnerabilities in Kubernetes Ingress. [Comments](https://lobste.rs/s/wwclbe/rce_vulnerabilities_k8s_ingress_nginx_9_8)

* [Sperm Donation Giant California Cryobank Warns of a Data Breach](https://soylentnews.org/article.pl?sid=25/03/24/0335233&from=rss) alerts users to sensitive information potentially exposed. [Comments](https://soylentnews.org/article.pl?sid=25/03/24/0335233&from=rss)

## Business and Industry

* [Meta Considers Charging For Ad-Free Facebook and Instagram In the UK](https://tech.slashdot.org/story/25/03/24/2314215/meta-considers-charging-for-ad-free-facebook-and-instagram-in-the-uk?utm_source=rss1.0mainlinkanon&utm_medium=feed) discusses possible economic shifts in social media platforms. [Comments](https://tech.slashdot.org/story/25/03/24/2314215/meta-considers-charging-for-ad-free-facebook-and-instagram-in-the-uk?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Software Maker SAP Becomes Europe's Largest Company](https://tech.slashdot.org/story/25/03/24/2318217/software-maker-sap-becomes-europes-largest-company?utm_source=rss1.0mainlinkanon&utm_medium=feed) reflects on SAP's rise to prominence in the European tech sector. [Comments](https://tech.slashdot.org/story/25/03/24/2318217/software-maker-sap-becomes-europes-largest-company?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Jack Ma-Backed Ant Touts AI Breakthrough Using Chinese Chips](https://slashdot.org/story/25/03/24/2047228/jack-ma-backed-ant-touts-ai-breakthrough-using-chinese-chips?utm_source=rss1.0mainlinkanon&utm_medium=feed) showcases an AI advancement relying on domestic hardware innovation. [Comments](https://slashdot.org/story/25/03/24/2047228/jack-ma-backed-ant-touts-ai-breakthrough-using-chinese-chips?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Historical and Philosophical Explorations

* [The Lost Towers of the Guelph-Ghibelline Wars](https://www.exurbe.com/the-lost-towers-of-the-guelph-ghibelline-wars/) provides historical context on Italy's medieval power struggles. [Comments](https://news.ycombinator.com/item?id=43452588)

* [Music and the Decline of Civilization](https://renovatio.zaytuna.edu/article/plato-laws-music-civilization) offers a perspective on musical influence in cultural evolution. [Comments](https://news.ycombinator.com/item?id=43468539)

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

* [2025-03-25, 09:58:23](https://lobste.rs/s/pi7xjh/closing_chapter_on_openh264) - [Closing the chapter on OpenH264](https://bbhtt.space/posts/closing-the-chapter-on-openh264/)
* [2025-03-25, 09:34:35](https://news.ycombinator.com/item?id=43469422) - [DNS Speed Test](https://dnsspeedtest.online/)
* [2025-03-25, 09:07:51](https://lobste.rs/s/l5c7gj/next_js_cve_2025_29927) - [Next.js CVE-2025-29927](https://nextjs.org/blog/cve-2025-29927)
* [2025-03-25, 08:46:07](https://lobste.rs/s/udvqlv/cdc_attack_mitigation_plakar) - [CDC attack mitigation in Plakar](https://plakar.io/articles/2025-03-19/plakar-1.0.1-beta.13-out/#cdc-attacks-publication)
* [2025-03-25, 08:10:36](https://news.ycombinator.com/item?id=43468976) - [Writing your own C++ standard library from scratch](https://nibblestew.blogspot.com/2025/03/writing-your-own-c-standard-library.html)
* [2025-03-25, 08:07:00](https://news.ycombinator.com/item?id=43468959) - [A Sneaky Phish Just Grabbed My Mailchimp Mailing List](https://www.troyhunt.com/a-sneaky-phish-just-grabbed-my-mailchimp-mailing-list/)
* [2025-03-25, 07:00:00](https://science.slashdot.org/story/25/03/25/018216/nasas-curiosity-rover-detects-largest-organic-molecules-yet-found-on-mars?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [NASA's Curiosity Rover Detects Largest Organic Molecules Yet Found on Mars](https://science.slashdot.org/story/25/03/25/018216/nasas-curiosity-rover-detects-largest-organic-molecules-yet-found-on-mars?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-25, 06:59:44](https://news.ycombinator.com/item?id=43468666) - [Status as a Service (2019)](https://www.eugenewei.com/blog/2019/2/19/status-as-a-service)
* [2025-03-25, 06:25:08](https://news.ycombinator.com/item?id=43468539) - [Music and the Decline of Civilization](https://renovatio.zaytuna.edu/article/plato-laws-music-civilization)
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
* [2025-03-24, 21:20:13](https://news.ycombinator.com/item?id=43465508) - [Intel: A Bug and a Pro](https://www.abortretry.fail/p/intel-a-bug-and-a-pro)
* [2025-03-24, 21:15:22](https://lobste.rs/s/p2txwl/autology_hot_take_on_metaprogramming) - [autology: hot take on metaprogramming](https://github.com/Kimbsy/autology)
* [2025-03-24, 21:00:00](https://science.slashdot.org/story/25/03/24/2022232/dna-of-15-million-people-for-sale-in-23andme-bankruptcy?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [DNA of 15 Million People For Sale In 23andMe Bankruptcy](https://science.slashdot.org/story/25/03/24/2022232/dna-of-15-million-people-for-sale-in-23andme-bankruptcy?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-24, 20:52:00](https://soylentnews.org/article.pl?sid=25/03/23/1444231&from=rss) - [\"Old Stump\" in Texas Turns Out to be Incredibly Rare Mammoth Tusk](https://soylentnews.org/article.pl?sid=25/03/23/1444231&from=rss)
* [2025-03-24, 20:40:21](https://news.ycombinator.com/item?id=43465189) - [Aircraft detection at planetary scale](https://www.planet.com/pulse/aircraft-detection-at-planetary-scale/)
* [2025-03-24, 20:20:00](https://science.slashdot.org/story/25/03/24/206247/what-cern-does-next-matters-for-science-and-for-international-cooperation?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['What CERN Does Next Matters For Science and For International Cooperation'](https://science.slashdot.org/story/25/03/24/206247/what-cern-does-next-matters-for-science-and-for-international-cooperation?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-24, 19:40:00](https://slashdot.org/story/25/03/24/1939209/how-a-nephews-cd-burner-inspired-early-valve-to-embrace-drm?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [How a Nephew's CD Burner Inspired Early Valve To Embrace DRM](https://slashdot.org/story/25/03/24/1939209/how-a-nephews-cd-burner-inspired-early-valve-to-embrace-drm?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-24, 19:32:21](https://lobste.rs/s/1o8pik/prospero_challenge) - [The Prospero Challenge](https://www.mattkeeter.com/projects/prospero/)
* [2025-03-24, 19:18:40](https://lobste.rs/s/bsmefl/next_generation_bazel_builds) - [The next generation of Bazel builds](https://blogsystem5.substack.com/p/bazel-next-generation)
* [2025-03-24, 19:04:00](https://science.slashdot.org/story/25/03/24/194257/researchers-search-for-more-precise-ways-to-measure-pain?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Researchers Search For More Precise Ways To Measure Pain](https://science.slashdot.org/story/25/03/24/194257/researchers-search-for-more-precise-ways-to-measure-pain?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-24, 18:35:12](https://news.ycombinator.com/item?id=43464068) - [Qwen2.5-VL-32B: Smarter and Lighter](https://qwenlm.github.io/blog/qwen2.5-vl-32b/)
* [2025-03-24, 18:25:00](https://news.slashdot.org/story/25/03/24/1822226/pentagon-axes-hr-system-after-780-budget-overrun?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Pentagon Axes HR System After 780% Budget Overrun](https://news.slashdot.org/story/25/03/24/1822226/pentagon-axes-hr-system-after-780-budget-overrun?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-24, 17:45:49](https://lobste.rs/s/9sxdp3/ledger_implementation_postgresql) - [Ledger Implementation in PostgreSQL](https://www.pgrs.net/2025/03/24/pgledger-ledger-implementation-in-postgresql/)
* [2025-03-24, 17:36:29](https://lobste.rs/s/pfqqi9/llms_on_powerpc_mac) - [LLMs on a PowerPC Mac](http://www.theresistornetwork.com/2025/03/thinking-different-thinking-slowly-llms.html)
* [2025-03-24, 17:09:07](https://news.ycombinator.com/item?id=43463200) - [I won't connect my dishwasher to your cloud](https://www.jeffgeerling.com/blog/2025/i-wont-connect-my-dishwasher-your-stupid-cloud)
* [2025-03-24, 16:41:27](https://lobste.rs/s/7mmbwk/triforce_microphone_array_beamformer) - [Triforce: a microphone array beamformer for Apple Silicon laptops](https://crates.io/crates/triforce-lv2)
* [2025-03-24, 16:35:07](https://news.ycombinator.com/item?id=43462882) - [Project Operation Whitecoat (2010)](https://scholarworks.lib.csusb.edu/cgi/viewcontent.cgi?article=1201&context=history-in-the-making)
* [2025-03-24, 16:09:00](https://soylentnews.org/article.pl?sid=25/03/23/1439235&from=rss) - [AMD Launches Gaia Open Source Project for Running LLMs Locally on Any PC](https://soylentnews.org/article.pl?sid=25/03/23/1439235&from=rss)
* [2025-03-24, 15:29:06](https://lobste.rs/s/fcxnbt/holograms_light_leaks_how_build_css_only) - [Holograms, light-leaks and how to build CSS-only shaders](https://robbowen.digital/wrote-about/css-blend-mode-shaders/)
* [2025-03-24, 14:52:30](https://lobste.rs/s/qjzd9y/everyone_quotes_command_line_arguments) - [Everyone quotes command line arguments the wrong way (on Windows)](https://learn.microsoft.com/en-us/archive/blogs/twistylittlepassagesallalike/everyone-quotes-command-line-arguments-the-wrong-way)
* [2025-03-24, 14:45:34](https://news.ycombinator.com/item?id=43461701) - [Triforce – a beamformer for Apple Silicon laptops](https://github.com/chadmed/triforce)
* [2025-03-24, 13:52:18](https://lobste.rs/s/mpopy0/non_obvious_haskell_idiom_conditional) - [Non-Obvious Haskell Idiom: Conditional For](https://entropicthoughts.com/non-obvious-haskell-idiom-conditional-for)
* [2025-03-24, 13:43:23](https://lobste.rs/s/ujc13n/bringing_record_replay_everywhere) - [Bringing Record and Replay everywhere](https://github.com/sidkshatriya/me/blob/master/008-rr-everywhere.md)
* [2025-03-24, 12:07:56](https://lobste.rs/s/sff5iz/nix_derivations_by_hand) - [Nix derivations by hand](https://fzakaria.com/2025/03/23/nix-derivations-by-hand)
* [2025-03-24, 11:34:00](https://lobste.rs/s/bwadph/gpstracker_self_hosted_foss_alternative) - [GPSTracker: A self-hosted FOSS alternative to Google Maps Timeline](https://blog.fabiomanganiello.com/article/gpstracker-a-self-hosted-alternative-to-google-maps-timeline)
* [2025-03-24, 11:27:00](https://soylentnews.org/article.pl?sid=25/03/23/1437244&from=rss) - [Italy Demands Google Poison DNS Under Strict Piracy Shield Law](https://soylentnews.org/article.pl?sid=25/03/23/1437244&from=rss)
* [2025-03-24, 09:42:24](https://lobste.rs/s/srwduz/notes_on_building_app_looks_like_ikea) - [Notes on building an app that looks like an IKEA manual](https://nmattia.com/posts/2025-03-24-skapa-intro/)
* [2025-03-24, 09:04:43](https://news.ycombinator.com/item?id=43458780) - [The Prospero Challenge](https://www.mattkeeter.com/projects/prospero/)
* [2025-03-24, 08:56:50](https://lobste.rs/s/ufykgh/golang_on_playstation_2) - [Golang on the PlayStation 2](https://rgsilva.com/blog/ps2-go-part-1/)
* [2025-03-24, 06:42:00](https://soylentnews.org/article.pl?sid=25/03/23/1435254&from=rss) - [Microsoft Trust Signing Service Abused to Code-Sign Malware](https://soylentnews.org/article.pl?sid=25/03/23/1435254&from=rss)
* [2025-03-24, 05:33:05](https://lobste.rs/s/nshbnc/figma_s_not_design_tool_it_s_rube_goldberg) - [Figma’s not a design tool — it’s a Rube Goldberg machine for avoiding code](https://uxdesign.cc/figmas-not-a-design-tool-it-s-a-rube-goldberg-machine-for-avoiding-code-2a24f11add5d)
* [2025-03-24, 05:05:55](https://lobste.rs/s/vccjki/gitbutler_s_new_patch_based_code_review) - [GitButler's new patch based Code Review (Beta)](https://blog.gitbutler.com/gitbutlers-new-patch-based-code-review/)
* [2025-03-24, 04:18:26](https://lobste.rs/s/mebiow/exploring_ruby_ractors_i_paid_for_for_10) - [Exploring Ruby Ractors -- I paid for for 10 cores I'm gonna use 10 cores](https://jpterry.com/posts/2025/03/exploring-ruby-ractors/)
* [2025-03-24, 01:55:00](https://soylentnews.org/article.pl?sid=25/03/23/1422252&from=rss) - [Autopsies Can Reveal Intimate Health Details. Should They be Kept Private?](https://soylentnews.org/article.pl?sid=25/03/23/1422252&from=rss)
* [2025-03-24, 01:10:50](https://lobste.rs/s/fautbt/avoid_building_security_treadmill) - [Avoid building a security treadmill](https://www.macchaffee.com/blog/2025/security-treadmill/)
* [2025-03-23, 23:52:25](https://lobste.rs/s/mw6kqw/cassette_audio_control_for_web) - [A Cassette Audio Control for the Web](https://sheep.horse/2025/3/a_cassette_audio_control_for_the_web.html)
* [2025-03-23, 23:49:18](https://lobste.rs/s/uhf7pm/notes_on_coreutils_rust) - [Notes on coreutils in Rust](https://alexgaynor.net/2025/mar/22/coreutils-in-rust/)
* [2025-03-23, 21:10:00](https://soylentnews.org/article.pl?sid=25/03/22/1921254&from=rss) - [First Stroke Rehabilitation Drug That Reestablishes Brain Connections Discovered in Mouse Model](https://soylentnews.org/article.pl?sid=25/03/22/1921254&from=rss)
* [2025-03-23, 18:52:40](https://news.ycombinator.com/item?id=43454915) - [Show HN: LinkedIn sucks, so I built a better one](https://heyopenspot.com/)
* [2025-03-23, 16:23:00](https://soylentnews.org/article.pl?sid=25/03/22/1919201&from=rss) - [Why Don't New Cars Come With Spare Tires Anymore?](https://soylentnews.org/article.pl?sid=25/03/22/1919201&from=rss)
* [2025-03-23, 12:58:41](https://news.ycombinator.com/item?id=43452588) - [The Lost Towers of the Guelph-Ghibelline Wars](https://www.exurbe.com/the-lost-towers-of-the-guelph-ghibelline-wars/)
* [2025-03-23, 11:38:00](https://soylentnews.org/article.pl?sid=25/03/22/1912255&from=rss) - [US Court of Appeals Unanimously Denies Copyright Protection for AI-Created Images](https://soylentnews.org/article.pl?sid=25/03/22/1912255&from=rss)
* [2025-03-23, 06:52:59](https://news.ycombinator.com/item?id=43451279) - [MRubyD: A new mruby virtual machine implemented in pure C#](https://github.com/hadashiA/MRubyD)
* [2025-03-23, 06:52:00](https://soylentnews.org/article.pl?sid=25/03/22/199248&from=rss) - [Cloudflare Turns AI Against Itself With Endless Maze of Irrelevant Facts](https://soylentnews.org/article.pl?sid=25/03/22/199248&from=rss)
* [2025-03-23, 05:58:35](https://news.ycombinator.com/item?id=43451141) - [Show HN: I'm a teacher and built an AI presentation tool](https://news.ycombinator.com/item?id=43451141)
* [2025-03-23, 02:07:00](https://soylentnews.org/article.pl?sid=25/03/22/198241&from=rss) - [Linux Security Hardening Cache Randomization Was Inadvertently Using The Same Seed](https://soylentnews.org/article.pl?sid=25/03/22/198241&from=rss)
* [2025-03-22, 21:52:58](https://news.ycombinator.com/item?id=43448933) - [WWI's 'Dazzle' Camouflage Seemed Effective Due to Unexpected Optical Trick](https://gizmodo.com/wwis-famous-dazzle-camouflage-seemed-effective-due-to-unexpected-optical-trick-study-finds-2000577568)
* [2025-03-22, 21:23:00](https://soylentnews.org/article.pl?sid=25/03/21/1841234&from=rss) - [A Dyson Swarm Made of Solar Panels Would Make Earth Uninhabitable](https://soylentnews.org/article.pl?sid=25/03/21/1841234&from=rss)
* [2025-03-22, 19:33:16](https://news.ycombinator.com/item?id=43448035) - [A study reveals that deciduous trees' roots remain active in winter](https://www.creaf.cat/en/articules/deciduous-trees-roots-remain-active-winter)
* [2025-03-22, 16:39:00](https://soylentnews.org/article.pl?sid=25/03/21/0242250&from=rss) - [Researcher Trolls Microsoft Over Bug Disclosure Annoyance](https://soylentnews.org/article.pl?sid=25/03/21/0242250&from=rss)
* [2025-03-22, 11:53:00](https://soylentnews.org/article.pl?sid=25/03/21/0236216&from=rss) - [Euro Techies Call for Sovereign Fund to Escape US Dependency](https://soylentnews.org/article.pl?sid=25/03/21/0236216&from=rss)
* [2025-03-22, 07:05:00](https://soylentnews.org/article.pl?sid=25/03/21/0227252&from=rss) - [China Will Enforce Clear Flagging of All AI Generated Content Starting From September](https://soylentnews.org/article.pl?sid=25/03/21/0227252&from=rss)
* [2025-03-22, 06:54:49](https://news.ycombinator.com/item?id=43444059) - [Yahoo is selling TechCrunch to private equity firm Regent](https://techcrunch.com/2025/03/21/techcrunch-has-personal-news/)
* [2025-03-22, 02:19:00](https://soylentnews.org/article.pl?sid=25/03/21/0159251&from=rss) - [Ubuntu Plans to Swap GNU Coreutils for Rust](https://soylentnews.org/article.pl?sid=25/03/21/0159251&from=rss)
* [2025-03-21, 21:41:18](https://news.ycombinator.com/item?id=43441082) - [CO2 laser enables long-range detection of radioactive material](https://physicsworld.com/a/co2-laser-enables-long-range-detection-of-radioactive-material/)
* [2025-03-21, 21:37:00](https://soylentnews.org/article.pl?sid=25/03/20/0719234&from=rss) - [Academics Accuse AI Startups of Co-Opting Peer Review for Publicity](https://soylentnews.org/article.pl?sid=25/03/20/0719234&from=rss)
* [2025-03-21, 18:10:19](https://news.ycombinator.com/item?id=43439138) - [Can Parrot Brains Teach Us About Human Speech?](https://www.smithsonianmag.com/smart-news/can-parrot-brains-teach-us-about-human-speech-study-finds-budgies-have-language-producing-regions-that-resemble-our-own-180986282/)
* [2025-03-21, 16:51:00](https://soylentnews.org/article.pl?sid=25/03/20/0714208&from=rss) - [Los Alamos Scientists Invent Speedometer For Satellites](https://soylentnews.org/article.pl?sid=25/03/20/0714208&from=rss)
* [2025-03-21, 16:32:30](https://news.ycombinator.com/item?id=43437725) - [Brain Scans of Infants Reveal the Moment We Start Making Memories](https://singularityhub.com/2025/03/20/new-baby-brain-scans-reveal-the-moment-we-start-making-memories/)
* [2025-03-21, 14:30:18](https://news.ycombinator.com/item?id=43436157) - [600M years of shared environmental stress response found in algae and plants](https://phys.org/news/2025-03-million-years-environmental-stress-response.html)
* [2025-03-21, 12:04:00](https://soylentnews.org/article.pl?sid=25/03/20/0658243&from=rss) - [The Naturalness of the Seasonal Time Change: Researchers Question Basis of Modern Criticism](https://soylentnews.org/article.pl?sid=25/03/20/0658243&from=rss)
* [2025-03-21, 10:37:16](https://news.ycombinator.com/item?id=43434010) - [Autology: A Lisp with access to its own interpreter](https://github.com/Kimbsy/autology)
* [2025-03-21, 08:17:19](https://news.ycombinator.com/item?id=43433030) - [The earliest versions of the first C compiler known to exist](https://github.com/mortdeus/legacy-cc)
* [2025-03-21, 07:21:00](https://soylentnews.org/article.pl?sid=25/03/20/0652220&from=rss) - [North Korea's Bitcoin Reserve Thought to be 3rd Largest in World](https://soylentnews.org/article.pl?sid=25/03/20/0652220&from=rss)
* [2025-03-21, 02:37:00](https://soylentnews.org/article.pl?sid=25/03/19/1458230&from=rss) - [New Undersea Cable Tech Listens For Sabotage  Can Be Retrofitted To Existing Fiber Optic Line](https://soylentnews.org/article.pl?sid=25/03/19/1458230&from=rss)
