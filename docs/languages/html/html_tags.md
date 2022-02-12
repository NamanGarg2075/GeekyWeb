---
title: HTML Tags
sidebar_position: 4
sidebar_label: HTML Tags
slug: /html/html-tags
---
<!-- Import files -->
import BrowserWindow from '@site/src/components/BrowserWindow'

# HTML Tags

![HTML Tags](../../assets/html/html-tags.png)

## HTML Tags

Tags plays an important role in web development, tags hold content to display their are specific tags for specific texts, like if you want to add paragraph then use `<p> </p>` tags for heading `<h1> </h1>` and many more...

## Closing Tags

Closing tags are those tags which have [opening](#opening-tags) and closing tags both, like as we discuss above that if you have to add any paragraph you will add a `<p>` tags as opening and `</p>` as closing tag,

```html
<p>
    This is my paragraph
</p>
```

## Opening Tags

Opening tags are those tags which have only opening tags no [closing tag](#closing-tags), actually they also have closing tag bt we don't need to type it like if we want to add a line break in our webpage we simply add `<br>` but we will not add `</br>` because this closing tags don't have any use, these kinds of tags are self closing tags as we can also just type it as `<br/>` which indicate both opening and closing tag as well.

```html
This is my text and now i have to break a line and continue to next line.
<br> <!-- or <br/> -->
Now this is my new line
```

### Output without `<br>`

```html title="Code"
This is my text and now i have to break a line and continue to next line.

Now this is my new line
```

<BrowserWindow>

This is my text and now i have to break a line and continue to next line.Now this is my new line

</BrowserWindow>


### Output with `<br>`

```html title="Code"
This is my text and now i have to break a line and continue to next line.
<br> <!-- or <br/> -->
Now this is my new line
```

<BrowserWindow>

This is my text and now i have to break a line and continue to next line. <br/>
Now this is my new line

</BrowserWindow>

:::info

There are many more tags like this explore all of then now [Click Here](tags)
:::