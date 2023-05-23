---
title: Annotations in Kotlin
description: Learn about annotations in Kotlin and how they can enhance your programming experience. Discover how to leverage annotations to provide additional information to the compiler, generate boilerplate code, and improve code readability. Explore the various use cases and best practices for utilizing annotations in Kotlin development
# image: "#"
keywords:
  [
    Kotlin annotations,
    annotation processing,
    compiler,
    code generation,
    code readability,
    programming experience,
    Kotlin development,
    best practices,
  ]
sidebar_position: 23
sidebar_label: Annotations
slug: /kotlin/annotations
---

## Declaring an annotation

Annotations are means of attaching metadata to code. To declare an annotation, put the
annotation
modifier in front of a
class:

```kotlin
annotation class Strippable
```

Annotations can have meta-anotations:

```kotlin
@Target(AnnotationTarget.CLASS, AnnotationTarget.FUNCTION, AnnotationTarget.VALUE_PARAMETER, AnnotationTarget.EXPRESSION)
annotation class Strippable

```

Annotations, like other classes, can have constructors:

```kotlin
annotation class Strippable(val importanceValue: Int)
```

But unlike other classes, is limited to the following types:

- types that correspond to Java primitive types (Int, Long etc.);
- strings
- classes ( Foo:: class)
- enums
- other annotations
- arrays of the types listed above

## Meta-annotations

When declaring an annotation, meta-info can be included using the following meta-annotations:

- `@Target`: specifies the possible kinds of elements which can be annotated with the annotation (classes, functions, properties, expressions etc.)
- `@Retention` specifies whether the annotation is stored in the compiled class files and whether it's visible through reflection at runtime (by default, both are true.)
- `@Repeatable` allows using the same annotation on a single element multiple times.
- `@MustBeDocumented` specifies that the annotation is part of the public API and should be included in the class or method signature shown in the generated API documentation.

Example:

```kotlin
@Target(AnnotationTarget.CLASS, AnnotationTarget.FUNCTION,
        AnnotationTarget.VALUE_PARAMETER, AnnotationTarget.EXPRESSION)
@Retention(AnnotationRetention.SOURCE)
@MustBeDocumented
annotation class Fancy
```
