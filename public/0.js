(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/site_modules/categories/components/Product.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/site_modules/categories/components/Product.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["product"],
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("categoriesStoreIndex", {
    layout: "getLayout"
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/site_modules/categories/pages/ProductByCategory.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/site_modules/categories/pages/ProductByCategory.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Product */ "./resources/js/site_modules/categories/components/Product.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    Product: _components_Product__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("categoriesStoreIndex", ["layout_type", "category"])),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("categoriesStoreIndex", ["getCategoryBySlug"])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])("categoriesStoreIndex", ["SET_LAYOUT"])),
  created: function created() {
    var slug = this.$route.params.slug;

    if (this.category.slug != slug) {// this.getCategoryBySlug(slug);
    }

    this.getCategoryBySlug(slug);

    var _this = this;

    $Bus.$on('404', function () {
      alert("404 Not Found");
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/site_modules/categories/components/Product.vue?vue&type=template&id=22c966a7&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/site_modules/categories/components/Product.vue?vue&type=template&id=22c966a7& ***!
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
  return _vm.layout == "list"
    ? _c("div", { staticClass: "product product-list" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-6 col-lg-3" }, [
            _c(
              "figure",
              { staticClass: "product-media" },
              [
                _c(
                  "router-link",
                  { attrs: { to: "product/" + _vm.product.slug } },
                  [
                    _c("img", {
                      staticClass: "product-image",
                      attrs: {
                        src: "/storage/products/" + _vm.product.image,
                        alt: _vm.product.name
                      }
                    })
                  ]
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-6 col-lg-3 order-lg-last" }, [
            _c("div", { staticClass: "product-list-action" }, [
              _c("div", { staticClass: "product-price" }, [
                _vm._v(
                  "\n                     $ " +
                    _vm._s(_vm.product.price) +
                    "\n                 "
                )
              ]),
              _vm._v(" "),
              _vm._m(0),
              _vm._v(" "),
              _vm._m(1),
              _vm._v(" "),
              _vm._m(2)
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-6" }, [
            _c("div", { staticClass: "product-body product-action-inner" }, [
              _vm._m(3),
              _vm._v(" "),
              _vm._m(4),
              _vm._v(" "),
              _c(
                "h3",
                { staticClass: "product-title" },
                [
                  _c(
                    "router-link",
                    { attrs: { to: "/product/" + _vm.product.slug } },
                    [_vm._v(" " + _vm._s(_vm.product.name) + " ")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "product-content" }, [
                _c("p", [_vm._v("  " + _vm._s(_vm.product.description) + "  ")])
              ])
            ])
          ])
        ])
      ])
    : _c("div", { class: _vm.layout }, [
        _c("div", { staticClass: "product product-7 text-center" }, [
          _c(
            "figure",
            { staticClass: "product-media" },
            [
              _c("span", { staticClass: "product-label label-new" }, [
                _vm._v("New")
              ]),
              _vm._v(" "),
              _c(
                "router-link",
                { attrs: { to: "product/" + _vm.product.slug } },
                [
                  _c("img", {
                    staticClass: "product-image",
                    attrs: {
                      src: "/storage/products/" + _vm.product.image,
                      alt: _vm.product.name
                    }
                  })
                ]
              ),
              _vm._v(" "),
              _vm._m(5),
              _vm._v(" "),
              _vm._m(6)
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "product-body" }, [
            _vm._m(7),
            _vm._v(" "),
            _c(
              "h3",
              { staticClass: "product-title" },
              [
                _c(
                  "router-link",
                  { attrs: { to: "/product/" + _vm.product.slug } },
                  [_vm._v(" " + _vm._s(_vm.product.name) + " ")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "product-price" }, [
              _vm._v(
                "\n                 $ " +
                  _vm._s(_vm.product.price) +
                  "\n             "
              )
            ]),
            _vm._v(" "),
            _vm._m(8)
          ])
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
        _c("div", { staticClass: "ratings-val", staticStyle: { width: "20%" } })
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "ratings-text" }, [_vm._v("( 2 Reviews )")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "product-action" }, [
      _c(
        "button",
        {
          staticClass: "btn-product btn-quickview",
          attrs: { title: "Quick view" }
        },
        [_c("span", [_vm._v("quick view")])]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "btn-product btn-compare",
          attrs: { href: "#", title: "Compare" }
        },
        [_c("span", [_vm._v("compare")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "btn-product btn-cart", attrs: { href: "#" } },
      [_c("span", [_vm._v("add to cart")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "btn-product btn-wishlist",
        attrs: { href: "#", title: "Add to wishlist" }
      },
      [_c("span", [_vm._v("add to wishlist")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "product-cat" }, [
      _c("a", { attrs: { href: "/" } }, [_vm._v(" IMAC ")])
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
          staticClass: "btn-product-icon btn-wishlist btn-expandable",
          attrs: { href: "#" }
        },
        [_c("span", [_vm._v("add to wishlist")])]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "btn-product-icon btn-quickview",
          attrs: { href: "/assets/popup/quickView.html", title: "Quick view" }
        },
        [_c("span", [_vm._v("Quick view")])]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "btn-product-icon btn-compare",
          attrs: { href: "#", title: "Compare" }
        },
        [_c("span", [_vm._v("Compare")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "product-action" }, [
      _c("a", { staticClass: "btn-product btn-cart", attrs: { href: "#" } }, [
        _c("span", [_vm._v("add to cart")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "product-cat" }, [
      _c("a", { attrs: { href: "#" } }, [_vm._v("Women")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ratings-container" }, [
      _c("div", { staticClass: "ratings" }, [
        _c("div", { staticClass: "ratings-val", staticStyle: { width: "20%" } })
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "ratings-text" }, [_vm._v("( 3 Reviews )")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/site_modules/categories/pages/ProductByCategory.vue?vue&type=template&id=9d1ed6d0&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/site_modules/categories/pages/ProductByCategory.vue?vue&type=template&id=9d1ed6d0& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _vm.category.category
      ? _c(
          "div",
          {
            staticClass: "page-header text-center",
            style: "background-image: url(" + _vm.category.category.icon + ")"
          },
          [
            _c("div", { staticClass: "container" }, [
              _c("h1", { staticClass: "page-title" }, [
                _vm._v(
                  "\n                        " +
                    _vm._s(_vm.category.name) +
                    "\n                        "
                ),
                _c("span", [_vm._v(" " + _vm._s(_vm.category.slug) + " ")])
              ])
            ])
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "page-content" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-9" }, [
            _c("div", { staticClass: "toolbox" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "toolbox-right" }, [
                _vm._m(2),
                _vm._v(" "),
                _c("div", { staticClass: "toolbox-layout" }, [
                  _c(
                    "a",
                    {
                      staticClass: "btn-layout ",
                      class: _vm.layout_type == "list" ? "active" : "",
                      on: {
                        click: function($event) {
                          return _vm.SET_LAYOUT("list")
                        }
                      }
                    },
                    [
                      _c("svg", { attrs: { width: "16", height: "10" } }, [
                        _c("rect", {
                          attrs: { x: "0", y: "0", width: "4", height: "4" }
                        }),
                        _vm._v(" "),
                        _c("rect", {
                          attrs: { x: "6", y: "0", width: "10", height: "4" }
                        }),
                        _vm._v(" "),
                        _c("rect", {
                          attrs: { x: "0", y: "6", width: "4", height: "4" }
                        }),
                        _vm._v(" "),
                        _c("rect", {
                          attrs: { x: "6", y: "6", width: "10", height: "4" }
                        })
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "btn-layout",
                      class: _vm.layout_type == "two" ? "active" : "",
                      on: {
                        click: function($event) {
                          return _vm.SET_LAYOUT("two")
                        }
                      }
                    },
                    [
                      _c("svg", { attrs: { width: "10", height: "10" } }, [
                        _c("rect", {
                          attrs: { x: "0", y: "0", width: "4", height: "4" }
                        }),
                        _vm._v(" "),
                        _c("rect", {
                          attrs: { x: "6", y: "0", width: "4", height: "4" }
                        }),
                        _vm._v(" "),
                        _c("rect", {
                          attrs: { x: "0", y: "6", width: "4", height: "4" }
                        }),
                        _vm._v(" "),
                        _c("rect", {
                          attrs: { x: "6", y: "6", width: "4", height: "4" }
                        })
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "btn-layout",
                      class: _vm.layout_type == "three" ? "active" : "",
                      on: {
                        click: function($event) {
                          return _vm.SET_LAYOUT("three")
                        }
                      }
                    },
                    [
                      _c("svg", { attrs: { width: "16", height: "10" } }, [
                        _c("rect", {
                          attrs: { x: "0", y: "0", width: "4", height: "4" }
                        }),
                        _vm._v(" "),
                        _c("rect", {
                          attrs: { x: "6", y: "0", width: "4", height: "4" }
                        }),
                        _vm._v(" "),
                        _c("rect", {
                          attrs: { x: "12", y: "0", width: "4", height: "4" }
                        }),
                        _vm._v(" "),
                        _c("rect", {
                          attrs: { x: "0", y: "6", width: "4", height: "4" }
                        }),
                        _vm._v(" "),
                        _c("rect", {
                          attrs: { x: "6", y: "6", width: "4", height: "4" }
                        }),
                        _vm._v(" "),
                        _c("rect", {
                          attrs: { x: "12", y: "6", width: "4", height: "4" }
                        })
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "btn-layout ",
                      class: _vm.layout_type == "four" ? "active" : "",
                      on: {
                        click: function($event) {
                          return _vm.SET_LAYOUT("four")
                        }
                      }
                    },
                    [
                      _c("svg", { attrs: { width: "22", height: "10" } }, [
                        _c("rect", {
                          attrs: { x: "0", y: "0", width: "4", height: "4" }
                        }),
                        _vm._v(" "),
                        _c("rect", {
                          attrs: { x: "6", y: "0", width: "4", height: "4" }
                        }),
                        _vm._v(" "),
                        _c("rect", {
                          attrs: { x: "12", y: "0", width: "4", height: "4" }
                        }),
                        _vm._v(" "),
                        _c("rect", {
                          attrs: { x: "18", y: "0", width: "4", height: "4" }
                        }),
                        _vm._v(" "),
                        _c("rect", {
                          attrs: { x: "0", y: "6", width: "4", height: "4" }
                        }),
                        _vm._v(" "),
                        _c("rect", {
                          attrs: { x: "6", y: "6", width: "4", height: "4" }
                        }),
                        _vm._v(" "),
                        _c("rect", {
                          attrs: { x: "12", y: "6", width: "4", height: "4" }
                        }),
                        _vm._v(" "),
                        _c("rect", {
                          attrs: { x: "18", y: "6", width: "4", height: "4" }
                        })
                      ])
                    ]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "products mb-3" }, [
              _c(
                "div",
                { staticClass: "row justify-content-center" },
                _vm._l(_vm.category.products, function(pro) {
                  return _c("Product", { key: pro.id, attrs: { product: pro } })
                }),
                1
              )
            ]),
            _vm._v(" "),
            _vm._m(3)
          ]),
          _vm._v(" "),
          _vm._m(4)
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "nav",
      {
        staticClass: "breadcrumb-nav mb-2",
        attrs: { "aria-label": "breadcrumb" }
      },
      [
        _c("div", { staticClass: "container" }, [
          _c("ol", { staticClass: "breadcrumb" }, [
            _c("li", { staticClass: "breadcrumb-item" }, [
              _c("a", { attrs: { href: "" } }, [_vm._v("Home")])
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "breadcrumb-item" }, [
              _c("a", { attrs: { href: "#" } }, [_vm._v("Shop")])
            ]),
            _vm._v(" "),
            _c(
              "li",
              {
                staticClass: "breadcrumb-item active",
                attrs: { "aria-current": "page" }
              },
              [_vm._v("Grid 4 Columns")]
            )
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "toolbox-left" }, [
      _c("div", { staticClass: "toolbox-info" }, [
        _vm._v("\n                \t\t\t\t\t\tShowing "),
        _c("span", [_vm._v("9 of 56")]),
        _vm._v(" Products\n                \t\t\t\t\t")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "toolbox-sort" }, [
      _c("label", { attrs: { for: "sortby" } }, [_vm._v("Sort by:")]),
      _vm._v(" "),
      _c("div", { staticClass: "select-custom" }, [
        _c(
          "select",
          {
            staticClass: "form-control",
            attrs: { name: "sortby", id: "sortby" }
          },
          [
            _c(
              "option",
              { attrs: { value: "popularity", selected: "selected" } },
              [_vm._v("Most Popular")]
            ),
            _vm._v(" "),
            _c("option", { attrs: { value: "rating" } }, [
              _vm._v("Most Rated")
            ]),
            _vm._v(" "),
            _c("option", { attrs: { value: "date" } }, [_vm._v("Date")])
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", { attrs: { "aria-label": "Page navigation" } }, [
      _c("ul", { staticClass: "pagination justify-content-center" }, [
        _c("li", { staticClass: "page-item disabled" }, [
          _c(
            "a",
            {
              staticClass: "page-link page-link-prev",
              attrs: {
                href: "#",
                "aria-label": "Previous",
                tabindex: "-1",
                "aria-disabled": "true"
              }
            },
            [
              _c("span", { attrs: { "aria-hidden": "true" } }, [
                _c("i", { staticClass: "icon-long-arrow-left" })
              ]),
              _vm._v("Prev\n\t\t\t\t\t\t\t            ")
            ]
          )
        ]),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass: "page-item active",
            attrs: { "aria-current": "page" }
          },
          [
            _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
              _vm._v("1")
            ])
          ]
        ),
        _vm._v(" "),
        _c("li", { staticClass: "page-item" }, [
          _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
            _vm._v("2")
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "page-item" }, [
          _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
            _vm._v("3")
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "page-item-total" }, [_vm._v("of 6")]),
        _vm._v(" "),
        _c("li", { staticClass: "page-item" }, [
          _c(
            "a",
            {
              staticClass: "page-link page-link-next",
              attrs: { href: "#", "aria-label": "Next" }
            },
            [
              _vm._v("\n\t\t\t\t\t\t\t                Next "),
              _c("span", { attrs: { "aria-hidden": "true" } }, [
                _c("i", { staticClass: "icon-long-arrow-right" })
              ])
            ]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("aside", { staticClass: "col-lg-3 order-lg-first" }, [
      _c("div", { staticClass: "sidebar sidebar-shop" }, [
        _c("div", { staticClass: "widget widget-clean" }, [
          _c("label", [_vm._v("Filters:")]),
          _vm._v(" "),
          _c(
            "a",
            { staticClass: "sidebar-filter-clear", attrs: { href: "#" } },
            [_vm._v("Clean All")]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "widget widget-collapsible" }, [
          _c("h3", { staticClass: "widget-title" }, [
            _c(
              "a",
              {
                attrs: {
                  "data-toggle": "collapse",
                  href: "#widget-1",
                  role: "button",
                  "aria-expanded": "true",
                  "aria-controls": "widget-1"
                }
              },
              [
                _vm._v(
                  "\n\t\t\t\t\t\t\t\t\t        Category\n\t\t\t\t\t\t\t\t\t    "
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "collapse show", attrs: { id: "widget-1" } },
            [
              _c("div", { staticClass: "widget-body" }, [
                _c("div", { staticClass: "filter-items filter-items-count" }, [
                  _c("div", { staticClass: "filter-item" }, [
                    _c(
                      "div",
                      { staticClass: "custom-control custom-checkbox" },
                      [
                        _c("input", {
                          staticClass: "custom-control-input",
                          attrs: { type: "checkbox", id: "cat-1" }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "custom-control-label",
                            attrs: { for: "cat-1" }
                          },
                          [_vm._v("Dresses")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "item-count" }, [_vm._v("3")])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "filter-item" }, [
                    _c(
                      "div",
                      { staticClass: "custom-control custom-checkbox" },
                      [
                        _c("input", {
                          staticClass: "custom-control-input",
                          attrs: { type: "checkbox", id: "cat-2" }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "custom-control-label",
                            attrs: { for: "cat-2" }
                          },
                          [_vm._v("T-shirts")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "item-count" }, [_vm._v("0")])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "filter-item" }, [
                    _c(
                      "div",
                      { staticClass: "custom-control custom-checkbox" },
                      [
                        _c("input", {
                          staticClass: "custom-control-input",
                          attrs: { type: "checkbox", id: "cat-3" }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "custom-control-label",
                            attrs: { for: "cat-3" }
                          },
                          [_vm._v("Bags")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "item-count" }, [_vm._v("4")])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "filter-item" }, [
                    _c(
                      "div",
                      { staticClass: "custom-control custom-checkbox" },
                      [
                        _c("input", {
                          staticClass: "custom-control-input",
                          attrs: { type: "checkbox", id: "cat-4" }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "custom-control-label",
                            attrs: { for: "cat-4" }
                          },
                          [_vm._v("Jackets")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "item-count" }, [_vm._v("2")])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "filter-item" }, [
                    _c(
                      "div",
                      { staticClass: "custom-control custom-checkbox" },
                      [
                        _c("input", {
                          staticClass: "custom-control-input",
                          attrs: { type: "checkbox", id: "cat-5" }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "custom-control-label",
                            attrs: { for: "cat-5" }
                          },
                          [_vm._v("Shoes")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "item-count" }, [_vm._v("2")])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "filter-item" }, [
                    _c(
                      "div",
                      { staticClass: "custom-control custom-checkbox" },
                      [
                        _c("input", {
                          staticClass: "custom-control-input",
                          attrs: { type: "checkbox", id: "cat-6" }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "custom-control-label",
                            attrs: { for: "cat-6" }
                          },
                          [_vm._v("Jumpers")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "item-count" }, [_vm._v("1")])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "filter-item" }, [
                    _c(
                      "div",
                      { staticClass: "custom-control custom-checkbox" },
                      [
                        _c("input", {
                          staticClass: "custom-control-input",
                          attrs: { type: "checkbox", id: "cat-7" }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "custom-control-label",
                            attrs: { for: "cat-7" }
                          },
                          [_vm._v("Jeans")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "item-count" }, [_vm._v("1")])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "filter-item" }, [
                    _c(
                      "div",
                      { staticClass: "custom-control custom-checkbox" },
                      [
                        _c("input", {
                          staticClass: "custom-control-input",
                          attrs: { type: "checkbox", id: "cat-8" }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "custom-control-label",
                            attrs: { for: "cat-8" }
                          },
                          [_vm._v("Sportwear")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "item-count" }, [_vm._v("0")])
                  ])
                ])
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "widget widget-collapsible" }, [
          _c("h3", { staticClass: "widget-title" }, [
            _c(
              "a",
              {
                attrs: {
                  "data-toggle": "collapse",
                  href: "#widget-2",
                  role: "button",
                  "aria-expanded": "true",
                  "aria-controls": "widget-2"
                }
              },
              [
                _vm._v(
                  "\n\t\t\t\t\t\t\t\t\t        Size\n\t\t\t\t\t\t\t\t\t    "
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "collapse show", attrs: { id: "widget-2" } },
            [
              _c("div", { staticClass: "widget-body" }, [
                _c("div", { staticClass: "filter-items" }, [
                  _c("div", { staticClass: "filter-item" }, [
                    _c(
                      "div",
                      { staticClass: "custom-control custom-checkbox" },
                      [
                        _c("input", {
                          staticClass: "custom-control-input",
                          attrs: { type: "checkbox", id: "size-1" }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "custom-control-label",
                            attrs: { for: "size-1" }
                          },
                          [_vm._v("XS")]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "filter-item" }, [
                    _c(
                      "div",
                      { staticClass: "custom-control custom-checkbox" },
                      [
                        _c("input", {
                          staticClass: "custom-control-input",
                          attrs: { type: "checkbox", id: "size-2" }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "custom-control-label",
                            attrs: { for: "size-2" }
                          },
                          [_vm._v("S")]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "filter-item" }, [
                    _c(
                      "div",
                      { staticClass: "custom-control custom-checkbox" },
                      [
                        _c("input", {
                          staticClass: "custom-control-input",
                          attrs: { type: "checkbox", checked: "", id: "size-3" }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "custom-control-label",
                            attrs: { for: "size-3" }
                          },
                          [_vm._v("M")]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "filter-item" }, [
                    _c(
                      "div",
                      { staticClass: "custom-control custom-checkbox" },
                      [
                        _c("input", {
                          staticClass: "custom-control-input",
                          attrs: { type: "checkbox", checked: "", id: "size-4" }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "custom-control-label",
                            attrs: { for: "size-4" }
                          },
                          [_vm._v("L")]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "filter-item" }, [
                    _c(
                      "div",
                      { staticClass: "custom-control custom-checkbox" },
                      [
                        _c("input", {
                          staticClass: "custom-control-input",
                          attrs: { type: "checkbox", id: "size-5" }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "custom-control-label",
                            attrs: { for: "size-5" }
                          },
                          [_vm._v("XL")]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "filter-item" }, [
                    _c(
                      "div",
                      { staticClass: "custom-control custom-checkbox" },
                      [
                        _c("input", {
                          staticClass: "custom-control-input",
                          attrs: { type: "checkbox", id: "size-6" }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "custom-control-label",
                            attrs: { for: "size-6" }
                          },
                          [_vm._v("XXL")]
                        )
                      ]
                    )
                  ])
                ])
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "widget widget-collapsible" }, [
          _c("h3", { staticClass: "widget-title" }, [
            _c(
              "a",
              {
                attrs: {
                  "data-toggle": "collapse",
                  href: "#widget-3",
                  role: "button",
                  "aria-expanded": "true",
                  "aria-controls": "widget-3"
                }
              },
              [
                _vm._v(
                  "\n\t\t\t\t\t\t\t\t\t        Colour\n\t\t\t\t\t\t\t\t\t    "
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "collapse show", attrs: { id: "widget-3" } },
            [
              _c("div", { staticClass: "widget-body" }, [
                _c("div", { staticClass: "filter-colors" }, [
                  _c(
                    "a",
                    {
                      staticStyle: { background: "#b87145" },
                      attrs: { href: "#" }
                    },
                    [
                      _c("span", { staticClass: "sr-only" }, [
                        _vm._v("Color Name")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticStyle: { background: "#f0c04a" },
                      attrs: { href: "#" }
                    },
                    [
                      _c("span", { staticClass: "sr-only" }, [
                        _vm._v("Color Name")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticStyle: { background: "#333333" },
                      attrs: { href: "#" }
                    },
                    [
                      _c("span", { staticClass: "sr-only" }, [
                        _vm._v("Color Name")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "selected",
                      staticStyle: { background: "#cc3333" },
                      attrs: { href: "#" }
                    },
                    [
                      _c("span", { staticClass: "sr-only" }, [
                        _vm._v("Color Name")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticStyle: { background: "#3399cc" },
                      attrs: { href: "#" }
                    },
                    [
                      _c("span", { staticClass: "sr-only" }, [
                        _vm._v("Color Name")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticStyle: { background: "#669933" },
                      attrs: { href: "#" }
                    },
                    [
                      _c("span", { staticClass: "sr-only" }, [
                        _vm._v("Color Name")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticStyle: { background: "#f2719c" },
                      attrs: { href: "#" }
                    },
                    [
                      _c("span", { staticClass: "sr-only" }, [
                        _vm._v("Color Name")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticStyle: { background: "#ebebeb" },
                      attrs: { href: "#" }
                    },
                    [
                      _c("span", { staticClass: "sr-only" }, [
                        _vm._v("Color Name")
                      ])
                    ]
                  )
                ])
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "widget widget-collapsible" }, [
          _c("h3", { staticClass: "widget-title" }, [
            _c(
              "a",
              {
                attrs: {
                  "data-toggle": "collapse",
                  href: "#widget-4",
                  role: "button",
                  "aria-expanded": "true",
                  "aria-controls": "widget-4"
                }
              },
              [
                _vm._v(
                  "\n\t\t\t\t\t\t\t\t\t        Brand\n\t\t\t\t\t\t\t\t\t    "
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "collapse show", attrs: { id: "widget-4" } },
            [
              _c("div", { staticClass: "widget-body" }, [
                _c("div", { staticClass: "filter-items" }, [
                  _c("div", { staticClass: "filter-item" }, [
                    _c(
                      "div",
                      { staticClass: "custom-control custom-checkbox" },
                      [
                        _c("input", {
                          staticClass: "custom-control-input",
                          attrs: { type: "checkbox", id: "brand-1" }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "custom-control-label",
                            attrs: { for: "brand-1" }
                          },
                          [_vm._v("Next")]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "filter-item" }, [
                    _c(
                      "div",
                      { staticClass: "custom-control custom-checkbox" },
                      [
                        _c("input", {
                          staticClass: "custom-control-input",
                          attrs: { type: "checkbox", id: "brand-2" }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "custom-control-label",
                            attrs: { for: "brand-2" }
                          },
                          [_vm._v("River Island")]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "filter-item" }, [
                    _c(
                      "div",
                      { staticClass: "custom-control custom-checkbox" },
                      [
                        _c("input", {
                          staticClass: "custom-control-input",
                          attrs: { type: "checkbox", id: "brand-3" }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "custom-control-label",
                            attrs: { for: "brand-3" }
                          },
                          [_vm._v("Geox")]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "filter-item" }, [
                    _c(
                      "div",
                      { staticClass: "custom-control custom-checkbox" },
                      [
                        _c("input", {
                          staticClass: "custom-control-input",
                          attrs: { type: "checkbox", id: "brand-4" }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "custom-control-label",
                            attrs: { for: "brand-4" }
                          },
                          [_vm._v("New Balance")]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "filter-item" }, [
                    _c(
                      "div",
                      { staticClass: "custom-control custom-checkbox" },
                      [
                        _c("input", {
                          staticClass: "custom-control-input",
                          attrs: { type: "checkbox", id: "brand-5" }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "custom-control-label",
                            attrs: { for: "brand-5" }
                          },
                          [_vm._v("UGG")]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "filter-item" }, [
                    _c(
                      "div",
                      { staticClass: "custom-control custom-checkbox" },
                      [
                        _c("input", {
                          staticClass: "custom-control-input",
                          attrs: { type: "checkbox", id: "brand-6" }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "custom-control-label",
                            attrs: { for: "brand-6" }
                          },
                          [_vm._v("F&F")]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "filter-item" }, [
                    _c(
                      "div",
                      { staticClass: "custom-control custom-checkbox" },
                      [
                        _c("input", {
                          staticClass: "custom-control-input",
                          attrs: { type: "checkbox", id: "brand-7" }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "custom-control-label",
                            attrs: { for: "brand-7" }
                          },
                          [_vm._v("Nike")]
                        )
                      ]
                    )
                  ])
                ])
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "widget widget-collapsible" }, [
          _c("h3", { staticClass: "widget-title" }, [
            _c(
              "a",
              {
                attrs: {
                  "data-toggle": "collapse",
                  href: "#widget-5",
                  role: "button",
                  "aria-expanded": "true",
                  "aria-controls": "widget-5"
                }
              },
              [
                _vm._v(
                  "\n\t\t\t\t\t\t\t\t\t        Price\n\t\t\t\t\t\t\t\t\t    "
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "collapse show", attrs: { id: "widget-5" } },
            [
              _c("div", { staticClass: "widget-body" }, [
                _c("div", { staticClass: "filter-price" }, [
                  _c("div", { staticClass: "filter-price-text" }, [
                    _vm._v(
                      "\n                                                    Price Range:\n                                                    "
                    ),
                    _c("span", { attrs: { id: "filter-price-range" } }, [
                      _vm._v("$0 - $750")
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "noUi-target noUi-ltr noUi-horizontal",
                      attrs: { id: "price-slider" }
                    },
                    [
                      _c("div", { staticClass: "noUi-base" }, [
                        _c("div", { staticClass: "noUi-connects" }, [
                          _c("div", {
                            staticClass: "noUi-connect",
                            staticStyle: {
                              transform: "translate(0%) scale(0.75, 1)"
                            }
                          })
                        ]),
                        _c(
                          "div",
                          {
                            staticClass: "noUi-origin",
                            staticStyle: {
                              transform: "translate(-100%)",
                              "z-index": "5"
                            }
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "noUi-handle noUi-handle-lower",
                                attrs: {
                                  "data-handle": "0",
                                  tabindex: "0",
                                  role: "slider",
                                  "aria-orientation": "horizontal",
                                  "aria-valuemin": "0.0",
                                  "aria-valuemax": "550.0",
                                  "aria-valuenow": "0.0",
                                  "aria-valuetext": "$0"
                                }
                              },
                              [
                                _c("div", { staticClass: "noUi-touch-area" }),
                                _c("div", { staticClass: "noUi-tooltip" }, [
                                  _vm._v("$0")
                                ])
                              ]
                            )
                          ]
                        ),
                        _c(
                          "div",
                          {
                            staticClass: "noUi-origin",
                            staticStyle: {
                              transform: "translate(-25%)",
                              "z-index": "4"
                            }
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "noUi-handle noUi-handle-upper",
                                attrs: {
                                  "data-handle": "1",
                                  tabindex: "0",
                                  role: "slider",
                                  "aria-orientation": "horizontal",
                                  "aria-valuemin": "200.0",
                                  "aria-valuemax": "1000.0",
                                  "aria-valuenow": "750.0",
                                  "aria-valuetext": "$750"
                                }
                              },
                              [
                                _c("div", { staticClass: "noUi-touch-area" }),
                                _c("div", { staticClass: "noUi-tooltip" }, [
                                  _vm._v("$750")
                                ])
                              ]
                            )
                          ]
                        )
                      ])
                    ]
                  )
                ])
              ])
            ]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/site_modules/categories/components/Product.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/site_modules/categories/components/Product.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Product_vue_vue_type_template_id_22c966a7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product.vue?vue&type=template&id=22c966a7& */ "./resources/js/site_modules/categories/components/Product.vue?vue&type=template&id=22c966a7&");
/* harmony import */ var _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product.vue?vue&type=script&lang=js& */ "./resources/js/site_modules/categories/components/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Product_vue_vue_type_template_id_22c966a7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Product_vue_vue_type_template_id_22c966a7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/site_modules/categories/components/Product.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/site_modules/categories/components/Product.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/site_modules/categories/components/Product.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/site_modules/categories/components/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/site_modules/categories/components/Product.vue?vue&type=template&id=22c966a7&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/site_modules/categories/components/Product.vue?vue&type=template&id=22c966a7& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_22c966a7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=template&id=22c966a7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/site_modules/categories/components/Product.vue?vue&type=template&id=22c966a7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_22c966a7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_22c966a7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/site_modules/categories/pages/ProductByCategory.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/site_modules/categories/pages/ProductByCategory.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductByCategory_vue_vue_type_template_id_9d1ed6d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductByCategory.vue?vue&type=template&id=9d1ed6d0& */ "./resources/js/site_modules/categories/pages/ProductByCategory.vue?vue&type=template&id=9d1ed6d0&");
/* harmony import */ var _ProductByCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductByCategory.vue?vue&type=script&lang=js& */ "./resources/js/site_modules/categories/pages/ProductByCategory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductByCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductByCategory_vue_vue_type_template_id_9d1ed6d0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductByCategory_vue_vue_type_template_id_9d1ed6d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/site_modules/categories/pages/ProductByCategory.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/site_modules/categories/pages/ProductByCategory.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/site_modules/categories/pages/ProductByCategory.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductByCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductByCategory.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/site_modules/categories/pages/ProductByCategory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductByCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/site_modules/categories/pages/ProductByCategory.vue?vue&type=template&id=9d1ed6d0&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/site_modules/categories/pages/ProductByCategory.vue?vue&type=template&id=9d1ed6d0& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductByCategory_vue_vue_type_template_id_9d1ed6d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductByCategory.vue?vue&type=template&id=9d1ed6d0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/site_modules/categories/pages/ProductByCategory.vue?vue&type=template&id=9d1ed6d0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductByCategory_vue_vue_type_template_id_9d1ed6d0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductByCategory_vue_vue_type_template_id_9d1ed6d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);