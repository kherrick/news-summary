# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Technology Developments

* [Google Must Double AI Serving Capacity Every 6 Months To Meet Demand](https://tech.slashdot.org/story/25/11/21/228237/google-must-double-ai-serving-capacity-every-6-months-to-meet-demand?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Google's AI infrastructure faces significant scaling challenges as demand grows exponentially.

* [Microsoft Finally Admits Almost All Major Windows 11 Core Features Are Broken](https://tech.slashdot.org/story/25/11/21/1912228/microsoft-finally-admits-almost-all-major-windows-11-core-features-are-broken?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Microsoft acknowledges widespread flaws in Windows 11, sparking user criticism.

* [SEC Dismisses Case Against SolarWinds, Top Security Officer](https://yro.slashdot.org/story/25/11/21/2238230/sec-dismisses-case-against-solarwinds-top-security-officer?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The SEC drops its case against SolarWinds, leaving implications for cybersecurity accountability.

* [Malaysia's Palm Oil Estates Are Turning Into Data Centers](https://slashdot.org/story/25/11/21/2230226/malaysias-palm-oil-estates-are-turning-into-data-centers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Innovations in Malaysia see palm oil estates repurposed into eco-efficient data centers.

## Creative Endeavors in Tech

* [Building a Minimal Viable Armv7 Emulator from Scratch](https://xnacly.me/posts/2025/building-a-minimal-viable-armv7-emulator/) - A step-by-step guide taking on the challenge of emulating Armv7 from the ground up.

* [How Two Janitors Made One of the Year's Most Charming RPGs](https://games.slashdot.org/story/25/11/21/188225/how-two-janitors-made-one-of-the-years-most-charming-rpgs?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A surprising creation story of a unique and captivating RPG by two unlikely developers.

* [Helping Valve to power up Steam devices](https://www.igalia.com/2025/11/helpingvalve.html) - A detailed account of empowering Steam devices through strategic collaborations.

* [How I learned Vulkan and wrote a small game engine with it (2024)](https://edw.is/learning-vulkan/) - A fascinating tale of Vulkan mastery and game engine development.

## Environmental and Scientific Discoveries

* [Moss Survives 9 Months in Space Vacuum](https://scienceclock.com/moss-survives-9-months-in-space-vacuum/) - A significant discovery highlights the resilience of life in harsh space conditions.

* [Floating Solar Panels Show Promise, but Environmental Impacts Vary by Location](https://soylentnews.org/article.pl?sid=25/11/18/1210237&amp;from=rss) - The merits and challenges of deploying floating solar technologies amid varied ecosystems.

* [Starshield Satellite Constellation Emitting Unusual Radio Signals](https://soylentnews.org/article.pl?sid=25/11/16/1340211&amp;from=rss) - Investigation into peculiar radio signals from the Starshield constellation.

## Cultural and Historical Trends

* [Magician Forgets Password To His Own Hand After RFID Chip Implant](https://yro.slashdot.org/story/25/11/22/0120232/magician-forgets-password-to-his-own-hand-after-rfid-chip-implant?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A bizarre story on memory lapses and RFID chip implants in performance arts.

* [Superman copy found in mum's attic is most valuable comic ever at $9.12M](https://www.bbc.com/news/articles/c8e9rp0knj6o) - The remarkable tale of a rare comic book setting records at auction.

## Security and Ethics Challenges

* [Google Chrome Bug Exploited as an 0-Day - Patch Now or Risk Full System Compromise](https://soylentnews.org/article.pl?sid=25/11/21/1348200&amp;from=rss) - Chrome users face urgent security patches after a severe vulnerability is exploited.

* [Kaspersky Antivirus is Now Available for Linux. Will You Use It?](https://soylentnews.org/article.pl?sid=25/11/21/1340237&amp;from=rss) - A new Linux-compatible antivirus sparks discussions on its value and trustworthiness.

* [Tech Company CTO and Others Indicted For Exporting Nvidia Chips To China](https://yro.slashdot.org/story/25/11/21/221232/tech-company-cto-and-others-indicted-for-exporting-nvidia-chips-to-china?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The controversial case of illegal Nvidia chip exports to China sheds light on tech ethics.

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

* [2025-11-22, 10:02:45](https://lobste.rs/s/sw5wog/automatic_syntax_error_recovery_2020) - [Automatic Syntax Error Recovery (2020)](https://tratt.net/laurie/blog/2020/automatic_syntax_error_recovery.html)
* [2025-11-22, 09:24:00](https://soylentnews.org/article.pl?sid=25/11/21/1346236&amp;from=rss) - [\&quot;Walk My AI Walk\&quot;, a #1 AI Country Song](https://soylentnews.org/article.pl?sid=25/11/21/1346236&amp;from=rss)
* [2025-11-22, 07:00:00](https://yro.slashdot.org/story/25/11/22/0120232/magician-forgets-password-to-his-own-hand-after-rfid-chip-implant?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Magician Forgets Password To His Own Hand After RFID Chip Implant](https://yro.slashdot.org/story/25/11/22/0120232/magician-forgets-password-to-his-own-hand-after-rfid-chip-implant?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-22, 05:21:53](https://news.ycombinator.com/item?id=46012328) - [Superman copy found in mum&apos;s attic is most valuable comic ever at $9.12M](https://www.bbc.com/news/articles/c8e9rp0knj6o)
* [2025-11-22, 04:42:00](https://soylentnews.org/article.pl?sid=25/11/21/1342241&amp;from=rss) - [Join the the Newest Social Network and Party Like its 1987](https://soylentnews.org/article.pl?sid=25/11/21/1342241&amp;from=rss)
* [2025-11-22, 04:41:58](https://lobste.rs/s/h0pcsg/how_i_learned_vulkan_wrote_small_game) - [How I learned Vulkan and wrote a small game engine with it (2024)](https://edw.is/learning-vulkan/)
* [2025-11-22, 03:57:29](https://news.ycombinator.com/item?id=46011978) - [Moss Survives 9 Months in Space Vacuum](https://scienceclock.com/moss-survives-9-months-in-space-vacuum/)
* [2025-11-22, 03:34:48](https://lobste.rs/s/6zjbgm/how_use_views_for_debugging_tools_save) - [How to use views for debugging tools to save time](https://chrispenner.ca/posts/views-for-debugging)
* [2025-11-22, 03:30:00](https://news.slashdot.org/story/25/11/22/0052243/irans-capital-is-moving-the-reason-is-an-ecological-catastrophe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Iran&apos;s Capital Is Moving. The Reason Is an Ecological Catastrophe](https://news.slashdot.org/story/25/11/22/0052243/irans-capital-is-moving-the-reason-is-an-ecological-catastrophe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-22, 03:22:45](https://lobste.rs/s/8wj7r0/what_now_handling_errors_large_systems) - [What Now? Handling Errors in Large Systems](http://brooker.co.za/blog/2025/11/20/what-now.html)
* [2025-11-22, 02:02:00](https://it.slashdot.org/story/25/11/22/0041203/cryptographers-cancel-election-results-after-losing-decryption-key?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cryptographers Cancel Election Results After Losing Decryption Key](https://it.slashdot.org/story/25/11/22/0041203/cryptographers-cancel-election-results-after-losing-decryption-key?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-22, 01:54:45](https://news.ycombinator.com/item?id=46011351) - [Infinibay LXD Container](https://github.com/Infinibay/lxd)
* [2025-11-22, 01:26:34](https://lobste.rs/s/dpky8y/installing_freebsd_15_on_my_desktop) - [Installing FreeBSD 15 on my desktop](https://yorickpeterse.com/articles/installing-freebsd-15-on-my-desktop/)
* [2025-11-22, 01:25:00](https://search.slashdot.org/story/25/11/21/2244251/google-starts-testing-ads-in-ai-mode?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Starts Testing Ads In AI Mode](https://search.slashdot.org/story/25/11/21/2244251/google-starts-testing-ads-in-ai-mode?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-22, 00:45:00](https://yro.slashdot.org/story/25/11/21/2238230/sec-dismisses-case-against-solarwinds-top-security-officer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SEC Dismisses Case Against SolarWinds, Top Security Officer](https://yro.slashdot.org/story/25/11/21/2238230/sec-dismisses-case-against-solarwinds-top-security-officer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-22, 00:31:52](https://lobste.rs/s/tbqdgl/letter_from_codeberg_onwards_upwards) - [Letter from Codeberg: Onwards and upwards](https://blog.codeberg.org/letter-from-codeberg-onwards-and-upwards.html)
* [2025-11-22, 00:30:26](https://news.ycombinator.com/item?id=46010806) - [Sharper MRI scans may be on horizon thanks to new physics-based model](https://news.rice.edu/news/2025/sharper-mri-scans-may-be-horizon-thanks-new-physics-based-model)
* [2025-11-22, 00:15:29](https://lobste.rs/s/xwkp41/bug_caused_by_door_game_you_may_have_heard) - [A bug caused by a door in a game you may have heard of called \&quot;Half Life 2\&quot;](https://mastodon.gamedev.place/@TomF/115589875974658415)
* [2025-11-22, 00:04:16](https://lobste.rs/s/pg70wu/how_get_started_with_ed_text_editor_2022) - [How to get started with the ed text editor (2022)](https://www.redhat.com/en/blog/introduction-ed-editor)
* [2025-11-22, 00:02:00](https://slashdot.org/story/25/11/21/2230226/malaysias-palm-oil-estates-are-turning-into-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Malaysia&apos;s Palm Oil Estates Are Turning Into Data Centers](https://slashdot.org/story/25/11/21/2230226/malaysias-palm-oil-estates-are-turning-into-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-21, 23:54:00](https://soylentnews.org/article.pl?sid=25/11/21/1340237&amp;from=rss) - [Kaspersky Antivirus is Now Available for Linux. Will You Use It?](https://soylentnews.org/article.pl?sid=25/11/21/1340237&amp;from=rss)
* [2025-11-21, 23:28:40](https://news.ycombinator.com/item?id=46010329) - [How I learned Vulkan and wrote a small game engine with it (2024)](https://edw.is/learning-vulkan/)
* [2025-11-21, 23:20:00](https://it.slashdot.org/story/25/11/21/2212216/firefox-147-will-support-the-xdg-base-directory-specification?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Firefox 147 Will Support The XDG Base Directory Specification](https://it.slashdot.org/story/25/11/21/2212216/firefox-147-will-support-the-xdg-base-directory-specification?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-21, 23:17:07](https://lobste.rs/s/cimr54/reverse_engineering_miele_diagnostic) - [Reverse Engineering the Miele Diagnostic Interface](https://medusalix.github.io/posts/miele-interface/)
* [2025-11-21, 23:10:17](https://news.ycombinator.com/item?id=46010173) - [3D printing with unconventional vase mode](https://vorpal.se/posts/2025/jun/23/3d-printing-with-unconventional-vase-mode/)
* [2025-11-21, 22:40:28](https://news.ycombinator.com/item?id=46009894) - [Personal blogs are back, should niche blogs be next?](https://disassociated.com/personal-blogs-back-niche-blogs-next/)
* [2025-11-21, 22:40:00](https://tech.slashdot.org/story/25/11/21/228237/google-must-double-ai-serving-capacity-every-6-months-to-meet-demand?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Must Double AI Serving Capacity Every 6 Months To Meet Demand](https://tech.slashdot.org/story/25/11/21/228237/google-must-double-ai-serving-capacity-every-6-months-to-meet-demand?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-21, 22:11:07](https://news.ycombinator.com/item?id=46009591) - [LAPD helicopter tracker with real-time operating costs](https://lapdhelicoptertracker.com/)
* [2025-11-21, 22:02:00](https://yro.slashdot.org/story/25/11/21/221232/tech-company-cto-and-others-indicted-for-exporting-nvidia-chips-to-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tech Company CTO and Others Indicted For Exporting Nvidia Chips To China](https://yro.slashdot.org/story/25/11/21/221232/tech-company-cto-and-others-indicted-for-exporting-nvidia-chips-to-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-21, 21:25:00](https://news.slashdot.org/story/25/11/21/207242/british-army-will-use-call-of-duty-to-train-soldiers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [British Army Will Use Call of Duty To Train Soldiers](https://news.slashdot.org/story/25/11/21/207242/british-army-will-use-call-of-duty-to-train-soldiers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-21, 21:13:11](https://news.ycombinator.com/item?id=46009056) - [Arduino Terms of Service and Privacy Policy update: setting the record straight](https://blog.arduino.cc/2025/11/21/the-arduino-terms-of-service-and-privacy-policy-update-setting-the-record-straight/)
* [2025-11-21, 20:57:47](https://lobste.rs/s/fwsgcq/impala_tui_for_managing_wifi_on_linux) - [impala - A TUI for managing wifi on Linux](https://github.com/pythops/impala)
* [2025-11-21, 20:49:50](https://lobste.rs/s/zypzg0/helping_valve_power_up_steam_devices) - [Helping Valve to Power Up Steam Devices](https://www.igalia.com/2025/11/helpingvalve.html)
* [2025-11-21, 20:45:06](https://news.ycombinator.com/item?id=46008769) - [Pixar: The Early Days A never-before-seen 1996 interview](https://stevejobsarchive.com/stories/pixar-early-days)
* [2025-11-21, 20:45:00](https://slashdot.org/story/25/11/21/1827242/japan-says-worlds-largest-nuclear-plant-to-restart?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Japan Says World&apos;s Largest Nuclear Plant To Restart](https://slashdot.org/story/25/11/21/1827242/japan-says-worlds-largest-nuclear-plant-to-restart?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-21, 20:36:58](https://lobste.rs/s/wujuzj/think_you_can_t_interpose_static_binaries) - [Think you can’t interpose static binaries with LD_PRELOAD? Think again](https://balintreczey.hu/blog/think-you-cant-interpose-static-binaries-with-ld_preload-think-again/)
* [2025-11-21, 20:04:00](https://tech.slashdot.org/story/25/11/21/1858250/google-says-hackers-stole-data-from-over-200-companies-following-gainsight-breach?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Says Hackers Stole Data From Over 200 Companies Following Gainsight Breach](https://tech.slashdot.org/story/25/11/21/1858250/google-says-hackers-stole-data-from-over-200-companies-following-gainsight-breach?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-21, 19:46:34](https://news.ycombinator.com/item?id=46008156) - [Discontinuation of ARM Notebook with Snapdragon X Elite SoC](https://www.tuxedocomputers.com/en/Discontinuation-of-ARM-notebooks-with-Snapdragon-X-Elite-SoC.tuxedo)
* [2025-11-21, 19:20:00](https://tech.slashdot.org/story/25/11/21/1912228/microsoft-finally-admits-almost-all-major-windows-11-core-features-are-broken?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Finally Admits Almost All Major Windows 11 Core Features Are Broken](https://tech.slashdot.org/story/25/11/21/1912228/microsoft-finally-admits-almost-all-major-windows-11-core-features-are-broken?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-21, 19:10:00](https://soylentnews.org/article.pl?sid=25/11/21/1348200&amp;from=rss) - [Google Chrome Bug Exploited as an 0-Day - Patch Now or Risk Full System Compromise](https://soylentnews.org/article.pl?sid=25/11/21/1348200&amp;from=rss)
* [2025-11-21, 18:49:00](https://it.slashdot.org/story/25/11/21/1849253/thunderbird-pro-enters-production-testing-ahead-of-9month-launch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Thunderbird Pro Enters Production Testing Ahead of $9/Month Launch](https://it.slashdot.org/story/25/11/21/1849253/thunderbird-pro-enters-production-testing-ahead-of-9month-launch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-21, 18:36:46](https://lobste.rs/s/bv3570/building_minimal_viable_armv7_emulator) - [Building a Minimal Viable Armv7 Emulator from Scratch](https://xnacly.me/posts/2025/building-a-minimal-viable-armv7-emulator/)
* [2025-11-21, 18:08:00](https://games.slashdot.org/story/25/11/21/188225/how-two-janitors-made-one-of-the-years-most-charming-rpgs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Two Janitors Made One of the Year&apos;s Most Charming RPGs](https://games.slashdot.org/story/25/11/21/188225/how-two-janitors-made-one-of-the-years-most-charming-rpgs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-21, 17:29:59](https://news.ycombinator.com/item?id=46006616) - [Helping Valve to power up Steam devices](https://www.igalia.com/2025/11/helpingvalve.html)
* [2025-11-21, 17:28:25](https://news.ycombinator.com/item?id=46006598) - [Solving Fizz Buzz with Cosines](https://susam.net/fizz-buzz-with-cosines.html)
* [2025-11-21, 16:42:19](https://news.ycombinator.com/item?id=46006082) - [You can make PS2 games in JavaScript](https://jslegenddev.substack.com/p/you-can-now-make-ps2-games-in-javascript)
* [2025-11-21, 16:34:52](https://news.ycombinator.com/item?id=46006016) - [Show HN: Wealthfolio 2.0- Open source investment tracker. Now Mobile and Docker](https://wealthfolio.app/?v=2.0)
* [2025-11-21, 15:23:20](https://news.ycombinator.com/item?id=46005388) - [Make product worse, get money](https://dynomight.net/worse/)
* [2025-11-21, 15:18:05](https://news.ycombinator.com/item?id=46005349) - [XBMC 4.0 for the Original Xbox](https://www.xbox-scene.info/articles/announcing-xbmc-40-for-the-original-xbox-r64/)
* [2025-11-21, 14:50:36](https://news.ycombinator.com/item?id=46005111) - [We should all be using dependency cooldowns](https://blog.yossarian.net/2025/11/21/We-should-all-be-using-dependency-cooldowns)
* [2025-11-21, 14:48:43](https://lobste.rs/s/rygog1/we_should_all_be_using_dependency) - [We should all be using dependency cooldowns](https://blog.yossarian.net/2025/11/21/We-should-all-be-using-dependency-cooldowns)
* [2025-11-21, 14:28:51](https://lobste.rs/s/ufvdmn/there_s_always_going_be_way_not_code_error) - [There&apos;s always going to be a way to not code error handling](https://utcc.utoronto.ca/~cks/space/blog/programming/AlwaysUncodedErrorHandling)
* [2025-11-21, 14:23:00](https://soylentnews.org/article.pl?sid=25/11/20/1344214&amp;from=rss) - [China Cuts Open New Robot on Stage to Prove Authenticity](https://soylentnews.org/article.pl?sid=25/11/20/1344214&amp;from=rss)
* [2025-11-21, 14:18:41](https://lobste.rs/s/f2omyv/go_s_runtime_may_someday_start_explicitly) - [Go&apos;s runtime may someday start explicitly freeing some internal memory](https://utcc.utoronto.ca/~cks/space/blog/programming/GoExplicitMemoryFreeing)
* [2025-11-21, 13:42:08](https://lobste.rs/s/0squ96/more_tales_about_outages_numeric_limits) - [More tales about outages and numeric limits](https://rachelbythebay.com/w/2025/11/18/down/)
* [2025-11-21, 13:23:16](https://news.ycombinator.com/item?id=46004293) - [Making a Small RPG](https://jslegenddev.substack.com/p/making-a-small-rpg)
* [2025-11-21, 13:03:57](https://lobste.rs/s/lwepwh/undo_redo_command_pattern) - [Undo, Redo, and the Command Pattern](https://www.esveo.com/en/blog/undo-redo-and-the-command-pattern/)
* [2025-11-21, 10:27:47](https://lobste.rs/s/pucsfk/fawk_llms_can_write_language_interpreter) - [FAWK: LLMs can write a language interpreter](https://martin.janiczek.cz/2025/11/21/fawk-llms-can-write-a-language-interpreter.html)
* [2025-11-21, 10:05:43](https://lobste.rs/s/n2ciff/why_pure_functional_programming_matters) - [Why (pure) functional programming matters](https://www.youtube.com/watch?v=8p5acyD8lGs)
* [2025-11-21, 09:34:00](https://soylentnews.org/article.pl?sid=25/11/19/0144249&amp;from=rss) - [Needy Software](https://soylentnews.org/article.pl?sid=25/11/19/0144249&amp;from=rss)
* [2025-11-21, 08:52:47](https://lobste.rs/s/ttfo7o/cross_platform_p2p_wi_fi_how_eu_killed_awdl) - [Cross-Platform P2P Wi-Fi: How the EU Killed AWDL](https://www.ditto.com/blog/cross-platform-p2p-wi-fi-how-the-eu-killed-awdl)
* [2025-11-21, 07:45:31](https://lobste.rs/s/owwjs0/solving_fizz_buzz_with_cosines) - [Solving Fizz Buzz with Cosines](https://susam.net/fizz-buzz-with-cosines.html)
* [2025-11-21, 04:45:00](https://soylentnews.org/article.pl?sid=25/11/19/0140243&amp;from=rss) - [Software Developers Show Less Constructive Scepticism When Using AI Assistants](https://soylentnews.org/article.pl?sid=25/11/19/0140243&amp;from=rss)
* [2025-11-21, 04:29:04](https://lobste.rs/s/gtbhhc/exploring_fragmentation_wayland) - [Exploring the Fragmentation of Wayland, an xdotool adventure](https://www.semicomplete.com/blog/xdotool-and-exploring-wayland-fragmentation/)
* [2025-11-21, 00:31:47](https://news.ycombinator.com/item?id=45999842) - [Homeschooling hits record numbers](https://reason.com/2025/11/19/homeschooling-hits-record-numbers/)
* [2025-11-21, 00:07:00](https://soylentnews.org/article.pl?sid=25/11/19/0138242&amp;from=rss) - [Is Perplexity the First AI Unicorn to Fail?](https://soylentnews.org/article.pl?sid=25/11/19/0138242&amp;from=rss)
* [2025-11-20, 19:15:00](https://soylentnews.org/article.pl?sid=25/11/18/1216240&amp;from=rss) - [Turris Releases Their New Omnia NG Router](https://soylentnews.org/article.pl?sid=25/11/18/1216240&amp;from=rss)
* [2025-11-20, 18:05:54](https://lobste.rs/s/cphkc3/firefox_147_will_support_xdg_base) - [Firefox 147 Will Support The XDG Base Directory Specification](https://www.phoronix.com/news/Firefox-147-XDG-Base-Directory)
* [2025-11-20, 15:53:30](https://lobste.rs/s/p9i6g3/open_source_developers_are_exhausted) - [Open Source Developers Are Exhausted, Unpaid, and Ready to Walk Away](https://itsfoss.com/news/open-source-developers-are-exhausted/)
* [2025-11-20, 14:37:00](https://soylentnews.org/article.pl?sid=25/11/18/1212257&amp;from=rss) - [Many Hard Leetcode Problems Are Easy Constraint Problems](https://soylentnews.org/article.pl?sid=25/11/18/1212257&amp;from=rss)
* [2025-11-20, 13:26:08](https://news.ycombinator.com/item?id=45992316) - [Building a Durable Execution Engine with SQLite](https://www.morling.dev/blog/building-durable-execution-engine-with-sqlite/)
* [2025-11-20, 09:52:00](https://soylentnews.org/article.pl?sid=25/11/18/1210237&amp;from=rss) - [Floating Solar Panels Show Promise, but Environmental Impacts Vary by Location](https://soylentnews.org/article.pl?sid=25/11/18/1210237&amp;from=rss)
* [2025-11-20, 05:04:00](https://soylentnews.org/article.pl?sid=25/11/18/125234&amp;from=rss) - [The Intel 4004 Was the First Microprocessor, Right? ](https://soylentnews.org/article.pl?sid=25/11/18/125234&amp;from=rss)
* [2025-11-20, 00:18:00](https://soylentnews.org/article.pl?sid=25/11/18/120241&amp;from=rss) - [Full Metal Modine](https://soylentnews.org/article.pl?sid=25/11/18/120241&amp;from=rss)
* [2025-11-19, 19:36:00](https://soylentnews.org/article.pl?sid=25/11/18/113239&amp;from=rss) - [Big Tech Wants Direct Access to Our Brains](https://soylentnews.org/article.pl?sid=25/11/18/113239&amp;from=rss)
* [2025-11-19, 14:49:00](https://soylentnews.org/article.pl?sid=25/11/18/0121255&amp;from=rss) - [FPGA Based IBM-PC-XT](https://soylentnews.org/article.pl?sid=25/11/18/0121255&amp;from=rss)
* [2025-11-19, 10:01:00](https://soylentnews.org/article.pl?sid=25/11/18/0113223&amp;from=rss) - [Canonical Extends Ubuntu Support to 15 Years](https://soylentnews.org/article.pl?sid=25/11/18/0113223&amp;from=rss)
* [2025-11-19, 05:16:00](https://soylentnews.org/article.pl?sid=25/11/18/018202&amp;from=rss) - [Mozilla Unveils Plans for New &apos;AI Window&apos; Browsing Mode in Firefox, Opens Signups](https://soylentnews.org/article.pl?sid=25/11/18/018202&amp;from=rss)
* [2025-11-19, 00:31:00](https://soylentnews.org/article.pl?sid=25/11/18/014241&amp;from=rss) - [Raccoons Are Showing Early Signs of Domestication](https://soylentnews.org/article.pl?sid=25/11/18/014241&amp;from=rss)
* [2025-11-18, 19:47:00](https://soylentnews.org/article.pl?sid=25/11/17/119215&amp;from=rss) - [DHS Offers “Disturbing New Excuses” to Seize Kids’ Biometric Data, Expert Says](https://soylentnews.org/article.pl?sid=25/11/17/119215&amp;from=rss)
* [2025-11-18, 17:35:31](https://news.ycombinator.com/item?id=45969398) - [The Connectivity Standards Alliance Announces Zigbee 4.0 and Suzi](https://csa-iot.org/newsroom/the-connectivity-standards-alliance-announces-zigbee-4-0-and-suzi-empowering-the-next-generation-of-secure-interoperable-iot-devices/)
* [2025-11-18, 15:04:00](https://soylentnews.org/article.pl?sid=25/11/17/0246249&amp;from=rss) - [The Data Center Resistance Has Arrived](https://soylentnews.org/article.pl?sid=25/11/17/0246249&amp;from=rss)
* [2025-11-18, 10:23:00](https://soylentnews.org/article.pl?sid=25/11/17/0243214&amp;from=rss) - [Google Settlement With Epic Caps Play Store Fees, Boosts Other Android App Stores](https://soylentnews.org/article.pl?sid=25/11/17/0243214&amp;from=rss)
* [2025-11-18, 08:18:43](https://news.ycombinator.com/item?id=45962656) - [Event Sourcing in Go: From Zero to Production](https://skoredin.pro/blog/golang/event-sourcing-go)
* [2025-11-18, 05:37:00](https://soylentnews.org/article.pl?sid=25/11/17/0240210&amp;from=rss) - [Nvidia’s Jensen Huang: China will Surpass U.S. in AI Race Through ENERGY](https://soylentnews.org/article.pl?sid=25/11/17/0240210&amp;from=rss)
* [2025-11-18, 00:53:00](https://soylentnews.org/article.pl?sid=25/11/16/1340211&amp;from=rss) - [Starshield Satellite Constellation Emitting Unusual Radio Signals](https://soylentnews.org/article.pl?sid=25/11/16/1340211&amp;from=rss)
