# [News Summary](https://kherrick.github.io/news-summary/)

## Science and Technology Innovations

* [Twisted Graphene Reveals Double-Dome Superconductivity Controlled by Electric Field](https://soylentnews.org/article.pl?sid=25/10/05/2320242&from=rss)

* [Harvard Researchers Develop First Ever Continuously Operating Quantum Computer](https://soylentnews.org/article.pl?sid=25/10/05/201242&from=rss)

* [Black Holes Might Hold the Key To a 60-Year Cosmic Mystery](https://science.slashdot.org/story/25/10/06/2332220/black-holes-might-hold-the-key-to-a-60-year-cosmic-mystery?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Earth's Crust is Tearing Apart Off the Pacific Northwest—and That's Not Necessarily Bad News](https://soylentnews.org/article.pl?sid=25/10/05/1935200&from=rss)

* [JWST Finds an Exoplanet Around a Pulsar Whose Atmosphere is All Carbon](https://soylentnews.org/article.pl?sid=25/10/05/0119224&from=rss)

* [Scientists Turn Light Into Supersolid](https://soylentnews.org/article.pl?sid=25/10/04/1856221&from=rss)

## Artificial Intelligence and Programming

* [Venture Capital Valuations of AI Startups Surge and Raise Fears of an AI Bubble Forming](https://soylentnews.org/article.pl?sid=25/10/05/1955231&from=rss)

* [OpenAI Will Let Developers Build Apps That Work Inside ChatGPT](https://tech.slashdot.org/story/25/10/06/2133248/openai-will-let-developers-build-apps-that-work-inside-chatgpt?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Redis Warns of Critical Flaw Impacting Thousands of Instances](https://it.slashdot.org/story/25/10/06/222222/redis-warns-of-critical-flaw-impacting-thousands-of-instances?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Origami Patterns Solve a Major Physics Riddle](https://www.quantamagazine.org/origami-patterns-solve-a-major-physics-riddle-20251006/)

* [The evolution of Lua, continued](https://www.lua.org/doc/cola.pdf)

## Corporate and Governance News

* [CBS News Was Just Taken Over By a Substack](https://news.slashdot.org/story/25/10/06/2320224/cbs-news-was-just-taken-over-by-a-substack?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [California Biotech Tycoon Found Guilty of Orchestrating Rival's Murder](https://science.slashdot.org/story/25/10/06/2249240/california-biotech-tycoon-found-guilty-of-orchestrating-rivals-murder?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [AstraZeneca Signs Up For $555 Million AI Deal With Algen To Develop Therapies](https://science.slashdot.org/story/25/10/06/2255243/astrazeneca-signs-up-for-555-million-ai-deal-with-algen-to-develop-therapies?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [California law forces Netflix, Hulu to turn down ad volumes](https://www.politico.com/news/2025/10/06/dial-it-down-california-forces-netflix-hulu-to-lower-ad-volume-00595663)

* [Deloitte to refund the Australian government after using AI in $440k report](https://www.theguardian.com/australia-news/2025/oct/06/deloitte-to-pay-money-back-to-albanese-government-after-using-ai-in-440000-report)

## Open Source and Development Tools

* [Pdoc – Generate API documentation for Python projects](https://pdoc.dev/)

* [Common Lisp implementation of the Forth 2012 Standard](https://github.com/gmpalter/cl-forth/tree/main)

* [The Mondrian introduction to functional optics](http://marcosh.github.io/post/2025/10/07/the-mondrian-introduction-to-functional-optics.html)

* [My First Contribution to Linux](https://vkoskiv.com/first-linux-patch/)

* [nanopb: Protocol Buffers with small code size](https://github.com/nanopb/nanopb)

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

* [2025-10-07, 12:49:00](https://soylentnews.org/article.pl?sid=25/10/05/2320242&amp;from=rss) - [Twisted Graphene Reveals Double-Dome Superconductivity Controlled by Electric Field](https://soylentnews.org/article.pl?sid=25/10/05/2320242&amp;from=rss)
* [2025-10-07, 12:44:18](https://lobste.rs/s/buwmju/evolution_lua_continued) - [The evolution of Lua, continued](https://www.lua.org/doc/cola.pdf)
* [2025-10-07, 12:41:40](https://news.ycombinator.com/item?id=45502387) - [Provision (YC S22) Is Hiring](https://www.ycombinator.com/companies/provision/jobs/JJ9fZxg-fullstack-software-engineer-in-person-toronto-canada)
* [2025-10-07, 11:49:19](https://lobste.rs/s/6uemc8/seeing_like_software_company) - [Seeing like a software company](https://www.seangoedecke.com/seeing-like-a-software-company/)
* [2025-10-07, 10:51:18](https://lobste.rs/s/eehniy/common_lisp_implementation_forth_2012) - [Common Lisp implementation of the Forth 2012 Standard](https://github.com/gmpalter/cl-forth/tree/main)
* [2025-10-07, 10:42:47](https://news.ycombinator.com/item?id=45501488) - [The Quiet Driving Force Behind Rising Curtailment Costs in Great Britain](https://ukerc.ac.uk/news/transmission-network-unavailability-the-quiet-driving-force-behind-rising-curtailment-costs-in-great-britain/)
* [2025-10-07, 10:07:50](https://news.ycombinator.com/item?id=45501279) - [Like Vercel, but open source and for all language](https://github.com/hunvreus/devpush)
* [2025-10-07, 10:00:00](https://tech.slashdot.org/story/25/10/06/2338211/microsoft-is-plugging-more-holes-that-let-you-use-windows-11-without-an-online-account?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Is Plugging More Holes That Let You Use Windows 11 Without an Online Account](https://tech.slashdot.org/story/25/10/06/2338211/microsoft-is-plugging-more-holes-that-let-you-use-windows-11-without-an-online-account?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-07, 09:50:49](https://news.ycombinator.com/item?id=45501189) - [Nobel Prize in Physics 2025](https://www.nobelprize.org/prizes/physics/2025/popular-information/)
* [2025-10-07, 09:35:53](https://news.ycombinator.com/item?id=45501114) - [The Mondrian introduction to functional optics](http://marcosh.github.io/post/2025/10/07/the-mondrian-introduction-to-functional-optics.html)
* [2025-10-07, 07:58:00](https://soylentnews.org/article.pl?sid=25/10/05/201242&amp;from=rss) - [Harvard Researchers Develop First Ever Continuously Operating Quantum Computer](https://soylentnews.org/article.pl?sid=25/10/05/201242&amp;from=rss)
* [2025-10-07, 07:51:57](https://news.ycombinator.com/item?id=45500485) - [Deloitte to refund the Australian government after using AI in $440k report](https://www.theguardian.com/australia-news/2025/oct/06/deloitte-to-pay-money-back-to-albanese-government-after-using-ai-in-440000-report)
* [2025-10-07, 07:00:00](https://science.slashdot.org/story/25/10/06/2332220/black-holes-might-hold-the-key-to-a-60-year-cosmic-mystery?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Black Holes Might Hold the Key To a 60-Year Cosmic Mystery](https://science.slashdot.org/story/25/10/06/2332220/black-holes-might-hold-the-key-to-a-60-year-cosmic-mystery?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-07, 06:24:25](https://lobste.rs/s/m744cb/fix_iphone_antennagate_2010_was_20_bytes) - [The fix to the iPhone Antennagate in 2010 was 20 bytes](https://hachyderm.io/@samhenrigold/115330105694760262)
* [2025-10-07, 04:03:49](https://news.ycombinator.com/item?id=45499281) - [California law forces Netflix, Hulu to turn down ad volumes](https://www.politico.com/news/2025/10/06/dial-it-down-california-forces-netflix-hulu-to-lower-ad-volume-00595663)
* [2025-10-07, 03:40:41](https://news.ycombinator.com/item?id=45499170) - [Pdoc – Generate API documentation for Python projects](https://pdoc.dev/)
* [2025-10-07, 03:30:00](https://science.slashdot.org/story/25/10/06/236216/quarter-of-uk-university-physics-departments-at-risk-of-closing-survey-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Quarter of UK University Physics Departments At Risk of Closing, Survey Finds](https://science.slashdot.org/story/25/10/06/236216/quarter-of-uk-university-physics-departments-at-risk-of-closing-survey-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-07, 03:16:00](https://soylentnews.org/article.pl?sid=25/10/05/1955231&amp;from=rss) - [Venture Capital Valuations of AI Startups Surge and Raise Fears of an AI Bubble Forming](https://soylentnews.org/article.pl?sid=25/10/05/1955231&amp;from=rss)
* [2025-10-07, 02:10:00](https://news.slashdot.org/story/25/10/06/2320224/cbs-news-was-just-taken-over-by-a-substack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CBS News Was Just Taken Over By a Substack](https://news.slashdot.org/story/25/10/06/2320224/cbs-news-was-just-taken-over-by-a-substack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-07, 01:34:32](https://news.ycombinator.com/item?id=45498469) - [Origami Patterns Solve a Major Physics Riddle](https://www.quantamagazine.org/origami-patterns-solve-a-major-physics-riddle-20251006/)
* [2025-10-07, 01:30:00](https://science.slashdot.org/story/25/10/06/2255243/astrazeneca-signs-up-for-555-million-ai-deal-with-algen-to-develop-therapies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AstraZeneca Signs Up For $555 Million AI Deal With Algen To Develop Therapies](https://science.slashdot.org/story/25/10/06/2255243/astrazeneca-signs-up-for-555-million-ai-deal-with-algen-to-develop-therapies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-07, 00:50:00](https://science.slashdot.org/story/25/10/06/2249240/california-biotech-tycoon-found-guilty-of-orchestrating-rivals-murder?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [California Biotech Tycoon Found Guilty of Orchestrating Rival&apos;s Murder](https://science.slashdot.org/story/25/10/06/2249240/california-biotech-tycoon-found-guilty-of-orchestrating-rivals-murder?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-07, 00:24:12](https://lobste.rs/s/ourwmo/birth_prettier) - [Birth of Prettier](https://blog.vjeux.com/2025/javascript/birth-of-prettier.html)
* [2025-10-07, 00:10:00](https://it.slashdot.org/story/25/10/06/222222/redis-warns-of-critical-flaw-impacting-thousands-of-instances?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Redis Warns of Critical Flaw Impacting Thousands of Instances](https://it.slashdot.org/story/25/10/06/222222/redis-warns-of-critical-flaw-impacting-thousands-of-instances?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-06, 23:47:24](https://news.ycombinator.com/item?id=45497624) - [The least amount of CSS for a decent looking site (2023)](https://thecascade.dev/article/least-amount-of-css/)
* [2025-10-06, 23:30:00](https://hardware.slashdot.org/story/25/10/06/2145241/apple-hardware-head-john-ternus-top-pick-to-succeed-tim-cook-as-ceo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Hardware Head John Ternus Top Pick To Succeed Tim Cook As CEO](https://hardware.slashdot.org/story/25/10/06/2145241/apple-hardware-head-john-ternus-top-pick-to-succeed-tim-cook-as-ceo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-06, 23:15:26](https://news.ycombinator.com/item?id=45497384) - [Microsoft is plugging more holes that let you use Windows 11 without MS account](https://www.theverge.com/news/793579/microsoft-windows-11-local-account-bypass-workaround-changes)
* [2025-10-06, 22:50:00](https://yro.slashdot.org/story/25/10/06/2136244/suspect-arrested-after-threats-against-tiktoks-culver-city-headquarters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Suspect Arrested After Threats Against TikTok&apos;s Culver City Headquarters](https://yro.slashdot.org/story/25/10/06/2136244/suspect-arrested-after-threats-against-tiktoks-culver-city-headquarters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-06, 22:31:00](https://soylentnews.org/article.pl?sid=25/10/05/1935200&amp;from=rss) - [Earth&apos;s Crust is Tearing Apart Off the Pacific Northwest—and That&apos;s Not Necessarily Bad News](https://soylentnews.org/article.pl?sid=25/10/05/1935200&amp;from=rss)
* [2025-10-06, 22:30:12](https://news.ycombinator.com/item?id=45497027) - [RediShell: Critical remote code execution vulnerability in Redis](https://www.wiz.io/blog/wiz-research-redis-rce-cve-2025-49844)
* [2025-10-06, 22:10:00](https://tech.slashdot.org/story/25/10/06/2133248/openai-will-let-developers-build-apps-that-work-inside-chatgpt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Will Let Developers Build Apps That Work Inside ChatGPT](https://tech.slashdot.org/story/25/10/06/2133248/openai-will-let-developers-build-apps-that-work-inside-chatgpt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-06, 21:58:54](https://lobste.rs/s/2cpfsi/nanopb_protocol_buffers_with_small_code) - [nanopb: Protocol Buffers with small code size](https://github.com/nanopb/nanopb)
* [2025-10-06, 21:30:00](https://tech.slashdot.org/story/25/10/06/1945202/porsche-cant-add-wireless-charging-to-macan-taycan-ev-because-the-inductive-plate-doesnt-fit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Porsche Can&apos;t Add Wireless Charging To Macan, Taycan EV Because the Inductive Plate Doesn&apos;t Fit](https://tech.slashdot.org/story/25/10/06/1945202/porsche-cant-add-wireless-charging-to-macan-taycan-ev-because-the-inductive-plate-doesnt-fit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-06, 21:28:56](https://news.ycombinator.com/item?id=45496533) - [CodeMender: an AI agent for code security](https://deepmind.google/discover/blog/introducing-codemender-an-ai-agent-for-code-security/)
* [2025-10-06, 20:51:00](https://news.slashdot.org/story/25/10/06/1938255/some-workers-are-turning-to-pay-advance-apps-for-basic-expenses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Some Workers Are Turning To Pay-Advance Apps for Basic Expenses](https://news.slashdot.org/story/25/10/06/1938255/some-workers-are-turning-to-pay-advance-apps-for-basic-expenses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-06, 20:10:00](https://news.slashdot.org/story/25/10/06/1933231/ubuntu-linux-2604-lts-officially-named-resolute-raccoon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ubuntu Linux 26.04 LTS Officially Named Resolute Raccoon](https://news.slashdot.org/story/25/10/06/1933231/ubuntu-linux-2604-lts-officially-named-resolute-raccoon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-06, 19:54:47](https://lobste.rs/s/infxf7/servo_gtk) - [Servo GTK](https://blogs.gnome.org/nacho/2025/10/01/servo-gtk/)
* [2025-10-06, 19:30:00](https://games.slashdot.org/story/25/10/06/1929246/microsoft-assures-gamers-its-not-abandoning-xbox-hardware?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Assures Gamers It&apos;s Not Abandoning Xbox Hardware](https://games.slashdot.org/story/25/10/06/1929246/microsoft-assures-gamers-its-not-abandoning-xbox-hardware?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-06, 18:48:00](https://slashdot.org/story/25/10/06/1848254/chatgpt-now-has-800-million-weekly-active-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ChatGPT Now Has 800 Million Weekly Active Users ](https://slashdot.org/story/25/10/06/1848254/chatgpt-now-has-800-million-weekly-active-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-06, 18:29:18](https://lobste.rs/s/2ztwwv/this_month_redox_september_2025) - [This Month in Redox - September 2025](https://www.redox-os.org/news/this-month-250930/)
* [2025-10-06, 18:27:33](https://news.ycombinator.com/item?id=45494558) - [Apps SDK](https://developers.openai.com/apps-sdk/)
* [2025-10-06, 17:44:00](https://soylentnews.org/article.pl?sid=25/10/05/1356208&amp;from=rss) - [Flock’s Gunshot Detection Microphones Will Start Listening for Human Voices](https://soylentnews.org/article.pl?sid=25/10/05/1356208&amp;from=rss)
* [2025-10-06, 16:52:58](https://news.ycombinator.com/item?id=45493358) - [Ladybird passes the Apple 90% threshold on web-platform-tests](https://twitter.com/awesomekling/status/1974781722953953601)
* [2025-10-06, 16:48:35](https://lobste.rs/s/syavo2/i_m_building_browser_for_reverse) - [I&apos;m Building a Browser for Reverse Engineers](https://nullpt.rs/reverse-engineering-browser)
* [2025-10-06, 16:21:09](https://lobste.rs/s/xmlpu8/saving_my_commit_with_jj_evolog) - [Saving My Commit With `jj evolog`](https://landaire.net/jj-evolog/)
* [2025-10-06, 16:16:03](https://lobste.rs/s/je72sf/openzl_open_source_format_aware) - [OpenZL: An Open Source Format-Aware Compression Framework](https://engineering.fb.com/2025/10/06/developer-tools/openzl-open-source-format-aware-compression-framework/)
* [2025-10-06, 16:01:58](https://news.ycombinator.com/item?id=45492803) - [OpenZL: An open source format-aware compression framework](https://engineering.fb.com/2025/10/06/developer-tools/openzl-open-source-format-aware-compression-framework/)
* [2025-10-06, 16:00:34](https://lobste.rs/s/9rn6ts/mere_add_foreign_key_can_wipe_out_your) - [A mere add_foreign_key can wipe out your whole Rails + SQLite production table](https://kyrylo.org/software/2025/09/27/a-mere-add-foreign-key-can-wipe-out-your-whole-rails-sqlite-production-table.html)
* [2025-10-06, 15:30:43](https://lobste.rs/s/q79gay/buffalo_buffalo_buffalo) - [buffalo::buffalo::buffalo](https://blog.ganets.ky/Buffalo/)
* [2025-10-06, 15:15:51](https://lobste.rs/s/5liwbw/why_you_should_be_using_pathlib_2018) - [Why you should be using pathlib (2018)](https://treyhunner.com/2018/12/why-you-should-be-using-pathlib/)
* [2025-10-06, 15:09:21](https://lobste.rs/s/bu1a84/i_brain_coded_static_image_gallery_few) - [I brain coded a static image gallery in a few hours](https://domm.plix.at/perl/2025_10_braincoded_static_image_gallery.html)
* [2025-10-06, 14:45:31](https://lobste.rs/s/5ngjnk/what_are_polyform_licenses) - [What are PolyForm licenses?](https://polyformproject.org/what-is-polyform/)
* [2025-10-06, 14:07:46](https://news.ycombinator.com/item?id=45491621) - [Mise: Monorepo Tasks](https://github.com/jdx/mise/discussions/6564)
* [2025-10-06, 14:06:29](https://news.ycombinator.com/item?id=45491609) - [Show HN: Kent Dybvig&apos;s Scheme Machine in 400 Lines of C (Heap-Memory Model)](https://gist.github.com/swatson555/8cc36d8d022d7e5cc44a5edb2c4f7d0b)
* [2025-10-06, 13:52:50](https://news.ycombinator.com/item?id=45491470) - [Compiling a Forth](https://healeycodes.com/compiling-a-forth)
* [2025-10-06, 12:59:00](https://soylentnews.org/article.pl?sid=25/10/05/0119224&amp;from=rss) - [JWST Finds an Exoplanet Around a Pulsar Whose Atmosphere is All Carbon](https://soylentnews.org/article.pl?sid=25/10/05/0119224&amp;from=rss)
* [2025-10-06, 12:40:47](https://lobste.rs/s/8whlqu/ai_home_cooked_software) - [AI and Home-Cooked Software](https://mrkaran.dev/posts/ai-home-cooked-software/)
* [2025-10-06, 12:33:43](https://lobste.rs/s/xlqurj/my_first_contribution_linux) - [My First Contribution to Linux](https://vkoskiv.com/first-linux-patch/)
* [2025-10-06, 11:54:26](https://lobste.rs/s/4ftndd/case_for_learning_gpu_programming_with) - [A case for learning GPU programming with a compute-first mindset](https://themaister.net/blog/2025/10/05/a-case-for-learning-gpu-programming-with-a-compute-first-mindset/)
* [2025-10-06, 10:41:52](https://lobste.rs/s/2ykcqe/why_do_llms_freak_out_over_seahorse_emoji) - [Why do LLMs freak out over the seahorse emoji?](https://vgel.me/posts/seahorse)
* [2025-10-06, 09:11:31](https://lobste.rs/s/fogifv/django_one_orm_rule_all_databases) - [Django: one ORM to rule all databases](https://www.paulox.net/2025/10/06/django-orm-comparison/)
* [2025-10-06, 09:08:24](https://lobste.rs/s/lm0p8u/qnx_operating_system) - [The QNX Operating System](https://www.abortretry.fail/p/the-qnx-operating-system)
* [2025-10-06, 08:13:00](https://soylentnews.org/article.pl?sid=25/10/05/0111221&amp;from=rss) - [How Can We Keep Livestock Safe as Wolves Return?](https://soylentnews.org/article.pl?sid=25/10/05/0111221&amp;from=rss)
* [2025-10-06, 06:22:42](https://lobste.rs/s/uihcec/gem_coop) - [gem.coop](https://gem.coop/)
* [2025-10-06, 06:15:28](https://lobste.rs/s/voi3sp/simple_automated_deployments_using_git) - [Simple automated deployments using git push (2024)](https://garrido.io/notes/simple-automated-deployments-git-push/)
* [2025-10-06, 03:30:00](https://soylentnews.org/article.pl?sid=25/10/05/012221&amp;from=rss) - [Setting Bounds on SETI](https://soylentnews.org/article.pl?sid=25/10/05/012221&amp;from=rss)
* [2025-10-06, 00:42:16](https://lobste.rs/s/zo5arc/nirs_fire_destroys_south_korean) - [NIRS fire destroys [South Korean] government&apos;s cloud storage system, no backups available](https://koreajoongangdaily.joins.com/news/2025-10-01/national/socialAffairs/NIRS-fire-destroys-governments-cloud-storage-system-no-backups-available/2412936)
* [2025-10-05, 22:43:00](https://soylentnews.org/article.pl?sid=25/10/04/1856221&amp;from=rss) - [Historic First: Scientists Turn Light Into Supersolid](https://soylentnews.org/article.pl?sid=25/10/04/1856221&amp;from=rss)
* [2025-10-05, 18:02:00](https://soylentnews.org/politics/article.pl?sid=25/10/04/195256&amp;from=rss) - [Taiwan Pressured to Move 50% of Chip Production to US or Lose Protection](https://soylentnews.org/politics/article.pl?sid=25/10/04/195256&amp;from=rss)
* [2025-10-05, 16:03:00](https://soylentnews.org/meta/article.pl?sid=25/10/05/162227&amp;from=rss) - [The Site is Experiencing 50x Problems](https://soylentnews.org/meta/article.pl?sid=25/10/05/162227&amp;from=rss)
* [2025-10-05, 13:16:00](https://soylentnews.org/article.pl?sid=25/10/04/1858242&amp;from=rss) - [First Wolf-Dog Hybrid Confirmed in Greece](https://soylentnews.org/article.pl?sid=25/10/04/1858242&amp;from=rss)
* [2025-10-05, 08:26:00](https://soylentnews.org/article.pl?sid=25/10/04/0347255&amp;from=rss) - [Meta Advertisment Based on AI Chats](https://soylentnews.org/article.pl?sid=25/10/04/0347255&amp;from=rss)
* [2025-10-05, 03:45:00](https://soylentnews.org/article.pl?sid=25/10/04/0342221&amp;from=rss) - [Hosting a WebSite on a Disposable Vape](https://soylentnews.org/article.pl?sid=25/10/04/0342221&amp;from=rss)
* [2025-10-04, 23:00:00](https://soylentnews.org/article.pl?sid=25/10/04/0327256&amp;from=rss) - [OpenNvidia Could Become the AI Generation&apos;s WinTel](https://soylentnews.org/article.pl?sid=25/10/04/0327256&amp;from=rss)
* [2025-10-04, 18:17:00](https://soylentnews.org/article.pl?sid=25/10/03/1516247&amp;from=rss) - [How Charlie Brown Captured the US Psyche](https://soylentnews.org/article.pl?sid=25/10/03/1516247&amp;from=rss)
* [2025-10-04, 16:14:58](https://news.ycombinator.com/item?id=45474397) - [Building a Synthetic Cell Together](https://www.nature.com/articles/s41467-025-62778-8)
* [2025-10-04, 13:58:00](https://news.ycombinator.com/item?id=45473357) - [Microformats – building blocks for data-rich web pages](https://microformats.org)
* [2025-10-04, 13:33:00](https://soylentnews.org/article.pl?sid=25/10/02/1413244&amp;from=rss) - [Scientists Catch a Shark Threesome on Camera](https://soylentnews.org/article.pl?sid=25/10/02/1413244&amp;from=rss)
* [2025-10-04, 08:07:00](https://soylentnews.org/article.pl?sid=25/10/02/1410217&amp;from=rss) - [Far Side of the Moon May be Colder Than the Near Side, Lunar Rocks Suggest](https://soylentnews.org/article.pl?sid=25/10/02/1410217&amp;from=rss)
* [2025-10-04, 04:01:00](https://soylentnews.org/article.pl?sid=25/10/02/146250&amp;from=rss) - [The Armed Forces of Austria Upgrade to LibreOffice and the OpenDocument Format](https://soylentnews.org/article.pl?sid=25/10/02/146250&amp;from=rss)
* [2025-10-04, 00:30:44](https://news.ycombinator.com/item?id=45469376) - [Who owns Express VPN, Nord, Surfshark? VPN relationships explained (2024)](https://windscribe.com/blog/the-vpn-relationship-map/)
* [2025-10-03, 23:18:00](https://soylentnews.org/article.pl?sid=25/10/02/1231211&amp;from=rss) - [NASA Boss Says US Should Have ‘Village’ on Moon in a Decade](https://soylentnews.org/article.pl?sid=25/10/02/1231211&amp;from=rss)
* [2025-10-03, 22:30:57](https://news.ycombinator.com/item?id=45468599) - [Removing these 50 objects from orbit would cut danger from space junk in half](https://arstechnica.com/space/2025/10/everyone-but-china-has-pretty-much-stopped-littering-in-low-earth-orbit/)
* [2025-10-03, 21:04:00](https://news.ycombinator.com/item?id=45467751) - [Build files are the best tool to represent software architecture](https://blogsystem5.substack.com/p/you-are-holding-build-files-wrong)
* [2025-10-03, 18:34:00](https://soylentnews.org/article.pl?sid=25/10/02/1226238&amp;from=rss) - [CISA Warns of Critical Linux Sudo Flaw Exploited in Attacks](https://soylentnews.org/article.pl?sid=25/10/02/1226238&amp;from=rss)
* [2025-10-03, 13:51:00](https://soylentnews.org/article.pl?sid=25/10/02/1054255&amp;from=rss) - [Photodiode Design Using Germanium Solves Key Challenge in on-Chip Light Monitoring](https://soylentnews.org/article.pl?sid=25/10/02/1054255&amp;from=rss)
* [2025-10-03, 13:37:34](https://news.ycombinator.com/item?id=45462877) - [Who needs Git when you have 1M context windows?](https://www.alexmolas.com/2025/07/28/unexpected-benefit-llm.html)
* [2025-10-03, 09:06:00](https://soylentnews.org/article.pl?sid=25/10/02/1052258&amp;from=rss) - [ICE to Buy Tool that Tracks Locations of Hundreds of Millions of Phones](https://soylentnews.org/article.pl?sid=25/10/02/1052258&amp;from=rss)
* [2025-10-03, 08:56:01](https://news.ycombinator.com/item?id=45460656) - [No_color: Disabling ANSI color output by default](https://no-color.org/)
* [2025-10-03, 06:33:43](https://news.ycombinator.com/item?id=45459706) - [Using Deno as my game engine](https://explodi.tubatuba.net/2025/09/26/using-deno-as-my-game-engine)
* [2025-10-03, 04:24:58](https://news.ycombinator.com/item?id=45458973) - [Why did Crunchyroll&apos;s subtitles just get worse?](https://animebythenumbers.substack.com/p/worse-crunchyroll-subtitles)
* [2025-10-03, 04:21:00](https://soylentnews.org/article.pl?sid=25/10/01/2332257&amp;from=rss) - [AI Coding is Massively Overhyped, Report Finds](https://soylentnews.org/article.pl?sid=25/10/01/2332257&amp;from=rss)
