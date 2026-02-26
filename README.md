# [News Summary](https://kherrick.github.io/news-summary/)

## Advancements in Artificial Intelligence

* [snakes.run: rendering 100M pixels a second over ssh](https://eieio.games/blog/secure-massively-multiplayer-snake/) - An impressive tech leap rendering massive pixels securely over SSH.

* [Burger King Will Use AI To Check If Employees Say 'Please' and 'Thank You'](https://slashdot.org/story/26/02/26/163233/burger-king-will-use-ai-to-check-if-employees-say-please-and-thank-you?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Demonstrating AI's reach into human interaction training in fast food service.

* [Nano Banana 2: Google's latest AI image generation model](https://blog.google/innovation-and-ai/technology/ai/nano-banana-2/) - An exploration into Google's advancements in AI-driven visual creativity.

* [Why Developers Keep Choosing Claude over Every Other AI](https://www.bhusalmanish.com.np/blog/posts/why-claude-wins-coding.html) - Insights into why Claude continues to thrive in the competitive AI ecosystem.

* [Cloudflare Experiment Ports Most of Next.js API in 'One Week' With AI](https://tech.slashdot.org/story/26/02/26/0543208/cloudflare-experiment-ports-most-of-nextjs-api-in-one-week-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Pioneering API migration using AI tools in record time.

## Cybersecurity and Data Integrity

* [New AirSnitch attack breaks Wi-Fi encryption in homes, offices, and enterprises](https://arstechnica.com/security/2026/02/new-airsnitch-attack-breaks-wi-fi-encryption-in-homes-offices-and-enterprises/) - A major exploit challenging the security of Wi-Fi systems everywhere.

* [maiao: easy, Gerrit-style, stacked diffs workflow for GitHub](https://github.com/adevinta/maiao) - Simplifying developer workflows with innovative GitHub tools.

* [Fake Job Interviews Are Installing Backdoors on Developer Machines](https://threatroad.substack.com/p/fake-job-interviews-are-installing) - A cautionary tale of deceptive hiring schemes targeting developers.

## Corporate Tech and Policy Shifts

* [HBO Max's Password-Sharing Crackdown Will Expand Globally in 2026](https://entertainment.slashdot.org/story/26/02/26/1422259/hbo-maxs-password-sharing-crackdown-will-expand-globally-in-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Global implications of growing restrictions on password-sharing.

* [In 2025, Meta paid an effective federal tax rate of 3.5%](https://bsky.app/profile/rbreich.bsky.social/post/3mfptlfeucn2i) - Scrutinizing tax policies of tech giants like Meta.

## Unconventional Innovations and Ideas

* [Ordered Dithering with Arbitrary or Irregular Colour Palettes](https://matejlou.blog/2023/12/06/ordered-dithering-for-arbitrary-or-irregular-palettes/) - Breaking traditional limits for digital image processing.

* [Porting Doom to a 20-year-old VoIP phone](https://0x19.co/post/snom360_doom/) - Gaming nostalgia meets unconventional tech adaptations.

## Cultural Observations and Human-centric Perspectives

* [DVD Sales Decline Slows Sharply as Gen Z Discovers the Appeal of Physical Media](https://entertainment.slashdot.org/story/26/02/25/1517205/dvd-sales-decline-slows-sharply-as-gen-z-discovers-the-appeal-of-physical-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Reviving interest in tangible media formats in a digital age.

* [Michael Pollan Says AI May 'Think' — but It Will Never be Conscious](https://soylentnews.org/article.pl?sid=26/02/25/1551209&amp;from=rss) - Philosophical explorations into AI consciousness.

* [The Slow Death of the Power User](https://fireborn.mataroa.blog/blog/the-slow-death-of-the-power-user/) - Perspectives on simplifying digital experiences for users.

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

* [2026-02-26, 16:23:31](https://lobste.rs/s/nxmzzn/snakes_run_rendering_100m_pixels_second) - [snakes.run: rendering 100M pixels a second over ssh ·](https://eieio.games/blog/secure-massively-multiplayer-snake/)
* [2026-02-26, 16:03:00](https://slashdot.org/story/26/02/26/163233/burger-king-will-use-ai-to-check-if-employees-say-please-and-thank-you?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Burger King Will Use AI To Check If Employees Say &apos;Please&apos; and &apos;Thank You&apos;](https://slashdot.org/story/26/02/26/163233/burger-king-will-use-ai-to-check-if-employees-say-please-and-thank-you?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-26, 16:02:37](https://news.ycombinator.com/item?id=47167858) - [Nano Banana 2: Google&apos;s latest AI image generation model](https://blog.google/innovation-and-ai/technology/ai/nano-banana-2/)
* [2026-02-26, 15:55:48](https://news.ycombinator.com/item?id=47167763) - [New AirSnitch attack breaks Wi-Fi encryption in homes, offices, and enterprises](https://arstechnica.com/security/2026/02/new-airsnitch-attack-breaks-wi-fi-encryption-in-homes-offices-and-enterprises/)
* [2026-02-26, 15:53:30](https://news.ycombinator.com/item?id=47167733) - [Why Developers Keep Choosing Claude over Every Other AI](https://www.bhusalmanish.com.np/blog/posts/why-claude-wins-coding.html)
* [2026-02-26, 15:21:35](https://lobste.rs/s/kj7g7j/ordered_dithering_with_arbitrary) - [Ordered Dithering with Arbitrary or Irregular Colour Palettes](https://matejlou.blog/2023/12/06/ordered-dithering-for-arbitrary-or-irregular-palettes/)
* [2026-02-26, 15:14:20](https://news.ycombinator.com/item?id=47167171) - [In 2025, Meta paid an effective federal tax rate of 3.5%](https://bsky.app/profile/rbreich.bsky.social/post/3mfptlfeucn2i)
* [2026-02-26, 15:00:00](https://entertainment.slashdot.org/story/26/02/26/1422259/hbo-maxs-password-sharing-crackdown-will-expand-globally-in-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [HBO Max&apos;s Password-Sharing Crackdown Will Expand Globally in 2026](https://entertainment.slashdot.org/story/26/02/26/1422259/hbo-maxs-password-sharing-crackdown-will-expand-globally-in-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-26, 14:50:46](https://lobste.rs/s/9p2h3l/unit_testing_your_code_s_performance_part) - [Unit testing your code’s performance, part 2: Testing for speed changes](https://pythonspeed.com/articles/speed-unit-tests/)
* [2026-02-26, 14:21:05](https://news.ycombinator.com/item?id=47166473) - [Story of XZ Backdoor [video]](https://www.youtube.com/watch?v=aoag03mSuXQ)
* [2026-02-26, 14:05:46](https://news.ycombinator.com/item?id=47166264) - [BuildKit: Docker&apos;s Hidden Gem That Can Build Almost Anything](https://tuananh.net/2026/02/25/buildkit-docker-hidden-gem/)
* [2026-02-26, 14:00:00](https://slashdot.org/story/26/02/26/1358254/ebay-is-laying-off-about-800-workers-6-of-global-workforce?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EBay Is Laying Off About 800 Workers, 6% of Global Workforce](https://slashdot.org/story/26/02/26/1358254/ebay-is-laying-off-about-800-workers-6-of-global-workforce?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-26, 13:58:53](https://lobste.rs/s/ccworf/model_collapse_ends_ai_hype) - [Model Collapse Ends AI Hype](https://youtu.be/ShusuVq32hc)
* [2026-02-26, 13:36:33](https://lobste.rs/s/3kwdvv/can_llms_sat) - [Can LLMs SAT?](https://blog.aiono.dev/posts/can-llms-sat.html)
* [2026-02-26, 13:28:59](https://news.ycombinator.com/item?id=47165792) - [Time Is Different](https://shkspr.mobi/blog/2026/02/this-time-is-different/)
* [2026-02-26, 13:25:05](https://lobste.rs/s/mj2o3h/data_confidentiality_via_storage) - [Data Confidentiality via Storage Encryption on Embedded Linux Devices](https://sigma-star.at/blog/2026/02/data-confidentiality-via-storage-encryption-on-embedded-linux-devices/)
* [2026-02-26, 13:16:30](https://news.ycombinator.com/item?id=47165648) - [just-bash: Bash for Agents](https://github.com/vercel-labs/just-bash)
* [2026-02-26, 12:52:50](https://news.ycombinator.com/item?id=47165397) - [Anthropic ditches its core safety promise](https://www.cnn.com/2026/02/25/tech/anthropic-safety-policy-change)
* [2026-02-26, 12:44:28](https://news.ycombinator.com/item?id=47165299) - [Fentanyl makeover: Core structural redesign could lead to safer pain medications](https://www.scripps.edu/news-and-events/press-room/2026/20260211-janda-molecule.html)
* [2026-02-26, 12:15:38](https://news.ycombinator.com/item?id=47165046) - [Show HN: Agent Swarm – Multi-agent self-learning teams (OSS)](https://github.com/desplega-ai/agent-swarm)
* [2026-02-26, 12:07:00](https://news.slashdot.org/story/26/02/26/127223/americans-are-leaving-the-us-in-record-numbers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ Americans Are Leaving the US in Record Numbers](https://news.slashdot.org/story/26/02/26/127223/americans-are-leaving-the-us-in-record-numbers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-26, 12:02:14](https://news.ycombinator.com/item?id=47164933) - [Hightouch (YC S19) Is Hiring](https://hightouch.com/careers#open-positions)
* [2026-02-26, 11:54:23](https://lobste.rs/s/7jbycp/maiao_easy_gerrit_style_stacked_diffs) - [maiao: easy, Gerrit-style, stacked diffs workflow for GitHub](https://github.com/adevinta/maiao)
* [2026-02-26, 11:48:00](https://soylentnews.org/article.pl?sid=26/02/25/1551209&amp;from=rss) - [Michael Pollan Says AI May &apos;Think&apos; — but It Will Never be Conscious](https://soylentnews.org/article.pl?sid=26/02/25/1551209&amp;from=rss)
* [2026-02-26, 11:21:58](https://lobste.rs/s/ibkc72/git_postgres) - [Git in Postgres](https://nesbitt.io/2026/02/26/git-in-postgres.html)
* [2026-02-26, 10:40:45](https://news.ycombinator.com/item?id=47164270) - [Show HN: Terminal Phone – E2EE Walkie Talkie from the Command Line](https://gitlab.com/here_forawhile/terminalphone)
* [2026-02-26, 09:35:08](https://news.ycombinator.com/item?id=47163885) - [Tell HN: YC companies scrape GitHub activity, send spam emails to users](https://news.ycombinator.com/item?id=47163885)
* [2026-02-26, 09:00:00](https://tech.slashdot.org/story/26/02/26/0543208/cloudflare-experiment-ports-most-of-nextjs-api-in-one-week-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cloudflare Experiment Ports Most of Next.js API in &apos;One Week&apos; With AI](https://tech.slashdot.org/story/26/02/26/0543208/cloudflare-experiment-ports-most-of-nextjs-api-in-one-week-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-26, 08:49:37](https://lobste.rs/s/2uvfwd/96_5_confusables_txt_from_unicode_is_not) - [96.5% of confusables.txt from Unicode is not high-risk](https://paultendo.github.io/posts/confusable-vision-visual-similarity/)
* [2026-02-26, 08:43:40](https://lobste.rs/s/adp9db/evolving_languages_faster_with_type) - [Evolving Languages Faster with Type Tailoring (2024)](https://lambdaland.org/posts/2024-07-15_type_tailoring/)
* [2026-02-26, 07:58:03](https://lobste.rs/s/0pof41/buildkit_docker_s_hidden_gem_can_build) - [BuildKit: Docker&apos;s hidden gem that can build almost anything](https://tuananh.net/2026/02/25/buildkit-docker-hidden-gem/)
* [2026-02-26, 07:42:39](https://lobste.rs/s/oj6hru/google_api_keys_weren_t_secrets_then) - [Google API Keys Weren&apos;t Secrets. But then Gemini Changed the Rules](https://trufflesecurity.com/blog/google-api-keys-werent-secrets-but-then-gemini-changed-the-rules)
* [2026-02-26, 07:06:00](https://soylentnews.org/article.pl?sid=26/02/25/1546252&amp;from=rss) - [80386 Protection](https://soylentnews.org/article.pl?sid=26/02/25/1546252&amp;from=rss)
* [2026-02-26, 06:07:48](https://lobste.rs/s/uikg3e/open_letter_google_regarding_mandatory) - [An Open Letter to Google regarding Mandatory Developer Registration for Android](https://keepandroidopen.org/open-letter/)
* [2026-02-26, 06:01:00](https://slashdot.org/story/26/02/25/1814206/uber-employees-have-built-an-ai-clone-of-their-ceo-to-practice-presentations-before-the-real-thing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Uber Employees Have Built an AI Clone of Their CEO To Practice Presentations Before the Real Thing](https://slashdot.org/story/26/02/25/1814206/uber-employees-have-built-an-ai-clone-of-their-ceo-to-practice-presentations-before-the-real-thing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-26, 04:14:20](https://lobste.rs/s/1y4gid/introducing_lyte2d_comfy_little_game) - [Introducing Lyte2D: A comfy little game engine](https://lyte2d.com/lyte.html?zip=public/lyte-intro.zip)
* [2026-02-26, 03:30:00](https://it.slashdot.org/story/26/02/25/1743213/ai-can-find-hundreds-of-software-bugs----fixing-them-is-another-story?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Can Find Hundreds of Software Bugs -- Fixing Them Is Another Story](https://it.slashdot.org/story/26/02/25/1743213/ai-can-find-hundreds-of-software-bugs----fixing-them-is-another-story?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-26, 02:20:00](https://soylentnews.org/article.pl?sid=26/02/25/1544219&amp;from=rss) - [AI Bot Seemingly Shames Developer for Rejected Pull Request](https://soylentnews.org/article.pl?sid=26/02/25/1544219&amp;from=rss)
* [2026-02-26, 01:30:00](https://slashdot.org/story/26/02/25/1732220/prediction-market-platform-kalshi-discloses-first-insider-trading-enforcement-action?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Prediction Market Platform Kalshi Discloses First Insider Trading Enforcement Action](https://slashdot.org/story/26/02/25/1732220/prediction-market-platform-kalshi-discloses-first-insider-trading-enforcement-action?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-26, 01:20:36](https://lobste.rs/s/yhv8lq/against_query_based_compilers) - [Against Query Based Compilers](https://matklad.github.io/2026/02/25/against-query-based-compilers.html)
* [2026-02-25, 23:16:40](https://news.ycombinator.com/item?id=47159430) - [Banned in California](https://www.bannedincalifornia.org/)
* [2026-02-25, 23:02:58](https://news.ycombinator.com/item?id=47159302) - [First Website (1992)](https://info.cern.ch)
* [2026-02-25, 22:54:26](https://lobste.rs/s/rscdhi/long_range_e_bike) - [Long Range E-Bike](https://jacquesmattheij.com/long-range-ebike/)
* [2026-02-25, 22:30:00](https://tech.slashdot.org/story/26/02/25/1648247/tech-firms-arent-just-encouraging-their-workers-to-use-ai-theyre-enforcing-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tech Firms Aren&apos;t Just Encouraging Their Workers To Use AI. They&apos;re Enforcing It.](https://tech.slashdot.org/story/26/02/25/1648247/tech-firms-arent-just-encouraging-their-workers-to-use-ai-theyre-enforcing-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-25, 22:29:25](https://news.ycombinator.com/item?id=47158975) - [How will OpenAI compete?](https://www.ben-evans.com/benedictevans/2026/2/19/how-will-openai-compete-nkg2x)
* [2026-02-25, 21:45:04](https://lobste.rs/s/jakwkg/slow_death_power_user) - [The Slow Death of the Power User](https://fireborn.mataroa.blog/blog/the-slow-death-of-the-power-user/)
* [2026-02-25, 21:35:00](https://soylentnews.org/article.pl?sid=26/02/24/0734201&amp;from=rss) - [AI Agent Throws LAN Party](https://soylentnews.org/article.pl?sid=26/02/24/0734201&amp;from=rss)
* [2026-02-25, 21:16:34](https://lobste.rs/s/vtyttw/what_interesting_smaller_conferences) - [What interesting (and smaller) conferences are there in 2026?](https://lobste.rs/s/vtyttw/what_interesting_smaller_conferences)
* [2026-02-25, 21:00:00](https://yro.slashdot.org/story/26/02/25/1632246/americans-are-destroying-flock-surveillance-cameras?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Americans Are Destroying Flock Surveillance Cameras](https://yro.slashdot.org/story/26/02/25/1632246/americans-are-destroying-flock-surveillance-cameras?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-25, 20:29:37](https://news.ycombinator.com/item?id=47157398) - [Making MCP cheaper via CLI](https://kanyilmaz.me/2026/02/23/cli-vs-mcp.html)
* [2026-02-25, 20:22:34](https://lobste.rs/s/to9uvq/recursive_make_considered_harmful_1998) - [Recursive Make Considered Harmful [1998,2006]](https://accu.org/journals/overload/14/71/miller_2004/)
* [2026-02-25, 20:16:47](https://news.ycombinator.com/item?id=47157224) - [Jimi Hendrix was a systems engineer](https://spectrum.ieee.org/jimi-hendrix-systems-engineer)
* [2026-02-25, 20:11:49](https://lobste.rs/s/sys4eu/practical_decentralization) - [Practical Decentralization](https://pfrazee.com/blog/practical-decentralization)
* [2026-02-25, 20:01:00](https://games.slashdot.org/story/26/02/25/1622230/xbox-co-founder-says-microsoft-is-quietly-sunsetting-the-platform?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Xbox Co-founder Says Microsoft is Quietly Sunsetting the Platform](https://games.slashdot.org/story/26/02/25/1622230/xbox-co-founder-says-microsoft-is-quietly-sunsetting-the-platform?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-25, 19:54:14](https://news.ycombinator.com/item?id=47156925) - [Google API keys weren&apos;t secrets, but then Gemini changed the rules](https://trufflesecurity.com/blog/google-api-keys-werent-secrets-but-then-gemini-changed-the-rules)
* [2026-02-25, 19:00:00](https://yro.slashdot.org/story/26/02/25/1524257/hacker-used-anthropics-claude-to-steal-sensitive-mexican-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hacker Used Anthropic&apos;s Claude To Steal Sensitive Mexican Data](https://yro.slashdot.org/story/26/02/25/1524257/hacker-used-anthropics-claude-to-steal-sensitive-mexican-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-25, 18:49:09](https://lobste.rs/s/be27h4/porting_doom_20_year_old_voip_phone) - [Porting Doom to a 20-year-old VoIP phone](https://0x19.co/post/snom360_doom/)
* [2026-02-25, 18:27:11](https://lobste.rs/s/llboto/fake_job_interviews_are_installing) - [Fake Job Interviews Are Installing Backdoors on Developer Machines](https://threatroad.substack.com/p/fake-job-interviews-are-installing)
* [2026-02-25, 18:00:00](https://entertainment.slashdot.org/story/26/02/25/1517205/dvd-sales-decline-slows-sharply-as-gen-z-discovers-the-appeal-of-physical-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DVD Sales Decline Slows Sharply as Gen Z Discovers the Appeal of Physical Media](https://entertainment.slashdot.org/story/26/02/25/1517205/dvd-sales-decline-slows-sharply-as-gen-z-discovers-the-appeal-of-physical-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-25, 17:16:59](https://lobste.rs/s/l4nw7u/windows_11_notepad_support_markdown) - [Windows 11 Notepad to support markdown](https://blogs.windows.com/windows-insider/2026/01/21/notepad-and-paint-updates-begin-rolling-out-to-windows-insiders/)
* [2026-02-25, 17:14:19](https://news.ycombinator.com/item?id=47154399) - [Windows 11 Notepad to support Markdown](https://blogs.windows.com/windows-insider/2026/01/21/notepad-and-paint-updates-begin-rolling-out-to-windows-insiders/)
* [2026-02-25, 17:00:00](https://science.slashdot.org/story/26/02/25/1446236/scientists-crack-the-case-of-screeching-scotch-tape?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Crack the Case of &apos;Screeching&apos; Scotch Tape](https://science.slashdot.org/story/26/02/25/1446236/scientists-crack-the-case-of-screeching-scotch-tape?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-25, 16:37:00](https://soylentnews.org/article.pl?sid=26/02/24/0444250&amp;from=rss) - [Astronomers Identify a Galaxy Made Almost Entirely of Dark Matter](https://soylentnews.org/article.pl?sid=26/02/24/0444250&amp;from=rss)
* [2026-02-25, 16:31:26](https://news.ycombinator.com/item?id=47153798) - [Bus stop balancing is fast, cheap, and effective](https://worksinprogress.co/issue/the-united-states-needs-fewer-bus-stops/)
* [2026-02-25, 16:00:00](https://slashdot.org/story/26/02/25/1124220/microsoft-japan-raided-over-suspected-violation-of-anti-monopoly-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Japan Raided Over Suspected Violation of Anti-Monopoly Law](https://slashdot.org/story/26/02/25/1124220/microsoft-japan-raided-over-suspected-violation-of-anti-monopoly-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-25, 14:35:23](https://lobste.rs/s/bwkwba/new_accounts_on_hn_10x_more_likely_use_em) - [New accounts on HN 10x more likely to use EM-dashes](https://www.marginalia.nu/weird-ai-crap/hn/)
* [2026-02-25, 13:07:01](https://lobste.rs/s/qjl5xc/your_system_is_fine_your_users_aren_t) - [Your system is fine. Your users aren&apos;t](https://blog.incrementalforgetting.tech/p/your-system-is-fine-your-users-arent)
* [2026-02-25, 11:55:00](https://soylentnews.org/article.pl?sid=26/02/24/0437208&amp;from=rss) - [China Remains Embedded in US Energy Networks &apos;for the Purpose of Taking It Down&apos;](https://soylentnews.org/article.pl?sid=26/02/24/0437208&amp;from=rss)
* [2026-02-25, 07:13:00](https://soylentnews.org/article.pl?sid=26/02/24/0427256&amp;from=rss) - [California Bill Would Restrict 3D Printers to State-Approved Models to Prevent Making  Gun Parts](https://soylentnews.org/article.pl?sid=26/02/24/0427256&amp;from=rss)
* [2026-02-25, 02:26:00](https://soylentnews.org/article.pl?sid=26/02/24/0420243&amp;from=rss) - [AI Apps on the Google Play Store Are Leaking Customer Data and Photos](https://soylentnews.org/article.pl?sid=26/02/24/0420243&amp;from=rss)
* [2026-02-24, 21:41:00](https://soylentnews.org/politics/article.pl?sid=26/02/23/103249&amp;from=rss) - [OS-Level Age Verification in Proposed Legislation in Colorado](https://soylentnews.org/politics/article.pl?sid=26/02/23/103249&amp;from=rss)
* [2026-02-24, 17:18:17](https://news.ycombinator.com/item?id=47139716) - [Large-Scale Online Deanonymization with LLMs](https://simonlermen.substack.com/p/large-scale-online-deanonymization)
* [2026-02-24, 16:56:00](https://soylentnews.org/article.pl?sid=26/02/23/0959244&amp;from=rss) - [Is This Glass Square the Long, Long Future of Data Storage ?](https://soylentnews.org/article.pl?sid=26/02/23/0959244&amp;from=rss)
* [2026-02-24, 12:09:00](https://soylentnews.org/article.pl?sid=26/02/23/010246&amp;from=rss) - [Two Days of Oatmeal Reduce Cholesterol Level](https://soylentnews.org/article.pl?sid=26/02/23/010246&amp;from=rss)
* [2026-02-24, 07:21:00](https://soylentnews.org/article.pl?sid=26/02/23/0058242&amp;from=rss) - [Video Games are Losing the \&quot;Attention War\&quot; to Gambling, Porn, and Crypto](https://soylentnews.org/article.pl?sid=26/02/23/0058242&amp;from=rss)
* [2026-02-24, 02:37:00](https://soylentnews.org/article.pl?sid=26/02/23/0050217&amp;from=rss) - [Why Are Tatooine Planets Rare? Blame General Relativity](https://soylentnews.org/article.pl?sid=26/02/23/0050217&amp;from=rss)
* [2026-02-23, 21:53:00](https://soylentnews.org/article.pl?sid=26/02/22/1313253&amp;from=rss) - [How Digitally Sovereign is Your Organization? This Red Hat Tool Can Tell You in Minutes](https://soylentnews.org/article.pl?sid=26/02/22/1313253&amp;from=rss)
* [2026-02-23, 17:07:00](https://soylentnews.org/article.pl?sid=26/02/22/1311241&amp;from=rss) - [Goodbye Paper Vehicle Titles – Illinois State is Making Digital Mandatory](https://soylentnews.org/article.pl?sid=26/02/22/1311241&amp;from=rss)
* [2026-02-23, 17:01:26](https://news.ycombinator.com/item?id=47125044) - [Some silly Z3 scripts I wrote](https://www.hillelwayne.com/post/z3-examples/)
* [2026-02-23, 12:22:00](https://soylentnews.org/article.pl?sid=26/02/22/139236&amp;from=rss) - [Concrete “Battery” Developed at MIT Now Packs 10 Times the Power](https://soylentnews.org/article.pl?sid=26/02/22/139236&amp;from=rss)
* [2026-02-23, 07:41:00](https://soylentnews.org/article.pl?sid=26/02/22/1259218&amp;from=rss) - [Privacy Is Not a Price You Pay for Growth](https://soylentnews.org/article.pl?sid=26/02/22/1259218&amp;from=rss)
* [2026-02-23, 02:55:00](https://soylentnews.org/article.pl?sid=26/02/22/1256215&amp;from=rss) - [Pink Noise Reduces REM Sleep and May Harm Sleep Quality](https://soylentnews.org/article.pl?sid=26/02/22/1256215&amp;from=rss)
* [2026-02-22, 22:10:00](https://soylentnews.org/article.pl?sid=26/02/21/1350257&amp;from=rss) - [Richard Stallman: The Legend of Software Freedom That Saved the World](https://soylentnews.org/article.pl?sid=26/02/21/1350257&amp;from=rss)
* [2026-02-22, 17:28:00](https://soylentnews.org/article.pl?sid=26/02/21/1339255&amp;from=rss) - [NASA Releases Starliner Failures Report as It Preps for March Launch of Artemis 2](https://soylentnews.org/article.pl?sid=26/02/21/1339255&amp;from=rss)
* [2026-02-22, 16:25:48](https://news.ycombinator.com/item?id=47112299) - [Artist who “paints” portraits on glass by hitting it with a hammer](https://simonbergerart.com)
* [2026-02-22, 14:15:09](https://news.ycombinator.com/item?id=47111164) - [A 26-Gram Butterfly-Inspired Robot Achieving Autonomous Tailless Flight](https://arxiv.org/abs/2602.06811)
* [2026-02-22, 12:41:00](https://soylentnews.org/article.pl?sid=26/02/21/1334230&amp;from=rss) - [Microsoft&apos;s New Windows 11 Speed Test is Just a Link to Ookla&apos;s Speedtest Via Bing](https://soylentnews.org/article.pl?sid=26/02/21/1334230&amp;from=rss)
* [2026-02-22, 12:13:15](https://news.ycombinator.com/item?id=47110393) - [Writers and Their Day Jobs](https://lithub.com/the-work-behind-the-writing-on-writers-and-their-day-jobs/)
* [2026-02-22, 11:03:19](https://news.ycombinator.com/item?id=47110049) - [Show HN: Modern Reimplementation of the Speck Molecule Renderer](https://github.com/vangelov/modern-speck)
* [2026-02-22, 07:59:00](https://soylentnews.org/article.pl?sid=26/02/21/1326214&amp;from=rss) - [It&apos;s Time to Get Rid of Networked Cameras](https://soylentnews.org/article.pl?sid=26/02/21/1326214&amp;from=rss)
* [2026-02-22, 03:54:01](https://news.ycombinator.com/item?id=47107974) - [Ferret-UI Lite: Lessons from Building Small On-Device GUI Agents](https://machinelearning.apple.com/research/ferret-ui)
* [2026-02-22, 03:14:00](https://soylentnews.org/article.pl?sid=26/02/21/1322208&amp;from=rss) - [Mechanochemical Breakthrough Unlocks Cheap, Safe, Powdered Hydrogen](https://soylentnews.org/article.pl?sid=26/02/21/1322208&amp;from=rss)
