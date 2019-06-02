# Invoker Next

An opiniated starter for next.js project

1. Overview
2. Getting Started
3. What's included?
4. Issues and Contribution

## Overview

invoker-next is an opiniated starter-kit for a next.js project at [Meridian.id](http://meridian.id)

## Getting Stated

Before you can start tinkering with your project, you need to have these installed on your machine.

1. Node.js
2. A package manager like `npm` (you already have it if you have Node.js installed on your machinge), or you can use `yarn`
3. `mid-tinker-cli`, a recommended way to scaffold your project. To install it, run `npm install -g mid-tinker-cli` on your terminal

If you already have all those three on your machine, you can scaffold your project by running this command on your terminal

```shell
tinker next <your-project-name>
```

## What's Included

As an opiniated as it is, we already included a bunch of plugins and tools so you can develop your project faster in a fun way. Here's a complete list of them, and you can disable it in the `next-config.js` file.

* Styling with Sass(SCSS) and CSS-Modules
  The peanut and butter of styling your project. You can still use the old paradigm on building your styles and have a dedicated style files but with more power and controll (i.e. scopped styles, mixins, nesting, variables, etc.)
* Inline SVG with `babel-plugin-inline-react-svg`
  Help you import SVG files and inline it in your react component. This way you can have more controll over your SVG files (i.e. Animate the color by using the `fill="currentColor` properties, etc.")

## Issues and Contribution

This starter-kit is in the early stage of development. So it's not as much as it should be yet, but it's ready for production.

If you have any suggestion or something that you think can improve this project, feel free to files an issue on the Issues section.