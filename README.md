# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and Technology Developments

* [Testing Ads in ChatGPT](https://openai.com/index/testing-ads-in-chatgpt/) (Comments on [Hacker News](https://news.ycombinator.com/item?id=46949401))

* [Romance Publishing Has an AI Problem and Most Readers Don't Know It Yet](https://news.slashdot.org/story/26/02/09/181212/romance-publishing-has-an-ai-problem-and-most-readers-dont-know-it-yet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) (Comments on [Slashdot](https://news.slashdot.org/story/26/02/09/181212/romance-publishing-has-an-ai-problem-and-most-readers-dont-know-it-yet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Autodesk Takes Google To Court Over AI Movie Software Named 'Flow'](https://tech.slashdot.org/story/26/02/09/1742213/autodesk-takes-google-to-court-over-ai-movie-software-named-flow?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) (Comments on [Slashdot](https://tech.slashdot.org/story/26/02/09/1742213/autodesk-takes-google-to-court-over-ai-movie-software-named-flow?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [AI Gold Rush is Resurrecting China's Infamous 72-hour Work Week - in US](https://slashdot.org/story/26/02/09/1514248/ai-gold-rush-is-resurrecting-chinas-infamous-72-hour-work-week---in-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) (Comments on [Slashdot](https://slashdot.org/story/26/02/09/1514248/ai-gold-rush-is-resurrecting-chinas-infamous-72-hour-work-week---in-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

## Technical Innovations and Explorations

* [It's Not About the API - Fast, Flexible, and Simple Rendering in Vulkan](https://gamesbymason.com/blog/2026/vulkan/) (Comments on [Lobste.rs](https://lobste.rs/s/myybyg/it_s_not_about_api_fast_flexible_simple))

* [New Raspberry Pi 4 Model Splits RAM Across Dual Chips](https://hardware.slashdot.org/story/26/02/09/0644255/new-raspberry-pi-4-model-splits-ram-across-dual-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) (Comments on [Slashdot](https://hardware.slashdot.org/story/26/02/09/0644255/new-raspberry-pi-4-model-splits-ram-across-dual-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Algorithmically Finding the Longest Line of Sight on Earth](https://lobste.rs/s/8959u3/algorithmically_finding_longest_line) (Comments on [Lobste.rs](https://lobste.rs/s/8959u3/algorithmically_finding_longest_line))

* [ESP8266 WiFi Analog Clock](https://github.com/jim11662418/ESP8266_WiFi_Analog_Clock) (Comments on [Lobste.rs](https://lobste.rs/s/qyhfb7/esp8266_wifi_analog_clock))

## Corporate and Industrial News

* [Eddie Bauer, venerable outdoor apparel retailer, declares bankruptcy](https://www.cbsnews.com/news/eddie-bauer-bankrupt-outdoor-apparel/) (Comments on [Hacker News](https://news.ycombinator.com/item?id=46948708))

* [AT&T, Verizon blocking release of Salt Typhoon security assessment reports](https://www.reuters.com/business/media-telecom/senator-says-att-verizon-blocking-release-salt-typhoon-security-assessment-2026-02-03/) (Comments on [Hacker News](https://news.ycombinator.com/item?id=46945497))

* [Google Lines Up 100-Year Sterling Bond Sale](https://tech.slashdot.org/story/26/02/09/1548222/google-lines-up-100-year-sterling-bond-sale?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) (Comments on [Slashdot](https://tech.slashdot.org/story/26/02/09/1548222/google-lines-up-100-year-sterling-bond-sale?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

## Social Media Policy and Trends

* [Discord Will Require a Face Scan or ID for Full Access Next Month](https://yro.slashdot.org/story/26/02/09/161215/discord-will-require-a-face-scan-or-id-for-full-access-next-month?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) (Comments on [Slashdot](https://yro.slashdot.org/story/26/02/09/161215/discord-will-require-a-face-scan-or-id-for-full-access-next-month?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Discord Launches Teen-by-Default Settings Globally](https://discord.com/press-releases/discord-launches-teen-by-default-settings-globally) (Comments on [Lobste.rs](https://lobste.rs/s/vrczh6/discord_launches_teen_by_default))

## Explorations in Data and Algorithms

* [Hard-braking events as indicators of road segment crash risk](https://research.google/blog/hard-braking-events-as-indicators-of-road-segment-crash-risk/) (Comments on [Hacker News](https://news.ycombinator.com/item?id=46947777))

* [Long-Sought Proof Tames Some of Math's Unruliest Equations](https://www.quantamagazine.org/long-sought-proof-tames-some-of-maths-unruliest-equations-20260206/) (Comments on [Hacker News](https://news.ycombinator.com/item?id=46945641))

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

* [2026-02-09, 19:04:16](https://news.ycombinator.com/item?id=46949401) - [Testing Ads in ChatGPT](https://openai.com/index/testing-ads-in-chatgpt/)
* [2026-02-09, 19:01:00](https://news.slashdot.org/story/26/02/09/181212/romance-publishing-has-an-ai-problem-and-most-readers-dont-know-it-yet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Romance Publishing Has an AI Problem and Most Readers Don&apos;t Know It Yet](https://news.slashdot.org/story/26/02/09/181212/romance-publishing-has-an-ai-problem-and-most-readers-dont-know-it-yet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-09, 18:25:21](https://lobste.rs/s/myybyg/it_s_not_about_api_fast_flexible_simple) - [It&apos;s Not About the API - Fast, Flexible, and Simple Rendering in Vulkan](https://gamesbymason.com/blog/2026/vulkan/)
* [2026-02-09, 18:20:56](https://news.ycombinator.com/item?id=46948815) - [The Markets of Old London](https://spitalfieldslife.com/2024/06/20/the-markets-of-old-london-i/)
* [2026-02-09, 18:14:08](https://news.ycombinator.com/item?id=46948708) - [Eddie Bauer, venerable outdoor apparel retailer, declares bankruptcy](https://www.cbsnews.com/news/eddie-bauer-bankrupt-outdoor-apparel/)
* [2026-02-09, 18:09:42](https://lobste.rs/s/rqsjod/proposal_add_hotness_25_vibe_coding) - [Proposal: Add Hotness -.25 to Vibe Coding](https://lobste.rs/s/rqsjod/proposal_add_hotness_25_vibe_coding)
* [2026-02-09, 18:01:00](https://tech.slashdot.org/story/26/02/09/1742213/autodesk-takes-google-to-court-over-ai-movie-software-named-flow?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Autodesk Takes Google To Court Over AI Movie Software Named &apos;Flow&apos;](https://tech.slashdot.org/story/26/02/09/1742213/autodesk-takes-google-to-court-over-ai-movie-software-named-flow?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-09, 17:48:24](https://news.ycombinator.com/item?id=46948340) - [From watchdogs to mouthpieces: Washington Post and the wreckage of legacy media](https://www.thejournal.ie/readme/bezos-washington-post-trump-6950317-Feb2026/)
* [2026-02-09, 17:44:10](https://news.ycombinator.com/item?id=46948273) - [Game Boy Advance Audio Interpolation](https://jsgroth.dev/blog/posts/gba-audio-interpolation/)
* [2026-02-09, 17:23:31](https://lobste.rs/s/qyhfb7/esp8266_wifi_analog_clock) - [ESP8266 WiFi Analog Clock](https://github.com/jim11662418/ESP8266_WiFi_Analog_Clock)
* [2026-02-09, 17:09:37](https://news.ycombinator.com/item?id=46947777) - [Hard-braking events as indicators of road segment crash risk](https://research.google/blog/hard-braking-events-as-indicators-of-road-segment-crash-risk/)
* [2026-02-09, 17:01:00](https://tech.slashdot.org/story/26/02/09/1548222/google-lines-up-100-year-sterling-bond-sale?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Lines Up 100-Year Sterling Bond Sale](https://tech.slashdot.org/story/26/02/09/1548222/google-lines-up-100-year-sterling-bond-sale?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-09, 16:26:31](https://news.ycombinator.com/item?id=46947096) - [Converting a $3.88 analog clock from Walmart into a ESP8266-based Wi-Fi clock](https://github.com/jim11662418/ESP8266_WiFi_Analog_Clock)
* [2026-02-09, 16:12:19](https://news.ycombinator.com/item?id=46946827) - [GitHub is down again](https://www.githubstatus.com/incidents/54hndjxft5bx)
* [2026-02-09, 16:09:00](https://soylentnews.org/article.pl?sid=26/02/08/0232241&amp;from=rss) - [Taking a Second to Change the Time](https://soylentnews.org/article.pl?sid=26/02/08/0232241&amp;from=rss)
* [2026-02-09, 16:01:00](https://yro.slashdot.org/story/26/02/09/161215/discord-will-require-a-face-scan-or-id-for-full-access-next-month?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Discord Will Require a Face Scan or ID for Full Access Next Month](https://yro.slashdot.org/story/26/02/09/161215/discord-will-require-a-face-scan-or-id-for-full-access-next-month?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-09, 15:39:51](https://news.ycombinator.com/item?id=46946401) - [Why is the sky blue?](https://explainers.blog/posts/why-is-the-sky-blue/)
* [2026-02-09, 15:39:47](https://lobste.rs/s/vrczh6/discord_launches_teen_by_default) - [Discord Launches Teen-by-Default Settings Globally](https://discord.com/press-releases/discord-launches-teen-by-default-settings-globally)
* [2026-02-09, 15:31:09](https://news.ycombinator.com/item?id=46946308) - [Sandboxels](https://neal.fun/sandboxels/)
* [2026-02-09, 15:14:00](https://slashdot.org/story/26/02/09/1514248/ai-gold-rush-is-resurrecting-chinas-infamous-72-hour-work-week---in-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Gold Rush is Resurrecting China&apos;s Infamous 72-hour Work Week - in US](https://slashdot.org/story/26/02/09/1514248/ai-gold-rush-is-resurrecting-chinas-infamous-72-hour-work-week---in-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-09, 15:11:07](https://news.ycombinator.com/item?id=46946062) - [Sleeper Shells: Attackers Are Planting Dormant Backdoors in Ivanti EPMM](https://defusedcyber.com/ivanti-epmm-sleeper-shells-403jsp)
* [2026-02-09, 14:59:56](https://lobste.rs/s/arddyl/trying_out_thunderbird_appointment) - [Trying out Thunderbird Appointment While I Patiently Wait For An Invite](https://blog.matthewbrunelle.com/trying-out-thunderbird-appointment-while-i-patiently-await-for-an-invite/)
* [2026-02-09, 14:37:38](https://news.ycombinator.com/item?id=46945663) - [Discord will require a face scan or ID for full access next month](https://www.theverge.com/tech/875309/discord-age-verification-global-roll-out)
* [2026-02-09, 14:36:14](https://news.ycombinator.com/item?id=46945641) - [Long-Sought Proof Tames Some of Math&apos;s Unruliest Equations](https://www.quantamagazine.org/long-sought-proof-tames-some-of-maths-unruliest-equations-20260206/)
* [2026-02-09, 14:22:12](https://news.ycombinator.com/item?id=46945497) - [AT&amp;T, Verizon blocking release of Salt Typhoon security assessment reports](https://www.reuters.com/business/media-telecom/senator-says-att-verizon-blocking-release-salt-typhoon-security-assessment-2026-02-03/)
* [2026-02-09, 14:18:43](https://lobste.rs/s/j8jnqq/six_thoughts_on_generating_c) - [six thoughts on generating c](https://wingolog.org/archives/2026/02/09/six-thoughts-on-generating-c)
* [2026-02-09, 14:18:30](https://news.ycombinator.com/item?id=46945471) - [Humans peak in midlife: A combined cognitive and personality trait perspective](https://www.sciencedirect.com/science/article/pii/S0160289625000649)
* [2026-02-09, 14:12:00](https://tech.slashdot.org/story/26/02/09/1413223/age-bias-is-still-the-default-at-work-but-the-data-is-turning?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Age Bias is Still the Default at Work But the Data is Turning](https://tech.slashdot.org/story/26/02/09/1413223/age-bias-is-still-the-default-at-work-but-the-data-is-turning?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-09, 14:07:36](https://news.ycombinator.com/item?id=46945348) - [UEFI Bindings for JavaScript](https://codeberg.org/smnx/promethee)
* [2026-02-09, 13:54:48](https://news.ycombinator.com/item?id=46945235) - [Thoughts on Generating C](https://wingolog.org/archives/2026/02/09/six-thoughts-on-generating-c)
* [2026-02-09, 13:23:42](https://lobste.rs/s/xr8ppc/computers_can_be_understood) - [Computers can be understood](https://blog.nelhage.com/post/computers-can-be-understood/)
* [2026-02-09, 12:35:19](https://news.ycombinator.com/item?id=46944555) - [Show HN: Browse Internet Infrastructure](https://www.wirewiki.com)
* [2026-02-09, 12:34:00](https://hardware.slashdot.org/story/26/02/09/0644255/new-raspberry-pi-4-model-splits-ram-across-dual-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Raspberry Pi 4 Model Splits RAM Across Dual Chips](https://hardware.slashdot.org/story/26/02/09/0644255/new-raspberry-pi-4-model-splits-ram-across-dual-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-09, 12:24:00](https://soylentnews.org/article.pl?sid=26/02/08/0226226&amp;from=rss) - [Vibe Coding is Killing Open Source Software](https://soylentnews.org/article.pl?sid=26/02/08/0226226&amp;from=rss)
* [2026-02-09, 12:09:04](https://news.ycombinator.com/item?id=46944365) - [Show HN: Printable Classics – Free printable classic books for hobby bookbinders](https://printableclassics.com)
* [2026-02-09, 11:55:23](https://lobste.rs/s/pef25i/language_for_agents) - [A Language For Agents](https://lucumr.pocoo.org/2026/2/9/a-language-for-agents/)
* [2026-02-09, 10:35:55](https://lobste.rs/s/manrbz/offpunk_3_0) - [Offpunk 3.0](https://ploum.net/2026-02-09-offpunk3.html)
* [2026-02-09, 10:12:06](https://lobste.rs/s/8959u3/algorithmically_finding_longest_line) - [Algorithmically Finding the Longest Line of Sight on Earth](https://lobste.rs/s/8959u3/algorithmically_finding_longest_line)
* [2026-02-09, 10:05:55](https://news.ycombinator.com/item?id=46943568) - [Show HN: Algorithmically finding the longest line of sight on Earth](https://alltheviews.world)
* [2026-02-09, 08:39:00](https://soylentnews.org/article.pl?sid=26/02/07/0352243&amp;from=rss) - [The AI productivity trap: Why your Best Engineers are Getting Slower](https://soylentnews.org/article.pl?sid=26/02/07/0352243&amp;from=rss)
* [2026-02-09, 08:34:00](https://science.slashdot.org/story/26/02/09/0536231/spacex-prioritizes-lunar-self-growing-city-over-mars-project-musk-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SpaceX Prioritizes Lunar &apos;Self-Growing City&apos; Over Mars Project, Musk Says](https://science.slashdot.org/story/26/02/09/0536231/spacex-prioritizes-lunar-self-growing-city-over-mars-project-musk-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-09, 08:16:03](https://lobste.rs/s/ahdqrf/let_s_compile_quake_like_it_s_1997) - [Let&apos;s compile Quake like it&apos;s 1997](https://fabiensanglard.net/compile_like_1997/index.html)
* [2026-02-09, 06:53:58](https://lobste.rs/s/mhgciz/alice_caml) - [Alice the Caml](https://www.gridbugs.org/alice-the-caml/)
* [2026-02-09, 06:10:08](https://lobste.rs/s/ycshwd/you_are_here) - [You Are Here](https://brooker.co.za/blog/2026/02/07/you-are-here.html)
* [2026-02-09, 05:36:51](https://lobste.rs/s/2oray0/stop_generating_start_thinking) - [Stop generating, start thinking](https://localghost.dev/blog/stop-generating-start-thinking/)
* [2026-02-09, 05:34:00](https://science.slashdot.org/story/26/02/09/053208/national-football-league-launches-challenge-to-improve-facemasks-and-reduce-concussions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [National Football League Launches Challenge to Improve Facemasks and Reduce Concussions](https://science.slashdot.org/story/26/02/09/053208/national-football-league-launches-challenge-to-improve-facemasks-and-reduce-concussions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-09, 05:28:38](https://lobste.rs/s/jnqnqe/nobody_knows_how_whole_system_works) - [Nobody knows how the whole system works](https://surfingcomplexity.blog/2026/02/08/nobody-knows-how-the-whole-system-works/)
* [2026-02-09, 05:28:15](https://news.ycombinator.com/item?id=46941882) - [Nobody knows how the whole system works](https://surfingcomplexity.blog/2026/02/08/nobody-knows-how-the-whole-system-works/)
* [2026-02-09, 03:54:00](https://soylentnews.org/article.pl?sid=26/02/07/0347222&amp;from=rss) - [FBI Stymied by Apple&apos;s Lockdown Mode After Seizing Journalist&apos;s iPhone](https://soylentnews.org/article.pl?sid=26/02/07/0347222&amp;from=rss)
* [2026-02-09, 03:03:29](https://lobste.rs/s/dndxmu/little_bool_doom) - [The little bool of doom](https://blog.svgames.pl/article/the-little-bool-of-doom)
* [2026-02-09, 02:50:28](https://lobste.rs/s/m4lvr0/concerns_about_low_quality_prs_beeing) - [Concerns about low-quality PRs beeing merged into main](https://discourse.llvm.org/t/concerns-about-low-quality-prs-beeing-merged-into-main/89748)
* [2026-02-09, 02:34:00](https://tech.slashdot.org/story/26/02/09/0030214/carmakers-rush-to-remove-chinese-code-under-new-us-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Carmakers Rush To Remove Chinese Code Under New US Rules](https://tech.slashdot.org/story/26/02/09/0030214/carmakers-rush-to-remove-chinese-code-under-new-us-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-09, 01:51:31](https://lobste.rs/s/2omooc/original_vi_is_product_its_time_its_time) - [The original vi is a product of its time (and its time has passed)](https://utcc.utoronto.ca/~cks/space/blog/unix/ViIsAProductOfItsTime)
* [2026-02-08, 23:34:00](https://tech.slashdot.org/story/26/02/08/2321202/amazon-delivery-drone-crashes-into-texas-apartment-building?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Delivery Drone Crashes into Texas Apartment Building](https://tech.slashdot.org/story/26/02/08/2321202/amazon-delivery-drone-crashes-into-texas-apartment-building?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-08, 23:12:00](https://soylentnews.org/article.pl?sid=26/02/07/0338257&amp;from=rss) - [Russian Spy Satellites Have Intercepted EU Communications Satellites](https://soylentnews.org/article.pl?sid=26/02/07/0338257&amp;from=rss)
* [2026-02-08, 22:13:34](https://lobste.rs/s/es2peg/minikanren_org) - [miniKanren.org](https://minikanren.org/)
* [2026-02-08, 22:06:00](https://slashdot.org/story/26/02/08/220228/do-super-bowl-ads-for-ai-signal-a-bubble-about-to-burst?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Do Super Bowl Ads For AI Signal a Bubble About to Burst?](https://slashdot.org/story/26/02/08/220228/do-super-bowl-ads-for-ai-signal-a-bubble-about-to-burst?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-08, 21:05:24](https://news.ycombinator.com/item?id=46938511) - [Art of Roads in Games](https://sandboxspirit.com/blog/art-of-roads-in-games/)
* [2026-02-08, 20:42:00](https://tech.slashdot.org/story/26/02/08/2040202/dave-farber-dies-at-age-91?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Dave Farber Dies at Age 91](https://tech.slashdot.org/story/26/02/08/2040202/dave-farber-dies-at-age-91?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-08, 20:12:27](https://lobste.rs/s/n4ddir/don_t_get_distracted_2017) - [Don&apos;t Get Distracted (2017)](https://calebhearth.com/dont-get-distracted)
* [2026-02-08, 19:35:55](https://news.ycombinator.com/item?id=46937696) - [Ask HN: What are you working on? (February 2026)](https://news.ycombinator.com/item?id=46937696)
* [2026-02-08, 19:35:00](https://it.slashdot.org/story/26/02/08/1933223/after-six-years-two-pentesters-arrested-in-iowa-receive-600000-settlement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [After Six Years, Two Pentesters Arrested in Iowa Receive $600,000 Settlement ](https://it.slashdot.org/story/26/02/08/1933223/after-six-years-two-pentesters-arrested-in-iowa-receive-600000-settlement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-08, 19:11:43](https://lobste.rs/s/bnldoy/i_am_happier_writing_code_by_hand) - [I Am Happier Writing Code by Hand](https://abhinavomprakash.com/posts/i-am-happier-writing-code-by-hand/)
* [2026-02-08, 18:34:00](https://entertainment.slashdot.org/story/26/02/08/1827216/prankster-launches-super-bowl-party-for-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Prankster Launches Super Bowl Party For AI Agents](https://entertainment.slashdot.org/story/26/02/08/1827216/prankster-launches-super-bowl-party-for-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-08, 18:08:56](https://lobste.rs/s/gfsl25/ai_fatigue_is_real_nobody_talks_about_it) - [AI fatigue is real and nobody talks about it](https://siddhantkhare.com/writing/ai-fatigue-is-real)
* [2026-02-08, 18:07:42](https://lobste.rs/s/bic9qr/rebuilding_my_home_network_with_vlans) - [Rebuilding my home network with VLANs and 10Gbps](https://clintonboys.com/projects/homelab/03-network/)
* [2026-02-08, 17:24:00](https://soylentnews.org/article.pl?sid=26/02/07/0328238&amp;from=rss) - [Lessons from China’s Delicate Dance of Censorship and Expression](https://soylentnews.org/article.pl?sid=26/02/07/0328238&amp;from=rss)
* [2026-02-08, 17:15:52](https://lobste.rs/s/fgeokt/code_injections_through_git_commit) - [Code injections through Git commit messages](https://mas.to/@zekjur/116022397626943871)
* [2026-02-08, 13:59:54](https://lobste.rs/s/oy8aqi/running_your_own_as_bgp_on_freebsd_with_frr) - [Running Your Own AS: BGP on FreeBSD with FRR, GRE Tunnels, and Policy Routing](https://blog.hofstede.it/running-your-own-as-bgp-on-freebsd-with-frr-gre-tunnels-and-policy-routing/)
* [2026-02-08, 13:18:37](https://news.ycombinator.com/item?id=46933955) - [Like Game-of-Life, but on Growing Graphs, with WASM and WebGL](https://znah.net/graphs/)
* [2026-02-08, 12:38:00](https://soylentnews.org/article.pl?sid=26/02/07/0323222&amp;from=rss) - [Linux From Scratch Abandoning SysVinit Support](https://soylentnews.org/article.pl?sid=26/02/07/0323222&amp;from=rss)
* [2026-02-08, 11:00:32](https://news.ycombinator.com/item?id=46933223) - [Eight more months of agents](https://crawshaw.io/blog/eight-more-months-of-agents)
* [2026-02-08, 07:57:00](https://soylentnews.org/article.pl?sid=26/02/07/009242&amp;from=rss) - [Self-Driving Cars In ‘Difficult Driving Situations’ Are Guided By Random Filipinos Overseas](https://soylentnews.org/article.pl?sid=26/02/07/009242&amp;from=rss)
* [2026-02-08, 03:14:00](https://soylentnews.org/article.pl?sid=26/02/07/006217&amp;from=rss) - [A Century of Hair Samples Proves Leaded Gas Ban Worked](https://soylentnews.org/article.pl?sid=26/02/07/006217&amp;from=rss)
* [2026-02-07, 22:21:00](https://soylentnews.org/article.pl?sid=26/02/07/004218&amp;from=rss) - [France Might Seek Restrictions on VPN Use in Campaign to Keep Minors Off Social Media](https://soylentnews.org/article.pl?sid=26/02/07/004218&amp;from=rss)
* [2026-02-07, 17:49:00](https://soylentnews.org/article.pl?sid=26/02/06/2359259&amp;from=rss) - [Used EVs Currently Offer Car Buyers Lowest Lifetime Cost of Ownership](https://soylentnews.org/article.pl?sid=26/02/06/2359259&amp;from=rss)
* [2026-02-07, 12:59:00](https://soylentnews.org/article.pl?sid=26/02/06/0310232&amp;from=rss) - [The World Factbook Shut Down Unceremonously](https://soylentnews.org/article.pl?sid=26/02/06/0310232&amp;from=rss)
* [2026-02-07, 08:16:00](https://soylentnews.org/article.pl?sid=26/02/06/038224&amp;from=rss) - [US Spy Satellite Agency Declassifies High-Flying Cold War Listening Post](https://soylentnews.org/article.pl?sid=26/02/06/038224&amp;from=rss)
* [2026-02-07, 03:28:00](https://soylentnews.org/article.pl?sid=26/02/06/031244&amp;from=rss) - [AI Agents Now Have Their Own Reddit-Style Social Network, and It&apos;s Getting Weird Fast](https://soylentnews.org/article.pl?sid=26/02/06/031244&amp;from=rss)
* [2026-02-06, 22:45:00](https://soylentnews.org/article.pl?sid=26/02/06/0248203&amp;from=rss) - [The TV Industry Finally Concedes That the Future May Not be in 8K](https://soylentnews.org/article.pl?sid=26/02/06/0248203&amp;from=rss)
* [2026-02-06, 18:00:00](https://soylentnews.org/article.pl?sid=26/02/05/133201&amp;from=rss) - [GNU Hurd is \&quot;Almost There\&quot; With X86_64, SMP &amp; ~75% of Debian Packages Building](https://soylentnews.org/article.pl?sid=26/02/05/133201&amp;from=rss)
* [2026-02-06, 13:11:00](https://soylentnews.org/article.pl?sid=26/02/05/1252238&amp;from=rss) - [Oracle May Lay Off 30,000 and Sell Healthcare Division to Fund AI Buildout](https://soylentnews.org/article.pl?sid=26/02/05/1252238&amp;from=rss)
* [2026-02-06, 08:21:00](https://soylentnews.org/article.pl?sid=26/02/03/0322237&amp;from=rss) - [How to Bypass a Parallel Port Dongle](https://soylentnews.org/article.pl?sid=26/02/03/0322237&amp;from=rss)
* [2026-02-06, 03:59:00](https://soylentnews.org/article.pl?sid=26/02/03/0321201&amp;from=rss) - [Notepad++ update feature hijacked by Chinese state hackers for months](https://soylentnews.org/article.pl?sid=26/02/03/0321201&amp;from=rss)
* [2026-02-05, 23:17:00](https://soylentnews.org/article.pl?sid=26/02/03/0318252&amp;from=rss) - [Overly Involved Parents May Hold Their Kids Back Professionally](https://soylentnews.org/article.pl?sid=26/02/03/0318252&amp;from=rss)
* [2026-02-05, 18:29:00](https://soylentnews.org/article.pl?sid=26/02/03/0317238&amp;from=rss) - [The Brain’s Response To A Heart Attack May Worsen Recovery](https://soylentnews.org/article.pl?sid=26/02/03/0317238&amp;from=rss)
* [2026-02-05, 14:20:38](https://news.ycombinator.com/item?id=46899900) - [Roman industrial hub discovered on banks of River Wear](https://www.durham.ac.uk/news-events/latest-news/2026/01/roman-industrial-hub-discovered-on-banks-of-river-wear-/)
* [2026-02-05, 13:43:00](https://soylentnews.org/article.pl?sid=26/02/02/1520246&amp;from=rss) - [Amutable: Systemd Creator Lennart Poettering Launches New Linux Security Venture](https://soylentnews.org/article.pl?sid=26/02/02/1520246&amp;from=rss)
* [2026-02-05, 11:46:00](https://soylentnews.org/article.pl?sid=26/02/02/150245&amp;from=rss) - [RIP Didier Spaier](https://soylentnews.org/article.pl?sid=26/02/02/150245&amp;from=rss)
* [2026-02-05, 09:47:53](https://news.ycombinator.com/item?id=46897804) - [What&apos;s the Entropy of a Random Integer?](https://quomodocumque.wordpress.com/2026/02/03/whats-the-entropy-of-a-random-integer/)
* [2026-02-05, 09:02:00](https://soylentnews.org/article.pl?sid=26/02/02/1453203&amp;from=rss) - [Exploring How Gut Bacteria Alter the Flavor of Black Ivory Coffee Beans](https://soylentnews.org/article.pl?sid=26/02/02/1453203&amp;from=rss)
* [2026-02-05, 04:15:00](https://soylentnews.org/article.pl?sid=26/02/02/1450223&amp;from=rss) - [Autonomous Cars Vulnerable to Prompt Injection](https://soylentnews.org/article.pl?sid=26/02/02/1450223&amp;from=rss)
* [2026-02-05, 02:58:50](https://news.ycombinator.com/item?id=46895089) - [The Traffic Mimes of Bogotá](https://www.atlasobscura.com/articles/traffic-mimes-of-colombia)
