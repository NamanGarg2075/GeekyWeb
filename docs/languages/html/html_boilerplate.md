---
title: HTML Boilerplate
sidebar_position: 3
sidebar_label: HTML Boilerplate
slug: /html/html-boilerplate
---

import SocialShare from '@site/src/components/SocialShare'

# HTML Boilerplate

![HTML Boilerplate](../../assets/html/html-boilerplate.png)

## HTML Boilerplate Code

Here is how HTML's boilerplate looks like

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- all content goes here -->
</body>
</html>
```

## Understanding Boilerplate Code

Lets understand the code of HTML's boilerplate

#### DOCTYPE
```html 
<!DOCTYPE html>
```
- Doctype HTML justifies that it is a HTML document. So, we are defining specifically for a browser to understand that it is an HTML document.

#### HTML language tag
```html
<html lang="en">
```
- It is the opening part of the HTML tag that tells us the language of the document is in English.

#### Head tag
```html
<head>
```
- Head contains all the meta-tags in it, which is used to describe the contents of a website. Meta means providing information about information. Therefore, meta tags are used to define the keywords and descriptions on our website. Head also contains the title of the website and all the external files like CSS and JavaScript that we link to it.

#### Meta charset tag
```html
<meta charset= “UTF-8”>
```
- It simply means that the characters that are used will be UTF-8. It declares the page’s character encoding. It should contain a standard IANA MIME name for character encodings. Moreover, authors are encouraged to use UTF-8. 

#### Meta viewport tag
```html
<meta name= “viewport” content= “width=device-width, initial-scale=1.0">
```
- This tag is used to make your website responsive and adjust its width in such a way that it looks good on both PC and mobile. It helps in making the website mobile-friendly also.

#### Meta tag for internet explorer
```html
<meta http-equiv= “X-UA-Compatible” content= “ie=edge”>
```
- It helps any particular website to open in the highest compatibility mode available. It is mostly for those who are still using Internet Explorer because there are still some people who have not upgraded their system and are still using the older versions.

#### Body Tags
```html
<body>
    <!-- all content goes here -->
</body>
```
- These body tags are used to add code that you want to display to your user as a webpage, content outside these tags will not be visible to the user on your webpage.

#### HTML closing tag
```html
</html>
```
- This tag shows that you have closed your webpage. Codes outside this tag will not be rendered and not be displayed to the user.

<SocialShare />