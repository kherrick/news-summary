# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software Innovations

* [NixOS 25.11 Released](https://nixos.org/blog/announcements/2025/nixos-2511/) - A new stable update from the NixOS project, continuing their innovative journey in software packaging.

* [Linux Kernel Explorer](https://reverser.dev) - A tool designed to make it easier to explore and debug Linux kernels.

* [LLVM-MOS – Clang LLVM fork targeting the 6502](https://llvm-mos.org/wiki/Welcome) - A fascinating LLVM fork aimed at expanding programming possibilities for the classic 6502 microprocessor.

* [Rust for Linux Kernel Co-Maintainer Formally Steps Down](https://soylentnews.org/article.pl?sid=25/11/26/1555213&amp;from=rss) - Changes in leadership regarding integrating Rust into Linux kernel development.

* [GitHub to Codeberg: my experience](https://eldred.fr/blog/forge-migration/) - Insights into the migration process between these code-hosting platforms.

* [Landlock-ing Linux](https://blog.prizrak.me/post/landlock/) - Delving into utilizing Landlock for enhanced software security on Linux.

* [Are There More Linux Users Than We Think?](https://linux.slashdot.org/story/25/11/30/008213/are-there-more-linux-users-than-we-think?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - An exploration of the widespread yet underreported adoption of Linux.

## Artificial Intelligence Developments

* [Don&apos;t push AI down our throats](https://gpt3experiments.substack.com/p/dont-push-ai-down-our-throats) - A critique of integrating AI too forcefully into daily life.

* [Amazon Tells Its Engineers: Use Our AI Coding Tool &apos;Kiro&apos;](https://developers.slashdot.org/story/25/11/30/048214/amazon-tells-its-engineers-use-our-ai-coding-tool-kiro?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Amazon mandates its engineers to embrace their in-house AI coding tool.

* [AI Can Already Do the Work of 12% of America&apos;s Workforce, Researchers Find](https://it.slashdot.org/story/25/11/29/1737204/ai-can-already-do-the-work-of-12-of-americas-workforce-researchers-find?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A study revealing AI's impact on the American workforce.

* [The Thinking Game Film – Google DeepMind Documentary](https://thinkinggamefilm.com) - A documentary featuring Google's DeepMind, providing insights into the evolving AI landscape.

## Science and Space Exploration

* [ESA Sentinel-1D delivers first high-resolution images](https://www.esa.int/Applications/Observing_the_Earth/Copernicus/Sentinel-1/Sentinel-1D_delivers_first_images_from_Antarctica_to_Bremen) - First imagery from the latest addition to ESA's Earth observation missions.

* [Beijing Unveils Supercritical CO2 Turbine That Could Upend Power Tech](https://soylentnews.org/article.pl?sid=25/11/26/149224&amp;from=rss) - A potential game-changer in energy technology revealed by Beijing.

* [The space of minds](https://karpathy.bearblog.dev/the-space-of-minds/) - A philosophical dive into understanding the spectrum of cognition and minds, from AI to human.

* [Myths About Rapid Spread of the Black Death Influenced by Single “Literary Tale”](https://soylentnews.org/article.pl?sid=25/11/25/1514218&amp;from=rss) - A reevaluation of historical narratives related to pandemics.

## Cybersecurity and Legal Issues

* [Oops! It&apos;s a kernel stack use-after-free: Exploiting NVIDIA&apos;s GPU Linux drivers](https://blog.quarkslab.com/nvidia_gpu_kernel_vmalloc_exploit.html) - Details on a security vulnerability affecting NVIDIA's GPUs on Linux.

* [Tor Switches to New Counter Galois Onion Relay Encryption Algorithm](https://soylentnews.org/article.pl?sid=25/11/26/1550227&amp;from=rss) - Tor’s move toward enhancing privacy with a new encryption algorithm.

* [Zigbook Is Plagiarizing the Zigtools Playground](https://zigtools.org/blog/zigbook-plagiarizing-playground/) - Allegations of intellectual property misuse in Zig tools.

* [Cryptology Firm Cancels Elections After Losing Encryption Key](https://soylentnews.org/article.pl?sid=25/11/26/2238205&amp;from=rss) - Story on technical setbacks disrupting a cryptology firm's operations.

## Energy and Environmental Developments

* [AI Helps Drive Record $11.8B in Black Friday Online Spending](https://slashdot.org/story/25/11/30/0245229/ai-helps-drive-record-118b-in-black-friday-online-spending?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - An AI-driven boost in consumer spending habits.

* [Scientists Unveil Breakthrough Low-Temperature Fuel Cell That Could Revolutionize Hydrogen Power](https://soylentnews.org/article.pl?sid=25/11/25/1517228&amp;from=rss) - Transformational advances in renewable energy technology.

* [Datacenters in space are a terrible, horrible, no good idea](https://taranis.ie/datacenters-in-space-are-a-terrible-horrible-no-good-idea) - An analysis of why space-based data centers may not be feasible.

* [The Unpowered SSDs in Your Drawer Are Slowly Losing Your Data](https://soylentnews.org/article.pl?sid=25/11/26/1415217&amp;from=rss) - A warning concerning data retention in inactive SSDs.

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

* [2025-11-30, 18:34:00](https://tech.slashdot.org/story/25/11/30/1746201/what-happens-when-you-kick-millions-of-teens-off-social-media-australias-about-to-find-out?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What Happens When You Kick Millions of Teens Off Social Media?  Australia&apos;s About to Find Out](https://tech.slashdot.org/story/25/11/30/1746201/what-happens-when-you-kick-millions-of-teens-off-social-media-australias-about-to-find-out?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-30, 18:21:45](https://news.ycombinator.com/item?id=46099022) - [NixOS 25.11 Released](https://nixos.org/blog/announcements/2025/nixos-2511/)
* [2025-11-30, 18:17:13](https://news.ycombinator.com/item?id=46098992) - [Don&apos;t push AI down our throats](https://gpt3experiments.substack.com/p/dont-push-ai-down-our-throats)
* [2025-11-30, 18:15:37](https://news.ycombinator.com/item?id=46098979) - [There is No Quintic Formula [video]](https://www.youtube.com/watch?v=9HIy5dJE-zQ)
* [2025-11-30, 17:51:57](https://lobste.rs/s/y9mdbc/linux_kernel_explorer) - [Linux Kernel Explorer](https://reverser.dev)
* [2025-11-30, 17:50:05](https://lobste.rs/s/nddsix/dotcom_survivor_syndrome_how_perl_s_early) - [Dotcom Survivor Syndrome – How Perl’s Early Success Created the Seeds of Its Downfall](https://perlhacks.com/2025/11/dotcom-survivor-syndrome-how-perls-early-success-created-the-seeds-of-its-downfall/)
* [2025-11-30, 17:45:51](https://news.ycombinator.com/item?id=46098747) - [ETH-Zurich: Digital Design and Computer Architecture; 227-0003-10L, Spring, 2025](https://safari.ethz.ch/ddca/spring2025/doku.php?id=start)
* [2025-11-30, 17:37:09](https://news.ycombinator.com/item?id=46098673) - [ESA Sentinel-1D delivers first high-resolution images](https://www.esa.int/Applications/Observing_the_Earth/Copernicus/Sentinel-1/Sentinel-1D_delivers_first_images_from_Antarctica_to_Bremen)
* [2025-11-30, 17:34:00](https://developers.slashdot.org/story/25/11/30/048214/amazon-tells-its-engineers-use-our-ai-coding-tool-kiro?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Tells Its Engineers: Use Our AI Coding Tool &apos;Kiro&apos;](https://developers.slashdot.org/story/25/11/30/048214/amazon-tells-its-engineers-use-our-ai-coding-tool-kiro?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-30, 17:02:48](https://news.ycombinator.com/item?id=46098359) - [LLVM-MOS – Clang LLVM fork targeting the 6502](https://llvm-mos.org/wiki/Welcome)
* [2025-11-30, 17:01:27](https://lobste.rs/s/wepzub/interop_mathml_core) - [interop and mathml core](https://conflor.es/blog/2025-11-27-interop-and-mathml/)
* [2025-11-30, 17:01:24](https://news.ycombinator.com/item?id=46098336) - [RetailReady (YC W24) Is Hiring Associate Product Manager](https://www.ycombinator.com/companies/retailready/jobs/KPKDu3D-associate-product-manager)
* [2025-11-30, 16:52:13](https://lobste.rs/s/9fjia8/windows_drive_letters_are_not_limited_z) - [Windows drive letters are not limited to A-Z](https://www.ryanliptak.com/blog/windows-drive-letters-are-not-limited-to-a-z/)
* [2025-11-30, 16:51:00](https://soylentnews.org/article.pl?sid=25/11/26/1555213&amp;from=rss) - [Rust for Linux Kernel Co-Maintainer Formally Steps Down](https://soylentnews.org/article.pl?sid=25/11/26/1555213&amp;from=rss)
* [2025-11-30, 16:34:00](https://slashdot.org/story/25/11/30/0510248/is-openai-preparing-to-bring-ads-to-chatgpt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is OpenAI Preparing to Bring Ads to ChatGPT?](https://slashdot.org/story/25/11/30/0510248/is-openai-preparing-to-bring-ads-to-chatgpt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-30, 16:17:29](https://lobste.rs/s/p9s9yx/from_zero_github_starting_new_jj_jujutsu) - [From Zero to GitHub: Starting A New jj (Jujutsu) Repo](https://www.visualmode.dev/from-zero-to-github-starting-a-new-jj-jujutsu-repo)
* [2025-11-30, 16:10:40](https://lobste.rs/s/cni8ze/github_codeberg_my_experience) - [GitHub to Codeberg: my experience](https://eldred.fr/blog/forge-migration/)
* [2025-11-30, 16:07:11](https://news.ycombinator.com/item?id=46097773) - [The Thinking Game Film – Google DeepMind Documentary](https://thinkinggamefilm.com)
* [2025-11-30, 15:57:34](https://news.ycombinator.com/item?id=46097671) - [Langjam Gamejam: Build a programming language then make a game with it](https://langjamgamejam.com/)
* [2025-11-30, 15:34:00](https://it.slashdot.org/story/25/11/29/1737204/ai-can-already-do-the-work-of-12-of-americas-workforce-researchers-find?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Can Already Do the Work of 12% of America&apos;s Workforce, Researchers Find](https://it.slashdot.org/story/25/11/29/1737204/ai-can-already-do-the-work-of-12-of-americas-workforce-researchers-find?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-30, 14:59:23](https://lobste.rs/s/gtzhvt/advent_code_2025) - [Advent of Code 2025](https://adventofcode.com/2025)
* [2025-11-30, 14:22:16](https://lobste.rs/s/qxxu6s/http_query_method) - [The HTTP Query Method](https://datatracker.ietf.org/doc/draft-ietf-httpbis-safe-method-w-body/)
* [2025-11-30, 14:17:00](https://soylentnews.org/article.pl?sid=25/11/26/1550227&amp;from=rss) - [Tor Switches to New Counter Galois Onion Relay Encryption Algorithm](https://soylentnews.org/article.pl?sid=25/11/26/1550227&amp;from=rss)
* [2025-11-30, 14:11:40](https://news.ycombinator.com/item?id=46096800) - [Migrating Dillo from GitHub](https://dillo-browser.org/news/migration-from-github/)
* [2025-11-30, 14:09:19](https://lobste.rs/s/mgwwtl/migrating_dillo_from_github) - [Migrating Dillo from GitHub](https://dillo-browser.org/news/migration-from-github/)
* [2025-11-30, 13:40:17](https://news.ycombinator.com/item?id=46096556) - [Windows drive letters are not limited to A-Z](https://www.ryanliptak.com/blog/windows-drive-letters-are-not-limited-to-a-z/)
* [2025-11-30, 13:40:09](https://news.ycombinator.com/item?id=46096555) - [Norway wealth fund to vote for human rights report at Microsoft, against Nadella](https://www.cnbc.com/2025/11/30/norway-wealth-fund-to-vote-for-human-rights-report-at-microsoft-agm-against-management.html)
* [2025-11-30, 13:07:15](https://news.ycombinator.com/item?id=46096337) - [Advent of Code 2025](https://adventofcode.com/2025/about)
* [2025-11-30, 13:06:37](https://lobste.rs/s/m536lr/antifragile_programming_why_ai_won_t) - [Antifragile Programming and Why AI Won’t Steal Your Job](https://lemire.me/blog/2025/11/29/antifragile-programming-and-why-ai-wont-steal-your-job/)
* [2025-11-30, 12:34:00](https://games.slashdot.org/story/25/11/30/0257233/benedict-cumberbatch-films-two-bizarre-holiday-ads-for-world-of-tanks-and-amazon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Benedict Cumberbatch Films Two Bizarre Holiday Ads: for &apos;World of Tanks&apos; and Amazon](https://games.slashdot.org/story/25/11/30/0257233/benedict-cumberbatch-films-two-bizarre-holiday-ads-for-world-of-tanks-and-amazon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-30, 11:43:00](https://soylentnews.org/article.pl?sid=25/11/26/149224&amp;from=rss) - [Beijing Unveils Supercritical CO2 Turbine That Could Upend Power Tech](https://soylentnews.org/article.pl?sid=25/11/26/149224&amp;from=rss)
* [2025-11-30, 10:47:27](https://news.ycombinator.com/item?id=46095585) - [CachyOS: Fast and Customizable Linux Distribution](https://cachyos.org/)
* [2025-11-30, 09:44:15](https://news.ycombinator.com/item?id=46095250) - [The space of minds](https://karpathy.bearblog.dev/the-space-of-minds/)
* [2025-11-30, 09:12:00](https://soylentnews.org/article.pl?sid=25/11/26/1415217&amp;from=rss) - [The Unpowered SSDs in Your Drawer Are Slowly Losing Your Data](https://soylentnews.org/article.pl?sid=25/11/26/1415217&amp;from=rss)
* [2025-11-30, 08:47:51](https://lobste.rs/s/dcifcp/oops_it_s_kernel_stack_use_after_free) - [Oops! It&apos;s a kernel stack use-after-free: Exploiting NVIDIA&apos;s GPU Linux drivers](https://blog.quarkslab.com/nvidia_gpu_kernel_vmalloc_exploit.html)
* [2025-11-30, 08:34:00](https://news.slashdot.org/story/25/11/29/1838252/browser-extension-slop-evader-lets-you-surf-the-web-like-its-2022?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Browser Extension &apos;Slop Evader&apos; Lets You Surf the Web Like It&apos;s 2022](https://news.slashdot.org/story/25/11/29/1838252/browser-extension-slop-evader-lets-you-surf-the-web-like-its-2022?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-30, 06:53:00](https://soylentnews.org/article.pl?sid=25/11/25/1521238&amp;from=rss) - [Horse Virus EHV-1 Outbreak Spreads to Eight Texas Counties: Two Horses Have Died](https://soylentnews.org/article.pl?sid=25/11/25/1521238&amp;from=rss)
* [2025-11-30, 04:38:00](https://soylentnews.org/article.pl?sid=25/11/25/1517228&amp;from=rss) - [Scientists Unveil Breakthrough Low-Temperature Fuel Cell That Could Revolutionize Hydrogen Power](https://soylentnews.org/article.pl?sid=25/11/25/1517228&amp;from=rss)
* [2025-11-30, 04:34:00](https://slashdot.org/story/25/11/30/0245229/ai-helps-drive-record-118b-in-black-friday-online-spending?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Helps Drive Record $11.8B in Black Friday Online Spending](https://slashdot.org/story/25/11/30/0245229/ai-helps-drive-record-118b-in-black-friday-online-spending?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-30, 03:54:51](https://news.ycombinator.com/item?id=46093518) - [Zigbook Is Plagiarizing the Zigtools Playground](https://zigtools.org/blog/zigbook-plagiarizing-playground/)
* [2025-11-30, 03:53:14](https://lobste.rs/s/y6hggq/zigbook_is_plagiarizing_zigtools) - [Zigbook is Plagiarizing the Zigtools Playground](https://zigtools.org/blog/zigbook-plagiarizing-playground/)
* [2025-11-30, 03:46:35](https://news.ycombinator.com/item?id=46093473) - [Show HN: Boing](https://boing.greg.technology/)
* [2025-11-30, 02:34:00](https://linux.slashdot.org/story/25/11/30/008213/are-there-more-linux-users-than-we-think?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Are There More Linux Users Than We Think?](https://linux.slashdot.org/story/25/11/30/008213/are-there-more-linux-users-than-we-think?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-30, 02:31:37](https://lobste.rs/s/a34m1x/datacenters_space_are_terrible_horrible) - [Datacenters in space are a terrible, horrible, no good idea](https://taranis.ie/datacenters-in-space-are-a-terrible-horrible-no-good-idea/)
* [2025-11-30, 02:23:00](https://soylentnews.org/article.pl?sid=25/11/25/1514218&amp;from=rss) - [Myths About Rapid Spread of the Black Death Influenced by Single “Literary Tale”](https://soylentnews.org/article.pl?sid=25/11/25/1514218&amp;from=rss)
* [2025-11-30, 01:38:09](https://lobste.rs/s/22oqr9/landlock_ing_linux) - [Landlock-ing Linux](https://blog.prizrak.me/post/landlock/)
* [2025-11-30, 01:15:59](https://news.ycombinator.com/item?id=46092558) - [Meshtastic](https://meshtastic.org/)
* [2025-11-30, 00:39:59](https://lobste.rs/s/heciwa/pgfirstaid_postgresql_health_check_blog) - [pgFirstAid-The PostgreSQL Health Check Blog Post](https://randoneering.tech/blog/pgfirstaid/pgfirstaid/)
* [2025-11-30, 00:05:00](https://soylentnews.org/article.pl?sid=25/11/25/1512241&amp;from=rss) - [A Rare GM EV1 Saved From The Crusher is Going to be Driveable Again](https://soylentnews.org/article.pl?sid=25/11/25/1512241&amp;from=rss)
* [2025-11-29, 23:34:00](https://science.slashdot.org/story/25/11/29/2233245/scientists-discover-people-act-more-altruistic-when-batman-is-present?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Discover People Act More Altruistic When Batman Is Present](https://science.slashdot.org/story/25/11/29/2233245/scientists-discover-people-act-more-altruistic-when-batman-is-present?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-29, 22:34:00](https://tech.slashdot.org/story/25/11/29/0646258/defense-company-announces-an-ai-powered-dome-to-shield-cities-and-infrastructure-from-attacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Defense Company Announces an AI-Powered Dome to Shield Cities and Infrastructure From Attacks](https://tech.slashdot.org/story/25/11/29/0646258/defense-company-announces-an-ai-powered-dome-to-shield-cities-and-infrastructure-from-attacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-29, 21:56:00](https://soylentnews.org/article.pl?sid=25/11/29/2035258&amp;from=rss) - [Valve Announces the Steam Frame: &apos;A New Way to Play Your Entire Steam Library&apos;](https://soylentnews.org/article.pl?sid=25/11/29/2035258&amp;from=rss)
* [2025-11-29, 21:34:00](https://tech.slashdot.org/story/25/11/29/2111232/the-battle-over-africas-great-untapped-resource-ip-addresses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Battle Over Africa&apos;s Great Untapped Resource: IP Addresses](https://tech.slashdot.org/story/25/11/29/2111232/the-battle-over-africas-great-untapped-resource-ip-addresses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-29, 21:30:53](https://news.ycombinator.com/item?id=46090969) - [Landlock-Ing Linux](https://blog.prizrak.me/post/landlock/)
* [2025-11-29, 21:23:01](https://lobste.rs/s/seniup/clade_folding_text_editor) - [The Clade folding text editor](https://tibleiz.net/clade/)
* [2025-11-29, 21:16:00](https://soylentnews.org/article.pl?sid=25/11/25/157251&amp;from=rss) - [Bitcoin Mining Needs Regulatory Legislation](https://soylentnews.org/article.pl?sid=25/11/25/157251&amp;from=rss)
* [2025-11-29, 20:53:00](https://soylentnews.org/article.pl?sid=25/11/29/2053221&amp;from=rss) - [Re-releasing Stories in Queue](https://soylentnews.org/article.pl?sid=25/11/29/2053221&amp;from=rss)
* [2025-11-29, 20:34:00](https://news.slashdot.org/story/25/11/29/207247/hundreds-of-free-software-supporters-tuned-in-for-fsf40-hackathon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hundreds of Free Software Supporters Tuned in For &apos;FSF40&apos; Hackathon](https://news.slashdot.org/story/25/11/29/207247/hundreds-of-free-software-supporters-tuned-in-for-fsf40-hackathon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-29, 20:22:44](https://news.ycombinator.com/item?id=46090433) - [All it takes is for one to work out](https://alearningaday.blog/2025/11/28/all-it-takes-is-for-one-to-work-out-2/)
* [2025-11-29, 20:12:34](https://lobste.rs/s/0u9ig2/imgur_geo_blocked_uk_so_i_geo_unblocked_my) - [Imgur Geo-Blocked the UK, So I Geo-Unblocked My Entire Network](https://blog.tymscar.com/posts/imgurukproxy/)
* [2025-11-29, 19:45:04](https://lobste.rs/s/ww6cfs/major_ai_conference_flooded_with_peer) - [Major AI conference flooded with peer reviews written fully by AI](https://www.nature.com/articles/d41586-025-03506-6)
* [2025-11-29, 19:34:00](https://news.slashdot.org/story/25/11/29/080250/63-of-americans-polled-say-four-year-college-degrees-arent-worth-the-cost?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [63% of Americans Polled Say Four-Year College Degrees Aren&apos;t Worth the Cost](https://news.slashdot.org/story/25/11/29/080250/63-of-americans-polled-say-four-year-college-degrees-arent-worth-the-cost?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-29, 18:34:00](https://tech.slashdot.org/story/25/11/29/0727225/uber-launches-driverless-robotaxi-service-in-abu-dhabi-and-plans-many-more?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Uber Launches Driverless Robotaxi Service in Abu Dhabi, and Plans Many More](https://tech.slashdot.org/story/25/11/29/0727225/uber-launches-driverless-robotaxi-service-in-abu-dhabi-and-plans-many-more?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-29, 17:34:00](https://hardware.slashdot.org/story/25/11/29/0629207/how-bad-will-ram-and-memory-shortages-get?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Bad Will RAM and Memory Shortages Get?](https://hardware.slashdot.org/story/25/11/29/0629207/how-bad-will-ram-and-memory-shortages-get?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-29, 16:44:34](https://lobste.rs/s/qtsdoi/schubfach_smallest_state_art_double) - [Schubfach: The smallest state-of-the-art double-to-string implementation](https://vitaut.net/posts/2025/smallest-dtoa/)
* [2025-11-29, 16:41:56](https://lobste.rs/s/ycwei1/setting_wallpaper_with_less_than_250_kb) - [Setting a wallpaper with less than 250 Kb](https://www.lgfae.com/posts/2025-11-21-SettingAWallpaperWithLessThan250KB.html)
* [2025-11-29, 16:35:50](https://lobste.rs/s/uxqquq/system_7_natively_boots_on_mac_mini_g4) - [System 7 natively boots on the Mac mini G4](https://macos9lives.com/smforum/index.php?topic=7711.0)
* [2025-11-29, 14:22:18](https://lobste.rs/s/gtcrvu/langjam_gamejam_build_programming) - [Langjam Gamejam: Build a programming language then make a game with it](https://langjamgamejam.com/)
* [2025-11-29, 14:05:53](https://news.ycombinator.com/item?id=46087616) - [Datacenters in space aren&apos;t going to work](https://taranis.ie/datacenters-in-space-are-a-terrible-horrible-no-good-idea/)
* [2025-11-29, 12:53:02](https://lobste.rs/s/ehcqlu/airbus_issues_major_a320_recall_due) - [Airbus issues major A320 recall due to software issue](https://www.reuters.com/business/aerospace-defense/airbus-issues-major-a320-recall-after-flight-control-incident-2025-11-28/)
* [2025-11-29, 12:26:00](https://soylentnews.org/article.pl?sid=25/11/26/2246256&amp;from=rss) - [This Linux OS Has Got a Million Downloads Since Windows 10 Support Ended](https://soylentnews.org/article.pl?sid=25/11/26/2246256&amp;from=rss)
* [2025-11-29, 07:43:00](https://soylentnews.org/article.pl?sid=25/11/26/2245225&amp;from=rss) - [Americans With Four-Year Degrees Now Comprise a Record 25% of Unemployed Workers](https://soylentnews.org/article.pl?sid=25/11/26/2245225&amp;from=rss)
* [2025-11-29, 07:26:00](https://lobste.rs/s/cljhyb/self_hosting_my_photos_with_immich) - [Self-hosting my photos with Immich](https://michael.stapelberg.ch/posts/2025-11-29-self-hosting-photos-with-immich/)
* [2025-11-29, 02:58:00](https://soylentnews.org/article.pl?sid=25/11/26/2239240&amp;from=rss) - [China Launches Shenzhou-22 Early for Stranded Space Station Crew](https://soylentnews.org/article.pl?sid=25/11/26/2239240&amp;from=rss)
* [2025-11-28, 22:06:00](https://soylentnews.org/article.pl?sid=25/11/26/2238205&amp;from=rss) - [Cryptology Firm Cancels Elections After Losing Encryption Key](https://soylentnews.org/article.pl?sid=25/11/26/2238205&amp;from=rss)
* [2025-11-28, 22:02:57](https://lobste.rs/s/jxppk7/how_good_engineers_write_bad_code_at_big) - [How good engineers write bad code at big companies](https://www.seangoedecke.com/bad-code-at-big-companies/)
* [2025-11-27, 17:23:06](https://news.ycombinator.com/item?id=46071317) - [What&apos;s Hiding Inside Haribo&apos;s Power Bank and Headphones?](https://www.lumafield.com/first-article/posts/whats-hiding-inside-haribos-power-bank-and-headphones)
* [2025-11-27, 16:07:24](https://news.ycombinator.com/item?id=46070537) - [The Easiest Way to Build a Type Checker](https://jimmyhmiller.com/easiest-way-to-build-type-checker)
* [2025-11-27, 08:23:03](https://news.ycombinator.com/item?id=46067011) - [The inefficiency of RL, and implications for RLVR progress](https://www.dwarkesh.com/p/bits-per-sample)
* [2025-11-26, 22:43:00](https://soylentnews.org/article.pl?sid=25/11/24/234230&amp;from=rss) - [The Escape Room Challenge: How One Person&apos;s Narcissism Can Undermine a Whole Team](https://soylentnews.org/article.pl?sid=25/11/24/234230&amp;from=rss)
* [2025-11-26, 17:55:00](https://soylentnews.org/article.pl?sid=25/11/24/232236&amp;from=rss) - [Mozilla Resolves 21-Year-Old Bug, Adds Full XDG Directory Support](https://soylentnews.org/article.pl?sid=25/11/24/232236&amp;from=rss)
* [2025-11-26, 16:46:05](https://news.ycombinator.com/item?id=46059386) - [Drawing with Chaos](https://yberreby.com/posts/strangedraw/)
* [2025-11-26, 15:46:51](https://news.ycombinator.com/item?id=46058566) - [Show HN: Fixing Google Nano Banana Pixel Art with Rust](https://github.com/Hugo-Dz/spritefusion-pixel-snapper)
* [2025-11-26, 13:11:00](https://soylentnews.org/article.pl?sid=25/11/24/230252&amp;from=rss) - [The Reshoring Initiative - Real Reasons to Bring Jobs Back to USA From Asia](https://soylentnews.org/article.pl?sid=25/11/24/230252&amp;from=rss)
* [2025-11-26, 12:57:35](https://news.ycombinator.com/item?id=46056954) - [The HTTP Query Method](https://www.ietf.org/archive/id/draft-ietf-httpbis-safe-method-w-body-14.html)
* [2025-11-26, 08:24:00](https://soylentnews.org/article.pl?sid=25/11/24/2255253&amp;from=rss) - [Zork I, II, and III go Open Source](https://soylentnews.org/article.pl?sid=25/11/24/2255253&amp;from=rss)
* [2025-11-26, 03:41:00](https://soylentnews.org/article.pl?sid=25/11/24/2253234&amp;from=rss) - [HP and Dell Disable HEVC Support Built Into Their Laptops’ CPUs](https://soylentnews.org/article.pl?sid=25/11/24/2253234&amp;from=rss)
* [2025-11-26, 01:27:16](https://news.ycombinator.com/item?id=46053076) - [Show HN: Real-time system that tracks how news spreads across 200k websites](https://yandori.io/news-flow/)
