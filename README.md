# [News Summary](https://kherrick.github.io/news-summary/)

## Health & Medicine

* [Resistant Bacteria Are Advancing Faster Than Antibiotics](https://science.slashdot.org/story/25/10/22/1524248/resistant-bacteria-are-advancing-faster-than-antibiotics?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Explores the alarming growth of antibiotic-resistant bacteria and the challenges in combating them.

## Technology Innovations

* [Google demonstrates 'verifiable quantum advantage' with their Willow processor](https://blog.google/technology/research/quantum-echoes-willow-verifiable-quantum-advantage/) - Google's Willow processor marks a significant breakthrough in quantum computing.

* [Smart Beds Malfunctioned During AWS Outage](https://tech.slashdot.org/story/25/10/22/1347211/smart-beds-malfunctioned-during-aws-outage?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Discusses how a recent AWS outage caused disruption in smart bed functionalities.

* [NASA Opens SpaceX's Moon Lander Contract To Rivals Over Starship Delays](https://science.slashdot.org/story/25/10/22/0358206/nasa-opens-spacexs-moon-lander-contract-to-rivals-over-starship-delays?utm_source=rss1.0mainlinkanon&utm_medium=feed) - NASA seeks alternative contractors due to SpaceX's Starship delays.

## Security & Cyber Threats

* [Cryptographic Issues in Cloudflare's Circl FourQ Implementation (CVE-2025-8556)](https://www.botanica.software/blog/cryptographic-issues-in-cloudflares-circl-fourq-implementation) - Details a cryptographic vulnerability affecting Cloudflare's implementation.

* [A New Attack Lets Hackers Steal 2-Factor Authentication Codes From Android Phones](https://soylentnews.org/article.pl?sid=25/10/21/1229253&from=rss) - Discusses a novel attack methodology targeting two-factor authentication on Android devices.

* [Evaluating the Infinity Cache in AMD Strix Halo](https://chipsandcheese.com/p/evaluating-the-infinity-cache-in) - Analyzes the implications and performance of AMD's Infinity Cache design.

## Ethics & Society

* [More Than 1,100 Public Figures Call for Ban on AI Superintelligence](https://slashdot.org/story/25/10/22/1448213/more-than-1100-public-figures-call-for-ban-on-ai-superintelligence?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Renowned leaders urge a global halt on the development of AI superintelligence for ethical reasons.

* [YouTube's Likeness Detection Has Arrived To Help Stop AI Doppelgangers](https://news.slashdot.org/story/25/10/21/2250229/youtubes-likeness-detection-has-arrived-to-help-stop-ai-doppelgangers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - New tools aim to mitigate the misuse of AI-generated likenesses.

* [AI assistants misrepresent news content 45% of the time](https://www.bbc.co.uk/mediacentre/2025/new-ebu-research-ai-assistants-news-content) - Research reveals the inaccuracies in AI-assisted news summaries.

## Space & Astronomy

* [Comet Lemmon (Not Lemon) Nearing Peak](https://soylentnews.org/article.pl?sid=25/10/18/1745254&from=rss) - Learn about the approaching peak brightness of Comet Lemmon.

* [Quantum Crystals Offer a Blueprint for the Future of Computing and Chemistry](https://soylentnews.org/article.pl?sid=25/10/18/180239&from=rss) - A groundbreaking study on the potential of quantum crystals.

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

* [2025-10-22, 15:24:00](https://science.slashdot.org/story/25/10/22/1524248/resistant-bacteria-are-advancing-faster-than-antibiotics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Resistant Bacteria Are Advancing Faster Than Antibiotics](https://science.slashdot.org/story/25/10/22/1524248/resistant-bacteria-are-advancing-faster-than-antibiotics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-22, 15:16:19](https://news.ycombinator.com/item?id=45670443) - [Google demonstrates &apos;verifiable quantum advantage&apos; with their Willow processor](https://blog.google/technology/research/quantum-echoes-willow-verifiable-quantum-advantage/)
* [2025-10-22, 15:03:58](https://lobste.rs/s/ikcvvv/slint_1_14_released) - [Slint 1.14 Released](https://slint.dev/blog/slint-1.14-released)
* [2025-10-22, 14:48:00](https://slashdot.org/story/25/10/22/1448213/more-than-1100-public-figures-call-for-ban-on-ai-superintelligence?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [More Than 1,100 Public Figures Call for Ban on AI Superintelligence](https://slashdot.org/story/25/10/22/1448213/more-than-1100-public-figures-call-for-ban-on-ai-superintelligence?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-22, 14:22:41](https://news.ycombinator.com/item?id=45669593) - [Cryptographic Issues in Cloudflare&apos;s Circl FourQ Implementation (CVE-2025-8556)](https://www.botanica.software/blog/cryptographic-issues-in-cloudflares-circl-fourq-implementation)
* [2025-10-22, 14:00:00](https://tech.slashdot.org/story/25/10/22/1347211/smart-beds-malfunctioned-during-aws-outage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Smart Beds Malfunctioned During AWS Outage](https://tech.slashdot.org/story/25/10/22/1347211/smart-beds-malfunctioned-during-aws-outage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-22, 13:50:20](https://news.ycombinator.com/item?id=45669142) - [Linux Capabilities Revisited](https://dfir.ch/posts/linux_capabilities/)
* [2025-10-22, 13:44:29](https://lobste.rs/s/iuvukw/word_on_omarchy) - [A Word on Omarchy](https://マリウス.com/a-word-on-omarchy/)
* [2025-10-22, 13:42:00](https://soylentnews.org/article.pl?sid=25/10/21/198229&amp;from=rss) - [He Co-founded Wikipedia, Now He Says the Site Needs a Radical Change](https://soylentnews.org/article.pl?sid=25/10/21/198229&amp;from=rss)
* [2025-10-22, 13:39:26](https://news.ycombinator.com/item?id=45668990) - [AI assistants misrepresent news content 45% of the time](https://www.bbc.co.uk/mediacentre/2025/new-ebu-research-ai-assistants-news-content)
* [2025-10-22, 13:25:51](https://news.ycombinator.com/item?id=45668805) - [Cigarette-smuggling balloons force closure of Lithuanian airport](https://www.theguardian.com/world/2025/oct/22/cigarette-smuggling-balloons-force-closure-vilnius-airport-lithuania)
* [2025-10-22, 13:24:47](https://lobste.rs/s/2q5tn0/awesome_tiny_crates_bunch_small_crates) - [awesome-tiny-crates: A bunch of small crates that make writing Rust more fun](https://github.com/nik-rev/awesome-tiny-crates)
* [2025-10-22, 13:00:08](https://news.ycombinator.com/item?id=45668408) - [The Dragon Hatchling: The missing link between the transformer and brain models](https://arxiv.org/abs/2509.26507)
* [2025-10-22, 13:00:00](https://it.slashdot.org/story/25/10/22/047219/rubbish-it-systems-cost-the-us-at-least-40-billion-during-covid?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rubbish IT Systems Cost the US At Least $40 Billion During Covid](https://it.slashdot.org/story/25/10/22/047219/rubbish-it-systems-cost-the-us-at-least-40-billion-during-covid?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-22, 12:50:55](https://lobste.rs/s/cdrvo7/how_run_1_1s_as_engineering_manager) - [How to Run 1:1s as an Engineering Manager](https://justoffbyone.com/posts/how-to-run-11s/)
* [2025-10-22, 12:48:01](https://news.ycombinator.com/item?id=45668264) - [The security paradox of local LLMs](https://quesma.com/blog/local-llms-security-paradox/)
* [2025-10-22, 12:39:37](https://news.ycombinator.com/item?id=45668160) - [SourceFS: A 2h+ Android build becomes a 15m task with a virtual filesystem](https://www.source.dev/journal/sourcefs)
* [2025-10-22, 12:28:13](https://news.ycombinator.com/item?id=45668022) - [Tesla Recalls Almost 13,000 EVs over Risk of Battery Power Loss](https://www.bloomberg.com/news/articles/2025-10-22/tesla-recalls-almost-13-000-evs-over-risk-of-battery-power-loss)
* [2025-10-22, 12:12:28](https://news.ycombinator.com/item?id=45667866) - [Internet&apos;s biggest annoyance: Cookie laws should target browsers, not websites](https://nednex.com/en/the-internets-biggest-annoyance-why-cookie-laws-should-target-browsers-not-websites/)
* [2025-10-22, 12:02:02](https://news.ycombinator.com/item?id=45667770) - [Infracost (YC W21) Hiring First Dev Advocate to Shift FinOps Left](https://www.ycombinator.com/companies/infracost/jobs/NzwUQ7c-senior-developer-advocate)
* [2025-10-22, 11:40:14](https://lobste.rs/s/pwsnpd/powerletters_for_rust) - [Powerletters for Rust](https://brson.github.io/2025/10/07/powerletters-for-rust)
* [2025-10-22, 11:23:33](https://news.ycombinator.com/item?id=45667458) - [Starcloud](https://blogs.nvidia.com/blog/starcloud/)
* [2025-10-22, 10:15:51](https://lobste.rs/s/h49oxc/async_dns_resolution) - [Async DNS Resolution](https://ziglang.org/devlog/2025/#2025-10-15)
* [2025-10-22, 10:00:00](https://tech.slashdot.org/story/25/10/22/0413239/gm-to-end-production-of-electric-chevy-brightdrop-vans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GM To End Production of Electric Chevy Brightdrop Vans](https://tech.slashdot.org/story/25/10/22/0413239/gm-to-end-production-of-electric-chevy-brightdrop-vans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-22, 09:59:23](https://lobste.rs/s/nlbxqr/advanced_self_aware_ed_1) - [Advanced Self-Aware ed(1)](https://aartaka.me/advanc-ed.html)
* [2025-10-22, 09:50:48](https://lobste.rs/s/hlfr6u/simple_minimal_sql_database_migrations) - [Simple, minimal SQL database migrations written in Go with generics. Std lib database/sql and SQLX supported OOTB](https://github.com/padurean/gosmig)
* [2025-10-22, 09:40:38](https://lobste.rs/s/mhmcp4/15_go_subtleties_you_may_not_already_know) - [15 Go Subtleties You May Not Already Know](https://harrisoncramer.me/15-go-sublteties-you-may-not-already-know/)
* [2025-10-22, 09:05:21](https://news.ycombinator.com/item?id=45666510) - [Greg Newby, CEO of Project Gutenberg Literary Archive Foundation, has died](https://www.pgdp.net/wiki/In_Memoriam/gbnewby)
* [2025-10-22, 09:02:41](https://lobste.rs/s/jgwhwy/element_sethtml_method_on_mdn) - [Element: setHTML() method on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/setHTML)
* [2025-10-22, 08:58:00](https://soylentnews.org/article.pl?sid=25/10/21/1229253&amp;from=rss) - [A New Attack Lets Hackers Steal 2-Factor Authentication Codes From Android Phones](https://soylentnews.org/article.pl?sid=25/10/21/1229253&amp;from=rss)
* [2025-10-22, 08:37:31](https://news.ycombinator.com/item?id=45666327) - [Knocker, a knock based access control system for your homelab](https://github.com/FarisZR/knocker)
* [2025-10-22, 07:28:47](https://lobste.rs/s/ikcg1l/organizing_your_nix_configuration) - [Organizing your Nix configuration without flakes](https://somas.is/note-organizing-nix-configuration-without-flakes.html)
* [2025-10-22, 07:21:36](https://lobste.rs/s/g7uuii/modshim_override_customize_python) - [modshim: Override and customize Python packages without touching their code](https://github.com/joouha/modshim)
* [2025-10-22, 07:00:00](https://science.slashdot.org/story/25/10/22/0358206/nasa-opens-spacexs-moon-lander-contract-to-rivals-over-starship-delays?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Opens SpaceX&apos;s Moon Lander Contract To Rivals Over Starship Delays](https://science.slashdot.org/story/25/10/22/0358206/nasa-opens-spacexs-moon-lander-contract-to-rivals-over-starship-delays?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-22, 06:17:18](https://news.ycombinator.com/item?id=45665452) - [MinIO stops distributing free Docker images](https://github.com/minio/minio/issues/21647#issuecomment-3418675115)
* [2025-10-22, 05:49:58](https://news.ycombinator.com/item?id=45665311) - [French ex-president Sarkozy begins jail sentence](https://www.bbc.com/news/articles/cvgkm2j0xelo)
* [2025-10-22, 05:13:40](https://lobste.rs/s/sljyoc/move_destruct_forget_rust) - [Move, Destruct, Forget, and Rust](https://smallcultfollowing.com/babysteps/blog/2025/10/21/move-destruct-leak/)
* [2025-10-22, 04:20:09](https://news.ycombinator.com/item?id=45664848) - [Evaluating the Infinity Cache in AMD Strix Halo](https://chipsandcheese.com/p/evaluating-the-infinity-cache-in)
* [2025-10-22, 04:11:00](https://soylentnews.org/article.pl?sid=25/10/21/1223202&amp;from=rss) - [Bitcoin Mining is Making People Sick](https://soylentnews.org/article.pl?sid=25/10/21/1223202&amp;from=rss)
* [2025-10-22, 03:30:00](https://tech.slashdot.org/story/25/10/21/2334237/automattic-ceo-calls-tumblr-his-biggest-failure-so-far?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Automattic CEO Calls Tumblr His &apos;Biggest Failure&apos; So Far](https://tech.slashdot.org/story/25/10/21/2334237/automattic-ceo-calls-tumblr-his-biggest-failure-so-far?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-22, 02:00:00](https://hardware.slashdot.org/story/25/10/21/237254/british-columbia-to-permanently-ban-new-crypto-mining-projects-from-grid?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [British Columbia to Permanently Ban New Crypto Mining Projects From Grid](https://hardware.slashdot.org/story/25/10/21/237254/british-columbia-to-permanently-ban-new-crypto-mining-projects-from-grid?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-22, 01:30:00](https://tech.slashdot.org/story/25/10/21/2324239/internet-archive-celebrates-1-trillion-web-pages-archived?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Internet Archive Celebrates 1 Trillion Web Pages Archived](https://tech.slashdot.org/story/25/10/21/2324239/internet-archive-celebrates-1-trillion-web-pages-archived?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-22, 01:00:00](https://it.slashdot.org/story/25/10/21/2256241/fake-homebrew-google-ads-push-malware-onto-macos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fake Homebrew Google Ads Push Malware Onto macOS](https://it.slashdot.org/story/25/10/21/2256241/fake-homebrew-google-ads-push-malware-onto-macos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-22, 00:20:00](https://news.slashdot.org/story/25/10/21/2250229/youtubes-likeness-detection-has-arrived-to-help-stop-ai-doppelgangers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [YouTube&apos;s Likeness Detection Has Arrived To Help Stop AI Doppelgangers](https://news.slashdot.org/story/25/10/21/2250229/youtubes-likeness-detection-has-arrived-to-help-stop-ai-doppelgangers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-21, 23:40:00](https://tech.slashdot.org/story/25/10/21/2244249/us-investigates-waymo-robotaxis-over-safety-around-school-buses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Investigates Waymo Robotaxis Over Safety Around School Buses](https://tech.slashdot.org/story/25/10/21/2244249/us-investigates-waymo-robotaxis-over-safety-around-school-buses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-21, 23:26:00](https://soylentnews.org/article.pl?sid=25/10/21/1218221&amp;from=rss) - [Amazon Error Creates Massive Internet Outage](https://soylentnews.org/article.pl?sid=25/10/21/1218221&amp;from=rss)
* [2025-10-21, 23:18:27](https://lobste.rs/s/lo8r1s/greatness_text_adventures) - [The Greatness of Text Adventures](https://entropicthoughts.com/the-greatness-of-text-adventures)
* [2025-10-21, 23:13:29](https://lobste.rs/s/ymcbwl/what_s_problem_with_pipe_curl_into_sh) - [What’s the problem with pipe-curl-into-sh?](https://lobste.rs/s/ymcbwl/what_s_problem_with_pipe_curl_into_sh)
* [2025-10-21, 23:05:00](https://tech.slashdot.org/story/25/10/21/2138208/isp-deceived-customers-about-fiber-internet-german-court-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ISP Deceived Customers About Fiber Internet, German Court Finds](https://tech.slashdot.org/story/25/10/21/2138208/isp-deceived-customers-about-fiber-internet-german-court-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-21, 22:25:00](https://developers.slashdot.org/story/25/10/21/2132259/jetbrains-survey-declares-php-declining-then-says-it-isnt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [JetBrains Survey Declares PHP Declining, Then Says It Isn&apos;t](https://developers.slashdot.org/story/25/10/21/2132259/jetbrains-survey-declares-php-declining-then-says-it-isnt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-21, 22:10:18](https://news.ycombinator.com/item?id=45662368) - [Designing software for things that rot](https://drobinin.com/posts/designing-software-for-things-that-rot/)
* [2025-10-21, 21:45:00](https://tech.slashdot.org/story/25/10/21/2125252/tiktoks-new-policies-remove-promise-to-notify-users-before-government-data-disclosure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [TikTok&apos;s New Policies Remove Promise To Notify Users Before Government Data Disclosure](https://tech.slashdot.org/story/25/10/21/2125252/tiktoks-new-policies-remove-promise-to-notify-users-before-government-data-disclosure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-21, 21:00:10](https://news.ycombinator.com/item?id=45661638) - [rlsw – Raylib software OpenGL renderer in less than 5k LOC](https://github.com/raysan5/raylib/blob/master/src/external/rlsw.h)
* [2025-10-21, 18:51:58](https://lobste.rs/s/9u7xpi/why_ssa) - [Why SSA?](https://mcyoung.xyz/2025/10/21/ssa-1/)
* [2025-10-21, 18:41:00](https://soylentnews.org/article.pl?sid=25/10/20/2129245&amp;from=rss) - [Are We Living in a Golden Age of Stupidity?](https://soylentnews.org/article.pl?sid=25/10/20/2129245&amp;from=rss)
* [2025-10-21, 18:36:10](https://lobste.rs/s/rhmh7d/magit_is_amazing) - [Magit is Amazing](https://heiwiper.com/posts/magit-is-awesome/)
* [2025-10-21, 17:44:22](https://lobste.rs/s/ac4ab5/modal_editing_is_weird_historical) - [Modal editing is a weird historical contingency we have through sheer happenstance](https://buttondown.com/hillelwayne/archive/modal-editing-is-a-weird-historical-contingency/)
* [2025-10-21, 17:00:29](https://lobste.rs/s/wmcl4k/yet_another_year_with_decker_v1_44_v1_60) - [Yet Another Year With Decker (v1.44 - v1.60)](http://beyondloom.com/blog/unionstate3.html)
* [2025-10-21, 15:55:41](https://news.ycombinator.com/item?id=45657345) - [Ask HN: Our AWS account got compromised after their outage](https://news.ycombinator.com/item?id=45657345)
* [2025-10-21, 15:17:38](https://lobste.rs/s/pstg9w/plasma_6_5) - [Plasma 6.5](https://kde.org/announcements/plasma/6/6.5.0/)
* [2025-10-21, 15:13:11](https://lobste.rs/s/4ozeaf/openbsd_7_8) - [OpenBSD 7.8](https://www.openbsd.org/78.html)
* [2025-10-21, 14:24:26](https://news.ycombinator.com/item?id=45656223) - [LLMs can get \&quot;brain rot\&quot;](https://llm-brain-rot.github.io/)
* [2025-10-21, 13:57:00](https://soylentnews.org/article.pl?sid=25/10/20/1245230&amp;from=rss) - [Drone Tech Company DroneShield to Build 13m Facility in Australia](https://soylentnews.org/article.pl?sid=25/10/20/1245230&amp;from=rss)
* [2025-10-21, 13:11:24](https://lobste.rs/s/6hfg9a/tracking_time_without_clock) - [Tracking Time Without Clock](https://tigerbeetle.com/blog/2025-10-21-clockless-time/)
* [2025-10-21, 13:09:45](https://lobste.rs/s/kltrqx/just_use_curl) - [Just use cURL](https://justuse.org/curl/)
* [2025-10-21, 12:58:43](https://news.ycombinator.com/item?id=45655188) - [NASA chief suggests SpaceX may be booted from moon mission](https://www.cnn.com/2025/10/20/science/nasa-spacex-moon-landing-contract-sean-duffy)
* [2025-10-21, 12:55:59](https://news.ycombinator.com/item?id=45655161) - [Neural audio codecs: how to get audio into LLMs](https://kyutai.org/next/codec-explainer)
* [2025-10-21, 12:30:27](https://lobste.rs/s/bsckho/6_months_tangled) - [6 months of Tangled](https://blog.tangled.org/6-months)
* [2025-10-21, 11:12:03](https://lobste.rs/s/0zqebs/my_most_popular_application) - [My most popular application](https://blog.6nok.org/my-most-popular-application/)
* [2025-10-21, 09:15:00](https://soylentnews.org/article.pl?sid=25/10/20/1236216&amp;from=rss) - [Lifespan of AI Chips: The $300 Billion Question](https://soylentnews.org/article.pl?sid=25/10/20/1236216&amp;from=rss)
* [2025-10-21, 04:27:00](https://soylentnews.org/article.pl?sid=25/10/20/1229240&amp;from=rss) - [GNOME Has a New Security Threat Scanner Powered by VirusTotal](https://soylentnews.org/article.pl?sid=25/10/20/1229240&amp;from=rss)
* [2025-10-20, 23:40:00](https://soylentnews.org/article.pl?sid=25/10/20/0111228&amp;from=rss) - [Russia, AI and the Future of Disinformation Warfare](https://soylentnews.org/article.pl?sid=25/10/20/0111228&amp;from=rss)
* [2025-10-20, 18:58:00](https://soylentnews.org/article.pl?sid=25/10/18/1822203&amp;from=rss) - [Oops! It&apos;s a Kernel Stack Use-After-Free: Exploiting NVIDIA&apos;s GPU Linux Drivers](https://soylentnews.org/article.pl?sid=25/10/18/1822203&amp;from=rss)
* [2025-10-20, 17:39:00](https://soylentnews.org/meta/article.pl?sid=25/10/20/098210&amp;from=rss) - [Soylent Update](https://soylentnews.org/meta/article.pl?sid=25/10/20/098210&amp;from=rss)
* [2025-10-20, 14:08:00](https://soylentnews.org/article.pl?sid=25/10/18/180239&amp;from=rss) - [Quantum Crystals Offer a Blueprint for the Future of Computing and Chemistry](https://soylentnews.org/article.pl?sid=25/10/18/180239&amp;from=rss)
* [2025-10-20, 09:26:00](https://soylentnews.org/article.pl?sid=25/10/18/1749235&amp;from=rss) - [JPMorgan Requires Staff to Hand Over Biometric Data to Access New Headquarters](https://soylentnews.org/article.pl?sid=25/10/18/1749235&amp;from=rss)
* [2025-10-20, 04:41:00](https://soylentnews.org/article.pl?sid=25/10/16/1551203&amp;from=rss) - [Tech Billionaires Seem to be Doom Prepping. Should We All be Worried?](https://soylentnews.org/article.pl?sid=25/10/16/1551203&amp;from=rss)
* [2025-10-19, 23:52:00](https://soylentnews.org/article.pl?sid=25/10/18/004205&amp;from=rss) - [Poverty in Australia Increases to 1 in 7 People, According to Report](https://soylentnews.org/article.pl?sid=25/10/18/004205&amp;from=rss)
* [2025-10-19, 19:06:00](https://soylentnews.org/article.pl?sid=25/10/18/002218&amp;from=rss) - [Windows 11 Update Breaks Localhost, Prompting Mass Uninstall Workaround](https://soylentnews.org/article.pl?sid=25/10/18/002218&amp;from=rss)
* [2025-10-19, 14:22:00](https://soylentnews.org/article.pl?sid=25/10/18/000230&amp;from=rss) - [Is AI Running Out of Training Data?](https://soylentnews.org/article.pl?sid=25/10/18/000230&amp;from=rss)
* [2025-10-19, 09:36:00](https://soylentnews.org/article.pl?sid=25/10/17/2341221&amp;from=rss) - [New Psychology Research Looks at Why We Help Our Friends When They Need It](https://soylentnews.org/article.pl?sid=25/10/17/2341221&amp;from=rss)
* [2025-10-19, 04:48:00](https://soylentnews.org/article.pl?sid=25/10/17/1219257&amp;from=rss) - [Understanding Volcanoes Better: Scientists Find Exact Locations of Magma Movement](https://soylentnews.org/article.pl?sid=25/10/17/1219257&amp;from=rss)
* [2025-10-19, 00:01:00](https://soylentnews.org/article.pl?sid=25/10/18/1745254&amp;from=rss) - [Comet Lemmon (Not Lemon) Nearing Peak](https://soylentnews.org/article.pl?sid=25/10/18/1745254&amp;from=rss)
* [2025-10-18, 19:16:00](https://soylentnews.org/article.pl?sid=25/10/16/1547215&amp;from=rss) - [GM to Take $1.6 Billion Hit as It Scales Back Electric Vehicle Operations](https://soylentnews.org/article.pl?sid=25/10/16/1547215&amp;from=rss)
* [2025-10-18, 14:27:00](https://soylentnews.org/article.pl?sid=25/10/16/1545234&amp;from=rss) - [Thousands of Customers Imperiled After Nation-State Ransacks F5’s Network](https://soylentnews.org/article.pl?sid=25/10/16/1545234&amp;from=rss)
* [2025-10-18, 09:43:00](https://soylentnews.org/article.pl?sid=25/10/16/1543247&amp;from=rss) - [Lasers and Gold Nanoparticles Enable on-Demand Crystal Growth for New Materials](https://soylentnews.org/article.pl?sid=25/10/16/1543247&amp;from=rss)
* [2025-10-18, 04:57:00](https://soylentnews.org/article.pl?sid=25/10/16/1538252&amp;from=rss) - [Why Signal&apos;s Post-Quantum Makeover is an Amazing Engineering Achievement](https://soylentnews.org/article.pl?sid=25/10/16/1538252&amp;from=rss)
* [2025-10-18, 00:18:00](https://soylentnews.org/article.pl?sid=25/10/16/1534249&amp;from=rss) - [FSF Librephone](https://soylentnews.org/article.pl?sid=25/10/16/1534249&amp;from=rss)
