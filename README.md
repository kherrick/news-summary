# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Advancements & Innovations

* [Microsoft's CTO Hopes to Swap Most AMD and NVIDIA GPUs for In-House Chips](https://hardware.slashdot.org/story/25/10/04/2142243/microsofts-cto-hopes-to-swap-most-amd-and-nvidia-gpus-for-in-house-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Microsoft's move to develop its own GPUs could have major implications for the tech ecosystem.

* [Signal Braces For Quantum Age With SPQR Encryption Upgrade](https://it.slashdot.org/story/25/10/03/234236/signal-braces-for-quantum-age-with-spqr-encryption-upgrade?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The secure messaging app prepares for the challenges posed by quantum computing with a specialized encryption upgrade.

* [Alibaba cloud FPGA: the $200 Kintex UltraScale+](https://essenceia.github.io/projects/alibaba_cloud_fpga/) - An exploration of a $200 FPGA from Alibaba Cloud with significant potential for computing advancements.

## Privacy, Security, and Surveillance

* [A UK Police Force Suspends Working From Home After Finding Automated Keystroke Scam](https://news.slashdot.org/story/25/10/04/209200/a-uk-police-force-suspends-working-from-home-after-finding-automated-keystroke-scam?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Concerns over workplace scams lead to policy changes in the UK police department.

* [The UK is Still Trying to Backdoor Encryption for Apple Users](https://www.eff.org/deeplinks/2025/10/uk-still-trying-backdoor-encryption-apple-users) - Ongoing efforts in the UK to breach encryption raise alarm in advocacy groups.

* [Amazon's Ring Plans to Scan Everyone's Face at the Door](https://yro.slashdot.org/story/25/10/04/0357255/amazons-ring-plans-to-scan-everyones-face-at-the-door?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Controversial plans to expand facial recognition technology in Ring doorbells spark privacy concerns.

## AI and Computing Developments

* [Scientists Grow Mini Human Brains To Power Computers](https://science.slashdot.org/story/25/10/04/0729235/scientists-grow-mini-human-brains-to-power-computers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A groundbreaking study on integrating biological elements with computer systems.

* [ProofOfThought: LLM-based reasoning using Z3 theorem proving](https://github.com/DebarghaG/proofofthought) - Exploring advanced LLM reasoning capabilities enhanced by theorem proving.

* [Google's Jules Enters Developers' Toolchains As AI Coding Agent Competition Heats Up](https://developers.slashdot.org/story/25/10/03/2140223/googles-jules-enters-developers-toolchains-as-ai-coding-agent-competition-heats-up?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Google's push into AI-assisted programming tools highlights increased competition in this sector.

## Scientific Discoveries

* [Why Do Women Outlive Men? A Study of 1,176 Species Points to an Answer](https://science.slashdot.org/story/25/10/04/0427230/why-do-women-outlive-men-a-study-of-1176-species-points-to-an-answer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A comprehensive study sheds light on lifespan differences across species.

* [Far Side of the Moon May be Colder Than the Near Side, Lunar Rocks Suggest](https://soylentnews.org/article.pl?sid=25/10/02/1410217&amp;from=rss) - Fascinating insights into temperature variations on the moon's surface.

* [Scientists are Discovering a Powerful New Way to Prevent Cancer](https://www.economist.com/science-and-technology/2025/09/02/scientists-are-discovering-a-powerful-new-way-to-prevent-cancer) - Innovative methods are paving the way for potential cancer prevention breakthroughs.

## Society & Regulation

* [New California Law Restricts HOA Fines to $100 per Violation](https://calmatters.org/politics/2025/10/california-hoas-fines-capped/) - Legislation aims to curb excessive HOA fines in California.

* [Indonesia Suspends TikTok Registration With Over 100 Million Accounts At Risk](https://yro.slashdot.org/story/25/10/03/231243/indonesia-suspends-tiktok-registration-with-over-100-million-accounts-at-risk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Social media giant faces a major regulatory hurdle in Southeast Asia.

* [SEC Approves Texas Stock Exchange](https://yro.slashdot.org/story/25/10/03/2224246/sec-approves-texas-stock-exchange?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A new stock exchange to operate in Texas gains approval, introducing potential changes to the financial landscape.

## Community and Open Source Contributions

* [The Free Software Foundation is Livestreaming Its 40th Anniversary Celebration](https://news.slashdot.org/story/25/10/04/1854250/the-free-software-foundation-is-livestreaming-its-40th-anniversary-celebration?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Celebrating the Free Software Foundation's four decades of contributions.

* [OpenAI and Nvidia's $100B AI Plan Will Require Power Equal to 10 Nuclear Reactors](https://soylentnews.org/article.pl?sid=25/09/29/018254&amp;from=rss) - Evaluating the energy demands of cutting-edge AI projects and their environmental impact.

* [Retiring test-ipv6.com](https://retire.test-ipv6.com/) - The closure of a valuable IPv6 testing resource marks an end of support for a helpful tool in the tech community.

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

* [2025-10-04, 21:49:00](https://hardware.slashdot.org/story/25/10/04/2142243/microsofts-cto-hopes-to-swap-most-amd-and-nvidia-gpus-for-in-house-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft&apos;s CTO Hopes to Swap Most AMD and NVIDIA GPUs for In-House Chips](https://hardware.slashdot.org/story/25/10/04/2142243/microsofts-cto-hopes-to-swap-most-amd-and-nvidia-gpus-for-in-house-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-04, 21:22:05](https://news.ycombinator.com/item?id=45476820) - [$912 energy independence without red tape](https://sunboxlabs.com/)
* [2025-10-04, 21:14:35](https://news.ycombinator.com/item?id=45476773) - [New California law restricts HOA fines to $100 per violation](https://calmatters.org/politics/2025/10/california-hoas-fines-capped/)
* [2025-10-04, 20:49:00](https://news.slashdot.org/story/25/10/04/209200/a-uk-police-force-suspends-working-from-home-after-finding-automated-keystroke-scam?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A UK Police Force Suspends Working From Home After Finding Automated Keystroke Scam](https://news.slashdot.org/story/25/10/04/209200/a-uk-police-force-suspends-working-from-home-after-finding-automated-keystroke-scam?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-04, 20:07:11](https://news.ycombinator.com/item?id=45476273) - [The UK is still trying to backdoor encryption for Apple users](https://www.eff.org/deeplinks/2025/10/uk-still-trying-backdoor-encryption-apple-users)
* [2025-10-04, 19:48:15](https://lobste.rs/s/kmtpqb/cuckoo_hashing_improves_simd_hash_tables) - [Cuckoo hashing improves SIMD hash tables](https://reiner.org/cuckoo-hashing)
* [2025-10-04, 19:19:00](https://news.slashdot.org/story/25/10/04/1854250/the-free-software-foundation-is-livestreaming-its-40th-anniversary-celebration?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Free Software Foundation is Livestreaming Its 40th Anniversary Celebration](https://news.slashdot.org/story/25/10/04/1854250/the-free-software-foundation-is-livestreaming-its-40th-anniversary-celebration?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-04, 19:14:36](https://lobste.rs/s/rlencm/self_hosting_email_like_it_s_1984) - [Self-Hosting Email Like It’s 1984](https://maxadamski.com/blog/2025/10/email.html)
* [2025-10-04, 19:08:46](https://news.ycombinator.com/item?id=45475808) - [Blog Feeds](https://blogfeeds.net)
* [2025-10-04, 18:49:00](https://science.slashdot.org/story/25/10/04/0427230/why-do-women-outlive-men-a-study-of-1176-species-points-to-an-answer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why Do Women Outlive Men?  A Study of 1,176 Species Points to an Answer](https://science.slashdot.org/story/25/10/04/0427230/why-do-women-outlive-men-a-study-of-1176-species-points-to-an-answer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-04, 18:41:04](https://lobste.rs/s/rhl369/retiring_test_ipv6_com) - [Retiring test-ipv6.com](https://retire.test-ipv6.com/)
* [2025-10-04, 18:34:23](https://news.ycombinator.com/item?id=45475529) - [ProofOfThought: LLM-based reasoning using Z3 theorem proving](https://github.com/DebarghaG/proofofthought)
* [2025-10-04, 18:34:13](https://news.ycombinator.com/item?id=45475528) - [Show HN: Run – a CLI universal code runner I built while learning Rust](https://github.com/Esubaalew/run)
* [2025-10-04, 18:26:29](https://news.ycombinator.com/item?id=45475471) - [Provable Scaling Laws of Feature Emergence from Learning Dynamics of Grokking](https://arxiv.org/abs/2509.21519)
* [2025-10-04, 18:23:12](https://lobste.rs/s/6fhm1u/mac_like_experience_on_linux) - [A Mac-like experience on Linux](https://pointieststick.com/2025/10/04/a-mac-like-experience-on-linux/)
* [2025-10-04, 18:17:00](https://soylentnews.org/article.pl?sid=25/10/03/1516247&amp;from=rss) - [How Charlie Brown Captured the US Psyche](https://soylentnews.org/article.pl?sid=25/10/03/1516247&amp;from=rss)
* [2025-10-04, 17:49:00](https://news.slashdot.org/story/25/10/04/1746211/the-school-that-replaces-teachers-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The School That Replaces Teachers With AI](https://news.slashdot.org/story/25/10/04/1746211/the-school-that-replaces-teachers-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-04, 17:18:07](https://news.ycombinator.com/item?id=45474900) - [How to inject knowledge efficiently? Knowledge infusion scaling law for LLMs](https://arxiv.org/abs/2509.19371)
* [2025-10-04, 16:43:31](https://lobste.rs/s/bokqwe/breaking_provably_correct_leftpad) - [Breaking “provably correct” Leftpad](https://lukeplant.me.uk/blog/posts/breaking-provably-correct-leftpad/)
* [2025-10-04, 16:34:00](https://hardware.slashdot.org/story/25/10/04/0257229/cnn-warns-food-delivery-robots-are-not-our-friends?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CNN Warns Food Delivery Robots &apos;Are Not Our Friends&apos;](https://hardware.slashdot.org/story/25/10/04/0257229/cnn-warns-food-delivery-robots-are-not-our-friends?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-04, 16:12:54](https://lobste.rs/s/vpjhmi/apertus_fully_open_transparent) - [Apertus: a fully open, transparent, multilingual language model](https://ethz.ch/en/news-and-events/eth-news/news/2025/09/press-release-apertus-a-fully-open-transparent-multilingual-language-model.html)
* [2025-10-04, 16:10:43](https://lobste.rs/s/lbbxh6/lolremez_polynomial_approximations) - [lolremez: Polynomial Approximations using the Remez Algorithm](https://github.com/samhocevar/lolremez)
* [2025-10-04, 15:40:05](https://lobste.rs/s/39qa6r/stone_tools_exploring_retro) - [Stone Tools: Exploring retro productivity software from the 8/16-bit era](https://stonetools.ghost.io/)
* [2025-10-04, 15:34:00](https://science.slashdot.org/story/25/10/04/0729235/scientists-grow-mini-human-brains-to-power-computers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Grow Mini Human Brains To Power Computers](https://science.slashdot.org/story/25/10/04/0729235/scientists-grow-mini-human-brains-to-power-computers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-04, 15:30:56](https://lobste.rs/s/koy025/delimited_continuations_lone_lisp) - [Delimited continuations in lone lisp](https://www.matheusmoreira.com/articles/delimited-continuations-in-lone-lisp)
* [2025-10-04, 15:10:49](https://news.ycombinator.com/item?id=45473861) - [A comparison of Ada and Rust, using solutions to the Advent of Code](https://github.com/johnperry-math/AoC2023/blob/master/More_Detailed_Comparison.md)
* [2025-10-04, 15:09:41](https://news.ycombinator.com/item?id=45473852) - [How I influence tech company politics as a staff software engineer](https://www.seangoedecke.com/how-to-influence-politics/)
* [2025-10-04, 14:53:32](https://news.ycombinator.com/item?id=45473730) - [Self-hosting email like it&apos;s 1984](https://maxadamski.com/blog/2025/10/email.html)
* [2025-10-04, 14:34:00](https://yro.slashdot.org/story/25/10/04/0357255/amazons-ring-plans-to-scan-everyones-face-at-the-door?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon&apos;s Ring Plans to Scan Everyone&apos;s Face at the Door](https://yro.slashdot.org/story/25/10/04/0357255/amazons-ring-plans-to-scan-everyones-face-at-the-door?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-04, 14:23:01](https://lobste.rs/s/sqe654/game_development_history_industry) - [Game Development: History, Industry, and Engine Design](https://spiiin.github.io/blog/490626496/)
* [2025-10-04, 13:33:00](https://soylentnews.org/article.pl?sid=25/10/02/1413244&amp;from=rss) - [Scientists Catch a Shark Threesome on Camera](https://soylentnews.org/article.pl?sid=25/10/02/1413244&amp;from=rss)
* [2025-10-04, 12:38:07](https://lobste.rs/s/by9vog/oswald_object_storage_write_ahead_log) - [OSWALD - Object Storage Write-Ahead Log Device](https://nvartolomei.com/oswald/)
* [2025-10-04, 12:16:37](https://news.ycombinator.com/item?id=45472765) - [Thunderscan: A clever device transforms a printer into a scanner (2004)](https://www.folklore.org/Thunderscan.html)
* [2025-10-04, 12:15:49](https://lobste.rs/s/f9vq85/thunderscan_clever_device_transforms) - [Thunderscan: A clever device transforms a printer into a scanner](https://www.folklore.org/Thunderscan.html)
* [2025-10-04, 11:58:58](https://news.ycombinator.com/item?id=45472678) - [The Buchstabenmuseum Berlin is closing](https://www.buchstabenmuseum.de/en/)
* [2025-10-04, 11:44:15](https://news.ycombinator.com/item?id=45472614) - [Scientists are discovering a powerful new way to prevent cancer](https://www.economist.com/science-and-technology/2025/09/02/scientists-are-discovering-a-powerful-new-way-to-prevent-cancer)
* [2025-10-04, 10:38:06](https://news.ycombinator.com/item?id=45472319) - [Paged Out Issue #7 [pdf]](https://pagedout.institute/download/PagedOut_007.pdf)
* [2025-10-04, 10:36:55](https://lobste.rs/s/dvtmwq/paged_out_issue_7) - [Paged Out! Issue #7](https://pagedout.institute/download/PagedOut_007.pdf)
* [2025-10-04, 08:07:00](https://soylentnews.org/article.pl?sid=25/10/02/1410217&amp;from=rss) - [Far Side of the Moon May be Colder Than the Near Side, Lunar Rocks Suggest](https://soylentnews.org/article.pl?sid=25/10/02/1410217&amp;from=rss)
* [2025-10-04, 07:00:00](https://it.slashdot.org/story/25/10/03/234236/signal-braces-for-quantum-age-with-spqr-encryption-upgrade?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Signal Braces For Quantum Age With SPQR Encryption Upgrade](https://it.slashdot.org/story/25/10/03/234236/signal-braces-for-quantum-age-with-spqr-encryption-upgrade?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-04, 06:49:58](https://news.ycombinator.com/item?id=45471136) - [Alibaba cloud FPGA: the $200 Kintex UltraScale+](https://essenceia.github.io/projects/alibaba_cloud_fpga/)
* [2025-10-04, 06:23:52](https://lobste.rs/s/dvke0c/you_can_t_parse_xml_with_regex_let_s_do_it) - [You can&apos;t parse XML with regex. Let&apos;s do it anyways](https://sdomi.pl/weblog/26-nobody-here-is-free-of-sin/)
* [2025-10-04, 04:01:00](https://soylentnews.org/article.pl?sid=25/10/02/146250&amp;from=rss) - [The Armed Forces of Austria Upgrade to LibreOffice and the OpenDocument Format](https://soylentnews.org/article.pl?sid=25/10/02/146250&amp;from=rss)
* [2025-10-04, 03:30:00](https://yro.slashdot.org/story/25/10/03/231243/indonesia-suspends-tiktok-registration-with-over-100-million-accounts-at-risk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Indonesia Suspends TikTok Registration With Over 100 Million Accounts At Risk](https://yro.slashdot.org/story/25/10/03/231243/indonesia-suspends-tiktok-registration-with-over-100-million-accounts-at-risk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-04, 02:02:00](https://tech.slashdot.org/story/25/10/03/2248228/google-is-ending-gmailify-and-pop-support?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Is Ending Gmailify and POP Support](https://tech.slashdot.org/story/25/10/03/2248228/google-is-ending-gmailify-and-pop-support?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-04, 01:53:48](https://lobste.rs/s/5u9gm7/don_t_parse_call) - [Don&apos;t Parse, Call](https://timkellogg.me/blog/2025/10/03/functions)
* [2025-10-04, 01:25:00](https://meta.slashdot.org/story/25/10/03/2235209/bay-area-university-issues-warning-over-man-using-meta-ai-glasses-on-campus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bay Area University Issues Warning Over Man Using Meta AI Glasses On Campus](https://meta.slashdot.org/story/25/10/03/2235209/bay-area-university-issues-warning-over-man-using-meta-ai-glasses-on-campus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-04, 01:09:37](https://news.ycombinator.com/item?id=45469579) - [New antibiotic targets IBD and AI predicted how it would work](https://healthsci.mcmaster.ca/new-antibiotic-targets-ibd-and-ai-predicted-how-it-would-work-before-scientists-could-prove-it/)
* [2025-10-04, 00:47:00](https://lobste.rs/s/6gfkgq/how_we_re_redesigning_audacity_for_future) - [How We&apos;re Redesigning Audacity For The Future](https://youtu.be/QYM3TWf_G38)
* [2025-10-04, 00:45:00](https://yro.slashdot.org/story/25/10/03/2224246/sec-approves-texas-stock-exchange?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SEC Approves Texas Stock Exchange](https://yro.slashdot.org/story/25/10/03/2224246/sec-approves-texas-stock-exchange?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-04, 00:02:00](https://developers.slashdot.org/story/25/10/03/2140223/googles-jules-enters-developers-toolchains-as-ai-coding-agent-competition-heats-up?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s Jules Enters Developers&apos; Toolchains As AI Coding Agent Competition Heats Up](https://developers.slashdot.org/story/25/10/03/2140223/googles-jules-enters-developers-toolchains-as-ai-coding-agent-competition-heats-up?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-03, 23:20:00](https://mobile.slashdot.org/story/25/10/03/2131218/thwarted-plot-to-cripple-cell-service-in-ny-was-bigger-than-first-thought?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Thwarted Plot To Cripple Cell Service In NY Was Bigger Than First Thought](https://mobile.slashdot.org/story/25/10/03/2131218/thwarted-plot-to-cripple-cell-service-in-ny-was-bigger-than-first-thought?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-03, 23:18:00](https://soylentnews.org/article.pl?sid=25/10/02/1231211&amp;from=rss) - [NASA Boss Says US Should Have ‘Village’ on Moon in a Decade](https://soylentnews.org/article.pl?sid=25/10/02/1231211&amp;from=rss)
* [2025-10-03, 22:46:44](https://lobste.rs/s/d9varu/zig_builds_are_getting_faster) - [Zig Builds Are Getting Faster](https://mitchellh.com/writing/zig-builds-getting-faster)
* [2025-10-03, 22:45:28](https://news.ycombinator.com/item?id=45468698) - [Zig builds are getting faster](https://mitchellh.com/writing/zig-builds-getting-faster)
* [2025-10-03, 21:12:39](https://lobste.rs/s/wqrwdw/end_tt_rss_org) - [The end of tt-rss.org](https://community.tt-rss.org/t/the-end-of-tt-rss-org/7164)
* [2025-10-03, 20:36:03](https://news.ycombinator.com/item?id=45467500) - [Offline card payments should be possible no later than 1 July 2026](https://www.riksbank.se/en-gb/press-and-published/notices-and-press-releases/press-releases/2025/offline-card-payments-should-be-possible-no-later-than-1-july-2026/)
* [2025-10-03, 19:49:36](https://lobste.rs/s/bqecne/pep_810_explicit_lazy_imports) - [PEP 810: Explicit lazy imports](https://discuss.python.org/t/pep-810-explicit-lazy-imports/104131)
* [2025-10-03, 19:41:27](https://lobste.rs/s/0o2pgj/wireguard_topologies_for_self_hosting_at) - [WireGuard topologies for self-hosting at home](https://garrido.io/notes/wireguard-topologies-for-self-hosting-at-home/)
* [2025-10-03, 18:34:00](https://soylentnews.org/article.pl?sid=25/10/02/1226238&amp;from=rss) - [CISA Warns of Critical Linux Sudo Flaw Exploited in Attacks](https://soylentnews.org/article.pl?sid=25/10/02/1226238&amp;from=rss)
* [2025-10-03, 18:24:58](https://news.ycombinator.com/item?id=45466086) - [PEP 810 – Explicit lazy imports](https://peps.python.org/pep-0810/)
* [2025-10-03, 17:36:32](https://lobste.rs/s/aro0ic/jank_community_has_stepped_up) - [The jank community has stepped up](https://jank-lang.org/blog/2025-10-03-community/)
* [2025-10-03, 16:16:55](https://lobste.rs/s/d4batn/cancelling_async_rust) - [Cancelling async Rust](https://sunshowers.io/posts/cancelling-async-rust/)
* [2025-10-03, 16:05:29](https://lobste.rs/s/nzukgn/atuin_desktop_runbooks_run) - [Atuin desktop: Runbooks that run](https://github.com/atuinsh/desktop)
* [2025-10-03, 15:48:47](https://lobste.rs/s/5dlmct/hey_siri_block_reddit) - [Hey Siri. Block Reddit](https://www.jasontokoph.com/hey-siri-block-reddit/)
* [2025-10-03, 14:43:12](https://lobste.rs/s/ebared/fundraising_campaign_sustain_gnu_guix) - [Fundraising campaign to sustain GNU Guix](https://guix.gnu.org/en/blog/2025/fundraising-campaign-to-sustain-gnu-guix/)
* [2025-10-03, 13:51:00](https://soylentnews.org/article.pl?sid=25/10/02/1054255&amp;from=rss) - [Photodiode Design Using Germanium Solves Key Challenge in on-Chip Light Monitoring](https://soylentnews.org/article.pl?sid=25/10/02/1054255&amp;from=rss)
* [2025-10-03, 09:06:00](https://soylentnews.org/article.pl?sid=25/10/02/1052258&amp;from=rss) - [ICE to Buy Tool that Tracks Locations of Hundreds of Millions of Phones](https://soylentnews.org/article.pl?sid=25/10/02/1052258&amp;from=rss)
* [2025-10-03, 04:21:00](https://soylentnews.org/article.pl?sid=25/10/01/2332257&amp;from=rss) - [AI Coding is Massively Overhyped, Report Finds](https://soylentnews.org/article.pl?sid=25/10/01/2332257&amp;from=rss)
* [2025-10-02, 23:35:00](https://soylentnews.org/article.pl?sid=25/09/30/1336240&amp;from=rss) - [Mix Insect, Plant and Cultivated Proteins for Healthier, Greener, Tastier Food, Say Experts](https://soylentnews.org/article.pl?sid=25/09/30/1336240&amp;from=rss)
* [2025-10-02, 20:31:43](https://news.ycombinator.com/item?id=45455164) - [Where it&apos;s at://](https://overreacted.io/where-its-at/)
* [2025-10-02, 18:46:00](https://soylentnews.org/article.pl?sid=25/09/30/1328225&amp;from=rss) - [Complex Knots Can Actually be Easier to Untie Than Simple Ones](https://soylentnews.org/article.pl?sid=25/09/30/1328225&amp;from=rss)
* [2025-10-02, 14:03:00](https://soylentnews.org/article.pl?sid=25/09/30/1323239&amp;from=rss) - [Huawei’s Ternary Logic Breakthrough: a Game-Changer or Just Hype?](https://soylentnews.org/article.pl?sid=25/09/30/1323239&amp;from=rss)
* [2025-10-02, 09:16:00](https://soylentnews.org/article.pl?sid=25/09/30/1249215&amp;from=rss) - [Experts Alarmed That AI is Now Producing Functional Viruses](https://soylentnews.org/article.pl?sid=25/09/30/1249215&amp;from=rss)
* [2025-10-02, 04:31:00](https://soylentnews.org/article.pl?sid=25/09/30/0352206&amp;from=rss) - [Scientists Unlock Secret to Thick, Stable Beer Foams](https://soylentnews.org/article.pl?sid=25/09/30/0352206&amp;from=rss)
* [2025-10-01, 23:47:00](https://soylentnews.org/article.pl?sid=25/09/30/0349204&amp;from=rss) - [Explainer: Why a Decades Old Architecture Decision is Impeding the Power of AI Computing](https://soylentnews.org/article.pl?sid=25/09/30/0349204&amp;from=rss)
* [2025-10-01, 21:15:44](https://news.ycombinator.com/item?id=45443662) - [Study confirms that pianists can shape piano timbre through touch](https://neurosciencenews.com/piano-touch-timbre-neuroscience-29755/)
* [2025-10-01, 19:02:00](https://soylentnews.org/article.pl?sid=25/09/30/0346236&amp;from=rss) - [This Black Hole Flipped its Magnetic Field](https://soylentnews.org/article.pl?sid=25/09/30/0346236&amp;from=rss)
* [2025-10-01, 17:05:38](https://news.ycombinator.com/item?id=45440180) - [Clavier: An FPGA-based mechanical keyboard with USB hub and comms interfaces](https://github.com/lsartory/Clavier)
* [2025-10-01, 14:15:00](https://soylentnews.org/article.pl?sid=25/09/30/0336248&amp;from=rss) - [Claude&apos;s New AI File Creation Feature Ships With Deep Security Risks Built in](https://soylentnews.org/article.pl?sid=25/09/30/0336248&amp;from=rss)
* [2025-10-01, 12:45:52](https://news.ycombinator.com/item?id=45437044) - [Five years as a startup CTO: How, why, and was it worth it? (2024)](https://distinctplace.com/2024/09/11/five-years-as-startup-cto-was-it-all-worth-it/)
* [2025-10-01, 10:51:37](https://news.ycombinator.com/item?id=45436289) - [Systems Programming with Zig](https://www.manning.com/books/systems-programming-with-zig)
* [2025-10-01, 09:32:00](https://soylentnews.org/article.pl?sid=25/09/29/0143218&amp;from=rss) - [Shopify Engages in Hostile Takeover of RubyGems and Bundler](https://soylentnews.org/article.pl?sid=25/09/29/0143218&amp;from=rss)
* [2025-10-01, 04:49:00](https://soylentnews.org/article.pl?sid=25/09/29/0130236&amp;from=rss) - [Workslop - the Result of Too Much Clueless AI](https://soylentnews.org/article.pl?sid=25/09/29/0130236&amp;from=rss)
* [2025-10-01, 03:15:23](https://news.ycombinator.com/item?id=45433936) - [Baseball durations after the pitch clock](https://leancrew.com/all-this/2025/09/baseball-durations-after-the-pitch-clock/)
* [2025-10-01, 02:35:04](https://news.ycombinator.com/item?id=45433743) - [The mini smartphones from Japan you&apos;ve never heard about [video]](https://www.youtube.com/watch?v=_e27TfHibTg)
* [2025-10-01, 00:05:00](https://soylentnews.org/article.pl?sid=25/09/29/0126248&amp;from=rss) - [Inequality in Agri-Food Chains: Global South Produces the Food, the Global North Keeps the Wealth](https://soylentnews.org/article.pl?sid=25/09/29/0126248&amp;from=rss)
* [2025-09-30, 20:54:45](https://news.ycombinator.com/item?id=45431115) - [Show HN: Cobalt – a pixel-art painting studio for the Nintendo DS](https://benbridle.com/projects/cobalt.html)
* [2025-09-30, 19:24:00](https://soylentnews.org/article.pl?sid=25/09/29/0124238&amp;from=rss) - [Details Beginning to Emerge About Australia&apos;s Social Media Ban](https://soylentnews.org/article.pl?sid=25/09/29/0124238&amp;from=rss)
* [2025-09-30, 16:54:43](https://news.ycombinator.com/item?id=45427972) - [Earth was born dry until a cosmic collision made it a blue planet](https://www.sciencedaily.com/releases/2025/09/250928095654.htm)
* [2025-09-30, 14:39:00](https://soylentnews.org/article.pl?sid=25/09/29/0111207&amp;from=rss) - [Forty Years of Commitment to Software Freedom](https://soylentnews.org/article.pl?sid=25/09/29/0111207&amp;from=rss)
* [2025-09-30, 09:57:00](https://soylentnews.org/article.pl?sid=25/09/29/018254&amp;from=rss) - [OpenAI and Nvidia’s $100B AI Plan Will Require Power Equal to 10 Nuclear Reactors](https://soylentnews.org/article.pl?sid=25/09/29/018254&amp;from=rss)
* [2025-09-30, 05:15:40](https://news.ycombinator.com/item?id=45422147) - [Fluid Glass](https://chiuhans111.github.io/fluidglass/)
* [2025-09-30, 05:15:00](https://soylentnews.org/article.pl?sid=25/09/29/0055259&amp;from=rss) - [Think Twice Before Abandoning X11. Wayland Breaks Everything!](https://soylentnews.org/article.pl?sid=25/09/29/0055259&amp;from=rss)
* [2025-09-30, 00:32:00](https://soylentnews.org/article.pl?sid=25/09/29/0053249&amp;from=rss) - [EA is Reportedly About to be Sold in a Record-Setting $50 Billion Buyout](https://soylentnews.org/article.pl?sid=25/09/29/0053249&amp;from=rss)
