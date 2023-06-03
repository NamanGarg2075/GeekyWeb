---
title: Each Function in jQuery
description: jQuery is a popular JavaScript library that simplifies HTML document traversal, event handling, and animation. It provides a wide range of functions and methods to manipulate and interact with web pages. This documentation provides detailed information about each function in jQuery, including its purpose, parameters, and usage examples. Whether you're a beginner or an experienced developer, this comprehensive guide will help you harness the power of jQuery and enhance your web development projects
# image: "#"
keywords:
  [
    jQuery functions,
    jQuery methods,
    JavaScript library,
    HTML document traversal,
    event handling,
    animation,
    web page manipulation,
    web development,
    usage examples,
    jQuery documentation,
    beginner-friendly guide,
    experienced developers,
    jQuery tutorial,
    JavaScript framework,
  ]
sidebar_position: 4
sidebar_label: Each Function
slug: /jquery/each-function
---

## jQuery each function

HTML:

```html
<ul>
  <li>Mango</li>
  <li>Book</li>
</ul>
```

Script:

```js
$("li").each(function (index) {
  console.log(index + ": " + $(this).text());
});
```

A message is thus logged for each item in the list:

0: Mango

1: Book

## Basic use

```js
// array
var arr = ["one", "two", "three", "four"];
$.each(arr, function (index, value) {
  console.log(value);

  // Will stop running after "three"
  return value !== "three";
});
// Outputs: one two three
```
