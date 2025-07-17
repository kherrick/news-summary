# [News Summary](https://kherrick.github.io/news-summary/)

## Legal and Ethical Controversies

* [Judge Allows Nationwide Class Action Against Anthropic Over Alleged Piracy of 7 Million Books For AI Training](https://yro.slashdot.org/story/25/07/17/1548245/judge-allows-nationwide-class-action-against-anthropic-over-alleged-piracy-of-7-million-books-for-ai-training?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Retro gaming YouTuber Once Were Nerd sued and raided by the Italian government](https://www.androidauthority.com/once-were-nerd-youtuber-copyright-lawsuit-3577995/)

* [“Reading Rainbow” was created to combat summer reading slumps](https://www.smithsonianmag.com/smithsonian-institution/to-combat-summer-reading-slumps-this-timeless-childrens-television-show-tried-to-bridge-the-literacy-gap-with-the-magic-of-stories-180986984/)

## Advances and Setbacks in AI and Robotics

* [AI Slows Down Some Experienced Software Developers](https://soylentnews.org/article.pl?sid=25/07/16/1758241&from=rss)

* [Hand: open-source Robot Hand](https://github.com/pollen-robotics/AmazingHand)

* [Code Execution Through Email: How I Used Claude to Hack Itself](https://www.pynt.io/blog/llm-security-blogs/code-execution-through-email-how-i-used-claude-mcp-to-hack-itself)

## Technological Innovations

* [Germany Is Building the World&apos;s Tallest Wind Turbine](https://hardware.slashdot.org/story/25/07/16/2120247/germany-is-building-the-worlds-tallest-wind-turbine?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [360 Million Indians Just Got Premium AI Chatbots For Free For a Year](https://slashdot.org/story/25/07/17/0742246/360-million-indians-just-got-premium-ai-chatbots-for-free-for-a-year?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [FDA Authorizes Juul E-Cigarettes](https://www.wsj.com/business/fda-authorizes-juul-e-cigarettes-6ad37963)

## Science and Health Breakthroughs

* [Cancer Death Rates Fall One-Third in US Since 1990s as Prevention Efforts Take Hold](https://science.slashdot.org/story/25/07/17/1455213/cancer-death-rates-fall-one-third-in-us-since-1990s-as-prevention-efforts-take-hold?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Industrial Waste is Turning Into Rock in Just Decades, Study Suggests](https://soylentnews.org/article.pl?sid=25/07/16/1725249&from=rss)

* [Merger of Two Massive Black Holes is One for the Record Books](https://soylentnews.org/article.pl?sid=25/07/15/1735235&from=rss)

## Cultural and Historical Insights

* [How I Became the First Linux User in India](https://medium.com/@vishalmisra/how-i-became-the-first-linux-user-in-india-b86be9d2a6c5)

* [Supporting Mission-Driven Space Innovation, For Earth And Beyond](https://soylentnews.org/article.pl?sid=25/07/13/232209&from=rss)

* [Archaeologists Discover Tomb of First King of Caracol](https://uh.edu/news-events/stories/2025/july/07102025-caracol-chase-discovery-maya-ruler.php)

## Emerging Trends in Software and Development

* [Why pull-based pipelines are faster](https://blog.sequinstream.com/why-pull-based-pipelines-are-faster/)

* [Zig&apos;s new Writer](https://www.openmymind.net/Zigs-New-Writer/)

* [Parsing Protobuf Like Never Before](https://mcyoung.xyz/2025/07/16/hyperpb/)

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

* [2025-07-17, 16:02:00](https://yro.slashdot.org/story/25/07/17/1548245/judge-allows-nationwide-class-action-against-anthropic-over-alleged-piracy-of-7-million-books-for-ai-training?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Judge Allows Nationwide Class Action Against Anthropic Over Alleged Piracy of 7 Million Books For AI Training](https://yro.slashdot.org/story/25/07/17/1548245/judge-allows-nationwide-class-action-against-anthropic-over-alleged-piracy-of-7-million-books-for-ai-training?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-17, 15:42:57](https://lobste.rs/s/czw9yx/how_i_became_first_linux_user_india) - [How I Became the First Linux User in India](https://medium.com/@vishalmisra/how-i-became-the-first-linux-user-in-india-b86be9d2a6c5)
* [2025-07-17, 15:21:00](https://science.slashdot.org/story/25/07/17/1455213/cancer-death-rates-fall-one-third-in-us-since-1990s-as-prevention-efforts-take-hold?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cancer Death Rates Fall One-Third in US Since 1990s as Prevention Efforts Take Hold](https://science.slashdot.org/story/25/07/17/1455213/cancer-death-rates-fall-one-third-in-us-since-1990s-as-prevention-efforts-take-hold?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-17, 15:19:15](https://lobste.rs/s/lzvc21/why_pull_based_pipelines_are_faster) - [Why pull-based pipelines are faster](https://blog.sequinstream.com/why-pull-based-pipelines-are-faster/)
* [2025-07-17, 14:59:11](https://news.ycombinator.com/item?id=44594140) - [FDA Authorizes Juul E-Cigarettes](https://www.wsj.com/business/fda-authorizes-juul-e-cigarettes-6ad37963)
* [2025-07-17, 14:58:56](https://lobste.rs/s/udtfpn/zig_s_new_writer) - [Zig&apos;s new Writer](https://www.openmymind.net/Zigs-New-Writer/)
* [2025-07-17, 14:43:00](https://news.ycombinator.com/item?id=44593972) - [Self-Taught Engineers Often Outperform](https://michaelbastos.com/blog/why-self-taught-engineers-often-outperform)
* [2025-07-17, 14:40:00](https://tech.slashdot.org/story/25/07/17/145222/uber-plans-20000-robotaxis-in-six-year-rollout-with-lucid-and-nuro?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Uber Plans 20,000 Robotaxis in Six-Year Rollout with Lucid and Nuro](https://tech.slashdot.org/story/25/07/17/145222/uber-plans-20000-robotaxis-in-six-year-rollout-with-lucid-and-nuro?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-17, 14:24:13](https://lobste.rs/s/mklbl9/lsr_ls_with_io_uring) - [lsr: ls but with io_uring](https://tangled.sh/@rockorager.dev/lsr)
* [2025-07-17, 14:00:00](https://slashdot.org/story/25/07/17/0742246/360-million-indians-just-got-premium-ai-chatbots-for-free-for-a-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [360 Million Indians Just Got Premium AI Chatbots For Free For a Year](https://slashdot.org/story/25/07/17/0742246/360-million-indians-just-got-premium-ai-chatbots-for-free-for-a-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-17, 13:12:56](https://lobste.rs/s/b5frit/bundler_v2_7_last_release_before_bundler_4) - [Bundler v2.7: last release before Bundler 4](https://bundler.io/blog/2025/07/17/bundler-v2-7.html)
* [2025-07-17, 13:00:00](https://entertainment.slashdot.org/story/25/07/16/2325227/cinemas-weigh-launching-new-large-screen-brand-to-challenge-imax?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cinemas Weigh Launching New Large Screen Brand To Challenge Imax](https://entertainment.slashdot.org/story/25/07/16/2325227/cinemas-weigh-launching-new-large-screen-brand-to-challenge-imax?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-17, 12:58:37](https://news.ycombinator.com/item?id=44592866) - [The rise of AI as a threat to the S&amp;P 500 [pdf]](https://autonomy.work/wp-content/uploads/2025/07/Sp-500-capital-at-risk_-3.pdf)
* [2025-07-17, 12:55:24](https://lobste.rs/s/7miuzf/terminal_trove_home_all_things_terminal) - [Terminal Trove - The $HOME of all things in the terminal](https://terminaltrove.com/)
* [2025-07-17, 12:45:01](https://lobste.rs/s/vpzlcr/defeating_dependency_duplication_tests) - [Defeating Dependency Duplication in Tests?](https://lobste.rs/s/vpzlcr/defeating_dependency_duplication_tests)
* [2025-07-17, 12:26:20](https://lobste.rs/s/ogq41h/gccrs_june_2025_monthly_report) - [gccrs June 2025 monthly report](https://rust-gcc.github.io/2025/07/17/2025-06-monthly-report.html)
* [2025-07-17, 12:25:57](https://lobste.rs/s/fy2wcx/we_ve_got_stop_sending_files_each_other) - [We&apos;ve got to stop sending files to each other](https://shkspr.mobi/blog/2025/07/weve-got-to-stop-sending-files-to-each-other/)
* [2025-07-17, 12:08:38](https://news.ycombinator.com/item?id=44592413) - [Hand: open-source Robot Hand](https://github.com/pollen-robotics/AmazingHand)
* [2025-07-17, 12:07:33](https://lobste.rs/s/greve7/parsing_protobuf_like_never_before) - [Parsing Protobuf Like Never Before](https://mcyoung.xyz/2025/07/16/hyperpb/)
* [2025-07-17, 12:04:53](https://news.ycombinator.com/item?id=44592377) - [My bank keeps on undermining anti-phishing education](http://moritz-mander.de/blog/my_bank_keeps_on_undermining_anti-phishing_education/)
* [2025-07-17, 12:00:26](https://news.ycombinator.com/item?id=44592344) - [Rejoy Health (YC W21) Is Hiring](https://www.ycombinator.com/companies/rejoy-health/jobs/DCsxNgv-software-engineer)
* [2025-07-17, 12:00:04](https://lobste.rs/s/cavtz6/firefox_security_privacy_newsletter) - [Firefox Security &amp; Privacy newsletter 2025 Q2](https://attackanddefense.dev/2025/07/17/firefox-security-privacy-newsletter-2025-q2.html)
* [2025-07-17, 11:54:46](https://lobste.rs/s/s92ylk/two_simple_rules_fix_code_reviews) - [Two Simple Rules to Fix Code Reviews](https://serce.me/posts/2025-07-17-two-simple-rules-to-fix-code-reviews)
* [2025-07-17, 11:47:00](https://soylentnews.org/article.pl?sid=25/07/16/1758241&amp;from=rss) - [AI Slows Down Some Experienced Software Developers](https://soylentnews.org/article.pl?sid=25/07/16/1758241&amp;from=rss)
* [2025-07-17, 11:19:12](https://lobste.rs/s/zarobw/active_active_replication_extension_for) - [Active-active Replication Extension for PostgreSQL by AWS](https://github.com/aws/pgactive)
* [2025-07-17, 11:17:08](https://news.ycombinator.com/item?id=44591988) - [Retro gaming YouTuber Once Were Nerd sued and raided by the Italian government](https://www.androidauthority.com/once-were-nerd-youtuber-copyright-lawsuit-3577995/)
* [2025-07-17, 10:49:58](https://news.ycombinator.com/item?id=44591820) - [Upcoming coordinated security fix for all Matrix server implementations](https://matrix.org/blog/2025/07/security-predisclosure/)
* [2025-07-17, 10:00:00](https://tech.slashdot.org/story/25/07/16/236216/vmware-reboots-its-partner-program-again-with-new-invite-only-program?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [VMware Reboots Its Partner Program Again With New Invite-Only Program](https://tech.slashdot.org/story/25/07/16/236216/vmware-reboots-its-partner-program-again-with-new-invite-only-program?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-17, 09:36:58](https://news.ycombinator.com/item?id=44591445) - [FOSS4G Europe 2025 live streaming [video]](https://2025.europe.foss4g.org/livestream/)
* [2025-07-17, 09:16:14](https://lobste.rs/s/wxsq3f/c_trailing_return_types_2022) - [C++ Trailing Return Types (2022)](https://danielsieger.com/blog/2022/01/28/cpp-trailing-return-types.html)
* [2025-07-17, 08:25:02](https://lobste.rs/s/cuaicj/project_servfail_one_year) - [Project SERVFAIL: one year in](https://sdomi.pl/weblog/25-servfail-first-year/)
* [2025-07-17, 08:11:28](https://lobste.rs/s/zaeqvr/i_was_wrong_about_robots_txt) - [I was wrong about robots.txt](https://evgeniipendragon.com/posts/i-was-wrong-about-robots-txt/)
* [2025-07-17, 07:27:42](https://news.ycombinator.com/item?id=44590678) - [NINA: Rebuilding the original AIM, AOL Desktop, Yahoo and ICQ platforms](https://nina.chat/)
* [2025-07-17, 07:24:11](https://lobste.rs/s/iclgb7/bypassing_specialization_rust_how_i) - [\&quot;Bypassing\&quot; specialization in Rust or How I Learned to Stop Worrying and Love Function Pointers](https://oakchris1955.eu/posts/bypassing_specialization/)
* [2025-07-17, 07:07:00](https://soylentnews.org/article.pl?sid=25/07/16/1725249&amp;from=rss) - [Industrial Waste is Turning Into Rock in Just Decades, Study Suggests](https://soylentnews.org/article.pl?sid=25/07/16/1725249&amp;from=rss)
* [2025-07-17, 07:00:00](https://tech.slashdot.org/story/25/07/16/2246201/transatlantic-communications-cable-doubles-as-ocean-sensor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Transatlantic Communications Cable Doubles As Ocean Sensor](https://tech.slashdot.org/story/25/07/16/2246201/transatlantic-communications-cable-doubles-as-ocean-sensor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-17, 06:32:42](https://news.ycombinator.com/item?id=44590350) - [Code Execution Through Email: How I Used Claude to Hack Itself](https://www.pynt.io/blog/llm-security-blogs/code-execution-through-email-how-i-used-claude-mcp-to-hack-itself)
* [2025-07-17, 06:05:19](https://news.ycombinator.com/item?id=44590189) - [Wttr: Console-oriented weather forecast service](https://github.com/chubin/wttr.in)
* [2025-07-17, 05:43:20](https://lobste.rs/s/u3ywxf/rust_shaped_hole) - [A Rust shaped hole](https://mnvr.in/rust)
* [2025-07-17, 03:30:00](https://tech.slashdot.org/story/25/07/16/2112231/stellantis-abandons-hydrogen-fuel-cell-development?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Stellantis Abandons Hydrogen Fuel Cell Development](https://tech.slashdot.org/story/25/07/16/2112231/stellantis-abandons-hydrogen-fuel-cell-development?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-17, 03:22:53](https://news.ycombinator.com/item?id=44589384) - [Xbox Hacks: The A20 (2021)](https://connortumbleson.com/2021/07/19/the-xbox-and-a20-line/)
* [2025-07-17, 02:22:00](https://soylentnews.org/article.pl?sid=25/07/15/1735235&amp;from=rss) - [Merger of Two Massive Black Holes is One for the Record Books](https://soylentnews.org/article.pl?sid=25/07/15/1735235&amp;from=rss)
* [2025-07-17, 01:50:33](https://lobste.rs/s/nnnmom/blender_hdr_reference_white_issue) - [Blender HDR and the reference white issue](https://blog.sebastianwick.net/posts/blender-hdr-reference-white/)
* [2025-07-17, 01:10:00](https://hardware.slashdot.org/story/25/07/16/2120247/germany-is-building-the-worlds-tallest-wind-turbine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Germany Is Building the World&apos;s Tallest Wind Turbine](https://hardware.slashdot.org/story/25/07/16/2120247/germany-is-building-the-worlds-tallest-wind-turbine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-17, 00:43:41](https://news.ycombinator.com/item?id=44588491) - [“Reading Rainbow” was created to combat summer reading slumps](https://www.smithsonianmag.com/smithsonian-institution/to-combat-summer-reading-slumps-this-timeless-childrens-television-show-tried-to-bridge-the-literacy-gap-with-the-magic-of-stories-180986984/)
* [2025-07-17, 00:35:57](https://news.ycombinator.com/item?id=44588437) - [I was wrong about robots.txt](https://evgeniipendragon.com/posts/i-was-wrong-about-robots-txt/)
* [2025-07-17, 00:30:00](https://slashdot.org/story/25/07/16/2246205/intel-layoffs-exceed-5000-across-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel Layoffs Exceed 5,000 Across US](https://slashdot.org/story/25/07/16/2246205/intel-layoffs-exceed-5000-across-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-16, 23:50:00](https://slashdot.org/story/25/07/16/2058240/scale-ai-lays-off-200-employees-we-ramped-up-our-genai-capacity-too-quickly?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scale AI Lays Off 200 Employees: &apos;We Ramped Up Our GenAI Capacity Too Quickly&apos;](https://slashdot.org/story/25/07/16/2058240/scale-ai-lays-off-200-employees-we-ramped-up-our-genai-capacity-too-quickly?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-16, 23:10:00](https://linux.slashdot.org/story/25/07/16/2048246/linux-reaches-5-on-desktop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linux Reaches 5% On Desktop](https://linux.slashdot.org/story/25/07/16/2048246/linux-reaches-5-on-desktop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-16, 22:30:00](https://yro.slashdot.org/story/25/07/16/2042245/chinese-authorities-are-using-a-new-tool-to-hack-seized-phones-and-extract-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chinese Authorities Are Using a New Tool To Hack Seized Phones and Extract Data](https://yro.slashdot.org/story/25/07/16/2042245/chinese-authorities-are-using-a-new-tool-to-hack-seized-phones-and-extract-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-16, 21:58:31](https://news.ycombinator.com/item?id=44587248) - [Show HN: A &apos;Choose Your Own Adventure&apos; written in Emacs Org Mode](https://tendollaradventure.com/sample/)
* [2025-07-16, 21:50:00](https://games.slashdot.org/story/25/07/16/2034212/steam-now-bans-games-that-violate-the-rules-and-standards-of-payment-processors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Steam Now Bans Games That Violate the &apos;Rules and Standards&apos; of Payment Processors](https://games.slashdot.org/story/25/07/16/2034212/steam-now-bans-games-that-violate-the-rules-and-standards-of-payment-processors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-16, 21:33:00](https://soylentnews.org/article.pl?sid=25/07/15/1642247&amp;from=rss) - [Nvidia CEO says China&apos;s Military Will Avoid U.S. AI Tech](https://soylentnews.org/article.pl?sid=25/07/15/1642247&amp;from=rss)
* [2025-07-16, 21:10:00](https://tech.slashdot.org/story/25/07/16/2030234/openai-says-it-will-use-googles-cloud-for-chatgpt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Says It Will Use Google&apos;s Cloud For ChatGPT](https://tech.slashdot.org/story/25/07/16/2030234/openai-says-it-will-use-googles-cloud-for-chatgpt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-16, 21:01:09](https://news.ycombinator.com/item?id=44586723) - [I want an iPhone Mini-sized Android phone (2022)](https://smallandroidphone.com/)
* [2025-07-16, 20:34:18](https://news.ycombinator.com/item?id=44586530) - [Metaflow: Build, Manage and Deploy AI/ML Systems](https://github.com/Netflix/metaflow)
* [2025-07-16, 19:48:37](https://lobste.rs/s/4bhrvr/artisanal_handcrafted_git_repositories) - [Artisanal Handcrafted Git Repositories](https://drew.silcock.dev/blog/artisanal-git/)
* [2025-07-16, 19:45:24](https://news.ycombinator.com/item?id=44586064) - [Artisanal handcrafted Git repositories](https://drew.silcock.dev/blog/artisanal-git/)
* [2025-07-16, 19:08:39](https://news.ycombinator.com/item?id=44585755) - [Intel&apos;s retreat is unlike anything it&apos;s done before in Oregon](https://www.oregonlive.com/silicon-forest/2025/07/intels-retreat-is-unlike-anything-its-done-before-in-oregon.html)
* [2025-07-16, 18:03:39](https://lobste.rs/s/4dn4da/cloudflare_1_1_1_1_incident_postmortem_for) - [Cloudflare 1.1.1.1 incident postmortem for July 14, 2025](https://blog.cloudflare.com/cloudflare-1-1-1-1-incident-on-july-14-2025/)
* [2025-07-16, 17:48:06](https://lobste.rs/s/qqm5uw/i_m_unsatisfied_with_easing_functions) - [I&apos;m unsatisfied with easing functions](https://www.davepagurek.com/blog/easing-functions/)
* [2025-07-16, 16:53:00](https://soylentnews.org/article.pl?sid=25/07/15/1528250&amp;from=rss) - [Texas Governor Says His Emails With Elon Musk are Too ‘Intimate or Embarrassing’ to Release](https://soylentnews.org/article.pl?sid=25/07/15/1528250&amp;from=rss)
* [2025-07-16, 16:48:48](https://news.ycombinator.com/item?id=44584372) - [Ex-Waymo engineers launch Bedrock Robotics to automate construction](https://techcrunch.com/2025/07/16/ex-waymo-engineers-launch-bedrock-robotics-with-80m-to-automate-construction/)
* [2025-07-16, 15:30:06](https://lobste.rs/s/tfauzy/underused_techniques_for_effective) - [Underused Techniques for Effective Emails](https://refactoringenglish.com/chapters/techniques-for-writing-emails/)
* [2025-07-16, 15:22:08](https://lobste.rs/s/a5mmlt/pre_disclosure_upcoming_coordinated) - [Pre-disclosure: Upcoming coordinated security fix for all Matrix server implementations](https://matrix.org/blog/2025/07/security-predisclosure/)
* [2025-07-16, 15:11:54](https://news.ycombinator.com/item?id=44583171) - [Altermagnets: The first new type of magnet in nearly a century](https://www.newscientist.com/article/2487013-weve-discovered-a-new-kind-of-magnetism-what-can-we-do-with-it/)
* [2025-07-16, 12:15:00](https://soylentnews.org/article.pl?sid=25/07/15/0229246&amp;from=rss) - [Secretive Chinese Satellite Emerges in Surprising Orbit After 6-Day Vanishing Act](https://soylentnews.org/article.pl?sid=25/07/15/0229246&amp;from=rss)
* [2025-07-16, 09:18:50](https://lobste.rs/s/ioznqf/reviving_genius) - [Reviving Genius](https://andrewshaw.nl/blog/reviving-genius)
* [2025-07-16, 09:15:28](https://news.ycombinator.com/item?id=44580257) - [Pgactive: Postgres active-active replication extension](https://github.com/aws/pgactive)
* [2025-07-16, 07:34:00](https://soylentnews.org/article.pl?sid=25/07/14/1828216&amp;from=rss) - [Stopping The Rot When Good Software Goes Bad Means New Rules](https://soylentnews.org/article.pl?sid=25/07/14/1828216&amp;from=rss)
* [2025-07-16, 02:51:00](https://soylentnews.org/article.pl?sid=25/07/14/1819237&amp;from=rss) - [GPS On The Fritz? Britain And France Plot A Backup Plan](https://soylentnews.org/article.pl?sid=25/07/14/1819237&amp;from=rss)
* [2025-07-15, 22:13:00](https://soylentnews.org/article.pl?sid=25/07/14/188221&amp;from=rss) - [Snot-Filtering Tech Could Be The Answer To A Dust-Free PC](https://soylentnews.org/article.pl?sid=25/07/14/188221&amp;from=rss)
* [2025-07-15, 17:24:00](https://soylentnews.org/article.pl?sid=25/07/14/1758208&amp;from=rss) - [Princeton Study Maps 200,000 years of Human–Neanderthal Interbreeding](https://soylentnews.org/article.pl?sid=25/07/14/1758208&amp;from=rss)
* [2025-07-15, 12:45:00](https://soylentnews.org/article.pl?sid=25/07/14/1740236&amp;from=rss) - [AI Therapy Bots Fuel Delusions and Give Dangerous Advice, Stanford Study Finds](https://soylentnews.org/article.pl?sid=25/07/14/1740236&amp;from=rss)
* [2025-07-15, 08:21:40](https://news.ycombinator.com/item?id=44569095) - [Inside the box: Everything I did with an Arduino starter kit](https://lopespm.com/hardware/2025/07/15/arduino.html)
* [2025-07-15, 08:02:00](https://soylentnews.org/article.pl?sid=25/07/14/0944243&amp;from=rss) - [Core Ultra 5 245HX Blasts Past Desktop Counterpart in PassMark](https://soylentnews.org/article.pl?sid=25/07/14/0944243&amp;from=rss)
* [2025-07-15, 03:15:00](https://soylentnews.org/article.pl?sid=25/07/14/0413203&amp;from=rss) - [Physicists Start To Pin Down How Stars Forge Heavy Atoms](https://soylentnews.org/article.pl?sid=25/07/14/0413203&amp;from=rss)
* [2025-07-14, 23:30:00](https://soylentnews.org/article.pl?sid=25/07/13/232209&amp;from=rss) - [Supporting Mission-Driven Space Innovation, For Earth And Beyond](https://soylentnews.org/article.pl?sid=25/07/13/232209&amp;from=rss)
* [2025-07-14, 18:45:00](https://soylentnews.org/article.pl?sid=25/07/13/044254&amp;from=rss) - [China Claims Big Advances In Classical And Quantum Computers](https://soylentnews.org/article.pl?sid=25/07/13/044254&amp;from=rss)
* [2025-07-14, 14:50:17](https://news.ycombinator.com/item?id=44560943) - [Doing Hard Things](https://parv.bearblog.dev/kayaking/)
* [2025-07-14, 14:01:44](https://news.ycombinator.com/item?id=44560390) - [ESA’s Moonlight programme: Pioneering the path for lunar exploration (2024)](https://www.esa.int/Applications/Connectivity_and_Secure_Communications/ESA_s_Moonlight_programme_Pioneering_the_path_for_lunar_exploration)
* [2025-07-14, 14:00:00](https://soylentnews.org/article.pl?sid=25/07/13/014215&amp;from=rss) - [AMD Discloses New CPU Flaws that can Enable Data Leaks via Timing Attacks](https://soylentnews.org/article.pl?sid=25/07/13/014215&amp;from=rss)
* [2025-07-14, 13:38:00](https://news.ycombinator.com/item?id=44560103) - [A Tale of Two Red-Bearded Visionaries](https://nemanjatrifunovic.substack.com/p/a-tale-of-two-red-bearded-visionaries)
* [2025-07-14, 09:15:00](https://soylentnews.org/article.pl?sid=25/07/13/0039240&amp;from=rss) - [&apos;Positive Review Only&apos;: Researchers Hide AI Prompts in Papers](https://soylentnews.org/article.pl?sid=25/07/13/0039240&amp;from=rss)
* [2025-07-14, 06:21:28](https://news.ycombinator.com/item?id=44556997) - [Archaeologists Discover Tomb of First King of Caracol](https://uh.edu/news-events/stories/2025/july/07102025-caracol-chase-discovery-maya-ruler.php)
* [2025-07-14, 04:30:00](https://soylentnews.org/article.pl?sid=25/07/13/0024234&amp;from=rss) - [The Foolproof Way to Win Any Lottery, According to Maths](https://soylentnews.org/article.pl?sid=25/07/13/0024234&amp;from=rss)
* [2025-07-14, 02:36:19](https://news.ycombinator.com/item?id=44555924) - [Writing a competitive BZip2 encoder in Ada from scratch in a few days (2024)](https://gautiersblog.blogspot.com/2024/11/writing-bzip2-encoder-in-ada-from.html)
* [2025-07-13, 23:45:00](https://soylentnews.org/article.pl?sid=25/07/13/008207&amp;from=rss) - [1960s Schools Experiment That Created a New Alphabet and Left Thousands of Children Unable to Spell](https://soylentnews.org/article.pl?sid=25/07/13/008207&amp;from=rss)
* [2025-07-13, 19:15:00](https://soylentnews.org/article.pl?sid=25/07/12/1336231&amp;from=rss) - [Zombie Fabs Plague China&apos;s Chipmaking Ambitions, Failures Burning Tens of Billions of Dollars](https://soylentnews.org/article.pl?sid=25/07/12/1336231&amp;from=rss)
* [2025-07-13, 17:30:38](https://news.ycombinator.com/item?id=44551990) - [BB(6) Is Hard (Antihydra) (2024)](https://www.sligocki.com//2024/07/06/bb-6-2-is-hard.html)
* [2025-07-13, 14:28:00](https://soylentnews.org/article.pl?sid=25/07/12/1251234&amp;from=rss) - [Man&apos;s Ghastly Festering Ulcer Stumps Doctors—Until They Cut Out a Wedge of Flesh](https://soylentnews.org/article.pl?sid=25/07/12/1251234&amp;from=rss)
* [2025-07-13, 09:40:00](https://soylentnews.org/article.pl?sid=25/07/12/1244241&amp;from=rss) - [This Glitchy, Error-Prone Tool Could Get You Deported](https://soylentnews.org/article.pl?sid=25/07/12/1244241&amp;from=rss)
* [2025-07-13, 04:56:00](https://soylentnews.org/article.pl?sid=25/07/12/1237201&amp;from=rss) - [Experts Say It is Unlikely You Will See a Moa Any Time Soon](https://soylentnews.org/article.pl?sid=25/07/12/1237201&amp;from=rss)
* [2025-07-13, 00:14:00](https://soylentnews.org/article.pl?sid=25/07/12/1213215&amp;from=rss) - [&apos;123456&apos; Password Exposed Chats for 64 Million McDonald&apos;s Job Applicants](https://soylentnews.org/article.pl?sid=25/07/12/1213215&amp;from=rss)
