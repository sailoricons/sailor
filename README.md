# Sailor

[![Build status](https://img.shields.io/travis/sailoricons/sailor/master.svg?style=flat-square)](https://travis-ci.org/sailoricons/sailor)
[![Coverage](https://img.shields.io/codecov/c/github/sailoricons/sailor/master.svg?style=flat-square)](https://codecov.io/gh/sailoricons/sailor)
[![npm downloads](https://img.shields.io/npm/dm/sailor-icons.svg?style=flat-square)](https://www.npmjs.com/package/sailor-icons)
[![npm version](https://img.shields.io/npm/v/sailor-icons.svg?style=flat-square)](https://www.npmjs.com/package/sailor-icons)
[![CDNJS version](https://img.shields.io/cdnjs/v/sailor-icons.svg?style=flat-square)](https://cdnjs.com/libraries/sailor-icons)

## What is sailor?

Sailor is a collection of simply beautiful open source icons. Each icon is designed on a 24x24 grid with an emphasis on simplicity, consistency and usability.

```shell
npm install sailor-icons --save
```

## Table of Contents

* [Quick Start](#quick-start)
* [Usage](#usage)
  * [Client-side JavaScript](#client-side-javascript)
  * [Node](#node)
  * [SVG Sprite](#svg-sprite)
* [API Reference](#api-reference)
	* [`sailor.icons`](#sailoricons)
	* [`sailor.icons[name].toSvg()`](#sailoriconsnametosvgattrs)
	* [`sailor.replace()`](#sailorreplaceattrs)
* [Related Projects](#related-projects)
* [License](#license)

## Quick Start

Start with this [CodePen Template](https://codepen.io/pen?template=WOJZdM) to begin prototyping with sailor in the browser.

Or copy and paste the following code snippet into a blank `html` file.

```html
<!DOCTYPE html>
<html lang="en">
  <title></title>
  <script src="https://unpkg.com/sailor-icons"></script>
  <body>

    <!-- example icon -->
    <i data-sailor="circle"></i>

    <script>
      sailor.replace()
    </script>
  </body>
</html>
```

## Usage

At its core, Sailor is a collection of [SVG](https://svgontheweb.com/#svg) files. This means that you can use Sailor icons in all the same ways you can use SVGs (e.g. `img`, `background-image`, `inline`, `object`, `embed`, `iframe`). Here's a helpful article detailing the many ways SVGs can be used on the web: [SVG on the Web – Implementation Options](https://svgontheweb.com/#implementation)

The following are additional ways you can use Sailor.

### Client-side JavaScript

#### 1. Install

> **Note:** If you intend to use Sailor with a CDN, you can skip this installation step.

Install with [npm](https://docs.npmjs.com/getting-started/what-is-npm).

```shell
npm install sailor-icons --save
```

Or just copy [`sailor.js`](https://unpkg.com/sailor-icons/dist/sailor.js) or [`sailor.min.js`](https://unpkg.com/sailor-icons/dist/sailor.min.js) into your project directory. You don't need both `sailor.js` and `sailor.min.js`.

#### 2. Include

Include `sailor.js` or `sailor.min.js` with a `<script>` tag:

```html
<script src="path/to/dist/sailor.js"></script>
```

> **Note:** `sailor.js` and `sailor.min.js` are located in the `dist` directory of the npm package.

Or load the script from a CDN provider:

```html
<!-- choose one -->
<script src="https://unpkg.com/sailor-icons"></script>
<script src="https://cdn.jsdelivr.net/npm/sailor-icons/dist/sailor.min.js"></script>
```

After including the script, `sailor` will be available as a global variable.

#### 3. Use

To use an icon on your page, add a `data-sailor` attribute with the icon name to an element:

```html
<i data-sailor="anchor"></i>
```

See the complete list of icons at [sailoricons.com](https://sailoricons.com).

#### 4. Replace

Call the `sailor.replace()` method:

```html
<script>
  sailor.replace()
</script>
```

All elements that have a `data-sailor` attribute will be replaced with SVG markup corresponding to their `data-sailor` attribute value. See the [API Reference](#api-reference) for more information about `sailor.replace()`.

### Node
#### 1. Install

Install with [npm](https://docs.npmjs.com/getting-started/what-is-npm):

```shell
npm install sailor-icons --save
```

#### 2. Require

```js
const sailor = require('sailor-icons')
```

#### 3. Use

```js
sailor.icons.x
// {
//    name: 'x',
//    contents: '<line ... /><line ... />`,
//    tags: ['cancel', 'close', 'delete', 'remove'],
//    attrs: {
//      class: 'sailor sailor-x',
//      xmlns: 'http://www.w3.org/2000/svg',
//      width: 24,
//      height: 24,
//      viewBox: '0 0 24 24',
//    },
//    toSvg: [Function],
// }

sailor.icons.x.toSvg()
// <svg class="sailor sailor-x" ...><line ... /><line ... /></svg>

sailor.icons.x.toSvg({ class: 'foo bar', 'stroke-width': 1, color: 'red' })
// <svg class="sailor sailor-x foo bar" stroke-width="1" color="red" ...><line ... /><line ... /></svg>
```

See the [API Reference](#api-reference) for more information about the available properties and methods of the `sailor` object.

### SVG Sprite

#### 1. Install

> **Note:** If you intend to use sailor with a CDN, you can skip this installation step.

Install with [npm](https://docs.npmjs.com/getting-started/what-is-npm).

```shell
npm install sailor-icons --save
```

Or just copy [`sailor-sprite.svg`](https://unpkg.com/sailor-icons/dist/sailor-sprite.svg) into your project directory.

#### 2. Use

Include an icon on your page with the following markup:

```html
<svg
  width="24"
  height="24"
>
  <use xlink:href="path/to/sailor-sprite.svg#circle"/>
</svg>
```

> **Note:** `circle` in the above example can be replaced with any valid icon name. See the complete list of icon names at [sailoricons.com](https://sailoricons.com).

However, this markup can be simplified using a simple CSS class to avoid repetition of SVG attributes between icons:

```css
.sailor {
  width: 24px;
  height: 24px;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}
```

```html
<svg class="sailor">
  <use xlink:href="path/to/dist/sailor-sprite.svg#circle"/>
</svg>
```

## API Reference

### `sailor.icons`

An object with data about every icon.

#### Usage

```js
sailor.icons.x
// {
//    name: 'x',
//    contents: '<line ... /><line ... />',
//    attrs: {
//      class: 'sailor sailor-x',
//      xmlns: 'http://www.w3.org/2000/svg',
//      width: 24,
//      height: 24,
//      viewBox: '0 0 24 24',
//    },
//    toSvg: [Function],
// }

sailor.icons.x.toString()
// '<line ... /><line ... />'
```

> **Note:** `x` in the above example can be replaced with any valid icon name. See the complete list of icon names at [sailoricons.com](https://sailoricons.com). Icons with multi-word names (e.g. `arrow-right`) **cannot** be accessed using dot notation (e.g. `sailor.icons.x`). Instead, use bracket notation (e.g. `sailor.icons['arrow-right']`).

[View Source](https://github.com/colebemis/sailor/blob/master/src/icons.js)

---

### `sailor.icons[name].toSvg([attrs])`

Returns an SVG string.

#### Parameters

| Name      | Type   | Description |
| --------- | ------ | ----------- |
| `attrs` (optional) | Object |  Key-value pairs in the `attrs` object will be mapped to HTML attributes on the `<svg>` tag (e.g. `{ foo: 'bar' }` maps to `foo="bar"`). All default attributes on the `<svg>` tag can be overridden with the `attrs` object. |

> **Hint:** You might find these SVG attributes helpful for manipulating icons:
> * [`color`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/color)
> * [`width`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/width)
> * [`height`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/height)
> * [`stroke-width`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-width)
> * [`stroke-linecap`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linecap)
> * [`stroke-linejoin`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linejoin)

#### Usage

```js
sailor.icons.circle.toSvg()
// '<svg class="sailor sailor-circle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>'

sailor.icons.circle.toSvg({ 'stroke-width': 1 })
// '<svg class="sailor sailor-circle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>'

sailor.icons.circle.toSvg({ class: 'foo bar' })
// '<svg class="sailor sailor-circle foo bar" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>'
```

[View Source](https://github.com/colebemis/sailor/blob/master/src/icon.js)

---

### `sailor.replace([attrs])`

Replaces all elements that have a `data-sailor` attribute with SVG markup corresponding to the element's `data-sailor` attribute value.

#### Parameters

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| `attrs` (optional)  | Object | Key-value pairs in the `attrs` object will be mapped to HTML attributes on the `<svg>` tag (e.g. `{ foo: 'bar' }` maps to `foo="bar"`). All default attributes on the `<svg>` tag can be overridden with the `attrs` object. |

#### Usage

> **Note:** `sailor.replace()` only works in a browser environment.

Simple usage:
```html
<i data-sailor="circle"></i>
<!--
<i> will be replaced with:
<svg class="sailor sailor-circle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
-->

<script>
  sailor.replace()
</script>
```

You can pass `sailor.replace()` an `attrs` object:
```html
<i data-sailor="circle"></i>
<!--
<i> will be replaced with:
<svg class="sailor sailor-circle foo bar" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
-->

<script>
  sailor.replace({ class: 'foo bar', 'stroke-width': 1 })
</script>
```

All attributes on the placeholder element (i.e. `<i>`) will be copied to the `<svg>` tag:

```html
<i data-sailor="circle" id="my-circle" class="foo bar" stroke-width="1"></i>
<!--
<i> will be replaced with:
<svg id="my-circle" class="sailor sailor-circle foo bar" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1"><circle cx="12" cy="12" r="10"></circle></svg>
-->

<script>
  sailor.replace()
</script>
```

[View Source](https://github.com/colebemis/sailor/blob/master/src/replace.js)


## Related Projects

 - [react-sailor](https://github.com/carmelopullara/react-sailor) - sailor icons as React components
 - [vue-sailor-icons](https://github.com/egoist/vue-sailor-icons) - sailor icons as Vue components

## License

Sailor is licensed under the [MIT License].
