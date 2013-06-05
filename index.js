/**
 * prepend
 * Prepend `element`.
 *
 * @param {Element} el
 * @return {Element} this for chaining
 * @api public
 */

exports.prepend = function (element) {
  var el = this.el;
  if (el.children.length) {
    el.insertBefore(element, el.firstChild);
  } else {
    el.appendChild(element);
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

exports.append = function (element) {
  var el = this.el;
  el.appendChild(element);
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

Element.prototype.into = function (element) {
  element.append(this.el);
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

exports.before = function (element) {
  element.parentNode.insertBefore(this.el, element);
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

exports.after = function (element) {
  var sibling = element.nextSibling;
  if (sibling) {
    element.parentNode.insertBefore(this.el, sibling);
  } else {
    element.parentNode.appendChild(this);
  }
  return this;
};
