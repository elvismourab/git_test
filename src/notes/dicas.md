From Function return values
https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Return_values

- Look at another example of writing error handling into functions. It is generally a good idea to check that any necessary parameters are validated, and that any optional parameters have some kind of default value provided. This way, your program will be less likely to throw errors.
- Think about the idea of creating a function library. As you go further into your programming career, you'll start doing the same kinds of things over and over again. It is a good idea to create your own library of utility functions to do these sorts of things. You can copy them over to new code, or even just apply them to HTML pages wherever you need them.

—

From Making the case for CSS normalize and reset stylesheets in 2023
https://mattbrictson.com/blog/css-normalize-and-reset

When choosing your approach to CSS on a new project, consider the following:
Is a CSS framework like Tailwind a good fit for the project? Frameworks typically bundle their own normalize and/or reset.
Writing CSS from scratch? Start by adding modern-normalize. This gives you border-box and will fix bugs, accessibility issues, and other undesirable behavior that might otherwise go unnoticed during development and end up impacting your users.
If you are going for a browser-default aesthetic, then you might not need a CSS reset. Otherwise seriously consider adding one, like the lightweight version below. It will save you a lot of repetitive styling in the long run. Also, it can be risky to add a CSS reset late in a project, so this is best decided up front.

```css
@import "modern-normalize";

:root {
  line-height: 1.5;
}

h1, h2, h3, h4, h5, figure, p, ol, ul {
  margin: 0;
}

ol[role="list"], ul[role="list"] {
  list-style: none;
  padding-inline: 0;
}

h1, h2, h3, h4, h5 {
  font-size: inherit;
  font-weight: inherit;
}

img {
  display: block;
  max-inline-size: 100%;
}

```
—
