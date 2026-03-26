# [News Summary](https://kherrick.github.io/news-summary/)

## Advances in Technology and Research

* [Micron Predicts That Cars Will Need 300GB of RAM](https://soylentnews.org/article.pl?sid=26/03/25/2341257&amp;from=rss) - Micron highlights the ever-growing computational demands of modern vehicles, predicting a significant leap in memory requirements for cars.

* [The Mystery of How Volcanic Lightning Happens Has Been Solved](https://soylentnews.org/article.pl?sid=26/03/25/2339207&amp;from=rss) - Researchers uncover the processes behind the phenomenon of volcanic lightning, shedding light on this mysterious natural occurrence.

* [Particle Discovered at CERN Solves a 20-Year-Old Mystery](https://soylentnews.org/article.pl?sid=26/03/23/0124221&amp;from=rss) - A groundbreaking discovery at CERN finally addresses a long-standing mystery in physics.

* [This Fungus Can Make Water Freeze](https://soylentnews.org/article.pl?sid=26/03/21/1319201&amp;from=rss) - Scientists explore an intriguing fungus that revolutionizes our understanding of freezing processes.

* [NASA Halts Work On Gateway To Develop a Lunar Base](https://science.slashdot.org/story/26/03/24/2145230/nasa-halts-work-on-gateway-to-develop-a-lunar-base?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - NASA revises its priorities, putting its Gateway project on hold in favor of developing a lunar base.

## Privacy, Surveillance, and Security

* [European Parliament decided that Chat Control 1.0 must stop](https://bsky.app/profile/tuta.com/post/3mhxkfowv322c) - The European Parliament votes to end the controversial Chat Control 1.0 mass surveillance measures.

* [Government agencies buy commercial data about Americans in bulk](https://www.npr.org/2026/03/25/nx-s1-5752369/ice-surveillance-data-brokers-congress-anthropic) - A report reveals U.S. government agencies purchasing large amounts of private American citizens' data from commercial sources.

* [Hong Kong Police Can Demand Passwords Under New National Security Rules](https://yro.slashdot.org/story/26/03/24/2138225/hong-kong-police-can-demand-passwords-under-new-national-security-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - New legislation in Hong Kong grants police the power to demand passwords, sparking debates over privacy rights.

* [Large-scale online deanonymization with LLMs](https://arxiv.org/abs/2602.16800) - Researchers discuss methods and tools for deanonymizing individuals online using large language models.

## Social Impact of Technology

* [Landmark L.A. jury verdict finds Instagram, YouTube were designed to addict kids](https://www.latimes.com/california/story/2026-03-25/social-media-lawsuit-trial-meta-google-verdict) - Social media giants face a significant legal judgment around addictive design practices targeting children.

* [Meta Loses Trial After Arguing Child Exploitation Was 'Inevitable'](https://meta.slashdot.org/story/26/03/25/172211/meta-loses-trial-after-arguing-child-exploitation-was-inevitable?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A court case finding that challenged Meta's defense in a child exploitation lawsuit highlights corporate responsibility in social media.

* [Meta and YouTube Found Negligent in Landmark Social Media Addiction Case](https://meta.slashdot.org/story/26/03/25/1745232/meta-and-youtube-found-negligent-in-landmark-social-media-addiction-case?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A powerful legal ruling against major social media platforms emphasizes the impact of their platforms on user addiction.

## Programming and Development

* [Deploying Go Apps to Google Cloud Run](https://www.josephspurrier.com/google-cloud-run-deployment) - A detailed guide on deploying Go applications to Google Cloud Run for developers looking to streamline cloud deployment.

* [CESIL and other programming languages](http://blog.scribblings.com/progaming-languages-1-cesil) - A nostalgic look at historic programming languages and their influence on modern software development.

* [Which Design Doc Did a Human Write?](https://refactoringenglish.com/blog/ai-vs-human-design-doc/) - An intriguing exploration into differentiating between human and AI-generated design documents.

## Cultural and Societal Insights

* [Obsolete Sounds](https://citiesandmemory.com/obsolete-sounds/) - A creative project that preserves and catalogs sounds that are vanishing from contemporary life.

* [Brazil's UFO Capital Marks 30 Years Since 'Alien Encounter'](https://entertainment.slashdot.org/story/26/03/25/2322210/brazils-ufo-capital-marks-30-years-since-alien-encounter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A small Brazilian town commemorates the 30th anniversary of a legendary alien encounter.

* [The truth that haunts the Ramones: 'They sold more T-shirts than records'](https://english.elpais.com/culture/2026-03-17/the-uncomfortable-truth-that-will-always-haunt-the-ramones-they-sold-more-t-shirts-than-records.html) - Reflecting on the ubiquity of merchandise and the legacy of The Ramones.

## Miscellaneous Highlights

* [A Verilog to Factorio compiler and simulator (working RISC-V CPU)](https://www.reddit.com/r/rust/comments/1s03w2o/my_first_rust_project_a_verilog_to_factorio/) - Ingenious tool turns Verilog code into a functional RISC-V CPU inside the popular game Factorio.

* [Melania Trump Welcomes Humanoid Robot At White House Summit](https://hardware.slashdot.org/story/26/03/26/0545256/melania-trump-welcomes-humanoid-robot-at-white-house-summit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A meeting of futuristic minds as a humanoid robot makes its debut at the White House.

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

* [2026-03-26, 13:31:14](https://lobste.rs/s/1stari/when_vectorized_arrays_aren_t_enough) - [When Vectorized Arrays Aren&apos;t Enough](https://nrposner.com/blog/when-vectorized-arrays-arent-enough/)
* [2026-03-26, 13:01:54](https://lobste.rs/s/e4y5ps/two_studies_compiler_optimisations) - [Two studies in compiler optimisations](https://www.hmpcabral.com/2026/03/20/two-studies-in-compiler-optimisations/)
* [2026-03-26, 12:30:59](https://news.ycombinator.com/item?id=47529646) - [European Parliament decided that Chat Control 1.0 must stop](https://bsky.app/profile/tuta.com/post/3mhxkfowv322c)
* [2026-03-26, 12:24:36](https://news.ycombinator.com/item?id=47529609) - [End of \&quot;Chat Control\&quot;: EU Parliament Stops Mass Surveillance in Voting Thriller](https://www.patrick-breyer.de/en/end-of-chat-control-eu-parliament-stops-mass-surveillance-in-voting-thriller-paving-the-way-for-genuine-child-protection/)
* [2026-03-26, 12:15:33](https://news.ycombinator.com/item?id=47529534) - [Landmark L.A. jury verdict finds Instagram, YouTube were designed to addict kids](https://www.latimes.com/california/story/2026-03-25/social-media-lawsuit-trial-meta-google-verdict)
* [2026-03-26, 11:40:00](https://soylentnews.org/article.pl?sid=26/03/25/2341257&amp;from=rss) - [Micron Predicts That Cars Will Need 300GB of RAM](https://soylentnews.org/article.pl?sid=26/03/25/2341257&amp;from=rss)
* [2026-03-26, 11:11:30](https://lobste.rs/s/xlmyob/cesil_other_programming_languages) - [CESIL and other programming languages](http://blog.scribblings.com/progaming-languages-1-cesil)
* [2026-03-26, 11:00:00](https://yro.slashdot.org/story/26/03/25/2250217/reddit-takes-on-bots-with-human-verification-requirements?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Reddit Takes On Bots With &apos;Human Verification&apos; Requirements](https://yro.slashdot.org/story/26/03/25/2250217/reddit-takes-on-bots-with-human-verification-requirements?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-26, 10:13:38](https://news.ycombinator.com/item?id=47528605) - [LibreOffice and the Art of Overreacting](https://blog.documentfoundation.org/blog/2026/03/25/libreoffice-and-the-art-of-overreacting/)
* [2026-03-26, 10:13:26](https://lobste.rs/s/hjxi2b/deploying_go_apps_google_cloud_run) - [Deploying Go Apps to Google Cloud Run](https://www.josephspurrier.com/google-cloud-run-deployment)
* [2026-03-26, 09:27:34](https://lobste.rs/s/6w8rqm/engineers_do_get_promoted_for_writing) - [Engineers do get promoted for writing simple code](https://www.seangoedecke.com/simple-work-gets-rewarded/)
* [2026-03-26, 07:58:59](https://lobste.rs/s/51ekgy/fedora_moving_from_pagure_forgejo) - [Fedora moving from Pagure to Forgejo](https://communityblog.fedoraproject.org/the-forge-is-our-new-home/)
* [2026-03-26, 07:27:11](https://news.ycombinator.com/item?id=47527590) - [Swift 6.3](https://www.swift.org/blog/swift-6.3-released/)
* [2026-03-26, 07:00:28](https://news.ycombinator.com/item?id=47527399) - [Ashby (YC W19) Is Hiring Engineers Who Make Product Decisions](https://www.ashbyhq.com/careers?ashby_jid=c3c7125d-7883-4dff-a2bf-f5a55de4a364&amp;utm_source=hn)
* [2026-03-26, 07:00:00](https://hardware.slashdot.org/story/26/03/26/0545256/melania-trump-welcomes-humanoid-robot-at-white-house-summit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Melania Trump Welcomes Humanoid Robot At White House Summit](https://hardware.slashdot.org/story/26/03/26/0545256/melania-trump-welcomes-humanoid-robot-at-white-house-summit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-26, 06:59:00](https://soylentnews.org/article.pl?sid=26/03/25/2339207&amp;from=rss) - [The Mystery of How Volcanic Lightning Happens Has Been Solved](https://soylentnews.org/article.pl?sid=26/03/25/2339207&amp;from=rss)
* [2026-03-26, 06:54:58](https://lobste.rs/s/iwockq/node_js_developing_minimally_hashdos) - [Node.js — Developing a minimally HashDoS resistant, yet quickly reversible integer hash for V8](https://nodejs.org/en/blog/vulnerability/march-2026-hashdos)
* [2026-03-26, 06:11:01](https://news.ycombinator.com/item?id=47527130) - [Government agencies buy commercial data about Americans in bulk](https://www.npr.org/2026/03/25/nx-s1-5752369/ice-surveillance-data-brokers-congress-anthropic)
* [2026-03-26, 06:06:21](https://lobste.rs/s/wxl81t/large_scale_online_deanonymization_with) - [Large-scale online deanonymization with LLMs](https://arxiv.org/abs/2602.16800)
* [2026-03-26, 06:01:42](https://lobste.rs/s/cibkd8/lines_code_are_useful) - [Lines of code are useful](https://entropicthoughts.com/lines-of-code)
* [2026-03-26, 05:27:27](https://lobste.rs/s/quxmzz/vim_racing) - [Vim Racing](https://www.vimgym.app/)
* [2026-03-26, 03:55:52](https://news.ycombinator.com/item?id=47526486) - [Show HN: Robust LLM Extractor for Websites in TypeScript](https://github.com/lightfeed/extractor)
* [2026-03-26, 03:54:27](https://news.ycombinator.com/item?id=47526478) - [Obsolete Sounds](https://citiesandmemory.com/obsolete-sounds/)
* [2026-03-26, 03:30:00](https://entertainment.slashdot.org/story/26/03/25/2322210/brazils-ufo-capital-marks-30-years-since-alien-encounter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Brazil&apos;s UFO Capital Marks 30 Years Since &apos;Alien Encounter&apos;](https://entertainment.slashdot.org/story/26/03/25/2322210/brazils-ufo-capital-marks-30-years-since-alien-encounter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-26, 02:31:50](https://lobste.rs/s/cug5gu/verilog_factorio_compiler_simulator) - [A Verilog to Factorio compiler and simulator (working RISC-V CPU)](https://www.reddit.com/r/rust/comments/1s03w2o/my_first_rust_project_a_verilog_to_factorio/)
* [2026-03-26, 02:12:00](https://soylentnews.org/article.pl?sid=26/03/23/163239&amp;from=rss) - [NASA Sets &apos;Impossible&apos; Ground Rules for Relocation of &apos;Flown Space Vehicle&apos;](https://soylentnews.org/article.pl?sid=26/03/23/163239&amp;from=rss)
* [2026-03-26, 01:57:23](https://lobste.rs/s/vyixek/electric_motorcycles_are_security) - [Electric Motorcycles are a Security Nightmare](https://persephonekarnstein.github.io/post/zero-days/)
* [2026-03-26, 00:28:38](https://news.ycombinator.com/item?id=47525243) - [Shell Tricks That Make Life Easier (and Save Your Sanity)](https://blog.hofstede.it/shell-tricks-that-actually-make-life-easier-and-save-your-sanity/)
* [2026-03-25, 23:56:51](https://lobste.rs/s/iqctrn/vim_classic_long_term_maintenance_vim_8_x) - [vim-classic: Long-term maintenance of Vim 8.x](https://sr.ht/~sircmpwn/vim-classic/)
* [2026-03-25, 23:00:00](https://tech.slashdot.org/story/26/03/25/2258234/postal-service-to-impose-its-first-ever-fuel-surcharge-on-packages?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Postal Service to Impose Its First-Ever Fuel Surcharge on Packages](https://tech.slashdot.org/story/26/03/25/2258234/postal-service-to-impose-its-first-ever-fuel-surcharge-on-packages?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-25, 22:43:44](https://lobste.rs/s/xpx9vi/shell_tricks_actually_make_life_easier) - [Shell Tricks That Actually Make Life Easier (And Save Your Sanity)](https://blog.hofstede.it/shell-tricks-that-actually-make-life-easier-and-save-your-sanity/)
* [2026-03-25, 22:00:00](https://news.slashdot.org/story/26/03/25/204204/canadas-immigration-rejected-applicant-based-on-ai-invented-job-duties?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Canada&apos;s Immigration Rejected Applicant Based On AI-Invented Job Duties](https://news.slashdot.org/story/26/03/25/204204/canadas-immigration-rejected-applicant-based-on-ai-invented-job-duties?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-25, 21:26:00](https://soylentnews.org/article.pl?sid=26/03/23/1558231&amp;from=rss) - [The 49MB Web Page](https://soylentnews.org/article.pl?sid=26/03/23/1558231&amp;from=rss)
* [2026-03-25, 21:11:57](https://news.ycombinator.com/item?id=47523330) - [Running Tesla Model 3&apos;s computer on my desk using parts from crashed cars](https://bugs.xdavidhu.me/tesla/2026/03/23/running-tesla-model-3s-computer-on-my-desk-using-parts-from-crashed-cars/)
* [2026-03-25, 21:00:00](https://apple.slashdot.org/story/26/03/25/1948215/apple-can-create-smaller-on-device-ai-models-from-googles-gemini?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Can Create Smaller On-Device AI Models From Google&apos;s Gemini](https://apple.slashdot.org/story/26/03/25/1948215/apple-can-create-smaller-on-device-ai-models-from-googles-gemini?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-25, 20:27:03](https://news.ycombinator.com/item?id=47522709) - [The EU still wants to scan  your private messages and photos](https://fightchatcontrol.eu/?foo=bar)
* [2026-03-25, 20:00:00](https://yro.slashdot.org/story/26/03/25/1717205/supreme-court-sides-with-internet-provider-in-copyright-fight-over-pirated-music?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Supreme Court Sides With Internet Provider In Copyright Fight Over Pirated Music](https://yro.slashdot.org/story/26/03/25/1717205/supreme-court-sides-with-internet-provider-in-copyright-fight-over-pirated-music?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-25, 19:45:05](https://lobste.rs/s/urwusf/updates_github_copilot_interaction_data) - [Updates to GitHub Copilot interaction data usage policy](https://github.blog/news-insights/company-news/updates-to-github-copilot-interaction-data-usage-policy/)
* [2026-03-25, 19:41:51](https://news.ycombinator.com/item?id=47522173) - [Personal Encyclopedias](https://whoami.wiki/blog/personal-encyclopedias)
* [2026-03-25, 19:17:13](https://lobste.rs/s/wcw7hb/one_file_what_if_your_lockfile_your) - [One File - What if your lockfile and your package list were the same file?](https://merelinux.org/posts/one-file/)
* [2026-03-25, 19:00:00](https://entertainment.slashdot.org/story/26/03/25/1730218/stephen-colbert-to-write-next-lord-of-the-rings-movie?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Stephen Colbert To Write Next &apos;Lord of the Rings&apos; Movie](https://entertainment.slashdot.org/story/26/03/25/1730218/stephen-colbert-to-write-next-lord-of-the-rings-movie?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-25, 18:53:18](https://lobste.rs/s/qnxnwk/apple_s_macos_unix_certification_is_lie) - [Apple’s macOS UNIX certification is a lie (2025)](https://www.osnews.com/story/141633/apples-macos-unix-certification-is-a-lie/)
* [2026-03-25, 18:26:13](https://lobste.rs/s/yeoe5q/which_design_doc_did_human_write) - [Which Design Doc Did a Human Write?](https://refactoringenglish.com/blog/ai-vs-human-design-doc/)
* [2026-03-25, 18:16:03](https://news.ycombinator.com/item?id=47521150) - [ARC-AGI-3](https://arcprize.org/arc-agi/3)
* [2026-03-25, 18:00:00](https://meta.slashdot.org/story/26/03/25/1745232/meta-and-youtube-found-negligent-in-landmark-social-media-addiction-case?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta and YouTube Found Negligent in Landmark Social Media Addiction Case](https://meta.slashdot.org/story/26/03/25/1745232/meta-and-youtube-found-negligent-in-landmark-social-media-addiction-case?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-25, 17:14:43](https://lobste.rs/s/4i8uad/thoughts_on_slowing_fuck_down) - [Thoughts on slowing the fuck down](https://mariozechner.at/posts/2026-03-25-thoughts-on-slowing-the-fuck-down/)
* [2026-03-25, 17:10:21](https://news.ycombinator.com/item?id=47520220) - [Show HN: Optio – Orchestrate AI coding agents in K8s to go from ticket to PR](https://github.com/jonwiggins/optio)
* [2026-03-25, 17:00:00](https://meta.slashdot.org/story/26/03/25/172211/meta-loses-trial-after-arguing-child-exploitation-was-inevitable?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Loses Trial After Arguing Child Exploitation Was &apos;Inevitable&apos;](https://meta.slashdot.org/story/26/03/25/172211/meta-loses-trial-after-arguing-child-exploitation-was-inevitable?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-25, 16:50:49](https://lobste.rs/s/tntlde/mojo_s_not_yet_python) - [Mojo&apos;s not (yet) Python](https://theconsensus.dev/p/2026/03/12/mojos-not-yet-python.html)
* [2026-03-25, 16:41:00](https://soylentnews.org/article.pl?sid=26/03/23/1555204&amp;from=rss) - [OpenAI Delays AI Porn Feature Over Safety Uproar](https://soylentnews.org/article.pl?sid=26/03/23/1555204&amp;from=rss)
* [2026-03-25, 16:06:34](https://news.ycombinator.com/item?id=47519295) - [Quantization from the Ground Up](https://ngrok.com/blog/quantization)
* [2026-03-25, 16:00:00](https://entertainment.slashdot.org/story/26/03/24/2343243/ai-economy-is-a-ponzi-scheme-says-ai-doc-director?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Economy Is a &apos;Ponzi Scheme,&apos; Says AI Doc Director](https://entertainment.slashdot.org/story/26/03/24/2343243/ai-economy-is-a-ponzi-scheme-says-ai-doc-director?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-25, 15:02:56](https://news.ycombinator.com/item?id=47518281) - [Supreme Court Sides with Cox in Copyright Fight over Pirated Music](https://www.nytimes.com/2026/03/25/us/politics/supreme-court-cox-music-copyright.html)
* [2026-03-25, 15:00:00](https://tech.slashdot.org/story/26/03/24/2329218/china-is-mass-producing-hypersonic-missiles-for-99000?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Is Mass-Producing Hypersonic Missiles For $99,000](https://tech.slashdot.org/story/26/03/24/2329218/china-is-mass-producing-hypersonic-missiles-for-99000?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-25, 14:30:51](https://lobste.rs/s/ocrjck/disregard_attacks) - [\&quot;Disregard that!\&quot; attacks](https://calpaterson.com/disregard.html)
* [2026-03-25, 14:12:04](https://news.ycombinator.com/item?id=47517606) - [Earthquake scientists reveal how overplowing weakens soil at experimental farm](https://www.washington.edu/news/2026/03/19/earthquake-scientists-reveal-how-overplowing-weakens-soil-at-experimental-farm/)
* [2026-03-25, 14:11:49](https://lobste.rs/s/b1kdqd/announcing_lix_2_95_kakigori) - [Announcing Lix 2.95 “Kakigōri”](https://lix.systems/blog/2026-03-25-lix-2.95-release/)
* [2026-03-25, 14:07:14](https://news.ycombinator.com/item?id=47517539) - [Thoughts on slowing the fuck down](https://mariozechner.at/posts/2026-03-25-thoughts-on-slowing-the-fuck-down/)
* [2026-03-25, 11:55:00](https://soylentnews.org/article.pl?sid=26/03/23/1550203&amp;from=rss) - [I Hacked ChatGPT and Google&apos;s AI](https://soylentnews.org/article.pl?sid=26/03/23/1550203&amp;from=rss)
* [2026-03-25, 11:00:00](https://science.slashdot.org/story/26/03/24/2334230/chandra-resolves-why-black-holes-hit-the-brakes-on-growth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chandra Resolves Why Black Holes Hit the Brakes On Growth](https://science.slashdot.org/story/26/03/24/2334230/chandra-resolves-why-black-holes-hit-the-brakes-on-growth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-25, 10:36:39](https://lobste.rs/s/xv13en/vitruvianos) - [VitruvianOS](https://v-os.dev/)
* [2026-03-25, 08:37:47](https://lobste.rs/s/tponua/forking_httpx_as_httpxyz) - [Forking httpx as httpxyz](https://tildeweb.nl/~michiel/httpxyz.html)
* [2026-03-25, 07:08:00](https://soylentnews.org/article.pl?sid=26/03/23/1543235&amp;from=rss) - [The FBI is Buying Americans’ Location Data](https://soylentnews.org/article.pl?sid=26/03/23/1543235&amp;from=rss)
* [2026-03-25, 07:00:00](https://science.slashdot.org/story/26/03/24/2145230/nasa-halts-work-on-gateway-to-develop-a-lunar-base?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Halts Work On Gateway To Develop a Lunar Base](https://science.slashdot.org/story/26/03/24/2145230/nasa-halts-work-on-gateway-to-develop-a-lunar-base?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-25, 06:00:32](https://lobste.rs/s/lzxb0m/magic_link_pitfalls) - [Magic Link Pitfalls](https://etodd.io/2026/03/22/magic-link-pitfalls/)
* [2026-03-25, 03:30:00](https://yro.slashdot.org/story/26/03/24/2138225/hong-kong-police-can-demand-passwords-under-new-national-security-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hong Kong Police Can Demand Passwords Under New National Security Rules](https://yro.slashdot.org/story/26/03/24/2138225/hong-kong-police-can-demand-passwords-under-new-national-security-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-25, 02:23:00](https://soylentnews.org/article.pl?sid=26/03/23/0124221&amp;from=rss) - [Particle Discovered at CERN Solves a 20-Year-Old Mystery](https://soylentnews.org/article.pl?sid=26/03/23/0124221&amp;from=rss)
* [2026-03-24, 21:54:27](https://news.ycombinator.com/item?id=47509984) - [Jury finds Meta liable in case over child sexual exploitation on its platforms](https://www.cnn.com/2026/03/24/tech/meta-new-mexico-trial-jury-deliberation)
* [2026-03-24, 21:36:00](https://soylentnews.org/article.pl?sid=26/03/23/0118220&amp;from=rss) - [FBI Surveils Russia’s Elite Agents Through Google Translate Logs](https://soylentnews.org/article.pl?sid=26/03/23/0118220&amp;from=rss)
* [2026-03-24, 16:55:00](https://soylentnews.org/article.pl?sid=26/03/23/0110201&amp;from=rss) - [Cloudflare Appeals Piracy Shield Fine, Hopes to Kill Italy&apos;s Site-Blocking Law](https://soylentnews.org/article.pl?sid=26/03/23/0110201&amp;from=rss)
* [2026-03-24, 12:52:04](https://news.ycombinator.com/item?id=47501875) - [Optimizing a Lock-Free Ring Buffer](https://david.alvarezrosa.com/posts/optimizing-a-lock-free-ring-buffer/)
* [2026-03-24, 12:10:00](https://soylentnews.org/article.pl?sid=26/03/23/013259&amp;from=rss) - [Musk&apos;s Tactic of Blaming Users for Grok Sex Images May be Foiled by EU Law](https://soylentnews.org/article.pl?sid=26/03/23/013259&amp;from=rss)
* [2026-03-24, 07:21:00](https://soylentnews.org/article.pl?sid=26/03/23/0055212&amp;from=rss) - [Nvidia is Trying to Make a Computer for Orbital AI Data Centers](https://soylentnews.org/article.pl?sid=26/03/23/0055212&amp;from=rss)
* [2026-03-24, 06:53:30](https://news.ycombinator.com/item?id=47499356) - [From zero to a RAG system: successes and failures](https://en.andros.dev/blog/aa31d744/from-zero-to-a-rag-system-successes-and-failures/)
* [2026-03-24, 02:34:00](https://soylentnews.org/article.pl?sid=26/03/23/0028246&amp;from=rss) - [Never Mind Band-Aids, Neanderthals Had Antiseptic Birch Tar](https://soylentnews.org/article.pl?sid=26/03/23/0028246&amp;from=rss)
* [2026-03-24, 01:56:51](https://news.ycombinator.com/item?id=47497781) - [Maxell MXCP-P100 – wireless cassette player](https://maxell-usa.com/product/cassetteplayer/)
* [2026-03-23, 21:47:00](https://soylentnews.org/article.pl?sid=26/03/22/1834242&amp;from=rss) - [Big Tech’s Security Problem Just Hit Gaming](https://soylentnews.org/article.pl?sid=26/03/22/1834242&amp;from=rss)
* [2026-03-23, 20:57:19](https://news.ycombinator.com/item?id=47495008) - [Niche Museums](https://www.niche-museums.com/)
* [2026-03-23, 17:02:00](https://soylentnews.org/article.pl?sid=26/03/22/1833208&amp;from=rss) - [Workers Who Love ‘Synergizing Paradigms’ Might be Bad at Their Jobs](https://soylentnews.org/article.pl?sid=26/03/22/1833208&amp;from=rss)
* [2026-03-23, 16:39:53](https://news.ycombinator.com/item?id=47491848) - [More precise elevation data for GraphHopper routing engine](https://www.graphhopper.com/blog/2026/03/23/more-precise-elevation-data-for-graphhopper/)
* [2026-03-23, 12:17:00](https://soylentnews.org/article.pl?sid=26/03/22/1822230&amp;from=rss) - [Concerns Due to TrueNAS Moving its Build Repository to Private Servers](https://soylentnews.org/article.pl?sid=26/03/22/1822230&amp;from=rss)
* [2026-03-23, 12:09:35](https://news.ycombinator.com/item?id=47488348) - [What came after the 486?](https://dfarq.homeip.net/what-came-after-486/)
* [2026-03-23, 07:32:00](https://soylentnews.org/article.pl?sid=26/03/21/1413247&amp;from=rss) - [Moltbook Was Peak AI Theater](https://soylentnews.org/article.pl?sid=26/03/21/1413247&amp;from=rss)
* [2026-03-23, 02:42:00](https://soylentnews.org/article.pl?sid=26/03/21/145246&amp;from=rss) - [Commission Says EU Inc Will be in Place by End of 2026](https://soylentnews.org/article.pl?sid=26/03/21/145246&amp;from=rss)
* [2026-03-22, 23:06:57](https://news.ycombinator.com/item?id=47483286) - [My DIY FPGA board can run Quake II](https://blog.mikhe.ch/quake2-on-fpga/part4.html)
* [2026-03-22, 21:54:00](https://soylentnews.org/article.pl?sid=26/03/21/1345242&amp;from=rss) - [Proton Mail Helped FBI Unmask Anonymous ‘Stop Cop City’ Protester](https://soylentnews.org/article.pl?sid=26/03/21/1345242&amp;from=rss)
* [2026-03-22, 17:09:00](https://soylentnews.org/article.pl?sid=26/03/21/1339251&amp;from=rss) - [Wayland Set the Linux Desktop Back by 10 Years](https://soylentnews.org/article.pl?sid=26/03/21/1339251&amp;from=rss)
* [2026-03-22, 15:34:44](https://news.ycombinator.com/item?id=47478599) - [Two studies in compiler optimisations](https://www.hmpcabral.com/2026/03/20/two-studies-in-compiler-optimisations/)
* [2026-03-22, 12:22:00](https://soylentnews.org/article.pl?sid=26/03/21/1337239&amp;from=rss) - [Analysis From West Point Warns That Strait of Hormuz Blockade Will Strangle US Defense Industry](https://soylentnews.org/article.pl?sid=26/03/21/1337239&amp;from=rss)
* [2026-03-22, 07:37:00](https://soylentnews.org/article.pl?sid=26/03/21/1319201&amp;from=rss) - [This Fungus Can Make Water Freeze](https://soylentnews.org/article.pl?sid=26/03/21/1319201&amp;from=rss)
* [2026-03-22, 02:52:00](https://soylentnews.org/article.pl?sid=26/03/19/208240&amp;from=rss) - [Tech Hobbyist Makes Shoulder-Mounted Guided Missile Prototype With $96 In Parts And A 3D Printer](https://soylentnews.org/article.pl?sid=26/03/19/208240&amp;from=rss)
* [2026-03-22, 01:58:23](https://news.ycombinator.com/item?id=47473673) - [The truth that haunts the Ramones: &apos;They sold more T-shirts than records&apos;](https://english.elpais.com/culture/2026-03-17/the-uncomfortable-truth-that-will-always-haunt-the-ramones-they-sold-more-t-shirts-than-records.html)
