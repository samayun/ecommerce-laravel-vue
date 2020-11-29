(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./resources/js/modules/attributes/router/index.js":
/*!*********************************************************!*\
  !*** ./resources/js/modules/attributes/router/index.js ***!
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
  path: 'attributes',
  name: 'Attributes',
  component: function component() {
    return __webpack_require__.e(/*! import() | Chunks/Admin-Attributes */ "Chunks/Admin-Attributes").then(__webpack_require__.bind(null, /*! ../pages/attributes.vue */ "./resources/js/modules/attributes/pages/attributes.vue"));
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