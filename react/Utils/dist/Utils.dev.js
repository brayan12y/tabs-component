"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeAccents = exports.noScrollHTML = exports.isMobile = exports.genNumId = exports.queryParamsToObject = exports.validateProductInOrder = exports.Currency = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var Currency = function Currency(_ref) {
  var amount = _ref.amount,
      _ref$decimalCount = _ref.decimalCount,
      decimalCount = _ref$decimalCount === void 0 ? 0 : _ref$decimalCount,
      _ref$decimal = _ref.decimal,
      decimal = _ref$decimal === void 0 ? '.' : _ref$decimal,
      _ref$thousands = _ref.thousands,
      thousands = _ref$thousands === void 0 ? '.' : _ref$thousands;

  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
    var negativeSign = amount < 0 ? '-' : '';
    var i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
    var j = i.length > 3 ? i.length % 3 : 0;
    return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : '');
  } catch (e) {//console.log(e)
  }
};

exports.Currency = Currency;

var validateProductInOrder = function validateProductInOrder(itemsOrder, productId) {
  var filterItems = itemsOrder.filter(function (item) {
    return item.productId === productId;
  });

  if (filterItems.length >= 0) {
    return true;
  }

  return false;
};
/**
 * @name queryParamsToObject
 * @param {string} params
 * @returns {object}
 * @description Read string and build json object
 */


exports.validateProductInOrder = validateProductInOrder;

var queryParamsToObject = function queryParamsToObject(params) {
  var output = {};
  var searchParams = new URLSearchParams(params);
  new Set(_toConsumableArray(searchParams.keys())).forEach(function (key) {
    output[key] = searchParams.getAll(key).length > 1 ? searchParams.getAll(key) : searchParams.get(key);
  });
  return output;
};
/**
 * @name genNumId
 * @returns {number}
 * @description Return unique id
 */


exports.queryParamsToObject = queryParamsToObject;

var genNumId = function genNumId() {
  return Math.round(new Date().getTime() * Math.random());
};
/**
 * @name isMobile
 * @description Run through a list of devices and checking if the useragent matches,
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent
 */


exports.genNumId = genNumId;

var isMobile = function isMobile() {
  var toMatch = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i];
  return toMatch.some(function (toMatchItem) {
    return navigator.userAgent.match(toMatchItem);
  });
};
/**
 * @name noScrollHTML
 * @description Set some style properties to HTML Tag for disabled scroll
 * @param {boolean} status By default is true
 */


exports.isMobile = isMobile;

var noScrollHTML = function noScrollHTML() {
  var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var HTML = document.querySelector('html');
  var SCROLL = {
    position: 'fixed',
    width: '100%',
    top: 0,
    left: 0,
    height: '100%',
    overflowY: 'scroll',
    zIndex: 10
  };
  if (status) Object.assign(HTML.style, SCROLL);else HTML.style = '';
};
/**
 * @name removeAccents
 * @description Remove accents to word
 * @param {string} text By default is a empty string
 */


exports.noScrollHTML = noScrollHTML;

var removeAccents = function removeAccents() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

exports.removeAccents = removeAccents;