# [News Summary](https://kherrick.github.io/news-summary/)

## Cybersecurity and Privacy

* [Phishing campaign targeting crates.io users](https://blog.rust-lang.org/2025/09/12/crates-io-phishing-campaign/) - Highlighting an ongoing phishing campaign aimed at crates.io users, an essential repository for Rust developers. [Comments](https://lobste.rs/s/bzzwb7/phishing_campaign_targeting_crates_io)

* [Swiss Government Looks To Undercut Privacy Tech, Stoking Fears of Mass Surveillance](https://yro.slashdot.org/story/25/09/12/0755253/swiss-government-looks-to-undercut-privacy-tech-stoking-fears-of-mass-surveillance?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Exploring privacy concerns arising from Swiss government policy changes. [Comments](https://news.ycombinator.com/item?id=45222695)

* [The US Is Now the Largest Investor In Commercial Spyware](https://news.slashdot.org/story/25/09/11/2048200/the-us-is-now-the-largest-investor-in-commercial-spyware?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Investigative insights into America’s commercial spyware investments. [Comments](https://news.ycombinator.com/item?id=45217415)

## Tech Innovations

* [Scientists Create Solar Cells That Generate Energy From Indoor Light at Record Efficiency](https://soylentnews.org/article.pl?sid=25/09/10/0627237&from=rss) - A breakthrough in solar cell technology optimized for indoor use. [Comments](https://lobste.rs/s/fzzobp/jetzig_web_framework_for_zig)

* [Gravitational Waves Finally Prove Stephen Hawking's Black Hole Theorem](https://science.slashdot.org/story/25/09/11/2133252/gravitational-waves-finally-prove-stephen-hawkings-black-hole-theorem?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Confirming a key aspect of black hole physics for the first time. [Comments](https://news.ycombinator.com/item?id=45220069)

* [Microsoft Shows Off its Latest Analog Optical Computer](https://soylentnews.org/article.pl?sid=25/09/07/0222253&from=rss) - Demonstrating cutting-edge optical computing advancements. [Comments](https://soylentnews.org/article.pl?sid=25/09/07/0222253&from=rss)

## Developer Tools and Guides

* [A Beginner’s Guide to Extending Emacs](https://blog.tjll.net/a-beginners-guide-to-extending-emacs/) - Practical tips for expanding functionality in Emacs. [Comments](https://news.ycombinator.com/item?id=45223239)

* [oq: Terminal OpenAPI Spec viewer](https://github.com/plutov/oq) - Introducing a tool for browsing OpenAPI specifications directly in the terminal. [Comments](https://lobste.rs/s/exbkdt/oq_terminal_openapi_spec_viewer)

* [Doom-ada: Doom Emacs Ada language module with syntax, LSP and Alire support](https://github.com/tomekw/doom-ada) - Enhancements in Ada language development using Doom Emacs. [Comments](https://news.ycombinator.com/item?id=45222993)

## Environmental and Scientific Developments

* [Scientists Discover ‘Clearest Sign’ Yet of Life on Mars](https://soylentnews.org/article.pl?sid=25/09/10/2228216&from=rss) - Potential evidence of life on the Red Planet reshapes our understanding of Mars. [Comments](https://soylentnews.org/article.pl?sid=25/09/10/2228216&from=rss)

* [Scientists Turned Plastic Trash Into a Material That Eats Carbon](https://soylentnews.org/article.pl?sid=25/09/10/0113202&from=rss) - A transformative approach to addressing plastic waste and climate change. [Comments](https://soylentnews.org/article.pl?sid=25/09/10/0113202&from=rss)

* [Scientists Link Hundreds of Severe Heat Waves To Fossil Fuel Producers' Pollution](https://news.slashdot.org/story/25/09/11/2242238/scientists-link-hundreds-of-severe-heat-waves-to-fossil-fuel-producers-pollution?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Direct links identified between pollution and extreme weather events. [Comments](https://slashdot.org/story/25/09/11/2242238/scientists-link-hundreds-of-severe-heat-waves-to-fossil-fuel-producers-pollution)

## Open Source and Software Releases

* [Classic GTK1 GUI Library for Windows, Linux and MacOS](https://gitlab.com/robinrowe/gtk1) - Revisiting classic GUI frameworks with cross-platform capabilities. [Comments](https://lobste.rs/s/2remdu/classic_gtk1_gui_library_for_windows)

* [Unicode version 17.0.0 Released](https://soylentnews.org/article.pl?sid=25/09/10/2225205&from=rss) - Updates to the Unicode standard bring new emojis and scripts. [Comments](https://soylentnews.org/article.pl?sid=25/09/10/2225205&from=rss)

* [Debian 13, Postgres, and the US time zones](https://rachelbythebay.com/w/2025/09/11/debtz/) - An exploration of time zone synchronization issues in the context of Debian and PostgreSQL. [Comments](https://lobste.rs/s/p9abfj/debian_13_postgres_us_time_zones)

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

* [2025-09-12, 15:35:19](https://lobste.rs/s/bzzwb7/phishing_campaign_targeting_crates_io) - [Phishing campaign targeting crates.io users](https://blog.rust-lang.org/2025/09/12/crates-io-phishing-campaign/)
* [2025-09-12, 15:32:11](https://news.ycombinator.com/item?id=45223239) - [A Beginner&apos;s Guide to Extending Emacs](https://blog.tjll.net/a-beginners-guide-to-extending-emacs/)
* [2025-09-12, 15:21:00](https://tech.slashdot.org/story/25/09/12/0828229/google-is-shutting-down-tables-its-airtable-rival?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google is Shutting Down Tables, Its Airtable Rival](https://tech.slashdot.org/story/25/09/12/0828229/google-is-shutting-down-tables-its-airtable-rival?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-12, 15:17:09](https://news.ycombinator.com/item?id=45223053) - [Show HN: DWS OS, a Plan 9 Inspired Web \&quot;OS\&quot;](https://dws.rip)
* [2025-09-12, 15:14:05](https://lobste.rs/s/kltoas/lobsters_interview_with_susam) - [Lobsters Interview with Susam](https://lobste.rs/s/kltoas/lobsters_interview_with_susam)
* [2025-09-12, 15:13:00](https://soylentnews.org/article.pl?sid=25/09/11/0256255&amp;from=rss) - [Dead Internet Theory Lives: One Out of Three of You is a Bot](https://soylentnews.org/article.pl?sid=25/09/11/0256255&amp;from=rss)
* [2025-09-12, 15:11:43](https://news.ycombinator.com/item?id=45222993) - [Doom-ada: Doom Emacs Ada language module with syntax, LSP and Alire support](https://github.com/tomekw/doom-ada)
* [2025-09-12, 14:54:24](https://lobste.rs/s/exbkdt/oq_terminal_openapi_spec_viewer) - [oq: Terminal OpenAPI Spec viewer](https://github.com/plutov/oq)
* [2025-09-12, 14:53:45](https://news.ycombinator.com/item?id=45222799) - [Oq: Terminal OpenAPI Spec Viewer](https://github.com/plutov/oq)
* [2025-09-12, 14:51:33](https://news.ycombinator.com/item?id=45222777) - [Active phishing campaign targeting crates.io users](https://blog.rust-lang.org/2025/09/12/crates-io-phishing-campaign/)
* [2025-09-12, 14:50:57](https://news.ycombinator.com/item?id=45222772) - [Crates.io Phishing Attempt](https://fasterthanli.me/articles/crates-io-phishing-attempt)
* [2025-09-12, 14:44:05](https://news.ycombinator.com/item?id=45222695) - [Many Hard LeetCode Problems Are Easy Constraint Problems](https://buttondown.com/hillelwayne/archive/many-hard-leetcode-problems-are-easy-constraint/)
* [2025-09-12, 14:40:00](https://yro.slashdot.org/story/25/09/12/0755253/swiss-government-looks-to-undercut-privacy-tech-stoking-fears-of-mass-surveillance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Swiss Government Looks To Undercut Privacy Tech, Stoking Fears of Mass Surveillance](https://yro.slashdot.org/story/25/09/12/0755253/swiss-government-looks-to-undercut-privacy-tech-stoking-fears-of-mass-surveillance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-12, 14:12:23](https://news.ycombinator.com/item?id=45222369) - [3D Modeling with Paper](https://www.arvinpoddar.com/blog/3d-modeling-with-paper)
* [2025-09-12, 14:01:00](https://tech.slashdot.org/story/25/09/12/0738208/nepals-social-media-ban-backfires-as-politics-moves-to-a-chat-room?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nepal&apos;s Social Media Ban Backfires as Politics Moves To a Chat Room](https://tech.slashdot.org/story/25/09/12/0738208/nepals-social-media-ban-backfires-as-politics-moves-to-a-chat-room?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-12, 13:39:15](https://lobste.rs/s/eyjir3/fun_friday_question_what_easter_eggs_have) - [Fun Friday Question: What Easter Eggs have you Found or Made?](https://lobste.rs/s/eyjir3/fun_friday_question_what_easter_eggs_have)
* [2025-09-12, 13:36:40](https://news.ycombinator.com/item?id=45221996) - [Over 100 ships have sailed with fake insurance from the Norwegian Ro Marine](https://www.nrk.no/vestland/xl/over-100-ships-have-sailed-without-legitimate-insurance-from-the-norwegian-company-ro-marine-1.17565216)
* [2025-09-12, 13:31:05](https://news.ycombinator.com/item?id=45221938) - [Justice Department Announces Actions to Combat North Korean Remote IT Workers](https://www.justice.gov/opa/pr/justice-department-announces-coordinated-nationwide-actions-combat-north-korean-remote)
* [2025-09-12, 13:19:19](https://lobste.rs/s/p9abfj/debian_13_postgres_us_time_zones) - [Debian 13, Postgres, and the US/* time zones](https://rachelbythebay.com/w/2025/09/11/debtz/)
* [2025-09-12, 13:14:17](https://news.ycombinator.com/item?id=45221772) - [UK launches Project Octopus, thousands of interceptor drones to Ukraine](https://www.shephardmedia.com/news/air-warfare/dsei-2025-uk-launches-project-octopus-to-deliver-thousands-of-interceptor-drones-to-ukraine/)
* [2025-09-12, 13:00:00](https://apache.slashdot.org/story/25/09/11/2258218/apache-software-foundation-unveils-its-branding-overhaul-with-new-logo-the-asf-name?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apache Software Foundation Unveils Its Branding Overhaul With New Logo, &apos;The ASF&apos; Name](https://apache.slashdot.org/story/25/09/11/2258218/apache-software-foundation-unveils-its-branding-overhaul-with-new-logo-the-asf-name?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-12, 12:52:52](https://news.ycombinator.com/item?id=45221580) - [Chat Control faces blocking minority in the EU](https://twitter.com/TutaPrivacy/status/1966384776883142661)
* [2025-09-12, 12:38:29](https://lobste.rs/s/2remdu/classic_gtk1_gui_library_for_windows) - [Classic GTK1 GUI Library for Windows, Linux and MacOS](https://gitlab.com/robinrowe/gtk1)
* [2025-09-12, 12:17:28](https://lobste.rs/s/xdrwl3/improving_state_machine_code_generation) - [Improving state machine code generation](https://trifectatech.org/blog/improving-state-machine-code-generation/)
* [2025-09-12, 12:10:29](https://news.ycombinator.com/item?id=45221274) - [The Treasury Is Expanding the Patriot Act to Attack Bitcoin Self Custody](https://www.tftc.io/treasury-iexpanding-patriot-act/)
* [2025-09-12, 11:45:58](https://news.ycombinator.com/item?id=45221103) - [Lumina-DiMOO: An open-source discrete multimodal diffusion model](https://synbol.github.io/Lumina-DiMOO/)
* [2025-09-12, 10:59:38](https://news.ycombinator.com/item?id=45220843) - [Astrophysics Source Code Library](http://ascl.net/)
* [2025-09-12, 10:48:46](https://lobste.rs/s/hm0hgr/evolution_logical_replication) - [The Evolution of Logical Replication in PostgreSQL: A Firsthand Account](https://www.enterprisedb.com/blog/evolution-logical-replication-postgresql-firsthand-account)
* [2025-09-12, 10:33:00](https://soylentnews.org/article.pl?sid=25/09/10/2236210&amp;from=rss) - [This is the First Time Scientists Have Seen Decision Making in a Brain](https://soylentnews.org/article.pl?sid=25/09/10/2236210&amp;from=rss)
* [2025-09-12, 10:24:36](https://news.ycombinator.com/item?id=45220656) - [Becoming the person who does the thing](https://www.fredrivett.com/2025/09/10/becoming-the-person-who-does-the-thing/)
* [2025-09-12, 10:00:00](https://news.slashdot.org/story/25/09/11/2242238/scientists-link-hundreds-of-severe-heat-waves-to-fossil-fuel-producers-pollution?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Link Hundreds of Severe Heat Waves To Fossil Fuel Producers&apos; Pollution](https://news.slashdot.org/story/25/09/11/2242238/scientists-link-hundreds-of-severe-heat-waves-to-fossil-fuel-producers-pollution?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-12, 09:22:22](https://lobste.rs/s/hkopmb/logging_go_with_slog_practitioner_s_guide) - [Logging in Go with Slog: A Practitioner&apos;s Guide](https://www.dash0.com/guides/logging-in-go-with-slog)
* [2025-09-12, 08:55:06](https://lobste.rs/s/t6n1rs/really_simple_licensing) - [Really Simple Licensing](https://rslstandard.org/)
* [2025-09-12, 08:52:53](https://news.ycombinator.com/item?id=45220121) - [Examples from The LaTeX Companion book (3rd edition)](https://ctan.org/pkg/tlc3-examples)
* [2025-09-12, 08:44:15](https://news.ycombinator.com/item?id=45220069) - [Show HN: I made a generative online drum machine with ClojureScript](https://dopeloop.ai/beat-maker/)
* [2025-09-12, 08:22:06](https://lobste.rs/s/ax6avy/learning_use_goland) - [Learning to use GoLand](https://blog.jetbrains.com/go/2025/09/08/goland-can-do-that-ten-secret-superpowers-you-might-not-know/)
* [2025-09-12, 08:14:40](https://lobste.rs/s/gcygu7/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/gcygu7/what_are_you_doing_this_weekend)
* [2025-09-12, 08:02:20](https://lobste.rs/s/7aer4y/emacs_wants_you_extend_it_sorting_my) - [Emacs Wants You to Extend It: Sorting My Reading List](https://edoput.it/2025/04/16/emacs-paradigm-shift.html)
* [2025-09-12, 07:00:00](https://science.slashdot.org/story/25/09/11/2133252/gravitational-waves-finally-prove-stephen-hawkings-black-hole-theorem?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Gravitational Waves Finally Prove Stephen Hawking&apos;s Black Hole Theorem](https://science.slashdot.org/story/25/09/11/2133252/gravitational-waves-finally-prove-stephen-hawkings-black-hole-theorem?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-12, 06:32:04](https://news.ycombinator.com/item?id=45219228) - [Qwen3-Next](https://qwen.ai/blog?id=4074cca80393150c248e508aa62983f9cb7d27cd&amp;from=research.latest-advancements-list)
* [2025-09-12, 06:20:47](https://lobste.rs/s/fwx06s/fatnums_alternate_representation_for) - [FatNums: An Alternate Representation for School Arithmetic (2020)](https://parentheticallyspeaking.org/articles/fat-nums/)
* [2025-09-12, 05:46:00](https://soylentnews.org/article.pl?sid=25/09/10/2228216&amp;from=rss) - [Scientists Discover ‘Clearest Sign’ Yet of Life on Mars](https://soylentnews.org/article.pl?sid=25/09/10/2228216&amp;from=rss)
* [2025-09-12, 04:53:18](https://lobste.rs/s/mftjsk/positive_lambda) - [A positive lambda: &apos;+[]{}&apos;](https://stackoverflow.com/questions/18889028/a-positive-lambda-what-sorcery-is-this)
* [2025-09-12, 03:30:00](https://slashdot.org/story/25/09/11/2123245/ai-use-at-large-companies-is-in-decline-census-bureau-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Use At Large Companies Is In Decline, Census Bureau Says](https://slashdot.org/story/25/09/11/2123245/ai-use-at-large-companies-is-in-decline-census-bureau-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-12, 02:33:54](https://news.ycombinator.com/item?id=45218111) - [Debian 13, Postgres, and the US time zones](https://rachelbythebay.com/w/2025/09/11/debtz/)
* [2025-09-12, 01:30:00](https://tech.slashdot.org/story/25/09/11/2127258/windows-developers-can-now-publish-apps-to-microsofts-store-without-fees?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Windows Developers Can Now Publish Apps To Microsoft&apos;s Store Without Fees](https://tech.slashdot.org/story/25/09/11/2127258/windows-developers-can-now-publish-apps-to-microsofts-store-without-fees?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-12, 01:01:00](https://soylentnews.org/article.pl?sid=25/09/10/2225205&amp;from=rss) - [Unicode version 17.0.0 Released ](https://soylentnews.org/article.pl?sid=25/09/10/2225205&amp;from=rss)
* [2025-09-12, 00:50:00](https://news.slashdot.org/story/25/09/11/2058247/no-tax-on-tips-includes-digital-creators-too?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;No Tax On Tips&apos; Includes Digital Creators, Too](https://news.slashdot.org/story/25/09/11/2058247/no-tax-on-tips-includes-digital-creators-too?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-12, 00:30:00](https://developers.slashdot.org/story/25/09/11/2111239/openai-and-oracle-ink-historic-300-billion-cloud-computing-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI and Oracle Ink Historic $300 Billion Cloud Computing Deal](https://developers.slashdot.org/story/25/09/11/2111239/openai-and-oracle-ink-historic-300-billion-cloud-computing-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-12, 00:11:15](https://news.ycombinator.com/item?id=45217415) - [Float Exposed](https://float.exposed/)
* [2025-09-12, 00:10:00](https://news.slashdot.org/story/25/09/11/2048200/the-us-is-now-the-largest-investor-in-commercial-spyware?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The US Is Now the Largest Investor In Commercial Spyware](https://news.slashdot.org/story/25/09/11/2048200/the-us-is-now-the-largest-investor-in-commercial-spyware?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-11, 23:45:36](https://news.ycombinator.com/item?id=45217269) - [Why our website looks like an operating system](https://posthog.com/blog/why-os)
* [2025-09-11, 23:30:00](https://tech.slashdot.org/story/25/09/11/2039227/gmail-will-now-filter-your-purchases-into-a-new-tab?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Gmail Will Now Filter Your Purchases Into a New Tab](https://tech.slashdot.org/story/25/09/11/2039227/gmail-will-now-filter-your-purchases-into-a-new-tab?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-11, 22:50:00](https://slashdot.org/story/25/09/11/2027241/vmware-to-lose-35-percent-of-workloads-in-three-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [VMware To Lose 35 Percent of Workloads In Three Years](https://slashdot.org/story/25/09/11/2027241/vmware-to-lose-35-percent-of-workloads-in-three-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-11, 22:10:00](https://slashdot.org/story/25/09/11/2025226/small-businesses-face-a-new-threat-pay-up-or-be-flooded-with-bad-reviews?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Small Businesses Face a New Threat: Pay Up or Be Flooded With Bad Reviews](https://slashdot.org/story/25/09/11/2025226/small-businesses-face-a-new-threat-pay-up-or-be-flooded-with-bad-reviews?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-11, 21:30:00](https://yro.slashdot.org/story/25/09/11/2021243/court-rejects-verizon-claim-that-selling-location-data-without-consent-is-legal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Court Rejects Verizon Claim That Selling Location Data Without Consent Is Legal](https://yro.slashdot.org/story/25/09/11/2021243/court-rejects-verizon-claim-that-selling-location-data-without-consent-is-legal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-11, 20:57:00](https://lobste.rs/s/fqfewf/declarative_music_2_minute_deep_acid) - [Declarative music - 2 Minute Deep Acid in Strudel (from scratch)](https://www.youtube.com/watch?v=HkgV_-nJOuE)
* [2025-09-11, 20:17:42](https://lobste.rs/s/ogfetg/httpjail_monitor_restrict_http_https) - [httpjail: monitor and restrict HTTP/HTTPS requests from processes](https://github.com/coder/httpjail)
* [2025-09-11, 20:16:00](https://soylentnews.org/article.pl?sid=25/09/10/0627237&amp;from=rss) - [Scientists Create Solar Cells That Generate Energy From Indoor Light at Record Efficiency](https://soylentnews.org/article.pl?sid=25/09/10/0627237&amp;from=rss)
* [2025-09-11, 19:18:16](https://lobste.rs/s/fzzobp/jetzig_web_framework_for_zig) - [Jetzig Web Framework for Zig](https://www.jetzig.dev)
* [2025-09-11, 18:55:50](https://news.ycombinator.com/item?id=45214908) - [Claude’s memory architecture is the opposite of ChatGPT’s](https://www.shloked.com/writing/claude-memory)
* [2025-09-11, 18:32:23](https://news.ycombinator.com/item?id=45214670) - [Top model scores may be skewed by Git history leaks in SWE-bench](https://github.com/SWE-bench/SWE-bench/issues/465)
* [2025-09-11, 17:49:47](https://lobste.rs/s/kxwik9/ann_doom_ada_doom_emacs_ada_language) - [ANN: doom-ada: Doom Emacs Ada language module with syntax highlighting, LSP and Alire support](https://github.com/tomekw/doom-ada)
* [2025-09-11, 17:06:47](https://lobste.rs/s/fxyvwf/kefir_0_5_0_release_announcement_c17_c23) - [Kefir 0.5.0 Release Announcement (C17/C23 compiler)](https://kefir.protopopov.lv/posts/announce0.html)
* [2025-09-11, 15:59:17](https://lobste.rs/s/jblawy/program_verification_is_not_all_nothing) - [Program verification is not all-or-nothing](https://lawrencecpaulson.github.io/2025/09/05/All_or_nothing.html)
* [2025-09-11, 15:34:00](https://soylentnews.org/article.pl?sid=25/09/10/0624239&amp;from=rss) - [Meta Reportedly Suppressed Research About How Dangerous its VR Headsets Are for Kids](https://soylentnews.org/article.pl?sid=25/09/10/0624239&amp;from=rss)
* [2025-09-11, 15:23:32](https://lobste.rs/s/fetpnl/humanely_dealing_with_humungus_crawlers) - [humanely dealing with humungus crawlers](https://flak.tedunangst.com/post/humanely-dealing-with-humungus-crawlers)
* [2025-09-11, 14:40:48](https://lobste.rs/s/jyncoa/racintosh_plus) - [Racintosh Plus](http://www.identity4.com/2025-racintosh-plus/)
* [2025-09-11, 12:38:09](https://lobste.rs/s/0pkut7/behind_scenes_bun_install) - [Behind The Scenes of Bun Install](https://bun.com/blog/behind-the-scenes-of-bun-install)
* [2025-09-11, 10:51:00](https://soylentnews.org/article.pl?sid=25/09/10/0619236&amp;from=rss) - [Cannabis Might be Messing With Female Fertility](https://soylentnews.org/article.pl?sid=25/09/10/0619236&amp;from=rss)
* [2025-09-11, 10:30:12](https://lobste.rs/s/76687g/first_class_merges_cover_letters) - [First-class merges and cover letters](https://dotat.at/@/2025-09-11-cover-letter.html)
* [2025-09-11, 06:05:00](https://soylentnews.org/article.pl?sid=25/09/10/0436239&amp;from=rss) - [Tiny11 Builder Update Lets Users Strip Copilot and Other Bloat From Windows 11](https://soylentnews.org/article.pl?sid=25/09/10/0436239&amp;from=rss)
* [2025-09-11, 01:19:00](https://soylentnews.org/article.pl?sid=25/09/10/0431231&amp;from=rss) - [48 Years Ago, Voyager 1 Left Earth](https://soylentnews.org/article.pl?sid=25/09/10/0431231&amp;from=rss)
* [2025-09-10, 20:29:00](https://soylentnews.org/article.pl?sid=25/09/10/0113202&amp;from=rss) - [Scientists Turned Plastic Trash Into a Material That Eats Carbon](https://soylentnews.org/article.pl?sid=25/09/10/0113202&amp;from=rss)
* [2025-09-10, 15:44:00](https://soylentnews.org/article.pl?sid=25/09/10/0055209&amp;from=rss) - [Ubuntu Software Repositories Unavailable or Slow for Multiple Days Due to Outage](https://soylentnews.org/article.pl?sid=25/09/10/0055209&amp;from=rss)
* [2025-09-10, 10:57:00](https://soylentnews.org/article.pl?sid=25/09/10/0052200&amp;from=rss) - [Amazon&apos;s Project Kuiper Signs Up JetBlue as its First Airline Customer to Use its Satellite Internet](https://soylentnews.org/article.pl?sid=25/09/10/0052200&amp;from=rss)
* [2025-09-10, 06:13:00](https://soylentnews.org/article.pl?sid=25/09/09/1559244&amp;from=rss) - [Congress and Trump May Compromise on the SLS Rocket by Axing its Costly Upper Stage](https://soylentnews.org/article.pl?sid=25/09/09/1559244&amp;from=rss)
* [2025-09-10, 01:28:00](https://soylentnews.org/article.pl?sid=25/09/09/1229205&amp;from=rss) - [Your Red is My Red, at Least to Our Brains](https://soylentnews.org/article.pl?sid=25/09/09/1229205&amp;from=rss)
* [2025-09-09, 20:43:00](https://soylentnews.org/article.pl?sid=25/09/08/1814241&amp;from=rss) - [Microsoft Software Reselling Dispute Heads Back to UK Court](https://soylentnews.org/article.pl?sid=25/09/08/1814241&amp;from=rss)
* [2025-09-09, 15:59:00](https://soylentnews.org/article.pl?sid=25/09/08/1810222&amp;from=rss) - [Multiple Undersea Cable Cuts in the Red Sea, Hampering Internet Performance](https://soylentnews.org/article.pl?sid=25/09/08/1810222&amp;from=rss)
* [2025-09-09, 11:14:00](https://soylentnews.org/article.pl?sid=25/09/08/1210241&amp;from=rss) - [Recreating &apos;The Magnificient Ambersons&apos; With AI](https://soylentnews.org/article.pl?sid=25/09/08/1210241&amp;from=rss)
* [2025-09-09, 06:27:00](https://soylentnews.org/article.pl?sid=25/09/08/128200&amp;from=rss) - [The World&apos;s Largest Iceberg is Rapidly Breaking Apart and Melting Away](https://soylentnews.org/article.pl?sid=25/09/08/128200&amp;from=rss)
* [2025-09-09, 01:39:00](https://soylentnews.org/article.pl?sid=25/09/08/0254218&amp;from=rss) - [Mazda Patents Six-Stroke Gas Engine](https://soylentnews.org/article.pl?sid=25/09/08/0254218&amp;from=rss)
* [2025-09-09, 00:33:56](https://news.ycombinator.com/item?id=45175982) - [Windows-Use: an AI agent that interacts with Windows at GUI layer](https://github.com/CursorTouch/Windows-Use)
* [2025-09-08, 22:45:06](https://news.ycombinator.com/item?id=45175099) - [Ten Years of D3D12](https://therealmjp.github.io/posts/ten-years-of-d3d12/)
* [2025-09-08, 21:39:00](https://news.ycombinator.com/item?id=45174366) - [Racintosh Plus – Rackmount Mac Plus](http://www.identity4.com/2025-racintosh-plus/)
* [2025-09-08, 20:53:00](https://soylentnews.org/article.pl?sid=25/09/07/1713251&amp;from=rss) - [Chagas Disease, Which Can be Deadly, is Now Considered Endemic in the U.S.](https://soylentnews.org/article.pl?sid=25/09/07/1713251&amp;from=rss)
* [2025-09-08, 19:54:00](https://news.ycombinator.com/item?id=45173100) - [Introduction to Nyquist and Lisp Programming](https://manual.audacityteam.org/man/introduction_to_nyquist_and_lisp_programming.html)
* [2025-09-08, 19:39:10](https://news.ycombinator.com/item?id=45172905) - [Using Emacs Org-Mode With Databases: A getting-started guide](https://gitlab.com/ryanprior/emacs-org-data-starter)
* [2025-09-08, 16:10:00](https://soylentnews.org/article.pl?sid=25/09/07/141204&amp;from=rss) - [SpaceX Dragon Reboosts the International Space Station](https://soylentnews.org/article.pl?sid=25/09/07/141204&amp;from=rss)
* [2025-09-08, 12:55:59](https://news.ycombinator.com/item?id=45167680) - [Classic GTK1 GUI Library](https://gitlab.com/robinrowe/gtk1)
* [2025-09-08, 11:25:00](https://soylentnews.org/article.pl?sid=25/09/07/1358242&amp;from=rss) - [New China-Aligned Crew Poisons Windows Servers for SEO Fraud](https://soylentnews.org/article.pl?sid=25/09/07/1358242&amp;from=rss)
* [2025-09-08, 06:43:00](https://soylentnews.org/article.pl?sid=25/09/07/1352214&amp;from=rss) - [Trump Family&apos;s Crypto Token Just Made Them $5 Billion Richer](https://soylentnews.org/article.pl?sid=25/09/07/1352214&amp;from=rss)
* [2025-09-08, 02:00:00](https://soylentnews.org/article.pl?sid=25/09/07/0222253&amp;from=rss) - [Microsoft Shows Off its Latest Analog Optical Computer](https://soylentnews.org/article.pl?sid=25/09/07/0222253&amp;from=rss)
