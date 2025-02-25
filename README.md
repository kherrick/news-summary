# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software Development

* [What would happen if we didn't use TCP or UDP?](https://github.com/Hawzen/hdp) - A thought experiment exploring alternatives to TCP and UDP and their implications. [Comments](https://lobste.rs/s/wrpt6v/what_would_happen_if_we_didn_t_use_tcp_udp).

* [How Core Git Developers Configure Git](https://blog.gitbutler.com/how-git-core-devs-configure-git/) - Insights into how Git core developers set up and manage their Git configurations. [Comments](https://news.ycombinator.com/item?id=43169435).

* [Transparency in Hardware/Software Interfaces](https://rfd.shared.oxide.computer/rfd/0552) - A discussion on open hardware/software collaborations to increase technical understanding. [Comments](https://lobste.rs/s/jzf4w9/transparency_hardware_software).

* [Smart Pointers Can't Solve Use-After-Free](http://jacko.io/smart_pointers.html) - Limitations of smart pointers in preventing common memory issues in software development. [Comments](https://lobste.rs/s/e8cnqe/smart_pointers_can_t_solve_use_after_free).

## Artificial Intelligence and Machine Learning

* [Anthropic Launches the World's First 'Hybrid Reasoning' AI Model](https://developers.slashdot.org/story/25/02/24/213202/anthropic-launches-the-worlds-first-hybrid-reasoning-ai-model?utm_source=rss1.0mainlinkanon&utm_medium=feed) - An innovative AI combining different reasoning techniques for advanced problem-solving. [Comments](https://developers.slashdot.org/comments.pl?sid=25/02/24/213202).

* [How to Backdoor Large Language Models](https://soylentnews.org/article.pl?sid=25/02/24/0715224&from=rss) - A study highlighting vulnerabilities in large language models and how they can be exploited. [Comments](https://soylentnews.org/comments.pl?sid=25/02/24/0715224&from=rss).

* [Google's AI Previews Erode the Internet, Edtech Company Says In Lawsuit](https://yro.slashdot.org/story/25/02/24/2327231/googles-ai-previews-erode-the-internet-edtech-company-says-in-lawsuit?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Legal challenges against Google's use of AI previews by an Edtech company. [Comments](https://yro.slashdot.org/comments.pl?sid=25/02/24/2327231).

## Data Privacy and Security

* [New Zealand Company’s ‘Impossible-to-Hack’ Security Turns Out to Be No Security at All](https://jltee.substack.com/p/new-zealand-companys-impossible-to-hack-security) - A case study on misleading claims of security robustness. [Comments](https://lobste.rs/s/hfrpwt/new_zealand_company_s_impossible_hack).

* [Xcode Constantly Phones Home](https://lapcatsoftware.com/articles/2025/2/5.html) - Examination of Xcode's data-sharing practices and implications for developers. [Comments](https://news.ycombinator.com/item?id=43168589).

* [How to change your settings to make yourself less valuable to Meta](https://johnoliverwantsyourraterotica.com/) - Guidance on protecting your online privacy from corporate data collection. [Comments](https://news.ycombinator.com/item?id=43167936).

## Legal and Regulatory Developments

* [Theranos Founder Elizabeth Holmes' Fraud Convictions Upheld](https://science.slashdot.org/story/25/02/24/2319218/theranos-founder-elizabeth-holmes-fraud-convictions-upheld?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A court ruling affirming Holmes' fraudulent activities in the biotech industry. [Comments](https://science.slashdot.org/comments.pl?sid=25/02/24/2319218).

* [VPN Providers Consider Exiting France Over 'Dangerous' Blocking Demands](https://it.slashdot.org/story/25/02/24/2350211/vpn-providers-consider-exiting-france-over-dangerous-blocking-demands?utm_source=rss1.0mainlinkanon&utm_medium=feed) - French regulatory decisions causing tensions with VPN providers. [Comments](https://it.slashdot.org/comments.pl?sid=25/02/24/2350211).

* [All 50 States Have Now Introduced Right to Repair Legislation](https://news.slashdot.org/story/25/02/25/036255/all-50-states-have-now-introduced-right-to-repair-legislation?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Momentum growing across the USA for consumer repair rights. [Comments](https://news.slashdot.org/comments.pl?sid=25/02/25/036255).

## Science and Research

* [Astronomers Uncover The Topsy-Turvy Atmosphere Of A Distant Planet](https://soylentnews.org/article.pl?sid=25/02/24/0723218&from=rss) - New findings about the chaotic atmosphere of a far-off exoplanet. [Comments](https://soylentnews.org/comments.pl?sid=25/02/24/0723218).

* [Student refines 100-year-old math problem, expanding wind energy possibilities](https://www.psu.edu/news/engineering/story/student-refines-100-year-old-math-problem-expanding-wind-energy-possibilities) - Revisions to classical mathematics enhance renewable energy efficiency. [Comments](https://news.ycombinator.com/item?id=43162544).

* [After 20 Years, Math Couple Solves Major Group Theory Problem](https://soylentnews.org/article.pl?sid=25/02/23/1133234&from=rss) - Breakthrough research in mathematical group theory by a husband-and-wife team. [Comments](https://soylentnews.org/comments.pl?sid=25/02/23/1133234).

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

* [2025-02-25, 09:57:02](https://lobste.rs/s/wrpt6v/what_would_happen_if_we_didn_t_use_tcp_udp) - [What would happen if we didn't use TCP or UDP?](https://github.com/Hawzen/hdp)
* [2025-02-25, 09:10:11](https://lobste.rs/s/ige5d6/tcl_tk_application_binaries_through_go) - [Tcl/Tk application binaries through Go](https://wiki.tcl-lang.org/page/Tcl%2FTk+application+binaries+through+Go)
* [2025-02-25, 08:17:11](https://news.ycombinator.com/item?id=43169435) - [How Core Git Developers Configure Git](https://blog.gitbutler.com/how-git-core-devs-configure-git/)
* [2025-02-25, 07:37:00](https://soylentnews.org/article.pl?sid=25/02/24/0728229&from=rss) - [Building a Chipmaking Fab in the US Costs Twice as Much, Takes Twice as Long as in Taiwan](https://soylentnews.org/article.pl?sid=25/02/24/0728229&from=rss)
* [2025-02-25, 07:13:23](https://news.ycombinator.com/item?id=43169103) - [What would happen if we didn't use TCP or UDP?](https://github.com/Hawzen/hdp)
* [2025-02-25, 07:00:00](https://news.slashdot.org/story/25/02/25/036255/all-50-states-have-now-introduced-right-to-repair-legislation?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [All 50 States Have Now Introduced Right to Repair Legislation](https://news.slashdot.org/story/25/02/25/036255/all-50-states-have-now-introduced-right-to-repair-legislation?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-25, 05:43:30](https://news.ycombinator.com/item?id=43168589) - [Xcode Constantly Phones Home](https://lapcatsoftware.com/articles/2025/2/5.html)
* [2025-02-25, 05:30:02](https://lobste.rs/s/39gbln/future_fast_code_giving_hardware_what_it) - [The future of fast code: giving hardware what it wants](https://www.youtube.com/watch?v=vU3ryvZYlkk)
* [2025-02-25, 05:09:40](https://lobste.rs/s/r8lrfk/other_kinds_talks) - [Other kinds of talks](https://www.scattered-thoughts.net/writing/other-kinds-of-talks/)
* [2025-02-25, 04:47:19](https://lobste.rs/s/e8cnqe/smart_pointers_can_t_solve_use_after_free) - [Smart Pointers Can't Solve Use-After-Free](http://jacko.io/smart_pointers.html)
* [2025-02-25, 03:47:37](https://news.ycombinator.com/item?id=43167936) - [How to change your settings to make yourself less valuable to Meta](https://johnoliverwantsyourraterotica.com/)
* [2025-02-25, 03:36:41](https://news.ycombinator.com/item?id=43167865) - [History of CAD – David Weisberg](https://www.shapr3d.com/blog/history-of-cad)
* [2025-02-25, 03:30:00](https://it.slashdot.org/story/25/02/24/2350211/vpn-providers-consider-exiting-france-over-dangerous-blocking-demands?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [VPN Providers Consider Exiting France Over 'Dangerous' Blocking Demands](https://it.slashdot.org/story/25/02/24/2350211/vpn-providers-consider-exiting-france-over-dangerous-blocking-demands?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-25, 02:51:00](https://soylentnews.org/article.pl?sid=25/02/24/0723218&from=rss) - [Astronomers Uncover The Topsy-Turvy Atmosphere Of A Distant Planet](https://soylentnews.org/article.pl?sid=25/02/24/0723218&from=rss)
* [2025-02-25, 02:27:29](https://news.ycombinator.com/item?id=43167373) - [DeepSeek open source DeepEP – library for MoE training and Inference](https://github.com/deepseek-ai/DeepEP)
* [2025-02-25, 01:40:14](https://news.ycombinator.com/item?id=43167087) - [DigiCert: Threat of legal action to stifle Bugzilla discourse](https://bugzilla.mozilla.org/show_bug.cgi?id=1950144)
* [2025-02-25, 01:40:00](https://hardware.slashdot.org/story/25/02/24/2342219/microsoft-trims-more-cpus-from-windows-11-compatibility-list?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Trims More CPUs From Windows 11 Compatibility List](https://hardware.slashdot.org/story/25/02/24/2342219/microsoft-trims-more-cpus-from-windows-11-compatibility-list?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-25, 01:28:25](https://news.ycombinator.com/item?id=43166995) - [The HP-35: Consumer Electronics, an Origin Story](http://codex99.com/design/the-hp35.html)
* [2025-02-25, 01:21:49](https://lobste.rs/s/mmn0eh/canadian_vps_review) - [Canadian VPS Review](https://lukecyca.com/2025/canadian-vps-review.html)
* [2025-02-25, 01:09:43](https://lobste.rs/s/hfrpwt/new_zealand_company_s_impossible_hack) - [New Zealand Company’s ‘Impossible-to-Hack’ Security Turns Out to Be No Security at All](https://jltee.substack.com/p/new-zealand-companys-impossible-to-hack-security)
* [2025-02-25, 01:00:00](https://yro.slashdot.org/story/25/02/24/2327231/googles-ai-previews-erode-the-internet-edtech-company-says-in-lawsuit?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google's AI Previews Erode the Internet, Edtech Company Says In Lawsuit](https://yro.slashdot.org/story/25/02/24/2327231/googles-ai-previews-erode-the-internet-edtech-company-says-in-lawsuit?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-25, 00:59:09](https://news.ycombinator.com/item?id=43166830) - [Everyone at NSF overseeing the Platforms for Wireless Experimentation is gone](https://discuss.systems/@ricci/114059690609284323)
* [2025-02-25, 00:46:43](https://news.ycombinator.com/item?id=43166761) - [It's still worth blogging in the age of AI](https://www.gilesthomas.com/2025/02/blogging-in-the-age-of-ai)
* [2025-02-25, 00:20:00](https://science.slashdot.org/story/25/02/24/2319218/theranos-founder-elizabeth-holmes-fraud-convictions-upheld?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Theranos Founder Elizabeth Holmes' Fraud Convictions Upheld](https://science.slashdot.org/story/25/02/24/2319218/theranos-founder-elizabeth-holmes-fraud-convictions-upheld?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-24, 23:52:33](https://news.ycombinator.com/item?id=43166362) - [Clean Code vs. A Philosophy Of Software Design](https://github.com/johnousterhout/aposd-vs-clean-code/blob/main/README.md)
* [2025-02-24, 23:40:00](https://tech.slashdot.org/story/25/02/24/2149206/dutch-software-firm-bird-to-leave-europe-due-to-onerous-regulations?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Dutch Software Firm Bird To Leave Europe Due To Onerous Regulations](https://tech.slashdot.org/story/25/02/24/2149206/dutch-software-firm-bird-to-leave-europe-due-to-onerous-regulations?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-24, 23:00:00](https://tech.slashdot.org/story/25/02/24/2142219/perplexity-teases-ai-web-browser-called-comet?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Perplexity Teases AI Web Browser Called Comet](https://tech.slashdot.org/story/25/02/24/2142219/perplexity-teases-ai-web-browser-called-comet?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-24, 22:20:00](https://tech.slashdot.org/story/25/02/24/2136232/att-and-verizon-connect-first-cellphone-to-satellite-video-calls?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [AT&amp;T and Verizon Connect First Cellphone-To-Satellite Video Calls](https://tech.slashdot.org/story/25/02/24/2136232/att-and-verizon-connect-first-cellphone-to-satellite-video-calls?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-24, 22:04:00](https://soylentnews.org/article.pl?sid=25/02/24/0715224&from=rss) - [How to Backdoor Large Language Models](https://soylentnews.org/article.pl?sid=25/02/24/0715224&from=rss)
* [2025-02-24, 21:40:00](https://developers.slashdot.org/story/25/02/24/213202/anthropic-launches-the-worlds-first-hybrid-reasoning-ai-model?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Anthropic Launches the World's First 'Hybrid Reasoning' AI Model](https://developers.slashdot.org/story/25/02/24/213202/anthropic-launches-the-worlds-first-hybrid-reasoning-ai-model?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-24, 21:25:15](https://news.ycombinator.com/item?id=43165112) - [“The closer to the train station, the worse the kebab” – a “study”](https://www.jmspae.se/write-ups/kebabs-train-stations/)
* [2025-02-24, 20:58:00](https://it.slashdot.org/story/25/02/24/2058254/microsoft-quietly-launches-ad-supported-version-of-office-apps-for-windows?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Quietly Launches Ad-Supported Version of Office Apps for Windows](https://it.slashdot.org/story/25/02/24/2058254/microsoft-quietly-launches-ad-supported-version-of-office-apps-for-windows?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-24, 20:24:31](https://lobste.rs/s/kgzd0w/xcode_constantly_phones_home) - [Xcode constantly phones home](https://lapcatsoftware.com/articles/2025/2/5.html)
* [2025-02-24, 20:22:52](https://news.ycombinator.com/item?id=43164499) - [Closing the \"green gap\": energy savings from the math of the landscape function](https://terrytao.wordpress.com/2025/02/23/closing-the-green-gap-from-the-mathematics-of-the-landscape-function-to-lower-electricity-costs-for-households/)
* [2025-02-24, 20:21:56](https://lobste.rs/s/elf44b/breaking_into_dozens_apartment) - [Breaking into dozens of apartment buildings in five minutes on my phone](https://www.ericdaigle.ca/posts/breaking-into-dozens-of-apartments-in-five-minutes/)
* [2025-02-24, 19:53:11](https://lobste.rs/s/gbx4tl/how_core_git_developers_configure_git) - [How Core Git Developers Configure Git](https://blog.gitbutler.com/how-git-core-devs-configure-git/)
* [2025-02-24, 19:10:00](https://slashdot.org/story/25/02/24/1847230/ai-reshapes-corporate-workforce-as-companies-halt-traditional-hiring?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [AI Reshapes Corporate Workforce as Companies Halt Traditional Hiring](https://slashdot.org/story/25/02/24/1847230/ai-reshapes-corporate-workforce-as-companies-halt-traditional-hiring?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-24, 18:57:26](https://lobste.rs/s/ohdqzz/least_secure_totp_code_possible) - [The least secure TOTP code possible](https://shkspr.mobi/blog/2025/02/the-least-secure-totp-code-possible/)
* [2025-02-24, 18:33:00](https://news.slashdot.org/story/25/02/24/1833222/ellisons-half-billion-dollar-quest-to-change-farming-has-been-a-bust?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Ellison's Half-Billion-Dollar Quest To Change Farming Has Been a Bust](https://news.slashdot.org/story/25/02/24/1833222/ellisons-half-billion-dollar-quest-to-change-farming-has-been-a-bust?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-24, 18:28:59](https://news.ycombinator.com/item?id=43163011) - [Claude 3.7 Sonnet and Claude Code](https://www.anthropic.com/news/claude-3-7-sonnet)
* [2025-02-24, 18:27:49](https://news.ycombinator.com/item?id=43162995) - [The best way to use text embeddings portably is with Parquet and Polars](https://minimaxir.com/2025/02/embeddings-parquet/)
* [2025-02-24, 17:51:51](https://lobste.rs/s/qefnfl/strong_opinions_on_url_design) - [Strong Opinions on URL Design](https://vale.rocks/posts/strong-opinions-on-url-design)
* [2025-02-24, 17:49:58](https://news.ycombinator.com/item?id=43162544) - [Student refines 100-year-old math problem, expanding wind energy possibilities](https://www.psu.edu/news/engineering/story/student-refines-100-year-old-math-problem-expanding-wind-energy-possibilities)
* [2025-02-24, 17:36:00](https://news.slashdot.org/story/25/02/24/1736218/more-than-half-of-countries-are-ignoring-biodiversity-pledges?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [More Than Half of Countries Are Ignoring Biodiversity Pledges](https://news.slashdot.org/story/25/02/24/1736218/more-than-half-of-countries-are-ignoring-biodiversity-pledges?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-24, 17:33:56](https://news.ycombinator.com/item?id=43162340) - [Show HN: I made a site to tell the time in corporate](https://corporate.watch)
* [2025-02-24, 17:22:01](https://lobste.rs/s/ocmai4/introducing_fullstack_bench) - [Introducing Fullstack-Bench](https://stack.convex.dev/introducing-fullstack-bench)
* [2025-02-24, 17:20:00](https://soylentnews.org/article.pl?sid=25/02/24/0713223&from=rss) - [Bird Flu Endemic in America Cows. Found in Rats](https://soylentnews.org/article.pl?sid=25/02/24/0713223&from=rss)
* [2025-02-24, 17:15:25](https://lobste.rs/s/jzf4w9/transparency_hardware_software) - [Transparency in Hardware/Software Interfaces](https://rfd.shared.oxide.computer/rfd/0552)
* [2025-02-24, 16:42:31](https://lobste.rs/s/xcqfp7/philosophy_software_design_vs_clean_code) - [\"A Philosophy of Software Design\" vs \"Clean Code\"](https://github.com/johnousterhout/aposd-vs-clean-code/blob/main/README.md)
* [2025-02-24, 16:42:00](https://slashdot.org/story/25/02/24/1639237/software-firm-bird-to-leave-europe-due-to-onerous-regulations-in-ai-era-says-ceo?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Software Firm Bird To Leave Europe Due To Onerous Regulations in AI Era, Says CEO](https://slashdot.org/story/25/02/24/1639237/software-firm-bird-to-leave-europe-due-to-onerous-regulations-in-ai-era-says-ceo?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-24, 16:22:10](https://news.ycombinator.com/item?id=43161332) - [Launch HN: SubImage (YC W25) – See your infra from an attacker's perspective](https://news.ycombinator.com/item?id=43161332)
* [2025-02-24, 16:11:06](https://news.ycombinator.com/item?id=43161188) - [Larry Ellison's half-billion-dollar quest to change farming](https://www.wsj.com/tech/larry-ellison-hawaii-greenhouse-farm-food-2d260e1f)
* [2025-02-24, 16:05:00](https://tech.slashdot.org/story/25/02/24/165243/microsoft-dropped-some-ai-data-center-leases-td-cowen-says?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Dropped Some AI Data Center Leases, TD Cowen Says](https://tech.slashdot.org/story/25/02/24/165243/microsoft-dropped-some-ai-data-center-leases-td-cowen-says?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-24, 15:48:16](https://news.ycombinator.com/item?id=43160884) - [Breaking into apartment buildings in five minutes on my phone](https://www.ericdaigle.ca/posts/breaking-into-dozens-of-apartments-in-five-minutes/)
* [2025-02-24, 15:40:03](https://news.ycombinator.com/item?id=43160779) - [Introduction to Stochastic Calculus](https://jiha-kim.github.io/posts/introduction-to-stochastic-calculus/)
* [2025-02-24, 14:04:58](https://lobste.rs/s/pjtizh/dropshot_expose_rest_apis_from_rust) - [dropshot: expose REST APIs from a Rust program](https://github.com/oxidecomputer/dropshot)
* [2025-02-24, 12:51:28](https://lobste.rs/s/uz8tlz/nil_channels_go) - [Nil channels in Go](https://vishnubharathi.codes/blog/nil-channels-in-go/)
* [2025-02-24, 12:32:00](https://soylentnews.org/article.pl?sid=25/02/24/078229&from=rss) - [AMD Could Block the Sale of Intel Due to a Cross-Licensing Agreement](https://soylentnews.org/article.pl?sid=25/02/24/078229&from=rss)
* [2025-02-24, 12:15:58](https://news.ycombinator.com/item?id=43158660) - [Show HN: I built an app to stop me doomscrolling by touching grass](https://touchgrass.now/)
* [2025-02-24, 11:48:31](https://lobste.rs/s/d3shnw/mathb_is_shutting_down) - [MathB.in Is Shutting Down](https://susam.net/mathbin-is-shutting-down.html)
* [2025-02-24, 11:45:15](https://lobste.rs/s/iem7jw/soar_distro_agnostic_package_manager) - [Soar – Distro Agnostic Package Manager, HomeBrew (LinuxBrew) Done Right](https://github.com/pkgforge/soar)
* [2025-02-24, 11:21:22](https://news.ycombinator.com/item?id=43158262) - [Freelancing: How I found clients, part 1](https://crocspace.substack.com/p/freelancing-how-i-got-clients-part)
* [2025-02-24, 09:56:25](https://lobste.rs/s/y9eyjq/why_clojure) - [Why Clojure?](https://gaiwan.co/blog/why-clojure/)
* [2025-02-24, 08:07:39](https://lobste.rs/s/ta33pc/calendar_txt_2021) - [Calendar.txt (2021)](https://terokarvinen.com/2021/calendar-txt/)
* [2025-02-24, 07:47:00](https://soylentnews.org/article.pl?sid=25/02/24/074241&from=rss) - [Apple Pulls End-to-End Encryption From UK Rather Than Provide Government a Backdoor](https://soylentnews.org/article.pl?sid=25/02/24/074241&from=rss)
* [2025-02-24, 07:41:10](https://lobste.rs/s/gedr6u/bitwarden_authenticator) - [Bitwarden Authenticator](https://bitwarden.com/products/authenticator/)
* [2025-02-24, 05:34:00](https://soylentnews.org/meta/article.pl?sid=25/02/21/1425224&from=rss) - [Adoption of Site Documentation - THIS IS THE VOTE - RESTORED](https://soylentnews.org/meta/article.pl?sid=25/02/21/1425224&from=rss)
* [2025-02-24, 03:03:00](https://soylentnews.org/article.pl?sid=25/02/23/1133234&from=rss) - [After 20 Years, Math Couple Solves Major Group Theory Problem](https://soylentnews.org/article.pl?sid=25/02/23/1133234&from=rss)
* [2025-02-24, 02:01:53](https://lobste.rs/s/9b7odp/macos_for_kde_users) - [MacOS for KDE Users](https://matklad.github.io/2025/02/23/macos-for-kde-users.html)
* [2025-02-23, 22:14:00](https://soylentnews.org/article.pl?sid=25/02/22/1716217&from=rss) - [NVidia to Consume 77% of Wafers Used for AI Processors in 2025](https://soylentnews.org/article.pl?sid=25/02/22/1716217&from=rss)
* [2025-02-23, 18:08:46](https://lobste.rs/s/on1dfb/emacs_30_1_released) - [Emacs 30.1 released](https://lists.gnu.org/archive/html/emacs-devel/2025-02/msg00997.html)
* [2025-02-23, 17:37:00](https://soylentnews.org/politics/article.pl?sid=25/02/22/1638251&from=rss) - [Trump to Introduce 25% and 'Higher' Tariff on Imported Semiconductors but the Timing is Unclear](https://soylentnews.org/politics/article.pl?sid=25/02/22/1638251&from=rss)
* [2025-02-23, 17:16:14](https://lobste.rs/s/w2jpto/removing_jeff_bezos_from_my_bed) - [Removing Jeff Bezos From My Bed](https://trufflesecurity.com/blog/removing-jeff-bezos-from-my-bed)
* [2025-02-23, 12:55:00](https://soylentnews.org/article.pl?sid=25/02/22/1636233&from=rss) - [Electric Truck-Maker Nikola Falls Into Bankruptcy Joining a Procession of Failed EV Startups](https://soylentnews.org/article.pl?sid=25/02/22/1636233&from=rss)
* [2025-02-23, 08:05:00](https://soylentnews.org/article.pl?sid=25/02/22/1634220&from=rss) - [Humane's AI Pin is No More and Owners are Left With Nothing](https://soylentnews.org/article.pl?sid=25/02/22/1634220&from=rss)
* [2025-02-23, 03:24:00](https://soylentnews.org/article.pl?sid=25/02/22/1627256&from=rss) - [The Odds of a City-Killer Asteroid Impact in 2032 Keep Rising](https://soylentnews.org/article.pl?sid=25/02/22/1627256&from=rss)
* [2025-02-22, 22:40:00](https://soylentnews.org/article.pl?sid=25/02/22/1622206&from=rss) - [HP  Deliberately Adds 15 Minutes Wait Time for Support Calls](https://soylentnews.org/article.pl?sid=25/02/22/1622206&from=rss)
* [2025-02-22, 17:55:00](https://soylentnews.org/article.pl?sid=25/02/21/056231&from=rss) - [Webcomic Author AndyOh of TMI-Comic Has Died](https://soylentnews.org/article.pl?sid=25/02/21/056231&from=rss)
* [2025-02-22, 17:30:11](https://news.ycombinator.com/item?id=43141037) - [US Space Force reveals first look at secretive X-37B space plane in orbit](https://www.space.com/space-force-x-37b-1st-photo-from-orbit-earth)
* [2025-02-22, 13:14:00](https://soylentnews.org/article.pl?sid=25/02/21/055211&from=rss) - [Google's New AI Generates Hypotheses for Researchers](https://soylentnews.org/article.pl?sid=25/02/21/055211&from=rss)
* [2025-02-22, 08:31:00](https://soylentnews.org/article.pl?sid=25/02/21/0455231&from=rss) - [Gnome 48 Goes Into Beta, Should Launch in a Month](https://soylentnews.org/article.pl?sid=25/02/21/0455231&from=rss)
* [2025-02-22, 08:27:56](https://news.ycombinator.com/item?id=43137248) - [Show HN: While the world builds AI Agents, I'm just building calculators](https://www.calcverse.live)
* [2025-02-22, 03:48:00](https://soylentnews.org/article.pl?sid=25/02/21/0429228&from=rss) - [DRAM and NAND Prices Are Expected to Rise in the Second Half of 2025](https://soylentnews.org/article.pl?sid=25/02/21/0429228&from=rss)
* [2025-02-21, 23:01:00](https://soylentnews.org/article.pl?sid=25/02/20/181218&from=rss) - [12VHPWR Adapters Sporting Heatsinks and Thermal Pads Show How Problematic the Connector Is](https://soylentnews.org/article.pl?sid=25/02/20/181218&from=rss)
* [2025-02-21, 19:45:42](https://news.ycombinator.com/item?id=43132040) - [Tuta Launches Post Quantum Cryptography for Email (2024)](https://tuta.com/blog/post-quantum-cryptography)
* [2025-02-21, 18:17:00](https://soylentnews.org/article.pl?sid=25/02/20/169239&from=rss) - [Intel's Head of Datacenter and AI Unit Leaves to Lead Nokia](https://soylentnews.org/article.pl?sid=25/02/20/169239&from=rss)
* [2025-02-21, 15:17:12](https://news.ycombinator.com/item?id=43128392) - [I ate and reviewed every snack in our office kitchen](https://www.getlago.com/blog/office-snacks)
* [2025-02-21, 14:46:13](https://news.ycombinator.com/item?id=43128021) - [Writing a DSL in Lua (2015)](https://leafo.net/guides/dsl-in-lua.html)
* [2025-02-21, 14:20:00](https://soylentnews.org/meta/article.pl?sid=25/02/21/1414222&from=rss) - [Soylent Update - Adoption of Proposed Documents - How the Vote Will be Managed](https://soylentnews.org/meta/article.pl?sid=25/02/21/1414222&from=rss)
* [2025-02-21, 13:32:00](https://soylentnews.org/article.pl?sid=25/02/20/165216&from=rss) - [What Would Happen If a (Small) Black Hole Passed Through Your Body ?](https://soylentnews.org/article.pl?sid=25/02/20/165216&from=rss)
* [2025-02-21, 10:38:06](https://news.ycombinator.com/item?id=43126052) - [Favicon Hasher – An Osint Tool](https://kriztalz.sh/favicon-hash/)
* [2025-02-21, 07:44:00](https://soylentnews.org/article.pl?sid=25/02/20/137208&from=rss) - [A Single Protein May Have Helped Shape the Emergence of Spoken Language](https://soylentnews.org/article.pl?sid=25/02/20/137208&from=rss)
* [2025-02-21, 02:59:00](https://soylentnews.org/article.pl?sid=25/02/20/131244&from=rss) - [Burning in Woman's Legs Turned Out to be Slug Parasites Migrating to Her Brain](https://soylentnews.org/article.pl?sid=25/02/20/131244&from=rss)
