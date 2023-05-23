---
title: Vararg Parameters in Functions
description: Vararg parameters in functions provide a versatile and powerful feature in programming languages that allows functions to accept a variable number of arguments. This SEO-friendly guide explains the concept of vararg parameters, their benefits, and how they can be effectively utilized in programming. Discover how vararg parameters enable developers to write more flexible and adaptable functions, accommodating different input scenarios. Explore practical examples and best practices to harness the full potential of vararg parameters in your programming projects.
# image: "#"
keywords:
  [
    vararg parameters,
    flexible functions,
    variable arguments,
    programming languages,
    adaptable functions,
    function parameters,
    variadic functions,
    versatile programming,
    programming flexibility,
    function input scenarios,
    varargs,
    programming best practices,
  ]
sidebar_position: 9
sidebar_label: Vararg Parameters in Functions
slug: /kotlin/vararg-parameters-in-functions
---

## Basics: Using the vararg keyword

Define the function using the `vararg` keyword.

```kotlin
fun printNumbers(vararg numbers: Int) {
    for (number in numbers) {
        println(number)
    }
}
```

Now you can pass as many parameters (of the correct type) into the function as you want.

```kotlin
printNumbers(0, 1)                // Prints "0" "1"
printNumbers(10, 20, 30, 500)     // Prints "10" "20" "30" "500"
```

> **Notes:** Vararg parameters **must** be the last parameter in the parameter list.

## Spread Operator: Passing arrays into vararg functions

Arrays can be passed into vararg functions using the **Spread Operator**, `*`.

Assuming the following function exists...

```kotlin
fun printNumbers(vararg numbers: Int) {
    for (number in numbers) {
        println(number)
    }
}
```

You can **pass an array** into the function like so...

```kotlin
val numbers = intArrayOf(1, 2, 3)
printNumbers(*numbers)

// This is the same as passing in (1, 2, 3)
```

The spread operator can also be used **in the middle** of the parameters...

```kotlin
val numbers = intArrayOf(1, 2, 3)
printNumbers(10, 20, *numbers, 30, 40)

// This is the same as passing in (10, 20, 1, 2, 3, 30, 40)
```

## Syntax

- **Vararg Keyword**: `vararg` is used in a method declaration to indicate that a variable number of parameters will be accepted.
- **Spread Operator**: An asterisk (`*`) before an array that is used in function calls to "unfold" the contents into individual parameters.
