# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [MONOLITH: An experimental non-Unix operating system for x86](https://codeberg.org/MONOLITH-Project/MONOLITH) - An exploration into a novel non-Unix operating system designed for x86 architectures, offering an alternative perspective on OS development. [Comments](https://lobste.rs/s/hwi7c2/monolith_experimental_non_unix)

* [How TimescaleDB compresses time-series data](https://roszigit.com/en/blog/timescaledb-compression-hypercore) - Technical insights into TimescaleDB's approach to compressing time-series data at scale. [Comments](https://news.ycombinator.com/item?id=48544451)

* [Copper transport drug restores memory and clears toxic Alzheimer&apos;s proteins](https://www.monash.edu/news/articles/copper-drug-restores-memory-and-clears-toxic-alzheimers-proteins) - A breakthrough in Alzheimer's research: a drug that removes toxic proteins and alleviates symptoms of memory loss. [Comments](https://news.ycombinator.com/item?id=48542132)

* [Salesforce to Acquire Fin (formerly Intercom) for $3.6B](https://www.salesforce.com/news/press-releases/2026/06/15/salesforce-signs-definitive-agreement-to-acquire-fin/?bc=HL) - Salesforce announces acquisition of customer communication platform Fin for $3.6 billion. [Comments](https://news.ycombinator.com/item?id=48540126)

## Artificial Intelligence Developments

* [Google CEO Largely Avoids Discussing AI In Stanford Commencement Speech](https://news.slashdot.org/story/26/06/15/0540243/google-ceo-largely-avoids-discussing-ai-in-stanford-commencement-speech?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Google's CEO evades direct discussion of AI's role during a Stanford commencement address, sparking interest in the tech giant's strategy. [Comments](https://news.ycombinator.com/item?id=48543269)

* [Memory safety CVEs differ between Rust and C/C++](https://kobzol.github.io/rust/2026/06/15/how-memory-safety-cves-differ-between-rust-and-c-cpp.html) - An analysis of memory safety vulnerabilities in Rust compared to traditional C/C++ codebases. [Comments](https://news.ycombinator.com/item?id=48543392)

## Social Issues and Policies

* [Britain Unveils Sweeping Ban On Social Media For Under-16s](https://news.slashdot.org/story/26/06/15/1653226/britain-unveils-sweeping-ban-on-social-media-for-under-16s?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The UK government announces a bold step to mitigate social media's impact on younger audiences. [Comments](https://news.ycombinator.com/item?id=48544781)

* [Swiss Voters Reject Proposal To Cap Population At 10 Million](https://slashdot.org/story/26/06/15/0546236/swiss-voters-reject-proposal-to-cap-population-at-10-million?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Switzerland votes against capping its population at 10 million in a controversial referendum. [Comments](https://news.ycombinator.com/item?id=48540854)

## Business and Market

* [Fox Is Buying Roku For $22 Billion](https://entertainment.slashdot.org/story/26/06/15/1537209/fox-is-buying-roku-for-22-billion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Media giant Fox acquires Roku in a $22 billion deal, reshaping the streaming landscape. [Comments](https://news.ycombinator.com/item?id=48540499)

## Miscellaneous

* [TinyWind: A pixel pirate sailing game with real wind physics (380k+ kms sailed)](https://tinywind.io) - A unique base-management game that incorporates realistic wind physics, crossing over 380,000 kilometers sailed. [Comments](https://news.ycombinator.com/item?id=48543475)

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

* [2026-06-15, 18:00:00](https://news.slashdot.org/story/26/06/15/1653226/britain-unveils-sweeping-ban-on-social-media-for-under-16s?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Britain Unveils Sweeping Ban On Social Media For Under-16s](https://news.slashdot.org/story/26/06/15/1653226/britain-unveils-sweeping-ban-on-social-media-for-under-16s?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-15, 17:52:39](https://news.ycombinator.com/item?id=48544781) - [Game Engine White Papers Commander Keen](https://forgottenbytes.net/commander_keen.html)
* [2026-06-15, 17:44:22](https://lobste.rs/s/ciiott/russian_spam_profanities_are_now) - [Russian Spam &amp; Profanities Are Now Plaguing The Arch Linux AUR](https://www.phoronix.com/news/Arch-Linux-AUR-Russian-Spam)
* [2026-06-15, 17:43:39](https://lobste.rs/s/vp2lbq/boot_naked_linux) - [Boot Naked Linux](https://nick.zoic.org/art/boot-naked-linux/)
* [2026-06-15, 17:29:17](https://news.ycombinator.com/item?id=48544451) - [How TimescaleDB compresses time-series data](https://roszigit.com/en/blog/timescaledb-compression-hypercore)
* [2026-06-15, 17:24:17](https://news.ycombinator.com/item?id=48544396) - [Typst 0.15.0](https://typst.app/docs/changelog/0.15.0/)
* [2026-06-15, 17:14:19](https://lobste.rs/s/fkoa80/typst_0_15_contains_multitudes) - [Typst 0.15 contains multitudes](https://typst.app/blog/2026/typst-0.15/)
* [2026-06-15, 17:00:00](https://entertainment.slashdot.org/story/26/06/15/1537209/fox-is-buying-roku-for-22-billion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fox Is Buying Roku For $22 Billion](https://entertainment.slashdot.org/story/26/06/15/1537209/fox-is-buying-roku-for-22-billion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-15, 16:54:04](https://lobste.rs/s/hwi7c2/monolith_experimental_non_unix) - [MONOLITH: An experimental non-Unix operating system for x86](https://codeberg.org/MONOLITH-Project/MONOLITH)
* [2026-06-15, 16:47:21](https://news.ycombinator.com/item?id=48543908) - [Launch HN: Drafted (YC P26) – Models for residential architecture](https://news.ycombinator.com/item?id=48543908)
* [2026-06-15, 16:15:53](https://news.ycombinator.com/item?id=48543475) - [TinyWind: A pixel pirate sailing game with real wind physics (380k+ kms sailed)](https://tinywind.io)
* [2026-06-15, 16:11:02](https://news.ycombinator.com/item?id=48543392) - [Memory safety CVEs differ between Rust and C/C++](https://kobzol.github.io/rust/2026/06/15/how-memory-safety-cves-differ-between-rust-and-c-cpp.html)
* [2026-06-15, 16:03:26](https://news.ycombinator.com/item?id=48543269) - [Boot Naked Linux](https://nick.zoic.org/art/boot-naked-linux/)
* [2026-06-15, 16:01:43](https://news.ycombinator.com/item?id=48543245) - [Show HN: machine0 – Persistent NixOS VMs You Control from the CLI](https://machine0.io)
* [2026-06-15, 16:00:00](https://news.slashdot.org/story/26/06/15/0540243/google-ceo-largely-avoids-discussing-ai-in-stanford-commencement-speech?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google CEO Largely Avoids Discussing AI In Stanford Commencement Speech](https://news.slashdot.org/story/26/06/15/0540243/google-ceo-largely-avoids-discussing-ai-in-stanford-commencement-speech?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-15, 15:43:17](https://news.ycombinator.com/item?id=48542970) - [Show HN: Exploiting Slack&apos;s video embeds to achieve E2EE communication](https://v1c.rocks/log/exploiting-slack-video/)
* [2026-06-15, 15:35:08](https://lobste.rs/s/cslljn/iroh_1_0_dial_keys_not_ips) - [Iroh 1.0 - Dial Keys, not IPs](https://www.iroh.computer/blog/v1)
* [2026-06-15, 15:31:34](https://lobste.rs/s/kycuyg/emacs_how_it_all_started_for_me) - [Emacs, how it all started (for me)](https://xvw.lol/en/articles/emacs-start.html)
* [2026-06-15, 15:13:06](https://news.ycombinator.com/item?id=48542480) - [Iroh 1.0](https://www.iroh.computer/blog/v1)
* [2026-06-15, 15:09:40](https://news.ycombinator.com/item?id=48542433) - [My Homelab AI Dev Platform](https://rsgm.dev/post/ai-dev-platform/)
* [2026-06-15, 15:00:00](https://slashdot.org/story/26/06/15/0546236/swiss-voters-reject-proposal-to-cap-population-at-10-million?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Swiss Voters Reject Proposal To Cap Population At 10 Million](https://slashdot.org/story/26/06/15/0546236/swiss-voters-reject-proposal-to-cap-population-at-10-million?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-15, 14:48:47](https://news.ycombinator.com/item?id=48542132) - [Copper transport drug restores memory and clears toxic Alzheimer&apos;s proteins](https://www.monash.edu/news/articles/copper-drug-restores-memory-and-clears-toxic-alzheimers-proteins)
* [2026-06-15, 14:46:53](https://news.ycombinator.com/item?id=48542100) - [Ask HN: Has anyone replaced Claude/GPT with a local model for daily coding?](https://news.ycombinator.com/item?id=48542100)
* [2026-06-15, 14:31:00](https://soylentnews.org/article.pl?sid=26/06/15/0013216&amp;from=rss) - [Influential Study Touting ChatGPT in Education Retracted Over Red Flags](https://soylentnews.org/article.pl?sid=26/06/15/0013216&amp;from=rss)
* [2026-06-15, 13:31:09](https://news.ycombinator.com/item?id=48541014) - [Can Europe train a frontier AI model on the compute it owns?](https://github.com/sammysltd/euromesh)
* [2026-06-15, 13:20:13](https://news.ycombinator.com/item?id=48540854) - [CrankGPT](https://crankgpt.com)
* [2026-06-15, 13:19:39](https://news.ycombinator.com/item?id=48540844) - [Hetzner Price Adjustment](https://docs.hetzner.com/general/infrastructure-and-availability/price-adjustment/#cloud-servers)
* [2026-06-15, 12:54:58](https://lobste.rs/s/rhrh3k/kage_shadow_any_website_for_offline) - [kage: Shadow any website for offline viewing, with the JavaScript stripped out](https://github.com/tamnd/kage)
* [2026-06-15, 12:53:51](https://lobste.rs/s/dwfhdc/your_epub_is_fine_kobo_disagrees_blame) - [Your EPUB Is Fine. Kobo Disagrees. Blame Adobe](https://andreklein.net/your-epub-is-fine-kobo-disagrees-blame-adobe/)
* [2026-06-15, 12:50:03](https://news.ycombinator.com/item?id=48540499) - [Fox to buy Roku](https://www.wsj.com/business/deals/fox-roku-deal-f6e564f9)
* [2026-06-15, 12:36:37](https://lobste.rs/s/eolbw3/xavier_leroy_s_new_book_on_control) - [Xavier Leroy&apos;s new book on Control Structures in Programming](https://xavierleroy.org/control-structures/book/index.html)
* [2026-06-15, 12:08:59](https://news.ycombinator.com/item?id=48540126) - [Salesforce to Acquire Fin (formerly Intercom) for $3.6B](https://www.salesforce.com/news/press-releases/2026/06/15/salesforce-signs-definitive-agreement-to-acquire-fin/?bc=HL)
* [2026-06-15, 11:34:00](https://news.slashdot.org/story/26/06/14/2227254/are-many-college-students-losing-the-ability-to-read?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Are Many College Students Losing the Ability to Read?](https://news.slashdot.org/story/26/06/14/2227254/are-many-college-students-losing-the-ability-to-read?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-15, 11:05:07](https://lobste.rs/s/htfm3p/pyinfra_agentless_infrastructure) - [pyinfra — agentless infrastructure automation, in plain Python](https://pyinfra.com)
* [2026-06-15, 10:23:34](https://lobste.rs/s/guyifg/removing_my_nix_flakes_vs_guix_post) - [Removing my nix flakes vs guix post](https://coopi.neocities.org/posts/taking-down-nix-flakes-vs-guix)
* [2026-06-15, 09:53:00](https://soylentnews.org/article.pl?sid=26/06/14/1921229&amp;from=rss) - [In First, California City Overwhelmingly Votes to Permanently Ban Datacenters](https://soylentnews.org/article.pl?sid=26/06/14/1921229&amp;from=rss)
* [2026-06-15, 09:46:08](https://lobste.rs/s/fwohh5/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/fwohh5/what_are_you_doing_this_week)
* [2026-06-15, 07:53:52](https://lobste.rs/s/uqagn2/curl_summer_bliss) - [curl summer of bliss](https://daniel.haxx.se/blog/2026/06/15/curl-summer-of-bliss/)
* [2026-06-15, 07:19:50](https://lobste.rs/s/udagdr/i_am_not_reverse_centaur) - [I Am Not a Reverse Centaur](https://blog.miguelgrinberg.com/post/i-am-not-a-reverse-centaur)
* [2026-06-15, 07:10:57](https://news.ycombinator.com/item?id=48537641) - [Openrouter Fusion API](https://openrouter.ai/openrouter/fusion)
* [2026-06-15, 07:04:00](https://it.slashdot.org/story/26/06/15/056249/it-workers-are-now-struggling-to-find-work-as-picky-companies-demand-ai-skills?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [IT Workers Are Now Struggling to Find Work, as &apos;Picky&apos; Companies Demand AI Skills](https://it.slashdot.org/story/26/06/15/056249/it-workers-are-now-struggling-to-find-work-as-picky-companies-demand-ai-skills?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-15, 07:00:22](https://news.ycombinator.com/item?id=48537556) - [Dalus (YC W25) Is Hiring a Senior Software Engineer in Germany](https://www.ycombinator.com/companies/dalus/jobs/5IDmKJt-senior-software-frontend-engineer-germany-office)
* [2026-06-15, 06:52:21](https://news.ycombinator.com/item?id=48537512) - [Improvement in advanced Alzheimer’s disease following high-dose psilocybin](https://www.frontiersin.org/journals/neuroscience/articles/10.3389/fnins.2026.1813281/full)
* [2026-06-15, 06:07:24](https://lobste.rs/s/xqxidz/parsing_json_at_compile_time_with_c_26) - [Parsing JSON at compile time with C++26 static reflection](https://lemire.me/blog/2026/06/14/parsing-json-at-compile-time-with-c26-static-reflection/)
* [2026-06-15, 05:55:24](https://lobste.rs/s/zieeza/only_scalable_delete_postgres_is_drop) - [The only scalable delete in Postgres is DROP TABLE](https://planetscale.com/blog/the-only-scalable-delete)
* [2026-06-15, 05:53:54](https://lobste.rs/s/mgbtd6/diplomat_multi_language_ffi_for_rust) - [Diplomat: Multi-language FFI for Rust Libraries](http://manishearth.github.io/blog/2026/06/14/diplomat-multi-language-ffi-for-rust-libraries/)
* [2026-06-15, 05:08:00](https://soylentnews.org/article.pl?sid=26/06/14/1916201&amp;from=rss) - [The Adder at the Heart of Intel&apos;s 8087 Floating-Point Chip](https://soylentnews.org/article.pl?sid=26/06/14/1916201&amp;from=rss)
* [2026-06-15, 04:55:34](https://news.ycombinator.com/item?id=48536776) - [Apple Foundation Models](https://platform.claude.com/docs/en/cli-sdks-libraries/libraries/apple-foundation-models)
* [2026-06-15, 04:44:07](https://lobste.rs/s/8jxpsq/clojure_is_almost_as_fast_as_c_with_some) - [Clojure is almost as fast as C (with some help)](https://ertu.dev/posts/4_clojure-reaching-c-performance/)
* [2026-06-15, 04:10:00](https://lobste.rs/s/kgpqam/mystery_solar_realms_elite_title_screen) - [The mystery of the Solar Realms Elite title screen](https://breakintochat.com/blog/2026/06/14/the-mystery-of-the-solar-realms-elite-title-screen/)
* [2026-06-15, 03:36:07](https://lobste.rs/s/jkowsn/datalog) - [Datalog](https://www.philipzucker.com/notes/Languages/datalog/)
* [2026-06-15, 03:29:47](https://lobste.rs/s/1xyby4/write_for_one_person) - [write for one person](https://wizardzines.com/comics/write-for-one-person/)
* [2026-06-15, 03:24:58](https://lobste.rs/s/dju5t9/speed_matters_for_google_web_search_2009) - [Speed Matters for Google Web Search [2009]](https://services.google.com/fh/files/blogs/google_delayexp.pdf)
* [2026-06-15, 02:31:00](https://news.slashdot.org/story/26/06/15/0229202/us-iran-peace-agreement-prompts-stock-rally-leaves-some-investors-skeptical-and-questions-on-speed-of-resuming-oil-production?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US-Iran Peace Agreement Prompts Stock Rally, Leaves Some Investors Skeptical and Questions on Speed of Resuming Oil Production](https://news.slashdot.org/story/26/06/15/0229202/us-iran-peace-agreement-prompts-stock-rally-leaves-some-investors-skeptical-and-questions-on-speed-of-resuming-oil-production?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-15, 02:30:25](https://news.ycombinator.com/item?id=48535886) - [Even more batteries included with Emacs](https://karthinks.com/software/even-more-batteries-included-with-emacs/)
* [2026-06-15, 01:19:00](https://it.slashdot.org/story/26/06/15/0117225/workers-spend-as-much-time-botsitting-ai-as-producing-useful-work-survey-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Workers Spend As Much Time &apos;Botsitting&apos; AI As Producing Useful Work, Survey Finds](https://it.slashdot.org/story/26/06/15/0117225/workers-spend-as-much-time-botsitting-ai-as-producing-useful-work-survey-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-15, 00:23:00](https://soylentnews.org/article.pl?sid=26/06/14/1914203&amp;from=rss) - [Physicists Refute Famous 2025 Study Claiming Daylight Saving Time Poses Severe Health Risks](https://soylentnews.org/article.pl?sid=26/06/14/1914203&amp;from=rss)
* [2026-06-14, 23:15:00](https://tech.slashdot.org/story/26/06/14/2312247/microsoft-updates-six-windows-apps-photos-gets-watermarks-for-copilot-images-off-by-default?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Updates Six Windows Apps.  &apos;Photos&apos; Gets Watermarks for Copilot Images (Off by Default)](https://tech.slashdot.org/story/26/06/14/2312247/microsoft-updates-six-windows-apps-photos-gets-watermarks-for-copilot-images-off-by-default?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-14, 22:54:55](https://news.ycombinator.com/item?id=48533848) - [Your ePub Is fine](https://andreklein.net/your-epub-is-fine-kobo-disagrees-blame-adobe/)
* [2026-06-14, 21:35:00](https://mobile.slashdot.org/story/26/06/14/2132212/uk-scientists-see-little-evidence-for-claims-smartphones-are-rewiring-kids-brains?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Scientists See Little Evidence for Claims Smartphones Are Rewiring Kids&apos; Brains](https://mobile.slashdot.org/story/26/06/14/2132212/uk-scientists-see-little-evidence-for-claims-smartphones-are-rewiring-kids-brains?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-14, 21:05:27](https://lobste.rs/s/0ichrt/zinnia_modular_64_bit_unix_like_kernel) - [zinnia: a modular 64-bit Unix-like kernel written in Rust](https://zinnia-os.org/)
* [2026-06-14, 20:11:00](https://entertainment.slashdot.org/story/26/06/14/208255/as-disclosure-day-premieres-steven-spielberg-says-he-believes-aliens-really-have-visited-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [As &apos;Disclosure Day&apos; Premieres, Steven Spielberg Says He Believes Aliens Really Have Visited Earth](https://entertainment.slashdot.org/story/26/06/14/208255/as-disclosure-day-premieres-steven-spielberg-says-he-believes-aliens-really-have-visited-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-14, 19:35:00](https://soylentnews.org/article.pl?sid=26/06/13/1539217&amp;from=rss) - [How Can Technical Solutions Expose Mass Surveillance?](https://soylentnews.org/article.pl?sid=26/06/13/1539217&amp;from=rss)
* [2026-06-14, 18:43:40](https://lobste.rs/s/wwbl1n/even_more_batteries_included_with_emacs) - [Even More Batteries Included With Emacs](https://karthinks.com/software/even-more-batteries-included-with-emacs/)
* [2026-06-14, 18:43:00](https://tech.slashdot.org/story/26/06/14/1842208/will-metas-14-billion-bet-on-ai-ever-pay-off?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Will Meta&apos;s $14 Billion Bet on AI Ever Pay Off?](https://tech.slashdot.org/story/26/06/14/1842208/will-metas-14-billion-bet-on-ai-ever-pay-off?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-14, 17:25:38](https://news.ycombinator.com/item?id=48529990) - [Show HN: Kage – Shadow any website to a single binary for offline viewing](https://github.com/tamnd/kage)
* [2026-06-14, 17:07:42](https://lobste.rs/s/lvodx4/deconstructing_datalog) - [Deconstructing Datalog](https://www.rntz.net/post/my-thesis.html)
* [2026-06-14, 16:34:00](https://linux.slashdot.org/story/26/06/14/0641257/vintage-amd-r600-graphics-driver-sees-code-cleanups-thanks-to-github-copilot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ Vintage AMD R600 Graphics Driver Sees Code Cleanups Thanks To GitHub Copilot](https://linux.slashdot.org/story/26/06/14/0641257/vintage-amd-r600-graphics-driver-sees-code-cleanups-thanks-to-github-copilot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-14, 15:52:09](https://news.ycombinator.com/item?id=48528587) - [Making glass-to-metal seals for home­made vacuum tubes](https://maurycyz.com/projects/glass/1/)
* [2026-06-14, 15:34:00](https://yro.slashdot.org/story/26/06/14/0354205/how-americas-energy-department-is-building-a-national-platform-for-doing-science-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How America&apos;s Energy Department is Building a National Platform for Doing Science with AI](https://yro.slashdot.org/story/26/06/14/0354205/how-americas-energy-department-is-building-a-national-platform-for-doing-science-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-14, 14:47:00](https://soylentnews.org/article.pl?sid=26/06/13/1530216&amp;from=rss) - [Scientists Gave an Octopus a Mirror. Here’s What Happened Next ](https://soylentnews.org/article.pl?sid=26/06/13/1530216&amp;from=rss)
* [2026-06-14, 14:34:00](https://games.slashdot.org/story/26/06/14/0743231/blizzard-sues-to-take-down-another-private-world-of-warcraft-server-project-ascension?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Blizzard Sues To Take Down Another Private World of Warcraft Server, Project Ascension ](https://games.slashdot.org/story/26/06/14/0743231/blizzard-sues-to-take-down-another-private-world-of-warcraft-server-project-ascension?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-14, 10:03:00](https://soylentnews.org/article.pl?sid=26/06/13/1438234&amp;from=rss) - [Tests Suggest Russian Satellites Can Jam GPS on a Continental Scale](https://soylentnews.org/article.pl?sid=26/06/13/1438234&amp;from=rss)
* [2026-06-14, 05:20:00](https://soylentnews.org/article.pl?sid=26/06/13/1424211&amp;from=rss) - [“Atomic Arch”: Nearly 900 AUR Packages Backdoored with an Infostealer and eBPF Rootkit](https://soylentnews.org/article.pl?sid=26/06/13/1424211&amp;from=rss)
* [2026-06-14, 00:37:00](https://soylentnews.org/article.pl?sid=26/06/12/178256&amp;from=rss) - [ASML Becomes Europe&apos;s Most Valuable Company Ever As Analysts Bet On Higher EUV Output](https://soylentnews.org/article.pl?sid=26/06/12/178256&amp;from=rss)
* [2026-06-13, 19:54:00](https://soylentnews.org/article.pl?sid=26/06/12/1645227&amp;from=rss) - [Intel Intro&apos;d ‘The First Processor In The X86 Series And The First 8086 Microprocessor’ On This Day](https://soylentnews.org/article.pl?sid=26/06/12/1645227&amp;from=rss)
* [2026-06-13, 15:08:00](https://soylentnews.org/article.pl?sid=26/06/12/1339210&amp;from=rss) - [Researchers Put AI Chatbots in Charge of a Simulated World. This One Destroyed Everything in 4 Days](https://soylentnews.org/article.pl?sid=26/06/12/1339210&amp;from=rss)
* [2026-06-13, 10:25:00](https://soylentnews.org/article.pl?sid=26/06/12/1337219&amp;from=rss) - [Officials Powerless to Stop 8 New Data Centers That Could Transform Small Texas County](https://soylentnews.org/article.pl?sid=26/06/12/1337219&amp;from=rss)
* [2026-06-13, 05:39:00](https://soylentnews.org/article.pl?sid=26/06/12/1141258&amp;from=rss) - [Cities Can&apos;t Figure Out How to Turn Off Flock Cameras, So They&apos;re Using Trash Bags](https://soylentnews.org/article.pl?sid=26/06/12/1141258&amp;from=rss)
* [2026-06-13, 00:56:00](https://soylentnews.org/article.pl?sid=26/06/12/1136247&amp;from=rss) - [Yoti Flagged a Playstation User to Authorities for Running GrapheneOS on Their Phone](https://soylentnews.org/article.pl?sid=26/06/12/1136247&amp;from=rss)
* [2026-06-12, 20:12:00](https://soylentnews.org/article.pl?sid=26/06/12/1133204&amp;from=rss) - [Finland Deploys New System to Detect Threats to Undersea Cables](https://soylentnews.org/article.pl?sid=26/06/12/1133204&amp;from=rss)
* [2026-06-12, 17:30:57](https://news.ycombinator.com/item?id=48506980) - [Ported my C game to WASM, here&apos;s every bug that I hit](http://ernesernesto.github.io/writes/portingmatchmorphosistowasm/)
* [2026-06-12, 15:29:00](https://soylentnews.org/article.pl?sid=26/06/11/0213228&amp;from=rss) - [Google Liable for AI Overview Falsehoods](https://soylentnews.org/article.pl?sid=26/06/11/0213228&amp;from=rss)
* [2026-06-12, 10:43:00](https://soylentnews.org/article.pl?sid=26/06/11/022206&amp;from=rss) - [You Can Now Get a Religious Exemption From Using AI at Work](https://soylentnews.org/article.pl?sid=26/06/11/022206&amp;from=rss)
* [2026-06-12, 07:39:46](https://news.ycombinator.com/item?id=48501044) - [Building a plugin system without runtime, storage, or shared JavaScript context](https://tolgee.io/blog/building-a-plugin-system-for-tolgee-without-a-runtime-storage-or-shared-js-context)
* [2026-06-12, 05:51:00](https://soylentnews.org/article.pl?sid=26/06/11/027248&amp;from=rss) - [Lexar Regional Manager Says That RAM Prices Are Expected To Double By The End Of The Year ](https://soylentnews.org/article.pl?sid=26/06/11/027248&amp;from=rss)
* [2026-06-12, 01:18:00](https://soylentnews.org/article.pl?sid=26/06/11/020204&amp;from=rss) - [62 Year Old Dutch Man Marries The Chatbot Of His Dreams](https://soylentnews.org/article.pl?sid=26/06/11/020204&amp;from=rss)
* [2026-06-11, 20:28:00](https://soylentnews.org/article.pl?sid=26/06/10/186244&amp;from=rss) - [DUPE: World’s First Wind-powered Underwater Datacentre Starts Operating in China](https://soylentnews.org/article.pl?sid=26/06/10/186244&amp;from=rss)
* [2026-06-11, 15:43:00](https://soylentnews.org/article.pl?sid=26/06/10/183253&amp;from=rss) - [Donut Labs Much Reported &apos;Solid-State Sodium Ion Battery&apos; Appears to be Lithium Ion, After All](https://soylentnews.org/article.pl?sid=26/06/10/183253&amp;from=rss)
* [2026-06-11, 11:57:03](https://news.ycombinator.com/item?id=48489163) - [Show HN: Fata – Spaced repetition to fight skill rot from AI coding](https://fata.dev)
* [2026-06-11, 10:58:00](https://soylentnews.org/article.pl?sid=26/06/10/1134227&amp;from=rss) - [Google Signs $920M Monthly Compute Deal With SpaceX ](https://soylentnews.org/article.pl?sid=26/06/10/1134227&amp;from=rss)
* [2026-06-11, 06:13:00](https://soylentnews.org/article.pl?sid=26/06/10/1126222&amp;from=rss) - [Canonical Sends Ubuntu Into the AI Agent Era](https://soylentnews.org/article.pl?sid=26/06/10/1126222&amp;from=rss)
* [2026-06-11, 02:22:06](https://news.ycombinator.com/item?id=48485527) - [Teenagers Stayed Overnight at Their School and Found Hidden Ancient Roman Ruins](https://www.smithsonianmag.com/smart-news/these-italian-teenagers-stayed-overnight-at-their-school-they-found-ancient-roman-ruins-hidden-in-the-basement-180988917/)
* [2026-06-11, 01:30:00](https://soylentnews.org/article.pl?sid=26/06/10/1111258&amp;from=rss) - [S&amp;P 500 Rejects SpaceX, Also Blocking Entry for OpenAI and Anthropic](https://soylentnews.org/article.pl?sid=26/06/10/1111258&amp;from=rss)
