# [News Summary](https://kherrick.github.io/news-summary/)

## Tech and Innovation Developments

* [KDE to Drop X11 Session in KDE Plasma 6.8](https://soylentnews.org/article.pl?sid=25/12/02/1148202&amp;from=rss) - KDE announces plans to eliminate X11 session support in upcoming updates, signaling a shift to newer protocols.

* [Alpine Linux 3.23.0 Released: apk-tools v3, linux-stable replaces linux-edge](https://alpinelinux.org/posts/Alpine-3.23.0-released.html) - Alpine Linux introduces a significant update featuring apk-tools iteration and major kernel changes.

* [Zig Quits GitHub, Says Microsoft&#x27;s AI Obsession Has Ruined the Service](https://slashdot.org/story/25/12/03/070228/zig-quits-github-says-microsofts-ai-obsession-has-ruined-the-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The Zig programming language announces its departure from GitHub, citing Microsoft's prioritization of AI as detrimental to the platform's users.

## Legal and Controversial AI Issues

* [OpenAI Loses Fight To Keep ChatGPT Logs Secret In Copyright Case](https://yro.slashdot.org/story/25/12/04/0011222/openai-loses-fight-to-keep-chatgpt-logs-secret-in-copyright-case?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - OpenAI must disclose ChatGPT logs, raising concerns about privacy and legal precedents for AI technologies.

* [Everyone in Seattle hates AI](https://jonready.com/blog/posts/everyone-in-seattle-hates-ai.html) - A perspective on Seattle's growing frustration with AI technologies amidst local misconceptions and challenges.

## Environmental and Scientific Insights

* [Chinese Reusable Booster Explodes During First Orbital Test](https://science.slashdot.org/story/25/12/03/1510248/chinese-reusable-booster-explodes-during-first-orbital-test?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - China's attempt at reusable booster technology faces setbacks with a significant explosion during tests.

* [Study Finds Tattoo Ink Moves Through the Body, Killing Immune Cells](https://science.slashdot.org/story/25/12/03/0447236/study-finds-tattoo-ink-moves-through-the-body-killing-immune-cells?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A study reveals how tattoo ink impacts the immune system, offering new insights into health-related risks.

## Historical and Technological Retrospectives

* [Acme, a brief history of one of the protocols which has changed the Internet](https://blog.brocas.org/2025/12/01/ACME-a-brief-history-of-one-of-the-protocols-which-has-changed-the-Internet-Security/) - An exploration of the ACME protocol and its transformative impact on internet security.

* [1D Conway&#x27;s Life glider found, 3.7B cells long](https://conwaylife.com/forums/viewtopic.php?&amp;p=222136#p222136) - An extraordinary discovery in cellular automata, highlighting mathematical and computational creativity.

## Consumer Trends and Failures

* [The Last Video Rental Store Is Your Public Library](https://hardware.slashdot.org/story/25/12/03/2136213/the-last-video-rental-store-is-your-public-library?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - An unexpected resurgence of physical media rentals through public libraries amidst the era of digital streaming.

* [HBO Max Botches Mad Men&#x27;s 4K Debut After Streaming Wrong File Showing Visible Crewmembers](https://entertainment.slashdot.org/story/25/12/03/1728235/hbo-max-botches-mad-mens-4k-debut-after-streaming-wrong-file-showing-visible-crewmembers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - HBO Max stumbles in Mad Men's 4K release, mistakenly broadcasting footage containing visible crew members.

## Hardware and Industry Changes

* [After Nearly 30 Years, Crucial Will Stop Selling RAM To Consumers](https://hardware.slashdot.org/story/25/12/03/2118251/after-nearly-30-years-crucial-will-stop-selling-ram-to-consumers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Crucial decides to exit the consumer RAM market, potentially reshaping hardware purchasing trends.

* [Micron Announces Exit from Crucial Consumer Business](https://investors.micron.com/news-releases/news-release-details/micron-announces-exit-crucial-consumer-business) - Relatedly, Micron moves to stop selling key consumer products, signaling a shift in its corporate strategy.

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

* [2025-12-04, 01:36:00](https://soylentnews.org/article.pl?sid=25/12/02/1148202&amp;from=rss) - [KDE to Drop X11 Session in KDE Plasma 6.8](https://soylentnews.org/article.pl?sid=25/12/02/1148202&amp;from=rss)
* [2025-12-04, 01:01:00](https://yro.slashdot.org/story/25/12/04/0011222/openai-loses-fight-to-keep-chatgpt-logs-secret-in-copyright-case?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Loses Fight To Keep ChatGPT Logs Secret In Copyright Case](https://yro.slashdot.org/story/25/12/04/0011222/openai-loses-fight-to-keep-chatgpt-logs-secret-in-copyright-case?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-04, 00:00:00](https://tech.slashdot.org/story/25/12/03/2341243/white-house-rolls-back-fuel-economy-standards?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [White House Rolls Back Fuel Economy Standards](https://tech.slashdot.org/story/25/12/03/2341243/white-house-rolls-back-fuel-economy-standards?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-03, 23:58:04](https://news.ycombinator.com/item?id=46142000) - [Kea DHCP: Modern, open source DHCPv4 and DHCPv6 server](https://www.isc.org/kea/)
* [2025-12-03, 23:28:34](https://news.ycombinator.com/item?id=46141745) - [Acme, a brief history of one of the protocols which has changed the Internet](https://blog.brocas.org/2025/12/01/ACME-a-brief-history-of-one-of-the-protocols-which-has-changed-the-Internet-Security/)
* [2025-12-03, 23:23:00](https://hardware.slashdot.org/story/25/12/03/2136213/the-last-video-rental-store-is-your-public-library?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Last Video Rental Store Is Your Public Library](https://hardware.slashdot.org/story/25/12/03/2136213/the-last-video-rental-store-is-your-public-library?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-03, 22:22:00](https://hardware.slashdot.org/story/25/12/03/1737210/after-ai-push-trump-administration-is-now-looking-to-robots?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [After AI Push, Trump Administration Is Now Looking To Robots](https://hardware.slashdot.org/story/25/12/03/1737210/after-ai-push-trump-administration-is-now-looking-to-robots?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-03, 21:56:37](https://news.ycombinator.com/item?id=46140753) - [Greeting Vocalizations in Domestic Cats Are More Frequent with Male Caregivers](https://onlinelibrary.wiley.com/doi/10.1111/eth.70033)
* [2025-12-03, 21:21:00](https://hardware.slashdot.org/story/25/12/03/2118251/after-nearly-30-years-crucial-will-stop-selling-ram-to-consumers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [After Nearly 30 Years, Crucial Will Stop Selling RAM To Consumers](https://hardware.slashdot.org/story/25/12/03/2118251/after-nearly-30-years-crucial-will-stop-selling-ram-to-consumers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-03, 21:16:11](https://news.ycombinator.com/item?id=46140244) - [8086 Microcode Browser](https://nand2mario.github.io/posts/2025/8086_microcode_browser/)
* [2025-12-03, 20:59:16](https://lobste.rs/s/dxqyh4/ghostty_is_now_non_profit) - [Ghostty Is Now Non-Profit](https://mitchellh.com/writing/ghostty-non-profit)
* [2025-12-03, 20:57:02](https://news.ycombinator.com/item?id=46140038) - [Chips for the Rest of Us](https://engineering.nyu.edu/about/unconventional-engineer/chips-for-us)
* [2025-12-03, 20:55:36](https://lobste.rs/s/70rhjl/alpine_linux_3_23_0_released_apk_tools_v3) - [Alpine Linux 3.23.0 Released: apk-tools v3, linux-stable replaces linux-edge](https://alpinelinux.org/posts/Alpine-3.23.0-released.html)
* [2025-12-03, 20:49:00](https://soylentnews.org/article.pl?sid=25/12/02/1141208&amp;from=rss) - [Rapidus to Start Construction on 1.4nm Fab in 2027 — R&amp;D on Node Begins Next Year](https://soylentnews.org/article.pl?sid=25/12/02/1141208&amp;from=rss)
* [2025-12-03, 20:37:08](https://news.ycombinator.com/item?id=46139782) - [Checked-size array parameters in C](https://lwn.net/SubscriberLink/1046840/3eb9029084cc9e1e/)
* [2025-12-03, 20:35:27](https://news.ycombinator.com/item?id=46139761) - [Show HN: I built a dashboard to compare mortgage rates across 120 credit unions](https://finfam.app/blog/credit-union-mortgages)
* [2025-12-03, 20:20:00](https://entertainment.slashdot.org/story/25/12/03/1728235/hbo-max-botches-mad-mens-4k-debut-after-streaming-wrong-file-showing-visible-crewmembers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [HBO Max Botches Mad Men&apos;s 4K Debut After Streaming Wrong File Showing Visible Crewmembers](https://entertainment.slashdot.org/story/25/12/03/1728235/hbo-max-botches-mad-mens-4k-debut-after-streaming-wrong-file-showing-visible-crewmembers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-03, 19:39:53](https://lobste.rs/s/tzdr8h/no_room_for_error_case_study_gleam) - [No room for error - A case study of Gleam in production at Uncover](https://gleam.run/case-studies/uncover/)
* [2025-12-03, 19:37:25](https://news.ycombinator.com/item?id=46138952) - [Everyone in Seattle hates AI](https://jonready.com/blog/posts/everyone-in-seattle-hates-ai.html)
* [2025-12-03, 19:19:00](https://news.slashdot.org/story/25/12/03/1721213/youtube-releases-its-first-ever-recap-of-videos-youve-watched?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [YouTube Releases Its First-Ever Recap of Videos You&apos;ve Watched](https://news.slashdot.org/story/25/12/03/1721213/youtube-releases-its-first-ever-recap-of-videos-youve-watched?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-03, 19:12:40](https://news.ycombinator.com/item?id=46138632) - [Lie groups are crucial to some of the most fundamental theories in physics](https://www.quantamagazine.org/what-are-lie-groups-20251203/)
* [2025-12-03, 19:07:03](https://lobste.rs/s/777iyv/37_signals_open_sources_fizzy) - [37 Signals open-sources Fizzy](https://github.com/basecamp/fizzy)
* [2025-12-03, 18:56:29](https://lobste.rs/s/lo8f8p/teaching_llm_niche_diagraming_language) - [Teaching an LLM a Niche Diagraming Language](https://huy.rocks/everyday/12-01-2025-ai-teaching-an-llm-a-niche-diagraming-language)
* [2025-12-03, 18:40:06](https://news.ycombinator.com/item?id=46138238) - [Ghostty is now non-profit](https://mitchellh.com/writing/ghostty-non-profit)
* [2025-12-03, 18:21:35](https://lobste.rs/s/ep3vsw/c_enum_class_error_codes) - [C++ Enum Class and Error Codes](https://mropert.github.io/2025/12/03/enum_class_error_codes_part3/)
* [2025-12-03, 18:18:39](https://lobste.rs/s/1fbv9j/local_first_is_not_offline_first) - [Local-first is not offline-first](https://shortdiv.com/posts/local-first-is-not-offline-first/)
* [2025-12-03, 18:18:00](https://yro.slashdot.org/story/25/12/03/1712242/india-pulls-its-preinstalled-iphone-app-demand?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [India Pulls Its Preinstalled iPhone App Demand](https://yro.slashdot.org/story/25/12/03/1712242/india-pulls-its-preinstalled-iphone-app-demand?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-03, 18:09:45](https://lobste.rs/s/eseckq/ferrocene_25_11_0_now_available) - [Ferrocene 25.11.0 now available](https://ferrous-systems.com/blog/ferrocene-25-11-0/)
* [2025-12-03, 18:04:32](https://news.ycombinator.com/item?id=46137783) - [Micron Announces Exit from Crucial Consumer Business](https://investors.micron.com/news-releases/news-release-details/micron-announces-exit-crucial-consumer-business)
* [2025-12-03, 18:01:11](https://news.ycombinator.com/item?id=46137746) - [Prompt Injection via Poetry](https://www.wired.com/story/poems-can-trick-ai-into-helping-you-make-a-nuclear-weapon/)
* [2025-12-03, 17:54:44](https://lobste.rs/s/6w7mnm/critical_security_vulnerability_react) - [Critical Security Vulnerability in React Server Components](https://react.dev/blog/2025/12/03/critical-security-vulnerability-in-react-server-components)
* [2025-12-03, 17:47:15](https://news.ycombinator.com/item?id=46137548) - [Launch HN: Phind 3 (YC S22) – Every answer is a mini-app](https://news.ycombinator.com/item?id=46137548)
* [2025-12-03, 17:44:33](https://news.ycombinator.com/item?id=46137514) - [Reverse engineering a $1B Legal AI tool exposed 100k+ confidential files](https://alexschapiro.com/security/vulnerability/2025/12/02/filevine-api-100k)
* [2025-12-03, 17:24:49](https://news.ycombinator.com/item?id=46137253) - [1D Conway&apos;s Life glider found, 3.7B cells long](https://conwaylife.com/forums/viewtopic.php?&amp;p=222136#p222136)
* [2025-12-03, 17:17:00](https://tech.slashdot.org/story/25/12/03/174257/windows-11-growth-slows-as-millions-stick-with-windows-10?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Windows 11 Growth Slows As Millions Stick With Windows 10](https://tech.slashdot.org/story/25/12/03/174257/windows-11-growth-slows-as-millions-stick-with-windows-10?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-03, 17:15:37](https://lobste.rs/s/mdfzhq/marathon_os_gesture_based_mobile_shell) - [Marathon OS: A gesture-based mobile shell and Linux system inspired by BB10](https://marathonos.xyz/)
* [2025-12-03, 17:08:13](https://lobste.rs/s/jf3xnv/modernizing_reddit_s_comment_backend) - [Modernizing Reddit&apos;s Comment Backend Infrastructure](https://www.reddit.com/r/RedditEng/comments/1mbqto6/modernizing_reddits_comment_backend_infrastructure/)
* [2025-12-03, 17:01:18](https://news.ycombinator.com/item?id=46136918) - [Rocketable (YC W25) is hiring a founding engineer to automate software companies](https://www.ycombinator.com/companies/rocketable/jobs/CArgzmX-founding-engineer-automation-platform)
* [2025-12-03, 16:16:00](https://tech.slashdot.org/story/25/12/03/1656245/microsoft-lowers-ai-software-sales-quota-as-customers-resist-new-products?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Lowers AI Software Sales Quota As Customers Resist New Products](https://tech.slashdot.org/story/25/12/03/1656245/microsoft-lowers-ai-software-sales-quota-as-customers-resist-new-products?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-03, 16:02:00](https://soylentnews.org/article.pl?sid=25/12/01/0724224&amp;from=rss) - [openSUSE Tumbleweed to update GRUB package and enable full disk encryption](https://soylentnews.org/article.pl?sid=25/12/01/0724224&amp;from=rss)
* [2025-12-03, 16:00:23](https://news.ycombinator.com/item?id=46136026) - [RCE Vulnerability in React and Next.js](https://github.com/vercel/next.js/security/advisories/GHSA-9qr9-h5gf-34mp)
* [2025-12-03, 16:00:19](https://news.ycombinator.com/item?id=46136023) - [MinIO is now in maintenance-mode](https://github.com/minio/minio/commit/27742d469462e1561c776f88ca7a1f26816d69e2)
* [2025-12-03, 15:30:30](https://news.ycombinator.com/item?id=46135627) - [Why are my headphones buzzing whenever I run my game?](https://alexene.dev/2025/12/03/Why-do-my-headphones-buzz-when-i-run-my-game.html)
* [2025-12-03, 15:15:00](https://science.slashdot.org/story/25/12/03/1510248/chinese-reusable-booster-explodes-during-first-orbital-test?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chinese Reusable Booster Explodes During First Orbital Test](https://science.slashdot.org/story/25/12/03/1510248/chinese-reusable-booster-explodes-during-first-orbital-test?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-03, 15:05:48](https://lobste.rs/s/t2rpap/getting_from_tested_battle_tested) - [Getting from tested to battle-tested](https://blog.janestreet.com/getting-from-tested-to-battle-tested/)
* [2025-12-03, 14:45:26](https://news.ycombinator.com/item?id=46135067) - [Show HN: Fresh – A new terminal editor built in Rust](https://sinelaw.github.io/fresh/)
* [2025-12-03, 14:40:25](https://news.ycombinator.com/item?id=46134991) - [GSWT: Gaussian Splatting Wang Tiles](https://yunfan.zone/gswt_webpage/)
* [2025-12-03, 14:14:00](https://slashdot.org/story/25/12/03/070228/zig-quits-github-says-microsofts-ai-obsession-has-ruined-the-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Zig Quits GitHub, Says Microsoft&apos;s AI Obsession Has Ruined the Service](https://slashdot.org/story/25/12/03/070228/zig-quits-github-says-microsofts-ai-obsession-has-ruined-the-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-03, 13:59:21](https://lobste.rs/s/jcrlmk/desugaring_relationship_between) - [Desugaring the Relationship Between Concrete and Abstract Syntax](https://thunderseethe.dev/posts/desugar-base/)
* [2025-12-03, 13:13:00](https://news.slashdot.org/story/25/12/03/0649236/japanese-devs-face-font-licensing-dilemma-as-annual-costs-increase-from-380-to-20k?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Japanese Devs Face Font Licensing Dilemma as Annual Costs Increase From $380 To $20K](https://news.slashdot.org/story/25/12/03/0649236/japanese-devs-face-font-licensing-dilemma-as-annual-costs-increase-from-380-to-20k?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-03, 12:44:29](https://lobste.rs/s/hjhrcg/you_can_t_fool_optimiser) - [You can&apos;t fool the optimiser](https://xania.org/202512/03-more-adding-integers)
* [2025-12-03, 12:14:34](https://news.ycombinator.com/item?id=46133622) - [You can&apos;t fool the optimizer](https://xania.org/202512/03-more-adding-integers)
* [2025-12-03, 11:20:00](https://soylentnews.org/article.pl?sid=25/12/01/0721253&amp;from=rss) - [Bright Orange Life-Form Could Point to New Dino Discoveries](https://soylentnews.org/article.pl?sid=25/12/01/0721253&amp;from=rss)
* [2025-12-03, 11:14:56](https://news.ycombinator.com/item?id=46133141) - [Are we repeating the telecoms crash with AI datacenters?](https://martinalderson.com/posts/are-we-really-repeating-the-telecoms-crash-with-ai-datacenters/)
* [2025-12-03, 10:35:15](https://lobste.rs/s/hd5ci1/it_s_not_always_icache_2021) - [It&apos;s Not Always ICache (2021)](https://matklad.github.io/2021/07/10/its-not-always-icache.html)
* [2025-12-03, 10:10:00](https://science.slashdot.org/story/25/12/03/0457240/landspace-could-become-chinas-first-company-to-land-a-reusable-rocket?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [LandSpace Could Become China&apos;s First Company To Land a Reusable Rocket](https://science.slashdot.org/story/25/12/03/0457240/landspace-could-become-chinas-first-company-to-land-a-reusable-rocket?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-03, 09:53:27](https://news.ycombinator.com/item?id=46132531) - [Anthropic taps IPO lawyers as it races OpenAI to go public](https://www.ft.com/content/3254fa30-5bdb-4c30-8560-7cd7ebbefc5f)
* [2025-12-03, 08:05:57](https://lobste.rs/s/uzfrya/zig_s_new_plan_for_asynchronous_programs) - [Zig&apos;s new plan for asynchronous programs](https://lwn.net/SubscriberLink/1046084/6cb9e4e1fd82a90d/)
* [2025-12-03, 07:07:00](https://science.slashdot.org/story/25/12/03/0447236/study-finds-tattoo-ink-moves-through-the-body-killing-immune-cells?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Study Finds Tattoo Ink Moves Through the Body, Killing Immune Cells](https://science.slashdot.org/story/25/12/03/0447236/study-finds-tattoo-ink-moves-through-the-body-killing-immune-cells?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-03, 06:58:00](https://soylentnews.org/article.pl?sid=25/12/01/0719241&amp;from=rss) - [Dell: About 1 Billion PCs Will Not or Cannot be Upgraded to Windows 11](https://soylentnews.org/article.pl?sid=25/12/01/0719241&amp;from=rss)
* [2025-12-03, 03:18:01](https://lobste.rs/s/ooaiag/running_linux_on_riscpc_why_is_it_so_hard) - [Running Linux on a RiscPC, why is it so hard?](https://www.thejpster.org.uk/blog/blog-2025-12-02/)
* [2025-12-03, 02:52:19](https://lobste.rs/s/lsf4hv/roko_s_dancing_basilisk) - [Roko&apos;s dancing basilisk](https://boston.conman.org/2025/12/02.1)
* [2025-12-03, 02:03:39](https://lobste.rs/s/1ullif/how_should_we_peer_review_software) - [How should we peer review software?](https://mirawelner.com/posts/peer_review.html)
* [2025-12-03, 01:53:00](https://soylentnews.org/article.pl?sid=25/12/01/0716216&amp;from=rss) - [Scientists Warn Mountain Climate Change is Accelerating Faster Than Predicted](https://soylentnews.org/article.pl?sid=25/12/01/0716216&amp;from=rss)
* [2025-12-02, 21:29:00](https://soylentnews.org/article.pl?sid=25/12/01/0713251&amp;from=rss) - [Scientists Discover That People Act Way Better When Batman is Present](https://soylentnews.org/article.pl?sid=25/12/01/0713251&amp;from=rss)
* [2025-12-02, 20:33:10](https://news.ycombinator.com/item?id=46126446) - [Valve reveals it’s the architect behind a push to bring Windows games to Arm](https://www.theverge.com/report/820656/valve-interview-arm-gaming-steamos-pierre-loup-griffais)
* [2025-12-02, 19:59:53](https://lobste.rs/s/vkyrtf/defense_lock_poisoning_rust) - [In defense of lock poisoning in Rust](https://sunshowers.io/posts/on-poisoning/)
* [2025-12-02, 18:41:43](https://lobste.rs/s/ymwbkg/web_based_markdown_editor_with_no_ai) - [Web-based markdown editor with no AI](https://kraa.io/about)
* [2025-12-02, 16:42:31](https://lobste.rs/s/fvdh2d/zmx_session_persistence_for_terminal) - [zmx: session persistence for terminal processes](https://github.com/neurosnap/zmx)
* [2025-12-02, 16:22:00](https://soylentnews.org/article.pl?sid=25/12/01/0413229&amp;from=rss) - [Major Software Version Releases for Blender and Bottles](https://soylentnews.org/article.pl?sid=25/12/01/0413229&amp;from=rss)
* [2025-12-02, 14:20:03](https://lobste.rs/s/fd2j1n/my_first_impressions_meshcore_off_grid) - [My First Impressions of MeshCore Off-Grid Messaging](https://mtlynch.io/first-impressions-of-meshcore/)
* [2025-12-02, 12:30:19](https://lobste.rs/s/dngk6l/go_proposal_type_safe_error_checking) - [Go proposal: Type-safe error checking](https://antonz.org/accepted/errors-astype/)
* [2025-12-02, 11:40:00](https://soylentnews.org/article.pl?sid=25/12/01/043228&amp;from=rss) - [Mind-Reading Devices Can Now Predict Preconscious Thoughts: Is It Time to Worry?](https://soylentnews.org/article.pl?sid=25/12/01/043228&amp;from=rss)
* [2025-12-02, 06:57:00](https://soylentnews.org/article.pl?sid=25/12/01/0350249&amp;from=rss) - [Billion-Dollar AI Chip Deal Between Google and Meta Could be on the Cards](https://soylentnews.org/article.pl?sid=25/12/01/0350249&amp;from=rss)
* [2025-12-02, 06:26:01](https://lobste.rs/s/c8bzzd/gitmal_static_pages_generator_for_git) - [Gitmal - a static pages generator for Git repos](https://github.com/antonmedv/gitmal)
* [2025-12-02, 02:09:00](https://soylentnews.org/article.pl?sid=25/12/01/0343223&amp;from=rss) - [Ukraine First Country in Europe to Get Starlink Satellite Phone Service](https://soylentnews.org/article.pl?sid=25/12/01/0343223&amp;from=rss)
* [2025-12-01, 21:26:00](https://soylentnews.org/article.pl?sid=25/12/01/0335217&amp;from=rss) - [NTSB Finds Root Cause of Container Ship Hitting Baltimore Bridge](https://soylentnews.org/article.pl?sid=25/12/01/0335217&amp;from=rss)
* [2025-12-01, 16:40:00](https://soylentnews.org/article.pl?sid=25/11/30/0244232&amp;from=rss) - [Pebble, the E-Ink Smartwatch That Refuses to Die, Just Went Fully Open Source](https://soylentnews.org/article.pl?sid=25/11/30/0244232&amp;from=rss)
* [2025-12-01, 11:51:00](https://soylentnews.org/article.pl?sid=25/11/30/0234208&amp;from=rss) - [ClamAV Signature Retirement Announcement](https://soylentnews.org/article.pl?sid=25/11/30/0234208&amp;from=rss)
* [2025-12-01, 07:07:00](https://soylentnews.org/article.pl?sid=25/11/30/0229203&amp;from=rss) - [Roblox to Use AI for User Age Identification but Aus Government Wants More](https://soylentnews.org/article.pl?sid=25/11/30/0229203&amp;from=rss)
* [2025-12-01, 02:20:00](https://soylentnews.org/article.pl?sid=25/11/30/0224246&amp;from=rss) - [Particle Accelerator Waste Could Help Produce Cancer-Fighting Materials](https://soylentnews.org/article.pl?sid=25/11/30/0224246&amp;from=rss)
* [2025-11-30, 21:34:00](https://soylentnews.org/article.pl?sid=25/11/30/0218206&amp;from=rss) - [AI-Induced Psychosis: The Danger of Humans and Machines Hallucinating Together](https://soylentnews.org/article.pl?sid=25/11/30/0218206&amp;from=rss)
* [2025-11-30, 16:51:00](https://soylentnews.org/article.pl?sid=25/11/26/1555213&amp;from=rss) - [Rust for Linux Kernel Co-Maintainer Formally Steps Down](https://soylentnews.org/article.pl?sid=25/11/26/1555213&amp;from=rss)
* [2025-11-30, 16:39:46](https://news.ycombinator.com/item?id=46098108) - [What I don’t like about chains of thoughts (2023)](https://samsja.github.io/blogs/cot/blog/)
* [2025-11-30, 14:17:00](https://soylentnews.org/article.pl?sid=25/11/26/1550227&amp;from=rss) - [Tor Switches to New Counter Galois Onion Relay Encryption Algorithm](https://soylentnews.org/article.pl?sid=25/11/26/1550227&amp;from=rss)
* [2025-11-30, 13:39:52](https://news.ycombinator.com/item?id=46096552) - [Apple Desktop Bus Protocol (2021)](https://www.lopaciuk.eu/2021/03/26/apple-adb-protocol.html)
* [2025-11-30, 11:43:00](https://soylentnews.org/article.pl?sid=25/11/26/149224&amp;from=rss) - [Beijing Unveils Supercritical CO2 Turbine That Could Upend Power Tech](https://soylentnews.org/article.pl?sid=25/11/26/149224&amp;from=rss)
* [2025-11-30, 09:12:00](https://soylentnews.org/article.pl?sid=25/11/26/1415217&amp;from=rss) - [The Unpowered SSDs in Your Drawer Are Slowly Losing Your Data](https://soylentnews.org/article.pl?sid=25/11/26/1415217&amp;from=rss)
* [2025-11-30, 06:53:00](https://soylentnews.org/article.pl?sid=25/11/25/1521238&amp;from=rss) - [Horse Virus EHV-1 Outbreak Spreads to Eight Texas Counties: Two Horses Have Died](https://soylentnews.org/article.pl?sid=25/11/25/1521238&amp;from=rss)
* [2025-11-30, 04:38:00](https://soylentnews.org/article.pl?sid=25/11/25/1517228&amp;from=rss) - [Scientists Unveil Breakthrough Low-Temperature Fuel Cell That Could Revolutionize Hydrogen Power](https://soylentnews.org/article.pl?sid=25/11/25/1517228&amp;from=rss)
* [2025-11-30, 02:23:00](https://soylentnews.org/article.pl?sid=25/11/25/1514218&amp;from=rss) - [Myths About Rapid Spread of the Black Death Influenced by Single “Literary Tale”](https://soylentnews.org/article.pl?sid=25/11/25/1514218&amp;from=rss)
* [2025-11-30, 00:05:00](https://soylentnews.org/article.pl?sid=25/11/25/1512241&amp;from=rss) - [A Rare GM EV1 Saved From The Crusher is Going to be Driveable Again](https://soylentnews.org/article.pl?sid=25/11/25/1512241&amp;from=rss)
