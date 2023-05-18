---
title: Getting started with Kotlin
description: HTML stands for hypertext markup language used to create web pages using a markup language. HTML is the root language....
# image: "#"
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
  </div>
</details>

## Hello World

All Kotlin programs start at the `main` function. Here is an example of a simple Kotlin "Hello World" program:

```kotlin
package my.program

fun main(args: Array<String>) {
    println("Hello, world!")
}
```

```kotlin
fun main(args: Array<String>) {

    println("Enter Two number")
    var (a, b) = readLine()!!.split(' ') // !! this operator use for NPE(NullPointerException).

    println("Max number is : ${maxNum(a.toInt(), b.toInt())}")
}



fun maxNum(a: Int, b: Int): Int {

    var max = if (a > b) {
        println("The value of a is $a");
        a
    } else {
        println("The value of b is $b")
        b
    }

    return max;

}
```

<hr/>
<DocCardList items={useCurrentSidebarCategory().items}/>

<SocialShare />
