# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software

* [RetroFab: Playable 3D simulations of vintage electronic games](https://itizso.itch.io/retrofab) ([Comments](https://lobste.rs/s/zd9d1c/retrofab_playable_3d_simulations)) - An innovative approach to bringing vintage electronic games to life with 3D simulations, offering creative, interactive experiences.

* [Fully Dynamically Linked Rust Binary: An Experiment](https://www.kxxt.dev/blog/fully-dynamically-linked-rust-binary/) ([Comments](https://lobste.rs/s/zinqjs/fully_dynamically_linked_rust_binary)) - An exploration into fully dynamically linking Rust binaries and the benefits it provides.

* [Show HN: Daily-notes.nvim – fuzzy time journal and planning plugin](https://github.com/fdavies93/daily-notes.nvim) ([Comments](https://news.ycombinator.com/item?id=42988946)) - A useful Neovim plugin for journaling and task planning with advanced fuzzy features.

* [Qalculate hacks](https://anarc.at/blog/2025-02-08-qalculate-hacks/) ([Comments](https://lobste.rs/s/ou9v0b/qalculate_hacks)) - Innovative techniques and tips for the advanced calculator software, Qalculate.

* [No-Libc Zig Now Outperforms Glibc Zig](https://ziglang.org/devlog/2025/#2025-02-07) ([Comments](https://lobste.rs/s/uoxout/no_libc_zig_now_outperforms_glibc_zig)) - The Zig language showcases improved performance by bypassing the C standard library.

## Science and Space

* [Brain Hyperconnectivity in Children with Autism and Its Links to Social Deficits (2013)](https://www.cell.com/cell-reports/fulltext/S2211-1247(13)00570-6) ([Comments](https://news.ycombinator.com/item?id=42988303)) - Study highlights the unique neural connectivity patterns in children with autism and their impact on social interaction.

* [Boeing's 'Starliner' Also Experienced an Issue on Its Return to Earth](https://science.slashdot.org/story/25/02/09/0322226/boeings-starliner-also-experienced-an-issue-on-its-return-to-earth?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://science.slashdot.org/story/25/02/09/0322226/boeings-starliner-also-experienced-an-issue-on-its-return-to-earth?utm_source=rss1.0mainlinkanon&utm_medium=feed)) - An update on Boeing's Starliner spacecraft and technical challenges during re-entry.

* [Mysterious Radiation Belts Detected Around Earth After Epic Solar Storm](https://soylentnews.org/article.pl?sid=25/02/08/1232254&from=rss) ([Comments](https://soylentnews.org/article.pl?sid=25/02/08/1232254&from=rss)) - New radiation belts detected, uncovering intriguing effects of a major solar storm.

## Open Source and Software Freedom

* [FOSDEM 2025 - How we are defending Software Freedom against Apple at the EU's highest court](https://fosdem.org/2025/schedule/event/fosdem-2025-5084-how-we-are-defending-software-freedom-against-apple-at-the-eu-s-highest-court/) ([Comments](https://lobste.rs/s/3rqmav/fosdem_2025_how_we_are_defending_software)) - Insights into the battle for software freedom and its implications at a legal level.

* [Does the 'Spirit' of Open Source Mean Much More Than a License?](https://news.slashdot.org/story/25/02/09/0039235/does-the-spirit-of-open-source-mean-much-more-than-a-license?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.slashdot.org/story/25/02/09/0039235/does-the-spirit-of-open-source-mean-much-more-than-a-license?utm_source=rss1.0mainlinkanon&utm_medium=feed)) - A reflective article exploring whether open source is more about values than licenses.

## Cyber Security and Privacy

* [ 'Cracked' and 'Nulled' Crime Forums,Closed Down In European Cyber Bust](https://soylentnews.org/article.pl?sid=25/02/08/1244232&from=rss) ([Comments](https://soylentnews.org/article.pl?sid=25/02/08/1244232&from=rss)) - Law enforcement successfully targets cybercrime forums in a significant operation.

* [US ICE Updates Immigration Raid Timestamps to Game Goggle Search Results](https://soylentnews.org/politics/article.pl?sid=25/02/07/0354212&from=rss) ([Comments](https://soylentnews.org/politics/article.pl?sid=25/02/07/0354212&from=rss)) - Examination of manipulative techniques used to alter search results around immigration.

## Cultural Highlights

* [The Man in the Midnight-Blue Six-Ply Italian-Milled Wool Suit](https://www.theatlantic.com/magazine/archive/2025/03/gary-shteyngart-bespoke-suit-mens-fashion-self-love/681441/) ([Comments](https://news.ycombinator.com/item?id=42989062)) - A humorous and introspective story on self-identity, craftsmanship, and fashion.

* [Donkey Kong's Famed Kill Screen Has Been Cleared For the First Time](https://games.slashdot.org/story/25/02/08/0758212/donkey-kongs-famed-kill-screen-has-been-cleared-for-the-first-time?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://games.slashdot.org/story/25/02/08/0758212/donkey-kongs-famed-kill-screen-has-been-cleared-for-the-first-time?utm_source=rss1.0mainlinkanon&utm_medium=feed)) - A video gaming milestone as a classic arcade challenge gets conquered.

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

* [2025-02-09, 09:48:23](https://lobste.rs/s/zd9d1c/retrofab_playable_3d_simulations) - [RetroFab: Playable 3D simulations of vintage electronic games](https://itizso.itch.io/retrofab)
* [2025-02-09, 09:42:12](https://lobste.rs/s/zbbfht/visible_zorker) - [The Visible Zorker](https://blog.zarfhome.com/2025/01/the-visible-zorker)
* [2025-02-09, 08:54:37](https://news.ycombinator.com/item?id=42989419) - [Mathematics in the 20th century, by Michael Atiyah [pdf] (2002)](https://marktomforde.com/academic/miscellaneous/images/atiyah20thcentury.pdf)
* [2025-02-09, 08:44:00](https://science.slashdot.org/story/25/02/09/0322226/boeings-starliner-also-experienced-an-issue-on-its-return-to-earth?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Boeing's 'Starliner' Also Experienced an Issue on Its Return to Earth](https://science.slashdot.org/story/25/02/09/0322226/boeings-starliner-also-experienced-an-issue-on-its-return-to-earth?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-09, 08:24:17](https://news.ycombinator.com/item?id=42989320) - [Modern-Day Oracles or Bullshit Machines](https://thebullshitmachines.com)
* [2025-02-09, 08:18:28](https://lobste.rs/s/3rqmav/fosdem_2025_how_we_are_defending_software) - [FOSDEM 2025 - How we are defending Software Freedom against Apple at the EU's highest court](https://fosdem.org/2025/schedule/event/fosdem-2025-5084-how-we-are-defending-software-freedom-against-apple-at-the-eu-s-highest-court/)
* [2025-02-09, 08:15:07](https://lobste.rs/s/ou9v0b/qalculate_hacks) - [Qalculate hacks](https://anarc.at/blog/2025-02-08-qalculate-hacks/)
* [2025-02-09, 07:57:13](https://lobste.rs/s/p11wif/lrgrep_selecting_error_messages_for_lr) - [LRGrep: Selecting Error Messages for LR parsers](https://def.lakaban.net/research/#lrgrep-selecting-error-messages-for-lr-parsers)
* [2025-02-09, 07:10:56](https://news.ycombinator.com/item?id=42989062) - [The Man in the Midnight-Blue Six-Ply Italian-Milled Wool Suit](https://www.theatlantic.com/magazine/archive/2025/03/gary-shteyngart-bespoke-suit-mens-fashion-self-love/681441/)
* [2025-02-09, 07:04:55](https://lobste.rs/s/v2ffr2/vanspoof_prototype_1_hardware) - [VanSpoof - Prototype 1 - Hardware](https://mikecoats.com/van-spoof-prototype-1-part-1/)
* [2025-02-09, 06:42:10](https://news.ycombinator.com/item?id=42988946) - [Show HN: Daily-notes.nvim – fuzzy time journal and planning plugin](https://github.com/fdavies93/daily-notes.nvim)
* [2025-02-09, 06:23:00](https://soylentnews.org/article.pl?sid=25/02/08/1244232&from=rss) - [ 'Cracked' and 'Nulled' Crime Forums,Closed Down In European Cyber Bust](https://soylentnews.org/article.pl?sid=25/02/08/1244232&from=rss)
* [2025-02-09, 06:14:00](https://lobste.rs/s/0h55mx/c_sboms_how_pkgconf_can_solve_this_problem) - [C SBOMs, and how pkgconf can solve this problem](https://ariadne.space/2025/02/08/c-sboms-and-how-pkgconf.html)
* [2025-02-09, 05:44:00](https://tech.slashdot.org/story/25/02/09/0540227/while-tiktok-buys-ads-on-youtube-youtube-is-buying-ads-on-tiktok?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [While TikTok Buys Ads on YouTube, YouTube is Buying Ads on TikTok](https://tech.slashdot.org/story/25/02/09/0540227/while-tiktok-buys-ads-on-youtube-youtube-is-buying-ads-on-tiktok?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-09, 04:49:34](https://lobste.rs/s/yjvzga/less_than_estimation) - [Less-Than Estimation](https://chrisdone.com/posts/less-than-estimation/)
* [2025-02-09, 03:54:04](https://news.ycombinator.com/item?id=42988303) - [Brain Hyperconnectivity in Children with Autism and Its Links to Social Deficits (2013)](https://www.cell.com/cell-reports/fulltext/S2211-1247(13)00570-6)
* [2025-02-09, 03:06:42](https://lobste.rs/s/zinqjs/fully_dynamically_linked_rust_binary) - [Fully Dynamically Linked Rust Binary: An Experiment](https://www.kxxt.dev/blog/fully-dynamically-linked-rust-binary/)
* [2025-02-09, 02:48:15](https://lobste.rs/s/dmcjvx/technology_predictions_what_s_next) - [Technology Predictions, What's Next?](https://lobste.rs/s/dmcjvx/technology_predictions_what_s_next)
* [2025-02-09, 02:34:00](https://yro.slashdot.org/story/25/02/09/029241/california-tech-founder-admits-to-defrauding-4m-for-his-luxury-lifestyle?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [California Tech Founder Admits to Defrauding $4M For His Luxury Lifestyle](https://yro.slashdot.org/story/25/02/09/029241/california-tech-founder-admits-to-defrauding-4m-for-his-luxury-lifestyle?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-09, 01:38:00](https://soylentnews.org/article.pl?sid=25/02/08/1232254&from=rss) - [Mysterious Radiation Belts Detected Around Earth After Epic Solar Storm](https://soylentnews.org/article.pl?sid=25/02/08/1232254&from=rss)
* [2025-02-09, 00:47:00](https://news.slashdot.org/story/25/02/09/0039235/does-the-spirit-of-open-source-mean-much-more-than-a-license?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Does the 'Spirit' of Open Source Mean Much More Than a License?](https://news.slashdot.org/story/25/02/09/0039235/does-the-spirit-of-open-source-mean-much-more-than-a-license?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-08, 23:47:00](https://yro.slashdot.org/story/25/02/08/2344254/el-salvador-congress-votes-to-revoke-bitcoins-legal-currency-status?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [El Salvador Congress Votes to Revoke Bitcoin's 'Legal Currency' Status](https://yro.slashdot.org/story/25/02/08/2344254/el-salvador-congress-votes-to-revoke-bitcoins-legal-currency-status?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-08, 22:08:00](https://science.slashdot.org/story/25/02/08/227213/twisted-graphene-sheets-reveal-unconventional-superconductivity-governed-by-quantum-geometry?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Twisted Graphene Sheets Reveal 'Unconventional' Superconductivity Governed by Quantum Geometry](https://science.slashdot.org/story/25/02/08/227213/twisted-graphene-sheets-reveal-unconventional-superconductivity-governed-by-quantum-geometry?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-08, 21:53:55](https://lobste.rs/s/2muuuz/simple_serialization_system) - [A Simple Serialization System](https://rxi.github.io/a_simple_serialization_system.html)
* [2025-02-08, 21:22:49](https://news.ycombinator.com/item?id=42986320) - [Jacksonpollock.org (2003)](https://jacksonpollock.org/)
* [2025-02-08, 21:12:29](https://lobste.rs/s/rpejli/from_hours_360ms_over_engineering_puzzle) - [From hours to 360ms: over-engineering a puzzle solution](https://blog.danielh.cc/blog/puzzle)
* [2025-02-08, 21:08:00](https://hardware.slashdot.org/story/25/02/08/216247/volkswagen-announces-a-cheap-electric-car-to-compete-with-china?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Volkswagen Announces a Cheap Electric Car to Compete With China](https://hardware.slashdot.org/story/25/02/08/216247/volkswagen-announces-a-cheap-electric-car-to-compete-with-china?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-08, 21:01:10](https://news.ycombinator.com/item?id=42986169) - [Keeling Labs (YC W23) Is Hiring an ML Engineer for Applied ML in the Grid](https://www.keelinglabs.com/jobs)
* [2025-02-08, 20:49:00](https://soylentnews.org/article.pl?sid=25/02/07/1312257&from=rss) - [Meta Says This is the Make or Break Year for the Metaverse](https://soylentnews.org/article.pl?sid=25/02/07/1312257&from=rss)
* [2025-02-08, 20:44:09](https://lobste.rs/s/nwfknr/consuming_jetstream_atproto_firehose) - [Consuming the jetstream atproto firehose correctly](https://bsky.bad-example.com/consuming-the-firehose-correctly/)
* [2025-02-08, 19:42:55](https://lobste.rs/s/01klhe/ai_exploits_gamebreaking_bug_trackmania) - [AI exploits a gamebreaking bug in Trackmania](https://www.youtube.com/watch?v=NUl6QikjR04)
* [2025-02-08, 19:34:00](https://news.slashdot.org/story/25/02/08/0853208/the-fsf-will-auction-the-original-gnu-logo-drawing-stallmans-medal-and-an-amiga?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [The FSF Will Auction the Original GNU Logo Drawing, Stallman's Medal, and an Amiga](https://news.slashdot.org/story/25/02/08/0853208/the-fsf-will-auction-the-original-gnu-logo-drawing-stallmans-medal-and-an-amiga?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-08, 19:20:10](https://news.ycombinator.com/item?id=42985427) - [Tips for mathematical handwriting (2007)](https://johnkerl.org/doc/ortho/ortho.html)
* [2025-02-08, 19:06:42](https://lobste.rs/s/yqqljw/be_skeptical_all_code_not_just_funny_stuff) - [Be Skeptical of All Code - Not Just the Funny Stuff](https://eieio.games/blog/be-skeptical-of-all-code-not-just-the-funny-stuff/)
* [2025-02-08, 18:34:00](https://slashdot.org/story/25/02/08/0531202/deepseek-ios-app-sends-data-unencrypted-to-bytedance-controlled-servers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [DeepSeek IOS App Sends Data Unencrypted To ByteDance-Controlled Servers](https://slashdot.org/story/25/02/08/0531202/deepseek-ios-app-sends-data-unencrypted-to-bytedance-controlled-servers?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-08, 18:24:39](https://news.ycombinator.com/item?id=42984962) - [Show HN: Chez Scheme txtar port from Go](https://git.sr.ht/~egtann/txtar/)
* [2025-02-08, 17:34:00](https://news.slashdot.org/story/25/02/08/0735240/white-house-moves-to-halt-federal-funds-for-ev-charging-stations?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [White House Moves to Halt Federal Funds for EV Charging Stations](https://news.slashdot.org/story/25/02/08/0735240/white-house-moves-to-halt-federal-funds-for-ev-charging-stations?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-08, 17:33:37](https://lobste.rs/s/xfjcze/we_are_destroying_software) - [We are destroying software](https://antirez.com/news/145)
* [2025-02-08, 17:25:03](https://news.ycombinator.com/item?id=42984457) - [Writing a simple windows driver in Rust](https://scorpiosoftware.net/2025/02/08/writing-a-simple-driver-in-rust/)
* [2025-02-08, 17:19:23](https://news.ycombinator.com/item?id=42984420) - [Show HN: FlashSpace – fast, open-source, macOS Spaces replacement](https://github.com/wojciech-kulik/FlashSpace)
* [2025-02-08, 16:34:00](https://entertainment.slashdot.org/story/25/02/08/0620224/internet-archive-celebrates-new-public-domain-works-with-remixes-in-short-film-contest?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Internet Archive Celebrates New Public Domain Works with Remixes in Short Film Contest](https://entertainment.slashdot.org/story/25/02/08/0620224/internet-archive-celebrates-new-public-domain-works-with-remixes-in-short-film-contest?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-08, 16:19:49](https://lobste.rs/s/ld6dwl/synctrain_rethought_ios_client_for) - [Synctrain: a rethought iOS client for Syncthing](https://t-shaped.nl/posts/synctrain-a-rethought-ios-client-for-syncthing)
* [2025-02-08, 16:07:00](https://soylentnews.org/article.pl?sid=25/02/07/048232&from=rss) - [Catalytic Converters: How Much Platinum Do They Contain?](https://soylentnews.org/article.pl?sid=25/02/07/048232&from=rss)
* [2025-02-08, 15:50:10](https://lobste.rs/s/tn7hqo/carbon_is_not_programming_language_sort) - [Carbon is not a programming language (sort of)](https://herecomesthemoon.net/2025/02/carbon-is-not-a-language/)
* [2025-02-08, 15:47:36](https://news.ycombinator.com/item?id=42983699) - [The Deck: An open-source cross-platform multiplayer card game engine in Flutter](https://github.com/xajik/thedeck)
* [2025-02-08, 15:34:00](https://it.slashdot.org/story/25/02/08/0539235/are-return-to-office-mandates-just-attempts-to-make-people-to-quit?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Are Return-to-Office Mandates Just Attempts to Make People to Quit?](https://it.slashdot.org/story/25/02/08/0539235/are-return-to-office-mandates-just-attempts-to-make-people-to-quit?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-08, 14:48:25](https://news.ycombinator.com/item?id=42983275) - [We are destroying software](https://antirez.com/news/145)
* [2025-02-08, 13:00:00](https://games.slashdot.org/story/25/02/08/0758212/donkey-kongs-famed-kill-screen-has-been-cleared-for-the-first-time?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Donkey Kong's Famed Kill Screen Has Been Cleared For the First Time](https://games.slashdot.org/story/25/02/08/0758212/donkey-kongs-famed-kill-screen-has-been-cleared-for-the-first-time?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-08, 12:38:53](https://lobste.rs/s/ejwdhq/three_years_ephemeral_nixos_my) - [Three Years of Ephemeral NixOS: My Experience Resetting Root on Every Boot](https://b.tuxes.uk/three-years-of-ephemeral-nixos.html)
* [2025-02-08, 11:38:33](https://news.ycombinator.com/item?id=42982270) - [A tale of distros joining forces for a common goal: reproducible builds [video]](https://video.fosdem.org/2025/h1302/fosdem-2025-6479-a-tale-of-several-distros-joining-forces-for-a-common-goal-reproducible-builds.av1.webm)
* [2025-02-08, 11:20:00](https://soylentnews.org/article.pl?sid=25/02/07/044225&from=rss) - [Cloudflare Browser Integrity Check Blocking Many Non-Mainstream Browsers Again](https://soylentnews.org/article.pl?sid=25/02/07/044225&from=rss)
* [2025-02-08, 10:41:17](https://news.ycombinator.com/item?id=42982015) - [Generating Voronoi diagrams using Fortune's algorithm](https://redpenguin101.github.io/html/posts/2025_01_21_voronoi.html)
* [2025-02-08, 10:00:00](https://news.slashdot.org/story/25/02/08/0746221/mysterious-radiation-belts-detected-around-earth-after-epic-solar-storm?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Mysterious Radiation Belts Detected Around Earth After Epic Solar Storm](https://news.slashdot.org/story/25/02/08/0746221/mysterious-radiation-belts-detected-around-earth-after-epic-solar-storm?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-08, 08:45:00](https://soylentnews.org/meta/article.pl?sid=25/02/04/106248&from=rss) - [Soylent Update - February 2025](https://soylentnews.org/meta/article.pl?sid=25/02/04/106248&from=rss)
* [2025-02-08, 07:35:00](https://games.slashdot.org/story/25/02/08/0733239/playstation-network-suffering-major-outage?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [PlayStation Network Suffering Major Outage](https://games.slashdot.org/story/25/02/08/0733239/playstation-network-suffering-major-outage?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-08, 07:24:52](https://lobste.rs/s/zpbelt/lume_mit_licensed_cli_virtualize_macos) - [Lume, an MIT-licensed CLI to virtualize macOS environments](https://github.com/trycua/lume)
* [2025-02-08, 06:33:22](https://lobste.rs/s/uoxout/no_libc_zig_now_outperforms_glibc_zig) - [No-Libc Zig Now Outperforms Glibc Zig](https://ziglang.org/devlog/2025/#2025-02-07)
* [2025-02-08, 06:32:00](https://soylentnews.org/politics/article.pl?sid=25/02/07/0354212&from=rss) - [US ICE Updates Immigration Raid Timestamps to Game Goggle Search Results](https://soylentnews.org/politics/article.pl?sid=25/02/07/0354212&from=rss)
* [2025-02-08, 01:49:00](https://soylentnews.org/article.pl?sid=25/02/07/0350219&from=rss) - [Piecing Together the Puzzle of the World's Earliest Datable Rune Stone](https://soylentnews.org/article.pl?sid=25/02/07/0350219&from=rss)
* [2025-02-07, 22:23:31](https://news.ycombinator.com/item?id=42978199) - [Obscure islands I find interesting](https://amanvir.com/obscure-islands)
* [2025-02-07, 22:18:48](https://lobste.rs/s/etdzwd/ai_haters_build_tarpits_trap_trick_ai) - [AI haters build tarpits to trap and trick AI scrapers that ignore robots.txt](https://arstechnica.com/tech-policy/2025/01/ai-haters-build-tarpits-to-trap-and-trick-ai-scrapers-that-ignore-robots-txt/)
* [2025-02-07, 21:02:00](https://soylentnews.org/article.pl?sid=25/02/06/1054246&from=rss) - [Deepfake Videos are Getting Shockingly Good](https://soylentnews.org/article.pl?sid=25/02/06/1054246&from=rss)
* [2025-02-07, 19:48:16](https://news.ycombinator.com/item?id=42976698) - [Do-nothing scripting: the key to gradual automation (2019)](https://blog.danslimmon.com/2019/07/15/do-nothing-scripting-the-key-to-gradual-automation/)
* [2025-02-07, 19:42:30](https://lobste.rs/s/gz2fgw/getaddrinfo_sucks_everything_else_is) - [getaddrinfo sucks. everything else is much worse](https://valentin.gosu.se/blog/2025/02/getaddrinfo-sucks-everything-else-is-much-worse)
* [2025-02-07, 17:55:40](https://news.ycombinator.com/item?id=42975492) - [Cities can cost effectively start their own utilities](https://kevin.burke.dev/kevin/norcal-cities-new-utility/)
* [2025-02-07, 16:14:00](https://soylentnews.org/article.pl?sid=25/02/06/1043254&from=rss) - [As Internet Enshittification Marches On, Here are Some of the Worst Offenders](https://soylentnews.org/article.pl?sid=25/02/06/1043254&from=rss)
* [2025-02-07, 14:33:32](https://news.ycombinator.com/item?id=42972982) - [Noether's Theorem Revolutionized Physics](https://www.quantamagazine.org/how-noethers-theorem-revolutionized-physics-20250207/)
* [2025-02-07, 14:25:28](https://lobste.rs/s/srf2u2/gleam_v1_8_0_released) - [Gleam v1.8.0 released](https://gleam.run/news/gleam-gets-rename-variable/)
* [2025-02-07, 14:10:49](https://lobste.rs/s/ui5fzs/cpython_tail_call_interpreter_merged_for) - [CPython tail-call interpreter merged for Python 3.14, a 10% speedup in benchmarks](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-tail-call)
* [2025-02-07, 14:04:32](https://news.ycombinator.com/item?id=42972625) - [Fabrication Begins for Production OpenTitan Silicon – Google Open Source Blog](https://opensource.googleblog.com/2025/02/fabrication-begins-for-production-opentitan-silicon.html)
* [2025-02-07, 11:28:00](https://soylentnews.org/article.pl?sid=25/02/06/0612223&from=rss) - [Russia VPN Crackdown Revelation - VPN Sites Hide Their IP Addresses ](https://soylentnews.org/article.pl?sid=25/02/06/0612223&from=rss)
* [2025-02-07, 06:43:00](https://soylentnews.org/article.pl?sid=25/02/06/0534246&from=rss) - [Educated but Easily Fooled? Who Falls for Misinformation and Why](https://soylentnews.org/article.pl?sid=25/02/06/0534246&from=rss)
* [2025-02-07, 01:55:00](https://soylentnews.org/article.pl?sid=25/02/06/0531248&from=rss) - [Google Removes Pledge to Not Use AI for Weapons From Website](https://soylentnews.org/article.pl?sid=25/02/06/0531248&from=rss)
* [2025-02-06, 21:12:00](https://soylentnews.org/article.pl?sid=25/02/04/1537254&from=rss) - [Warmer, More Crowded Cities Bring Out the Rats](https://soylentnews.org/article.pl?sid=25/02/04/1537254&from=rss)
* [2025-02-06, 16:24:00](https://soylentnews.org/article.pl?sid=25/02/04/1528253&from=rss) - [Who's Your Pick?  Eagles or Chiefs? Or Statistics?](https://soylentnews.org/article.pl?sid=25/02/04/1528253&from=rss)
* [2025-02-06, 11:40:00](https://soylentnews.org/article.pl?sid=25/02/04/1521226&from=rss) - [Google Offering ‘Voluntary Exit’ for Employees Working on Pixel, Android](https://soylentnews.org/article.pl?sid=25/02/04/1521226&from=rss)
* [2025-02-06, 09:34:18](https://news.ycombinator.com/item?id=42960684) - [Origami by Meenakshi](https://origamee.net/)
* [2025-02-06, 07:43:07](https://news.ycombinator.com/item?id=42960068) - [In the trenches: on being an Engineering Manager](https://blog.digital-horror.com/blog/in-the-trenches-what-it-means-to-be-an-engineering-manager/)
* [2025-02-06, 06:55:00](https://soylentnews.org/article.pl?sid=25/02/04/1518208&from=rss) - [Cooking Flawless Pasta - it's Science!](https://soylentnews.org/article.pl?sid=25/02/04/1518208&from=rss)
* [2025-02-06, 02:13:00](https://soylentnews.org/article.pl?sid=25/02/04/1511202&from=rss) - [These Smart Glasses Help People With Macular Degeneration By Eliminating Blind Spots](https://soylentnews.org/article.pl?sid=25/02/04/1511202&from=rss)
* [2025-02-06, 01:32:54](https://news.ycombinator.com/item?id=42957864) - [Sand trafficking in Latin America](https://insightcrime.org/news/the-mafias-behind-sand-trafficking-in-latin-america/)
* [2025-02-06, 00:26:32](https://news.ycombinator.com/item?id=42957395) - [From hours to 360ms: over-engineering a puzzle solution](https://blog.danielh.cc/blog/puzzle)
* [2025-02-05, 21:24:00](https://soylentnews.org/article.pl?sid=25/02/04/157244&from=rss) - [Giant Study Questions Link Between Autism and Maternal Health](https://soylentnews.org/article.pl?sid=25/02/04/157244&from=rss)
* [2025-02-05, 17:12:50](https://news.ycombinator.com/item?id=42951744) - [First glimpse inside burnt scroll after 2k years](https://www.bbc.co.uk/news/articles/c5yvrq7dyg6o)
* [2025-02-05, 16:43:00](https://soylentnews.org/article.pl?sid=25/02/04/1455221&from=rss) - [Everyone Knows Your Location: Tracking Myself Down Through in-App Ads](https://soylentnews.org/article.pl?sid=25/02/04/1455221&from=rss)
* [2025-02-05, 15:45:30](https://news.ycombinator.com/item?id=42950156) - [You're missing your near misses](https://surfingcomplexity.blog/2025/02/01/youre-missing-your-near-misses/)
* [2025-02-05, 14:20:52](https://news.ycombinator.com/item?id=42948807) - [Scientists solve the mystery of sea turtles' 'lost years'](https://phys.org/news/2025-02-scientists-mystery-sea-turtles-lost.html)
* [2025-02-05, 14:02:43](https://news.ycombinator.com/item?id=42948590) - [Post-Processing Shaders as a Creative Medium](https://blog.maximeheckel.com/posts/post-processing-as-a-creative-medium/)
* [2025-02-05, 12:00:00](https://soylentnews.org/article.pl?sid=25/02/04/042215&from=rss) - [Microsoft Defender's VPN Feature Will be Killed Off at the End of February](https://soylentnews.org/article.pl?sid=25/02/04/042215&from=rss)
* [2025-02-05, 09:55:11](https://news.ycombinator.com/item?id=42946321) - [21st Century C++](https://cacm.acm.org/blogcacm/21st-century-c/)
* [2025-02-05, 09:48:30](https://news.ycombinator.com/item?id=42946270) - [Go Data Structures: Interfaces (2009)](https://research.swtch.com/interfaces)
* [2025-02-05, 07:17:00](https://soylentnews.org/article.pl?sid=25/02/04/0358217&from=rss) - [Tesla and BMW Sue European Commission Over Chinese EV Tariffs](https://soylentnews.org/article.pl?sid=25/02/04/0358217&from=rss)
* [2025-02-05, 02:35:00](https://soylentnews.org/article.pl?sid=25/02/04/0355255&from=rss) - [Medical Monitoring Machines Spotted Stealing Patient Data](https://soylentnews.org/article.pl?sid=25/02/04/0355255&from=rss)
