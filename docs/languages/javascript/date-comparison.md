---
title: Date Comparison in JavaScript
description: Learn how to compare dates effectively using JavaScript. This comprehensive guide provides step-by-step instructions on comparing dates, including various scenarios and common pitfalls to avoid. Enhance your JavaScript skills and ensure accurate date comparisons in your web development projects
# image: "#"
keywords:
  [
    date comparison,
    JavaScript,
    compare dates,
    web development,
    JavaScript date,
    date manipulation,
    date comparison techniques,
    JavaScript programming,
    web development tutorials,
  ]
sidebar_position: 10
sidebar_label: Date Comparison
slug: /javascript/date-comparison
---

import InArticleAd from '@site/src/components/Adsence/InArticleAd';
import DisplayAd from '@site/src/components/Adsence/DisplayAd';

<DisplayAd />

## Comparing Date values

To check the equality of `Date` values:

```js
var date1 = new Date();
var date2 = new Date(date1.valueOf() + 10);
console.log(date1.valueOf() === date2.valueOf());
```

> Sample output: `false`

Note that you must use `valueOf()` or `getTime()` to compare the values of `Date` objects because the equality operator will compare if two object references are the same. For example:

```js
var date1 = new Date();
var date2 = new Date();
console.log(date1 === date2);
```

> Sample output: `false`

Whereas if the variables point to the same object:

```js
var date1 = new Date();
var date2 = date1;
console.log(date1 === date2);
```

> Sample output: `true`

However, the other comparison operators will work as usual and you can use `<` and `>` to compare that one date is earlier or later than the other. For example:

```js
var date1 = new Date();
var date2 = new Date(date1.valueOf() + 10);
console.log(date1 < date2);
```

> Sample output: `true`

It works even if the operator includes equality:

```js
var date1 = new Date();
var date2 = new Date(date1.valueOf());
console.log(date1 <= date2);
```

> Sample output: `true`

<InArticleAd />

## Date Difference Calculation

To compare the difference of two dates, we can do the comparison based on the timestamp.

```js
var date1 = new Date();
var date2 = new Date(date1.valueOf() + 5000);

var dateDiff = date1.valueOf() - date2.valueOf();
var dateDiffInYears = dateDiff / 1000 / 60 / 60 / 24 / 365; //convert milliseconds into years

console.log("Date difference in years : " + dateDiffInYears);
```

<InArticleAd />
