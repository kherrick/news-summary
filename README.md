# [News Summary](https://kherrick.github.io/news-summary/)

## Advancements in AI and Technology

* [AI Support Bot Invents Nonexistent Policy](https://slashdot.org/story/25/04/18/040257/ai-support-bot-invents-nonexistent-policy?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A fascinating glitch where AI miscommunicates nonexistent policies, raising questions around AI accountability and communication.

* [Q-CTRL Unveils Jam-Proof Positioning System That&apos;s 50x More Accurate Than GPS](https://tech.slashdot.org/story/25/04/17/234258/q-ctrl-unveils-jam-proof-positioning-system-thats-50x-more-accurate-than-gps?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A breakthrough system enhancing positioning technology, overcoming vulnerabilities faced by GPS systems today.

* [ESA Video Game Trains AI To Recognize Craters On the Moon](https://science.slashdot.org/story/25/04/17/2316217/esa-video-game-trains-ai-to-recognize-craters-on-the-moon?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Game-based training emphasizes innovative methods to improve AI perception for space exploration.

## Environmental and Scientific Innovations

* [Project To Suck Carbon Out of Sea Begins in UK](https://news.slashdot.org/story/25/04/18/0955246/project-to-suck-carbon-out-of-sea-begins-in-uk?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A pioneering environmental initiative targeting climate change through oceanic carbon removal.

* [Curiosity rover finds large carbonate deposits on Mars](https://phys.org/news/2025-04-curiosity-rover-large-carbon-deposits.html) - New discoveries expanding human understanding of Martian geology and past environmental conditions.

* [Oxygen Discovered in Most Distant Known Galaxy](https://soylentnews.org/article.pl?sid=25/04/16/1849251&from=rss) - Astronomers achieve a significant milestone by detecting oxygen in a remote galaxy, providing clues about early universe chemistry.

## Explorations of Computing and Programming

* [Sneak peek: A new ASN.1 API for Python](https://blog.trailofbits.com/2025/04/18/sneak-peek-a-new-asn.1-api-for-python/) - An update on an advanced Python API offering efficient abstract syntax coding possibilities.

* [Common shell script mistakes](https://www.pixelbeat.org/programming/shell_script_mistakes.html) - A guide enumerating mistakes in shell scripting aimed at improving coding practices.

* [Microsecond transforms: Building a fast sandbox for user code](https://blog.sequinstream.com/microsecond-transforms-building-a-lightning-fast-sandbox-for-user-code/) - Ingenious techniques to scale code execution in microsecond range for elevated efficiency.

## Historical and Cultural Insights

* [Why the &apos;Weakest Samurai Warlord&apos; Is Admired To This Day](https://slashdot.org/story/25/04/18/107217/why-the-weakest-samurai-warlord-is-admired-to-this-day?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Historical retrospective reveals leadership qualities valued beyond military prowess.

* [A Math Lesson From Hitler’s Germany (2017)](https://undark.org/2017/02/01/math-lesson-hitlers-germany/) - Revisiting the intertwining of mathematics and propaganda in a chilling chapter of history.

* [Why is Good Friday called Good Friday?](https://www.historyextra.com/period/general-history/good-friday-facts-why-called/) - An exploration of the etymology and cultural significance behind the name for Good Friday.

## Ethics, Security, and Privacy

* [Police Using AI Personas to Infiltrate Online Activist Spaces, Records Reveal](https://slashdot.org/story/25/04/17/2259259/police-using-ai-personas-to-infiltrate-online-activist-spaces-records-reveal?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Concerns raised over the blending of AI technology with surveillance practices targeting activists.

* [Walled Gardens Can Kill](https://aneesiqbal.ai/2025-04-18-walled-gardens-can-kill) - A critical opinion piece on how digital ecosystems are impacting freedom and innovation.

* [Phase Two of Military AI Has Arrived](https://soylentnews.org/article.pl?sid=25/04/16/1843228&from=rss) - Ethical questions unearth with the advancement of AI utilization in warfare.

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

* [2025-04-18, 15:39:38](https://lobste.rs/s/qof7at/antithesis_driven_testing) - [Antithesis driven testing](https://sqlsync.dev/posts/antithesis-driven-testing/)
* [2025-04-18, 15:20:00](https://slashdot.org/story/25/04/18/107217/why-the-weakest-samurai-warlord-is-admired-to-this-day?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why the &apos;Weakest Samurai Warlord&apos; Is Admired To This Day](https://slashdot.org/story/25/04/18/107217/why-the-weakest-samurai-warlord-is-admired-to-this-day?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-18, 15:04:06](https://lobste.rs/s/xez5ic/sneak_peek_new_asn_1_api_for_python) - [Sneak peek: A new ASN.1 API for Python](https://blog.trailofbits.com/2025/04/18/sneak-peek-a-new-asn.1-api-for-python/)
* [2025-04-18, 14:40:00](https://news.slashdot.org/story/25/04/18/0955246/project-to-suck-carbon-out-of-sea-begins-in-uk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Project To Suck Carbon Out of Sea Begins in UK](https://news.slashdot.org/story/25/04/18/0955246/project-to-suck-carbon-out-of-sea-begins-in-uk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-18, 14:34:00](https://soylentnews.org/article.pl?sid=25/04/17/1336207&amp;from=rss) - [The Friendship Recession: The Lost Art of Connecting](https://soylentnews.org/article.pl?sid=25/04/17/1336207&amp;from=rss)
* [2025-04-18, 14:11:40](https://news.ycombinator.com/item?id=43728279) - [A New ASN.1 API for Python](https://blog.trailofbits.com/2025/04/18/sneak-peek-a-new-asn.1-api-for-python/)
* [2025-04-18, 14:00:00](https://science.slashdot.org/story/25/04/18/0459259/a-new-journal-record-sage-title-retracts-678-more-papers-tally-over-1500?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A New Journal Record: Sage Title Retracts 678 More Papers, Tally Over 1,500](https://science.slashdot.org/story/25/04/18/0459259/a-new-journal-record-sage-title-retracts-678-more-papers-tally-over-1500?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-18, 13:59:06](https://lobste.rs/s/20nle9/common_shell_script_mistakes) - [Common shell script mistakes](https://www.pixelbeat.org/programming/shell_script_mistakes.html)
* [2025-04-18, 13:55:50](https://news.ycombinator.com/item?id=43728130) - [A Math Lesson From Hitler’s Germany (2017)](https://undark.org/2017/02/01/math-lesson-hitlers-germany/)
* [2025-04-18, 13:55:45](https://lobste.rs/s/s4nfxt/easter_hack_terraform_provider_openwrt) - [Easter hack: terraform-provider-openwrt](https://linderud.dev/blog/easter-hack-terraform-provider-openwrt/)
* [2025-04-18, 13:49:55](https://lobste.rs/s/kigaip/image_segmentation_using_gemini_2_5) - [Image segmentation using Gemini 2.5](https://simonwillison.net/2025/Apr/18/gemini-image-segmentation/)
* [2025-04-18, 13:09:50](https://news.ycombinator.com/item?id=43727743) - [Less Slow C++](https://github.com/ashvardanian/less_slow.cpp)
* [2025-04-18, 13:08:14](https://news.ycombinator.com/item?id=43727727) - [IBM orders US sales to locate near customers, RTO for cloud staff, DEI purge](https://www.theregister.com/2025/04/18/ibm_orders_us_sales_staff/)
* [2025-04-18, 13:00:00](https://slashdot.org/story/25/04/18/040257/ai-support-bot-invents-nonexistent-policy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Support Bot Invents Nonexistent Policy](https://slashdot.org/story/25/04/18/040257/ai-support-bot-invents-nonexistent-policy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-18, 12:12:56](https://lobste.rs/s/xgw2d9/microsecond_transforms_building_fast) - [Microsecond transforms: Building a fast sandbox for user code](https://blog.sequinstream.com/microsecond-transforms-building-a-lightning-fast-sandbox-for-user-code/)
* [2025-04-18, 12:06:38](https://lobste.rs/s/ipvyhu/four_years_jai) - [Four Years of Jai](https://smarimccarthy.is/posts/2024-12-02-four-years-of-jai/)
* [2025-04-18, 11:32:10](https://news.ycombinator.com/item?id=43727052) - [Curiosity rover finds large carbonate deposits on Mars](https://phys.org/news/2025-04-curiosity-rover-large-carbon-deposits.html)
* [2025-04-18, 10:30:01](https://lobste.rs/s/zsadu0/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/zsadu0/what_are_you_doing_this_weekend)
* [2025-04-18, 10:27:39](https://news.ycombinator.com/item?id=43726672) - [Walled Gardens Can Kill](https://aneesiqbal.ai/2025-04-18-walled-gardens-can-kill)
* [2025-04-18, 10:26:28](https://lobste.rs/s/wywnlc/awesome_consensus_survey_recent) - [Awesome Consensus: A survey of recent byzantine fault tolerance algorithms](https://github.com/hellas-ai/awesome-consensus)
* [2025-04-18, 10:21:42](https://news.ycombinator.com/item?id=43726640) - [arXiv moving from Cornell servers to Google Cloud](https://info.arxiv.org/hiring/index.html)
* [2025-04-18, 10:00:00](https://science.slashdot.org/story/25/04/17/2316217/esa-video-game-trains-ai-to-recognize-craters-on-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ESA Video Game Trains AI To Recognize Craters On the Moon](https://science.slashdot.org/story/25/04/17/2316217/esa-video-game-trains-ai-to-recognize-craters-on-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-18, 09:52:00](https://soylentnews.org/article.pl?sid=25/04/16/1857229&amp;from=rss) - [‘End of an Era’: The Last RadioShack in Maryland is Closing its Doors](https://soylentnews.org/article.pl?sid=25/04/16/1857229&amp;from=rss)
* [2025-04-18, 08:49:23](https://lobste.rs/s/lwkzan/ratatui_are_we_embedded_yet) - [Ratatui - Are We Embedded Yet?](https://jslazak.com/are-we-embedded-yet-0/)
* [2025-04-18, 08:15:20](https://news.ycombinator.com/item?id=43726051) - [Defold: cross-platform game engine](https://defold.com)
* [2025-04-18, 08:11:45](https://news.ycombinator.com/item?id=43726037) - [Unikernel Linux (UKL) (2023)](https://dl.acm.org/doi/10.1145/3552326.3587458)
* [2025-04-18, 07:31:04](https://news.ycombinator.com/item?id=43725865) - [AMP and why emails are not (and should never be) interactive](https://buttondown.com/blog/whatever-happened-to-amp-email)
* [2025-04-18, 07:00:00](https://tech.slashdot.org/story/25/04/17/234258/q-ctrl-unveils-jam-proof-positioning-system-thats-50x-more-accurate-than-gps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Q-CTRL Unveils Jam-Proof Positioning System That&apos;s 50x More Accurate Than GPS](https://tech.slashdot.org/story/25/04/17/234258/q-ctrl-unveils-jam-proof-positioning-system-thats-50x-more-accurate-than-gps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-18, 06:03:34](https://lobste.rs/s/1f1xfj/why_i_cannot_be_technical) - [Why I Cannot Be Technical](https://www.fightforthehuman.com/why-i-cannot-be-technical/)
* [2025-04-18, 05:57:25](https://lobste.rs/s/g0ozyq/olive_c_simple_2d_graphics_library_for_c) - [olive.c: Simple 2D Graphics Library for C](https://github.com/tsoding/olive.c)
* [2025-04-18, 05:07:00](https://soylentnews.org/article.pl?sid=25/04/16/1849251&amp;from=rss) - [Oxygen Discovered in Most Distant Known Galaxy](https://soylentnews.org/article.pl?sid=25/04/16/1849251&amp;from=rss)
* [2025-04-18, 04:17:57](https://lobste.rs/s/l3vboo/software_development_has_too_much) - [Software Development Has Too Much Software In It](https://smustafa.blog/2025/03/19/software-development-has-too-much-software-in-it/)
* [2025-04-18, 04:17:21](https://lobste.rs/s/jua1yc/using_ssh_authorized_keys_decide_what) - [Using ~/.ssh/authorized keys to decide what the incoming connection can do](https://dan.langille.org/2025/04/17/using-ssh-authorized-keys-to-decide-what-the-incoming-connection-can-do/)
* [2025-04-18, 04:12:21](https://news.ycombinator.com/item?id=43724941) - [Kagi Assistant is now available to all users](https://blog.kagi.com/assistant-for-all)
* [2025-04-18, 03:59:35](https://news.ycombinator.com/item?id=43724870) - [Why is Good Friday called Good Friday?](https://www.historyextra.com/period/general-history/good-friday-facts-why-called/)
* [2025-04-18, 03:30:00](https://slashdot.org/story/25/04/17/2259259/police-using-ai-personas-to-infiltrate-online-activist-spaces-records-reveal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Police Using AI Personas to Infiltrate Online Activist Spaces, Records Reveal](https://slashdot.org/story/25/04/17/2259259/police-using-ai-personas-to-infiltrate-online-activist-spaces-records-reveal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-18, 02:17:56](https://lobste.rs/s/6jd4qy/honest_elitist_thoughts_on_why_computers) - [Honest and Elitist Thoughts on Why Computers Were More Fun Before](https://www.datagubbe.se/aficion/)
* [2025-04-18, 01:00:00](https://entertainment.slashdot.org/story/25/04/18/0012231/amazon-to-launch-first-vega-os-powered-tv-streaming-device-this-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon To Launch First Vega OS-powered TV Streaming Device This Year](https://entertainment.slashdot.org/story/25/04/18/0012231/amazon-to-launch-first-vega-os-powered-tv-streaming-device-this-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-18, 00:59:06](https://news.ycombinator.com/item?id=43723884) - [The Size of Packets](https://www.potaroo.net/ispcol/2024-10/packet-sizes.html)
* [2025-04-18, 00:21:00](https://soylentnews.org/article.pl?sid=25/04/16/1843228&amp;from=rss) - [Phase Two of Military AI Has Arrived](https://soylentnews.org/article.pl?sid=25/04/16/1843228&amp;from=rss)
* [2025-04-18, 00:20:00](https://news.slashdot.org/story/25/04/17/2250222/liz-truss-announces-uncensorable-social-media-venture?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Liz Truss Announces &apos;Uncensorable&apos; Social Media Venture](https://news.slashdot.org/story/25/04/17/2250222/liz-truss-announces-uncensorable-social-media-venture?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-18, 00:17:30](https://lobste.rs/s/lfdslx/stop_writing_init_methods) - [Stop Writing `__init__` Methods](https://blog.glyph.im/2025/04/stop-writing-init-methods.html)
* [2025-04-17, 23:40:00](https://yro.slashdot.org/story/25/04/17/2229247/hp-agrees-to-4-million-settlement-over-claims-of-falsely-advertising-pcs-keyboards?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [HP Agrees To $4 Million Settlement Over Claims of &apos;Falsely Advertising&apos; PCs, Keyboards](https://yro.slashdot.org/story/25/04/17/2229247/hp-agrees-to-4-million-settlement-over-claims-of-falsely-advertising-pcs-keyboards?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-17, 23:17:25](https://lobste.rs/s/1ykhfa/reflections_on_unikernels) - [Reflections on Unikernels](https://dave.recoil.org/unikernels/)
* [2025-04-17, 23:00:00](https://slashdot.org/story/25/04/17/2224205/microsoft-researchers-develop-hyper-efficient-ai-model-that-can-run-on-cpus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Researchers Develop Hyper-Efficient AI Model That Can Run On CPUs](https://slashdot.org/story/25/04/17/2224205/microsoft-researchers-develop-hyper-efficient-ai-model-that-can-run-on-cpus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-17, 22:55:55](https://news.ycombinator.com/item?id=43723088) - [What do I think about Lua after shipping a project with 60k lines of code?](https://blog.luden.io/what-do-i-think-about-lua-after-shipping-a-project-with-60-000-lines-of-code-bf72a1328733)
* [2025-04-17, 22:44:11](https://news.ycombinator.com/item?id=43723020) - [I analyzed chord progressions in 680k songs](https://www.cantgetmuchhigher.com/p/i-analyzed-chord-progressions-in)
* [2025-04-17, 22:20:00](https://news.slashdot.org/story/25/04/17/2217200/us-halts-5-billion-new-york-offshore-wind-project-mid-build?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Halts $5 Billion New York Offshore Wind Project Mid-Build](https://news.slashdot.org/story/25/04/17/2217200/us-halts-5-billion-new-york-offshore-wind-project-mid-build?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-17, 21:35:45](https://news.ycombinator.com/item?id=43722486) - [Potatoes in the Mail](https://facts.usps.com/mailing-potatoes/)
* [2025-04-17, 21:20:00](https://news.slashdot.org/story/25/04/17/1959204/google-is-gifting-gemini-advanced-to-us-college-students?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Is Gifting Gemini Advanced To US College Students](https://news.slashdot.org/story/25/04/17/1959204/google-is-gifting-gemini-advanced-to-us-college-students?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-17, 20:40:00](https://yro.slashdot.org/story/25/04/17/1950221/federal-judge-declares-googles-digital-ad-network-is-an-illegal-monopoly?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Federal Judge Declares Google&apos;s Digital Ad Network Is an Illegal Monopoly](https://yro.slashdot.org/story/25/04/17/1950221/federal-judge-declares-googles-digital-ad-network-is-an-illegal-monopoly?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-17, 20:00:00](https://yro.slashdot.org/story/25/04/17/1941258/chatgpt-models-are-surprisingly-good-at-geoguessing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ChatGPT Models Are Surprisingly Good At Geoguessing](https://yro.slashdot.org/story/25/04/17/1941258/chatgpt-models-are-surprisingly-good-at-geoguessing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-17, 19:42:00](https://soylentnews.org/article.pl?sid=25/04/16/1838216&amp;from=rss) - [Disasters Spur Investment in Flood and Fire Risk Technology](https://soylentnews.org/article.pl?sid=25/04/16/1838216&amp;from=rss)
* [2025-04-17, 19:03:39](https://news.ycombinator.com/item?id=43720845) - [Gemini 2.5 Flash](https://developers.googleblog.com/en/start-building-with-gemini-25-flash/)
* [2025-04-17, 18:27:46](https://lobste.rs/s/bkvrqv/zig_gpus) - [Zig and GPUs](https://alichraghi.github.io/blog/zig-gpu/)
* [2025-04-17, 17:52:42](https://lobste.rs/s/lkrinq/just_throw_it_into_postgres) - [Just Throw It Into Postgres](https://simonsafar.com/2025/throw_it_into_postgres/)
* [2025-04-17, 16:16:19](https://lobste.rs/s/laksbh/is_no_paas_really_good_idea_for_rails) - [Is No PaaS really a good idea for Rails?](https://www.honeybadger.io/blog/rails-no-paas/)
* [2025-04-17, 14:54:00](https://soylentnews.org/article.pl?sid=25/04/16/1816228&amp;from=rss) - [AMD Set to Produce its CPU Chip at TSMC Plant in Arizona](https://soylentnews.org/article.pl?sid=25/04/16/1816228&amp;from=rss)
* [2025-04-17, 13:53:16](https://lobste.rs/s/fl7ly9/traceboot_precise_lightweight_tracing) - [traceboot: precise and lightweight tracing for boot and shell scripts](https://codeberg.org/SpecialSnowflake/traceboot)
* [2025-04-17, 13:35:58](https://news.ycombinator.com/item?id=43716616) - [Show HN: LTE-connected IoT module with remote programming and NL data analysis](https://www.youtube.com/watch?v=3L_OU-fMW_w)
* [2025-04-17, 13:31:24](https://lobste.rs/s/k0bswx/arch_linux_valkey_replace_redis_extra) - [Arch Linux: Valkey to replace Redis in the [extra] Repository](https://archlinux.org/news/valkey-to-replace-redis-in-the-extra-repository/)
* [2025-04-17, 12:50:37](https://news.ycombinator.com/item?id=43716058) - [An intro to DeepSeek&apos;s distributed file system](https://maknee.github.io/blog/2025/3FS-Performance-Journal-1/)
* [2025-04-17, 10:26:00](https://lobste.rs/s/idmemq/development_on_apple_silicon_with_utm) - [Development On Apple Silicon with UTM](https://rkiselenko.dev/blog/development-on-mac-with-utm/development-on-mac-with-lima/)
* [2025-04-17, 10:08:00](https://soylentnews.org/article.pl?sid=25/04/16/1155209&amp;from=rss) - [OpenWrt 24.10.1 is Now Available](https://soylentnews.org/article.pl?sid=25/04/16/1155209&amp;from=rss)
* [2025-04-17, 09:23:08](https://lobste.rs/s/mwvwsp/bring_back_rss_feeds_browsers) - [Bring Back RSS Feeds to Browsers](https://jetgirl.art/bring-back-rss-feeds-to-browsers/)
* [2025-04-17, 05:23:00](https://soylentnews.org/article.pl?sid=25/04/16/1153241&amp;from=rss) - [An Ars Technica History of the Internet, Part 1](https://soylentnews.org/article.pl?sid=25/04/16/1153241&amp;from=rss)
* [2025-04-17, 03:53:19](https://lobste.rs/s/idtroe/unsure_calculator) - [Unsure Calculator](https://filiph.github.io/unsure/)
* [2025-04-17, 00:39:00](https://soylentnews.org/article.pl?sid=25/04/16/1151239&amp;from=rss) - [Dolphins Are Dying From Toxic Chemicals Banned Since the 1980s](https://soylentnews.org/article.pl?sid=25/04/16/1151239&amp;from=rss)
* [2025-04-16, 19:56:00](https://soylentnews.org/article.pl?sid=25/04/16/1146247&amp;from=rss) - [MITRE Announced Funding for Common Vulnerabilities and Exposures (CVE) Program Ends 16-April-2025](https://soylentnews.org/article.pl?sid=25/04/16/1146247&amp;from=rss)
* [2025-04-16, 15:13:00](https://soylentnews.org/article.pl?sid=25/04/16/1143246&amp;from=rss) - [Rooftop Solar PV Could Supply Two-Thirds of World&apos;s Energy Needs, and Lower Global Temperatures](https://soylentnews.org/article.pl?sid=25/04/16/1143246&amp;from=rss)
* [2025-04-16, 10:26:00](https://soylentnews.org/article.pl?sid=25/04/15/1018214&amp;from=rss) - [Meeting Apple on Apple&apos;s Terms](https://soylentnews.org/article.pl?sid=25/04/15/1018214&amp;from=rss)
* [2025-04-16, 05:38:00](https://soylentnews.org/article.pl?sid=25/04/15/0119244&amp;from=rss) - [Copilot Recall: Microsoft Rolls Out AI Screenshot Tool](https://soylentnews.org/article.pl?sid=25/04/15/0119244&amp;from=rss)
* [2025-04-16, 02:16:51](https://news.ycombinator.com/item?id=43700714) - [The physics of bowling strike after strike](https://arstechnica.com/science/2025/04/the-physics-of-bowling-strike-after-strike/)
* [2025-04-16, 00:49:00](https://soylentnews.org/article.pl?sid=25/04/15/0115256&amp;from=rss) - [Cooling Chips With Lasers: Innovative Cooling Method Removes Heat Precisely From Hot Spots](https://soylentnews.org/article.pl?sid=25/04/15/0115256&amp;from=rss)
* [2025-04-15, 23:17:13](https://news.ycombinator.com/item?id=43699564) - [Four Years of Jai (2024)](https://smarimccarthy.is/posts/2024-12-02-four-years-of-jai/)
* [2025-04-15, 23:01:04](https://news.ycombinator.com/item?id=43699431) - [Multipaint: Draw pictures with color limitations of 8-bit and 16-bit platforms](http://multipaint.kameli.net/)
* [2025-04-15, 21:19:33](https://news.ycombinator.com/item?id=43698522) - [How a yacht works: sailboat physics and design](https://www.onemetre.net/Design/Design.htm)
* [2025-04-15, 20:04:00](https://soylentnews.org/article.pl?sid=25/04/14/0628227&amp;from=rss) - [Microsoft is Digging its Own Grave With Windows 11, and It Has to Stop](https://soylentnews.org/article.pl?sid=25/04/14/0628227&amp;from=rss)
* [2025-04-15, 19:36:48](https://news.ycombinator.com/item?id=43697445) - [Show HN: Somehash – A Blurhash-inspired exploration](https://travisbumgarner.dev/blog/somehash)
* [2025-04-15, 19:19:31](https://news.ycombinator.com/item?id=43697252) - [Ocean Tides and the Earth&apos;s Rotation (2001)](https://core2.gsfc.nasa.gov/ggfc/tides/intro.html)
* [2025-04-15, 16:23:40](https://news.ycombinator.com/item?id=43695093) - [Decreased CO2 during breathwork: emergence of altered states of consciousness](https://www.nature.com/articles/s44271-025-00247-0)
* [2025-04-15, 15:18:00](https://soylentnews.org/article.pl?sid=25/04/14/0619222&amp;from=rss) - [NIST Finalizes Guidelines for Evaluating ‘Differential Privacy’ Guarantees to De-Identify Data](https://soylentnews.org/article.pl?sid=25/04/14/0619222&amp;from=rss)
* [2025-04-15, 10:33:00](https://soylentnews.org/article.pl?sid=25/04/14/0616220&amp;from=rss) - [ChatGPT Now Lets Users Create Fake Images of Politicians--Tool Suggested Own Workarounds](https://soylentnews.org/article.pl?sid=25/04/14/0616220&amp;from=rss)
* [2025-04-15, 05:52:00](https://soylentnews.org/article.pl?sid=25/04/14/0612230&amp;from=rss) - [Ethically Sourced “Spare” Human Bodies Could Revolutionize Medicine](https://soylentnews.org/article.pl?sid=25/04/14/0612230&amp;from=rss)
* [2025-04-15, 01:12:00](https://soylentnews.org/article.pl?sid=25/04/14/067223&amp;from=rss) - [Google’s New Ironwood Chip is 24x More Powerful Than the World’s Fastest Supercomputer](https://soylentnews.org/article.pl?sid=25/04/14/067223&amp;from=rss)
* [2025-04-15, 00:58:43](https://news.ycombinator.com/item?id=43687966) - [The Subjective Charms of Objective-C](https://www.wired.com/story/objective-c-programming-language-verbose/)
* [2025-04-14, 20:23:00](https://soylentnews.org/article.pl?sid=25/04/14/0550254&amp;from=rss) - [Aztecs Versus Mayans - Unwrapping History Clue by Clue](https://soylentnews.org/article.pl?sid=25/04/14/0550254&amp;from=rss)
* [2025-04-14, 17:32:49](https://news.ycombinator.com/item?id=43683870) - [1,700 year old egg never broke](https://www.atlasobscura.com/articles/liquid-inside-ancient-egg)
* [2025-04-14, 16:34:08](https://news.ycombinator.com/item?id=43683130) - [Growing a Language [pdf] (1998)](https://langev.com/pdf/steele99growing.pdf)
* [2025-04-14, 16:21:29](https://news.ycombinator.com/item?id=43682984) - [Is it possible to write plain C iOS app in 2025?](https://news.ycombinator.com/item?id=43682984)
* [2025-04-14, 15:39:00](https://soylentnews.org/article.pl?sid=25/04/14/0540259&amp;from=rss) - [A Tricky Commodore PET Repair: Tracking Down 6 1/2 Bad Chips](https://soylentnews.org/article.pl?sid=25/04/14/0540259&amp;from=rss)
* [2025-04-14, 10:52:00](https://soylentnews.org/article.pl?sid=25/04/13/0349258&amp;from=rss) - [More Microsoft Job Cuts Could Hit Non-Coding Staff And Middle Managers](https://soylentnews.org/article.pl?sid=25/04/13/0349258&amp;from=rss)
* [2025-04-14, 06:10:00](https://soylentnews.org/article.pl?sid=25/04/13/0339214&amp;from=rss) - [Galaxies in the Deep Universe Rotate in the Same Direction](https://soylentnews.org/article.pl?sid=25/04/13/0339214&amp;from=rss)
* [2025-04-14, 01:20:00](https://soylentnews.org/article.pl?sid=25/04/13/0327231&amp;from=rss) - [Ukraine&apos;s Autonomous Killer Drones Defeat Electronic Warfare](https://soylentnews.org/article.pl?sid=25/04/13/0327231&amp;from=rss)
