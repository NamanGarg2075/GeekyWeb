---
title: Kotlin Caveats
description: Explore the key caveats and considerations when working with Kotlin, a popular programming language for Android development and beyond. Discover potential challenges, limitations, and important factors to be aware of to enhance your Kotlin coding experience and optimize your projects
# image: "#"
keywords:
  [
    Kotlin,
    programming language,
    Android development,
    caveats,
    considerations,
    challenges,
    limitations,
    best practices,
    tips,
    optimization,
    coding experience,
    Android apps,
    Kotlin development,
  ]
sidebar_position: 38
sidebar_label: Kotlin Caveats
slug: /kotlin/kotlin-caveats
---

## Calling a toString() on a nullable type

A thing to look out for when using the `toString` method in Kotlin is the handling of null in combination with the `String?`.

For example you want to get text from an `EditText` in Android.

You would have a piece of code like:

```kotlin
// Correct:
val text = view.textField?.text?.toString() ?: ""
```
