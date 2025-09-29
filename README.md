# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Emerging Technologies

* [AI is writing 90% of the code](https://lucumr.pocoo.org/2025/9/29/90-percent/) ([comments](https://lobste.rs/s/ayncvk/ai_is_writing_90_code))

* [Does AI Get Bored?](https://timkellogg.me/blog/2025/09/27/boredom) ([comments](https://lobste.rs/s/f5xxtl/does_ai_get_bored))

* [Physicists Nearly Double Speed of Superconducting Qubit Readout in Quantum Computers](https://soylentnews.org/article.pl?sid=25/09/28/008233&amp;from=rss) ([comments](https://lobste.rs/s/f5xxtl/does_ai_get_bored))

* [The AI coding trap](https://chrisloy.dev/post/2025/09/28/the-ai-coding-trap) ([comments](https://news.ycombinator.com/item?id=45405177))

* [AI-Powered Stan Lee Hologram Debuts at LA Comic Con](https://entertainment.slashdot.org/story/25/09/29/041251/ai-powered-stan-lee-hologram-debuts-at-la-comic-con?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=45405177))

## PostgreSQL Developments

* [What&apos;s New in PostgreSQL 18 - a Developer&apos;s Perspective](https://www.bytebase.com/blog/what-is-new-in-postgres-18-for-developer/) ([comments](https://lobste.rs/s/wf4bnp/what_s_new_postgresql_18_developer_s))

* [Tuning async IO in PostgreSQL 18](https://vondra.me/posts/tuning-aio-in-postgresql-18/) ([comments](https://news.ycombinator.com/item?id=45412494))

* [dbos: Durable Workflow Orchestration with Go and Postgresql](https://github.com/dbos-inc/dbos-transact-golang) ([comments](https://lobste.rs/s/x7fe8h/dbos_durable_workflow_orchestration))

## Unique Perspectives on Technology

* [Spent an hour or so working with claude to write a minimal static web server in COBOL](https://github.com/jmsdnns/webbol) ([comments](https://lobste.rs/s/sieihh/spent_hour_so_working_with_claude_write))

* [Zero ASIC releases Wildebeest, the highest performance FPGA synthesis tool](https://www.zeroasic.com/blog/wildebeest-launch) ([comments](https://news.ycombinator.com/item?id=45410155))

* [Just Let Me Select Text](https://aartaka.me/select-text.html) ([comments](https://lobste.rs/s/olfuo0/just_let_me_select_text))

## Societal and Employment Challenges

* [Professor Warns CS Graduates are Struggling to Find Jobs](https://developers.slashdot.org/story/25/09/29/029201/professor-warns-cs-graduates-are-struggling-to-find-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=45412494))

* [Culture Magazine Urges Professional Writers to Resist AI, Boycott and Stigmatize AI Slop](https://news.slashdot.org/story/25/09/29/0129218/culture-magazine-urges-professional-writers-to-resist-ai-boycott-and-stigmatize-ai-slop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=45405177))

* [Google just erased 7 years of our political history](https://www.thebriefing.ie/google-just-erased-7-years-of-our-political-history/) ([comments](https://news.ycombinator.com/item?id=45411332))

## Innovative Projects and Tech Tools

* [Optimizing a 6502 image decoder, from 70 minutes to 1 minute](https://www.colino.net/wordpress/en/archives/2025/09/28/optimizing-a-6502-image-decoder-from-70-minutes-to-1-minute/) ([comments](https://news.ycombinator.com/item?id=45412022))

* [Show HN: Toolbrew – Free little tools without signups or ads](https://toolbrew.co/) ([comments](https://news.ycombinator.com/item?id=45404667))

* [Play snake in the URL address bar](https://demian.ferrei.ro/snake/) ([comments](https://news.ycombinator.com/item?id=45408021))

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

* [2025-09-29, 12:38:40](https://lobste.rs/s/wf4bnp/what_s_new_postgresql_18_developer_s) - [What&apos;s New in PostgreSQL 18 - a Developer&apos;s Perspective](https://www.bytebase.com/blog/what-is-new-in-postgres-18-for-developer/)
* [2025-09-29, 12:36:02](https://lobste.rs/s/oiiocr/go_proposal_architecture_specific_simd) - [Go Proposal: architecture-specific SIMD intrinsics](https://github.com/golang/go/issues/73787)
* [2025-09-29, 12:33:44](https://lobste.rs/s/x7fe8h/dbos_durable_workflow_orchestration) - [dbos: Durable Workflow Orchestration with Go and Postgresql](https://github.com/dbos-inc/dbos-transact-golang)
* [2025-09-29, 11:55:52](https://news.ycombinator.com/item?id=45412592) - [To AI or Not to AI](https://antropia.studio/blog/to-ai-or-not-to-ai/)
* [2025-09-29, 11:42:04](https://news.ycombinator.com/item?id=45412494) - [Tuning async IO in PostgreSQL 18](https://vondra.me/posts/tuning-aio-in-postgresql-18/)
* [2025-09-29, 11:35:01](https://lobste.rs/s/ayncvk/ai_is_writing_90_code) - [AI is writing 90% of the code](https://lucumr.pocoo.org/2025/9/29/90-percent/)
* [2025-09-29, 11:34:00](https://developers.slashdot.org/story/25/09/29/029201/professor-warns-cs-graduates-are-struggling-to-find-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Professor Warns CS Graduates are Struggling to Find Jobs](https://developers.slashdot.org/story/25/09/29/029201/professor-warns-cs-graduates-are-struggling-to-find-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-29, 11:30:32](https://lobste.rs/s/sieihh/spent_hour_so_working_with_claude_write) - [Spent an hour or so working with claude to write a minimal static web server in COBOL](https://github.com/jmsdnns/webbol)
* [2025-09-29, 11:28:06](https://news.ycombinator.com/item?id=45412419) - [What if I don&apos;t want videos of my hobby time available to the world?](https://neilzone.co.uk/2025/09/what-if-i-dont-want-videos-of-my-hobby-time-available-to-the-entire-world/)
* [2025-09-29, 10:43:45](https://lobste.rs/s/f5xxtl/does_ai_get_bored) - [Does AI Get Bored?](https://timkellogg.me/blog/2025/09/27/boredom)
* [2025-09-29, 10:26:39](https://news.ycombinator.com/item?id=45412098) - [DeepSeek-v3.2-Exp](https://github.com/deepseek-ai/DeepSeek-V3.2-Exp)
* [2025-09-29, 10:21:23](https://news.ycombinator.com/item?id=45412075) - [Avalanche Studios NYC Retrospective – An Ambitious Company Ruined](https://probablydance.com/2025/09/28/avalanche-studios-nyc-retrospective-an-ambitious-company-ruined-by-bad-development-practices/)
* [2025-09-29, 10:17:00](https://soylentnews.org/article.pl?sid=25/09/28/008233&amp;from=rss) - [Physicists Nearly Double Speed of Superconducting Qubit Readout in Quantum Computers](https://soylentnews.org/article.pl?sid=25/09/28/008233&amp;from=rss)
* [2025-09-29, 10:11:20](https://news.ycombinator.com/item?id=45412022) - [Optimizing a 6502 image decoder, from 70 minutes to 1 minute](https://www.colino.net/wordpress/en/archives/2025/09/28/optimizing-a-6502-image-decoder-from-70-minutes-to-1-minute/)
* [2025-09-29, 09:46:08](https://lobste.rs/s/pvyfsg/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/pvyfsg/what_are_you_doing_this_week)
* [2025-09-29, 07:57:39](https://news.ycombinator.com/item?id=45411332) - [Google just erased 7 years of our political history](https://www.thebriefing.ie/google-just-erased-7-years-of-our-political-history/)
* [2025-09-29, 07:44:00](https://news.slashdot.org/story/25/09/29/0446226/ladybird-browser-gains-cloudflare-support-to-challenge-the-status-quo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ladybird Browser Gains Cloudflare Support to Challenge the Status Quo](https://news.slashdot.org/story/25/09/29/0446226/ladybird-browser-gains-cloudflare-support-to-challenge-the-status-quo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-29, 06:42:58](https://lobste.rs/s/x1sdu5/f_droid_google_s_developer_registration) - [F-Droid and Google&apos;s Developer Registration Decree](https://f-droid.org/2025/09/29/google-developer-registration-decree.html)
* [2025-09-29, 06:41:27](https://news.ycombinator.com/item?id=45410940) - [What is \&quot;good taste\&quot; in software engineering?](https://www.seangoedecke.com/taste/)
* [2025-09-29, 05:59:35](https://lobste.rs/s/jbaxru/comparing_rust_carbon) - [Comparing Rust to Carbon](https://lwn.net/Articles/1036912/)
* [2025-09-29, 05:35:00](https://soylentnews.org/article.pl?sid=25/09/28/006252&amp;from=rss) - [The Cyber Vulnerabilities Lurking in CRM Systems](https://soylentnews.org/article.pl?sid=25/09/28/006252&amp;from=rss)
* [2025-09-29, 04:59:00](https://entertainment.slashdot.org/story/25/09/29/041251/ai-powered-stan-lee-hologram-debuts-at-la-comic-con?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI-Powered Stan Lee Hologram Debuts at LA Comic Con](https://entertainment.slashdot.org/story/25/09/29/041251/ai-powered-stan-lee-hologram-debuts-at-la-comic-con?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-29, 04:47:47](https://lobste.rs/s/ogs7d1/slop_machines_on_interaction_between) - [Slop Machines: on the interaction between feed recommender systems and genai](https://notes.hella.cheap/slop-machines.html)
* [2025-09-29, 04:07:21](https://lobste.rs/s/olfuo0/just_let_me_select_text) - [Just Let Me Select Text](https://aartaka.me/select-text.html)
* [2025-09-29, 03:45:40](https://news.ycombinator.com/item?id=45410155) - [Zero ASIC releases Wildebeest, the highest performance FPGA synthesis tool](https://www.zeroasic.com/blog/wildebeest-launch)
* [2025-09-29, 03:05:00](https://science.slashdot.org/story/25/09/29/033214/some-athletes-are-trying-the-psychedelic-ibogaine-to-treat-brain-injuries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Some Athletes are Trying the Psychedelic Ibogaine to Treat Brain Injuries](https://science.slashdot.org/story/25/09/29/033214/some-athletes-are-trying-the-psychedelic-ibogaine-to-treat-brain-injuries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-29, 02:10:20](https://news.ycombinator.com/item?id=45409794) - [F-Droid and Google’s developer registration decree](https://f-droid.org/2025/09/29/google-developer-registration-decree.html)
* [2025-09-29, 01:32:00](https://news.slashdot.org/story/25/09/29/0129218/culture-magazine-urges-professional-writers-to-resist-ai-boycott-and-stigmatize-ai-slop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Culture Magazine Urges Professional Writers to Resist AI, Boycott and Stigmatize AI Slop](https://news.slashdot.org/story/25/09/29/0129218/culture-magazine-urges-professional-writers-to-resist-ai-boycott-and-stigmatize-ai-slop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-29, 01:18:14](https://news.ycombinator.com/item?id=45409552) - [Primer on FedEx&apos;s Distribution Network (2024)](https://ontheseams.substack.com/p/a-brief-primer-on-fedexs-distribution)
* [2025-09-29, 01:12:45](https://news.ycombinator.com/item?id=45409526) - [Cleaning house in Nx monorepo, how i removed unused deps safely](https://johnjames.blog/posts/cleaning-house-in-nx-monorepo-how-i-removed-120-unused-deps-safely)
* [2025-09-29, 00:49:00](https://soylentnews.org/article.pl?sid=25/09/27/141202&amp;from=rss) - [This Experimental Computer Chip Reuses Energy](https://soylentnews.org/article.pl?sid=25/09/27/141202&amp;from=rss)
* [2025-09-29, 00:21:01](https://news.ycombinator.com/item?id=45409258) - [Lockless MPSC/SPMC/MPMC queues are not queues](https://alexsaveau.dev/blog/opinions/performance/lockness/lockless-queues-are-not-queues)
* [2025-09-28, 23:59:00](https://science.slashdot.org/story/25/09/28/2356244/wall-street-journal-decries-the-rise-of-conspiracy-physics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wall Street Journal Decries &apos;The Rise of Conspiracy Physics&apos;](https://science.slashdot.org/story/25/09/28/2356244/wall-street-journal-decries-the-rise-of-conspiracy-physics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-28, 23:22:35](https://lobste.rs/s/trzzcd/c_modules_globally_unique_module_names) - [In C++ modules globally unique module names seem to be unavoidable](https://nibblestew.blogspot.com/2025/09/in-c-modules-globally-unique-module.html)
* [2025-09-28, 23:02:48](https://lobste.rs/s/b4zqs1/risc_v_conditional_moves) - [RISC-V Conditional Moves](https://www.corsix.org/content/riscv-conditional-moves)
* [2025-09-28, 22:48:00](https://yro.slashdot.org/story/25/09/28/2156240/switzerland-approves-digital-id-in-narrow-vote-uk-proposes-one-too?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Switzerland Approves Digital ID In Narrow Vote, UK Proposes One Too](https://yro.slashdot.org/story/25/09/28/2156240/switzerland-approves-digital-id-in-narrow-vote-uk-proposes-one-too?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-28, 22:20:59](https://news.ycombinator.com/item?id=45408617) - [Go ahead, write the “stupid” code](https://spikepuppet.io/posts/write-the-stupid-code/)
* [2025-09-28, 21:50:45](https://lobste.rs/s/dkjswm/stupid_jj_tricks) - [stupid jj tricks](https://andre.arko.net/2025/09/28/stupid-jj-tricks/)
* [2025-09-28, 21:08:15](https://news.ycombinator.com/item?id=45408021) - [Play snake in the URL address bar](https://demian.ferrei.ro/snake/)
* [2025-09-28, 21:00:07](https://news.ycombinator.com/item?id=45407951) - [Roe (YC W24) Is Hiring](https://news.ycombinator.com/item?id=45407951)
* [2025-09-28, 20:42:55](https://lobste.rs/s/cqlfab/supply_chain_security_for_0_001_why_it_won_t) - [Supply chain security for the 0.001% (and why it won’t catch on)](https://blog.viraptor.info/post/supply-chain-security-for-the-0001-and-why-it-wont-catch-on)
* [2025-09-28, 20:37:00](https://tech.slashdot.org/story/25/09/28/1958242/tim-berners-lee-urges-new-open-source-interoperable-data-standard-protections-from-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tim Berners-Lee Urges New Open-Source Interoperable Data Standard, Protections from AI](https://tech.slashdot.org/story/25/09/28/1958242/tim-berners-lee-urges-new-open-source-interoperable-data-standard-protections-from-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-28, 20:01:00](https://soylentnews.org/article.pl?sid=25/09/27/1352245&amp;from=rss) - [US Uncovers 100,000 SIM Cards That Could Have “Shut Down” NYC Cell Network](https://soylentnews.org/article.pl?sid=25/09/27/1352245&amp;from=rss)
* [2025-09-28, 19:58:30](https://lobste.rs/s/ijemcw/tag_suggestion_plan9) - [Tag suggestion: plan9](https://lobste.rs/s/ijemcw/tag_suggestion_plan9)
* [2025-09-28, 19:37:00](https://news.slashdot.org/story/25/09/28/1934254/facebook-and-instagram-offer-uk-users-an-ad-stopping-subscription-fee?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Facebook and Instagram Offer UK Users an Ad-Stopping Subscription Fee](https://news.slashdot.org/story/25/09/28/1934254/facebook-and-instagram-offer-uk-users-an-ad-stopping-subscription-fee?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-28, 18:26:00](https://developers.slashdot.org/story/25/09/28/1823244/will-ai-mean-bring-an-end-to-top-programming-language-rankings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Will AI Mean Bring an End to Top Programming Language Rankings?](https://developers.slashdot.org/story/25/09/28/1823244/will-ai-mean-bring-an-end-to-top-programming-language-rankings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-28, 18:09:43](https://lobste.rs/s/vhsrhh/nes_super_mario_bros_arbitrary_code) - [NES Super Mario Bros. \&quot;arbitrary code execution\&quot;](https://tasvideos.org/8991S)
* [2025-09-28, 17:23:21](https://news.ycombinator.com/item?id=45406109) - [Bayesian Data Analysis, Third edition (2013) [pdf]](https://sites.stat.columbia.edu/gelman/book/BDA3.pdf)
* [2025-09-28, 16:46:22](https://lobste.rs/s/nn17bl/testing_exotic_p2p_vpn) - [Testing \&quot;exotic\&quot; p2p VPN](https://blog.nommy.moe/blog/exotic-mesh-vpn/)
* [2025-09-28, 16:34:00](https://slashdot.org/story/25/09/27/0632215/researchers-including-google-are-betting-on-virtual-world-models-for-better-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Researchers (Including Google) are Betting on Virtual &apos;World Models&apos; for Better AI](https://slashdot.org/story/25/09/27/0632215/researchers-including-google-are-betting-on-virtual-world-models-for-better-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-28, 16:13:36](https://lobste.rs/s/gchwhh/why_i_m_not_rushing_take_sides_rubygems) - [Why I&apos;m not rushing to take sides in the RubyGems fiasco](https://justin.searls.co/posts/why-im-not-rushing-to-take-sides-in-the-rubygems-fiasco/)
* [2025-09-28, 15:43:33](https://news.ycombinator.com/item?id=45405177) - [The AI coding trap](https://chrisloy.dev/post/2025/09/28/the-ai-coding-trap)
* [2025-09-28, 15:43:25](https://news.ycombinator.com/item?id=45405175) - [Scm2wasm: A Scheme to WASM compiler in 600 lines of C, making use of WASM GC](https://git.lain.faith/iitalics/scm2wasm)
* [2025-09-28, 15:41:23](https://lobste.rs/s/apzcvg/scm2wasm_scheme_wasm_compiler_600_lines_c) - [scm2wasm: A Scheme to WASM compiler in 600 lines of C, making use of WASM GC](https://git.lain.faith/iitalics/scm2wasm)
* [2025-09-28, 15:34:00](https://science.slashdot.org/story/25/09/27/2250232/million-year-old-skull-rewrites-human-evolution-scientists-claim?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Million-Year-Old Skull Rewrites Human Evolution, Scientists Claim](https://science.slashdot.org/story/25/09/27/2250232/million-year-old-skull-rewrites-human-evolution-scientists-claim?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-28, 15:15:00](https://soylentnews.org/article.pl?sid=25/09/27/1348254&amp;from=rss) - [Physics-Informed AI Learns Local Rules Behind Flocking and Collective Motion Behaviors](https://soylentnews.org/article.pl?sid=25/09/27/1348254&amp;from=rss)
* [2025-09-28, 14:40:46](https://news.ycombinator.com/item?id=45404667) - [Show HN: Toolbrew – Free little tools without signups or ads](https://toolbrew.co/)
* [2025-09-28, 14:34:00](https://hardware.slashdot.org/story/25/09/28/0553221/california-now-has-68-more-ev-chargers-than-gas-nozzles-continues-green-energy-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [California Now Has 68% More EV Chargers Than Gas Nozzles, Continues Green Energy Push](https://hardware.slashdot.org/story/25/09/28/0553221/california-now-has-68-more-ev-chargers-than-gas-nozzles-continues-green-energy-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-28, 12:59:54](https://news.ycombinator.com/item?id=45404021) - [Privacy Badger is a free browser extension made by EFF to stop spying](https://privacybadger.org/)
* [2025-09-28, 12:57:57](https://lobste.rs/s/9islkn/detaching_graalvm_from_java_ecosystem) - [Detaching GraalVM from the Java Ecosystem Train](https://blogs.oracle.com/java/post/detaching-graalvm-from-the-java-ecosystem-train)
* [2025-09-28, 12:42:03](https://news.ycombinator.com/item?id=45403912) - [Show HN: Swapple, a little daily puzzle on linear reversible circuit synthesis](https://swapple.fuglede.dk)
* [2025-09-28, 11:44:44](https://lobste.rs/s/wshruu/small_data) - [Small Data](https://topicpartition.io/definitions/small-data)
* [2025-09-28, 11:34:00](https://slashdot.org/story/25/09/27/1640203/mistrals-new-plan-for-improving-its-ai-models-training-data-from-enterprises?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mistral&apos;s New Plan for Improving Its AI Models: Training Data from Enterprises](https://slashdot.org/story/25/09/27/1640203/mistrals-new-plan-for-improving-its-ai-models-training-data-from-enterprises?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-28, 10:29:00](https://soylentnews.org/article.pl?sid=25/09/27/1340248&amp;from=rss) - [US Intel Officials “Concerned” China Will Soon Master Reusable Launch](https://soylentnews.org/article.pl?sid=25/09/27/1340248&amp;from=rss)
* [2025-09-28, 09:07:22](https://lobste.rs/s/m9rmop/offline_translator_for_android) - [Offline translator for Android](https://github.com/DavidVentura/firefox-translator)
* [2025-09-28, 08:28:11](https://lobste.rs/s/gz4zq0/urgency_vs_importance) - [Urgency vs importance](https://archaeologist.dev/artifacts/priorities)
* [2025-09-28, 07:34:00](https://yro.slashdot.org/story/25/09/28/044220/should-salesforces-tableau-be-granted-a-patent-on-visualizing-hierarchical-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Should Salesforce&apos;s Tableau Be Granted a Patent On &apos;Visualizing Hierarchical Data&apos;?](https://yro.slashdot.org/story/25/09/28/044220/should-salesforces-tableau-be-granted-a-patent-on-visualizing-hierarchical-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-28, 05:44:00](https://soylentnews.org/article.pl?sid=25/09/27/1329235&amp;from=rss) - [Consumer Reports Slams Microsoft for Windows 10 Mess, Urges Extension of Free Updates](https://soylentnews.org/article.pl?sid=25/09/27/1329235&amp;from=rss)
* [2025-09-28, 05:11:24](https://lobste.rs/s/0xkiib/linus_torvalds_supposedly_garbage_code) - [Linus Torvalds and the Supposedly “Garbage Code”](https://giodicanio.com/2025/08/27/linus-torvalds-and-the-supposedly-garbage-code/)
* [2025-09-28, 00:56:00](https://soylentnews.org/article.pl?sid=25/09/27/1318227&amp;from=rss) - [Airlines Seen as Vulnerable After Confirmed Ransomware Cyberattack, Suspect Arrested](https://soylentnews.org/article.pl?sid=25/09/27/1318227&amp;from=rss)
* [2025-09-27, 20:13:00](https://soylentnews.org/article.pl?sid=25/09/27/1254248&amp;from=rss) - [How AI is Subsidized by Your Utility Bills and Drives Copper Prices](https://soylentnews.org/article.pl?sid=25/09/27/1254248&amp;from=rss)
* [2025-09-27, 15:27:00](https://soylentnews.org/article.pl?sid=25/09/26/2326219&amp;from=rss) - [Cloudflare DDoSed Itself With React UseEffect Hook Blunder](https://soylentnews.org/article.pl?sid=25/09/26/2326219&amp;from=rss)
* [2025-09-27, 13:15:37](https://news.ycombinator.com/item?id=45395468) - [Users only care about 20% of your application](https://idiallo.com/blog/users-only-care-about-20-percent)
* [2025-09-27, 10:41:00](https://soylentnews.org/article.pl?sid=25/09/26/2314203&amp;from=rss) - [Magma Displacement Triggered Tens of Thousands of Earthquakes, Santorini Swarm Study Finds](https://soylentnews.org/article.pl?sid=25/09/26/2314203&amp;from=rss)
* [2025-09-27, 05:56:00](https://soylentnews.org/article.pl?sid=25/09/26/239227&amp;from=rss) - [China&apos;s Latest GPU Arrives With Claims of CUDA Compatibility and RT Support](https://soylentnews.org/article.pl?sid=25/09/26/239227&amp;from=rss)
* [2025-09-27, 01:06:00](https://soylentnews.org/article.pl?sid=25/09/26/1437222&amp;from=rss) - [How India&apos;s Unplanned Hydropower Dams and Tunnels Are Disrupting Himalayan Landscapes](https://soylentnews.org/article.pl?sid=25/09/26/1437222&amp;from=rss)
* [2025-09-26, 21:40:51](https://news.ycombinator.com/item?id=45391302) - [Eliminating Cold Starts 2: shard and conquer](https://blog.cloudflare.com/eliminating-cold-starts-2-shard-and-conquer/)
* [2025-09-26, 20:20:00](https://soylentnews.org/article.pl?sid=25/09/26/1433207&amp;from=rss) - [American Kids Can’t Read or Do Math Anymore](https://soylentnews.org/article.pl?sid=25/09/26/1433207&amp;from=rss)
* [2025-09-26, 18:23:07](https://news.ycombinator.com/item?id=45389498) - [Translation and Taste](https://hedgehogreview.com/issues/lessons-of-babel/articles/translation-and-taste)
* [2025-09-26, 15:35:00](https://soylentnews.org/article.pl?sid=25/09/26/1416257&amp;from=rss) - [More Than Half of World&apos;s Coastal Settlements Retreating From Rising Seas, Study Shows](https://soylentnews.org/article.pl?sid=25/09/26/1416257&amp;from=rss)
* [2025-09-26, 10:53:00](https://soylentnews.org/article.pl?sid=25/09/26/1047223&amp;from=rss) - [Huntington&apos;s Disease Successfully Treated for First Time](https://soylentnews.org/article.pl?sid=25/09/26/1047223&amp;from=rss)
* [2025-09-26, 06:11:00](https://soylentnews.org/article.pl?sid=25/09/26/0453242&amp;from=rss) - [Facebook Data Reveal the Devastating Real-World Harms Caused by the Spread of Misinformation](https://soylentnews.org/article.pl?sid=25/09/26/0453242&amp;from=rss)
* [2025-09-26, 01:27:00](https://soylentnews.org/article.pl?sid=25/09/25/1231232&amp;from=rss) - [China Starts Producing World-First Non-Binary AI Chips for Aviation, Manufacturing](https://soylentnews.org/article.pl?sid=25/09/25/1231232&amp;from=rss)
* [2025-09-25, 20:42:00](https://soylentnews.org/article.pl?sid=25/09/25/1225209&amp;from=rss) - [The Future of Nuclear Reactors is Making its Way to the US](https://soylentnews.org/article.pl?sid=25/09/25/1225209&amp;from=rss)
* [2025-09-25, 20:20:44](https://news.ycombinator.com/item?id=45378450) - [Fernflower Java Decompiler](https://github.com/JetBrains/fernflower)
* [2025-09-25, 15:54:00](https://soylentnews.org/article.pl?sid=25/09/25/1221237&amp;from=rss) - [Different Types of Magic Mushrooms Use Unique Biochemical Paths to Produce the Same Active Compound](https://soylentnews.org/article.pl?sid=25/09/25/1221237&amp;from=rss)
* [2025-09-25, 15:19:56](https://news.ycombinator.com/item?id=45373784) - [Zlib visualizer](https://lynn.github.io/flateview/)
* [2025-09-25, 12:07:12](https://news.ycombinator.com/item?id=45371856) - [The Long Trip from Silica to Smartphone](https://spectrum.ieee.org/the-long-strange-trip-from-silica-to-smartphone)
* [2025-09-25, 11:43:00](https://soylentnews.org/article.pl?sid=25/09/25/0014257&amp;from=rss) - [The Ganges River is Drying at an Unprecedented Rate](https://soylentnews.org/article.pl?sid=25/09/25/0014257&amp;from=rss)
* [2025-09-25, 07:01:00](https://soylentnews.org/article.pl?sid=25/09/24/122235&amp;from=rss) - [Nvidia&apos;s $100 Billion Investment in OpenAI Raises Big Antitrust Concerns](https://soylentnews.org/article.pl?sid=25/09/24/122235&amp;from=rss)
* [2025-09-25, 04:30:13](https://news.ycombinator.com/item?id=45369286) - [Patagonian Welsh](https://en.wikipedia.org/wiki/Patagonian_Welsh)
* [2025-09-25, 03:16:00](https://soylentnews.org/article.pl?sid=25/09/24/1152227&amp;from=rss) - [The End of EU-Imposed Cookie Consent Pop-Ups Could be Nigh](https://soylentnews.org/article.pl?sid=25/09/24/1152227&amp;from=rss)
