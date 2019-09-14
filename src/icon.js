/* eslint no-underscore-dangle: 0 */
/* eslint default-case: 0 */
import classnames from 'classnames/dedupe';
import DEFAULT_ATTRS from './default-attrs.json';

class Icon {
  constructor(name, contents) {
    this.name = name;
    this.contents = contents;
    this.attrs = {
      ...DEFAULT_ATTRS,
      ...{ class: `sailor sailor-${name}` },
    };
  }

  _addCustomAttrs(attrs = {}) {
    const newAttrs = {};
    switch (this.name) {
      case 'bookmarks':
        newAttrs.viewBox = '0 -4 13 23';
        break;
    }

    const combinedAttrs = {
      ...attrs,
      ...newAttrs,
    };

    return combinedAttrs;
  }

  /**
   * Create an SVG string.
   * @param {Object} attrs
   * @returns {string}
   */
  toSvg(attrs = {}) {
    const combinedAttrs = {
      ...this.attrs,
      ...attrs,
      ...{ class: classnames(this.attrs.class, attrs.class) },
    };

    const newAttrs = this._addCustomAttrs(combinedAttrs);

    return `<svg ${attrsToString(newAttrs)}>${this.contents}</svg>`;
  }

  /**
   * Return string representation of an `Icon`.
   *
   * Added for backward compatibility. If old code expects `sailor.icons.<name>`
   * to be a string, `toString()` will get implicitly called.
   *
   * @returns {string}
   */
  toString() {
    return this.contents;
  }
}

/**
 * Convert attributes object to string of HTML attributes.
 * @param {Object} attrs
 * @returns {string}
 */
function attrsToString(attrs) {
  return Object.keys(attrs)
    .map(key => `${key}="${attrs[key]}"`)
    .join(' ');
}

export default Icon;
