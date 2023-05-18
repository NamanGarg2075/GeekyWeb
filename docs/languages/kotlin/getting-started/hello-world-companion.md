---
title: Hello World Using Companion Object
description: Discover how to write the iconic "Hello World" program using the powerful concept of companion objects in object-oriented programming. In this tutorial, we explore the benefits of using companion objects in popular programming languages, such as Java, Kotlin, and Scala, to simplify code organization and enhance code reusability. Get ready to embark on a journey into the fundamentals of companion objects and learn how to create a concise and efficient "Hello World" program that will kickstart your programming journey.
# image: "#"
keywords:
  [
    companion object,
    Hello World program,
    code organization,
    code reusability,
    object-oriented programming,
    Java,
    Kotlin,
    Scala,
    tutorial,
    fundamentals,
    concise code,
    efficient programming,
  ]
sidebar_position: 2
sidebar_label: Hello World Using Companion Object
slug: /kotlin/hello-world-using-companion-object
---

Similar to using an Object Declaration, you can define the `main` function of a Kotlin program using a [Companion Object](https://kotlinlang.org/docs/reference/object-declarations.html#companion-objects) of a class.

```kotlin
package my.program

class App {
    companion object {
        @JvmStatic fun main(args: Array<String>) {
            println("Hello World")
        }
    }
}
```

The class name that you will run is the name of your class, in this case is `my.program.App`.

The advantage to this method over a top-level function is that the class name to run is more self-evident, and any other functions you add are scoped into the class `App`. This is similar to the `Object Declaration` example, other than you are in control of instantiating any classes to do further work.

A slight variation that instantiates the class to do the actual "hello":

```kotlin
class App {
    companion object {
        @JvmStatic fun main(args: Array<String>) {
            App().run()
        }
    }

    fun run() {
        println("Hello World")
    }
}
```

**See also:**

- [Static Methods](https://kotlinlang.org/docs/reference/java-to-kotlin-interop.html#static-methods) including the @JvmStatic annotation
