(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./resources/js/modules/settings/router/index.js":
/*!*******************************************************!*\
  !*** ./resources/js/modules/settings/router/index.js ***!
  \*******************************************************/
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
  path: 'settings',
  name: 'Settings',
  component: function component() {
    return __webpack_require__.e(/*! import() | Chunks/Admin-Settings */ "Chunks/Admin-Settings").then(__webpack_require__.bind(null, /*! ../pages/settings.vue */ "./resources/js/modules/settings/pages/settings.vue"));
  },
  title: 'This is settings page',
  meta: {
    guest: false,
    allowedUserType: ['Admin']
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ })

}]);