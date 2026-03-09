# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence, Security, and Ethics

* [AI Allows Hackers To Identify Anonymous Social Media Accounts, Study Finds](https://tech.slashdot.org/story/26/03/09/0428241/ai-allows-hackers-to-identify-anonymous-social-media-accounts-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Highlights how AI advancements pose potential privacy risks by enabling hackers to unveil identities of anonymous social media users.

* [Is legal the same as legitimate: AI reimplementation and the erosion of copyleft](https://writings.hongminhee.org/2026/03/legal-vs-legitimate/) - A thought-provoking analysis on the ethical implications of reimplementing AI systems while skirting copyleft principles.

* [Revealed: UK's multibillion AI drive is built on 'phantom investments'](https://www.theguardian.com/technology/2026/mar/09/revealed-uks-multibillion-ai-drive-is-built-on-phantom-investments) - Investigation into how the UK’s massive AI push might be resting on questionable financial realities.

* [Your LLM Doesn't Write Correct Code. It Writes Plausible Code](https://blog.katanaquant.com/p/your-llm-doesnt-write-correct-code) - Discusses the limitations of large language models in producing accurate programming code.

* [Open Source Registries Don't Have Enough Money to Implement Basic Security](https://soylentnews.org/article.pl?sid=26/03/07/1632227&from=rss) - A worrying dive into why open-source software registries are underfunded in addressing critical security.

* [Judges Find AI Doesn't Have Human Intelligence in Two New Court Cases](https://yro.slashdot.org/story/26/03/09/0121210/judges-find-ai-doesnt-have-human-intelligence-in-two-new-court-cases?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Legal perspectives highlighting AI's limited cognitive abilities and their implications on judicial decisions.

* [Jack Dorsey's Block Accused of 'AI-Washing' to Excuse Laying Off Nearly Half Its Workforce](https://it.slashdot.org/story/26/03/08/1110220/jack-dorseys-block-accused-of-ai-washing-to-excuse-laying-off-nearly-half-its-workforce?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Reports allege misuse of AI as a justification for workforce reductions in Jack Dorsey's company.

* [Lawsuit: Google Gemini Sent Man on Violent Missions, Set Suicide “Countdown”](https://soylentnews.org/article.pl?sid=26/03/06/1541249&from=rss) - A lawsuit raises alarming questions about the potential consequences of human interaction with AI technologies.

## Innovation in Technology and Software

* [Swiss Vote Places Right To Use Cash In Country's Constitution](https://news.slashdot.org/story/26/03/09/0419215/swiss-vote-places-right-to-use-cash-in-countrys-constitution?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Switzerland enshrines the right to use physical cash into its constitution, marking a notable step in financial autonomy.

* [Linux Internals: How /proc/self/mem writes to unwritable memory](https://offlinemark.com/an-obscure-quirk-of-proc/) - A deeper dive into an unusual quirk of the Linux OS enabling writes to what should be immutable memory.

* [Rust-like Error Handling in TypeScript](https://codeinput.com/blog/typescript-result) - Explores bringing Rust-style error handling efficiency to TypeScript programming.

* [Production query plans without production data](https://boringsql.com/posts/portable-stats/) - Innovations for simulating production-level SQL query plans without the need for real-world production data.

* [z80-sans: OpenType font that disassembles Z80 instructions](https://github.com/nevesnunes/z80-sans) - A creative combination of typography and technology producing a disassembling font for the Z80 processor.

* [If It Quacks Like a Package Manager](https://nesbitt.io/2026/03/08/if-it-quacks-like-a-package-manager.html) - An exploration into the functionality of tools that resemble package managers without officially being one.

## Science and Space

* [US Military Tested Device That May Be Tied To Havana Syndrome On Rats, Sheep](https://news.slashdot.org/story/26/03/09/0410214/us-military-tested-device-that-may-be-tied-to-havana-syndrome-on-rats-sheep?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Controversy emerges over reported experiments possibly linked to the mysterious Havana Syndrome.

* [New SETI Study: Why We Might Have Been Missing Alien Signals](https://science.slashdot.org/story/26/03/09/0654222/new-seti-study-why-we-might-have-been-missing-alien-signals?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Breakthroughs in SETI research aimed at enhancing the search for extraterrestrial intelligence.

* [Scientists Just Doubled Our Catalog of Black Hole and Neutron Star Collisions](https://science.slashdot.org/story/26/03/09/0429200/scientists-just-doubled-our-catalog-of-black-hole-and-neutron-star-collisions?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A leap in astrophysical records offering deeper insights into cosmic events.

* [No Fooling: NASA Targets April 1 for Artemis II Launch to the Moon](https://soylentnews.org/article.pl?sid=26/03/05/0523208&from=rss) - NASA sets an ambitious launch date for the next stage in lunar exploration with Artemis II.

* [As Moon Interest Heats Up, Two Companies Unveil Plans for a Lunar "Harvester"](https://soylentnews.org/article.pl?sid=26/03/05/1853251&from=rss) - Commercial efforts to mine resources on the moon take shape.

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

* [2026-03-09, 16:00:00](https://tech.slashdot.org/story/26/03/09/0428241/ai-allows-hackers-to-identify-anonymous-social-media-accounts-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Allows Hackers To Identify Anonymous Social Media Accounts, Study Finds](https://tech.slashdot.org/story/26/03/09/0428241/ai-allows-hackers-to-identify-anonymous-social-media-accounts-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-09, 15:44:04](https://news.ycombinator.com/item?id=47310556) - [Kuwaiti F/A-18&apos;s Triple Friendly Fire Shootdown Gets Stranger by the Day](https://www.twz.com/air/kuwaiti-f-a-18s-triple-friendly-fire-shootdown-gets-stranger-by-the-day)
* [2026-03-09, 15:28:31](https://lobste.rs/s/hsegku/abusing_arpa_tld_isn_t_supposed_host) - [Abusing .arpa, the TLD that isn’t supposed to host anything](https://www.infoblox.com/blog/threat-intelligence/abusing-arpa-the-tld-that-isnt-supposed-to-host-anything/)
* [2026-03-09, 15:23:08](https://news.ycombinator.com/item?id=47310296) - [Restoring a Sun SPARCstation IPX Part 1: PSU and Nvram](https://www.rs-online.com/designspark/restoring-a-sun-sparcstation-ipx-part-1-psu-and-nvram)
* [2026-03-09, 15:12:17](https://lobste.rs/s/52jd6f/is_legal_same_as_legitimate_ai) - [Is legal the same as legitimate: AI reimplementation and the erosion of copyleft](https://writings.hongminhee.org/2026/03/legal-vs-legitimate/)
* [2026-03-09, 15:05:09](https://news.ycombinator.com/item?id=47310073) - [The engine of Germany&apos;s wealth is blocking its future](https://europeancorrespondent.com/en/r/the-engine-of-germanys-wealth-is-blocking-its-future)
* [2026-03-09, 15:03:22](https://news.ycombinator.com/item?id=47310054) - [I&apos;m Getting a Whiff of Iain Banks&apos; Culture](https://probablydance.com/2026/03/07/im-getting-a-whiff-of-iain-banks-culture/)
* [2026-03-09, 15:00:00](https://news.slashdot.org/story/26/03/09/0419215/swiss-vote-places-right-to-use-cash-in-countrys-constitution?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Swiss Vote Places Right To Use Cash In Country&apos;s Constitution](https://news.slashdot.org/story/26/03/09/0419215/swiss-vote-places-right-to-use-cash-in-countrys-constitution?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-09, 14:47:32](https://lobste.rs/s/bv55sb/removing_recursion_via_explicit) - [Removing recursion via explicit callstack simulation](https://jnkr.tech/blog/removing-recursion)
* [2026-03-09, 14:45:12](https://news.ycombinator.com/item?id=47309811) - [Revealed: UK&apos;s multibillion AI drive is built on &apos;phantom investments&apos;](https://www.theguardian.com/technology/2026/mar/09/revealed-uks-multibillion-ai-drive-is-built-on-phantom-investments)
* [2026-03-09, 14:35:00](https://soylentnews.org/article.pl?sid=26/03/08/1446203&amp;from=rss) - [Time Zones vs. Mean Solar Time](https://soylentnews.org/article.pl?sid=26/03/08/1446203&amp;from=rss)
* [2026-03-09, 14:28:43](https://news.ycombinator.com/item?id=47309605) - [Algebraic topology: knots links and braids](https://aeb.win.tue.nl/at/algtop-5.html)
* [2026-03-09, 14:20:29](https://lobste.rs/s/qp4zl6/notes_on_writing_voxel_game_dyalog_apl) - [Notes on writing a voxel game in Dyalog APL](https://homewithinnowhere.com/blog/voxel_game/)
* [2026-03-09, 14:01:44](https://lobste.rs/s/sd1rsy/i_don_t_know_if_my_job_will_still_exist_ten) - [I don&apos;t know if my job will still exist in ten years](https://www.seangoedecke.com/will-my-job-still-exist/)
* [2026-03-09, 14:00:00](https://news.slashdot.org/story/26/03/09/0410214/us-military-tested-device-that-may-be-tied-to-havana-syndrome-on-rats-sheep?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Military Tested Device That May Be Tied To Havana Syndrome On Rats, Sheep](https://news.slashdot.org/story/26/03/09/0410214/us-military-tested-device-that-may-be-tied-to-havana-syndrome-on-rats-sheep?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-09, 13:55:14](https://lobste.rs/s/dnqcvh/your_llm_doesn_t_write_correct_code_it) - [Your LLM Doesn&apos;t Write Correct Code. It Writes Plausible Code](https://blog.katanaquant.com/p/your-llm-doesnt-write-correct-code)
* [2026-03-09, 13:04:26](https://lobste.rs/s/lcvctc/rust_like_error_handling_typescript) - [Rust-like Error Handling in TypeScript](https://codeinput.com/blog/typescript-result)
* [2026-03-09, 12:52:20](https://news.ycombinator.com/item?id=47308394) - [FreeBSD Capsicum vs. Linux Seccomp Process Sandboxing](https://vivianvoss.net/blog/capsicum-vs-seccomp)
* [2026-03-09, 12:38:46](https://news.ycombinator.com/item?id=47308278) - [Reverse-engineering the UniFi inform protocol](https://tamarack.cloud/blog/reverse-engineering-unifi-inform-protocol)
* [2026-03-09, 12:15:07](https://news.ycombinator.com/item?id=47308059) - [No leap second will be introduced at the end of June 2026](https://lists.iana.org/hyperkitty/list/tz@iana.org/thread/P6D36VZSZBUSSTSMZKFXKF4T4IXWN23P/)
* [2026-03-09, 11:34:00](https://science.slashdot.org/story/26/03/09/0654222/new-seti-study-why-we-might-have-been-missing-alien-signals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New SETI Study: Why We Might Have Been Missing Alien Signals](https://science.slashdot.org/story/26/03/09/0654222/new-seti-study-why-we-might-have-been-missing-alien-signals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-09, 10:52:19](https://lobste.rs/s/o8vbb7/production_query_plans_without) - [Production query plans without production data](https://boringsql.com/posts/portable-stats/)
* [2026-03-09, 10:33:30](https://lobste.rs/s/jreqtw/returning_rails_2026) - [Returning To Rails in 2026](https://www.markround.com/blog/2026/03/05/returning-to-rails-in-2026/)
* [2026-03-09, 10:28:08](https://news.ycombinator.com/item?id=47307169) - [Show HN: VS Code Agent Kanban: Task Management for the AI-Assisted Developer](https://www.appsoftware.com/blog/introducing-vs-code-agent-kanban-task-management-for-the-ai-assisted-developer)
* [2026-03-09, 10:14:59](https://news.ycombinator.com/item?id=47307055) - [Ireland shuts last coal plant, becomes 15th coal-free country in Europe (2025)](https://www.pv-magazine.com/2025/06/20/ireland-coal-free-ends-coal-power-generation-moneypoint/)
* [2026-03-09, 09:52:00](https://soylentnews.org/article.pl?sid=26/03/07/1635228&amp;from=rss) - [Claude Code Deletes Developers&apos; Production Setup, Including its Database and Snapshots](https://soylentnews.org/article.pl?sid=26/03/07/1635228&amp;from=rss)
* [2026-03-09, 09:43:51](https://lobste.rs/s/6pvtem/ai_will_fuck_you_up_if_you_re_not_on_board) - [AI will fuck you up if you’re not on board](https://rmoff.net/2026/03/06/ai-will-fuck-you-up-if-youre-not-on-board/)
* [2026-03-09, 09:25:02](https://news.ycombinator.com/item?id=47306655) - [Fontcrafter: Turn Your Handwriting into a Real Font](https://arcade.pirillo.com/fontcrafter.html)
* [2026-03-09, 08:43:08](https://lobste.rs/s/eab8au/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/eab8au/what_are_you_doing_this_week)
* [2026-03-09, 08:09:31](https://lobste.rs/s/av8fcx/linux_internals_how_proc_self_mem_writes) - [Linux Internals: How /proc/self/mem writes to unwritable memory](https://offlinemark.com/an-obscure-quirk-of-proc/)
* [2026-03-09, 07:34:00](https://linux.slashdot.org/story/26/03/09/0544224/eff-ubuntu-and-other-distros-discuss-how-to-respond-to-age-verification-laws?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EFF, Ubuntu and Other Distros Discuss How to Respond to Age-Verification Laws](https://linux.slashdot.org/story/26/03/09/0544224/eff-ubuntu-and-other-distros-discuss-how-to-respond-to-age-verification-laws?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-09, 06:28:02](https://news.ycombinator.com/item?id=47305461) - [US Court of Appeals: TOS may be updated by email, use can imply consent [pdf]](https://cdn.ca9.uscourts.gov/datastore/memoranda/2026/03/03/25-403.pdf)
* [2026-03-09, 05:37:15](https://news.ycombinator.com/item?id=47305236) - [FFmpeg at Meta: Media Processing at Scale](https://engineering.fb.com/2026/03/02/video-engineering/ffmpeg-at-meta-media-processing-at-scale/)
* [2026-03-09, 05:10:00](https://soylentnews.org/article.pl?sid=26/03/07/1632227&amp;from=rss) - [Open Source Registries Don&apos;t Have Enough Money to Implement Basic Security](https://soylentnews.org/article.pl?sid=26/03/07/1632227&amp;from=rss)
* [2026-03-09, 04:34:00](https://science.slashdot.org/story/26/03/09/0429200/scientists-just-doubled-our-catalog-of-black-hole-and-neutron-star-collisions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Just Doubled Our Catalog of Black Hole and Neutron Star Collisions](https://science.slashdot.org/story/26/03/09/0429200/scientists-just-doubled-our-catalog-of-black-hole-and-neutron-star-collisions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-09, 03:19:28](https://lobste.rs/s/kefmyt/thinnings_sublist_witnesses_de_bruijn) - [Thinnings: Sublist Witnesses and de Bruijn Index Shift Clumping](https://www.philipzucker.com/thin1/)
* [2026-03-09, 01:34:00](https://yro.slashdot.org/story/26/03/09/0121210/judges-find-ai-doesnt-have-human-intelligence-in-two-new-court-cases?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Judges Find AI Doesn&apos;t Have Human Intelligence in Two New Court Cases](https://yro.slashdot.org/story/26/03/09/0121210/judges-find-ai-doesnt-have-human-intelligence-in-two-new-court-cases?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-09, 00:24:00](https://soylentnews.org/article.pl?sid=26/03/07/1629233&amp;from=rss) - [Roundup:  OS-level Age Verification Laws](https://soylentnews.org/article.pl?sid=26/03/07/1629233&amp;from=rss)
* [2026-03-09, 00:07:18](https://news.ycombinator.com/item?id=47303111) - [Ask HN: What Are You Working On? (March 2026)](https://news.ycombinator.com/item?id=47303111)
* [2026-03-08, 23:58:14](https://lobste.rs/s/wevip9/webpki_you) - [WebPKI and You](https://blog.brycekerley.net/2026/03/08/webpki-and-you.html)
* [2026-03-08, 23:49:00](https://hardware.slashdot.org/story/26/03/08/2344234/could-home-building-robots-help-fix-the-housing-crisis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Could Home-Building Robots Help Fix the Housing Crisis?](https://hardware.slashdot.org/story/26/03/08/2344234/could-home-building-robots-help-fix-the-housing-crisis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-08, 22:50:55](https://news.ycombinator.com/item?id=47302463) - [Linux Internals: How /proc/self/mem writes to unwritable memory (2021)](https://offlinemark.com/an-obscure-quirk-of-proc/)
* [2026-03-08, 22:39:00](https://it.slashdot.org/story/26/03/08/2237210/a-security-researcher-went-undercover-on-moltbook---and-found-security-risks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Security Researcher Went &apos;Undercover&apos; on Moltbook - and Found Security Risks](https://it.slashdot.org/story/26/03/08/2237210/a-security-researcher-went-undercover-on-moltbook---and-found-security-risks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-08, 21:21:00](https://science.slashdot.org/story/26/03/08/2118218/robotic-surgery-performed-remotely-on-patient-1500-miles-away?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Robotic Surgery Performed Remotely on Patient 1,500 Miles Away](https://science.slashdot.org/story/26/03/08/2118218/robotic-surgery-performed-remotely-on-patient-1500-miles-away?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-08, 21:00:44](https://lobste.rs/s/jkq80y/cakelisp) - [Cakelisp](https://macoy.me/blog/programming/CakelispIntro)
* [2026-03-08, 20:53:04](https://lobste.rs/s/sdrpbx/why_octal_notation_should_be_used_for_utf_8) - [Why octal notation should be used for UTF-8 (and Unicode) (2016)](https://movq.de/blog/postings/2016-10-05/0/POSTING-en.html)
* [2026-03-08, 20:30:18](https://news.ycombinator.com/item?id=47301085) - [Agent Safehouse – macOS-native sandboxing for local agents](https://agent-safehouse.dev/)
* [2026-03-08, 20:15:46](https://lobste.rs/s/hbybe3/z80_sans_opentype_font_disassembles_z80) - [z80-sans: OpenType font that disassembles Z80 instructions](https://github.com/nevesnunes/z80-sans)
* [2026-03-08, 19:51:00](https://linux.slashdot.org/story/26/03/08/1948243/steam-on-linux-numbers-dropped-to-223-in-february?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Steam on Linux Numbers Dropped to 2.23% in February](https://linux.slashdot.org/story/26/03/08/1948243/steam-on-linux-numbers-dropped-to-223-in-february?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-08, 19:41:00](https://soylentnews.org/article.pl?sid=26/03/07/1624228&amp;from=rss) - [‘What Matters More To Employers, Education Or Experience?’ Asks AI Expert](https://soylentnews.org/article.pl?sid=26/03/07/1624228&amp;from=rss)
* [2026-03-08, 18:34:00](https://it.slashdot.org/story/26/03/08/0253259/openais-former-research-chief-raises-70m-to-automate-manufacturing-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI&apos;s Former Research Chief Raises $70M to Automate Manufacturing With AI](https://it.slashdot.org/story/26/03/08/0253259/openais-former-research-chief-raises-70m-to-automate-manufacturing-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-08, 17:57:58](https://lobste.rs/s/e72lgq/impressions_from_mozilla_1_2b_2002) - [Impressions from Mozilla 1.2b (2002)](https://movq.de/blog/postings/2026-03-08/0/POSTING-en.html)
* [2026-03-08, 17:35:34](https://lobste.rs/s/exxoe2/blocking_http1_1) - [Blocking HTTP1.1](https://sheep.horse/2026/3/blocking_http1.1_-_some_results.html)
* [2026-03-08, 17:34:00](https://it.slashdot.org/story/26/03/08/0236233/23-of-nodejs-users-run-an-outdated-version-so-openjs-announces-program-offering-upgrade-providers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [2/3 of Node.Js Users Run an Outdated Version.  So OpenJS Announces Program Offering Upgrade Providers](https://it.slashdot.org/story/26/03/08/0236233/23-of-nodejs-users-run-an-outdated-version-so-openjs-announces-program-offering-upgrade-providers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-08, 16:58:35](https://lobste.rs/s/brz5mw/libreoffice_writer_now_supports) - [LibreOffice Writer now supports Markdown](https://blog.documentfoundation.org/blog/2026/02/04/libreoffice-26-2-is-here/)
* [2026-03-08, 16:46:10](https://news.ycombinator.com/item?id=47298743) - [My Homelab Setup](https://bryananthonio.com/blog/my-homelab-setup/)
* [2026-03-08, 16:39:30](https://lobste.rs/s/ooandv/gnu_ai_reimplementations) - [GNU and the AI reimplementations](https://antirez.com/news/162)
* [2026-03-08, 16:34:00](https://it.slashdot.org/story/26/03/08/1110220/jack-dorseys-block-accused-of-ai-washing-to-excuse-laying-off-nearly-half-its-workforce?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Jack Dorsey&apos;s Block Accused of &apos;AI-Washing&apos; to Excuse Laying Off Nearly Half Its Workforce](https://it.slashdot.org/story/26/03/08/1110220/jack-dorseys-block-accused-of-ai-washing-to-excuse-laying-off-nearly-half-its-workforce?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-08, 16:31:00](https://lobste.rs/s/j17fxk/lightweight_protocol_assert_authorship) - [Lightweight protocol to assert authorship of content and vouch for humanity of others](https://codeberg.org/robida/human.json)
* [2026-03-08, 16:22:24](https://news.ycombinator.com/item?id=47298553) - [Flash media longevity testing – 6 years later](https://old.reddit.com/r/DataHoarder/comments/1q6xnun/flash_media_longevity_testing_6_years_later/)
* [2026-03-08, 15:34:00](https://it.slashdot.org/story/26/03/08/0216238/workers-who-love-synergizing-paradigms-might-be-bad-at-their-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Workers Who Love &apos;Synergizing Paradigms&apos; Might Be Bad at Their Jobs](https://it.slashdot.org/story/26/03/08/0216238/workers-who-love-synergizing-paradigms-might-be-bad-at-their-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-08, 15:21:09](https://news.ycombinator.com/item?id=47298044) - [FrameBook](https://fb.edoo.gg)
* [2026-03-08, 15:19:12](https://lobste.rs/s/9thupi/framebook) - [FrameBook](https://fb.edoo.gg)
* [2026-03-08, 14:57:00](https://soylentnews.org/politics/article.pl?sid=26/03/06/1549257&amp;from=rss) - [Tech Industry is in Tariff Hell, Even If Refunds Are Automated](https://soylentnews.org/politics/article.pl?sid=26/03/06/1549257&amp;from=rss)
* [2026-03-08, 11:27:41](https://lobste.rs/s/hekrwd/if_it_quacks_like_package_manager) - [If It Quacks Like a Package Manager](https://nesbitt.io/2026/03/08/if-it-quacks-like-a-package-manager.html)
* [2026-03-08, 11:10:14](https://lobste.rs/s/kgpyat/put_zip_code_first) - [Put the ZIP code first](https://zipcodefirst.com/)
* [2026-03-08, 10:47:21](https://news.ycombinator.com/item?id=47296259) - [Segagaga Has Been Translated into English](https://www.thedreamcastjunkyard.co.uk/2026/02/segagaga-has-finally-been-translated.html)
* [2026-03-08, 10:13:00](https://soylentnews.org/article.pl?sid=26/03/06/1545254&amp;from=rss) - [Would Aliens Do Physics, or is Science a Human Invention?](https://soylentnews.org/article.pl?sid=26/03/06/1545254&amp;from=rss)
* [2026-03-08, 09:30:25](https://news.ycombinator.com/item?id=47295871) - [Ask HN: Can I repurpose a Bluetooth voice remote as input device for a PC?](https://news.ycombinator.com/item?id=47295871)
* [2026-03-08, 05:24:00](https://soylentnews.org/article.pl?sid=26/03/06/1541249&amp;from=rss) - [Lawsuit: Google Gemini Sent Man on Violent Missions, Set Suicide “Countdown”](https://soylentnews.org/article.pl?sid=26/03/06/1541249&amp;from=rss)
* [2026-03-08, 05:04:14](https://news.ycombinator.com/item?id=47294582) - [PCB devboard the size of a USB-C plug](https://github.com/Dieu-de-l-elec/AngstromIO-devboard)
* [2026-03-08, 00:39:00](https://soylentnews.org/article.pl?sid=26/03/06/1538243&amp;from=rss) - [Clueless Cops Post Seized Crypto Wallet Password. $5M Quickly Stolen.](https://soylentnews.org/article.pl?sid=26/03/06/1538243&amp;from=rss)
* [2026-03-07, 22:03:37](https://news.ycombinator.com/item?id=47291876) - [Microscopes can see video on a laserdisc](https://www.youtube.com/watch?v=qZuR-772cks)
* [2026-03-07, 19:55:00](https://soylentnews.org/article.pl?sid=26/03/06/1533251&amp;from=rss) - [Congress Extends ISS and Tells NASA to Get Moving on Private Space Stations](https://soylentnews.org/article.pl?sid=26/03/06/1533251&amp;from=rss)
* [2026-03-07, 15:07:00](https://soylentnews.org/article.pl?sid=26/03/06/1338239&amp;from=rss) - [Starlink Mobile Teases ‘5G Speeds From Space With 100X the Data Density’](https://soylentnews.org/article.pl?sid=26/03/06/1338239&amp;from=rss)
* [2026-03-07, 10:21:00](https://soylentnews.org/article.pl?sid=26/03/06/1335212&amp;from=rss) - [What Crystals Older Than the Sun Reveal About the Start of the Solar System](https://soylentnews.org/article.pl?sid=26/03/06/1335212&amp;from=rss)
* [2026-03-07, 05:40:00](https://soylentnews.org/article.pl?sid=26/03/06/1321207&amp;from=rss) - [Holy C Batman, He Built an Operating System!](https://soylentnews.org/article.pl?sid=26/03/06/1321207&amp;from=rss)
* [2026-03-07, 00:53:00](https://soylentnews.org/article.pl?sid=26/03/05/2316254&amp;from=rss) - [vscreen: A Real Browser for AI Agents, Streamed Live via WebRTC](https://soylentnews.org/article.pl?sid=26/03/05/2316254&amp;from=rss)
* [2026-03-06, 22:38:47](https://news.ycombinator.com/item?id=47282085) - [The Window Chrome of Our Discontent](https://pxlnv.com/blog/window-chrome-of-our-discontent/)
* [2026-03-06, 20:11:00](https://soylentnews.org/article.pl?sid=26/03/05/233230&amp;from=rss) - [Reminder:  VPNs Can&apos;t Make You Anonymous Online](https://soylentnews.org/article.pl?sid=26/03/05/233230&amp;from=rss)
* [2026-03-06, 15:46:53](https://news.ycombinator.com/item?id=47276447) - [The Finger and the Moon](https://taylor.town/finger-moon)
* [2026-03-06, 15:30:00](https://soylentnews.org/article.pl?sid=26/03/05/2246218&amp;from=rss) - [Destroyed Servers and DoS Attacks: What Can Happen When OpenClaw AI Agents Interact](https://soylentnews.org/article.pl?sid=26/03/05/2246218&amp;from=rss)
* [2026-03-06, 10:43:00](https://soylentnews.org/article.pl?sid=26/03/05/1853251&amp;from=rss) - [As Moon Interest Heats Up, Two Companies Unveil Plans for a Lunar \&quot;Harvester\&quot;](https://soylentnews.org/article.pl?sid=26/03/05/1853251&amp;from=rss)
* [2026-03-06, 08:41:37](https://news.ycombinator.com/item?id=47272531) - [Unlocking Python&apos;s Cores:Energy Implications of Removing the GIL](https://arxiv.org/abs/2603.04782)
* [2026-03-06, 05:58:00](https://soylentnews.org/article.pl?sid=26/03/05/1850205&amp;from=rss) - [DOS Memory Management](https://soylentnews.org/article.pl?sid=26/03/05/1850205&amp;from=rss)
* [2026-03-06, 01:10:00](https://soylentnews.org/article.pl?sid=26/03/05/1846224&amp;from=rss) - [Micron Sampling First 256GB SOCAMM2 Memory Packages — 2TB of RAM Per CPU for Datacenters](https://soylentnews.org/article.pl?sid=26/03/05/1846224&amp;from=rss)
* [2026-03-05, 20:25:00](https://soylentnews.org/article.pl?sid=26/03/05/0529259&amp;from=rss) - [To Update Blobs or Not to Update Blobs](https://soylentnews.org/article.pl?sid=26/03/05/0529259&amp;from=rss)
* [2026-03-05, 15:42:00](https://soylentnews.org/article.pl?sid=26/03/05/0714212&amp;from=rss) - [AI Art Isn&apos;t Art, or Copyrightable Art Anyway](https://soylentnews.org/article.pl?sid=26/03/05/0714212&amp;from=rss)
* [2026-03-05, 12:24:10](https://news.ycombinator.com/item?id=47260812) - [Every single board computer I tested in 2025](https://bret.dk/every-single-board-computer-i-tested-in-2025/)
* [2026-03-05, 10:52:00](https://soylentnews.org/article.pl?sid=26/03/05/0732251&amp;from=rss) - [Drones Attack Several AWS Middle East Region Data Centers Amid Iran War, Leading to Outages](https://soylentnews.org/article.pl?sid=26/03/05/0732251&amp;from=rss)
* [2026-03-05, 09:04:16](https://news.ycombinator.com/item?id=47259366) - [Grammarly is offering ‘expert’ AI reviews from famous dead and living writers](https://www.wired.com/story/grammarly-is-offering-expert-ai-reviews-from-your-favorite-authors-dead-or-alive/)
* [2026-03-05, 06:11:00](https://soylentnews.org/article.pl?sid=26/03/05/0523208&amp;from=rss) - [No Fooling: NASA Targets April 1 for Artemis II Launch to the Moon](https://soylentnews.org/article.pl?sid=26/03/05/0523208&amp;from=rss)
* [2026-03-05, 01:37:42](https://news.ycombinator.com/item?id=47256376) - [My “grand vision” for Rust](https://blog.yoshuawuyts.com/a-grand-vision-for-rust/)
* [2026-03-05, 00:23:00](https://soylentnews.org/article.pl?sid=26/03/04/1535231&amp;from=rss) - [Anonymous Credentials: an Illustrated Primer](https://soylentnews.org/article.pl?sid=26/03/04/1535231&amp;from=rss)
