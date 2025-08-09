# [News Summary](https://kherrick.github.io/news-summary/)

## Education and Legacy Admissions

* [Stanford to continue legacy admissions and withdraw from Cal Grants](https://www.forbes.com/sites/michaeltnietzel/2025/08/08/stanford-to-continue-legacy-admissions-and-withdraw-from-cal-grants/) ([Comments](https://news.ycombinator.com/item?id=44846130))

## Technology Innovations and Allegations

* [Japanese Company Staff Implicated In Alleged Theft of Key TSMC Technology](https://yro.slashdot.org/story/25/08/08/2335203/japanese-company-staff-implicated-in-alleged-theft-of-key-tsmc-technology?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://yro.slashdot.org/story/25/08/08/2335203/japanese-company-staff-implicated-in-alleged-theft-of-key-tsmc-technology?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Tribblix – The Retro Illumos Distribution](http://www.tribblix.org/) ([Comments](https://news.ycombinator.com/item?id=44844561))

* [Sandstorm- self-hostable web productivity suite](https://sandstorm.org/) ([Comments](https://news.ycombinator.com/item?id=44844394))

## AI and Coding Ecosystem Insights

* [What the Windsurf sale means for the AI coding ecosystem](https://ethanding.substack.com/p/windsurf-gets-margin-called) ([Comments](https://news.ycombinator.com/item?id=44843801))

* [Red Teams Jailbreak GPT-5 With Ease, Warn It&apos;s &apos;Nearly Unusable&apos; For Enterprise](https://it.slashdot.org/story/25/08/08/2113251/red-teams-jailbreak-gpt-5-with-ease-warn-its-nearly-unusable-for-enterprise?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://it.slashdot.org/story/25/08/08/2113251/red-teams-jailbreak-gpt-5-with-ease-warn-its-nearly-unusable-for-enterprise?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

## Privacy and File Management

* [I prefer human-readable file formats](https://adele.pollux.casa/check-human.php?redirect=%2Fgemlog%2F2025-08-04_why_I_prefer_human-readble_file_formats.gmi) ([Comments](https://news.ycombinator.com/item?id=44845112))

* [Why I prefer human-readable file formats](https://adele.pollux.casa/gemlog/2025-08-04_why_I_prefer_human-readble_file_formats.gmi) ([Comments](https://lobste.rs/s/phb7ir/why_i_prefer_human_readable_file_formats))

## Human Longevity and History

* [An Ohio Couple Welcomes a Baby Boy From a Nearly 31-Year-Old Frozen Embryo](https://soylentnews.org/article.pl?sid=25/08/08/0353246&amp;from=rss) ([Comments](https://soylentnews.org/article.pl?sid=25/08/08/0353246&amp;from=rss))

## Astronomy and Exploration Milestones

* [NASA Crew-10 Astronauts Depart Space Station After Five-Month Mission](https://science.slashdot.org/story/25/08/08/2323252/nasa-crew-10-astronauts-depart-space-station-after-five-month-mission?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://science.slashdot.org/story/25/08/08/2323252/nasa-crew-10-astronauts-depart-space-station-after-five-month-mission?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Apollo 13 Astronaut Jim Lovell Dies At 97](https://science.slashdot.org/story/25/08/08/211245/apollo-13-astronaut-jim-lovell-dies-at-97?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://science.slashdot.org/story/25/08/08/211245/apollo-13-astronaut-jim-lovell-dies-at-97?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

## AI Industry Challenges

* [AI Industry Horrified To Face Largest Copyright Class Action Ever Certified](https://yro.slashdot.org/story/25/08/08/2040214/ai-industry-horrified-to-face-largest-copyright-class-action-ever-certified?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://yro.slashdot.org/story/25/08/08/2040214/ai-industry-horrified-to-face-largest-copyright-class-action-ever-certified?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [China Tells Brokers To Stop Touting Stablecoins To Cool Frenzy](https://news.slashdot.org/story/25/08/08/1817200/china-tells-brokers-to-stop-touting-stablecoins-to-cool-frenzy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://news.slashdot.org/story/25/08/08/1817200/china-tells-brokers-to-stop-touting-stablecoins-to-cool-frenzy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

## Military Origins of Technology

* [Tor: How a military project became a lifeline for privacy](https://thereader.mitpress.mit.edu/the-secret-history-of-tor-how-a-military-project-became-a-lifeline-for-privacy/) ([Comments](https://news.ycombinator.com/item?id=44838378))

## Sustainability

* [China&apos;s Solar Giants Quietly Shed a Third of Their Workforces Last Year](https://soylentnews.org/article.pl?sid=25/08/06/235236&amp;from=rss) ([Comments](https://soylentnews.org/article.pl?sid=25/08/06/235236&amp;from=rss))

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

* [2025-08-09, 12:54:09](https://news.ycombinator.com/item?id=44846130) - [Stanford to continue legacy admissions and withdraw from Cal Grants](https://www.forbes.com/sites/michaeltnietzel/2025/08/08/stanford-to-continue-legacy-admissions-and-withdraw-from-cal-grants/)
* [2025-08-09, 12:25:24](https://news.ycombinator.com/item?id=44845975) - [Private Welsh island with 19th century fort goes on the market](https://www.cnn.com/2025/08/08/business/thorne-island-fort-wales-scli-intl)
* [2025-08-09, 11:35:39](https://lobste.rs/s/qx8lw4/framework_desktop_is_beast) - [The Framework Desktop is a beast](https://world.hey.com/dhh/the-framework-desktop-is-a-beast-636fb4ff)
* [2025-08-09, 10:00:00](https://yro.slashdot.org/story/25/08/08/2335203/japanese-company-staff-implicated-in-alleged-theft-of-key-tsmc-technology?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Japanese Company Staff Implicated In Alleged Theft of Key TSMC Technology](https://yro.slashdot.org/story/25/08/08/2335203/japanese-company-staff-implicated-in-alleged-theft-of-key-tsmc-technology?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-09, 09:54:13](https://news.ycombinator.com/item?id=44845272) - [Jan – Ollama alternative with local UI](https://github.com/menloresearch/jan)
* [2025-08-09, 09:49:11](https://news.ycombinator.com/item?id=44845251) - [An engineer&apos;s perspective on hiring](https://jyn.dev/an-engineers-perspective-on-hiring)
* [2025-08-09, 09:38:47](https://lobste.rs/s/htrh9u/partially_matching_zig_enums) - [Partially Matching Zig Enums](https://matklad.github.io/2025/08/08/partially-matching-zig-enums.html)
* [2025-08-09, 09:35:31](https://lobste.rs/s/vtipaz/on_window_activation) - [On Window Activation](https://blog.broulik.de/2025/08/on-window-activation/)
* [2025-08-09, 09:22:56](https://lobste.rs/s/7laqgd/engineer_s_perspective_on_hiring) - [an engineer&apos;s perspective on hiring](https://jyn.dev/an-engineers-perspective-on-hiring)
* [2025-08-09, 09:13:48](https://news.ycombinator.com/item?id=44845112) - [I prefer human-readable file formats](https://adele.pollux.casa/check-human.php?redirect=%2Fgemlog%2F2025-08-04_why_I_prefer_human-readble_file_formats.gmi)
* [2025-08-09, 09:12:14](https://lobste.rs/s/phb7ir/why_i_prefer_human_readable_file_formats) - [Why I prefer human-readable file formats](https://adele.pollux.casa/gemlog/2025-08-04_why_I_prefer_human-readble_file_formats.gmi)
* [2025-08-09, 09:02:00](https://soylentnews.org/article.pl?sid=25/08/08/0353246&amp;from=rss) - [An Ohio Couple Welcomes a Baby Boy From a Nearly 31-Year-Old Frozen Embryo](https://soylentnews.org/article.pl?sid=25/08/08/0353246&amp;from=rss)
* [2025-08-09, 08:50:33](https://news.ycombinator.com/item?id=44845017) - [Partially Matching Zig Enums](https://matklad.github.io/2025/08/08/partially-matching-zig-enums.html)
* [2025-08-09, 08:17:48](https://lobste.rs/s/mr2r9f/virtual_6nf) - [Virtual 6NF](https://minimalmodeling.substack.com/p/virtual-6nf)
* [2025-08-09, 07:00:00](https://science.slashdot.org/story/25/08/08/2323252/nasa-crew-10-astronauts-depart-space-station-after-five-month-mission?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Crew-10 Astronauts Depart Space Station After Five-Month Mission](https://science.slashdot.org/story/25/08/08/2323252/nasa-crew-10-astronauts-depart-space-station-after-five-month-mission?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-09, 06:46:14](https://news.ycombinator.com/item?id=44844561) - [Tribblix – The Retro Illumos Distribution](http://www.tribblix.org/)
* [2025-08-09, 06:06:56](https://news.ycombinator.com/item?id=44844394) - [Sandstorm- self-hostable web productivity suite](https://sandstorm.org/)
* [2025-08-09, 05:39:05](https://lobste.rs/s/cjguaf/array_portal) - [Array Portal](https://www.arrayportal.com/)
* [2025-08-09, 05:34:09](https://news.ycombinator.com/item?id=44844257) - [Breaking the Sorting Barrier for Directed Single-Source Shortest Paths](https://arxiv.org/abs/2504.17033)
* [2025-08-09, 05:13:31](https://lobste.rs/s/viklsv/hoogle_translate) - [Hoogle Translate](https://hoogletranslate.com/)
* [2025-08-09, 05:04:38](https://lobste.rs/s/dhjlvv/gnome_49_backlight_changes) - [GNOME 49 Backlight Changes](https://blog.sebastianwick.net/posts/gnome-49-backlight-changes/)
* [2025-08-09, 05:03:36](https://lobste.rs/s/bzkeu3/perfect_web_app_2023) - [Perfect web app (2023)](https://yoyo-code.com/perfect-web-app/)
* [2025-08-09, 04:55:49](https://lobste.rs/s/6v9osj/over_engineering_my_homelab_so_i_don_t_pay) - [Over engineering my homelab so I don&apos;t pay cloud providers](https://ergaster.org/posts/2025/08/04-overegineering-homelab/)
* [2025-08-09, 04:16:00](https://soylentnews.org/article.pl?sid=25/08/08/0113247&amp;from=rss) - [KubeSphere Kills Open Source Edition](https://soylentnews.org/article.pl?sid=25/08/08/0113247&amp;from=rss)
* [2025-08-09, 03:30:00](https://science.slashdot.org/story/25/08/08/2150214/smartwatches-offer-little-insight-into-stress-levels-researchers-find?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Smartwatches Offer Little Insight Into Stress Levels, Researchers Find](https://science.slashdot.org/story/25/08/08/2150214/smartwatches-offer-little-insight-into-stress-levels-researchers-find?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-09, 03:24:16](https://news.ycombinator.com/item?id=44843801) - [What the Windsurf sale means for the AI coding ecosystem](https://ethanding.substack.com/p/windsurf-gets-margin-called)
* [2025-08-09, 02:44:20](https://lobste.rs/s/5qq2k2/why_is_github_ui_getting_so_much_slower) - [Why is GitHub UI getting so much slower?](https://yoyo-code.com/why-is-github-ui-getting-so-much-slower/)
* [2025-08-09, 02:30:57](https://news.ycombinator.com/item?id=44843605) - [Let&apos;s properly analyze an AI article for once](https://nibblestew.blogspot.com/2025/08/lets-properly-analyze-ai-article-for.html)
* [2025-08-09, 02:02:00](https://yro.slashdot.org/story/25/08/08/222237/net-neutrality-advocates-wont-appeal-loss?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Net Neutrality Advocates Won&apos;t Appeal Loss](https://yro.slashdot.org/story/25/08/08/222237/net-neutrality-advocates-wont-appeal-loss?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-09, 01:25:00](https://games.slashdot.org/story/25/08/08/2140221/millions-flock-to-grow-virtual-gardens-in-viral-roblox-game?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Millions Flock To Grow Virtual Gardens In Viral Roblox Game](https://games.slashdot.org/story/25/08/08/2140221/millions-flock-to-grow-virtual-gardens-in-viral-roblox-game?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-09, 01:05:32](https://lobste.rs/s/wnmrkl/spellchecker_used_be_major_feat_software) - [A Spellchecker Used to Be a Major Feat of Software Engineering (2008)](https://prog21.dadgum.com/29.html)
* [2025-08-09, 00:45:00](https://yro.slashdot.org/story/25/08/08/2133257/uk-courts-service-covered-up-it-bug-that-lost-evidence?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Courts Service &apos;Covered Up&apos; IT Bug That Lost Evidence](https://yro.slashdot.org/story/25/08/08/2133257/uk-courts-service-covered-up-it-bug-that-lost-evidence?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-09, 00:02:00](https://it.slashdot.org/story/25/08/08/2113251/red-teams-jailbreak-gpt-5-with-ease-warn-its-nearly-unusable-for-enterprise?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Red Teams Jailbreak GPT-5 With Ease, Warn It&apos;s &apos;Nearly Unusable&apos; For Enterprise](https://it.slashdot.org/story/25/08/08/2113251/red-teams-jailbreak-gpt-5-with-ease-warn-its-nearly-unusable-for-enterprise?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-08, 23:35:00](https://soylentnews.org/article.pl?sid=25/08/08/0056210&amp;from=rss) - [RFK Jr Cancels $500m in mRNA Vaccine Development in the US](https://soylentnews.org/article.pl?sid=25/08/08/0056210&amp;from=rss)
* [2025-08-08, 23:20:00](https://science.slashdot.org/story/25/08/08/211245/apollo-13-astronaut-jim-lovell-dies-at-97?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apollo 13 Astronaut Jim Lovell Dies At 97](https://science.slashdot.org/story/25/08/08/211245/apollo-13-astronaut-jim-lovell-dies-at-97?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-08, 22:40:00](https://slashdot.org/story/25/08/08/2053229/chatgpt-is-bringing-back-4o?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ChatGPT Is Bringing Back 4o](https://slashdot.org/story/25/08/08/2053229/chatgpt-is-bringing-back-4o?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-08, 22:00:00](https://yro.slashdot.org/story/25/08/08/2040214/ai-industry-horrified-to-face-largest-copyright-class-action-ever-certified?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Industry Horrified To Face Largest Copyright Class Action Ever Certified](https://yro.slashdot.org/story/25/08/08/2040214/ai-industry-horrified-to-face-largest-copyright-class-action-ever-certified?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-08, 21:51:29](https://lobste.rs/s/vzr1b1/introducing_spindle) - [Introducing spindle](https://blog.tangled.sh/ci)
* [2025-08-08, 21:35:30](https://lobste.rs/s/bc53lh/lobsters_interview_with_hwayne) - [Lobsters Interview with Hwayne](https://lobste.rs/s/bc53lh/lobsters_interview_with_hwayne)
* [2025-08-08, 21:22:00](https://tech.slashdot.org/story/25/08/08/1840243/south-korea-postpones-decision-to-let-google-maps-work-properly---again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [South Korea Postpones Decision To Let Google Maps Work Properly - Again](https://tech.slashdot.org/story/25/08/08/1840243/south-korea-postpones-decision-to-let-google-maps-work-properly---again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-08, 21:20:21](https://lobste.rs/s/qtm9uv/puzzling_python_program) - [A puzzling Python program](https://jo3-l.dev/posts/python-countdown/)
* [2025-08-08, 21:12:47](https://news.ycombinator.com/item?id=44841741) - [Our European search index goes live](https://blog.ecosia.org/launching-our-european-search-index/)
* [2025-08-08, 20:41:00](https://news.slashdot.org/story/25/08/08/1828209/the-fcc-will-review-emergency-alert-systems-in-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The FCC Will Review Emergency Alert Systems in the US](https://news.slashdot.org/story/25/08/08/1828209/the-fcc-will-review-emergency-alert-systems-in-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-08, 20:01:00](https://news.slashdot.org/story/25/08/08/1817200/china-tells-brokers-to-stop-touting-stablecoins-to-cool-frenzy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Tells Brokers To Stop Touting Stablecoins To Cool Frenzy](https://news.slashdot.org/story/25/08/08/1817200/china-tells-brokers-to-stop-touting-stablecoins-to-cool-frenzy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-08, 19:27:28](https://news.ycombinator.com/item?id=44840728) - [Ask HN: How can ChatGPT serve 700M users when I can&apos;t run one GPT-4 locally?](https://news.ycombinator.com/item?id=44840728)
* [2025-08-08, 19:21:00](https://slashdot.org/story/25/08/08/1751220/how-intels-ceo-helped-create-chinas-chip-industry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Intel&apos;s CEO Helped Create China&apos;s Chip Industry](https://slashdot.org/story/25/08/08/1751220/how-intels-ceo-helped-create-chinas-chip-industry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-08, 19:20:51](https://news.ycombinator.com/item?id=44840654) - [Efrit: A native elisp coding agent running in Emacs](https://github.com/steveyegge/efrit)
* [2025-08-08, 19:12:18](https://news.ycombinator.com/item?id=44840582) - [Jim Lovell, Apollo 13 commander, has died](https://www.nasa.gov/news-release/acting-nasa-administrator-reflects-on-legacy-of-astronaut-jim-lovell/)
* [2025-08-08, 18:50:00](https://soylentnews.org/article.pl?sid=25/08/07/1131203&amp;from=rss) - [More Malware Uploaded to Arch Linux AUR](https://soylentnews.org/article.pl?sid=25/08/07/1131203&amp;from=rss)
* [2025-08-08, 18:40:00](https://tech.slashdot.org/story/25/08/08/1719205/google-ending-steam-for-chromebook-support-in-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Ending Steam for Chromebook Support in 2026](https://tech.slashdot.org/story/25/08/08/1719205/google-ending-steam-for-chromebook-support-in-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-08, 18:19:05](https://news.ycombinator.com/item?id=44840013) - [I want everything local – Building my offline AI workspace](https://instavm.io/blog/building-my-offline-ai-workspace)
* [2025-08-08, 17:43:40](https://lobste.rs/s/qq2x8t/lvfs_sustainability_plan) - [LVFS Sustainability Plan](https://blogs.gnome.org/hughsie/2025/08/08/lvfs-sustainability-plan/)
* [2025-08-08, 15:45:27](https://news.ycombinator.com/item?id=44838378) - [Tor: How a military project became a lifeline for privacy](https://thereader.mitpress.mit.edu/the-secret-history-of-tor-how-a-military-project-became-a-lifeline-for-privacy/)
* [2025-08-08, 15:30:03](https://lobste.rs/s/zrbpds/hypothesis_is_now_thread_safe) - [Hypothesis is now thread-safe](https://hypothesis.works/articles/thread-safe/)
* [2025-08-08, 15:00:28](https://lobste.rs/s/fswjtl/programming_as_extended_cognition) - [Programming as Extended Cognition](https://ieeexplore.ieee.org/document/11119124)
* [2025-08-08, 14:29:54](https://news.ycombinator.com/item?id=44837434) - [Astronomy Photographer of the Year 2025 shortlist](https://www.rmg.co.uk/whats-on/astronomy-photographer-year/galleries/2025-shortlist)
* [2025-08-08, 14:05:00](https://soylentnews.org/article.pl?sid=25/08/07/0255247&amp;from=rss) - [Ubuntu Replacing wget With wcurl](https://soylentnews.org/article.pl?sid=25/08/07/0255247&amp;from=rss)
* [2025-08-08, 13:45:57](https://news.ycombinator.com/item?id=44836879) - [Getting good results from Claude Code](https://www.dzombak.com/blog/2025/08/getting-good-results-from-claude-code/)
* [2025-08-08, 13:36:25](https://lobste.rs/s/gk3luv/how_long_does_it_take_upgrade_ebook) - [How long does it take to upgrade an eBook?](https://shkspr.mobi/blog/2025/08/how-long-does-it-take-to-upgrade-an-ebook/)
* [2025-08-08, 12:59:03](https://lobste.rs/s/qllaru/http_is_not_simple) - [HTTP is not simple](https://daniel.haxx.se/blog/2025/08/08/http-is-not-simple/)
* [2025-08-08, 12:57:50](https://news.ycombinator.com/item?id=44836463) - [How we replaced Elasticsearch and MongoDB with Rust and RocksDB](https://radar.com/blog/high-performance-geocoding-in-rust)
* [2025-08-08, 11:41:04](https://news.ycombinator.com/item?id=44835879) - [Ultrathin business card runs a fluid simulation](https://github.com/Nicholas-L-Johnson/flip-card)
* [2025-08-08, 09:22:00](https://soylentnews.org/article.pl?sid=25/08/07/0248239&amp;from=rss) - [Hiding Secret Codes in Light Can Protect Against Fake Videos](https://soylentnews.org/article.pl?sid=25/08/07/0248239&amp;from=rss)
* [2025-08-08, 07:06:22](https://lobste.rs/s/cn7crr/writing_surtoget_no_with_gleam) - [Writing surtoget.no with gleam](https://lindbakk.com/blog/introducing-surtoget_no)
* [2025-08-08, 06:55:32](https://lobste.rs/s/zxppfh/all_cool_kids_are_doing_it) - [All the cool kids are doing it](https://www.scattered-thoughts.net/writing/all-the-cool-kids-are-doing-it/)
* [2025-08-08, 05:39:34](https://lobste.rs/s/lzladd/arenas_rust) - [Arenas in Rust](https://russellw.github.io/arenas)
* [2025-08-08, 04:35:00](https://soylentnews.org/article.pl?sid=25/08/06/235236&amp;from=rss) - [China&apos;s Solar Giants Quietly Shed a Third of Their Workforces Last Year](https://soylentnews.org/article.pl?sid=25/08/06/235236&amp;from=rss)
* [2025-08-07, 23:52:00](https://soylentnews.org/article.pl?sid=25/08/06/1435231&amp;from=rss) - [OpenAI Announces Two “gpt-oss” Open AI Models, and You Can Download Them Today](https://soylentnews.org/article.pl?sid=25/08/06/1435231&amp;from=rss)
* [2025-08-07, 19:40:31](https://lobste.rs/s/m9dmt8/komodo_my_first_kde_app) - [KomoDo, my first KDE app](https://akselmo.dev/posts/komodo-my-first-kde-app/)
* [2025-08-07, 19:07:00](https://soylentnews.org/article.pl?sid=25/08/06/1129217&amp;from=rss) - [U.S. Semiconductor Design Company Fined $140 Million Over China Dealings](https://soylentnews.org/article.pl?sid=25/08/06/1129217&amp;from=rss)
* [2025-08-07, 14:22:00](https://soylentnews.org/article.pl?sid=25/08/06/1123237&amp;from=rss) - [AWS Deleted a 10-Year Account and All Data Without Warning](https://soylentnews.org/article.pl?sid=25/08/06/1123237&amp;from=rss)
* [2025-08-07, 09:33:00](https://soylentnews.org/article.pl?sid=25/08/05/1550247&amp;from=rss) - [Underwater Robot Draws in Millions of Viewers](https://soylentnews.org/article.pl?sid=25/08/05/1550247&amp;from=rss)
* [2025-08-07, 04:51:00](https://soylentnews.org/article.pl?sid=25/08/05/151223&amp;from=rss) - [Infrared Contact Lens Helps People See in the Dark, Even With Their Eyes Closed](https://soylentnews.org/article.pl?sid=25/08/05/151223&amp;from=rss)
* [2025-08-07, 00:07:00](https://soylentnews.org/article.pl?sid=25/08/05/1452205&amp;from=rss) - [Plague: A Newly Discovered PAM-Based Backdoor for Linux](https://soylentnews.org/article.pl?sid=25/08/05/1452205&amp;from=rss)
* [2025-08-06, 19:20:00](https://soylentnews.org/article.pl?sid=25/08/05/1446223&amp;from=rss) - [Russian Volcano Erupts for First Time in Centuries](https://soylentnews.org/article.pl?sid=25/08/05/1446223&amp;from=rss)
* [2025-08-06, 17:38:43](https://news.ycombinator.com/item?id=44815136) - [Pirating Books in the 1600s](https://www.swanngalleries.com/news/books/2024/04/a-brief-publishing-history-of-don-quixote/)
* [2025-08-06, 14:37:00](https://soylentnews.org/article.pl?sid=25/08/05/1441236&amp;from=rss) - [Inspired by Astronauts, Researchers Use High-Tech Pants to Uncover Heart Issues on MRI](https://soylentnews.org/article.pl?sid=25/08/05/1441236&amp;from=rss)
* [2025-08-06, 12:12:04](https://news.ycombinator.com/item?id=44810916) - [I bought a £16 smartwatch just because it used USB-C](https://shkspr.mobi/blog/2025/08/i-bought-a-16-smartwatch-just-because-it-used-usb-c/)
* [2025-08-06, 09:58:00](https://soylentnews.org/article.pl?sid=25/08/05/1150228&amp;from=rss) - [Space&apos;s Spinning Enigma: A ‘Unicorn’ Object Defies Astrophysics](https://soylentnews.org/article.pl?sid=25/08/05/1150228&amp;from=rss)
* [2025-08-06, 05:08:00](https://soylentnews.org/article.pl?sid=25/08/05/0156215&amp;from=rss) - [AI and the Democratization of Cybercrime](https://soylentnews.org/article.pl?sid=25/08/05/0156215&amp;from=rss)
* [2025-08-06, 00:53:44](https://news.ycombinator.com/item?id=44806422) - [Car has more than 1.2M km on it – and it&apos;s still going strong](https://www.cbc.ca/news/canada/nova-scotia/1985-toyota-tercel-high-mileage-1.7597168)
* [2025-08-06, 00:25:00](https://soylentnews.org/article.pl?sid=25/08/05/0152249&amp;from=rss) - [Christiaan Huygens and the Scientific Secrets of Saturn](https://soylentnews.org/article.pl?sid=25/08/05/0152249&amp;from=rss)
* [2025-08-05, 20:46:38](https://news.ycombinator.com/item?id=44804043) - [What&apos;s wrong with the JSON gem API?](https://byroot.github.io/ruby/json/2025/08/02/whats-wrong-with-the-json-gem-api.html)
* [2025-08-05, 19:40:00](https://soylentnews.org/article.pl?sid=25/08/04/0644251&amp;from=rss) - [ChatGPT Users Shocked to Learn Their Chats Were in Google Search Results](https://soylentnews.org/article.pl?sid=25/08/04/0644251&amp;from=rss)
* [2025-08-05, 18:50:43](https://news.ycombinator.com/item?id=44802484) - [Why Wisconsin&apos;s county highways are lettered, not numbered (2019)](https://www.wpr.org/transportation/why-wisconsins-county-roads-are-lettered-not-numbered)
* [2025-08-05, 17:39:09](https://news.ycombinator.com/item?id=44801392) - [Representing Python notebooks as dataflow graphs](https://marimo.io/blog/dataflow)
* [2025-08-05, 16:11:52](https://news.ycombinator.com/item?id=44799929) - [A SPARC makes a little fire](https://www.leadedsolder.com/2025/08/05/sparcstation-scsi-termination-fix-magic-smoke.html)
* [2025-08-05, 14:54:00](https://soylentnews.org/article.pl?sid=25/08/03/2140229&amp;from=rss) - [China Forms AI Alliances To Cut U.S. Tech Reliance](https://soylentnews.org/article.pl?sid=25/08/03/2140229&amp;from=rss)
* [2025-08-05, 14:43:12](https://news.ycombinator.com/item?id=44798624) - [Hacking Diffusion into Qwen3 for the Arc Challenge](https://www.matthewnewton.com/blog/arc-challenge-diffusion)
* [2025-08-05, 10:03:00](https://soylentnews.org/article.pl?sid=25/08/03/2136209&amp;from=rss) - [Solid-State Batteries Charge in 3 Minutes:  Why Aren&apos;t They in Your Phones and Cars Yet?](https://soylentnews.org/article.pl?sid=25/08/03/2136209&amp;from=rss)
* [2025-08-05, 05:22:00](https://soylentnews.org/article.pl?sid=25/08/03/0242234&amp;from=rss) - [Ousted Vaccine Panel Members Say Rigorous Science is Being Abandoned](https://soylentnews.org/article.pl?sid=25/08/03/0242234&amp;from=rss)
* [2025-08-05, 00:40:00](https://soylentnews.org/article.pl?sid=25/08/03/0225206&amp;from=rss) - [World News: United Nations Report Finds UN Reports Aren’t Widely Read](https://soylentnews.org/article.pl?sid=25/08/03/0225206&amp;from=rss)
