# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Keeping the Web Open and Private in the Bot Era](https://blog.mozilla.org/en/privacy-security/keeping-the-web-open-and-private-in-the-bot-era/) ([comments](https://lobste.rs/s/sdqqbb/keeping_web_open_private_bot_era))

* [Show HN: Treedocs: Documentation that automatically checks for staleness](https://dandylyons.github.io/treedocs/) ([comments](https://news.ycombinator.com/item?id=48646209))

* [Show HN: TikZ Editor – WYSIWYG editor for figures in LaTeX](https://tikz.dev/editor/) ([comments](https://news.ycombinator.com/item?id=48645437))

* [Show HN: Bun-sqlgen – Type-safe raw SQL for Bun, no ORM](https://github.com/ilbertt/bun-sqlgen) ([comments](https://news.ycombinator.com/item?id=48645390))

* [The Low-Tech AI of Elden Ring](https://nega.tv/posts/low-tech-ai-of-elden-ring.html) ([comments](https://news.ycombinator.com/item?id=48643489))

* [NASA's Nancy Grace Roman Space Telescope Arrives in Florida](https://science.slashdot.org/story/26/06/23/015233/nasas-nancy-grace-roman-space-telescope-arrives-in-florida?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://science.slashdot.org/story/26/06/23/015233/nasas-nancy-grace-roman-space-telescope-arrives-in-florida?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Blobby](https://blobly.medv.io/) ([comments](https://lobste.rs/s/czrkxh/blobly))

## Artificial Intelligence

* [Oracle Cuts 21,000 Jobs As It Embraces AI](https://developers.slashdot.org/story/26/06/23/0548201/oracle-cuts-21000-jobs-as-it-embraces-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://developers.slashdot.org/story/26/06/23/0548201/oracle-cuts-21000-jobs-as-it-embraces-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [AI's Affordability Crisis](https://blog.dshr.org/2026/06/ais-affordability-crisis.html) ([comments](https://news.ycombinator.com/item?id=48646276))

* [Leaked Financial Docs Show OpenAI Is Losing Billions Of Dollars A Year](https://soylentnews.org/article.pl?sid=26/06/22/038218&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/06/22/038218&amp;from=rss))

* [MSG Made Dossier on Activists Who Opposed Facial Recognition](https://www.404media.co/madison-square-garden-made-dossier-on-activists-who-opposed-facial-recognition/) ([comments](https://news.ycombinator.com/item?id=48644781))

* [VibeThinker: 3B param model that beats Opus 4.5 on reasoning with novel SFT+GRPO](https://arxiv.org/abs/2606.16140) ([comments](https://news.ycombinator.com/item?id=48639240))

* [OpenAI DayBreak – GPT-5.5-Cyber](https://openai.com/index/daybreak-securing-the-world/) ([comments](https://news.ycombinator.com/item?id=48639063))

## Science and Space

* [NASA's Nancy Grace Roman Space Telescope Arrives in Florida](https://science.slashdot.org/story/26/06/23/015233/nasas-nancy-grace-roman-space-telescope-arrives-in-florida?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://science.slashdot.org/story/26/06/23/015233/nasas-nancy-grace-roman-space-telescope-arrives-in-florida?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [NASA Said Nyet to Roscosmos Plan to Cut Into Leaky ISS Segment](https://soylentnews.org/article.pl?sid=26/06/19/1232209&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/06/19/1232209&amp;from=rss))

## Privatization and Data Security

* [Keeping the Web Open and Private in the Bot Era](https://blog.mozilla.org/en/privacy-security/keeping-the-web-open-and-private-in-the-bot-era/) ([comments](https://lobster.trs/sdqqbb/a-keeporary-for_regards_article_generateReduced/)).

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

* [2026-06-23, 16:06:03](https://lobste.rs/s/sdqqbb/keeping_web_open_private_bot_era) - [Keeping the Web Open and Private in the Bot Era](https://blog.mozilla.org/en/privacy-security/keeping-the-web-open-and-private-in-the-bot-era/)
* [2026-06-23, 16:00:00](https://developers.slashdot.org/story/26/06/23/0548201/oracle-cuts-21000-jobs-as-it-embraces-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Oracle Cuts 21,000 Jobs As It Embraces AI](https://developers.slashdot.org/story/26/06/23/0548201/oracle-cuts-21000-jobs-as-it-embraces-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-23, 15:11:17](https://news.ycombinator.com/item?id=48646276) - [AI&apos;s Affordability Crisis](https://blog.dshr.org/2026/06/ais-affordability-crisis.html)
* [2026-06-23, 15:07:30](https://news.ycombinator.com/item?id=48646209) - [Show HN: Treedocs: Documentation that automatically checks for staleness](https://dandylyons.github.io/treedocs/)
* [2026-06-23, 15:00:00](https://tech.slashdot.org/story/26/06/23/0539208/uk-considers-forcing-social-media-firms-to-prioritize-trusted-news?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Considers Forcing Social Media Firms To Prioritize Trusted News](https://tech.slashdot.org/story/26/06/23/0539208/uk-considers-forcing-social-media-firms-to-prioritize-trusted-news?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-23, 14:48:44](https://lobste.rs/s/eobxls/ytr_youtube_radio_for_emacs) - [ytr: YouTube radio for Emacs](https://xenodium.com/ytr-youtube-radio-for-emacs)
* [2026-06-23, 14:40:17](https://news.ycombinator.com/item?id=48645721) - [Lift4D: Harmonizing Single-View 3D Estimation for 4D Reconstruction In-the-Wild](https://lift4d.github.io/)
* [2026-06-23, 14:36:54](https://lobste.rs/s/cjnnk3/how_stray_j_ruined_my_evening) - [how a stray \&quot;j\&quot; ruined my evening](https://napkins.mtmn.name/posts/stray-jay.html)
* [2026-06-23, 14:24:21](https://news.ycombinator.com/item?id=48645437) - [Show HN: TikZ Editor – WYSIWYG editor for figures in LaTeX](https://tikz.dev/editor/)
* [2026-06-23, 14:20:24](https://news.ycombinator.com/item?id=48645390) - [Show HN: Bun-sqlgen – Type-safe raw SQL for Bun, no ORM](https://github.com/ilbertt/bun-sqlgen)
* [2026-06-23, 14:19:47](https://news.ycombinator.com/item?id=48645386) - [Elevated error rate across multiple models](https://status.claude.com/incidents/jbhf20wjmzrf)
* [2026-06-23, 14:04:43](https://news.ycombinator.com/item?id=48645173) - [Spying on kids to save kids from spying is stupid](https://pluralistic.net/2026/06/23/destroy-the-village/)
* [2026-06-23, 14:03:19](https://news.ycombinator.com/item?id=48645152) - [Mistral OCR 4](https://mistral.ai/news/ocr-4/)
* [2026-06-23, 13:47:31](https://lobste.rs/s/bcjwwn/vulnerability_reports_are_not_special) - [Vulnerability Reports Are Not Special Anymore](https://words.filippo.io/vuln-reports/)
* [2026-06-23, 13:36:10](https://news.ycombinator.com/item?id=48644781) - [MSG Made Dossier on Activists Who Opposed Facial Recognition](https://www.404media.co/madison-square-garden-made-dossier-on-activists-who-opposed-facial-recognition/)
* [2026-06-23, 12:56:16](https://news.ycombinator.com/item?id=48644257) - [Lossless GIF recompression via exhaustive search](https://blog.arusekk.pl/posts/lossless-gif-recompression/)
* [2026-06-23, 12:46:26](https://lobste.rs/s/ufml52/record_type_inference_for_dummies) - [Record type inference for dummies](https://haskellforall.com/2026/06/record-type-inference-for-dummies)
* [2026-06-23, 12:37:04](https://news.ycombinator.com/item?id=48644022) - [80386 Early Start Memory Access](https://nand2mario.github.io/posts/2026/80386_early_start/)
* [2026-06-23, 12:00:13](https://lobste.rs/s/leh6g3/fexprs_vs_vtable_how_lispe_interpreter) - [FEXPRs vs. vtable: how LispE interpreter works](https://github.com/naver/lispe/wiki/2.7-FEXPR-vs.-vtable)
* [2026-06-23, 11:54:00](https://soylentnews.org/article.pl?sid=26/06/22/038218&amp;from=rss) - [Leaked Financial Docs Show OpenAI Is Losing Billions Of Dollars A Year](https://soylentnews.org/article.pl?sid=26/06/22/038218&amp;from=rss)
* [2026-06-23, 11:40:50](https://news.ycombinator.com/item?id=48643489) - [The Low-Tech AI of Elden Ring](https://nega.tv/posts/low-tech-ai-of-elden-ring.html)
* [2026-06-23, 11:35:05](https://news.ycombinator.com/item?id=48643426) - [Unlimited OCR: One-Shot Long-Horizon Parsing](https://github.com/baidu/Unlimited-OCR)
* [2026-06-23, 11:00:00](https://hardware.slashdot.org/story/26/06/23/0528230/canada-plans-nuclear-renaissance-with-up-to-10-reactors-built-by-2040?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Canada Plans &apos;Nuclear Renaissance&apos; With Up To 10 Reactors Built By 2040](https://hardware.slashdot.org/story/26/06/23/0528230/canada-plans-nuclear-renaissance-with-up-to-10-reactors-built-by-2040?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-23, 10:29:40](https://lobste.rs/s/y4hgjd/please_keep_code_descriptions_simple) - [Please keep code descriptions simple](https://akselmo.dev/posts/please-keep-code-descriptions-simple/)
* [2026-06-23, 10:04:04](https://news.ycombinator.com/item?id=48642699) - [Crypto in 2026: Oh, This Is the Bad Place](https://www.stephendiehl.com/posts/bad_place_2026/)
* [2026-06-23, 10:02:54](https://news.ycombinator.com/item?id=48642686) - [Show HN: Shumai – open-source Frame.io alternative for creative work](https://github.com/shumaiOne/shumai)
* [2026-06-23, 09:00:48](https://news.ycombinator.com/item?id=48642232) - [The Traditional Vi](https://ex-vi.sourceforge.net/)
* [2026-06-23, 08:58:55](https://lobste.rs/s/f2ixyf/it_s_only_when_you_look_back) - [It’s Only When You Look Back](https://www.markround.com/blog/2026/06/17/25-its-only-when-you-look-back/)
* [2026-06-23, 08:31:48](https://news.ycombinator.com/item?id=48642030) - [Show HN: Neural Particle Automata](https://selforg-npa.github.io/)
* [2026-06-23, 07:03:00](https://soylentnews.org/article.pl?sid=26/06/22/034203&amp;from=rss) - [Think That Conversation Will be Boring? Science Says Think Again](https://soylentnews.org/article.pl?sid=26/06/22/034203&amp;from=rss)
* [2026-06-23, 07:00:00](https://science.slashdot.org/story/26/06/23/015233/nasas-nancy-grace-roman-space-telescope-arrives-in-florida?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA&apos;s Nancy Grace Roman Space Telescope Arrives In Florida](https://science.slashdot.org/story/26/06/23/015233/nasas-nancy-grace-roman-space-telescope-arrives-in-florida?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-23, 05:33:44](https://lobste.rs/s/mvjcxs/matt_s_script_archive_scripts_reshaped) - [Matt’s Script Archive: The Scripts That Reshaped The Web](https://tedium.co/2026/06/22/matts-script-archive-retrospective/)
* [2026-06-23, 05:25:04](https://lobste.rs/s/fzz7pf/low_tech_ai_elden_ring) - [The Low-Tech AI Of Elden Ring](https://nega.tv/posts/low-tech-ai-of-elden-ring.html)
* [2026-06-23, 05:01:01](https://lobste.rs/s/czrkxh/blobly) - [Blobly](https://blobly.medv.io/)
* [2026-06-23, 04:15:04](https://news.ycombinator.com/item?id=48640196) - [Will It Mythos?](https://swelljoe.com/post/will-it-mythos/)
* [2026-06-23, 03:30:00](https://hardware.slashdot.org/story/26/06/23/0059203/gm-installs-robots-at-flagship-ev-factory-after-laying-off-1300-workers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GM Installs Robots At Flagship EV Factory After Laying Off 1,300 Workers](https://hardware.slashdot.org/story/26/06/23/0059203/gm-installs-robots-at-flagship-ev-factory-after-laying-off-1300-workers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-23, 02:22:00](https://soylentnews.org/article.pl?sid=26/06/22/029235&amp;from=rss) - [Ozempic Literally Came From a Monster – And It&apos;s Not Alone](https://soylentnews.org/article.pl?sid=26/06/22/029235&amp;from=rss)
* [2026-06-23, 02:03:34](https://lobste.rs/s/umm2jh/tale_two_path_separators_2021) - [A tale of two path separators (2021)](https://alexwlchan.net/2021/slashes/)
* [2026-06-23, 02:01:25](https://news.ycombinator.com/item?id=48639240) - [VibeThinker: 3B param model that beats Opus 4.5 on reasoning with novel SFT+GRPO](https://arxiv.org/abs/2606.16140)
* [2026-06-23, 01:36:08](https://news.ycombinator.com/item?id=48639063) - [OpenAI DayBreak – GPT-5.5-Cyber](https://openai.com/index/daybreak-securing-the-world/)
* [2026-06-23, 01:15:05](https://news.ycombinator.com/item?id=48638886) - [In praise of memcached](https://jchri.st/blog/in-praise-of-memcached/)
* [2026-06-22, 23:00:00](https://it.slashdot.org/story/26/06/22/2048235/microsoft-accidentally-breaks-replying-to-an-email-on-outlook?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Accidentally Breaks Replying To an Email On Outlook](https://it.slashdot.org/story/26/06/22/2048235/microsoft-accidentally-breaks-replying-to-an-email-on-outlook?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-22, 22:31:20](https://lobste.rs/s/nepr0y/systemd_bsod_service) - [systemd-bsod.service](https://www.freedesktop.org/software/systemd/man/257/systemd-bsod.service.html)
* [2026-06-22, 22:00:00](https://it.slashdot.org/story/26/06/22/2039221/following-user-outcry-amd-reinstates-memory-encryption-in-consumer-cpus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Following User Outcry, AMD Reinstates Memory Encryption In Consumer CPUs](https://it.slashdot.org/story/26/06/22/2039221/following-user-outcry-amd-reinstates-memory-encryption-in-consumer-cpus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-22, 21:37:00](https://soylentnews.org/article.pl?sid=26/06/21/2032230&amp;from=rss) - [Non-x86 Servers Now Nearly Half the Market](https://soylentnews.org/article.pl?sid=26/06/21/2032230&amp;from=rss)
* [2026-06-22, 21:21:01](https://news.ycombinator.com/item?id=48636377) - [GLM-5.2 – How to Run Locally](https://unsloth.ai/docs/models/glm-5.2)
* [2026-06-22, 21:02:54](https://lobste.rs/s/zszeab/curious_history_invention_cmd_k_quick) - [The curious history the invention of the CMD+K quick switcher](https://ux.stackexchange.com/questions/153299/how-did-cmd-k-come-to-be-the-standard-shortcut-for-both-adding-a-hyperlink-and-o)
* [2026-06-22, 21:00:00](https://games.slashdot.org/story/26/06/22/1922207/valve-will-finally-let-you-build-your-own-steam-machine-with-steamos-for-desktop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Valve Will Finally Let You Build Your Own Steam Machine With SteamOS For Desktop](https://games.slashdot.org/story/26/06/22/1922207/valve-will-finally-let-you-build-your-own-steam-machine-with-steamos-for-desktop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-22, 20:23:42](https://lobste.rs/s/wnlece/memory_man_who_put_red_green_squiggles) - [In memory of the man who put red and green squiggles under words](https://devblogs.microsoft.com/oldnewthing/20260622-00/?p=112451)
* [2026-06-22, 20:00:00](https://entertainment.slashdot.org/story/26/06/22/196207/google-invests-75-million-in-a24-to-develop-ai-powered-filmmaking-tools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Invests $75 Million In A24 To Develop AI-Powered Filmmaking Tools](https://entertainment.slashdot.org/story/26/06/22/196207/google-invests-75-million-in-a24-to-develop-ai-powered-filmmaking-tools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-22, 19:00:00](https://tech.slashdot.org/story/26/06/22/1749209/some-electricians-think-building-data-centers-is-for-sellouts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Some Electricians Think Building Data Centers Is For Sellouts](https://tech.slashdot.org/story/26/06/22/1749209/some-electricians-think-building-data-centers-is-for-sellouts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-22, 18:39:22](https://news.ycombinator.com/item?id=48634187) - [Five monitors on a Commodore 128 [video]](https://www.youtube.com/watch?v=ul5hC3PY1Yg)
* [2026-06-22, 18:00:00](https://games.slashdot.org/story/26/06/22/1716254/valve-prices-the-steam-machine-at-1049?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Valve Prices the Steam Machine At $1,049](https://games.slashdot.org/story/26/06/22/1716254/valve-prices-the-steam-machine-at-1049?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-22, 17:54:04](https://lobste.rs/s/bkwkz5/rhombus_v1_0_racket_flavored_language) - [Rhombus v1.0: A Racket flavored language with syntax](https://blog.racket-lang.org/2026/06/rhombus-v1.0.html)
* [2026-06-22, 17:19:50](https://lobste.rs/s/lz3dbc/pledging_another_400_000_zig_software) - [Pledging Another $400,000 to the Zig Software Foundation](https://mitchellh.com/writing/zig-donation-2026)
* [2026-06-22, 17:09:51](https://news.ycombinator.com/item?id=48632884) - [Steam Machine launches today](https://store.steampowered.com/news/group/45479024/view/685257114654870245)
* [2026-06-22, 17:00:00](https://yro.slashdot.org/story/26/06/22/1657204/ai-law-firm-wins-uk-court-case-for-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Law Firm Wins UK Court Case For First Time](https://yro.slashdot.org/story/26/06/22/1657204/ai-law-firm-wins-uk-court-case-for-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-22, 16:54:00](https://soylentnews.org/article.pl?sid=26/06/21/2026240&amp;from=rss) - [A Bold Satellite Rescue Mission Came Together in Record Time, but Will It Work?](https://soylentnews.org/article.pl?sid=26/06/21/2026240&amp;from=rss)
* [2026-06-22, 16:06:49](https://lobste.rs/s/ut8idd/xfwl4_s_first_preview_release) - [Xfwl4&apos;s First Preview Release](https://www.spurint.org/journal/2026/06/xfwl4s-first-preview-release)
* [2026-06-22, 16:00:00](https://hardware.slashdot.org/story/26/06/22/0348249/2000-retired-google-pixel-phones-get-a-second-life-as-a-private-cloud?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [2,000 Retired Google Pixel Phones Get a Second Life As a Private Cloud](https://hardware.slashdot.org/story/26/06/22/0348249/2000-retired-google-pixel-phones-get-a-second-life-as-a-private-cloud?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-22, 15:00:00](https://games.slashdot.org/story/26/06/22/0337213/ubisoft-co-founder-claude-guillemot-dies-in-plane-crash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ubisoft Co-Founder Claude Guillemot Dies In Plane Crash](https://games.slashdot.org/story/26/06/22/0337213/ubisoft-co-founder-claude-guillemot-dies-in-plane-crash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-22, 14:02:16](https://lobste.rs/s/pifl3k/one_year_with_codeberg) - [One year with Codeberg](https://guix.gnu.org/en/blog/2026/one-year-with-codeberg/)
* [2026-06-22, 13:27:03](https://lobste.rs/s/rq2t8j/why_drawing_tablet_brands_won_t) - [Why Drawing Tablet Brands Won&apos;t Collaborate on Linux FLOSS Drivers](https://www.davidrevoy.com/article1154/why-drawing-tablet-brands-wont-collaborate-on-linux-floss-drivers)
* [2026-06-22, 12:13:00](https://soylentnews.org/article.pl?sid=26/06/21/2015236&amp;from=rss) - [16-Year-Old SATA II SSD Survives 1 Petabyte of Writes](https://soylentnews.org/article.pl?sid=26/06/21/2015236&amp;from=rss)
* [2026-06-22, 11:54:07](https://lobste.rs/s/pa1atu/nix_needs_relocatable_binaries) - [Nix needs relocatable binaries](https://fzakaria.com/2026/06/21/nix-needs-relocatable-binaries)
* [2026-06-22, 11:34:00](https://news.slashdot.org/story/26/06/21/2340231/several-us-states-bet-that-ai-can-solve-their-prison-recidivism-crisis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Several US States Bet That AI Can Solve Their Prison Recidivism Crisis](https://news.slashdot.org/story/26/06/21/2340231/several-us-states-bet-that-ai-can-solve-their-prison-recidivism-crisis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-22, 11:31:29](https://lobste.rs/s/xhpauz/p99_0ms_autocomplete_for_240_million) - [p99 0ms* autocomplete for 240 million domain names](https://ruurtjan.com/articles/p99-0ms-autocomplete-for-240-million-domain-names)
* [2026-06-22, 09:51:10](https://lobste.rs/s/2nljgf/how_computer_should_work) - [How a Computer Should Work](https://pkgdemon.github.io/how-a-computer-should-work.html)
* [2026-06-22, 09:02:51](https://lobste.rs/s/dh6o8k/chesterton_s_middle_finger) - [Chesterton&apos;s middle finger](https://www.arp242.net/chestersons-finger.html)
* [2026-06-22, 07:30:00](https://soylentnews.org/article.pl?sid=26/06/21/205254&amp;from=rss) - [Python Dev Saved From Disaster by Intuition...and AI](https://soylentnews.org/article.pl?sid=26/06/21/205254&amp;from=rss)
* [2026-06-22, 06:07:05](https://lobste.rs/s/uuyjxb/help_i_accidentally_wigglegram) - [help i accidentally a wigglegram](https://lmao.center/blog/wiggle-accidents/)
* [2026-06-22, 02:47:00](https://soylentnews.org/article.pl?sid=26/06/20/0542204&amp;from=rss) - [‘Popa’ Botnet Linked to Publicly-Traded Israeli Firm](https://soylentnews.org/article.pl?sid=26/06/20/0542204&amp;from=rss)
* [2026-06-21, 22:02:00](https://soylentnews.org/article.pl?sid=26/06/20/0543245&amp;from=rss) - [Chinese Fab SMIC&apos;s 7nm Metal Pitch Beats Intel 18A but Lags 38% on Density, Teardown Finds](https://soylentnews.org/article.pl?sid=26/06/20/0543245&amp;from=rss)
* [2026-06-21, 17:17:00](https://soylentnews.org/article.pl?sid=26/06/20/0538252&amp;from=rss) - [Bruce Scheier&apos;s Thoughts on Banning AI Models](https://soylentnews.org/article.pl?sid=26/06/20/0538252&amp;from=rss)
* [2026-06-21, 14:07:11](https://news.ycombinator.com/item?id=48619125) - [8086 Segmented Memory was a good idea](https://owl.billpg.com/8086-segmented-memory-was-a-good-idea-almost/)
* [2026-06-21, 12:29:00](https://soylentnews.org/article.pl?sid=26/06/20/0534212&amp;from=rss) - [NHS Palantir Claims Face Scrutiny After Data Suggests Uneven Results](https://soylentnews.org/article.pl?sid=26/06/20/0534212&amp;from=rss)
* [2026-06-21, 07:42:00](https://soylentnews.org/article.pl?sid=26/06/20/0145259&amp;from=rss) - [Cyberattack Sees Crops Kept In The Ground](https://soylentnews.org/article.pl?sid=26/06/20/0145259&amp;from=rss)
* [2026-06-21, 02:56:00](https://soylentnews.org/article.pl?sid=26/06/20/0140256&amp;from=rss) - [Red Hat Gives Ubuntu A Bootc Up The Backside At Canonical Shindig](https://soylentnews.org/article.pl?sid=26/06/20/0140256&amp;from=rss)
* [2026-06-20, 23:33:19](https://news.ycombinator.com/item?id=48614097) - [Giant Banana Pulled Over: Driver Says Cops Have Stopped Him 100s of Times](https://cowboystatedaily.com/2026/06/18/giant-banana-pulled-over-in-montana-driver-says-cops-have-stopped-him-100s-of-times/)
* [2026-06-20, 22:38:46](https://news.ycombinator.com/item?id=48613650) - [Researchers used math to crack Wordle](https://www.binghamton.edu/news/story/6327/s-m-a-r-t-these-researchers-used-math-to-crack-wordle)
* [2026-06-20, 22:14:00](https://soylentnews.org/article.pl?sid=26/06/20/0135207&amp;from=rss) - [Where to Find the Colors Your Screen Can’t Show You](https://soylentnews.org/article.pl?sid=26/06/20/0135207&amp;from=rss)
* [2026-06-20, 17:30:00](https://soylentnews.org/article.pl?sid=26/06/19/1232209&amp;from=rss) - [NASA Said Nyet to Roscosmos Plan to Cut Into Leaky ISS Segment](https://soylentnews.org/article.pl?sid=26/06/19/1232209&amp;from=rss)
* [2026-06-20, 12:45:00](https://soylentnews.org/article.pl?sid=26/06/19/1228210&amp;from=rss) - [Critical Copilot Vulnerability Allowed Hackers to Steal 2FA Code From Users](https://soylentnews.org/article.pl?sid=26/06/19/1228210&amp;from=rss)
* [2026-06-20, 10:32:35](https://news.ycombinator.com/item?id=48608114) - [Open Source for IBM Z and LinuxONE](https://community.ibm.com/community/user/blogs/elizabeth-k-joseph1/2026/06/18/linuxone-open-source-report-may-2026)
* [2026-06-20, 07:57:00](https://soylentnews.org/article.pl?sid=26/06/19/1219225&amp;from=rss) - [The Challenges of Typesetting Arabic Script](https://soylentnews.org/article.pl?sid=26/06/19/1219225&amp;from=rss)
* [2026-06-20, 02:14:00](https://soylentnews.org/article.pl?sid=26/06/19/1216220&amp;from=rss) - [NASA Management Wants a Word and Won&apos;t Say Why](https://soylentnews.org/article.pl?sid=26/06/19/1216220&amp;from=rss)
* [2026-06-19, 21:31:00](https://soylentnews.org/article.pl?sid=26/06/19/1212211&amp;from=rss) - [The FBI Built its Own Replica Small Town to Simulate Real-World Cyberattacks](https://soylentnews.org/article.pl?sid=26/06/19/1212211&amp;from=rss)
* [2026-06-19, 16:46:00](https://soylentnews.org/article.pl?sid=26/06/19/1210211&amp;from=rss) - [Cockroaches Scurry Around With Thousands of Pieces of Bacterial Genomes](https://soylentnews.org/article.pl?sid=26/06/19/1210211&amp;from=rss)
* [2026-06-19, 12:00:00](https://soylentnews.org/article.pl?sid=26/06/19/120238&amp;from=rss) - [A Chinese Rocket Breaks Apart Dangerously Close to the Starlink Constellation](https://soylentnews.org/article.pl?sid=26/06/19/120238&amp;from=rss)
* [2026-06-19, 11:06:04](https://news.ycombinator.com/item?id=48597221) - [My Mathematical Regression](https://blog.dahl.dev/posts/my-mathematical-regression/)
* [2026-06-19, 09:08:00](https://news.ycombinator.com/item?id=48596488) - [Plotnine](https://plotnine.org/)
