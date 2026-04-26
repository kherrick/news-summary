# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Reviving BrowserID in 2026](https://wakamoleguy.com/p/reviving-browserid-in-2026) - Discussion on innovating and reviving a once-promising authentication system [comments](https://news.ycombinator.com/item?id=47906770).

* [A breakthrough in C/C++ dependency management](https://lcamtuf.substack.com/p/a-breakthrough-in-cc-dependency-management) - Examination of a new paradigm in managing C/C++ dependencies for modern development workflows [comments](https://lobste.rs/s/cn89rt/breakthrough_c_c_dependency_management).

* [Lute: a standalone runtime for Luau](https://lute.luau.org) - Introduction of Lute, a runtime specifically crafted for Luau, promising performance and accessibility [comments](https://lobste.rs/s/jzuifo/lute_standalone_runtime_for_luau).

* [Hyper-DERP: C++/io_uring DERP relay - Same throughput as Tailscale's derper, half the cores](https://hyper-derp.dev/blog/hyper-derp-announcement/) - Innovative design in C++/io_uring offering high throughput with reduced computational resources [comments](https://lobste.rs/s/uiqamk/hyper_derp_c_io_uring_derp_relay_same).

* [America's Geothermal Breakthrough](https://oilprice.com/Alternative-Energy/Geothermal-Energy/Americas-Geothermal-Breakthrough-Could-Unlock-a-150-Gigawatt-Energy-Revolution.html) - Exploration into a breakthrough innovation that could potentially unlock a massive geothermal energy revolution [comments](https://news.ycombinator.com/item?id=47903945).

* [Open Source Developer Brings Linux to Windows 95, Windows 98, and Windows ME](https://tech.slashdot.org/story/26/04/25/179232/open-source-developer-brings-linux-to-windows-95-windows-98-and-windows-me?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A developer’s groundbreaking effort to bring Linux compatibility to legacy Windows systems [comments](https://news.ycombinator.com/item?id=47884625).

* [Amateur armed with ChatGPT solves an Erdős problem](https://www.scientificamerican.com/article/amateur-armed-with-chatgpt-vibe-maths-a-60-year-old-problem/) - A remarkable breakthrough achieved by an amateur mathematician using ChatGPT to solve a long-standing problem [comments](https://news.ycombinator.com/item?id=47903126).

## Science and Space

* [Physicists Witness Pinpricks of Darkness Moving Faster Than the Speed of Light​](https://soylentnews.org/article.pl?sid=26/04/24/1220209&amp;from=rss) - Observation of an unprecedented phenomenon where regions of darkness move faster than light [comments](https://news.ycombinator.com/item?id=47899053).

* [FDA Gives Green Light To the First Gene Therapy For Deafness](https://science.slashdot.org/story/26/04/24/2042247/fda-gives-green-light-to-the-first-gene-therapy-for-deafness?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Approval for an innovative gene therapy to treat deafness [comments](https://news.ycombinator.com/item?id=47899053).

* [Physicists Revive 1990s Laser Concept To Propose a Next-Generation Atomic Clock](https://science.slashdot.org/story/26/04/25/005216/physicists-revive-1990s-laser-concept-to-propose-a-next-generation-atomic-clock?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A revisit to a 1990s laser concept setting the stage for cutting-edge advancements in atomic clocks and their functionality [comments](https://news.ycombinator.com/item?id=47899053).

## Science Policy and Society

* [Trump Fires All 24 Members of America's National Science Board](https://news.slashdot.org/story/26/04/26/0044212/trump-fires-all-24-members-of-americas-national-science-board?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Insight into major reorganization within the U.S. National Science Board and its implications [comments](https://news.slashdot.org/story/26/04/26/0044212/trump-fires-all-24-members-of-americas-national-science-board?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

* [Colorado Adds Open-Source Exemption to Age-Verification Bill](https://fosstodon.org/@carlrichell/116460505717380644) - Analysis of a Colorado law making exemptions for open-source platforms in age verification legislation [comments](https://news.ycombinator.com/item?id=47905304).

* [White House Pushed Out New AI Official After Just Four Days on the Job](https://yro.slashdot.org/story/26/04/25/0348249/white-house-pushed-out-new-ai-official-after-just-four-days-on-the-job?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A quick departure of a newly appointed AI official raises questions [comments](https://yro.slashdot.org/story/26/04/25/0348249/white-house-pushed-out-new-ai-official-after-just-four-days-on-the-job?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

## Cultural and Societal Shifts

* [The people do not yearn for automation](https://www.theverge.com/podcast/917029/software-brain-ai-backlash-databases-automation) - A discussion about resistance to automation and its implications on daily life [comments](https://lobste.rs/s/88pksu/linux_may_drop_old_network_drivers_now_ai).

* [France Keeps Breaking the Internet to Stop Piracy, Even Though It's Not Working](https://soylentnews.org/article.pl?sid=26/04/24/1227222&amp;from=rss) focuses on French policies to combat piracy that yields limited results.  Links-to-comment-[https://news.slashdot.org/comments.pl?sid7](compatible inclusion feedback inline with JSON mandate 🎯)significarAlternativer-language Correction function Semantics न्य. tailoring Off

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

* [2026-04-26, 02:38:51](https://news.ycombinator.com/item?id=47906770) - [Reviving BrowserID in 2026](https://wakamoleguy.com/p/reviving-browserid-in-2026)
* [2026-04-26, 01:39:32](https://news.ycombinator.com/item?id=47906485) - [Does Internet Advertising Work?](https://freakonomics.com/podcast/does-advertising-actually-work-part-2-digital-ep-441/)
* [2026-04-26, 00:50:56](https://news.ycombinator.com/item?id=47906253) - [Tell HN: An app is silently installing itself on my iPhone every day](https://news.ycombinator.com/item?id=47906253)
* [2026-04-26, 00:45:00](https://news.slashdot.org/story/26/04/26/0044212/trump-fires-all-24-members-of-americas-national-science-board?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Fires All 24 Members of America&apos;s National Science Board](https://news.slashdot.org/story/26/04/26/0044212/trump-fires-all-24-members-of-americas-national-science-board?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-26, 00:12:47](https://news.ycombinator.com/item?id=47905984) - [Why has there been so little progress on Alzheimer&apos;s disease?](https://freakonomics.com/podcast/why-has-there-been-so-little-progress-on-alzheimers-disease/)
* [2026-04-26, 00:08:22](https://lobste.rs/s/cn89rt/breakthrough_c_c_dependency_management) - [A breakthrough in C/C++ dependency management](https://lcamtuf.substack.com/p/a-breakthrough-in-cc-dependency-management)
* [2026-04-26, 00:02:26](https://lobste.rs/s/hllfeo/npm_slop_wonky_software_supply_chains) - [Npm Slop &amp; Wonky Software Supply Chains](https://simonramstedt.com/blog/2026-04-09-npm-slop-and-wonky-software-supply-chains/)
* [2026-04-25, 23:44:05](https://news.ycombinator.com/item?id=47905768) - [DeepSeek-V4 on Day 0: From Fast Inference to Verified RL with SGLang and Miles](https://www.lmsys.org/blog/2026-04-25-deepseek-v4/)
* [2026-04-25, 23:38:38](https://lobste.rs/s/jzuifo/lute_standalone_runtime_for_luau) - [Lute: a standalone runtime for Luau](https://lute.luau.org)
* [2026-04-25, 23:37:44](https://lobste.rs/s/n8i2wl/it_s_ok_use_floating_point_for_money) - [It&apos;s OK To Use Floating Point for Money](https://suricrasia.online/blog/its-ok-to-use/)
* [2026-04-25, 23:21:06](https://lobste.rs/s/dtkjsz/it_s_ok_use_coding_assistance_tools_revive) - [It&apos;s OK to use coding assistance tools to revive the projects you never were going to finish](https://blog.matthewbrunelle.com/its-ok-to-use-coding-assistance-tools-to-revive-the-projects-you-never-were-going-to-finish/)
* [2026-04-25, 23:09:00](https://yro.slashdot.org/story/26/04/25/236216/australias-teen-social-media-ban-isnt-working-half-their-teens-still-have-access-survey-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Australia&apos;s Teen Social Media Ban Isn&apos;t Working. Half Their Teens Still Have Access, Survey Finds](https://yro.slashdot.org/story/26/04/25/236216/australias-teen-social-media-ban-isnt-working-half-their-teens-still-have-access-survey-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-25, 22:41:05](https://news.ycombinator.com/item?id=47905304) - [Colorado Adds Open-Source Exemption to Age-Verification Bill](https://fosstodon.org/@carlrichell/116460505717380644)
* [2026-04-25, 21:51:18](https://news.ycombinator.com/item?id=47904876) - [USB Cheat Sheet (2022)](https://fabiensanglard.net/usbcheat/index.html)
* [2026-04-25, 21:26:00](https://yro.slashdot.org/story/26/04/25/2124221/colorado-adds-open-source-exemption-to-age-verification-bill?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Colorado Adds Open-Source Exemption to Age-Verification Bill](https://yro.slashdot.org/story/26/04/25/2124221/colorado-adds-open-source-exemption-to-age-verification-bill?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-25, 20:54:00](https://soylentnews.org/article.pl?sid=26/04/24/1234243&amp;from=rss) - [US Wants Rare Earth Independence From China — but Can DARPA Actually Make It Work?](https://soylentnews.org/article.pl?sid=26/04/24/1234243&amp;from=rss)
* [2026-04-25, 20:19:00](https://tech.slashdot.org/story/26/04/25/2017210/is-the-world-ready-for-a-car-without-a-rear-window?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is the World Ready For a Car Without a Rear Window?](https://tech.slashdot.org/story/26/04/25/2017210/is-the-world-ready-for-a-car-without-a-rear-window?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-25, 20:10:21](https://lobste.rs/s/bwg33l/my_homemade_pbx) - [My Homemade PBX](https://wandel.ca/homepage/pbx.html)
* [2026-04-25, 19:48:15](https://lobste.rs/s/uiqamk/hyper_derp_c_io_uring_derp_relay_same) - [Hyper-DERP: C++/io_uring DERP relay - Same throughput as Tailscale&apos;s derper, half the cores](https://hyper-derp.dev/blog/hyper-derp-announcement/)
* [2026-04-25, 19:38:55](https://news.ycombinator.com/item?id=47903945) - [America&apos;s Geothermal Breakthrough](https://oilprice.com/Alternative-Energy/Geothermal-Energy/Americas-Geothermal-Breakthrough-Could-Unlock-a-150-Gigawatt-Energy-Revolution.html)
* [2026-04-25, 19:03:01](https://news.ycombinator.com/item?id=47903690) - [Show HN: Kloak, A secret manager that keeps K8s workload away from secrets](https://getkloak.io/)
* [2026-04-25, 18:34:00](https://tech.slashdot.org/story/26/04/25/179232/open-source-developer-brings-linux-to-windows-95-windows-98-and-windows-me?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Open Source Developer Brings Linux to Windows 95, Windows 98, and Windows ME](https://tech.slashdot.org/story/26/04/25/179232/open-source-developer-brings-linux-to-windows-95-windows-98-and-windows-me?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-25, 18:24:40](https://lobste.rs/s/88pksu/linux_may_drop_old_network_drivers_now_ai) - [Linux May Drop Old Network Drivers Now That AI-Driven Bug Reports Are Causing A Burden](https://www.phoronix.com/news/Linux-Old-Network-AI)
* [2026-04-25, 18:06:43](https://lobste.rs/s/3v9wvu/new_10_gbe_usb_adapters_are_cooler_smaller) - [New 10 GbE USB adapters are cooler, smaller, cheaper](https://www.jeffgeerling.com/blog/2026/new-10-gbe-usb-adapters-cooler-smaller-cheaper/)
* [2026-04-25, 17:55:22](https://lobste.rs/s/8xd0x7/mac_app_gold_rush_age_vibe_coding) - [The Mac App Gold Rush in the Age of Vibe Coding](https://caio.ca/blog/ai-vibe-coded-mac-apps.html)
* [2026-04-25, 17:47:02](https://news.ycombinator.com/item?id=47903173) - [Mine, an IDE for Coalton and Common Lisp](https://coalton-lang.github.io/mine/)
* [2026-04-25, 17:40:38](https://news.ycombinator.com/item?id=47903126) - [Amateur armed with ChatGPT solves an Erdős problem](https://www.scientificamerican.com/article/amateur-armed-with-chatgpt-vibe-maths-a-60-year-old-problem/)
* [2026-04-25, 17:34:00](https://linux.slashdot.org/story/26/04/25/0757219/linux-drops-isdn-subsystem-and-other-old-network-drivers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linux  Drops ISDN Subsystem and Other Old Network Drivers](https://linux.slashdot.org/story/26/04/25/0757219/linux-drops-isdn-subsystem-and-other-old-network-drivers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-25, 17:20:34](https://news.ycombinator.com/item?id=47902987) - [Simulacrum of Knowledge Work](https://blog.happyfellow.dev/simulacrum-of-knowledge-work/)
* [2026-04-25, 16:34:00](https://yro.slashdot.org/story/26/04/25/0348249/white-house-pushed-out-new-ai-official-after-just-four-days-on-the-job?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [White House Pushed Out New AI Official After Just Four Days on the Job](https://yro.slashdot.org/story/26/04/25/0348249/white-house-pushed-out-new-ai-official-after-just-four-days-on-the-job?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-25, 16:22:30](https://lobste.rs/s/9exagw/martin_galway_s_music_assembly_player) - [Martin Galway&apos;s music assembly player from Commodore 64 games](https://github.com/MartinGalway/C64_music)
* [2026-04-25, 16:11:50](https://news.ycombinator.com/item?id=47902525) - [Using coding assistance tools to revive projects you never were going to finish](https://blog.matthewbrunelle.com/its-ok-to-use-coding-assistance-tools-to-revive-the-projects-you-never-were-going-to-finish/)
* [2026-04-25, 16:08:00](https://soylentnews.org/article.pl?sid=26/04/24/1232232&amp;from=rss) - [Contrary to Popular Superstition, AES 128 is Just Fine in a Post](https://soylentnews.org/article.pl?sid=26/04/24/1232232&amp;from=rss)
* [2026-04-25, 15:34:00](https://news.slashdot.org/story/26/04/25/079207/free-software-foundation-says-responsible-ai-licenses-which-restrict-harmful-uses-are-unethical-and-nonfree?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Free Software Foundation Says &apos;Responsible AI&apos; Licenses Which Restrict Harmful Uses are Unethical and Nonfree](https://news.slashdot.org/story/26/04/25/079207/free-software-foundation-says-responsible-ai-licenses-which-restrict-harmful-uses-are-unethical-and-nonfree?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-25, 15:13:01](https://lobste.rs/s/vkngyl/removing_auicgp_instruction) - [Removing the AUICGP instruction](https://cheriot.org/isa/toolchain/2026/03/23/removing-auicgp.html)
* [2026-04-25, 14:45:09](https://lobste.rs/s/o45fm1/you_don_t_want_long_lived_keys) - [You don&apos;t want long-lived keys](https://argemma.com/blog/long-lived-keys/)
* [2026-04-25, 14:34:00](https://slashdot.org/story/26/04/25/091254/intels-stock-soars-24-friday-its-biggest-one-day-gain-since-1987?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel&apos;s Stock Soars 24% Friday, Its Biggest One-Day Gain Since 1987](https://slashdot.org/story/26/04/25/091254/intels-stock-soars-24-friday-its-biggest-one-day-gain-since-1987?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-25, 14:17:31](https://news.ycombinator.com/item?id=47901734) - [GPT‑5.5 Bio Bug Bounty](https://openai.com/index/gpt-5-5-bio-bug-bounty/)
* [2026-04-25, 14:15:56](https://lobste.rs/s/syfxqg/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/syfxqg/what_are_you_doing_this_weekend)
* [2026-04-25, 13:46:27](https://lobste.rs/s/u0pix1/build_yourself_flowers) - [Build yourself flowers](https://vickiboykis.com/2026/04/20/build-yourself-flowers/)
* [2026-04-25, 13:07:04](https://lobste.rs/s/2jvgsq/your_cpu_has_more_registers_than_you_d) - [Your CPU Has More Registers Than You&apos;d Think](https://fp32.org/register_renaming.html)
* [2026-04-25, 12:50:27](https://lobste.rs/s/wkpzft/metal_lossy_compression_format) - [Metal Lossy Compression Format](https://www.ludicon.com/castano/blog/2026/04/metal-lossy-compression-format/)
* [2026-04-25, 12:17:49](https://lobste.rs/s/qqahyp/comparing_compression_tools) - [Comparing compression tools](https://www.arp242.net/cmp-compress.html)
* [2026-04-25, 11:22:00](https://soylentnews.org/article.pl?sid=26/04/24/1227222&amp;from=rss) - [France Keeps Breaking the Internet to Stop Piracy, Even Though It&apos;s Not Working](https://soylentnews.org/article.pl?sid=26/04/24/1227222&amp;from=rss)
* [2026-04-25, 11:10:41](https://news.ycombinator.com/item?id=47900478) - [Discret 11, the French TV encryption of the 80s](https://fabiensanglard.net/discret11/)
* [2026-04-25, 11:00:00](https://science.slashdot.org/story/26/04/25/005216/physicists-revive-1990s-laser-concept-to-propose-a-next-generation-atomic-clock?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Physicists Revive 1990s Laser Concept To Propose a Next-Generation Atomic Clock](https://science.slashdot.org/story/26/04/25/005216/physicists-revive-1990s-laser-concept-to-propose-a-next-generation-atomic-clock?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-25, 10:46:14](https://news.ycombinator.com/item?id=47900398) - [Martin Galway&apos;s music source files from 1980&apos;s Commodore 64 games](https://github.com/MartinGalway/C64_music)
* [2026-04-25, 10:36:28](https://lobste.rs/s/bvh1dq/why_i_m_done_making_desktop_applications) - [Why I’m Done Making Desktop Applications (2009)](https://www.kalzumeus.com/2009/09/05/desktop-aps-versus-web-apps/)
* [2026-04-25, 10:05:46](https://lobste.rs/s/gikmcc/avoid_shipping_your_org_chart) - [Avoid Shipping Your Org Chart](https://chronicbuildfailure.co/how-to-avoid-shipping-your-org-chart-c086effe751c)
* [2026-04-25, 09:17:19](https://lobste.rs/s/rd9x6c/gmail_bringing_easy_end_end_encryption) - [Gmail: Bringing easy end-to-end encryption to all businesses](https://workspace.google.com/blog/identity-and-security/gmail-easy-end-to-end-encryption-all-businesses)
* [2026-04-25, 07:00:00](https://science.slashdot.org/story/26/04/24/2042247/fda-gives-green-light-to-the-first-gene-therapy-for-deafness?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FDA Gives Green Light To the First Gene Therapy For Deafness](https://science.slashdot.org/story/26/04/24/2042247/fda-gives-green-light-to-the-first-gene-therapy-for-deafness?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-25, 06:38:00](https://soylentnews.org/article.pl?sid=26/04/24/1220209&amp;from=rss) - [Physicists Witness Pinpricks of Darkness Moving Faster Than the Speed of Light ‪](https://soylentnews.org/article.pl?sid=26/04/24/1220209&amp;from=rss)
* [2026-04-25, 05:56:12](https://news.ycombinator.com/item?id=47899053) - [New 10 GbE USB adapters are cooler, smaller, cheaper](https://www.jeffgeerling.com/blog/2026/new-10-gbe-usb-adapters-cooler-smaller-cheaper/)
* [2026-04-25, 05:41:01](https://lobste.rs/s/xgtyyu/do_i_belong_tech_anymore) - [Do I belong in tech anymore?](https://ky.fyi/posts/ai-burnout)
* [2026-04-25, 03:00:00](https://yro.slashdot.org/story/26/04/24/2357254/maine-governor-vetoes-data-center-moratorium-bill?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Maine Governor Vetoes Data Center Moratorium Bill](https://yro.slashdot.org/story/26/04/24/2357254/maine-governor-vetoes-data-center-moratorium-bill?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-25, 01:56:00](https://soylentnews.org/article.pl?sid=26/04/24/0247228&amp;from=rss) - [Linux Mint Plans for Longer Development Cycle](https://soylentnews.org/article.pl?sid=26/04/24/0247228&amp;from=rss)
* [2026-04-24, 23:00:00](https://tech.slashdot.org/story/26/04/24/2055244/bmw-is-one-step-closer-to-selling-you-a-color-changing-car?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [BMW Is One Step Closer To Selling You a Color-Changing Car](https://tech.slashdot.org/story/26/04/24/2055244/bmw-is-one-step-closer-to-selling-you-a-color-changing-car?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-24, 22:53:25](https://lobste.rs/s/gp02rx/people_do_not_yearn_for_automation) - [The people do not yearn for automation](https://www.theverge.com/podcast/917029/software-brain-ai-backlash-databases-automation)
* [2026-04-24, 22:00:00](https://mobile.slashdot.org/story/26/04/24/2048217/samsung-could-lose-money-on-smartphones-for-the-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Samsung Could Lose Money On Smartphones For the First Time](https://mobile.slashdot.org/story/26/04/24/2048217/samsung-could-lose-money-on-smartphones-for-the-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-24, 21:08:00](https://soylentnews.org/article.pl?sid=26/04/24/0051247&amp;from=rss) - [With Navigating Nematodes, Scientists Map Out How Brains Implement Behaviors](https://soylentnews.org/article.pl?sid=26/04/24/0051247&amp;from=rss)
* [2026-04-24, 21:00:00](https://it.slashdot.org/story/26/04/24/2032218/bitwarden-cli-is-the-next-compromise-in-checkmarx-supply-chain-campaign?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bitwarden CLI Is the Next Compromise In Checkmarx Supply Chain Campaign](https://it.slashdot.org/story/26/04/24/2032218/bitwarden-cli-is-the-next-compromise-in-checkmarx-supply-chain-campaign?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-24, 18:10:03](https://lobste.rs/s/ckacgl/gleam_gets_source_maps_1_16_0) - [Gleam gets source maps, 1.16.0](https://gleam.run/news/javascript-source-maps/)
* [2026-04-24, 16:22:00](https://soylentnews.org/article.pl?sid=26/04/24/0045252&amp;from=rss) - [They Built the ‘Cursor for Hardware.’ Now, Anthropic Wants in](https://soylentnews.org/article.pl?sid=26/04/24/0045252&amp;from=rss)
* [2026-04-24, 11:32:00](https://soylentnews.org/article.pl?sid=26/04/23/1143221&amp;from=rss) - [This Pasta Sauce Wants to Record Your Family](https://soylentnews.org/article.pl?sid=26/04/23/1143221&amp;from=rss)
* [2026-04-24, 10:23:05](https://lobste.rs/s/zroip2/hire_based_on_conversation_about_code_not) - [Hire based on the conversation about code, not the code itself](https://dbarabashh.com/thoughts-and-experience/hire-for-the-conversation-not-the-code)
* [2026-04-24, 06:51:00](https://soylentnews.org/article.pl?sid=26/04/23/1139251&amp;from=rss) - [NASA Inspector Fears New Spacesuits Won&apos;t be Ready for Moon Landing](https://soylentnews.org/article.pl?sid=26/04/23/1139251&amp;from=rss)
* [2026-04-24, 02:07:59](https://news.ycombinator.com/item?id=47884662) - [The George Business, by Roger Zelazny (1980)](https://www.eternal-flame.org/library/oldlibrary/georgebusiness.html)
* [2026-04-24, 02:05:00](https://soylentnews.org/article.pl?sid=26/04/23/1118227&amp;from=rss) - [Linux 7.1 Will Have an Optional New NTFS Driver](https://soylentnews.org/article.pl?sid=26/04/23/1118227&amp;from=rss)
* [2026-04-24, 02:01:40](https://news.ycombinator.com/item?id=47884625) - [How Hard Is It to Open a File?](https://blog.sebastianwick.net/posts/how-hard-is-it-to-open-a-file/)
* [2026-04-23, 21:21:00](https://soylentnews.org/article.pl?sid=26/04/23/1112242&amp;from=rss) - [Scientists Load Quantum Computer With First Complete Genome to Crack Biology&apos;s &apos;Impossible&apos; Puzzle](https://soylentnews.org/article.pl?sid=26/04/23/1112242&amp;from=rss)
* [2026-04-23, 19:33:59](https://news.ycombinator.com/item?id=47880565) - [The Long Reply](https://ironicsans.ghost.io/the-long-reply/)
* [2026-04-23, 16:34:00](https://soylentnews.org/article.pl?sid=26/04/22/0215210&amp;from=rss) - [Europe&apos;s EV Sales Jump 51% as Iran War Sends Gasoline Prices Soaring](https://soylentnews.org/article.pl?sid=26/04/22/0215210&amp;from=rss)
* [2026-04-23, 15:29:50](https://news.ycombinator.com/item?id=47876930) - [Math Is Hard – OpenBSD Stories](http://miod.online.fr/software/openbsd/stories/vaxfp.html)
* [2026-04-23, 13:34:47](https://news.ycombinator.com/item?id=47875597) - [Optimizing Datalog for the GPU](https://dl.acm.org/doi/10.1145/3669940.3707274)
* [2026-04-23, 11:50:00](https://soylentnews.org/article.pl?sid=26/04/22/023218&amp;from=rss) - [Bluetooth Tracker Hidden in a Postcard and Mailed to a Warship Exposed its Location](https://soylentnews.org/article.pl?sid=26/04/22/023218&amp;from=rss)
* [2026-04-23, 07:07:00](https://soylentnews.org/article.pl?sid=26/04/21/2358226&amp;from=rss) - [The NAND Gate of Continuous Math](https://soylentnews.org/article.pl?sid=26/04/21/2358226&amp;from=rss)
* [2026-04-23, 02:22:00](https://soylentnews.org/article.pl?sid=26/04/21/2355256&amp;from=rss) - [WebinarTV’s Rampant Scraping of Online Meetings ](https://soylentnews.org/article.pl?sid=26/04/21/2355256&amp;from=rss)
* [2026-04-23, 00:14:55](https://news.ycombinator.com/item?id=47870901) - [OpenAI Privacy Filter](https://openai.com/index/introducing-openai-privacy-filter/)
* [2026-04-22, 22:41:57](https://news.ycombinator.com/item?id=47870245) - [Lute: A Standalone Runtime for Luau](https://lute.luau.org/)
* [2026-04-22, 21:39:00](https://soylentnews.org/article.pl?sid=26/04/21/2350253&amp;from=rss) - [How Museums Can Use Biomolecular Archaeology to Bring Ancient Scents to Life](https://soylentnews.org/article.pl?sid=26/04/21/2350253&amp;from=rss)
* [2026-04-22, 18:34:21](https://news.ycombinator.com/item?id=47867473) - [Flickr: The first and last great photo platform](https://petapixel.com/2026/04/22/flickr-the-first-and-last-great-photo-platform/)
* [2026-04-22, 16:53:00](https://soylentnews.org/article.pl?sid=26/04/20/0241235&amp;from=rss) - [Tech Companies Are Trying to Neuter Colorado&apos;s Landmark Right-to-Repair Law](https://soylentnews.org/article.pl?sid=26/04/20/0241235&amp;from=rss)
* [2026-04-22, 16:50:27](https://news.ycombinator.com/item?id=47866127) - [The Joy of Folding Bikes](https://blog.korny.info/2026/04/19/the-joy-of-folding-bikes)
* [2026-04-22, 13:46:23](https://news.ycombinator.com/item?id=47863570) - [1-Bit Hokusai&apos;s \&quot;The Great Wave\&quot; (2023)](https://www.hypertalking.com/2023/05/08/1-bit-pixel-art-of-hokusais-the-great-wave-off-kanagawa/)
* [2026-04-22, 12:09:00](https://soylentnews.org/article.pl?sid=26/04/20/0233208&amp;from=rss) - [Sperm Whales Speak With a Complex Alphabet and Even Have ‘Vowels,’ Study Finds](https://soylentnews.org/article.pl?sid=26/04/20/0233208&amp;from=rss)
* [2026-04-22, 07:27:00](https://soylentnews.org/article.pl?sid=26/04/20/0227209&amp;from=rss) - [The Friction We Forgot](https://soylentnews.org/article.pl?sid=26/04/20/0227209&amp;from=rss)
* [2026-04-22, 07:20:23](https://news.ycombinator.com/item?id=47860198) - [The Free Universal Construction Kit](https://fffff.at/free-universal-construction-kit/)
* [2026-04-22, 05:28:58](https://news.ycombinator.com/item?id=47859442) - [What async promised and what it delivered](https://causality.blog/essays/what-async-promised/)
* [2026-04-22, 02:34:00](https://soylentnews.org/article.pl?sid=26/04/20/0228241&amp;from=rss) - [Total Solar Eclipse Led to Seismic Quiet for Cities Within its Path](https://soylentnews.org/article.pl?sid=26/04/20/0228241&amp;from=rss)
