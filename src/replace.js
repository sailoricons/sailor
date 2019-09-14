/* eslint-env browser */
import classnames from 'classnames/dedupe';

import icons from './icons';

/**
 * Replace all HTML elements that have a `data-sailor` attribute with SVG markup
 * corresponding to the element's `data-sailor` attribute value.
 * @param {Object} attrs
 */
function replace(attrs = {}) {
  if (typeof document === 'undefined') {
    throw new Error('`sailor.replace()` only works in a browser environment.');
  }

  const elementsToReplace = document.querySelectorAll('[data-sailor]');

  Array.from(elementsToReplace).forEach(element =>
    replaceElement(element, attrs),
  );
}

/**
 * Replace a single HTML element with SVG markup
 * corresponding to the element's `data-sailor` attribute value.
 * @param {HTMLElement} element
 * @param {Object} attrs
 */
function replaceElement(element, attrs = {}) {
  const elementAttrs = getAttrs(element);
  const name = elementAttrs['data-sailor'];
  delete elementAttrs['data-sailor'];
  const color = elementAttrs['data-color'] || '#29438a';
  delete elementAttrs['data-color'];

  const svgString = icons[name].toSvg({
    ...attrs,
    ...elementAttrs,
    ...{ class: classnames(attrs.class, elementAttrs.class) },
  });
  const svgDocument = new DOMParser().parseFromString(
    svgString,
    'image/svg+xml',
  );
  const svgElement = svgDocument.querySelector('svg');
  if (color) setSvgColor(svgElement, color);

  element.parentNode.replaceChild(svgElement, element);
}

/**
 * Set the [fill] attribute to all children
 * @param {HTMLElement} svgElement
 * @param {String} color
 */
function setSvgColor(svgElement, color) {
  const childrenElems = Array.from(svgElement.children);
  for (let i = 0; i < childrenElems.length; i++) {
    const child = childrenElems[i];
    child.setAttribute('fill', color);
  }
}

/**
 * Get the attributes of an HTML element.
 * @param {HTMLElement} element
 * @returns {Object}
 */
function getAttrs(element) {
  return Array.from(element.attributes).reduce((attrs, attr) => {
    attrs[attr.name] = attr.value;
    return attrs;
  }, {});
}

export default replace;
