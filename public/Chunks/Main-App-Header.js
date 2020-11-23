(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Chunks/Main-App-Header"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/site/comonents/Header.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/site/comonents/Header.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LanguegeSwitcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LanguegeSwitcher */ "./resources/js/site/comonents/LanguegeSwitcher.vue");
/* harmony import */ var _StickyHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StickyHeader */ "./resources/js/site/comonents/StickyHeader.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    LanguegeSwitcher: _LanguegeSwitcher__WEBPACK_IMPORTED_MODULE_0__["default"],
    StickyHeader: _StickyHeader__WEBPACK_IMPORTED_MODULE_1__["default"] //  CategoriesSubcategories: () => import(/* webpackChunkName: "Chunks/Site-CategoriesSubcategories" */ '../comonents/Category/CategoriesSubcategories')

  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])("categoriesStoreIndex", ["nested_categories"])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])("categoriesStoreIndex", ["getCategoriesSubcategories"])),
  created: function created() {
    if (this.nested_categories.length < 1) {
      this.getCategoriesSubcategories();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/site/comonents/LanguegeSwitcher.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/site/comonents/LanguegeSwitcher.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../i18n */ "./resources/js/i18n.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      langArray: _i18n__WEBPACK_IMPORTED_MODULE_1__["languages"]
    };
  },
  filters: {
    showable: function showable(text) {
      return text == "bn" ? "বাংলা" : "English";
    },
    capitalize: function capitalize(text) {
      return text.toUpperCase();
    }
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("settingsStoreIndex", ["changeLocale"])),
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("settingsStoreIndex", ["locale"]))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/site/comonents/StickyHeader.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/site/comonents/StickyHeader.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "StickyHeader",
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("categoriesStoreIndex", ["nested_categories"])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("categoriesStoreIndex", ["getCategoriesSubcategories"])),
  created: function created() {
    if (this.nested_categories.length < 1) {
      this.getCategoriesSubcategories();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/site/comonents/Header.vue?vue&type=template&id=5d1aface&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/site/comonents/Header.vue?vue&type=template&id=5d1aface& ***!
  \*************************************************************************************************************************************************************************************************************/
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
  return _c(
    "header",
    { staticClass: "header header-10 header-intro-clearance" },
    [
      _c("div", { staticClass: "header-top" }, [
        _c("div", { staticClass: "container" }, [
          _c(
            "div",
            { staticClass: "header-left" },
            [
              _c("router-link", { attrs: { to: "tel:+8801798037068" } }, [
                _c("i", { staticClass: "icon-phone" }),
                _vm._v("Call: +8801798037068 ")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "header-right" }, [
            _c("ul", { staticClass: "top-menu" }, [
              _c(
                "li",
                [
                  _c("router-link", { attrs: { to: "#" } }, [_vm._v("Links")]),
                  _vm._v(" "),
                  _c(
                    "ul",
                    [
                      _c("li", [
                        _c(
                          "div",
                          { staticClass: "header-dropdown" },
                          [
                            _c("router-link", { attrs: { to: "#" } }, [
                              _vm._v("USD")
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "header-menu" }, [
                              _c("ul", [
                                _c(
                                  "li",
                                  [
                                    _c("router-link", { attrs: { to: "#" } }, [
                                      _vm._v("Tk")
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "li",
                                  [
                                    _c("router-link", { attrs: { to: "#" } }, [
                                      _vm._v("Usd")
                                    ])
                                  ],
                                  1
                                )
                              ])
                            ])
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("LanguegeSwitcher"),
                      _vm._v(" "),
                      _c("li", { staticClass: "login" }, [
                        _c(
                          "a",
                          {
                            attrs: {
                              href: "#signin-modal",
                              "data-toggle": "modal"
                            }
                          },
                          [
                            _vm._v(
                              "\n                                    " +
                                _vm._s(_vm.$t("auth.signin")) +
                                " / " +
                                _vm._s(_vm.$t("auth.signup")) +
                                " "
                            )
                          ]
                        )
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "header-middle" }, [
        _c("div", { staticClass: "container" }, [
          _c(
            "div",
            { staticClass: "header-left" },
            [
              _vm._m(0),
              _vm._v(" "),
              _c("router-link", { attrs: { to: "/" } }, [
                _c("img", {
                  staticStyle: { "max-width": "150px" },
                  attrs: { src: "/storage/site/logo.png", alt: "Site Logo" }
                })
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "header-center" }, [
            _c(
              "div",
              {
                staticClass:
                  "header-search header-search-extended header-search-visible header-search-no-radius d-none d-lg-block"
              },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "search-toggle",
                    attrs: { to: "#", role: "button" }
                  },
                  [_c("i", { staticClass: "icon-search" })]
                ),
                _vm._v(" "),
                _vm._m(1)
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "header-right" }, [
            _c(
              "div",
              { staticClass: "header-dropdown-link" },
              [
                _c(
                  "div",
                  { staticClass: "dropdown compare-dropdown" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "dropdown-toggle",
                        attrs: {
                          to: "#",
                          role: "button",
                          "data-toggle": "dropdown",
                          "aria-haspopup": "true",
                          "aria-expanded": "false",
                          "data-display": "static",
                          title: "Compare Products",
                          "aria-label": "Compare Products"
                        }
                      },
                      [
                        _c("i", { staticClass: "icon-random" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "compare-txt" }, [
                          _vm._v("Compare")
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "dropdown-menu dropdown-menu-right" },
                      [
                        _c("ul", { staticClass: "compare-products" }, [
                          _c(
                            "li",
                            { staticClass: "compare-product" },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "btn-remove",
                                  attrs: { to: "#", title: "Remove Product" }
                                },
                                [_c("i", { staticClass: "icon-close" })]
                              ),
                              _vm._v(" "),
                              _c(
                                "h4",
                                { staticClass: "compare-product-title" },
                                [
                                  _c(
                                    "router-link",
                                    { attrs: { to: "product.html" } },
                                    [_vm._v("Blue Night Dress")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            { staticClass: "compare-product" },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "btn-remove",
                                  attrs: { to: "#", title: "Remove Product" }
                                },
                                [_c("i", { staticClass: "icon-close" })]
                              ),
                              _vm._v(" "),
                              _c(
                                "h4",
                                { staticClass: "compare-product-title" },
                                [
                                  _c(
                                    "router-link",
                                    { attrs: { to: "product.html" } },
                                    [_vm._v("White Long Skirt")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "compare-actions" },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "action-link",
                                attrs: { to: "#" }
                              },
                              [_vm._v("Clear All")]
                            ),
                            _vm._v(" "),
                            _c(
                              "router-link",
                              {
                                staticClass: "btn btn-outline-primary-2",
                                attrs: { to: "#" }
                              },
                              [
                                _c("span", [_vm._v(_vm._s(_vm.$t("compare")))]),
                                _c("i", {
                                  staticClass: "icon-long-arrow-right"
                                })
                              ]
                            )
                          ],
                          1
                        )
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "wishlist-link",
                    attrs: { to: "wishlist.html" }
                  },
                  [
                    _c("i", { staticClass: "icon-heart-o" }),
                    _vm._v(" "),
                    _c("span", { staticClass: "wishlist-count" }, [
                      _vm._v("3")
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "wishlist-txt" }, [
                      _vm._v(_vm._s(_vm.$t("wishlist")))
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "dropdown cart-dropdown" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "dropdown-toggle",
                        attrs: {
                          to: "#",
                          role: "button",
                          "data-toggle": "dropdown",
                          "aria-haspopup": "true",
                          "aria-expanded": "false",
                          "data-display": "static"
                        }
                      },
                      [
                        _c("i", { staticClass: "icon-shopping-cart" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "cart-count" }, [
                          _vm._v("2")
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "cart-txt" }, [
                          _vm._v(" " + _vm._s(_vm.$t("cart")) + "  ")
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "dropdown-menu dropdown-menu-right" },
                      [
                        _c("div", { staticClass: "dropdown-cart-products" }, [
                          _c(
                            "div",
                            { staticClass: "product" },
                            [
                              _c(
                                "div",
                                { staticClass: "product-cart-details" },
                                [
                                  _c(
                                    "h4",
                                    { staticClass: "product-title" },
                                    [
                                      _c(
                                        "router-link",
                                        { attrs: { to: "product.html" } },
                                        [
                                          _vm._v(
                                            "Beige knitted elastic runner shoes"
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm._m(2)
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "figure",
                                { staticClass: "product-image-container" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "product-image",
                                      attrs: { to: "product.html" }
                                    },
                                    [
                                      _c("img", {
                                        attrs: {
                                          src:
                                            "/assets/images/products/cart/product-1.jpg",
                                          alt: "product"
                                        }
                                      })
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "router-link",
                                {
                                  staticClass: "btn-remove",
                                  attrs: { to: "#", title: "Remove Product" }
                                },
                                [_c("i", { staticClass: "icon-close" })]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "product" },
                            [
                              _c(
                                "div",
                                { staticClass: "product-cart-details" },
                                [
                                  _c(
                                    "h4",
                                    { staticClass: "product-title" },
                                    [
                                      _c(
                                        "router-link",
                                        { attrs: { to: "product.html" } },
                                        [
                                          _vm._v(
                                            "Blue utility pinafore denim dress"
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm._m(3)
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "figure",
                                { staticClass: "product-image-container" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "product-image",
                                      attrs: { to: "product" }
                                    },
                                    [
                                      _c("img", {
                                        attrs: {
                                          src:
                                            "/assets/images/products/cart/product-2.jpg",
                                          alt: "product"
                                        }
                                      })
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "router-link",
                                {
                                  staticClass: "btn-remove",
                                  attrs: { to: "#", title: "Remove Product" }
                                },
                                [_c("i", { staticClass: "icon-close" })]
                              )
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _vm._m(4),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "dropdown-cart-action" },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "btn btn-primary",
                                attrs: { to: "cart" }
                              },
                              [_vm._v("View Cart")]
                            ),
                            _vm._v(" "),
                            _c(
                              "router-link",
                              {
                                staticClass: "btn btn-outline-primary-2",
                                attrs: { to: "checkout" }
                              },
                              [
                                _c("span", [_vm._v("Checkout")]),
                                _c("i", {
                                  staticClass: "icon-long-arrow-right"
                                })
                              ]
                            )
                          ],
                          1
                        )
                      ]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: {
            id: "signin-modal",
            tabindex: "-1",
            role: "dialog",
            "aria-hidden": "true"
          }
        },
        [
          _c(
            "div",
            {
              staticClass: "modal-dialog modal-dialog-centered",
              attrs: { role: "document" }
            },
            [
              _c("div", { staticClass: "modal-content" }, [
                _c("div", { staticClass: "modal-body" }, [
                  _vm._m(5),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-box" }, [
                    _c("div", { staticClass: "form-tab" }, [
                      _c(
                        "ul",
                        {
                          staticClass: "nav nav-pills nav-fill nav-border-anim",
                          attrs: { role: "tablist" }
                        },
                        [
                          _c(
                            "li",
                            { staticClass: "nav-item" },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "nav-link active",
                                  attrs: {
                                    id: "signin-tab",
                                    "data-toggle": "tab",
                                    to: "#signin",
                                    role: "tab",
                                    "aria-controls": "signin",
                                    "aria-selected": "true"
                                  }
                                },
                                [_vm._v("Sign In")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            { staticClass: "nav-item" },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "nav-link",
                                  attrs: {
                                    id: "register-tab",
                                    "data-toggle": "tab",
                                    to: "#register",
                                    role: "tab",
                                    "aria-controls": "register",
                                    "aria-selected": "false"
                                  }
                                },
                                [_vm._v("Register")]
                              )
                            ],
                            1
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "tab-content",
                          attrs: { id: "tab-content-5" }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "tab-pane fade show active",
                              attrs: {
                                id: "signin",
                                role: "tabpanel",
                                "aria-labelledby": "signin-tab"
                              }
                            },
                            [
                              _c("form", { attrs: { action: "#" } }, [
                                _vm._m(6),
                                _vm._v(" "),
                                _vm._m(7),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "form-footer" },
                                  [
                                    _vm._m(8),
                                    _vm._v(" "),
                                    _vm._m(9),
                                    _vm._v(" "),
                                    _c(
                                      "router-link",
                                      {
                                        staticClass: "forgot-link",
                                        attrs: { to: "#" }
                                      },
                                      [_vm._v("Forgot Your Password?")]
                                    )
                                  ],
                                  1
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "form-choice" }, [
                                _c("p", { staticClass: "text-center" }, [
                                  _vm._v("or sign in with")
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "row" }, [
                                  _c(
                                    "div",
                                    { staticClass: "col-sm-6" },
                                    [
                                      _c(
                                        "router-link",
                                        {
                                          staticClass: "btn btn-login btn-g",
                                          attrs: { to: "#" }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "icon-google"
                                          }),
                                          _vm._v(
                                            "\n                                                    Login With Google\n                                                "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-sm-6" },
                                    [
                                      _c(
                                        "router-link",
                                        {
                                          staticClass: "btn btn-login btn-f",
                                          attrs: { to: "#" }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "icon-facebook-f"
                                          }),
                                          _vm._v(
                                            "\n                                                    Login With Facebook\n                                                "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ])
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "tab-pane fade",
                              attrs: {
                                id: "register",
                                role: "tabpanel",
                                "aria-labelledby": "register-tab"
                              }
                            },
                            [
                              _c("form", { attrs: { action: "#" } }, [
                                _vm._m(10),
                                _vm._v(" "),
                                _vm._m(11),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-footer" }, [
                                  _vm._m(12),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "custom-control custom-checkbox"
                                    },
                                    [
                                      _c("input", {
                                        staticClass: "custom-control-input",
                                        attrs: {
                                          type: "checkbox",
                                          id: "register-policy",
                                          required: ""
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "label",
                                        {
                                          staticClass: "custom-control-label",
                                          attrs: { for: "register-policy" }
                                        },
                                        [
                                          _vm._v("I agree to the "),
                                          _c(
                                            "router-link",
                                            { attrs: { to: "#" } },
                                            [_vm._v("privacy policy")]
                                          ),
                                          _vm._v(" *")
                                        ],
                                        1
                                      )
                                    ]
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "form-choice" }, [
                                _c("p", { staticClass: "text-center" }, [
                                  _vm._v("or sign in with")
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "row" }, [
                                  _c(
                                    "div",
                                    { staticClass: "col-sm-6" },
                                    [
                                      _c(
                                        "router-link",
                                        {
                                          staticClass: "btn btn-login btn-g",
                                          attrs: { to: "#" }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "icon-google"
                                          }),
                                          _vm._v(
                                            "\n                                                    Login With Google\n                                                "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-sm-6" },
                                    [
                                      _c(
                                        "router-link",
                                        {
                                          staticClass: "btn btn-login  btn-f",
                                          attrs: { to: "#" }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "icon-facebook-f"
                                          }),
                                          _vm._v(
                                            "\n                                                    Login With Facebook\n                                                "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ])
                              ])
                            ]
                          )
                        ]
                      )
                    ])
                  ])
                ])
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c("StickyHeader")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("button", { staticClass: "mobile-menu-toggler" }, [
      _c("span", { staticClass: "sr-only" }, [_vm._v("Toggle mobile menu")]),
      _vm._v(" "),
      _c("i", { staticClass: "icon-bars" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("form", { attrs: { action: "#", method: "get" } }, [
      _c("div", { staticClass: "header-search-wrapper search-wrapper-wide" }, [
        _c("div", { staticClass: "select-custom" }, [
          _c("select", { attrs: { id: "cat", name: "cat" } }, [
            _c("option", { attrs: { value: "" } }, [_vm._v("All Departments")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "1" } }, [_vm._v("Fashion")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "2", disabled: "" } }, [
              _vm._v("- Women")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("label", { staticClass: "sr-only", attrs: { for: "q" } }, [
          _vm._v("Search")
        ]),
        _vm._v(" "),
        _c("input", {
          staticClass: "form-control",
          attrs: {
            type: "search",
            name: "q",
            id: "q",
            placeholder: "Search product ...",
            required: ""
          }
        }),
        _vm._v(" "),
        _c(
          "button",
          { staticClass: "btn btn-primary", attrs: { type: "submit" } },
          [_c("i", { staticClass: "icon-search" })]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "cart-product-info" }, [
      _c("span", { staticClass: "cart-product-qty" }, [_vm._v("1")]),
      _vm._v(
        "\n                                            x $84.00\n                                        "
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "cart-product-info" }, [
      _c("span", { staticClass: "cart-product-qty" }, [_vm._v("1")]),
      _vm._v(
        "\n                                            x $76.00\n                                        "
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "dropdown-cart-total" }, [
      _c("span", [_vm._v("Total")]),
      _vm._v(" "),
      _c("span", { staticClass: "cart-total-price" }, [_vm._v("$160.00")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Close"
        }
      },
      [
        _c("span", { attrs: { "aria-hidden": "true" } }, [
          _c("i", { staticClass: "icon-close" })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "singin-email" } }, [
        _vm._v("Username or email address *")
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: {
          type: "text",
          id: "singin-email",
          name: "singin-email",
          required: ""
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "singin-password" } }, [
        _vm._v("Password *")
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: {
          type: "password",
          id: "singin-password",
          name: "singin-password",
          required: ""
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      { staticClass: "btn btn-outline-primary-2", attrs: { type: "submit" } },
      [
        _c("span", [_vm._v("LOG IN")]),
        _vm._v(" "),
        _c("i", { staticClass: "icon-long-arrow-right" })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "custom-control custom-checkbox" }, [
      _c("input", {
        staticClass: "custom-control-input",
        attrs: { type: "checkbox", id: "signin-remember" }
      }),
      _vm._v(" "),
      _c(
        "label",
        {
          staticClass: "custom-control-label",
          attrs: { for: "signin-remember" }
        },
        [_vm._v("Remember Me")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "register-email" } }, [
        _vm._v("Your email address *")
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: {
          type: "email",
          id: "register-email",
          name: "register-email",
          required: ""
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "register-password" } }, [
        _vm._v("Password *")
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: {
          type: "password",
          id: "register-password",
          name: "register-password",
          required: ""
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      { staticClass: "btn btn-outline-primary-2", attrs: { type: "submit" } },
      [
        _c("span", [_vm._v("SIGN UP")]),
        _vm._v(" "),
        _c("i", { staticClass: "icon-long-arrow-right" })
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/site/comonents/LanguegeSwitcher.vue?vue&type=template&id=25e0fb44&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/site/comonents/LanguegeSwitcher.vue?vue&type=template&id=25e0fb44& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c("li", [
    _c("div", { staticClass: "header-dropdown d-flex" }, [
      _c("a", { attrs: { href: "" } }, [
        _c("img", {
          staticClass: "mr-2",
          attrs: { src: "/storage/flags/" + _vm.locale + ".png", width: "25px" }
        }),
        _vm._v(
          " " +
            _vm._s(_vm._f("capitalize")(_vm._f("showable")(_vm.locale))) +
            " "
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "header-menu" }, [
        _c(
          "ul",
          _vm._l(_vm.langArray, function(lang, i) {
            return _c(
              "li",
              {
                key: "lang" + i,
                staticClass: "d-flex list-item",
                attrs: { value: lang },
                on: {
                  click: function($event) {
                    return _vm.changeLocale(lang)
                  }
                }
              },
              [
                _c("img", {
                  staticClass: "w-25 p-2",
                  attrs: {
                    src: "/storage/flags/" + lang + ".png",
                    alt: _vm.locale
                  }
                }),
                _vm._v(
                  "\n                " +
                    _vm._s(_vm._f("capitalize")(_vm.$t(lang))) +
                    " "
                )
              ]
            )
          }),
          0
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/site/comonents/StickyHeader.vue?vue&type=template&id=94581252&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/site/comonents/StickyHeader.vue?vue&type=template&id=94581252& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "header-bottom sticky-header" }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "header-left" }, [
        _c(
          "div",
          {
            staticClass: "dropdown category-dropdown show is-on",
            attrs: { "data-visible": "true" }
          },
          [
            _c(
              "router-link",
              {
                staticClass: "dropdown-toggle",
                attrs: {
                  to: "#",
                  role: "button",
                  "data-toggle": "dropdown",
                  "aria-haspopup": "true",
                  "aria-expanded": "false",
                  "data-display": "static",
                  title: "Browse Categories"
                }
              },
              [
                _vm._v(
                  "\n                    Browse Categories\n                "
                )
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "dropdown-menu show" }, [
              _c("nav", { staticClass: "side-nav" }, [
                _c(
                  "ul",
                  { staticClass: "menu-vertical sf-arrows" },
                  _vm._l(_vm.nested_categories, function(cat) {
                    return _c(
                      "li",
                      { key: cat.id, staticClass: "megamenu-container" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "sf-with-ul",
                            attrs: { to: "/category/" + cat.slug }
                          },
                          [_vm._v(" " + _vm._s(cat.name))]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "megamenu" }, [
                          _c("div", { staticClass: "row no-gutters" }, [
                            _c("div", { staticClass: "col-md-8" }, [
                              _c("div", { staticClass: "menu-col" }, [
                                _c("div", { staticClass: "row" }, [
                                  _c("div", { staticClass: "col-md-6" }, [
                                    _c(
                                      "ul",
                                      _vm._l(cat.subcategories, function(sub) {
                                        return _c(
                                          "li",
                                          { key: sub.id },
                                          [
                                            _c(
                                              "router-link",
                                              {
                                                attrs: {
                                                  to: "/category/" + sub.slug
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  " " + _vm._s(sub.name) + " "
                                                )
                                              ]
                                            )
                                          ],
                                          1
                                        )
                                      }),
                                      0
                                    )
                                  ])
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-4" }, [
                              _c(
                                "div",
                                { staticClass: "banner banner-overlay" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "banner banner-menu",
                                      attrs: { to: "/category/" + cat.slug }
                                    },
                                    [
                                      _c("img", {
                                        attrs: { src: cat.icon, alt: cat.name }
                                      })
                                    ]
                                  )
                                ],
                                1
                              )
                            ])
                          ])
                        ])
                      ],
                      1
                    )
                  }),
                  0
                )
              ])
            ])
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "header-center" }, [
        _c("nav", { staticClass: "main-nav" }, [
          _c("ul", { staticClass: "menu sf-arrows" }, [
            _c(
              "li",
              { staticClass: "megamenu-container active" },
              [
                _c(
                  "router-link",
                  { staticClass: "sf-with-ul", attrs: { to: "index.html" } },
                  [_vm._v("Home")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "megamenu demo" }, [
                  _c("div", { staticClass: "menu-col" }, [
                    _c("div", { staticClass: "menu-title" }, [
                      _vm._v("Choose your demo")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "demo-list" }, [
                      _c(
                        "div",
                        { staticClass: "demo-item" },
                        [
                          _c("router-link", { attrs: { to: "index-1.html" } }, [
                            _c("span", {
                              staticClass: "demo-bg",
                              staticStyle: {
                                "background-image":
                                  "url(assets/images/menu/demos/1.jpg)"
                              }
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "demo-title" }, [
                              _vm._v("01 - furniture store")
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "demo-item hidden" },
                        [
                          _c(
                            "router-link",
                            { attrs: { to: "index-24.html" } },
                            [
                              _c("span", {
                                staticClass: "demo-bg",
                                staticStyle: {
                                  "background-image":
                                    "url(assets/images/menu/demos/24.jpg)"
                                }
                              }),
                              _vm._v(" "),
                              _c("span", { staticClass: "demo-title" }, [
                                _vm._v("24 - extreme sport store")
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "megamenu-action text-center" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass:
                              "btn btn-outline-primary-2 view-all-demos",
                            attrs: { to: "#" }
                          },
                          [
                            _c("span", [_vm._v("View All Demos")]),
                            _c("i", { staticClass: "icon-long-arrow-right" })
                          ]
                        )
                      ],
                      1
                    )
                  ])
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _c(
                  "router-link",
                  { staticClass: "sf-with-ul", attrs: { to: "category.html" } },
                  [_vm._v("Shop")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "megamenu megamenu-md" }, [
                  _c("div", { staticClass: "row no-gutters" }, [
                    _c("div", { staticClass: "col-md-8" }, [
                      _c("div", { staticClass: "menu-col" }, [
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-md-6" }, [
                            _c("div", { staticClass: "menu-title" }, [
                              _vm._v("Shop with sidebar")
                            ]),
                            _vm._v(" "),
                            _c("ul", [
                              _c(
                                "li",
                                [
                                  _c(
                                    "router-link",
                                    { attrs: { to: "category-list.html" } },
                                    [_vm._v("Shop List")]
                                  )
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "menu-title" }, [
                              _vm._v("Shop no sidebar")
                            ]),
                            _vm._v(" "),
                            _c("ul", [
                              _c(
                                "li",
                                [
                                  _c(
                                    "router-link",
                                    { attrs: { to: "category-boxed" } },
                                    [
                                      _c("span", [
                                        _vm._v("Shop Boxed No Sidebar"),
                                        _c(
                                          "span",
                                          { staticClass: "tip tip-hot" },
                                          [_vm._v("Hot")]
                                        )
                                      ])
                                    ]
                                  )
                                ],
                                1
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-6" }, [
                            _c("div", { staticClass: "menu-title" }, [
                              _vm._v("Product Category")
                            ]),
                            _vm._v(" "),
                            _c("ul", [
                              _c(
                                "li",
                                [
                                  _c(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: "product-category-boxed.html"
                                      }
                                    },
                                    [_vm._v("Product Category Boxed")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                [
                                  _c(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: "product-category-fullwidth.html"
                                      }
                                    },
                                    [
                                      _c("span", [
                                        _vm._v("Product Category Fullwidth"),
                                        _c(
                                          "span",
                                          { staticClass: "tip tip-new" },
                                          [_vm._v("New")]
                                        )
                                      ])
                                    ]
                                  )
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "menu-title" }, [
                              _vm._v("Shop Pages")
                            ]),
                            _vm._v(" "),
                            _c("ul", [
                              _c(
                                "li",
                                [
                                  _c(
                                    "router-link",
                                    { attrs: { to: "cart.html" } },
                                    [_vm._v("Cart")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                [
                                  _c(
                                    "router-link",
                                    { attrs: { to: "checkout.html" } },
                                    [_vm._v("Checkout")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                [
                                  _c(
                                    "router-link",
                                    { attrs: { to: "wishlist.html" } },
                                    [_vm._v("Wishlist")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                [
                                  _c(
                                    "router-link",
                                    { attrs: { to: "dashboard.html" } },
                                    [_vm._v("My Account")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                [
                                  _c("router-link", { attrs: { to: "#" } }, [
                                    _vm._v("Lookbook")
                                  ])
                                ],
                                1
                              )
                            ])
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-4" }, [
                      _c(
                        "div",
                        { staticClass: "banner banner-overlay" },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "banner banner-menu",
                              attrs: { to: "category.html" }
                            },
                            [
                              _c("img", {
                                attrs: {
                                  src: "assets/images/menu/banner-1.jpg",
                                  alt: "Banner"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "banner-content banner-content-top"
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "banner-title text-white" },
                                    [
                                      _vm._v("Last "),
                                      _c("br"),
                                      _vm._v("Chance"),
                                      _c("br"),
                                      _c("span", [
                                        _c("strong", [_vm._v("Sale")])
                                      ])
                                    ]
                                  )
                                ]
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ])
                  ])
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _c(
                  "router-link",
                  { staticClass: "sf-with-ul", attrs: { to: "product.html" } },
                  [_vm._v("Product")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "megamenu megamenu-sm" }, [
                  _c("div", { staticClass: "row no-gutters" }, [
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("div", { staticClass: "menu-col" }, [
                        _c("div", { staticClass: "menu-title" }, [
                          _vm._v("Product Details")
                        ]),
                        _vm._v(" "),
                        _c("ul", [
                          _c(
                            "li",
                            [
                              _c(
                                "router-link",
                                { attrs: { to: "product.html" } },
                                [_vm._v("Default")]
                              )
                            ],
                            1
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        { staticClass: "banner banner-overlay" },
                        [
                          _c(
                            "router-link",
                            { attrs: { to: "category.html" } },
                            [
                              _c("img", {
                                attrs: {
                                  src: "assets/images/menu/banner-2.jpg",
                                  alt: "Banner"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "banner-content banner-content-bottom"
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "banner-title text-white" },
                                    [
                                      _vm._v("New Trends"),
                                      _c("br"),
                                      _c("span", [
                                        _c("strong", [_vm._v("spring 2019")])
                                      ])
                                    ]
                                  )
                                ]
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ])
                  ])
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _c(
                  "router-link",
                  { staticClass: "sf-with-ul", attrs: { to: "#" } },
                  [_vm._v("Pages")]
                ),
                _vm._v(" "),
                _c("ul", [
                  _c(
                    "li",
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "sf-with-ul",
                          attrs: { to: "about.html" }
                        },
                        [_vm._v("About")]
                      ),
                      _vm._v(" "),
                      _c("ul", [
                        _c(
                          "li",
                          [
                            _c("router-link", { attrs: { to: "about.html" } }, [
                              _vm._v("About 01")
                            ])
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "sf-with-ul",
                          attrs: { to: "contact.html" }
                        },
                        [_vm._v("Contact")]
                      ),
                      _vm._v(" "),
                      _c("ul", [
                        _c(
                          "li",
                          [
                            _c(
                              "router-link",
                              { attrs: { to: "contact.html" } },
                              [_vm._v("Contact 01")]
                            )
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    [
                      _c("router-link", { attrs: { to: "login.html" } }, [
                        _vm._v("Login")
                      ])
                    ],
                    1
                  )
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _c(
                  "router-link",
                  { staticClass: "sf-with-ul", attrs: { to: "blog.html" } },
                  [_vm._v("Blog")]
                ),
                _vm._v(" "),
                _c("ul", [
                  _c(
                    "li",
                    [
                      _c("router-link", { attrs: { to: "blog.html" } }, [
                        _vm._v("Classic")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    [
                      _c(
                        "router-link",
                        { attrs: { to: "blog-listing.html" } },
                        [_vm._v("Listing")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    [
                      _c("router-link", { attrs: { to: "#" } }, [
                        _vm._v("Grid")
                      ]),
                      _vm._v(" "),
                      _c("ul", [
                        _c(
                          "li",
                          [
                            _c(
                              "router-link",
                              { attrs: { to: "blog-grid-2cols.html" } },
                              [_vm._v("Grid 2 columns")]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "li",
                          [
                            _c(
                              "router-link",
                              { attrs: { to: "blog-grid-3cols.html" } },
                              [_vm._v("Grid 3 columns")]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "li",
                          [
                            _c(
                              "router-link",
                              { attrs: { to: "blog-grid-4cols.html" } },
                              [_vm._v("Grid 4 columns")]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "li",
                          [
                            _c(
                              "router-link",
                              { attrs: { to: "blog-grid-sidebar.html" } },
                              [_vm._v("Grid sidebar")]
                            )
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    [
                      _c("router-link", { attrs: { to: "#" } }, [
                        _vm._v("Masonry")
                      ]),
                      _vm._v(" "),
                      _c("ul", [
                        _c(
                          "li",
                          [
                            _c(
                              "router-link",
                              { attrs: { to: "blog-masonry-2cols.html" } },
                              [_vm._v("Masonry 2 columns")]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "li",
                          [
                            _c(
                              "router-link",
                              { attrs: { to: "blog-masonry-3cols.html" } },
                              [_vm._v("Masonry 3 columns")]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "li",
                          [
                            _c(
                              "router-link",
                              { attrs: { to: "blog-masonry-4cols.html" } },
                              [_vm._v("Masonry 4 columns")]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "li",
                          [
                            _c(
                              "router-link",
                              { attrs: { to: "blog-masonry-sidebar.html" } },
                              [_vm._v("Masonry sidebar")]
                            )
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    [
                      _c("router-link", { attrs: { to: "#" } }, [
                        _vm._v("Mask")
                      ]),
                      _vm._v(" "),
                      _c("ul", [
                        _c(
                          "li",
                          [
                            _c(
                              "router-link",
                              { attrs: { to: "blog-mask-grid.html" } },
                              [_vm._v("Blog mask grid")]
                            )
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    [
                      _c("router-link", { attrs: { to: "#" } }, [
                        _vm._v("Single Post")
                      ]),
                      _vm._v(" "),
                      _c("ul", [
                        _c(
                          "li",
                          [
                            _c(
                              "router-link",
                              { attrs: { to: "single.html" } },
                              [_vm._v("Default with sidebar")]
                            )
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  )
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _c(
                  "router-link",
                  {
                    staticClass: "sf-with-ul",
                    attrs: { to: "elements-list.html" }
                  },
                  [_vm._v("Elements")]
                ),
                _vm._v(" "),
                _c("ul", [
                  _c(
                    "li",
                    [
                      _c(
                        "router-link",
                        { attrs: { to: "elements-products" } },
                        [_vm._v("Products")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    [
                      _c(
                        "router-link",
                        { attrs: { to: "elements-typography" } },
                        [_vm._v("Typography")]
                      )
                    ],
                    1
                  )
                ])
              ],
              1
            )
          ])
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
    return _c("div", { staticClass: "header-right" }, [
      _c("i", { staticClass: "la la-lightbulb-o" }),
      _c("p", [_vm._v("Clearance Up to 30% Off")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/site/comonents/Header.vue":
/*!************************************************!*\
  !*** ./resources/js/site/comonents/Header.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header_vue_vue_type_template_id_5d1aface___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=5d1aface& */ "./resources/js/site/comonents/Header.vue?vue&type=template&id=5d1aface&");
/* harmony import */ var _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue?vue&type=script&lang=js& */ "./resources/js/site/comonents/Header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Header_vue_vue_type_template_id_5d1aface___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Header_vue_vue_type_template_id_5d1aface___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/site/comonents/Header.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/site/comonents/Header.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/site/comonents/Header.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/site/comonents/Header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/site/comonents/Header.vue?vue&type=template&id=5d1aface&":
/*!*******************************************************************************!*\
  !*** ./resources/js/site/comonents/Header.vue?vue&type=template&id=5d1aface& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_5d1aface___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=template&id=5d1aface& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/site/comonents/Header.vue?vue&type=template&id=5d1aface&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_5d1aface___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_5d1aface___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/site/comonents/LanguegeSwitcher.vue":
/*!**********************************************************!*\
  !*** ./resources/js/site/comonents/LanguegeSwitcher.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LanguegeSwitcher_vue_vue_type_template_id_25e0fb44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LanguegeSwitcher.vue?vue&type=template&id=25e0fb44& */ "./resources/js/site/comonents/LanguegeSwitcher.vue?vue&type=template&id=25e0fb44&");
/* harmony import */ var _LanguegeSwitcher_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LanguegeSwitcher.vue?vue&type=script&lang=js& */ "./resources/js/site/comonents/LanguegeSwitcher.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LanguegeSwitcher_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LanguegeSwitcher_vue_vue_type_template_id_25e0fb44___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LanguegeSwitcher_vue_vue_type_template_id_25e0fb44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/site/comonents/LanguegeSwitcher.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/site/comonents/LanguegeSwitcher.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/site/comonents/LanguegeSwitcher.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguegeSwitcher_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./LanguegeSwitcher.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/site/comonents/LanguegeSwitcher.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguegeSwitcher_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/site/comonents/LanguegeSwitcher.vue?vue&type=template&id=25e0fb44&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/site/comonents/LanguegeSwitcher.vue?vue&type=template&id=25e0fb44& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguegeSwitcher_vue_vue_type_template_id_25e0fb44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./LanguegeSwitcher.vue?vue&type=template&id=25e0fb44& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/site/comonents/LanguegeSwitcher.vue?vue&type=template&id=25e0fb44&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguegeSwitcher_vue_vue_type_template_id_25e0fb44___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguegeSwitcher_vue_vue_type_template_id_25e0fb44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/site/comonents/StickyHeader.vue":
/*!******************************************************!*\
  !*** ./resources/js/site/comonents/StickyHeader.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StickyHeader_vue_vue_type_template_id_94581252___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StickyHeader.vue?vue&type=template&id=94581252& */ "./resources/js/site/comonents/StickyHeader.vue?vue&type=template&id=94581252&");
/* harmony import */ var _StickyHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StickyHeader.vue?vue&type=script&lang=js& */ "./resources/js/site/comonents/StickyHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StickyHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StickyHeader_vue_vue_type_template_id_94581252___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StickyHeader_vue_vue_type_template_id_94581252___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/site/comonents/StickyHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/site/comonents/StickyHeader.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/site/comonents/StickyHeader.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StickyHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./StickyHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/site/comonents/StickyHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StickyHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/site/comonents/StickyHeader.vue?vue&type=template&id=94581252&":
/*!*************************************************************************************!*\
  !*** ./resources/js/site/comonents/StickyHeader.vue?vue&type=template&id=94581252& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StickyHeader_vue_vue_type_template_id_94581252___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./StickyHeader.vue?vue&type=template&id=94581252& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/site/comonents/StickyHeader.vue?vue&type=template&id=94581252&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StickyHeader_vue_vue_type_template_id_94581252___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StickyHeader_vue_vue_type_template_id_94581252___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);