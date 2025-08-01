# [News Summary](https://kherrick.github.io/news-summary/)

## Tech Policy and Corporate Decisions

* [Google Backpedals On Goo.gl Shutdown To Preserve Active Links](https://tech.slashdot.org/story/25/08/01/1845229/google-backpedals-on-googl-shutdown-to-preserve-active-links?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Tesla must pay $329M in damages in fatal Autopilot case, jury says](https://www.cnbc.com/2025/08/01/tesla-must-pay-329-million-in-damages-in-fatal-autopilot-case.html)

* [Verizon is Upping Its Fees Again](https://slashdot.org/story/25/08/01/186206/verizon-is-upping-its-fees-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Microsoft Is Killing Windows 11 SE, Its Chrome OS Rival](https://tech.slashdot.org/story/25/08/01/1441216/microsoft-is-killing-windows-11-se-its-chrome-os-rival?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [IRS Chief Says Agency Plans To End Free Filing Program](https://news.slashdot.org/story/25/08/01/1522254/irs-chief-says-agency-plans-to-end-free-filing-program?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Australia's Spy Boss Asks Defense Workers To Stop Oversharing on LinkedIn](https://slashdot.org/story/25/08/01/1025251/australias-spy-boss-asks-defense-workers-to-stop-oversharing-on-linkedin?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## AI and Technology Innovation

* [OpenAI Leaks 120B Open Model on Hugging Face](https://twitter.com/main_horse/status/1951201925778776530)

* [Public ChatGPT Queries Are Getting Indexed By Google and Other Search Engines](https://tech.slashdot.org/story/25/07/31/2259213/public-chatgpt-queries-are-getting-indexed-by-google-and-other-search-engines?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Gemini 2.5 Deep Think](https://blog.google/products/gemini/gemini-2-5-deep-think/)

* [Microsoft Research Identifies 40 Jobs Most Vulnerable To AI](https://slashdot.org/story/25/08/01/1644200/microsoft-research-identifies-40-jobs-most-vulnerable-to-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Developer Community and Tools

* [I couldn't submit a PR, so I got hired and fixed it myself](https://www.skeptrune.com/posts/doing-the-little-things/)

* [Show HN: TraceRoot – Open-source agentic debugging for distributed services](https://github.com/traceroot-ai/traceroot)

* [Live coding interviews measure stress, not coding skills](https://hadid.dev/posts/living-coding/)

* [Hyrum's Law](https://www.hyrumslaw.com)

* [Wayback 0.2 released](https://wayback.freedesktop.org/news/2025/07/31/wayback-0.2-released/)

## Key Historical and Scientific Discoveries

* [At 17, Hannah Cairo solved a major math mystery](https://www.quantamagazine.org/at-17-hannah-cairo-solved-a-major-math-mystery-20250801/)

* [Researchers Develop a Low-Cost Visual Microphone](https://science.slashdot.org/story/25/07/31/233249/researchers-develop-a-low-cost-visual-microphone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [US Lightning Flash Was Longest On Record At 515 Miles](https://news.slashdot.org/story/25/07/31/2247247/us-lightning-flash-was-longest-on-record-at-515-miles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Opinions, Essays, and Retrospectives

* [Rollercoaster Tycoon (Or, MicroProse's Last Hurrah)](https://www.filfre.net/2025/08/rollercoaster-tycoon-or-microproses-last-hurrah/)

* [Ergonomic keyboarding with the Svalboard: a half-year retrospective](https://twey.io/hci/svalboard/)

* [The untold impact of cancellation](https://pretty.direct/impact)

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

* [2025-08-01, 18:45:00](https://tech.slashdot.org/story/25/08/01/1845229/google-backpedals-on-googl-shutdown-to-preserve-active-links?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Backpedals On Goo.gl Shutdown To Preserve Active Links](https://tech.slashdot.org/story/25/08/01/1845229/google-backpedals-on-googl-shutdown-to-preserve-active-links?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-01, 18:28:53](https://news.ycombinator.com/item?id=44760573) - [Tesla must pay $329M in damages in fatal Autopilot case, jury says](https://www.cnbc.com/2025/08/01/tesla-must-pay-329-million-in-damages-in-fatal-autopilot-case.html)
* [2025-08-01, 18:06:00](https://slashdot.org/story/25/08/01/186206/verizon-is-upping-its-fees-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Verizon is Upping Its Fees Again](https://slashdot.org/story/25/08/01/186206/verizon-is-upping-its-fees-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-01, 17:43:02](https://news.ycombinator.com/item?id=44759918) - [Google Shifts goo.gl Policy: Inactive Links Deactivated, Active Links Preserved](https://blog.google/technology/developers/googl-link-shortening-update/)
* [2025-08-01, 17:27:00](https://games.slashdot.org/story/25/08/01/1727250/the-industrys-rush-to-80-video-games-has-stalled---for-now?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Industry&apos;s Rush To $80 Video Games Has Stalled - For Now](https://games.slashdot.org/story/25/08/01/1727250/the-industrys-rush-to-80-video-games-has-stalled---for-now?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-01, 17:18:16](https://lobste.rs/s/bonzbw/i_couldn_t_submit_pr_so_i_got_hired_fixed_it) - [I couldn&apos;t submit a PR, so I got hired and fixed it myself](https://www.skeptrune.com/posts/doing-the-little-things/)
* [2025-08-01, 17:01:08](https://news.ycombinator.com/item?id=44759432) - [Coverage Cat (YC S22) Is Hiring a Senior, Staff, or Principal Engineer](https://www.coveragecat.com/careers/engineering/software-engineer)
* [2025-08-01, 16:59:51](https://news.ycombinator.com/item?id=44759417) - [I couldn&apos;t submit a PR, so I got hired and fixed it myself](https://www.skeptrune.com/posts/doing-the-little-things/)
* [2025-08-01, 16:58:51](https://news.ycombinator.com/item?id=44759406) - [Show HN: TraceRoot – Open-source agentic debugging for distributed services](https://github.com/traceroot-ai/traceroot)
* [2025-08-01, 16:58:10](https://lobste.rs/s/2vfx6w/lobsters_interview_with_icefox) - [Lobsters Interview with Icefox](https://lobste.rs/s/2vfx6w/lobsters_interview_with_icefox)
* [2025-08-01, 16:56:40](https://news.ycombinator.com/item?id=44759382) - [Corporation for Public Broadcasting Ceasing Operations](https://cpb.org/pressroom/Corporation-Public-Broadcasting-Addresses-Operations-Following-Loss-Federal-Funding)
* [2025-08-01, 16:43:00](https://slashdot.org/story/25/08/01/1644200/microsoft-research-identifies-40-jobs-most-vulnerable-to-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Research Identifies 40 Jobs Most Vulnerable To AI](https://slashdot.org/story/25/08/01/1644200/microsoft-research-identifies-40-jobs-most-vulnerable-to-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-01, 16:36:51](https://news.ycombinator.com/item?id=44759171) - [Ergonomic keyboarding with the Svalboard: a half-year retrospective](https://twey.io/hci/svalboard/)
* [2025-08-01, 16:35:40](https://news.ycombinator.com/item?id=44759152) - [At 17, Hannah Cairo solved a major math mystery](https://www.quantamagazine.org/at-17-hannah-cairo-solved-a-major-math-mystery-20250801/)
* [2025-08-01, 16:20:07](https://news.ycombinator.com/item?id=44758957) - [Supporting the BEAM community with free CI/CD security audits](https://www.erlang-solutions.com/blog/supporting-the-beam-community-with-free-ci-cd-security-audits/)
* [2025-08-01, 16:17:09](https://lobste.rs/s/otxbcp/free_security_audits_for_erlang_elixir) - [Free Security Audits for Erlang and Elixir open source projects](https://www.erlang-solutions.com/blog/supporting-the-beam-community-with-free-ci-cd-security-audits/)
* [2025-08-01, 16:12:00](https://soylentnews.org/politics/article.pl?sid=25/07/30/158210&amp;from=rss) - [Trump Caving on Nvidia H20 Export Curbs May Disrupt His Bigger Trade War](https://soylentnews.org/politics/article.pl?sid=25/07/30/158210&amp;from=rss)
* [2025-08-01, 16:10:33](https://news.ycombinator.com/item?id=44758842) - [Rollercoaster Tycoon (Or, MicroProse&apos;s Last Hurrah)](https://www.filfre.net/2025/08/rollercoaster-tycoon-or-microproses-last-hurrah/)
* [2025-08-01, 16:02:00](https://news.slashdot.org/story/25/08/01/161257/uk-supreme-court-gives-banks-partial-win-on-car-finance-commissions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Supreme Court Gives Banks Partial Win on Car Finance Commissions](https://news.slashdot.org/story/25/08/01/161257/uk-supreme-court-gives-banks-partial-win-on-car-finance-commissions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-01, 15:44:27](https://news.ycombinator.com/item?id=44758511) - [OpenAI Leaks 120B Open Model on Hugging Face](https://twitter.com/main_horse/status/1951201925778776530)
* [2025-08-01, 15:28:53](https://news.ycombinator.com/item?id=44758281) - [Show HN: Pontoon – Open-source customer data syncs](https://github.com/pontoon-data/Pontoon)
* [2025-08-01, 15:22:00](https://news.slashdot.org/story/25/08/01/1522254/irs-chief-says-agency-plans-to-end-free-filing-program?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [IRS Chief Says Agency Plans To End Free Filing Program](https://news.slashdot.org/story/25/08/01/1522254/irs-chief-says-agency-plans-to-end-free-filing-program?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-01, 15:19:43](https://news.ycombinator.com/item?id=44758132) - [Fast (2019)](https://patrickcollison.com/fast)
* [2025-08-01, 15:00:05](https://news.ycombinator.com/item?id=44757794) - [Ask HN: Who is hiring? (August 2025)](https://news.ycombinator.com/item?id=44757794)
* [2025-08-01, 15:00:05](https://news.ycombinator.com/item?id=44757792) - [Ask HN: Who wants to be hired? (August 2025)](https://news.ycombinator.com/item?id=44757792)
* [2025-08-01, 14:58:06](https://news.ycombinator.com/item?id=44757755) - [Hyrum&apos;s Law](https://www.hyrumslaw.com)
* [2025-08-01, 14:53:05](https://lobste.rs/s/ku3kej/wayback_0_2_released) - [Wayback 0.2 released](https://wayback.freedesktop.org/news/2025/07/31/wayback-0.2-released/)
* [2025-08-01, 14:41:00](https://tech.slashdot.org/story/25/08/01/1441216/microsoft-is-killing-windows-11-se-its-chrome-os-rival?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Is Killing Windows 11 SE, Its Chrome OS Rival](https://tech.slashdot.org/story/25/08/01/1441216/microsoft-is-killing-windows-11-se-its-chrome-os-rival?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-01, 14:27:31](https://lobste.rs/s/9fwqhg/long_term_support) - [Long Term Support](https://www.sqlite.org/lts.html)
* [2025-08-01, 14:00:00](https://slashdot.org/story/25/08/01/1025251/australias-spy-boss-asks-defense-workers-to-stop-oversharing-on-linkedin?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Australia&apos;s Spy Boss Asks Defense Workers To Stop Oversharing on LinkedIn](https://slashdot.org/story/25/08/01/1025251/australias-spy-boss-asks-defense-workers-to-stop-oversharing-on-linkedin?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-01, 13:25:08](https://lobste.rs/s/fwgksy/stack_traces_for_postgres_errors_with) - [Stack traces for Postgres errors with backtrace_functions](https://www.enterprisedb.com/blog/stack-traces-postgres-errors-backtracefunctions)
* [2025-08-01, 13:00:00](https://tech.slashdot.org/story/25/07/31/2259213/public-chatgpt-queries-are-getting-indexed-by-google-and-other-search-engines?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Public ChatGPT Queries Are Getting Indexed By Google and Other Search Engines](https://tech.slashdot.org/story/25/07/31/2259213/public-chatgpt-queries-are-getting-indexed-by-google-and-other-search-engines?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-01, 12:51:38](https://news.ycombinator.com/item?id=44756045) - [Live coding interviews measure stress, not coding skills](https://hadid.dev/posts/living-coding/)
* [2025-08-01, 12:22:55](https://lobste.rs/s/jdk9z8/vibe_code_is_legacy_code) - [Vibe code is legacy code](https://blog.val.town/vibe-code)
* [2025-08-01, 12:13:12](https://news.ycombinator.com/item?id=44755654) - [Launch HN: Societies.io (YC W25) – AI simulations of your target audience](https://news.ycombinator.com/item?id=44755654)
* [2025-08-01, 12:12:04](https://news.ycombinator.com/item?id=44755644) - [The untold impact of cancellation](https://pretty.direct/impact)
* [2025-08-01, 11:24:00](https://soylentnews.org/article.pl?sid=25/07/30/1457215&amp;from=rss) - [From Apple to Greek Defense Start-up](https://soylentnews.org/article.pl?sid=25/07/30/1457215&amp;from=rss)
* [2025-08-01, 11:10:38](https://news.ycombinator.com/item?id=44755279) - [Gemini 2.5 Deep Think](https://blog.google/products/gemini/gemini-2-5-deep-think/)
* [2025-08-01, 11:03:44](https://lobste.rs/s/nv7a9k/how_nixos_is_built) - [How NixOS is built](https://blog.erethon.com/blog/2025/07/31/how-nixos-is-built/)
* [2025-08-01, 10:53:45](https://lobste.rs/s/8o59lb/hello_world_bismuth) - [&apos;Hello world&apos; in Bismuth](https://enikofox.com/posts/hello-world-in-bismuth/)
* [2025-08-01, 10:11:10](https://lobste.rs/s/twphly/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/twphly/what_are_you_doing_this_weekend)
* [2025-08-01, 10:00:00](https://tech.slashdot.org/story/25/07/31/2314200/reddit-wants-to-be-a-search-engine-now?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Reddit Wants To Be a Search Engine Now](https://tech.slashdot.org/story/25/07/31/2314200/reddit-wants-to-be-a-search-engine-now?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-01, 09:49:09](https://lobste.rs/s/rxkmvd/pride_versioning) - [Pride Versioning](https://pridever.org/)
* [2025-08-01, 09:44:07](https://lobste.rs/s/qsrdnn/agendafs_filesystem_for_syncing_notes) - [agendafs: A filesystem for syncing notes to your calendar](https://sr.ht/~marcc/agendafs/)
* [2025-08-01, 09:08:59](https://news.ycombinator.com/item?id=44754523) - [Our Farewell from Google Play](https://secuso.aifb.kit.edu/english/2809.php)
* [2025-08-01, 09:04:16](https://news.ycombinator.com/item?id=44754492) - [Replacing tmux in my dev workflow](https://bower.sh/you-might-not-need-tmux)
* [2025-08-01, 08:52:00](https://lobste.rs/s/dsmzzu/if_odin_had_macros) - [If Odin Had Macros](https://www.gingerbill.org/article/2025/07/31/if-odin-had-macros/)
* [2025-08-01, 07:00:00](https://science.slashdot.org/story/25/07/31/233249/researchers-develop-a-low-cost-visual-microphone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Researchers Develop a Low-Cost Visual Microphone](https://science.slashdot.org/story/25/07/31/233249/researchers-develop-a-low-cost-visual-microphone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-01, 06:41:00](https://soylentnews.org/article.pl?sid=25/07/30/1450258&amp;from=rss) - [X37B is Set to Launch and Test Quantum Navigation Technology](https://soylentnews.org/article.pl?sid=25/07/30/1450258&amp;from=rss)
* [2025-08-01, 06:37:09](https://lobste.rs/s/axr1la/age_verification_doesn_t_need_be_privacy) - [Age Verification Doesn’t Need to Be a Privacy Footgun](https://soatok.blog/2025/07/31/age-verification-doesnt-need-to-be-a-privacy-footgun/)
* [2025-08-01, 05:54:08](https://lobste.rs/s/ch205g/my_favourite_german_word) - [My favourite German word](https://vurt.org/articles/my-favourite-german-word/)
* [2025-08-01, 05:31:20](https://news.ycombinator.com/item?id=44753298) - [Every satellite orbiting earth and who owns them (2023)](https://dewesoft.com/blog/every-satellite-orbiting-earth-and-who-owns-them)
* [2025-08-01, 05:30:55](https://lobste.rs/s/iqyqm3/6_weeks_claude_code) - [6 Weeks of Claude Code](https://blog.puzzmo.com/posts/2025/07/30/six-weeks-of-claude-code/)
* [2025-08-01, 03:30:00](https://news.slashdot.org/story/25/07/31/2247247/us-lightning-flash-was-longest-on-record-at-515-miles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Lightning Flash Was Longest On Record At 515 Miles](https://news.slashdot.org/story/25/07/31/2247247/us-lightning-flash-was-longest-on-record-at-515-miles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-01, 01:55:00](https://soylentnews.org/article.pl?sid=25/07/30/1438215&amp;from=rss) - [Anthropic Unveils New Rate Limits to Curb Claude Code Power Users](https://soylentnews.org/article.pl?sid=25/07/30/1438215&amp;from=rss)
* [2025-08-01, 00:50:57](https://lobste.rs/s/wzdyfb/our_first_outage_from_llm_written_code) - [Our first outage from LLM-written code](https://sketch.dev/blog/our-first-outage-from-llm-written-code)
* [2025-08-01, 00:45:00](https://it.slashdot.org/story/25/07/31/2241259/in-search-of-riches-hackers-plant-4g-enabled-raspberry-pi-in-bank-network?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [In Search of Riches, Hackers Plant 4G-Enabled Raspberry Pi In Bank Network](https://it.slashdot.org/story/25/07/31/2241259/in-search-of-riches-hackers-plant-4g-enabled-raspberry-pi-in-bank-network?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-01, 00:03:44](https://lobste.rs/s/uhrucy/ramblings) - [Ramblings](https://stephango.com/ramblings)
* [2025-08-01, 00:02:00](https://science.slashdot.org/story/25/07/31/2232230/trump-launching-a-new-private-health-tracking-system-with-big-techs-help?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Launching a New Private Health Tracking System With Big Tech&apos;s Help](https://science.slashdot.org/story/25/07/31/2232230/trump-launching-a-new-private-health-tracking-system-with-big-techs-help?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-31, 23:20:00](https://slashdot.org/story/25/07/31/2220225/sec-debuts-project-crypto-to-bring-us-financial-markets-on-chain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SEC Debuts &apos;Project Crypto&apos; To Bring US Financial Markets &apos;On Chain&apos;](https://slashdot.org/story/25/07/31/2220225/sec-debuts-project-crypto-to-bring-us-financial-markets-on-chain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-31, 22:16:45](https://lobste.rs/s/9ha6ab/you_might_not_need_tmux) - [You might not need tmux](https://bower.sh/you-might-not-need-tmux)
* [2025-07-31, 21:28:07](https://news.ycombinator.com/item?id=44750416) - [The anti-abundance critique on housing is wrong](https://www.derekthompson.org/p/the-anti-abundance-critique-on-housing)
* [2025-07-31, 21:10:00](https://soylentnews.org/article.pl?sid=25/07/30/0143216&amp;from=rss) - [Meta Pirated and Seeded Porn for Years to Train AI, Lawsuit Says](https://soylentnews.org/article.pl?sid=25/07/30/0143216&amp;from=rss)
* [2025-07-31, 19:00:58](https://news.ycombinator.com/item?id=44748934) - [Slow](https://michaelnotebook.com/slow/index.html)
* [2025-07-31, 16:29:00](https://soylentnews.org/article.pl?sid=25/07/30/0133228&amp;from=rss) - [Why We Need a Right Not to be Manipulated](https://soylentnews.org/article.pl?sid=25/07/30/0133228&amp;from=rss)
* [2025-07-31, 16:17:25](https://lobste.rs/s/hzr1ke/smallest_embeddable_scripting_language) - [The smallest embeddable scripting language, part 1](https://log.schemescape.com/posts/static-site-generators/smallest-scripting-language.html)
* [2025-07-31, 15:28:54](https://lobste.rs/s/ogv8ay/quic_for_kernel) - [QUIC for the kernel](https://lwn.net/Articles/1029851/)
* [2025-07-31, 14:47:25](https://lobste.rs/s/43hw9a/math_is_haunted) - [The Math Is Haunted](https://overreacted.io/the-math-is-haunted/)
* [2025-07-31, 14:06:31](https://lobste.rs/s/gl3oty/local_first_search_tale_frustrated) - [Local-first search. A tale of frustrated dreams, utopian user experiences and calculated tradeoffs](https://fika.bar/paoramen/local-first-search-01K1B0WM1X4P5SV5QAES0Z5N75)
* [2025-07-31, 11:45:00](https://soylentnews.org/article.pl?sid=25/07/30/0127251&amp;from=rss) - [We Are Undergoing Unprecedented Loss of Freshwater Across the Planet](https://soylentnews.org/article.pl?sid=25/07/30/0127251&amp;from=rss)
* [2025-07-31, 10:51:26](https://lobste.rs/s/yg4vde/sync_primitives_are_functionally) - [Sync primitives are Functionally Complete](http://kprotty.me/2025/07/31/sync-primitives-are-functionally-complete.html)
* [2025-07-31, 07:01:00](https://soylentnews.org/article.pl?sid=25/07/30/0121254&amp;from=rss) - [Manuel Moreale on Why Blogs Matter](https://soylentnews.org/article.pl?sid=25/07/30/0121254&amp;from=rss)
* [2025-07-31, 02:17:00](https://soylentnews.org/article.pl?sid=25/07/30/0113232&amp;from=rss) - [FreeBSD 15.0’S Installer to Gain Option to Install a Full KDE Plasma Desktop Environment](https://soylentnews.org/article.pl?sid=25/07/30/0113232&amp;from=rss)
* [2025-07-30, 21:32:00](https://soylentnews.org/article.pl?sid=25/07/29/1652215&amp;from=rss) - [OpenAI’s ChatGPT Agent Casually Clicks Through “I am not a robot” Verification Test](https://soylentnews.org/article.pl?sid=25/07/29/1652215&amp;from=rss)
* [2025-07-30, 18:58:16](https://lobste.rs/s/7nho3g/dive_into_open_chat_protocols) - [A Dive Into Open Chat Protocols](https://wiki.alopex.li/ADiveIntoOpenChat)
* [2025-07-30, 16:48:00](https://soylentnews.org/article.pl?sid=25/07/29/0611252&amp;from=rss) - [NASA’s Webb Finds Possible &apos;Direct Collapse&apos; Black Hole](https://soylentnews.org/article.pl?sid=25/07/29/0611252&amp;from=rss)
* [2025-07-30, 11:57:00](https://soylentnews.org/article.pl?sid=25/07/28/1538201&amp;from=rss) - [EU-US Draft 15Pc Tariff Agreement Appears To Include Pharma, Chips](https://soylentnews.org/article.pl?sid=25/07/28/1538201&amp;from=rss)
* [2025-07-30, 07:13:00](https://soylentnews.org/article.pl?sid=25/07/28/1533222&amp;from=rss) - [China Advances Toward Tech Independence With New Homegrown 6nm Gaming And AI GPUs](https://soylentnews.org/article.pl?sid=25/07/28/1533222&amp;from=rss)
* [2025-07-30, 03:33:09](https://news.ycombinator.com/item?id=44730691) - [Show HN: An interactive dashboard to explore NYC rentals data](https://leaseswap.nyc/analytics)
* [2025-07-30, 02:32:00](https://soylentnews.org/article.pl?sid=25/07/28/1524227&amp;from=rss) - [Nasa May Lose Close To 4,000 Employees After Latest Deferred Resignation Round](https://soylentnews.org/article.pl?sid=25/07/28/1524227&amp;from=rss)
* [2025-07-29, 21:44:00](https://soylentnews.org/article.pl?sid=25/07/28/1520211&amp;from=rss) - [Senator Demands Mandiant Hand Over Telco Salt Typhoon Probes](https://soylentnews.org/article.pl?sid=25/07/28/1520211&amp;from=rss)
* [2025-07-29, 18:17:26](https://news.ycombinator.com/item?id=44726641) - [Pseudo, a Common Lisp macro for pseudocode expressions](http://funcall.blogspot.com/2025/07/pseudo.html)
* [2025-07-29, 17:02:00](https://soylentnews.org/article.pl?sid=25/07/27/2215239&amp;from=rss) - [Hacker Injects Malicious, Potentially Disk-Wiping Prompt Into Amazon&apos;s Ai Coding Assistant](https://soylentnews.org/article.pl?sid=25/07/27/2215239&amp;from=rss)
* [2025-07-29, 12:15:00](https://soylentnews.org/article.pl?sid=25/07/27/0234226&amp;from=rss) - [Gold Can be Heated to 14 Times its Melting Point Without Melting](https://soylentnews.org/article.pl?sid=25/07/27/0234226&amp;from=rss)
* [2025-07-29, 07:42:56](https://news.ycombinator.com/item?id=44720285) - [Make Your Own Backup System – Part 2: Forging the FreeBSD Backup Stronghold](https://it-notes.dragas.net/2025/07/29/make-your-own-backup-system-part-2-forging-the-freebsd-backup-stronghold/)
* [2025-07-29, 07:27:00](https://soylentnews.org/article.pl?sid=25/07/27/0228236&amp;from=rss) - [Discovery Alert: Flaring Star, Toasted Planet](https://soylentnews.org/article.pl?sid=25/07/27/0228236&amp;from=rss)
* [2025-07-29, 04:57:22](https://news.ycombinator.com/item?id=44719222) - [Show HN: Draw a fish and watch it swim with the others](https://drawafish.com)
* [2025-07-29, 02:40:00](https://soylentnews.org/article.pl?sid=25/07/26/1945219&amp;from=rss) - [Chinese Hackers Breached U.S. Army National Guard to Steal Network Configurations](https://soylentnews.org/article.pl?sid=25/07/26/1945219&amp;from=rss)
* [2025-07-28, 22:00:00](https://soylentnews.org/article.pl?sid=25/07/26/1935251&amp;from=rss) - [As Site Blocking Is Increasing, European Commission Subtly Slaps Down Italy’s Piracy Shield](https://soylentnews.org/article.pl?sid=25/07/26/1935251&amp;from=rss)
* [2025-07-28, 18:22:26](https://news.ycombinator.com/item?id=44713701) - [Yes in My Bamako Yard](https://asteriskmag.com/issues/11/yes-in-my-bamako-yard)
* [2025-07-28, 17:11:00](https://soylentnews.org/article.pl?sid=25/07/26/1924256&amp;from=rss) - [AMD CEO Says U.S.-Made TSMC Chips Are More Expensive, But Worth It](https://soylentnews.org/article.pl?sid=25/07/26/1924256&amp;from=rss)
* [2025-07-28, 12:30:00](https://soylentnews.org/article.pl?sid=25/07/26/192237&amp;from=rss) - [Inventor Claims Bleach Injections will Destroy Cancer Tumors](https://soylentnews.org/article.pl?sid=25/07/26/192237&amp;from=rss)
* [2025-07-28, 07:45:00](https://soylentnews.org/article.pl?sid=25/07/26/1848241&amp;from=rss) - [Coding, Remote Work and Rehabilitation](https://soylentnews.org/article.pl?sid=25/07/26/1848241&amp;from=rss)
* [2025-07-28, 02:58:00](https://soylentnews.org/article.pl?sid=25/07/26/1844226&amp;from=rss) - [Google Sues Operators of 10-Million-Device Badbox 2.0 Botnet](https://soylentnews.org/article.pl?sid=25/07/26/1844226&amp;from=rss)
