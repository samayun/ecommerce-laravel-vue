(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./resources/js/modules/products/router/index.js":
/*!*******************************************************!*\
  !*** ./resources/js/modules/products/router/index.js ***!
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
  path: 'products',
  name: 'Products',
  component: function component() {
    return __webpack_require__.e(/*! import() | Chunks/Admin-Products */ "Chunks/Admin-Products").then(__webpack_require__.bind(null, /*! ../pages/products.vue */ "./resources/js/modules/products/pages/products.vue"));
  },
  title: 'This is admijn product page',
  meta: {
    guest: false,
    allowedUserType: ['Admin']
  }
}, {
  path: 'products/create',
  name: 'CreateProducts',
  component: function component() {
    return __webpack_require__.e(/*! import() | Chunks/Admin-Products-Create */ "Chunks/Admin-Products-Create").then(__webpack_require__.bind(null, /*! ../pages/create.vue */ "./resources/js/modules/products/pages/create.vue"));
  },
  title: 'This is create product page'
}, {
  path: 'products/edit/:id',
  name: 'EditProducts',
  component: function component() {
    return __webpack_require__.e(/*! import() | Chunks/Admin-Products-Edit-:id */ "Chunks/Admin-Products-Edit-:id").then(__webpack_require__.bind(null, /*! ../pages/edit.vue */ "./resources/js/modules/products/pages/edit.vue"));
  },
  title: 'This is Edit product page'
}, {
  path: 'products/view/:id',
  name: 'EditProducts',
  component: function component() {
    return __webpack_require__.e(/*! import() | Chunks/Admin-Products-View-:id */ "Chunks/Admin-Products-View-:id").then(__webpack_require__.bind(null, /*! ../pages/view.vue */ "./resources/js/modules/products/pages/view.vue"));
  },
  title: 'This is View product page'
}];
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ })

}]);