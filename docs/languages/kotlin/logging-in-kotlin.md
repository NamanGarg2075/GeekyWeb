---
title: Logging in kotlin
description: Learn how to implement robust and efficient logging in Kotlin to enhance the reliability, maintainability, and performance of your applications. This guide provides step-by-step instructions and best practices for leveraging Kotlin's logging capabilities, including logging frameworks, log levels, structured logging, exception handling, and integration with popular logging libraries. Improve debugging and troubleshooting processes while optimizing SEO visibility with proper logging practices in Kotlin
# image: "#"
keywords:
  [
    Kotlin logging,
    application logging,
    logging frameworks,
    log levels,
    structured logging,
    exception handling,
    logging best practices,
    Kotlin logging libraries,
    debugging,
    troubleshooting,
    SEO visibility,
    efficient logging,
    maintainability,
    reliability,
    performance enhancement,
  ]
sidebar_position: 32
sidebar_label: Logging
slug: /kotlin/logging
---

## kotlin.logging

```kotlin
class FooWithLogging {
  companion object: KLogging()

  fun bar() {
    logger.info { "hello $name" }
  }

  fun logException(e: Exception) {
    logger.error(e) { "Error occured" }
  }
}
```

Using [kotlin.logging](https://github.com/MicroUtils/kotlin.logging) framework

## Remarks

Related question: [Idiomatic way of logging in Kotlin](http://stackoverflow.com/q/34416869/986533)
