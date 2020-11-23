(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Chunks/Site-CategoriesProducts"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/site/comonents/Category/CardProduct.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/site/comonents/Category/CardProduct.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
  props: ["product"]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/site/comonents/Category/CategoriesProducts.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/site/comonents/Category/CategoriesProducts.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _CardProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardProduct */ "./resources/js/site/comonents/Category/CardProduct.vue");
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
  props: ["category"],
  components: {
    CardProduct: _CardProduct__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
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
  return _c("div", { staticClass: "product col-sm-6 col-md-4 col-lg-3" }, [
    _c(
      "figure",
      { staticClass: "product-media" },
      [
        _c("router-link", { attrs: { to: "/product/" + _vm.product.slug } }, [
          _c("img", {
            staticClass: "product-image",
            attrs: {
              src: "/storage/products/" + _vm.product.image,
              alt: _vm.product.name
            }
          })
        ]),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _vm._m(1)
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
      _vm._m(2)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "product-action-vertical" }, [
      _c(
        "a",
        {
          staticClass: "btn-product-icon btn-wishlist btn-expandable",
          attrs: { href: "#" }
        },
        [_c("span", [_vm._v("add to wishlist")])]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "btn-product-icon btn-compare btn-expandable",
          attrs: { href: "#", title: "Compare" }
        },
        [_c("span", [_vm._v("Compare")])]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "btn-product-icon btn-quickview btn-expandable",
          attrs: { href: "/assets/popup/quickView.html", title: "Quick view" }
        },
        [_c("span", [_vm._v("Quick view")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "product-action" }, [
      _c(
        "a",
        {
          staticClass: "btn-product btn-cart",
          attrs: { href: "#", title: "Add to cart" }
        },
        [_c("span", [_vm._v("add to cart")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ratings-container" }, [
      _c("div", { staticClass: "ratings" }, [
        _c("div", { staticClass: "ratings-val", staticStyle: { width: "60%" } })
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "ratings-text" }, [_vm._v("( 6 Reviews )")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/site/comonents/Category/CategoriesProducts.vue?vue&type=template&id=4288c600&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/site/comonents/Category/CategoriesProducts.vue?vue&type=template&id=4288c600& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "heading heading-flex heading-border mb-3" }, [
      _c("div", { staticClass: "heading-left" }, [
        _c("h2", { staticClass: "title" }, [_vm._v(_vm._s(_vm.category.name))])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "heading-right" }, [
        _c(
          "ul",
          {
            staticClass: "nav nav-pills nav-border-anim justify-content-center",
            attrs: { role: "tablist" }
          },
          [
            _c("li", { staticClass: "nav-item" }, [
              _c(
                "a",
                {
                  staticClass: "nav-link active",
                  attrs: {
                    id: _vm.category.slug + "-new-link",
                    "data-toggle": "tab",
                    href: "#" + _vm.category.slug + "-new-tab",
                    role: "tab",
                    "aria-controls": _vm.category.slug + "-new-tab",
                    "aria-selected": "true"
                  }
                },
                [_vm._v("New")]
              )
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "nav-item" }, [
              _c(
                "a",
                {
                  staticClass: "nav-link ",
                  attrs: {
                    id: _vm.category.slug + "-featured-link",
                    "data-toggle": "tab",
                    href: "#" + _vm.category.slug + "-featured-tab",
                    role: "tab",
                    "aria-controls": _vm.category.slug + "-featured-tab",
                    "aria-selected": "false"
                  }
                },
                [_vm._v("Featured")]
              )
            ])
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "tab-content tab-content-carousel" }, [
      _c(
        "div",
        {
          staticClass: "tab-pane p-0 fade show active",
          attrs: {
            id: _vm.category.slug + "-new-tab",
            role: "tabpanel",
            "aria-labelledby": _vm.category.slug + "-new-link"
          }
        },
        [
          _c(
            "div",
            {
              staticClass:
                "owl-carousel owl-full carousel-equal-height carousel-with-shadow owl-loaded owl-drag",
              attrs: {
                "data-toggle": "owl",
                "data-owl-options":
                  '{\n                    "nav": false,\n                    "dots": true,\n                    "margin": 20,\n                    "loop": true,\n                    "responsive": {\n                        "0": {\n                            "items":2\n                        },\n                        "480": {\n                            "items":2\n                        },\n                        "768": {\n                            "items":3\n                        },\n                        "992": {\n                            "items":4\n                        },\n                        "1280": {\n                            "items":5,\n                            "nav": true\n                        }\n                    }\n                }'
              }
            },
            [
              _c(
                "div",
                { staticClass: "row" },
                _vm._l(_vm.category.products, function(product) {
                  return _c("CardProduct", {
                    key: product.id,
                    attrs: { product: product }
                  })
                }),
                1
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "tab-pane p-0 fade ",
          attrs: {
            id: _vm.category.slug + "-featured-tab",
            role: "tabpanel",
            "aria-labelledby": _vm.category.slug + "-featured-link"
          }
        },
        [
          _c(
            "div",
            {
              staticClass:
                "owl-carousel owl-full carousel-equal-height carousel-with-shadow owl-loaded owl-drag",
              attrs: {
                "data-toggle": "owl",
                "data-owl-options":
                  '{\n                    "nav": false,\n                    "dots": true,\n                    "margin": 20,\n                    "loop": false,\n                    "responsive": {\n                        "0": {\n                            "items":2\n                        },\n                        "480": {\n                            "items":2\n                        },\n                        "768": {\n                            "items":3\n                        },\n                        "992": {\n                            "items":4\n                        },\n                        "1280": {\n                            "items":5,\n                            "nav": true\n                        }\n                    }\n                }'
              }
            },
            [
              _c(
                "div",
                { staticClass: "row" },
                _vm._l(_vm.category.products, function(product) {
                  return _c("CardProduct", {
                    key: product.id,
                    attrs: { product: product }
                  })
                }),
                1
              )
            ]
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = []
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



/***/ }),

/***/ "./resources/js/site/comonents/Category/CategoriesProducts.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/site/comonents/Category/CategoriesProducts.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CategoriesProducts_vue_vue_type_template_id_4288c600___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoriesProducts.vue?vue&type=template&id=4288c600& */ "./resources/js/site/comonents/Category/CategoriesProducts.vue?vue&type=template&id=4288c600&");
/* harmony import */ var _CategoriesProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategoriesProducts.vue?vue&type=script&lang=js& */ "./resources/js/site/comonents/Category/CategoriesProducts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CategoriesProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CategoriesProducts_vue_vue_type_template_id_4288c600___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CategoriesProducts_vue_vue_type_template_id_4288c600___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/site/comonents/Category/CategoriesProducts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/site/comonents/Category/CategoriesProducts.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/site/comonents/Category/CategoriesProducts.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriesProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CategoriesProducts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/site/comonents/Category/CategoriesProducts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriesProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/site/comonents/Category/CategoriesProducts.vue?vue&type=template&id=4288c600&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/site/comonents/Category/CategoriesProducts.vue?vue&type=template&id=4288c600& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriesProducts_vue_vue_type_template_id_4288c600___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CategoriesProducts.vue?vue&type=template&id=4288c600& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/site/comonents/Category/CategoriesProducts.vue?vue&type=template&id=4288c600&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriesProducts_vue_vue_type_template_id_4288c600___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriesProducts_vue_vue_type_template_id_4288c600___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);