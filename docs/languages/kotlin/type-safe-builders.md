---
title: Type-Safe Builders in Kotlin
description: Discover the power of type-safe builders in Kotlin and elevate the robustness and flexibility of your code. This comprehensive guide explores the concept of type-safe builders and demonstrates how they can revolutionize your development process. Gain insights into leveraging Kotlin's expressive syntax, static typing, and DSL capabilities to construct fluent and error-proof APIs. Unlock the potential to create domain-specific languages (DSLs) that provide intuitive and concise syntax for building complex structures in a type-safe manner. Learn best practices, design patterns, and practical examples to master the art of building type-safe builders in Kotlin, resulting in cleaner, more maintainable codebases
# image: "#"
keywords:
  [
    Kotlin,
    type-safe builders,
    type safety,
    DSL,
    domain-specific languages,
    static typing,
    Kotlin syntax,
    fluent APIs,
    robust code,
    flexible code,
    clean code,
    maintainable code,
    Kotlin development,
    programming patterns,
    error-proof APIs,
    Kotlin DSLs,
  ]
sidebar_position: 25
sidebar_label: Type-Safe Builders
slug: /kotlin/type-safe-builders
---

## Type-safe tree structure builder

Builders can be defined as a set of extension functions taking lambda expressions with receivers as arguments. In this example, a menu of a `JFrame` is being built:

```kotlin
import javax.swing.*

fun JFrame.menuBar(init: JMenuBar.() -> Unit) {
    val menuBar = JMenuBar()
    menuBar.init()
    setJMenuBar(menuBar)
}

fun JMenuBar.menu(caption: String, init: JMenu.() -> Unit) {
    val menu = JMenu(caption)
    menu.init()
    add(menu)
}

fun JMenu.menuItem(caption: String, init: JMenuItem.() -> Unit) {
    val menuItem = JMenuItem(caption)
    menuItem.init()
    add(menuItem)
}
```

These functions can then be used to build a tree structure of objects in an easy way:

```kotlin
class MyFrame : JFrame() {
    init {
        menuBar {
            menu("Menu1") {
                menuItem("Item1") {
                    // Initialize MenuItem with some Action
                }
                menuItem("Item2") {}
            }
            menu("Menu2") {
                menuItem("Item3") {}
                menuItem("Item4") {}
            }
        }
    }
}
```

### Remarks

A **type-safe builder** is a concept, rather than a language feature, so it is not strictly formalized.

### A typical structure of a type-safe builder

A single builder function usually consists of 3 steps:

1. Create an object.
1. Execute lambda to initialize the object.
1. Add the object to structure or return it.

### Type-safe builders in Kotlin libraries

The concept of type-safe builders is widely used in some Kotlin libraries and frameworks, eg.:

- Anko
- Wasabi
- Ktor
- Spec
