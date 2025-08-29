# [News Summary](https://kherrick.github.io/news-summary/)

## Innovations in Science and Technology

* [Engineers Send Quantum Signals With Standard Internet Protocol](https://tech.slashdot.org/story/25/08/29/0043214/engineers-send-quantum-signals-with-standard-internet-protocol?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A fascinating breakthrough where quantum signals are sent using existing internet protocols, paving the way for advanced communication technologies.

* [Nanoparticles Turn Houseplants Into Night Lights](https://science.slashdot.org/story/25/08/29/0030247/nanoparticles-turn-houseplants-into-night-lights?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Researchers have devised a method to transform houseplants into sustainable sources of light using nanoparticles.

* [Mercedes Demonstrates Five Minute BEV Charging While Setting Speed Records](https://soylentnews.org/article.pl?sid=25/08/28/1214205&amp;from=rss) - Mercedes showcases an EV battery capable of ultra-fast charging and sets records for speed in the process.

## AI and Privacy

* [Meta might be secretly scanning your phone's camera roll](https://www.zdnet.com/article/meta-might-be-secretly-scanning-your-phones-camera-roll-how-to-check-and-turn-it-off/) - Concerns arise over Meta potentially scanning users' camera rolls for undisclosed purposes.

* [How to Stop Google from AI-Summarising Your Website](https://www.teruza.com/info-hub/how-to-stop-google-from-ai-summarising-your-website) - Tips on preventing Google from using AI to automatically summarize web page content.

* [Why AI Isn&apos;t Ready to Be a Real Coder](https://spectrum.ieee.org/ai-for-coding) - An exploration of the current limitations of AI in achieving effective coding autonomy.

## Digital Infrastructure and Software

* [SQLite's Durability Settings Are a Mess](https://www.agwa.name/blog/post/sqlite_durability) - A critique on SQLite's flexibility and challenges with its durability settings, sparking discourse among developers.

* [The web does not need gatekeepers: Cloudflare’s new “signed agents” pitch](https://positiveblue.substack.com/p/the-web-does-not-need-gatekeepers) - A fresh take on keeping the web open in light of Cloudflare's proposed security measures.

* [Data engineering and software engineering are converging](https://clickhouse.com/blog/eight-principles-of-great-developer-experience-for-data-infrastructure) - Analyzing the merger of data and software engineering roles driven by shared developer principles.

## Cybersecurity and Surveillance

* [WhatsApp Fixes 'Zero-Click' Bug Used to Hack Apple Users With Spyware](https://it.slashdot.org/story/25/08/29/2020202/whatsapp-fixes-zero-click-bug-used-to-hack-apple-users-with-spyware?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A significant security flaw in WhatsApp allowing zero-click spyware exploits has been addressed.

* [UK Sought Broad Access To Apple Customers' Data, Court Filing Suggests](https://news.slashdot.org/story/25/08/29/1554214/uk-sought-broad-access-to-apple-customers-data-court-filing-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - UK's alleged legal attempt to gain mass access to Apple user data raises privacy concerns.

* [Pentagon Halts Chinese Coders Affecting DOD Cloud Systems](https://tech.slashdot.org/story/25/08/29/1928258/pentagon-halts-chinese-coders-affecting-dod-cloud-systems?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - U.S. precautionary measures to mitigate potential risks of foreign coding influences on defense technology.

## Historical and Cultural Highlights

* [Microsoft's Windows 95 Release Was 30 Years Ago, the First Time Software Was a Pop Culture Smash](https://soylentnews.org/article.pl?sid=25/08/28/1211212&amp;from=rss) - Reflecting on the transformative launch of Windows 95 and its impact on technology and pop culture.

* [Twenty Years After Katrina: How Levee Failures Changed America](https://soylentnews.org/article.pl?sid=25/08/26/0059245&amp;from=rss) - A look back at Hurricane Katrina's devastation and its influence on infrastructure policies.

* [The 8,000-Year History of Great Salt Lake and its Watershed is Recorded in Sediments](https://soylentnews.org/article.pl?sid=25/08/25/0225208&amp;from=rss) - Geologists uncover thousands of years of climatic history locked within sediments of Utah's Great Salt Lake.

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

* [2025-08-29, 21:21:00](https://tech.slashdot.org/story/25/08/29/2027234/fcc-rejects-calls-for-cable-like-fees-on-broadband-providers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FCC Rejects Calls For Cable-like Fees on Broadband Providers](https://tech.slashdot.org/story/25/08/29/2027234/fcc-rejects-calls-for-cable-like-fees-on-broadband-providers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-29, 20:46:51](https://lobste.rs/s/jx7r3c/do_simplest_thing_could_possibly_work) - [Do the simplest thing that could possibly work](https://www.seangoedecke.com/the-simplest-thing-that-could-possibly-work/)
* [2025-08-29, 20:40:00](https://it.slashdot.org/story/25/08/29/2020202/whatsapp-fixes-zero-click-bug-used-to-hack-apple-users-with-spyware?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [WhatsApp Fixes &apos;Zero-Click&apos; Bug Used To Hack Apple Users With Spyware](https://it.slashdot.org/story/25/08/29/2020202/whatsapp-fixes-zero-click-bug-used-to-hack-apple-users-with-spyware?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-29, 20:28:35](https://news.ycombinator.com/item?id=45069014) - [How to Stop Google from AI-Summarising Your Website](https://www.teruza.com/info-hub/how-to-stop-google-from-ai-summarising-your-website)
* [2025-08-29, 20:25:34](https://news.ycombinator.com/item?id=45068986) - [The Theoretical Limitations of Embedding-Based Retrieval](https://arxiv.org/abs/2508.21038)
* [2025-08-29, 20:01:00](https://tech.slashdot.org/story/25/08/29/1928258/pentagon-halts-chinese-coders-affecting-dod-cloud-systems?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pentagon Halts Chinese Coders Affecting DOD Cloud Systems](https://tech.slashdot.org/story/25/08/29/1928258/pentagon-halts-chinese-coders-affecting-dod-cloud-systems?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-29, 19:25:00](https://news.slashdot.org/story/25/08/29/1829229/ftc-claims-gmail-filtering-republican-emails-threatens-american-freedoms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FTC Claims Gmail Filtering Republican Emails Threatens &apos;American Freedoms&apos;](https://news.slashdot.org/story/25/08/29/1829229/ftc-claims-gmail-filtering-republican-emails-threatens-american-freedoms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-29, 19:20:28](https://news.ycombinator.com/item?id=45068268) - [The No-CPU Amiga Demo Challenge](https://github.com/askeksa/NoCpuChallenge)
* [2025-08-29, 19:15:55](https://news.ycombinator.com/item?id=45068215) - [How did .agakhan, .ismaili and .imamat get their own TLDs?](https://data.iana.org/TLD/tlds-alpha-by-domain.txt)
* [2025-08-29, 19:05:09](https://news.ycombinator.com/item?id=45068091) - [Do the simplest thing that could possibly work](https://www.seangoedecke.com/the-simplest-thing-that-could-possibly-work/)
* [2025-08-29, 18:51:00](https://soylentnews.org/article.pl?sid=25/08/28/1853258&amp;from=rss) - [Linux Foundation Says Yes to NoSQL Via DocumentDB](https://soylentnews.org/article.pl?sid=25/08/28/1853258&amp;from=rss)
* [2025-08-29, 18:43:42](https://news.ycombinator.com/item?id=45067867) - [Data engineering and software engineering are converging](https://clickhouse.com/blog/eight-principles-of-great-developer-experience-for-data-infrastructure)
* [2025-08-29, 18:41:00](https://hardware.slashdot.org/story/25/08/29/1824219/microsoft-says-recent-windows-update-didnt-kill-your-ssd?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Says Recent Windows Update Didn&apos;t Kill Your SSD](https://hardware.slashdot.org/story/25/08/29/1824219/microsoft-says-recent-windows-update-didnt-kill-your-ssd?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-29, 18:23:17](https://lobste.rs/s/acz07b/default_search_engine_wikipedia) - [Default search engine: Wikipedia](https://paste.sr.ht/~awal/2310cfca431e9f723df281d02558eaebd77e2091)
* [2025-08-29, 18:01:00](https://games.slashdot.org/story/25/08/29/1729201/todays-game-consoles-are-historically-overpriced?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Today&apos;s Game Consoles Are Historically Overpriced](https://games.slashdot.org/story/25/08/29/1729201/todays-game-consoles-are-historically-overpriced?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-29, 17:59:13](https://lobste.rs/s/uiekig/pyret_programming_language_for) - [Pyret: A programming language for programming education](https://pyret.org/)
* [2025-08-29, 17:30:29](https://news.ycombinator.com/item?id=45066999) - [SQLite&apos;s Durability Settings Are a Mess](https://www.agwa.name/blog/post/sqlite_durability)
* [2025-08-29, 17:22:00](https://tech.slashdot.org/story/25/08/29/175257/macron-vows-retaliation-if-europes-digital-sovereignty-attacked?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Macron Vows Retaliation If Europe&apos;s Digital Sovereignty Attacked](https://tech.slashdot.org/story/25/08/29/175257/macron-vows-retaliation-if-europes-digital-sovereignty-attacked?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-29, 17:19:27](https://lobste.rs/s/hgpdws/sqlite_s_durability_settings_are_mess) - [SQLite&apos;s Durability Settings are a Mess](https://www.agwa.name/blog/post/sqlite_durability)
* [2025-08-29, 17:00:04](https://news.ycombinator.com/item?id=45066592) - [Thunder Compute (YC S24) Is Hiring](https://www.ycombinator.com/companies/thunder-compute/jobs/sS6QzTi-founding-developer-advocate-contract-to-hire)
* [2025-08-29, 16:48:38](https://lobste.rs/s/1gvza6/best_way_advertise_language) - [The best way to advertise a language](https://www.stylewarning.com/posts/write-programs/)
* [2025-08-29, 16:45:21](https://news.ycombinator.com/item?id=45066395) - [John Carmack&apos;s arguments against building a custom XR OS at Meta](https://twitter.com/ID_AA_Carmack/status/1961172409920491849)
* [2025-08-29, 16:44:00](https://it.slashdot.org/story/25/08/29/1644219/bank-apologizes-for-firing-staff-with-accidental-email?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bank Apologizes For Firing Staff With Accidental Email](https://it.slashdot.org/story/25/08/29/1644219/bank-apologizes-for-firing-staff-with-accidental-email?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-29, 16:35:24](https://news.ycombinator.com/item?id=45066258) - [The web does not need gatekeepers: Cloudflare’s new “signed agents” pitch](https://positiveblue.substack.com/p/the-web-does-not-need-gatekeepers)
* [2025-08-29, 16:24:14](https://news.ycombinator.com/item?id=45066113) - [Bourbaki – A Secret Society of Mathematicians](https://books.google.com/books/about/Bourbaki.html)
* [2025-08-29, 16:20:31](https://news.ycombinator.com/item?id=45066070) - [Offline-First Landscape – 2025](https://marcoapp.io/blog/offline-first-landscape)
* [2025-08-29, 16:19:56](https://news.ycombinator.com/item?id=45066060) - [Wikipedia as a Graph](https://wikigrapher.com/paths)
* [2025-08-29, 16:01:00](https://news.slashdot.org/story/25/08/29/1554214/uk-sought-broad-access-to-apple-customers-data-court-filing-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Sought Broad Access To Apple Customers&apos; Data, Court Filing Suggests](https://news.slashdot.org/story/25/08/29/1554214/uk-sought-broad-access-to-apple-customers-data-court-filing-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-29, 15:53:41](https://news.ycombinator.com/item?id=45065705) - [Essential Coding Theory [pdf]](https://cse.buffalo.edu/faculty/atri/courses/coding-theory/book/web-coding-book.pdf)
* [2025-08-29, 15:50:08](https://lobste.rs/s/gkfnb7/hygguile_ui_with_scheme) - [hygguile: UI with Scheme](https://codeberg.org/jjba23/hygguile)
* [2025-08-29, 15:31:15](https://news.ycombinator.com/item?id=45065425) - [God Created the Real Numbers](https://www.ethanheilman.com/x/34/index.html)
* [2025-08-29, 15:28:17](https://lobste.rs/s/imftzh/god_created_real_numbers) - [God created the real numbers](https://www.ethanheilman.com/x/34/index.html)
* [2025-08-29, 15:24:13](https://news.ycombinator.com/item?id=45065343) - [Why AI Isn&apos;t Ready to Be a Real Coder](https://spectrum.ieee.org/ai-for-coding)
* [2025-08-29, 15:21:00](https://news.slashdot.org/story/25/08/29/1519214/georgia-tech-is-teaching-other-universities-a-fundraising-lesson?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Georgia Tech Is Teaching Other Universities a Fundraising Lesson](https://news.slashdot.org/story/25/08/29/1519214/georgia-tech-is-teaching-other-universities-a-fundraising-lesson?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-29, 14:41:00](https://news.slashdot.org/story/25/08/29/1441223/steam-users-in-the-uk-will-need-a-credit-card-to-access-mature-content-games?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Steam Users in the UK Will Need a Credit Card To Access &apos;Mature Content&apos; Games](https://news.slashdot.org/story/25/08/29/1441223/steam-users-in-the-uk-will-need-a-credit-card-to-access-mature-content-games?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-29, 14:07:28](https://news.ycombinator.com/item?id=45064329) - [Deploying DeepSeek on 96 H100 GPUs](https://lmsys.org/blog/2025-05-05-large-scale-ep/)
* [2025-08-29, 14:07:00](https://soylentnews.org/article.pl?sid=25/08/28/1849238&amp;from=rss) - [Large Reasoning Models Hitting Limits, Say Apple Researchers](https://soylentnews.org/article.pl?sid=25/08/28/1849238&amp;from=rss)
* [2025-08-29, 14:02:59](https://news.ycombinator.com/item?id=45064284) - [Flunking my Anthropic interview again](https://taylor.town/flunking-anthropic)
* [2025-08-29, 14:00:00](https://tech.slashdot.org/story/25/08/29/1116218/a-troubled-man-his-chatbot-and-a-murder-suicide-in-old-greenwich?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Troubled Man, His Chatbot and a Murder-Suicide in Old Greenwich](https://tech.slashdot.org/story/25/08/29/1116218/a-troubled-man-his-chatbot-and-a-murder-suicide-in-old-greenwich?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-29, 13:56:50](https://news.ycombinator.com/item?id=45064210) - [Show HN: Find Hidden Gems on HN](https://pj4533.com/hn-overlooked/)
* [2025-08-29, 13:30:16](https://news.ycombinator.com/item?id=45063874) - [Show HN: Sosumi.ai – Convert Apple Developer docs to AI-readable Markdown](https://sosumi.ai/)
* [2025-08-29, 13:01:45](https://news.ycombinator.com/item?id=45063559) - [Grok Code Fast 1](https://x.ai/news/grok-code-fast-1)
* [2025-08-29, 13:00:00](https://tech.slashdot.org/story/25/08/29/0043214/engineers-send-quantum-signals-with-standard-internet-protocol?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Engineers Send Quantum Signals With Standard Internet Protocol](https://tech.slashdot.org/story/25/08/29/0043214/engineers-send-quantum-signals-with-standard-internet-protocol?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-29, 12:41:15](https://lobste.rs/s/zwtv1j/mystical_postscript) - [Mystical Postscript](https://github.com/denismm/mystical_ps)
* [2025-08-29, 12:01:31](https://news.ycombinator.com/item?id=45062910) - [Meta might be secretly scanning your phone&apos;s camera roll](https://www.zdnet.com/article/meta-might-be-secretly-scanning-your-phones-camera-roll-how-to-check-and-turn-it-off/)
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
* [2025-08-29, 01:09:19](https://lobste.rs/s/gft7eu/expert_lsp_official_elixir_language) - [Expert LSP: Official Elixir Language Server](https://github.com/elixir-lang/expert)
* [2025-08-28, 23:59:00](https://soylentnews.org/article.pl?sid=25/08/28/1211212&amp;from=rss) - [Microsoft&apos;s Windows 95 Release Was 30 Years Ago, the First Time Software Was a Pop Culture Smash](https://soylentnews.org/article.pl?sid=25/08/28/1211212&amp;from=rss)
* [2025-08-28, 20:46:22](https://lobste.rs/s/xx7dbi/you_no_longer_need_javascript_overview) - [You no longer need JavaScript: an overview of what makes modern CSS so awesome](https://lyra.horse/blog/2025/08/you-dont-need-js/)
* [2025-08-28, 19:44:36](https://lobste.rs/s/u9kpmw/debian_13_my_list_exciting_new_features) - [Debian 13: My list of exciting new features](https://samueloph.dev/blog/debian-13-my-list-of-exciting-new-things/)
* [2025-08-28, 19:10:00](https://soylentnews.org/article.pl?sid=25/08/27/1455216&amp;from=rss) - [SpaceX’s Latest Dragon Mission Will Breathe More Fire at the Space Station](https://soylentnews.org/article.pl?sid=25/08/27/1455216&amp;from=rss)
* [2025-08-28, 18:17:55](https://lobste.rs/s/cv6v51/writing_mac_ios_apps_shouldn_t_be_so) - [Writing Mac and iOS Apps Shouldn’t Be So Difficult](https://inessential.com/2025/08/28/easy-app-writing.html)
* [2025-08-28, 18:13:13](https://lobste.rs/s/bnc3ue/making_minecraft_spherical) - [Making Minecraft Spherical](https://www.bowerbyte.com/posts/blocky-planet/)
* [2025-08-28, 17:25:33](https://lobste.rs/s/8cwfyx/block_ads_trackers) - [Block ads and trackers](https://lichess.org/ads)
* [2025-08-28, 14:22:00](https://soylentnews.org/article.pl?sid=25/08/27/1449220&amp;from=rss) - [How the Cavefish Lost its Eyes— Again and Again](https://soylentnews.org/article.pl?sid=25/08/27/1449220&amp;from=rss)
* [2025-08-28, 14:12:47](https://lobste.rs/s/ib1oea/i_ll_only_buy_devices_with_grapheneos) - [I&apos;ll only buy devices with GrapheneOS](https://www.jonashietala.se/blog/2025/08/28/ill_only_buy_devices_with_grapheneos/)
* [2025-08-28, 13:37:12](https://lobste.rs/s/ib7eky/sometimes_cpu_cores_are_odd) - [Sometimes CPU cores are odd](https://anubis.techaro.lol/blog/2025/cpu-core-odd)
* [2025-08-28, 11:12:18](https://lobste.rs/s/rd5gpm/are_people_s_bosses_really_making_them_use) - [Are people’s bosses really making them use AI tools?](https://piccalil.li/blog/are-peoples-bosses-really-making-them-use-ai/)
* [2025-08-28, 09:34:00](https://soylentnews.org/article.pl?sid=25/08/27/2323243&amp;from=rss) - [An Empty Strip and Fewer Tips: is Las Vegas in Trouble?](https://soylentnews.org/article.pl?sid=25/08/27/2323243&amp;from=rss)
* [2025-08-28, 06:09:54](https://lobste.rs/s/dgpbar/open_source_is_one_person) - [Open Source is one person](https://opensourcesecurity.io/2025/08-oss-one-person/)
* [2025-08-28, 04:52:00](https://soylentnews.org/article.pl?sid=25/08/27/1232257&amp;from=rss) - [Science Marches on](https://soylentnews.org/article.pl?sid=25/08/27/1232257&amp;from=rss)
* [2025-08-28, 00:04:00](https://soylentnews.org/article.pl?sid=25/08/27/1225221&amp;from=rss) - [Xz Format Inadequate for General Use](https://soylentnews.org/article.pl?sid=25/08/27/1225221&amp;from=rss)
* [2025-08-27, 19:22:00](https://soylentnews.org/article.pl?sid=25/08/27/1222255&amp;from=rss) - [Google Will Require Developer Verification to Install Android Apps, Including Sideloading](https://soylentnews.org/article.pl?sid=25/08/27/1222255&amp;from=rss)
* [2025-08-27, 14:34:00](https://soylentnews.org/article.pl?sid=25/08/26/1126243&amp;from=rss) - [Postal Services Around the World Suspend Deliveries to US: How Will It Affect You?](https://soylentnews.org/article.pl?sid=25/08/26/1126243&amp;from=rss)
* [2025-08-27, 10:59:37](https://news.ycombinator.com/item?id=45037936) - [Fixing an old .NET Core native library loading issue on Alpine](https://andrewlock.net/fixing-an-old-dotnet-core-native-library-loading-issue-on-alpine/)
* [2025-08-27, 09:50:05](https://news.ycombinator.com/item?id=45037419) - [Lisp from Nothing, Second Edition](http://t3x.org/lfn/index.html)
* [2025-08-27, 09:48:00](https://soylentnews.org/article.pl?sid=25/08/26/1117241&amp;from=rss) - [Scientists Pioneer Sustainable Carbon Capture From Shrimp Waste](https://soylentnews.org/article.pl?sid=25/08/26/1117241&amp;from=rss)
* [2025-08-27, 09:07:49](https://news.ycombinator.com/item?id=45037120) - [What Does will-change In CSS Do?](https://jakub.kr/components/will-change-in-css)
* [2025-08-27, 09:06:09](https://news.ycombinator.com/item?id=45037109) - [This is my brain on leeches](https://todaythings.substack.com/p/this-is-my-brain-on-leeches)
* [2025-08-27, 08:58:38](https://news.ycombinator.com/item?id=45037064) - [Nous Research presents Hermes 4](https://hermes4.nousresearch.com/)
* [2025-08-27, 06:23:22](https://news.ycombinator.com/item?id=45036052) - [How do I get into the Game Industry](https://garry.net/posts/how-do-i-get-into-the-game-industry)
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
* [2025-08-25, 05:30:00](https://soylentnews.org/article.pl?sid=25/08/24/1253242&amp;from=rss) - [Radio Waves Can Strengthen Sense of Smell](https://soylentnews.org/article.pl?sid=25/08/24/1253242&amp;from=rss)
* [2025-08-25, 00:50:00](https://soylentnews.org/article.pl?sid=25/08/23/2218218&amp;from=rss) - [Creative Commons Becomes an Official UNESCO NGO Partner](https://soylentnews.org/article.pl?sid=25/08/23/2218218&amp;from=rss)
