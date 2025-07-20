# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Healthy Babies Born in Britain After Scientists Used DNA From Three People to Avoid Genetic Disease](https://science.slashdot.org/story/25/07/20/0328203/healthy-babies-born-in-britain-after-scientists-used-dna-from-three-people-to-avoid-genetic-disease?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A groundbreaking achievement in genetic science has enabled British scientists to use DNA from three individuals to prevent inherited diseases, resulting in the birth of healthy babies.

* [First Electronic-Photonic Quantum Chip Created In Commercial Foundry](https://hardware.slashdot.org/story/25/07/20/0042202/first-electronic-photonic-quantum-chip-created-in-commercial-foundry?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Researchers achieve a milestone by crafting the first electronic-photonic quantum chip in a commercial foundry, opening new doors for quantum processing technology.

* [Robot Metabolism: Toward Machines That Can Grow by Consuming Other Machines](https://www.science.org/doi/10.1126/sciadv.adu6897) - A novel area of robotics explores the concept of machines capable of growth through the consumption of other robotic elements, adding a new dimension to autonomy in AI systems.

* [Inside the Silicon Valley Push to Breed Super-Babies](https://science.slashdot.org/story/25/07/19/0457201/inside-the-silicon-valley-push-to-breed-super-babies?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Silicon Valley futurists are investigating genetic optimization techniques aimed at creating 'super-babies' as part of an ambitious new frontier for human advancement.

## AI and Machine Learning

* [LLM Architecture Comparison](https://magazine.sebastianraschka.com/p/the-big-llm-architecture-comparison) - A comparative analysis of large language model architectures offers insights into their designs, strengths, and potential use cases.

* [Coding with LLMs in the Summer of 2025 – an Update](https://antirez.com/news/154) - A detailed exploration of the progress and challenges developers face when coding with large language models during the ongoing AI boom.

## Society and Policy Issues

* [Payment Processors' Bar on Japanese Adult Content Endangers Democracy (2024)](https://automaton-media.com/en/news/nier-creator-speaks-out-against-payment-processors-pressuring-japanese-adult-content-platforms/) - Critics warn that financial institutions restricting Japanese adult content platforms could have broader implications for freedom of expression and democratic rights.

* [Leaders Are Using Appeals to Nostalgia, Nationalism to Attack Higher Education](https://theconversation.com/leaders-in-india-hungary-and-the-us-are-using-appeals-to-nostalgia-and-nationalism-to-attack-higher-education-258975) - A global trend reveals how political leaders in various countries manipulate cultural sentiments to undermine higher education institutions.

## Environmental and Scientific Discoveries

* [Mysterious Antimatter Physics Discovered at the Large Hadron Collider](https://www.scientificamerican.com/article/the-large-hadron-collider-discovers-antimatter-behaving-oddly-in-new-class/) - New findings at CERN's Large Hadron Collider provide unexpected insights into the peculiar behavior of antimatter, advancing our understanding of particle physics.

* [Industrial Waste is Turning Into Rock in Just Decades, Study Suggests](https://soylentnews.org/article.pl?sid=25/07/16/1725249&from=rss) - Researchers discover a surprising geological phenomenon as industrial waste solidifies into rock formations at an accelerated pace.

## Consumer and Corporate Trends

* [Amazon's Emissions Climbed 6% in 2024 on Data Center Buildout](https://www.datacenterknowledge.com/sustainability/amazon-s-emissions-climbed-6-in-2024-on-data-center-buildout) - Increased data center expansion significantly contributes to Amazon's growing carbon footprint, raising environmental concerns.

* [Beyond Meat Fights for Survival](https://foodinstitute.com/focus/beyond-meat-fights-for-survival/) - Challenges mount for Beyond Meat as the plant-based food industry faces decreasing demand and financial stresses.

## Cybersecurity and Privacy

* [Intel Has Discontinued Clear Linux, Effective Immediately](https://soylentnews.org/article.pl?sid=25/07/19/123202&from=rss) - Intel’s unexpected cessation of its Clear Linux OS has left many users searching for alternatives and speculating about the company's strategic transition.

* [Is Tor Trustworthy and Safe?](https://soylentnews.org/article.pl?sid=25/07/18/2350226&from=rss) - An investigation into the privacy promises and security vulnerabilities associated with the Tor network casts doubts on its reliability for safeguarding anonymity.

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

* [2025-07-20, 18:34:00](https://yro.slashdot.org/story/25/07/20/1559242/how-gmail-server-evidence-led-to-a-jury-verdict-of-232-million-for-wrongful-death?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Gmail Server Evidence Led to a Jury Verdict of $23.2 Million For Wrongful Death](https://yro.slashdot.org/story/25/07/20/1559242/how-gmail-server-evidence-led-to-a-jury-verdict-of-232-million-for-wrongful-death?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 18:29:06](https://news.ycombinator.com/item?id=44627900) - [Leaders are using appeals to nostalgia, nationalism to attack higher education](https://theconversation.com/leaders-in-india-hungary-and-the-us-are-using-appeals-to-nostalgia-and-nationalism-to-attack-higher-education-258975)
* [2025-07-20, 18:22:01](https://news.ycombinator.com/item?id=44627828) - [Payment processors&apos; bar on Japanese adult content endangers democracy (2024)](https://automaton-media.com/en/news/nier-creator-speaks-out-against-payment-processors-pressuring-japanese-adult-content-platforms/)
* [2025-07-20, 18:21:53](https://news.ycombinator.com/item?id=44627827) - [Mysterious Antimatter Physics Discovered at the Large Hadron Collider](https://www.scientificamerican.com/article/the-large-hadron-collider-discovers-antimatter-behaving-oddly-in-new-class/)
* [2025-07-20, 18:18:40](https://news.ycombinator.com/item?id=44627793) - [Stdio(3) change: FILE is now opaque (OpenBSD)](https://undeadly.org/cgi?action=article;sid=20250717103345)
* [2025-07-20, 18:13:42](https://news.ycombinator.com/item?id=44627746) - [Amazon&apos;s Emissions Climbed 6% in 2024 on Data Center Buildout](https://www.datacenterknowledge.com/sustainability/amazon-s-emissions-climbed-6-in-2024-on-data-center-buildout)
* [2025-07-20, 17:57:44](https://news.ycombinator.com/item?id=44627590) - [QuakeNotch, Quake Terminal on your MacBook&apos;s notch](https://quakenotch.com)
* [2025-07-20, 17:42:16](https://news.ycombinator.com/item?id=44627443) - [Rising Graduate Joblessness Is Mainly Affecting Men](https://www.edwardconard.com/macro-roundup/the-unemployment-rate-for-recent-male-college-graduates-22-27-has-risen-from-5-to-7-recent-male-graduates-are-now-unemployed-at-the-same-rate-as-their-non-graduate-counterparts/?view=detail)
* [2025-07-20, 17:34:00](https://tech.slashdot.org/story/25/07/20/1421220/deltas-boeing-767-makes-emergency-landing-as-engine-catches-fire-moments-after-takeoff?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Delta&apos;s Boeing 767 Makes Emergency Landing as Engine Catches Fire Moments After Takeoff](https://tech.slashdot.org/story/25/07/20/1421220/deltas-boeing-767-makes-emergency-landing-as-engine-catches-fire-moments-after-takeoff?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 17:16:36](https://news.ycombinator.com/item?id=44627211) - [Hacking a Toniebox](https://www.schafe-sind-bessere-rasenmaeher.de/tech/hack-all-the-things-toniebox/)
* [2025-07-20, 17:13:58](https://news.ycombinator.com/item?id=44627185) - [Master Foo and the Script Kiddie](https://soda.privatevoid.net/foo/arc/02.html)
* [2025-07-20, 17:11:43](https://news.ycombinator.com/item?id=44627158) - [Insights on Teufel&apos;s First Open-Source Speaker](https://blog.teufelaudio.com/visionary-mynds-insights-on-teufels-first-open-source-speaker/)
* [2025-07-20, 17:00:46](https://lobste.rs/s/ihmxdn/they_re_putting_blue_food_coloring) - [They&apos;re putting blue food coloring in everything](https://blog.foxtrotluna.social/theyre-putting-blue-food-coloring-in-everything/)
* [2025-07-20, 16:34:00](https://science.slashdot.org/story/25/07/19/0457201/inside-the-silicon-valley-push-to-breed-super-babies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Inside the Silicon Valley Push to Breed Super-Babies&apos;](https://science.slashdot.org/story/25/07/19/0457201/inside-the-silicon-valley-push-to-breed-super-babies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 16:33:46](https://news.ycombinator.com/item?id=44626789) - [\&quot;The Bitter Lesson\&quot; is wrong. Well sort of](https://assaf-pinhasi.medium.com/the-bitter-lesson-is-wrong-sort-of-a3d021864924)
* [2025-07-20, 16:15:17](https://lobste.rs/s/9pp08h/i_m_tired_talking_about_ai) - [I’m Tired of Talking About AI](https://paddy.carvers.com/posts/2025/07/ai/)
* [2025-07-20, 15:51:44](https://news.ycombinator.com/item?id=44626363) - [Speeding Up My ZSH Shell](https://scottspence.com/posts/speeding-up-my-zsh-shell)
* [2025-07-20, 15:49:00](https://soylentnews.org/article.pl?sid=25/07/19/123202&amp;from=rss) - [Intel Has Discontinued Clear Linux, Effective Immediately](https://soylentnews.org/article.pl?sid=25/07/19/123202&amp;from=rss)
* [2025-07-20, 15:18:26](https://lobste.rs/s/bj5yad/tour_microsoft_s_macbu_lab_2006) - [A tour of Microsoft&apos;s MacBU lab (2006)](https://davidweiss.blogspot.com/2006/04/tour-of-microsofts-mac-lab.html)
* [2025-07-20, 14:34:07](https://lobste.rs/s/hikcqp/rust_clippy_performance_status_update) - [Rust Clippy performance status update](https://blog.goose.love/posts/clippy-performance-status-update/)
* [2025-07-20, 14:33:56](https://lobste.rs/s/xx0k66/responsible_ai_enterprise_applications) - [Responsible AI in Enterprise Applications: A Practitioner&apos;s View](https://www.jjude.com/responsible-ai-in-enterprise-apps/)
* [2025-07-20, 14:17:00](https://slashdot.org/story/25/07/20/0557204/why-ibms-amazing-sliding-keyboard-thinkpad-701-never-survived-past-1995?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why IBM&apos;s Amazing &apos;Sliding Keyboard&apos; ThinkPad 701 Never Survived Past 1995](https://slashdot.org/story/25/07/20/0557204/why-ibms-amazing-sliding-keyboard-thinkpad-701-never-survived-past-1995?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 14:11:26](https://news.ycombinator.com/item?id=44625360) - [The old Caveman Chemistry website (1996-2000)](https://cavemanchemistry.com/oldcave/)
* [2025-07-20, 14:04:12](https://lobste.rs/s/7ykaux/introducing_xmlui) - [Introducing XMLUI](https://blog.jonudell.net/2025/07/18/introducing-xmlui/)
* [2025-07-20, 14:03:39](https://news.ycombinator.com/item?id=44625292) - [XMLUI](https://blog.jonudell.net/2025/07/18/introducing-xmlui/)
* [2025-07-20, 12:22:09](https://lobste.rs/s/6ifojq/coding_with_llms_summer_2025_update) - [Coding with LLMs in the summer of 2025 (an update)](https://antirez.com/news/154)
* [2025-07-20, 11:34:00](https://tech.slashdot.org/story/25/07/20/0119236/kde-plasma-finally-gets-rounded-bottom-window-corners?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [KDE Plasma Finally Gets Rounded Bottom Window Corners ](https://tech.slashdot.org/story/25/07/20/0119236/kde-plasma-finally-gets-rounded-bottom-window-corners?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 11:26:09](https://news.ycombinator.com/item?id=44624114) - [Digital vassals? French Government &apos;exposes citizens&apos; data to US&apos;](https://brusselssignal.eu/2025/07/digital-vassals-french-government-exposes-citizens-data-to-us/)
* [2025-07-20, 11:04:02](https://news.ycombinator.com/item?id=44623953) - [Coding with LLMs in the summer of 2025 – an update](https://antirez.com/news/154)
* [2025-07-20, 11:04:00](https://soylentnews.org/article.pl?sid=25/07/19/0033258&amp;from=rss) - [The Latest Windows PCs Remember Everything](https://soylentnews.org/article.pl?sid=25/07/19/0033258&amp;from=rss)
* [2025-07-20, 10:11:22](https://news.ycombinator.com/item?id=44623581) - [A Tour of Microsoft&apos;s Mac Lab (2006)](https://davidweiss.blogspot.com/2006/04/tour-of-microsofts-mac-lab.html)
* [2025-07-20, 09:40:45](https://lobste.rs/s/szcq9k/async_i_o_on_linux_durability) - [Async I/O on Linux and durability](https://blog.canoozie.net/async-i-o-on-linux-and-durability/)
* [2025-07-20, 08:59:19](https://news.ycombinator.com/item?id=44623207) - [The current hype around autonomous agents, and what actually works in production](https://utkarshkanwat.com/writing/betting-against-agents/)
* [2025-07-20, 08:17:13](https://news.ycombinator.com/item?id=44622999) - [Robot metabolism: Toward machines that can grow by consuming other machines](https://www.science.org/doi/10.1126/sciadv.adu6897)
* [2025-07-20, 08:13:15](https://news.ycombinator.com/item?id=44622973) - [A human metaphor for evaluating AI capability](https://mathstodon.xyz/@tao/114881418225852441)
* [2025-07-20, 08:02:00](https://news.slashdot.org/story/25/07/20/058235/jack-dorsey-pumps-10m-into-a-nonprofit-focused-on-open-source-social-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Jack Dorsey Pumps $10M Into a Nonprofit Focused on Open Source Social Media](https://news.slashdot.org/story/25/07/20/058235/jack-dorsey-pumps-10m-into-a-nonprofit-focused-on-open-source-social-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 06:56:01](https://news.ycombinator.com/item?id=44622608) - [LLM architecture comparison](https://magazine.sebastianraschka.com/p/the-big-llm-architecture-comparison)
* [2025-07-20, 06:20:02](https://news.ycombinator.com/item?id=44622454) - [Async I/O on Linux in databases](https://blog.canoozie.net/async-i-o-on-linux-and-durability/)
* [2025-07-20, 06:18:00](https://soylentnews.org/article.pl?sid=25/07/19/0023239&amp;from=rss) - [Infographic: Every Microsoft Acquisition Since 1986](https://soylentnews.org/article.pl?sid=25/07/19/0023239&amp;from=rss)
* [2025-07-20, 06:01:45](https://news.ycombinator.com/item?id=44622374) - [Show HN: MCP server for Blender that builds 3D scenes via natural language](https://blender-mcp-psi.vercel.app/)
* [2025-07-20, 04:02:00](https://science.slashdot.org/story/25/07/20/0328203/healthy-babies-born-in-britain-after-scientists-used-dna-from-three-people-to-avoid-genetic-disease?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Healthy Babies Born in Britain After Scientists Used DNA From Three People to Avoid Genetic Disease](https://science.slashdot.org/story/25/07/20/0328203/healthy-babies-born-in-britain-after-scientists-used-dna-from-three-people-to-avoid-genetic-disease?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 02:23:13](https://lobste.rs/s/3cigc9/structuring_large_clojure_codebases) - [Structuring large Clojure codebases with Biff](https://biffweb.com/p/structuring-large-codebases/)
* [2025-07-20, 02:23:00](https://games.slashdot.org/story/25/07/20/0219213/that-coldplay-kiss-cam-couple-just-became-a-vibe-coded-videogame---and-then-an-nft?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [That Coldplay &apos;Kiss Cam&apos; Couple Just Became a Vibe-Coded Videogame - and Then an NFT](https://games.slashdot.org/story/25/07/20/0219213/that-coldplay-kiss-cam-couple-just-became-a-vibe-coded-videogame---and-then-an-nft?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 01:33:00](https://soylentnews.org/article.pl?sid=25/07/18/2350226&amp;from=rss) - [Is Tor Trustworthy and Safe?](https://soylentnews.org/article.pl?sid=25/07/18/2350226&amp;from=rss)
* [2025-07-20, 00:44:00](https://hardware.slashdot.org/story/25/07/20/0042202/first-electronic-photonic-quantum-chip-created-in-commercial-foundry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [First Electronic-Photonic Quantum Chip Created In Commercial Foundry](https://hardware.slashdot.org/story/25/07/20/0042202/first-electronic-photonic-quantum-chip-created-in-commercial-foundry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 00:13:17](https://lobste.rs/s/sjzggo/parallelizing_physics_solver) - [Parallelizing the physics solver](https://youtu.be/Kvsvd67XUKw)
* [2025-07-19, 23:54:40](https://news.ycombinator.com/item?id=44620606) - [Beyond Meat fights for survival](https://foodinstitute.com/focus/beyond-meat-fights-for-survival/)
* [2025-07-19, 23:35:08](https://lobste.rs/s/jtd0b1/giving_up_on_element_matrix_org) - [Giving Up on Element &amp; Matrix.org](https://xn--gckvb8fzb.com/giving-up-on-element-and-matrixorg/)
* [2025-07-19, 22:50:40](https://lobste.rs/s/z2ehwo/borrowchecker_is_what_i_like_least_about) - [The borrowchecker is what I like the least about Rust](https://viralinstruction.com/posts/borrowchecker/)
* [2025-07-19, 22:34:00](https://science.slashdot.org/story/25/07/19/0252236/23andmes-data-sold-to-nonprofit-run-by-its-co-founder---and-i-still-dont-trust-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [23andMe&apos;s Data Sold to Nonprofit Run by Its Co-Founder - &apos;And I Still Don&apos;t Trust It&apos;](https://science.slashdot.org/story/25/07/19/0252236/23andmes-data-sold-to-nonprofit-run-by-its-co-founder---and-i-still-dont-trust-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-19, 22:11:12](https://lobste.rs/s/pv4vxu/why_you_should_choose_htmx_for_your_next) - [Why you should choose HTMX for your next web-based side project - and ditch the crufty MPA and complex SPA](https://hamy.xyz/blog/2024-02_htmx-for-side-projects)
* [2025-07-19, 21:34:00](https://news.slashdot.org/story/25/07/19/1958211/in-shallow-water-ships-trigger-seafloor-methane-emissions-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [In Shallow Water Ships Trigger Seafloor Methane Emissions, Study Finds](https://news.slashdot.org/story/25/07/19/1958211/in-shallow-water-ships-trigger-seafloor-methane-emissions-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-19, 21:19:56](https://lobste.rs/s/8wrzuo/metap_meta_programming_layer_for_python) - [metap: A Meta-Programming Layer for Python](https://sbaziotis.com/compilers/metap.html)
* [2025-07-19, 20:34:00](https://news.slashdot.org/story/25/07/19/1934209/android-phones-can-detect-earthquakes-before-the-ground-starts-shaking?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Android Phones Can Detect Earthquakes Before the Ground Starts Shaking](https://news.slashdot.org/story/25/07/19/1934209/android-phones-can-detect-earthquakes-before-the-ground-starts-shaking?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-19, 20:33:00](https://soylentnews.org/article.pl?sid=25/07/18/0948223&amp;from=rss) - [The Fascinating Science of Pain – and Why Everyone Feels it Differently](https://soylentnews.org/article.pl?sid=25/07/18/0948223&amp;from=rss)
* [2025-07-19, 19:43:23](https://news.ycombinator.com/item?id=44618687) - [Make Your Own Backup System – Part 1: Strategy Before Scripts](https://it-notes.dragas.net/2025/07/18/make-your-own-backup-system-part-1-strategy-before-scripts/)
* [2025-07-19, 19:41:15](https://lobste.rs/s/3isa6t/make_your_own_backup_system_part_1) - [Make Your Own Backup System – Part 1: Strategy Before Scripts](https://it-notes.dragas.net/2025/07/18/make-your-own-backup-system-part-1-strategy-before-scripts/)
* [2025-07-19, 19:34:00](https://tech.slashdot.org/story/25/07/19/187249/what-eyewitnesses-remembered-about-the-worlds-first-atomic-bomb-explosion-in-1945?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What Eyewitnesses Remembered About the World&apos;s First Atomic Bomb Explosion in 1945](https://tech.slashdot.org/story/25/07/19/187249/what-eyewitnesses-remembered-about-the-worlds-first-atomic-bomb-explosion-in-1945?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-19, 18:34:00](https://tech.slashdot.org/story/25/07/19/168254/boeing-fuel-switches-checked-as-critic-cites-a-similar-fuel-switch-cutoff-in-2019?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Boeing Fuel Switches Checked, as Critic Cites a Similar Fuel Switch Cutoff in 2019](https://tech.slashdot.org/story/25/07/19/168254/boeing-fuel-switches-checked-as-critic-cites-a-similar-fuel-switch-cutoff-in-2019?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-19, 17:34:00](https://it.slashdot.org/story/25/07/19/0659227/chinese-companies-now-authorized-to-conduct-foreign-cyberattacks-sell-access-to-government?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chinese Companies Now Authorized to Conduct Foreign Cyberattacks, Sell Access to Government](https://it.slashdot.org/story/25/07/19/0659227/chinese-companies-now-authorized-to-conduct-foreign-cyberattacks-sell-access-to-government?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-19, 17:31:13](https://lobste.rs/s/5f541e/legendary_software_rendering_era_with) - [Legendary Software Rendering Era with Sean Barrett](https://www.youtube.com/watch?v=T1tXepGXDDM)
* [2025-07-19, 17:24:39](https://lobste.rs/s/naiwvd/my_ultimate_self_hosting_setup) - [My Ultimate Self-hosting Setup](https://codecaptured.com/blog/my-ultimate-self-hosting-setup/)
* [2025-07-19, 16:57:09](https://lobste.rs/s/czx98y/rethinking_cli_interfaces_for_ai) - [Rethinking CLI interfaces for AI](https://www.notcheckmark.com/2025/07/rethinking-cli-interfaces-for-ai/)
* [2025-07-19, 15:50:00](https://soylentnews.org/article.pl?sid=25/07/18/0939219&amp;from=rss) - [FuguIta: OpenBSD Live CD - Desktop Environment Demo Version with XFCE v.4.20.0](https://soylentnews.org/article.pl?sid=25/07/18/0939219&amp;from=rss)
* [2025-07-19, 15:10:43](https://lobste.rs/s/47ckxy/using_leaked_data_examine) - [Using leaked data to examine vulnerabilities in SMS routing and SS7 signalling](https://medium.com/@lighthousereports/using-leaked-data-to-examine-vulnerabilities-in-sms-routing-and-ss7-signalling-8e30298491d9)
* [2025-07-19, 11:08:00](https://soylentnews.org/article.pl?sid=25/07/18/0920228&amp;from=rss) - [Most Warming This Century May Be Due To Air Pollution Cuts](https://soylentnews.org/article.pl?sid=25/07/18/0920228&amp;from=rss)
* [2025-07-19, 11:03:00](https://lobste.rs/s/cwmt11/do_you_understand_f_strings) - [Do you understand f-strings?](https://fstrings.wtf/)
* [2025-07-19, 08:26:20](https://lobste.rs/s/p0ylu1/linux_secure_boot_certificate) - [Linux and Secure Boot certificate expiration](https://lwn.net/SubscriberLink/1029767/43b62a7a7408c2a9/)
* [2025-07-19, 06:20:00](https://soylentnews.org/article.pl?sid=25/07/18/0136203&amp;from=rss) - [Two Guys Hated Using Comcast, So They Built Their Own Fiber ISP](https://soylentnews.org/article.pl?sid=25/07/18/0136203&amp;from=rss)
* [2025-07-19, 01:37:00](https://soylentnews.org/article.pl?sid=25/07/18/0124213&amp;from=rss) - [Radio Hobbyists, Rejoice! Good News for LoRa &amp; Mesh](https://soylentnews.org/article.pl?sid=25/07/18/0124213&amp;from=rss)
* [2025-07-18, 23:43:41](https://lobste.rs/s/vaqh5i/shutting_down_clear_linux_os) - [Shutting down Clear Linux OS](https://community.clearlinux.org/t/all-good-things-come-to-an-end-shutting-down-clear-linux-os/10716)
* [2025-07-18, 23:29:11](https://lobste.rs/s/f0um5j/async_rust_is_bad_language_2023) - [Async Rust Is A Bad Language (2023)](https://bitbashing.io/async-rust.html)
* [2025-07-18, 20:55:00](https://soylentnews.org/article.pl?sid=25/07/18/0111248&amp;from=rss) - [Drones, AI and Robot Pickers: Meet the Fully Autonomous Farm](https://soylentnews.org/article.pl?sid=25/07/18/0111248&amp;from=rss)
* [2025-07-18, 19:21:17](https://lobste.rs/s/oeuohp/asynchrony_is_not_concurrency) - [Asynchrony is not Concurrency](https://kristoff.it/blog/asynchrony-is-not-concurrency/)
* [2025-07-18, 19:13:24](https://lobste.rs/s/df2azc/firefox_patch_bin_librewolf_fix_bin_zen) - [firefox-patch-bin, librewolf-fix-bin and zen-browser-patched-bin AUR packages contain malware](https://lists.archlinux.org/archives/list/aur-general@lists.archlinux.org/thread/7EZTJXLIAQLARQNTMEW2HBWZYE626IFJ/)
* [2025-07-18, 16:10:00](https://soylentnews.org/article.pl?sid=25/07/18/011202&amp;from=rss) - [DOGE Staffer With Access to Americans&apos; Personal Data Leaked Private xAI API Key](https://soylentnews.org/article.pl?sid=25/07/18/011202&amp;from=rss)
* [2025-07-18, 11:26:00](https://soylentnews.org/article.pl?sid=25/07/17/127255&amp;from=rss) - [Intel Axes Thousands of Technicians and Engineers in Sweeping U.S. Layoffs](https://soylentnews.org/article.pl?sid=25/07/17/127255&amp;from=rss)
* [2025-07-18, 06:49:00](https://soylentnews.org/article.pl?sid=25/07/17/124242&amp;from=rss) - [Engineering the Origin of the Wheel](https://soylentnews.org/article.pl?sid=25/07/17/124242&amp;from=rss)
* [2025-07-18, 02:05:00](https://soylentnews.org/article.pl?sid=25/07/17/1148204&amp;from=rss) - [Nvidia Chips Become the First GPUs to Fall to Rowhammer Bit-Flip Attacks](https://soylentnews.org/article.pl?sid=25/07/17/1148204&amp;from=rss)
* [2025-07-18, 00:54:27](https://news.ycombinator.com/item?id=44600043) - [Laminar Flow Airfoil](http://www.aviation-history.com/theory/lam-flow.htm)
* [2025-07-17, 21:14:00](https://soylentnews.org/article.pl?sid=25/07/16/188244&amp;from=rss) - [Belkin Shows Tech Firms Getting Too Comfortable With Bricking Customers’ Stuff](https://soylentnews.org/article.pl?sid=25/07/16/188244&amp;from=rss)
* [2025-07-17, 16:32:00](https://soylentnews.org/article.pl?sid=25/07/16/182208&amp;from=rss) - [Holographic Ribbon Aims To Oust Magnetic Tape With 50-Year Life Span And 200Tb Per Cartridge](https://soylentnews.org/article.pl?sid=25/07/16/182208&amp;from=rss)
* [2025-07-17, 15:43:04](https://news.ycombinator.com/item?id=44594584) - [Show HN: Conductor, a Mac app that lets you run a bunch of Claude Codes at once](https://conductor.build/)
* [2025-07-17, 11:47:00](https://soylentnews.org/article.pl?sid=25/07/16/1758241&amp;from=rss) - [AI Slows Down Some Experienced Software Developers](https://soylentnews.org/article.pl?sid=25/07/16/1758241&amp;from=rss)
* [2025-07-17, 07:07:00](https://soylentnews.org/article.pl?sid=25/07/16/1725249&amp;from=rss) - [Industrial Waste is Turning Into Rock in Just Decades, Study Suggests](https://soylentnews.org/article.pl?sid=25/07/16/1725249&amp;from=rss)
* [2025-07-17, 02:22:00](https://soylentnews.org/article.pl?sid=25/07/15/1735235&amp;from=rss) - [Merger of Two Massive Black Holes is One for the Record Books](https://soylentnews.org/article.pl?sid=25/07/15/1735235&amp;from=rss)
* [2025-07-17, 02:19:09](https://news.ycombinator.com/item?id=44589064) - [The Geological Sublime](https://harpers.org/archive/2025/07/the-geological-sublime-lewis-hyde-deep-time/)
* [2025-07-16, 21:33:00](https://soylentnews.org/article.pl?sid=25/07/15/1642247&amp;from=rss) - [Nvidia CEO says China&apos;s Military Will Avoid U.S. AI Tech](https://soylentnews.org/article.pl?sid=25/07/15/1642247&amp;from=rss)
* [2025-07-16, 16:53:00](https://soylentnews.org/article.pl?sid=25/07/15/1528250&amp;from=rss) - [Texas Governor Says His Emails With Elon Musk are Too ‘Intimate or Embarrassing’ to Release](https://soylentnews.org/article.pl?sid=25/07/15/1528250&amp;from=rss)
* [2025-07-16, 15:25:30](https://news.ycombinator.com/item?id=44583316) - [Hungary&apos;s oldest library is fighting to save books from a beetle infestation](https://www.npr.org/2025/07/14/nx-s1-5467062/hungary-library-books-beetles)
* [2025-07-16, 14:25:42](https://news.ycombinator.com/item?id=44582730) - [Show HN: ggc – A terminal-based Git CLI written in Go](https://github.com/bmf-san/ggc)
* [2025-07-16, 12:15:00](https://soylentnews.org/article.pl?sid=25/07/15/0229246&amp;from=rss) - [Secretive Chinese Satellite Emerges in Surprising Orbit After 6-Day Vanishing Act](https://soylentnews.org/article.pl?sid=25/07/15/0229246&amp;from=rss)
* [2025-07-16, 07:34:00](https://soylentnews.org/article.pl?sid=25/07/14/1828216&amp;from=rss) - [Stopping The Rot When Good Software Goes Bad Means New Rules](https://soylentnews.org/article.pl?sid=25/07/14/1828216&amp;from=rss)
* [2025-07-16, 02:51:00](https://soylentnews.org/article.pl?sid=25/07/14/1819237&amp;from=rss) - [GPS On The Fritz? Britain And France Plot A Backup Plan](https://soylentnews.org/article.pl?sid=25/07/14/1819237&amp;from=rss)
