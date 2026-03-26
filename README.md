# [News Summary](https://kherrick.github.io/news-summary/)

## Innovations and Emerging Technologies

* [Show HN: Robust LLM Extractor for Websites in TypeScript](https://news.ycombinator.com/item?id=47526486) - [Robust LLM Extractor for Websites in TypeScript](https://github.com/lightfeed/extractor)

* [NASA Sets 'Impossible' Ground Rules for Relocation of 'Flown Space Vehicle'](https://soylentnews.org/article.pl?sid=26/03/23/163239&from=rss) - [Read Article](https://soylentnews.org/article.pl?sid=26/03/23/163239&from=rss)

* [Sodium-ion EV battery breakthrough delivers 11-min charging and 450 km range](https://news.ycombinator.com/item?id=47522608) - [Sodium-ion EV battery breakthrough delivers 11-min charging and 450 km range](https://electrek.co/2026/03/25/sodium-ion-ev-battery-delivers-11-min-charging-450-km-range/)

* [FreeCAD v1.1](https://news.ycombinator.com/item?id=47521945) - [FreeCAD Version 1.1 Released](https://blog.freecad.org/2026/03/25/freecad-version-1-1-released/)

## Cybersecurity and Privacy Concerns

* [Electric Motorcycles are a Security Nightmare](https://lobste.rs/s/vyixek/electric_motorcycles_are_security) - [Electric Motorcycles Security Analysis](https://persephonekarnstein.github.io/post/zero-days/)

* [The EU still wants to scan your private messages and photos](https://news.ycombinator.com/item?id=47522709) - [The EU's Continued Push for Message and Photo Scanning](https://fightchatcontrol.eu/?foo=bar)

* [The FBI is Buying Americans’ Location Data](https://soylentnews.org/article.pl?sid=26/03/23/1543235&from=rss) - [Read Article](https://soylentnews.org/article.pl?sid=26/03/23/1543235&from=rss)

## Artificial Intelligence and Machine Learning

* [Meta and YouTube Found Negligent in Landmark Social Media Addiction Case](https://meta.slashdot.org/story/26/03/25/1745232/meta-and-youtube-found-negligent-in-landmark-social-media-addiction-case?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Meta and YouTube Found Negligent in Social Media Addiction Case](https://meta.slashdot.org/story/26/03/25/1745232/meta-and-youtube-found-negligent-in-landmark-social-media-addiction-case?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [AI Economy Is a 'Ponzi Scheme,' Says AI Doc Director](https://entertainment.slashdot.org/story/26/03/24/2343243/ai-economy-is-a-ponzi-scheme-says-ai-doc-director?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [AI Economy Criticism](https://entertainment.slashdot.org/story/26/03/24/2343243/ai-economy-is-a-ponzi-scheme-says-ai-doc-director?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Technological Controversies and Public Policies

* [Postal Service to Impose Its First-Ever Fuel Surcharge on Packages](https://tech.slashdot.org/story/26/03/25/2258234/postal-service-to-impose-its-first-ever-fuel-surcharge-on-packages?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [US Postal Service Implements Fuel Surcharge](https://tech.slashdot.org/story/26/03/25/2258234/postal-service-to-impose-its-first-ever-fuel-surcharge-on-packages?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Canada's Immigration Rejected Applicant Based On AI-Invented Job Duties](https://news.slashdot.org/story/26/03/25/204204/canadas-immigration-rejected-applicant-based-on-ai-invented-job-duties?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [AI Controversies in Canadian Immigration System](https://news.slashdot.org/story/26/03/25/204204/canadas-immigration-rejected-applicant-based-on-ai-invented-job-duties?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Historical and Cultural Stories

* [Brazil's UFO Capital Marks 30 Years Since 'Alien Encounter'](https://entertainment.slashdot.org/story/26/03/25/2322210/brazils-ufo-capital-marks-30-years-since-alien-encounter?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Anniversary of Brazilian Alien Encounter](https://entertainment.slashdot.org/story/26/03/25/2322210/brazils-ufo-capital-marks-30-years-since-alien-encounter?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Mistaken Identity in Hong Kong National Security Laws](https://yro.slashdot.org/story/26/03/24/2138225/hong-kong-police-can-demand-passwords-under-new-national-security-rules?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Hong Kong Limiting Privacy Further](https://yro.slashdot.org/story/26/03/24/2138225/hong-kong-police-can-demand-passwords-under-new-national-security-rules?utm_source=rss1.0mainlinkanon&utm_medium=feed)

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

* [2026-03-26, 03:55:52](https://news.ycombinator.com/item?id=47526486) - [Show HN: Robust LLM Extractor for Websites in TypeScript](https://github.com/lightfeed/extractor)
* [2026-03-26, 03:30:00](https://entertainment.slashdot.org/story/26/03/25/2322210/brazils-ufo-capital-marks-30-years-since-alien-encounter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Brazil&apos;s UFO Capital Marks 30 Years Since &apos;Alien Encounter&apos;](https://entertainment.slashdot.org/story/26/03/25/2322210/brazils-ufo-capital-marks-30-years-since-alien-encounter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-26, 02:12:00](https://soylentnews.org/article.pl?sid=26/03/23/163239&amp;from=rss) - [NASA Sets &apos;Impossible&apos; Ground Rules for Relocation of &apos;Flown Space Vehicle&apos;](https://soylentnews.org/article.pl?sid=26/03/23/163239&amp;from=rss)
* [2026-03-26, 01:57:23](https://lobste.rs/s/vyixek/electric_motorcycles_are_security) - [Electric Motorcycles are a Security Nightmare](https://persephonekarnstein.github.io/post/zero-days/)
* [2026-03-26, 01:32:17](https://lobste.rs/s/xwl4yi/read_receipts_imessage_simulator) - [Read Receipts: An iMessage Simulator](https://readreceipts.org/create?thread=266ca5fb-3c60-4486-8c98-7579590a3b7f)
* [2026-03-26, 00:46:31](https://news.ycombinator.com/item?id=47525378) - [False claims in a widely-cited paper](https://statmodeling.stat.columbia.edu/2026/03/24/false-claims-in-a-published-no-corrections-no-consequences-welcome-to-the-business-school/)
* [2026-03-25, 23:56:51](https://lobste.rs/s/iqctrn/vim_classic_long_term_maintenance_vim_8_x) - [vim-classic: Long-term maintenance of Vim 8.x](https://sr.ht/~sircmpwn/vim-classic/)
* [2026-03-25, 23:30:55](https://news.ycombinator.com/item?id=47524719) - [Woman who never stopped updating her lost dog&apos;s chip reunites with him after 11y](https://www.cbc.ca/radio/asithappens/11-year-dog-reunion-9.7140780)
* [2026-03-25, 23:29:13](https://news.ycombinator.com/item?id=47524704) - [Show HN: A plain-text cognitive architecture for Claude Code](https://lab.puga.com.br/cog/)
* [2026-03-25, 23:11:34](https://news.ycombinator.com/item?id=47524519) - [\&quot;Disregard That\&quot; Attacks](https://calpaterson.com/disregard.html)
* [2026-03-25, 23:00:00](https://tech.slashdot.org/story/26/03/25/2258234/postal-service-to-impose-its-first-ever-fuel-surcharge-on-packages?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Postal Service to Impose Its First-Ever Fuel Surcharge on Packages](https://tech.slashdot.org/story/26/03/25/2258234/postal-service-to-impose-its-first-ever-fuel-surcharge-on-packages?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-25, 22:43:44](https://lobste.rs/s/xpx9vi/shell_tricks_actually_make_life_easier) - [Shell Tricks That Actually Make Life Easier (And Save Your Sanity)](https://blog.hofstede.it/shell-tricks-that-actually-make-life-easier-and-save-your-sanity/)
* [2026-03-25, 22:00:00](https://news.slashdot.org/story/26/03/25/204204/canadas-immigration-rejected-applicant-based-on-ai-invented-job-duties?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Canada&apos;s Immigration Rejected Applicant Based On AI-Invented Job Duties](https://news.slashdot.org/story/26/03/25/204204/canadas-immigration-rejected-applicant-based-on-ai-invented-job-duties?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-25, 21:26:00](https://soylentnews.org/article.pl?sid=26/03/23/1558231&amp;from=rss) - [The 49MB Web Page](https://soylentnews.org/article.pl?sid=26/03/23/1558231&amp;from=rss)
* [2026-03-25, 21:11:57](https://news.ycombinator.com/item?id=47523330) - [Running Tesla Model 3&apos;s computer on my desk using parts from crashed cars](https://bugs.xdavidhu.me/tesla/2026/03/23/running-tesla-model-3s-computer-on-my-desk-using-parts-from-crashed-cars/)
* [2026-03-25, 21:00:00](https://apple.slashdot.org/story/26/03/25/1948215/apple-can-create-smaller-on-device-ai-models-from-googles-gemini?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Can Create Smaller On-Device AI Models From Google&apos;s Gemini](https://apple.slashdot.org/story/26/03/25/1948215/apple-can-create-smaller-on-device-ai-models-from-googles-gemini?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-25, 20:58:43](https://news.ycombinator.com/item?id=47523169) - [Health NZ staff told to stop using ChatGPT to write clinical notes](https://www.rnz.co.nz/news/national/590645/health-nz-staff-told-to-stop-using-chatgpt-to-write-clinical-notes)
* [2026-03-25, 20:27:03](https://news.ycombinator.com/item?id=47522709) - [The EU still wants to scan  your private messages and photos](https://fightchatcontrol.eu/?foo=bar)
* [2026-03-25, 20:19:58](https://news.ycombinator.com/item?id=47522608) - [Sodium-ion EV battery breakthrough delivers 11-min charging and 450 km range](https://electrek.co/2026/03/25/sodium-ion-ev-battery-delivers-11-min-charging-450-km-range/)
* [2026-03-25, 20:00:00](https://yro.slashdot.org/story/26/03/25/1717205/supreme-court-sides-with-internet-provider-in-copyright-fight-over-pirated-music?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Supreme Court Sides With Internet Provider In Copyright Fight Over Pirated Music](https://yro.slashdot.org/story/26/03/25/1717205/supreme-court-sides-with-internet-provider-in-copyright-fight-over-pirated-music?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-25, 19:45:05](https://lobste.rs/s/urwusf/updates_github_copilot_interaction_data) - [Updates to GitHub Copilot interaction data usage policy](https://github.blog/news-insights/company-news/updates-to-github-copilot-interaction-data-usage-policy/)
* [2026-03-25, 19:19:50](https://news.ycombinator.com/item?id=47521945) - [FreeCAD  v1.1](https://blog.freecad.org/2026/03/25/freecad-version-1-1-released/)
* [2026-03-25, 19:17:13](https://lobste.rs/s/wcw7hb/one_file_what_if_your_lockfile_your) - [One File - What if your lockfile and your package list were the same file?](https://merelinux.org/posts/one-file/)
* [2026-03-25, 19:14:42](https://news.ycombinator.com/item?id=47521876) - [Apple randomly closes bug reports unless you \&quot;verify\&quot; the bug remains unfixed](https://lapcatsoftware.com/articles/2026/3/11.html)
* [2026-03-25, 19:09:16](https://news.ycombinator.com/item?id=47521799) - [Updates to GitHub Copilot interaction data usage policy](https://github.blog/news-insights/company-news/updates-to-github-copilot-interaction-data-usage-policy/)
* [2026-03-25, 19:00:00](https://entertainment.slashdot.org/story/26/03/25/1730218/stephen-colbert-to-write-next-lord-of-the-rings-movie?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Stephen Colbert To Write Next &apos;Lord of the Rings&apos; Movie](https://entertainment.slashdot.org/story/26/03/25/1730218/stephen-colbert-to-write-next-lord-of-the-rings-movie?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-25, 18:53:18](https://lobste.rs/s/qnxnwk/apple_s_macos_unix_certification_is_lie) - [Apple’s macOS UNIX certification is a lie (2025)](https://www.osnews.com/story/141633/apples-macos-unix-certification-is-a-lie/)
* [2026-03-25, 18:26:13](https://lobste.rs/s/yeoe5q/which_design_doc_did_human_write) - [Which Design Doc Did a Human Write?](https://refactoringenglish.com/blog/ai-vs-human-design-doc/)
* [2026-03-25, 18:16:40](https://news.ycombinator.com/item?id=47521157) - [90% of Claude-linked output going to GitHub repos w &lt;2 stars](https://www.claudescode.dev/?window=since_launch)
* [2026-03-25, 18:16:03](https://news.ycombinator.com/item?id=47521150) - [ARC-AGI-3](https://arcprize.org/arc-agi/3)
* [2026-03-25, 18:00:00](https://meta.slashdot.org/story/26/03/25/1745232/meta-and-youtube-found-negligent-in-landmark-social-media-addiction-case?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta and YouTube Found Negligent in Landmark Social Media Addiction Case](https://meta.slashdot.org/story/26/03/25/1745232/meta-and-youtube-found-negligent-in-landmark-social-media-addiction-case?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-25, 17:35:54](https://lobste.rs/s/fagjz6/cost_concurrency_coordination) - [The Cost of Concurrency Coordination](https://www.youtube.com/watch?v=tND-wBBZ8RY)
* [2026-03-25, 17:14:43](https://lobste.rs/s/4i8uad/thoughts_on_slowing_fuck_down) - [Thoughts on slowing the fuck down](https://mariozechner.at/posts/2026-03-25-thoughts-on-slowing-the-fuck-down/)
* [2026-03-25, 17:10:21](https://news.ycombinator.com/item?id=47520220) - [Show HN: Optio – Orchestrate AI coding agents in K8s to go from ticket to PR](https://github.com/jonwiggins/optio)
* [2026-03-25, 17:02:45](https://lobste.rs/s/ogjhf1/your_first_parser) - [Your First Parser](https://davesnx.github.io/parseff/guides/first-parser/)
* [2026-03-25, 17:00:00](https://meta.slashdot.org/story/26/03/25/172211/meta-loses-trial-after-arguing-child-exploitation-was-inevitable?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Loses Trial After Arguing Child Exploitation Was &apos;Inevitable&apos;](https://meta.slashdot.org/story/26/03/25/172211/meta-loses-trial-after-arguing-child-exploitation-was-inevitable?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-25, 16:50:49](https://lobste.rs/s/tntlde/mojo_s_not_yet_python) - [Mojo&apos;s not (yet) Python](https://theconsensus.dev/p/2026/03/12/mojos-not-yet-python.html)
* [2026-03-25, 16:41:00](https://soylentnews.org/article.pl?sid=26/03/23/1555204&amp;from=rss) - [OpenAI Delays AI Porn Feature Over Safety Uproar](https://soylentnews.org/article.pl?sid=26/03/23/1555204&amp;from=rss)
* [2026-03-25, 16:26:02](https://lobste.rs/s/4qpylt/compiler_crates) - [Compiler Crates](https://sdiehl.github.io/compiler-crates/)
* [2026-03-25, 16:20:18](https://lobste.rs/s/r1kw47/openbsd_on_motorola_88000_processors) - [OpenBSD on Motorola 88000 processors](http://miod.online.fr/software/openbsd/stories/m88k1.html)
* [2026-03-25, 16:09:52](https://lobste.rs/s/om9yw4/replacing_disqus_with_mastodon_comments) - [Replacing Disqus with Mastodon Comments](https://jonhnnyweslley.net/blog/mastodon-comments/)
* [2026-03-25, 16:06:34](https://news.ycombinator.com/item?id=47519295) - [Quantization from the Ground Up](https://ngrok.com/blog/quantization)
* [2026-03-25, 16:00:00](https://entertainment.slashdot.org/story/26/03/24/2343243/ai-economy-is-a-ponzi-scheme-says-ai-doc-director?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Economy Is a &apos;Ponzi Scheme,&apos; Says AI Doc Director](https://entertainment.slashdot.org/story/26/03/24/2343243/ai-economy-is-a-ponzi-scheme-says-ai-doc-director?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-25, 15:02:56](https://news.ycombinator.com/item?id=47518281) - [Supreme Court Sides with Cox in Copyright Fight over Pirated Music](https://www.nytimes.com/2026/03/25/us/politics/supreme-court-cox-music-copyright.html)
* [2026-03-25, 15:00:00](https://tech.slashdot.org/story/26/03/24/2329218/china-is-mass-producing-hypersonic-missiles-for-99000?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Is Mass-Producing Hypersonic Missiles For $99,000](https://tech.slashdot.org/story/26/03/24/2329218/china-is-mass-producing-hypersonic-missiles-for-99000?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-25, 14:30:51](https://lobste.rs/s/ocrjck/disregard_attacks) - [\&quot;Disregard that!\&quot; attacks](https://calpaterson.com/disregard.html)
* [2026-03-25, 14:12:04](https://news.ycombinator.com/item?id=47517606) - [Earthquake scientists reveal how overplowing weakens soil at experimental farm](https://www.washington.edu/news/2026/03/19/earthquake-scientists-reveal-how-overplowing-weakens-soil-at-experimental-farm/)
* [2026-03-25, 14:11:49](https://lobste.rs/s/b1kdqd/announcing_lix_2_95_kakigori) - [Announcing Lix 2.95 “Kakigōri”](https://lix.systems/blog/2026-03-25-lix-2.95-release/)
* [2026-03-25, 14:07:14](https://news.ycombinator.com/item?id=47517539) - [Thoughts on slowing the fuck down](https://mariozechner.at/posts/2026-03-25-thoughts-on-slowing-the-fuck-down/)
* [2026-03-25, 14:03:06](https://lobste.rs/s/oxkpme/introducing_gnome_fellowship_program) - [Introducing the GNOME Fellowship program](https://blogs.gnome.org/foundation/2026/03/24/introducing-gnome-fellowship/)
* [2026-03-25, 13:07:40](https://lobste.rs/s/epq3vv/introducing_ipxlat_stateless_ipv4_ipv6) - [Introducing ipxlat: a stateless IPv4/IPv6 translation device](https://lore.kernel.org/netdev/20260319151230.655687-1-ralf@mandelbit.com/)
* [2026-03-25, 11:55:00](https://soylentnews.org/article.pl?sid=26/03/23/1550203&amp;from=rss) - [I Hacked ChatGPT and Google&apos;s AI](https://soylentnews.org/article.pl?sid=26/03/23/1550203&amp;from=rss)
* [2026-03-25, 11:07:43](https://lobste.rs/s/i8q7uf/ubuntu_looks_strip_grub_bare_minimum_for) - [Ubuntu Looks To Strip GRUB To The Bare Minimum For Better Security](https://discourse.ubuntu.com/t/streamlining-secure-boot-for-26-10/79069)
* [2026-03-25, 11:00:00](https://science.slashdot.org/story/26/03/24/2334230/chandra-resolves-why-black-holes-hit-the-brakes-on-growth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chandra Resolves Why Black Holes Hit the Brakes On Growth](https://science.slashdot.org/story/26/03/24/2334230/chandra-resolves-why-black-holes-hit-the-brakes-on-growth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-25, 10:36:39](https://lobste.rs/s/xv13en/vitruvianos) - [VitruvianOS](https://v-os.dev/)
* [2026-03-25, 10:28:49](https://news.ycombinator.com/item?id=47515502) - [I tried to prove I&apos;m not AI. My aunt wasn&apos;t convinced](https://www.bbc.com/future/article/20260324-i-tried-to-prove-im-not-an-ai-deepfake)
* [2026-03-25, 10:07:52](https://lobste.rs/s/zy8rgm/fyrox_1_0_0) - [Fyrox 1.0.0](https://fyrox.rs/blog/post/fyrox-game-engine-1-0-0/)
* [2026-03-25, 08:37:47](https://lobste.rs/s/tponua/forking_httpx_as_httpxyz) - [Forking httpx as httpxyz](https://tildeweb.nl/~michiel/httpxyz.html)
* [2026-03-25, 07:08:00](https://soylentnews.org/article.pl?sid=26/03/23/1543235&amp;from=rss) - [The FBI is Buying Americans’ Location Data](https://soylentnews.org/article.pl?sid=26/03/23/1543235&amp;from=rss)
* [2026-03-25, 07:00:00](https://science.slashdot.org/story/26/03/24/2145230/nasa-halts-work-on-gateway-to-develop-a-lunar-base?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Halts Work On Gateway To Develop a Lunar Base](https://science.slashdot.org/story/26/03/24/2145230/nasa-halts-work-on-gateway-to-develop-a-lunar-base?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-25, 06:00:32](https://lobste.rs/s/lzxb0m/magic_link_pitfalls) - [Magic Link Pitfalls](https://etodd.io/2026/03/22/magic-link-pitfalls/)
* [2026-03-25, 04:27:14](https://news.ycombinator.com/item?id=47513229) - [Miscellanea: The War in Iran](https://acoup.blog/2026/03/25/miscellanea-the-war-in-iran/)
* [2026-03-25, 03:30:00](https://yro.slashdot.org/story/26/03/24/2138225/hong-kong-police-can-demand-passwords-under-new-national-security-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hong Kong Police Can Demand Passwords Under New National Security Rules](https://yro.slashdot.org/story/26/03/24/2138225/hong-kong-police-can-demand-passwords-under-new-national-security-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-25, 03:17:06](https://news.ycombinator.com/item?id=47512816) - [VitruvianOS – Desktop Linux Inspired by the BeOS](https://v-os.dev)
* [2026-03-25, 02:23:00](https://soylentnews.org/article.pl?sid=26/03/23/0124221&amp;from=rss) - [Particle Discovered at CERN Solves a 20-Year-Old Mystery](https://soylentnews.org/article.pl?sid=26/03/23/0124221&amp;from=rss)
* [2026-03-24, 23:00:00](https://tech.slashdot.org/story/26/03/24/1946246/wine-11-rewrites-how-linux-runs-windows-games-at-the-kernel-level?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wine 11 Rewrites How Linux Runs Windows Games At the Kernel Level](https://tech.slashdot.org/story/26/03/24/1946246/wine-11-rewrites-how-linux-runs-windows-games-at-the-kernel-level?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 22:00:00](https://tech.slashdot.org/story/26/03/24/1958223/googles-android-automotive-is-moving-from-the-dashboard-to-the-brain-of-the-car?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s Android Automotive Is Moving From the Dashboard To the &apos;Brain&apos; of the Car](https://tech.slashdot.org/story/26/03/24/1958223/googles-android-automotive-is-moving-from-the-dashboard-to-the-brain-of-the-car?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 21:54:27](https://news.ycombinator.com/item?id=47509984) - [Jury finds Meta liable in case over child sexual exploitation on its platforms](https://www.cnn.com/2026/03/24/tech/meta-new-mexico-trial-jury-deliberation)
* [2026-03-24, 21:38:44](https://lobste.rs/s/7s4sjp/u_fdfd_arabic_ligature_bismillah_ar) - [\&quot;﷽\&quot; U+FDFD: ARABIC LIGATURE BISMILLAH AR-RAHMAN AR-RAHEEM (Unicode Character)](https://unicodeplus.com/U+FDFD)
* [2026-03-24, 21:36:00](https://soylentnews.org/article.pl?sid=26/03/23/0118220&amp;from=rss) - [FBI Surveils Russia’s Elite Agents Through Google Translate Logs](https://soylentnews.org/article.pl?sid=26/03/23/0118220&amp;from=rss)
* [2026-03-24, 16:55:00](https://soylentnews.org/article.pl?sid=26/03/23/0110201&amp;from=rss) - [Cloudflare Appeals Piracy Shield Fine, Hopes to Kill Italy&apos;s Site-Blocking Law](https://soylentnews.org/article.pl?sid=26/03/23/0110201&amp;from=rss)
* [2026-03-24, 12:10:00](https://soylentnews.org/article.pl?sid=26/03/23/013259&amp;from=rss) - [Musk&apos;s Tactic of Blaming Users for Grok Sex Images May be Foiled by EU Law](https://soylentnews.org/article.pl?sid=26/03/23/013259&amp;from=rss)
* [2026-03-24, 07:21:00](https://soylentnews.org/article.pl?sid=26/03/23/0055212&amp;from=rss) - [Nvidia is Trying to Make a Computer for Orbital AI Data Centers](https://soylentnews.org/article.pl?sid=26/03/23/0055212&amp;from=rss)
* [2026-03-24, 02:34:00](https://soylentnews.org/article.pl?sid=26/03/23/0028246&amp;from=rss) - [Never Mind Band-Aids, Neanderthals Had Antiseptic Birch Tar](https://soylentnews.org/article.pl?sid=26/03/23/0028246&amp;from=rss)
* [2026-03-23, 21:47:00](https://soylentnews.org/article.pl?sid=26/03/22/1834242&amp;from=rss) - [Big Tech’s Security Problem Just Hit Gaming](https://soylentnews.org/article.pl?sid=26/03/22/1834242&amp;from=rss)
* [2026-03-23, 17:02:00](https://soylentnews.org/article.pl?sid=26/03/22/1833208&amp;from=rss) - [Workers Who Love ‘Synergizing Paradigms’ Might be Bad at Their Jobs](https://soylentnews.org/article.pl?sid=26/03/22/1833208&amp;from=rss)
* [2026-03-23, 16:39:53](https://news.ycombinator.com/item?id=47491848) - [More precise elevation data for GraphHopper routing engine](https://www.graphhopper.com/blog/2026/03/23/more-precise-elevation-data-for-graphhopper/)
* [2026-03-23, 16:12:55](https://news.ycombinator.com/item?id=47491481) - [The Mystery of Rennes-Le-Château, Part 1: The Priest&apos;s Treasure](https://www.filfre.net/2026/03/the-mystery-of-rennes-le-chateau-part-1-the-priests-treasure/)
* [2026-03-23, 12:17:00](https://soylentnews.org/article.pl?sid=26/03/22/1822230&amp;from=rss) - [Concerns Due to TrueNAS Moving its Build Repository to Private Servers](https://soylentnews.org/article.pl?sid=26/03/22/1822230&amp;from=rss)
* [2026-03-23, 07:32:00](https://soylentnews.org/article.pl?sid=26/03/21/1413247&amp;from=rss) - [Moltbook Was Peak AI Theater](https://soylentnews.org/article.pl?sid=26/03/21/1413247&amp;from=rss)
* [2026-03-23, 02:42:00](https://soylentnews.org/article.pl?sid=26/03/21/145246&amp;from=rss) - [Commission Says EU Inc Will be in Place by End of 2026](https://soylentnews.org/article.pl?sid=26/03/21/145246&amp;from=rss)
* [2026-03-22, 23:06:57](https://news.ycombinator.com/item?id=47483286) - [My DIY FPGA board can run Quake II](https://blog.mikhe.ch/quake2-on-fpga/part4.html)
* [2026-03-22, 21:54:00](https://soylentnews.org/article.pl?sid=26/03/21/1345242&amp;from=rss) - [Proton Mail Helped FBI Unmask Anonymous ‘Stop Cop City’ Protester](https://soylentnews.org/article.pl?sid=26/03/21/1345242&amp;from=rss)
* [2026-03-22, 17:09:00](https://soylentnews.org/article.pl?sid=26/03/21/1339251&amp;from=rss) - [Wayland Set the Linux Desktop Back by 10 Years](https://soylentnews.org/article.pl?sid=26/03/21/1339251&amp;from=rss)
* [2026-03-22, 15:34:44](https://news.ycombinator.com/item?id=47478599) - [Two studies in compiler optimisations](https://www.hmpcabral.com/2026/03/20/two-studies-in-compiler-optimisations/)
* [2026-03-22, 14:28:06](https://news.ycombinator.com/item?id=47477873) - [My astrophotography in the movie Project Hail Mary](https://rpastro.square.site/s/stories/phm)
* [2026-03-22, 12:22:00](https://soylentnews.org/article.pl?sid=26/03/21/1337239&amp;from=rss) - [Analysis From West Point Warns That Strait of Hormuz Blockade Will Strangle US Defense Industry](https://soylentnews.org/article.pl?sid=26/03/21/1337239&amp;from=rss)
* [2026-03-22, 09:31:08](https://news.ycombinator.com/item?id=47475826) - [Rendering complex scripts in terminal and OSC 66](https://thottingal.in/blog/2026/03/22/complex-scripts-in-terminal/)
* [2026-03-22, 07:37:00](https://soylentnews.org/article.pl?sid=26/03/21/1319201&amp;from=rss) - [This Fungus Can Make Water Freeze](https://soylentnews.org/article.pl?sid=26/03/21/1319201&amp;from=rss)
* [2026-03-22, 02:52:00](https://soylentnews.org/article.pl?sid=26/03/19/208240&amp;from=rss) - [Tech Hobbyist Makes Shoulder-Mounted Guided Missile Prototype With $96 In Parts And A 3D Printer](https://soylentnews.org/article.pl?sid=26/03/19/208240&amp;from=rss)
* [2026-03-22, 01:58:23](https://news.ycombinator.com/item?id=47473673) - [The truth that haunts the Ramones: &apos;They sold more T-shirts than records&apos;](https://english.elpais.com/culture/2026-03-17/the-uncomfortable-truth-that-will-always-haunt-the-ramones-they-sold-more-t-shirts-than-records.html)
