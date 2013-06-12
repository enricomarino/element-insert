/**
 * element-insert
 * insert plugin for element
 * 
 * @copyright 2013 Enrico Marino
 * @license MIT
 */

/**
 * Expose component
 */

module.exports = function (element) {

  /**
   * prepend
   * Prepend `element`.
   *
   * @param {Element} el
   * @return {Element} this for chaining
   * @api public
   */
  
  element.prototype.prepend = function (other) {
    var el = this.el;
    if (el.children.length) {
      el.insertBefore(other, el.firstChild);
    } else {
      el.appendChild(other);
    }
    return this;
  };
  
  /**
   * prepend
   * Prepend `element`.
   *
   * @param {Element} element
   * @return {Element} this for chaining
   * @api public
   */
  
  element.prototype.append = function (other) {
    var el = this.el;
    el.appendChild(other);
    return this;
  };
  
  /**
   * into
   * Append this `el` to `element`
   *
   * @param {Element} element element
   * @return {Element} this for chaining 
   * @api public
   */
  
  element.prototype.into = function (other) {
    other.appendChild(this.el);
    return this;
  };
  
  /**
   * before
   * Insert this `el` before `element`
   * 
   * @param {Element} element element
   * @return {Element} this for chaining
   * @api public
   */
  
  element.prototype.before = function (other) {
    other.parentNode.insertBefore(this.el, other);
    return this;
  };
  
  /**
   * after
   * Insert this `el` after `element`
   * 
   * @param {Element} element element
   * @return {Element} this for chaining
   * @api public
   */
  
  element.prototype.after = function (other) {
    var sibling = other.nextSibling;
    if (sibling) {
      other.parentNode.insertBefore(this.el, sibling);
    } else {
      other.parentNode.appendChild(this.el);
    }
    return this;
  };

  return element;
}
