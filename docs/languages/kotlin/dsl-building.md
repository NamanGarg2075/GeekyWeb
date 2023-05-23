---
title: DSL Building in Kotlin
description: Discover the power of Domain-Specific Language (DSL) building in Kotlin with our comprehensive guide. Learn how to leverage Kotlin's expressive syntax and functional capabilities to create efficient and concise DSLs tailored to your specific use cases. Whether you're a beginner or an experienced Kotlin developer, this tutorial will equip you with the knowledge and tools to design and implement DSLs that enhance code readability, productivity, and maintainability. Unlock the full potential of Kotlin's DSL capabilities and take your programming skills to the next level
# image: "#"
keywords:
  [
    Kotlin,
    DSL building,
    Domain-Specific Language,
    expressive syntax,
    functional programming,
    code readability,
    productivity,
    maintainability,
    Kotlin developer,
    programming skills,
  ]
sidebar_position: 29
sidebar_label: DSL Building
slug: /kotlin/dsl-building
---

Focus on the syntax details to design internal [DSLs](https://en.wikipedia.org/wiki/Domain-specific_language) in Kotlin.

## Infix approach to build DSL

If you have:

```kotlin
infix fun <T> T?.shouldBe(expected: T?) = assertEquals(expected, this)
```

you can write the following DSL-like code in your tests:

```kotlin
@Test
fun test() {
  100.plusOne() shouldBe 101
}
```

## Overriding invoke method to build DSL

If you have:

```kotlin
class MyExample(val i: Int) {
  operator fun <R> invoke(block: MyExample.() -> R) = block()
  fun Int.bigger() = this > i
}
```

you can write the following DSL-like code in your production code:

```kotlin
fun main2(args: Array<String>) {
    val ex = MyExample(233)
    ex {
        // bigger is defined in the context of `ex`
        // you can only call this method inside this context
        if (777.bigger()) kotlin.io.println("why")
    }
}
```

## Using operators with lambdas

If you have:

```kotlin
val r = Random(233)
infix inline operator fun Int.rem(block: () -> Unit) {
  if (r.nextInt(100) < this) block()
}
```

You can write the following DSL-like code:

```kotlin
20 % { println("The possibility you see this message is 20%") }
```

## Using extensions with lambdas

If you have:

```kotlin
operator fun <R> String.invoke(block: () -> R) = {
  try { block.invoke() }
  catch (e: AssertException) { System.err.println("$this\n${e.message}") }
}
```

You can write the following DSL-like code:

```kotlin
"it should return 2" {
   parse("1 + 1").buildAST().evaluate() shouldBe 2
}
```

If you feel confused with `shouldBe` above, see the example `Infix approach to build DSL`.
