# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Technology

* [Culture Magazine Urges Professional Writers to Resist AI, Boycott and Stigmatize AI Slop](https://news.slashdot.org/story/25/09/29/0129218/culture-magazine-urges-professional-writers-to-resist-ai-boycott-and-stigmatize-ai-slop?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Tim Berners-Lee Urges New Open-Source Interoperable Data Standard, Protections from AI](https://tech.slashdot.org/story/25/09/28/1958242/tim-berners-lee-urges-new-open-source-interoperable-data-standard-protections-from-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [The AI coding trap](https://chrisloy.dev/post/2025/09/28/the-ai-coding-trap)

* [Researchers (Including Google) are Betting on Virtual 'World Models' for Better AI](https://slashdot.org/story/25/09/27/0632215/researchers-including-google-are-betting-on-virtual-world-models-for-better-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Will AI Mean Bring an End to Top Programming Language Rankings?](https://developers.slashdot.org/story/25/09/28/1823244/will-ai-mean-bring-an-end-to-top-programming-language-rankings?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Firefox Will Offer Visual Searching on Images With AI-Powered Google Lens](https://news.slashdot.org/story/25/09/28/0012206/firefox-will-offer-visual-searching-on-images-with-ai-powered-google-lens?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Psychedelics and Brain Health

* [Some Athletes are Trying the Psychedelic Ibogaine to Treat Brain Injuries](https://science.slashdot.org/story/25/09/29/033214/some-athletes-are-trying-the-psychedelic-ibogaine-to-treat-brain-injuries?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Healthcare and Disease

* [Health officials in the US are sounding the alarm over drug-resistant bacteria](https://www.aljazeera.com/news/2025/9/24/what-are-nightmare-bacteria-and-why-are-infections-rising-in-the-us)

* [Huntington's Disease Successfully Treated for First Time](https://soylentnews.org/article.pl?sid=25/09/26/1047223&amp;from=rss)

## Physics and Evolution

* [Wall Street Journal Decries 'The Rise of Conspiracy Physics'](https://science.slashdot.org/story/25/09/28/2356244/wall-street-journal-decries-the-rise-of-conspiracy-physics?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Autism may be the price of human intelligence, linked to human brain evolution](https://academic.oup.com/mbe/article/42/9/msaf189/8245036?login=false)

* [Million-Year-Old Skull Rewrites Human Evolution, Scientists Claim](https://science.slashdot.org/story/25/09/27/2250232/million-year-old-skull-rewrites-human-evolution-scientists-claim?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Cybersecurity

* [US Uncovers 100,000 SIM Cards That Could Have “Shut Down” NYC Cell Network](https://soylentnews.org/article.pl?sid=25/09/27/1352245&amp;from=rss)

* [Airlines Seen as Vulnerable After Confirmed Ransomware Cyberattack, Suspect Arrested](https://soylentnews.org/article.pl?sid=25/09/27/1318227&amp;from=rss)

## Environmental and Renewable Energy

* [California Now Has 68% More EV Chargers Than Gas Nozzles, Continues Green Energy Push](https://hardware.slashdot.org/story/25/09/28/0553221/california-now-has-68-more-ev-chargers-than-gas-nozzles-continues-green-energy-push?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [More Than Half of World's Coastal Settlements Retreating From Rising Seas, Study Shows](https://soylentnews.org/article.pl?sid=25/09/26/1416257&amp;from=rss)

## Society and Governance

* [Switzerland Approves Digital ID In Narrow Vote, UK Proposes One Too](https://yro.slashdot.org/story/25/09/28/2156240/switzerland-approves-digital-id-in-narrow-vote-uk-proposes-one-too?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Walmart CEO Issues Wake-Up Call: 'AI Is Going to Change Literally Every Job'](https://it.slashdot.org/story/25/09/27/066218/walmart-ceo-issues-wake-up-call-ai-is-going-to-change-literally-every-job?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [The Ganges River is Drying at an Unprecedented Rate](https://soylentnews.org/article.pl?sid=25/09/25/0014257&amp;from=rss)

## Technology Innovations

* [This Experimental Computer Chip Reuses Energy](https://soylentnews.org/article.pl?sid=25/09/27/141202&amp;from=rss)

* [Detaching GraalVM from the Java Ecosystem Train](https://blogs.oracle.com/java/post/detaching-graalvm-from-the-java-ecosystem-train)

* [How I Accidentally Created the Fastest CSV Parser Ever Made](https://sanixdk.xyz/blogs/how-i-accidentally-created-the-fastest-csv-parser-ever-made)

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

* [2025-09-29, 03:05:00](https://science.slashdot.org/story/25/09/29/033214/some-athletes-are-trying-the-psychedelic-ibogaine-to-treat-brain-injuries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Some Athletes are Trying the Psychedelic Ibogaine to Treat Brain Injuries](https://science.slashdot.org/story/25/09/29/033214/some-athletes-are-trying-the-psychedelic-ibogaine-to-treat-brain-injuries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-29, 02:53:29](https://news.ycombinator.com/item?id=45409956) - [Reader Response to \&quot;AI Overinvestment\&quot;](https://www.mbi-deepdives.com/reader-response-to-ai-overinvestment/)
* [2025-09-29, 01:32:00](https://news.slashdot.org/story/25/09/29/0129218/culture-magazine-urges-professional-writers-to-resist-ai-boycott-and-stigmatize-ai-slop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Culture Magazine Urges Professional Writers to Resist AI, Boycott and Stigmatize AI Slop](https://news.slashdot.org/story/25/09/29/0129218/culture-magazine-urges-professional-writers-to-resist-ai-boycott-and-stigmatize-ai-slop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-29, 01:18:14](https://news.ycombinator.com/item?id=45409552) - [Primer on FedEx&apos;s Distribution Network (2024)](https://ontheseams.substack.com/p/a-brief-primer-on-fedexs-distribution)
* [2025-09-29, 01:12:45](https://news.ycombinator.com/item?id=45409526) - [Cleaning house in Nx monorepo, how i removed unused deps safely](https://johnjames.blog/posts/cleaning-house-in-nx-monorepo-how-i-removed-120-unused-deps-safely)
* [2025-09-29, 00:49:00](https://soylentnews.org/article.pl?sid=25/09/27/141202&amp;from=rss) - [This Experimental Computer Chip Reuses Energy](https://soylentnews.org/article.pl?sid=25/09/27/141202&amp;from=rss)
* [2025-09-29, 00:16:01](https://news.ycombinator.com/item?id=45409227) - [Health officials in the US are sounding the alarm over drug-resistant bacteria](https://www.aljazeera.com/news/2025/9/24/what-are-nightmare-bacteria-and-why-are-infections-rising-in-the-us)
* [2025-09-28, 23:59:00](https://science.slashdot.org/story/25/09/28/2356244/wall-street-journal-decries-the-rise-of-conspiracy-physics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wall Street Journal Decries &apos;The Rise of Conspiracy Physics&apos;](https://science.slashdot.org/story/25/09/28/2356244/wall-street-journal-decries-the-rise-of-conspiracy-physics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-28, 23:33:34](https://news.ycombinator.com/item?id=45409001) - [Use the Accept Header to Serve Markdown Instead of HTML to LLMs](https://www.skeptrune.com/posts/use-the-accept-header-to-serve-markdown-instead-of-html-to-llms/)
* [2025-09-28, 23:32:32](https://news.ycombinator.com/item?id=45408994) - [Autism may be the price of human intelligence, linked to human brain evolution](https://academic.oup.com/mbe/article/42/9/msaf189/8245036?login=false)
* [2025-09-28, 23:22:35](https://lobste.rs/s/trzzcd/c_modules_globally_unique_module_names) - [In C++ modules globally unique module names seem to be unavoidable](https://nibblestew.blogspot.com/2025/09/in-c-modules-globally-unique-module.html)
* [2025-09-28, 23:02:48](https://lobste.rs/s/b4zqs1/risc_v_conditional_moves) - [RISC-V Conditional Moves](https://www.corsix.org/content/riscv-conditional-moves)
* [2025-09-28, 22:48:00](https://yro.slashdot.org/story/25/09/28/2156240/switzerland-approves-digital-id-in-narrow-vote-uk-proposes-one-too?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Switzerland Approves Digital ID In Narrow Vote, UK Proposes One Too](https://yro.slashdot.org/story/25/09/28/2156240/switzerland-approves-digital-id-in-narrow-vote-uk-proposes-one-too?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-28, 22:20:59](https://news.ycombinator.com/item?id=45408617) - [Go ahead, write the “stupid” code](https://spikepuppet.io/posts/write-the-stupid-code/)
* [2025-09-28, 21:50:45](https://lobste.rs/s/dkjswm/stupid_jj_tricks) - [stupid jj tricks](https://andre.arko.net/2025/09/28/stupid-jj-tricks/)
* [2025-09-28, 21:31:10](https://news.ycombinator.com/item?id=45408229) - [Farewell friends](https://humbledollar.com/forum/farewell-friends/)
* [2025-09-28, 21:08:15](https://news.ycombinator.com/item?id=45408021) - [Play snake in the URL address bar](https://demian.ferrei.ro/snake/)
* [2025-09-28, 21:00:07](https://news.ycombinator.com/item?id=45407951) - [Roe (YC W24) Is Hiring](https://news.ycombinator.com/item?id=45407951)
* [2025-09-28, 20:42:55](https://lobste.rs/s/cqlfab/supply_chain_security_for_0_001_why_it_won_t) - [Supply chain security for the 0.001% (and why it won’t catch on)](https://blog.viraptor.info/post/supply-chain-security-for-the-0001-and-why-it-wont-catch-on)
* [2025-09-28, 20:37:00](https://tech.slashdot.org/story/25/09/28/1958242/tim-berners-lee-urges-new-open-source-interoperable-data-standard-protections-from-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tim Berners-Lee Urges New Open-Source Interoperable Data Standard, Protections from AI](https://tech.slashdot.org/story/25/09/28/1958242/tim-berners-lee-urges-new-open-source-interoperable-data-standard-protections-from-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-28, 20:01:00](https://soylentnews.org/article.pl?sid=25/09/27/1352245&amp;from=rss) - [US Uncovers 100,000 SIM Cards That Could Have “Shut Down” NYC Cell Network](https://soylentnews.org/article.pl?sid=25/09/27/1352245&amp;from=rss)
* [2025-09-28, 19:58:30](https://lobste.rs/s/ijemcw/tag_suggestion_plan9) - [Tag suggestion: plan9](https://lobste.rs/s/ijemcw/tag_suggestion_plan9)
* [2025-09-28, 19:37:00](https://news.slashdot.org/story/25/09/28/1934254/facebook-and-instagram-offer-uk-users-an-ad-stopping-subscription-fee?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Facebook and Instagram Offer UK Users an Ad-Stopping Subscription Fee](https://news.slashdot.org/story/25/09/28/1934254/facebook-and-instagram-offer-uk-users-an-ad-stopping-subscription-fee?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-28, 19:09:20](https://lobste.rs/s/sh9xga/j_link_compact_usb_c_issues) - [J-Link Compact USB-C Issues](https://alvarop.com/2025/09/j-link-compact-usb-c-issues/)
* [2025-09-28, 19:00:20](https://news.ycombinator.com/item?id=45406911) - [The QMA Singularity](https://scottaaronson.blog/?p=9183)
* [2025-09-28, 18:49:40](https://news.ycombinator.com/item?id=45406826) - [People got together to stop a school shooting before it happened](https://www.nytimes.com/2025/09/27/nyregion/mass-shooting-prevention.html)
* [2025-09-28, 18:26:00](https://developers.slashdot.org/story/25/09/28/1823244/will-ai-mean-bring-an-end-to-top-programming-language-rankings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Will AI Mean Bring an End to Top Programming Language Rankings?](https://developers.slashdot.org/story/25/09/28/1823244/will-ai-mean-bring-an-end-to-top-programming-language-rankings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-28, 18:19:01](https://news.ycombinator.com/item?id=45406573) - [VMScape and why Xen dodged it](https://virtualize.sh/blog/vmscape-and-why-xen-dodged-it/)
* [2025-09-28, 18:09:43](https://lobste.rs/s/vhsrhh/nes_super_mario_bros_arbitrary_code) - [NES Super Mario Bros. \&quot;arbitrary code execution\&quot;](https://tasvideos.org/8991S)
* [2025-09-28, 18:01:39](https://news.ycombinator.com/item?id=45406442) - [UK Petition: Do not introduce Digital ID cards](https://petition.parliament.uk/petitions/730194)
* [2025-09-28, 17:23:21](https://news.ycombinator.com/item?id=45406109) - [Bayesian Data Analysis, Third edition (2013) [pdf]](https://sites.stat.columbia.edu/gelman/book/BDA3.pdf)
* [2025-09-28, 16:47:39](https://news.ycombinator.com/item?id=45405815) - [Testing “Exotic” P2P VPN](https://blog.nommy.moe/blog/exotic-mesh-vpn/)
* [2025-09-28, 16:46:22](https://lobste.rs/s/nn17bl/testing_exotic_p2p_vpn) - [Testing \&quot;exotic\&quot; p2p VPN](https://blog.nommy.moe/blog/exotic-mesh-vpn/)
* [2025-09-28, 16:34:00](https://slashdot.org/story/25/09/27/0632215/researchers-including-google-are-betting-on-virtual-world-models-for-better-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Researchers (Including Google) are Betting on Virtual &apos;World Models&apos; for Better AI](https://slashdot.org/story/25/09/27/0632215/researchers-including-google-are-betting-on-virtual-world-models-for-better-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-28, 16:13:36](https://lobste.rs/s/gchwhh/why_i_m_not_rushing_take_sides_rubygems) - [Why I&apos;m not rushing to take sides in the RubyGems fiasco](https://justin.searls.co/posts/why-im-not-rushing-to-take-sides-in-the-rubygems-fiasco/)
* [2025-09-28, 16:09:23](https://lobste.rs/s/jki8jl/what_is_good_taste_software_engineering) - [What is \&quot;good taste\&quot; in software engineering?](https://www.seangoedecke.com/taste/)
* [2025-09-28, 15:43:33](https://news.ycombinator.com/item?id=45405177) - [The AI coding trap](https://chrisloy.dev/post/2025/09/28/the-ai-coding-trap)
* [2025-09-28, 15:43:25](https://news.ycombinator.com/item?id=45405175) - [Scm2wasm: A Scheme to WASM compiler in 600 lines of C, making use of WASM GC](https://git.lain.faith/iitalics/scm2wasm)
* [2025-09-28, 15:41:23](https://lobste.rs/s/apzcvg/scm2wasm_scheme_wasm_compiler_600_lines_c) - [scm2wasm: A Scheme to WASM compiler in 600 lines of C, making use of WASM GC](https://git.lain.faith/iitalics/scm2wasm)
* [2025-09-28, 15:34:00](https://science.slashdot.org/story/25/09/27/2250232/million-year-old-skull-rewrites-human-evolution-scientists-claim?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Million-Year-Old Skull Rewrites Human Evolution, Scientists Claim](https://science.slashdot.org/story/25/09/27/2250232/million-year-old-skull-rewrites-human-evolution-scientists-claim?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-28, 15:22:55](https://lobste.rs/s/g9z6o4/death_utilitarian_programming) - [The death of utilitarian programming](https://lobste.rs/s/g9z6o4/death_utilitarian_programming)
* [2025-09-28, 15:15:00](https://soylentnews.org/article.pl?sid=25/09/27/1348254&amp;from=rss) - [Physics-Informed AI Learns Local Rules Behind Flocking and Collective Motion Behaviors](https://soylentnews.org/article.pl?sid=25/09/27/1348254&amp;from=rss)
* [2025-09-28, 14:40:46](https://news.ycombinator.com/item?id=45404667) - [Show HN: Toolbrew – Free little tools without signups or ads](https://toolbrew.co/)
* [2025-09-28, 14:34:00](https://hardware.slashdot.org/story/25/09/28/0553221/california-now-has-68-more-ev-chargers-than-gas-nozzles-continues-green-energy-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [California Now Has 68% More EV Chargers Than Gas Nozzles, Continues Green Energy Push](https://hardware.slashdot.org/story/25/09/28/0553221/california-now-has-68-more-ev-chargers-than-gas-nozzles-continues-green-energy-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-28, 13:27:10](https://lobste.rs/s/nqllvf/when_i_say_alphabetical_order_i_mean) - [When I say \&quot;alphabetical order\&quot;, I mean \&quot;alphabetical order\&quot;](https://sebastiano.tronto.net/blog/2025-09-28-alphabetic-order/)
* [2025-09-28, 13:00:16](https://news.ycombinator.com/item?id=45404022) - [When I say “alphabetical order”, I mean “alphabetical order”](https://sebastiano.tronto.net/blog/2025-09-28-alphabetic-order/)
* [2025-09-28, 12:59:54](https://news.ycombinator.com/item?id=45404021) - [Privacy Badger is a free browser extension made by EFF to stop spying](https://privacybadger.org/)
* [2025-09-28, 12:57:57](https://lobste.rs/s/9islkn/detaching_graalvm_from_java_ecosystem) - [Detaching GraalVM from the Java Ecosystem Train](https://blogs.oracle.com/java/post/detaching-graalvm-from-the-java-ecosystem-train)
* [2025-09-28, 12:49:21](https://lobste.rs/s/tm7eyr/is_ip_fragmentation_still_considered) - [Is IP fragmentation still considered vulnerable?](https://blog.apnic.net/2025/09/16/is-ip-fragmentation-still-considered-vulnerable/)
* [2025-09-28, 11:44:44](https://lobste.rs/s/wshruu/small_data) - [Small Data](https://topicpartition.io/definitions/small-data)
* [2025-09-28, 11:34:00](https://slashdot.org/story/25/09/27/1640203/mistrals-new-plan-for-improving-its-ai-models-training-data-from-enterprises?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mistral&apos;s New Plan for Improving Its AI Models: Training Data from Enterprises](https://slashdot.org/story/25/09/27/1640203/mistrals-new-plan-for-improving-its-ai-models-training-data-from-enterprises?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-28, 10:29:00](https://soylentnews.org/article.pl?sid=25/09/27/1340248&amp;from=rss) - [US Intel Officials “Concerned” China Will Soon Master Reusable Launch](https://soylentnews.org/article.pl?sid=25/09/27/1340248&amp;from=rss)
* [2025-09-28, 10:27:56](https://lobste.rs/s/s262tb/enthusiasts_bond_twelve_56k_modems) - [Enthusiasts bond twelve 56K modems together to set dial-up broadband records — a dozen screeching boxes achieve record 668 kbps download speeds](https://www.tomshardware.com/networking/enthusiasts-bond-twelve-56k-dial-up-modems-together-to-set-dial-up-broadband-records-a-dozen-screeching-boxes-achieve-record-668-kbps-download-speeds)
* [2025-09-28, 09:07:22](https://lobste.rs/s/m9rmop/offline_translator_for_android) - [Offline translator for Android](https://github.com/DavidVentura/firefox-translator)
* [2025-09-28, 08:28:11](https://lobste.rs/s/gz4zq0/urgency_vs_importance) - [Urgency vs importance](https://archaeologist.dev/artifacts/priorities)
* [2025-09-28, 08:14:02](https://lobste.rs/s/r3xvg7/visual_studio_2026_insiders_is_here) - [Visual Studio 2026 Insiders is here](https://devblogs.microsoft.com/visualstudio/visual-studio-2026-insiders-is-here/)
* [2025-09-28, 07:34:00](https://yro.slashdot.org/story/25/09/28/044220/should-salesforces-tableau-be-granted-a-patent-on-visualizing-hierarchical-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Should Salesforce&apos;s Tableau Be Granted a Patent On &apos;Visualizing Hierarchical Data&apos;?](https://yro.slashdot.org/story/25/09/28/044220/should-salesforces-tableau-be-granted-a-patent-on-visualizing-hierarchical-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-28, 05:44:00](https://soylentnews.org/article.pl?sid=25/09/27/1329235&amp;from=rss) - [Consumer Reports Slams Microsoft for Windows 10 Mess, Urges Extension of Free Updates](https://soylentnews.org/article.pl?sid=25/09/27/1329235&amp;from=rss)
* [2025-09-28, 05:11:24](https://lobste.rs/s/0xkiib/linus_torvalds_supposedly_garbage_code) - [Linus Torvalds and the Supposedly “Garbage Code”](https://giodicanio.com/2025/08/27/linus-torvalds-and-the-supposedly-garbage-code/)
* [2025-09-28, 03:34:00](https://news.slashdot.org/story/25/09/28/0012206/firefox-will-offer-visual-searching-on-images-with-ai-powered-google-lens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Firefox Will Offer Visual Searching on Images With AI-Powered Google Lens](https://news.slashdot.org/story/25/09/28/0012206/firefox-will-offer-visual-searching-on-images-with-ai-powered-google-lens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-28, 01:34:00](https://tech.slashdot.org/story/25/09/27/2331230/when-this-ev-company-went-bankrupt-its-customers-launched-a-nonprofit-to-keep-their-cars-running?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [When This EV Company Went Bankrupt, Its Customers Launched a Nonprofit to Keep Their Cars Running](https://tech.slashdot.org/story/25/09/27/2331230/when-this-ev-company-went-bankrupt-its-customers-launched-a-nonprofit-to-keep-their-cars-running?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-28, 00:56:00](https://soylentnews.org/article.pl?sid=25/09/27/1318227&amp;from=rss) - [Airlines Seen as Vulnerable After Confirmed Ransomware Cyberattack, Suspect Arrested](https://soylentnews.org/article.pl?sid=25/09/27/1318227&amp;from=rss)
* [2025-09-27, 23:40:31](https://lobste.rs/s/vryavc/how_i_accidentally_created_fastest_csv) - [How I Accidentally Created the Fastest CSV Parser Ever Made](https://sanixdk.xyz/blogs/how-i-accidentally-created-the-fastest-csv-parser-ever-made)
* [2025-09-27, 22:58:00](https://it.slashdot.org/story/25/09/27/066218/walmart-ceo-issues-wake-up-call-ai-is-going-to-change-literally-every-job?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Walmart CEO Issues Wake-Up Call: &apos;AI Is Going to Change Literally Every Job&apos;](https://it.slashdot.org/story/25/09/27/066218/walmart-ceo-issues-wake-up-call-ai-is-going-to-change-literally-every-job?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-27, 20:13:00](https://soylentnews.org/article.pl?sid=25/09/27/1254248&amp;from=rss) - [How AI is Subsidized by Your Utility Bills and Drives Copper Prices](https://soylentnews.org/article.pl?sid=25/09/27/1254248&amp;from=rss)
* [2025-09-27, 18:53:17](https://lobste.rs/s/fml20b/docker_was_too_slow_so_we_replaced_it_nix) - [Docker Was Too Slow, So We Replaced It: Nix in Production](https://www.youtube.com/watch?v=iPoL03tFBtU)
* [2025-09-27, 18:39:47](https://lobste.rs/s/hdupb2/why_today_s_humanoids_won_t_learn) - [Why Today’s Humanoids Won’t Learn Dexterity](https://rodneybrooks.com/why-todays-humanoids-wont-learn-dexterity/)
* [2025-09-27, 15:27:00](https://soylentnews.org/article.pl?sid=25/09/26/2326219&amp;from=rss) - [Cloudflare DDoSed Itself With React UseEffect Hook Blunder](https://soylentnews.org/article.pl?sid=25/09/26/2326219&amp;from=rss)
* [2025-09-27, 11:04:56](https://lobste.rs/s/wnvj5y/typst_possible_latex_replacement) - [Typst: a possible LaTeX replacement](https://lwn.net/Articles/1037577/)
* [2025-09-27, 10:41:00](https://soylentnews.org/article.pl?sid=25/09/26/2314203&amp;from=rss) - [Magma Displacement Triggered Tens of Thousands of Earthquakes, Santorini Swarm Study Finds](https://soylentnews.org/article.pl?sid=25/09/26/2314203&amp;from=rss)
* [2025-09-27, 06:22:53](https://news.ycombinator.com/item?id=45393576) - [Buyers of Radio Shack, Pier 1 brands accused of running $112M Ponzi scheme](https://www.cbsnews.com/news/sec-rev-ponzi-scheme-tai-lopez-alex-mehr/)
* [2025-09-27, 05:56:00](https://soylentnews.org/article.pl?sid=25/09/26/239227&amp;from=rss) - [China&apos;s Latest GPU Arrives With Claims of CUDA Compatibility and RT Support](https://soylentnews.org/article.pl?sid=25/09/26/239227&amp;from=rss)
* [2025-09-27, 01:06:00](https://soylentnews.org/article.pl?sid=25/09/26/1437222&amp;from=rss) - [How India&apos;s Unplanned Hydropower Dams and Tunnels Are Disrupting Himalayan Landscapes](https://soylentnews.org/article.pl?sid=25/09/26/1437222&amp;from=rss)
* [2025-09-26, 20:20:00](https://soylentnews.org/article.pl?sid=25/09/26/1433207&amp;from=rss) - [American Kids Can’t Read or Do Math Anymore](https://soylentnews.org/article.pl?sid=25/09/26/1433207&amp;from=rss)
* [2025-09-26, 15:35:00](https://soylentnews.org/article.pl?sid=25/09/26/1416257&amp;from=rss) - [More Than Half of World&apos;s Coastal Settlements Retreating From Rising Seas, Study Shows](https://soylentnews.org/article.pl?sid=25/09/26/1416257&amp;from=rss)
* [2025-09-26, 10:53:00](https://soylentnews.org/article.pl?sid=25/09/26/1047223&amp;from=rss) - [Huntington&apos;s Disease Successfully Treated for First Time](https://soylentnews.org/article.pl?sid=25/09/26/1047223&amp;from=rss)
* [2025-09-26, 06:11:00](https://soylentnews.org/article.pl?sid=25/09/26/0453242&amp;from=rss) - [Facebook Data Reveal the Devastating Real-World Harms Caused by the Spread of Misinformation](https://soylentnews.org/article.pl?sid=25/09/26/0453242&amp;from=rss)
* [2025-09-26, 01:27:00](https://soylentnews.org/article.pl?sid=25/09/25/1231232&amp;from=rss) - [China Starts Producing World-First Non-Binary AI Chips for Aviation, Manufacturing](https://soylentnews.org/article.pl?sid=25/09/25/1231232&amp;from=rss)
* [2025-09-25, 20:42:00](https://soylentnews.org/article.pl?sid=25/09/25/1225209&amp;from=rss) - [The Future of Nuclear Reactors is Making its Way to the US](https://soylentnews.org/article.pl?sid=25/09/25/1225209&amp;from=rss)
* [2025-09-25, 20:20:44](https://news.ycombinator.com/item?id=45378450) - [Fernflower Java Decompiler](https://github.com/JetBrains/fernflower)
* [2025-09-25, 19:31:07](https://news.ycombinator.com/item?id=45377787) - [Corral.BAS](https://basic-code.bearblog.dev/corral/)
* [2025-09-25, 15:54:00](https://soylentnews.org/article.pl?sid=25/09/25/1221237&amp;from=rss) - [Different Types of Magic Mushrooms Use Unique Biochemical Paths to Produce the Same Active Compound](https://soylentnews.org/article.pl?sid=25/09/25/1221237&amp;from=rss)
* [2025-09-25, 15:19:56](https://news.ycombinator.com/item?id=45373784) - [Zlib visualizer](https://lynn.github.io/flateview/)
* [2025-09-25, 12:07:12](https://news.ycombinator.com/item?id=45371856) - [The Long Trip from Silica to Smartphone](https://spectrum.ieee.org/the-long-strange-trip-from-silica-to-smartphone)
* [2025-09-25, 11:43:00](https://soylentnews.org/article.pl?sid=25/09/25/0014257&amp;from=rss) - [The Ganges River is Drying at an Unprecedented Rate](https://soylentnews.org/article.pl?sid=25/09/25/0014257&amp;from=rss)
* [2025-09-25, 07:01:00](https://soylentnews.org/article.pl?sid=25/09/24/122235&amp;from=rss) - [Nvidia&apos;s $100 Billion Investment in OpenAI Raises Big Antitrust Concerns](https://soylentnews.org/article.pl?sid=25/09/24/122235&amp;from=rss)
* [2025-09-25, 04:30:13](https://news.ycombinator.com/item?id=45369286) - [Patagonian Welsh](https://en.wikipedia.org/wiki/Patagonian_Welsh)
* [2025-09-25, 03:16:00](https://soylentnews.org/article.pl?sid=25/09/24/1152227&amp;from=rss) - [The End of EU-Imposed Cookie Consent Pop-Ups Could be Nigh](https://soylentnews.org/article.pl?sid=25/09/24/1152227&amp;from=rss)
* [2025-09-25, 02:22:07](https://news.ycombinator.com/item?id=45368596) - [Comparing Rust to Carbon](https://lwn.net/Articles/1036912/)
* [2025-09-25, 00:28:35](https://news.ycombinator.com/item?id=45367732) - [Rustroid, a Rust IDE for Android](https://rustroid.is-a.dev/story)
