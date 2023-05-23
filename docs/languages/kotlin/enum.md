---
title: Enum in Kotlin
description: Explore the power of enums in Kotlin with this comprehensive guide. Learn how to leverage enums to create type-safe constants, improve code readability, and enhance code maintainability. Discover the versatility of enums in handling finite sets of related values, and how they can simplify your programming tasks. Whether you're a beginner or an experienced Kotlin developer, this guide will provide you with the knowledge and practical examples to master enums and take your Kotlin programming skills to the next level.
# image: "#"
keywords:
  [
    Kotlin enum,
    enum in Kotlin,
    type-safe constants,
    code readability,
    code maintainability,
    finite sets of values,
    Kotlin programming,
    Kotlin development,
    enum tutorial,
    enum examples,
    enum use cases,
    enum benefits,
    Kotlin enum guide,
  ]
sidebar_position: 7
sidebar_label: Enum
slug: /kotlin/enum
---

## Initialization

Enum classes as any other classes can have a constructor and be initialized

```kotlin
enum class Color(val rgb: Int) {
    RED(0xFF0000),
    GREEN(0x00FF00),
    BLUE(0x0000FF)
}
```

## Functions and Properties in enums

Enum classes can also declare members (i.e. properties and functions). A semicolon (`;`) must be placed between the last enum object and the first member declaration.

If a member is `abstract`, the enum objects must implement it.

```kotlin
enum class Color {
    RED {
        override val rgb: Int = 0xFF0000
    },
    GREEN {
        override val rgb: Int = 0x00FF00
    },
    BLUE {
        override val rgb: Int = 0x0000FF
    }

    ;

    abstract val rgb: Int

    fun colorString() = "#%06X".format(0xFFFFFF and rgb)
}
```

## Simple enum

```kotlin
enum class Color {
  RED, GREEN, BLUE
}
```

Each enum constant is an object. Enum constants are separated with commas.

## Mutability

Enums can be mutable, this is another way to obtain a singleton behavior:

```kotlin
enum class Planet(var population: Int = 0) {
    EARTH(7 * 100000000),
    MARS();

    override fun toString() = "$name[population=$population]"
}

 println(Planet.MARS) // MARS[population=0]
 Planet.MARS.population = 3
 println(Planet.MARS) // MARS[population=3]
```

## Remarks

Just like in Java, enum classes in Kotlin have synthetic methods allowing to list the defined enum constants and to get an enum constant by its name. The signatures of these methods are as follows (assuming the name of the enum class is `EnumClass`):

```kotlin
EnumClass.valueOf(value: String): EnumClass
EnumClass.values(): Array<EnumClass>
```

The `valueOf()` method throws an `IllegalArgumentException` if the specified name does not match any of the enum constants defined in the class.

Every enum constant has properties to obtain its name and position in the enum class declaration:

```kotlin
val name: String
val ordinal: Int
```

The enum constants also implement the Comparable interface, with the natural order being the order in which they are defined in the enum class.
