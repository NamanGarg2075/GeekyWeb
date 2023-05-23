---
title: Type aliases in Kotlin
description: Discover the power of type aliases in Kotlin and learn how they can simplify your code and enhance its readability. Type aliases allow you to create custom names for existing types, making your code more expressive and self-documenting. Whether you're working with complex data structures, external libraries, or repetitive type declarations, type aliases provide a concise way to define and reuse types throughout your codebase. Explore real-world examples, best practices, and practical use cases that demonstrate how type aliases can improve your Kotlin development workflow. Stay ahead of the game by leveraging this feature to create clean, maintainable code that is both efficient and SEO friendly
# image: "#"
keywords:
  [
    Kotlin type aliases,
    type aliases in Kotlin,
    Kotlin code readability,
    Kotlin code simplification,
    Kotlin type declarations,
    custom type names,
    expressive code in Kotlin,
    Kotlin development workflow,
    Kotlin best practices,
    maintainable Kotlin code,
    clean code in Kotlin,
    reusable types in Kotlin,
    SEO-friendly Kotlin code,
  ]
sidebar_position: 24
sidebar_label: Type aliases
slug: /kotlin/type-aliases
---

With type aliases, we can give a alias to other type. It's ideal for giving a name to function types like `(String) -> Boolean` or generic type like `Pair<Person, Person>`.

Type aliases support generics. An alias can replace a type with generics and an alias can be generics.

## Function type

```kotlin
typealias StringValidator = (String) -> Boolean
typealias Reductor<T, U, V> = (T, U) -> V
```

## Generic type

```kotlin
typealias Parents = Pair<Person, Person>
typealias Accounts = List<Account>
```

## Syntax

- **typealias** **alias-name** **=** **existing-type**

## Remarks

Type aliases is a feature of the compiler. Nothing is added in the generated code for the JVM. All aliases will be replaced by the real type.
