---
title: Getting started with Kotlin
description: HTML stands for hypertext markup language used to create web pages using a markup language. HTML is the root language....
# image: "/img/docs/html/introduction-to-html.png"
keywords:
  [coding, android development, kotlin, introduction to kotlin, what is kotlin]
sidebar_position: 1
sidebar_label: Getting started with Kotlin
slug: /kotlin
---

<!-- Import files -->

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';
import SocialShare from '@site/src/components/SocialShare';

<details>
    <summary>Start Your Journey Now!🔥</summary>
  <div>
    <div>Select Topic from below and start learning</div>
    <br/>
    <h3>✅Getting Started with HTML</h3>
    - <a href="/docs/html">Introduction to HTML</a> <br/>
    - <a href="/docs/html/intro/elements-insight">Elements   insight</a> <br/>
    - <a href="/docs/html/intro/creating-a-page">Creating a Page</a> <br/>
    - <a href="/docs/html/intro/breakdown-of-page">Breakdown of Page</a> <br/>
    - <a href="/docs/html/intro/remarks">Remarks</a> <br/>
    <br/>
    <h3>✅Doctypes</h3>
    - <a href="/docs/html/doctypes">Introduction to Doctypes</a> <br/>
    - <a href="/docs/html/doctypes/adding-the-doctypes">Adding the Doctype</a> <br/>
    - <a href="/docs/html/doctypes/html-5-doctype">HTML 5 Doctype</a> <br/>
    - <a href="/docs/html/doctypes/remarks">Remarks</a> <br/>
    <br/>
    <h3>✅Headings</h3>
    - <a href="/docs/html/headings">Introduction to Headings</a> <br/>
    - <a href="/docs/html/headings/using-headings">Using Headings</a> <br/>
    - <a href="/docs/html/headings/correct-structure-matters">Correct Structure Matters</a> <br/>
    - <a href="/docs/html/headings/Remarks">Remarks</a> <br/>
  </div>
</details>

## Introduction

[HTML](https://en.wikipedia.org/wiki/HTML) (**H**yper**t**ext **M**arkup **L**anguage) uses a markup system composed of elements which represent specific content. **Markup** means that with HTML you declare **what** is presented to a viewer, not **how** it is presented. Visual representations are defined by [Cascading Style Sheets (CSS)](https://en.wikipedia.org/wiki/CSS) and realized by browsers. [Still existing elements that allow for such](https://www.w3.org/TR/html5/obsolete.html#non-conforming-features), like e.g. [`font`](https://www.w3.org/wiki/HTML/Elements/font), "are entirely obsolete, and must not be used by authors".

:::info
HTML is sometimes called a programming language but it has no logic, so is a **markup language**. HTML tags provide semantic meaning and machine-readability to the content in the page.
:::

An element usually consists of an opening tag (`<element_name>`), a closing tag (`</element_name>`), which contain the element's name surrounded by angle brackets, and the content in between: `<element_name>...content...</element_name>`

There are some HTML elements that don't have a closing tag or any contents. These are called [void elements](https://stackoverflow.com/documentation/html/1449/void-elements). Void elements include `<img>`, `<meta>`, `<link>` and `<input>`.

Element names can be thought of as descriptive keywords for the content they contain, such as `video`, `audio`, `table`, `footer`.

A HTML page may consist of potentially hundreds of elements which are then read by a web browser, interpreted and rendered into human readable or audible content on the screen.

For this document it is important to note the difference between elements and tags:

**Elements:** `video`, `audio`, `table`, `footer`

**Tags:** `<video>`, `<audio>`, `<table>`, `<footer>`, `</html>`, `</body>`

<hr/>
<DocCardList items={useCurrentSidebarCategory().items}/>

<SocialShare />
