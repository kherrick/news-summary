# [News Summary](https://kherrick.github.io/news-summary/)

## Tech Developments and Innovations

* [Maine Governor Vetoes Data Center Moratorium Bill](https://yro.slashdot.org/story/26/04/24/2357254/maine-governor-vetoes-data-center-moratorium-bill?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Maine's governor has vetoed a legislative bill that sought to impose a moratorium on the construction of new data centers, citing economic development concerns.

* [Firefox Has Integrated Brave&apos;s Adblock Engine](https://itsfoss.com/news/firefox-ships-brave-adblock-engine/) - Mozilla Firefox has partnered with Brave to integrate its adblock engine into the browser to provide users with enhanced ad-filtering capabilities.

* [BMW Is One Step Closer To Selling You a Color-Changing Car](https://tech.slashdot.org/story/26/04/24/2055244/bmw-is-one-step-closer-to-selling-you-a-color-changing-car?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - BMW is nearing the launch of its revolutionary color-changing car, which utilizes cutting-edge E Ink technology to offer customizable exteriors.

* [Google To Invest Up To $40 Billion In Anthropic](https://tech.slashdot.org/story/26/04/24/1933253/google-to-invest-up-to-40-billion-in-anthropic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Google is making a significant investment of up to $40 billion in the AI research firm Anthropic.

* [NASA Inspector Fears New Spacesuits Won&apos;t be Ready for Moon Landing](https://soylentnews.org/article.pl?sid=26/04/23/1139251&amp;from=rss) - Concerns arise over the readiness of new spacesuits necessary for NASA's upcoming moon mission.

* [New Gas-Powered Data Centers Could Emit More Greenhouse Gases Than Entire Nations](https://hardware.slashdot.org/story/26/04/23/2110220/new-gas-powered-data-centers-could-emit-more-greenhouse-gases-than-entire-nations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Recent studies reveal that gas-powered data centers have the potential to emit more greenhouse gases annually than some entire nations.

* [A Fresh Scar on the Moon: Newly Discovered Crater Reveals Recent Impact](https://soylentnews.org/article.pl?sid=26/04/19/1341258&amp;from=rss) - A newly discovered crater on the Moon suggests a recent impact, offering scientists unique insights into lunar history.

## Science and Research

* [With Navigating Nematodes, Scientists Map Out How Brains Implement Behaviors](https://soylentnews.org/article.pl?sid=26/04/24/0051247&amp;from=rss) - Researchers use nematodes to better understand how neural circuits drive behavior, shedding light on the complexity of the nervous system.

* [There Will Be a Scientific Theory of Deep Learning](https://arxiv.org/abs/2604.21691) - A new study explores the potential to craft a comprehensive scientific theory for understanding and optimizing deep learning models.

* [Scientists Load Quantum Computer With First Complete Genome to Crack Biology&apos;s &apos;Impossible&apos; Puzzle](https://soylentnews.org/article.pl?sid=26/04/23/1112242&amp;from=rss) - For the first time, researchers have loaded a quantum computer with an entire human genome to tackle complex biological puzzles.

* [Sperm Whales Speak With a Complex Alphabet and Even Have ‘Vowels,’ Study Finds](https://soylentnews.org/article.pl?sid=26/04/20/0233208&amp;from=rss) - A study indicates remarkable communication capabilities in sperm whales that includes complex acoustic patterns comparable to human language.

* [Total Solar Eclipse Led to Seismic Quiet for Cities Within its Path](https://soylentnews.org/article.pl?sid=26/04/20/0228241&amp;from=rss) - Observations reveal an unprecedented decrease in seismic activity aligning with the recent total solar eclipse.

* [Humpback whales are forming super-groups](https://www.bbc.com/future/article/20260416-the-humpback-super-groups-swarming-the-seas) - Marine scientists report the unprecedented formation of "super-groups" by humpback whales.

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

* [2026-04-25, 03:00:00](https://yro.slashdot.org/story/26/04/24/2357254/maine-governor-vetoes-data-center-moratorium-bill?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Maine Governor Vetoes Data Center Moratorium Bill](https://yro.slashdot.org/story/26/04/24/2357254/maine-governor-vetoes-data-center-moratorium-bill?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-25, 01:56:00](https://soylentnews.org/article.pl?sid=26/04/24/0247228&amp;from=rss) - [Linux Mint Plans for Longer Development Cycle](https://soylentnews.org/article.pl?sid=26/04/24/0247228&amp;from=rss)
* [2026-04-25, 01:47:33](https://news.ycombinator.com/item?id=47897891) - [Firefox Has Integrated Brave&apos;s Adblock Engine](https://itsfoss.com/news/firefox-ships-brave-adblock-engine/)
* [2026-04-25, 01:08:14](https://news.ycombinator.com/item?id=47897706) - [(Blender) Cosmology with Geometry Nodes](https://www.blender.org/user-stories/cosmology-with-geometry-nodes/)
* [2026-04-25, 01:03:09](https://news.ycombinator.com/item?id=47897681) - [\&quot;Plain text has been around for decades and it&apos;s here to stay.\&quot; – Unsung](https://unsung.aresluna.org/plain-text-has-been-around-for-decades-and-its-here-to-stay/)
* [2026-04-25, 00:58:38](https://news.ycombinator.com/item?id=47897647) - [Replace IBM Quantum back end with /dev/urandom](https://github.com/yuvadm/quantumslop/blob/25ad2e76ae58baa96f6219742459407db9dd17f5/URANDOM_DEMO.md)
* [2026-04-25, 00:11:43](https://news.ycombinator.com/item?id=47897349) - [Education must go beyond the mere production of words](https://www.ncregister.com/commentaries/schnell-repairing-the-ruins)
* [2026-04-24, 23:00:00](https://tech.slashdot.org/story/26/04/24/2055244/bmw-is-one-step-closer-to-selling-you-a-color-changing-car?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [BMW Is One Step Closer To Selling You a Color-Changing Car](https://tech.slashdot.org/story/26/04/24/2055244/bmw-is-one-step-closer-to-selling-you-a-color-changing-car?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-24, 22:53:25](https://lobste.rs/s/gp02rx/people_do_not_yearn_for_automation) - [The people do not yearn for automation](https://www.theverge.com/podcast/917029/software-brain-ai-backlash-databases-automation)
* [2026-04-24, 22:36:38](https://news.ycombinator.com/item?id=47896670) - [FusionCore: ROS 2 sensor fusion (IMU and GPS and encoders)](https://github.com/manankharwar/fusioncore)
* [2026-04-24, 22:00:00](https://mobile.slashdot.org/story/26/04/24/2048217/samsung-could-lose-money-on-smartphones-for-the-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Samsung Could Lose Money On Smartphones For the First Time](https://mobile.slashdot.org/story/26/04/24/2048217/samsung-could-lose-money-on-smartphones-for-the-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-24, 21:42:26](https://news.ycombinator.com/item?id=47896163) - [Show HN: I&apos;ve built a nice home server OS](https://lightwhale.asklandd.dk/)
* [2026-04-24, 21:17:47](https://lobste.rs/s/hk4nsp/introducing_mine_coalton_common_lisp_ide) - [Introducing mine, a Coalton and Common Lisp IDE](https://coalton-lang.github.io/20260424-mine/)
* [2026-04-24, 21:08:00](https://soylentnews.org/article.pl?sid=26/04/24/0051247&amp;from=rss) - [With Navigating Nematodes, Scientists Map Out How Brains Implement Behaviors](https://soylentnews.org/article.pl?sid=26/04/24/0051247&amp;from=rss)
* [2026-04-24, 21:00:00](https://it.slashdot.org/story/26/04/24/2032218/bitwarden-cli-is-the-next-compromise-in-checkmarx-supply-chain-campaign?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bitwarden CLI Is the Next Compromise In Checkmarx Supply Chain Campaign](https://it.slashdot.org/story/26/04/24/2032218/bitwarden-cli-is-the-next-compromise-in-checkmarx-supply-chain-campaign?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-24, 20:36:26](https://lobste.rs/s/7va7at/turning_git_commits_into_changelog_with) - [Turning Git commits into changelog with Git-Cliff - YouTube](https://www.youtube.com/watch?v=RWh8qbiLRts)
* [2026-04-24, 20:00:00](https://tech.slashdot.org/story/26/04/24/1933253/google-to-invest-up-to-40-billion-in-anthropic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google To Invest Up To $40 Billion In Anthropic](https://tech.slashdot.org/story/26/04/24/1933253/google-to-invest-up-to-40-billion-in-anthropic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-24, 19:30:46](https://news.ycombinator.com/item?id=47894747) - [My audio interface has SSH enabled by default](https://hhh.hn/rodecaster-duo-fw/)
* [2026-04-24, 19:01:09](https://news.ycombinator.com/item?id=47894435) - [The Classic American Diner](https://blogs.loc.gov/picturethis/2026/04/the-classic-american-diner/)
* [2026-04-24, 19:00:00](https://yro.slashdot.org/story/26/04/24/195210/south-korea-police-arrest-man-for-posting-ai-photo-of-runaway-wolf?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [South Korea Police Arrest Man For Posting AI Photo of Runaway Wolf](https://yro.slashdot.org/story/26/04/24/195210/south-korea-police-arrest-man-for-posting-ai-photo-of-runaway-wolf?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-24, 18:10:03](https://lobste.rs/s/ckacgl/gleam_gets_source_maps_1_16_0) - [Gleam gets source maps, 1.16.0](https://gleam.run/news/javascript-source-maps/)
* [2026-04-24, 18:06:05](https://news.ycombinator.com/item?id=47893779) - [There Will Be a Scientific Theory of Deep Learning](https://arxiv.org/abs/2604.21691)
* [2026-04-24, 18:00:00](https://slashdot.org/story/26/04/24/174206/researchers-simulated-a-delusional-user-to-test-chatbot-safety?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Researchers Simulated a Delusional User To Test Chatbot Safety](https://slashdot.org/story/26/04/24/174206/researchers-simulated-a-delusional-user-to-test-chatbot-safety?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-24, 17:59:45](https://lobste.rs/s/ytzaui/cloudflare_email_service_is) - [Cloudflare Email Service is a deliverability bet dressed as an agents launch](https://lord.technology/2026/04/20/cloudflare-email-service-is-a-deliverability-bet-dressed-as-an-agents-launch.html)
* [2026-04-24, 17:55:48](https://lobste.rs/s/83ighu/nintendo_switch_switch_2019) - [The Nintendo Switch Switch (2019)](https://blog.cynthia.re/post/nintendo-switch-ethernet-switch)
* [2026-04-24, 17:53:37](https://news.ycombinator.com/item?id=47893620) - [CC-Canary: Detect early signs of regressions in Claude Code](https://github.com/delta-hq/cc-canary)
* [2026-04-24, 17:42:15](https://lobste.rs/s/kczxr0/qt_no_contextless_connect) - [Qt No Contextless Connect](https://blog.broulik.de/2026/04/qt-no-contextless-connect/)
* [2026-04-24, 17:03:04](https://lobste.rs/s/lawef3/multiple_things_can_be_true_at_same_time) - [Multiple things can be true at the same time](https://frederikbraun.de/feels-and-llms.html)
* [2026-04-24, 17:00:00](https://tech.slashdot.org/story/26/04/24/1649232/norway-set-to-become-latest-country-to-ban-social-media-for-under-16s?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Norway Set to Become Latest Country to Ban Social Media for Under 16s](https://tech.slashdot.org/story/26/04/24/1649232/norway-set-to-become-latest-country-to-ban-social-media-for-under-16s?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-24, 16:22:00](https://soylentnews.org/article.pl?sid=26/04/24/0045252&amp;from=rss) - [They Built the ‘Cursor for Hardware.’ Now, Anthropic Wants in](https://soylentnews.org/article.pl?sid=26/04/24/0045252&amp;from=rss)
* [2026-04-24, 16:20:15](https://news.ycombinator.com/item?id=47892291) - [SDL Now Supports DOS](https://github.com/libsdl-org/SDL/pull/15377)
* [2026-04-24, 16:16:49](https://news.ycombinator.com/item?id=47892236) - [Diatec, known for its mechanical keyboard brand FILCO, has ceased operations](https://gigazine.net/gsc_news/en/20260424-filco-diatec/)
* [2026-04-24, 16:04:41](https://news.ycombinator.com/item?id=47892074) - [Google plans to invest up to $40B in Anthropic](https://www.bloomberg.com/news/articles/2026-04-24/google-plans-to-invest-up-to-40-billion-in-anthropic)
* [2026-04-24, 16:00:00](https://news.slashdot.org/story/26/04/24/0549221/community-votes-to-deny-water-to-nuclear-weapons-data-center?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Community Votes to Deny Water to Nuclear Weapons Data Center](https://news.slashdot.org/story/26/04/24/0549221/community-votes-to-deny-water-to-nuclear-weapons-data-center?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-24, 15:59:19](https://news.ycombinator.com/item?id=47892019) - [I cancelled Claude: Token issues, declining quality, and poor support](https://nickyreinert.de/en/2026/2026-04-24-claude-critics/)
* [2026-04-24, 15:44:03](https://news.ycombinator.com/item?id=47891801) - [I&apos;m done making desktop applications (2009)](https://www.kalzumeus.com/2009/09/05/desktop-aps-versus-web-apps/)
* [2026-04-24, 15:00:00](https://yro.slashdot.org/story/26/04/24/0539242/us-special-forces-soldier-arrested-for-polymarket-bets-on-maduro-raid?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Special Forces Soldier Arrested For Polymarket Bets On Maduro Raid](https://yro.slashdot.org/story/26/04/24/0539242/us-special-forces-soldier-arrested-for-polymarket-bets-on-maduro-raid?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-24, 14:45:02](https://lobste.rs/s/i2wzkb/using_internet_like_its_1999) - [Using the internet like its 1999](https://joshblais.com/blog/using-the-internet-like-its-1999/)
* [2026-04-24, 14:31:38](https://news.ycombinator.com/item?id=47890841) - [Show HN: Browser Harness – Gives LLM freedom to complete any browser task](https://github.com/browser-use/browser-harness)
* [2026-04-24, 14:28:52](https://news.ycombinator.com/item?id=47890799) - [Sabotaging projects by overthinking, scope creep, and structural diffing](https://kevinlynagh.com/newsletter/2026_04_overthinking/)
* [2026-04-24, 12:43:58](https://lobste.rs/s/edbvsd/junkyard_computing_repurposing) - [Junkyard Computing: Repurposing Discarded Smartphones to Minimize Carbon](https://arxiv.org/abs/2110.06870)
* [2026-04-24, 11:32:00](https://soylentnews.org/article.pl?sid=26/04/23/1143221&amp;from=rss) - [This Pasta Sauce Wants to Record Your Family](https://soylentnews.org/article.pl?sid=26/04/23/1143221&amp;from=rss)
* [2026-04-24, 11:00:00](https://tech.slashdot.org/story/26/04/24/066231/claude-is-connecting-directly-to-your-personal-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Claude Is Connecting Directly To Your Personal Apps](https://tech.slashdot.org/story/26/04/24/066231/claude-is-connecting-directly-to-your-personal-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-24, 10:48:14](https://news.ycombinator.com/item?id=47888372) - [How to be anti-social – a guide to incoherent and isolating social experiences](https://nate.leaflet.pub/3mk4xkaxobc2p)
* [2026-04-24, 10:30:50](https://lobste.rs/s/kd4xkt/spinel_ruby_aot_native_compiler) - [spinel - Ruby AOT native compiler](https://github.com/matz/spinel)
* [2026-04-24, 10:23:05](https://lobste.rs/s/zroip2/hire_based_on_conversation_about_code_not) - [Hire based on the conversation about code, not the code itself](https://dbarabashh.com/thoughts-and-experience/hire-for-the-conversation-not-the-code)
* [2026-04-24, 10:18:22](https://lobste.rs/s/j9rvye/i_found_old_telephone_made_it_control) - [i found an old telephone and made it control spotify](https://natya.is-a.dev/the-beetel/)
* [2026-04-24, 10:02:19](https://lobste.rs/s/qtytfe/sloppy_copies) - [Sloppy Copies](https://www.markround.com/blog/2026/04/19/sloppy-copies/)
* [2026-04-24, 07:01:08](https://lobste.rs/s/esidgp/pure_borrow_linear_haskell_meets_rust) - [Pure Borrow: Linear Haskell Meets Rust-Style Borrowing](https://discourse.haskell.org/t/pure-borrow-linear-haskell-meets-rust-style-borrowing/13975)
* [2026-04-24, 07:00:00](https://mobile.slashdot.org/story/26/04/24/0617244/fccs-foreign-made-router-ban-expands-to-portable-wi-fi-hotspot-devices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FCC&apos;s Foreign-Made Router Ban Expands To Portable Wi-Fi Hotspot Devices](https://mobile.slashdot.org/story/26/04/24/0617244/fccs-foreign-made-router-ban-expands-to-portable-wi-fi-hotspot-devices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-24, 06:51:00](https://soylentnews.org/article.pl?sid=26/04/23/1139251&amp;from=rss) - [NASA Inspector Fears New Spacesuits Won&apos;t be Ready for Moon Landing](https://soylentnews.org/article.pl?sid=26/04/23/1139251&amp;from=rss)
* [2026-04-24, 03:30:00](https://hardware.slashdot.org/story/26/04/23/2110220/new-gas-powered-data-centers-could-emit-more-greenhouse-gases-than-entire-nations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Gas-Powered Data Centers Could Emit More Greenhouse Gases Than Entire Nations](https://hardware.slashdot.org/story/26/04/23/2110220/new-gas-powered-data-centers-could-emit-more-greenhouse-gases-than-entire-nations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-24, 03:01:21](https://news.ycombinator.com/item?id=47884971) - [DeepSeek v4](https://api-docs.deepseek.com/news/news260424)
* [2026-04-24, 02:05:00](https://soylentnews.org/article.pl?sid=26/04/23/1118227&amp;from=rss) - [Linux 7.1 Will Have an Optional New NTFS Driver](https://soylentnews.org/article.pl?sid=26/04/23/1118227&amp;from=rss)
* [2026-04-24, 01:59:16](https://lobste.rs/s/g9jlyl/what_are_best_developer_tools_built) - [What are the best developer tools built around Markdown?](https://lobste.rs/s/g9jlyl/what_are_best_developer_tools_built)
* [2026-04-24, 00:12:47](https://lobste.rs/s/fbfu56/how_hard_is_it_open_file) - [How Hard Is It To Open a File?](https://blog.sebastianwick.net/posts/how-hard-is-it-to-open-a-file/)
* [2026-04-23, 23:27:12](https://lobste.rs/s/p76mlf/box_save_memory) - [Box to save memory](https://dystroy.org/blog/box-to-save-memory/)
* [2026-04-23, 23:00:00](https://yro.slashdot.org/story/26/04/23/2051228/apple-stops-weirdly-storing-data-that-let-cops-spy-on-signal-chats?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Stops Weirdly Storing Data That Let Cops Spy On Signal Chats](https://yro.slashdot.org/story/26/04/23/2051228/apple-stops-weirdly-storing-data-that-let-cops-spy-on-signal-chats?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-23, 22:00:00](https://entertainment.slashdot.org/story/26/04/23/1940241/warner-bros-shareholders-approve-paramounts-81-billion-takeover?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Warner Bros Shareholders Approve Paramount&apos;s $81 Billion Takeover](https://entertainment.slashdot.org/story/26/04/23/1940241/warner-bros-shareholders-approve-paramounts-81-billion-takeover?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-23, 21:21:00](https://soylentnews.org/article.pl?sid=26/04/23/1112242&amp;from=rss) - [Scientists Load Quantum Computer With First Complete Genome to Crack Biology&apos;s &apos;Impossible&apos; Puzzle](https://soylentnews.org/article.pl?sid=26/04/23/1112242&amp;from=rss)
* [2026-04-23, 20:58:32](https://lobste.rs/s/9csbvp/configuring_firefox) - [Configuring Firefox](https://sciops.net/information/technology/firefox)
* [2026-04-23, 20:36:50](https://lobste.rs/s/eiwtub/raylib_v6_0) - [raylib v6.0](https://github.com/raysan5/raylib/releases/tag/6.0)
* [2026-04-23, 19:26:51](https://lobste.rs/s/2mpjlh/ubuntu_26_04_lts_release) - [Ubuntu 26.04 LTS Release](https://documentation.ubuntu.com/release-notes/26.04/)
* [2026-04-23, 17:20:42](https://lobste.rs/s/9p8j3s/security_issues_found_within_rust) - [Security issues found within rust-coreutils](https://discourse.ubuntu.com/t/an-update-on-rust-coreutils/80773)
* [2026-04-23, 16:34:00](https://soylentnews.org/article.pl?sid=26/04/22/0215210&amp;from=rss) - [Europe&apos;s EV Sales Jump 51% as Iran War Sends Gasoline Prices Soaring](https://soylentnews.org/article.pl?sid=26/04/22/0215210&amp;from=rss)
* [2026-04-23, 16:13:36](https://lobste.rs/s/izqocw/meshcore_io_why_split) - [Meshcore.io - Why The Split?](https://blog.meshcore.io/2026/04/23/the-split)
* [2026-04-23, 15:26:22](https://lobste.rs/s/x79usb/bitwarden_cli_compromised_ongoing) - [Bitwarden CLI Compromised in Ongoing Checkmarx Supply Chain](https://socket.dev/blog/bitwarden-cli-compromised)
* [2026-04-23, 11:50:00](https://soylentnews.org/article.pl?sid=26/04/22/023218&amp;from=rss) - [Bluetooth Tracker Hidden in a Postcard and Mailed to a Warship Exposed its Location](https://soylentnews.org/article.pl?sid=26/04/22/023218&amp;from=rss)
* [2026-04-23, 10:46:49](https://lobste.rs/s/vr4rsc/who_even_uses_jemalloc_2026_anyway_many) - [Who even uses jemalloc in 2026 anyway? (many major projects)](https://theconsensus.dev/p/2026/04/16/who-even-uses-jemalloc-anyway.html)
* [2026-04-23, 08:10:09](https://news.ycombinator.com/item?id=47873323) - [Email could have been X.400 times better](https://buttondown.com/blog/x400-vs-smtp-email)
* [2026-04-23, 07:07:00](https://soylentnews.org/article.pl?sid=26/04/21/2358226&amp;from=rss) - [The NAND Gate of Continuous Math](https://soylentnews.org/article.pl?sid=26/04/21/2358226&amp;from=rss)
* [2026-04-23, 05:07:51](https://news.ycombinator.com/item?id=47872418) - [A disabled kea parrot is the alpha male of his circus](https://www.cell.com/current-biology/fulltext/S0960-9822(26)00259-9)
* [2026-04-23, 04:40:31](https://news.ycombinator.com/item?id=47872306) - [MacBook Neo and how the iPad should be](https://craigmod.com/essays/ipad_neo/)
* [2026-04-23, 02:22:00](https://soylentnews.org/article.pl?sid=26/04/21/2355256&amp;from=rss) - [WebinarTV’s Rampant Scraping of Online Meetings ](https://soylentnews.org/article.pl?sid=26/04/21/2355256&amp;from=rss)
* [2026-04-22, 21:39:00](https://soylentnews.org/article.pl?sid=26/04/21/2350253&amp;from=rss) - [How Museums Can Use Biomolecular Archaeology to Bring Ancient Scents to Life](https://soylentnews.org/article.pl?sid=26/04/21/2350253&amp;from=rss)
* [2026-04-22, 16:53:00](https://soylentnews.org/article.pl?sid=26/04/20/0241235&amp;from=rss) - [Tech Companies Are Trying to Neuter Colorado&apos;s Landmark Right-to-Repair Law](https://soylentnews.org/article.pl?sid=26/04/20/0241235&amp;from=rss)
* [2026-04-22, 14:18:35](https://news.ycombinator.com/item?id=47864056) - [Iliad fragment found in Roman-era mummy](https://www.thehistoryblog.com/archives/75877)
* [2026-04-22, 12:09:00](https://soylentnews.org/article.pl?sid=26/04/20/0233208&amp;from=rss) - [Sperm Whales Speak With a Complex Alphabet and Even Have ‘Vowels,’ Study Finds](https://soylentnews.org/article.pl?sid=26/04/20/0233208&amp;from=rss)
* [2026-04-22, 08:55:21](https://news.ycombinator.com/item?id=47860911) - [The Overtom Chess Computer Museum](https://tluif.home.xs4all.nl/chescom/Engindex.html)
* [2026-04-22, 07:27:00](https://soylentnews.org/article.pl?sid=26/04/20/0227209&amp;from=rss) - [The Friction We Forgot](https://soylentnews.org/article.pl?sid=26/04/20/0227209&amp;from=rss)
* [2026-04-22, 04:24:32](https://news.ycombinator.com/item?id=47858982) - [Reverse-engineering infrared-based electronic shelf labels](https://www.furrtek.org/?a=esl)
* [2026-04-22, 04:17:07](https://news.ycombinator.com/item?id=47858939) - [Paraloid B-72](https://en.wikipedia.org/wiki/Paraloid_B-72)
* [2026-04-22, 02:55:49](https://news.ycombinator.com/item?id=47858294) - [Humpback whales are forming super-groups](https://www.bbc.com/future/article/20260416-the-humpback-super-groups-swarming-the-seas)
* [2026-04-22, 02:34:00](https://soylentnews.org/article.pl?sid=26/04/20/0228241&amp;from=rss) - [Total Solar Eclipse Led to Seismic Quiet for Cities Within its Path](https://soylentnews.org/article.pl?sid=26/04/20/0228241&amp;from=rss)
* [2026-04-21, 21:50:00](https://soylentnews.org/article.pl?sid=26/04/19/1341258&amp;from=rss) - [A Fresh Scar on the Moon: Newly Discovered Crater Reveals Recent Impact](https://soylentnews.org/article.pl?sid=26/04/19/1341258&amp;from=rss)
* [2026-04-21, 17:13:29](https://news.ycombinator.com/item?id=47851613) - [Work with the garage door up (2024)](https://notes.andymatuschak.org/Work_with_the_garage_door_up)
* [2026-04-21, 17:05:00](https://soylentnews.org/article.pl?sid=26/04/19/1338217&amp;from=rss) - [Europol Launches Operation PowerOFF — Warns 75,000 DDoS Users and Takes Down 53 Domains](https://soylentnews.org/article.pl?sid=26/04/19/1338217&amp;from=rss)
* [2026-04-21, 16:55:04](https://news.ycombinator.com/item?id=47851377) - [You don&apos;t want long-lived keys](https://argemma.com/blog/long-lived-keys/)
* [2026-04-21, 12:19:00](https://soylentnews.org/article.pl?sid=26/04/19/1333258&amp;from=rss) - [Soviet CDs and CD Players Existed, and They Were Strange](https://soylentnews.org/article.pl?sid=26/04/19/1333258&amp;from=rss)
* [2026-04-21, 07:32:00](https://soylentnews.org/article.pl?sid=26/04/19/125219&amp;from=rss) - [Chinese Carmaker Patents Voice-Controlled &apos;in-Vehicle Toilet&apos;](https://soylentnews.org/article.pl?sid=26/04/19/125219&amp;from=rss)
* [2026-04-21, 02:47:00](https://soylentnews.org/article.pl?sid=26/04/19/120245&amp;from=rss) - [In the Face of Rampant AI, is ‘Data Poisoning’ a New Form of Civil Disobedience?](https://soylentnews.org/article.pl?sid=26/04/19/120245&amp;from=rss)
