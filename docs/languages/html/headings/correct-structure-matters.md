---
title: Correct Structure.
keywords: [coding, web development, html]
sidebar_position: 3
sidebar_label: Correct Structure Matters
slug: /html/headings/correct-structure-matters
---

**Search engines** and other **user agents** usually index page content based on heading elements, for example to create a table of contents, so using the correct structure for headings is important.

In general, an article should have one `h1` element for the main title followed by `h2` subtitles – going down a layer if necessary. If there are `h1` elements on a higher level they shoudn't be used to describe any lower level content.

**Example document (extra intendation to illustrate hierarchy):**

```html
<h1>Main title</h1>
<p>Introduction</p>

<h2>Reasons</h2>

<h3>Reason 1</h3>
<p>Paragraph</p>

<h3>Reason 2</h3>
<p>Paragraph</p>

<h2>In conclusion</h2>
<p>Paragraph</p>
```

## Syntax

- `<h1>...</h1>`
- `<h2>...</h2>`
- `<h3>...</h3>`
- `<h4>...</h4>`
- `<h5>...</h5>`
- `<h6>...</h6>`
