---
title: HTML 5 Doctype.
keywords: [coding, web development, html]
sidebar_position: 3
sidebar_label: HTML 5 Doctype
slug: /html/doctypes/html-5-doctype
---

HTML5 is not based on SGML, and therefore does not require a reference to a DTD.

HTML 5 Doctype declaration:

```html
<!DOCTYPE html>
```

## Case Insensitivity

Per the [W3.org HTML 5 `DOCTYPE` Spec](https://www.w3.org/TR/html5/syntax.html#the-doctype):

> A DOCTYPE must consist of the following components, in this order:

- A string that is an ASCII **case-insensitive** match for the string `"<!DOCTYPE"`.

therefore the following `<!DOCTYPE` s are also valid:

```html
<!DOCTYPE html>
<!DOCTYPE html>
<!DOCTYPE html>
```

This SO article discusses the topic extensively: [Uppercase or lowercase doctype?](http://stackoverflow.com/questions/7020961/uppercase-or-lowercase-doctype)

## HTML 4.01 Doctypes

The HTML 4.01 specification provides several different types of doctypes that allow different types of elements to be specified within the document.

### HTML 4.01 Strict

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```

Includes all HTML elements and attributes, but **does not include presentational or deprecated elements** and **framesets are not allowed**.

### HTML 4.01 Transitional

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```

Includes all HTML elements and attributes and presentational and deprecated elements, but **framesets are not allowed**.

### HTML 4.01 Frameset

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
```

Includes all HTML elements and attributes, presentational and deprecated elements. Framesets are allowed.

## Old Doctypes

### HTML 3.2

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">
```

HTML 3.2 is well supported by most browsers in use. However, HTML 3.2 has limited support for style sheets and no support for HTML 4 features such as frames and internationalization.

### HTML 2.0

```html
<!DOCTYPE html PUBLIC "-//IETF//DTD HTML//EN">
```

HTML 2.0 is widely supported by browsers but lacks support for tables, frames, and internationalization, as well as many commonly used presentation elements and attributes.

#### Syntax

```html
<!DOCTYPE [version-specific string]>
```
