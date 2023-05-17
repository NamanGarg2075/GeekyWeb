---
title: Nested Lists.
keywords: [coding, web development, html, lists]
sidebar_position: 3
sidebar_label: Nested Lists
slug: /html/lists/nested-list
---

HTML allows the nesting of lists within other lists, creating a hierarchical structure. This is achieved by placing a new ```<ol>``` or ```<ul>``` within an ```<li>``` tag. Here's an example of a nested list:

```html
<ol>
  <li>First item</li>
  <li>Second item
    <ol>
      <li>Nested item 1</li>
      <li>Nested item 2</li>
    </ol>
  </li>
  <li>Third item</li>
</ol>
```
Output:
1. First item
2. Second item
   - Nested item 1
   - Nested item 2
3. Third item


Nested lists can have any level of depth, allowing you to create complex and organized structures within your web pages.

In conclusion, HTML lists, including ordered lists and unordered lists, are powerful tools for structuring and organizing content. By using ```<ol>```, ```<ul>```, and ```<li>``` tags, combined with nesting, developers can create well-formatted and easy-to-read lists in their web pages.