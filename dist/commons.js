"use strict";
(self["webpackChunksurveyor"] = self["webpackChunksurveyor"] || []).push([["commons"],{

/***/ "./src/filter.js":
/*!***********************!*\
  !*** ./src/filter.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function within(pair, list) {
  return pair.filter(function (i) {
    return list.indexOf(i) > -1;
  }).length < 2;
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(list, unallowed) {
  return list.filter(function (i) {
    return within(i, unallowed);
  });
}

/***/ }),

/***/ "./src/pairs.js":
/*!**********************!*\
  !*** ./src/pairs.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pairs)
/* harmony export */ });
function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function pairs(_ref) {
  var _ref2 = _toArray(_ref),
    a = _ref2[0],
    tail = _ref2.slice(1);
  return tail.length ? tail.map(function (b) {
    return [a, b];
  }).concat(pairs(tail)) : [];
}

/***/ }),

/***/ "./tests/filter-test.js":
/*!******************************!*\
  !*** ./tests/filter-test.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! filter */ "./src/filter.js");

describe('Filter', function () {
  it('constructs a list of all unique pairs', function () {
    var pairs = [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]];
    var unique = [2, 3, 4];
    (0,filter__WEBPACK_IMPORTED_MODULE_0__["default"])(pairs, unique).should.eql([[1, 2], [1, 3], [1, 4]]);
  });
});

/***/ }),

/***/ "./tests/hashing-test.js":
/*!*******************************!*\
  !*** ./tests/hashing-test.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_choices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/choices */ "./data/choices.yml");
/* harmony import */ var string_hash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js");
/* harmony import */ var string_hash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(string_hash__WEBPACK_IMPORTED_MODULE_1__);


describe('generating ids with string hashing', function () {
  it('does not contain any duplicate ids', function () {
    var ids = _data_choices__WEBPACK_IMPORTED_MODULE_0__["default"].map((string_hash__WEBPACK_IMPORTED_MODULE_1___default()));
    ids.forEach(function (code) {
      ids.filter(function (id) {
        return id === code;
      }).length.should.equal(1);
    });
  });
  it('produces consistent hash codes', function () {
    var existing = [];
    _data_choices__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(function (code) {
      var expected = string_hash__WEBPACK_IMPORTED_MODULE_1___default()(code);
      for (var i = 0; i < 1000; i++) {
        string_hash__WEBPACK_IMPORTED_MODULE_1___default()(code).should.equal(expected);
      }
      existing.indexOf(expected).should.equal(-1);
      existing.push(expected);
    });
  });
});

/***/ }),

/***/ "./tests/pairs-test.js":
/*!*****************************!*\
  !*** ./tests/pairs-test.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pairs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pairs */ "./src/pairs.js");

describe('pairs', function () {
  it('constructs a list of all unique pairs', function () {
    (0,pairs__WEBPACK_IMPORTED_MODULE_0__["default"])([1, 2, 3]).should.eql([[1, 2], [1, 3], [2, 3]]);
  });
  it('gets the right number of items', function () {
    var items = [1, 2, 3, 4, 5];

    // http://en.wikipedia.org/wiki/Network_science#Network_properties
    var ties = items.length * (items.length - 1) / 2;
    (0,pairs__WEBPACK_IMPORTED_MODULE_0__["default"])(items).length.should.equal(ties);
  });
});

/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/***/ ((module) => {



function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./data/choices.yml":
/*!**************************!*\
  !*** ./data/choices.yml ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (['Being Lazy\r- Wasting Money\r- Being Dishonest\r- Becoming a Teen Parent\r- Committing Crime\r- Dropping out of School\r- Being Chronically Unemployed\r- Abusing Drugs/Alcohol\r- Lacking Role Models\r- Having a Bad Upbringing\r- Working for Low Wages\r- Attending Bad Schools\r- Having Parents on Welfare\r- Living in a Bad Neighborhood\r- Lacking Social Connections\r- Lacking Job Opportunities\r- Experiencing Discrimination\r- Starting From an Unlevel Playingfield\r- Exploitation by Employers\r- Experiencing Job Outsourcing\r- Experiencing Declining Wages\r- Lack of Government Safety Nets\r- Experiencing Racism\r- Experiencing Sexism\r- Being an Immigrant\r- Being Disabled\r- Being a Welfare Recipient\r- Being Poor\r- Being White\r- Being a Racial Minority\r- Being Female\r- Being Male\r']);

/***/ })

}]);
//# sourceMappingURL=commons.js.map