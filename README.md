# [News Summary](https://kherrick.github.io/news-summary/)

## AI Impact and Technologies

* [AI Eroded Doctors' Ability to Spot Cancer Within Months in Study](https://www.bloomberg.com/news/articles/2025-08-12/ai-eroded-doctors-ability-to-spot-cancer-within-months-in-study) ([comments](https://news.ycombinator.com/item?id=44883475))

* [Boston Public Library Aims To Increase Access To a Vast Historic Archive Using AI](https://news.slashdot.org/story/25/08/12/2050216/boston-public-library-aims-to-increase-access-to-a-vast-historic-archive-using-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.slashdot.org/story/25/08/12/2050216/boston-public-library-aims-to-increase-access-to-a-vast-historic-archive-using-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [AI Is Forcing the Return of the In-Person Job Interview](https://slashdot.org/story/25/08/12/1913202/ai-is-forcing-the-return-of-the-in-person-job-interview?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://slashdot.org/story/25/08/12/1913202/ai-is-forcing-the-return-of-the-in-person-job-interview?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

## Significant Legal and Ethical Developments

* [Do Kwon Pleads Guilty to US Fraud Charges In $40 Billion Crypto Collapse](https://yro.slashdot.org/story/25/08/12/2142218/do-kwon-pleads-guilty-to-us-fraud-charges-in-40-billion-crypto-collapse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://yro.slashdot.org/story/25/08/12/2142218/do-kwon-pleads-guilty-to-us-fraud-charges-in-40-billion-crypto-collapse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Russia Is Suspected To Be Behind Breach of Federal Court Filing System](https://yro.slashdot.org/story/25/08/12/213252/russia-is-suspected-to-be-behind-breach-of-federal-court-filing-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://yro.slashdot.org/story/25/08/12/213252/russia-is-suspected-to-be-behind-breach-of-federal-court-filing-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Australian Federal Court Rules Apple and Google Engaged in Anti-Competitive App Store Conduct](https://apple.slashdot.org/story/25/08/12/1643237/australian-federal-court-rules-apple-and-google-engaged-in-anti-competitive-app-store-conduct?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://apple.slashdot.org/story/25/08/12/1643237/australian-federal-court-rules-apple-and-google-engaged-in-anti-competitive-app-store-conduct?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

## Quantum Computing and Cryptography

* [Google and IBM Believe First Workable Quantum Computer is in Sight](https://tech.slashdot.org/story/25/08/12/2048213/google-and-ibm-believe-first-workable-quantum-computer-is-in-sight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://tech.slashdot.org/story/25/08/12/2048213/google-and-ibm-believe-first-workable-quantum-computer-is-in-sight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Post-Quantum Cryptography Advice Added to OpenSSH Website](https://soylentnews.org/article.pl?sid=25/08/11/2227259&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/08/11/2227259&amp;from=rss))

## Unique and Experimental Applications

* [Search all text in New York City](https://www.alltext.nyc/) ([comments](https://news.ycombinator.com/item?id=44883304))

* [Show HN: Building a web search engine from scratch with 3B neural embeddings](https://blog.wilsonl.in/search-engine/) ([comments](https://news.ycombinator.com/item?id=44878151))

* [The Missing Protocol: Let Me Know](https://deanebarker.net/tech/blog/let-me-know/) ([comments](https://news.ycombinator.com/item?id=44881287))

## Climate, Science, and Environment

* [Using a Fan Can Make Older Adults Hotter in a Dry Heat](https://soylentnews.org/article.pl?sid=25/08/12/0419218&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/08/12/0419218&amp;from=rss))

* [Extra-Strong Bacterial Cellulose Sheets as a Biodegradable Alternative to Plastic](https://soylentnews.org/article.pl?sid=25/08/10/2217254&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/08/10/2217254&amp;from=rss))

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

* [2025-08-13, 00:51:21](https://news.ycombinator.com/item?id=44883475) - [AI Eroded Doctors&apos; Ability to Spot Cancer Within Months in Study](https://www.bloomberg.com/news/articles/2025-08-12/ai-eroded-doctors-ability-to-spot-cancer-within-months-in-study)
* [2025-08-13, 00:45:00](https://yro.slashdot.org/story/25/08/12/2142218/do-kwon-pleads-guilty-to-us-fraud-charges-in-40-billion-crypto-collapse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Do Kwon Pleads Guilty to US Fraud Charges In $40 Billion Crypto Collapse](https://yro.slashdot.org/story/25/08/12/2142218/do-kwon-pleads-guilty-to-us-fraud-charges-in-40-billion-crypto-collapse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-13, 00:17:33](https://news.ycombinator.com/item?id=44883304) - [Search all text in New York City](https://www.alltext.nyc/)
* [2025-08-13, 00:02:00](https://yro.slashdot.org/story/25/08/12/213252/russia-is-suspected-to-be-behind-breach-of-federal-court-filing-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Russia Is Suspected To Be Behind Breach of Federal Court Filing System](https://yro.slashdot.org/story/25/08/12/213252/russia-is-suspected-to-be-behind-breach-of-federal-court-filing-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-12, 23:44:53](https://news.ycombinator.com/item?id=44883083) - [Scapegoating the Algorithm](https://asteriskmag.com/issues/11/scapegoating-the-algorithm)
* [2025-08-12, 23:20:00](https://news.slashdot.org/story/25/08/12/2050216/boston-public-library-aims-to-increase-access-to-a-vast-historic-archive-using-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Boston Public Library Aims To Increase Access To a Vast Historic Archive Using AI](https://news.slashdot.org/story/25/08/12/2050216/boston-public-library-aims-to-increase-access-to-a-vast-historic-archive-using-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-12, 23:08:00](https://soylentnews.org/article.pl?sid=25/08/12/0419218&amp;from=rss) - [Using a Fan Can Make Older Adults Hotter in a Dry Heat](https://soylentnews.org/article.pl?sid=25/08/12/0419218&amp;from=rss)
* [2025-08-12, 22:41:00](https://tech.slashdot.org/story/25/08/12/2048213/google-and-ibm-believe-first-workable-quantum-computer-is-in-sight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google and IBM Believe First Workable Quantum Computer is in Sight](https://tech.slashdot.org/story/25/08/12/2048213/google-and-ibm-believe-first-workable-quantum-computer-is-in-sight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-12, 22:18:55](https://news.ycombinator.com/item?id=44882438) - [A gentle introduction to anchor positioning](https://webkit.org/blog/17240/a-gentle-introduction-to-anchor-positioning/)
* [2025-08-12, 22:00:00](https://it.slashdot.org/story/25/08/12/2037200/sloppy-ai-defenses-take-cybersecurity-back-to-the-1990s-researchers-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sloppy AI Defenses Take Cybersecurity Back To the 1990s, Researchers Say](https://it.slashdot.org/story/25/08/12/2037200/sloppy-ai-defenses-take-cybersecurity-back-to-the-1990s-researchers-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-12, 21:25:01](https://news.ycombinator.com/item?id=44881977) - [Go 1.25 Release Notes](https://go.dev/doc/go1.25)
* [2025-08-12, 21:20:00](https://tech.slashdot.org/story/25/08/12/2018257/threads-now-has-more-than-400-million-monthly-active-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Threads Now Has More Than 400 Million Monthly Active Users](https://tech.slashdot.org/story/25/08/12/2018257/threads-now-has-more-than-400-million-monthly-active-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-12, 21:15:11](https://news.ycombinator.com/item?id=44881878) - [Crypto founder Do Kwon pleads guilty to US fraud charges](https://www.ft.com/content/2e6fdc73-1083-48fb-b258-d22fc7ef8ad8)
* [2025-08-12, 21:13:48](https://lobste.rs/s/a7avpz/introduction_python_rust_interop_for) - [An Introduction to Python-Rust Interop for Scientific Codebases](https://github.com/nrposner/coding_club)
* [2025-08-12, 20:40:00](https://slashdot.org/story/25/08/12/2011252/china-urges-firms-to-avoid-nvidia-h20-chips-after-trump-resumes-sales?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Urges Firms To Avoid Nvidia H20 Chips After Trump Resumes Sales](https://slashdot.org/story/25/08/12/2011252/china-urges-firms-to-avoid-nvidia-h20-chips-after-trump-resumes-sales?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-12, 20:15:17](https://news.ycombinator.com/item?id=44881287) - [The Missing Protocol: Let Me Know](https://deanebarker.net/tech/blog/let-me-know/)
* [2025-08-12, 20:01:00](https://news.slashdot.org/story/25/08/12/1948203/uk-government-suggests-deleting-files-to-save-water?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Government Suggests Deleting Files To Save Water](https://news.slashdot.org/story/25/08/12/1948203/uk-government-suggests-deleting-files-to-save-water?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-12, 19:22:00](https://slashdot.org/story/25/08/12/1913202/ai-is-forcing-the-return-of-the-in-person-job-interview?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Is Forcing the Return of the In-Person Job Interview](https://slashdot.org/story/25/08/12/1913202/ai-is-forcing-the-return-of-the-in-person-job-interview?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-12, 18:56:38](https://news.ycombinator.com/item?id=44880401) - [Ashet Home Computer](https://ashet.computer/)
* [2025-08-12, 18:42:00](https://tech.slashdot.org/story/25/08/12/1842234/google-will-now-let-you-pick-your-top-sources-for-search-results?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Will Now Let You Pick Your Top Sources For Search Results](https://tech.slashdot.org/story/25/08/12/1842234/google-will-now-let-you-pick-your-top-sources-for-search-results?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-12, 18:41:46](https://lobste.rs/s/ks1m49/ashet_home_computer) - [Ashet Home Computer](https://ashet.computer/)
* [2025-08-12, 18:27:50](https://news.ycombinator.com/item?id=44880081) - [The Equality Delete Problem in Apache Iceberg](https://blog.dataengineerthings.org/the-equality-delete-problem-in-apache-iceberg-143dd451a974)
* [2025-08-12, 18:25:00](https://soylentnews.org/article.pl?sid=25/08/11/2227259&amp;from=rss) - [Post-Quantum Cryptography Advice Added to OpenSSH Website](https://soylentnews.org/article.pl?sid=25/08/11/2227259&amp;from=rss)
* [2025-08-12, 18:02:00](https://it.slashdot.org/story/25/08/12/1754254/microsoft-releases-lightweight-office-taskbar-apps-for-windows-11?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Releases Lightweight Office Taskbar Apps for Windows 11](https://it.slashdot.org/story/25/08/12/1754254/microsoft-releases-lightweight-office-taskbar-apps-for-windows-11?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-12, 17:43:41](https://lobste.rs/s/dejmjq/how_i_do_type_safe_container_types_c) - [How I do (type-safe) container types in C](https://louissven.xyz/article/how_I_do_container_types_in_C.md)
* [2025-08-12, 17:26:00](https://slashdot.org/story/25/08/12/1726210/microsoft-is-trying-to-poach-meta-ai-talent-and-offering-multimillion-dollar-pay-packages?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft is Trying To Poach Meta AI Talent and Offering Multimillion-Dollar Pay Packages](https://slashdot.org/story/25/08/12/1726210/microsoft-is-trying-to-poach-meta-ai-talent-and-offering-multimillion-dollar-pay-packages?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-12, 17:01:10](https://news.ycombinator.com/item?id=44879015) - [Weave (YC W25) is hiring a founding AI engineer](https://www.ycombinator.com/companies/weave-3/jobs/SqFnIFE-founding-ai-engineer)
* [2025-08-12, 16:53:37](https://news.ycombinator.com/item?id=44878916) - [WHY2025: How to become your own ISP [video]](https://media.ccc.de/v/why2025-9-how-to-become-your-own-isp)
* [2025-08-12, 16:43:00](https://apple.slashdot.org/story/25/08/12/1643237/australian-federal-court-rules-apple-and-google-engaged-in-anti-competitive-app-store-conduct?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Australian Federal Court Rules Apple and Google Engaged in Anti-Competitive App Store Conduct](https://apple.slashdot.org/story/25/08/12/1643237/australian-federal-court-rules-apple-and-google-engaged-in-anti-competitive-app-store-conduct?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-12, 16:33:38](https://news.ycombinator.com/item?id=44878650) - [Show HN: Omnara – Run Claude Code from anywhere](https://github.com/omnara-ai/omnara)
* [2025-08-12, 16:31:02](https://lobste.rs/s/jfvyez/git_interactive_rebase_order_is_wrong) - [Git Interactive Rebase Order is Wrong (2019)](https://salferrarello.com/git-interactive-rebase-order-is-wrong/)
* [2025-08-12, 16:19:42](https://lobste.rs/s/1fduyi/jenny_s_daily_drivers_freedos_1_4) - [Jenny’s Daily Drivers: FreeDOS 1.4](https://hackaday.com/2025/08/06/jennys-daily-drivers-freedos-1-4/)
* [2025-08-12, 16:10:03](https://news.ycombinator.com/item?id=44878257) - [Launch HN: Design Arena (YC S25) – Head-to-head AI benchmark for aesthetics](https://news.ycombinator.com/item?id=44878257)
* [2025-08-12, 16:02:40](https://news.ycombinator.com/item?id=44878151) - [Show HN: Building a web search engine from scratch with 3B neural embeddings](https://blog.wilsonl.in/search-engine/)
* [2025-08-12, 16:02:23](https://news.ycombinator.com/item?id=44878147) - [Claude Sonnet 4 now supports 1M tokens of context](https://www.anthropic.com/news/1m-context)
* [2025-08-12, 16:00:00](https://slashdot.org/story/25/08/12/1541202/perplexity-makes-longshot-345-billion-offer-for-chrome?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Perplexity Makes Longshot $34.5 Billion Offer for Chrome](https://slashdot.org/story/25/08/12/1541202/perplexity-makes-longshot-345-billion-offer-for-chrome?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-12, 15:20:00](https://tech.slashdot.org/story/25/08/12/156239/spirit-airlines-warns-it-may-not-survive-another-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Spirit Airlines Warns It May Not Survive Another Year](https://tech.slashdot.org/story/25/08/12/156239/spirit-airlines-warns-it-may-not-survive-another-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-12, 15:17:16](https://lobste.rs/s/kvit4x/syncthing_v2_0) - [Syncthing v2.0](https://github.com/syncthing/syncthing/releases/tag/v2.0.0)
* [2025-08-12, 15:16:57](https://lobste.rs/s/2ifbfv/evaluating_llms_playing_text_adventures) - [Evaluating LLMs Playing Text Adventures](https://entropicthoughts.com/evaluating-llms-playing-text-adventures)
* [2025-08-12, 14:56:53](https://news.ycombinator.com/item?id=44877076) - [Why are there so many rationalist cults?](https://asteriskmag.com/issues/11/why-are-there-so-many-rationalist-cults)
* [2025-08-12, 14:41:12](https://news.ycombinator.com/item?id=44876844) - [Nexus: An Open-Source AI Router for Governance, Control and Observability](https://nexusrouter.com/blog/introducing-nexus-the-open-source-ai-router)
* [2025-08-12, 14:04:40](https://news.ycombinator.com/item?id=44876356) - [Journaling using Nix, Vim and coreutils](https://tangled.sh/@oppi.li/journal)
* [2025-08-12, 13:42:00](https://soylentnews.org/article.pl?sid=25/08/10/233218&amp;from=rss) - [Coding Error Blamed After Parts of Constitution Disappear From US Website](https://soylentnews.org/article.pl?sid=25/08/10/233218&amp;from=rss)
* [2025-08-12, 13:41:44](https://lobste.rs/s/9tcapq/stylish_bugs) - [stylish bugs](https://flak.tedunangst.com/post/stylish-bugs)
* [2025-08-12, 13:32:16](https://news.ycombinator.com/item?id=44875992) - [Training language models to be warm and empathetic makes them less reliable](https://arxiv.org/abs/2507.21919)
* [2025-08-12, 13:30:10](https://news.ycombinator.com/item?id=44875961) - [Australian court finds Apple, Google guilty of being anticompetitive](https://www.ghacks.net/2025/08/12/australian-court-finds-apple-google-guilty-of-being-anticompetitive/)
* [2025-08-12, 11:42:31](https://lobste.rs/s/bguepr/desired_features_git_killer_next) - [Desired features in a \&quot;git-killer\&quot; (next-generation DVCS)](https://heidiwaterhouse.com/git-along-now/)
* [2025-08-12, 11:34:39](https://lobste.rs/s/puv5fm/radicle_1_3_0) - [Radicle 1.3.0](https://radicle.xyz/2025/08/12/radicle-1.3.0)
* [2025-08-12, 10:00:08](https://lobste.rs/s/fmiqeh/best_hello_world_web_development) - [The Best \&quot;Hello World\&quot; in Web Development](https://unplannedobsolescence.com/blog/best-hello-world-web-development/)
* [2025-08-12, 08:55:00](https://soylentnews.org/article.pl?sid=25/08/10/2217254&amp;from=rss) - [Extra-Strong Bacterial Cellulose Sheets as a Biodegradable Alternative to Plastic](https://soylentnews.org/article.pl?sid=25/08/10/2217254&amp;from=rss)
* [2025-08-12, 08:15:29](https://lobste.rs/s/en2zdl/history_windows_xp) - [The History of Windows XP](https://www.abortretry.fail/p/the-history-of-windows-xp)
* [2025-08-12, 08:11:36](https://lobste.rs/s/hs9zf7/mutually_attacking_knights) - [Mutually Attacking Knights](https://susam.net/mutually-attacking-knights.html)
* [2025-08-12, 07:17:35](https://lobste.rs/s/ykunj2/high_level_cpu_challenge_2008) - [The \&quot;high-level CPU\&quot; challenge (2008)](https://yosefk.com/blog/the-high-level-cpu-challenge.html)
* [2025-08-12, 05:05:55](https://lobste.rs/s/ymwzhn/my_tiny_1000_lines_fastish_embeddable) - [My tiny (1000 lines), fastish, embeddable scripting language can be AOT compiled](https://wareya.wordpress.com/2025/08/11/my-tiny-1000-lines-fastish-embeddable-scripting-language-can-be-aot-compiled/)
* [2025-08-12, 04:14:00](https://soylentnews.org/article.pl?sid=25/08/10/1521232&amp;from=rss) - [Here’s How Deepfake Vishing Attacks Work, and Why They Can Be Hard to Detect](https://soylentnews.org/article.pl?sid=25/08/10/1521232&amp;from=rss)
* [2025-08-12, 03:01:30](https://lobste.rs/s/ghlmkv/ai_reviews_my_mini_webserver) - [ai reviews my mini webserver](https://gist.github.com/izabera/91f44d29bb9da9a703514e815f71cf8c)
* [2025-08-12, 02:35:24](https://lobste.rs/s/3aogtw/uxn) - [uxn](https://100r.co/site/uxn.html)
* [2025-08-12, 02:21:21](https://lobste.rs/s/ntu5mv/weathering_software_winter_2022) - [Weathering Software Winter (2022)](https://100r.co/site/weathering_software_winter.html)
* [2025-08-12, 01:00:54](https://lobste.rs/s/4dl67e/script_migrate_github_repositories) - [Script to migrate GitHub repositories to a Forgejo instance](https://github.com/PatNei/GITHUB2FORGEJO)
* [2025-08-11, 23:28:00](https://soylentnews.org/article.pl?sid=25/08/10/1038254&amp;from=rss) - [Quantum \&quot;Schrödinger&apos;s Cat\&quot; Survives For Mind-Blowing 23 Minutes In Record-Breaking Experiment](https://soylentnews.org/article.pl?sid=25/08/10/1038254&amp;from=rss)
* [2025-08-11, 23:00:33](https://lobste.rs/s/lg9rft/fight_chat_control) - [Fight Chat Control](https://fightchatcontrol.eu/)
* [2025-08-11, 21:03:28](https://lobste.rs/s/gkpzyh/don_t_forget_flush) - [Don’t Forget To Flush](https://www.youtube.com/watch?v=f30PceqQWko)
* [2025-08-11, 20:10:48](https://lobste.rs/s/jrrhfu/missing_css_1_2_0) - [missing.css 1.2.0](https://missing.style/releases/1.2.0/)
* [2025-08-11, 18:45:00](https://soylentnews.org/article.pl?sid=25/08/10/1036210&amp;from=rss) - [Asian Hornet’s Unique Buzz May Hold Secret to Containing Invasive Species](https://soylentnews.org/article.pl?sid=25/08/10/1036210&amp;from=rss)
* [2025-08-11, 17:28:47](https://lobste.rs/s/jrutdz/commit_mono) - [Commit Mono](https://commitmono.com/)
* [2025-08-11, 14:25:05](https://lobste.rs/s/e9fdbs/i_tried_coding_with_ai_i_became_lazy_stupid) - [I tried coding with AI, I became lazy and stupid](https://thomasorus.com/i-tried-coding-with-ai-i-became-lazy-and-stupid)
* [2025-08-11, 14:14:00](https://soylentnews.org/article.pl?sid=25/08/11/145224&amp;from=rss) - [RIP: Dame Stephanie &apos;Steve&apos; Shirley, Technology Pioneer, Dies Aged 91](https://soylentnews.org/article.pl?sid=25/08/11/145224&amp;from=rss)
* [2025-08-11, 14:01:00](https://soylentnews.org/article.pl?sid=25/08/09/1958210&amp;from=rss) - [CalyxOS: The Pause That Wasn&apos;t](https://soylentnews.org/article.pl?sid=25/08/09/1958210&amp;from=rss)
* [2025-08-11, 09:11:00](https://soylentnews.org/article.pl?sid=25/08/09/1827235&amp;from=rss) - [Americans, Be Warned: Lessons From Reddit’s Chaotic UK Age Verification Rollout](https://soylentnews.org/article.pl?sid=25/08/09/1827235&amp;from=rss)
* [2025-08-11, 08:27:22](https://lobste.rs/s/ea9juv/how_not_build_torment_nexus) - [How to not build the Torment Nexus](https://buttondown.com/monteiro/archive/how-to-not-build-the-torment-nexus/)
* [2025-08-11, 05:14:00](https://soylentnews.org/article.pl?sid=25/08/11/0456211&amp;from=rss) - [RIP: James Lovell Dead at 97](https://soylentnews.org/article.pl?sid=25/08/11/0456211&amp;from=rss)
* [2025-08-11, 04:34:00](https://soylentnews.org/article.pl?sid=25/08/09/1818247&amp;from=rss) - [WinRAR zero-day Exploited to Plant Malware on Archive Extraction](https://soylentnews.org/article.pl?sid=25/08/09/1818247&amp;from=rss)
* [2025-08-10, 23:45:00](https://soylentnews.org/article.pl?sid=25/08/09/188231&amp;from=rss) - [Is Perrier as Pure as it Claims? The Bottled Water Scandal Gripping France](https://soylentnews.org/article.pl?sid=25/08/09/188231&amp;from=rss)
* [2025-08-10, 20:42:32](https://news.ycombinator.com/item?id=44858120) - [Comparing baseball greats across eras, who comes out on top?](https://phys.org/news/2025-07-baseball-greats-eras.html)
* [2025-08-10, 18:57:00](https://soylentnews.org/article.pl?sid=25/08/09/091234&amp;from=rss) - [Man Swaps His Salt for Sodium Bromide—and Suffers Psychosis](https://soylentnews.org/article.pl?sid=25/08/09/091234&amp;from=rss)
* [2025-08-10, 13:12:00](https://soylentnews.org/article.pl?sid=25/08/09/0853200&amp;from=rss) - [Oh No, Wavy Dave! Robot Crustacean Waves at Fiddler Crabs for Science, Has a Bad Time](https://soylentnews.org/article.pl?sid=25/08/09/0853200&amp;from=rss)
* [2025-08-10, 11:40:14](https://news.ycombinator.com/item?id=44854518) - [LLMs aren&apos;t world models](https://yosefk.com/blog/llms-arent-world-models.html)
* [2025-08-10, 08:28:00](https://soylentnews.org/article.pl?sid=25/08/09/0850232&amp;from=rss) - [Japanese Scientists Develop Artificial Blood](https://soylentnews.org/article.pl?sid=25/08/09/0850232&amp;from=rss)
* [2025-08-10, 03:45:00](https://soylentnews.org/article.pl?sid=25/08/09/0847239&amp;from=rss) - [Denmark Zoo: Donate Unwanted Pets to Feed Predators and Imitate ‘Natural Food Chain’](https://soylentnews.org/article.pl?sid=25/08/09/0847239&amp;from=rss)
* [2025-08-10, 01:33:43](https://news.ycombinator.com/item?id=44852058) - [Galileo’s telescopes: Seeing is believing (2010)](https://www.historytoday.com/archive/history-matters/galileos-telescopes-seeing-believing)
* [2025-08-09, 23:02:33](https://news.ycombinator.com/item?id=44851181) - [Debian GNU/Hurd 2025 released](https://lists.debian.org/debian-hurd/2025/08/msg00038.html)
* [2025-08-09, 23:01:00](https://soylentnews.org/article.pl?sid=25/08/09/0123224&amp;from=rss) - [Personalized Pricing Has Spread Across Many Industries. Here&apos;s How Consumers Can Avoid It](https://soylentnews.org/article.pl?sid=25/08/09/0123224&amp;from=rss)
* [2025-08-09, 22:35:16](https://news.ycombinator.com/item?id=44850976) - [Fixing a loud PSU fan without dying](https://chameth.com/fixing-a-loud-psu-fan-without-dying/)
* [2025-08-09, 18:15:00](https://soylentnews.org/article.pl?sid=25/08/09/0113237&amp;from=rss) - [YouTube to Gauge US Users’ Ages With AI After UK and Australia Add Age Checks](https://soylentnews.org/article.pl?sid=25/08/09/0113237&amp;from=rss)
* [2025-08-09, 13:48:00](https://soylentnews.org/article.pl?sid=25/08/08/047222&amp;from=rss) - [Hacker Summer Camp: What to Expect From BSides, Black Hat, and DEF CON](https://soylentnews.org/article.pl?sid=25/08/08/047222&amp;from=rss)
* [2025-08-09, 11:48:24](https://news.ycombinator.com/item?id=44845787) - [Multimodal WFH setup: flight SIM, EE lab, and music studio in 60sqft/5.5M²](https://www.sdo.group/study)
* [2025-08-09, 09:02:00](https://soylentnews.org/article.pl?sid=25/08/08/0353246&amp;from=rss) - [An Ohio Couple Welcomes a Baby Boy From a Nearly 31-Year-Old Frozen Embryo](https://soylentnews.org/article.pl?sid=25/08/08/0353246&amp;from=rss)
* [2025-08-09, 07:31:42](https://news.ycombinator.com/item?id=44844733) - [Dumb to managed switch conversion (2010)](https://spritesmods.com/?art=rtl8366sb&amp;page=1)
* [2025-08-09, 04:16:00](https://soylentnews.org/article.pl?sid=25/08/08/0113247&amp;from=rss) - [KubeSphere Kills Open Source Edition](https://soylentnews.org/article.pl?sid=25/08/08/0113247&amp;from=rss)
* [2025-08-09, 02:26:48](https://news.ycombinator.com/item?id=44843586) - [Blender is Native on Windows 11 on Arm](https://www.thurrott.com/music-videos/324346/blender-is-native-on-windows-11-on-arm)
