# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software

* [ZFS scrubs check (much) less than you probably think they do (2018)](https://utcc.utoronto.ca/~cks/space/blog/solaris/ZFSScrubLimitsII) - A deep dive into the limitations of ZFS scrubs when analyzing file corruption consistency.

* [Website is served from nine Neovim buffers on my old ThinkPad](https://vim.gabornyeki.com/) - A unique showcase of a web server using Neovim buffers to serve web pages.

* [Customizing Lisp REPLs](https://aartaka.me/customize-repl.html) - Examines the customization options available for Lisp REPLs to enhance user workflows.

* [Mangle – a language for deductive database programming](https://github.com/google/mangle) - Google's language initiative for efficiently programming deductive databases.

## Artificial Intelligence and Security

* [When you're asking AI chatbots for answers, they're data-mining you](https://www.theregister.com/2025/08/18/opinion_column_ai_surveillance/) - Discusses how AI chatbots exploit user data for surveillance purposes.

* [LLMs and coding agents are a security nightmare](https://garymarcus.substack.com/p/llms-coding-agents-security-nightmare) - A critique of large language models and their potential to exacerbate security issues.

* [Google's 'AI Overview' Pointed Him to a Customer Service Number. It Was a Scam](https://yro.slashdot.org/story/25/08/18/0223228/googles-ai-overview-pointed-him-to-a-customer-service-number-it-was-a-scam?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Highlights the dangers of AI-generated misinformation leading to scam activities.

## Scientific and Medical Advances

* [Toothpaste Made From Hair Provides Natural Root to Repair Teeth](https://soylentnews.org/article.pl?sid=25/08/17/1234239&amp;from=rss) - Introduces a novel bioengineering approach using human hair to produce dental repairs.

* [Electromechanical reshaping, an alternative to laser eye surgery](https://medicalxpress.com/news/2025-08-alternative-lasik-lasers.html) - Looks into a groundbreaking non-laser method for corrective eye surgery.

## Environment and Sustainability

* [The circular economy could make demolition a thing of the past](https://theconversation.com/the-circular-economy-could-make-demolition-a-thing-of-the-past-heres-how-261678) - Explores strategies to rethink demolition through circular economy principles.

* [In Barcelona, Certain Buses Run On Biomethane Produced From Human Waste](https://tech.slashdot.org/story/25/08/17/0139251/in-barcelona-certain-buses-run-on-biomethane-produced-from-human-waste?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Discusses innovative sustainable transportation fuel methods.

## Open Source and Development Tools

* [wrkflw: Validate and Run GitHub Actions locally](https://github.com/bahdotsh/wrkflw) - A tool for testing and debugging GitHub Actions workflows locally.

* [BusyBee: Lightweight and observable background processing for .NET applications](https://github.com/mikasjp/BusyBee) - Presents a solution for simplified task management in .NET development.

* [Nvidia Tilus: A Tile-Level GPU Kernel Programming Language](https://github.com/NVIDIA/tilus) - Nvidia's latest tool for efficient GPU kernel-level programming.

## Cultural and Historical Discoveries

* [People Reoccupied Pompeii After Vesuvius Eruption, Archaeologists Find](https://soylentnews.org/article.pl?sid=25/08/16/1255244&amp;from=rss) - New archaeological evidence reveals human activities in post-eruption Pompeii.

* [The Lives and Loves of James Baldwin](https://www.newyorker.com/magazine/2025/08/18/baldwin-a-love-story-nicholas-boggs-book-review) - A reflective analysis of the personal relationships and legacies of James Baldwin.

## Consumer and Business Impact

* [Duolingo's Stock Down 38%, Plummets After OpenAI's GPT-5 Language App-Building Demo](https://yro.slashdot.org/story/25/08/17/194212/duolingos-stock-down-38-plummets-after-openais-gpt-5-language-app-building-demo?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Examines how GPT-5's language capabilities disrupted the edtech market.

* [$81M 'Trade Secrets' Verdict Against Boeing Was Overturned - and Then Reinstated](https://tech.slashdot.org/story/25/08/18/0055216/81m-trade-secrets-verdict-against-boeing-was-overturned---and-then-reinstated?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Details the legal complexities surrounding Boeing's trade secrets dispute.

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

* [2025-08-18, 13:04:35](https://lobste.rs/s/munhml/preventing_naptr_spam) - [Preventing NAPTR Spam](https://shkspr.mobi/blog/2025/08/preventing-naptr-spam/)
* [2025-08-18, 12:44:06](https://lobste.rs/s/hvmtob/zfs_scrubs_check_much_less_than_you) - [ZFS scrubs check (much) less than you probably think they do (2018)](https://utcc.utoronto.ca/~cks/space/blog/solaris/ZFSScrubLimitsII)
* [2025-08-18, 12:05:00](https://soylentnews.org/article.pl?sid=25/08/17/1234239&amp;from=rss) - [Toothpaste Made From Hair Provides Natural Root to Repair Teeth](https://soylentnews.org/article.pl?sid=25/08/17/1234239&amp;from=rss)
* [2025-08-18, 11:59:53](https://lobste.rs/s/giy0kl/all_atc_message_routing_germany_was_done) - [All ATC message routing in Germany was done through Emacs](https://www.reddit.com/r/emacs/comments/lly7po/comment/gnvzisy/)
* [2025-08-18, 11:58:17](https://news.ycombinator.com/item?id=44939660) - [When you&apos;re asking AI chatbots for answers, they&apos;re data-mining you](https://www.theregister.com/2025/08/18/opinion_column_ai_surveillance/)
* [2025-08-18, 11:42:31](https://news.ycombinator.com/item?id=44939551) - [The circular economy could make demolition a thing of the past](https://theconversation.com/the-circular-economy-could-make-demolition-a-thing-of-the-past-heres-how-261678)
* [2025-08-18, 11:34:00](https://science.slashdot.org/story/25/08/18/0631210/5-of-americans-are-cancer-survivors---and-theyre-living-longer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [5% of Americans are Cancer Survivors - and They&apos;re Living Longer](https://science.slashdot.org/story/25/08/18/0631210/5-of-americans-are-cancer-survivors---and-theyre-living-longer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-18, 11:04:34](https://news.ycombinator.com/item?id=44939331) - [LLMs and coding agents are a security nightmare](https://garymarcus.substack.com/p/llms-coding-agents-security-nightmare)
* [2025-08-18, 11:03:22](https://news.ycombinator.com/item?id=44939324) - [Website is served from nine Neovim buffers on my old ThinkPad](https://vim.gabornyeki.com/)
* [2025-08-18, 11:02:04](https://lobste.rs/s/l5qpv2/this_website_is_served_from_nine_neovim) - [This Website is Served from Nine Neovim Buffers on My Old ThinkPad](https://vim.gabornyeki.com/)
* [2025-08-18, 10:44:11](https://lobste.rs/s/monzbv/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/monzbv/what_are_you_doing_this_week)
* [2025-08-18, 10:02:31](https://news.ycombinator.com/item?id=44938963) - [MCP tools with dependent types](https://vlaaad.github.io/mcp-tools-with-dependent-types)
* [2025-08-18, 09:53:03](https://news.ycombinator.com/item?id=44938920) - [MCP doesn&apos;t need tools, it needs code](https://lucumr.pocoo.org/2025/8/18/code-mcps/)
* [2025-08-18, 09:36:45](https://lobste.rs/s/tdpcjd/busybee_lightweight_observable) - [BusyBee: Lightweight and observable background processing for .NET applications](https://github.com/mikasjp/BusyBee)
* [2025-08-18, 09:35:17](https://news.ycombinator.com/item?id=44938818) - [Electromechanical reshaping,  an alternative to laser eye surgery](https://medicalxpress.com/news/2025-08-alternative-lasik-lasers.html)
* [2025-08-18, 09:32:35](https://lobste.rs/s/ohfxkz/we_needed_better_cloud_storage_for_python) - [We Needed Better Cloud Storage for Python so We Built Obstore](https://developmentseed.org/blog/2025-08-01-obstore/)
* [2025-08-18, 09:03:18](https://lobste.rs/s/bsyd6a/nixos_flakes_book) - [NixOS &amp; Flakes Book](https://nixos-and-flakes.thiscute.world/introduction/)
* [2025-08-18, 08:25:58](https://lobste.rs/s/tagrrs/introducing_illumos_cafe_another_cozy) - [Introducing the illumos Cafe: Another Cozy Corner for OS Diversity](https://it-notes.dragas.net/2025/08/18/introducing-the-illumos-cafe/)
* [2025-08-18, 08:10:33](https://lobste.rs/s/pddgnt/trick_use_mkmerge_at_top_level_nixos) - [A Trick To Use mkMerge at The Top Level of a NixOS module](https://gist.github.com/udf/4d9301bdc02ab38439fd64fbda06ea43)
* [2025-08-18, 08:10:20](https://lobste.rs/s/hpzxmg/i_tried_every_todo_app_ended_up_with_txt) - [I Tried Every Todo App and Ended Up With a .txt File](https://www.al3rez.com/todo-txt-journey)
* [2025-08-18, 07:34:00](https://it.slashdot.org/story/25/08/18/0550252/male-oriented-app-teaonher-also-had-security-flaws-that-could-leak-mens-drivers-license-photos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Male-Oriented App &apos;TeaOnHer&apos; Also Had Security Flaws That Could Leak Men&apos;s Driver&apos;s License Photos](https://it.slashdot.org/story/25/08/18/0550252/male-oriented-app-teaonher-also-had-security-flaws-that-could-leak-mens-drivers-license-photos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-18, 07:21:00](https://soylentnews.org/article.pl?sid=25/08/17/1246229&amp;from=rss) - [Firefox’s New “AI” Features Cause CPU Spikes and Battery Drain](https://soylentnews.org/article.pl?sid=25/08/17/1246229&amp;from=rss)
* [2025-08-18, 07:11:00](https://news.ycombinator.com/item?id=44938156) - [Unification (2018)](https://eli.thegreenplace.net/2018/unification/)
* [2025-08-18, 06:38:11](https://news.ycombinator.com/item?id=44937991) - [Web apps in a single, portable, self-updating, vanilla HTML file](https://hyperclay.com/)
* [2025-08-18, 05:25:00](https://science.slashdot.org/story/25/08/18/0423227/rare-upper-atmosphere-lightning-photographed-from-iss?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rare &apos;Upper Atmosphere Lightning&apos; Photographed From ISS](https://science.slashdot.org/story/25/08/18/0423227/rare-upper-atmosphere-lightning-photographed-from-iss?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-18, 05:21:17](https://lobste.rs/s/6jljsk/wrkflw_validate_run_github_actions) - [wrkflw: Validate and Run GitHub Actions locally](https://github.com/bahdotsh/wrkflw)
* [2025-08-18, 05:15:39](https://lobste.rs/s/kme1ri/recto_truly_2d_language) - [Recto — a truly 2D language](https://masatohagiwara.net/recto.html)
* [2025-08-18, 04:57:47](https://news.ycombinator.com/item?id=44937550) - [SystemD Service Hardening](https://roguesecurity.dev/blog/systemd-hardening)
* [2025-08-18, 04:55:23](https://lobste.rs/s/qtn7io/systemd_service_hardening) - [SystemD Service Hardening](https://roguesecurity.dev/blog/systemd-hardening)
* [2025-08-18, 04:02:05](https://lobste.rs/s/tuiofz/why_i_prefer_rst_restructuredtext) - [Why I prefer rST [reStructuredText] to Markdown](https://buttondown.com/hillelwayne/archive/why-i-prefer-rst-to-markdown/)
* [2025-08-18, 03:52:18](https://lobste.rs/s/7rikhb/system_inside_system) - [The System Inside the System](https://worksonmymachine.ai/p/the-system-inside-the-system)
* [2025-08-18, 03:32:44](https://lobste.rs/s/inpnyd/customizing_lisp_repls) - [Customizing Lisp REPLs](https://aartaka.me/customize-repl.html)
* [2025-08-18, 02:54:55](https://news.ycombinator.com/item?id=44936945) - [Google admits anti-competitive conduct involving Google Search in Australia](https://www.accc.gov.au/media-release/google-admits-anti-competitive-conduct-involving-google-search-in-australia)
* [2025-08-18, 02:36:00](https://soylentnews.org/article.pl?sid=25/08/17/1237215&amp;from=rss) - [Blackhole Bounce - New Universes](https://soylentnews.org/article.pl?sid=25/08/17/1237215&amp;from=rss)
* [2025-08-18, 02:25:00](https://yro.slashdot.org/story/25/08/18/0223228/googles-ai-overview-pointed-him-to-a-customer-service-number-it-was-a-scam?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s &apos;AI Overview&apos; Pointed Him to a Customer Service Number.  It Was a Scam](https://yro.slashdot.org/story/25/08/18/0223228/googles-ai-overview-pointed-him-to-a-customer-service-number-it-was-a-scam?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-18, 01:40:29](https://news.ycombinator.com/item?id=44936575) - [Non-Uniform Memory Access (NUMA) is reshaping microservice placement](https://codemia.io/blog/path/NUMA-Is-the-New-Network-How-Per-Socket-Memory-Models-Are-Reshaping-Microservice-Placement)
* [2025-08-18, 00:59:00](https://tech.slashdot.org/story/25/08/18/0055216/81m-trade-secrets-verdict-against-boeing-was-overturned---and-then-reinstated?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [$81M &apos;Trade Secrets&apos; Verdict Against Boeing Was Overturned - and Then Reinstated](https://tech.slashdot.org/story/25/08/18/0055216/81m-trade-secrets-verdict-against-boeing-was-overturned---and-then-reinstated?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-18, 00:55:35](https://news.ycombinator.com/item?id=44936333) - [Mangle – a language for deductive database programming](https://github.com/google/mangle)
* [2025-08-18, 00:52:03](https://news.ycombinator.com/item?id=44936309) - [Clojure Async Flow Guide](https://clojure.github.io/core.async/flow-guide.html)
* [2025-08-17, 23:15:00](https://news.slashdot.org/story/25/08/17/2312222/americas-ev-registrations-rise-7-in-2025---giving-evs-a-75-market-share?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [America&apos;s EV Registrations Rise 7% in 2025 - Giving EVs a 7.5% Market Share](https://news.slashdot.org/story/25/08/17/2312222/americas-ev-registrations-rise-7-in-2025---giving-evs-a-75-market-share?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-17, 22:53:21](https://news.ycombinator.com/item?id=44935658) - [The Lives and Loves of James Baldwin](https://www.newyorker.com/magazine/2025/08/18/baldwin-a-love-story-nicholas-boggs-book-review)
* [2025-08-17, 21:53:00](https://soylentnews.org/article.pl?sid=25/08/17/1310222&amp;from=rss) - [What’s a Smut Peddler to Do These Days?](https://soylentnews.org/article.pl?sid=25/08/17/1310222&amp;from=rss)
* [2025-08-17, 21:40:47](https://news.ycombinator.com/item?id=44935169) - [Llama-Scan: Convert PDFs to Text W Local LLMs](https://github.com/ngafar/llama-scan)
* [2025-08-17, 21:24:00](https://it.slashdot.org/story/25/08/17/2120232/androids-pkvm-becomes-first-globally-certified-software-to-achieve-sesip-level-5-security-certification?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Android&apos;s pKVM Becomes First Globally Certified Software to Achieve SESIP Level 5 Security Certification](https://it.slashdot.org/story/25/08/17/2120232/androids-pkvm-becomes-first-globally-certified-software-to-achieve-sesip-level-5-security-certification?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-17, 19:52:03](https://news.ycombinator.com/item?id=44934391) - [Show HN: Doxx – Terminal .docx viewer inspired by Glow](https://github.com/bgreenwell/doxx)
* [2025-08-17, 19:07:00](https://yro.slashdot.org/story/25/08/17/194212/duolingos-stock-down-38-plummets-after-openais-gpt-5-language-app-building-demo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Duolingo&apos;s Stock Down 38%, Plummets After OpenAI&apos;s GPT-5 Language App-Building Demo](https://yro.slashdot.org/story/25/08/17/194212/duolingos-stock-down-38-plummets-after-openais-gpt-5-language-app-building-demo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-17, 18:58:54](https://lobste.rs/s/gvtlpo/email_is_easy_email_address_quiz) - [“Email is Easy” email address quiz](https://e-mail.wtf)
* [2025-08-17, 17:34:00](https://slashdot.org/story/25/08/17/0331217/llm-found-transmitting-behavioral-traits-to-student-llm-via-hidden-signals-in-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [LLM Found Transmitting Behavioral Traits to &apos;Student&apos; LLM Via Hidden Signals in Data](https://slashdot.org/story/25/08/17/0331217/llm-found-transmitting-behavioral-traits-to-student-llm-via-hidden-signals-in-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-17, 17:26:56](https://news.ycombinator.com/item?id=44933255) - [Claudia – Desktop companion for Claude code](https://claudiacode.com/)
* [2025-08-17, 17:08:00](https://soylentnews.org/article.pl?sid=25/08/17/0238238&amp;from=rss) - [Air Pollution Filters Help Scientists Produce First UK Wildlife Survey Using eDNA](https://soylentnews.org/article.pl?sid=25/08/17/0238238&amp;from=rss)
* [2025-08-17, 16:53:03](https://news.ycombinator.com/item?id=44932980) - [The Enterprise Experience](https://churchofturing.github.io/the-enterprise-experience.html)
* [2025-08-17, 16:34:00](https://games.slashdot.org/story/25/08/17/062255/more-game-workers-at-microsofts-blizzard-join-a-union?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [More Game Workers at Microsoft&apos;s &apos;Blizzard&apos; Join a Union](https://games.slashdot.org/story/25/08/17/062255/more-game-workers-at-microsofts-blizzard-join-a-union?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-17, 16:13:06](https://news.ycombinator.com/item?id=44932651) - [Show HN: OverType – A Markdown WYSIWYG editor that&apos;s just a textarea](https://news.ycombinator.com/item?id=44932651)
* [2025-08-17, 16:00:56](https://lobste.rs/s/wub5ol/brief_consideration_input_shapes) - [A brief consideration of input shapes (fuzzing)](https://addisoncrump.info/research/consideration-of-input-shapes/)
* [2025-08-17, 15:48:51](https://lobste.rs/s/ztwmik/beyond_booleans_propositions_lean) - [Beyond Booleans: Propositions in Lean](https://overreacted.io/beyond-booleans/)
* [2025-08-17, 15:34:00](https://it.slashdot.org/story/25/08/17/0221251/security-flaws-in-carmakers-web-portal-let-a-hacker-remotely-unlock-cars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Security Flaws In Carmaker&apos;s Web Portal Let a Hacker Remotely Unlock Cars](https://it.slashdot.org/story/25/08/17/0221251/security-flaws-in-carmakers-web-portal-let-a-hacker-remotely-unlock-cars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-17, 15:11:58](https://lobste.rs/s/q6wdpd/who_does_your_assistant_serve) - [Who does your assistant serve?](https://xeiaso.net/blog/2025/who-assistant-serve/)
* [2025-08-17, 14:34:00](https://tech.slashdot.org/story/25/08/17/0139251/in-barcelona-certain-buses-run-on-biomethane-produced-from-human-waste?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [In Barcelona, Certain Buses Run On Biomethane Produced From Human Waste](https://tech.slashdot.org/story/25/08/17/0139251/in-barcelona-certain-buses-run-on-biomethane-produced-from-human-waste?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-17, 14:29:22](https://news.ycombinator.com/item?id=44931824) - [Show HN: NextDNS Adds \&quot;Bypass Age Verification\&quot;](https://news.ycombinator.com/item?id=44931824)
* [2025-08-17, 14:08:18](https://news.ycombinator.com/item?id=44931666) - [Derivatives, Gradients, Jacobians and Hessians](https://blog.demofox.org/2025/08/16/derivatives-gradients-jacobians-and-hessians-oh-my/)
* [2025-08-17, 12:21:00](https://soylentnews.org/article.pl?sid=25/08/17/0227231&amp;from=rss) - [Massive Magnets Are on the Move: Repurposing Electromagnets for Research](https://soylentnews.org/article.pl?sid=25/08/17/0227231&amp;from=rss)
* [2025-08-17, 11:34:00](https://yro.slashdot.org/story/25/08/17/1123235/former-intel-engineer-sentenced-for-stealing-trade-secrets-for-microsoft?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Former Intel Engineer Sentenced for Stealing Trade Secrets for Microsoft](https://yro.slashdot.org/story/25/08/17/1123235/former-intel-engineer-sentenced-for-stealing-trade-secrets-for-microsoft?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-17, 10:05:48](https://lobste.rs/s/khlbuv/llms_aren_t_world_models) - [LLMs aren’t world models](https://yosefk.com/blog/llms-arent-world-models.html)
* [2025-08-17, 09:34:07](https://lobste.rs/s/n4jqpm/programmer_s_field_guide_assertions) - [A programmer&apos;s field guide to assertions](https://typesanitizer.com/blog/assertions.html)
* [2025-08-17, 07:34:00](https://it.slashdot.org/story/25/08/17/0134258/phishing-training-is-pretty-pointless-researchers-find?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Phishing Training Is Pretty Pointless, Researchers Find](https://it.slashdot.org/story/25/08/17/0134258/phishing-training-is-pretty-pointless-researchers-find?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-17, 07:34:00](https://soylentnews.org/article.pl?sid=25/08/16/1255244&amp;from=rss) - [People Reoccupied Pompeii After Vesuvius Eruption, Archaeologists Find](https://soylentnews.org/article.pl?sid=25/08/16/1255244&amp;from=rss)
* [2025-08-17, 03:34:00](https://it.slashdot.org/story/25/08/16/0512211/americas-labor-unions-are-backing-state-regulations-for-ai-use-in-workplaces?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [America&apos;s Labor Unions are Backing State Regulations for AI Use in Workplaces](https://it.slashdot.org/story/25/08/16/0512211/americas-labor-unions-are-backing-state-regulations-for-ai-use-in-workplaces?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-17, 02:47:00](https://soylentnews.org/article.pl?sid=25/08/16/0019213&amp;from=rss) - [Bill Gates Declares the End of the Smartphone Era and Unveils Its Surprising Replacement](https://soylentnews.org/article.pl?sid=25/08/16/0019213&amp;from=rss)
* [2025-08-17, 00:45:51](https://lobste.rs/s/i8eoxa/enterprise_experience) - [The Enterprise Experience](https://churchofturing.github.io/the-enterprise-experience.html)
* [2025-08-16, 22:07:00](https://soylentnews.org/article.pl?sid=25/08/16/008232&amp;from=rss) - [Americans Who ‘Learned To Code’ At Obama’s Behest Can’t Find Jobs Now](https://soylentnews.org/article.pl?sid=25/08/16/008232&amp;from=rss)
* [2025-08-16, 17:51:53](https://lobste.rs/s/gwh1ys/lobsters_blog_carnival) - [Lobsters Blog Carnival](https://lobste.rs/s/gwh1ys/lobsters_blog_carnival)
* [2025-08-16, 17:23:00](https://soylentnews.org/article.pl?sid=25/08/15/2243238&amp;from=rss) - [On its Fifth Try, SpaceX Manages Launch of Competitor Amazon&apos;s Satellites](https://soylentnews.org/article.pl?sid=25/08/15/2243238&amp;from=rss)
* [2025-08-16, 14:01:38](https://news.ycombinator.com/item?id=44923520) - [Show HN: I built an app to block Shorts and Reels](https://scrollguard.app/)
* [2025-08-16, 12:34:00](https://soylentnews.org/politics/article.pl?sid=25/08/15/1324240&amp;from=rss) - [Trump Administration Considering US Government Purchase of Stake in Intel](https://soylentnews.org/politics/article.pl?sid=25/08/15/1324240&amp;from=rss)
* [2025-08-16, 12:08:45](https://news.ycombinator.com/item?id=44922540) - [Walkie-Textie Wireless Communicator](http://www.technoblogy.com/show?2AON)
* [2025-08-16, 07:48:00](https://soylentnews.org/article.pl?sid=25/08/15/1320204&amp;from=rss) - [In Trial, People Lost Twice as Much Weight by Ditching Ultraprocessed Food](https://soylentnews.org/article.pl?sid=25/08/15/1320204&amp;from=rss)
* [2025-08-16, 03:07:00](https://soylentnews.org/article.pl?sid=25/08/15/1316257&amp;from=rss) - [Many Countries Banned From Using PayPal for Steam Games in Latest Payment Processor Drama](https://soylentnews.org/article.pl?sid=25/08/15/1316257&amp;from=rss)
* [2025-08-16, 02:44:22](https://news.ycombinator.com/item?id=44919666) - [8x19 Text Mode Font Origins](https://www.os2museum.com/wp/8x19-text-mode-font-origins/)
* [2025-08-15, 22:22:00](https://soylentnews.org/article.pl?sid=25/08/15/0813246&amp;from=rss) - [Internal Meta Guidelines for AI Permit \&quot;Sensual\&quot; Discussions With Children](https://soylentnews.org/article.pl?sid=25/08/15/0813246&amp;from=rss)
* [2025-08-15, 17:35:00](https://soylentnews.org/article.pl?sid=25/08/13/1633213&amp;from=rss) - [Half of US Adults Now Use AI—but Views on How to Regulate the Technology Vary Widely by State](https://soylentnews.org/article.pl?sid=25/08/13/1633213&amp;from=rss)
* [2025-08-15, 14:24:29](https://news.ycombinator.com/item?id=44912822) - [Sky Calendar](https://abramsplanetarium.org/SkyCalendar/index.html)
* [2025-08-15, 12:51:00](https://soylentnews.org/article.pl?sid=25/08/13/1629233&amp;from=rss) - [Awesome Wooden Pixel Display](https://soylentnews.org/article.pl?sid=25/08/13/1629233&amp;from=rss)
* [2025-08-15, 08:07:00](https://soylentnews.org/article.pl?sid=25/08/13/1625217&amp;from=rss) - [Culture Influences Men&apos;s Experiences With Intimate Partner Violence, Study Finds](https://soylentnews.org/article.pl?sid=25/08/13/1625217&amp;from=rss)
* [2025-08-15, 04:11:48](https://news.ycombinator.com/item?id=44908528) - [A gigantic jet caught on camera: A spritacular moment for NASA astronaut](https://science.nasa.gov/science-research/heliophysics/a-gigantic-jet-caught-on-camera-a-spritacular-moment-for-nasa-astronaut-nicole-ayers/)
* [2025-08-15, 03:20:00](https://soylentnews.org/article.pl?sid=25/08/13/1621256&amp;from=rss) - [Harvard Business School on the Value of Open Source Software](https://soylentnews.org/article.pl?sid=25/08/13/1621256&amp;from=rss)
* [2025-08-14, 23:36:46](https://news.ycombinator.com/item?id=44906985) - [Nvidia Tilus: A Tile-Level GPU Kernel Programming Language](https://github.com/NVIDIA/tilus)
* [2025-08-14, 22:37:00](https://soylentnews.org/article.pl?sid=25/08/13/1347256&amp;from=rss) - [Joint Polar System METOP-SGA1 Launched](https://soylentnews.org/article.pl?sid=25/08/13/1347256&amp;from=rss)
* [2025-08-14, 17:52:00](https://soylentnews.org/article.pl?sid=25/08/13/1344242&amp;from=rss) - [AOL is Discontinuing its Dial-Up Service](https://soylentnews.org/article.pl?sid=25/08/13/1344242&amp;from=rss)
* [2025-08-14, 13:03:00](https://soylentnews.org/article.pl?sid=25/08/13/1139229&amp;from=rss) - [Microsoft Recall Exposes Passwords and Banking Data](https://soylentnews.org/article.pl?sid=25/08/13/1139229&amp;from=rss)
* [2025-08-14, 13:02:49](https://news.ycombinator.com/item?id=44899886) - [Scientists discover surprising language &apos;shortcuts&apos; in birdsong – like humans](https://www.manchester.ac.uk/about/news/scientists-discover-surprising-language-shortcuts-in-birdsong--just-like-humans/)
* [2025-08-14, 08:22:00](https://soylentnews.org/article.pl?sid=25/08/13/1127246&amp;from=rss) - [Reddit Bars Internet Archive From its Website, Sparking Access Concerns](https://soylentnews.org/article.pl?sid=25/08/13/1127246&amp;from=rss)
* [2025-08-14, 03:37:00](https://soylentnews.org/article.pl?sid=25/08/12/180244&amp;from=rss) - [Debian 13 \&quot;Trixie\&quot; and Debian \&quot;Hurd 2025\&quot; Released](https://soylentnews.org/article.pl?sid=25/08/12/180244&amp;from=rss)
* [2025-08-14, 03:32:18](https://news.ycombinator.com/item?id=44896472) - [Modifying other people&apos;s software](https://natkr.com/2025-08-14-modifying-other-peoples-software/)
