# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Innovations and Advancements

* [When Jorge Luis Borges met one of the founders of AI](http://resobscura.substack.com/p/when-jorge-luis-borges-met-one-of) - This article explores a fascinating intersection of literature and artificial intelligence, imagining a conversation between Borges and AI pioneers. [Comments on Lobste.rs](https://lobste.rs/s/c2xxxg/when_jorge_luis_borges_met_one_founders_ai)

* [No-boom supersonic flights could slide through US skies soon](https://www.theregister.com/2025/05/17/faa_supersonic_law/) - Advancements in supersonic technology aim to reintroduce faster-than-sound travel without the disruptive sonic boom. [Comments on Hacker News](https://news.ycombinator.com/item?id=44013696)

* [Java at 30: The Genius Behind the Code That Changed Tech](https://thenewstack.io/java-at-30-the-genius-behind-the-code-that-changed-tech/) - A reflection on Java's 30-year legacy and its transformative impact on the tech industry. [Comments on Lobste.rs](https://lobste.rs/s/up3mkh/java_at_30_genius_behind_code_changed_tech)

* [Open Problems in Computational Geometry](https://topp.openproblem.net/) - A collection of fascinating unresolved issues in computational geometry. [Comments on Hacker News](https://news.ycombinator.com/item?id=44013181)

* [Push Ifs Up and Fors Down](https://matklad.github.io/2023/11/15/push-ifs-up-and-fors-down.html) - A programming technique to improve code organization and flow. [Comments on Hacker News](https://news.ycombinator.com/item?id=44013157)

* [Transformer neural net learns to run Conway's Game of Life just from examples](https://sidsite.com/posts/life-transformer/) - Illustrates how machine learning models can independently learn complex rules from data. [Comments on Hacker News](https://news.ycombinator.com/item?id=44013154)

## Scientific and Medical Breakthroughs

* [A US Court Just Put Ownership of CRISPR Back in Play](https://soylentnews.org/article.pl?sid=25/05/16/0227217&amp;from=rss) - A landmark decision reignites debates over the ethical and legal aspects of gene-editing technology.

* [FDA Clears First Blood Test To Help Diagnose Alzheimer's Disease](https://science.slashdot.org/story/25/05/16/2143244/fda-clears-first-blood-test-to-help-diagnose-alzheimers-disease?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Approval of a novel diagnostic blood test could revolutionize Alzheimer's treatment. [Comments on Slashdot](https://science.slashdot.org/story/25/05/16/2143244/fda-clears-first-blood-test-to-help-diagnose-alzheimers-disease?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [NASA Resurrects Voyager 1 Interstellar Spacecraft's Thrusters After 20 Years](https://science.slashdot.org/story/25/05/17/0111201/nasa-resurrects-voyager-1-interstellar-spacecrafts-thrusters-after-20-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A triumph of engineering breathes new life into humanity's farthest spacecraft. [Comments on Slashdot](https://science.slashdot.org/story/25/05/17/0111201/nasa-resurrects-voyager-1-interstellar-spacecrafts-thrusters-after-20-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Programming and Software Innovations

* [GNU Taler v1.0 released](https://www.taler.net/en/news/2025-01.html) - A milestone release for the privacy-focused digital payment system. [Comments on Lobste.rs](https://lobste.rs/s/xv7mks/gnu_taler_v1_0_released)

* [Implementing a RISC-V hypervisor](https://seiya.me/blog/riscv-hypervisor) - A deep dive into creating a hypervisor for RISC-V architecture. [Comments on Lobste.rs](https://lobste.rs/s/qzbwqv/implementing_risc_v_hypervisor)

* [JavaScript's New Superpower: Explicit Resource Management](https://v8.dev/features/explicit-resource-management) - An exploration of upcoming features in JavaScript's V8 engine enhancing resource control. [Comments on Hacker News](https://news.ycombinator.com/item?id=44012227)

## Cultural and Historical Insights

* [The Language That Never Was](https://blog.celes42.com/the_language_that_never_was.html) - A whimsical discussion of imagined linguistics. [Comments on Lobste.rs](https://lobste.rs/s/8iz3sl/language_never_was)

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

* [2025-05-17, 12:34:15](https://lobste.rs/s/c2xxxg/when_jorge_luis_borges_met_one_founders_ai) - [When Jorge Luis Borges met one of the founders of AI](http://resobscura.substack.com/p/when-jorge-luis-borges-met-one-of)
* [2025-05-17, 12:08:10](https://news.ycombinator.com/item?id=44013696) - [No-boom supersonic flights could slide through US skies soon](https://www.theregister.com/2025/05/17/faa_supersonic_law/)
* [2025-05-17, 11:54:47](https://lobste.rs/s/xv7mks/gnu_taler_v1_0_released) - [GNU Taler v1.0 released](https://www.taler.net/en/news/2025-01.html)
* [2025-05-17, 11:40:00](https://lobste.rs/s/8iz3sl/language_never_was) - [The Language That Never Was](https://blog.celes42.com/the_language_that_never_was.html)
* [2025-05-17, 11:39:35](https://lobste.rs/s/qzbwqv/implementing_risc_v_hypervisor) - [Implementing a RISC-V hypervisor](https://seiya.me/blog/riscv-hypervisor)
* [2025-05-17, 10:05:00](https://soylentnews.org/article.pl?sid=25/05/16/0227217&amp;from=rss) - [A US Court Just Put Ownership of CRISPR Back in Play](https://soylentnews.org/article.pl?sid=25/05/16/0227217&amp;from=rss)
* [2025-05-17, 10:00:00](https://science.slashdot.org/story/25/05/17/0114259/the-top-fell-off-australias-first-orbital-class-rocket-delaying-its-launch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Top Fell Off Australia&apos;s First Orbital-Class Rocket, Delaying Its Launch](https://science.slashdot.org/story/25/05/17/0114259/the-top-fell-off-australias-first-orbital-class-rocket-delaying-its-launch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-17, 09:37:46](https://news.ycombinator.com/item?id=44013181) - [Open Problems in Computational geometry](https://topp.openproblem.net/)
* [2025-05-17, 09:31:55](https://news.ycombinator.com/item?id=44013157) - [Push Ifs Up and Fors Down](https://matklad.github.io/2023/11/15/push-ifs-up-and-fors-down.html)
* [2025-05-17, 09:31:14](https://news.ycombinator.com/item?id=44013154) - [Transformer neural net learns to run Conway&apos;s Game of Life just from examples](https://sidsite.com/posts/life-transformer/)
* [2025-05-17, 08:52:42](https://lobste.rs/s/up3mkh/java_at_30_genius_behind_code_changed_tech) - [Java at 30: The Genius Behind the Code That Changed Tech](https://thenewstack.io/java-at-30-the-genius-behind-the-code-that-changed-tech/)
* [2025-05-17, 08:32:55](https://news.ycombinator.com/item?id=44012915) - [You do not need NixOS on the desktop](https://aruarian.dance/blog/you-do-not-need-nixos/)
* [2025-05-17, 07:46:29](https://news.ycombinator.com/item?id=44012729) - [Implementing a RISC-V Hypervisor](https://seiya.me/blog/riscv-hypervisor)
* [2025-05-17, 07:19:55](https://news.ycombinator.com/item?id=44012615) - [Catalog of Novel Operating Systems](https://github.com/prathyvsh/os-catalog)
* [2025-05-17, 07:00:00](https://science.slashdot.org/story/25/05/17/0111201/nasa-resurrects-voyager-1-interstellar-spacecrafts-thrusters-after-20-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Resurrects Voyager 1 Interstellar Spacecraft&apos;s Thrusters After 20 Years](https://science.slashdot.org/story/25/05/17/0111201/nasa-resurrects-voyager-1-interstellar-spacecrafts-thrusters-after-20-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-17, 05:23:20](https://news.ycombinator.com/item?id=44012227) - [JavaScript&apos;s New Superpower: Explicit Resource Management](https://v8.dev/features/explicit-resource-management)
* [2025-05-17, 05:15:00](https://soylentnews.org/article.pl?sid=25/05/16/0218214&amp;from=rss) - [Bluetooth 6.1 Enhances Privacy With Randomized RPA Timing](https://soylentnews.org/article.pl?sid=25/05/16/0218214&amp;from=rss)
* [2025-05-17, 03:30:00](https://science.slashdot.org/story/25/05/16/2143244/fda-clears-first-blood-test-to-help-diagnose-alzheimers-disease?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FDA Clears First Blood Test To Help Diagnose Alzheimer&apos;s Disease](https://science.slashdot.org/story/25/05/16/2143244/fda-clears-first-blood-test-to-help-diagnose-alzheimers-disease?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-17, 03:09:34](https://lobste.rs/s/bsv2g8/mutexes_are_faster_than_spinlocks) - [Mutexes Are Faster Than Spinlocks](https://matklad.github.io/2020/01/04/mutexes-are-faster-than-spinlocks.html)
* [2025-05-17, 02:50:15](https://news.ycombinator.com/item?id=44011669) - [A kernel developer plays with Home Assistant](https://lwn.net/SubscriberLink/1017720/7155ecb9602e9ef2/)
* [2025-05-17, 02:46:06](https://lobste.rs/s/836dy7/don_t_use_iso_iec_14977_extended_backus) - [Don’t Use ISO/IEC 14977 Extended Backus-Naur Form (EBNF) (2019, 2023)](https://dwheeler.com/essays/dont-use-iso-14977-ebnf.html)
* [2025-05-17, 02:39:12](https://lobste.rs/s/sw48u6/my_favourite_fonts_use_with_latex_2022) - [My favourite fonts to use with LaTeX (2022)](https://www.lfe.pt/latex/fonts/typography/2022/11/21/latex-fonts-part1.html)
* [2025-05-17, 02:37:06](https://lobste.rs/s/z8jvte/static_types_are_for_perfectionists) - [Static types are for perfectionists](https://mmapped.blog/posts/38-static-types-perfectionism)
* [2025-05-17, 02:16:53](https://lobste.rs/s/dyw9in/using_unwrap_rust_is_okay) - [Using unwrap() in Rust is Okay](https://burntsushi.net/unwrap/)
* [2025-05-17, 02:10:36](https://news.ycombinator.com/item?id=44011515) - [XTool – Cross-platform Xcode replacement](https://github.com/xtool-org/xtool)
* [2025-05-17, 02:02:14](https://news.ycombinator.com/item?id=44011489) - [Wow@Home – Network of Amateur Radio Telescopes](https://phl.upr.edu/wow/outreach)
* [2025-05-17, 01:35:00](https://it.slashdot.org/story/25/05/17/0135210/microsofts-command-palette-is-a-powerful-launcher-for-apps-search?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft&apos;s Command Palette is a Powerful Launcher For Apps, Search](https://it.slashdot.org/story/25/05/17/0135210/microsofts-command-palette-is-a-powerful-launcher-for-apps-search?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-17, 01:09:38](https://news.ycombinator.com/item?id=44011254) - [Show HN: Merliot – plugging physical devices into LLMs](https://github.com/merliot/hub)
* [2025-05-17, 00:50:00](https://slashdot.org/story/25/05/16/2138230/walmart-prepares-for-a-future-where-ai-shops-for-consumers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Walmart Prepares for a Future Where AI Shops for Consumers](https://slashdot.org/story/25/05/16/2138230/walmart-prepares-for-a-future-where-ai-shops-for-consumers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-17, 00:31:00](https://soylentnews.org/article.pl?sid=25/05/16/0212240&amp;from=rss) - [Nvidia Reportedly Raises GPU Prices by 10-15% as Tariffs and TSMC Price Hikes Filter Down](https://soylentnews.org/article.pl?sid=25/05/16/0212240&amp;from=rss)
* [2025-05-17, 00:10:00](https://hardware.slashdot.org/story/25/05/16/2133225/uk-needs-more-nuclear-to-power-ai-says-amazon-boss?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Needs More Nuclear To Power AI, Says Amazon Boss](https://hardware.slashdot.org/story/25/05/16/2133225/uk-needs-more-nuclear-to-power-ai-says-amazon-boss?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-16, 23:30:00](https://hardware.slashdot.org/story/25/05/16/2122201/linux-swap-table-code-shows-the-potential-for-huge-performance-gains?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linux Swap Table Code Shows The Potential For Huge Performance Gains](https://hardware.slashdot.org/story/25/05/16/2122201/linux-swap-table-code-shows-the-potential-for-huge-performance-gains?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-16, 23:25:15](https://lobste.rs/s/pwkopz/erlang_red_visual_low_code_flow_based) - [erlang-red: Visual low-code flow-based programming environment for Erlang, inspired by Node-RED](https://github.com/gorenje/erlang-red)
* [2025-05-16, 22:50:00](https://tech.slashdot.org/story/25/05/16/2111259/apples-new-carplay-ultra-wont-fix-the-biggest-problem-of-phone-connected-cars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple&apos;s New CarPlay &apos;Ultra&apos; Won&apos;t Fix the Biggest Problem of Phone-Connected Cars](https://tech.slashdot.org/story/25/05/16/2111259/apples-new-carplay-ultra-wont-fix-the-biggest-problem-of-phone-connected-cars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-16, 22:10:00](https://science.slashdot.org/story/25/05/16/213210/mit-asks-arxiv-to-take-down-preprint-paper-on-ai-and-scientific-discovery?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [MIT Asks arXiv To Take Down Preprint Paper On AI and Scientific Discovery](https://science.slashdot.org/story/25/05/16/213210/mit-asks-arxiv-to-take-down-preprint-paper-on-ai-and-scientific-discovery?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-16, 21:30:00](https://developers.slashdot.org/story/25/05/16/2052243/openai-launches-codex-an-ai-coding-agent-in-chatgpt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Launches Codex, an AI Coding Agent, In ChatGPT](https://developers.slashdot.org/story/25/05/16/2052243/openai-launches-codex-an-ai-coding-agent-in-chatgpt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-16, 21:10:12](https://news.ycombinator.com/item?id=44009848) - [Getting AI to write good SQL](https://cloud.google.com/blog/products/databases/techniques-for-improving-text-to-sql)
* [2025-05-16, 21:05:10](https://lobste.rs/s/glcdny/ledger_postgresql_is_fast) - [A Ledger In PostgreSQL Is Fast](https://www.pgrs.net/2025/05/16/pgledger-in-postgresql-is-fast/)
* [2025-05-16, 20:50:00](https://yro.slashdot.org/story/25/05/16/2047234/meta-argues-enshittification-isnt-real?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Argues Enshittification Isn&apos;t Real](https://yro.slashdot.org/story/25/05/16/2047234/meta-argues-enshittification-isnt-real?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-16, 20:30:28](https://lobste.rs/s/qwmcoa/senior_devs_aren_t_just_faster_they_can) - [Senior devs aren&apos;t just faster, they can dodge problems juniors are forced to solve](https://boydkane.com/essays/experts)
* [2025-05-16, 20:20:20](https://news.ycombinator.com/item?id=44009464) - [ClojureScript 1.12.42](https://clojurescript.org/news/2025-05-16-release)
* [2025-05-16, 20:02:00](https://mobile.slashdot.org/story/25/05/16/194255/verizon-secures-fcc-approval-for-96-billion-frontier-acquisition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Verizon Secures FCC Approval for $9.6 Billion Frontier Acquisition](https://mobile.slashdot.org/story/25/05/16/194255/verizon-secures-fcc-approval-for-96-billion-frontier-acquisition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-16, 19:45:00](https://soylentnews.org/article.pl?sid=25/05/15/0827220&amp;from=rss) - [Scientists Find Lead Really Can Be Turned Into Gold (With Help From The LHC)](https://soylentnews.org/article.pl?sid=25/05/15/0827220&amp;from=rss)
* [2025-05-16, 19:22:00](https://entertainment.slashdot.org/story/25/05/16/1855254/charter-to-buy-cox-for-219-billion-amid-escalating-war-with-wireless?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Charter To Buy Cox For $21.9 Billion Amid Escalating War With Wireless](https://entertainment.slashdot.org/story/25/05/16/1855254/charter-to-buy-cox-for-219-billion-amid-escalating-war-with-wireless?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-16, 19:09:55](https://news.ycombinator.com/item?id=44008843) - [Thoughts on thinking](https://dcurt.is/thinking)
* [2025-05-16, 18:42:26](https://lobste.rs/s/wnrum7/new_life_hack_using_llms_generate) - [New Life Hack: Using LLMs to Generate Constraint Solver Programs for Personal Logistics Tasks](https://emschwartz.me/new-life-hack-using-llms-to-generate-constraint-solver-programs-for-personal-logistics-tasks/)
* [2025-05-16, 18:42:00](https://science.slashdot.org/story/25/05/16/1728214/covid-19-spikes-in-hong-kong-singapore-as-new-wave-spreads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Covid-19 Spikes in Hong Kong, Singapore as New Wave Spreads](https://science.slashdot.org/story/25/05/16/1728214/covid-19-spikes-in-hong-kong-singapore-as-new-wave-spreads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-16, 18:38:56](https://lobste.rs/s/m2y5jx/what_problems_are_truly_technical_not) - [What Problems are Truly Technical, not Social?](https://lobste.rs/s/m2y5jx/what_problems_are_truly_technical_not)
* [2025-05-16, 17:50:00](https://news.slashdot.org/story/25/05/16/1746241/data-shows-boys-and-young-men-are-falling-behind?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Data Shows Boys and Young Men Are Falling Behind](https://news.slashdot.org/story/25/05/16/1746241/data-shows-boys-and-young-men-are-falling-behind?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-16, 15:54:46](https://lobste.rs/s/ypdu8r/gnu_parallel_examples) - [GNU Parallel Examples](https://www.gnu.org/software/parallel/parallel_examples.html)
* [2025-05-16, 15:45:30](https://news.ycombinator.com/item?id=44006824) - [X X^t can be faster](https://arxiv.org/abs/2505.09814)
* [2025-05-16, 15:09:25](https://news.ycombinator.com/item?id=44006426) - [MIT asks arXiv to withdraw preprint of paper on AI and scientific discovery](https://economics.mit.edu/news/assuring-accurate-research-record)
* [2025-05-16, 15:05:32](https://news.ycombinator.com/item?id=44006381) - [I&apos;m Peter Roberts, immigration attorney, who does work for YC and startups. AMA](https://news.ycombinator.com/item?id=44006381)
* [2025-05-16, 15:02:02](https://news.ycombinator.com/item?id=44006345) - [A Research Preview of Codex](https://openai.com/index/introducing-codex/)
* [2025-05-16, 15:01:00](https://soylentnews.org/article.pl?sid=25/05/14/2259213&amp;from=rss) - [Why Bell Labs Worked](https://soylentnews.org/article.pl?sid=25/05/14/2259213&amp;from=rss)
* [2025-05-16, 14:55:22](https://lobste.rs/s/7hqd1o/deep_dive_on_new_combinators) - [Deep Dive on New Combinators](https://github.com/codereport/meeting-notes/blob/cb55ebad66137deade7213b66aeec0b9af7bd7e6/2022-03-12-Deep-Dive-on-New-Combinators.md#combinator-introductions)
* [2025-05-16, 14:54:13](https://news.ycombinator.com/item?id=44006231) - [Show HN: Visual flow-based programming for Erlang, inspired by Node-RED](https://github.com/gorenje/erlang-red)
* [2025-05-16, 13:53:16](https://lobste.rs/s/ipfzdh/evolution_rust_compiler_errors) - [Evolution of Rust compiler errors](https://kobzol.github.io/rust/rustc/2025/05/16/evolution-of-rustc-errors.html)
* [2025-05-16, 13:24:31](https://lobste.rs/s/plkdy5/classical_single_user_computers_were) - [Classical \&quot;Single user computers\&quot; were a flawed or at least limited idea](https://utcc.utoronto.ca/~cks/space/blog/tech/SingleUserComputerFlawed)
* [2025-05-16, 11:19:11](https://lobste.rs/s/tpge66/ocaml_web_development_essential_tools) - [OCaml Web Development: Essential Tools and Libraries in 2025](https://tarides.com/blog/2025-05-15-ocaml-web-development-essential-tools-and-libraries-in-2025/)
* [2025-05-16, 10:29:42](https://lobste.rs/s/h1rwdt/jetrelay_high_performance_atproto_relay) - [Jetrelay: A high-performance ATproto relay in 500 LOC](https://www.asayers.com/jetrelay/)
* [2025-05-16, 10:20:00](https://soylentnews.org/article.pl?sid=25/05/15/0224241&amp;from=rss) - [A Chemical in Plastics is Tied to Heart Disease Deaths](https://soylentnews.org/article.pl?sid=25/05/15/0224241&amp;from=rss)
* [2025-05-16, 08:47:45](https://lobste.rs/s/pdqvn1/coherent_european_non_us_cloud_strategy) - [A coherent European/non-US cloud strategy: building railroads for the cloud economy](https://berthub.eu/articles/posts/a-coherent-non-us-cloud-strategy/)
* [2025-05-16, 05:32:00](https://soylentnews.org/article.pl?sid=25/05/15/0157228&amp;from=rss) - [FTC Pushes The Enforcement Of Its &apos;Click-To-Cancel&apos; Rule Back To July](https://soylentnews.org/article.pl?sid=25/05/15/0157228&amp;from=rss)
* [2025-05-16, 03:57:28](https://lobste.rs/s/bmcr63/teal_statically_typed_dialect_lua) - [Teal: a statically-typed dialect of Lua](https://teal-language.org/)
* [2025-05-16, 00:45:00](https://soylentnews.org/article.pl?sid=25/05/15/0147219&amp;from=rss) - [When Your Favorite Song Plays, Your Brain ‘Physically Embodies’ Music](https://soylentnews.org/article.pl?sid=25/05/15/0147219&amp;from=rss)
* [2025-05-15, 20:00:00](https://soylentnews.org/article.pl?sid=25/05/14/0440229&amp;from=rss) - [\&quot;Prompt Engineering\&quot; Is No Longer A Job, But A Skill](https://soylentnews.org/article.pl?sid=25/05/14/0440229&amp;from=rss)
* [2025-05-15, 18:01:12](https://lobste.rs/s/c16bc0/announcing_rust_1_87_0_ten_years_rust) - [Announcing Rust 1.87.0 and ten years of Rust](https://blog.rust-lang.org/2025/05/15/Rust-1.87.0/)
* [2025-05-15, 17:14:28](https://news.ycombinator.com/item?id=43997135) - [Popcorn: Run Elixir in WASM](https://popcorn.swmansion.com/)
* [2025-05-15, 15:16:00](https://soylentnews.org/article.pl?sid=25/05/14/1148216&amp;from=rss) - [&apos;World&apos;s First&apos; AMD GPU Driven Via USB3 - Tiny Corp Tests EGPUs on Apple Silicon, Linux and Windows](https://soylentnews.org/article.pl?sid=25/05/14/1148216&amp;from=rss)
* [2025-05-15, 13:48:02](https://lobste.rs/s/tky59n/my_2025_high_end_linux_pc) - [My 2025 high-end Linux PC](https://michael.stapelberg.ch/posts/2025-05-15-my-2025-high-end-linux-pc/)
* [2025-05-15, 12:28:16](https://news.ycombinator.com/item?id=43994306) - [Oracle VM VirtualBox – VM Escape via VGA Device](https://github.com/google/security-research/security/advisories/GHSA-qx2m-rcpc-v43v)
* [2025-05-15, 10:59:09](https://news.ycombinator.com/item?id=43993711) - [Japan&apos;s IC cards are weird and wonderful](https://aruarian.dance/blog/japan-ic-cards/)
* [2025-05-15, 10:30:00](https://soylentnews.org/article.pl?sid=25/05/14/1143244&amp;from=rss) - [A New Lazarus Arises – for the Fourth Time – for Pascal Fans](https://soylentnews.org/article.pl?sid=25/05/14/1143244&amp;from=rss)
* [2025-05-15, 05:47:00](https://soylentnews.org/politics/article.pl?sid=25/05/14/1136218&amp;from=rss) - [Copyright Office Thinks AI Companies Sometimes Stole Content](https://soylentnews.org/politics/article.pl?sid=25/05/14/1136218&amp;from=rss)
* [2025-05-15, 01:01:00](https://soylentnews.org/article.pl?sid=25/05/14/0413235&amp;from=rss) - [New Way To Pull Uranium From Water Can Help China&apos;s Nuclear Power Push](https://soylentnews.org/article.pl?sid=25/05/14/0413235&amp;from=rss)
* [2025-05-14, 20:13:00](https://soylentnews.org/article.pl?sid=25/05/14/0020240&amp;from=rss) - [Ask Soylent: Insert Code Here](https://soylentnews.org/article.pl?sid=25/05/14/0020240&amp;from=rss)
* [2025-05-14, 16:11:08](https://news.ycombinator.com/item?id=43986229) - [IM-2&apos;s Imperfect Landing Due to Altimeter Interference](https://spacepolicyonline.com/news/im-2s-imperfect-landing-due-to-altimeter-interference-south-pole-lighting-conditions/)
* [2025-05-14, 15:30:00](https://soylentnews.org/article.pl?sid=25/05/13/1445228&amp;from=rss) - [Google Pays $1.375 Billion to Texas Over Unauthorized Tracking and Biometric Data Collection](https://soylentnews.org/article.pl?sid=25/05/13/1445228&amp;from=rss)
* [2025-05-14, 14:17:57](https://news.ycombinator.com/item?id=43984860) - [Coding agent in 94 lines of Ruby](https://radanskoric.com/articles/coding-agent-in-ruby)
* [2025-05-14, 10:37:00](https://soylentnews.org/article.pl?sid=25/05/13/0245205&amp;from=rss) - [You Think Ransomware is Bad Now? Wait Until It Infects CPUs](https://soylentnews.org/article.pl?sid=25/05/13/0245205&amp;from=rss)
* [2025-05-14, 07:45:00](https://news.ycombinator.com/item?id=43981971) - [New high-quality hash measures 71GB/s on M4](https://github.com/Nicoshev/rapidhash)
* [2025-05-14, 05:51:00](https://soylentnews.org/article.pl?sid=25/05/13/0234223&amp;from=rss) - [The Viking Age is Undergoing a Revisionist Transformation](https://soylentnews.org/article.pl?sid=25/05/13/0234223&amp;from=rss)
* [2025-05-14, 05:44:32](https://news.ycombinator.com/item?id=43981198) - [How can traditional British TV survive the US streaming giants](https://www.bbc.co.uk/news/articles/cx2enydkew3o)
* [2025-05-14, 01:04:00](https://soylentnews.org/article.pl?sid=25/05/13/020213&amp;from=rss) - [Nvidia NeMo Microservices to Embed AI Agents in Workflows](https://soylentnews.org/article.pl?sid=25/05/13/020213&amp;from=rss)
* [2025-05-13, 21:24:36](https://news.ycombinator.com/item?id=43977890) - [Why Moderna Merged Its Tech and HR Departments](https://www.wsj.com/articles/why-moderna-merged-its-tech-and-hr-departments-95318c2a)
* [2025-05-13, 20:19:00](https://soylentnews.org/article.pl?sid=25/05/13/0140243&amp;from=rss) - [Wikipedia Launches Legal Challenge Against UK Government](https://soylentnews.org/article.pl?sid=25/05/13/0140243&amp;from=rss)
* [2025-05-13, 15:35:00](https://soylentnews.org/article.pl?sid=25/05/13/0133228&amp;from=rss) - [Charting the Future of Biotechnology and AI](https://soylentnews.org/article.pl?sid=25/05/13/0133228&amp;from=rss)
* [2025-05-13, 13:22:36](https://news.ycombinator.com/item?id=43972669) - [Rustls Server-Side Performance](https://www.memorysafety.org/blog/rustls-server-perf/)
* [2025-05-13, 12:47:04](https://news.ycombinator.com/item?id=43972334) - [MCP: An in-depth introduction](https://www.speakeasy.com/mcp/mcp-tutorial)
* [2025-05-13, 10:46:00](https://soylentnews.org/article.pl?sid=25/05/12/1123248&amp;from=rss) - [75 Zero-Days Exploited in 2024 With Focus on Enterprise Tech](https://soylentnews.org/article.pl?sid=25/05/12/1123248&amp;from=rss)
* [2025-05-13, 06:01:00](https://soylentnews.org/article.pl?sid=25/05/12/1114249&amp;from=rss) - [People Who Use AI at Work Are Perceived by Colleagues as Lazier and Less Competent, Study Finds](https://soylentnews.org/article.pl?sid=25/05/12/1114249&amp;from=rss)
* [2025-05-13, 01:16:00](https://soylentnews.org/article.pl?sid=25/05/11/1440209&amp;from=rss) - [China&apos;s Daring Cloud Sample Mission to Venus](https://soylentnews.org/article.pl?sid=25/05/11/1440209&amp;from=rss)
