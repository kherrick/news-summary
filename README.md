# [News Summary](https://kherrick.github.io/news-summary/)

## Emerging Technology and AI

* [Why AI is still dumb and not scary at all (pt. 1)](https://tejo.substack.com/p/why-ai-is-still-dumb-and-not-scary) - A thought-provoking exploration of the ongoing limitations and misconceptions surrounding AI capabilities. [Comments](https://news.ycombinator.com/item?id=43303672)

* [Show HN: TypeLeap: LLM Powered Reactive Intent UI/UX](https://www.typeleap.com/) - Demonstrating how AI can be integrated into interactive design tools. [Comments](https://news.ycombinator.com/item?id=43303309)

* [Alphabet's Taara Chip Uses Light Beams To Provide High-Speed Internet](https://soylentnews.org/article.pl?sid=25/03/08/0713256&from=rss) - A breakthrough in connectivity using futuristic light-based technology.

* [Eerily Realistic AI Voice Demo Sparks Amazement and Discomfort Online](https://soylentnews.org/article.pl?sid=25/03/07/0436239&from=rss) - A new AI voice demo blurs the line between human and machine communication, sparking awe and ethical concerns.

* [Microsoft Reportedly Develops LLM Series That Can Rival OpenAI, Anthropic Models](https://slashdot.org/story/25/03/08/0018225/microsoft-reportedly-develops-llm-series-that-can-rival-openai-anthropic-models?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Insights on Microsoft's competitive edge in developing cutting-edge language models.

* [AI tools are spotting errors in research papers](https://www.nature.com/articles/d41586-025-00648-5) - How AI is enhancing the review process for scientific literature by detecting inaccuracies.

## Data and Cybersecurity

* [Undocumented 'Backdoor' Found In Chinese Bluetooth Chip Used By a Billion Devices](https://hardware.slashdot.org/story/25/03/08/2027216/undocumented-backdoor-found-in-chinese-bluetooth-chip-used-by-a-billion-devices?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Alarming discovery revealing security vulnerabilities in widely used hardware. [Comments](https://lobste.rs/s/0twsmb/undocumented_backdoor_found_bluetooth)

* [Kill your Feeds – Stop letting algorithms dictate what you think](https://usher.dev/posts/2025-03-08-kill-your-feeds/) - A call to rethink our reliance on algorithmically curated digital feeds. [Comments](https://news.ycombinator.com/item?id=43302132)

* [Rayhunter: A Cheap New Tool from EFF to Detect Cellular Spying](https://mobile.slashdot.org/story/25/03/08/0346250/rayhunter-a-cheap-new-tool-from-eff-to-detect-cellular-spying?utm_source=rss1.0mainlinkanon&utm_medium=feed) - EFF introduces an accessible solution for detecting cellular surveillance.

* [Apple Refuses to Break Encryption, Seeks Reversal of UK Demand for Backdoor](https://soylentnews.org/article.pl?sid=25/03/07/0427238&from=rss) - Apple stands firm against government requests to compromise user privacy.

* [Signal President Calls Out Agentic AI As Having 'Profound' Security and Privacy Issues](https://yro.slashdot.org/story/25/03/07/2310205/signal-president-calls-out-agentic-ai-as-having-profound-security-and-privacy-issues?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Signal's president raises concerns about AI's impact on user security.

## Advancements in Science

* [NASA's SPHEREx Is Poised To Launch Mission To Map 450 Million Galaxies In Color](https://science.slashdot.org/story/25/03/08/0152240/nasas-spherex-is-poised-to-launch-mission-to-map-450-million-galaxies-in-color?utm_source=rss1.0mainlinkanon&utm_medium=feed) - NASA prepares an ambitious project to visualize the universe like never before.

* [Athena Spacecraft Declared Dead After Toppling Over On Moon](https://science.slashdot.org/story/25/03/08/0145217/athena-spacecraft-declared-dead-after-toppling-over-on-moon?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A tragic end for a robotic mission on the lunar surface.

* [Gene-Edited Non-Browning Banana Could Cut Food Waste, Scientists Say](https://science.slashdot.org/story/25/03/08/0140247/gene-edited-non-browning-banana-could-cut-food-waste-scientists-say?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Biotech innovation tackles consumer food waste.

* [World's First "Synthetic Biological Intelligence" Runs on Living Human Cells](https://soylentnews.org/article.pl?sid=25/03/05/1550252&from=rss) - An extraordinary milestone merging biology with computation.

* [Some of Earth's Meteors Are Probably Coming All the Way From a Neighboring Star System](https://soylentnews.org/article.pl?sid=25/03/05/0257200&from=rss) - Investigating interstellar origins of Earth's meteorites.

## Software and Development

* [Using Zig from Common Lisp](https://jagg.github.io/posts/lisp_zig/) - Bridging two powerful programming languages for enhanced development. [Comments](https://lobste.rs/s/uaw2fo/using_zig_from_common_lisp)

* [A Cheap New Tool from EFF to Detect Cellular Spying](https://mobile.slashdot.org/story/25/03/08/0346250/rayhunter-a-cheap-new-tool-from-eff-to-detect-cellular-spying?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Addressing privacy and surveillance concerns with open tools. [Comment on similarity to the Bluetooth vulnerability mentioned earlier.]

* [The MAD Computer Program](https://meatfighter.com/mad/) - Revisiting a historical computer program with modern implications.

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

* [2025-03-08, 21:34:00](https://science.slashdot.org/story/25/03/08/033219/snack-makers-are-removing-fake-colors-from-processed-foods?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Snack Makers Are Removing Fake Colors From Processed Foods](https://science.slashdot.org/story/25/03/08/033219/snack-makers-are-removing-fake-colors-from-processed-foods?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-08, 21:25:25](https://news.ycombinator.com/item?id=43303672) - [Why AI is still dumb and not scary at all (pt. 1)](https://tejo.substack.com/p/why-ai-is-still-dumb-and-not-scary)
* [2025-03-08, 21:21:05](https://lobste.rs/s/uaw2fo/using_zig_from_common_lisp) - [Using Zig from Common Lisp](https://jagg.github.io/posts/lisp_zig/)
* [2025-03-08, 21:00:34](https://news.ycombinator.com/item?id=43303463) - [OneText (YC W23) is hiring a browser extension engineer](https://news.ycombinator.com/item?id=43303463)
* [2025-03-08, 20:58:34](https://news.ycombinator.com/item?id=43303448) - [Microsoft Windows 1.0 with Steve Ballmer (1986)](https://www.youtube.com/watch?v=EtuDS0ntaJY)
* [2025-03-08, 20:37:55](https://news.ycombinator.com/item?id=43303309) - [Show HN: TypeLeap: LLM Powered Reactive Intent UI/UX](https://www.typeleap.com/)
* [2025-03-08, 20:34:00](https://hardware.slashdot.org/story/25/03/08/2027216/undocumented-backdoor-found-in-chinese-bluetooth-chip-used-by-a-billion-devices?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Undocumented 'Backdoor' Found In Chinese Bluetooth Chip Used By a Billion Devices](https://hardware.slashdot.org/story/25/03/08/2027216/undocumented-backdoor-found-in-chinese-bluetooth-chip-used-by-a-billion-devices?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-08, 20:12:03](https://lobste.rs/s/tgeknf/hot_height_optimized_trie_index_for_main) - [HOT: A Height Optimized Trie Index for Main-Memory Database Systems](https://15721.courses.cs.cmu.edu/spring2019/papers/08-oltpindexes2/p521-binna.pdf)
* [2025-03-08, 19:41:00](https://soylentnews.org/article.pl?sid=25/03/08/0713256&from=rss) - [Alphabet's Taara Chip Uses Light Beams To Provide High-Speed Internet](https://soylentnews.org/article.pl?sid=25/03/08/0713256&from=rss)
* [2025-03-08, 19:38:42](https://news.ycombinator.com/item?id=43302835) - [Accessibility: Don't Use Fake Bold or Italic in Social Media](https://adrianroselli.com/2025/03/dont-use-fake-bold-or-italic-in-social-media.html)
* [2025-03-08, 19:34:00](https://science.slashdot.org/story/25/03/08/0523212/america-lost-22-of-its-butterflies-within-two-decades?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [America Lost 22% of Its Butterflies Within Two Decades](https://science.slashdot.org/story/25/03/08/0523212/america-lost-22-of-its-butterflies-within-two-decades?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-08, 19:17:33](https://lobste.rs/s/jcsfbx/program_is_database_is_interface) - [The program is the database is the interface](https://www.scattered-thoughts.net/writing/the-program-is-the-database-is-the-interface/)
* [2025-03-08, 19:02:34](https://news.ycombinator.com/item?id=43302563) - [Linear Pluggable Optics Save Energy in Data Centers](https://semiengineering.com/linear-pluggable-optics-save-energy-in-data-centers/)
* [2025-03-08, 18:54:17](https://news.ycombinator.com/item?id=43302495) - [Deploy from local to production (self-hosted)](https://github.com/bypirob/airo)
* [2025-03-08, 18:34:00](https://yro.slashdot.org/story/25/03/08/183254/sam-bankman-fried-gives-a-jailhouse-interview-seeking-a-pardon?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Sam Bankman-Fried Gives a Jailhouse Interview, Seeking a Pardon](https://yro.slashdot.org/story/25/03/08/183254/sam-bankman-fried-gives-a-jailhouse-interview-seeking-a-pardon?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-08, 18:32:18](https://news.ycombinator.com/item?id=43302297) - [MCP vs. API Explained](https://norahsakal.com/blog/mcp-vs-api-model-context-protocol-explained/)
* [2025-03-08, 18:21:52](https://lobste.rs/s/ndkdxd/new_build_tool_java) - [New build tool in Java](https://mccue.dev/pages/3-2-25-new-build-tool-in-java)
* [2025-03-08, 18:13:35](https://lobste.rs/s/0twsmb/undocumented_backdoor_found_bluetooth) - [Undocumented \"backdoor\" found in Bluetooth chip used by a billion devices](https://www.bleepingcomputer.com/news/security/undocumented-backdoor-found-in-bluetooth-chip-used-by-a-billion-devices/)
* [2025-03-08, 18:11:46](https://news.ycombinator.com/item?id=43302132) - [Kill your Feeds – Stop letting algorithms dictate what you think](https://usher.dev/posts/2025-03-08-kill-your-feeds/)
* [2025-03-08, 18:08:28](https://news.ycombinator.com/item?id=43302097) - [Google will still have to break up its business, the Justice Department said](https://www.engadget.com/big-tech/google-will-still-have-to-break-up-its-business-the-justice-department-said-150000739.html)
* [2025-03-08, 18:04:36](https://news.ycombinator.com/item?id=43302073) - [Kagi Is Bringing Orion Web Browser to Linux](https://www.omgubuntu.co.uk/2025/03/kag-orion-web-browser-coming-to-linux)
* [2025-03-08, 17:50:55](https://lobste.rs/s/snzosb/mad_computer_program) - [The MAD Computer Program](https://meatfighter.com/mad/)
* [2025-03-08, 17:34:00](https://news.slashdot.org/story/25/03/08/0652240/open-source-initiative-ai-debate-roils-board-elections?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Open Source Initiative: AI Debate Roils Board Elections?](https://news.slashdot.org/story/25/03/08/0652240/open-source-initiative-ai-debate-roils-board-elections?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-08, 16:39:23](https://news.ycombinator.com/item?id=43301432) - [You might not need Redis](https://www.viblo.se/posts/no-need-redis/)
* [2025-03-08, 16:34:00](https://mobile.slashdot.org/story/25/03/08/0346250/rayhunter-a-cheap-new-tool-from-eff-to-detect-cellular-spying?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Rayhunter: A Cheap New Tool from EFF to Detect Cellular Spying](https://mobile.slashdot.org/story/25/03/08/0346250/rayhunter-a-cheap-new-tool-from-eff-to-detect-cellular-spying?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-08, 16:30:38](https://news.ycombinator.com/item?id=43301369) - [Undocumented backdoor found in Bluetooth chip used by a billion devices](https://www.bleepingcomputer.com/news/security/undocumented-backdoor-found-in-bluetooth-chip-used-by-a-billion-devices/)
* [2025-03-08, 16:27:00](https://news.ycombinator.com/item?id=43301342) - [Discovering Errors in Donald Knuth's Taocp](https://glthr.com/discovering-errors-in-donald-knuths-taocp)
* [2025-03-08, 15:37:00](https://soylentnews.org/article.pl?sid=25/03/08/1538213&from=rss) - [Temporary Problem with Stripe](https://soylentnews.org/article.pl?sid=25/03/08/1538213&from=rss)
* [2025-03-08, 15:34:00](https://entertainment.slashdot.org/story/25/03/08/0740211/remembering-space-ghost-voice-actor-george-lowe?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Remembering 'Space Ghost' Voice Actor George Lowe](https://entertainment.slashdot.org/story/25/03/08/0740211/remembering-space-ghost-voice-actor-george-lowe?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-08, 14:52:00](https://soylentnews.org/article.pl?sid=25/03/08/072239&from=rss) - [Hugging Face's Chief Science Officer Worries AI is Becoming 'Yes-Men on Servers'](https://soylentnews.org/article.pl?sid=25/03/08/072239&from=rss)
* [2025-03-08, 14:31:23](https://news.ycombinator.com/item?id=43300528) - [The program is the database is the interface](https://www.scattered-thoughts.net/writing/the-program-is-the-database-is-the-interface/)
* [2025-03-08, 14:22:16](https://lobste.rs/s/lrc6cm/wlroots_add_hdr10_support) - [wlroots: Add HDR10 support](https://gitlab.freedesktop.org/wlroots/wlroots/-/merge_requests/5002)
* [2025-03-08, 13:49:31](https://lobste.rs/s/1ugd0w/there_is_no_automatic_reset_for) - [There is No Automatic Reset for Engineering](http://agileotter.blogspot.com/2025/03/there-is-no-automatic-reset-in.html)
* [2025-03-08, 13:38:17](https://lobste.rs/s/mamyha/refinement_rust_optimization) - [Refinement in Rust: optimization, arithmetic, and stateful predicates](https://jordankaye.dev/posts/refined_0_0_4/)
* [2025-03-08, 13:27:37](https://lobste.rs/s/7wwmui/introducing_command_commandfor_html) - [Introducing command And commandfor In HTML](https://developer.chrome.com/blog/command-and-commandfor)
* [2025-03-08, 13:00:00](https://linux.slashdot.org/story/25/03/08/0158226/google-introduces-debian-linux-terminal-app-for-android?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google Introduces Debian Linux Terminal App For Android](https://linux.slashdot.org/story/25/03/08/0158226/google-introduces-debian-linux-terminal-app-for-android?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-08, 12:48:11](https://news.ycombinator.com/item?id=43299815) - [Discworld Rules](https://contraptions.venkateshrao.com/p/discworld-rules)
* [2025-03-08, 12:23:46](https://news.ycombinator.com/item?id=43299659) - [Long Read: Lessons from Building Semantic Search for GitHub and Why I Failed](https://tzx.notion.site/What-I-Learned-Building-a-Free-Semantic-Search-Tool-for-GitHub-and-Why-I-Failed-1a09b742c7918033b318f3a5d7dc9751)
* [2025-03-08, 11:57:42](https://lobste.rs/s/v8izex/list_brave_browser_controversies) - [List of Brave browser controversies](https://old.reddit.com/r/browsers/comments/1j1pq7b/list_of_brave_browser_controversies)
* [2025-03-08, 10:07:00](https://soylentnews.org/article.pl?sid=25/03/07/0436239&from=rss) - [Eerily Realistic AI Voice Demo Sparks Amazement and Discomfort Online](https://soylentnews.org/article.pl?sid=25/03/07/0436239&from=rss)
* [2025-03-08, 10:00:00](https://science.slashdot.org/story/25/03/08/0152240/nasas-spherex-is-poised-to-launch-mission-to-map-450-million-galaxies-in-color?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [NASA's SPHEREx Is Poised To Launch Mission To Map 450 Million Galaxies In Color](https://science.slashdot.org/story/25/03/08/0152240/nasas-spherex-is-poised-to-launch-mission-to-map-450-million-galaxies-in-color?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-08, 08:53:39](https://lobste.rs/s/3z1fmg/ai_where_loop_should_humans_go) - [AI: Where in the Loop Should Humans Go?](https://ferd.ca/ai-where-in-the-loop-should-humans-go.html)
* [2025-03-08, 07:32:19](https://lobste.rs/s/az2qlz/epic_treatise_on_error_models_for_systems) - [An epic treatise on error models for systems programming languages](https://typesanitizer.com/blog/errors.html)
* [2025-03-08, 07:00:00](https://science.slashdot.org/story/25/03/08/0145217/athena-spacecraft-declared-dead-after-toppling-over-on-moon?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Athena Spacecraft Declared Dead After Toppling Over On Moon](https://science.slashdot.org/story/25/03/08/0145217/athena-spacecraft-declared-dead-after-toppling-over-on-moon?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-08, 05:22:00](https://soylentnews.org/article.pl?sid=25/03/07/0427238&from=rss) - [Apple Refuses to Break Encryption, Seeks Reversal of UK Demand for Backdoor](https://soylentnews.org/article.pl?sid=25/03/07/0427238&from=rss)
* [2025-03-08, 04:51:25](https://news.ycombinator.com/item?id=43297590) - [Falkon: A KDE Web Browser](https://www.falkon.org)
* [2025-03-08, 04:46:33](https://news.ycombinator.com/item?id=43297574) - [An epic treatise on error models for systems programming languages](https://typesanitizer.com/blog/errors.html)
* [2025-03-08, 03:30:00](https://science.slashdot.org/story/25/03/08/0140247/gene-edited-non-browning-banana-could-cut-food-waste-scientists-say?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Gene-Edited Non-Browning Banana Could Cut Food Waste, Scientists Say](https://science.slashdot.org/story/25/03/08/0140247/gene-edited-non-browning-banana-could-cut-food-waste-scientists-say?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-08, 02:12:13](https://news.ycombinator.com/item?id=43296918) - [Show HN: Open-Source DocumentAI with Ollama](https://rlama.dev/)
* [2025-03-08, 02:02:00](https://slashdot.org/story/25/03/08/0018225/microsoft-reportedly-develops-llm-series-that-can-rival-openai-anthropic-models?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Reportedly Develops LLM Series That Can Rival OpenAI, Anthropic Models](https://slashdot.org/story/25/03/08/0018225/microsoft-reportedly-develops-llm-series-that-can-rival-openai-anthropic-models?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-08, 01:25:00](https://yro.slashdot.org/story/25/03/07/2310205/signal-president-calls-out-agentic-ai-as-having-profound-security-and-privacy-issues?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Signal President Calls Out Agentic AI As Having 'Profound' Security and Privacy Issues](https://yro.slashdot.org/story/25/03/07/2310205/signal-president-calls-out-agentic-ai-as-having-profound-security-and-privacy-issues?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-08, 00:45:00](https://news.slashdot.org/story/25/03/07/2250209/bbc-radios-streaming-changes-leave-long-time-listeners-in-the-lurch?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [BBC Radio's Streaming Changes Leave Long-Time Listeners In the Lurch](https://news.slashdot.org/story/25/03/07/2250209/bbc-radios-streaming-changes-leave-long-time-listeners-in-the-lurch?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-08, 00:37:00](https://soylentnews.org/article.pl?sid=25/03/07/0422219&from=rss) - [The International Space Station Lacks Microbial Diversity. Is It Too Clean?](https://soylentnews.org/article.pl?sid=25/03/07/0422219&from=rss)
* [2025-03-08, 00:16:26](https://lobste.rs/s/9sscit/why_i_choose_lua_for_this_blog) - [Why I choose Lua for this blog](https://andregarzia.com/2025/03/why-i-choose-lua-for-this-blog.html)
* [2025-03-08, 00:02:00](https://yro.slashdot.org/story/25/03/07/2242250/feds-arrest-man-for-sharing-dvd-rip-of-spider-man-movie-with-millions-online?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Feds Arrest Man For Sharing DVD Rip of Spider-Man Movie With Millions Online](https://yro.slashdot.org/story/25/03/07/2242250/feds-arrest-man-for-sharing-dvd-rip-of-spider-man-movie-with-millions-online?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-07, 23:39:21](https://lobste.rs/s/u8kbix/dropbox_for_dropbox_haters) - [Dropbox for Dropbox haters](https://danmackinlay.name/notebook/synchronising_files)
* [2025-03-07, 23:18:50](https://lobste.rs/s/nzfyoa/why_do_i_find_rust_inadequate_for_text) - [Why do I find Rust inadequate for text compression codecs?](https://palaiologos.rocks/posts/rust-codecs/)
* [2025-03-07, 23:08:01](https://lobste.rs/s/mpvjj8/standards_for_ansi_escape_codes) - [Standards for ANSI escape codes](https://jvns.ca/blog/2025/03/07/escape-code-standards/)
* [2025-03-07, 23:07:19](https://lobste.rs/s/ffjijn/git_zed_natively) - [Git in Zed, natively](https://zed.dev/git)
* [2025-03-07, 22:54:58](https://news.ycombinator.com/item?id=43295692) - [AI tools are spotting errors in research papers](https://www.nature.com/articles/d41586-025-00648-5)
* [2025-03-07, 20:37:14](https://lobste.rs/s/wfxu5j/vtm_text_based_desktop_environment) - [vtm: Text-based desktop environment](https://github.com/directvt/vtm)
* [2025-03-07, 20:11:20](https://lobste.rs/s/ambxwc/how_get_common_lisp_job_2055) - [How To Get A Common Lisp Job In 2055](https://sebastiancarlos.medium.com/common-lisp-in-2055-f3debf4df01c)
* [2025-03-07, 19:55:00](https://soylentnews.org/article.pl?sid=25/03/07/047205&from=rss) - [Massive Supereruptions Might Not Trigger the Apocalypse, Just Decades of Chaos](https://soylentnews.org/article.pl?sid=25/03/07/047205&from=rss)
* [2025-03-07, 17:24:02](https://news.ycombinator.com/item?id=43292056) - [Introducing command And commandfor In HTML](https://developer.chrome.com/blog/command-and-commandfor)
* [2025-03-07, 15:10:00](https://soylentnews.org/article.pl?sid=25/03/07/041244&from=rss) - [Your Kitchen Utensils May be Poisoning You](https://soylentnews.org/article.pl?sid=25/03/07/041244&from=rss)
* [2025-03-07, 14:38:26](https://lobste.rs/s/su44v6/balatro_timeline) - [The Balatro Timeline](https://localthunk.com/blog/balatro-timeline-3aarh)
* [2025-03-07, 13:28:59](https://lobste.rs/s/q7ujau/qt_6_for_c_zig) - [Qt 6 for C & Zig](https://gist.github.com/rcalixte/339ede66703a988760829ecde2dc2c88)
* [2025-03-07, 13:10:39](https://lobste.rs/s/yhavca/why_local_first_software_is_future_its) - [Why Local-First Software Is the Future and its Limitations](https://rxdb.info/articles/local-first-future.html)
* [2025-03-07, 11:52:35](https://lobste.rs/s/99mmi2/oss_maintainers_what_s_most_audacious) - [OSS maintainers: what’s the most audacious work a company has ever asked you to do for free?](https://hachyderm.io/@hazelweakly/114112956589304873)
* [2025-03-07, 11:44:13](https://lobste.rs/s/kacsw3/landscape_lisp) - [The Landscape of Lisp](https://churchofturing.github.io/landscapeoflisp.html)
* [2025-03-07, 11:25:27](https://news.ycombinator.com/item?id=43289293) - [Zig's dot star syntax (value.*)](https://www.openmymind.net/Zig-Dot-Star-Syntax/)
* [2025-03-07, 10:26:00](https://soylentnews.org/article.pl?sid=25/03/05/1610259&from=rss) - [How We Added Interlaced Video to Raspberry Pi 5](https://soylentnews.org/article.pl?sid=25/03/05/1610259&from=rss)
* [2025-03-07, 05:42:00](https://soylentnews.org/article.pl?sid=25/03/05/162236&from=rss) - [BP Shuns Renewables in Return to Oil and Gas](https://soylentnews.org/article.pl?sid=25/03/05/162236&from=rss)
* [2025-03-07, 00:53:00](https://soylentnews.org/politics/article.pl?sid=25/03/05/1555220&from=rss) - [15 Republican AGs Urge The Supreme Court To Make Affordable Broadband For Poor People Illegal](https://soylentnews.org/politics/article.pl?sid=25/03/05/1555220&from=rss)
* [2025-03-06, 20:10:00](https://soylentnews.org/article.pl?sid=25/03/05/1550252&from=rss) - [World's First \"Synthetic Biological Intelligence\" Runs on Living Human Cells](https://soylentnews.org/article.pl?sid=25/03/05/1550252&from=rss)
* [2025-03-06, 15:25:00](https://soylentnews.org/article.pl?sid=25/03/05/1546231&from=rss) - [Google Cofounder Exhorts Employees to Work 60-Hour Weeks to Create AI Designed to Replace Them](https://soylentnews.org/article.pl?sid=25/03/05/1546231&from=rss)
* [2025-03-06, 11:51:17](https://news.ycombinator.com/item?id=43279131) - [Spark-TTS: Text-2-Speech Model Single-Stream Decoupled Tokens [pdf]](https://arxiv.org/abs/2503.01710)
* [2025-03-06, 10:42:00](https://soylentnews.org/article.pl?sid=25/03/05/0314241&from=rss) - [First Petawatt Electron Beam Arrives, Ready to Rip Apart Matter and Space](https://soylentnews.org/article.pl?sid=25/03/05/0314241&from=rss)
* [2025-03-06, 05:59:00](https://soylentnews.org/article.pl?sid=25/03/05/031211&from=rss) - ['Fire the Intel Board and Rehire Pat Gelsinger,' Argues Former Intel Ceo Craig Barrett](https://soylentnews.org/article.pl?sid=25/03/05/031211&from=rss)
* [2025-03-06, 01:13:00](https://soylentnews.org/article.pl?sid=25/03/05/0257200&from=rss) - [Some of Earth's Meteors Are Probably Coming All the Way From a Neighboring Star System](https://soylentnews.org/article.pl?sid=25/03/05/0257200&from=rss)
* [2025-03-05, 22:47:52](https://news.ycombinator.com/item?id=43273828) - [\"Big 3\" science fiction magazines including Asimov's and Analog acquired](https://jasonsanford.substack.com/p/genre-grapevine-for-last-half-of)
* [2025-03-05, 20:27:00](https://soylentnews.org/article.pl?sid=25/03/04/028230&from=rss) - [Robots Are Gaining New Capabilities Thanks to Plants and Fungi](https://soylentnews.org/article.pl?sid=25/03/04/028230&from=rss)
* [2025-03-05, 15:44:00](https://soylentnews.org/article.pl?sid=25/03/04/023230&from=rss) - [Meet the Ice-Hunting Robots Headed for the Moon Right Now](https://soylentnews.org/article.pl?sid=25/03/04/023230&from=rss)
* [2025-03-05, 11:01:00](https://soylentnews.org/article.pl?sid=25/03/03/1622232&from=rss) - [The UEFI Hype and Microsoft's Lies](https://soylentnews.org/article.pl?sid=25/03/03/1622232&from=rss)
* [2025-03-05, 06:17:00](https://soylentnews.org/article.pl?sid=25/03/02/1643244&from=rss) - [Ancient Humans Evolved New Blood Types After Leaving Africa](https://soylentnews.org/article.pl?sid=25/03/02/1643244&from=rss)
* [2025-03-05, 02:52:03](https://news.ycombinator.com/item?id=43262052) - [The Hierarchy of Hazard Controls](https://www.hillelwayne.com/post/hoc/)
* [2025-03-05, 01:33:00](https://soylentnews.org/article.pl?sid=25/03/03/147226&from=rss) - [Man's Brain Turned to Glass by Vesuvius Volcano Ash Cloud](https://soylentnews.org/article.pl?sid=25/03/03/147226&from=rss)
* [2025-03-05, 01:30:07](https://news.ycombinator.com/item?id=43261593) - [Explore Sutro Tower](https://explore.sutrotower.com)
* [2025-03-05, 00:31:33](https://news.ycombinator.com/item?id=43261247) - [Ultrasonic deep drawing cuts friction by 20%, extends tool lifespan](https://techxplore.com/news/2025-02-ultrasonic-deep-friction-tool-lifespan.html)
* [2025-03-04, 23:34:00](https://news.ycombinator.com/item?id=43260890) - [\"Wooly mice\" a test run for mammoth gene editing](https://arstechnica.com/science/2025/03/wooly-mice-a-test-run-for-mammoth-gene-editing/)
* [2025-03-04, 20:48:00](https://soylentnews.org/article.pl?sid=25/03/03/1359231&from=rss) - [The Pentium Contains a Complicated Circuit to Multiply by Three](https://soylentnews.org/article.pl?sid=25/03/03/1359231&from=rss)
* [2025-03-04, 19:01:20](https://news.ycombinator.com/item?id=43258670) - [AI models makes precise copies of cuneiform characters](https://news.cornell.edu/stories/2025/03/ai-models-makes-precise-copies-cuneiform-characters)
* [2025-03-04, 16:07:00](https://soylentnews.org/article.pl?sid=25/03/03/1354250&from=rss) - [20,000-Year-Old Evidence of Ancient Travois (Sled) Discovered in New Mexico](https://soylentnews.org/article.pl?sid=25/03/03/1354250&from=rss)
* [2025-03-04, 11:26:00](https://soylentnews.org/article.pl?sid=25/03/03/1239241&from=rss) - [YR4 Asteroid: The Hits and Near-Misses You Never Hear About](https://soylentnews.org/article.pl?sid=25/03/03/1239241&from=rss)
* [2025-03-04, 06:40:00](https://soylentnews.org/article.pl?sid=25/03/02/2054246&from=rss) - [NASA is Watching a Vast, Growing Anomaly in Earth's Magnetic Field](https://soylentnews.org/article.pl?sid=25/03/02/2054246&from=rss)
* [2025-03-04, 02:00:00](https://soylentnews.org/article.pl?sid=25/03/02/2037225&from=rss) - [The Next Chapter: Moving From Skype to Microsoft Teams](https://soylentnews.org/article.pl?sid=25/03/02/2037225&from=rss)
