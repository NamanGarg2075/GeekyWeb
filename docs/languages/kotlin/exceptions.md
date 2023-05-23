---
title: Exceptions in Kotlin
description: Gain a comprehensive understanding of exceptions in Kotlin through this informative guide. Learn about the importance of handling exceptions, explore the different types of exceptions in Kotlin, and discover best practices for effective exception handling. Whether you're a beginner or an experienced Kotlin developer, this guide will equip you with the knowledge and skills to write robust and error-free code
# image: "#"
keywords:
  [
    Kotlin exceptions,
    exception handling in Kotlin,
    Kotlin error handling,
    types of exceptions in Kotlin,
    Kotlin exception handling best practices,
    Kotlin try-catch,
    exception propagation in Kotlin,
    Kotlin throw keyword,
    Kotlin custom exceptions,
    Kotlin exception handling techniques,
  ]
sidebar_position: 33
sidebar_label: Exceptions
slug: /kotlin/exceptions
---

## Catching exception with try-catch-finally

Catching exceptions in Kotlin looks very similar to Java

```kotlin
try {
    doSomething()
}
catch(e: MyException) {
    handle(e)
}
finally {
    cleanup()
}
```

You can also catch multiple exceptions

```kotlin
try {
    doSomething()
}
catch(e: FileSystemException) {
    handle(e)
}
catch(e: NetworkException) {
    handle(e)
}
catch(e: MemoryException) {
    handle(e)
}
finally {
    cleanup()
}
```

`try` is also an expression and may return value

```kotlin
val s: String? = try { getString() } catch (e: Exception) { null }
```

Kotlin doesn't have checked exceptions, so you don't have to catch any exceptions.

```kotlin
fun fileToString(file: File) : String {
    //readAllBytes throws IOException, but we can omit catching it
    fileContent = Files.readAllBytes(file)
    return String(fileContent)
}
```
