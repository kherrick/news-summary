# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Open Source Trends

* [What Killed Perl?](https://entropicthoughts.com/what-killed-perl) - An article analyzing the decline of Perl, once a dominant language in software development. [Comments](https://lobste.rs/s/0m6yln/what_killed_perl)

* [Linus Torvalds Says Vibe Coding is Fine For Getting Started, 'Horrible Idea' For Maintenance](https://developers.slashdot.org/story/25/11/19/1832208/linus-torvalds-says-vibe-coding-is-fine-for-getting-started-horrible-idea-for-maintenance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Insights from Linus Torvalds on early-stage development practices and their implications for software maintenance. [Comments](https://developers.slashdot.org/story/25/11/19/1832208/linus-torvalds-says-vibe-coding-is-fine-for-getting-started-horrible-idea-for-maintenance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Twenty years of Django releases](https://www.djangoproject.com/weblog/2025/nov/19/twenty-years-of-django-releases/) - Reflecting on two decades of Django's impact on web development. [Comments](https://lobste.rs/s/idtphq/twenty_years_django_releases)

* [Are large language models worth it?](https://nicholas.carlini.com/writing/2025/are-llms-worth-it.html) - Exploring the costs and benefits of large language models in modern AI. [Comments](https://lobste.rs/s/vwdvly/are_large_language_models_worth_it)

* [Build vs. Buy: What This Week's Outages Should Teach You](https://www.toddhgardner.com/blog/build-vs-buy-outages) - An article discussing the trade-offs between building custom solutions and relying on external services. [Comments](https://news.ycombinator.com/item?id=45981626)

## Privacy, Security, and Ethics

* [The Growing Problem With China's Unreliable Numbers](https://slashdot.org/story/25/11/19/1635239/the-growing-problem-with-chinas-unreliable-numbers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Concerns over the reliability of China's economic and statistical data. [Comments](https://slashdot.org/story/25/11/19/1635239/the-growing-problem-with-chinas-unreliable-numbers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Your smartphone, their rules: App stores enable corporate-government censorship](https://www.aclu.org/news/free-speech/app-store-oligopoly) - Examining how app store policies can suppress user freedoms. [Comments](https://news.ycombinator.com/item?id=45979297)

* [Emoji evidence errors don’t undo a murder conviction](https://blog.ericgoldman.org/archives/2025/11/emoji-evidence-errors-dont-undo-a-murder-conviction-people-v-harmon.htm) - How modern digital evidence, including emojis, plays an evolving role in legal proceedings. [Comments](https://news.ycombinator.com/item?id=45981009)

## Innovative Tools and Platforms

* [Hachi:  An Image search engine](https://eagledot.xyz/hachi.md.html) - Introducing a new image search engine, Hachi, and its potential applications. [Comments](https://lobste.rs/s/6ufew7/hachi_image_search_engine)

* [Improving NAT traversal, part 2: challenges in cloud environments](https://tailscale.com/blog/nat-traversal-improvements-pt-2-cloud-environments) - Insights into the complexities of NAT traversal within cloud computing contexts. [Comments](https://lobste.rs/s/wj0k0e/improving_nat_traversal_part_2)

* [Show HN: DNS Benchmark Tool – Compare and monitor resolvers](https://github.com/frankovo/dns-benchmark-tool) - A new tool designed to compare and monitor DNS resolvers efficiently. [Comments](https://news.ycombinator.com/item?id=45982526)

## Historical and Cultural Reflections

* [The lost cause of the Lisp machines](https://www.tfeb.org/fragments/2025/11/18/the-lost-cause-of-the-lisp-machines/) - A retrospective exploration of Lisp machines and their lasting influence. [Comments](https://lobste.rs/s/rifpe8/lost_cause_lisp_machines)

* [Rebecca Heineman - from homelessness to porting Doom](https://corecursive.com/doomed-to-fail-with-burger-becky/) - The inspiring journey of Rebecca Heineman in gaming and technology. [Comments](https://lobste.rs/s/wtnzei/rebecca_heineman_from_homelessness)

* [Canonical Extends Ubuntu Support to 15 Years](https://soylentnews.org/article.pl?sid=25/11/18/0113223&amp;from=rss) - Major announcement about extended support for Ubuntu users, reflecting a commitment to longevity. [Comments](https://soylentnews.org/article.pl?sid=25/11/18/0113223&amp;from=rss)

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

* [2025-11-19, 18:42:54](https://lobste.rs/s/0m6yln/what_killed_perl) - [What Killed Perl?](https://entropicthoughts.com/what-killed-perl)
* [2025-11-19, 18:40:00](https://developers.slashdot.org/story/25/11/19/1832208/linus-torvalds-says-vibe-coding-is-fine-for-getting-started-horrible-idea-for-maintenance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linus Torvalds Says Vibe Coding is Fine For Getting Started, &apos;Horrible Idea&apos; For Maintenance](https://developers.slashdot.org/story/25/11/19/1832208/linus-torvalds-says-vibe-coding-is-fine-for-getting-started-horrible-idea-for-maintenance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 18:27:36](https://news.ycombinator.com/item?id=45983069) - [Cypherpunks Hall of Fame](https://github.com/cypherpunkshall/cypherpunkshall.github.io)
* [2025-11-19, 18:21:40](https://lobste.rs/s/idtphq/twenty_years_django_releases) - [Twenty years of Django releases](https://www.djangoproject.com/weblog/2025/nov/19/twenty-years-of-django-releases/)
* [2025-11-19, 18:16:51](https://news.ycombinator.com/item?id=45982874) - [Netherlands returns control of Nexperia to Chinese owner](https://www.bloomberg.com/news/articles/2025-11-19/dutch-hand-back-control-of-chinese-owned-chipmaker-nexperia)
* [2025-11-19, 18:13:18](https://news.ycombinator.com/item?id=45982818) - [To launch something new, you need \&quot;social dandelions\&quot;](https://www.actiondigest.com/p/to-launch-something-new-you-need-social-dandelions)
* [2025-11-19, 18:08:18](https://lobste.rs/s/vwdvly/are_large_language_models_worth_it) - [Are large language models worth it?](https://nicholas.carlini.com/writing/2025/are-llms-worth-it.html)
* [2025-11-19, 18:03:00](https://news.slashdot.org/story/25/11/19/1745251/uk-to-ban-the-resale-of-tickets-for-profit-to-protect-fans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK To Ban the Resale of Tickets For Profit To Protect Fans](https://news.slashdot.org/story/25/11/19/1745251/uk-to-ban-the-resale-of-tickets-for-profit-to-protect-fans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 18:01:59](https://news.ycombinator.com/item?id=45982649) - [Building more with GPT-5.1-Codex-Max](https://openai.com/index/gpt-5-1-codex-max/)
* [2025-11-19, 17:52:52](https://news.ycombinator.com/item?id=45982526) - [Show HN: DNS Benchmark Tool – Compare and monitor resolvers](https://github.com/frankovo/dns-benchmark-tool)
* [2025-11-19, 17:45:26](https://lobste.rs/s/pkuck9/adventures_upgrading_proxmox) - [Adventures in upgrading Proxmox](https://blog.vasi.li/adventures-in-upgrading-proxmox/)
* [2025-11-19, 17:20:00](https://slashdot.org/story/25/11/19/1635239/the-growing-problem-with-chinas-unreliable-numbers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Growing Problem With China&apos;s Unreliable Numbers](https://slashdot.org/story/25/11/19/1635239/the-growing-problem-with-chinas-unreliable-numbers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 16:44:00](https://hardware.slashdot.org/story/25/11/19/1622209/more-than-60-us-and-canadian-police-units-now-use-boston-dynamics-robot-dog?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [More Than 60 US and Canadian Police Units Now Use Boston Dynamics&apos; Robot Dog](https://hardware.slashdot.org/story/25/11/19/1622209/more-than-60-us-and-canadian-police-units-now-use-boston-dynamics-robot-dog?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 16:40:24](https://news.ycombinator.com/item?id=45981666) - [Adventures in upgrading Proxmox](https://blog.vasi.li/adventures-in-upgrading-proxmox/)
* [2025-11-19, 16:36:35](https://news.ycombinator.com/item?id=45981626) - [Build vs. Buy: What This Week&apos;s Outages Should Teach You](https://www.toddhgardner.com/blog/build-vs-buy-outages)
* [2025-11-19, 16:35:35](https://news.ycombinator.com/item?id=45981608) - [Outdated Samsung handset linked to fatal emergency call failure in Australia](https://www.theregister.com/2025/11/18/samsung_emergency_call_failure/)
* [2025-11-19, 16:30:58](https://lobste.rs/s/gdwxd5/why_bsds) - [Why BSDs?](https://blog.thechases.com/posts/why-bsds/)
* [2025-11-19, 16:18:32](https://lobste.rs/s/liq0sa/specialized_csv_readers_for_rust) - [Specialized CSV readers for Rust leveraging hybrid SIMD techniques](https://docs.rs/simd-csv)
* [2025-11-19, 16:05:00](https://science.slashdot.org/story/25/11/19/1540212/cdc-data-confirms-us-is-2-months-away-from-losing-measles-elimination-status?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CDC Data Confirms US is 2 Months Away From Losing Measles Elimination Status](https://science.slashdot.org/story/25/11/19/1540212/cdc-data-confirms-us-is-2-months-away-from-losing-measles-elimination-status?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 15:46:30](https://news.ycombinator.com/item?id=45981009) - [Emoji evidence errors don’t undo a murder conviction](https://blog.ericgoldman.org/archives/2025/11/emoji-evidence-errors-dont-undo-a-murder-conviction-people-v-harmon.htm)
* [2025-11-19, 15:43:43](https://lobste.rs/s/1ckynu/vibesdk_open_source_vibe_coding_platform) - [vibesdk: An open-source vibe coding platform that helps you build your own vibe-coding platform, built entirely on Cloudflare stack](https://github.com/cloudflare/vibesdk)
* [2025-11-19, 15:28:04](https://news.ycombinator.com/item?id=45980760) - [Launch HN: Mosaic (YC W25) – Agentic Video Editing](https://mosaic.so)
* [2025-11-19, 15:25:00](https://yro.slashdot.org/story/25/11/19/153210/chinese-university-collected-more-ai-patents-than-mit-stanford-princeton-and-harvard-combined?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chinese University Collected More AI Patents Than MIT, Stanford, Princeton and Harvard Combined](https://yro.slashdot.org/story/25/11/19/153210/chinese-university-collected-more-ai-patents-than-mit-stanford-princeton-and-harvard-combined?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 15:24:52](https://news.ycombinator.com/item?id=45980714) - [Show HN: Vibe Prolog](https://github.com/nlothian/Vibe-Prolog)
* [2025-11-19, 14:49:00](https://soylentnews.org/article.pl?sid=25/11/18/0121255&amp;from=rss) - [FPGA Based IBM-PC-XT](https://soylentnews.org/article.pl?sid=25/11/18/0121255&amp;from=rss)
* [2025-11-19, 14:47:00](https://tech.slashdot.org/story/25/11/19/1447256/cloudflare-explains-its-worst-outage-since-2019?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cloudflare Explains Its Worst Outage Since 2019](https://tech.slashdot.org/story/25/11/19/1447256/cloudflare-explains-its-worst-outage-since-2019?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 14:41:30](https://news.ycombinator.com/item?id=45980117) - [Europe is scaling back GDPR and relaxing AI laws](https://www.theverge.com/news/823750/european-union-ai-act-gdpr-changes)
* [2025-11-19, 14:03:35](https://lobste.rs/s/jlf6y8/what_makes_intro_crafting_interpreters) - [What Makes the Intro to Crafting Interpreters so Good?](https://refactoringenglish.com/blog/crafting-interpreters-intro/)
* [2025-11-19, 13:49:00](https://yro.slashdot.org/story/25/11/19/1350201/netgear-accused-by-rival-of-china-smear-to-fan-security-fear?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Netgear Accused by Rival of China Smear To Fan Security Fear](https://yro.slashdot.org/story/25/11/19/1350201/netgear-accused-by-rival-of-china-smear-to-fan-security-fear?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 13:28:40](https://news.ycombinator.com/item?id=45979297) - [Your smartphone, their rules: App stores enable corporate-government censorship](https://www.aclu.org/news/free-speech/app-store-oligopoly)
* [2025-11-19, 13:20:42](https://news.ycombinator.com/item?id=45979232) - [The peaceful transfer of power in open source projects](https://shkspr.mobi/blog/2025/11/the-peaceful-transfer-of-power-in-open-source-projects/)
* [2025-11-19, 12:21:33](https://lobste.rs/s/6ufew7/hachi_image_search_engine) - [Hachi:  An Image search engine](https://eagledot.xyz/hachi.md.html)
* [2025-11-19, 12:17:50](https://lobste.rs/s/rifpe8/lost_cause_lisp_machines) - [The lost cause of the Lisp machines](https://www.tfeb.org/fragments/2025/11/18/the-lost-cause-of-the-lisp-machines/)
* [2025-11-19, 11:45:51](https://news.ycombinator.com/item?id=45978423) - [Thunderbird adds native Microsoft Exchange email support](https://blog.thunderbird.net/2025/11/thunderbird-adds-native-microsoft-exchange-email-support/)
* [2025-11-19, 11:18:59](https://news.ycombinator.com/item?id=45978245) - [Learning to Boot from PXE](https://blog.imraniqbal.org/learning-to-boot-from-pxe/)
* [2025-11-19, 10:25:25](https://news.ycombinator.com/item?id=45977900) - [What Killed Perl?](https://entropicthoughts.com/what-killed-perl)
* [2025-11-19, 10:01:00](https://soylentnews.org/article.pl?sid=25/11/18/0113223&amp;from=rss) - [Canonical Extends Ubuntu Support to 15 Years](https://soylentnews.org/article.pl?sid=25/11/18/0113223&amp;from=rss)
* [2025-11-19, 10:00:05](https://news.ycombinator.com/item?id=45977744) - [A $1k AWS mistake](https://www.geocod.io/code-and-coordinates/2025-11-18-the-1000-aws-mistake/)
* [2025-11-19, 09:27:17](https://news.ycombinator.com/item?id=45977542) - [Multimodal Diffusion Language Models for Thinking-Aware Editing and Generation](https://github.com/tyfeld/MMaDA-Parallel)
* [2025-11-19, 09:10:07](https://lobste.rs/s/gj8uup/static_web_hosting_on_intel_n150_freebsd) - [Static Web Hosting on the Intel N150: FreeBSD, SmartOS, NetBSD, OpenBSD and Linux Compared](https://it-notes.dragas.net/2025/11/19/static-web-hosting-intel-n150-freebsd-smartos-netbsd-openbsd-linux/)
* [2025-11-19, 08:19:24](https://lobste.rs/s/gfl26c/when_high_availability_brings_downtime) - [When high availability brings downtime](https://medium.com/learnings-from-the-paas/when-high-availability-brings-downtime-7a6261b0ef1c)
* [2025-11-19, 07:00:00](https://science.slashdot.org/story/25/11/19/0257258/man-who-cryogenically-froze-late-wife-sparks-debate-by-dating-new-partner?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Man Who Cryogenically Froze Late Wife Sparks Debate By Dating New Partner](https://science.slashdot.org/story/25/11/19/0257258/man-who-cryogenically-froze-late-wife-sparks-debate-by-dating-new-partner?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 05:16:00](https://soylentnews.org/article.pl?sid=25/11/18/018202&amp;from=rss) - [Mozilla Unveils Plans for New &apos;AI Window&apos; Browsing Mode in Firefox, Opens Signups](https://soylentnews.org/article.pl?sid=25/11/18/018202&amp;from=rss)
* [2025-11-19, 03:49:59](https://lobste.rs/s/wj0k0e/improving_nat_traversal_part_2) - [Improving NAT traversal, part 2: challenges in cloud environments](https://tailscale.com/blog/nat-traversal-improvements-pt-2-cloud-environments)
* [2025-11-19, 03:30:00](https://hardware.slashdot.org/story/25/11/19/0026252/us-backs-three-mile-island-nuclear-restart-with-1-billion-loan-to-constellation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Backs Three Mile Island Nuclear Restart With $1 Billion Loan To Constellation](https://hardware.slashdot.org/story/25/11/19/0026252/us-backs-three-mile-island-nuclear-restart-with-1-billion-loan-to-constellation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 02:54:20](https://lobste.rs/s/nac5wa/cloudflare_outage_on_november_18_2025) - [Cloudflare outage on November 18, 2025](https://blog.cloudflare.com/18-november-2025-outage/)
* [2025-11-19, 02:20:00](https://yro.slashdot.org/story/25/11/19/0018216/chinese-spies-are-trying-to-reach-uk-lawmakers-via-linkedin-mi5-warns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chinese Spies Are Trying To Reach UK Lawmakers Via LinkedIn, MI5 Warns](https://yro.slashdot.org/story/25/11/19/0018216/chinese-spies-are-trying-to-reach-uk-lawmakers-via-linkedin-mi5-warns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 01:41:33](https://news.ycombinator.com/item?id=45974869) - [I just want working RCS messaging](https://wt.gd/i-just-want-my-rcs-messaging-to-work)
* [2025-11-19, 01:40:00](https://tech.slashdot.org/story/25/11/19/000255/mexico-partially-lifts-longstanding-website-ban-on-tor-network?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mexico Partially Lifts Longstanding Website Ban On Tor Network](https://tech.slashdot.org/story/25/11/19/000255/mexico-partially-lifts-longstanding-website-ban-on-tor-network?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 01:00:00](https://it.slashdot.org/story/25/11/18/2341220/gen-z-officially-worse-at-passwords-than-80-year-olds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Gen Z Officially Worse At Passwords Than 80-Year-Olds](https://it.slashdot.org/story/25/11/18/2341220/gen-z-officially-worse-at-passwords-than-80-year-olds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 00:31:00](https://soylentnews.org/article.pl?sid=25/11/18/014241&amp;from=rss) - [Raccoons Are Showing Early Signs of Domestication](https://soylentnews.org/article.pl?sid=25/11/18/014241&amp;from=rss)
* [2025-11-19, 00:20:00](https://slashdot.org/story/25/11/18/2242231/cloud-native-computing-is-poised-to-explode?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cloud-Native Computing Is Poised To Explode](https://slashdot.org/story/25/11/18/2242231/cloud-native-computing-is-poised-to-explode?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 00:05:28](https://news.ycombinator.com/item?id=45974012) - [Show HN: I made a down detector for down detector](https://downdetectorsdowndetector.com)
* [2025-11-18, 23:40:00](https://linux.slashdot.org/story/25/11/18/2229244/red-hat-losing-another-prominent-linux-kernel-engineer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Red Hat Losing Another Prominent Linux Kernel Engineer](https://linux.slashdot.org/story/25/11/18/2229244/red-hat-losing-another-prominent-linux-kernel-engineer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-18, 23:07:23](https://lobste.rs/s/yit3fo/actor_model_multi_core_scheduler_for) - [An actor-model multi-core scheduler for OCaml 5](https://github.com/riot-ml/riot)
* [2025-11-18, 22:54:48](https://lobste.rs/s/hhuu5z/experiment_making_typescript_immutable) - [Experiment: making TypeScript immutable-by-default](https://evanhahn.com/typescript-immutability-experiment/)
* [2025-11-18, 22:41:52](https://lobste.rs/s/0r5kmb/month_chat_oriented_programming) - [A Month of Chat-Oriented Programming](https://checkeagle.com/checklists/njr/a-month-of-chat-oriented-programming/)
* [2025-11-18, 22:34:33](https://lobste.rs/s/pmsbte/self_hosting_dns_for_no_fun_little_profit) - [Self-hosting DNS for no fun, but a little profit](https://linderud.dev/blog/self-hosting-dns-for-no-fun-but-a-little-profit/)
* [2025-11-18, 19:50:34](https://lobste.rs/s/1rluks/surprise_with_how_handles_its_program) - [A surprise with how &apos;#!&apos; handles its program argument in practice](https://utcc.utoronto.ca/~cks/space/blog/unix/ShebangRelativePathSurprise?showcomments)
* [2025-11-18, 19:47:00](https://soylentnews.org/article.pl?sid=25/11/17/119215&amp;from=rss) - [DHS Offers “Disturbing New Excuses” to Seize Kids’ Biometric Data, Expert Says](https://soylentnews.org/article.pl?sid=25/11/17/119215&amp;from=rss)
* [2025-11-18, 17:38:04](https://lobste.rs/s/gwchzg/whatsapp_census) - [WhatsApp Census](https://github.com/sbaresearch/whatsapp-census/blob/main/Hey_there_You_are_using_WhatsApp.pdf)
* [2025-11-18, 17:24:27](https://news.ycombinator.com/item?id=45969250) - [Pebble, Rebble, and a path forward](https://ericmigi.com/blog/pebble-rebble-and-a-path-forward/)
* [2025-11-18, 15:04:00](https://soylentnews.org/article.pl?sid=25/11/17/0246249&amp;from=rss) - [The Data Center Resistance Has Arrived](https://soylentnews.org/article.pl?sid=25/11/17/0246249&amp;from=rss)
* [2025-11-18, 15:01:46](https://lobste.rs/s/lqsrgo/announcing_lix_2_94_acai_na_tigela) - [Announcing Lix 2.94 “Açaí na tigela”](https://lix.systems/blog/2025-11-18-lix-2.94-release/)
* [2025-11-18, 15:00:36](https://news.ycombinator.com/item?id=45967079) - [Show HN: Browser-based interactive 3D Three-Body problem simulator](https://trisolarchaos.com/?pr=O_8(0.6)&amp;n=3&amp;s=5.0&amp;so=0.00&amp;im=rk4&amp;dt=1.00e-4&amp;rt=1.0e-6&amp;at=1.0e-8&amp;bs=0.15&amp;sf=0&amp;sv=0&amp;cm=free&amp;kt=1&amp;st=1&amp;tl=1500&amp;cp=2.5208,1.5125,2.5208&amp;ct=0.0000,0.0000,0.1670)
* [2025-11-18, 14:19:46](https://lobste.rs/s/wtnzei/rebecca_heineman_from_homelessness) - [Rebecca Heineman - from homelessness to porting Doom](https://corecursive.com/doomed-to-fail-with-burger-becky/)
* [2025-11-18, 10:58:34](https://lobste.rs/s/i8ez2g/small_vanilla_kubernetes_install_on) - [A &apos;small&apos; vanilla Kubernetes install on NixOS](https://stephank.nl/p/2025-11-17-a-small-vanilla-kubernetes-install-on-nixos.html)
* [2025-11-18, 10:23:00](https://soylentnews.org/article.pl?sid=25/11/17/0243214&amp;from=rss) - [Google Settlement With Epic Caps Play Store Fees, Boosts Other Android App Stores](https://soylentnews.org/article.pl?sid=25/11/17/0243214&amp;from=rss)
* [2025-11-18, 09:22:50](https://lobste.rs/s/nnor3p/6_years_after_too_much_crypto) - [6 years after too much crypto](https://bfswa.substack.com/p/6-years-after-too-much-crypto)
* [2025-11-18, 09:16:15](https://lobste.rs/s/t37jcs/my_next_chapter_with_mastodon) - [My next chapter with Mastodon](https://blog.joinmastodon.org/2025/11/my-next-chapter-with-mastodon/)
* [2025-11-18, 05:37:00](https://soylentnews.org/article.pl?sid=25/11/17/0240210&amp;from=rss) - [Nvidia’s Jensen Huang: China will Surpass U.S. in AI Race Through ENERGY](https://soylentnews.org/article.pl?sid=25/11/17/0240210&amp;from=rss)
* [2025-11-18, 00:53:00](https://soylentnews.org/article.pl?sid=25/11/16/1340211&amp;from=rss) - [Starshield Satellite Constellation Emitting Unusual Radio Signals](https://soylentnews.org/article.pl?sid=25/11/16/1340211&amp;from=rss)
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
* [2025-11-15, 05:32:38](https://news.ycombinator.com/item?id=45935294) - [How two photographers transformed RAW photo support on Mac](https://petapixel.com/2025/11/14/how-two-photographers-transformed-raw-photo-support-on-mac/)
* [2025-11-15, 01:54:00](https://soylentnews.org/article.pl?sid=25/11/13/0359225&amp;from=rss) - [How to Declutter, Quiet Down, and Take the AI Out of Windows 11 25H2](https://soylentnews.org/article.pl?sid=25/11/13/0359225&amp;from=rss)
