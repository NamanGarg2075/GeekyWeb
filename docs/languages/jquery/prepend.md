---
title: Prepend in jQuery
description: Learn how to effectively use the prepend method in jQuery to dynamically insert content at the beginning of HTML elements. Enhance your web development skills with this comprehensive guide, which covers the syntax, parameters, and practical examples of using prepend. Stay up-to-date with the latest jQuery techniques and leverage the power of prepend to create dynamic and interactive web pages
# image: "#"
keywords:
  [
    prepend in jQuery,
    prepend method,
    jQuery prepend tutorial,
    dynamic content insertion,
    manipulating HTML elements,
    web development,
    jQuery techniques,
    prepend examples,
    jQuery prepend syntax,
    interactive web pages,
  ]
sidebar_position: 13
sidebar_label: Prepend
slug: /jquery/prepend
---

## Prepending an element to a container

**Solution 1:**

```js
$("#parent").prepend($("#child"));
```

**Solution 2:**

```js
$("#child").prependTo($("#parent"));
```

Both solutions are prepending the element `#child` (adding at the beginning) to the element `#parent`.

Before:

```html
<div id="parent">
  <span>other content</span>
</div>
<div id="child"></div>
```

After:

```html
<div id="parent">
  <div id="child"></div>
  <span>other content</span>
</div>
```

## Prepend method

[`prepend()`](http://api.jquery.com/prepend/) - Insert content, specified by the parameter, to the beginning of each element in the set of matched elements.

**1.** [`prepend( content [, content ] )`](http://api.jquery.com/prepend/)

```js
// with html string
jQuery("#parent").prepend("<span>child</span>");
// or you can use jQuery object
jQuery("#parent").prepend($("#child"));
// or you can use comma seperated multiple elements to prepend
jQuery("#parent").prepend($("#child1"), $("#child2"));
```

**2.** [`prepend(function)`](http://api.jquery.com/prepend/)

JQuery **`version: 1.4`** onwards you can use callback function as the argument. Where you can get arguments as index position of the element in the set and the old HTML value of the element. Within the function, `this` refers to the current element in the set.

```js
jQuery("#parent").prepend(function (i, oldHTML) {
  // return the value to be prepend
  return "<span>child</span>";
});
```
