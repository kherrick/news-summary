# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Microsoft Says Recent Windows Update Didn't Kill Your SSD](https://hardware.slashdot.org/story/25/08/29/1824219/microsoft-says-recent-windows-update-didnt-kill-your-ssd?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Microsoft addresses concerns over SSD failures reportedly linked to a recent Windows update. [Comments](https://hardware.slashdot.org/story/25/08/29/1824219/microsoft-says-recent-windows-update-didnt-kill-your-ssd?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

* [Engineers Send Quantum Signals With Standard Internet Protocol](https://tech.slashdot.org/story/25/08/29/0043214/engineers-send-quantum-signals-with-standard-internet-protocol?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A novel approach to leveraging standard internet protocols for quantum communication. [Comments](https://tech.slashdot.org/story/25/08/29/0043214/engineers-send-quantum-signals-with-standard-internet-protocol?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

* [Large Reasoning Models Hitting Limits, Say Apple Researchers](https://soylentnews.org/article.pl?sid=25/08/28/1849238&amp;from=rss) - Apple researchers explore the challenges faced by large reasoning AI models. [Comments](https://soylentnews.org/article.pl?sid=25/08/28/1849238&amp;from=rss).

* [Meta might be secretly scanning your phone's camera roll](https://www.zdnet.com/article/meta-might-be-secretly-scanning-your-phones-camera-roll-how-to-check-and-turn-it-off/) - Concerns arise as Meta allegedly scans camera rolls on user devices. [Comments](https://news.ycombinator.com/item?id=45062910).

## Science and Environment

* [Nanoparticles Turn Houseplants Into Night Lights](https://science.slashdot.org/story/25/08/29/0030247/nanoparticles-turn-houseplants-into-night-lights?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Researchers develop a method to make houseplants emit light using nanoparticles. [Comments](https://science.slashdot.org/story/25/08/29/0030247/nanoparticles-turn-houseplants-into-night-lights?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

* [Breathwork Can Induce Altered States of Consciousness](https://soylentnews.org/article.pl?sid=25/08/28/1843236&amp;from=rss) - A study suggests breathwork and its potential for reaching altered mental states. [Comments](https://soylentnews.org/article.pl?sid=25/08/28/1843236&amp;from=rss).

* [Kelp Forests in Marine Protected Areas are More Resilient to Marine Heatwaves](https://soylentnews.org/article.pl?sid=25/08/26/0056205&amp;from=rss) - Marine protected areas offer evidence of ecological resilience in the face of climate impacts. [Comments](https://soylentnews.org/article.pl?sid=25/08/26/0056205&amp;from=rss).

## Data Privacy and Ethics in AI

* [If you have a Claude account, they're going to train on your data moving forward](https://old.reddit.com/r/LocalLLaMA/comments/1n2ubjx/if_you_have_a_claude_personal_account_they_are/) - Updates to Claude's policies raise concerns about user data utilization. [Comments](https://news.ycombinator.com/item?id=45062738).

* [Why AI Isn't Ready to Be a Real Coder](https://spectrum.ieee.org/ai-for-coding) - An analysis of the current shortcomings in AI's programming capabilities. [Comments](https://news.ycombinator.com/item?id=45065343).

* [Unpacking Passkeys Pwned: Possibly the most specious research in decades](https://arstechnica.com/security/2025/08/new-research-claiming-passkeys-can-be-stolen-is-pure-nonsense/) - A critique of a controversial study on passkey vulnerabilities. [Comments](https://lobste.rs/s/ada1u6/unpacking_passkeys_pwned_possibly_most).

## Software and Development

* [Default search engine: Wikipedia](https://paste.sr.ht/~awal/2310cfca431e9f723df281d02558eaebd77e2091) - Examining Wikipedia as a potential default search engine. [Comments](https://lobste.rs/s/acz07b/default_search_engine_wikipedia).

* [The web does not need gatekeepers: Cloudflare’s new “signed agents” pitch](https://positiveblue.substack.com/p/the-web-does-not-need-gatekeepers) - Discussing Cloudflare's approach to internet security and access. [Comments](https://news.ycombinator.com/item?id=45066258).

* [Pyret: A programming language for programming education](https://pyret.org/) - Introducing Pyret, a language aimed at enhancing programming education. [Comments](https://lobste.rs/s/uiekig/pyret_programming_language_for).

## Controversies and Social Impacts

* [Macron Vows Retaliation If Europe's Digital Sovereignty Attacked](https://tech.slashdot.org/story/25/08/29/175257/macron-vows-retaliation-if-europes-digital-sovereignty-attacked?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A strong statement from the French president on protecting Europe's digital autonomy. [Comments](https://tech.slashdot.org/story/25/08/29/175257/macron-vows-retaliation-if-europes-digital-sovereignty-attacked?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

* [A Troubled Man, His Chatbot and a Murder-Suicide in Old Greenwich](https://tech.slashdot.org/story/25/08/29/1116218/a-troubled-man-his-chatbot-and-a-murder-suicide-in-old-greenwich?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A detailed investigation into a chatbot's role in a tragic event. [Comments](https://tech.slashdot.org/story/25/08/29/1116218/a-troubled-man-his-chatbot-and-a-murder-suicide-in-old-greenwich?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

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

* [2025-08-29, 18:41:00](https://hardware.slashdot.org/story/25/08/29/1824219/microsoft-says-recent-windows-update-didnt-kill-your-ssd?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Says Recent Windows Update Didn&apos;t Kill Your SSD](https://hardware.slashdot.org/story/25/08/29/1824219/microsoft-says-recent-windows-update-didnt-kill-your-ssd?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-29, 18:23:17](https://lobste.rs/s/acz07b/default_search_engine_wikipedia) - [Default search engine: Wikipedia](https://paste.sr.ht/~awal/2310cfca431e9f723df281d02558eaebd77e2091)
* [2025-08-29, 18:03:33](https://news.ycombinator.com/item?id=45067423) - [Income Equality in Nordic Countries: Myths, Facts, and Lessons](https://www.aeaweb.org/articles?id=10.1257/jel.20251636)
* [2025-08-29, 18:01:23](https://news.ycombinator.com/item?id=45067395) - [Hardware Flaw in Apple A16 Chip: Debug Logic Active on Production Devices](https://github.com/JGoyd/A16-FuseBypass)
* [2025-08-29, 18:01:00](https://games.slashdot.org/story/25/08/29/1729201/todays-game-consoles-are-historically-overpriced?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Today&apos;s Game Consoles Are Historically Overpriced](https://games.slashdot.org/story/25/08/29/1729201/todays-game-consoles-are-historically-overpriced?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-29, 17:59:13](https://lobste.rs/s/uiekig/pyret_programming_language_for) - [Pyret: A programming language for programming education](https://pyret.org/)
* [2025-08-29, 17:30:29](https://news.ycombinator.com/item?id=45066999) - [SQLite&apos;s Durability Settings Are a Mess](https://www.agwa.name/blog/post/sqlite_durability)
* [2025-08-29, 17:22:00](https://tech.slashdot.org/story/25/08/29/175257/macron-vows-retaliation-if-europes-digital-sovereignty-attacked?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Macron Vows Retaliation If Europe&apos;s Digital Sovereignty Attacked](https://tech.slashdot.org/story/25/08/29/175257/macron-vows-retaliation-if-europes-digital-sovereignty-attacked?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-29, 17:00:04](https://news.ycombinator.com/item?id=45066592) - [Thunder Compute (YC S24) Is Hiring](https://www.ycombinator.com/companies/thunder-compute/jobs/sS6QzTi-founding-developer-advocate-contract-to-hire)
* [2025-08-29, 16:48:38](https://lobste.rs/s/1gvza6/best_way_advertise_language) - [The best way to advertise a language](https://www.stylewarning.com/posts/write-programs/)
* [2025-08-29, 16:44:00](https://it.slashdot.org/story/25/08/29/1644219/bank-apologizes-for-firing-staff-with-accidental-email?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bank Apologizes For Firing Staff With Accidental Email](https://it.slashdot.org/story/25/08/29/1644219/bank-apologizes-for-firing-staff-with-accidental-email?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-29, 16:35:24](https://news.ycombinator.com/item?id=45066258) - [The web does not need gatekeepers: Cloudflare’s new “signed agents” pitch](https://positiveblue.substack.com/p/the-web-does-not-need-gatekeepers)
* [2025-08-29, 16:24:14](https://news.ycombinator.com/item?id=45066113) - [Bourbaki – A Secret Society of Mathematicians](https://books.google.com/books/about/Bourbaki.html)
* [2025-08-29, 16:20:31](https://news.ycombinator.com/item?id=45066070) - [Offline-First Landscape – 2025](https://marcoapp.io/blog/offline-first-landscape)
* [2025-08-29, 16:19:56](https://news.ycombinator.com/item?id=45066060) - [Wikipedia as a Graph](https://wikigrapher.com/paths)
* [2025-08-29, 16:01:00](https://news.slashdot.org/story/25/08/29/1554214/uk-sought-broad-access-to-apple-customers-data-court-filing-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Sought Broad Access To Apple Customers&apos; Data, Court Filing Suggests](https://news.slashdot.org/story/25/08/29/1554214/uk-sought-broad-access-to-apple-customers-data-court-filing-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-29, 15:53:41](https://news.ycombinator.com/item?id=45065705) - [Essential Coding Theory [pdf]](https://cse.buffalo.edu/faculty/atri/courses/coding-theory/book/web-coding-book.pdf)
* [2025-08-29, 15:31:15](https://news.ycombinator.com/item?id=45065425) - [God Created the Real Numbers](https://www.ethanheilman.com/x/34/index.html)
* [2025-08-29, 15:28:17](https://lobste.rs/s/imftzh/god_created_real_numbers) - [God created the real numbers](https://www.ethanheilman.com/x/34/index.html)
* [2025-08-29, 15:24:13](https://news.ycombinator.com/item?id=45065343) - [Why AI Isn&apos;t Ready to Be a Real Coder](https://spectrum.ieee.org/ai-for-coding)
* [2025-08-29, 15:21:00](https://news.slashdot.org/story/25/08/29/1519214/georgia-tech-is-teaching-other-universities-a-fundraising-lesson?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Georgia Tech Is Teaching Other Universities a Fundraising Lesson](https://news.slashdot.org/story/25/08/29/1519214/georgia-tech-is-teaching-other-universities-a-fundraising-lesson?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-29, 15:18:40](https://news.ycombinator.com/item?id=45065278) - [Seedbox Lite: A lightweight torrent streaming app with instant playback](https://github.com/hotheadhacker/seedbox-lite)
* [2025-08-29, 14:41:00](https://news.slashdot.org/story/25/08/29/1441223/steam-users-in-the-uk-will-need-a-credit-card-to-access-mature-content-games?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Steam Users in the UK Will Need a Credit Card To Access &apos;Mature Content&apos; Games](https://news.slashdot.org/story/25/08/29/1441223/steam-users-in-the-uk-will-need-a-credit-card-to-access-mature-content-games?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-29, 14:07:28](https://news.ycombinator.com/item?id=45064329) - [Deploying DeepSeek on 96 H100 GPUs](https://lmsys.org/blog/2025-05-05-large-scale-ep/)
* [2025-08-29, 14:07:00](https://soylentnews.org/article.pl?sid=25/08/28/1849238&amp;from=rss) - [Large Reasoning Models Hitting Limits, Say Apple Researchers](https://soylentnews.org/article.pl?sid=25/08/28/1849238&amp;from=rss)
* [2025-08-29, 14:02:59](https://news.ycombinator.com/item?id=45064284) - [Flunking my Anthropic interview again](https://taylor.town/flunking-anthropic)
* [2025-08-29, 14:00:00](https://tech.slashdot.org/story/25/08/29/1116218/a-troubled-man-his-chatbot-and-a-murder-suicide-in-old-greenwich?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Troubled Man, His Chatbot and a Murder-Suicide in Old Greenwich](https://tech.slashdot.org/story/25/08/29/1116218/a-troubled-man-his-chatbot-and-a-murder-suicide-in-old-greenwich?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-29, 13:56:50](https://news.ycombinator.com/item?id=45064210) - [Show HN: Find Hidden Gems on HN](https://pj4533.com/hn-overlooked/)
* [2025-08-29, 13:30:16](https://news.ycombinator.com/item?id=45063874) - [Show HN: Sosumi.ai – Convert Apple Developer docs to AI-readable Markdown](https://sosumi.ai/)
* [2025-08-29, 13:01:45](https://news.ycombinator.com/item?id=45063559) - [Grok Code Fast 1](https://x.ai/news/grok-code-fast-1)
* [2025-08-29, 13:00:49](https://news.ycombinator.com/item?id=45063547) - [Show HN: A minimal TS library that generates prompt injection attacks](https://prompt-injector.blueprintlab.io/)
* [2025-08-29, 13:00:00](https://tech.slashdot.org/story/25/08/29/0043214/engineers-send-quantum-signals-with-standard-internet-protocol?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Engineers Send Quantum Signals With Standard Internet Protocol](https://tech.slashdot.org/story/25/08/29/0043214/engineers-send-quantum-signals-with-standard-internet-protocol?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-29, 12:51:01](https://news.ycombinator.com/item?id=45063431) - [Sig Sauer citing national security to keep documents from public](https://practicalshootinginsights.com/eighth-circuit-fmeca-update/)
* [2025-08-29, 12:41:15](https://lobste.rs/s/zwtv1j/mystical_postscript) - [Mystical Postscript](https://github.com/denismm/mystical_ps)
* [2025-08-29, 12:01:31](https://news.ycombinator.com/item?id=45062910) - [Meta might be secretly scanning your phone&apos;s camera roll](https://www.zdnet.com/article/meta-might-be-secretly-scanning-your-phones-camera-roll-how-to-check-and-turn-it-off/)
* [2025-08-29, 11:39:26](https://news.ycombinator.com/item?id=45062738) - [If you have a Claude account, they&apos;re going to train on your data moving forward](https://old.reddit.com/r/LocalLLaMA/comments/1n2ubjx/if_you_have_a_claude_personal_account_they_are/)
* [2025-08-29, 11:29:10](https://news.ycombinator.com/item?id=45062683) - [Updates to Consumer Terms and Privacy Policy](https://www.anthropic.com/news/updates-to-our-consumer-terms)
* [2025-08-29, 11:26:14](https://lobste.rs/s/w4hd6d/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/w4hd6d/what_are_you_doing_this_weekend)
* [2025-08-29, 11:19:49](https://lobste.rs/s/7ecrz1/style_your_underlines) - [Style your underlines](https://adactio.com/journal/22084)
* [2025-08-29, 10:13:05](https://lobste.rs/s/daybpw/open_letter_everyone_i_ve_butted_heads) - [An Open Letter to Everyone I&apos;ve Butted Heads With](https://andrewkelley.me/post/open-letter-everyone-butted-heads.html)
* [2025-08-29, 10:00:00](https://slashdot.org/story/25/08/29/0037244/taco-bells-ai-drive-thru-plan-gets-caught-up-on-trolls-and-glitches?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Taco Bell&apos;s AI Drive-Thru Plan Gets Caught Up On Trolls and Glitches](https://slashdot.org/story/25/08/29/0037244/taco-bells-ai-drive-thru-plan-gets-caught-up-on-trolls-and-glitches?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-29, 09:22:00](https://soylentnews.org/article.pl?sid=25/08/28/1843236&amp;from=rss) - [Breathwork Can Induce Altered States of Consciousness](https://soylentnews.org/article.pl?sid=25/08/28/1843236&amp;from=rss)
* [2025-08-29, 07:00:00](https://science.slashdot.org/story/25/08/29/0030247/nanoparticles-turn-houseplants-into-night-lights?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nanoparticles Turn Houseplants Into Night Lights](https://science.slashdot.org/story/25/08/29/0030247/nanoparticles-turn-houseplants-into-night-lights?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-29, 06:37:21](https://news.ycombinator.com/item?id=45060920) - [The Synology End Game](https://lowendbox.com/blog/they-used-to-be-good-but-now-theyve-turned-to-evil-the-synology-end-game/)
* [2025-08-29, 06:12:23](https://lobste.rs/s/0nstyk/join_lobsters_blog_carnival) - [Join the Lobsters Blog Carnival](https://lobste.rs/s/0nstyk/join_lobsters_blog_carnival)
* [2025-08-29, 05:40:59](https://lobste.rs/s/fok4qx/which_parsing_approach_2020) - [Which Parsing Approach? (2020)](https://tratt.net/laurie/blog/2020/which_parsing_approach.html)
* [2025-08-29, 05:03:14](https://lobste.rs/s/ydjspd/case_for_writing_coding_manually) - [The Case for Writing and Coding Manually](https://www.ssp.sh/brain/will-ai-replace-humans/)
* [2025-08-29, 04:43:00](https://soylentnews.org/article.pl?sid=25/08/28/1214205&amp;from=rss) - [Mercedes Demonstrates Five Minute BEV Charging While Setting Speed Records](https://soylentnews.org/article.pl?sid=25/08/28/1214205&amp;from=rss)
* [2025-08-29, 03:54:25](https://lobste.rs/s/ada1u6/unpacking_passkeys_pwned_possibly_most) - [Unpacking Passkeys Pwned: Possibly the most specious research in decades](https://arstechnica.com/security/2025/08/new-research-claiming-passkeys-can-be-stolen-is-pure-nonsense/)
* [2025-08-29, 03:30:00](https://hardware.slashdot.org/story/25/08/28/217230/florida-deploys-robot-rabbits-to-control-invasive-burmese-python-population?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Florida Deploys Robot Rabbits To Control Invasive Burmese Python Population](https://hardware.slashdot.org/story/25/08/28/217230/florida-deploys-robot-rabbits-to-control-invasive-burmese-python-population?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-29, 02:02:00](https://tech.slashdot.org/story/25/08/28/2128257/amtraks-new-160mph-acela-trains-take-just-as-long-as-the-old-ones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amtrak&apos;s New 160mph Acela Trains Take Just As Long As the Old Ones](https://tech.slashdot.org/story/25/08/28/2128257/amtraks-new-160mph-acela-trains-take-just-as-long-as-the-old-ones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-29, 01:25:00](https://slashdot.org/story/25/08/28/2058255/microsoft-reveals-two-in-house-ai-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Reveals Two In-House AI Models](https://slashdot.org/story/25/08/28/2058255/microsoft-reveals-two-in-house-ai-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-29, 01:09:19](https://lobste.rs/s/gft7eu/expert_lsp_official_elixir_language) - [Expert LSP: Official Elixir Language Server](https://github.com/elixir-lang/expert)
* [2025-08-29, 00:45:00](https://games.slashdot.org/story/25/08/28/1827215/microsoft-expands-xbox-cloud-gaming-to-cheaper-game-pass-tiers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Expands Xbox Cloud Gaming to Cheaper Game Pass Tiers](https://games.slashdot.org/story/25/08/28/1827215/microsoft-expands-xbox-cloud-gaming-to-cheaper-game-pass-tiers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-28, 23:59:00](https://soylentnews.org/article.pl?sid=25/08/28/1211212&amp;from=rss) - [Microsoft&apos;s Windows 95 Release Was 30 Years Ago, the First Time Software Was a Pop Culture Smash](https://soylentnews.org/article.pl?sid=25/08/28/1211212&amp;from=rss)
* [2025-08-28, 21:36:41](https://lobste.rs/s/ikj4ff/flat_monthly_subscription_open_source) - [A flat monthly subscription to open-source LLMs](https://synthetic.new/newsletter/entries/subscriptions)
* [2025-08-28, 20:49:34](https://news.ycombinator.com/item?id=45056878) - [Aspects of modern HTML/CSS you may not be familiar with](https://lyra.horse/blog/2025/08/you-dont-need-js/)
* [2025-08-28, 20:46:22](https://lobste.rs/s/xx7dbi/you_no_longer_need_javascript_overview) - [You no longer need JavaScript: an overview of what makes modern CSS so awesome](https://lyra.horse/blog/2025/08/you-dont-need-js/)
* [2025-08-28, 19:44:36](https://lobste.rs/s/u9kpmw/debian_13_my_list_exciting_new_features) - [Debian 13: My list of exciting new features](https://samueloph.dev/blog/debian-13-my-list-of-exciting-new-things/)
* [2025-08-28, 19:10:00](https://soylentnews.org/article.pl?sid=25/08/27/1455216&amp;from=rss) - [SpaceX’s Latest Dragon Mission Will Breathe More Fire at the Space Station](https://soylentnews.org/article.pl?sid=25/08/27/1455216&amp;from=rss)
* [2025-08-28, 18:17:55](https://lobste.rs/s/cv6v51/writing_mac_ios_apps_shouldn_t_be_so) - [Writing Mac and iOS Apps Shouldn’t Be So Difficult](https://inessential.com/2025/08/28/easy-app-writing.html)
* [2025-08-28, 18:13:13](https://lobste.rs/s/bnc3ue/making_minecraft_spherical) - [Making Minecraft Spherical](https://www.bowerbyte.com/posts/blocky-planet/)
* [2025-08-28, 17:25:33](https://lobste.rs/s/8cwfyx/block_ads_trackers) - [Block ads and trackers](https://lichess.org/ads)
* [2025-08-28, 14:22:00](https://soylentnews.org/article.pl?sid=25/08/27/1449220&amp;from=rss) - [How the Cavefish Lost its Eyes— Again and Again](https://soylentnews.org/article.pl?sid=25/08/27/1449220&amp;from=rss)
* [2025-08-28, 14:12:47](https://lobste.rs/s/ib1oea/i_ll_only_buy_devices_with_grapheneos) - [I&apos;ll only buy devices with GrapheneOS](https://www.jonashietala.se/blog/2025/08/28/ill_only_buy_devices_with_grapheneos/)
* [2025-08-28, 13:37:12](https://lobste.rs/s/ib7eky/sometimes_cpu_cores_are_odd) - [Sometimes CPU cores are odd](https://anubis.techaro.lol/blog/2025/cpu-core-odd)
* [2025-08-28, 12:19:10](https://lobste.rs/s/luvy7m/guessing_game_haskell_style) - [Guessing game: Haskell style](https://entropicthoughts.com/guessing-game-haskell-style)
* [2025-08-28, 12:13:29](https://lobste.rs/s/hfp00w/gmp_damages_amd_zen_5_cpus) - [GMP damages AMD Zen 5 CPUs](https://gmplib.org/gmp-zen5)
* [2025-08-28, 11:12:18](https://lobste.rs/s/rd5gpm/are_people_s_bosses_really_making_them_use) - [Are people’s bosses really making them use AI tools?](https://piccalil.li/blog/are-peoples-bosses-really-making-them-use-ai/)
* [2025-08-28, 09:34:00](https://soylentnews.org/article.pl?sid=25/08/27/2323243&amp;from=rss) - [An Empty Strip and Fewer Tips: is Las Vegas in Trouble?](https://soylentnews.org/article.pl?sid=25/08/27/2323243&amp;from=rss)
* [2025-08-28, 06:09:54](https://lobste.rs/s/dgpbar/open_source_is_one_person) - [Open Source is one person](https://opensourcesecurity.io/2025/08-oss-one-person/)
* [2025-08-28, 04:52:00](https://soylentnews.org/article.pl?sid=25/08/27/1232257&amp;from=rss) - [Science Marches on](https://soylentnews.org/article.pl?sid=25/08/27/1232257&amp;from=rss)
* [2025-08-28, 00:04:00](https://soylentnews.org/article.pl?sid=25/08/27/1225221&amp;from=rss) - [Xz Format Inadequate for General Use](https://soylentnews.org/article.pl?sid=25/08/27/1225221&amp;from=rss)
* [2025-08-27, 19:22:00](https://soylentnews.org/article.pl?sid=25/08/27/1222255&amp;from=rss) - [Google Will Require Developer Verification to Install Android Apps, Including Sideloading](https://soylentnews.org/article.pl?sid=25/08/27/1222255&amp;from=rss)
* [2025-08-27, 14:34:00](https://soylentnews.org/article.pl?sid=25/08/26/1126243&amp;from=rss) - [Postal Services Around the World Suspend Deliveries to US: How Will It Affect You?](https://soylentnews.org/article.pl?sid=25/08/26/1126243&amp;from=rss)
* [2025-08-27, 10:59:37](https://news.ycombinator.com/item?id=45037936) - [Fixing an old .NET Core native library loading issue on Alpine](https://andrewlock.net/fixing-an-old-dotnet-core-native-library-loading-issue-on-alpine/)
* [2025-08-27, 10:11:25](https://news.ycombinator.com/item?id=45037572) - [Intel&apos;s \&quot;Clearwater Forest\&quot; Xeon 7 E-Core CPU Will Be a Beast](https://www.nextplatform.com/2025/08/26/intels-clearwater-forest-xeon-7-e-core-cpu-will-be-a-beast/)
* [2025-08-27, 09:50:05](https://news.ycombinator.com/item?id=45037419) - [Lisp from Nothing, Second Edition](http://t3x.org/lfn/index.html)
* [2025-08-27, 09:48:00](https://soylentnews.org/article.pl?sid=25/08/26/1117241&amp;from=rss) - [Scientists Pioneer Sustainable Carbon Capture From Shrimp Waste](https://soylentnews.org/article.pl?sid=25/08/26/1117241&amp;from=rss)
* [2025-08-27, 09:06:09](https://news.ycombinator.com/item?id=45037109) - [This is my brain on leeches](https://todaythings.substack.com/p/this-is-my-brain-on-leeches)
* [2025-08-27, 06:23:22](https://news.ycombinator.com/item?id=45036052) - [How do I get into the Game Industry – by Garry&apos;s Mod creator](https://garry.net/posts/how-do-i-get-into-the-game-industry)
* [2025-08-27, 05:03:00](https://soylentnews.org/politics/article.pl?sid=25/08/26/1113220&amp;from=rss) - [Trump Threatens Taxes, Bans, for Nations That Tax Big Tech](https://soylentnews.org/politics/article.pl?sid=25/08/26/1113220&amp;from=rss)
* [2025-08-27, 00:16:00](https://soylentnews.org/article.pl?sid=25/08/26/0059245&amp;from=rss) - [Twenty Years After Katrina: How Levee Failures Changed America](https://soylentnews.org/article.pl?sid=25/08/26/0059245&amp;from=rss)
* [2025-08-26, 19:33:00](https://soylentnews.org/article.pl?sid=25/08/26/0056205&amp;from=rss) - [Kelp Forests in Marine Protected Areas are More Resilient to Marine Heatwaves](https://soylentnews.org/article.pl?sid=25/08/26/0056205&amp;from=rss)
* [2025-08-26, 14:49:00](https://soylentnews.org/article.pl?sid=25/08/26/0050212&amp;from=rss) - [Canadian EV Sales Collapse by 35% as Gas Car Purchases Surge](https://soylentnews.org/article.pl?sid=25/08/26/0050212&amp;from=rss)
* [2025-08-26, 10:02:00](https://soylentnews.org/article.pl?sid=25/08/25/197208&amp;from=rss) - [Does 3I/ATLAS Generate its Own Light?](https://soylentnews.org/article.pl?sid=25/08/25/197208&amp;from=rss)
* [2025-08-26, 05:16:00](https://soylentnews.org/article.pl?sid=25/08/25/1248228&amp;from=rss) - [Revolutionary AI Tech Breathes Life Into Virtual Companion Animals](https://soylentnews.org/article.pl?sid=25/08/25/1248228&amp;from=rss)
* [2025-08-26, 00:31:00](https://soylentnews.org/article.pl?sid=25/08/25/1234216&amp;from=rss) - [Oops! Earendel, Most Distant Star Ever Discovered, May Not Actually be a Star](https://soylentnews.org/article.pl?sid=25/08/25/1234216&amp;from=rss)
* [2025-08-25, 19:45:00](https://soylentnews.org/article.pl?sid=25/08/25/0225208&amp;from=rss) - [The 8,000-Year History of Great Salt Lake and its Watershed is Recorded in Sediments](https://soylentnews.org/article.pl?sid=25/08/25/0225208&amp;from=rss)
* [2025-08-25, 14:59:00](https://soylentnews.org/article.pl?sid=25/08/24/2253216&amp;from=rss) - [What Happens When AI Comes for Our Fonts?](https://soylentnews.org/article.pl?sid=25/08/24/2253216&amp;from=rss)
* [2025-08-25, 10:15:00](https://soylentnews.org/article.pl?sid=25/08/24/136245&amp;from=rss) - [NASA Challenge Winners Cook Up New Industry Developments](https://soylentnews.org/article.pl?sid=25/08/24/136245&amp;from=rss)
* [2025-08-25, 09:48:53](https://news.ycombinator.com/item?id=45012080) - [Make any site multiplayer in a few lines. Serverless WebRTC matchmaking](https://oxism.com/trystero/)
* [2025-08-25, 05:30:00](https://soylentnews.org/article.pl?sid=25/08/24/1253242&amp;from=rss) - [Radio Waves Can Strengthen Sense of Smell](https://soylentnews.org/article.pl?sid=25/08/24/1253242&amp;from=rss)
* [2025-08-25, 00:50:00](https://soylentnews.org/article.pl?sid=25/08/23/2218218&amp;from=rss) - [Creative Commons Becomes an Official UNESCO NGO Partner](https://soylentnews.org/article.pl?sid=25/08/23/2218218&amp;from=rss)
