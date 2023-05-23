---
title: Coroutines in Kotlin
description: Master the power of coroutines in Kotlin and unlock the potential of asynchronous programming. This comprehensive guide provides a deep dive into coroutines, covering their fundamentals, benefits, and practical implementations in Kotlin. Learn how to write efficient and scalable code using suspend functions, async/await, and structured concurrency. Harness the full potential of Kotlin's coroutines to create responsive and concurrent applications. Whether you're a beginner or an experienced developer, this guide will equip you with the knowledge and tools to leverage coroutines effectively, improving the performance and responsiveness of your Kotlin projects
# image: "#"
keywords:
  [
    coroutines,
    Kotlin,
    asynchronous programming,
    suspend functions,
    async/await,
    structured concurrency,
    concurrent applications,
    responsive applications,
    efficient code,
    scalable code,
    Kotlin development,
    asynchronous tasks,
    parallel execution,
    Kotlin coroutines guide,
  ]
sidebar_position: 22
sidebar_label: Coroutunes
slug: /kotlin/coroutunes
---

Examples of Kotlin's experimental(yet) implementation of coroutines

## Simple coroutine which delay's 1 second but not blocks

(from official [doc](https://github.com/Kotlin/kotlinx.coroutines/blob/master/coroutines-guide.md#your-first-coroutine))

```kotlin
fun main(args: Array<String>) {
    launch(CommonPool) { // create new coroutine in common thread pool
        delay(1000L) // non-blocking delay for 1 second (default time unit is ms)
        println("World!") // print after delay
    }
    println("Hello,") // main function continues while coroutine is delayed
    Thread.sleep(2000L) // block main thread for 2 seconds to keep JVM alive
}
```

result

```kotlin
Hello,
World!
```
