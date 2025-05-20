# [News Summary](https://kherrick.github.io/news-summary/)

## Industry and Technology Disruptions

* [Tech Job Market Is Shrinking as AI Reshapes Industry Requirements](https://tech.slashdot.org/story/25/05/20/0947254/tech-job-market-is-shrinking-as-ai-reshapes-industry-requirements?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The shrinking technology job market is examined in light of increased reliance on AI and evolving industry requirements.

* [Klarna&apos;s Losses Widen After More Consumers Fail To Repay Loans](https://news.slashdot.org/story/25/05/20/096258/klarnas-losses-widen-after-more-consumers-fail-to-repay-loans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Klarna faces growing financial difficulties as its losses deepen, attributed to increased consumer defaults.

* [The Behavior of LLMs in Hiring Decisions: Systemic Biases in Candidate Selection](https://davidrozado.substack.com/p/the-strange-behavior-of-llms-in-hiring) - A study investigating biases in large language models (LLMs) concerning employment decision-making highlights systemic issues.

## Scientific and Technological Innovations

* [CERN Gears Up To Ship Antimatter Across Europe](https://science.slashdot.org/story/25/05/19/2124234/cern-gears-up-to-ship-antimatter-across-europe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - CERN prepares for the groundbreaking transport of antimatter across Europe, adding a new chapter to particle physics.

* [Palette Lighting Tricks on the Nintendo 64](https://30fps.net/pages/palette-lighting-tricks-n64/) - A retrospective on the inventive graphical techniques used on the Nintendo 64 to achieve unique lighting effects.

* [Particle Life simulation in browser using WebGPU](https://lisyarus.github.io/blog/posts/particle-life-simulation-in-browser-using-webgpu.html) - A WebGPU-based particle life simulation explores complex emergent behavior directly in the browser.

## Emerging Tools and Software

* [A simple search engine from scratch](https://bernsteinbear.com/blog/simple-search/) - A practical guide to building a search engine from the ground up, highlighting the fundamentals and challenges involved.

* [Show HN: JavaFactory – IntelliJ plugin to generate Java code](https://github.com/JavaFactoryPluginDev/javafactory-plugin) - A newly introduced IntelliJ plugin claims to simplify Java code generation, making development more efficient.

* [Making Video Games (without an Engine) in 2025](https://noelberry.ca/posts/making_games_in_2025/) - Insights into game development without relying on contemporary engines, focusing on creativity and technological independence.

## Society and Ethical Dilemmas

* [Regeneron Pharmaceuticals To Buy 23andMe and Its Data For $256 Million](https://yro.slashdot.org/story/25/05/19/2039213/regeneron-pharmaceuticals-to-buy-23andme-and-its-data-for-256-million?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Concerns rise as Regeneron purchases 23andMe and its genetic data for a steep price, raising ethical issues around privacy.

* [Meta Is Making Users Who Opted Out of AI Training Opt Out Again](https://soylentnews.org/article.pl?sid=25/05/19/0231252&amp;from=rss) - Meta reignites controversy by forcing users who opted out of AI training to go through the process once more.

* [I got fooled by AI-for-science hype–here&apos;s what it taught me](https://www.understandingai.org/p/i-got-fooled-by-ai-for-science-hypeheres) - A reflective account on how over-promised AI applications skewed scientific expectations and led to valuable lessons.

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

* [2025-05-20, 12:56:46](https://lobste.rs/s/stmgck/lerp_smoothing_is_broken) - [Lerp smoothing is broken](https://www.youtube.com/watch?v=LSNQuFEDOyQ)
* [2025-05-20, 12:32:35](https://news.ycombinator.com/item?id=44040837) - [What happened to American manufacturing is not unusual](https://blog.waldrn.com/p/what-happened-to-american-manufacturing)
* [2025-05-20, 12:12:40](https://lobste.rs/s/glfslx/reports_deno_s_demise_have_been_greatly) - [Reports of Deno&apos;s Demise Have Been Greatly Exaggerated](https://deno.com/blog/greatly-exaggerated)
* [2025-05-20, 12:07:07](https://lobste.rs/s/e0pkbl/kicking_tires_on_cedardb_s_sql) - [Kicking the Tires on CedarDB&apos;s SQL](https://buttondown.com/jaffray/archive/kicking-the-tires-on-cedardbs-sql/)
* [2025-05-20, 12:00:00](https://tech.slashdot.org/story/25/05/20/0947254/tech-job-market-is-shrinking-as-ai-reshapes-industry-requirements?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tech Job Market Is Shrinking as AI Reshapes Industry Requirements](https://tech.slashdot.org/story/25/05/20/0947254/tech-job-market-is-shrinking-as-ai-reshapes-industry-requirements?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-20, 11:43:55](https://news.ycombinator.com/item?id=44040419) - [Show HN: Text to 3D simulation on a map [does history pretty well]](https://mused.com/map/)
* [2025-05-20, 11:42:24](https://news.ycombinator.com/item?id=44040407) - [Why Does the U.S. Always Run a Trade Deficit?](https://libertystreeteconomics.newyorkfed.org/2025/05/why-does-the-u-s-always-run-a-trade-deficit/)
* [2025-05-20, 11:34:34](https://lobste.rs/s/qrrc6x/enlightenmentware) - [Enlightenmentware](https://mmapped.blog/posts/28-enlightenmentware)
* [2025-05-20, 11:33:14](https://news.ycombinator.com/item?id=44040332) - [Reports of Deno&apos;s Demise Have Been Greatly Exaggerated](https://deno.com/blog/greatly-exaggerated)
* [2025-05-20, 11:29:45](https://news.ycombinator.com/item?id=44040301) - [Show HN: JavaFactory – IntelliJ plugin to generate Java code](https://github.com/JavaFactoryPluginDev/javafactory-plugin)
* [2025-05-20, 11:17:39](https://lobste.rs/s/5mpy9w/simple_search_engine_from_scratch) - [A simple search engine from scratch](https://bernsteinbear.com/blog/simple-search/)
* [2025-05-20, 10:22:23](https://lobste.rs/s/4ukqbf/how_jax_jit_jit_compiler_works_jax_js) - [How the jax.jit() JIT compiler works in jax-js](https://ekzhang.substack.com/p/how-the-jaxjit-jit-compiler-works)
* [2025-05-20, 10:18:15](https://news.ycombinator.com/item?id=44039864) - [Using elliptic curves to solve a math meme](https://artofproblemsolving.com/community/c2532359h2760821_the_emoji_problem__part_i?srsltid=AfmBOor9TbMq_A7hGHSJGfoWaa2HNzducSYZu35d_LFlCSNLXpvt-pdS)
* [2025-05-20, 10:00:00](https://news.slashdot.org/story/25/05/20/096258/klarnas-losses-widen-after-more-consumers-fail-to-repay-loans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Klarna&apos;s Losses Widen After More Consumers Fail To Repay Loans](https://news.slashdot.org/story/25/05/20/096258/klarnas-losses-widen-after-more-consumers-fail-to-repay-loans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-20, 09:58:56](https://news.ycombinator.com/item?id=44039744) - [A simple search engine from scratch](https://bernsteinbear.com/blog/simple-search/)
* [2025-05-20, 09:27:20](https://news.ycombinator.com/item?id=44039563) - [The Behavior of LLMs in Hiring Decisions: Systemic Biases in Candidate Selection](https://davidrozado.substack.com/p/the-strange-behavior-of-llms-in-hiring)
* [2025-05-20, 09:16:00](https://soylentnews.org/article.pl?sid=25/05/19/0847257&amp;from=rss) - [Space Computing Satellite Constellation Launched into Orbit](https://soylentnews.org/article.pl?sid=25/05/19/0847257&amp;from=rss)
* [2025-05-20, 07:40:28](https://news.ycombinator.com/item?id=44038835) - [Finland announces migration of its rail network to international gauge](https://www.trenvista.net/en/news/rnhs/finland-migration-standard-gauge/)
* [2025-05-20, 07:00:00](https://entertainment.slashdot.org/story/25/05/19/2245207/sag-aftra-calls-out-fortnite-over-darth-vader-ai-voice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SAG-AFTRA Calls Out Fortnite Over Darth Vader AI Voice](https://entertainment.slashdot.org/story/25/05/19/2245207/sag-aftra-calls-out-fortnite-over-darth-vader-ai-voice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-20, 06:54:27](https://news.ycombinator.com/item?id=44038549) - [Questioning Representational Optimism in Deep Learning](https://github.com/akarshkumar0101/fer)
* [2025-05-20, 06:24:57](https://lobste.rs/s/xcpfpk/palette_lighting_tricks_on_nintendo_64) - [Palette Lighting Tricks on the Nintendo 64](https://30fps.net/pages/palette-lighting-tricks-n64/)
* [2025-05-20, 05:54:58](https://news.ycombinator.com/item?id=44038209) - [Making Video Games (Without an Engine) in 2025](https://noelberry.ca/posts/making_games_in_2025/)
* [2025-05-20, 04:57:00](https://news.ycombinator.com/item?id=44037941) - [I got fooled by AI-for-science hype–here&apos;s what it taught me](https://www.understandingai.org/p/i-got-fooled-by-ai-for-science-hypeheres)
* [2025-05-20, 04:46:47](https://lobste.rs/s/vmsdiy/particle_life_simulation_browser_using) - [Particle Life simulation in browser using WebGPU](https://lisyarus.github.io/blog/posts/particle-life-simulation-in-browser-using-webgpu.html)
* [2025-05-20, 04:35:00](https://soylentnews.org/article.pl?sid=25/05/19/0231252&amp;from=rss) - [Meta Is Making Users Who Opted Out of AI Training Opt Out Again](https://soylentnews.org/article.pl?sid=25/05/19/0231252&amp;from=rss)
* [2025-05-20, 03:45:16](https://news.ycombinator.com/item?id=44037595) - [Ann, the Small Annotation Server](https://mccd.space/posts/design-pitch-ann/)
* [2025-05-20, 03:42:34](https://lobste.rs/s/srktmw/ann_small_annotation_server_2023) - [Ann, the Small Annotation Server (2023)](https://mccd.space/posts/design-pitch-ann/)
* [2025-05-20, 03:30:00](https://science.slashdot.org/story/25/05/19/2124234/cern-gears-up-to-ship-antimatter-across-europe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CERN Gears Up To Ship Antimatter Across Europe](https://science.slashdot.org/story/25/05/19/2124234/cern-gears-up-to-ship-antimatter-across-europe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-20, 03:13:20](https://news.ycombinator.com/item?id=44037426) - [Biff – a batteries-included web framework for Clojure](https://biffweb.com)
* [2025-05-20, 01:36:15](https://news.ycombinator.com/item?id=44036900) - [What are people doing? Live-ish estimates based on global population dynamics](https://humans.maxcomperatore.com/)
* [2025-05-20, 01:04:14](https://news.ycombinator.com/item?id=44036716) - [A shower thought turned into a Collatz visualization](https://abstractnonsense.com/collatz/)
* [2025-05-20, 00:52:27](https://news.ycombinator.com/item?id=44036647) - [DDoSecrets publishes 410 GB of heap dumps, hacked from TeleMessage](https://micahflee.com/ddosecrets-publishes-410-gb-of-heap-dumps-hacked-from-telemessages-archive-server/)
* [2025-05-20, 00:50:00](https://apple.slashdot.org/story/25/05/19/2119226/apples-next-gen-version-of-siri-is-on-par-with-chatgpt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple&apos;s Next-Gen Version of Siri Is &apos;On Par&apos; With ChatGPT](https://apple.slashdot.org/story/25/05/19/2119226/apples-next-gen-version-of-siri-is-on-par-with-chatgpt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-20, 00:10:00](https://games.slashdot.org/story/25/05/19/2112252/sony-mass-bans-russian-playstation-accounts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sony Mass-Bans Russian PlayStation Accounts](https://games.slashdot.org/story/25/05/19/2112252/sony-mass-bans-russian-playstation-accounts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-19, 23:49:00](https://soylentnews.org/article.pl?sid=25/05/18/1411244&amp;from=rss) - [Nextcloud Cries Foul Over Google Play Store App Rejection](https://soylentnews.org/article.pl?sid=25/05/18/1411244&amp;from=rss)
* [2025-05-19, 23:30:00](https://hardware.slashdot.org/story/25/05/19/2047236/qualcomm-to-launch-data-center-processors-that-link-to-nvidia-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Qualcomm To Launch Data Center Processors That Link To Nvidia Chips](https://hardware.slashdot.org/story/25/05/19/2047236/qualcomm-to-launch-data-center-processors-that-link-to-nvidia-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-19, 22:50:00](https://tech.slashdot.org/story/25/05/19/2054230/google-decided-against-offering-publishers-options-in-ai-search?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Decided Against Offering Publishers Options In AI Search](https://tech.slashdot.org/story/25/05/19/2054230/google-decided-against-offering-publishers-options-in-ai-search?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-19, 22:19:27](https://lobste.rs/s/aeslga/value_model_checking_distributed) - [The value of model checking in distributed protocols design](https://protocols-made-fun.com/modelchecking/2025/04/08/value.html)
* [2025-05-19, 22:10:00](https://tech.slashdot.org/story/25/05/19/211254/google-launches-notebooklm-app-for-android-and-ios?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Launches NotebookLM App For Android and iOS](https://tech.slashdot.org/story/25/05/19/211254/google-launches-notebooklm-app-for-android-and-ios?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-19, 21:37:23](https://news.ycombinator.com/item?id=44035158) - [Have I Been Pwned 2.0](https://www.troyhunt.com/have-i-been-pwned-2-0-is-now-live/)
* [2025-05-19, 21:30:00](https://yro.slashdot.org/story/25/05/19/2039213/regeneron-pharmaceuticals-to-buy-23andme-and-its-data-for-256-million?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Regeneron Pharmaceuticals To Buy 23andMe and Its Data For $256 Million](https://yro.slashdot.org/story/25/05/19/2039213/regeneron-pharmaceuticals-to-buy-23andme-and-its-data-for-256-million?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-19, 21:21:54](https://lobste.rs/s/uq4igx/making_video_games_2025_without_engine) - [Making Video Games in 2025 (without an engine)](https://noelberry.ca/posts/making_games_in_2025/)
* [2025-05-19, 21:12:47](https://news.ycombinator.com/item?id=44034918) - [Jules: An Asynchronous Coding Agent](https://jules.google/)
* [2025-05-19, 20:50:00](https://slashdot.org/story/25/05/19/2033214/xais-grok-3-comes-to-microsoft-azure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [xAI&apos;s Grok 3 Comes To Microsoft Azure](https://slashdot.org/story/25/05/19/2033214/xais-grok-3-comes-to-microsoft-azure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-19, 20:32:41](https://lobste.rs/s/lptak4/building_personal_archive_web_slow_way) - [Building a personal archive of the web, the slow way](https://alexwlchan.net/2025/personal-archive-of-the-web/)
* [2025-05-19, 20:28:29](https://news.ycombinator.com/item?id=44034459) - [Kilo: A text editor in less than 1000 LOC with syntax highlight and search](https://github.com/antirez/kilo)
* [2025-05-19, 20:10:00](https://slashdot.org/story/25/05/19/1910215/ai-is-more-persuasive-than-people-in-online-debates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI is More Persuasive Than People in Online Debates](https://slashdot.org/story/25/05/19/1910215/ai-is-more-persuasive-than-people-in-online-debates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-19, 19:37:47](https://lobste.rs/s/gdd7r2/submissions_spring_lisp_game_jam_2025) - [Submissions to Spring Lisp Game Jam 2025](https://itch.io/jam/spring-lisp-game-jam-2025/entries)
* [2025-05-19, 19:30:00](https://news.slashdot.org/story/25/05/19/195203/european-green-investments-hold-billions-in-fossil-fuel-majors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [European &apos;Green&apos; Investments Hold Billions in Fossil Fuel Majors](https://news.slashdot.org/story/25/05/19/195203/european-green-investments-hold-billions-in-fossil-fuel-majors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-19, 19:10:18](https://lobste.rs/s/wadme2/internationalization_puzzles) - [Internationalization puzzles](https://i18n-puzzles.com/)
* [2025-05-19, 19:06:00](https://soylentnews.org/article.pl?sid=25/05/18/148219&amp;from=rss) - [The End of the Universe is Nigh!](https://soylentnews.org/article.pl?sid=25/05/18/148219&amp;from=rss)
* [2025-05-19, 18:53:00](https://developers.slashdot.org/story/25/05/19/1853221/microsofts-edit-on-windows-is-a-new-command-line-text-editor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft&apos;s Edit on Windows is a New Command-Line Text Editor](https://developers.slashdot.org/story/25/05/19/1853221/microsofts-edit-on-windows-is-a-new-command-line-text-editor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-19, 18:30:54](https://lobste.rs/s/vjhylh/steve_langasek_one_ubuntu_linux_s_leading) - [Steve Langasek, One of Ubuntu Linux&apos;s Leading Lights, Has Died](https://thenewstack.io/steve-langasek-one-of-ubuntu-linuxs-leading-lights-has-died/)
* [2025-05-19, 18:18:35](https://lobste.rs/s/aohy4i/python_frozenset_interpretation) - [A Python frozenset interpretation of Dependent Type Theory](https://www.philipzucker.com/frozenset_dtt/)
* [2025-05-19, 18:10:00](https://slashdot.org/story/25/05/19/187253/linkedin-executive-warns-ai-threatens-entry-level-jobs-as-graduate-unemployment-rises?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [LinkedIn Executive Warns AI Threatens Entry-Level Jobs as Graduate Unemployment Rises](https://slashdot.org/story/25/05/19/187253/linkedin-executive-warns-ai-threatens-entry-level-jobs-as-graduate-unemployment-rises?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-19, 18:07:36](https://lobste.rs/s/qef6s9/microsoft_edit_is_now_open_source) - [Microsoft Edit is now open source](https://devblogs.microsoft.com/commandline/edit-is-now-open-source/)
* [2025-05-19, 18:04:06](https://news.ycombinator.com/item?id=44032777) - [Claude Code SDK](https://docs.anthropic.com/en/docs/claude-code/sdk)
* [2025-05-19, 16:51:55](https://lobste.rs/s/v4xwjv/windows_subsystem_for_linux_is_now_open) - [The Windows Subsystem for Linux is now open source](https://blogs.windows.com/windowsdeveloper/2025/05/19/the-windows-subsystem-for-linux-is-now-open-source/)
* [2025-05-19, 16:28:18](https://news.ycombinator.com/item?id=44031535) - [Game theory illustrated by an animated cartoon game](https://ncase.me/trust/)
* [2025-05-19, 16:17:56](https://news.ycombinator.com/item?id=44031432) - [GitHub Copilot Coding Agent](https://github.blog/changelog/2025-05-19-github-copilot-coding-agent-in-public-preview/)
* [2025-05-19, 16:14:15](https://news.ycombinator.com/item?id=44031385) - [The Windows Subsystem for Linux is now open source](https://blogs.windows.com/windowsdeveloper/2025/05/19/the-windows-subsystem-for-linux-is-now-open-source/)
* [2025-05-19, 15:28:30](https://lobste.rs/s/4hqkqt/is_winter_coming) - [Is Winter Coming?](https://www.datagubbe.se/winter/)
* [2025-05-19, 15:14:08](https://lobste.rs/s/lolkdn/too_much_go_misdirection) - [too much go misdirection](https://flak.tedunangst.com/post/too-much-go-misdirection)
* [2025-05-19, 14:48:03](https://news.ycombinator.com/item?id=44030492) - [Launch HN: Better Auth (YC X25) – Authentication Framework for TypeScript](https://news.ycombinator.com/item?id=44030492)
* [2025-05-19, 14:24:00](https://soylentnews.org/article.pl?sid=25/05/18/145202&amp;from=rss) - [UK Retail Sector Hit by Ransomware Spree](https://soylentnews.org/article.pl?sid=25/05/18/145202&amp;from=rss)
* [2025-05-19, 13:21:49](https://lobste.rs/s/wfpw3u/justification_filler_phrases) - [Justification Filler Phrases](https://serce.me/posts/2025-05-19-justification-filler-phrases)
* [2025-05-19, 13:12:00](https://lobste.rs/s/zthrjb/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/zthrjb/what_are_you_doing_this_week)
* [2025-05-19, 11:23:55](https://lobste.rs/s/glybaa/don_t_guess_my_language) - [Don&apos;t Guess My Language](https://vitonsky.net/blog/2025/05/17/language-detection/)
* [2025-05-19, 09:39:00](https://soylentnews.org/article.pl?sid=25/05/18/135204&amp;from=rss) - [How a New Type of AI is Helping Police Skirt Facial Recognition Bans](https://soylentnews.org/article.pl?sid=25/05/18/135204&amp;from=rss)
* [2025-05-19, 08:00:42](https://lobste.rs/s/acpxje/coding_without_laptop_two_weeks_with_ar) - [Coding Without a Laptop - Two Weeks with AR Glasses and Linux on Android](https://holdtherobot.com/blog/2025/05/11/linux-on-android-with-ar-glasses/)
* [2025-05-19, 07:39:22](https://lobste.rs/s/dymvtx/don_t_unwrap_options_there_are_better_ways) - [Don&apos;t Unwrap Options: There Are Better Ways](https://corrode.dev/blog/rust-option-handling-best-practices/)
* [2025-05-19, 06:23:01](https://news.ycombinator.com/item?id=44026959) - [Linguists Find Proof of Sweeping Language Pattern Once Deemed a &apos;Hoax&apos;](https://www.scientificamerican.com/article/linguists-find-proof-of-sweeping-language-pattern-once-deemed-a-hoax/)
* [2025-05-19, 04:54:00](https://soylentnews.org/article.pl?sid=25/05/18/1255206&amp;from=rss) - [The Day Grok Lost its Mind](https://soylentnews.org/article.pl?sid=25/05/18/1255206&amp;from=rss)
* [2025-05-19, 00:05:00](https://soylentnews.org/article.pl?sid=25/05/18/1252203&amp;from=rss) - [Mars May Have Vast Underground Oceans](https://soylentnews.org/article.pl?sid=25/05/18/1252203&amp;from=rss)
* [2025-05-18, 19:20:00](https://soylentnews.org/article.pl?sid=25/05/17/0548228&amp;from=rss) - [U.S. Inks Bill to Force Geo-Tracking Tech for High-End Gaming and AI GPUs](https://soylentnews.org/article.pl?sid=25/05/17/0548228&amp;from=rss)
* [2025-05-18, 14:38:00](https://soylentnews.org/article.pl?sid=25/05/16/1759244&amp;from=rss) - [NASA Keeps Ancient Voyager 1 Spacecraft Alive With Hail Mary Thruster Fix](https://soylentnews.org/article.pl?sid=25/05/16/1759244&amp;from=rss)
* [2025-05-18, 09:53:00](https://soylentnews.org/article.pl?sid=25/05/16/1754242&amp;from=rss) - [White House Scraps Plan to Block Data Brokers From Selling Americans’ Sensitive Data](https://soylentnews.org/article.pl?sid=25/05/16/1754242&amp;from=rss)
* [2025-05-18, 05:12:00](https://soylentnews.org/article.pl?sid=25/05/16/1710236&amp;from=rss) - [China&apos;s Hygon Details C86-5G: A 128-Core X86 CPU with Advanced Features and Four-Way SMT](https://soylentnews.org/article.pl?sid=25/05/16/1710236&amp;from=rss)
* [2025-05-18, 00:24:00](https://soylentnews.org/article.pl?sid=25/05/16/1648245&amp;from=rss) - [Oniux by Tor: Isolating Linux Applications at the Kernel Level for Secure Connections](https://soylentnews.org/article.pl?sid=25/05/16/1648245&amp;from=rss)
* [2025-05-17, 19:39:00](https://soylentnews.org/article.pl?sid=25/05/16/0247204&amp;from=rss) - [NCSC and Industry at Odds Over How to Tackle Shoddy Software](https://soylentnews.org/article.pl?sid=25/05/16/0247204&amp;from=rss)
* [2025-05-17, 14:50:00](https://soylentnews.org/article.pl?sid=25/05/16/0232204&amp;from=rss) - [EU Bug Database Fully Operational as US Slashes Infosec](https://soylentnews.org/article.pl?sid=25/05/16/0232204&amp;from=rss)
* [2025-05-17, 10:05:00](https://soylentnews.org/article.pl?sid=25/05/16/0227217&amp;from=rss) - [A US Court Just Put Ownership of CRISPR Back in Play](https://soylentnews.org/article.pl?sid=25/05/16/0227217&amp;from=rss)
* [2025-05-17, 09:13:11](https://news.ycombinator.com/item?id=44013069) - [A man who visited every country in the world without boarding a plane (2023)](https://www.theguardian.com/travel/2023/aug/16/take-the-high-road-the-man-who-visited-every-country-in-the-world-without-boarding-a-plane)
* [2025-05-17, 05:15:00](https://soylentnews.org/article.pl?sid=25/05/16/0218214&amp;from=rss) - [Bluetooth 6.1 Enhances Privacy With Randomized RPA Timing](https://soylentnews.org/article.pl?sid=25/05/16/0218214&amp;from=rss)
* [2025-05-17, 00:31:00](https://soylentnews.org/article.pl?sid=25/05/16/0212240&amp;from=rss) - [Nvidia Reportedly Raises GPU Prices by 10-15% as Tariffs and TSMC Price Hikes Filter Down](https://soylentnews.org/article.pl?sid=25/05/16/0212240&amp;from=rss)
* [2025-05-16, 21:45:15](https://news.ycombinator.com/item?id=44010046) - [Solving physics-based initial value problems with unsupervised machine learning](https://link.aps.org/doi/10.1103/PhysRevE.111.055302)
* [2025-05-16, 19:45:00](https://soylentnews.org/article.pl?sid=25/05/15/0827220&amp;from=rss) - [Scientists Find Lead Really Can Be Turned Into Gold (With Help From The LHC)](https://soylentnews.org/article.pl?sid=25/05/15/0827220&amp;from=rss)
* [2025-05-16, 15:01:00](https://soylentnews.org/article.pl?sid=25/05/14/2259213&amp;from=rss) - [Why Bell Labs Worked](https://soylentnews.org/article.pl?sid=25/05/14/2259213&amp;from=rss)
* [2025-05-16, 13:25:22](https://news.ycombinator.com/item?id=44005236) - [Imagine a drive where every file exists as all file types all of the time](https://anydocai.com/)
* [2025-05-16, 10:20:00](https://soylentnews.org/article.pl?sid=25/05/15/0224241&amp;from=rss) - [A Chemical in Plastics is Tied to Heart Disease Deaths](https://soylentnews.org/article.pl?sid=25/05/15/0224241&amp;from=rss)
* [2025-05-16, 08:55:27](https://news.ycombinator.com/item?id=44003184) - [Run GitHub Actions locally](https://github.com/nektos/act)
* [2025-05-16, 05:32:00](https://soylentnews.org/article.pl?sid=25/05/15/0157228&amp;from=rss) - [FTC Pushes The Enforcement Of Its &apos;Click-To-Cancel&apos; Rule Back To July](https://soylentnews.org/article.pl?sid=25/05/15/0157228&amp;from=rss)
* [2025-05-16, 00:45:00](https://soylentnews.org/article.pl?sid=25/05/15/0147219&amp;from=rss) - [When Your Favorite Song Plays, Your Brain ‘Physically Embodies’ Music](https://soylentnews.org/article.pl?sid=25/05/15/0147219&amp;from=rss)
