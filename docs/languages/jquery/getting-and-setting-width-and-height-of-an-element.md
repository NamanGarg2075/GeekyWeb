---
title: Getting and setting width and height of an element
description: Learn how to dynamically manipulate the dimensions of HTML elements using jQuery. Discover how to retrieve and modify the width and height of an element to achieve responsive design and create engaging user interfaces
# image: "#"
keywords:
  [
    jQuery,
    element dimensions,
    width,
    height,
    responsive design,
    jQuery width(),
    jQuery height(),
    jQuery CSS(),
    dynamic element sizing,
  ]
sidebar_position: 14
sidebar_label: Getting and setting width and height of an element
slug: /jquery/getting-setting-width-height
---

## Getting and setting width and height (ignoring border)

Get width and height:

```js
var width = $("#target-element").width();
var height = $("#target-element").height();
```

Set width and height:

```js
$("#target-element").width(50);
$("#target-element").height(100);
```

## Getting and setting innerWidth and innerHeight (ignoring padding and border)

Get width and height:

```js
var width = $("#target-element").innerWidth();
var height = $("#target-element").innerHeight();
```

Set width and height:

```js
$("#target-element").innerWidth(50);
$("#target-element").innerHeight(100);
```

## Getting and setting outerWidth and outerHeight (including padding and border)

Get width and height (excluding margin):

```js
var width = $("#target-element").outerWidth();
var height = $("#target-element").outerHeight();
```

Get width and height (including margin):

```js
var width = $("#target-element").outerWidth(true);
var height = $("#target-element").outerHeight(true);
```

Set width and height:

```js
$("#target-element").outerWidth(50);
$("#target-element").outerHeight(100);
```
