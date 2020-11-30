(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Chunks/Site/Router/Product-slug"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/site_modules/products/pages/single.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/site_modules/products/pages/single.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("productsStoreIndex", ["product"])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("productsStoreIndex", ["getProduct"])),
  watch: {
    '$route.params.slug': "getProduct"
  },
  created: function created() {
    var slug = this.$route.params.slug;

    if (this.product.slug != slug) {
      this.getProduct(slug);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/site_modules/products/pages/single.vue?vue&type=template&id=7e99403c&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/site_modules/products/pages/single.vue?vue&type=template&id=7e99403c& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "page-content mt-5" }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "product-details-top" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-6" }, [
            _c(
              "div",
              { staticClass: "product-gallery product-gallery-vertical" },
              [
                _c("div", { staticClass: "row" }, [
                  _c(
                    "figure",
                    { staticClass: "product-main-image" },
                    [
                      _c("vueMagnifier", {
                        attrs: {
                          "small-img": _vm.product.image,
                          "big-img": _vm.product.image
                        }
                      }),
                      _vm._v(" "),
                      _vm._m(0)
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "product-image-gallery",
                      attrs: { id: "product-zoom-gallery" }
                    },
                    _vm._l(_vm.product.images, function(img) {
                      return _c(
                        "a",
                        {
                          key: img.id,
                          staticClass: "product-gallery-item",
                          attrs: {
                            href: "",
                            "data-image": img.url,
                            "data-zoom-image": img.url
                          }
                        },
                        [
                          _c("img", {
                            attrs: { src: img.url, alt: _vm.product.name }
                          })
                        ]
                      )
                    }),
                    0
                  )
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6" }, [
            _c(
              "div",
              { staticClass: "product-details" },
              [
                _c("h1", { staticClass: "product-title" }, [
                  _vm._v(
                    " " + _vm._s(_vm.product ? _vm.product.name : "") + " "
                  )
                ]),
                _vm._v(" "),
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "product-price" }, [
                  _vm._v(
                    "\n                            $ " +
                      _vm._s(_vm.product ? _vm.product.price : "") +
                      "\n                        "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "product-content" }, [
                  _c("p", [
                    _vm._v(
                      " " +
                        _vm._s(_vm.product ? _vm.product.description : "") +
                        " "
                    )
                  ])
                ]),
                _vm._v(" "),
                _vm._l(_vm.product.attributes, function(a) {
                  return _c(
                    "div",
                    {
                      key: a.id,
                      staticClass: "details-filter-row details-row-size"
                    },
                    [
                      _c("label", { attrs: { for: "size" } }, [
                        _vm._v(" " + _vm._s(a.type.name) + " :")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "select-custom" }, [
                        _c(
                          "select",
                          {
                            staticClass: "form-control",
                            attrs: { name: "size", id: "size" }
                          },
                          [
                            _c(
                              "option",
                              { attrs: { value: "#", selected: "selected" } },
                              [_vm._v("Select a " + _vm._s(a.type.name) + " ")]
                            ),
                            _vm._v(" "),
                            _c("option", { domProps: { value: a.slug } }, [
                              _vm._v(_vm._s(a.name))
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _vm._m(2, true)
                    ]
                  )
                }),
                _vm._v(" "),
                _vm._m(3),
                _vm._v(" "),
                _vm._m(4),
                _vm._v(" "),
                _c("div", { staticClass: "product-details-footer" }, [
                  _c(
                    "div",
                    { staticClass: "product-cat" },
                    [
                      _c("span", [_vm._v("Category:")]),
                      _vm._v(" "),
                      _vm._l(_vm.product.categories, function(cat) {
                        return _c(
                          "router-link",
                          {
                            key: cat.id,
                            attrs: { to: "/category/" + cat.slug }
                          },
                          [_vm._v("  " + _vm._s(cat.name) + "  ")]
                        )
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _vm._m(5)
                ])
              ],
              2
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "product-details-tab" }, [
        _vm._m(6),
        _vm._v(" "),
        _c("div", { staticClass: "tab-content" }, [
          _c(
            "div",
            {
              staticClass: "tab-pane fade show active",
              attrs: {
                id: "product-desc-tab",
                role: "tabpanel",
                "aria-labelledby": "product-desc-link"
              }
            },
            [
              _c("div", { staticClass: "product-desc-content" }, [
                _vm._v(
                  "\n                         " +
                    _vm._s(_vm.product ? _vm.product.description : "") +
                    "\n                    "
                )
              ])
            ]
          ),
          _vm._v(" "),
          _vm._m(7),
          _vm._v(" "),
          _vm._m(8),
          _vm._v(" "),
          _vm._m(9)
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
      "a",
      {
        staticClass: "btn-product-gallery",
        attrs: { href: "#", id: "btn-product-gallery" }
      },
      [_c("i", { staticClass: "icon-arrows" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ratings-container" }, [
      _c("div", { staticClass: "ratings" }, [
        _c("div", { staticClass: "ratings-val", staticStyle: { width: "80%" } })
      ]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "ratings-text",
          attrs: { href: "#product-review-link", id: "review-link" }
        },
        [_vm._v("( 2 Reviews )")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "size-guide", attrs: { href: "#" } }, [
      _c("i", { staticClass: "icon-th-list" }),
      _vm._v("size guide")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "details-filter-row details-row-size" }, [
      _c("label", { attrs: { for: "qty" } }, [_vm._v("Qty:")]),
      _vm._v(" "),
      _c("div", { staticClass: "product-details-quantity" }, [
        _c("input", {
          staticClass: "form-control",
          attrs: {
            type: "number",
            id: "qty",
            value: "1",
            min: "1",
            max: "10",
            step: "1",
            "data-decimals": "0",
            required: ""
          }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "product-details-action" }, [
      _c("a", { staticClass: "btn-product btn-cart", attrs: { href: "#" } }, [
        _c("span", [_vm._v("add to cart")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "details-action-wrapper" }, [
        _c(
          "a",
          {
            staticClass: "btn-product btn-wishlist",
            attrs: { href: "#", title: "Wishlist" }
          },
          [_c("span", [_vm._v("Add to Wishlist")])]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "btn-product btn-compare",
            attrs: { href: "#", title: "Compare" }
          },
          [_c("span", [_vm._v("Add to Compare")])]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "social-icons social-icons-sm" }, [
      _c("span", { staticClass: "social-label" }, [_vm._v("Share:")]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "social-icon",
          attrs: { href: "#", title: "Facebook", target: "_blank" }
        },
        [_c("i", { staticClass: "icon-facebook-f" })]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "social-icon",
          attrs: { href: "#", title: "Twitter", target: "_blank" }
        },
        [_c("i", { staticClass: "icon-twitter" })]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "social-icon",
          attrs: { href: "#", title: "Instagram", target: "_blank" }
        },
        [_c("i", { staticClass: "icon-instagram" })]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "social-icon",
          attrs: { href: "#", title: "Pinterest", target: "_blank" }
        },
        [_c("i", { staticClass: "icon-pinterest" })]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "ul",
      {
        staticClass: "nav nav-pills justify-content-center",
        attrs: { role: "tablist" }
      },
      [
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link active",
              attrs: {
                id: "product-desc-link",
                "data-toggle": "tab",
                href: "#product-desc-tab",
                role: "tab",
                "aria-controls": "product-desc-tab",
                "aria-selected": "true"
              }
            },
            [_vm._v("Description")]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link",
              attrs: {
                id: "product-info-link",
                "data-toggle": "tab",
                href: "#product-info-tab",
                role: "tab",
                "aria-controls": "product-info-tab",
                "aria-selected": "false"
              }
            },
            [_vm._v("Additional information")]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link",
              attrs: {
                id: "product-shipping-link",
                "data-toggle": "tab",
                href: "#product-shipping-tab",
                role: "tab",
                "aria-controls": "product-shipping-tab",
                "aria-selected": "false"
              }
            },
            [_vm._v("Shipping & Returns")]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link",
              attrs: {
                id: "product-review-link",
                "data-toggle": "tab",
                href: "#product-review-tab",
                role: "tab",
                "aria-controls": "product-review-tab",
                "aria-selected": "false"
              }
            },
            [_vm._v("Reviews (2)")]
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
        staticClass: "tab-pane fade",
        attrs: {
          id: "product-info-tab",
          role: "tabpanel",
          "aria-labelledby": "product-info-link"
        }
      },
      [
        _c("div", { staticClass: "product-desc-content" }, [
          _c("h3", [_vm._v("Information")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. "
            )
          ]),
          _vm._v(" "),
          _c("h3", [_vm._v("Fabric & care")]),
          _vm._v(" "),
          _c("ul", [
            _c("li", [_vm._v("Faux suede fabric")]),
            _vm._v(" "),
            _c("li", [_vm._v("Gold tone metal hoop handles.")]),
            _vm._v(" "),
            _c("li", [_vm._v("RI branding")]),
            _vm._v(" "),
            _c("li", [_vm._v("Snake print trim interior ")]),
            _vm._v(" "),
            _c("li", [_vm._v("Adjustable cross body strap")]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                " Height: 31cm; Width: 32cm; Depth: 12cm; Handle Drop: 61cm"
              )
            ])
          ]),
          _vm._v(" "),
          _c("h3", [_vm._v("Size")]),
          _vm._v(" "),
          _c("p", [_vm._v("one size")])
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
        staticClass: "tab-pane fade",
        attrs: {
          id: "product-shipping-tab",
          role: "tabpanel",
          "aria-labelledby": "product-shipping-link"
        }
      },
      [
        _c("div", { staticClass: "product-desc-content" }, [
          _c("h3", [_vm._v("Delivery & returns")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "We deliver to over 100 countries around the world. For full details of the delivery options we offer, please view our "
            ),
            _c("a", { attrs: { href: "#" } }, [_vm._v("Delivery information")]),
            _c("br"),
            _vm._v(
              "\n                        We hope you’ll love every purchase, but if you ever need to return an item you can do so within a month of receipt. For full details of how to make a return, please view our "
            ),
            _c("a", { attrs: { href: "#" } }, [_vm._v("Returns information")])
          ])
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
        staticClass: "tab-pane fade",
        attrs: {
          id: "product-review-tab",
          role: "tabpanel",
          "aria-labelledby": "product-review-link"
        }
      },
      [
        _c("div", { staticClass: "reviews" }, [
          _c("h3", [_vm._v("Reviews (2)")]),
          _vm._v(" "),
          _c("div", { staticClass: "review" }, [
            _c("div", { staticClass: "row no-gutters" }, [
              _c("div", { staticClass: "col-auto" }, [
                _c("h4", [
                  _c("a", { attrs: { href: "#" } }, [_vm._v("Samanta J.")])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "ratings-container" }, [
                  _c("div", { staticClass: "ratings" }, [
                    _c("div", {
                      staticClass: "ratings-val",
                      staticStyle: { width: "80%" }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "review-date" }, [
                  _vm._v("6 days ago")
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col" }, [
                _c("h4", [_vm._v("Good, perfect size")]),
                _vm._v(" "),
                _c("div", { staticClass: "review-content" }, [
                  _c("p", [
                    _vm._v(
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!"
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "review-action" }, [
                  _c("a", { attrs: { href: "#" } }, [
                    _c("i", { staticClass: "icon-thumbs-up" }),
                    _vm._v("Helpful (2)")
                  ]),
                  _vm._v(" "),
                  _c("a", { attrs: { href: "#" } }, [
                    _c("i", { staticClass: "icon-thumbs-down" }),
                    _vm._v("Unhelpful (0)")
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "review" }, [
            _c("div", { staticClass: "row no-gutters" }, [
              _c("div", { staticClass: "col-auto" }, [
                _c("h4", [
                  _c("a", { attrs: { href: "#" } }, [_vm._v("John Doe")])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "ratings-container" }, [
                  _c("div", { staticClass: "ratings" }, [
                    _c("div", {
                      staticClass: "ratings-val",
                      staticStyle: { width: "100%" }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "review-date" }, [
                  _vm._v("5 days ago")
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col" }, [
                _c("h4", [_vm._v("Very good")]),
                _vm._v(" "),
                _c("div", { staticClass: "review-content" }, [
                  _c("p", [
                    _vm._v(
                      "Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!"
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "review-action" }, [
                  _c("a", { attrs: { href: "#" } }, [
                    _c("i", { staticClass: "icon-thumbs-up" }),
                    _vm._v("Helpful (0)")
                  ]),
                  _vm._v(" "),
                  _c("a", { attrs: { href: "#" } }, [
                    _c("i", { staticClass: "icon-thumbs-down" }),
                    _vm._v("Unhelpful (0)")
                  ])
                ])
              ])
            ])
          ])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/site_modules/products/pages/single.vue":
/*!*************************************************************!*\
  !*** ./resources/js/site_modules/products/pages/single.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _single_vue_vue_type_template_id_7e99403c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./single.vue?vue&type=template&id=7e99403c& */ "./resources/js/site_modules/products/pages/single.vue?vue&type=template&id=7e99403c&");
/* harmony import */ var _single_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./single.vue?vue&type=script&lang=js& */ "./resources/js/site_modules/products/pages/single.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _single_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _single_vue_vue_type_template_id_7e99403c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _single_vue_vue_type_template_id_7e99403c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/site_modules/products/pages/single.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/site_modules/products/pages/single.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/site_modules/products/pages/single.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_single_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./single.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/site_modules/products/pages/single.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_single_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/site_modules/products/pages/single.vue?vue&type=template&id=7e99403c&":
/*!********************************************************************************************!*\
  !*** ./resources/js/site_modules/products/pages/single.vue?vue&type=template&id=7e99403c& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_single_vue_vue_type_template_id_7e99403c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./single.vue?vue&type=template&id=7e99403c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/site_modules/products/pages/single.vue?vue&type=template&id=7e99403c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_single_vue_vue_type_template_id_7e99403c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_single_vue_vue_type_template_id_7e99403c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);