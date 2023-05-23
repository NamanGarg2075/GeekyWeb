---
title: Visibility Modifiers in Kotlin
description: Learn all about visibility modifiers in Kotlin and how they enhance code organization and encapsulation. Discover the significance of public, private, protected, and internal modifiers, and gain insights into their practical usage. Gain a deeper understanding of Kotlin's visibility modifiers to improve the maintainability, readability, and security of your Kotlin projects
# image: "#"
keywords:
  [
    Kotlin visibility modifiers,
    public modifier,
    private modifier,
    protected modifier,
    internal modifier,
    code organization,
    encapsulation,
    Kotlin code readability,
    Kotlin code maintainability,
    Kotlin project security,
    Kotlin programming language,
    Kotlin tutorials,
    Kotlin development,
    Kotlin best practices,
  ]
sidebar_position: 18
sidebar_label: Visibility Modifiers
slug: /kotlin/visibility-modifiers
---

In Kotlin, there are 4 types of visibility modifiers are available.

- **Public:** This can be accessed from anywhere.
- **Private:** This can only be accessed from the module code.
- **Protected:** This can only be accessed from the class defining it and any derived classes.
- **Internal:** This can only be accessed from the scope of the class defining it.

## Code Sample

- **Public:** `public val name = "Avijit"`
- **Private:** `private val name = "Avijit"`
- **Protected:** `protected val name = "Avijit"`
- **Internal:** `internal val name = "Avijit"`

## Syntax

- `<visibility modifier> val/var <variable name> = <value>`
