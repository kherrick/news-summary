# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovations

* [The Stallman Paradox: How Web3 Became the Ultimate Open Source Theater](https://paragraph.com/@holonic-horizons/the-stallman-paradox-how-web3-became-the-ultimate-open-source-theater) - A detailed exploration of the complexities of Web3 and its alignment with open-source principles. [Comments](https://news.ycombinator.com/item?id=45802600)

* [Windows 7 Squeezed To 69MB in Proof-of-Concept Build](https://tech.slashdot.org/story/25/11/03/1816216/windows-7-squeezed-to-69mb-in-proof-of-concept-build?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A remarkable feat showcasing an extremely compact version of Windows 7. [Comments](https://tech.slashdot.org/story/25/11/03/1816216/windows-7-squeezed-to-69mb-in-proof-of-concept-build?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Show HN: a Rust ray tracer that runs on any GPU – even in the browser](https://github.com/tchauffi/rust-rasterizer) - Introducing a GPU-compatible Rust ray tracer that operates seamlessly in web environments. [Comments](https://news.ycombinator.com/item?id=45798871)

* [Linux Ported to WebAssembly, Boots in a Browser Tab](https://linux.slashdot.org/story/25/11/03/0610234/linux-ported-to-webassembly-boots-in-a-browser-tab?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Linux operating in WebAssembly, demonstrating boot functionality directly in browser environments. [Comments](https://linux.slashdot.org/story/25/11/03/0610234/linux-ported-to-webassembly-boots-in-a-browser-tab?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Tiny electric motor can produce more than 1,000 horsepower](https://supercarblondie.com/electric-motor-yasa-more-powerful-tesla-mercedes/) - A groundbreaking innovation in electric motor technology with exceptional power generation capabilities. [Comments](https://news.ycombinator.com/item?id=45797242)

## Artificial Intelligence and Research Challenges

* [arXiv Changes Rules After Getting Spammed With AI-Generated 'Research' Papers](https://slashdot.org/story/25/11/03/1716252/arxiv-changes-rules-after-getting-spammed-with-ai-generated-research-papers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Examination of arXiv's response to the rise of AI-generated submissions. [Comments](https://news.ycombinator.com/item?id=45801673)

* [Microsoft AI Chief Says Only Biological Beings Can Be Conscious](https://tech.slashdot.org/story/25/11/03/1534209/microsoft-ai-chief-says-only-biological-beings-can-be-conscious?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Exploring perspectives on consciousness in artificial intelligence from Microsoft's AI Chief. [Comments](https://tech.slashdot.org/story/25/11/03/1534209/microsoft-ai-chief-says-only-biological-beings-can-be-conscious?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [OpenAI Signs $38 Billion Cloud Deal With Amazon](https://slashdot.org/story/25/11/03/1448202/openai-signs-38-billion-cloud-deal-with-amazon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Significant cloud partnership between OpenAI and Amazon with major financial implications. [Comments](https://news.ycombinator.com/item?id=45799211)

## Society and Ethics

* [America is bracing for political violence – and significant portion think its OK](https://www.politico.com/news/2025/11/03/poll-americans-political-violence-00632864) - Overview of rising concerns about political violence in the United States. [Comments](https://news.ycombinator.com/item?id=45802248)

* [Grand Theft Auto Studio Accused of Union Busting After Firing Dozens](https://games.slashdot.org/story/25/11/03/0542221/grand-theft-auto-studio-accused-of-union-busting-after-firing-dozens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Labor disputes involving a major gaming studio. [Comments](https://games.slashdot.org/story/25/11/03/0542221/grand-theft-auto-studio-accused-of-union-busting-after-firing-dozens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Manufacturer Remotely Bricks Smart Vacuum After Its Owner Blocked It From Collecting Data](https://yro.slashdot.org/story/25/11/02/2241201/manufacturer-remotely-bricks-smart-vacuum-after-its-owner-blocked-it-from-collecting-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Controversy surrounding remote data protocols in consumer electronics. [Comments](https://yro.slashdot.org/story/25/11/02/2241201/manufacturer-remotely-bricks-smart-vacuum-after-its-owner-blocked-it-from-collecting-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

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

* [2025-11-03, 18:38:00](https://news.ycombinator.com/item?id=45802600) - [The Stallman Paradox: How Web3 Became the Ultimate Open Source Theater](https://paragraph.com/@holonic-horizons/the-stallman-paradox-how-web3-became-the-ultimate-open-source-theater)
* [2025-11-03, 18:33:22](https://news.ycombinator.com/item?id=45802538) - [Is the Internet Making Culture Worse?](https://asteriskmag.com/issues/12-books/is-the-internet-making-culture-worse)
* [2025-11-03, 18:27:32](https://news.ycombinator.com/item?id=45802459) - [Gallery of wonderful drawings our little thermal printer received](https://guestbook.goodenough.us)
* [2025-11-03, 18:16:00](https://tech.slashdot.org/story/25/11/03/1816216/windows-7-squeezed-to-69mb-in-proof-of-concept-build?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Windows 7 Squeezed To 69MB in Proof-of-Concept Build](https://tech.slashdot.org/story/25/11/03/1816216/windows-7-squeezed-to-69mb-in-proof-of-concept-build?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-03, 18:14:02](https://news.ycombinator.com/item?id=45802248) - [America is bracing for political violence – and significant portion think its OK](https://www.politico.com/news/2025/11/03/poll-americans-political-violence-00632864)
* [2025-11-03, 17:28:58](https://news.ycombinator.com/item?id=45801673) - [Israels top military lawyer arrested after she admitted leaking video of abuse](https://www.theguardian.com/world/2025/nov/03/israels-top-military-lawyer-arrested-after-she-admitted-leaking-video-of-soldiers-abuse)
* [2025-11-03, 17:21:00](https://slashdot.org/story/25/11/03/1716252/arxiv-changes-rules-after-getting-spammed-with-ai-generated-research-papers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [arXiv Changes Rules After Getting Spammed With AI-Generated &apos;Research&apos; Papers](https://slashdot.org/story/25/11/03/1716252/arxiv-changes-rules-after-getting-spammed-with-ai-generated-research-papers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-03, 17:08:22](https://news.ycombinator.com/item?id=45801416) - [Why Engineers Can&apos;t Be Rational About Programming Languages](https://spf13.com/p/the-hidden-conversation/)
* [2025-11-03, 16:50:22](https://lobste.rs/s/vtwb1e/we_found_embedding_indexing_bottleneck) - [We found an embedding indexing bottleneck in JSON parsing](https://nixiesearch.substack.com/p/we-found-an-embedding-indexing-bottleneck)
* [2025-11-03, 16:45:12](https://news.ycombinator.com/item?id=45801096) - [No Socials November](https://bjhess.com/posts/no-socials-november)
* [2025-11-03, 16:41:00](https://news.slashdot.org/story/25/11/03/1620202/palantir-thinks-college-might-be-a-waste-so-its-hiring-high-school-grads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Palantir Thinks College Might Be a Waste. So It&apos;s Hiring High-School Grads.](https://news.slashdot.org/story/25/11/03/1620202/palantir-thinks-college-might-be-a-waste-so-its-hiring-high-school-grads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-03, 16:35:44](https://news.ycombinator.com/item?id=45800955) - [Why We Migrated from Python to Node.js](https://blog.yakkomajuri.com/blog/python-to-node)
* [2025-11-03, 16:23:11](https://news.ycombinator.com/item?id=45800777) - [Learning to read Arthur Whitney&apos;s C to become smart (2024)](https://needleful.net/blog/2024/01/arthur_whitney.html)
* [2025-11-03, 16:06:26](https://lobste.rs/s/l6q8rj/cheriot_1_0_released) - [CHERIoT 1.0 Released](https://cheriot.org/sail/specification/release/2025/11/03/cheriot-1.0.html)
* [2025-11-03, 16:02:00](https://tech.slashdot.org/story/25/11/03/1534209/microsoft-ai-chief-says-only-biological-beings-can-be-conscious?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft AI Chief Says Only Biological Beings Can Be Conscious](https://tech.slashdot.org/story/25/11/03/1534209/microsoft-ai-chief-says-only-biological-beings-can-be-conscious?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-03, 16:00:00](https://news.ycombinator.com/item?id=45800465) - [Ask HN: Who is hiring? (November 2025)](https://news.ycombinator.com/item?id=45800465)
* [2025-11-03, 16:00:00](https://news.ycombinator.com/item?id=45800464) - [Ask HN: Who wants to be hired? (November 2025)](https://news.ycombinator.com/item?id=45800464)
* [2025-11-03, 15:45:31](https://news.ycombinator.com/item?id=45800308) - [Robert Hooke&apos;s \&quot;Cyberpunk” Letter to Gottfried Leibniz](https://mynamelowercase.com/blog/robert-hookes-cyberpunk-letter-to-gottfried-leibniz/)
* [2025-11-03, 15:23:00](https://it.slashdot.org/story/25/11/03/1523219/xi-quips-about-backdoors-during-xiaomi-phone-gift-to-koreas-lee?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Xi Quips About Backdoors During Xiaomi Phone Gift To Korea&apos;s Lee](https://it.slashdot.org/story/25/11/03/1523219/xi-quips-about-backdoors-during-xiaomi-phone-gift-to-koreas-lee?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-03, 15:10:00](https://soylentnews.org/article.pl?sid=25/11/01/2018214&amp;from=rss) - [Qilin Ransomware Abuses WSL to Run Linux Encryptors in Windows](https://soylentnews.org/article.pl?sid=25/11/01/2018214&amp;from=rss)
* [2025-11-03, 15:02:25](https://lobste.rs/s/tqwmbn/cast_x_as_string_casts_integer_sqlite) - [CAST(x AS STRING) casts to integer in SQLite](https://lalitm.com/cast-x-as-string-casts-to-integer-in-sqlite/)
* [2025-11-03, 14:47:00](https://slashdot.org/story/25/11/03/1448202/openai-signs-38-billion-cloud-deal-with-amazon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Signs $38 Billion Cloud Deal With Amazon](https://slashdot.org/story/25/11/03/1448202/openai-signs-38-billion-cloud-deal-with-amazon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-03, 14:40:51](https://news.ycombinator.com/item?id=45799478) - [State of Terminal Emulators in 2025: The Errant Champions](https://www.jeffquast.com/post/state-of-terminal-emulation-2025/)
* [2025-11-03, 14:20:05](https://news.ycombinator.com/item?id=45799211) - [OpenAI signs $38B cloud computing deal with Amazon](https://www.nytimes.com/2025/11/03/technology/openai-amazon-cloud-computing.html)
* [2025-11-03, 14:15:23](https://lobste.rs/s/sbrnnl/c_move_semantics_from_scratch_2022) - [C++ move semantics from scratch (2022)](https://cbarrete.com/move-from-scratch.html)
* [2025-11-03, 14:00:00](https://tech.slashdot.org/story/25/11/03/1249212/microsoft-fixes-decade-old-windows-bug-that-made-update-and-shut-down-restart-pcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Fixes Decade-Old Windows Bug That Made &apos;Update and Shut Down&apos; Restart PCs](https://tech.slashdot.org/story/25/11/03/1249212/microsoft-fixes-decade-old-windows-bug-that-made-update-and-shut-down-restart-pcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-03, 13:47:27](https://news.ycombinator.com/item?id=45798892) - [A collection of links that existed about Anguilla as of 2003](https://web.ai/)
* [2025-11-03, 13:46:19](https://news.ycombinator.com/item?id=45798881) - [Skyfall-GS – Synthesizing Immersive 3D Urban Scenes from Satellite Imagery](https://skyfall-gs.jayinnn.dev/)
* [2025-11-03, 13:45:15](https://news.ycombinator.com/item?id=45798871) - [Show HN: a Rust ray tracer that runs on any GPU – even in the browser](https://github.com/tchauffi/rust-rasterizer)
* [2025-11-03, 13:40:47](https://news.ycombinator.com/item?id=45798838) - [VimGraph](https://resources.wolframcloud.com/FunctionRepository/resources/VimGraph/)
* [2025-11-03, 13:31:19](https://lobste.rs/s/mp8rib/prefer_boring_technology) - [Prefer boring technology](https://itwont.work/blog/prefer-boring-technology)
* [2025-11-03, 13:29:17](https://news.ycombinator.com/item?id=45798746) - [Offline Math: Converting LaTeX to SVG with MathJax](https://sigwait.org/~alex/blog/2025/10/07/3t8acq.html)
* [2025-11-03, 13:28:37](https://news.ycombinator.com/item?id=45798741) - [An Illustrated Introduction to Linear Algebra, Chapter 2: The Dot Product](https://www.ducktyped.org/p/linear-algebra-chapter-2-the-dot)
* [2025-11-03, 13:21:09](https://news.ycombinator.com/item?id=45798681) - [Why Nextcloud feels slow to use](https://ounapuu.ee/posts/2025/11/03/nextcloud-slow/)
* [2025-11-03, 13:06:10](https://lobste.rs/s/bbfa6p/announcing_cgp_serde_modular) - [Announcing cgp-serde: A modular serialization library for Serde powered by Context-Generic Programming](https://contextgeneric.dev/blog/cgp-serde-release/)
* [2025-11-03, 12:50:27](https://news.ycombinator.com/item?id=45798479) - [The Case Against PGVector](https://alex-jacobs.com/posts/the-case-against-pgvector/)
* [2025-11-03, 12:43:00](https://linux.slashdot.org/story/25/11/03/0610234/linux-ported-to-webassembly-boots-in-a-browser-tab?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linux Ported to WebAssembly, Boots in a Browser Tab](https://linux.slashdot.org/story/25/11/03/0610234/linux-ported-to-webassembly-boots-in-a-browser-tab?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-03, 12:27:46](https://lobste.rs/s/neu41n/soiree_into_symbols_ruby) - [A Soiree into Symbols in Ruby](https://tech.stonecharioteer.com/posts/2025/ruby-symbols/)
* [2025-11-03, 12:18:50](https://lobste.rs/s/2eofir/a11y_css) - [a11y.css](https://ffoodd.github.io/a11y.css/)
* [2025-11-03, 11:18:36](https://lobste.rs/s/cj8v8g/writing_asciidoc_parser_rust_asciidocr) - [Writing an Asciidoc Parser in Rust: Asciidocr](https://www.bikesbooksandbullshit.com/bullshit/2025/01/08/writing-an-asciidoc-parser-in-rust.html)
* [2025-11-03, 10:47:29](https://lobste.rs/s/wca9sz/cure_verification_first_programming_for) - [Cure - Verification-First Programming for the BEAM](https://cure-lang.org/)
* [2025-11-03, 10:25:00](https://soylentnews.org/article.pl?sid=25/11/02/0835217&amp;from=rss) - [Nvidia Hits Record $5 Trillion Mark as CEO Dismisses AI Bubble Concerns](https://soylentnews.org/article.pl?sid=25/11/02/0835217&amp;from=rss)
* [2025-11-03, 09:24:39](https://lobste.rs/s/7rhkpy/absurd_workflows_durable_execution_with) - [Absurd Workflows: Durable Execution With Just Postgres](https://lucumr.pocoo.org/2025/11/3/absurd-workflows)
* [2025-11-03, 09:20:01](https://news.ycombinator.com/item?id=45797242) - [Tiny electric motor can produce more than 1,000 horsepower](https://supercarblondie.com/electric-motor-yasa-more-powerful-tesla-mercedes/)
* [2025-11-03, 08:53:00](https://games.slashdot.org/story/25/11/03/0542221/grand-theft-auto-studio-accused-of-union-busting-after-firing-dozens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Grand Theft Auto&apos; Studio Accused of Union Busting After Firing Dozens](https://games.slashdot.org/story/25/11/03/0542221/grand-theft-auto-studio-accused-of-union-busting-after-firing-dozens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-03, 06:43:41](https://lobste.rs/s/wiokzi/don_t_give_postgres_too_much_memory) - [Don&apos;t give Postgres too much memory](https://vondra.me/posts/dont-give-postgres-too-much-memory/)
* [2025-11-03, 06:39:13](https://news.ycombinator.com/item?id=45796421) - [First recording of a dying human brain shows waves similar to memory flashbacks](https://louisville.edu/medicine/news/first-ever-recording-of-a-dying-human-brain-shows-waves-similar-to-memory-flashbacks)
* [2025-11-03, 06:30:45](https://lobste.rs/s/j8dni3/why_don_t_you_use_dependent_types) - [\&quot;Why don&apos;t you use dependent types?\&quot;](https://lawrencecpaulson.github.io//2025/11/02/Why-not-dependent.html)
* [2025-11-03, 05:53:00](https://linux.slashdot.org/story/25/11/03/048228/linux-gamers-on-steam-finally-cross-over-the-3-mark?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linux Gamers on Steam Finally Cross Over the 3% Mark](https://linux.slashdot.org/story/25/11/03/048228/linux-gamers-on-steam-finally-cross-over-the-3-mark?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-03, 05:48:00](https://lobste.rs/s/zsoyox/abstract_syntax_tree_example_c) - [Abstract Syntax Tree: An Example in C](https://keleshev.com/abstract-syntax-tree-an-example-in-c/)
* [2025-11-03, 05:40:00](https://soylentnews.org/article.pl?sid=25/11/01/1951249&amp;from=rss) - [Massive Surge of NFC Relay Malware Steals Europeans’ Credit Cards](https://soylentnews.org/article.pl?sid=25/11/01/1951249&amp;from=rss)
* [2025-11-03, 04:47:06](https://lobste.rs/s/cm7yfi/setting_up_very_simple_home_router_with) - [Setting up a very simple home router with OpenBSD](https://www.blog.montgomerie.net/posts/2025-10-11-setting-up-a-very-simple-but-ipv6-capable-home-router-with-openbsd-7.7/)
* [2025-11-03, 03:53:00](https://slashdot.org/story/25/11/03/0349255/openais-sam-altman-defends-1-trillion-spending-commitments-predicts-steep-revenue-growth-more-products?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI&apos;s Sam Altman Defends $1 Trillion+ Spending Commitments, Predicts Steep Revenue Growth, More Products](https://slashdot.org/story/25/11/03/0349255/openais-sam-altman-defends-1-trillion-spending-commitments-predicts-steep-revenue-growth-more-products?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-03, 02:50:44](https://lobste.rs/s/tbdvn9/control_structures_programming) - [Control structures in programming languages](http://xavierleroy.org/control-structures/)
* [2025-11-03, 02:34:00](https://yro.slashdot.org/story/25/11/02/2241201/manufacturer-remotely-bricks-smart-vacuum-after-its-owner-blocked-it-from-collecting-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Manufacturer Remotely Bricks Smart Vacuum After Its Owner Blocked It From Collecting Data](https://yro.slashdot.org/story/25/11/02/2241201/manufacturer-remotely-bricks-smart-vacuum-after-its-owner-blocked-it-from-collecting-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-03, 01:00:00](https://soylentnews.org/article.pl?sid=25/11/01/1944249&amp;from=rss) - [AI Review Paper Slop Changing Moderation Policy at arXiv CS](https://soylentnews.org/article.pl?sid=25/11/01/1944249&amp;from=rss)
* [2025-11-03, 00:52:00](https://news.slashdot.org/story/25/11/03/0049215/bug-in-rust-based-uutils-broke-ubuntu-2510-automatic-update-checks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bug in Rust-Based Uutils Broke Ubuntu 25.10 Automatic Update Checks](https://news.slashdot.org/story/25/11/03/0049215/bug-in-rust-based-uutils-broke-ubuntu-2510-automatic-update-checks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-03, 00:49:56](https://lobste.rs/s/tthzlh/using_assisted_by_commit_footers_instead) - [Using Assisted-by commit footers instead of banning AI tools](https://xeiaso.net/notes/2025/assisted-by-footer/)
* [2025-11-02, 23:51:03](https://lobste.rs/s/q7wvs1/i_ing_hate_science_2021) - [I ****ing hate Science (2021)](https://buttondown.com/hillelwayne/archive/i-ing-hate-science/)
* [2025-11-02, 23:40:00](https://developers.slashdot.org/story/25/11/02/2337254/github-announces-agent-hq-letting-copilot-subscribers-run-and-manage-coding-agents-from-multiple-vendors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GitHub Announces &apos;Agent HQ&apos;, Letting Copilot Subscribers Run and Manage Coding Agents from Multiple Vendors](https://developers.slashdot.org/story/25/11/02/2337254/github-announces-agent-hq-letting-copilot-subscribers-run-and-manage-coding-agents-from-multiple-vendors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-02, 22:52:04](https://lobste.rs/s/gig2wt/you_don_t_need_anubis) - [You don&apos;t need anubis](https://fxgn.dev/blog/anubis/)
* [2025-11-02, 21:55:03](https://lobste.rs/s/k4shdv/skeena_indigenous_typeface) - [Skeena Indigenous Typeface](https://microsoft.github.io/Skeena-Indigenous-Typeface/)
* [2025-11-02, 21:10:56](https://lobste.rs/s/xtfzxb/making_easy_install_application_python) - [Making an Easy-to-Install Application in Python](https://gokmengorgen.net/2025/11/02/making-an-easy-to-install-application-in-python/)
* [2025-11-02, 20:34:00](https://slashdot.org/story/25/11/02/1945203/is-openai-becoming-too-big-to-fail?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is OpenAI Becoming &apos;Too Big to Fail&apos;?](https://slashdot.org/story/25/11/02/1945203/is-openai-becoming-too-big-to-fail?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-02, 20:20:00](https://soylentnews.org/article.pl?sid=25/11/01/1849207&amp;from=rss) - [Meta: Pirated Adult Film Downloads Were For “Personal Use,” Not AI Training](https://soylentnews.org/article.pl?sid=25/11/01/1849207&amp;from=rss)
* [2025-11-02, 19:02:40](https://lobste.rs/s/f3oge4/awk_technical_notes_2023) - [AWK technical notes (2023)](https://maximullaris.com/awk_tech_notes.html)
* [2025-11-02, 15:39:00](https://soylentnews.org/article.pl?sid=25/11/01/1652253&amp;from=rss) - [CISA: High-Severity Linux Flaw Now Exploited by Ransomware Gangs](https://soylentnews.org/article.pl?sid=25/11/01/1652253&amp;from=rss)
* [2025-11-02, 15:10:45](https://lobste.rs/s/uwyfpy/build_system_tradeoffs) - [build system tradeoffs](https://jyn.dev/build-system-tradeoffs)
* [2025-11-02, 13:12:30](https://lobste.rs/s/ug6vbv/prison_my_own_making) - [A prison of my own making](https://jsteuernagel.de/posts/a-prison-of-my-own-making/)
* [2025-11-02, 12:29:18](https://lobste.rs/s/zc73xh/notes_by_djb_on_using_fil_c) - [Notes by djb on using Fil-C](https://cr.yp.to/2025/fil-c.html)
* [2025-11-02, 10:56:00](https://soylentnews.org/article.pl?sid=25/11/01/1648226&amp;from=rss) - [Bonfire of the Vanities](https://soylentnews.org/article.pl?sid=25/11/01/1648226&amp;from=rss)
* [2025-11-02, 06:07:00](https://soylentnews.org/article.pl?sid=25/11/01/1239234&amp;from=rss) - [Spinning Up an Onion Mirror is Stupid Easy](https://soylentnews.org/article.pl?sid=25/11/01/1239234&amp;from=rss)
* [2025-11-02, 01:26:00](https://soylentnews.org/article.pl?sid=25/10/31/1858243&amp;from=rss) - [‘Spaceballs 2’ Starts Production](https://soylentnews.org/article.pl?sid=25/10/31/1858243&amp;from=rss)
* [2025-11-01, 20:39:00](https://soylentnews.org/article.pl?sid=25/10/31/1854228&amp;from=rss) - [China Releases &apos;UBIOS&apos; Standard to Replace UEFI](https://soylentnews.org/article.pl?sid=25/10/31/1854228&amp;from=rss)
* [2025-11-01, 16:39:05](https://news.ycombinator.com/item?id=45783074) - [WebAssembly (WASM) arch support for the Linux kernel](https://github.com/joelseverin/linux-wasm)
* [2025-11-01, 15:55:00](https://soylentnews.org/article.pl?sid=25/10/31/1847233&amp;from=rss) - [Nvidia Reveals Vera Rubin Superchip for the First Time](https://soylentnews.org/article.pl?sid=25/10/31/1847233&amp;from=rss)
* [2025-11-01, 11:11:00](https://soylentnews.org/article.pl?sid=25/10/31/1242232&amp;from=rss) - [ICE and CBP Agents Are Scanning Peoples’ Faces on the Street to Verify Citizenship](https://soylentnews.org/article.pl?sid=25/10/31/1242232&amp;from=rss)
* [2025-11-01, 06:27:00](https://soylentnews.org/article.pl?sid=25/10/31/1238201&amp;from=rss) - [Nearly 90% of Windows Games Now Run on Linux](https://soylentnews.org/article.pl?sid=25/10/31/1238201&amp;from=rss)
* [2025-11-01, 01:41:00](https://soylentnews.org/article.pl?sid=25/10/31/1232227&amp;from=rss) - [Quantum Mechanics Trumps the Second Law of Thermodynamics at the Atomic Scale](https://soylentnews.org/article.pl?sid=25/10/31/1232227&amp;from=rss)
* [2025-10-31, 20:57:00](https://soylentnews.org/article.pl?sid=25/10/30/1428231&amp;from=rss) - [Tor Browser 15.0 Anonymous Web Browser Is Out Based on Firefox 140 ESR Series](https://soylentnews.org/article.pl?sid=25/10/30/1428231&amp;from=rss)
* [2025-10-31, 16:13:00](https://soylentnews.org/article.pl?sid=25/10/30/1156208&amp;from=rss) - [Red Hat and Other Distros to Provide Easy Access to NVIDIA CUDA Tools](https://soylentnews.org/article.pl?sid=25/10/30/1156208&amp;from=rss)
* [2025-10-31, 11:25:00](https://soylentnews.org/article.pl?sid=25/10/30/0038222&amp;from=rss) - [Deep Antarctic Waters Hold Geometric Communities of Fish Nests](https://soylentnews.org/article.pl?sid=25/10/30/0038222&amp;from=rss)
* [2025-10-31, 06:36:00](https://soylentnews.org/article.pl?sid=25/10/30/0034203&amp;from=rss) - [China Submerges a Data Center in the Ocean to Conserve Water, is That Even a Good Idea?](https://soylentnews.org/article.pl?sid=25/10/30/0034203&amp;from=rss)
* [2025-10-31, 01:42:00](https://soylentnews.org/article.pl?sid=25/10/30/0024205&amp;from=rss) - [US EV Sales Will Collapse 60% In October, J.D. Power Forecasts](https://soylentnews.org/article.pl?sid=25/10/30/0024205&amp;from=rss)
* [2025-10-30, 21:00:00](https://soylentnews.org/article.pl?sid=25/10/29/1336246&amp;from=rss) - [AI-Powered Search Engines Rely on “Less Popular” Sources, Researchers Find](https://soylentnews.org/article.pl?sid=25/10/29/1336246&amp;from=rss)
* [2025-10-30, 16:12:00](https://soylentnews.org/article.pl?sid=25/10/29/1333243&amp;from=rss) - [Fedora Linux 43 Officially Released, Now Available for Download](https://soylentnews.org/article.pl?sid=25/10/29/1333243&amp;from=rss)
* [2025-10-30, 14:15:00](https://soylentnews.org/meta/article.pl?sid=25/10/28/1721210&amp;from=rss) - [Trial of Journal Flagging - Analysis and Actions](https://soylentnews.org/meta/article.pl?sid=25/10/28/1721210&amp;from=rss)
* [2025-10-30, 11:29:00](https://soylentnews.org/article.pl?sid=25/10/29/1330210&amp;from=rss) - [Westinghouse is Claiming a Nuclear Deal Would See $80B of New Reactors](https://soylentnews.org/article.pl?sid=25/10/29/1330210&amp;from=rss)
* [2025-10-30, 06:45:00](https://soylentnews.org/article.pl?sid=25/10/29/1326223&amp;from=rss) - [Senators Move to Keep Big Tech&apos;s Creepy Companion Bots Away From Kids](https://soylentnews.org/article.pl?sid=25/10/29/1326223&amp;from=rss)
* [2025-10-30, 02:02:00](https://soylentnews.org/article.pl?sid=25/10/29/1242215&amp;from=rss) - [Windows 11 Adds Dark Mode Dialogs for Run and Folder Options](https://soylentnews.org/article.pl?sid=25/10/29/1242215&amp;from=rss)
