# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Computing

* [Honda Conducts Successful Launch and Landing of Experimental Reusable Rocket](https://global.honda/en/topics/2025/c_2025-06-17ceng.html) ([comments](https://news.ycombinator.com/item?id=44300102))

* [Managing split DNS in a multi-tenant Kubernetes setup](https://medium.com/learnings-from-the-paas/a-journey-through-kafkian-splitdns-in-a-multitenant-kubernetes-offering-d5fd274f676f) ([comments](https://lobste.rs/s/waw8wr/managing_split_dns_multi_tenant))

* [Why JPEGs Still Rule the Web After 30 Years](https://spectrum.ieee.org/jpeg-image-format-history) ([comments](https://news.ycombinator.com/item?id=44299970))

* [Social Media Now Main Source of News In US, Research Suggests](https://tech.slashdot.org/story/25/06/17/0057254/social-media-now-main-source-of-news-in-us-research-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://tech.slashdot.org/story/25/06/17/0057254/social-media-now-main-source-of-news-in-us-research-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Voyager: Real-Time Splatting City-Scale 3D Gaussians on Your Phone](https://arxiv.org/abs/2506.02774) ([comments](https://news.ycombinator.com/item?id=44298724))

* [The magic of through running](https://www.worksinprogress.news/p/the-magic-of-through-running) ([comments](https://news.ycombinator.com/item?id=44297045))

* [O3 Turns Pro](https://thezvi.substack.com/p/o3-turns-pro) ([comments](https://news.ycombinator.com/item?id=44299947))

## Artificial Intelligence and Its Impact

* [How Do Olympiad Medalists Judge LLMs in Competitive Programming?](https://slashdot.org/story/25/06/17/149238/how-do-olympiad-medalists-judge-llms-in-competitive-programming?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://slashdot.org/story/25/06/17/149238/how-do-olympiad-medalists-judge-llms-in-competitive-programming?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Why Generative AI Coding Tools and Agents Do Not Work For Me](https://blog.miguelgrinberg.com/post/why-generative-ai-coding-tools-and-agents-do-not-work-for-me) ([comments](https://lobste.rs/s/gsci0f/why_generative_ai_coding_tools_agents_do))

* [TIL:AI. Thoughts on AI](https://cocoaphony.micro.blog/2025/06/16/tilai-thoughts-on-ai.html) ([comments](https://lobste.rs/s/2f63at/til_ai_thoughts_on_ai))

* [Can We Stop Big Tech From Controlling the Internet With AI Agents?](https://soylentnews.org/article.pl?sid=25/06/16/0115212&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/06/16/0115212&amp;from=rss))

## Scientific Discoveries

* [Behold the First Images of the Sun’s South Pole](https://soylentnews.org/article.pl?sid=25/06/16/0131240&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/06/16/0131240&amp;from=rss))

* [Microbe With Bizarrely Tiny Genome May Be Evolving Into a Virus](https://science.slashdot.org/story/25/06/17/0042221/microbe-with-bizarrely-tiny-genome-may-be-evolving-into-a-virus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://science.slashdot.org/story/25/06/17/0042221/microbe-with-bizarrely-tiny-genome-may-be-evolving-into-a-virus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Your Brain Has a Hidden Beat -- and Smarter Minds Sync To It](https://science.slashdot.org/story/25/06/17/0048247/your-brain-has-a-hidden-beat----and-smarter-minds-sync-to-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://science.slashdot.org/story/25/06/17/0048247/your-brain-has-a-hidden-beat----and-smarter-minds-sync-to-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

## Design and Innovation

* [Should we design for iffy internet?](https://bytes.zone/posts/should-we-design-for-iffy-internet/) ([comments](https://news.ycombinator.com/item?id=44298656))

* [Locally hosting an internet-connected server](https://mjg59.dreamwidth.org/72095.html) ([comments](https://lobste.rs/s/thttgw/locally_hosting_internet_connected))

* [What I Wish Someone Told Me When I Was Getting Into ARIA](https://www.smashingmagazine.com/2025/06/what-i-wish-someone-told-me-aria/) ([comments](https://lobste.rs/s/utck4y/what_i_wish_someone_told_me_when_i_was))

* [Why Claude Code feels like magic?](https://omarabid.com/claude-magic) ([comments](https://lobste.rs/s/dx84oc/why_claude_code_feels_like_magic))

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

* [2025-06-17, 15:54:50](https://lobste.rs/s/waw8wr/managing_split_dns_multi_tenant) - [Managing split DNS in a multi-tenant Kubernetes setup](https://medium.com/learnings-from-the-paas/a-journey-through-kafkian-splitdns-in-a-multitenant-kubernetes-offering-d5fd274f676f)
* [2025-06-17, 15:25:00](https://news.slashdot.org/story/25/06/17/1520209/firefox-is-dead-to-me?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Firefox Is Dead To Me&apos;](https://news.slashdot.org/story/25/06/17/1520209/firefox-is-dead-to-me?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-17, 15:05:00](https://soylentnews.org/article.pl?sid=25/06/16/0136200&amp;from=rss) - [4Chan Under Investigation by Uk Ofcom Over Online Safety Concerns](https://soylentnews.org/article.pl?sid=25/06/16/0136200&amp;from=rss)
* [2025-06-17, 15:02:12](https://news.ycombinator.com/item?id=44300102) - [Honda Conducts Successful Launch and Landing of Experimental Reusable Rocket](https://global.honda/en/topics/2025/c_2025-06-17ceng.html)
* [2025-06-17, 14:55:23](https://news.ycombinator.com/item?id=44300026) - [Rules, Not Renewables, Might Explain the Iberian Blackout](https://spectrum.ieee.org/spain-grid-failure)
* [2025-06-17, 14:52:00](https://soylentnews.org/breakingnews/article.pl?sid=25/06/17/1439252&amp;from=rss) - [This Is Not A Drill](https://soylentnews.org/breakingnews/article.pl?sid=25/06/17/1439252&amp;from=rss)
* [2025-06-17, 14:51:10](https://news.ycombinator.com/item?id=44299970) - [Why JPEGs Still Rule the Web After 30 Years](https://spectrum.ieee.org/jpeg-image-format-history)
* [2025-06-17, 14:49:50](https://news.ycombinator.com/item?id=44299947) - [O3 Turns Pro](https://thezvi.substack.com/p/o3-turns-pro)
* [2025-06-17, 14:47:26](https://news.ycombinator.com/item?id=44299930) - [What I Wish Someone Told Me When I Was Getting into ARIA](https://www.smashingmagazine.com/2025/06/what-i-wish-someone-told-me-aria/)
* [2025-06-17, 14:45:29](https://lobste.rs/s/utck4y/what_i_wish_someone_told_me_when_i_was) - [What I Wish Someone Told Me When I Was Getting Into ARIA](https://www.smashingmagazine.com/2025/06/what-i-wish-someone-told-me-aria/)
* [2025-06-17, 14:45:00](https://slashdot.org/story/25/06/17/1432203/ai-use-at-work-nearly-doubles-in-two-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Use at Work Nearly Doubles in Two Years](https://slashdot.org/story/25/06/17/1432203/ai-use-at-work-nearly-doubles-in-two-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-17, 14:09:00](https://slashdot.org/story/25/06/17/149238/how-do-olympiad-medalists-judge-llms-in-competitive-programming?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Do Olympiad Medalists Judge LLMs in Competitive Programming?](https://slashdot.org/story/25/06/17/149238/how-do-olympiad-medalists-judge-llms-in-competitive-programming?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-17, 13:18:20](https://lobste.rs/s/endekb/zb_beta_released) - [zb beta released](https://www.zombiezen.com/blog/2025/06/zb-beta-release/)
* [2025-06-17, 13:08:01](https://news.ycombinator.com/item?id=44298724) - [Voyager: Real-Time Splatting City-Scale 3D Gaussians on Your Phone](https://arxiv.org/abs/2506.02774)
* [2025-06-17, 13:02:54](https://news.ycombinator.com/item?id=44298656) - [Should we design for iffy internet?](https://bytes.zone/posts/should-we-design-for-iffy-internet/)
* [2025-06-17, 13:00:00](https://entertainment.slashdot.org/story/25/06/17/0115238/titan-netflix-documentary-examines-events-leading-to-oceangates-doomed-expedition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Titan&apos; Netflix Documentary Examines Events Leading To OceanGate&apos;s Doomed Expedition](https://entertainment.slashdot.org/story/25/06/17/0115238/titan-netflix-documentary-examines-events-leading-to-oceangates-doomed-expedition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-17, 12:50:58](https://lobste.rs/s/k5tt4a/is_it_really_foss) - [is it really FOSS?](https://isitreallyfoss.com/)
* [2025-06-17, 12:45:20](https://lobste.rs/s/thttgw/locally_hosting_internet_connected) - [Locally hosting an internet-connected server](https://mjg59.dreamwidth.org/72095.html)
* [2025-06-17, 12:35:22](https://lobste.rs/s/z4hrye/is_documentation_like_pineapple_on_pizza) - [Is Documentation Like Pineapple on Pizza?](https://l.idaszak.com/l-docs-like-pineapple-on-pizza)
* [2025-06-17, 10:18:00](https://soylentnews.org/article.pl?sid=25/06/16/0131240&amp;from=rss) - [Behold the First Images of the Sun’s South Pole](https://soylentnews.org/article.pl?sid=25/06/16/0131240&amp;from=rss)
* [2025-06-17, 10:14:44](https://lobste.rs/s/iovrve/type_inference_zoo) - [Type Inference Zoo](https://zoo.cuichen.cc/)
* [2025-06-17, 10:10:23](https://lobste.rs/s/pgusbz/anime_js_v4_is_lightweight_javascript) - [Anime.js v4 is a lightweight JavaScript animation library with a simple, yet powerful API](https://animejs.com)
* [2025-06-17, 10:00:00](https://science.slashdot.org/story/25/06/17/0042221/microbe-with-bizarrely-tiny-genome-may-be-evolving-into-a-virus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microbe With Bizarrely Tiny Genome May Be Evolving Into a Virus](https://science.slashdot.org/story/25/06/17/0042221/microbe-with-bizarrely-tiny-genome-may-be-evolving-into-a-virus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-17, 09:51:08](https://lobste.rs/s/dx84oc/why_claude_code_feels_like_magic) - [Why Claude Code feels like magic?](https://omarabid.com/claude-magic)
* [2025-06-17, 08:57:46](https://news.ycombinator.com/item?id=44297045) - [The magic of through running](https://www.worksinprogress.news/p/the-magic-of-through-running)
* [2025-06-17, 07:32:07](https://news.ycombinator.com/item?id=44296564) - [Fossify – A suite of open-source, ad-free apps](https://github.com/FossifyOrg)
* [2025-06-17, 07:00:00](https://tech.slashdot.org/story/25/06/17/018252/denmark-tests-unmanned-robotic-sailboat-fleet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Denmark Tests Unmanned Robotic Sailboat Fleet](https://tech.slashdot.org/story/25/06/17/018252/denmark-tests-unmanned-robotic-sailboat-fleet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-17, 06:58:36](https://lobste.rs/s/ivjnne/end_end_encryption_architecturally) - [End-to-End Encryption: Architecturally Necessary](https://labs.ripe.net/author/flindeberg/end-to-end-encryption-architecturally-necessary/)
* [2025-06-17, 06:33:38](https://news.ycombinator.com/item?id=44296237) - [BMW ConnectedDrive lets me control my returned rental car (Sixt)](https://news.ycombinator.com/item?id=44296237)
* [2025-06-17, 06:16:57](https://lobste.rs/s/oz5ocp/slint_1_12_released_with_wgpu_support_ios) - [Slint 1.12 Released with WGPU Support, iOS Port, and Figma Variables Integration](https://slint.dev/blog/slint-1.12-released)
* [2025-06-17, 05:30:00](https://soylentnews.org/article.pl?sid=25/06/16/0115212&amp;from=rss) - [Can We Stop Big Tech From Controlling the Internet With AI Agents?](https://soylentnews.org/article.pl?sid=25/06/16/0115212&amp;from=rss)
* [2025-06-17, 05:08:55](https://news.ycombinator.com/item?id=44295925) - [Fun with Telnet](https://brandonrozek.com/blog/fun-with-telnet/)
* [2025-06-17, 04:20:11](https://lobste.rs/s/7dy7ti/nuanced_reality_throttling_it_s_not_just) - [The Nuanced Reality of Throttling: It&apos;s Not Just About Preventing Abuse](https://blog.joemag.dev/2025/06/the-nuanced-reality-of-throttling-its.html)
* [2025-06-17, 03:43:07](https://lobste.rs/s/gsci0f/why_generative_ai_coding_tools_agents_do) - [Why Generative AI Coding Tools and Agents Do Not Work For Me](https://blog.miguelgrinberg.com/post/why-generative-ai-coding-tools-and-agents-do-not-work-for-me)
* [2025-06-17, 03:30:00](https://tech.slashdot.org/story/25/06/17/0057254/social-media-now-main-source-of-news-in-us-research-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Social Media Now Main Source of News In US, Research Suggests](https://tech.slashdot.org/story/25/06/17/0057254/social-media-now-main-source-of-news-in-us-research-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-17, 01:30:00](https://science.slashdot.org/story/25/06/17/0048247/your-brain-has-a-hidden-beat----and-smarter-minds-sync-to-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Your Brain Has a Hidden Beat -- and Smarter Minds Sync To It](https://science.slashdot.org/story/25/06/17/0048247/your-brain-has-a-hidden-beat----and-smarter-minds-sync-to-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-17, 01:25:25](https://news.ycombinator.com/item?id=44294905) - [The Humble Programmer (1972)](https://www.cs.utexas.edu/~EWD/transcriptions/EWD03xx/EWD340.html)
* [2025-06-17, 01:16:36](https://lobste.rs/s/2f63at/til_ai_thoughts_on_ai) - [TIL:AI. Thoughts on AI](https://cocoaphony.micro.blog/2025/06/16/tilai-thoughts-on-ai.html)
* [2025-06-17, 01:16:25](https://news.ycombinator.com/item?id=44294853) - [Selfish reasons for building accessible UIs](https://nolanlawson.com/2025/06/16/selfish-reasons-for-building-accessible-uis/)
* [2025-06-17, 00:50:21](https://lobste.rs/s/6bduaj/phkmalloc) - [phkmalloc](https://phk.freebsd.dk/sagas/phkmalloc/)
* [2025-06-17, 00:50:00](https://tech.slashdot.org/story/25/06/16/2141250/google-cloud-caused-outage-by-ignoring-its-usual-code-quality-protections?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Cloud Caused Outage By Ignoring Its Usual Code Quality Protections](https://tech.slashdot.org/story/25/06/16/2141250/google-cloud-caused-outage-by-ignoring-its-usual-code-quality-protections?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-17, 00:43:00](https://soylentnews.org/article.pl?sid=25/06/16/016221&amp;from=rss) - [TSMC Slows Down Global Plans Due to Soft Demand, but Accelerates Arizona Fab Plans by Six Months](https://soylentnews.org/article.pl?sid=25/06/16/016221&amp;from=rss)
* [2025-06-17, 00:13:00](https://news.ycombinator.com/item?id=44294526) - [The drawbridges come up: the dream of a interconnected context ecosystem is over](https://www.dbreunig.com/2025/06/16/drawbridges-go-up.html)
* [2025-06-17, 00:10:00](https://slashdot.org/story/25/06/16/2132227/intel-will-lay-off-15-to-20-of-its-factory-workers-memo-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel Will Lay Off 15% To 20% of Its Factory Workers, Memo Says](https://slashdot.org/story/25/06/16/2132227/intel-will-lay-off-15-to-20-of-its-factory-workers-memo-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-16, 23:30:00](https://tech.slashdot.org/story/25/06/16/2125238/vandals-cut-fiber-optic-lines-causing-outage-for-spectrum-internet-subscribers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Vandals Cut Fiber-Optic Lines, Causing Outage For Spectrum Internet Subscribers](https://tech.slashdot.org/story/25/06/16/2125238/vandals-cut-fiber-optic-lines-causing-outage-for-spectrum-internet-subscribers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-16, 23:19:36](https://lobste.rs/s/f4cvx7/triaging_security_issues_reported_by) - [Triaging security issues reported by third parties (#913) · Issues · GNOME / libxml2 ·](https://gitlab.gnome.org/GNOME/libxml2/-/issues/913)
* [2025-06-16, 23:12:12](https://lobste.rs/s/fefns1/xmake_v3_0_released_improve_c_modules) - [Xmake v3.0 released, Improve c++ modules and jobgraph support](https://github.com/xmake-io/xmake/releases/tag/v3.0.0)
* [2025-06-16, 22:50:00](https://tech.slashdot.org/story/25/06/16/2114214/threads-will-let-you-hide-spoilers-in-your-posts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Threads Will Let You Hide Spoilers In Your Posts](https://tech.slashdot.org/story/25/06/16/2114214/threads-will-let-you-hide-spoilers-in-your-posts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-16, 22:31:58](https://news.ycombinator.com/item?id=44293988) - [OpenAI wins $200M U.S. defense contract](https://www.cnbc.com/2025/06/16/openai-wins-200-million-us-defense-contract.html)
* [2025-06-16, 22:10:00](https://yro.slashdot.org/story/25/06/16/2054205/salesforce-study-finds-llm-agents-flunk-crm-and-confidentiality-tests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Salesforce Study Finds LLM Agents Flunk CRM and Confidentiality Tests](https://yro.slashdot.org/story/25/06/16/2054205/salesforce-study-finds-llm-agents-flunk-crm-and-confidentiality-tests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-16, 21:34:09](https://news.ycombinator.com/item?id=44293610) - [What happens when clergy take psilocybin](https://nautil.us/clergy-blown-away-by-psilocybin-1217112/)
* [2025-06-16, 21:30:00](https://tech.slashdot.org/story/25/06/16/2046238/the-us-navy-is-more-aggressively-telling-startups-we-want-you?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The US Navy Is More Aggressively Telling Startups, &apos;We Want You&apos;](https://tech.slashdot.org/story/25/06/16/2046238/the-us-navy-is-more-aggressively-telling-startups-we-want-you?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-16, 20:50:00](https://slashdot.org/story/25/06/16/1956251/obscure-chinese-stock-scams-dupe-american-investors-by-the-thousands?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Obscure Chinese Stock Scams Dupe American Investors by the Thousands](https://slashdot.org/story/25/06/16/1956251/obscure-chinese-stock-scams-dupe-american-investors-by-the-thousands?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-16, 20:48:43](https://news.ycombinator.com/item?id=44293260) - [Show HN: Chawan TUI web browser](https://chawan.net/news/chawan-0-2-0.html)
* [2025-06-16, 20:33:45](https://news.ycombinator.com/item?id=44293147) - [Show HN: Nexus.js - Fabric.js for 3D](https://punk.cam/lab/nexus)
* [2025-06-16, 20:33:14](https://lobste.rs/s/cho8tc/retrobootstrapping_rust_for_some_reason) - [retrobootstrapping rust for some reason](https://graydon2.dreamwidth.org/317484.html)
* [2025-06-16, 19:56:00](https://soylentnews.org/article.pl?sid=25/06/16/0057231&amp;from=rss) - [Washington Post in Talks With Substack About Using its Writers](https://soylentnews.org/article.pl?sid=25/06/16/0057231&amp;from=rss)
* [2025-06-16, 19:42:53](https://lobste.rs/s/vqsran/matrix_is_cooked) - [matrix is cooked](https://paper.wf/alexia/matrix-is-cooked)
* [2025-06-16, 18:41:55](https://lobste.rs/s/2o1cna/promised_lan) - [The Promised LAN](https://notes.pault.ag/tpl/)
* [2025-06-16, 18:27:59](https://news.ycombinator.com/item?id=44292103) - [Show HN: Canine – A Heroku alternative built on Kubernetes](https://github.com/czhu12/canine)
* [2025-06-16, 18:07:37](https://news.ycombinator.com/item?id=44291892) - [Dull Men’s Club](https://www.theguardian.com/society/2025/jun/09/meet-the-members-of-the-dull-mens-club-some-of-them-would-bore-the-ears-off-you)
* [2025-06-16, 15:46:48](https://lobste.rs/s/q0zon6/goodbye_dark_inc_hello_darklang_inc) - [Goodbye Dark Inc. - Hello Darklang Inc](https://blog.darklang.com/goodbye-dark-inc-welcome-darklang-inc/)
* [2025-06-16, 15:16:47](https://news.ycombinator.com/item?id=44290413) - [Benzene at 200](https://www.chemistryworld.com/opinion/benzene-at-200/4021504.article)
* [2025-06-16, 15:11:37](https://lobste.rs/s/fiaxp8/selfish_reasons_for_building_accessible) - [Selfish reasons for building accessible UIs](https://nolanlawson.com/2025/06/16/selfish-reasons-for-building-accessible-uis/)
* [2025-06-16, 15:11:00](https://soylentnews.org/article.pl?sid=25/06/16/0052252&amp;from=rss) - [Huawei CEO Says Washington Has Exaggerated its Achievements, Saying the Company Isn&apos;t That Powerful](https://soylentnews.org/article.pl?sid=25/06/16/0052252&amp;from=rss)
* [2025-06-16, 14:16:55](https://lobste.rs/s/zx6iiy/working_on_databases_from_prison_how_i_got) - [Working on databases from prison: How I got here, part 2](https://turso.tech/blog/working-on-databases-from-prison)
* [2025-06-16, 13:38:59](https://news.ycombinator.com/item?id=44289412) - [WhatsApp introduces ads in its app](https://www.nytimes.com/2025/06/16/technology/whatsapp-ads.html)
* [2025-06-16, 10:25:00](https://soylentnews.org/article.pl?sid=25/06/15/145200&amp;from=rss) - [Buried Under 2 Kilometers of Antarctic Ice, Scientists Find a 34-Million-Year-Old Lost World](https://soylentnews.org/article.pl?sid=25/06/15/145200&amp;from=rss)
* [2025-06-16, 10:12:49](https://lobste.rs/s/k7nyyu/rgsql_test_suite_help_you_build_your_own) - [rgSQL: A test suite to help you build your own database engine](https://technicaldeft.com/posts/rgsql-a-test-suite-for-database-engines)
* [2025-06-16, 05:41:00](https://soylentnews.org/article.pl?sid=25/06/15/1353252&amp;from=rss) - [Photonic Processor Could Streamline 6G Wireless Signal Processing](https://soylentnews.org/article.pl?sid=25/06/15/1353252&amp;from=rss)
* [2025-06-16, 01:00:15](https://news.ycombinator.com/item?id=44285956) - [Cmapv2: A high performance, concurrent map](https://github.com/sirgallo/cmapv2)
* [2025-06-16, 00:58:00](https://soylentnews.org/article.pl?sid=25/06/15/1350208&amp;from=rss) - [Massive Privacy Concern: Over 40,000 Security Cameras Are Streaming Unsecured Footage Worldwide](https://soylentnews.org/article.pl?sid=25/06/15/1350208&amp;from=rss)
* [2025-06-15, 20:12:00](https://soylentnews.org/article.pl?sid=25/06/15/0153218&amp;from=rss) - [Nematode Tower Power](https://soylentnews.org/article.pl?sid=25/06/15/0153218&amp;from=rss)
* [2025-06-15, 19:51:42](https://news.ycombinator.com/item?id=44284569) - [Iron nitride permanent magnets made with DIY ball mill [video]](https://www.youtube.com/watch?v=M6XIgdS1rzs)
* [2025-06-15, 19:00:04](https://lobste.rs/s/d3rzjl/writing_toy_software_is_joy) - [Writing Toy Software Is A Joy](https://www.jsbarretto.com/blog/software-is-joy/)
* [2025-06-15, 15:26:00](https://soylentnews.org/article.pl?sid=25/06/15/0338222&amp;from=rss) - [\&quot;Impossible\&quot; Particle That Hit Earth May Have Been Dark Matter](https://soylentnews.org/article.pl?sid=25/06/15/0338222&amp;from=rss)
* [2025-06-15, 10:41:00](https://soylentnews.org/article.pl?sid=25/06/14/1623235&amp;from=rss) - [RIP: Bill Atkinson, Co-Creator Of Apple Lisa And Mac](https://soylentnews.org/article.pl?sid=25/06/14/1623235&amp;from=rss)
* [2025-06-15, 06:41:31](https://news.ycombinator.com/item?id=44280926) - [How you breathe is like a fingerprint that can identify you](https://www.nature.com/articles/d41586-025-01835-0)
* [2025-06-15, 05:57:00](https://soylentnews.org/article.pl?sid=25/06/14/1549226&amp;from=rss) - [Navy Backs Right to Repair After $13B Carrier Goes Half-Fed](https://soylentnews.org/article.pl?sid=25/06/14/1549226&amp;from=rss)
* [2025-06-15, 01:13:00](https://soylentnews.org/article.pl?sid=25/06/14/1546217&amp;from=rss) - [Stay Hungry,  Stay Foolish ... 20 Years on](https://soylentnews.org/article.pl?sid=25/06/14/1546217&amp;from=rss)
* [2025-06-14, 20:27:00](https://soylentnews.org/article.pl?sid=25/06/14/1315217&amp;from=rss) - [Jupiter Takes Europe&apos;s HPC Crown in 793Pf Top500 Run](https://soylentnews.org/article.pl?sid=25/06/14/1315217&amp;from=rss)
* [2025-06-14, 16:29:35](https://news.ycombinator.com/item?id=44277284) - [Pitfalls of premature closure with LLM assisted coding](https://www.shayon.dev/post/2025/164/pitfalls-of-premature-closure-with-llm-assisted-coding/)
* [2025-06-14, 16:07:23](https://news.ycombinator.com/item?id=44277179) - [AMD&apos;s Pre-Zen Interconnect: Testing Trinity&apos;s Northbridge](https://chipsandcheese.com/p/amds-pre-zen-interconnect-testing)
* [2025-06-14, 15:42:00](https://soylentnews.org/article.pl?sid=25/06/13/1243246&amp;from=rss) - [Toyota Math: 9 Million EVs Are Just as Polluting as 27 Million Hybrids](https://soylentnews.org/article.pl?sid=25/06/13/1243246&amp;from=rss)
* [2025-06-14, 14:55:28](https://news.ycombinator.com/item?id=44276778) - [Attempting to Make the Smallest* Electric Motor [video]](https://www.youtube.com/watch?v=6x_NMytSA90)
* [2025-06-14, 10:57:00](https://soylentnews.org/article.pl?sid=25/06/13/0159230&amp;from=rss) - [Climate Change Is Coming For Your Cheese](https://soylentnews.org/article.pl?sid=25/06/13/0159230&amp;from=rss)
* [2025-06-14, 06:12:00](https://soylentnews.org/article.pl?sid=25/06/13/0152245&amp;from=rss) - [Mistral Releases a Vibe Coding Client, Mistral Code](https://soylentnews.org/article.pl?sid=25/06/13/0152245&amp;from=rss)
* [2025-06-14, 01:25:00](https://soylentnews.org/article.pl?sid=25/06/13/0146252&amp;from=rss) - [Vital Chipmaking Software Access Restored to China After High-Level Call Between Trump/Xi Jinping](https://soylentnews.org/article.pl?sid=25/06/13/0146252&amp;from=rss)
* [2025-06-13, 23:15:00](https://news.ycombinator.com/item?id=44273105) - [Photon transport through the entire adult human head](https://www.spiedigitallibrary.org/journals/neurophotonics/volume-12/issue-02/025014/Photon-transport-through-the-entire-adult-human-head/10.1117/1.NPh.12.2.025014.full)
* [2025-06-13, 20:41:00](https://soylentnews.org/article.pl?sid=25/06/13/0143245&amp;from=rss) - [The Federal Government in the Age of Artificial Intelligence](https://soylentnews.org/article.pl?sid=25/06/13/0143245&amp;from=rss)
* [2025-06-13, 15:58:00](https://soylentnews.org/article.pl?sid=25/06/13/0135229&amp;from=rss) - [Starlink Shut Down on United Regional Jets - Reports of Radio Interference on Embraer E175](https://soylentnews.org/article.pl?sid=25/06/13/0135229&amp;from=rss)
* [2025-06-13, 13:28:45](https://news.ycombinator.com/item?id=44268345) - [Natural rubber with high resistance to  crack growth](https://www.nature.com/articles/s41893-025-01559-z.epdf?sharing_token=SST16F7yBaUkRDb702ZphtRgN0jAjWel9jnR3ZoTv0P9y52VPdTYScQoHBinE3JzdSvQ1aN3fhS4SSECYXRnvZ77nkrWJA2412S2E-26Il-ncine3ET1t1GzNaX2Oo2cK9GYzFNCrKSRycPCrQKJZ8QvfBeSTNR5d12_ZHLvyYkt26oAnSVTBuopgCE4tHIVPnWtjLZS3OhBz1H2OhtXQMmNFMhf-2lYu5vkTl596uaKjxxqTFBbSZj1phjSIDRELkwyRfUsM77Gu7S0VF_fPvJZAYxvV_2Hduld7MbfF1M4RO8vHe5OtCz383c2iHBjxkZ4gU59FErIjNBnLDPDT79Jaj04hbpqLWqUoVxoYCs%3D)
* [2025-06-13, 11:13:00](https://soylentnews.org/article.pl?sid=25/06/13/0124202&amp;from=rss) - [Google Brute-Force Attack Exposes Phone Numbers in Minutes](https://soylentnews.org/article.pl?sid=25/06/13/0124202&amp;from=rss)
* [2025-06-13, 06:29:00](https://soylentnews.org/article.pl?sid=25/06/12/159242&amp;from=rss) - [1.5Tb of James Webb Space Telescope Data Dumped On The Internet - New Searchable Database](https://soylentnews.org/article.pl?sid=25/06/12/159242&amp;from=rss)
* [2025-06-13, 01:43:00](https://soylentnews.org/article.pl?sid=25/06/12/075226&amp;from=rss) - [Making Hydrogen With Soda Cans and Seawater](https://soylentnews.org/article.pl?sid=25/06/12/075226&amp;from=rss)
