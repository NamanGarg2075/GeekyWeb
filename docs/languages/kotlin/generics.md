---
title: Generics in Kotlin
description: Dive into the world of generics in Kotlin with this comprehensive guide. Discover how generics enable type-safe programming, allowing you to write flexible and reusable code that enhances readability and maintainability. Learn the fundamentals of generic classes, functions, and constraints, and explore advanced topics such as variance, type projections, and reified types. Master the art of leveraging generics to build robust, scalable, and error-free Kotlin applications. Whether you're a beginner or an experienced developer, this guide will equip you with the knowledge and skills to harness the power of generics in Kotlin effectively
# image: "#"
keywords:
  [
    Kotlin generics,
    type-safe programming,
    generic classes,
    generic functions,
    type constraints,
    variance,
    type projections,
    reified types,
    Kotlin applications,
    type inference,
    generic interfaces,
    Kotlin programming,
    type parameters,
    Kotlin development,
    type erasure,
    generic constraints,
  ]
sidebar_position: 19
sidebar_label: Generics
slug: /kotlin/generics
---

A List can hold numbers, words or really anything.
That's why we call the List **generic**.

Generics are basically used to define which types a class can hold and which type an object currently holds.

## Declaration-site variance

[Declaration-site variance](https://kotlinlang.org/docs/reference/generics.html#declaration-site-variance) can be thought of as declaration of use-site variance once and for all the use-sites.

```kotlin
class Consumer<in T> { fun consume(t: T) { ... } }

fun charSequencesConsumer() : Consumer<CharSequence>() = ...

val stringConsumer : Consumer<String> = charSequenceConsumer() // OK since in-projection
val anyConsumer : Consumer<Any> = charSequenceConsumer() // Error, Any cannot be passed

val outConsumer : Consumer<out CharSequence> = ... // Error, T is `in`-parameter
```

Widespread examples of declaration-site variance are `List<out T>`, which is immutable so that `T` only appears as the return value type, and `Comparator<in T>`, which only receives `T` as argument.

## Use-site variance

[Use-site variance](https://kotlinlang.org/docs/reference/generics.html#use-site-variance-type-projections) is similar to Java wildcards:

Out-projection:

```kotlin
val takeList : MutableList<out SomeType> = ... // Java: List<? extends SomeType>

val takenValue : SomeType = takeList[0] // OK, since upper bound is SomeType

takeList.add(takenValue) // Error, lower bound for generic is not specified
```

In-projection:

```kotlin
val putList : MutableList<in SomeType> = ... // Java: List<? super SomeType>

val valueToPut : SomeType = ...
putList.add(valueToPut) // OK, since lower bound is SomeType

putList[0] // This expression has type Any, since no upper bound is specified
```

Star-projection

```kotlin
val starList : MutableList<*> = ... // Java: List<?>

starList[0] // This expression has type Any, since no upper bound is specified
starList.add(someValue) // Error, lower bound for generic is not specified
```

**See also:**

- [Variant Generics](https://kotlinlang.org/docs/reference/java-to-kotlin-interop.html#variant-generics) interoperability when calling Kotlin from Java.

## Syntax

- class **ClassName**<\***\*TypeName\*\***>
- class **ClassName**<\*>
- **ClassName**<in \***\*UpperBound\*\***>
- **ClassName**<out \***\*LowerBound\*\***>
- class **Name**<\***\*TypeName\*\***:\***\*UpperBound\*\***>

## Parameters

| Parameter      | Details                        |
| -------------- | ------------------------------ |
| **TypeName**   | Type Name of generic parameter |
| **UpperBound** | Covariant Type                 |
| **LowerBound** | Contravariant Type             |
| ClassName      | Name of the class              |

## Remarks

### Implied Upper Bound is Nullable

In Kotlin Generics, the upper bound of type parameter `T` would be `Any?`. Therefore for this class:

```kotlin
class Consumer<T>
```

The type parameter `T` is really `T: Any?`. To make a non-nullable upper bound, explicitly specific `T: Any`. For example:

```kotlin
class Consumer<T: Any>
```
