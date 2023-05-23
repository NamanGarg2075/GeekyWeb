---
title: Basic Lambdas in Kotlin
description: Learn the fundamentals of using lambdas in Kotlin with this beginner-friendly guide. Discover how to leverage lambdas to write concise and expressive code, enabling you to enhance the functionality of your Kotlin applications. Explore practical examples and gain a solid understanding of lambda syntax, parameters, and the powerful features they offer. Whether you're a Kotlin novice or looking to expand your programming skills, this tutorial will equip you with the knowledge to utilize lambdas effectively and efficiently.
# image: "#"
keywords:
  [
    Kotlin lambdas,
    lambda functions,
    anonymous functions,
    lambda expressions,
    higher-order functions,
    functional programming,
    concise code,
    expressive syntax,
    Kotlin programming,
    lambda parameters,
    lambda examples,
    Kotlin beginners,
    functional programming in Kotlin,
  ]
sidebar_position: 14
sidebar_label: Basic Lambdas
slug: /kotlin/basic-lambdas
---

## Lambda as parameter to filter function

```kotlin
val allowedUsers = users.filter { it.age > MINIMUM_AGE }
```

## Lambda passed as a variable

```kotlin
val isOfAllowedAge = { user: User -> user.age > MINIMUM_AGE }
val allowedUsers = users.filter(isOfAllowedAge)
```

## Lambda for benchmarking a function call

General-purpose stopwatch for timing how long a function takes to run:

```kotlin
object Benchmark {
    fun realtime(body: () -> Unit): Duration {
        val start = Instant.now()
        try {
            body()
        } finally {
            val end = Instant.now()
            return Duration.between(start, end)
        }
    }
}
```

Usage:

```kotlin
val time = Benchmark.realtime({
    // some long-running code goes here ...
})
println("Executed the code in $time")
```

#### Syntax

- Explicit parameters:
- { parameterName: ParameterType, otherParameterName: OtherParameterType -> anExpression() }
- Inferred parameters:
- val addition: (Int, Int) -> Int = { a, b -> a + b }
- Single parameter `it` shorthand
- val square: (Int) -> Int = { it\*it }
- Signature:
- () -> ResultType
- (InputType) -> ResultType
- (InputType1, InputType2) -> ResultType

## Remarks

Input type parameters can be left out when they can be left out when they can be inferred from the context. For example say you have a function on a class that takes a function:

```kotlin
data class User(val fistName: String, val lastName: String) {
    fun username(userNameGenerator: (String, String) -> String) =
        userNameGenerator(firstName, secondName)
}
```

You can use this function by passing a lambda, and since the parameters are already specified in the function signature there's no need to re-declare them in the lambda expression:

```kotlin
val user = User("foo", "bar")
println(user.userName { firstName, secondName ->
     "${firstName.toUppercase}"_"${secondName.toUppercase}"
 }) // prints FOO_BAR
```

This also applies when you are assigning a lambda to a variable:

```kotlin
//valid:
val addition: (Int, Int) = { a, b -> a + b }
//valid:
val addition = { a: Int, b: Int -> a + b }
//error (type inference failure):
val addition = { a, b -> a + b }
```

When the lambda takes one parameter, and the type can be inferred from the context, you can refer to the parameter by `it`.

```kotlin
listOf(1,2,3).map { it * 2 } // [2,4,6]
```
