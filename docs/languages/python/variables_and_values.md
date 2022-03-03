---
title: Creating variables and assigning values
description: To create a variable in Python, all you need to do is specify the variable name, and then assign a value to it.
image: "/img/docs/python/variables-and-values.png"
keywords: [coding, python, variables, values]
sidebar_position: 4
sidebar_label: Variables and Assigning values
slug: /python/creating-variables-and-assigning-values
---

# Creating variables and assigning values

<!-- Import files -->

import SocialShare from '@site/src/components/SocialShare'

![Introduction to Python](../../../static/img/docs/python/variables-and-values.png)

## Introduction

To create a variable in Python, all you need to do is specify the variable name, and then assign a value to it.

```py
<variable name> = <value>
```

Python uses `=` to assign values to variables. There's no need to declare a variable in advance (or to assign a data type to it), assigning a value to a variable itself declares and initializes the variable with that value. There's no way to declare a variable without assigning it an initial value

```py
# Integer
a = 2
print(a)
# Output: 2

# Integer
b = 9223372036854775807
print(b)
# Output: 9223372036854775807

# Floating point
pi = 3.14
print(pi)
# Output: 3.14

# String
c = 'A'
print(c)
# Output: A

# String
name = 'John Doe'
print(name)
# Output: John Doe

# Boolean
q = True
print(q)
# Output: True

# Empty value or null data type
x = None
print(x)
# Output: None
```

Variable assignment works from left to right. So the following will give you an syntax error.

```py
0 = x
=> Output: SyntaxError: can't assign to literal
```

:::warning Note
You can not use python's keywords as a valid variable name. You can see the list of keyword by:

```py
import keyword
print(keyword.kwlist)
```

:::

### Rules for variable naming:

- Variables names must start with a letter or an underscore.

```py
x  = True   # valid
 _y = True   # valid

 9x = False  # starts with numeral
 => SyntaxError: invalid syntax

 $y = False #  starts with symbol
 => SyntaxError: invalid syntax
```

- The remainder of your variable name may consist of letters, numbers and underscores.

```py
has_0_in_it = "Still Valid"
```

- Names are case sensitive.

```py
x = 9
y = X*5
=>NameError: name 'X' is not defined
```

Even though there's no need to specify a data type when declaring a variable in Python, while allocating the necessary area in memory for the variable, the Python interpreter automatically picks the most suitable [built-in type](http://stackoverflow.com/documentation/python/193/introduction-to-python/2926/datatypes#t=201610091728094101649) for it:

```py
a = 2
print(type(a))
# Output: <type 'int'>

b = 9223372036854775807
print(type(b))
# Output: <type 'int'>

pi = 3.14
print(type(pi))
# Output: <type 'float'>

c = 'A'
print(type(c))
# Output: <type 'str'>

name = 'John Doe'
print(type(name))
# Output: <type 'str'>

q = True
print(type(q))
# Output: <type 'bool'>

x = None
print(type(x))
# Output: <type 'NoneType'>
```

Now you know the basics of assignment, let's get this subtlety about assignment in python out of the way.

When you use `=` to do an assignment operation, what's on the left of `=` is a name for the object on the right. Finally, what `=` does is assign the reference of the object on the right to the name on the left.

That is:

```py
a_name = an_object  # "a_name" is now a name for the reference to the object "an_object"
```

So, from many assignment examples above, if we pick `pi = 3.14`, then `pi` is **a** name (not the **name**, since an object can have multiple names) for the object `3.14`. If you don't understand something below, come back to this point and read this again! Also, you can take a look at [this](http://effbot.org/zone/python-objects.htm) for a better understanding.

You can assign multiple values to multiple variables in one line. Note that there must be the same number of arguments on the right and left sides of the `=` operator:

```py
a, b, c = 1, 2, 3
print(a, b, c)
# Output: 1 2 3

a, b, c = 1, 2
=> Traceback (most recent call last):
=>   File "name.py", line N, in <module>
=>     a, b, c = 1, 2
=> ValueError: need more than 2 values to unpack

a, b = 1, 2, 3
=> Traceback (most recent call last):
=>   File "name.py", line N, in <module>
=>     a, b = 1, 2, 3
=> ValueError: too many values to unpack
```

The error in last example can be obviated by assigning remaining values to equal number of arbitrary variables. This dummy variable can have any name, but it is conventional to use the underscore (`_`) for assigning unwanted values:

```py
a, b, _ = 1, 2, 3
print(a, b)
# Output: 1, 2
```

Note that the number of `_` and number of remaining values must be equal. Otherwise 'too many values to unpack error' is thrown as above:

```py
a, b, _ = 1,2,3,4
=>Traceback (most recent call last):
=>File "name.py", line N, in <module>
=>a, b, _ = 1,2,3,4
=>ValueError: too many values to unpack (expected 3)
```

You can also assign a single value to several variables simultaneously.

```py
a = b = c = 1
print(a, b, c)
# Output: 1 1 1
```

When using such cascading assignment, it is important to note that all three variables `a`, `b` and `c` refer to the **same object** in memory, an `int` object with the value of 1. In other words, `a`, `b` and `c` are three different names given to the same int object. Assigning a different object to one of them afterwards doesn't change the others, just as expected:

```py
a = b = c = 1    # all three names a, b and c refer to same int object with value 1
print(a, b, c)
# Output: 1 1 1
b = 2            # b now refers to another int object, one with a value of 2
print(a, b, c)
# Output: 1 2 1  # so output is as expected.
```

The above is also true for mutable types (like `list`, `dict`, etc.) just as it is true for immutable types (like `int`, `string`, `tuple`, etc.):

```py
x = y = [7, 8, 9]   # x and y refer to the same list object just created, [7, 8, 9]
x = [13, 8, 9]      # x now refers to a different list object just created, [13, 8, 9]
print(y)            # y still refers to the list it was first assigned
# Output: [7, 8, 9]
```

So far so good. Things are a bit different when it comes to **modifying** the object (in contrast to assigning the name to a different object, which we did above) when the cascading assignment is used for mutable types. Take a look below, and you will see it first hand:

```py
x = y = [7, 8, 9]     # x and y are two different names for the same list object just created, [7, 8, 9]
x[0] = 13             # we are updating the value of the list [7, 8, 9] through one of its names, x in this case
print(y)              # printing the value of the list using its other name
# Output: [13, 8, 9]  # hence, naturally the change is reflected
```

Nested lists are also valid in python. This means that a list can contain another list as an element.

```py
x = [1, 2, [3, 4, 5], 6, 7] # this is nested list
print x[2]
# Output: [3, 4, 5]
print x[2][1]
# Output: 4
```

Lastly, variables in Python do not have to stay the same type as which they were first defined -- you can simply use `=` to assign a new value to a variable, even if that value is of a different type.

```py
a = 2
print(a)
# Output: 2

a = "New value"
print(a)
# Output: New value
```

:::note
If this bothers you, think about the fact that what's on the left of `=` is just a name for an object. First you call the `int` object with value 2 `a`, then you change your mind and decide to give the name `a` to a `string` object, having value 'New value'. Simple, right?
:::
<SocialShare/>
