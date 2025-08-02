# [News Summary](https://kherrick.github.io/news-summary/)

## Health and Science Breakthroughs

* [The First Widespread Cure for HIV Could Be in Children](https://www.wired.com/story/the-first-widespread-cure-for-hiv-could-be-in-children/) - A significant advancement highlights the potential cure for HIV, particularly focusing on children as key beneficiaries. [Comments](https://news.ycombinator.com/item?id=44765981).

* [Peacock Feathers Can Emit Laser Beams](https://soylentnews.org/article.pl?sid=25/08/01/0126209&amp;from=rss) - A peculiar discovery in which nature's engineering, like peacock feathers, produces laser-like properties. [Comments](https://soylentnews.org/article.pl?sid=25/08/01/0126209&amp;from=rss).

## Technological Innovations

* [Microsoft is open sourcing Windows 11's UI framework](https://www.neowin.net/news/microsoft-is-taking-steps-to-open-sourcing-windows-11-user-interface-framework/) - A major move by Microsoft to open-source its complex user interface framework for developers. [Comments](https://news.ycombinator.com/item?id=44765600).

* [Peak Energy Ships America's First Grid-Scale Sodium-Ion Battery](https://hardware.slashdot.org/story/25/08/01/2120225/peak-energy-ships-americas-first-grid-scale-sodium-ion-battery?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A revolution in energy storage with the first sodium-ion battery deployment. [Comments](https://hardware.slashdot.org/story/25/08/01/2120225/peak-energy-ships-americas-first-grid-scale-sodium-ion-battery?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

* [Aurora's Self-Driving Trucks Are Now Driving At Night](https://tech.slashdot.org/story/25/08/01/2242247/auroras-self-driving-trucks-are-now-driving-at-night?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Aurora self-driving tech breaks boundaries by enabling commercial night driving. [Comments](https://tech.slashdot.org/story/25/08/01/2242247/auroras-self-driving-trucks-are-now-driving-at-night?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

## Data Privacy and Ethics

* [A Luggage Service's Web Bugs Exposed the Travel Plans of Every User](https://yro.slashdot.org/story/25/08/01/219227/a-luggage-services-web-bugs-exposed-the-travel-plans-of-every-user?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Highlights the risks of web bugs in revealing sensitive user travel data. [Comments](https://yro.slashdot.org/story/25/08/01/219227/a-luggage-services-web-bugs-exposed-the-travel-plans-of-every-user?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

* [India To Penalize Universities With Too Many Retractions](https://science.slashdot.org/story/25/08/01/1938215/india-to-penalize-universities-with-too-many-retractions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A bold initiative in academia to ensure quality and accountability within research. [Comments](https://science.slashdot.org/story/25/08/01/1938215/india-to-penalize-universities-with-too-many-retractions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

## Corporate and Technological Policies

* [Anthropic Revokes OpenAI's Access To Claude Over Terms of Service Violation](https://developers.slashdot.org/story/25/08/01/2237220/anthropic-revokes-openais-access-to-claude-over-terms-of-service-violation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Anthropic takes action against OpenAI due to contractual issues involving its Claude technology. [Comments](https://developers.slashdot.org/story/25/08/01/2237220/anthropic-revokes-openais-access-to-claude-over-terms-of-service-violation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

* [Palantir Lands $10 Billion Army Software and Data Contract](https://tech.slashdot.org/story/25/08/01/2055248/palantir-lands-10-billion-army-software-and-data-contract?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Palantir secures a monumental U.S. Army deal showcasing its leadership in military technologies. [Comments](https://tech.slashdot.org/story/25/08/01/2055248/palantir-lands-10-billion-army-software-and-data-contract?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

## Emerging Discoveries and Historical Reflections

* [At 17, Hannah Cairo solved a major math mystery](https://www.quantamagazine.org/at-17-hannah-cairo-solved-a-major-math-mystery-20250801/) - Extraordinary accomplishment by a teenager unraveling a significant mathematical problem. [Comments](https://news.ycombinator.com/item?id=44759152).

* [Ladybird Browser July Update](https://ladybird.org/newsletter/2025-07-31/) - Insightful updates from the Ladybird browser project, highlighting its rapid development. [Comments](https://news.ycombinator.com/item?id=44765292).

* [The Math Is Haunted](https://overreacted.io/the-math-is-haunted/) - A deep dive into the philosophical intricacies of mathematical structures. [Comments](https://lobste.rs/s/43hw9a/math_is_haunted).

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

* [2025-08-02, 09:20:42](https://news.ycombinator.com/item?id=44765981) - [The First Widespread Cure for HIV Could Be in Children](https://www.wired.com/story/the-first-widespread-cure-for-hiv-could-be-in-children/)
* [2025-08-02, 07:52:40](https://news.ycombinator.com/item?id=44765600) - [Microsoft is open sourcing Windows 11&apos;s UI framework](https://www.neowin.net/news/microsoft-is-taking-steps-to-open-sourcing-windows-11-user-interface-framework/)
* [2025-08-02, 07:00:00](https://science.slashdot.org/story/25/08/01/2254211/lying-increases-trust-in-science-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Lying Increases Trust In Science, Study Finds](https://science.slashdot.org/story/25/08/01/2254211/lying-increases-trust-in-science-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-02, 06:34:25](https://news.ycombinator.com/item?id=44765292) - [Ladybird Browser July Update](https://ladybird.org/newsletter/2025-07-31/)
* [2025-08-02, 06:28:31](https://news.ycombinator.com/item?id=44765264) - [Terence Tao weighs in on the suspension of UCLA grants](https://mathstodon.xyz/@tao/114956840959338146)
* [2025-08-02, 06:20:00](https://soylentnews.org/article.pl?sid=25/08/01/0126209&amp;from=rss) - [Peacock Feathers Can Emit Laser Beams](https://soylentnews.org/article.pl?sid=25/08/01/0126209&amp;from=rss)
* [2025-08-02, 05:23:40](https://lobste.rs/s/pm9hcp/keep_calm_carry_on) - [Keep calm and carry on](https://boston.conman.org/2025/08/01.1)
* [2025-08-02, 04:26:53](https://lobste.rs/s/6b3ete/jujutsu_for_busy_devs_part_2_how_do_i) - [Jujutsu For Busy Devs, Part 2: \&quot;How Do I...?\&quot;](https://maddie.wtf/posts/2025-07-21-jujutsu-for-busy-devs/entry/1)
* [2025-08-02, 03:30:00](https://developers.slashdot.org/story/25/08/01/2237220/anthropic-revokes-openais-access-to-claude-over-terms-of-service-violation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Revokes OpenAI&apos;s Access To Claude Over Terms of Service Violation](https://developers.slashdot.org/story/25/08/01/2237220/anthropic-revokes-openais-access-to-claude-over-terms-of-service-violation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-02, 02:57:27](https://news.ycombinator.com/item?id=44764568) - [Robert Wilson has died](https://www.theartnewspaper.com/2025/08/01/robert-wilson-playwright-director-artist-obituary)
* [2025-08-02, 02:12:05](https://news.ycombinator.com/item?id=44764376) - [Hardening mode for the compiler](https://discourse.llvm.org/t/rfc-hardening-mode-for-the-compiler/87660)
* [2025-08-02, 02:02:00](https://hardware.slashdot.org/story/25/08/01/2120225/peak-energy-ships-americas-first-grid-scale-sodium-ion-battery?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Peak Energy Ships America&apos;s First Grid-Scale Sodium-Ion Battery](https://hardware.slashdot.org/story/25/08/01/2120225/peak-energy-ships-americas-first-grid-scale-sodium-ion-battery?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-02, 01:37:00](https://soylentnews.org/article.pl?sid=25/08/01/0118232&amp;from=rss) - [Microsoft Research Tries to Predict Jobs Most Impacted (i.e., Lost) by AI](https://soylentnews.org/article.pl?sid=25/08/01/0118232&amp;from=rss)
* [2025-08-02, 01:25:00](https://tech.slashdot.org/story/25/08/01/2242247/auroras-self-driving-trucks-are-now-driving-at-night?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Aurora&apos;s Self-Driving Trucks Are Now Driving At Night](https://tech.slashdot.org/story/25/08/01/2242247/auroras-self-driving-trucks-are-now-driving-at-night?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-02, 00:59:57](https://news.ycombinator.com/item?id=44764077) - [The Rickover Corpus: A digital archive of Admiral Rickover&apos;s speeches and memos](https://rickovercorpus.org/)
* [2025-08-02, 00:45:00](https://tech.slashdot.org/story/25/08/01/2116210/skipping-over-the-air-car-updates-could-be-costly?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Skipping Over-The-Air Car Updates Could Be Costly](https://tech.slashdot.org/story/25/08/01/2116210/skipping-over-the-air-car-updates-could-be-costly?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-02, 00:22:14](https://lobste.rs/s/houeoz/candyfloss_ergonomic_python_library_for) - [candyfloss: an ergonomic python library for running video pipelines](https://git.hella.cheap/bob/candyfloss)
* [2025-08-02, 00:02:00](https://yro.slashdot.org/story/25/08/01/219227/a-luggage-services-web-bugs-exposed-the-travel-plans-of-every-user?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Luggage Service&apos;s Web Bugs Exposed the Travel Plans of Every User](https://yro.slashdot.org/story/25/08/01/219227/a-luggage-services-web-bugs-exposed-the-travel-plans-of-every-user?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-01, 23:20:00](https://tech.slashdot.org/story/25/08/01/2055248/palantir-lands-10-billion-army-software-and-data-contract?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Palantir Lands $10 Billion Army Software and Data Contract](https://tech.slashdot.org/story/25/08/01/2055248/palantir-lands-10-billion-army-software-and-data-contract?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-01, 22:40:00](https://slashdot.org/story/25/08/01/2049255/atlassian-terminates-150-staff-with-pre-recorded-video?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Atlassian Terminates 150 Staff With Pre-Recorded Video](https://slashdot.org/story/25/08/01/2049255/atlassian-terminates-150-staff-with-pre-recorded-video?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-01, 22:08:53](https://lobste.rs/s/bwy6sv/libvirt_incremental_backups_for_raw) - [libvirt - incremental backups for raw devices](https://abbbi.github.io/datafile/)
* [2025-08-01, 22:04:38](https://news.ycombinator.com/item?id=44762959) - [Cerebras Code](https://www.cerebras.ai/blog/introducing-cerebras-code)
* [2025-08-01, 22:00:00](https://slashdot.org/story/25/08/01/2043256/amazon-ceo-wants-to-put-ads-in-your-alexa-conversations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon CEO Wants To Put Ads In Your Alexa+ Conversations](https://slashdot.org/story/25/08/01/2043256/amazon-ceo-wants-to-put-ads-in-your-alexa-conversations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-01, 21:53:13](https://news.ycombinator.com/item?id=44762880) - [Coffeematic PC – A coffee maker computer that pumps hot coffee to the CPU](https://www.dougmacdowell.com/coffeematic-pc.html)
* [2025-08-01, 21:51:33](https://lobste.rs/s/gijhis/unit_testing_principles) - [Unit Testing Principles](https://olano.dev/blog/unit-testing-principles/)
* [2025-08-01, 21:50:28](https://news.ycombinator.com/item?id=44762856) - [Anthropic revokes OpenAI&apos;s access to Claude](https://www.wired.com/story/anthropic-revokes-openais-access-to-claude/)
* [2025-08-01, 21:22:00](https://science.slashdot.org/story/25/08/01/1938215/india-to-penalize-universities-with-too-many-retractions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [India To Penalize Universities With Too Many Retractions](https://science.slashdot.org/story/25/08/01/1938215/india-to-penalize-universities-with-too-many-retractions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-01, 20:52:00](https://soylentnews.org/article.pl?sid=25/07/30/1511218&amp;from=rss) - [Intel Confirms It Will Dramatically Cut Its Workforce By The End Of 2025](https://soylentnews.org/article.pl?sid=25/07/30/1511218&amp;from=rss)
* [2025-08-01, 20:47:01](https://lobste.rs/s/mlnvoy/it_s_rude_show_ai_output_people) - [It&apos;s rude to show AI output to people](https://distantprovince.by/posts/its-rude-to-show-ai-output-to-people/)
* [2025-08-01, 20:44:00](https://tech.slashdot.org/story/25/08/01/195251/google-has-just-two-weeks-to-begin-cracking-open-android-it-admits-in-emergency-filing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Has Just Two Weeks To Begin Cracking Open Android, It Admits in Emergency Filing](https://tech.slashdot.org/story/25/08/01/195251/google-has-just-two-weeks-to-begin-cracking-open-android-it-admits-in-emergency-filing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-01, 20:21:42](https://news.ycombinator.com/item?id=44762026) - [Researchers map where solar energy delivers the biggest climate payoff](https://www.rutgers.edu/news/researchers-map-where-solar-energy-delivers-biggest-climate-payoff)
* [2025-08-01, 20:21:29](https://news.ycombinator.com/item?id=44762022) - [Does the Bitter Lesson Have Limits?](https://www.dbreunig.com/2025/08/01/does-the-bitter-lesson-have-limits.html)
* [2025-08-01, 20:02:00](https://apple.slashdot.org/story/25/08/01/191248/tim-cook-says-its-difficult-to-see-a-world-without-iphones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tim Cook Says &apos;It&apos;s Difficult To See a World&apos; Without iPhones](https://apple.slashdot.org/story/25/08/01/191248/tim-cook-says-its-difficult-to-see-a-world-without-iphones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-01, 19:48:06](https://news.ycombinator.com/item?id=44761548) - [Native Sparse Attention](https://aclanthology.org/2025.acl-long.1126/)
* [2025-08-01, 19:27:43](https://lobste.rs/s/muk05v/reflections_on_matrix_criticism_over) - [Reflections on Matrix criticism over the last week](https://youtu.be/OyuqM7RbX5E)
* [2025-08-01, 19:24:00](https://it.slashdot.org/story/25/08/01/1855254/belgium-bans-internet-archives-open-library?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Belgium Bans Internet Archive&apos;s &apos;Open Library&apos;](https://it.slashdot.org/story/25/08/01/1855254/belgium-bans-internet-archives-open-library?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-01, 18:45:00](https://tech.slashdot.org/story/25/08/01/1845229/google-backpedals-on-googl-shutdown-to-preserve-active-links?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Backpedals On Goo.gl Shutdown To Preserve Active Links](https://tech.slashdot.org/story/25/08/01/1845229/google-backpedals-on-googl-shutdown-to-preserve-active-links?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-01, 18:06:07](https://lobste.rs/s/xkynzw/what_declarative_languages_are_2013) - [What Declarative Languages Are (2013)](https://semantic-domain.blogspot.com/2013/07/what-declarative-languages-are.html)
* [2025-08-01, 18:06:00](https://slashdot.org/story/25/08/01/186206/verizon-is-upping-its-fees-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Verizon is Upping Its Fees Again](https://slashdot.org/story/25/08/01/186206/verizon-is-upping-its-fees-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-01, 17:18:16](https://lobste.rs/s/bonzbw/i_couldn_t_submit_pr_so_i_got_hired_fixed_it) - [I couldn&apos;t submit a PR, so I got hired and fixed it myself](https://www.skeptrune.com/posts/doing-the-little-things/)
* [2025-08-01, 16:59:51](https://news.ycombinator.com/item?id=44759417) - [I couldn&apos;t submit a PR, so I got hired and fixed it myself](https://www.skeptrune.com/posts/doing-the-little-things/)
* [2025-08-01, 16:58:10](https://lobste.rs/s/2vfx6w/lobsters_interview_with_icefox) - [Lobsters Interview with Icefox](https://lobste.rs/s/2vfx6w/lobsters_interview_with_icefox)
* [2025-08-01, 16:36:51](https://news.ycombinator.com/item?id=44759171) - [Ergonomic keyboarding with the Svalboard: a half-year retrospective](https://twey.io/hci/svalboard/)
* [2025-08-01, 16:35:40](https://news.ycombinator.com/item?id=44759152) - [At 17, Hannah Cairo solved a major math mystery](https://www.quantamagazine.org/at-17-hannah-cairo-solved-a-major-math-mystery-20250801/)
* [2025-08-01, 16:12:00](https://soylentnews.org/politics/article.pl?sid=25/07/30/158210&amp;from=rss) - [Trump Caving on Nvidia H20 Export Curbs May Disrupt His Bigger Trade War](https://soylentnews.org/politics/article.pl?sid=25/07/30/158210&amp;from=rss)
* [2025-08-01, 15:00:05](https://news.ycombinator.com/item?id=44757794) - [Ask HN: Who is hiring? (August 2025)](https://news.ycombinator.com/item?id=44757794)
* [2025-08-01, 15:00:05](https://news.ycombinator.com/item?id=44757792) - [Ask HN: Who wants to be hired? (August 2025)](https://news.ycombinator.com/item?id=44757792)
* [2025-08-01, 14:53:05](https://lobste.rs/s/ku3kej/wayback_0_2_released) - [Wayback 0.2 released](https://wayback.freedesktop.org/news/2025/07/31/wayback-0.2-released/)
* [2025-08-01, 14:27:31](https://lobste.rs/s/9fwqhg/long_term_support) - [Long Term Support](https://www.sqlite.org/lts.html)
* [2025-08-01, 13:25:08](https://lobste.rs/s/fwgksy/stack_traces_for_postgres_errors_with) - [Stack traces for Postgres errors with backtrace_functions](https://www.enterprisedb.com/blog/stack-traces-postgres-errors-backtracefunctions)
* [2025-08-01, 12:22:55](https://lobste.rs/s/jdk9z8/vibe_code_is_legacy_code) - [Vibe code is legacy code](https://blog.val.town/vibe-code)
* [2025-08-01, 12:13:12](https://news.ycombinator.com/item?id=44755654) - [Launch HN: Societies.io (YC W25) – AI simulations of your target audience](https://news.ycombinator.com/item?id=44755654)
* [2025-08-01, 11:24:00](https://soylentnews.org/article.pl?sid=25/07/30/1457215&amp;from=rss) - [From Apple to Greek Defense Start-up](https://soylentnews.org/article.pl?sid=25/07/30/1457215&amp;from=rss)
* [2025-08-01, 11:03:44](https://lobste.rs/s/nv7a9k/how_nixos_is_built) - [How NixOS is built](https://blog.erethon.com/blog/2025/07/31/how-nixos-is-built/)
* [2025-08-01, 10:11:10](https://lobste.rs/s/twphly/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/twphly/what_are_you_doing_this_weekend)
* [2025-08-01, 09:49:09](https://lobste.rs/s/rxkmvd/pride_versioning) - [Pride Versioning](https://pridever.org/)
* [2025-08-01, 09:44:07](https://lobste.rs/s/qsrdnn/agendafs_filesystem_for_syncing_notes) - [agendafs: A filesystem for syncing notes to your calendar](https://sr.ht/~marcc/agendafs/)
* [2025-08-01, 09:08:59](https://news.ycombinator.com/item?id=44754523) - [Our Farewell from Google Play](https://secuso.aifb.kit.edu/english/2809.php)
* [2025-08-01, 09:04:16](https://news.ycombinator.com/item?id=44754492) - [Replacing tmux in my dev workflow](https://bower.sh/you-might-not-need-tmux)
* [2025-08-01, 08:52:00](https://lobste.rs/s/dsmzzu/if_odin_had_macros) - [If Odin Had Macros](https://www.gingerbill.org/article/2025/07/31/if-odin-had-macros/)
* [2025-08-01, 06:41:00](https://soylentnews.org/article.pl?sid=25/07/30/1450258&amp;from=rss) - [X37B is Set to Launch and Test Quantum Navigation Technology](https://soylentnews.org/article.pl?sid=25/07/30/1450258&amp;from=rss)
* [2025-08-01, 06:37:09](https://lobste.rs/s/axr1la/age_verification_doesn_t_need_be_privacy) - [Age Verification Doesn’t Need to Be a Privacy Footgun](https://soatok.blog/2025/07/31/age-verification-doesnt-need-to-be-a-privacy-footgun/)
* [2025-08-01, 05:30:55](https://lobste.rs/s/iqyqm3/6_weeks_claude_code) - [6 Weeks of Claude Code](https://blog.puzzmo.com/posts/2025/07/30/six-weeks-of-claude-code/)
* [2025-08-01, 01:55:00](https://soylentnews.org/article.pl?sid=25/07/30/1438215&amp;from=rss) - [Anthropic Unveils New Rate Limits to Curb Claude Code Power Users](https://soylentnews.org/article.pl?sid=25/07/30/1438215&amp;from=rss)
* [2025-08-01, 00:50:57](https://lobste.rs/s/wzdyfb/our_first_outage_from_llm_written_code) - [Our first outage from LLM-written code](https://sketch.dev/blog/our-first-outage-from-llm-written-code)
* [2025-07-31, 22:16:45](https://lobste.rs/s/9ha6ab/you_might_not_need_tmux) - [You might not need tmux](https://bower.sh/you-might-not-need-tmux)
* [2025-07-31, 21:10:00](https://soylentnews.org/article.pl?sid=25/07/30/0143216&amp;from=rss) - [Meta Pirated and Seeded Porn for Years to Train AI, Lawsuit Says](https://soylentnews.org/article.pl?sid=25/07/30/0143216&amp;from=rss)
* [2025-07-31, 16:29:00](https://soylentnews.org/article.pl?sid=25/07/30/0133228&amp;from=rss) - [Why We Need a Right Not to be Manipulated](https://soylentnews.org/article.pl?sid=25/07/30/0133228&amp;from=rss)
* [2025-07-31, 16:17:25](https://lobste.rs/s/hzr1ke/smallest_embeddable_scripting_language) - [The smallest embeddable scripting language, part 1](https://log.schemescape.com/posts/static-site-generators/smallest-scripting-language.html)
* [2025-07-31, 14:47:25](https://lobste.rs/s/43hw9a/math_is_haunted) - [The Math Is Haunted](https://overreacted.io/the-math-is-haunted/)
* [2025-07-31, 11:45:00](https://soylentnews.org/article.pl?sid=25/07/30/0127251&amp;from=rss) - [We Are Undergoing Unprecedented Loss of Freshwater Across the Planet](https://soylentnews.org/article.pl?sid=25/07/30/0127251&amp;from=rss)
* [2025-07-31, 10:10:52](https://news.ycombinator.com/item?id=44744121) - [Why leather is best motorbike protection – whilst being dragged along concrete](https://www.youtube.com/watch?v=xwuRUcAGIEU)
* [2025-07-31, 07:01:00](https://soylentnews.org/article.pl?sid=25/07/30/0121254&amp;from=rss) - [Manuel Moreale on Why Blogs Matter](https://soylentnews.org/article.pl?sid=25/07/30/0121254&amp;from=rss)
* [2025-07-31, 02:17:00](https://soylentnews.org/article.pl?sid=25/07/30/0113232&amp;from=rss) - [FreeBSD 15.0’S Installer to Gain Option to Install a Full KDE Plasma Desktop Environment](https://soylentnews.org/article.pl?sid=25/07/30/0113232&amp;from=rss)
* [2025-07-30, 21:32:00](https://soylentnews.org/article.pl?sid=25/07/29/1652215&amp;from=rss) - [OpenAI’s ChatGPT Agent Casually Clicks Through “I am not a robot” Verification Test](https://soylentnews.org/article.pl?sid=25/07/29/1652215&amp;from=rss)
* [2025-07-30, 16:48:00](https://soylentnews.org/article.pl?sid=25/07/29/0611252&amp;from=rss) - [NASA’s Webb Finds Possible &apos;Direct Collapse&apos; Black Hole](https://soylentnews.org/article.pl?sid=25/07/29/0611252&amp;from=rss)
* [2025-07-30, 15:37:40](https://news.ycombinator.com/item?id=44735613) - [The tradeoff between human and AI context](https://softwaredoug.com/blog/2025/07/30/layers-of-ai-coding)
* [2025-07-30, 14:14:56](https://news.ycombinator.com/item?id=44734515) - [Weather Model based on ADS-B](https://obrhubr.org/adsb-weather-model)
* [2025-07-30, 11:57:00](https://soylentnews.org/article.pl?sid=25/07/28/1538201&amp;from=rss) - [EU-US Draft 15Pc Tariff Agreement Appears To Include Pharma, Chips](https://soylentnews.org/article.pl?sid=25/07/28/1538201&amp;from=rss)
* [2025-07-30, 07:13:00](https://soylentnews.org/article.pl?sid=25/07/28/1533222&amp;from=rss) - [China Advances Toward Tech Independence With New Homegrown 6nm Gaming And AI GPUs](https://soylentnews.org/article.pl?sid=25/07/28/1533222&amp;from=rss)
* [2025-07-30, 02:32:00](https://soylentnews.org/article.pl?sid=25/07/28/1524227&amp;from=rss) - [Nasa May Lose Close To 4,000 Employees After Latest Deferred Resignation Round](https://soylentnews.org/article.pl?sid=25/07/28/1524227&amp;from=rss)
* [2025-07-29, 21:44:00](https://soylentnews.org/article.pl?sid=25/07/28/1520211&amp;from=rss) - [Senator Demands Mandiant Hand Over Telco Salt Typhoon Probes](https://soylentnews.org/article.pl?sid=25/07/28/1520211&amp;from=rss)
* [2025-07-29, 18:52:08](https://news.ycombinator.com/item?id=44726981) - [Aerodynamic drag in small cyclist formations: shielding the protected rider [pdf]](http://www.urbanphysics.net/2025_Formation_Paper_Preprint_v1.pdf)
* [2025-07-29, 17:02:00](https://soylentnews.org/article.pl?sid=25/07/27/2215239&amp;from=rss) - [Hacker Injects Malicious, Potentially Disk-Wiping Prompt Into Amazon&apos;s Ai Coding Assistant](https://soylentnews.org/article.pl?sid=25/07/27/2215239&amp;from=rss)
* [2025-07-29, 13:15:42](https://news.ycombinator.com/item?id=44722950) - [Ethersync: Peer-to-peer collaborative editing of local text files](https://github.com/ethersync/ethersync)
* [2025-07-29, 12:39:50](https://news.ycombinator.com/item?id=44722594) - [Ferroelectric Helps Break Transistor Limits](https://spectrum.ieee.org/negative-capacitance-schottky-limit)
* [2025-07-29, 12:15:00](https://soylentnews.org/article.pl?sid=25/07/27/0234226&amp;from=rss) - [Gold Can be Heated to 14 Times its Melting Point Without Melting](https://soylentnews.org/article.pl?sid=25/07/27/0234226&amp;from=rss)
* [2025-07-29, 11:30:26](https://news.ycombinator.com/item?id=44721932) - [JavaScript retro sound effects generator](https://github.grumdrig.com/jsfxr/)
* [2025-07-29, 08:23:10](https://news.ycombinator.com/item?id=44720619) - [Yearly Organiser](https://neatnik.net/calendar/)
* [2025-07-29, 07:27:00](https://soylentnews.org/article.pl?sid=25/07/27/0228236&amp;from=rss) - [Discovery Alert: Flaring Star, Toasted Planet](https://soylentnews.org/article.pl?sid=25/07/27/0228236&amp;from=rss)
* [2025-07-29, 04:57:22](https://news.ycombinator.com/item?id=44719222) - [Show HN: Draw a fish and watch it swim with the others](https://drawafish.com)
* [2025-07-29, 02:40:00](https://soylentnews.org/article.pl?sid=25/07/26/1945219&amp;from=rss) - [Chinese Hackers Breached U.S. Army National Guard to Steal Network Configurations](https://soylentnews.org/article.pl?sid=25/07/26/1945219&amp;from=rss)
