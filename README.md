# [News Summary](https://kherrick.github.io/news-summary/)

## Cybersecurity and Technology

* [Open Source Package With 1 Million Monthly Downloads Stole User Credentials](https://soylentnews.org/article.pl?sid=26/05/15/1911234&from=rss) ([comments](https://soylentnews.org/comments.pl?sid=26/05/15/1911234&cid=))

* [Cheap smart doorbell allows fleet-wide account takeover and call hijacking](https://www.abgeo.dev/blog/anyone-can-ring-your-doorbell/) ([comments](https://lobste.rs/s/yxj57x/cheap_smart_doorbell_allows_fleet_wide))

* [Linux Kernel Maintainers Pitch Emergency Killswitch After CopyFail and Dirty Frag Chaos](https://soylentnews.org/article.pl?sid=26/05/14/0327203&from=rss) ([comments](https://soylentnews.org/comments.pl?sid=26/05/14/0327203&cid=))

* [CVE-2026-40369: Arbitrary Kernel Address Increment via NtQuerySystemInformation](https://github.com/orinimron123/CVE-2026-40369-EXPLOIT) ([comments](https://lobste.rs/s/lwtmzl/cve_2026_40369_arbitrary_kernel_address))

* [NASA Pushes Mars Helicopter Rotors Past the Speed of Sound for the First Time Ever](https://soylentnews.org/article.pl?sid=26/05/15/199214&from=rss) ([comments](https://soylentnews.org/comments.pl?sid=26/05/15/199214&cid=))

* [Git Is Not Fine](https://www.billjings.com/posts/title/git-is-not-fine/) ([comments](https://lobste.rs/s/szsqdd/git_is_not_fine))

## Artificial Intelligence and Machine Learning

* [A Wikipedia Clone Built on AI Hallucinations is Here to Hasten Along the Death of the Internet](https://soylentnews.org/article.pl?sid=26/05/15/194258&from=rss) ([comments](https://soylentnews.org/comments.pl?sid=26/05/15/194258&cid=))

* [Someone Shared a Real Monet Painting as AI and Asked for Critiques](https://petapixel.com/2026/05/14/someone-shared-a-real-monet-painting-as-ai-and-asked-for-critiques/) ([comments](https://news.ycombinator.com/item?id=48158110))

* [ArXiv to Ban Researchers for a Year if They Submit AI Slop](https://slashdot.org/story/26/05/15/1647250/arxiv-to-ban-researchers-for-a-year-if-they-submit-ai-slop?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://slashdot.org/comments.pl?sid=26/05/15/1647250&cpage=))

## Emerging Tech and Innovations

* [Image-blaster: Creates 3D environments, SFX, and meshes from a single image](https://github.com/neilsonnn/image-blaster) ([comments](https://news.ycombinator.com/item?id=48150069))

* [The New Wild West of AI Kids’ Toys](https://soylentnews.org/article.pl?sid=26/05/14/0316205&from=rss) ([comments](https://soylentnews.org/comments.pl?sid=26/05/14/0316205&cid=))

* [Google Says Hackers Used AI to Develop a Major Security Flaw](https://soylentnews.org/article.pl?sid=26/05/14/0248229&from=rss) ([comments](https://soylentnews.org/comments.pl?sid=26/05/14/0248229&cid=))

## Science and Environment

* [Scientists Solve 100-Year-Old Schrödinger Mystery About Color Perception](https://soylentnews.org/article.pl?sid=26/05/14/0239217&from=rss) ([comments](https://soylentnews.org/comments.pl?sid=26/05/14/0239217&cid=))

* [“Cannot be Explained” – New Ultra Stainless Steel Stuns Researchers](https://soylentnews.org/article.pl?sid=26/05/13/215223&from=rss) ([comments](https://soylentnews.org/comments.pl?sid=26/05/13/215223&cid=))

* [The bird eye was pushed to an evolutionary extreme](https://www.quantamagazine.org/how-the-bird-eye-was-pushed-to-an-evolutionary-extreme-20260513/) ([comments](https://news.ycombinator.com/item?id=48132106))

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

* [2026-05-16, 09:58:42](https://lobste.rs/s/ffquwg/virtual_bevy_meetup_13_recordings_now_on) - [Virtual Bevy Meetup 13 Recordings now on YouTube](https://rustunit.com/bevy-meetup/bevy-meetup-13/)
* [2026-05-16, 09:45:51](https://lobste.rs/s/4g74mw/ascetic_computing) - [Ascetic Computing](https://ratfactor.com/ascetic-computing)
* [2026-05-16, 09:40:00](https://soylentnews.org/article.pl?sid=26/05/15/1911234&amp;from=rss) - [Open Source Package With 1 Million Monthly Downloads Stole User Credentials](https://soylentnews.org/article.pl?sid=26/05/15/1911234&amp;from=rss)
* [2026-05-16, 08:57:51](https://lobste.rs/s/yxj57x/cheap_smart_doorbell_allows_fleet_wide) - [Cheap smart doorbell allows fleet-wide account takeover and call hijacking](https://www.abgeo.dev/blog/anyone-can-ring-your-doorbell/)
* [2026-05-16, 08:51:04](https://lobste.rs/s/duyp69/ctf_scene_is_dead) - [The CTF scene is dead](https://kabir.au/blog/the-ctf-scene-is-dead)
* [2026-05-16, 08:30:51](https://news.ycombinator.com/item?id=48158110) - [Someone Shared a Real Monet Painting as AI and Asked for Critiques](https://petapixel.com/2026/05/14/someone-shared-a-real-monet-painting-as-ai-and-asked-for-critiques/)
* [2026-05-16, 08:28:22](https://lobste.rs/s/m9r5px/how_write_ssds) - [How to Write to SSDs](https://arxiv.org/pdf/2603.09927)
* [2026-05-16, 08:27:44](https://lobste.rs/s/lrpbpg/explore_wikipedia_like_windows_xp) - [Explore Wikipedia Like a Windows XP Desktop](https://explorer.samismith.com/)
* [2026-05-16, 08:14:42](https://lobste.rs/s/7qxxww/using_rust_parse_godot_tres_files_walk) - [Using Rust to parse Godot .tres files and walk the resource graph](https://assethoard.com/blog/parsing-godot-tres-files)
* [2026-05-16, 07:36:31](https://lobste.rs/s/jr7x5l/starting_my_own_content_delivery_network) - [Starting my own Content Delivery Network](https://www.youtube.com/watch?v=LCJIQufZeeg)
* [2026-05-16, 07:01:55](https://news.ycombinator.com/item?id=48157559) - [Frontier AI has broken the open CTF format](https://kabir.au/blog/the-ctf-scene-is-dead)
* [2026-05-16, 07:00:00](https://hardware.slashdot.org/story/26/05/16/0322208/japan-runs-out-of-robot-wolves-in-fight-against-bears?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Japan Runs Out of Robot Wolves In Fight Against Bears](https://hardware.slashdot.org/story/26/05/16/0322208/japan-runs-out-of-robot-wolves-in-fight-against-bears?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-16, 06:10:32](https://lobste.rs/s/fbietj/prolog_projects_tips) - [Prolog Projects Tips](https://occasionallycogent.com/prolog_project_helpers/index.html)
* [2026-05-16, 05:48:37](https://lobste.rs/s/qkmfzf/history_ides_at_google) - [A History of IDEs at Google](https://laurent.le-brun.eu/blog/a-history-of-ides-at-google)
* [2026-05-16, 05:00:21](https://lobste.rs/s/lwtmzl/cve_2026_40369_arbitrary_kernel_address) - [CVE-2026-40369: Arbitrary Kernel Address Increment via NtQuerySystemInformation](https://github.com/orinimron123/CVE-2026-40369-EXPLOIT)
* [2026-05-16, 04:58:00](https://soylentnews.org/article.pl?sid=26/05/15/199214&amp;from=rss) - [NASA Pushes Mars Helicopter Rotors Past the Speed of Sound for the First Time Ever](https://soylentnews.org/article.pl?sid=26/05/15/199214&amp;from=rss)
* [2026-05-16, 03:30:00](https://news.slashdot.org/story/26/05/15/2256225/wood-burning-is-reintroducing-lead-pollution-into-the-air-scientists-find?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wood Burning Is Reintroducing Lead Pollution Into the Air, Scientists Find](https://news.slashdot.org/story/26/05/15/2256225/wood-burning-is-reintroducing-lead-pollution-into-the-air-scientists-find?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-16, 00:18:03](https://news.ycombinator.com/item?id=48155570) - [Show HN: Epiq – Distributed Git based issue tracker TUI](https://ljtn.github.io/epiq/)
* [2026-05-16, 00:12:00](https://soylentnews.org/article.pl?sid=26/05/15/197229&amp;from=rss) - [Tails Linux 7.7.3 Emergency Release Fixes Dirty Frag Vulnerability](https://soylentnews.org/article.pl?sid=26/05/15/197229&amp;from=rss)
* [2026-05-15, 23:37:32](https://news.ycombinator.com/item?id=48155324) - [The main thing about P2P meth is that there&apos;s so much of it (2021)](https://dynomight.net/p2p-meth/)
* [2026-05-15, 23:33:32](https://news.ycombinator.com/item?id=48155297) - [Erlang/OTP 29.0](https://www.erlang.org/news/188)
* [2026-05-15, 23:22:30](https://news.ycombinator.com/item?id=48155212) - [SQL patterns I use to catch transaction fraud](https://analytics.fixelsmith.com/posts/sql-fraud-patterns/)
* [2026-05-15, 23:00:00](https://hardware.slashdot.org/story/26/05/15/1935230/kioxia-and-dell-cram-nearly-10pb-into-a-single-2u-server?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Kioxia and Dell Cram Nearly 10PB Into a Single 2U Server](https://hardware.slashdot.org/story/26/05/15/1935230/kioxia-and-dell-cram-nearly-10pb-into-a-single-2u-server?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-15, 22:38:58](https://news.ycombinator.com/item?id=48154865) - [Orthrus-Qwen3: up to 7.8×tokens/forward on Qwen3, identical output distribution](https://github.com/chiennv2000/orthrus)
* [2026-05-15, 22:23:38](https://news.ycombinator.com/item?id=48154711) - [How to Write to SSDs [pdf]](https://www.vldb.org/pvldb/vol19/p1469-lee.pdf)
* [2026-05-15, 22:00:00](https://hardware.slashdot.org/story/26/05/15/1928250/amd-is-bringing-improved-fsr-4-upscaling-to-its-older-gpus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AMD Is Bringing Improved FSR 4 Upscaling To Its Older GPUs](https://hardware.slashdot.org/story/26/05/15/1928250/amd-is-bringing-improved-fsr-4-upscaling-to-its-older-gpus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-15, 21:00:00](https://it.slashdot.org/story/26/05/15/1858235/bitwarden-scrubs-always-free-and-inclusion-values-from-its-website?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bitwarden Scrubs &apos;Always Free&apos; and &apos;Inclusion&apos; Values From Its Website](https://it.slashdot.org/story/26/05/15/1858235/bitwarden-scrubs-always-free-and-inclusion-values-from-its-website?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-15, 20:28:04](https://lobste.rs/s/2whryd/announcing_zulip_foundation) - [Announcing the Zulip Foundation](https://blog.zulip.com/2026/05/15/announcing-zulip-foundation/)
* [2026-05-15, 20:26:47](https://news.ycombinator.com/item?id=48153379) - [I believe there are entire companies right now under AI psychosis](https://twitter.com/mitchellh/status/2055380239711457578)
* [2026-05-15, 20:00:00](https://tech.slashdot.org/story/26/05/15/1843217/the-era-of-15gb-free-gmail-storage-is-ending?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Era of 15GB Free Gmail Storage Is Ending](https://tech.slashdot.org/story/26/05/15/1843217/the-era-of-15gb-free-gmail-storage-is-ending?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-15, 19:48:48](https://news.ycombinator.com/item?id=48152994) - [Bill to block publishers from killing online games advances in California](https://arstechnica.com/gaming/2026/05/bill-to-keep-online-games-playable-clears-key-hurdle-in-california/)
* [2026-05-15, 19:34:27](https://lobste.rs/s/29pm2f/llm_generated_submissions_should_be) - [LLM generated submissions should be disallowed](https://lobste.rs/s/29pm2f/llm_generated_submissions_should_be)
* [2026-05-15, 19:24:00](https://soylentnews.org/article.pl?sid=26/05/15/194258&amp;from=rss) - [A Wikipedia Clone Built on AI Hallucinations is Here to Hasten Along the Death of the Internet](https://soylentnews.org/article.pl?sid=26/05/15/194258&amp;from=rss)
* [2026-05-15, 19:11:56](https://lobste.rs/s/szsqdd/git_is_not_fine) - [Git Is Not Fine](https://www.billjings.com/posts/title/git-is-not-fine/)
* [2026-05-15, 19:00:00](https://games.slashdot.org/story/26/05/15/1744253/bill-to-block-publishers-from-killing-online-games-advances-in-california?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bill To Block Publishers From Killing Online Games Advances In California](https://games.slashdot.org/story/26/05/15/1744253/bill-to-block-publishers-from-killing-online-games-advances-in-california?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-15, 18:37:01](https://news.ycombinator.com/item?id=48152168) - [The Zulip Foundation](https://blog.zulip.com/2026/05/15/announcing-zulip-foundation/)
* [2026-05-15, 18:00:00](https://news.slashdot.org/story/26/05/15/1655242/openai-now-wants-chatgpt-to-access-your-bank-accounts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Now Wants ChatGPT To Access Your Bank Accounts](https://news.slashdot.org/story/26/05/15/1655242/openai-now-wants-chatgpt-to-access-your-bank-accounts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-15, 17:58:21](https://lobste.rs/s/n1fgpt/5x_faster_fast_blur_image_rs) - [5× faster fast_blur in image-rs](https://apas.tel/blog/optimizing-image-rs-blur)
* [2026-05-15, 17:15:58](https://news.ycombinator.com/item?id=48151237) - [I designed a nibble-oriented CPU in Verilog to build a scientific calculator](https://github.com/gdevic/FPGA-Calculator)
* [2026-05-15, 17:00:00](https://slashdot.org/story/26/05/15/1647250/arxiv-to-ban-researchers-for-a-year-if-they-submit-ai-slop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ArXiv to Ban Researchers for a Year if They Submit AI Slop](https://slashdot.org/story/26/05/15/1647250/arxiv-to-ban-researchers-for-a-year-if-they-submit-ai-slop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-15, 16:51:25](https://news.ycombinator.com/item?id=48150900) - [Bun Rust rewrite: \&quot;codebase fails basic miri checks, allows for UB in safe rust\&quot;](https://github.com/oven-sh/bun/issues/30719)
* [2026-05-15, 16:28:17](https://lobste.rs/s/7a6atx/moving_away_from_tailwind_learning) - [Moving away from Tailwind, and learning to structure my CSS](https://jvns.ca/blog/2026/05/15/moving-away-from-tailwind--and-learning-to-structure-my-css-/)
* [2026-05-15, 16:15:36](https://news.ycombinator.com/item?id=48150431) - [Project Gutenberg – keeps getting better](https://www.gutenberg.org/)
* [2026-05-15, 16:00:00](https://tech.slashdot.org/story/26/05/15/0249216/congress-introduces-bill-to-permanently-block-chinese-vehicles-from-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Congress Introduces Bill To Permanently Block Chinese Vehicles From US](https://tech.slashdot.org/story/26/05/15/0249216/congress-introduces-bill-to-permanently-block-chinese-vehicles-from-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-15, 15:42:37](https://news.ycombinator.com/item?id=48150069) - [Image-blaster: Creates 3D environments, SFX, and meshes from a single image](https://github.com/neilsonnn/image-blaster)
* [2026-05-15, 15:00:00](https://tech.slashdot.org/story/26/05/15/0244239/honda-retreats-to-hybrids-after-failed-ev-bet-triggers-record-9-billion-loss?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Honda Retreats To Hybrids After Failed EV Bet Triggers Record $9 Billion Loss](https://tech.slashdot.org/story/26/05/15/0244239/honda-retreats-to-hybrids-after-failed-ev-bet-triggers-record-9-billion-loss?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-15, 14:45:00](https://soylentnews.org/article.pl?sid=26/05/14/0327203&amp;from=rss) - [Linux Kernel Maintainers Pitch Emergency Killswitch After CopyFail and Dirty Frag Chaos](https://soylentnews.org/article.pl?sid=26/05/14/0327203&amp;from=rss)
* [2026-05-15, 14:39:51](https://news.ycombinator.com/item?id=48149259) - [Additive Blending on the Nintendo 64](https://phoboslab.org/log/2026/05/n64-additive-blending)
* [2026-05-15, 14:02:36](https://news.ycombinator.com/item?id=48148726) - [ASCII by Jason Scott](https://ascii.textfiles.com/)
* [2026-05-15, 13:39:54](https://news.ycombinator.com/item?id=48148460) - [A 0-click exploit chain for the Pixel 10](https://projectzero.google/2026/05/pixel-10-exploit.html)
* [2026-05-15, 13:04:52](https://lobste.rs/s/ktqfov/open_source_resistance) - [Open Source Resistance](https://ossresistance.com/)
* [2026-05-15, 12:03:48](https://lobste.rs/s/ylq7sd/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/ylq7sd/what_are_you_doing_this_weekend)
* [2026-05-15, 11:53:41](https://lobste.rs/s/wehmq6/sql_incorrect_by_construction) - [SQL: Incorrect by Construction](https://chreke.com/posts/sql-incorrect-by-construction)
* [2026-05-15, 11:18:51](https://lobste.rs/s/grynsa/old_world_tech_is_dying_new_cannot_be_born) - [The old world of tech is dying and the new cannot be born](https://www.baldurbjarnason.com/2026/the-old-world-of-tech-is-dying/)
* [2026-05-15, 11:00:00](https://news.slashdot.org/story/26/05/15/0217208/americans-would-rather-have-a-nuclear-plant-in-their-backyard-than-a-datacenter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Americans Would Rather Have a Nuclear Plant In Their Backyard Than a Datacenter](https://news.slashdot.org/story/26/05/15/0217208/americans-would-rather-have-a-nuclear-plant-in-their-backyard-than-a-datacenter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-15, 10:51:13](https://news.ycombinator.com/item?id=48147021) - [The sigmoids won&apos;t save you](https://www.astralcodexten.com/p/the-sigmoids-wont-save-you)
* [2026-05-15, 10:09:55](https://lobste.rs/s/yvm1dh/why_use_f_for_scripting_automation) - [why use F# for scripting and automation?](https://iev.ee/blog/why-use-fsharp/)
* [2026-05-15, 09:59:00](https://soylentnews.org/article.pl?sid=26/05/14/0321244&amp;from=rss) - [The Great Zombification: AI in the Ivory Tower](https://soylentnews.org/article.pl?sid=26/05/14/0321244&amp;from=rss)
* [2026-05-15, 08:14:09](https://lobste.rs/s/ouayo0/community_building_at_edge_internet) - [Community building at the edge of the Internet](https://news.dyne.org/the-edge-of-the-internet/)
* [2026-05-15, 07:00:00](https://science.slashdot.org/story/26/05/15/0225226/spacex-unveils-sweeping-starship-v3-upgrades?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SpaceX Unveils Sweeping Starship V3 Upgrades](https://science.slashdot.org/story/26/05/15/0225226/spacex-unveils-sweeping-starship-v3-upgrades?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-15, 05:16:00](https://soylentnews.org/article.pl?sid=26/05/14/0316205&amp;from=rss) - [The New Wild West of AI Kids’ Toys](https://soylentnews.org/article.pl?sid=26/05/14/0316205&amp;from=rss)
* [2026-05-15, 03:30:00](https://yro.slashdot.org/story/26/05/15/0140234/musk-accused-of-selective-amnesia-altman-of-lying-as-openai-trial-nears-end?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Musk Accused of &apos;Selective Amnesia&apos;, Altman of Lying As OpenAI Trial Nears End](https://yro.slashdot.org/story/26/05/15/0140234/musk-accused-of-selective-amnesia-altman-of-lying-as-openai-trial-nears-end?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-15, 03:13:37](https://lobste.rs/s/0cvxwk/prolog_basics_explained_with_pokemon) - [Prolog Basics Explained with Pokémon](https://unplannedobsolescence.com/blog/prolog-basics-pokemon/)
* [2026-05-15, 01:14:21](https://lobste.rs/s/wskhre/linux_0_day_access_root_owned_files_as) - [linux 0-day, access root-owned files as an unprivileged user](https://github.com/0xdeadbeefnetwork/ssh-keysign-pwn/)
* [2026-05-15, 00:50:15](https://lobste.rs/s/kxmdvj/what_way_if_any_are_you_tech_minimalist) - [In what way if any are you a tech minimalist while maintaining your job/love for tech?](https://lobste.rs/s/kxmdvj/what_way_if_any_are_you_tech_minimalist)
* [2026-05-15, 00:25:00](https://soylentnews.org/article.pl?sid=26/05/14/0239217&amp;from=rss) - [Scientists Solve 100-Year-Old Schrödinger Mystery About Color Perception](https://soylentnews.org/article.pl?sid=26/05/14/0239217&amp;from=rss)
* [2026-05-14, 23:00:00](https://news.slashdot.org/story/26/05/14/1923223/uk-antitrust-regulator-is-officially-investigating-microsoft-office?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Antitrust Regulator Is Officially Investigating Microsoft Office](https://news.slashdot.org/story/26/05/14/1923223/uk-antitrust-regulator-is-officially-investigating-microsoft-office?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-14, 19:41:00](https://soylentnews.org/article.pl?sid=26/05/14/032218&amp;from=rss) - [GM Agrees to Pay $12.75 Million to Settle California Lawsuit Over Misuse of Customers&apos; Driving Data](https://soylentnews.org/article.pl?sid=26/05/14/032218&amp;from=rss)
* [2026-05-14, 15:35:14](https://news.ycombinator.com/item?id=48136981) - [Show HN: Watch a neural net learn to play Snake](https://ppo.gradexp.xyz/)
* [2026-05-14, 14:54:00](https://soylentnews.org/article.pl?sid=26/05/14/0258245&amp;from=rss) - [Both Fedora and Ubuntu Will Get AI Support – Soon](https://soylentnews.org/article.pl?sid=26/05/14/0258245&amp;from=rss)
* [2026-05-14, 14:32:46](https://news.ycombinator.com/item?id=48136000) - [Naturally Occurring Quasicrystals](https://johncarlosbaez.wordpress.com/2026/05/14/naturally-occurring-quasicrystals/)
* [2026-05-14, 11:55:43](https://news.ycombinator.com/item?id=48134135) - [Research on mildew contamination affecting the sound quality of analog tapes](https://www.nature.com/articles/s40494-026-02592-7)
* [2026-05-14, 10:06:00](https://soylentnews.org/article.pl?sid=26/05/14/0248229&amp;from=rss) - [Google Says Hackers Used AI to Develop a Major Security Flaw](https://soylentnews.org/article.pl?sid=26/05/14/0248229&amp;from=rss)
* [2026-05-14, 07:17:16](https://news.ycombinator.com/item?id=48132106) - [The bird eye was pushed to an evolutionary extreme](https://www.quantamagazine.org/how-the-bird-eye-was-pushed-to-an-evolutionary-extreme-20260513/)
* [2026-05-14, 05:23:00](https://soylentnews.org/article.pl?sid=26/05/13/215223&amp;from=rss) - [“Cannot be Explained” – New Ultra Stainless Steel Stuns Researchers](https://soylentnews.org/article.pl?sid=26/05/13/215223&amp;from=rss)
* [2026-05-14, 02:37:22](https://news.ycombinator.com/item?id=48130468) - [Gaining control of every projector and camera on campus](https://www.edna.land/blogs/posts/scanning/)
* [2026-05-14, 00:35:00](https://soylentnews.org/article.pl?sid=26/05/13/2054254&amp;from=rss) - [What&apos;s Up With UPSs?](https://soylentnews.org/article.pl?sid=26/05/13/2054254&amp;from=rss)
* [2026-05-13, 19:51:00](https://soylentnews.org/article.pl?sid=26/05/13/191214&amp;from=rss) - [Workers Pay the Price of Burnout. Should Employers Cover the Cost?](https://soylentnews.org/article.pl?sid=26/05/13/191214&amp;from=rss)
* [2026-05-13, 17:07:00](https://soylentnews.org/article.pl?sid=26/05/11/148254&amp;from=rss) - [Louis Rossmann Tells 3D Printer Maker Bambu Lab To ‘Go (Bleep) Yourself’ Over Its Threatened Lawsuit](https://soylentnews.org/article.pl?sid=26/05/11/148254&amp;from=rss)
* [2026-05-13, 14:47:13](https://news.ycombinator.com/item?id=48122657) - [EMiX: Emulating Beyond Single-FPGA Limits](https://arxiv.org/abs/2604.27012)
* [2026-05-13, 13:00:09](https://news.ycombinator.com/item?id=48121333) - [ESP-EEG is an affordable 8-channel biosensing board](https://www.autodidacts.io/cerelog-esp-eeg-affordable-openbci-like-board/)
* [2026-05-13, 12:21:00](https://soylentnews.org/article.pl?sid=26/05/11/146201&amp;from=rss) - [LLMs Are Different and LLMs Are the Same](https://soylentnews.org/article.pl?sid=26/05/11/146201&amp;from=rss)
* [2026-05-13, 07:35:00](https://soylentnews.org/article.pl?sid=26/05/11/1331243&amp;from=rss) - [A Simple Way of Making Hydrogen From Alcohol by Using Iron and UV Light](https://soylentnews.org/article.pl?sid=26/05/11/1331243&amp;from=rss)
* [2026-05-13, 06:25:01](https://news.ycombinator.com/item?id=48118478) - [England Runestones](https://en.wikipedia.org/wiki/England_runestones)
* [2026-05-13, 02:49:00](https://soylentnews.org/article.pl?sid=26/05/11/1329241&amp;from=rss) - [MIT Researchers Revive 40-Year-Old Triangular Zipper Concept Now Made Possible by 3D Printing](https://soylentnews.org/article.pl?sid=26/05/11/1329241&amp;from=rss)
* [2026-05-12, 22:26:51](https://news.ycombinator.com/item?id=48115425) - [I Bought a “Junk” PSP From Japan](https://gardinerbryant.com/i-bought-a-junk-psp-from-japan-heres-how-it-went/)
* [2026-05-12, 22:06:00](https://soylentnews.org/article.pl?sid=26/05/11/1323253&amp;from=rss) - [Scientists Identify a Hidden Blood Particle Linked to Higher Risk of Stroke and Death](https://soylentnews.org/article.pl?sid=26/05/11/1323253&amp;from=rss)
* [2026-05-12, 20:39:04](https://news.ycombinator.com/item?id=48114208) - [Ploopy Bean: a trackpoint for every computer](https://ploopy.co/shop/bean-pointing-stick/)
* [2026-05-12, 18:17:37](https://news.ycombinator.com/item?id=48112129) - [Charity – Categorical programming language (1998)](https://github.com/mietek/charity-lang/blob/master/doc/README.md)
* [2026-05-12, 17:24:00](https://soylentnews.org/article.pl?sid=26/05/11/1325244&amp;from=rss) - [Kdenlive 26.04.1 Video Editor Fixes Serious Project File Security Flaw](https://soylentnews.org/article.pl?sid=26/05/11/1325244&amp;from=rss)
* [2026-05-12, 12:41:00](https://soylentnews.org/article.pl?sid=26/05/11/1328203&amp;from=rss) - [Everyone&apos;s a Loser in Strait of Hormuz Game That Simulates Global Crisis](https://soylentnews.org/article.pl?sid=26/05/11/1328203&amp;from=rss)
* [2026-05-12, 07:54:00](https://soylentnews.org/article.pl?sid=26/05/11/1321256&amp;from=rss) - [Link Between Pollinators and Diverse Landscapes is a Two-Way Street](https://soylentnews.org/article.pl?sid=26/05/11/1321256&amp;from=rss)
* [2026-05-12, 03:09:00](https://soylentnews.org/article.pl?sid=26/05/11/041243&amp;from=rss) - [Could the Universe&apos;s Hidden Shape Solve One of Physics’ Biggest Mysteries?](https://soylentnews.org/article.pl?sid=26/05/11/041243&amp;from=rss)
