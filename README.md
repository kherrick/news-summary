# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence Advancements

* [China Just Erased America's AI Lead](https://slashdot.org/story/26/07/17/1820200/china-just-erased-americas-ai-lead?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - China's advancements in artificial intelligence are reportedly surpassing the United States, reshaping the global AI development landscape. [Comments](https://slashdot.org/story/26/07/17/1820200/china-just-erased-americas-ai-lead?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Mozilla: The state of open source AI](https://stateofopensource.ai/) - Mozilla examines the landscape of open-source AI, offering insights into current trends and challenges. [Comments](https://news.ycombinator.com/item?id=48947825)

## Cryptocurrency and Security

* [FBI Arrests Man Accused of Using Steam Games To Drain Victims' Crypto Wallets](https://games.slashdot.org/story/26/07/17/1741237/fbi-arrests-man-accused-of-using-steam-games-to-drain-victims-crypto-wallets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A suspect used Steam games to orchestrate crypto wallet heists, leading to an FBI investigation and eventual arrest. [Comments](https://games.slashdot.org/story/26/07/17/1741237/fbi-arrests-man-accused-of-using-steam-games-to-drain-victims-crypto-wallets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [AI Meets Cryptography 2: What AI Found in OpenVM's ZkVM](https://blog.zksecurity.xyz/posts/openvm-bugs/) - AI's capabilities in cryptography uncover novel findings within OpenVM's ZkVM framework. [Comments](https://news.ycombinator.com/item?id=48947714)

## Cosmic Discoveries

* [First atmosphere found on Earth-like planet in habitable zone of distant star](https://www.bbc.com/news/articles/cy4kdd1e0ejo) - A groundbreaking discovery reveals the first-ever atmosphere detected on an Earth-like planet within a habitable zone. [Comments](https://news.ycombinator.com/item?id=48947560)

* [Astronomers Find an Atmosphere On a Nearby Earth-Like Planet](https://science.slashdot.org/story/26/07/17/0029203/astronomers-find-an-atmosphere-on-a-nearby-earth-like-planet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Another report on the discovery of an atmosphere surrounding a potentially habitable Earth-like planet. [Comments](https://science.slashdot.org/story/26/07/17/0029203/astronomers-find-an-atmosphere-on-a-nearby-earth-like-planet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Advancements in Technology

* [Apple Sends Legal Letters To Dozens of OpenAI Employees](https://apple.slashdot.org/story/26/07/17/1552258/apple-sends-legal-letters-to-dozens-of-openai-employees?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Apple enforces non-disclosure agreements by targeting OpenAI employees with legal demands. [Comments](https://news.ycombinator.com/item?id=48946303)

* [Meta In Talks To Lease Computing Power To Anthropic In Potential $10 Billion Deal](https://hardware.slashdot.org/story/26/07/17/1732212/meta-in-talks-to-lease-computing-power-to-anthropic-in-potential-10-billion-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Meta's discussions with Anthropic could result in a $10 billion computing power lease agreement. [Comments](https://hardware.slashdot.org/story/26/07/17/1732212/meta-in-talks-to-lease-computing-power-to-anthropic-in-potential-10-billion-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Privacy and Cybersecurity

* [Microsoft's Secure Boot Has Been Broken for a Decade and No One Noticed Until Now](https://soylentnews.org/article.pl?sid=26/07/16/0231216&amp;from=rss) - A major flaw in Microsoft's Secure Boot has remained undetected for a decade, presenting a critical security risk. [Comments](https://soylentnews.org/article.pl?sid=26/07/16/0231216&amp;from=rss)

* [PACT: Anonymous Credentials for the Web – Mozilla Hacks](https://hacks.mozilla.org/2026/06/pact-anonymous-credentials-for-the-web/) - Mozilla introduces a system for anonymous web credentials to improve online privacy. [Comments](https://lobste.rs/s/6pdyiy/pact_anonymous_credentials_for_web)

## Tech Innovations and Tools

* [Show HN: A zoomable timeline of 4M Wikipedia events](https://app.everything.diena.co/) - Discover historical events interactively with a new zoomable timeline of Wikipedia data. [Comments](https://news.ycombinator.com/item?id=48950774)

* [Frame – the first Linux Assembly X server](https://isene.org/2026/07/Frame.html) - A new tool to enhance Linux system functionalities with an assembly X server introduces innovation in open-source software. [Comments](https://news.ycombinator.com/item?id=48948597)

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

* [2026-07-17, 19:00:00](https://slashdot.org/story/26/07/17/1820200/china-just-erased-americas-ai-lead?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Just Erased America&apos;s AI Lead](https://slashdot.org/story/26/07/17/1820200/china-just-erased-americas-ai-lead?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-17, 18:37:33](https://news.ycombinator.com/item?id=48950774) - [Show HN: A zoomable timeline of 4M Wikipedia events](https://app.everything.diena.co/)
* [2026-07-17, 18:00:00](https://games.slashdot.org/story/26/07/17/1741237/fbi-arrests-man-accused-of-using-steam-games-to-drain-victims-crypto-wallets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FBI Arrests Man Accused of Using Steam Games To Drain Victims&apos; Crypto Wallets](https://games.slashdot.org/story/26/07/17/1741237/fbi-arrests-man-accused-of-using-steam-games-to-drain-victims-crypto-wallets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-17, 17:45:41](https://news.ycombinator.com/item?id=48950122) - [Learning a few things about running SQLite](https://jvns.ca/blog/2026/07/17/learning-about-running-sqlite/)
* [2026-07-17, 17:33:00](https://hardware.slashdot.org/story/26/07/17/1732212/meta-in-talks-to-lease-computing-power-to-anthropic-in-potential-10-billion-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta In Talks To Lease Computing Power To Anthropic In Potential $10 Billion Deal](https://hardware.slashdot.org/story/26/07/17/1732212/meta-in-talks-to-lease-computing-power-to-anthropic-in-potential-10-billion-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-17, 17:33:00](https://soylentnews.org/article.pl?sid=26/07/16/0415252&amp;from=rss) - [Why the Human Body Has So Many Design Flaws](https://soylentnews.org/article.pl?sid=26/07/16/0415252&amp;from=rss)
* [2026-07-17, 16:29:52](https://news.ycombinator.com/item?id=48949240) - [Homomorphically encrypted CIFAR-10 inference in 200ms](https://sofar.belfortlabs.cloud/)
* [2026-07-17, 16:24:13](https://news.ycombinator.com/item?id=48949184) - [Designing emoji for the way we communicate today](https://blog.google/products-and-platforms/platforms/android/world-emoji-day-noto-3d/)
* [2026-07-17, 16:00:00](https://apple.slashdot.org/story/26/07/17/1552258/apple-sends-legal-letters-to-dozens-of-openai-employees?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Sends Legal Letters To Dozens of OpenAI Employees](https://apple.slashdot.org/story/26/07/17/1552258/apple-sends-legal-letters-to-dozens-of-openai-employees?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-17, 15:41:05](https://news.ycombinator.com/item?id=48948693) - [Show HN: Explore the Workspaces of Modern Creators](https://workspaces.xyz/)
* [2026-07-17, 15:31:22](https://news.ycombinator.com/item?id=48948597) - [Frame – the first Linux Assembly X server](https://isene.org/2026/07/Frame.html)
* [2026-07-17, 15:17:54](https://news.ycombinator.com/item?id=48948435) - [Short sellers notch $8.7B profit as SpaceX shares dip to IPO price](https://www.reuters.com/business/media-telecom/short-sellers-rack-up-87-bln-profit-spacex-slips-below-ipo-price-ortex-2026-07-16/)
* [2026-07-17, 15:00:00](https://news.slashdot.org/story/26/07/17/0046237/kalshi-flags-trumps-teleprompter-operator-for-alleged-insider-trading?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Kalshi Flags Trump&apos;s Teleprompter Operator For Alleged Insider Trading](https://news.slashdot.org/story/26/07/17/0046237/kalshi-flags-trumps-teleprompter-operator-for-alleged-insider-trading?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-17, 14:31:10](https://news.ycombinator.com/item?id=48947825) - [Mozilla: The state of open source AI](https://stateofopensource.ai/)
* [2026-07-17, 14:21:51](https://news.ycombinator.com/item?id=48947717) - [Kimi K3, and what we can still learn from the pelican benchmark](https://simonwillison.net/2026/Jul/16/kimi-k3/)
* [2026-07-17, 14:21:35](https://news.ycombinator.com/item?id=48947714) - [AI Meets Cryptography 2: What AI Found in OpenVM&apos;s ZkVM](https://blog.zksecurity.xyz/posts/openvm-bugs/)
* [2026-07-17, 14:19:21](https://lobste.rs/s/v0bqye/building_stabilized_chase_camera_rover) - [Building a Stabilized \&quot;Chase Camera\&quot; Rover](https://transistor-man.com/gimbal_camera_rover.html)
* [2026-07-17, 14:06:13](https://news.ycombinator.com/item?id=48947560) - [First atmosphere found on Earth-like planet in habitable zone of distant star](https://www.bbc.com/news/articles/cy4kdd1e0ejo)
* [2026-07-17, 14:05:15](https://news.ycombinator.com/item?id=48947548) - [Show HN: Watch bots interact with an SSH honeypot in real time](https://honeypotlive.cc/)
* [2026-07-17, 14:00:04](https://news.ycombinator.com/item?id=48947490) - [Three ways people respond to a problem (other than solving it)](https://improvesomething.today/responses-to-problems/)
* [2026-07-17, 13:56:04](https://news.ycombinator.com/item?id=48947455) - [A Road to Lisp: Which Lisp](https://scotto.me/blog/2026-07-17-which-lisp/)
* [2026-07-17, 13:32:11](https://news.ycombinator.com/item?id=48947201) - [More Bounce to the Ounce](https://mceglowski.substack.com/p/more-bounce-to-the-ounce)
* [2026-07-17, 13:28:04](https://lobste.rs/s/vrcctk/how_far_behind_frontier_are_leading_open) - [How Far Behind the Frontier are Leading Open Weight Models on Cyber?](https://www.aisi.gov.uk/blog/how-far-behind-the-frontier-are-leading-open-weight-models-on-cyber)
* [2026-07-17, 13:27:36](https://lobste.rs/s/i0mnxl/journey_root_episode_i_maglev_king) - [Journey to Root, Episode I: The Maglev King](https://blog.calif.io/p/journey-to-root-episode-i-the-maglev)
* [2026-07-17, 13:26:04](https://lobste.rs/s/gxjzgq/fedichat_comic_chat_for_fediverse) - [Fedichat - Comic Chat for the Fediverse](https://lambadalambda.github.io/fedichat/client.html)
* [2026-07-17, 13:22:33](https://news.ycombinator.com/item?id=48947100) - [Manufact (YC S25) Is Hiring a Senior infra engineer to build the MCP cloud](https://www.ycombinator.com/companies/manufact/jobs/Dh6PYP5-senior-infrastructure-engineer)
* [2026-07-17, 12:51:36](https://lobste.rs/s/u9lvze/we_are_changing_our_developer) - [We are Changing our Developer Productivity Experiment Design](https://metr.org/blog/2026-02-24-uplift-update/)
* [2026-07-17, 12:49:00](https://soylentnews.org/article.pl?sid=26/07/16/0231216&amp;from=rss) - [Microsoft&apos;s Secure Boot Has Been Broken for a Decade and No One Noticed Until Now](https://soylentnews.org/article.pl?sid=26/07/16/0231216&amp;from=rss)
* [2026-07-17, 12:42:12](https://news.ycombinator.com/item?id=48946692) - [VulnHunter: Capital One&apos;s agentic AI code security tool](https://www.capitalone.com/tech/open-source/announcing-vulnhunter/)
* [2026-07-17, 12:02:39](https://news.ycombinator.com/item?id=48946303) - [Apple targets dozens of OpenAI employees with legal letters](https://www.ft.com/content/1b8c9d52-88a9-426b-ba47-f1811f859166)
* [2026-07-17, 11:21:45](https://lobste.rs/s/x3xvou/freya_0_4_rust_gui_library) - [Freya 0.4 - Rust GUI library](https://freyaui.dev/posts/0.4)
* [2026-07-17, 11:00:00](https://games.slashdot.org/story/26/07/17/0036224/microsoft-restores-players-25-year-old-account-after-nuking-it-due-to-hacker?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Restores Player&apos;s 25-Year-Old Account After Nuking It Due to Hacker](https://games.slashdot.org/story/26/07/17/0036224/microsoft-restores-players-25-year-old-account-after-nuking-it-due-to-hacker?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-17, 09:42:05](https://news.ycombinator.com/item?id=48945241) - [AWS: Inaccurate Estimated Billing Data – $1.7 billion](https://news.ycombinator.com/item?id=48945241)
* [2026-07-17, 08:31:40](https://lobste.rs/s/1vplvg/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/1vplvg/what_are_you_doing_this_weekend)
* [2026-07-17, 08:07:00](https://soylentnews.org/article.pl?sid=26/07/16/0229204&amp;from=rss) - [Irish Datacenters Now Guzzle 23% of the Country&apos;s Electricity](https://soylentnews.org/article.pl?sid=26/07/16/0229204&amp;from=rss)
* [2026-07-17, 07:00:00](https://science.slashdot.org/story/26/07/17/0029203/astronomers-find-an-atmosphere-on-a-nearby-earth-like-planet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Astronomers Find an Atmosphere On a Nearby Earth-Like Planet](https://science.slashdot.org/story/26/07/17/0029203/astronomers-find-an-atmosphere-on-a-nearby-earth-like-planet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-17, 06:01:54](https://lobste.rs/s/6pdyiy/pact_anonymous_credentials_for_web) - [PACT: Anonymous Credentials for the Web – Mozilla Hacks](https://hacks.mozilla.org/2026/06/pact-anonymous-credentials-for-the-web/)
* [2026-07-17, 05:51:10](https://news.ycombinator.com/item?id=48943745) - [EEG shows brain can simultaneous encode two speech streams](https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.3003876)
* [2026-07-17, 04:38:25](https://lobste.rs/s/agoj2o/country_draw) - [Country Draw](https://country-draw.vercel.app/)
* [2026-07-17, 03:53:38](https://news.ycombinator.com/item?id=48943174) - [Pebble Mega Update – July 2026](https://repebble.com/blog/pebble-mega-update-july-2026)
* [2026-07-17, 03:48:26](https://news.ycombinator.com/item?id=48943142) - [How Has Roman Concrete Lasted for Millennia? 1,900-Year-Old Latrine Offers Clues](https://www.smithsonianmag.com/smart-news/how-has-roman-concrete-lasted-for-millennia-a-1900-year-old-latrine-offers-new-clues-about-the-materials-impressive-durability-180989115/)
* [2026-07-17, 03:30:00](https://tech.slashdot.org/story/26/07/17/0022208/truth-social-to-sell-wall-street-firms-the-fastest-access-to-trumps-post?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Truth Social To Sell Wall Street Firms the &apos;Fastest&apos; Access To Trump&apos;s Post](https://tech.slashdot.org/story/26/07/17/0022208/truth-social-to-sell-wall-street-firms-the-fastest-access-to-trumps-post?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-17, 03:23:00](https://soylentnews.org/article.pl?sid=26/07/16/0225242&amp;from=rss) - [Miami-Based City Labs Achieves a First for Commercial Nuclear Power in Space](https://soylentnews.org/article.pl?sid=26/07/16/0225242&amp;from=rss)
* [2026-07-17, 02:40:50](https://lobste.rs/s/jbw2ma/earth_rotation_records_spur_october_vote) - [Earth Rotation Records Spur October Vote to Avert Negative Leap Second](https://www.techtimes.com/articles/320185/20260711/earth-rotation-records-spur-october-vote-avert-negative-leap-second.htm)
* [2026-07-17, 02:23:49](https://lobste.rs/s/fftxis/stop_guard_act_age_verification_laws) - [Stop the GUARD Act and age verification laws worldwide](https://www.fsf.org/blogs/community/stop-the-guard-act)
* [2026-07-17, 01:37:41](https://lobste.rs/s/fdsscq/using_gcc_s_nested_functions_with_wide) - [Using GCC&apos;s Nested Functions with Wide Pointers and no Trampolines II](https://uecker.codeberg.page/2026-07-14.html)
* [2026-07-17, 00:18:37](https://lobste.rs/s/4dcp6w/here_s_how_i_host_my_own_aim_server) - [Here&apos;s how I host my own AIM server](https://veronicaexplains.net/open-oscar-server/)
* [2026-07-16, 23:00:00](https://hardware.slashdot.org/story/26/07/16/2210245/hp-fined-14-million-for-cartelization-of-ink-cartridges-toner-pcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [HP Fined $14 Million For &apos;Cartelization&apos; of Ink Cartridges, Toner, PCs](https://hardware.slashdot.org/story/26/07/16/2210245/hp-fined-14-million-for-cartelization-of-ink-cartridges-toner-pcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-16, 22:36:00](https://soylentnews.org/article.pl?sid=26/07/15/1458200&amp;from=rss) - [New York is the First US State to Ban Smart Glasses in All its Courthouses](https://soylentnews.org/article.pl?sid=26/07/15/1458200&amp;from=rss)
* [2026-07-16, 22:03:22](https://lobste.rs/s/y3qqzv/zilog_z80_has_turned_50) - [The Zilog Z80 has turned 50](https://goliath32.com/blog/z80.html)
* [2026-07-16, 22:00:00](https://news.slashdot.org/story/26/07/16/2158219/tsmc-to-invest-additional-100-billion-in-arizona?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [TSMC To Invest Additional $100 Billion In Arizona](https://news.slashdot.org/story/26/07/16/2158219/tsmc-to-invest-additional-100-billion-in-arizona?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-16, 21:00:00](https://tech.slashdot.org/story/26/07/16/1926200/eu-forces-google-to-share-search-data-open-android-to-rivals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EU Forces Google To Share Search Data, Open Android To Rivals](https://tech.slashdot.org/story/26/07/16/1926200/eu-forces-google-to-share-search-data-open-android-to-rivals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-16, 20:00:00](https://yro.slashdot.org/story/26/07/16/1918245/1password-lets-claude-use-credentials-without-exposing-passwords?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [1Password Lets Claude Use Credentials Without Exposing Passwords](https://yro.slashdot.org/story/26/07/16/1918245/1password-lets-claude-use-credentials-without-exposing-passwords?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-16, 19:00:00](https://entertainment.slashdot.org/story/26/07/16/1825241/sony-deletes-more-movies-from-accounts-of-people-who-bought-them?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sony Deletes More Movies From Accounts of People Who &apos;Bought&apos; Them](https://entertainment.slashdot.org/story/26/07/16/1825241/sony-deletes-more-movies-from-accounts-of-people-who-bought-them?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-16, 18:38:03](https://lobste.rs/s/idavhk/we_re_going_make_out_like_bandits) - [We&apos;re Going to Make Out Like Bandits](https://www.rocketpoweredjetpants.com/2026/04/were-going-to-make-out-like-bandits/)
* [2026-07-16, 18:15:00](https://tech.slashdot.org/story/26/07/16/1812259/google-renames-notebooklm-to-gemini-notebook?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Renames NotebookLM to Gemini Notebook](https://tech.slashdot.org/story/26/07/16/1812259/google-renames-notebooklm-to-gemini-notebook?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-16, 17:51:00](https://soylentnews.org/article.pl?sid=26/07/15/1451242&amp;from=rss) - [FreeBSD 16 Retires the Last of its GPL Code From its Base System](https://soylentnews.org/article.pl?sid=26/07/15/1451242&amp;from=rss)
* [2026-07-16, 17:00:00](https://mobile.slashdot.org/story/26/07/16/1632212/oneplus-will-continue-software-updates-after-us-and-europe-exit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OnePlus Will Continue Software Updates After US and Europe Exit](https://mobile.slashdot.org/story/26/07/16/1632212/oneplus-will-continue-software-updates-after-us-and-europe-exit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-16, 16:43:15](https://lobste.rs/s/qbvfll/microsoft_comic_chat_is_now_open_source) - [Microsoft Comic Chat is now open source](https://opensource.microsoft.com/blog/2026/07/16/microsoft-comic-chat-is-now-open-source/)
* [2026-07-16, 16:18:21](https://news.ycombinator.com/item?id=48936584) - [Decoy Font](https://www.mixfont.com/experiments/decoy-font)
* [2026-07-16, 15:39:50](https://lobste.rs/s/1clqwe/we_re_building_postgres_rust_using_llvm) - [We&apos;re building Postgres in Rust. Using the LLVM of databases](https://turso.tech/blog/a-new-modern-version-of-postgres-in-rust)
* [2026-07-16, 14:46:05](https://news.ycombinator.com/item?id=48935342) - [Kimi K3: Open Frontier Intelligence](https://www.kimi.com/blog/kimi-k3)
* [2026-07-16, 13:51:27](https://lobste.rs/s/wveduf/readme_not) - [README, not](https://blog.yossarian.net/2026/07/16/README-not)
* [2026-07-16, 13:27:20](https://lobste.rs/s/prdl1l/llm_critics_are_right_i_use_llms_anyway) - [The LLM Critics Are Right. I Use LLMs Anyway](https://www.theocharis.dev/blog/llm-critics-are-right-i-use-llms-anyway/)
* [2026-07-16, 13:12:52](https://lobste.rs/s/76tcpe/what_gdb_frontend_do_you_prefer_linux) - [What gdb frontend do you prefer (linux)](https://lobste.rs/s/76tcpe/what_gdb_frontend_do_you_prefer_linux)
* [2026-07-16, 11:31:41](https://lobste.rs/s/axdfjx/how_our_rust_zig_rewrite_is_going) - [How Our Rust-to-Zig Rewrite is Going](https://rtfeldman.com/rust-to-zig)
* [2026-07-16, 11:07:00](https://soylentnews.org/article.pl?sid=26/07/15/0038203&amp;from=rss) - [Meta Data Center Water Discharges Suspended After Contaminating The City&apos;s Reclamation Water Supply ](https://soylentnews.org/article.pl?sid=26/07/15/0038203&amp;from=rss)
* [2026-07-16, 10:01:50](https://lobste.rs/s/giyb8x/forgejo_v16_0_is_available) - [Forgejo v16.0 is available](https://forgejo.org/2026-07-release-v16-0/)
* [2026-07-16, 09:29:06](https://lobste.rs/s/rvtn4v/guix_creating_package_from_binary) - [Guix: creating a package from a binary](https://aloysberger.com/posts/guix-packaging-a-binary-as-a-guix-beginner.html)
* [2026-07-16, 06:15:00](https://soylentnews.org/article.pl?sid=26/07/15/0036236&amp;from=rss) - [RAMpocalyse Pricing Prompts Maker To Construct His Own Memory Using Ancient Apollo-Era Tech](https://soylentnews.org/article.pl?sid=26/07/15/0036236&amp;from=rss)
* [2026-07-16, 03:19:34](https://lobste.rs/s/pb6d8m/linus_torvalds_on_llm_usage_kernel) - [Linus Torvalds on LLM usage in kernel development](https://lore.kernel.org/linux-media/CAHk-=wi4zC+Ze8e+p3tMv8TtG_80KzsZ1syL9anBtmEh5Z40vg@mail.gmail.com/)
* [2026-07-16, 01:32:00](https://soylentnews.org/article.pl?sid=26/07/15/0034229&amp;from=rss) - [Mapped: Where It Costs the Most to Own a Car in America](https://soylentnews.org/article.pl?sid=26/07/15/0034229&amp;from=rss)
* [2026-07-15, 20:50:00](https://soylentnews.org/article.pl?sid=26/07/15/0032228&amp;from=rss) - [‘STEM Is Not Just About Formulas And Calculations, It Is Also About Creativity’](https://soylentnews.org/article.pl?sid=26/07/15/0032228&amp;from=rss)
* [2026-07-15, 19:34:54](https://lobste.rs/s/2nry82/sqlite_should_have_rust_style_editions) - [SQLite should have (Rust-style) editions](https://mort.coffee/home/sqlite-editions/)
* [2026-07-15, 16:04:00](https://soylentnews.org/article.pl?sid=26/07/14/0547216&amp;from=rss) - [AI Servers Will Consume More Power Than All Conventional Data Centers Combined By 2027](https://soylentnews.org/article.pl?sid=26/07/14/0547216&amp;from=rss)
* [2026-07-15, 11:19:00](https://soylentnews.org/article.pl?sid=26/07/14/0543205&amp;from=rss) - [AI Coding Agents Can be Tricked Into Installing Malware Via &apos;Clean&apos; GitHub Repositories](https://soylentnews.org/article.pl?sid=26/07/14/0543205&amp;from=rss)
* [2026-07-15, 06:29:00](https://soylentnews.org/article.pl?sid=26/07/14/0540206&amp;from=rss) - [MPs Tell NHS to Start Packing Palantir&apos;s Bags Ahead of 2027 Contract Break](https://soylentnews.org/article.pl?sid=26/07/14/0540206&amp;from=rss)
* [2026-07-15, 01:42:00](https://soylentnews.org/article.pl?sid=26/07/14/0538220&amp;from=rss) - [Microsoft Admits Windows 11 Has a GDID Tracker With No Off Switch](https://soylentnews.org/article.pl?sid=26/07/14/0538220&amp;from=rss)
* [2026-07-14, 21:02:00](https://soylentnews.org/article.pl?sid=26/07/12/2153233&amp;from=rss) - [This UK Satellite&apos;s Thermal Camera Raises Major Privacy Concerns](https://soylentnews.org/article.pl?sid=26/07/12/2153233&amp;from=rss)
* [2026-07-14, 17:53:06](https://news.ycombinator.com/item?id=48910579) - [MoonBASIC: A modern BASIC for building 2D and 3D games](https://github.com/CharmingBlaze/moonbasic)
* [2026-07-14, 16:06:00](https://soylentnews.org/article.pl?sid=26/07/12/2149242&amp;from=rss) - [US Weighs Removing Steering Wheel Requirement For Driverless Cars](https://soylentnews.org/article.pl?sid=26/07/12/2149242&amp;from=rss)
* [2026-07-14, 15:50:19](https://news.ycombinator.com/item?id=48908691) - [Show HN: Simulator for a custom 8-bit discreet logic computer](https://msap2.mehran.dk)
* [2026-07-14, 11:22:00](https://soylentnews.org/article.pl?sid=26/07/12/2143209&amp;from=rss) - [Scientist Models Way To Make Sure No One&apos;s Violating The Ban On Nuclear Weapons In Space](https://soylentnews.org/article.pl?sid=26/07/12/2143209&amp;from=rss)
* [2026-07-14, 06:45:00](https://soylentnews.org/article.pl?sid=26/07/12/2137226&amp;from=rss) - [Utility Companies Want To Take Control Of Your Home&apos;s Smart Thermostat](https://soylentnews.org/article.pl?sid=26/07/12/2137226&amp;from=rss)
* [2026-07-14, 02:00:00](https://soylentnews.org/article.pl?sid=26/07/12/2132224&amp;from=rss) - [New Horizons Pluto Probe Just Woke Itself Up After 321 Days Of Hibernation](https://soylentnews.org/article.pl?sid=26/07/12/2132224&amp;from=rss)
* [2026-07-13, 21:22:00](https://soylentnews.org/article.pl?sid=26/07/12/1514220&amp;from=rss) - [OpenAI Job Listing Suggests ChatGPT Could Someday Replace Junior Analysts at Goldman Sachs](https://soylentnews.org/article.pl?sid=26/07/12/1514220&amp;from=rss)
* [2026-07-13, 18:12:09](https://news.ycombinator.com/item?id=48896513) - [Latent Space as a New Medium](https://kevinkelly.substack.com/p/latent-space-as-a-new-medium)
* [2026-07-13, 16:40:00](https://soylentnews.org/article.pl?sid=26/07/12/1511228&amp;from=rss) - [China Recovered its First Reusable Rocket and Showed a New Way to Do It](https://soylentnews.org/article.pl?sid=26/07/12/1511228&amp;from=rss)
* [2026-07-13, 11:53:00](https://soylentnews.org/article.pl?sid=26/07/12/2127219&amp;from=rss) - [Why Navies Around The World Keep Submarine Propeller Designs So Secretive](https://soylentnews.org/article.pl?sid=26/07/12/2127219&amp;from=rss)
* [2026-07-13, 07:07:00](https://soylentnews.org/article.pl?sid=26/07/12/150251&amp;from=rss) - [Electric Drone Breaks World Air Speed Record at 434 Mph, Designed for Anti-Aircraft Interceptor Role](https://soylentnews.org/article.pl?sid=26/07/12/150251&amp;from=rss)
* [2026-07-13, 02:27:00](https://soylentnews.org/article.pl?sid=26/07/11/1848242&amp;from=rss) - [Higher Blood Glucose Levels Linked to Faster Brain Aging](https://soylentnews.org/article.pl?sid=26/07/11/1848242&amp;from=rss)
* [2026-07-13, 02:23:19](https://news.ycombinator.com/item?id=48887102) - [Frank Lloyd Wright&apos;s First Home](https://www.architecturaldigest.com/story/frank-lloyd-wright-home-and-studio-everything-you-need-to-know)
