# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [ICEBlock climbs to the top of the App Store charts after officials slam it](https://www.engadget.com/social-media/iceblock-climbs-to-the-top-of-the-app-store-charts-after-officials-slam-it-004319963.html) ([comments](https://news.ycombinator.com/item?id=44445180))

* [Huawei releases an open weight model trained on Huawei Ascend GPUs](https://arxiv.org/abs/2505.21411) ([comments](https://news.ycombinator.com/item?id=44441089))

* [Microsoft To Lay Off As Many As 9,000 Employees in Latest Round](https://slashdot.org/story/25/07/02/1330223/microsoft-to-lay-off-as-many-as-9000-employees-in-latest-round?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=44443452))

* [China Successfully Tests Hypersonic Aircraft, Maybe At Mach 12](https://tech.slashdot.org/story/25/07/01/2222223/china-successfully-tests-hypersonic-aircraft-maybe-at-mach-12?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Scientific Advances

* [Gene therapy restored hearing in deaf patients](https://news.ki.se/gene-therapy-restored-hearing-in-deaf-patients) ([comments](https://news.ycombinator.com/item?id=44444626))

* [Earth's Atmosphere Hasn't Had This Much CO2 in Millions of Years](https://news.slashdot.org/story/25/07/02/1323203/earths-atmosphere-hasnt-had-this-much-co2-in-millions-of-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=44445042))

* [A proof-of-concept neural brain implant providing speech](https://arstechnica.com/science/2025/06/a-neural-brain-implant-provides-near-instantaneous-speech/) ([comments](https://news.ycombinator.com/item?id=44412488))

* [New Theory Proposes Time Has Three Dimensions, With Space as a Secondary Effect](https://soylentnews.org/article.pl?sid=25/07/01/028205&amp;from=rss)

## Artificial Intelligence and Machine Learning

* [How I Scanned all of GitHub’s “Oops Commits” for Leaked Secrets worth $25k in Bug Bounties](https://trufflesecurity.com/blog/guest-post-how-i-scanned-all-of-github-s-oops-commits-for-leaked-secrets) ([comments](https://lobste.rs/s/ozsnir/how_i_scanned_all_github_s_oops_commits_for))

* [Show HN: I built an AI comic generator with consistent characters](https://www.glimora.ai) ([comments](https://news.ycombinator.com/item?id=44445042))

* [Hack IKKO "AI powered" earbuds to run DOOM, stole OpenAI API key, customer data](https://blog.mgdproductions.com/ikko-activebuds/) ([comments](https://news.ycombinator.com/item?id=44443919))

* [Cloudflare Introduces Default Blocking of A.I. Data Scrapers](https://www.nytimes.com/2025/07/01/technology/cloudflare-ai-data.html) ([comments](https://news.ycombinator.com/item?id=44443480))

## Cybersecurity and Privacy

* [Azure API vulnerability and roles misconfiguration compromise corporate networks](https://www.token.security/blog/azures-role-roulette-how-over-privileged-roles-and-api-vulnerabilities-expose-enterprise-networks) ([comments](https://news.ycombinator.com/item?id=44443832))

* [Mexican Drug Cartel Hacker Spied on FBI Official&apos;s Phone to Track and Kill Informants](https://soylentnews.org/article.pl?sid=25/07/02/0110229&amp;from=rss) ([comments](https://news.ycombinator.com/item?id=44445200))

* [Bezos-Backed Methane Tracking Satellite Is Lost In Space](https://tech.slashdot.org/story/25/07/01/2211218/bezos-backed-methane-tracking-satellite-is-lost-in-space?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Bluetooth Flaws Could Let Hackers Spy Through Your Microphone](https://soylentnews.org/article.pl?sid=25/06/30/1153228&amp;from=rss)

## Sustainability and Environmental Issues

* [Genetic Study Reveals Humanity's Longest Migration](https://soylentnews.org/article.pl?sid=25/07/01/0415211&amp;from=rss) ([comments](https://yro.slashdot.org/story/25/07/01/0418204))

* [Scientists Unlock the Light-Bending Secrets of Squid Skin](https://soylentnews.org/article.pl?sid=25/06/30/0230251&amp;from=rss)

* [Why Are The Physical Constants of the Universe So Perfect for Life?](https://soylentnews.org/article.pl?sid=25/06/29/1626204&amp;from=rss)

* [Why Do Swallows Fly to the Korean DMZ?](https://www.sapiens.org/culture/korean-dmz-estuary-politics-war-borders-diaspora/)

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

* [2025-07-02, 15:47:32](https://news.ycombinator.com/item?id=44445180) - [ICEBlock climbs to the top of the App Store charts after officials slam it](https://www.engadget.com/social-media/iceblock-climbs-to-the-top-of-the-app-store-charts-after-officials-slam-it-004319963.html)
* [2025-07-02, 15:46:36](https://lobste.rs/s/ozsnir/how_i_scanned_all_github_s_oops_commits_for) - [How I Scanned all of GitHub’s “Oops Commits” for Leaked Secrets worth $25k in Bug Bounties](https://trufflesecurity.com/blog/guest-post-how-i-scanned-all-of-github-s-oops-commits-for-leaked-secrets)
* [2025-07-02, 15:42:07](https://lobste.rs/s/teixnn/rapid_prototyping_safe_logless) - [Rapid Prototyping a Safe, Logless Reconfiguration Protocol for MongoDB with TLA+](https://www.mongodb.com/blog/post/technical/rapid-prototyping-safe-logless-reconfiguration-protocol-mongodb-tla-plus)
* [2025-07-02, 15:38:04](https://news.ycombinator.com/item?id=44445042) - [Show HN: I built an AI comic generator with consistent characters](https://www.glimora.ai)
* [2025-07-02, 15:20:00](https://news.slashdot.org/story/25/07/02/1323203/earths-atmosphere-hasnt-had-this-much-co2-in-millions-of-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Earth&apos;s Atmosphere Hasn&apos;t Had This Much CO2 in Millions of Years](https://news.slashdot.org/story/25/07/02/1323203/earths-atmosphere-hasnt-had-this-much-co2-in-millions-of-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-02, 15:13:48](https://lobste.rs/s/1mknp7/counterexamples_positivity) - [Counterexamples of positivity implications in Kähler curvature tensors](https://www.magnusson.io/post/curvature-examples/)
* [2025-07-02, 15:11:27](https://news.ycombinator.com/item?id=44444722) - [Firefox 120 to Firefox 141 Web Browser Benchmarks](https://www.phoronix.com/review/firefox-benchmarks-120-141)
* [2025-07-02, 15:03:09](https://news.ycombinator.com/item?id=44444626) - [Gene therapy restored hearing in deaf patients](https://news.ki.se/gene-therapy-restored-hearing-in-deaf-patients)
* [2025-07-02, 14:49:44](https://lobste.rs/s/yw8jai/uncloud_tool_for_deploying_managing) - [Uncloud -  tool for deploying and managing containerised applications](https://github.com/psviderski/uncloud)
* [2025-07-02, 14:40:00](https://tech.slashdot.org/story/25/07/02/1136225/uk-eyes-new-law-as-1885-telegraph-act-proves-inadequate-for-cable-sabotage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Eyes New Law as 1885 Telegraph Act Proves Inadequate for Cable Sabotage](https://tech.slashdot.org/story/25/07/02/1136225/uk-eyes-new-law-as-1885-telegraph-act-proves-inadequate-for-cable-sabotage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-02, 14:06:43](https://news.ycombinator.com/item?id=44443919) - [Hack IKKO \&quot;AI powered\&quot; earbuds to run DOOM, stole OpenAI API key, customer data](https://blog.mgdproductions.com/ikko-activebuds/)
* [2025-07-02, 14:00:00](https://slashdot.org/story/25/07/02/1330223/microsoft-to-lay-off-as-many-as-9000-employees-in-latest-round?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft To Lay Off As Many As 9,000 Employees in Latest Round](https://slashdot.org/story/25/07/02/1330223/microsoft-to-lay-off-as-many-as-9000-employees-in-latest-round?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-02, 13:59:55](https://news.ycombinator.com/item?id=44443832) - [Azure API vulnerability and roles misconfiguration compromise corporate networks](https://www.token.security/blog/azures-role-roulette-how-over-privileged-roles-and-api-vulnerabilities-expose-enterprise-networks)
* [2025-07-02, 13:40:33](https://news.ycombinator.com/item?id=44443622) - [Private sector lost 33k jobs, badly missing expectations of 100k increase](https://www.cnbc.com/2025/07/02/adp-jobs-report-june-2025.html)
* [2025-07-02, 13:29:37](https://news.ycombinator.com/item?id=44443492) - [What I learned gathering nootropic ratings](https://troof.blog/posts/nootropics/)
* [2025-07-02, 13:28:56](https://news.ycombinator.com/item?id=44443480) - [Cloudflare Introduces Default Blocking of A.I. Data Scrapers](https://www.nytimes.com/2025/07/01/technology/cloudflare-ai-data.html)
* [2025-07-02, 13:26:44](https://news.ycombinator.com/item?id=44443452) - [Microsoft to Cut 9k Workers in Second Wave of Major Layoffs](https://www.bloomberg.com/news/articles/2025-07-02/microsoft-to-cut-9-000-workers-in-second-wave-of-major-layoffs)
* [2025-07-02, 13:17:00](https://soylentnews.org/article.pl?sid=25/07/02/0110229&amp;from=rss) - [Mexican Drug Cartel Hacker Spied on FBI Official&apos;s Phone to Track and Kill Informants](https://soylentnews.org/article.pl?sid=25/07/02/0110229&amp;from=rss)
* [2025-07-02, 13:00:00](https://games.slashdot.org/story/25/07/01/2239206/young-americans-are-spending-a-whole-lot-less-on-video-games-this-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Young Americans Are Spending a Whole Lot Less On Video Games This Year](https://games.slashdot.org/story/25/07/01/2239206/young-americans-are-spending-a-whole-lot-less-on-video-games-this-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-02, 12:48:22](https://news.ycombinator.com/item?id=44443109) - [I&apos;m dialing back my LLM usage](https://zed.dev/blog/dialing-back-my-llm-usage-with-alberto-fortin)
* [2025-07-02, 12:22:26](https://lobste.rs/s/fewxl0/chapel_programming_language) - [The Chapel Programming Language](https://chapel-lang.org/)
* [2025-07-02, 12:00:53](https://lobste.rs/s/jovlqw/yet_another_zip_trick) - [Yet another ZIP trick](https://hackarcana.com/article/yet-another-zip-trick)
* [2025-07-02, 12:00:35](https://news.ycombinator.com/item?id=44442676) - [Recurse Center (YC S10) Is Hiring a Career Facilitator](https://recurse.notion.site/Career-Facilitator-22300db231b580ba9190df9d5e480080)
* [2025-07-02, 11:39:12](https://news.ycombinator.com/item?id=44442473) - [Don’t use “click here” as link text (2001)](https://www.w3.org/QA/Tips/noClickHere)
* [2025-07-02, 11:00:07](https://news.ycombinator.com/item?id=44442189) - [Hexagon fuzz: Full-system emulated fuzzing of Qualcomm basebands](https://www.srlabs.de/blog-post/hexagon-fuzz-full-system-emulated-fuzzing-of-qualcomm-basebands)
* [2025-07-02, 10:51:16](https://news.ycombinator.com/item?id=44442134) - [They tried Made in the USA – it was too expensive for their customers](https://www.reuters.com/business/they-tried-made-usa-it-was-too-expensive-their-customers-2025-07-02/)
* [2025-07-02, 10:39:38](https://news.ycombinator.com/item?id=44442072) - [How large are large language models?](https://gist.github.com/rain-1/cf0419958250d15893d8873682492c3e)
* [2025-07-02, 10:39:05](https://lobste.rs/s/rmoeg4/how_large_are_large_language_models_2025) - [How large are large language models? (2025)](https://gist.github.com/rain-1/cf0419958250d15893d8873682492c3e)
* [2025-07-02, 10:00:00](https://tech.slashdot.org/story/25/07/01/2222223/china-successfully-tests-hypersonic-aircraft-maybe-at-mach-12?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Successfully Tests Hypersonic Aircraft, Maybe At Mach 12](https://tech.slashdot.org/story/25/07/01/2222223/china-successfully-tests-hypersonic-aircraft-maybe-at-mach-12?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-02, 08:30:00](https://soylentnews.org/article.pl?sid=25/07/01/0415211&amp;from=rss) - [Genetic Study Reveals Humanity&apos;s Longest Migration](https://soylentnews.org/article.pl?sid=25/07/01/0415211&amp;from=rss)
* [2025-07-02, 08:29:25](https://lobste.rs/s/6mu4ac/web_s_broken_deal_with_ai_companies) - [The web&apos;s broken deal with AI companies](https://dri.es/the-webs-broken-deal-with-ai-companies)
* [2025-07-02, 07:36:41](https://news.ycombinator.com/item?id=44441089) - [Huawei releases an open weight model trained on Huawei Ascend GPUs](https://arxiv.org/abs/2505.21411)
* [2025-07-02, 07:00:00](https://tech.slashdot.org/story/25/07/01/2211218/bezos-backed-methane-tracking-satellite-is-lost-in-space?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bezos-Backed Methane Tracking Satellite Is Lost In Space](https://tech.slashdot.org/story/25/07/01/2211218/bezos-backed-methane-tracking-satellite-is-lost-in-space?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-02, 06:41:32](https://lobste.rs/s/exxlii/c2rust_migrate_c_code_rust) - [c2rust: Migrate C code to Rust](https://github.com/immunant/c2rust)
* [2025-07-02, 04:59:00](https://soylentnews.org/meta/article.pl?sid=25/07/02/0418216&amp;from=rss) - [Stripe Donations Back Online](https://soylentnews.org/meta/article.pl?sid=25/07/02/0418216&amp;from=rss)
* [2025-07-02, 04:44:53](https://lobste.rs/s/nqatzn/hell_ffix_tetra_master) - [The Hell of FFIX Tetra Master](https://xvw.lol/en/articles/tetra-master.html)
* [2025-07-02, 03:45:00](https://soylentnews.org/article.pl?sid=25/07/01/028205&amp;from=rss) - [New Theory Proposes Time Has Three Dimensions, With Space as a Secondary Effect](https://soylentnews.org/article.pl?sid=25/07/01/028205&amp;from=rss)
* [2025-07-02, 03:36:39](https://lobste.rs/s/68zztb/openbao_community_fork_vault_released_v2) - [OpenBao, the community fork of Vault, released v2.3.1 with namespaces](https://github.com/openbao/openbao/releases/tag/v2.3.1)
* [2025-07-02, 03:30:00](https://hardware.slashdot.org/story/25/07/01/221237/googles-data-center-energy-use-doubled-in-4-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s Data Center Energy Use Doubled In 4 Years](https://hardware.slashdot.org/story/25/07/01/221237/googles-data-center-energy-use-doubled-in-4-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-02, 03:20:12](https://lobste.rs/s/tw7pzd/you_should_delete_tests) - [You should delete tests](https://andre.arko.net/2025/06/30/you-should-delete-tests/)
* [2025-07-02, 01:50:19](https://lobste.rs/s/bon0u7/clamp_median_range) - [clamp / median / range](https://dotat.at/@/2025-07-02-cmp.html)
* [2025-07-02, 01:25:00](https://hardware.slashdot.org/story/25/07/01/2133224/laptop-mag-is-shutting-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Laptop Mag Is Shutting Down](https://hardware.slashdot.org/story/25/07/01/2133224/laptop-mag-is-shutting-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-02, 00:45:00](https://yro.slashdot.org/story/25/07/01/2128235/apple-accuses-former-engineer-of-taking-vision-pro-secrets-to-snap?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Accuses Former Engineer of Taking Vision Pro Secrets To Snap](https://yro.slashdot.org/story/25/07/01/2128235/apple-accuses-former-engineer-of-taking-vision-pro-secrets-to-snap?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-02, 00:31:48](https://news.ycombinator.com/item?id=44439242) - [Hilbert&apos;s sixth problem: derivation of fluid equations via Boltzmann&apos;s theory](https://arxiv.org/abs/2503.01800)
* [2025-07-02, 00:02:00](https://yro.slashdot.org/story/25/07/01/2112208/tinder-to-require-facial-recognition-check-for-new-users-in-california?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tinder To Require Facial Recognition Check For New Users In California](https://yro.slashdot.org/story/25/07/01/2112208/tinder-to-require-facial-recognition-check-for-new-users-in-california?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-01, 23:39:50](https://lobste.rs/s/566tbj/you_must_listen_rfc_2119) - [You MUST listen to RFC 2119](https://ericwbailey.website/published/you-must-listen-to-rfc-2119/)
* [2025-07-01, 23:29:25](https://lobste.rs/s/vjto95/using_sun_ray_thin_clients_2025) - [using Sun Ray thin clients in 2025](https://catstret.ch/202506/sun-ray-shenanigans/)
* [2025-07-01, 23:20:00](https://slashdot.org/story/25/07/01/2058244/figma-files-for-ipo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Figma Files For IPO](https://slashdot.org/story/25/07/01/2058244/figma-files-for-ipo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-01, 23:00:00](https://slashdot.org/story/25/07/01/2247221/xerox-buys-lexmark-for-15-billion-as-print-industry-clings-to-relevance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Xerox Buys Lexmark For $1.5 Billion As Print Industry Clings To Relevance](https://slashdot.org/story/25/07/01/2247221/xerox-buys-lexmark-for-15-billion-as-print-industry-clings-to-relevance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-01, 22:53:00](https://soylentnews.org/article.pl?sid=25/06/30/1817206&amp;from=rss) - [Ex-Nato Hacker: In Cyber, There’s No Such Thing As A Ceasefire](https://soylentnews.org/article.pl?sid=25/06/30/1817206&amp;from=rss)
* [2025-07-01, 22:40:00](https://entertainment.slashdot.org/story/25/07/01/2052226/amc-warns-moviegoers-to-expect-25-30-minutes-of-ads-and-trailers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AMC Warns Moviegoers To Expect &apos;25-30 Minutes&apos; of Ads and Trailers](https://entertainment.slashdot.org/story/25/07/01/2052226/amc-warns-moviegoers-to-expect-25-30-minutes-of-ads-and-trailers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-01, 22:00:00](https://hardware.slashdot.org/story/25/07/01/2046242/amazon-deploys-its-one-millionth-robot-releases-generative-ai-model?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Deploys Its One Millionth Robot, Releases Generative AI Model](https://hardware.slashdot.org/story/25/07/01/2046242/amazon-deploys-its-one-millionth-robot-releases-generative-ai-model?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-01, 21:20:00](https://tech.slashdot.org/story/25/07/01/1811254/landmark-eu-tech-rules-holding-back-innovation-google-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Landmark EU Tech Rules Holding Back Innovation, Google Says](https://tech.slashdot.org/story/25/07/01/1811254/landmark-eu-tech-rules-holding-back-innovation-google-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-01, 20:26:35](https://news.ycombinator.com/item?id=44437712) - [Fakespot shuts down today after 9 years of detecting fake product reviews](https://blog.truestar.pro/fakespot-shuts-down/)
* [2025-07-01, 19:39:14](https://news.ycombinator.com/item?id=44437316) - [Figma files for proposed IPO](https://www.figma.com/blog/s1-public/)
* [2025-07-01, 18:12:00](https://soylentnews.org/article.pl?sid=25/06/30/1738246&amp;from=rss) - [As AI Kills Search Traffic, Google Launches Offerwall to Boost Publisher Revenue](https://soylentnews.org/article.pl?sid=25/06/30/1738246&amp;from=rss)
* [2025-07-01, 18:08:38](https://news.ycombinator.com/item?id=44436579) - [Sam Altman Slams Meta’s AI Talent Poaching: &apos;Missionaries Will Beat Mercenaries&apos;](https://www.wired.com/story/sam-altman-meta-ai-talent-poaching-spree-leaked-messages/)
* [2025-07-01, 16:52:27](https://lobste.rs/s/zssy2h/software_engineering_with_llms_2025) - [Software engineering with LLMs in 2025: reality check](https://www.youtube.com/watch?v=EO3_qN_Ynsk)
* [2025-07-01, 16:52:09](https://lobste.rs/s/uu3keo/parsing_layout_haskell_s_syntax_is_mess) - [Parsing Layout, or: Haskell&apos;s Syntax is a Mess](https://amelia.how/posts/parsing-layout.html)
* [2025-07-01, 16:43:19](https://news.ycombinator.com/item?id=44435716) - [Code-GUI bidirectional editing via LSP](https://jamesbvaughan.com/bidirectional-editing/)
* [2025-07-01, 16:22:55](https://news.ycombinator.com/item?id=44435484) - [The Fed says this is a cube of $1M. They&apos;re off by half a million](https://calvin.sh/blog/fed-lie/)
* [2025-07-01, 15:47:21](https://lobste.rs/s/zmgjwq/emoji_kitchen_browse_google_s_unique) - [Emoji Kitchen - Browse Google&apos;s unique emoji combinations](https://emojikitchen.dev/)
* [2025-07-01, 14:25:48](https://lobste.rs/s/usceqk/helix_language) - [Helix language](https://github.com/helixlang/helix-lang)
* [2025-07-01, 13:58:29](https://lobste.rs/s/2yvzv1/introducing_pay_per_crawl_enabling) - [Introducing pay per crawl: enabling content owners to charge AI crawlers for access](https://blog.cloudflare.com/introducing-pay-per-crawl/)
* [2025-07-01, 13:28:00](https://soylentnews.org/article.pl?sid=25/06/30/1737227&amp;from=rss) - [Facebook is Starting to Feed its AI With Private, Unpublished Photos](https://soylentnews.org/article.pl?sid=25/06/30/1737227&amp;from=rss)
* [2025-07-01, 12:49:42](https://news.ycombinator.com/item?id=44433409) - [Show HN: Spegel, a Terminal Browser That Uses LLMs to Rewrite Webpages](https://simedw.com/2025/06/23/introducing-spegel/)
* [2025-07-01, 12:48:06](https://lobste.rs/s/yyqk01/from_python_programmer_distributed) - [From Python Programmer to Distributed Systems Researcher in 10 Years Without a PhD](https://emptysqua.re/blog/from-python-programmer-to-distributed-systems-researcher-in-10-years/)
* [2025-07-01, 08:42:00](https://soylentnews.org/article.pl?sid=25/06/30/1153228&amp;from=rss) - [Bluetooth Flaws Could Let Hackers Spy Through Your Microphone](https://soylentnews.org/article.pl?sid=25/06/30/1153228&amp;from=rss)
* [2025-07-01, 08:25:49](https://news.ycombinator.com/item?id=44431786) - [Automatically Rewrite Container Image References in Kubernetes](https://github.com/flemzord/mutating-registry-webhook)
* [2025-07-01, 07:55:54](https://lobste.rs/s/obxxdr/reflections_on_haskell_rust) - [Reflections on Haskell and Rust](https://academy.fpblock.com/blog/rust-haskell-reflections/)
* [2025-07-01, 06:11:46](https://lobste.rs/s/ha3xyn/git_stage_over_git_add) - [`git stage` over `git add`](https://bhoot.dev/2025/git-stage-over-git-add/)
* [2025-07-01, 05:59:13](https://lobste.rs/s/re0ogb/people_keep_inventing_prolly_trees) - [People Keep Inventing Prolly Trees](https://www.dolthub.com/blog/2025-06-03-people-keep-inventing-prolly-trees/)
* [2025-07-01, 03:57:00](https://soylentnews.org/article.pl?sid=25/06/30/1149231&amp;from=rss) - [CISA, NSA Repeat Call for Memory Safe Programming Languages](https://soylentnews.org/article.pl?sid=25/06/30/1149231&amp;from=rss)
* [2025-06-30, 23:41:15](https://lobste.rs/s/qcjdam/doing_my_day_job_on_chimera_linux) - [Doing My Day Job on Chimera Linux](https://www.wezm.net/v2/posts/2025/daily-driving-chimera-for-work/)
* [2025-06-30, 23:13:00](https://soylentnews.org/article.pl?sid=25/06/30/0625204&amp;from=rss) - [Group of Investors Represented by Youtuber Perifractic Buys Commodore](https://soylentnews.org/article.pl?sid=25/06/30/0625204&amp;from=rss)
* [2025-06-30, 18:30:00](https://soylentnews.org/article.pl?sid=25/06/30/0230251&amp;from=rss) - [Scientists Unlock the Light-Bending Secrets of Squid Skin](https://soylentnews.org/article.pl?sid=25/06/30/0230251&amp;from=rss)
* [2025-06-30, 13:45:00](https://soylentnews.org/article.pl?sid=25/06/30/020252&amp;from=rss) - [You Sound Like ChatGPT](https://soylentnews.org/article.pl?sid=25/06/30/020252&amp;from=rss)
* [2025-06-30, 09:03:00](https://soylentnews.org/article.pl?sid=25/06/29/1626204&amp;from=rss) - [Why Are the Physical Constants of the Universe So Perfect for Life?](https://soylentnews.org/article.pl?sid=25/06/29/1626204&amp;from=rss)
* [2025-06-30, 04:18:00](https://soylentnews.org/article.pl?sid=25/06/29/1610258&amp;from=rss) - [At Last, We Are Discovering What Quantum Computers Will be Useful for](https://soylentnews.org/article.pl?sid=25/06/29/1610258&amp;from=rss)
* [2025-06-29, 23:32:00](https://soylentnews.org/article.pl?sid=25/06/29/164217&amp;from=rss) - [Work Begins to Create Artificial Human DNA From Scratch](https://soylentnews.org/article.pl?sid=25/06/29/164217&amp;from=rss)
* [2025-06-29, 18:50:00](https://soylentnews.org/article.pl?sid=25/06/29/1253258&amp;from=rss) - [Why Countries Are Suddenly Broadcasting Their Spies’ Exploits](https://soylentnews.org/article.pl?sid=25/06/29/1253258&amp;from=rss)
* [2025-06-29, 14:05:00](https://soylentnews.org/article.pl?sid=25/06/29/0435239&amp;from=rss) - [First Images From World&apos;s Largest Digital Camera Reveal Galaxies and Cosmic Collisions](https://soylentnews.org/article.pl?sid=25/06/29/0435239&amp;from=rss)
* [2025-06-29, 12:16:14](https://news.ycombinator.com/item?id=44412488) - [A proof-of-concept neural brain implant providing speech](https://arstechnica.com/science/2025/06/a-neural-brain-implant-provides-near-instantaneous-speech/)
* [2025-06-29, 09:19:00](https://soylentnews.org/article.pl?sid=25/06/29/0430235&amp;from=rss) - [Danish Copyright on Your Digital Representation](https://soylentnews.org/article.pl?sid=25/06/29/0430235&amp;from=rss)
* [2025-06-29, 08:19:59](https://news.ycombinator.com/item?id=44411252) - [Chatbot Flow Editor – Visual tool for designing conversation flows](https://github.com/enumura1/chatbot-flow-editor)
* [2025-06-29, 05:17:21](https://news.ycombinator.com/item?id=44410537) - [IntyBASIC: A Basic Compiler for Intellivision](https://nanochess.org/intybasic.html)
* [2025-06-29, 04:46:00](https://soylentnews.org/meta/article.pl?sid=25/06/29/0446225&amp;from=rss) - [Reason for the Site Outage - the Cable Had Been Cut Again!](https://soylentnews.org/meta/article.pl?sid=25/06/29/0446225&amp;from=rss)
* [2025-06-29, 04:35:00](https://soylentnews.org/article.pl?sid=25/06/29/0427207&amp;from=rss) - [Fedora Plans to Drop 32-Bit  i686 Packages](https://soylentnews.org/article.pl?sid=25/06/29/0427207&amp;from=rss)
* [2025-06-28, 20:15:00](https://soylentnews.org/article.pl?sid=25/06/28/0137201&amp;from=rss) - [Win11 Black Screen of Death update](https://soylentnews.org/article.pl?sid=25/06/28/0137201&amp;from=rss)
* [2025-06-28, 17:20:34](https://news.ycombinator.com/item?id=44406401) - [Soldier’s wrist purse discovered at Roman legionary camp](https://www.heritagedaily.com/2025/06/soldiers-wrist-purse-discovered-at-roman-legionary-camp/155513)
* [2025-06-28, 15:30:00](https://soylentnews.org/article.pl?sid=25/06/27/021255&amp;from=rss) - [Sparcs Cubesats To Test Electrodynamic Tethers ](https://soylentnews.org/article.pl?sid=25/06/27/021255&amp;from=rss)
* [2025-06-28, 12:33:44](https://news.ycombinator.com/item?id=44404243) - [Why Do Swallows Fly to the Korean DMZ?](https://www.sapiens.org/culture/korean-dmz-estuary-politics-war-borders-diaspora/)
* [2025-06-28, 11:45:00](https://soylentnews.org/article.pl?sid=25/06/26/1527200&amp;from=rss) - [Canonical to Remove GPU Exploit Mitigation to Gain 20% Performance Boost](https://soylentnews.org/article.pl?sid=25/06/26/1527200&amp;from=rss)
* [2025-06-28, 07:03:00](https://soylentnews.org/article.pl?sid=25/06/26/158255&amp;from=rss) - [Edit is Back](https://soylentnews.org/article.pl?sid=25/06/26/158255&amp;from=rss)
* [2025-06-28, 02:17:00](https://soylentnews.org/article.pl?sid=25/06/26/153208&amp;from=rss) - [Trump Administration Moves to Count Crypto as a Federal Mortgage Asset](https://soylentnews.org/article.pl?sid=25/06/26/153208&amp;from=rss)
