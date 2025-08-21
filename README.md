# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Machine Learning

* [Google AI Mode Is Expanding To 180 Countries, Adding an Agentic Restaurant Finder](https://tech.slashdot.org/story/25/08/21/1952214/google-ai-mode-is-expanding-to-180-countries-adding-an-agentic-restaurant-finder?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Google's AI Mode continues its global rollout with agentic capabilities such as enhanced restaurant discovery.

* [In the long run, LLMs make us dumber](https://desunit.com/blog/in-the-long-run-llms-make-us-dumber/) - Examines the potential unintended consequences of widespread reliance on large language models.

* [Building AI products in the probabilistic era](https://giansegato.com/essays/probabilistic-era) - Insights into creating forward-thinking AI tools as uncertainty modeling becomes critical.

* [Weaponizing image scaling against production AI systems](https://blog.trailofbits.com/2025/08/21/weaponizing-image-scaling-against-production-ai-systems/) - A study on how malicious image manipulations can undermine machine learning systems.

## Tech Industry Developments

* [Denmark Ending Letter Deliveries Is a Sign of the Digital Times](https://tech.slashdot.org/story/25/08/21/1928230/denmark-ending-letter-deliveries-is-a-sign-of-the-digital-times?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Denmark moves closer to an all-digital postal system, marking the end of traditional letter deliveries.

* [Microsoft Re-joins Handheld Gaming Fight Against Nintendo's Switch](https://games.slashdot.org/story/25/08/21/187249/microsoft-re-joins-handheld-gaming-fight-against-nintendos-switch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Microsoft enters the handheld gaming race once again, challenging Nintendo's dominance.

* [Cisco Announces Mass Layoffs Just After Soaring Revenue Report](https://slashdot.org/story/25/08/21/1858221/cisco-announces-mass-layoffs-just-after-soaring-revenue-report?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Raises questions on corporate practices as significant layoffs are announced despite record profits.

## Science and Environment

* [Artificial Light Has Essentially Lengthened Birds' Day](https://science.slashdot.org/story/25/08/21/1949240/artificial-light-has-essentially-lengthened-birds-day?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Research highlights the profound impacts of artificial light on avian physiology and behavior.

* [Solar Panels in Space 'Could Provide 80% of Europe's Renewable Energy By 2050'](https://news.slashdot.org/story/25/08/21/1650224/solar-panels-in-space-could-provide-80-of-europes-renewable-energy-by-2050?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Discusses the potential of space-based solar power for Europe's energy transition.

* [If AI Takes Most of Our Jobs, Money as We Know It Will be Over. What Then?](https://soylentnews.org/article.pl?sid=25/08/20/033241&amp;from=rss) - Explores the economic implications of AI-driven job automation.

## Programming and Development

* [A Decoder Ring for AI Job Titles](https://www.dbreunig.com/2025/08/21/a-guide-to-ai-titles.html) - Demystifying job titles in the AI sector and what each role entails.

* [Why do software developers love complexity?](https://kyrylo.org/software/2025/08/21/why-do-software-developers-love-complexity.html) - An insightful critique of developers' proclivity for overly complex systems.

* [The unbearable slowness of AI coding](https://joshuavaldez.com/the-unbearable-slowness-of-ai-coding/) - A developer discusses frustrations tied to AI-related software engineering processes.

## Society and Ethics

* [Bank Forced To Rehire Workers After Lying About Chatbot Productivity, Union Says](https://slashdot.org/story/25/08/21/1919258/bank-forced-to-rehire-workers-after-lying-about-chatbot-productivity-union-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A controversy over chatbot efficiency claims leads to workforce reinstatements.

* [T-Mobile Claimed Selling Location Data Without Consent is Legal - Judges Disagree](https://yro.slashdot.org/story/25/08/21/160246/t-mobile-claimed-selling-location-data-without-consent-is-legal---judges-disagree?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Court ruling against T-Mobile emphasizes privacy rights amid contentious data-selling practices.

* [Mozilla Warns Germany Could Declare Ad Blockers Illegal](https://soylentnews.org/article.pl?sid=25/08/20/1736217&amp;from=rss) - Mozilla voices concern over potential legislation threatening ad-blocking software in Germany.

## Fascinating Discoveries

* [Physics of Badminton’s New Killer Spin Serve](https://soylentnews.org/article.pl?sid=25/08/20/1743213&amp;from=rss) - Analyzes the underlying physics contributing to innovative badminton serving techniques.

* [How Chefs and Scientists Are Using Kombucha and Kimchi to Study Microbiology](https://soylentnews.org/article.pl?sid=25/08/20/0125237&amp;from=rss) - Examines how fermented foods like kombucha are aiding microbiological research.

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

* [2025-08-21, 21:40:00](https://tech.slashdot.org/story/25/08/21/1952214/google-ai-mode-is-expanding-to-180-countries-adding-an-agentic-restaurant-finder?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google AI Mode Is Expanding To 180 Countries, Adding an Agentic Restaurant Finder](https://tech.slashdot.org/story/25/08/21/1952214/google-ai-mode-is-expanding-to-180-countries-adding-an-agentic-restaurant-finder?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-21, 21:14:16](https://lobste.rs/s/my8sdy/agent_inference_user_agent_browser_quiz) - [Agent Inference - A user-agent / browser quiz](https://ai.174070135.xyz/)
* [2025-08-21, 21:04:39](https://news.ycombinator.com/item?id=44978073) - [Text.ai (YC X25) Is Hiring Founding Full-Stack Engineer](https://www.ycombinator.com/companies/text-ai/jobs/OJBr0v2-founding-full-stack-engineer)
* [2025-08-21, 21:00:00](https://science.slashdot.org/story/25/08/21/1949240/artificial-light-has-essentially-lengthened-birds-day?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Artificial Light Has Essentially Lengthened Birds&apos; Day](https://science.slashdot.org/story/25/08/21/1949240/artificial-light-has-essentially-lengthened-birds-day?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-21, 20:49:00](https://soylentnews.org/article.pl?sid=25/08/20/1759228&amp;from=rss) - [Uncovering the Fraudsters and Their Schemes Responsible for Polluting the Scientific Literature](https://soylentnews.org/article.pl?sid=25/08/20/1759228&amp;from=rss)
* [2025-08-21, 20:26:44](https://news.ycombinator.com/item?id=44977645) - [Uv format: Code Formatting Comes to uv (experimentally)](https://pydevtools.com/blog/uv-format-code-formatting-comes-to-uv-experimentally/)
* [2025-08-21, 20:20:00](https://tech.slashdot.org/story/25/08/21/1928230/denmark-ending-letter-deliveries-is-a-sign-of-the-digital-times?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Denmark Ending Letter Deliveries Is a Sign of the Digital Times](https://tech.slashdot.org/story/25/08/21/1928230/denmark-ending-letter-deliveries-is-a-sign-of-the-digital-times?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-21, 20:03:14](https://lobste.rs/s/ej6pen/grug_design) - [grug.design](https://www.grug.design/know)
* [2025-08-21, 20:01:00](https://lobste.rs/s/hty9zp/why_do_software_developers_love) - [Why do software developers love complexity?](https://kyrylo.org/software/2025/08/21/why-do-software-developers-love-complexity.html)
* [2025-08-21, 19:47:02](https://news.ycombinator.com/item?id=44977189) - [Crimes with Python&apos;s Pattern Matching (2022)](https://www.hillelwayne.com/post/python-abc/)
* [2025-08-21, 19:40:00](https://slashdot.org/story/25/08/21/1919258/bank-forced-to-rehire-workers-after-lying-about-chatbot-productivity-union-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bank Forced To Rehire Workers After Lying About Chatbot Productivity, Union Says](https://slashdot.org/story/25/08/21/1919258/bank-forced-to-rehire-workers-after-lying-about-chatbot-productivity-union-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-21, 19:33:33](https://lobste.rs/s/e5sio6/using_common_lisp_from_inside_browser) - [Using Common Lisp from inside the Browser](https://turtleware.eu/posts/Using-Common-Lisp-from-inside-the-Browser.html)
* [2025-08-21, 19:22:26](https://news.ycombinator.com/item?id=44976929) - [A Decoder Ring for AI Job Titles](https://www.dbreunig.com/2025/08/21/a-guide-to-ai-titles.html)
* [2025-08-21, 19:10:39](https://news.ycombinator.com/item?id=44976815) - [In the long run, LLMs make us dumber](https://desunit.com/blog/in-the-long-run-llms-make-us-dumber/)
* [2025-08-21, 19:06:09](https://news.ycombinator.com/item?id=44976764) - [DeepSeek-v3.1 Release](https://api-docs.deepseek.com/news/news250821)
* [2025-08-21, 18:58:00](https://slashdot.org/story/25/08/21/1858221/cisco-announces-mass-layoffs-just-after-soaring-revenue-report?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cisco Announces Mass Layoffs Just After Soaring Revenue Report](https://slashdot.org/story/25/08/21/1858221/cisco-announces-mass-layoffs-just-after-soaring-revenue-report?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-21, 18:49:57](https://news.ycombinator.com/item?id=44976568) - [AI tooling must be disclosed for contributions](https://github.com/ghostty-org/ghostty/pull/8289)
* [2025-08-21, 18:42:10](https://news.ycombinator.com/item?id=44976468) - [Building AI products in the probabilistic era](https://giansegato.com/essays/probabilistic-era)
* [2025-08-21, 18:39:31](https://news.ycombinator.com/item?id=44976437) - [The unbearable slowness of AI coding](https://joshuavaldez.com/the-unbearable-slowness-of-ai-coding/)
* [2025-08-21, 18:27:07](https://lobste.rs/s/fzszai/on_benchmarking_minizinc_linkedin) - [On Benchmarking MiniZinc and the LinkedIn Queens Problem - zayenz.se](https://zayenz.se/blog/post/benchmarking-linkedin-queens/)
* [2025-08-21, 18:10:00](https://games.slashdot.org/story/25/08/21/187249/microsoft-re-joins-handheld-gaming-fight-against-nintendos-switch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Re-joins Handheld Gaming Fight Against Nintendo&apos;s Switch](https://games.slashdot.org/story/25/08/21/187249/microsoft-re-joins-handheld-gaming-fight-against-nintendos-switch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-21, 17:53:30](https://lobste.rs/s/c35dnv/bitnami_deprecation) - [Bitnami Deprecation](https://raesene.github.io/blog/2025/08/21/bitnami-deprecation/)
* [2025-08-21, 17:30:00](https://tech.slashdot.org/story/25/08/21/1727239/google-says-the-quiet-part-out-loud-ip68-protection-doesnt-last?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Says the Quiet Part Out Loud: IP68 Protection Doesn&apos;t Last](https://tech.slashdot.org/story/25/08/21/1727239/google-says-the-quiet-part-out-loud-ip68-protection-doesnt-last?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-21, 17:15:13](https://lobste.rs/s/xoa1sx/core_rust) - [the core of rust](https://jyn.dev/the-core-of-rust/)
* [2025-08-21, 17:13:56](https://news.ycombinator.com/item?id=44975378) - [The contrarian physics podcast subculture](https://timothynguyen.org/2025/08/21/physics-grifters-eric-weinstein-sabine-hossenfelder-and-a-crisis-of-credibility/)
* [2025-08-21, 16:50:00](https://news.slashdot.org/story/25/08/21/1650224/solar-panels-in-space-could-provide-80-of-europes-renewable-energy-by-2050?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Solar Panels in Space &apos;Could Provide 80% of Europe&apos;s Renewable Energy By 2050&apos;](https://news.slashdot.org/story/25/08/21/1650224/solar-panels-in-space-could-provide-80-of-europes-renewable-energy-by-2050?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-21, 16:27:22](https://news.ycombinator.com/item?id=44974688) - [The Core of Rust](https://jyn.dev/the-core-of-rust/)
* [2025-08-21, 16:09:00](https://soylentnews.org/article.pl?sid=25/08/20/1743213&amp;from=rss) - [Physics of Badminton’s New Killer Spin Serve](https://soylentnews.org/article.pl?sid=25/08/20/1743213&amp;from=rss)
* [2025-08-21, 16:04:26](https://lobste.rs/s/jfqq8g/discrete_optimization_for_on_call) - [Discrete optimization for on-call scheduling (2021)](https://www.rainforestqa.com/blog/discrete-optimization-for-on-call-scheduling)
* [2025-08-21, 16:01:00](https://yro.slashdot.org/story/25/08/21/160246/t-mobile-claimed-selling-location-data-without-consent-is-legal---judges-disagree?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [T-Mobile Claimed Selling Location Data Without Consent is Legal - Judges Disagree](https://yro.slashdot.org/story/25/08/21/160246/t-mobile-claimed-selling-location-data-without-consent-is-legal---judges-disagree?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-21, 15:54:15](https://news.ycombinator.com/item?id=44974330) - [Adding my home electricity uptime to status.href.cat](https://aggressivelyparaphrasing.me/2025/08/21/adding-my-home-electricity-uptime-to-status-href-cat/)
* [2025-08-21, 15:51:48](https://lobste.rs/s/nhmsd8/adding_my_home_electricity_uptime_status) - [adding my home electricity uptime to status.href.cat](https://aggressivelyparaphrasing.me/2025/08/21/adding-my-home-electricity-uptime-to-status-href-cat/)
* [2025-08-21, 15:46:16](https://news.ycombinator.com/item?id=44974230) - [I forced every engineer to take sales calls and they rewrote our platform](https://old.reddit.com/r/Entrepreneur/comments/1mw5yfg/forced_every_engineer_to_take_sales_calls_they/)
* [2025-08-21, 15:25:46](https://lobste.rs/s/wthfwo/ledger_2023) - [Ledger (2023)](https://lock.cmpxchg8b.com/ledger.html)
* [2025-08-21, 15:21:00](https://tech.slashdot.org/story/25/08/21/1416226/the-ai-powered-pdf-marks-the-end-of-an-era?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The AI-Powered PDF Marks the End of an Era](https://tech.slashdot.org/story/25/08/21/1416226/the-ai-powered-pdf-marks-the-end-of-an-era?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-21, 15:12:53](https://lobste.rs/s/gayfir/aur_chaos_malware_analysis) - [AUR Chaos malware: an analysis](https://www.mh4ckt3mh4ckt1c4s.xyz/blog/aur-chaos-malware-analysis/)
* [2025-08-21, 15:09:38](https://news.ycombinator.com/item?id=44973758) - [Launch HN: Skope (YC S25) – Outcome-based pricing for software products](https://news.ycombinator.com/item?id=44973758)
* [2025-08-21, 14:53:17](https://lobste.rs/s/worwkg/fun_weirdness_with_ssds) - [Fun and weirdness with SSDs](https://vondra.me/posts/fun-and-weirdness-with-ssds/)
* [2025-08-21, 14:47:43](https://lobste.rs/s/s4jdny/my_other_email_client_is_daemon) - [My other email client is a daemon](https://feyor.sh/blog/my-other-email-client-is-a-mail-daemon/)
* [2025-08-21, 14:45:10](https://lobste.rs/s/5lp2et/hyperclay_single_file_html_apps) - [Hyperclay | Single File HTML APPS](https://hyperclay.com/)
* [2025-08-21, 14:40:00](https://news.slashdot.org/story/25/08/21/1224252/us-will-not-approve-solar-or-wind-power-projects-president-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Will Not Approve Solar or Wind Power Projects, President Says](https://news.slashdot.org/story/25/08/21/1224252/us-will-not-approve-solar-or-wind-power-projects-president-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-21, 14:39:45](https://news.ycombinator.com/item?id=44973375) - [Beyond sensor data: Foundation models of behavioral data from wearables](https://arxiv.org/abs/2507.00191)
* [2025-08-21, 14:35:13](https://lobste.rs/s/pnyraf/new_rust_packaging_model) - [A New Rust Packaging Model](https://guix.gnu.org/en/blog/2025/a-new-rust-packaging-model/)
* [2025-08-21, 14:05:10](https://lobste.rs/s/suoszg/d4d4) - [D4d4](https://www.nmichaels.org/musings/d4d4/d4d4/)
* [2025-08-21, 14:00:00](https://tech.slashdot.org/story/25/08/21/0543252/china-isolates-itself-from-worldwide-web-for-over-an-hour?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Isolates Itself From Worldwide Web For Over an Hour](https://tech.slashdot.org/story/25/08/21/0543252/china-isolates-itself-from-worldwide-web-for-over-an-hour?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-21, 13:01:11](https://news.ycombinator.com/item?id=44972238) - [Show HN: ChartDB Cloud – Visualize and Share Database Diagrams](https://app.chartdb.io)
* [2025-08-21, 13:00:00](https://meta.slashdot.org/story/25/08/21/0258229/whistleblower-alleges-meta-artificially-boosted-shops-ads-performance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Whistleblower Alleges Meta Artificially Boosted Shops Ads Performance](https://meta.slashdot.org/story/25/08/21/0258229/whistleblower-alleges-meta-artificially-boosted-shops-ads-performance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-21, 12:58:17](https://news.ycombinator.com/item?id=44972213) - [How Well Does the Money Laundering Control System Work?](https://www.journals.uchicago.edu/doi/10.1086/735665)
* [2025-08-21, 12:31:46](https://news.ycombinator.com/item?id=44971954) - [Privately-Owned Rail Cars](https://www.amtrak.com/privately-owned-rail-cars)
* [2025-08-21, 12:24:07](https://lobste.rs/s/cr9eqw/month_ai_bugs_2025) - [The Month of AI Bugs 2025](https://monthofaibugs.com/)
* [2025-08-21, 12:21:38](https://news.ycombinator.com/item?id=44971850) - [How does the US use water?](https://www.construction-physics.com/p/how-does-the-us-use-water)
* [2025-08-21, 12:20:53](https://news.ycombinator.com/item?id=44971845) - [Weaponizing image scaling against production AI systems](https://blog.trailofbits.com/2025/08/21/weaponizing-image-scaling-against-production-ai-systems/)
* [2025-08-21, 11:24:00](https://soylentnews.org/article.pl?sid=25/08/20/1736217&amp;from=rss) - [Mozilla Warns Germany Could Declare Ad Blockers Illegal](https://soylentnews.org/article.pl?sid=25/08/20/1736217&amp;from=rss)
* [2025-08-21, 11:04:08](https://news.ycombinator.com/item?id=44971273) - [Mark Zuckerberg freezes AI hiring amid bubble fears](https://www.telegraph.co.uk/business/2025/08/21/zuckerberg-freezes-ai-hiring-amid-bubble-fears/)
* [2025-08-21, 10:54:13](https://news.ycombinator.com/item?id=44971212) - [Using Podman, Compose and BuildKit](https://emersion.fr/blog/2025/using-podman-compose-and-buildkit/)
* [2025-08-21, 10:12:35](https://news.ycombinator.com/item?id=44970981) - [Why is D3 so Verbose?](https://theheasman.com/short_stories/why-is-d3-code-so-long-and-complicated-or-why-is-it-so-verbose/)
* [2025-08-21, 10:00:00](https://tech.slashdot.org/story/25/08/21/0218239/intuit-claims-security-concerns-in-dropping-windows-10-for-turbotax?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intuit Claims Security Concerns In Dropping Windows 10 For TurboTax](https://tech.slashdot.org/story/25/08/21/0218239/intuit-claims-security-concerns-in-dropping-windows-10-for-turbotax?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-21, 08:54:06](https://news.ycombinator.com/item?id=44970563) - [My other email client is a daemon](https://feyor.sh/blog/my-other-email-client-is-a-mail-daemon/)
* [2025-08-21, 07:31:51](https://lobste.rs/s/sm1y3p/faster_loading_credentials_from) - [Faster loading of credentials from Bitwarden using rbw](https://blog.aleksic.dev/short-note-faster-loading-of-credentials-from-bitwarden-using-rbw)
* [2025-08-21, 07:00:00](https://hardware.slashdot.org/story/25/08/21/0251255/google-plans-advanced-nuclear-reactor-project-for-tennessee?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Plans Advanced Nuclear Reactor Project For Tennessee](https://hardware.slashdot.org/story/25/08/21/0251255/google-plans-advanced-nuclear-reactor-project-for-tennessee?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-21, 06:38:00](https://soylentnews.org/article.pl?sid=25/08/20/033241&amp;from=rss) - [If AI Takes Most of Our Jobs, Money as We Know It Will be Over. What Then?](https://soylentnews.org/article.pl?sid=25/08/20/033241&amp;from=rss)
* [2025-08-21, 03:08:51](https://lobste.rs/s/dlobhb/optique_type_safe_combinatorial_cli) - [Optique: Type-safe combinatorial CLI parser for TypeScript](https://optique.dev/)
* [2025-08-21, 01:52:00](https://soylentnews.org/article.pl?sid=25/08/20/0153218&amp;from=rss) - [A Treatise on AI Chatbots Undermining the Enlightenment](https://soylentnews.org/article.pl?sid=25/08/20/0153218&amp;from=rss)
* [2025-08-20, 21:08:00](https://soylentnews.org/article.pl?sid=25/08/20/0149227&amp;from=rss) - [Whoops, They Did It Again](https://soylentnews.org/article.pl?sid=25/08/20/0149227&amp;from=rss)
* [2025-08-20, 21:04:23](https://lobste.rs/s/muv9ja/let_jj_absorb_help_you_keep_clean_commit) - [Let `jj absorb` help you keep a clean commit history](https://www.pauladamsmith.com/blog/2025/08/jj-absorb.html)
* [2025-08-20, 20:48:01](https://lobste.rs/s/3bsfgs/nasa_s_10_rules_for_safety_critical_code) - [NASA’s 10 Rules for Safety-Critical Code](https://en.wikipedia.org/wiki/The_Power_of_10:_Rules_for_Developing_Safety-Critical_Code)
* [2025-08-20, 20:30:48](https://lobste.rs/s/qw5iyf/why_are_anime_catgirls_blocking_my_access) - [Why are anime catgirls blocking my access to the Linux kernel?](https://lock.cmpxchg8b.com/anubis.html)
* [2025-08-20, 19:14:34](https://lobste.rs/s/78syo9/default_musl_allocator_considered) - [Default musl allocator considered harmful (to performance)](https://nickb.dev/blog/default-musl-allocator-considered-harmful-to-performance/)
* [2025-08-20, 18:45:16](https://lobste.rs/s/seffg9/zig_0_15_1_release_notes) - [Zig 0.15.1 Release Notes](https://ziglang.org/download/0.15.1/release-notes.html)
* [2025-08-20, 16:22:00](https://soylentnews.org/article.pl?sid=25/08/20/0132257&amp;from=rss) - [The Big Slow Church Move](https://soylentnews.org/article.pl?sid=25/08/20/0132257&amp;from=rss)
* [2025-08-20, 11:35:00](https://soylentnews.org/article.pl?sid=25/08/20/0125237&amp;from=rss) - [How Chefs and Scientists Are Using Kombucha and Kimchi to Study Microbiology](https://soylentnews.org/article.pl?sid=25/08/20/0125237&amp;from=rss)
* [2025-08-20, 11:03:02](https://lobste.rs/s/zxglnn/code_review_can_be_better) - [Code Review Can Be Better](https://tigerbeetle.com/blog/2025-08-04-code-review-can-be-better/)
* [2025-08-20, 06:48:00](https://soylentnews.org/article.pl?sid=25/08/19/1550241&amp;from=rss) - [Scientists Say Tool Can Sniff 5G Traffic, Launch &apos;Attacks&apos; Without Using Rogue Base Stations](https://soylentnews.org/article.pl?sid=25/08/19/1550241&amp;from=rss)
* [2025-08-20, 02:06:00](https://soylentnews.org/article.pl?sid=25/08/19/1547232&amp;from=rss) - [Can’t Pay, Won’t Pay: Impoverished Streaming Services are Driving Viewers Back to Piracy](https://soylentnews.org/article.pl?sid=25/08/19/1547232&amp;from=rss)
* [2025-08-19, 21:21:00](https://soylentnews.org/article.pl?sid=25/08/19/0050215&amp;from=rss) - [Attorneys General, HCA Settle Over Nurse Training Repayment Provisions](https://soylentnews.org/article.pl?sid=25/08/19/0050215&amp;from=rss)
* [2025-08-19, 19:23:00](https://soylentnews.org/article.pl?sid=25/08/19/195256&amp;from=rss) - [Only 3 Stories in the Submissions Queue](https://soylentnews.org/article.pl?sid=25/08/19/195256&amp;from=rss)
* [2025-08-19, 16:35:00](https://soylentnews.org/article.pl?sid=25/08/19/0044229&amp;from=rss) - [Federal Court Filing System Hit in Sweeping Hack](https://soylentnews.org/article.pl?sid=25/08/19/0044229&amp;from=rss)
* [2025-08-19, 11:53:00](https://soylentnews.org/article.pl?sid=25/08/19/0039216&amp;from=rss) - [Charged Drops Don&apos;t Splash](https://soylentnews.org/article.pl?sid=25/08/19/0039216&amp;from=rss)
* [2025-08-19, 07:05:00](https://soylentnews.org/article.pl?sid=25/08/18/126258&amp;from=rss) - [Scientists 3D Print Inside a Living Cell](https://soylentnews.org/article.pl?sid=25/08/18/126258&amp;from=rss)
* [2025-08-19, 02:20:00](https://soylentnews.org/article.pl?sid=25/08/18/122222&amp;from=rss) - [Wikipedia Loses Challenge Against Online Safety Act, but the Door is Open for a Challenge](https://soylentnews.org/article.pl?sid=25/08/18/122222&amp;from=rss)
* [2025-08-18, 21:33:00](https://soylentnews.org/article.pl?sid=25/08/18/1144234&amp;from=rss) - [A Tale of Two Distros: One Outgoing and One Incoming](https://soylentnews.org/article.pl?sid=25/08/18/1144234&amp;from=rss)
* [2025-08-18, 16:48:00](https://soylentnews.org/article.pl?sid=25/08/18/1141215&amp;from=rss) - [Radioactive Water From UK Nuclear Bomb Base Leaked Into Sea, Files Show](https://soylentnews.org/article.pl?sid=25/08/18/1141215&amp;from=rss)
* [2025-08-18, 16:42:53](https://news.ycombinator.com/item?id=44942627) - [Miles from the ocean, there&apos;s diving beneath the streets of Budapest](https://www.cnn.com/2025/08/18/travel/budapest-diving-molnar-janos-cave)
* [2025-08-18, 16:01:44](https://news.ycombinator.com/item?id=44942099) - [Show HN: OS X Mavericks Forever](https://mavericksforever.com/)
* [2025-08-18, 15:19:05](https://news.ycombinator.com/item?id=44941605) - [An interactive guide to SVG paths](https://www.joshwcomeau.com/svg/interactive-guide-to-paths/)
* [2025-08-18, 12:43:31](https://news.ycombinator.com/item?id=44939948) - [Beyond the Logo: How We&apos;re Weaving Full Images Inside QR Codes](https://blog.nitroqr.com/beyond-the-logo-how-were-weaving-full-images-inside-qr-codes)
* [2025-08-18, 12:05:00](https://soylentnews.org/article.pl?sid=25/08/17/1234239&amp;from=rss) - [Toothpaste Made From Hair Provides Natural Root to Repair Teeth](https://soylentnews.org/article.pl?sid=25/08/17/1234239&amp;from=rss)
* [2025-08-18, 07:21:00](https://soylentnews.org/article.pl?sid=25/08/17/1246229&amp;from=rss) - [Firefox’s New “AI” Features Cause CPU Spikes and Battery Drain](https://soylentnews.org/article.pl?sid=25/08/17/1246229&amp;from=rss)
* [2025-08-18, 02:36:00](https://soylentnews.org/article.pl?sid=25/08/17/1237215&amp;from=rss) - [Blackhole Bounce - New Universes](https://soylentnews.org/article.pl?sid=25/08/17/1237215&amp;from=rss)
* [2025-08-18, 01:49:43](https://news.ycombinator.com/item?id=44936627) - [The power of two random choices (2012)](https://brooker.co.za/blog/2012/01/17/two-random.html)
* [2025-08-17, 21:53:00](https://soylentnews.org/article.pl?sid=25/08/17/1310222&amp;from=rss) - [What’s a Smut Peddler to Do These Days?](https://soylentnews.org/article.pl?sid=25/08/17/1310222&amp;from=rss)
* [2025-08-17, 17:08:00](https://soylentnews.org/article.pl?sid=25/08/17/0238238&amp;from=rss) - [Air Pollution Filters Help Scientists Produce First UK Wildlife Survey Using eDNA](https://soylentnews.org/article.pl?sid=25/08/17/0238238&amp;from=rss)
* [2025-08-17, 15:42:32](https://news.ycombinator.com/item?id=44932401) - [D4D4](https://www.nmichaels.org/musings/d4d4/d4d4/)
* [2025-08-17, 12:21:00](https://soylentnews.org/article.pl?sid=25/08/17/0227231&amp;from=rss) - [Massive Magnets Are on the Move: Repurposing Electromagnets for Research](https://soylentnews.org/article.pl?sid=25/08/17/0227231&amp;from=rss)
* [2025-08-17, 07:34:00](https://soylentnews.org/article.pl?sid=25/08/16/1255244&amp;from=rss) - [People Reoccupied Pompeii After Vesuvius Eruption, Archaeologists Find](https://soylentnews.org/article.pl?sid=25/08/16/1255244&amp;from=rss)
* [2025-08-17, 02:47:00](https://soylentnews.org/article.pl?sid=25/08/16/0019213&amp;from=rss) - [Bill Gates Declares the End of the Smartphone Era and Unveils Its Surprising Replacement](https://soylentnews.org/article.pl?sid=25/08/16/0019213&amp;from=rss)
