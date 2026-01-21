# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software Updates

* [FSNotes 7 - Remarkably Fast Plain Text Notes](https://fsnot.es/v7/) offers an updated tool for seamless plain text note-taking.

* [Adobe Acrobat Now Lets You Edit Files Using Prompts, Generate Podcast Summaries](https://slashdot.org/story/26/01/21/198252/adobe-acrobat-now-lets-you-edit-files-using-prompts-generate-podcast-summaries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) introduces new interactive editing tools for productivity.

* [Linux from Scratch](https://www.linuxfromscratch.org/lfs/view/stable/) provides a detailed guide to building your own custom Linux system.

* [pandas 3.0.0 Released](https://github.com/pandas-dev/pandas/releases/tag/v3.0.0) marks a major update to the popular data analysis library.

* [Skip Is Now Free and Open Source](https://skip.dev/blog/skip-is-free/) announces that the programming language Skip is fully open sourced.

* [Making an LSP for Great Good](https://thunderseethe.dev/posts/lsp-base/) examines the development of language server protocols (LSPs) for better software development.

* [The WebRacket language](https://github.com/soegaard/webracket) bridges Racket and WebAssembly to deliver a versatile development tool.

## Science and Environment

* [Ozempic is Reshaping the Fast Food Industry](https://science.slashdot.org/story/26/01/21/191222/ozempic-is-reshaping-the-fast-food-industry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) explores the medication's surprising impact on dietary habits.

* [Half of World's CO2 Emissions Come From Just 32 Fossil Fuel Firms, Study Shows](https://news.slashdot.org/story/26/01/21/1913218/half-of-worlds-co2-emissions-come-from-just-32-fossil-fuel-firms-study-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) addresses the environmental accountability of corporations.

* [Stanford Scientists Found a Way to Regrow Cartilage and Stop Arthritis](https://www.sciencedaily.com/releases/2026/01/260120000333.htm) showcases a breakthrough in medical research.

* [Mosquitoes’ Thirst for Human Blood Has Increased as Biodiversity Loss Worsens](https://soylentnews.org/article.pl?sid=26/01/19/046252&amp;from=rss) links biodiversity degradation to an increase in mosquito-borne diseases.

* [New Studies Can Explain Why Comet 3I/Atlas Isn't an Alien (Probably)](https://soylentnews.org/article.pl?sid=26/01/19/0357224&amp;from=rss) unpicks speculation and provides a scientific explanation of the rogue comet's origins.

## AI and Ethical Challenges

* [eBay Explicitly Bans AI 'Buy for Me' Agents in User Agreement Update](https://www.valueaddedresource.net/ebay-bans-ai-agents-updates-arbitration-user-agreement-feb-2026/) discusses newly established restrictions on AI within the platform.

* [AI Company Eightfold Sued for Helping Companies Secretly Score Job Seekers](https://yro.slashdot.org/story/26/01/21/1841214/ai-company-eightfold-sued-for-helping-companies-secretly-score-job-seekers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) raises questions over employment practices involving AI.

* [YouTube CEO Acknowledges 'AI Slop' Problem, Says Platform Will Curb Low-Quality AI Content](https://news.slashdot.org/story/26/01/21/1422227/youtube-ceo-acknowledges-ai-slop-problem-says-platform-will-curb-low-quality-ai-content?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) addresses concerns over AI-generated content moderation.

* ['Society Cannot Function If No One is Accountable for AI' — Jaron Lanier](https://soylentnews.org/article.pl?sid=26/01/17/0229252&amp;from=rss) captures a critical stance on ethical AI usage and accountability.

## Innovation and Advancements

* [TeraWave Satellite Communications Network](https://www.blueorigin.com/terawave) introduces powerful satellite technology by Blue Origin.

* [Building the World's First Graviton Detector](https://soylentnews.org/article.pl?sid=26/01/19/166239&amp;from=rss) reflects advancements in the pursuit of understanding gravitational waves.

* [I Made Zig Compute 33 Million Satellite Positions in 3 Seconds. No GPU Required](https://atempleton.bearblog.dev/i-made-zig-compute-33-million-satellite-positions-in-3-seconds-no-gpu-required/) highlights impressive performance in computational efficiency.

* [Aurora Watch In Effect As Severe Solar Storm Slams Into Earth](https://news.slashdot.org/story/26/01/21/0442254/aurora-watch-in-effect-as-severe-solar-storm-slams-into-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) reports on solar activity with potential viewing opportunities near Earth.

## Social and Cultural Topics

* [Comic-Con Bans AI Art After Artist Pushback](https://slashdot.org/story/26/01/21/1528206/comic-con-bans-ai-art-after-artist-pushback?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) responds to controversy around AI usage in the art community.

* [How Screwed is Generation Alpha, and the Generations Which Will Depend on Them?](https://soylentnews.org/article.pl?sid=26/01/18/001228&amp;from=rss) presents an analysis of societal trends impacting future generations.

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

* [2026-01-21, 21:28:48](https://lobste.rs/s/koy1fz/fsnotes_7_remarkable_fast_plain_text) - [FSNotes 7 - Remarkable fast plain text notes](https://fsnot.es/v7/)
* [2026-01-21, 21:26:18](https://news.ycombinator.com/item?id=46711792) - [Jerry (YC S17) Is Hiring](https://www.ycombinator.com/companies/jerry-inc/jobs/QaoK3rw-software-engineer-core-automation-marketplace)
* [2026-01-21, 21:22:00](https://science.slashdot.org/story/26/01/21/191222/ozempic-is-reshaping-the-fast-food-industry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ozempic is Reshaping the Fast Food Industry](https://science.slashdot.org/story/26/01/21/191222/ozempic-is-reshaping-the-fast-food-industry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-21, 21:13:59](https://news.ycombinator.com/item?id=46711649) - [Show HN: TerabyteDeals – Compare storage prices by $/TB](https://terabytedeals.com)
* [2026-01-21, 21:07:47](https://news.ycombinator.com/item?id=46711574) - [eBay Explicitly Bans AI \&quot;Buy for Me\&quot; Agents in User Agreement Update](https://www.valueaddedresource.net/ebay-bans-ai-agents-updates-arbitration-user-agreement-feb-2026/)
* [2026-01-21, 20:45:00](https://news.slashdot.org/story/26/01/21/1913218/half-of-worlds-co2-emissions-come-from-just-32-fossil-fuel-firms-study-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Half of World&apos;s CO2 Emissions Come From Just 32 Fossil Fuel Firms, Study Shows](https://news.slashdot.org/story/26/01/21/1913218/half-of-worlds-co2-emissions-come-from-just-32-fossil-fuel-firms-study-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-21, 20:34:48](https://news.ycombinator.com/item?id=46711171) - [L∃AN together – live stream schedule](https://leanprover-community.github.io/lt2026/schedule.html)
* [2026-01-21, 20:01:00](https://slashdot.org/story/26/01/21/198252/adobe-acrobat-now-lets-you-edit-files-using-prompts-generate-podcast-summaries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Adobe Acrobat Now Lets You Edit Files Using Prompts, Generate Podcast Summaries](https://slashdot.org/story/26/01/21/198252/adobe-acrobat-now-lets-you-edit-files-using-prompts-generate-podcast-summaries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-21, 19:45:21](https://news.ycombinator.com/item?id=46710569) - [OpenAI API Logs: Unpatched data exfiltration](https://www.promptarmor.com/resources/openai-api-logs-unpatched-data-exfiltration)
* [2026-01-21, 19:44:45](https://news.ycombinator.com/item?id=46710560) - [Magnetic Remote Control of Biology](https://bsky.app/profile/andrewgyork.bsky.social/post/3mcbrdoftak2l)
* [2026-01-21, 19:22:00](https://news.slashdot.org/story/26/01/21/1922232/the-gold-plating-of-american-water?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Gold Plating of American Water](https://news.slashdot.org/story/26/01/21/1922232/the-gold-plating-of-american-water?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-21, 18:49:00](https://soylentnews.org/article.pl?sid=26/01/19/1619249&amp;from=rss) - [Hobbies Don&apos;t Just Improve Personal Lives, They Can Boost Workplace Creativity Too](https://soylentnews.org/article.pl?sid=26/01/19/1619249&amp;from=rss)
* [2026-01-21, 18:44:40](https://news.ycombinator.com/item?id=46709727) - [Linux from Scratch](https://www.linuxfromscratch.org/lfs/view/stable/)
* [2026-01-21, 18:44:00](https://yro.slashdot.org/story/26/01/21/1841214/ai-company-eightfold-sued-for-helping-companies-secretly-score-job-seekers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Company Eightfold Sued For Helping Companies Secretly Score Job Seekers](https://yro.slashdot.org/story/26/01/21/1841214/ai-company-eightfold-sued-for-helping-companies-secretly-score-job-seekers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-21, 18:31:58](https://news.ycombinator.com/item?id=46709548) - [TeraWave Satellite Communications Network](https://www.blueorigin.com/terawave)
* [2026-01-21, 18:31:19](https://news.ycombinator.com/item?id=46709543) - [Show HN: Rails UI](https://railsui.com/)
* [2026-01-21, 18:18:27](https://lobste.rs/s/zgqp6i/how_binary_dependencies_work_across) - [How Binary Dependencies Work Across Different Languages](https://vlad.website/how-binary-dependencies-work/)
* [2026-01-21, 18:05:36](https://news.ycombinator.com/item?id=46709179) - [Stanford scientists found a way to regrow cartilage and stop arthritis](https://www.sciencedaily.com/releases/2026/01/260120000333.htm)
* [2026-01-21, 18:04:00](https://games.slashdot.org/story/26/01/21/184240/ubisoft-cancels-six-games-slashes-guidance-in-restructuring?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ubisoft Cancels Six Games, Slashes Guidance in Restructuring](https://games.slashdot.org/story/26/01/21/184240/ubisoft-cancels-six-games-slashes-guidance-in-restructuring?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-21, 18:03:04](https://lobste.rs/s/t5pb5f/hate_is_strong_word_i_really_really_really) - [Hate is a strong word, but I really really really don’t like Windows 11](https://blog.urara.pl/hate-is-a-strong-word-but-i-really-really-really-don&apos;t-like-windows-11)
* [2026-01-21, 17:52:17](https://news.ycombinator.com/item?id=46708990) - [Show HN: Company hiring trends and insights from job postings](https://jobswithgpt.com/company-profiles/)
* [2026-01-21, 17:36:09](https://news.ycombinator.com/item?id=46708766) - [Slouching Towards Bethlehem – Joan Didion (1967)](https://www.saturdayeveningpost.com/2017/06/didion/)
* [2026-01-21, 17:28:03](https://news.ycombinator.com/item?id=46708678) - [Waiting for dawn in search: Search index, Google rulings and impact on Kagi](https://blog.kagi.com/waiting-dawn-search)
* [2026-01-21, 17:25:00](https://it.slashdot.org/story/26/01/21/1639200/ireland-wants-to-give-its-cops-spyware-ability-to-crack-encrypted-messages?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ireland Wants To Give Its Cops Spyware, Ability To Crack Encrypted Messages](https://it.slashdot.org/story/26/01/21/1639200/ireland-wants-to-give-its-cops-spyware-ability-to-crack-encrypted-messages?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-21, 17:03:31](https://news.ycombinator.com/item?id=46708351) - [Challenges in Join Optimization](https://www.starrocks.io/blog/inside-starrocks-why-joins-are-faster-than-youd-expect)
* [2026-01-21, 16:56:51](https://lobste.rs/s/s8un6w/pandas_3_0_0_released) - [pandas 3.0.0 released](https://github.com/pandas-dev/pandas/releases/tag/v3.0.0)
* [2026-01-21, 16:53:36](https://lobste.rs/s/lz7hxw/lobsters_blog_carnival_announcement) - [Lobsters Blog Carnival Announcement](https://lobste.rs/s/lz7hxw/lobsters_blog_carnival_announcement)
* [2026-01-21, 16:45:00](https://tech.slashdot.org/story/26/01/21/1622227/google-temporarily-disabled-youtubes-advanced-captions-without-warning?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Temporarily Disabled YouTube&apos;s Advanced Captions Without Warning](https://tech.slashdot.org/story/26/01/21/1622227/google-temporarily-disabled-youtubes-advanced-captions-without-warning?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-21, 16:43:57](https://news.ycombinator.com/item?id=46708096) - [PicoPCMCIA – a PCMCIA development board for retro-computing enthusiasts](https://www.yyzkevin.com/picopcmcia/)
* [2026-01-21, 16:38:26](https://news.ycombinator.com/item?id=46708032) - [JPEG XL Test Page](https://tildeweb.nl/~michiel/jxl/)
* [2026-01-21, 16:15:06](https://news.ycombinator.com/item?id=46707708) - [Three types of LLM workloads and how to serve them](https://modal.com/llm-almanac/workloads)
* [2026-01-21, 16:14:39](https://news.ycombinator.com/item?id=46707699) - [Tell HN: Bending Spoons laid off almost everybody at Vimeo yesterday](https://news.ycombinator.com/item?id=46707699)
* [2026-01-21, 16:13:02](https://lobste.rs/s/grm2jb/making_lsp_for_great_good) - [Making an LSP for great good](https://thunderseethe.dev/posts/lsp-base/)
* [2026-01-21, 16:05:00](https://slashdot.org/story/26/01/21/1532240/japan-restarts-worlds-largest-nuclear-plant-as-fukushima-memories-loom-large?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Japan Restarts World&apos;s Largest Nuclear Plant as Fukushima Memories Loom Large](https://slashdot.org/story/26/01/21/1532240/japan-restarts-worlds-largest-nuclear-plant-as-fukushima-memories-loom-large?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-21, 16:04:49](https://news.ycombinator.com/item?id=46707572) - [Claude&apos;s New Constitution](https://www.anthropic.com/news/claude-new-constitution)
* [2026-01-21, 15:52:15](https://news.ycombinator.com/item?id=46707409) - [Show HN: SpeechOS – Wispr Flow-inspired voice input for any web app](https://www.speechos.ai/)
* [2026-01-21, 15:27:00](https://slashdot.org/story/26/01/21/1528206/comic-con-bans-ai-art-after-artist-pushback?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Comic-Con Bans AI Art After Artist Pushback](https://slashdot.org/story/26/01/21/1528206/comic-con-bans-ai-art-after-artist-pushback?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-21, 15:22:10](https://lobste.rs/s/zntutr/skip_is_now_free_open_source) - [Skip Is Now Free and Open Source](https://skip.dev/blog/skip-is-free/)
* [2026-01-21, 15:20:53](https://news.ycombinator.com/item?id=46706906) - [Skip Is Now Free and Open Source](https://skip.dev/blog/skip-is-free/)
* [2026-01-21, 15:19:55](https://lobste.rs/s/wee6qk/vibecoding_2) - [Vibecoding #2](https://matklad.github.io/2026/01/20/vibecoding-2.html)
* [2026-01-21, 14:58:45](https://lobste.rs/s/zjje5x/so_why_should_gnome_support_server_side) - [So, why *should* GNOME support server side decorations?](https://blister.zip/posts/gnome-ssd/)
* [2026-01-21, 14:54:56](https://news.ycombinator.com/item?id=46706528) - [Show HN: ChartGPU – WebGPU-powered charting library (1M points at 60fps)](https://github.com/ChartGPU/ChartGPU)
* [2026-01-21, 14:48:10](https://news.ycombinator.com/item?id=46706442) - [Show HN: UltraContext – A simple context API for AI agents with auto-versioning](https://ultracontext.ai/)
* [2026-01-21, 14:40:00](https://news.slashdot.org/story/26/01/21/1422227/youtube-ceo-acknowledges-ai-slop-problem-says-platform-will-curb-low-quality-ai-content?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [YouTube CEO Acknowledges &apos;AI Slop&apos; Problem, Says Platform Will Curb Low-Quality AI Content](https://news.slashdot.org/story/26/01/21/1422227/youtube-ceo-acknowledges-ai-slop-problem-says-platform-will-curb-low-quality-ai-content?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-21, 14:06:00](https://soylentnews.org/article.pl?sid=26/01/19/1618219&amp;from=rss) - [IT Spending Set to Hit $1.4 Trillion in 2026 - but What Exactly Are We Spending It On?](https://soylentnews.org/article.pl?sid=26/01/19/1618219&amp;from=rss)
* [2026-01-21, 14:01:04](https://news.ycombinator.com/item?id=46705830) - [Show HN: Semantic search engine for Studio Ghibli movie](https://ghibli-search.anini.workers.dev/)
* [2026-01-21, 14:01:00](https://slashdot.org/story/26/01/21/141239/ceos-say-ai-is-making-work-more-efficient-employees-tell-a-different-story?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CEOs Say AI is Making Work More Efficient. Employees Tell a Different Story.](https://slashdot.org/story/26/01/21/141239/ceos-say-ai-is-making-work-more-efficient-employees-tell-a-different-story?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-21, 13:11:23](https://lobste.rs/s/oxjhnd/foss_for_digital_sovereignty_eu) - [FOSS for digital sovereignty in the EU](https://www.more-magic.net/posts/open-source-in-the-eu.html)
* [2026-01-21, 13:08:35](https://news.ycombinator.com/item?id=46705201) - [Nested Code Fences in Markdown](https://susam.net/nested-code-fences.html)
* [2026-01-21, 13:00:00](https://mobile.slashdot.org/story/26/01/21/0458212/verizon-wastes-no-time-switching-device-unlock-policy-to-365-days?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Verizon Wastes No Time Switching Device Unlock Policy To 365 Days](https://mobile.slashdot.org/story/26/01/21/0458212/verizon-wastes-no-time-switching-device-unlock-policy-to-365-days?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-21, 12:54:26](https://lobste.rs/s/t1mmsv/art_craftsmanship_monozukuri_age_ai) - [The Art of Craftsmanship (Monozukuri) in the Age of AI](https://rapha.land/the-art-of-craftsmanship-monozukuri-in-the-age-of-ai/)
* [2026-01-21, 12:47:52](https://lobste.rs/s/itkq4m/nested_code_fences_markdown) - [Nested Code Fences in Markdown](https://susam.net/nested-code-fences.html)
* [2026-01-21, 10:07:03](https://lobste.rs/s/hzj99p/building_blog_gleam) - [Building a Blog in Gleam](https://gearsco.de/blog/blog-in-gleam/)
* [2026-01-21, 10:00:00](https://yro.slashdot.org/story/26/01/21/0449250/snap-settles-social-media-addiction-lawsuit-ahead-of-landmark-trial?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Snap Settles Social media Addiction Lawsuit Ahead of Landmark Trial](https://yro.slashdot.org/story/26/01/21/0449250/snap-settles-social-media-addiction-lawsuit-ahead-of-landmark-trial?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-21, 09:50:50](https://lobste.rs/s/lesn5t/real_programming_vs_interviews_dyslexic) - [Real programming vs. interviews: A dyslexic perspective](https://lobste.rs/s/lesn5t/real_programming_vs_interviews_dyslexic)
* [2026-01-21, 09:20:00](https://soylentnews.org/article.pl?sid=26/01/19/1615238&amp;from=rss) - [The Places We Make Memories Help Us Inscribe Them](https://soylentnews.org/article.pl?sid=26/01/19/1615238&amp;from=rss)
* [2026-01-21, 09:04:42](https://news.ycombinator.com/item?id=46702980) - [I finally got my sway layout to autostart the way I like it](https://hugues.betakappaphi.com/2026/01/19/sway-layout/)
* [2026-01-21, 07:48:06](https://news.ycombinator.com/item?id=46702411) - [Can you slim macOS down?](https://eclecticlight.co/2026/01/21/can-you-slim-macos-down/)
* [2026-01-21, 07:00:00](https://news.slashdot.org/story/26/01/21/0442254/aurora-watch-in-effect-as-severe-solar-storm-slams-into-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Aurora Watch In Effect As Severe Solar Storm Slams Into Earth](https://news.slashdot.org/story/26/01/21/0442254/aurora-watch-in-effect-as-severe-solar-storm-slams-into-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-21, 04:34:00](https://soylentnews.org/article.pl?sid=26/01/19/1613240&amp;from=rss) - [Proton VPN Kills Off Legacy OpenVPN Configs in Push for Better Security](https://soylentnews.org/article.pl?sid=26/01/19/1613240&amp;from=rss)
* [2026-01-21, 03:58:15](https://lobste.rs/s/v653ds/i_got_into_argument_on_discord_about_how) - [I got into an argument on Discord about how inefficient CBR/CBZ is, so I wrote a new file format](https://old.reddit.com/r/selfhosted/comments/1qi64pr/i_got_into_an_argument_on_discord_about_how/)
* [2026-01-21, 02:09:15](https://lobste.rs/s/mpnhom/why_not_tail_recursion) - [Why not tail recursion?](https://futhark-lang.org/blog/2026-01-20-why-not-tail-recursion.html)
* [2026-01-21, 02:07:05](https://lobste.rs/s/fxrdwz/building_javascript_runtime_one_month) - [Building a javascript runtime in one month](https://s.tail.so/js-in-one-month)
* [2026-01-20, 23:51:00](https://soylentnews.org/article.pl?sid=26/01/19/166239&amp;from=rss) - [Building the World&apos;s First Graviton Detector](https://soylentnews.org/article.pl?sid=26/01/19/166239&amp;from=rss)
* [2026-01-20, 21:14:03](https://lobste.rs/s/cxwenf/i_made_zig_compute_33_million_satellite) - [I Made Zig Compute 33 Million Satellite Positions in 3 Seconds. No GPU Required](https://atempleton.bearblog.dev/i-made-zig-compute-33-million-satellite-positions-in-3-seconds-no-gpu-required/)
* [2026-01-20, 19:18:28](https://lobste.rs/s/cnkpcm/little_sound_dj) - [Little Sound Dj](https://www.littlesounddj.com/lsd/index.php)
* [2026-01-20, 19:06:07](https://lobste.rs/s/ezyebi/where_i_m_at_with_ai) - [Where I&apos;m at with AI](https://paulosman.me/2026/01/18/where-im-at-with-ai/)
* [2026-01-20, 19:06:00](https://soylentnews.org/article.pl?sid=26/01/19/0533234&amp;from=rss) - [China&apos;s Wind Farms Are Doing a Lot More Than Generating Electricity](https://soylentnews.org/article.pl?sid=26/01/19/0533234&amp;from=rss)
* [2026-01-20, 19:01:44](https://lobste.rs/s/qy6azg/reliable_signals_honest_intent) - [Reliable Signals of Honest Intent](https://zanlib.dev/blog/reliable-signals-of-honest-intent/)
* [2026-01-20, 16:12:34](https://lobste.rs/s/kvviy0/type_safe_eval_grace) - [Type-safe eval in Grace](https://haskellforall.com/2026/01/typesafe-eval)
* [2026-01-20, 14:24:13](https://lobste.rs/s/hrsaz6/unconventional_postgresql) - [Unconventional PostgreSQL Optimizations](https://hakibenita.com/postgresql-unconventional-optimizations)
* [2026-01-20, 14:22:00](https://soylentnews.org/article.pl?sid=26/01/19/046252&amp;from=rss) - [Mosquitoes&apos; Thirst for Human Blood Has Increased as Biodiversity Loss Worsens](https://soylentnews.org/article.pl?sid=26/01/19/046252&amp;from=rss)
* [2026-01-20, 13:48:11](https://lobste.rs/s/nsjybj/why_alter_table_is_such_problem_for_sqlite) - [Why ALTER TABLE is such a problem for SQLite](https://www.sqlite.org/lang_altertable.html#why_alter_table_is_such_a_problem_for_sqlite)
* [2026-01-20, 09:34:00](https://soylentnews.org/article.pl?sid=26/01/19/0357224&amp;from=rss) - [New Studies Can Explain Why Comet 3I/Atlas Isn&apos;t an Alien (Probably)](https://soylentnews.org/article.pl?sid=26/01/19/0357224&amp;from=rss)
* [2026-01-20, 09:01:25](https://lobste.rs/s/parmy3/giving_university_exams_age_chatbots) - [Giving University Exams in the Age of Chatbots](https://ploum.net/2026-01-19-exam-with-chatbots.html)
* [2026-01-20, 04:44:00](https://soylentnews.org/article.pl?sid=26/01/18/0044243&amp;from=rss) - [Stellantis Drops Jeep, Chrysler Plug-in Hybrids Amid EV Sales Slowdown](https://soylentnews.org/article.pl?sid=26/01/18/0044243&amp;from=rss)
* [2026-01-20, 00:02:00](https://soylentnews.org/article.pl?sid=26/01/18/0043231&amp;from=rss) - [Anthropologists Offer New Evidence of Bipedalism in Long-Debated Fossil Discovery](https://soylentnews.org/article.pl?sid=26/01/18/0043231&amp;from=rss)
* [2026-01-19, 19:11:00](https://soylentnews.org/article.pl?sid=26/01/18/0042202&amp;from=rss) - [Linux Mint 22.3 “Zena” is Now Available for Download, Here&apos;s What&apos;s New](https://soylentnews.org/article.pl?sid=26/01/18/0042202&amp;from=rss)
* [2026-01-19, 14:38:00](https://soylentnews.org/article.pl?sid=26/01/18/0040215&amp;from=rss) - [Anything-Goes “Anyons” May be at the Root of Surprising Quantum Experiments](https://soylentnews.org/article.pl?sid=26/01/18/0040215&amp;from=rss)
* [2026-01-19, 09:45:00](https://soylentnews.org/article.pl?sid=26/01/18/0037250&amp;from=rss) - [AI and the Corporate Capture of Knowledge](https://soylentnews.org/article.pl?sid=26/01/18/0037250&amp;from=rss)
* [2026-01-19, 09:39:02](https://news.ycombinator.com/item?id=46676861) - [SIMD Programming in Pure Rust](https://kerkour.com/introduction-rust-simd)
* [2026-01-19, 05:03:00](https://soylentnews.org/article.pl?sid=26/01/17/2355208&amp;from=rss) - [AWS Flips Switch on Euro Cloud as Customers Fret About Digital Sovereignty](https://soylentnews.org/article.pl?sid=26/01/17/2355208&amp;from=rss)
* [2026-01-19, 00:22:00](https://soylentnews.org/article.pl?sid=26/01/18/003211&amp;from=rss) - [Are You Dead?](https://soylentnews.org/article.pl?sid=26/01/18/003211&amp;from=rss)
* [2026-01-18, 19:30:00](https://soylentnews.org/article.pl?sid=26/01/18/001228&amp;from=rss) - [How Screwed is Generation Alpha, and the Generations Which Will Depend on Them?](https://soylentnews.org/article.pl?sid=26/01/18/001228&amp;from=rss)
* [2026-01-18, 14:50:00](https://soylentnews.org/article.pl?sid=26/01/17/055254&amp;from=rss) - [Hobby FPV Drone Developer Breaks 400mph Limit With New World Record](https://soylentnews.org/article.pl?sid=26/01/17/055254&amp;from=rss)
* [2026-01-18, 10:03:00](https://soylentnews.org/article.pl?sid=26/01/17/0457243&amp;from=rss) - [Sorry, Eh](https://soylentnews.org/article.pl?sid=26/01/17/0457243&amp;from=rss)
* [2026-01-18, 05:13:00](https://soylentnews.org/article.pl?sid=26/01/17/0446252&amp;from=rss) - [Linux Kernel Bugs Hide for 2+ Years on Average](https://soylentnews.org/article.pl?sid=26/01/17/0446252&amp;from=rss)
* [2026-01-18, 00:29:00](https://soylentnews.org/article.pl?sid=26/01/17/0434215&amp;from=rss) - [Wormholes May Not Exist—We&apos;ve Found They Reveal Something Deeper About Time and the Universe](https://soylentnews.org/article.pl?sid=26/01/17/0434215&amp;from=rss)
* [2026-01-17, 21:23:58](https://news.ycombinator.com/item?id=46662247) - [The WebRacket language is a subset of Racket that compiles to WebAssembly](https://github.com/soegaard/webracket)
* [2026-01-17, 19:43:00](https://soylentnews.org/article.pl?sid=26/01/17/0229252&amp;from=rss) - [&apos;Society Cannot Function If No One is Accountable for AI&apos; — Jaron Lanier](https://soylentnews.org/article.pl?sid=26/01/17/0229252&amp;from=rss)
* [2026-01-17, 15:00:00](https://soylentnews.org/article.pl?sid=26/01/17/0222224&amp;from=rss) - [Why Flies Matter, Their Vital Role in Ecosystems, and Surprising Diversity](https://soylentnews.org/article.pl?sid=26/01/17/0222224&amp;from=rss)
* [2026-01-17, 10:18:00](https://soylentnews.org/article.pl?sid=26/01/17/0220205&amp;from=rss) - [Researchers Expose WHILL Wheelchair Safety Risks Via Remote Hacking](https://soylentnews.org/article.pl?sid=26/01/17/0220205&amp;from=rss)
* [2026-01-17, 05:30:00](https://soylentnews.org/article.pl?sid=26/01/16/0510252&amp;from=rss) - [Signal Creator Moxie Marlinspike Wants to Do for AI What He Did for Messaging](https://soylentnews.org/article.pl?sid=26/01/16/0510252&amp;from=rss)
* [2026-01-17, 00:42:00](https://soylentnews.org/article.pl?sid=26/01/16/0215254&amp;from=rss) - [X Didn&apos;t Fix Grok&apos;s ‘Undressing’ Problem. It Just Makes People Pay for It](https://soylentnews.org/article.pl?sid=26/01/16/0215254&amp;from=rss)
