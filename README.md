# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Innovations & Developments

* [Fully Local Code Embeds](https://www.aleksandrhovhannisyan.com/blog/local-code-embeds/) - A comprehensive look at creating and managing code embeds fully locally, ensuring privacy and control. [Comments](https://lobste.rs/s/0ivjey/fully_local_code_embeds)

* [Hamilton-Jacobi-Bellman Equation: Reinforcement Learning and Diffusion Models](https://dani2442.github.io/posts/continuous-rl/) - An exploration of the connection between advanced mathematical models, reinforcement learning, and diffusion models. [Comments](https://news.ycombinator.com/item?id=47571495)

* [Okapi, or “What if ripgrep Could Edit?”](https://kocharhook.com/post/6/) - A novel concept exploring how the popular file searching tool ripgrep could be enhanced to include editing functionality. [Comments](https://lobste.rs/s/kqnoi9/okapi_what_if_ripgrep_could_edit)

* [Clojure: The Documentary (Trailer)](https://youtu.be/JJEyffSdBsk) - A sneak peek into the upcoming documentary exploring the evolution and community around the Clojure programming language. [Comments](https://lobste.rs/s/lxzmm2/clojure_documentary_trailer)

* [VHDL's Crown Jewel](https://www.sigasi.com/opinion/jan/vhdls-crown-jewel/) - A discussion of innovations in VHDL that could transform how digital design is approached. [Comments](https://news.ycombinator.com/item?id=47570435)

* [Free, native RISC-V (RV64GC) CI on GitHub](https://riseproject.dev/2026/03/24/announcing-the-rise-risc-v-runners-free-native-risc-v-ci-on-github/) - The introduction of free RISC-V CI runners on GitHub, opening new opportunities for open hardware development. [Comments](https://lobste.rs/s/eelhis/free_native_risc_v_rv64gc_ci_on_github)

* [The First Video Game Was Just a Box in the Corner of a Bar](https://lithub.com/the-very-first-video-game-was-just-a-box-in-the-corner-of-a-bar/) - A nostalgic exploration of the origins of video games and an ode to the first arcade game ever. [Comments](https://news.ycombinator.com/item?id=47535937)

## AI & Machine Learning

* [The Cognitive Dark Forest](https://ryelang.org/blog/posts/cognitive-dark-forest/) - A thought-provoking piece that compares the online experience of navigating conflicting ideas to traversing a 'dark forest'. [Comments](https://lobste.rs/s/bpotqb/cognitive_dark_forest)

* [Google Unveils TurboQuant, a New AI Memory Compression Algorithm](https://soylentnews.org/article.pl?sid=26/03/28/0349246&amp;from=rss) - Google introduces TurboQuant, an advanced AI memory compression algorithm designed to optimize performance. [Comments](https://news.ycombinator.com/item?id=47569864)

* [Copilot Edited an Ad into My PR](https://notes.zachmanson.com/copilot-edited-an-ad-into-my-pr/) - A user's bizarre encounter with Copilot showing advertisements within their pull request code edits. [Comments](https://news.ycombinator.com/item?id=47570269)

## Historical & Thoughtful Perspectives

* [Apple's Early Days: Massive Oral History Shares Stories About Young Wozniak and Jobs](https://apple.slashdot.org/story/26/03/30/0547245/apples-early-days-massive-oral-history-shares-stories-about-young-wozniak-and-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A treasure trove of oral histories focusing on Apple's early journey and its iconic founders. [Comments](https://news.ycombinator.com/item?id=47572130)

* [15 Years, One Server, 8GB RAM and 500k Users – How Webminal Refuses to Die](https://community.webminal.org/t/15-years-one-server-8gb-ram-and-500k-users-how-webminal-refuses-to-die/8803) - An inspiring story of resilience and minimal resource usage in the digital world. [Comments](https://news.ycombinator.com/item?id=47570940)

* [15 Years of Forking (Waterfox)](https://www.waterfox.com/blog/15-years-of-forking/) - The story of Waterfox and its journey through 15 years of open-source influence. [Comments](https://lobste.rs/s/yyxyjy/15_years_forking_waterfox)

* [The Rise and Fall of IBM's 4 Pi Aerospace Computers: An Illustrated History](http://www.righto.com/2026/03/ibm-4-pi-computer-history.html) - A deep historical dive into the lifecycle of IBM's aerospace computing systems. [Comments](https://lobste.rs/s/xv3s8d/rise_fall_ibm_s_4_pi_aerospace_computers)

## Miscellaneous Highlights

* [ChatGPT Won't Let You Type Until Cloudflare Reads Your React State. I Decrypted the Program That Does It](https://www.buchodi.com/chatgpt-wont-let-you-type-until-cloudflare-reads-your-react-state-i-decrypted-the-program-that-does-it/) - An intriguing reverse-engineering effort to uncover strict input controls from popular AI software. [Comments](https://lobste.rs/s/lxkqhp/chatgpt_won_t_let_you_type_until)

* [15 Years of Forking](https://www.waterfox.com/blog/15-years-of-forking/) Revolutionising waterfox's early days revealing connects themed issue comments.parallel nuances!

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

* [2026-03-30, 09:04:59](https://lobste.rs/s/0ivjey/fully_local_code_embeds) - [Fully Local Code Embeds](https://www.aleksandrhovhannisyan.com/blog/local-code-embeds/)
* [2026-03-30, 08:51:18](https://news.ycombinator.com/item?id=47572000) - [Stripe is down](https://status.stripe.com/)
* [2026-03-30, 07:34:04](https://news.ycombinator.com/item?id=47571495) - [Hamilton-Jacobi-Bellman Equation: Reinforcement Learning and Diffusion Models](https://dani2442.github.io/posts/continuous-rl/)
* [2026-03-30, 07:34:00](https://apple.slashdot.org/story/26/03/30/0547245/apples-early-days-massive-oral-history-shares-stories-about-young-wozniak-and-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple&apos;s Early Days: Massive Oral History Shares Stories About Young Wozniak and Jobs](https://apple.slashdot.org/story/26/03/30/0547245/apples-early-days-massive-oral-history-shares-stories-about-young-wozniak-and-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-30, 07:17:06](https://news.ycombinator.com/item?id=47571376) - [I use excalidraw to manage my diagrams for my blog](https://blog.lysk.tech/excalidraw-frame-export/)
* [2026-03-30, 07:14:21](https://lobste.rs/s/kqnoi9/okapi_what_if_ripgrep_could_edit) - [Okapi, or “What if ripgrep Could Edit?”](https://kocharhook.com/post/6/)
* [2026-03-30, 07:03:18](https://news.ycombinator.com/item?id=47571279) - [I am definitely missing the pre-AI writing era](https://www.lesswrong.com/posts/BJ4pnropWdnzzgeJc/i-am-definitely-missing-the-pre-ai-writing-era)
* [2026-03-30, 06:50:00](https://soylentnews.org/article.pl?sid=26/03/28/0354240&amp;from=rss) - [The Drone Swarm is Coming, and NATO Air Defenses Are Too Expensive to Cope](https://soylentnews.org/article.pl?sid=26/03/28/0354240&amp;from=rss)
* [2026-03-30, 06:16:09](https://lobste.rs/s/zkg4wr/uvwatauavawh_pushy_string) - [UVWATAUAVAWH, The Pushy String](https://www.hexacorn.com/blog/2013/05/16/uvwatauavawh-meet-the-pushy-string/)
* [2026-03-30, 06:08:53](https://news.ycombinator.com/item?id=47570940) - [15 years, one server, 8GB RAM and 500k users – how Webminal refuses to die](https://community.webminal.org/t/15-years-one-server-8gb-ram-and-500k-users-how-webminal-refuses-to-die/8803)
* [2026-03-30, 05:41:18](https://lobste.rs/s/lxkqhp/chatgpt_won_t_let_you_type_until) - [ChatGPT Won&apos;t Let You Type Until Cloudflare Reads Your React State. I Decrypted the Program That Does It](https://www.buchodi.com/chatgpt-wont-let-you-type-until-cloudflare-reads-your-react-state-i-decrypted-the-program-that-does-it/)
* [2026-03-30, 05:27:18](https://news.ycombinator.com/item?id=47570666) - [The curious case of retro demo scene graphics](https://www.datagubbe.se/aipixels/)
* [2026-03-30, 05:21:21](https://lobste.rs/s/yyxyjy/15_years_forking_waterfox) - [15 Years of Forking (Waterfox)](https://www.waterfox.com/blog/15-years-of-forking/)
* [2026-03-30, 05:19:22](https://lobste.rs/s/lxzmm2/clojure_documentary_trailer) - [Clojure: The Documentary (Trailer)](https://youtu.be/JJEyffSdBsk)
* [2026-03-30, 05:12:51](https://lobste.rs/s/wkukvc/steam_controller_d0ggle_adventure) - [The Steam Controller D0ggle Adventure](https://im-just-lee.ing/steam-controller-d0ggle-54682aa4/)
* [2026-03-30, 04:39:15](https://news.ycombinator.com/item?id=47570435) - [VHDL&apos;s Crown Jewel](https://www.sigasi.com/opinion/jan/vhdls-crown-jewel/)
* [2026-03-30, 04:04:31](https://news.ycombinator.com/item?id=47570269) - [Copilot edited an ad into my PR](https://notes.zachmanson.com/copilot-edited-an-ad-into-my-pr/)
* [2026-03-30, 03:34:00](https://tech.slashdot.org/story/26/03/30/0219229/rivian-and-lucid-win-right-to-sell-their-evs-directly-to-buyers-in-washington-state?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rivian and Lucid Win Right to Sell Their EVs Directly to Buyers in Washington State](https://tech.slashdot.org/story/26/03/30/0219229/rivian-and-lucid-win-right-to-sell-their-evs-directly-to-buyers-in-washington-state?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-30, 02:07:00](https://soylentnews.org/article.pl?sid=26/03/28/0349246&amp;from=rss) - [Google Unveils TurboQuant, a New AI Memory Compression Algorithm](https://soylentnews.org/article.pl?sid=26/03/28/0349246&amp;from=rss)
* [2026-03-30, 01:38:17](https://news.ycombinator.com/item?id=47569471) - [Philly courts will ban all smart eyeglasses starting next week](https://www.inquirer.com/news/philadelphia/smart-glasses-ai-meta-courts-20260326.html)
* [2026-03-30, 01:37:00](https://tech.slashdot.org/story/26/03/30/0135235/will-social-media-change-after-youtube-and-metas-court-defeat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Will Social Media Change After YouTube and Meta&apos;s Court Defeat?](https://tech.slashdot.org/story/26/03/30/0135235/will-social-media-change-after-youtube-and-metas-court-defeat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-30, 01:15:11](https://lobste.rs/s/zgkb0z/this_gorgeous_diy_camera_looks_straight) - [This gorgeous DIY camera looks straight out of Severance](https://www.dpreview.com/articles/9055612016/saturnix-diy-camera-alien-sci-fi-raspberry-pi)
* [2026-03-30, 00:57:59](https://lobste.rs/s/ttyfeb/ai_agents_could_make_free_software_matter) - [AI Agents Could Make Free Software Matter Again](https://www.gjlondon.com/blog/ai-agents-could-make-free-software-matter-again/)
* [2026-03-30, 00:19:51](https://lobste.rs/s/eelhis/free_native_risc_v_rv64gc_ci_on_github) - [Free, native RISC-V (RV64GC) CI on GitHub](https://riseproject.dev/2026/03/24/announcing-the-rise-risc-v-runners-free-native-risc-v-ci-on-github/)
* [2026-03-29, 23:52:53](https://lobste.rs/s/uh3cha/telecheck_tyms_past) - [telecheck and tyms past](https://computer.rip/2026-03-29-telecheck-and-tyms-past.html)
* [2026-03-29, 23:46:00](https://developers.slashdot.org/story/26/03/29/2343236/is-it-time-for-open-source-to-start-charging-for-access?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is It Time For Open Source to Start Charging For Access?](https://developers.slashdot.org/story/26/03/29/2343236/is-it-time-for-open-source-to-start-charging-for-access?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-29, 22:59:34](https://lobste.rs/s/zxtsba/making_hnsw_actually_work_with_where) - [Making HNSW actually work with WHERE clauses](https://cigrainger.com/blog/duckdb-hnsw-acorn/)
* [2026-03-29, 22:57:08](https://lobste.rs/s/350aqk/c_26_is_done_trip_report_march_2026_iso_c) - [C++26 is done! — Trip report: March 2026 ISO C++ standards meeting (London Croydon, UK)](https://herbsutter.com/2026/03/29/c26-is-done-trip-report-march-2026-iso-c-standards-meeting-london-croydon-uk/)
* [2026-03-29, 22:36:35](https://lobste.rs/s/wnuuoj/oxcaml_labs) - [OxCaml Labs](https://anil.recoil.org/projects/oxcaml)
* [2026-03-29, 22:21:34](https://news.ycombinator.com/item?id=47568028) - [Coding agents could make free software matter again](https://www.gjlondon.com/blog/ai-agents-could-make-free-software-matter-again/)
* [2026-03-29, 22:19:00](https://entertainment.slashdot.org/story/26/03/29/2216247/project-hail-mary-real-space-science-real-astrophotography?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Project Hail Mary&apos;:  Real Space Science, Real Astrophotography](https://entertainment.slashdot.org/story/26/03/29/2216247/project-hail-mary-real-space-science-real-astrophotography?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-29, 21:26:00](https://soylentnews.org/article.pl?sid=26/03/28/0347204&amp;from=rss) - [A 32-Year-Old Bug Walks Into a Telnet Server](https://soylentnews.org/article.pl?sid=26/03/28/0347204&amp;from=rss)
* [2026-03-29, 21:15:00](https://hardware.slashdot.org/story/26/03/29/2112231/worlds-smallest-qr-code---smaller-than-bacteria---could-store-data-for-centuries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [World&apos;s Smallest QR Code - Smaller Than Bacteria - Could Store Data for Centuries](https://hardware.slashdot.org/story/26/03/29/2112231/worlds-smallest-qr-code---smaller-than-bacteria---could-store-data-for-centuries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-29, 20:30:02](https://news.ycombinator.com/item?id=47566960) - [The road signs that teach travellers about France](https://www.bbc.com/travel/article/20260327-the-road-signs-that-teach-travellers-about-france)
* [2026-03-29, 20:21:05](https://news.ycombinator.com/item?id=47566865) - [ChatGPT won&apos;t let you type until Cloudflare reads your React state](https://www.buchodi.com/chatgpt-wont-let-you-type-until-cloudflare-reads-your-react-state-i-decrypted-the-program-that-does-it/)
* [2026-03-29, 20:04:51](https://lobste.rs/s/gjahwq/repair_2_agilent_54831_oscilloscopes) - [Repair of 2 Agilent 54831 Oscilloscopes](https://tomverbeure.github.io/2026/03/28/Repair-of-Two-Agilent-54831-Oscilloscopes.html)
* [2026-03-29, 20:00:02](https://news.ycombinator.com/item?id=47566653) - [Midnight train from GA: A view of America from the tracks as airports struggle](https://apnews.com/article/airports-shutdown-long-lines-train-travel-amtrak-e4d8ea591b3b036142c2bf2dee7dff5a)
* [2026-03-29, 19:48:00](https://hardware.slashdot.org/story/26/03/29/1947202/this-friendly-robot-just-installed-100-mw-of-solar-power?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [This Friendly Robot Just Installed 100 MW of Solar Power](https://hardware.slashdot.org/story/26/03/29/1947202/this-friendly-robot-just-installed-100-mw-of-solar-power?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-29, 19:36:21](https://news.ycombinator.com/item?id=47566442) - [The Cognitive Dark Forest](https://ryelang.org/blog/posts/cognitive-dark-forest/)
* [2026-03-29, 19:08:20](https://news.ycombinator.com/item?id=47566143) - [My MacBook keyboard is broken and it&apos;s insanely expensive to fix](https://tobiasberg.net/posts/my-macbook-keyboard-is-broken-and-its-insanely-expensive-to-fix/)
* [2026-03-29, 19:06:19](https://lobste.rs/s/xv3s8d/rise_fall_ibm_s_4_pi_aerospace_computers) - [The rise and fall of IBM&apos;s 4 Pi aerospace computers: an illustrated history](http://www.righto.com/2026/03/ibm-4-pi-computer-history.html)
* [2026-03-29, 18:34:00](https://tech.slashdot.org/story/26/03/29/1832200/blueskys-newest-product-an-ai-tool-that-gives-you-custom-feeds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bluesky&apos;s Newest Product: an AI Tool That Gives You Custom Feeds](https://tech.slashdot.org/story/26/03/29/1832200/blueskys-newest-product-an-ai-tool-that-gives-you-custom-feeds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-29, 18:19:58](https://lobste.rs/s/gx94qn/pretext_pure_javascript_typescript) - [pretext: Pure JavaScript/TypeScript library for multiline text measurement &amp; layout](https://github.com/chenglou/pretext)
* [2026-03-29, 18:01:55](https://lobste.rs/s/vixzkq/who_s_hiring_q2_2026) - [Who&apos;s hiring? Q2 2026](https://lobste.rs/s/vixzkq/who_s_hiring_q2_2026)
* [2026-03-29, 17:46:12](https://news.ycombinator.com/item?id=47565365) - [C++26 is done: ISO C++ standards meeting Trip Report](https://herbsutter.com/2026/03/29/c26-is-done-trip-report-march-2026-iso-c-standards-meeting-london-croydon-uk/)
* [2026-03-29, 17:44:38](https://lobste.rs/s/64hfnw/neovim_0_12_0) - [Neovim 0.12.0](https://github.com/neovim/neovim/releases/tag/v0.12.0)
* [2026-03-29, 16:34:00](https://news.slashdot.org/story/26/03/29/066219/amazon-gambles-on-4b-push-into-americas-rural-areas-may-soon-carry-more-parcels-than-usps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Gambles on $4B Push Into America&apos;s Rural Areas, May Soon Carry More Parcels Than USPS](https://news.slashdot.org/story/26/03/29/066219/amazon-gambles-on-4b-push-into-americas-rural-areas-may-soon-carry-more-parcels-than-usps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-29, 16:32:00](https://soylentnews.org/article.pl?sid=26/03/28/0345249&amp;from=rss) - [Google is Now Changing News Headlines – Without Permission](https://soylentnews.org/article.pl?sid=26/03/28/0345249&amp;from=rss)
* [2026-03-29, 16:12:22](https://news.ycombinator.com/item?id=47564421) - [Voyager 1 runs on 69 KB of memory and an 8-track tape recorder](https://techfixated.com/a-1977-time-capsule-voyager-1-runs-on-69-kb-of-memory-and-an-8-track-tape-recorder-4/)
* [2026-03-29, 15:46:50](https://lobste.rs/s/bpotqb/cognitive_dark_forest) - [The Cognitive Dark Forest](https://ryelang.org/blog/posts/cognitive-dark-forest/)
* [2026-03-29, 15:34:00](https://news.slashdot.org/story/26/03/28/2254256/apple-now-requires-device-level-age-verification-in-the-uk-could-the-us-be-next?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Now Requires Device-Level Age Verification in the UK. Could the US Be Next?](https://news.slashdot.org/story/26/03/28/2254256/apple-now-requires-device-level-age-verification-in-the-uk-could-the-us-be-next?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-29, 14:34:00](https://science.slashdot.org/story/26/03/28/187258/jupiters-lightning-may-have-the-force-of-nuclear-weapons?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Jupiter&apos;s Lightning May Have the Force of Nuclear Weapons](https://science.slashdot.org/story/26/03/28/187258/jupiters-lightning-may-have-the-force-of-nuclear-weapons?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-29, 13:21:28](https://lobste.rs/s/isaccy/introduction_pinetime_pro) - [Introduction to the PineTime Pro](https://pine64.org/2026/03/28/pinetime_march_2026/)
* [2026-03-29, 11:52:00](https://soylentnews.org/article.pl?sid=26/03/27/0334236&amp;from=rss) - [Pilot Didn&apos;t Mind NASA&apos;s Experimental Plane Doesnt Have a Front Window](https://soylentnews.org/article.pl?sid=26/03/27/0334236&amp;from=rss)
* [2026-03-29, 11:04:00](https://tech.slashdot.org/story/26/03/29/0249241/what-made-bell-labs-so-successful?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What Made Bell Labs So Successful?](https://tech.slashdot.org/story/26/03/29/0249241/what-made-bell-labs-so-successful?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-29, 10:29:00](https://lobste.rs/s/ntmv9j/what_category_theory_teaches_us_about) - [What Category Theory Teaches Us About DataFrames](https://mchav.github.io/what-category-theory-teaches-us-about-dataframes/)
* [2026-03-29, 07:34:00](https://entertainment.slashdot.org/story/26/03/29/0722208/disney-ends-1b-openai-investment-after-soras-surprise-closure-whats-next?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Disney Ends $1B OpenAI Investment After Sora&apos;s Surprise Closure. What&apos;s Next?](https://entertainment.slashdot.org/story/26/03/29/0722208/disney-ends-1b-openai-investment-after-soras-surprise-closure-whats-next?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-29, 07:03:00](https://soylentnews.org/article.pl?sid=26/03/27/0325254&amp;from=rss) - [Someone Forked systemd to Strip Out Its Age Verification Support](https://soylentnews.org/article.pl?sid=26/03/27/0325254&amp;from=rss)
* [2026-03-29, 04:49:25](https://lobste.rs/s/dblov3/libeatmydata_disable_fsync_save) - [libeatmydata - disable fsync and SAVE](https://www.flamingspork.com/projects/libeatmydata/)
* [2026-03-29, 03:34:00](https://it.slashdot.org/story/26/03/28/2013229/do-emergency-microsoft-oracle-patches-point-to-wider-issues?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Do Emergency Microsoft, Oracle Patches Point to Wider Issues?](https://it.slashdot.org/story/26/03/28/2013229/do-emergency-microsoft-oracle-patches-point-to-wider-issues?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-29, 02:18:00](https://soylentnews.org/article.pl?sid=26/03/27/0319208&amp;from=rss) - [Nvidia CEO Jensen Huang Says ‘I Think We&apos;ve Achieved AGI’](https://soylentnews.org/article.pl?sid=26/03/27/0319208&amp;from=rss)
* [2026-03-29, 01:34:00](https://apple.slashdot.org/story/26/03/28/2055255/macos-264-adds-warnings-for-clickfix-attacks-to-its-terminal-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [MacOS 26.4 Adds Warnings For ClickFix Attacks to Its Terminal App](https://apple.slashdot.org/story/26/03/28/2055255/macos-264-adds-warnings-for-clickfix-attacks-to-its-terminal-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-28, 21:34:00](https://soylentnews.org/article.pl?sid=26/03/27/0310204&amp;from=rss) - [Age Checks Creep Into Linux, systemd Locks It in, Developer Defends Himself](https://soylentnews.org/article.pl?sid=26/03/27/0310204&amp;from=rss)
* [2026-03-28, 20:25:19](https://lobste.rs/s/2zvgxm/i_decompiled_white_house_s_new_app) - [I Decompiled the White House&apos;s New App](https://blog.thereallo.dev/blog/decompiling-the-white-house-app)
* [2026-03-28, 19:13:02](https://lobste.rs/s/u4bws9/bubblewrap_your_dev_env_agents) - [BubbleWrap your dev env and agents](https://dpc.pw/posts/bubblewrap-your-dev-env-and-agents/)
* [2026-03-28, 18:58:13](https://news.ycombinator.com/item?id=47557299) - [Hardware Image Compression](https://www.ludicon.com/castano/blog/2026/03/hardware-image-compression/)
* [2026-03-28, 16:52:45](https://news.ycombinator.com/item?id=47556290) - [Pretext: TypeScript library for multiline text measurement and layout](https://github.com/chenglou/pretext)
* [2026-03-28, 16:51:00](https://soylentnews.org/article.pl?sid=26/03/26/0657232&amp;from=rss) - [CERN Scientists Burn AI Into Silicon to Stem Data Deluge](https://soylentnews.org/article.pl?sid=26/03/26/0657232&amp;from=rss)
* [2026-03-28, 12:09:00](https://soylentnews.org/article.pl?sid=26/03/26/0650221&amp;from=rss) - [Elon Musk Wants to Build 50 Times More Chips Than the World Currently Produces, Using &apos;New Physics&apos;](https://soylentnews.org/article.pl?sid=26/03/26/0650221&amp;from=rss)
* [2026-03-28, 07:24:00](https://soylentnews.org/article.pl?sid=26/03/26/0645257&amp;from=rss) - [Australia to Datacenter Operators: BYO Energy, Pay Your Way, Build Green, or Stay Home](https://soylentnews.org/article.pl?sid=26/03/26/0645257&amp;from=rss)
* [2026-03-28, 02:36:00](https://soylentnews.org/article.pl?sid=26/03/26/0644236&amp;from=rss) - [An Uncontrolled Experiment in Atmospheric Chemistry](https://soylentnews.org/article.pl?sid=26/03/26/0644236&amp;from=rss)
* [2026-03-27, 23:10:36](https://news.ycombinator.com/item?id=47549586) - [About the Atmosphere](https://toni.org/2026/03/27/about-the-atmosphere/)
* [2026-03-27, 21:50:00](https://soylentnews.org/article.pl?sid=26/03/26/0634229&amp;from=rss) - [Concerns Raised Over Shahed Kamikaze Drone Listings on Alibaba](https://soylentnews.org/article.pl?sid=26/03/26/0634229&amp;from=rss)
* [2026-03-27, 17:22:11](https://news.ycombinator.com/item?id=47545607) - [15 Years of Forking](https://www.waterfox.com/blog/15-years-of-forking/)
* [2026-03-27, 16:03:00](https://soylentnews.org/article.pl?sid=26/03/26/0225217&amp;from=rss) - [Palantir Trial Plugs Into UK Financial Watchdog&apos;s Data Trove](https://soylentnews.org/article.pl?sid=26/03/26/0225217&amp;from=rss)
* [2026-03-27, 15:40:23](https://news.ycombinator.com/item?id=47544114) - [When Coupled Volcanoes Talk, These Researchers Listen](https://www.quantamagazine.org/when-coupled-volcanoes-talk-these-researchers-listen-20260327/)
* [2026-03-27, 14:40:47](https://news.ycombinator.com/item?id=47543198) - [Interview: Nobonoko, Master of the Minimal Sequencer](https://fi-le.net/nobo/)
* [2026-03-27, 11:20:00](https://soylentnews.org/article.pl?sid=26/03/26/0220234&amp;from=rss) - [Amid Fuel Crunch, Cuban Mechanic Converts Car to Run on Charcoal](https://soylentnews.org/article.pl?sid=26/03/26/0220234&amp;from=rss)
* [2026-03-27, 10:23:38](https://news.ycombinator.com/item?id=47540903) - [Ninja is a small build system with a focus on speed](https://github.com/ninja-build/ninja)
* [2026-03-27, 06:38:00](https://soylentnews.org/article.pl?sid=26/03/26/0219214&amp;from=rss) - [The US Bans All New Foreign-Made Network Routers](https://soylentnews.org/article.pl?sid=26/03/26/0219214&amp;from=rss)
* [2026-03-27, 01:55:00](https://soylentnews.org/article.pl?sid=26/03/26/0217248&amp;from=rss) - [TCL&apos;s German QLED Ban Puts Pressure on TV Brands to be More Honest About QDs](https://soylentnews.org/article.pl?sid=26/03/26/0217248&amp;from=rss)
* [2026-03-26, 21:22:32](https://news.ycombinator.com/item?id=47535937) - [The First Video Game Was Just a Box in the Corner of a Bar](https://lithub.com/the-very-first-video-game-was-just-a-box-in-the-corner-of-a-bar/)
* [2026-03-26, 21:05:00](https://soylentnews.org/article.pl?sid=26/03/25/2355253&amp;from=rss) - [Supreme Court Says Internet Service Provider Isn&apos;t Liable for Bootlegged Music Downloads](https://soylentnews.org/article.pl?sid=26/03/25/2355253&amp;from=rss)
* [2026-03-26, 16:23:00](https://soylentnews.org/article.pl?sid=26/03/25/2344247&amp;from=rss) - [Tech Employees Are Reportedly Being Evaluated by How Fast They Burn Through LLM Tokens](https://soylentnews.org/article.pl?sid=26/03/25/2344247&amp;from=rss)
* [2026-03-26, 16:14:48](https://news.ycombinator.com/item?id=47532338) - [Gonon: Building a Clock with No Numerals](https://tonygaeta.com/perceptor/code/gonon)
* [2026-03-26, 15:17:17](https://news.ycombinator.com/item?id=47531576) - [The RISE RISC-V Runners: free, native RISC-V CI on GitHub](https://riseproject.dev/2026/03/24/announcing-the-rise-risc-v-runners-free-native-risc-v-ci-on-github/)
* [2026-03-26, 11:40:00](https://soylentnews.org/article.pl?sid=26/03/25/2341257&amp;from=rss) - [Micron Predicts That Cars Will Need 300GB of RAM](https://soylentnews.org/article.pl?sid=26/03/25/2341257&amp;from=rss)
* [2026-03-26, 06:59:00](https://soylentnews.org/article.pl?sid=26/03/25/2339207&amp;from=rss) - [The Mystery of How Volcanic Lightning Happens Has Been Solved](https://soylentnews.org/article.pl?sid=26/03/25/2339207&amp;from=rss)
* [2026-03-26, 02:12:00](https://soylentnews.org/article.pl?sid=26/03/23/163239&amp;from=rss) - [NASA Sets &apos;Impossible&apos; Ground Rules for Relocation of &apos;Flown Space Vehicle&apos;](https://soylentnews.org/article.pl?sid=26/03/23/163239&amp;from=rss)
