(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./resources/js/modules/categories/router/index.js":
/*!*********************************************************!*\
  !*** ./resources/js/modules/categories/router/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * TEST MODULE ROUTES. THIS IS A CUSTOM ROUTES.
 * A TEST SET UP...
 * ALL TEAM MEMBERS SHOULD JUST COPY AND PASTE TO EXTENDS THE APP
 */
var routes = [{
  path: 'categories',
  name: 'Categories',
  component: function component() {
    return __webpack_require__.e(/*! import() | Chunks/Admin-Categories */ "Chunks/Admin-Categories").then(__webpack_require__.bind(null, /*! ../pages/categories.vue */ "./resources/js/modules/categories/pages/categories.vue"));
  },
  title: 'This is a test page',
  meta: {
    guest: false,
    allowedUserType: ['Admin']
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ })

}]);