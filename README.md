# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and Technology Advancements

* [Will AI Mean Bring an End to Top Programming Language Rankings?](https://developers.slashdot.org/story/25/09/28/1823244/will-ai-mean-bring-an-end-to-top-programming-language-rankings?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Explore how AI might render traditional programming language rankings obsolete. [Comments](https://developers.slashdot.org/story/25/09/28/1823244/will-ai-mean-bring-an-end-to-top-programming-language-rankings?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Researchers (Including Google) are Betting on Virtual 'World Models' for Better AI](https://slashdot.org/story/25/09/27/0632215/researchers-including-google-are-betting-on-virtual-world-models-for-better-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Learn about virtual environments aiding the future of AI. [Comments](https://slashdot.org/story/25/09/27/0632215/researchers-including-google-are-betting-on-virtual-world-models-for-better-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Physics-Informed AI Learns Local Rules Behind Flocking and Collective Motion Behaviors](https://soylentnews.org/article.pl?sid=25/09/27/1348254&from=rss) - Discover AI breakthroughs in understanding natural group behaviors. [Comments](https://soylentnews.org/article.pl?sid=25/09/27/1348254&from=rss)

## Privacy, Policies, and Cybersecurity

* [UK Petition: Do not introduce Digital ID cards](https://petition.parliament.uk/petitions/730194) - Citizens campaign against the introduction of national digital IDs. [Comments](https://news.ycombinator.com/item?id=45406442)

* [Supermicro Server Motherboards Can Be Infected with Unremovable Malware](https://arstechnica.com/security/2025/09/supermicro-server-motherboards-can-be-infected-with-unremovable-malware/) - Security concerns over persistent malware on hardware. [Comments](https://news.ycombinator.com/item?id=45363465)

* [Consumer Reports Slams Microsoft for Windows 10 Mess, Urges Extension of Free Updates](https://soylentnews.org/article.pl?sid=25/09/27/1329235&from=rss) - Criticism of Microsoft’s update policies. [Comments](https://soylentnews.org/article.pl?sid=25/09/27/1329235&from=rss)

## Sustainability and Environment

* [California Now Has 68% More EV Chargers Than Gas Nozzles, Continues Green Energy Push](https://hardware.slashdot.org/story/25/09/28/0553221/california-now-has-68-more-ev-chargers-than-gas-nozzles-continues-green-energy-push?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Highlighting California's step towards greener transportation. [Comments](https://hardware.slashdot.org/story/25/09/28/0553221/california-now-has-68-more-ev-chargers-than-gas-nozzles-continues-green-energy-push?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [More Than Half of World's Coastal Settlements Retreating From Rising Seas, Study Shows](https://soylentnews.org/article.pl?sid=25/09/26/1416257&from=rss) - A worrying look at global coastal settlement changes. [Comments](https://soylentnews.org/article.pl?sid=25/09/26/1416257&from=rss)

## Scientific Discoveries and Innovations

* [Million-Year-Old Skull Rewrites Human Evolution, Scientists Claim](https://science.slashdot.org/story/25/09/27/2250232/million-year-old-skull-rewrites-human-evolution-scientists-claim?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A groundbreaking discovery about early human evolution. [Comments](https://science.slashdot.org/story/25/09/27/2250232/million-year-old-skull-rewrites-human-evolution-scientists-claim?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Scientists Develop 'Glue Gun' That 3D Prints Bone Grafts Directly Onto Fractures](https://science.slashdot.org/story/25/09/27/2157219/scientists-develop-glue-gun-that-3d-prints-bone-grafts-directly-onto-fractures?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Medical innovation meets 3D-printing. [Comments](https://science.slashdot.org/story/25/09/27/2157219/scientists-develop-glue-gun-that-3d-prints-bone-grafts-directly-onto-fractures?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Programming and Development

* [The AI Coding Trap](https://chrisloy.dev/post/2025/09/28/the-ai-coding-trap) - Exploring challenges and risks with AI-driven coding processes. [Comments](https://news.ycombinator.com/item?id=45405177)

* [scm2wasm: A Scheme to WASM compiler in 600 lines of C, making use of WASM GC](https://git.lain.faith/iitalics/scm2wasm) - A minimalist approach to Scheme-to-WebAssembly compilation. [Comments](https://news.ycombinator.com/item?id=45405175)

## Miscellaneous Highlights

* [Enthusiasts Bond Twelve 56K Modems Together to Set Dial-Up Broadband Records — A Dozen Screeching Boxes Achieve Record 668 kbps Download Speeds](https://www.tomshardware.com/networking/enthusiasts-bond-twelve-56k-dial-up-modems-together-to-set-dial-up-broadband-records-a-dozen-screeching-boxes-achieve-record-668-kbps-download-speeds) - Dial-up enthusiasts achieve a unique technological milestone. [Comments](https://lobste.rs/s/s262tb/enthusiasts_bond_twelve_56k_modems)

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

* [2025-09-28, 18:26:00](https://developers.slashdot.org/story/25/09/28/1823244/will-ai-mean-bring-an-end-to-top-programming-language-rankings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Will AI Mean Bring an End to Top Programming Language Rankings?](https://developers.slashdot.org/story/25/09/28/1823244/will-ai-mean-bring-an-end-to-top-programming-language-rankings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-28, 18:19:01](https://news.ycombinator.com/item?id=45406573) - [VMScape and why Xen dodged it](https://virtualize.sh/blog/vmscape-and-why-xen-dodged-it/)
* [2025-09-28, 18:01:39](https://news.ycombinator.com/item?id=45406442) - [UK Petition: Do not introduce Digital ID cards](https://petition.parliament.uk/petitions/730194)
* [2025-09-28, 17:40:05](https://news.ycombinator.com/item?id=45406256) - [Denmark bans civil drones after more sightings](https://www.dw.com/en/denmark-bans-civil-drones-after-more-sightings/a-74166973)
* [2025-09-28, 17:23:21](https://news.ycombinator.com/item?id=45406109) - [Bayesian Data Analysis, Third edition [pdf]](https://sites.stat.columbia.edu/gelman/book/BDA3.pdf)
* [2025-09-28, 16:47:39](https://news.ycombinator.com/item?id=45405815) - [Testing \&quot;Exotic\&quot; P2P VPN](https://blog.nommy.moe/blog/exotic-mesh-vpn/)
* [2025-09-28, 16:46:22](https://lobste.rs/s/nn17bl/testing_exotic_p2p_vpn) - [Testing \&quot;exotic\&quot; p2p VPN](https://blog.nommy.moe/blog/exotic-mesh-vpn/)
* [2025-09-28, 16:40:53](https://news.ycombinator.com/item?id=45405750) - [The Weird Concept of Branchless Programming](https://sanixdk.xyz/blogs/the-weird-concept-of-branchless-programming)
* [2025-09-28, 16:34:00](https://slashdot.org/story/25/09/27/0632215/researchers-including-google-are-betting-on-virtual-world-models-for-better-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Researchers (Including Google) are Betting on Virtual &apos;World Models&apos; for Better AI](https://slashdot.org/story/25/09/27/0632215/researchers-including-google-are-betting-on-virtual-world-models-for-better-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-28, 16:33:47](https://news.ycombinator.com/item?id=45405675) - [Swiss voters back e-ID and abolish rental tax](https://www.swissinfo.ch/eng/swiss-politics/swiss-voters-have-decided-on-electronic-id-and-abolishing-rental-tax/90057432)
* [2025-09-28, 16:23:51](https://news.ycombinator.com/item?id=45405584) - [Show HN: Built an MCP server using Cloudflare&apos;s Code Mode pattern](https://github.com/jx-codes/codemode-mcp)
* [2025-09-28, 16:13:36](https://lobste.rs/s/gchwhh/why_i_m_not_rushing_take_sides_rubygems) - [Why I&apos;m not rushing to take sides in the RubyGems fiasco](https://justin.searls.co/posts/why-im-not-rushing-to-take-sides-in-the-rubygems-fiasco/)
* [2025-09-28, 16:09:23](https://lobste.rs/s/jki8jl/what_is_good_taste_software_engineering) - [What is \&quot;good taste\&quot; in software engineering?](https://www.seangoedecke.com/taste/)
* [2025-09-28, 16:00:14](https://lobste.rs/s/boxrhr/failing_understand_exponential_again) - [Failing to Understand the Exponential, Again](https://www.julian.ac/blog/2025/09/27/failing-to-understand-the-exponential-again/)
* [2025-09-28, 15:48:10](https://news.ycombinator.com/item?id=45405221) - [Why I&apos;m not rushing to take sides in the RubyGems fiasco](https://justin.searls.co/posts/why-im-not-rushing-to-take-sides-in-the-rubygems-fiasco/)
* [2025-09-28, 15:43:33](https://news.ycombinator.com/item?id=45405177) - [The AI coding trap](https://chrisloy.dev/post/2025/09/28/the-ai-coding-trap)
* [2025-09-28, 15:43:25](https://news.ycombinator.com/item?id=45405175) - [Scm2wasm: A Scheme to WASM compiler in 600 lines of C, making use of WASM GC](https://git.lain.faith/iitalics/scm2wasm)
* [2025-09-28, 15:41:23](https://lobste.rs/s/apzcvg/scm2wasm_scheme_wasm_compiler_600_lines_c) - [scm2wasm: A Scheme to WASM compiler in 600 lines of C, making use of WASM GC](https://git.lain.faith/iitalics/scm2wasm)
* [2025-09-28, 15:34:00](https://science.slashdot.org/story/25/09/27/2250232/million-year-old-skull-rewrites-human-evolution-scientists-claim?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Million-Year-Old Skull Rewrites Human Evolution, Scientists Claim](https://science.slashdot.org/story/25/09/27/2250232/million-year-old-skull-rewrites-human-evolution-scientists-claim?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-28, 15:27:18](https://news.ycombinator.com/item?id=45405055) - [What&apos;s New in PostgreSQL 18 – A Devel](https://www.bytebase.com/blog/what-is-new-in-postgres-18-for-developer/)
* [2025-09-28, 15:22:55](https://lobste.rs/s/g9z6o4/death_utilitarian_programming) - [The death of utilitarian programming](https://lobste.rs/s/g9z6o4/death_utilitarian_programming)
* [2025-09-28, 15:15:00](https://soylentnews.org/article.pl?sid=25/09/27/1348254&amp;from=rss) - [Physics-Informed AI Learns Local Rules Behind Flocking and Collective Motion Behaviors](https://soylentnews.org/article.pl?sid=25/09/27/1348254&amp;from=rss)
* [2025-09-28, 14:58:23](https://lobste.rs/s/1e9wix/golden_ratio_as_number_base) - [The golden ratio as a number base](https://apieceofthepi.substack.com/p/the-golden-ratio-as-a-number-base)
* [2025-09-28, 14:40:46](https://news.ycombinator.com/item?id=45404667) - [Show HN: Toolbrew – Free little tools without signups or ads](https://toolbrew.co/)
* [2025-09-28, 14:34:00](https://hardware.slashdot.org/story/25/09/28/0553221/california-now-has-68-more-ev-chargers-than-gas-nozzles-continues-green-energy-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [California Now Has 68% More EV Chargers Than Gas Nozzles, Continues Green Energy Push](https://hardware.slashdot.org/story/25/09/28/0553221/california-now-has-68-more-ev-chargers-than-gas-nozzles-continues-green-energy-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-28, 14:27:44](https://news.ycombinator.com/item?id=45404573) - [Plan 9 from User Space](https://github.com/9fans/plan9port)
* [2025-09-28, 14:00:12](https://news.ycombinator.com/item?id=45404373) - [The Demon-Haunted World](https://en.wikipedia.org/wiki/The_Demon-Haunted_World)
* [2025-09-28, 13:27:10](https://lobste.rs/s/nqllvf/when_i_say_alphabetical_order_i_mean) - [When I say \&quot;alphabetical order\&quot;, I mean \&quot;alphabetical order\&quot;](https://sebastiano.tronto.net/blog/2025-09-28-alphabetic-order/)
* [2025-09-28, 13:00:16](https://news.ycombinator.com/item?id=45404022) - [When I say \&quot;alphabetical order\&quot;, I mean \&quot;alphabetical order\&quot;](https://sebastiano.tronto.net/blog/2025-09-28-alphabetic-order/)
* [2025-09-28, 12:59:54](https://news.ycombinator.com/item?id=45404021) - [Privacy Badger is a free browser extension made by EFF to stop spying](https://privacybadger.org/)
* [2025-09-28, 12:57:57](https://lobste.rs/s/9islkn/detaching_graalvm_from_java_ecosystem) - [Detaching GraalVM from the Java Ecosystem Train](https://blogs.oracle.com/java/post/detaching-graalvm-from-the-java-ecosystem-train)
* [2025-09-28, 12:49:21](https://lobste.rs/s/tm7eyr/is_ip_fragmentation_still_considered) - [Is IP fragmentation still considered vulnerable?](https://blog.apnic.net/2025/09/16/is-ip-fragmentation-still-considered-vulnerable/)
* [2025-09-28, 11:44:44](https://lobste.rs/s/wshruu/small_data) - [Small Data](https://topicpartition.io/definitions/small-data)
* [2025-09-28, 11:34:00](https://slashdot.org/story/25/09/27/1640203/mistrals-new-plan-for-improving-its-ai-models-training-data-from-enterprises?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mistral&apos;s New Plan for Improving Its AI Models: Training Data from Enterprises](https://slashdot.org/story/25/09/27/1640203/mistrals-new-plan-for-improving-its-ai-models-training-data-from-enterprises?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-28, 10:36:23](https://news.ycombinator.com/item?id=45403288) - [Show HN: Curated gamedev specific search engine](https://gamedevtorch.com/)
* [2025-09-28, 10:29:00](https://soylentnews.org/article.pl?sid=25/09/27/1340248&amp;from=rss) - [US Intel Officials “Concerned” China Will Soon Master Reusable Launch](https://soylentnews.org/article.pl?sid=25/09/27/1340248&amp;from=rss)
* [2025-09-28, 10:27:56](https://lobste.rs/s/s262tb/enthusiasts_bond_twelve_56k_modems) - [Enthusiasts bond twelve 56K modems together to set dial-up broadband records — a dozen screeching boxes achieve record 668 kbps download speeds](https://www.tomshardware.com/networking/enthusiasts-bond-twelve-56k-dial-up-modems-together-to-set-dial-up-broadband-records-a-dozen-screeching-boxes-achieve-record-668-kbps-download-speeds)
* [2025-09-28, 09:07:22](https://lobste.rs/s/m9rmop/offline_translator_for_android) - [Offline translator for Android](https://github.com/DavidVentura/firefox-translator)
* [2025-09-28, 08:53:36](https://news.ycombinator.com/item?id=45402820) - [Beyond OpenMP in C++ and Rust: Taskflow, Rayon, Fork Union](https://ashvardanian.com/posts/beyond-openmp-in-cpp-rust/)
* [2025-09-28, 08:28:11](https://lobste.rs/s/gz4zq0/urgency_vs_importance) - [Urgency vs importance](https://archaeologist.dev/artifacts/priorities)
* [2025-09-28, 08:14:02](https://lobste.rs/s/r3xvg7/visual_studio_2026_insiders_is_here) - [Visual Studio 2026 Insiders is here](https://devblogs.microsoft.com/visualstudio/visual-studio-2026-insiders-is-here/)
* [2025-09-28, 07:34:00](https://yro.slashdot.org/story/25/09/28/044220/should-salesforces-tableau-be-granted-a-patent-on-visualizing-hierarchical-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Should Salesforce&apos;s Tableau Be Granted a Patent On &apos;Visualizing Hierarchical Data&apos;?](https://yro.slashdot.org/story/25/09/28/044220/should-salesforces-tableau-be-granted-a-patent-on-visualizing-hierarchical-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-28, 06:08:56](https://lobste.rs/s/hkjviu/sel4_2025_playlist) - [seL4 2025 Playlist](https://youtube.com/playlist?list=PLtoQeavghzr3jKkKOQxDagndQboRfU_I4)
* [2025-09-28, 05:44:00](https://soylentnews.org/article.pl?sid=25/09/27/1329235&amp;from=rss) - [Consumer Reports Slams Microsoft for Windows 10 Mess, Urges Extension of Free Updates](https://soylentnews.org/article.pl?sid=25/09/27/1329235&amp;from=rss)
* [2025-09-28, 05:11:24](https://lobste.rs/s/0xkiib/linus_torvalds_supposedly_garbage_code) - [Linus Torvalds and the Supposedly “Garbage Code”](https://giodicanio.com/2025/08/27/linus-torvalds-and-the-supposedly-garbage-code/)
* [2025-09-28, 05:04:39](https://news.ycombinator.com/item?id=45401907) - [IBM Intellistation 185 AIX workstation (2016)](http://www.ibmfiles.com/pages/intellipower185.htm)
* [2025-09-28, 03:34:00](https://news.slashdot.org/story/25/09/28/0012206/firefox-will-offer-visual-searching-on-images-with-ai-powered-google-lens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Firefox Will Offer Visual Searching on Images With AI-Powered Google Lens](https://news.slashdot.org/story/25/09/28/0012206/firefox-will-offer-visual-searching-on-images-with-ai-powered-google-lens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-28, 01:34:00](https://tech.slashdot.org/story/25/09/27/2331230/when-this-ev-company-went-bankrupt-its-customers-launched-a-nonprofit-to-keep-their-cars-running?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [When This EV Company Went Bankrupt, Its Customers Launched a Nonprofit to Keep Their Cars Running](https://tech.slashdot.org/story/25/09/27/2331230/when-this-ev-company-went-bankrupt-its-customers-launched-a-nonprofit-to-keep-their-cars-running?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-28, 00:56:00](https://soylentnews.org/article.pl?sid=25/09/27/1318227&amp;from=rss) - [Airlines Seen as Vulnerable After Confirmed Ransomware Cyberattack, Suspect Arrested](https://soylentnews.org/article.pl?sid=25/09/27/1318227&amp;from=rss)
* [2025-09-28, 00:00:39](https://lobste.rs/s/e6jh5d/statement_from_members_nixos_moderation) - [A statement from members of the NixOS moderation team](https://discourse.nixos.org/t/a-statement-from-members-of-the-moderation-team/69828)
* [2025-09-27, 23:50:42](https://news.ycombinator.com/item?id=45400376) - [Learn to play Go](https://online-go.com/learn-to-play-go)
* [2025-09-27, 23:40:31](https://lobste.rs/s/vryavc/how_i_accidentally_created_fastest_csv) - [How I Accidentally Created the Fastest CSV Parser Ever Made](https://sanixdk.xyz/blogs/how-i-accidentally-created-the-fastest-csv-parser-ever-made)
* [2025-09-27, 22:58:00](https://it.slashdot.org/story/25/09/27/066218/walmart-ceo-issues-wake-up-call-ai-is-going-to-change-literally-every-job?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Walmart CEO Issues Wake-Up Call: &apos;AI Is Going to Change Literally Every Job&apos;](https://it.slashdot.org/story/25/09/27/066218/walmart-ceo-issues-wake-up-call-ai-is-going-to-change-literally-every-job?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-27, 22:45:00](https://science.slashdot.org/story/25/09/27/2157219/scientists-develop-glue-gun-that-3d-prints-bone-grafts-directly-onto-fractures?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Develop &apos;Glue Gun&apos; That 3D Prints Bone Grafts Directly Onto Fractures](https://science.slashdot.org/story/25/09/27/2157219/scientists-develop-glue-gun-that-3d-prints-bone-grafts-directly-onto-fractures?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-27, 20:58:00](https://it.slashdot.org/story/25/09/27/2055246/escalation-in-akira-campaign-targeting-sonicwall-vpns-deploying-ransomware-with-malicious-logins?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Escalation in Akira Campaign Targeting SonicWall VPNs, Deploying Ransomware, With Malicious Logins](https://it.slashdot.org/story/25/09/27/2055246/escalation-in-akira-campaign-targeting-sonicwall-vpns-deploying-ransomware-with-malicious-logins?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-27, 20:54:15](https://lobste.rs/s/shhayp/first_malicious_mcp_wild_postmark) - [First Malicious MCP in the Wild: The Postmark Backdoor That&apos;s Stealing Your Emails](https://www.koi.security/blog/postmark-mcp-npm-malicious-backdoor-email-theft)
* [2025-09-27, 20:13:00](https://soylentnews.org/article.pl?sid=25/09/27/1254248&amp;from=rss) - [How AI is Subsidized by Your Utility Bills and Drives Copper Prices](https://soylentnews.org/article.pl?sid=25/09/27/1254248&amp;from=rss)
* [2025-09-27, 19:34:00](https://developers.slashdot.org/story/25/09/27/1910211/bundlers-lead-maintainer-asserts-trademark-in-ongoing-struggle-with-ruby-central?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bundler&apos;s Lead Maintainer Asserts Trademark in Ongoing Struggle with Ruby Central](https://developers.slashdot.org/story/25/09/27/1910211/bundlers-lead-maintainer-asserts-trademark-in-ongoing-struggle-with-ruby-central?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-27, 18:53:17](https://lobste.rs/s/fml20b/docker_was_too_slow_so_we_replaced_it_nix) - [Docker Was Too Slow, So We Replaced It: Nix in Production](https://www.youtube.com/watch?v=iPoL03tFBtU)
* [2025-09-27, 18:39:47](https://lobste.rs/s/hdupb2/why_today_s_humanoids_won_t_learn) - [Why Today’s Humanoids Won’t Learn Dexterity](https://rodneybrooks.com/why-todays-humanoids-wont-learn-dexterity/)
* [2025-09-27, 18:34:00](https://news.slashdot.org/story/25/09/27/1819239/did-microsoft-hide-key-data-flow-information-in-plain-sight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Did Microsoft Hide Key Data Flow Information In Plain Sight?](https://news.slashdot.org/story/25/09/27/1819239/did-microsoft-hide-key-data-flow-information-in-plain-sight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-27, 17:34:00](https://hardware.slashdot.org/story/25/09/27/0249201/hugging-face-researchers-warn-ai-generated-video-consumes-much-more-power-than-expected?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hugging Face Researchers Warn AI-Generated Video Consumes Much More Power Than Expected](https://hardware.slashdot.org/story/25/09/27/0249201/hugging-face-researchers-warn-ai-generated-video-consumes-much-more-power-than-expected?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-27, 16:34:00](https://hardware.slashdot.org/story/25/09/27/0441242/byds-all-electric-hypercar-hits-308-mph-becomes-fastest-car-in-production?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [BYD&apos;s All-Electric Hypercar Hits 308 MPH, Becomes Fastest Car in Production](https://hardware.slashdot.org/story/25/09/27/0441242/byds-all-electric-hypercar-hits-308-mph-becomes-fastest-car-in-production?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-27, 16:11:34](https://lobste.rs/s/aly0ym/checkboxes_kill_your_product_2013) - [Checkboxes that kill your product (2013)](https://limi.net/checkboxes)
* [2025-09-27, 15:27:00](https://soylentnews.org/article.pl?sid=25/09/26/2326219&amp;from=rss) - [Cloudflare DDoSed Itself With React UseEffect Hook Blunder](https://soylentnews.org/article.pl?sid=25/09/26/2326219&amp;from=rss)
* [2025-09-27, 15:17:30](https://news.ycombinator.com/item?id=45396441) - [A WebGL game where you deliver messages on a tiny planet](https://messenger.abeto.co/)
* [2025-09-27, 11:04:56](https://lobste.rs/s/wnvj5y/typst_possible_latex_replacement) - [Typst: a possible LaTeX replacement](https://lwn.net/Articles/1037577/)
* [2025-09-27, 10:41:00](https://soylentnews.org/article.pl?sid=25/09/26/2314203&amp;from=rss) - [Magma Displacement Triggered Tens of Thousands of Earthquakes, Santorini Swarm Study Finds](https://soylentnews.org/article.pl?sid=25/09/26/2314203&amp;from=rss)
* [2025-09-27, 07:31:58](https://lobste.rs/s/cgx2bu/go_s_builtin_new_function_will_take) - [Go&apos;s builtin &apos;new()&apos; function will take an expression in Go 1.26](https://utcc.utoronto.ca/~cks/space/blog/programming/GoNewWithExpression)
* [2025-09-27, 05:56:00](https://soylentnews.org/article.pl?sid=25/09/26/239227&amp;from=rss) - [China&apos;s Latest GPU Arrives With Claims of CUDA Compatibility and RT Support](https://soylentnews.org/article.pl?sid=25/09/26/239227&amp;from=rss)
* [2025-09-27, 01:06:00](https://soylentnews.org/article.pl?sid=25/09/26/1437222&amp;from=rss) - [How India&apos;s Unplanned Hydropower Dams and Tunnels Are Disrupting Himalayan Landscapes](https://soylentnews.org/article.pl?sid=25/09/26/1437222&amp;from=rss)
* [2025-09-26, 20:20:00](https://soylentnews.org/article.pl?sid=25/09/26/1433207&amp;from=rss) - [American Kids Can’t Read or Do Math Anymore](https://soylentnews.org/article.pl?sid=25/09/26/1433207&amp;from=rss)
* [2025-09-26, 15:35:00](https://soylentnews.org/article.pl?sid=25/09/26/1416257&amp;from=rss) - [More Than Half of World&apos;s Coastal Settlements Retreating From Rising Seas, Study Shows](https://soylentnews.org/article.pl?sid=25/09/26/1416257&amp;from=rss)
* [2025-09-26, 10:53:00](https://soylentnews.org/article.pl?sid=25/09/26/1047223&amp;from=rss) - [Huntington&apos;s Disease Successfully Treated for First Time](https://soylentnews.org/article.pl?sid=25/09/26/1047223&amp;from=rss)
* [2025-09-26, 06:11:00](https://soylentnews.org/article.pl?sid=25/09/26/0453242&amp;from=rss) - [Facebook Data Reveal the Devastating Real-World Harms Caused by the Spread of Misinformation](https://soylentnews.org/article.pl?sid=25/09/26/0453242&amp;from=rss)
* [2025-09-26, 01:27:00](https://soylentnews.org/article.pl?sid=25/09/25/1231232&amp;from=rss) - [China Starts Producing World-First Non-Binary AI Chips for Aviation, Manufacturing](https://soylentnews.org/article.pl?sid=25/09/25/1231232&amp;from=rss)
* [2025-09-25, 20:42:00](https://soylentnews.org/article.pl?sid=25/09/25/1225209&amp;from=rss) - [The Future of Nuclear Reactors is Making its Way to the US](https://soylentnews.org/article.pl?sid=25/09/25/1225209&amp;from=rss)
* [2025-09-25, 17:28:11](https://news.ycombinator.com/item?id=45375977) - [A safe, non-owning C++ pointer class](https://techblog.rosemanlabs.com/c++/safety/object-lifetime/2025/08/28/a-safe-pointer-that-protects-against-use-after-free-and-updates-when-the-pointee-is-moved.html)
* [2025-09-25, 16:59:22](https://news.ycombinator.com/item?id=45375462) - [Time travel? Or, just clever technology](https://www.syncdna.com/blog/time-travel-or-just-clever-tech)
* [2025-09-25, 15:54:00](https://soylentnews.org/article.pl?sid=25/09/25/1221237&amp;from=rss) - [Different Types of Magic Mushrooms Use Unique Biochemical Paths to Produce the Same Active Compound](https://soylentnews.org/article.pl?sid=25/09/25/1221237&amp;from=rss)
* [2025-09-25, 11:43:00](https://soylentnews.org/article.pl?sid=25/09/25/0014257&amp;from=rss) - [The Ganges River is Drying at an Unprecedented Rate](https://soylentnews.org/article.pl?sid=25/09/25/0014257&amp;from=rss)
* [2025-09-25, 09:20:39](https://news.ycombinator.com/item?id=45370798) - [Man still alive six months after pig kidney transplant](https://www.nature.com/articles/d41586-025-02851-w)
* [2025-09-25, 07:01:00](https://soylentnews.org/article.pl?sid=25/09/24/122235&amp;from=rss) - [Nvidia&apos;s $100 Billion Investment in OpenAI Raises Big Antitrust Concerns](https://soylentnews.org/article.pl?sid=25/09/24/122235&amp;from=rss)
* [2025-09-25, 03:16:00](https://soylentnews.org/article.pl?sid=25/09/24/1152227&amp;from=rss) - [The End of EU-Imposed Cookie Consent Pop-Ups Could be Nigh](https://soylentnews.org/article.pl?sid=25/09/24/1152227&amp;from=rss)
* [2025-09-25, 00:28:35](https://news.ycombinator.com/item?id=45367732) - [Rustroid, a Rust IDE for Android](https://rustroid.is-a.dev/story)
* [2025-09-24, 22:36:00](https://soylentnews.org/article.pl?sid=25/09/24/1148218&amp;from=rss) - [Cloudflare is Sponsoring Ladybird and Omarchy](https://soylentnews.org/article.pl?sid=25/09/24/1148218&amp;from=rss)
* [2025-09-24, 21:25:27](https://news.ycombinator.com/item?id=45366149) - [Broker-Side SQL Filtering with RabbitMQ Streams](https://www.rabbitmq.com/blog/2025/09/23/sql-filter-expressions)
* [2025-09-24, 17:48:00](https://soylentnews.org/article.pl?sid=25/09/23/0616240&amp;from=rss) - [How Billions of Hacked Mosquitoes and a Vaccine Could Beat the Deadly Dengue Virus](https://soylentnews.org/article.pl?sid=25/09/23/0616240&amp;from=rss)
* [2025-09-24, 17:32:30](https://news.ycombinator.com/item?id=45363465) - [Supermicro server motherboards can be infected with unremovable malware](https://arstechnica.com/security/2025/09/supermicro-server-motherboards-can-be-infected-with-unremovable-malware/)
* [2025-09-24, 16:09:59](https://news.ycombinator.com/item?id=45362365) - [I built and launched the first AirPods-Controlled Game](https://apps.apple.com/us/app/ridepods-race-with-head/id6752268828)
* [2025-09-24, 13:02:00](https://soylentnews.org/article.pl?sid=25/09/23/066237&amp;from=rss) - [Why do Some Gamers Invert Their Controls?](https://soylentnews.org/article.pl?sid=25/09/23/066237&amp;from=rss)
* [2025-09-24, 11:23:54](https://news.ycombinator.com/item?id=45358841) - [Python developers are embracing type hints](https://pyrefly.org/blog/why-typed-python/)
* [2025-09-24, 08:16:00](https://soylentnews.org/article.pl?sid=25/09/23/0557257&amp;from=rss) - [&apos;a Black Hole of Energy Use&apos;: Meta&apos;s Massive AI Data Center is Stressing Out a Louisiana Community](https://soylentnews.org/article.pl?sid=25/09/23/0557257&amp;from=rss)
* [2025-09-24, 03:35:00](https://soylentnews.org/article.pl?sid=25/09/23/0552218&amp;from=rss) - [When Cancer Targets the Young](https://soylentnews.org/article.pl?sid=25/09/23/0552218&amp;from=rss)
