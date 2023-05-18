---
title: Hello World Using Object Declaration
description: Learn how to write a "Hello World" program using object declaration. This tutorial provides step-by-step instructions and code examples for beginners to understand the concept of object-oriented programming and how to create a basic program that prints the famous phrase "Hello, World!" using object declaration. Start your programming journey and grasp the fundamentals of object-oriented programming with this beginner-friendly guide.
# image: "#"
keywords:
  [
    Hello World,
    object declaration,
    programming tutorial,
    object-oriented programming,
    beginners,
    code examples,
    learn programming,
    Hello,
    World program,
    object-oriented concepts,
    beginner-friendly guide,
  ]
sidebar_position: 3
sidebar_label: Hello World Using Object Declaration
slug: /kotlin/hello-world-using-object-declaration
---

You can alternatively use an [Object Declaration](https://kotlinlang.org/docs/reference/object-declarations.html#object-declarations) that contains the main function for a Kotlin program.

```kotlin
package my.program

object App {
    @JvmStatic fun main(args: Array<String>) {
        println("Hello World")
    }
}
```

The class name that you will run is the name of your object, in this case is `my.program.App`.

The advantage to this method over a top-level function is that the class name to run is more self-evident, and any other functions you add are scoped into the class `App`. You then also have a singleton instance of `App` to store state and do other work.

**See also:**

- [Static Methods](https://kotlinlang.org/docs/reference/java-to-kotlin-interop.html#static-methods) including the `@JvmStatic` annotation
