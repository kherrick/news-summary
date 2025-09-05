# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Intel Outspends Rivals In R&D: 28% More Than Nvidia, 156% More Than AMD](https://hardware.slashdot.org/story/25/09/04/2152214/intel-outspends-rivals-in-rd-28-more-than-nvidia-156-more-than-amd?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Intel's aggressive investment in research and development is being compared against its competitors, Nvidia and AMD, showcasing its strategic focus on innovation amid stiff competition.

* [Stripe Launches L1 Blockchain: Tempo](https://tempo.xyz) - The financial giant Stripe has launched Tempo, a Layer 1 blockchain aimed at revolutionizing payment systems and blockchain transactions with its unique architecture.

* [Wal3: A Write-Ahead Log for Chroma, Built on Object Storage](https://trychroma.com/engineering/wal3) - Chroma introduces Wal3, a log-based system built on object storage, designed to enhance data management and reliability in real-world tech stacks.

* [Microsoft's 6502 BASIC Is Now Open Source](https://news.slashdot.org/story/25/09/04/1649210/microsofts-6502-basic-is-now-open-source?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Microsoft makes its historic 6502 BASIC language open source, celebrating one of its first ventures into software development and its contributions to modern computing.

## AI and Machine Learning

* [OpenAI Plans Jobs Platform, Certification Program for AI Roles](https://slashdot.org/story/25/09/04/1854249/openai-plans-jobs-platform-certification-program-for-ai-roles?utm_source=rss1.0mainlinkanon&utm_medium=feed) - OpenAI forays into employment and certifications by launching initiatives aimed at creating a tailored workforce for the AI revolution.

* [LLM Visualization](https://bbycroft.net/llm) - A new interactive visualization tool offers insights into how large language models operate, providing a better understanding for AI practitioners and enthusiasts.

* [Why ML Needs a New Programming Language](https://signalsandthreads.com/why-ml-needs-a-new-programming-language/) - An exploration into why existing programming languages might be ill-suited for the complexities of modern machine learning and AI development.

## Health and Science

* [Coalition for Metabolic Health Launches with $50M](https://coalitionformetabolichealth.org/news/coalition-for-metabolic-health-launches-as-part-of-50-million-investment-to-tackle-americas-health-crisis/) - Aimed at combating metabolic health issues in the U.S., this coalition is backed by significant funding to address growing health crises.

* [Bathroom Doomscrolling May Increase Your Risk of Hemorrhoids](https://science.slashdot.org/story/25/09/04/2159215/bathroom-doomscrolling-may-increase-your-risk-of-hemorrhoids?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Investigating how the common habit of extended phone usage in restrooms might be contributing to physical health concerns.

* [Ultra-Processed Foods - It's Time For an Improved Definition](https://science.slashdot.org/story/25/09/04/1742218/ultra-processed-foods---its-time-for-an-improved-definition?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Revisiting the definitions of ultra-processed foods with an emphasis on health research and public policy implications.

## Cybersecurity and Privacy

* [Subverting code integrity checks to locally backdoor Signal, 1Password, Slack, and more](https://blog.trailofbits.com/2025/09/03/subverting-code-integrity-checks-to-locally-backdoor-signal-1password-slack-and-more/) - A detailed look at vulnerabilities allowing manipulation of major software platforms, raising vital questions about security integrity.

* [A CA Trusted by Microsoft Mis-issued Certificates for 1.1.1.1 in May 2025, According to Logs](https://arstechnica.com/security/2025/09/mis-issued-certificates-for-1-1-1-1-dns-service-pose-a-threat-to-the-internet/) - The revelation of mis-issued certifications from a trusted certification authority highlights potential risks to internet security.

* [Passkeys Are Incompatible With Open-Source Software](https://soylentnews.org/article.pl?sid=25/09/04/0350224&from=rss) - Analysis of how passkey systems may clash with open-source ecosystems, suggesting critical design considerations for future adoption.

## Corporate and Legal Developments

* [Warner Bros. Discovery Sues Midjourney For Copyright Infringement](https://yro.slashdot.org/story/25/09/04/2236226/warner-bros-discovery-sues-midjourney-for-copyright-infringement?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A legal dispute challenging AI-generated creations by Midjourney, raising important questions about copyrights in the AI age.

* [Atlassian is acquiring The Browser Company](https://www.cnbc.com/2025/09/04/atlassian-the-browser-company-deal.html) - Atlassian announces its acquisition of The Browser Company, signaling a strategic expansion into the next-gen software space.

* [Nepal Blocks Most Social Media Platforms](https://tech.slashdot.org/story/25/09/04/207250/nepal-blocks-most-social-media-platforms?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A controversial move by Nepal to restrict social media raises a debate on digital freedom and government control.

## Cultural and Lifestyle

* [I ditched Spotify and set up my own music stack](https://leshicodes.github.io/blog/spotify-migration/) - A personal journey into creating a self-hosted music ecosystem, providing insights on independence and technological customization.

* [The Color of the Future: A history of blue](https://www.hopefulmons.com/p/the-color-of-the-future) - A cultural and scientific dive into the significance of the color blue, its uses, and emotional resonance over the centuries.

* [Fascinating New Psychology Research Shows How Music Shapes Imagination](https://soylentnews.org/article.pl?sid=25/09/02/1851257&from=rss) - Exploration of music’s impact on the human imagination, offering both academic and practical insights into artistic creativity.

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

* [2025-09-05, 00:45:00](https://yro.slashdot.org/story/25/09/04/2236226/warner-bros-discovery-sues-midjourney-for-copyright-infringement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Warner Bros. Discovery Sues Midjourney For Copyright Infringement](https://yro.slashdot.org/story/25/09/04/2236226/warner-bros-discovery-sues-midjourney-for-copyright-infringement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 00:44:11](https://news.ycombinator.com/item?id=45133869) - [Coalition for Metabolic Health Launches with $50M](https://coalitionformetabolichealth.org/news/coalition-for-metabolic-health-launches-as-part-of-50-million-investment-to-tackle-americas-health-crisis/)
* [2025-09-05, 00:05:50](https://news.ycombinator.com/item?id=45133652) - [Evolving the OCaml Programming Language (2025)](https://kcsrk.info/talks#Evolution_Ashoka_2025)
* [2025-09-05, 00:02:00](https://science.slashdot.org/story/25/09/04/2159215/bathroom-doomscrolling-may-increase-your-risk-of-hemorrhoids?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bathroom Doomscrolling May Increase Your Risk of Hemorrhoids](https://science.slashdot.org/story/25/09/04/2159215/bathroom-doomscrolling-may-increase-your-risk-of-hemorrhoids?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 23:58:09](https://news.ycombinator.com/item?id=45133607) - [We Investigated Tesla&apos;s Autopilot. It&apos;s Scarier Than You Think [video]](https://www.youtube.com/watch?v=6ltU9q1pKKM)
* [2025-09-04, 23:20:43](https://news.ycombinator.com/item?id=45133344) - [Updating restrictions of sales to unsupported regions](https://www.anthropic.com/news/updating-restrictions-of-sales-to-unsupported-regions)
* [2025-09-04, 23:20:00](https://hardware.slashdot.org/story/25/09/04/2152214/intel-outspends-rivals-in-rd-28-more-than-nvidia-156-more-than-amd?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel Outspends Rivals In R&amp;amp;D: 28% More Than Nvidia, 156% More Than AMD](https://hardware.slashdot.org/story/25/09/04/2152214/intel-outspends-rivals-in-rd-28-more-than-nvidia-156-more-than-amd?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 23:12:00](https://news.ycombinator.com/item?id=45133289) - [Unix Conspiracy (1991)](http://www.catb.org/~esr/jargon/html/U/Unix-conspiracy.html)
* [2025-09-04, 22:47:45](https://news.ycombinator.com/item?id=45133109) - [I ditched Spotify and set up my own music stack](https://leshicodes.github.io/blog/spotify-migration/)
* [2025-09-04, 22:40:00](https://hardware.slashdot.org/story/25/09/04/2138217/philips-hue-plans-to-make-all-your-lights-motion-sensors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Philips Hue Plans To Make All Your Lights Motion Sensors](https://hardware.slashdot.org/story/25/09/04/2138217/philips-hue-plans-to-make-all-your-lights-motion-sensors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 22:16:00](https://soylentnews.org/article.pl?sid=25/09/04/048238&amp;from=rss) - [Scammers Will Try to Trick You Into Filling Out Google Forms. Don’t Fall for It](https://soylentnews.org/article.pl?sid=25/09/04/048238&amp;from=rss)
* [2025-09-04, 22:11:09](https://news.ycombinator.com/item?id=45132810) - [What Is the Fourier Transform?](https://www.quantamagazine.org/what-is-the-fourier-transform-20250903/)
* [2025-09-04, 22:01:44](https://lobste.rs/s/kzxxky/maak_infinitely_extensible_command) - [maak: The infinitely extensible command runner and automation project build system à la Make](https://codeberg.org/jjba23/maak)
* [2025-09-04, 22:01:11](https://news.ycombinator.com/item?id=45132710) - [Memory is slow, Disk is fast – Part 2](https://www.bitflux.ai/blog/memory-is-slow-part2/)
* [2025-09-04, 22:00:00](https://yro.slashdot.org/story/25/09/04/2131246/calling-boss-a-dickhead-was-not-a-sackable-offense-tribunal-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Calling Boss a Dickhead Was Not a Sackable Offense, Tribunal Rules](https://yro.slashdot.org/story/25/09/04/2131246/calling-boss-a-dickhead-was-not-a-sackable-offense-tribunal-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 21:46:00](https://lobste.rs/s/gkzmfy/let_s_rename_vibecoding_tag_llms) - [Let&apos;s rename the \&quot;vibecoding\&quot; tag to \&quot;llms\&quot;](https://lobste.rs/s/gkzmfy/let_s_rename_vibecoding_tag_llms)
* [2025-09-04, 21:36:50](https://news.ycombinator.com/item?id=45132498) - [What If OpenDocument Used SQLite?](https://www.sqlite.org/affcase1.html)
* [2025-09-04, 21:22:00](https://tech.slashdot.org/story/25/09/04/207250/nepal-blocks-most-social-media-platforms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nepal Blocks Most Social Media Platforms](https://tech.slashdot.org/story/25/09/04/207250/nepal-blocks-most-social-media-platforms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 21:06:10](https://news.ycombinator.com/item?id=45132183) - [Rocketships and Slingshots](https://postround.substack.com/p/rocketships-and-slingshots)
* [2025-09-04, 20:42:00](https://news.slashdot.org/story/25/09/04/1924220/germany-already-met-its-2028-goal-for-reducing-coal-fired-power?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Germany Already Met Its 2028 Goal for Reducing Coal-Fired Power](https://news.slashdot.org/story/25/09/04/1924220/germany-already-met-its-2028-goal-for-reducing-coal-fired-power?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 20:33:53](https://news.ycombinator.com/item?id=45131921) - [ICPC 2025 World Finals Results](https://worldfinals.icpc.global/scoreboard/2025/index.html)
* [2025-09-04, 20:16:20](https://lobste.rs/s/kqm5ks/glamorous_toolkit_moldable_development) - [Glamorous Toolkit: The Moldable Development Environment](https://github.com/feenkcom/gtoolkit)
* [2025-09-04, 20:01:00](https://slashdot.org/story/25/09/04/1854249/openai-plans-jobs-platform-certification-program-for-ai-roles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Plans Jobs Platform, Certification Program for AI Roles](https://slashdot.org/story/25/09/04/1854249/openai-plans-jobs-platform-certification-program-for-ai-roles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 19:53:42](https://news.ycombinator.com/item?id=45131538) - [Classic 8×8-pixel B&amp;W Mac patterns](https://www.pauladamsmith.com/blog/2025/09/classic-mac-patterns.html)
* [2025-09-04, 19:50:45](https://lobste.rs/s/cruxfx/classic_8x8_pixel_b_w_mac_patterns) - [Classic 8×8-pixel B&amp;W Mac patterns](https://www.pauladamsmith.com/blog/2025/09/classic-mac-patterns.html)
* [2025-09-04, 19:25:54](https://news.ycombinator.com/item?id=45131243) - [Action was the best 8-bit programming language](https://www.goto10retro.com/p/action-was-the-best-8-bit-programming)
* [2025-09-04, 19:24:00](https://news.slashdot.org/story/25/09/04/1832219/adobes-premiere-video-editor-is-coming-to-iphone-for-free?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Adobe&apos;s Premiere Video Editor is Coming To iPhone For Free](https://news.slashdot.org/story/25/09/04/1832219/adobes-premiere-video-editor-is-coming-to-iphone-for-free?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 19:21:25](https://lobste.rs/s/lzr0ug/wal3_write_ahead_log_for_chroma_build_on) - [wal3: A Write-Ahead Log for Chroma, Build on Object Storage](https://trychroma.com/engineering/wal3)
* [2025-09-04, 19:15:30](https://lobste.rs/s/yvua2g/subverting_code_integrity_checks) - [Subverting code integrity checks to locally backdoor Signal, 1Password, Slack, and more](https://blog.trailofbits.com/2025/09/03/subverting-code-integrity-checks-to-locally-backdoor-signal-1password-slack-and-more/)
* [2025-09-04, 18:46:12](https://lobste.rs/s/e3cyxq/integer_programming_1977) - [Integer Programming (1977)](https://web.mit.edu/15.053/www/AMP-Chapter-09.pdf)
* [2025-09-04, 18:45:00](https://it.slashdot.org/story/25/09/04/1823204/solar-powered-logitech-keyboard-appears-on-amazon-mexico?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Solar-Powered Logitech Keyboard Appears on Amazon Mexico](https://it.slashdot.org/story/25/09/04/1823204/solar-powered-logitech-keyboard-appears-on-amazon-mexico?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 18:29:48](https://lobste.rs/s/b6ipnz/you_don_t_need_animations) - [You Don&apos;t Need Animations](https://emilkowal.ski/ui/you-dont-need-animations)
* [2025-09-04, 18:06:05](https://news.ycombinator.com/item?id=45130260) - [LLM Visualization](https://bbycroft.net/llm)
* [2025-09-04, 18:05:00](https://science.slashdot.org/story/25/09/04/1742218/ultra-processed-foods---its-time-for-an-improved-definition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ultra-Processed Foods - It&apos;s Time For an Improved Definition](https://science.slashdot.org/story/25/09/04/1742218/ultra-processed-foods---its-time-for-an-improved-definition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 17:29:00](https://soylentnews.org/article.pl?sid=25/09/04/0350224&amp;from=rss) - [Passkeys Are Incompatible With Open-Source Software](https://soylentnews.org/article.pl?sid=25/09/04/0350224&amp;from=rss)
* [2025-09-04, 17:27:00](https://it.slashdot.org/story/25/09/04/1710210/nvidia-dominates-gpu-shipments-with-94-share?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia Dominates GPU Shipments With 94% Share](https://it.slashdot.org/story/25/09/04/1710210/nvidia-dominates-gpu-shipments-with-94-share?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 17:07:08](https://news.ycombinator.com/item?id=45129523) - [Saquon Barkley is playing for equity](https://www.readtheprofile.com/p/saquon-barkley-investment-portfolio)
* [2025-09-04, 17:01:21](https://news.ycombinator.com/item?id=45129442) - [Artie (YC S23) Is Hiring Engineers, AES, and Senior PMM](https://www.ycombinator.com/companies/artie/jobs)
* [2025-09-04, 16:55:06](https://news.ycombinator.com/item?id=45129369) - [Wal3: A Write-Ahead Log for Chroma, Built on Object Storage](https://trychroma.com/engineering/wal3)
* [2025-09-04, 16:49:00](https://news.slashdot.org/story/25/09/04/1649210/microsofts-6502-basic-is-now-open-source?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft&apos;s 6502 BASIC Is Now Open Source](https://news.slashdot.org/story/25/09/04/1649210/microsofts-6502-basic-is-now-open-source?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 16:45:39](https://news.ycombinator.com/item?id=45129237) - [A PM&apos;s Guide to AI Agent Architecture](https://www.productcurious.com/p/a-pms-guide-to-ai-agent-architecture)
* [2025-09-04, 16:41:24](https://news.ycombinator.com/item?id=45129190) - [Age Simulation Suit](https://www.age-simulation-suit.com/)
* [2025-09-04, 16:32:24](https://news.ycombinator.com/item?id=45129085) - [Stripe Launches L1 Blockchain: Tempo](https://tempo.xyz)
* [2025-09-04, 16:27:41](https://news.ycombinator.com/item?id=45129031) - [Launch HN: Slashy (YC S25) – AI that connects to apps and does tasks](https://news.ycombinator.com/item?id=45129031)
* [2025-09-04, 16:08:00](https://news.slashdot.org/story/25/09/04/168211/ai-not-affecting-job-market-much-so-far-new-york-fed-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Not Affecting Job Market Much So Far, New York Fed Says](https://news.slashdot.org/story/25/09/04/168211/ai-not-affecting-job-market-much-so-far-new-york-fed-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 15:30:20](https://news.ycombinator.com/item?id=45128391) - [Wikipedia survives while the rest of the internet breaks](https://www.theverge.com/cs/features/717322/wikipedia-attacks-neutrality-history-jimmy-wales)
* [2025-09-04, 15:28:11](https://lobste.rs/s/ubyo2n/embedded_dev_kit_for_endbasic_with_netbsd) - [An embedded dev kit for EndBASIC with NetBSD](https://youtu.be/WZFYTInWAqc)
* [2025-09-04, 15:20:00](https://news.slashdot.org/story/25/09/04/1518217/robinhood-ceo-vlad-tenev-says-investing-for-a-living-could-replace-labor-in-a-post-ai-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Robinhood CEO Vlad Tenev Says Investing For a Living Could Replace Labor in a Post-AI World](https://news.slashdot.org/story/25/09/04/1518217/robinhood-ceo-vlad-tenev-says-investing-for-a-living-could-replace-labor-in-a-post-ai-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 14:58:58](https://lobste.rs/s/vdankx/look_out_for_bugs) - [Look Out For Bugs](https://matklad.github.io/2025/09/04/look-for-bugs.html)
* [2025-09-04, 14:53:50](https://news.ycombinator.com/item?id=45127983) - [WiFi signals can measure heart rate](https://news.ucsc.edu/2025/09/pulse-fi-wifi-heart-rate/)
* [2025-09-04, 12:44:00](https://soylentnews.org/article.pl?sid=25/09/03/0226210&amp;from=rss) - [Get Ready for Plastic Blood](https://soylentnews.org/article.pl?sid=25/09/03/0226210&amp;from=rss)
* [2025-09-04, 12:38:10](https://lobste.rs/s/8tfol4/formally_verifying_fp_division_with) - [Formally verifying FP division with Gappa](https://community.arm.com/arm-community-blogs/b/embedded-and-microcontrollers-blog/posts/formally-verifying-a-floating-point-division-routine-with-gappa-p1)
* [2025-09-04, 12:29:49](https://news.ycombinator.com/item?id=45126503) - [Almost anything you give sustained attention to will begin to loop on itself](https://www.henrikkarlsson.xyz/p/attention)
* [2025-09-04, 12:18:27](https://lobste.rs/s/z4cszc/programming_lang_future) - [The Programming-Lang of the Future](https://vimeo.com/1115794889)
* [2025-09-04, 12:12:31](https://news.ycombinator.com/item?id=45126358) - [Atlassian is acquiring The Browser Company](https://www.cnbc.com/2025/09/04/atlassian-the-browser-company-deal.html)
* [2025-09-04, 11:27:26](https://lobste.rs/s/6tfwtv/why_ml_needs_new_programming_language) - [Why ML Needs a New Programming Language](https://signalsandthreads.com/why-ml-needs-a-new-programming-language/)
* [2025-09-04, 11:04:36](https://news.ycombinator.com/item?id=45125859) - [Le Chat: Custom MCP Connectors, Memories](https://mistral.ai/news/le-chat-mcp-connectors-memories)
* [2025-09-04, 11:01:50](https://lobste.rs/s/pvwg6m/ca_trusted_by_microsoft_mis_issued) - [A CA Trusted by Microsoft Mis-issued Certificates for 1.1.1.1 in May 2025, According to Logs](https://arstechnica.com/security/2025/09/mis-issued-certificates-for-1-1-1-1-dns-service-pose-a-threat-to-the-internet/)
* [2025-09-04, 10:56:46](https://lobste.rs/s/za9lgt/practical_introduction_parsing_rust) - [A practical introduction to parsing in Rust](https://jhwlr.io/intro-to-parsing/)
* [2025-09-04, 09:27:53](https://news.ycombinator.com/item?id=45125312) - [The Color of the Future: A history of blue](https://www.hopefulmons.com/p/the-color-of-the-future)
* [2025-09-04, 09:21:38](https://lobste.rs/s/ksxhza/jujutsu_v0_33_0_released) - [jujutsu v0.33.0 released](https://github.com/jj-vcs/jj/releases/tag/v0.33.0)
* [2025-09-04, 07:57:00](https://soylentnews.org/article.pl?sid=25/09/03/0223245&amp;from=rss) - [Nearly 40% of Nvidia&apos;s Revenue Tied to Two Mystery Customers, Filing Shows](https://soylentnews.org/article.pl?sid=25/09/03/0223245&amp;from=rss)
* [2025-09-04, 07:01:39](https://lobste.rs/s/athmwa/setting_up_cgit_with_caddy_v2_2022) - [Setting up cgit with Caddy v2 (2022)](https://www.sixfoisneuf.fr/posts/setting-up-cgit-with-caddy2/)
* [2025-09-04, 06:18:13](https://news.ycombinator.com/item?id=45124143) - [Melvyn Bragg steps down from presenting In Our Time](https://www.bbc.co.uk/mediacentre/2025/melvyn-bragg-decides-to-step-down-from-presenting-in-our-time/)
* [2025-09-04, 05:58:25](https://lobste.rs/s/mjajol/faster_rust_builds_on_mac) - [Faster Rust builds on Mac](https://nnethercote.github.io/2025/09/04/faster-rust-builds-on-mac.html)
* [2025-09-04, 03:14:00](https://soylentnews.org/article.pl?sid=25/09/03/0216228&amp;from=rss) - [People Who Believe in Conspiracy Theories Process Information Differently at the Neural Level](https://soylentnews.org/article.pl?sid=25/09/03/0216228&amp;from=rss)
* [2025-09-03, 22:47:22](https://lobste.rs/s/pqy0pp/where_s_shovelware_why_ai_coding_claims) - [Where&apos;s the Shovelware? Why AI Coding Claims Don&apos;t Add Up](https://substack.com/inbox/post/172538377)
* [2025-09-03, 22:27:00](https://soylentnews.org/article.pl?sid=25/09/02/192213&amp;from=rss) - [CRLite: Fast, Private, and Comprehensive Certificate Revocation Checking in Firefox](https://soylentnews.org/article.pl?sid=25/09/02/192213&amp;from=rss)
* [2025-09-03, 21:07:28](https://lobste.rs/s/pnu6ax/git_exclude_handy_feature_you_might_not) - [Git exclude, a handy feature you might not know about](https://marijkeluttekes.dev/blog/articles/2025/09/03/git-exclude-a-handy-feature-you-might-not-know-about/)
* [2025-09-03, 19:26:07](https://lobste.rs/s/cpzttx/first_gleam_conference_gathering_2026) - [The first Gleam Conference - Gathering 2026](https://gleamgathering.com/)
* [2025-09-03, 17:44:00](https://soylentnews.org/article.pl?sid=25/09/02/1855227&amp;from=rss) - [Microsoft Can&apos;t Guarantee Data Sovereignty – OVHcloud Says &apos;We Told You So&apos;](https://soylentnews.org/article.pl?sid=25/09/02/1855227&amp;from=rss)
* [2025-09-03, 14:59:02](https://lobste.rs/s/jeg5l9/why_rewriting_emacs_is_hard) - [Why Rewriting Emacs Is Hard](https://kyo.iroiro.party/en/posts/why-rewriting-emacs-is-hard/)
* [2025-09-03, 14:01:25](https://lobste.rs/s/jlkxjt/airbus_b612_cockpit_font) - [Airbus B612 cockpit font](https://github.com/polarsys/b612)
* [2025-09-03, 13:01:00](https://soylentnews.org/article.pl?sid=25/09/02/1851257&amp;from=rss) - [Fascinating New Psychology Research Shows How Music Shapes Imagination](https://soylentnews.org/article.pl?sid=25/09/02/1851257&amp;from=rss)
* [2025-09-03, 11:48:51](https://lobste.rs/s/hzky9k/wild_performance_tricks) - [Wild Performance Tricks](https://davidlattimore.github.io/posts/2025/09/02/rustforge-wild-performance-tricks.html)
* [2025-09-03, 11:25:42](https://lobste.rs/s/qb0qre/video_game_blurs_how_best_one_works) - [Video Game Blurs (and how the best one works)](https://blog.frost.kiwi/dual-kawase/)
* [2025-09-03, 10:26:00](https://soylentnews.org/article.pl?sid=25/09/03/0230242&amp;from=rss) - [We Fed People a Milkshake With 130g of Fat to See What It Did to Their Brains](https://soylentnews.org/article.pl?sid=25/09/03/0230242&amp;from=rss)
* [2025-09-03, 08:17:00](https://soylentnews.org/article.pl?sid=25/09/02/1848251&amp;from=rss) - [DUPE - China Turns on Giant Neutrino Detector](https://soylentnews.org/article.pl?sid=25/09/02/1848251&amp;from=rss)
* [2025-09-03, 03:31:00](https://soylentnews.org/article.pl?sid=25/09/02/0359228&amp;from=rss) - [Artificial Toy Story: Do AI-Powered Toys Take the Life Out of Playtime?](https://soylentnews.org/article.pl?sid=25/09/02/0359228&amp;from=rss)
* [2025-09-02, 22:46:00](https://soylentnews.org/article.pl?sid=25/09/02/0144236&amp;from=rss) - [World’s Largest Neutrino Detector Switches On](https://soylentnews.org/article.pl?sid=25/09/02/0144236&amp;from=rss)
* [2025-09-02, 17:59:00](https://soylentnews.org/article.pl?sid=25/09/01/0031222&amp;from=rss) - [New Paper Finds Cases of \&quot;AI Psychosis\&quot; Manifesting Differently From Schizophrenia](https://soylentnews.org/article.pl?sid=25/09/01/0031222&amp;from=rss)
* [2025-09-02, 13:14:00](https://soylentnews.org/article.pl?sid=25/09/01/0021218&amp;from=rss) - [The Unix Epochalypse Might be Sooner Than You Think](https://soylentnews.org/article.pl?sid=25/09/01/0021218&amp;from=rss)
* [2025-09-02, 08:26:00](https://soylentnews.org/article.pl?sid=25/09/01/0018253&amp;from=rss) - [AI in Schools Isn’t Progress — It’s a Sign of How Far We’ve Strayed from the Purpose of Education.](https://soylentnews.org/article.pl?sid=25/09/01/0018253&amp;from=rss)
* [2025-09-02, 03:44:00](https://soylentnews.org/article.pl?sid=25/08/31/1416227&amp;from=rss) - [AMD Roadmap Leak Points to Zen 6 Mobile CPUs in 2027](https://soylentnews.org/article.pl?sid=25/08/31/1416227&amp;from=rss)
* [2025-09-01, 23:04:00](https://soylentnews.org/article.pl?sid=25/08/31/146226&amp;from=rss) - [AI Crawlers Destroying Websites in Hunger for Content](https://soylentnews.org/article.pl?sid=25/08/31/146226&amp;from=rss)
* [2025-09-01, 18:14:00](https://soylentnews.org/article.pl?sid=25/08/31/1355250&amp;from=rss) - [Tesla Denied Having Fatal Crash Data Until a Hacker Found It](https://soylentnews.org/article.pl?sid=25/08/31/1355250&amp;from=rss)
* [2025-09-01, 13:32:00](https://soylentnews.org/article.pl?sid=25/08/31/1353201&amp;from=rss) - [Massive Data Breach: Google Warns 2.5 Billion Gmail Users](https://soylentnews.org/article.pl?sid=25/08/31/1353201&amp;from=rss)
* [2025-09-01, 09:20:33](https://news.ycombinator.com/item?id=45091004) - [3D QR Codes](https://erikdemaine.org/prints/QR/)
* [2025-09-01, 08:44:00](https://soylentnews.org/article.pl?sid=25/08/30/1515239&amp;from=rss) - [Medical Cannabis Fails the Long-Term Test: 58% of Patients Quit Within a Year](https://soylentnews.org/article.pl?sid=25/08/30/1515239&amp;from=rss)
* [2025-09-01, 04:01:00](https://soylentnews.org/article.pl?sid=25/08/30/157235&amp;from=rss) - [The Mysterious Shortwave Radio Station Stoking US-Russia Nuclear Fears](https://soylentnews.org/article.pl?sid=25/08/30/157235&amp;from=rss)
* [2025-09-01, 02:54:19](https://news.ycombinator.com/item?id=45089003) - [Type-safe and user-friendly error handling in Swift 6](https://theswiftdev.com/2025/type-safe-and-user-friendly-error-handling-in-swift-6/)
