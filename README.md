# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Advances and Developments

* [Blender 5.0 Released](https://www.blender.org/download/releases/5-0/) - Blender Foundation released version 5.0 of Blender with significant updates in functionality. [Comments](https://news.ycombinator.com/item?id=45972519).

* [Ruby 4.0.0 preview2 Released](https://www.ruby-lang.org/en/news/2025/11/17/ruby-4-0-0-preview2-released/) - A preview of Ruby 4.0.0 is now available. [Comments](https://lobste.rs/s/ei2zx3/ruby_4_0_0_preview2_released).

* [Google Launches Gemini 3, Its 'Most Intelligent' AI Model Yet](https://tech.slashdot.org/story/25/11/18/1634253/google-launches-gemini-3-its-most-intelligent-ai-model-yet?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Introduction of Google's most comprehensive AI model to date. [Comments](https://news.ycombinator.com/item?id=45967211).

* [OrthoRoute – GPU-accelerated autorouting for KiCad](https://bbenchoff.github.io/pages/OrthoRoute.html) - Revolutionary tool for autorouting circuit boards using GPU acceleration. [Comments](https://news.ycombinator.com/item?id=45970391).

## AI and Society

* [Microsoft, Nvidia Commit Up To $15 Billion Investment in Anthropic as Claude Scales on Azure](https://slashdot.org/story/25/11/18/1522245/microsoft-nvidia-commit-up-to-15-billion-investment-in-anthropic-as-claude-scales-on-azure?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Major investment signals industry's rapid AI adoption. [Comments](https://news.ycombinator.com/item?id=45972390).

* [ACLU and EFF Sue a City Blanketed With Flock Surveillance Cameras](https://yro.slashdot.org/story/25/11/18/2038256/aclu-and-eff-sue-a-city-blanketed-with-flock-surveillance-cameras?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Lawsuit addresses concerns over privacy and surveillance. [Comments](https://news.ycombinator.com/item?id=45972390).

* [Klarna Says AI Drive Has Helped Halve Staff Numbers and Boost Pay](https://slashdot.org/story/25/11/18/1951214/klarna-says-ai-drive-has-helped-halve-staff-numbers-and-boost-pay?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Klarna claims improved efficiency through AI, reshaping operations. [Comments](https://www.ycombinator.com/news).

* [Fund Managers Warn AI Investment Boom Has Gone Too Far](https://tech.slashdot.org/story/25/11/18/1723237/fund-managers-warn-ai-investment-boom-has-gone-too-far?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Analysts raise concerns about potential overvaluations in AI investments. [Comments](https://news.ycombinator.com/item?id=45972390).

## Security and Privacy Concerns

* [IRS Accessed Massive Database of Americans Flights Without a Warrant](https://yro.slashdot.org/story/25/11/18/1850240/irs-accessed-massive-database-of-americans-flights-without-a-warrant?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Controversial IRS actions raise concerns over privacy breaches. [Comments](https://news.ycombinator.com/item?id=45970338).

* [A Simple WhatsApp Security Flaw Exposed 3.5 Billion Phone Numbers](https://yro.slashdot.org/story/25/11/18/1459209/a-simple-whatsapp-security-flaw-exposed-35-billion-phone-numbers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Pervasive vulnerability in WhatsApp's system. [Comments](https://news.ycombinator.com/item?id=45972390).

* [DHS Offers “Disturbing New Excuses” to Seize Kids’ Biometric Data, Expert Says](https://soylentnews.org/article.pl?sid=25/11/17/119215&from=rss) - Concerns mount as DHS policy sparks privacy debates. [Comments](https://news.ycombinator.com/item?id=45971726).

## Tech Community Contributions

* [Pebble, Rebble, and a Path Forward](https://ericmigi.com/blog/pebble-rebble-and-a-path-forward) - Insight into legacy smartwatch ecosystems navigating the future. [Comments](https://lobste.rs/s/sjkuyp/pebble_rebble_path_forward).

* [Show HN: RowboatX – open-source Claude Code for everyday automations](https://github.com/rowboatlabs/rowboat) - Showcase of open-source automation toolkit. [Comments](https://news.ycombinator.com/item?id=45970338).

* [Strix Halo's Memory Subsystem: Tackling iGPU Challenges](https://chipsandcheese.com/p/strix-halos-memory-subsystem-tackling) - Deep dive into innovations optimizing integrated GPUs. [Comments](https://news.ycombinator.com/item?id=45968611).

## Unusual or Fascinating Perspectives

* [A surprise with how '#!' handles its program argument in practice](https://utcc.utoronto.ca/~cks/space/blog/unix/ShebangRelativePathSurprise?showcomments) - Exploratory critique of Unix shebang mechanism. [Comments](https://lobste.rs/s/1rluks/surprise_with_how_handles_its_program).

* [The code and open-source tools I used to produce a science fiction anthology](https://compellingsciencefiction.com/posts/the-code-and-open-source-tools-i-used-to-produce-a-science-fiction-anthology.html) - Insightful application of coding processes to creative writing. [Comments](https://news.ycombinator.com/item?id=45968121).

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

* [2025-11-18, 21:39:18](https://news.ycombinator.com/item?id=45972519) - [Blender 5.0 Released](https://www.blender.org/download/releases/5-0/)
* [2025-11-18, 21:29:37](https://news.ycombinator.com/item?id=45972390) - [Bild AI (YC W25) Is Hiring: Make Housing Affordable](https://www.ycombinator.com/companies/bild-ai/jobs/m2ilR5L-founding-engineer-applied-ai)
* [2025-11-18, 21:25:00](https://yro.slashdot.org/story/25/11/18/2038256/aclu-and-eff-sue-a-city-blanketed-with-flock-surveillance-cameras?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ACLU and EFF Sue a City Blanketed With Flock Surveillance Cameras](https://yro.slashdot.org/story/25/11/18/2038256/aclu-and-eff-sue-a-city-blanketed-with-flock-surveillance-cameras?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-18, 20:50:00](https://slashdot.org/story/25/11/18/1951214/klarna-says-ai-drive-has-helped-halve-staff-numbers-and-boost-pay?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Klarna Says AI Drive Has Helped Halve Staff Numbers and Boost Pay](https://slashdot.org/story/25/11/18/1951214/klarna-says-ai-drive-has-helped-halve-staff-numbers-and-boost-pay?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-18, 20:40:46](https://news.ycombinator.com/item?id=45971726) - [GitHub: Git operation failures](https://www.githubstatus.com/incidents/5q7nmlxz30sk)
* [2025-11-18, 20:29:35](https://news.ycombinator.com/item?id=45971601) - [Oracle is underwater on its &apos;astonishing&apos; $300B OpenAI deal](https://www.ft.com/content/064bbca0-1cb2-45ab-85f4-25fdfc318d89)
* [2025-11-18, 20:10:00](https://developers.slashdot.org/story/25/11/18/1919245/oracle-is-already-underwater-on-its-astonishing-300b-openai-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Oracle is Already Underwater On Its &apos;Astonishing&apos; $300B OpenAI Deal](https://developers.slashdot.org/story/25/11/18/1919245/oracle-is-already-underwater-on-its-astonishing-300b-openai-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-18, 19:50:34](https://lobste.rs/s/1rluks/surprise_with_how_handles_its_program) - [A surprise with how &apos;#!&apos; handles its program argument in practice](https://utcc.utoronto.ca/~cks/space/blog/unix/ShebangRelativePathSurprise?showcomments)
* [2025-11-18, 19:47:00](https://soylentnews.org/article.pl?sid=25/11/17/119215&amp;from=rss) - [DHS Offers “Disturbing New Excuses” to Seize Kids’ Biometric Data, Expert Says](https://soylentnews.org/article.pl?sid=25/11/17/119215&amp;from=rss)
* [2025-11-18, 19:31:00](https://it.slashdot.org/story/25/11/18/1932202/talking-to-windows-copilot-ai-makes-a-computer-feel-incompetent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Talking To Windows&apos; Copilot AI Makes a Computer Feel Incompetent&apos;](https://it.slashdot.org/story/25/11/18/1932202/talking-to-windows-copilot-ai-makes-a-computer-feel-incompetent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-18, 19:05:44](https://news.ycombinator.com/item?id=45970519) - [Trying out Gemini 3 Pro with audio transcription and a new pelican benchmark](https://simonwillison.net/2025/Nov/18/gemini-3/)
* [2025-11-18, 18:54:54](https://news.ycombinator.com/item?id=45970391) - [OrthoRoute – GPU-accelerated autorouting for KiCad](https://bbenchoff.github.io/pages/OrthoRoute.html)
* [2025-11-18, 18:54:19](https://lobste.rs/s/sjkuyp/pebble_rebble_path_forward) - [Pebble, Rebble, and a Path Forward](https://ericmigi.com/blog/pebble-rebble-and-a-path-forward)
* [2025-11-18, 18:50:00](https://news.ycombinator.com/item?id=45970338) - [Show HN: RowboatX – open-source Claude Code for everyday automations](https://github.com/rowboatlabs/rowboat)
* [2025-11-18, 18:50:00](https://yro.slashdot.org/story/25/11/18/1850240/irs-accessed-massive-database-of-americans-flights-without-a-warrant?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [IRS Accessed Massive Database of Americans Flights Without a Warrant](https://yro.slashdot.org/story/25/11/18/1850240/irs-accessed-massive-database-of-americans-flights-without-a-warrant?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-18, 18:13:30](https://news.ycombinator.com/item?id=45969909) - [I am stepping down as the CEO of Mastodon](https://blog.joinmastodon.org/2025/11/my-next-chapter-with-mastodon/)
* [2025-11-18, 18:04:00](https://tech.slashdot.org/story/25/11/18/184258/federal-judge-rules-metas-instagram-and-whatsapp-purchases-did-not-stifle-competition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Federal Judge Rules Meta&apos;s Instagram and WhatsApp Purchases Did Not Stifle Competition](https://tech.slashdot.org/story/25/11/18/184258/federal-judge-rules-metas-instagram-and-whatsapp-purchases-did-not-stifle-competition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-18, 17:55:55](https://news.ycombinator.com/item?id=45969708) - [Show HN: Guts – convert Golang types to TypeScript](https://github.com/coder/guts)
* [2025-11-18, 17:48:44](https://lobste.rs/s/asgxra/ditch_your_mut_ex_you_deserve_better) - [Ditch your (mut)ex, you deserve better](https://chrispenner.ca/posts/mutexes)
* [2025-11-18, 17:38:04](https://lobste.rs/s/gwchzg/whatsapp_census) - [WhatsApp Census](https://github.com/sbaresearch/whatsapp-census/blob/main/Hey_there_You_are_using_WhatsApp.pdf)
* [2025-11-18, 17:24:27](https://news.ycombinator.com/item?id=45969250) - [Pebble, Rebble, and a path forward](https://ericmigi.com/blog/pebble-rebble-and-a-path-forward/)
* [2025-11-18, 17:24:00](https://tech.slashdot.org/story/25/11/18/1723237/fund-managers-warn-ai-investment-boom-has-gone-too-far?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fund Managers Warn AI Investment Boom Has Gone Too Far](https://tech.slashdot.org/story/25/11/18/1723237/fund-managers-warn-ai-investment-boom-has-gone-too-far?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-18, 16:45:00](https://tech.slashdot.org/story/25/11/18/1634253/google-launches-gemini-3-its-most-intelligent-ai-model-yet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Launches Gemini 3, Its &apos;Most Intelligent&apos; AI Model Yet](https://tech.slashdot.org/story/25/11/18/1634253/google-launches-gemini-3-its-most-intelligent-ai-model-yet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-18, 16:41:34](https://news.ycombinator.com/item?id=45968611) - [Strix Halo&apos;s Memory Subsystem: Tackling iGPU Challenges](https://chipsandcheese.com/p/strix-halos-memory-subsystem-tackling)
* [2025-11-18, 16:38:15](https://lobste.rs/s/urbviy/inside_rust_s_std_parking_lot_mutexes_who) - [Inside Rust&apos;s std and parking_lot mutexes - who wins?](https://blog.cuongle.dev/p/inside-rusts-std-and-parking-lot-mutexes-who-win)
* [2025-11-18, 16:33:39](https://lobste.rs/s/psrp8z/google_summer_code_2025_results) - [Google Summer of Code 2025 results](https://blog.rust-lang.org/2025/11/18/gsoc-2025-results/)
* [2025-11-18, 16:26:28](https://news.ycombinator.com/item?id=45968362) - [Solving a million-step LLM task with zero errors](https://arxiv.org/abs/2511.09030)
* [2025-11-18, 16:10:34](https://news.ycombinator.com/item?id=45968121) - [The code and open-source tools I used to produce a science fiction anthology](https://compellingsciencefiction.com/posts/the-code-and-open-source-tools-i-used-to-produce-a-science-fiction-anthology.html)
* [2025-11-18, 16:07:00](https://tech.slashdot.org/story/25/11/18/167220/microsoft-is-adding-an-experimental-agentic-features-toggle-to-windows-11?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft is Adding an &apos;Experimental Agentic Features&apos; Toggle To Windows 11](https://tech.slashdot.org/story/25/11/18/167220/microsoft-is-adding-an-experimental-agentic-features-toggle-to-windows-11?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-18, 16:01:03](https://lobste.rs/s/ei2zx3/ruby_4_0_0_preview2_released) - [Ruby 4.0.0 preview2 Released](https://www.ruby-lang.org/en/news/2025/11/17/ruby-4-0-0-preview2-released/)
* [2025-11-18, 15:47:38](https://news.ycombinator.com/item?id=45967814) - [Google Antigravity](https://antigravity.google/)
* [2025-11-18, 15:25:00](https://slashdot.org/story/25/11/18/1522245/microsoft-nvidia-commit-up-to-15-billion-investment-in-anthropic-as-claude-scales-on-azure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft, Nvidia Commit Up To $15 Billion Investment in Anthropic as Claude Scales on Azure](https://slashdot.org/story/25/11/18/1522245/microsoft-nvidia-commit-up-to-15-billion-investment-in-anthropic-as-claude-scales-on-azure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-18, 15:09:38](https://news.ycombinator.com/item?id=45967211) - [Gemini 3](https://blog.google/products/gemini/gemini-3/)
* [2025-11-18, 15:04:00](https://soylentnews.org/article.pl?sid=25/11/17/0246249&amp;from=rss) - [The Data Center Resistance Has Arrived](https://soylentnews.org/article.pl?sid=25/11/17/0246249&amp;from=rss)
* [2025-11-18, 15:01:46](https://lobste.rs/s/lqsrgo/announcing_lix_2_94_acai_na_tigela) - [Announcing Lix 2.94 “Açaí na tigela”](https://lix.systems/blog/2025-11-18-lix-2.94-release/)
* [2025-11-18, 14:59:00](https://yro.slashdot.org/story/25/11/18/1459209/a-simple-whatsapp-security-flaw-exposed-35-billion-phone-numbers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Simple WhatsApp Security Flaw Exposed 3.5 Billion Phone Numbers](https://yro.slashdot.org/story/25/11/18/1459209/a-simple-whatsapp-security-flaw-exposed-35-billion-phone-numbers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-18, 14:23:18](https://news.ycombinator.com/item?id=45966435) - [Short Little Difficult Books](https://countercraft.substack.com/p/short-little-difficult-books)
* [2025-11-18, 14:19:46](https://lobste.rs/s/wtnzei/rebecca_heineman_from_homelessness) - [Rebecca Heineman - from homelessness to porting Doom](https://corecursive.com/doomed-to-fail-with-burger-becky/)
* [2025-11-18, 14:11:17](https://news.ycombinator.com/item?id=45966251) - [Nearly all UK drivers say headlights are too bright](https://www.bbc.com/news/articles/c1j8ewy1p86o)
* [2025-11-18, 14:01:00](https://tech.slashdot.org/story/25/11/18/1336231/google-boss-says-trillion-dollar-ai-investment-boom-has-elements-of-irrationality?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Boss Says Trillion-Dollar AI Investment boom Has &apos;Elements of Irrationality&apos;](https://tech.slashdot.org/story/25/11/18/1336231/google-boss-says-trillion-dollar-ai-investment-boom-has-elements-of-irrationality?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-18, 13:56:21](https://news.ycombinator.com/item?id=45966018) - [Experiment: Making TypeScript immutable-by-default](https://evanhahn.com/typescript-immutability-experiment/)
* [2025-11-18, 13:00:00](https://hardware.slashdot.org/story/25/11/18/0425258/valar-atomics-says-its-the-first-nuclear-startup-to-achieve-criticality?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Valar Atomics Says It&apos;s the First Nuclear Startup To Achieve Criticality](https://hardware.slashdot.org/story/25/11/18/0425258/valar-atomics-says-its-the-first-nuclear-startup-to-achieve-criticality?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-18, 12:56:39](https://lobste.rs/s/bb3wu5/do_not_put_your_site_behind_cloudflare_if) - [Do Not Put Your Site Behind Cloudflare if You Don&apos;t Need To](https://huijzer.xyz/posts/123/do-not-put-your-site-behind-cloudflare-if-you-dont)
* [2025-11-18, 12:40:48](https://lobste.rs/s/phd5uy/my_first_fifteen_compilers) - [My First Fifteen Compilers](https://blog.sigplan.org/2019/07/09/my-first-fifteen-compilers/)
* [2025-11-18, 12:35:13](https://news.ycombinator.com/item?id=45964816) - [Mathematics and Computation (2019) [pdf]](https://www.math.ias.edu/files/Book-online-Aug0619.pdf)
* [2025-11-18, 12:00:00](https://tech.slashdot.org/story/25/11/18/120222/cloudflare-outage-knocks-many-popular-websites-offline?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cloudflare Outage Knocks Many Popular Websites Offline](https://tech.slashdot.org/story/25/11/18/120222/cloudflare-outage-knocks-many-popular-websites-offline?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-18, 11:35:10](https://news.ycombinator.com/item?id=45963780) - [Cloudflare Global Network experiencing issues](https://www.cloudflarestatus.com/incidents/8gmgl950y3h7)
* [2025-11-18, 11:21:27](https://lobste.rs/s/ndaogy/uselessness_fast_slow_programming) - [The Uselessness of \&quot;Fast\&quot; and \&quot;Slow\&quot; in Programming](https://jerf.org/iri/post/2025/the_uselessness_of_fast/)
* [2025-11-18, 11:12:20](https://news.ycombinator.com/item?id=45963670) - [Gemini 3 Pro Model Card [pdf]](https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-3-Pro-Model-Card.pdf)
* [2025-11-18, 11:01:21](https://news.ycombinator.com/item?id=45963592) - [A &apos;small&apos; vanilla Kubernetes install on NixOS](https://stephank.nl/p/2025-11-17-a-small-vanilla-kubernetes-install-on-nixos.html)
* [2025-11-18, 10:59:54](https://news.ycombinator.com/item?id=45963583) - [The Miracle of Wörgl](https://scf.green/story-of-worgl-and-others/)
* [2025-11-18, 10:58:34](https://lobste.rs/s/i8ez2g/small_vanilla_kubernetes_install_on) - [A &apos;small&apos; vanilla Kubernetes install on NixOS](https://stephank.nl/p/2025-11-17-a-small-vanilla-kubernetes-install-on-nixos.html)
* [2025-11-18, 10:23:00](https://soylentnews.org/article.pl?sid=25/11/17/0243214&amp;from=rss) - [Google Settlement With Epic Caps Play Store Fees, Boosts Other Android App Stores](https://soylentnews.org/article.pl?sid=25/11/17/0243214&amp;from=rss)
* [2025-11-18, 10:00:00](https://yro.slashdot.org/story/25/11/18/015207/how-to-not-get-kidnapped-for-your-bitcoin?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How To Not Get Kidnapped For Your Bitcoin](https://yro.slashdot.org/story/25/11/18/015207/how-to-not-get-kidnapped-for-your-bitcoin?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-18, 09:22:50](https://lobste.rs/s/nnor3p/6_years_after_too_much_crypto) - [6 years after too much crypto](https://bfswa.substack.com/p/6-years-after-too-much-crypto)
* [2025-11-18, 09:16:15](https://lobste.rs/s/t37jcs/my_next_chapter_with_mastodon) - [My next chapter with Mastodon](https://blog.joinmastodon.org/2025/11/my-next-chapter-with-mastodon/)
* [2025-11-18, 08:18:35](https://news.ycombinator.com/item?id=45962654) - [How Quake.exe got its TCP/IP stack](https://fabiensanglard.net/quake_chunnel/index.html)
* [2025-11-18, 07:24:03](https://lobste.rs/s/wg18w9/does_ai_assisted_coding_deliver) - [Does AI-Assisted Coding Deliver? A Difference-in-Differences Study of Cursor&apos;s Impact on Software Projects](https://arxiv.org/abs/2511.04427)
* [2025-11-18, 07:14:03](https://news.ycombinator.com/item?id=45962266) - [A subtly obvious e-paper room air monitor (Part 1: Why?)](https://www.nicolin-dora.ch/blog/en-epaper-room-air-monitor-part-1/)
* [2025-11-18, 06:06:52](https://news.ycombinator.com/item?id=45961886) - [Google boss says AI investment boom has &apos;elements of irrationality&apos;](https://www.bbc.com/news/articles/cwy7vrd8k4eo)
* [2025-11-18, 05:37:00](https://soylentnews.org/article.pl?sid=25/11/17/0240210&amp;from=rss) - [Nvidia’s Jensen Huang: China will Surpass U.S. in AI Race Through ENERGY](https://soylentnews.org/article.pl?sid=25/11/17/0240210&amp;from=rss)
* [2025-11-18, 04:59:02](https://lobste.rs/s/4ybd1v/know_why_you_don_t_like_oop) - [Know why you don&apos;t like OOP](https://zylinski.se/posts/know-why-you-dont-like-oop/)
* [2025-11-18, 02:20:34](https://lobste.rs/s/eycjlq/how_quake_exe_got_its_tcp_ip_stack) - [How quake.exe got its TCP/IP stack](https://fabiensanglard.net/quake_chunnel/)
* [2025-11-18, 00:53:00](https://soylentnews.org/article.pl?sid=25/11/16/1340211&amp;from=rss) - [Starshield Satellite Constellation Emitting Unusual Radio Signals](https://soylentnews.org/article.pl?sid=25/11/16/1340211&amp;from=rss)
* [2025-11-17, 22:29:05](https://lobste.rs/s/uipd87/450_kb_static_site_generator_based_on) - [A 450 KB static site generator based on Markdown and Lua](https://log.schemescape.com/posts/static-site-generators/smallest-static-site-generator.html)
* [2025-11-17, 21:42:24](https://lobste.rs/s/wqrzcy/chuck_moore_retires_from_colorforth) - [Chuck Moore retires from colorforth after latest Windows breaks rendering](https://www.youtube.com/watch?v=MvkGBWXb2oQ)
* [2025-11-17, 21:07:28](https://lobste.rs/s/jrvtgn/add_vlan_opnsense_just_26_clicks_across_6) - [Add a VLAN to OPNsense in Just 26 Clicks Across 6 Screens](https://mtlynch.io/notes/opnsense-clicks/)
* [2025-11-17, 20:22:43](https://lobste.rs/s/plohjq/garbage_collection_is_useful) - [Garbage collection is useful](https://dubroy.com/blog/garbage-collection-is-useful/)
* [2025-11-17, 20:14:00](https://soylentnews.org/article.pl?sid=25/11/16/1329214&amp;from=rss) - [Microsoft: the Company Doesn&apos;t Have Enough Electricity to Install All the AI GPUs in its Inventory](https://soylentnews.org/article.pl?sid=25/11/16/1329214&amp;from=rss)
* [2025-11-17, 18:32:55](https://lobste.rs/s/lijpxq/towards_interplanetary_quic_traffic) - [Towards interplanetary QUIC traffic](https://ochagavia.nl/blog/towards-interplanetary-quic-traffic/)
* [2025-11-17, 17:18:43](https://lobste.rs/s/90ppkk/pre_pep_rust_for_cpython) - [Pre-PEP: Rust for CPython](https://discuss.python.org/t/pre-pep-rust-for-cpython/104906)
* [2025-11-17, 16:26:28](https://lobste.rs/s/q50ecd/strace_macos_clone_strace_command_for) - [strace-macos: A clone of the strace command for macOS](https://github.com/Mic92/strace-macos)
* [2025-11-17, 15:33:00](https://soylentnews.org/article.pl?sid=25/11/16/1317229&amp;from=rss) - [Lawmakers Want to Ban VPNs—And They Have No Idea What They&apos;re Doing](https://soylentnews.org/article.pl?sid=25/11/16/1317229&amp;from=rss)
* [2025-11-17, 12:26:45](https://news.ycombinator.com/item?id=45953001) - [Chuck Moore: Colorforth has stopped working [video]](https://www.youtube.com/watch?v=MvkGBWXb2oQ#t=22)
* [2025-11-17, 10:44:00](https://soylentnews.org/article.pl?sid=25/11/16/1316249&amp;from=rss) - [NVIDIA 580.105.08 Linux Graphics Driver Released With a New Environment Variable](https://soylentnews.org/article.pl?sid=25/11/16/1316249&amp;from=rss)
* [2025-11-17, 06:01:00](https://soylentnews.org/article.pl?sid=25/11/16/1311207&amp;from=rss) - [A Spine-Tingling Discovery: This Dinosaur Had Spiked Body Armor](https://soylentnews.org/article.pl?sid=25/11/16/1311207&amp;from=rss)
* [2025-11-17, 01:14:00](https://soylentnews.org/article.pl?sid=25/11/15/0741250&amp;from=rss) - [Devuan Version 6.0 \&quot;Excalibur\&quot; is Available Now](https://soylentnews.org/article.pl?sid=25/11/15/0741250&amp;from=rss)
* [2025-11-16, 20:28:00](https://soylentnews.org/article.pl?sid=25/11/15/0726208&amp;from=rss) - [Youtube Ads - Legal Advice Required](https://soylentnews.org/article.pl?sid=25/11/15/0726208&amp;from=rss)
* [2025-11-16, 15:45:00](https://soylentnews.org/article.pl?sid=25/11/15/0419235&amp;from=rss) - [This Rare ‘Mad Honey’ is Only Found in Two Places in the World](https://soylentnews.org/article.pl?sid=25/11/15/0419235&amp;from=rss)
* [2025-11-16, 10:58:00](https://soylentnews.org/article.pl?sid=25/11/15/045217&amp;from=rss) - [AI Resistance: Who Says No to AI and Why?](https://soylentnews.org/article.pl?sid=25/11/15/045217&amp;from=rss)
* [2025-11-16, 06:17:00](https://soylentnews.org/article.pl?sid=25/11/15/0349259&amp;from=rss) - [Australians to Get Three Hours of Free Electricity Every Day Under Solar Scheme](https://soylentnews.org/article.pl?sid=25/11/15/0349259&amp;from=rss)
* [2025-11-16, 01:36:00](https://soylentnews.org/article.pl?sid=25/11/15/0341210&amp;from=rss) - [FreeBSD: Reproducible Rootless Builds and Moving From Windows to This Linux Chaos Alternative](https://soylentnews.org/article.pl?sid=25/11/15/0341210&amp;from=rss)
* [2025-11-15, 20:51:00](https://soylentnews.org/article.pl?sid=25/11/13/2136225&amp;from=rss) - [Lego: The Final Frontier. Star Trek&apos;s First Set Beams Down in 3,600 Pieces](https://soylentnews.org/article.pl?sid=25/11/13/2136225&amp;from=rss)
* [2025-11-15, 16:08:00](https://soylentnews.org/article.pl?sid=25/11/13/2125207&amp;from=rss) - [New Project Brings Strong Linux Compatibility to More Classic Windows Games](https://soylentnews.org/article.pl?sid=25/11/13/2125207&amp;from=rss)
* [2025-11-15, 11:23:00](https://soylentnews.org/article.pl?sid=25/11/13/2130222&amp;from=rss) - [Gary McKinnon: He Was Looking for Aliens - and Became the No. 1 Enemy of the State](https://soylentnews.org/article.pl?sid=25/11/13/2130222&amp;from=rss)
* [2025-11-15, 06:36:00](https://soylentnews.org/article.pl?sid=25/11/13/0410238&amp;from=rss) - [Brussels Knifes Privacy to Feed the AI Boom](https://soylentnews.org/article.pl?sid=25/11/13/0410238&amp;from=rss)
* [2025-11-15, 01:54:00](https://soylentnews.org/article.pl?sid=25/11/13/0359225&amp;from=rss) - [How to Declutter, Quiet Down, and Take the AI Out of Windows 11 25H2](https://soylentnews.org/article.pl?sid=25/11/13/0359225&amp;from=rss)
* [2025-11-14, 21:12:00](https://soylentnews.org/article.pl?sid=25/11/13/0353240&amp;from=rss) - [What Do We Do If SETI is Successful?](https://soylentnews.org/article.pl?sid=25/11/13/0353240&amp;from=rss)
* [2025-11-14, 16:31:00](https://soylentnews.org/article.pl?sid=25/11/13/0325258&amp;from=rss) - [Google Confirms AI Search Will Have Ads, but They May Look Different](https://soylentnews.org/article.pl?sid=25/11/13/0325258&amp;from=rss)
* [2025-11-14, 11:47:00](https://soylentnews.org/article.pl?sid=25/11/13/0318258&amp;from=rss) - [Russian Hackers Abuse Hyper-V to Hide Malware in Linux VMs](https://soylentnews.org/article.pl?sid=25/11/13/0318258&amp;from=rss)
* [2025-11-14, 06:59:00](https://soylentnews.org/article.pl?sid=25/11/13/0314253&amp;from=rss) - [Your Worn-Out Keyboard Keys Reveal More About You Than You Think](https://soylentnews.org/article.pl?sid=25/11/13/0314253&amp;from=rss)
* [2025-11-14, 02:12:00](https://soylentnews.org/article.pl?sid=25/11/13/033247&amp;from=rss) - [Bombshell Report Exposes How Meta Relied on Scam Ad Profits to Fund AI](https://soylentnews.org/article.pl?sid=25/11/13/033247&amp;from=rss)
