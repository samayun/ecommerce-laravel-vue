(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Chunks/Site/Components/CardProduct"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/site/comonents/Category/CardProduct.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/site/comonents/Category/CardProduct.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["product"],
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("productsStoreIndex", ["QuickView"])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("cartStoreIndex", ["addToCart"])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("wishlistsStoreIndex", ["addToWishlist"])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("compareStoreIndex", ["addToCompare"]))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/site/comonents/Category/CardProduct.vue?vue&type=template&id=8e51ffe2&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/site/comonents/Category/CardProduct.vue?vue&type=template&id=8e51ffe2& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "product" }, [
    _c(
      "figure",
      { staticClass: "product-media" },
      [
        _c("router-link", { attrs: { to: "/product/" + _vm.product.slug } }, [
          _c("img", {
            staticClass: "product-image",
            staticStyle: { height: "160px" },
            attrs: {
              src: "/storage/products/" + _vm.product.image,
              alt: _vm.product.name
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "product-action-vertical" }, [
          _c(
            "a",
            {
              staticClass: "btn-product-icon btn-wishlist btn-expandable",
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  return _vm.addToWishlist(_vm.product)
                }
              }
            },
            [_c("span", [_vm._v("add to wishlist")])]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn-product-icon btn-quickview btn-expandable",
              attrs: { title: "Quick view" },
              on: {
                click: function($event) {
                  return _vm.QuickView(_vm.product)
                }
              }
            },
            [_c("span", [_vm._v("Quick view")])]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "btn-product-icon btn-compare btn-expandable",
              attrs: { href: "#", title: "Compare" },
              on: {
                click: function($event) {
                  return _vm.addToCompare(_vm.product)
                }
              }
            },
            [_c("span", [_vm._v("Compare")])]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "product-action" }, [
          _c(
            "a",
            {
              staticClass: "btn-product btn-cart",
              attrs: { href: "#", title: "Add to cart" },
              on: {
                click: function($event) {
                  return _vm.addToCart(_vm.product)
                }
              }
            },
            [_c("span", [_vm._v("add to cart")])]
          )
        ])
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "product-body" }, [
      _c(
        "div",
        { staticClass: "product-cat" },
        _vm._l(_vm.product.categories, function(cat) {
          return _c(
            "p",
            { key: cat.id },
            [
              _c("router-link", { attrs: { to: "/category/" + cat.slug } }, [
                _vm._v(" " + _vm._s(cat.name) + " ")
              ])
            ],
            1
          )
        }),
        0
      ),
      _vm._v(" "),
      _c(
        "h3",
        { staticClass: "product-title" },
        [
          _c("router-link", { attrs: { to: "/product/" + _vm.product.slug } }, [
            _vm._v(
              "\n                  " +
                _vm._s(_vm.product.name) +
                "\n                "
            )
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "product-price" }, [
        _c("span", { staticClass: "new-price" }, [
          _vm._v("$ " + _vm._s(_vm.product.price) + " ")
        ]),
        _vm._v(" "),
        _c("span", { staticClass: "old-price" }, [
          _vm._v("Was $" + _vm._s(_vm.product.price) + " ")
        ])
      ]),
      _vm._v(" "),
      _vm._m(0)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ratings-container" }, [
      _c("div", { staticClass: "ratings" }, [
        _c("div", { staticClass: "ratings-val", staticStyle: { width: "60%" } })
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "ratings-text" }, [_vm._v("( 2 Reviews )")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/site/comonents/Category/CardProduct.vue":
/*!**************************************************************!*\
  !*** ./resources/js/site/comonents/Category/CardProduct.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardProduct_vue_vue_type_template_id_8e51ffe2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardProduct.vue?vue&type=template&id=8e51ffe2& */ "./resources/js/site/comonents/Category/CardProduct.vue?vue&type=template&id=8e51ffe2&");
/* harmony import */ var _CardProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardProduct.vue?vue&type=script&lang=js& */ "./resources/js/site/comonents/Category/CardProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CardProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CardProduct_vue_vue_type_template_id_8e51ffe2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CardProduct_vue_vue_type_template_id_8e51ffe2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/site/comonents/Category/CardProduct.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/site/comonents/Category/CardProduct.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/site/comonents/Category/CardProduct.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CardProduct.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/site/comonents/Category/CardProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/site/comonents/Category/CardProduct.vue?vue&type=template&id=8e51ffe2&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/site/comonents/Category/CardProduct.vue?vue&type=template&id=8e51ffe2& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardProduct_vue_vue_type_template_id_8e51ffe2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CardProduct.vue?vue&type=template&id=8e51ffe2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/site/comonents/Category/CardProduct.vue?vue&type=template&id=8e51ffe2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardProduct_vue_vue_type_template_id_8e51ffe2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardProduct_vue_vue_type_template_id_8e51ffe2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);