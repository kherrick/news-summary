# [News Summary](https://kherrick.github.io/news-summary/)

## Emerging Technologies and Innovations

* [Anthropic Launches the World's First 'Hybrid Reasoning' AI Model](https://developers.slashdot.org/story/25/02/24/213202/anthropic-launches-the-worlds-first-hybrid-reasoning-ai-model?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=43165112))

* [Perplexity Teases AI Web Browser Called Comet](https://tech.slashdot.org/story/25/02/24/2142219/perplexity-teases-ai-web-browser-called-comet?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=43164794))

* [AT&T and Verizon Connect First Cellphone-To-Satellite Video Calls](https://tech.slashdot.org/story/25/02/24/2136232/att-and-verizon-connect-first-cellphone-to-satellite-video-calls?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=43164499))

* [Introducing Fullstack-Bench](https://stack.convex.dev/introducing-fullstack-bench) ([comments](https://lobste.rs/s/ocmai4/introducing_fullstack_bench))

## Controversies and Challenges

* [Theranos Founder Elizabeth Holmes' Fraud Convictions Upheld](https://science.slashdot.org/story/25/02/24/2319218/theranos-founder-elizabeth-holmes-fraud-convictions-upheld?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=43166742))

* [Dutch Software Firm Bird To Leave Europe Due To Onerous Regulations](https://tech.slashdot.org/story/25/02/24/2149206/dutch-software-firm-bird-to-leave-europe-due-to-onerous-regulations?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=43166362))

* [How to Backdoor Large Language Models](https://soylentnews.org/article.pl?sid=25/02/24/0715224&from=rss) ([comments](https://lobste.rs/s/mnj6yg/tech_hype_cycles))

## Mathematics and Scientific Breakthroughs

* [Student refines 100-year-old math problem, expanding wind energy possibilities](https://www.psu.edu/news/engineering/story/student-refines-100-year-old-math-problem-expanding-wind-energy-possibilities) ([comments](https://news.ycombinator.com/item?id=43162544))

* [Closing the 'green gap': energy savings from the math of the landscape function](https://terrytao.wordpress.com/2025/02/23/closing-the-green-gap-from-the-mathematics-of-the-landscape-function-to-lower-electricity-costs-for-households/) ([comments](https://lobste.rs/s/wzpqit/web_on_mobile))

* [After 20 Years, Math Couple Solves Major Group Theory Problem](https://soylentnews.org/article.pl?sid=25/02/23/1133234&from=rss) ([comments](https://news.ycombinator.com/item?id=43158332))

## Cultural and Social Topics

* [US friendship is in freefall – shredding bonds and cutting lives short](https://nypost.com/2025/02/24/opinion/friendship-in-america-is-in-freefall-and-its-killing-us/) ([comments](https://news.ycombinator.com/item?id=43166761))

* [Show HN: I made a site to tell the time in corporate](https://corporate.watch) ([comments](https://lobste.rs/s/xcqfp7/philosophy_software_design_vs_clean_code))

* [I ate and reviewed every snack in our office kitchen](https://www.getlago.com/blog/office-snacks) ([comments](https://news.ycombinator.com/item?id=43139361))

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

* [2025-02-25, 00:59:09](https://news.ycombinator.com/item?id=43166830) - [Everyone at NSF overseeing the Platforms for Wireless Experimentation is gone](https://discuss.systems/@ricci/114059690609284323)
* [2025-02-25, 00:46:43](https://news.ycombinator.com/item?id=43166761) - [It's still worth blogging in the age of AI](https://www.gilesthomas.com/2025/02/blogging-in-the-age-of-ai)
* [2025-02-25, 00:44:39](https://news.ycombinator.com/item?id=43166742) - [US friendship is in freefall – shredding bonds and cutting lives short](https://nypost.com/2025/02/24/opinion/friendship-in-america-is-in-freefall-and-its-killing-us/)
* [2025-02-25, 00:20:00](https://science.slashdot.org/story/25/02/24/2319218/theranos-founder-elizabeth-holmes-fraud-convictions-upheld?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Theranos Founder Elizabeth Holmes' Fraud Convictions Upheld](https://science.slashdot.org/story/25/02/24/2319218/theranos-founder-elizabeth-holmes-fraud-convictions-upheld?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-24, 23:52:33](https://news.ycombinator.com/item?id=43166362) - [Clean Code vs. A Philosophy Of Software Design](https://github.com/johnousterhout/aposd-vs-clean-code/blob/main/README.md)
* [2025-02-24, 23:40:00](https://tech.slashdot.org/story/25/02/24/2149206/dutch-software-firm-bird-to-leave-europe-due-to-onerous-regulations?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Dutch Software Firm Bird To Leave Europe Due To Onerous Regulations](https://tech.slashdot.org/story/25/02/24/2149206/dutch-software-firm-bird-to-leave-europe-due-to-onerous-regulations?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-24, 23:00:00](https://tech.slashdot.org/story/25/02/24/2142219/perplexity-teases-ai-web-browser-called-comet?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Perplexity Teases AI Web Browser Called Comet](https://tech.slashdot.org/story/25/02/24/2142219/perplexity-teases-ai-web-browser-called-comet?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-24, 22:20:00](https://tech.slashdot.org/story/25/02/24/2136232/att-and-verizon-connect-first-cellphone-to-satellite-video-calls?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [AT&amp;T and Verizon Connect First Cellphone-To-Satellite Video Calls](https://tech.slashdot.org/story/25/02/24/2136232/att-and-verizon-connect-first-cellphone-to-satellite-video-calls?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-24, 22:04:00](https://soylentnews.org/article.pl?sid=25/02/24/0715224&from=rss) - [How to Backdoor Large Language Models](https://soylentnews.org/article.pl?sid=25/02/24/0715224&from=rss)
* [2025-02-24, 21:40:00](https://developers.slashdot.org/story/25/02/24/213202/anthropic-launches-the-worlds-first-hybrid-reasoning-ai-model?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Anthropic Launches the World's First 'Hybrid Reasoning' AI Model](https://developers.slashdot.org/story/25/02/24/213202/anthropic-launches-the-worlds-first-hybrid-reasoning-ai-model?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-24, 21:25:15](https://news.ycombinator.com/item?id=43165112) - [\"The closer to the train station, the worse the kebab\" – a \"study\"](https://www.jmspae.se/write-ups/kebabs-train-stations/)
* [2025-02-24, 20:58:00](https://it.slashdot.org/story/25/02/24/2058254/microsoft-quietly-launches-ad-supported-version-of-office-apps-for-windows?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Quietly Launches Ad-Supported Version of Office Apps for Windows](https://it.slashdot.org/story/25/02/24/2058254/microsoft-quietly-launches-ad-supported-version-of-office-apps-for-windows?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-24, 20:50:22](https://news.ycombinator.com/item?id=43164794) - [Show HN: Electro – A hyper-fast Windows image viewer with a built-in terminal](https://github.com/pTinosq/Electro)
* [2025-02-24, 20:24:31](https://lobste.rs/s/kgzd0w/xcode_constantly_phones_home) - [Xcode constantly phones home](https://lapcatsoftware.com/articles/2025/2/5.html)
* [2025-02-24, 20:22:52](https://news.ycombinator.com/item?id=43164499) - [Closing the \"green gap\": energy savings from the math of the landscape function](https://terrytao.wordpress.com/2025/02/23/closing-the-green-gap-from-the-mathematics-of-the-landscape-function-to-lower-electricity-costs-for-households/)
* [2025-02-24, 20:21:56](https://lobste.rs/s/elf44b/breaking_into_dozens_apartment) - [Breaking into dozens of apartment buildings in five minutes on my phone](https://www.ericdaigle.ca/posts/breaking-into-dozens-of-apartments-in-five-minutes/)
* [2025-02-24, 20:17:41](https://lobste.rs/s/wzpqit/web_on_mobile) - [The web on mobile](https://adactio.com/journal/21728)
* [2025-02-24, 19:53:11](https://lobste.rs/s/gbx4tl/how_core_git_developers_configure_git) - [How Core Git Developers Configure Git](https://blog.gitbutler.com/how-git-core-devs-configure-git/)
* [2025-02-24, 19:10:00](https://slashdot.org/story/25/02/24/1847230/ai-reshapes-corporate-workforce-as-companies-halt-traditional-hiring?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [AI Reshapes Corporate Workforce as Companies Halt Traditional Hiring](https://slashdot.org/story/25/02/24/1847230/ai-reshapes-corporate-workforce-as-companies-halt-traditional-hiring?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-24, 18:57:26](https://lobste.rs/s/ohdqzz/least_secure_totp_code_possible) - [The least secure TOTP code possible](https://shkspr.mobi/blog/2025/02/the-least-secure-totp-code-possible/)
* [2025-02-24, 18:33:00](https://news.slashdot.org/story/25/02/24/1833222/ellisons-half-billion-dollar-quest-to-change-farming-has-been-a-bust?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Ellison's Half-Billion-Dollar Quest To Change Farming Has Been a Bust](https://news.slashdot.org/story/25/02/24/1833222/ellisons-half-billion-dollar-quest-to-change-farming-has-been-a-bust?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-24, 18:28:59](https://news.ycombinator.com/item?id=43163011) - [Claude 3.7 Sonnet and Claude Code](https://www.anthropic.com/news/claude-3-7-sonnet)
* [2025-02-24, 18:27:49](https://news.ycombinator.com/item?id=43162995) - [The best way to use text embeddings portably is with Parquet and Polars](https://minimaxir.com/2025/02/embeddings-parquet/)
* [2025-02-24, 18:04:50](https://news.ycombinator.com/item?id=43162737) - [Modular forms, the 'fifth fundamental operation' of math (2023)](https://www.quantamagazine.org/behold-modular-forms-the-fifth-fundamental-operation-of-math-20230921/)
* [2025-02-24, 17:51:51](https://lobste.rs/s/qefnfl/strong_opinions_on_url_design) - [Strong Opinions on URL Design](https://vale.rocks/posts/strong-opinions-on-url-design)
* [2025-02-24, 17:49:58](https://news.ycombinator.com/item?id=43162544) - [Student refines 100-year-old math problem, expanding wind energy possibilities](https://www.psu.edu/news/engineering/story/student-refines-100-year-old-math-problem-expanding-wind-energy-possibilities)
* [2025-02-24, 17:36:00](https://news.slashdot.org/story/25/02/24/1736218/more-than-half-of-countries-are-ignoring-biodiversity-pledges?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [More Than Half of Countries Are Ignoring Biodiversity Pledges](https://news.slashdot.org/story/25/02/24/1736218/more-than-half-of-countries-are-ignoring-biodiversity-pledges?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-24, 17:33:56](https://news.ycombinator.com/item?id=43162340) - [Show HN: I made a site to tell the time in corporate](https://corporate.watch)
* [2025-02-24, 17:29:33](https://news.ycombinator.com/item?id=43162283) - [Micro Journal: Distraction-Free Writing Device](https://github.com/unkyulee/micro-journal)
* [2025-02-24, 17:22:01](https://lobste.rs/s/ocmai4/introducing_fullstack_bench) - [Introducing Fullstack-Bench](https://stack.convex.dev/introducing-fullstack-bench)
* [2025-02-24, 17:20:00](https://soylentnews.org/article.pl?sid=25/02/24/0713223&from=rss) - [Bird Flu Endemic in America Cows. Found in Rats](https://soylentnews.org/article.pl?sid=25/02/24/0713223&from=rss)
* [2025-02-24, 17:15:25](https://lobste.rs/s/jzf4w9/transparency_hardware_software) - [Transparency in Hardware/Software Interfaces](https://rfd.shared.oxide.computer/rfd/0552)
* [2025-02-24, 17:00:23](https://news.ycombinator.com/item?id=43161876) - [Ashby (YC W19) Is Hiring Principal Product Engineers](https://www.ashbyhq.com/careers?utm_source=hn&ashby_jid=a0d8713b-b35e-468e-82a2-40e33795b318)
* [2025-02-24, 16:55:18](https://news.ycombinator.com/item?id=43161777) - [Right to Repair laws have now been introduced in all 50 us states](https://www.ifixit.com/News/108371/right-to-repair-laws-have-now-been-introduced-in-all-50-us-states)
* [2025-02-24, 16:42:31](https://lobste.rs/s/xcqfp7/philosophy_software_design_vs_clean_code) - [\"A Philosophy of Software Design\" vs \"Clean Code\"](https://github.com/johnousterhout/aposd-vs-clean-code/blob/main/README.md)
* [2025-02-24, 16:42:00](https://slashdot.org/story/25/02/24/1639237/software-firm-bird-to-leave-europe-due-to-onerous-regulations-in-ai-era-says-ceo?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Software Firm Bird To Leave Europe Due To Onerous Regulations in AI Era, Says CEO](https://slashdot.org/story/25/02/24/1639237/software-firm-bird-to-leave-europe-due-to-onerous-regulations-in-ai-era-says-ceo?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-24, 16:22:10](https://news.ycombinator.com/item?id=43161332) - [Launch HN: SubImage (YC W25) – See your infra from an attacker's perspective](https://news.ycombinator.com/item?id=43161332)
* [2025-02-24, 16:10:30](https://lobste.rs/s/mnj6yg/tech_hype_cycles) - [Tech hype cycles](https://wiki.alopex.li/HypeCycles)
* [2025-02-24, 16:05:00](https://tech.slashdot.org/story/25/02/24/165243/microsoft-dropped-some-ai-data-center-leases-td-cowen-says?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Dropped Some AI Data Center Leases, TD Cowen Says](https://tech.slashdot.org/story/25/02/24/165243/microsoft-dropped-some-ai-data-center-leases-td-cowen-says?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-24, 15:48:16](https://news.ycombinator.com/item?id=43160884) - [Breaking into apartment buildings in five minutes on my phone](https://www.ericdaigle.ca/posts/breaking-into-dozens-of-apartments-in-five-minutes/)
* [2025-02-24, 15:40:03](https://news.ycombinator.com/item?id=43160779) - [Introduction to Stochastic Calculus](https://jiha-kim.github.io/posts/introduction-to-stochastic-calculus/)
* [2025-02-24, 15:20:00](https://tech.slashdot.org/story/25/02/24/1517229/pre-product-ai-company-now-valued-at-30-billion?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Pre-Product AI 'Company' Now Valued at $30 Billion](https://tech.slashdot.org/story/25/02/24/1517229/pre-product-ai-company-now-valued-at-30-billion?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-24, 14:42:00](https://tech.slashdot.org/story/25/02/24/1442246/google-to-eliminate-sms-authentication-in-gmail-implement-qr-codes?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google To Eliminate SMS Authentication in Gmail, Implement QR Codes](https://tech.slashdot.org/story/25/02/24/1442246/google-to-eliminate-sms-authentication-in-gmail-implement-qr-codes?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-24, 14:04:58](https://lobste.rs/s/pjtizh/dropshot_expose_rest_apis_from_rust) - [dropshot: expose REST APIs from a Rust program](https://github.com/oxidecomputer/dropshot)
* [2025-02-24, 14:01:00](https://apple.slashdot.org/story/25/02/24/1142222/apple-announces-500-billion-us-investment-plan-to-hire-20000-people?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Apple Announces $500 Billion US Investment Plan, To Hire 20,000 People](https://apple.slashdot.org/story/25/02/24/1142222/apple-announces-500-billion-us-investment-plan-to-hire-20000-people?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-24, 12:51:28](https://lobste.rs/s/uz8tlz/nil_channels_go) - [Nil channels in Go](https://vishnubharathi.codes/blog/nil-channels-in-go/)
* [2025-02-24, 12:34:00](https://news.slashdot.org/story/25/02/24/0334207/should-climate-change-be-acknowledged-in-movies?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Should Climate Change Be Acknowledged In Movies?](https://news.slashdot.org/story/25/02/24/0334207/should-climate-change-be-acknowledged-in-movies?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-24, 12:32:00](https://soylentnews.org/article.pl?sid=25/02/24/078229&from=rss) - [AMD Could Block the Sale of Intel Due to a Cross-Licensing Agreement](https://soylentnews.org/article.pl?sid=25/02/24/078229&from=rss)
* [2025-02-24, 12:15:58](https://news.ycombinator.com/item?id=43158660) - [Show HN: I built an app to stop me doomscrolling by touching grass](https://touchgrass.now/)
* [2025-02-24, 11:48:31](https://lobste.rs/s/d3shnw/mathb_is_shutting_down) - [MathB.in Is Shutting Down](https://susam.net/mathbin-is-shutting-down.html)
* [2025-02-24, 11:45:15](https://lobste.rs/s/iem7jw/soar_distro_agnostic_package_manager) - [Soar – Distro Agnostic Package Manager, HomeBrew (LinuxBrew) Done Right](https://github.com/pkgforge/soar)
* [2025-02-24, 11:05:34](https://news.ycombinator.com/item?id=43158168) - [Apple says it will add 20k jobs, spend $500B, produce AI servers in US](https://www.bloomberg.com/news/articles/2025-02-24/apple-says-it-will-add-20-000-jobs-spend-500-billion-produce-ai-servers-in-us)
* [2025-02-24, 11:01:14](https://lobste.rs/s/iazbpl/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/iazbpl/what_are_you_doing_this_week)
* [2025-02-24, 10:12:37](https://news.ycombinator.com/item?id=43157831) - [Microsoft cancels leases for AI data centers, analyst says](https://www.bloomberg.com/news/articles/2025-02-24/microsoft-cancels-leases-for-ai-data-centers-analyst-says)
* [2025-02-24, 09:56:25](https://lobste.rs/s/y9eyjq/why_clojure) - [Why Clojure?](https://gaiwan.co/blog/why-clojure/)
* [2025-02-24, 09:31:03](https://lobste.rs/s/oa1kcd/why_do_frame_pointers_matter_for_ocaml) - [Why do frame pointers matter for OCaml?](https://lambdafoo.com/posts/2025-02-24-ocaml-frame-pointers.html)
* [2025-02-24, 08:07:39](https://lobste.rs/s/ta33pc/calendar_txt_2021) - [Calendar.txt (2021)](https://terokarvinen.com/2021/calendar-txt/)
* [2025-02-24, 07:47:00](https://soylentnews.org/article.pl?sid=25/02/24/074241&from=rss) - [Apple Pulls End-to-End Encryption From UK Rather Than Provide Government a Backdoor](https://soylentnews.org/article.pl?sid=25/02/24/074241&from=rss)
* [2025-02-24, 07:41:10](https://lobste.rs/s/gedr6u/bitwarden_authenticator) - [Bitwarden Authenticator](https://bitwarden.com/products/authenticator/)
* [2025-02-24, 05:34:00](https://soylentnews.org/meta/article.pl?sid=25/02/21/1425224&from=rss) - [Adoption of Site Documentation - THIS IS THE VOTE - RESTORED](https://soylentnews.org/meta/article.pl?sid=25/02/21/1425224&from=rss)
* [2025-02-24, 04:26:22](https://news.ycombinator.com/item?id=43155839) - [Is this the simplest (and most surprising) sorting algorithm ever? (2021)](https://arxiv.org/abs/2110.01111)
* [2025-02-24, 04:04:07](https://lobste.rs/s/jx882u/icanproveitcansort) - [ICanProveItCanSort](https://unnamed.website/posts/i-can-prove-it-can-sort/)
* [2025-02-24, 03:03:00](https://soylentnews.org/article.pl?sid=25/02/23/1133234&from=rss) - [After 20 Years, Math Couple Solves Major Group Theory Problem](https://soylentnews.org/article.pl?sid=25/02/23/1133234&from=rss)
* [2025-02-24, 02:08:32](https://lobste.rs/s/zvhl39/tokio_prctl_nasty_bug) - [Tokio + prctl = nasty bug](https://kobzol.github.io/rust/2025/02/23/tokio-plus-prctl-equals-nasty-bug.html)
* [2025-02-24, 02:01:53](https://lobste.rs/s/9b7odp/macos_for_kde_users) - [MacOS for KDE Users](https://matklad.github.io/2025/02/23/macos-for-kde-users.html)
* [2025-02-24, 01:12:18](https://news.ycombinator.com/item?id=43154883) - [Neut Programming Language](https://vekatze.github.io/neut/overview.html)
* [2025-02-23, 22:14:00](https://soylentnews.org/article.pl?sid=25/02/22/1716217&from=rss) - [NVidia to Consume 77% of Wafers Used for AI Processors in 2025](https://soylentnews.org/article.pl?sid=25/02/22/1716217&from=rss)
* [2025-02-23, 18:08:46](https://lobste.rs/s/on1dfb/emacs_30_1_released) - [Emacs 30.1 released](https://lists.gnu.org/archive/html/emacs-devel/2025-02/msg00997.html)
* [2025-02-23, 17:37:00](https://soylentnews.org/politics/article.pl?sid=25/02/22/1638251&from=rss) - [Trump to Introduce 25% and 'Higher' Tariff on Imported Semiconductors but the Timing is Unclear](https://soylentnews.org/politics/article.pl?sid=25/02/22/1638251&from=rss)
* [2025-02-23, 17:16:14](https://lobste.rs/s/w2jpto/removing_jeff_bezos_from_my_bed) - [Removing Jeff Bezos From My Bed](https://trufflesecurity.com/blog/removing-jeff-bezos-from-my-bed)
* [2025-02-23, 13:22:21](https://lobste.rs/s/xv210z/why_are_qr_codes_with_capital_letters) - [Why are QR Codes with capital letters smaller than QR codes with lower-case letters?](https://shkspr.mobi/blog/2025/02/why-are-qr-codes-with-capital-letters-smaller-than-qr-codes-with-lower-case-letters/)
* [2025-02-23, 12:55:00](https://soylentnews.org/article.pl?sid=25/02/22/1636233&from=rss) - [Electric Truck-Maker Nikola Falls Into Bankruptcy Joining a Procession of Failed EV Startups](https://soylentnews.org/article.pl?sid=25/02/22/1636233&from=rss)
* [2025-02-23, 08:05:00](https://soylentnews.org/article.pl?sid=25/02/22/1634220&from=rss) - [Humane's AI Pin is No More and Owners are Left With Nothing](https://soylentnews.org/article.pl?sid=25/02/22/1634220&from=rss)
* [2025-02-23, 03:24:00](https://soylentnews.org/article.pl?sid=25/02/22/1627256&from=rss) - [The Odds of a City-Killer Asteroid Impact in 2032 Keep Rising](https://soylentnews.org/article.pl?sid=25/02/22/1627256&from=rss)
* [2025-02-22, 22:40:00](https://soylentnews.org/article.pl?sid=25/02/22/1622206&from=rss) - [HP  Deliberately Adds 15 Minutes Wait Time for Support Calls](https://soylentnews.org/article.pl?sid=25/02/22/1622206&from=rss)
* [2025-02-22, 17:55:00](https://soylentnews.org/article.pl?sid=25/02/21/056231&from=rss) - [Webcomic Author AndyOh of TMI-Comic Has Died](https://soylentnews.org/article.pl?sid=25/02/21/056231&from=rss)
* [2025-02-22, 14:48:54](https://news.ycombinator.com/item?id=43139361) - [Vialess heterogeneous skin patch for multimodal monitoring and stimulation](https://www.nature.com/articles/s41467-025-55951-6)
* [2025-02-22, 13:14:00](https://soylentnews.org/article.pl?sid=25/02/21/055211&from=rss) - [Google's New AI Generates Hypotheses for Researchers](https://soylentnews.org/article.pl?sid=25/02/21/055211&from=rss)
* [2025-02-22, 08:31:00](https://soylentnews.org/article.pl?sid=25/02/21/0455231&from=rss) - [Gnome 48 Goes Into Beta, Should Launch in a Month](https://soylentnews.org/article.pl?sid=25/02/21/0455231&from=rss)
* [2025-02-22, 03:48:00](https://soylentnews.org/article.pl?sid=25/02/21/0429228&from=rss) - [DRAM and NAND Prices Are Expected to Rise in the Second Half of 2025](https://soylentnews.org/article.pl?sid=25/02/21/0429228&from=rss)
* [2025-02-21, 23:01:00](https://soylentnews.org/article.pl?sid=25/02/20/181218&from=rss) - [12VHPWR Adapters Sporting Heatsinks and Thermal Pads Show How Problematic the Connector Is](https://soylentnews.org/article.pl?sid=25/02/20/181218&from=rss)
* [2025-02-21, 18:17:00](https://soylentnews.org/article.pl?sid=25/02/20/169239&from=rss) - [Intel's Head of Datacenter and AI Unit Leaves to Lead Nokia](https://soylentnews.org/article.pl?sid=25/02/20/169239&from=rss)
* [2025-02-21, 15:17:12](https://news.ycombinator.com/item?id=43128392) - [I ate and reviewed every snack in our office kitchen](https://www.getlago.com/blog/office-snacks)
* [2025-02-21, 14:46:13](https://news.ycombinator.com/item?id=43128021) - [Writing a DSL in Lua (2015)](https://leafo.net/guides/dsl-in-lua.html)
* [2025-02-21, 14:20:00](https://soylentnews.org/meta/article.pl?sid=25/02/21/1414222&from=rss) - [Soylent Update - Adoption of Proposed Documents - How the Vote Will be Managed](https://soylentnews.org/meta/article.pl?sid=25/02/21/1414222&from=rss)
* [2025-02-21, 14:07:17](https://news.ycombinator.com/item?id=43127577) - [Why does target=\"_blank\" have an underscore in front? (2024)](https://kyrylo.org/html/2024/10/25/why-does-target-blank-have-an-underscore-in-front.html)
* [2025-02-21, 13:32:00](https://soylentnews.org/article.pl?sid=25/02/20/165216&from=rss) - [What Would Happen If a (Small) Black Hole Passed Through Your Body ?](https://soylentnews.org/article.pl?sid=25/02/20/165216&from=rss)
* [2025-02-21, 10:07:14](https://news.ycombinator.com/item?id=43125875) - [Keeping our free tier sustainable by preventing abuse](https://www.geocod.io/code-and-coordinates/2025-02-19-preventing-abuse/)
* [2025-02-21, 07:44:00](https://soylentnews.org/article.pl?sid=25/02/20/137208&from=rss) - [A Single Protein May Have Helped Shape the Emergence of Spoken Language](https://soylentnews.org/article.pl?sid=25/02/20/137208&from=rss)
* [2025-02-21, 02:59:00](https://soylentnews.org/article.pl?sid=25/02/20/131244&from=rss) - [Burning in Woman's Legs Turned Out to be Slug Parasites Migrating to Her Brain](https://soylentnews.org/article.pl?sid=25/02/20/131244&from=rss)
