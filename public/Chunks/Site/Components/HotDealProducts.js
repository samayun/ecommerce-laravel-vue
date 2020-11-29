(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Chunks/Site/Components/HotDealProducts"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/site/comonents/Category/HotDealProducts.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/site/comonents/Category/HotDealProducts.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("categoriesStoreIndex", ["categories"]))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/site/comonents/Category/HotDealProducts.vue?vue&type=template&id=15271fa6&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/site/comonents/Category/HotDealProducts.vue?vue&type=template&id=15271fa6& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "bg-light pt-3 pb-5" }, [
    _c("div", { staticClass: "container" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "tab-content tab-content-carousel" },
        _vm._l(_vm.categories, function(category) {
          return _c(
            "div",
            {
              key: category.id,
              staticClass: "tab-pane p-0 fade active",
              attrs: {
                id: "hot-all-tab",
                role: "tabpanel",
                "aria-labelledby": "hot-acc-link"
              }
            },
            [_vm._m(1, true)]
          )
        }),
        0
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "heading heading-flex heading-border mb-3" },
      [
        _c("div", { staticClass: "heading-left" }, [
          _c("h2", { staticClass: "title" }, [_vm._v("Hot Deals Products")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "heading-right" }, [
          _c(
            "ul",
            {
              staticClass:
                "nav nav-pills nav-border-anim justify-content-center",
              attrs: { role: "tablist" }
            },
            [
              _c("li", { staticClass: "nav-item" }, [
                _c(
                  "a",
                  {
                    staticClass: "nav-link active",
                    attrs: {
                      id: "hot-all-link",
                      "data-toggle": "tab",
                      href: "#hot-all-tab",
                      role: "tab",
                      "aria-controls": "hot-all-tab",
                      "aria-selected": "true"
                    }
                  },
                  [_vm._v("All")]
                )
              ])
            ]
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "owl-carousel owl-simple carousel-equal-height carousel-with-shadow",
        attrs: {
          "data-toggle": "owl",
          "data-owl-options":
            '{\n                    "nav": false,\n                    "dots": true,\n                    "margin": 20,\n                    "loop": false,\n                    "responsive": {\n                        "0": {\n                            "items":2\n                        },\n                        "480": {\n                            "items":2\n                        },\n                        "768": {\n                            "items":3\n                        },\n                        "992": {\n                            "items":4\n                        },\n                        "1280": {\n                            "items":5,\n                            "nav": true\n                        }\n                    }\n                }'
        }
      },
      [
        _c("div", { staticClass: "product" }, [
          _c("figure", { staticClass: "product-media" }, [
            _c("span", { staticClass: "product-label label-new" }, [
              _vm._v("New")
            ]),
            _vm._v(" "),
            _c("a", { attrs: { href: "product.html" } }, [
              _c("img", {
                staticClass: "product-image",
                attrs: {
                  src: "/storage//products/product-6.jpg",
                  alt: "Product image"
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "product-action-vertical" }, [
              _c(
                "a",
                {
                  staticClass: "btn-product-icon btn-wishlist btn-expandable",
                  attrs: { href: "/product/2" }
                },
                [_c("span", [_vm._v("add to wishlist")])]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "btn-product-icon btn-compare",
                  attrs: { href: "/product/2", title: "Compare" }
                },
                [_c("span", [_vm._v("Compare")])]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "btn-product-icon btn-quickview",
                  attrs: {
                    href: "/assets/popup/quickView.html",
                    title: "Quick view"
                  }
                },
                [_c("span", [_vm._v("Quick view")])]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "product-action" }, [
              _c(
                "a",
                {
                  staticClass: "btn-product btn-cart",
                  attrs: { href: "/product/2", title: "Add to cart" }
                },
                [_c("span", [_vm._v("add to cart")])]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "product-body" }, [
            _c("div", { staticClass: "product-cat" }, [
              _c("a", { attrs: { href: "/product/2" } }, [_vm._v("Appliances")])
            ]),
            _vm._v(" "),
            _c("h3", { staticClass: "product-title" }, [
              _c("a", { attrs: { href: "product.html" } }, [
                _vm._v("Neato Robotics")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "product-price" }, [
              _vm._v(
                "\n                            $399.00\n                        "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "ratings-container" }, [
              _c("div", { staticClass: "ratings" }, [
                _c("div", {
                  staticClass: "ratings-val",
                  staticStyle: { width: "80%" }
                })
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "ratings-text" }, [
                _vm._v("( 12 Reviews )")
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "product" }, [
          _c("figure", { staticClass: "product-media" }, [
            _c("span", { staticClass: "product-label label-sale" }, [
              _vm._v("Sale")
            ]),
            _vm._v(" "),
            _c("a", { attrs: { href: "product.html" } }, [
              _c("img", {
                staticClass: "product-image",
                attrs: {
                  src: "/storage//products/default.png",
                  alt: "Product image"
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "product-action-vertical" }, [
              _c(
                "a",
                {
                  staticClass: "btn-product-icon btn-wishlist btn-expandable",
                  attrs: { href: "/product/2" }
                },
                [_c("span", [_vm._v("add to wishlist")])]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "btn-product-icon btn-compare",
                  attrs: { href: "/product/2", title: "Compare" }
                },
                [_c("span", [_vm._v("Compare")])]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "btn-product-icon btn-quickview",
                  attrs: {
                    href: "/assets/popup/quickView.html",
                    title: "Quick view"
                  }
                },
                [_c("span", [_vm._v("Quick view")])]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "product-action" }, [
              _c(
                "a",
                {
                  staticClass: "btn-product btn-cart",
                  attrs: { href: "/product/2", title: "Add to cart" }
                },
                [_c("span", [_vm._v("add to cart")])]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "product-body" }, [
            _c("div", { staticClass: "product-cat" }, [
              _c("a", { attrs: { href: "/product/2" } }, [_vm._v("Furniture")])
            ]),
            _vm._v(" "),
            _c("h3", { staticClass: "product-title" }, [
              _c("a", { attrs: { href: "product.html" } }, [
                _vm._v("Butler Stool Ladder")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "product-price" }, [
              _c("span", { staticClass: "new-price" }, [_vm._v("$251.99")]),
              _vm._v(" "),
              _c("span", { staticClass: "old-price" }, [_vm._v("Was $290.00")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "ratings-container" }, [
              _c("div", { staticClass: "ratings" }, [
                _c("div", {
                  staticClass: "ratings-val",
                  staticStyle: { width: "100%" }
                })
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "ratings-text" }, [
                _vm._v("( 2 Reviews )")
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "product" }, [
          _c("figure", { staticClass: "product-media" }, [
            _c("span", { staticClass: "product-label label-top" }, [
              _vm._v("Top")
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "product-label label-sale" }, [
              _vm._v("Sale")
            ]),
            _vm._v(" "),
            _c("a", { attrs: { href: "product.html" } }, [
              _c("img", {
                staticClass: "product-image",
                attrs: {
                  src: "/storage//products/product-5.jpg",
                  alt: "Product image"
                }
              })
            ]),
            _vm._v(" "),
            _c("div", {
              staticClass: "product-countdown",
              attrs: {
                "data-until": "+7h",
                "data-format": "HMS",
                "data-relative": "true",
                "data-labels-short": "true"
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "product-action-vertical" }, [
              _c(
                "a",
                {
                  staticClass: "btn-product-icon btn-wishlist btn-expandable",
                  attrs: { href: "/product/2" }
                },
                [_c("span", [_vm._v("add to wishlist")])]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "btn-product-icon btn-compare",
                  attrs: { href: "/product/2", title: "Compare" }
                },
                [_c("span", [_vm._v("Compare")])]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "btn-product-icon btn-quickview",
                  attrs: {
                    href: "/assets/popup/quickView.html",
                    title: "Quick view"
                  }
                },
                [_c("span", [_vm._v("Quick view")])]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "product-action" }, [
              _c(
                "a",
                {
                  staticClass: "btn-product btn-cart",
                  attrs: { href: "/product/2", title: "Add to cart" }
                },
                [_c("span", [_vm._v("add to cart")])]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "product-body" }, [
            _c("div", { staticClass: "product-cat" }, [
              _c("a", { attrs: { href: "/product/2" } }, [
                _vm._v("Electronics")
              ])
            ]),
            _vm._v(" "),
            _c("h3", { staticClass: "product-title" }, [
              _c("a", { attrs: { href: "product.html" } }, [
                _vm._v("Sony - Class LED 2160p Smart 4K Ultra HD")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "product-price" }, [
              _c("span", { staticClass: "new-price" }, [_vm._v("$1699.99")]),
              _vm._v(" "),
              _c("span", { staticClass: "old-price" }, [_vm._v("Was $1999.99")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "ratings-container" }, [
              _c("div", { staticClass: "ratings" }, [
                _c("div", {
                  staticClass: "ratings-val",
                  staticStyle: { width: "80%" }
                })
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "ratings-text" }, [
                _vm._v("( 10 Reviews )")
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "product" }, [
          _c("figure", { staticClass: "product-media" }, [
            _c("span", { staticClass: "product-label label-sale" }, [
              _vm._v("Sale")
            ]),
            _vm._v(" "),
            _c("a", { attrs: { href: "product.html" } }, [
              _c("img", {
                staticClass: "product-image",
                attrs: {
                  src: "/storage//products/product-3.jpg",
                  alt: "Product image"
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "product-action-vertical" }, [
              _c(
                "a",
                {
                  staticClass: "btn-product-icon btn-wishlist btn-expandable",
                  attrs: { href: "/product/2" }
                },
                [_c("span", [_vm._v("add to wishlist")])]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "btn-product-icon btn-compare",
                  attrs: { href: "/product/2", title: "Compare" }
                },
                [_c("span", [_vm._v("Compare")])]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "btn-product-icon btn-quickview",
                  attrs: {
                    href: "/assets/popup/quickView.html",
                    title: "Quick view"
                  }
                },
                [_c("span", [_vm._v("Quick view")])]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "product-action" }, [
              _c(
                "a",
                {
                  staticClass: "btn-product btn-cart",
                  attrs: { href: "/product/2", title: "Add to cart" }
                },
                [_c("span", [_vm._v("add to cart")])]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "product-body" }, [
            _c("div", { staticClass: "product-cat" }, [
              _c("a", { attrs: { href: "/product/2" } }, [_vm._v("Furniture")])
            ]),
            _vm._v(" "),
            _c("h3", { staticClass: "product-title" }, [
              _c("a", { attrs: { href: "product.html" } }, [
                _vm._v("Can 2-Seater Sofa "),
                _c("br"),
                _vm._v("frame charcoal")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "product-price" }, [
              _c("span", { staticClass: "new-price" }, [_vm._v("$3.050.00")]),
              _vm._v(" "),
              _c("span", { staticClass: "old-price" }, [
                _vm._v("Was $3.200.00")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "ratings-container" }, [
              _c("div", { staticClass: "ratings" }, [
                _c("div", {
                  staticClass: "ratings-val",
                  staticStyle: { width: "60%" }
                })
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "ratings-text" }, [
                _vm._v("( 6 Reviews )")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "product-nav product-nav-dots" }, [
              _c(
                "a",
                {
                  staticClass: "active",
                  staticStyle: { background: "#b58555" },
                  attrs: { href: "/product/2" }
                },
                [_c("span", { staticClass: "sr-only" }, [_vm._v("Color name")])]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticStyle: { background: "#93a6b0" },
                  attrs: { href: "/product/2" }
                },
                [_c("span", { staticClass: "sr-only" }, [_vm._v("Color name")])]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "product" }, [
          _c("figure", { staticClass: "product-media" }, [
            _c("span", { staticClass: "product-label label-sale" }, [
              _vm._v("Sale")
            ]),
            _vm._v(" "),
            _c("a", { attrs: { href: "product.html" } }, [
              _c("img", {
                staticClass: "product-image",
                attrs: {
                  src: "/storage//products/product-4.jpg",
                  alt: "Product image"
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "product-action-vertical" }, [
              _c(
                "a",
                {
                  staticClass: "btn-product-icon btn-wishlist btn-expandable",
                  attrs: { href: "/product/2" }
                },
                [_c("span", [_vm._v("add to wishlist")])]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "btn-product-icon btn-compare",
                  attrs: { href: "/product/2", title: "Compare" }
                },
                [_c("span", [_vm._v("Compare")])]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "btn-product-icon btn-quickview",
                  attrs: {
                    href: "/assets/popup/quickView.html",
                    title: "Quick view"
                  }
                },
                [_c("span", [_vm._v("Quick view")])]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "product-action" }, [
              _c(
                "a",
                {
                  staticClass: "btn-product btn-cart",
                  attrs: { href: "/product/2", title: "Add to cart" }
                },
                [_c("span", [_vm._v("add to cart")])]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "product-body" }, [
            _c("div", { staticClass: "product-cat" }, [
              _c("a", { attrs: { href: "/product/2" } }, [_vm._v("Clothes")])
            ]),
            _vm._v(" "),
            _c("h3", { staticClass: "product-title" }, [
              _c("a", { attrs: { href: "product.html" } }, [
                _vm._v("Tan suede biker jacket")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "product-price" }, [
              _c("span", { staticClass: "new-price" }, [_vm._v("$240.00")]),
              _vm._v(" "),
              _c("span", { staticClass: "old-price" }, [_vm._v("Was $310.00")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "ratings-container" }, [
              _c("div", { staticClass: "ratings" }, [
                _c("div", {
                  staticClass: "ratings-val",
                  staticStyle: { width: "80%" }
                })
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "ratings-text" }, [
                _vm._v("( 4 Reviews )")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "product-nav product-nav-dots" }, [
              _c(
                "a",
                {
                  staticClass: "active",
                  staticStyle: { background: "#b58555" },
                  attrs: { href: "/product/2" }
                },
                [_c("span", { staticClass: "sr-only" }, [_vm._v("Color name")])]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticStyle: { background: "#93a6b0" },
                  attrs: { href: "/product/2" }
                },
                [_c("span", { staticClass: "sr-only" }, [_vm._v("Color name")])]
              )
            ])
          ])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/site/comonents/Category/HotDealProducts.vue":
/*!******************************************************************!*\
  !*** ./resources/js/site/comonents/Category/HotDealProducts.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HotDealProducts_vue_vue_type_template_id_15271fa6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HotDealProducts.vue?vue&type=template&id=15271fa6& */ "./resources/js/site/comonents/Category/HotDealProducts.vue?vue&type=template&id=15271fa6&");
/* harmony import */ var _HotDealProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HotDealProducts.vue?vue&type=script&lang=js& */ "./resources/js/site/comonents/Category/HotDealProducts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HotDealProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HotDealProducts_vue_vue_type_template_id_15271fa6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HotDealProducts_vue_vue_type_template_id_15271fa6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/site/comonents/Category/HotDealProducts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/site/comonents/Category/HotDealProducts.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/site/comonents/Category/HotDealProducts.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HotDealProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./HotDealProducts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/site/comonents/Category/HotDealProducts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HotDealProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/site/comonents/Category/HotDealProducts.vue?vue&type=template&id=15271fa6&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/site/comonents/Category/HotDealProducts.vue?vue&type=template&id=15271fa6& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HotDealProducts_vue_vue_type_template_id_15271fa6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./HotDealProducts.vue?vue&type=template&id=15271fa6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/site/comonents/Category/HotDealProducts.vue?vue&type=template&id=15271fa6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HotDealProducts_vue_vue_type_template_id_15271fa6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HotDealProducts_vue_vue_type_template_id_15271fa6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);