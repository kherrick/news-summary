# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and AI

* [Two Former US Congressmen Announce Fundraising for Candidates Supporting AI Regulation](https://news.slashdot.org/story/25/12/01/0418205/two-former-us-congressmen-announce-fundraising-for-candidates-supporting-ai-regulation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [DeepSeekMath-V2: Towards Self-Verifiable Mathematical Reasoning](https://huggingface.co/deepseek-ai/DeepSeek-Math-V2)

* [How OpenAI Reacted When Some ChatGPT Users Lost Touch with Reality](https://slashdot.org/story/25/12/01/0137225/how-openai-reacted-when-some-chatgpt-users-lost-touch-with-reality?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Amazon and Google Announce Resilient 'Multicloud' Networking Service Plus an Open API for Interoperability](https://tech.slashdot.org/story/25/12/01/0612218/amazon-and-google-announce-resilient-multicloud-networking-service-plus-an-open-api-for-interoperability?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Space and Science

* [Russia Left Without Access to ISS Following Structure Collapse During Thursday's Launch](https://science.slashdot.org/story/25/12/01/0327208/russia-left-without-access-to-iss-following-structure-collapse-during-thursdays-launch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Particle Accelerator Waste Could Help Produce Cancer-Fighting Materials](https://soylentnews.org/article.pl?sid=25/11/30/0224246&amp;from=rss)

* [Can AI Transform Space Propulsion?](https://science.slashdot.org/story/25/11/30/2247202/can-ai-transform-space-propulsion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Cybersecurity and Algorithms

* [Crime Rings Enlist Hackers To Hijack Trucks](https://yro.slashdot.org/story/25/11/30/2357209/crime-rings-enlist-hackers-to-hijack-trucks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Punycode: My New Favorite Algorithm](https://www.iankduncan.com/engineering/2025-12-01-punycode)

* [AWS data centers' water use tied to spike in cancer and miscarriages in Oregon](https://techoreon.com/oregon-data-centers-water-use-nitrates-cancer-miscarriage/)

## Innovations in Software and Development

* [Self-hosting a Matrix server for 5 years](https://yaky.dev/2025-11-30-self-hosting-matrix/)

* [Building the perfect Linux PC with Linus Torvalds](https://youtu.be/mfv0V1SxbNA)

* [Linux Kernel 6.18 Officially Released](https://linux.slashdot.org/story/25/12/01/0218201/linux-kernel-618-officially-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Ly – A lightweight TUI (ncurses-like) display manager for Linux and BSD](https://codeberg.org/fairyglade/ly)

## Sustainability and Environment

* [Around The World, Part 27: Planting trees](https://frozenfractal.com/blog/2025/11/28/around-the-world-27-planting-trees/)

## Historical Technology

* [Info to Decipher Secret Message in Kryptos Sculpture at CIA HQ Auctioned for Nearly $1M](https://it.slashdot.org/story/25/11/30/2130226/info-to-decipher-secret-message-in-kryptos-sculpture-at-cia-hq-auctioned-for-nearly-1m?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

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

* [2025-12-01, 12:34:00](https://news.slashdot.org/story/25/12/01/0418205/two-former-us-congressmen-announce-fundraising-for-candidates-supporting-ai-regulation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Two Former US Congressmen Announce Fundraising for Candidates Supporting AI Regulation](https://news.slashdot.org/story/25/12/01/0418205/two-former-us-congressmen-announce-fundraising-for-candidates-supporting-ai-regulation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-01, 12:22:35](https://news.ycombinator.com/item?id=46106556) - [Why xor eax, eax?](https://xania.org/202512/01-xor-eax-eax)
* [2025-12-01, 11:51:00](https://soylentnews.org/article.pl?sid=25/11/30/0234208&amp;from=rss) - [ClamAV Signature Retirement Announcement](https://soylentnews.org/article.pl?sid=25/11/30/0234208&amp;from=rss)
* [2025-12-01, 11:41:05](https://lobste.rs/s/njv6w3/around_world_part_27_planting_trees) - [Around The World, Part 27: Planting trees](https://frozenfractal.com/blog/2025/11/28/around-the-world-27-planting-trees/)
* [2025-12-01, 11:37:18](https://news.ycombinator.com/item?id=46106186) - [1GB Raspberry Pi 5, and memory-driven price rises](https://www.raspberrypi.com/news/1gb-raspberry-pi-5-now-available-at-45-and-memory-driven-price-rises/)
* [2025-12-01, 11:26:39](https://news.ycombinator.com/item?id=46106132) - [Self-hosting a Matrix server for 5 years](https://yaky.dev/2025-11-30-self-hosting-matrix/)
* [2025-12-01, 11:16:40](https://lobste.rs/s/nduylx/online_documentation_for_qt_6_kde) - [Online Documentation for Qt 6, KDE Frameworks, etc. for C &amp; Zig](https://gist.github.com/rcalixte/63757948a7bf4190b469ff09c5ad7a67)
* [2025-12-01, 10:49:48](https://lobste.rs/s/8eawgd/building_perfect_linux_pc_with_linus) - [Building the perfect Linux PC with Linus Torvalds](https://youtu.be/mfv0V1SxbNA)
* [2025-12-01, 10:41:14](https://news.ycombinator.com/item?id=46105825) - [Accenture dubs 800k staff &apos;reinventors&apos; amid shift to AI](https://www.theguardian.com/business/2025/dec/01/accenture-rebrands-staff-reinventors-ai-artificial-intelligence)
* [2025-12-01, 10:37:39](https://news.ycombinator.com/item?id=46105803) - [AWS data centers&apos; water use tied to spike in cancer and miscarriages in Oregon](https://techoreon.com/oregon-data-centers-water-use-nitrates-cancer-miscarriage/)
* [2025-12-01, 10:36:22](https://lobste.rs/s/6joasa/punycode_my_new_favorite_algorithm) - [Punycode: My New Favorite Algorithm](https://www.iankduncan.com/engineering/2025-12-01-punycode)
* [2025-12-01, 10:24:25](https://lobste.rs/s/kfnqsw/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/kfnqsw/what_are_you_doing_this_week)
* [2025-12-01, 10:14:59](https://lobste.rs/s/jxubs2/internet_handle) - [Internet Handle](https://internethandle.org/)
* [2025-12-01, 08:54:31](https://news.ycombinator.com/item?id=46105079) - [DeepSeekMath-V2: Towards Self-Verifiable Mathematical Reasoning](https://huggingface.co/deepseek-ai/DeepSeek-Math-V2)
* [2025-12-01, 08:34:00](https://tech.slashdot.org/story/25/12/01/0612218/amazon-and-google-announce-resilient-multicloud-networking-service-plus-an-open-api-for-interoperability?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon and Google Announce Resilient &apos;Multicloud&apos; Networking Service Plus an Open API for Interoperability](https://tech.slashdot.org/story/25/12/01/0612218/amazon-and-google-announce-resilient-multicloud-networking-service-plus-an-open-api-for-interoperability?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-01, 07:30:40](https://lobste.rs/s/vz0vom/http_query_method) - [The HTTP QUERY Method](https://www.ietf.org/archive/id/draft-ietf-httpbis-safe-method-w-body-14.html)
* [2025-12-01, 07:07:00](https://soylentnews.org/article.pl?sid=25/11/30/0229203&amp;from=rss) - [Roblox to Use AI for User Age Identification but Aus Government Wants More](https://soylentnews.org/article.pl?sid=25/11/30/0229203&amp;from=rss)
* [2025-12-01, 07:05:57](https://news.ycombinator.com/item?id=46104396) - [Games using anti-cheats and their compatibility with GNU/Linux or Wine/Proton](https://areweanticheatyet.com/)
* [2025-12-01, 06:45:22](https://lobste.rs/s/wsv9xn/size_matters) - [Size Matters](https://matklad.github.io/2025/11/28/size-matters.html)
* [2025-12-01, 06:12:33](https://lobste.rs/s/swvr1p/one_jobserver_rule_them_all) - [One jobserver to rule them all](https://blogs.gentoo.org/mgorny/2025/11/30/one-jobserver-to-rule-them-all/)
* [2025-12-01, 05:36:00](https://science.slashdot.org/story/25/12/01/0327208/russia-left-without-access-to-iss-following-structure-collapse-during-thursdays-launch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Russia Left Without Access to ISS Following Structure Collapse During Thursday&apos;s Launch](https://science.slashdot.org/story/25/12/01/0327208/russia-left-without-access-to-iss-following-structure-collapse-during-thursdays-launch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-01, 04:39:28](https://news.ycombinator.com/item?id=46103532) - [Google Antigravity just deleted the contents of whole drive](https://old.reddit.com/r/google_antigravity/comments/1p82or6/google_antigravity_just_deleted_the_contents_of/)
* [2025-12-01, 04:36:00](https://linux.slashdot.org/story/25/12/01/0218201/linux-kernel-618-officially-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linux Kernel 6.18 Officially Released](https://linux.slashdot.org/story/25/12/01/0218201/linux-kernel-618-officially-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-01, 04:06:06](https://news.ycombinator.com/item?id=46103376) - [Search tool that only returns content created before ChatGPT&apos;s public release](https://tegabrain.com/Slop-Evader)
* [2025-12-01, 03:59:53](https://lobste.rs/s/ujdmkl/boing) - [Boing](https://boing.greg.technology/)
* [2025-12-01, 03:12:29](https://news.ycombinator.com/item?id=46103097) - [X210Ai is a new motherboard to upgrade ThinkPad X201/200](https://www.tpart.net/about-x210ai/)
* [2025-12-01, 02:20:00](https://soylentnews.org/article.pl?sid=25/11/30/0224246&amp;from=rss) - [Particle Accelerator Waste Could Help Produce Cancer-Fighting Materials](https://soylentnews.org/article.pl?sid=25/11/30/0224246&amp;from=rss)
* [2025-12-01, 01:40:00](https://slashdot.org/story/25/12/01/0137225/how-openai-reacted-when-some-chatgpt-users-lost-touch-with-reality?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How OpenAI Reacted When Some ChatGPT Users Lost Touch with Reality](https://slashdot.org/story/25/12/01/0137225/how-openai-reacted-when-some-chatgpt-users-lost-touch-with-reality?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-01, 01:17:28](https://news.ycombinator.com/item?id=46102347) - [Advent of Sysadmin 2025](https://sadservers.com/advent)
* [2025-12-01, 00:28:04](https://news.ycombinator.com/item?id=46101996) - [Ly – A lightweight TUI (ncurses-like) display manager for Linux and BSD](https://codeberg.org/fairyglade/ly)
* [2025-12-01, 00:19:00](https://yro.slashdot.org/story/25/11/30/2357209/crime-rings-enlist-hackers-to-hijack-trucks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Crime Rings Enlist Hackers To Hijack Trucks&apos;](https://yro.slashdot.org/story/25/11/30/2357209/crime-rings-enlist-hackers-to-hijack-trucks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-30, 23:51:45](https://lobste.rs/s/nfkyxc/love_letter_freebsd) - [A Love Letter to FreeBSD](https://www.tara.sh/posts/2025/2025-11-25_freebsd_letter/)
* [2025-11-30, 23:38:39](https://lobste.rs/s/e0s8iu/ty_python_type_checker) - [ty - Python type checker](https://docs.astral.sh/ty/)
* [2025-11-30, 23:21:32](https://news.ycombinator.com/item?id=46101492) - [Algorithms for Optimization [pdf]](https://algorithmsbook.com/optimization/files/optimization.pdf)
* [2025-11-30, 22:50:00](https://science.slashdot.org/story/25/11/30/2247202/can-ai-transform-space-propulsion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Can AI Transform Space Propulsion?](https://science.slashdot.org/story/25/11/30/2247202/can-ai-transform-space-propulsion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-30, 22:05:07](https://news.ycombinator.com/item?id=46100892) - [A Love Letter to FreeBSD](https://www.tara.sh/posts/2025/2025-11-25_freebsd_letter/)
* [2025-11-30, 21:38:06](https://lobste.rs/s/bvuwhl/nixos_25_11_released) - [NixOS 25.11 released](https://nixos.org/blog/announcements/2025/nixos-2511/)
* [2025-11-30, 21:34:00](https://it.slashdot.org/story/25/11/30/2130226/info-to-decipher-secret-message-in-kryptos-sculpture-at-cia-hq-auctioned-for-nearly-1m?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Info to Decipher Secret Message in Kryptos Sculpture at CIA HQ Auctioned for Nearly $1M](https://it.slashdot.org/story/25/11/30/2130226/info-to-decipher-secret-message-in-kryptos-sculpture-at-cia-hq-auctioned-for-nearly-1m?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-30, 21:34:00](https://soylentnews.org/article.pl?sid=25/11/30/0218206&amp;from=rss) - [AI-Induced Psychosis: The Danger of Humans and Machines Hallucinating Together](https://soylentnews.org/article.pl?sid=25/11/30/0218206&amp;from=rss)
* [2025-11-30, 21:12:21](https://lobste.rs/s/5qd7be/trillions_spent_big_software_projects) - [Trillions Spent and Big Software Projects Are Still Failing](https://spectrum.ieee.org/it-management-software-failures)
* [2025-11-30, 20:13:25](https://lobste.rs/s/h6bmm2/hacking_on_remarkable_2) - [Hacking on the reMarkable 2](https://sgt.hootr.club/blog/hacking-on-the-remarkable-2/)
* [2025-11-30, 20:10:14](https://lobste.rs/s/0kkxgk/you_want_microservices_do_you_need_them) - [You Want Microservices—But Do You Need Them?](https://www.docker.com/blog/do-you-really-need-microservices/)
* [2025-11-30, 19:35:00](https://developers.slashdot.org/story/25/11/30/1933216/morgan-stanley-warns-oracle-credit-protection-nearing-record-high?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Morgan Stanley Warns Oracle Credit Protection Nearing Record High](https://developers.slashdot.org/story/25/11/30/1933216/morgan-stanley-warns-oracle-credit-protection-nearing-record-high?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-30, 19:21:43](https://lobste.rs/s/fq1avk/real_time_rendering_with_jpeg_compressed) - [Real-Time Rendering with JPEG-Compressed Textures](https://github.com/elias1518693/jpeg_textures)
* [2025-11-30, 18:34:52](https://news.ycombinator.com/item?id=46099108) - [Program-of-Thought Prompting Outperforms Chain-of-Thought by 15% (2022)](https://arxiv.org/abs/2211.12588)
* [2025-11-30, 18:34:00](https://tech.slashdot.org/story/25/11/30/1746201/what-happens-when-you-kick-millions-of-teens-off-social-media-australias-about-to-find-out?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What Happens When You Kick Millions of Teens Off Social Media?  Australia&apos;s About to Find Out](https://tech.slashdot.org/story/25/11/30/1746201/what-happens-when-you-kick-millions-of-teens-off-social-media-australias-about-to-find-out?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-30, 17:56:43](https://news.ycombinator.com/item?id=46098838) - [Writing a good Claude.md](https://www.humanlayer.dev/blog/writing-a-good-claude-md)
* [2025-11-30, 17:45:51](https://news.ycombinator.com/item?id=46098747) - [ETH-Zurich: Digital Design and Computer Architecture; 227-0003-10L, Spring, 2025](https://safari.ethz.ch/ddca/spring2025/doku.php?id=start)
* [2025-11-30, 17:34:00](https://developers.slashdot.org/story/25/11/30/048214/amazon-tells-its-engineers-use-our-ai-coding-tool-kiro?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Tells Its Engineers: Use Our AI Coding Tool &apos;Kiro&apos;](https://developers.slashdot.org/story/25/11/30/048214/amazon-tells-its-engineers-use-our-ai-coding-tool-kiro?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-30, 16:52:13](https://lobste.rs/s/9fjia8/windows_drive_letters_are_not_limited_z) - [Windows drive letters are not limited to A-Z](https://www.ryanliptak.com/blog/windows-drive-letters-are-not-limited-to-a-z/)
* [2025-11-30, 16:51:00](https://soylentnews.org/article.pl?sid=25/11/26/1555213&amp;from=rss) - [Rust for Linux Kernel Co-Maintainer Formally Steps Down](https://soylentnews.org/article.pl?sid=25/11/26/1555213&amp;from=rss)
* [2025-11-30, 16:34:00](https://slashdot.org/story/25/11/30/0510248/is-openai-preparing-to-bring-ads-to-chatgpt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is OpenAI Preparing to Bring Ads to ChatGPT?](https://slashdot.org/story/25/11/30/0510248/is-openai-preparing-to-bring-ads-to-chatgpt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-30, 16:17:29](https://lobste.rs/s/p9s9yx/from_zero_github_starting_new_jj_jujutsu) - [From Zero to GitHub: Starting A New jj (Jujutsu) Repo](https://www.visualmode.dev/from-zero-to-github-starting-a-new-jj-jujutsu-repo)
* [2025-11-30, 16:12:13](https://news.ycombinator.com/item?id=46097829) - [GitHub to Codeberg: my experience](https://eldred.fr/blog/forge-migration/)
* [2025-11-30, 16:10:40](https://lobste.rs/s/cni8ze/github_codeberg_my_experience) - [GitHub to Codeberg: my experience](https://eldred.fr/blog/forge-migration/)
* [2025-11-30, 15:34:00](https://it.slashdot.org/story/25/11/29/1737204/ai-can-already-do-the-work-of-12-of-americas-workforce-researchers-find?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Can Already Do the Work of 12% of America&apos;s Workforce, Researchers Find](https://it.slashdot.org/story/25/11/29/1737204/ai-can-already-do-the-work-of-12-of-americas-workforce-researchers-find?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-30, 14:59:23](https://lobste.rs/s/gtzhvt/advent_code_2025) - [Advent of Code 2025](https://adventofcode.com/2025)
* [2025-11-30, 14:22:16](https://lobste.rs/s/qxxu6s/http_query_method) - [The HTTP Query Method](https://datatracker.ietf.org/doc/draft-ietf-httpbis-safe-method-w-body/)
* [2025-11-30, 14:17:00](https://soylentnews.org/article.pl?sid=25/11/26/1550227&amp;from=rss) - [Tor Switches to New Counter Galois Onion Relay Encryption Algorithm](https://soylentnews.org/article.pl?sid=25/11/26/1550227&amp;from=rss)
* [2025-11-30, 14:11:40](https://news.ycombinator.com/item?id=46096800) - [Migrating Dillo from GitHub](https://dillo-browser.org/news/migration-from-github/)
* [2025-11-30, 14:09:19](https://lobste.rs/s/mgwwtl/migrating_dillo_from_github) - [Migrating Dillo from GitHub](https://dillo-browser.org/news/migration-from-github/)
* [2025-11-30, 13:40:17](https://news.ycombinator.com/item?id=46096556) - [Windows drive letters are not limited to A-Z](https://www.ryanliptak.com/blog/windows-drive-letters-are-not-limited-to-a-z/)
* [2025-11-30, 13:07:15](https://news.ycombinator.com/item?id=46096337) - [Advent of Code 2025](https://adventofcode.com/2025/about)
* [2025-11-30, 12:34:00](https://games.slashdot.org/story/25/11/30/0257233/benedict-cumberbatch-films-two-bizarre-holiday-ads-for-world-of-tanks-and-amazon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Benedict Cumberbatch Films Two Bizarre Holiday Ads: for &apos;World of Tanks&apos; and Amazon](https://games.slashdot.org/story/25/11/30/0257233/benedict-cumberbatch-films-two-bizarre-holiday-ads-for-world-of-tanks-and-amazon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-30, 11:43:00](https://soylentnews.org/article.pl?sid=25/11/26/149224&amp;from=rss) - [Beijing Unveils Supercritical CO2 Turbine That Could Upend Power Tech](https://soylentnews.org/article.pl?sid=25/11/26/149224&amp;from=rss)
* [2025-11-30, 09:12:00](https://soylentnews.org/article.pl?sid=25/11/26/1415217&amp;from=rss) - [The Unpowered SSDs in Your Drawer Are Slowly Losing Your Data](https://soylentnews.org/article.pl?sid=25/11/26/1415217&amp;from=rss)
* [2025-11-30, 08:34:00](https://news.slashdot.org/story/25/11/29/1838252/browser-extension-slop-evader-lets-you-surf-the-web-like-its-2022?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Browser Extension &apos;Slop Evader&apos; Lets You Surf the Web Like It&apos;s 2022](https://news.slashdot.org/story/25/11/29/1838252/browser-extension-slop-evader-lets-you-surf-the-web-like-its-2022?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-30, 06:53:00](https://soylentnews.org/article.pl?sid=25/11/25/1521238&amp;from=rss) - [Horse Virus EHV-1 Outbreak Spreads to Eight Texas Counties: Two Horses Have Died](https://soylentnews.org/article.pl?sid=25/11/25/1521238&amp;from=rss)
* [2025-11-30, 05:19:33](https://news.ycombinator.com/item?id=46094037) - [AI just proved Erdos Problem #124](https://www.erdosproblems.com/forum/thread/124#post-1892)
* [2025-11-30, 04:38:00](https://soylentnews.org/article.pl?sid=25/11/25/1517228&amp;from=rss) - [Scientists Unveil Breakthrough Low-Temperature Fuel Cell That Could Revolutionize Hydrogen Power](https://soylentnews.org/article.pl?sid=25/11/25/1517228&amp;from=rss)
* [2025-11-30, 03:53:14](https://lobste.rs/s/y6hggq/zigbook_is_plagiarizing_zigtools) - [Zigbook is Plagiarizing the Zigtools Playground](https://zigtools.org/blog/zigbook-plagiarizing-playground/)
* [2025-11-30, 02:31:37](https://lobste.rs/s/a34m1x/datacenters_space_are_terrible_horrible) - [Datacenters in space are a terrible, horrible, no good idea](https://taranis.ie/datacenters-in-space-are-a-terrible-horrible-no-good-idea/)
* [2025-11-30, 02:23:00](https://soylentnews.org/article.pl?sid=25/11/25/1514218&amp;from=rss) - [Myths About Rapid Spread of the Black Death Influenced by Single “Literary Tale”](https://soylentnews.org/article.pl?sid=25/11/25/1514218&amp;from=rss)
* [2025-11-30, 00:05:00](https://soylentnews.org/article.pl?sid=25/11/25/1512241&amp;from=rss) - [A Rare GM EV1 Saved From The Crusher is Going to be Driveable Again](https://soylentnews.org/article.pl?sid=25/11/25/1512241&amp;from=rss)
* [2025-11-29, 21:56:00](https://soylentnews.org/article.pl?sid=25/11/29/2035258&amp;from=rss) - [Valve Announces the Steam Frame: &apos;A New Way to Play Your Entire Steam Library&apos;](https://soylentnews.org/article.pl?sid=25/11/29/2035258&amp;from=rss)
* [2025-11-29, 21:16:00](https://soylentnews.org/article.pl?sid=25/11/25/157251&amp;from=rss) - [Bitcoin Mining Needs Regulatory Legislation](https://soylentnews.org/article.pl?sid=25/11/25/157251&amp;from=rss)
* [2025-11-29, 20:53:00](https://soylentnews.org/article.pl?sid=25/11/29/2053221&amp;from=rss) - [Re-releasing Stories in Queue](https://soylentnews.org/article.pl?sid=25/11/29/2053221&amp;from=rss)
* [2025-11-29, 12:26:00](https://soylentnews.org/article.pl?sid=25/11/26/2246256&amp;from=rss) - [This Linux OS Has Got a Million Downloads Since Windows 10 Support Ended](https://soylentnews.org/article.pl?sid=25/11/26/2246256&amp;from=rss)
* [2025-11-29, 07:43:00](https://soylentnews.org/article.pl?sid=25/11/26/2245225&amp;from=rss) - [Americans With Four-Year Degrees Now Comprise a Record 25% of Unemployed Workers](https://soylentnews.org/article.pl?sid=25/11/26/2245225&amp;from=rss)
* [2025-11-29, 02:58:00](https://soylentnews.org/article.pl?sid=25/11/26/2239240&amp;from=rss) - [China Launches Shenzhou-22 Early for Stranded Space Station Crew](https://soylentnews.org/article.pl?sid=25/11/26/2239240&amp;from=rss)
* [2025-11-28, 22:06:00](https://soylentnews.org/article.pl?sid=25/11/26/2238205&amp;from=rss) - [Cryptology Firm Cancels Elections After Losing Encryption Key](https://soylentnews.org/article.pl?sid=25/11/26/2238205&amp;from=rss)
* [2025-11-27, 19:34:23](https://news.ycombinator.com/item?id=46072521) - [Replacing My Window Manager with Google Chrome](https://foxmoss.com/blog/dote/)
