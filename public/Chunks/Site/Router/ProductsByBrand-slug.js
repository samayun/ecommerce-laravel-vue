(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Chunks/Site/Router/ProductsByBrand-slug"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/site_modules/brands/pages/ProductsByBrand.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/site_modules/brands/pages/ProductsByBrand.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ProductsByBrand",
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("brandsStoreIndex", ["brand", "filter"])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("settingsStoreIndex", ["layout_type"])),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])("settingsStoreIndex", ["SET_LAYOUT"])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("brandsStoreIndex", ["getBrand"])),
  created: function created() {
    var slug = this.$route.params.slug;

    if (this.brand.slug != slug) {
      this.getBrand(slug);
    }

    var _this = this;

    $Bus.$on("404", function () {
      alert("404 Not Found");
    });
  },
  watch: {
    "$route.params.slug": "getBrand",
    "filter.brand": function filterBrand(e) {
      this.getBrand(this.$route.params.slug);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/site_modules/brands/pages/ProductsByBrand.vue?vue&type=template&id=5857aa20&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/site_modules/brands/pages/ProductsByBrand.vue?vue&type=template&id=5857aa20& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    _vm.brand
      ? _c(
          "div",
          {
            staticClass: "page-header text-center",
            style: "background-image: url(" + _vm.brand.logo + ")"
          },
          [
            _c("div", { staticClass: "container" }, [
              _c("h1", { staticClass: "page-title" }, [
                _vm._v("\n        " + _vm._s(_vm.brand.name) + "\n        "),
                _c("span", [_vm._v(" " + _vm._s(_vm.brand.slug) + " ")])
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
          _c("div", { staticClass: "col-lg-12" }, [
            _c("div", { staticClass: "toolbox" }, [
              _c("div", { staticClass: "toolbox-left" }, [
                _c("div", { staticClass: "toolbox-info" }, [
                  _vm._v("\n                Showing\n                "),
                  _c("span", [
                    _vm._v(
                      "\n                  " +
                        _vm._s(_vm.brand.products_count) +
                        " of\n                  " +
                        _vm._s(_vm.brand.products_count)
                    )
                  ]),
                  _vm._v("\n                Products\n              ")
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "toolbox-right" }, [
                _c("div", { staticClass: "toolbox-sort" }, [
                  _c("label", { attrs: { for: "sortby" } }, [
                    _vm._v("Sort by:")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "Select-custom" }, [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.filter.brand,
                            expression: "filter.brand"
                          }
                        ],
                        staticClass: "form-control",
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.filter,
                              "brand",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c(
                          "option",
                          { attrs: { disabled: "", value: "", selected: "" } },
                          [
                            _vm._v(
                              "\n                      Please Select one\n                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "low_high" } }, [
                          _vm._v("Low To High Prices")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "high_low" } }, [
                          _vm._v("High To Low prices")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "toolbox-layout" }, [
                  _c(
                    "a",
                    {
                      staticClass: "btn-layout",
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
                      staticClass: "btn-layout",
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
                _vm._l(_vm.brand.products, function(pro) {
                  return _c("Product", { key: pro.id, attrs: { product: pro } })
                }),
                1
              )
            ]),
            _vm._v(" "),
            _vm._m(1)
          ])
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
              [_vm._v("\n          Grid 4 Columns\n        ")]
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
              _vm._v("Prev\n                ")
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
              _vm._v("\n                  Next\n                  "),
              _c("span", { attrs: { "aria-hidden": "true" } }, [
                _c("i", { staticClass: "icon-long-arrow-right" })
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

/***/ "./resources/js/site_modules/brands/pages/ProductsByBrand.vue":
/*!********************************************************************!*\
  !*** ./resources/js/site_modules/brands/pages/ProductsByBrand.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductsByBrand_vue_vue_type_template_id_5857aa20___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductsByBrand.vue?vue&type=template&id=5857aa20& */ "./resources/js/site_modules/brands/pages/ProductsByBrand.vue?vue&type=template&id=5857aa20&");
/* harmony import */ var _ProductsByBrand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductsByBrand.vue?vue&type=script&lang=js& */ "./resources/js/site_modules/brands/pages/ProductsByBrand.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductsByBrand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductsByBrand_vue_vue_type_template_id_5857aa20___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductsByBrand_vue_vue_type_template_id_5857aa20___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/site_modules/brands/pages/ProductsByBrand.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/site_modules/brands/pages/ProductsByBrand.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/site_modules/brands/pages/ProductsByBrand.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsByBrand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductsByBrand.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/site_modules/brands/pages/ProductsByBrand.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsByBrand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/site_modules/brands/pages/ProductsByBrand.vue?vue&type=template&id=5857aa20&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/site_modules/brands/pages/ProductsByBrand.vue?vue&type=template&id=5857aa20& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsByBrand_vue_vue_type_template_id_5857aa20___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductsByBrand.vue?vue&type=template&id=5857aa20& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/site_modules/brands/pages/ProductsByBrand.vue?vue&type=template&id=5857aa20&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsByBrand_vue_vue_type_template_id_5857aa20___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsByBrand_vue_vue_type_template_id_5857aa20___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);