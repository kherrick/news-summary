# [News Summary](https://kherrick.github.io/news-summary/)

## Tech & Hardware Announcements

* [Apple unveils new Mac Studio, the most powerful Mac ever, featuring M4 Max](https://www.apple.com/newsroom/2025/03/apple-unveils-new-mac-studio-the-most-powerful-mac-ever/) ([comments](https://news.ycombinator.com/item?id=43266474))

* [Zig 0.14.0 Release Notes](https://ziglang.org/download/0.14.0/release-notes.html) ([comments](https://lobste.rs/s/7iu9ze/zig_0_14_0_release_notes))

* [Firefox 136 Released With Vertical Tabs, Official ARM64 Linux Binaries](https://news.slashdot.org/story/25/03/04/2215249/firefox-136-released-with-vertical-tabs-official-arm64-linux-binaries?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=43265431))

## Innovations in Science and Space

* [NASA Uses GPS On the Moon For the First Time](https://science.slashdot.org/story/25/03/05/0155218/nasa-uses-gps-on-the-moon-for-the-first-time?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=43265303))

* [China May Be Ready to Use Nuclear Fusion for Power by 2050](https://hardware.slashdot.org/story/25/03/05/011226/china-may-be-ready-to-use-nuclear-fusion-for-power-by-2050?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=43262099))

* [World's First 'Synthetic Biological Intelligence' Runs On Living Human Cells](https://science.slashdot.org/story/25/03/05/016258/worlds-first-synthetic-biological-intelligence-runs-on-living-human-cells?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## AI and Machine Learning Insights

* [Turing Award Winners Sound Alarm on Hasty AI Deployment](https://slashdot.org/story/25/03/05/1330242/turing-award-winners-sound-alarm-on-hasty-ai-deployment?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=43266453))

* [Opera Adds an Automated AI Agent To Its Browser](https://slashdot.org/story/25/03/04/2158224/opera-adds-an-automated-ai-agent-to-its-browser?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Security and Privacy

* [Jamming: Polish researchers suspect GPS jammers on ships in the Baltic Sea](https://www.heise.de/en/news/Jamming-Polish-researchers-suspect-GPS-jammers-on-ships-in-the-Baltic-Sea-10304169.html) ([comments](https://news.ycombinator.com/item?id=43266494))

* [Vulnerability in partner.microsoft.com allows unauthenticated access](https://nvd.nist.gov/vuln/detail/CVE-2024-49035) ([comments](https://news.ycombinator.com/item?id=43266429))

* [Brother accused of locking down third-party printer ink cartridges](https://www.tomshardware.com/peripherals/printers/brother-accused-of-locking-down-third-party-printer-ink-cartridges-via-firmware-updates-removing-older-firmware-versions-from-support-portals) ([comments](https://news.ycombinator.com/item?id=43261933))

## Cultural and Internet Milestones

* [Kevin Rose, Alexis Ohanian Acquire Digg](https://techcrunch.com/2025/03/05/kevin-rose-and-alexis-ohanian-acquire-digg/) ([comments](https://news.ycombinator.com/item?id=43266170))

* [Cult Text-Based Zombie MMO 'Urban Dead' Is Shutting Down After 20 Years](https://games.slashdot.org/story/25/03/05/0036212/cult-text-based-zombie-mmo-urban-dead-is-shutting-down-after-20-years?utm_source=rss1.0mainlinkanon&utm_medium=feed)

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

* [2025-03-05, 15:51:57](https://lobste.rs/s/gkawzq/happy_day_for_rust) - [A Happy Day for Rust](https://steveklabnik.com/writing/a-happy-day-for-rust/)
* [2025-03-05, 15:44:00](https://soylentnews.org/article.pl?sid=25/03/04/023230&from=rss) - [Meet the Ice-Hunting Robots Headed for the Moon Right Now](https://soylentnews.org/article.pl?sid=25/03/04/023230&from=rss)
* [2025-03-05, 15:29:56](https://news.ycombinator.com/item?id=43267857) - [Design and Explore Noise Handshake Patterns (2018)](https://noiseexplorer.com/)
* [2025-03-05, 15:26:03](https://lobste.rs/s/wjtlv8/basecamp_release_github_extension_for) - [Basecamp release Github extension for offline CI signoff](https://github.com/basecamp/gh-signoff)
* [2025-03-05, 15:13:08](https://lobste.rs/s/gwcalu/dude_where_are_your_syscalls) - [dude, where are your syscalls?](https://flak.tedunangst.com/post/dude-where-are-your-syscalls)
* [2025-03-05, 15:00:00](https://tech.slashdot.org/story/25/03/05/1355244/google-urges-doj-to-reverse-course-on-breaking-up-company?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google Urges DOJ To Reverse Course on Breaking Up Company](https://tech.slashdot.org/story/25/03/05/1355244/google-urges-doj-to-reverse-course-on-breaking-up-company?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-05, 14:59:15](https://lobste.rs/s/7jpyer/rocket_science_simulation_testing) - [Rocket Science of Simulation Testing - HYTRADBOI2025](https://youtu.be/xxIGIyiRrEc?feature=shared)
* [2025-03-05, 14:44:04](https://news.ycombinator.com/item?id=43267095) - [Things we've learned about building successful products](https://newsletter.posthog.com/p/50-things-weve-learned-about-building)
* [2025-03-05, 14:15:50](https://lobste.rs/s/udui2s/bbc_micro_emulation_directly_browser) - [BBC Micro emulation directly in the browser](https://www.bbcmicrobot.com/)
* [2025-03-05, 14:06:54](https://news.ycombinator.com/item?id=43266537) - [MacBook Air M4](https://www.apple.com/macbook-air/)
* [2025-03-05, 14:03:06](https://news.ycombinator.com/item?id=43266494) - [Jamming: Polish researchers suspect GPS jammers on ships in the Baltic Sea](https://www.heise.de/en/news/Jamming-Polish-researchers-suspect-GPS-jammers-on-ships-in-the-Baltic-Sea-10304169.html)
* [2025-03-05, 14:00:57](https://news.ycombinator.com/item?id=43266474) - [Apple unveils new Mac Studio, the most powerful Mac ever, featuring M4 Max](https://www.apple.com/newsroom/2025/03/apple-unveils-new-mac-studio-the-most-powerful-mac-ever/)
* [2025-03-05, 14:00:00](https://slashdot.org/story/25/03/05/1330242/turing-award-winners-sound-alarm-on-hasty-ai-deployment?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Turing Award Winners Sound Alarm on Hasty AI Deployment](https://slashdot.org/story/25/03/05/1330242/turing-award-winners-sound-alarm-on-hasty-ai-deployment?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-05, 13:59:50](https://news.ycombinator.com/item?id=43266453) - [Apple M3 Ultra](https://www.apple.com/newsroom/2025/03/apple-reveals-m3-ultra-taking-apple-silicon-to-a-new-extreme/)
* [2025-03-05, 13:58:12](https://news.ycombinator.com/item?id=43266429) - [Vulnerability in partner.microsoft.com allows unauthenticated access](https://nvd.nist.gov/vuln/detail/CVE-2024-49035)
* [2025-03-05, 13:33:51](https://news.ycombinator.com/item?id=43266170) - [Kevin Rose, Alexis Ohanian Acquire Digg](https://techcrunch.com/2025/03/05/kevin-rose-and-alexis-ohanian-acquire-digg/)
* [2025-03-05, 13:32:52](https://lobste.rs/s/0g0ulj/why_alias_is_my_last_resort_for_aliases) - [Why \"alias\" is my last resort for aliases](https://evanhahn.com/why-alias-is-my-last-resort-for-aliases/)
* [2025-03-05, 13:30:35](https://lobste.rs/s/dwvrsk/floating_points_boxes) - [Floating Points & Boxes](https://blog.toast.cafe/floating-points-boxes)
* [2025-03-05, 13:18:28](https://news.ycombinator.com/item?id=43266029) - [How a key ingredient in Coca-Cola, M&M's is smuggled from war-torn Sudan](https://www.middleeastmonitor.com/20250304-how-a-key-ingredient-in-coca-cola-mms-is-smuggled-from-war-torn-sudan/)
* [2025-03-05, 13:00:00](https://science.slashdot.org/story/25/03/05/0155218/nasa-uses-gps-on-the-moon-for-the-first-time?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [NASA Uses GPS On the Moon For the First Time](https://science.slashdot.org/story/25/03/05/0155218/nasa-uses-gps-on-the-moon-for-the-first-time?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-05, 12:12:34](https://news.ycombinator.com/item?id=43265555) - [ZJIT: Building a Next Generation Ruby JIT](https://rubykaigi.org/2025/presentations/maximecb.html)
* [2025-03-05, 12:06:40](https://news.ycombinator.com/item?id=43265521) - [The Return of Digg, a Star of an Earlier Internet Era](https://www.nytimes.com/2025/03/05/technology/digg-alexis-ohanian-kevin-rose.html)
* [2025-03-05, 11:52:28](https://news.ycombinator.com/item?id=43265431) - [MS Paint IDE](https://ms-paint-i.de/)
* [2025-03-05, 11:29:50](https://news.ycombinator.com/item?id=43265303) - [NASA Successfully Acquires GPS Signals on Moon](https://www.nasa.gov/general/nasa-successfully-acquires-gps-signals-on-moon/)
* [2025-03-05, 11:14:31](https://news.ycombinator.com/item?id=43265224) - ['Shadow fleets' and sabotage: are Europe's undersea cables under attack?](https://www.theguardian.com/world/ng-interactive/2025/mar/05/shadow-fleets-subaquatic-sabotage-europe-undersea-internet-cables-under-attack)
* [2025-03-05, 11:01:00](https://soylentnews.org/article.pl?sid=25/03/03/1622232&from=rss) - [The UEFI Hype and Microsoft's Lies](https://soylentnews.org/article.pl?sid=25/03/03/1622232&from=rss)
* [2025-03-05, 10:53:09](https://lobste.rs/s/hsotyq/why_techdirt_is_now_democracy_blog) - [Why Techdirt Is Now A Democracy Blog (Whether We Like It Or Not)](https://www.techdirt.com/2025/03/04/why-techdirt-is-now-a-democracy-blog-whether-we-like-it-or-not/)
* [2025-03-05, 10:46:08](https://lobste.rs/s/nurzov/pitchfork_story) - [The Pitchfork Story](https://byroot.github.io/ruby/performance/2025/03/04/the-pitchfork-story.html)
* [2025-03-05, 10:25:55](https://news.ycombinator.com/item?id=43264957) - [Lynx: Open Source Native Cross Platform framework used in TikTok](https://lynxjs.org/blog/lynx-unlock-native-for-more.html)
* [2025-03-05, 10:03:31](https://news.ycombinator.com/item?id=43264847) - [Richard Sutton and Andrew Barto Win 2024 Turing Award](https://awards.acm.org/about/2024-turing)
* [2025-03-05, 10:00:00](https://science.slashdot.org/story/25/03/05/016258/worlds-first-synthetic-biological-intelligence-runs-on-living-human-cells?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [World's First 'Synthetic Biological Intelligence' Runs On Living Human Cells](https://science.slashdot.org/story/25/03/05/016258/worlds-first-synthetic-biological-intelligence-runs-on-living-human-cells?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-05, 09:13:29](https://lobste.rs/s/qjsefo/bad_apple_it_s_ssh_keys) - [bad apple but it's ssh keys](https://www.5snb.club/posts/2025/bad-apple-but-its-ssh-keys/)
* [2025-03-05, 08:48:19](https://lobste.rs/s/7iu9ze/zig_0_14_0_release_notes) - [Zig 0.14.0 Release Notes](https://ziglang.org/download/0.14.0/release-notes.html)
* [2025-03-05, 08:03:31](https://lobste.rs/s/odepe5/plea_for_more_mikado_software) - [A Plea for more Mikado - Software Engineering and Stuff](https://dmathieu.com/en/opinions/mikado/)
* [2025-03-05, 07:00:00](https://hardware.slashdot.org/story/25/03/05/011226/china-may-be-ready-to-use-nuclear-fusion-for-power-by-2050?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [China May Be Ready to Use Nuclear Fusion for Power by 2050](https://hardware.slashdot.org/story/25/03/05/011226/china-may-be-ready-to-use-nuclear-fusion-for-power-by-2050?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-05, 06:17:00](https://soylentnews.org/article.pl?sid=25/03/02/1643244&from=rss) - [Ancient Humans Evolved New Blood Types After Leaving Africa](https://soylentnews.org/article.pl?sid=25/03/02/1643244&from=rss)
* [2025-03-05, 04:19:16](https://lobste.rs/s/m7gwia/as_code) - [\"As Code\"](https://mitchellh.com/writing/as-code)
* [2025-03-05, 03:50:21](https://news.ycombinator.com/item?id=43262510) - [Delta Chat – Email Based PGP Encrypted Chat](https://delta.chat/)
* [2025-03-05, 03:30:00](https://slashdot.org/story/25/03/05/0057216/users-report-emotional-bonds-with-startlingly-realistic-ai-voice-demo?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Users Report Emotional Bonds With Startlingly Realistic AI Voice Demo](https://slashdot.org/story/25/03/05/0057216/users-report-emotional-bonds-with-startlingly-realistic-ai-voice-demo?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-05, 03:12:50](https://lobste.rs/s/6645g0/netbsd_on_javastation) - [NetBSD on a JavaStation](https://fatsquirrel.org/oldfartsalmanac/netbsd-on-a-javastation/)
* [2025-03-05, 03:11:54](https://news.ycombinator.com/item?id=43262188) - [NetBSD on a JavaStation](https://fatsquirrel.org/oldfartsalmanac/netbsd-on-a-javastation/)
* [2025-03-05, 02:34:47](https://news.ycombinator.com/item?id=43261933) - [Brother accused of locking down third-party printer ink cartridges](https://www.tomshardware.com/peripherals/printers/brother-accused-of-locking-down-third-party-printer-ink-cartridges-via-firmware-updates-removing-older-firmware-versions-from-support-portals)
* [2025-03-05, 02:20:00](https://games.slashdot.org/story/25/03/05/0036212/cult-text-based-zombie-mmo-urban-dead-is-shutting-down-after-20-years?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Cult Text-Based Zombie MMO 'Urban Dead' Is Shutting Down After 20 Years](https://games.slashdot.org/story/25/03/05/0036212/cult-text-based-zombie-mmo-urban-dead-is-shutting-down-after-20-years?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-05, 01:58:11](https://news.ycombinator.com/item?id=43261729) - [Mox – modern, secure, all-in-one email server](https://www.xmox.nl/)
* [2025-03-05, 01:41:14](https://news.ycombinator.com/item?id=43261650) - [Writing an LLM from scratch, part 8 – trainable self-attention](https://www.gilesthomas.com/2025/03/llm-from-scratch-8-trainable-self-attention)
* [2025-03-05, 01:40:00](https://entertainment.slashdot.org/story/25/03/05/0027211/tcl-overtakes-lg-to-become-second-largest-premium-tv-brand?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [TCL Overtakes LG To Become Second-largest Premium TV Brand](https://entertainment.slashdot.org/story/25/03/05/0027211/tcl-overtakes-lg-to-become-second-largest-premium-tv-brand?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-05, 01:33:00](https://soylentnews.org/article.pl?sid=25/03/03/147226&from=rss) - [Man's Brain Turned to Glass by Vesuvius Volcano Ash Cloud](https://soylentnews.org/article.pl?sid=25/03/03/147226&from=rss)
* [2025-03-05, 01:00:00](https://news.slashdot.org/story/25/03/04/2215249/firefox-136-released-with-vertical-tabs-official-arm64-linux-binaries?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Firefox 136 Released With Vertical Tabs, Official ARM64 Linux Binaries](https://news.slashdot.org/story/25/03/04/2215249/firefox-136-released-with-vertical-tabs-official-arm64-linux-binaries?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-05, 00:38:25](https://lobste.rs/s/i0c3bz/bayleaf_building_low_profile_wireless) - [Bayleaf: Building a low-profile wireless split keyboard](https://www.graz.io/articles/bayleaf-wireless-keyboard)
* [2025-03-05, 00:20:00](https://news.slashdot.org/story/25/03/04/220243/youtube-warns-creators-an-ai-generated-video-of-its-ceo-is-being-used-for-phishing-scams?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [YouTube Warns Creators an AI-Generated Video of Its CEO is Being Used For Phishing Scams](https://news.slashdot.org/story/25/03/04/220243/youtube-warns-creators-an-ai-generated-video-of-its-ceo-is-being-used-for-phishing-scams?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-04, 23:40:00](https://slashdot.org/story/25/03/04/2158224/opera-adds-an-automated-ai-agent-to-its-browser?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Opera Adds an Automated AI Agent To Its Browser](https://slashdot.org/story/25/03/04/2158224/opera-adds-an-automated-ai-agent-to-its-browser?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-04, 23:00:00](https://hardware.slashdot.org/story/25/03/04/2151220/brother-accused-of-locking-down-third-party-printer-ink-cartridges-via-forced-firmware-updates?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Brother Accused of Locking Down Third-Party Printer Ink Cartridges Via Forced Firmware Updates](https://hardware.slashdot.org/story/25/03/04/2151220/brother-accused-of-locking-down-third-party-printer-ink-cartridges-via-forced-firmware-updates?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-04, 22:20:00](https://slashdot.org/story/25/03/04/2144219/automattic-ceo-matt-mullenweg-talks-succession---i-dont-want-to-pass-it-to-a-committee?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Automattic CEO Matt Mullenweg Talks Succession - 'I Don't Want To Pass It To a Committee'](https://slashdot.org/story/25/03/04/2144219/automattic-ceo-matt-mullenweg-talks-succession---i-dont-want-to-pass-it-to-a-committee?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-04, 22:01:33](https://lobste.rs/s/cvs4te/miners_on_ci_cd_pipelines_for_drone_gitlab) - [Miners on CI/CD pipelines for Drone/Gitlab servers with open registrations](https://manganiello.social/@fabio/posts/Arivp4ZjiD2KUwpwJs)
* [2025-03-04, 21:41:48](https://lobste.rs/s/igqzdo/tailscale_is_pretty_useful) - [Tailscale is pretty useful](https://blog.6nok.org/tailscale-is-pretty-useful/)
* [2025-03-04, 21:40:00](https://yro.slashdot.org/story/25/03/04/2139203/judges-are-fed-up-with-lawyers-using-ai-that-hallucinate-court-cases?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Judges Are Fed Up With Lawyers Using AI That Hallucinate Court Cases](https://yro.slashdot.org/story/25/03/04/2139203/judges-are-fed-up-with-lawyers-using-ai-that-hallucinate-court-cases?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-04, 21:05:42](https://lobste.rs/s/gp3ch3/why_fastdoom_is_fast) - [Why fastDOOM is fast](https://fabiensanglard.net/fastdoom/index.html)
* [2025-03-04, 20:48:00](https://soylentnews.org/article.pl?sid=25/03/03/1359231&from=rss) - [The Pentium Contains a Complicated Circuit to Multiply by Three](https://soylentnews.org/article.pl?sid=25/03/03/1359231&from=rss)
* [2025-03-04, 20:36:10](https://lobste.rs/s/icz96h/hytradboi_2025_postmortem) - [HYTRADBOI 2025 postmortem](https://www.scattered-thoughts.net/writing/hytradboi-2025-postmortem/)
* [2025-03-04, 19:52:00](https://it.slashdot.org/story/25/03/04/1952241/citi-copy-paste-error-almost-sent-6-billion-to-wealth-account?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Citi Copy-Paste Error Almost Sent $6 Billion to Wealth Account](https://it.slashdot.org/story/25/03/04/1952241/citi-copy-paste-error-almost-sent-6-billion-to-wealth-account?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-04, 19:05:43](https://news.ycombinator.com/item?id=43258709) - [Why fastDOOM is fast](https://fabiensanglard.net/fastdoom/index.html)
* [2025-03-04, 17:08:22](https://lobste.rs/s/1xdrzu/hierarchy_hazard_controls) - [The Hierarchy of Hazard Controls](https://www.hillelwayne.com/post/hoc/)
* [2025-03-04, 17:04:17](https://news.ycombinator.com/item?id=43257323) - [Launch HN: Enhanced Radar (YC W25) – A safety net for air traffic control](https://news.ycombinator.com/item?id=43257323)
* [2025-03-04, 16:07:00](https://soylentnews.org/article.pl?sid=25/03/03/1354250&from=rss) - [20,000-Year-Old Evidence of Ancient Travois (Sled) Discovered in New Mexico](https://soylentnews.org/article.pl?sid=25/03/03/1354250&from=rss)
* [2025-03-04, 15:51:36](https://lobste.rs/s/6f8cww/web_should_be_conversation) - [The Web Should Be A Conversation](https://andregarzia.com/2025/03/the-web-should-be-a-conversation.html)
* [2025-03-04, 14:24:54](https://lobste.rs/s/cpro2r/falsehoods_programmers_believe_about) - [Falsehoods programmers believe about languages](https://www.lexiconista.com/falsehoods-about-languages/)
* [2025-03-04, 11:59:43](https://lobste.rs/s/b5buoi/tigerbeetle_architecture) - [TigerBeetle Architecture](https://github.com/tigerbeetle/tigerbeetle/blob/main/docs/internals/ARCHITECTURE.md)
* [2025-03-04, 11:48:07](https://lobste.rs/s/ifpjdh/avoid_nightmare_bicycle) - [Avoid the nightmare bicycle](https://www.geoffreylitt.com/2025/03/03/the-nightmare-bicycle.html)
* [2025-03-04, 11:26:00](https://soylentnews.org/article.pl?sid=25/03/03/1239241&from=rss) - [YR4 Asteroid: The Hits and Near-Misses You Never Hear About](https://soylentnews.org/article.pl?sid=25/03/03/1239241&from=rss)
* [2025-03-04, 06:40:00](https://soylentnews.org/article.pl?sid=25/03/02/2054246&from=rss) - [NASA is Watching a Vast, Growing Anomaly in Earth's Magnetic Field](https://soylentnews.org/article.pl?sid=25/03/02/2054246&from=rss)
* [2025-03-04, 02:00:00](https://soylentnews.org/article.pl?sid=25/03/02/2037225&from=rss) - [The Next Chapter: Moving From Skype to Microsoft Teams](https://soylentnews.org/article.pl?sid=25/03/02/2037225&from=rss)
* [2025-03-03, 22:14:12](https://lobste.rs/s/np4prk/use_firefox_2025) - [Use Firefox in 2025](https://alexn.org/blog/2025/03/03/use-firefox/)
* [2025-03-03, 21:17:00](https://soylentnews.org/article.pl?sid=25/03/02/1651205&from=rss) - [A New Android Feature is Scanning Your Photos for 'Sensitive Content'](https://soylentnews.org/article.pl?sid=25/03/02/1651205&from=rss)
* [2025-03-03, 16:37:00](https://soylentnews.org/article.pl?sid=25/03/03/1430230&from=rss) - [U.S. Company Firefly Aerospace Just Landed On The Moon With Its Blue Ghost Spacecraft](https://soylentnews.org/article.pl?sid=25/03/03/1430230&from=rss)
* [2025-03-03, 11:50:00](https://soylentnews.org/article.pl?sid=25/03/02/1636204&from=rss) - [Superelastic Alloy That Functions in Extreme Temperatures Could Aid Space Exploration](https://soylentnews.org/article.pl?sid=25/03/02/1636204&from=rss)
* [2025-03-03, 07:05:00](https://soylentnews.org/article.pl?sid=25/03/02/1442219&from=rss) - [The Surveillance Tech Waiting for Workers as They Return to the Office](https://soylentnews.org/article.pl?sid=25/03/02/1442219&from=rss)
* [2025-03-03, 02:18:00](https://soylentnews.org/article.pl?sid=25/03/02/1437201&from=rss) - ['Utterly Cataclysmic': James Webb Telescope Spots 2 Alien Planets Disintegrating Before Our Eyes](https://soylentnews.org/article.pl?sid=25/03/02/1437201&from=rss)
* [2025-03-02, 22:59:13](https://news.ycombinator.com/item?id=43236184) - [The Differences Between Deep Research, Deep Research, and Deep Research](https://leehanchung.github.io/blogs/2025/02/26/deep-research/)
* [2025-03-02, 21:36:20](https://news.ycombinator.com/item?id=43235424) - [Why Vermont farmers are using urine on their crops](https://www.bbc.com/future/article/20250227-the-vermont-farmers-using-urine-to-grow-their-crops)
* [2025-03-02, 21:34:00](https://soylentnews.org/article.pl?sid=25/03/02/1031228&from=rss) - [Auto-Color: An Emerging and Evasive Linux Backdoor](https://soylentnews.org/article.pl?sid=25/03/02/1031228&from=rss)
* [2025-03-02, 20:10:55](https://news.ycombinator.com/item?id=43234510) - [Rotors: A practical introduction for 3D graphics (2023)](https://jacquesheunis.com/post/rotors/)
* [2025-03-02, 16:48:00](https://soylentnews.org/article.pl?sid=25/03/01/1531250&from=rss) - [Avast Antivirus Customers Can be Compensated for Harvesting of Their Personal Info](https://soylentnews.org/article.pl?sid=25/03/01/1531250&from=rss)
* [2025-03-02, 12:02:00](https://soylentnews.org/article.pl?sid=25/03/01/1515217&from=rss) - [Journalist Completely Misrepresents Quantum Teleportation](https://soylentnews.org/article.pl?sid=25/03/01/1515217&from=rss)
* [2025-03-02, 07:14:00](https://soylentnews.org/article.pl?sid=25/03/01/155219&from=rss) - [Chinese Chipmaker Claims New Loongson 3B6600 CPU Could Hit 13Th-Gen Intel Performance](https://soylentnews.org/article.pl?sid=25/03/01/155219&from=rss)
* [2025-03-02, 02:31:00](https://soylentnews.org/article.pl?sid=25/03/01/152214&from=rss) - [Engineers Create Lightweight Multi-Color Fresnel Lens for Telescopes](https://soylentnews.org/article.pl?sid=25/03/01/152214&from=rss)
* [2025-03-02, 02:27:51](https://news.ycombinator.com/item?id=43226546) - [The internet is killing old PC hardware [video]](https://www.youtube.com/watch?v=TE_ePuGAvPM)
* [2025-03-02, 00:34:57](https://news.ycombinator.com/item?id=43225805) - [The Planemaker Who Walked Beneath the Water](https://workingwoodenplanes.com/p/2025-02-28-ebenezer-clifford-bell-diver-planemaker/)
* [2025-03-01, 21:49:00](https://soylentnews.org/article.pl?sid=25/03/01/0115227&from=rss) - [SpaceX: Actually, Dying Starlink Satellites Don't Always Fully Burn Up](https://soylentnews.org/article.pl?sid=25/03/01/0115227&from=rss)
* [2025-03-01, 21:36:14](https://news.ycombinator.com/item?id=43223930) - [BMW Group Product Catalog–Historic Models](https://www.bmwgroup-classic.com/en/history/historic-modeloverview-bmw.html)
* [2025-03-01, 17:01:00](https://soylentnews.org/article.pl?sid=25/03/01/0055211&from=rss) - [Pandas \"Tricked\" Into Becoming the World's Biggest Bamboo Fans](https://soylentnews.org/article.pl?sid=25/03/01/0055211&from=rss)
* [2025-03-01, 12:44:40](https://news.ycombinator.com/item?id=43218724) - [Asteroid fragments upend theory of how life on Earth bloomed](https://www.nature.com/articles/d41586-025-00264-3)
* [2025-03-01, 12:17:00](https://soylentnews.org/article.pl?sid=25/03/01/0049207&from=rss) - [Skype is Shutting Down After Two Decades](https://soylentnews.org/article.pl?sid=25/03/01/0049207&from=rss)
* [2025-03-01, 07:36:00](https://soylentnews.org/article.pl?sid=25/02/28/0659242&from=rss) - [Five Days of Ultra-Processed Food: Study Finds That's Enough to Alter the Brain](https://soylentnews.org/article.pl?sid=25/02/28/0659242&from=rss)
* [2025-03-01, 02:53:00](https://soylentnews.org/article.pl?sid=25/02/28/0654225&from=rss) - [Internet Society Wants to Improve Terrestrial Fibre Maps](https://soylentnews.org/article.pl?sid=25/02/28/0654225&from=rss)
