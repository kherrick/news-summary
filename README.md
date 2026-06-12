# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Why I Wrote a Game Boy Advance Game in Zig (2024)](https://jonot.me/posts/zig-gba/) - The author explains their fascinating journey of creating a Game Boy Advance game using the Zig programming language, detailing technical insights and personal motivations. [Comments](https://lobste.rs/s/9a3nvt/why_i_wrote_game_boy_advance_game_zig_2024)

* [A PDF that changes based on how its read](https://sgaud.com/texts/pdf) - This unique PDF dynamically alters its content depending on how it is read by various software or devices. [Comments](https://news.ycombinator.com/item?id=48506209)

* [A columnar database for analytics in pure Clojure](https://github.com/yogthos/flatiron) - A highly technical dive into building a powerful columnar database from the ground up using pure Clojure. [Comments](https://lobste.rs/s/8mcck8/columnar_database_for_analytics_pure)

* [yserver: A modern X11 server written from scratch in Rust](https://github.com/joske/yserver) - A reimagined X11 server built in Rust, highlighting the intersection of modern languages with traditional systems. [Comments](https://lobste.rs/s/yy8je0/yserver_modern_x11_server_written_from)

## Cybersecurity and Privacy

* [ShinyHunters Hacked 100+ Organizations By Exploiting an Oracle PeopleSoft 0-Day](https://developers.slashdot.org/story/26/06/12/2117221/shinyhunters-hacked-100-organizations-by-exploiting-an-oracle-peoplesoft-0-day?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Detailed report on how hackers exploited an Oracle PeopleSoft vulnerability to breach over 100 organizations. [Comments](https://developers.slashdot.org/story/26/06/12/2117221/shinyhunters-hacked-100-organizations-by-exploiting-an-oracle-peoplesoft-0-day?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Google Sues Chinese Cybercrime Operation That Used Gemini AI To Send Scam Texts](https://yro.slashdot.org/story/26/06/12/186250/google-sues-chinese-cybercrime-operation-that-used-gemini-ai-to-send-scam-texts?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Google takes legal action against a Chinese cybercrime group that deployed AI to send scam messages. [Comments](https://yro.slashdot.org/story/26/06/12/186250/google-sues-chinese-cybercrime-operation-that-used-gemini-ai-to-send-scam-texts?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Hundreds of AUR packages attacked by infostealer](https://lists.archlinux.org/archives/list/aur-general@lists.archlinux.org/thread/FGXPCB3ZVCJIV7FX323SBAX2JHYB7ZS4/) - A major security breach targeting user-contributing packages in the Arch User Repository (AUR). [Comments](https://lobste.rs/s/ta0sem/hundreds_aur_packages_attacked_by)

## Artificial Intelligence and Machine Learning

* [CRISPR tech selectively shreds cancer cells, including "undruggable" cancers](https://innovativegenomics.org/news/crispr-technique-selectively-shreds-cancer-cells/) - New advancements in CRISPR technology show promise in targeting previously untreatable cancers. [Comments](https://news.ycombinator.com/item?id=48505231)

* [AI Agent Bankrupted Their Operator While Trying to Scan DN42](https://lantian.pub/en/article/fun/ai-agent-bankrupted-their-operator-scan-dn42lantian.lantian/) - An unconventional and cautionary AI story where an autonomous agent incurred significant financial loss due to software behavior. [Comments](https://lobste.rs/s/ishgbs/ai_agent_bankrupted_their_operator_while)

* [Maxproof](https://arxiv.org/abs/2606.13473) - Academic exploration into ‘Maxproof,’ an innovative AI approach optimized for efficiency and performance. [Comments](https://news.ycombinator.com/item?id=48503014)

## Explorations in Science and Culture

* [Where Did Earth Get Its Oceans? Maybe It Made Them Itself](https://www.quantamagazine.org/where-did-earth-get-its-oceans-maybe-it-made-them-itself-20260612/) - Provocative research suggests Earth's water could have originated internally rather than from comets. [Comments](https://news.ycombinator.com/item?id=48505452)

* [Most Beautiful Will Ever Made (1936)](https://paperspast.natlib.govt.nz/newspapers/DOM19360307.2.43) - A delightful look into a unique and beautifully written last will and testament drafted in 1936. [Comments](https://news.ycombinator.com/item?id=48507499)

## Special Features and Miscellaneous

* [62 Year Old Dutch Man Marries The Chatbot Of His Dreams](https://soylentnews.org/article.pl?sid=26/06/11/020204&from=rss) - A fascinating blend of love and technology as a man forms a unique bond with an AI chatbot. [Comments](https://soylentnews.org/article.pl?sid=26/06/11/020204&from=rss)

* [How I made a 60fps Eink monitor, the Modos Flow](https://youtu.be/nHbA2-_qzH4) - A captivating DIY guide to constructing a fast-refresh e-ink monitor for your digital workspace. [Comments](https://lobste.rs/s/wnn1ul/how_i_made_60fps_eink_monitor_modos_flow)

* [Touchscreen Macbook '100% Confirmed,' Says Reputable Leaker](https://hardware.slashdot.org/story/26/06/12/180236/touchscreen-macbook-100-confirmed-says-reputable-leaker?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Rumors of a touchscreen-enabled Macbook have gained traction, according to a well-regarded source. [Comments](https://hardware.slashdot.org/story/26/06/12/180236/touchscreen-macbook-100-confirmed-says-reputable-leaker?utm_source=rss1.0mainlinkanon&utm_medium=feed)

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

* [2026-06-12, 21:39:49](https://lobste.rs/s/9a3nvt/why_i_wrote_game_boy_advance_game_zig_2024) - [Why I Wrote a Game Boy Advance Game in Zig (2024)](https://jonot.me/posts/zig-gba/)
* [2026-06-12, 21:24:17](https://lobste.rs/s/o8i26c/swift_at_apple_migrating_truetype) - [Swift at Apple: Migrating the TrueType Hinting Interpreter](https://swift.org/blog/migrating-truetype-hinting-to-swift/)
* [2026-06-12, 21:20:00](https://developers.slashdot.org/story/26/06/12/2117221/shinyhunters-hacked-100-organizations-by-exploiting-an-oracle-peoplesoft-0-day?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ShinyHunters Hacked 100+ Organizations By Exploiting an Oracle PeopleSoft 0-Day](https://developers.slashdot.org/story/26/06/12/2117221/shinyhunters-hacked-100-organizations-by-exploiting-an-oracle-peoplesoft-0-day?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-12, 20:57:33](https://lobste.rs/s/2yakby/catjam_2026) - [Catjam 2026](https://itch.io/jam/catjam-2026)
* [2026-06-12, 20:39:36](https://news.ycombinator.com/item?id=48509182) - [Palantir loses legal challenge against Swiss investigative magazine](https://www.ft.com/content/7ffcace7-9dc0-4e7e-9912-895ac073f979)
* [2026-06-12, 20:34:42](https://news.ycombinator.com/item?id=48509143) - [Mmorpg World of ClaudeCraft, vibe coded with Fable 5](https://worldofclaudecraft.com/)
* [2026-06-12, 20:14:27](https://news.ycombinator.com/item?id=48508949) - [Can I Buy Your KV Cache?](https://arxiv.org/abs/2606.13361)
* [2026-06-12, 20:12:00](https://soylentnews.org/article.pl?sid=26/06/12/1133204&amp;from=rss) - [Finland Deploys New System to Detect Threats to Undersea Cables](https://soylentnews.org/article.pl?sid=26/06/12/1133204&amp;from=rss)
* [2026-06-12, 20:08:44](https://lobste.rs/s/1yjftk/if_you_are_asking_for_human_attention) - [If you are asking for human attention, demonstrate human effort](https://tombedor.dev/human-attention-and-human-effort/)
* [2026-06-12, 20:00:00](https://yro.slashdot.org/story/26/06/12/186250/google-sues-chinese-cybercrime-operation-that-used-gemini-ai-to-send-scam-texts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Sues Chinese Cybercrime Operation That Used Gemini AI To Send Scam Texts](https://yro.slashdot.org/story/26/06/12/186250/google-sues-chinese-cybercrime-operation-that-used-gemini-ai-to-send-scam-texts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-12, 19:54:27](https://news.ycombinator.com/item?id=48508726) - [Swift at Apple: Migrating the TrueType hinting interpreter](https://www.swift.org/blog/migrating-truetype-hinting-to-swift/)
* [2026-06-12, 19:00:00](https://hardware.slashdot.org/story/26/06/12/180236/touchscreen-macbook-100-confirmed-says-reputable-leaker?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Touchscreen Macbook &apos;100% Confirmed,&apos; Says Reputable Leaker](https://hardware.slashdot.org/story/26/06/12/180236/touchscreen-macbook-100-confirmed-says-reputable-leaker?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-12, 18:50:18](https://news.ycombinator.com/item?id=48507986) - [EV demand up 50% in France and Germany since Iran war](https://www.reuters.com/business/renault-electric-vehicle-orders-have-surged-since-start-iran-war-says-ceo-2026-06-10/)
* [2026-06-12, 18:20:17](https://news.ycombinator.com/item?id=48507571) - [Cosmodial Sky Atlas](https://killedbyapixel.github.io/Cosmodial/)
* [2026-06-12, 18:15:19](https://news.ycombinator.com/item?id=48507499) - [Most Beautiful Will Ever Made (1936)](https://paperspast.natlib.govt.nz/newspapers/DOM19360307.2.43)
* [2026-06-12, 18:00:00](https://it.slashdot.org/story/26/06/12/1755225/microsoft-surface-flaw-allowed-unprotected-devices-to-be-bricked-by-a-single-packet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Surface Flaw Allowed Unprotected Devices To Be Bricked By a Single Packet](https://it.slashdot.org/story/26/06/12/1755225/microsoft-surface-flaw-allowed-unprotected-devices-to-be-bricked-by-a-single-packet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-12, 17:53:20](https://news.ycombinator.com/item?id=48507282) - [I Am Not a Reverse Centaur](https://blog.miguelgrinberg.com/post/i-am-not-a-reverse-centaur)
* [2026-06-12, 17:52:46](https://news.ycombinator.com/item?id=48507278) - [\&quot;Don&apos;t You Just Upload It to ChatGPT?\&quot;](https://correresmidestino.com/dont-you-just-upload-it-to-chatgpt/)
* [2026-06-12, 17:43:25](https://lobste.rs/s/kosw9h/wasi_0_3_launched) - [WASI 0.3 Launched](https://bytecodealliance.org/articles/WASI-0.3)
* [2026-06-12, 17:34:55](https://news.ycombinator.com/item?id=48507020) - [How to setup a local coding agent on macOS](https://ikyle.me/blog/2026/how-to-setup-a-local-coding-agent-on-macos)
* [2026-06-12, 17:23:35](https://lobste.rs/s/n5gyfj/erm_local_cli_strips_ums_uhs_erms_from) - [erm: A Local CLI That Strips Ums, Uhs, and Erms From Speech](https://doug.sh/posts/erm-a-local-cli-that-strips-ums-uhs-and-erms-from-speech/)
* [2026-06-12, 17:07:46](https://news.ycombinator.com/item?id=48506659) - [Pirates, a naval warfare game inspired by Sid Meier&apos;s Pirates](https://piwodlaiwo.github.io/pirates/)
* [2026-06-12, 17:06:44](https://lobste.rs/s/8mcck8/columnar_database_for_analytics_pure) - [A columnar database for analytics in pure Clojure](https://github.com/yogthos/flatiron)
* [2026-06-12, 17:04:19](https://lobste.rs/s/bsavh7/turn_your_site_into_place_people_can_bump) - [Turn your site into a place people can bump into each other](https://cauenapier.com/blog/townsquare_release/)
* [2026-06-12, 17:00:00](https://yro.slashdot.org/story/26/06/12/1741212/sam-bankman-fried-loses-bid-to-overturn-crypto-fraud-conviction?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sam Bankman-Fried Loses Bid To Overturn Crypto Fraud Conviction](https://yro.slashdot.org/story/26/06/12/1741212/sam-bankman-fried-loses-bid-to-overturn-crypto-fraud-conviction?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-12, 16:58:03](https://news.ycombinator.com/item?id=48506545) - [Launch HN: BitBoard (YC P25) – Analytics Workspace for Agents](https://bitboard.work/)
* [2026-06-12, 16:44:47](https://news.ycombinator.com/item?id=48506372) - [Looking Forward to Postgres 19: It&apos;s About Time](https://www.pgedge.com/blog/looking-forward-to-postgres-19-its-about-time)
* [2026-06-12, 16:32:50](https://news.ycombinator.com/item?id=48506209) - [A PDF that changes based on how its read](https://sgaud.com/texts/pdf)
* [2026-06-12, 16:00:00](https://slashdot.org/story/26/06/12/0627201/infineon-to-open-german-chip-fab-as-part-of-eu-sovereignty-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Infineon to Open German Chip Fab as Part of EU Sovereignty Push](https://slashdot.org/story/26/06/12/0627201/infineon-to-open-german-chip-fab-as-part-of-eu-sovereignty-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-12, 15:32:56](https://news.ycombinator.com/item?id=48505452) - [Where Did Earth Get Its Oceans? Maybe It Made Them Itself](https://www.quantamagazine.org/where-did-earth-get-its-oceans-maybe-it-made-them-itself-20260612/)
* [2026-06-12, 15:29:00](https://soylentnews.org/article.pl?sid=26/06/11/0213228&amp;from=rss) - [Google Liable for AI Overview Falsehoods](https://soylentnews.org/article.pl?sid=26/06/11/0213228&amp;from=rss)
* [2026-06-12, 15:26:12](https://news.ycombinator.com/item?id=48505364) - [Show HN: StackScope – I crawled over 40k indie launches to see what they ship](https://stackscope.dev/)
* [2026-06-12, 15:15:24](https://news.ycombinator.com/item?id=48505231) - [CRISPR tech selectively shreds cancer cells, including \&quot;undruggable\&quot; cancers](https://innovativegenomics.org/news/crispr-technique-selectively-shreds-cancer-cells/)
* [2026-06-12, 15:13:27](https://lobste.rs/s/5rxbmo/meet_new_sovereign_tech_fellows) - [Meet the new Sovereign Tech Fellows](https://www.sovereign.tech/news/meet-the-2026-sovereign-tech-fellows)
* [2026-06-12, 15:00:00](https://news.slashdot.org/story/26/06/12/0612250/spacex-ipo-makes-elon-musk-worlds-first-trillionaire?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SpaceX IPO Makes Elon Musk World&apos;s First Trillionaire](https://news.slashdot.org/story/26/06/12/0612250/spacex-ipo-makes-elon-musk-worlds-first-trillionaire?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-12, 14:50:06](https://news.ycombinator.com/item?id=48504929) - [Introduction to UEFI HTTP(s) Boot with QEMU/OVMF](https://blog.yadutaf.fr/2026/06/12/introduction-to-uefi-https-boot-qemu-ovmf/)
* [2026-06-12, 14:48:38](https://news.ycombinator.com/item?id=48504912) - [Slightly reducing the sloppiness of AI generated front end](https://envs.net/~volpe/blog/posts/reduce-slop.html)
* [2026-06-12, 14:33:29](https://news.ycombinator.com/item?id=48504697) - [A Call to Action: Stop the FCC&apos;s KYC Regime](https://blog.lopp.net/call-to-action-stop-the-fcc-kyc-regime/)
* [2026-06-12, 14:21:22](https://news.ycombinator.com/item?id=48504543) - [A dumpster arrived behind my university&apos;s library](https://yalereview.org/article/sheila-liming-the-end-of-books)
* [2026-06-12, 14:20:34](https://lobste.rs/s/fybei2/nix_flakes_their_guix_equivalents) - [Nix Flakes and their Guix Equivalents](https://coopi.neocities.org/posts/nix-flakes-vs-guix#guix-purity-by-design_6eece251b1ca)
* [2026-06-12, 14:01:51](https://lobste.rs/s/ivzqxi/looking_forward_postgres_19_it_s_about) - [Looking Forward to Postgres 19: It&apos;s About Time](https://www.pgedge.com/blog/looking-forward-to-postgres-19-its-about-time)
* [2026-06-12, 13:51:15](https://news.ycombinator.com/item?id=48504063) - [WASI 0.3](https://bytecodealliance.org/articles/WASI-0.3)
* [2026-06-12, 13:43:51](https://lobste.rs/s/vg5hdf/designing_lispy_dsls_part_1_scss_2012) - [Designing Lispy DSLs, part 1: SCSS (2012)](https://www.more-magic.net/posts/lispy-dsl-scss.html)
* [2026-06-12, 13:14:18](https://news.ycombinator.com/item?id=48503717) - [Hazel (YC W24) Is Hiring a Full Stack Engineer](https://www.ycombinator.com/companies/hazel-2/jobs/3epPWgu-full-stack-engineer-ts-sci)
* [2026-06-12, 13:09:04](https://lobste.rs/s/g3jf3e/unicode_composition_for_filenames_2008) - [Unicode composition for filenames (2008)](https://svn.apache.org/repos/asf/subversion/trunk/notes/unicode-composition-for-filenames)
* [2026-06-12, 13:04:47](https://lobste.rs/s/qnv1dy/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/qnv1dy/what_are_you_doing_this_weekend)
* [2026-06-12, 12:22:07](https://news.ycombinator.com/item?id=48503219) - [Encrypted Spaces An architecture for collaborative applications](https://encryptedspaces.org/)
* [2026-06-12, 12:00:02](https://news.ycombinator.com/item?id=48503014) - [Maxproof](https://arxiv.org/abs/2606.13473)
* [2026-06-12, 11:56:25](https://lobste.rs/s/fiiamm/orthodox_c_2016) - [Orthodox C++ (2016)](https://bkaradzic.github.io/posts/orthodoxc++/)
* [2026-06-12, 11:00:00](https://tech.slashdot.org/story/26/06/12/0558244/pokemon-go-data-was-used-to-help-train-ai-systems-being-developed-for-military-drones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pokemon Go Data Was Used To Help Train AI Systems Being Developed For Military Drones](https://tech.slashdot.org/story/26/06/12/0558244/pokemon-go-data-was-used-to-help-train-ai-systems-being-developed-for-military-drones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-12, 10:43:00](https://soylentnews.org/article.pl?sid=26/06/11/022206&amp;from=rss) - [You Can Now Get a Religious Exemption From Using AI at Work](https://soylentnews.org/article.pl?sid=26/06/11/022206&amp;from=rss)
* [2026-06-12, 10:42:50](https://news.ycombinator.com/item?id=48502347) - [Kimi K2.7-Code: open-source coding model with better token efficiency](https://huggingface.co/moonshotai/Kimi-K2.7-Code)
* [2026-06-12, 07:00:00](https://tech.slashdot.org/story/26/06/11/2210215/an-algorithm-determines-how-fast-you-should-drive-on-californias-i-15-freeway?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [An Algorithm Determines How Fast You Should Drive On California&apos;s I-15 Freeway](https://tech.slashdot.org/story/26/06/11/2210215/an-algorithm-determines-how-fast-you-should-drive-on-californias-i-15-freeway?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-12, 05:59:29](https://lobste.rs/s/ishgbs/ai_agent_bankrupted_their_operator_while) - [AI Agent Bankrupted Their Operator While Trying to Scan DN42](https://lantian.pub/en/article/fun/ai-agent-bankrupted-their-operator-scan-dn42lantian.lantian/)
* [2026-06-12, 05:51:00](https://soylentnews.org/article.pl?sid=26/06/11/027248&amp;from=rss) - [Lexar Regional Manager Says That RAM Prices Are Expected To Double By The End Of The Year ](https://soylentnews.org/article.pl?sid=26/06/11/027248&amp;from=rss)
* [2026-06-12, 05:39:08](https://lobste.rs/s/wnn1ul/how_i_made_60fps_eink_monitor_modos_flow) - [How I made a 60fps Eink monitor, the Modos Flow](https://youtu.be/nHbA2-_qzH4)
* [2026-06-12, 04:23:10](https://lobste.rs/s/yy8je0/yserver_modern_x11_server_written_from) - [yserver: A modern X11 server written from scratch in Rust](https://github.com/joske/yserver)
* [2026-06-12, 03:30:00](https://science.slashdot.org/story/26/06/11/225207/china-lures-foreign-patients-with-cutting-edge-cheap-medical-care?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Lures Foreign Patients With Cutting-Edge, Cheap Medical Care](https://science.slashdot.org/story/26/06/11/225207/china-lures-foreign-patients-with-cutting-edge-cheap-medical-care?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-12, 01:18:00](https://soylentnews.org/article.pl?sid=26/06/11/020204&amp;from=rss) - [62 Year Old Dutch Man Marries The Chatbot Of His Dreams](https://soylentnews.org/article.pl?sid=26/06/11/020204&amp;from=rss)
* [2026-06-12, 00:38:11](https://news.ycombinator.com/item?id=48498385) - [Nobody ever gets credit for fixing problems that never happened (2001) [pdf]](https://web.mit.edu/nelsonr/www/Repenning=Sterman_CMR_su01_.pdf)
* [2026-06-11, 23:01:55](https://news.ycombinator.com/item?id=48497609) - [If you are asking for human attention, demonstrate human effort](https://tombedor.dev/human-attention-and-human-effort/)
* [2026-06-11, 23:00:00](https://apple.slashdot.org/story/26/06/11/2044208/study-links-smartphones-with-declining-fertility-rates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Study Links Smartphones With Declining Fertility Rates](https://apple.slashdot.org/story/26/06/11/2044208/study-links-smartphones-with-declining-fertility-rates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-11, 22:00:00](https://yro.slashdot.org/story/26/06/11/2036240/poland-to-jail-online-streamers-of-violent-crime-for-up-to-5-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Poland To Jail Online Streamers of Violent Crime For Up To 5 Years](https://yro.slashdot.org/story/26/06/11/2036240/poland-to-jail-online-streamers-of-violent-crime-for-up-to-5-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-11, 21:00:00](https://slashdot.org/story/26/06/11/1849202/coinbase-launches-tool-to-let-ai-agents-manage-trading-and-payments?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Coinbase Launches Tool To Let AI Agents Manage Trading and Payments](https://slashdot.org/story/26/06/11/1849202/coinbase-launches-tool-to-let-ai-agents-manage-trading-and-payments?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-11, 20:53:25](https://lobste.rs/s/o1dzcn/local_first_software_is_easier_scale) - [Local-First Software Is Easier to Scale](https://elijahpotter.dev/articles/local-first_software_is_easier_to_scale)
* [2026-06-11, 20:28:00](https://soylentnews.org/article.pl?sid=26/06/10/186244&amp;from=rss) - [DUPE: World’s First Wind-powered Underwater Datacentre Starts Operating in China](https://soylentnews.org/article.pl?sid=26/06/10/186244&amp;from=rss)
* [2026-06-11, 20:24:18](https://news.ycombinator.com/item?id=48495928) - [Malware developers added nuclear and biological weapons text to to their spyware](https://twitter.com/jsrailton/status/2064661778978533571)
* [2026-06-11, 20:00:00](https://news.slashdot.org/story/26/06/11/1828227/euro-office-10-arrives-to-open-source-infighting-compatibility-is-not-sovereignty?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Euro-Office 1.0 Arrives To Open-Source Infighting: &apos;Compatibility Is Not Sovereignty&apos;](https://news.slashdot.org/story/26/06/11/1828227/euro-office-10-arrives-to-open-source-infighting-compatibility-is-not-sovereignty?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-11, 19:36:02](https://lobste.rs/s/ta0sem/hundreds_aur_packages_attacked_by) - [Hundreds of AUR packages attacked by infostealer](https://lists.archlinux.org/archives/list/aur-general@lists.archlinux.org/thread/FGXPCB3ZVCJIV7FX323SBAX2JHYB7ZS4/)
* [2026-06-11, 19:00:00](https://yro.slashdot.org/story/26/06/11/1736213/aclu-sues-after-facial-recognition-falsely-identifies-florida-man-as-a-child-abductor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ACLU Sues After Facial Recognition Falsely Identifies Florida Man As a Child Abductor](https://yro.slashdot.org/story/26/06/11/1736213/aclu-sues-after-facial-recognition-falsely-identifies-florida-man-as-a-child-abductor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-11, 17:32:42](https://lobste.rs/s/rs1t8s/there_is_life_before_main_rust) - [There Is Life Before Main in Rust](https://grack.com/blog/2026/06/11/life-before-main/)
* [2026-06-11, 17:32:35](https://news.ycombinator.com/item?id=48493512) - [There Is Life Before Main in Rust](https://grack.com/blog/2026/06/11/life-before-main/)
* [2026-06-11, 16:15:10](https://lobste.rs/s/3mg7xo/reuse_less_software) - [Reuse Less Software](https://wiki.alopex.li/ReuseLessSoftware)
* [2026-06-11, 15:43:00](https://soylentnews.org/article.pl?sid=26/06/10/183253&amp;from=rss) - [Donut Labs Much Reported &apos;Solid-State Sodium Ion Battery&apos; Appears to be Lithium Ion, After All](https://soylentnews.org/article.pl?sid=26/06/10/183253&amp;from=rss)
* [2026-06-11, 15:13:02](https://lobste.rs/s/lrjceq/our_workplace_llm_mass_delusion) - [our workplace LLM mass delusion](https://blog.avas.space/llm-circus/)
* [2026-06-11, 10:58:00](https://soylentnews.org/article.pl?sid=26/06/10/1134227&amp;from=rss) - [Google Signs $920M Monthly Compute Deal With SpaceX ](https://soylentnews.org/article.pl?sid=26/06/10/1134227&amp;from=rss)
* [2026-06-11, 06:47:18](https://lobste.rs/s/lxoosd/german_court_ruling_declares_google_s_ai) - [German court ruling declares Google&apos;s AI Overviews are Google&apos;s own words and makes it liable for false answers](https://the-decoder.com/landmark-german-ruling-declares-googles-ai-overviews-are-googles-own-words-and-makes-it-liable-for-false-answers/)
* [2026-06-11, 06:13:00](https://soylentnews.org/article.pl?sid=26/06/10/1126222&amp;from=rss) - [Canonical Sends Ubuntu Into the AI Agent Era](https://soylentnews.org/article.pl?sid=26/06/10/1126222&amp;from=rss)
* [2026-06-11, 01:30:00](https://soylentnews.org/article.pl?sid=26/06/10/1111258&amp;from=rss) - [S&amp;P 500 Rejects SpaceX, Also Blocking Entry for OpenAI and Anthropic](https://soylentnews.org/article.pl?sid=26/06/10/1111258&amp;from=rss)
* [2026-06-10, 23:19:43](https://lobste.rs/s/ptkd7x/interactive_introduction_terrific) - [An interactive introduction to the terrific experience of rendering Arabic typography and its technical debt](https://lr0.org/blog/p/arabic/)
* [2026-06-10, 20:44:00](https://soylentnews.org/article.pl?sid=26/06/10/116251&amp;from=rss) - [Cyberdecks Are Having a Moment, Rejecting Big Tech Surveillance With Style and Substance](https://soylentnews.org/article.pl?sid=26/06/10/116251&amp;from=rss)
* [2026-06-10, 16:01:00](https://soylentnews.org/article.pl?sid=26/06/10/0054230&amp;from=rss) - [UC Faculty Demand a Return to SAT Tests for STEM Applicants](https://soylentnews.org/article.pl?sid=26/06/10/0054230&amp;from=rss)
* [2026-06-10, 11:25:00](https://soylentnews.org/article.pl?sid=26/06/09/1118255&amp;from=rss) - [Russia&apos;s New ‘Starlink‑Style’ Rassvet Fleet Launches](https://soylentnews.org/article.pl?sid=26/06/09/1118255&amp;from=rss)
* [2026-06-10, 06:35:00](https://soylentnews.org/article.pl?sid=26/06/08/123201&amp;from=rss) - [&apos;Please Do Not Vibe F--- Up This Software&apos;: Broken Backups Spark AI Coding Row in Rsync Project](https://soylentnews.org/article.pl?sid=26/06/08/123201&amp;from=rss)
* [2026-06-10, 01:53:00](https://soylentnews.org/article.pl?sid=26/06/08/1134218&amp;from=rss) - [NASA&apos;s Nancy Grace Roman Space Telescope is Set to Launch on August 30](https://soylentnews.org/article.pl?sid=26/06/08/1134218&amp;from=rss)
* [2026-06-09, 21:07:00](https://soylentnews.org/article.pl?sid=26/06/08/1131238&amp;from=rss) - [Raspberry Pi&apos;s Profits Are Up. So is its DRAM Bill](https://soylentnews.org/article.pl?sid=26/06/08/1131238&amp;from=rss)
* [2026-06-09, 16:20:00](https://soylentnews.org/article.pl?sid=26/06/07/2331246&amp;from=rss) - [Canada&apos;s Next-Gen AWACS/Surveillance Planes Won&apos;t Be Coming From The USA](https://soylentnews.org/article.pl?sid=26/06/07/2331246&amp;from=rss)
* [2026-06-09, 11:32:00](https://soylentnews.org/article.pl?sid=26/06/07/2330212&amp;from=rss) - [Code Reveals Meta Smart Glasses Can Use &apos;Faceprint&apos; Tracking, Raising Privacy Alarms](https://soylentnews.org/article.pl?sid=26/06/07/2330212&amp;from=rss)
* [2026-06-09, 06:50:00](https://soylentnews.org/article.pl?sid=26/06/07/2321211&amp;from=rss) - [Datacenters May Face One-Year Ban In NY](https://soylentnews.org/article.pl?sid=26/06/07/2321211&amp;from=rss)
* [2026-06-09, 02:06:00](https://soylentnews.org/article.pl?sid=26/06/07/2319243&amp;from=rss) - [How A USB-Connected Speaker Can Infect A PC Without Ever Being Touched](https://soylentnews.org/article.pl?sid=26/06/07/2319243&amp;from=rss)
* [2026-06-08, 21:21:00](https://soylentnews.org/article.pl?sid=26/06/07/1853208&amp;from=rss) - [UK Exam Watchdog Frets Over Smart Specs Turning GCSEs Into Google Searches](https://soylentnews.org/article.pl?sid=26/06/07/1853208&amp;from=rss)
* [2026-06-08, 16:35:00](https://soylentnews.org/article.pl?sid=26/06/06/1857242&amp;from=rss) - [Giant Data Center Plan Cut 50% Amid Protests - \&quot;We Pissed Off A Lot Of People\&quot;](https://soylentnews.org/article.pl?sid=26/06/06/1857242&amp;from=rss)
* [2026-06-08, 11:51:00](https://soylentnews.org/article.pl?sid=26/06/06/1854248&amp;from=rss) - [Safety Officials Finally Have A Good Idea Of What A Big Rocket Explosion Can Do](https://soylentnews.org/article.pl?sid=26/06/06/1854248&amp;from=rss)
* [2026-06-08, 07:07:00](https://soylentnews.org/article.pl?sid=26/06/06/1851230&amp;from=rss) - [The Floppy Disk Patent Was Granted Today In 1972 — When 80KB Took Up 8 Inches And Were Really Floppy](https://soylentnews.org/article.pl?sid=26/06/06/1851230&amp;from=rss)
* [2026-06-08, 02:20:00](https://soylentnews.org/article.pl?sid=26/06/06/1850206&amp;from=rss) - [AI Data Centers&apos; Extreme Memory Consumption Threatens Other Industries](https://soylentnews.org/article.pl?sid=26/06/06/1850206&amp;from=rss)
