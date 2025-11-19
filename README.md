# [News Summary](https://kherrick.github.io/news-summary/)

## Energy Innovations and Climate Efforts

* [Geothermal's Time Has Come](https://www.economist.com/interactive/science-and-technology/2025/11/18/geothermal-time-has-finally-come) - The Economist explores the rise of geothermal energy as a promising and sustainable source of power [comments](https://news.ycombinator.com/item?id=45978880).

* [Australians to Get Three Hours of Free Electricity Every Day Under Solar Scheme](https://soylentnews.org/article.pl?sid=25/11/15/0349259&amp;from=rss) - As part of Australia’s push for solar energy adoption, this program offers free electricity daily [comments](https://soylentnews.org/article.pl?sid=25/11/15/0349259&amp;from=rss).

## Tech Industry and AI Developments

* [Mozilla Unveils Plans for New 'AI Window' Browsing Mode in Firefox, Opens Signups](https://soylentnews.org/article.pl?sid=25/11/18/018202&amp;from=rss) - Mozilla introduces AI-based features to optimize browsing experiences [comments](https://soylentnews.org/article.pl?sid=25/11/18/018202&amp;from=rss).

* [Google boss says AI investment boom has 'elements of irrationality'](https://www.bbc.com/news/articles/cwy7vrd8k4eo) - The AI boom is questioned for its speculative overreach by Google's leadership [comments](https://news.ycombinator.com/item?id=45961886).

* [Microsoft: The Company Doesn’t Have Enough Electricity to Install All the AI GPUs in its Inventory](https://soylentnews.org/article.pl?sid=25/11/16/1329214&amp;from=rss) - Energy limitations hinder Microsoft's AI development roadmap [comments](https://soylentnews.org/article.pl?sid=25/11/16/1329214&amp;from=rss).

* [Google Antigravity](https://antigravity.google/) - A novel announcement from Google suggests cutting-edge AI might redefine basic laws but with intriguing speculation [comments](https://news.ycombinator.com/item?id=45967814).

* [Oracle is Already Underwater On Its 'Astonishing' $300B OpenAI Deal](https://developers.slashdot.org/story/25/11/18/1919245/oracle-is-already-underwater-on-its-astonishing-300b-openai-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - This investment raises concerns over viability and strategic planning [comments](https://developers.slashdot.org/story/25/11/18/1919245/oracle-is-already-underwater-on-its-astonishing-300b-openai-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

## Social and Ethical Observations

* [Man Who Cryogenically Froze Late Wife Sparks Debate By Dating New Partner](https://science.slashdot.org/story/25/11/19/0257258/man-who-cryogenically-froze-late-wife-sparks-debate-by-dating-new-partner?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Ethical concerns arise in cryonics when dealing with life and legacy [comments](https://science.slashdot.org/story/25/11/19/0257258/man-who-cryogenically-froze-late-wife-sparks-debate-by-dating-new-partner?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

* [Rebecca Heineman - from homelessness to porting Doom](https://corecursive.com/doomed-to-fail-with-burger-becky/) - A journey showing resilience in tech as historical personal struggles meet success [comments](https://lobste.rs/s/wtnzei/rebecca_heineman_from_homelessness).

## Retro and Niche Computing

* [Pimped Amiga 500](https://www.pimyretro.org/pimped-amiga-500/) - The legendary device receives modernized surgical design enhancement [comments](https://news.ycombinator.com/item?id=45978545).

* [Experiment: making TypeScript immutable-by-default](https://evanhahn.com/typescript-immutability-experiment/) - Revelatory exploratory mod shifting how underlying types maintain integrity [comments](https://lobste.rs/s/hhuu5z/experiment_making_typescript_immutable).

## Privacy and Governance Challenges

* [Cloudflare outage on November 18, 2025](https://blog.cloudflare.com/18-november-2025-outage/) - Resource setbacks delayed project recovery timelines amid wider community reliance on hosting [comments](https://lobste.rs/s/nac5wa/cloudflare_outage_on_november_18_2025).

* [ACLU and EFF Sue a City Blanketed With Flock Surveillance Cameras](https://yro.slashdot.org/story/25/11/18/2038256/aclu-and-eff-sue-a-city-blanketed-with-flock-surveillance-cameras?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Legal arguments persist over abuse/unintended law enforcement spill-issues affected residents [comments](https://yro.slashdot.org/story/25/11/18/2038256/aclu-and-eff-sue-a-city-blanketed-with-flock-surveillance-cameras?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

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

* [2025-11-19, 12:38:44](https://news.ycombinator.com/item?id=45978880) - [Geothermal&apos;s Time Has Come](https://www.economist.com/interactive/science-and-technology/2025/11/18/geothermal-time-has-finally-come)
* [2025-11-19, 12:31:54](https://news.ycombinator.com/item?id=45978813) - [How do the pros get someone to leave a cult?](https://www.theguardian.com/science/2025/nov/19/how-to-leave-a-cult-experts-intervention)
* [2025-11-19, 12:21:33](https://lobste.rs/s/6ufew7/hachi_image_search_engine) - [Hachi:  An Image search engine](https://eagledot.xyz/hachi.md.html)
* [2025-11-19, 12:17:50](https://lobste.rs/s/rifpe8/lost_cause_lisp_machines) - [The lost cause of the Lisp machines](https://www.tfeb.org/fragments/2025/11/18/the-lost-cause-of-the-lisp-machines/)
* [2025-11-19, 12:02:49](https://news.ycombinator.com/item?id=45978545) - [Pimped Amiga 500](https://www.pimyretro.org/pimped-amiga-500/)
* [2025-11-19, 12:02:15](https://news.ycombinator.com/item?id=45978541) - [The Cities Skylines Paradox: how the sequel stumbled](https://selix.net/notes/the-cities-skyline-paradox)
* [2025-11-19, 10:01:00](https://soylentnews.org/article.pl?sid=25/11/18/0113223&amp;from=rss) - [Canonical Extends Ubuntu Support to 15 Years](https://soylentnews.org/article.pl?sid=25/11/18/0113223&amp;from=rss)
* [2025-11-19, 09:27:17](https://news.ycombinator.com/item?id=45977542) - [Multimodal Diffusion Language Models for Thinking-Aware Editing and Generation](https://github.com/tyfeld/MMaDA-Parallel)
* [2025-11-19, 09:10:07](https://lobste.rs/s/gj8uup/static_web_hosting_on_intel_n150_freebsd) - [Static Web Hosting on the Intel N150: FreeBSD, SmartOS, NetBSD, OpenBSD and Linux Compared](https://it-notes.dragas.net/2025/11/19/static-web-hosting-intel-n150-freebsd-smartos-netbsd-openbsd-linux/)
* [2025-11-19, 09:02:16](https://lobste.rs/s/fmmbah/introducing_apache_fory_rust_versatile) - [Introducing Apache Fory™ Rust: A Versatile Serialization Framework for the Modern Age](https://fory.apache.org/blog/fory_rust_versatile_serialization_framework/)
* [2025-11-19, 08:19:24](https://lobste.rs/s/gfl26c/when_high_availability_brings_downtime) - [When high availability brings downtime](https://medium.com/learnings-from-the-paas/when-high-availability-brings-downtime-7a6261b0ef1c)
* [2025-11-19, 07:36:25](https://news.ycombinator.com/item?id=45976832) - [Exploring the Limits of Large Language Models as Quant Traders](https://nof1.ai/blog/TechPost1)
* [2025-11-19, 07:00:00](https://science.slashdot.org/story/25/11/19/0257258/man-who-cryogenically-froze-late-wife-sparks-debate-by-dating-new-partner?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Man Who Cryogenically Froze Late Wife Sparks Debate By Dating New Partner](https://science.slashdot.org/story/25/11/19/0257258/man-who-cryogenically-froze-late-wife-sparks-debate-by-dating-new-partner?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 05:16:00](https://soylentnews.org/article.pl?sid=25/11/18/018202&amp;from=rss) - [Mozilla Unveils Plans for New &apos;AI Window&apos; Browsing Mode in Firefox, Opens Signups](https://soylentnews.org/article.pl?sid=25/11/18/018202&amp;from=rss)
* [2025-11-19, 03:49:59](https://lobste.rs/s/wj0k0e/improving_nat_traversal_part_2) - [Improving NAT traversal, part 2: challenges in cloud environments](https://tailscale.com/blog/nat-traversal-improvements-pt-2-cloud-environments)
* [2025-11-19, 03:30:00](https://hardware.slashdot.org/story/25/11/19/0026252/us-backs-three-mile-island-nuclear-restart-with-1-billion-loan-to-constellation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Backs Three Mile Island Nuclear Restart With $1 Billion Loan To Constellation](https://hardware.slashdot.org/story/25/11/19/0026252/us-backs-three-mile-island-nuclear-restart-with-1-billion-loan-to-constellation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 02:54:20](https://lobste.rs/s/nac5wa/cloudflare_outage_on_november_18_2025) - [Cloudflare outage on November 18, 2025](https://blog.cloudflare.com/18-november-2025-outage/)
* [2025-11-19, 02:20:00](https://yro.slashdot.org/story/25/11/19/0018216/chinese-spies-are-trying-to-reach-uk-lawmakers-via-linkedin-mi5-warns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chinese Spies Are Trying To Reach UK Lawmakers Via LinkedIn, MI5 Warns](https://yro.slashdot.org/story/25/11/19/0018216/chinese-spies-are-trying-to-reach-uk-lawmakers-via-linkedin-mi5-warns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 01:40:00](https://tech.slashdot.org/story/25/11/19/000255/mexico-partially-lifts-longstanding-website-ban-on-tor-network?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mexico Partially Lifts Longstanding Website Ban On Tor Network](https://tech.slashdot.org/story/25/11/19/000255/mexico-partially-lifts-longstanding-website-ban-on-tor-network?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 01:18:02](https://news.ycombinator.com/item?id=45974681) - [Strace-macOS: A clone of the strace command for macOS](https://github.com/Mic92/strace-macos)
* [2025-11-19, 01:00:00](https://it.slashdot.org/story/25/11/18/2341220/gen-z-officially-worse-at-passwords-than-80-year-olds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Gen Z Officially Worse At Passwords Than 80-Year-Olds](https://it.slashdot.org/story/25/11/18/2341220/gen-z-officially-worse-at-passwords-than-80-year-olds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 00:31:00](https://soylentnews.org/article.pl?sid=25/11/18/014241&amp;from=rss) - [Raccoons Are Showing Early Signs of Domestication](https://soylentnews.org/article.pl?sid=25/11/18/014241&amp;from=rss)
* [2025-11-19, 00:20:00](https://slashdot.org/story/25/11/18/2242231/cloud-native-computing-is-poised-to-explode?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cloud-Native Computing Is Poised To Explode](https://slashdot.org/story/25/11/18/2242231/cloud-native-computing-is-poised-to-explode?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 00:05:28](https://news.ycombinator.com/item?id=45974012) - [I made a down detector for down detector](https://downdetectorsdowndetector.com)
* [2025-11-18, 23:40:00](https://linux.slashdot.org/story/25/11/18/2229244/red-hat-losing-another-prominent-linux-kernel-engineer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Red Hat Losing Another Prominent Linux Kernel Engineer](https://linux.slashdot.org/story/25/11/18/2229244/red-hat-losing-another-prominent-linux-kernel-engineer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-18, 23:31:22](https://news.ycombinator.com/item?id=45973709) - [Cloudflare outage on November 18, 2025 post mortem](https://blog.cloudflare.com/18-november-2025-outage/)
* [2025-11-18, 23:07:23](https://lobste.rs/s/yit3fo/actor_model_multi_core_scheduler_for) - [An actor-model multi-core scheduler for OCaml 5](https://github.com/riot-ml/riot)
* [2025-11-18, 23:00:00](https://tech.slashdot.org/story/25/11/18/2224225/blender-50-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Blender 5.0 Released](https://tech.slashdot.org/story/25/11/18/2224225/blender-50-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-18, 22:54:48](https://lobste.rs/s/hhuu5z/experiment_making_typescript_immutable) - [Experiment: making TypeScript immutable-by-default](https://evanhahn.com/typescript-immutability-experiment/)
* [2025-11-18, 22:41:52](https://lobste.rs/s/0r5kmb/month_chat_oriented_programming) - [A Month of Chat-Oriented Programming](https://checkeagle.com/checklists/njr/a-month-of-chat-oriented-programming/)
* [2025-11-18, 22:34:33](https://lobste.rs/s/pmsbte/self_hosting_dns_for_no_fun_little_profit) - [Self-hosting DNS for no fun, but a little profit](https://linderud.dev/blog/self-hosting-dns-for-no-fun-but-a-little-profit/)
* [2025-11-18, 22:20:00](https://hardware.slashdot.org/story/25/11/18/2220205/report-claims-that-apple-has-yet-again-put-the-mac-pro-on-the-back-burner?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Report Claims That Apple Has Yet Again Put the Mac Pro &apos;On the Back Burner&apos;](https://hardware.slashdot.org/story/25/11/18/2220205/report-claims-that-apple-has-yet-again-put-the-mac-pro-on-the-back-burner?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-18, 21:39:18](https://news.ycombinator.com/item?id=45972519) - [Blender 5.0](https://www.blender.org/download/releases/5-0/)
* [2025-11-18, 21:25:00](https://yro.slashdot.org/story/25/11/18/2038256/aclu-and-eff-sue-a-city-blanketed-with-flock-surveillance-cameras?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ACLU and EFF Sue a City Blanketed With Flock Surveillance Cameras](https://yro.slashdot.org/story/25/11/18/2038256/aclu-and-eff-sue-a-city-blanketed-with-flock-surveillance-cameras?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-18, 20:50:00](https://slashdot.org/story/25/11/18/1951214/klarna-says-ai-drive-has-helped-halve-staff-numbers-and-boost-pay?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Klarna Says AI Drive Has Helped Halve Staff Numbers and Boost Pay](https://slashdot.org/story/25/11/18/1951214/klarna-says-ai-drive-has-helped-halve-staff-numbers-and-boost-pay?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-18, 20:10:00](https://developers.slashdot.org/story/25/11/18/1919245/oracle-is-already-underwater-on-its-astonishing-300b-openai-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Oracle is Already Underwater On Its &apos;Astonishing&apos; $300B OpenAI Deal](https://developers.slashdot.org/story/25/11/18/1919245/oracle-is-already-underwater-on-its-astonishing-300b-openai-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-18, 19:50:34](https://lobste.rs/s/1rluks/surprise_with_how_handles_its_program) - [A surprise with how &apos;#!&apos; handles its program argument in practice](https://utcc.utoronto.ca/~cks/space/blog/unix/ShebangRelativePathSurprise?showcomments)
* [2025-11-18, 19:47:00](https://soylentnews.org/article.pl?sid=25/11/17/119215&amp;from=rss) - [DHS Offers “Disturbing New Excuses” to Seize Kids’ Biometric Data, Expert Says](https://soylentnews.org/article.pl?sid=25/11/17/119215&amp;from=rss)
* [2025-11-18, 19:31:00](https://it.slashdot.org/story/25/11/18/1932202/talking-to-windows-copilot-ai-makes-a-computer-feel-incompetent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Talking To Windows&apos; Copilot AI Makes a Computer Feel Incompetent&apos;](https://it.slashdot.org/story/25/11/18/1932202/talking-to-windows-copilot-ai-makes-a-computer-feel-incompetent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-18, 18:54:54](https://news.ycombinator.com/item?id=45970391) - [OrthoRoute – GPU-accelerated autorouting for KiCad](https://bbenchoff.github.io/pages/OrthoRoute.html)
* [2025-11-18, 18:54:19](https://lobste.rs/s/sjkuyp/pebble_rebble_path_forward) - [Pebble, Rebble, and a Path Forward](https://ericmigi.com/blog/pebble-rebble-and-a-path-forward)
* [2025-11-18, 18:50:00](https://news.ycombinator.com/item?id=45970338) - [Show HN: RowboatX – open-source Claude Code for everyday automations](https://github.com/rowboatlabs/rowboat)
* [2025-11-18, 18:50:00](https://yro.slashdot.org/story/25/11/18/1850240/irs-accessed-massive-database-of-americans-flights-without-a-warrant?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [IRS Accessed Massive Database of Americans Flights Without a Warrant](https://yro.slashdot.org/story/25/11/18/1850240/irs-accessed-massive-database-of-americans-flights-without-a-warrant?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-18, 18:13:30](https://news.ycombinator.com/item?id=45969909) - [I am stepping down as the CEO of Mastodon](https://blog.joinmastodon.org/2025/11/my-next-chapter-with-mastodon/)
* [2025-11-18, 18:04:00](https://tech.slashdot.org/story/25/11/18/184258/federal-judge-rules-metas-instagram-and-whatsapp-purchases-did-not-stifle-competition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Federal Judge Rules Meta&apos;s Instagram and WhatsApp Purchases Did Not Stifle Competition](https://tech.slashdot.org/story/25/11/18/184258/federal-judge-rules-metas-instagram-and-whatsapp-purchases-did-not-stifle-competition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-18, 17:38:04](https://lobste.rs/s/gwchzg/whatsapp_census) - [WhatsApp Census](https://github.com/sbaresearch/whatsapp-census/blob/main/Hey_there_You_are_using_WhatsApp.pdf)
* [2025-11-18, 17:24:27](https://news.ycombinator.com/item?id=45969250) - [Pebble, Rebble, and a path forward](https://ericmigi.com/blog/pebble-rebble-and-a-path-forward/)
* [2025-11-18, 16:33:39](https://lobste.rs/s/psrp8z/google_summer_code_2025_results) - [Google Summer of Code 2025 results](https://blog.rust-lang.org/2025/11/18/gsoc-2025-results/)
* [2025-11-18, 16:26:28](https://news.ycombinator.com/item?id=45968362) - [Solving a million-step LLM task with zero errors](https://arxiv.org/abs/2511.09030)
* [2025-11-18, 16:10:34](https://news.ycombinator.com/item?id=45968121) - [The code and open-source tools I used to produce a science fiction anthology](https://compellingsciencefiction.com/posts/the-code-and-open-source-tools-i-used-to-produce-a-science-fiction-anthology.html)
* [2025-11-18, 16:01:03](https://lobste.rs/s/ei2zx3/ruby_4_0_0_preview2_released) - [Ruby 4.0.0 preview2 Released](https://www.ruby-lang.org/en/news/2025/11/17/ruby-4-0-0-preview2-released/)
* [2025-11-18, 15:47:38](https://news.ycombinator.com/item?id=45967814) - [Google Antigravity](https://antigravity.google/)
* [2025-11-18, 15:09:38](https://news.ycombinator.com/item?id=45967211) - [Gemini 3](https://blog.google/products/gemini/gemini-3/)
* [2025-11-18, 15:04:00](https://soylentnews.org/article.pl?sid=25/11/17/0246249&amp;from=rss) - [The Data Center Resistance Has Arrived](https://soylentnews.org/article.pl?sid=25/11/17/0246249&amp;from=rss)
* [2025-11-18, 15:01:46](https://lobste.rs/s/lqsrgo/announcing_lix_2_94_acai_na_tigela) - [Announcing Lix 2.94 “Açaí na tigela”](https://lix.systems/blog/2025-11-18-lix-2.94-release/)
* [2025-11-18, 15:00:36](https://news.ycombinator.com/item?id=45967079) - [Show HN: Browser-based interactive 3D Three-Body problem simulator](https://trisolarchaos.com/?pr=O_8(0.6)&amp;n=3&amp;s=5.0&amp;so=0.00&amp;im=rk4&amp;dt=1.00e-4&amp;rt=1.0e-6&amp;at=1.0e-8&amp;bs=0.15&amp;sf=0&amp;sv=0&amp;cm=free&amp;kt=1&amp;st=1&amp;tl=1500&amp;cp=2.5208,1.5125,2.5208&amp;ct=0.0000,0.0000,0.1670)
* [2025-11-18, 14:19:46](https://lobste.rs/s/wtnzei/rebecca_heineman_from_homelessness) - [Rebecca Heineman - from homelessness to porting Doom](https://corecursive.com/doomed-to-fail-with-burger-becky/)
* [2025-11-18, 12:56:39](https://lobste.rs/s/bb3wu5/do_not_put_your_site_behind_cloudflare_if) - [Do Not Put Your Site Behind Cloudflare if You Don&apos;t Need To](https://huijzer.xyz/posts/123/do-not-put-your-site-behind-cloudflare-if-you-dont)
* [2025-11-18, 12:40:48](https://lobste.rs/s/phd5uy/my_first_fifteen_compilers) - [My First Fifteen Compilers](https://blog.sigplan.org/2019/07/09/my-first-fifteen-compilers/)
* [2025-11-18, 11:35:10](https://news.ycombinator.com/item?id=45963780) - [Cloudflare Global Network experiencing issues](https://www.cloudflarestatus.com/incidents/8gmgl950y3h7)
* [2025-11-18, 11:12:20](https://news.ycombinator.com/item?id=45963670) - [Gemini 3 Pro Model Card [pdf]](https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-3-Pro-Model-Card.pdf)
* [2025-11-18, 10:58:34](https://lobste.rs/s/i8ez2g/small_vanilla_kubernetes_install_on) - [A &apos;small&apos; vanilla Kubernetes install on NixOS](https://stephank.nl/p/2025-11-17-a-small-vanilla-kubernetes-install-on-nixos.html)
* [2025-11-18, 10:23:00](https://soylentnews.org/article.pl?sid=25/11/17/0243214&amp;from=rss) - [Google Settlement With Epic Caps Play Store Fees, Boosts Other Android App Stores](https://soylentnews.org/article.pl?sid=25/11/17/0243214&amp;from=rss)
* [2025-11-18, 09:22:50](https://lobste.rs/s/nnor3p/6_years_after_too_much_crypto) - [6 years after too much crypto](https://bfswa.substack.com/p/6-years-after-too-much-crypto)
* [2025-11-18, 09:16:15](https://lobste.rs/s/t37jcs/my_next_chapter_with_mastodon) - [My next chapter with Mastodon](https://blog.joinmastodon.org/2025/11/my-next-chapter-with-mastodon/)
* [2025-11-18, 06:06:52](https://news.ycombinator.com/item?id=45961886) - [Google boss says AI investment boom has &apos;elements of irrationality&apos;](https://www.bbc.com/news/articles/cwy7vrd8k4eo)
* [2025-11-18, 05:37:00](https://soylentnews.org/article.pl?sid=25/11/17/0240210&amp;from=rss) - [Nvidia’s Jensen Huang: China will Surpass U.S. in AI Race Through ENERGY](https://soylentnews.org/article.pl?sid=25/11/17/0240210&amp;from=rss)
* [2025-11-18, 00:53:00](https://soylentnews.org/article.pl?sid=25/11/16/1340211&amp;from=rss) - [Starshield Satellite Constellation Emitting Unusual Radio Signals](https://soylentnews.org/article.pl?sid=25/11/16/1340211&amp;from=rss)
* [2025-11-17, 22:29:05](https://lobste.rs/s/uipd87/450_kb_static_site_generator_based_on) - [A 450 KB static site generator based on Markdown and Lua](https://log.schemescape.com/posts/static-site-generators/smallest-static-site-generator.html)
* [2025-11-17, 21:42:24](https://lobste.rs/s/wqrzcy/chuck_moore_retires_from_colorforth) - [Chuck Moore retires from colorforth after latest Windows breaks rendering](https://www.youtube.com/watch?v=MvkGBWXb2oQ)
* [2025-11-17, 20:14:00](https://soylentnews.org/article.pl?sid=25/11/16/1329214&amp;from=rss) - [Microsoft: the Company Doesn&apos;t Have Enough Electricity to Install All the AI GPUs in its Inventory](https://soylentnews.org/article.pl?sid=25/11/16/1329214&amp;from=rss)
* [2025-11-17, 15:33:00](https://soylentnews.org/article.pl?sid=25/11/16/1317229&amp;from=rss) - [Lawmakers Want to Ban VPNs—And They Have No Idea What They&apos;re Doing](https://soylentnews.org/article.pl?sid=25/11/16/1317229&amp;from=rss)
* [2025-11-17, 10:44:00](https://soylentnews.org/article.pl?sid=25/11/16/1316249&amp;from=rss) - [NVIDIA 580.105.08 Linux Graphics Driver Released With a New Environment Variable](https://soylentnews.org/article.pl?sid=25/11/16/1316249&amp;from=rss)
* [2025-11-17, 06:01:00](https://soylentnews.org/article.pl?sid=25/11/16/1311207&amp;from=rss) - [A Spine-Tingling Discovery: This Dinosaur Had Spiked Body Armor](https://soylentnews.org/article.pl?sid=25/11/16/1311207&amp;from=rss)
* [2025-11-17, 01:14:00](https://soylentnews.org/article.pl?sid=25/11/15/0741250&amp;from=rss) - [Devuan Version 6.0 \&quot;Excalibur\&quot; is Available Now](https://soylentnews.org/article.pl?sid=25/11/15/0741250&amp;from=rss)
* [2025-11-16, 20:28:00](https://soylentnews.org/article.pl?sid=25/11/15/0726208&amp;from=rss) - [Youtube Ads - Legal Advice Required](https://soylentnews.org/article.pl?sid=25/11/15/0726208&amp;from=rss)
* [2025-11-16, 15:45:00](https://soylentnews.org/article.pl?sid=25/11/15/0419235&amp;from=rss) - [This Rare ‘Mad Honey’ is Only Found in Two Places in the World](https://soylentnews.org/article.pl?sid=25/11/15/0419235&amp;from=rss)
* [2025-11-16, 10:58:00](https://soylentnews.org/article.pl?sid=25/11/15/045217&amp;from=rss) - [AI Resistance: Who Says No to AI and Why?](https://soylentnews.org/article.pl?sid=25/11/15/045217&amp;from=rss)
* [2025-11-16, 06:17:00](https://soylentnews.org/article.pl?sid=25/11/15/0349259&amp;from=rss) - [Australians to Get Three Hours of Free Electricity Every Day Under Solar Scheme](https://soylentnews.org/article.pl?sid=25/11/15/0349259&amp;from=rss)
* [2025-11-16, 01:36:00](https://soylentnews.org/article.pl?sid=25/11/15/0341210&amp;from=rss) - [FreeBSD: Reproducible Rootless Builds and Moving From Windows to This Linux Chaos Alternative](https://soylentnews.org/article.pl?sid=25/11/15/0341210&amp;from=rss)
* [2025-11-15, 20:51:00](https://soylentnews.org/article.pl?sid=25/11/13/2136225&amp;from=rss) - [Lego: The Final Frontier. Star Trek&apos;s First Set Beams Down in 3,600 Pieces](https://soylentnews.org/article.pl?sid=25/11/13/2136225&amp;from=rss)
* [2025-11-15, 16:08:00](https://soylentnews.org/article.pl?sid=25/11/13/2125207&amp;from=rss) - [New Project Brings Strong Linux Compatibility to More Classic Windows Games](https://soylentnews.org/article.pl?sid=25/11/13/2125207&amp;from=rss)
* [2025-11-15, 11:23:00](https://soylentnews.org/article.pl?sid=25/11/13/2130222&amp;from=rss) - [Gary McKinnon: He Was Looking for Aliens - and Became the No. 1 Enemy of the State](https://soylentnews.org/article.pl?sid=25/11/13/2130222&amp;from=rss)
* [2025-11-15, 06:36:00](https://soylentnews.org/article.pl?sid=25/11/13/0410238&amp;from=rss) - [Brussels Knifes Privacy to Feed the AI Boom](https://soylentnews.org/article.pl?sid=25/11/13/0410238&amp;from=rss)
* [2025-11-15, 01:54:00](https://soylentnews.org/article.pl?sid=25/11/13/0359225&amp;from=rss) - [How to Declutter, Quiet Down, and Take the AI Out of Windows 11 25H2](https://soylentnews.org/article.pl?sid=25/11/13/0359225&amp;from=rss)
* [2025-11-15, 00:36:51](https://news.ycombinator.com/item?id=45933932) - [I wrote a Pong game in a 512-byte boot sector](https://akshatjoshi.com/i-wrote-a-pong-game-in-a-512-byte-boot-sector/)
