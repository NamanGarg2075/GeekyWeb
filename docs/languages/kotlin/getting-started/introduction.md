---
title: Getting started with Kotlin
description: Discover the fundamentals of Kotlin and embark on a rewarding journey into the world of modern programming with this comprehensive beginner's guide. This tutorial covers the essentials, from setting up your development environment to mastering key concepts, syntax, and best practices. Whether you're a seasoned programmer exploring a new language or a newcomer to coding, this step-by-step resource equips you with the knowledge and skills needed to confidently build robust and efficient applications using Kotlin.
# image: "#"
keywords:
  [
    Kotlin programming language,
    beginner's guide,
    learning Kotlin,
    getting started with Kotlin,
    Kotlin syntax,
    programming tutorial,
    Kotlin fundamentals,
    Kotlin development environment,
    modern programming,
    coding basics,
    build applications with Kotlin,
    Kotlin best practices,
    Kotlin for beginners..,
  ]
sidebar_position: 1
sidebar_label: Hello World
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
    <h3>✅Getting Started with Kotlin</h3>
    - <a href="/docs/html">Introduction to Kotlin</a> <br/>
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

Place the above code into a file named `Main.kt` (this filename is entirely arbitrary)

When targeting the JVM, the function will be compiled as a static method in a class with a name derived from the filename. In the above example, the main class to run would be `my.program.MainKt`.

To change the name of the class that contains top-level functions for a particular file, place the following annotation at the top of the file above the package statement:

```kotlin
@file:JvmName("MyApp")
```

In this example, the main class to run would now be `my.program.MyApp`.

**See also:**

- [Package level functions](https://kotlinlang.org/docs/reference/java-to-kotlin-interop.html#package-level-functions) including `@JvmName` annotation.
- [Annotation use-site targets](https://kotlinlang.org/docs/reference/annotations.html#annotation-use-site-targets)

<hr/>
<DocCardList items={useCurrentSidebarCategory().items}/>

<SocialShare />
