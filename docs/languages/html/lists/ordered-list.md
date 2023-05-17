---
title: Ordered Lists.
keywords: [coding, web development, html, lists]
sidebar_position: 2
sidebar_label: Ordered Lists
slug: /html/lists/ordered-list
---

Ordered lists are used when the order of items is important. Each item in an ordered list is represented by the ```<li>``` "list item" tag. The ordered list itself is wrapped within the ```<ol>``` tags. By default, ordered lists are displayed with numbers or letters as markers. Here's an example of an ordered list:

```html
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
```
Output:
1. First item
2. Second item
3. Third item

You can also customize the type of markers in an ordered list by using the type attribute within the ```<ol>``` tag. For example, using the attribute ```type="A"``` will display capital letters [A, B, C] as markers:

```html
<ol type="A">
  <li>Item A</li>
  <li>Item B</li>
  <li>Item C</li>
</ol>
```
Output:

A. Item A  <br/>
B. Item B <br/>
C. Item C