# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Computing

* [Smartwatches Offer Little Insight Into Stress Levels, Researchers Find](https://science.slashdot.org/story/25/08/08/2150214/smartwatches-offer-little-insight-into-stress-levels-researchers-find?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Research challenges the effectiveness of smartwatches in accurately measuring stress, calling into question their utility.

* [Red Teams Jailbreak GPT-5 With Ease, Warn It's 'Nearly Unusable' For Enterprise](https://it.slashdot.org/story/25/08/08/2113251/red-teams-jailbreak-gpt-5-with-ease-warn-its-nearly-unusable-for-enterprise?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Security experts highlight vulnerabilities in GPT-5, suggesting potential risks for enterprise applications.

* [How we replaced Elasticsearch and MongoDB with Rust and RocksDB](https://radar.com/blog/high-performance-geocoding-in-rust) - An engineering case study exploring scalability and performance gains achieved by migrating to Rust and RocksDB.

* [HRT's Python fork: Leveraging PEP 690 for faster imports](https://www.hudsonrivertrading.com/hrtbeat/inside-hrts-python-fork/) - Insights into Hudson River Trading's custom Python implementation and the use of PEP 690 for performance.

* [Efrit: A native elisp coding agent running in Emacs](https://github.com/steveyegge/efrit) - A tool unleashed for Emacs users, enabling an interactive coding assistant embedded natively.

* [Introducing spindle](https://blog.tangled.sh/ci) - A new CI tool for efficient software development pipelines.

* [Hypothesis is now thread-safe](https://hypothesis.works/articles/thread-safe/) - A notable update introduces thread safety to the Hypothesis testing library, improving its utility in multi-threaded projects.

## Policy, Regulation, and Governance

* [Net Neutrality Advocates Won't Appeal Loss](https://yro.slashdot.org/story/25/08/08/222237/net-neutrality-advocates-wont-appeal-loss?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Proponents of net neutrality decide not to challenge a recent legal defeat.

* [China Tells Brokers To Stop Touting Stablecoins To Cool Frenzy](https://news.slashdot.org/story/25/08/08/1817200/china-tells-brokers-to-stop-touting-stablecoins-to-cool-frenzy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Regulatory pressure emerges in China to dampen the surge in stablecoin promotions.

* [South Korea Postpones Decision To Let Google Maps Work Properly - Again](https://tech.slashdot.org/story/25/08/08/1840243/south-korea-postpones-decision-to-let-google-maps-work-properly---again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A continuation of regulatory hesitancies around Google Maps functionality in South Korea.

* [AI Industry Horrified To Face Largest Copyright Class Action Ever Certified](https://yro.slashdot.org/story/25/08/08/2040214/ai-industry-horrified-to-face-largest-copyright-class-action-ever-certified?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A major legal challenge looms for the AI sector with unprecedented copyright claims.

## Science and Innovation

* [Little-known leguminous plant can increase beef production by 60% (2022)](https://www.embrapa.br/en/busca-de-noticias/-/noticia/75361634/little-known-leguminous-plant-can-increase-beef-production-by-60) - An agricultural breakthrough highlights the potential of using leguminous plants to revolutionize beef production.

* [Frequent Nightmares Predict Early Death More Strongly Than Smoking or Obesity, Study Finds](https://science.slashdot.org/story/25/08/08/1711205/frequent-nightmares-predict-early-death-more-strongly-than-smoking-or-obesity-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A surprising study underscores the health risks correlated with frequent nightmares.

* [Hiding Secret Codes in Light Can Protect Against Fake Videos](https://soylentnews.org/article.pl?sid=25/08/07/0248239&amp;from=rss) - Pioneering technology leveraging light codes emerges as a tool to combat video forgery.

* [Apollo 13 Astronaut Jim Lovell Dies At 97](https://science.slashdot.org/story/25/08/08/211245/apollo-13-astronaut-jim-lovell-dies-at-97?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Remembering the legacy of Jim Lovell, the famed Apollo 13 commander.

## Gaming and Entertainment

* [Millions Flock To Grow Virtual Gardens In Viral Roblox Game](https://games.slashdot.org/story/25/08/08/2140221/millions-flock-to-grow-virtual-gardens-in-viral-roblox-game?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A Roblox game allowing users to cultivate virtual gardens becomes a cultural sensation.

* [Astronomy Photographer of the Year 2025 shortlist](https://www.rmg.co.uk/whats-on/astronomy-photographer-year/galleries/2025-shortlist) - A showcase of the shortlisted entries unveils some of the most stunning celestial photography.

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

* [2025-08-09, 03:30:00](https://science.slashdot.org/story/25/08/08/2150214/smartwatches-offer-little-insight-into-stress-levels-researchers-find?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Smartwatches Offer Little Insight Into Stress Levels, Researchers Find](https://science.slashdot.org/story/25/08/08/2150214/smartwatches-offer-little-insight-into-stress-levels-researchers-find?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-09, 02:46:24](https://lobste.rs/s/vxbmex/efrit_native_elisp_coding_agent_running) - [efrit: A native elisp coding agent running in Emacs](https://github.com/steveyegge/efrit)
* [2025-08-09, 02:44:20](https://lobste.rs/s/5qq2k2/why_is_github_ui_getting_so_much_slower) - [Why is GitHub UI getting so much slower?](https://yoyo-code.com/why-is-github-ui-getting-so-much-slower/)
* [2025-08-09, 02:02:00](https://yro.slashdot.org/story/25/08/08/222237/net-neutrality-advocates-wont-appeal-loss?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Net Neutrality Advocates Won&apos;t Appeal Loss](https://yro.slashdot.org/story/25/08/08/222237/net-neutrality-advocates-wont-appeal-loss?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-09, 01:37:30](https://news.ycombinator.com/item?id=44843369) - [Dial-up Internet to be discontinued](https://help.aol.com/articles/dial-up-internet-to-be-discontinued)
* [2025-08-09, 01:25:00](https://games.slashdot.org/story/25/08/08/2140221/millions-flock-to-grow-virtual-gardens-in-viral-roblox-game?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Millions Flock To Grow Virtual Gardens In Viral Roblox Game](https://games.slashdot.org/story/25/08/08/2140221/millions-flock-to-grow-virtual-gardens-in-viral-roblox-game?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-09, 01:05:32](https://lobste.rs/s/wnmrkl/spellchecker_used_be_major_feat_software) - [A Spellchecker Used to Be a Major Feat of Software Engineering](https://prog21.dadgum.com/29.html)
* [2025-08-09, 00:45:00](https://yro.slashdot.org/story/25/08/08/2133257/uk-courts-service-covered-up-it-bug-that-lost-evidence?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Courts Service &apos;Covered Up&apos; IT Bug That Lost Evidence](https://yro.slashdot.org/story/25/08/08/2133257/uk-courts-service-covered-up-it-bug-that-lost-evidence?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-09, 00:02:00](https://it.slashdot.org/story/25/08/08/2113251/red-teams-jailbreak-gpt-5-with-ease-warn-its-nearly-unusable-for-enterprise?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Red Teams Jailbreak GPT-5 With Ease, Warn It&apos;s &apos;Nearly Unusable&apos; For Enterprise](https://it.slashdot.org/story/25/08/08/2113251/red-teams-jailbreak-gpt-5-with-ease-warn-its-nearly-unusable-for-enterprise?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-08, 23:35:00](https://soylentnews.org/article.pl?sid=25/08/08/0056210&amp;from=rss) - [RFK Jr Cancels $500m in mRNA Vaccine Development in the US](https://soylentnews.org/article.pl?sid=25/08/08/0056210&amp;from=rss)
* [2025-08-08, 23:20:56](https://news.ycombinator.com/item?id=44842700) - [Little-known leguminous plant can increase beef production by 60% (2022)](https://www.embrapa.br/en/busca-de-noticias/-/noticia/75361634/little-known-leguminous-plant-can-increase-beef-production-by-60)
* [2025-08-08, 23:20:00](https://science.slashdot.org/story/25/08/08/211245/apollo-13-astronaut-jim-lovell-dies-at-97?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apollo 13 Astronaut Jim Lovell Dies At 97](https://science.slashdot.org/story/25/08/08/211245/apollo-13-astronaut-jim-lovell-dies-at-97?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-08, 22:42:42](https://news.ycombinator.com/item?id=44842442) - [How to safely escape JSON inside HTML SCRIPT elements](https://sirre.al/2025/08/06/safe-json-in-script-tags-how-not-to-break-a-site/)
* [2025-08-08, 22:40:00](https://slashdot.org/story/25/08/08/2053229/chatgpt-is-bringing-back-4o?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ChatGPT Is Bringing Back 4o](https://slashdot.org/story/25/08/08/2053229/chatgpt-is-bringing-back-4o?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-08, 22:00:00](https://yro.slashdot.org/story/25/08/08/2040214/ai-industry-horrified-to-face-largest-copyright-class-action-ever-certified?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Industry Horrified To Face Largest Copyright Class Action Ever Certified](https://yro.slashdot.org/story/25/08/08/2040214/ai-industry-horrified-to-face-largest-copyright-class-action-ever-certified?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-08, 21:51:29](https://lobste.rs/s/vzr1b1/introducing_spindle) - [Introducing spindle](https://blog.tangled.sh/ci)
* [2025-08-08, 21:35:30](https://lobste.rs/s/bc53lh/lobsters_interview_with_hwayne) - [Lobsters Interview with Hwayne](https://lobste.rs/s/bc53lh/lobsters_interview_with_hwayne)
* [2025-08-08, 21:22:00](https://tech.slashdot.org/story/25/08/08/1840243/south-korea-postpones-decision-to-let-google-maps-work-properly---again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [South Korea Postpones Decision To Let Google Maps Work Properly - Again](https://tech.slashdot.org/story/25/08/08/1840243/south-korea-postpones-decision-to-let-google-maps-work-properly---again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-08, 21:20:21](https://lobste.rs/s/qtm9uv/puzzling_python_program) - [A puzzling Python program](https://jo3-l.dev/posts/python-countdown/)
* [2025-08-08, 20:41:00](https://news.slashdot.org/story/25/08/08/1828209/the-fcc-will-review-emergency-alert-systems-in-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The FCC Will Review Emergency Alert Systems in the US](https://news.slashdot.org/story/25/08/08/1828209/the-fcc-will-review-emergency-alert-systems-in-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-08, 20:01:00](https://news.slashdot.org/story/25/08/08/1817200/china-tells-brokers-to-stop-touting-stablecoins-to-cool-frenzy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Tells Brokers To Stop Touting Stablecoins To Cool Frenzy](https://news.slashdot.org/story/25/08/08/1817200/china-tells-brokers-to-stop-touting-stablecoins-to-cool-frenzy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-08, 19:34:03](https://lobste.rs/s/w6xvpd/overview_jepsen_at_bugbash_2025) - [Overview of Jepsen at BugBash 2025](https://antithesis.com/blog/2025/bugbash_2025/kyle_kingsbury/)
* [2025-08-08, 19:27:28](https://news.ycombinator.com/item?id=44840728) - [Ask HN: How can ChatGPT serve 700M users when I can&apos;t run one GPT-4 locally?](https://news.ycombinator.com/item?id=44840728)
* [2025-08-08, 19:24:07](https://news.ycombinator.com/item?id=44840693) - [Build durable workflows with Postgres](https://www.dbos.dev/blog/why-postgres-durable-execution)
* [2025-08-08, 19:21:00](https://slashdot.org/story/25/08/08/1751220/how-intels-ceo-helped-create-chinas-chip-industry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Intel&apos;s CEO Helped Create China&apos;s Chip Industry](https://slashdot.org/story/25/08/08/1751220/how-intels-ceo-helped-create-chinas-chip-industry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-08, 19:20:51](https://news.ycombinator.com/item?id=44840654) - [Efrit: A native elisp coding agent running in Emacs](https://github.com/steveyegge/efrit)
* [2025-08-08, 19:12:18](https://news.ycombinator.com/item?id=44840582) - [Jim Lovell, Apollo 13 commander, has died](https://www.nasa.gov/news-release/acting-nasa-administrator-reflects-on-legacy-of-astronaut-jim-lovell/)
* [2025-08-08, 19:10:23](https://lobste.rs/s/hct5qg/breaking_sorting_barrier_for_directed) - [Breaking the Sorting Barrier for Directed Single-Source Shortest Paths](https://arxiv.org/abs/2504.17033)
* [2025-08-08, 18:50:00](https://soylentnews.org/article.pl?sid=25/08/07/1131203&amp;from=rss) - [More Malware Uploaded to Arch Linux AUR](https://soylentnews.org/article.pl?sid=25/08/07/1131203&amp;from=rss)
* [2025-08-08, 18:46:11](https://news.ycombinator.com/item?id=44840307) - [Json2dir: a JSON-to-directory converter, a fast alternative to home-manager](https://github.com/alurm/json2dir)
* [2025-08-08, 18:40:00](https://tech.slashdot.org/story/25/08/08/1719205/google-ending-steam-for-chromebook-support-in-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Ending Steam for Chromebook Support in 2026](https://tech.slashdot.org/story/25/08/08/1719205/google-ending-steam-for-chromebook-support-in-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-08, 18:19:05](https://news.ycombinator.com/item?id=44840013) - [I want everything local – Building my offline AI workspace](https://instavm.io/blog/building-my-offline-ai-workspace)
* [2025-08-08, 18:04:26](https://news.ycombinator.com/item?id=44839842) - [The surprise deprecation of GPT-4o for ChatGPT consumers](https://simonwillison.net/2025/Aug/8/surprise-deprecation-of-gpt-4o/)
* [2025-08-08, 18:00:00](https://science.slashdot.org/story/25/08/08/1711205/frequent-nightmares-predict-early-death-more-strongly-than-smoking-or-obesity-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Frequent Nightmares Predict Early Death More Strongly Than Smoking or Obesity, Study Finds](https://science.slashdot.org/story/25/08/08/1711205/frequent-nightmares-predict-early-death-more-strongly-than-smoking-or-obesity-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-08, 17:43:40](https://lobste.rs/s/qq2x8t/lvfs_sustainability_plan) - [LVFS Sustainability Plan](https://blogs.gnome.org/hughsie/2025/08/08/lvfs-sustainability-plan/)
* [2025-08-08, 17:20:00](https://news.slashdot.org/story/25/08/08/1655253/the-troubling-decline-in-conscientiousness?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Troubling Decline in Conscientiousness](https://news.slashdot.org/story/25/08/08/1655253/the-troubling-decline-in-conscientiousness?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-08, 16:16:20](https://news.ycombinator.com/item?id=44838733) - [Open SWE: An open-source asynchronous coding agent](https://blog.langchain.com/introducing-open-swe-an-open-source-asynchronous-coding-agent/)
* [2025-08-08, 16:12:03](https://news.ycombinator.com/item?id=44838687) - [HRT&apos;s Python fork: Leveraging PEP 690 for faster imports](https://www.hudsonrivertrading.com/hrtbeat/inside-hrts-python-fork/)
* [2025-08-08, 15:45:27](https://news.ycombinator.com/item?id=44838378) - [Tor: How a military project became a lifeline for privacy](https://thereader.mitpress.mit.edu/the-secret-history-of-tor-how-a-military-project-became-a-lifeline-for-privacy/)
* [2025-08-08, 15:30:03](https://lobste.rs/s/zrbpds/hypothesis_is_now_thread_safe) - [Hypothesis is now thread-safe](https://hypothesis.works/articles/thread-safe/)
* [2025-08-08, 15:00:28](https://lobste.rs/s/fswjtl/programming_as_extended_cognition) - [Programming as Extended Cognition](https://ieeexplore.ieee.org/document/11119124)
* [2025-08-08, 14:29:54](https://news.ycombinator.com/item?id=44837434) - [Astronomy Photographer of the Year 2025 shortlist](https://www.rmg.co.uk/whats-on/astronomy-photographer-year/galleries/2025-shortlist)
* [2025-08-08, 14:05:00](https://soylentnews.org/article.pl?sid=25/08/07/0255247&amp;from=rss) - [Ubuntu Replacing wget With wcurl](https://soylentnews.org/article.pl?sid=25/08/07/0255247&amp;from=rss)
* [2025-08-08, 13:58:25](https://lobste.rs/s/stxzc8/updated_google_project_zero_disclosure) - [Updated Google Project Zero disclosure policy](https://googleprojectzero.blogspot.com/2025/07/reporting-transparency.html)
* [2025-08-08, 13:45:57](https://news.ycombinator.com/item?id=44836879) - [Getting good results from Claude Code](https://www.dzombak.com/blog/2025/08/getting-good-results-from-claude-code/)
* [2025-08-08, 13:36:25](https://lobste.rs/s/gk3luv/how_long_does_it_take_upgrade_ebook) - [How long does it take to upgrade an eBook?](https://shkspr.mobi/blog/2025/08/how-long-does-it-take-to-upgrade-an-ebook/)
* [2025-08-08, 12:59:03](https://lobste.rs/s/qllaru/http_is_not_simple) - [HTTP is not simple](https://daniel.haxx.se/blog/2025/08/08/http-is-not-simple/)
* [2025-08-08, 12:57:50](https://news.ycombinator.com/item?id=44836463) - [How we replaced Elasticsearch and MongoDB with Rust and RocksDB](https://radar.com/blog/high-performance-geocoding-in-rust)
* [2025-08-08, 11:41:04](https://news.ycombinator.com/item?id=44835879) - [Ultrathin business card runs a fluid simulation](https://github.com/Nicholas-L-Johnson/flip-card)
* [2025-08-08, 10:34:34](https://lobste.rs/s/xqcpmc/understanding_not_just_clojure_s_comp) - [Understanding not just Clojure&apos;s comp function by re-implementing it](https://www.evalapply.org/posts/lessons-from-reimplementing-clojure-comp-function/index.html)
* [2025-08-08, 09:34:16](https://lobste.rs/s/q5bgc5/abusing_ubuntu_24_04_features_for_root) - [Abusing Ubuntu 24.04 features for root privilege escalation (2024)](https://labs.snyk.io/resources/abusing-ubuntu-root-privilege-escalation/)
* [2025-08-08, 09:22:00](https://soylentnews.org/article.pl?sid=25/08/07/0248239&amp;from=rss) - [Hiding Secret Codes in Light Can Protect Against Fake Videos](https://soylentnews.org/article.pl?sid=25/08/07/0248239&amp;from=rss)
* [2025-08-08, 08:53:10](https://news.ycombinator.com/item?id=44834918) - [How attention sinks keep language models stable](https://hanlab.mit.edu/blog/streamingllm)
* [2025-08-08, 08:46:10](https://lobste.rs/s/s7wj5y/how_i_ended_up_writing_gleam_for_living) - [How I ended up writing Gleam for a living](https://www.youtube.com/watch?v=BfPRcanTWXA)
* [2025-08-08, 08:31:14](https://lobste.rs/s/qr1kro/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/qr1kro/what_are_you_doing_this_weekend)
* [2025-08-08, 07:06:22](https://lobste.rs/s/cn7crr/writing_surtoget_no_with_gleam) - [Writing surtoget.no with gleam](https://lindbakk.com/blog/introducing-surtoget_no)
* [2025-08-08, 06:55:32](https://lobste.rs/s/zxppfh/all_cool_kids_are_doing_it) - [All the cool kids are doing it](https://www.scattered-thoughts.net/writing/all-the-cool-kids-are-doing-it/)
* [2025-08-08, 05:39:34](https://lobste.rs/s/lzladd/arenas_rust) - [Arenas in Rust](https://russellw.github.io/arenas)
* [2025-08-08, 04:35:00](https://soylentnews.org/article.pl?sid=25/08/06/235236&amp;from=rss) - [China&apos;s Solar Giants Quietly Shed a Third of Their Workforces Last Year](https://soylentnews.org/article.pl?sid=25/08/06/235236&amp;from=rss)
* [2025-08-07, 23:52:00](https://soylentnews.org/article.pl?sid=25/08/06/1435231&amp;from=rss) - [OpenAI Announces Two “gpt-oss” Open AI Models, and You Can Download Them Today](https://soylentnews.org/article.pl?sid=25/08/06/1435231&amp;from=rss)
* [2025-08-07, 19:54:17](https://lobste.rs/s/tiiesw/who_s_hiring_q3_2025) - [Who&apos;s Hiring? Q3 2025](https://lobste.rs/s/tiiesw/who_s_hiring_q3_2025)
* [2025-08-07, 19:40:31](https://lobste.rs/s/m9dmt8/komodo_my_first_kde_app) - [KomoDo, my first KDE app](https://akselmo.dev/posts/komodo-my-first-kde-app/)
* [2025-08-07, 19:07:00](https://soylentnews.org/article.pl?sid=25/08/06/1129217&amp;from=rss) - [U.S. Semiconductor Design Company Fined $140 Million Over China Dealings](https://soylentnews.org/article.pl?sid=25/08/06/1129217&amp;from=rss)
* [2025-08-07, 18:41:34](https://lobste.rs/s/vn29xx/gpt_5_is_here) - [GPT-5 is here](https://openai.com/gpt-5/)
* [2025-08-07, 14:22:00](https://soylentnews.org/article.pl?sid=25/08/06/1123237&amp;from=rss) - [AWS Deleted a 10-Year Account and All Data Without Warning](https://soylentnews.org/article.pl?sid=25/08/06/1123237&amp;from=rss)
* [2025-08-07, 13:22:48](https://lobste.rs/s/hcvcd9/we_replaced_passwords_with_something) - [We replaced passwords with something worse](https://blog.danielh.cc/blog/passwords)
* [2025-08-07, 09:33:00](https://soylentnews.org/article.pl?sid=25/08/05/1550247&amp;from=rss) - [Underwater Robot Draws in Millions of Viewers](https://soylentnews.org/article.pl?sid=25/08/05/1550247&amp;from=rss)
* [2025-08-07, 04:51:00](https://soylentnews.org/article.pl?sid=25/08/05/151223&amp;from=rss) - [Infrared Contact Lens Helps People See in the Dark, Even With Their Eyes Closed](https://soylentnews.org/article.pl?sid=25/08/05/151223&amp;from=rss)
* [2025-08-07, 00:07:00](https://soylentnews.org/article.pl?sid=25/08/05/1452205&amp;from=rss) - [Plague: A Newly Discovered PAM-Based Backdoor for Linux](https://soylentnews.org/article.pl?sid=25/08/05/1452205&amp;from=rss)
* [2025-08-06, 19:20:00](https://soylentnews.org/article.pl?sid=25/08/05/1446223&amp;from=rss) - [Russian Volcano Erupts for First Time in Centuries](https://soylentnews.org/article.pl?sid=25/08/05/1446223&amp;from=rss)
* [2025-08-06, 14:37:00](https://soylentnews.org/article.pl?sid=25/08/05/1441236&amp;from=rss) - [Inspired by Astronauts, Researchers Use High-Tech Pants to Uncover Heart Issues on MRI](https://soylentnews.org/article.pl?sid=25/08/05/1441236&amp;from=rss)
* [2025-08-06, 13:47:26](https://news.ycombinator.com/item?id=44811993) - [My DIY modular charging station](https://arun.is/blog/diy-modular-charging-station/)
* [2025-08-06, 12:12:04](https://news.ycombinator.com/item?id=44810916) - [I bought a £16 smartwatch just because it used USB-C](https://shkspr.mobi/blog/2025/08/i-bought-a-16-smartwatch-just-because-it-used-usb-c/)
* [2025-08-06, 09:58:00](https://soylentnews.org/article.pl?sid=25/08/05/1150228&amp;from=rss) - [Space&apos;s Spinning Enigma: A ‘Unicorn’ Object Defies Astrophysics](https://soylentnews.org/article.pl?sid=25/08/05/1150228&amp;from=rss)
* [2025-08-06, 06:29:21](https://news.ycombinator.com/item?id=44808423) - [Fire hazard of WHY2025 badge due to 18650 Li-Ion cells](https://wiki.why2025.org/Badge/Fire_hazard)
* [2025-08-06, 05:08:00](https://soylentnews.org/article.pl?sid=25/08/05/0156215&amp;from=rss) - [AI and the Democratization of Cybercrime](https://soylentnews.org/article.pl?sid=25/08/05/0156215&amp;from=rss)
* [2025-08-06, 01:12:42](https://news.ycombinator.com/item?id=44806537) - [Engineer restores pay phones for free public use](https://www.npr.org/2025/08/04/nx-s1-5484013/engineer-restores-pay-phones-for-free-public-use)
* [2025-08-06, 00:25:00](https://soylentnews.org/article.pl?sid=25/08/05/0152249&amp;from=rss) - [Christiaan Huygens and the Scientific Secrets of Saturn](https://soylentnews.org/article.pl?sid=25/08/05/0152249&amp;from=rss)
* [2025-08-05, 19:40:00](https://soylentnews.org/article.pl?sid=25/08/04/0644251&amp;from=rss) - [ChatGPT Users Shocked to Learn Their Chats Were in Google Search Results](https://soylentnews.org/article.pl?sid=25/08/04/0644251&amp;from=rss)
* [2025-08-05, 16:09:02](https://news.ycombinator.com/item?id=44799886) - [Poltergeist: File watcher with auto-rebuild for any language or build system](https://github.com/steipete/poltergeist)
* [2025-08-05, 15:58:02](https://news.ycombinator.com/item?id=44799727) - [Why building a self-hosted SaaS is harder](https://www.getlago.com/blog/self-hosted-saas)
* [2025-08-05, 14:54:00](https://soylentnews.org/article.pl?sid=25/08/03/2140229&amp;from=rss) - [China Forms AI Alliances To Cut U.S. Tech Reliance](https://soylentnews.org/article.pl?sid=25/08/03/2140229&amp;from=rss)
* [2025-08-05, 14:43:12](https://news.ycombinator.com/item?id=44798624) - [Hacking Diffusion into Qwen3 for the Arc Challenge](https://www.matthewnewton.com/blog/arc-challenge-diffusion)
* [2025-08-05, 13:10:17](https://news.ycombinator.com/item?id=44797566) - [Unmasking the Sea Star Killer](https://www.biographic.com/unmasking-the-sea-star-killer/)
* [2025-08-05, 10:03:00](https://soylentnews.org/article.pl?sid=25/08/03/2136209&amp;from=rss) - [Solid-State Batteries Charge in 3 Minutes:  Why Aren&apos;t They in Your Phones and Cars Yet?](https://soylentnews.org/article.pl?sid=25/08/03/2136209&amp;from=rss)
* [2025-08-05, 05:22:00](https://soylentnews.org/article.pl?sid=25/08/03/0242234&amp;from=rss) - [Ousted Vaccine Panel Members Say Rigorous Science is Being Abandoned](https://soylentnews.org/article.pl?sid=25/08/03/0242234&amp;from=rss)
* [2025-08-05, 00:40:00](https://soylentnews.org/article.pl?sid=25/08/03/0225206&amp;from=rss) - [World News: United Nations Report Finds UN Reports Aren’t Widely Read](https://soylentnews.org/article.pl?sid=25/08/03/0225206&amp;from=rss)
