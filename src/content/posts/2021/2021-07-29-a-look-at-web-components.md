---
title: A look at web components
slug: a-look-at-web-components
pubDate: 2021-07-29
description: On the surface, web components look like an easy way to create and reuse elements and patterns for websites, but how easy are they to set up and use?
author: Tommy Oldfield
image:
  filename: web-components-logo
  alt: The HTML 5 and JavaSript logos superimposed on a layer of Lego.
external:
  isExternal: true
  url: https://digitalcommunications.wp.st-andrews.ac.uk/2021/07/29/a-look-at-web-components/
categories: ['External', 'Development']
tags: ["HTML", "JavaScript"]
---

Although web components have been around for several years in the web development world, it hasn’t been something that I’ve heard mentioned a lot. On the surface, web components look like an easy way to create and reuse elements and patterns for websites. But how easy are they to set up and use?

## What are web components?

Web components is the name given to a range of technologies that allow developers to create their own HTML elements using JavaScript. These elements can be reused, with styling and functionality remaining unique to them. From delving in and creating a few components, I’d say that they are similar to shortcodes in WordPress and to an extent, content types in TerminalFour.

The technologies that are using in web components are:

- [Custom elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) – A JavaScript API that lays down the foundation for creating, designing, and using new elements. This is done using the `customElements.define` function.
- [Shadow DOM (Document Object Model)](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) – Allows a separate, hidden DOM to be attached to an element. Elements using the shadow DOM can use their own styling and functionality that is separate from the styling and functionality used for elements on the rest of the page.
- [HTML templates](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots) – Allows developers to write the standard HTML code that will be output only when using the new custom elements.

## How they are created

On the JavaScript side, a class is created for the custom element and holds all the functionality, including querying and manipulating the shadow DOM. The element is then registered with its unique tag name along with the class.

Finally, an element is created with the template tag and is attached to the shadow DOM in the class of the component. Here is where the element’s HTML and CSS is written.

To include this web component on a webpage, the newly created HTML element can simply be inserted alongside other HTML elements with any relevant attributes.

## Creating a web component

Since this was a new technology for me, I thought I would try to create my own web component. I decided to create a navbox web component that was based on the [navbox DPL pattern](https://www.st-andrews.ac.uk/dpl/1.26.0/patterns/navbox/index.html).

Starting off with the HTML template in JavaScript, the template element is created, and I add in most of the navbox code from the DPL. The styling for the element is added inline and will be added before the navbox’s HTML in the innerHTML property.


You may notice I’ve included an element that isn’t present in the DPL navbox code – the slot element. The slot element gives the template code more flexibility, and is simply a placeholder for users to add in their own content.

The Navbox class attaches itself to the shadow DOM and appends the HTML template element to it, where we can now query and manipulate the HTML.

The class also adds in data and creates elements based on what attributes were added to the HTML element. The only required attributes for the navbox are the title and the url.

Finally, the last line in the JavaScript file is to define the custom element tag and pass in the Navbox class to handle all of the functionality. In this instance, I’ve named the custom element sta-navbox.

`window.customElements.define('sta-navbox', Navbox);`

Within the HTML file, the sta-navbox element can now be used with its attributes. To make use of the slot element in the HTML template in the JavaScript file, slot gets added as an attribute to an element (a div element in this case) and it must be equal to the slot name in the template.

To see the web component in action, you can [view the code on JSFiddle](https://jsfiddle.net/beysfr0v/).

## Conclusion


From the short time that I’ve looked into web components, the main advantages that I see are:

- Easier to use for end users – For users that want to use DPL patterns but aren’t too confident in using HTML, converting these patterns into simple web components may be easier for users to use.
- Separate styling – I think components having their own separate styling that isn’t affected by other page CSS is great. I can see that being useful for having uniformity when creating WordPress plugins, as each theme’s styling could affect the look and output of a plugin.
- Performance – If we were to convert each of the DPL patterns into web component files, users can load in the components/patterns they need rather than loading in the entire DPL.
- Self-contained code – Much like content types in T4, editing the code in one place updates the output of all of the components which would save time when needing to make changes.

Some of the disadvantages I found were:

- Finding the component quite cumbersome to set up. I find that it’s much easier to type out the raw html than creating the elements in JavaScript and adding in the classes and attributes that way.
- With most of the code being written in JavaScript, if the file doesn’t get loaded in, the component won’t appear.
- Writing CSS within JavaScript isn’t ideal. Although, I have read that you can use and link CSS files within the template section but that is something that I would need to look into more.

This look into web components has coincided with the start of DPL 2.0 development and while not being implemented at the moment, it could be something to keep in mind when developing, creating, and updating patterns.
## Further reading

- [Web Components – MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [Building Custom Elements with Web Components for the 2020 Elections](https://medium.com/stories-from-upstatement/building-custom-elements-with-web-components-for-the-2020-elections-f767ff9e9c6a)
