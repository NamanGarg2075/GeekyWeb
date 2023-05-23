---
title: Class Deliegation in Kotlin
description: Learn how to leverage class delegation in Kotlin to enhance code reusability and maintainability. Class delegation allows you to delegate the implementation of certain functionalities to other classes, reducing boilerplate code and promoting cleaner, more modular designs. Discover the power of delegation patterns and how they can help you write more concise and scalable Kotlin code. Whether you're a beginner or an experienced Kotlin developer, this comprehensive guide will provide you with practical examples and insights to effectively utilize class delegation in your projects
# image: "#"
keywords:
  [
    Kotlin class delegation,
    code reusability,
    maintainability,
    delegation patterns,
    Kotlin programming,
    Kotlin developer,
    modular design,
    Kotlin code examples,
    clean code,
    scalable code,
    Kotlin tutorials,
  ]
sidebar_position: 16
sidebar_label: Class Delegation
slug: /kotlin/class-delegation
---

A Kotlin class may implement an interface by delegating its methods and properties to another object that implements that interface. This provides a way to compose behavior using association rather than inheritance.

## Delegate a method to another class

```kotlin
interface Foo {
    fun example()
}

class Bar {
    fun example() {
        println("Hello, world!")
    }
}

class Baz(b : Bar) : Foo by b

Baz(Bar()).example()
```

The example prints `Hello, world!`
