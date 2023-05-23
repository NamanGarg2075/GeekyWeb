---
title: Singleton objects in Kotlin
description: Discover how to effectively implement and leverage singleton objects in Kotlin with this comprehensive guide. Singleton objects provide a powerful and efficient way to ensure a class has only one instance throughout the entire application. Explore the benefits of using singleton objects, understand their usage scenarios, and learn best practices for creating and accessing singletons in Kotlin. Whether you're a beginner or an experienced Kotlin developer, this guide will equip you with the knowledge and techniques to optimize your application design and take full advantage of the singleton pattern
# image: "#"
keywords:
  [
    Kotlin singleton objects,
    implementing singletons in Kotlin,
    singleton design pattern,
    singleton instance,
    Kotlin application design,
    best practices for singletons,
    efficient class instances,
    usage scenarios,
    Kotlin development,
    optimizing application design,
    Kotlin patterns,
  ]
sidebar_position: 21
sidebar_label: Singleton objects
slug: /kotlin/singleton-objects
---

An **object** is a special kind of class, which can be declared using `object` keyword. Objects are similar to Singletons (a design pattern) in java. It also functions as the static part of java. Beginners who are switching from java to kotlin can vastly use this feature, in place of static, or singletons.

## Use as repalcement of static methods/fields of java

```kotlin
object CommonUtils {

    var anyname: String ="Hello"

    fun dispMsg(message: String) {
        println(message)
    }
}
```

From any other class, just invoke the variable and functions in this way:

```kotlin
CommonUtils.anyname
CommonUtils.dispMsg("like static call")
```

## Use as a singleton

Kotlin objects are actually just singletons. Its primary advantage is that you don't have to use `SomeSingleton.INSTANCE` to get the instance of the singleton.

In java your singleton looks like this:

```kotlin
public enum SharedRegistry {
    INSTANCE;
    public void register(String key, Object thing) {}
}

public static void main(String[] args) {
    SharedRegistry.INSTANCE.register("a", "apple");
    SharedRegistry.INSTANCE.register("b", "boy");
    SharedRegistry.INSTANCE.register("c", "cat");
    SharedRegistry.INSTANCE.register("d", "dog");
}
```

In kotlin, the equivalent code is

```kotlin
object SharedRegistry {
    fun register(key: String, thing: Object) {}
}

fun main(Array<String> args) {
    SharedRegistry.register("a", "apple")
    SharedRegistry.register("b", "boy")
    SharedRegistry.register("c", "cat")
    SharedRegistry.register("d", "dog")
}
```

It's obvoiusly less verbose to use.
