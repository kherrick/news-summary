# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software Developments

* [LibreOffice Writer now supports Markdown](https://blog.documentfoundation.org/blog/2026/02/04/libreoffice-26-2-is-here/) ([comments](https://news.ycombinator.com/item?id=47298885))

* [Show HN: Eyot, A programming language where the GPU is just another thread](https://cowleyforniastudios.com/2026/03/08/announcing-eyot/) ([comments](https://news.ycombinator.com/item?id=47296355))

* [GPU-powered semantic version control tools released: `sem`](https://github.com/ataraxy-labs/sem) ([comments](https://news.ycombinator.com/item?id=47294924))

* [Skir – like Protocol Buffer but better](https://skir.build/) ([comments](https://news.ycombinator.com/item?id=47299022))

* [Symbolic derivatives and the Rust rewrite of RE#](https://iev.ee/blog/symbolic-derivatives-and-the-rust-rewrite-of-resharp/) ([comments](https://lobste.rs/s/z765ue/symbolic_derivatives_rust_rewrite_re))

* [FrameBook: Innovative collaborative platform](https://fb.edoo.gg) ([comments](https://news.ycombinator.com/item?id=47298044))

## Artificial Intelligence Innovations and Challenges

* [OpenAI's Former Research Chief Raises $70M to Automate Manufacturing With AI](https://it.slashdot.org/story/26/03/08/0253259/openais-former-research-chief-raises-70m-to-automate-manufacturing-with-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=47299625))

* [Based on its own charter, OpenAI should surrender the race](https://mlumiste.com/general/openai-charter/) ([comments](https://news.ycombinator.com/item?id=47299009))

* [SWE-CI: Evaluating Agent Capabilities in Maintaining Codebases via CI](https://arxiv.org/abs/2603.03823) ([comments](https://news.ycombinator.com/item?id=47295537))

* [Jack Dorsey's Block Accused of 'AI-Washing' to Excuse Laying Off Nearly Half Its Workforce](https://it.slashdot.org/story/26/03/08/1110220/jack-dorseys-block-accused-of-ai-washing-to-excuse-laying-off-nearly-half-its-workforce?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Corporate Actions and Impacts

* [Google just gave Sundar Pichai a $692M pay package](https://techcrunch.com/2026/03/07/google-just-gave-sundar-pichai-a-692m-pay-package/) ([comments](https://news.ycombinator.com/item?id=47299794))

* [AI CEOs Worry the Government Will Nationalize AI](https://yro.slashdot.org/story/26/03/07/2058213/ai-ceos-worry-the-government-will-nationalize-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=47296481))

* [Congress Extends ISS and Tells NASA to Get Moving on Private Space Stations](https://soylentnews.org/article.pl?sid=26/03/06/1533251&from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/03/06/1533251&from=rss))

* [Micron Sampling First 256GB SOCAMM2 Memory Packages — 2TB of RAM Per CPU for Datacenters](https://soylentnews.org/article.pl?sid=26/03/05/1846224&from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/03/05/1846224&from=rss))

## Quirky and Innovative Ideas

* [What if the Apple ][ had run on Field-Sequential?](https://nicole.express/2026/the-apple-that-wasnt.html) ([comments](https://news.ycombinator.com/item?id=47297913))

* [We Should Revisit Literate Programming in the Agent Era](https://silly.business/blog/we-should-revisit-literate-programming-in-the-agent-era/) ([comments](https://lobste.rs/s/4ze6ia/we_should_revisit_literate_programming))

* [A First for Humanity Confirmed: NASA's DART Mission Slowed the Asteroid's Orbit](https://science.slashdot.org/story/26/03/08/004240/a-first-for-humanity-confirmed-nasas-dart-mission-slowed-the-asteroids-orbit?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://science.slashdot.org/story/26/03/08/004240/a-first-for-humanity-confirmed-nasas-dart-mission-slowed-the-asteroids-orbit?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Would Aliens Do Physics, or is Science a Human Invention?](https://soylentnews.org/article.pl?sid=26/03/06/1545254&from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/03/06/1545254&from=rss))

## Miscellaneous Insights

* [I ported Linux to the PS5 and turned it into a Steam Machine](https://xcancel.com/theflow0/status/2030011206040256841) ([comments](https://news.ycombinator.com/item?id=47296849))

* [Coloring for Colorblindness](https://davidmathlogic.com/colorblind) ([comments](https://lobste.rs/s/w047bo/coloring_for_colorblindness))

* [Notes on writing Rust-based Wasm](https://notes.brooklynzelenka.com/Blog/Notes-on-Writing-Wasm) ([comments](https://news.ycombinator.com/item?id=47295837))

* [Perfect types with `setHTML()`](https://frederikbraun.de/perfect-types-with-sethtml.html) ([comments](https://lobste.rs/s/c7tzjs/perfect_types_with_sethtml))

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

* [2026-03-08, 18:37:37](https://news.ycombinator.com/item?id=47299794) - [Google just gave Sundar Pichai a $692M pay package](https://techcrunch.com/2026/03/07/google-just-gave-sundar-pichai-a-692m-pay-package/)
* [2026-03-08, 18:34:00](https://it.slashdot.org/story/26/03/08/0253259/openais-former-research-chief-raises-70m-to-automate-manufacturing-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI&apos;s Former Research Chief Raises $70M to Automate Manufacturing With AI](https://it.slashdot.org/story/26/03/08/0253259/openais-former-research-chief-raises-70m-to-automate-manufacturing-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-08, 18:21:20](https://news.ycombinator.com/item?id=47299625) - [\&quot;I Can&apos;t Do That, Dave\&quot; – No Agent Yet](https://systemic.engineering/ai-needs-identity/)
* [2026-03-08, 17:57:58](https://lobste.rs/s/e72lgq/impressions_from_mozilla_1_2b_2002) - [Impressions from Mozilla 1.2b (2002)](https://movq.de/blog/postings/2026-03-08/0/POSTING-en.html)
* [2026-03-08, 17:35:34](https://lobste.rs/s/exxoe2/blocking_http1_1) - [Blocking HTTP1.1](https://sheep.horse/2026/3/blocking_http1.1_-_some_results.html)
* [2026-03-08, 17:34:00](https://it.slashdot.org/story/26/03/08/0236233/23-of-nodejs-users-run-an-outdated-version-so-openjs-announces-program-offering-upgrade-providers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [2/3 of Node.Js Users Run an Outdated Version.  So OpenJS Announces Program Offering Upgrade Providers](https://it.slashdot.org/story/26/03/08/0236233/23-of-nodejs-users-run-an-outdated-version-so-openjs-announces-program-offering-upgrade-providers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-08, 17:21:36](https://lobste.rs/s/ohmnbx/bending_emacs_episode_13_agent_shell) - [Bending Emacs - Episode 13: agent-shell charting](https://xenodium.com/bending-emacs-episode-13-agent-shell-charting)
* [2026-03-08, 17:17:54](https://news.ycombinator.com/item?id=47299022) - [Show HN: Skir – like Protocol Buffer but better](https://skir.build/)
* [2026-03-08, 17:16:38](https://news.ycombinator.com/item?id=47299009) - [Based on its own charter, OpenAI should surrender the race](https://mlumiste.com/general/openai-charter/)
* [2026-03-08, 17:01:50](https://news.ycombinator.com/item?id=47298885) - [LibreOffice Writer now supports Markdown](https://blog.documentfoundation.org/blog/2026/02/04/libreoffice-26-2-is-here/)
* [2026-03-08, 16:58:35](https://lobste.rs/s/brz5mw/libreoffice_writer_now_supports) - [LibreOffice Writer now supports Markdown](https://blog.documentfoundation.org/blog/2026/02/04/libreoffice-26-2-is-here/)
* [2026-03-08, 16:48:02](https://lobste.rs/s/c3wozs/orchestration_for_zero_human_companies) - [Orchestration for zero-human companies](https://paperclip.ing)
* [2026-03-08, 16:46:10](https://news.ycombinator.com/item?id=47298743) - [My Homelab Setup](https://bryananthonio.com/blog/my-homelab-setup/)
* [2026-03-08, 16:39:30](https://lobste.rs/s/ooandv/gnu_ai_reimplementations) - [GNU and the AI reimplementations](https://antirez.com/news/162)
* [2026-03-08, 16:34:00](https://it.slashdot.org/story/26/03/08/1110220/jack-dorseys-block-accused-of-ai-washing-to-excuse-laying-off-nearly-half-its-workforce?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Jack Dorsey&apos;s Block Accused of &apos;AI-Washing&apos; to Excuse Laying Off Nearly Half Its Workforce](https://it.slashdot.org/story/26/03/08/1110220/jack-dorseys-block-accused-of-ai-washing-to-excuse-laying-off-nearly-half-its-workforce?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-08, 16:31:00](https://lobste.rs/s/j17fxk/lightweight_protocol_assert_authorship) - [Lightweight protocol to assert authorship of content and vouch for humanity of others](https://codeberg.org/robida/human.json)
* [2026-03-08, 15:34:00](https://it.slashdot.org/story/26/03/08/0216238/workers-who-love-synergizing-paradigms-might-be-bad-at-their-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Workers Who Love &apos;Synergizing Paradigms&apos; Might Be Bad at Their Jobs](https://it.slashdot.org/story/26/03/08/0216238/workers-who-love-synergizing-paradigms-might-be-bad-at-their-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-08, 15:21:09](https://news.ycombinator.com/item?id=47298044) - [FrameBook](https://fb.edoo.gg)
* [2026-03-08, 15:19:12](https://lobste.rs/s/9thupi/framebook) - [FrameBook](https://fb.edoo.gg)
* [2026-03-08, 15:05:40](https://news.ycombinator.com/item?id=47297913) - [What if the Apple ][ had run on Field-Sequential?](https://nicole.express/2026/the-apple-that-wasnt.html)
* [2026-03-08, 14:57:00](https://soylentnews.org/politics/article.pl?sid=26/03/06/1549257&amp;from=rss) - [Tech Industry is in Tariff Hell, Even If Refunds Are Automated](https://soylentnews.org/politics/article.pl?sid=26/03/06/1549257&amp;from=rss)
* [2026-03-08, 14:28:29](https://lobste.rs/s/4ze6ia/we_should_revisit_literate_programming) - [We Should Revisit Literate Programming in the Agent Era](https://silly.business/blog/we-should-revisit-literate-programming-in-the-agent-era/)
* [2026-03-08, 14:09:09](https://news.ycombinator.com/item?id=47297453) - [LibreOffice: Request to the European Commission to adhere to its own guidances](https://blog.documentfoundation.org/blog/2026/03/05/cra-guidances/)
* [2026-03-08, 13:28:26](https://news.ycombinator.com/item?id=47297167) - [Beagle, a source code management system that stores AST trees](https://github.com/gritzko/librdx/tree/master/be)
* [2026-03-08, 13:16:14](https://news.ycombinator.com/item?id=47297091) - [CLI RSS/Atom feed reader inspired by Taskwarrior, synced using Git](https://github.com/kantord/blogtato)
* [2026-03-08, 13:14:20](https://lobste.rs/s/fkhami/cli_rss_atom_feed_reader_inspired_by) - [CLI RSS/Atom feed reader inspired by Taskwarrior, synced using git](https://github.com/kantord/blogtato)
* [2026-03-08, 13:08:56](https://lobste.rs/s/z765ue/symbolic_derivatives_rust_rewrite_re) - [symbolic derivatives and the rust rewrite of RE#](https://iev.ee/blog/symbolic-derivatives-and-the-rust-rewrite-of-resharp/)
* [2026-03-08, 12:50:13](https://lobste.rs/s/guir7q/adm_grace_hopper_on_future_possibilities) - [Adm. Grace Hopper on Future Possibilities: Data, Hardware, Software, and People (1982)](https://www.nsa.gov/helpful-links/nsa-foia/declassification-transparency-initiatives/historical-releases/view/article/3880193/capt-grace-hopper-on-future-possibilities-data-hardware-software-and-people-1982/)
* [2026-03-08, 12:40:14](https://news.ycombinator.com/item?id=47296849) - [I ported Linux to the PS5 and turned it into a Steam Machine](https://xcancel.com/theflow0/status/2030011206040256841)
* [2026-03-08, 11:34:00](https://yro.slashdot.org/story/26/03/07/2058213/ai-ceos-worry-the-government-will-nationalize-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI CEOs Worry the Government Will Nationalize AI](https://yro.slashdot.org/story/26/03/07/2058213/ai-ceos-worry-the-government-will-nationalize-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-08, 11:27:49](https://news.ycombinator.com/item?id=47296481) - [If It Quacks Like a Package Manager](https://nesbitt.io/2026/03/08/if-it-quacks-like-a-package-manager.html)
* [2026-03-08, 11:27:41](https://lobste.rs/s/hekrwd/if_it_quacks_like_package_manager) - [If It Quacks Like a Package Manager](https://nesbitt.io/2026/03/08/if-it-quacks-like-a-package-manager.html)
* [2026-03-08, 11:10:14](https://lobste.rs/s/kgpyat/put_zip_code_first) - [Put the ZIP code first](https://zipcodefirst.com/)
* [2026-03-08, 11:04:04](https://news.ycombinator.com/item?id=47296355) - [Show HN: Eyot, A programming language where the GPU is just another thread](https://cowleyforniastudios.com/2026/03/08/announcing-eyot/)
* [2026-03-08, 10:54:32](https://news.ycombinator.com/item?id=47296302) - [Apple&apos;s 512GB Mac Studio vanishes, a quiet acknowledgment of the RAM shortage](https://arstechnica.com/gadgets/2026/03/apples-512gb-mac-studio-vanishes-a-quiet-acknowledgement-of-the-ram-shortage/)
* [2026-03-08, 10:13:00](https://soylentnews.org/article.pl?sid=26/03/06/1545254&amp;from=rss) - [Would Aliens Do Physics, or is Science a Human Invention?](https://soylentnews.org/article.pl?sid=26/03/06/1545254&amp;from=rss)
* [2026-03-08, 09:24:54](https://news.ycombinator.com/item?id=47295837) - [Notes on writing Rust-based Wasm](https://notes.brooklynzelenka.com/Blog/Notes-on-Writing-Wasm)
* [2026-03-08, 08:34:00](https://yro.slashdot.org/story/26/03/08/015225/daylight-saving-time-ritual-continues-but-are-there-alternatives?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Daylight Saving Time Ritual Continues. But Are There Alternatives?](https://yro.slashdot.org/story/26/03/08/015225/daylight-saving-time-ritual-continues-but-are-there-alternatives?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-08, 08:11:50](https://news.ycombinator.com/item?id=47295537) - [SWE-CI: Evaluating Agent Capabilities in Maintaining Codebases via CI](https://arxiv.org/abs/2603.03823)
* [2026-03-08, 06:01:26](https://news.ycombinator.com/item?id=47294924) - [Sem – Semantic version control. Entity-level diffs on top of Git](https://github.com/ataraxy-labs/sem)
* [2026-03-08, 05:24:00](https://soylentnews.org/article.pl?sid=26/03/06/1541249&amp;from=rss) - [Lawsuit: Google Gemini Sent Man on Violent Missions, Set Suicide “Countdown”](https://soylentnews.org/article.pl?sid=26/03/06/1541249&amp;from=rss)
* [2026-03-08, 04:44:00](https://tech.slashdot.org/story/26/03/07/0321225/as-us-tariffs-hit-evs-hyundai-discontinues-its-cheapest-ioniq-6-while-kia-delays-ev6-adn-ev9-gt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [As US Tariffs Hit EVs, Hyundai Discontinues Its Cheapest IONIQ 6, While Kia Delays EV6 adn EV9 GT](https://tech.slashdot.org/story/26/03/07/0321225/as-us-tariffs-hit-evs-hyundai-discontinues-its-cheapest-ioniq-6-while-kia-delays-ev6-adn-ev9-gt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-08, 02:34:00](https://entertainment.slashdot.org/story/26/03/08/0150256/steven-spielberg--dinosaurs--netflix--mixed-reviews?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Steven Spielberg + Dinosaurs + Netflix = Mixed Reviews](https://entertainment.slashdot.org/story/26/03/08/0150256/steven-spielberg--dinosaurs--netflix--mixed-reviews?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-08, 02:27:29](https://lobste.rs/s/w047bo/coloring_for_colorblindness) - [Coloring for Colorblindness](https://davidmathlogic.com/colorblind)
* [2026-03-08, 02:03:13](https://lobste.rs/s/8dz5tt/primitive_proposal_for_human_interface) - [Primitive proposal for human-interface improvement on Lobste.rs](https://www.figma.com/proto/wyDB0nvSiZCmvlsSLCf4eY/Websites?node-id=244-252&amp;p=f&amp;t=hi5Tfa6PoucMf2hW-1&amp;scaling=scale-down-width&amp;content-scaling=fixed&amp;page-id=140%3A126)
* [2026-03-08, 01:35:21](https://news.ycombinator.com/item?id=47293415) - [Warn about PyPy being unmaintained](https://github.com/astral-sh/uv/pull/17643)
* [2026-03-08, 00:58:16](https://lobste.rs/s/bjb3dz/window_chrome_our_discontent) - [The Window Chrome of Our Discontent](https://pxlnv.com/blog/window-chrome-of-our-discontent/)
* [2026-03-08, 00:44:32](https://news.ycombinator.com/item?id=47293119) - [Cloud VM benchmarks 2026](https://devblog.ecuadors.net/cloud-vm-benchmarks-2026-performance-price-1i1m.html)
* [2026-03-08, 00:39:00](https://soylentnews.org/article.pl?sid=26/03/06/1538243&amp;from=rss) - [Clueless Cops Post Seized Crypto Wallet Password. $5M Quickly Stolen.](https://soylentnews.org/article.pl?sid=26/03/06/1538243&amp;from=rss)
* [2026-03-08, 00:16:00](https://science.slashdot.org/story/26/03/08/004240/a-first-for-humanity-confirmed-nasas-dart-mission-slowed-the-asteroids-orbit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A First for Humanity Confirmed: NASA&apos;s DART Mission Slowed the Asteroid&apos;s Orbit](https://science.slashdot.org/story/26/03/08/004240/a-first-for-humanity-confirmed-nasas-dart-mission-slowed-the-asteroids-orbit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-07, 23:32:17](https://news.ycombinator.com/item?id=47292522) - [How to run Qwen 3.5 locally](https://unsloth.ai/docs/models/qwen3.5)
* [2026-03-07, 23:16:00](https://science.slashdot.org/story/26/03/07/2249259/japan-approves-stem-cell-treatments-for-parkinsons-heart-failure-in-world-firsts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Japan Approves Stem-Cell Treatments For Parkinson&apos;s, Heart Failure In World Firsts](https://science.slashdot.org/story/26/03/07/2249259/japan-approves-stem-cell-treatments-for-parkinsons-heart-failure-in-world-firsts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-07, 22:16:16](https://lobste.rs/s/c7tzjs/perfect_types_with_sethtml) - [Perfect types with `setHTML()`](https://frederikbraun.de/perfect-types-with-sethtml.html)
* [2026-03-07, 22:16:00](https://hardware.slashdot.org/story/26/03/07/2213221/openais-head-of-robotics-resigns-says-pentagon-deal-was-rushed-without-the-guardrails-defined?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI&apos;s Head of Robotics Resigns, Says Pentagon Deal Was &apos;Rushed Without the Guardrails Defined&apos;](https://hardware.slashdot.org/story/26/03/07/2213221/openais-head-of-robotics-resigns-says-pentagon-deal-was-rushed-without-the-guardrails-defined?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-07, 22:15:12](https://lobste.rs/s/w5czhm/nix_is_lie_s_ok) - [Nix is a lie, and that’s ok](https://fzakaria.com/2026/03/07/nix-is-a-lie-and-that-s-ok)
* [2026-03-07, 21:07:00](https://science.slashdot.org/story/26/03/07/0753224/astronomers-think-theyve-spotted-a-galaxy-thats-999-dark-matter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Astronomers Think They&apos;ve Spotted a Galaxy That&apos;s 99.9% Dark Matter](https://science.slashdot.org/story/26/03/07/0753224/astronomers-think-theyve-spotted-a-galaxy-thats-999-dark-matter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-07, 20:43:51](https://news.ycombinator.com/item?id=47291292) - [CasNum](https://github.com/0x0mer/CasNum)
* [2026-03-07, 20:07:00](https://news.slashdot.org/story/26/03/07/204222/how-anthropics-claude-helped-mozilla-improve-firefoxs-security?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Anthropic&apos;s Claude Helped Mozilla Improve Firefox&apos;s Security](https://news.slashdot.org/story/26/03/07/204222/how-anthropics-claude-helped-mozilla-improve-firefoxs-security?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-07, 19:55:00](https://soylentnews.org/article.pl?sid=26/03/06/1533251&amp;from=rss) - [Congress Extends ISS and Tells NASA to Get Moving on Private Space Stations](https://soylentnews.org/article.pl?sid=26/03/06/1533251&amp;from=rss)
* [2026-03-07, 18:34:00](https://tech.slashdot.org/story/26/03/07/0521211/military-gps-jamming-is-interfering-with-the-navigation-systems-of-commercial-ships?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Military GPS Jamming is Interfering with the Navigation Systems of Commercial Ships](https://tech.slashdot.org/story/26/03/07/0521211/military-gps-jamming-is-interfering-with-the-navigation-systems-of-commercial-ships?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-07, 17:34:00](https://hardware.slashdot.org/story/26/03/07/0649230/seagate-just-unleashed-44tb-hard-drives?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Seagate Just Unleashed 44TB Hard Drives](https://hardware.slashdot.org/story/26/03/07/0649230/seagate-just-unleashed-44tb-hard-drives?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-07, 17:04:46](https://lobste.rs/s/xndrk0/usage_specification) - [Usage Specification](https://usage.jdx.dev/spec/)
* [2026-03-07, 16:52:29](https://lobste.rs/s/2zk3oe/pushing_pulling_three_reactivity) - [Pushing and Pulling: Three Reactivity Algorithms](https://jonathan-frere.com/posts/reactivity-algorithms/)
* [2026-03-07, 16:03:22](https://lobste.rs/s/u8x6xv/ki_editor_multi_cursor_structural_editor) - [Ki Editor | Multi-cursor structural editor](https://ki-editor.org/)
* [2026-03-07, 15:07:00](https://soylentnews.org/article.pl?sid=26/03/06/1338239&amp;from=rss) - [Starlink Mobile Teases ‘5G Speeds From Space With 100X the Data Density’](https://soylentnews.org/article.pl?sid=26/03/06/1338239&amp;from=rss)
* [2026-03-07, 10:21:00](https://soylentnews.org/article.pl?sid=26/03/06/1335212&amp;from=rss) - [What Crystals Older Than the Sun Reveal About the Start of the Solar System](https://soylentnews.org/article.pl?sid=26/03/06/1335212&amp;from=rss)
* [2026-03-07, 09:39:13](https://lobste.rs/s/azkace/lenovo_s_new_t_series_thinkpads_score_10_10) - [Lenovo’s New T-Series ThinkPads Score 10/10 for Repairability](https://www.ifixit.com/News/115827/new-thinkpads-score-perfect-10-repairability)
* [2026-03-07, 05:40:00](https://soylentnews.org/article.pl?sid=26/03/06/1321207&amp;from=rss) - [Holy C Batman, He Built an Operating System!](https://soylentnews.org/article.pl?sid=26/03/06/1321207&amp;from=rss)
* [2026-03-07, 01:21:47](https://news.ycombinator.com/item?id=47283365) - [Some Words on WigglyPaint](https://beyondloom.com/blog/onwigglypaint.html)
* [2026-03-07, 00:53:00](https://soylentnews.org/article.pl?sid=26/03/05/2316254&amp;from=rss) - [vscreen: A Real Browser for AI Agents, Streamed Live via WebRTC](https://soylentnews.org/article.pl?sid=26/03/05/2316254&amp;from=rss)
* [2026-03-07, 00:43:00](https://lobste.rs/s/drtput/some_words_on_wigglypaint) - [Some Words on WigglyPaint](https://beyondloom.com/blog/onwigglypaint.html)
* [2026-03-07, 00:30:08](https://lobste.rs/s/qorrgl/i_m_not_consulting_llm) - [I&apos;m not consulting an LLM](https://lr0.org/blog/p/gpt/)
* [2026-03-06, 20:11:00](https://soylentnews.org/article.pl?sid=26/03/05/233230&amp;from=rss) - [Reminder:  VPNs Can&apos;t Make You Anonymous Online](https://soylentnews.org/article.pl?sid=26/03/05/233230&amp;from=rss)
* [2026-03-06, 15:30:00](https://soylentnews.org/article.pl?sid=26/03/05/2246218&amp;from=rss) - [Destroyed Servers and DoS Attacks: What Can Happen When OpenClaw AI Agents Interact](https://soylentnews.org/article.pl?sid=26/03/05/2246218&amp;from=rss)
* [2026-03-06, 10:43:00](https://soylentnews.org/article.pl?sid=26/03/05/1853251&amp;from=rss) - [As Moon Interest Heats Up, Two Companies Unveil Plans for a Lunar \&quot;Harvester\&quot;](https://soylentnews.org/article.pl?sid=26/03/05/1853251&amp;from=rss)
* [2026-03-06, 05:58:00](https://soylentnews.org/article.pl?sid=26/03/05/1850205&amp;from=rss) - [DOS Memory Management](https://soylentnews.org/article.pl?sid=26/03/05/1850205&amp;from=rss)
* [2026-03-06, 05:46:28](https://news.ycombinator.com/item?id=47271338) - [A basket of new fruit varieties is coming your way](https://www.economist.com/science-and-technology/2026/03/04/a-basket-of-new-fruit-varieties-is-coming-your-way)
* [2026-03-06, 01:10:00](https://soylentnews.org/article.pl?sid=26/03/05/1846224&amp;from=rss) - [Micron Sampling First 256GB SOCAMM2 Memory Packages — 2TB of RAM Per CPU for Datacenters](https://soylentnews.org/article.pl?sid=26/03/05/1846224&amp;from=rss)
* [2026-03-05, 20:25:00](https://soylentnews.org/article.pl?sid=26/03/05/0529259&amp;from=rss) - [To Update Blobs or Not to Update Blobs](https://soylentnews.org/article.pl?sid=26/03/05/0529259&amp;from=rss)
* [2026-03-05, 15:42:00](https://soylentnews.org/article.pl?sid=26/03/05/0714212&amp;from=rss) - [AI Art Isn&apos;t Art, or Copyrightable Art Anyway](https://soylentnews.org/article.pl?sid=26/03/05/0714212&amp;from=rss)
* [2026-03-05, 10:52:00](https://soylentnews.org/article.pl?sid=26/03/05/0732251&amp;from=rss) - [Drones Attack Several AWS Middle East Region Data Centers Amid Iran War, Leading to Outages](https://soylentnews.org/article.pl?sid=26/03/05/0732251&amp;from=rss)
* [2026-03-05, 06:11:00](https://soylentnews.org/article.pl?sid=26/03/05/0523208&amp;from=rss) - [No Fooling: NASA Targets April 1 for Artemis II Launch to the Moon](https://soylentnews.org/article.pl?sid=26/03/05/0523208&amp;from=rss)
* [2026-03-05, 00:23:00](https://soylentnews.org/article.pl?sid=26/03/04/1535231&amp;from=rss) - [Anonymous Credentials: an Illustrated Primer](https://soylentnews.org/article.pl?sid=26/03/04/1535231&amp;from=rss)
* [2026-03-04, 22:30:27](https://news.ycombinator.com/item?id=47254896) - [Why can&apos;t you tune your guitar? (2019)](https://www.ethanhein.com/wp/2019/why-cant-you-tune-your-guitar/)
* [2026-03-04, 19:39:00](https://soylentnews.org/article.pl?sid=26/03/04/1320238&amp;from=rss) - [Small Web, IndieWeb, Gemini… a Guide to the Retro-Web](https://soylentnews.org/article.pl?sid=26/03/04/1320238&amp;from=rss)
* [2026-03-04, 15:42:49](https://news.ycombinator.com/item?id=47249139) - [Rijksmuseum researchers discover new painting by Rembrandt van Rijn](https://www.rijksmuseum.nl/en/press/press-releases/rijksmuseum-researchers-discover-new-painting-by-rembrandt-van-rijn)
* [2026-03-04, 14:53:00](https://soylentnews.org/article.pl?sid=26/03/04/1318201&amp;from=rss) - [LLMs Can Unmask Pseudonymous Users at Scale With Surprising Accuracy](https://soylentnews.org/article.pl?sid=26/03/04/1318201&amp;from=rss)
* [2026-03-04, 13:39:34](https://news.ycombinator.com/item?id=47247248) - [The Collective Ambition Behind Odysseus, a Game-Changing Sci-Fi Larp](https://mssv.net/2025/03/19/the-collective-ambition-behind-odysseus/)
* [2026-03-04, 12:36:03](https://news.ycombinator.com/item?id=47246594) - [Accessing inactive union members through char](https://www.sandordargo.com/blog/2026/03/04/char-representation-and-UB)
* [2026-03-04, 10:07:00](https://soylentnews.org/article.pl?sid=26/03/04/077205&amp;from=rss) - [Medical Journal the Lancet Blasts RFK Jr.’s Health Work as a Failure](https://soylentnews.org/article.pl?sid=26/03/04/077205&amp;from=rss)
* [2026-03-04, 05:22:00](https://soylentnews.org/article.pl?sid=26/03/03/029259&amp;from=rss) - [&apos;Cancel ChatGPT&apos;: AI Boycott Surges After OpenAI-Pentagon Military Deal](https://soylentnews.org/article.pl?sid=26/03/03/029259&amp;from=rss)
* [2026-03-04, 00:30:00](https://soylentnews.org/article.pl?sid=26/03/03/021249&amp;from=rss) - [Entry-Level PC Market To ‘Disappear’ By 2028 — Rising Memory Prices Pile More Strain On Consumer PC ](https://soylentnews.org/article.pl?sid=26/03/03/021249&amp;from=rss)
